// Global webDriver object/namespace to contain spin-specific variables and methods.
// May be extended by some spin features.
// MUST be included immediately after including spin's version of jQuery.

(function(window, undefined) {
	if (window.webDriver)
		return;
	
	var webDriver = {};

	// Save our version of jQuery and restore any previously loaded version
	webDriver.jQuery = jQuery.noConflict(true);
	
	// If there was no previously loaded version of jQuery, make ours active
	// These could still be overridden later
	if (!window.jQuery)
		window.jQuery = webDriver.jQuery;
	if (!window.$)
		window.$ = webDriver.jQuery;

	// Methods to switch to/from our version of jQuery
	var jQueryDepth = 0;
	var prevJQuery = null;
	var prevDollar = null;

	webDriver.push_jQuery = function() {
		if (jQueryDepth == 0) {
			prevJQuery = jQuery;
			prevDollar = $;
			jQuery = $ = this.jQuery;
		}

		jQueryDepth++;
	};

	webDriver.pop_jQuery = function() {
		jQueryDepth--;

		if (jQueryDepth == 0) {
			window.jQuery = prevJQuery;
			window.$ = prevDollar;
		}
	};
	
	// Make the webDriver object accessible
	window.webDriver = webDriver;
})(window);