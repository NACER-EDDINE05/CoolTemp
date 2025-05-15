import React, { useState } from "react";

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src="images/search.png" alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;