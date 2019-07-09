const axios = require('axios');

const maps_key = process.env.MAPS_KEY;

const geoLocation = (rawLocation) => {

  // console.log(rawLocation);

  const encodedAddress = encodeURIComponent(rawLocation);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${maps_key}`;

  return axios.get(url)
    .then((response) => {
      // console.log('\n');
      // console.log('in controller ' + response.data.results[0].formatted_address, ':\n');
      return {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longtitude: response.data.results[0].geometry.location.lng,
      };
    });
    // .catch((err) => console.log(err));
};

module.exports.geoLocation = geoLocation;
