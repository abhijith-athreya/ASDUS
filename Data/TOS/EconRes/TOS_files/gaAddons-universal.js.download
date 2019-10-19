///////
// gaAddons.js
// 	Author: Stéphane Hamel - shamel67@gmail.com - http://immeria.net
//  Contributors:
//	- Andy Edmonds - http://alwaysbetesting.com
//	- Damon Gudaitis - http://www.damongudaitis.com/
//	
///////
// License: Version: MPL 1.1
// The contents of this file are subject to the Mozilla Public License Version
// 1.1 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
// for the specific language governing rights and limitations under the
// License.
//
// Changelog:
//  v2.6 - Sep. 9th 2015 - Migrate to universal (tah)
//
//  v2.5 - Jun. 1st 2009 - Make sure to load at "onload", rewritten as an object
//  v2.4 - Apr. 21st 2009 - Fix trackPageview() syntax
//  v2.3 - Apr. 10th 2009 - Fix logic issues. Add tracking of mailto links. Allow tracker to be named something else than pageTracker
//  v2.2 - Mar. 20nd 2009 - Fix issue with tracking download docs on current domain
//  v2.1 - Jan. 22nd 2009 - Set bUseEventForOutbout and bUserEventForDownload to toggle use of Events or Page Views
// 	v2.0 - Jan. 2009 - Use Google Analytics Events to track downloads and external links
//  v1.0 - Inspired by the work of Justin Cutroni - Google Analytics Short Cut - http://gashortcut.com/
///////

/**
 * @fileoverview Wrapper for gaAddons
 */
var gaA_fileTypes = new RegExp(/\.(docx*|xlsx*|pptx*|exe|zip|pdf|xpi)$/i);
// Indicate each file extension that needs to be tracked, gaA_fileTypes is the regular expression that matches downloadable files

///////
/// No need to change anything below this line
/**
 * @class ga Addons component.
 *     This class encapsulates all logic for the Google Analytics addons
 * @constructor
 */
var gaAddons = function(){
    /**
     * startListening: add a new listner for onclick event, handle Mozilla or IE methods
     * @param {Object} obj HREF object to listen to
     * @param {String} evnt event type (usually "click")
     * @param {Object} func Function to call when evnt is triggered
     */
    var startListening = function(obj, evnt, func){
        if (obj.addEventListener) 
            obj.addEventListener(evnt, func, false);
        else 
            if (obj.attachEvent) 
                obj.attachEvent("on" + evnt, func);
    }
    
    /**
     * trackDocument: make GA call when downloading one of detected file extension, use trackEvent() or trackPageView() methods
     * @param {Object} evnt Object where the event happened
     */
    var trackDocument = function(evnt){
        ga("send", "event", "download", "click", (evnt.srcElement) ? evnt.srcElement.pathname : this.pathname);
    }
    
    /**
     * trackExternalLink: make GA call when clicking an outbound link, use trackEvent() or trackPageView() methods
     * @param {Object} evnt Object where the event happened
     */
    var trackExternalLink = function(evnt){
        var elmnt = evnt.srcElement;
        if (elmnt) {
            while (elmnt.tagName != "A") 
                elmnt = elmnt.parentNode;
            if (/http/.test(elmnt.protocol)) 
                ga("send", "event", "outbound", "click", elmnt.hostname + "/" + elmnt.pathname + elmnt.search);
            if (elmnt.protocol == "mailto:") 
                ga("send", "event", "mailto", "click", elmnt.href.replace(/mailto:/, ""));
        }
        else {
            if (/http/.test(this.protocol)) 
                ga("send", "event", "outbound", "click", this.hostname + this.pathname + this.search);
            if (this.protocol == "mailto:") 
                ga("send", "event", "mailto", "click", this.href.replace(/mailto:/, ""));
        }
    }

    /**
     * Initialize gaAddons
     */
    if (document.getElementsByTagName && typeof ga === 'function') {
        var hrefs = document.getElementsByTagName('a');
        for (var l = 0, m = hrefs.length; l < m; l++) 
            if (gaA_fileTypes.test(hrefs[l].pathname)) 
                startListening(hrefs[l], "click", trackDocument);
            else 
                if (hrefs[l].hostname != location.hostname) 
                    startListening(hrefs[l], "click", trackExternalLink);
    }
}

if (window.addEventListener) // Standard
    window.addEventListener('load', function(){
        gaAddons()
    }, false);
else 
    if (window.attachEvent) // IE
        window.attachEvent('onload', function(){
            gaAddons()
        });
/// EOF ///
