const axios = require('axios');

const weather_key = process.env.WEATHER_KEY;

const weather = (coord) => {
  const lat = coord.latitude;
  const lng = coord.longtitude;
  const weatherUrl = `https://api.forecast.io/forecast/${weather_key}/${lat},${lng}?units=ca`;
  return axios.get(weatherUrl)
    .then((response) => { 
      return {
        currentTemp: response.data.currently.temperature,
        feelsLike: response.data.currently.apparentTemperature,
        humidity: response.data.currently.humidity * 100,
        uv: response.data.currently.uvIndex,
      };
    })
    .catch(error => console.log(error));
};

module.exports.weather = weather;
