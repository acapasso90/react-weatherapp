import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastInformation from "./WeatherForecastInformation";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastInformation data={forecast.list[0]} unit={props.unit} />
        <WeatherForecastInformation data={forecast.list[1]} unit={props.unit} />
        <WeatherForecastInformation data={forecast.list[2]} unit={props.unit} />
        <WeatherForecastInformation data={forecast.list[3]} unit={props.unit} />
        <WeatherForecastInformation data={forecast.list[4]} unit={props.unit} />
        <WeatherForecastInformation data={forecast.list[5]} unit={props.unit} />
      </div>
    );
  } else {
    const apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleForecastResponse);
    return null;
  }
}