// TopoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org



/*
As noted in the second comment, the map data source is Natural Earth. The datasets
are available to use in the public domain.

The "50" in the TopoJSON name is a reference to the level of detail (1:50m scale)
and is the middle option. It's a compromise between having enough country
information (it doesn't cut out smaller Caribbean islands) while keeping the file
size reasonable.

The population numbers you'll show in the map are 2017 data in a comma-separated
value (CSV) file we downloaded from the World Bank website. This file is in the
project folder under the name `worldPopulation.csv`.

Using the `const` keyword, create a variable named `popPath`, and set it to the
path for this population data file.
*/

// Setup
const svgWidth = 1000;
const svgHeight = 700;

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", wvgHeight);
