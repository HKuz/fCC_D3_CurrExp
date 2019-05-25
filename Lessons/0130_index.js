

/*
With the project files set up, it's time to start laying out the map. First, you
need the data that will describe the shape of the countries. This coordinate
information, along with various metadata, is saved in a specific form of `JSON`
- either geoJSON or topoJSON.

We've saved a topoJSON file named `naturalEarth50TopoJSON.json` in the project
folder. Using the `const` keyword, create a variable named `mapPath` set to a
string of the file path.
*/

// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
