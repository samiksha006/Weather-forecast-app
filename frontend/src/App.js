import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        <SearchBar onSearch={handleSearch} />

        {!weather ? (
          <div className="welcome-section">
            <h1>🌤 Weather Forecast</h1>

            <p>
              Search any city to get real-time weather information instantly.
            </p>

            <div className="welcome-card">
              <h3>Features</h3>

              <ul>
                <li>🌡 Temperature</li>
                <li>💨 Wind Speed</li>
                <li>💧 Humidity</li>
                <li>🌅 Sunrise & Sunset</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <WeatherCard weather={weather} />

            <div className="sun-card">
              <div>
                <h4>🌅 Sunrise</h4>
                <p>
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>

              <div>
                <h4>🌇 Sunset</h4>
                <p>
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
