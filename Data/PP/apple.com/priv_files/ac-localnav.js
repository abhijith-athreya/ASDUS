require=(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":2,"./ac-browser/IE":3}],2:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.filter");
b("@marcom/ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":4,"@marcom/ac-polyfills/Array/prototype.filter":69,"@marcom/ac-polyfills/Array/prototype.some":74}],3:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],4:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],5:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");b("@marcom/ac-polyfills/Element/prototype.classList");
var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":7,"@marcom/ac-polyfills/Array/prototype.slice":73,"@marcom/ac-polyfills/Element/prototype.classList":75}],6:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":7,"./className/contains":8,"./className/remove":10}],7:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":8}],8:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":9}],9:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],10:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":8,"./getTokenRegExp":9}],11:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":8,"@marcom/ac-polyfills/Element/prototype.classList":75}],12:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":5,"./contains":11,"./remove":13,"./toggle":14}],13:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":10,"@marcom/ac-polyfills/Array/prototype.slice":73,"@marcom/ac-polyfills/Element/prototype.classList":75}],14:[function(c,d,b){c("@marcom/ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":6,"@marcom/ac-polyfills/Element/prototype.classList":75}],15:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],16:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],17:[function(f,d,h){var a=f("./shared/stylePropertyCache");var i=f("./shared/getStyleTestElement");
var b=f("./utils/toCSS");var k=f("./utils/toDOM");var j=f("./shared/prefixHelper");
var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);a[o]=a[l]=a[m]=a[n]={dom:l,css:n};
return l};d.exports=function g(p){var n;var l;var o;var m;p+="";if(p in a){return a[p].dom
}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);if(p==="filter"){n=["WebkitFilter","filter"]
}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":19,"./shared/prefixHelper":20,"./shared/stylePropertyCache":21,"./utils/toCSS":23,"./utils/toDOM":24}],18:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":17,"./shared/prefixHelper":20,"./shared/stylePropertyCache":21,"./shared/styleValueAvailable":22}],19:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],20:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];
var f=["Webkit","Moz","ms"];var h=["webkit","moz","ms"];var c=function(){this.initialize()
};var g=c.prototype;g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;
this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;this.css=[this.css[j]];
this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()},{}],21:[function(b,c,a){c.exports={}
},{}],22:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":19,"./stylePropertyCache":21}],23:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;
d.exports=function a(h){var g;if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h
}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],24:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],25:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
d.exports.original=a},{"@marcom/ac-function/memoize":15,"@marcom/ac-prefixer/getStyleProperty":17,"@marcom/ac-prefixer/getStyleValue":18}],26:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],27:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();var h=i.matchMedia("only all");
return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a},{"./helpers/globals":26,"@marcom/ac-function/once":16,"@marcom/ac-polyfills/matchMedia":81}],28:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":26,"@marcom/ac-function/once":16}],29:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":26,"@marcom/ac-function/once":16}],30:[function(b,d,a){var g=b("@marcom/ac-classlist/add");
var h=b("@marcom/ac-classlist/remove");var i=b("@marcom/ac-object/extend");var c=function(j,k){this._target=j;
this._tests={};this.addTests(k)};var f=c.prototype;f.addTests=function(j){this._tests=i(this._tests,j||{})
};f._supports=function(j){if(typeof this._tests[j]==="undefined"){return false}if(typeof this._tests[j]==="function"){this._tests[j]=this._tests[j]()
}return this._tests[j]};f._addClass=function(k,j){j=j||"no-";if(this._supports(k)){g(this._target,k)
}else{g(this._target,j+k)}};f.htmlClass=function(){var j;h(this._target,"no-js");
g(this._target,"js");for(j in this._tests){if(this._tests.hasOwnProperty(j)){this._addClass(j)
}}};d.exports=c},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-object/extend":31}],31:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":70}],32:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],33:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],34:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],35:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],36:[function(b,c,a){c.exports=8},{}],37:[function(b,c,a){c.exports=11
},{}],38:[function(b,c,a){c.exports=9},{}],39:[function(b,c,a){c.exports=1},{}],40:[function(b,c,a){c.exports=3
},{}],41:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],42:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":44}],43:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":47}],44:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":36,"../DOCUMENT_FRAGMENT_NODE":37,"../ELEMENT_NODE":39,"../TEXT_NODE":40,"./isNodeType":43}],45:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":37,"./internal/isNodeType":43}],46:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":39,"./internal/isNodeType":43}],47:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],48:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":44}],49:[function(c,f,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":52,"./matchesSelector":53,"@marcom/ac-dom-nodes/isElement":46}],50:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":52,"./matchesSelector":53,"@marcom/ac-dom-nodes/isElement":46}],51:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],52:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":36,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":37,"@marcom/ac-dom-nodes/DOCUMENT_NODE":38,"@marcom/ac-dom-nodes/ELEMENT_NODE":39,"@marcom/ac-dom-nodes/TEXT_NODE":40,"@marcom/ac-dom-nodes/isNode":47,"@marcom/ac-polyfills/Array/prototype.indexOf":71}],53:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":51,"./internal/validate":52,"./shims/matchesSelector":56,"@marcom/ac-dom-nodes/isElement":46}],54:[function(c,d,a){var h=c("./internal/validate");
var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":52,"./shims/querySelector":57}],55:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":52,"./shims/querySelectorAll":58,"@marcom/ac-polyfills/Array/prototype.slice":73}],56:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":55}],57:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":58}],58:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement("style");
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}p.styleSheet.cssText="*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":45,"@marcom/ac-dom-nodes/isElement":46,"@marcom/ac-dom-nodes/remove":48,"@marcom/ac-polyfills/Array/prototype.indexOf":71}],59:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":60}],60:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],61:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":62}],62:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":70}],63:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
b("@marcom/ac-polyfills/Object/keys");b("@marcom/ac-polyfills/Object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i=b("@marcom/ac-dom-events/utils/addEventListener");var h=b("@marcom/ac-feature/mediaQueriesAvailable");
var c="viewport-emitter";var j="::before";var d="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function k(m){l.call(this);this._initializeElement(m);if(h()){this._updateViewport=this._updateViewport.bind(this);
i(window,"resize",this._updateViewport);i(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(d);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var g=k.prototype=Object.create(l.prototype);
g.viewport=false;g.retina=false;g._initializeElement=function(n){var m;n=n||c;m=document.getElementById(n);
if(!m){m=document.createElement("div");m.id=n;m=document.body.appendChild(m)}this._el=m
};g._getElementContent=function(){var m;if("currentStyle" in this._el){m=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();m=window.getComputedStyle(this._el,j).content}m=m.replace(/["']/g,"");
if(m){return m}return false};g._updateViewport=function(){var m=this.viewport;var n;
var o;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(m&&this.viewport!==m){o={from:m,to:this.viewport};this.trigger("change",o);
this.trigger("from:"+m,o);this.trigger("to:"+this.viewport,o)}};g._updateRetina=function(m){var n=this.retina;
this.retina=this._retinaQuery.matches;if(n!==this.retina){this.trigger("retinachange",{from:n,to:this.retina})
}};g._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};a.exports=k},{"@marcom/ac-dom-events/utils/addEventListener":34,"@marcom/ac-event-emitter-micro":59,"@marcom/ac-feature/mediaQueriesAvailable":27,"@marcom/ac-polyfills/Function/prototype.bind":76,"@marcom/ac-polyfills/Object/create":77,"@marcom/ac-polyfills/Object/keys":78}],64:[function(m,a,u){m("@marcom/ac-polyfills/Function/prototype.bind");
var i=m("@marcom/ac-dom-events/utils/addEventListener");var l=m("@marcom/ac-dom-events/preventDefault");
var s=m("@marcom/ac-dom-events/target");var g=m("@marcom/ac-dom-traversal/querySelector");
var t=m("@marcom/ac-dom-traversal/ancestor");var b=m("@marcom/ac-classlist");var j=m("@marcom/ac-dom-nodes/hasAttribute");
var q=m("@marcom/ac-dom-nodes/isElement");var d=m("@marcom/ac-feature/cssPropertyAvailable");
var h=m("@marcom/ac-viewport-emitter/ViewportEmitter");var o=m("@marcom/ac-object/defaults");
var f=m("./internal/CheckboxMenu");var k=m("./internal/SimpleSticky");var n=m("./internal/ClickAway");
var c={className:"localnav"};var r=function(x,w){var v;w=o(c,w||{});this.el=x;v=w.selector||"."+w.className;
this._selectors={traySelector:w.traySelector||"."+w.className+"-menu-tray",viewportEmitterID:w.viewportEmitterID||w.className+"-viewport-emitter",curtainID:w.curtainID||w.className+"-curtain",menuStateID:w.menuStateID||w.className+"-menustate",menuOpeningClassName:w.menuOpeningClassName||w.className+"-opening"};
this._selectors.clickAwaySelector=v+", #"+this._selectors.curtainID+", #"+this._selectors.menuStateID;
this.tray=g(this._selectors.traySelector,this.el);this.stickyEnabled=this._getStickyEnabled();
this._transitionsAvailable=d("transition");this._viewports=new h(this._selectors.viewportEmitterID);
if(this.stickyEnabled){this._sticky=new k(this.el,w)}this._initializeMenu()};r.create=function(w,v){return new r(w,v)
};var p=r.prototype;p._getStickyEnabled=function(){return j(this.el,"data-sticky")
};p._initializeMenu=function(){var y=document.getElementById(this._selectors.menuStateID);
var v=document.getElementById(this._selectors.menuStateID+"-open");var x=document.getElementById(this._selectors.menuStateID+"-close");
var z=("onpopstate" in window)?"popstate":"beforeunload";var w;if(y&&v&&x){this.menu=new f(y,v,x);
this.menu.on("open",this._onMenuOpen.bind(this));this._viewports.on("change",this._onViewportChange.bind(this));
i(window,"scroll",this._onScroll.bind(this));i(window,"touchmove",this._onScroll.bind(this));
i(this.tray,"click",this._onTrayClick.bind(this));this._closeMenu=this._closeMenu.bind(this);
i(window,z,this._closeMenu);i(window,"orientationchange",this._closeMenu);w=new n(this._selectors.clickAwaySelector);
w.on("click",this._closeMenu);if(this._transitionsAvailable){i(this.tray,"transitionend",this._enableMenuScroll.bind(this))
}}};p._onMenuOpen=function(){this._menuCollapseOnScroll=null;if(this._transitionsAvailable){this._disableMenuScrollbar()
}};p._onScroll=function(v){var w;if(this.menu.isOpen()){if(this._menuCollapseOnScroll===null){this._menuCollapseOnScroll=(this.tray.offsetHeight>=this.tray.scrollHeight)
}if(this._menuCollapseOnScroll){this.menu.close()}else{w=s(v);if(!q(w)||!t(w,this._selectors.traySelector,true)){l(v)
}}}};p._onTrayClick=function(v){var w=s(v);if("href" in w){this._closeMenu()}};
p._onViewportChange=function(v){if(v.to==="medium"||v.to==="large"){this._closeMenu()
}};p._disableMenuScrollbar=function(){b.add(this.el,this._selectors.menuOpeningClassName)
};p._enableMenuScroll=function(){b.remove(this.el,this._selectors.menuOpeningClassName)
};p._closeMenu=function(){this.menu.close()};p.destroy=function(){};a.exports=r
},{"./internal/CheckboxMenu":65,"./internal/ClickAway":66,"./internal/SimpleSticky":67,"@marcom/ac-classlist":12,"@marcom/ac-dom-events/preventDefault":32,"@marcom/ac-dom-events/target":33,"@marcom/ac-dom-events/utils/addEventListener":34,"@marcom/ac-dom-nodes/hasAttribute":41,"@marcom/ac-dom-nodes/isElement":46,"@marcom/ac-dom-traversal/ancestor":49,"@marcom/ac-dom-traversal/querySelector":54,"@marcom/ac-feature/cssPropertyAvailable":25,"@marcom/ac-object/defaults":61,"@marcom/ac-polyfills/Function/prototype.bind":76,"@marcom/ac-viewport-emitter/ViewportEmitter":63}],65:[function(b,a,c){b("@marcom/ac-polyfills/Object/create");
var j=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;var g=b("@marcom/ac-dom-events/utils/addEventListener");
var h=b("@marcom/ac-dom-events/preventDefault");function f(l,k,m){j.call(this);
this.el=l;this.anchorOpen=k;this.anchorClose=m;this._lastOpen=this.el.checked;g(this.el,"change",this.update.bind(this));
g(this.anchorOpen,"click",this._anchorOpenClick.bind(this));g(this.anchorClose,"click",this._anchorCloseClick.bind(this));
if(window.location.hash==="#"+l.id){window.location.hash=""}}f.create=function(l,k,m){return new f(l,k,m)
};var i=j.prototype;var d=f.prototype=Object.create(i);f.prototype.constructor=f;
d.update=function(){var k=this.isOpen();if(k!==this._lastOpen){this.trigger(k?"open":"close");
this._lastOpen=k}};d.isOpen=function(){return this.el.checked};d.toggle=function(){if(this.isOpen()){this.close()
}else{this.open()}};d.open=function(){if(!this.el.checked){this.el.checked=true;
this.update()}};d.close=function(){if(this.el.checked){this.el.checked=false;this.update()
}};d._anchorOpenClick=function(k){h(k);this.open();this.anchorClose.focus()};d._anchorCloseClick=function(k){h(k);
this.close();this.anchorOpen.focus()};a.exports=f},{"@marcom/ac-dom-events/preventDefault":32,"@marcom/ac-dom-events/utils/addEventListener":34,"@marcom/ac-event-emitter-micro":59,"@marcom/ac-polyfills/Object/create":77}],66:[function(c,b,d){c("@marcom/ac-polyfills/Function/prototype.bind");
c("@marcom/ac-polyfills/Object/create");var j=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var g=c("@marcom/ac-dom-events/utils/addEventListener");var a=c("@marcom/ac-dom-events/target");
var k=c("@marcom/ac-dom-traversal/ancestors");function h(l){j.call(this);this._selector=l;
this._touching=false;g(document,"click",this._onClick.bind(this));g(document,"touchstart",this._onTouchStart.bind(this));
g(document,"touchend",this._onTouchEnd.bind(this))}var i=j.prototype;var f=h.prototype=Object.create(i);
h.prototype.constructor=h;f._checkTarget=function(l){var m=a(l);if(!k(m,this._selector,true).length){this.trigger("click",l)
}};f._onClick=function(l){if(!this._touching){this._checkTarget(l)}};f._onTouchStart=function(l){this._touching=true;
this._checkTarget(l)};f._onTouchEnd=function(){this._touching=false};b.exports=h
},{"@marcom/ac-dom-events/target":33,"@marcom/ac-dom-events/utils/addEventListener":34,"@marcom/ac-dom-traversal/ancestors":50,"@marcom/ac-event-emitter-micro":59,"@marcom/ac-polyfills/Function/prototype.bind":76,"@marcom/ac-polyfills/Object/create":77}],67:[function(c,b,d){c("@marcom/ac-polyfills/Object/create");
var o=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var h=c("@marcom/ac-dom-events/utils/addEventListener");
var k=c("@marcom/ac-feature/cssPropertyAvailable");var g=c("@marcom/ac-dom-nodes/insertBefore");
var l=c("@marcom/ac-dom-metrics/getScrollY");var i=c("@marcom/ac-classlist/add");
var n=c("@marcom/ac-classlist/remove");var a="css-sticky";var j=function(q,p){o.call(this);
this.el=q;this.stuck=false;this._selectors={placeholderID:p.placeholderID||p.className+"-sticky-placeholder",stuckClassName:p.stuckClassName||p.className+"-sticking"};
this._createPlaceholder();this._featureDetection();this._updatePosition=this._updatePosition.bind(this);
this._updatePlaceholderOffset=this._updatePlaceholderOffset.bind(this);h(window,"scroll",this._updatePosition);
h(document,"touchmove",this._updatePosition);h(window,"resize",this._updatePlaceholderOffset);
h(window,"orientationchange",this._updatePlaceholderOffset);if("acStore" in window){window.acStore.getStorefront().then(this._updatePlaceholderOffset);
window.acStore.on("storefrontChange",this._updatePlaceholderOffset)}};j.create=function(q,p){return new j(q,p)
};var m=o.prototype;var f=j.prototype=Object.create(m);j.prototype.constructor=j;
f._featureDetection=function(){var q=k("position","sticky");var p=a;if(!q){p="no-"+p
}i(this.el,p);i(this.placeholder,p)};f._createPlaceholder=function(){this.placeholder=document.createElement("div");
this.placeholder.id=this._selectors.placeholderID;g(this.placeholder,this.el);this._updatePlaceholderOffset()
};f._updatePlaceholderOffset=function(){var p=this.placeholder.offsetTop;p+=document.documentElement.offsetTop+document.body.offsetTop;
if(p!==this._placeholderOffset){this._placeholderOffset=p;this._updatePosition()
}};f._updatePosition=function(){var p=l();if(p>this._placeholderOffset){if(!this.stuck){i(this.el,this._selectors.stuckClassName);
i(this.placeholder,this._selectors.stuckClassName);this.stuck=true;this.trigger("stuck")
}}else{if(this.stuck){n(this.el,this._selectors.stuckClassName);n(this.placeholder,this._selectors.stuckClassName);
this.stuck=false;this.trigger("unstuck")}}};b.exports=j},{"@marcom/ac-classlist/add":5,"@marcom/ac-classlist/remove":13,"@marcom/ac-dom-events/utils/addEventListener":34,"@marcom/ac-dom-metrics/getScrollY":35,"@marcom/ac-dom-nodes/insertBefore":42,"@marcom/ac-event-emitter-micro":59,"@marcom/ac-feature/cssPropertyAvailable":25,"@marcom/ac-polyfills/Object/create":77}],68:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],69:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],70:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],71:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],72:[function(b,c,a){if(!Array.prototype.map){Array.prototype.map=function d(l,k){var h=Object(this);
var g=h.length>>>0;var j;var f=new Array(g);if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(j=0;j<g;j+=1){if(j in h){f[j]=l.call(k,h[j],j,h)}}return f}}},{}],73:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],74:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],75:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],76:[function(b,c,a){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}},{}],77:[function(b,c,a){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}},{}],78:[function(b,c,a){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}},{}],79:[function(c,d,b){if(!String.prototype.trim){String.prototype.trim=function a(){return this.replace(/^\s+|\s+$/g,"")
}}},{}],80:[function(d,f,c){if(!window.getComputedStyle){function g(j,m,l){j.document;
var k=j.currentStyle[m].match(/(-?[\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],i=k[1],n=k[2],h;
l=!l?l:/%|em/.test(n)&&j.parentElement?g(j.parentElement,"fontSize",null):16;h=m=="fontSize"?l:/width/i.test(m)?j.clientWidth:j.clientHeight;
return n=="%"?i/100*h:n=="cm"?i*0.3937*96:n=="em"?i*l:n=="in"?i*96:n=="mm"?i*0.3937*96/10:n=="pc"?i*12*96/72:n=="pt"?i*96/72:i
}function b(k,n){var o=n=="border"?"Width":"",j=n+"Top"+o,m=n+"Right"+o,h=n+"Bottom"+o,i=n+"Left"+o;
k[n]=(k[j]==k[m]&&k[j]==k[h]&&k[j]==k[i]?[k[j]]:k[j]==k[h]&&k[i]==k[m]?[k[j],k[m]]:k[i]==k[m]?[k[j],k[m],k[h]]:[k[j],k[m],k[h],k[i]]).join(" ")
}function a(k){var l=this,j=k.currentStyle,n=g(k,"fontSize"),h=function(o){return"-"+o.toLowerCase()
},m;for(m in j){Array.prototype.push.call(l,m=="styleFloat"?"float":m.replace(/[A-Z]/,h));
if(m=="width"){l[m]=k.offsetWidth+"px"}else{if(m=="height"){l[m]=k.offsetHeight+"px"
}else{if(m=="styleFloat"){l["float"]=j[m];l.cssFloat=j[m]}else{if(/margin.|padding.|border.+W/.test(m)&&l[m]!="auto"){l[m]=Math.round(g(k,m,n))+"px"
}else{if(/^outline/.test(m)){try{l[m]=j[m]}catch(i){l.outlineColor=j.color;l.outlineStyle=l.outlineStyle||"none";
l.outlineWidth=l.outlineWidth||"0px";l.outline=[l.outlineColor,l.outlineWidth,l.outlineStyle].join(" ")
}}else{l[m]=j[m]}}}}}}b(l,"margin");b(l,"padding");b(l,"border");l.fontSize=Math.round(n)+"px"
}a.prototype={constructor:a,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(h){return this[h.replace(/-\w/g,function(i){return i[1].toUpperCase()
})]},item:function(h){return this[h]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(h){return new a(h)}}},{}],81:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],hfMHj0:[function(c,d,a){c("@marcom/ac-polyfills/Array/isArray");
c("@marcom/ac-polyfills/Array/prototype.filter");c("@marcom/ac-polyfills/Array/prototype.forEach");
c("@marcom/ac-polyfills/Array/prototype.indexOf");c("@marcom/ac-polyfills/Array/prototype.map");
c("@marcom/ac-polyfills/Array/prototype.some");c("@marcom/ac-polyfills/getComputedStyle");
c("@marcom/ac-polyfills/String/prototype.trim");var b=c("./ac-localnav-global/LocalnavGlobal");
var f=document.getElementById("ac-localnav");if(f){d.exports=new b(f)}},{"./ac-localnav-global/LocalnavGlobal":"fkFiXJ","@marcom/ac-polyfills/Array/isArray":68,"@marcom/ac-polyfills/Array/prototype.filter":69,"@marcom/ac-polyfills/Array/prototype.forEach":70,"@marcom/ac-polyfills/Array/prototype.indexOf":71,"@marcom/ac-polyfills/Array/prototype.map":72,"@marcom/ac-polyfills/Array/prototype.some":74,"@marcom/ac-polyfills/String/prototype.trim":79,"@marcom/ac-polyfills/getComputedStyle":80}],"@marcom/ac-localnav-global":[function(b,c,a){c.exports=b("hfMHj0")
},{}],fkFiXJ:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
var c=b("@marcom/ac-localnav/Localnav");var j=b("@marcom/ac-headjs/FeatureDetect");
var l=b("./featureDetectTests");var d=b("@marcom/ac-classlist");var h="locked";
var k=function(n){var m=new j(n,l);m.htmlClass();c.call(this,n,{className:"ac-ln",selector:"#ac-localnav"});
if(this._sticky){this._analyticsRegion=this.el.getAttribute("data-analytics-region");
this._updateAnalyticsRegion=this._updateAnalyticsRegion.bind(this);this._sticky.on("stuck",this._updateAnalyticsRegion);
this._sticky.on("unstuck",this._updateAnalyticsRegion)}};var i=c.prototype;var g=k.prototype=Object.create(i);
k.prototype.constructor=k;g._getStickyEnabled=function(){if(d.contains(document.body,"ac-platter-content")){return false
}if(d.contains(document.body,"ac-platter-page")){return false}return i._getStickyEnabled.call(this)
};g._updateAnalyticsRegion=function(){var m=this._analyticsRegion;if(this._sticky.stuck){m+=" "+h
}this.el.setAttribute("data-analytics-region",m)};a.exports=k},{"./featureDetectTests":"o3ncwG","@marcom/ac-classlist":12,"@marcom/ac-headjs/FeatureDetect":30,"@marcom/ac-localnav/Localnav":64,"@marcom/ac-polyfills/Function/prototype.bind":76}],"@marcom/ac-localnav-global/LocalnavGlobal":[function(b,c,a){c.exports=b("fkFiXJ")
},{}],o3ncwG:[function(d,f,c){var g=d("@marcom/ac-browser");var a=d("@marcom/ac-feature/touchAvailable");
var b=d("@marcom/ac-feature/svgAvailable");f.exports={touch:a,svg:b,ie7:(g.IE&&g.IE.documentMode===7),ie8:(g.IE&&g.IE.documentMode===8)}
},{"@marcom/ac-browser":1,"@marcom/ac-feature/svgAvailable":28,"@marcom/ac-feature/touchAvailable":29}],"@marcom/ac-localnav-global/featureDetectTests":[function(b,c,a){c.exports=b("o3ncwG")
},{}]},{},["hfMHj0"]);