// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("x", 400)
    .attr("y", 300)
    .attr("width", 200)
    .attr("height", 100)
    .attr("fill", "yellow");

svg.append("path")



/*
You're going to use your `path` element to draw a simple triangle starting from
point (20, 20) on your `svg` element by using three commands.

As noted earlier, the `d` attribute takes a sequence of commands with coordinates.
The coordinate values don't have any unit associated with them, they're interpreted
in the user's local coordinate system.

All commands can be written with a capital letter, followed by absolute
coordinates on the page, or a lowercase letter, followed by relative movements.

Chain an `attr()` method to your `path` element to add the `d` attribute. Pass it
a value of `"M20 20"` - this is the "move" command, which is like moving your pen
to point (20, 20) to start drawing there.
*/
