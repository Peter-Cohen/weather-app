const express = require('express');
const { getGeoCodeCoords } = require('../controllers/getGeoCodeCoords');
const { getWeather } = require('../controllers/getWeather');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('home.ejs');
});


router.post('/', (req, res) => {
  let formattedAddress;

  getGeoCodeCoords(req.body.search)
    .then((response) => {
      formattedAddress = response.address;
      return getWeather(response);
    })
    .then((response) => {
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


router.get('/about', (req, res) => {
  res.render('about.ejs');
});


router.get('/contact', (req, res) => {
  res.render('contact.ejs');
});


module.exports = router;
