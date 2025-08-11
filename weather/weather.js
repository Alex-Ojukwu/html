const API_KEY = "730ecb109a1a6e6a857f80aeb4087c22";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
  let city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(BASE_URL + "?q=" + city + "&appid=" + API_KEY + "&units=metric")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("weatherResult").innerHTML = 
        "<h2>" + data.name + "</h2>" +
        "<p>Temperature: " + data.main.temp + "°C</p>" +
        "<p>Condition: " + data.weather[0].description + "</p>";
    })
    .catch(function(error) {
      document.getElementById("weatherResult").innerHTML =
        "<p style = 'color:red'>Error fetching weather</p>";
    });
}

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
