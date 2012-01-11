define(['underscore', 'jquery', 'backbone', 'models/weather'], 
function(_, $,  Backbone, Weather) {
	var AppView = Backbone.View.extend({

		el: $("#rob-container"),
		weather: new Weather(),
		updateView : function() {
			var self = this;
		}

	});
	return AppView;
});


