export const ConvertTemperature = (temp, scale) => {
  return scale === "C" ? temp : (temp * 9) / 5 + 32;
};
