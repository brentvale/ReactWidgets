var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = require('./components/autocomplete.jsx').Autocomplete;
var Clock = require('./components/clock.jsx').Clock;
var Weather = require('./components/clock.jsx').Weather;
var Tabs = require('./components/tabs.jsx').Tabs;

var Widgets = React.createClass({
  
  render: function () {
    var tabsData = [{title: "Home", content: ["section1", "section2", "section3"]}, 
      {title: "About", content: ["section1", "section2", "section3"]}];
      var names = ["brent", "jake", "gabe", "brad", "leslie", "erica", "kelly", "jay"];
    return(
      <div>
        Widget #1 Tabs<Tabs tabsData={tabsData} />
        Widget #2 Clock<Clock />
        Widget #3 Weather (from my front porch)<Weather />
        Widget #4 Autocompletion<Autocomplete names={names} />
      </div>
    );
  }
  
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});