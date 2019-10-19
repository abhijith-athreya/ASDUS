/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */


(function( window, undefined ) {

var Globalize,
	// private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
	// private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	truncate,
	zeroPad,
	// private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

// Global variable (Globalize) or CommonJS module (globalize)
Globalize = function( cultureSelector ) {
	return new Globalize.prototype.init( cultureSelector );
};

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	module.exports = Globalize;
} else {
	// Export as global variable
	window.Globalize = Globalize;
}

Globalize.cultures = {};

Globalize.prototype = {
	constructor: Globalize,
	init: function( cultureSelector ) {
		this.cultures = Globalize.cultures;
		this.cultureSelector = cultureSelector;

		return this;
	}
};
Globalize.prototype.init.prototype = Globalize.prototype;

// 1.	 When defining a culture, all fields are required except the ones stated as optional.
// 2.	 Each culture should have a ".calendars" object with at least one calendar named "standard"
//		 which serves as the default calendar in use by that culture.
// 3.	 Each culture should have a ".calendar" object which is the current calendar being used,
//		 it may be dynamically changed at any time to one of the calendars in ".calendars".
Globalize.cultures[ "default" ] = {
	// A unique name for the culture in the form <language code>-<country/region code>
	name: "en",
	// the name of the culture in the english language
	englishName: "English",
	// the name of the culture in its own language
	nativeName: "English",
	// whether the culture uses right-to-left text
	isRTL: false,
	// "language" is used for so-called "specific" cultures.
	// For example, the culture "es-CL" means "Spanish, in Chili".
	// It represents the Spanish-speaking culture as it is in Chili,
	// which might have different formatting rules or even translations
	// than Spanish in Spain. A "neutral" culture is one that is not
	// specific to a region. For example, the culture "es" is the generic
	// Spanish culture, which may be a more generalized version of the language
	// that may or may not be what a specific culture expects.
	// For a specific culture like "es-CL", the "language" field refers to the
	// neutral, generic culture information for the language it is using.
	// This is not always a simple matter of the string before the dash.
	// For example, the "zh-Hans" culture is netural (Simplified Chinese).
	// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
	// field is "zh-CHS", not "zh".
	// This field should be used to navigate from a specific culture to it's
	// more general, neutral culture. If a culture is already as general as it
	// can get, the language may refer to itself.
	language: "en",
	// numberFormat defines general number formatting rules, like the digits in
	// each grouping, the group separator, and how negative numbers are displayed.
	numberFormat: {
		// [negativePattern]
		// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
		// but is still defined as an array for consistency with them.
		//   negativePattern: one of "(n)|-n|- n|n-|n -"
		pattern: [ "-n" ],
		// number of decimal places normally shown
		decimals: 2,
		// string that separates number groups, as in 1,000,000
		",": ",",
		// string that separates a number from the fractional portion, as in 1.99
		".": ".",
		// array of numbers indicating the size of each number group.
		// TODO: more detailed description and example
		groupSizes: [ 3 ],
		// symbol used for positive numbers
		"+": "+",
		// symbol used for negative numbers
		"-": "-",
		// symbol used for NaN (Not-A-Number)
		NaN: "NaN",
		// symbol used for Negative Infinity
		negativeInfinity: "-Infinity",
		// symbol used for Positive Infinity
		positiveInfinity: "Infinity",
		percent: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
			//   positivePattern: one of "n %|n%|%n|% n"
			pattern: [ "-n %", "n %" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent a percentage
			symbol: "%"
		},
		currency: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
			//   positivePattern: one of "$n|n$|$ n|n $"
			pattern: [ "-$n", "$n" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent currency
			symbol: "$"
		}
	},
	// calendars defines all the possible calendars used by this culture.
	// There should be at least one defined with name "standard", and is the default
	// calendar used by the culture.
	// A calendar contains information about how dates are formatted, information about
	// the calendar's eras, a standard set of the date formats,
	// translations for day and month names, and if the calendar is not based on the Gregorian
	// calendar, conversion functions to and from the Gregorian calendar.
	calendars: {
		standard: {
			// name that identifies the type of calendar this is
			name: "Gregorian_USEnglish",
			// separator of parts of a date (e.g. "/" in 11/05/1955)
			"/": "/",
			// separator of parts of a time (e.g. ":" in 05:44 PM)
			":": ":",
			// the first day of the week (0 = Sunday, 1 = Monday, etc)
			firstDay: 0,
			days: {
				// full day names
				names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
				// abbreviated day names
				namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				// shortest day names
				namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
			},
			months: {
				// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
				names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
				// abbreviated month names
				namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
			},
			// AM and PM designators in one of these forms:
			// The usual view, and the upper and lower case versions
			//   [ standard, lowercase, uppercase ]
			// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
			//   null
			AM: [ "AM", "am", "AM" ],
			PM: [ "PM", "pm", "PM" ],
			eras: [
				// eras in reverse chronological order.
				// name: the name of the era in this culture (e.g. A.D., C.E.)
				// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
				// offset: offset in years from gregorian calendar
				{
					"name": "A.D.",
					"start": null,
					"offset": 0
				}
			],
			// when a two digit year is given, it will never be parsed as a four digit
			// year greater than this year (in the appropriate era for the culture)
			// Set it as a full year (e.g. 2029) or use an offset format starting from
			// the current year: "+19" would correspond to 2029 if the current year 2010.
			twoDigitYearMax: 2029,
			// set of predefined date and time patterns used by the culture
			// these represent the format someone in this culture would expect
			// to see given the portions of the date that are shown.
			patterns: {
				// short date pattern
				d: "M/d/yyyy",
				// long date pattern
				D: "dddd, MMMM dd, yyyy",
				// short time pattern
				t: "h:mm tt",
				// long time pattern
				T: "h:mm:ss tt",
				// long date, short time pattern
				f: "dddd, MMMM dd, yyyy h:mm tt",
				// long date, long time pattern
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				// month/day pattern
				M: "MMMM dd",
				// month/year pattern
				Y: "yyyy MMMM",
				// S is a sortable format that does not vary by culture
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
			// optional fields for each calendar:
			/*
			monthsGenitive:
				Same as months but used when the day preceeds the month.
				Omit if the culture has no genitive distinction in month names.
				For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
			convert:
				Allows for the support of non-gregorian based calendars. This convert object is used to
				to convert a date to and from a gregorian calendar date to handle parsing and formatting.
				The two functions:
					fromGregorian( date )
						Given the date as a parameter, return an array with parts [ year, month, day ]
						corresponding to the non-gregorian based year, month, and day for the calendar.
					toGregorian( year, month, day )
						Given the non-gregorian year, month, and day, return a new Date() object
						set to the corresponding date in the gregorian calendar.
			*/
		}
	},
	// For localized strings
	messages: {}
};

Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

Globalize.cultures[ "en" ] = Globalize.cultures[ "default" ];

Globalize.cultureSelector = "en";

//
// private variables
//

regexHex = /^0x[a-f0-9]+$/i;
regexInfinity = /^[+-]?infinity$/i;
regexParseFloat = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/;
regexTrim = /^\s+|\s+$/g;

//
// private JavaScript utility functions
//

arrayIndexOf = function( array, item ) {
	if ( array.indexOf ) {
		return array.indexOf( item );
	}
	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[i] === item ) {
			return i;
		}
	}
	return -1;
};

endsWith = function( value, pattern ) {
	return value.substr( value.length - pattern.length ) === pattern;
};

extend = function( deep ) {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Array]";
};

isFunction = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Function]";
};

isObject = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Object]";
};

startsWith = function( value, pattern ) {
	return value.indexOf( pattern ) === 0;
};

trim = function( value ) {
	return ( value + "" ).replace( regexTrim, "" );
};

truncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};

zeroPad = function( str, count, left ) {
	var l;
	for ( l = str.length; l < count; l += 1 ) {
		str = ( left ? ("0" + str) : (str + "0") );
	}
	return str;
};

//
// private Globalization utility functions
//

appendPreOrPostMatch = function( preMatch, strings ) {
	// appends pre- and post- token match strings while removing escaped characters.
	// Returns a single quote count which is used to determine if the token occurs
	// in a string literal.
	var quoteCount = 0,
		escaped = false;
	for ( var i = 0, il = preMatch.length; i < il; i++ ) {
		var c = preMatch.charAt( i );
		switch ( c ) {
			case "\'":
				if ( escaped ) {
					strings.push( "\'" );
				}
				else {
					quoteCount++;
				}
				escaped = false;
				break;
			case "\\":
				if ( escaped ) {
					strings.push( "\\" );
				}
				escaped = !escaped;
				break;
			default:
				strings.push( c );
				escaped = false;
				break;
		}
	}
	return quoteCount;
};

expandFormat = function( cal, format ) {
	// expands unspecified or single character date formats into the full pattern.
	format = format || "F";
	var pattern,
		patterns = cal.patterns,
		len = format.length;
	if ( len === 1 ) {
		pattern = patterns[ format ];
		if ( !pattern ) {
			throw "Invalid date format string \'" + format + "\'.";
		}
		format = pattern;
	}
	else if ( len === 2 && format.charAt(0) === "%" ) {
		// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
		format = format.charAt( 1 );
	}
	return format;
};

formatDate = function( value, format, culture ) {
	var cal = culture.calendar,
		convert = cal.convert;

	if ( !format || !format.length || format === "i" ) {
		var ret;
		if ( culture && culture.name.length ) {
			if ( convert ) {
				// non-gregorian calendar, so we cannot use built-in toLocaleString()
				ret = formatDate( value, cal.patterns.F, culture );
			}
			else {
				var eraDate = new Date( value.getTime() ),
					era = getEra( value, cal.eras );
				eraDate.setFullYear( getEraYear(value, cal, era) );
				ret = eraDate.toLocaleString();
			}
		}
		else {
			ret = value.toString();
		}
		return ret;
	}

	var eras = cal.eras,
		sortable = format === "s";
	format = expandFormat( cal, format );

	// Start with an empty string
	ret = [];
	var hour,
		zeros = [ "0", "00", "000" ],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

	function padZeros( num, c ) {
		var r, s = num + "";
		if ( c > 1 && s.length < c ) {
			r = ( zeros[c - 2] + s);
			return r.substr( r.length - c, c );
		}
		else {
			r = s;
		}
		return r;
	}

	function hasDay() {
		if ( foundDay || checkedDay ) {
			return foundDay;
		}
		foundDay = dayPartRegExp.test( format );
		checkedDay = true;
		return foundDay;
	}

	function getPart( date, part ) {
		if ( converted ) {
			return converted[ part ];
		}
		switch ( part ) {
			case 0: return date.getFullYear();
			case 1: return date.getMonth();
			case 2: return date.getDate();
		}
	}

	if ( !sortable && convert ) {
		converted = convert.fromGregorian( value );
	}

	for ( ; ; ) {
		// Save the current index
		var index = tokenRegExp.lastIndex,
			// Look for the next pattern
			ar = tokenRegExp.exec( format );

		// Append the text before the pattern (or the end of the string if not found)
		var preMatch = format.slice( index, ar ? ar.index : format.length );
		quoteCount += appendPreOrPostMatch( preMatch, ret );

		if ( !ar ) {
			break;
		}

		// do not replace any matches that occur inside a string literal.
		if ( quoteCount % 2 ) {
			ret.push( ar[0] );
			continue;
		}

		var current = ar[ 0 ],
			clength = current.length;

		switch ( current ) {
			case "ddd":
				//Day of the week, as a three-letter abbreviation
			case "dddd":
				// Day of the week, using the full name
				var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
				ret.push( names[value.getDay()] );
				break;
			case "d":
				// Day of month, without leading zero for single-digit days
			case "dd":
				// Day of month, with leading zero for single-digit days
				foundDay = true;
				ret.push(
					padZeros( getPart(value, 2), clength )
				);
				break;
			case "MMM":
				// Month, as a three-letter abbreviation
			case "MMMM":
				// Month, using the full name
				var part = getPart( value, 1 );
				ret.push(
					( cal.monthsGenitive && hasDay() )
					?
					cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ]
					:
					cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ]
				);
				break;
			case "M":
				// Month, as digits, with no leading zero for single-digit months
			case "MM":
				// Month, as digits, with leading zero for single-digit months
				ret.push(
					padZeros( getPart(value, 1) + 1, clength )
				);
				break;
			case "y":
				// Year, as two digits, but with no leading zero for years less than 10
			case "yy":
				// Year, as two digits, with leading zero for years less than 10
			case "yyyy":
				// Year represented by four full digits
				part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
				if ( clength < 4 ) {
					part = part % 100;
				}
				ret.push(
					padZeros( part, clength )
				);
				break;
			case "h":
				// Hours with no leading zero for single-digit hours, using 12-hour clock
			case "hh":
				// Hours with leading zero for single-digit hours, using 12-hour clock
				hour = value.getHours() % 12;
				if ( hour === 0 ) hour = 12;
				ret.push(
					padZeros( hour, clength )
				);
				break;
			case "H":
				// Hours with no leading zero for single-digit hours, using 24-hour clock
			case "HH":
				// Hours with leading zero for single-digit hours, using 24-hour clock
				ret.push(
					padZeros( value.getHours(), clength )
				);
				break;
			case "m":
				// Minutes with no leading zero for single-digit minutes
			case "mm":
				// Minutes with leading zero for single-digit minutes
				ret.push(
					padZeros( value.getMinutes(), clength )
				);
				break;
			case "s":
				// Seconds with no leading zero for single-digit seconds
			case "ss":
				// Seconds with leading zero for single-digit seconds
				ret.push(
					padZeros( value.getSeconds(), clength )
				);
				break;
			case "t":
				// One character am/pm indicator ("a" or "p")
			case "tt":
				// Multicharacter am/pm indicator
				part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
				ret.push( clength === 1 ? part.charAt(0) : part );
				break;
			case "f":
				// Deciseconds
			case "ff":
				// Centiseconds
			case "fff":
				// Milliseconds
				ret.push(
					padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
				);
				break;
			case "z":
				// Time zone offset, no leading zero
			case "zz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
				);
				break;
			case "zzz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 )
					// Hard coded ":" separator, rather than using cal.TimeSeparator
					// Repeated here for consistency, plus ":" was already assumed in date parsing.
					+ ":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
				);
				break;
			case "g":
			case "gg":
				if ( cal.eras ) {
					ret.push(
						cal.eras[ getEra(value, eras) ].name
					);
				}
				break;
		case "/":
			ret.push( cal["/"] );
			break;
		default:
			throw "Invalid date format pattern \'" + current + "\'.";
			break;
		}
	}
	return ret.join( "" );
};

// formatNumber
(function() {
	var expandNumber;

	expandNumber = function( number, precision, formatInfo ) {
		var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[ 0 ],
			curGroupIndex = 1,
			factor = Math.pow( 10, precision ),
			rounded = Math.round( number * factor ) / factor;

		if ( !isFinite(rounded) ) {
			rounded = number;
		}
		number = rounded;

		var numberString = number+"",
			right = "",
			split = numberString.split( /e/i ),
			exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
		numberString = split[ 0 ];
		split = numberString.split( "." );
		numberString = split[ 0 ];
		right = split.length > 1 ? split[ 1 ] : "";

		var l;
		if ( exponent > 0 ) {
			right = zeroPad( right, exponent, false );
			numberString += right.slice( 0, exponent );
			right = right.substr( exponent );
		}
		else if ( exponent < 0 ) {
			exponent = -exponent;
			numberString = zeroPad( numberString, exponent + 1 );
			right = numberString.slice( -exponent, numberString.length ) + right;
			numberString = numberString.slice( 0, -exponent );
		}

		if ( precision > 0 ) {
			right = formatInfo[ "." ] +
				( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
		}
		else {
			right = "";
		}

		var stringIndex = numberString.length - 1,
			sep = formatInfo[ "," ],
			ret = "";

		while ( stringIndex >= 0 ) {
			if ( curSize === 0 || curSize > stringIndex ) {
				return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
			}
			ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

			stringIndex -= curSize;

			if ( curGroupIndex < groupSizes.length ) {
				curSize = groupSizes[ curGroupIndex ];
				curGroupIndex++;
			}
		}

		return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
	};

	formatNumber = function( value, format, culture ) {
		if ( !isFinite(value) ) {
			if ( value === Infinity ) {
				return culture.numberFormat.positiveInfinity;
			}
			if ( value === -Infinity ) {
				return culture.numberFormat.negativeInfinity;
			}
			return culture.numberFormat.NaN;
		}
		if ( !format || format === "i" ) {
			return culture.name.length ? value.toLocaleString() : value.toString();
		}
		format = format || "D";

		var nf = culture.numberFormat,
			number = Math.abs( value ),
			precision = -1,
			pattern;
		if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

		var current = format.charAt( 0 ).toUpperCase(),
			formatInfo;

		switch ( current ) {
			case "D":
				pattern = "n";
				number = truncate( number );
				if ( precision !== -1 ) {
					number = zeroPad( "" + number, precision, true );
				}
				if ( value < 0 ) number = "-" + number;
				break;
			case "N":
				formatInfo = nf;
				// fall through
			case "C":
				formatInfo = formatInfo || nf.currency;
				// fall through
			case "P":
				formatInfo = formatInfo || nf.percent;
				pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
				if ( precision === -1 ) precision = formatInfo.decimals;
				number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
				break;
			default:
				throw "Bad number format specifier: " + current;
		}

		var patternParts = /n|\$|-|%/g,
			ret = "";
		for ( ; ; ) {
			var index = patternParts.lastIndex,
				ar = patternParts.exec( pattern );

			ret += pattern.slice( index, ar ? ar.index : pattern.length );

			if ( !ar ) {
				break;
			}

			switch ( ar[0] ) {
				case "n":
					ret += number;
					break;
				case "$":
					ret += nf.currency.symbol;
					break;
				case "-":
					// don't make 0 negative
					if ( /[1-9]/.test(number) ) {
						ret += nf[ "-" ];
					}
					break;
				case "%":
					ret += nf.percent.symbol;
					break;
			}
		}

		return ret;
	};

}());

getTokenRegExp = function() {
	// regular expression for matching date and time tokens in format strings.
	return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
};

getEra = function( date, eras ) {
	if ( !eras ) return 0;
	var start, ticks = date.getTime();
	for ( var i = 0, l = eras.length; i < l; i++ ) {
		start = eras[ i ].start;
		if ( start === null || ticks >= start ) {
			return i;
		}
	}
	return 0;
};

getEraYear = function( date, cal, era, sortable ) {
	var year = date.getFullYear();
	if ( !sortable && cal.eras ) {
		// convert normal gregorian year to era-shifted gregorian
		// year by subtracting the era offset
		year -= cal.eras[ era ].offset;
	}
	return year;
};

// parseExact
(function() {
	var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

	expandYear = function( cal, year ) {
		// expands 2-digit year into 4 digits.
		if ( year < 100 ) {
			var now = new Date(),
				era = getEra( now ),
				curr = getEraYear( now, cal, era ),
				twoDigitYearMax = cal.twoDigitYearMax;
			twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
			year += curr - ( curr % 100 );
			if ( year > twoDigitYearMax ) {
				year -= 100;
			}
		}
		return year;
	};

	getDayIndex = function	( cal, value, abbr ) {
		var ret,
			days = cal.days,
			upperDays = cal._upperDays;
		if ( !upperDays ) {
			cal._upperDays = upperDays = [
				toUpperArray( days.names ),
				toUpperArray( days.namesAbbr ),
				toUpperArray( days.namesShort )
			];
		}
		value = toUpper( value );
		if ( abbr ) {
			ret = arrayIndexOf( upperDays[1], value );
			if ( ret === -1 ) {
				ret = arrayIndexOf( upperDays[2], value );
			}
		}
		else {
			ret = arrayIndexOf( upperDays[0], value );
		}
		return ret;
	};

	getMonthIndex = function( cal, value, abbr ) {
		var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
		if ( !upperMonths ) {
			cal._upperMonths = upperMonths = [
				toUpperArray( months.names ),
				toUpperArray( months.namesAbbr )
			];
			cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray( monthsGen.names ),
				toUpperArray( monthsGen.namesAbbr )
			];
		}
		value = toUpper( value );
		var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
		if ( i < 0 ) {
			i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
		}
		return i;
	};

	getParseRegExp = function( cal, format ) {
		// converts a format string into a regular expression with groups that
		// can be used to extract date fields from a date string.
		// check for a cached parse regex.
		var re = cal._parseRegExp;
		if ( !re ) {
			cal._parseRegExp = re = {};
		}
		else {
			var reFormat = re[ format ];
			if ( reFormat ) {
				return reFormat;
			}
		}

		// expand single digit formats, then escape regular expression characters.
		var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
			regexp = [ "^" ],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

		// iterate through each date token found.
		while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
			var preMatch = expFormat.slice( index, match.index );
			index = tokenRegExp.lastIndex;

			// don't replace any matches that occur inside a string literal.
			quoteCount += appendPreOrPostMatch( preMatch, regexp );
			if ( quoteCount % 2 ) {
				regexp.push( match[0] );
				continue;
			}

			// add a regex group for the token.
			var m = match[ 0 ],
				len = m.length,
				add;
			switch ( m ) {
				case "dddd": case "ddd":
				case "MMMM": case "MMM":
				case "gg": case "g":
					add = "(\\D+)";
					break;
				case "tt": case "t":
					add = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					add = "(\\d{" + len + "})";
					break;
				case "dd": case "d":
				case "MM": case "M":
				case "yy": case "y":
				case "HH": case "H":
				case "hh": case "h":
				case "mm": case "m":
				case "ss": case "s":
					add = "(\\d\\d?)";
					break;
				case "zzz":
					add = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz": case "z":
					add = "([+-]?\\d\\d?)";
					break;
				case "/":
					add = "(\\" + cal[ "/" ] + ")";
					break;
				default:
					throw "Invalid date format pattern \'" + m + "\'.";
					break;
			}
			if ( add ) {
				regexp.push( add );
			}
			groups.push( match[0] );
		}
		appendPreOrPostMatch( expFormat.slice(index), regexp );
		regexp.push( "$" );

		// allow whitespace to differ when matching formats.
		var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

		// cache the regex for this format.
		return re[ format ] = parseRegExp;
	};

	outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};

	toUpper = function( value ) {
		// "he-IL" has non-breaking space in weekday names.
		return value.split( "\u00A0" ).join( " " ).toUpperCase();
	};

	toUpperArray = function( arr ) {
		var results = [];
		for ( var i = 0, l = arr.length; i < l; i++ ) {
			results[ i ] = toUpper( arr[i] );
		}
		return results;
	};

	parseExact = function( value, format, culture ) {
		// try to parse the date string by matching against the format string
		// while using the specified culture for date field names.
		value = trim( value );
		var cal = culture.calendar,
			// convert date formats into regular expressions with groupings.
			// use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp( cal, format ),
			match = new RegExp( parseInfo.regExp ).exec( value );
		if ( match === null ) {
			return null;
		}
		// found a date format that matches the input.
		var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
		// iterate the format groups to extract and set the date fields.
		for ( var j = 0, jl = groups.length; j < jl; j++ ) {
			var matchGroup = match[ j + 1 ];
			if ( matchGroup ) {
				var current = groups[ j ],
					clength = current.length,
					matchInt = parseInt( matchGroup, 10 );
				switch ( current ) {
					case "dd": case "d":
						// Day of month.
						date = matchInt;
						// check that date is generally in valid range, also checking overflow below.
						if ( outOfRange(date, 1, 31) ) return null;
						break;
					case "MMM": case "MMMM":
						month = getMonthIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "M": case "MM":
						// Month.
						month = matchInt - 1;
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "y": case "yy":
					case "yyyy":
						year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
						if ( outOfRange(year, 0, 9999) ) return null;
						break;
					case "h": case "hh":
						// Hours (12-hour clock).
						hour = matchInt;
						if ( hour === 12 ) hour = 0;
						if ( outOfRange(hour, 0, 11) ) return null;
						break;
					case "H": case "HH":
						// Hours (24-hour clock).
						hour = matchInt;
						if ( outOfRange(hour, 0, 23) ) return null;
						break;
					case "m": case "mm":
						// Minutes.
						min = matchInt;
						if ( outOfRange(min, 0, 59) ) return null;
						break;
					case "s": case "ss":
						// Seconds.
						sec = matchInt;
						if ( outOfRange(sec, 0, 59) ) return null;
						break;
					case "tt": case "t":
						// AM/PM designator.
						// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
						// the AM tokens. If not, fail the parse for this format.
						pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
						if (
							!pmHour && (
								!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
							)
						) return null;
						break;
					case "f":
						// Deciseconds.
					case "ff":
						// Centiseconds.
					case "fff":
						// Milliseconds.
						msec = matchInt * Math.pow( 10, 3 - clength );
						if ( outOfRange(msec, 0, 999) ) return null;
						break;
					case "ddd":
						// Day of week.
					case "dddd":
						// Day of week.
						weekDay = getDayIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(weekDay, 0, 6) ) return null;
						break;
					case "zzz":
						// Time zone offset in +/- hours:min.
						var offsets = matchGroup.split( /:/ );
						if ( offsets.length !== 2 ) return null;
						hourOffset = parseInt( offsets[0], 10 );
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						var minOffset = parseInt( offsets[1], 10 );
						if ( outOfRange(minOffset, 0, 59) ) return null;
						tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
						break;
					case "z": case "zz":
						// Time zone offset in +/- hours.
						hourOffset = matchInt;
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						tzMinOffset = hourOffset * 60;
						break;
					case "g": case "gg":
						var eraName = matchGroup;
						if ( !eraName || !cal.eras ) return null;
						eraName = trim( eraName.toLowerCase() );
						for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
							if ( eraName === cal.eras[i].name.toLowerCase() ) {
								era = i;
								break;
							}
						}
						// could not find an era with that name
						if ( era === null ) return null;
						break;
				}
			}
		}
		var result = new Date(), defaultYear, convert = cal.convert;
		defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
		if ( year === null ) {
			year = defaultYear;
		}
		else if ( cal.eras ) {
			// year must be shifted to normal gregorian year
			// but not if year was not specified, its already normal gregorian
			// per the main if clause above.
			year += cal.eras[( era || 0 )].offset;
		}
		// set default day and month to 1 and January, so if unspecified, these are the defaults
		// instead of the current day/month.
		if ( month === null ) {
			month = 0;
		}
		if ( date === null ) {
			date = 1;
		}
		// now have year, month, and date, but in the culture's calendar.
		// convert to gregorian if necessary
		if ( convert ) {
			result = convert.toGregorian( year, month, date );
			// conversion failed, must be an invalid match
			if ( result === null ) return null;
		}
		else {
			// have to set year, month and date together to avoid overflow based on current date.
			result.setFullYear( year, month, date );
			// check to see if date overflowed for specified month (only checked 1-31 above).
			if ( result.getDate() !== date ) return null;
			// invalid day of week.
			if ( weekDay !== null && result.getDay() !== weekDay ) {
				return null;
			}
		}
		// if pm designator token was found make sure the hours fit the 24-hour clock.
		if ( pmHour && hour < 12 ) {
			hour += 12;
		}
		result.setHours( hour, min, sec, msec );
		if ( tzMinOffset !== null ) {
			// adjust timezone to utc before applying local offset.
			var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
			// Safari limits hours and minutes to the range of -127 to 127.	 We need to use setHours
			// to ensure both these fields will not exceed this range.	adjustedMin will range
			// somewhere between -1440 and 1500, so we only need to split this into hours.
			result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
		}
		return result;
	};
}());

parseNegativePattern = function( value, nf, negativePattern ) {
	var neg = nf[ "-" ],
		pos = nf[ "+" ],
		ret;
	switch ( negativePattern ) {
		case "n -":
			neg = " " + neg;
			pos = " " + pos;
			// fall through
		case "n-":
			if ( endsWith(value, neg) ) {
				ret = [ "-", value.substr(0, value.length - neg.length) ];
			}
			else if ( endsWith(value, pos) ) {
				ret = [ "+", value.substr(0, value.length - pos.length) ];
			}
			break;
		case "- n":
			neg += " ";
			pos += " ";
			// fall through
		case "-n":
			if ( startsWith(value, neg) ) {
				ret = [ "-", value.substr(neg.length) ];
			}
			else if ( startsWith(value, pos) ) {
				ret = [ "+", value.substr(pos.length) ];
			}
			break;
		case "(n)":
			if ( startsWith(value, "(") && endsWith(value, ")") ) {
				ret = [ "-", value.substr(1, value.length - 2) ];
			}
			break;
	}
	return ret || [ "", value ];
};

//
// public instance functions
//

Globalize.prototype.findClosestCulture = function( cultureSelector ) {
	return Globalize.findClosestCulture.call( this, cultureSelector );
};

Globalize.prototype.format = function( value, format, cultureSelector ) {
	return Globalize.format.call( this, value, format, cultureSelector );
};

Globalize.prototype.localize = function( key, cultureSelector ) {
	return Globalize.localize.call( this, key, cultureSelector );
};

Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
	return Globalize.parseInt.call( this, value, radix, cultureSelector );
};

Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
	return Globalize.parseFloat.call( this, value, radix, cultureSelector );
};

Globalize.prototype.culture = function( cultureSelector ) {
	return Globalize.culture.call( this, cultureSelector );
};

//
// public singleton functions
//

Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

	var base = {},
		isNew = false;

	if ( typeof cultureName !== "string" ) {
		// cultureName argument is optional string. If not specified, assume info is first
		// and only argument. Specified info deep-extends current culture.
		info = cultureName;
		cultureName = this.culture().name;
		base = this.cultures[ cultureName ];
	} else if ( typeof baseCultureName !== "string" ) {
		// baseCultureName argument is optional string. If not specified, assume info is second
		// argument. Specified info deep-extends specified culture.
		// If specified culture does not exist, create by deep-extending default
		info = baseCultureName;
		isNew = ( this.cultures[ cultureName ] == null );
		base = this.cultures[ cultureName ] || this.cultures[ "default" ];
	} else {
		// cultureName and baseCultureName specified. Assume a new culture is being created
		// by deep-extending an specified base culture
		isNew = true;
		base = this.cultures[ baseCultureName ];
	}

	this.cultures[ cultureName ] = extend(true, {},
		base,
		info
	);
	// Make the standard calendar the current culture if it's a new culture
	if ( isNew ) {
		this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
	}
};

Globalize.findClosestCulture = function( name ) {
	var match;
	if ( !name ) {
		return this.findClosestCulture( this.cultureSelector ) || this.cultures[ "default" ];
	}
	if ( typeof name === "string" ) {
		name = name.split( "," );
	}
	if ( isArray(name) ) {
		var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
		for ( i = 0; i < l; i++ ) {
			name = trim( list[i] );
			var pri, parts = name.split( ";" );
			lang = trim( parts[0] );
			if ( parts.length === 1 ) {
				pri = 1;
			}
			else {
				name = trim( parts[1] );
				if ( name.indexOf("q=") === 0 ) {
					name = name.substr( 2 );
					pri = parseFloat( name );
					pri = isNaN( pri ) ? 0 : pri;
				}
				else {
					pri = 1;
				}
			}
			prioritized.push({ lang: lang, pri: pri });
		}
		prioritized.sort(function( a, b ) {
			return a.pri < b.pri ? 1 : -1;
		});

		// exact match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			match = cultures[ lang ];
			if ( match ) {
				return match;
			}
		}

		// neutral language match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			do {
				var index = lang.lastIndexOf( "-" );
				if ( index === -1 ) {
					break;
				}
				// strip off the last part. e.g. en-US => en
				lang = lang.substr( 0, index );
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}
			while ( 1 );
		}

		// last resort: match first culture using that language
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			for ( var cultureKey in cultures ) {
				var culture = cultures[ cultureKey ];
				if ( culture.language == lang ) {
					return culture;
				}
			}
		}
	}
	else if ( typeof name === "object" ) {
		return name;
	}
	return match || null;
};

Globalize.format = function( value, format, cultureSelector ) {
	culture = this.findClosestCulture( cultureSelector );
	if ( value instanceof Date ) {
		value = formatDate( value, format, culture );
	}
	else if ( typeof value === "number" ) {
		value = formatNumber( value, format, culture );
	}
	return value;
};

Globalize.localize = function( key, cultureSelector ) {
	return this.findClosestCulture( cultureSelector ).messages[ key ] ||
		this.cultures[ "default" ].messages[ key ];
};

Globalize.parseDate = function( value, formats, culture ) {
	culture = this.findClosestCulture( culture );

	var date, prop, patterns;
	if ( formats ) {
		if ( typeof formats === "string" ) {
			formats = [ formats ];
		}
		if ( formats.length ) {
			for ( var i = 0, l = formats.length; i < l; i++ ) {
				var format = formats[ i ];
				if ( format ) {
					date = parseExact( value, format, culture );
					if ( date ) {
						break;
					}
				}
			}
		}
	} else {
		patterns = culture.calendar.patterns;
		for ( prop in patterns ) {
			date = parseExact( value, patterns[prop], culture );
			if ( date ) {
				break;
			}
		}
	}

	return date || null;
};

Globalize.parseInt = function( value, radix, cultureSelector ) {
	return truncate( Globalize.parseFloat(value, radix, cultureSelector) );
};

Globalize.parseFloat = function( value, radix, cultureSelector ) {
	// radix argument is optional
	if ( typeof radix !== "number" ) {
		cultureSelector = radix;
		radix = 10;
	}

	var culture = this.findClosestCulture( cultureSelector );
	var ret = NaN,
		nf = culture.numberFormat;

	if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
		// remove currency symbol
		value = value.replace( culture.numberFormat.currency.symbol, "" );
		// replace decimal seperator
		value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
	}

	// trim leading and trailing whitespace
	value = trim( value );

	// allow infinity or hexidecimal
	if ( regexInfinity.test(value) ) {
		ret = parseFloat( value );
	}
	else if ( !radix && regexHex.test(value) ) {
		ret = parseInt( value, 16 );
	}
	else {

		// determine sign and number
		var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
			sign = signInfo[ 0 ],
			num = signInfo[ 1 ];

		// #44 - try parsing as "(n)"
		if ( sign === "" && nf.pattern[0] !== "(n)" ) {
			signInfo = parseNegativePattern( value, nf, "(n)" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		// try parsing as "-n"
		if ( sign === "" && nf.pattern[0] !== "-n" ) {
			signInfo = parseNegativePattern( value, nf, "-n" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		sign = sign || "+";

		// determine exponent and number
		var exponent,
			intAndFraction,
			exponentPos = num.indexOf( "e" );
		if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
		if ( exponentPos < 0 ) {
			intAndFraction = num;
			exponent = null;
		}
		else {
			intAndFraction = num.substr( 0, exponentPos );
			exponent = num.substr( exponentPos + 1 );
		}
		// determine decimal position
		var integer,
			fraction,
			decSep = nf[ "." ],
			decimalPos = intAndFraction.indexOf( decSep );
		if ( decimalPos < 0 ) {
			integer = intAndFraction;
			fraction = null;
		}
		else {
			integer = intAndFraction.substr( 0, decimalPos );
			fraction = intAndFraction.substr( decimalPos + decSep.length );
		}
		// handle groups (e.g. 1,000,000)
		var groupSep = nf[ "," ];
		integer = integer.split( groupSep ).join( "" );
		var altGroupSep = groupSep.replace( /\u00A0/g, " " );
		if ( groupSep !== altGroupSep ) {
			integer = integer.split( altGroupSep ).join( "" );
		}
		// build a natively parsable number string
		var p = sign + integer;
		if ( fraction !== null ) {
			p += "." + fraction;
		}
		if ( exponent !== null ) {
			// exponent itself may have a number patternd
			var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
			p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
		}
		if ( regexParseFloat.test(p) ) {
			ret = parseFloat( p );
		}
	}
	return ret;
};

Globalize.culture = function( cultureSelector ) {
	// setter
	if ( typeof cultureSelector !== "undefined" ) {
		this.cultureSelector = cultureSelector;
	}
	// getter
	return this.findClosestCulture( cultureSelector ) || this.culture[ "default" ];
};

}( this ));
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.5.11.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */

/* Display a countdown timer.
   Attach it with options like:
   $('div selector').countdown(
       {until: new Date(2009, 1 - 1, 1, 0, 0, 0), onExpiry: happyNewYear}); */


(function($) { // Hide scope, no $ conflict

/* Countdown manager. */
function Countdown() {
  this.regional = []; // Available regional settings, indexed by language code
  this.regional[''] = { // Default regional settings
    // The display texts for the counters
    labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
    // The display texts for the counters if only one
    labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
    compactLabels: ['y', 'm', 'w', 'd'], // The compact texts for the counters
    whichLabels: null, // Function to determine which labels to use
    timeSeparator: ':', // Separator for time periods
    isRTL: false // True for right-to-left languages, false for left-to-right
  };
  this._defaults = {
    until: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
      // or numeric for seconds offset, or string for unit offset(s):
      // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
    since: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count up from
      // or numeric for seconds offset, or string for unit offset(s):
      // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
    timezone: null, // The timezone (hours or minutes from GMT) for the target times,
      // or null for client local
    serverSync: null, // A function to retrieve the current server time for synchronisation
    format: 'dHMS', // Format for display - upper case for always, lower case only if non-zero,
      // 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
    layout: '', // Build your own layout for the countdown
    compact: false, // True to display in a compact format, false for an expanded one
    significant: 0, // The number of periods with values to show, zero for all
    description: '', // The description displayed for the countdown
    expiryUrl: '', // A URL to load upon expiry, replacing the current page
    expiryText: '', // Text to display upon expiry, replacing the countdown
    alwaysExpire: false, // True to trigger onExpiry even if never counted down
    onExpiry: null, // Callback when the countdown expires -
      // receives no parameters and 'this' is the containing division
    onTick: null, // Callback when the countdown is updated -
      // receives int[7] being the breakdown by period (based on format)
      // and 'this' is the containing division
    tickInterval: 1 // Interval (seconds) between onTick callbacks
  };
  $.extend(this._defaults, this.regional['']);
  this._serverSyncs = [];
  // Shared timer for all countdowns
  function timerCallBack(timestamp) {
    var drawStart = (timestamp || new Date().getTime());
    if (drawStart - animationStartTime >= 1000) {
      $.countdown._updateTargets();
      animationStartTime = drawStart;
    }
    requestAnimationFrame(timerCallBack);
  }
  var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame || null; // this is when we expect a fall-back to setInterval as it's much more fluid
  var animationStartTime = 0;
  if (!requestAnimationFrame) {
    setInterval(function() { $.countdown._updateTargets(); }, 980); // Fall back to good old setInterval
  }
  else {
    animationStartTime = window.mozAnimationStartTime || new Date().getTime();
    requestAnimationFrame(timerCallBack);
  }
}

var PROP_NAME = 'countdown';

var Y = 0; // Years
var O = 1; // Months
var W = 2; // Weeks
var D = 3; // Days
var H = 4; // Hours
var M = 5; // Minutes
var S = 6; // Seconds

$.extend(Countdown.prototype, {
  /* Class name added to elements to indicate already configured with countdown. */
  markerClassName: 'hasCountdown',

  /* List of currently active countdown targets. */
  _timerTargets: [],
  
  /* Override the default settings for all instances of the countdown widget.
     @param  options  (object) the new settings to use as defaults */
  setDefaults: function(options) {
    this._resetExtraLabels(this._defaults, options);
    extendRemove(this._defaults, options || {});
  },

  /* Convert a date/time to UTC.
     @param  tz     (number) the hour or minute offset from GMT, e.g. +9, -360
     @param  year   (Date) the date/time in that timezone or
                    (number) the year in that timezone
     @param  month  (number, optional) the month (0 - 11) (omit if year is a Date)
     @param  day    (number, optional) the day (omit if year is a Date)
     @param  hours  (number, optional) the hour (omit if year is a Date)
     @param  mins   (number, optional) the minute (omit if year is a Date)
     @param  secs   (number, optional) the second (omit if year is a Date)
     @param  ms     (number, optional) the millisecond (omit if year is a Date)
     @return  (Date) the equivalent UTC date/time */
  UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {
    if (typeof year == 'object' && year.constructor == Date) {
      ms = year.getMilliseconds();
      secs = year.getSeconds();
      mins = year.getMinutes();
      hours = year.getHours();
      day = year.getDate();
      month = year.getMonth();
      year = year.getFullYear();
    }
    var d = new Date();
    d.setUTCFullYear(year);
    d.setUTCDate(1);
    d.setUTCMonth(month || 0);
    d.setUTCDate(day || 1);
    d.setUTCHours(hours || 0);
    d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
    d.setUTCSeconds(secs || 0);
    d.setUTCMilliseconds(ms || 0);
    return d;
  },

  /* Convert a set of periods into seconds.
     Averaged for months and years.
     @param  periods  (number[7]) the periods per year/month/week/day/hour/minute/second
     @return  (number) the corresponding number of seconds */
  periodsToSeconds: function(periods) {
    return periods[0] * 31557600 + periods[1] * 2629800 + periods[2] * 604800 +
      periods[3] * 86400 + periods[4] * 3600 + periods[5] * 60 + periods[6];
  },

  /* Retrieve one or more settings values.
     @param  name  (string, optional) the name of the setting to retrieve
                   or 'all' for all instance settings or omit for all default settings
     @return  (any) the requested setting(s) */
  _settingsCountdown: function(target, name) {
    if (!name) {
      return $.countdown._defaults;
    }
    var inst = $.data(target, PROP_NAME);
    return (name == 'all' ? inst.options : inst.options[name]);
  },

  /* Attach the countdown widget to a div.
     @param  target   (element) the containing division
     @param  options  (object) the initial settings for the countdown */
  _attachCountdown: function(target, options) {
    var $target = $(target);
    if ($target.hasClass(this.markerClassName)) {
      return;
    }
    $target.addClass(this.markerClassName);
    var inst = {options: $.extend({}, options),
      _periods: [0, 0, 0, 0, 0, 0, 0]};
    $.data(target, PROP_NAME, inst);
    this._changeCountdown(target);
  },

  /* Add a target to the list of active ones.
     @param  target  (element) the countdown target */
  _addTarget: function(target) {
    if (!this._hasTarget(target)) {
      this._timerTargets.push(target);
    }
  },

  /* See if a target is in the list of active ones.
     @param  target  (element) the countdown target
     @return  (boolean) true if present, false if not */
  _hasTarget: function(target) {
    return ($.inArray(target, this._timerTargets) > -1);
  },

  /* Remove a target from the list of active ones.
     @param  target  (element) the countdown target */
  _removeTarget: function(target) {
    this._timerTargets = $.map(this._timerTargets,
      function(value) { return (value == target ? null : value); }); // delete entry
  },

  /* Update each active timer target. */
  _updateTargets: function() {
    for (var i = this._timerTargets.length - 1; i >= 0; i--) {
      this._updateCountdown(this._timerTargets[i]);
    }
  },

  /* Redisplay the countdown with an updated display.
     @param  target  (jQuery) the containing division
     @param  inst    (object) the current settings for this instance */
  _updateCountdown: function(target, inst) {
    var $target = $(target);
    inst = inst || $.data(target, PROP_NAME);
    if (!inst) {
      return;
    }
    $target.html(this._generateHTML(inst));
    $target[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('countdown_rtl');
    var onTick = this._get(inst, 'onTick');
    if (onTick) {
      var periods = inst._hold != 'lap' ? inst._periods :
        this._calculatePeriods(inst, inst._show, this._get(inst, 'significant'), new Date());
      var tickInterval = this._get(inst, 'tickInterval');
      if (tickInterval == 1 || this.periodsToSeconds(periods) % tickInterval == 0) {
        onTick.apply(target, [periods]);
      }
    }
    var expired = inst._hold != 'pause' &&
      (inst._since ? inst._now.getTime() < inst._since.getTime() :
      inst._now.getTime() >= inst._until.getTime());
    if (expired && !inst._expiring) {
      inst._expiring = true;
      if (this._hasTarget(target) || this._get(inst, 'alwaysExpire')) {
        this._removeTarget(target);
        var onExpiry = this._get(inst, 'onExpiry');
        if (onExpiry) {
          onExpiry.apply(target, []);
        }
        var expiryText = this._get(inst, 'expiryText');
        if (expiryText) {
          var layout = this._get(inst, 'layout');
          inst.options.layout = expiryText;
          this._updateCountdown(target, inst);
          inst.options.layout = layout;
        }
        var expiryUrl = this._get(inst, 'expiryUrl');
        if (expiryUrl) {
          window.location = expiryUrl;
        }
      }
      inst._expiring = false;
    }
    else if (inst._hold == 'pause') {
      this._removeTarget(target);
    }
    $.data(target, PROP_NAME, inst);
  },

  /* Reconfigure the settings for a countdown div.
     @param  target   (element) the containing division
     @param  options  (object) the new settings for the countdown or
                      (string) an individual property name
     @param  value    (any) the individual property value
                      (omit if options is an object) */
  _changeCountdown: function(target, options, value) {
    options = options || {};
    if (typeof options == 'string') {
      var name = options;
      options = {};
      options[name] = value;
    }
    var inst = $.data(target, PROP_NAME);
    if (inst) {
      this._resetExtraLabels(inst.options, options);
      extendRemove(inst.options, options);
      this._adjustSettings(target, inst);
      $.data(target, PROP_NAME, inst);
      var now = new Date();
      if ((inst._since && inst._since < now) ||
          (inst._until && inst._until > now)) {
        this._addTarget(target);
      }
      this._updateCountdown(target, inst);
    }
  },

  /* Reset any extra labelsn and compactLabelsn entries if changing labels.
     @param  base     (object) the options to be updated
     @param  options  (object) the new option values */
  _resetExtraLabels: function(base, options) {
    var changingLabels = false;
    for (var n in options) {
      if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
        changingLabels = true;
        break;
      }
    }
    if (changingLabels) {
      for (var n in base) { // Remove custom numbered labels
        if (n.match(/[Ll]abels[0-9]/)) {
          base[n] = null;
        }
      }
    }
  },
  
  /* Calculate interal settings for an instance.
     @param  target  (element) the containing division
     @param  inst    (object) the current settings for this instance */
  _adjustSettings: function(target, inst) {
    var now;
    var serverSync = this._get(inst, 'serverSync');
    var serverOffset = 0;
    var serverEntry = null;
    for (var i = 0; i < this._serverSyncs.length; i++) {
      if (this._serverSyncs[i][0] == serverSync) {
        serverEntry = this._serverSyncs[i][1];
        break;
      }
    }
    if (serverEntry != null) {
      serverOffset = (serverSync ? serverEntry : 0);
      now = new Date();
    }
    else {
      var serverResult = (serverSync ? serverSync.apply(target, []) : null);
      now = new Date();
      serverOffset = (serverResult ? now.getTime() - serverResult.getTime() : 0);
      this._serverSyncs.push([serverSync, serverOffset]);
    }
    var timezone = this._get(inst, 'timezone');
    timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);
    inst._since = this._get(inst, 'since');
    if (inst._since != null) {
      inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
      if (inst._since && serverOffset) {
        inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);
      }
    }
    inst._until = this.UTCDate(timezone, this._determineTime(this._get(inst, 'until'), now));
    if (serverOffset) {
      inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);
    }
    inst._show = this._determineShow(inst);
  },

  /* Remove the countdown widget from a div.
     @param  target  (element) the containing division */
  _destroyCountdown: function(target) {
    var $target = $(target);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    this._removeTarget(target);
    $target.removeClass(this.markerClassName).empty();
    $.removeData(target, PROP_NAME);
  },

  /* Pause a countdown widget at the current time.
     Stop it running but remember and display the current time.
     @param  target  (element) the containing division */
  _pauseCountdown: function(target) {
    this._hold(target, 'pause');
  },

  /* Pause a countdown widget at the current time.
     Stop the display but keep the countdown running.
     @param  target  (element) the containing division */
  _lapCountdown: function(target) {
    this._hold(target, 'lap');
  },

  /* Resume a paused countdown widget.
     @param  target  (element) the containing division */
  _resumeCountdown: function(target) {
    this._hold(target, null);
  },

  /* Pause or resume a countdown widget.
     @param  target  (element) the containing division
     @param  hold    (string) the new hold setting */
  _hold: function(target, hold) {
    var inst = $.data(target, PROP_NAME);
    if (inst) {
      if (inst._hold == 'pause' && !hold) {
        inst._periods = inst._savePeriods;
        var sign = (inst._since ? '-' : '+');
        inst[inst._since ? '_since' : '_until'] =
          this._determineTime(sign + inst._periods[0] + 'y' +
            sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' +
            sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' + 
            sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
        this._addTarget(target);
      }
      inst._hold = hold;
      inst._savePeriods = (hold == 'pause' ? inst._periods : null);
      $.data(target, PROP_NAME, inst);
      this._updateCountdown(target, inst);
    }
  },

  /* Return the current time periods.
     @param  target  (element) the containing division
     @return  (number[7]) the current periods for the countdown */
  _getTimesCountdown: function(target) {
    var inst = $.data(target, PROP_NAME);
    return (!inst ? null : (!inst._hold ? inst._periods :
      this._calculatePeriods(inst, inst._show, this._get(inst, 'significant'), new Date())));
  },

  /* Get a setting value, defaulting if necessary.
     @param  inst  (object) the current settings for this instance
     @param  name  (string) the name of the required setting
     @return  (any) the setting's value or a default if not overridden */
  _get: function(inst, name) {
    return (inst.options[name] != null ?
      inst.options[name] : $.countdown._defaults[name]);
  },

  /* A time may be specified as an exact value or a relative one.
     @param  setting      (string or number or Date) - the date/time value
                          as a relative or absolute value
     @param  defaultTime  (Date) the date/time to use if no other is supplied
     @return  (Date) the corresponding date/time */
  _determineTime: function(setting, defaultTime) {
    var offsetNumeric = function(offset) { // e.g. +300, -2
      var time = new Date();
      time.setTime(time.getTime() + offset * 1000);
      return time;
    };
    var offsetString = function(offset) { // e.g. '+2d', '-4w', '+3h +30m'
      offset = offset.toLowerCase();
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
      var matches = pattern.exec(offset);
      while (matches) {
        switch (matches[2] || 's') {
          case 's': second += parseInt(matches[1], 10); break;
          case 'm': minute += parseInt(matches[1], 10); break;
          case 'h': hour += parseInt(matches[1], 10); break;
          case 'd': day += parseInt(matches[1], 10); break;
          case 'w': day += parseInt(matches[1], 10) * 7; break;
          case 'o':
            month += parseInt(matches[1], 10); 
            day = Math.min(day, $.countdown._getDaysInMonth(year, month));
            break;
          case 'y':
            year += parseInt(matches[1], 10);
            day = Math.min(day, $.countdown._getDaysInMonth(year, month));
            break;
        }
        matches = pattern.exec(offset);
      }
      return new Date(year, month, day, hour, minute, second, 0);
    };
    var time = (setting == null ? defaultTime :
      (typeof setting == 'string' ? offsetString(setting) :
      (typeof setting == 'number' ? offsetNumeric(setting) : setting)));
    if (time) time.setMilliseconds(0);
    return time;
  },

  /* Determine the number of days in a month.
     @param  year   (number) the year
     @param  month  (number) the month
     @return  (number) the days in that month */
  _getDaysInMonth: function(year, month) {
    return 32 - new Date(year, month, 32).getDate();
  },

  /* Determine which set of labels should be used for an amount.
     @param  num  (number) the amount to be displayed
     @return  (number) the set of labels to be used for this amount */
  _normalLabels: function(num) {
    return num;
  },

  /* Generate the HTML to display the countdown widget.
     @param  inst  (object) the current settings for this instance
     @return  (string) the new HTML for the countdown display */
  _generateHTML: function(inst) {
    // Determine what to show
    var significant = this._get(inst, 'significant');
    inst._periods = (inst._hold ? inst._periods :
      this._calculatePeriods(inst, inst._show, significant, new Date()));
    // Show all 'asNeeded' after first non-zero value
    var shownNonZero = false;
    var showCount = 0;
    var sigCount = significant;
    var show = $.extend({}, inst._show);
    for (var period = Y; period <= S; period++) {
      shownNonZero |= (inst._show[period] == '?' && inst._periods[period] > 0);
      show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);
      showCount += (show[period] ? 1 : 0);
      sigCount -= (inst._periods[period] > 0 ? 1 : 0);
    }
    var showSignificant = [false, false, false, false, false, false, false];
    for (var period = S; period >= Y; period--) { // Determine significant periods
      if (inst._show[period]) {
        if (inst._periods[period]) {
          showSignificant[period] = true;
        }
        else {
          showSignificant[period] = sigCount > 0;
          sigCount--;
        }
      }
    }
    var compact = this._get(inst, 'compact');
    var layout = this._get(inst, 'layout');
    var labels = (compact ? this._get(inst, 'compactLabels') : this._get(inst, 'labels'));
    var whichLabels = this._get(inst, 'whichLabels') || this._normalLabels;
    var timeSeparator = this._get(inst, 'timeSeparator');
    var description = this._get(inst, 'description') || '';
    var showCompact = function(period) {
      var labelsNum = $.countdown._get(inst,
        'compactLabels' + whichLabels(inst._periods[period]));
      return (show[period] ? inst._periods[period] +
        (labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');
    };
    var showFull = function(period) {
      var labelsNum = $.countdown._get(inst, 'labels' + whichLabels(inst._periods[period]));
      return ((!significant && show[period]) || (significant && showSignificant[period]) ?
        '<span class="countdown_section"><span class="countdown_amount">' +
        inst._periods[period] + '</span><br/>' +
        (labelsNum ? labelsNum[period] : labels[period]) + '</span>' : '');
    };
    return (layout ? this._buildLayout(inst, show, layout, compact, significant, showSignificant) :
      ((compact ? // Compact version
      '<span class="countdown_row countdown_amount' +
      (inst._hold ? ' countdown_holding' : '') + '">' + 
      showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + 
      (show[H] ? this._minDigits(inst._periods[H], 2) : '') +
      (show[M] ? (show[H] ? timeSeparator : '') +
      this._minDigits(inst._periods[M], 2) : '') +
      (show[S] ? (show[H] || show[M] ? timeSeparator : '') +
      this._minDigits(inst._periods[S], 2) : '') :
      // Full version
      '<span class="countdown_row countdown_show' + (significant || showCount) +
      (inst._hold ? ' countdown_holding' : '') + '">' +
      showFull(Y) + showFull(O) + showFull(W) + showFull(D) +
      showFull(H) + showFull(M) + showFull(S)) + '</span>' +
      (description ? '<span class="countdown_row countdown_descr">' + description + '</span>' : '')));
  },

  /* Construct a custom layout.
     @param  inst             (object) the current settings for this instance
     @param  show             (string[7]) flags indicating which periods are requested
     @param  layout           (string) the customised layout
     @param  compact          (boolean) true if using compact labels
     @param  significant      (number) the number of periods with values to show, zero for all
     @param  showSignificant  (boolean[7]) other periods to show for significance
     @return  (string) the custom HTML */
  _buildLayout: function(inst, show, layout, compact, significant, showSignificant) {
    var labels = this._get(inst, (compact ? 'compactLabels' : 'labels'));
    var whichLabels = this._get(inst, 'whichLabels') || this._normalLabels;
    var labelFor = function(index) {
      return ($.countdown._get(inst,
        (compact ? 'compactLabels' : 'labels') + whichLabels(inst._periods[index])) ||
        labels)[index];
    };
    var digit = function(value, position) {
      return Math.floor(value / position) % 10;
    };
    var subs = {desc: this._get(inst, 'description'), sep: this._get(inst, 'timeSeparator'),
      yl: labelFor(Y), yn: inst._periods[Y], ynn: this._minDigits(inst._periods[Y], 2),
      ynnn: this._minDigits(inst._periods[Y], 3), y1: digit(inst._periods[Y], 1),
      y10: digit(inst._periods[Y], 10), y100: digit(inst._periods[Y], 100),
      y1000: digit(inst._periods[Y], 1000),
      ol: labelFor(O), on: inst._periods[O], onn: this._minDigits(inst._periods[O], 2),
      onnn: this._minDigits(inst._periods[O], 3), o1: digit(inst._periods[O], 1),
      o10: digit(inst._periods[O], 10), o100: digit(inst._periods[O], 100),
      o1000: digit(inst._periods[O], 1000),
      wl: labelFor(W), wn: inst._periods[W], wnn: this._minDigits(inst._periods[W], 2),
      wnnn: this._minDigits(inst._periods[W], 3), w1: digit(inst._periods[W], 1),
      w10: digit(inst._periods[W], 10), w100: digit(inst._periods[W], 100),
      w1000: digit(inst._periods[W], 1000),
      dl: labelFor(D), dn: inst._periods[D], dnn: this._minDigits(inst._periods[D], 2),
      dnnn: this._minDigits(inst._periods[D], 3), d1: digit(inst._periods[D], 1),
      d10: digit(inst._periods[D], 10), d100: digit(inst._periods[D], 100),
      d1000: digit(inst._periods[D], 1000),
      hl: labelFor(H), hn: inst._periods[H], hnn: this._minDigits(inst._periods[H], 2),
      hnnn: this._minDigits(inst._periods[H], 3), h1: digit(inst._periods[H], 1),
      h10: digit(inst._periods[H], 10), h100: digit(inst._periods[H], 100),
      h1000: digit(inst._periods[H], 1000),
      ml: labelFor(M), mn: inst._periods[M], mnn: this._minDigits(inst._periods[M], 2),
      mnnn: this._minDigits(inst._periods[M], 3), m1: digit(inst._periods[M], 1),
      m10: digit(inst._periods[M], 10), m100: digit(inst._periods[M], 100),
      m1000: digit(inst._periods[M], 1000),
      sl: labelFor(S), sn: inst._periods[S], snn: this._minDigits(inst._periods[S], 2),
      snnn: this._minDigits(inst._periods[S], 3), s1: digit(inst._periods[S], 1),
      s10: digit(inst._periods[S], 10), s100: digit(inst._periods[S], 100),
      s1000: digit(inst._periods[S], 1000)};
    var html = layout;
    // Replace period containers: {p<}...{p>}
    for (var i = Y; i <= S; i++) {
      var period = 'yowdhms'.charAt(i);
      var re = new RegExp('\\{' + period + '<\\}(.*)\\{' + period + '>\\}', 'g');
      html = html.replace(re, ((!significant && show[i]) ||
        (significant && showSignificant[i]) ? '$1' : ''));
    }
    // Replace period values: {pn}
    $.each(subs, function(n, v) {
      var re = new RegExp('\\{' + n + '\\}', 'g');
      html = html.replace(re, v);
    });
    return html;
  },

  /* Ensure a numeric value has at least n digits for display.
     @param  value  (number) the value to display
     @param  len    (number) the minimum length
     @return  (string) the display text */
  _minDigits: function(value, len) {
    value = '' + value;
    if (value.length >= len) {
      return value;
    }
    value = '0000000000' + value;
    return value.substr(value.length - len);
  },

  /* Translate the format into flags for each period.
     @param  inst  (object) the current settings for this instance
     @return  (string[7]) flags indicating which periods are requested (?) or
              required (!) by year, month, week, day, hour, minute, second */
  _determineShow: function(inst) {
    var format = this._get(inst, 'format');
    var show = [];
    show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));
    show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));
    show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));
    show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));
    show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));
    show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));
    show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));
    return show;
  },
  
  /* Calculate the requested periods between now and the target time.
     @param  inst         (object) the current settings for this instance
     @param  show         (string[7]) flags indicating which periods are requested/required
     @param  significant  (number) the number of periods with values to show, zero for all
     @param  now          (Date) the current date and time
     @return  (number[7]) the current time periods (always positive)
              by year, month, week, day, hour, minute, second */
  _calculatePeriods: function(inst, show, significant, now) {
    // Find endpoints
    inst._now = now;
    inst._now.setMilliseconds(0);
    var until = new Date(inst._now.getTime());
    if (inst._since) {
      if (now.getTime() < inst._since.getTime()) {
        inst._now = now = until;
      }
      else {
        now = inst._since;
      }
    }
    else {
      until.setTime(inst._until.getTime());
      if (now.getTime() > inst._until.getTime()) {
        inst._now = now = until;
      }
    }
    // Calculate differences by period
    var periods = [0, 0, 0, 0, 0, 0, 0];
    if (show[Y] || show[O]) {
      // Treat end of months as the same
      var lastNow = $.countdown._getDaysInMonth(now.getFullYear(), now.getMonth());
      var lastUntil = $.countdown._getDaysInMonth(until.getFullYear(), until.getMonth());
      var sameDay = (until.getDate() == now.getDate() ||
        (until.getDate() >= Math.min(lastNow, lastUntil) &&
        now.getDate() >= Math.min(lastNow, lastUntil)));
      var getSecs = function(date) {
        return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
      };
      var months = Math.max(0,
        (until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() +
        ((until.getDate() < now.getDate() && !sameDay) ||
        (sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));
      periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);
      periods[O] = (show[O] ? months - periods[Y] * 12 : 0);
      // Adjust for months difference and end of month if necessary
      now = new Date(now.getTime());
      var wasLastDay = (now.getDate() == lastNow);
      var lastDay = $.countdown._getDaysInMonth(now.getFullYear() + periods[Y],
        now.getMonth() + periods[O]);
      if (now.getDate() > lastDay) {
        now.setDate(lastDay);
      }
      now.setFullYear(now.getFullYear() + periods[Y]);
      now.setMonth(now.getMonth() + periods[O]);
      if (wasLastDay) {
        now.setDate(lastDay);
      }
    }
    var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
    var extractPeriod = function(period, numSecs) {
      periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);
      diff -= periods[period] * numSecs;
    };
    extractPeriod(W, 604800);
    extractPeriod(D, 86400);
    extractPeriod(H, 3600);
    extractPeriod(M, 60);
    extractPeriod(S, 1);
    if (diff > 0 && !inst._since) { // Round up if left overs
      var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
      var lastShown = S;
      var max = 1;
      for (var period = S; period >= Y; period--) {
        if (show[period]) {
          if (periods[lastShown] >= max) {
            periods[lastShown] = 0;
            diff = 1;
          }
          if (diff > 0) {
            periods[period]++;
            diff = 0;
            lastShown = period;
            max = 1;
          }
        }
        max *= multiplier[period];
      }
    }
    if (significant) { // Zero out insignificant periods
      for (var period = Y; period <= S; period++) {
        if (significant && periods[period]) {
          significant--;
        }
        else if (!significant) {
          periods[period] = 0;
        }
      }
    }
    return periods;
  }
});

/* jQuery extend now ignores nulls!
   @param  target  (object) the object to update
   @param  props   (object) the new settings
   @return  (object) the updated object */
function extendRemove(target, props) {
  $.extend(target, props);
  for (var name in props) {
    if (props[name] == null) {
      target[name] = null;
    }
  }
  return target;
}

/* Process the countdown functionality for a jQuery selection.
   @param  command  (string) the command to run (optional, default 'attach')
   @param  options  (object) the new settings to use for these countdown instances
   @return  (jQuery) for chaining further calls */
$.fn.countdown = function(options) {
  var otherArgs = Array.prototype.slice.call(arguments, 1);
  if (options == 'getTimes' || options == 'settings') {
    return $.countdown['_' + options + 'Countdown'].
      apply($.countdown, [this[0]].concat(otherArgs));
  }
  return this.each(function() {
    if (typeof options == 'string') {
      $.countdown['_' + options + 'Countdown'].apply($.countdown, [this].concat(otherArgs));
    }
    else {
      $.countdown._attachCountdown(this, options);
    }
  });
};

/* Initialise the countdown functionality. */
$.countdown = new Countdown(); // singleton instance

})(jQuery);
/* Moment.js | version : 1.2.0 | author : Tim Wood | license : MIT */

(function(a,b){function k(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function l(b,c,d,e){var f=typeof c=="string",g=f?{}:c,h,i,j,k;return f&&e&&(g[c]=e),h=(g.ms||g.milliseconds||0)+(g.s||g.seconds||0)*1e3+(g.m||g.minutes||0)*6e4+(g.h||g.hours||0)*36e5,i=(g.d||g.days||0)+(g.w||g.weeks||0)*7,j=(g.M||g.months||0)+(g.y||g.years||0)*12,h&&b.setTime(+b+h*d),i&&b.setDate(b.getDate()+i*d),j&&(k=b.getDate(),b.setDate(1),b.setMonth(b.getMonth()+j*d),b.setDate(Math.min((new a(b.getFullYear(),b.getMonth()+1,0)).getDate(),k))),b}function m(a){return Object.prototype.toString.call(a)==="[object Array]"}function n(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)}function o(b,d){function t(d){var n,u;switch(d){case"M":return e+1;case"Mo":return e+1+r(e+1);case"MM":return k(e+1,2);case"MMM":return c.monthsShort[e];case"MMMM":return c.months[e];case"D":return f;case"Do":return f+r(f);case"DD":return k(f,2);case"DDD":return n=new a(g,e,f),u=new a(g,0,1),~~((n-u)/864e5+1.5);case"DDDo":return n=t("DDD"),n+r(n);case"DDDD":return k(t("DDD"),3);case"d":return h;case"do":return h+r(h);case"ddd":return c.weekdaysShort[h];case"dddd":return c.weekdays[h];case"w":return n=new a(g,e,f-h+5),u=new a(n.getFullYear(),0,4),~~((n-u)/864e5/7+1.5);case"wo":return n=t("w"),n+r(n);case"ww":return k(t("w"),2);case"YY":return k(g%100,2);case"YYYY":return g;case"a":return i>11?s.pm:s.am;case"A":return i>11?s.PM:s.AM;case"H":return i;case"HH":return k(i,2);case"h":return i%12||12;case"hh":return k(i%12||12,2);case"m":return j;case"mm":return k(j,2);case"s":return l;case"ss":return k(l,2);case"zz":case"z":return(b.toString().match(q)||[""])[0].replace(p,"");case"Z":return(m>0?"+":"-")+k(~~(m/60),2)+":"+k(~~(m%60),2);case"ZZ":return(m>0?"+":"-")+k(~~(10*m/6),4);case"L":case"LL":case"LLL":case"LLLL":return o(b,c.longDateFormat[d]);default:return d.replace("\\","")}}var e=b.getMonth(),f=b.getDate(),g=b.getFullYear(),h=b.getDay(),i=b.getHours(),j=b.getMinutes(),l=b.getSeconds(),m=b.getTimezoneOffset(),n=/(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LL?L?L?)/g,p=/[^A-Z]/g,q=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,r=c.ordinal,s=c.meridiem;return d.replace(n,t)}function p(b,c){function p(a,b){var c;switch(a){case"M":case"MM":d[1]=~~b-1;break;case"D":case"DD":case"DDD":case"DDDD":d[2]=~~b;break;case"YY":b=~~b,d[0]=b+(b>70?1900:2e3);break;case"YYYY":d[0]=~~Math.abs(b);break;case"a":case"A":o=b.toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":d[3]=~~b;break;case"m":case"mm":d[4]=~~b;break;case"s":case"ss":d[5]=~~b;break;case"Z":case"ZZ":g=!0,c=b.match(j),c[1]&&(e=~~c[1]),c[2]&&(f=~~c[2]),c[0]==="-"&&(e=-e,f=-f)}}var d=[0,0,1,0,0,0,0],e=0,f=0,g=!1,h=/(\\)?(MM?|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?)/g,i=/(\\)?([0-9]+|am|pm|([\+\-]\d\d:?\d\d))/gi,j=/([\+\-]|\d\d)/gi,k=b.match(i),l=c.match(h),m,o;for(m=0;m<l.length;m++)p(l[m],k[m]);return o&&d[3]<12&&(d[3]+=12),!o&&d[3]===12&&(d[3]=0),d[3]+=e,d[4]+=f,g?new a(a.UTC.apply({},d)):n(d)}function q(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function r(a,b){var c,d=/(\\)?([0-9]+|am|pm|([\+\-]\d\d:?\d\d))/gi,e=a.match(d),f=[],g=99,h,i,j;for(h=0;h<b.length;h++)i=p(a,b[h]),j=q(e,o(i,b[h]).match(d)),j<g&&(g=j,c=i);return c}function s(a){this._d=a}function t(a,b,d){var e=c.relativeTime[a];return typeof e=="function"?e(b||1,!!d,a):e.replace(/%d/i,b||1)}function u(a,b){var c=d(Math.abs(a)/1e3),e=d(c/60),f=d(e/60),g=d(f/24),h=d(g/365),i=c<45&&["s",c]||e===1&&["m"]||e<45&&["mm",e]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",d(g/30)]||h===1&&["y"]||["yy",h];return i[2]=b,t.apply({},i)}function v(a,b){c.fn[a]=function(a){return a!=null?(this._d["set"+b](a),this):this._d["get"+b]()}}var c,d=Math.round,e={},f=typeof module!="undefined",g="months|monthsShort|weekdays|weekdaysShort|longDateFormat|relativeTime|ordinal|meridiem".split("|"),h,i="1.2.0",j="Month|Date|Hours|Minutes|Seconds".split("|");c=function(c,d){if(c===null)return null;var e;return c&&c._d instanceof a?e=new a(+c._d):d?m(d)?e=r(c,d):e=p(c,d):e=c===b?new a:c instanceof a?c:m(c)?n(c):new a(c),new s(e)},c.version=i,c.lang=function(a,b){var d,h,i;b&&(e[a]=b);if(e[a])for(d=0;d<g.length;d++)h=g[d],c[h]=e[a][h]||c[h];else f&&(i=require("./lang/"+a),c.lang(a,i))},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm A",LLLL:"dddd, MMMM D YYYY h:mm A"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),c.fn=s.prototype={clone:function(){return c(this)},valueOf:function(){return+this._d},"native":function(){return this._d},toString:function(){return this._d.toString()},toDate:function(){return this._d},format:function(a){return o(this._d,a)},add:function(a,b){return this._d=l(this._d,a,1,b),this},subtract:function(a,b){return this._d=l(this._d,a,-1,b),this},diff:function(a,b,e){var f=c(a),g=this._d-f._d,h=this.year()-f.year(),i=this.month()-f.month(),j=this.day()-f.day(),k;return b==="months"?k=h*12+i+j/30:b==="years"?k=h+i/12:k=b==="seconds"?g/1e3:b==="minutes"?g/6e4:b==="hours"?g/36e5:b==="days"?g/864e5:b==="weeks"?g/6048e5:b==="days"?g/3600:g,e?k:d(k)},from:function(a,b){var d=this.diff(a),e=c.relativeTime,f=u(d,b);return b?f:(d<=0?e.past:e.future).replace(/%s/i,f)},fromNow:function(a){return this.from(c(),a)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()!==c([this.year()]).zone()}};for(h=0;h<j.length;h++)v(j[h].toLowerCase(),j[h]);v("year","FullYear"),c.fn.day=function(){return this._d.getDay()},c.fn.zone=function(){return this._d.getTimezoneOffset()},f&&(module.exports=c),typeof window!="undefined"&&(window.moment=c)})(Date)
;
(function() {

  

}).call(this);
(function() {

  

}).call(this);
