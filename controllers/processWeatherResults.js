const { formatTime } = require('./formatTime');


const processWeatherResults = (apiResponse) => {
  
  // TODO: match keys to API keys, except for 'time'
  const currently = {
    time: formatTime(apiResponse.data.timezone,
      new Date(apiResponse.data.currently.time * 1000)),
    summary: apiResponse.data.currently.summary,
    temperature: apiResponse.data.currently.temperature,
    apparentTemperature: apiResponse.data.currently.apparentTemperature,
    humidity: apiResponse.data.currently.humidity * 100,
    uvIndex: apiResponse.data.currently.uvIndex,
    pressure: apiResponse.data.currently.pressure,
  };

  const hourly = [1, 3, 6, 9, 12, 18];
  const hourlyWantedData = ['temperatureHigh', 'temperatureLow'];   // Wrong datapoints; do not exist in "hourly"
  const hourlyResults = {};
  hourly.forEach((e) => {
    hourlyResults[e] = {};
    hourlyWantedData.forEach((f) => {
      hourlyResults[e][f] = apiResponse.data.hourly.data[e][f];
    });
  });

  const daily = [1, 2, 3, 4];
  const dailyWantedData = ['summary', 'precipProbability', 'precipIntensity', 'temperatureHigh', 'temperatureLow'];
  const dailyResults = {};
  daily.forEach((e) => {
    console.log(dailyResults);
    dailyResults[e] = {};
    dailyWantedData.forEach((f) => {
      dailyResults[e][f] = apiResponse.data.daily.data[e][f];
    });
  });

  const obj = {
    currently,
    hourlyResults,
    dailyResults,
  };

  // console.log(obj);

  return obj;

  // const result = {};

  // daily.forEach((e) => {
  //   result[e] = {};
  //   dailyWantedData.forEach((f) => {
  //     result[e][f] = data.daily.data[e][f];
  //   });
  // });
};


module.exports.processWeatherResults = processWeatherResults;
