define(['underscore','backbone', 'jquery'], 
function(_, Backbone, $) {
	var Constants = {
		LOCATIONS : {
			CONSHY : {
				ADDRESS : "101 East 8th Ave, 19428"
			}
		},
		URLS : {
			GEOLOCATION : "api/where/geocode?flags=j&q=",
			WEATHER : "api/weather/forecastjson?w="
		},
		SEARCH : {
			DELAY : 600
		},
		COLOR : {
			TAN0 : 0xffffff,
			TANX : 0x66350d
		}
	}
	return Constants;
});