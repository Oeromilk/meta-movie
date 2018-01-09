// Import Dependecies
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

// Import Containers for the Router
var HomeContainer = require('./components/home.jsx');
var SignUpContainer = require('./components/sign-up.jsx');
var LoginContainer = require('./components/login.jsx');
var UserContainer = require('./components/user.jsx');
var RateContainer = require('./components/rate.jsx');

// Create App Router to control what is displayed
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'signup/': 'signup',
    'login/': 'login',
    'user/': 'user',
    'rate/': 'rate'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HomeContainer, {router: this}),
      document.getElementById('app')
    );
  },
  signup: function(){
    ReactDom.render(
      React.createElement(SignUpContainer, {router: this}),
      document.getElementById('app')
    )
  },
  login: function(){
    ReactDom.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    )
  },
  user: function(userID){
    ReactDom.render(
      React.createElement(UserContainer, {router: this, userID: userID}),
      document.getElementById('app')
    )
  },
  rate: function(){
    ReactDom.render(
      React.createElement(RateContainer, {router: this}),
      document.getElementById('app')
    )
  }
})

var router = new AppRouter();

module.exports = router;
