// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")



/*
For the new rectangle element to appear on the page properly, you need to fill
in a few more attributes. First off, you have to specify where SVG should start
drawing the rectangle.

SVG uses a basic `x, y` coordinate system to position elements, and the origin is
in the top-left corner. This means higher `x` values push an element farther to
the right, and higher `y` values push it farther down.


*/
