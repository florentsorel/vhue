'use strict';Object.defineProperty(exports,'__esModule',{value:true});function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});var colorString = createCommonjsModule(function (module) {
/* MIT license */



var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var colorString_1 = colorString.to;
var colorString_2 = colorString.get;var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;var tinycolor = createCommonjsModule(function (module) {
// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else {
    window.tinycolor = tinycolor;
}

})(Math);
});/**
 * @typedef {Object} TinyGradient.StopInput
 * @property {ColorInput} color
 * @property {number} pos
 */

/**
 * @typedef {Object} TinyGradient.StepValue
 * @type {number} [r]
 * @type {number} [g]
 * @type {number} [b]
 * @type {number} [h]
 * @type {number} [s]
 * @type {number} [v]
 * @type {number} [a]
 */

/**
 * @type {StepValue}
 */
const RGBA_MAX = { r: 256, g: 256, b: 256, a: 1 };

/**
 * @type {StepValue}
 */
const HSVA_MAX = { h: 360, s: 1, v: 1, a: 1 };

/**
 * Linearly compute the step size between start and end (not normalized)
 * @param {StepValue} start
 * @param {StepValue} end
 * @param {number} steps - number of desired steps
 * @return {StepValue}
 */
function stepize(start, end, steps) {
    let step = {};

    for (let k in start) {
        if (start.hasOwnProperty(k)) {
            step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
        }
    }

    return step;
}

/**
 * Compute the final step color
 * @param {StepValue} step - from `stepize`
 * @param {StepValue} start
 * @param {number} i - color index
 * @param {StepValue} max - rgba or hsva of maximum values for each channel
 * @return {StepValue}
 */
function interpolate(step, start, i, max) {
    let color = {};

    for (let k in start) {
        if (start.hasOwnProperty(k)) {
            color[k] = step[k] * i + start[k];
            color[k] = color[k] < 0 ? color[k] + max[k] : (max[k] !== 1 ? color[k] % max[k] : color[k]);
        }
    }

    return color;
}

/**
 * Generate gradient with RGBa interpolation
 * @param {StopInput} stop1
 * @param {StopInput} stop2
 * @param {number} steps
 * @return {tinycolor[]} color1 included, color2 excluded
 */
function interpolateRgb(stop1, stop2, steps) {
    const start = stop1.color.toRgb();
    const end = stop2.color.toRgb();
    const step = stepize(start, end, steps);
    let gradient = [stop1.color];

    for (let i = 1; i < steps; i++) {
        const color = interpolate(step, start, i, RGBA_MAX);
        gradient.push(tinycolor(color));
    }

    return gradient;
}

/**
 * Generate gradient with HSVa interpolation
 * @param {StopInput} stop1
 * @param {StopInput} stop2
 * @param {number} steps
 * @param {boolean} trigonometric - true to step in trigonometric order
 * @return {tinycolor[]} color1 included, color2 excluded
 */
function interpolateHsv(stop1, stop2, steps, trigonometric) {
    const start = stop1.color.toHsv();
    const end = stop2.color.toHsv();
    const step = stepize(start, end, steps);
    let gradient = [stop1.color];

    // recompute hue
    let diff;
    if ((start.h <= end.h && !trigonometric) || (start.h >= end.h && trigonometric)) {
        diff = end.h - start.h;
    }
    else if (trigonometric) {
        diff = 360 - end.h + start.h;
    }
    else {
        diff = 360 - start.h + end.h;
    }
    step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;

    for (let i = 1; i < steps; i++) {
        const color = interpolate(step, start, i, HSVA_MAX);
        gradient.push(tinycolor(color));
    }

    return gradient;
}

/**
 * Compute substeps between each stops
 * @param {StopInput[]} stops
 * @param {number} steps
 * @return {number[]}
 */
function computeSubsteps(stops, steps) {
    const l = stops.length;

    // validation
    steps = parseInt(steps, 10);

    if (isNaN(steps) || steps < 2) {
        throw new Error('Invalid number of steps (< 2)');
    }
    if (steps < l) {
        throw new Error('Number of steps cannot be inferior to number of stops');
    }

    // compute substeps from stop positions
    let substeps = [];

    for (let i = 1; i < l; i++) {
        const step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
        substeps.push(Math.max(1, Math.round(step)));
    }

    // adjust number of steps
    let totalSubsteps = 1;
    for (let n = l - 1; n--;) totalSubsteps += substeps[n];

    while (totalSubsteps !== steps) {
        if (totalSubsteps < steps) {
            const min = Math.min.apply(null, substeps);
            substeps[substeps.indexOf(min)]++;
            totalSubsteps++;
        }
        else {
            const max = Math.max.apply(null, substeps);
            substeps[substeps.indexOf(max)]--;
            totalSubsteps--;
        }
    }

    return substeps;
}

/**
 * Compute the color at a specific position
 * @param {StopInput[]} stops
 * @param {number} pos
 * @param {string} method
 * @param {StepValue} max
 * @returns {tinycolor}
 */
function computeAt(stops, pos, method, max) {
    if (pos < 0 || pos > 1) {
        throw new Error('Position must be between 0 and 1');
    }

    let start, end;
    for (let i = 0, l = stops.length; i < l - 1; i++) {
        if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
            start = stops[i];
            end = stops[i + 1];
            break;
        }
    }

    if (!start) {
        start = end = stops[stops.length - 1];
    }

    const step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
    const color = interpolate(step, start.color[method](), Math.round((pos - start.pos) * 100), max);
    return tinycolor(color);
}

class TinyGradient {
    /**
     * @param {StopInput[]|ColorInput[]} stops
     * @returns {TinyGradient}
     */
    constructor(stops) {
        // validation
        if (stops.length < 2) {
            throw new Error('Invalid number of stops (< 2)');
        }

        const havingPositions = stops[0].pos !== undefined;
        const l = stops.length;
        let p = -1;
        // create tinycolor objects and clean positions
        this.stops = stops.map(function(stop, i) {
            const hasPosition = stop.pos !== undefined;
            if (havingPositions ^ hasPosition) {
                throw new Error('Cannot mix positionned and not posionned color stops');
            }

            if (hasPosition) {
                stop = {
                    color: tinycolor(stop.color),
                    pos  : stop.pos
                };

                if (stop.pos < 0 || stop.pos > 1) {
                    throw new Error('Color stops positions must be between 0 and 1');
                }
                else if (stop.pos <= p) {
                    throw new Error('Color stops positions are not ordered');
                }
                p = stop.pos;
            }
            else {
                stop = {
                    color: tinycolor(stop),
                    pos  : i / (l - 1)
                };
            }

            return stop;
        });

        if (this.stops[0].pos !== 0) {
            this.stops.unshift({
                color: this.stops[0].color,
                pos  : 0
            });
        }
        if (this.stops[this.stops.length - 1].pos !== 1) {
            this.stops.push({
                color: this.stops[this.stops.length - 1].color,
                pos  : 1
            });
        }
    }

    /**
     * Return new instance with reversed stops
     * @return {TinyGradient}
     */
    reverse() {
        let stops = [];

        this.stops.forEach(function(stop) {
            stops.push({
                color: stop.color,
                pos  : 1 - stop.pos
            });
        });

        return new TinyGradient(stops.reverse());
    }

    /**
     * Return new instance with looped stops
     * @return {TinyGradient}
     */
    loop() {
        let stops1 = [];
        let stops2 = [];

        this.stops.forEach((stop) => {
            stops1.push({
                color: stop.color,
                pos  : stop.pos / 2
            });
        });

        this.stops.slice(0, -1).forEach((stop) => {
            stops2.push({
                color: stop.color,
                pos  : 1 - stop.pos / 2
            });
        });

        return new TinyGradient(stops1.concat(stops2.reverse()));
    }

    /**
     * Generate gradient with RGBa interpolation
     * @param {number} steps
     * @return {tinycolor[]}
     */
    rgb(steps) {
        const substeps = computeSubsteps(this.stops, steps);
        let gradient = [];

        for (let i = 0, l = this.stops.length; i < l - 1; i++) {
            const rgb = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
            gradient.splice(gradient.length, 0, ...rgb);
        }

        gradient.push(this.stops[this.stops.length - 1].color);

        return gradient;
    }

    /**
     * Generate gradient with HSVa interpolation
     * @param {number} steps
     * @param {boolean|String} [mode=false]
     *    - false to step in clockwise
     *    - true to step in trigonometric order
     *    - 'short' to use the shortest way
     *    - 'long' to use the longest way
     * @return {tinycolor[]}
     */
    hsv(steps, mode) {
        const substeps = computeSubsteps(this.stops, steps);
        let gradient = [];

        for (let i = 0, l = this.stops.length; i < l - 1; i++) {
            const start = this.stops[i].color.toHsv();
            const end = this.stops[i + 1].color.toHsv();

            // rgb interpolation if one of the steps in grayscale
            let hsv;
            if (start.s === 0 || end.s === 0) {
                hsv = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
            }
            else {
                let trigonometricStep;
                if (typeof mode === 'boolean') {
                    trigonometricStep = mode;
                }
                else {
                    const trigShortest = (start.h < end.h && end.h - start.h < 180) || (start.h > end.h && start.h - end.h > 180);
                    trigonometricStep = (mode === 'long' && trigShortest) || (mode === 'short' && !trigShortest);
                }
                hsv = interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], trigonometricStep);
            }
            gradient.splice(gradient.length, 0, ...hsv);
        }

        gradient.push(this.stops[this.stops.length - 1].color);

        return gradient;
    }

    /**
     * Generate CSS3 command (no prefix) for this gradient
     * @param {String} [mode=linear] - 'linear' or 'radial'
     * @param {String} [direction] - default is 'to right' or 'ellipse at center'
     * @return {String}
     */
    css(mode, direction) {
        mode = mode || 'linear';
        direction = direction || (mode === 'linear' ? 'to right' : 'ellipse at center');

        let css = mode + '-gradient(' + direction;
        this.stops.forEach(function(stop) {
            css += ', ' + stop.color.toRgbString() + ' ' + (stop.pos * 100) + '%';
        });
        css += ')';
        return css;
    }

    /**
     * Returns the color at specific position with RGBa interpolation
     * @param {number} pos, between 0 and 1
     * @return {tinycolor}
     */
    rgbAt(pos) {
        return computeAt(this.stops, pos, 'toRgb', RGBA_MAX);
    }

    /**
     * Returns the color at specific position with HSVa interpolation
     * @param {number} pos, between 0 and 1
     * @return {tinycolor}
     */
    hsvAt(pos) {
        return computeAt(this.stops, pos, 'toHsv', HSVA_MAX);
    }
}

/**
 * @param {StopInput[]|ColorInput[]|StopInput...|ColorInput...} stops
 * @returns {TinyGradient}
 */
var tinygradient = function(stops) {
    // varargs
    if (arguments.length === 1) {
        if (!(arguments[0] instanceof Array)) {
            throw new Error('"stops" is not an array');
        }
        stops = arguments[0];
    }
    else {
        stops = Array.prototype.slice.call(arguments);
    }

    return new TinyGradient(stops);
};//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "Attic",
  props: {
    checked: Boolean
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M16.5610437,10.3684 L25.3140437,22.4314 C25.8100437,23.1124 25.3390437,24.0874 24.5140437,24.0874 L7.47704375,24.0874 C6.65004375,24.0874 6.18004375,23.1124 6.67604375,22.4304 L15.4390437,10.3674 C15.7200437,9.9814 16.2800437,9.9814 16.5610437,10.3684 Z M16.0000437,22.0784 C17.6570437,22.0784 19.0000437,20.7354 19.0000437,19.0784 C19.0000437,17.4214 17.6570437,16.0784 16.0000437,16.0784 C14.3430437,16.0784 13.0000437,17.4214 13.0000437,19.0784 C13.0000437,20.7354 14.3430437,22.0784 16.0000437,22.0784 Z M31.7939437,24.4505 C32.2949437,25.1175 31.8249437,26.0785 30.9969437,26.0785 L30.9539437,26.0785 C30.6409437,26.0785 30.3449437,25.9295 30.1549437,25.6755 L28.9299437,24.0305 L28.9469437,24.0305 L26.6669437,20.9945 L17.4599437,8.7325 L16.4609437,7.4025 C16.2309437,7.0965 15.7699437,7.0965 15.5389437,7.4025 L14.5399437,8.7325 L5.33294375,20.9945 L3.05294375,24.0305 L3.06994375,24.0305 L1.84494375,25.6755 C1.65494375,25.9295 1.35894375,26.0785 1.04594375,26.0785 L1.00294375,26.0785 C0.174943746,26.0785 -0.295056254,25.1175 0.205943746,24.4505 L1.45494375,22.7865 L3.73494375,19.7505 L12.9429437,7.4885 L14.4019437,5.5455 L15.2999437,4.3495 C15.6499437,3.8835 16.3499437,3.8835 16.6999437,4.3495 L17.5979437,5.5455 L19.0569437,7.4885 L21.9959437,11.4025 L21.9959437,9.1095 C21.9959437,8.5405 22.4439437,8.0785 22.9969437,8.0785 L24.9989437,8.0785 C25.5519437,8.0785 25.9999437,8.5405 25.9999437,9.1095 L25.9999437,16.7345 L28.2649437,19.7505 L30.5449437,22.7865 L31.7939437,24.4505 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-87c8a50a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: "Balcony",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,12.278 C23.405,12.625 23,13.262 23,14 C23,14.737 23.405,15.375 24,15.721 L24,20.024 C23.917,20.019 23.838,20 23.754,20 L20,20 L20,15.721 C20.595,15.375 21,14.737 21,14 C21,13.262 20.595,12.625 20,12.278 L20,8 L24,8 L24,12.278 Z M8,20.024 L8,15.721 C8.595,15.375 9,14.737 9,14 C9,13.262 8.595,12.625 8,12.278 L8,8 L12,8 L12,12.278 C11.405,12.625 11,13.262 11,14 C11,14.737 11.405,15.375 12,15.721 L12,20 L8.246,20 C8.162,20 8.083,20.019 8,20.024 Z M18,12.278 C17.405,12.625 17,13.262 17,14 C17,14.737 17.405,15.375 18,15.721 L18,20 L14,20 L14,15.721 C14.595,15.375 15,14.737 15,14 C15,13.262 14.595,12.625 14,12.278 L14,8 L18,8 L18,12.278 Z M29,6 L3,6 C2.45,6 2,6.45 2,7 C2,7.549 2.45,8 3,8 L6,8 L6,12.278 C5.405,12.625 5,13.262 5,14 C5,14.737 5.405,15.375 6,15.721 L6,20.655 C4.803,21.406 4,22.728 4,24.246 C4,25.215 4.785,26 5.754,26 L26.246,26 C27.215,26 28,25.215 28,24.246 C28,22.728 27.197,21.406 26,20.655 L26,15.721 C26.595,15.375 27,14.737 27,14 C27,13.262 26.595,12.625 26,12.278 L26,8 L29,8 C29.55,8 30,7.549 30,7 C30,6.45 29.55,6 29,6 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-68cc2a4a";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: "Bathroom",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M26.686,17 L26,17 L26,5.141 C26,2.306 23.695,0 20.86,0 C18.419,0 16.379,1.714 15.858,4 L14.007,4 C12.899,4 12,4.898 12,6.007 C12,6.555 12.446,7 12.994,7 L20.007,7 C20.555,7 21,6.555 21,6.007 C21,4.898 20.102,4 18.994,4 L17.942,4 C18.4,2.832 19.532,2 20.86,2 C22.591,2 24,3.409 24,5.141 L24,17 L5.315,17 C4.589,17 4,17.589 4,18.314 C4,19.04 4.589,19.629 5.315,19.629 L6,19.629 L6,21.857 C6,24.673 7.633,27.101 10,28.264 L10,30 C10,31.104 10.896,32 12,32 C13.105,32 14,31.104 14,30 L14,29 L18.858,29 C18.906,29 18.953,28.994 19,28.993 L19,30 C19,31.104 19.896,32 21,32 C22.105,32 23,31.104 23,30 L23,27.669 C24.814,26.373 26,24.256 26,21.857 L26,19.629 L26.686,19.629 C27.412,19.629 28,19.04 28,18.314 C28,17.589 27.412,17 26.686,17\"></path></g></g>")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-678beec5";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: "Bedroom",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M26,16 L6,16 C3.791,16 2,17.791 2,20 L2,22 C2,22.553 2.447,23 3,23 L4,23 L4,24 C4,25.104 4.896,26 6,26 C7.104,26 8,25.104 8,24 L8,23 L24,23 L24,24 C24,25.104 24.896,26 26,26 C27.104,26 28,25.104 28,24 L28,23 L29,23 C29.553,23 30,22.553 30,22 L30,20 C30,17.791 28.209,16 26,16 M9,10 L14,10 C14.553,10 15,10.447 15,11 C15,11.553 14.553,12 14,12 L9,12 C8.447,12 8,11.553 8,11 C8,10.447 8.447,10 9,10 M18,10 L23,10 C23.553,10 24,10.447 24,11 C24,11.553 23.553,12 23,12 L18,12 C17.447,12 17,11.553 17,11 C17,10.447 17.447,10 18,10 M7.009,14 L24.991,14 C25.549,14 26,13.549 26,12.991 L26,8 C26,6.896 25.104,6 24,6 L8,6 C6.896,6 6,6.896 6,8 L6,12.991 C6,13.549 6.451,14 7.009,14\"></path></g></g>")]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-2410ef49";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: "Carpot",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M25.427,17.648 C25.777,17.813 26,18.165 26,18.551 L26,23.965 C26,24.516 25.553,24.963 25,24.963 L24,24.963 L24,26.488 C24,27.312 23.325,27.986 22.5,27.986 L21.5,27.986 C20.675,27.986 20,27.312 20,26.488 L20,24.963 L12,24.963 L12,26.461 C12,27.284 11.325,27.958 10.5,27.958 L9.5,27.958 C8.675,27.958 8,27.284 8,26.461 L8,24.963 L7,24.963 C6.447,24.963 6,24.516 6,23.965 L6,18.551 C6,18.165 6.223,17.813 6.573,17.648 L7.576,17.175 C7.845,17.049 8.043,16.81 8.117,16.522 L9.615,10.734 C9.729,10.294 10.128,9.986 10.584,9.986 L21.416,9.986 C21.872,9.986 22.271,10.294 22.385,10.734 L23.883,16.522 C23.957,16.81 24.155,17.049 24.424,17.175 L25.427,17.648 Z M22.5,22 C23.328,22 24,21.329 24,20.502 C24,19.675 23.328,19.005 22.5,19.005 C21.672,19.005 21,19.675 21,20.502 C21,21.329 21.672,22 22.5,22 Z M18,22 C18.55,22 19,21.551 19,21.002 C19,20.452 18.55,20.003 18,20.003 L14,20.003 C13.45,20.003 13,20.452 13,21.002 C13,21.551 13.45,22 14,22 L18,22 Z M9.5,19 C8.672,19 8,19.671 8,20.498 C8,21.325 8.672,21.995 9.5,21.995 C10.328,21.995 11,21.325 11,20.498 C11,19.671 10.328,19 9.5,19 Z M10.037,15.732 C9.855,16.367 10.36,16.992 11.055,16.992 L20.945,16.992 C21.64,16.992 22.145,16.367 21.963,15.732 L21.104,12.736 C20.979,12.302 20.563,12 20.087,12 L11.913,12 C11.437,12 11.021,12.302 10.896,12.736 L10.037,15.732 Z M31,4 C31.553,4 32,4.447 32,5 L32,27 C32,27.553 31.553,28 31,28 C30.447,28 30,27.553 30,27 L30,9 C30,8.447 29.553,8 29,8 L3,8 C2.447,8 2,8.447 2,9 L2,27 C2,27.553 1.553,28 1,28 C0.447,28 0,27.553 0,27 L0,5 C0,4.447 0.447,4 1,4 L2,4 L31,4 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-7a497ac8";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: "Closet",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,9 L20,9 C19.447,9 19,8.553 19,8 C19,7.447 19.447,7 20,7 L24,7 C24.553,7 25,7.447 25,8 C25,8.553 24.553,9 24,9 Z M24,15 L20,15 C19.447,15 19,14.553 19,14 C19,13.447 19.447,13 20,13 L24,13 C24.553,13 25,13.447 25,14 C25,14.553 24.553,15 24,15 Z M24,21 L20,21 C19.447,21 19,20.553 19,20 C19,19.447 19.447,19 20,19 L24,19 C24.553,19 25,19.447 25,20 C25,20.553 24.553,21 24,21 Z M17,23 C17,23.553 16.553,24 16,24 C15.447,24 15,23.553 15,23 L15,5 C15,4.447 15.447,4 16,4 C16.553,4 17,4.447 17,5 L17,23 Z M12,15 L10,15 C9.447,15 9,14.553 9,14 C9,13.447 9.447,13 10,13 L12,13 C12.553,13 13,13.447 13,14 C13,14.553 12.553,15 12,15 Z M26,1 L6,1 C5.447,1 5,1.447 5,2 L5,26 C5,26.553 5.447,27 6,27 L7,27 L7,28 C7,28.553 7.447,29 8,29 C8.553,29 9,28.553 9,28 L9,27 L23,27 L23,28 C23,28.553 23.447,29 24,29 C24.553,29 25,28.553 25,28 L25,27 L26,27 C26.553,27 27,26.553 27,26 L27,2 C27,1.447 26.553,1 26,1 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-573d9ffe";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: "Computer",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M29,5 C29.55,5 30,5.45 30,6 L30,17 L2,17 L2,6 C2,5.45 2.45,5 3,5 L29,5 Z M2,20 L2,19 L30,19 L30,20 C30,20.55 29.55,21 29,21 L17,21 L17,25 L19,25 C19.553,25 20,25.447 20,26 C20,26.553 19.553,27 19,27 L13,27 C12.447,27 12,26.553 12,26 C12,25.447 12.447,25 13,25 L15,25 L15,21 L3,21 C2.45,21 2,20.55 2,20 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = "data-v-d3853af2";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: "Dining",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,3 C25.1,3 26,3.9 26,5 L26,27 C26,28.1 25.1,29 24,29 C22.9,29 22,28.1 22,27 L22,16.251 C20.399,15.101 19,12.737 19,10.001 C19,6.237 21.646,3.176 23.824,3.018 C23.883,3.013 23.939,3 24,3 Z M14,17.791 L14,27 C14,28.104 13.104,29 12,29 C10.896,29 10,28.104 10,27 L10,17.791 C10,17.283 9.807,16.794 9.459,16.423 L9.164,16.108 C7.773,14.625 7,12.669 7,10.637 L7,9 L7,4 C7,3.45 7.45,3 8,3 C8.55,3 9,3.45 9,4 L9,9 C9,9.55 9.45,10 10,10 C10.55,10 11,9.55 11,9 L11,4 C11,3.45 11.45,3 12,3 C12.55,3 13,3.45 13,4 L13,9 C13,9.55 13.45,10 14,10 C14.55,10 15,9.55 15,9 L15,4 C15,3.45 15.45,3 16,3 C16.55,3 17,3.45 17,4 L17,9 L17,10.637 C17,12.669 16.227,14.625 14.836,16.107 L14.541,16.423 C14.193,16.794 14,17.282 14,17.791 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-571b3fca";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: "Driveway",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,20 C22.896,20 22,19.104 22,18 C22,16.896 22.896,16 24,16 C25.104,16 26,16.896 26,18 C26,19.104 25.104,20 24,20 Z M21.77,13 L10.23,13 C9.42,13 8.831,12.248 9.044,11.485 L10.046,7.886 C10.191,7.363 10.678,7 11.232,7 L20.768,7 C21.322,7 21.809,7.363 21.954,7.886 L22.956,11.485 C23.169,12.248 22.58,13 21.77,13 Z M20,18.594 C20,19.367 19.359,20 18.577,20 L13.423,20 C12.641,20 12,19.367 12,18.594 L12,18.406 C12,17.633 12.641,17 13.423,17 L18.577,17 C19.359,17 20,17.633 20,18.406 L20,18.594 Z M8,20 C6.896,20 6,19.104 6,18 C6,16.896 6.896,16 8,16 C9.104,16 10,16.896 10,18 C10,19.104 9.104,20 8,20 Z M27.313,14.318 L26.108,13.743 C25.786,13.589 25.549,13.298 25.459,12.949 L23.661,5.91 C23.524,5.374 23.047,5 22.499,5 L9.501,5 C8.953,5 8.476,5.374 8.339,5.91 L6.541,12.949 C6.451,13.298 6.214,13.589 5.892,13.743 L4.688,14.318 C4.268,14.519 4,14.946 4,15.416 L4,21.786 C4,22.456 4.537,23 5.2,23 L7,23 L7,25.174 C7,26.179 7.821,27 8.826,27 L10.174,27 C11.179,27 12,26.179 12,25.174 L12,23 L20,23 L20,25.174 C20,26.179 20.821,27 21.826,27 L23.174,27 C24.179,27 25,26.179 25,25.174 L25,23 L26.8,23 C27.463,23 28,22.456 28,21.786 L28,15.416 C28,14.946 27.732,14.519 27.313,14.318 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-3579740c";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$9 = {
  name: "Frontdoor",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M21,20 C21,20.553 20.553,21 20,21 L12,21 C11.447,21 11,20.553 11,20 C11,19.447 11.447,19 12,19 L20,19 C20.553,19 21,19.447 21,20 Z M11,6 C11,5.447 11.447,5 12,5 L14,5 C14.553,5 15,5.447 15,6 L15,12 C15,12.553 14.553,13 14,13 L12,13 C11.447,13 11,12.553 11,12 L11,6 Z M10,17 C9.447,17 9,16.553 9,16 C9,15.447 9.447,15 10,15 C10.553,15 11,15.447 11,16 C11,16.553 10.553,17 10,17 Z M17,6 C17,5.447 17.447,5 18,5 L20,5 C20.553,5 21,5.447 21,6 L21,12 C21,12.553 20.553,13 20,13 L18,13 C17.447,13 17,12.553 17,12 L17,6 Z M24,1 L8,1 C7.447,1 7,1.447 7,2 L7,30 C7,30.553 7.447,31 8,31 L24,31 C24.553,31 25,30.553 25,30 L25,2 C25,1.447 24.553,1 24,1 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-233dca9e";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  name: "Garage",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27.7810036,5.73796252 C28.0739954,6.03096433 28.0729954,6.53896747 27.7780037,6.96097008 L23.2741305,13.4100099 C22.8731418,13.9850135 22.1121632,14.1510145 21.7121745,13.752012 L20.7732009,12.8120062 L19.6952313,13.8900129 L18.1302754,12.3260032 L19.208245,11.2479965 L18.2692714,10.3079907 C17.8692827,9.90798827 18.035278,9.14698358 18.6102618,8.7459811 L25.0590803,4.24195328 C25.4810684,3.94795147 25.990054,3.94695146 26.2830458,4.23995327 L27.7810036,5.73796252 Z M11.5441608,17.3474342 L14.6730727,20.4774535 L7.47327545,27.677498 C7.04328755,28.1075007 6.33930738,28.1075007 5.90831951,27.677498 L4.34436355,26.1124883 C3.91337569,25.6824857 3.91337569,24.9784813 4.34436355,24.5474787 L11.5441608,17.3474342 Z M27.6560071,24.6774795 C28.086995,25.1084821 28.086995,25.8134865 27.6560071,26.2424891 L26.2430469,27.6564979 C26.028053,27.8714992 25.744061,27.9794999 25.4610689,27.9794999 C25.1770769,27.9794999 24.8930849,27.8714992 24.677091,27.6564979 L11.181471,14.1594145 C9.57351631,14.7924184 7.68956936,14.6004173 6.25460976,13.585411 C4.42466129,12.292403 3.71168137,10.1653899 4.1046703,8.21737783 C4.18666799,7.81537535 4.6976536,7.67437448 4.98764544,7.96537628 L7.02658802,10.0043889 C7.43657648,10.4143914 8.10655761,10.4143914 8.5155461,10.0043889 L10.0055041,8.51537967 C10.4154926,8.10637715 10.4154926,7.43637301 10.0055041,7.02637048 L7.96956147,4.99035791 C7.67556975,4.69635609 7.82456555,4.18335292 8.23155409,4.10235242 C9.89750718,3.77035037 11.6924566,4.24535331 12.9834203,5.53736128 C14.5093773,7.06337071 14.8943665,9.28938445 14.1563873,11.1783961 L27.6560071,24.6774795 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-51308f40";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$b = {
  name: "Guestroom",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,16 L8,16 C5.791,16 4,17.791 4,20 L4,22 C4,22.553 4.447,23 5,23 L6,23 L6,24 C6,25.104 6.896,26 8,26 C9.104,26 10,25.104 10,24 L10,23 L22,23 L22,24 C22,25.104 22.896,26 24,26 C25.104,26 26,25.104 26,24 L26,23 L27,23 C27.553,23 28,22.553 28,22 L28,20 C28,17.791 26.209,16 24,16 M12.111,10 L19.888,10 C20.503,10 21,10.447 21,11 C21,11.553 20.503,12 19.888,12 L12.111,12 C11.497,12 11,11.553 11,11 C11,10.447 11.497,10 12.111,10 M9,14 L23,14 C23.552,14 24,13.553 24,13 L24,7 C24,6.447 23.552,6 23,6 L9,6 C8.447,6 8,6.447 8,7 L8,13 C8,13.553 8.447,14 9,14\"></path></g></g>")]);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-37342b83";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$c = {
  name: "Gym",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M23,9 C23.55,9 24,9.45 24,10 L24,22 C24,22.55 23.55,23 23,23 L19,23 C18.45,23 18,22.55 18,22 L18,19 L14,19 L14,22 C14,22.55 13.55,23 13,23 L9,23 C8.45,23 8,22.55 8,22 L8,10 C8,9.45 8.45,9 9,9 L13,9 C13.55,9 14,9.45 14,10 L14,13 L18,13 L18,10 C18,9.45 18.45,9 19,9 L23,9 Z M4,12 C4,11.447 4.447,11 5,11 L6,11 L6,21 L5,21 C4.447,21 4,20.553 4,20 L4,18 C2.896,18 2,17.104 2,16 C2,14.896 2.896,14 4,14 L4,12 Z M28,14 C29.104,14 30,14.896 30,16 C30,17.104 29.104,18 28,18 L28,20 C28,20.553 27.553,21 27,21 L26,21 L26,11 L27,11 C27.553,11 28,11.447 28,12 L28,14 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = undefined;
/* scoped */

var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-73ed03ee";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$c = normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$d = {
  name: "Hallway",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27.976,21.823 L25.099,9.047 C24.647,7.037 22.719,5.761 20.714,6.062 L19.933,4.89 C19.562,4.334 18.938,4 18.269,4 L17,4 C16.448,4 16,4.447 16,5 L16,7 L14,7 L14,1 C14,0.447 13.553,0 13,0 C12.448,0 12,0.447 12,1 L12,12 L8,12 L8,10 C8,9.447 7.553,9 7,9 C6.448,9 6,9.447 6,10 L6,13 C6,13.552 6.448,14 7,14 L12,14 L12,29 L8,29 C6.896,29 6,29.895 6,31 C6,31.552 6.448,32 7,32 L19,32 C19.553,32 20,31.552 20,31 C20,29.895 19.105,29 18,29 L14,29 L14,9 L16,9 L16,25 C16,25.552 16.448,26 17,26 L18.339,26 C20.409,26 21.96,24.106 21.555,22.078 L20.339,16 L21.445,11.026 L24.074,22.702 C24.195,23.241 24.73,23.579 25.269,23.458 L27.22,23.018 C27.758,22.897 28.097,22.362 27.976,21.823\"></path></g></g>")]);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = undefined;
/* scoped */

var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-350d652f";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$d = normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$e = {
  name: "Kidsbedroom",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M21,25.5 C19.896,25.5 19,24.381 19,23 C19,21.619 19.896,20.5 21,20.5 C22.104,20.5 23,21.619 23,23 C23,24.381 22.104,25.5 21,25.5 M16,15 C14.343,15 13,13.881 13,12.5 C13,11.119 14.343,10 16,10 C17.657,10 19,11.119 19,12.5 C19,13.881 17.657,15 16,15 M11,25.5 C9.896,25.5 9,24.381 9,23 C9,21.619 9.896,20.5 11,20.5 C12.104,20.5 13,21.619 13,23 C13,24.381 12.104,25.5 11,25.5 Z M16,11 C16.553,11 17,11.447 17,12 C17,12.553 16.553,13 16,13 C15.447,13 15,12.553 15,12 C15,11.447 15.447,11 16,11 Z M25,16 C24.569,16 24.162,16.094 23.792,16.258 C23.15,15.454 22.278,14.761 21.239,14.222 C22,13.162 22.454,11.865 22.454,10.461 C22.454,10.436 22.45,10.411 22.45,10.386 C23.907,10.073 25,8.78 25,7.23 C25,5.446 23.554,4 21.77,4 C20.852,4 20.027,4.387 19.439,5.002 C18.44,4.371 17.262,4 15.993,4 C14.729,4 13.553,4.369 12.557,4.997 C11.969,4.385 11.146,4 10.23,4 C8.446,4 7,5.446 7,7.23 C7,8.775 8.087,10.063 9.536,10.382 C9.536,10.408 9.532,10.435 9.532,10.461 C9.532,11.868 9.987,13.166 10.751,14.228 C9.717,14.766 8.848,15.457 8.208,16.258 C7.838,16.094 7.431,16 7,16 C5.343,16 4,17.343 4,19 C4,20.657 5.343,22 7,22 C7.028,22 7.054,21.992 7.081,21.992 C7.028,22.317 7,22.654 7,23 C7,25.762 8.791,28 11,28 C12.351,28 13.539,27.158 14.264,25.877 C14.826,25.956 15.405,26 16,26 C16.595,26 17.174,25.956 17.736,25.877 C18.461,27.158 19.649,28 21,28 C23.209,28 25,25.762 25,23 C25,22.654 24.972,22.317 24.919,21.992 C24.946,21.992 24.972,22 25,22 C26.657,22 28,20.657 28,19 C28,17.343 26.657,16 25,16\"></path></g></g>")]);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = undefined;
/* scoped */

var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-ae950572";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$e = normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$f = {
  name: "Kitchen",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M23.5,7 C24.328,7 25,7.672 25,8.5 C25,9.328 24.328,10 23.5,10 L8.5,10 C7.672,10 7,9.328 7,8.5 C7,7.672 7.672,7 8.5,7 L14.277,7 C14.105,6.705 14,6.366 14,6 C14,4.896 14.896,4 16,4 C17.104,4 18,4.896 18,6 C18,6.366 17.895,6.705 17.723,7 L23.5,7 Z M26,12 C27.104,12 28,12.896 28,14 C28,15.104 27.104,16 26,16 L25,16 L25,25.879 C25,27.051 24.05,28 22.879,28 L9.121,28 C7.95,28 7,27.051 7,25.879 L7,16 L6,16 C4.896,16 4,15.104 4,14 C4,12.896 4.896,12 6,12 L9.121,12 L22.879,12 L26,12 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = undefined;
/* scoped */

var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-386dcee0";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$f = normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$g = {
  name: "Laundryroom",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M25,6 C24.447,6 24,5.553 24,5 C24,4.447 24.447,4 25,4 C25.553,4 26,4.447 26,5 C26,5.553 25.553,6 25,6 M16,26 C11.582,26 8,22.418 8,18 C8,13.582 11.582,10 16,10 C20.418,10 24,13.582 24,18 C24,22.418 20.418,26 16,26 M6,5 C6,4.447 6.447,4 7,4 L11,4 C11.553,4 12,4.447 12,5 C12,5.553 11.553,6 11,6 L7,6 C6.447,6 6,5.553 6,5 M21,4 C21.553,4 22,4.447 22,5 C22,5.553 21.553,6 21,6 C20.447,6 20,5.553 20,5 C20,4.447 20.447,4 21,4 Z M22,16.0283 C21.017,16.1803 20.279,17.0033 20.279,18.0003 C20.279,18.9973 21.017,19.8193 22,19.9713 C21.158,22.3123 18.868,24.0003 16.175,24.0003 C12.77,24.0003 10,21.3083 10,18.0003 C10,14.6913 12.77,12.0003 16.175,12.0003 C18.868,12.0003 21.158,13.6873 22,16.0283 Z M27,2 L5,2 C4.447,2 4,2.447 4,3 L4,8 L4,29 C4,29.553 4.447,30 5,30 L27,30 C27.553,30 28,29.553 28,29 L28,8 L28,3 C28,2.447 27.553,2 27,2\"></path></g></g>")]);
};

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = undefined;
/* scoped */

var __vue_scope_id__$g = undefined;
/* module identifier */

var __vue_module_identifier__$g = "data-v-6246a318";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$g = normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$h = {
  name: "Living",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M28,13 C29.104,13 30,13.896 30,15 L30,17.064 L30,19.064 L30,21.064 C30,21.581 29.581,22 29.064,22 L28,22 L28,23 C28,24.104 27.104,25 26,25 C24.896,25 24,24.104 24,23 L24,22 L8,22 L8,23 C8,24.104 7.104,25 6,25 C4.896,25 4,24.104 4,23 L4,22 L2.936,22 C2.419,22 2,21.581 2,21.064 L2,19.064 L2,17.064 L2,15 C2,13.896 2.896,13 4,13 C5.104,13 6,13.896 6,15 L6,16.064 L6,17 L26,17 L26,16.064 L26,15 C26,13.896 26.896,13 28,13 Z M8,15 C8,12.791 6.209,11 4,11 L4,9 C4,7.896 4.896,7 6,7 L26,7 C27.104,7 28,7.896 28,9 L28,11 C25.791,11 24,12.791 24,15 L8,15 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = undefined;
/* scoped */

var __vue_scope_id__$h = undefined;
/* module identifier */

var __vue_module_identifier__$h = "data-v-190d5498";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$h = normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$i = {
  name: "Lounge",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M24,17 C27.313,17 30,17.687 30,21 C30,21.553 29.553,22 29,22 L28,22 L28,23 C28,24.104 27.104,25 26,25 C24.896,25 24,24.104 24,23 L24,22 L8,22 L8,23 C8,24.104 7.104,25 6,25 C4.896,25 4,24.104 4,23 L4,22 L3.232,22 L3,22 C2.447,22 2,21.553 2,21 C2,20.947 2.014,20.897 2.016,20.845 C2.014,20.817 2,20.795 2,20.768 L2,13.907 C2,12.858 2.858,12 3.907,12 L4.093,12 C5.142,12 6,12.858 6,13.907 L6,17 L24,17 Z M4.093,10 L3.907,10 C3.309,10 2.508,10.194 2,10.436 C2.795,7.357 5.801,5 10.48,5 C14.961,5 17.77,7.117 19,10 L24.349,10 C26.365,10 28,11.635 28,13.651 L28,14.087 C28,14.592 27.592,15 27.087,15 L8,15 L8,13.907 C8,11.753 6.247,10 4.093,10 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = undefined;
/* scoped */

var __vue_scope_id__$i = undefined;
/* module identifier */

var __vue_module_identifier__$i = "data-v-7fa3fb6c";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$i = normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$j = {
  name: "Mancave",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27,13.934 C26.447,13.934 26,13.486 26,12.934 C26,12.381 26.447,11.934 27,11.934 C27.553,11.934 28,12.381 28,12.934 C28,13.486 27.553,13.934 27,13.934 M24,10.934 C23.447,10.934 23,10.486 23,9.934 C23,9.381 23.447,8.934 24,8.934 C24.553,8.934 25,9.381 25,9.934 C25,10.486 24.553,10.934 24,10.934 M24,17 C23.447,17 23,16.553 23,16 C23,15.448 23.447,15 24,15 C24.553,15 25,15.448 25,16 C25,16.553 24.553,17 24,17 M21,13.934 C20.447,13.934 20,13.486 20,12.934 C20,12.381 20.447,11.934 21,11.934 C21.553,11.934 22,12.381 22,12.934 C22,13.486 21.553,13.934 21,13.934 M9.963,13.934 L8.963,13.934 L8.963,14.934 C8.963,15.484 8.513,15.934 7.963,15.934 C7.413,15.934 6.963,15.484 6.963,14.934 L6.963,13.934 L5.963,13.934 C5.413,13.934 4.963,13.484 4.963,12.934 C4.963,12.384 5.413,11.934 5.963,11.934 L6.963,11.934 L6.963,10.934 C6.963,10.384 7.413,9.934 7.963,9.934 C8.513,9.934 8.963,10.384 8.963,10.934 L8.963,11.934 L9.963,11.934 C10.513,11.934 10.963,12.384 10.963,12.934 C10.963,13.484 10.513,13.934 9.963,13.934 M24.357,7 L24.174,7 L8.576,7 C5.191,7 2,9.698 2,12.934 L2,21.395 C2,23.49 4.064,25 5.942,25 C7.449,25 8.868,24.043 9.421,22.718 L11.322,17.996 L20.678,17.996 L23.219,22.718 C23.973,24.043 24.925,24.899 26.418,24.899 C28.495,24.899 30,23.49 30,21.395 L30,12.934 C30,9.698 27.543,7 24.357,7\"></path></g></g>")]);
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = undefined;
/* scoped */

var __vue_scope_id__$j = undefined;
/* module identifier */

var __vue_module_identifier__$j = "data-v-379212eb";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$j = normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$k = {
  name: "Nursery",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$k = script$k;
/* template */

var __vue_render__$k = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M16.7732885,14.9968619 C15.7936498,14.9968619 14.9959441,14.1983076 14.9959441,13.2168554 L14.9959441,12.9949793 L18.5496333,12.9949793 L18.5496333,13.2168554 C18.5496333,14.1983076 17.7529271,14.9968619 16.7732885,14.9968619 Z M26.2673933,21.5026266 C26.6402557,21.0958537 27.274022,21.0718671 27.6798723,21.4486568 C28.0847229,21.8234476 28.1087141,22.4580933 27.7328527,22.8628674 C24.7149659,26.1280449 20.4395429,28 16.0041789,28 C11.5688149,28 7.29339196,26.1280449 4.27550513,22.8628674 C3.89964377,22.4580933 3.92363492,21.8234476 4.32848559,21.4486568 C4.73333626,21.0718671 5.36610286,21.0958537 5.74096458,21.5026266 C5.83193103,21.6015714 5.93489305,21.6875234 6.02885839,21.7824704 L8.92479021,13.8189154 C5.4920564,14.8323498 2.52914929,10.9615104 4.7923145,8.64480346 C6.09083553,7.31454597 4.76632409,5.98728681 4.11556413,5.35364049 C3.92363492,5.16574537 4.00160616,4.8369289 4.25751177,4.75197632 C11.6367899,2.31233805 14.2268345,6.36607538 14.5946988,8.97961658 C14.7426443,10.0370264 14.2638209,11.4292493 14.0049164,12.0449056 L13.1552298,14.2027012 C13.5950675,15.8028081 15.0465322,16.9881465 16.7818921,16.9881465 C18.7931502,16.9881465 20.4265477,15.4010323 20.5365071,13.4151408 C20.9473556,13.6110315 21.3182188,13.8768831 21.6470975,14.1867101 C22.8726454,14.2386811 24.1121882,13.8079216 25.050842,12.8674465 C25.7056005,12.2118125 26.1174486,11.408261 26.2893852,10.5657313 C26.4403295,9.82214631 27.5209309,9.77617197 27.7668402,10.492772 C28.4375928,12.4576752 27.4889427,13.9828239 27.0790939,14.5185249 C26.9841289,14.6414563 26.8821665,14.7533938 26.7682085,14.8583353 C25.7135975,15.8307925 24.3171126,16.2015855 22.9886027,16.0056948 C23.0305872,16.0726575 23.0755706,16.1376212 23.1105577,16.2105805 L25.7905691,21.9653683 L25.7905691,21.9663678 C25.9485109,21.8114543 26.1154493,21.6655357 26.2673933,21.5026266 Z M16.0041789,25.9971179 C18.3393176,25.9971179 20.6184769,25.3934549 22.6437299,24.3000652 C22.4478021,24.1251628 22.2838626,23.9092833 22.1669058,23.6574239 L19.9927077,18.9900291 L11.2989145,18.9900291 L9.55355828,23.793348 C9.48958188,23.967251 9.39861543,24.121165 9.29565341,24.2650847 C11.3369005,25.3834605 13.6430498,25.9971179 16.0041789,25.9971179 Z M8.00712869,9.98105761 C8.55992479,9.98105761 9.00675997,9.53230809 9.00675997,8.97961658 C9.00675997,8.42692508 8.55992479,7.979175 8.00712869,7.979175 C7.4543326,7.979175 7.00749742,8.42692508 7.00749742,8.97961658 C7.00749742,9.53230809 7.4543326,9.98105761 8.00712869,9.98105761 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$k = [];
/* style */

var __vue_inject_styles__$k = undefined;
/* scoped */

var __vue_scope_id__$k = undefined;
/* module identifier */

var __vue_module_identifier__$k = "data-v-7e7b67ef";
/* functional template */

var __vue_is_functional_template__$k = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$k = normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$l = {
  name: "Office",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$l = script$l;
/* template */

var __vue_render__$l = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M26.5,14 L25.5,14 C24.675,14 24,14.675 24,15.5 L24,18.605 C24,19.045 23.642,19.403 23.202,19.403 L23.195,19.403 C22.284,17.963 20.688,17 18.857,17 L17,17 L17,14 L20.091,14 C21.697,14 23,12.697 23,11.09 L21.727,1.246 C21.623,0.531 21.01,0 20.287,0 L11.713,0 C10.99,0 10.377,0.531 10.273,1.246 L9,11.09 C9,12.697 10.303,14 11.909,14 L15,14 L15,17 L13.143,17 C11.492,17 10.04,17.791 9.099,19 L8.798,19 C8.358,19 8,18.642 8,18.202 L8,15.299 C8,14.362 7.234,13.597 6.299,13.597 L5.701,13.597 C4.766,13.597 4,14.362 4,15.299 C4,16.234 4.766,17 5.701,17 L6,17 L6,18.202 C6,19.525 6.926,20.631 8.162,20.921 C8.065,21.314 8,21.72 8,22.143 C8,22.616 8.384,23 8.857,23 L14.873,23 L10.521,28.077 C10.354,28.032 10.182,28 10,28 C8.896,28 8,28.896 8,30 C8,31.104 8.896,32 10,32 C11.104,32 12,31.104 12,30 C12,29.71 11.936,29.436 11.824,29.188 L15,25.482 L15,28.277 C14.404,28.624 14,29.262 14,30 C14,31.104 14.896,32 16,32 C17.104,32 18,31.104 18,30 C18,29.262 17.596,28.624 17,28.277 L17,25.482 L20.176,29.188 C20.064,29.436 20,29.71 20,30 C20,31.104 20.896,32 22,32 C23.104,32 24,31.104 24,30 C24,28.896 23.104,28 22,28 C21.818,28 21.646,28.032 21.479,28.077 L17.127,23 L23.143,23 C23.616,23 24,22.616 24,22.143 C24,21.854 23.961,21.575 23.915,21.3 C25.111,20.982 26,19.9 26,18.605 L26,17 L26.5,17 C27.325,17 28,16.325 28,15.5 C28,14.675 27.325,14 26.5,14\"></path></g></g>")]);
};

var __vue_staticRenderFns__$l = [];
/* style */

var __vue_inject_styles__$l = undefined;
/* scoped */

var __vue_scope_id__$l = undefined;
/* module identifier */

var __vue_module_identifier__$l = "data-v-155267da";
/* functional template */

var __vue_is_functional_template__$l = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$l = normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$m = {
  name: "Other",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$m = script$m;
/* template */

var __vue_render__$m = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M25.142,2.74043495 C25.634,2.81143797 26,3.23745613 26,3.73947752 L26,28.2605225 C26,28.7625439 25.634,29.188562 25.142,29.2595651 L13.142,30.9896388 C12.539,31.0766425 12,30.6046224 12,29.9905962 L12,28.0005114 L7.052,28.0005114 C6.473,28.0005114 6,27.5274912 6,26.9484666 L6,5.05153343 C6,4.47250876 6.473,3.9994886 7.052,3.9994886 L12,3.9994886 L12,2.00940379 C12,1.39537763 12.539,0.923357513 13.142,1.01036122 L25.142,2.74043495 Z M15,17.0000426 C15.553,17.0000426 16,16.5530236 16,16 C16,15.4469764 15.553,14.9999574 15,14.9999574 C14.447,14.9999574 14,15.4469764 14,16 C14,16.5530236 14.447,17.0000426 15,17.0000426 Z M8,26.0004262 L12,26.0004262 L12,5.99957383 L8,5.99957383 L8,26.0004262 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$m = [];
/* style */

var __vue_inject_styles__$m = undefined;
/* scoped */

var __vue_scope_id__$m = undefined;
/* module identifier */

var __vue_module_identifier__$m = "data-v-3383b45d";
/* functional template */

var __vue_is_functional_template__$m = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$m = normalizeComponent({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$m, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$n = {
  name: "Outdoor",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$n = script$n;
/* template */

var __vue_render__$n = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M11,10.0003 C14.866,10.0003 18,13.1343 18,17.0003 C18,20.5473 15.359,23.4713 11.937,23.9303 L11.937,27.0003 C11.937,27.5533 11.49,28.0003 10.938,28.0003 C10.385,28.0003 9.938,27.5533 9.938,27.0003 L9.938,23.9113 C6.577,23.3973 4,20.5043 4,17.0003 C4,13.1343 7.134,10.0003 11,10.0003 Z M28,19.346 C28,22.592 25.632,22.954 23,22.994 L23,27 C23,27.553 22.553,28 22,28 C21.447,28 21,27.553 21,27 L21,22.992 C20.485,22.983 19.979,22.965 19.5,22.912 C18.78,22.833 18.426,22.028 18.781,21.398 C19.516,20.097 19.937,18.598 19.937,17 C19.937,14.84 19.167,12.861 17.893,11.308 C17.783,11.174 17.747,10.994 17.804,10.83 C19.075,7.17 20.764,4 22,4 C24.25,4 28,14.503 28,19.346 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$n = [];
/* style */

var __vue_inject_styles__$n = undefined;
/* scoped */

var __vue_scope_id__$n = undefined;
/* module identifier */

var __vue_module_identifier__$n = "data-v-5059d6a0";
/* functional template */

var __vue_is_functional_template__$n = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$n = normalizeComponent({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$n, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$o = {
  name: "OutdoorSocialtime",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$o = script$o;
/* template */

var __vue_render__$o = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M12.29,22 L12.816,20.432 C13.811,20.793 14.869,21 15.973,21 C17.278,21 18.525,20.725 19.67,20.227 L20.265,22 L12.29,22 Z M27,12 C27.553,12 28,12.447 28,13 C28,13.553 27.553,14 27,14 L25.312,14 C24.546,16.15 23.18,17.969 21.439,19.214 L23.049,24.005 C24.13,24.031 25,24.912 25,26 C25,27.104 24.103,28 23,28 C21.894,28 21,27.104 21,26 C21,25.636 21.104,25.299 21.274,25.005 L20.936,24 L11.618,24 L10.504,27.318 C10.363,27.736 9.973,28 9.555,28 C9.449,28 9.342,27.982 9.236,27.947 C8.713,27.771 8.432,27.205 8.607,26.682 L11.005,19.543 C9.028,18.302 7.472,16.352 6.634,14 L5,14 C4.447,14 4,13.553 4,13 C4,12.447 4.447,12 5,12 L6.117,12 C6.068,11.707 6.024,11.412 5.997,11.111 C5.943,10.519 6.4,10 6.997,10 L24.949,10 C25.545,10 26.003,10.519 25.949,11.111 C25.922,11.412 25.878,11.707 25.829,12 L27,12 Z M12.7226,7.916 C12.6486,7.867 11.9996,7.414 11.9996,6.723 C11.9996,6.422 12.1246,5.982 12.7226,5.584 C12.9256,5.447 12.9996,5.334 12.9996,5.277 C12.9996,5.172 12.8356,4.994 12.7226,4.916 C12.4926,4.762 12.4296,4.451 12.5836,4.223 C12.6796,4.078 12.8376,4 12.9996,4 C13.0956,4 13.1916,4.027 13.2776,4.084 C13.3516,4.133 13.9996,4.586 13.9996,5.277 C13.9996,5.576 13.8746,6.018 13.2776,6.416 C13.0726,6.551 12.9996,6.666 12.9996,6.721 C12.9976,6.826 13.1616,7.004 13.2796,7.086 C13.5076,7.238 13.5686,7.549 13.4156,7.777 C13.2616,8.008 12.9496,8.068 12.7226,7.916 Z M15.7226,7.916 C15.6486,7.867 14.9996,7.414 14.9996,6.723 C14.9996,6.423 15.1246,5.982 15.7226,5.584 C15.9256,5.448 15.9996,5.334 15.9996,5.278 C15.9996,5.173 15.8356,4.995 15.7226,4.916 C15.4926,4.763 15.4296,4.452 15.5836,4.223 C15.6796,4.078 15.8376,4 15.9996,4 C16.0956,4 16.1916,4.027 16.2776,4.084 C16.3516,4.133 16.9996,4.586 16.9996,5.277 C16.9996,5.577 16.8746,6.018 16.2776,6.416 C16.0726,6.552 15.9996,6.666 15.9996,6.722 C15.9976,6.827 16.1616,7.005 16.2796,7.086 C16.5076,7.239 16.5686,7.549 16.4156,7.777 C16.2616,8.008 15.9496,8.068 15.7226,7.916 Z M18.7226,7.916 C18.6486,7.867 17.9996,7.414 17.9996,6.723 C17.9996,6.422 18.1246,5.982 18.7226,5.584 C18.9256,5.447 18.9996,5.334 18.9996,5.277 C18.9996,5.172 18.8356,4.994 18.7226,4.916 C18.4926,4.762 18.4296,4.451 18.5836,4.223 C18.6796,4.078 18.8376,4 18.9996,4 C19.0956,4 19.1916,4.027 19.2776,4.084 C19.3516,4.133 19.9996,4.586 19.9996,5.277 C19.9996,5.576 19.8746,6.018 19.2776,6.416 C19.0726,6.551 18.9996,6.666 18.9996,6.721 C18.9976,6.826 19.1616,7.004 19.2796,7.086 C19.5076,7.238 19.5686,7.549 19.4156,7.777 C19.2616,8.008 18.9496,8.068 18.7226,7.916 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$o = [];
/* style */

var __vue_inject_styles__$o = undefined;
/* scoped */

var __vue_scope_id__$o = undefined;
/* module identifier */

var __vue_module_identifier__$o = "data-v-1952ebb1";
/* functional template */

var __vue_is_functional_template__$o = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$o = normalizeComponent({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$o, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$p = {
  name: "Pool",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$p = script$p;
/* template */

var __vue_render__$p = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27.996,18.963 L28,18.963 L28,22.546 C27.878,22.456 27.774,22.368 27.709,22.305 C27.051,21.642 25.968,21.044 24.766,21.032 C24.756,21.032 24.745,21.033 24.735,21.033 C24.613,21.033 24.489,21.037 24.364,21.049 C23.547,21.131 22.694,21.499 21.893,22.305 C20.528,23.68 19.259,22.647 18.907,22.305 C17.739,21.127 15.228,20.155 13.093,22.305 C11.728,23.68 10.458,22.647 10.108,22.305 C9.449,21.641 8.365,21.044 7.163,21.032 C6.229,21.021 5.223,21.365 4.29,22.305 C4.193,22.404 4.097,22.464 4,22.539 L4,18.963 L4.004,18.963 C4.01,18.712 4.104,18.464 4.293,18.273 C5.513,17.044 6.856,16.837 8,17.104 L8,7 C8,6.448 7.552,6 7,6 C6.448,6 6,6.448 6,7 C6,7.552 5.553,8 5,8 C4.447,8 4,7.552 4,7 C4,5.345 5.346,4 7,4 C8.655,4 10,5.345 10,7 L10,9 L17,9 L17,7 C17,6.448 16.552,6 16,6 C15.448,6 15,6.448 15,7 C15,7.552 14.553,8 14,8 C13.447,8 13,7.552 13,7 C13,5.345 14.346,4 16,4 C17.655,4 19,5.345 19,7 L19,18.354 C19.256,18.583 19.76,18.95 20.402,18.963 L20.473,18.963 C20.907,18.953 21.393,18.777 21.893,18.273 C24.026,16.125 26.537,17.094 27.707,18.273 C27.897,18.464 27.99,18.712 27.996,18.963 Z M13.093,18.273 C14.385,16.972 15.814,16.818 17,17.158 L17,16 L10,16 L10,18.173 C10.035,18.207 10.074,18.24 10.108,18.273 C10.322,18.483 10.885,18.949 11.602,18.963 L11.673,18.963 C12.107,18.953 12.593,18.777 13.093,18.273 Z M10,14 L17,14 L17,11 L10,11 L10,14 Z M26.2981,23.7066 C26.3001,23.7086 26.3041,23.7096 26.3061,23.7116 C26.3961,23.8026 27.0341,24.4166 28.0001,24.7616 L28.0001,27.9996 L4.0001,27.9996 L4.0001,24.7876 C4.6001,24.5836 5.1741,24.2366 5.6921,23.7126 C5.6961,23.7076 5.7021,23.7066 5.7071,23.7016 C6.0471,23.3546 6.3811,23.1596 6.6961,23.0666 C7.6451,22.7916 8.4261,23.4406 8.6951,23.7066 C8.6991,23.7106 8.7041,23.7116 8.7081,23.7156 C8.8071,23.8136 9.4631,24.4496 10.4591,24.7876 C11.9011,25.2796 13.3391,24.8926 14.5071,23.7016 C15.8731,22.3116 17.1431,23.3546 17.4931,23.7016 C17.5671,23.7756 18.2391,24.4416 19.2591,24.7876 C19.6671,24.9276 20.0741,24.9946 20.4761,24.9946 C21.4901,24.9946 22.4641,24.5576 23.3001,23.7076 C23.3031,23.7046 23.3061,23.7046 23.3091,23.7016 C23.4791,23.5276 23.6481,23.3926 23.8141,23.2886 C24.9731,22.5646 25.9851,23.3966 26.2981,23.7066 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$p = [];
/* style */

var __vue_inject_styles__$p = undefined;
/* scoped */

var __vue_scope_id__$p = undefined;
/* module identifier */

var __vue_module_identifier__$p = "data-v-79fa0e0c";
/* functional template */

var __vue_is_functional_template__$p = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$p = normalizeComponent({
  render: __vue_render__$p,
  staticRenderFns: __vue_staticRenderFns__$p
}, __vue_inject_styles__$p, __vue_script__$p, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$q = {
  name: "Porch",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$q = script$q;
/* template */

var __vue_render__$q = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M13.786,25.705 L15.239,21.15 L18.365,20.692 L20.32,25.761 C18.185,26.087 15.9,26.073 13.786,25.705 Z M10.834,15.062 C11.521,14.96 12.595,14.801 13.818,14.62 L14.679,18.214 L11.724,18.654 L10.834,15.062 Z M19.767,17.455 L16.664,17.918 L15.806,14.33 C16.884,14.174 17.966,14.018 18.913,13.888 L19.767,17.455 Z M26.869,24.441 C26.595,23.962 25.983,23.795 25.505,24.067 C24.573,24.598 23.492,25.022 22.302,25.345 L20.393,20.395 L26,19.574 C25.766,17.937 24.252,16.799 22.615,17.029 L21.754,17.158 L20.906,13.623 C21.102,13.599 21.273,13.578 21.412,13.563 C21.977,13.575 22.435,14.035 22.435,14.602 C22.435,15.155 22.883,15.602 23.435,15.602 C23.988,15.602 24.435,15.155 24.435,14.602 C24.435,12.925 23.07,11.559 21.391,11.559 C21.373,11.559 21.358,11.569 21.34,11.57 C21.322,11.57 21.307,11.563 21.29,11.564 C19.552,11.741 12.477,12.795 10.349,13.112 L8.48,5.577 C8.25,4.65 7.419,4 6.465,4 L5,4 L9.443,22 L13.038,21.474 L11.834,25.248 C10.782,24.937 9.825,24.545 8.987,24.067 C8.508,23.795 7.896,23.962 7.623,24.441 C7.349,24.922 7.517,25.532 7.997,25.806 C9.215,26.499 10.627,27.041 12.192,27.419 C13.796,27.805 15.496,28 17.246,28 C18.996,28 20.696,27.805 22.3,27.419 C23.865,27.042 25.276,26.499 26.495,25.806 C26.974,25.532 27.142,24.922 26.869,24.441 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$q = [];
/* style */

var __vue_inject_styles__$q = undefined;
/* scoped */

var __vue_scope_id__$q = undefined;
/* module identifier */

var __vue_module_identifier__$q = "data-v-616d7c1f";
/* functional template */

var __vue_is_functional_template__$q = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$q = normalizeComponent({
  render: __vue_render__$q,
  staticRenderFns: __vue_staticRenderFns__$q
}, __vue_inject_styles__$q, __vue_script__$q, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$r = {
  name: "Recreation",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$r = script$r;
/* template */

var __vue_render__$r = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M25,22 C26.657,22 28,23.343 28,25 C28,26.657 26.657,28 25,28 C23.343,28 22,26.657 22,25 C22,23.343 23.343,22 25,22 Z M26.3475,20.2077341 C25.9155,20.0857341 25.4695,19.9997341 24.9995,19.9997341 C22.2435,19.9997341 19.9995,22.2427341 19.9995,24.9997341 C17.6345,25.5207341 14.8735,25.0717341 12.6735,23.9537341 C12.0975,23.6617341 11.4005,23.7717341 10.9435,24.2287341 L7.4525,27.7067341 C7.0625,28.0977341 6.4275,28.0977341 6.0365,27.7067341 L4.2925,25.9687341 C3.9025,25.5787341 3.9025,24.9457341 4.2925,24.5567341 L7.7845,21.0757341 C8.2325,20.6287341 8.3625,19.9417341 8.0725,19.3807341 C5.7815,14.9317341 6.8745,9.19673413 11.3635,5.98073413 C15.0925,3.30873413 19.9725,3.34473413 23.6695,6.06073413 C28.3495,9.49873413 29.2255,15.7007341 26.3475,20.2077341 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$r = [];
/* style */

var __vue_inject_styles__$r = undefined;
/* scoped */

var __vue_scope_id__$r = undefined;
/* module identifier */

var __vue_module_identifier__$r = "data-v-4eeed2bc";
/* functional template */

var __vue_is_functional_template__$r = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$r = normalizeComponent({
  render: __vue_render__$r,
  staticRenderFns: __vue_staticRenderFns__$r
}, __vue_inject_styles__$r, __vue_script__$r, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$s = {
  name: "Socialtime",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$s = script$s;
/* template */

var __vue_render__$s = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"32\" height=\"32\"></rect> <path" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + " d=\"M12.29,22 L12.816,20.432 C13.811,20.793 14.869,21 15.973,21 C17.278,21 18.525,20.725 19.67,20.227 L20.265,22 L12.29,22 Z M27,12 C27.553,12 28,12.447 28,13 C28,13.553 27.553,14 27,14 L25.312,14 C24.546,16.15 23.18,17.969 21.439,19.214 L23.049,24.005 C24.13,24.031 25,24.912 25,26 C25,27.104 24.103,28 23,28 C21.894,28 21,27.104 21,26 C21,25.636 21.104,25.299 21.274,25.005 L20.936,24 L11.618,24 L10.504,27.318 C10.363,27.736 9.973,28 9.555,28 C9.449,28 9.342,27.982 9.236,27.947 C8.713,27.771 8.432,27.205 8.607,26.682 L11.005,19.543 C9.028,18.302 7.472,16.352 6.634,14 L5,14 C4.447,14 4,13.553 4,13 C4,12.447 4.447,12 5,12 L6.117,12 C6.068,11.707 6.024,11.412 5.997,11.111 C5.943,10.519 6.4,10 6.997,10 L24.949,10 C25.545,10 26.003,10.519 25.949,11.111 C25.922,11.412 25.878,11.707 25.829,12 L27,12 Z M12.7226,7.916 C12.6486,7.867 11.9996,7.414 11.9996,6.723 C11.9996,6.422 12.1246,5.982 12.7226,5.584 C12.9256,5.447 12.9996,5.334 12.9996,5.277 C12.9996,5.172 12.8356,4.994 12.7226,4.916 C12.4926,4.762 12.4296,4.451 12.5836,4.223 C12.6796,4.078 12.8376,4 12.9996,4 C13.0956,4 13.1916,4.027 13.2776,4.084 C13.3516,4.133 13.9996,4.586 13.9996,5.277 C13.9996,5.576 13.8746,6.018 13.2776,6.416 C13.0726,6.551 12.9996,6.666 12.9996,6.721 C12.9976,6.826 13.1616,7.004 13.2796,7.086 C13.5076,7.238 13.5686,7.549 13.4156,7.777 C13.2616,8.008 12.9496,8.068 12.7226,7.916 Z M15.7226,7.916 C15.6486,7.867 14.9996,7.414 14.9996,6.723 C14.9996,6.423 15.1246,5.982 15.7226,5.584 C15.9256,5.448 15.9996,5.334 15.9996,5.278 C15.9996,5.173 15.8356,4.995 15.7226,4.916 C15.4926,4.763 15.4296,4.452 15.5836,4.223 C15.6796,4.078 15.8376,4 15.9996,4 C16.0956,4 16.1916,4.027 16.2776,4.084 C16.3516,4.133 16.9996,4.586 16.9996,5.277 C16.9996,5.577 16.8746,6.018 16.2776,6.416 C16.0726,6.552 15.9996,6.666 15.9996,6.722 C15.9976,6.827 16.1616,7.005 16.2796,7.086 C16.5076,7.239 16.5686,7.549 16.4156,7.777 C16.2616,8.008 15.9496,8.068 15.7226,7.916 Z M18.7226,7.916 C18.6486,7.867 17.9996,7.414 17.9996,6.723 C17.9996,6.422 18.1246,5.982 18.7226,5.584 C18.9256,5.447 18.9996,5.334 18.9996,5.277 C18.9996,5.172 18.8356,4.994 18.7226,4.916 C18.4926,4.762 18.4296,4.451 18.5836,4.223 C18.6796,4.078 18.8376,4 18.9996,4 C19.0956,4 19.1916,4.027 19.2776,4.084 C19.3516,4.133 19.9996,4.586 19.9996,5.277 C19.9996,5.576 19.8746,6.018 19.2776,6.416 C19.0726,6.551 18.9996,6.666 18.9996,6.721 C18.9976,6.826 19.1616,7.004 19.2796,7.086 C19.5076,7.238 19.5686,7.549 19.4156,7.777 C19.2616,8.008 18.9496,8.068 18.7226,7.916 Z\"></path></g>")]);
};

var __vue_staticRenderFns__$s = [];
/* style */

var __vue_inject_styles__$s = undefined;
/* scoped */

var __vue_scope_id__$s = undefined;
/* module identifier */

var __vue_module_identifier__$s = "data-v-ab126d00";
/* functional template */

var __vue_is_functional_template__$s = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$s = normalizeComponent({
  render: __vue_render__$s,
  staticRenderFns: __vue_staticRenderFns__$s
}, __vue_inject_styles__$s, __vue_script__$s, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$t = {
  name: "Staircase",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$t = script$t;
/* template */

var __vue_render__$t = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27,28 L11.414,28 L28,11.414 L28,27 C28,27.553 27.553,28 27,28 Z M23,4 L28,4 L28,8.586 L8.586,28 L4,28 L4,23 C4,22.447 4.447,22 5,22 L10,22 L10,17 C10,16.447 10.447,16 11,16 L16,16 L16,11 C16,10.447 16.447,10 17,10 L22,10 L22,5 C22,4.447 22.447,4 23,4 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$t = [];
/* style */

var __vue_inject_styles__$t = undefined;
/* scoped */

var __vue_scope_id__$t = undefined;
/* module identifier */

var __vue_module_identifier__$t = "data-v-e71101ee";
/* functional template */

var __vue_is_functional_template__$t = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$t = normalizeComponent({
  render: __vue_render__$t,
  staticRenderFns: __vue_staticRenderFns__$t
}, __vue_inject_styles__$t, __vue_script__$t, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$u = {
  name: "Storage",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$u = script$u;
/* template */

var __vue_render__$u = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M5,26 L5,11 L27,11 L27,26 C27,26.553 26.553,27 26,27 L6,27 C5.447,27 5,26.553 5,26 Z M12,15 C11.447,15 11,15.447 11,16 C11,16.553 11.447,17 12,17 L20,17 C20.553,17 21,16.553 21,16 C21,15.447 20.553,15 20,15 L12,15 Z M26,5 C26.553,5 27,5.447 27,6 L27,9 L5,9 L5,6 C5,5.447 5.447,5 6,5 L26,5 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$u = [];
/* style */

var __vue_inject_styles__$u = undefined;
/* scoped */

var __vue_scope_id__$u = undefined;
/* module identifier */

var __vue_module_identifier__$u = "data-v-5ecf4c57";
/* functional template */

var __vue_is_functional_template__$u = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$u = normalizeComponent({
  render: __vue_render__$u,
  staticRenderFns: __vue_staticRenderFns__$u
}, __vue_inject_styles__$u, __vue_script__$u, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$v = {
  name: "Studio",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$v = script$v;
/* template */

var __vue_render__$v = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M25,6 C25.553,6 26,6.447 26,7 L26,16 C26,16.553 25.553,17 25,17 L7,17 C6.447,17 6,16.553 6,16 L6,7 C6,6.447 6.447,6 7,6 L15,6 L15,4 C15,3.447 15.447,3 16,3 C16.553,3 17,3.447 17,4 L17,6 L25,6 Z M21.0950103,21 L24.8660103,27.498 C25.1430103,27.976 24.9800103,28.588 24.5020103,28.865 C24.3440103,28.957 24.1710103,29 24.0010103,29 C23.6570103,29 23.3210103,28.821 23.1350103,28.502 L18.7820103,21 L17.0000103,21 L17.0000103,27.95 C17.0000103,28.503 16.5530103,28.95 16.0000103,28.95 C15.4480103,28.95 15.0000103,28.503 15.0000103,27.95 L15.0000103,21 L13.2180103,21 L8.86601026,28.502 C8.68001026,28.821 8.34401026,29 7.99901026,29 C7.82901026,29 7.65701026,28.957 7.49801026,28.865 C7.02101026,28.588 6.85801026,27.976 7.13501026,27.498 L10.9060103,21 L9.00001026,21 C8.44801026,21 8.00001026,20.553 8.00001026,20 C8.00001026,19.447 8.44801026,19 9.00001026,19 L23.0000103,19 C23.5530103,19 24.0000103,19.447 24.0000103,20 C24.0000103,20.553 23.5530103,21 23.0000103,21 L21.0950103,21 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$v = [];
/* style */

var __vue_inject_styles__$v = undefined;
/* scoped */

var __vue_scope_id__$v = undefined;
/* module identifier */

var __vue_module_identifier__$v = "data-v-a0314e12";
/* functional template */

var __vue_is_functional_template__$v = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$v = normalizeComponent({
  render: __vue_render__$v,
  staticRenderFns: __vue_staticRenderFns__$v
}, __vue_inject_styles__$v, __vue_script__$v, __vue_scope_id__$v, __vue_is_functional_template__$v, __vue_module_identifier__$v, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$w = {
  name: "Terrace",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$w = script$w;
/* template */

var __vue_render__$w = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M27.5706164,8.5645 C27.9536164,8.8375 28.1166164,9.3515 27.9116164,9.7755 C27.5866164,10.4465 26.8926164,10.9705 26.0906164,10.9705 C25.5686164,10.9705 25.0926164,10.7495 24.7346164,10.4105 C24.3646164,10.0595 23.7796164,10.0595 23.4096164,10.4105 C23.0506164,10.7495 22.5756164,10.9705 22.0536164,10.9705 C21.5326164,10.9705 21.0566164,10.7495 20.6996164,10.4105 C20.3296164,10.0595 19.7436164,10.0595 19.3736164,10.4105 C19.0146164,10.7495 18.5396164,10.9705 18.0176164,10.9705 C17.6456164,10.9705 17.2996164,10.8545 17.0006164,10.6665 L17.0006164,17.9705 C17.0006164,18.5235 16.5526164,18.9705 16.0006164,18.9705 C15.4476164,18.9705 15.0006164,18.5235 15.0006164,17.9705 L15.0006164,10.6675 C14.7016164,10.8545 14.3546164,10.9705 13.9816164,10.9705 C13.4616164,10.9705 12.9856164,10.7495 12.6276164,10.4105 C12.2576164,10.0595 11.6716164,10.0595 11.3006164,10.4105 C10.9436164,10.7495 10.4676164,10.9705 9.94561644,10.9705 C9.42461644,10.9705 8.94961644,10.7495 8.59161644,10.4105 C8.22061644,10.0595 7.63461644,10.0595 7.26461644,10.4105 C6.90761644,10.7495 6.43161644,10.9705 5.91061644,10.9705 C5.10761644,10.9705 4.41461644,10.4465 4.08961644,9.7755 C3.88361644,9.3515 4.04761644,8.8375 4.42961644,8.5645 L15.3936164,0.2055 C15.7526164,-0.0685 16.2486164,-0.0685 16.6066164,0.2055 L27.5706164,8.5645 Z M23.0003164,19.9708 C24.1043164,19.9708 25.0003164,20.8668 25.0003164,21.9708 C25.0003164,23.0748 24.1043164,23.9708 23.0003164,23.9708 L18.5813164,23.9708 L23.7753164,30.3388 C24.1243164,30.7668 24.0603164,31.3968 23.6323164,31.7458 C23.4463164,31.8978 23.2233164,31.9708 23.0013164,31.9708 C22.7113164,31.9708 22.4233164,31.8448 22.2253164,31.6028 L16.0003164,23.9708 L9.77531644,31.6028 C9.42531644,32.0298 8.79631644,32.0948 8.36831644,31.7458 C7.94031644,31.3968 7.87631644,30.7668 8.22531644,30.3388 L13.4193164,23.9708 L9.00031644,23.9708 C7.89631644,23.9708 7.00031644,23.0748 7.00031644,21.9708 C7.00031644,20.8668 7.89631644,19.9708 9.00031644,19.9708 L23.0003164,19.9708 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$w = [];
/* style */

var __vue_inject_styles__$w = undefined;
/* scoped */

var __vue_scope_id__$w = undefined;
/* module identifier */

var __vue_module_identifier__$w = "data-v-57d38950";
/* functional template */

var __vue_is_functional_template__$w = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$w = normalizeComponent({
  render: __vue_render__$w,
  staticRenderFns: __vue_staticRenderFns__$w
}, __vue_inject_styles__$w, __vue_script__$w, __vue_scope_id__$w, __vue_is_functional_template__$w, __vue_module_identifier__$w, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$x = {
  name: "Toilet",
  props: {
    checked: Boolean
  }
};/* script */
var __vue_script__$x = script$x;
/* template */

var __vue_render__$x = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 32 32",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g" + _vm._ssrAttr("fill", _vm.checked ? '#101010' : '#FFFFFF') + "><path d=\"M8.9999875,19 C8.44699441,19 8,18.553 8,18 C8,17.447 8.44699441,17 8.9999875,17 L12.80294,17 C10.5459682,15.506 8.9999875,12.488 8.9999875,9 C8.9999875,4.029 12.1339483,0 15.9999,0 C19.8658517,0 22.9998125,4.029 22.9998125,9 C22.9998125,12.488 21.4538318,15.506 19.19686,17 L22.9998125,17 C23.5528056,17 23.9998,17.447 23.9998,18 C23.9998,18.553 23.5528056,19 22.9998125,19 L8.9999875,19 Z M23.20001,21 C23.6410045,21 24,21.348 24,21.777 L24,21.997 C24,25.283 21.9000262,27.812 18.9350633,28.949 C18.5120686,29.112 18.2320721,29.509 18.2320721,29.953 L18.2320721,30.915 C18.2320721,31.515 17.7320783,32 17.116086,32 L14.8841139,32 C14.2671217,32 13.7671279,31.515 13.7671279,30.915 L13.7671279,29.937 C13.7671279,29.493 13.4881314,29.1 13.0651367,28.933 C10.0701741,27.747 7.99720003,25.082 8.0002,21.77 C8.0002,21.344 8.36219547,21 8.80019,21 L23.20001,21 Z\"></path></g></g>")]);
};

var __vue_staticRenderFns__$x = [];
/* style */

var __vue_inject_styles__$x = undefined;
/* scoped */

var __vue_scope_id__$x = undefined;
/* module identifier */

var __vue_module_identifier__$x = "data-v-c68c2c04";
/* functional template */

var __vue_is_functional_template__$x = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$x = normalizeComponent({
  render: __vue_render__$x,
  staticRenderFns: __vue_staticRenderFns__$x
}, __vue_inject_styles__$x, __vue_script__$x, __vue_scope_id__$x, __vue_is_functional_template__$x, __vue_module_identifier__$x, false, undefined, undefined, undefined);var icons = {
  Attic: __vue_component__,
  Balcony: __vue_component__$1,
  Bathroom: __vue_component__$2,
  Bedroom: __vue_component__$3,
  Carpot: __vue_component__$4,
  Closet: __vue_component__$5,
  Computer: __vue_component__$6,
  Dining: __vue_component__$7,
  Driveway: __vue_component__$8,
  Frontdoor: __vue_component__$9,
  Garage: __vue_component__$a,
  Guestroom: __vue_component__$b,
  Gym: __vue_component__$c,
  Hallway: __vue_component__$d,
  Kidsbedroom: __vue_component__$e,
  Kitchen: __vue_component__$f,
  Laundryroom: __vue_component__$g,
  Living: __vue_component__$h,
  Lounge: __vue_component__$i,
  Mancave: __vue_component__$j,
  Nursery: __vue_component__$k,
  Office: __vue_component__$l,
  Other: __vue_component__$m,
  Outdoor: __vue_component__$n,
  OutdoorSocialtime: __vue_component__$o,
  Pool: __vue_component__$p,
  Porch: __vue_component__$q,
  Recreation: __vue_component__$r,
  Socialtime: __vue_component__$s,
  Staircase: __vue_component__$t,
  Storage: __vue_component__$u,
  Studio: __vue_component__$v,
  Terrace: __vue_component__$w,
  Toilet: __vue_component__$x
};
var choices = ['attic', 'balcony', 'bathroom', 'bedroom', 'carpot', 'closet', 'computer', 'dining', 'driveway', 'frontdoor', 'garage', 'guestroom', 'gym', 'hallway', 'kidsbedroom', 'kitchen', 'laundryroom', 'living', 'lounge', 'mancave', 'nursery', 'office', 'other', 'outdoor', 'outdoor-socialtime', 'pool', 'porch', 'recreation', 'socialtime', 'staircase', 'storage', 'studio', 'terrace', 'toilet'];//
var script$y = {
  name: "Hue",
  components: icons,
  props: {
    icon: {
      type: String,
      required: true,
      validator: function validator(value) {
        return choices.indexOf(value) !== -1;
      }
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: [String, Array],
      required: true
    },
    isOn: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isChecked: this.isOn
    };
  },
  computed: {
    ToggleColor: function ToggleColor() {
      if (Array.isArray(this.color)) {
        return color(this.color[this.color.length - 1]).darken(0.2);
      }

      return color(this.color).darken(0.2);
    },
    BackgroundColor: function BackgroundColor() {
      if (Array.isArray(this.color)) {
        var gradient = tinygradient(this.color);
        return gradient.css("linear");
      }

      return this.color;
    },
    Icon: function Icon() {
      return this.icon.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    }
  },
  methods: {
    handleChange: function handleChange() {
      this.isChecked = !this.isChecked;
      this.$emit("change", this.isChecked);
    },
    Color: color
  }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$y = script$y;
/* template */

var __vue_render__$y = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "hue",
    style: {
      background: _vm.isChecked ? _vm.BackgroundColor : 'rgb(66, 66, 66)'
    }
  }, [_vm._ssrNode("<div class=\"hue-content\">", "</div>", [_vm._ssrNode("<div class=\"hue-content-icon\">", "</div>", [_c(_vm.Icon, {
    tag: "component",
    attrs: {
      "checked": _vm.isChecked
    }
  })], 1), _vm._ssrNode(" <div class=\"hue-content-text\"><div class=\"hue-content-text-name\"" + _vm._ssrStyle(null, {
    color: _vm.isChecked ? '#000000' : '#FFFFFF'
  }, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.name) + "\n      ") + "</div></div> <div class=\"hue-content-toggle\"><input type=\"checkbox\" value=\"1\"" + _vm._ssrAttr("checked", _vm.isChecked) + " class=\"hue-content-toggle-checkbox\"> <label class=\"hue-content-toggle-label\"" + _vm._ssrStyle(null, {
    backgroundColor: _vm.isChecked ? _vm.ToggleColor : '#7B7B7B'
  }, null) + ">\n        Toggle\n      </label></div>")], 2)]);
};

var __vue_staticRenderFns__$y = [];
/* style */

var __vue_inject_styles__$y = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-b198cad0_0", {
    source: ".hue[data-v-b198cad0]{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;border-radius:10px;padding:20px;max-width:300px;min-width:280px;position:relative;transition:all .3s ease}.hue-content[data-v-b198cad0]{display:flex;min-height:40px}.hue-content-icon[data-v-b198cad0]{align-self:center;flex:0 0 32px;height:32px;max-width:32px}.hue-content-text[data-v-b198cad0]{align-self:center;margin:0 16px;width:10rem}.hue-content-text-name[data-v-b198cad0]{flex:1 0 auto;font-weight:700;font-size:16px;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.hue-content-toggle[data-v-b198cad0]{align-self:center;margin-left:auto}.hue-content-toggle-checkbox[data-v-b198cad0]{height:0;width:0;display:none}.hue-content-toggle-checkbox:checked+.hue-content-toggle-label[data-v-b198cad0]:after{background:#fff;left:100%;transform:translate(-100%,-50%)}.hue-content-toggle-label[data-v-b198cad0]{cursor:pointer;text-indent:-9999px;width:40px;height:18px;display:block;border-radius:100px;position:relative}.hue-content-toggle-label[data-v-b198cad0]:active:after{width:25px}.hue-content-toggle-label[data-v-b198cad0]:after{content:\"\";position:absolute;top:50%;left:0;width:22px;height:22px;background:#b9b9b9;border-radius:90px;transition:.3s;transform:translateY(-50%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$y = "data-v-b198cad0";
/* module identifier */

var __vue_module_identifier__$y = "data-v-b198cad0";
/* functional template */

var __vue_is_functional_template__$y = false;
/* style inject shadow dom */

var __vue_component__$y = normalizeComponent({
  render: __vue_render__$y,
  staticRenderFns: __vue_staticRenderFns__$y
}, __vue_inject_styles__$y, __vue_script__$y, __vue_scope_id__$y, __vue_is_functional_template__$y, __vue_module_identifier__$y, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Hue', __vue_component__$y);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found

/* global window global */

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__$y.install = install; // Export component by default
exports.default=__vue_component__$y;