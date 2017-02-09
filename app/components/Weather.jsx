var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var googleGeocoding = require('googleGeocoding');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function() {
    return {isLoading: false, result: {}, isError: false};
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true, isError: undefined});

    // first, find the lat and long we need
    // I did this because OpenWeatherMap's API is kind of strange when
    // it comes to putting in cities...I've found using Google's Geocoding
    // API is much better for that
    googleGeocoding.getLatLong(location).then(
      function (result) {
        //that.setState( {result: result, } );
        that.setState({location: result.addr})
        console.log("Lat ", result.lat, "Long ", result.long)

        // now call the openWeatherMap API using Lat/Long
        openWeatherMap.getTempLatLong(result).then( function (temp) {
          var roundedTemp = Math.round(temp);
          that.setState( {temp: roundedTemp, isLoading: false} );
        }, function(errorMessage) {
          that.setState({isLoading: false, location: '', temperature: '', isError: errorMessage});
        });
    },
    function(errorMessage) {
      that.setState({isLoading: false, location: '', temperature: '', isError: errorMessage.message});
    });
  },

  render: function() {

    var {isLoading, temp, location, isError} = this.state;

    function renderError() {

      if (typeof isError == 'string') {
        return (<ErrorModal />);  // THIS DOESN'T WORK BECAUSE IT'S NOT A STRING
      }

    }

    function renderMessage () {
      if (isLoading) {
        return (<h3 className="text-center">Loading...</h3>);
      } else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp} />);
      }
    }
    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }

});

module.exports = Weather;
