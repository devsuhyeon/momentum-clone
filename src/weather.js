const weatherIcon = document.querySelector('.weather__icon');
const weatherTemp = document.querySelector('.weather__temp');
const weatherCity = document.querySelector('.weather__city');
const weatherDescription = document.querySelector('.weather__description');

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch('/src/apikeys.json')
    .then((response) => response.json())
    .then((data) => {
      const API_KEY = data.apikeys.openweathermap;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      return fetch(url);
    })
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherIcon.src = imageUrl;
      weatherDescription.innerText = description;
      weatherTemp.innerHTML = `${temp}&#8451;`;
      weatherCity.innerText = city;
    })
    .catch(console.log);
}

function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
