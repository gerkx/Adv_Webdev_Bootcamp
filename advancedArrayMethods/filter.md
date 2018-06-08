# FILTER
    * creates a new array
    * iterates through an array
    * runs a callback function on each value in the array
    * if the callback function returns true, that value will be added to the array
    * if the callback function returns false, that value will be omitted from the array

## The result of the callback will ALWAYS be a boolean

```javascript
const arr = [1,2,3,4,5,6];
arr.filter(function(value, index, array){
    // no need for an if statement
    // just return an expression
    // that evaluates to true or false
    return value % 2 === 0;
});
```
