import { ConvertTemperature } from "../utils/Conversion";

describe("Teste de conversão de temperatura", () => {
  test("Converte temperatura de Celsius para Fahrenheit", () => {
    const tempInCelsius = 0;
    const result = ConvertTemperature(tempInCelsius, "F");
    expect(result).toBe(32);
  });
});

test("Converte temperatura negativa de Celsius para Fahrenheit", () => {
  const tempInCelsius = -10;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBe(14);
});

test("Converte temperatura positiva grande de Celsius para Fahrenheit", () => {
  const tempInCelsius = 100;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBe(212);
});

test("Converte temperatura negativa grande de Celsius para Fahrenheit", () => {
  const tempInCelsius = -100;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBe(-148);
});

test("Converte temperatura com decimal de Celsius para Fahrenheit", () => {
  const tempInCelsius = 25.5;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBeCloseTo(77.9, 1);
});

test("Converte temperatura muito pequena de Celsius para Fahrenheit", () => {
  const tempInCelsius = 0.1;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBeCloseTo(32.18, 2);
});

test("Verifica arredondamento na conversão de Celsius para Fahrenheit", () => {
  const tempInCelsius = 10.3;
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBeCloseTo(50.54, 2);
});

test("Testa entrada inválida (string ao invés de número)", () => {
  const tempInCelsius = "dez";
  const result = ConvertTemperature(tempInCelsius, "F");
  expect(result).toBeNaN();
});
