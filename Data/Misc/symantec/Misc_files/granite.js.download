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