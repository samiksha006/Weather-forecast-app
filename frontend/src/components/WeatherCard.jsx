import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <>
      <div className="hero-section">
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="weather"
        />

        <h1 className="temp">{Math.round(weather.main.temp)}°</h1>

        <h2 className="city">{weather.name}</h2>

        <p className="condition">{weather.weather[0].description}</p>

        <p className="today-date">{new Date().toDateString()}</p>
      </div>

      <div className="details-card">
        <div className="detail">
          <div className="detail-icon">💧</div>
          <span>Humidity</span>
          <h3>{weather.main.humidity}%</h3>
        </div>

        <div className="detail">
          <div className="detail-icon">💨</div>
          <span>Wind Speed</span>
          <h3>{weather.wind.speed} m/s</h3>
        </div>

        <div className="detail">
          <div className="detail-icon">🌡️</div>
          <span>Feels Like</span>
          <h3>{Math.round(weather.main.feels_like)}°</h3>
        </div>

        <div className="detail">
          <div className="detail-icon">📊</div>
          <span>Pressure</span>
          <h3>{weather.main.pressure}</h3>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
