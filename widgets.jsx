var React = require('react');
var ReactDOM = require('react-dom');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});