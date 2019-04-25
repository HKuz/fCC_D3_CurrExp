// GeoJSON data to draw country outlines
const mapPath = "./worldTopo.json";

// World population data. Source: https://databank.worldbank.org
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

// Create promises to retrieve CSV population data and geoJSON topography data
const getCSVData = d3.csv(popPath);
const getJSONData = d3.json(mapPath);

Promise.all([getCSVData, getJSONData]).then(function(values) {
  const population = values[0];
  const json = values[1];

  // Create a mapping of country name to population
  // const valueMap = population.forEach()

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
         // TODO: create scale and color countries based on population
         return "gray"
       });

  // Create paths for each country
  // svg.append("path")
  //    .datum(topojson.mesh(countries, (a, b) => a.id !== b.id))
  //    .attr("class", "names")
  //    .attr("d", path);

});
