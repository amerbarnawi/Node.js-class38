import { getWeatherData } from "../fetchData/WeatherData.js";
import { convertKelvinToCelsius } from "./cityTemperature.js";

export function renderAppInterface(req, res) {
  res.status(200).render("index", {
    info: "",
  });
}

export async function renderWeatherInfo(req, res) {
  const cityName = req.body.cityName;

  const weatherData = await getWeatherData(cityName);
  if (weatherData.error) {
    // In case the city name is invalid:
    res.status(404).render("index", { info: weatherData.weatherText });
  } else {
    // In case valid city name.
    const cityTemperature = convertKelvinToCelsius(weatherData);
    res.status(200).render("index", {
      info: `The temperature in ${cityTemperature.cityName} is ${cityTemperature.temperature} °C.`,
    });
  }
}
