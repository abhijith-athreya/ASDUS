(function(a){a.url={};
a.extend(a.url,{_params:{},init:function(){var b="";
try{b=(document.location.href.split("?",2)[1]||"").split("#")[0].split("&")||[];
for(var c=0;
c<b.length;
c++){var f=b[c].split("=");
if(f[0]){this._params[f[0]]=unescape(f[1])
}}}catch(d){alert(d)
}},param:function(b){return this._params[b]||""
},paramAll:function(){return this._p
},url:function(){return document.location.pathname
},page:function(){var b=document.location.pathname.split("/");
return b[b.length-1]
}});
a.url.init()
})(jQuery);