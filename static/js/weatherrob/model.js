
/**
 * main model
 */
empathylab.weatherrob.Model = (function() {

	/**
	 * Constructor
	 */
	function Model() {
		var self = this;
		self.location;
		self.model = {};
		self.constants = new empathylab.weatherrob.Constants();
		self.updateModel(self.constants.LOCATIONS.CONSHY.ADDRESS);
	}


	/**
	 * get the location data from the API
	 */
	Model.prototype.getLocation = function(address) {
		var self = this;
		var searchUrl = self.constants.URLS.GEOLOCATION + escape(address);
		var location;
		$.ajax({
			type: 'get',
			url: searchUrl,
			success: function(data) {
				if(data.hasOwnProperty("ResultSet") && data.ResultSet.Results.length>0) {
					location = data.ResultSet.Results[0];
				}
			},
			async: false,
			dataType: 'json'
		});
		return location;
	};

	Model.prototype.getWeatherForLocation = function(woeid) {
		var self = this;
		var weatherUrl = self.constants.URLS.WEATHER + woeid;
		var weatherData;
		$.ajax({
			type: 'get',
			url: weatherUrl,
			success: function(data) {
				weatherData = data;
			},
			async: false,
			dataType: 'json'
		});

		return weatherData;
	};

	Model.prototype.updateModel = function(locationSearch) {
		var self = this;
		self.model.location = self.getLocation(locationSearch);
		if(self.model.location) {
			self.model.weatherData = self.getWeatherForLocation(self.model.location.woeid);
		}
		console.log(self.model);
	};

	Model.prototype.setColor = function() {
		var self = this;
		
	};

	return Model; 

})();
