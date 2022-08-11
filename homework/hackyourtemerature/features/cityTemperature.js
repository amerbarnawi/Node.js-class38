export function getCityTemperature(weatherData) {
  const kelvin = weatherData.main.temp;
  const celsius = (kelvin - 273.15).toFixed(2);

  return {
    cityName: weatherData.name,
    temperature: celsius,
  };
}
