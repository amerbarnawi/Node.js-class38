//To get the temperature by celsius.
export function convertKelvinToCelsius(weatherData) {
  const kelvin = weatherData.main.temp;
  const celsius = (kelvin - 273.15).toFixed(2);

  return {
    cityName: weatherData.name,
    temperature: celsius,
  };
}
