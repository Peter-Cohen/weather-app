const axios = require('axios');

const mapsKey = process.env.MAPS_KEY;

const getGeoCodeCoords = (rawLocation) => {
  const encodedAddress = encodeURIComponent(rawLocation);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${mapsKey}`;

  console.log('in getGeoCoord, raw location = ', rawLocation);           //////////
  console.log('in getGeoCoord, encodedAddress = ', encodedAddress);      //////////
  console.log('in getGeoCoord, url', url);                               //////////

  return axios.get(url)
    .then(response => ({
      address: response.data.results[0].formatted_address,
      latitude: response.data.results[0].geometry.location.lat,
      longtitude: response.data.results[0].geometry.location.lng,
    }));
};


module.exports.getGeoCodeCoords = getGeoCodeCoords;
