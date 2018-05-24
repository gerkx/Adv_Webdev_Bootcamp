var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

// listen
btn.addEventListener("click", function(){
    // make request
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var mssg = JSON.parse(XHR.responseText).message;
            img.src=mssg;
            // console.log(mssg);
        }
    }
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send()
});

