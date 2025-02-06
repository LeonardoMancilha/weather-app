import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api/api";
import { Map } from "react-feather";
import InputWrapper from "./assets/components/InputWrapper";
import Content from "./assets/components/Content";
import Forecast from "./assets/components/Forecast";
import {
  saveCityToLocalStorage,
  loadRecentCities,
} from "./assets/utils/localStorageUtils";
import getWeatherTheme from "./assets/utils/getWeatherByTheme";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [theme, setTheme] = useState("default");
  const [forecast, setForecast] = useState([]);
  const [recentCities, setRecentCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRecentCities(setRecentCities);
  }, []);

  const getWeatherbyCity = async () => {
    try {
      if (!city) return;
      setLoading(true);
      const weatherData = await api.getWeather(city);
      setWeather(weatherData);
      setCity("");
      saveCityToLocalStorage(city, setRecentCities);

      if (
        weatherData.weather &&
        weatherData.weather[0] &&
        weatherData.weather[0].description
      ) {
        setTheme(getWeatherTheme(weatherData.weather[0].description));
      }

      const forecastData = await api.getForecast(
        weatherData.coord.lat,
        weatherData.coord.lon,
      );
      setForecast(forecastData.list);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const handleRecentCityClick = (city) => {
    setCity(city);
    getWeatherbyCity();
  };

  const getWeatherByLocation = () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const weatherData = await api.Localization(
              null,
              latitude,
              longitude,
            );
            setWeather(weatherData);

            if (
              weatherData.weather &&
              weatherData.weather[0] &&
              weatherData.weather[0].description
            ) {
              setTheme(getWeatherTheme(weatherData.weather[0].description));
            }

            const forecastData = await api.getForecast(latitude, longitude);
            const dailyForecast = forecastData.list.filter(
              (item, index) => index % 8 === 0,
            );
            setForecast(dailyForecast);
          },
          (error) => {
            console.error("Error fetching location:", error);
            alert("Failed to get location. Please allow location access.");
          },
        );
      }
    } catch (error) {
      alert("Geolocation is not supported by your browser.");
      console.error("Error getting weather data:", error);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <main className="app">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Weather App</h1>
          <InputWrapper
            city={city}
            setCity={setCity}
            getWeatherbyCity={getWeatherbyCity}
          />
          <button onClick={getWeatherByLocation} className="location-btn">
            <Map /> Use My Location
          </button>

          <Content weather={weather} />

          {recentCities.length > 0 && (
            <div className="recent-cities">
              <p>Cidades Recentes:</p>
              <ul>
                {recentCities.map((recentCity, index) => (
                  <li
                    key={index}
                    onClick={() => handleRecentCityClick(recentCity)}
                  >
                    {recentCity}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Forecast forecast={forecast} loading={loading} />
        </>
      )}
    </main>
  );
}

export default App;
