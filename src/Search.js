
// src/components/Search.js
import React, { useState, useEffect } from 'react';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Popular cities for suggestions
  const popularCities = [
    'London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Sydney',
    'Madrid', 'Rome', 'Dubai', 'Toronto', 'Bangkok', 'Hong Kong'
  ];

  useEffect(() => {
    if (inputValue.trim() !== '') {
      const filtered = popularCities.filter(city => 
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    if (inputValue.trim() !== '' && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city..."
          className="search-input"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          aria-label="Search for a city"
        />
        <button type="submit" className="search-button" aria-label="Search">
          Search
        </button>
      </form>
      
      {showSuggestions && (
        <div className="suggestions">
          {suggestions.map((city, index) => (
            <div 
              key={index} 
              className="suggestion-item"
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;