# Weather Tracker
Weather Tracker shows the user live weather information about the location that he entered.

## Introduction
This application uses 2 APIs in order to show the user the correct informations about the live weather. 
It retrieve coordinates (longitude and latitude) of the loction entered by the user using the [Location API](####Location-API), then it uses the coordinates and the weather API in order to find the live weather information about the location.  

#### Location API
[Geocode](https://geocode.maps.co/) API is used to retrieve the coordinates (longitude and latitude) of the location entered by the user. 
The API uses data from [Open Street Map](https://www.openstreetmap.org/) to find the latitude and longitude coordinates. 
In order to have a correct input, the user must go to [Open Street Map](https://www.openstreetmap.org/) and type in the location desired to look up it's specific informations.

#### Weather API
[OpenWeather](https://openweathermap.org/api) API is used to retrieve weather data from specific coordinates (longitude and latitude).

We are only interested in the current data:
* temperature
* feels like temperature 
* lowest temperature 
* highest temperature 
* pressure
* humidity
* wind speed

