empathylab.weatherrob.templates.CurrentCondition = function() {

var tmpl = [];
tmpl.push('<div class="inner">');
tmpl.push('<h3>{{location.city}}, {{location.state}}, {{location.country}}</h3>');
tmpl.push(	'<ul>');
tmpl.push(		'{{#description}}<li>Currently: <span class="value">{{description}}</span></li>{{/description}}');
tmpl.push(		'{{#weatherData.condition.temperature}}<li>Temperature: <span class="value">{{weatherData.condition.temperature}}</span></li>{{/weatherData.condition.temperature}}');
tmpl.push(		'{{#weatherData.atmosphere.humidity}}<li>Humidity: <span class="value">{{weatherData.atmosphere.humidity}}</span></li>{{/weatherData.atmosphere.humidity}}');

tmpl.push(		'{{#image}}<li><img src="{{image}}" /></li>{{/image}}');
tmpl.push(	'</ul>');
tmpl.push('</div>');
return tmpl.join('');

}