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
		if(!self.model.hasError) {
			self.updateBadge();
			self.updateRob();
		}
	};

	Controller.prototype.bindSearch = function() {
		var self = this;
		var $searchbox = $('#txt-searchbox');
		var timeout;

		function startSearchDelay() {
			timeout = setTimeout(function() {
				if($searchbox.val().length > 0) {
					self.model.updateModel($searchbox.val());
					self.updateView();
				}
			}, self.constants.SEARCH.DELAY);
		}

		$searchbox.keydown(function(e) {
			
			switch(e.keyCode) {
				case 13:
					self.model.updateModel($searchbox.val());
					self.updateView();
					break;
				default:
					clearTimeout(timeout);
					startSearchDelay();
					break;
			}
		});
	};

	Controller.prototype.updateRob = function() {
		var self = this;

		var $element = $("#rob");
		$element.css("background", self.model.getColor());

	}

	Controller.prototype.updateBadge = function() {
		var self = this;
		var tmpl = empathylab.weatherrob.templates.CurrentCondition();
		self.viewModel.badge = { location : self.model.data.location,
								 description : self.model.data.weatherData.condition.text,
								 weatherData : self.model.data.weatherData,
								 image: self.model.data.weatherData.condition.image};

		
		var html = Mustache.to_html(tmpl, self.viewModel.badge);

		$("#badge").html(html);	
	};
	return Controller;
})();