// src/hooks/useWeatherApi.js
import { useState, useCallback } from 'react';
import { fetchWeatherData, fetchForecastData } from '../utils/api';

/**
 * Custom hook for fetching weather data
 * @returns {Object} - Weather data, loading state, error state, and fetch function
 */
const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (city) => {
    if (!city || city.trim() === '') {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch current weather data
      const weather = await fetchWeatherData(city);
      setWeatherData(weather);

      // Fetch forecast data
      const forecast = await fetchForecastData(city);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { 
    weatherData, 
    forecastData, 
    loading, 
    error, 
    fetchData 
  };
};

export default useWeatherApi;