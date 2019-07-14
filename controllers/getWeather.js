const axios = require('axios');
const { processWeatherResults } = require('./processWeatherResults');

const weatherKey = process.env.WEATHER_KEY;


const getWeather = (coord) => {
  const lat = coord.latitude;
  const lng = coord.longtitude;
  const weatherUrl = `https://api.forecast.io/forecast/${weatherKey}/${lat},${lng}?units=ca`;
  return axios.get(weatherUrl)
    .then((response) => {
      console.log(JSON.stringify(response.data.hourly, null, 2));
      return processWeatherResults(response);
    })
    .catch(error => console.log(error));
};


module.exports.getWeather = getWeather;
