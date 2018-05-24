var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    var url = 'https://api.github.com/users/gerkx';
    fetch(url)
        .then(chkRes)
        .then(function(req){
            console.log("we're cool");
            console.log(req.name);
        }).catch(function(err){
            console.log("Houston, we have a problem: ", err);
        });
});

function chkRes(stat){
    if(!stat.ok){
        throw Error(stat.status);
    }
    return stat.json();
}