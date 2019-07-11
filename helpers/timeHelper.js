const {
  listTimeZones, findTimeZone, getZonedTime, getUnixTime 
} = require('timezone-support');

const convertToLocal = (timeZone, unixTime) => {
  // console.log("in helper Timezone: ", timeZone);
  console.log("in helper Time: ", getZonedTime(unixTime, findTimeZone(timeZone)));

  return getZonedTime(unixTime, findTimeZone(timeZone));
};

const formatTime = (dateTimeObject) => {
  const formatted = `${dateTimeObject.hours}:${dateTimeObject.minutes}`;
  return formatted;
};

module.exports.convertToLocal = convertToLocal;
module.exports.formatTime = formatTime;
