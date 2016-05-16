var React = require('react');

function toQueryString(obj) {
  var parts = [];
  for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
  }
  return parts.join("&");
};

var Weather = React.createClass({
  getInitialState: function(){
    return {weather: null};
  },
  componentDidMount: function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var params = {
      lat: "37.4215849",
      lon: "-121.7609539"
    };
    url += toQueryString(params);
    url += "&APPID=bafe7980e5f2cc398e11f262ac3a65e7";

    var xmlhttp = new XMLHttpRequest();
    var that = this;
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.status == 200 && xmlhttp.readyState == XMLHttpRequest.DONE) {
        var data = JSON.parse(xmlhttp.responseText);
        that.setState({ weather: data });
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },
  render: function(){    
    var content = "";

    if (this.state.weather) {
      var weather = this.state.weather;
      var temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content += weather.name + "\n";
      content += "Current Temperature:" + temp.toFixed(1)  + " degrees\n";
      content += "Overall: " + weather.weather[0].main + "\n";
      content += "Description: " + weather.weather[0].description + "\n";
      content += "EXACT COORDS (Brent's Deck): LAT=" + weather.coord.lat + "  LONG=" + weather.coord.lon;
    } else {
      content = "loading weather...\n ";
    };
    var toDisplay = content.split("\n").map(function(line){return line});
    return(
      <section className="widgetContainer">
        <h2>This is the weather component</h2>
        {toDisplay.map(function(line, idx){
          return(<p key={idx}>{line}</p>);
        })}
      </section>
    );
  }
});

var Clock = React.createClass({
  getInitialState: function(){
    return {time: new Date()};
  },
  componentDidMount: function(){
    var that = this;
    this.clockId = setInterval(that.tick, 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.clockId);
  },
  tick: function(){
    this.setState({time: new Date()});
  },
  render: function(){
    var time = this.state.time.toString();
    return(
      <section className="widgetContainer">
        <h2>Time = {time}</h2>
      </section>
    );
    
  }
});

module.exports = {
  Clock: Clock,
  Weather: Weather
};