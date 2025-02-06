export const saveCityToLocalStorage = (city, setRecentCities) => {
  const savedCities = JSON.parse(localStorage.getItem("recentCities")) || [];
  if (!savedCities.includes(city)) {
    savedCities.push(city);
    if (savedCities.length > 5) savedCities.shift();
    localStorage.setItem("recentCities", JSON.stringify(savedCities));
    setRecentCities(savedCities); // Atualiza o estado
  }
};

export const loadRecentCities = (setRecentCities) => {
  const savedCities = JSON.parse(localStorage.getItem("recentCities")) || [];
  setRecentCities(savedCities); // Atualiza o estado com as cidades salvas
};
