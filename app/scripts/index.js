// Import Dependecies
var $ = require('jquery');
var Backbone = require('backbone');
require('./router.js');

// Dom Ready
$(function(){
  Backbone.history.start();
});
