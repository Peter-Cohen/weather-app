// const {
//   findTimeZone, getZonedTime,
// } = require('timezone-support');

// const convertToLocal = (timeZone, unixTime) => {
//   console.log("in helper Time: ", getZonedTime(unixTime, findTimeZone(timeZone)));

//   return getZonedTime(unixTime, findTimeZone(timeZone));
// };

const { listTimeZones } = require('timezone-support');
const { parseFromTimeZone, formatToTimeZone } = require('date-fns-timezone');


const formatTime = (timezone, unixTime) => {
  const format = 'dddd, D MMMM YYYY, HH:mm';
  const output = formatToTimeZone(unixTime, format, { timeZone: timezone });
  return output;
};


// const formatTime = (dateTimeObject) => {
//   const formatted = `${dateTimeObject.hours}:${dateTimeObject.minutes}`;
//   return formatted;
// };

// module.exports.convertToLocal = convertToLocal;
module.exports.formatTime = formatTime;
