if(!window.CQ_Analytics){window.CQ_Analytics={}
}(function(){CQ_Analytics.DataProvider=(function(){var a=window.ContextHub;
var h=window.ClientContext;
var b=a||h;
var e=b;
function i(q){if(!q||typeof(q)!="string"){return[]
}var p=q.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return p?p:[]
}function c(p){if(!p||p.length<2){return null
}return p.substring(2,p.length-1)
}return{hasStore:function o(p){if(e===a){return(ContextHub.getStore(p)!=="undefined")
}else{return(CQ_Analytics.CCM.stores[p]!=="undefined")
}},getStores:function f(){if(e===a){var p={};
var q=ContextHub.getAllStores();
Object.keys(q).forEach(function(s,t){var r=q[s];
p[r.name]={};
p[r.name].data=r.getTree()
});
return p
}else{return CQ_Analytics.CCM.getStores()
}},setItem:function g(p,q,r){if(e===a){ContextHub.setItem("/store/"+p+"/"+q,r)
}else{CQ_Analytics.CCM.stores[p].setProperty(q,r)
}},getItem:function n(p,q){if(e===a){return ContextHub.getItem("/store/"+p+"/"+q)||""
}else{return CQ_Analytics.CCM.stores[p].getProperty(q)
}},reset:function k(p){if(e===a){ContextHub.getStore(p).reset()
}else{CQ_Analytics.CCM.stores[p].reset()
}},exists:function m(){if(e===a){return(ContextHub&&ContextHub.version)
}else{return(CQ_Analytics&&CQ_Analytics.ClientContextMgr&&CQ_Analytics.ClientContextMgr.isConfigLoaded)
}},onReady:function j(p){if(e===a){ContextHub.eventing.on([ContextHub.Constants.EVENT_ALL_STORES_READY,ContextHub.Constants.EVENT_STORES_PARTIALLY_READY],function(q,r){p.call(this)
},null,true)
}else{if(CQ_Analytics.CCM.areStoresInitialized){p.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",function(q){p.call(this)
})
}}},setType:function d(p){e=p
},getType:function l(){if(e){return e
}return b
},replaceVariables:function(t){if(!t){return t
}var u="";
var s=t;
var w=i(t);
while(w.length>0&&u.indexOf(w.join())==-1){for(var r=0;
r<w.length;
r++){var q=c(w[r]);
var p="";
if(e===a){p=ContextHub.getItem(q)
}else{p=CQ_Analytics.ClientContext.get(q)
}s=s.replace(new RegExp("\\$\\{"+q+"\\}","ig"),p)
}u+=w.join();
w=i(s)
}return s
}}
})()
})();