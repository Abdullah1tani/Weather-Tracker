const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){

    const query = "London";
    const apiKey = "49573f8789c590770a8c4f38376ab5b0";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/forecast?q="+ query + "&appid=" + apiKey + "&units=" + unit;

    const image = "https://openweathermap.org/img/wn/10d@2x.png";

    https.get(url, function(res2){

        res2.on("data", function(data){
            const weather = JSON.parse(data);


            const temp = weather.list[0].main.temp;
            

            res.write("<h1>The temperature in london is " + temp + "</h1>");
        });

    });

    https.get(image, function(res3){
        res3.on("data", function(data){
            const img = JSON.parse(data);
            res.write(img); 
        });
    });
    res.send();
});

app.listen(3000);