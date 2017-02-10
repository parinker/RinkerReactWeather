var React = require('react');
var Nav = require('Nav');

var Main = (props) => (
  <div>
    <Nav />

    <div className="row">
      <div className="medium-8 large-6 small-centered">
        {props.children}
        <br /> <br />Weather data provided by <a href="http://openweathermap.org/">OpenWeatherMap</a>.
        <br /> Geocoding services provided by <a href="https://developers.google.com/maps/documentation/geolocation/intro">Google</a>.
      </div>
    </div>


  </div>
)

module.exports = Main;
