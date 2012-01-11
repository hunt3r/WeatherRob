//Declare base application package
var empathylab = {};
empathylab.weatherrob = {};
empathylab.weatherrob.templates = {};


require.config({
  paths: {
    jquery: 'lib/jquery.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    mustache: 'lib/mustache/mustache',
    raphael: 'lib/raphael',
    text: 'lib/requirejs/text',
    constants: 'constants',
    utils: 'utils'
  }
});

require(['views/app'], function(AppView){
  var app_view = new AppView;
  console.log(app_view);
});
