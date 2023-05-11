const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const weatherApiAcessToken = '49573f8789c590770a8c4f38376ab5b0';

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    const LocationAPI = `https://geocode.maps.co/search?street=${req.body.street}&city=${req.body.city}&state=${req.body.state}&postalcode=${req.body.postalCode}&country=${req.body.country}`;

    async function getTemperature()
    {
        try{
            const locationAPIReq = await axios.get(LocationAPI);
            const lat = locationAPIReq.data[0].lat;
            const lon = locationAPIReq.data[0].lon;
            
            const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiAcessToken}&units=metric`;
            const weatherAPIReq = await axios.get(weatherAPI);
            const temperature = weatherAPIReq.data.main.temp;
            res.render('result', {temp: temperature});
        }catch(err){
            console.log(`Error: ${err}`);
            res.send(`Error: ${err}`)
        }
    }
    getTemperature();
});

app.listen(3000);