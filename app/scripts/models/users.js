var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(router){
    this.save();
    router.navigate('#/login/', {trigger: true});
  }
});

module.exports = User;
