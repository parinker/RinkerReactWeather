var React = require('react');

var About = (props) => (
  <div>
    <h1 className="text-center">About</h1>
    <p>This app was developed by following along with the excellent Udemy
    course "The Complete React Web App Developer Course," taught by Andrew Meade.</p>
    <p>The weather data is provided via <a href="http://openweathermap.org/">OpenWeatherMap</a>; the geolocation
    data used to tell OpenWeatherMap where to look is provided using the
  Google Geocoding API, which has documentation <a href="https://developers.google.com/maps/documentation/geolocation/intro">here</a>. </p>
  </div>
)

module.exports = About;
