// Setup
const width = 1000;
const height = 700;


/*
Since you linked to a local copy of the D3 script in the `HTML` file, all of D3's
methods are available for you to use here.

There's a `d3.select()` method that allows you to grab an HTML element in the DOM
and work with it. You pass the method the item you want in quotes - D3 accepts
the same selectors that CSS does. For example, you would select an item with a
class `hello` with `d3.select(".hello")`.

You'll need the method here to add the `svg` element to the page, which is what
will hold the map.

Using the `const` keyword, declare a variable called `svg`. Set it equal to the
D3 `select` method, and pass the method the `map` `id` of the `div` you
created.
*/
