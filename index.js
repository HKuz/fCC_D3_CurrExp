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

d3.json(mapPath).then(function(json) {
  const countries = topojson.feature(json, json.objects.countries)
                            .features;

  svg.append("g")
     .attr("class", "countries")
     .selectAll("path")
     .data(countries)
     .enter().append("path")
       .attr("d", path)
       .style("fill", "gray")
       .style("stroke", "white");

  // Create paths for each country
  svg.append("path")
     .datum(topojson.mesh(countries, (a, b) => a.id !== b.id))
     .attr("class", "names")
     .attr("d", path);

}); // end d3.json promise
