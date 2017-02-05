var React = require('react');

var WeatherMessage = ({temp, location}) => (
  <h3>It's {temp}&deg; F in {location}.</h3>
)

module.exports = WeatherMessage;
