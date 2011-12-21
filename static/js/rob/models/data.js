
/**
 * Rider Controller
 */
rob.Data = (function() {

	/**
	 * Constructor
	 */
	function Data() {
		var self = this;
		self.location;
		self.model = {};
		self.constants = new rob.Constants();
		self.updateModel();
	}


	/**
	 * get the location data from the API
	 */
	Data.prototype.getLocation = function(address) {
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
	}

	Data.prototype.getWeatherForLocation = function(woeid) {
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
	}

	Data.prototype.updateModel = function() {
		var self = this;
		self.model.location = self.getLocation(self.constants.LOCATIONS.CONSHY.ADDRESS);
		if(self.model.location) {
			self.model.weatherData = self.getWeatherForLocation(self.model.location.woeid);
		}
		console.log(self.model);
	}

	return Data; 

})();
