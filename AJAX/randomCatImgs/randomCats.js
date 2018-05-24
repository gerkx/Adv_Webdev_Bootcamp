$(document).ready(function(){
    $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done(function(data){

        $("#pic").attr("src", data.message);
    });
});

$("#btn").click(function(){
    $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done(function(data){
        $("#pic").attr("src", data.message);
    });
});