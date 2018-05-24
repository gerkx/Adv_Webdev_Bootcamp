var priceButton = document.querySelector("#price-button");
var price = document.querySelector("#price");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var currency = "EUR"

var num = 0;

window.onload = fetchPrice();

priceButton.addEventListener("click", fetchPrice);

setInterval(fetchPrice, 5000);

function fetchPrice(){
    console.log(url);
    num++;
    console.log("clicked ", num, " times");
    var XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.send();
    XHR.onreadystatechange = function(){
        if(XHR.status == 200 && XHR.readyState == 4){
            var data = JSON.parse(XHR.responseText).bpi[currency].rate;
            // console.log(data);
            price.textContent = data + "€";

        }
    }
}