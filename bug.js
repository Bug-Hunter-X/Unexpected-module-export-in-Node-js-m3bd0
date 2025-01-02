```javascript
function doSomething(data) {
  if (data === null || typeof data !== 'object') {
    throw new Error('Invalid data');
  }
  // ... further processing of data ...
}

module.exports = doSomething; //This line could be the source of the error if other files expect an object and this exports a function
```