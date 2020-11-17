import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props)
{return(<div className="weatherInfo">
<div className="container">
<div className="left">
         <div className="currentIcons">
             <WeatherIcon code={props.data.icon} />

         </div>
         <div className="tempNow">
           <span>{props.data.temperatureHigh}</span>/
           <span>{props.data.temperatureLow}</span>°F
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
             <li className="humidity">Humidity: {props.data.humidity}%</li>
             <li className="windSpeed">Wind: {props.data.windSpeed} mph</li>
           </ul>
         </div>
     </div>
 
       <div className="right">
         <div className="thisLocation">
          <span className="hereNow"> {props.data.city} </span>
           <br />
           <span className="statusNow">{props.data.description}</span>
           <br />
           <span className="dateStamp">
             <em>
             <FormattedDate date={props.data.date} />
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
</div>)};