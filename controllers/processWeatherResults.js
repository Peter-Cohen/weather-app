const { formatTime } = require('./formatTime');


const processWeatherResults = (apiResponse) => {
  
  // Currently
  const currently = {
    time: formatTime(apiResponse.data.timezone,
      new Date(apiResponse.data.currently.time * 1000),
      'dddd D MMMM YYYY, HH:mm'),
    summary: apiResponse.data.currently.summary,
    temperature: `${apiResponse.data.currently.temperature} \u2103`,
    apparentTemperature: `${apiResponse.data.currently.apparentTemperature} \u2103`,
    humidity: `${apiResponse.data.currently.humidity * 100}%`,
    uvIndex: apiResponse.data.currently.uvIndex,
    pressure: `${apiResponse.data.currently.pressure} \u33D4`,
  };


  // Hourly
  const whichHours = [1, 3, 6, 9, 12, 18, 24];
  // const hourlyWhichDataPoints = ['temperature', 'precipProbability', 'precipIntensity'];
  const hourlyResults = {
    summary: apiResponse.data.hourly.summary,
    data: {},
  };

  whichHours.forEach((e) => {
    hourlyResults.data[e] = {};
    
    // hourlyWhichDataPoints.forEach((f) => {
    //   hourlyResults.data[e][f] = apiResponse.data.hourly.data[e][f];
    // });

    hourlyResults.data[e].Temperature = `${Math.round(apiResponse.data.hourly.data[e].temperature * 10) / 10} \u2103`;
    hourlyResults.data[e]['Precip chance'] = `${Math.round(apiResponse.data.hourly.data[e].precipProbability * 100 * 10) / 10}%`;
    hourlyResults.data[e]['Precipitation'] = `${Math.round(apiResponse.data.hourly.data[e].precipIntensity * 100) / 100}\u339c`;
    hourlyResults.data[e]['Precip type'] = apiResponse.data.hourly.data[e].precipType || '-';
  });


  // Daily
  const whichDays = [1, 2, 3, 4, 5, 6, 7];
  // const dailyWantedData = ['temperatureHigh', 'temperatureLow', 'precipProbability', 'precipIntensity'];
  const dailyResults = {
    summary: apiResponse.data.daily.summary,
    data: {},
  };

  whichDays.forEach((e) => {
    dailyResults.data[e] = {};
    // dailyWantedData.forEach((f) => {
    //   dailyResults.data[e][f] = apiResponse.data.daily.data[e][f];
    // });
    dailyResults.data[e]['Temp max'] = `${Math.round(apiResponse.data.daily.data[e].temperatureHigh * 10) / 10} \u2103`;
    dailyResults.data[e]['Temp min'] = `${Math.round(apiResponse.data.daily.data[e].temperatureLow * 10) / 10} \u2103`;

    dailyResults.data[e]['Precip chance'] = `${Math.round(apiResponse.data.daily.data[e].precipProbability * 100 * 10) / 10}%`;
    dailyResults.data[e]['Precipitation'] = `${Math.round(apiResponse.data.daily.data[e].precipIntensity * 100) / 100}\u339c`;
    dailyResults.data[e]['Precip type'] = apiResponse.data.daily.data[e].precipType || '-';
  });

  const obj = {
    currently,
    hourly: hourlyResults,
    daily: dailyResults,
  };

  // console.log(JSON.stringify(obj, null, 2));

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
