# Weather Tracker
The Weather Tracker program is designed to provide accurate and up-to-date weather information.
With its seamless integration of real-time data from trusted weather sources, the application offers a reliable and precise weather tracking experience.
<br><br>

## Summary
 1 - [Introduction](#1-introduction)
   - What Is Weather Tracker ? 
   - [Goals](#goals) 
 
 2 - [Tools](#2-tools)
   - [Location API](#location-api)
   - [Weather API](#weather-api)

 3 - [Development](#3-development)
   - [Samples](#samples)
   - [Program Preview](#program-preview)
 
 4 - [Installation Guide](#4-installation-guide)
 
 5 - [Program Structure](#5-program-structure)
   - [Front-end](#front-end)
     - [Main Page](#1-main-page-indexhtml)
     - [Result Page](#2-result-page-resultejs)
     - [Error Page](#3-error-page-errorejs)
   - [Back-end](#back-end)
  
 6 - [Conclusion](#6-conclusion)
   - Challenges encountered       
        - [Front-end](#1---front-end)
        - [Back-end](#2---back-end)
        - [Other](#3---other)

 7 - [Other Projects](#7-other-projects)

 <br>

## 1. Introduction
Weather Tracker shows the live weather information about a specific location chosen by the user.
It accesses real-time weather data directly from reputable sources, ensuring accurate and timely information.
<br>

### Goals:
---
The goals of creating this program are:
* Familiarize with node.js and express.js
* Gain knowledge in using APIs
* Understand HTTP post and get requests
* Improve writing skills in Markdown syntax
<br>

## 2. Tools:
This program uses the current APIs, libraries, and frameworks:
* [Bootstrap](https://getbootstrap.com/)
* [Geocode API](#location-api)
* [OpenWeather API](#weather-api)
* [Axios](https://axios-http.com/)
* [Path](https://nodejs.org/api/path.html)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
<br><br>

### Location API
---
[Geocode](https://geocode.maps.co/) API is used to retrieve the coordinates (longitude and latitude) of the location entered by the user.

The API uses data from [Open Street Map](https://www.openstreetmap.org/) to find the latitude and longitude coordinates.

In order to have a correct input, the user must go to [Open Street Map](https://www.openstreetmap.org/) and type in the location desired to look up it's specific informations.
<br><br>
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
<br><br>

## 3. Development
The program retrieves coordinates (longitude and latitude) of the loction entered by the user using the [location API](#location-api), then it uses the coordinates and the [weather API](#weather-api) in order to find the live weather information about the location.

### Samples:
---
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
<br>

### Program Preview:
---
https://github.com/Abdullah1tani/WeatherProject/assets/98557354/95b1e526-f973-483a-b9c3-d15c3321b27e

<br>

## 4. Installation Guide
To run Weather Tracker on your system, the following steps must be done in order:
1. Install [Node.js](https://nodejs.org/en)
2. Clone the repository using this link: https://github.com/Abdullah1tani/WeatherProject.git
3. Run `node app.js` in terminal
4. Go to [localhost at port 3000](http://localhost:3000/) in your web browser

## 5. Program Structure
The program is composed of 2 structures:
* [Front-end](#front-end)
* [Back-end](#back-end)
<br>

### Front-end:
---
Front-end was built using [Login Modal template](https://mdbootstrap.com/docs/standard/extended/login/), HTML and CSS, it is composed of 3 pages:

#### __1. Main Page:__ `index.html`
The first page that the user sees when he start the program. This will be the page that he will enter the informations about the desired location that he wish to receive information about it's weather.<br>

<img width="492" alt="main page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/c0610226-9b54-4b2e-b9a8-b3d1b76c8bb9">

#### __2. Result Page:__ `result.ejs`
After the user clicks "Search" in the [main page](#1-main-page), the informations about the weather for the specified location by the user will show up.<br>

<img width="636" alt="result page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/12b1ccfb-cb0f-4c8b-9448-78dad4c5b02c">

#### __3. Error Page:__ `error.ejs`
If the location that the user entered in the [main page](#1-main-page) does not exist, this page will show up instead of [result page](#2-result-page) with the current error `TypeError: Cannot read properties of undefined (reading 'lat')`. <br>

<img width="627" alt="error page" src="https://github.com/Abdullah1tani/WeatherProject/assets/98557354/ebc54ec7-633d-4c3e-861a-824cf7356b83">
<br>

### Back-end:
---
Back-end was built with the following tools:
* [Axios](https://axios-http.com/)
* [Path](https://nodejs.org/api/path.html)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)

## 6. Conclusion:
Building the Weather Tracker was a really fun and challenging experience. 
The challenges that I encountered are as follow:

#### 1 - Front-end 
   - Displaying the informations on the user's end 
   - Changing the CSS of the elements in the [Login Modal template](https://mdbootstrap.com/docs/standard/extended/login/) 
 
#### 2 - Back-end
   - Finding the right API for the [location API](#location-api)
   - Posting requests to the [location API](#location-api)

#### 3 - Other
   - Writing a well structured documentation

## 7. Other Projects:
If you made it till here, thank you for reading :D

Check out my other personal projects:
- [Cat animation](https://github.com/Abdullah1tani/cat-animation)
- [Card animation](https://github.com/Abdullah1tani/card-animation)




