const express = require('express');
const router = express.Router();

// const axios = require('axios');
const geoLocation = require('../controllers/locationController');
const weather = require('../controllers/weatherController');
// const maps_key = process.env.MAPS_KEY;
// const weather_key = process.env.WEATHER_KEY;


router.get('/', (req, res) => {
  res.render('home.ejs');
});


router.post('/', (req, res) => {
  // console.log(req.body.search);
  const obj = geoLocation.geoLocation(req.body.search)
    .then((response) => {
      // console.log('in routes ' + JSON.stringify(response));
      return response;
    })
    .then((response) => {
      // console.log(response);
      return weather.weather(response);     
    })
    .then(response => console.log(response))
    .catch(e => console.log("oh-oh" + e));


  // The following code works, don't touch until replaced:
  /* const encodedAddress = encodeURIComponent(req.body.search);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${maps_key}`;

  axios.get(url)
    .then((response) => {
      console.log('\n');
      console.log(response.data.results[0].formatted_address, ':\n');
      return {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longtitude: response.data.results[0].geometry.location.lng,
      };
    })
    .then((response) => {
      const lat = response.latitude;
      const lng = response.longtitude;
      const weatherUrl = `https://api.forecast.io/forecast/${weather_key}/${lat},${lng}?units=ca`;
      return axios.get(weatherUrl);
    })
    .then((response) => {
      console.log(`Temperature: ${response.data.currently.temperature}`);
      console.log(`Feels like: ${response.data.currently.apparentTemperature}`);
      console.log(`Humidity: ${response.data.currently.humidity * 100}%`);
      console.log(`UV Index: ${response.data.currently.uvIndex}`);
    })
    .catch(err => console.log(err)); */
  /////////////////////////////////////////////////////////////////

  res.render('home.ejs');
});


module.exports = router;
