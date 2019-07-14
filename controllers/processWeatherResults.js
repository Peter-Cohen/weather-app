const { formatTime } = require('./formatTime');


const processWeatherResults = (apiResponse) => {
  
  // Currently
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


  // Hourly
  const hourly = [1, 3, 6, 9, 12, 18];
  const hourlyWantedData = ['temperature', 'precipIntensity', 'precipProbability'];
  const hourlyResults = {
    summary: apiResponse.data.hourly.summary,
    data: {},
  };

  hourly.forEach((e) => {
    hourlyResults.data[e] = {};
    hourlyWantedData.forEach((f) => {
      hourlyResults.data[e][f] = apiResponse.data.hourly.data[e][f];
    });
  });


  // Daily
  const daily = [1, 2, 3, 4];
  const dailyWantedData = ['summary', 'precipProbability', 'precipIntensity', 'temperatureHigh', 'temperatureLow'];
  const dailyResults = {
    summary: apiResponse.data.daily.summary,
    data: {},
  };

  daily.forEach((e) => {
    dailyResults.data[e] = {};
    dailyWantedData.forEach((f) => {
      dailyResults.data[e][f] = apiResponse.data.daily.data[e][f];
    });
  });

  const obj = {
    currently,
    hourly: hourlyResults,
    daily: dailyResults,
  };

  console.log(JSON.stringify(obj, null, 2));

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
