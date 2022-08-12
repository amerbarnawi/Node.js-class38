import express from "express";
import {
  renderWeatherInfo,
  renderAppInterface,
} from "./features/renderInfo.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  renderAppInterface(req, res);
});

app.post("/weather", async (req, res) => {
  renderWeatherInfo(req, res);
});

export default app;
