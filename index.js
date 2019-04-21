// GeoJSON data to draw country outlines
const mapURL = "https://d3js.org/world-110m.v1.json";

// TODO: find data to use to color each country (population?)

// Setup
const width = 960;
const height = 500;
const scale = 250;

let svg = d3.select("#map")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

let projection = d3.geoMercator()
                   .scale(scale)
                   .translate([width / 2, height / 2]);

let path = d3.geo.path().projection(projection);

d3.json(mapURL, function(json) {
        svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .style("fill", "gray")
           .style("stroke", "white");
});
