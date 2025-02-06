import React from "react";
import styles from "./Forecast.module.css";

const Forecast = ({ forecast, loading }) => {
  // Função para obter a data corretamente sem repetições
  const getForecastDate = (index) => {
    const today = new Date();
    today.setDate(today.getDate() + (index + 1)); // Sempre começando a partir de amanhã

    // Formatando para DD/MM/YYYY
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className={`${styles.forecast} ${!loading ? "visible" : ""}`}>
      {forecast.slice(0, 3).map((day, index) => {
        const temp = day.main.temp;
        const description = day.weather[0].description;
        const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

        // Obtendo a data correta baseada no índice da previsão
        const forecastDate = getForecastDate(index);

        return (
          <div key={index} className={`${styles.forecast_day}`}>
            <p>{forecastDate}</p>
            <img src={icon} alt={description} />
            <p>{description}</p>
            <h4>{temp}°C</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
