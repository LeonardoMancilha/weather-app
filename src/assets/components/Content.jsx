import React from "react";
import { MapPin, Wind } from "react-feather";
import dateFormat from "dateformat";
import styles from "../components/Content.module.css";
import { useEffect, useState } from "react";
import { ConvertTemperature } from "../utils/Conversion";

const Content = ({ weather }) => {
  const renderDate = () => {
    const now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  };

  const convertUnixTimestampToTime = (timestamp) => {
    // Criando um objeto Date a partir do timestamp
    const date = new Date(timestamp * 1000); // Multiplicamos por 1000 porque o timestamp é em segundos
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    return formattedTime;
  };

  const [scale, setScale] = useState("C");

  const handleConversion = (temp) => {
    return ConvertTemperature(temp, scale);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "C" || event.key === "c") {
        setScale("C");
      } else if (event.key === "F" || event.key === "f") {
        setScale("F");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section className={styles.content}>
      {weather && weather.weather ? (
        <>
          <section className={styles.location}>
            <MapPin />
            <p>
              {weather.name} <span>({weather.sys?.country})</span>
            </p>
          </section>
          <p className={styles.dateText}>{renderDate()}</p>
          <section className={styles.information}>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
          </section>
          <section className={styles.information}>
            <p>Sunrise: {convertUnixTimestampToTime(weather.sys?.sunrise)}</p>
            <p>Sunset: {convertUnixTimestampToTime(weather.sys?.sunset)}</p>
          </section>
          <article className={styles.weatherDescription}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{weather.weather[0].description}</p>
          </article>
          <section className={styles.weatherStatus}>
            <h1>
              {handleConversion(weather.main.temp).toFixed(1)}
              <span>°{scale}</span>
            </h1>
            <h2>
              Feels Like {handleConversion(weather.main.feels_like).toFixed(1)}
              <span>°{scale}</span>
            </h2>
          </section>
          <section className={styles.windStatus}>
            <Wind />
            <h3>
              O vento é de {(weather.wind?.speed * 1.852).toFixed(2)} km/h em{" "}
              {weather.wind?.deg}°
            </h3>
          </section>
        </>
      ) : (
        <p>No Data Found!</p>
      )}
    </section>
  );
};

export default Content;
