const express = require("express");
const https = require("https");
const { response } = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

    const query = req.body.cityName;
    // apiKey is stored in a separate file.
    const apiKey = "";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response){

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDesc + "</p>");
            res.write("<h1>The temperature in " + query + " is "  + temp + " degrees Celsius.</h1>");
            res.write(`<img src=${imgUrl}>`);
            res.send();
        });
    });
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});