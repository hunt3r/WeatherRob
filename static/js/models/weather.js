define(['underscore','backbone', 'jquery', 'utils', 'constants', 'models/location'], 
function(_, Backbone, $, Utils, Constants, Location) {
	var WeatherModel = Backbone.Model.extend({
		defaults: {
			location: new Location({"search": Constants.LOCATIONS.CONSHY.ADDRESS})
		},
		initialize: function() {
			if(!this.get("weather") && !this.get("location").get("hasError")) {
				this.setWeather(this.get("location").get("data").woeid);
			}
		},

		/**
		 * getWeather(Yahoo API woeid)
		 */
		setWeather : function(woeid) {
			var self = this;
			var weatherUrl = Constants.URLS.WEATHER + woeid;
			var weatherData;
			var hasError = false;
			$.ajax({
				type: 'get',
				url: weatherUrl,
				success: function(data) {
					if(data.code == 500) {
						hasError=true;
					} else {
						weatherData = data;
					}

				},
				async: false,
				dataType: 'json'
			});
			this.set({"data": weatherData, "hasError": hasError});
		}
	});
	return WeatherModel;
});