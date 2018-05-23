// Your goal is to Implement a function called countDown that accepts a time in seconds.
// The function will print the time remain to the console every second.
// Instead of printing 0, the function should print "Ring Ring Ring!!!".

function countDown(time){
    var countDown =setInterval(function(){
        if(time > 0){
            console.log("Time remaining: ", time);
            time--;
        }else{
            clearInterval(countDown);
            console.log("Ring Ring Ring!!!");
        }
    }, 1000);
}