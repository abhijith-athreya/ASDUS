/*
* $Id: trackingTags_v1.1.js 155251 2017-01-30 16:51:57Z gopi_borra $
*/

//  CONFIGURE HOST BASED ON ENVIRONMENT
var NYTD = NYTD || {};
NYTD.Analytics = NYTD.Analytics || {};
NYTD.Analytics.JSFileLoaded = NYTD.Analytics.JSFileLoaded || {};


if ( !NYTD.Analytics.JSFileLoaded['trackingTags_v1.1.js'] ) {

/* BEGIN ANALYTICS TRACKING */

    NYTD.Analytics.JSFileLoaded['trackingTags_v1.1.js'] = 1;

NYTD.Hosts = NYTD.Hosts ||  (function(){
  var host, scripts = document.getElementsByTagName("script");

  for (var i = 0, script; script = scripts[i]; i++) {
    host = script.src &&
/^(.+\.nytimes.com)\/js\/app\/analytics\/trackingTags_v1\.1\.js/.test(script.src) ? RegExp.$1 :'';
    if (host) { break };
  };

  return {
    imageHost: host,
    jsHost: host,
    cssHost: host
  }
})();


// START WEBTRENDS JS TAG
var gtrackevents=false;
var gdcsid="dcsym57yw10000s1s8g0boozt_9t1x";
var gfpcdom=".nytimes.com";
var gdomain="wt.o.nytimes.com";
var js_host = NYTD.Hosts.jsHost + "/js/app/analytics/";

var includeJsFile = function (incFilename, async) {

    var incFileJS = document.createElement("script");
    incFileJS.setAttribute("type", "text/javascript");
    incFileJS.setAttribute("src", incFilename);
    if (async === true) {
        incFileJS.async = true;
    }
    document.getElementsByTagName("head").item(0).appendChild(incFileJS);

}

// Include WebTrends wtid.js
var wt_initObj = { enabled:true, fpc:"WT_FPC", domain:gdomain, dcsid:gdcsid };
if (wt_initObj.enabled&&(document.cookie.indexOf(wt_initObj.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
var wtid_js_host="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+wt_initObj.domain+"/"+wt_initObj.dcsid+"/";
//includeJsFile(wtid_js_host+'wtid.js');
}

//includeJsFile(js_host+'controller_v1.1.js');
var _missingController = true; // do not remove - bx-853
// END WEBTRENDS JS TAG


// Duped in common.js
(function(){
  if (NYTD.require) {
    return;
  }

  var windowLoaded = false;
  var document_scripts;

  if (window.addEventListener) {
    window.addEventListener ("load", function(){ windowLoaded = true }, false);
  } else if (window.attachEvent) {
    window.attachEvent ("onload", function(){ windowLoaded = true });
  }

  function scriptLoaded(src) {
    document_scripts = document_scripts || {};

    if (document_scripts[src]) { return true; }
    else {
      var script_tags= document.getElementsByTagName("script");
      for (var i = 0, script; script = script_tags[i]; i++) {
        if(script.src) { document_scripts[script.src] = 1; }
      };
      if (document_scripts[src]) { return true; }
      else { return false; }
    }

  }

  NYTD.require = function(file, callback) {

    if (windowLoaded) { throw('Cannot require file, document is already loaded'); }

    // If matches root relative url (single slash, not protocol-agnostic double slash)
    var url = /^\/[^\/]/.test(file) ?  NYTD.Hosts.jsHost + file : file;
    var force = arguments[arguments.length - 1] === true;
    var needsCallbackScriptTag;

    if (force || !scriptLoaded(url)) {
      document.write('<script src="' + url + '" type="text/javascript" charset="utf-8" onerror="throw(\'NYTD.require: An error occured: \' + this.src)"><\/script>');
      document_scripts[url] = 1;
      needsCallbackScriptTag = true;
    }

    if (typeof callback == 'function') {

      if (document.addEventListener && !navigator.userAgent.match(/MSIE/)) {
        if (needsCallbackScriptTag) {
          document.write('<script type="text/javascript" charset="utf-8">(' + callback.toString() + ')();<\/script>');
        }
        else {
          window.setTimeout(function(){
            callback()
          }, 0)
        }
      }
      else {
        NYTD.require.callbacks = NYTD.require.callbacks || [];
        NYTD.require.callbacks.push(callback);
        NYTD.require.callbacks.count = (++NYTD.require.callbacks.count) || 0;
        document.write("<script id=__onAfterRequire" + NYTD.require.callbacks.count + " src=//:><\/script>");
        document.getElementById("__onAfterRequire" + NYTD.require.callbacks.count).onreadystatechange = function() {
          if (this.readyState == "complete") {
            this.onreadystatechange = null;
            (NYTD.require.callbacks.pop())();
            this.parentNode.removeChild(this);
          }
        };
      }

    }

  };
})();

// comscore tagging
(function () {
    var scgMetaValue, comscoreKeyword;
    var comscoreMappingKey = [];
    var pageUrl = window.location.href;
    var cgMetaTags = document.getElementsByName('CG');
    var scgMetaTags = document.getElementsByName('SCG');
    var comscoreConfig = [
        'c1=2',
        'c2=3005403'
    ];
    var comscoreKeywordMappingObj = {
        "business" : "business",
        "business - global" : "global",
        "business - international" : "global",
        "Business Day - Dealbook" : "dealbook",
        "business - economy" : "economy",
        "business - energy-environment" : "energy_environment",
        "business - media" : "media",
        "business - smallbusiness" : "smallbusiness",
        "your-money" : "your_money",
        "Business Day - Economy" : "economix",
        "Business - Media and Advertising" : "mediadecoder",
        "Business Day - Small Business" : "boss",
        "Business Day - Your Money" : "bucks",
        "Business - Markets" : "markets",
        "Autos - wheels" : "wheels",
        "Science - Environment" : "green",
        "technology" : "technology",
        "technology - personaltech" : "personaltech",
        "Technology - bits" : "bits",
        "Technology - Personal Tech" : "gadgetwise",
        "Technology - pogue" : "pogue",
        "General - open" : "open",
        "style" : "style",
        "fashion" : "fashion",
        "dining" : "dining",
        "garden" : "garden",
        "fashion - weddings" : "weddings",
        "t-magazine" : "t_magazine",
        "T:Style - tmagazine" : "t_style",
        "Style - Dining" : "dinersjournal",
        "Style - Fashion" : "runway",
        "Style - parenting" : "parenting",
        "arts" : "arts",
        "arts - design" : "design",
        "books" : "books",
        "arts - dance" : "dance",
        "movies" : "movies",
        "arts - music" : "music",
        "arts - television" : "television",
        "theater" : "theater",
        "arts - video-games" : "video_games",
        "Arts - Event Search" : "event_search",
        "Arts - artsbeat" : "artsbeat",
        "Movies - carpetbagger" : "carpetbagger",
        "health" : "health",
        "health - research" : "research",
        "health - nutrition" : "nutrition",
        "health - policy" : "policy",
        "health - views" : "views",
        "Health - Health Guide" : "health_guide",
        "Health - well" : "well",
        "Health - newoldage" : "newoldage",
        "Health - consults" : "consults",
        "science" : "science",
        "science - earth" : "earth",
        "science - space" : "space",
        "Science - Environment" : "green",
        "Science - scientistatwork" : "scientistatwork",
        "Opinion - dotearth" : "dotearth"
    };

    if (cgMetaTags.length > 0) {
        comscoreMappingKey.push(cgMetaTags[0].content);
    }
    if (scgMetaTags.length > 0) {
        scgMetaValue = scgMetaTags[0].content;
        if (scgMetaValue !== "") {
            comscoreMappingKey.push(scgMetaValue);
        }
    }
    comscoreKeyword = comscoreKeywordMappingObj[comscoreMappingKey.join(' - ')];

    if (pageUrl.indexOf("markets.on.nytimes.com") !== -1) { // check if its a markets page
        if (pageUrl.indexOf("analysis_tools") !== -1) {
            comscoreKeyword = "analysis_tools";
        }
        else if (pageUrl.indexOf("screener") !== -1) {
            comscoreKeyword = "screener";
        }
        else if (pageUrl.indexOf("portfolio") !== -1) {
            comscoreKeyword = "portfolio";
        }
    }

    if (comscoreKeyword) {
        comscoreConfig.push('comscorekw=' + comscoreKeyword);
    }

    var callback = function() {
        var udmURL = 'http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?';
        udmURL += comscoreConfig.join('&');

        // Vendor code
        function udm_(a){var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}

        udm_(udmURL);
    };

    var s = document.createElement("script"),
       el = document.getElementsByTagName("script")[0];
    s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb": "http://b") + ".scorecardresearch.com/c2/3005403/cs.js";
    if (s.addEventListener) { // normal browsers
        s.addEventListener('load', function() {
            callback();
        }, false);
    }
    else {
        s.onreadystatechange = function() { // old IEs
            if (s.readyState in {loaded: 1, complete: 1}) {
                s.onreadystatechange = null;
                callback();
            }
        };
    }
    el.parentNode.insertBefore(s, el);
})(); // end comscore tagging


// Charbeat beacon
function isGlobalEdition() {
    var edition = unescape(document.cookie).match('NYT-Edition=([^;]+)');
    return (edition && edition[1] && edition[1].indexOf("edition|GLOBAL") !== -1);
}

// forms chartbeat domain based on the environment and edition
function getChartbeatDomain() {
    var domain = '';
    if (isGlobalEdition()) {
        domain = "international.nytimes.com";
        if (NYTD.env === "staging") {
            domain = "international.stg.nytimes.com";
        }
    } else {
        domain = "nytimes.com";
        if (NYTD.env === "staging") {
            domain = "stg.nytimes.com";
        }
    }
    return domain;
}

var _sf_async_config = {
    uid: 16698,
    domain: getChartbeatDomain(),
    pingServer: "pnytimes.chartbeat.net",
    path:window.location.pathname,
    title: window.TimesPeople && TimesPeople.Page && TimesPeople.Page.getTitle() || document.title.replace('- NYTimes.com', '')
};

try {
  _sf_async_config.sections = [document.getElementsByName('CG')[0].content, document.getElementsByName('SCG')[0].content].join(",");
} catch(e){}

try {
  _sf_async_config.authors = (document.getElementsByName('byl')[0] || document.getElementsByName('CLMST')[0]).content.replace('By ', '').toLowerCase().replace(/\b[a-z]/g, function(){return arguments[0].toUpperCase();});
} catch(e){}

 (function() {
    function loadChartbeat() {
        window._sf_endpt = (new Date()).getTime();
        includeJsFile((("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") + "js/chartbeat.js");
    }

    if (window.addEventListener) {
      window.addEventListener('load', loadChartbeat, false);
    } else if (window.attachEvent) {
      window.attachEvent('onload', loadChartbeat);
    }

 })();


  /**
   * A simple EventTracker implementation to be included in the <head> of the
   * page. A list of ET instances is maintain so that they can be converted to
   * real ET instances when the time has come. When the track function is
   * called, rather than making ET requests right away, events are queued up and
   * processed later.
   */
  NYTD.EventTracker = (function () {
    'use strict';
    var etInstances = [];
    var etClass = function () {
      var eventQueue = [];
      /**
       * Instance function of EventTracker object. Takes the same number of
       * parameters as the real EventTracker track function.
       * @namespace NYTD.EventTracker
       * @method track
       * @param {Object} evt - information about the event
       * @param {Object} opt - options for tracking the event
       */
      this.track = function (evt, opt) {
        if (!evt.time) {
          evt.time = new Date().getTime();
        }
        eventQueue.push({
          event: evt,
          options: opt
        });
      };
      /**
       * Instance function of EventTracker object. Call to process queued
       * events.
       * @namespace NYTD.EventTracker
       * @method processQueue
       * @param {Function} processor - function to process (send) events
       */
      this.processQueue = function (processor) {
        var oneEvent;
        if (processor) {
          while (eventQueue.length > 0) {
            oneEvent = eventQueue.shift();
            processor(oneEvent.event, oneEvent.options);
          }
        }
      };
      etInstances.push(this);
    };
    /**
     * A static function of the NYTD.EventTracker class, which returns all the
     * EventTracker instances created.
     * @namespace NYTD.EventTracker
     * @method getAllInstances
     * @return {Array} An array containing all EventTracker instances created
     */
    etClass.getAllInstances = function () {
      return etInstances;
    };
    return etClass;
  })();

/*jslint browser: true, devel: true, maxerr: 50, indent: 3 */
/*global NYTD, includeJsFile */
(function (root, factory) {
   "use strict";
   var
      env = null,
      success = false,
      NYTD = root.NYTD,
      getHost,
      i,
      requirejs_valid,
      required_libs = ["foundation/hosts"],
      requirejs_track_lib_name = "foundation/lib/tracking";

   // Define the function that handles the environment discovery.
   getHost = function () {
      var
         host = null,
         STATIC_HTTP = {
            "prd": "//static01.nyt.com",
            "stg": "//static.stg.nytimes.com",
            "dev": "//static.dev.nytimes.com"
         },
         STATIC_HTTPS_PROD = "//static.nytimes.com";

      // By default, host points to Production.
      if (location.protocol === "https:") {
         host = STATIC_HTTPS_PROD;
      } else {
         host = STATIC_HTTP["prd"];
      }

      // Get the environment from NYTD.env
      if (typeof NYTD === "object") {
         if (typeof NYTD.env === "string") {
            env = NYTD.env;
         } else if (typeof NYTD.Host === "object" && typeof NYTD.Host.getEnv === "function") {
            env = NYTD.Host.getEnv();
         }
      }
      // Check the environment.
      if (env !== null) {
         switch (env) {
            case "staging":
            case "stg":
               host = STATIC_HTTP["stg"];
               break;
            case "development":
            case "dev":
               host = STATIC_HTTP["dev"];
               break;
         }
      } else {
         // Environment is not available, use the URL location.
         if (/\.stg\.nytimes\.com$/.test(location["hostname"]) === true) {
            host = STATIC_HTTP["stg"];
         } else if (/\.dev\.nytimes\.com$/.test(location["hostname"]) === true) {
            host = STATIC_HTTP["dev"];
         }
      }

      // Return the hostname.
      return host;
   };

   // Retrieve hosts from require js library.
   requirejs_valid = true;
   if (typeof require === "function" && typeof require.defined === "function") {
      if (typeof define === "function" && typeof define.amd === "object" && typeof requirejs === "function") {
         // Need to check if foundation/hosts is defined.
         for (i = 0; i < required_libs.length; i += 1) {
            requirejs_valid = requirejs_valid && (requirejs.defined(required_libs[i]) === true);
         }
         if (requirejs_valid === true) {
            // For development purposes, undefined the requirejs_track_lib_name.
            requirejs.undef(requirejs_track_lib_name);
            define(
               requirejs_track_lib_name,
               required_libs,
               function (hosts) {
                  var
                     host = null;

                  if (typeof hosts === "object" && typeof hosts.js === "string") {
                     host = hosts.js;
                  } else {
                     host = getHost();
                  }
                  return host;
               }
            );

            // Call the function to set up the lib.
            require(
               [requirejs_track_lib_name],
               function (host) {
                  // Load from required hosts.
                  factory(host);
               }
            );
         } else {
            factory(getHost());
         }

         // Confirmation that factory was called.
         success = true;
      }
   }

   // // If define and requirejs functions doesn't exists.
   if (success === false) {
      factory(getHost());
   }
}(
   this,
   function (host) {
      "use strict";
      var
         src,
         script, loadList;

      // Host.jshost is not reliable.
      if (/\/\/www\.(stg\.|dev\.)?nytimes\.com$/.test(host) === true) {
         host = host.replace(/\/\/www\.(stg\.|dev\.)?nytimes\.com$/, "//static01.$1nyt.com");
      }

      // Load the script.
      loadList = [
          {src : host + "/bi/js/analytics/EventTracker.js", async: false},
          {src : host + "/bi/js/tagx/tagx.js", async: true}
        ];

      for(var s = 0; s < loadList.length; s++) {
        src = loadList[s].src;
        if (typeof includeJsFile === "function") {
                includeJsFile(src, loadList[s].async);
        } else {
           // Include manually.
           script = document.createElement("script");
           script.src = src;
           document.body.appendChild(script);
        }
      }
   }
));

/* END ANALYTICS TRACKING */
/* NOTE: ALL NEW CODE NEEDS TO BE ADDED ABOVE THIS LINE */
}
