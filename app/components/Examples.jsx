var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out!</p>
    <ol>
      <li><Link to='/?location=Alexandria,VA'>Alexandria, VA</Link></li>
      <li><Link to='/?location=Mexico%20City'>Mexico City</Link></li>
    </ol>
  </div>
)

module.exports = Examples;
