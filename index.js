// topoJSON data to draw country outlines. Source: Natural Earth
// const mapPath = "./worldTopo.json";
const mapPath = "./naturalEarthTopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const format = d3.format(",");
const width = 1000;
const height = 700;
const scale = width / (2 * Math.PI);

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(scale)
    .translate([width / 2, height / 2])
    .center([0, 20]);

const path = d3.geoPath()
    .projection(projection);

// Create a group to hold the countries
const g = svg.append("g");

// Create promises to retrieve CSV population data and geoJSON topography data
const getCSVData = d3.csv(popPath);
const getJSONData = d3.json(mapPath);

Promise.all([getCSVData, getJSONData]).then(function(values) {
  const population = values[0];
  const json = values[1];

  // Find the max and min population values in the data to better understand it
  const popArray = population.map(d => +d.Population);
  const low = d3.min(popArray);
  const high = d3.max(popArray);
  // console.log("Min population is: " + low);  // 56,171 -> Greenland
  // console.log("Max population is: " + high);  // 1,386,395,000 -> China

  // Create a scale to map population value to a color
  const color = d3.scaleThreshold()
      .domain([
        500000,
        5000000,
        10000000,
        25000000,
        50000000,
        100000000,
        1000000000])
      .range(d3.schemeYlOrRd[8]);

  // Create an object that maps country ID to population
  let popMap = {};
  population.forEach(d => {
    popMap[d.ID] = +d.Population
  });

  const countries = topojson.feature(json, json.objects.countries).features;

  // Set up tooltip
  const tooltip = d3.select("#tooltip")
      .classed("tooltip", true);

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter().append("path")
      .attr("class", "countries")
      .attr("d", path)
      .style("stroke", "white")
      .style("stroke-width", 0.5)
      .style("fill", d => {
        const pop = popMap[d.properties["ADM0_A3"]];
        if (pop) {
          return color(pop);
        } else {
          return "gray"
        }
      })
      .style("opacity", 0.75)
      .on("mouseover", function(d) {
        const pop = popMap[d.properties["ADM0_A3"]] ? format(popMap[d.properties["ADM0_A3"]]) : "NA";

        // Create HTML string with country name and population info
        let dataPoint = "<div>" +
            "<strong><span class='label'>Country: </span></strong>" +
            d.properties.NAME + "<br />" +
            "<strong><span class='label'>Population: </span></strong>" +
            pop +
            "</div>";

        tooltip.transition()
          .style("opacity", .9);

        tooltip.html(dataPoint)
          .style("left", (d3.event.pageX + 5) + "px")
          .style("top", (d3.event.pageY - 28) + "px");

        // Change the style of the selected country
        d3.select(this)
          .style("opacity", 1)
          .style("stroke-width", 2);
      })
      .on("mouseout", function(d) {
        // Fade tooltip when mouse leaves
        tooltip.transition()
          .style("opacity", 0);

        // Revert country to original style
        d3.select(this)
          .style("opacity", 0.75)
          .style("stroke-width", 0.5);
      });

  // Add map pan and zoom behavior
  const pad = 140;

  svg.call(d3.zoom()
      .scaleExtent([1, 8])
      .translateExtent([[0, -pad], [width, height + pad]])
      .on("zoom", zoomed)
  );

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }

  // Add legend to show population color thresholds
  const w = width / 2 - 12;
  const x_0 = width / 2;
  const y_0 = height - 120;
  const length = color.range().length;

  // Create a group to hold the legend
  const legend = svg.append("g")
      .attr("transform", "translate(" + x_0 + ", " + y_0 +")");

  const x = d3.scaleLinear()
      .domain([1, length - 1])
      .rangeRound([w / length, w * (length - 1) / length]);

  // Create rectangles for each color bar
  legend.selectAll("rect")
    .data(color.range())
    .join("rect")
      .attr("height", 10)
      .attr("x", (d, i) => x(i))
      .attr("width", w / length)
      .attr("fill", d => d);

  // Add legend title
  legend.append("text")
      .attr("y", - 10)
      .attr("fill", "black")
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text("Population Thresholds");

  // Add tick marks with population values under color bars
  legend.call(d3.axisBottom(x)
      .tickSize(15)
      .ticks(length - 1)
      .tickFormat(i => format(color.domain()[i - 1])))
    .select(".domain")
      .remove();
});
