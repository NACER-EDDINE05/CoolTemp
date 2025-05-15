// src/components/WeatherDetails.js
import React from 'react';

const WeatherDetails = ({ feelsLike, humidity, windSpeed, pressure, visibility }) => {
  return (
    <div className="weather-details">
      <div className="weather-detail">
        <div className="weather-detail-label">Feels Like</div>
        <div className="weather-detail-value">{feelsLike}°C</div>
      </div>
      
      <div className="weather-detail">
        <div className="weather-detail-label">Humidity</div>
        <div className="weather-detail-value">{humidity}%</div>
      </div>
      
      <div className="weather-detail">
        <div className="weather-detail-label">Wind Speed</div>
        <div className="weather-detail-value">{windSpeed} m/s</div>
      </div>
      
      <div className="weather-detail">
        <div className="weather-detail-label">Pressure</div>
        <div className="weather-detail-value">{pressure} hPa</div>
      </div>
      
      <div className="weather-detail">
        <div className="weather-detail-label">Visibility</div>
        <div className="weather-detail-value">{visibility} km</div>
      </div>
    </div>
  );
};

export default WeatherDetails;