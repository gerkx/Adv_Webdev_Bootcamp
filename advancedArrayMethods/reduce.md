# reduce
    * accepts a callback function and an optional second parameter
    * iterates through an array
    * runs a callback on each value in the array
    * the first parameter to the callback is either the 1st value or optional 2nd
    * 1st parm is called the accumulator
    * the returned value from the callback becomes the new value of the accumulator

## Whatever is returned from the callback function becomes the new value of the accumulator

```javascript
const arr = [1,2,3,4,5];
arr.reduce(function(accum, nextVal,){
    return accum + nextVal;
});

const names = ["tim", "matt", "colt", "elie"];
let stringout = names.reduce(function(accum, nextVal){
    return accum += " " + nextVal;
}, "The instructors are");

console.log(stringout);
```