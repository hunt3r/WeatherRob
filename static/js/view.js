empathylab.weatherrob.View = Backbone.View.extend({
	initialize: function(args) {
		_.bindAll(this, 'changeLocation');
		this.model.bind('change:location'), this.changeLocation);
	}

});