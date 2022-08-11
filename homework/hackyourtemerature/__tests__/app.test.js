import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

// GET tests:
describe("GET /", () => {
  it("Should respond with a 200 status code.", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("Should response as HTML.", async () => {
    const response = await request.get("/");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("html")
    );
  });
});

// POST tests:
describe("POST /weather", () => {
  it("Should respond with a 200 status code.", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "Amsterdam" });
    expect(response.statusCode).toBe(200);
  });

  it("Should response as HTML.", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "Amsterdam" });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("html")
    );
  });

  it("Get status code (404) and error message in case invalid city name requested. ", async () => {
    const response = await request
      .post("/weather")
      .send({ cityName: "aaaaaaaaaaa" });
    const errorMessage = response.text.includes("City is not found!");
    expect(errorMessage).toBe(true);
    expect(response.status).toBe(404);
  });
});
