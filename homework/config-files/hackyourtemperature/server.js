import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", (req, res) => {
  // If the user does not add the city name, I should add (required) to the input(form).
  const cityName = req.body.cityName;
  // They asked to send the the form input back as a response to the client
  res.status(200).json(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
