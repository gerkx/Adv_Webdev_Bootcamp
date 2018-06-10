# Rest
    * elipsee before final argument to use rest
    * last arugument will take the rest of the args and return as an array

```javascript
function printRest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1,2,3,4,5);

// 1
// 2
// [3,4,5]

let sumArgs = (...args) => args.reduce((acc, next) => acc + next);

```

# Spread
    * elipsee outside of args
    * used on arrays to spread each value out as CSV
    * useful when you have an array, but what you are working with expects CSV

```javascript
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

let combined = [...arr1, ...arr2, ...arr3];

const nums = [12,15,20];
let sumValues = (a,b,c) => a + b + c;

sumValues(...nums);  // 47

```