#Promise: Conceptually:
    * A promise is an object that represents a task that will be completed in the future
    * Analogy: Taking a number at a govt office before you can be helped.
        ..* The piece of paper is the promise
        ..* The help you eventually get at the counter is the invoking of your callback

## Creating a promise:
    ```javascript
    var p1 = new Promise(function(resolve, reject){
        resolve([1,2,3,4]);
    });

    p1.then(function(arr){
        console.log("Promise p1 resolved with data: ", arr);
    });
    ```
## Wrap setTimeout with a Promise:
    ```javascript
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var randomInt = Math.floor(Math.random() * 10);
            resolve(randomInt);
        }, 4000);
    });

    promise.then(function(data){
        console.log("Rando int passed to resolve: ", data);
    });
    ```
# Promise Chaining:

## No promise example:
    ```javascript
    var counter = 0;
    setTimeout(function(){
        counter++;
        console.log("Counter: ", counter);
        setTimeout(function(){
            counter++;
            console.log("Counter: ", counter);
            setTimeout(function(){
                counter++;
                console.log("Counter: ", counter);
            }, 3000);
        }, 2000);
    }, 1000);
    ```
### This is bad b/c:
    * Hard to read code
    * Logic is difficult to reason about
    * Code is not modular

    ```javascript
        /////// chaining callbacks
        var promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                randomInt = Math.floor(Math.random() * 10);
                resolve(randomInt);
            }, 500);
        });

        promise.then(function(data){
            console.log("Random int passed to resolve: ", data);
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve(Math.floor(Math.random() * 10));
                }, 3000);
            });
        }).then(function(data){
            console.log("Second random into passed to resolve: ", data);
        });

        //// chaining vals
        var promise = new Promise(function(resolve, reject){
            resolve(5);
        });

        promise.then(function(data){
            return data*2;
        }).then(function(data){
            return data + 20;
        }).then(function(data){
            console.log(data); // returns 30
        });
    ```

# Refactor with promises
```javascript
// function declaration
var counter = 0;
function incCounter(){
    counter++;
    console.log("Counter: ", counter);
}

// create a runLater Function
function runLater(callback, timeInMs){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

/// chain promises

runLater(incCounter, 1000).then(function(){
    return runLater(incCounter, 2000);
}).then(function(){
    return runLater(incCounter, 3000);
}).then(function(){
    console.log("finished");
});

```

#Promises in Practice:
    * It is useful to understand how promises work (resolve, reject), but
    * in practice you will often use promises that are returned to you