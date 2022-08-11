import express from "express";
import { renderWeatherInfo } from "./features/renderInfo.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).render("index", {
    info: "",
  });
});

app.post("/weather", async (req, res) => {
  const cityName = req.body.cityName;

  renderWeatherInfo(cityName, res);
});

export default app;
