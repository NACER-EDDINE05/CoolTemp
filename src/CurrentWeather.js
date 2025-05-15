
// src/CurrentWeather.js
import React from 'react';
import WeatherDetails from './WeatherDetails';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const {
    name,
    sys: { country },
    weather,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
    visibility
  } = data;

  const weatherIcon = weather[0].icon;
  const description = weather[0].description;
  
  // Convert temperature from Kelvin to Celsius
  const celsius = Math.round(temp - 273.15);
  const feelsLike = Math.round(feels_like - 273.15);
  
  // Convert visibility from meters to kilometers
  const visibilityKm = Math.round(visibility / 1000);

  return (
    <div className="current-weather">
      <div className="weather-location">
        {name}, {country}
      </div>
      
      <div className="weather-main">
        <div className="weather-temp">{celsius}°C</div>
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={description}
        />
      </div>
      
      <div className="weather-description">
        {description}
      </div>
      
      <WeatherDetails 
        feelsLike={feelsLike}
        humidity={humidity}
        windSpeed={speed}
        pressure={pressure}
        visibility={visibilityKm}
      />
    </div>
  );
};

export default CurrentWeather;