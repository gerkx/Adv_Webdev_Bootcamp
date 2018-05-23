// setTimeout
// a function that asynchronously invokes a callback after a delay in ms

function callback(){
    console.log("callback function");
}

var delay = 1000;
setTimeout(callback, delay);

setTimeout(function(){
    console.log("runs in about 2sec");
}, 2000);

// Cancelling setTimeout
var timerId = setTimeout(function(){
    console.log("this function will run in 30 sec")
}, 30000);

setTimeout(function(){
    console.log("cancelling the first setTimeout", timerId)
    clearTimeout(timerId);
}, 2000);


/////////////////
// setInterval
/////////////////

function intervalCallback(){
    console.log("callback is called continuously");
}
var repeat = 3000;

setInterval(intervalCallback, repeat);

var num = 0;
var intervalId = setInterval(function(){
    num++;
    console.log("num: ", num);
    if (num===4){
        clearInterval(intervalId);
    }
}, 1000);

