// src/context/WeatherContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import useWeatherApi from './hooks/useWeatherApi';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState(() => {
    // Load search history from localStorage if available
    const savedHistory = localStorage.getItem('weatherSearchHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const { 
    weatherData, 
    forecastData, 
    loading, 
    error, 
    fetchData 
  } = useWeatherApi();

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('weatherSearchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const searchWeather = (city) => {
    fetchData(city);
    
    // Add city to search history if it's not already there
    if (city && !searchHistory.includes(city)) {
      // Keep only the last 5 searches
      const newHistory = [city, ...searchHistory.slice(0, 4)];
      setSearchHistory(newHistory);
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('weatherSearchHistory');
  };

  // Set default city on first load
  useEffect(() => {
    if (!weatherData && !loading && !error) {
      searchWeather('London');
    }
  }, [weatherData, loading, error]);

  const contextValue = {
    weatherData,
    forecastData,
    loading,
    error,
    searchWeather,
    searchHistory,
    clearSearchHistory
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;