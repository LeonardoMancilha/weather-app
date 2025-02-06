const APIkey = "3b36f569fbd60272d95c4844f449b8ea";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  return await fetch(`${BASE_URL}?q=${city}&appid=${APIkey}&units=metric`)
    .then((response) => response.json())
    .then((json) => json);
};

const Localization = async (city, lat = null, lon = null) => {
  let url = `${BASE_URL}?appid=${APIkey}&units=metric`;

  if (lat && lon) {
    url += `&lat=${lat}&lon=${lon}`;
  } else if (city) {
    url += `&q=${city}`;
  } else {
    return null;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getForecast = async (lat, lon) => {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
  const response = await fetch(forecastUrl);
  const data = await response.json();
  console.log(data); // Adicione um log para verificar os dados retornados
  return data;
};

export default { getWeather, Localization, getForecast };
