import React from "react";

function WeatherCard({ data }) {
  const weatherIconMap = {
    Clouds: "images/cloud.png",
    Rain: "images/rain.png",
    Clear: "images/clear.png",
    Drizzle: "images/drizzle.png",
    Mist: "images/mist.png",
    Snow: "images/snow.png",
  };

  return (
    <div className="weather">
      <img
        src={weatherIconMap[data.weather[0].main] || "images/default.png"}
        alt="Weather Icon"
        className="weather-icon"
      />
      <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
      <h2 className="city">{data.name}</h2>
      <div className="details">
        <div className="col">
          <img src="images/humidity.png" alt="Humidity" />
          <div>
            <p className="humidity">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="images/wind.png" alt="Wind" />
          <div>
            <p className="wind">{data.wind.speed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;