import React from "react";
import { Search } from "react-feather";
import styles from "../components/InputWrapper.module.css";

const InputWrapper = ({ city, setCity, getWeatherbyCity }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getWeatherbyCity();
    }
  };

  return (
    <section className={styles.inputWrapper}>
      <label htmlFor="name-city"></label>
      <input
        type="text"
        name="name-city"
        id="name-city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter City Name"
      />
      <button aria-label="Pesquisar" onClick={getWeatherbyCity}>
        <Search />
      </button>
    </section>
  );
};

export default InputWrapper;
