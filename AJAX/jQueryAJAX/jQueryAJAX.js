$("#btn").click(function(){
   $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: 'json',
   })
   .done(function(data){
       console.log(data);
   }).fail(function(){
       alert("oh snapp");
   })
});
