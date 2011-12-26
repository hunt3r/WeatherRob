
/**
 * main model
 */
empathylab.weatherrob.Model = (function() {

/**
 * Constructor
 */
function Model(_defaultLocation) {
	var self = this;
	self.location;
	self.data = {};
	self.constants = new empathylab.weatherrob.Constants();
	self.updateModel(_defaultLocation);
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

/**
 * getWeather(Yahoo API woeid)
 */
Model.prototype.getWeather = function(woeid) {
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
	self.data.location = self.getLocation(locationSearch);
	if(self.data.location) {
		self.data.weatherData = self.getWeather(self.data.location.woeid);
	}
	console.log(self.data);
};

Model.prototype.setColor = function() {
	var self = this;
	
};

Model.prototype.getCurrentWeatherDescription = function() {
	var self = this;
	return self.staticData.CONDITION_CODES[self.data.weatherData.condition.code].description;
}

Model.prototype.staticData = {
	CONDITION_CODES : { 
		0: { description : "tornado"},
		1: { description : "tropical storm"},
		2: { description : "hurricane"},
		3: { description : "severe thunderstorms"},
		4: { description : "thunderstorms"},
		5: { description : "mixed rain and snow"},
		6: { description : "mixed rain and sleet"},
		7: { description : "mixed snow and sleet"},
		8: { description : "freezing drizzle"},
		9: { description : "drizzle"},
		10: { description : "freezing rain"},
		11: { description : "showers"},
		12: { description : "showers"},
		13: { description : "snow flurries"},
		14: { description : "light snow showers"},
		15: { description : "blowing snow"},
		16: { description : "snow"},
		17: { description : "hail"},
		18: { description : "sleet"},
		19: { description : "dust"},
		20: { description : "foggy"},
		21: { description : "haze"},
		22: { description : "smoky"},
		23: { description : "blustery"},
		24: { description : "windy"},
		25: { description : "cold"},
		26: { description : "cloudy"},
		27: { description : "mostly cloudy (night)"},
		28: { description : "mostly cloudy (day)"},
		29: { description : "partly cloudy (night)"},
		30: { description : "partly cloudy (day)"},
		31: { description : "clear (night)"},
		32: { description : "sunny"},
		33: { description : "fair (night)"},
		34: { description : "fair (day)"},
		35: { description : "mixed rain and hail"},
		36: { description : "hot"},
		37: { description : "isolated thunderstorms"},
		38: { description : "scattered thunderstorms"},
		39: { description : "scattered thunderstorms"},
		40: { description : "scattered showers"},
		41: { description : "heavy snow"},
		42: { description : "scattered snow showers"},
		43: { description : "heavy snow"},
		44: { description : "partly cloudy"},
		45: { description : "thundershowers"},
		46: { description : "snow showers"},
		47: { description : "isolated thundershowers"},
		3200: { description : "not available" }
	}
};

return Model; 

})();
