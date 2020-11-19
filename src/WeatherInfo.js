import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props)
{return(<div className="weatherInfo">
<div className="left">
         <div className="currentIcons">
             <WeatherIcon code={props.data.icon} />

         </div>
         <WeatherTemperature farenheitHigh={props.data.temperatureHigh} 
         farenheitLow={props.data.temperatureLow}
         wind={props.data.windSpeed}
         humidity={props.data.humidity} />

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
</div>);}