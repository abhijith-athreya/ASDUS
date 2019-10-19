/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);;

/**
 * jQuery Once Plugin v1.2
 * http://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
  var cache = {}, uuid = 0;

  /**
   * Filters elements by whether they have not yet been processed.
   *
   * @param id
   *   (Optional) If this is a string, then it will be used as the CSS class
   *   name that is applied to the elements for determining whether it has
   *   already been processed. The elements will get a class in the form of
   *   "id-processed".
   *
   *   If the id parameter is a function, it will be passed off to the fn
   *   parameter and the id will become a unique identifier, represented as a
   *   number.
   *
   *   When the id is neither a string or a function, it becomes a unique
   *   identifier, depicted as a number. The element's class will then be
   *   represented in the form of "jquery-once-#-processed".
   *
   *   Take note that the id must be valid for usage as an element's class name.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
  $.fn.once = function (id, fn) {
    if (typeof id != 'string') {
      // Generate a numeric ID if the id passed can't be used as a CSS class.
      if (!(id in cache)) {
        cache[id] = ++uuid;
      }
      // When the fn parameter is not passed, we interpret it from the id.
      if (!fn) {
        fn = id;
      }
      id = 'jquery-once-' + cache[id];
    }
    // Remove elements from the set that have already been processed.
    var name = id + '-processed';
    var elements = this.not('.' + name).addClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };

  /**
   * Filters elements that have been processed once already.
   *
   * @param id
   *   A required string representing the name of the class which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
  $.fn.removeOnce = function (id, fn) {
    var name = id + '-processed';
    var elements = this.filter('.' + name).removeClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };
})(jQuery);
;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

// Allow other JavaScript libraries to use $.
jQuery.noConflict();

(function ($) {

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
var jquery_init = $.fn.init;
$.fn.init = function (selector, context, rootjQuery) {
  // If the string contains a "#" before a "<", treat it as invalid HTML.
  if (selector && typeof selector === 'string') {
    var hash_position = selector.indexOf('#');
    if (hash_position >= 0) {
      var bracket_position = selector.indexOf('<');
      if (bracket_position > hash_position) {
        throw 'Syntax error, unrecognized expression: ' + selector;
      }
    }
  }
  return jquery_init.call(this, selector, context, rootjQuery);
};
$.fn.init.prototype = jquery_init.prototype;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
 * object using the method 'attach' and optionally also 'detach' as follows:
 * @code
 *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/Ajax in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use
 * @code
 *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
 * @endcode
 * to ensure the behavior is attached only once to a given element. (Doing so
 * enables the reprocessing of given elements, which may be needed on occasion
 * despite the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 */
Drupal.attachBehaviors = function (context, settings) {
  context = context || document;
  settings = settings || Drupal.settings;
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.attach)) {
      this.attach(context, settings);
    }
  });
};

/**
 * Detach registered behaviors from a page element.
 *
 * Developers implementing AHAH/Ajax in their solutions should call this
 * function before page content is about to be removed, feeding in an element
 * to be processed, in order to allow special behaviors to detach from the
 * content.
 *
 * Such implementations should look for the class name that was added in their
 * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
 * behaviorName-processed, to ensure the behavior is detached only from
 * previously processed elements.
 *
 * @param context
 *   An element to detach behaviors from. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 * @param trigger
 *   A string containing what's causing the behaviors to be detached. The
 *   possible triggers are:
 *   - unload: (default) The context element is being removed from the DOM.
 *   - move: The element is about to be moved within the DOM (for example,
 *     during a tabledrag row swap). After the move is completed,
 *     Drupal.attachBehaviors() is called, so that the behavior can undo
 *     whatever it did in response to the move. Many behaviors won't need to
 *     do anything simply in response to the element being moved, but because
 *     IFRAME elements reload their "src" when being moved within the DOM,
 *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
 *     take some action.
 *   - serialize: When an Ajax form is submitted, this is called with the
 *     form as the context. This provides every behavior within the form an
 *     opportunity to ensure that the field elements have correct content
 *     in them before the form is serialized. The canonical use-case is so
 *     that WYSIWYG editors can update the hidden textarea to which they are
 *     bound.
 *
 * @see Drupal.attachBehaviors
 */
Drupal.detachBehaviors = function (context, settings, trigger) {
  context = context || document;
  settings = settings || Drupal.settings;
  trigger = trigger || 'unload';
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.detach)) {
      this.detach(context, settings, trigger);
    }
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 *
 * @ingroup sanitization
 */
Drupal.checkPlain = function (str) {
  var character, regex,
      replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  str = String(str);
  for (character in replace) {
    if (replace.hasOwnProperty(character)) {
      regex = new RegExp(character, 'g');
      str = str.replace(regex, replace[character]);
    }
  }
  return str;
};

/**
 * Replace placeholders with sanitized values in a string.
 *
 * @param str
 *   A string with placeholders.
 * @param args
 *   An object of replacements pairs to make. Incidences of any key in this
 *   array are replaced with the corresponding value. Based on the first
 *   character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *
 * @see Drupal.t()
 * @ingroup sanitization
 */
Drupal.formatString = function(str, args) {
  // Transform arguments before inserting them.
  for (var key in args) {
    if (args.hasOwnProperty(key)) {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
          break;
        // Pass-through.
        case '!':
          break;
        // Escaped and placeholder.
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    }
  }

  return Drupal.stringReplace(str, args, null);
};

/**
 * Replace substring.
 *
 * The longest keys will be tried first. Once a substring has been replaced,
 * its new value will not be searched again.
 *
 * @param {String} str
 *   A string with placeholders.
 * @param {Object} args
 *   Key-value pairs.
 * @param {Array|null} keys
 *   Array of keys from the "args".  Internal use only.
 *
 * @return {String}
 *   Returns the replaced string.
 */
Drupal.stringReplace = function (str, args, keys) {
  if (str.length === 0) {
    return str;
  }

  // If the array of keys is not passed then collect the keys from the args.
  if (!$.isArray(keys)) {
    keys = [];
    for (var k in args) {
      if (args.hasOwnProperty(k)) {
        keys.push(k);
      }
    }

    // Order the keys by the character length. The shortest one is the first.
    keys.sort(function (a, b) { return a.length - b.length; });
  }

  if (keys.length === 0) {
    return str;
  }

  // Take next longest one from the end.
  var key = keys.pop();
  var fragments = str.split(key);

  if (keys.length) {
    for (var i = 0; i < fragments.length; i++) {
      // Process each fragment with a copy of remaining keys.
      fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
    }
  }

  return fragments.join(args[key]);
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *
 * @param options
 *   - 'context' (defaults to the empty context): The context the source string
 *     belongs to.
 *
 * @return
 *   The translated string.
 */
Drupal.t = function (str, args, options) {
  options = options || {};
  options.context = options.context || '';

  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) {
    str = Drupal.locale.strings[options.context][str];
  }

  if (args) {
    str = Drupal.formatString(str, args);
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @param options
 *   The options to pass to the Drupal.t() function.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function (count, singular, plural, args, options) {
  args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args, options);
  }
  else if (index == 1) {
    return Drupal.t(plural, args, options);
  }
  else {
    args['@count[' + index + ']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
  }
};

/**
 * Returns the passed in URL as an absolute URL.
 *
 * @param url
 *   The URL string to be normalized to an absolute URL.
 *
 * @return
 *   The normalized, absolute URL.
 *
 * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
 * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
 * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
 */
Drupal.absoluteUrl = function (url) {
  var urlParsingNode = document.createElement('a');

  // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
  // strings may throw an exception.
  try {
    url = decodeURIComponent(url);
  } catch (e) {}

  urlParsingNode.setAttribute('href', url);

  // IE <= 7 normalizes the URL when assigned to the anchor node similar to
  // the other browsers.
  return urlParsingNode.cloneNode(false).href;
};

/**
 * Returns true if the URL is within Drupal's base path.
 *
 * @param url
 *   The URL string to be tested.
 *
 * @return
 *   Boolean true if local.
 *
 * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
 */
Drupal.urlIsLocal = function (url) {
  // Always use browser-derived absolute URLs in the comparison, to avoid
  // attempts to break out of the base path using directory traversal.
  var absoluteUrl = Drupal.absoluteUrl(url);
  var protocol = location.protocol;

  // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
  // as local as well.
  if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
    protocol = 'https:';
  }
  var baseUrl = protocol + '//' + location.host + Drupal.settings.basePath.slice(0, -1);

  // Decoding non-UTF-8 strings may throw an exception.
  try {
    absoluteUrl = decodeURIComponent(absoluteUrl);
  } catch (e) {}
  try {
    baseUrl = decodeURIComponent(baseUrl);
  } catch (e) {}

  // The given URL matches the site's base URL, or has a path under the site's
  // base URL.
  return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML for text that should be emphasized and
 * displayed as a placeholder inside a sentence, call
 * Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function (func) {
  var args = Array.prototype.slice.apply(arguments, [1]);

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  $('<div id="freeze-height"></div>').css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).appendTo('body');
};

/**
 * Unfreeze the body height.
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Encodes a Drupal path for use in a URL.
 *
 * For aesthetic reasons slashes are not escaped.
 */
Drupal.encodePath = function (item, uri) {
  uri = uri || location.href;
  return encodeURIComponent(item).replace(/%2F/g, '/');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof element.selectionStart != 'number' && document.selection) {
    // The current selection.
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Add a global variable which determines if the window is being unloaded.
 *
 * This is primarily used by Drupal.displayAjaxError().
 */
Drupal.beforeUnloadCalled = false;
$(window).bind('beforeunload pagehide', function () {
    Drupal.beforeUnloadCalled = true;
});

/**
 * Displays a JavaScript error from an Ajax response when appropriate to do so.
 */
Drupal.displayAjaxError = function (message) {
  // Skip displaying the message if the user deliberately aborted (for example,
  // by reloading the page or navigating to a different page) while the Ajax
  // request was still ongoing. See, for example, the discussion at
  // http://stackoverflow.com/questions/699941/handle-ajax-error-when-a-user-clicks-refresh.
  if (!Drupal.beforeUnloadCalled) {
    alert(message);
  }
};

/**
 * Build an error message from an Ajax response.
 */
Drupal.ajaxError = function (xmlhttp, uri, customMessage) {
  var statusCode, statusText, pathText, responseText, readyStateText, message;
  if (xmlhttp.status) {
    statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") +  "\n" + Drupal.t("HTTP Result Code: !status", {'!status': xmlhttp.status});
  }
  else {
    statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
  }
  statusCode += "\n" + Drupal.t("Debugging information follows.");
  pathText = "\n" + Drupal.t("Path: !uri", {'!uri': uri} );
  statusText = '';
  // In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
  // Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
  // and the test causes an exception. So we need to catch the exception here.
  try {
    statusText = "\n" + Drupal.t("StatusText: !statusText", {'!statusText': $.trim(xmlhttp.statusText)});
  }
  catch (e) {}

  responseText = '';
  // Again, we don't have a way to know for sure whether accessing
  // xmlhttp.responseText is going to throw an exception. So we'll catch it.
  try {
    responseText = "\n" + Drupal.t("ResponseText: !responseText", {'!responseText': $.trim(xmlhttp.responseText) } );
  } catch (e) {}

  // Make the responseText more readable by stripping HTML tags and newlines.
  responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");
  responseText = responseText.replace(/[\n]+\s+/g,"\n");

  // We don't need readyState except for status == 0.
  readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {'!readyState': xmlhttp.readyState})) : "";

  // Additional message beyond what the xmlhttp object provides.
  customMessage = customMessage ? ("\n" + Drupal.t("CustomMessage: !customMessage", {'!customMessage': customMessage})) : "";

  message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
  return message;
};

// Class indicating that JS is enabled; used for styling purpose.
$('html').addClass('js');

// 'js enabled' cookie.
document.cookie = 'has_js=1; path=/';

/**
 * Additions to jQuery.support.
 */
$(function () {
  /**
   * Boolean indicating whether or not position:fixed is supported.
   */
  if (jQuery.support.positionFixed === undefined) {
    var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
    jQuery.support.positionFixed = el[0].offsetTop === 10;
    el.remove();
  }
});

//Attach all behaviors.
$(function () {
  Drupal.attachBehaviors(document, Drupal.settings);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  }
};

})(jQuery);
;
/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-video-input-inputtypes-inlinesvg-svg-svgclippaths-touch-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.boxshadow=function(){return I("boxShadow")},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);;
/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);;
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","    ":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);;
/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
;
$ = jQuery;

Tesla = window.Tesla || {};


/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
  if (!window.console) {
    window.console = {};
  }
  // union of Chrome, FF, IE, and Safari console methods
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  // define undefined methods as noops to prevent errors
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = function() {};
    }
  }
})();

function log( str ) {
    debug.log( str );
}

var urlParams = {};

var webFormModal = null;

(function () {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
})();


// Commenting this section out because touchscreen.css does not exist on the D7 side <eritchey 2015-02-26>
/* Touchscreen modifications */
// (function () {

//     var isVehicleBrowser = (navigator.userAgent.toLowerCase().indexOf('qtcarbrowser') !== -1);

//     if (isVehicleBrowser) {
//         document.write("<link rel=\"stylesheet\" href=\"\/sites\/all\/themes\/tesla\/styles\/touchscreen.css?20140414\" \/>");
//     }

// }());

/*
 *  Checks to see if it's a Smartling country. If so, Smartling takes care
 *  of the translation.
 */
Tesla.Smartling = Tesla.Smartling || {};
Tesla.Smartling.Countries = [ "da_DK", "fr_BE", "nl_BE", "sv_SE", "zh_CN", "cn" ];

Tesla.Smartling.getVariable = ( function( smartling, other ) {
    return ( ( Tesla.Smartling.Countries.indexOf( Drupal.settings.tesla.locale ) != -1 ) ? smartling : other );
} );

function include(filename) {
    var head = document.getElementsByTagName('head')[0];
    script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    head.appendChild(script);
}


// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tp:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}


/*
 * Cookie functions
 */
function createCookie(name,value,days,domain) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";

    var this_domain = '';
    if (domain) {
        this_domain = ";domain="+domain
    }
    // TWS-5276
    if (window.location.protocol == 'https:') {
        document.cookie = name+"="+value+expires+"; path=/"+this_domain+"; secure";
    }
    else {
        document.cookie = name+"="+value+expires+"; path=/"+this_domain;
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


/*
 * Generic window opening function
 */
function openWin(url, name, opts) {
    document.domain = 'tesla.com';
    if (!opts) {
        opts = "";
    }
    return window.open(url, name, opts);
}

// D7-TODO: Check to see if this is used, if not remove it
$(function() {
    /* Featured owner photostrip hovers */
    if ($('div.view-featured-owners-nq').length) {
        $('div.view-featured-owners-nq div.views-field-field-photo-fid img').mouseenter(
            function() {
                $('#clone', $(this).parents()).remove(); //gc
                var owner = $(this).parents('div.views-row');
                var pos = getOrdinalPosition(owner);
                var x_offset = pos * 75;
                // clone the div as a popup
                var clone = owner.clone();
                clone.addClass('hovered');
                clone.attr('id','clone');
                clone.css('left', x_offset);
                clone.mouseout(function() {
                    $(this).remove();
                });
                clone.appendTo('#featured-owners .view-content');
            });
    }
});

/*
 * Initialize store page photo galleries
 */
function initGalleries() {
    if (window.Galleria && Drupal.settings.tesla.flickr_api_key) {
        Galleria.loadTheme('/sites/all/themes/tesla/js/galleria/src/themes/classic/galleria.classic.js');
        var flickr = new Galleria.Flickr(Drupal.settings.tesla.flickr_api_key); // initialize the plugin

        $('#gallery-index li a').click(function() {
            $('#gallery-index li').removeClass('selected');
            $(this).parent().addClass('selected');
            var href = $(this).attr('href').split('=');
            var set_id = href[1];
            flickr.getSet(set_id, {size:'medium'}, function(data) {
                $('#galleria').galleria({
                    data_source: data
                });
            });
            return false;
        });

        // trigger click on first gallery item
        $('#gallery-index li.first a').trigger('click');
    }
}

// delay-remove fade status messages (from e.g. region picker)
function fadeAlerts () {
    $('.messages.fade').fadeOut(400);

}

// given an element, figure out which oridinal position it has
// among its siblings
function getOrdinalPosition(el) {
    var position = -1;
    // we have to do this because el.siblings() does not return the element itself
    var siblings = el.parent().children();
    $.each(siblings, function(key, value) {
    if (value == el[0]) {
        position = key;
        return false;
    }
    });
    return position;
}

/*
 * attach analytics events for webform submits
 */
function attachWebformAnalytics(form_id) {
    var _region = Drupal.settings.tesla.locale;

    switch (form_id) {
        case 'webform-client-form-119':
            // own/store/incentives call me back
            // Same form id is used on both store, own and incentives callback forms
            // need to figure out which one it is
            if ($('body').hasClass('node-type-teslastore')) {
                debug.log('Track pageview for store/callback_submit');
                ga('send', 'pageview', '/store/callback_submit');
            } else if ($('body').attr('id')=='page-goelectric-incentives') {
                debug.log('Track pageview for incentives/callback_submit');
                ga('send', 'pageview', '/incentives/callback_submit');
            } else {
                debug.log('Track pageview for own/callback_submit');
                ga('send', 'pageview', '/own/callback_submit');
            }
            break;
        case 'webform-client-form-3836':
            // test drive
            debug.log('Track pageview for testdrive_submit');
            ga('send', 'pageview', 'testdrive_submit');
            break;
        case 'webform-client-form-120':
            // store appt form
            debug.log('Track pageview for /store/appointment_submit');
            ga('send', 'pageview', '/store/appointment_submit');
            break;
        case 'webform-client-form-121':
            // store appt form
            debug.log('Track pageview for /event_submit');
            ga('send', 'pageview', '/event_submit');
            break;
        case 'webform-client-form-3974':
            // Newsletter signup
            debug.log('Track pageview for /newsletter_submit');
            ga('send', 'pageview', '/newsletter_submit');
            break;
        case 'webform-client-form-122':
            // Newsletter signup (US)
            debug.log('Track pageview for /newsletter_us_submit');
            ga('send', 'pageview', '/newsletter_us_submit');
            break;
        case 'webform-client-form-19198':
            var _testDriveThankyouUrl = '/' + _region + '/drive/thank-you';
            if (_region == 'en_US') {
                _testDriveThankyouUrl = '/drive/thank-you';
            }
            debug.log('Track pageview for ' + _testDriveThankyouUrl);
            ga('send', 'pageview', _testDriveThankyouUrl);
            break;
        case 'webform-client-form-60471':
            if ($('#' + form_id).attr('action').indexOf('features') !== -1) {
                debug.log('Track RequestTestDriveButton event "Submit - Model S Features Page" action');
                ga('send', 'event', 'RequestTestDriveButton', 'Submit - Model S Features Page');
            } else {
                debug.log('Track RequestTestDriveButton event "Submit - Model S Landing Page" action');
                ga('send', 'event', 'RequestTestDriveButton', 'Submit - Model S Landing Page');
            }
            break;
    }
}

/**
 * Creates a Google tag manager event and pushes it to the dataLayer.
 * @param {String} eventName - Name of the Google tag manager event.
 * @param {String} widgetName - Name of the widget that triggered the event.
 */
function createGTMEvent(eventName, widgetName) {
    var dataLayer = window.dataLayer || [];

    // Validate that both eventName and widgetName have values
    if (!eventName || !widgetName) return;

    // Verify that this event does not already exist in the dataLayer.
    // Only record the event once.
    var eventExists = _.some(dataLayer, function(item) {
        return item["event"] === eventName && item["widget name"] === widgetName;
    });

    if (!eventExists) {
        window.dataLayer.push({ "event": eventName, "widget name": widgetName });
    }
}

/**
 * Initialize Google tag manager (GTM) listeners that listen for events on DOM
 * elements with the following data attributes:
 * 1. data-gtm-event  -> Name of the Google tag manager event.
 * 2. data-gtm-widget -> Name of the widget that triggered the event.
 * 3. data-gtm-type   -> DOM event type to listen for.
 *
 * Handle the event by pushing it to the GTM dataLayer.
 */
function initGTMAnalyticsEvents() {
    // Click event
    $('[data-gtm-event][data-gtm-widget][data-gtm-type="click"]').click(function() {
        var $this = $(this);
        createGTMEvent($this.data('gtm-event'), $this.data('gtm-widget'));
    });
}

/*
 * Make an anchor open in a new window
 */
function openLinkNewWindow(link) {
    if (link.length) {
        link.click(function() {
            openWin(link.attr('href'));
            return false;
        });
    }
}

/*
 * Perform any locale-specific tasks
 */
function attachLocaleHandlers() {
    // look for country/language code in body class. It will look something like 'i18n-ja_JP'
    var body_classes = $('body').attr('class').split(' ');
    var code = '';
    for (var i=0, l=body_classes.length; i<l; i++) {
        if (body_classes[i].indexOf('i18n') > -1) {
            code = body_classes[i].substr(5);
        }
    }
    // D7-TODO: Make sure JP links denoted below open in a new window
    // switch(code) {
    //     case 'ja_JP':
    //         // for Japan, open IR and careers links in a new window
    //         openLinkNewWindow($('.menu-17808 a'));
    //         openLinkNewWindow($('.menu-17807 a'));
    //         openLinkNewWindow($('ul.quicklinks li:first-child a'));
    //         break;
    // }

    // localize_events_rsvp();
}

/*
 * Localize "Join our email newsletter list".
 * D7-TODO: Remove when this form is refactored
 */
// function localize_events_rsvp() {

//   // Get localized label contents and strip colons.
//   var LocalLabel = $('form#webform-client-form-121 #webform-component-subscriptions__c label:first').html();
//   if (LocalLabel != null) {
//       LocalLabelNoColon = LocalLabel.replace(":", "");

//       // Get non-localized label contents and insert localized text.
//       var NonLocalLabel = $('form#webform-client-form-121 #edit-submitted-subscriptions--c-Tesla-Newsletter-wrapper label').html();
//       NewLocalLabel = NonLocalLabel.replace("Join our email newsletter list", LocalLabelNoColon);
//       $('form#webform-client-form-121 #edit-submitted-subscriptions--c-Tesla-Newsletter-wrapper label').html(NewLocalLabel);
//   }
// }


/**
 * Logic for checking and working with the desired-locale cookie
 */
function checkCookie() {
        var cookie_locale = readCookie('desired-locale');
        var show_blip_count = readCookie('show_blip_count');
        var tesla_locale = 'en_US'; //default to US
        var path = window.location.pathname;
        // debug.log("path = " + path);
        var parsed_url = parseURL(window.location.href);
        var path_array = parsed_url.segments;
        var path_length = path_array.length;
        var locale_path_index = -1;
        var locale_in_path = false;
        var locales = ['ar_AE', 'ar_JO',
                       'cn',
                       'da_DK', 'de_AT', 'de_CH', 'de_DE',
                       'en_AU', 'en_NZ', 'en_CA', 'en_EU', 'en_GB', 'en_HK', 'en_US', 'en_MO', 'en_IE', 'es_ES', 'en_JO', 'en_AE',
                       'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR',
                       'it_CH', 'it_IT',
                       'jp',
                       'ko_KR',
                       'nl_BE', 'nl_NL', 'no_NO',
                       'pt_PT',
                       'sv_SE',
                       'zh_HK', 'zh_MO', 'zh_TW'];
        // see if we are on a locale path
        $.each(locales, function(index, value) {
            locale_path_index = $.inArray(value, path_array);
            if (locale_path_index != -1) {
                if (value == 'jp') {
                    value = 'ja_JP';
                }
                else if (value == 'cn') {
                    value = 'zh_CN';
                }
                tesla_locale = value;
                locale_in_path = true;
            }
        });
        // debug.log('tesla_locale = ' + tesla_locale);
        cookie_locale = (cookie_locale == null || cookie_locale == 'null') ? false : cookie_locale;
        // Only do the js redirect on the static homepage.
        if ((path_length == 1) && (locale_in_path || path == '/')) {
            // debug.log("Path in redirect section: " + path);
            if (cookie_locale && (cookie_locale != tesla_locale)) {
                // debug.log('Redirecting to cookie_locale...');
                var path_base = '';
                switch (cookie_locale) {
                    case 'en_US':
                        path_base = path_length > 1 ? path_base:'/';
                        break;
                    case 'ja_JP':
                        path_base = '/jp';
                        break;
                    case 'zh_CN':
                        path_base = '';
                        break;
                    default:
                        path_base = '/' + cookie_locale;
                }
                path_array = (locale_in_path != -1) ? path_array.slice(locale_in_path) : path_array;
                path_array.unshift(path_base);
                var cookie_redirect_url = path_array.join('/');
                var has_query_string = (cookie_redirect_url.indexOf('?') !== -1);
                // var has_trailing_slash = (cookie_redirect_url.slice(-1) == '/');
                // Ensure url has trailing slash to prevent locale prefix redirection loops
                if (!has_query_string && (cookie_redirect_url.slice(-1) !== '/')) {
                    cookie_redirect_url += '/';
                }
                // Inject no redirect flag for tesla.module / tesla.locale.inc php redirect to prevent loops
                cookie_redirect_url += (has_query_string ? '&' : '?') + 'redirect_from_js=1';
                debug.log("Should Redirect to: " + cookie_redirect_url);
                // window.location.href = cookie_redirect_url;
            }
        }

        // only do the ajax call if we don't have a cookie
        if (!cookie_locale) {
            cookie_locale = 'null';
            var get_data = {cookie:cookie_locale, page:path, t_locale:tesla_locale};
            var query_country_string = parsed_url.query != '' ? parsed_url.query.split('='):false;
            var query_country = query_country_string ? (query_country_string.slice(0,1) == '?country' ? query_country_string.slice(-1):false):false;
            if (query_country) {
                get_data.query_country = query_country;
            }
            // $.ajax({
            //     url:'/check_locale',
            //     data:get_data,
            //     cache: false,
            //     dataType: "json",
            //     success: function(data) {
            //                 var ip_locale = data.locale;
            //                 var market = data.market;
            //                 var new_locale_link = $('#locale_pop #locale_link');
            //                 if (data.show_blip && show_blip_count < 3) {
            //                     setTimeout(function() {
            //                         $('#locale_msg').text(data.locale_msg);
            //                         $('#locale_welcome').text(data.locale_welcome);
            //                         new_locale_link[0].href = data.new_path;
            //                         new_locale_link.text(data.locale_link);
            //                         new_locale_link.attr('rel', data.locale);
            //                         if (!new_locale_link.hasClass(data.locale)) {
            //                             new_locale_link.addClass(data.locale);
            //                         }
            //                         $('#locale_pop').slideDown('slow', function() {
            //                             var hide_blip = setTimeout(function() {
            //                                 $('#locale_pop').slideUp('slow', function() {
            //                                             var show_blip_count = readCookie('show_blip_count');
            //                                             if (!show_blip_count) {
            //                                                 createCookie('show_blip_count',1,360);
            //                                             }
            //                                             else if (show_blip_count < 3 ) {
            //                                                 var b_count = show_blip_count;
            //                                                 b_count ++;
            //                                                 eraseCookie('show_blip_count');
            //                                                 createCookie('show_blip_count',b_count,360);
            //                                             }
            //                                     });
            //                                 },10000);
            //                             $('#locale_pop').hover(function() {
            //                                 clearTimeout(hide_blip);
            //                                 },function() {
            //                                     setTimeout(function() {$('#locale_pop').slideUp();},10000);
            //                                 });
            //                         });
            //                     },1000);
            //                 }
            //             }
            // });
    }
}

/**
 * Pass in an array of image urls to pre-load
 */
Drupal.settings.imagecache = [];
function preLoadImages() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      Drupal.settings.imagecache.push(cacheImage);
    }
}

/**
 * Live Update elements to reflect a user's logged-in state.
 *
 * @Note ~
 *
 *     This method should be removed entirely if it's deprecated.
 *
 *     From the audit lens, it's only being called in the customer-facing
 *     Configurator and is not needed in that application.
 *
 *     Also, as a general rule of thumb or something to keep in mind,
 *     when setting `cache` to `false` on an XHR request, jQuery, in this case,
 *     will add a cache-buster to the URL. It's fine to apply this setting, but
 *     know why or the implications of it, specifically with performance.
 *
 *     - Manny, July 2015
 */
Tesla.updateLoggedInState = function() {
    $.ajax({
        url:window.location.pathname,
        cache:false,
        success:function(page) {
            $("#utils-menu").html($(page).find("#utils-menu").children());
        }
    });
}

// D7-TODO: Check for dashboard dependencies, if not remove
function showWebFormOverlay(webFormID, webFormWidth, webFormHeight) {
    var webFormOverlay = $('#'+ webFormID);
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);

    if (!webFormModal) {
        $('#page').parent().prepend('<div id="webform-modal"></div>');
        webFormModal = $('#webform-modal');
    }

    webFormOverlay.find('.pane-content').css('max-height', webFormHeight - 20);
    webFormOverlay.find('.pane-content').css('padding-left', 14);
    webFormOverlay.find('.pane-content').css('margin-right', "18px");

    // Set the height of the webform modal to the document height and fade it in.
    webFormModal.stop().css({
        'display':      'block',
        'height':       $(document).height()
    }).animate({
        'opacity':      .6
    }, 500);

    // Show the webform overlay.
    webFormOverlay.stop().css({
        'display':      'block',
        'width':        webFormWidth,
        'max-height':       webFormHeight,
        'margin-left':  (980 - webFormWidth) / 2
    }).animate({
        'opacity':      1
    }, 1000);

    // Check for an existing close button, if there isnt one, create one.
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);
    if (webFormOverlayCloseButton.length == 0) {
        var formIDString = "'"+ webFormID +"'";
        /*webFormOverlay.prepend('<a class="webform-overlay-close-button" id="webform-close-button-'+ webFormID +'" href="javascript:hideWebFormOverlay('+ formIDString +');">&nbsp;</a>');*/
         webFormOverlay.prepend('<a class="webform-overlay-close-button" id="webform-close-button-'+ webFormID +'" href="">&nbsp;</a>');

    }
}

function hideWebFormOverlay(webFormID) {
    var webFormOverlay = $('#'+ webFormID);
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);
    resetForm(webFormOverlay);
    resetForm(webFormModal);

    webFormOverlay.stop().animate({
        'opacity':      0
    }, 500, function() {
        webFormOverlay.css('display', 'none');
    });

    webFormModal.stop().animate({
        'opacity':      0
    }, 500, function() {
        webFormModal.css('display', 'none');
    });
}

function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
     .removeAttr('checked').removeAttr('selected');
}

// to call, use:
resetForm($('#myform')); // by id, recommended

// D7-TODO: Fix dependency issues
// Drupal.Ajax.plugins.shadowbox = function(hook, args) {
//     if (hook === 'init') {
//         $('form.webform-client-form').after('<div class="submit-progress"><img src="/sites/all/themes/tesla/images/ajax-loader-bar-transparent.gif" alt="Sending, please wait" /></div>');
//         //unbind ajax form handlers from original
//         function ajaxUnbindOriginal(sbInline) {
//             var f;
//             if (f = $('.ajax-form', sbInline.content)) {
//                 $("#"+f.attr('id'), document).each(function() {
//                     $(this).unbind('submit')
//                     .find('input[type=submit]').unbind('click');
//                 });
//             }
//         }
//         // and re-bind in SB context
//         function ajaxShadowbox(sbInline) {
//             Drupal.attachBehaviors($('#sb-player'));
//         }

//         Shadowbox.options['onFinish'] = ajaxShadowbox;
//         Shadowbox.options['onOpen'] = ajaxUnbindOriginal;

//         //disable keyboard overrides
//         Shadowbox.options['enableKeys'] = false;

//         return false;
//     }
//     else if (hook === 'submit') {
//         debug.log('shadowbox hook submit');
//         var thisForm = args.submitter.parents('form.webform-client-form');
//         args.submitter.hide();
//         thisForm.next('.submit-progress').show();
//     }
//     else if (hook === 'afterMessage') {
//         if (args.status == false) {
//             $('.submit-progress').hide();
//             args.local.submitter.show();
//         }
//         else {
//             // attach analytics after message is being displayed
//             var thisForm = args.local.submitter.parents('form.webform-client-form');
//             attachWebformAnalytics(thisForm.attr('id'));
//         }
//     }
//     else if (hook === 'redirect') {
//         if (args.status === true) {
//             // work around possible same origin policy issues introduced by CDN
//             var redirectPath = parseURL(args.redirect).path;
//             $.get(redirectPath, function (data) {

//         //disable keyboard overrides
//         Shadowbox.options['enableKeys'] = false;

//     return false;
//     }
//     else if (hook === 'submit') {
//         debug.log('shadowbox hook submit');
//         var thisForm = args.submitter.parents('form.webform-client-form');
//         args.submitter.hide();
//         thisForm.next('.submit-progress').show();
//         attachWebformAnalytics(thisForm.attr('id'));
//     }
//     else if (hook === 'afterMessage') {
//         if (args.status == false) {
//             $('.submit-progress').hide();
//             args.local.submitter.show();
//         }


//     }
//     else if (hook === 'redirect') {
//         if (args.status === true) {
//             // work around possible same origin policy issues introduced by CDN
//             var redirectPath = parseURL(args.redirect).path;
//             $.get(redirectPath, function (data) {

//                 var confMsg = $(data).find('.webform-confirmation');
//                 //  Localizing the confirmation message
//                 if (confMsg.length == 0) {
//                     return;
//                 }
//                 $( confMsg ).html( $( confMsg ).html()
//                     .replace( "Contact the Tesla Financing Team", Drupal.t( "Contact the Tesla Financing Team" ) )
//                     .replace( "Thanks!", Drupal.t( "Thanks!" ) )
//                     .replace( "We will get in touch with you shortly.", Drupal.t( "We will get in touch with you shortly." ) ) );

//                 $('.submit-progress').hide();

//                 args.local.form.parents('.node-webform').html(confMsg);
//             });
//         }
//     return false; //do not redirect
//     }
//     // there is no 'error' hook... condition logged to console, and the form seems to hang
//     else if (hook === 'error') {
//         $('.submit-progress').hide();
//         thisForm.replaceWith('<div class="webform-confirmation error">Sorry, there was an internal server error while submitting this form. Please try again later.</div>');

//     }
//     return true;
// };



/*
 * Do this stuff as soon as DOM is ready.
 */
$(document).ready(function() {

    if (typeof Drupal.settings.tesla == 'undefined') {
        Drupal.settings.tesla = new Object();
    }

    // set a deafult cookie for the buy flow based on locale
    var buy_flow_cookie = readCookie('buy_flow_locale');
    if (!buy_flow_cookie) {
        createCookie('buy_flow_locale',Drupal.settings.tesla.locale, 360);
    }

    //WEB-7462: set cookie if query string in the form '?advocate=menlopark' exists
    var qs = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    if (qs["advocate"] && (qs["advocate"].length < 36)) {  // Longest tag is 26. 35 is an arbitrary but reasonable max length for new tags.
        createCookie('advocate',qs["advocate"], 1, Drupal.settings.SharingCookies.AcrossDomain);
        cache_buster_set_cookie(1); //set cache buster cookie to equal length period to allow anonymous(not logged in) orders to be placed
    }
    if (qs['ip'] && (qs['ip'].length < 16)) { //Max length for IPv4 IP addresses
        createCookie('fake_ip', qs['ip'], 1, Drupal.settings.SharingCookies.AcrossDomain);
        cache_buster_set_cookie(1);
    }
    if (qs["campaign"] && (qs["campaign"].length < 19)) {  //CampaignID length in SFCD is 18 chars
        createCookie('campaign',qs["campaign"], 1, Drupal.settings.SharingCookies.AcrossDomain);
        cache_buster_set_cookie(1); //set cache buster cookie to equal length period to allow anonymous(not logged in) orders to be placed
    }

    /**
     * main menu: secondary nav hovers
     */

    // Shop subnav link -- open in new window
    // $('.menu-16276 a').attr('target','_new');

    // Press page styling
    // $('#page-about-press #left-col .pane-title').addClass('style-header');

    // $('.typekit-badge').hide();

    // Helper function to get the language code.
    function getLangCode() {
        var body_classes = $('body').attr('class').split(' ');
        var code = '';
        for (var i=0, l=body_classes.length; i<l; i++) {
            if (body_classes[i].indexOf('i18n') > -1) {
                code = body_classes[i].substr(5);
            }
        }
        return code;
    }

    // Initialize Google Tag Manager analytics listener
    initGTMAnalyticsEvents();

    // D7-TODO: Check comments to see if needed, if not please remove
    // Forms
    // $('form#comment-form input[type=submit]')
    // .after('<div class="submit-progress"><img src="/tesla_theme/assets/img/ajax-loader-bar.gif" alt="Loading, please wait" /></div>')
    // .click(function() {
    //         $(this).hide()
    //         .next('.submit-progress').show();
    // });

    // Country Selector
    $('#tesla-country-selector .form-submit').hide();
    $('#tesla-country-selector #edit-country').change(function() {
        if ($(this).val() !== '') {
            $('#tesla-country-selector').submit();
        }
    });

    // Phone number popup for en_GB
    if (Drupal.settings.tesla.locale === 'en_GB') {
        $("#edit-submitted-phone").after("<span id='submitted-phone-popup'>Please provide a number we can reach you on during office hours</span>");

        $("#edit-submitted-phone")
            .focus(function() {
                $(this).next('#submitted-phone-popup').fadeIn(300);
            })
            .blur(function() {
                $(this).next('#submitted-phone-popup').fadeOut(300);
            });
    }

    // Locale specific
    attachLocaleHandlers();

    // Fade alerts
    messagesBye = setTimeout(fadeAlerts, 4000);

    // D7-TODO: Move to go electric specific page
    // We don't want margins on all p tags. Sometimes the WYSIWYG adds p tags you don't need.
    $('#page-goelectric-charging #page_bottom .row-3-col div p:has(a img)').css('margin', '0');

    // Set cookies on based on locale-modal hrefs
    $('#locale-selector-d7').find('a').click(function () {
        if (window.location.hostname === $(this).get(0).hostname) {
            var desired_locale = $(this).attr('rel');
            createCookie('desired-locale', desired_locale, 360, Drupal.settings.SharingCookies.AcrossDomain);
            createCookie('buy_flow_locale', desired_locale, 360);
        }
    });


    $('#locale_pop a.close').click(function() {
        var show_blip_count = readCookie('show_blip_count');
        if (!show_blip_count) {
            createCookie('show_blip_count',3,360);
        }
        else if (show_blip_count < 3 ) {
            eraseCookie('show_blip_count');
            createCookie('show_blip_count',3,360);
        }
        $('#locale_pop').slideUp();
        return false;
    });

    // start mytesla profile
    if ($('#page-user-me-edit').length || $('#page-user-edit').length) {

        var profile_error_msg = '';
        var profile_existing_msg = '';
        if ($('#email-match-error').length) {
            profile_existing_msg = $('#email-match-error').val();
        }
        // if there's an error on the page (default drupal) then grab it and show it elsewhere
        if ($('#messages-wrapper').length) {

            if ($('.messages.error').length) {
                profile_error_msg = $('.messages.error').html();
            }
            else if ($('.messages.status').length) {
                profile_error_msg = $('.messages.status').html();
            }
            else {
                profile_error_msg = Drupal.t('Your profile has been updated successfully.');
            }
            if (profile_error_msg != '') {
                if (profile_error_msg.indexOf('The changes have been saved') > 0) {
                    profile_error_msg = Drupal.t('Your profile has been updated successfully.');
                }
                if (profile_error_msg != '' && profile_existing_msg != '') {
                    profile_existing_msg = profile_error_msg + '<br/>' + profile_existing_msg;
                }
                else {
                    profile_existing_msg = profile_error_msg;
                }

            }
            $('#profile-msg-content-div').html(profile_existing_msg);
            if ($('#profile-msg-content-div').css('display') == 'none') {
                if ($('#profile-msg-content-div ul').length) {
                    $('#profile-msg-content-div ul').css('margin-bottom','0px');
                }
                $('#profile-msg-div').css('display','block');
                $('#profile-msg-content-div').fadeIn('slow');
            }
        // show save success message div
        }
        else if ($('#edit-profile-savesuccess').length) {
            $('#profile-msg-content-div').html($('#edit-profile-savesuccess').val());
            $('#profile-msg-div').css('display','block');
            $('#profile-msg-content-div').fadeIn('slow');
        }

        if ($('#browser').length) {
            if (!$.browser.msie) {
                $('#browser').val($.browser.version);
            }
        }

        /*if ($('#edit-mail').length) {
            $('#edit-mail').val($('#edit-email').val());
        }*/

        if ($('#edit-mail-wrapper').length) {
            $('#edit-mail-wrapper').removeClass('form-item');
        }

        if ($('#edit-name-wrapper').length) {
            $('#edit-name-wrapper').removeClass('form-item');
        }

        if ($('#edit-picture-upload-wrapper').length) {
            $('#edit-picture-upload-wrapper').removeClass('form-item');
        }

        if ($('.picture').length) {
            $('.picture').css('display','none');
        }

        if ($('#edit-picture-delete-wrapper').length) {
            $('#edit-picture-delete-wrapper').removeClass('form-item');
        }

        $('.mytesla-photo-chg-link').click(function() {
            openChangePhotoDiv();
        });

        if ($('#edit-picture-upload').length) {

            $('.description').css('display','none');
            $('label[for="edit-picture-upload"]').css('display','none');

            if ($.browser.msie) {
                $('#profile-form-div').css('display','block');
                $('.mytesla-photo-chg-link').unbind('click');
                $('.mytesla-photo-chg-link').click(function() {
                    $("html, body").animate({ scrollTop: ($("#profile-form-div").offset().top)-20 }, "slow");
                });
                $('#edit-picture-upload-wrapper').css('display','block');
                $('#edit-picture-upload-wrapper').before('<div class="profile-subhdr">'+Drupal.t('Change Your Profile Image')+'</div>');
                $('#edit-picture-upload-wrapper').css('background','none');
                $('#edit-picture-upload').css('opacity','1');
                // $('#edit-picture-upload').remove('form-file');
            }
            else {
                $('#edit-picture-upload-wrapper').append('<div id="edit-picture-btn-txt">'+Drupal.t('choose file')+'</div>');
                $('#edit-picture-upload').css({'opacity':'0','-khtml-appearance':'none','cursor':'pointer'});
                $('#edit-picture-upload').change(function() {
                    if (!$.browser.msie) {
                        $('#edit-picture-upload-wrapper').append('<div id="edit-picture-displayfile"></div>');
                        var msg = Drupal.t('Selected file: ') + $('#edit-picture-upload').val();
                        $('#edit-picture-displayfile').text(msg);
                        $('#edit-picture-displayfile').fadeIn('slow');
                    }
                });
            }
        }

        var multiplier = 6.3;
        if (Drupal.settings.tesla.locale == 'ja_JP') {
            multiplier = 9.5;
        }
        var notePositionW = $('label[for="edit-mail"]').html().length * multiplier;
        var notePosition = $('#edit-mail').position();
        var notePositionX = notePosition.left + notePositionW;
        var notePositionY = notePosition.top - 18;
        var locale = '';
        if (Drupal.settings.tesla.country != 'US') {
            locale = '/'+Drupal.settings.tesla.locale;
        }
        if (locale == '/ja_JP') {
            locale = '/jp';
        }
        if (locale == '/zh_CN') {
            locale = '/cn';
        }
        $('#profile-email-note').css('top',notePositionY);
        $('#profile-email-note').css('left',notePositionX);

        if ($('#profile-contact-div').length) {

            if ($('#edit-mail').length) {
                $('#edit-mail').val($('#edit-email').val());
            }

            if ($('#edit-mail-wrapper').length) {
                $('#edit-mail-wrapper').removeClass('form-item');
            }

            var multiplier = 6.3;
            if (Drupal.settings.tesla.locale == 'ja_JP') {
                multiplier = 9.5;
            }
            var notePositionW = $('label[for="edit-email"]').html().length * multiplier;
            var notePosition = $('#edit-email').position();
            var notePositionX = notePosition.left + notePositionW;
            var notePositionY = notePosition.top - 18;
            var locale = '';
            if (Drupal.settings.tesla.country != 'US') {
                locale = '/'+Drupal.settings.tesla.locale;
            }
            if (locale == '/ja_JP') {
                locale = '/jp';
            }
            if (locale == '/zh_CN') {
                locale = '';
            }
            $('#profile-email-note').css('top',notePositionY);
            $('#profile-email-note').css('left',notePositionX);

            $('#profile-addr2-note').css('top',notePositionY);
            $('#profile-addr2-note').css('left',notePositionX+50);

            $('#profile-navbar-title').click(function() {
                window.location.href=locale+'/teslaaccount';
            });

            $('#profile-navbar-two').click(function() {
                window.location.href=locale+'/own/financing';
            });

            $('#profile-navbar-three').click(function() {
                window.location.href=locale+'/own/service';
            });

            // set the overlay for main contact country select box
            setMailingCountryOverlay();
        }

        $('#changepwd-btn-cancel').click(function() {
            $('#changepwd-error-div').html('');
            $('#changepwd-error-div').css('display','none');
            $('#profile-popup-closex').css('display','none');
            $('#edit-changepwd-current').val('');
            $('#edit-pass-pass1').val('');
            $('#edit-pass-pass2').val('');
            $('#profile-changepwd-div').css('display','none');
            $('#page-disable').fadeOut('slow',function() {
                $(this).remove();
            });
        });

        $('#changephoto-btn-cancel').click(function() {
            $('#changephoto-error-div').html('');
            $('#changephoto-error-div').css('display','none');
            $('#profile-popup-closex').css('display','none');
            $('#edit-picture-upload').val('');
            $('#profile-changephoto-div').css('display','none');
            $('#changephoto-processing-img').css('display','none');
            $('#page-disable').fadeOut('slow',function() {
                $(this).remove();
            });
        });

        $('#changepwd-btn-save').click(function() {
            submitChangePassword();
        });

        $('#changephoto-btn-save').click(function() {
            submitChangePhoto();
        });

        // cancel button functionality on profile page
        $('#btnSelectDOBack').click(function() {

            var back_destination = $('#edit-profile-destination').val();
            if (back_destination.indexOf('?')) {
                back_destination = back_destination.substring(0,back_destination.indexOf('?'));
            }

            window.location.href = back_destination;
        });

        // submit button functionality on profile page
        if ($('#btnSelectDO').length) {
            $('#btnSelectDO').click(function() {
                submitUserEditForm();
            });
        }

        // open the alternate contact div if user has one
        if ($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
            changeProfileCountry('profile-alt-mailing-addr','altmailing','onready');
            // set the overlay for alternate contact country select box
            if ($.browser.msie && $.browser.version < 9) {
                // do nothing, this will get handled later
            }
            else {
                setAltMailingCountryOverlay();
            }
        }

        // set alt contact open/close links only if altcontact container is available
        if ($('#profile-altcontact-container').length && $('#profile-altcontact-container').css('display') == 'block') {
            $('#profile-addremove-icon').unbind('click');
            $('#profile-addremove-icon').click(function() {
                openAltContactDiv();
            });
            $('#profile-addremove-title').unbind('click');
            $('#profile-addremove-title').click(function() {
                openAltContactDiv();
            });
        }

        // set contact preference to 1st option by default
        // if ($('#profile-contactprefs-radio1').length) {
        //     setProfileAltContactRadio(0);
        // }
        if ($('#contact_prefs').length && $('#contact_prefs').val() == '1') {
            setProfileAltContactRadio($('#contact_prefs').val());
        }
        else {
            setProfileAltContactRadio(0);
        }


        if ($('#removeprompt-btn-confirm-cancel').length) {
            $('#removeprompt-btn-confirm-cancel').click(function() {
                $('#profile-popup-closex').css('display','none');
                $('#profile-removeprompt-div').css('display','none');
                $('#page-disable').fadeOut('slow');
            });
        }

        if ($('#removeprompt-btn-confirm').length) {
            $('#removeprompt-btn-confirm').click(function() {
                var window_height = $(window).height();
                var window_width = $(window).width();
                var x_position = window_width/2;
                var y_position = window_height/2;
                var pdiv_width = $('#processing-div').width();
                var pdiv_height = $('#processing-div').height();
                x_position = x_position - (pdiv_width/2);
                y_position = y_position - (pdiv_height/2);
                $('#processing-div').css('left',x_position);
                $('#processing-div').css('top',y_position);
                $('#processing-div').css('position','fixed');
                $('#profile-popup-closex').css('display','none');
                $('#profile-removeprompt-div').fadeOut('slow',function() {
                    $('#processing-div').fadeIn('slow',function() {
                        removeAltContact();
                    });
                });
            });
        }

        if ($('#profile-form-div').length && $.browser.msie) {
            if ($('#profile-form-div fieldset:first-child legend').html() == 'Account validation') {
                $('#profile-form-div fieldset:first-child').css('display','none');
            }
        }

    }
    // end mytesla profile


    /**
     * D7-TODO: Move to China specific js file
     * WEB-13981 - changes to the WeChat icon interaction in Chinese footer
     * Interactions captured:
     *     - open popover when icon is clicked
     *     - close popover when icon is clicked
     *     - close popover is anything on the page is clicked
     *     - close popover is user hits the escape key (keycode === 27)
     */
    $( document ).click( function( e ) {
        var icon = $( '.social-icon .icon-wechat.is-active' );
        togglePopover( icon );
    });

    $( document ).keyup( function( e ) {
        var icon = $( '.social-icon .icon-wechat.is-active' );
        if ( e.keyCode === 27 ) {
            togglePopover( icon );
        }
    });

    $( '.social-icon' ).bind( 'click', '.icon-wechat', function( e ) {
        e.stopPropagation( e );
        togglePopover( $(this) );
    });

    //bind profile submit

    $('#user-profile-form').submit(function(e) {
        submitUserEditForm();
        return false;
    });

    function togglePopover( e ) {
        e.toggleClass( 'is-active' );
    }

    $(".tesla-updates").on("click", function(e) {
        e.stopPropagation();
        // window.open("/about/legal#tesla-updates", "_newtab");
    })
});
/////////////////////////// end onready

function setMailingCountryOverlay(origin) {
    // select element styling
    if ($('#edit-mailing-country').length && !$('#mailing-country-overlay').length) {
        $('#edit-mailing-country').each(function() {
            var title = $(this).attr('title');
            if ( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text().substring(0,24);
            $(this)
                .css({'z-index':1,'opacity':0,'-khtml-appearance':'none'})
                .after('<span id="mailing-country-overlay" class="select-mailing">' + title + '</span>')
                .change(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
                      val = $('option:selected',this).text().substring(0,19);
                      val = '<img src="/tesla_theme/assets/img/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#mailing-country-overlay').html(val);
                })
                .keyup(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
                      val = $('option:selected',this).text().substring(0,19);
                    }
                    $('#mailing-country-overlay').html(val);
                })
        });

        if (!$('#no_mytesla_account').length) {
            if (!origin) {
                changeProfileCountry('profile-owner-mailing-addr','mailing','onready');
            } else {
                changeProfileCountry('profile-owner-mailing-addr','mailing');
            }
        }

        // set position of country dropdown overlay
        var countryPosition = $('#edit-mailing-country').position();
        var countryPositionX = countryPosition.left-3;
        var countryPositionY = countryPosition.top;
        if ($.browser.safari) {
            countryPositionY = countryPosition.top-2;
        }
        var ctry_code = $('#edit-mailing-country').val().toLowerCase();
        var ctry_label = $('#edit-mailing-country option:selected').text().substring(0,24);
        $('#mailing-country-overlay').css('left',countryPositionX);
        $('#mailing-country-overlay').css('top',countryPositionY);
        // if locale supported country, show flag in dropdown
        if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
            ctry_label = $('#edit-mailing-country option:selected').text().substring(0,19);
            $('#mailing-country-overlay').html('<img src="/tesla_theme/assets/img/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+ctry_label);
        }

        $('#mailing-country-overlay').fadeIn('slow');

    }
}

function setAltMailingCountryOverlay(origin) {

    if ($('#edit-altmailing-country').length && !$('#altmailing-country-overlay').length) {
        $('#edit-altmailing-country').each(function() {
            var title = $(this).attr('title');
            if ( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text().substring(0,24);
            $(this)
                .css({'z-index':1,'opacity':0,'-khtml-appearance':'none'})
                .after('<span id="altmailing-country-overlay" class="select-mailing">' + title + '</span>')
                .change(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au'  || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
                      val = $('option:selected',this).text().substring(0,19);
                      val = '<img src="/tesla_theme/assets/img/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#altmailing-country-overlay').html(val);
                })
                .keyup(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
                      val = $('option:selected',this).text().substring(0,19);
                      val = '<img src="/tesla_theme/assets/img/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#altmailing-country-overlay').html(val);
                })
        });

        if (origin) {
            // set position of country dropdown overlay
            var countryPosition = $('#edit-altmailing-country').position();
            var countryPositionX = countryPosition.left-3;
            var countryPositionY = countryPosition.top;
            var ctry_code = $('#edit-altmailing-country').val().toLowerCase();
            var ctry_label = $('#edit-altmailing-country option:selected').text().substring(0,24);
            $('#altmailing-country-overlay').css('left',countryPositionX);
            $('#altmailing-country-overlay').css('top',countryPositionY);
            // if locale supported country, show flag in dropdown
            if (ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'nz' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr') {
                var ctry_label = $('#edit-altmailing-country option:selected').text().substring(0,19);
                $('#altmailing-country-overlay').html('<img src="/tesla_theme/assets/img/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+ctry_label);
            }
            $('#altmailing-country-overlay').fadeIn('slow');
        }
    }
}

function setProfileCloseX(origin,action) {
    if ($('#profile-'+origin+'-div').length) {
        if (action == 'open') {
            var popLocation = $('#profile-'+origin+'-div').position();
            alert(popLocation.top);
            popLocationX = popLocation.left;
            popLocationY = popLocation.top;
            $('#profile-popup-closex').css('left',popLocationX);
            $('#profile-popup-closex').css('top',popLocationY);
            $('#profile-popup-closex').css('display','block');
        } else {
            $('#profile-popup-closex').css('display','none');
        }
    }
}

function checkProfileRequiredFields(origin) {

    // $('#btnSelectDO').css('opacity','0.6');
    var no_main_contact = false;
    var aContactReqd = new Array();
    var aReqd = new Array();
    aReqd.push('username');
    aReqd.push('first-name');
    aReqd.push('last-name');
    aReqd.push('email');

    if ($('#edit-profile-contactid').length && $('#edit-profile-contactid').val() != '') {
        aReqd.push('phone');
        aReqd.push('mailing-address-1');
        if ($('#edit-mailing-country').val() != 'JP') {
            aReqd.push('mailing-city');
        }
        if ($('#edit-mailing-country').val() != 'CN') {
            aReqd.push('mailing-zip');
        }
        if ($('#mailing-province-istextbox').length) {
            aReqd.push('mailing-state');
        }
    } else {
        no_main_contact = true;
        aContactReqd.push('phone');
        aContactReqd.push('mailing-address-1');
        if ($('#edit-mailing-country').val() != 'JP') {
            aContactReqd.push('mailing-city');
        }
        if ($('#edit-mailing-country').val() != 'CN') {
            aReqd.push('mailing-zip');
        }
        if ($('#mailing-province-istextbox').length) {
            aContactReqd.push('mailing-state');
        }
    }
    if (($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') || ($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1')) {
        aReqd.push('altcontact-firstname');
        aReqd.push('altcontact-lastname');
        aReqd.push('altcontact-mail');
        aReqd.push('altcontact-phone');
        aReqd.push('altmailing-address-1');
        if ($('#edit-altmailing-country').val() != 'JP') {
            aReqd.push('altmailing-city');
        }
        if ($('#altmailing-province-istextbox').length) {
            aReqd.push('altmailing-state');
        }
        if ($('#edit-altmailing-country').val() != 'CN') {
            aReqd.push('altmailing-zip');
        }
    }

    for(var i=0;i<aReqd.length;i++) {

        $('#edit-'+aReqd[i]).unbind('keyup');
        $('#edit-'+aReqd[i]).keyup(function() {
            var incomplete = 0;
            for(var ii=0;ii<aReqd.length;ii++) {
                if ($('#edit-'+aReqd[ii]).val() == '') {
                    incomplete = 1;
                }
            }
            if (incomplete == 0) {
                $('#btnSelectDO').css('opacity','1');
            } else {
                $('#btnSelectDO').css('opacity','0.6');
            }
        });
    }
    // new condition for users with no main mailing address and start to add one
    if (no_main_contact === true) {
        for(var i=0;i<aContactReqd.length;i++) {

            $('#edit-'+aContactReqd[i]).unbind('keyup');
            $('#edit-'+aContactReqd[i]).keyup(function() {
                var incomplete = 0;
                var adding_contact = 0;
                for(var ii=0;ii<aContactReqd.length;ii++) {
                    if ($('#edit-'+aContactReqd[ii]).val() != '') {
                        adding_contact = 1;
                    }
                }
                if (adding_contact == 1) {
                    if (!$('#edit-profile-addmaincontact').length) {
                        $('#user-profile-form').append('<input type="hidden" name="edit-profile-addmaincontact" id="edit-profile-addmaincontact" value="1" />');
                    }
                    for(var ii=0;ii<aContactReqd.length;ii++) {
                        if ($('#edit-'+aContactReqd[ii]).val() == '') {
                            incomplete = 1;
                        }
                    }
                } else {
                    if ($('#edit-profile-addmaincontact').length) {
                        $('#edit-profile-addmaincontact').remove();
                    }
                }
                if (incomplete == 0) {
                    $('#btnSelectDO').css('opacity','1');
                } else {
                    $('#btnSelectDO').css('opacity','0.6');
                }
            });
        }
    }

    if (origin) {
        var incomplete = 0;
        for(var j=0;j<aReqd.length;j++) {
            if ($('#edit-'+aReqd[j]).val() == '') {
                incomplete = 1;
            }
        }
        if (no_main_contact === true) {
            incomplete = 0;
        }
        if (incomplete == 0) {
            // $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').css('opacity','1');
            // $('#btnSelectDO').click(function() {
            //     submitUserEditForm();
            // });
        } else {
            $('#btnSelectDO').css('opacity','0.6');
        }
    }
    // $('#btnSelectDO').click(function() {
    //     submitUserEditForm();
    // });
}


/*
 * Do this stuff when the page is loaded -- any visible transistions
 */
$(window).load(function() {

    // fade in any tooltips
    $('.hover_tooltip').fadeIn(1500);
    // check to see if we need to show the locale blip
    checkCookie();

});

function makeCursor(obj) {
    document.getElementById(obj.id).style.cursor = 'pointer';
}

// onclick function for removing/deleting alternate contact
// calls submit user edit form which will submit the entire form
// and refresh the page
function removeAltContact() {

    var destination = $('#edit-profile-destination').val();
    //$('#edit-profile-removealt-contact').val(1);
    $('input[name=remove_contact_hit]').val(1);
    submitUserEditForm('removeAltContact');

}

// updated function to change the mailing countries on the profile page.
// new ajax call to post new state/province values or empty text box if
// no related provinces/states.
// removed page refresh call which loses user input information
function changeProfileCountry(whichblock,fieldsegment,origin) {
    debug.error('****** changeProfileCountry invoked', whichblock, fieldsegment, origin);
    var container            = $('#'+whichblock);
    var selectedCountryIndex = document.getElementById('edit-'+fieldsegment+'-country').selectedIndex;
    var selectedCountry      = document.getElementById('edit-'+fieldsegment+'-country').options[selectedCountryIndex].value;
    var buyFlowCountry       = $('#edit-'+fieldsegment+'-country').val();
    var ln_container         = 'localname-container'; // china reservation

    //WEB-8685 for China, we must rely on saved values(hidden fields), will break if coming from other county
    var savedCountry = $('#edit-'+fieldsegment+'-country-h').val();
    if (origin || savedCountry == 'CN') {
        var mailing_addr1   = $('#edit-'+fieldsegment+'-address-1-h').val();
        var mailing_addr2   = $('#edit-'+fieldsegment+'-address-2-h').val();
        var mailing_city    = $('#edit-'+fieldsegment+'-city-h').val();
        var mailing_county  = $('#edit-'+fieldsegment+'-county-h').val();
        var mailing_state   = $('#edit-'+fieldsegment+'-state-h').val();
        var mailing_zip     = $('#edit-'+fieldsegment+'-zip-h').val();
        var mailing_country = $('#edit-'+fieldsegment+'-country-h').val();
    } else {
        var mailing_addr1 = $('#edit-'+fieldsegment+'-address-1').val();
        var mailing_addr2 = $('#edit-'+fieldsegment+'-address-2').val();
        var mailing_city  = $('#edit-'+fieldsegment+'-city').val();
        var mailing_county  = $('#edit-'+fieldsegment+'-county').val();
        var mailing_state = $('#edit-'+fieldsegment+'-state').val();
        var mailing_zip   = $('#edit-'+fieldsegment+'-zip').val();
    }

    var mailing_addr1_label      = $('#edit-mailing-addr1-label').val();
    var mailing_addr2_label      = $('#edit-mailing-addr2-label').val();
    var mailing_city_label       = $('#edit-mailing-city-label').val();
    var mailing_state_label      = $('#edit-mailing-state-label').val();
    var mailing_zip_label        = $('#edit-mailing-zip-label').val();
    var mailing_province_label   = $('#edit-mailing-province-label').val();
    var mailing_postalcode_label = $('#edit-mailing-postalcode-label').val();

    var mailing_addr1_css = '';
    var mailing_city_css  = '';
    var mailing_state_css = '';
    var mailing_zip_css   = '';

    if ($('label[for="edit-'+fieldsegment+'-address-1"]').length && $('label[for="edit-'+fieldsegment+'-address-1"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_addr1_css = 'error';
    }
    if ($('label[for="edit-'+fieldsegment+'-city"]').length && $('label[for="edit-'+fieldsegment+'-city"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_city_css = 'error';
    }
    if ($('label[for="edit-'+fieldsegment+'-state"]').length && $('label[for="edit-'+fieldsegment+'-state"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_state_css = 'error';
    }
    if ($('label[for="edit-'+fieldsegment+'-zip"]').length && $('label[for="edit-'+fieldsegment+'-zip"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_zip_css = 'error';
    } else if ($('#'+fieldsegment+'-zip-error').length) {
        mailing_zip_css = 'error';
    }

    if (!mailing_addr1) {mailing_addr1 = '';}
    if (!mailing_addr2) {mailing_addr2 = '';}
    if (!mailing_city) {mailing_city = '';}
    if (!mailing_state) {mailing_state = '';}
    if (!mailing_zip) {mailing_zip = '';}
    if (!mailing_country) {mailing_country = '';}

    if (fieldsegment == 'altmailing') {
        ln_container = 'alt-localname-container';
    }
    var user_selected = ( typeof(origin) != 'undefined' || origin == 'onready' ) ? false : true;

    // Swith places for first and last name fields for China
    var $lNameWrapper = $("#edit-last-name-wrapper").parent(),
        $fNameWrapper = $("#col-left #edit-first-name-wrapper").parent();

    if (selectedCountry == "CN") {
        $fNameWrapper.before($lNameWrapper);
        $lNameWrapper.parent().addClass("CN");
    }
    else {
        $fNameWrapper.after($lNameWrapper);
        $lNameWrapper.parent().removeClass("CN");
    }

    var data_mail_country = {countryTo: selectedCountry, address1: mailing_addr1, address2: mailing_addr2, city: mailing_city, county: mailing_county, state: mailing_state, zip: mailing_zip, country: mailing_country, mailing_addr1_lbl: mailing_addr1_label, mailing_addr2_lbl:mailing_addr2_label, mailing_city_lbl:mailing_city_label, mailing_state_lbl:mailing_state_label,mailing_zip_lbl:mailing_zip_label,mailing_province_lbl:mailing_province_label,mailing_postalcode_lbl:mailing_postalcode_label,segment:fieldsegment,addr1_css:mailing_addr1_css,city_css:mailing_city_css,state_css:mailing_state_css,zip_css:mailing_zip_css,user_selected:user_selected};
    debug.error('***** data_mail_country', data_mail_country);

    $.post("/teslaaccount/mailing-country", data_mail_country,
        function(data) {
        if (origin) {
            container.html(data);
            container.css('display','block');
            showMailingState();
            if (fieldsegment == 'altmailing') {
                openAltContactDiv('noscroll');
            }
        } else {
            container.fadeOut(function() {
                container.html(data);
                container.fadeIn(function() {
                    showMailingState();
                });
            });
        }

        if ($.inArray(selectedCountry, ['JP', 'CN', 'HK', 'MO', 'TW', 'KR']) >= 0) {
            $('#'+ln_container).fadeIn('slow');
        }
        else {
            $('#'+ln_container).fadeOut('slow');
        }
    });

    var $phone_element = ((fieldsegment == 'altmailing') ? ($('#edit-altcontact-phone')) : ($('#edit-phone')));
    if (($phone_element.val() == '') || (($phone_element.val() != '') && ($phone_element.val().length <= 4))) {
        updatePhoneCode(selectedCountry, $phone_element);
    }

    function updatePhoneCode(country, element) {
        var tesla_country_mapping = getTeslaCountryMapping(country);
        var phone_code = (((typeof tesla_country_mapping != 'undefined') && (tesla_country_mapping != '')) ? ('+' + tesla_country_mapping.phone_code) : (''));
        element.val(phone_code);
    }

    function showMailingState() {
        var selectedCountry = document.getElementById('edit-'+fieldsegment+'-country').options[selectedCountryIndex].value;
        if (selectedCountry != 'CN') {
            //WEB-11244
            if (!$('#province-selectbox-hidden').length) {
                // select element styling
                if (!$('#'+fieldsegment+'-province-istextbox').length) {
                    $('#edit-'+fieldsegment+'-state').each(function() {
                        var title = $(this).attr('title');
                        if ( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
                        $(this)
                            .css({'z-index':13,'opacity':0,'-khtml-appearance':'none'})
                            // .after('<span id="mailing-state-overlay" class="select-mailing">' + title.substring(0,38) + '</span>')
                            .unbind('change')
                            .unbind('keyup')
                            .change(function() {
                                val = $('option:selected',this).text();
                                $('#'+fieldsegment+'-state-overlay').html(val.substring(0,22));
                            })
                            .keyup(function() {
                                val = $('option:selected',this).text();
                                $('#'+fieldsegment+'-state-overlay').html(val.substring(0,22));
                            })
                    });

                    var provPosition = $('#edit-'+fieldsegment+'-state').position();
                    var provPositionX = provPosition.left - 2;
                    var provPositionY = provPosition.top + 2;
                    if (selectedCountry == 'JP') {
                        provPositionX = provPositionX - 2;
                    }
                    $('#'+fieldsegment+'-state-overlay').css('left',provPositionX);
                    $('#'+fieldsegment+'-state-overlay').css('top',provPositionY);
                    if (origin) {
                        $('#mailing-state-overlay').fadeIn('fast');
                    } else {
                        // if ($('#edit-'+fieldsegment+'-state').css('display') == 'none') {
                            $('#'+fieldsegment+'-state-overlay').fadeIn('fast');
                        // }
                    }
                }
            }
            checkProfileRequiredFields('onready');
        } else {
            loadChinaRegions(fieldsegment);
            ////////////////////////////////
            // start province overlay
            if ($('#edit-'+fieldsegment+'-99-province').length && !$('#edit-'+fieldsegment+'-99-province-overlay').length) {
                $('#edit-'+fieldsegment+'-99-province').each(function() {
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-province-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-province-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-province-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var provPosition = $('#edit-'+fieldsegment+'-99-province').position();
                    var provPositionX = provPosition.left-2;
                    var provPositionY = provPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('left',provPositionX);
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('top',provPositionY);
                    $('#edit-'+fieldsegment+'-99-province-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var provPosition = $('#edit-'+fieldsegment+'99-province').position();
                    var provPositionX = provPosition.left-2;
                    var provPositionY = provPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('left',provPositionX);
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('top',provPositionY);
                    $('#edit-'+fieldsegment+'-99-province-overlay').fadeIn('slow');
                },1000);
            }

            ////////////////////////////////
            // start city overlay
            if ($('#edit-'+fieldsegment+'-99-city').length && !$('#edit-'+fieldsegment+'-99-city-overlay').length) {
                $('#edit-'+fieldsegment+'-99-city').each(function() {
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-city-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-city-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-city-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var cityPosition = $('#edit-'+fieldsegment+'-99-city').position();
                    var cityPositionX = cityPosition.left-2;
                    var cityPositionY = cityPosition.top; // -4
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('left',cityPositionX);
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('top',cityPositionY);
                    $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var cityPosition = $('#edit-'+fieldsegment+'-99-city').position();
                    var cityPositionX = cityPosition.left-2;
                    var cityPositionY = cityPosition.top; // -4
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('left',cityPositionX);
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('top',cityPositionY);
                    $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
                },1000);
            }

            ////////////////////////////////
            // start district overlay
            if ($('#edit-'+fieldsegment+'-99-district').length && !$('#edit-'+fieldsegment+'-99-district-overlay').length) {
                $('#edit-'+fieldsegment+'-99-district').each(function() {
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-district-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-district-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-district-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var distPosition = $('#edit-'+fieldsegment+'-99-district').position();
                    var distPositionX = distPosition.left-2;
                    var distPositionY = distPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('left',distPositionX);
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('top',distPositionY);
                    $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var distPosition = $('#edit-'+fieldsegment+'-99-district').position();
                    var distPositionX = distPosition.left-2;
                    var distPositionY = distPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('left',distPositionX);
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('top',distPositionY);
                    $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
                },1000);
            }
            //china dropdowns
            //change handler for province dropdown(updates city dropdown)
            $( "#edit-"+fieldsegment+"-99-province" ).change(function() {
                $('#edit-'+fieldsegment+'-99-city-overlay').hide();
                $( "#edit-"+fieldsegment+"-99-city" ).html('');
                    $.each( chinaPCDMap[this.value], function( i, object ) {
                        $( "<option>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-city");
                    });
                $( "#edit-"+fieldsegment+"-99-city" ).change(); //trigger city change event
                $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
            });

            //change handler for city dropdown(updates district dropdown)
            $( "#edit-"+fieldsegment+"-99-city" ).change(function() {
                $('#edit-'+fieldsegment+'-99-district-overlay').hide();
                $( "#edit-"+fieldsegment+"-99-district" ).html('');
                    var province = $("#edit-"+fieldsegment+"-99-province").val();
                    $.each( chinaPCDMap[province][this.value], function( k, v ) {
                        $( "<option>" ).attr( "value", v ).html(v).appendTo("#edit-"+fieldsegment+"-99-district");
                    });
                $( "#edit-"+fieldsegment+"-99-district" ).change();
                $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
            });
            checkProfileRequiredFields('onready');
        }
    }
}

//used both in user profile page , car profile page(registration block) and test drive page
var chinaPCDMap = ''; //holds mapping of china regions for dropdowns in china order flow ie. province[city][n][districts]
function loadChinaRegions(fieldsegment, populate) {
    populate = populate || false;
    if (chinaPCDMap == '') {
        $.getJSON( Drupal.settings.basePath + 'sites/all/modules/99bill/province_city_district_map.json', {
            format: "json"
        }).done(function( data ) {
            chinaPCDMap = data;
            if (!populate) {
                populateChinaDropdowns(fieldsegment,chinaPCDMap);
            }
        });
    } else {
        if (!populate) {
            populateChinaDropdowns(fieldsegment,chinaPCDMap);
        }
    }
}

function loadChinaCities(selectedProvince, citySelector, placeHolder) {
    var cityDropDownContent = '<option value="0">' + placeHolder + '</option>';

    var specialCity = ['北京', '天津', '上海', '重庆'];
    var cities = []
    if (chinaPCDMap[selectedProvince]) {
        if (_.indexOf(specialCity, selectedProvince) === -1) {
            cities = _.keys(chinaPCDMap[selectedProvince]);
        }
        else {
            cities = chinaPCDMap[selectedProvince][selectedProvince];
        }
        for(var i = 0, l = cities.length; i < l; i++) {
            cityDropDownContent += '<option value="' + (i + 1) + '">' + cities[i] + '</option>';
        }
    }
    citySelector.html(cityDropDownContent);
}

/**
  * China Order Flow function that gives value to the province/city/district dropdowns unique
  * to the country in the payment block. Only populates province dropdown and then triggers
  * change event to have the others be updated based on the value selected.
*/
function populateChinaDropdowns(fieldsegment, map) {
    var country = $('#edit-'+fieldsegment+'-99-hidden-country').val();
    //only use account values if account country is china since we need to match values with json map
    if (country == 'CN') {
        var p = ($('#edit-'+fieldsegment+'-99-hidden-province').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-province').val() : "北京");
        var c = ($('#edit-'+fieldsegment+'-99-hidden-city').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-city').val() : "北京");
        var d = ($('#edit-'+fieldsegment+'-99-hidden-district').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-district').val() : "东城区");
    } else {
        var p = "北京";
        var c = "北京";
        var d = "东城区";
    }

    //reset province dropdown before loading its values
    var _regIsPopulated = $("#reg-person-address1").val() != "";
    $( "#edit-"+fieldsegment+"-99-province" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择省").appendTo("#edit-"+fieldsegment+"-99-province"); //default value
    }
    _.each( map, function(object, i) {
        if (p == i && _regIsPopulated) {
            $( "<option selected>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-province");
        } else {
            $( "<option>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-province");
        }
    });
    $("#edit-"+fieldsegment+"-99-province").trigger('keyup');

    //city
    $( "#edit-"+fieldsegment+"-99-city" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择城市").appendTo("#edit-"+fieldsegment+"-99-city"); //default value
    }
    if (p != 0) {
        _.each( _.keys(map[p]), function( object, i, list) {
            if (c == object && _regIsPopulated) {
                $( "<option selected>" ).attr( "value", object ).html(object).appendTo("#edit-"+fieldsegment+"-99-city");
            } else {
                $( "<option>" ).attr( "value", object ).html(object).appendTo("#edit-"+fieldsegment+"-99-city");
            }
        });
    }
    $("#edit-"+fieldsegment+"-99-city").trigger('keyup');

    //district
    $( "#edit-"+fieldsegment+"-99-district" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择区").appendTo("#edit-"+fieldsegment+"-99-district"); //default value
    }
    if (p != 0 && c != 0) {
        _.each( map[p][c], function( value, i, list) {
            if (d == value && _regIsPopulated) {
                $( "<option selected>" ).attr( "value", value ).html(value).appendTo("#edit-"+fieldsegment+"-99-district");
            } else {
                $( "<option>" ).attr( "value", value ).html(value).appendTo("#edit-"+fieldsegment+"-99-district");
            }
        });
    }
    $("#edit-"+fieldsegment+"-99-district").trigger('keyup');
}

function selectPhotoFile() {
    if ($('#edit-picture-upload').length) {
        $('#edit-picture-upload').click();
    }
}

function submitChangePhoto() {
    // files[0]
    // .size, .type,
    // image/jpeg, image/png, image/gif, image/jpeg
    var file_error_msg = 'Sorry, there was an error saving your image.  Please try again.';
    var is_valid_filetype = false;
    var is_oversized_file = false;
    var aFileTypes = new Array();
    aFileTypes.push('image/jpeg');
    aFileTypes.push('image/jpg');
    aFileTypes.push('image/png');
    aFileTypes.push('image/gif');

    if ($('#edit-picture-upload').length) {
        var photo_file = document.getElementById('edit-picture-upload');
        for(var i=0;i<aFileTypes.length;i++) {
            if (!$.browser.msie) {
                if (photo_file.files[0].type == aFileTypes[i]) {
                    is_valid_filetype = true;
                }
                if (photo_file.files[0].size > 2097152) {
                    is_oversized_file = true;
                }
            } else {
                if (photo_file.value.toLowerCase().indexOf(aFileTypes[i].toLowerCase())) {
                    is_valid_filetype = true;
                }
                if (photo_file.size > 2097152) {
                    is_oversized_file = true;
                }
            }
        }

        if (is_valid_filetype == true && is_oversized_file == false) {
            $('#changephoto-processing-img').fadeIn('fast');
            // save the rest of the form
            document.forms['user-profile-form'].submit();
        } else {
            if (is_valid_filetype == false) {
                file_error_msg = 'Your selected image is not one of the accepted file types.  Please select an image in either JPEG/JPG, PNG, or GIF file format.';
            } else if (is_oversized_file == true) {
                file_error_msg = 'Your selected image exceeds the file size limitations.  Please select a different image or resize your image.';
            }
            $('#changephoto-error-div').html('<p>'+file_error_msg+'</p>');
            $('#changephoto-error-div').slideDown('slow');
            $('#changephoto-processing-img').css('display','none');
        }
    }
}

function profileFillEmail(obj) {
    if ($('#edit-mail').length) {
        $('#edit-mail').val(obj.value);
    }
}

function profileFillUsername(obj) {
    if ($('#edit-name').length) {
        $('#edit-name').val(obj.value);
    }
    $(obj).blur(function () {
         $(obj).val(trim(obj.value));
         $('#edit-name').val(trim(obj.value));
    });
}

function submitChangePassword() {

    if ($('#changepwd-error-div').css('display') == 'block') {
        $('#changepwd-error-div').css('display','none');
    }

    var form_error = 0;
    var form_error_msg = '';
    var container = $('#changepwd-content-body');
    var current_pwd = $('#edit-changepwd-current').val();
    var new_pwd = $('#edit-pass-pass1').val();
    var confirm_pwd = $('#edit-pass-pass2').val();
    var uid = $('#edit-profile-uid').val();
    var user_email = $('#edit-email').val();
    var user_name = $('#edit-username').val();

    var hasLetters = new_pwd.match(/[a-zA-Z]+/);
    var hasNumbers = new_pwd.match(/[0-9]+/);
    var hasPunctuation = new_pwd.match(/[^a-zA-Z0-9]+/);
    var hasCasing = new_pwd.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

    // start validate
    if (current_pwd == null || current_pwd == '') {
        form_error = 1;
        form_error_msg = $('#edit-profile-cpwd-error').val() + '<br>';
    }
    if (new_pwd == null || new_pwd == '') {
        form_error = 1;
        form_error_msg = form_error_msg + $('#edit-profile-npwd-error').val() + '<br>';
    }
    if (confirm_pwd == null || confirm_pwd == '') {
        form_error = 1;
        form_error_msg = form_error_msg + $('#edit-profile-cfpwd-error').val() + '<br>';
    }
    if (form_error == 0 && new_pwd != confirm_pwd) {
        form_error = 1;
        form_error_msg = $('#edit-profile-pwdmatch-error').val();
    }
    if (form_error == 0 && new_pwd.length < 8) {
        form_error = 1;
        form_error_msg = $('#edit-profile-pwdlen-error').val();
    }
    else{
        var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
        strength_pass = count > 1 ? "pass" : "fail";
            if (strength_pass == "fail") {
                form_error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                form_error = 1;
            }
    }

    if (form_error != 0) {
        $('#changepwd-error-div').html(form_error_msg);
        $('#changepwd-error-div').slideDown('slow');
    } else {
        var destination = $('#edit-profile-destination').val(),
            finalDestination = destination.replace('?success=true', '');
        $('#changepwd-processing-img').fadeIn('fast');
        $.post("/teslaaccount/change-password", {current_pass: current_pwd, new_pass: new_pwd, uid:uid, email:user_email, username:user_name}, function(data) {
            if (data.success == 'true') {
                window.location.href = finalDestination + '?success=true';
            } else {
                $('#changepwd-error-div').html(Drupal.t('Sorry, there was an error in saving your new password, please try again.'));
                $('#changepwd-error-div').slideDown('slow');
                $('#changepwd-processing-img').css('display','none');
            }
        }, 'json');
    }

}

function submitUserEditForm(origin) {
    // validate the form fields
    var form_error = 0;
    var junk_data  = 0;
    var form_error_msg = '';
    var junk_data_msg  = '';
    var username      = $('#edit-username').val();
    var fname         = $('#edit-first-name').val();
    var lname         = $('#edit-last-name').val();
    var email         = $('#edit-mail').val();
    var phone         = $('#edit-phone').val();
    var mailing_addr1 = $('#edit-mailing-address-1').val();
    var mailing_city  = $('#edit-mailing-city').val();
    var mailing_zip   = $('#edit-mailing-zip').val();
    if ($('#istextbox-mailing').length) {
        var state = $('#edit-mailing-state').val();
    }

    var contact_error        = 0;
    var altcontact_error     = 0;
    var mail_error           = 0;
    var altmail_error        = 0;
    var aFields              = new Array();
    var aErrorFields         = new Array();
    var has_alt_contact      = 'false';
    var isowner              = 'false';
    var is_adding_altcontact = 'false';
    // alternate contact fields
    var ac_fname             = $('#edit-altcontact-firstname').val();
    var ac_lname             = $('#edit-altcontact-lastname').val();
    var ac_email             = $('#edit-altcontact-mail').val();
    var ac_phone             = $('#edit-altcontact-phone').val();
    var ac_addr1             = $('#edit-altmailing-address-1').val();
    var ac_city              = $('#edit-altmailing-city').val();
    var ac_zip               = $('#edit-altmailing-zip').val();
    if ($('#istextbox-altmailing').length) {
        var ac_state = $('#edit-altmailing-state').val();
    }

    $('#profile-msg-div').css('display','none');
    $('#profile-alt-msg-div').css('display','none');

    if ($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
        has_alt_contact = 'true';
    }

    if ($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1') {
        is_adding_altcontact = 'true';
    }

    if ($('#edit-profile-teslaAccountId').length && $('#edit-profile-teslaAccountId').val() != '') {
        isowner = 'true';
    }

    aFields.push('username');
    aFields.push('first-name');
    aFields.push('last-name');
    aFields.push('mail');
    aFields.push('phone');
    aFields.push('mailing-address-1');
    aFields.push('mailing-city');
    if (state) {
        aFields.push('mailing-state');
    }
    aFields.push('mailing-zip');

    if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
        aFields.push('altcontact-firstname');
        aFields.push('altcontact-lastname');
        aFields.push('altcontact-mail');
        aFields.push('altcontact-phone');
        aFields.push('altmailing-address-1');
        aFields.push('altmailing-city');
        if ($('#istextbox-altmailing').length) {
            aFields.push('altmailing-state');
        }
        aFields.push('altmailing-zip');
    }

    for(var i=0;i<aFields.length;i++) {
        if ($('label[for="edit-'+aFields[i]+'"]').length && $('label[for="edit-'+aFields[i]+'"]').attr('style')) {
            $('label[for="edit-'+aFields[i]+'"]').removeAttr('style');
        }
    }

    if (username == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-username-error').val() + '<br>';
        aErrorFields.push('username');
    }

    if (fname == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-fname-error').val() + '<br>';
        aErrorFields.push('first-name');
    }

    if (lname == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-lname-error').val() + '<br>';
        aErrorFields.push('last-name');
    }

    if (email == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
        aErrorFields.push('email');
    } else if (email != '' && checkEmail(email) == false) {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
        aErrorFields.push('email');
    }

    // validate if is owner, then validate mailing address
    if (isowner == 'true' || has_alt_contact == 'true') {

        if (phone == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-phone-error').val() + '<br>';
            aErrorFields.push('phone');
        }
        if (mailing_addr1 == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-mailingaddr1-error').val() + '<br>';
            aErrorFields.push('mailing-address-1');
        }
        if (mailing_city == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-city-error').val() + '<br>';
            aErrorFields.push('mailing-city');
        }
        if (/[\+\-\!\@\#\$\%\^\&\*\(\)\;\\\/\<\>\{\}\[\]\?\¿\=]+/.test(mailing_city)) {
            form_error = 1;
            junk_data = 1;
            junk_data_msg = Drupal.t('City contains invalid characters.');
            aErrorFields.push('mailing-city');
        }
        if (state) {
            if (mailing_state == '') {
                form_error = 1;
                contact_error++;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-state-error').val() + '<br>';
                aErrorFields.push('mailing-state');
            }
        }
        mailing_country = $('#edit-mailing-country').val();
        if (mailing_country != 'CN') {
            if (!isValidPostalCode(mailing_zip, mailing_country)) {
                postal_code_formatting = getPostalCodeRegexMatrix(mailing_country);
                mail_error_message_label = 'Format: ';
                form_error = 1;
                mail_error = 1;
                var mail_error_message_sample = (postal_code_formatting.sample != undefined) ? (Drupal.t(mail_error_message_label) + postal_code_formatting.sample) : ('');
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-zip-error').val() + '<br>';
                aErrorFields.push('mailing-zip');
            }
        }
    }

    // start validation of alternate contact fields only if any one field has been filled in
    // validate only if at least one text field is filled out at the time of submit
    // if ((ac_fname != undefined && ac_fname != '') || (ac_lname != undefined && ac_lname != '') || (ac_email != undefined && ac_email != '') || (ac_phone != undefined && ac_phone != '') || (ac_addr1 != undefined && ac_addr1 != '') || (ac_city != undefined && ac_city != '') || (ac_zip != undefined && ac_zip != '')) {
    if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
        if (ac_fname == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-fname-error').val() + '<br>';
            aErrorFields.push('altcontact-firstname');
            altcontact_error++;
        }
        if (ac_lname == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-lname-error').val() + '<br>';
            aErrorFields.push('altcontact-lastname');
            altcontact_error++;
        }
        if (ac_email == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
            aErrorFields.push('altcontact-mail');
            altcontact_error++;
        } else if (ac_email != '' && ac_email != undefined && checkEmail(ac_email) == false) {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
            aErrorFields.push('altcontact-mail');
            altcontact_error++;
        }
        if (ac_phone == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-phone-error').val() + '<br>';
            aErrorFields.push('altcontact-phone');
            altcontact_error++;
        }
        if (ac_addr1 == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-mailingaddr1-error').val() + '<br>';
            aErrorFields.push('altmailing-address-1');
            altcontact_error++;
        }
        if (ac_city == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-city-error').val() + '<br>';
            aErrorFields.push('altmailing-city');
            altcontact_error++;
        }
        if (/[\+\-\!\@\#\$\%\^\&\*\(\)\;\\\/\<\>\{\}\[\]\?\¿\=]+/.test(ac_city)) {
            form_error = 1;
            junk_data = 2;
            junk_data_msg = Drupal.t('City contains invalid characters.');
            aErrorFields.push('altmailing-city');
        }
        if ($('#istextbox-altmailing').length) {
            if (ac_state == '') {
                form_error = 1;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-state-error').val() + '<br>';
                aErrorFields.push('altmailing-state');
                altcontact_error++;
            }
        }
        altmailing_country = $('#edit-altmailing-country').val();
        if (altmailing_country != 'CN') {
            if (!isValidPostalCode(ac_zip, altmailing_country)) {
                postal_code_formatting = getPostalCodeRegexMatrix(altmailing_country);
                altmail_error_message_label = 'Format: ';
                form_error = 1;
                altmail_error = 1;
                var altmail_error_message_sample = (postal_code_formatting.sample != undefined) ? (Drupal.t(altmail_error_message_label) + postal_code_formatting.sample) : ('')
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-zip-error').val() + '<br>';
                aErrorFields.push('altmailing-zip');
            }
        }
    }

    _.each(["contantprefernce", "atthesetimes"], function(el) {
        $("." + el + "-container", "#content-body").each(function() {
            var _contactPref = [];

            $(this).find("label").each(function() {
                var _that = $(this);

                if (_that.hasClass("on")) {
                    _contactPref.push(_that.data("section"));
                }

                if (_contactPref.length) {
                    _that.closest(".preferences").find("input").val(
                        _contactPref.join("_").replace(Tesla.user.contactPrefTime.join("_"), "ANYTIME")
                    );
                }
            })
        })

    })

    if (form_error != 0) {
        // remove existing divs
        if ($('#page-disable').length && !$('#profile-changepwd-div').is(':visible')) {
            $('#page-disable').remove();
        }
        if ($('#error-popup').length) {
            $('#error-popup').remove();
        }
        if ($('#processing-div').length && $('#processing-div').css('display') == 'block') {
            $('#processing-div').css('display','none');
        }

        var error_message = Drupal.t('A required field has been left blank. It is highlighted below in red.');
        var alt_error_message = Drupal.t('A required field has been left blank. It is highlighted below in red.');

        if (contact_error > 1) {
            error_message = Drupal.t('Some required fields have been left blank. They are highlighted below in red.');
        }
        if (altcontact_error > 1) {
            alt_error_message = Drupal.t('Some required fields have been left blank. They are highlighted below in red.');
        }
        if ((mail_error != 0) && (mailing_zip.trim())) {
            error_message = ((contact_error > 0) ? (error_message + '<br/>') : ('')) + Drupal.t('Postal Code is not valid. ') + mail_error_message_sample;
        }
        if ((altmail_error != 0) && (ac_zip.trim())) {
            alt_error_message = ((altcontact_error > 0) ? (alt_error_message + '<br/>') : ('')) + Drupal.t('Postal Code is not valid. ') + altmail_error_message_sample;
        }

        // weigh which section has more errors and scroll to it.
        if ((contact_error != 0) || (mail_error != 0)) {
            var scrollto_div = 'profile-msg-div';
            $('#profile-msg-div').css('display','block');
            $('#profile-msg-content-div').html(error_message);
            $('#profile-msg-content-div').fadeIn('slow');
            // $('#mailing-country-overlay').fadeOut('slow',function() {
                $('#mailing-country-overlay').remove();
            // });
        } else {
            if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                var scrollto_div = 'profile-alt-msg-content-div';
                $('#profile-alt-msg-div').css('display','block');
                $('#profile-alt-msg-content-div').html(alt_error_message);
                $('#profile-alt-msg-content-div').fadeIn('slow');
            }
        }

        if (junk_data != 0) {
            if (junk_data == 2) {
                var scrollto_div = 'profile-alt-msg-content-div';
                $('#profile-alt-msg-div').css('display','block');
                $('#profile-alt-msg-content-div').html(junk_data_msg);
                $('#profile-alt-msg-content-div').fadeIn('slow');

            } else {
                var scrollto_div = 'profile-msg-div';
                $('#profile-msg-div').css('display','block');
                $('#profile-msg-content-div').html(junk_data_msg);
                $('#profile-msg-content-div').fadeIn('slow');
                $('#mailing-country-overlay').remove();
            }
        }

        if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
            $('#altmailing-country-overlay').remove();
        }

        $("html, body").animate({ scrollTop: ($("#"+scrollto_div).offset().top)-20 }, "slow",function() {
            if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                changeProfileCountry('profile-alt-mailing-addr','altmailing');
            }
            if (!$('#mailing-country-overlay').length) {
                setTimeout(function() {
                    setMailingCountryOverlay('submitUserEditForm');
                },1000);
            }
            if (has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                setTimeout(function() {
                    setAltMailingCountryOverlay('error');
                },1000);
            }
        });

        // $('#page').append('<div id="page-disable"></div>');
        // $('#page').append('<div id="profile-error"></div>');
        // var page_height = $(document).height();
        // var page_width = $(window).width();
        // var window_height = $(window).height();
        // var y_position = ((window_height/2));
        // var x_position = (page_width/2);
        // var div_width = $('#profile-error').width();
        // var div_height = $('#profile-error').height();
        // div_width = div_width/2;
        // div_height = div_height/2;
        // y_position = y_position - div_height;
        // x_position = x_position - div_width;
        // $('#profile-error').css('top',y_position);
        // $('#profile-error').css('left',x_position);

        // var error_msg_hdr = '<p><strong>'+$('#edit-profile-error-hdr').val()+'</strong></p>';
        // form_error_msg = error_msg_hdr + form_error_msg;
        // form_error_msg = form_error_msg + '<br><input type="button" name="closePopup" id="closePopup" value=" '+$('#edit-profile-error-showme').val()+' " />';
        // $('#profile-error').html(form_error_msg);

        if (aErrorFields.length > 0) {
            for(var i=0;i<aErrorFields.length;i++) {
                $('label[for="edit-'+aErrorFields[i]+'"]').attr('style','font-weight:bold;color:#cc0000;');
            }
        }

        // $('#page-disable').css('height',page_height);
        // $('#page-disable').fadeIn('slow', function() {
        //     $('#profile-error').css('display','block');
        // });

        // $('#closePopup').click(function() {
        //     $('#profile-error').css('display','none');
        //     $('#page-disable').fadeOut('slow',function() {
        //         $(this).remove();
        //         $('#profile-error').remove();
        //     });
        // });

        // $('#page-disable').click(function() {
        //     $('#profile-error').css('display','none');
        //     $('#page-disable').fadeOut('slow',function() {
        //         $(this).remove();
        //         $('#profile-error').remove();
        //     });
        // });

    } else {
        // show the "doing something" graphic overlay
        if (!origin) {
            showProcessingDiv('');
        }

        // remove the state/country overlays
        if ($('#mailing-country-overlay').length) {
            $('#mailing-country-overlay').css('display','none');
            $('#mailing-state-overlay').css('display','none');
        }
        if ($('#altmailing-country-overlay').length) {
            $('#altmailing-country-overlay').css('display','none');
            $('#altmailing-state-overlay').css('display','none');
        }

        // submit the form
        debug.error( $('#user-profile-form').serialize() );
        document.getElementById('user-profile-form').submit();

    }
}

// function submitSignInForm(mode,destination) {
//     if (mode == 'join') {
//         window.location.href=destination;
//     } else {
//         document.forms['user-login'].submit();
//     }
// }

function submitLoginForm(mode,destination) { // D7-TODO check if this is used

    var form_error = 0;
    var username_error = 0;
    var username_error_msg = '';
    var pass_error = 0;
    var pass_error_msg = '';
    var display_msg = '';
    var top_offset = -30;

    if (mode == 'join') {
        window.location.href=destination;
    } else {

        if ($('#edit-name')) {
            if ($('#edit-name').val() == '') {
                form_error = 1;
                username_error = 1;
                username_error_msg = 'Please enter a username';
                if (Drupal.settings.tesla.country == 'DE') {
                    username_error_msg = 'Benutzername eingeben.';
                } else if (Drupal.settings.tesla.country == 'FR') {
                    username_error_msg = 'Veuillez entrer un username.';
                } else if (Drupal.settings.tesla.country == 'IT') {
                    username_error_msg = 'Per favore inserisci uno username.';
                } else if (Drupal.settings.tesla.country == 'NL') {
                    username_error_msg = 'Geef een gebruikersnaam in.';
                } else if (Drupal.settings.tesla.country == 'JP') {
                    username_error_msg = 'ユーザー名を入力してください。';
                }
            }
        }

        if ($('#edit-pass')) {
            if ($('#edit-pass').val() == '') {
                form_error = 1;
                pass_error = 1;
                pass_error_msg = 'Please enter a password';
                if (Drupal.settings.tesla.country == 'DE') {
                    pass_error_msg = 'Bitte geben Sie ein gültiges Passwort ein.';
                } else if (Drupal.settings.tesla.country == 'FR') {
                    pass_error_msg = 'Veuiller entrer un mot de passe valide.';
                } else if (Drupal.settings.tesla.country == 'IT') {
                    pass_error_msg = 'Per favore inserisci una password valida.';
                } else if (Drupal.settings.tesla.country == 'NL') {
                    pass_error_msg = 'Geef een wachtwoord in.';
                } else if (Drupal.settings.tesla.country == 'JP') {
                    pass_error_msg = '有効なパスワードを入力してください。';
                }
            }
        }

        if (form_error > 0) {

            if ($('#messages-wrapper').length) {
                if ($('#messages-wrapper').css('display') == 'block') {
                    $('#messages-wrapper').remove();
                }
            }

            if (username_error == 1) {
                $('label.edit-name').attr('class','label-error');
                display_msg = username_error_msg;
            }

            if (pass_error == 1) {
                $('label.edit-pass').attr('class','label-error');
                display_msg = pass_error_msg;
                top_offset = 55;
            }

            if (username_error == 1 && pass_error == 1) {
                display_msg = username_error_msg + '<br>' + pass_error_msg;
                top_offset = -26;
            }

            display_msg = Drupal.t('We could not sign you in using the information you provided. Please try again.');
            top_offset = 55;

            $('#content-body').append('<div id="form-error-popup-rt"></div>');
            var pop_position = $('#edit-name').position();
            var x_position = pop_position.left-270;
            var y_position = pop_position.top+top_offset;
            $('#form-error-popup-rt').css('left',x_position);
            $('#form-error-popup-rt').css('top',y_position);
            $('#form-error-popup-rt').css('width','225px');
            $('#form-error-popup-rt').css('padding-left','15px');
            $('#form-error-popup-rt').css('padding-right','30px');
            $('#form-error-popup-rt').css('padding-top','20px');
            $('#form-error-popup-rt').css('font-size','11px');
            $('#form-error-popup-rt').css('line-height','15px');
            $('#form-error-popup-rt').html(display_msg);
            $('#form-error-popup-rt').fadeIn('fast');
        } else {
            // create login and username cookies
            var tesla_username_cookie = readCookie('tesla_username');
            // create username save cookie
            // create username for all cases
            var tmp_cookie_val = $('#edit-name').val();
            tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
            createCookie('tesla_username',tmp_cookie_val,360);

            var login_email_username = $('#edit-name').val();
            var login_register_url = $('#register-url').val();
            $.post("/user/check-shell", { email_username:login_email_username },
                function(data) {
                    if (data == 'shell') {
                        location.href=login_register_url+'?email='+login_email_username+'&shell=true';
                    } else {
                        document.forms['user-login'].submit();
                    }
            });

        }
    }

}

// check fields on each key input & only activate continue button when fields are filled D7-TODO check if this is used
function checkCreateAcctFields(origin) {
    var form_error = 0;

    // WEB-8822 / TFM
    // --------------
    // var uname = $('#edit-name').val();
    // --------------

    var email = $('#edit-mail').val();

    // trim and re-assign email + username only on blur
    $('#edit-mail').blur(function () {
         $('#edit-mail').val( trim($('#edit-mail').val()));
    });


    // WEB-8822 / TFM
    // --------------
    // $('#edit-name').blur(function () {
    //      $('#edit-name').val( trimWS($('#edit-name').val()));
    // });
    // --------------

    if (origin) {
        var fname = $('#edit-first-name').val();
        var lname = $('#edit-last-name').val();
        var password = $('#edit-pass-pass1').val();
        var password_confirm = $('#edit-pass-pass2').val();

        // WEB-8822 / TFM
        // --------------
        if ($("#edit-mollom-captcha-wrapper").length) {
            var captcha = $('#edit-mollom-captcha').val();
        }
        // --------------

        if (fname === '') {
            form_error = 1;
        }
        else if (lname === '') {
            form_error = 1;
        }
        else if (password === '') {
            form_error = 1;
        }
        else if (password_confirm === '') {
            form_error = 1;
        }
        // WEB-8822 / TFM
        // --------------
        else if (captcha === '') {
            form_error = 1;
        }
        // --------------

        if (
            $('.password-description').length &&
            $('.password-description').css('display') == 'block' &&
            $('#edit-pass-pass2').length &&
            $('#edit-pass-pass2').val() != '')
        {
            $('.password-description').css('display','none');
        }

    }

    // WEB-8822 / TFM
    // --------------
    // if (uname == '') {
    //     form_error = 1;
    // }
    // --------------

    if (checkEmail(email) == false) {
        form_error = 1;
    }

    // if ($('#useremail-check-message').css('display') == 'block') {
    //     form_error = 7;
    // }

    // WEB-9309 / TFM
    // ------------------------
    // if (form_error == 1) {
    //     // if ($('#messages-wrapper').length) {
    //     //     $('#messages-wrapper').fadeOut('slow');
    //     // }
    //     $('#btnCreateAccount').css('opacity','0.5');
    //     $('#btnCreateAccount').unbind('click');
    //     $('#btnCreateAccount').unbind('keyup');
    // } else {
    if (form_error === 0) {
    // ------------------------
        $('#edit-submit').unbind('click')
        .unbind('keyup')
        .css('opacity','1')
        .click(function() {
            submitCreateAcctForm(origin);
        })
        .keyup(function(event) {
            checkKeyPressed(event);
        });
    }
    else{
        $('#btnCreateAccount').unbind('click').unbind('keyup').css('opacity','0.5');
    }

}

// submit create account form D7-TODO check if this is used
function submitCreateAcctForm(origin) {
    var form_error = 0;

    // WEB-8822 / TFM
    // --------------
    var uname_error = 0;
    // --------------

    var email_error = 0;

    // WEB-8822 / TFM
    // --------------
    var uname = $('#edit-name').val();
    // --------------

    var email = $('#edit-mail').val();
    var is_shell = $('#edit-is-shell').val();
    if (origin) {
        var fname = $('#edit-first-name').val();
        var lname = $('#edit-last-name').val();
        var password = $('#edit-pass-pass1').val();
        var password_confirm = $('#edit-pass-pass2').val();

        var hasLetters = password.match(/[a-zA-Z]+/);
        var hasNumbers = password.match(/[0-9]+/);
        var hasPunctuation = password.match(/[^a-zA-Z0-9]+/);
        var hasCasing = password.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

        if (fname == '') {
            form_error = 1;
        }
        if (lname == '') {
            form_error = 1;
        }
        if (password == '') {
            form_error = 1;
        }
        if (password_confirm == '') {
            form_error = 1;
        }
    }

    // WEB-8822 / TFM
    // --------------
    // if (uname == '') {
    //     form_error = 1;
    //     uname_error = 'This is not a valid username format. Please try again.';
    // }
    // --------------

    if (checkEmail(email) == false) {
        form_error = 1;
        email_error = Drupal.t('This is not a valid email address format. Please try again.');
    }
    if (password != password_confirm) {
        form_error = 1;
    }
    if (form_error == 0) {
        if (password.length < 8) {
            error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
            form_error = 1;
        } else if (password == uname) {
            error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
            form_error = 1;
        }
        else{
            var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
            strength_pass = count > 1 ? "pass" : "fail";
                if (strength_pass == "fail") {
                    error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                    form_error = 1;
                }
        }
    }

    if (form_error == 1) {

        if ($('#pass-error').length) {
            $('#pass-error').remove();
        }
        if ($('#messages-wrapper').length) {
            $('#messages-wrapper').css('display','none');
        }
        // if ($('.password-description').length) {
        //     $('.password-description').css('display','none');
        // }

        $('#btnCreateAccount').unbind('click');

        if (!$('.password-description').length) {
            var position = $('#edit-pass-pass1').position();
            var x_offset = 0;
            var y_offset = 0;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');

            var pos_x = position.left + x_offset;
            var pos_y = position.top + y_offset;

            if ($('#pass-error').length) {
                $('#pass-error').remove();
            }
            // start fade in error popup

            $('#main-content').append('<div id="pass-error"></div>');
            $('#pass-error').html(error_msg);
            $('#pass-error').css('top',pos_y);
            $('#pass-error').css('left',pos_x);
            $('#pass-error').fadeIn('slow');
        }


    } else {
        // create username cookie
        var tesla_username_cookie = readCookie('tesla_username');
        var tesla_email_cookie = readCookie('tesla_email');

        // create username save cookie
        // in all cases
        if (tesla_username_cookie) {
            eraseCookie('tesla_username');
        }
        var tmp_cookie_val = $('#edit-name').val();
        tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
        createCookie('tesla_username',tmp_cookie_val);

        // create email save cookie
        // in all cases
        if (tesla_email_cookie) {
            eraseCookie('tesla_email');
        }
        var tmp_cookie_val = $('#edit-mail').val();
        tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
        createCookie('tesla_email',tmp_cookie_val);

        if (is_shell && is_shell == 'true') {
            debug.log('set the form action');
            var form_action = $('#edit-shell-url').val();
            $('#user-register').attr('action',form_action);
        }

        document.forms['user-register-form'].submit();

    }
}

// check email regex, includes "+" symbol for gmail D7-TODO check if this is used
function checkEmail(email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    if (/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

// trim white-space ie8 compatible
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}
function trim(string) {
    return string.trim();
}
// filter ie8 compatible - http://stackoverflow.com/questions/7153470/why-wont-filter-work-in-interent-explorer-8
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisp */) {
        "use strict";

        if (this === void 0 || this === null) {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") {
            throw new TypeError();
        }

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }
        return res;
    };
}

// generic js back
function backBtnSubmit(trigger) {
    var destination;
    if (typeof trigger == 'object') {
        destination = $(trigger).data('destination');
        if (destination) {
            location.href = Drupal.settings.tesla.localePrefix + destination;
        }
    }
    else if (typeof trigger == 'string' && trigger) {
        if (trigger == 'drive_orientation') {
            destination=$('#edit-drive-back-url').val();
        }
        else if (trigger == 'basic_info') {
            destination=$('#edit-basic-back-url').val();
        }
        else {
            destination = Drupal.settings.tesla.localePrefix + '/own';
        }
        location.href = destination;
    } else {
        history.back();
    }
}

// submit login form if enter btn is pressed
function checkKeyPressed(e,method) {
    var unicode=e.keyCode? e.keyCode : e.charCode;
    if (unicode == 13) {
        if (document.getElementById('change-reservation-form')) {
            submitChangeReservationForm(method);
            //document.forms['change-reservation-form'].submit();
        }
        else if (document.getElementById('tesla-buy-paymethod-form')) {
            submitPaymentForm();
            //document.forms['tesla-buy-paymethod-form'].submit();
        }
        else if (document.getElementById('tesla-buy-basic-form')) {
            submitBasicForm(method);
            //document.forms['tesla-buy-basic-form'].submit();
        }
        else if (document.getElementById('buy-form-complete-account')) {
            submitCompleteAcctForm();
        }
        else if ($('#page-user-edit').length || $('#page-user-me-edit').length) {
            submitUserEditForm();
        }
        else if ($('#page-booking-payment').length && (method == 'billing-btnnext-cont' || method == 'billing-btnnext-nocc' || method == 'billing-btnnext-achcont' || method == 'billing-terms-checkbox-div')) {
            submitBookingPaymentForm();
        }
    }
    else if (unicode == 32) {
        if ($('#res_agreement_div').length && !method) {
            setTermsCheckBox();
        }
        if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_div') {
            setGTUCheckBox();
        }
        if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_alt_div') {
            setGTUCheckBox('altmailing');
        }
        if ($('#billing-terms-checkbox-div').length && method == 'billing-terms-checkbox-div') {
            setACHPaymentCheckBox();
        }
        if ($('#billing-ach-checkbox-div').length && method == 'billing-ach-checkbox-div') {
            setACHPaymentCheckBox();
        }
    }
}

// display processing overlay
function showProcessingDiv(method) {

    // start fade in error popup
    var processing_img = '<img src="/tesla_theme/assets/img/processing-graphic.gif" />';
    var processing_msg = '';
    var $page = $('#page');
    $page.append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var window_height = $(window).height();
    var scrollLen = $(window).scrollTop();
    var y_position = (window_height/2)-150;
    y_position = y_position + scrollLen;
    $('#page-disable').css('height',page_height);
    var page_width = $(window).width();
    var x_position = (page_width/2)-250;
    $('#page-disable').css('z-index','9998');
    $('#page-disable').css('filter','alpha(opacity=60)');

    $page.append($('#processing-div'));
    $('#processing-div').css('top',y_position);
    $('#processing-div').css('left',x_position);
    // show custom message based on method var
    if (method == 'pp') {
        $('#processing-img').hide();
        processing_msg = 'Please wait, you are being sent to PayPal<br>to complete your reservation.';
    }

    if (processing_msg != '') {
        $('#processing-text-p').html(processing_msg);
    }
    $('#page-disable').fadeIn('slow', function() {
        $('#processing-div').show();
    });

}
// remove processing div
function killProcessingDiv() {
    $('#page-disable').remove();
    $('#processing-div').remove();
}

function checkTextAreaLength(textAreaObj,maxLen) {
    var currentLength = textAreaObj.value.length;
    var currentValue = textAreaObj.value;
    var newValue = '';
    var charsRemaining = maxLen - currentLength;
    if (currentLength > maxLen) {
        newValue = currentValue.substring(0,maxLen);
        document.getElementById(textAreaObj.id).value=newValue;
    }
    if (charsRemaining < 0) {
        charsRemaining = 0;
    }
    document.getElementById(textAreaObj.id+'_chars').value = charsRemaining;
}

// D7-TODO: Change to use native Drupal js functions
function gotoDesignStudio(model,locale,params) {
    var destination = '';
    var subdest = 'design/';
    if (model == 'mx' || model == 'mxs') {
        subdest = '';
    }
    if (locale && locale != '' && locale != 'en_US') {
        if (locale == 'ja_JP') {
            locale = 'jp';
        }
        if (locale == 'zh_CN') {
            locale = 'cn';
        }
    }
    if (locale != '') {
        destination = '/'+model+'/'+subdest;
    } else {
        destination = '/'+locale+'/'+model+'/'+subdest;
    }
    if (params != '') {
        destination += '?' + params;
    }
    window.location.href=destination;
}

function gotoURL(destination,locale) {

    if (locale && locale != '' && locale != 'en_US') {
        if (locale == 'ja_JP') {
            locale = 'jp';
        }
        if (locale == 'zh_CN') {
            locale = 'cn';
        }
        window.location.href='/'+locale+'/'+destination;
    } else {
        window.location.href='/'+destination;
    }

}

// mytesla profile js
function setGTUCheckBox(id) {
    var checkbox = 'edit-get-teslaupdates-check';
    var image = 'get-teslaupdates-checkbox';
    if (id) {
        if (id == 'gtu_div') {
            checkbox = 'newsletter';
            image = 'get-teslaupdates-checkbox';
        } else {
            checkbox = 'edit-get-teslaupdates-alt-check';
            image = 'get-teslaupdates-alt-checkbox';
        }
    }
    if ($('#'+checkbox).length) {
        if ($('#'+checkbox).val() == '0') {
            $('#'+checkbox).val('1');
            $('#'+image).attr('src','/tesla_theme/assets/img/own/own-terms-checkbox-on.png');
        } else {
            $('#'+checkbox).val('0');
            $('#'+image).attr('src','/tesla_theme/assets/img/own/own-terms-checkbox-off.png');
        }
    }
}

function openAltContactDiv(scroll) {
    changeProfileCountry('profile-alt-mailing-addr','altmailing');
    if ($('#edit-profile-hasalt-contact').val() == 'false') {
        $('#edit-profile-addingalt-contact').val(1);
        // $('#btnSelectDO').unbind('click');
    }
    $('#edit-profile-hasalt-contact').val('true');
    // checkProfileRequiredFields('open');
    if ($('#profile-alternate-contact').length) {
        if ($('#profile-alternate-contact').css('display') == 'none') {
            var altcontactlabel1 = $('#altcontact_label_1').val();
            var altcontactlabeltmp = $('#edit-profile-addcontact-tmp').val();
            $('#profile-addremove-icon').css('background-image','url(/tesla_theme/assets/img/icn_removecontact_32x32.png)');
            $('#profile-addremove-icon').css('float','right');
            $('#profile-addremove-icon').css('backgroundPosition','0px -2px');
            // $('#profile-addremove-icon').css('right','-20');
            $('#profile-addremove-title').css('float','right');
            $('#profile-addremove-title').html(altcontactlabel1);
            $('#profile-addremove-icon').before('<div id="profile-addremove-title-tmp"></div>');
            $('#profile-addremove-title-tmp').html(altcontactlabeltmp);
            $('#profile-alternate-contact').slideDown('slow',function() {
                // set position of country dropdown overlay
                var altCountryPosition = $('#edit-altmailing-country').position();
                var altCountryPositionX = altCountryPosition.left-3;
                var altCountryPositionY = altCountryPosition.top;
                var alt_ctry_code = $('#edit-altmailing-country').val().toLowerCase();
                var alt_ctry_label = $('#edit-altmailing-country option:selected').text().substring(0,24);
                $('#altmailing-country-overlay').css('left',altCountryPositionX);
                $('#altmailing-country-overlay').css('top',altCountryPositionY);
                // if locale supported country, show flag in dropdown
                if (alt_ctry_code == 'us' || alt_ctry_code == 'ca' || alt_ctry_code == 'au' || alt_ctry_code == 'nz' || alt_ctry_code == 'at' || alt_ctry_code == 'be' || alt_ctry_code == 'dk' || alt_ctry_code == 'de' || alt_ctry_code == 'fr' || alt_ctry_code == 'gb' || alt_ctry_code == 'it' || alt_ctry_code == 'nl' || alt_ctry_code == 'ch' || alt_ctry_code == 'hk' || alt_ctry_code == 'jp' || alt_ctry_code == 'cn' || ctry_code == 'tw' || ctry_code == 'kr' || ctry_code == 'es' || ctry_code == 'pt') {
                    $('#altmailing-country-overlay').html('<img src="/tesla_theme/assets/img/icn_'+alt_ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+alt_ctry_label);
                }
                // set position of state/province dropdown overlay
                if (!$('#altmailing-province-istextbox').length && $('#edit-altmailing-state').length) {
                    var provPosition = $('#edit-altmailing-state').position();
                    var provPositionX = provPosition.left - 2;
                    var provPositionY = provPosition.top + 2;
                    $('#altmailing-state-overlay').css('left',provPositionX);
                    $('#altmailing-state-overlay').css('top',provPositionY);
                }

                if (!scroll) {
                    $("html, body").animate({ scrollTop: ($("#profile-addremove-div").offset().top)-30 }, "slow");
                }

                $('#get_teslaupdates_alt_div').fadeIn('fast');
                // $('#altmailing-country-overlay').fadeIn('slow');
                setAltMailingCountryOverlay('origin');
                if ($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
                    $('#altmailing-country-overlay').fadeIn('slow');
                }
                // if ($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1') {
                //     $('#edit-altcontact-firstname').focus();
                // }
                // $('#altmailing-state-overlay').fadeIn('slow');
            });
            $('#profile-addremove-icon').unbind('click');
            $('#profile-addremove-icon').click(function() {
                removeAltContactDiv();
            });
            $('#profile-addremove-title').unbind('click');
            $('#profile-addremove-title').click(function() {
                removeAltContactDiv();
            });
        }
    }
}

function removeAltContactDiv() {
    if ($('#profile-alternate-contact').length) {
        if ($('#profile-alternate-contact').css('display') == 'block') {
            if ($('#edit-profile-addingalt-contact').val() == '1') {
                $('#edit-profile-addingalt-contact').val(0);
            }
            if ($('#edit-profile-altcontactid').length && $('#edit-profile-altcontactid').val() != '') {
                // start fade in error popup
                $('#page').append('<div id="page-disable"></div>');
                var page_height = $(document).height();
                var page_width = $(window).width();
                var window_height = $(window).height();
                var y_position = ((window_height/2));
                var x_position = (page_width/2);
                var div_width = $('#profile-removeprompt-div').width();
                var div_height = $('#profile-removeprompt-div').height();
                div_width = div_width/2;
                div_height = div_height/2;
                y_position = y_position - div_height;
                x_position = x_position - div_width;

                $('#page-disable').css('height',page_height);

                $('#profile-removeprompt-div').css('left',x_position);
                $('#profile-removeprompt-div').css('top',y_position);
                $('#profile-popup-closex').css('left',x_position-23);
                $('#profile-popup-closex').css('top',y_position-23);

                $('#page-disable').fadeIn('slow', function() {
                    $('#profile-removeprompt-div').css('display','block');
                    $('#profile-popup-closex').css('display','block');
                    $('#profile-popup-closex').unbind('click');
                    $('#profile-popup-closex').click(function() {
                        $('#removeprompt-btn-confirm-cancel').trigger('click');
                    });
                });
            } else {
                clearProfileAltContactFields();
                $('#profile-alt-msg-div').fadeOut('fast');
                $('#edit-profile-hasalt-contact').val('false');
                $('#profile-alt-mailing-addr').fadeOut('fast');
                $('#get_teslaupdates_alt_div').fadeOut('fast');
                $('#altmailing-state-overlay').remove();
                $('#altmailing-country-overlay').fadeOut('fast',function() {
                    $('#profile-alternate-contact').slideUp('slow',function() {
                        $('#profile-addremove-title-tmp').remove();
                        $('#profile-addremove-icon').css('background-image','url(/tesla_theme/assets/img/icn_addcontact_32x32.png)');
                        $('#profile-addremove-icon').css('background-position','-10px 0px');
                        $('#profile-addremove-icon').css('float','left');
                        $('#profile-addremove-title').css('float','left');
                        $('#profile-addremove-title').html($('#altcontact_label_2').val());
                        $("html, body").animate({ scrollTop: ($("#content-body").offset().top) }, "slow");
                        checkProfileRequiredFields('close');
                        // set the click function for re-opening altcontact div
                        $('#profile-addremove-icon').unbind('click');
                        $('#profile-addremove-icon').click(function() {
                            openAltContactDiv();
                        });
                        $('#profile-addremove-title').unbind('click');
                        $('#profile-addremove-title').click(function() {
                            openAltContactDiv();
                        });
                    });
                });
                $('#altmailing-country-overlay').remove();
            }
        }
    }
}

function clearProfileAltContactFields() {
    var aReqd = new Array();
    aReqd.push('altcontact-firstname');
    aReqd.push('altcontact-lastname');
    aReqd.push('altcontact-mail');
    aReqd.push('altcontact-phone');
    aReqd.push('altcontact-firstname');
    aReqd.push('altmailing-address-1');
    aReqd.push('altmailing-address-2');
    if ($('#altmailing-country').val() != 'JP') {
        aReqd.push('altmailing-city');
    }
    if ($('#altmailing-province-istextbox').length) {
        aReqd.push('altmailing-state');
    }
    aReqd.push('altmailing-zip');

    for(var i=0;i<aReqd.length;i++) {
        $('#edit-'+aReqd[i]).val('');
    }

}

function openChangePwdDiv() {
    if ($('#page-disable')) {
        $('#page-disable').remove();
    }
    // start fade in error popup
    $('#page').append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var page_width = $(window).width();
    var window_height = $(window).height();
    var y_position = ((window_height/2));
    var x_position = (page_width/2);
    var div_width = $('#profile-changepwd-div').width();
    var div_height = $('#profile-changepwd-div').height();
    div_width = div_width/2;
    div_height = div_height/2;
    y_position = y_position - div_height;
    x_position = x_position - div_width;

    $('#page-disable').css('height',page_height);

    $('#profile-changepwd-div').css('left',x_position);
    $('#profile-changepwd-div').css('top',y_position);
    $('#profile-popup-closex').css('left',x_position-23);
    $('#profile-popup-closex').css('top',y_position-23);

    $('#page-disable').fadeIn('slow', function() {
        $('#profile-changepwd-div').css('display','block');
        $('#edit-changepwd-current').focus();
        $('#profile-popup-closex').css('display','block');
        $('#profile-popup-closex').unbind('click');
        $('#profile-popup-closex').click(function() {
            $('#changepwd-btn-cancel').trigger('click');
        });
    });

}

function openChangePhotoDiv() {
    if ($('#page-disable')) {
        $('#page-disable').remove();
    }
    // start fade in error popup
    $('#page').append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var page_width = $(window).width();
    var window_height = $(window).height();
    var y_position = ((window_height/2));
    var x_position = (page_width/2);
    var div_width = $('#profile-changephoto-div').width();
    var div_height = $('#profile-changephoto-div').height();
    div_width = div_width/2;
    div_height = div_height/2;
    y_position = y_position - div_height;
    x_position = x_position - div_width;
    // if ($.browser.msie) {
    //     $('#page-disable').css('opacity','0.6');
    //     $('#page-disable').css('z-index','9999');
    //     $('#page').append($('#profile-changephoto-div'));
    //     $('#profile-changephoto-div').css('z-index','10000');
    // }

    $('#page-disable').css('height',page_height);

    $('#profile-changephoto-div').css('left',x_position);
    $('#profile-changephoto-div').css('top',y_position);
    $('#profile-popup-closex').css('left',x_position-23);
    $('#profile-popup-closex').css('top',y_position-23);

    $('#page-disable').fadeIn('slow', function() {
        $('#profile-changephoto-div').css('display','block');
        $('#profile-popup-closex').css('display','block');
        $('#profile-popup-closex').unbind('click');
        $('#profile-popup-closex').click(function() {
            $('#changephoto-btn-cancel').trigger('click');
        });
    });

}

function setProfileAltContactRadio(value) {
    if (value == 0) {
        $('#profile-contactprefs-radio1').css('background','url(/tesla_theme/assets/img/bg_radio_on.png)');
        $('#profile-contactprefs-radio2').css('background','url(/tesla_theme/assets/img/bg_radio_off.png)');
    } else {
        $('#profile-contactprefs-radio1').css('background','url(/tesla_theme/assets/img/bg_radio_off.png)');
        $('#profile-contactprefs-radio2').css('background','url(/tesla_theme/assets/img/bg_radio_on.png)');
    }
    if ($('#contact_prefs').length) {
        $('#contact_prefs').val(value);
    }
}

// D7-TODO: Do we still need this?
function checkPassEmailField(origin) {
    var email = $('#edit-name').val();
    var form_error = 0;

    if ($('#edit-name').length) {

        if (!email) {
            form_error = 1;
        }
        else if (email == '') {
            form_error = 1;
        }
        else if (!origin && checkEmail(email) == false) {
            form_error = 1;
        }
        if ($('#edit-pass').length) {
            var password = $('#edit-pass').val();
            if (!password) {
                form_error = 1;
            } else if (password == '') {
                form_error = 1;
            }
        }

        if (form_error == 0) {
            $('#btnSelectDO').css('opacity','1');
            $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').click(function(e) {
                if (origin && origin == 'login') {
                    submitLoginForm('login', null, e);
                }
                else {
                    submitPassForm();
                }
            });
        }
        else {
            $('#btnSelectDO').css('opacity','0.5');
            $('#btnSelectDO').unbind('click');
        }
    }
}

function checkChinaResetPasswordFields() {
    var inputEmail = $('#edit-name').val().trim();
    var inputReCaptcha = $('#china_recpatcha').val().trim();
    var submitButton = $('#btnSelectDO');
    if (inputEmail && checkEmail(inputEmail) && inputReCaptcha.length == 5) {
        submitButton.css('opacity','1')
            .unbind('click')
            .click(function() {
                submitPassForm();
            });
    }
    else {
        submitButton.css('opacity','0.5').unbind('click');
    }
}

function checkChangePasswordFields(action) {

    var form_error = 0;
    var password = $('#edit-pwd').val();
    var password_confirm = $('#edit-pwd-confirm').val();
    var username = $('#edit-username').val();
    var error_msg = Drupal.t('Your passwords don\’t match. Please try again.');

    $('label[for="edit-pwd"]').css('color','#666666');
    $('label[for="edit-pwd-confirm"]').css('color','#666666');

    if (password == '' || password == null) {
        form_error = 1;
    }
    if (password_confirm == '' || password_confirm == null) {
        form_error = 1;
    }

    if (action == 'submit') {
        if (password != password_confirm) {
            form_error = 1;
        }
        if (form_error == 0) {
            if (password.match(/[a-z]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if (password.match(/[A-Z]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if (password.match(/[0-9]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if (password.length < 6) {
                error_msg = Drupal.t('Your password must be longer than 6 characters.');
                form_error = 1;
            } else if (password == username) {
                error_msg = Drupal.t('Your password cannot be the same as your username.');
                form_error = 1;
            }
        }
    }

    if (form_error == 0) {
        if (action != 'submit') {
            // submit form
            $('#btnSelectDO').css('opacity','1');
            $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').click(function() {
                checkChangePasswordFields('submit');
            });
        } else {
            if ($('#pass-error').length) {
                $('#pass-error').remove();
            }
            // document.forms['user-pass-reset'].submit();
            var userid = $('#edit-uid').val();
            var container = $('#pass-reset-form-container');
            var page_origin = 'change';

            $.post("/user/reset-password", {uid: userid, pass: password, origin: page_origin},
            function(data) {
                if (data === 'error') {
                    error_msg = '<strong>'+Drupal.t('Reset Failed')+'</strong><br/>'+Drupal.t('There seems to have been an error saving your password. Please try again.');
                    setPassResetError('submit',error_msg);
                } else {
                    container.fadeOut(function() {
                        container.html(data);
                        container.fadeIn(function() {});
                    });
                }
            });
        }
    } else {
        setPassResetError(action,error_msg);
    }
}

function changeChinaRecaptcha() {
    var img = new Image();
    img.src = '/get_recaptcha?t=' + new Date().getTime();
    img.onload = function() {
        $('#china-recaptcha-image').attr('src', img.src);
    }
}

function setPassResetError(action,error_msg) {
    if ($('#password-description warning').length) {
        $('#password-description warning').css('display','none');
    }
    if (action == 'submit' && !$('.password-description.error').length) {
        if ($('#page-user-change-pass').length) {
            var position = $('#edit-pass-pass1').position();
            var x_offset = -270;
            var y_offset = 55;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');
        } else {
            var position = $('#edit-pass-pass1').position();
            var x_offset = 520;
            var y_offset = 203;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');
        }

        var pos_x = position.left + x_offset;
        var pos_y = position.top + y_offset;

        if ($('#pass-error').length) {
            $('#pass-error').remove();
        }
        // start fade in error popup

        $('#main-content').append('<div id="pass-error"></div>');
        $('#pass-error').html(error_msg);
        $('#pass-error').css('top',pos_y);
        $('#pass-error').css('left',pos_x);
        $('#pass-error').fadeIn('slow');
    }
    else {
        $('#btnSelectDO').css('opacity','0.5');
        $('#btnSelectDO').unbind('click');
    }
}

// D7-TODO: Do we still need this?
function submitPassForm(method) {

    if (method && method == 'cancel') {
        var dest = $('#destination').val();
        var locale_prefix = '';
        if (Drupal.settings.tesla.locale != 'en_US') {
            locale_prefix = Drupal.settings.tesla.locale;
            if (locale_prefix == 'ja_JP') {
                locale_prefix = 'jp';
            }
            if (locale_prefix == 'zh_CN') {
                locale_prefix = 'cn';
            }
            locale_prefix = '/' + locale_prefix;
        }

        dest = locale_prefix + '/user/login';
        window.location.href=dest;
    }
    else {
        document.forms['user-pass'].submit();
    }

}

function checkRefundMethod(obj) {
    var refund_type = obj.value;
    if ($('#tracking_number_p').length) {
        if (refund_type != 'ck') {
            if ($('#tracking_number_p').css('display') == 'block') {
                $('#tracking_number_p').fadeOut('slow');
            }
        }
        else {
            if ($('#tracking_number_p').css('display') == 'none') {
                $('#tracking_number_p').fadeIn('slow');
            }
        }
    }
}

function setAchAcctType(elemId) {
    if ($('#page-servicesignup-payment').length) {
        $('#billing-ach-accttype').val($('#'+elemId).attr('rel'));
        $('#paymethod_ach_checking').css('background-image','url(/tesla_theme/images/btn_radio_off.png?20150108)');
        $('#paymethod_ach_checking').css('background-size','24px 24px');
        $('#paymethod_ach_savings').css('background-image','url(/tesla_theme/images/btn_radio_off.png?20150108)');
        $('#paymethod_ach_savings').css('background-size','24px 24px');
        $('#paymethod_ach_corpchecking').css('background-image','url(/tesla_theme/images/btn_radio_off.png?20150108)');
        $('#paymethod_ach_corpchecking').css('background-size','24px 24px');
        $('#'+elemId).css('background-image','url(/tesla_theme/images/btn_radio_on.png?20150108)');
        $('#'+elemId).css('background-size','24px 24px');
    }

}

function toggleSubCheckBox() {
    if ($('input[id=edit-submitted-subscriptions--c-1]').is(":checked")) {
        $('input[id=edit-submitted-subscriptions--c-1]').attr('checked', false);
        // $("[name*='is_get_tesla_update_checkbox_present']").val('false');
        $('#subsCheckbox').css('background-position', '0px 0px');
    }
    else {
        $('input[id=edit-submitted-subscriptions--c-1]').attr('checked', true);
        // $("[name*='is_get_tesla_update_checkbox_present']").val('true');
        $('#subsCheckbox').css('background-position', '0px -21px');
    }
}

// D7-TODO: Do we still need this?
Tesla.modal = function(obj, params) {

    if (obj !== null && typeof(obj) != "undefined" ) {
        obj.colorbox(params);
    }
    else {
        return $.colorbox(params);
    }
};

function getLocalePrefix() {
    var localePrefix = ""; // en_US

    if (_.indexOf(["zh_CN","en_US"], Drupal.settings.tesla.locale) === -1) {
        localePrefix = Drupal.settings.tesla.locale;

        if (localePrefix == "ja_JP") {
            localePrefix = "jp";
        }

        localePrefix = "/" + localePrefix;
    }

    return localePrefix;
}

function use12HourClockForLocale() {
    var use12HourClock;
    var locale = Drupal.settings.tesla.locale;
    switch (locale) {
        case "":
        case "en_CA":
        case "en_US":
        case "fr_CA":
        case "en_AU":
        case "en_NZ":
        case "en_HK":
        case "zh_HK":
        case "en_MO":
        case "zh_MO":
        case "zh_TW":
        case "ko_KR":
            use12HourClock = true;
            break;
        default:
            use12HourClock = false;
            break;
    }
    return use12HourClock;
}

// D7-TODO: Move to a localize js file
function isEuCountryCode(twoCharCountryCode) {
    var twoCharCountryCode = twoCharCountryCode || Drupal.settings.tesla.country;
    twoCharCountryCode = twoCharCountryCode.toUpperCase();

    var regions_by_country = {
        "AD": "OT",
        "AE": "ME",
        "AF": "OT",
        "AG": "OT",
        "AI": "OT",
        "AL": "OT",
        "AM": "OT",
        "AN": "OT",
        "AO": "OT",
        "AQ": "OT",
        "AR": "OT",
        "AS": "OT",
        "AT": "EU",
        "AU": "AU",
        "AW": "OT",
        "AZ": "OT",
        "BA": "OT",
        "BB": "OT",
        "BD": "OT",
        "BE": "EU",
        "BF": "OT",
        "BG": "EU",
        "BH": "OT",
        "BI": "OT",
        "BJ": "OT",
        "BM": "OT",
        "BN": "OT",
        "BO": "OT",
        "BR": "OT",
        "BS": "OT",
        "BT": "OT",
        "BV": "OT",
        "BW": "OT",
        "BY": "OT",
        "BZ": "OT",
        "CA": "CA",
        "CC": "OT",
        "CD": "OT",
        "CF": "OT",
        "CG": "OT",
        "CH": "EU",
        "CI": "OT",
        "CK": "OT",
        "CL": "OT",
        "CM": "OT",
        "CN": "OT",
        "CO": "OT",
        "CR": "OT",
        "CU": "OT",
        "CV": "OT",
        "CX": "OT",
        "CY": "EU",
        "CZ": "EU",
        "DE": "EU",
        "DJ": "OT",
        "DK": "EU",
        "DM": "OT",
        "DO": "OT",
        "DZ": "OT",
        "EC": "OT",
        "EE": "OT",
        "EG": "OT",
        "EH": "OT",
        "ER": "OT",
        "ES": "EU",
        "EU": "EU",
        "ET": "OT",
        "FI": "EU",
        "FJ": "OT",
        "FK": "OT",
        "FM": "OT",
        "FO": "OT",
        "FR": "EU",
        "GA": "OT",
        "GB": "GB",
        "GD": "OT",
        "GE": "OT",
        "GF": "OT",
        "GH": "OT",
        "GI": "OT",
        "GL": "OT",
        "GM": "OT",
        "GN": "OT",
        "GP": "OT",
        "GQ": "OT",
        "GR": "EU",
        "GS": "OT",
        "GT": "OT",
        "GU": "OT",
        "GW": "OT",
        "GY": "OT",
        "HK": "HK",
        "HM": "OT",
        "HN": "OT",
        "HR": "EU",
        "HT": "OT",
        "HU": "EU",
        "ID": "OT",
        "IE": "EU",
        "IL": "OT",
        "IN": "OT",
        "IO": "OT",
        "IQ": "OT",
        "IR": "OT",
        "IS": "EU",
        "IT": "EU",
        "JM": "OT",
        "JO": "ME",
        "JP": "JP",
        "KE": "OT",
        "KG": "OT",
        "KH": "OT",
        "KI": "OT",
        "KM": "OT",
        "KN": "OT",
        "KP": "OT",
        "KR": "KR",
        "KW": "OT",
        "KY": "OT",
        "KZ": "OT",
        "LA": "OT",
        "LB": "OT",
        "LC": "OT",
        "LI": "EU",
        "LK": "OT",
        "LR": "OT",
        "LS": "OT",
        "LT": "OT",
        "LU": "EU",
        "LV": "OT",
        "LY": "OT",
        "MA": "OT",
        "MC": "EU",
        "MD": "OT",
        "ME": "OT",
        "MG": "OT",
        "MH": "OT",
        "MK": "OT",
        "ML": "OT",
        "MM": "OT",
        "MN": "OT",
        "MO": "MO",
        "MP": "OT",
        "MQ": "OT",
        "MR": "OT",
        "MS": "OT",
        "MT": "EU",
        "MU": "OT",
        "MV": "OT",
        "MW": "OT",
        "MX": "OT",
        "MY": "OT",
        "MZ": "OT",
        "NA": "OT",
        "NC": "OT",
        "NE": "OT",
        "NF": "OT",
        "NG": "OT",
        "NI": "OT",
        "NL": "EU",
        "NO": "EU",
        "NP": "OT",
        "NR": "OT",
        "NU": "OT",
        "NZ": "NZ",
        "OM": "OT",
        "PA": "OT",
        "PE": "OT",
        "PF": "OT",
        "PG": "OT",
        "PH": "OT",
        "PK": "OT",
        "PL": "OT",
        "PM": "OT",
        "PN": "OT",
        "PR": "OT",
        "PS": "OT",
        "PT": "EU",
        "PW": "OT",
        "PY": "OT",
        "QA": "OT",
        "RE": "OT",
        "RO": "OT",
        "RS": "OT",
        "RU": "OT",
        "RW": "OT",
        "SA": "OT",
        "SB": "OT",
        "SC": "OT",
        "SD": "OT",
        "SE": "EU",
        "SG": "OT",
        "SH": "OT",
        "SI": "OT",
        "SJ": "OT",
        "SK": "OT",
        "SL": "OT",
        "SM": "OT",
        "SN": "OT",
        "SO": "OT",
        "SR": "OT",
        "ST": "OT",
        "SV": "OT",
        "SY": "OT",
        "SZ": "OT",
        "TC": "OT",
        "TD": "OT",
        "TF": "OT",
        "TG": "OT",
        "TH": "OT",
        "TJ": "OT",
        "TK": "OT",
        "TL": "OT",
        "TM": "OT",
        "TN": "OT",
        "TO": "OT",
        "TR": "OT",
        "TT": "OT",
        "TV": "OT",
        "TW": "TW",
        "TZ": "OT",
        "UA": "OT",
        "UG": "OT",
        "UM": "OT",
        "US": "US",
        "UY": "OT",
        "UZ": "OT",
        "VA": "OT",
        "VC": "OT",
        "VE": "OT",
        "VG": "OT",
        "VI": "OT",
        "VN": "OT",
        "VU": "OT",
        "WF": "OT",
        "WS": "OT",
        "YE": "OT",
        "YT": "OT",
        "ZA": "OT",
        "ZM": "OT",
        "ZW": "OT"
    };

    return regions_by_country[twoCharCountryCode] === "EU";
}

// Enable social sharing widget
function initSocialSharingWidget() {
    var widget = $('#tesla-social-widget');
    var type = null;
    var url = null;
    var message = null;
    var page = document.URL;
    var width = 550
    var height = 450;
    if (widget.length !== 0) {
        widget.find('a').each(function() {
            type = $(this).attr('class');
            switch (type) {
                case 'facebook':
                    url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(page);
                    break;
                case 'twitter':
                    message = $(this).find('span').text();
                    url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message) + '&url=' + encodeURIComponent(page) + '&via=' + encodeURIComponent('TeslaMotors') + '&related=' + encodeURIComponent('TeslaMotors,elonmusk');
                    break;
                case 'google':
                    url = 'https://plus.google.com/share?url=' + encodeURIComponent(page);
                    break;
            }
            if (url !== null) {
                $(this).attr('href', url);
            }
        });
        widget.on('click', 'a', function(e) {
            e.preventDefault();
            window.open($(this).attr('href'), '_blank', 'width=' + width + ', height=' + height);
        });
    }
}

////////////////////////////////////////////////////
// return postalcode formatting for each country
function getPostalCodeRegexMatrix(country_code) {
    //debug.info( 'getPostalCodeRegexMatrix', country_code );

    var postal_code_matrix = {
        "US": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "94304"
              },
        "CA": {
            "regex": "^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "7",
            "minlen": "6",
            "sample": "V3H 1Z7"
              },
        "AD": "",
        "AE": "",
        "AT": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "AU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "NZ": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
        },
        "BE": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "BG": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CH": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CY": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CN": {
            "regex": "^([0-9]{6})?$", //WEB-8715 - is optional
            "maxlen": "6",
            "minlen": "0",
            "sample": "123456"
              },
        "CZ": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "DE": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "4",
            "sample": "12345"
              },
        "DK": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "EE": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "ES": {
            "regex": "^([0-4][0-9]|[5][0-2])[0-9]{3}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "EU": "",
        "FI": {
            "regex": "^[0-9]{3,5}",
            "maxlen": "5",
            "minlen": "3",
            "sample": "12345"
              },
        "FR": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "GB": "", // WEB-30281
        "GI": {
            "regex": "^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[ ][0-9][A-Z]{2}$",
            "maxlen": "9",
            "minlen": "5",
            "sample": "A9 9AA"
              },
        "GR": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "HK": "",
        "TW": {
            "regex": "^[0-9]{3,5}",
            "maxlen": "5",
            "minlen": "3",
            "sample": "12345"
        },
        "HR": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "HU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "IE": "",
        "IS": {
            "regex": "^[0-9]{3}",
            "maxlen": "3",
            "minlen": "3",
            "sample": "123"
              },
        "IT": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "JO": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "11183"
              },
        "JP": {
            "regex": "^[0-9]{3}-[0-9]{4}",
            "maxlen": "8",
            "minlen": "8",
            "sample": "123-4567"
              },
        "KR": {
            "regex": "^([0-9]{3}[-]?[0-9]{3}|[0-9]{5})$",
            "maxlen": "7",
            "minlen": "5",
            "sample": "123-123"
              },
        "LI": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "LU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "LT": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "LV": {
            "regex": "^(LV-)[0-9]{4}",
            "maxlen": "7",
            "minlen": "7",
            "sample": "LV-1234"
              },
        "MC": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "MO": "",
        "MT": "",
        "MX": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "06500"
              },
        "NL": {
            "regex": "^[0-9]{4}[ ]?[A-Za-z]{2}",
            "separator": " ",
            "separator_count": "4",
            "maxlen": "7",
            "minlen": "6",
            "sample": "1234 AB"
              },
        "NO": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "PL": {
            "regex": "^[0-9]{2}[-]?[0-9]{3}",
            "separator": "-",
            "separator_count": "2",
            "maxlen": "6",
            "minlen": "5",
            "sample": "12-123"
              },
        "PT": {
            "regex": "^[0-9]{4}[-]?[0-9]{3}?",
            "separator": "-",
            "separator_count": "4",
            "maxlen": "8",
            "minlen": "4",
            "sample": "1234-123"
              },
        "RO": {
            "regex": "^[0-9]{6}",
            "maxlen": "6",
            "minlen": "6",
            "sample": "123456"
              },
        "RS": "",
        "RU": {
            "regex": "^[0-9]{6}",
            "maxlen": "6",
            "minlen": "6",
            "sample": "123456"
              },
        "SE": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "SI": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "SM": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "SK": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "TH": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "TR": {
            "regex": "^[0-9]{4,5}",
            "maxlen": "5",
            "minlen": "4",
            "sample": "12345"
              }
    }

    return postal_code_matrix[country_code];

}

////////////////////////////////////////////////////
// return formatting data for each country
function getTeslaCountryMapping(country_code) {
    // debug.info( 'getTeslaCountryMapping', country_code );

    var tesla_country_mapping = {
        "US": "",
        "AT": {
            "phone_code": "43"
              },
        "AU": {
            "phone_code": "61"
              },
        "NZ": {
            "phone_code": "64"
        },
        "BE": {
            "phone_code": "32"
              },
        "BG": {
            "phone_code": "359"
              },
        "CA": {
            "phone_code": "1"
              },
        "CH": {
            "phone_code": "41"
              },
        "CN": {
            "phone_code": "86"
              },
        "CZ": {
            "phone_code": "420"
              },
        "DE": {
            "phone_code": "49"
              },
        "DK": {
            "phone_code": "45"
              },
        "EE": {
            "phone_code": "372"
              },
        "ES": {
            "phone_code": "34"
              },
        "FI": {
            "phone_code": "358"
              },
        "FR": {
            "phone_code": "33"
              },
        "GB": {
            "phone_code": "44"
              },
        "GI": {
            "phone_code": "350"
              },
        "GR": {
            "phone_code": "30"
              },
        "HK": {
            "phone_code": "852"
              },
        "HU": {
            "phone_code": "36"
              },
        "IT": {
            "phone_code": "39"
              },
        "JP": {
            "phone_code": "81"
              },
        "LI": {
            "phone_code": "423"
              },
        "LT": {
            "phone_code": "370"
              },
        "LU": {
            "phone_code": "352"
              },
        "LV": {
            "phone_code": "371"
              },
        "MC": {
            "phone_code": "377"
              },
        "MO": {
            "phone_code": "853"
              },
        "MX": {
            "phone_code": "52"
              },
        "NL": {
            "phone_code": "31"
              },
        "NO": {
            "phone_code": "47"
              },
        "PL": {
            "phone_code": "48"
              },
        "PT": {
            "phone_code": "351"
              },
        "RO": {
            "phone_code": "40"
              },
        "SE": {
            "phone_code": "46"
              },
        "SI": {
            "phone_code": "386"
              },
        "SK": {
            "phone_code": "421"
              },
        "SM": {
            "phone_code": "378"
              },
        "TW": {
            "phone_code": "886"
        },
        "KR": {
            "phone_code": "82"
        }
    }
    return tesla_country_mapping[country_code];
}

// WEB-28932 add sample message
// Registration Block
function checkPostalCodeError() {
    $radioType = $( '.registration-type input[type="radio"]:checked' );
    if ($radioType.length) {
        $regType = $radioType.val().toLowerCase();
        $div = $( "#reg-" + $regType + "-postalcode" );
        $spanHelp = $( "#reg-" + $regType + "-postalcode-help" );
        if (($div.val() == "") || ($div.hasClass('error')) || ($div.parent().hasClass('error'))) {
            $spanHelp.show();
        } else {
            $spanHelp.hide();
        }
    }
}

// WEB-28932 add sample message
// Delivery Block
function checkDeliveryPostalCodeError() {
    $radioType = $('.delivery-pickup-type input[type="radio"]:checked');
    if ($radioType.length) {
        $regType = $radioType.val().toLowerCase();
        if ($regType == "delivery") {
            $div = $( "#" + $regType + "-pickup-postal-code" );
            $spanHelp = $( "#reg-" + $regType + "-postalcode-help" );
            if (($div.val() == "") || ($div.hasClass('error')) || ($div.parent().hasClass('error'))) {
                $spanHelp.show();
            } else {
                $spanHelp.hide();
            }
        }
    }
}

// WEB-28932 add sample message
// Accessory Block
function checkAccessoryPostalCodeError() {
    $regType = "accessory";
    $div = $( "#accesssory-shipping-address #postalCode" );
    $spanHelp = $( "#reg-" + $regType + "-postalcode-help" );
    if (($div.val() == "") || ($div.hasClass('error')) || ($div.parent().hasClass('error'))) {
        $spanHelp.show();
    } else {
        $spanHelp.hide();
    }
}

/*
 * Validate a zipcode given a country
 * @param code - the postal code to validate
 * @param country - the country to validate against
 */
function isValidPostalCode(code, country) {
    // debug.info( 'isValidPostalCode', code, country );
    code = $.trim(code);
    var format = getPostalCodeRegexMatrix(country);
    if (format) {
        if (code.length < parseInt(format.minlen)) {
            return false;
        }
        if (code.length > parseInt(format.maxlen)) {
            return false;
        }
        var re = new RegExp(format.regex);
        return re.test(code);
    }
    //getPostalCodeRegexMatrix will check the country as a key in the map postal_code_matrix, so for these countries which doesn't have postal code, we need to return true
    else if (format == '') {
        return true;
    }
    else {
        debug.log('No country found')
        return true;
    }
}

// TO-DO: this is too entagled and not-unit testable
// Should be refactored to use the isValidPostalCode function above
function validatePostalCode(e,whichField,flow) {

    var fieldVal = $('#'+whichField).val();
    var fieldLen = $('#'+whichField).val().length;
    var helpDiv = 'postal-code-help';
    var country = 'US';
    var mode = 'mailing';
    fieldVal = $.trim(fieldVal);

    // set vars if no key/mouse event is passed
    if (typeof e == 'undefined' || e == null) {
        var keyCode = '99';
        var eventType = 'onready';
    } else {
        var keyCode = e.keyCode;
        var eventType = e.type;
    }

    // buy flow: get country from reservation country field.
    if (flow == 'buy' && $('#basic-country').length) {
        country = $('#basic-country').val();
    }
    // buy flow: get country on payment page for cc or ach
    else if (flow == 'buy' && ($('#edit-cc-country').length || $('#edit-ach-country').length)) {
        var payment_method = $('#payment_type_hidden').val();
        if (payment_method == 'cr') {
            country = $('#edit-cc-country').val();
        }
        else if (payment_method == 'ach') {
            country = $('#edit-ach-country').val();
            helpDiv = 'postal-code-help-ach';
        }
    }
    // booking flow: get country on registration and payment page(s)
    else if (flow == 'booking' && $('#country').length) {
        country = $('#country').val();
    }
    // delivery flow:
    else if (flow == 'delivery' && $('#country').length) {
        country = $('#country').val();
    }

    // buy flow: set mode based on field to validate
    if (flow == 'buy' && (whichField == 'edit-PostalCode' || whichField == 'edit-cc-postalcode' || whichField == 'edit-ach-postalcode')) {
        mode = 'delivery';
    }

    // buy flow: update the reservation agreement based on zip code for US.
    if (flow == 'buy' && fieldLen == 5 && $('#page-own-basic').length) {
        updateResAgreement(mode);
    }

    // postal code format validation for countries configured in common.js
    // pulled using getPostalCodeRegexMatrix() function
    var this_country = country;
    if (flow == 'buy' && mode == 'mailing') {
        this_country = $('#edit-mailing-country').val();
        helpDiv = 'postal-code-help-mailing';
    }

    var postal_code_formatting = getPostalCodeRegexMatrix(this_country);
    if (postal_code_formatting) {
        if (postal_code_formatting.separator && postal_code_formatting.separator_count && keyCode != '8') {
            if (fieldLen >= parseInt(postal_code_formatting.separator_count)) { // && fieldLen <= parseInt(postal_code_formatting.separator_count)
                if (!~fieldVal.indexOf(postal_code_formatting.separator)) {
                    var seg1 = fieldVal.substr(0,postal_code_formatting.separator_count);
                    var seg2 = fieldVal.substr(postal_code_formatting.separator_count);
                    fieldVal = seg1 + postal_code_formatting.separator;
                    if (seg2) {
                        fieldVal = fieldVal + seg2;
                    }
                }
                $('#'+whichField).val(fieldVal);
            }
            else if (!~fieldVal.indexOf(postal_code_formatting.separator)) {
                // debug.log('add in the separator after separator_count has been surpassed');
                fieldValFirst = fieldVal.substring(0,parseInt(postal_code_formatting.separator_count));
                fieldValLast = fieldVal.substring(parseInt(postal_code_formatting.separator_count));
                fieldVal = fieldValFirst + postal_code_formatting.separator + fieldValLast;
                fieldLen = fieldVal.length;
            }
        }
        // limit input length
        if (fieldLen > parseInt(postal_code_formatting.maxlen)) {
            // debug.log('limit character input to: '+postal_code_formatting.maxlen);
            fieldVal = fieldVal.substring(0,parseInt(postal_code_formatting.maxlen));
            $('#'+whichField).val(fieldVal);
        }

        fieldLen = $('#'+whichField).val().length;
        if (fieldLen == parseInt(postal_code_formatting.maxlen) || (eventType == 'onready' && fieldLen < parseInt(postal_code_formatting.maxlen))) {
            // debug.log('check the format against the regex: '+postal_code_formatting.regex);
            if (postal_code_formatting.regex && fieldVal.match(postal_code_formatting.regex) == null) {
                $('#'+whichField).addClass('error');
                $('#'+helpDiv).html(Drupal.t('example: ')+postal_code_formatting.sample);
                $('#'+helpDiv).fadeIn('swing');
            }
            else {
                if ($('#'+whichField).hasClass('error')) {
                    $('#'+whichField).removeClass('error');
                    $('#'+helpDiv).hide();
                }
            }
        }
        else if (eventType == 'blur') {
            if (fieldLen < parseInt(postal_code_formatting.minlen)) {
                $('#'+whichField).addClass('error');
                postalCodeMessage = 'format: ';
                $('#'+helpDiv).html(Drupal.t(postalCodeMessage)+postal_code_formatting.sample);
                $('#'+helpDiv).fadeIn('swing');
            }
        }
    }
}

/*
 * Meets Minimum Age
 * meetsMinimumAge(new Date(year, month, date), 18)
 */
function meetsMinimumAge(birthDate, minAge) {
    var tempDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate());
    if (tempDate <= new Date()) {
        return true;
    }
    else {
        return false;
    }
}

/*
 * Get the Age
 * getAge(new Date(year, month, date));
 */
function getAge(birthDate) {
    var birthdate   = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    var today_date  = new Date();
    var today_year  = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day   = today_date.getDate();
    var age         = today_year - birthDate.getFullYear();

    if ( today_month < (birthDate.getMonth() - 1)) {
        age--;
    }
    if (((birthDate.getMonth() - 1) == today_month) && (today_day < birthDate.getDate())) {
        age--;
    }
    return age;

}

/**
 * Generate url with path prefix
 *
 * @param string Url with beginning slash
 * @return string Url with path prefix
 */
function generateUrlWithPathPrefix(url_with_beginning_slash) {
    var url_with_path_prefix = '';
    if (typeof Drupal !== 'undefined' && typeof Drupal.settings !== 'undefined' && typeof Drupal.settings.tesla.locale !== 'undefined' && Drupal.settings.tesla.locale !== '') {
        url_with_path_prefix += '/' + Drupal.settings.tesla.locale;
        if (Drupal.settings.tesla.locale == 'ja_JP') {
            url_with_path_prefix = '/jp';
        }
        if (Drupal.settings.tesla.locale == 'zh_CN') {
            url_with_path_prefix = '/cn';
        }
    }
    url_with_path_prefix += url_with_beginning_slash;
    return url_with_path_prefix;
}

/**
 * change default select input
 *
 * @param {object} config selector configuration
 *
 * example:
 *
 * customSelectInput({
 *     context: '#edit-expDateMonth',
 *     placeholder: 'span.exp-month-select',
 *     attrs: 'class="exp-month-select"',
 *     css: {'z-index': 11},
 *     options: { substrSize: 20 }
 * })
 */
function customSelectInput(config) {
    var $context = $(config.context);
    var cssDefaults = {
        'z-index': 11,
        'opacity': 0,
        '-khtml-appearance':'none'
    };
    var defaults = {
        substr: true,
        substrSize: 30
    };
    var settings = $.extend(defaults, config.options);
    var css = $.extend(cssDefaults, config.css);

    debug.info('select' + config.context + ' using customSelectInput function');
    $context.each(function() {
        var $this = $(this);
        var title = ( $('option:selected', $this).val() !== '' ) ? $('option:selected', $this).text() : $this.attr('title');

        $this.css(css)
            .after('<span ' + config.attrs + '">' + title + '</span>')
            .change(function() {
                val = $('option:selected', this).text();
                var label = (settings.substr) ? val.substring(0, settings.substrSize) : val;
                $(config.placeholder).html(label);
            })
            .keyup(function() {
                val = $('option:selected', this).text();
                var label = (settings.substr) ? val.substring(0, settings.substrSize) : val;
                $(config.placeholder).html(label);
            });
    });
}

//http://stackoverflow.com/questions/18123501/replacing-accented-characters-with-plain-ascii-ones
function removeDiacritics (str) {
    var defaultDiacriticsRemovalMap = [
        {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
        {'base':'AA','letters':/[\uA732]/g},
        {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
        {'base':'AO','letters':/[\uA734]/g},
        {'base':'AU','letters':/[\uA736]/g},
        {'base':'AV','letters':/[\uA738\uA73A]/g},
        {'base':'AY','letters':/[\uA73C]/g},
        {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
        {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
        {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
        {'base':'DZ','letters':/[\u01F1\u01C4]/g},
        {'base':'Dz','letters':/[\u01F2\u01C5]/g},
        {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
        {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
        {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
        {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
        {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
        {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
        {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
        {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
        {'base':'LJ','letters':/[\u01C7]/g},
        {'base':'Lj','letters':/[\u01C8]/g},
        {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
        {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
        {'base':'NJ','letters':/[\u01CA]/g},
        {'base':'Nj','letters':/[\u01CB]/g},
        {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
        {'base':'OI','letters':/[\u01A2]/g},
        {'base':'OO','letters':/[\uA74E]/g},
        {'base':'OU','letters':/[\u0222]/g},
        {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
        {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
        {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
        {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
        {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
        {'base':'TZ','letters':/[\uA728]/g},
        {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
        {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
        {'base':'VY','letters':/[\uA760]/g},
        {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
        {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
        {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
        {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
        {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
        {'base':'aa','letters':/[\uA733]/g},
        {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
        {'base':'ao','letters':/[\uA735]/g},
        {'base':'au','letters':/[\uA737]/g},
        {'base':'av','letters':/[\uA739\uA73B]/g},
        {'base':'ay','letters':/[\uA73D]/g},
        {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
        {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
        {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
        {'base':'dz','letters':/[\u01F3\u01C6]/g},
        {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
        {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
        {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
        {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
        {'base':'hv','letters':/[\u0195]/g},
        {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
        {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
        {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
        {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
        {'base':'lj','letters':/[\u01C9]/g},
        {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
        {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
        {'base':'nj','letters':/[\u01CC]/g},
        {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
        {'base':'oi','letters':/[\u01A3]/g},
        {'base':'ou','letters':/[\u0223]/g},
        {'base':'oo','letters':/[\uA74F]/g},
        {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
        {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
        {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
        {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
        {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
        {'base':'tz','letters':/[\uA729]/g},
        {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
        {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
        {'base':'vy','letters':/[\uA761]/g},
        {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
        {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
        {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
        {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
    ];
    for(var i=0; i<defaultDiacriticsRemovalMap.length; i++) {
        str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
    }

    return str;
}

function recaptchaSwitch(type) {
    if (type == 'audio') {
        this.Recaptcha.switch_type(type);
        $('#recaptcha_image').addClass('hide');
    }
    else {
        this.Recaptcha.switch_type(type);
        $('#recaptcha_image').removeClass('hide');
    }
}

/*
 * GridSum Tracking code for tracking reservation creation for CN Marketing
 * @param: reservation.  the reservation object we get in order confirmation page
 */
function sendGridSumOrderTracking(reservation) {
    if (window._gsTracker && reservation && reservation.config) {
        var orderid = reservation.rn;
        var price = reservation.config.vat_amount;
        var battery = reservation.config.manufacturing_string.match(/(P|BT)[0-9]{2}D?/)[0];
        var number = 1;
        var leasing = reservation.config.leasing;
        if (leasing && leasing.tab !== 'cash' && leasing.total) {
            price = leasing.total.monthly_effective_pmt;
            number = leasing.term;
        }
        _gsTracker.addOrder(orderid, price ,'');
        _gsTracker.addProduct(orderid,reservation.modelname,'', price, number, battery);
        _gsTracker.trackECom();
    }
}

/*
 * Add custom tracking for GridSum
 * @param  tracking_obj  this object has page, event_name and model_type for tracking
 */
function sendGridSumCustomTracking(tracking_obj) {
    if (window.GridsumWebDissector && tracking_obj) {
        var _gsTracker =GridsumWebDissector.getTracker('GWD-002511');
        _gsTracker.track(tracking_obj.page);
        _gsTracker.trackEvent(tracking_obj.event_name, tracking_obj.model_type);
    }
}

/*
 *  Format a currency field by removing characters after a dot and concatenating comma's
 *  @param obj the object that contains the value and has an id
 */
function formatCurrencyField(amount, remove_all_not_numeric) {

    var new_amount = amount;

    remove_all_not_numeric = ( remove_all_not_numeric !== undefined ? remove_all_not_numeric : false );

    // remove from decimal to end
    if (amount.indexOf('.') > -1) {
        new_amount = amount.substring(0,amount.indexOf('.'));
    }

    // remove everything after first none numeric
    if (remove_all_not_numeric && new_amount.match('[^0-9]')) {
        new_amount = amount.substring(0,new_amount.match('[^0-9]').index);
    }

    // remove alpha chars
    new_amount = new_amount.replace(/[^0-9]/g, '');
    return new_amount;
}

/**
 * Get dock overlay cookie value.
 *
 * @param string cookieName Cookie name.
 * @return int Number of times dock overlay has been seen.
 */
function getDockOverlayCookie(cookieName) {
    var dockOverlayCookie = Drupal.behaviors.common.readCookie(cookieName);
    if (typeof dockOverlayCookie === 'undefined' || dockOverlayCookie === null) {
        // debug.log('dockOverlayCookie undefined. Baking fresh cookie.');
        dockOverlayCookie = {viewed: 0, closed: 0, submitted: 0, custom_value: ''}
    } else {
        // debug.log('Parsing dockOverlayCookie: ' + dockOverlayCookie);
        dockOverlayCookie = JSON.parse(dockOverlayCookie);
        if (typeof dockOverlayCookie.viewed === 'undefined') {
            dockOverlayCookie.viewed = 0;
        }
        if (typeof dockOverlayCookie.closed === 'undefined') {
            dockOverlayCookie.closed = 0;
        }
        if (typeof dockOverlayCookie.submitted === 'undefined') {
            dockOverlayCookie.submitted = 0;
        }
        if (typeof dockOverlayCookie.custom_value === 'undefined') {
            dockOverlayCookie.custom_value = '';
        }
    }
    return dockOverlayCookie;
}

/**
 * Get dock overlay cookie value for specific key.
 *
 * @param string key Key.
 * @param object dockOverlayCookie Dock overlay cookie object.
 * @return int Value of given key.
 */
function getDockOverlayCookieKeyValue(key, dockOverlayCookie) {
    switch (key) {
        // Valid.
        case 'submitted':
        case 'closed':
        case 'viewed':
        case 'custom_value':
            return (typeof dockOverlayCookie[key] !== 'undefined') ? dockOverlayCookie[key] : 0;
            break;
    }
    return false;
}

/**
 * Set dock overlay cookie value for specific key.
 *
 * @param string key Key.
 * @param int val Value.
 * @param object dockOverlayCookie Dock overlay cookie object.
 * @param string cookieName Cookie name.
 * @return boolean Success.
 */
function setDockOverlayCookieKeyValue(key, dockOverlayCookie, cookieName) {
    if (typeof dockOverlayCookie === 'undefined' || dockOverlayCookie === null) {
        // debug.log('dockOverlayCookie undefined. Getting fresh cookie.');
        dockOverlayCookie = getDockOverlayCookie(cookieName);
    }
    switch (key) {
        // Valid.
        case 'submitted':
        case 'closed':
        case 'viewed':
            if (typeof dockOverlayCookie[key] !== 'undefined') {
                dockOverlayCookie[key] += 1;
            }
            else {
                dockOverlayCookie[key] = 1;
            }
            dockOverlayCookie = JSON.stringify(dockOverlayCookie);
            Drupal.behaviors.common.createCookie(cookieName, dockOverlayCookie, 365);
            // debug.log('Cookie set: ' + dockOverlayCookie);
            return true;
            break;
    }
    return false;
}

/**
 * Set dock overlay cookie value for custom value key.
 *
 * @param string val Custom value.
 * @param int val Value.
 * @param object dockOverlayCookie Dock overlay cookie object.
 * @param string cookieName Cookie name.
 * @return boolean Success.
 */
function setDockOverlayCookieCustomValue(val, dockOverlayCookie, cookieName) {
    if (typeof dockOverlayCookie === 'undefined' || dockOverlayCookie === null) {
        // debug.log('dockOverlayCookie undefined. Getting fresh cookie.');
        dockOverlayCookie = getDockOverlayCookie(cookieName);
    }
    dockOverlayCookie.custom_value = encodeURIComponent(val);
    dockOverlayCookie = JSON.stringify(dockOverlayCookie);
    Drupal.behaviors.common.createCookie(cookieName, dockOverlayCookie, 365);
    // debug.log('Cookie set: ' + dockOverlayCookie);
    return true;
}

/**
 * Show dock overlay.
 *
 * @param object dockOverlayCookie Dock overlay cookie object.
 * @return boolean Show dock overlay.
 */
function showDockOverlay(dockOverlayCookie) {
    var dockOverlaySubmitted,
        dockOverlayClosed;

    dockOverlaySubmitted = getDockOverlayCookieKeyValue('submitted', dockOverlayCookie);
    dockOverlayClosed = getDockOverlayCookieKeyValue('closed', dockOverlayCookie);
    // debug.log('Show cookie?: ' + JSON.stringify(dockOverlayCookie));

    return dockOverlaySubmitted === 0 && dockOverlayClosed === 0;
}

/**
 * Get dock overlay localStorage value.
 *
 * @param string localStorage name.
 * @return int Number of times dock overlay has been seen.
 */
function getDockOverlayLocalStorage(localStorage) {
    var dockOverlayLocalStorage = Storage.get(localStorage);
    if (typeof dockOverlayLocalStorage === 'undefined' || dockOverlayLocalStorage === null) {
        // debug.log('dockOverlayLocalStorage undefined. Baking fresh cookie.');
        dockOverlayLocalStorage = {viewed: 0, closed: 0, submitted: 0, custom_value: ''}
    } else {
        // debug.log('Parsing dockOverlayLocalStorage: ' + dockOverlayLocalStorage);
        if (typeof dockOverlayLocalStorage.viewed === 'undefined') {
            dockOverlayLocalStorage.viewed = 0;
        }
        if (typeof dockOverlayLocalStorage.closed === 'undefined') {
            dockOverlayLocalStorage.closed = 0;
        }
        if (typeof dockOverlayLocalStorage.submitted === 'undefined') {
            dockOverlayLocalStorage.submitted = 0;
        }
        if (typeof dockOverlayLocalStorage.custom_value === 'undefined') {
            dockOverlayLocalStorage.custom_value = '';
        }
    }
    return dockOverlayLocalStorage;
}


/**
 * Get dock overlay localStorage value for specific key.
 *
 * @param string key Key.
 * @param object dockOverlayLocalStorage Dock overlay localStorage object.
 * @return int Value of given key.
 */
function getDockOverlayLocalStorageKeyValue(key, dockOverlayLocalStorage) {
    switch (key) {
        // Valid.
        case 'submitted':
        case 'closed':
        case 'viewed':
        case 'custom_value':
            return (typeof dockOverlayLocalStorage[key] !== 'undefined') ? dockOverlayLocalStorage[key] : 0;
            break;
    }
    return false;
}

/**
 * Set dock overlay localStorage value for specific key.
 *
 * @param string key Key.
 * @param int val Value.
 * @param object dockOverlayLocalStorage Dock overlay localStorage object.
 * @param string localStorageName LocalStorage name.
 * @return boolean Success.
 */
function setDockOverlayLocalStorageKeyValue(key, dockOverlayLocalStorage, localStorageName) {
    if (typeof dockOverlayLocalStorage === 'undefined' || dockOverlayLocalStorage === null) {
        // debug.log('dockOverlayLocalStorage undefined. Getting fresh localStorage.');
        dockOverlayLocalStorage = getDockOverlayLocalStorage(localStorageName);
    }
    switch (key) {
        // Valid.
        case 'submitted':
        case 'closed':
        case 'viewed':
            if (typeof dockOverlayLocalStorage[key] !== 'undefined') {
                dockOverlayLocalStorage[key] += 1;
            }
            else {
                dockOverlayLocalStorage[key] = 1;
            }
            Storage.set(localStorageName, dockOverlayLocalStorage);
            debug.log('LocalStorage set: ' + dockOverlayLocalStorage);
            return true;
            break;
    }
    return false;
}


/**
 * Set dock overlay localStorage value for custom value key.
 *
 * @param string val Custom value.
 * @param int val Value.
 * @param object dockOverlayLocalStorage Dock overlay localStorage object.
 * @param string localStorageName LocalStorage name.
 * @return boolean Success.
 */
function setDockOverlayLocalStorageCustomValue(val, dockOverlayLocalStorage, localStorageName) {
    if (typeof dockOverlayLocalStorage === 'undefined' || dockOverlayLocalStorage === null) {
        // debug.log('dockOverlayLocalStorage undefined. Getting fresh localStorage.');
        dockOverlayLocalStorage = getDockOverlayLocalStorage(localStorageName);
    }
    dockOverlayLocalStorage.custom_value = encodeURIComponent(val);
    Storage.set(localStorageName, dockOverlayLocalStorage);
    // debug.log('LocalStorage set: ' + dockOverlayLocalStorage);
    return true;
}

/**
 * Show dock overlay.
 *
 * @param object dockOverlayLocalStorage Dock overlay localStorage object.
 * @return boolean Show dock overlay.
 */
function showDockOverlay(dockOverlayLocalStorage) {
    var dockOverlaySubmitted,
        dockOverlayClosed;

    dockOverlaySubmitted = getDockOverlayLocalStorageKeyValue('submitted', dockOverlayLocalStorage);
    dockOverlayClosed = getDockOverlayLocalStorageKeyValue('closed', dockOverlayLocalStorage);
    // debug.log('Show localStorage?: ' + JSON.stringify(dockOverlayLocalStorage));

    return dockOverlaySubmitted === 0 && dockOverlayClosed === 0;
}

;
var geoip2=function(){"use strict";function t(t,e,o,n,s,i,r){this.successCallback=t,this.errorCallback=e,this.geolocation=o&&o.hasOwnProperty("geolocation")?o.geolocation:navigator.geolocation,this.endpoint=s&&""!=s?s:"",this.context=!i||"production"!=i&&"staging"!=i?"production":i,this.version=r&&""!=r&&-1!=r.indexOf("v")?r:"v1.0.3",this.type=n}function e(t,e){var o=new XMLHttpRequest,s=Math.random();try{o.open(t,n(e,"pc",s),!0)}catch(t){o=null}return o}function o(t){for(var e=window.location.search.substring(1).split("&"),o=0;o<e.length;o++){var n=e[o].split("=");if(n[0]===t)return n[1]}return!1}function n(t,e,o){var n=new RegExp("([?&])"+e+"=.*?(&|$)","i"),s=-1!==t.indexOf("?")?"&":"?";return t.match(n)?t.replace(n,"$1"+e+"="+o+"$2"):t+s+e+"="+o}var s={};return t.prototype.returnSuccess=function(t){this.successCallback&&"function"==typeof this.successCallback&&this.successCallback(t)},t.prototype.getGeoIPResult=function(){var t,s=this,i=s.context,r=s.endpoint;-1===window.location.hostname.indexOf("tesla.cn")?"production"==i?r="https://location.teslamotors.com/geoip/"+this.version+"/"+this.type+"/":""==r&&(r="http://sjc04s1gipap01.teslamotors.com:1112/geoip/"+this.version+"/"+this.type+"/"):r="production"==i?"https://location.tesla.cn/geoip/"+this.version+"/"+this.type+"/":"http://sjc04s1gipap01.teslamotors.com:1112/geoip/"+this.version+"/"+this.type+"/",o("ip")&&(r=n(r,"ip",o("ip"))),(t=e("get",r))?(-1==navigator.userAgent.indexOf("Trident")?t.onreadystatechange=function(){if(4===t.readyState)if(t.status<200||t.status>=400)s.errorCallback();else try{var e=JSON.parse(t.responseText);s.returnSuccess(e)}catch(t){s.errorCallback()}}:t.readyState&&(t.onload=function(){if(t.status<200||t.status>=400)s.errorCallback(t.status);else try{var e=JSON.parse(t.responseText);s.returnSuccess(e)}catch(t){s.errorCallback()}}),t.send(t.responseText)):s.errorCallback()},s.country=function(e,o,n,s,i,r){new t(e,o,n,"country",s,i,r).getGeoIPResult()},s.city=function(e,o,n,s,i,r){new t(e,o,n,"city",s,i,r).getGeoIPResult()},s.connection=function(e,o,n,s,i,r){new t(e,o,n,"connection",s,i,r).getGeoIPResult()},s}();;
var Tesla = Tesla || {};
if (typeof Tesla.Utils == 'undefined') Tesla.Utils = {};

Tesla.Utils.createCookie = function(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

Tesla.Utils.readCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

Tesla.Utils.eraseCookie = function(name) {
    Tesla.Utils.createCookie(name,"",-1);
}
;
/*!
 * accounting.js v0.3.2, copyright 2011 Joss Crowcroft, MIT license, http://josscrowcroft.github.com/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.3.2",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);;
/*  Localization specific code goes here
    Requires accounting.min.js
*/
var Tesla = Tesla || {};

// List of countries flagged as EU other (see: tesla.locale.inc)
var euOtherCountries = ['BG', 'CZ', 'EE', 'GI', 'GR', 'HU', 'LV', 'LI', 'LT', 'MC', 'PL', 'RO', 'RU', 'SM', 'SK', 'SI', 'TR'];
// WEB-12091 - supercharging map determine region by country code
// arrays used by regionByCountryCode function below
var euCountries = ['AD','AL','AT','BA','BE','BG','BY','CH','CY','CZ','DE','DK','EE','ES','FI','FO','FR','GB','GG','GI','GR','HR','HU','IE','IM','IS','IT','JE','LI','LT','LU','LV','MC','MD','MK','MT','NL','NO','PL','PT','RO','RU','SE','SI','SJ','SK','SM','TR','UA','UK','VA','YU','EU'];
var meCountries = ['EA', 'JO'];
var naCountries = ['US','CA','MX'];
var naOtherCountries = ['BR','IN','ZA'];
var apacCountries = ['AU','CN','HK','JP','MO','TW','KR','NZ'];
var kmCountries = new Array("de_AT", "de_CH", "de_DE", "en_AT", "en_AU", "en_BE", "en_CA", "en_CH", "en_DK", "en_EU", "en_HK", "en_IT", "en_NL", "es_ES", "es_MX", "fr_BE", "fr_CH", "fr_FR", "it_CH", "it_IT", "jp", "nl_NL", "no_NO", "fr_CA", "zh_HK", "en_MO", "zh_MO", "zh_TW", "ko_KR","en_IE", "en_NZ", "es_ES", "pt_PT");
var validLocales = new Array("de_DE", "de_AT", "en_AU", "nl_BE", "fr_CA", "fr_CH", "it_CH", "de_CH", "da_DK", "en_HK", "es_MX", "fr_BE", "fr_FR", "it_IT", "jp", "nl_NL", "no_NO", "en_CA", "cn", "en_GB", "sv_SE", "fi_FI", "zh_HK", "en_MO", "zh_MO", "de_LU", "fr_LU", "zh_TW", "ko_KR","en_IE", "en_NZ", "es_ES", "pt_PT");

var currency_locale = {
        'AE': {
             currency:'AED',
             symbol: 'AED',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'en_AE': {
             currency:'AED',
             symbol: 'AED',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'ar_AE': {
             currency:'AED',
             symbol: 'AED',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'AD': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'AT': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'en_AT': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'de_AT': {
             currency:'EUR',
             symbol: '\u20AC',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'AU': {
             currency:'AUD',
             symbol: '$',
             format : "%s%v"
         },
         'en_AU': {
             currency:'AUD',
             symbol: '$',
             format : "%s%v"
         },
         'NZ': {
             currency:'NZD',
             symbol: '$',
             format : "%s%v"
         },
         'en_NZ': {
             currency:'NZD',
             symbol: '$',
             format : "%s%v"
         },
         'BE': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'en_BE': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'fr_BE': {
             currency:'EUR',
             symbol: '\u20AC',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'nl_BE': {
             currency:'EUR',
             symbol: '\u20AC',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'CA': {
             currency: 'CAD',
             symbol:'$',
             format: "%s%v",
             decimal: ".",
             thousand: ","
         },
         'en_CA': {
             currency: 'CAD',
             symbol:'$'
         },
         'fr_CA': {
             currency: 'CAD',
             symbol:'$',
             format : "%v %s",
             thousand: ' ',
             decimal: ','
         },
         'CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'de_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'fr_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'it_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'CN': {
             currency:'CNY',
             symbol: '&yen;',
             thousand: ',',
             decimal: '.',
             format: "%s %v"
         },
         'zh_CN': {
             currency:'CNY',
             symbol: '&yen;',
             thousand: ',',
             decimal: '.',
             format: "%s %v"
         },
         'CY': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'DE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'de_DE': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'en_DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'da_DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'EE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'ES': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'es_ES': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%v %s"
         },
         'EU': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'en_EU': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'FI': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'fi_FI': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'FR': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'fr_FR': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'GB': {
             currency:'GBP',
             symbol: '&pound;',
             thousand: ","
         },
         'en_GB': {
             currency:'GBP',
             symbol: '\u00A3',
             thousand: ","
         },
         'GR': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'HK': {
             currency:'HKD',
             symbol: '$'
         },
         'en_HK': {
             currency:'HKD',
             symbol: 'HK$',
             position: 'prefix'
//             format : "%s %v"
         },
        'zh_HK': {
            currency:'HKD',
            symbol: 'HK$',
            position: 'prefix'
    //             format : "%s %v"
        },
         'IE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: ',',
             decimal: '.',
             position: 'prefix',
             format : "%s %v"
         },
         'en_IE': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: ',',
             decimal: '.',
             position: 'prefix',
             format : "%s %v"
         },
         'IT': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'it_IT': {
             currency:'EUR',
             symbol: '€',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
        'JO': {
             currency:'JOD',
             symbol: 'JOD',
             thousand: ',',
             decimal: '.',
             position: 'postfix',
             format : "%v %s"
         },
         'en_JO': {
             currency:'JOD',
             symbol: 'JOD',
             thousand: ',',
             decimal: '.',
             position: 'postfix',
             format : "%v %s"
         },
         'ar_JO': {
             currency:'JOD',
             symbol: 'JOD',
             thousand: ',',
             decimal: '.',
             position: 'postfix',
             format : "%v %s"
         },
         'LU': {
             currency:'EUR',
             symbol: '\u20AC',
             position: 'prefix',
             thousand: '.',
             decimal: ','
         },
         'de_LU': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'fr_LU': {
             currency:'EUR',
             symbol: '\u20AC',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'MC': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'MO': {
             currency:'HKD',
             symbol: 'HK$',
             position: 'prefix'
         },
         'MX': {
             currency:'MXN',
             symbol: '$',
             position: 'prefix'
         },
         'es_MX': {
             currency:'MXN',
             symbol: '$',
             position: 'prefix'
         },
         'en_MO': {
             currency:'HKD',
             symbol: 'HK$',
             position: 'prefix'
         },
         'zh_MO': {
             currency:'HKD',
             symbol: 'HK$',
             position: 'prefix'
         },
         'MT': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ','
         },
         'NL': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'nl_NL': {
             currency:'EUR',
             symbol: '\u20AC',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'NO': {
             currency:'NOK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'no_NO': {
             currency:'NOK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'sv_SE': {
             currency:'SEK',
             symbol: 'kr',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'SE': {
             currency:'SEK',
             symbol: 'kr',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'PT': {
             currency:'EUR',
             symbol: '€',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'pt_PT': {
             currency:'EUR',
             symbol: '€',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'JP': {
             currency:'JPY',
             symbol: '&yen; '
         },
         'ja_JP': {
             currency:'JPY',
             symbol: '&yen; '
         },
         'US': {
             currency:'USD',
             symbol: '$',
             format: "%s%v",
             decimal: ".",
             thousand: ","
         },
         'en_US': {
             currency:'USD',
             symbol: '$'
         },
        'TW': {
            currency:'TWD',
            symbol: 'NT$',
            position: 'prefix'
        },
        'zh_TW': {
            currency:'TWD',
            symbol: 'NT$',
            position: 'prefix'
        },
        'KR': {
            currency:'KRW',
            symbol: '&#8361;',
            position: 'prefix'
        },
        'ko_KR': {
            currency:'KRW',
            symbol: '&#8361;',
            position: 'prefix'
        }
     };

Tesla.formatMoney =  function(value, region, precision, showCurrSymbol) {

  var currency_default, attrname;
   /* These are taken from the acountancy defaults, apart from currency */
   currency_default = {
      currency: 'USD', // This is custom, we add it.
      symbol: "$",   // default currency symbol is '$'
      format : "%s%v",  // controls output: %s = symbol, %v = value (can be object, see docs)
      decimal : ".",    // decimal point separator
      thousand : ",",   // thousands separator
      precision : 2,    // decimal places
      grouping : 3    // digit grouping (not implemented yet)
    };

  // Set currency defaults in the accounting.settings.currency object.
  if (!region || region == 'default') {
    for (var def_attr in currency_default) {
      accounting.settings.currency[def_attr] = currency_default[def_attr];
    }
  }
  else { // Read from the currency_locale object
    for (var reg_attr in currency_locale[region]) {
       accounting.settings.currency[reg_attr] = currency_locale[region][reg_attr];
            // Show currency symbol or not
        if ( showCurrSymbol == false ){
            accounting.settings.currency["symbol"] = "";
        }
    }
  }
  // set decimal places if sent as an arg, otherwise, use default setting.
  accounting.settings.currency.precision = typeof precision == 'undefined' ? accounting.settings.currency.precision : precision;

  // Run our values through the accounting formatMoney method.
  if (value || value === 0) {
    return accounting.formatMoney(value, accounting.settings.currency);
  }

  return "";

};

/** WEB-12091 - supercharging map determine region by country code
 * using country arrays set above.
 * @countryCode => passed in from page based on Drupal.settings.tesla.country
 * euCountries => array of EU countries
 * meCountries => array of ME countries
 * naCountries => array of NA countries
 * apacCountries => array of APAC countries
 * returns a default of "north_america"
 */
Tesla.regionByCountryCode = function(countryCode) {

    var region;
    if (_.indexOf(euCountries,countryCode) >= 0) {
        region = 'europe';
    }
    else if (_.indexOf(naCountries,countryCode) >= 0) {
        region = 'north_america';
    }
    else if (_.indexOf(apacCountries,countryCode) >= 0) {
        region = 'asia_pacific';
    }
    else if (_.indexOf(meCountries,countryCode) >= 0) {
        region = 'middle_east';
    }
    else {
        region = 'north_america';
    }

    return region;
};

function localizeCost(c, floating_points) {
  var i18n_c, i18n_c_string;
  if (Drupal.settings.tesla) { // Added on Document ready in common.js
    if (Drupal.settings.tesla.locale === 'fr_CA') {
      i18n_c = Number(c).toFixed(floating_points).replace('.',',');
      i18n_c_string = i18n_c + " $";
    } else {
      i18n_c = Number(c).toFixed(floating_points);
      i18n_c_string = "$" + i18n_c;
    }
  }
  return i18n_c_string;
}

function switchToMiles(dm) {
  if (Drupal.settings.tesla.locale === 'fr_CA' || Drupal.settings.tesla.locale === 'en_CA') {
	dm = dm / 1.6
  }
  return dm;
}

/**
*
* Return a formatted data based on locale
* @param m {number} ~ Month for a given locale
* @param day {number} ~ Day for a given month in a specific locale
* @param year {number} ~ Year for a given locale
* @param flags {object} ~ Determiners for how to filter and return the formatted data
*        type {boolean} ~ Return type. Default: string. Options: array | object
*
**/

function localizeDate(m, day, year, flags) {

    var teslaRegion = '';

    if ( Drupal.settings.tesla.locale == 'de_CH' ) {
        teslaRegion = 'DE';
    }
    else if ( Drupal.settings.tesla.locale == 'fr_CH' ) {
        teslaRegion = 'FR';
    }
    else if ( Drupal.settings.tesla.locale == 'it_CH' ) {
        teslaRegion = 'IT';
    }
    else {
        teslaRegion = Drupal.settings.tesla.region;
    }

    flags = flags || {};

    var curCarInfo = curCarInfo || {};

    switch(teslaRegion) {
    case 'CA':
      if (Drupal.settings.tesla.locale == 'fr_CA') {
        monthArray = {1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre"};
    	month = monthArray[m];
        curCarInfo.date = day+" "+month+" "+year;
      }
      else {
        monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
        month = monthArray[m];
        curCarInfo.date = day+" "+month+", "+year;
      }
      break;
    case 'FR':
      monthArray = {1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    case 'EN':
      monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+", "+year;
      break;
    case 'DE':
      monthArray = {1: "Januar", 2: "Februar", 3: "März", 4: "April", 5: "Mai", 6: "Juni", 7: "Juli", 8: "August", 9: "September", 10: "October", 11: "November", 12: "Dezember"};
      month = monthArray[m];
      curCarInfo.date = day+". "+month+" "+year;
      break;
    case 'IT':
      monthArray = {1: "January", 2: "Febbraio", 3: "Marzo", 4: "Aprile", 5: "May", 6: "Giugno", 7: "Luglio", 8: "August", 9: "September", 10: "Ottobre", 11: "Novembre", 12: "Dicembre"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    case 'JP':
      monthArray = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12"};
      month = monthArray[m];
      curCarInfo.date = year+"年"+month+"月"+day+"日";
      break;
    case 'ES':
    case 'MX':
      monthArray = {1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril", 5: "Mayo", 6: "Junio", 7: "Julio", 8: "Agosto", 9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+", "+year;
      break;
    case 'NO':
      monthArray = {1: "Januar", 2: "februar", 3: "Mars", 4: "April", 5: "May", 6: "June", 7: "Juli", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "Desember"};
      month = monthArray[m];
      curCarInfo.date = day+". "+month+" "+year;
      break;
    case 'NL':
      monthArray = {1: "Januari", 2: "Februari", 3: "March", 4: "April", 5: "Mei", 6: "June", 7: "July", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    case 'PT':
      monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = month + " " + day + ", " + year;
      break;
    default:
      monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = month + " " + day + ", " + year;
    }

    if ( flags["type"] && flags["type"] == "array" ) {
        formatted_data = curCarInfo.date.replace(/,/g, "");
        return formatted_data.split(" ");
    }
    return curCarInfo.date;

}

function localizeDay(m, day, year) {

    var teslaRegion = '';

    if ( Drupal.settings.tesla.locale == 'de_CH' ) {
        teslaRegion = 'DE';
    }
    else if ( Drupal.settings.tesla.locale == 'fr_CH' ) {
        teslaRegion = 'FR';
    }
    else if ( Drupal.settings.tesla.locale == 'it_CH' ) {
        teslaRegion = 'IT';
    }
    else {
        teslaRegion = Drupal.settings.tesla.region;
    }

    var d = new Date(parseInt(year), parseInt(m)-1, parseInt(day));
    var monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
    var month = monthArray[m];
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    return n + ", " + month + " " + day;
}

/**
 * Is EU other country
 *
 * @param string Country code
 * @return boolean Is EU other country
 */
Tesla.isEuOtherCountry =  function(countryCode) {
    return jQuery.inArray(countryCode, euOtherCountries) > -1;
};

/**
 * Is NA other country
 *
 * @param string Country code
 * @return boolean Is NA other country
 */
Tesla.isNaOtherCountry = function(countryCode) {
    return jQuery.inArray(countryCode, naOtherCountries) > -1;
};

/**
 * Is NA country
 *
 * @param string Country code
 * @return bollean Is NA country
 */
Tesla.isNaCountry = function(countryCode) {
    return jQuery.inArray(countryCode, naCountries) > -1;
};

/**
 * Maps the saved locale to the user country
 * Used when manipulating TC.userCountry for EU other countries where mismatch may occur
 *
 * @param string Country code as specificed by TC.userCountry
 * @param string Locale saved in the configuration
 * @return string Country code as specificed by TC.userCountry
 */
Tesla.mapSavedLocaleToUserCountry =  function(userCountry, savedLocale) {
    isEuOtherCountry = this.isEuOtherCountry(userCountry);
    // MAP LI country (for de_CH) to CH
    if (savedLocale == 'de_CH' && userCountry != 'CH' && isEuOtherCountry) {
        userCountry = 'CH';
    }
    // Map EU other countries
    else if (savedLocale == 'en_EU' && userCountry != 'EU' && isEuOtherCountry) {
        userCountry = 'EU';
    }
    return userCountry;
};

Tesla.isValidLocale = function(locale) {
    var isValidLocale = _.indexOf(validLocales,locale) >= 0 ? true : false;
    return isValidLocale;
};


/**
 * Following the five to six home rule, format money. Like this:
 * 11.5 -> 11 ;   11.6 -> 12
 */
Tesla.fiveToSixHomeFormat = function(num) {
    num = isNaN(num) || num === '' || num === null ? 0.00 : num;
    return Math.ceil((num / 10 - 0.05) * 10);
};

/**
 * Parse the locale from given domain and pathname
 * @param domain {string} the domain of the url
 * @param pathName {string} the pathname of the url
 * @return the locale parsed by given domain and pathname
 */
Tesla.getLocaleFromURL = function(domain, pathname) {
    if (!domain || !pathname) {
        return '';
    }
    var isChina = /tesla\.cn/.test(domain);
    var localePrefix = pathname.match(/^\/([a-z]{2}_[A-Z]{2}|jp|cn)/);
    if (!localePrefix) {
        return isChina ? 'zh_CN' : 'en_US';
    }
    else if (localePrefix[1] === 'jp') {
        return 'ja_JP';
    }
    else {
        return localePrefix[1];
    }
};

/**
 * Get the locale prefix by given country code
 * @param countryCode {string} two letters country code
 * @return the localePrefix by given countryCode
 */
Tesla.getLocaleByCountryCode = function(countryCode) {
    var localePrefix = '';
    if (Tesla.isEuOtherCountry(countryCode)) {
        localePrefix = 'en_EU';
    }
    else if(countryCode === 'CN') {
        localePrefix = 'zh_CN';
    }
    else if (countryCode === 'JP') {
        localePrefix = 'ja_JP';
    }
    else {
        _.each(validLocales, function(locale) {
            if (locale.indexOf(countryCode) > -1) {
                localePrefix = locale;
            }
        });
        localePrefix = (localePrefix != '') ? localePrefix : 'en_US';
    };
    debug.info("Tesla.getLocaleByCountryCode ",localePrefix);
    return localePrefix;
};

/**
 * Get the locale prefix by given country code
 * @param countryCode {string} two letters country code
 * @return the localePrefix by given countryCode
 */
Tesla.getLocalePrefixByCountryCode = function(countryCode) {
    var localePrefix = '';
    if (Tesla.isEuOtherCountry(countryCode)) {
        localePrefix = 'en_EU';
    }
    //else if (['CN', 'US'].indexOf(countryCode) > -1) {
    else if(countryCode === 'CN') {
        if (/tesla\.cn/.test(location.host)) {
            return '';
        }
        else {
            return 'cn';
        }
    }
    else if(countryCode === 'US') {
        localePrefix = '';
    }
    else if (countryCode === 'JP') {
        localePrefix = 'jp';
    }
    else {
        var localePrefix = '';
        _.each(validLocales, function(locale) {
            if (locale.indexOf(countryCode) > -1) {
                localePrefix = locale;
            }
        });
    }
    return localePrefix;
};

/*
This is a function to format numbers depending on the thousand seperator
*/
Tesla.formatNumberPerLocale = function(number,seperator){
    number += '';
    splitNumber = number.split('.');
    number1 = splitNumber[0];
    number2 = splitNumber.length > 1 ? '.' + splitNumber[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(number1)) {
        number1 = number1.replace(rgx, '$1' + seperator + '$2');
    }
    return number1 + number2;
};

/* These are the moment.js i18n config objects.
 *  We will load them into Drupal.settings.momentConfig.
 */
var momentConfig = {};

momentConfig.de_DE = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.de_AT = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.de_CH = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};


momentConfig.en_BE = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

momentConfig.en_DK = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};
momentConfig.en_GB = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

momentConfig.en_US = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.fr_FR = {
    months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),
    monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),
    longDateFormat : {
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY HH:mm",
        LLLL : "dddd, D MMMM YYYY HH:mm"
    },
    meridiem : {
        AM : 'AM',
        am : 'am',
        PM : 'PM',
        pm : 'pm'
    },
    calendar : {
        sameDay: "[Ajourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [denier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "il y a %s",
        s : "secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinal : function (number) {
      return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème';
    }
};

momentConfig.fr_CH = {
    months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),
    monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),
    longDateFormat : {
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY HH:mm",
        LLLL : "dddd, D MMMM YYYY HH:mm"
    },
    meridiem : {
        AM : 'AM',
        am : 'am',
        PM : 'PM',
        pm : 'pm'
    },
    calendar : {
        sameDay: "[Ajourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [denier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "il y a %s",
        s : "secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinal : function (number) {
      return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème';
    }
};

momentConfig.it_CH = {
    months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
    weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s fa",
        s : "secondi",
        m : "un minuto",
        mm : "%d minuti",
        h : "un'ora",
        hh : "%d ore",
        d : "un giorno",
        dd : "%d giorni",
        M : "un mese",
        MM : "%d mesi",
        y : "un anno",
        yy : "%d anni"
    },
    ordinal: function () {
        return 'º';
    }
};

momentConfig.it_IT = {
    months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
    weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s fa",
        s : "secondi",
        m : "un minuto",
        mm : "%d minuti",
        h : "un'ora",
        hh : "%d ore",
        d : "un giorno",
        dd : "%d giorni",
        M : "un mese",
        MM : "%d mesi",
        y : "un anno",
        yy : "%d anni"
    },
    ordinal: function () {
        return 'º';
    }
};

momentConfig.nl_NL = {
    months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort : function (m, format) {
        var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort : "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin : "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Vandaag om] LT',
        nextDay: '[Morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[Gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "over %s",
        past : "%s geleden",
        s : "een paar seconden",
        m : "één minuut",
        mm : "%d minuten",
        h : "één uur",
        hh : "%d uur",
        d : "één dag",
        dd : "%d dagen",
        M : "één maand",
        MM : "%d maanden",
        y : "één jaar",
        yy : "%d jaar"
    },
    ordinal : function (number) {
        return (number === 1 || number === 8 || number >= 20) ? 'ste' : 'de';
    }
};

momentConfig.no_NO = {
    months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort : "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
    weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[I dag klokken] LT',
        nextDay: '[I morgen klokken] LT',
        nextWeek: 'dddd [klokken] LT',
        lastDay: '[I går klokken] LT',
        lastWeek: '[Forrige] dddd [klokken] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "om %s",
        past : "for %s siden",
        s : "noen sekunder",
        m : "ett minutt",
        mm : "%d minutter",
        h : "en time",
        hh : "%d timer",
        d : "en dag",
        dd : "%d dager",
        M : "en måned",
        MM : "%d måneder",
        y : "ett år",
        yy : "%d år"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.en_CA = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.fr_CA = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.en_EU = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

if ((typeof(Drupal) !== "undefined") && Drupal.settings) {
    Drupal.settings.momentConfig = momentConfig;
}
;
//let's not polute global space
var footerNS = footerNS || {};

footerNS.localeSelectInit = function() {
    footerNS.locale_wrapper = $("#locale-modal");
    $("#locale-selector-d7 .modal-link").click(function() {
        footerNS.toggleLocaleSelector();
    });
}

footerNS.toggleLocaleSelector = function() {
    footerNS.locale_wrapper.toggleClass("open");
    footerNS.locale_wrapper.css("display", "block");
    footerNS.topCss = $(window).scrollTop() + footerNS.locale_wrapper.height();
    $("html, body").animate({ scrollTop : footerNS.topCss });
}

$(window).resize(function () {
    footerNS.viewportWidth = $(window).width();
    if (footerNS.viewportWidth < 640) {
        footerNS.locale_wrapper.removeClass("open");
    }
});

$(document).ready(footerNS.localeSelectInit);

(function (window, document, $, Drupal) {
    "use strict";

    Drupal.behaviors.wechat_button_popover = {
        attach: function (context) {
            var $wechatPopover;

            $('.social-icons').on('click', '.icon-wechat', function(e) {
                e.preventDefault();
                $wechatPopover = $(this).find('.popover');
                $wechatPopover.toggle();
            });
            $('.social-icons').on('mouseleave', '.icon-wechat', function(e) {
                e.preventDefault();
                $wechatPopover = $(this).find('.popover');
                $wechatPopover.hide();
            });
        }
    };

    Drupal.behaviors.blog_sticky_footer = {
        attach: function (context) {
            $('[id^="page-blog"] #sticky-footer-btns').on('click', '[class*="btn-"]', function(e) {
                    window.dataLayer.push({
                        'event': 'form-interaction',
                        'interaction': 'button click',
                        'formType': 'Static Footer',
                        'engagementType': 'User Requested'
                    });
            });
        }
    };
}(this, this.document, this.jQuery, this.Drupal));
;
/*=============================================
=            Tesla Retina Functions          =
=                       2014                 =
=                      @manny                =
=============================================*/

/**
*
* Simply function to detect if end-user is on a Retina-friendly device.
* @returns boolean
*
**/
function isRetina() {
    var is_retina = window.devicePixelRatio > 1 ||
    ( window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches );
    return is_retina;
}

/**
*
* For any image/asset that has the 'retina' class, use retina version, if it exists
*
**/
function updateImagesToRetina() {
    if ( isRetina() ) {
        debug.log("User is on a retina device. Update certain images to use Retina version");

        var retina_images       = $("img.retina");
        var retina_image_length = retina_images.length;
        debug.log("We have the following number of images to get the retina version for", retina_image_length);

        if ( retina_image_length ) {
            var retina_file_format = "@2x";
            for(var i = 0; i < retina_image_length; i++) {
                var imageType = retina_images[i].src.substr(-4);
                var imageName = retina_images[i].src.substr(0, retina_images[i].src.length - 4);
                imageName    += retina_file_format + imageType;

                // re-assign image
                retina_images[i].src = imageName;
            }
        }
    }
}

$(document).ready(function() {
    updateImagesToRetina();
});
;
/*
 * JavaScript Debug - v0.3 - 6/8/2009
 * http://benalman.com/projects/javascript-debug-console-log/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */
window.debug=(function(){var c=this,e=Array.prototype.slice,b=c.console,i={},f,g,j=9,d=["error","warn","info","debug","log"],m="assert clear count dir dirxml group groupEnd profile profileEnd time timeEnd trace".split(" "),k=m.length,a=[];while(--k>=0){(function(n){i[n]=function(){j!==0&&b&&b[n]&&b[n].apply(b,arguments)}})(m[k])}k=d.length;while(--k>=0){(function(n,o){i[o]=function(){var q=e.call(arguments),p=[o].concat(q);a.push(p);h(p);if(!b||!l(n)){return}b.firebug?b[o].apply(c,q):b[o]?b[o](q):b.log(q)}})(k,d[k])}function h(n){if(f&&(g||!b||!b.log)){f.apply(c,n)}}i.setLevel=function(n){j=typeof n==="number"?n:9};function l(n){return j>0?j>n:d.length+j<=n}i.setCallback=function(){var o=e.call(arguments),n=a.length,p=n;f=o.shift()||null;g=typeof o[0]==="boolean"?o.shift():false;p-=typeof o[0]==="number"?o.shift():n;while(p<n){h(a[p++])}};return i})();
//window.debug = {debug: function(){}, info: function(){}, log: function(){}, setLevel: function(){}, warn: function(){}, error: function(){} }  // TESTING ONLY DISABLE !!!
log = function(str){try{console.log(str);}catch(err){}}
;
/*global window */
/*global _ */
/*global debug */

(function (global, _, debug) {
    "use strict";

    var StorageSingleton = (function () {
        var instance;

        var __localStorage = global.localStorage,
            __sessionStorage = global.sessionStorage,

            // Default to local storage.
            __storage = __localStorage,

            // Disable with Storage.disable().
            __enabled = true,

            // If a set attempt fails due to storage being full, we'll clear
            //   expired entries and try again.
            __setAttempts = 0,
            __maxSetAttempts = 2,
            __expiresMap = {
                minute: 1000 * 60,
                hour: 1000 * 60 * 60,
                day: 1000 * 60 * 60 * 24,
                // The way things work around here, a week will be the longest
                //   anything should be cached.
                week: 1000 * 60 * 60 * 24 * 7,
                month: 1000 * 60 * 60 * 24 * 30,
                year: 1000 * 60 * 60 * 24 * 30 * 12
            };


        function init() {

           /**
            * Returns expires time in milliseconds.
            * @param expires
            */
            function __getExpiresTime(expires) {
                var ts = new Date().getTime();

                if (_.isString(expires)) {
                    if (_.has(__expiresMap, expires)) {
                        ts += __expiresMap[expires];
                    }
                } else if (!isNaN(expires) && _.isNumber(expires)) {
                    ts += expires;
                } else {
                    debug.error("Storage.set error [incorrect expires option " + expires + "]");
                }

                return ts;
            }

           /**
            * Sets name/value pair in storage.
            *
            * opts param allows the following properties:
            *   - Expires
            *   - Tags (if for some reason you need to store meta about the
            *     stored value)
            *
            * @param key {String}
            * @param value {String,Number or Object}
            * @param opts {Object}
            */
            function set(key, value, opts) {
                var data;

                opts = opts || {};

                data = {
                    value: value,
                    type: typeof value,
                    timestamp: new Date().getTime(),
                    version: opts.version || null
                };

                // Set expires property.
                if (_.has(opts, "expires")) {
                    data.expires = __getExpiresTime(opts.expires);
                }

                // Stringify any objects before we store them.
                if (_.isObject(data)) {
                    data = JSON.stringify(data);
                }

                // Warn if unexpected values are being cached.
                // We may want to throw errors for this, but there may also be
                //   valid use cases.
                if (isNaN(value) && _.isNumber(value)) {
                    debug.warn("Storage.set NAN value was cached! " + value);
                } else if (value === undefined) {
                    debug.warn("Storage.set undefined value was cached! " + value);
                }

                __setAttempts += 1;

                try {

                    if (__setAttempts <= __maxSetAttempts) {
                        __storage.setItem(key, data);
                    }

                    // Success!! Set counter back to zero.
                    __setAttempts = 0;

                } catch (err) {

                    debug.warn('error trying to set value in storage, storage available likely exceeded ' + key, err);
                    // Let's remove any expired entries.
                    this.purgeExpiredItems();

                    // Try to set again.
                    this.set(key, value, opts);

                }

            }

           /**
            * Returns a value that was stored if it exists and has not expired.
            * @param key
            */
            function get(key, validateFunc) {

                if (!__enabled) {
                    return null;
                }

                var data = __storage.getItem(key),
                    now = new Date().getTime(),
                    expires,
                    value = null;

                try {
                    data = JSON.parse(data);
                } catch (err) {
                    debug.log('error trying to parse localStorage value', key);
                }

                if (data) {

                    if (_.isFunction(validateFunc) && validateFunc(data) === false) {
                        return null;
                    }

                    expires = data.expires || now;

                    // Make sure it hasn't expired.
                    if (expires >= now) {

                        switch (data.type) {
                        case 'object':
                        case 'string':
                            value = data.value;
                            break;
                        case 'number':
                            value = parseFloat(data.value);
                            break;
                        default:
                            value = data.value;
                            break;
                        }
                    }
                }

                return value;

            }

           /**
            * Removes name/value pair.
            * @param key {String}
            */
            function remove(key) {
                __storage.removeItem(key);
            }

            /**
             * Returns true/false if name/value pair exists.
             * @param key {String}
             */
            function exists(key) {
                var value = this.get(key);
                return value !== null;
            }

            /**
             * Return any keys that exist in localStorage.
             * @return {Array} [description]
             */
            function keys() {
                var storageKeys = _.keys(__storage);
                return storageKeys;
            }

            /**
             * Clears storage.
             */
            function clear() {
                __storage.clear();
            }

            /**
             * Removes any expired items in storage.
             */
            function purgeExpiredItems() {
                var now = new Date().getTime(),
                    i,
                    key,
                    item,
                    itemObj;

                for (i = 0; i < __storage.length; i += 1) {
                    key = __storage.key(i);
                    item = __storage.getItem(key);
                    itemObj = JSON.parse(item);
                    if ((itemObj.timestamp + itemObj.expires) < now) {
                        __storage.removeItem(key);
                    }
                }
            }

            /**
             * Sets the type of storage we are using ("session" or "local",
             *   defaults to "session").
             * @param storageType {String}
             */
            function setType(storageType) {
                if (storageType === "session" && __sessionStorage) {
                    __storage = __sessionStorage;
                } else if (storageType === "local" && __localStorage) {
                    __storage = __localStorage;
                }
            }

            return {
                duration: __expiresMap,
                set: set,
                get: get,
                remove: remove,
                exists: exists,
                keys: keys,
                clear: clear,
                purgeExpiredItems: purgeExpiredItems,
                setType: setType
            };

        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = init();
                }

                return instance;
            }
        };

    }());

    global.Storage = StorageSingleton.getInstance();

}(window, _, debug));
;
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;
/**
 * Browser detect - based on (with TESLA MODIFICATIONS / ADDITIONS)
 * http://www.quirksmode.org/js/detect.html
 *
 * Usage:
 * The following are available immediately upon invoking this script:
 * BrowserDetect.browser; // Browser name
 * BrowserDetect.version; // Browser version
 * BrowserDetect.OS       // OS name
 * BrowserDetect.summary  // Summary object with the above items concatted together
 *
 * Example:
 * // Initialize BrowserDetect object if it hasn't already been done
 * if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.summary) === "undefined") {
 *    BrowserDetect.init();
 * }
 * // +
 * // Set the BrowserDetect propery as input value
 * if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.setValueToInput) !== "undefined") {
 *     var browserDetectInput = $('#browser_detect_summary');
 *     if (browserDetectInput.length && browserDetectInput.val() === '') {
 *         BrowserDetect.setValueToInput(browserDetectInput, 'summary');
 *     }
 * }
 */
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
        // TESLA ADDITION: Get the summary in one call
        this.summary = { "browser": this.browser,
                         "version": this.version,
                         "OS": this.OS
                       };
    },
    // TESLA ADDITION: Function to set value to input
    setValueToInput: function(obj, prop) {
        if (typeof(this.prop) === "undefined") {
            prop = 'summary';
        }
        var propValue = this[prop];
        if (obj.length && typeof(propValue) !== "undefined") {
            propValue = (typeof propValue === 'object') ? JSON.stringify(propValue) : propValue;
            obj.val(propValue);
        }
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {       // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
           string: navigator.userAgent,
           subString: "iPhone",
           identity: "iPhone/iPod"
        },
        {
           string: navigator.userAgent,
           subString: "iPad",
           identity: "iOS Tablet Device"
        },
        {
           string: navigator.userAgent,
           subString: "Android",
           identity: "Android"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
// TESLA MODIFICATION: DON'T auto-init this script on every page
// if (typeof(BrowserDetect) === "undefined") {
//      BrowserDetect.init();
// }
;
/**
 * @file
 * Common javascript functions.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */


(function (window, document, $, Drupal, Tesla) {
    "use strict";

    /**
     * WEB-30786 baidu adword set cookie
     */
    var reg = new RegExp("(^|&)bd=([^&]*)(&|$)", "i");
    var param = window.location.search.substr(1).match(reg);
    var $adword;
    if (param != null) {
        $adword = unescape(param[2]);
        var date = new Date();
        date.setTime(date.getTime()+(30*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
        document.cookie = "bd="+$adword+";path=/;"+expires+"; ";
    }

    Drupal.behaviors.common = {
        isLoggedIn: function () {
            var tesla_logged_in = Drupal.behaviors.common.readCookie('tesla_logged_in');
            return (tesla_logged_in === 'Y');
        },
        isLoggedOut: function () {
            return Drupal.behaviors.common.isLoggedIn() === false;
        },
        isFrontPage: function () {
            return Drupal.settings.tesla.isFront;
        },
        getFirstName: function () {
            return Drupal.behaviors.common.readCookie('q_first_name', true);
        },
        getLastName: function () {
            return Drupal.behaviors.common.readCookie('q_last_name', true);
        },
        getFullName: function () {
            return Drupal.behaviors.common.getFirstName() + ' ' + Drupal.behaviors.common.getLastName();
        },
        getEmailAddress: function () {
            return Drupal.behaviors.common.readCookie('q_mail', true);
        },
        getPhoneNumber: function () {
            var phoneNumber = decodeURIComponent(Drupal.behaviors.common.readCookie('q_phone', true));
            if (phoneNumber && phoneNumber != 'null') {
                return phoneNumber;
            }

            return null;
        },
        'submitLoginForm': function (mode,destination) {

                var form_error = 0;
                var username_error = 0;
                var username_error_msg = '';
                var pass_error = 0;
                var pass_error_msg = '';
                var display_msg = '';
                var top_offset = -30;

                if(mode == 'join') {
                    window.location.href=destination;
                } else {

                    if($('#edit-name')) {
                        if($('#edit-name').val() == '') {
                            form_error = 1;
                            username_error = 1;
                            username_error_msg = 'Please enter a username';
                            if(Drupal.settings.tesla.country == 'DE') {
                                username_error_msg = 'Benutzername eingeben.';
                            } else if(Drupal.settings.tesla.country == 'FR') {
                                username_error_msg = 'Veuillez entrer un username.';
                            } else if(Drupal.settings.tesla.country == 'IT') {
                                username_error_msg = 'Per favore inserisci uno username.';
                            } else if(Drupal.settings.tesla.country == 'NL') {
                                username_error_msg = 'Geef een gebruikersnaam in.';
                            } else if(Drupal.settings.tesla.country == 'JP') {
                                username_error_msg = 'ユーザー名を入力してください。';
                            }
                        }
                    }

                    if($('#edit-pass')) {
                        if($('#edit-pass').val() == '') {
                            form_error = 1;
                            pass_error = 1;
                            pass_error_msg = 'Please enter a password';
                            if(Drupal.settings.tesla.country == 'DE') {
                                pass_error_msg = 'Bitte geben Sie ein gültiges Passwort ein.';
                            } else if(Drupal.settings.tesla.country == 'FR') {
                                pass_error_msg = 'Veuiller entrer un mot de passe valide.';
                            } else if(Drupal.settings.tesla.country == 'IT') {
                                pass_error_msg = 'Per favore inserisci una password valida.';
                            } else if(Drupal.settings.tesla.country == 'NL') {
                                pass_error_msg = 'Geef een wachtwoord in.';
                            } else if(Drupal.settings.tesla.country == 'JP') {
                                pass_error_msg = '有効なパスワードを入力してください。';
                            }
                        }
                    }

                    if(form_error > 0) {

                        if($('#messages-wrapper').length) {
                            if($('#messages-wrapper').css('display') == 'block') {
                                $('#messages-wrapper').remove();
                            }
                        }

                        if(username_error == 1) {
                            $('label.edit-name').attr('class','label-error');
                            display_msg = username_error_msg;
                        }

                        if(pass_error == 1) {
                            $('label.edit-pass').attr('class','label-error');
                            display_msg = pass_error_msg;
                            top_offset = 55;
                        }

                        if(username_error == 1 && pass_error == 1) {
                            display_msg = username_error_msg + '<br>' + pass_error_msg;
                            top_offset = -26;
                        }

                        display_msg = Drupal.t('We could not sign you in using the information you provided. Please try again.');
                        top_offset = 55;

                        $('#content-body').append('<div id="form-error-popup-rt"></div>');
                        var pop_position = $('#edit-name').position();
                        var x_position = pop_position.left-270;
                        var y_position = pop_position.top+top_offset;
                        $('#form-error-popup-rt').css('left',x_position);
                        $('#form-error-popup-rt').css('top',y_position);
                        $('#form-error-popup-rt').css('width','225px');
                        $('#form-error-popup-rt').css('padding-left','15px');
                        $('#form-error-popup-rt').css('padding-right','30px');
                        $('#form-error-popup-rt').css('padding-top','20px');
                        $('#form-error-popup-rt').css('font-size','11px');
                        $('#form-error-popup-rt').css('line-height','15px');
                        $('#form-error-popup-rt').html(display_msg);
                        $('#form-error-popup-rt').fadeIn('fast');
                    } else {
                        // create username cookie
                        var tesla_username_cookie = Drupal.behaviors.common.readCookie('tesla_username');
                        // create username save cookie
                        // create username for all cases
                        var tmp_cookie_val = $('#edit-name').val();
                        tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
                        Drupal.behaviors.common.createCookie('tesla_username',tmp_cookie_val,360);
                        document.forms['user-login'].submit();
                    }
                }

        },
        'parseURL': function (url) {
            var a =  document.createElement('a');
            a.href = url;
            return {
                source: url,
                protocol: a.protocol.replace(':',''),
                host: a.hostname,
                port: a.port,
                query: a.search,
                params: (function(){
                    var ret = {},
                        seg = a.search.replace(/^\?/,'').split('&'),
                        len = seg.length, i = 0, s;
                    for (;i<len;i++) {
                        if (!seg[i]) { continue; }
                        s = seg[i].split('=');
                        ret[s[0]] = s[1];
                    }
                    return ret;
                })(),
                file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
                hash: a.hash.replace('#',''),
                path: a.pathname.replace(/^([^\/])/,'/$1'),
                relative: (a.href.match(/tp:\/\/[^\/]+(.+)/) || [,''])[1],
                segments: a.pathname.replace(/^\//,'').split('/')
            };
        },
        'createCookie' :function (name, value, days, domain) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else {
                var expires = "";
            }
            var this_domain = "";
            if (domain) {
                this_domain = ";domain=" + domain;
            }
            // TWS-5276
            if (window.location.protocol == 'https:') {
                document.cookie = name + "=" + value + expires + "; path=/" + this_domain + "; secure";
            }
            else {
                document.cookie = name + "=" + value + expires + "; path=/" + this_domain;
            }
            // TWS-14906 Remove duplicate cookies
            Drupal.behaviors.common.removeDuplicateCookie(name);
        },
        'readCookie': function (name, decodeAndEscapeCookie) {
            // TWS-14906 Remove duplicate cookies
            Drupal.behaviors.common.removeDuplicateCookie(name);

            var nameEQ = name + "=",
                ca = document.cookie.split(';'),
                cookieVal = null,
                escapeFn = Drupal.behaviors.common.escape;


            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) {
                    cookieVal = c.substring(nameEQ.length,c.length);
                    if (typeof decodeAndEscapeCookie !== 'undefined' && decodeAndEscapeCookie == true) {
                        // ENT-70 Handle PHP - JS cookie encoding discrepancies
                        cookieVal = cookieVal.replace(/\+/g, '%20');
                        return escapeFn(decodeURIComponent(cookieVal));
                    }
                    return cookieVal;
                }
            }
            return cookieVal;
        },
        'removeDuplicateCookie': function (name) {
            var re = document.cookie.match(new RegExp(name + "=([^;]+)", 'g'));
            if (re && re.length > 1) {
                Drupal.behaviors.common.eraseCookie(name);
            }
        },
        'eraseCookie' : function (name) {
            var value   = "";
            var days    = -1;
            var date    = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
            var this_domain = "";
            // TWS-5276
            if (window.location.protocol == 'https:') {
                document.cookie = name + "=" + value + expires + "; path=/" + this_domain + "; secure";
            }
            else {
                document.cookie = name + "=" + value + expires + "; path=/" + this_domain;
            }
        },
        'escape': function (value) {
            return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
        },
        'checkCookie' : function (){
            var cookie_locale = Drupal.behaviors.common.readCookie('desired-locale');
            var show_blip_count = Drupal.behaviors.common.readCookie('show_blip_count');
            var tesla_locale = 'en_US'; //default to US
            var path = window.location.pathname;
            // debug.log("path = " + path);
            var parsed_url = parseURL(window.location.href);
            var path_array = parsed_url.segments;
            var path_length = path_array.length;
            var locale_path_index = -1;
            var locale_in_path = false;
            var locales = ['ar_AE', 'ar_JO',
                           'cn',
                           'da_DK', 'de_AT', 'de_CH', 'de_DE',
                           'en_AU', 'en_NZ', 'en_CA', 'en_EU', 'en_GB', 'en_HK', 'en_MO', 'en_US', 'en_IE', 'es_ES', 'en_JO', 'en_AE',
                           'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR',
                           'it_CH', 'it_IT',
                           'jp',
                           'ko_KR',
                           'nl_BE', 'nl_NL', 'no_NO',
                           'pt_PT',
                           'sv_SE',
                           'zh_HK', 'zh_MO', 'zh_TW'];
            // see if we are on a locale path
            $.each(locales, function(index, value){
                locale_path_index = $.inArray(value, path_array);
                if (locale_path_index != -1) {
                    if (value == 'jp'){
                        value = 'ja_JP';
                    }
                    else if (value == 'cn'){
                        value = 'zh_CN';
                    }
                    tesla_locale = value;
                    locale_in_path = true;
                }
            });
            // debug.log('tesla_locale = ' + tesla_locale);
            cookie_locale = (cookie_locale == null || cookie_locale == 'null') ? false : cookie_locale;
            // Only do the js redirect on the static homepage.
            if ((path_length == 1) && (locale_in_path || path == '/')) {
                // debug.log("Path in redirect section: " + path);
                if (cookie_locale && (cookie_locale != tesla_locale)) {
                    // debug.log('Redirecting to cookie_locale...');
                    var path_base = '';
                    switch (cookie_locale){
                        case 'en_US':
                            path_base = path_length > 1 ? path_base:'/';
                            break;
                        case 'ja_JP':
                            path_base = '/jp';
                            break;
                        case 'zh_CN':
                            path_base = '/cn';
                            break;
                        default:
                            path_base = '/' + cookie_locale;
                    }
                    path_array = (locale_in_path != -1) ? path_array.slice(locale_in_path) : path_array;
                    path_array.unshift(path_base);
                    var cookie_redirect_url = path_array.join('/');
                    var has_query_string = (cookie_redirect_url.indexOf('?') !== -1);
                    // var has_trailing_slash = (cookie_redirect_url.slice(-1) == '/');
                    // Ensure url has trailing slash to prevent locale prefix redirection loops
                    if (!has_query_string && (cookie_redirect_url.slice(-1) !== '/')) {
                        cookie_redirect_url += '/';
                    }
                    // Inject no redirect flag for tesla.module / tesla.locale.inc php redirect to prevent loops
                    cookie_redirect_url += (has_query_string ? '&' : '?') + 'redirect_from_js=1';
                    debug.log("Should Redirect to: " + cookie_redirect_url);
                    // window.location.href = cookie_redirect_url;
                }
            }

            // only do the ajax call if we don't have a cookie
            if (!cookie_locale) {
                cookie_locale = 'null';
                var get_data = {cookie:cookie_locale, page:path, t_locale:tesla_locale};
                var query_country_string = parsed_url.query != '' ? parsed_url.query.split('='):false;
                var query_country = query_country_string ? (query_country_string.slice(0,1) == '?country' ? query_country_string.slice(-1):false):false;
                if (query_country) {
                    get_data.query_country = query_country;
                }
            }
        },
        'checkPassEmailField':function (origin) {

            var email = $('#edit-name').val();
            var form_error = 0;

            if ($('#edit-name').length) {

                if (!email) {
                    form_error = 1;
                }
                else if (email == '') {
                    form_error = 1;
                }
                else if (!origin && Drupal.behaviors.common.checkEmail(email) == false) {
                    form_error = 1;
                }
                if ((origin && origin == 'login') && $('#edit-pass').length) {
                    var password = $('#edit-pass').val();
                    if(!password) {
                        form_error = 1;
                    } else if(password == '') {
                        form_error = 1;
                    }
                }
                if (form_error == 0) {
                    $('#btnSelectDO').css('opacity','1');
                    $('#btnSelectDO').unbind('click');
                    $('#btnSelectDO').click(function() {
                        if (origin && origin == 'login') {
                            Drupal.behaviors.common.submitLoginForm('login');
                        }
                        else {
                            Drupal.behaviors.common.submitPassForm();
                        }
                    });
                }
                else {
                    $('#btnSelectDO').css('opacity','0.5');
                    $('#btnSelectDO').unbind('click');
                }
            }
        },
        'checkChinaResetPasswordFields' : function () {
            var inputEmail = $('#edit-name').val().trim();
            var inputReCaptcha = $('#china_recpatcha').val().trim();
            var submitButton = $('#btnSelectDO');
            if (inputEmail && Drupal.behaviors.common.checkEmail(inputEmail) && inputReCaptcha.length == 5) {
                submitButton.css('opacity','1')
                    .unbind('click')
                    .click(function() {
                        Drupal.behaviors.common.submitPassForm();
                    });
            }
            else {
                submitButton.css('opacity','0.5').unbind('click');
            }
        },
        'changeChinaRecaptcha' : function () {
            var img = new Image();
            var $recaptchaImage = $('#china-recaptcha-image');
            img.src = '/get_recaptcha?t=' + new Date().getTime() + '&code=' + $recaptchaImage.data('sess');
            img.onload = function() {
                $recaptchaImage.attr('src', img.src);
            }
        },
        'trim': function (string) {
            return string.trim();
        },
        'log' : function (str) {
            debug.log( str );
        },
        'makeCursor': function (obj) {
            document.getElementById(obj.id).style.cursor = 'pointer';
        },
        'checkEmail' : function (email) {
            if(/^([a-zA-Z0-9_\.\-\'\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
                return true;
            } else {
                return false;
            }
        },
        'checkKeyPressed' : function (e,method) {
            var unicode=e.keyCode? e.keyCode : e.charCode;
            if (unicode == 13) {
                if (document.getElementById('page-user-login')) {
                    Drupal.behaviors.common.submitLoginForm('login');
                }
                else if (document.getElementById('change-reservation-form')) {
                    submitChangeReservationForm(method);
                    //document.forms['change-reservation-form'].submit();
                }
                else if (document.getElementById('tesla-buy-paymethod-form')) {
                    submitPaymentForm();
                    //document.forms['tesla-buy-paymethod-form'].submit();
                }
                else if (document.getElementById('tesla-buy-basic-form')) {
                    submitBasicForm(method);
                    //document.forms['tesla-buy-basic-form'].submit();
                }
                else if (document.getElementById('buy-form-complete-account')) {
                    submitCompleteAcctForm();
                }
                // else if (document.getElementById('user-pass-reset')) {
                //     Drupal.behaviors.common.checkResetPasswordFields('submit');
                // }
                // else if ($('*[id*=page-user-reset-]').length) {
                //     Drupal.behaviors.common.checkResetPasswordFields();
                // }
                // else if ($('#page-user-register').length) {
                //     Drupal.behaviors.common.submitCreateAcctForm('create_account');
                // }
                else if ($('#page-user-edit').length || $('#page-user-me-edit').length) {
                    submitUserEditForm();
                }
                else if ($('#page-booking-payment').length && (method == 'billing-btnnext-cont' || method == 'billing-btnnext-nocc' || method == 'billing-btnnext-achcont' || method == 'billing-terms-checkbox-div')) {
                    submitBookingPaymentForm();
                }
            }
            else if (unicode == 32) {
                if ($('#res_agreement_div').length && !method) {
                    setTermsCheckBox();
                }
                if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_div') {
                    setGTUCheckBox();
                }
                if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_alt_div') {
                    setGTUCheckBox('altmailing');
                }
                if ($('#billing-terms-checkbox-div').length && method == 'billing-terms-checkbox-div') {
                    setACHPaymentCheckBox();
                }
                if ($('#billing-ach-checkbox-div').length && method == 'billing-ach-checkbox-div') {
                    setACHPaymentCheckBox();
                }
            }
        },
        'submitPassForm' : function (method) {
            if(method && method == 'cancel') {
                var dest = $('#destination').val();
                var locale_prefix = '';
                if(Drupal.settings.tesla.locale != 'en_US') {
                    locale_prefix = Drupal.settings.tesla.locale;
                    if(locale_prefix == 'ja_JP') {
                        locale_prefix = 'jp';
                    }
                    if(locale_prefix == 'zh_CN') {
                        locale_prefix = 'cn';
                    }
                    locale_prefix = '/' + locale_prefix;
                }

                dest = locale_prefix + '/user/login';
                window.location.href=dest;
            } else {
                document.forms['user-pass'].submit();
            }
        },
        'getLocalePrefix' : function () {
            var localePrefix = ""; // en_US

            if (!(Drupal.settings.tesla.locale === "en_US")) {
            localePrefix = Drupal.settings.tesla.locale;
                if (localePrefix == "ja_JP") {
                    localePrefix = "jp";
                }
                if (localePrefix == "zh_CN") {
                    localePrefix = "cn";
                }
                localePrefix = "/" + localePrefix;
            }
            return localePrefix;
        },

        // check fields on each key input & only activate continue button when fields are filled
        'checkCreateAcctFields' : function (origin) {

            var form_error = 0;

            var email = $('#edit-mail').val();

            // trim and re-assign email + username only on blur
            $('#edit-mail').blur(function () {
                 $('#edit-mail').val($('#edit-mail').val().trim());
            });

            if (origin) {
                var fname = $('#edit-first-name').val();
                var lname = $('#edit-last-name').val();
                var password = $('#edit-pass-pass1').val();
                var password_confirm = $('#edit-pass-pass2').val();

                // WEB-8822 / TFM
                // --------------
                if ($("#edit-mollom-captcha-wrapper").length) {
                    var captcha = $('#edit-mollom-captcha').val();
                }
                // --------------

                if (fname === '') {
                    form_error = 1;
                }
                else if (lname === '') {
                    form_error = 1;
                }
                else if (password === '') {
                    form_error = 1;
                }
                else if (password_confirm === '') {
                    form_error = 1;
                }
                // WEB-8822 / TFM
                // --------------
                else if (captcha === '') {
                    form_error = 1;
                }
                // --------------

                if (
                    $('.password-description').length &&
                    $('.password-description').css('display') == 'block' &&
                    $('#edit-pass-pass2').length &&
                    $('#edit-pass-pass2').val() != '')
                {
                    $('.password-description').css('display','none');
                }

            }

            if (form_error === 0) {
            // ------------------------

                $('#btnCreateAccount').unbind('click');
                $('#btnCreateAccount').unbind('keyup');
                $('#btnCreateAccount').css('opacity','1');
                $('#btnCreateAccount').click(function() {
                    Drupal.behaviors.common.submitCreateAcctForm(origin);
                });
                $('#btnCreateAccount').keyup(function(event) {
                    Drupal.behaviors.common.checkKeyPressed(event);
                });
            }

        },
        'submitCreateAcctForm' : function (origin) {
            var form_error = 0;
            var error_msg = '';
            // WEB-8822 / TFM
            // --------------
            var uname_error = 0;
            // --------------

            var email_error = 0;

            // WEB-8822 / TFM
            // --------------
            var uname = $('#edit-name').val();
            // --------------

            var email = $('#edit-mail').val();
            var is_shell = $('#edit-is-shell').val();
            if(origin) {
                var fname = $('#edit-first-name').val();
                var lname = $('#edit-last-name').val();
                var password = $('#edit-pass-pass1').val();
                var password_confirm = $('#edit-pass-pass2').val();

                var hasLetters = password.match(/[a-zA-Z]+/);
                var hasNumbers = password.match(/[0-9]+/);
                var hasPunctuation = password.match(/[^a-zA-Z0-9]+/);
                var hasCasing = password.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

                if(fname == '') {
                    form_error = 1;
                }
                if(lname == '') {
                    form_error = 1;
                }
                if(password == '') {
                    form_error = 1;
                }
                if(password_confirm == '') {
                    form_error = 1;
                }
            }

            if(Drupal.behaviors.common.checkEmail(email) == false) {
                form_error = 1;
                email_error = 'This is not a valid email address format. Please try again.';
            }
            if(password != password_confirm) {
                form_error = 1;
            }
            if(form_error == 0) {
                if(password.length < 8) {
                    error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                    form_error = 1;
                } else if(password == uname) {
                    error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                    form_error = 1;
                }
                else{
                    var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
                    var strength_pass = count > 1 ? "pass" : "fail";
                        if(strength_pass == "fail"){
                            error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                            form_error = 1;
                        }
                }
            }

            if(form_error == 1) {

                if($('#pass-error').length) {
                    $('#pass-error').remove();
                }
                if($('#messages-wrapper').length) {
                    $('#messages-wrapper').css('display','none');
                }

                $('#btnCreateAccount').unbind('click');

                if(!$('.password-description').length) {
                    var position = $('#edit-pass-pass1').position();
                    var x_offset = 0;
                    var y_offset = 0;
                    $('label[for="edit-pass-pass1"]').css('color','#cc0000');
                    $('label[for="edit-pass-pass2"]').css('color','#cc0000');

                    var pos_x = position.left + x_offset;
                    var pos_y = position.top + y_offset;

                    if($('#pass-error').length) {
                        $('#pass-error').remove();
                    }
                    // start fade in error popup

                    $('main').append('<div id="pass-error"></div>');
                    $('#pass-error').html(error_msg);
                    $('#pass-error').css('top',pos_y);
                    $('#pass-error').css('left',pos_x);
                    $('#pass-error').fadeIn('slow');
                }


            } else {
                // create login and username cookies
                var tesla_username_cookie = Drupal.behaviors.common.readCookie('tesla_username');
                var tesla_email_cookie = Drupal.behaviors.common.readCookie('tesla_email');

                // create username save cookie
                // in all cases
                if(tesla_username_cookie) {
                    Drupal.behaviors.common.eraseCookie('tesla_username');
                }
                var tmp_cookie_val = $('#edit-name').val();
                tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
                Drupal.behaviors.common.createCookie('tesla_username',tmp_cookie_val);

                // create email save cookie
                // in all cases
                if(tesla_email_cookie) {
                    Drupal.behaviors.common.eraseCookie('tesla_email');
                }
                var tmp_cookie_val = $('#edit-mail').val();
                tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
                Drupal.behaviors.common.createCookie('tesla_email',tmp_cookie_val);

                if(is_shell && is_shell == 'true') {
                    debug.log('set the form action');
                    var form_action = $('#edit-shell-url').val();
                    $('#user-register').attr('action',form_action);
                }

                document.forms['user-register-form'].submit();

            }
        },
        // generic js back
        'backBtnSubmit' : function (trigger) {
            var destination;
            if (typeof trigger == 'object') {
                destination = $(trigger).data('destination');
                if (destination) {
                    location.href = Drupal.settings.tesla.localePrefix + destination;
                }
            }
            else if (typeof trigger == 'string' && trigger) {
                if (trigger == 'drive_orientation') {
                    destination=$('#edit-drive-back-url').val();
                }
                else if (trigger == 'basic_info') {
                    destination=$('#edit-basic-back-url').val();
                }
                else {
                    destination = Drupal.settings.tesla.localePrefix + '/own';
                }
                location.href = destination;
            } else {
                history.back();
            }
        }
    };

    /* Set Tesla object */
    var Tesla = Tesla || {};
    Tesla.user = {};
    var match = document.cookie.match(new RegExp("TeslaUser" + "=([^;]+)"));
    if (match) {
        try {
            Tesla.user = JSON.parse(decodeURIComponent(match[1]));
        }
        catch(e) {

        }
    }
 }(this, this.document, this.jQuery, this.Drupal, this.Tesla));
;
/*global window */
/*global debug */
var TeslaAnalytics = window.TeslaAnalytics || {};

(function (window, TeslaAnalytics, debug) {
    'use strict';

    /**
     * Centralized location for analytics events.
     */
    TeslaAnalytics.Helpers = (function () {
        var _uuid = '';
        var _oneTimeInteractions = [];

        return {
            /**
             * Set uuid.
             *
             * @param string uuid Uuid.
             */
            setUuid: function (uuid) {
                if (undefined !== uuid && uuid !== '' && uuid !== _uuid) {
                    debug.log('GTM: uuid set to:' + uuid);
                    _uuid = uuid;
                }
            },

            /**
             * Is first time calling interaction for form type.
             *
             * @param string interaction Interaction.
             * @param string formType Form type.
             * @param boolean Is first time calling interaction for form type.
             */
            isFirstInteraction: function (interaction, formType) {
                var formTypeInteraction = formType + '::' + interaction;
                if (undefined !== formTypeInteraction && formTypeInteraction !== '' && -1 === _oneTimeInteractions.indexOf(formTypeInteraction)) {
                    // debug.log('GTM: First call to interaction: ' + interaction + ' - from formType: ' + formType);
                    _oneTimeInteractions.push(formTypeInteraction);
                    return true;
                } else {
                    // debug.log('GTM: Subsequent call to interaction (ignoring):' + interaction + ' - from formType: ' + formType);
                    return false;
                }
            },

            /**
             * Wrapper around window.dataLayer.push({});
             *
             * @param object dataLayerObject dataLayer object to push.
             */
            dataLayerPush: function (dataLayerObject) {
                if (undefined !== dataLayerObject) {
                    // Inject uuid as userId on the dataLayerObject.
                    if (_uuid !== '') {
                        dataLayerObject.userId = _uuid;
                    }
                    debug.log('GTM: dataLayer.push:', dataLayerObject);
                    window.dataLayer.push(dataLayerObject);
                }
            },

            /**
             * Wrapper for event: form-interaction.
             *
             * @param string interaction Interaction (ie: 'view-open').
             * @param string formType Form type (ie: 'Test Drive).
             * @param string engagementType Engagement type (ie: 'User Requested').
             */
            eventFormInteraction: function (interaction, formType, engagementType) {
                debug.log('GTM: eventFormInteraction triggered for form type [' + formType + '] and interaction [' + interaction + '].');
                this.dataLayerPush({
                    event: 'form-interaction',
                    interaction: interaction,
                    formType: formType,
                    engagementType: engagementType
                });
            },

            /**
             * Wrapper for interaction: view-open.
             *
             * @param string formType Form type.
             */
            interactionViewOpen: function (formType) {
                var interaction = 'view-open';
                // Only trigger view-open call once.
                if (this.isFirstInteraction(interaction, formType)) {
                    this.eventFormInteraction(interaction, formType, 'User Requested');
                }
            },

            /**
             * Wrapper for interaction: personal-info-complete.
             *
             * @param string formType Form type.
             */
            interactionPersonalInfoComplete: function (formType) {
                this.eventFormInteraction('personal-info-complete', formType, 'User Requested');
            },

            /**
             * Wrapper for interaction: confirm-thank-you.
             *
             * @param string formType Form type.
             */
            interactionConfirmThankYou: function (formType) {
                this.eventFormInteraction('confirm-thank-you', formType, 'User Requested');
            },

            /**
             * Wrapper for interaction: close.
             *
             * @param string formType Form type.
             */
            interactionClose: function (formType) {
                var interaction = 'close';
                // Only trigger close call once.
                if (this.isFirstInteraction(interaction, formType)) {
                    this.eventFormInteraction(interaction, formType, 'User Requested');
                }
            }
        };
    }());

    /**
     * Contact us form.
     *
     * Form:
     *   - tesla_contact_form
     *   - tesla_corporate_form
     * Url:
     *   - /contact
     *   - /corporate (en_GB and other EU markets)
     * Called from:
     *   - tesla_corporate_form.js
     *   - tesla_corporate_form.main.inc
     */
    TeslaAnalytics.ContactUsForm = (function () {

        var _formType = 'Contact Us';

        return {
            /**
             * Contact us: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Contact us: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Contact us: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * US Drive to believe (one week with Model X campaign) signup.
     *
     * Form:
     *   - tesla_drive_to_blieve_form
     * Url:
     *   - /one-week-with-model-x
     *   - /campaign/one-week-with-model-x
     * Called from:
     *   - tesla_drive_to_believe_form.main.inc
     */
    TeslaAnalytics.DriveToBelieveUS = (function () {

        var _formType = 'newsletter signup';

        return {
            /**
             * Drive to Believe (US): view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Drive to Believe (US): personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Drive to Believe (US): confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Event.
     *
     * Form:
     *   - tesla-rsvp-event-form
     * Url:
     *   - /events
     * Called from:
     *   - tesla_test_drive/templates/blog-newsletter-thank-you.tpl.php
     */
    TeslaAnalytics.Event = (function () {

        var _formType = 'Event';

        return {
            /**
             * Event: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Event: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Event: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Event RSVP.
     *
     * Form:
     *   - tesla_test_drive_form
     * Url:
     *   - /event/tesla-explores-park-city-ut
     * Called from:
     *   - tesla_rsvp_event/tesla_rsvp_event.module
     */
    TeslaAnalytics.EventRsvp = (function () {

        var _formType = 'Event RSVP';

        return {
            /**
             * Event RSVP: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Event RSVP: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Event RSVP: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * EU greatest drive campaign.
     *
     * Form:
     *   - tesla_greatest_drive_form
     * Url:
     *   - /greatest-drive
     *   - /campaign/greatest-drive
     * Called from:
     *   - tesla_drive_to_believe_form.tesla_greatest_drive.inc
     */
    TeslaAnalytics.GreatestDrive = (function () {

        var _formType = 'Greatest Drive';

        return {
            /**
             * Drive to Believe (US): view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Drive to Believe (US): personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Drive to Believe (US): confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * EU greatest drive campaign Co driver.
     *
     * Form:
     *   - tesla_greatest_drive_co_driver_modal_form
     * Url:
     *   - /campaign/greatest-drive/nominate
     *   - /campaign/greatest-drive/success
     * Called from:
     *   - tesla_drive_to_believe_form.tesla_greatest_drive.inc
     */
    TeslaAnalytics.GreatestDriveCoDriver = (function () {
        var _formType = 'Greatest Drive - CD';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Greatest Drive Co Driver: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Greatest Drive Co Driver: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Innovation marketing form with the drive to believe layout
     *
     * Form:
     *   - tesla_general_marketing_form
     * Url:
     *   - /campaign/innovationerleben
     *   - /campaign/innovationerleben/success
     * Called from:
     *   - tesla_drive_to_believe_form.tesla_general_marketing_form.inc
     */
    TeslaAnalytics.InnovationMarketingForm = (function () {
        var _formType = 'Innovationerleben';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function (form_name) {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Greatest Drive Co Driver: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (form_name, uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Greatest Drive Co Driver: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (form_name, uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * digitalisierung-erfahren marketing form with the drive to believe layout
     *
     * Form:
     *   - tesla_drive_to_believe_form
     * Url:
     *   - /campaign/digitalisierung-erfahren
     * Called from:
     *   - tesla_drive_to_believe_form.main.inc
     */
    TeslaAnalytics.Digitization = (function () {
        var _formType = 'Digitization';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function (form_name) {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * powerwall campaign marketing form with the drive to believe layout
     *
     * Form:
     *   - general_marketing_form
     * Url:
     *   - /campaign/powerwall
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.PowerwallCampaign = (function () {
        var _formType = 'powerwall-home-campaign';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function (form_name) {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * powerwall stories campaign marketing form with the drive to believe layout
     *
     * Form:
     *   - general_marketing_form
     * Url:
     *   - /campaign/powerwallstories
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     */
    TeslaAnalytics.PowerwallStoriesCampaign = (function () {
        var _formType = 'powerwall-stories-campaign';
        return {

            /**
             * General Marketing form: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * General Marketing form: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * General Marketing form: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        }
    }());

    /**
     * powerwallhome-email campaign marketing form with the drive to believe layout
     *
     * Form:
     *   - general_marketing_form
     * Url:
     *   - /campaign/powerwallhome-email
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     */
    TeslaAnalytics.PowerwallhomeEmailCampaign = (function () {
        var _formType = 'powerwallhome-email-campaign';
        return {

            /**
             * General Marketing form: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * General Marketing form: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * General Marketing form: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        }
    }());

     /**
     * Swedish Arkaden campaign marketing form with the drive to believe layout
     *   - /campaign/arkaden
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.ArkadenCampaign = (function () {
        var _formType = 'Sweden Arkaden Campaign';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * winter-experience owners campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience/owners
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.WinterExperienceOwners = (function () {
        var _formType = 'winter-experience owners';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * winter-experience friend campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience/friend
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.WinterExperienceFriend = (function () {
        var _formType = 'winter-experience friend';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * winter-experience ice main campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.WinterExperienceIce = (function () {
        var _formType = 'winter-experience ice';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * winter-experience friend campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience/success
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.WinterExperienceIceFriend = (function () {
        var _formType = 'winter-experience ice friend';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Privium owners campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience/privium
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.PriviumCampaign = (function () {
        var _formType = 'Privium owners';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Privium friends campaign marketing form with the drive to believe layout
     *   - /campaign/winter-experience/privium-friend
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.PriviumFriendCampaign = (function () {
        var _formType = 'Privium friend';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Tiny House campaign marketing form for Energy.
     *   - /campaign/tiny-house
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     */
    TeslaAnalytics.TinyHouse = (function () {
        var _formType = 'tiny-house';

        return {
            /**
             * Tiny House: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * ludicrous acceleration experience campaign marketing form with the drive to believe layout
     *   - /campaign/ludicrous-fuji
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.LudicrousAccelerationExperience = (function () {
        var _formType = 'ludicrous-acceleration-experience';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * ludicrous acceleration experience campaign clone for preformance tracking marketing form with the drive to believe layout
     *   - /campaign/ludicrous-models
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.LudicrousAccelerationExperienceClone = (function () {
        var _formType = 'ludicrous-models preformance Tracing';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * the german Telekom campaign marketing form with the drive to believe layout
     *   - /campaign/telekom
     * Called from:
     *   - tesla_drive_to_believe_form.general_marketing_form.inc
     *
     */
    TeslaAnalytics.TelekomCampaign = (function () {
        var _formType = 'German Telekom Campaign';

        return {
            /**
             * Greatest Drive Co Driver: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * digitalisierung-erfahren: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * digitalisierung-erfahren: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * HK Tesla Workplace campaign
     *
     * Url
     *   - /campaign/tesla-workplace
     * 
     * Called from:
     *   - tesla_workplace_form.main.inc
     */
    TeslaAnalytics.TeslaWorkplaceCampaign = (function () {
        var _formType = 'Tesla Workplace';

        return {
            /**
             * HK Tesla Workplace: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * HK Tesla Workplace: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * HK Tesla Workplace: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Newsletter signup.
     *
     * Form:
     *   - tesla_insider_form
     * Url:
     *   - /updates
     *   - /model3
     *   - / (homepage)
     * Called from:
     *   - tesla_insider_form/tesla_insider_form.main.inc
     *   - tesla_get_updates/templates/get-updates-thank-you.tpl.php
     *   - tesla_test_drive/templates/blog-newsletter-thank-you.tpl.php
     */
    TeslaAnalytics.NewsletterSignup = (function () {

        var _formType = 'Newsletter Signup';

        return {
            /**
             * Newsletter signup: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Newsletter signup: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Newsletter signup: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Test drive forms / Lead creation from order form.
     *
     * Form:
     *   - tesla_order_form
     * Url:
     *   - /order
     * Called from:
     *   - tesla_payment_forms.crm.js
     */
    TeslaAnalytics.OrderForm = (function () {

        var _formType = 'Order Form';

        return {
            /**
             * Lead creation from order form: order-form-lead-creation.
             *
             * @param string uuid Uuid.
             */
            interactionOrderFormLeadCreation: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.eventFormInteraction('order-form-lead-creation', _formType, 'SF Lead Creation');
            }
        };
    }());

    /**
     * Request Callback.
     *
     * Form:
     *   - tesla_request_callback_form
     * Url:
     *   - /inventory/callback/5YJXCAE4XGF006813
     * Called from:
     *   - tesla_test_drive/tesla_test_drive.module
     *   - tesla_request_callback/tesla_request_callback.module
     *   - tesla_request_callback/tesla_request_callback.main.inc
     *   - tesla_request_callback/templates/callback-standalone.tpl.php
     *   - tesla_request_callback/templates/call-back-standalone.tpl.php
     *   - tesla_test_drive/templates/thank-you-form.tpl.php
     *   - tesla_request_callback/js/request_callback.js
     *   - tesla_enterprise/tesla_enterprise.callback_form.inc
     *   - tesla_enterprise/js/callback_form/callback_form.js
     */
    TeslaAnalytics.RequestCallback = (function () {

        var _formType = 'Request Callback';

        return {
            /**
             * Request callback: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Request callback: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Request callback: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Save Design.
     *
     * Form:
     *   - tesla_lead_forms_save_design_form
     * Url:
     *   - /order
     * Called from:
     *   - tesla_payment_forms/order_form/tesla_order_form.main.inc
     */
    TeslaAnalytics.SaveDesign = (function () {

        var _formType = 'Save Design';

        return {
            /**
             * Save design: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Save design: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Save design: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            },

            /**
             * Save design: close.
             */
            interactionClose: function () {
                TeslaAnalytics.Helpers.interactionClose(_formType);
            },

            /**
             * Save design: copy-link.
             */
            interactionCopyLink: function () {
                var interaction = 'copy-link';
                // Only trigger close call once.
                if (TeslaAnalytics.Helpers.isFirstInteraction(interaction, _formType)) {
                    TeslaAnalytics.Helpers.eventFormInteraction(interaction, _formType, 'User Requested');
                }
            }
        };
    }());

    /**
     * Support Contact Us.
     *
     * Form:
     *   - ?
     * Url:
     *   - ?
     * Called from:
     *   - tesla_support/tesla_support.main.inc
     *   - tesla_support/templates/thank-you-form.tpl.php
     */
    TeslaAnalytics.SupportContactUs = (function () {

        var _formType = 'Support Contact Us';

        return {
            /**
             * Support Contact Us: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Support Contact Us: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Support Contact Us: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Test drive forms.
     *
     * Form:
     *   - tesla_test_drive_form
     * Url:
     *   - /
     *   - /drive
     * Called from:
     *   - tesla_test_drive/js/test_drive_scripts.js
     *   - tesla_test_drive/tesla_test_drive_form.main.inc
     *   - tesla_test_drive/templates/call-back-standalone.tpl.php
     *   - tesla_test_drive/templates/test-drive-standalone.tpl.php
     */
    TeslaAnalytics.TestDriveForm = (function () {

        var _formType = 'Test Drive';

        return {
            /**
             * Test drive: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Test drive: email-submitted.
             *
             * @param string uuid Uuid.
             */
            interactionEmailOnlyComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.eventFormInteraction('email-submitted', _formType, 'User Requested');
            },

            /**
             * Test drive: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Test drive: vehicle-model-selected.
             */
            interactionVehicleModelSelected: function () {
                TeslaAnalytics.Helpers.eventFormInteraction('vehicle-model-selected', _formType, 'User Requested');
            },

            /**
             * Test drive: location-time-complete.
             */
            interactionLocationTimeComplete: function () {
                TeslaAnalytics.Helpers.eventFormInteraction('location-time-complete', _formType, 'User Requested');
            },

            /**
             * Test drive: confirm-call-request.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmCallRequest: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.eventFormInteraction('confirm-call-request', _formType, 'User Requested');
            },

            /**
             * Test drive: driving-questions-complete.
             *
             * @param string uuid Uuid.
             */
            interactionDrivingQuestionsComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.eventFormInteraction('driving-questions-complete', _formType, 'User Requested');
            },

            /**
             * Test drive: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Trade-In.
     *
     * Form:
     *   - tesla_request_callback_form
     * Url:
     *   - ?
     * Called from:
     *   - tesla_test_drive/tesla_test_drive.module
     *   - tesla_request_callback/tesla_request_callback.module
     *   - tesla_request_callback/tesla_request_callback.main.inc
     *   - tesla_request_callback/callback-standalone.tpl.php
     *   - tesla_request_callback/request-callback-standalone.tpl.php
     *   - tesla_request_callback/request-quote-standalone.tpl.php
     *   - tesla_test_drive/templates/thank-you-form.tpl.php
     */
    TeslaAnalytics.TradeIn = (function () {

        var _formType = 'Trade-In';

        return {
            /**
             * Request callback: view-open.
             */
            interactionViewOpen: function () {
                TeslaAnalytics.Helpers.interactionViewOpen(_formType);
            },

            /**
             * Request callback: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            },

            /**
             * Request callback: confirm-thank-you.
             *
             * @param string uuid Uuid.
             */
            interactionConfirmThankYou: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionConfirmThankYou(_formType);
            }
        };
    }());

    /**
     * Charging Site Request.
     *
     * Form:
     *   - tesla_charging_partner_form
     * Url:
     *   - /charging-partners
     * Called from:
     *   - tesla_charging_partner_form/tesla_charging_partner_form.module
     */
    TeslaAnalytics.ChargingSiteRequest = (function () {

        var _formType = 'charging-site-request';

        return {
            /**
             * Charging Site Request: personal-info-complete.
             *
             * @param string uuid Uuid.
             */
            interactionPersonalInfoComplete: function (uuid) {
                TeslaAnalytics.Helpers.setUuid(uuid);
                TeslaAnalytics.Helpers.interactionPersonalInfoComplete(_formType);
            }
        };
    }());
}(window, TeslaAnalytics, debug));
;
/**
 * @file
 * Anything that needs to be included in the <head>
 * of the page instead of before </body> goes here
 *
 */
(function (window, document, $, Drupal) {
    "use strict";

    Drupal.behaviors.change_media_query_content = {
        attach: function (context) {
            /*
             * If Desktop or Mobile, always add correct meta tag for scaling
             * If Tablet, always display at full width
             */

            // Find matches
            var mql = window.matchMedia("(orientation: landscape)");

            if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.summary) === "undefined") {
                BrowserDetect.init();
            }

            updateMeta(mql);

            // Add a media query change listener
            if(mql.addListener){
                mql.addListener(function(m) {
                    updateMeta(m);
                });
            }

            function updateMeta(mediaQueryVar) {
                var androidKeyboardActive = false;

                // Identify if Android mobile keyboard is actively shown. Mobile
                // keyboard will be active if an input / text field has focus.
                if($('html').hasClass('touch') && $('input,textarea').is(":focus") && BrowserDetect.OS === 'Android') {
                    androidKeyboardActive = true;
                }

                if(($('html').hasClass('touch') && mediaQueryVar.matches && !androidKeyboardActive) || BrowserDetect.OS === 'iOS Tablet Device' || $('html').hasClass('unresponsive')) {
                    $('#viewport-tag').attr('content','width=1080');
                }
                else {
                    $('#viewport-tag').attr('content','width=device-width, initial-scale=1');
                }
            }
        }
    };

    Drupal.behaviors.detect_browser_and_platform_and_add_appropriate_classes_to_body_tag = {
        attach: function (context) {

            var userAgent = navigator.userAgent.toLowerCase(),
                carBrowser = (userAgent.indexOf('qtcarbrowser') != -1);

            // If this is the in-car browser, we need to add a class so we can target it specifically
            if (carBrowser) {
                $('body').addClass('browser-incar');

                // remove custom typography from in-car browser because it can't render all the glyphs necessary.
                $('.fontstack-asset').remove();
            } else {
                $('body').addClass('browser-notcar');
            }
        }
    };

    Drupal.behaviors.fixed_header_nav_on_mobile_scroll = {
        attach: function(context) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > -52 ) {
                    $(".sticky-nav").addClass('is-stuck');
                } else {
                    $(".sticky-nav").removeClass('is-stuck');
                }
            });
        }
    };

}(this, this.document, this.jQuery, this.Drupal));
;
