/**
	gn_tracking uses an object literal notation: configuration objects sit snugly inside it, 
	alongside the various functions it exposes. 

	In reality, init() is the only function you should need to access directly 

	@namespace gn_tracking
*/
var gn_tracking = {

	/** Internal config object; holds a Google string, a quantcast CSV string, and a ComScore object */
	config: {
		google:		'',
		quantcast:	'',
		comscore:	''		
	},

	/** Internal flag store;, used mostly to kill successive calls to init */
	flags: { loaded: false },

	/** Accepts a config param, and then for each item in the config object, calls its matching function
		@param {Object} config The config object; see the internal ga_tracking.config object for a reference to its structure
	*/
	init: function(config) {
		var that = this;

		// If our init flag has been triggered, quit now
		if (typeof this.flags.initialised != 'undefined' && this.flags.initialised) {
			return false;
		// Else, set the flag and continue
		} else {
			this.flags.initialised = true;
		}

		// Overwrite our config object with the passed version
		if (config) this.config = config;

		// For each element in the config object, inspect gn_tracking for a function with a matching name and trigger it
		for (var prop in this.config) {
			if (!this.is_empty(this.config[prop]) && typeof this[prop] == 'function') {
				this[prop]();
			}
		}
	},

	/** Loads the required GA script, and queues a callback to be fired when the script loads */
	google: function() {
		var that = this,
			cfg = this.config;

		// Init our google tracking flags
		this.flags.google = false;

		// If we have a CSV of GA tags...
		if (typeof(cfg.google) == 'string') {
			// Split it, and populate the google config object
			var ids = cfg.google.replace(/\s/g,'').split(',');
			cfg.google = ids;

		} else if (typeof cfg.google == 'object') {
			cfg.google = [ cfg.urchin, cfg.ga ]; // For backwards compatability
		}
		
		// If we have a GA request, 
		if (cfg.google.length) {

			// Init, or grab the global _gaq variable and pop each ID onto the queue along with a "track pageview" command
			if (!window._gaq) window._gaq = [];

			for (var i = 0; i < cfg.google.length; i++) {
				_gaq.push(['_setAccount', cfg.google[i] ]);
				_gaq.push(['_trackPageview']);
			}

			// Then request the script and Update gn_tracking with our success flag
			this.add_script(
				('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js',
				function() { that.flags.google = true; }
			);
		}
	},


	/** Loads the required quantcast script, and queues a callback to be fired when the script loads */
	quantcast: function() {
		var that = this;

		this.add_script(
			"http://edge.quantserve.com/quant.js",
			function() {

				// The presense of _qacct or _qoptions means that this page is already using quantcast tags; abort
				if (typeof _qacct != 'undefined' && !that.is_empty(_qacct)) return false;
				if (typeof _qoptions != 'undefined' && !that.is_empty(_qoptions)) return false;

				// Split our CSV config string and call Quantserve() with each value
				var ids = that.config.quantcast.split(',');
				for (var i = 0; i < ids.length; i++) {
					_qoptions={qacct: ids[i]};
					quantserve();
				}

				// Update gn_tracking with our success flag
				that.flags.quantcast = true;
			}
		);
	},


	/** Loads the required ComScore script, and queues a callback to be fired when the script loads */
	comscore: function() {
		var that = this;

		this.add_script(
			(document.location.protocol == 'https:' ? 'https://sb' : 'http://b')+".scorecardresearch.com/beacon.js",
			function() {
				// Standard Comscore payload
				COMSCORE.beacon(that.config.comscore);

				// Update gn_tracking with our success flag
				that.flags.comscore = true;
			}
		);
	},


	/** Aaah, the big deal here, add_script asyncronously adds a script object to the head, monitors its load status, 
		and then queues a callback to be executed when it's complete
		@param {String}		url			Script to be attached to the page
		@param {Function}	callback	Function to be executed when the script is fully loaded
	*/
	add_script: function(url, callback) {
		var that = this,
			script = document.createElement("script"),
			head = document.getElementsByTagName('head')[0];

		script.src = url;

		script.onload = script.onreadystatechange = function(){
			if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
				if (typeof callback == 'function') { callback(); }
				script.onload = script.onreadystatechange = null; // Handle memory leak in IE
			}
		};

		head.appendChild(script);
	},


	/**	Accepts a variable and attempts to determine if it's truly 'empty'. Mostly used as Object's length property lies 
		@param value Any primitive or basic datatype (string, number, boolan, array, object, etc.)
	*/
	is_empty: function(value) {
		switch (typeof(value)) {
			case 'object': 
				// If this object has any properties directly defined on it... well, it's not empty then, is it?
				for(var prop in value) {
					if (value.hasOwnProperty(prop)) return false;
				}

				return true;
				break;

			// Strings and arrays are easy, just count the values
			case 'string':
			case 'array':
				if (value.length > 0) {
					return false;
				} else {
					return true;
				}

				break;

			// Most other datatypes, by their existence, can't be empty; return false
			default: 
				return false;	
				break;
		}
	}
};
