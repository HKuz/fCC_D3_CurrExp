// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";



/*
As noted in the comment, the map data source is Natural Earth. The datasets are
available to use in the public domain.

The "50" in the TopoJSON name is a reference to the level of detail (1:50m scale)
and is the middle option. It's a compromise between having enough country
information while keeping the file size reasonable.

The population data you'll show in the map is from the World Bank. Using the
`const` keyword, create a variable named `popPath`, and set it to the path to
a file named `worldPopulation.csv` in the project folder.
*/

// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
