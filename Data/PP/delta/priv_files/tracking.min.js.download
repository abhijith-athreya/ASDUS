if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.storeData=function(v){var m=function(p,l){for(var k=0;
k<CQ_Analytics.Sitecatalyst.frameworkMappings.length;
k++){var j=CQ_Analytics.Sitecatalyst.frameworkMappings[k];
if(j[p]===l){return j
}}return null
};
var r=function(j){if(typeof j==="string"){return j.replace(/[,;=\|]/g,"")
}return j
};
for(var u in v){if(u!=="product"){var n=u.indexOf(".");
var q=(n>0)?u.substr(0,n-1):undefined;
var w=(n>0)?u.substr(n):u;
CQ_Analytics.DataProvider.setItem("eventdata",w,v[u])
}else{var i=["category","sku","quantity","price","events","evars"];
var c=CQ_Analytics.DataProvider.getItem("eventdata","products").split(",");
c=(c[0]=="")?new Array():c;
var e=(v[u] instanceof Array)?v[u]:[v[u]];
for(var h=0;
h<e.length;
h++){var o=e[h];
var b=new Array(6);
for(var t in o){var n=i.indexOf(t);
if(n>-1){if(n<4){b[n]=r(o[t])
}else{var f=[];
for(var s in o[t]){var d="eventdata."+u+"."+t+"."+s;
var g=m("cqVar",d);
if(g){f.push(g.scVar+"="+r(o[t][s]));
var a=CQ_Analytics.DataProvider.getItem("eventdata","events").split("\u2026");
if(a.indexOf(g.cqVar)<0){a.push(g.cqVar.replace(/.+\./,""));
CQ_Analytics.DataProvider.setItem("eventdata","events",a.join("\u2026"))
}}}b[n]=f.join("|")
}}}c.push(b.join(";"))
}CQ_Analytics.DataProvider.setItem("eventdata","products",c.join(","))
}}};
CQ_Analytics.record=function(a){if(a.collect){return[a.event,a.values]
}else{if(a.event){a.options=a.options||{};
try{CQ_Analytics.recordBeforeCallbacks.sort(function(f,e){return f.rank-e.rank
});
for(var d in CQ_Analytics.recordBeforeCallbacks){if(CQ_Analytics.recordBeforeCallbacks[d].func.call(this,a)){return
}}}catch(c){}CQ_Analytics.DataProvider.reset("eventdata");
var b=a.event;
if(typeof a.event!=="string"){b=a.event.join("\u2026")
}CQ_Analytics.DataProvider.setItem("eventdata","events",b);
if(a.values){CQ_Analytics.storeData(a.values)
}try{CQ_Analytics.recordAfterCallbacks.sort(function(f,e){return f.rank-e.rank
});
for(var d in CQ_Analytics.recordAfterCallbacks){if(CQ_Analytics.recordAfterCallbacks[d].func.call(this,a)){return
}}}catch(c){}}}};
CQ_Analytics.recordBeforeCallbacks=[];
CQ_Analytics.recordAfterCallbacks=[];
CQ_Analytics.registerBeforeCallback=function(b,a){CQ_Analytics.recordBeforeCallbacks.push({rank:a,func:b})
};
CQ_Analytics.registerAfterCallback=function(b,a){CQ_Analytics.recordAfterCallbacks.push({rank:a,func:b})
};
function record(g,a,j,d,e){var b={};
b.event=g;
b.values=a;
b.collect=j;
b.options=d;
b.componentPath=e;
b.compatibility=true;
var h=function(f){return function(i){f.call(this,i.event,i.values);
return false
}
};
for(var c=record.callbacks.length-1;
c>=0;
c--){CQ_Analytics.registerAfterCallback(h(record.callbacks[c]),150-c);
record.callbacks.pop()
}return CQ_Analytics.record(b)
}record.callbacks=[];