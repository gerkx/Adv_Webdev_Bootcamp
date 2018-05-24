$("#getBtn").click(function(){
    $.get("https://api.github.com/users/gerkx")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("ERROR");
    });
});

$("#postBtn").click(function(){
    var obj = {
        name: "Pat",
        city: "Salamanca",
    }
    $.post("https://doodleberry.com", obj)
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("error");
    })
});

$("#getJSONBtn").click(function(){
    $.getJSON("https://api.github.com/users/gerkx")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("ERROR");
    });
});