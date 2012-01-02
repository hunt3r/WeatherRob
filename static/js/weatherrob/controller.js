empathylab.weatherrob.Controller = (function() {
	
	function Controller() {
		var self = this;
	}

	// Controller.prototype.updateView = function() {
	// 	var self = this;
	// 	if(!self.model.hasError) {
	// 		self.updateBadge();
	// 		self.updateRob();
	// 	}
	// };

	// Controller.prototype.bindSearch = function() {
	// 	var self = this;
	// 	var timeout;

	// 	function startSearchDelay() {
	// 		timeout = setTimeout(function() {
	// 			if(self.$searchbox.val().length > 0) {
	// 				self.model.updateModel(self.$searchbox.val());
	// 				self.updateView();
	// 			}
	// 		}, self.constants.SEARCH.DELAY);
	// 	}

	// 	self.$searchbox.keydown(function(e) {
			
	// 		switch(e.keyCode) {
	// 			case 13:
	// 				self.model.updateModel(self.$searchbox.val());
	// 				self.updateView();
	// 				break;
	// 			default: //each keystroke resets the timer
	// 				clearTimeout(timeout);
	// 				startSearchDelay();
	// 				break;
	// 		}
	// 	});
	// };


	// Controller.prototype.updateRob = function() {
	// 	var self = this;

	// 	var $element = $("#rob");
	// 	$element.css("background", self.model.getColor());

	// };

	// Controller.prototype.updateBadge = function() {
	// 	var self = this;
	// 	var tmpl = empathylab.weatherrob.templates.CurrentCondition();
	// 	self.viewModel.badge = { location : self.model.data.location,
	// 							 description : self.model.data.weatherData.condition.text,
	// 							 weatherData : self.model.data.weatherData,
	// 							 image: self.model.data.weatherData.condition.image};

		
	// 	var html = Mustache.to_html(tmpl, self.viewModel.badge);

	// 	$("#badge").html(html);	
	// };

	// return Controller;
})();