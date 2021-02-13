import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d" : "FOG",
        "50n" : "FOG"}
// maps Icon fron Weather Icon sent as props 
    const IconNow = codeMapping[props.code];
// if Icon is Rain or Snow returns AnimatedWeather in Light Blue color
    if(IconNow ==="RAIN"  || IconNow ==="SNOW")
    {return(<div> <ReactAnimatedWeather icon={codeMapping[props.code]} color="#71C6E1" size={95} animate={true} /> </div>) }
// Returns in Yellow color
else{ return(<div>  <ReactAnimatedWeather icon={codeMapping[props.code]} color="#f1ed68" size={95} animate={true} /> </div>);}}

