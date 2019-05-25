// Setup
const width = 1000;
const height = 700;

const svg = d3.select("#map")
    .append("svg")


/*
The last piece to create the `svg` element is to tie the `width` and `height`
attributes to it. D3 has an `.attr()` method for this - it can be used on any
HTML element you're working with and takes two arguments. The first argument is
the name of the attribute as a string and the second argument is the value for it.

Chain two `attr` methods right after the `append` one. The first should add a
`"width"` attribute with the value set to your `width` variable. The second
should add a `"height"` attribute with the value set to your `height` variable.
*/