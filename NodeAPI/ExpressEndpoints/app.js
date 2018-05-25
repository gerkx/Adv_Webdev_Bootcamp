var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
    methodOverride = require("method-override"),
    // local dependencies
    apiRoutes = require("./routes/api");


////////////
// middleware
////////////
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

////////////
// routes
////////////  
app.use("/api/temp", apiRoutes);

app.get("/", function(req, res){
    res.sendFile("index.html");
});

////////////
// listeners
////////////
app.listen(port, function(){
    console.log("app is running on port ", port);
})