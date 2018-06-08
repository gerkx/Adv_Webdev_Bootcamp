# some
    * iterates through array
    * runs callback on each value
    * if callback returns true for at least one value, returns true
    * otherwise returns false

```javascript
const arr = [1,2,3];
arr.some(function(value, index, array){
    return value < 2;
});
```
## some ALWAYS returns a boolean

# every
    * iterates through an array
    * runs a callback on each value in the array
    * if the callback returns false for any single value, returns false

```javascript
const arr = [-1, 1, 2];
arr.every(function(value, index, array){
    return value > 0;
});
// returns false since -1 isn't greater than 0
```