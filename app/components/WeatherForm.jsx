var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault(); // prevents browser from refreshing

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function() {
    return (
      <form onSubmit ={this.onFormSubmit}>
        <div><input type="text" ref="location" placeholder='Enter City Name' /></div>
        <div><button className="expanded button hollow">Get Weather</button></div>
      </form>
    );
  }

});

module.exports = WeatherForm;
