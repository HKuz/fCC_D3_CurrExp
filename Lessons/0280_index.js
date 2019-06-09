// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);



/*
You have TopoJSON data with feature coordinates that describe each country and
you have an `svg` element with an `x, y` coordinate system. Is the next step to
generate the `path` elements to draw the map? Not exactly.

The coordinates in the TopoJSON features describe the country as it is on Earth's
three-dimensional surface. You need to translate them so the countries display
properly on your two-dimensional `svg`. A map **projection** is a method for
making this conversion, and there are many different options.

D3 supports a variety of different projections - you normally choose the one that
best suits your project's needs. For this map, you'll use a classic Mercator
projection.

Using the `const` keyword, declare a variable named `projection` and set it to
`d3.geoMercator()`.
*/