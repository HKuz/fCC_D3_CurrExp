// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
