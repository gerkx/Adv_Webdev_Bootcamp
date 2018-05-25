$(document).ready(function(){
    $.getJSON("/api/temp")
        .then(addItems);

    bindkey(13, "#addBtn");
    
    $("#addBtn").click(function(event){
        createItem();
    
    });




});

function addItems(items){
    items.forEach(function(item){
        addItem(item);
    });
}

function createItem(data){
    var newItem = $("#newItemText").val();
    $.post("/api/temp", {name: newItem})
    .then(function(item){
        addItem(item);
    });
}

function addItem(item){
    var newItem = $('<li>' + item.name + '</li>');
    if(item.completed){
        newItem.addClass("strike");
    }
    $("#items").append(newItem);
}

function bindkey(keyCode, obj){
    $(document).bind("keypress", function(event){
        if(event.which == keyCode){
            $(obj).trigger("click");
        }
    });
}