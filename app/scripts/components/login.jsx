// Import Dependecies
var React = require('react');
var signIn = require('../models/parse-utility.js').logIn;
var setupHeaders = require('../models/parse-utility.js').setupHeaders;

var Login = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    }
  },
  handleUserName: function(e){
    this.setState({username: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    setupHeaders();
    signIn(this.state, this.props.router);
  },
  render: function(){
    return (
      <div className="well well-lg center-item">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleUserName} value={this.state.userName} type="text" className="form-control" id="userName" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-default" >Log In</button>
        </form>
      </div>
    )
  }
});

module.exports = Login;
