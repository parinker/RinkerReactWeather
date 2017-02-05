var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => (
  <div>
    Navigation &nbsp;
    <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink> &nbsp;
    <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link> &nbsp;
    <Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
)

module.exports = Nav;
