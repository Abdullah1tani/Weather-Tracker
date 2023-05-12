# Weather Tracker
Weather Tracker shows the user live weather information about the location that he entered.

## Introduction
---
This program uses the current APIs, libraries, and frameworks:
* [Geocode API](#location-api)
* [OpenWeather API](#weather-api)
* [Axios](https://axios-http.com/)
* [Path](https://nodejs.org/api/path.html)
* [Node](https://nodejs.org/en)
* [Express](https://expressjs.com/)


### Location API
---
[Geocode](https://geocode.maps.co/) API is used to retrieve the coordinates (longitude and latitude) of the location entered by the user.

The API uses data from [Open Street Map](https://www.openstreetmap.org/) to find the latitude and longitude coordinates.

In order to have a correct input, the user must go to [Open Street Map](https://www.openstreetmap.org/) and type in the location desired to look up it's specific informations.

### Weather API
---
[OpenWeather](https://openweathermap.org/api) API is used to retrieve weather data from specific coordinates (longitude and latitude).

__We are only interested in displaying the current data:__
* Name of location
* Weather description
* Coordiantes (longitude and latitude)
* Temperature
* Feels like temperature 
* Lowest temperature 
* Highest temperature 
* Pressure
* Humidity
* Wind speed

## Development
---
The program retrieves coordinates (longitude and latitude) of the loction entered by the user using the [location API](#location-api), then it uses the coordinates and the [weather API](#weather-api) in order to find the live weather information about the location.

__samples used to test the program:__
\#    | Street      | City     | State | Postal Code | Country |
:---:|:---:        |:---:     |:---:  |:---:        |:---:    |
1    | 555 5th Ave | New York | NY    | 10017       | US      |
2    | statue of liberty | - | - | - | - |
3    | Avenue Anatole France | Paris | Ile-de-France| 75007 | France |
4    | eiffel tower | - | - | - | - |
5    | Piazza del Duomo | Pisa | provincia di Pisa | 56126 | Italy |
6    | Leaning Tower of Pisa | - | - | - | - |
7    | - | london | - | - | - |

### Program Structure:
---
The program is composed of 3 pages:

#### __1. Main Page:__
 <img width="492" alt="main page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/d0cd7cf1-25db-4aae-b3b0-054ed4d51375">
 
#### __2. Result Page:__
<img width="598" alt="result page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/8bfeefee-9f2e-455e-924b-500fee74190e">

#### __3. Error Page:__
<img width="638" alt="error page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/43446b84-b00f-4b6c-8e54-19ad2276a9e5">

