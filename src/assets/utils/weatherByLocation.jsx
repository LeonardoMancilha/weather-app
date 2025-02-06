import React, { useState } from "react";
import api from "../../api/api";
import { Map } from "../../../node_modules/react-feather";
import getWeatherTheme from "../utils/getWeatherByTheme";
import "../../App.css";

const WeatherByLocation = () => {
  const [weather, setWeather] = useState(null);
  const [setTheme] = useState("default");
  const [setForecast] = useState([]);

  const getWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Obtendo dados do clima usando a latitude e longitude
          const weatherData = await api.Localization(null, latitude, longitude);
          setWeather(weatherData);

          if (
            weatherData.weather &&
            weatherData.weather[0] &&
            weatherData.weather[0].description
          ) {
            setTheme(getWeatherTheme(weatherData.weather[0].description)); // Atualiza o tema
          }

          // Buscando a previsão para os próximos 5 dias
          const forecastData = await api.getForecast(latitude, longitude);
          const dailyForecast = forecastData.list.filter(
            (item, index) => index % 8 === 0,
          ); // Aproximadamente 8 intervalos por dia
          setForecast(dailyForecast);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Failed to get location. Please allow location access.");
        },
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div>
      <button onClick={getWeatherByLocation} className="location-btn">
        <Map /> Use My Location
      </button>
      {weather ? (
        <div>
          <h2>Weather in your location:</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0]?.description}</p>
          <p>City: {weather.name}</p>
        </div>
      ) : (
        <p>Click the button to get the weather!</p>
      )}
    </div>
  );
};

export default WeatherByLocation;
