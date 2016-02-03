# static site built from:
- jade (html templating)
- sass (css)
- rollup and babel (js [es6])

# running
- `npm install`, `grunt build`, then `npm start`
- the static site will be available at http://localhost:8080

# developing
- `grunt watch`

# using rollup
- rollup handles imports of components into single js file - this allows for ES6 style exports.
- use in conjunction with babel via `rollup-plugin-babel`. this means babel will ignore imports, leaving them for rollup.
- using `rollup-plugin-npm` ensures rollup checks `node_modules` for imports.



# currently testing:

- d3.js (modules)
- canvas interaction methods
- responsiveness (pixel density and window size)

# current tasks:

- [x] draw line chart to canvas
- [x] redraw canvas on window resize
    - [x] apply translate to context after redraw
- [x] draw canvas based on pixel density of user device
- [ ] draw from json data rather than tsv
- [x] animate drawing of line chart
    - [ ] animate path method calls returned by d3
- [ ] interact with chart (hover / click / anything)
