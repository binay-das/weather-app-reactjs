import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './SearchBox.css'
import { API_URL, API_KEY } from './Keys';

export default function SearchBox( {updateInfo} ) {
    let [city, setCity] = useState("");

    let handleCityName = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(city);
        let weather = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let weatherJson = await weather.json();

        let result = {
            city: city.toUpperCase(),
            type: weatherJson.weather[0].description,
            temp: weatherJson.main.temp,
            minTemp: weatherJson.main.temp_min,
            maxTemp: weatherJson.main.temp_max,
            feelsLike: weatherJson.main.feels_like,
            humidity: weatherJson.main.humidity,
        };

        updateInfo(result);

        setCity("");        
    }

    let getWeather = async () => {
        let weather = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let weatherJson = await weather.json();
        console.log(weatherJson);
    }

    return (
       
            <form onSubmit={handleSubmit} className='search-box'>
                <TextField value={city} onChange={handleCityName} id="filled-basic" label="City" variant="filled" />
                <button type='submit'>Get Weather</button>
            </form>
        
    );
}