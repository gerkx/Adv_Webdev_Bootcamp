var btn = document.querySelector("#bottom");
var url = "https://randomuser.me/api/";

//profile vars
var fullName = document.querySelector("#fullname");
var username = document.querySelector(".user");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var photo = document.querySelector("#photo");

window.onload = randomUserProfile;

btn.addEventListener("click", randomUserProfile);

function randomUserProfile(){
    var url = "https://randomuser.me/api/";
    fetch(url)
        .then(checkResponse)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
}

function checkResponse(stat){
    if(!stat.ok){
        throw Error(stat.status);
    }
    return stat
}

function parseJSON(data){
    return data.json().then(function(parsedData){
        return parsedData.results[0];
    });    
}

function updateProfile(data){
    var name = capFirstLetter(data.name.first) + " " + capFirstLetter(data.name.last);
    fullName.innerText = name;
    username.innerText = data.login.username;
    email.innerText = "Email: " + data.email;
    city.innerText = "City: " + capFirstLetter(data.location.city);
    photo.src = data.picture.large;
}

function printError(err){
    console.log("Houston, we have a problem: ", err);
}

function capFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}