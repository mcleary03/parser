# visualizer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Thought Process

The `x` axis is TIME
The `y` axis is SCOPE 
The `z` axis is BLOCKS


## Ideas

* render cubes for each section of code
  * enter a cube to enter new view of that scope
    * all outer elements can hide (remember scope chain for backtracking)
    * render new cubes for sections within current scope
      * enter a cube to enter new view of that scope
      * all outer elements can hide (remember scope chain for backtracking)
        * repeat...
        * repeat...
          * repeat...
          * repeat....................
  

## TODO

need to set up y and z coords
create new components to represent axis
refactor scope to not represent an axis

make vr ui

add settings to control `universal-controls` easing and acceleration


maybe, scopes are dynamically sized based on amount of code that fills it
  scopes render 'axes' components that handle parsing on a specified axis
  * would be cool to see size differences in programs/dependencies


Need to make a 3D graph to represent connections between functions, dependencies, etc.





walk the tree to reformat into 'children' arrays so that vue3dtree works correctly.
* need to make unique identifier for each node and keep track for reference.
* need to write function to convert to 'children' arrays
  * rename 'body' arrays to 'children
  * wrap all objects in a 'children' array so they form a branch
  * add ui to control 2d rendering or hook into existing 3d model's 2d interface(probably better to get see both at once)
  