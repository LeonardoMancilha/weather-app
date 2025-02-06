import { useState } from "react";
import { getWeatherTheme } from "../utils/getWeatherByTheme";
import { saveCityToLocalStorage } from "./localStorageUtils";
import api from "../../api/api";

const WeatherByCity = ({
  city,
  setWeather,
  setTheme,
  setForecast,
  setRecentCities,
  setLoading,
}) => {
  const [recentCities] = useState([]); // Estado para armazenar as últimas cidades
  // Função que faz a requisição para pegar o clima
  const getWeatherbyCity = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const weatherData = await api.getWeather(city);
      setWeather(weatherData);
      setCity(""); // Limpa a cidade após a busca
      saveCityToLocalStorage(city, setRecentCities);

      if (
        weatherData.weather &&
        weatherData.weather[0] &&
        weatherData.weather[0].description
      ) {
        setTheme(getWeatherTheme(weatherData.weather[0].description));
      }

      // Buscar a previsão para os próximos 3 dias
      const forecastData = await api.getForecast(
        weatherData.coord.lat,
        weatherData.coord.lon,
      );
      setForecast(forecastData.list); // Atualiza a previsão
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
    } finally {
      setLoading(false);
    }
  };

  // Função para exibir o clima de uma cidade clicada da lista de cidades recentes
  const handleRecentCityClick = (recentCity) => {
    setCity(recentCity);
    getWeatherbyCity();
  };

  return (
    <div>
      {/* Renderiza as cidades recentes, se houver */}
      {recentCities.length > 0 && (
        <div className="recent-cities">
          <h3>Cidades Recentes:</h3>
          <ul>
            {recentCities.map((recentCity, index) => (
              <li key={index} onClick={() => handleRecentCityClick(recentCity)}>
                {recentCity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherByCity;
