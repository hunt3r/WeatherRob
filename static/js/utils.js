empathylab.weatherrob.Utils =(function() {
function Utils() {
	var self = this;
	//Initialize some stuff if necessary.		
}

Utils.prototype.spinner = function (holderid, R1, R2, count, stroke_width, colour) {
	//This function was taken from raphael's website:
	//See: http://raphaeljs.com/spin-spin-spin.html
	var self = this;
    var sectorsCount = count || 12,
        color = colour || "#fff",
        width = stroke_width || 15,
        r1 = Math.min(R1, R2) || 35,
        r2 = Math.max(R1, R2) || 60,
        cx = r2 + width,
        cy = r2 + width,
        r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),
        
        sectors = [],
        opacity = [],
        beta = 2 * Math.PI / sectorsCount,

        pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
        Raphael.getColor.reset();
    for (var i = 0; i < sectorsCount; i++) {
        var alpha = beta * i - Math.PI / 2,
            cos = Math.cos(alpha),
            sin = Math.sin(alpha);
        opacity[i] = 1 / sectorsCount * i;
        sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
        if (color == "rainbow") {
            sectors[i].attr("stroke", Raphael.getColor());
        }
    }
    var tick;
    (function ticker() {
        opacity.unshift(opacity.pop());
        for (var i = 0; i < sectorsCount; i++) {
            sectors[i].attr("opacity", opacity[i]);
        }
        r.safari();
        tick = setTimeout(ticker, 1000 / sectorsCount);
    })();
    return function () {
        clearTimeout(tick);
        r.remove();
    };
};

Utils.prototype.getGradientArray = function(hex1, hex2, steps) {
	
	steps-=2;
    // Create an array to store all colors.
    var newArry = [hex1];
    //
    // Break Hex1 into RGB components.
    var r = hex1 >> 16;
    var g = hex1 >> 8 & 0xFF;
    var b = hex1 & 0xFF;
    //
    // Determine RGB differences between Hex1 and Hex2.
    var rd = (hex2 >> 16)-r;
    var gd = (hex2 >> 8 & 0xFF)-g;
    var bd = (hex2 & 0xFF)-b;
    //
    steps++;
    // For each new color.
    for (var i=1; i<steps; i++){
        //
        // Determine where the color lies between the 2 end colors.
        var ratio = i/steps;
        //
        // Calculate new color and add it to the array.
        newArry.push((r+rd*ratio)<<16 | (g+gd*ratio)<<8 | (b+bd*ratio));
    }
    //
    // Add Hex2 to the array and return it.
    newArry.push(hex2);
    return newArry;

}

return Utils;
})();