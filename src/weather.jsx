// src/components/Weather.js
import React, { useState } from 'react';
import background from './assets/background.png'; // Import the image


const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = 'a0aa4a6e78d53498418798b16eb1106a';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeather(data);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="App">
      <div className="left-panel">
        <h1>Weather☀️</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={handleChange} placeholder="Enter city" />
          <button type="submit">Get Weather</button>
        </form>
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
      <div className="right-panel"
    //   style={{ backgroundImage: `url(${background})` }   }
    ></div>
    </div>
  );
};

export default Weather;
