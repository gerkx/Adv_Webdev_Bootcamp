# what is the stack?
    * and ordered data structure
    * keeps track of fn invocations
    * part of the JS runtime
        ..* don't access it directly

# how does your code change the stack?
    * Whenever you invoke a fn, the details of the invocation are saved to the top of the stack
        ..* Pushed to the top
    * Whenever a function returns, the info about the invocation is taken off the top of the stack
        ..* Popped off the top

# Stack Example:
    1. function multiply(x,y){
    2.     return x*y;
    3. }
    4.
    5. var res = multiply(3,5);

## Stack Process:
    * Runtime arrives at line 5 of the main function. Line 5 is at the top of the stack
    * Sees that function 'multiply' is invoked. places multiply invocation on the top of the stack
    * Runtime goes through multiply fn, once line 2 finishes and 15 is returned, muliply is removed from stack
    * Runtime returns to line 5, defines res as 15
    * Runtime removes line 5 from the stack since the invoked function has been returned and value assigned
    * Stack is now empty

## the items in the stack are called stack frames
    * Frames store the function that was invoked
    * Also the parms that were passed to the fn
    * And the line number of the frame

# More thorough def of a stack:
    * An ordered set of stack frames.
    * Most recently invoked function is on the top of the stack
    * The bottom of the stack is the 1st function invoked
    * The stack is processed from top to bottom


# Heap Defined:
    * An area in memory where your data is stored

## Heap example:
    1. // The object is created in the heap obj is a reference to this object
    2. var obj = {firstName: "Tim", lastName: "Gerke"};
    3. 
    4. // New data is not created below, only a reference
    5. var referenceCopy = obj;


# A more advanced stack example:
    ```javascript
    function upperCaseFirst(word) {
        return word[0].toUpperCase() + word.slide(1);
    }
    
    function upperCaseWords(sentence){
        var words = sentence.split(" ");
        for(var i=0; i<words.length; i++){
            words[i] = upperCaseFirst(words[i]);
        }
            return words.join(" ");
        }
        
    upperCaseWords("start as lower case");
    ```

# stack breakdown
    1. Runtime reaches line 13 where fn "upperCaseWords" is invoked and adds to the stack (bottom)
    2. Runtime goes to function upperCaseWords and adds to the stack
    3. Runtime gets to the invocation of "split" and adds to the stack
    4. Runtime will execute split and store it in the heap for var words, then remove it from the stack
    5. Runtime arrives at invocation of upperCaseFirst and adds it to the stack
    6. Runtime goes to upperCaseFirst and finds the invocation of toUpperCase and adds it to the stack
    7. Runtime uppercases first letter, then removes toUpperCase from the stack
    8. Runtime continues until it reaches slice() and adds it to the stack
    9. Runtime executes slice, then removes it from the stack
    10. upperCaseFirst is now able to finish and returns the capitalized word, then runtime removes it from the stack
    11. Runtime returns to upperCaseFirst within upperCaseWords stores the returned vallue to the array
    12. Runtime continues to invocation of join(), adds it to the stack, executes and removes it from the stack
    13. upperCaseWords now finishes its return and runtime removes it from the stack
    14. the invocation of upperCaseWords is now done and the stack cleared

    
