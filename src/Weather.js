import React from "react";
import Search from "./Search";


export default function Weather(){
    let weatherData = {
    city: "New York",
    temperatureHigh: 88,
    temperatureLow: 78,
    windSpeed: 5,
    humidity: 70,
    description: "sunny",
    date: "Thursday 10/22",
    hours: 12,
    minutes: 48
  };
  return ( 
  <div className="weather">
      <div className="container">
        <Search />
    <div className="left">
        <div className="currentIcons">
          <img
            className="iconNow"
            alt=""
            src="http://openweathermap.org/img/wn/10d@2x.png"
          />
        </div>
        <div className="tempNow">
          <span>{weatherData.temperatureHigh}</span>/
          <span>{weatherData.temperatureLow}</span>°F
        </div>
        <div className="celsiusFarenheit">
          <a href="/" className="celsius" id="dormant">
            Celsius
          </a>{" "}
          ┃
          <a href="/" className="farenheit" id="active">
            Farenheit
          </a>
        </div>
        <div className="currentSpecifics">
          <ul>
            <li className="humidity">Humidity: {weatherData.humidity}%</li>
            <li className="windSpeed">Wind: {weatherData.windSpeed} mph</li>
          </ul>
        </div>
    </div>

    <div className="right">
        <div className="thisLocation">
          <span className="hereNow"> {weatherData.city} </span>
          <br />
          <span className="statusNow">{weatherData.description}</span>
          <br />
          <span className="dateStamp">
            <em>
              {weatherData.date} {weatherData.hours}:{weatherData.minutes}
            </em>
          </span>
        </div>
    </div>
<br />
<div className="row">
    <div className="col-2">
        <div className="forecast2">
            <span className="time2"> {weatherData.hours}:00 </span>
            <br />
            <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
        <div id="temp2">{weatherData.temperatureHigh}°/{weatherData.temperatureLow}°F</div>
        <div className="right">
            <span className="humidity1"> <small><em>Humidity: {weatherData.humidity} </em></small> </span>
        </div>
    </div>
    </div>
    <div className="col-2">
        <div className="forecast3">
            <span className="time3"> {weatherData.hours}:00 </span>
            <br />
            <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
        <div id="temp3">{weatherData.temperatureHigh}°/{weatherData.temperatureLow}°F</div>
        <div className="right">
            <span className="humidity1"> <small><em>Humidity: {weatherData.humidity} </em></small> </span>
        </div>
    </div>
    </div>

    <div className="col-2">
        <div className="forecast4">
            <span className="time4"> {weatherData.hours}:00 </span>
            <br />
            <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
        <div id="temp4">{weatherData.temperatureHigh}°/{weatherData.temperatureLow}°F</div>
        <div className="right">
            <span className="humidity1"> <small><em>Humidity: {weatherData.humidity} </em></small></span>
        </div>
    </div>
    </div>

    <div className="col-2">
        <div className="forecast5">
            <span className="time5"> {weatherData.hours}:00 </span>
            <br />
            <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
        <div id="temp5">{weatherData.temperatureHigh}°/{weatherData.temperatureLow}°F</div>
        <div className="right">
            <span className="humidity1"> <small><em>Humidity: {weatherData.humidity} </em></small></span>
        </div>
    </div>
</div>
    <div className="col-2">
        <div className="forecast3">
            <span className="time3"> {weatherData.hours}:00 </span>
            <br />
            <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
        <div id="temp3">{weatherData.temperatureHigh}°/{weatherData.temperatureLow}°F</div>
        <div className="right">
            <span className="humidity1"> <small><em>Humidity: {weatherData.humidity} </em></small> </span>
        </div>
    </div>
</div>
</div>
    <br />
        <footer>
          {" "}
          <a
            href="https://github.com/acapasso90/react-weatherapp"
            target="_blank"
            rel="noreferrer"
            className="githubLink"
          >
            {" "}
            Open-source code
          </a>{" "}
          by  <a href="https://www.amandacapasso.com" target="_blank"
          rel="noreferrer" className="businessLink">Amanda Capasso </a>
        </footer>
</div>
</div>
  );}

