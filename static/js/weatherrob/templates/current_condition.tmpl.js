empathylab.weatherrob.templates.CurrentCondition = function() {

var tmpl = [];
tmpl.push('<div class="inner">');
tmpl.push(	'<ul>');
tmpl.push(		'{{#description}}<li>Currently: <span class="value">{{description}}</span></li>{{/description}}');
tmpl.push(		'{{#temperature}}<li>Temperature: <span class="value">{{temperature}}</span></li>{{/temperature}}');
tmpl.push(	'</ul>');
tmpl.push('</div>');
return tmpl.join('');

}