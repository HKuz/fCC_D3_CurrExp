// GeoJSON data to draw country outlines
const mapPath = "./worldTopo.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const format = d3.format(",");
const width = 1000;
const height = 650;
const scale = width / (2 * Math.PI);

const svg = d3.select("#map")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

const projection = d3.geoMercator()
                     .scale(scale)
                     .translate([width / 2, height / 2]);

const path = d3.geoPath()
               .projection(projection);

const color = d3.scaleThreshold()
                .domain([
                  500000,
                  1000000,
                  10000000,
                  50000000,
                  75000000,
                  250000000,
                  1500000000
                ])
                .range(d3.schemeYlOrRd[8]);

// Create promises to retrieve CSV population data and geoJSON topography data
const getCSVData = d3.csv(popPath);
const getJSONData = d3.json(mapPath);

Promise.all([getCSVData, getJSONData]).then(function(values) {
  const population = values[0];
  const json = values[1];

  // Create a mapping of country name to population
  let popMap = {};
  population.forEach(d => {
    popMap[d.Name] = +d.Population
  });

  const countries = topojson.feature(json, json.objects.countries)
                            .features;

  svg.append("g")
     .attr("class", "countries")
     .selectAll("path")
     .data(countries)
     .enter().append("path")
       .attr("d", path)
       .style("stroke", "white")
       .style("fill", d => {
         const pop = popMap[d.properties.name];
         if (pop) {
           return color(pop);
         } else {
           return "gray"
         }
       });

  // Create paths for each country
  // svg.append("path")
  //    .datum(topojson.mesh(countries, (a, b) => a.id !== b.id))
  //    .attr("class", "names")
  //    .attr("d", path);

  // TODO: add tooltip
  // TODO: add pan and zoom functionality
});
