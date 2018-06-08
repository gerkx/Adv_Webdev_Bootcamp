# Map
    * creates new array
    * iterates through array
    * runs callback function on each val in the array
    * adds the result of the callback function to the array
    * returns the new array

## map always returns a new arraw of the SAME length


```javascript
var arr = [1,2,3];
arr.map(function(value, index, array){
    return value *2;
// returns [2,4,6]
});
```

## always return a value in the callback function or it the map will be an array of undefined