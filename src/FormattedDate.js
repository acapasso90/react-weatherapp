import React from "react";


export default function FormattedDate(props){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let hours = props.date.getHours();
if (hours === 0){hours = 12;}
    let minutes = props.date.getMinutes();
    if (minutes < 10){minutes = `0${minutes}`;}
    if (hours > 12){hours -=12; return( <div className="dateStamp"><h1>{day}, {month} {date} {hours}:{minutes} PM</h1></div>);}
    else {return (<h1>{day}, {month} {date} {hours}:{minutes} AM</h1>);} 
}