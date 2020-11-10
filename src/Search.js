import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Searchcity() {
    const [city, setCity] = useState("");
    const [displayCity, setDisplay] = useState("");
  
    function showTemperature(response) {
      if (city === null) {
        setDisplay("Please enter a city");
      } else {
        setDisplay(
          <div className="currentWeather">
            <h3>
              {" "}
              It is currently {Math.round(response.data.main.temp)}°F in {city}{" "}
            </h3>
            <ul>
              <li>Description: {response.data.weather[0].description}</li>
              <li> Windspeed: {Math.round(response.data.wind.speed)} mph</li>
              <li> Humidity: {Math.round(response.data.main.humidity)}% </li>
            </ul>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
        );
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiURL).then(showTemperature);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    return (
      <div className="inputs">
        {" "}
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
        <h3> {displayCity} </h3>
      </div>
    );
  }
  