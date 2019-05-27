// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries



/*
The first step to creating a map is getting the data that will describe the shape
of the countries. This information, along with various metadata, is saved in a
specific form of `JSON` - either GeoJSON or TopoJSON.

GeoJSON is a data structure that holds geographic features. They can include
points (such as a city), lines (a street), or complicated multipolygons (a
boundary) - along with their coordinates.

TopoJSON is an extension of GeoJSON, but it gets rid of duplication. A shared
boundary between two countries would be saved only once as an arc. This results
in smaller files that are easier to use in a web application.

There's a TopoJSON file named `naturalEarth50TopoJSON.json` in the project
folder. Using the `const` keyword, create a variable named `mapPath` that holds
the path to the file. You'll use this variable to tell D3 where to find the data
to draw the country outlines for your map.
*/

// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
