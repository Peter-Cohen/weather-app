const axios = require('axios');
const { processWeatherResults } = require('../helpers/processWeatherResults');

const weatherKey = process.env.WEATHER_KEY;


const weather = (coord) => {
  const lat = coord.latitude;
  const lng = coord.longtitude;
  const weatherUrl = `https://api.forecast.io/forecast/${weatherKey}/${lat},${lng}?units=ca`;
  return axios.get(weatherUrl)
    .then(response => processWeatherResults(response))
    .catch(error => console.log(error));
};


module.exports.weather = weather;
