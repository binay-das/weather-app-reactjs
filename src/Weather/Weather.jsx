import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import './Weather.css'

export default function Weather() {
    let [weather, setWeather] = useState({
        city: "DELHI",
        type: "Hot",
        temp: 35,
        minTemp: 30,
        maxTemp: 40,
        feelsLike: 38,
        humidity: 25,
    });

    
    let updates = (data) => {
        setWeather(data);
    }
    return (
        <div className="weather">
            <SearchBox updateInfo={updates} />
            <div className="card">
                <h1>{weather.city}</h1>
                <h2><i>{weather.type}</i></h2>
                <h3>Temperature: {weather.temp} &deg;C </h3>
                <h3>Min temperature: {weather.minTemp} &deg;C </h3>
                <h3>Max temperature: {weather.maxTemp} &deg;C </h3>
                <h3>Humidity: {weather.humidity}</h3>
                <h3>The temperature may feel like {weather.feelsLike} &deg;C  </h3>
            </div>
        </div>
    );
}