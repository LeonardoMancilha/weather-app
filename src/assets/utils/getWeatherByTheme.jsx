export const getWeatherTheme = (weatherDescription) => {
  console.log(weatherDescription);
  if (
    weatherDescription.includes("clear") ||
    weatherDescription.includes("sun")
  ) {
    return "sunny";
  } else if (weatherDescription.includes("rain")) {
    return "rainy";
  } else if (weatherDescription.includes("cloud")) {
    return "cloudy";
  } else {
    return "default";
  }
};

export default getWeatherTheme;
