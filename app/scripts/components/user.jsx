// Import Dependecies
var React = require('react');
var User = require('../models/users.js');
var setupHeaders = require('../models/parse-utility.js').setupHeaders;

// Import components
var Template = require('./nav-bar.jsx');

var UserInfo = React.createClass({
  render: function(){
    return (
      <Template>
        user
      </Template>
    )
  }
});

module.exports = UserInfo;
