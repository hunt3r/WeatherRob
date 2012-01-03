//Declare base application package
var empathylab = {};
empathylab.weatherrob = {};
empathylab.weatherrob.templates = {};


require.config({
  paths: {
    jquery: 'lib/jquery.min.js',
    underscore: 'lib/underscore-min.js',
    backbone: 'lib/backbone-min.js',
    mustache: 'lib/mustache/mustache.js',
    raphael: 'lib/raphael.js',
    text: 'lib/requirejs/text.js'
  }

});

require(['app'], function(app){
  var app_view = new AppView;
});


// <!-- External Libraries -->
// 		<script type="text/javascript" src="static/js/lib/jquery.min.js"></script>
// 		<script type="text/javascript" src="static/js/lib/underscore-min.js"></script>
// 		<script type="text/javascript" src="static/js/lib/backbone-min.js"></script>
// 		<script type="text/javascript" src="static/js/lib/mustache/mustache.js"></script>
// 		<script type="text/javascript" src="static/js/lib/raphael.js"></script>
// 		<!-- Internal Libraries and Constants -->
// 		<script type="text/javascript" src="static/js/weatherrob/app.js" ></script>

// 		<!-- Templates -->
// 		<script type="text/javascript" src="static/js/weatherrob/templates/current_condition.tmpl.js" ></script>


// 		<script type="text/javascript" src="static/js/weatherrob/constants.js" ></script>

// 		<script type="text/javascript" src="static/js/weatherrob/utils.js" ></script>
// 		<script type="text/javascript" src="static/js/weatherrob/model.js" ></script>
// 		<script type="text/javascript" src="static/js/weatherrob/view.js" ></script>

// 				