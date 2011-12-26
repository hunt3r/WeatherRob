empathylab.weatherrob.templates.CurrentCondition = function() {

var tmpl = [];
tmpl.push('<div class="inner">');
tmpl.push('<h3>{{location.city}}</h3>');
tmpl.push(	'<ul>');
tmpl.push(		'{{#description}}<li>Currently: <span class="value">{{description}}</span></li>{{/description}}');
tmpl.push(		'{{#temperature}}<li>Temperature: <span class="value">{{temperature}}</span></li>{{/temperature}}');
tmpl.push(		'{{#image}}<li><img src="{{image}}" /></li>{{/image}}');
tmpl.push(	'</ul>');
tmpl.push('</div>');
return tmpl.join('');

}