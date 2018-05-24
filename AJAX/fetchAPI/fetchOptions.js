// you can include in object in your fetch invocation with header info, body, credentials, etc

fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: "blue",
        login: "dude",
    }),
})
    .then(function(data){
        //do something
    })
    .catch(function(err){
        //handle error
    })
;