# Arrow Functions
    * replace function with =>
    * you can put arrow functions on one line
        ..* Must omit the return keyword and curly braces

```javascript
var addOld = function(a+b){
    return a+b;
}

var addNew = (a+b) => {
    return a+b;
}

var addOneline = (a+b) => a+b;

```

# Gotchas
    * Don't get their own 'this' keyword
        ..* Inside of arrow funcs, 'this' has its original meaning from enclosing context
    * Don't get their own "arguments" keyword either

