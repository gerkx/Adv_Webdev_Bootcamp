var url = 'https://opentdb.com/api.php?amount=1'

axios.get(url)
    .then(function(res){
        console.log(res.data.results[0]);
    })
    .catch(handleErrors);

    function handleErrors(err){
        if(err.response){
            console.log("probem with response, ", err.response.status);
        }else if(err.request) {
            console.log("probem with request");
        }else{
            console.log("Error: ", err.message);
        }
    }
