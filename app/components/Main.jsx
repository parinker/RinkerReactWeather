var React = require('react');
var Nav = require('Nav');

var Main = (props) => (
  <div>
    <Nav />

    <div className="row">
      <div className="medium-8 large-6 small-centered">
        {props.children}
        <br /> <br />Weather data provided by <a href="http://openweathermap.org/">OpenWeatherMap</a>.
        <br /> Geocoding services provided by Google Geocoding API.
      </div>
    </div>


  </div>
)


module.exports = Main;
