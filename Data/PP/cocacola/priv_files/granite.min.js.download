(function(c,b,d){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(f,e){if(typeof G_IS_HOOKED=="undefined"||!G_IS_HOOKED(e.url)){if(e.externalize){e.url=a.externalize(e.url)
}if(e.encodePath){e.url=a.encodePathOfURI(e.url)
}}if(e.hook){var g=a.getXhrHook(e.url,e.type,e.data);
if(g){e.url=g.url;
if(g.params){if(e.type.toUpperCase()=="GET"){e.url+="?"+c.param(g.params)
}else{e.data=c.param(g.params)
}}}}},statusCode:{403:function(e){if(e.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
(function(e,b){e.Granite=e.Granite||{};
if(e.Granite.csrf){return
}e.Granite.csrf={initialised:false,refreshToken:l};
function h(){this._handler=[]
}h.prototype={then:function(r,q){this._handler.push({resolve:r,reject:q})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(q,r){if(this._handler===null){throw new Error("Promise already completed.")
}for(var s=0,t=this._handler.length;
s<t;
s++){this._handler[s][q].apply(e,r)
}this.then=function(v,u){(q==="resolve"?v:u).apply(e,r)
};
this._handler=null
}};
function i(r){var s=document.location.host,u=document.location.protocol,t="//"+s,q=u+t;
return(r==q||r.slice(0,q.length+1)==q+"/")||(r==t||r.slice(0,t.length+1)==t+"/")||!(/^(\/\/|http:|https:).*/.test(r))
}var k=":cq_csrf_token",j="CSRF-Token",m="/libs/granite/csrf/token.json";
var p,g;
function l(){p=new h();
var q=new XMLHttpRequest();
q.onreadystatechange=function(){if(q.readyState===4){try{var s=JSON.parse(q.responseText);
g=s.token;
p.resolve(g)
}catch(r){p.reject(q.responseText)
}}};
q.open("GET",Granite.HTTP.externalize(m),true);
q.send();
return p
}function a(r){var s=r.getAttribute("action");
if(r.method.toUpperCase()==="GET"||(s&&!i(s))){return
}var q=r.querySelector('input[name="'+k+'"]');
if(!q){q=document.createElement("input");
q.setAttribute("type","hidden");
q.setAttribute("name",k);
r.appendChild(q)
}q.setAttribute("value",g)
}function n(q){var r=function(u){var s=u.target;
if(s.nodeName.toLowerCase()==="form"&&g){a(s)
}};
if(q.addEventListener){q.addEventListener("submit",r,true)
}else{if(q.attachEvent){q.attachEvent("submit",r)
}}}l();
n(document);
var d=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(r,q){if(i(q)&&r.toLowerCase()!=="get"){this._csrf=true
}return d.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(s){if(!this._csrf){c.apply(this,arguments);
return
}if(g){this.setRequestHeader(j,g);
c.apply(this,arguments);
return
}var q=this;
var r=Array.prototype.slice.call(arguments);
p.then(function(t){q.setRequestHeader(j,t);
c.apply(q,r)
},function(){if(e.console){console.error("Unable to read CSRF meta information")
}c.apply(q,r)
})
};
var f=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return f.apply(this,arguments)
};
if(e.Node){var o=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var q=o.apply(this,arguments);
if(q.nodeName==="IFRAME"){try{if(q.contentWindow&&!q._csrf){q._csrf=true;
n(q.contentWindow.document)
}}catch(r){if(q.src&&q.src.length&&i(q.src)){if(e.console){console.error("Unable to attach CSRF token an iframe element on the same origin")
}}}}return q
}
}setInterval(function(){l()
},300000)
})(this);