//tealium universal tag - utag.loader ut4.39.201706260611, Copyright 2017 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_ikea_us-main=(\/\/tags\.tiqcdn\.com\/utag\/ikea\/[^\S;]*)")){if(RegExp.$1.indexOf("/prod/") === -1) {ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/ikea/us-main/prod/';}}})();}catch(e){};try{
/*
 * @author: kevin thomas faurholt
 * 
 * global settinga
 * 
 * extension: global-utag-settings
 * 
 * purpose: manage global utag config settings
 * 
 * scope: pre-loader (important!)
 */
window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};

// set load rules to re-evaluate after "all tags" scoped extensions
window.utag_cfg_ovrd.load_rules_at_wait = true;

// disabled tealium scripts from loading on preview.ikea.com pages
if (document.domain == 'preview.ikea.com'){ window.utag_cfg_ovrd.noload = true; }
}catch(e){};
if(!utag_condload){try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: 1.global-data-sources
 *
 * extension purpose:
 * in agreement with magnus dahl (primary owner) the data layer should
 * be kept at bare minimum, with just enough data sources needed for running
 * basic remarketing tags
 *
 * scope: preloader (important!)
 */
if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};
window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };

window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.queryparam = window.TEALIUM.queryparam || function(key) { var regex = new RegExp("(?:[?]|&|;)" + key + "=([^&#;]+)", "i"); var match = document.URL.match(regex); return match && match[1] ? match[1] : ""; };

try {

  var metadata = {};

  // this meta tag IRWStats.pageName is not
  metadata.page_name = $$("meta[name='IRWStats.pageName']")[0];

  // use internal page type to uniquely identify the checkout funnel pages
  // note that some pages does not have an internal page type, e.g. pages after login
  metadata.page_type = $$("meta[name='IRWStats.internalPageType']")[0] || $$("meta[name='IRWStats.pageType']")[0];

  // site specific data sources
  if ($$("meta[name='IRWStats.subCategoryContainer']")[0]) {
    // category pages
    // 3 levels: http://www.ikea.com/gb/en/catalog/categories/departments/bedroom/16284/
    // 4 levels: http://www.ikea.com/gb/en/catalog/categories/departments/living_room/10670/
    metadata.site_level_1 = $$("meta[name='IRWStats.category']")[0];
    metadata.site_level_2 = $$("meta[name='IRWStats.subCategoryContainer']")[0];
    metadata.site_level_3 = $$("meta[name='IRWStats.subCategory']")[0];
    metadata.site_level_4 = $$("meta[name='IRWStats.chapter']")[0];
  }
  else {
    // 5 levels: http://www.ikea.com/gb/en/catalog/categories/departments/workspaces/18962/
    // 5 levels: http://www.ikea.com/gb/en/catalog/categories/departments/living_room/12153/
    // 5 levels: http://www.ikea.com/gb/en/catalog/categories/departments/hallway/22801/
    metadata.site_level_1 = $$("meta[name='IRWStats.category']")[0];
    metadata.site_level_2 = $$("meta[name='IRWStats.subCategory']")[0];
    metadata.site_level_3 = $$("meta[name='IRWStats.chapter']")[0];
    metadata.site_level_4 = $$("meta[name='IRWStats.system']")[0];
    metadata.site_level_5 = $$("meta[name='IRWStats.systemChapter']")[0];
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////

  // window.irwstats_locale is used by the profile loader snippet!
  var futureproof = null,
    source = null,
    content = "",

    site = window.irwstats_locale.split("_"),

    visit_country =  (site[1] || ""),
    visit_language = (site[0] || ""),

    page_path = document.location.pathname.replace(new RegExp("/" + visit_country + "/" + visit_language, "i"), ""),
    fallback_page_name = [];

  window.TEALIUM.datalayer.view.visit_country =  visit_country.toLowerCase();

  window.TEALIUM.datalayer.view.visit_language = visit_language.toLowerCase();

  window.TEALIUM.datalayer.view.page_path = page_path.toLowerCase();
  
  window.TEALIUM.datalayer.view.site_platform = "web"; //mikael 2017-03-08 : populate site_platform for old-web
  
  for (source in metadata) {

    if (metadata.hasOwnProperty(source)) {

      if (metadata[source] !== undefined) {
        
        if (!metadata[source].readAttribute || !metadata[source].getAttribute) {
          
          var error = { "stack" : "Prototype Framework Error:\n\t" };
          
          error.stack += "element: metadata[" + source + "].readAttribute missing!\n\t";
          
          window.TEALIUM.log("error", error);
        }

        content = metadata[source].readAttribute("content").toLowerCase();

        // single quote values can't be used in loadrules
        // so got to remove these from the data sources
        content = content.replace(/'/g, "");

        if (source === "page_name") {

          content = content.replace(/[|]/g, ">");
        }
        else if (source === "page_type") {

          // shopping cart
          if (/ecom-step0/.test(content)) {

            content = "shopping cart";
          }
          // checkout : step1 : address
          else if (/ecom-welcome/.test(content)) {

            content = "checkout > step1";

            window.TEALIUM.datalayer.view.checkout_event = "begin";
          }
          // checkout : step2 : delivery
          else if (/ecom-step3/.test(content)) {

            content = "checkout > step2";
          }
          // checkout : step3 : review
          // update: ikea it removed utag from new payment page
          //else if (/ecom-step4/.test(content)) {

          //  content = "checkout > step3";
          //}
          // checkout : step4 : order confirmation page
          else if (/ecom-step5/.test(content)) {

            content = "checkout > step4";
            
            window.TEALIUM.datalayer.view.checkout_event = "complete";
          }
          else {

            // set page type to meta data page type by default
            content = $$("meta[name='IRWStats.pageType']")[0].readAttribute("content").toLowerCase();
          }
        }
        else if (/site_level/.test(source)) {
          // create a breadcrumb structured fallback
          fallback_page_name.push(content);
        }

        window.TEALIUM.datalayer.view[source] = content;
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////

  // !WARNING! there are many pagNeame exceptions. will try handle the obvious ones with some simple checks
  // or alternatively fall back to use window.s.pageName if this become a problem

  window.TEALIUM.datalayer.view.page_name = window.TEALIUM.datalayer.view.page_name || fallback_page_name.join(">");

  // is a front page
  if ($$("meta[name='IRWStats.front']")[0]) {

    if (!/>front$/.test(window.TEALIUM.datalayer.view.page_name)) {

      window.TEALIUM.datalayer.view.page_name += ">front";
    }
  }


  // search specific data sources
  if (window.TEALIUM.datalayer.view.page_type === "search") {
    // search result page seems to be missing a page name
    // if it is missing, use the pagename which is being sent to sitecatalyst
    window.TEALIUM.datalayer.view.page_name = window.TEALIUM.datalayer.view.page_name || "search>products>search result 1";
  }

  // campaign specific data sources
  var campaign_internal = window.TEALIUM.queryparam("icid");

  if (campaign_internal) {

    window.TEALIUM.datalayer.view.campaign_internal = window.decodeURIComponent(campaign_internal);
  }

  var campaign_external = window.TEALIUM.queryparam("cid");

  if (campaign_external) {

    window.TEALIUM.datalayer.view.campaign_external = window.decodeURIComponent(campaign_external);
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // lastly, copy new web supported data layer onto utag_data
  /////////////////////////////////////////////////////////////////////////////////////////////////

  window.utag_data = window.utag_data || {};

  for (futureproof in window.TEALIUM.datalayer.view) {

    if (window.TEALIUM.datalayer.view.hasOwnProperty(futureproof)) {

      source = window.TEALIUM.datalayer.view[futureproof];

      // if the source is an array, we need a copy
      if (source.join) {

        source = source.slice(0);
      }

      window.utag_data[futureproof] = source;
    }
  }
}
catch(e) {

  window.TEALIUM.log("error", e);
}


})(); // end
}catch(e){}};
if(!utag_condload){try{
/*
 * @author: kevin thomas faurholt - tealium, inc.
 * @extension: 3. suppress-view-calls-on-certain-pagetypes
 *
 * @purpose:
 *   suppress implicit call to utag.view due to either asyncronious ajax requests
 *   needed or the framework will trigger trackEvent itself when it is ready.
 *
 * @extension scope: preloader (!important)
 */
(function() {

  var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

  if (page_type) {

    page_type = ("" + page_type.readAttribute("content")).toLowerCase();
  }
  else {

    page_type = "unknown";
  }

  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};

  switch(page_type) {
    
    // department pages
    case "range-category" :
    // category pages
    case "range-category-series" :
    // search result page
    case "search" :
    // cart page
    case "ecom-step0" :
    // list page
    case "shopping list" :
    // product information page
    case "pip" :
    // order confirmation page
    case "ecom-step5" :
      // turn off implicit call to utag.view
      window.utag_cfg_ovrd.noview = true;
      break;
    
    default :
      // turn on implicit call to utag.view by default
      window.utag_cfg_ovrd.noview = false;
  }

}());
}catch(e){}};
if(!utag_condload){try{
(function() {

  /*
   * [global-web-datalayer]
   * @author: kevin thomas faurholt - tealium, inc.
   *
   * extension: utag-data-console-logger-v2
   *
   * extension purpose: print future supported data sources to console
   *
   * extension scope: pre-loader (important!)
   */
  if (!window.irwstats_locale) { return true; } // old web only

  window.TEALIUM = window.TEALIUM || {};
  
  window.TEALIUM.log = window.TEALIUM.log || function(type, msg) {
  
    try {

      var message = "TEALIUM LOG::";

      if (type === "error") { 

        message += "Something unexpected happened."; 
        message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
        message += "\n\nat url: " + document.URL;

        // error reporting to prop27
        var s = window.s;
        var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
      }
      else {
        message += msg;
      }

      var logger = window.console[type] || window.console.log;

      logger.call(window.console, message);
    }
    catch (e) {

    }
  };
  
  window.TEALIUM.console = window.TEALIUM.console || {};
  window.TEALIUM.console.log = window.TEALIUM.console.log || function(tealium_event) {
  
    try {
      if (tealium_event === "maxymiser"){return true;}
      if (/prod/.test(window.utag.cfg.path) && !/tealium_debug/.test(document.cookie)) { return true; }
      if (window.TEALIUM.noview) { return true; }
      if (window.console === undefined) { return true; }
      window.TEALIUM.console.run_once = 1;
      var datalayer = {},
        module,
        logger = window.console.info || window.console.log;

      logger.call(console, "\n--------------- data sources " + utag.cfg.v + " [global-web-datalayer] " + tealium_event + " request: ---------------\n");
       
      // new data format
      var event_module = window.TEALIUM.datalayer.event || null;

      if (event_module) {

        module = window.TEALIUM.datalayer.moduledata[event_module];

        Object.extend(datalayer, module.events[module.events.length -1]);
      }
      else {
        
        if (tealium_event === "view") {
          
          Object.extend(datalayer, window.TEALIUM.datalayer.view);
        }
      }
            
      var property, keys = [], key, data;

      for (property in datalayer) {

        if (datalayer.hasOwnProperty(property)) {

          keys.push(property);
        }
      }

      keys = keys.sort();

      for (var i = 0, klen = keys.length; i < klen; i++) {

        key = keys[i];

        data = datalayer[key];

        if (data !== undefined && data !== "" && typeof data !== "function") {

          logger.call(window.console, key + " = " + JSON.stringify(data));
        }
      }
     
    }
    catch(e) {
      
      window.TEALIUM.log("error", e);
    }

  };

}()); // end
}catch(e){}};
if(!utag_condload){try{
/*
 * @author: kevin thomas faurholt - tealium, inc.
 * @extension: suppress-logger-from-logging-prematurely
 * @purpose:
 *   since the callback is running in all tags scope, on certain
 *   pages, we have to wait and not print out to console just yet
 *
 * @extension scope: preloader (important!)
 */
(function() {

  window.TEALIUM = window.TEALIUM || {};
  
  var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");
  
  if (page_type) {
    page_type = ("" + page_type.readAttribute("content")).toLowerCase();
  } 
  else {
    page_type = "unknown";
  }

  if (/^(search)$/i.test(page_type)) { window.TEALIUM.noview = true; }
  else if (/^(range-category|range-category-series)$/i.test(page_type)) { window.TEALIUM.noview = true; }
  else if (/pip/i.test(page_type)) { window.TEALIUM.noview = true; }
  else if (page_type === "shopping list") { window.TEALIUM.noview = true; }
  else if (page_type === "ecom-step0") { window.TEALIUM.noview = true; }
}());
}catch(e){}};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"ikea.us-main",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_ikea.us-main_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(a, b, c, d, f){
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = b || utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        // temporary alias variables
        o["_t_visitor_id"]=o["cp.utag_main_v_id"];
        o["_t_session_id"]=o["cp.utag_main_ses_id"];
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        try{
          o["ut.account"] = utag.cfg.utid.split("/")[0];
          o["ut.profile"] = utag.cfg.utid.split("/")[1];
          o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }
      },
      RD: function(o, a, b, c, d) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        // only update cookie once per page
        if(!utag.loader.rd_flag){
          a = (new Date()).getTime();
          b = utag.loader.RC();
          c = a + parseInt(utag.cfg.session_timeout);
          d = a;
	
	  if(!b.utag_main){
	    b.utag_main={};
	  }else if(b.utag_main.ses_id&&typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a){
	    delete b.utag_main.ses_id;
	  }
	
          if(!b.utag_main.v_id){
            b.utag_main.v_id=utag.ut.vi(a);
          }

          if(!b.utag_main.ses_id){
            b.utag_main.ses_id=d+'';
            b.utag_main._ss=b.utag_main._pn=1;
            b.utag_main._sn=1+parseInt(b.utag_main._sn || 0);
          }else{
            d=b.utag_main.ses_id;
            b.utag_main._ss=0;
            b.utag_main._pn=1+parseInt(b.utag_main._pn);
            b.utag_main._sn=parseInt(b.utag_main._sn);
          }

          if(isNaN(b.utag_main._sn) || b.utag_main._sn<1){b.utag_main._sn=b.utag_main._pn=1}

          b.utag_main._st = c+'';

          utag.loader.SC("utag_main", {"v_id": b.utag_main.v_id, "_sn" : b.utag_main._sn, "_ss" : b.utag_main._ss, "_pn" : b.utag_main._pn + ";exp-session", "_st": c, "ses_id": d + ";exp-session"});
        }

        utag.loader.rd_flag=1;

        this.RDqp(o);
        this.RDmeta(o);
        this.RDcp(o,b);
        this.RDdom(o);
        this.RDut(o);
        this.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        utag.db_log=[];
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(utag.data);
        utag.loader.loadrules();
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }
        utag.cfg.noview = false;

        utag.ut.merge(b,this.df,0);
        // update values for AJAX pages
        utag.loader.RDqp(b);
        utag.loader.RDcp(b);
        utag.loader.RDdom(b);
        utag.loader.RDmeta(b);
        utag.loader.RDut(b,a);
        utag.loader.RDva(b);

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( {event : ”view”, data: {myvar : “myval” }, cfg: {uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules
            sendTag(a, b, d);
          }
        }else if(utag.cfg.load_rules_ajax){
          // right now, load rules use utag.data (replace items in utag.data with items in b)
          this.RE(a,b,"blr");
          utag.ut.merge(utag.data,b,1);
          // clear and re-run load rules
          this.LR(b);
          this.RE(a,b,"alr");
          // TBD: Run through the "bwq" Extensions again here? (For now, require "bwq" is also set to "run once"?) 
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
        // update end of session timestamp in cookie
        utag.loader.SC("utag_main", { "_st": ((new Date()).getTime() + parseInt(utag.cfg.session_timeout)) });

      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l) {
        a=document;
        if (o.type=="iframe") {
          b = a.createElement("iframe");
          o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" };
          for( l in utag.loader.GV(o.attrs) ){
            b.setAttribute( l, o.attrs[l] )
          }
          b.setAttribute("src", o.src);
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b=new Image();b.src=o.src;
          return;
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
          for( l in utag.loader.GV(o.attrs) ){
            b[l] = o.attrs[l]
          }
          b.src = o.src;
        }
        if(o.id){b.id=o.id};
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to "+l+": "+o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b)
          }
        }
      }
    }
  };
  utag.o['ikea.us-main']=utag;
  utag.cfg = {
    template : "ut4.39.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/ikea/us-main/prod/",
    utid: "ikea/us-main/201706260611"
  };
  utag.cfg.v = utag.cfg.template + "201706260611";
  utag.cond={100:0,101:0,102:0,104:0,106:0,108:0,109:0,126:0,127:0,129:0,89:0,95:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.utag.cfg.path']=utag.cfg.path}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '100':try{c[100]|=(d['page_type'].toString().toLowerCase()=='shopping cart'.toLowerCase())||(d['page_type'].toString().toLowerCase()=='checkout > step1'.toLowerCase())||(d['page_type'].toString().toLowerCase()=='checkout > step2'.toLowerCase())||(d['page_type'].toString().toLowerCase()=='checkout > step3'.toLowerCase())||(d['page_type'].toString().toLowerCase()=='checkout > step4'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '101':try{c[101]|=(d['page_name'].toString().toLowerCase()=='crm>my profile>my profile information'.toLowerCase()&&d['previous_page_name'].toString().toLowerCase()=='crm>create user'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '102':try{c[102]|=(d['page_type'].toString().toLowerCase()=='checkout > step4'.toLowerCase()&&d['dom.domain'].toString().toLowerCase().indexOf('pirw'.toLowerCase())<0&&d['dom.domain'].toString().toLowerCase().indexOf('preview'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '104':try{c[104]|=(d['page_path'].toString().toLowerCase().indexOf('products'.toLowerCase())>-1&&d['page_path'].toString().toLowerCase().indexOf('allproducts'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '106':try{c[106]|=(/ikea\-usa\.com|89degrees\.net/.test(d['ut.domain'])&&d['ut.event'].toString().toLowerCase()=='view'.toLowerCase()&&d['site_platform'].toString().toLowerCase()=='us_cat16'.toLowerCase()&&d['page_name'].toString().toLowerCase()=='us_cat16>ikea us catalog>signup'.toLowerCase())||(/ikea\-usa\.com|89degrees\.net/.test(d['ut.domain'])&&d['ut.event'].toString().toLowerCase()=='link'.toLowerCase()&&d['site_platform'].toString().toLowerCase()=='us_cat16'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '108':try{c[108]|=(d['page_type'].toString().toLowerCase().indexOf('product information page'.toLowerCase())>-1)||(d['page_type'].toString().toLowerCase().indexOf('category'.toLowerCase())>-1)||(d['page_type'].toString().toLowerCase().indexOf('shopping list'.toLowerCase())>-1)||(d['page_type'].toString().toLowerCase().indexOf('shopping cart'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '109':try{c[109]|=(d['page_type'].toString().toLowerCase().indexOf('crm'.toLowerCase())>-1&&d['site_level_2'].toString().toLowerCase().indexOf('my profile'.toLowerCase())>-1&&d['site_level_3'].toString().toLowerCase().indexOf('my profile information'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '126':try{c[126]|=(typeof d['cp.89DFisherGOCookie']=='undefined'&&d['page_path'].toString().toLowerCase().indexOf('store/fishers/indexPage'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '127':try{c[127]|=(typeof d['cp.89DJacksonvilleGOCookie']=='undefined'&&d['page_path'].toString().toLowerCase().indexOf('store/jacksonville/indexPage'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '129':try{c[129]|=(typeof d['cp.89DGrandPrairieGOCookie']=='undefined'&&d['page_path'].toString().toLowerCase().indexOf('store/grand_prairie/indexPage'.toLowerCase())>-1)||(typeof d['cp.89DGrandPrairieGOCookie']=='undefined'&&d['page_path'].toString().toLowerCase().indexOf('store/grand_prairie/indexPage_Spanish'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '89':try{c[89]|=(typeof d['page_type']!='undefined'&&d['page_type']!=''&&d['page_type'].toString().toLowerCase()=='product information page'.toLowerCase())||(typeof d['page_type']!='undefined'&&d['page_type']!=''&&d['page_type'].toString().toLowerCase().indexOf('category'.toLowerCase())>-1)||(typeof d['page_type']!='undefined'&&d['page_type']!=''&&d['page_type'].toString().toLowerCase()=='department'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '95':try{c[95]|=(d['dom.query_string'].toString().toLowerCase().indexOf('userid'.toLowerCase())>-1)||(d['dom.query_string'].toString().toLowerCase().indexOf('modaltest=89d'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * @extension: global-filter-security-risk-pages
 *
 * @purpose:
 * an "easy-to-manage" way to exclude tealium tags from loading on certain pages,
 * although allowing certain tags and letting entire markets to load tags on all pages.
 *
 * tags and markets are subject to change. hence we would need some dynamic way to keep
 * rules in check in one place.
 *
 * @requires:
 * preloader : window.utag_cfg_ovrd.load_rules_at_wait = true
 *
 * @extension scope: all tags
 */

// CONFIG START //////////////////////////////////////////////////////////////

// IRW desktop web only
if (!window.irwstats_locale) { return true; }

// market
var market = window.irwstats_locale.split("_")[1].toLowerCase();

// block all tags from loading on these pagenames
var globalexclusionlist = {};

globalexclusionlist[market] = {
  "login>front" : 1,
  "checkout>review your order and pay" : 1,
  "crm>my profile>edit email" : 1,
  "crm>my profile>delete user" : 1,
  "crm>create user" : 1,
  "login>create profile" : 1,
  "login>create profile>confirmation page" : 1,
  "customer_service>createuser>front" : 1,
  "login>reset password" : 1,
  "crm>my profile>change password" : 1,
  "login>reset password confirmation" : 1,
  "login>reset password>confirmation page" : 1,
  "login>changepassword" : 1
};

// except for these tags
var globalallowedtags = {

  // allow all tags exception
  "gb" : { "all" : 1 },
  "sa" : { "all" : 1 },
  "us" : { "all" : 1 },

  // allow SOASTA tags exception
  "au" : { "9" : 1 },
  "es" : { "15" : 1 },
  "se" : { "48" : 1 },

  // disallow all tags
  "aa" : { "none" : 1 },
  "at" : { "none" : 1 },
  "be" : { "none" : 1 },
  "ca" : { "none" : 1 },
  "cn" : { "none" : 1 },
  "hr" : { "none" : 1 },
  "cz" : { "none" : 1 },
  "dk" : { "none" : 1 },
  "eg" : { "none" : 1 },
  "fi" : { "none" : 1 },
  "fr" : { "none" : 1 },
  "de" : { "none" : 1 },
  "hk" : { "none" : 1 },
  "hu" : { "none" : 1 },
  "id" : { "none" : 1 },
  "ie" : { "none" : 1 },
  "it" : { "none" : 1 },
  "jp" : { "none" : 1 },
  "jo" : { "none" : 1 },
  "kw" : { "none" : 1 },
  "lt" : { "none" : 1 },
  "my" : { "none" : 1 },
  "ma" : { "none" : 1 },
  "nl" : { "none" : 1 },
  "no" : { "none" : 1 },
  "pl" : { "none" : 1 },
  "pt" : { "none" : 1 },
  "qa" : { "none" : 1 },
  "ro" : { "none" : 1 },
  "ru" : { "none" : 1 },
  "sg" : { "none" : 1 },
  "sk" : { "none" : 1 },
  "kr" : { "none" : 1 },
  "ch" : { "none" : 1 },
  "tw" : { "none" : 1 },
  "th" : { "none" : 1 },
  "ae" : { "none" : 1 }


};

// CONFIG END ////////////////////////////////////////////////////////////////

var allowedtags = {}, exclusionlist = {};

try {
  // local settings take precedence. must be set in pre-loader extension  
  allowedtags[market] = window.TEALIUM.profile.allowedtags[market] || globalallowedtags[market]; 
  exclusionlist[market] = window.TEALIUM.profile.exclusionlist[market] || globalexclusionlist[market];
}
catch(e) {
  // if no local settings, global settings should kick in
  allowedtags[market] = globalallowedtags[market];
  exclusionlist[market] = globalexclusionlist[market];
}

// if no setting is specified, allow all tags by default until instructed
// otherwise
if (!allowedtags[market]) { allowedtags[market] = { "all" : 1 }; }

// copy original tag config
var cfg = Object.extend({}, utag.loader.cfg),
  // copy original init function
  initcfg = utag.loader.initcfg,
  // secured config
  securedcfg = {},
  // tag
  tag,
  // setting
  setting;

for (tag in cfg) {

  if (cfg.hasOwnProperty(tag)) {

    securedcfg[tag] = {};

    for (setting in cfg[tag]) {

      if (setting === "load") {

        securedcfg[tag][setting] = 0;
      }
      else {

        securedcfg[tag][setting] = cfg[tag][setting];
      }
    }
  }
}

for (tag in securedcfg) {

  if (allowedtags[market]["none"]) {

    securedcfg[tag].load = 0;
  }
  else if (allowedtags[market]["all"]) {

    securedcfg[tag].load = cfg[tag].load;
  }
  else if (allowedtags[market][tag]) {

    securedcfg[tag].load = cfg[tag].load;
  }
}

if (exclusionlist[market][b.page_name]) {

  // overload initcfg with our modified config
  utag.loader.initcfg = function() {

    utag.loader.cfg = securedcfg;
  };
}
else {

  utag.loader.initcfg = initcfg;
}
},
function(a,b,c,d){
  b._ccity='';
  b._ccountry='';
  b._ccurrency='';
  b._ccustid='';
  b._corder=(typeof b['order_id']!='undefined')?b['order_id']:'';
  b._cpromo='';
  b._cship='';
  b._cstate='';
  b._cstore='';
  b._csubtotal=(typeof b['order_total']!='undefined')?b['order_total']:'';
  b._ctax='';
  b._ctotal=(typeof b['order_total']!='undefined')?b['order_total']:'';
  b._ctype='';
  b._czip='';
  b._cprod=(typeof b['product_ids']!='undefined'&&b['product_ids'].length>0)?b['product_ids']:[];
  b._cprodname=(typeof b['product_item_names']!='undefined'&&b['product_item_names'].length>0)?b['product_item_names']:[];
  b._cbrand=[];
  b._ccat=[];
  b._ccat2=[];
  b._cquan=(typeof b['product_units']!='undefined'&&b['product_units'].length>0)?b['product_units']:[];
  b._cprice=(typeof b['product_prices_vat']!='undefined'&&b['product_prices_vat'].length>0)?b['product_prices_vat']:[];
  b._csku=(typeof b['product_ids']!='undefined'&&b['product_ids'].length>0)?b['product_ids']:[];
  b._cpdisc=[];
  if(b._cprod.length==0){b._cprod=b._csku.slice()};
  if(b._cprodname.length==0){b._cprodname=b._csku.slice()};
  function tf(a){if(a=='' || isNaN(parseFloat(a))){return a}else{return (parseFloat(a)).toFixed(2)}};
  b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: re-evaluate-loadrules-on-events
 * 
 * triggers currently only on "link" and data include a known
 * event type data source
 */
if (!window.irwstats_locale) { return true; } // old web only

if (a === "link") {

  var is_event = false,
    property;

  for (property in b) {

    if (b.hasOwnProperty(property)) {

      if (/^.+_event$/.test(property)) {

        is_event = true;

        break;
      }
    }
  }

  if (!is_event) { return true; }

  // remove any previous "link" events from utag.data to ensure
  // previous "link" conversion tags to reload again. this can be the case
  // where a stock check is made (fire 1 tag) and then
  // add to list on the same page. two different conversion scenarios.
  for (property in utag.data) {

    if (utag.data.hasOwnProperty(property)) {

      if (/.+_event$/.test(property)) {
        
        delete utag.data[property];
      }
    }
  }

  // merge in details about the new event. this is needed
  // for being able to re-evaluate load rules due to a hardcoded
  // utag.data argument inside utag.js
  for (property in b) {

    if (b.hasOwnProperty(property)) {

      window.utag.data[property] = b[property];
    }
  }

  // re-evaluate loadrules again
  window.utag.handler.LR();

  for (property in window.utag.loader.cfg) {

    if (window.utag.loader.cfg.hasOwnProperty(property)) {

      // if the tag is not already loaded
      if (window.utag.sender[property] === undefined) {

        if (window.utag.loader.cfg[property].load === 1 && window.utag.loader.cfg[property].s2s !== 1) {

          // be aware, the callback from tag template will trigger an implicit
          // tealium "view" event
          window.utag.loader.AS({ "id" : property, "load" : 1 });
        }
      }
    }
  }
}
},
function(a,b){
(function(a, b) {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: utag-data-console-caller
 *
 * extension purpose: print supported data sources to console
 *
 * extension scope: all tags (important!)
 */
  if (!window.irwstats_locale) { return true; } // old web only
  
  if (!window.TEALIUM.loaded) {

    window.TEALIUM.loaded = 1;
    
    // add to list/cart via direct article number input
    if (/IrwInterestItemAddByPartNumber/.test (document.URL)) {
      
      window.TEALIUM.console.log("link");
    }
    else {
     
      window.TEALIUM.console.log("view");
    }
    
    //Event.observe(window, "load", function(){
    //  if (!window.TEALIUM.console.run_once) {
    //    window.TEALIUM.console.log("view");
    //  }
    //});
  }
  else {
    
    window.TEALIUM.console.log(a);
  }
}(a, b)); // end
},
function(a,b){
/*Maxymiser Call Listener
*Created by : Kevin Faurhault
*scope : all tags
*execution: After Load Rules

*/

//listen to maxymiser iniating utag.track()

      if (a === "maxymiser") {
  
  window.TEALIUM = window.TEALIUM || {};

  window.TEALIUM.maxymiser = window.TEALIUM.maxymiser || {};


    var campaign = b["MMExperience"] || "";
    var variant_and_element =  b[campaign] || "";

    if (!window.TEALIUM.maxymiser[campaign]) {

      window.TEALIUM.maxymiser[campaign] = 1;



// check for Adobe Analytics being initialized & initiate the s.tl() function used by adobe analytics, for tracking

      if (window.s && window.s.tl) {

        var linkTrackVars = window.s.linkTrackVars;
	var linkTrackEvents = window.s.linkTrackEvents;
	var events = window.s.events;
	var eVar7 = window.s.eVar7;
	var eVar72 = window.s.eVar72;
	var eVar73 = window.s.eVar73;
	var prop8 = window.s.prop8;
	var prop45 = window.s.prop45;
	
        s.linkTrackVars="eVar72,eVar73,eVar7,prop8,prop45,events";
        s.linkTrackEvents="event96";
        s.eVar72 = campaign; //maxymiser campaign name
        s.eVar73 = variant_and_element; //combination of maxymiser variant and element name
        s.eVar7 = s.prop8 = utag.data.visit_country; //2 letter country code
        s.prop45 = 'web'; //platform
        s.events = "event96";//maxymiser event

        
        s.tl(true, 'o', 'maxymiser campaign'); //initiate adobe analytics event tracking

        s.linkTrackVars = linkTrackVars; //revert local trackvar settings to original page settings
	s.linkTrackEvents = linkTrackEvents;
	s.events = events;
	s.eVar7 = eVar7;
	s.eVar72 = eVar72;
	s.eVar73 = eVar73;
	s.prop8 = prop8;
	s.prop45 = prop45;
	
      }


      //utag.link(data); //placeholder for sending this using tealium tracking function instead of adobe specific function
    }
  
}
},
function(a,b){
if(utag.data["ut.profile"]){
if(utag.data["ut.profile"].substring(0,2) == utag.data["visit_country"])
{
  utag.data["soasta_load"] = "true";
}
else{
utag.data["soasta_load"] = "false";
}
}
else{utag.data["soasta_load"] = "true";}
},
function(a,b,c,d,e,f,g){d=b['page_name'];if(typeof d=='undefined')return;c=[{'checkout>select billing address':'1'},{'checkout>select delivery options':'1'},{'checkout>review your order and pay':'1'},{'checkout>confirmation':'1'},{'checkout>welcome to checkout':'1'},{'checkout>shopping cart':'1'},{'home page':'1'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['salecycle_dummy']=c[e][f];m=true};};if(m)break};if(!m)b['salecycle_dummy']='0';},
function(a,b){ try{ if((typeof b['product_ids']!='undefined'&&b['product_ids']!=''&&b['page_type'].toString().toLowerCase()=='product information page'.toLowerCase())){try{b['spongecell_product_ids']=b.product_ids.join("|")}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){b['previous_page_name']=b['cp.utag_main__prevpage'];utag.loader.SC('utag_main',{'_prevpage':b['page_name']+';exp-1h'})},
function(a,b){ try{ if((b['page_name'].toString().toLowerCase()=='crm>my profile>my profile information'.toLowerCase()&&b['previous_page_name'].toString().toLowerCase()=='crm>create user'.toLowerCase())){b['facebook_conversion_event']='NEWCompleteFamilyRegistration'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['qp.userid']!='undefined'&&b['qp.userid']!=''){document.cookie="wasd_89DInfo="+b['qp.userid']+";path=/;domain="+utag.cfg.domain+";expires="+(function(){var d=new Date();d.setTime(d.getTime()+(90*86400000)); return d.toGMTString()})()+"";b['cp.wasd_89DInfo']=b['qp.userid'];}} catch(e){ utag.DB(e) } },
function(a,b){ try{ if((b['dom.referrer'].toString().indexOf('back-to-college')>-1&&b['cart_event'].toString().toLowerCase()=='add_to_list'.toLowerCase())){b['Facebook_BTC_conversions']='add_to_list'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['dom.referrer'].toString().indexOf('back-to-college')>-1&&b['cart_event'].toString().toLowerCase()=='add_to_cart'.toLowerCase())){b['Facebook_BTC_conversions']='add_to_cart'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/*Maxymiser Call Listener
*Created by : Philip Sydhoff @WASD (2/20/2017)
*scope : all tags
*execution: After Load Rules
*purpose: An extension which enables the connection between Maxymiser campaigns and Hotjar
*/

//listen to maxymiser iniating utag.track()

if (a === "maxymiser") {
  
  window.TEALIUM = window.TEALIUM || {};
  
  window.TEALIUM.maxymiser = window.TEALIUM.maxymiser || {};
  
  window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
  var campaign = b["MMExperience"] || "";
  var variant_and_element =  b[campaign] || "";
  var hotjar_triggername = ((campaign + "-" + variant_and_element).replaceAll(" ", "")).replaceAll(":","-");
  hj('trigger', hotjar_triggername);
}
} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"68","blr":0,"end":0},{"alr":1,"bwq":0,"id":"42","blr":0,"end":0},{"alr":1,"bwq":0,"id":"43","blr":0,"end":0},{"alr":1,"bwq":0,"id":"44","blr":0,"end":0},{"alr":1,"bwq":0,"id":"102","blr":0,"end":0},{"alr":0,"bwq":0,"id":"77","blr":1,"end":0},{"alr":1,"bwq":0,"id":"50","blr":0,"end":0},{"alr":1,"bwq":0,"id":"63","blr":0,"end":0},{"alr":1,"bwq":0,"id":"88","blr":0,"end":0},{"alr":1,"bwq":0,"id":"89","blr":0,"end":0},{"alr":1,"bwq":0,"id":"91","blr":0,"end":0},{"alr":1,"bwq":0,"id":"94","blr":0,"end":0},{"alr":1,"bwq":0,"id":"95","blr":0,"end":0},{"alr":1,"bwq":0,"id":"117","blr":0,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"4":{load:1,send:1,v:201701021020,wait:1,tid:13088},"47":{load:1,send:1,v:201704100708,wait:0,tid:13084},"31":{load:utag.cond[89],send:1,v:201512180906,wait:1,tid:20067},"86":{load:utag.cond[95],send:1,v:201608311502,wait:1,tid:20067},"87":{load:utag.cond[100],send:1,v:201705021349,wait:1,tid:20067},"91":{load:utag.cond[101],send:1,v:201607151121,wait:1,tid:6026},"92":{load:1,send:1,v:201605261017,wait:1,tid:7115},"99":{load:utag.cond[102],send:1,v:201605261001,wait:1,tid:19063},"102":{load:1,send:1,v:201607151121,wait:1,tid:6026},"116":{load:1,send:1,v:201701091216,wait:1,tid:2045},"117":{load:utag.cond[106],send:1,v:201701021020,wait:1,tid:19063},"120":{load:utag.cond[108],send:1,v:201704100708,wait:1,tid:20067},"121":{load:utag.cond[109],send:1,v:201701091216,wait:1,tid:20067},"124":{load:1,send:1,v:201703070708,wait:1,tid:8009},"127":{load:utag.cond[104],send:1,v:201706150843,wait:1,tid:20067},"129":{load:utag.cond[126],send:1,v:201705051002,wait:1,tid:20067},"131":{load:utag.cond[127],send:1,v:201705111004,wait:1,tid:20067},"134":{load:utag.cond[129],send:1,v:201706011205,wait:1,tid:20067}};
utag.loader.cfgsort=["4","47","31","86","87","91","92","99","102","116","117","120","121","124","127","129","131","134"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt
 *
 * extension: product-add-to-shopping-cart-shopping-list
 *
 * extension purpose:
 * - intercept products added to basket/shopping list etc
 *   this function window.activateShopListPopup is used widely to deal with a lot of features
 *   hooking into this function, we can detect what is going on when the visitor is clicking on
 *   buttons. the function deals with the following:
 *   save, create, rename, delete, print, add, addAll, email, addToCart, move, selectStore, tipToSelectStore
 *
 * dependencies:
 * - shopping list extension
 *
 * example urls:
 * - http://www.ikea.com/gb/en/catalog/categories/departments/kitchen/series/08003/
 *
 * slideshow add to basket/save to list wrapping container looks like this
 * http://www.ikea.com/gb/en/search/?query=EKARP
 * <div id="prodInfo30180207">..</div> using $("prodInfo" + partNumber)
 * 
 * 
 * @todo: this extension should be refactored to new standard!
 * 
 */

"use strict";

//debugger

if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};
window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };
window.TEALIUM.datalayer.moduledata = window.TEALIUM.datalayer.moduledata || {};

window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

window.TEALIUM.trackEvent = window.TEALIUM.trackEvent || function(category, action, data) {
  
  // register type of event
  var viewdata = window.TEALIUM.datalayer.view,
    event = category + "_event",
    eventdata = {},
    moduledata = window.TEALIUM.datalayer.moduledata,
    force_array = [
      "product_ids", "product_names", "product_item_names",
      "product_prices_vat", "product_units",
      "restapi_partnumbers"
    ],
    tealium_event = null;

  // flag most recent event category; used by console logger to find the most recent eventdata
  window.TEALIUM.datalayer.event = category;

  eventdata[event] = action;

  data = data || {};
    
  for (var i = 0, flen = force_array.length; i < flen; i++) {
    
    if (data[force_array[i]]) {
      
      data[force_array[i]] = data[force_array[i]].join ? data[force_array[i]] : [data[force_array[i]]];
    }
  }
  
  Object.extend(eventdata, data);

  moduledata[category] = moduledata[category] || {};
  moduledata[category].data = moduledata[category].data || {};
  moduledata[category].events = moduledata[category].events || [];
  
  moduledata[category].data = data;
 
  // new web defined event types:
  // cart_event [open | view | add | add_to_favourites | add_all_to_favourites | remove | empty | add_promo]
  // checkout_event [begin | complete]
  // delivery_event [cart | checkout]
  // download_event [download]
  // favourites_event [view | print | email | share | save | add | remove | edit | add_to_cart]
  // local_store_event [changed]
  // page_event [announcement | zoom | slideshow | survey>shown]
  // product_event [view]
  // profile_event [signup_begin | signup_complete | changed_user_type | login | password_lost_begin | password_lost_completed | newsletter_signup_begin | newletter_signup_completed | order_card | cancel_basic | cancel_family | cancel_business]
  // search_event [search | auto_complete]
  // social_event [like | share]
  // stockcheck_event [manual | automatic | back_in_stock]
  // support_event [faq | contact | chat | track_order | click_and_collect | order_catalogue]
  // video_event [video_started | video_completed]
  switch (event) {
    
    case "department_event" :
    case "category_event" :
    
      tealium_event = "view";
      
      Object.extend(eventdata, viewdata);
      
      break;
      
    case "search_event" :
      
      tealium_event = "view";
      
      Object.extend(eventdata, viewdata);
      
      break;
    
    case "product_event" :
    case "slideshow_event" :
    
      tealium_event = "view";
      
      Object.extend(eventdata, viewdata);
      
      break;
    
    case "cart_event" :
    case "list_event" :
      
      tealium_event = action.match(/(view|empty|save|print|email)/) && RegExp.$1 ? "view" : "link";
      
      Object.extend(eventdata, viewdata);
      
      break;
    
    case "stockcheck_event" :
      
      tealium_event = "link";
      
      if (eventdata.stockcheck_mode === "automatic") {
        
        // @todo: if stockcheck_mode === automatic, we need to trigger a view including pagedata
      }
      
      Object.extend(eventdata, moduledata.product.data);
      
      Object.extend(eventdata, viewdata);
      
      break;
    
    default :
      
      tealium_event = "link";
  }
  
  //////////////////////////////////////////////////////////////////////////////
  
  function track(tealium_event, eventdata) {
  
    /* @todo: got a weird "race" condition causing the console log to misfire with 2 utag.view triggers  we need to take a look at that. i can't figure out what is going on right now, but adding a timeout (still not a proper solution) seems to work ok before calling utag.view. */
    (function retry(tealium_event, eventdata, retries) {

      if (retries === 0) {

        window.TEALIUM.log("error", "utag.loader.ended did not make it in time!");

        return false;
      }
      else {

        // privacy manager support
        if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.noload) {

          window.TEALIUM.log("info", "privacy manager is waiting for visitor cookie consent!");

          return false;
        }      
        else if (window.utag && window.utag.loader && window.utag.loader.ended) {

          var data = {};

          // we don't want utag.data stuff in our event history
          // force a new object for utag.track methods
          Object.extend(data, eventdata);

          window.TEALIUM.noview = false;

          window.utag.track(tealium_event, data); 
        }
        else {

          window.setTimeout(function() {

            retry.call(window, tealium_event, eventdata, --retries);

          }, 100);
        }
      }

      return true;
    }(tealium_event, eventdata, 50));
  }

  if (window.TEALIUM.localize !== undefined) {

    // stop utag-logger from firing prematurely
    window.TEALIUM.noview = true;

    window.TEALIUM.localize(function(localdata) {

      Object.extend(eventdata, localdata);

      moduledata[category].events.push(eventdata);
      
      track(tealium_event, eventdata);
    });
  }
  else {
    
    moduledata[category].events.push(eventdata);
    
    track(tealium_event, eventdata);    
  }
  
};


window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { var number = Number(number), p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };

window.TEALIUM.ikea = window.TEALIUM.ikea || {};

/////////////////////////////////////////////////////////////////////////////////////////////////
// MODULES NAMESPACE
/////////////////////////////////////////////////////////////////////////////////////////////////

var module = window.TEALIUM.datalayer.moduledata;


// widely used add to basket / save to list method
if (!window.TEALIUM.ikea.activateShopListPopup) {
  
  window.TEALIUM.ikea.activateShopListPopup = window.activateShopListPopup || undefined;
}

if (window.TEALIUM.ikea.activateShopListPopup && !window.TEALIUM.ikea.activateShopListPopupDefined) {

  window.TEALIUM.ikea.activateShopListPopupDefined = true;

  window.activateShopListPopup = function(action, targetElement, storeId, langId, price, itemRelation, actionBuyable) {

    window.TEALIUM.ikea.activateShopListPopup.apply(window, [action, targetElement, storeId, langId, price, itemRelation, actionBuyable]);

    var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

    if (page_type) {

      page_type = ("" + page_type.readAttribute("content")).toLowerCase();
    }
    else {

      page_type = "unknown";
    }

    var eventdata = {},
      articlenumber = "",
      product_id = "",
      product = "",
      product_description = "",
      product_price = "",
      product_quantity = "",

      actionmap = {
        "add" : "add_to_list",
        "move" : "move",
        "save" : "save",
        "print" : "print",
        "email" : "email",
        "addToCart" : "add_to_cart"
      };

    action = actionmap[action] || "";

    var element_id = targetElement.attributes.id.value;

    var $container = null;

    switch (action) {

      // widely used "add to shopping cart" / "add to shopping list" feature /////////////////////////////
      case "add_to_list" :
      case "add_to_cart" :

        product_id = element_id.replace(/popupShoppingList|slideshowSaveToList|popupAddToCart|slideshowAddToCart/i, "");

        try {

          // slideshow added product ////////////////////////////////////////////////////////
          // normal price: http://www.ikea.com/gb/en/catalog/products/S79894474/
          // click on magnifier class, top right corner of a complementary product
          if (/^slideshow$/.test(element_id)) {

            $container = $("prodInfo" + product_id);

            if ($container) {

              product = window.TEALIUM.clean($container.down("div.prodName"));

              product_description = window.TEALIUM.clean($container.down("div.prodDesc"));

              product_price = window.TEALIUM.clean($container.down("span.priceField1"));
            }
          }

          // search result page ///////////////////////////////////////////////////////////////////
          // http://www.ikea.com/gb/en/search/?query=PATRULL (with family prices)
          // http://www.ikea.com/gb/en/search/?query=SOLSTA
          else if (/^search$/.test(page_type)) {

            $container = $$("div[id='cartContainer" + product_id + "']")[0].up("div");

            if ($container) {

              product = window.TEALIUM.clean($container.down("span.prodName"));

              product_description = window.TEALIUM.clean($container.down("span.prodDesc"));

              product_price = window.TEALIUM.clean($container.down("span.prodPrice"));
            }
          }

          // search result page ///////////////////////////////////////////////////////////////////
          // http://www.ikea.com/gb/en/search/?query=PATRULL (with family prices)
          // http://www.ikea.com/gb/en/search/?query=SOLSTA
          else if (/^product comparison$/.test(page_type)) {

            $container = $$("div[id='cartContainer" + product_id + "']")[0].up("div");

            if ($container) {

              product = window.TEALIUM.clean($container.down("span.prodNameCompare"));

              product_description = window.TEALIUM.clean($container.down("span.prodDescCompare"));

              product_price = window.TEALIUM.clean($container.down("span.prodPriceCompare"));
            }
          }

          // product category listings page ///////////////////////////////////////////////////////
          // series: http://www.ikea.com/gb/en/catalog/categories/series/12562/
          //else if (/^(category|listpage)$/.test(page_type)) {
          else if (/^(range-category|range-category-series)$/.test(page_type)) {

            $container = $(element_id).up(".productDetails");

            if ($container) {

              product = window.TEALIUM.clean($container.down("div.productTitle"));

              product_description = window.TEALIUM.clean($container.down("div.productDesp"));

              product_price = window.TEALIUM.clean($container.down("div.regularPrice"));
            }
          }

          // stock check results page, bottom /////////////////////////////////////////////////////
          // normal price: http://www.ikea.com/gb/en/catalog/availability/S29902933/
          // family price: http://www.ikea.com/gb/en/catalog/availability/80224077/
          else if (/stockcheck-result/.test(page_type)) {

            $container = $$("div.prodDetailMainBlock")[0];

            product = window.TEALIUM.clean($container.down("span.prodName"));

            product_description = window.TEALIUM.clean($container.down("span.prodDesc"));

            product_price = window.TEALIUM.clean($container.down("span.sc_com_price"));
          }

          // product detail page //////////////////////////////////////////////////////////////////
          //else if (page_type === "product information page") {
          else if (/pip/i.test(page_type)) {

            if (window.jProductData) {

              var lookup = window.jProductData.product.items.find(function(object) {

                return object.partNumber == product_id;
              });

              // product detail add to basket / list //////////////////////////////////////////////
              // http://www.ikea.com/gb/en/catalog/products/S79894474/
              if (lookup) {

                product = lookup.name || "";

                product_description = lookup.type || "";

                // @todo: there are no validDesign on list/cart and slideshow view products
                // i currently do not think it is a good idea to add this information to the
                // product item names when it is so inconsistent. disabling for now
                //product_description += lookup.validDesign && lookup.validDesign.length ? ", " + lookup.validDesign.join(", ") : "";

                // future needed snip?
                //var $color = $$("select[id*='dropcolor'] option").find(function(option){ return !!option.selected });
                //if($color) { product_description += ", " + $color.text.strip(); }
          
                product_price = "" + lookup.prices.normal.priceNormal.rawPrice || "";

                // number of products input field
                var $addCartContainer = $("addCartContainer");

                if ($addCartContainer) {

                  if ($addCartContainer.quantity && $addCartContainer.quantity.value) {

                    product_quantity = "" + $addCartContainer.quantity.value;
                  }
                }
              }
              else {

                // complimentary products added to basket/list?
                // http://www.ikea.com/gb/en/catalog/products/S79894474/
                var $complimentary = $$("ul[id*='complementaryProductContainer']")[0];

                var $listitem = $$("li[id*='item_" + product_id + "']")[0];

                if ($listitem && $listitem.up() === $complimentary) {

                  // seen cases where multiple elements share same id. hence the need for collection search
                  product = window.TEALIUM.clean($$("span[id*='txtNameProduct_" + product_id + "']")[0]);

                  product_description = window.TEALIUM.clean($$("span[id*='txtDescrProduct_" + product_id + "']")[0]);

                  product_price = window.TEALIUM.clean($$("span[id*='txtPriceProduct_" + product_id + "']")[0]);
                }
              }
            }
          }

          if (product_id && product && product_description && product_price) {

            eventdata = {};

            eventdata.restapi_partnumbers = product_id;
            
            // sometimes there is a leading s in the product id which should be removed
            eventdata.product_ids = product_id.replace(/^S/i, "");

            // product name should be forced uppercase
            eventdata.product_names = product.toUpperCase();
            
            eventdata.product_item_names = eventdata.product_names;
            eventdata.product_item_names += product_description ? " : " + product_description.toLowerCase() : "";
        
            // decode html entities in the product item name
            eventdata.product_item_names = window.TEALIUM.htmlDecode(eventdata.product_item_names);

            ////////////////////////////////////////////////////////////////////

            // remove non numeric trailing characters
            product_price = product_price.replace(/[^0-9]*$/, "");

            // replace "," separator with a "."
            product_price = product_price.replace(/,/g, ".");

            // if no decimals add some
            if (!/[\.][0-9][0-9]$/.test(product_price)) {

              product_price = product_price + ".00";
            }

            product_price = product_price.replace(/[^0-9]/g, "");

            product_price = product_price / 100;
            
            // enforce 2 decimal places
            product_price = window.TEALIUM.toFixed(product_price, 2);

            ////////////////////////////////////////////////////////////////////

            eventdata.product_prices_vat = product_price;

            eventdata.product_units = product_quantity.replace(/[^0-9]+/g, "");
            eventdata.product_units = eventdata.product_units || "1";

            window.TEALIUM.trackEvent("cart", action, eventdata);
          }
          else {

            window.TEALIUM.log("warn", "could not detect product information");
          }
        }
        catch(e) {

          window.TEALIUM.log("error", e);
        }

        break;

      // cart move product to shopping list feature /////////////////////////////////////////////

      case "move" :

        var shoppingcart = module.cart.status();

        var row = element_id.replace(/popupShoppingList/i, "");

        try {

          $container = $$("div[id='tr_" + row + "']")[0].down("div.colProduct");

          articlenumber = window.TEALIUM.clean($container.down("div.prodArticleNo")).replace(/[^0-9]+/g, "");

          var $product_quantity = $$("input[id='quantity_" + row + "']")[0];

          product_quantity = $product_quantity && $product_quantity.value ? $product_quantity.value : ""; 

          if (shoppingcart[articlenumber] && product_quantity) {

            eventdata = {};
            
            eventdata.restapi_partnumbers = shoppingcart[articlenumber].partNo;
            eventdata.product_ids = shoppingcart[articlenumber].id;
            eventdata.product_names = shoppingcart[articlenumber].name;
            eventdata.product_item_names = shoppingcart[articlenumber].item_name;
            eventdata.product_prices_vat = shoppingcart[articlenumber].price;
            eventdata.product_units = product_quantity;
            
            
            var moved_price = parseInt(eventdata.product_units, 10) * parseFloat(eventdata.product_prices_vat);

            shoppingcart.total_vat = eventdata.cart_total_value_vat = window.TEALIUM.toFixed(parseFloat(shoppingcart.total_vat) - moved_price, 2);


            if (window.TEALIUM.ikea.shoppingcart_ok) {
              
              window.TEALIUM.trackEvent("cart", action, eventdata);
            }
          }

        }
        catch(e) {

          window.TEALIUM.log("error", e);
        }

        break;

      // shopping list page features //////////////////////////////////////////////////////////////

      case "save" :
      case "print" :
      case "email" :

        eventdata = {};
        
        eventdata.restapi_partnumbers = [];
        eventdata.product_ids = [];
        eventdata.product_names = [];
        eventdata.product_item_names = [];
        eventdata.product_prices_vat = [];
        eventdata.product_units = [];

        window.TEALIUM.ikea.shoppinglist = window.TEALIUM.ikea.shoppinglist || {};

        for (articlenumber in window.TEALIUM.ikea.shoppinglist) {

          if (window.TEALIUM.ikea.shoppinglist.hasOwnProperty(articlenumber)) {

            eventdata.restapi_partnumbers.push(window.TEALIUM.ikea.shoppinglist[articlenumber].partNo);
            eventdata.product_ids.push(window.TEALIUM.ikea.shoppinglist[articlenumber].id);
            eventdata.product_names.push(window.TEALIUM.ikea.shoppinglist[articlenumber].name);
            eventdata.product_item_names.push(window.TEALIUM.ikea.shoppinglist[articlenumber].item_name);
            eventdata.product_prices_vat.push(window.TEALIUM.ikea.shoppinglist[articlenumber].price);
            eventdata.product_units.push(window.TEALIUM.ikea.shoppinglist[articlenumber].quantity);
          }
        }

        if (eventdata.product_ids.length > 0) {

          // we need a view to re-evaluate load rules
          window.TEALIUM.trackEvent("list", action, eventdata);
        }

        break;
      default :
        window.TEALIUM.log("warn", "tealium :: unhandled case! " + action);
    }
  };
}

})(); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: product-information-page
 *
 * extension purpose: detect displayed product on product information page (pip)
 * there is a global variable called window.currentItem holding the current productId being displayed
 *
 * extension scope: preloader (important!)
 */
if (!window.irwstats_locale) { return true; } // old web only

window.utag_data = window.utag_data || {};

window.TEALIUM = window.TEALIUM || {};

window.TEALIUM.track = window.TEALIUM.track || function(tealium_event, customdata) {
  // legacy method - can be removed when refactor complete
  var data = {}; window.TEALIUM.datalayer[tealium_event] = customdata || window.TEALIUM.datalayer[tealium_event]; Object.extend(data, window.TEALIUM.datalayer[tealium_event]); /* first level should be a module's own namespace, e.g. moduledata["stockcheck"] = { .. : .. } */ var module; for (module in window.TEALIUM.datalayer.moduledata) { if (window.TEALIUM.datalayer.moduledata.hasOwnProperty(module)) { Object.extend(data, window.TEALIUM.datalayer.moduledata[module]); } } /* force array type on restapi_partnumbers */ if (data.restapi_partnumbers) { data.restapi_partnumbers = data.restapi_partnumbers.join ? data.restapi_partnumbers : [data.restapi_partnumbers]; } /* force array type on product_ids */ if (data.product_ids) { data.product_ids = data.product_ids.join ? data.product_ids : [data.product_ids]; } /* force array type on product_names */ if (data.product_names) { data.product_names = data.product_names.join ? data.product_names : [data.product_names]; } /* force array type on product_prices_vat */ if (data.product_prices_vat) { data.product_prices_vat = data.product_prices_vat.join ? data.product_prices_vat : [data.product_prices_vat]; } /* force array type on product_units */ if (data.product_units) { data.product_units = data.product_units.join ? data.product_units : [data.product_units]; } Object.extend(window.TEALIUM.datalayer[tealium_event], data); /* @todo: got a weird "race" condition causing the console log to misfire with 2 utag.view triggers  we need to take a look at that. i can't figure out what is going on right now, but adding a timeout (still not a proper solution) seems to work ok before calling utag.view. */  (function retry(retries) { if (retries === 0) { window.TEALIUM.log("error", "utag.loader.ended did not make it in time!"); return false; } else { if (window.utag && window.utag.loader && window.utag.loader.ended) { /* if the console logger is turned off, now it is time to turn it back on */ if (window.TEALIUM.noview) { window.TEALIUM.noview = false; } window.utag.track(tealium_event, data); } else { window.setTimeout(function() { retry.call(window, --retries); }, 100); } } return true; }(50));
};

window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };
window.TEALIUM.datalayer.moduledata = window.TEALIUM.datalayer.moduledata || {};


window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { number = Number(number); var p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

window.TEALIUM.ikea = window.TEALIUM.ikea || {};

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

if (/pip/i.test(page_type)) {
  
  // turn off the implicit call to utag.view
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noview = true;
  
  // turn off console-logger
  window.TEALIUM.noview = true;  
  

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // GET PRODUCT VIEW INFORMATION
  /////////////////////////////////////////////////////////////////////////////////////////////////
  window.TEALIUM.ikea.productdata = function(productId) {

    var productdata = {},
      product = "",
      product_description = "",
      product_price = "";

    try {

      if (window.jProductData) {

        var lookup = window.jProductData.product.items.find(function(object) {

          return object.partNumber == productId;
        });

        // product detail add to basket / list //////////////////////////////////////////////
        // http://www.ikea.com/gb/en/catalog/products/S79894474/
        if (lookup) {

          product = lookup.name || "";

          product_description = lookup.type || "";

          // @todo: there are no validDesign on list/cart and slideshow view products
          // i currently do not think it is a good idea to add this information to the
          // product item names when it is so inconsistent. disabling for now
          //product_description += lookup.validDesign && lookup.validDesign.length ? ", " + lookup.validDesign.join(", ") : "";

          // future needed snip?
          //var $color = $$("select[id*='dropcolor'] option").find(function(option){ return !!option.selected });
          //if($color) { product_description += ", " + $color.text.strip(); }

          product_price = "" + lookup.prices.normal.priceNormal.rawPrice || "";

          
          if (product) {

            productdata.restapi_partnumbers = productId;
            
            // sometimes there is a leading s in the product id which should be removed
            productdata.product_ids = productId.replace(/^S/i, "");

            // product name should be forced uppercase
            productdata.product_names = product.toUpperCase();
            
            productdata.product_item_names = productdata.product_names;
            productdata.product_item_names += product_description ? " : " + product_description.toLowerCase() : "";
            
            // decode html entities in the product item name
            productdata.product_item_names = window.TEALIUM.htmlDecode(productdata.product_item_names);

            ////////////////////////////////////////////////////////////////////

            // remove non numeric trailing characters
            product_price = product_price.replace(/[^0-9]*$/, "");

            // replace "," separator with a "."
            product_price = product_price.replace(/,/g, ".");

            // if no decimals add some
            if (!/[\.][0-9][0-9]$/.test(product_price)) {

              product_price = product_price + ".00";
            }

            product_price = product_price.replace(/[^0-9]/g, "");

            product_price = product_price / 100;
            
            // enforce 2 decimal places
            product_price = window.TEALIUM.toFixed(product_price, 2);
            
            ////////////////////////////////////////////////////////////////////

            productdata.product_prices_vat = product_price;

            // force array type on restapi_partnumbers
            productdata.restapi_partnumbers = [productdata.restapi_partnumbers];
            // force array type on product_ids
            productdata.product_ids = [productdata.product_ids];
            // force array type on product_names
            productdata.product_names = [productdata.product_names];
            // force array type on product_item_names
            productdata.product_item_names = [productdata.product_item_names];
            // force array type on product_prices_vat
            productdata.product_prices_vat = [productdata.product_prices_vat];


            return productdata;
          }
        }
      }
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // STOCK CHECK
  /////////////////////////////////////////////////////////////////////////////////////////////////
  Object.extend(window.TEALIUM.datalayer.moduledata, { "stockcheck" : { "data" : {}, "events" : [] } });
  
  var stockcheckdata = window.TEALIUM.datalayer.moduledata.stockcheck.data;

  // if pre-selected store we should wait for the stock check to complete
  if (new RegExp("display_stock_info_" + window.localeJs, "i").test(document.cookie) ) {

    // tell logger to not print out data sources just yet
    window.TEALIUM.noview = true;

    stockcheckdata.stockcheck_mode = "automatic";
  }

  if (!window.TEALIUM.ikea.stockChkBtnPressed) {
    
    window.TEALIUM.ikea.stockChkBtnPressed = window.stockChkBtnPressed || undefined;
  }

  if (window.TEALIUM.ikea.stockChkBtnPressed && !window.TEALIUM.ikea.stockChkBtnPressedDefined) {

    window.TEALIUM.ikea.stockChkBtnPressedDefined = true;

    window.stockChkBtnPressed = function(itemRelation) {

      window.TEALIUM.ikea.stockChkBtnPressed.apply(window, [itemRelation]);

      stockcheckdata.stockcheck_mode = "manual";
    };
  }

  if (!window.TEALIUM.ikea.irwStatStockCheckFromPIP) {
    
    window.TEALIUM.ikea.irwStatStockCheckFromPIP = window.irwStatStockCheckFromPIP || undefined;
  }
  
  if (window.TEALIUM.ikea.irwStatStockCheckFromPIP && !window.TEALIUM.ikea.irwStatStockCheckFromPIPDefined) {

    window.TEALIUM.ikea.irwStatStockCheckFromPIPDefined = true;

    window.irwStatStockCheckFromPIP = function(stockMsg, storeNum, itemRelation) {

      window.TEALIUM.ikea.irwStatStockCheckFromPIP.apply(window, [stockMsg, storeNum, itemRelation]);

      stockcheckdata.stockcheck_result = stockMsg.toLowerCase();
    };
  }

  if (!window.TEALIUM.ikea.stockCheckServiceResult) {
    
    window.TEALIUM.ikea.stockCheckServiceResult = window.stockCheckServiceResult || undefined;
  }

  if (window.TEALIUM.ikea.stockCheckServiceResult && !window.TEALIUM.ikea.stockCheckServiceResultDefined) {

    window.TEALIUM.ikea.stockCheckServiceResultDefined = true;

    window.stockCheckServiceResult = function(doc, storeIdSelected, store, completeStoreURL, itemRelation) {

      window.TEALIUM.ikea.stockCheckServiceResult.apply(window, [doc, storeIdSelected, store, completeStoreURL, itemRelation]);
      
      stockcheckdata.stockcheck_type = "store";

      stockcheckdata.stockcheck_store = storeIdSelected;

      if (stockcheckdata.local_store_id) {

        if (stockcheckdata.local_store_id !== storeIdSelected) {

          stockcheckdata.local_store_event = "changed";
        }
        else {
          
          delete stockcheckdata.local_store_event;
        }
      }

      stockcheckdata.local_store_id = storeIdSelected;

      stockcheckdata.local_store_name = store.toLowerCase();

      //var availableStock = $$("strong.noOfItems")[0];
      //if (availableStock) {
      //console.log("stockCheckServiceResult :: available stock: " + window.TEALIUM.clean(availableStock));
      //}
      
      window.setTimeout(function() {
        
        window.TEALIUM.trackEvent("stockcheck", "stockcheck", stockcheckdata);
      }, 1000);
    };
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // INITIAL PRODUCT VIEW
  /////////////////////////////////////////////////////////////////////////////////////////////////

  Object.extend(window.TEALIUM.datalayer.moduledata, { "product" : { "data" : {}, "events" : [] } });
  
  (function() {

    if (window.currentItem) {

      var productdata = window.TEALIUM.ikea.productdata(window.currentItem);

      // stockcheck data is now firing on separate request
      //if (stockcheckdata.stockcheck_mode !== "automatic") {
        window.TEALIUM.trackEvent("product", "view", productdata);
      //}
    }

  }());
  

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // PRODUCT VIEW CHANGED
  /////////////////////////////////////////////////////////////////////////////////////////////////
  if (!window.TEALIUM.ikea.productChanged) {
    
    window.TEALIUM.ikea.productChanged = window.irwStatProductChanged || undefined;
  }

  if (window.TEALIUM.ikea.productChanged && !window.TEALIUM.ikea.productChangedDefined) {

    window.TEALIUM.ikea.productChangedDefined = true;

    window.irwStatProductChanged = function(productId) {

      window.TEALIUM.ikea.productChanged.apply(window, [productId]);

      var productdata = window.TEALIUM.ikea.productdata(productId);

      if (stockcheckdata.stockcheck_mode !== "automatic") {

        window.TEALIUM.trackEvent("product", "view", productdata);
      }
    };
  }
}

}()); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt
 *
 * extension: product-slide-show
 *
 * extension purpose: detect slideshow product views
 *
 * example url:
 * http://www.ikea.com/gb/en/search/?query=PATRIK
 * click on top right corner of any product
 */
if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};
window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };

window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { var number = Number(number), p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

window.TEALIUM.ikea = window.TEALIUM.ikea || {};

if (!window.TEALIUM.ikea.irwStatProductViewedFromSlideShow) {

  window.TEALIUM.ikea.irwStatProductViewedFromSlideShow = window.irwStatProductViewedFromSlideShow || undefined;
}

if (window.TEALIUM.ikea.irwStatProductViewedFromSlideShow && !window.TEALIUM.ikea.irwStatProductViewedFromSlideShowDefined) {

  window.TEALIUM.ikea.irwStatProductViewedFromSlideShowDefined = true;

  window.irwStatProductViewedFromSlideShow = function(partNumber, productViewType, price) {

    window.TEALIUM.ikea.irwStatProductViewedFromSlideShow.apply(window, [partNumber, productViewType, price]);

    try {
      
      if (window.slideshow) {

        var lookup = window.slideshow.thumbs.get(partNumber);

        if (lookup) {

          var product = lookup.prodName || "",

            product_description = lookup.prodDesc || "",

            product_price = lookup.price || "";
    

          if (product && product_description && product_price) {

            var slideshowdata = {};
            
            slideshowdata.restapi_partnumbers = partNumber;
            
            // sometimes there is a leading s in the product id which should be removed
            slideshowdata.product_ids = partNumber.replace(/^S/i, "");
            
            // product name should be forced uppercase
            slideshowdata.product_names = product.toUpperCase();

            slideshowdata.product_item_names = slideshowdata.product_names;
            slideshowdata.product_item_names += product_description ? " : " + product_description.toLowerCase() : "";
            
            // decode html entities in the product item name
            slideshowdata.product_item_names = window.TEALIUM.htmlDecode(slideshowdata.product_item_names);

            ////////////////////////////////////////////////////////////////////

            // remove non numeric trailing characters
            product_price = product_price.replace(/[^0-9]*$/, "");

            // replace "," separator with a "."
            product_price = product_price.replace(/,/g, ".");

            // if no decimals add some
            if (!/[\.][0-9][0-9]$/.test(product_price)) {

              product_price = product_price + ".00";
            }

            product_price = product_price.replace(/[^0-9]/g, "");

            product_price = product_price / 100;
            
            // enforce 2 decimal places
            product_price = window.TEALIUM.toFixed(product_price, 2);

            ////////////////////////////////////////////////////////////////////
            
            slideshowdata.product_prices_vat = product_price;

            window.TEALIUM.trackEvent("slideshow", "view", slideshowdata);         
          }
        }
      }
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  };
}

}()); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: shopping-cart
 *
 * extension purpose: keep track of the products in the shopping cart
 *
 * example urls:
 * http://www.ikea.com/webapp/wcs/stores/servlet/OrderItemDisplay?storeId=7&langId=-20&catalogId=11001&orderId=.&priceexclvat=&newLinks=true
 *
 */

"use strict";

//debugger;

if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};

window.TEALIUM.track = window.TEALIUM.track || function(tealium_event, customdata) {
  // legacy method. should be removed when refactoring complete
  var data = {}; window.TEALIUM.datalayer[tealium_event] = customdata || window.TEALIUM.datalayer[tealium_event]; Object.extend(data, window.TEALIUM.datalayer[tealium_event]); /* first level should be a module's own namespace, e.g. moduledata["stockcheck"] = { .. : .. } */ var module; for (module in window.TEALIUM.datalayer.moduledata) { if (window.TEALIUM.datalayer.moduledata.hasOwnProperty(module)) { Object.extend(data, window.TEALIUM.datalayer.moduledata[module]); } } /* force array type on restapi_partnumbers */ if (data.restapi_partnumbers) { data.restapi_partnumbers = data.restapi_partnumbers.join ? data.restapi_partnumbers : [data.restapi_partnumbers]; } /* force array type on product_ids */ if (data.product_ids) { data.product_ids = data.product_ids.join ? data.product_ids : [data.product_ids]; } /* force array type on product_names */ if (data.product_names) { data.product_names = data.product_names.join ? data.product_names : [data.product_names]; } /* force array type on product_prices_vat */ if (data.product_prices_vat) { data.product_prices_vat = data.product_prices_vat.join ? data.product_prices_vat : [data.product_prices_vat]; } /* force array type on product_units */ if (data.product_units) { data.product_units = data.product_units.join ? data.product_units : [data.product_units]; } Object.extend(window.TEALIUM.datalayer[tealium_event], data); /* @todo: got a weird "race" condition causing the console log to misfire with 2 utag.view triggers  we need to take a look at that. i can't figure out what is going on right now, but adding a timeout (still not a proper solution) seems to work ok before calling utag.view. */  (function retry(retries) { if (retries === 0) { window.TEALIUM.log("error", "utag.loader.ended did not make it in time!"); return false; } else { if (window.utag && window.utag.loader && window.utag.loader.ended) { /* if the console logger is turned off, now it is time to turn it back on */ if (window.TEALIUM.noview) { window.TEALIUM.noview = false; } window.utag.track(tealium_event, data); } else { window.setTimeout(function() { retry.call(window, --retries); }, 100); } } return true; }(50));
};

window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {} };
window.TEALIUM.datalayer.moduledata = window.TEALIUM.datalayer.moduledata || {};


window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { number = Number(number); var p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.queryparam = window.TEALIUM.queryparam || function(key) { var regex = new RegExp("(?:[?]|&|;)" + key + "=([^&#;]+)", "i"); var match = document.URL.match(regex); return match && match[1] ? match[1] : ""; };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

window.TEALIUM.ajax = window.TEALIUM.ajax || {};
window.TEALIUM.ajax.api = window.TEALIUM.ajax.api || {};
window.TEALIUM.ajax.XML2JSON = window.TEALIUM.ajax.XML2JSON || function(node) { var data = {}; var append = append || function(name, value) { if (data[name]) { if (data[name].push === undefined) { data[name] = [data[name]]; } data[name].push(value); } else { data[name] = value; } }; /* element attributes */ var i, childnode; for (i = 0; childnode = node.attributes[i]; i++) { append(childnode.name, childnode.value); } /* child elements */ for (i = 0; childnode = node.childNodes[i]; i++) { if (childnode.nodeType === 1) { if (childnode.childNodes.length === 1 && childnode.firstChild.nodeType === 3) { /* a text value */ append(childnode.nodeName, childnode.firstChild.nodeValue); } else { /* a nested object and has nodes */ if (childnode.hasChildNodes()) { append(childnode.nodeName, window.TEALIUM.ajax.XML2JSON(childnode)); } } } } return data; };
window.TEALIUM.ajax.response = window.TEALIUM.ajax.response || function(data, callback) {
  /* data post ajax response processing should happen here */
  return callback.apply(this, [data]);
};
window.TEALIUM.ajax.request = window.TEALIUM.ajax.request || function(partNo, callback) {
  /* @todo: this method should be more generic to use */
  /* http://www.ikea.com/DE/de/iows/catalog/items/art/20238223?method=GET&version=v2 */
  /* note rest api only works for http protocol */
  var env = window.irwstats_locale.split("_"); var url = "http://" + document.domain + "/" + env[1] + "/" + env[0] + "/iows/catalog/items/art/" + partNo + "?method=GET&version=v2"; var data = {}; data.articlenumber = partNo.replace(/^S/i, ""); new Ajax.Request(url, { "asynchronous": true, "contentType": "application/xml", "method": "get", "onSuccess": function(oXHR, oJson) { data.ajax_status = oXHR.status; data.ajax_message = oXHR.statusText; if(!oXHR.responseXML) { data.ajax_status = 404; data.ajax_message = "oXHR.responseXML is missing from REST API"; } else { var doc = oXHR.responseXML.documentElement, prices = doc.getElementsByTagName("RetailItemCommPrice")[0]; prices = window.TEALIUM.ajax.XML2JSON(prices); Object.extend(data, prices); } return window.TEALIUM.ajax.response.apply(this, [data, callback]); }, "onFailure": function(oXHR, oJson) { data.ajax_status = oXHR.status; data.ajax_message = oXHR.statusText; return window.TEALIUM.ajax.response.apply(this, [data, callback]); }, "onComplete": function() {} });
};

window.TEALIUM.ikea = window.TEALIUM.ikea || {};

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

// cart page
// http://www.ikea.com/webapp/wcs/stores/servlet/IrwOrderItemDisplay?partNumber=S09018029&orderId=233335327&addByPartNumber=true&storeId=7&URL=.&quantity=1&memberId=-3001&outOrderName=orderId&langId=-20&forUserId=1256074126&backURL=OrderItemDisplay&orderItemId=548967211&priceexclvat=&ddkey=http:OrderItemAddByPartNumber
if (page_type === "ecom-step0") {

  // turn off implicit call to utag.view
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noview = true;
  
  // turn off console-logger
  window.TEALIUM.noview = true;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // MODULES NAMESPACE
  /////////////////////////////////////////////////////////////////////////////////////////////////

  var module = window.TEALIUM.datalayer.moduledata;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // MODULE CART NAMESPACE
  /////////////////////////////////////////////////////////////////////////////////////////////////

  module.cart = {};
  module.cart.data = {};
  module.cart.events = [];

  module.cart.status = function() {

    var data = {
        "total_vat" : 0,
        "restapi_partnumbers" : [],
        "product_ids" : [],
        "product_names" : [],
        "product_item_names" : [],
        "product_prices_vat" : [],
        "product_units" : []
      },
      shoppingcart = window.TEALIUM.ikea.shoppingcart,
      articlenumber = "";

    for (articlenumber in shoppingcart) {

      if (shoppingcart.hasOwnProperty(articlenumber)) {

        if (!data[articlenumber]) {

          data[articlenumber] = {
            "partNo" : shoppingcart[articlenumber].partNo,
            "id" : shoppingcart[articlenumber].id,
            "name" : shoppingcart[articlenumber].name,
            "item_name" : shoppingcart[articlenumber].item_name,
            "price" : shoppingcart[articlenumber].price,
            "quantity" : shoppingcart[articlenumber].quantity
          };
        }

        data.total_vat += (parseInt(data[articlenumber].quantity, 10) * parseFloat(data[articlenumber].price));

        data.restapi_partnumbers.push(data[articlenumber].partNo);
        data.product_ids.push(data[articlenumber].id);
        data.product_names.push(data[articlenumber].name);
        data.product_item_names.push(data[articlenumber].item_name);
        data.product_prices_vat.push(data[articlenumber].price);
        data.product_units.push(data[articlenumber].quantity);
      }
    }

    // enforce 2 decimal places
    data.total_vat = window.TEALIUM.toFixed(data.total_vat, 2);

    return data;
  };

  module.cart.process = function() {

    var shoppingcart = module.cart.status(),
      cart_event = "",
      cartdata = {},
      articlenumber = "";

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // UPDATE BASKET QUANTITY
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // @todo: this seems to cause more noise than good is. deactivating most code for now and see if it will be needed some day

    //if (url_ddkey === "http:OrderItemUpdate") {

    //  cart_event = "update_cart";
    //}


    /////////////////////////////////////////////////////////////////////////////////////////////////
    // QUICK ADD ARTICLE NUMBER FROM CATALOGUE TO BASKET (INPUT FIELD)
    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (url_ddkey === "http:OrderItemAddByPartNumber") {

      // some partNo have "S" prefix for some reason, remove
      articlenumber = url_partnumber.replace(/^S/i, "");
      
      if (shoppingcart[articlenumber] && url_quantity) {

        try {
          
          cartdata = {};

          cartdata.cart_total_value_vat = shoppingcart.total_vat;

          cartdata.restapi_partnumbers = shoppingcart[articlenumber].partNo;
          cartdata.product_ids = shoppingcart[articlenumber].id;
          cartdata.product_names = shoppingcart[articlenumber].name;
          cartdata.product_item_names = shoppingcart[articlenumber].item_name;
          cartdata.product_prices_vat = shoppingcart[articlenumber].price;
          cartdata.product_units = url_quantity.replace(/[^0-9]+/g, "");

          window.TEALIUM.trackEvent("cart", "add_to_cart", cartdata);
        }
        catch(e) {

          window.TEALIUM.log("error", e);
        }
      }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD TO BASKET FROM AVAILABILITY CHECK PAGE
    // source: http://www.ikea.com/gb/en/catalog/availability/S29902933/
    // target landing: http://www.ikea.com/webapp/wcs/stores/servlet/IrwOrderItemDisplay?orderId=240686914&storeId=7&URL=.&quantity=2&langId=-20&forUserId=1294801468&backURL=%2Fgb%2Fen%2Fcatalog%2Favailability%2FS29902933%2F&catEntryId=765207&orderItemId=566830973&newLinks=true&ddkey=http:OrderItemAdd
    /////////////////////////////////////////////////////////////////////////////////////////////////

    else if (url_ddkey === "http:OrderItemAdd" && /availability/.test(url_backurl)) {

      // url_orderitemid seems to have different meaning versus markup when coming from availability check.
      // let's try use the identifier in backurl instead

      articlenumber = url_backurl.replace(/[^0-9]+/g, "");

      if (shoppingcart[articlenumber] && url_quantity) {

        try {

          cartdata = {};

          cartdata.cart_total_value_vat = shoppingcart.total_vat;

          cartdata.restapi_partnumbers = shoppingcart[articlenumber].partNo;
          cartdata.product_ids = shoppingcart[articlenumber].id;
          cartdata.product_names = shoppingcart[articlenumber].name;
          cartdata.product_item_names = shoppingcart[articlenumber].item_name;
          cartdata.product_prices_vat = shoppingcart[articlenumber].price;
          cartdata.product_units = url_quantity.replace(/[^0-9]+/g, "");

          window.TEALIUM.trackEvent("cart", "add_to_cart", cartdata);
        }
        catch(e) {

          window.TEALIUM.log("error", e);
        }
      }
      else {

        window.TEALIUM.log("warn", "failed to detect added product from availability check");
      }
    }

    // it's a cart view
    else {

      cartdata = {};

      if (shoppingcart.product_ids.length > 0) {

        cartdata.cart_total_value_vat = shoppingcart.total_vat;
        
        cartdata.restapi_partnumbers = shoppingcart.restapi_partnumbers;
        cartdata.product_ids = shoppingcart.product_ids;
        cartdata.product_names = shoppingcart.product_names;
        cartdata.product_item_names = shoppingcart.product_item_names;
        cartdata.product_prices_vat = shoppingcart.product_prices_vat;
        cartdata.product_units = shoppingcart.product_units;
        
        window.TEALIUM.trackEvent("cart", "view", cartdata);
      }
      else {
        
        cartdata.cart_total_value_vat = "0.00";
        
        window.TEALIUM.trackEvent("cart", "empty", cartdata);
      }
    }
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // BUILD THE SHOPPING CART
  /////////////////////////////////////////////////////////////////////////////////////////////////

  var tr_id = "",
    partNo = "",
    articlenumber = "",

    // query parameters
    url_ddkey = window.decodeURIComponent(window.TEALIUM.queryparam("ddkey")),
    url_orderitemid = window.decodeURIComponent(window.TEALIUM.queryparam("orderItemId")),
    url_backurl = window.decodeURIComponent(window.TEALIUM.queryparam("backURL")),
    url_partnumber = window.decodeURIComponent(window.TEALIUM.queryparam("partNumber")),
    url_quantity = window.decodeURIComponent(window.TEALIUM.queryparam("quantity")),

    restapi_partnumber = "",
    product_id = "",
    product = "",
    product_description = "",
    product_name = "",
    product_item_name = "",
    product_price = "",
    product_quantity;

  window.TEALIUM.ikea.shoppingcart_ok = true;
  window.TEALIUM.ikea.shoppingcart_size = 0;
  window.TEALIUM.ikea.shoppingcart = {};

  $$("input[id*='prodId_']").each(function(item) {

    try {

      tr_id = item.id.replace(/.+_(S?[0-9]+)$/, "$1");

      partNo = articlenumber = item.value;

      // some partNo have "S" prefix for some reason, remove
      articlenumber = articlenumber.replace(/^S/i, "");

      var $container = $("tr_" + tr_id);

      product = window.TEALIUM.clean($container.down("div.prodName"));

      product_description = window.TEALIUM.clean($container.down("div.prodDesc"));

      product_quantity = $$("input[id='quantity_" + tr_id + "']")[0].value;
      product_quantity = product_quantity.replace(/[^0-9]+/g, "");

      var $colprice;
      
      // new basket page squeezed in, into the checkout flow
      // https://secure.cte.ikeadt.com/webapp/wcs/stores/servlet/IrwProceedFromCheckoutAddressView
      if (/IrwProceedFromCheckoutAddressView/.test (document.URL)) {
        
        $colprice = $container.down("div.colTotalPrice");
      }
      else {
        
         $colprice = $container.down("div.colPrice");
      }
      
      if ($colprice) {
       
        if ($colprice.down("span.familyPrice")) {

          product_price = window.TEALIUM.clean($colprice.down("span.regularPrice"));
        }
        else {

          product_price = window.TEALIUM.clean($colprice);
        }
      }

      if (articlenumber && product && product_price && product_quantity) {

        
        product_description = product_description.toLowerCase();

        // product name should be forced uppercase
        product_name = product.toUpperCase();
        
        product_item_name = product_name;
        product_item_name += product_description ? " : " + product_description.toLowerCase() : "";

        // decode html entities in the product item name
        product_item_name = window.TEALIUM.htmlDecode(product_item_name);
        
        ////////////////////////////////////////////////////////////////////////

        // remove non numeric trailing characters
        product_price = product_price.replace(/[^0-9]*$/, "");

        // replace "," separator with a "."
        product_price = product_price.replace(/,/g, ".");

        // if no decimals add some
        if (!/[\.][0-9][0-9]$/.test(product_price)) {

          product_price = product_price + ".00";
        }

        product_price = product_price.replace(/[^0-9]/g, "");
        
        // new basket page squeezed in, into the checkout flow
        // https://secure.cte.ikeadt.com/webapp/wcs/stores/servlet/IrwProceedFromCheckoutAddressView
        if (/IrwProceedFromCheckoutAddressView/.test(document.URL)) {
          
          // new basket page shows totalPrice, need some quantity division
          product_price = product_price / parseInt(product_quantity, 10);
        }
        
        product_price = product_price / 100;

        // enforce 2 decimal places
        product_price = window.TEALIUM.toFixed(product_price, 2);

        ////////////////////////////////////////////////////////////////////////

        window.TEALIUM.ikea.shoppingcart_size++;

        window.TEALIUM.ikea.shoppingcart[articlenumber] = {};
        window.TEALIUM.ikea.shoppingcart[articlenumber].partNo = partNo;
        window.TEALIUM.ikea.shoppingcart[articlenumber].id = articlenumber;
        window.TEALIUM.ikea.shoppingcart[articlenumber].name = product_name;
        window.TEALIUM.ikea.shoppingcart[articlenumber].item_name = product_item_name;
        window.TEALIUM.ikea.shoppingcart[articlenumber].price = product_price;
        window.TEALIUM.ikea.shoppingcart[articlenumber].quantity = product_quantity;
      }
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  });


  // IF SHOW PRICES WITHOUT VAT IS USED
  if ($("pricevat") && $("pricevat").checked) {
    
    // call rest api and update all prices in the shoppingcart first
    window.TEALIUM.ikea.shoppingcart_ok = false;

    var ajaxcalls = window.TEALIUM.ikea.shoppingcart_size;
    
    for (articlenumber in window.TEALIUM.ikea.shoppingcart) {

      if (window.TEALIUM.ikea.shoppingcart.hasOwnProperty(articlenumber)) {
        
        partNo = window.TEALIUM.ikea.shoppingcart[articlenumber].partNo;

        window.TEALIUM.ajax.request(partNo, function(data) {

          // record the api status enabling error handling in tealium iq
          // anything else but status code 200 should be looked into
          window.TEALIUM.ajax.api.status = data.ajax_status;

          window.TEALIUM.ajax.api.message = data.ajax_message;

          // successful response
          if (data.ajax_status === 200) {
            
            window.TEALIUM.ikea.shoppingcart_ok = true;
            
            // update product price
            if (data.Price) {
              
              window.TEALIUM.ikea.shoppingcart[data.articlenumber].price = data.Price;
            }
          }
          else {
            
            window.TEALIUM.ikea.shoppingcart_ok = false;

            // MANUALLY ADD VAT TO PRICE IF AVAILABLE
            
            var vat = {
              // vat for all products in germany is 19%
              "de_DE" : 1.19
            };
            
            if (vat[window.irwstats_locale]) {
              
              window.TEALIUM.ikea.shoppingcart_ok = true;
              
              var price = window.TEALIUM.ikea.shoppingcart[data.articlenumber].price;
              
              price = window.TEALIUM.toFixed(Math.round(price * vat[window.irwstats_locale]), 2);
              
              window.TEALIUM.ikea.shoppingcart[data.articlenumber].price = price;
            }
            
            // there is a problem with the rest api
            window.TEALIUM.log("warn", "shoppinglist :: rest api failed: http://www.ikea.com/<market>/<lang>/iows/catalog/items/art/<articlenumber>?method=GET&version=v2");
            window.TEALIUM.log("warn", "shoppinglist :: error code: " + data.ajax_status + ", " + data.ajax_message);
            window.TEALIUM.log("warn", "shoppinglist :: please contact external.magnus.dahl5@ikea.com for assistance");
          }

          // done
          if (--ajaxcalls === 0 && window.TEALIUM.ikea.shoppingcart_ok) {

            module.cart.process();
          }
        });
      }
    }

  }
  else {

    module.cart.process();
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // DELETE FROM BASKET
  /////////////////////////////////////////////////////////////////////////////////////////////////

  if (!window.TEALIUM.ikea.deleteOrderLine) {
    
    window.TEALIUM.ikea.deleteOrderLine = window.deleteOrderLine || undefined;
  }

  if (window.TEALIUM.ikea.deleteOrderLine && !window.TEALIUM.ikea.deleteOrderLineDefined) {

    window.TEALIUM.ikea.deleteOrderLineDefined = true;

    window.deleteOrderLine = function(id) {

      var cartdata = {},
        shoppingcart = module.cart.status(),
        articlenumber = $$("input[id*='prodId_" + id + "']")[0];
      
      articlenumber = articlenumber && articlenumber.value ? articlenumber.value : "";
      
      // sometimes there is a leading s in the product id which should be removed
      articlenumber = articlenumber.replace(/^S/i, "");
      
      if (shoppingcart[articlenumber]) {

        cartdata.restapi_partnumbers = shoppingcart[articlenumber].partNo;
        cartdata.product_ids = shoppingcart[articlenumber].id;
        cartdata.product_names = shoppingcart[articlenumber].name;
        cartdata.product_item_names = shoppingcart[articlenumber].item_name;
        cartdata.product_prices_vat = shoppingcart[articlenumber].price;
        cartdata.product_units = shoppingcart[articlenumber].quantity;

        var deleted_price = parseInt(cartdata.product_units, 10) * parseFloat(cartdata.product_prices_vat);

        shoppingcart.total_vat = cartdata.cart_total_value_vat = window.TEALIUM.toFixed(parseFloat(shoppingcart.total_vat) - deleted_price, 2);

        window.TEALIUM.trackEvent("cart", "remove_from_cart", cartdata);
      }
      
      else {

        window.TEALIUM.log("warn", "shopping-cart :: detect remove product from cart failed!");
      }


      // let the console logger stay for a while so user can see available data sources
      var timeout = /tealium_debug/.test(document.cookie) ? 3000 : 500;

      // the shopping basket page will make a redirect, so give some time to fire tags first
      window.setTimeout(function() {

        window.TEALIUM.ikea.deleteOrderLine.apply(window, [id]);

      }, timeout);
    };
  }
}

})(); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: shopping-list
 *
 * extension purpose: keep track of the products in the shopping list
 *
 * example urls:
 * http://www.ikea.com/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=7&langId=-20
 *
 */
if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};

window.TEALIUM.track = window.TEALIUM.track || function(tealium_event, customdata) {
  // legacy method. should be removed when refactoring complete
  var data = {}; window.TEALIUM.datalayer[tealium_event] = customdata || window.TEALIUM.datalayer[tealium_event]; Object.extend(data, window.TEALIUM.datalayer[tealium_event]); /* first level should be a module's own namespace, e.g. moduledata["stockcheck"] = { .. : .. } */ var module; for (module in window.TEALIUM.datalayer.moduledata) { if (window.TEALIUM.datalayer.moduledata.hasOwnProperty(module)) { Object.extend(data, window.TEALIUM.datalayer.moduledata[module]); } } /* force array type on restapi_partnumbers */ if (data.restapi_partnumbers) { data.restapi_partnumbers = data.restapi_partnumbers.join ? data.restapi_partnumbers : [data.restapi_partnumbers]; } /* force array type on product_ids */ if (data.product_ids) { data.product_ids = data.product_ids.join ? data.product_ids : [data.product_ids]; } /* force array type on product_names */ if (data.product_names) { data.product_names = data.product_names.join ? data.product_names : [data.product_names]; } /* force array type on product_prices_vat */ if (data.product_prices_vat) { data.product_prices_vat = data.product_prices_vat.join ? data.product_prices_vat : [data.product_prices_vat]; } /* force array type on product_units */ if (data.product_units) { data.product_units = data.product_units.join ? data.product_units : [data.product_units]; } Object.extend(window.TEALIUM.datalayer[tealium_event], data); /* @todo: got a weird "race" condition causing the console log to misfire with 2 utag.view triggers  we need to take a look at that. i can't figure out what is going on right now, but adding a timeout (still not a proper solution) seems to work ok before calling utag.view. */  (function retry(retries) { if (retries === 0) { window.TEALIUM.log("error", "utag.loader.ended did not make it in time!"); return false; } else { if (window.utag && window.utag.loader && window.utag.loader.ended) { /* if the console logger is turned off, now it is time to turn it back on */ if (window.TEALIUM.noview) { window.TEALIUM.noview = false; } window.utag.track(tealium_event, data); } else { window.setTimeout(function() { retry.call(window, --retries); }, 100); } } return true; }(50));
};

window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {} };
window.TEALIUM.datalayer.moduledata = window.TEALIUM.datalayer.moduledata || {};


window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { number = Number(number); var p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.queryparam = window.TEALIUM.queryparam || function(key) { var regex = new RegExp("(?:[?]|&|;)" + key + "=([^&#;]+)", "i"); var match = document.URL.match(regex); return match && match[1] ? match[1] : ""; };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

window.TEALIUM.ajax = window.TEALIUM.ajax || {};
window.TEALIUM.ajax.api = window.TEALIUM.ajax.api || {};
window.TEALIUM.ajax.XML2JSON = window.TEALIUM.ajax.XML2JSON || function(node) { var data = {}; var append = append || function(name, value) { if (data[name]) { if (data[name].push === undefined) { data[name] = [data[name]]; } data[name].push(value); } else { data[name] = value; } }; /* element attributes */ var i, childnode; for (i = 0; childnode = node.attributes[i]; i++) { append(childnode.name, childnode.value); } /* child elements */ for (i = 0; childnode = node.childNodes[i]; i++) { if (childnode.nodeType === 1) { if (childnode.childNodes.length === 1 && childnode.firstChild.nodeType === 3) { /* a text value */ append(childnode.nodeName, childnode.firstChild.nodeValue); } else { /* a nested object and has nodes */ if (childnode.hasChildNodes()) { append(childnode.nodeName, window.TEALIUM.ajax.XML2JSON(childnode)); } } } } return data; };
window.TEALIUM.ajax.response = window.TEALIUM.ajax.response || function(data, callback) {
  /* data post ajax response processing should happen here */
  return callback.apply(this, [data]);
};
window.TEALIUM.ajax.request = window.TEALIUM.ajax.request || function(partNo, callback) {
  /* @todo: this method should be more generic to use */
  /* http://www.ikea.com/DE/de/iows/catalog/items/art/20238223?method=GET&version=v2 */
  /* note rest api only works for http protocol */
  var env = window.irwstats_locale.split("_"); var url = "http://" + document.domain + "/" + env[1] + "/" + env[0] + "/iows/catalog/items/art/" + partNo + "?method=GET&version=v2"; var data = {}; data.articlenumber = partNo.replace(/^S/i, ""); new Ajax.Request(url, { "asynchronous": true, "contentType": "application/xml", "method": "get", "onSuccess": function(oXHR, oJson) { data.ajax_status = oXHR.status; data.ajax_message = oXHR.statusText; if(!oXHR.responseXML) { data.ajax_status = 404; data.ajax_message = "oXHR.responseXML is missing from REST API"; } else { var doc = oXHR.responseXML.documentElement, prices = doc.getElementsByTagName("RetailItemCommPrice")[0]; prices = window.TEALIUM.ajax.XML2JSON(prices); Object.extend(data, prices); } return window.TEALIUM.ajax.response.apply(this, [data, callback]); }, "onFailure": function(oXHR, oJson) { data.ajax_status = oXHR.status; data.ajax_message = oXHR.statusText; return window.TEALIUM.ajax.response.apply(this, [data, callback]); }, "onComplete": function() {} });
};

window.TEALIUM.ikea = window.TEALIUM.ikea || {};

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

// shopping list page
if (page_type === "shopping list") {

  // turn off implicit call to utag.view
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noview = true;
  
  // turn off console-logger
  window.TEALIUM.noview = true;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // MODULES NAMESPACE
  /////////////////////////////////////////////////////////////////////////////////////////////////

  var module = window.TEALIUM.datalayer.moduledata;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // MODULE LIST NAMESPACE
  /////////////////////////////////////////////////////////////////////////////////////////////////

  module.list = {};
  module.list.data = {};
  module.list.events = [];

  module.list.status = function() {

    var data = {
        "total_vat" : 0,
        "restapi_partnumbers" : [],
        "product_ids" : [],
        "product_names" : [],
        "product_item_names" : [],
        "product_prices_vat" : [],
        "product_units" : []
      },
      shoppinglist = window.TEALIUM.ikea.shoppinglist,
      articlenumber = "";

    for (articlenumber in shoppinglist) {

      if (shoppinglist.hasOwnProperty(articlenumber)) {

        if (!data[articlenumber]) {

          data[articlenumber] = {
            "partNo" : shoppinglist[articlenumber].partNo,
            "id" : shoppinglist[articlenumber].id,
            "name" : shoppinglist[articlenumber].name,
            "item_name" : shoppinglist[articlenumber].item_name,
            "price" : shoppinglist[articlenumber].price,
            "quantity" : shoppinglist[articlenumber].quantity
          };
        }

        data.total_vat += (parseInt(data[articlenumber].quantity, 10) * parseFloat(data[articlenumber].price));
        
        data.restapi_partnumbers.push(data[articlenumber].partNo);
        data.product_ids.push(data[articlenumber].id);
        data.product_names.push(data[articlenumber].name);
        data.product_item_names.push(data[articlenumber].item_name);
        data.product_prices_vat.push(data[articlenumber].price);
        data.product_units.push(data[articlenumber].quantity);
      }
    }

    // enforce 2 decimal places
    data.total_vat = window.TEALIUM.toFixed(data.total_vat, 2);

    return data;
  };

  module.list.process = function() {

    var shoppinglist = module.list.status(),
      list_event = "",
      listdata = {},
      articlenumber = "";


    /////////////////////////////////////////////////////////////////////////////////////////////////
    // UPDATE LIST QUANTITY
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // @todo: this seems to cause more noise than good is. deactivating most code for now and see if it will be needed some day
    //if (url_ddkey === "http:IrwUpdateShoppingList") {
    //list_event = "update_list";
    //}


    /////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD ARTICLE NUMBER TO SHOPPING LIST FEATURE
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (url_ddkey === "http:IrwInterestItemAddByPartNumber" && url_catentryid) {

      try {

        var $container = $$("input[id='quantity_" + url_catentryid + "']")[0];

        if ($container) {
          
          $container = $container.up("tr");

          articlenumber = $container.getAttribute("id").replace(/[^0-9]+/g, "");

          if (shoppinglist[articlenumber] && url_quantity) {

            listdata = {};
            
            listdata.list_total_value_vat = shoppinglist.total_vat;

            listdata.restapi_partnumbers = shoppinglist[articlenumber].partNo,
            listdata.product_ids = shoppinglist[articlenumber].id,
            listdata.product_names = shoppinglist[articlenumber].name,
            listdata.product_item_names = shoppinglist[articlenumber].item_name,
            listdata.product_prices_vat = shoppinglist[articlenumber].price,
            listdata.product_units = url_quantity.replace(/[^0-9]+/g, "");

            window.TEALIUM.trackEvent("cart", "add_to_list", listdata);
          }
        }
      }
      catch(e) {

        window.TEALIUM.log("error", e);
      }
    }
    
    // @todo: the click & collect team is piggybacking on the utag.data namespace
    // and using the direct article number id feature, it triggers a utag.link
    // request. The end result is a utag.data namespace only reflecting 1 product
    // in the list/cart
    // for now, we will let the utag.link call fire, + view call so that the 
    // utag.data namespace is fully updated with the list's current products.
    // we do not fully understand how the c&c code is set up, nor if their
    // pickup timing is correct. I guess we need to review that some point in time
    // 
    // ideally, c&c if continued to be hosted within a TMS solution, it should
    // be build like any other tag container, with callbacks to tell the feature
    // when utag.view and links are happening.
    // 
    // it's a list view
    //else {

      listdata = {};
      
      if (shoppinglist.product_ids.length > 0) {

        listdata.list_total_value_vat = shoppinglist.total_vat;
        
        listdata.restapi_partnumbers = shoppinglist.restapi_partnumbers;
        listdata.product_ids = shoppinglist.product_ids;
        listdata.product_names = shoppinglist.product_names;
        listdata.product_item_names = shoppinglist.product_item_names;
        listdata.product_prices_vat = shoppinglist.product_prices_vat;
        listdata.product_units = shoppinglist.product_units;
        
        window.TEALIUM.trackEvent("list", "view", listdata);
      }      
      else {
        
        listdata.list_total_value_vat = "0.00";
        
        window.TEALIUM.trackEvent("list", "empty", listdata);
      }
      
    //}

  }; // end module.list.process


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // BUILD THE SHOPPING LIST
  /////////////////////////////////////////////////////////////////////////////////////////////////

  window.TEALIUM.ikea.shoppinglist_ok = true;
  window.TEALIUM.ikea.shoppinglist_size = 0;
  window.TEALIUM.ikea.shoppinglist = {};

  var partNo = "",
    articlenumber = "",

    // query parameters
    url_ddkey = window.decodeURIComponent(window.TEALIUM.queryparam("ddkey")),
    url_catentryid = window.decodeURIComponent(window.TEALIUM.queryparam("catEntryId")),
    url_quantity = window.decodeURIComponent(window.TEALIUM.queryparam("quantity")),

    product = "",
    product_description = "",
    product_name = "",
    product_item_name = "",
    product_price = "",
    product_quantity = "";

  $$("tr[id*='tr_']").each(function(item) {

    try {

      partNo = articlenumber = item.id.replace("tr_", "");

      // some partNo have "S" prefix for some reason, remove
      articlenumber = articlenumber.replace(/^S/i, "");

      product = window.TEALIUM.clean(item.down("span.prodName")).strip();

      product_description = window.TEALIUM.clean(item.down("span.prodDesc")).strip();

      product_quantity = $$("input[id='quantity_" + partNo + "']")[0].value;
      product_quantity = product_quantity.replace(/[^0-9]+/g, "");

      product_price = window.TEALIUM.clean($$("span[id='price_" + partNo + "']")[0]);

      if (articlenumber && product && product_price && product_quantity) {
        
        // product name should be forced uppercase
        product_name = product.toUpperCase();
        
        product_item_name = product_name;
        product_item_name += product_description ? " : " + product_description.toLowerCase() : "";

        // decode html entities in the product item name
        product_item_name = window.TEALIUM.htmlDecode(product_item_name);
        
        ////////////////////////////////////////////////////////////////////////

        // remove non numeric trailing characters
        product_price = product_price.replace(/[^0-9]*$/, "");

        // replace "," separator with a "."
        product_price = product_price.replace(/,/g, ".");

        // if no decimals add some
        if (!/[\.][0-9][0-9]$/.test(product_price)) {

          product_price = product_price + ".00";
        }

        product_price = product_price.replace(/[^0-9]/g, "");

        product_price = product_price / 100;

        // enforce 2 decimal places
        product_price = window.TEALIUM.toFixed(product_price, 2);

        ////////////////////////////////////////////////////////////////////////

        window.TEALIUM.ikea.shoppinglist_size++;

        window.TEALIUM.ikea.shoppinglist[articlenumber] = {};
        window.TEALIUM.ikea.shoppinglist[articlenumber].partNo = partNo;
        window.TEALIUM.ikea.shoppinglist[articlenumber].id = articlenumber;
        window.TEALIUM.ikea.shoppinglist[articlenumber].name = product_name;
        window.TEALIUM.ikea.shoppinglist[articlenumber].item_name = product_item_name;
        window.TEALIUM.ikea.shoppinglist[articlenumber].price = product_price;
        window.TEALIUM.ikea.shoppinglist[articlenumber].quantity = product_quantity;
      }
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  });


  // IF SHOW PRICES WITHOUT VAT IS USED
  if ($("pricevat") && $("pricevat").checked) {

    // call rest api and update all prices in the shoppinglist first
    window.TEALIUM.ikea.shoppinglist_ok = false;

    var ajaxcalls = window.TEALIUM.ikea.shoppinglist_size;

    for (articlenumber in window.TEALIUM.ikea.shoppinglist) {

      if (window.TEALIUM.ikea.shoppinglist.hasOwnProperty(articlenumber)) {
        
        partNo = window.TEALIUM.ikea.shoppinglist[articlenumber].partNo;

        window.TEALIUM.ajax.request(partNo, function(data) {

          // record the api status enabling error handling in tealium iq
          // anything else but status code 200 should be looked into
          window.TEALIUM.ajax.api.status = data.ajax_status;

          window.TEALIUM.ajax.api.message = data.ajax_message;

          // successful response
          if (data.ajax_status === 200) {
            
            window.TEALIUM.ikea.shoppinglist_ok = true;
            
            // update product price
            if (data.Price) {
              
              window.TEALIUM.ikea.shoppinglist[data.articlenumber].price = data.Price;
            }
          }
          else {
            
            window.TEALIUM.ikea.shoppinglist_ok = false;

            // MANUALLY ADD VAT TO PRICE IF AVAILABLE
            
            var vat = {
              // vat for all products in germany is 19%
              "de_DE" : 1.19
            };
            
            if (vat[window.irwstats_locale]) {
              
              window.TEALIUM.ikea.shoppinglist_ok = true;
              
              var price = window.TEALIUM.ikea.shoppinglist[data.articlenumber].price;
              
              price = window.TEALIUM.toFixed(Math.round(price * vat[window.irwstats_locale]), 2);
              
              window.TEALIUM.ikea.shoppinglist[data.articlenumber].price = price;
            }
            
            // there is a problem with the rest api
            window.TEALIUM.log("warn", "shoppinglist :: rest api failed: http://www.ikea.com/<market>/<lang>/iows/catalog/items/art/<articlenumber>?method=GET&version=v2");
            window.TEALIUM.log("warn", "shoppinglist :: error code: " + data.ajax_status + ", " + data.ajax_message);
            window.TEALIUM.log("warn", "shoppinglist :: please contact external.magnus.dahl5@ikea.com for assistance");
          }

          // done
          if (--ajaxcalls === 0 && window.TEALIUM.ikea.shoppinglist_ok) {

            module.list.process();
          }
        });
      }
    }

  }
  else {

    module.list.process();
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // ADD PRODUCT TO BASKET
  /////////////////////////////////////////////////////////////////////////////////////////////////

  window.TEALIUM.ikea.addInterestItemToShoppingCart = window.addInterestItemToShoppingCart || undefined;

  if (window.TEALIUM.ikea.addInterestItemToShoppingCart && !window.TEALIUM.ikea.addInterestItemToShoppingCartDefined) {

    window.TEALIUM.ikea.addInterestItemToShoppingCartDefined = true;

    window.addInterestItemToShoppingCart = function(partNo, quantity, name, obj, storeId) {

      window.TEALIUM.ikea.addInterestItemToShoppingCart.apply(window, [partNo, quantity, name, obj, storeId]);

      var listdata = {},
        shoppinglist = module.list.status(),
        articlenumber = "";

      // some partNo have "S" prefix for some reason, remove
      articlenumber = partNo.replace(/^S/i, "");

      quantity = ("" + quantity).replace(/[^0-9]+/g, "");

      if (shoppinglist[articlenumber] && quantity) {
        
        listdata.restapi_partnumbers = shoppinglist[articlenumber].partNo,
        listdata.product_ids = shoppinglist[articlenumber].id,
        listdata.product_names = shoppinglist[articlenumber].name,
        listdata.product_item_names = shoppinglist[articlenumber].item_name,
        listdata.product_prices_vat = shoppinglist[articlenumber].price,
        listdata.product_units = quantity;

        window.TEALIUM.trackEvent("list", "add_to_cart", listdata);
      }
      else {

        window.TEALIUM.log("warn", "shopping-list :: detect add product from list to cart failed!");
      }

    };
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////
  // REMOVE PRODUCT FROM SHOPPING LIST
  /////////////////////////////////////////////////////////////////////////////////////////////////

  window.TEALIUM.ikea.removeItemFromShoppingList = window.removeItemFromShoppingList || undefined;

  if (window.TEALIUM.ikea.removeItemFromShoppingList && !window.TEALIUM.ikea.removeItemFromShoppingListDefined) {

    window.TEALIUM.ikea.removeItemFromShoppingListDefined = true;

    window.removeItemFromShoppingList = function(listId, partNo, catEntryId, pStoreId, pLangId) {

      var listdata = {},
        shoppinglist = module.list.status(),
        articlenumber = "";
        deleted_price = 0;

      // some partNo have "S" prefix for some reason, remove
      articlenumber = partNo.replace(/^S/i, "");

      if (shoppinglist[articlenumber]) {

        listdata.restapi_partnumbers = shoppinglist[articlenumber].partNo,
        listdata.product_ids = shoppinglist[articlenumber].id,
        listdata.product_names = shoppinglist[articlenumber].name,
        listdata.product_item_names = shoppinglist[articlenumber].item_name,
        listdata.product_prices_vat = shoppinglist[articlenumber].price,
        listdata.product_units = shoppinglist[articlenumber].quantity;

        var deleted_price = parseInt(listdata.product_units, 10) * parseFloat(listdata.product_prices);

        listdata.cart_total_value_vat = window.TEALIUM.toFixed(parseFloat(shoppinglist.total_vat) - deleted_price, 2);

        window.TEALIUM.trackEvent("list", "remove_from_list", listdata);
      }
      else {

         window.TEALIUM.log("warn", "shopping-list :: detect remove product from list failed!");
      }

      // let the console logger stay for a while so user can see available data sources
      var timeout = /tealium_debug/.test(document.cookie) ? 3000 : 500;

      // the shopping list page will make a redirect, so give some time to fire tags first
      window.setTimeout(function() {

        window.TEALIUM.ikea.removeItemFromShoppingList.apply(window, [listId, partNo, catEntryId, pStoreId, pLangId]);
      }, timeout);

    };
  }
}

})(); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: top3-category-products
 *
 * extension purpose: detect displayed products on category pages and listpage (series)
 *
 * extension scope: preloader (important!)
 */
if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};
window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };

window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { var number = Number(number), p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

if (/^(range-category|range-category-series)$/i.test(page_type)) {

  // suppress the implicit call to utag.view
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noview = true;
  
  // turn off console-logger
  window.TEALIUM.noview = true;

  var page_level = $$("meta[name='IRWStats.pageType']")[0];

  if (page_level) {

    page_level = ("" + page_level.readAttribute("content")).toLowerCase();
  }
  else {

    page_type = "unknown";
  }
  
  if (page_level === "department") {
    
    var departmentdata = {};
    
    window.TEALIUM.trackEvent("department", "view", departmentdata);
  }
  else {

  var categorydata = {},

      product = "",
      product_description = "",

      restapi_partnumber = "",
      product_id = "",
      product_name = "",
      product_item_name = "",
      product_price = "";

    try {

      $$("div[class*='productDetails']").each(function($container) {

        // find parent wrapper. the topmost product us is enclosed by an anchor containing the product id
        // and all the other products enclosed by a div container with an id containing the product id
        var $parent = $container.up();

        // first product branded in the top of the category page
        // http://www.ikea.com/gb/en/catalog/categories/departments/bedroom/16284/
        // family prices: http://www.ikea.com/gb/en/catalog/categories/departments/childrens_ikea/16249/
        // series: http://www.ikea.com/gb/en/catalog/categories/series/11671/
        // series w. fam prices: http://www.ikea.com/gb/en/catalog/categories/series/08265/
        if ($parent.nodeName === "A") {

          product_id = ($parent.getAttribute("href") || "").match(/.+\/(S?[0-9]+)/i);
          
          product_id = product_id && product_id[1] ? product_id[1] : "";

          if (product_id) {

            product = window.TEALIUM.clean($container.down("div.productTitle"));

            product_description = window.TEALIUM.clean($container.down("div.productDesp"));

            var regular_price = window.TEALIUM.clean($container.down("div.familyRegularPrice"));

            if (regular_price) {

              product_price = regular_price;
            }
            else {

              product_price = window.TEALIUM.clean($container.down("div.prodPrice"));
            }
          }
        }
        else {

          var parent_id = ($parent.getAttribute("id") || "").match(/item_(S?[0-9]+).*/i);

          product_id = parent_id && parent_id[1] ? parent_id[1] : "";

          if (product_id) {

            product = window.TEALIUM.clean($container.down("div.productTitle"));

            product_description = window.TEALIUM.clean($container.down("div.productDesp"));

            product_price = window.TEALIUM.clean($container.down(".regularPrice"));
          }
        }

        if (product_id && product && product_description && product_price) {

          restapi_partnumber = product_id;

          // sometimes there is a leading s in the product id which should be removed
          product_id = product_id.replace(/^S/i, "");

          // product name should be forced uppercase
          product_name = product.toUpperCase();
          
          product_item_name = product_name;
          product_item_name += product_description ? " : " + product_description.toLowerCase() : "";

          // decode html entities in the product item name
          product_item_name = window.TEALIUM.htmlDecode(product_item_name);
          
          //////////////////////////////////////////////////////////////////////

          // remove non numeric trailing characters
          product_price = product_price.replace(/[^0-9]*$/, "");

          // replace "," separator with a "."
          product_price = product_price.replace(/,/g, ".");

          // if no decimals add some
          if (!/[\.][0-9][0-9]$/.test(product_price)) {

            product_price = product_price + ".00";
          }

          product_price = product_price.replace(/[^0-9]/g, "");

          product_price = product_price / 100;

          // enforce 2 decimal places
          product_price = window.TEALIUM.toFixed(product_price, 2);

          //////////////////////////////////////////////////////////////////////
          
          categorydata.restapi_partnumbers = categorydata.restapi_partnumbers || [];
          categorydata.product_ids = categorydata.product_ids || [];
          categorydata.product_names = categorydata.product_names || [];
          categorydata.product_item_names = categorydata.product_item_names || [];
          categorydata.product_prices_vat = categorydata.product_prices_vat || [];

          categorydata.restapi_partnumbers.push(restapi_partnumber);
          categorydata.product_ids.push(product_id);
          categorydata.product_names.push(product_name);
          categorydata.product_item_names.push(product_item_name);
          categorydata.product_prices_vat.push(product_price);
        }

      });

      //////////////////////////////////////////////////////////////////////////

      if (categorydata.product_ids && categorydata.product_ids.length > 1) {

        categorydata.restapi_partnumbers = categorydata.restapi_partnumbers.slice(0,3);
        categorydata.product_ids = categorydata.product_ids.slice(0,3);
        categorydata.product_names = categorydata.product_names.slice(0,3);
        categorydata.product_item_names = categorydata.product_item_names.slice(0,3);
        categorydata.product_prices_vat = categorydata.product_prices_vat.slice(0,3);
      }

      window.TEALIUM.trackEvent("category", "view", categorydata);
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  }  
}

})(); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: top3-search-result-products
 *
 * extension purpose: detect displayed products on the search result page
 *
 * extension scope: preloader (important!)
 *
 * @todo: this extension should be refactored!
 */
if (!window.irwstats_locale) { return true; } // old web only

window.TEALIUM = window.TEALIUM || {};
window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {}, "link" : {} };

window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
  try {

    var message = "TEALIUM LOG::";

    if (type === "error") { 

      message += "Something unexpected happened."; 
      message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
      message += "\n\nat url: " + document.URL;

      // error reporting to prop27
      var s = window.s;
      var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
    }
    else {
      message += msg;
    }

    var logger = window.console[type] || window.console.log;

    logger.call(window.console, message);
  }
  catch (e) {

  }
};

window.TEALIUM.clean = window.TEALIUM.clean || function($container, delimiter) { if (!$container) { return ""; } var result = []; var iterate = function($element) { var child = $element.firstChild; var value = ""; while (child) { if (child.nodeType === Node.TEXT_NODE) { value = child.nodeValue.strip(); if (value && !/^(\s|\xa0)*$/.test(value)) { result.push(value); } } if (Object.isElement(child)) { iterate(child); } child = child.nextSibling; } }; iterate($container); return delimiter && result[0] ? result.join(delimiter) : result[0] || ""; };
window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { var number = Number(number), p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };
window.TEALIUM.queryparam = window.TEALIUM.queryparam || function(key) { var regex = new RegExp("(?:[?]|&|;)" + key + "=([^&#;]+)", "i"); var match = document.URL.match(regex); return match && match[1] ? match[1] : ""; };
window.TEALIUM.htmlDecode = window.TEALIUM.htmlDecode || function (input) { var conv = document.createElement("div"), decoded = ""; conv.innerHTML = input; decoded = conv.innerText || conv.textContent; if (decoded !== undefined) { return decoded; } return input; };

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

if (/^(search)$/i.test(page_type)) {

  try {

    // @todo: chosing "other" seems to inflate the search count, so ignore these pages for now
    // until clarified with ikea/connell
    var category = window.TEALIUM.queryparam("category").toLowerCase();

    if (category === "other") {

      return true;
    }
    
    // suppress implicit call to utag.view
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
    window.utag_cfg_ovrd.noview = true;
    
    // turn off console-logger
    window.TEALIUM.noview = true;

    var searchdata = {};
    
    searchdata.search_keyword = window.TEALIUM.queryparam("query").toLowerCase();
    searchdata.search_keyword = window.decodeURIComponent(searchdata.search_keyword).replace(/[+]/g, " ");

    var results = $$("meta[name='IRWStats.nofSearchResultsProduct']")[0];
    
    if (results) {
      
      searchdata.search_results = ("" + results.readAttribute("content")).toLowerCase();
    }
                  
    searchdata.restapi_partnumbers = [];
    searchdata.product_ids = [];
    searchdata.product_names = [];
    searchdata.product_item_names = [];
    searchdata.product_prices_vat = [];

    // http://www.ikea.com/gb/en/search/?query=PATRULL
    // there is no access to family prices on initial search result page load.
    // therefore i have been forced to make ajax callbacks to the rest api to obtain this information.
    // though we are adding a few extra calls to the rest api, we can request any information about a given
    // product, which might become handy some point in time.

    // @todo: we should stop calling rest api from search result page. The backend seems to struggle keeping up. limiting calls to just top 3
    // @todo: this should be rewritten to use the more generic ajax function when available
    window.TEALIUM.searchrequest = function(partNumber) {

      // page specific data sources
      var site = window.irwstats_locale.split("_");
      var visit_language = (site[0] || "").toLowerCase();
      var visit_country = (site[1] || "").toLowerCase();

      if (!visit_language || !visit_country) {

        return;
      }

      var locale = "/" + visit_country + "/" + visit_language + "/";
      var url = locale + "catalog/products/" + partNumber + "?type=xml&dataset=normal,prices";

      new Ajax.Request(url, {
        asynchronous : true,
        contentType : "application/xml",
        method: "get",
        onSuccess : function(response) {

          var responsedoc = response.responseXML;
          var root = responsedoc.getElementsByTagName("product")[0];
          var item = root.getElementsByTagName("item")[0];
          var prices = window.IowsCommon.getPrices(item);

          var data = {
            "product_id" : partNumber,
            "product" : window.IowsCommon.getNodeVal(item, "name"),
            "product_description" : window.IowsCommon.getNodeVal(item, "facts"),
            "product_price" : prices.price || ""
            //"product_price_family" : prices.family || ""
          };

          return window.TEALIUM.searchresponse(data);
        },
        onFailure : function() { window.TEALIUM.searchresponse({}); },
        onComplete : function() {}
      });
    };

    window.TEALIUM.searchresponse = function(data) {

      if (data.product_id && data.product && data.product_price) {

        var restapi_partnumber = "",
          product_id = "",
          product_name = "",
          product_item_name = "",
          product_description = "",
          product_price = "";

        restapi_partnumber = data.product_id;

        // sometimes there is a leading s in the product id which should be removed
        product_id = data.product_id.replace(/^S/i, "");

        // product name should be forced uppercase
        product_name = data.product.toUpperCase();

        product_description = data.product_description.toLowerCase();

        product_item_name = product_name;
        product_item_name += product_description ? " : " + product_description : "";
        
        // decode html entities in the product item name
        product_item_name = window.TEALIUM.htmlDecode(product_item_name);

        ////////////////////////////////////////////////////////////////////////

        // remove non numeric trailing characters
        product_price = data.product_price.replace(/[^0-9]*$/, "");

        // replace "," separator with a "."
        product_price = product_price.replace(/,/g, ".");

        // if no decimals add some
        if (!/[\.][0-9][0-9]$/.test(product_price)) {

          product_price = product_price + ".00";
        }

        product_price = product_price.replace(/[^0-9]/g, "");

        product_price = product_price / 100;

        // enforce 2 decimal places
        product_price = window.TEALIUM.toFixed(product_price, 2);

        ////////////////////////////////////////////////////////////////////////
        
        searchdata.restapi_partnumbers.push(restapi_partnumber);
        searchdata.product_ids.push(product_id);
        searchdata.product_names.push(product_name);
        searchdata.product_item_names.push(product_item_name);
        searchdata.product_prices_vat.push(product_price);

        if (--window.TEALIUM.searchrequests === 0) {

          window.TEALIUM.trackEvent("search", "search", searchdata);
        }
      }

      return true;
    };


    if (window.js_fn_SLIDE_SHOW_IDS) {

      // currently we are only interested in top3 search result products
      var products = window.js_fn_SLIDE_SHOW_IDS.slice(0, 3);

      window.TEALIUM.searchrequests = products.length;

      for (var i = 0;  i < window.TEALIUM.searchrequests; i++) {

        window.TEALIUM.searchrequest(products[i]);
      }
    }

  }
  catch(e) {

    window.TEALIUM.log("error", e);
  }
}

})(); // end
}catch(e){utag.DB(e)};
try{
(function() {
/*
 * [global-web-datalayer]
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * extension: order-confirmation-page
 *
 * code ported from ikea/uk > Set product details on Check Out
 *
 * extension purpose: detect ordered products on the order confirmation page
 *
 * extension scope: preloader (important!)
 */
if (!window.irwstats_locale) { return true; } // old web only

var page_type = $$("meta[name='IRWStats.internalPageType']")[0] || ($$("meta[name='IRWStats.pageType']")[0] || "");

if (page_type) {

  page_type = ("" + page_type.readAttribute("content")).toLowerCase();
}
else {

  page_type = "unknown";
}

if (page_type === "ecom-step5") {

  window.TEALIUM = window.TEALIUM || {};
  window.TEALIUM.datalayer = window.TEALIUM.datalayer || { "view" : {} };
  
  window.TEALIUM.log = window.TEALIUM.log || function(type, msg) { 
  
    try {

      var message = "TEALIUM LOG::";

      if (type === "error") { 

        message += "Something unexpected happened."; 
        message += "Please contact webanalytics@ikea.com with the below message to get it fixed:\n\t" + msg.stack;
        message += "\n\nat url: " + document.URL;

        // error reporting to prop27
        var s = window.s;
        var olink = s.linkTrackVars, oprop27 = s.prop27; s.linkTrackVars = "prop27"; s.prop27 = "teal err: " + document.location.pathname; s.tl (true, "o", "tealium error"); s.linkTrackVars = olink; s.prop27 = oprop27;
      }
      else {
        message += msg;
      }

      var logger = window.console[type] || window.console.log;

      logger.call(window.console, message);
    }
    catch (e) {

    }
  };
  
  window.TEALIUM.toFixed = window.TEALIUM.toFixed || function (number, n) { var number = Number(number), p = Math.pow(10, n); return (Math.round(number * p) / p).toFixed(n); };

  var metadata = {};

  metadata.orderid = $$("meta[name='IRWStats.eComOrderId']")[0];
  metadata.products = $$("meta[name='IRWStats.products']")[0];

  var data = {},
    futureproof = null,
    source = null,
    content = "",

    order_id = "",
    order_total = 0,
    
    restapi_partnumbers = [],
    
    product_ids = [],
    product_names = [],
    product_item_names = [],
    product_prices_vat = [],
    product_units = [];

  for (source in metadata) {

    if (metadata.hasOwnProperty(source)) {

      if (metadata[source] !== undefined) {

        content = metadata[source].readAttribute("content").toLowerCase();

        data[source] = content;
      }
    }
  }

  if (data.orderid && data.products) {

    try {

      order_id = data.orderid;

      //<meta name="IRWStats.products" content=";50177223;2;3;event28=3.0,;10214034;1;2.75;event28=3.0,;60257182;1;2;event28=3.0" />
      data.products = data.products.split(",");

      for (var i = 0, plen = data.products.length; i < plen; i++) {

        var details = data.products[i].split(";").splice(1, 3);

        order_total += Number(details[2]);
        
        restapi_partnumbers.push("" + details[0]);
        
        // sometimes there is a leading s in the product id which should be removed
        product_ids.push(("" + details[0]).replace(/^S/i, ""));

        // product_names currently not available
        product_names.push("N/A on order confirmation page");
        
        // product_item_names currently not available
        product_item_names.push("N/A on order confirmation page");

        product_prices_vat.push(window.TEALIUM.toFixed(parseFloat(details[2]) / parseInt(details[1], 10), 2));

        product_units.push(details[1]);
      }

      if (product_ids.length > 0) {

        window.TEALIUM.datalayer.view.checkout_event = "complete";

        window.TEALIUM.datalayer.view.order_id = order_id;
        window.TEALIUM.datalayer.view.order_total = window.TEALIUM.toFixed(order_total, 2);

        window.TEALIUM.datalayer.view.restapi_partnumbers = restapi_partnumbers;

        window.TEALIUM.datalayer.view.product_ids = product_ids;
        window.TEALIUM.datalayer.view.product_names = product_names;
        window.TEALIUM.datalayer.view.product_item_names = product_item_names;
        window.TEALIUM.datalayer.view.product_prices_vat = product_prices_vat;
        window.TEALIUM.datalayer.view.product_units = product_units;
      }
    }
    catch(e) {

      window.TEALIUM.log("error", e);
    }
  }
  else {

    window.TEALIUM.log("warn", "order confirmation page : order id or products are missing");
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // lastly, copy new web supported data layer onto utag_data
  /////////////////////////////////////////////////////////////////////////////////////////////////

  window.utag_data = window.utag_data || {};

  for(futureproof in window.TEALIUM.datalayer.view) {

    if (window.TEALIUM.datalayer.view.hasOwnProperty(futureproof)) {

      source = window.TEALIUM.datalayer.view[futureproof];

      // if the source is an array, we need a copy
      if (source.join) {

        source = source.slice(0);
      }

      window.utag_data[futureproof] = source;
    }
  }
  // @todo: who added this call to utag.view?
  // is it causing an additional page hit since noview isn't set on this page?
  utag.view(window.utag_data);
}

})(); // end
}catch(e){utag.DB(e)};
try{
/*
 * [global-web-datalayer]
 * @author: roshan@tealium.com
 *
 * extension: product-information-page : view call
 *
 * extension purpose: if view call hasn't been made - trigger it (this will have happened if window.currentItem wasn't defined upon initial Tealium load)
 *
 * extension scope: DOM Ready (important!)
 */

if (window.TEALIUM && window.TEALIUM.datalayer && window.TEALIUM.datalayer.moduledata && window.TEALIUM.datalayer.moduledata.product && window.TEALIUM.datalayer.moduledata.product.data) {

	if (!window.TEALIUM.datalayer.moduledata.product.data.product_ids) {

		Object.extend(window.TEALIUM.datalayer.moduledata, {
			"product": {
				"data": {},
				"events": []
			}
		});

		(function() {

			if (window.currentItem) {

				var productdata = window.TEALIUM.ikea.productdata(window.currentItem);

				// stockcheck data is now firing on separate request
				//if (stockcheckdata.stockcheck_mode !== "automatic") {
				window.TEALIUM.trackEvent("product", "view", productdata);
				//}
			}

		}());

	}

}
}catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DFisherGOCookie']=='undefined'&&utag.data['page_path'].toString().toLowerCase().indexOf('store/fishers/indexPage'.toLowerCase())>-1&&utag.data['ut.env'].toString().toLowerCase()!='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase())){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_120.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DFisherGOCookie']=='undefined'&&utag.data['page_path'].toString().toLowerCase().indexOf('store/fishers/indexPage'.toLowerCase())>-1&&utag.data['ut.env'].toString().toLowerCase()=='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase())){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_121.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DJacksonvilleGOCookie']=='undefined'&&utag.data['page_path'].toString().toLowerCase().indexOf('store/jacksonville/indexPage'.toLowerCase())>-1&&utag.data['ut.env'].toString().toLowerCase()!='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase())){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_122.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DJacksonvilleGOCookie']=='undefined'&&utag.data['page_path'].toString().toLowerCase().indexOf('store/jacksonville/indexPage'.toLowerCase())>-1&&utag.data['ut.env'].toString().toLowerCase()=='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase())){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_123.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DGrandPrairieGOCookie']=='undefined'&&utag.data['ut.env'].toString().toLowerCase()!='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase()&&utag.data['page_path'].toString().toLowerCase().indexOf('store/grand_prairie/indexPage'.toLowerCase())>-1)){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_124.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DGrandPrairieGOCookie']=='undefined'&&utag.data['ut.env'].toString().toLowerCase()!='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase()&&utag.data['page_path'].toString().toLowerCase().indexOf('store/grand_prairie/indexPage_Spanish'.toLowerCase())>-1)){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_125.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if((typeof utag.data['cp.89DGrandPrairieGOCookie']=='undefined'&&utag.data['ut.env'].toString().toLowerCase()=='prod'.toLowerCase()&&utag.data['dom.domain'].toString().toLowerCase()!='preview.ikea.com'.toLowerCase()&&utag.data['page_path'].toString().toLowerCase().indexOf('store/grand_prairie/indexPage'.toLowerCase())>-1)){utag.ut.loader({src: utag.cfg.path + 'utag.modalExt_126.js?utv=' + utag.cfg.v,cb:function() {utag.extn.mdlW.load();}});} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};}})

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}

