// src/utils/helpers.js
/**
 * Converts temperature from Kelvin to Celsius
 * @param {number} kelvin - Temperature in Kelvin
 * @returns {number} - Temperature in Celsius (rounded)
 */
export const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };
  
  /**
   * Converts temperature from Kelvin to Fahrenheit
   * @param {number} kelvin - Temperature in Kelvin
   * @returns {number} - Temperature in Fahrenheit (rounded)
   */
  export const kelvinToFahrenheit = (kelvin) => {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
  };
  
  /**
   * Formats a timestamp to a readable date string
   * @param {number} timestamp - Unix timestamp
   * @param {string} format - Date format ('short', 'long', 'time')
   * @returns {string} - Formatted date string
   */
  export const formatDate = (timestamp, format = 'short') => {
    const date = new Date(timestamp * 1000);
    
    switch (format) {
      case 'long':
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        });
      case 'time':
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });
      case 'short':
      default:
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
    }
  };
  
  /**
   * Converts wind speed from m/s to km/h
   * @param {number} speed - Wind speed in m/s
   * @returns {number} - Wind speed in km/h (rounded)
   */
  export const msToKmh = (speed) => {
    return Math.round(speed * 3.6);
  };
  
  /**
   * Converts meters to kilometers
   * @param {number} meters - Distance in meters
   * @returns {number} - Distance in kilometers (with one decimal place)
   */
  export const metersToKm = (meters) => {
    return (meters / 1000).toFixed(1);
  };