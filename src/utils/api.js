const API_KEY = process.env.REACT_APP_WEATHER_API_KEY ||  "f1c8977ead44cdb7c11d6ac6bd8deb3c";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches current weather data for a given city
 * @param {string} city - The city name to fetch weather for
 * @returns {Promise} - Promise resolving to weather data
 */
export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the city name and try again.');
      }
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

/**
 * Fetches 5-day forecast data for a given city
 * @param {string} city - The city name to fetch forecast for
 * @returns {Promise} - Promise resolving to forecast data
 */
export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the city name and try again.');
      }
      throw new Error('Failed to fetch forecast data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};