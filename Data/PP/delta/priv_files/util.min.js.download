if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){for(var b=(d||0),a=this.length;
b<a;
b++){if(this[b]===c){return b
}}return -1
}
}if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Sitecatalyst={events:[],trackVars:[],settings:[],hasEvent:function(d){if(CQ_Analytics.DataProvider.hasStore("eventdata")){var b=CQ_Analytics.DataProvider.getItem("eventdata","events").split("\u2026");
var c=b.length;
while(c--){if(b[c]===d){return true
}}}return false
},setEvar:function(mapping){var evar=mapping.scVar;
var value=mapping.cqVar;
var isProduct=evar.match(/^product\./)||value.match(/product\./);
var stores=CQ_Analytics.DataProvider.getStores();
for(var store in stores){try{eval("var "+store+" = stores[store].data;")
}catch(e){}}if(this.hasEvent(value.replace(/.+\./,""))){if(this.events.indexOf(evar)<0){this.events.push(evar);
this.updateLinkTrackEvents()
}}else{if(value==""){return
}try{if(isProduct){if(!evar.match(/^eVar\d+/)){s.products=eval("eventdata.products");
if(this.trackVars.indexOf("products")<0){this.trackVars.push("products")
}}}else{var tmpEvar=CQ_Analytics.DataProvider.replaceVariables(eval(value));
if(typeof(tmpEvar)!=="undefined"){var eVar=evar.replace("evar","eVar");
s[eVar]=tmpEvar;
if(this.trackVars.indexOf(eVar)<0){this.trackVars.push(eVar)
}}}}catch(e){console.log("Could not set "+evar+": "+e)
}}},updateLinkTrackEvents:function(){s.events=this.events.join(",");
s.linkTrackEvents=s.events
},updateLinkTrackVars:function(){s.linkTrackVars=this.trackVars.join(",")
},eraseTrackVars:function(b){for(var a=0;
a<this.trackVars.length;
a++){var c=this.trackVars[a];
if(c!=="events"){if(b){b[c]=s[c]
}delete s[c]
}}this.trackVars=[]
},saveEvars:function(){var a={events:this.events,trackVars:this.trackVars,linkTrackVars:s.linkTrackVars,linkTrackEvents:s.linkTrackEvents};
this.events=[];
this.eraseTrackVars(a);
this.settings.push(a)
},restoreEvars:function(){var a=this.settings.pop();
this.events=a.events;
delete a.events;
this.trackVars=a.trackVars;
delete a.trackVars;
this.updateLinkTrackEvents();
this.eraseTrackVars();
for(var b in a){s[b]=a[b]
}},stopTrackingTemporarily:function(){var a={trackDownloadLinks:s.trackDownloadLinks,trackExternalLinks:s.trackExternalLinks};
s.trackDownloadLinks=false;
s.trackExternalLinks=false;
setTimeout(function(){for(var b in a){s[b]=a[b]
}},200)
},trackLink:function(i){var g=i.options.obj;
var d=(g&&g.href)?g:true,b=(g&&g.name)?g.name:"",e=i.options.defaultLinkType||"o",a=(d&&d.href&&s.lt)?s.lt(d.href):"";
var f=i.options.variableOverrides||null;
var h=i.options.doneAction||null;
if(a===""){a=e
}b=b||i.options.linkName||"default-link-name";
var c=s.tl(d,a,b,f,h);
if(c){document.write(c)
}this.stopTrackingTemporarily()
},customTrack:function(obj){var events=obj.getAttribute("adhocevents")||"";
var evars=obj.getAttribute("adhocevars")||"";
if(events||evars){var stores=CQ_Analytics.DataProvider.getStores();
for(var store in stores){try{eval("var "+store+" = stores[store].data;")
}catch(e){}}try{eval("evars = {"+evars+"}")
}catch(e){}CQ_Analytics.Sitecatalyst.saveEvars();
try{var linkTrackVars=[];
if(events.length>0){s.linkTrackEvents=s.events=events;
linkTrackVars.push("events")
}for(var key in evars){linkTrackVars.push(key);
var value="'"+escape(evars[key])+"'";
this.setEvar({scVar:key,cqVar:value})
}if(linkTrackVars.length>0){s.linkTrackVars=linkTrackVars.join(",")
}this.trackLink({options:{obj:obj}})
}finally{CQ_Analytics.Sitecatalyst.restoreEvars()
}}},collect:function(a){var c=document.getElementsByTagName("*");
for(var b=0;
b<c.length;
b++){if(c[b].getAttribute("data-tracking")){this.processDataAttribute(c[b].getAttribute("data-tracking"),a)
}else{if(c[b].getAttribute("record")){this.processRecordAttribute(c[b].getAttribute("record"),a)
}}}},processRecordAttribute:function(attribute,forceCollect){try{if(forceCollect===undefined){forceCollect=true
}var result=eval("record("+attribute+","+forceCollect+")");
if(result){this.storeTrackingData(result)
}}catch(err){if(window.console){window.console.error(err.message)
}}},processDataAttribute:function(attribute,forceCollect){try{var json=eval("("+attribute+")");
if(forceCollect){json.collect=true
}var result=CQ_Analytics.record(json);
if(result){this.storeTrackingData(result)
}}catch(err){if(window.console){window.console.error(err.message)
}}},storeTrackingData:function(a){if(CQ_Analytics.DataProvider.hasStore("eventdata")){var e=CQ_Analytics.DataProvider.getItem("eventdata","events");
var b=this.toObj(e.split("\u2026"));
var c=a[0];
b[c]=c;
var d=a[1];
CQ_Analytics.storeData(d);
CQ_Analytics.DataProvider.setItem("eventdata","events",this.toArr(b).join("\u2026"))
}else{if(window.console){window.console.error("EventData Store is missing, unable to set data for analytics.")
}}},toArr:function(b){var a=[];
for(property in b){a.push(b[property])
}return a
},toObj:function(a){var d={};
for(var c=0;
c<a.length;
c++){var b=a[c];
d[b]=b
}return d
}};