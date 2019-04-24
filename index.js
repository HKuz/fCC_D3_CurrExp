// GeoJSON data to draw country outlines
const mapURL = "https://d3js.org/world-110m.v1.json";

// TODO: find data to use to color each country (population?)
// World population source: https://databank.worldbank.org

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

d3.json(mapURL).then(function(json) {
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

  // svg.append('path')
  //   .datum(topojson.mesh(data.features, (a, b) => a.id !== b.id))
  //   .attr('class', 'names')
  //   .attr('d', path);

}); // end d3.json promise
