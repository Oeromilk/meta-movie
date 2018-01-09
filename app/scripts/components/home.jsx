// Import Dependecies
var React = require('react');

// Import components
var Template = require('./nav-bar.jsx');

var HomeContainer = React.createClass({
  render: function(){
    return (
      <Template router={this.props.router}>
        <h1>Movie Meta</h1>
      </Template>
    )
  }
});

module.exports = HomeContainer;
