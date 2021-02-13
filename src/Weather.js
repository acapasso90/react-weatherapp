import React, {useState} from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("farenheit");

// sets Weather Data from API to weatherData to be sent to WeatherInfo.js and WeatherForecast.js. Rounds temperatures/humidity/windspeed. 
function handleResponse(response){
  setWeatherData({
    ready: true,
    date: new Date(response.data.dt * 1000),
  temperatureHigh: Math.round(response.data.main.temp_max),
  temperatureLow: Math.round(response.data.main.temp_min),
  windSpeed: Math.round(response.data.wind.speed),
  humidity:  Math.round(response.data.main.humidity),
  city: response.data.name,
  description: response.data.weather[0].description,
  icon: response.data.weather[0].icon,
 })
}

// uses City from updateCity function to make API request. Calls handleResponse function
function search(){  const apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiURL).then(handleResponse);
}

// prevents page from refreshing on form submit and runs search with updated city from updateCity function
function handleSubmit(event){event.preventDefault();
search();}

// setsCity to what is typed in search bar
function updateCity(event){setCity(event.target.value)};

// Uses geolocator latitude and longitude to make API request with user's location in Imperial measurement. Sends info to handleResponse function
function searchCity(position){const apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
let units = "imperial";
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);}

// gets user's current location and runs searchCity.
function useCity(event) {event.preventDefault();
navigator.geolocation.getCurrentPosition(searchCity);}

// if weatherData is ready displays weather app and search bar
if (weatherData.ready) {
  return (
    <div className="weather">
      <div className="container2">
        <div className="inputs">
          <div className="searchBar">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={updateCity}
                placeholder="Enter your location"
                autoFocus="on"
                autoComplete="off"
                className="shadow-sm" id="searchBar"
              />
              <span className="searchButton">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-dark shadow-sm"
                />
              </span>
            </form>
          </div>
          <div className="submitlocations">
            <h4>
              <input type="submit" value="use current" className="btn btn-dark shadow-sm" id="useHereButton" onClick={useCity}/>
            </h4>
          </div>
        </div>
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <WeatherForecast city={weatherData.city} unit={unit} />
      </div>
    </div>
  );
} 
// Runs search function, displays React Loader Spinner and Loading message. 
else {
  search();
  return (
    <div className="Loader">
      <h3>Loading</h3>
      <br />
      <Loader
        type="TailSpin"
        color="#71C6D6"
        height={100}
        width={100}
        timeout={18000}
        className="loaderAnimation"
      />
    </div>
  );
}
}