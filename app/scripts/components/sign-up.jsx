// Import Dependecies
var React = require('react');
var User = require('../models/users.js');
var setupHeaders = require('../models/parse-utility.js').setupHeaders;

var SignUp = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      userName: '',
      password: '',
      passwordConfirmed: ''
    }
  },
  handleEmail: function(e){
    this.setState({email: e.target.value});
  },
  handleUserName: function(e){
    this.setState({userName: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleConfirmedPassword: function(e){
    this.setState({passwordConfirmed: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    setupHeaders();
    var user = new User();
    var userInfo = {
      email: this.state.email,
      username: this.state.userName,
      password: this.state.password
    }
    user.set(userInfo);
    user.signUp(this.props.router);
  },
  render: function(){
    var disabled = (this.state.password === this.state.passwordConfirmed) ? '' : 'disabled';
    return (
      <div className="well well-lg center-item">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input onChange={this.handleEmail} value={this.state.email} type="email" className="form-control" id="userEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleUserName} value={this.state.userName} type="text" className="form-control" id="userName" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={this.handleConfirmedPassword} value={this.state.passwordConfirmed} type="password" className="form-control" id="confirmPassword" />
          </div>
          <button type="submit" className="btn btn-default" disabled={disabled}>Sign Up</button>
        </form>
      </div>
    )
  }
});

module.exports = SignUp;
