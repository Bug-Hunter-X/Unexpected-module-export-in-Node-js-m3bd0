```javascript
const doSomething = function(data) {
  if (data === null || typeof data !== 'object') {
    throw new Error('Invalid data');
  }
  // ... further processing of data ...
};

module.exports = { doSomething };
```