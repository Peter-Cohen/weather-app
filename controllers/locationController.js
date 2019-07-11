const axios = require('axios');

const mapsKey = process.env.MAPS_KEY;

const geoLocation = (rawLocation) => {
  const encodedAddress = encodeURIComponent(rawLocation);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${mapsKey}`;

  return axios.get(url)
    .then(response => ({
      address: response.data.results[0].formatted_address,
      latitude: response.data.results[0].geometry.location.lat,
      longtitude: response.data.results[0].geometry.location.lng,
    }));
};


module.exports.geoLocation = geoLocation;
