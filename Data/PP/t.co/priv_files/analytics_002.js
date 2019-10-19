(function(c,e){function d(f){this.SESSION_BUFFER_KEY="ScribeTransport";
this.SCRIBE_API_ENDPOINT="/i/jot";
this.options={};
if(f){this.updateOptions(f);
this.registerEventHandlers(f)
}}d.prototype={flush:function(g,i){if(!g||!g.length){return
}if(i===undefined){i=!!this.options.sync
}if(this.options.useAjax){var h={url:this.options.url,data:e.extend(this.ajaxParams(g),this.options.requestParameters),type:"POST",dataType:"json",async:!i,headers:{"X-Twitter-Polling":true}};
if(this.options.debug){if(this.options.debugHandler){h.success=this.options.debugHandler
}h.data.debug="1"
}e.ajax(h)
}else{var f=this.options.debug?"&debug=1":"";
(new Image()).src=this.options.url+"?q="+(+new Date).toString().slice(-4)+f+"&"+this.imageParams(g)
}this.reset()
},ajaxParams:function(g){if(typeof g==="string"){return{log:"["+g+"]"}
}var f=this.options.encodeParameters;
if(f&&typeof f==="function"){return f.apply(this,arguments)
}else{return{log:JSON.stringify(g)}
}},imageParams:function(g){if(typeof g==="string"){return"log=%5B"+g+"%5D"
}var f=this.options.encodeParameters;
if(f&&typeof f==="function"){return f.apply(this,arguments)
}else{return"log="+encodeURIComponent(JSON.stringify(g))
}},reset:function(){if(this.options.bufferEvents){this.skipUnloadFlush=false;
sessionStorage.removeItem(this.options.bufferKey)
}},getBuffer:function(){return sessionStorage.getItem(this.options.bufferKey)||""
},logWithStorageException:function(f,g){var h={category:"client_scribe_storage_error",error:f.message,url:document.location.href,product_name:"swift",event_name:"storage_quota_exceeded",type:"js_error"};
this.addCategoryField(h,h.category);
this.flush(this.appendData(g,this.encodeEventData(h)))
},storeData:function(h,g){try{sessionStorage.setItem(h,g)
}catch(f){if(f.name==="QuotaExceededError"||f.message==="QuotaExceededError"||f.name==="NS_ERROR_DOM_QUOTA_REACHED"||f.name==="QUOTA_EXCEEDED_ERR"||f.number===-2147024882){this.logWithStorageException(f,g)
}else{throw f
}}},encodeEventData:function(g){var f=JSON.stringify(g);
if(!this.options.useAjax){f=encodeURIComponent(f)
}return f
},appendData:function(f,g){return f+(f?this.SEPARATOR+g:g)
},addToBuffer:function(i){var f=this.getBuffer();
var h=this.encodeEventData(i);
var g=this.appendData(f,h);
if(this.options.bufferSize&&this.fullBuffer(g)){if(this.options.useAjax){this.flush(g)
}else{this.flush(f);
this.storeData(this.options.bufferKey,h)
}}else{this.storeData(this.options.bufferKey,g)
}},addCategoryField:function(g,f){g._category_=f
},send:function(h,g,f){if(!g||!h||(this.options.bufferSize<0)){return
}this.addCategoryField(h,g);
if(f||!this.options.bufferEvents||!this.options.bufferSize){this.flush([h],f)
}else{this.addToBuffer(h)
}if(this.options.debug){e(document).trigger("scribedata."+this.options.bufferKey,h)
}if(this.options.metrics&&h.event_info!="debug"){e(document).trigger("debugscribe",h)
}},fullBuffer:function(f){return f.length>=(this.options.useAjax?this.options.bufferSize*2083:2050-this.options.url.length)
},updateOptions:function(g){this.options=e.extend({},this.options,g);
if(!this.options.requestParameters){this.options.requestParameters={}
}if(this.options.flushOnUnload===undefined){this.options.flushOnUnload=true
}if(!this.options.bufferKey){this.options.bufferKey=this.SESSION_BUFFER_KEY
}if(this.options.bufferSize===0){this.options.bufferEvents=false
}if(this.options.useAjax===undefined){this.options.useAjax=true
}if(this.options.bufferEvents||this.options.bufferEvents==undefined){try{sessionStorage.setItem(this.SESSION_BUFFER_KEY+".init","test");
var i=sessionStorage.getItem(this.SESSION_BUFFER_KEY+".init")=="test";
sessionStorage.removeItem(this.SESSION_BUFFER_KEY+".init");
this.options.bufferEvents=i
}catch(h){this.options.bufferEvents=false
}}if(this.options.debug&&!this.options.debugHandler){var f=this;
this.options.debugHandler=g.debugHandler||function(k){e(document).trigger("handlescribe."+f.options.bufferKey,k)
}
}var j=c.location.protocol==="https:"?"https:":"http:";
if(this.options.url===undefined){if(this.options.useAjax){this.options.url=this.SCRIBE_API_ENDPOINT
}else{this.options.url="https://twitter.com"+this.SCRIBE_API_ENDPOINT
}}else{this.options.url=this.options.url.replace(/^[a-z]+:/g,j).replace(/\/$/,"")
}if(this.options.bufferEvents&&this.options.bufferSize===undefined){this.options.bufferSize=20
}},appHost:function(){return c.location.host
},registerEventHandlers:function(){var f=this,h=e(document);
if(this.options.bufferEvents){h.on("flushscribe."+f.options.bufferKey,function(i){f.flush(f.getBuffer(),true)
});
if(this.options.flushOnUnload){var g=function(i){f.skipUnloadFlush=(!i||!i.match(/http/)||!!i.match(new RegExp("^https?://"+f.appHost(),"gi")));
if(f.skipUnloadFlush){c.setTimeout(function(){f.skipUnloadFlush=false
},3000)
}};
h.on("mouseup."+this.options.bufferKey,"a",function(i){if(this.getAttribute("target")||i.button||i.metaKey||i.shiftKey||i.altKey||i.ctrlKey){return
}g(this.getAttribute("href"))
});
h.on("submit."+this.options.bufferKey,"form",function(i){g(this.getAttribute("action"))
});
h.on("uiNavigate."+this.options.bufferKey,function(i,j){g(j.url)
});
e(c).on("unload."+this.options.bufferKey,function(){if(!f.skipUnloadFlush){f.flush(f.getBuffer(),true)
}f.skipUnloadFlush=false
})
}}this.SEPARATOR=this.options.useAjax?",":encodeURIComponent(",")
},destroy:function(){this.flush(this.getBuffer());
e(document).off("flushscribe."+this.options.bufferKey);
e(c).off("unload."+this.options.bufferKey);
e(document).off("mouseup."+this.options.bufferKey);
e(document).off("submit."+this.options.bufferKey);
e(document).off("uiNavigate."+this.options.bufferKey)
}};
function b(f){this.scribeContext={};
this.scribeData={};
this.scribe=function(j,k){var l=f||c.scribeTransport;
if(!l){throw new Error("You must create a global scribeTransport variable or pass one into this constructor.")
}if(!j||typeof j!="object"||(k&&typeof k!="object")){throw new Error("Invalid terms or data hash argument when calling ClientEvent.scribe().")
}if(this.scribeContext){var i=(typeof(this.scribeContext)=="function")?this.scribeContext():this.scribeContext;
j=e.extend({},i,j)
}for(var g in j){j[g]=j[g]&&(""+j[g]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g,"_")
}if(l.options.debug){e.each(["client","action"],function(n,m){if(!j[m]){throw new Error("You must specify a "+m+" term in your client_event.")
}})
}var k=e.extend({},k);
if(this.scribeData){var h=(typeof(this.scribeData)=="function")?this.scribeData():this.scribeData;
k=e.extend({},h,k)
}k.event_namespace=j;
k.triggered_on=k.triggered_on||+new Date;
k.format_version=k.format_version||2;
l.send(k,"client_event")
}
}function a(g,f){this.experiments=g||{};
this.impressions={};
this.scribeExperiment=function(j,h,k){var i=e.extend({page:"ddg",section:j.experiment_key,component:"",element:""},h);
k=k||{};
k.experiment_key=j.experiment_key;
k.bucket=j.bucket;
k.version=j.version;
(f||c.clientEvent).scribe(i,k)
};
this.impression=function(h){var j=this.experiments[h];
var i="web";
if(j){h=j.experiment_key;
if(!this.impressions[h]){if(j.client_name){i=j.client_name
}this.scribeExperiment(j,{client:i,action:"experiment"});
this.impressions[h]=true
}}};
this.track=function(h,i,k){if(!i){throw new Error("You must specify an event name to track custom DDG events. Event names should be lower-case, snake_cased strings.")
}var j=this.experiments[h];
if(j){this.scribeExperiment(j,{element:i,action:"track"},k)
}};
this.bucket=function(h){var i=this.experiments[h];
if(i){return i.bucket
}return""
}
}c.scribeTransport=new d();
c.clientEvent=new b();
c.ddg=new a();
c.ScribeTransport=d;
c.ClientEvent=b;
c.DDG=a
})(window,jQuery);
(function(){var a;
a={google:null,scribe:null,bing:null,track:function(c,h){var g=0,b=0,d;
if(this.isTrackingEnabled()===false){if(typeof h==="function"){h()
}return
}d=function(){g++;
if(h&&b===g){h()
}};
try{b+=this.trackGoogle(c,d);
b+=this.trackScribe(c,d)
}catch(f){if(h){h()
}}if(b===0&&h){h()
}},trackGoogle:function(e,g){var f=[],b;
if(this.google===null){return 0
}for(var d=0;
d<e.length;
d++){if(e[d].length<3){continue
}b={category:e[d][0],type:e[d][1],action:e[d][2]};
for(var c=3;
c<e[d].length;
c++){b.action+="-"+e[d][c]
}if(this.google.isEventValid(b)===true){f.push(b)
}}this.google.trackEvents(f,g);
return this.google.getTotalTrackEvents(f)
},trackScribe:function(d,f){var e=[],b;
if(this.scribe===null){return 0
}for(var c=0;
c<d.length;
c++){if(d[c].length!==5){continue
}b={page:d[c][0],section:d[c][1],component:d[c][2],element:d[c][3],action:d[c][4]};
if(this.scribe.isEventValid(b)===true){e.push(b)
}}this.scribe.trackEvents(e,f);
return this.scribe.getTotalTrackEvents(e)
},isTrackingEnabled:function(){return(window.navigator.doNotTrack!=="yes"&&window.navigator.doNotTrack!=="1"&&window.navigator.msDoNotTrack!=="1"&&(typeof doNotTrack==="undefined"||doNotTrack!=="1"))
},initialize:function(b){if(this.isTrackingEnabled()===false){return
}if(b.google){this.initializeGoogle(b.google)
}if(b.scribe){this.initializeScribe(b.scribe)
}if(b.bing){this.initializeBing(b.bing)
}return
},initializeGoogle:function(b){this.google=new TwtrAnalyticsGoogle(b)
},initializeScribe:function(b){this.scribe=new TwtrAnalyticsScribe(b)
},initializeBing:function(b){this.bing=new TwtrAnalyticsBing(b)
}};
window.TwtrAnalytics=a
})();
(function(){var a;
a=function(d){var k=this,c=[],l=[],g=false,n=[],h=[];
this.setCustomVar=function(o,p){e(function(q,s,r){ga(r+".set",o,p)
})
};
this.trackEvents=function(o,p){e(function(q,t,s){for(var r=0;
r<o.length;
r++){if(k.isEventValid(o[r])===false){console.warn("Could not GA track event - category, type and/or action parameters are missing.");
continue
}ga(s+".send","event",o[r].category,o[r].type,o[r].action,{hitCallback:p})
}});
return true
};
this.isEventValid=function(o){return !(!o.category||!o.type||!o.action)
};
this.getTotalTrackEvents=function(o){return o.length*c.length
};
var b=function(){e(function(o,q,p){ga("create",q,"auto",{allowLinker:true,name:p})
});
ga("require","linker");
ga("linker:autoLink",h)
};
var j=function(){e(function(o,q,p){if(g){ga(p+".send","pageview",g)
}else{ga(p+".send","pageview")
}})
};
var e=function(p){for(var o=0;
o<l.length;
o++){p(o,c[o],l[o])
}};
var m=function(o){(function(t,u,x,w,v,q,p){t.GoogleAnalyticsObject=v;
t[v]=t[v]||function(){(t[v].q=t[v].q||[]).push(arguments)
},t[v].l=1*new Date();
q=u.createElement(x),p=u.getElementsByTagName(x)[0];
q.async=1;
q.src=w;
p.parentNode.insertBefore(q,p)
})(window,document,"script",o,"ga")
};
var i=function(p){c=p;
for(var o=0;
o<p.length;
o++){l.push(String.fromCharCode(97+o))
}};
var f=function(o){var p;
if(typeof o.options.trackerUrl==="undefined"){return
}m(o.options.trackerUrl);
i(o.accounts);
n=o.options.domains;
h=o.options.cross_domains;
g=o.options.customUrl;
b();
for(p in o.options.customVars){k.setCustomVar(p,o.options.customVars[p])
}if(o.options.displayAdvertisingFeatures==true){e(function(q,s,r){ga(r+".require","displayfeatures")
})
}else{if(typeof console!=="undefined"&&console.log){console.log("Tailored ads opt-out is enabled.")
}}j()
};
f(d)
};
window.TwtrAnalyticsGoogle=a
})();
(function(){var a;
a=function(f){var k=this,b,e,i,h=null;
this.trackEvents=function(n,r){var m,o,q;
for(m=0;
m<n.length;
m++){if(this.isEventValid(n[m])===false){console.warn("Could not scribe event - page, section, component, element and/or action parameters are missing.");
continue
}o={client:b,page:n[m].page,section:n[m].section,component:n[m].component,element:n[m].element,action:n[m].action};
q={};
q.terms=o;
if(h!==null){var p=h();
q.ref=p.ref
}l(q,r)
}};
this.isEventValid=function(m){return(i&&m.page&&m.component!==undefined&&m.section!==undefined&&m.element!==undefined&&m.action!==undefined)
};
this.getTotalTrackEvents=function(m){if(!i){return 0
}return m.length
};
var j=function(){var n,m={};
if(h===null){return false
}n=h();
if(!n.page||n.section===undefined){return false
}m.terms={client:b,page:n.page,section:n.section,component:n.component,element:n.element,action:"impression"};
m.ref=n.ref;
return l(m)
};
var l=function(n,o){if(!i){return false
}var m={};
if(typeof n.ref!="undefined"&&n.ref.length!=0){m.event_info=n.ref
}i.scribe(n.terms,m);
if(o){o()
}return true
};
var d=function(){e=new ScribeTransport({useAjax:false,bufferEvents:false,flushOnUnload:true})
};
var c=function(){if(e===undefined){d()
}i=new ClientEvent(e)
};
var g=function(m){if(!window.ScribeTransport||!window.ClientEvent){return false
}if(!m.client){return false
}b=m.client;
if(m.pageViewCallback){h=m.pageViewCallback
}d();
c();
j();
return true
};
g(f)
};
window.TwtrAnalyticsScribe=a
})();
(function(){var a;
a=function(c){var d=function(e){(function(o,m,q,g,p,h){var l,j,k;
o[p]=o[p]||[],l=function(){var f={ti:h};
f.q=o[p],o[p]=new UET(f),o[p].push("pageLoad")
},j=m.createElement(q),j.src=g,j.async=1,j.onload=j.onreadystatechange=function(){var f=this.readyState;
f&&f!=="loaded"&&f!=="complete"||(l(),j.onload=j.onreadystatechange=null)
},k=m.getElementsByTagName(q)[0],k.parentNode.insertBefore(j,k)
})(window,document,"script","https://bat.bing.com/bat.js","uetq",e)
};
var b=function(e){if(typeof e.trackingId!=="undefined"){d(e.trackingId)
}};
b(c)
};
window.TwtrAnalyticsBing=a
})();
(function(c,a,b){a.analytics.helper={settings:{},initialized:false,attach:function(e,f){var d=this,g;
if(this.initialized){return true
}d.initializeSettings();
if(typeof TwtrAnalytics!=="undefined"&&typeof twttr!=="undefined"&&twttr.conversion!==undefined&&twttr.ready!==undefined){twttr.ready(function(h){if(TwtrAnalytics.isTrackingEnabled()===true){d.initializeTrackingPixel()
}})
}if(typeof TwtrAnalytics!=="undefined"){d.initializeAnalytics()
}this.initialized=true
},initializeSettings:function(){var d=c("#analytics-settings");
if(d.length===0){return
}this.settings.analyticsSettings=c.parseJSON(c("<div/>").html(d.html()).text());
if(typeof a.analytics.dataLayerHook==="function"){this.settings.analyticsSettings=a.analytics.dataLayerHook(this.settings.analyticsSettings)
}},initializeTrackingPixel:function(){var d;
if(!this.settings.analyticsSettings.trackingPixel){return
}d=this.settings.analyticsSettings.trackingPixel;
if(typeof d.pixel_ids!=="undefined"){d.pixel_ids.forEach(function(e){twttr.conversion.trackPid(e)
})
}},initializeAnalytics:function(){if(!this.settings.analyticsSettings){return
}this.initializeAnalyticsScribeSettings();
TwtrAnalytics.initialize({google:this.settings.analyticsSettings.google,scribe:this.settings.analyticsSettings.scribe})
},initializeAnalyticsScribeSettings:function(){if(!this.settings.analyticsSettings.scribe){return false
}this.settings.analyticsSettings.scribe.pageViewCallback=function(){var f,i,g,e,h;
var d=c(document.body);
f=d.data("analytics-page");
i="";
g="";
e="";
h=this.getParameterByName("ref");
if(this.settings.analyticsSettings.scribe.scribeSectionWithImpression){i=d.data("analytics-section");
g=d.data("analytics-component");
e=d.data("analytics-element")
}return{page:f,section:i,component:g,element:e,ref:h}
}.bind(this)
},getParameterByName:function(d){var f=new RegExp("[\\?&]"+d+"=([^&#]*)"),e=f.exec(location.search);
return e===null?"":decodeURIComponent(e[1].replace(/\+/g," "))
}}
})(jQuery,TwitterAEM,window);
(function(b,a){var c=false;
a.analytics.feature_system={attach:function(d,e){this.eventTracking.init(d,e)
},eventTracking:{map:null,init:function(d,e){b(document).on("click submit",this.trackAction.bind(this))
},fillMap:function(){var k,g,d,l,n,h,f,e,m;
if(this.map){return
}this.map={};
d=b("[data-analytics-element]");
for(k=0;
k<d.length;
k+=1){l=d[k];
n=b(l).data("analytics-element");
this.map[n]={};
this.map[n].element=n;
h=["page","section","component","action"];
for(g=0;
g<h.length;
g+=1){f=h[g];
e=b(l).closest("[data-analytics-"+f+"]");
this.map[n][f]="";
if(e.length){m=e.first().data("analytics-"+f);
this.map[n][f]=m
}}if(this.map[n].action===""){this.map[n].action="click"
}}},trackAction:function(k,j){var j,l,h=[],i,g,d,f;
if(typeof TwtrAnalytics==="undefined"){return
}g=b(k.target).closest("[data-analytics-element], .click-tracking");
if(!g.length){return
}if(k.type==="click"){i=!!g.attr("href");
f=(k.metaKey||k.ctrlKey||k.isDefaultPrevented());
f=(f||g.attr("target")==="_blank");
if(f===false&&i===true){event.preventDefault()
}l=function(){var e=g.attr("href");
if(f===false&&i===true){window.location=e
}}
}else{if(k.type==="submit"&&g.is("input, button, form")){k.preventDefault();
l=function(){g.submit()
}
}}j=this.trackElementFromMap(g);
if(j!==false){h.push(j)
}j=this.trackElementFromAttribute(g);
if(j!==false){h=h.concat(j)
}TwtrAnalytics.track(h,l)
},trackElementFromAttribute:function(f){var g=[],h,e,d;
if(!f.attr("data-tracking-action")){return false
}h=f.attr("data-tracking-action").split(",");
for(e=0;
e<h.length;
e++){g.push([f.attr("data-tracking-category"),f.attr("data-tracking-type"),h[e]])
}return g
},trackElementFromMap:function(e){var f=false,d;
this.fillMap();
d=e.data("analytics-element");
if(!d){return f
}f=[this.map[d].page,this.map[d].section,this.map[d].component,d,this.map[d].action];
return f
}}}
}(jQuery,TwitterAEM));
(function(c,a,b){a.analytics.helper_tfw={attach:function(e,f){var d=this;
if(typeof twttr!=="undefined"&&typeof b._gaq!=="undefined"&&twttr.ready!==undefined&&twttr.events!==undefined){twttr.ready(function(g){g.events.bind("follow",function(h){d.track_follow_click(h)
})
})
}},track_follow_click:function(f){var e="gaz";
var d=f.type;
var g=f.data.screen_name;
_gaq.push(["_trackEvent",e,d,g])
}}
})(jQuery,TwitterAEM,window);