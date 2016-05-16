var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {inputField: ""};
  },
  handleInput: function(event){
    this.setState({inputField: event.currentTarget.value});
  },
  findMatches: function(){
    var matches = [];
    
    if(this.state.inputField.length == 0){
      return this.props.names;
    }

    this.props.names.forEach(function(name){
      var stringEndIdx = this.state.inputField.length;
      if(name.toLowerCase().slice(0, stringEndIdx) == this.state.inputField.toLowerCase()){
        matches.push(name);
      }
    }.bind(this));
    
    return matches;
  },
  render: function(){
    var matchedNames = this.findMatches().map(function(name, idx){
      return (<li key={idx}>{name}</li>);
    }.bind(this));
    
    return(
      <section>
        <h3>Autocomplete</h3>
        <input onChange={this.handleInput} value={this.state.inputField}></input>
        <ul>
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {matchedNames}
          </ReactCSSTransitionGroup>
        </ul>
      </section>
    )
  }
});

module.exports = {
  Autocomplete: Autocomplete
};