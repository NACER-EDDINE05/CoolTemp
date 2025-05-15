
// src/components/Forecast.js
import React from 'react';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  // Function to format date
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Group forecast data by day
  const groupedForecasts = data.list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // Get daily forecasts (at 12:00)
  const dailyForecasts = Object.keys(groupedForecasts).map(date => {
    const dayData = groupedForecasts[date];
    // Find noon forecast or use the first one
    const noonForecast = dayData.find(item => item.dt_txt.includes('12:00:00')) || dayData[0];
    return noonForecast;
  }).slice(0, 5); // Only show 5 days

  return (
    <div className="forecast">
      <h2 className="forecast-title">5-Day Forecast</h2>
      <div className="forecast-container">
        {dailyForecasts.map((forecast, index) => {
          const temp = Math.round(forecast.main.temp - 273.15); // Convert to Celsius
          const { icon, description } = forecast.weather[0];
          const date = formatDate(forecast.dt_txt);

          return (
            <div key={index} className="forecast-item">
              <div className="forecast-date">{date}</div>
              <img
                className="forecast-icon"
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
              />
              <div className="forecast-temp">{temp}°C</div>
              <div className="forecast-description">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;