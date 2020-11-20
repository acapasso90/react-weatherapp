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
         humidity={props.data.humidity}
         unit={props.unit}
         setUnit={props.setUnit}
/>
     </div>
 
       <div className="right">
         <div className="thisLocation">
          <div className="hereNow"> {props.data.city} </div>
           <div className="statusNow">{props.data.description}</div>
           <span className="dateStamp">
             <em>
             <FormattedDate date={props.data.date} />
             </em>
           </span>
         </div>
</div>
</div>);}