// Import Dependecies
var React = require('react');
var $ = window.jQuery = require('jquery');

require('bootstrap-sass');

function UserGreeting(props){
  return <p className="navbar-text navbar-right">Signed in as <a onClick={props.navigateUser} className="navbar-link">{props.isLoggedIn}</a></p>;
}

function GuestGreeting(props){
  return <p className="navbar-text navbar-right"><a href="#signup/" className="navbar-link">Sign Up</a> or <a href="#login/" className="navbar-link">Log In</a></p>
}

var Greeting = React.createClass({
  getInitialState: function(){
    return {
      isLoggedIn: JSON.parse(localStorage.getItem('movieUsername'))
    }
  },
  navigateUser: function(e){
    e.preventDefault();
    this.props.router.navigate('#/user/', {trigger: true});
  },
  render: function(){
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting isLoggedIn={isLoggedIn} navigateUser={this.navigateUser}/>;
    }
    return <GuestGreeting />;
  }
});

var NavBar = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-links" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
            </button>
            <a className="navbar-brand" href="#">Meta Movie</a>
          </div>
          <div className="collapse navbar-collapse" id="navigation-links">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Top <span className="glyphicon glyphicon-film" aria-hidden="true"></span></a></li>
              <li><a href="#rate/">Rate <span className="glyphicon glyphicon-fire" aria-hidden="true"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span></a></li>
              <li><Greeting router={this.props.router} /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar router={this.props.router}/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Template;
