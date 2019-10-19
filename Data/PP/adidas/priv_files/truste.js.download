app.define('utils/truste', [
	'app.resources',
    'utils/cookies',
    'utils/url'
], function (app, cookies, urlUtils) {
    'use strict';
    
    return {
    	showDialog : function(trusteName, iframeMessage) {
    		if (trusteName) {
                var consentCookie = cookies.getCookie('notice_preferences');
                if (consentCookie && iframeMessage == "remove_iframe") {
                    var link = jQuery("#geolocation .proposal a");
                    if (link.length) {
                        var linkUrl = link.attr("href");
                        if (linkUrl.indexOf("cookieconsent") == -1) {
                            link.attr("href", urlUtils.appendParamToURL(linkUrl, "cookieconsent", consentCookie));
                        }
                    }
                }
    			jQuery('.'+trusteName).removeClass(trusteName).show().trigger("resize");
    		}
    	},
    	
    	testAndShowDialog : function(trusteName) {
    		if (app.disableWorkaroundForTrusteOverlay) {
    			return;
    		}
    		if (app.resources["COUNTRY_RELY_ON_COOKIE"]==false || cookies.getCookie('notice_preferences')) {
				this.showDialog(trusteName);
    		}
    	},
    	
    	bind : function(trusteName) {
    		var thisComponent = this;

    		if (app.disableWorkaroundForTrusteOverlay) {
    			return;
    		}
    		
			window[trusteName] = function(event) {

				if (!event || event && event.originalEvent && event.originalEvent.origin && event.originalEvent.origin.indexOf('truste')==-1) {
					return true;
				}
				event = event.originalEvent;
	
				try {            
					var data = event && event['data'] && jQuery.parseJSON(event['data']) || {};
					if (data.message && ( data.message == "remove_iframe" || data.message == "show_throbber") ) {
						thisComponent.showDialog(trusteName, data.message);
						jQuery(window).off("message", window[trusteName]);
					} 
	         	} catch(err) {
					window.console && console.error(err);
				}
				return true;
	        }
	        
     		jQuery(window).on("message", window[trusteName]);    	
		}
    };
});