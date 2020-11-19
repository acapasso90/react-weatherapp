import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastInformation(props){
    function hours(){ let date= new Date(props.data.dt * 1000 );
        let hours = date.getHours()
        return (<span className="hours">{hours}:00</span>);
    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return(`${temperature}°F`);
    }

    return( <div className="WeatherForecastInformation col">
        {hours()}
               <WeatherIcon code={props.data.weather[0].icon} />
           <span class="temperature"> {temperature()}
               </span></div>
);
}