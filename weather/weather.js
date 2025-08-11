const API_KEY = "730ecb109a1a6e6a857f80aeb4087c22";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
  let a;
  let details;
  let city = document.getElementById("cityInput").value;
  if (city == "") {
    return alert("Please enter a city name");
    
  }

  fetch(BASE_URL + "?q=" + city + "&appid=" + API_KEY + "&units=metric")
  .then(function(myresult) {return  myresult.json()})
  .then(function(data) {
    document.getElementById("weatherResult").innerHTML = `<h2> ${data.name} </h2> <p>Temperature:   ${data.main.temp}  °C</p>  <p>Condition:  ${data.weather[0].description} </p>`;
      })
  .catch(function() {      
      document.getElementById("weatherResult").innerHTML = "<p>Error fetching weather</p>";
    });

    

  // const res = await fetch(BASE_URL + "?q=" + city + "&appid=" + API_KEY + "&units=metric");
  // const data =await res.json();  
  // document.getElementById("weatherResult").innerHTML = `<h2> ${data.name} </h2> <p>Temperature:   ${data.main.temp}  °C</p>  <p>Condition:  ${data.weather[0].description} </p>`;
  
  // console.log(data)
   
    
}
// my raw json string https://api.openweathermap.org/data/2.5/weather?q=London&appid=730ecb109a1a6e6a857f80aeb4087c22&units=metric




document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
console.log(456);

