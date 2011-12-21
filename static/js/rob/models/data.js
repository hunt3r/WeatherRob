
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
		$.ajax({
			url: self.constants.URLS.GEOLOCATION,
			type: 'get',
			success: function(data) {
				if(data.ResultsSet && data.ResultsSet.Results.length>0) {
					location = data.ResultSet.Results[0];
				}
			},
			dataType: 'json'
		});
		return location;
	}

	Data.prototype.updateModel = function() {
		var self = this;
		self.location = self.getLocation(self.constants.LOCATIONS.CONSHY.ADDRESS);
	}

	return Data; 

})();
