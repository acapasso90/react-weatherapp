import React, {useState} from "react";
import Search from "./Search";
import axios from "axios";
import Loader from 'react-loader-spinner'
import FormattedDate from "./FormattedDate";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});
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
  iconURL: `https://openweathermap.org/img/wn/10d@2x.png`,
 })
}

if(weatherData.ready) { 
return ( 
  <div className="weather">
       <div className="container">
         <Search />
     <div className="left">
         <div className="currentIcons">
           <img
             className="iconNow"
             alt={weatherData.description}
             src={weatherData.iconURL}
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
             <FormattedDate date={weatherData.date} />
             </em>
           </span>
         </div>
     </div>
 <br />
 <div className="row">
     <div className="col-2">
         <div className="forecast2">
             <span className="time2"> hours:00 </span>
             <br />
             <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
         <div id="temp2">hightemp°/lowtemp°F</div>
         <div className="right">
             <span className="humidity1"> <small><em>Humidity: % </em></small> </span>
         </div>
     </div>
     </div>
     <div className="col-2">
         <div className="forecast3">
             <span className="time3"> hours:00 </span>
             <br />
             <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
             <div id="temp2">hightemp°/lowtemp°F</div>
         <div className="right">
         <span className="humidity1"> <small><em>Humidity:% </em></small> </span>
         </div>
     </div>
     </div>
 
     <div className="col-2">
         <div className="forecast4">
             <span className="time4"> hours:00 </span>
             <br />
             <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
         <div id="temp2">hightemp°/lowtemp°F</div>
         <div className="right">
             <span className="humidity1"> <small><em>Humidity: </em></small></span>
         </div>
     </div>
     </div>
 
     <div className="col-2">
         <div className="forecast5">
             <span className="time5"> hours:00 </span>
             <br />
             <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
         <div id="temp2">hightemp°/lowtemp°F</div>
         <div className="right">
             <span className="humidity1"> <small><em>Humidity: </em></small></span>
         </div>
     </div>
 </div>
     <div className="col-2">
         <div className="forecast3">
             <span className="time3"> hours:00 </span>
             <br />
             <img id="icon2" src="https://openweathermap.org/img/wn/01d.png" alt="icon" />
         <div id="temp2">hightemp°/lowtemp°F</div>
         <div className="right">
             <span className="humidity1"> <small><em>Humidity:  </em></small> </span>
         </div>
     </div>
 </div>
 </div>    
 </div>
 </div>);} else {
  const apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(handleResponse);

return(<div className="Loader">
  <h3>Loading</h3>
<Loader
type="Circles"
color="#71C6D6"
height={100}
width={100}
timeout={9000}
/>
</div>
);}
 
 }

