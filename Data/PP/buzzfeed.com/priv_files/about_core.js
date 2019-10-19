/**
* @preserve Copyright 2012 Twitter, Inc.
* @license http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var Hogan={};!function(t){function n(t,n,e){var i;return n&&"object"==typeof n&&(void 0!==n[t]?i=n[t]:e&&n.get&&"function"==typeof n.get&&(i=n.get(t))),i}function e(t,n,e,i,r,s){function a(){}function o(){}a.prototype=t,o.prototype=t.subs;var u,c=new a;c.subs=new o,c.subsText={},c.buf="",i=i||{},c.stackSubs=i,c.subsText=s;for(u in n)i[u]||(i[u]=n[u]);for(u in i)c.subs[u]=i[u];r=r||{},c.stackPartials=r;for(u in e)r[u]||(r[u]=e[u]);for(u in r)c.partials[u]=r[u];return c}function i(t){return String(null===t||void 0===t?"":t)}function r(t){return t=i(t),l.test(t)?t.replace(s,"&amp;").replace(a,"&lt;").replace(o,"&gt;").replace(u,"&#39;").replace(c,"&quot;"):t}t.Template=function(t,n,e,i){t=t||{},this.r=t.code||this.r,this.c=e,this.options=i||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(){return""},v:r,t:i,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var i=this.partials[t],r=n[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[t].base=r,i.subs){n.stackText||(n.stackText={});for(key in i.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);r=e(r,i.subs,i.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=r,r},rp:function(t,n,e,i){var r=this.ep(t,e);return r?r.ri(n,e,i):""},rs:function(t,n,e){var i=t[t.length-1];if(!f(i))return void e(t,n,this);for(var r=0;r<i.length;r++)t.push(i[r]),e(t,n,this),t.pop()},s:function(t,n,e,i,r,s,a){var o;return f(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ms(t,n,e,i,r,s,a)),o=!!t,!i&&o&&n&&n.push("object"==typeof t?t:n[n.length-1]),o)},d:function(t,e,i,r){var s,a=t.split("."),o=this.f(a[0],e,i,r),u=this.options.modelGet,c=null;if("."===t&&f(e[e.length-2]))o=e[e.length-1];else for(var l=1;l<a.length;l++)s=n(a[l],o,u),void 0!==s?(c=o,o=s):o="";return r&&!o?!1:(r||"function"!=typeof o||(e.push(c),o=this.mv(o,e,i),e.pop()),o)},f:function(t,e,i,r){for(var s=!1,a=null,o=!1,u=this.options.modelGet,c=e.length-1;c>=0;c--)if(a=e[c],s=n(t,a,u),void 0!==s){o=!0;break}return o?(r||"function"!=typeof s||(s=this.mv(s,e,i)),s):r?!1:""},ls:function(t,n,e,r,s){var a=this.options.delimiters;return this.options.delimiters=s,this.b(this.ct(i(t.call(n,r)),n,e)),this.options.delimiters=a,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,i,r,s,a){var o,u=n[n.length-1],c=t.call(u);return"function"==typeof c?i?!0:(o=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(c,u,e,o.substring(r,s),a)):c},mv:function(t,n,e){var r=n[n.length-1],s=t.call(r);return"function"==typeof s?this.ct(i(s.call(r)),r,e):s},sub:function(t,n,e,i){var r=this.subs[t];r&&(this.activeSub=t,r(n,e,this,i),this.activeSub=!1)}};var s=/&/g,a=/</g,o=/>/g,u=/\'/g,c=/\"/g,l=/[&<>\"\']/,f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan),function(t){function n(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function e(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function i(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var i=1,r=t.length;r>i;i++)if(n.charAt(e+i)!=t.charAt(i))return!1;return!0}function r(n,e,i,o){var u=[],c=null,l=null,f=null;for(l=i[i.length-1];n.length>0;){if(f=n.shift(),l&&"<"==l.tag&&!(f.tag in k))throw new Error("Illegal content in < super tag.");if(t.tags[f.tag]<=t.tags.$||s(f,o))i.push(f),f.nodes=r(n,f.tag,i,o);else{if("/"==f.tag){if(0===i.length)throw new Error("Closing tag without opener: /"+f.n);if(c=i.pop(),f.n!=c.n&&!a(f.n,c.n,o))throw new Error("Nesting error: "+c.n+" vs. "+f.n);return c.end=f.i,u}"\n"==f.tag&&(f.last=0==n.length||"\n"==n[0].tag)}u.push(f)}if(i.length>0)throw new Error("missing closing tag: "+i.pop().n);return u}function s(t,n){for(var e=0,i=n.length;i>e;e++)if(n[e].o==t.n)return t.tag="#",!0}function a(t,n,e){for(var i=0,r=e.length;r>i;i++)if(e[i].c==t&&e[i].o==n)return!0}function o(t){var n=[];for(var e in t)n.push('"'+c(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}function u(t){var n=[];for(var e in t.partials)n.push('"'+c(e)+'":{name:"'+c(t.partials[e].name)+'", '+u(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+o(t.subs)}function c(t){return t.replace(m,"\\\\").replace(v,'\\"').replace(b,"\\n").replace(d,"\\r").replace(x,"\\u2028").replace(w,"\\u2029")}function l(t){return~t.indexOf(".")?"d":"f"}function f(t,n){var e="<"+(n.prefix||""),i=e+t.n+y++;return n.partials[i]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+c(i)+'",c,p,"'+(t.indent||"")+'"));',i}function h(t,n){n.code+="t.b(t.t(t."+l(t.n)+'("'+c(t.n)+'",c,p,0)));'}function p(t){return"t.b("+t+");"}var g=/\S/,v=/\"/g,b=/\n/g,d=/\r/g,m=/\\/g,x=/\u2028/,w=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(r,s){function a(){m.length>0&&(x.push({tag:"_t",text:new String(m)}),m="")}function o(){for(var n=!0,e=y;e<x.length;e++)if(n=t.tags[x[e].tag]<t.tags._v||"_t"==x[e].tag&&null===x[e].text.match(g),!n)return!1;return n}function u(t,n){if(a(),t&&o())for(var e,i=y;i<x.length;i++)x[i].text&&((e=x[i+1])&&">"==e.tag&&(e.indent=x[i].text.toString()),x.splice(i,1));else n||x.push({tag:"\n"});w=!1,y=x.length}function c(t,n){var i="="+S,r=t.indexOf(i,n),s=e(t.substring(t.indexOf("=",n)+1,r)).split(" ");return T=s[0],S=s[s.length-1],r+i.length-1}var l=r.length,f=0,h=1,p=2,v=f,b=null,d=null,m="",x=[],w=!1,k=0,y=0,T="{{",S="}}";for(s&&(s=s.split(" "),T=s[0],S=s[1]),k=0;l>k;k++)v==f?i(T,r,k)?(--k,a(),v=h):"\n"==r.charAt(k)?u(w):m+=r.charAt(k):v==h?(k+=T.length-1,d=t.tags[r.charAt(k+1)],b=d?r.charAt(k+1):"_v","="==b?(k=c(r,k),v=f):(d&&k++,v=p),w=k):i(S,r,k)?(x.push({tag:b,n:e(m),otag:T,ctag:S,i:"/"==b?w-T.length:k+S.length}),m="",k+=S.length-1,v=f,"{"==b&&("}}"==S?k++:n(x[x.length-1]))):m+=r.charAt(k);return u(w,!0),x};var k={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=function(n){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+u(n)+"}"};var y=0;t.generate=function(n,e,i){y=0;var r={code:"",subs:{},partials:{}};return t.walk(n,r),i.asString?this.stringify(r,e,i):this.makeTemplate(r,e,i)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var i=this.makePartials(t);return i.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(i,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+l(n.n)+'("'+c(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+l(n.n)+'("'+c(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":f,"<":function(n,e){var i={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,i);var r=e.partials[f(n,e)];r.subs=i.subs,r.partials=i.partials},$:function(n,e){var i={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,i),e.subs[n.n]=i.code,e.inPartial||(e.code+='t.sub("'+c(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=p('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+l(t.n)+'("'+c(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=p('"'+c(t.text)+'"')},"{":h,"&":h},t.walk=function(n,e){for(var i,r=0,s=n.length;s>r;r++)i=t.codegen[n[r].tag],i&&i(n[r],e);return e},t.parse=function(t,n,e){return e=e||{},r(t,"",[],e.sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var i=t.cacheKey(n,e),r=this.cache[i];if(r){var s=r.partials;for(var a in s)delete s[a].instance;return r}return r=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[i]=r}}("undefined"!=typeof exports?exports:Hogan);
/*! jQuery v2.1.5-pre -deprecated,-effects,-effects/Tween,-effects/animatedSelector,-exports/amd | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.5-pre -deprecated,-effects,-effects/Tween,-effects/animatedSelector,-exports/amd",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),c.matchesSelector&&p&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c;
}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}}),n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ka,La,Ma=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?La:Ka)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),La={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Ma[b]||n.find.attr;Ma[b]=function(a,b,d){var e,f;return d||(f=Ma[b],Ma[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,Ma[b]=f),e}});var Na=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||Na.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var Oa=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Oa," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Oa," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Oa," ").indexOf(b)>=0)return!0;return!1}});var Pa=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Pa,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(k.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var Qa=n.now(),Ra=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var Sa=/#.*$/,Ta=/([?&])_=[^&]*/,Ua=/^(.*?):[ \t]*([^\r\n]*)$/gm,Va=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wa=/^(?:GET|HEAD)$/,Xa=/^\/\//,Ya=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Za={},$a={},_a="*/".concat("*"),ab=a.location.href,bb=Ya.exec(ab.toLowerCase())||[];function cb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function db(a,b,c,d){var e={},f=a===$a;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function eb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function fb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function gb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){
  if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ab,type:"GET",isLocal:Va.test(bb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_a,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?eb(eb(a,n.ajaxSettings),b):eb(n.ajaxSettings,a)},ajaxPrefilter:cb(Za),ajaxTransport:cb($a),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=Ua.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ab)+"").replace(Sa,"").replace(Xa,bb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=Ya.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===bb[1]&&h[2]===bb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(bb[3]||("http:"===bb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),db(Za,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Wa.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(Ra.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Ta.test(d)?d.replace(Ta,"$1_="+Qa++):d+(Ra.test(d)?"&":"?")+"_="+Qa++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+_a+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=db($a,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=fb(k,v,f)),u=gb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var hb=/%20/g,ib=/\[\]$/,jb=/\r?\n/g,kb=/^(?:submit|button|image|reset|file)$/i,lb=/^(?:input|select|textarea|keygen)/i;function mb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||ib.test(a)?d(a,e):mb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)mb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)mb(c,a[c],b,e);return d.join("&").replace(hb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&lb.test(this.nodeName)&&!kb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(jb,"\r\n")}}):{name:b.name,value:c.replace(jb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var nb=0,ob={},pb={0:200,1223:204},qb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ob)ob[a]()}),k.cors=!!qb&&"withCredentials"in qb,k.ajax=qb=!!qb,n.ajaxTransport(function(a){var b;return k.cors||qb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++nb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete ob[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(pb[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=ob[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var rb=[],sb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=rb.pop()||n.expando+"_"+Qa++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(sb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&sb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(sb,"$1"+e):b.jsonp!==!1&&(b.url+=(Ra.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,rb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var tb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&tb)return tb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}});var ub=a.document.documentElement;function vb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=vb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||ub;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||ub})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=vb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})});var wb=a.jQuery,xb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=xb),b&&a.jQuery===n&&(a.jQuery=wb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! t3-native v2.0.2 */
/*!
Copyright 2015 Box, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
!function(t){var e={};if(e.EventTarget=function(){"use strict";function t(){this._handlers={}}return t.prototype={constructor:t,on:function(t,e){var n,r,i=this._handlers[t];for("undefined"==typeof i&&(i=this._handlers[t]=[]),n=0,r=i.length;r>n;n++)if(i[n]===e)return;i.push(e)},fire:function(t,e){var n,r,i,o={type:t,data:e};if(n=this._handlers[o.type],n instanceof Array)for(n=n.concat(),r=0,i=n.length;i>r;r++)n[r].call(this,o)},off:function(t,e){var n,r,i=this._handlers[t];if(i instanceof Array)for(n=0,r=i.length;r>n;n++)if(i[n]===e){i.splice(n,1);break}}},t}(),e.NativeDOM=function(){"use strict";return{type:"native",query:function(t,e){return t.querySelector(e)},queryAll:function(t,e){return t.querySelectorAll(e)},on:function(t,e,n){t.addEventListener(e,n,!1)},off:function(t,e,n){t.removeEventListener(e,n,!1)}}}(),e.DOM=e.NativeDOM,e.DOMEventDelegate=function(){"use strict";function t(t){return t&&t.hasAttribute("data-module")}function n(t){return t&&t.hasAttribute("data-type")}function r(e){for(var r=n(e);!r&&e&&!t(e);)e=e.parentNode,r=n(e);return r?e:null}function i(t,e,n){var r,i;for(r=0;r<a.length;r++)i=a[r],t["on"+i]&&e.call(n,i)}function o(t,e){this.element=t,this._handler=e,this._boundHandler={},this._attached=!1}var a=["click","mouseover","mouseout","mousedown","mouseup","mouseenter","mouseleave","mousemove","keydown","keyup","submit","change","contextmenu","dblclick","input","focusin","focusout"];return o.prototype={constructor:o,_handleEvent:function(t){var e=r(t.target),n=e?e.getAttribute("data-type"):"";this._handler["on"+t.type](t,e,n)},attachEvents:function(){this._attached||(i(this._handler,function(t){function n(){r._handleEvent.apply(r,arguments)}var r=this;e.DOM.on(this.element,t,n),this._boundHandler[t]=n},this),this._attached=!0)},detachEvents:function(){i(this._handler,function(t){e.DOM.off(this.element,t,this._boundHandler[t])},this)}},o}(),e.Context=function(){"use strict";function t(t,e){this.application=t,this.element=e}return t.prototype={broadcast:function(t,e){this.application.broadcast(t,e)},getService:function(t){return this.application.getService(t)},hasService:function(t){return this.application.hasService(t)},getConfig:function(t){return this.application.getModuleConfig(this.element,t)},getGlobal:function(t){return this.application.getGlobal(t)},getGlobalConfig:function(t){return this.application.getGlobalConfig(t)},reportError:function(t){this.application.reportError(t)},getElement:function(){return this.element}},t}(),e.Application=function(){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return function(){return t.apply(e,arguments)}}function i(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}function o(){y={},b={},w={},E=[],D={},_={},A=!1}function a(t){for(var e=0,n=E.length;n>e;e++)if(E[e]===t)return!0;return!1}function u(t){if(y.debug)throw t;M.fire("error",{exception:t})}function s(t,e){var n,r;for(n in t)r=t[n],"function"==typeof r&&(t[n]=function(t,n){return function(){var r=e+"."+t+"() - ";try{return n.apply(this,arguments)}catch(i){i.methodName=t,i.objectName=e,i.name=r+i.name,i.message=r+i.message,u(i)}}}(n,r))}function c(t){var e=t.getAttribute("data-module");return e?e.split(" ")[0]:""}function f(t,e){"function"==typeof t[e]&&t[e].apply(t,Array.prototype.slice.call(arguments,2))}function l(t){var e=w[t];if(e){if(!e.instance){if(a(t))return u(new ReferenceError("Circular service dependency: "+E.join(" -> ")+" -> "+t)),null;E.push(t),e.instance=e.creator(M),E.pop()}return e.instance}return u(new Error('Service "'+t+'" not found')),null}function h(t){var e,n,r,i,o,a=[],s={};for(n=t.instance.behaviors||[],e=0;e<n.length;e++)o=n[e],"behaviorInstances"in t||(t.behaviorInstances={}),i=t.behaviorInstances,r=D[o],o in s?u(new Error('Behavior "'+o+'" cannot be specified twice in a module.')):r?(i[o]||(i[o]=r.creator(t.context)),a.push(i[o])):u(new Error('Behavior "'+o+'" not found')),s[o]=!0;return a}function d(t,n,r){var i=new e.DOMEventDelegate(n,r);t.push(i),i.attachEvents()}function p(t){var e=t.eventDelegates,n=h(t);d(e,t.element,t.instance);for(var r=0;r<n.length;r++)d(e,t.element,n[r])}function v(t){for(var e=t.eventDelegates,n=0;n<e.length;n++)e[n].detachEvents();t.eventDelegates=[]}function g(t){return _[t.id]}var m="[data-module]",y={},b={},E=[],w={},D={},_={},A=!1,M=new e.EventTarget;return n(M,{init:function(t){return n(y,t||{}),this.startAll(document.documentElement),this.fire("init"),A=!0,this},destroy:function(){return this.stopAll(document.documentElement),o(),this},isStarted:function(t){var e=g(t);return"object"==typeof e},start:function(t){var n,r,i,o=c(t),a=b[o];if(!a)return u(new Error('Module type "'+o+'" is not defined.')),this;if(!this.isStarted(t)){t.id||(t.id="mod-"+o+"-"+a.counter),a.counter++,r=new e.Context(this,t),i=a.creator(r),y.debug||s(i,o),n={moduleName:o,instance:i,context:r,element:t,eventDelegates:[]},_[t.id]=n;for(var l,d=h(n),v=0,g=d.length;g>v;v++)l=d[v],f(l,"init");f(n.instance,"init"),p(n)}return this},stop:function(t){var e=g(t);if(e){v(e);for(var n,r=h(e),i=r.length-1;i>=0;i--)n=r[i],f(n,"destroy");f(e.instance,"destroy"),delete _[t.id]}else if(y.debug)return u(new Error("Unable to stop module associated with element: "+t.id)),this;return this},startAll:function(t){for(var n=e.DOM.queryAll(t,m),r=0,i=n.length;i>r;r++)this.start(n[r]);return this},stopAll:function(t){for(var n=e.DOM.queryAll(t,m),r=0,i=n.length;i>r;r++)this.stop(n[r]);return this},addModule:function(t,e){return"undefined"!=typeof b[t]?(u(new Error("Module "+t+" has already been added.")),this):(b[t]={creator:e,counter:1},this)},getModuleConfig:function(t,n){var r,i=g(t);return i?(i.config||(r=e.DOM.query(t,'script[type="text/x-config"]'),r&&(i.config=JSON.parse(r.text))),i.config?"undefined"==typeof n?i.config:n in i.config?i.config[n]:null:null):null},addService:function(t,e){return"undefined"!=typeof w[t]?(u(new Error("Service "+t+" has already been added.")),this):(w[t]={creator:e,instance:null},this)},getService:l,hasService:function(t){return w.hasOwnProperty(t)},addBehavior:function(t,e){return"undefined"!=typeof D[t]?(u(new Error("Behavior "+t+" has already been added.")),this):(D[t]={creator:e,instance:null},this)},broadcast:function(t,e){var n,o,a,u,s,c;for(o in _)if(_.hasOwnProperty(o)){for(c=[],a=_[o],-1!==i(a.instance.messages||[],t)&&c.push(r(a.instance.onmessage,a.instance)),s=h(a),n=0;n<s.length;n++)u=s[n],-1!==i(u.messages||[],t)&&c.push(r(u.onmessage,u));for(n=0;n<c.length;n++)c[n](t,e)}return this.fire("message",{message:t,messageData:e}),this},getGlobal:function(e){return e in t?t[e]:null},getGlobalConfig:function(t){return"undefined"==typeof t?y:t in y?y[t]:null},setGlobalConfig:function(t){return A?(u(new Error("Cannot set global configuration after application initialization")),this):(n(y,t),this)},reportError:u})}(),"function"==typeof define&&define.amd)define("t3",[],function(){return e});else if("object"==typeof module&&"object"==typeof module.exports)module.exports=e;else{t.Box=t.Box||{};for(var n in e)e.hasOwnProperty(n)&&(t.Box[n]=e[n])}}("undefined"!=typeof window?window:this);

/* Copyright (c) 2010-2013 Marcus Westin */
(function(e){function o(){try{return r in e&&e[r]}catch(t){return!1}}var t={},n=e.document,r="localStorage",i="script",s;t.disabled=!1,t.set=function(e,t){},t.get=function(e){},t.remove=function(e){},t.clear=function(){},t.transact=function(e,n,r){var i=t.get(e);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),t.set(e,i)},t.getAll=function(){},t.forEach=function(){},t.serialize=function(e){return JSON.stringify(e)},t.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=e[r],t.set=function(e,n){return n===undefined?t.remove(e):(s.setItem(e,t.serialize(n)),n)},t.get=function(e){return t.deserialize(s.getItem(e))},t.remove=function(e){s.removeItem(e)},t.clear=function(){s.clear()},t.getAll=function(){var e={};return t.forEach(function(t,n){e[t]=n}),e},t.forEach=function(e){for(var n=0;n<s.length;n++){var r=s.key(n);e(r,t.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}function l(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=e.apply(t,n);return u.removeChild(s),i}}var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(/^d/,"___$&").replace(c,"___")}t.set=l(function(e,n,i){return n=h(n),i===undefined?t.remove(n):(e.setAttribute(n,t.serialize(i)),e.save(r),i)}),t.get=l(function(e,n){return n=h(n),t.deserialize(e.getAttribute(n))}),t.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),t.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),t.getAll=function(e){var n={};return t.forEach(function(e,t){n[e]=t}),n},t.forEach=l(function(e,n){var r=e.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,t.deserialize(e.getAttribute(s.name)))})}try{var p="__storejs__";t.set(p,p),t.get(p)!=p&&(t.disabled=!0),t.remove(p)}catch(f){t.disabled=!0}t.enabled=!t.disabled,typeof module!="undefined"&&module.exports&&this.module!==module?module.exports=t:typeof define=="function"&&define.amd?define(t,[]):e.store=t})(Function("return this")());

var Base64 = {
    _Rixits : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",
    fromNumber : function(number) {
        if (isNaN(Number(number)) || number === null ||
            number === Number.POSITIVE_INFINITY)
            throw "The input is not valid";
        if (number < 0)
            throw "Can't represent negative numbers now";

        var rixit; 
        var residual = Math.floor(number);
        var result = '';
        while (true) {
            rixit = residual % 64
            result = this._Rixits.charAt(rixit) + result;
            residual = Math.floor(residual / 64);

            if (residual == 0)
                break;
            }
        return result;
    },

    toNumber : function(rixits) {
        var result = 0;
        rixits = rixits.split('');
        for (e in rixits) {
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
        }
        return result;
    },
  // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode : function (input) {
        if (typeof input == 'undefined' || input == null){
            input = '';
        }
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode : function (input) {
        if (typeof input == 'undefined' || input == null){
            return '';
        }
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }
}

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++)b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)b[c+e>>>2]=d[e>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<
32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return new j.init(g,c)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,
d)).finalize(b)}}});var u=k.algo={};return k}(Math);

(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();


/*

    Hashids
    http://hashids.org/javascript
    (c) 2013 Ivan Akimov

    https://github.com/ivanakimov/hashids.js
    hashids may be freely distributed under the MIT license.

*/

/*jslint plusplus: true, nomen: true, browser: true */
/*global define */

var Hashids = (function () {

    "use strict";

    function Hashids(salt, minHashLength, alphabet) {

        var uniqueAlphabet, i, j, len, sepsLength, diff, guardCount;

        this.version = "1.0.1";

        /* internal settings */

        this.minAlphabetLength = 16;
        this.sepDiv = 3.5;
        this.guardDiv = 12;

        /* error messages */

        this.errorAlphabetLength = "error: alphabet must contain at least X unique characters";
        this.errorAlphabetSpace = "error: alphabet cannot contain spaces";

        /* alphabet vars */

        this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.seps = "cfhistuCFHISTU";
        this.minHashLength = parseInt(minHashLength, 10) > 0 ? minHashLength : 0;
        this.salt = (typeof salt === "string") ? salt : "";

        if (typeof alphabet === "string") {
            this.alphabet = alphabet;
        }

        for (uniqueAlphabet = "", i = 0, len = this.alphabet.length; i !== len; i++) {
            if (uniqueAlphabet.indexOf(this.alphabet[i]) === -1) {
                uniqueAlphabet += this.alphabet[i];
            }
        }

        this.alphabet = uniqueAlphabet;

        if (this.alphabet.length < this.minAlphabetLength) {
            throw this.errorAlphabetLength.replace("X", this.minAlphabetLength);
        }

        if (this.alphabet.search(" ") !== -1) {
            throw this.errorAlphabetSpace;
        }

        /* seps should contain only characters present in alphabet; alphabet should not contains seps */

        for (i = 0, len = this.seps.length; i !== len; i++) {

            j = this.alphabet.indexOf(this.seps[i]);
            if (j === -1) {
                this.seps = this.seps.substr(0, i) + " " + this.seps.substr(i + 1);
            } else {
                this.alphabet = this.alphabet.substr(0, j) + " " + this.alphabet.substr(j + 1);
            }

        }

        this.alphabet = this.alphabet.replace(/ /g, "");

        this.seps = this.seps.replace(/ /g, "");
        this.seps = this.consistentShuffle(this.seps, this.salt);

        if (!this.seps.length || (this.alphabet.length / this.seps.length) > this.sepDiv) {

            sepsLength = Math.ceil(this.alphabet.length / this.sepDiv);

            if (sepsLength === 1) {
                sepsLength++;
            }

            if (sepsLength > this.seps.length) {

                diff = sepsLength - this.seps.length;
                this.seps += this.alphabet.substr(0, diff);
                this.alphabet = this.alphabet.substr(diff);

            } else {
                this.seps = this.seps.substr(0, sepsLength);
            }

        }

        this.alphabet = this.consistentShuffle(this.alphabet, this.salt);
        guardCount = Math.ceil(this.alphabet.length / this.guardDiv);

        if (this.alphabet.length < 3) {
            this.guards = this.seps.substr(0, guardCount);
            this.seps = this.seps.substr(guardCount);
        } else {
            this.guards = this.alphabet.substr(0, guardCount);
            this.alphabet = this.alphabet.substr(guardCount);
        }

    }

    Hashids.prototype.encode = function () {

        var ret = "", i, len,
            numbers = Array.prototype.slice.call(arguments);

        if (!numbers.length) {
            return ret;
        }

        if (numbers[0] instanceof Array) {
            numbers = numbers[0];
        }

        for (i = 0, len = numbers.length; i !== len; i++) {
            if (typeof numbers[i] !== "number" || numbers[i] % 1 !== 0 || numbers[i] < 0) {
                return ret;
            }
        }

        return this._encode(numbers);

    };

    Hashids.prototype.decode = function (hash) {

        var ret = [];

        if (!hash.length || typeof hash !== "string") {
            return ret;
        }

        return this._decode(hash, this.alphabet);

    };

    Hashids.prototype.encodeHex = function (str) {

        var i, len, numbers;

        str = str.toString();
        if (!/^[0-9a-fA-F]+$/.test(str)) {
            return "";
        }

        numbers = str.match(/[\w\W]{1,12}/g);

        for (i = 0, len = numbers.length; i !== len; i++) {
            numbers[i] = parseInt("1" + numbers[i], 16);
        }

        return this.encode.apply(this, numbers);

    };

    Hashids.prototype.decodeHex = function (hash) {

        var ret = [], i, len,
            numbers = this.decode(hash);

        for (i = 0, len = numbers.length; i !== len; i++) {
            ret += (numbers[i]).toString(16).substr(1);
        }

        return ret;

    };

    Hashids.prototype._encode = function (numbers) {

        var ret, lottery, i, len, number, buffer, last, sepsIndex, guardIndex, guard, halfLength, excess,
            alphabet = this.alphabet,
            numbersSize = numbers.length,
            numbersHashInt = 0;

        for (i = 0, len = numbers.length; i !== len; i++) {
            numbersHashInt += (numbers[i] % (i + 100));
        }

        lottery = ret = alphabet[numbersHashInt % alphabet.length];
        for (i = 0, len = numbers.length; i !== len; i++) {

            number = numbers[i];
            buffer = lottery + this.salt + alphabet;

            alphabet = this.consistentShuffle(alphabet, buffer.substr(0, alphabet.length));
            last = this.hash(number, alphabet);

            ret += last;

            if (i + 1 < numbersSize) {
                number %= (last.charCodeAt(0) + i);
                sepsIndex = number % this.seps.length;
                ret += this.seps[sepsIndex];
            }

        }

        if (ret.length < this.minHashLength) {

            guardIndex = (numbersHashInt + ret[0].charCodeAt(0)) % this.guards.length;
            guard = this.guards[guardIndex];

            ret = guard + ret;

            if (ret.length < this.minHashLength) {

                guardIndex = (numbersHashInt + ret[2].charCodeAt(0)) % this.guards.length;
                guard = this.guards[guardIndex];

                ret += guard;

            }

        }

        halfLength = parseInt(alphabet.length / 2, 10);
        while (ret.length < this.minHashLength) {

            alphabet = this.consistentShuffle(alphabet, alphabet);
            ret = alphabet.substr(halfLength) + ret + alphabet.substr(0, halfLength);

            excess = ret.length - this.minHashLength;
            if (excess > 0) {
                ret = ret.substr(excess / 2, this.minHashLength);
            }

        }

        return ret;

    };

    Hashids.prototype._decode = function (hash, alphabet) {

        var ret = [], i = 0,
            lottery, len, subHash, buffer,
            r = new RegExp("[" + this.guards + "]", "g"),
            hashBreakdown = hash.replace(r, " "),
            hashArray = hashBreakdown.split(" ");

        if (hashArray.length === 3 || hashArray.length === 2) {
            i = 1;
        }

        hashBreakdown = hashArray[i];
        if (typeof hashBreakdown[0] !== "undefined") {

            lottery = hashBreakdown[0];
            hashBreakdown = hashBreakdown.substr(1);

            r = new RegExp("[" + this.seps + "]", "g");
            hashBreakdown = hashBreakdown.replace(r, " ");
            hashArray = hashBreakdown.split(" ");

            for (i = 0, len = hashArray.length; i !== len; i++) {

                subHash = hashArray[i];
                buffer = lottery + this.salt + alphabet;

                alphabet = this.consistentShuffle(alphabet, buffer.substr(0, alphabet.length));
                ret.push(this.unhash(subHash, alphabet));

            }

            if (this._encode(ret) !== hash) {
                ret = [];
            }

        }

        return ret;

    };

    Hashids.prototype.consistentShuffle = function (alphabet, salt) {

        var integer, j, temp, i, v, p;

        if (!salt.length) {
            return alphabet;
        }

        for (i = alphabet.length - 1, v = 0, p = 0; i > 0; i--, v++) {

            v %= salt.length;
            p += integer = salt[v].charCodeAt(0);
            j = (integer + v + p) % i;

            temp = alphabet[j];
            alphabet = alphabet.substr(0, j) + alphabet[i] + alphabet.substr(j + 1);
            alphabet = alphabet.substr(0, i) + temp + alphabet.substr(i + 1);

        }

        return alphabet;

    };

    Hashids.prototype.hash = function (input, alphabet) {

        var hash = "",
            alphabetLength = alphabet.length;

        do {
            hash = alphabet[input % alphabetLength] + hash;
            input = parseInt(input / alphabetLength, 10);
        } while (input);

        return hash;

    };

    Hashids.prototype.unhash = function (input, alphabet) {

        var number = 0, pos, i;

        for (i = 0; i < input.length; i++) {
            pos = alphabet.indexOf(input[i]);
            number += pos * Math.pow(alphabet.length, input.length - i - 1);
        }

        return number;

    };

    /* require.js bit */

    if (typeof define === "function" && typeof define.amd === "object" && define.amd) {

        define(function () {
            return Hashids;
        }, []);

    }

    return Hashids;

}());

if(typeof module != 'undefined'){
    module.exports = Hashids;
}

/**
 * @namespace
 */
var pound = {};

/*
 * @const
 * @instance
 */
pound.VERSION = '2.0';
/**
 * @const
 * @deprecated
 */
pound.ENV = 'dev';
/**
 * @const
 */
/**
 * @const
 * @deprecated
 */
pound.VERTICAL = 'default';
/**
 * @const
 * @deprecated
 */
pound.BUZZID = undefined;
/**
 * @const
 * @deprecated
 */
pound.BUZZ_NAME = undefined;
/**
 * @const
 * @deprecated
 */
pound.TIMESTAMP = 1380000000;

if (typeof pound.LOGGED_IN_ONLY == 'undefined'){
	pound.LOGGED_IN_ONLY = true;
}
if (typeof pound.VERIFY_IDENTITIES == 'undefined'){
	pound.VERIFY_IDENTITIES = false;
}
if (typeof Date != 'undefined'){
	pound.TIMESTAMP = (new Date()).getTime(); // The current time
} else if (typeof Math != 'undefined' && typeof Math.random != 'undefined'){
	pound.TIMESTAMP = Math.random();
} else {
	pound.TIMESTAMP = 0;
}
if (typeof pound.SOCIAL_COUNTS == 'undefined'){
  pound.SOCIAL_COUNTS = {
    "facebook_shares": 0,
    "twitter_shares": 0
  };
}
var bf_static_was_undefined = false;

if(typeof BF_STATIC != 'undefined'){
	pound.ENV = BF_STATIC['bf_env'] ? BF_STATIC['bf_env'] : 'dev';
	pound.VERTICAL = BF_STATIC['vertical'] || 'default';
	pound.BUZZID = BF_STATIC['campaignid'];
	pound.BUZZ_NAME = BF_STATIC['buzz_name'];
  pound.TIMESTAMP = BF_STATIC['generated_timestamp']; // The current time w/ milliseconds
} else {
	bf_static_was_undefined = true;
}

/**
 * @const
 */
if (typeof pound.VERIFY_IDENTITIES == 'undefined'){ // This will already be set for testing. Don't override test settings.
	pound.VERIFY_IDENTITIES = false;
}

/**
 * @const
 * @deprecated
 */
pound.FONTS = ['Andale Mono', 'Arial Black', 'Arnoldboecklin', 'Avantgarde',
             'Blippo', 'Book Antiqua', 'Brushstroke', 'Charcoal', 'Comic Sans',
             'Comic Sans MS', 'Coronetscript', 'Courier', 'Courier New',
             'Fixed', 'Florence', 'Gadget', 'Geneva', 'Georgia', 'Gill Sans',
             'Helvetica', 'Helvetica Narrow', 'Impact', 'Lucida Console',
             'Lucida Grande', 'Lucida Sans Unicode', 'Lucidatypewriter',
             'MS Sans Serif', 'MS Serif', 'Monaco', 'New Century Schoolbook',
             'New York', 'Oldtown', 'Palatino', 'Palatino Linotype',
             'Parkavenue', 'Symbol', 'Tahoma', 'Times', 'Times New Roman',
             'Trebuchet MS', 'Verdana', 'Webdings', 'Zapf Chancery', 'cursive',
             'fantasy', 'monospace', 'sans-serif', 'serif'];

/**
 * @const
 * @deprecated
 */
pound.ACTIVEX_PLUGINS = ['AOL Toolbar', 'Activeweave', 'Advanced searchbar',
			 'Affine', 'AhnLab SiteGuard', 'Alexa Toolbar',
			 'Altavista toolbar', 'Bing Bar', 'Browser toolbar',
			 'Data Toolbar', 'DeeperWeb', 'DoNotTrackMe',
			 'Earthlink toolbar', 'FeedsPlus', 'Fiddler',
			 'GeoSurf', 'Ghostery', 'Gofor-It Internet Explorer',
			 'Google Toolbar', 'IE Ad-dons',
			 'IE Developer toolbar', 'IE7pro', 'IMacros',
			 'LastPass Password Manager', 'LuckyTabSave',
			 'MSFeedIcon', 'Microsoft Internet Mail and News',
			 'Microsoft NetMeeting', 'Mitto Password Manager',
			 'Mouse Gestures for Internet Explorer',
			 'Offer Assistant', 'Outlook Express', 'Quero',
			 'SafeWallet Password Manager', 'Simple Adblock',
			 'Speckle', 'SpoofStick', 'Stickis',
			 'Streaming Internet Radio Toolbar', 'Surf Canyon',
			 'Turn Off the Lights', 'Vivisimo MiniBar',
			 'WOT Services', 'WebNotes', 'Windows Address Book',
			 'Windows Live Toolbar', 'Windows Messaging',
			 'Xmarks Sync', 'Xupiter', 'Yahoo! Axis',
			 'Yahoo! Toolbar', 'Yolink', 'Zemanta'];


/**
 * @fileOverview
 *
 * This file contains various helper functions that can be used throughout the project.
 * */

/**
 * @namespace pound.lib
 * @memberof pound
 */
pound.lib = {};

if (typeof Base64 == 'undefined'){
    var Base64 = {
        encode: function(a){
            return encodeURIComponent(a);
        },
        decode: function(a){
            return decodeURIComponent(a);
        }
    };
}

/**
 * @deprecated
 * */
pound.lib.decodeCascadeString = function(cascade_string){
    if (!cascade_string || cascade_string == 'undefined'){
        return {};
    }
    var decoded = Base64.decode(unescape(cascade_string));
    if(decoded && decoded.length > 0 && decoded[0] == '?'){
        decoded = decoded.substr(1, decoded.length);
    }
    var parsed  = pound.lib.parseQueryString(decoded, '/');

    // Now validate. If there is an error we'll most often have a key that is not t, o, or v; or we'll have a value set to undefined.
    for(var key in parsed){
        if (parsed.hasOwnProperty(key)){
            var typ = (typeof parsed[key]).toLowerCase();
            if(typ != 'string' && typ != 'object'){ // The only valid types.
                return {}; 
            }
            if(key != 't' && key != 'o' && key != 'v' && key != 'b' && key != 'u'){
                return {};
            }
        }
    }
    return parsed; 
};

/**
 * @deprecated
 * */
pound.lib.encodeCascadeObject = function(cascade_object){
    return Base64.encode(pound.lib.createQueryString(cascade_object, '/'));
};

/**
 * Sets a cookie from a key, value, expiry, and path.
 * @memberof pound.lib
 * 
 * @param {String} key The key to fetch the cookie by in the future.
 * @param {String} value The value the key should correspond to
 * @param {String} expiry The UTC formatted string of the expiry date/time.
 * @param {String} path The path over which the cookie is valid.
 * @returns {String} The string representation of the cookie.
 */
pound.lib.setCookie = function(key, value, expiry, path){
	var equalities = [];
	var pairs = [[key, escape(value)], ["expires", expiry], ["path", path]];
	var i, pair;
	for (i=0; i<pairs.length; i++){
		pair = pairs[i];
		equalities.push(pair.join("="));
	}
	var ck = (equalities.join("; ") + ";");
	document.cookie = ck;
	return ck;
};	

/**
 * Gets a cookie by a given name.
 * @memberof pound.lib
 * 
 * @param {String} key The key for the cookie to return.
 * @returns {String} The cookie (value) as a string.
 */
pound.lib.getCookie = function(key){
    var cookie = document.cookie;
	var start = cookie.indexOf(key+'=');
	var end = cookie.indexOf(';', start);

	if (end < 0){
		end = cookie.length;
	}

	var kv_pair = cookie.slice(start, end).split('=');

	return kv_pair[1];
};

/**
 * Expires a cookie by name.
 * 
 * @params {String} key The name of the cookie to expire.
 */
pound.lib.expireCookie = function(key){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() - 60); 
    
	pound.lib.setCookie(key, '', exdate.toUTCString(), '/');
	pound.lib.setCookie(key, '', exdate.toUTCString(), '');
};

/**
 * Creates a query string from a js object; params.
 * 
 * @param {String} params
 * @returns {String}
 */
pound.lib.createQueryString = function(params, delimiter) {
	var query_string = [];
	var value;

    if (typeof delimiter == 'undefined'){
        delimiter = '&';
    }
	
	if (params === null || params === undefined){
		return '';
	}
	if (params === {}){
		return '?';
	}
	for ( var key in params ) {
		if (params.hasOwnProperty(key)){
			value = params[key];
			if (value === null){
				value = '';
			}
			if (value === undefined){
				query_string.push(key);
			} else {
				query_string.push(key + "=" + value);					
			}
		}
	}
	return "?" + (query_string.join(delimiter));
};

/**
 * Parses a query string into a javascript object.
 * 
 * @param {String} qs
 * @returns {Object}
 */
pound.lib.parseQueryString = function(qs, delimiter){
	if (qs == '' || qs == undefined || qs == null){
		return {};
	}
    if (typeof delimiter == 'undefined'){
        delimiter = '&';
    }
	var params = qs.split(delimiter);
	var pair;
	var obj = {};
	for (var i=0; i<params.length; i++){
		pair = params[i].split('=');
		if (pair[1] == ''){
			pair[1] = null;
		}
		obj[pair[0]] = pair[1];
	}
	return obj;
};


/**
 * Returns the subbuzz_id given any child node of the subbuzz in an existing DOM.
 *
 * @param {HTMLElement} node
 * 
 * @returns {String}
 */
pound.lib.getSubBuzzIdFromChildNode = function(node){
	if (!node){
		throw new Error("No node was passed to getSubBuzzIdFromChildNode");
	}
	var target_class = /buzz_superlist_item/;
	while (node.parentNode){
		if(node.hasAttribute('class') && node.getAttribute('class').match(target_class)) {
			break;
		}
		node = node.parentNode;
	}
	return node.getAttribute('id').replace('superlist_', '');
};

pound.lib.bind = function(el, eventType, callback){
	if (window.addEventListener){
		el.addEventListener(eventType, callback, false);
	} else if (window.attachEvent) {
		el.attachEvent('on' + eventType, callback);
	} else {
		el['on' + eventType] = callback;
	}
};

pound.lib.unbind = function(el, eventType, callback){
	if (!el){
		return;
	}
	if(el.removeEventListener){
		el.removeEventListener(eventType, callback, false);
	} else if (el.detachEvent){
		el.detachEvent('on' + eventType, callback);
	} else {
		el['on' + eventType] = function(e){return false;};
	}
};

pound.lib.endEvent = function(evt){
	if (evt){
		evt.cancelBubble = true;
		evt.returnValue = false;
		
		if (evt.stopPropagation){
			evt.stopPropagation();
		}
		if (typeof evt.preventDefault != 'undefined'){
			evt.preventDefault();
		}
	}
	return false;
};


pound.lib.walk = function(el, should_return, should_traverse){
	if (!el){
	    return el;
	}
	
	var found;
	for (var i=0; i< el.childNodes.length; i++){
		
		if(should_return(el.childNodes.item(i))){
			found = el.childNodes.item(i); 
		} else if (should_traverse(el.childNodes.item(i))){
			found = pound.lib.walk(el.childNodes.item(i), should_return, should_traverse);
		} else {
			continue;
		}
		
		if (found){
			return found;
		}
	}
}

pound.lib.isInView = function(element, partial, direction) {
    /** Adapted from teamdf/jquery-visible to work to work without JQuery.
        element: The DOM element to check if in view.
        partial: Boolean indicating whether the full element must be in view
        direction: "both", "vertical", "horizontal" - which directions we are 
            checking for.
    **/

    // Don't calculate positioning for hidden elements
    if (!element.offsetParent) {
        return false;
    }

    var html = document.documentElement,
        windowHeight = (window.innerHeight || html.clientHeight),
        windowWidth = (window.innerWidth || html.clientWidth),
        direction = (direction) ? direction : 'both';

    var rec = element.getBoundingClientRect(),
        topVisible       = rec.top    >=  0 && rec.top    <  windowHeight,
        topAboveView     = rec.top    <=  0,
        bottomVisible    = rec.bottom >   0 && rec.bottom <= windowHeight,
        bottomBelowView  = rec.bottom >=  windowHeight,
        leftVisible      = rec.left   >=  0 && rec.left   <  windowWidth,
        leftLeftOfView   = rec.left   <=  0,
        rightVisible     = rec.right  >   0 && rec.right  <= windowWidth,
        rightRightOfView = rec.right  >=  windowWidth;

    var vVisible  = partial ? topVisible || bottomVisible || (topAboveView && bottomBelowView): topVisible && bottomVisible;
    var hVisible  = partial ? leftVisible || rightVisible || (leftLeftOfView && rightRightOfView) : leftVisible && rightVisible;

    if(direction === 'both')
        return vVisible && hVisible;
    else if(direction === 'vertical')
        return vVisible;
    else if(direction === 'horizontal')
        return hVisible;
   
};

pound.lib.isMobileReady = function(){
	if ((BF_STATIC.os === 'android' && BF_STATIC.app_version < 49000) || (BF_STATIC.os === 'ios' && BF_STATIC.app_version < 48000))
        return false; // Pound not implemented in these app versions
    return true;
};


/**
 * Checks to see if a hashtrack cookie is present and if its referrer should override 
 * document.referrer
 * 
 * @param {String} documentReferrer (optional if you need to override document.referrer)
 * @returns {String}
 */
pound.lib.getReferrer = function(documentReferrer){
    if (documentReferrer == undefined){
        documentReferrer = document.referrer;
    }
    if (typeof documentReferrer === 'string' && documentReferrer.indexOf('/h1/') > -1){
        var hashtrackCookie = pound.lib.getCookie("HT_PRIMARY");
        if (hashtrackCookie !== undefined){
            // HT_PRIMARY cookie is comma delimited with the referrer in fifth position.
            var referrer = decodeURIComponent(hashtrackCookie).split(",");
            if (referrer.length > 4){
                return referrer[4] === "not_available"? "" : referrer[4];
            }
        }
    }
    return documentReferrer;
};


pound.lib.optOut = function(){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10000); // Set expiry to a long time
    pound.lib.setCookie('pound_opt_out', '1', exdate.toUTCString(), '/');
    pound.lib.OPTED_OUT = true;
    alert(local.t("You have successfully opted out."));
};

pound.lib.optedOut = function(){
    if (typeof pound.lib.OPTED_OUT == 'undefined') {
        if (pound.lib.getCookie('pound_opt_out')){
            pound.lib.OPTED_OUT = true;
        } else {
            pound.lib.OPTED_OUT = false;
        }
    }
    return pound.lib.OPTED_OUT;
};




if (typeof pound == 'undefined'){
    pound = {};
}
if (typeof pound.sharing == 'undefined'){
    pound.sharing = {};
}

/**
 * Allows hooks to be registered when sharing buttons are clicked.
 *
 * @constructor
 * @singleton
 */
pound.sharing.hooks = new (function(){
    var _this = this;

    _this.hooks = [];

    /**
     * Registers a callback to be executed when a share button is clicked. The callback gets passed the event target.
     *
     * @param {function} callable The function to execute. Will be passed the event target, an {HTMLElement}
     */
    this.register = function(callable){
        if (typeof callable != 'undefined'){
            _this.hooks.push(callable);
        }
    };

    /**
     * Executes the hooks for a share button.
     *
     * @param {HTMLElement} e The share button that was clicked.
     */
    this.execute = function(el){
        for(var i=0; i<_this.hooks.length; i++){
            _this.hooks[i](el);
        }
    };
})();

if (typeof pound == 'undefined') {
	var pound = {};
}
if (typeof pound.identity == 'undefined'){
	pound.identity = {};
}

/**
 * Generates a unique id for the user based on the time and a random variable. 
 * Resolution is 1 month with about 0.6% chance of collisions each second. 
 * 
 * @constructor
 * @returns {string} unique_id
 */
pound.identity.Unique = function(id){

    var _this = this;
    var _base36 = new RegExp('[0-9A-Za-z]+');

    function _init(){
        var r = NaN;
        if (id){
            _this.id = id;
        } else {
            for( var i=0; i<10; i++){
                if(isNaN(r)){
                    _this.id = parseInt(Math.random() * 10000000000);
                } else {
                    break;
                }
            }
        }
    }

    this.hashed = function(){
        var salt = parseInt(Math.random() * 25 + 10).toString(36) +
            parseInt(Math.random() * 25 + 10).toString(36);
        var hashids = new Hashids(salt);
        var id = hashids.encode(_this.id);

        return '.' + salt + id 
    };

    this.munge = function(){
        var munged = parseInt(_this.id);
        if (isNaN(_this.id)){
            return null; 
        } 
        return munged;
    };

    this.unhashed = function(id){
        if (!id)
            throw new Error("Id is a required parameter");

        if (id.indexOf(".") !== 0){
            // This may be a V1, unhashed id
            var m = _base36.exec(id);
            if (m !== null && m[0] == id){
                return parseInt(id, 36);
            }
            else
                return false; // this is not a valid id
        } 

        var salt = id.substr(1, 2);
        var str_id = id.substr(3);
        var int_id = parseInt(str_id, 36);
        var hashids = new Hashids(salt);

        return hashids.decode(str_id)[0];
    };

    this.toString = function(){
        return _this.id.toString();
    };
    
    /**
     * Determines whether or not a single int id is valid.
     *
     * @param {Number} id
     * @returns {Boolean} true if the id is valid, false otherwise.
     * */
    this.validate = function(id){
        var validateId = id ? id : _this.id;
        if (!validateId || isNaN(validateId) || validateId > 25000000000){
            return false;
        }
        return true;
    };

    /**
     * Determines what category the id value values into.
     *
     * @returns {string} user, promotion, or mobile_app_user
     * */
    this.getCategory = function(){
        if (!_this.id || isNaN(_this.id))
            return undefined;
        else if (_this.id <= 10000000000)
            return 'user';
        else if(_this.id <= 15000000000)
            return 'promotion';
        else if(_this.id <= 25000000000)
            return 'mobile_app_user';
        else
            return undefined;
    };

    _init();
}

if (typeof module != 'undefined'){
    module.exports = pound.identity.Unique;
}

if (typeof pound == 'undefined') {
	var pound = {};
}
if (typeof pound.identity == 'undefined'){
	pound.identity = {};
}

function default_buzzfeed_id(){
	return undefined;
}

/**
 * Returns the buzzfeed userid if the user is logged in. Otherwise; nothing.
 * 
 * @constructor
 * @returns {mixed} Either a string or null
 */
pound.identity.Buzzfeed = function(){
	if (typeof BF_User != 'undefined'){
		var userid = (((new BF_User()).getUserInfo()).userid);	
		return userid;
	}
	return default_buzzfeed_id();
};
/**
 * @constructor
 * @returns {pound.Validate}
 **/
pound.Validate = new (function(){
    
    var _this = this;
    var _base36 = new RegExp('[0-9A-Za-z]+');

    /**
     * Determines whether or not a single string id is valid. 
     *
     * @param {String} id The id to test whether or not it's valid.
     * @returns {Boolean} true if the id is valid. false otherwise.
     * */
    this.stringId = function(id){
        if(!id || !id.length || isNaN(parseInt(id, 36))){
            return false;
        }
        var m = _base36.exec(id);
        if (m != null && m[0] == id){
            return true;
        } 
        return false;
    };

    /**
     * Checks to see if the bf_visit cookie contains only valid ids.
     *
     * @returns {object} An object containing any invalid components.
     */
    this.cookie = function(){
        var c = pound.lib.parseQueryString(unescape(pound.lib.getCookie('bf_visit')));
        return _this.idObject(c); 
    };

    /**
     * Parses the valid components of an id object to determine whether or not each value is a valid id.
     *
     * @param {Object} o The object to parse.
     * @returns {object} An object containing any invalid components.
     */
    this.idObject = function(o){
        var invalid = {};
        if(o['u'] && !_this.stringId(o['u'])){
            invalid['u'] = o['u'];
        }
        if(o['o'] && !_this.stringId(o['o'])){
            invalid['o'] = o['o']; 
        }
        if(o['t'] && !_this.stringId(o['t'])){
            invalid['t'] = o['t'];
        }
        return invalid;
    };

    /**
     * Validates an object representing a click-click-share relationship between two posts and a user. 
     *
     * @param {object} o The object to validate.
     * @returns {object} Any invalid portion of the object.
     */
    this.shareObject = function(o){
        var invalid = {};
        if(o['u'] && !_this.stringId(o['u'])){
            invalid['u'] = o['u'];
        }
        if(o['c'] && isNaN(o['c'])){
            invalid['c'] = o['c'];
        }
        if(o['p'] && isNaN(o['p'])){
            invalid['p'] = o['p'];
        }
        return invalid;
    };

    /**
     * Attempts to munge an invalid id by removing trailing bytes until it either parses to a base 36 integer or is empty.
     *
     * @returns {Mixed} Either a {String} if the id successfully munges or false if it doesn't.
     */
    this.munge = function(invalid_id){
        while(invalid_id && invalid_id.length && invalid_id.length > 0){
            if(!_this.stringId(invalid_id)){
                invalid_id = invalid_id.substr(0, invalid_id.length - 1);
            } else {
                return invalid_id;
            }
        }
        return false;
    };

})();

/**
 * @constructor
 * @returns {pound.UrlRewriting}
 * */
pound.UrlRewriting = function(){
	var _this = this;

	/*
	 * Initializes the urls class. Breaks the current URL down into it's components.
	 * @private 
	 */
	this.init = function(){
		_this.utm_param = 'utm_term';

        _this.protocol        = window.location.protocol
		_this.domain          = window.location.hostname;
        _this.path            = _this._removePoundSegment(window.location.pathname);
		_this.baseHashString  = window.location.hash.substr(1,window.location.hash.length);
        _this.baseQueryString = window.location.search.substr(1, window.location.search.length); 
		
        // Determine if we're in QA mode.
        var qs = pound.lib.parseQueryString(_this.baseQueryString); 

        if (typeof qs['qa'] != 'undefined' && qs['qa'] == '1'){
            _this.domain = _this.domain.replace('dev.', 'www.');
            _this.pathname = _this.pathname.replace('/bf2', '');
        }
	}

    this.hasPoundSegment = function(){
        var segment = window.location.pathname.match(/\/p\/\.[a-zA-Z0-9]+/);
        if (segment && segment.length){
            return true; 
        }
        return false;
    };

    this.getHistoryState = function(){
        var search = _this._removeQueryString(_this.baseQueryString); 
        search = !!search ?  "?" + search : ""; 
        if (_this.path.match(/^\/bf2/)){
            return '/bf2' + _this.getPoundSegment() + '/' + _this.path.replace(/^\/bf2\//, '') + search;
        }
        return _this.getPoundSegment() + _this.path + search;
    };

    this.getPoundSegment = function(){
        return '/p/' + window.bf_visit.unique.hashed();
    };

    this._removePoundSegment = function(url){
        return url.replace(/\/p\/\.[a-zA-Z0-9]+/, "");
    };

    this.getBaseUrl = function(){
        var port = !!window.location.port ? ":" + window.location.port : "";
        return _this.protocol + '//' + _this.domain  + port + _this.path;
    };

	/**
	 * Gets the cascade string corresponding to the current 'visit'. It's in
	 * stringified json format, t is the key for the twice-removed id while o is the
	 * key for the once-removed id.
	 * 
	 * @returns {String}
	 */
	this._getCascadeString = function(){
		var sharer = window.bf_visit.sharer.hashed();
		var current = window.bf_visit.unique.hashed(); // TODO: Figure out the best param to use here.
	
		if (typeof sharer != 'undefined'){
			return pound.lib.encodeCascadeObject({t: sharer.hashed(),
								                  o: current.hashed()});
		}
		return pound.lib.encodeCascadeObject({o: current.hashed()});
	};

	/**
	 * Replaces the current url's hash with the current user's pound id. 
	 * 
	 * @param {String} url The url to add the hash to.
	 * @private
	 * @returns {String} The url with the new hash.
	 */
	this._addHash = function(url){
        if (pound.lib.optedOut()){
            return url;
        }
		var hash = window.bf_visit.unique.hashed();
				
		return _this._removeHash(url) + (hash !== undefined ? '#' + hash : '');
	};

	/**
	 * Returns the url passed with the hash removed.
	 * 
	 * @param {String} url The url to remove the hash from.
	 * @private
	 * @returns {String} The new url
	 */
	this._removeHash = function(url){
		if (url.indexOf('#') > -1){
			return url.substr(0, url.indexOf('#'));
		}
		return url;
	};
	
	/**
	 * Removes the querystring from the url passed.
	 * 
	 * @param {String} url The url to remove the querystring from.
	 * @private
	 * @returns {String} The new url.
	 */
	this._removeQueryString = function(url){
		var hash = _this._getHash(url);
		if (url.indexOf('?') > -1){
			return url.substr(0, url.indexOf('?')) + (hash !== undefined ? '#' + hash : '');
		}
		return url;
	};

	/**
	 * Returns the hash on the url passed (without the pound sign).
	 * 
	 * @param {String} url The url to return the hash from.
	 * @private
	 * @returns {mixed} Returns a string (possibly empty) if there is a hash, otherwise returns undefined.
	 */
	this._getHash = function(url){
		if (url.indexOf('#') > -1){
            return url.substr(url.indexOf('#') + 1,url.length);
		}
		return undefined;
	};

	/**
	 * Gets the querystring for the url passed.
	 * 
	 * @param {String} url The url to return the querystring from
	 * @private
	 * @returns {mixed} Returns a (possibly empty) string if a querystring is set, otherwise undefined
	 */
	this._getQueryString = function(url){
		url = _this._removeHash(url);
		if (url.indexOf('?') > -1){
			return url.substr(url.indexOf('?') + 1, url.length);
		}
		return undefined;
	};

	/**
	 * Adds the appropriate utm_* term to the existing set of querystring parameters.
	 * 
	 * @param {String} url The url to add the querystring parameter to.
     * @param {Array} additional_params Additional parameters to send the hash through
     * @param {Array(Array(String))} An array of length N containing N 2-element arrays where the first element is the parameter name to add to the URL and the second element is the associated value.
	 * @private
	 * @returns {String} The new url with the querystring param added in it.
	 */
	this._addQueryString = function(url, additional_params, additional_keyvals){
        if (pound.lib.optedOut()){
            return url;
        }
		var hash = _this._getHash(url);
		var qs   = pound.lib.parseQueryString(_this._getQueryString(url));

		var pname;

		url  = _this._removeHash(url);
		url  = _this._removeQueryString(url);

		qs[_this.utm_param] = window.bf_visit.unique.hashed(); 

        if (typeof additional_params != 'undefined'){
            for(var i=0;i<additional_params.length;i++){
                pname = additional_params[i];
                qs[pname] = escape(window.bf_visit.unique.hashed());
            }
        }
        if (typeof additional_keyvals != 'undefined'){
            for(i=0; i<additional_keyvals.length; i++){
                pname = additional_keyvals[i][0];
                pval = additional_keyvals[i][1];
                qs[pname] = pval;
            }
        }

		var r = url + pound.lib.createQueryString(qs) + (hash ? '#' + hash : '');

		return r;
	};

    this.poundSegmentOnly = function(){
        if (_this.path.match(/^\/bf2/)){
            return _this.protocol + '//' + _this.domain + '/bf2' + _this.getPoundSegment() + '/' + _this.path.replace(/^\/bf2\//, '');
        }
        return _this.protocol + '//' + _this.domain + _this.getPoundSegment() + _this.path;
    };
	
	/**
	 * Returns the current URL escaped with the cascade parameters added into the hash. 
	 * 
	 * @returns {String} 
	 */
	this.hashOnly = function(){
        if (_this.hasPoundSegment()){
            return escape(_this.poundSegmentOnly());
        }
        return escape(_this._addHash(_this.getBaseUrl()));
	};
	
	/**
	 * Returns the current URL escaped with the cascade parameters added into the querystring only (using the appropriate utm-prefixed parameter)
	 * 
     * @param {Array(String)} additional_params Additional parameters to set the cascade string to in the querystring.
     * @param {Array(Array(String))} An array of length N containing N 2-element arrays where the first element is the parameter name to add to the URL and the second element is the associated value.
	 * @returns {String}
	 */
	this.queryStringOnly = function(additional_params, additional_keyvals){
        var with_querystring;
        if (_this.hasPoundSegment()){
            return escape(_this.poundSegmentOnly());
        }

		if (typeof additional_params != 'undefined'){
            with_querystring = _this._addQueryString(_this.getBaseUrl(), additional_params, additional_keyvals);
		} else {
            with_querystring = _this._addQueryString(_this.getBaseUrl());
        }

        // Don't include the hash. Ever. 
		return escape(with_querystring);
	};
	
	/**
	 * Returns the current URL escaped with the cascade parameters added into both the querystring and the hash
     *
     * @param {Array(String)} Additional url parameters to include the cascade string on.
     * @param {Array(Array(String))} An array of length N containing N 2-element arrays where the first element is the parameter name to add to the URL and the second element is the associated value.
	 * 
	 * @returns {String}
	 */
	this.hashAndQueryString = function(additional_params, additional_keyvals){
        if (_this.hasPoundSegment()){
            return escape(_this.poundSegmentOnly());
        }

		if (typeof additional_params != 'undefined'){
			return escape(_this._addHash(_this._addQueryString(_this.getBaseUrl(), additional_params, additional_keyvals))); 
		}
	    return escape(_this._addHash(_this._addQueryString(_this.getBaseUrl())));
    };

	/**
	 * Returns the current URL escaped with no cascade parameters at all 
	 * 
	 * @returns {String}
	 */
	this.stripped = function(){
		return _this.getBaseUrl(); 
	};
	
	/**
	 * An interface to the unescaped versions of each hashOnly, queryStringOnly, and hashAndQueryString 
	 * 
	 */
	this.unescaped = {
		hashOnly:           function(){ 
            return unescape(_this.hashOnly()); 
        },
		queryStringOnly:    function(additional_params, additional_keyvals){ 
            return unescape(_this.queryStringOnly(additional_params, additional_keyvals)); 
        },
		hashAndQueryString: function(additional_params, additional_keyvals){ 
            return unescape(_this.hashAndQueryString(additional_params, additional_keyvals)); 
        }
	};

    this.setBaseUrl = function(base_url){
		_this.baseUrl 		  = _this._removePoundSegment(_this._removeQueryString(_this._removeHash(base_url)));
		_this.baseQueryString = base_url.substr(base_url.indexOf('?'), base_url.length);
		_this.baseHashString  = base_url.substr(base_url.indexOf('#'), base_url.length); 
    };
};

pound.urls = new pound.UrlRewriting(); 

/**
 * Handles sending of pound events as messages to the Pixiedust 'website_events'
 * NSQ stream.
 *
 * To access the Events object, use pound.poundEvents
 */
pound.poundEvents = (function () {
    var events = {
        processEvent: processEvent,
        messageNo: 0
    };

    /**
     * Pushes an event to the Pixiedust queue.
     *
     * @param evt {Object} A JSON representation of a pound event. 
     * @param shouldFlush {Boolean} Optional, Determines whether a message requires
     *      for the Pixiedust queue to be flushed immediately.  Should be used in
     *      cases when a redirect to another page is involved.
     *
    **/
    function processEvent(evt, shouldFlush){
        if (!BF_STATIC.pound_enabled || 
            (BF_STATIC.mobile_app && !pound.lib.isMobileReady()) ||
          (typeof pixiedust === 'undefined' && !window.BZFD)){
            return false;
        }

        var message_data = _decorateEventData(evt);
        events['messageNo']++;

        if (window.BZFD && window.bfa) {
            window.bfa('track/click/sharing', {
                opt: {
                    ignore: ['all'],
                    force: ['PixiedustIntegration'],
                },
                data: message_data,
            });
        }
        else {
            if (!pixiedust.push(message_data)) {
                // Pixiedust currently returns false if a single message is too long to
                // send via tracking pixel. In this case, try dropping the referrer and
                // try again.
                delete message_data['r'];
                pixiedust.push(message_data);
            }

            if (shouldFlush) {
                pixiedust.flush();
            }
        }
        return true;
    }

    /**
     * Takes an event, and adds any relevant
     * data which is shared across all event types.
     * @param evt {Object} An object representing a pound event.
     *
    **/
    function _decorateEventData(evt){
        if (!evt['type']) {
            throw new Error('Pound Events: missing type from message_data');
        }
        evt['v'] = pound.VERSION;
        evt['r'] = pound.lib.getReferrer();

        return evt;
    }

    return events;
})();

(function() {

var pound = window.pound;

/**
 * Holds all Widget objects on page and handles sending of
 * impression data.
 */
pound.widgets = (function() {
    var widgetClass = 'js-pound-widget';

    var poundWidgets = {
        process: process,
        addWidget: addWidget,
        addImpression: addImpression,
        updateWidgetIds: updateWidgetIds,
        impression_count: 0,
        widgets: {}
    };

    // Half a second after a user has finished scrolling or resizing a page
    // we check to see which widgets are still in view.
    var scrollResizeTimer = null;
    pound.lib.bind(window, 'scroll', scrollResizeHandler);
    pound.lib.bind(window, 'resize', scrollResizeHandler);

    var evt = pound.poundEvents;

    function scrollResizeHandler() {
        // Hold off on recalculation of widget visibility until half a second
        // from the browser's last scroll or resize event.
        if (scrollResizeTimer) {
            clearTimeout(scrollResizeTimer);
        }
        scrollResizeTimer = setTimeout(_checkVisibility, 500);
    }

    function addWidget(widget) {
        if (poundWidgets.widgets[widget.widget_id] === undefined){
            poundWidgets.widgets[widget.widget_id] = [widget];
        }
        else{
            poundWidgets.widgets[widget.widget_id].push(widget);
        }
        
    }

    function addImpression(widget_id, buzz_id, buzz_data) {
        poundWidgets['impression_count']++;
        evt.processEvent({
            'widget_id': widget_id,
            'buzz_id': buzz_id,
            'buzz_type': buzz_data['buzz_type'],
            'type': 'buzz_recommendation_impression',
            'variation' : buzz_data['variation'],
            'fallback'  : buzz_data['fallback']
        });
    }

    function updateWidgetIds(widget_ids) {
        // Given an array of (original) widget_ids already initialized,
        // update the widget_id value to reflect any updates made to it.
        var reinitContainers = [];
        for (var j = 0; j < widget_ids.length; j++) {
            var widget_id = widget_ids[j];
            var key_widgets = poundWidgets.widgets[widget_id];

            if (key_widgets === undefined ){
                continue;
            }

            var len = key_widgets.length;
            for (var i = 0; i < len; i++) {
                var widget = key_widgets.shift();
                widget.widget_id = widget.container.getAttribute('pound_position');
                addWidget(widget);
            };

            if (poundWidgets.widgets[widget_id].length === 0){
                delete poundWidgets.widgets[widget_id];
            }
        }

    }

    function _checkVisibility() {
        for (var key in poundWidgets.widgets) {
            var key_widgets = poundWidgets.widgets[key];
            for (var i = 0; i < key_widgets.length; i++) {
                key_widgets[i]._recalculateInView(true);
            }
            
        }
    }

    function process() {
        Array.prototype.forEach.call(document.getElementsByClassName(widgetClass), pound.Widget);
    }

    return poundWidgets;
})();


window.bf_widgets = pound.widgets;

var promoted_regex = /(^|\s)preview-(\d+)(\s|$)/;

pound.Widget = function(container) {
    /*  A particular Widget on a page.
        Instantiated when the widgetClass is applied to the target container
        (ie. the level at which pound_position is defined).
    */

    if (!(this instanceof pound.Widget)) {
        return new pound.Widget(container);
    }

    this.init = function() {
        this.container = container;
        this.widget_id = container.getAttribute('pound_position');

        this.buzzes  = {};
        this.impressions = [];

        this.in_view = this._recalculateInView(true);

        bf_widgets.addWidget(this);

        if (BF_STATIC['pound_widget_tracking_enabled']){
            var _this = this;
            pound.lib.bind(container, 'click', function(evt) {
                _this._trackClickEvent(evt);
            });
        }

        this.evt = pound.poundEvents;
    };

    this._recalculateInView = function(partial, direction) {
        // Decide whether the widget is in view.  If so, find the buzzes contained within
        // the widget.
        this.in_view = pound.lib.isInView(this.container, partial, direction);

        if (this.in_view) {
            this.locate_buzzes();

            for (var buzz_id in this.buzzes) {

                if (this.buzzes[buzz_id].sent) {
                    // We already sent this impression data so don't care if it is in view
                    continue; 
                }

                this.buzzes[buzz_id].seen = pound.lib.isInView(this.buzzes[buzz_id].element, true);
                if (BF_STATIC['pound_widget_tracking_enabled'] && this.buzzes[buzz_id].seen) {
                    this.buzzes[buzz_id].sent = true;
                    bf_widgets.addImpression(this.widget_id, buzz_id, this.buzzes[buzz_id]);
                }
            }
        }
        return this.in_view;
    };

    this.isPartnerBuzz = function(element) {
        // Determines whether a buzz was dynamically loaded from a Partner network.  If so,
        // we extract the buzz_id from the preview-buzz_id class name.
        var match = promoted_regex.exec(element.className);
        return match ? match[2] : null;
    };

    this.locate_buzzes = function() {
        // Finds any buzzes contained within a widget based on it having a re:buzz_id attribute or being a
        // partner buzz.  Any newly discovered buzz_id will be instaniated as Buzz objects.
        var allElements = this.container.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++){
            var buzz_id = allElements[i].getAttribute('rel:buzz_id');
            if (buzz_id && !(buzz_id in this.buzzes)) {
                this.buzzes[buzz_id] = {
                    'buzz_id': buzz_id,
                    'element': allElements[i].parentNode,
                    'buzz_type': 'editorial'
                };
                continue;
            }
            var partnerBuzzId = this.isPartnerBuzz(allElements[i]);
            if (partnerBuzzId && !(partnerBuzzId in this.buzzes)){
                this.buzzes[partnerBuzzId] = {
                    'buzz_id': partnerBuzzId,
                    'element': allElements[i],
                    'buzz_type': 'ad'
                };
            }
        }
        return this.buzzes;
    };

    this._trackClick = function(target, click_event){
        // Intercepts any clicks within the widget container. We bubble up from the event target until we locate
        // the buzz_id and a tag associated with the click. If either is missing, we let return to the default
        // click handler.  Otherwise, we send the click data and redirect afterwards.
        var buzz_id = null;
        var aTag = null;
        var buzz_type = null;

        while (target !== this.container){
            if (target.tagName  && target.tagName.toUpperCase() === 'A') {
                aTag = target;
            }

            if (target.getAttribute('rel:buzz_id')) {
                buzz_id = target.getAttribute('rel:buzz_id');
                buzz_type = 'editorial';
                break;
            }

            var partnerBuzzId = this.isPartnerBuzz(target);
            if (partnerBuzzId) {
                buzz_id = partnerBuzzId;
                buzz_type = 'ad';
                break;
            }

            target = target.parentNode;
        }

        if (buzz_id === null || aTag === null) {
            return;
        }
        
        this.evt.processEvent({
            'widget_id': this.widget_id,
            'buzz_id': buzz_id,
            'type': 'buzz_recommendation_click',
            'buzz_type' : buzz_type
        }, true);
        window.open(aTag.getAttribute('href'), "_self");
    };

    this._trackClickEvent = function(click_event) {
        var target = click_event.target || click_event.srcElement;
        this._trackClick(target, click_event);
    };

    this.init();
};
})();

if (typeof pound == 'undefined'){
    var pound = {};
}


pound.Share = function(user, buzzid){
    var _this = this;

    this.user = user;
    this.buzzid = buzzid;
    this.ab = typeof abtest !== 'undefined' && typeof ab_config !== 'undefined' ? abtest.abTestsToString() : "";

    this.toObject = function(){
        return {'u': encodeURIComponent(_this.user.hashed()),
                's': encodeURIComponent(_this.buzzid) };
    };

    this.toMessage = function(){
        return {'buzz_id'   : _this.buzzid,
                'pound_id'  : _this.user.id,
                'ab'        : _this.ab,
                'type'      : 'share',
                'channel'   : _this.shareChannel};
    };


};

pound.UserEdge = function(from, to, buzzid){
    var _this = this;

    this.from = from;
    this.to = to;
    this.buzzid = buzzid;

    this.equals = function(a, b) {
        var id = new pound.identity.Unique();
        var from_a = id.unhashed(a.o);
        var to_a = id.unhashed(a.u);
        var from_b = id.unhashed(b.o);
        var to_b = id.unhashed(b.u);
        var bida = id.unhashed(a.c)
        var bidb = id.unhashed(b.c);
        if (typeof from_a == 'undefined' || typeof from_b == 'undefined') {
            return false;
        }
        if (from_a == from_b && to_a == to_b && bida == bidb){
            return true;
        }
        return false;
    };

    this.toObject = function(){
        return {'o': encodeURIComponent(_this.from.hashed()),
                'u': encodeURIComponent(_this.to.hashed()),
                'c': encodeURIComponent(_this.buzzid)};
    };

    this.getPlatform = function(){
        if (window.BZFD) {
            return 'bzfd';
        }
        if(BF_STATIC.tt_page && BF_STATIC.tt_page.indexOf('Mobile') > -1) {
            if(BF_STATIC.mobile_app){
                return 'app';
            } else {
                return 'mobileweb';
            }
        } else {
            return 'web';
        }
    };

    this.isAd = function(){
        return !!BF_STATIC.f_ad;
    };

    this.toMessage = function(){
        return {'from_client_id': _this.from.id,
                'client_id'     : _this.to.id,
                'buzz_id'       : _this.buzzid,
                'type'          : "user_edge",
                'ad'            : _this.isAd(),
                'platform'      : _this.getPlatform()};
    };
};

pound.PostEdge = function(from, to, user){
    var _this = this;

    this.from = from;
    this.to = to;
    this.user = user;

    this.toObject = function(){
        return {'p': encodeURIComponent(_this.from),
                'c': encodeURIComponent(_this.to),
                'u': encodeURIComponent(_this.user.hashed()) };
    };

    this.toMessage = function(){
        // client_id added by pixiedust
        return {'from_buzz_id'  : _this.from,
                'to_buzz_id'    : _this.to,
                'type'          : "post_edge" };
    };

};

pound.UpdatedUnique = function(old_unique, new_unique){
    var _this = this;

    this.old_unique = old_unique;
    this.new_unique = new_unique;

    this.toObject = function(){
        return {'u1': encodeURIComponent(_this.old_unique),
                'u2': encodeURIComponent(_this.new_unique) };
    };
};

pound.Event = function(){
    var _this = this;
    this.o = {};
    this.callbacks = [];
    this.empty = true;

    this.merge = function(a){
        for(var k in a){
            if (a.hasOwnProperty(k)){
                _this.o[k] = a[k];
            }
        }
        _this.o.r = encodeURIComponent(pound.lib.getReferrer());
        _this.o.v = encodeURIComponent(pound.VERSION);
        _this.empty = false;
    };

    this.addCallback = function(callback){
        _this.callbacks.push(callback);
    };
};

/**
 * Represents a visit. Makes a decision whether or not to record the visit, and
 * constructs the tracking pixel accordingly.
 *
 * @constructor
 * @returns {pound.Visit}
 */
pound.Visit = function() {
    var _this          = this;

    this.init = function() {
        window.bf_visit = this;

        this.img        = undefined;
        this.bf         = undefined;
        this.random     = undefined;

        this.sharer  = null;
        this.errors = [];

        this.poundEvents = pound.poundEvents;

        this.pixelNo = 0;


        this.OPTED_OUT = undefined;

        _this.setIdentity();

        pound.urls.init();

        if (document.readyState === 'complete') {
            _this.setState();
        }
        else if (document.readyState === 'interactive') {
            setTimeout(_this.setState.bind(_this), 1);
        }
        else {
            document.addEventListener('DOMContentLoaded', _this.setState);
        }
    };

    this._removeFromBounces = function(userEdge) {
        var hash = userEdge.o,
            unhashed = hash ? _this.unique.unhashed(hash) : hash,
            buzz_id = userEdge.c,
            unique = userEdge.u;

        if (_this._acquireBounceLock()) {
            var key = 'unprocessed_propagation_events';
            var prop_events = store.get(key);
            var index = -1;
            if (prop_events && prop_events.length) {
                for (var i=0, len=prop_events.length; i<len; i++){
                    var evt = prop_events[i],
                        clientId = _this._getClientId(evt[0]);

                    if (unhashed && !_this.unique.validate(unhashed)){
                        unhashed = undefined;
                    }

                    if ((unhashed && unhashed == _this.unique.unhashed(clientId)
                            || (!unhashed && hash == clientId)) // A case in which an invalid id was added to storage.
                            && buzz_id == evt[1]) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    prop_events.splice(index, 1);
                }
                store.set(key, prop_events);
                _this._releaseBounceLock();
            }
        } else {
            setTimeout(function() {
                _this._removeFromBounces(userEdge);
            }, 100);
        }
    };

    this._releaseBounceLock = function(){
        if (_this.bounceLockAcquired) {
            _this.bounceLockAcquired = false;
        } else {
            throw new Error("Tried to release a lock that is not acquired.");
        }
    };

    this._acquireBounceLock = function(){
        if (_this.bounceLockAcquired){
            return false;
        }
        _this.bounceLockAcquired = true;
        return true;
    };

    this._processBounces = function(){
        var key = 'unprocessed_propagation_events';
        var prop_events = store.get(key);
        if (prop_events && typeof prop_events.shift != 'undefined') {
            while(prop_events.length) {
                var evt = prop_events.shift();
                var from_client_id =  _this._getClientId(evt[0]),
                    buzz_id = evt[1],
                    created_at = evt[2],
                    unhashed_cliend_id = _this.unique.unhashed(from_client_id),
                    userEdge = new pound.UserEdge(new pound.identity.Unique(unhashed_cliend_id),
                        _this.unique,
                        buzz_id);
                if (!unhashed_cliend_id || !_this.unique.validate(unhashed_cliend_id)) {
                    // An invalid id exists in local storage
                    var userEdgeObj = userEdge.toObject();
                    userEdgeObj['o'] = from_client_id;
                    _this._removeFromBounces(userEdgeObj);
                    continue;
                };

                if (unhashed_cliend_id == _this.unique.id) {
                    _this._removeFromBounces(userEdge.toObject());
                    continue;
                };

                if(_this.poundEvents.processEvent(userEdge.toMessage())){
                    _this._removeFromBounces(userEdge.toObject());
                }
            }
        }
    };

    this._getClientId = function(potentialClientId){
        // Ensures backwards compatability for entries with bad data.
        return typeof potentialClientId === "string" ? potentialClientId : potentialClientId['utm_term'];
    }

    this.setState = function(){
        _this.processCascadeSegment(); // Sets identity and stores current bpage to cookie
        if (typeof BF_STATIC.pound_enabled != 'undefined' && BF_STATIC.pound_enabled && !pound.lib.optedOut()){
            window.location.hash = '#' + _this.unique.hashed();
            if (typeof window.history != "undefined"){
                if (window.location.pathname.match(/\/p\//)) {
                    window.history.replaceState({}, null, pound.urls.getHistoryState());
                } else {
                    window.history.replaceState({}, null, pound.urls._addQueryString(window.location.href));
                }
            }
        }

        if (typeof document.referrer != 'undefined' && document.referrer.indexOf('buzzfeed.com') > -1){
            if (_this.previous_buzzid && _this.current_buzzid && _this.previous_buzzid != _this.current_buzzid){
                _this.recordPostEdge(); // Merges PostEdge into event.
            }
        }
        _this._processBounces();

    };

    this.toJson = function(){
        return JSON.stringify({
            "sharer": _this.sharer.hashed(),
            "unique": _this.unique.hashed(),
            "bf": _this.bf,
            "current_buzzid": _this.current_buzzid,
            "previous_buzzid": _this.previous_buzzid,
            "errors": _this.errors
        });
    };

    /**
     * Parses the URL hash into tracking ids.
     *
     * @private
     */
    this._parseHash = function(){
        var hash = window.location.hash.slice(1, window.location.hash.length);
        if (hash){
            var unhashed = (new pound.identity.Unique()).unhashed(hash);
            if (unhashed && !isNaN(unhashed)){
                var sharer = new pound.identity.Unique(unhashed);
                if(sharer.validate()){
                    if (sharer.id != _this.unique.id){
                        _this.sharer = sharer;
                    }
                    else {
                        // User refreshed their own link, any other sharer
                        // should be ignored.
                        _this.sharer = null;
                    }
                }
            }
        }
    };

    /**
     * Parses utm_term GA parameter into tracking ids.
     *
     * @private
     */
    this._parseQueryString = function(){
        var sharer = null;

        if (location.search.length >= 1){
            params = pound.lib.parseQueryString(location.search.substr(1));
            sharer = params['utm_term'] || params['fb_ref'];
        }

        if (typeof sharer != 'undefined' && sharer != null){
            sharer_id = (new pound.identity.Unique()).unhashed(sharer);
            _this.sharer = new pound.identity.Unique(sharer_id);
        }
    };

    this._parseLocalStorage = function(){
        var sharer = null;
        if(typeof store !== 'undefined' && store.enabled){
            sharer_id = store.get('pound_position') || undefined;
            if (sharer_id && typeof sharer_id != 'undefined'){
                var id = (new pound.identity.Unique()).unhashed(sharer_id);
                sharer = new pound.identity.Unique(id);
            }
            store.set('pound_position', undefined);
        }
        if (typeof sharer != 'undefined' && sharer != null){
            this.sharer = sharer;
        }
    };


    this._parsePath = function(){
        var path = window.location.pathname;
        var sharer = undefined;
        var segments = path.split('/');
        var segment_map = {};
        for(var i=0, len=segments.length; i<len-1; i++){
            segment_map[segments[i]] = segments[i+1];
        }
        var sharer_id = segment_map["p"] || undefined;
        if (sharer_id && typeof sharer_id != 'undefined'){
            var id = (new pound.identity.Unique()).unhashed(sharer_id);
            sharer = new pound.identity.Unique(id);
        }
        if (typeof sharer != 'undefined' && sharer != null){
            this.sharer = sharer;
        }
    };

    /**
     * Parses the cascade segment from the url hash if it is set. Or the query
     * string parameters. Sets state for making decisions to save or not.
     *
     * @private
     */
    this._parseCascadeSegment = function(){
        // These are in order of precedence. Each overrides the previous.
        _this._parseLocalStorage();
        _this._parseQueryString();
        _this._parseHash();
        _this._parsePath();

        if(_this.sharer && !_this.sharer.validate()){
            _this.sharer.munge();
            if(!_this.sharer.validate()){
                _this.errors.push(":4:" + _this.sharer.toString());
                _this.sharer = null;
            }
        }

        if (_this.sharer && _this.sharer !== undefined && _this.sharer.id == _this.unique.id){
            _this.sharer = null;
        }
    };

    /**
     * Processes the client's bf_visit cookie if it exists. If it's there and
     * valid all ids present will be set and it will return true. Otherwise it
     * will simply return false.
     *
     * @returns object with field 'success' indicating as a boolean whether an id
     * was pulled out of the cookie.  If there was an old verion of the unique value
     * that requires updating, it will be returned as well as 'old_unique'.
     */
    this._loadStateFromCookie = function(){
        var id = pound.lib.parseQueryString(unescape(pound.lib.getCookie("bf_visit")));
        var b, u;

        if (id['c'] !== undefined || id['c'] != BF_STATIC.campaignid){
            _this.previous_buzzid = id['c'];
        }

        if ((id['b'] === undefined && id['u'] === undefined) || id['v'] != pound.VERSION ){
            pound.lib.expireCookie('bf_visit');
            return {    'success' : false,
                        'old_unique'  : id['u']
                    }; // Missing id or old version.
        }

        var u = id['u'];
        if (typeof u != 'undefined'){
            u = (new pound.identity.Unique()).unhashed(u);
            _this.unique = new pound.identity.Unique(u);
            if(!_this.unique.validate()){
                pound.lib.expireCookie('bf_visit');
                return {'success': false};
            }
        }

        _this.bf     = id['b'] ;

        return { 'success' : true };
    };

    this.storeCurrentBPage = function(){
        var _bf_visit = unescape(pound.lib.getCookie('bf_visit'));
        var qs = pound.lib.parseQueryString(_bf_visit);

        qs['c'] = _this.current_buzzid;

        qs = pound.lib.createQueryString(qs);

        var exdate = new Date();
        exdate.setDate(exdate.getDate() + 10000); // Set expiry to a long time

        pound.lib.setCookie("bf_visit", qs.slice(1,qs.length), exdate.toUTCString(), '/');
    };

    /**
     * Exports the current identity to the bf_visit cookie.
     *
     * @returns {String} A string representation of the bf_visit cookie.
     */
    this._loadStateToCookie = function(){
        var qs = pound.lib.createQueryString({
            'b': _this.bf,
            'u': _this.unique.hashed(),
            'v': pound.VERSION
        });

        var exdate = new Date();
        exdate.setDate(exdate.getDate() + 10000); // Set expiry to a long time

        pound.lib.setCookie("bf_visit", qs.slice(1,qs.length), exdate.toUTCString(), '/');
    };

    /**
     * Sets the three ids. If they are already set in the Cookie or via some
     * other storage mechanism they're set from there. Otherwise new ones are
     * generated.
     *
     */
    this.setIdentity = function(){
        var retries = 0;
        var loadedStateFromCookie = _this._loadStateFromCookie();
        if (!loadedStateFromCookie['success']){ // If we're unable to load the state from the cookie...
            _this.bf     = pound.identity.Buzzfeed();
            _this.unique = new pound.identity.Unique();
        }

        while(!_this.unique.validate() && retries++ < 10){
            _this.unique = new pound.identity.Unique();
        }

        _this.current_buzzid = BF_STATIC['campaignid'];

        if(!_this.unique.validate()){
            _this.errors.push(":2:" + _this.unique.toString());
        } else {
            _this._loadStateToCookie();
        }
    };

    /**
     * Constructs the tracking pixel
     */
    this.recordUserEdge = function(){
        var userEdge = new pound.UserEdge(_this.sharer, _this.unique, _this.current_buzzid)
        if(_this.poundEvents.processEvent(userEdge.toMessage())){
            _this._removeFromBounces(userEdge.toObject());
        }
    };

    /**
     * This method saves a tracking pixel for a share event. When a user clicks any share button;
     * this method is invoked. It checks the value previously pulled by this class from the cookie containing the
     * buzzid for the referring page. It also loads the buzzid for the current page. It then loads a tracking
     * pixel with this information as well as the current user's unique id.
     *
     */
    this.recordShare = function(element){
        var share = new pound.Share(_this.unique, _this.current_buzzid);
        if(window.bfaBinder){
            var elem = element || this;
            var platform = window.BZFD ? 'BZFD' :
              (BF_STATIC.tt_page == 'MobileBuzz' ? 'Mobile' : 'Desktop');
            if(elem.getAttribute){
                var result = window.bfaBinder.parser.parse(elem);
                if(result.action || result.description || result.location){
                    share.shareChannel =  platform + ':' + result.description + ":" + result.action + ":" + result.location;
                    if(result.data && result.data.idx){
                        share.shareChannel += ":" + result.data.idx;
                    }
                }
            }
        }
        _this.poundEvents.processEvent(share.toMessage());
    };

    /**
     * Records a b-page to b-page click-through
     * */
    this.recordPostEdge = function(){
        var postEdge = new pound.PostEdge(_this.previous_buzzid, _this.current_buzzid, _this.unique);
        _this.poundEvents.processEvent(postEdge.toMessage());
    };

    this.currentUserEdgeNotInLocalStorage = function() {
        if (_this.sharer === null){
            return true;
        }
        var sharer = _this.sharer.id;
        var unique = _this.unique.id;
        var buzzid = _this.current_buzzid;
        var events = store.get('unprocessed_propagation_events') || [];
        for(var i=0, len=events.length; i<len; i++){
            var e = events[i];
            var ls_sharer = _this.unique.unhashed(_this._getClientId(e[0]));
            var ls_buzzid = e[1];
            if(_this.sharer == ls_sharer && _this.current_buzzid == ls_buzzid){
                return false;
            }
        }
        return true;
    };

    /**
     * Process the cascade segment in the url hash. Decide whether or not to
     * save the visit. Execute the routine to save (or not).
     */
    this.processCascadeSegment = function(){
        _this._parseCascadeSegment();
        _this.storeCurrentBPage(); // Updates cookie with current buzzid

        if (_this.sharer !== null && _this.currentUserEdgeNotInLocalStorage()){ // If there is a cascade segment we want to save. Always.
            _this.recordUserEdge(); // Merges UserEdge into event.
        }
    };


    this.toString = function(){
        return '[object pound.Visit]';
    };

    _this.init();
};
window.bf_visit = new pound.Visit();

if (typeof module !== 'undefined'){
	module.exports = pound;	// This is only a test.
} else {
/**
 * Initalizes the application. 
 * 
 * @returns {Boolean}
 */
// After 20 retries we quit trying.
var pound_retries = 0;
function init_pound(){
	if (typeof bf_login == 'undefined' || typeof BF_User == 'undefined'){ 
		if (pound_retries < 20){
			setTimeout(init_pound, 1000); // Requirements haven't loaded yet. This shouldn't ever happen.
		}
		pound_retries += 1;
		return false;
	} else {
		if (pound.VERIFY_IDENTITIES){
			if ((pound.LOGGED_IN_ONLY && (new BF_User()).isLoggedIn()) || !pound.LOGGED_IN_ONLY) {
				window.bf_visit.processCascadeSegment();
			} else {
				bf_login.loggedInCallbacks.push(window.bf_visit.processCascadeSegment);
			}
		}
    window.bf_widgets.process();
	}
	return false;
};

/**
 * Binds the initialization method to the window onload event without frameworks
 */
function registerWithBuzzLoader(){
	if(typeof BuzzLoader != 'undefined'){
		BuzzLoader.register(init_pound,5);
	} else {
        if (typeof bfjs == 'undefined' || !bfjs.isMobile()) {
		    setTimeout(registerWithBuzzLoader, 500);
        } else {
            init_pound();
        }
	}
}

registerWithBuzzLoader();
}

if (window.location.hash || window.location.search.indexOf('utm_term') > -1) {
    var key = 'unprocessed_propagation_events';
    var prop_events = store.get(key);
    var qshash = "";
    var hashval = "";
    if (typeof window.location.search == 'string') {
        qs_obj = pound.lib.parseQueryString(window.location.search.slice(1))['utm_term'];
    }
    if (typeof window.location.hash == 'string') {
        hashval = window.location.hash.slice(1);
    }
    if (!prop_events) {
        prop_events = [];
    }
    if (hashval) {
        prop_events.push([hashval, BF_STATIC.campaignid, (new Date()).getTime()]); 
    } else if (qs_obj) {
        prop_events.push([qs_obj, BF_STATIC.campaignid, (new Date()).getTime()]);
    }
    store.set(key, prop_events); 
} 

Box.Application.addModule('about-profile', function(context) {
  'use strict';

  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _templateEngine = context.getService('template-engine');
  var _promise = context.getService('promise');
  var _profile;
  var _modalDialog = context.getService('modal-dialog');

  function createModal() {
    _promise.when(_templateEngine.loadRawTemplate({
      id: 'modals/_modal-about-profile',
    }))
    .done(renderModal);
  }

  function renderModal(template) {
    var mark_up = _templateEngine.render(template, _profile);

    _modalDialog.show({
      data: {
        showHeader: 0,
        content: mark_up,
        classes: 'xs-mt4 sm-mt6 xs-col-12 sm-col-9 md-col-7 lg-col-5',
      },
    });
  }

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  var _module = {};

  _module.onclick = function() { 
    createModal();
  }

  _module.init = function() {
    _profile = context.getConfig();
  };

  return _module;
});

Box.Application.addModule('contact-form-link', function(context) {
  'use strict';

  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _templateEngine = context.getService('template-engine');
  var _utilService = context.getService('util');
  var _promise = context.getService('promise');
  var _modalDialog = context.getService('modal-dialog');
  var _params = {};
  var _templatesPath = 'about/contact-forms/_form-';

  function createModal() {
    var templates = _templatesPath + (_params.template || 'base');
    _promise.when(_templateEngine.loadRawTemplate({
      id: templates,
    }))
    .done(renderModal);
  }

  function renderModal(template) {
    var mark_up = _templateEngine.render(template, _params);

    _modalDialog.show({
      data: {
        showHeader: 0,
        content: mark_up,
        classes: 'xs-p3 sm-p4 xs-mt4 sm-mt6 xs-col-12 sm-col-9 md-col-7 lg-col-5',
      },
      callback: function(_modalEl) {
        context.application.startAll(_modalEl);
      }
    });
  }

  function _hideModal() {
    _modalDialog.hide();
  }

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  var _module = {};
  var _eventHandlers = {};
  _eventHandlers['form-cancel'] = _hideModal;
  _module.messages = _utilService.getKeys(_eventHandlers);

    /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @param {*} data - event data.
   * @return {void}
   */
  _module.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  _module.onclick = function() { 
    createModal();
  }

  _module.init = function() {
    _params = context.getConfig();
  };

  return _module;
});

Box.Application.addModule('contact-form', function(context) {
  'use strict';

  var _module = {};

  _module.behaviors = [
    'form-handler',
  ];

  _module.init = function() {};

  return _module;
});

/*global Box*/

/**
 * @param {Object} context - T3 module's context
 * @returns {void}
 */
Box.Application.addModule('region-select', function(context) {
    'use strict';

    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};
    var _element;
    var _domService;
    var _bfStatic;

    /**
     * Updates option `region-select` elements withs `select` property
     * @returns {void}
     * @private
     */
    function _restoreRegionSelect() {
        var compositeCode = !_bfStatic.composite_code ? 'en-us' : _bfStatic.composite_code;
        var countryOptionSelector = '.js-change-region-select [data-country="' + compositeCode + '"]';
        var countryOption = _domService.find(_element, countryOptionSelector);

        if (countryOption) {
            _domService.setAttr(countryOption, {'selected': 'selected', });
        }
    }

    /**
     * Changes document location with country code
     * @param {String} countryCode - country code
     * @returns {void}
     * @private
     */
    function _changeRegionSelect(countryCode) {
        if (!countryCode) {
            return;
        }
        window.location = _getUrlToRedirect(countryCode);
    }

    function _getUrlToRedirect(countryCode) {
        var url = '/';
        var config = context.getConfig();
        if (config && config['stayOnCurrentPage']) {
            url = window.location.pathname;
        } else {
            if(_bfStatic.bf_env === 'dev') {
                url += _bfStatic.home_url;
            }
        }
        url += '?country=' + countryCode;
        return url;
    }

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    /**
     * Modul's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {
        _element = context.getElement();
        _domService = context.getService('dom');
        _bfStatic = context.getGlobal('BF_STATIC');
        _restoreRegionSelect();
    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {
        _element = null;
        _domService = null;
        _bfStatic = null;
    };


    /**
     * Handles onclick event.
     * @param {Event} ev - normalized DOM event.
     * @param {HTMLElement} elem - clicked element.
     * @param {String} elemType - data-type attribute of the element.
     * @returns {void}
     */
    _module.onchange = function(ev, elem, elemType) {
        if (elemType === 'change-region-select') {
            _changeRegionSelect(_domService.getValue(elem));
        }
    };

    return _module;
});

/* From: BZFD */
/*global Box*/
Box.Application.addService('ajax', function(application) {
  'use strict';

  var _$ = require('jquery');
  var _cache = application.getService('storage');
  var _promise = application.getService('promise');
  var _cacheExpiration = 604800000; // week

  /**
   * Service for AJAX management.
   * @exports service:ajax
   */
  var service = {};

  /**
   * Loads JS file using a GET request, then executes it.
   * @param {String} url - the script source.
   * @param {Function} callback - executed on script load.
   * @return {Promise} - promise object. Resolved on script load.
   */
  service.getScript = function(url, callback) {
    return this.request({
      url: url,
      dataType: 'script',
      cache: true,
      success: callback,
    }).promise();
  };


  /**
   * Loads JSON file using a GET request, then executes it.
   * @param {String} url - the json source.
   * @param {Function} callback - executed on json load.
   * @return {Promise} - promise object. Resolved on json load.
   */
  service.getJSON = function(url, callback) {
    return this.request({
      url: url,
      dataType: 'json',
      cache: true,
      success: callback,
    }).promise();
  };


  /**
   * Loads JSON file using a GET request, then executes it.
   * @param {String} url - the json source.
   * @param {Function} callback - executed on json load.
   * @return {Promise} - promise object. Resolved on json load.
   */
  service.getJSONP = function(url, callback) {
    return this.request({
      url: url,
      dataType: 'jsonp',
      cache: true,
      jsonpCallback: '_callback',
      success: callback,
      crossDomain: true,
    }).promise();
  };

  /**
   * Retrieves script text from cache (localStorage).
   * If not presented, loads script from the url and saves it into cache.
   * @param {String} url - resource url. Used as a cache key.
   * @return {Promise} - promise object. Resolved either immediately (cache hit) or on script load.
   */
  service.getCachedScript = function(url) {
    var cachedScript = _cache.get(url);
    var promise;

    if (cachedScript) {
      promise = _promise.create()
        .resolve(cachedScript)
        .promise();
    }
    else {
      promise = this.request({url: url, })
        .then(function(response) {
          _cache.set({
            key: url,
            value: response,
            expires: _cacheExpiration,
          });
          return response;
        })
        .promise();
    }

    return promise;
  };

  /**
   * Perform an Ajax request.
   * @param {Object} options - A set of key/value pairs that configure the Ajax request.
   * @return {Promise} - promise object. Resolved on request completion.
   */
  service.request = function(options) {
    var d = _promise.create();
    var attempts = 0;

    //inner function for retries logic
    function makeRequest() {
      _$.ajax(options)
        .fail(function() {
          //check attempts amount comparing to desired retries
          if (attempts++ < options.retries) {
            makeRequest();
          }
          //reject if retries amount exceeded
          else {
            d.reject.apply(d, arguments);
          }
        })
        .done(d.resolve);
    }

    if (options.retries) {
      makeRequest();
    }
    else {
      return _$.ajax(options).promise();
    }

    return d.promise();
  };

  return service;
});

/* From: BZFD */
/*global Box*/
Box.Application.addService('util', function(application) {
  'use strict';

  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _o = application.getGlobal('Object');
  var _$ = require('jquery');
  var _w = application.getGlobal('window');
  var _globalConfig = application.getGlobal('BZFD');
  var _testMode = _globalConfig.Context.site && _globalConfig.Context.site.test_mode;
  var _Math = application.getGlobal('Math');
  var _Array = application.getGlobal('Array');

  /**
   * Service with some general widely used functions
   * @exports service:util
   */
  var util = {};

  /**
   * Throttle execution of a function.
   * @param {Function} fn - a function to be executed after delay milliseconds.
   * @param {Number} delay - a zero-or-greater delay in milliseconds.
   * @return {Function} - a new, throttled, function.
   */
  util.throttle = function(fn, delay) {
    var tId;

    if (!delay) {
      return fn;
    }

    return function() {
      if (tId) {
        clearTimeout(tId);
      }
      tId = setTimeout(fn, delay);
    };
  };

  /**
   * Gets a list of object's enumerable property names.
   * @param {Object} obj - target object.
   * @return {Array} - list of object's keys.
   */
  util.getKeys = function(obj) {
    var res;
    if (_o.keys) {
      return _o.keys(obj);
    }
    else {
      res = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          res.push(key);
        }
      }
      return res;
    }
  };

  /**
   * Adds module's element id attribute value to the event name.
   * @param {String} origName - original event name.
   * @param {HTMLElement} moduleEl - module's DOM element.
   * @return {String} - name with id value.
   */
  util.getUniqueEventName = function(origName, moduleEl) {
    return origName + '-' + moduleEl.id;
  };

  util.capitalize = function(str) {
    if (typeof str !== "string") {
      return str;
    }
    else {
      return str.replace(/\w+/g, function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
      });
    }
  };

  util.removeHash = function(url) {
    url = url + ""; // Convert object to string, if necessary
    if (url.indexOf('#') > -1) {
      return url.substr(0, url.indexOf('#'));
    }
    return url;
  };

  util.removeQueryString = function(url) {
    url = url + ""; // Convert object to string, if necessary
    if (url.indexOf('?') > -1 ) {
        if (url.indexOf('#') === -1) {
          return url.substr(0, url.indexOf('?'));
        }
        return url.substr(0, url.indexOf('?')) + url.substr('#', url.length);
    }
    return url;
  };

  util.getQueryString = function(url) {
    url = util.removeHash(url);
    var querystring = '';
    if (url.indexOf('?') > -1) {
      querystring = url.substr(url.indexOf('?'), url.length); // Contains '?'
    }
    return querystring;
  };

  util.getHash = function(url) {
    url = url + ""; // Convert object to string, if necessary
    if (url.indexOf('#') > -1) {
      return url.substr(url.indexOf('#'), url.length);
    }
    return '#';
  };

  util.queryStringToObject = function(qs) { // Without '?'
    if (qs === '' || qs === undefined || qs === null) {
        return {};
    }
    var params = qs.split('&');
    var pair;
    var obj = {};

    util.each(params, function(i, val) {
      pair = val.split('=');
      if (pair[1] === '') {
        pair[1] = null;
      }
      obj[pair[0]] = pair[1];
    });
    return obj;
  };

  util.objectToQueryString = function(qs) {
    var str = [];
    util.each(qs, function(key, val) {
      str.push(key + "=" + val);
    });
    return "?" + str.join("&");
  };

  util.getBaseUrl = function(url) {
    url = util.removeHash(url);
    url = util.removeQueryString(url);
    return url;
  };

  util.addParams = function(url, keyvals) {
    var qs = util.getQueryString(url); // Contains '?'
    var hash = util.getHash(url); // Contains '#'
    var key;
    var val;

    url = util.removeHash(url);
    url = util.removeQueryString(url);

    qs = util.queryStringToObject(qs.substr(1, qs.length)); // no '?'

    util.each(keyvals, function(i, keyval) {
      key = keyval[0];
      val = keyval[1];
      qs[key] = val;
    });

    return url + util.objectToQueryString(qs) + hash;
  };

  util.prepareUrl = function(url, data) {
    // Append parameter(s) to url
    var keyvals = [];

    util.each(data, function(key, val) {
      keyvals.push([
        key,
        encodeURIComponent(val),
      ]);
    });

    return util.addParams(url, keyvals);
  };

  util.preventDefault = function(ev) {
    if (typeof ev !== "undefined") {
      ev.preventDefault();
    }
  };

  util.redirect = function(url) {
    if (typeof url === "string" && url) {
      var key = _testMode ? 'hash' : 'href';
      _w.location[key] = url;
    }
  };

  util.openPopup = function(url, options) {
    if (typeof url === "string" && url) {
      var name = '_blank';
      var wparams = '';
      if (options && options.height && options.width) {
        var sTop = (_w.screen.height / 2) - (options.height / 2);
        var sLeft = (_w.screen.width / 2) - (options.width / 2);
        wparams = 'scrollbars=yes, toolbar=0, status=0, width=' + options.width + ', height=' + options.height + ', top=' + sTop + ', left=' + sLeft;
        name = options.name ? options.name : name ;
      }
      _w.open(url, name, wparams);
    }
  };

  util.scrollTo = function(xPos, yPos) {
    if (typeof xPos === "undefined" || typeof yPos === "undefined") {
      return;
    }
    _w.scrollTo(xPos, yPos);
  };


  /**
   * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
   * jQuery.each( arrayOrObject, callback )
   * https://api.jquery.com/jQuery.each/
   */
  util.each = _$.each;

  /**
   * Merge the contents of two or more objects together into the first object.
   * jQuery.extend( target [, object1 ] [, objectN ] )
   * https://api.jquery.com/jQuery.extend/
   */
  util.extend = _$.extend;

  util.grep = _$.grep;

  util.map = _$.map;

  /**
   *
   * @return {Object} - map of query parameters keys and values
   */
  util.getQueryParams = function() {
    var search = application.getGlobal('location').search;
    var decode = application.getGlobal('decodeURIComponent');
    var result = {};
    if (search) {
      search.split(/\&|\?/).forEach(function(param) {
        var p = param.split('=');
        result[decode(p[0]).replace('?', '')] = decode(p[1]);
      });
    }

    return result;
  };

  /**
   * Split string into chunks from right to left
   * @param {String} str - string to be chunked
   * @param {Int} len - length of chunks
   * @returns {Array} - reversed array of chunks
  */
  util.chunkStrReverse = function(str, len){
    var chunks = [];

    str = str.toString();
    for (var i = str.length; i > 0; i -= len) {
      var from = i - len;
      var to = len;

      if (i < len) {
        from = 0;
        to = i;
      }

      chunks.push(str.substr(from, to));
    }

    return chunks.reverse();
  };

  /**
   * Change number into shortened format.
   * Example: 125 -> 125; 3456 -> 3,456; 10355 -> 10,4K; 1100123 -> 1.1M;
   * Adapted from
   * https://stackoverflow.com/questions/3177855/how-to-format-numbers-similar-to-stack-overflow-reputation-format
   * @param {Number} val - number to be formatted
   * @returns {String} shortened number
   */
  util.largeNumberNotation = function(val) {
    if (val < 1000) {
      return val;
    }
    else if (val < 10000) {
      return val.toString().charAt(0) + ',' + val.toString().substring(1);
    }
    else if (val >= 1000000) {
      return (val / 1000000).toFixed(val % 1000000 !== 0) + 'M';
    }
    return (val / 1000).toFixed(val % 1000 !== 0) + 'K';
  };

  /**
   * Send data to BF Analytics 
   * Example: 
   * @param {String} bfaRoute - the route for bfa ex. 'track/click/share'
   * @param {Object} bfaData - formatted object ex. {t:'click:share-button', d:'Facebook'}
   * @returns void
   */

  util.bfaTrack = function(bfaRoute, bfaData) {
    if(!window.bfa || !( window.bfa instanceof Function ) || !window.bfaBinder) {
      return;
    }

    bfa(bfaRoute, bfaData);
  }

  /**
   * Checks for screen orientation
   * @return {String} `portrait` or '`landscape`
   */
  util.getScreenOrientation = function() {
    if (screen.orientation && screen.orientation.type) {
      return screen.orientation.type.replace('-primary', '');
    }
    else if (_w.orientation) {
      if (Math.abs(window.orientation) === 90) {
        return 'landscape';
      }
      else {
        return 'portrait';
      }
    }
    else if (_w.matchMedia) {
      if (_w.matchMedia("(orientation: portrait)").matches) {
        return 'portrait';
      }
      else if (_w.matchMedia("(orientation: landscape)").matches) {
        return 'landscape';
      }
    }
    // return landscape by default if we cannot determine?
    return 'landcspae';
  }

  /**
   * Checks browser user agent to detect iphone|ipod device
   * @return {Boolean} `true` if iphone|ipod device detected, `false` otherwise
   */
  util.isIOSMobile = (function() {
    var agent = navigator.userAgent.toLowerCase();

    if (agent.match(/iphone|ipod/)) {
      return true;
    }

    return false;
  })();

  /**
   * Checks browser user agent to detect ipad device
   * @return {Boolean} `true` if ipad device detected, `false` otherwise
   */
  util.isIOSIPad = (function() {
    var agent = navigator.userAgent.toLowerCase();

    if (agent.match(/ipad/)) {
      return true;
    }

    return false;
  })();

  /**
   * Checks browser user agent to detect if safari user
   * @return {Boolean}
   */
  util.isSafari = function() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  /**
   * Checks browser user agent to detect if safari user
   * @return {Boolean}
   */
  util.isOpera = function() {
    return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  }


  /**
   * Returns the smallest of numbers.
   * @return {Number} - smallest number.
   */
  util.min = function(/*[value1[, value2[, ...]]]*/) {
    return _Math.min.apply(_Math, _Array.prototype.filter.call(arguments, function(n) {
      return _$.isNumeric(n);
    }));
  };

  return util;
});

/* From: BZFD */
/* global Box, DOMTokenList */
Box.Application.addService('dom', function(application) {
  'use strict';
  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _$ = require('jquery');
  var _d = application.getGlobal('document');
  var _w = application.getGlobal('window');

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  /**
   * DOM manipulation service.
   * @exports service:dom
   */
  var service = {};

  /**
   * Converts string to DOM nodes.
   * @param {String} string - input HTML string.
   * @returns {NodeList} - list of DOM nodes.
   */
  service.stringToHTML = function(string) {
    var container = _d.createElement('div');
    container.innerHTML = string;
    return container.childNodes;
  };

  /**
   * Insert content, specified by the parameter, to the end of parent element.
   * @param {HTMLElement} parent - element to add content to
   * @param {String|NodeList|HTMLElement[]} content - content to be added
   * @returns {Object} - service object
   */
  service.append = function(parent, content) {
    _$(parent).append(content);
    return this;
  };

  /**
   * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
   * @param {HTMLElement} parent - element to add content to
   * @param {String|NodeList|HTMLElement[]} content - content to be added
   * @returns {Object} - service object
   */
  service.prepend = function(parent, content) {
    _$(parent).prepend(content);
    return this;
  };

  /**
   * Insert content, specified by the parameter, after the target element.
   * @param {HTMLElement} element - element to add content after
   * @param {String|NodeList|HTMLElement[]} content - content to be added
   * @param {String} [filter] - if set - result of `.find(el, filter)` will be used as `el`
   * @returns {Object} - service object
   */
  service.after = function(element, content, filter) {
    var el = filter ? service.find(element, filter) : element;
    _$(el).after(content);
    return this;
  };

  /**
   * Returns child nodes of the element, that match selector.
   * @param {HTMLElement|String} element - parent element.
   * @param {String} selector - filter for child elements.
   * @returns {HTMLElement[]} - matched elements.
   */
  service.find = function(element, selector) {
    if (!element) return [];
    if (element.querySelectorAll) {
      return Array.prototype.slice.call(element.querySelectorAll(selector));
    }
    return _$(element).find(selector).get();
  };

  service.not = function(selector, excludeSelector) {
    return _$(selector).not(excludeSelector);
  };

  /**
   * Gets the first element that matches the selector.
   * Tests the element itself and traverses up through its ancestors.
   * @param {HTMLElement} element - starting element.
   * @param {String} selector - selector to match elements against.
   * @returns {HTMLElement[]} - matched elements.
   */
  service.closest = function(element, selector) {
    return _$(element).closest(selector).get();
  };

  /**
   * Adds class to specified element(s).
   * @param {HTMLElement|HTMLElement[]} elements - target node(s).
   * @param {String} className - class name to add. Multiple classes are separated by space.
   * @returns {void}
   */
  service.addClass = function(elements, className) {
    if (!Array.isArray(elements)) {
      elements = [elements, ];
    }

    var i;
    var len;

    if (_d.documentElement.classList) {
      for (i = 0, len = elements.length; i < len; i++) {
        if (elements[i] && elements[i].classList) {
          elements[i].classList.add(className);
        }
      }
    }
    else {
      _$(elements).addClass(className);
    }
  };

  /**
   * Removes class from specified element(s).
   * @param {HTMLElement|HTMLElement[]} elements - target node(s).
   * @param {String} className - class name to remove. Multiple classes are separated by space.
   * @returns {void}
   */
  service.removeClass = function(elements, className) {
    if (!Array.isArray(elements)) {
      elements = [elements, ];
    }

    var i;
    var len;

    if (_d.documentElement.classList) {
      var classes = className.split(' ');
      for (i = 0, len = elements.length; i < len; i++) {
        DOMTokenList.prototype.remove.apply(elements[i].classList, classes);
      }
    }
    else {
      _$(elements).removeClass(className);
    }
  };

  /**
   * Determine whether any of elements are assigned the given class.
   * @param {HTMLElement|HTMLElement[]} elements - target node(s).
   * @param {String} className - class name to check.
   * @returns {Boolean} - whether any of elements are assigned the given class.
   */
  service.hasClass = function(elements, className) {
    return _$(elements).hasClass(className);
  };

  /**
   * Add or remove one or more classes from each element in the set of matched elements.
   * @param {HTMLElement|HTMLElement[]} elements - target element(s).
   * @param {String} className - one or more class names (separated by spaces).
   * @param {Boolean} state - determines whether the class should be added or removed
   * @return {void}
   */
  service.toggleClass = function(elements, className, state) {
    _$(elements).toggleClass(className, state);
  };

  /**
   * Serializes form into object literal.
   * Key - field name, value - field value.
   * @param {HTMLFormElement} formEl - form element to be serialized.
   * @returns {Object} - serialized form object.
   */
  service.serialize = function(formEl) {
    var result = {};
    var raw = _$(formEl).serializeArray();

    // jQuery does not have built-in serialization into object.
    raw.forEach(function(item) {
      var key = item.name;
      var value = item.value;
      if (!result[key]) {
        result[key] = value;
      }
      else {
        result[key] = _$.makeArray(result[key]);
        result[key].push(value);
      }
    });

    return result;
  };

  service.getViewPosition = function(el, lookahead) {
    var rect = el.getBoundingClientRect();
    var windowInnerHeight = window.innerHeight || _d.documentElement.clientHeight;
    lookahead = lookahead || 0;
    var position = {
      top: 0 - lookahead,
      bottom: windowInnerHeight + lookahead,
    };

    return {
      isHidden: function() {
        return !el.offsetParent;
      },

      isWithinViewport: function() {
        return rect.top >= 0 && rect.bottom <= windowInnerHeight;
      },

      isWithinLookahead: function() {
        return rect.top >= position.top && rect.bottom <= position.bottom;
      },

      isPartiallyInViewport: function() {
        return rect.top >= 0 && rect.top <= windowInnerHeight ||
            rect.bottom > 0 && rect.bottom < windowInnerHeight;
      },

      isPartiallyInLookahead: function() {
        return rect.top - lookahead >= 0 && rect.top - lookahead <= windowInnerHeight ||
            rect.bottom + lookahead > 0 && rect.bottom + lookahead < windowInnerHeight;
      },
    };
  };

  /**
   * Adds event listener.
   * @param {EventTarget} target - target for event listening.
   * @param {String} ev - event name. Multiple event names are separated by space.
   * @param {Object} data - object containing data that the callback can use.
   * @param {Function} handler - event handler.
   * @return {void}
   */
  service.on = function(target, ev, data, handler) {
    if (typeof data === 'function' && typeof handler === 'undefined') {
      handler = data;
      data = null;
    }

    if (target.addEventListener) {
      ev.split(' ').forEach(function(e) {
        target.addEventListener(e, handler);
      });
    }
    else {
      _$(target).on(ev, data, handler);
    }
  };

  /**
   * Adds event listener.
   * @param {EventTarget} target - target for event listening.
   * @param {String} ev - event name. Multiple event names are separated by space.
   * @param {Object} data - object containing data that the callback can use.
   * @param {Function} handler - event handler.
   * @return {void}
   */
  service.one = function(target, ev, data, handler) {
    if (typeof data === 'function') {
      handler = data;
      data = null;
    }

    _$(target).one(ev, data, handler);
  };

  /**
   * Removes event listener.
   * @param {EventTarget} target - target for event listening.
   * @param {String} ev - event name. Multiple event names are separated by space.
   * @param {Function} handler - event handler.
   * @return {void}
   */
  service.off = function(target, ev, handler) {
    if (target.removeEventListener) {
      ev.split(' ').forEach(function(e) {
        target.removeEventListener(e, handler);
      });
    }
    else {
      _$(target).off(ev, handler);
    }
  };


  service.remove = function(element) {
    _$(element).remove();
  };

  /**
   * Hide `el` element.
   * @param {HTMLElement} el - element to hide
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {Object} service object for chaining
   */
  service.hide = function(el, selector) {
    var element = selector ? service.find(el, selector) : el;
    _$(element).hide();
    return this;
  };

  /**
   * Display `el` element.
   * @param {HTMLElement} el - element to show
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {Object} service object for chaining
   */
  service.show = function(el, selector) {
    var element = selector ? service.find(el, selector) : el;
    _$(element).show();
    return this;
  };

  /**
   * Reduce the set of matched elements to those that match the selector or pass the function's test.
   * @param {HTMLElements|NodeList|String} elements - set of elements or selector to be filtered.
   * @param {String|Function|HTMLElement[]} filter - A string containing a selector expression,
   *  to match the current set of elements against.
   *  A function used as a test for each element in the set. this is the current DOM element.
   *  (Type: Function( Integer index, Element element ) => Boolean)
   *  One or more DOM elements to match the current set of elements against.
   * @see https://api.jquery.com/filter/
   * @returns {Array} array of filetered elements
   */
  service.filter = function(elements, filter) {
    return _$(elements).filter(filter).toArray();
  };

  /**
   * Returns value of data in given element.
   * @param {HTMLElement|String} element - element.
   * @param {String} str - name of data parameter.
   * @returns {String} - value of data-attr.
   */
  service.getData = function(element, str) {
    if (typeof str === "string") {
      return _$(element).data(str);
    }
    else {
      return null;
    }
  };

  /**
   * Sets value for data in given element.
   * @param {HTMLElement|String} element - element.
   * @param {String} str - name of data parameter.
   * @param {String} val - value of data parameter.
   * @returns {Bool} - TRUE if success, FALSE on error
   */
  service.setData = function(element, str, val) {
    if (typeof str === "string") {
      _$(element).data(str, val);
      return true;
    }
    else {
      return false;
    }
  };

  /**
   * @description Gets value of specific style property
   * @param {HTMLElement} el - Element to get style property for
   * @param {String} styleName - Style property key
   * @returns {String} - Style property value
   */
  service.getStyle = function(el, styleName) {
    return _$(el).css(styleName);
  };

  /**
   * @description Sets styles on an element
   * @param {HTMLElement} el - Element to set style for
   * @param {Object} styles An object which maps CSS style names to values
   * @returns {Object} - service object
   */
  service.setStyle = function( el, styles ) {
    _$(el).css(styles);
    return this;
  };

  /**
   * Get the value of an attribute for `el` element
   * @param {HTMLElement} el - Element to get attribute from
   * @param {String} attributeName - The name of the attribute to get.
   * @returns {String} - attribute value
   */
  service.getAttr = function( el, attributeName) {
    return _$(el).attr(attributeName);
  };

  /**
   * Set one or more attributes for `el` element
   * @param {HTMLElement} el - Element to set attributes for
   * @param {Object} attributes - An object of attribute-value pairs to set.
   * @returns {Object} - service object
   */
  service.setAttr = function(el, attributes) {
    _$(el).attr(attributes);
    return this;
  };

  /**
   * Indicates whether a specified element has a specified attribute or not.
   * @param {HTMLElement} el - target element.
   * @param {String} attributeName - the name of the attribute to check.
   * @return {Boolean} - result.
   */
  service.hasAttr = function(el, attributeName) {
    return el.hasAttribute(attributeName);
  };

  /**
   * Remove attribute for `el` element
   * @param {HTMLElement} el - Element to get attribute from
   * @param {String} attributeName - The name of the attribute to remove.
   * @returns {void}
   */
  service.removeAttr = function(el, attributeName) {
    _$(el).removeAttr(attributeName);
  };

  /**
   * Get text of `el` element or its child(if `selector` is set)
   * @param {HTMLElement} el - element to set text to
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {String} text of element
   */
  service.getText = function(el, selector) {
    var element = selector ? service.find(el, selector) : el;
    return _$(element).text();
  };

  /**
   * Set text for `el` element or its child(if `selector` is set)
   * @param {HTMLElement} el - element to set text to
   * @param {String} text - text to be set
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {Object} service for chaining
   */
  service.setText = function(el, text, selector) {
    var element = selector ? service.find(el, selector) : el;
    _$(element).text(text);
    return this;
  };

  /**
   * Get HTML of `el` element or its child(if `selector` is set)
   * @param {HTMLElement} el - element to set text to
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {String} HTML of element
   */
  service.getHTML = function(el, selector) {
    var element = selector ? service.find(el, selector) : el;
    return _$(element).html();
  };

  /**
   * Set HTML for `el` element or its child(if `selector` is set)
   * @param {HTMLElement} el - element to set text to
   * @param {String} html - HTML to be set
   * @param {String} [selector] - if set - result of `.find(el, selector)` will be used as `el`
   * @returns {Object} service for chaining
   */
  service.setHTML = function(el, html, selector) {
    var element = selector ? service.find(el, selector) : el;
    _$(element).html(html);
    return this;
  };

  /**
   * Get parent elements filtered by slector
   * @param {HTMLElement} el - element to search parents for
   * @param {String} selector - selector to match parent elements against
   * @returns {HTMLElement[]} - matched elements.
   */
  service.parents = function(el, selector) {
    return _$(el).parents(selector).get();
  };

  /**
   * Get next elements filtered by slector
   * @param {HTMLElement} el - element to search parents for
   * @param {String} selector - selector to match parent elements against
   * @returns {HTMLElement[]} - matched elements.
   */
  service.next = function(el, selector) {
    return _$(el).next(selector).get();
  };

  /**
   * Returns module's config script
   * @param {HTMLElement} element - module's element
   * @param {Boolean} returnElement - whether to return string or HTMLElement
   * @returns {String|HTMLElement} module's config script
   */
  service.getModuleConfig = function(element, returnElement) {
    if (returnElement) {
      return this.find(element, 'script')[0];
    }
    return element.innerHTML.match(/<script .*script>/)[0];
  };

  /**
   * Creates HTML element.
   * @param {String} tag - tag name for the HTML element.
   * @param {Object} [attributes] - map of attribute names/values for the element.
   * @return {*|Element} - new HTML element.
   */
  service.createElement = function(tag, attributes) {
    var el = _d.createElement(tag);
    this.setAttr(el, attributes);
    return el;
  };

  /**
   * Scrolls specified HTML element into view.
   * @param {HTMLElement} element - target HTML element.
   * @param {Number} [delay] - time in ms before scroll occurs.
   */
  service.scrollIntoView = function(element, delay) {
    if (delay) {
      setTimeout(function() {
        service.scrollIntoView(element);
      }, delay);
    }
    else {
      if (element.scrollIntoView) {
        element.scrollIntoView();
      }
      else {
        _w.scrollTo(0, _$(element).offset().top);
      }
    }
  };

  /**
   * Returns the offsets of element from the top left corner of the document.
   * @param {HTMLElement} element - normalized dom element.
   * @returns {Object} - offset element {top, left}
   */
  service.offset = function(element) {
    return _$(element).offset();
  };

  /**
   * Set the value of an input field
   * @param {HTMLElement} element - normalized dom element.
   * @returns null
   */
  service.value = function(element, value) {
    _$(element).val(value);
  };

  /**
   * Returns the size of element.
   * @param {HTMLElement} element - normalized dom element.
   * @returns {Object} - size of element {width, height}
   */
  service.size = function(element) {
    return {
      width: _$(element).width(),
      height: _$(element).height()
    };
  };

  /**
   * Get the current vertical position of the scroll bar
   * for the first element in the set of matched elements
   * or set the vertical position of the scroll bar
   * for every matched element.
   * @param {HTMLElement} element - normalized dom element.
   * @returns {Float} - the scroll top of element
   */
  service.scrollTop = function(element) {
    return $(element).scrollTop();
  };

  /**
   * @description Gets value of element
   * @param {HTMLElement} el - normalized dom element.
   * @returns {String} - value
   */
  service.getValue = function(el) {
    return _$(el).val();
  };

  return service;
});

/*global Box*/
/**
 * @param {Object} application - T3 application object.
 * @returns {void}
 */
Box.Application.addService('template-engine', function(application) {
  'use strict';

  /**
   * Service for rendering templates
   * @exports service:template-engine
   * @todo implement loading of compiled templates
   */
  var _service = {};

  var _templates = {};
  var _pendingPromises = {};

  //Services
  var _ajax = application.getService('ajax');
  var _util = application.getService('util');
  var _promise = application.getService('promise');

  var _globalConfig = application.getGlobal('BZFD');
  var _config = _globalConfig.Context.site;
  var _hogan = require('hogan');
  var _rawTemplatesPath = _globalConfig.Config.rawTemplatesPath;

  /**
   * Returns pending promise object
   * @param {String} url - template url
   * @returns {Object|undefined} - promise object of undefined
   */
  function _getPendingPromise(url) {
    return _pendingPromises[url];
  }

  function _fullToRelative(url) {
    return url.replace(_config.static_root, '').replace(_rawTemplatesPath, '').replace('.mustache', '');
  }

//  function _relativeToFull(url) {
//    return _config.static_root + _rawTemplatesPath + url + '.mustache';
//  }

  /**
   * Add promise to pending list
   * @param {String} url - template url
   * @param {Object} promise - promise object
   * @returns {Boolean} - true if promise was added, false - otherwise
   */
  function _addPendingPromise(url, promise) {
    if (!_getPendingPromise(url)) {
      _pendingPromises[url] = promise;
      return true;
    }
    return false;
  }

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  /**
   * Add template to templates list
   * @param {String} url - template full url
   * @param {Object} template - compiled template
   * @param {Boolean} forced - whether to overwrite existing template
   * @returns {Boolean} true if template was added, false otherwise
   */
  _service.addTemplate = function(url, template, forced) {
    var key = _fullToRelative(url);
    if (!_templates[key] || forced) {
      _templates[key] = template;
      return true;
    }
    return false;
  };

  /**
   * Returns compiled template from loaded templates list
   * @param {String} url - template full url
   * @returns {Object|undefined} - compiled template object
   */
  _service.getTemplate = function(url) {
    return _templates[_fullToRelative(url)];
  };

  /**
   * Build raw template url
   * @param {String} template - template name, filename or url
   * @param {String} [path] - optional path to templates directory. Default is "/components/"
   * @returns {String} - generated template url
   */
  _service.getRawTemplateUrl = function(template, path) {
    path = path || _rawTemplatesPath;
    if (template.indexOf('.mustache') === -1) {
      template += '.mustache';
    }

    if (template.charAt(0) === '/') {
      template = template.substr(1, template.length);
    }

    if (template.indexOf(path) === -1) {
      template = path + template;
    }

    if (template.indexOf(_config.static_root) === -1) {
      template = _config.static_root + template;
    }

    return template;
  };


  /**
   * Requests HTML template from server.
   * @param {Object} options - configuration
   * @param {String} options.id - id of the template
   * @param {Function} options.callback - callback function for successful request
   * @returns {void}
   */
  _service.loadRawTemplate = function(options) {
    var url;
    var _def = _promise.create();
    if (!options || typeof options.id === "undefined") {
      _def.reject({error: "template-engine.loadRawTemplate: Missing template ID.", });
      return _def.promise();
    }
    if (typeof options.path === 'undefined') {
      options.path = _rawTemplatesPath;
    }

    //Build template url
    url = _service.getRawTemplateUrl(options.id, options.path);

    //Do not load template if it's already loaded
    //@todo is it needed?
    if (_service.getTemplate(url)) {
      _def.resolve(_service.getTemplate(url));
      return _def.promise();
    }

    //Do not load template if it's already loading
    if (_getPendingPromise(url)) {
      return _getPendingPromise(url);
    }

    //Load template and pass compiled templated into `resolve`
    _ajax.request({
      url: _util.prepareUrl(url, {v: _config.version, }),
    })
    .done(function(response) {
      var tempalte = _hogan.compile(response);
      _service.addTemplate(url, _hogan.compile(response));
      _def.resolve(tempalte);
    })
    .fail(_def.reject);

    //add request to pending list to avoid double loading
    _addPendingPromise(url, _def.promise());
    return _def.promise();
  };

  /**
   * Renders `template` string using `data` object
   * @param {String} template - template string. variables should be wrapped into {{}}
   * @param {Object} data - object with variables
   * @param {Object} partials - object with partials which are used in `template`
   * @returns {String} - rendered template
   */
  _service.renderString = function (template, data, partials) {
    // Extend bfStatic with supplied object
    var extendedPartials = _util.extend({}, _templates, partials || {});
    return _hogan.compile(template).render(data, extendedPartials);
  };

  _service.render = function(template, data, partials) {
    // Extend bfStatic with supplied object
    var extendedPartials = _util.extend({}, _templates, partials || {});
    return template.render(data, extendedPartials);
  };

  return _service;
});

/* From: BZFD */
/*global Box*/
Box.Application.addService('promise', function(application) {
  'use strict';

  var _$ = require('jquery');
  var _util = application.getService('util');

  /**
   * Wraps a target method into function and prepends a promise to the call.
   * @param {Function} promise - function that returns a promise.
   * @param {Function} method - target method to inject a promise.
   * @memberOf service:promise
   * @return {Function} - wrapped method.
   */
  function _inject(promise, method) {
    return function() {
      var args = arguments;
      var _this = this;
      return promise().then(function() {
        return method.apply(_this, args);
      });
    };
  }

  /**
   * Service for promises management.
   * @exports service:promise
   */
  var service = {};

  /**
   * Creates a promise object.
   * @return {jQuery.Deferred} - promise object.
   */
  service.create = function() {
    return new _$.Deferred();
  };

  /**
   * Injects a function with a promise into target's methods.
   * Guarantees that methods will not be executed until promise is resolved.
   * @param {Function} promise - a function to be executed before each of the target's methods.
   * @param {Object} target - target object. Typically a service.
   * @return {void}
   */
  service.inject = function(promise, target) {
    _util.each(target, function(key, val) {
      if (typeof val === 'function') {
        target[key] = _inject(promise, val);
      }
    });
  };

  service.when = function() {
    return _$.when.apply(_$, arguments);
  };

  _$.whenArray = function(array) {
    return _$.when.apply( this, array );
  };

  service.whenArray = _$.whenArray;

  return service;
});

/*global Box*/
Box.Application.addService('service-manager', function(ctx) {
  'use strict';
  var _bfStatic = ctx.getGlobal('BF_STATIC');
  var _util = ctx.getService('util');

  var service = {};

  service.startStandaloneServices = function() {
    _util.each(_bfStatic.standaloneServices, function(_, name) {
      ctx.getService(name).start();
    });
  };

  return service;
});

/*global Box*/
Box.Application.addService('modal-dialog', function(application) {
  'use strict';
  var _promise = application.getService('promise');
//  var _ajax = application.getService('ajax');
  var _dom = application.getService('dom');
  var _templateEngine = application.getService('template-engine');
  var _d = application.getGlobal('document');
  var _isVisible = false;
  var _modalEl;
  var _contentEl;
  var _headerEl;
  var _headerTextEl;
  var _initializing;
  var _template;

  /**
   * Service for modal dialog widget.
   * @exports service:modal-dialog
   */
  var service = {};

  /**
   * Set dialog content
   * @param {Object} content - object with content data
   * @param {String} content.html - html to be placed into content block
   * @param {Function} [content.onclick] - optional click handler
   * @returns {void}
   */
  function _setContent(content) {
    if (content.html) {
      _dom.setHTML(_contentEl, content.html);
    }

    if (content.onclick) {
      _dom.on(_contentEl, 'click', content.onclick);
    }
  }

  /**
   * Set dialog header
   * @param {Object} header - object with header data
   * @param {String} header.html - html to be placed into header
   * @param {Function} [header.onclick] - optional click handler
   * @returns {void}
   */
  function _setHeader(header) {
    if (header.html) {
      _dom.setHTML(_headerTextEl, header.html);
    }

    if (header.onclick) {
      _dom.on(_headerEl, 'click', header.onclick);
    }
  }

  /**
   * Renders modal template on the page.
   * @param {String} resp - modal template.
   * @memberOf service:modal-dialog
   * @return {void}
   */
  function _onInitialized(resp) {
    _template = resp;
  }

  function _render(data) {
    //remove old modal before adding new
    if (_modalEl) {
      _dom.remove(_modalEl);
    }
    _modalEl = _dom.stringToHTML(_templateEngine.render(_template, data))[0];
    _contentEl = _dom.find(_modalEl, '.js-modal__content')[0];
    _headerEl = _dom.find(_modalEl, '.js-modal__header')[0];
    _headerTextEl = _dom.find(_modalEl, '.js-modal__header__text')[0];
    _dom.on(_dom.find(_modalEl, '.js-modal__button-close')[0], 'click', service.hide);

    //add new modal
    _d.body.appendChild(_modalEl);
  }

  /**
   * Loads modal dialog template.
   * @memberOf service:modal-dialog
   * @return {Promise} - promise object.
   */
  function _init() {
    if (!_initializing) {
      _initializing = _templateEngine.loadRawTemplate({
        id: 'modals/modal-dialog',
      })
        .then(_onInitialized);
    }
    return _initializing;
  }

  /**
   * Shows modal dialog with specified content.
   * @param {Object} options - content to display on modal.
   * @return {void}
   */
  service.show = function(options) {
    options = options || {};
    _render(options.data || {});
    if (options.content) {
      _setContent(options.content);
    }
    if (options.header) {
      _setHeader(options.header);
    }
    if (typeof options.callback === 'function' ) {
      //@todo think which other data may be needed
      options.callback.call(this, _modalEl);
    }
    _dom.addClass(_d.body, 'js-show-modal');
    _isVisible = true;
    application.broadcast('modal-opened');
  };

  _promise.inject(_init, service);

  /**
   * Hides modal dialog.
   * @return {void}
   */
  service.hide = function() {
    if (!_modalEl) {
      return;
    }
    _dom.removeClass(_d.body, 'js-show-modal');
    _isVisible = false;
    application.broadcast('modal-closed');
  };

  /**
   * Hides modal dialog.
   * @return {void}
   */
  service.isVisible = function() {
    return _isVisible;
  };

  return service;
});

/*global Box*/
Box.Application.addService('pound', function(app) {
  'use strict';
  var _ajax = app.getService('ajax');
  var _bzStaticConfig = app.getGlobal('BF_STATIC');
  var _isEnabled = _bzStaticConfig.tracking ? _bzStaticConfig.tracking.pound.isEnabled : 0;
  var _bfVisit;
  var _pound;
  var _isInitialized;

  function _onInitialized() {
    _bfVisit = app.getGlobal('bf_visit');
    _pound = app.getGlobal('pound');
    _isInitialized = true;
  }

  var service = {};

  service.start = function() {
    if (!_isEnabled) {
      return;
    }

    _onInitialized();
  };

  service.isAvailable = function() {
    return _isInitialized;
  };

  service.getUserId = function() {
    if (!_isInitialized) {
      return;
    }

    return _bfVisit.unique.id;
  };

  /**
   *
   * @param url
   * @return {url}
   */
  service.addQueryString = function(url) {
    if (this.isAvailable()) {
      return _pound.urls._addQueryString(url);
    }

    return url;
  };

  service.getQueryString = function() {
    if (this.isAvailable()) {
      return _pound.urls.unescaped.queryStringOnly();
    }

    return null;
  };

  service.recordShare = function(element) {
    if (this.isAvailable()) {
      _bfVisit.recordShare(element);
    }
  };

  return service;
});

/*global Box*/
Box.Application.addService('abeagle', function(app) {
  'use strict';
  var _ajax = app.getService('ajax');
  var _bfStatic = app.getGlobal('BF_STATIC');
  var _pound = app.getService('pound');
  var _cookies = app.getService('cookies');
  var _util = app.getService('util');
  var _prompt = app.getGlobal('prompt');
  var _experiments = app.getService('ab-tests');
  var _requestPromise;
  var _current = {};

  var _debug = _util.getQueryParams().abdebug;

  /**
   * Fires T3 event for experiment variation
   * @param {String} experiment - experiment name.
   * @param {String} variant - varation name.
   * @memberOf service:abeagle\
   * @return {void}
   */
  function _notify(experiment, variant) {
    app.broadcast('abtest-' + experiment + '-' + variant, {
      'experiment': experiment,
      'variant': variant
    });
    _current[experiment] = variant;
  }

  /**
   * Fires control variation for every eligible abtest.
   * @memberOf service:abeable
   * @return {void}
   */
  function _fireControl() {
    _util.each(_experiments, function(_, experiment) {
      if (experiment.isEligible()) {
        _notify(experiment.name, 'control');
      }
    });
  }

  /**
   * Constructs URL for ABeagle API request.
   * @param {Array} experimentNames - array with experiments.
   * @return {String} - ABeagle API request URL.
   * @memberOf service:abeagle
   */
  function _getUrl(experimentNames) {
    return _bfStatic.abeagle_api_host + '/public/v2/experiment_variants' + _util.objectToQueryString({
      'experiment_names': experimentNames.join(';'),
      'user_id': _pound.getUserId(),
      'client_id': 'buzz_web',
    });
  }

  /**
   * Sets cookies for experiment variations and broadcasts application-wide events.
   * Notifies "control" variation for error or null-variant responses.
   * @param {Object} experimentsMap - map of experiments and their variations.
   * @param {Array} experimentNames - array of the experiment names.
   * @memberOf service:abeagle
   * @return {void}
   */
  function _processVariants(experimentsMap, experimentNames) {
    var variant;

    _util.each(experimentNames, function(index, name) {
      variant = experimentsMap[name];
      if (!variant || variant.error) {
        _notify(name, 'control');
        return;
      }

      // When experiment is resolved with NULL - save 'control' to user cookies.
      if (variant.resolved) {
        variant.value = variant.value || 'control';
      }

      // NULL value should be treated as 'control' behavior even when experiment is not resolved.
      _notify(name, variant.value || 'control');

      // At this point NULL value means that a user is not bucketed into any variant.
      // Nothing should be tracked or saved in that case.
      if (variant.value === null) {
        return;
      }

      // Track only if experiment version or value in the response are different from what's stored in cookies
      if ((_cookies.get(name) === variant.value) && (_cookies.get(name + '_version') === String(variant.version))) {
        return;
      }

      _cookies.set({
        name: name,
        value: variant.value,
        days: 180,
      });
      _cookies.set({
        name: name + '_version',
        value: variant.version,
        days: 180,
      });
    });
  }

  /**
   * Tracks current experiment variations to BFA.
   * @param {Object} experimentsMap - map of experiments and their variations.
   * @memberOf service:abeagle
   * @return {void}
   */
  function _track(experimentsMap) {
    var bfa = app.getGlobal('bfa');
    _util.each(experimentsMap, function(name, variant) {
      if (!variant.error) {
        bfa('track/abtest/' + name, {
          data: variant,
        });
        // Add abtest handler for pixiedust integration
        bfa('track/click/abtest', {
          opt: {
            ignore: ['all', ],
            force: ['PixiedustIntegration', ],
          },
          data: {
            experiment: name,
            variation: variant,
          },
        });
      }
    });
  }

  /**
   * Overrides experiment variations from ABeagle API with user-supplied values.
   * Debugging purposes only.
   * @memberOf service:abeagle
   * @return {void}
   */
  function _overrideVariations() {
    _util.each(_experiments, function(_, experiment) {
      if (!experiment.isEligible()) {
        _notify(experiment.name, 'control');
        return;
      }
      var value;

      // "control" variation can be forced for all tests via URL param value
      if (_debug === 'control') {
        value = 'control';
      }
      else {
        value = _prompt('Override variation for ' + experiment.name + ':\n\n' + experiment.variations.join('\n'),
          experiment.variations[0]);

        if (value === 'null') {
          value = null;
        }
      }

      _notify(experiment.name, value);
    });
  }

  /**
   * Service for AB-testing via ABeagle API.
   * @exports service:abeagle
   */
  var _service = {};

  /**
   * Gets variations for current experiments form ABeagle API.
   * Falls back to "control" variations, if the request fails.
   * @return {void}
   */
  _service.getVariants = function() {
    if (_debug) {
      _overrideVariations();
      return;
    }

    // ABeagle API request should only be sent once
    if (_requestPromise) {
      return;
    }

    var experimentNames = [];

    _util.each(_experiments, function(_, experiment) {
      if (experiment.isEligible()) {
        experimentNames.push(experiment.name);
      }
    });

    if (experimentNames.length) {
      _requestPromise = _ajax.request({
          url: _getUrl(experimentNames),
          timeout: 1000,
        })
        .then(function(experimentsMap) {
          _processVariants(experimentsMap, experimentNames);
          _track(experimentsMap);
        })
        .fail(_fireControl);
    }
  };

  /**
   * Processes experiment variations stored in user's cookie.
   * @return {void}
   */
  _service.start = function() {
    // Request variations on service start, if pound is already available.
    if (_pound.isAvailable()) {
      _service.getVariants();
    }

    if (_debug) {
      return;
    }

    _util.each(_experiments, function(_, experiment) {
      if (!experiment.isEligible()) {
        _notify(experiment.name, 'control');
        return;
      }
      var storedValue = _cookies.get(experiment.name);
      if (storedValue) {
        _notify(experiment.name, storedValue);
      }
    });
  };

  /**
   * Return current experiment variation stored in a var.
   * @param {String} exp - experiment name.
   * @return {void}
   */
  _service.getCurrent = function(exp) {
    return _current[exp];
  };

  return _service;
});

/* From: BZFD */
/*global Box*/
Box.Application.addService('storage', function(application) {
  'use strict';

  var _ls = application.getGlobal('localStorage');
  var _ss = application.getGlobal('sessionStorage');
  var _date = application.getGlobal('Date');
  var _isAvailable = application.getGlobal('Modernizr').localstorage;

  function _getExpirationEntryKey(key) {
    return key + '|expiration';
  }

  function _isExpired(key) {
    var expires = _ls.getItem(_getExpirationEntryKey(key));
    return expires && expires <= _date.now();
  }

  /**
   * Storage management service. Uses localStorage.
   * @exports service:storage
   */
  var service = {};

  /**
   * Creates storage entry.
   * @param {Object} options - entry creation parameters.
   * @param {String} options.key - entry key.
   * @param {String} options.value - entry value.
   * @param {Number} [options.expires] - entry lifetime in milliseconds.
   * @return {void}
   */
  service.set = function(options) {
    if (!_isAvailable || typeof options === "undefined") {
      return;
    }

    _ls.setItem(options.key, options.value);
    if (options.expires) {
      _ls.setItem(_getExpirationEntryKey(options.key), _date.now() + options.expires);
    }
  };

  /**
   * Reads storage entry.
   * @param {String} key - entry key.
   * @return {?String} - entry value or null;
   */
  service.get = function(key) {
    if (!_isAvailable) {
      return null;
    }

    if (!_isExpired(key)) {
      return _ls.getItem(key);
    }
    else {
      this.remove(key);
    }

    return null;
  };

  /**
   * Creates session storage entry.
   * @param {Object} options - entry creation parameters.
   * @param {String} options.key - entry key.
   * @param {String} options.value - entry value.
   * @return {void}
   */
  service.sessionSet = function(options) {
    if (!_isAvailable || typeof options === "undefined") {
      return;
    }

    _ss.setItem(options.key, options.value);
  };

  /**
   * Reads session storage entry.
   * @param {String} key - entry key.
   * @return {?String} - entry value or null;
   */
  service.sessionGet = function(key) {
    if (!_isAvailable) {
      return null;
    }

    return _ss.getItem(key);
  };


  /**
   * Removes storage entry.
   * @param {String} key - entry key.
   * @return {void}
   */
  service.remove = function(key) {
    if (!_isAvailable) {
      return;
    }

    _ls.removeItem(_getExpirationEntryKey(key));
    _ls.removeItem(key);
  };

  /**
   * Removes all storage entries.
   * @return {void}
   */
  service.clear = function() {
    if (!_isAvailable) {
      return;
    }

    _ls.clear();
  };

  return service;
});

/* global Box */
Box.Application.addService('cookies', function(context) {
  'use strict';

  var _d = context.getGlobal('document');
  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------
  /**
   * Service for cookie management.
   * @exports service:cookies
   */
  var cookiesService = {};

  /**
   * Gets cookie value by name.
   * @param {String} name - cookie name.
   * @param {Object} [defaultValue] - value to return if cookie is not presented.
   * @returns {?Object} - value of the specified cookie or default.
   */
  cookiesService.get = function(name, defaultValue) {
    var nameEQ = name + '=';
    var ca = _d.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return typeof defaultValue !== 'undefined' ? defaultValue : null;
  };

  /**
   * Creates cookie with specified properties.
   * @param {Object} args - options for creating a cookie.
   * @param {String} args.name - cookie name.
   * @param {Object} args.value - cookie value.
   * @param {Number} [args.days] - number of days until cookie expires.
   * @returns {void}
   */
  cookiesService.set = function(args) {
    var exp = '';
    if (args.days) {
      var date = new Date();
      date.setTime(date.getTime() + args.days * 24 * 60 * 60 * 1000);
      exp = ';expires=' + date.toGMTString();
    }
    _d.cookie = args.name + '=' + args.value + exp + '; path=/; domain=.buzzfeed.com';
  };

  /**
   * Removes cookie by name.
   * Sets expiration date on yesterday.
   * @param {String} name - cookie name.
   * @returns {void}
   */
  cookiesService.remove = function(name) {
    this.set({
      name: name,
      value: '',
      days: -1,
    });
  };

  return cookiesService;
});

/*global Box*/
Box.Application.addService('ab-tests', function(app) {
  'use strict';
  var _bfStatic = app.getGlobal('BF_STATIC');
  var _bzfd = app.getGlobal('BZFD');

  var tests = [
    {
      name: 'abeagle_feedpager_video_related_02',
      variations: ['control', 'experiment1', 'experiment2', 'experiment3'],
      isEligible: function() {
        return _bfStatic.page.match(/videos/i) !== null;
      },
    },
    {
      name: 'abeagle_feedpager_tastyfilter',
      variations: ['control', 'experiment1'],
      isEligible: function() {
        return _bfStatic.page.match(/tasty/i) !== null;
      },
    }, 
    {
      name: 'awareness_cards_en_us',
      variations: ['control', 'on'],
      isEligible: function() {
        return true;
      }
    },
  ];

  return tests;
});

/*global Box*/
Box.Application.addBehavior('form-handler', function(context) {
  'use strict';

  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _behavior = {};
  var _element = context.getElement();
  var _domService = context.getService('dom');
  var _utilService = context.getService('util');
  var _ajaxService = context.getService('ajax');
  var _bfStatic = context.getGlobal('BF_STATIC');

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------
  _behavior.server_url = '/buzzfeed/_feedback';

  var _eventHandlers = {};
  _behavior.messages = _utilService.getKeys(_eventHandlers);

  /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @return {void}
   */
  _behavior.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  /**
   * Module's initialization logic
   * @ignore
   * @returns {void}
   */
  _behavior.init = function() {

    this.els = {};
    this.els['contactForm'] = _domService.find(_element, '.js-contact-form')[0];
    this.els['contactFormTitle'] = _domService.find(_element, '.js-contact-form-title')[0];
    this.els['contactFormText'] = _domService.find(_element, '.js-contact-form-text')[0];
    this.els['contactFormGroup'] = _domService.find(_element, '.js-contact-form-group');
    this.els['inputText'] = _domService.find(_element, '.js-input--text');
    this.els['inputRadio'] = _domService.find(_element, '.js-input--radio');
    this.els['contactFormSuccess'] = _domService.find(_element, '.js-contact-form-success');
    this.els['contactFormLoader'] = _domService.find(_element, '.js-contact-form-loader');

    this.reset_form();
  };

  _behavior.hide_form = function() {
    context.broadcast('form-cancel');
  };

    /**
   * Toggle contact form and show success message visibility
   */
  _behavior.toggle_form_success = function() {
    if(_domService.hasClass(this.els['contactFormSuccess'], 'xs-hide')) {
      _domService.addClass(this.els['contactForm'], 'xs-hide');
      _domService.addClass(this.els['contactFormText'], 'xs-hide');
      _domService.removeClass(this.els['contactFormSuccess'], 'xs-hide');
    } else {
      _domService.removeClass(this.els['contactForm'], 'xs-hide');
      _domService.removeClass(this.els['contactFormText'], 'xs-hide');
      _domService.addClass(this.els['contactFormSuccess'], 'xs-hide');
    }
  };

  /**
  * Reset all inputs data of the contact form
  */
  _behavior.reset_form = function() {
    this.els['contactForm'].reset();
    this.reset_form_errors();
    _utilService.each(this.els['inputRadio'], function(i, el) {
      if( el.checked ) {
        var textId = el.getAttribute('name'),
          textEl = _domService.find(_element, '#' + textId);
        _domService.after(_domService.next(el, 'label'), textEl);
      }
    });
  };

  /**
     * Remove error highlighting styles from all input wrappers
     */
  _behavior.reset_form_errors = function() {
    _utilService.each(this.els['contactFormGroup'], function(i, el) {
      _domService.removeClass(el, 'form-fieldset--error');
    });
  };

  _behavior.reset_field_error = function(el) {
    if(typeof el == 'undefined') {
        return;
    }
    _domService.removeClass(_domService.parents(el, '.js-contact-form-group'), 'form-fieldset--error');
  };

  _behavior.validate_form = function() {
    var validateFormSuccess = true;
    _utilService.each(this.els['inputText'], function(i, el) {
      if(_domService.hasClass(el, 'input-required') && el.value.trim() == '') {
        validateFormSuccess = false;
        _domService.addClass(_domService.parents(el, '.js-contact-form-group'), 'form-fieldset--error');
      }
    });
    return validateFormSuccess;
  },

   /**
   * Object of functions for getting special params for contact form.
   * Should be called in BFFeedbackManager context
   */
  _behavior.calculated_fields = {
		browser : function() {
			return navigator.appName + ' ' + navigator.appCodeName + ' ' + navigator.appVersion;
		},

		username : function() {
			if(this.user && this.user.username) {
				return this.user.username;
			}
      return '';
		},

		user_agent : function() {
      return navigator.userAgent;
    },

		cookies_enabled : function() {
      return navigator.cookieEnabled;
    },

		screen_size : function() {
      return screen.width + ' x ' + screen.height;
    },

    country: function() {
      return _bfStatic.country;
    }
	},

  /**
   * Ajax request success handler
   * @param {object} r - response data
   */
  _behavior.submit_success = function(rObj) {
    this.toggle_spinner();
    if(!rObj.success) {
     _utilService.each(this.els['inputText'], function(i, el) {
        if( typeof rObj.errors[el.getAttribute('name')] != 'undefined'
            && rObj.errors[el.getAttribute('name')]) {
          _domService.addClass(_domService.parents(el, '.js-contact-form-group'), 'form-fieldset--error');
        }
      });
    } else {
      this.toggle_form_success();
    }
  };

  _behavior.toggle_spinner = function() {
    if(_domService.hasClass(this.els['contactFormLoader'], 'contact-form-loading')) {
      _domService.removeClass(this.els['contactFormLoader'], 'contact-form-loading');
    } else {
      _domService.addClass(this.els['contactFormLoader'], 'contact-form-loading');
    }
  };

  /**
   * Ajax request error handler
   * @param {object} r - response data
   */
  _behavior.submit_error = function(r) {
      this.toggle_spinner();
      console.error('Request ' + this.server_url + ' failed', r);
      alert('Sorry, there was a problem processing your request. If it persists please contact support at' + ' ' + _bfStatic.web_root + '/about/contact');
  };

  /**
     * Submit form data
     */
  _behavior.submit_form = function() {
    var _this = this;
    this.reset_form_errors();
    if(!this.validate_form()) {
        return;
    }
    this.toggle_spinner();
    var params = _domService.serialize(this.els['contactForm']);
    params.action = 'submit';
    params.issue = this.els['contactFormTitle'] ? this.els['contactFormTitle'].innerHTML : '';
    // Add special params for contact form
    for( var field in this.calculated_fields ) {
      params[field] = this.calculated_fields[field].call(this);
    }

    _ajaxService.request({
      url: this.server_url,
      data: params,
      dataType: 'json',
    })
      .done(_this.submit_success.bind(_this))
      .fail(_this.submit_error.bind(_this))
  };
  /**
   * Place 'text' input under selected 'radio' input
   * @param {object} e - click event
   */
  _behavior.switch_radio_input = function(el) {
    var textId = el.getAttribute('name'),
      textEl = _domService.find(_element, '#' + textId);
    this.reset_field_error(textEl);
    _domService.after(_domService.next(el, 'label'), textEl);
    textEl[0].value = '';
    textEl[0].focus();
  }


  _behavior.onclick = function(ev, elem, elemType) {
    if (elemType === 'form-input') {
      this.reset_field_error(elem);
    }
    else if (elemType === 'form-radio') {
      this.switch_radio_input(elem);
    }
    else if (elemType === 'form-submit') {
      this.submit_form();
    }
    else if (elemType === 'form-cancel') {
      this.hide_form();
    }
  };


  /**
   * Cleanup
   * @ignore
   * @returns {void}
   */
  _behavior.destroy = function() {};

  return _behavior;
});
