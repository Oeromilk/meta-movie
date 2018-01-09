var $ = require('jquery');
var Backbone = require('backbone');

function setupHeaders(token){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");

      if(token){
        xhr.setRequestHeader("X-Parse-Session-Token", token);
      }
    }
  });
}

function logIn(loginInfo, router){
  $.get('https://grabow.herokuapp.com/login?username=' +
  loginInfo.username + '&password=' + loginInfo.password).then(
    function(response){
      localStorage.setItem('movieUsername', JSON.stringify(response.username));
      localStorage.setItem('movieSession', JSON.stringify(response.sessionToken));
      localStorage.setItem('movieObjectId', JSON.stringify(response.objectId));
      localStorage.setItem('userInfo', JSON.stringify(response));

      router.navigate('#/', {trigger: true});
    });
}

module.exports = {
  setupHeaders: setupHeaders,
  logIn: logIn
}
