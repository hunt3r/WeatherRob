empathylab.weatherrob.Controller = (function() {
	function Controller() {
		var self = this;
		self.constants = new empathylab.weatherrob.Constants();
		self.model = new empathylab.weatherrob.Model(self.constants.LOCATIONS.CONSHY.ADDRESS);
		self.viewModel = {};

		self.updateView();
		self.bindSearch();
	}

	Controller.prototype.updateView = function() {
		var self = this;
		self.updateBadge();
		
	};

	Controller.prototype.bindSearch = function() {
		var self = this;
		var $searchbox = $('#txt-searchbox');

		$searchbox.keydown(function(e) {
			
			switch(e.keyCode) {
				case 13:
					self.model.updateModel($searchbox.val());
					self.updateView();
					break;
				default:
					console.log(e.keyCode);
					break;
			}
		});
	};

	Controller.prototype.updateBadge = function() {
		var self = this;
		var tmpl = empathylab.weatherrob.templates.CurrentCondition();
		self.viewModel.badge = { location : self.model.data.location,
								 description : self.model.getCurrentWeatherDescription(),
								 humidity : self.model.data.weatherData.atmosphere.humidity,
								 temperature : self.model.data.weatherData.condition.temperature,
								 image: self.model.data.weatherData.condition.image};

		
		var html = Mustache.to_html(tmpl, self.viewModel.badge);

		$("#badge").html(html);	
	};
	return Controller;
})();