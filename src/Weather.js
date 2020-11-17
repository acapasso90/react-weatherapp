import React, {useState} from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
function handleResponse(response){
  console.log(response);
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

function search(){  const apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiURL).then(handleResponse);
}

function handleSubmit(event){event.preventDefault();
search();}

function updateCity(event){setCity(event.target.value)};

if(weatherData.ready) { 
return ( 
  <div className="weather">
       <div className="container">
       <div className="inputs">
         <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} 
              placeholder="Enter your location"
              autoFocus="on"
              autoComplete="off"
              className="shadow-sm" />
              <span className="searchButton">
          <input type="submit" value="search" className="btn btn-dark shadow-sm" />
          </span>
        </form>
        </div>
        <div className="submitlocations">
        <h4>
          <input
            type="submit"
            value="use current"
            className="btn btn-dark shadow-sm"
          />
        </h4>
        </div>
        </div>
         <WeatherInfo data={weatherData} /> 
 </div>
 </div>);} else {search();
return(<div className="Loader">
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
);}
 
 }

