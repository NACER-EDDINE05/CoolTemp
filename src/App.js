// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { fetchWeatherData, fetchForecastData } from './utils/api';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchWeather = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const weatherData = await fetchWeatherData(searchQuery);
      setWeather(weatherData);
      
      const forecastData = await fetchForecastData(searchQuery);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    searchWeather(searchQuery);
  };

  useEffect(() => {
    // Default location on first load
    searchWeather('London');
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">CoolTemp</h1>
        <Search onSearch={handleSearch} />
        
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {weather && !loading && !error && (
          <CurrentWeather data={weather} />
        )}
        
        {forecast && !loading && !error && (
          <Forecast data={forecast} />
        )}
      </div>
    </div>
  );
}

export default App;