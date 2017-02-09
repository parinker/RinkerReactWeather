var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=e4347171136181b15abf3775e78939d6';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      // since openweathermap has an odd structure, we need to check if
      // the result has a 'cod' and a 'message' -- if so, it means something
      // went wrong
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather for that location.');
      } else {
        return res.data.main.temp;
      }

    }, function(err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  },

  getTempLatLong: function(result) {

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${result.lat}&lon=${result.long}`;

    return axios.get(requestUrl).then(function(res) {

      // since openweathermap has an odd structure, we need to check if
      // the result has a 'cod' and a 'message' -- if so, it means something
      // went wrong
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather for that location.');
      } else {
        return res.data.main.temp;
      }

    }, function(err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
