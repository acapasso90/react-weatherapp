import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastInformation(props){
    function hours(){ let date= new Date(props.data.dt * 1000 );
        let hours = date.getHours();
        if (hours === 0){hours = 12;}
    if (hours > 12){hours -=12; return (<span className="hours">{hours}:00 PM</span>);}
    else {return(<span className="hours">{hours}:00 AM</span>);}
    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return(`${temperature}°F`);
    }

    if (props.unit === "farenheit") {
        return (
          <div className="WeatherForecastInformation col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            <span className="temperature"> {temperature()}</span>
          </div>
        );
      } else {
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