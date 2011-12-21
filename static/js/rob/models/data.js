
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
		self.constants = new rob.Constants();
		self.updateModel();
	}

	/**
	 * get the location data from the API
	 */
	Data.prototype.getLocation = function(address) {
		var self = this;
		console.log("Getting location");
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

	Data.prototype.updateModel = function() {
		var self = this;
		self.location=self.getLocation(self.constants.LOCATIONS.CONSHY.ADDRESS);
		console.log(self.location);
	}

	return Data; 

})();
