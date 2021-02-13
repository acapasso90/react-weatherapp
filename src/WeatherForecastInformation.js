import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastInformation(props){
    function hours(){ let date= new Date(props.data.dt * 1000 );
        let hours = date.getHours();
  // if hour is 0 it displays as 12
        if (hours === 0){hours = 12;}
// if hours is over 12 subracts 12 and returns with PM. Otherwise shows AM after time. 
    if (hours > 12){hours -=12; return (<span className="hours">{hours}:00 PM</span>);}
    else {return(<span className="hours">{hours}:00 AM</span>);}}

  // Rounds temperature sent from Weather.js and returns in Farenheit
    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return(`${temperature}°F`);}

    // If unit is farenheit displays WeatherForecastInformation in farenheit measurements
    if (props.unit === "farenheit") {
        return (
          <div className="WeatherForecastInformation col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            <span className="temperature"> {temperature()} </span>
          </div>
        );
      } 
      // Displays WeatherForecastInformation in Celsius measurements. Converts farenheit temp to celsius.
      else {
        let temperature = Math.round(((props.data.main.temp - 32) * 5) / 9);
        return (
          <div className="WeatherForecastInformation col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            <span className="temperature"> {temperature}°C</span>
          </div>
        );
    
    }
}