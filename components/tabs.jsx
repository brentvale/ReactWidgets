var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {focused: 0};
  },
  
  addSubNavVisibility: function(e){
    e.target.nextSibling.className = "visibility-visible";
  },
  
  removeSubNavVisibility: function(e){
    e.target.nextSibling.className = "";
  },
  
  clicked: function(index){
    this.setState({focused: index})
  },
  
  render: function(){
    var self = this;
    
    return(
      <section className="widgetContainer tabs">
        <ul>
          {this.props.tabsData.map(function(m, index){
            
            var style= '';
            if(self.state.focused == index){
              style = 'focused';
            }
            return(
              <li key={index}>
                <h1 className={style} onClick={self.clicked.bind(self, index)} 
                                      onMouseOver={self.addSubNavVisibility}
                                      onMouseOut={self.removeSubNavVisibility}>{m.title}</h1>
                <article>
                  <ul className="navSubList">
                    {m.content.map(function(text, jdx){
                      return (<li className="centerAligned" key={jdx}>{text}</li>);
                    })}
                  </ul>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
});
module.exports = {
  Tabs: Tabs
}