# forEach
    * iterates through an array
    * runs a callback function on each value in the array
    * returns "undefined"

## anatomy of a forEach loop:
```javascript
var arr = [1,2,3];
arr.forEach(function(value, index, array){
    // the callback function will be executed 3 times since the array length is 3
    console.log(value, index, array);
});
```
    * don't always need to use all 3 parms, but the order is important

