const express = require('express');
const router = express.Router();

const geoLocation = require('../controllers/locationController');
const weather = require('../controllers/weatherController');


router.get('/', (req, res) => {
  res.render('home.ejs');
});


router.post('/', (req, res) => {
  let formattedAddress;

  geoLocation.geoLocation(req.body.search)
    .then((response) => {
      formattedAddress = response.address;
      return weather.weather(response);
    })
    .then((response) => {
      console.log(formattedAddress);
      console.log(response);
    })
    .catch(e => console.log("oh-oh" + e));

  res.render('home.ejs');
});


module.exports = router;
