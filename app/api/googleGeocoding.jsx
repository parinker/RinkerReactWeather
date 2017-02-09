var axios = require('axios');

const GOOGLE_MAPS_GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDydOkl_BlFrp4FrLv5TaGVdbeUXIe0KM8&address=';

var googleFindLatLong = function(location) {

}

module.exports = {
  getLatLong: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${GOOGLE_MAPS_GEOCODING}${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.status == 'ZERO_RESULTS') {
        throw new Error(res.data.status);
      } else {

        var result = res.data.results[0];

        var lat = result.geometry.location.lat;
        var long = result.geometry.location.lng;
        var full_loc = result.formatted_address;

        return {lat: lat, long: long, addr: full_loc};
      }

    }, function(err) {
      throw new Error(err.response.data.status);
    });
  }
}
