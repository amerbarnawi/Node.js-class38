import { fetchData } from "./fetchData.js";
import keys from "../sources/keys.js";

export async function getWeatherData(cityName) {
  try {
    const weatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}`;

    const weatherData = await fetchData(weatherDataUrl);

    return weatherData;
  } catch (error) {
    return {
      weatherText: "City is not found!",
      error: `${error.message}`,
    };
  }
}
