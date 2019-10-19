"use strict";
var cookies={cookieHost:".adobe.com",cookiePath:"/",getCookie:function(g){var f=g+"=",h=function(){return document.cookie
},d=h(),a=d.indexOf(f),c=d.match(/.*[^;]$/i)?d+";":d,b=c.indexOf(";",a),e;
if((a!==-1&&b!==-1)&&b>a){e=c.substring(a,b).split("=")[1];
if(e){return e
}else{return undefined
}}else{return undefined
}},setCookie:function(c,g,e){var f=new Date(),b=g.toString()?g:"",h=e?e:0,a;
f.setTime(f.getTime()+(h*24*60*60*1000));
a=h!==0?"expires="+f.toUTCString()+";":"expires="+0+";";
document.cookie=c+"="+b+"; "+a+" domain="+this.cookieHost+"; path="+this.cookiePath+";"
},resetCookieHost:function(a){this.cookieHost=a
}},geoOb={options:{regionCookie:"international",modalCookie:"georouting_presented",defaultRegCookie:"us",defaultCountry:"US",geoArray:["africa","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cis_en","cis_ru","cn","cy_en","cz","de","dk","ee","eeurope","es","fi","fr","gr_en","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mt","mena_ar","mena_en","mena_fr","mx","nl","no","nz","pl","pt","ro","rs","ru","se","sea","si","sk","tr","tw","ua","uk"],searchMap:{"google.fr":"fr","google.co.uk":"uk","google.com.au":"au","google.co.jp":"jp","google.de":"de","google.ca":["ca","ca_fr"],"google.co.id":"sea","google.co.in":"in","google.com.ph":"sea","google.com.tr":"tr","google.nl":"nl","google.no":"no","google.co.nz":"nz","google.pl":"pl","google.pt":"pt","google.ro":"ro","google.rs":"rs","google.ru":"ru","google.se":"se","google.si":"si","google.sk":"sk","google.com.tw":"tw","google.com.ua":"ua","google.co.za":"africa","google.com.ng":"africa","google.co.ke":"africa","google.com.gt":"la","google.co.cr":"la","google.com.co":"la","google.com.ar":"la","google.cl":"la","google.com.pa":"la","google.com.ec":"la","google.com.pe":"la","google.co.ve":"la","google.com.bo":"la","google.com.ni":"la","google.hn":"la","google.com.uy":"la","google.ae":["mena_ar","mena_en"],"google.com.kw":["mena_ar","mena_en"],"google.com.sa":["mena_ar","mena_en"],"google.com.bh":["mena_ar","mena_en"],"google.com.om":["mena_ar","mena_en"],"google.com.qa":["mena_ar","mena_en","mena_fr"],"google.jo":["mena_ar","mena_en"],"google.com.eg":["mena_ar","mena_en","mena_fr"],"google.co.ma":["mena_ar","mena_fr","mena_en"],"google.iq":["mena_ar","mena_en"],"google.tn":["mena_ar","mena_fr"],"google.com.sg":"sea","google.com.my":"sea","google.co.th":"sea","google.com.vn":"sea","google.li":"de","au.search.yahoo.com":"au","fr.search.yahoo.com":"fr","uk.search.yahoo.com":"uk","search.yahoo.co.jp":"jp","yandex.ru":["cis_en","cis_ru"],"de.search.yahoo.com":"de","tw.search.yahoo.com":"tw"},emea:["UK","FR","DE","SE","IT","ES","NL","DK","FI","EEUROPE","BG","CZ","EE","HR","HU","LT","LV","PL","RO","SK","SI","AT","BE_EN","BE_FR","BE_NL","IE","LU_DE","LU_EN","LU_FR","PT","CY_EN","GR_EN","MT","CA","CA_FR"],regparams:{},localStore:"false",modalCK:"",modalwr:".modal.modal-dom.geo",modalbuttons:".modal-content .ui-button",modalClose:'label[for="modal-toggle"]',hangerButtons:"#geohanger .ui-botton",hangerClose:"#geohanger .close a",geoAdobecom:"https://geo2.adobe.com/json/?callback=ajpRsp",cqlocHost:"https://www.adobe.com",geoMap:{},urlItems:{href:window.location.href,path:window.location.pathname,protocol:window.location.protocol,hash:window.location.hash,search:window.location.search,origin:window.location.origin,host:window.location.host,hostname:window.location.hostname,referrer:document.referrer}},ajpf:function(b,a,f){var c=Date.now(),e=document.createElement("script"),d=a?"&"+this.queryString(a):"";
b=d?b+d:b;
window.ajpRsp=this.ajpRsp(f,"geo_"+c);
e.type="text/javascript";
e.src=b;
e.id="geo_"+c;
document.querySelector("head").appendChild(e)
},ajpRsp:function(b,a){return function(f){var e=false,c=typeof f,d=document.getElementById(a);
switch(c){case"string":e=JSON.parse(f);
break;
case"object":e=f;
break
}if(e){b(e)
}else{throw ("invalid request or empty jsonp object")
}if(d){d.parentNode.removeChild(d)
}}
},regionDirect:function(a,b){var c=new XMLHttpRequest();
c.open("HEAD",a,true);
c.onreadystatechange=function(){if(c.readyState!==4){return
}if([200,201,202,203,204,205,206,302,304].indexOf(c.status)>=0){window.location=a
}else{window.location=b
}};
c.setRequestHeader("Content-type","text/plain; charset=utf-8");
c.send()
},queryString:function(a){return Object.keys(a).map(function(b){return[b,a[b]].map(encodeURIComponent).join("=")
}).join("&")
},mapMaps:function(e,d){var b,c,a;
for(b=0,c=Object.keys(d),a=c.length;
b<a;
b++){this.options[e][c[b]]=d[c[b]]
}},devFlag:function(){var d=this.options.urlItems.protocol,c=this.options.urlItems.host,b=c.replace(/(www.)/g,"").match(/^(qa|dev|stage|localhost)|(127.0.0.1)/g),a=c.replace(/(www.)/g,"").match(/^(localhost)|(127.0.0.1)|(aceui)/g);
if(b!==null){this.options.devFlag=true;
this.options.cqlocHost=(a===null)?d+"//"+c:"https://www.qa01.adobe.com";
cookies.resetCookieHost(c)
}},testMethod:function(f){var e=f.split("&"),a=e.length,g=e.splice(1,a-1),j=g.length,d,c,b;
for(d=0;
d<j;
d++){c=g[d].split("=")[0];
b=decodeURIComponent(g[d].split("=")[1]);
switch(c){case"country":this.options.regparams[c]=b;
break;
case"accept-language":this.options.regparams[c]=b;
break;
case"international":cookies.setCookie(c,b,1);
break;
case"path":this.options.urlItems[c]=b;
break;
case"referrer":this.options.urlItems[c]=b;
break
}}}},eld=function(f,e){var d=document.createElement(f),b,c,a;
if(e){for(b=0,c=Object.keys(e),a=c.length;
b<a;
b++){d.setAttribute(c[b],e[c[b]])
}return d
}return d
},parents=function(f,c,e){var d=f,b,a=e?e:document.body;
while(d&&d!==c&&d!==a){d=d.parentNode
}b=d===c;
return b
},modals={modaldom:eld("div",{"class":geoOb.options.modalwr.replace(/\./g," ").replace(/^ /,"")}),backdrop:eld("div",{"class":"modal-canvas"}),modalfrm:eld("div",{"class":"modal-frame"}),modalcontent:eld("div",{"class":"modal-content"}),wr:eld("div",{id:"geomodal","class":"grid-container geomodal"}),scrollwr:eld("div",{"class":"modalscrollwr"}),modalcol:{col:eld("div",{"class":"grid-span-5of5 modalcol"}),btns:eld("div",{"class":"modal-btns"}),icon:eld("i",{"class":"adobe-icon-globe icon-3x"}),scroller:eld("div",{"class":"paddedwr"}),build:function(f){var d,j,c,i,m,b,h,a,e,g,o,n=["AFRICA","AU","BE_EN","CA","CIS_EN","CY_EN","EG","EEUROPE","GR_EN","HK_EN","IE","IL_EN","IN","LU_EN","MENA_EN","MT","NZ","SEA","UK"];
this.scroller.appendChild(this.icon);
for(d=0,j=Object.keys(f).sort(),c=j.length;
d<c;
d++){i=f[j[d]];
if(j[d].toLowerCase()==="_us"){a=eld("div",{"class":"ui-button"});
e=eld("span",{"class":"default-lang",tabindex:1});
e.innerHTML=i.button
}else{g=eld("div",{"class":"ui-button"});
h=eld("a",{href:"","data-alang":j[d]});
h.innerHTML=i.button;
g.appendChild(h);
this.btns.appendChild(g)
}if(n.indexOf(j[d].toUpperCase())===-1){m=eld("div",{"class":"geowr"});
b=eld("p");
b.innerHTML=i.blurb;
m.appendChild(b);
m.setAttribute("lang",i.adobe_language_path);
m.setAttribute("writing_direction",i.writing_direction);
this.scroller.appendChild(m)
}}if(a){a.appendChild(e);
this.btns.appendChild(a)
}this.col.appendChild(this.scroller);
this.scroller.appendChild(this.btns);
return this.col
}},hanger:{container:function(){return eld("div",{id:"geohanger"})
},blockwr:function(){return eld("div")
},text:function(){return eld("p")
},button:function(){return eld("span",{"class":"ui-button"})
},buttona:function(a){return eld("a",{href:a})
},closer:function(){return eld("span",{"class":"close"})
},closetarget:function(){return eld("a",{href:"#"})
},closeicon:function(){return eld("i",{"class":"fa-times-circle"})
}},sethanger:function(d){var a=this.hanger.container(),h=this.hanger.blockwr(),i=this.hanger.text(),f=this.hanger.button(),g=this.hanger.buttona(d),j=this.hanger.closer(),c=this.hanger.closetarget(),e=document.querySelector("body > header")?document.querySelector("body > header"):document.querySelector(".Gnav-spacing"),b;
c.appendChild(this.hanger.closeicon());
j.appendChild(c);
i.innerHTML="The page that you requested is not available in your preferred language, click the button below to view this page in:";
g.innerHTML="English";
f.appendChild(g);
h.appendChild(i);
h.appendChild(f);
a.appendChild(h);
a.appendChild(j);
b=e?e:document.querySelector(".Gnav-wr");
document.querySelector("body").insertBefore(a,b)
},setmodal:function(c){var a=document.querySelector("body"),f=eld("span",{"class":"close"}),d=eld("a",{href:"#"}),e=eld("i",{"class":"ui-close"}),b=eld("i",{"class":"fa-times-circle"});
d.appendChild(e);
d.appendChild(b);
f.appendChild(d);
this.scrollwr.appendChild(this.modalcol.build(c));
this.modalcontent.appendChild(this.scrollwr);
this.modalfrm.appendChild(this.modalcontent);
this.modalfrm.appendChild(f);
this.backdrop.appendChild(this.modalfrm);
this.modaldom.appendChild(this.backdrop);
document.querySelector("body").appendChild(this.modaldom);
cookies.setCookie(geoOb.options.modalCookie,true,30)
},removemodal:function(c,a){var e=!a?document.querySelector(".modal.modal-dom.geo"):a,d=e.parentNode;
d.removeChild(e)
}};
function Loader(){var j=geoOb.options,d=j.akamai,i=j.geoMap,b=j.urlItems,g,e=i.intlCookie,a=e===j.defaultRegCookie,c=j.geoArray.indexOf(b.path.split("/")[1])>=0?b.path.split("/")[1]:j.defaultRegCookie;
function f(n,p,q){var o=j.urlItems,l=n.indexOf("ui-button")>=0?q.target:p.indexOf("ui-button")>=0?q.target.firstElementChild:"",r=l.getAttribute("data-alang"),s=(o.hash||o.search)?(o.path+o.search).replace(o.hash,""):o.path+o.search,k=o.protocol+"//"+o.host+"/"+r+s,m=o.protocol+"//"+o.host+"/"+r;
if(r!==j.defaultRegCookie&&r!==undefined&&r!==null){cookies.setCookie(j.regionCookie,r,180);
geoOb.regionDirect(k,m)
}else{modals.removemodal(q.target)
}}function h(o){var l=document.querySelector("#geohanger"),p=o.target.parentNode.getAttribute("class")?o.target.parentNode.getAttribute("class"):"",m=o.target.getAttribute("class")?o.target.getAttribute("class"):"",k=m&&(o.target.nodeName!=="A"&&o.target.nodeName!=="I")?o.target.firstElementChild.getAttribute("href"):o.target.nodeName!=="I"?o.target.getAttribute("href"):"",n=p.indexOf("ui-button")>=0||m.indexOf("ui-button")>=0;
if(n){cookies.setCookie(geoOb.options.regionCookie,"",0);
cookies.setCookie("rdresna","",0);
window.location=k
}else{if(k===""){cookies.setCookie("rdresna","",0);
modals.removemodal(o.target,l)
}}}this.redirect=function(){var n=b.protocol,m=b.host,p=(b.hash||b.search)?(b.path+b.search).replace(b.hash,""):b.path+b.search,l=p.split("/")[1],q=j.geoArray.indexOf(l)>=0?p.replace("/"+l,""):p,k=e!==j.defaultRegCookie?n+"//"+m+"/"+e+q:n+"//"+m+q,o=e!==j.defaultRegCookie?n+"//"+m+"/"+e:n+"//"+m;
if(!a&&e!==c&&g===undefined){geoOb.regionDirect(k,o);
return true
}return false
};
this.load=function(){var s=j.akamai.country.toLowerCase(),n=b.referrer.replace(/(http[s]?:\/\/)(www.)?/i,"").split("/")[0],t=j.searchMap[n]!==""||j.searchMap[n]!==undefined?j.searchMap[n]:"",u=t!==""&&Array.isArray(t)?t[0].split("_")[0]:"",q=t!==""&&!Array.isArray(t)&&j.geoArray.indexOf(t)>=0?t:u,k=c===j.defaultRegCookie,l=q===j.defaultRegCookie,o=s===j.defaultCountry.toLowerCase(),p=q!==""?q:s,m,v,r;
if(g!==undefined){modals.sethanger(g)
}else{if((a&&k)&&j.modalCK===undefined&&((!l&&q!=="")||!o)){m=j.cqlocHost;
v="/etc/beagle/public/";
r="geoinfo."+p+".json";
geoOb.ajpf(m+v+r,false,function(w){geoOb.mapMaps("geoMap",w);
modals.setmodal(i.loc_strings)
})
}}document.addEventListener("click",function(D){var E=document.querySelector(j.modalwr),z,F,y,B,A,C,x,w;
if(E){D.preventDefault();
z=document.querySelector(".modal-canvas");
F=parents(D.target,z,E);
y=document.querySelector(".modal-frame");
B=parents(D.target,y,E);
A=D.target.parentNode.getAttribute("class")?D.target.parentNode.getAttribute("class"):"";
C=D.target.getAttribute("class")?D.target.getAttribute("class"):"";
x=A.indexOf("ui-button")>=0||C.indexOf("ui-button")>=0;
w=parents(D.target,document.querySelector(".close"));
if(F&&!B&&!x&&!w){modals.removemodal(D.target);
D.stopPropagation()
}if(x&&!w){f(A,C,D);
D.stopPropagation()
}if(w){modals.removemodal(D.target);
D.stopPropagation()
}}else{if(document.querySelector("#geohanger")){D.preventDefault();
h(D);
D.stopPropagation()
}}D.stopPropagation()
});
document.addEventListener("keyup",function(w){if(w.keyCode===27&&document.querySelector(j.modalwr)){modals.removemodal(w.target);
w.stopPropagation()
}})
}
}(function(){var a=document.createEvent("Event");
geoOb.devFlag();
if(geoOb.options.urlItems.hash){geoOb.testMethod(geoOb.options.urlItems.hash)
}geoOb.ajpf(geoOb.options.geoAdobecom,geoOb.options.regparams,function(b){geoOb.options.akamai={};
geoOb.mapMaps("akamai",b);
a.initEvent("aceui:geoLoaded",true,true);
window.Adobe=(typeof window.Adobe==="undefined")?{}:window.Adobe;
window.Adobe.geoLoaded=true;
document.dispatchEvent(a)
})
})();
function initGeoLoader(){var d=["adobe-students.com"],a=window.location.hostname.replace(/(www.)/,""),c,b;
function e(){geoOb.options.modalCK=cookies.getCookie(geoOb.options.modalCookie);
geoOb.options.geoMap.intlCookie=geoOb.options.geoArray.indexOf(cookies.getCookie(geoOb.options.regionCookie))>=0?cookies.getCookie(geoOb.options.regionCookie):geoOb.options.defaultRegCookie;
c=new Loader();
b=c.redirect();
if(b===false){c.load()
}}if(d.indexOf(a)===-1){e()
}}(function(a){a.HtmlComponent={insertCssLinkTag:function(f){var j=HtmlComponent.escapeJCRContent(f)+".customcss.css";
var d=undefined;
var c=document.head.getElementsByTagName("link");
var b="";
for(var e=0,h=c.length;
e<h;
e++){b=c[e].getAttribute("href");
if(b==j){return
}else{if(typeof b==="string"&&b.indexOf("/etc/clientlibs/beagle/ace/source/css/aceui-reimagine.min.css")!==-1){d=c[e]
}}}if(d!=undefined){var g=document.createElement("link");
g.href=j;
g.rel="stylesheet";
g.type="text/css";
document.head.appendChild(g)
}else{}},insertJavascriptTag:function(g){var d=HtmlComponent.escapeJCRContent(g)+".customjavascript.js";
var f=undefined;
var e=document.body.getElementsByTagName("script");
var c="";
for(var b=0,j=e.length;
b<j;
b++){c=e[b].getAttribute("src");
if(c==d){return
}else{if(typeof c==="string"&&c.indexOf("/etc/clientlibs/beagle/ace/source/js/aceui-reimagine.min.js")!==-1){f=e[b]
}}}if(f!=undefined){var h=document.createElement("script");
h.src=d;
h.type="text/javascript";
document.body.appendChild(h)
}else{}},validateContent:function(c){var b=c.getField("./customhtml");
if(!HtmlComponent.hasValidContent(b.getValue())){CQ.Ext.MessageBox.show({title:"Error",msg:HtmlComponent.ERROR_MESSAGE,buttons:CQ.Ext.MessageBox.OK,icon:CQ.Ext.MessageBox.ERROR});
c.findById("htmlTab").show();
b.markInvalid(HtmlComponent.ERROR_MESSAGE);
return false
}return true
},hasValidContent:function(b){var c=true;
c=(b.indexOf("<script")===-1)&&(b.indexOf("<\/script")===-1)&&(b.indexOf("<style")===-1)&&(b.indexOf("</style")===-1)&&(b.indexOf("<link")===-1);
return c
},escapeJCRContent:function(b){return b.replace(/jcr:content/g,"_jcr_content")
},ERROR_MESSAGE:"&lt;script&gt;, &lt;style&gt; & &lt;link&gt; tags are not supported. Please remove them & try again"}
}(window));
(function(a){a.CommonUtils={getMarketSegment:function(){var b;
if(typeof $.cookie!=="undefined"){b=$.cookie("x-adobe-cart-marketsegment");
if(typeof b==="undefined"){b=CommonUtils.DEFAULT
}}return b
},DEFAULT:"COM"}
}(window));
var fbPixelId=document.getElementById("fbPixelId");
if(fbPixelId!==null){var _fb_pixel_id=fbPixelId.getAttribute("data-fb-pixelid");
if(_fb_pixel_id!==null){facePixelTracking(window,document,"script","//connect.facebook.net/en_US/fbevents.js");
fbq("init",_fb_pixel_id);
fbq("track","ViewContent")
}}function facePixelTracking(h,a,i,c,j,d,g){if(h.fbq){return
}j=h.fbq=function(){j.callMethod?j.callMethod.apply(j,arguments):j.queue.push(arguments)
};
if(!h._fbq){h._fbq=j
}j.push=j;
j.loaded=!0;
j.version="2.0";
j.queue=[];
d=a.createElement(i);
d.async=!0;
d.src=c;
g=a.getElementsByTagName(i)[0];
g.parentNode.insertBefore(d,g)
};