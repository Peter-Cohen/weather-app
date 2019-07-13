const express = require('express');
const { geoLocation } = require('../controllers/locationController');
const { weather } = require('../controllers/weatherController');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('home.ejs');
});


router.post('/', (req, res) => {
  let formattedAddress;

  geoLocation(req.body.search)
    .then((response) => {
      formattedAddress = response.address;
      return weather(response);
    })
    .then((response) => {
      console.log(formattedAddress);
      console.log(response);
      res.render('home.ejs', {
        results: response,
        status: `Showing results for ${formattedAddress}`,
      });
    })
    .catch((err) => {
      console.log('oh-oh' + err)
      res.render('home.ejs', {
        status: `Sorry, can not find ${req.body.search}`,
      });
    });
});


module.exports = router;
