var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");

/////////////
// XHR Method 
/////////////
var btnHXR = document.querySelector("#xhr");
btnHXR.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.send();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var mssg = JSON.parse(XHR.responseText)[0];
            quote.innerText = mssg;
        }
    }
});

////////////////
// Fetch Method 
///////////////
var btnFetch = document.querySelector("#fetch");
btnFetch.addEventListener("click", fetchQuote);
function fetchQuote(){
    fetch(url)
        .then(checkResponse)
        .then(parseJSON)
        .then(postQuote);
}
function checkResponse(stat){
    if(!stat.ok){
        throw Error(stat.status);
    }
    return stat
}
function parseJSON(data){
    return data.json().then(function(parsedData){
        return parsedData[0];
    });
}
function postQuote(data){
    quote.innerText = data;
}

////////////////
// jQuery Method
////////////////
$("#jquery").click(function(){
    $.getJSON(url)
    .done(function(data){
        $("#quote").text(data[0]);
    });
});

////////////////
// axios Method
////////////////
var btnAxios = document.querySelector("#axios");
btnAxios.addEventListener("click", function(){
    axios.get(url)
    .then(function(data){
        quote.innerText = data.data[0];
    });
});