import { getWeatherData } from "../fetchData/WeatherData.js";
import { getCityTemperature } from "./cityTemperature.js";

export async function renderWeatherInfo(cityName, res) {
  const weatherData = await getWeatherData(cityName);
  if (weatherData.error) {
    res.status(404).render("index", { info: weatherData.weatherText });
  } else {
    const cityTemperature = getCityTemperature(weatherData);
    res.status(200).render("index", {
      info: `The temperature in ${cityTemperature.cityName} is ${cityTemperature.temperature} °C.`,
    });
  }
}
