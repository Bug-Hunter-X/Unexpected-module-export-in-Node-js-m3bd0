# Unexpected Module Export in Node.js

This repository demonstrates a common, yet subtle error in Node.js: exporting a function instead of an object, leading to unexpected runtime behavior in modules that import it.

## The Bug

The `bug.js` file contains a function `doSomething` that performs some processing on input data.  However, it exports the function directly using `module.exports = doSomething;`.  This can lead to errors if other parts of the application expect this module to export an object or a different kind of data structure.

## The Solution

The `bugSolution.js` file corrects this by wrapping the function within an object before exporting it:

```javascript
const doSomething = function(data) {
  if (data === null || typeof data !== 'object') {
    throw new Error('Invalid data');
  }
  // ... further processing of data ...
};

module.exports = { doSomething };
```

This ensures that dependent modules receive an object containing the `doSomething` function, preventing unexpected behavior and making the code more robust.