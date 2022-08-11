import fetch from "node-fetch";

export async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("HTTP error");
  }
}
