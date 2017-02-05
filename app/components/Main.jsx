var React = require('react');
var Nav = require('Nav');

var Main = (props) => (
  <div>
    <Nav />
    <h2>Main Component</h2>
    {props.children}
    <br /> <br />Weather data provided by <a href="http://openweathermap.org/">OpenWeatherMap</a>.
    <br /> Geocoding services provided by Google Geocoding API.
  </div>
)


module.exports = Main;
