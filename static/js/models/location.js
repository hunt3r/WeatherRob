define(['underscore','backbone', 'jquery', 'utils', 'constants'], 
function(_, Backbone, $, Utils, Constants) {
	var LocationModel = Backbone.Model.extend({
		defaults: {
			search: null,
			data: null,
			weatherData: null, 
			hasError: false
		},
		initialize: function() {
			if(!this.get("location")) {
				this.setLocation(this.get("search"));
			}	
		},
		setLocation : function(address) {
			var searchUrl = Constants.URLS.GEOLOCATION + escape(address);
			var locationData;
			var hasError=false;
			$.ajax({
				type: 'get',
				url: searchUrl,
				success: function(data) {
					if( data.hasOwnProperty("ResultSet") && data.ResultSet.hasOwnProperty("Results") && data.ResultSet.Results.length>0) {
						locationData = data.ResultSet.Results[0];
					} else {
						hasError=true;
					}
				},
				async: false,
				dataType: 'json'
			});
			this.set({"data": locationData, "hasError":hasError});
		}

	});
	return LocationModel;
});