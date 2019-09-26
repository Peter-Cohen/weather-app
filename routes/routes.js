const express = require('express');
const { getGeoCodeCoords } = require('../controllers/getGeoCodeCoords');
const { getWeather } = require('../controllers/getWeather');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('home.ejs');
});


router.post('/', (req, res) => {
  let formattedAddress;

  console.log('in routes, req.body.search = ', req.body.search);                  //////////
  console.log('in routes, typeof req.body.search = ', typeof req.body.search);    //////////
  console.log('in routes, req.body = ', req.body.search);                         //////////

  getGeoCodeCoords(req.body.search)
    .then((response) => {
      console.log('After geocode call', response.address);                        //////////
      formattedAddress = response.address;
      return getWeather(response);
    })
    .then((response) => {
      console.log('After weather call', response.currently);                        //////////
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
