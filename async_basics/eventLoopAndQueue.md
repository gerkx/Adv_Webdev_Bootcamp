# The Queue:
    * An ordered list of functions waiting to be placed on the stack
    * Functions in the queue are processed on a first in, first out basis
        ..* FIFO

# The Event Loop
    * Functionality in the JS runtime that checks the queue when the stack is empty
    * If the stack is empty, the front of the queue is placed in the stack

# Queue Example - Waiting for the stack to empty
    ```javascript
    function square(n){
        return n*n;
    }
    setTimeout(function(){
        console.log("callback was placed on the queue");
    }, 0);
    console.log(square(2));

    ```
    1. setTimeout is added to the queue
    2. procede to console.log(square), which invokes square
    3. square is added to the stack, returns the square, is removed from the stack
    4. return to console.log(square), which is added to the stack, printed to console, then removed from the stack
    5. reach end of script, emptying the stack.
    6. the event loop then adds the callback function from setTimeout to the stack.
    7. this invokes console.log which is added to the stack, printed, then removed.
    8. this finishes that function, emptying the stack and queue

# JavaScript is Single Threaded
    * Code execution is linear
    * Code that is running can't be interrupted by something else going on in the program

