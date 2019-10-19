// Declare TNCMS namespace if not declared

if (!window.TNCMS) {
	window.TNCMS = {}; 
}

/**
 * BLOX User Javascript Interface
 * 
 * Provides utility methods for accessing data about BLOX users, recovering
 * persistent sessions, and refreshing user views based on logged in status. 
 * To fix browser views, you could add the following to pages that care about
 * logged in user status in a script tag:
 * 
 * [% if cms.request.is_anonymous_user %]
 * TNCMS.User.validateAnonymousView();
 * [% else %]
 * TNCMS.User.validateLoggedInView();
 * [% end %]
 * 
 * Template code that relies on logged in status could also use other utility
 * methods to make decisions, for example:
 * 
 * if (TNCMS.User.isLoggedIn()) {
 *   document.write('Welcome back: ' + TNCMS.User.getScreenName());
 * }
 * 
 */
window.TNCMS.User = (function () {
	
	"use strict";
	
	/* {{{ Private Methods */

	/* {{{ log( string ) */
	
	/**
	 * Log to console if available
	 * 
	 * @param string sMessage
	 * 	The message to log to console
	 */
	function log(sMessage) {
		if (console.warn) {
			console.warn(sMessage);
		}
	}
	
	/* }}} */
	/* {{{ redirect( string ) */
	
	/**
	 * Redirect browser to a URL by various means
	 * 
	 * @param string sURL
	 * 	The URL to redirect too
	 * 
	 */
	function redirect(sURL) {
		
		if (window.location.replace) {
			window.location.replace(sURL);
		} else if (window.location.assign) {
			window.location.assign(sURL);
		} else {
			window.location.href = sURL;
		}
	}
	
	/* }}} */
	/* {{{ boolean isLoggedIn() */
	
	/**
	 * Check if the user is logged in
	 * 
	 * @return boolean
	 * 	Returns true if the user is logged in, or false otherwise
	 */
	function isLoggedIn() {
		return (document.cookie.indexOf('tncms-authtoken') > -1);
	}
	
	/* }}} */
	/* {{{ forceBrowserRefresh( string ) */
	
	/**
	 * Forces browser to refresh
	 * 
	 * If the wrong 'view' from cache is being served, this method will cause
	 * the browser to fetch from the server instead of continuing to use a
	 * locally cached copy.
	 * 
	 * @param string sMode
	 * 	The mode
	 */
	function forceBrowserRefresh(sMode)
	{	     
	     // Cache busting will be needed to get the viewport to go back to the
	     // server. An optional mode can be passed to try and make sure that
	     // a common cached view will be used in that event.
	     
		 var aLoc = window.location.href.split('#'),
			sURL = aLoc[0],
			sHash = aLoc[1];
	 
	     if (sURL.indexOf('_dc=' + sMode) > -1) {
	    	 log('Attempt to auto-fix logged/anonymous view failed');
	    	 return;
	     }
	     
	     if (sURL.indexOf('?') > -1) {
	         sURL += '&_dc=' + sMode;
	     } else {
	         sURL += '?_dc=' + sMode;
	     }

		 if ( sHash )  sURL += '#'+ sHash;
	     
	     redirect(sURL);		
	}
	
	/* }}} */
	/* {{{ string getCookieValueByName( string ) */
	
	/**
	 * Retrieve a cookie's value
	 * 
	 * @param string sName
	 * 	The name of the cookie to retrieve
	 * 
	 * @return string
	 * 	The value of the cookie found or null
	 */
	function getCookieValueByName(sName)
	{
		 var sNameEQ = sName + "=";
		 var aCookie = document.cookie.split(';');
		 for(var i=0; i < aCookie.length; i++) {
			 var sChunk = aCookie[i];
			 while (sChunk.charAt(0)==' ') {
				 sChunk = sChunk.substring(1,sChunk.length);
			 }
			 
			 if (sChunk.indexOf(sNameEQ) == 0) {
				 return decodeURIComponent(
					 sChunk.substring(sNameEQ.length,sChunk.length).replace(/\+/g, " ")
				 );
			 }
		 }
		 return null;
	}
	
	/* }}} */
	/* {{{ boolean hasPersistentSession() */
	
	/**
	 * Check if there is a persistent session token
	 * 
	 * @return boolean
	 * 	Returns true if the user had previously requested to persist a
	 *  log in session accross browser sessions
	 */
	function hasPersistentSession() {
		return (document.cookie.indexOf('tncms-rememberme') > -1);
	}
	
	/* }}} */
	/* {{{ restorePersistentSession() */
	
	/**
	 * Restore sessions that the user requested to be 'remembered'
	 * 
	 */
	function restorePersistentSession() {
		// If there is no persistent session or the user is logged in, bail
		
		if (!hasPersistentSession() || isLoggedIn()) {
			return;
		}

		var sURL = '/tncms/auth/remember/?success=' + encodeURIComponent(window.location.href);

		redirect(sURL);
	}
	
	/* }}} */

	/* }}} */
	/* {{{ Public Methods */
	
	return {
		
		/* {{{ string getScreenName() */
		
		/**
		 * Retrieve a screen name from the last logged in user
		 * 
		 * @return string
		 * 	Returns the screen name of the last logged in user, or null
		 */
		getScreenName: function() {
			return getCookieValueByName('tncms-screenname');
		},
		
		/* }}} */
		/* {{{ boolean hasPersistentSession() */
		
		/**
		 * Check if there is a persistent session token
		 * 
		 * @return boolean
		 * 	Returns true if the user had previously requested to persist a
		 *  log in session accross browser sessions
		 */
		hasPersistentSession: hasPersistentSession,
		
		/* }}} */
		/* {{{ boolean isLoggedIn() */
		
		/**
		 * Check if the user is logged in
		 * 
		 * @return boolean
		 * 	Returns true if the user is logged in, or false otherwise
		 */
		isLoggedIn: isLoggedIn,
		
		/* }}} */
		/* {{{ validateAnonymousView() */
		
		/**
		 * Verify that an anonymous user page is being served correctly
		 * 
		 * If the page is not being served to a valid anonymous user, or the
		 * user has a remember me session that can be recovered, this method
		 * will cause this to happen.
		 * 
		 */
		validateAnonymousView: function() {
			// If an authtoken exists, the user is viewing the wrong version of
			// the page and must refresh the page to see the logged-in view
			// version of this page
			
			if (isLoggedIn()) {
				forceBrowserRefresh('logged_in');
			}
			
			// User is not logged in, but may have a remember me session to
			// recover for this browser session
			
			restorePersistentSession();
		},
		
		/* }}} */
		/* {{{ validateLoggedInView() */
		
		/**
		 * Validate that the logged in view is being delivered to a logged in user
		 * 
		 * 
		 */
		validateLoggedInView: function() {
			// If the user is not logged in and is viewing the wrong version of
			// the page, the browser will need to be refreshed
			
			if (!isLoggedIn()) {
				
				// If there is a remember me session to recover, try this first
				// before shipping the user back to an anonymous view
				
				restorePersistentSession();
				forceBrowserRefresh('anonymous');
			}
		},
		
		/* }}} */
		/* {{{ restorePersistentSession() */
		
		/**
		 * Restore sessions that the user requested to be 'remembered'
		 * 
		 */
		restorePersistentSession: restorePersistentSession
	
		/* }}} */

	}

	/* }}} */
	
})();
