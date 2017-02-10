var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({

  onSearch: function(e) {
    e.preventDefault();

    var search = this.refs.search_nav_bar.value;
    var searchEncoded = encodeURIComponent(search);

    if (searchEncoded && searchEncoded.length > 0) {
      this.refs.search_nav_bar.value = '';
      window.location.hash = '#/?search_location=' + searchEncoded;
    }

  },

  render: function() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li><IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink></li>
            <li><Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li><input type='search' ref='search_nav_bar' placeholder='Search weather by city'/></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
    </div>
  );}
  }
);


module.exports = Nav;
