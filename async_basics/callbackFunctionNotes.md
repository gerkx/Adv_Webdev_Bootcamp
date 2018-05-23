#A callback function is:
    * a function that is passed into another function as a parameter then invoked by that other function:
    * example:
        function callback(){
            console.log("coming from callback");
        }
        function higherOrder(fn){
            console.log("Calling callback function right after this line");
            fn();
            console.log("The previous line was the callback invocation");
        }
        higherOrder(callback);


# A higher order function is a function that accepts another function as a parameter

# Callbacks are used for:
    1. Advanced Array Methods
    2. Browser Events
    3. AJAX Requests
    4. React Development

# WET CODE Example:
    function sendMessageConsole(message){
        console.log(message);
    }
    function sendMessageAlert(message){
        alert(message);
    }
    function sendMessageConfirm(message){
        return confirm(message);
    }
    sendMessageAlert("Lots of dupes!");

# Dry it up with callback:
    function sendMessage(message, callback){
        return callback(message);
    }
    // using the callback for the console.log
    sendMessage("Message for console", console.log);
    // using the callback for the alert
    sendMessage("Message for console", alert);
    // usning the callback for the confirm fn
    var answer = sendMessage("are you sure?" confirm);

# Callbacks with fn declarations:
    function greet(name, formatterFn){
        return "hello " + formatterFn(name);
    }
    function upperCaseName(name){
        return name.toUpperCase();
    }
    greet("Laszlo", upperCaseName);

## Use Anon Functions
    function greet(name, formatterFn){
        return "hello " + formatterFn(name);
    }
    greet("Laszlo", function(name){
        return name + "!?!?!?!";
    });