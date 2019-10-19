//~~tv:8009.20160713
//~~tc: Adding virtual page view support for single page applications.

var _hjSettings = _hjSettings || {};
var hj = hj || function(){(hj.q=hj.q||[]).push(arguments)};

//tealium universal tag - utag.sender.8009 ut4.0.201701030838, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1};
    u.initialized = false;
    u.scriptrequested = false;
    u.queue = [];

    u.map={};
  u.extend=[];


    // Start Loader Callback
    u.loader_cb = function (a, b) {
      utag.DB("send:124:CALLBACK");
      
      if ( u.initialized === true ) {
        hj( "vpv", b["dom.pathname"] );
      }
      u.initialized = true;
      
      utag.DB("send:124:CALLBACK:COMPLETE");
    };
    // End Loader Callback

    u.callBack = function () {
      var data = {};
      while (data = u.queue.shift()) {
        u.data = data.data;
        u.loader_cb(data.a, data.b);
      }
    };

  u.send = function (a, b) {
    if (u.ev[a] || u.ev.all !== undefined) {
      //##UTENABLEDEBUG##utag.DB("send:##UTID##");

      var c, d, e, f;

      u.data = {
        "hjid" : "360572",
        "hjsv" : "5",
        "base_url" : "//static.hotjar.com/c/hotjar-##utag_hjid##.js?sv=##utag_hjsv##"
      };

      // Start tag-scoped extensions
    
      // End tag-scoped extensions

      // Start Mapping
      for (d in utag.loader.GV(u.map)) {
        if (b[d] !== undefined && b[d] !== "") {
          e = u.map[d].split(",");
          for (f = 0; f < e.length; f++) {
            u.data[e[f]] = b[d];
          }
        }
      }
      // End Mapping

      _hjSettings.hjid = u.data.hjid;
      _hjSettings.hjsv = u.data.hjsv;

      u.data.base_url = u.data.base_url.replace('##utag_hjid##', u.data.hjid);
      u.data.base_url = u.data.base_url.replace('##utag_hjsv##', u.data.hjsv);

      if (u.initialized) {
        u.loader_cb(a, b);
      } else {
        u.queue.push({"data" : u.data, "a" : a, "b" : b});
        if (!u.scriptrequested) {
          u.scriptrequested = true;
          u.loader({
            "type" : "script",
            "src" : u.data.base_url,
            "cb" : u.callBack,
            "loc" : "script",
            "id" : "utag_124",
            "attrs" : {}
          });
        }
      }     
    }
  };
    utag.o[loader].loader.LOAD(id);
  }("124", "ikea.us-main"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
