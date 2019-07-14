const { formatToTimeZone } = require('date-fns-timezone');

const formatTime = (timezone, unixTime) => {
  const format = 'dddd D MMMM YYYY, HH:mm';
  const output = formatToTimeZone(unixTime, format, { timeZone: timezone });
  return output;
};


module.exports.formatTime = formatTime;
