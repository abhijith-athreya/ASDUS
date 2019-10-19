window.Granite=window.Granite||{};
Granite.Sling={SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"};
(function(a,b){a.Util=(function(){var c={patchText:function(f,e){if(e){if(!b.isArray(e)){f=f.replace("{0}",e)
}else{for(var d=0;
d<e.length;
d++){f=f.replace(("{"+d+"}"),e[d])
}}}return f
},getTopWindow:function(){var e=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(e.parent&&e!==e.parent&&e.parent.location.href){e=e.parent
}}catch(d){}return e
},setIFrameMode:function(d){this.iFrameTopWindow=d||window
},applyDefaults:function(){var f,h=arguments[0]||{};
for(var e=1;
e<arguments.length;
e++){f=arguments[e];
for(var d in f){var g=f[d];
if(f.hasOwnProperty(d)&&g){if(typeof g==="object"&&!(g instanceof Array)){h[d]=c.applyDefaults(h[d],g)
}else{if(g instanceof Array){h[d]=g.slice(0)
}else{h[d]=g
}}}}}return h
},getKeyCode:function(d){return d.keyCode?d.keyCode:d.which
}};
return c
}())
}(Granite,jQuery));
(function(Granite,util,sling,$){Granite.HTTP=(function(){var contextPath=null,SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,loginRedirected=false,self={};
self.getSchemeAndAuthority=function(url){var end;
try{if(url.indexOf("://")==-1){return""
}end=url.indexOf("/",url.indexOf("://")+3);
return(end==-1)?url:url.substring(0,end)
}catch(e){return""
}};
self.getContextPath=function(){return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return
}}contextPath=""
}}catch(e){}};
self.externalize=function(url){try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)=="/"){if(contextPath&&url.indexOf(contextPath)==0){return url.substring(contextPath.length)
}else{return url
}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
};
self.removeParameters=function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
};
self.encodePathOfURI=function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize(sling.LOGIN_URL)+"?resource="+l.pathname+encodeURIComponent(l.search)+l.hash
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}(Granite,Granite.Util,Granite.Sling,jQuery));
(function(document,Granite,util,http,$){Granite.I18n=(function(){var dicts={},urlPrefix="/libs/cq/i18n/dict.",urlSuffix=".json",manualLocale=undefined,pseudoTranslations=false,languages=null,self={},manualDictionary=false,getDictionaryUrl=function(locale){if(manualDictionary){return urlPrefix+locale+urlSuffix
}var dictionarySrc=$("html").attr("data-i18n-dictionary-src");
if(!dictionarySrc){return urlPrefix+locale+urlSuffix
}return dictionarySrc.replace("{locale}",encodeURIComponent(locale)).replace("{+locale}",locale)
};
self.LOCALE_DEFAULT="en";
self.PSEUDO_LANGUAGE="zz";
self.PSEUDO_PATTERN_KEY="_pseudoPattern_";
self.init=function(config){config=config||{};
this.setLocale(config.locale);
this.setUrlPrefix(config.urlPrefix);
this.setUrlSuffix(config.urlSuffix)
};
self.setLocale=function(locale){if(!locale){return
}manualLocale=locale
};
self.getLocale=function(){if($.isFunction(manualLocale)){manualLocale=manualLocale()
}return manualLocale||document.documentElement.lang||self.LOCALE_DEFAULT
};
self.setUrlPrefix=function(prefix){if(!prefix){return
}urlPrefix=prefix;
manualDictionary=true
};
self.setUrlSuffix=function(suffix){if(!suffix){return
}urlSuffix=suffix;
manualDictionary=true
};
self.getDictionary=function(locale){locale=locale||self.getLocale();
if(!dicts[locale]){pseudoTranslations=(locale.indexOf(self.PSEUDO_LANGUAGE)==0);
try{var response=$.ajax(getDictionaryUrl(locale),{async:false,dataType:"json"});
dicts[locale]=$.parseJSON(response.responseText)
}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
};
self.get=function(text,snippets,note){var dict,newText,lookupText;
dict=self.getDictionary();
lookupText=pseudoTranslations?self.PSEUDO_PATTERN_KEY:note?text+" (("+note+"))":text;
if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}if(pseudoTranslations){newText=newText.replace("{string}",text).replace("{comment}",note?note:"")
}return util.patchText(newText,snippets)
};
self.getVar=function(text,note){if(!text){return null
}return self.get(text,null,note)
};
self.getLanguages=function(){if(!languages){try{var json=http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
$.each(json,function(name,lang){lang.title=self.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+self.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
};
self.parseLocale=function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
};
return self
}())
}(document,Granite,Granite.Util,Granite.HTTP,jQuery));
(function(b,c){var a=function(){var e={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var f={};
var d=[];
return{debugWithMouse:false,init:function(){var g=this;
c(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator",function(i){var h=i.originalEvent.touches;
g.update(h);
return true
});
if(this.debugWithMouse){c(document).on("mousemove.touchindicator",function(h){h.identifer="fake";
g.update([h]);
return true
})
}},update:function(k){var h={};
for(var j=0;
j<k.length;
j++){var m=k[j];
var l=m.identifier;
var g=f[l];
if(!g){g=d.pop();
if(!g){g=c("<div></div>").css(e);
c("body").append(g)
}}h[l]=g;
g.offset({left:m.pageX-20,top:m.pageY-20});
g.css("visibility","visible")
}for(l in f){if(f.hasOwnProperty(l)&&!h[l]){g=f[l];
g.css("visibility","hidden");
d.push(g)
}}f=h
}}
};
b.TouchIndicator=new a()
}(Granite,jQuery));
(function(c,a,b,d){c.OptOutUtil=(function(){var e={};
var f=[];
var g=[];
e.init=function(h){if(h){f=h.cookieNames?h.cookieNames:f;
g=h.whitelistCookieNames?h.whitelistCookieNames:g
}};
e.getCookieNames=function(){return f
};
e.getWhitelistCookieNames=function(){return g
};
e.isOptedOut=function(){var k=document.cookie.split(";");
for(var j=0;
j<k.length;
j++){var h=k[j];
var l=d.trim(h.split("=")[0]);
if(d.inArray(l,e.getCookieNames())>-1){return true
}}return false
};
e.maySetCookie=function(h){return !(e.isOptedOut()&&d.inArray(h,e.getWhitelistCookieNames())===-1)
};
return e
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();