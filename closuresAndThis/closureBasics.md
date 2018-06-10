# closure
    * a closure is a function that makes use of variables defined in outer functions that have previously returned

## Common to use closures to create private variables
    * in other languages, there exists support for vars that can't be modified externally: private variables.
    * not built into javascript, use closures to recreate them

```javascript
function counter(){
    let count = 0;
    return function inner(){
        count++;
        return count;
    }
}

let counter01 = counter();

counter01();  // 1
counter01();  // 2

let counter02 = counter();
counter02();  // 1
// counter01 doesn't alter counter's count variable
// closures make their own "copy" of the variable, available only to itself.
// backpack analogy from medium article


// another example
function classRoom(){
    var instructors = ["Pat", "Amanda"];
    return{
        getInstructors: function(){
            return instructors.slice();
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return.instructors.slice();
        }
    }
}
```