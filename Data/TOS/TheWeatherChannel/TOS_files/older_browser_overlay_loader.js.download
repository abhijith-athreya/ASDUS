/**
 * User: Hussein Qudsi
 * Date: 2/11/2016
 * Time: 17:11
 */
!function ($) {
  'use strict';
  if ($) {

    /** vars: */
    var browser = $.browser, base = '/sites/all/modules/custom/angularmods/assets/older_browser_overlay/',
      googleBotArray = [new RegExp(/Googlebot/i), new RegExp(/SAMSUNG-SGH-E250\/1\.0/i), new RegExp(/AdsBot-Google-Mobile-Apps/i)],
      notSupported = {
        mozilla: 38,
        chrome: 38,
        msie: 10,
        safari: 537.73
      };

    /**
     * OlderBrowser
     * namespace including helper methods
     * */
    var OlderBrowser = {

      /**
       * initiateLoader
       * Detecting the browser
       * */
      initiateLoader: function () {
        // GoogleBot fix:
        for(var i = 0; i < googleBotArray.length; i++){
          if(navigator.userAgent.match(googleBotArray[i])){
            return;
          }
        }
        // PhantomJS fix:
        if (!!(window.callPhantom) || navigator.userAgent.match('PhantomJS')) {
          return;
        }
        // Detecting older browsers:
        for (var key in notSupported) {
          if (notSupported.hasOwnProperty(key) && browser[key]) {
            // IE11 & Edge fix:
            if (key === 'mozilla' && navigator.userAgent.match(new RegExp(/Trident\/7\./)) || key === 'chrome' && navigator.userAgent.match(new RegExp(/Edge/))) {
              return;
            }
            notSupported[key] >= this.browserVersion(browser) && this.loadModel();
            break;
          }
        }
      },

      /**
       * browserVersion
       * Checking the version number
       * */
      browserVersion: function (browser) {
        var version = browser && ('version' in browser) && typeof browser.version === 'string' && browser.version;
        if (version) {
          var versionNumber = version.match(new RegExp(/\d+\.\d+/));
          return (versionNumber && parseFloat(versionNumber[0])) || Infinity;
        } else {
          return Infinity;//prevent model
        }
      },

      /**
       * loadModel
       * Dynamic script loading
       * */
      loadModel: function () {
        this.DOMReady(function () {
          var scriptSupport = document.createElement('script');
          scriptSupport.type = "text/javascript";
          scriptSupport.src = base + 'older_browser_overlay.js';
          var linkSupport = document.createElement('link');
          linkSupport.rel = "stylesheet";
          linkSupport.type = "text/css";
          linkSupport.href = base + "older_browser_overlay.css";
          var body = document.querySelector('body'), child = body.children[0];
          body['insertBefore'](scriptSupport, child);
          body['insertBefore'](linkSupport, child);
        });
      },

      /**
       * loadModel
       * On ready event, load the scripts
       * */
      DOMReady: function (callBack) {
        var doc = document, handler = !!doc.addEventListener, ready = 'readyState';
        handler ?
          doc.addEventListener('DOMContentLoaded', callBack) :
          doc.attachEvent('onreadystatechange', function(){
            (doc[ready] === 'interactive' || doc[ready] === 'complete') && callBack();
          });
      }
    };// End of OlderBrowser namespace

    /** Initiating conditional module loader */
    OlderBrowser.initiateLoader();
  }
}(jQuery);
