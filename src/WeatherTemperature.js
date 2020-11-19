import React, { useState } from "react";

export default function WeatherTemperature(props)
{
    const [unit, setUnit] = useState('farenheit');
    function convertTemperature(event){event.preventDefault();
    setUnit("Celsius");}

    function revertTemperature(event){event.preventDefault();
    setUnit("farenheit");}

if (unit === 'farenheit'){
    return(<div className="WeatherTemperature">
    <div className="tempNow">
<span>{props.farenheitHigh}</span>/ 
<span>{props.farenheitLow}</span>°F
</div>
<div className="celsiusFarenheit">
<a href="/" className="celsius" onClick={convertTemperature}>
  Celsius
</a>{" "}
┃
  Farenheit
</div>
<div className="currentSpecifics">
           <ul>
             <li className="humidity">Humidity: {props.humidity}%</li>
             <li className="windSpeed">Wind: {props.wind} mph</li>
           </ul>
         </div>
</div>);} 

else{
    let celsiusHigh = (props.farenheitHigh -30)*5/9
    let celsiusLow = (props.farenheitLow -30)*5/9
    let celsiusWind = (props.wind)*1.609
    return( 
<div className="WeatherTemperature">
<div className="tempNow">
<span>{Math.round(celsiusHigh)}</span>/
<span>{Math.round(celsiusLow)}</span>°C
</div>
<div className="celsiusFarenheit">
Celsius
┃
<a href="/" className="farenheit" onClick={revertTemperature}>
Farenheit</a>
</div>
<div className="currentSpecifics">
       <ul>
         <li className="humidity">Humidity: {props.humidity}%</li>
         <li className="windSpeed">Wind: {Math.round(celsiusWind)} kph</li>
       </ul>
     </div>
</div>);}
}