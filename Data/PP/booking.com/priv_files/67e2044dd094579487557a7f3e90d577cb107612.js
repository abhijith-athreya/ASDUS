/* @preserve
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
!function(e, t) {
"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) :function(e) {
if (!e.document) throw new Error("jQuery requires a window with a document");
return t(e);
} :t(e);
}("undefined" != typeof window ? window :this, function(e, t) {
var n = [], r = n.slice, i = n.concat, o = n.push, a = n.indexOf, s = {}, u = s.toString, l = s.hasOwnProperty, c = {}, f = "1.11.3", d = function(e, t) {
return new d.fn.init(e, t);
}, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, h = /^-ms-/, m = /-([\da-z])/gi, g = function(e, t) {
return t.toUpperCase();
};
d.fn = d.prototype = {
jquery:f,
constructor:d,
selector:"",
length:0,
toArray:function() {
return r.call(this);
},
get:function(e) {
return null != e ? 0 > e ? this[e + this.length] :this[e] :r.call(this);
},
pushStack:function(e) {
var t = d.merge(this.constructor(), e);
return t.prevObject = this, t.context = this.context, t;
},
each:function(e, t) {
return d.each(this, e, t);
},
map:function(e) {
return this.pushStack(d.map(this, function(t, n) {
return e.call(t, n, t);
}));
},
slice:function() {
return this.pushStack(r.apply(this, arguments));
},
first:function() {
return this.eq(0);
},
last:function() {
return this.eq(-1);
},
eq:function(e) {
var t = this.length, n = +e + (0 > e ? t :0);
return this.pushStack(n >= 0 && t > n ? [ this[n] ] :[]);
},
end:function() {
return this.prevObject || this.constructor(null);
},
push:o,
sort:n.sort,
splice:n.splice
}, d.extend = d.fn.extend = function() {
var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || d.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) {
if (e = a[r], n = i[r], a === n) continue;
l && n && (d.isPlainObject(n) || (t = d.isArray(n))) ? (t ? (t = !1, o = e && d.isArray(e) ? e :[]) :o = e && d.isPlainObject(e) ? e :{}, a[r] = d.extend(l, o, n)) :void 0 !== n && (a[r] = n);
}
return a;
}, d.extend({
expando:"jQuery" + (f + Math.random()).replace(/\D/g, ""),
isReady:!0,
error:function(e) {
throw new Error(e);
},
noop:function() {},
isFunction:function(e) {
return "function" === d.type(e);
},
isArray:Array.isArray || function(e) {
return "array" === d.type(e);
},
isWindow:function(e) {
return null != e && e == e.window;
},
isNumeric:function(e) {
return !d.isArray(e) && e - parseFloat(e) + 1 >= 0;
},
isEmptyObject:function(e) {
var t;
for (t in e) return !1;
return !0;
},
isPlainObject:function(e) {
var t;
if (!e || "object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
try {
if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype, "isPrototypeOf")) return !1;
} catch (n) {
return !1;
}
if (c.ownLast) for (t in e) return l.call(e, t);
for (t in e) ;
return void 0 === t || l.call(e, t);
},
type:function(e) {
if (null == e) return e + "";
return "object" == typeof e || "function" == typeof e ? s[u.call(e)] || "object" :typeof e;
},
globalEval:function(t) {
t && d.trim(t) && (e.execScript || function(t) {
e.eval.call(e, t);
})(t);
},
camelCase:function(e) {
return e.replace(h, "ms-").replace(m, g);
},
nodeName:function(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
},
each:function(e, t, n) {
var r, i = 0, o = e.length, a = v(e);
if (n) {
if (a) for (;o > i && (r = t.apply(e[i], n), r !== !1); i++) ; else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
} else if (a) for (;o > i && (r = t.call(e[i], i, e[i]), r !== !1); i++) ; else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
return e;
},
trim:function(e) {
return null == e ? "" :(e + "").replace(p, "");
},
makeArray:function(e, t) {
var n = t || [];
return null != e && (v(Object(e)) ? d.merge(n, "string" == typeof e ? [ e ] :e) :o.call(n, e)), n;
},
inArray:function(e, t, n) {
var r;
if (t) {
if (a) return a.call(t, e, n);
for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) :n :0; r > n; n++) if (n in t && t[n] === e) return n;
}
return -1;
},
merge:function(e, t) {
for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
if (n !== n) for (;void 0 !== t[r]; ) e[i++] = t[r++];
return e.length = i, e;
},
grep:function(e, t, n) {
for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
return i;
},
map:function(e, t, n) {
var r, o = 0, a = e.length, s = v(e), u = [];
if (s) for (;a > o; o++) r = t(e[o], o, n), null != r && u.push(r); else for (o in e) r = t(e[o], o, n), null != r && u.push(r);
return i.apply([], u);
},
guid:1,
proxy:function(e, t) {
var n, i, o;
if ("string" == typeof t && (o = e[t], t = e, e = o), !d.isFunction(e)) return void 0;
return n = r.call(arguments, 2), i = function() {
return e.apply(t || this, n.concat(r.call(arguments)));
}, i.guid = e.guid = e.guid || d.guid++, i;
},
now:function() {
return +new Date();
},
support:c
}), d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
s["[object " + t + "]"] = t.toLowerCase();
});
function v(e) {
var t = "length" in e && e.length, n = d.type(e);
if ("function" === n || d.isWindow(e)) return !1;
if (1 === e.nodeType && t) return !0;
return "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
}
var y = /* @preserve
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e) {
var t, n, r, i, o, a, s, u, l, c, f, d, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date(), w = e.document, T = 0, C = 0, N = se(), E = se(), k = se(), S = function(e, t) {
return e === t && (f = !0), 0;
}, j = 1 << 31, A = {}.hasOwnProperty, D = [], L = D.pop, H = D.push, _ = D.push, q = D.slice, M = function(e, t) {
for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
return -1;
}, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", P = B.replace("w", "w#"), R = "\\[" + F + "*(" + B + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + F + "*\\]", W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", $ = new RegExp(F + "+", "g"), z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), I = new RegExp("^" + F + "*," + F + "*"), X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), Q = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"), U = new RegExp(W), J = new RegExp("^" + P + "$"), V = {
ID:new RegExp("^#(" + B + ")"),
CLASS:new RegExp("^\\.(" + B + ")"),
TAG:new RegExp("^(" + B.replace("w", "w*") + ")"),
ATTR:new RegExp("^" + R),
PSEUDO:new RegExp("^" + W),
CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
bool:new RegExp("^(?:" + O + ")$", "i"),
needsContext:new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
}, Y = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g, ne = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), re = function(e, t, n) {
var r = "0x" + t - 65536;
return r !== r || n ? t :0 > r ? String.fromCharCode(r + 65536) :String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, ie = function() {
d();
};
try {
_.apply(D = q.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
} catch (oe) {
_ = {
apply:D.length ? function(e, t) {
H.apply(e, q.call(t));
} :function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function ae(e, t, r, i) {
var o, s, l, c, f, h, v, y, T, C;
if ((t ? t.ownerDocument || t :w) !== p && d(t), t = t || p, r = r || [], c = t.nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return r;
if (!i && m) {
if (11 !== c && (o = Z.exec(e))) if (l = o[1]) {
if (9 === c) {
if (s = t.getElementById(l), !s || !s.parentNode) return r;
if (s.id === l) return r.push(s), r;
} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(l)) && b(t, s) && s.id === l) return r.push(s), r;
} else {
if (o[2]) return _.apply(r, t.getElementsByTagName(e)), r;
if ((l = o[3]) && n.getElementsByClassName) return _.apply(r, t.getElementsByClassName(l)), r;
}
if (n.qsa && (!g || !g.test(e))) {
if (y = v = x, T = t, C = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
for (h = a(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") :t.setAttribute("id", y), y = "[id='" + y + "'] ", f = h.length; f--; ) h[f] = y + ve(h[f]);
T = ee.test(e) && me(t.parentNode) || t, C = h.join(",");
}
if (C) try {
return _.apply(r, T.querySelectorAll(C)), r;
} catch (N) {} finally {
v || t.removeAttribute("id");
}
}
}
return u(e.replace(z, "$1"), t, r, i);
}
function se() {
var e = [];
function t(n, i) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
}
return t;
}
function ue(e) {
return e[x] = !0, e;
}
function le(e) {
var t = p.createElement("div");
try {
return !!e(t);
} catch (n) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function ce(e, t) {
for (var n = e.split("|"), i = e.length; i--; ) r.attrHandle[n[i]] = t;
}
function fe(e, t) {
var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || j) - (~e.sourceIndex || j);
if (r) return r;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 :-1;
}
function de(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return "input" === n && t.type === e;
};
}
function pe(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function he(e) {
return ue(function(t) {
return t = +t, ue(function(n, r) {
for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
});
});
}
function me(e) {
return e && "undefined" != typeof e.getElementsByTagName && e;
}
n = ae.support = {}, o = ae.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return t ? "HTML" !== t.nodeName :!1;
}, d = ae.setDocument = function(e) {
var t, i, a = e ? e.ownerDocument || e :w;
if (a === p || 9 !== a.nodeType || !a.documentElement) return p;
return p = a, h = a.documentElement, i = a.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ie, !1) :i.attachEvent && i.attachEvent("onunload", ie)), m = !o(a), n.attributes = le(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = le(function(e) {
return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = K.test(a.getElementsByClassName), n.getById = le(function(e) {
return h.appendChild(e).id = x, !a.getElementsByName || !a.getElementsByName(x).length;
}), n.getById ? (r.find.ID = function(e, t) {
if ("undefined" != typeof t.getElementById && m) {
var n = t.getElementById(e);
return n && n.parentNode ? [ n ] :[];
}
}, r.filter.ID = function(e) {
var t = e.replace(ne, re);
return function(e) {
return e.getAttribute("id") === t;
};
}) :(delete r.find.ID, r.filter.ID = function(e) {
var t = e.replace(ne, re);
return function(e) {
var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
return n && n.value === t;
};
}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
if ("undefined" != typeof t.getElementsByTagName) return t.getElementsByTagName(e);
if (n.qsa) return t.querySelectorAll(e);
} :function(e, t) {
var n, r = [], i = 0, o = t.getElementsByTagName(e);
if ("*" === e) {
for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
return r;
}
return o;
}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
if (m) return t.getElementsByClassName(e);
}, v = [], g = [], (n.qsa = K.test(a.querySelectorAll)) && (le(function(e) {
h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]");
}), le(function(e) {
var t = a.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
})), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", W);
}), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement :e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} :function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, S = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
if (r) return r;
if (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) :1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r) {
if (e === a || e.ownerDocument === w && b(w, e)) return -1;
if (t === a || t.ownerDocument === w && b(w, t)) return 1;
return c ? M(c, e) - M(c, t) :0;
}
return 4 & r ? -1 :1;
} :function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ];
if (!i || !o) return e === a ? -1 :t === a ? 1 :i ? -1 :o ? 1 :c ? M(c, e) - M(c, t) :0;
if (i === o) return fe(e, t);
for (n = e; n = n.parentNode; ) s.unshift(n);
for (n = t; n = n.parentNode; ) u.unshift(n);
for (;s[r] === u[r]; ) r++;
return r ? fe(s[r], u[r]) :s[r] === w ? -1 :u[r] === w ? 1 :0;
}, a;
}, ae.matches = function(e, t) {
return ae(e, null, null, t);
}, ae.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== p && d(e), t = t.replace(Q, "='$1']"), n.matchesSelector && m && (!v || !v.test(t)) && (!g || !g.test(t))) try {
var r = y.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (i) {}
return ae(t, p, null, [ e ]).length > 0;
}, ae.contains = function(e, t) {
return (e.ownerDocument || e) !== p && d(e), b(e, t);
}, ae.attr = function(e, t) {
(e.ownerDocument || e) !== p && d(e);
var i = r.attrHandle[t.toLowerCase()], o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) :void 0;
return void 0 !== o ? o :n.attributes || !m ? e.getAttribute(t) :(o = e.getAttributeNode(t)) && o.specified ? o.value :null;
}, ae.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, ae.uniqueSort = function(e) {
var t, r = [], i = 0, o = 0;
if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
for (;i--; ) e.splice(r[i], 1);
}
return c = null, e;
}, i = ae.getText = function(e) {
var t, n = "", r = 0, o = e.nodeType;
if (o) {
if (1 === o || 9 === o || 11 === o) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
} else if (3 === o || 4 === o) return e.nodeValue;
} else for (;t = e[r++]; ) n += i(t);
return n;
}, r = ae.selectors = {
cacheLength:50,
createPseudo:ue,
match:V,
attrHandle:{},
find:{},
relative:{
">":{
dir:"parentNode",
first:!0
},
" ":{
dir:"parentNode"
},
"+":{
dir:"previousSibling",
first:!0
},
"~":{
dir:"previousSibling"
}
},
preFilter:{
ATTR:function(e) {
return e[1] = e[1].replace(ne, re), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD:function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && ae.error(e[0]), e;
},
PSEUDO:function(e) {
var t, n = !e[6] && e[2];
if (V.CHILD.test(e[0])) return null;
return e[3] ? e[2] = e[4] || e[5] || "" :n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3);
}
},
filter:{
TAG:function(e) {
var t = e.replace(ne, re).toLowerCase();
return "*" === e ? function() {
return !0;
} :function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS:function(e) {
var t = N[e + " "];
return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && N(e, function(e) {
return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR:function(e, t, n) {
return function(r) {
var i = ae.attr(r, e);
if (null == i) return "!=" === t;
if (!t) return !0;
return i += "", "=" === t ? i === n :"!=" === t ? i !== n :"^=" === t ? n && 0 === i.indexOf(n) :"*=" === t ? n && i.indexOf(n) > -1 :"$=" === t ? n && i.slice(-n.length) === n :"~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 :"|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" :!1;
};
},
CHILD:function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} :function(t, n, u) {
var l, c, f, d, p, h, m = o !== a ? "nextSibling" :"previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
if (g) {
if (o) {
for (;m; ) {
for (f = t; f = f[m]; ) if (s ? f.nodeName.toLowerCase() === v :1 === f.nodeType) return !1;
h = m = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ a ? g.firstChild :g.lastChild ], a && y) {
for (c = g[x] || (g[x] = {}), l = c[e] || [], p = l[0] === T && l[1], d = l[0] === T && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop(); ) if (1 === f.nodeType && ++d && f === t) {
c[e] = [ T, p, d ];
break;
}
} else if (y && (l = (t[x] || (t[x] = {}))[e]) && l[0] === T) d = l[1]; else for (;(f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v :1 !== f.nodeType) || !++d || (y && ((f[x] || (f[x] = {}))[e] = [ T, d ]), f !== t)); ) ;
return d -= i, d === r || d % r === 0 && d / r >= 0;
}
};
},
PSEUDO:function(e, t) {
var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
if (i[x]) return i(t);
if (i.length > 1) return n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
for (var r, o = i(e, t), a = o.length; a--; ) r = M(e, o[a]), e[r] = !(n[r] = o[a]);
}) :function(e) {
return i(e, 0, n);
};
return i;
}
},
pseudos:{
not:ue(function(e) {
var t = [], n = [], r = s(e.replace(z, "$1"));
return r[x] ? ue(function(e, t, n, i) {
for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
}) :function(e, i, o) {
return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
};
}),
has:ue(function(e) {
return function(t) {
return ae(e, t).length > 0;
};
}),
contains:ue(function(e) {
return e = e.replace(ne, re), function(t) {
return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
};
}),
lang:ue(function(e) {
return J.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(ne, re).toLowerCase(), function(t) {
var n;
do if (n = m ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
return !1;
};
}),
target:function(t) {
var n = e.location && e.location.hash;
return n && n.slice(1) === t.id;
},
root:function(e) {
return e === h;
},
focus:function(e) {
return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled:function(e) {
return e.disabled === !1;
},
disabled:function(e) {
return e.disabled === !0;
},
checked:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && !!e.checked || "option" === t && !!e.selected;
},
selected:function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
},
empty:function(e) {
for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
return !0;
},
parent:function(e) {
return !r.pseudos.empty(e);
},
header:function(e) {
return G.test(e.nodeName);
},
input:function(e) {
return Y.test(e.nodeName);
},
button:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text:function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
},
first:he(function() {
return [ 0 ];
}),
last:he(function(e, t) {
return [ t - 1 ];
}),
eq:he(function(e, t, n) {
return [ 0 > n ? n + t :n ];
}),
even:he(function(e, t) {
for (var n = 0; t > n; n += 2) e.push(n);
return e;
}),
odd:he(function(e, t) {
for (var n = 1; t > n; n += 2) e.push(n);
return e;
}),
lt:he(function(e, t, n) {
for (var r = 0 > n ? n + t :n; --r >= 0; ) e.push(r);
return e;
}),
gt:he(function(e, t, n) {
for (var r = 0 > n ? n + t :n; ++r < t; ) e.push(r);
return e;
})
}
}, r.pseudos.nth = r.pseudos.eq;
for (t in {
radio:!0,
checkbox:!0,
file:!0,
password:!0,
image:!0
}) r.pseudos[t] = de(t);
for (t in {
submit:!0,
reset:!0
}) r.pseudos[t] = pe(t);
function ge() {}
ge.prototype = r.filters = r.pseudos, r.setFilters = new ge(), a = ae.tokenize = function(e, t) {
var n, i, o, a, s, u, l, c = E[e + " "];
if (c) return t ? 0 :c.slice(0);
for (s = e, u = [], l = r.preFilter; s; ) {
(!n || (i = I.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
value:n,
type:i[0].replace(z, " ")
}), s = s.slice(n.length));
for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
value:n,
type:a,
matches:i
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length :s ? ae.error(e) :E(e, u).slice(0);
};
function ve(e) {
for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
return r;
}
function ye(e, t, n) {
var r = t.dir, i = n && "parentNode" === r, o = C++;
return t.first ? function(t, n, o) {
for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
} :function(t, n, a) {
var s, u, l = [ T, o ];
if (a) {
for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || i) {
if (u = t[x] || (t[x] = {}), (s = u[r]) && s[0] === T && s[1] === o) return l[2] = s[2];
if (u[r] = l, l[2] = e(t, n, a)) return !0;
}
};
}
function be(e) {
return e.length > 1 ? function(t, n, r) {
for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
return !0;
} :e[0];
}
function xe(e, t, n) {
for (var r = 0, i = t.length; i > r; r++) ae(e, t[r], n);
return n;
}
function we(e, t, n, r, i) {
for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
return a;
}
function Te(e, t, n, r, i, o) {
return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ue(function(o, a, s, u) {
var l, c, f, d = [], p = [], h = a.length, m = o || xe(t || "*", s.nodeType ? [ s ] :s, []), g = !e || !o && t ? m :we(m, d, e, s, u), v = n ? i || (o ? e :h || r) ? [] :a :g;
if (n && n(g, v, s, u), r) for (l = we(v, p), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[p[c]] = !(g[p[c]] = f));
if (o) {
if (i || e) {
if (i) {
for (l = [], c = v.length; c--; ) (f = v[c]) && l.push(g[c] = f);
i(null, v = [], l, u);
}
for (c = v.length; c--; ) (f = v[c]) && (l = i ? M(o, f) :d[c]) > -1 && (o[l] = !(a[l] = f));
}
} else v = we(v === a ? v.splice(h, v.length) :v), i ? i(null, a, v, u) :_.apply(a, v);
});
}
function Ce(e) {
for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 :0, c = ye(function(e) {
return e === t;
}, s, !0), f = ye(function(e) {
return M(t, e) > -1;
}, s, !0), d = [ function(e, n, r) {
var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) :f(e, n, r));
return t = null, i;
} ]; o > u; u++) if (n = r.relative[e[u].type]) d = [ ye(be(d), n) ]; else {
if (n = r.filter[e[u].type].apply(null, e[u].matches), n[x]) {
for (i = ++u; o > i && !r.relative[e[i].type]; i++) ;
return Te(u > 1 && be(d), u > 1 && ve(e.slice(0, u - 1).concat({
value:" " === e[u - 2].type ? "*" :""
})).replace(z, "$1"), n, i > u && Ce(e.slice(u, i)), o > i && Ce(e = e.slice(i)), o > i && ve(e));
}
d.push(n);
}
return be(d);
}
function Ne(e, t) {
var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
var f, d, h, m = 0, g = "0", v = o && [], y = [], b = l, x = o || i && r.find.TAG("*", c), w = T += null == b ? 1 :Math.random() || .1, C = x.length;
for (c && (l = a !== p && a); g !== C && null != (f = x[g]); g++) {
if (i && f) {
for (d = 0; h = e[d++]; ) if (h(f, a, s)) {
u.push(f);
break;
}
c && (T = w);
}
n && ((f = !h && f) && m--, o && v.push(f));
}
if (m += g, n && g !== m) {
for (d = 0; h = t[d++]; ) h(v, y, a, s);
if (o) {
if (m > 0) for (;g--; ) v[g] || y[g] || (y[g] = L.call(u));
y = we(y);
}
_.apply(u, y), c && !o && y.length > 0 && m + t.length > 1 && ae.uniqueSort(u);
}
return c && (T = w, l = b), v;
};
return n ? ue(o) :o;
}
return s = ae.compile = function(e, t) {
var n, r = [], i = [], o = k[e + " "];
if (!o) {
for (t || (t = a(e)), n = t.length; n--; ) o = Ce(t[n]), o[x] ? r.push(o) :i.push(o);
o = k(e, Ne(i, r)), o.selector = e;
}
return o;
}, u = ae.select = function(e, t, i, o) {
var u, l, c, f, d, p = "function" == typeof e && e, h = !o && a(e = p.selector || e);
if (i = i || [], 1 === h.length) {
if (l = h[0] = h[0].slice(0), l.length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && m && r.relative[l[1].type]) {
if (t = (r.find.ID(c.matches[0].replace(ne, re), t) || [])[0], !t) return i;
p && (t = t.parentNode), e = e.slice(l.shift().value.length);
}
for (u = V.needsContext.test(e) ? 0 :l.length; u-- && (c = l[u], !r.relative[f = c.type]); ) if ((d = r.find[f]) && (o = d(c.matches[0].replace(ne, re), ee.test(l[0].type) && me(t.parentNode) || t))) {
if (l.splice(u, 1), e = o.length && ve(l), !e) return _.apply(i, o), i;
break;
}
}
return (p || s(e, h))(o, t, !m, i, ee.test(e) && me(t.parentNode) || t), i;
}, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = le(function(e) {
return 1 & e.compareDocumentPosition(p.createElement("div"));
}), le(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || ce("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
}), n.attributes && le(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || ce("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), le(function(e) {
return null == e.getAttribute("disabled");
}) || ce(O, function(e, t, n) {
var r;
if (!n) return e[t] === !0 ? t.toLowerCase() :(r = e.getAttributeNode(t)) && r.specified ? r.value :null;
}), ae;
}(e);
d.find = y, d.expr = y.selectors, d.expr[":"] = d.expr.pseudos, d.unique = y.uniqueSort, d.text = y.getText, d.isXMLDoc = y.isXML, d.contains = y.contains;
var b = d.expr.match.needsContext, x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
function T(e, t, n) {
if (d.isFunction(t)) return d.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
});
if (t.nodeType) return d.grep(e, function(e) {
return e === t !== n;
});
if ("string" == typeof t) {
if (w.test(t)) return d.filter(t, e, n);
t = d.filter(t, e);
}
return d.grep(e, function(e) {
return d.inArray(e, t) >= 0 !== n;
});
}
d.filter = function(e, t, n) {
var r = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [ r ] :[] :d.find.matches(e, d.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, d.fn.extend({
find:function(e) {
var t, n = [], r = this, i = r.length;
if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
for (t = 0; i > t; t++) if (d.contains(r[t], this)) return !0;
}));
for (t = 0; i > t; t++) d.find(e, r[t], n);
return n = this.pushStack(i > 1 ? d.unique(n) :n), n.selector = this.selector ? this.selector + " " + e :e, n;
},
filter:function(e) {
return this.pushStack(T(this, e || [], !1));
},
not:function(e) {
return this.pushStack(T(this, e || [], !0));
},
is:function(e) {
return !!T(this, "string" == typeof e && b.test(e) ? d(e) :e || [], !1).length;
}
});
var C, N = e.document, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = d.fn.init = function(e, t) {
var n, r;
if (!e) return this;
if ("string" == typeof e) {
if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :E.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || C).find(e) :this.constructor(t).find(e);
if (n[1]) {
if (t = t instanceof d ? t[0] :t, d.merge(this, d.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t :N, !0)), x.test(n[1]) && d.isPlainObject(t)) for (n in t) d.isFunction(this[n]) ? this[n](t[n]) :this.attr(n, t[n]);
return this;
}
if (r = N.getElementById(n[2]), r && r.parentNode) {
if (r.id !== n[2]) return C.find(e);
this.length = 1, this[0] = r;
}
return this.context = N, this.selector = e, this;
}
if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
if (d.isFunction(e)) return "undefined" != typeof C.ready ? C.ready(e) :e(d);
return void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this);
};
k.prototype = d.fn, C = d(N);
var S = /^(?:parents|prev(?:Until|All))/, j = {
children:!0,
contents:!0,
next:!0,
prev:!0
};
d.extend({
dir:function(e, t, n) {
for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !d(i).is(n)); ) 1 === i.nodeType && r.push(i), i = i[t];
return r;
},
sibling:function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}
}), d.fn.extend({
has:function(e) {
var t, n = d(e, this), r = n.length;
return this.filter(function() {
for (t = 0; r > t; t++) if (d.contains(this, n[t])) return !0;
});
},
closest:function(e, t) {
for (var n, r = 0, i = this.length, o = [], a = b.test(e) || "string" != typeof e ? d(e, t || this.context) :0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 :1 === n.nodeType && d.find.matchesSelector(n, e))) {
o.push(n);
break;
}
return this.pushStack(o.length > 1 ? d.unique(o) :o);
},
index:function(e) {
if (!e) return this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
if ("string" == typeof e) return d.inArray(this[0], d(e));
return d.inArray(e.jquery ? e[0] :e, this);
},
add:function(e, t) {
return this.pushStack(d.unique(d.merge(this.get(), d(e, t))));
},
addBack:function(e) {
return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
}
});
function A(e, t) {
do e = e[t]; while (e && 1 !== e.nodeType);
return e;
}
d.each({
parent:function(e) {
var t = e.parentNode;
return t && 11 !== t.nodeType ? t :null;
},
parents:function(e) {
return d.dir(e, "parentNode");
},
parentsUntil:function(e, t, n) {
return d.dir(e, "parentNode", n);
},
next:function(e) {
return A(e, "nextSibling");
},
prev:function(e) {
return A(e, "previousSibling");
},
nextAll:function(e) {
return d.dir(e, "nextSibling");
},
prevAll:function(e) {
return d.dir(e, "previousSibling");
},
nextUntil:function(e, t, n) {
return d.dir(e, "nextSibling", n);
},
prevUntil:function(e, t, n) {
return d.dir(e, "previousSibling", n);
},
siblings:function(e) {
return d.sibling((e.parentNode || {}).firstChild, e);
},
children:function(e) {
return d.sibling(e.firstChild);
},
contents:function(e) {
return d.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :d.merge([], e.childNodes);
}
}, function(e, t) {
d.fn[e] = function(n, r) {
var i = d.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), this.length > 1 && (j[e] || (i = d.unique(i)), S.test(e) && (i = i.reverse())), this.pushStack(i);
};
});
var D = /\S+/g, L = {};
function H(e) {
var t = L[e] = {};
return d.each(e.match(D) || [], function(e, n) {
t[n] = !0;
}), t;
}
d.Callbacks = function(e) {
e = "string" == typeof e ? L[e] || H(e) :d.extend({}, e);
var t, n, r, i, o, a, s = [], u = !e.once && [], l = function(f) {
for (n = e.memory && f, r = !0, o = a || 0, a = 0, i = s.length, t = !0; s && i > o; o++) if (s[o].apply(f[0], f[1]) === !1 && e.stopOnFalse) {
n = !1;
break;
}
t = !1, s && (u ? u.length && l(u.shift()) :n ? s = [] :c.disable());
}, c = {
add:function() {
if (s) {
var r = s.length;
!function o(t) {
d.each(t, function(t, n) {
var r = d.type(n);
"function" === r ? e.unique && c.has(n) || s.push(n) :n && n.length && "string" !== r && o(n);
});
}(arguments), t ? i = s.length :n && (a = r, l(n));
}
return this;
},
remove:function() {
return s && d.each(arguments, function(e, n) {
for (var r; (r = d.inArray(n, s, r)) > -1; ) s.splice(r, 1), t && (i >= r && i--, o >= r && o--);
}), this;
},
has:function(e) {
return e ? d.inArray(e, s) > -1 :!(!s || !s.length);
},
empty:function() {
return s = [], i = 0, this;
},
disable:function() {
return s = u = n = void 0, this;
},
disabled:function() {
return !s;
},
lock:function() {
return u = void 0, n || c.disable(), this;
},
locked:function() {
return !u;
},
fireWith:function(e, n) {
return !s || r && !u || (n = n || [], n = [ e, n.slice ? n.slice() :n ], t ? u.push(n) :l(n)), this;
},
fire:function() {
return c.fireWith(this, arguments), this;
},
fired:function() {
return !!r;
}
};
return c;
}, d.extend({
Deferred:function(e) {
var t = [ [ "resolve", "done", d.Callbacks("once memory"), "resolved" ], [ "reject", "fail", d.Callbacks("once memory"), "rejected" ], [ "notify", "progress", d.Callbacks("memory") ] ], n = "pending", r = {
state:function() {
return n;
},
always:function() {
return i.done(arguments).fail(arguments), this;
},
then:function() {
var e = arguments;
return d.Deferred(function(n) {
d.each(t, function(t, o) {
var a = d.isFunction(e[t]) && e[t];
i[o[1]](function() {
var e = a && a.apply(this, arguments);
e && d.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) :n[o[0] + "With"](this === r ? n.promise() :this, a ? [ e ] :arguments);
});
}), e = null;
}).promise();
},
promise:function(e) {
return null != e ? d.extend(e, r) :r;
}
}, i = {};
return r.pipe = r.then, d.each(t, function(e, o) {
var a = o[2], s = o[3];
r[o[1]] = a.add, s && a.add(function() {
n = s;
}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
return i[o[0] + "With"](this === i ? r :this, arguments), this;
}, i[o[0] + "With"] = a.fireWith;
}), r.promise(i), e && e.call(i, i), i;
},
when:function(e) {
var t, n, i, o = 0, a = r.call(arguments), s = a.length, u = 1 !== s || e && d.isFunction(e.promise) ? s :0, l = 1 === u ? e :d.Deferred(), c = function(e, n, i) {
return function(o) {
n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) :o, i === t ? l.notifyWith(n, i) :--u || l.resolveWith(n, i);
};
};
if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) a[o] && d.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(l.reject).progress(c(o, n, t)) :--u;
return u || l.resolveWith(i, a), l.promise();
}
});
var _;
d.fn.ready = function(e) {
return d.ready.promise().done(e), this;
}, d.extend({
isReady:!1,
readyWait:1,
holdReady:function(e) {
e ? d.readyWait++ :d.ready(!0);
},
ready:function(e) {
if (e === !0 ? --d.readyWait :d.isReady) return;
if (!N.body) return setTimeout(d.ready);
if (d.isReady = !0, e !== !0 && --d.readyWait > 0) return;
_.resolveWith(N, [ d ]), d.fn.triggerHandler && (d(N).triggerHandler("ready"), d(N).off("ready"));
}
});
function q() {
N.addEventListener ? (N.removeEventListener("DOMContentLoaded", M, !1), e.removeEventListener("load", M, !1)) :(N.detachEvent("onreadystatechange", M), e.detachEvent("onload", M));
}
function M() {
(N.addEventListener || "load" === event.type || "complete" === N.readyState) && (q(), d.ready());
}
d.ready.promise = function(t) {
if (!_) if (_ = d.Deferred(), "complete" === N.readyState) setTimeout(d.ready); else if (N.addEventListener) N.addEventListener("DOMContentLoaded", M, !1), e.addEventListener("load", M, !1); else {
N.attachEvent("onreadystatechange", M), e.attachEvent("onload", M);
var n = !1;
try {
n = null == e.frameElement && N.documentElement;
} catch (r) {}
n && n.doScroll && !function i() {
if (!d.isReady) {
try {
n.doScroll("left");
} catch (e) {
return setTimeout(i, 50);
}
q(), d.ready();
}
}();
}
return _.promise(t);
};
var O, F = "undefined";
for (O in d(c)) break;
c.ownLast = "0" !== O, c.inlineBlockNeedsLayout = !1, d(function() {
var e, t, n, r;
if (n = N.getElementsByTagName("body")[0], !n || !n.style) return;
t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== F && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r);
}), function() {
var e = N.createElement("div");
if (null == c.deleteExpando) {
c.deleteExpando = !0;
try {
delete e.test;
} catch (t) {
c.deleteExpando = !1;
}
}
e = null;
}(), d.acceptData = function(e) {
var t = d.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
return 1 !== n && 9 !== n ? !1 :!t || t !== !0 && e.getAttribute("classid") === t;
};
var B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, P = /([A-Z])/g;
function R(e, t, n) {
if (void 0 === n && 1 === e.nodeType) {
var r = "data-" + t.replace(P, "-$1").toLowerCase();
if (n = e.getAttribute(r), "string" == typeof n) {
try {
n = "true" === n ? !0 :"false" === n ? !1 :"null" === n ? null :+n + "" === n ? +n :B.test(n) ? d.parseJSON(n) :n;
} catch (i) {}
d.data(e, t, n);
} else n = void 0;
}
return n;
}
function W(e) {
var t;
for (t in e) {
if ("data" === t && d.isEmptyObject(e[t])) continue;
if ("toJSON" !== t) return !1;
}
return !0;
}
function $(e, t, r, i) {
if (!d.acceptData(e)) return;
var o, a, s = d.expando, u = e.nodeType, l = u ? d.cache :e, c = u ? e[s] :e[s] && s;
if (!(c && l[c] && (i || l[c].data) || void 0 !== r || "string" != typeof t)) return;
return c || (c = u ? e[s] = n.pop() || d.guid++ :s), l[c] || (l[c] = u ? {} :{
toJSON:d.noop
}), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = d.extend(l[c], t) :l[c].data = d.extend(l[c].data, t)), a = l[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== r && (a[d.camelCase(t)] = r), "string" == typeof t ? (o = a[t], null == o && (o = a[d.camelCase(t)])) :o = a, o;
}
function z(e, t, n) {
if (!d.acceptData(e)) return;
var r, i, o = e.nodeType, a = o ? d.cache :e, s = o ? e[d.expando] :d.expando;
if (!a[s]) return;
if (t && (r = n ? a[s] :a[s].data)) {
d.isArray(t) ? t = t.concat(d.map(t, d.camelCase)) :t in r ? t = [ t ] :(t = d.camelCase(t), t = t in r ? [ t ] :t.split(" ")), i = t.length;
for (;i--; ) delete r[t[i]];
if (n ? !W(r) :!d.isEmptyObject(r)) return;
}
if (!n && (delete a[s].data, !W(a[s]))) return;
o ? d.cleanData([ e ], !0) :c.deleteExpando || a != a.window ? delete a[s] :a[s] = null;
}
d.extend({
cache:{},
noData:{
"applet ":!0,
"embed ":!0,
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(e) {
return e = e.nodeType ? d.cache[e[d.expando]] :e[d.expando], !!e && !W(e);
},
data:function(e, t, n) {
return $(e, t, n);
},
removeData:function(e, t) {
return z(e, t);
},
_data:function(e, t, n) {
return $(e, t, n, !0);
},
_removeData:function(e, t) {
return z(e, t, !0);
}
}), d.fn.extend({
data:function(e, t) {
var n, r, i, o = this[0], a = o && o.attributes;
if (void 0 === e) {
if (this.length && (i = d.data(o), 1 === o.nodeType && !d._data(o, "parsedAttrs"))) {
for (n = a.length; n--; ) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = d.camelCase(r.slice(5)), R(o, r, i[r])));
d._data(o, "parsedAttrs", !0);
}
return i;
}
if ("object" == typeof e) return this.each(function() {
d.data(this, e);
});
return arguments.length > 1 ? this.each(function() {
d.data(this, e, t);
}) :o ? R(o, e, d.data(o, e)) :void 0;
},
removeData:function(e) {
return this.each(function() {
d.removeData(this, e);
});
}
}), d.extend({
queue:function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = d._data(e, t), n && (!r || d.isArray(n) ? r = d._data(e, t, d.makeArray(n)) :r.push(n)), r || [];
},
dequeue:function(e, t) {
t = t || "fx";
var n = d.queue(e, t), r = n.length, i = n.shift(), o = d._queueHooks(e, t), a = function() {
d.dequeue(e, t);
};
"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
},
_queueHooks:function(e, t) {
var n = t + "queueHooks";
return d._data(e, n) || d._data(e, n, {
empty:d.Callbacks("once memory").add(function() {
d._removeData(e, t + "queue"), d._removeData(e, n);
})
});
}
}), d.fn.extend({
queue:function(e, t) {
var n = 2;
if ("string" != typeof e && (t = e, e = "fx", n--), arguments.length < n) return d.queue(this[0], e);
return void 0 === t ? this :this.each(function() {
var n = d.queue(this, e, t);
d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e);
});
},
dequeue:function(e) {
return this.each(function() {
d.dequeue(this, e);
});
},
clearQueue:function(e) {
return this.queue(e || "fx", []);
},
promise:function(e, t) {
var n, r = 1, i = d.Deferred(), o = this, a = this.length, s = function() {
--r || i.resolveWith(o, [ o ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) n = d._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
return s(), i.promise(t);
}
});
var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, X = [ "Top", "Right", "Bottom", "Left" ], Q = function(e, t) {
return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e);
}, U = d.access = function(e, t, n, r, i, o, a) {
var s = 0, u = e.length, l = null == n;
if ("object" === d.type(n)) {
i = !0;
for (s in n) d.access(e, t, s, n[s], !0, o, a);
} else if (void 0 !== r && (i = !0, d.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) :(l = t, t = function(e, t, n) {
return l.call(d(e), n);
})), t)) for (;u > s; s++) t(e[s], n, a ? r :r.call(e[s], s, t(e[s], n)));
return i ? e :l ? t.call(e) :u ? t(e[0], n) :o;
}, J = /^(?:checkbox|radio)$/i;
!function() {
var e = N.createElement("input"), t = N.createElement("div"), n = N.createDocumentFragment();
if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
c.noCloneEvent = !1;
}), t.cloneNode(!0).click()), null == c.deleteExpando) {
c.deleteExpando = !0;
try {
delete t.test;
} catch (r) {
c.deleteExpando = !1;
}
}
}(), function() {
var t, n, r = N.createElement("div");
for (t in {
submit:!0,
change:!0,
focusin:!0
}) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t;"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
r = null;
}();
var V = /^(?:input|select|textarea)$/i, Y = /^key/, G = /^(?:mouse|pointer|contextmenu)|click/, K = /^(?:focusinfocus|focusoutblur)$/, Z = /^([^.]*)(?:\.(.+)|)$/;
function ee() {
return !0;
}
function te() {
return !1;
}
function ne() {
try {
return N.activeElement;
} catch (e) {}
}
d.event = {
global:{},
add:function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, h, m, g, v = d._data(e);
if (!v) return;
for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = d.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function(e) {
return typeof d === F || e && d.event.triggered === e.type ? void 0 :d.event.dispatch.apply(c.elem, arguments);
}, c.elem = e), t = (t || "").match(D) || [ "" ], s = t.length; s--; ) {
if (o = Z.exec(t[s]) || [], h = g = o[1], m = (o[2] || "").split(".").sort(), !h) continue;
l = d.event.special[h] || {}, h = (i ? l.delegateType :l.bindType) || h, l = d.event.special[h] || {}, f = d.extend({
type:h,
origType:g,
data:r,
handler:n,
guid:n.guid,
selector:i,
needsContext:i && d.expr.match.needsContext.test(i),
namespace:m.join(".")
}, u), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, l.setup && l.setup.call(e, r, m, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) :e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) :p.push(f), d.event.global[h] = !0;
}
e = null;
},
remove:function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, h, m, g, v = d.hasData(e) && d._data(e);
if (!v || !(c = v.events)) return;
for (t = (t || "").match(D) || [ "" ], l = t.length; l--; ) {
if (s = Z.exec(t[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), !h) {
for (h in c) d.event.remove(e, h + t[l], n, r, !0);
continue;
}
for (f = d.event.special[h] || {}, h = (r ? f.delegateType :f.bindType) || h, p = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--; ) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
u && !p.length && (f.teardown && f.teardown.call(e, m, v.handle) !== !1 || d.removeEvent(e, h, v.handle), delete c[h]);
}
d.isEmptyObject(c) && (delete v.handle, d._removeData(e, "events"));
},
trigger:function(t, n, r, i) {
var o, a, s, u, c, f, p, h = [ r || N ], m = l.call(t, "type") ? t.type :t, g = l.call(t, "namespace") ? t.namespace.split(".") :[];
if (s = f = r = r || N, 3 === r.nodeType || 8 === r.nodeType) return;
if (K.test(m + d.event.triggered)) return;
if (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), a = m.indexOf(":") < 0 && "on" + m, t = t[d.expando] ? t :new d.Event(m, "object" == typeof t && t), t.isTrigger = i ? 2 :3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] :d.makeArray(n, [ t ]), c = d.event.special[m] || {}, !i && c.trigger && c.trigger.apply(r, n) === !1) return;
if (!i && !c.noBubble && !d.isWindow(r)) {
for (u = c.delegateType || m, K.test(u + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), f = s;
f === (r.ownerDocument || N) && h.push(f.defaultView || f.parentWindow || e);
}
for (p = 0; (s = h[p++]) && !t.isPropagationStopped(); ) t.type = p > 1 ? u :c.bindType || m, o = (d._data(s, "events") || {})[t.type] && d._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && d.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
if (t.type = m, !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && d.acceptData(r) && a && r[m] && !d.isWindow(r)) {
f = r[a], f && (r[a] = null), d.event.triggered = m;
try {
r[m]();
} catch (v) {}
d.event.triggered = void 0, f && (r[a] = f);
}
return t.result;
},
dispatch:function(e) {
e = d.event.fix(e);
var t, n, i, o, a, s = [], u = r.call(arguments), l = (d._data(this, "events") || {})[e.type] || [], c = d.event.special[e.type] || {};
if (u[0] = e, e.delegateTarget = this, c.preDispatch && c.preDispatch.call(this, e) === !1) return;
for (s = d.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((d.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, e), e.result;
},
handlers:function(e, t) {
var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
if (s && u.nodeType && (!e.button || "click" !== e.type)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? d(n, this).index(u) >= 0 :d.find(n, this, null, [ u ]).length), i[n] && i.push(r);
i.length && a.push({
elem:u,
handlers:i
});
}
return s < t.length && a.push({
elem:this,
handlers:t.slice(s)
}), a;
},
fix:function(e) {
if (e[d.expando]) return e;
var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
for (a || (this.fixHooks[i] = a = G.test(i) ? this.mouseHooks :Y.test(i) ? this.keyHooks :{}), r = a.props ? this.props.concat(a.props) :this.props, e = new d.Event(o), t = r.length; t--; ) n = r[t], e[n] = o[n];
return e.target || (e.target = o.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) :e;
},
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(e, t) {
return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), e;
}
},
mouseHooks:{
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(e, t) {
var n, r, i, o = t.button, a = t.fromElement;
return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement :a), e.which || void 0 === o || (e.which = 1 & o ? 1 :2 & o ? 3 :4 & o ? 2 :0), e;
}
},
special:{
load:{
noBubble:!0
},
focus:{
trigger:function() {
if (this !== ne() && this.focus) try {
return this.focus(), !1;
} catch (e) {}
},
delegateType:"focusin"
},
blur:{
trigger:function() {
if (this === ne() && this.blur) return this.blur(), !1;
},
delegateType:"focusout"
},
click:{
trigger:function() {
if (d.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
},
_default:function(e) {
return d.nodeName(e.target, "a");
}
},
beforeunload:{
postDispatch:function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
}
}
},
simulate:function(e, t, n, r) {
var i = d.extend(new d.Event(), n, {
type:e,
isSimulated:!0,
originalEvent:{}
});
r ? d.event.trigger(i, null, t) :d.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
}
}, d.removeEvent = N.removeEventListener ? function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n, !1);
} :function(e, t, n) {
var r = "on" + t;
e.detachEvent && (typeof e[r] === F && (e[r] = null), e.detachEvent(r, n));
}, d.Event = function(e, t) {
if (!(this instanceof d.Event)) return new d.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ee :te) :this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), this[d.expando] = !0;
}, d.Event.prototype = {
isDefaultPrevented:te,
isPropagationStopped:te,
isImmediatePropagationStopped:te,
preventDefault:function() {
var e = this.originalEvent;
if (this.isDefaultPrevented = ee, !e) return;
e.preventDefault ? e.preventDefault() :e.returnValue = !1;
},
stopPropagation:function() {
var e = this.originalEvent;
if (this.isPropagationStopped = ee, !e) return;
e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
},
stopImmediatePropagation:function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = ee, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
}
}, d.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
}, function(e, t) {
d.event.special[e] = {
delegateType:t,
bindType:t,
handle:function(e) {
var n, r = this, i = e.relatedTarget, o = e.handleObj;
return (!i || i !== r && !d.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
}
};
}), c.submitBubbles || (d.event.special.submit = {
setup:function() {
if (d.nodeName(this, "form")) return !1;
d.event.add(this, "click._submit keypress._submit", function(e) {
var t = e.target, n = d.nodeName(t, "input") || d.nodeName(t, "button") ? t.form :void 0;
n && !d._data(n, "submitBubbles") && (d.event.add(n, "submit._submit", function(e) {
e._submit_bubble = !0;
}), d._data(n, "submitBubbles", !0));
});
},
postDispatch:function(e) {
e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && d.event.simulate("submit", this.parentNode, e, !0));
},
teardown:function() {
if (d.nodeName(this, "form")) return !1;
d.event.remove(this, "._submit");
}
}), c.changeBubbles || (d.event.special.change = {
setup:function() {
if (V.test(this.nodeName)) return ("checkbox" === this.type || "radio" === this.type) && (d.event.add(this, "propertychange._change", function(e) {
"checked" === e.originalEvent.propertyName && (this._just_changed = !0);
}), d.event.add(this, "click._change", function(e) {
this._just_changed && !e.isTrigger && (this._just_changed = !1), d.event.simulate("change", this, e, !0);
})), !1;
d.event.add(this, "beforeactivate._change", function(e) {
var t = e.target;
V.test(t.nodeName) && !d._data(t, "changeBubbles") && (d.event.add(t, "change._change", function(e) {
!this.parentNode || e.isSimulated || e.isTrigger || d.event.simulate("change", this.parentNode, e, !0);
}), d._data(t, "changeBubbles", !0));
});
},
handle:function(e) {
var t = e.target;
if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
},
teardown:function() {
return d.event.remove(this, "._change"), !V.test(this.nodeName);
}
}), c.focusinBubbles || d.each({
focus:"focusin",
blur:"focusout"
}, function(e, t) {
var n = function(e) {
d.event.simulate(t, e.target, d.event.fix(e), !0);
};
d.event.special[t] = {
setup:function() {
var r = this.ownerDocument || this, i = d._data(r, t);
i || r.addEventListener(e, n, !0), d._data(r, t, (i || 0) + 1);
},
teardown:function() {
var r = this.ownerDocument || this, i = d._data(r, t) - 1;
i ? d._data(r, t, i) :(r.removeEventListener(e, n, !0), d._removeData(r, t));
}
};
}), d.fn.extend({
on:function(e, t, n, r, i) {
var o, a;
if ("object" == typeof e) {
"string" != typeof t && (n = n || t, t = void 0);
for (o in e) this.on(o, t, n, e[o], i);
return this;
}
if (null == n && null == r ? (r = t, n = t = void 0) :null == r && ("string" == typeof t ? (r = n, n = void 0) :(r = n, n = t, t = void 0)), r === !1) r = te; else if (!r) return this;
return 1 === i && (a = r, r = function(e) {
return d().off(e), a.apply(this, arguments);
}, r.guid = a.guid || (a.guid = d.guid++)), this.each(function() {
d.event.add(this, e, r, n, t);
});
},
one:function(e, t, n, r) {
return this.on(e, t, n, r, 1);
},
off:function(e, t, n) {
var r, i;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace :r.origType, r.selector, r.handler), this;
if ("object" == typeof e) {
for (i in e) this.off(i, t, e[i]);
return this;
}
return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = te), this.each(function() {
d.event.remove(this, e, n, t);
});
},
trigger:function(e, t) {
return this.each(function() {
d.event.trigger(e, t, this);
});
},
triggerHandler:function(e, t) {
var n = this[0];
if (n) return d.event.trigger(e, t, n, !0);
}
});
function re(e) {
var t = ie.split("|"), n = e.createDocumentFragment();
if (n.createElement) for (;t.length; ) n.createElement(t.pop());
return n;
}
var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", oe = / jQuery\d+="(?:null|\d+)"/g, ae = new RegExp("<(?:" + ie + ")[\\s/>]", "i"), se = /^\s+/, ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, le = /<([\w:]+)/, ce = /<tbody/i, fe = /<|&#?\w+;/, de = /<(?:script|style|link)/i, pe = /checked\s*(?:[^=]|=\s*.checked.)/i, he = /^$|\/(?:java|ecma)script/i, me = /^true\/(.*)/, ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ve = {
option:[ 1, "<select multiple='multiple'>", "</select>" ],
legend:[ 1, "<fieldset>", "</fieldset>" ],
area:[ 1, "<map>", "</map>" ],
param:[ 1, "<object>", "</object>" ],
thead:[ 1, "<table>", "</table>" ],
tr:[ 2, "<table><tbody>", "</tbody></table>" ],
col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default:c.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
}, ye = re(N), be = ye.appendChild(N.createElement("div"));
ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
function xe(e, t) {
var n, r, i = 0, o = typeof e.getElementsByTagName !== F ? e.getElementsByTagName(t || "*") :typeof e.querySelectorAll !== F ? e.querySelectorAll(t || "*") :void 0;
if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || d.nodeName(r, t) ? o.push(r) :d.merge(o, xe(r, t));
return void 0 === t || t && d.nodeName(e, t) ? d.merge([ e ], o) :o;
}
function we(e) {
J.test(e.type) && (e.defaultChecked = e.checked);
}
function Te(e, t) {
return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
}
function Ce(e) {
return e.type = (null !== d.find.attr(e, "type")) + "/" + e.type, e;
}
function Ne(e) {
var t = me.exec(e.type);
return t ? e.type = t[1] :e.removeAttribute("type"), e;
}
function Ee(e, t) {
for (var n, r = 0; null != (n = e[r]); r++) d._data(n, "globalEval", !t || d._data(t[r], "globalEval"));
}
function ke(e, t) {
if (1 !== t.nodeType || !d.hasData(e)) return;
var n, r, i, o = d._data(e), a = d._data(t, o), s = o.events;
if (s) {
delete a.handle, a.events = {};
for (n in s) for (r = 0, i = s[n].length; i > r; r++) d.event.add(t, n, s[n][r]);
}
a.data && (a.data = d.extend({}, a.data));
}
function Se(e, t) {
var n, r, i;
if (1 !== t.nodeType) return;
if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[d.expando]) {
i = d._data(t);
for (r in i.events) d.removeEvent(t, r, i.handle);
t.removeAttribute(d.expando);
}
"script" === n && t.text !== e.text ? (Ce(t).text = e.text, Ne(t)) :"object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !d.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) :"option" === n ? t.defaultSelected = t.selected = e.defaultSelected :("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
}
d.extend({
clone:function(e, t, n) {
var r, i, o, a, s, u = d.contains(e.ownerDocument, e);
if (c.html5Clone || d.isXMLDoc(e) || !ae.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) :(be.innerHTML = e.outerHTML, be.removeChild(o = be.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e))) for (r = xe(o), s = xe(e), a = 0; null != (i = s[a]); ++a) r[a] && Se(i, r[a]);
if (t) if (n) for (s = s || xe(e), r = r || xe(o), a = 0; null != (i = s[a]); a++) ke(i, r[a]); else ke(e, o);
return r = xe(o, "script"), r.length > 0 && Ee(r, !u && xe(e, "script")), r = s = i = null, o;
},
buildFragment:function(e, t, n, r) {
for (var i, o, a, s, u, l, f, p = e.length, h = re(t), m = [], g = 0; p > g; g++) if (o = e[g], o || 0 === o) if ("object" === d.type(o)) d.merge(m, o.nodeType ? [ o ] :o); else if (fe.test(o)) {
for (s = s || h.appendChild(t.createElement("div")), u = (le.exec(o) || [ "", "" ])[1].toLowerCase(), f = ve[u] || ve._default, s.innerHTML = f[1] + o.replace(ue, "<$1></$2>") + f[2], i = f[0]; i--; ) s = s.lastChild;
if (!c.leadingWhitespace && se.test(o) && m.push(t.createTextNode(se.exec(o)[0])), !c.tbody) for (o = "table" !== u || ce.test(o) ? "<table>" !== f[1] || ce.test(o) ? 0 :s :s.firstChild, i = o && o.childNodes.length; i--; ) d.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
for (d.merge(m, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
s = h.lastChild;
} else m.push(t.createTextNode(o));
for (s && h.removeChild(s), c.appendChecked || d.grep(xe(m, "input"), we), g = 0; o = m[g++]; ) {
if (r && -1 !== d.inArray(o, r)) continue;
if (a = d.contains(o.ownerDocument, o), s = xe(h.appendChild(o), "script"), a && Ee(s), n) for (i = 0; o = s[i++]; ) he.test(o.type || "") && n.push(o);
}
return s = null, h;
},
cleanData:function(e, t) {
for (var r, i, o, a, s = 0, u = d.expando, l = d.cache, f = c.deleteExpando, p = d.event.special; null != (r = e[s]); s++) if ((t || d.acceptData(r)) && (o = r[u], a = o && l[o])) {
if (a.events) for (i in a.events) p[i] ? d.event.remove(r, i) :d.removeEvent(r, i, a.handle);
l[o] && (delete l[o], f ? delete r[u] :typeof r.removeAttribute !== F ? r.removeAttribute(u) :r[u] = null, n.push(o));
}
}
}), d.fn.extend({
text:function(e) {
return U(this, function(e) {
return void 0 === e ? d.text(this) :this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e));
}, null, e, arguments.length);
},
append:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Te(this, e);
t.appendChild(e);
}
});
},
prepend:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Te(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
remove:function(e, t) {
for (var n, r = e ? d.filter(e, this) :this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || d.cleanData(xe(n)), n.parentNode && (t && d.contains(n.ownerDocument, n) && Ee(xe(n, "script")), n.parentNode.removeChild(n));
return this;
},
empty:function() {
for (var e, t = 0; null != (e = this[t]); t++) {
for (1 === e.nodeType && d.cleanData(xe(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
e.options && d.nodeName(e, "select") && (e.options.length = 0);
}
return this;
},
clone:function(e, t) {
return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
return d.clone(this, e, t);
});
},
html:function(e) {
return U(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(oe, "") :void 0;
if ("string" == typeof e && !de.test(e) && (c.htmlSerialize || !ae.test(e)) && (c.leadingWhitespace || !se.test(e)) && !ve[(le.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = e.replace(ue, "<$1></$2>");
try {
for (;r > n; n++) t = this[n] || {}, 1 === t.nodeType && (d.cleanData(xe(t, !1)), t.innerHTML = e);
t = 0;
} catch (i) {}
}
t && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith:function() {
var e = arguments[0];
return this.domManip(arguments, function(t) {
e = this.parentNode, d.cleanData(xe(this)), e && e.replaceChild(t, this);
}), e && (e.length || e.nodeType) ? this :this.remove();
},
detach:function(e) {
return this.remove(e, !0);
},
domManip:function(e, t) {
e = i.apply([], e);
var n, r, o, a, s, u, l = 0, f = this.length, p = this, h = f - 1, m = e[0], g = d.isFunction(m);
if (g || f > 1 && "string" == typeof m && !c.checkClone && pe.test(m)) return this.each(function(n) {
var r = p.eq(n);
g && (e[0] = m.call(this, n, r.html())), r.domManip(e, t);
});
if (f && (u = d.buildFragment(e, this[0].ownerDocument, !1, this), n = u.firstChild, 1 === u.childNodes.length && (u = n), n)) {
for (a = d.map(xe(u, "script"), Ce), o = a.length; f > l; l++) r = u, l !== h && (r = d.clone(r, !0, !0), o && d.merge(a, xe(r, "script"))), t.call(this[l], r, l);
if (o) for (s = a[a.length - 1].ownerDocument, d.map(a, Ne), l = 0; o > l; l++) r = a[l], he.test(r.type || "") && !d._data(r, "globalEval") && d.contains(s, r) && (r.src ? d._evalUrl && d._evalUrl(r.src) :d.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ge, "")));
u = n = null;
}
return this;
}
}), d.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
}, function(e, t) {
d.fn[e] = function(e) {
for (var n, r = 0, i = [], a = d(e), s = a.length - 1; s >= r; r++) n = r === s ? this :this.clone(!0), d(a[r])[t](n), o.apply(i, n.get());
return this.pushStack(i);
};
});
var je, Ae = {};
function De(t, n) {
var r, i = d(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display :d.css(i[0], "display");
return i.detach(), o;
}
function Le(e) {
var t = N, n = Ae[e];
return n || (n = De(e, t), "none" !== n && n || (je = (je || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (je[0].contentWindow || je[0].contentDocument).document, t.write(), t.close(), n = De(e, t), je.detach()), Ae[e] = n), n;
}
!function() {
var e;
c.shrinkWrapBlocks = function() {
if (null != e) return e;
e = !1;
var t, n, r;
if (n = N.getElementsByTagName("body")[0], !n || !n.style) return;
return t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== F && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(N.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e;
};
}();
var He, _e, qe = /^margin/, Me = new RegExp("^(" + I + ")(?!px)[a-z%]+$", "i"), Oe = /^(top|right|bottom|left)$/;
e.getComputedStyle ? (He = function(t) {
if (t.ownerDocument.defaultView.opener) return t.ownerDocument.defaultView.getComputedStyle(t, null);
return e.getComputedStyle(t, null);
}, _e = function(e, t, n) {
var r, i, o, a, s = e.style;
return n = n || He(e), a = n ? n.getPropertyValue(t) || n[t] :void 0, n && ("" !== a || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), Me.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a :a + "";
}) :N.documentElement.currentStyle && (He = function(e) {
return e.currentStyle;
}, _e = function(e, t, n) {
var r, i, o, a, s = e.style;
return n = n || He(e), a = n ? n[t] :void 0, null == a && s && s[t] && (a = s[t]), Me.test(a) && !Oe.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" :a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a :a + "" || "auto";
});
function Fe(e, t) {
return {
get:function() {
var n = e();
if (null == n) return;
if (n) return void delete this.get;
return (this.get = t).apply(this, arguments);
}
};
}
!function() {
var t, n, r, i, o, a, s;
if (t = N.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = r && r.style, !n) return;
n.cssText = "float:left;opacity:.5", c.opacity = "0.5" === n.opacity, c.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === t.style.backgroundClip, c.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, d.extend(c, {
reliableHiddenOffsets:function() {
return null == a && u(), a;
},
boxSizingReliable:function() {
return null == o && u(), o;
},
pixelPosition:function() {
return null == i && u(), i;
},
reliableMarginRight:function() {
return null == s && u(), s;
}
});
function u() {
var t, n, r, u;
if (n = N.getElementsByTagName("body")[0], !n || !n.style) return;
t = N.createElement("div"), r = N.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, s = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
width:"4px"
}).width, u = t.appendChild(N.createElement("div")), u.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", u.style.marginRight = u.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(u, null) || {}).marginRight), t.removeChild(u)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u = t.getElementsByTagName("td"), u[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === u[0].offsetHeight, a && (u[0].style.display = "", u[1].style.display = "none", a = 0 === u[0].offsetHeight), n.removeChild(r);
}
}(), d.swap = function(e, t, n, r) {
var i, o, a = {};
for (o in t) a[o] = e.style[o], e.style[o] = t[o];
i = n.apply(e, r || []);
for (o in t) e.style[o] = a[o];
return i;
};
var Be = /alpha\([^)]*\)/i, Pe = /opacity\s*=\s*([^)]*)/, Re = /^(none|table(?!-c[ea]).+)/, We = new RegExp("^(" + I + ")(.*)$", "i"), $e = new RegExp("^([+-])=(" + I + ")", "i"), ze = {
position:"absolute",
visibility:"hidden",
display:"block"
}, Ie = {
letterSpacing:"0",
fontWeight:"400"
}, Xe = [ "Webkit", "O", "Moz", "ms" ];
function Qe(e, t) {
if (t in e) return t;
for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Xe.length; i--; ) if (t = Xe[i] + n, t in e) return t;
return r;
}
function Ue(e, t) {
for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) {
if (r = e[a], !r.style) continue;
o[a] = d._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Q(r) && (o[a] = d._data(r, "olddisplay", Le(r.nodeName)))) :(i = Q(r), (n && "none" !== n || !i) && d._data(r, "olddisplay", i ? n :d.css(r, "display")));
}
for (a = 0; s > a; a++) {
if (r = e[a], !r.style) continue;
t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" :"none");
}
return e;
}
function Je(e, t, n) {
var r = We.exec(t);
return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") :t;
}
function Ve(e, t, n, r, i) {
for (var o = n === (r ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; 4 > o; o += 2) "margin" === n && (a += d.css(e, n + X[o], !0, i)), r ? ("content" === n && (a -= d.css(e, "padding" + X[o], !0, i)), "margin" !== n && (a -= d.css(e, "border" + X[o] + "Width", !0, i))) :(a += d.css(e, "padding" + X[o], !0, i), "padding" !== n && (a += d.css(e, "border" + X[o] + "Width", !0, i)));
return a;
}
function Ye(e, t, n) {
var r = !0, i = "width" === t ? e.offsetWidth :e.offsetHeight, o = He(e), a = c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, o);
if (0 >= i || null == i) {
if (i = _e(e, t, o), (0 > i || null == i) && (i = e.style[t]), Me.test(i)) return i;
r = a && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
}
return i + Ve(e, t, n || (a ? "border" :"content"), r, o) + "px";
}
d.extend({
cssHooks:{
opacity:{
get:function(e, t) {
if (t) {
var n = _e(e, "opacity");
return "" === n ? "1" :n;
}
}
}
},
cssNumber:{
columnCount:!0,
fillOpacity:!0,
flexGrow:!0,
flexShrink:!0,
fontWeight:!0,
lineHeight:!0,
opacity:!0,
order:!0,
orphans:!0,
widows:!0,
zIndex:!0,
zoom:!0
},
cssProps:{
"float":c.cssFloat ? "cssFloat" :"styleFloat"
},
style:function(e, t, n, r) {
if (!e || 3 === e.nodeType || 8 === e.nodeType || !e.style) return;
var i, o, a, s = d.camelCase(t), u = e.style;
if (t = d.cssProps[s] || (d.cssProps[s] = Qe(u, s)), a = d.cssHooks[t] || d.cssHooks[s], void 0 === n) {
if (a && "get" in a && void 0 !== (i = a.get(e, !1, r))) return i;
return u[t];
}
if (o = typeof n, "string" === o && (i = $e.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(d.css(e, t)), o = "number"), null == n || n !== n) return;
if ("number" !== o || d.cssNumber[s] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r)))) try {
u[t] = n;
} catch (l) {}
},
css:function(e, t, n, r) {
var i, o, a, s = d.camelCase(t);
if (t = d.cssProps[s] || (d.cssProps[s] = Qe(e.style, s)), a = d.cssHooks[t] || d.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = _e(e, t, r)), "normal" === o && t in Ie && (o = Ie[t]), "" === n || n) return i = parseFloat(o), n === !0 || d.isNumeric(i) ? i || 0 :o;
return o;
}
}), d.each([ "height", "width" ], function(e, t) {
d.cssHooks[t] = {
get:function(e, n, r) {
if (n) return Re.test(d.css(e, "display")) && 0 === e.offsetWidth ? d.swap(e, ze, function() {
return Ye(e, t, r);
}) :Ye(e, t, r);
},
set:function(e, n, r) {
var i = r && He(e);
return Je(e, n, r ? Ve(e, t, r, c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, i), i) :0);
}
};
}), c.opacity || (d.cssHooks.opacity = {
get:function(e, t) {
return Pe.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
},
set:function(e, t) {
var n = e.style, r = e.currentStyle, i = d.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", o = r && r.filter || n.filter || "";
if (n.zoom = 1, (t >= 1 || "" === t) && "" === d.trim(o.replace(Be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter)) return;
n.filter = Be.test(o) ? o.replace(Be, i) :o + " " + i;
}
}), d.cssHooks.marginRight = Fe(c.reliableMarginRight, function(e, t) {
if (t) return d.swap(e, {
display:"inline-block"
}, _e, [ e, "marginRight" ]);
}), d.each({
margin:"",
padding:"",
border:"Width"
}, function(e, t) {
d.cssHooks[e + t] = {
expand:function(n) {
for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") :[ n ]; 4 > r; r++) i[e + X[r] + t] = o[r] || o[r - 2] || o[0];
return i;
}
}, qe.test(e) || (d.cssHooks[e + t].set = Je);
}), d.fn.extend({
css:function(e, t) {
return U(this, function(e, t, n) {
var r, i, o = {}, a = 0;
if (d.isArray(t)) {
for (r = He(e), i = t.length; i > a; a++) o[t[a]] = d.css(e, t[a], !1, r);
return o;
}
return void 0 !== n ? d.style(e, t, n) :d.css(e, t);
}, e, t, arguments.length > 1);
},
show:function() {
return Ue(this, !0);
},
hide:function() {
return Ue(this);
},
toggle:function(e) {
if ("boolean" == typeof e) return e ? this.show() :this.hide();
return this.each(function() {
Q(this) ? d(this).show() :d(this).hide();
});
}
});
function Ge(e, t, n, r, i) {
return new Ge.prototype.init(e, t, n, r, i);
}
d.Tween = Ge, Ge.prototype = {
constructor:Ge,
init:function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (d.cssNumber[n] ? "" :"px");
},
cur:function() {
var e = Ge.propHooks[this.prop];
return e && e.get ? e.get(this) :Ge.propHooks._default.get(this);
},
run:function(e) {
var t, n = Ge.propHooks[this.prop];
return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) :Ge.propHooks._default.set(this), this;
}
}, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
_default:{
get:function(e) {
var t;
if (null != e.elem[e.prop] && (!e.elem.style || null == e.elem.style[e.prop])) return e.elem[e.prop];
return t = d.css(e.elem, e.prop, ""), t && "auto" !== t ? t :0;
},
set:function(e) {
d.fx.step[e.prop] ? d.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[d.cssProps[e.prop]] || d.cssHooks[e.prop]) ? d.style(e.elem, e.prop, e.now + e.unit) :e.elem[e.prop] = e.now;
}
}
}, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
set:function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, d.easing = {
linear:function(e) {
return e;
},
swing:function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
}
}, d.fx = Ge.prototype.init, d.fx.step = {};
var Ke, Ze, et = /^(?:toggle|show|hide)$/, tt = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$", "i"), nt = /queueHooks$/, rt = [ ut ], it = {
"*":[ function(e, t) {
var n = this.createTween(e, t), r = n.cur(), i = tt.exec(t), o = i && i[3] || (d.cssNumber[e] ? "" :"px"), a = (d.cssNumber[e] || "px" !== o && +r) && tt.exec(d.css(n.elem, e)), s = 1, u = 20;
if (a && a[3] !== o) {
o = o || a[3], i = i || [], a = +r || 1;
do s = s || ".5", a /= s, d.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u);
}
return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] :+i[2]), n;
} ]
};
function ot() {
return setTimeout(function() {
Ke = void 0;
}), Ke = d.now();
}
function at(e, t) {
var n, r = {
height:e
}, i = 0;
for (t = t ? 1 :0; 4 > i; i += 2 - t) n = X[i], r["margin" + n] = r["padding" + n] = e;
return t && (r.opacity = r.width = e), r;
}
function st(e, t, n) {
for (var r, i = (it[t] || []).concat(it["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
}
function ut(e, t, n) {
var r, i, o, a, s, u, l, f, p = this, h = {}, m = e.style, g = e.nodeType && Q(e), v = d._data(e, "fxshow");
n.queue || (s = d._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
s.unqueued || u();
}), s.unqueued++, p.always(function() {
p.always(function() {
s.unqueued--, d.queue(e, "fx").length || s.empty.fire();
});
})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ m.overflow, m.overflowX, m.overflowY ], l = d.css(e, "display"), f = "none" === l ? d._data(e, "olddisplay") || Le(e.nodeName) :l, "inline" === f && "none" === d.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== Le(e.nodeName) ? m.zoom = 1 :m.display = "inline-block")), n.overflow && (m.overflow = "hidden", c.shrinkWrapBlocks() || p.always(function() {
m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2];
}));
for (r in t) if (i = t[r], et.exec(i)) {
if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" :"show")) {
if ("show" !== i || !v || void 0 === v[r]) continue;
g = !0;
}
h[r] = v && v[r] || d.style(e, r);
} else l = void 0;
if (d.isEmptyObject(h)) "inline" === ("none" === l ? Le(e.nodeName) :l) && (m.display = l); else {
v ? "hidden" in v && (g = v.hidden) :v = d._data(e, "fxshow", {}), o && (v.hidden = !g), g ? d(e).show() :p.done(function() {
d(e).hide();
}), p.done(function() {
var t;
d._removeData(e, "fxshow");
for (t in h) d.style(e, t, h[t]);
});
for (r in h) a = st(g ? v[r] :0, r, p), r in v || (v[r] = a.start, g && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 :0));
}
}
function lt(e, t) {
var n, r, i, o, a;
for (n in e) if (r = d.camelCase(n), i = t[r], o = e[n], d.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = d.cssHooks[r], a && "expand" in a) {
o = a.expand(o), delete e[r];
for (n in o) n in e || (e[n] = o[n], t[n] = i);
} else t[r] = i;
}
function ct(e, t, n) {
var r, i, o = 0, a = rt.length, s = d.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (i) return !1;
for (var t = Ke || ot(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
return s.notifyWith(e, [ l, o, n ]), 1 > o && u ? n :(s.resolveWith(e, [ l ]), !1);
}, l = s.promise({
elem:e,
props:d.extend({}, t),
opts:d.extend(!0, {
specialEasing:{}
}, n),
originalProperties:t,
originalOptions:n,
startTime:Ke || ot(),
duration:n.duration,
tweens:[],
createTween:function(t, n) {
var r = d.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
return l.tweens.push(r), r;
},
stop:function(t) {
var n = 0, r = t ? l.tweens.length :0;
if (i) return this;
for (i = !0; r > n; n++) l.tweens[n].run(1);
return t ? s.resolveWith(e, [ l, t ]) :s.rejectWith(e, [ l, t ]), this;
}
}), c = l.props;
for (lt(c, l.opts.specialEasing); a > o; o++) if (r = rt[o].call(l, e, c, l.opts)) return r;
return d.map(c, st, l), d.isFunction(l.opts.start) && l.opts.start.call(e, l), d.fx.timer(d.extend(u, {
elem:e,
anim:l,
queue:l.opts.queue
})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
}
d.Animation = d.extend(ct, {
tweener:function(e, t) {
d.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.split(" ");
for (var n, r = 0, i = e.length; i > r; r++) n = e[r], it[n] = it[n] || [], it[n].unshift(t);
},
prefilter:function(e, t) {
t ? rt.unshift(e) :rt.push(e);
}
}), d.speed = function(e, t, n) {
var r = e && "object" == typeof e ? d.extend({}, e) :{
complete:n || !n && t || d.isFunction(e) && e,
duration:e,
easing:n && t || t && !d.isFunction(t) && t
};
return r.duration = d.fx.off ? 0 :"number" == typeof r.duration ? r.duration :r.duration in d.fx.speeds ? d.fx.speeds[r.duration] :d.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue);
}, r;
}, d.fn.extend({
fadeTo:function(e, t, n, r) {
return this.filter(Q).css("opacity", 0).show().end().animate({
opacity:t
}, e, n, r);
},
animate:function(e, t, n, r) {
var i = d.isEmptyObject(e), o = d.speed(t, n, r), a = function() {
var t = ct(this, d.extend({}, e), o);
(i || d._data(this, "finish")) && t.stop(!0);
};
return a.finish = a, i || o.queue === !1 ? this.each(a) :this.queue(o.queue, a);
},
stop:function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
var t = !0, i = null != e && e + "queueHooks", o = d.timers, a = d._data(this);
if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && nt.test(i) && r(a[i]);
for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
(t || !n) && d.dequeue(this, e);
});
},
finish:function(e) {
return e !== !1 && (e = e || "fx"), this.each(function() {
var t, n = d._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = d.timers, a = r ? r.length :0;
for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), d.each([ "toggle", "show", "hide" ], function(e, t) {
var n = d.fn[t];
d.fn[t] = function(e, r, i) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(at(t, !0), e, r, i);
};
}), d.each({
slideDown:at("show"),
slideUp:at("hide"),
slideToggle:at("toggle"),
fadeIn:{
opacity:"show"
},
fadeOut:{
opacity:"hide"
},
fadeToggle:{
opacity:"toggle"
}
}, function(e, t) {
d.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), d.timers = [], d.fx.tick = function() {
var e, t = d.timers, n = 0;
for (Ke = d.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
t.length || d.fx.stop(), Ke = void 0;
}, d.fx.timer = function(e) {
d.timers.push(e), e() ? d.fx.start() :d.timers.pop();
}, d.fx.interval = 13, d.fx.start = function() {
Ze || (Ze = setInterval(d.fx.tick, d.fx.interval));
}, d.fx.stop = function() {
clearInterval(Ze), Ze = null;
}, d.fx.speeds = {
slow:600,
fast:200,
_default:400
}, d.fn.delay = function(e, t) {
return e = d.fx ? d.fx.speeds[e] || e :e, t = t || "fx", this.queue(t, function(t, n) {
var r = setTimeout(t, e);
n.stop = function() {
clearTimeout(r);
};
});
}, function() {
var e, t, n, r, i;
t = N.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = N.createElement("select"), i = n.appendChild(N.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", c.getSetAttribute = "t" !== t.className, c.style = /top/.test(r.getAttribute("style")), c.hrefNormalized = "/a" === r.getAttribute("href"), c.checkOn = !!e.value, c.optSelected = i.selected, c.enctype = !!N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !i.disabled, e = N.createElement("input"), e.setAttribute("value", ""), c.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), c.radioValue = "t" === e.value;
}();
var ft = /\r/g;
d.fn.extend({
val:function(e) {
var t, n, r, i = this[0];
if (!arguments.length) {
if (i) {
if (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value"))) return n;
return n = i.value, "string" == typeof n ? n.replace(ft, "") :null == n ? "" :n;
}
return;
}
return r = d.isFunction(e), this.each(function(n) {
var i;
if (1 !== this.nodeType) return;
i = r ? e.call(this, n, d(this).val()) :e, null == i ? i = "" :"number" == typeof i ? i += "" :d.isArray(i) && (i = d.map(i, function(e) {
return null == e ? "" :e + "";
})), t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i);
});
}
}), d.extend({
valHooks:{
option:{
get:function(e) {
var t = d.find.attr(e, "value");
return null != t ? t :d.trim(d.text(e));
}
},
select:{
get:function(e) {
for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null :[], s = o ? i + 1 :r.length, u = 0 > i ? s :o ? i :0; s > u; u++) if (n = r[u], (n.selected || u === i) && (c.optDisabled ? !n.disabled :null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
if (t = d(n).val(), o) return t;
a.push(t);
}
return a;
},
set:function(e, t) {
for (var n, r, i = e.options, o = d.makeArray(t), a = i.length; a--; ) if (r = i[a], d.inArray(d.valHooks.option.get(r), o) >= 0) try {
r.selected = n = !0;
} catch (s) {
r.scrollHeight;
} else r.selected = !1;
return n || (e.selectedIndex = -1), i;
}
}
}
}), d.each([ "radio", "checkbox" ], function() {
d.valHooks[this] = {
set:function(e, t) {
if (d.isArray(t)) return e.checked = d.inArray(d(e).val(), t) >= 0;
}
}, c.checkOn || (d.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" :e.value;
});
});
var dt, pt, ht = d.expr.attrHandle, mt = /^(?:checked|selected)$/i, gt = c.getSetAttribute, vt = c.input;
d.fn.extend({
attr:function(e, t) {
return U(this, d.attr, e, t, arguments.length > 1);
},
removeAttr:function(e) {
return this.each(function() {
d.removeAttr(this, e);
});
}
}), d.extend({
attr:function(e, t, n) {
var r, i, o = e.nodeType;
if (!e || 3 === o || 8 === o || 2 === o) return;
if (typeof e.getAttribute === F) return d.prop(e, t, n);
if (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? pt :dt)), void 0 === n) return r && "get" in r && null !== (i = r.get(e, t)) ? i :(i = d.find.attr(e, t), null == i ? void 0 :i);
if (null !== n) return r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i :(e.setAttribute(t, n + ""), n);
d.removeAttr(e, t);
},
removeAttr:function(e, t) {
var n, r, i = 0, o = t && t.match(D);
if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = d.propFix[n] || n, d.expr.match.bool.test(n) ? vt && gt || !mt.test(n) ? e[r] = !1 :e[d.camelCase("default-" + n)] = e[r] = !1 :d.attr(e, n, ""), e.removeAttribute(gt ? n :r);
},
attrHooks:{
type:{
set:function(e, t) {
if (!c.radioValue && "radio" === t && d.nodeName(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
}
}), pt = {
set:function(e, t, n) {
return t === !1 ? d.removeAttr(e, n) :vt && gt || !mt.test(n) ? e.setAttribute(!gt && d.propFix[n] || n, n) :e[d.camelCase("default-" + n)] = e[n] = !0, n;
}
}, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = ht[t] || d.find.attr;
ht[t] = vt && gt || !mt.test(t) ? function(e, t, r) {
var i, o;
return r || (o = ht[t], ht[t] = i, i = null != n(e, t, r) ? t.toLowerCase() :null, ht[t] = o), i;
} :function(e, t, n) {
if (!n) return e[d.camelCase("default-" + t)] ? t.toLowerCase() :null;
};
}), vt && gt || (d.attrHooks.value = {
set:function(e, t, n) {
if (!d.nodeName(e, "input")) return dt && dt.set(e, t, n);
e.defaultValue = t;
}
}), gt || (dt = {
set:function(e, t, n) {
var r = e.getAttributeNode(n);
if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t;
}
}, ht.id = ht.name = ht.coords = function(e, t, n) {
var r;
if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value :null;
}, d.valHooks.button = {
get:function(e, t) {
var n = e.getAttributeNode(t);
if (n && n.specified) return n.value;
},
set:dt.set
}, d.attrHooks.contenteditable = {
set:function(e, t, n) {
dt.set(e, "" === t ? !1 :t, n);
}
}, d.each([ "width", "height" ], function(e, t) {
d.attrHooks[t] = {
set:function(e, n) {
if ("" === n) return e.setAttribute(t, "auto"), n;
}
};
})), c.style || (d.attrHooks.style = {
get:function(e) {
return e.style.cssText || void 0;
},
set:function(e, t) {
return e.style.cssText = t + "";
}
});
var yt = /^(?:input|select|textarea|button|object)$/i, bt = /^(?:a|area)$/i;
d.fn.extend({
prop:function(e, t) {
return U(this, d.prop, e, t, arguments.length > 1);
},
removeProp:function(e) {
return e = d.propFix[e] || e, this.each(function() {
try {
this[e] = void 0, delete this[e];
} catch (t) {}
});
}
}), d.extend({
propFix:{
"for":"htmlFor",
"class":"className"
},
prop:function(e, t, n) {
var r, i, o, a = e.nodeType;
if (!e || 3 === a || 8 === a || 2 === a) return;
return o = 1 !== a || !d.isXMLDoc(e), o && (t = d.propFix[t] || t, i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r :e[t] = n :i && "get" in i && null !== (r = i.get(e, t)) ? r :e[t];
},
propHooks:{
tabIndex:{
get:function(e) {
var t = d.find.attr(e, "tabindex");
return t ? parseInt(t, 10) :yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 :-1;
}
}
}
}), c.hrefNormalized || d.each([ "href", "src" ], function(e, t) {
d.propHooks[t] = {
get:function(e) {
return e.getAttribute(t, 4);
}
};
}), c.optSelected || (d.propHooks.selected = {
get:function(e) {
var t = e.parentNode;
return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
}
}), d.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
d.propFix[this.toLowerCase()] = this;
}), c.enctype || (d.propFix.enctype = "encoding");
var xt = /[\t\r\n\f]/g;
d.fn.extend({
addClass:function(e) {
var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
if (d.isFunction(e)) return this.each(function(t) {
d(this).addClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(D) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xt, " ") :" ")) {
for (o = 0; i = t[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
a = d.trim(r), n.className !== a && (n.className = a);
}
return this;
},
removeClass:function(e) {
var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
if (d.isFunction(e)) return this.each(function(t) {
d(this).removeClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(D) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xt, " ") :"")) {
for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
a = e ? d.trim(r) :"", n.className !== a && (n.className = a);
}
return this;
},
toggleClass:function(e, t) {
var n = typeof e;
if ("boolean" == typeof t && "string" === n) return t ? this.addClass(e) :this.removeClass(e);
if (d.isFunction(e)) return this.each(function(n) {
d(this).toggleClass(e.call(this, n, this.className, t), t);
});
return this.each(function() {
if ("string" === n) for (var t, r = 0, i = d(this), o = e.match(D) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) :i.addClass(t); else (n === F || "boolean" === n) && (this.className && d._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" :d._data(this, "__className__") || "");
});
},
hasClass:function(e) {
for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
return !1;
}
}), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
d.fn[t] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
};
}), d.fn.extend({
hover:function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
},
bind:function(e, t, n) {
return this.on(e, null, t, n);
},
unbind:function(e, t) {
return this.off(e, null, t);
},
delegate:function(e, t, n, r) {
return this.on(t, e, n, r);
},
undelegate:function(e, t, n) {
return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
}
});
var wt = d.now(), Tt = /\?/, Ct = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
d.parseJSON = function(t) {
if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
var n, r = null, i = d.trim(t + "");
return i && !d.trim(i.replace(Ct, function(e, t, i, o) {
if (n && t && (r = 0), 0 === r) return e;
return n = i || t, r += !o - !i, "";
})) ? Function("return " + i)() :d.error("Invalid JSON: " + t);
}, d.parseXML = function(t) {
var n, r;
if (!t || "string" != typeof t) return null;
try {
e.DOMParser ? (r = new DOMParser(), n = r.parseFromString(t, "text/xml")) :(n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t));
} catch (i) {
n = void 0;
}
return n && n.documentElement && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n;
};
var Nt, Et, kt = /#.*$/, St = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Dt = /^(?:GET|HEAD)$/, Lt = /^\/\//, Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, _t = {}, qt = {}, Mt = "*/".concat("*");
try {
Et = location.href;
} catch (Ot) {
Et = N.createElement("a"), Et.href = "", Et = Et.href;
}
Nt = Ht.exec(Et.toLowerCase()) || [];
function Ft(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, i = 0, o = t.toLowerCase().match(D) || [];
if (d.isFunction(n)) for (;r = o[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) :(e[r] = e[r] || []).push(n);
};
}
function Bt(e, t, n, r) {
var i = {}, o = e === qt;
function a(s) {
var u;
return i[s] = !0, d.each(e[s] || [], function(e, s) {
var l = s(t, n, r);
if ("string" == typeof l && !o && !i[l]) return t.dataTypes.unshift(l), a(l), !1;
if (o) return !(u = l);
}), u;
}
return a(t.dataTypes[0]) || !i["*"] && a("*");
}
function Pt(e, t) {
var n, r, i = d.ajaxSettings.flatOptions || {};
for (r in t) void 0 !== t[r] && ((i[r] ? e :n || (n = {}))[r] = t[r]);
return n && d.extend(!0, e, n), e;
}
function Rt(e, t, n) {
for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
if (i) for (a in s) if (s[a] && s[a].test(i)) {
u.unshift(a);
break;
}
if (u[0] in n) o = u[0]; else {
for (a in n) {
if (!u[0] || e.converters[a + " " + u[0]]) {
o = a;
break;
}
r || (r = a);
}
o = o || r;
}
if (o) return o !== u[0] && u.unshift(o), n[o];
}
function Wt(e, t, n, r) {
var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
a === !0 ? a = l[i] :l[i] !== !0 && (o = s[0], c.unshift(s[1]));
break;
}
if (a !== !0) if (a && e["throws"]) t = a(t); else try {
t = a(t);
} catch (f) {
return {
state:"parsererror",
error:a ? f :"No conversion from " + u + " to " + o
};
}
}
return {
state:"success",
data:t
};
}
d.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:Et,
type:"GET",
isLocal:At.test(Nt[1]),
global:!0,
processData:!0,
async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":Mt,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/xml/,
html:/html/,
json:/json/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":!0,
"text json":d.parseJSON,
"text xml":d.parseXML
},
flatOptions:{
url:!0,
context:!0
}
},
ajaxSetup:function(e, t) {
return t ? Pt(Pt(e, d.ajaxSettings), t) :Pt(d.ajaxSettings, e);
},
ajaxPrefilter:Ft(_t),
ajaxTransport:Ft(qt),
ajax:function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var n, r, i, o, a, s, u, l, c = d.ajaxSetup({}, t), f = c.context || c, p = c.context && (f.nodeType || f.jquery) ? d(f) :d.event, h = d.Deferred(), m = d.Callbacks("once memory"), g = c.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
readyState:0,
getResponseHeader:function(e) {
var t;
if (2 === b) {
if (!l) for (l = {}; t = jt.exec(o); ) l[t[1].toLowerCase()] = t[2];
t = l[e.toLowerCase()];
}
return null == t ? null :t;
},
getAllResponseHeaders:function() {
return 2 === b ? o :null;
},
setRequestHeader:function(e, t) {
var n = e.toLowerCase();
return b || (e = y[n] = y[n] || e, v[e] = t), this;
},
overrideMimeType:function(e) {
return b || (c.mimeType = e), this;
},
statusCode:function(e) {
var t;
if (e) if (2 > b) for (t in e) g[t] = [ g[t], e[t] ]; else w.always(e[w.status]);
return this;
},
abort:function(e) {
var t = e || x;
return u && u.abort(t), C(0, t), this;
}
};
if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || Et) + "").replace(kt, "").replace(Lt, Nt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = d.trim(c.dataType || "*").toLowerCase().match(D) || [ "" ], null == c.crossDomain && (n = Ht.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Nt[1] && n[2] === Nt[2] && (n[3] || ("http:" === n[1] ? "80" :"443")) === (Nt[3] || ("http:" === Nt[1] ? "80" :"443")))), c.data && c.processData && "string" != typeof c.data && (c.data = d.param(c.data, c.traditional)), Bt(_t, c, t, w), 2 === b) return w;
s = d.event && c.global, s && 0 === d.active++ && d.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Dt.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (Tt.test(i) ? "&" :"?") + c.data, delete c.data), c.cache === !1 && (c.url = St.test(i) ? i.replace(St, "$1_=" + wt++) :i + (Tt.test(i) ? "&" :"?") + "_=" + wt++)), c.ifModified && (d.lastModified[i] && w.setRequestHeader("If-Modified-Since", d.lastModified[i]), d.etag[i] && w.setRequestHeader("If-None-Match", d.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Mt + "; q=0.01" :"") :c.accepts["*"]);
for (r in c.headers) w.setRequestHeader(r, c.headers[r]);
if (c.beforeSend && (c.beforeSend.call(f, w, c) === !1 || 2 === b)) return w.abort();
x = "abort";
for (r in {
success:1,
error:1,
complete:1
}) w[r](c[r]);
if (u = Bt(qt, c, t, w)) {
w.readyState = 1, s && p.trigger("ajaxSend", [ w, c ]), c.async && c.timeout > 0 && (a = setTimeout(function() {
w.abort("timeout");
}, c.timeout));
try {
b = 1, u.send(v, C);
} catch (T) {
if (!(2 > b)) throw T;
C(-1, T);
}
} else C(-1, "No Transport");
function C(e, t, n, r) {
var l, v, y, x, T, C = t;
if (2 === b) return;
b = 2, a && clearTimeout(a), u = void 0, o = r || "", w.readyState = e > 0 ? 4 :0, l = e >= 200 && 300 > e || 304 === e, n && (x = Rt(c, w, n)), x = Wt(c, x, w, l), l ? (c.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (d.lastModified[i] = T), T = w.getResponseHeader("etag"), T && (d.etag[i] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent" :304 === e ? C = "notmodified" :(C = x.state, v = x.data, y = x.error, l = !y)) :(y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? h.resolveWith(f, [ v, C, w ]) :h.rejectWith(f, [ w, C, y ]), w.statusCode(g), g = void 0, s && p.trigger(l ? "ajaxSuccess" :"ajaxError", [ w, c, l ? v :y ]), m.fireWith(f, [ w, C ]), s && (p.trigger("ajaxComplete", [ w, c ]), --d.active || d.event.trigger("ajaxStop"));
}
return w;
},
getJSON:function(e, t, n) {
return d.get(e, t, n, "json");
},
getScript:function(e, t) {
return d.get(e, void 0, t, "script");
}
}), d.each([ "get", "post" ], function(e, t) {
d[t] = function(e, n, r, i) {
return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax({
url:e,
type:t,
dataType:i,
data:n,
success:r
});
};
}), d._evalUrl = function(e) {
return d.ajax({
url:e,
type:"GET",
dataType:"script",
async:!1,
global:!1,
"throws":!0
});
}, d.fn.extend({
wrapAll:function(e) {
if (d.isFunction(e)) return this.each(function(t) {
d(this).wrapAll(e.call(this, t));
});
if (this[0]) {
var t = d(e, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
return e;
}).append(this);
}
return this;
},
wrapInner:function(e) {
if (d.isFunction(e)) return this.each(function(t) {
d(this).wrapInner(e.call(this, t));
});
return this.each(function() {
var t = d(this), n = t.contents();
n.length ? n.wrapAll(e) :t.append(e);
});
},
wrap:function(e) {
var t = d.isFunction(e);
return this.each(function(n) {
d(this).wrapAll(t ? e.call(this, n) :e);
});
},
unwrap:function() {
return this.parent().each(function() {
d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
}).end();
}
}), d.expr.filters.hidden = function(e) {
return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || d.css(e, "display"));
}, d.expr.filters.visible = function(e) {
return !d.expr.filters.hidden(e);
};
var $t = /%20/g, zt = /\[\]$/, It = /\r?\n/g, Xt = /^(?:submit|button|image|reset|file)$/i, Qt = /^(?:input|select|textarea|keygen)/i;
function Ut(e, t, n, r) {
var i;
if (d.isArray(t)) d.each(t, function(t, i) {
n || zt.test(e) ? r(e, i) :Ut(e + "[" + ("object" == typeof i ? t :"") + "]", i, n, r);
}); else if (n || "object" !== d.type(t)) r(e, t); else for (i in t) Ut(e + "[" + i + "]", t[i], n, r);
}
d.param = function(e, t) {
var n, r = [], i = function(e, t) {
t = d.isFunction(t) ? t() :null == t ? "" :t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
};
if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
i(this.name, this.value);
}); else for (n in e) Ut(n, e[n], t, i);
return r.join("&").replace($t, "+");
}, d.fn.extend({
serialize:function() {
return d.param(this.serializeArray());
},
serializeArray:function() {
return this.map(function() {
var e = d.prop(this, "elements");
return e ? d.makeArray(e) :this;
}).filter(function() {
var e = this.type;
return this.name && !d(this).is(":disabled") && Qt.test(this.nodeName) && !Xt.test(e) && (this.checked || !J.test(e));
}).map(function(e, t) {
var n = d(this).val();
return null == n ? null :d.isArray(n) ? d.map(n, function(e) {
return {
name:t.name,
value:e.replace(It, "\r\n")
};
}) :{
name:t.name,
value:n.replace(It, "\r\n")
};
}).get();
}
}), d.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Gt() || Kt();
} :Gt;
var Jt = 0, Vt = {}, Yt = d.ajaxSettings.xhr();
e.attachEvent && e.attachEvent("onunload", function() {
for (var e in Vt) Vt[e](void 0, !0);
}), c.cors = !!Yt && "withCredentials" in Yt, Yt = c.ajax = !!Yt, Yt && d.ajaxTransport(function(e) {
if (!e.crossDomain || c.cors) {
var t;
return {
send:function(n, r) {
var i, o = e.xhr(), a = ++Jt;
if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
o.send(e.hasContent && e.data || null), t = function(n, i) {
var s, u, l;
if (t && (i || 4 === o.readyState)) if (delete Vt[a], t = void 0, o.onreadystatechange = d.noop, i) 4 !== o.readyState && o.abort(); else {
l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
try {
u = o.statusText;
} catch (c) {
u = "";
}
s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) :s = l.text ? 200 :404;
}
l && r(s, u, l, o.getAllResponseHeaders());
}, e.async ? 4 === o.readyState ? setTimeout(t) :o.onreadystatechange = Vt[a] = t :t();
},
abort:function() {
t && t(void 0, !0);
}
};
}
});
function Gt() {
try {
return new e.XMLHttpRequest();
} catch (t) {}
}
function Kt() {
try {
return new e.ActiveXObject("Microsoft.XMLHTTP");
} catch (t) {}
}
d.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents:{
script:/(?:java|ecma)script/
},
converters:{
"text script":function(e) {
return d.globalEval(e), e;
}
}
}), d.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
}), d.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var t, n = N.head || d("head")[0] || N.documentElement;
return {
send:function(r, i) {
t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
}, n.insertBefore(t, n.firstChild);
},
abort:function() {
t && t.onload(void 0, !0);
}
};
}
});
var Zt = [], en = /(=)\?(?=&|$)|\?\?/;
d.ajaxSetup({
jsonp:"callback",
jsonpCallback:function() {
var e = Zt.pop() || d.expando + "_" + wt++;
return this[e] = !0, e;
}
}), d.ajaxPrefilter("json jsonp", function(t, n, r) {
var i, o, a, s = t.jsonp !== !1 && (en.test(t.url) ? "url" :"string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() :t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + i) :t.jsonp !== !1 && (t.url += (Tt.test(t.url) ? "&" :"?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
return a || d.error(i + " was not called"), a[0];
}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
a = arguments;
}, r.always(function() {
e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Zt.push(i)), a && d.isFunction(o) && o(a[0]), a = o = void 0;
}), "script";
}), d.parseHTML = function(e, t, n) {
if (!e || "string" != typeof e) return null;
"boolean" == typeof t && (n = t, t = !1), t = t || N;
var r = x.exec(e), i = !n && [];
if (r) return [ t.createElement(r[1]) ];
return r = d.buildFragment([ e ], t, i), i && i.length && d(i).remove(), d.merge([], r.childNodes);
};
var tn = d.fn.load;
d.fn.load = function(e, t, n) {
if ("string" != typeof e && tn) return tn.apply(this, arguments);
var r, i, o, a = this, s = e.indexOf(" ");
return s >= 0 && (r = d.trim(e.slice(s, e.length)), e = e.slice(0, s)), d.isFunction(t) ? (n = t, t = void 0) :t && "object" == typeof t && (o = "POST"), a.length > 0 && d.ajax({
url:e,
type:o,
dataType:"html",
data:t
}).done(function(e) {
i = arguments, a.html(r ? d("<div>").append(d.parseHTML(e)).find(r) :e);
}).complete(n && function(e, t) {
a.each(n, i || [ e.responseText, t, e ]);
}), this;
}, d.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
d.fn[t] = function(e) {
return this.on(t, e);
};
}), d.expr.filters.animated = function(e) {
return d.grep(d.timers, function(t) {
return e === t.elem;
}).length;
};
var nn = e.document.documentElement;
function rn(e) {
return d.isWindow(e) ? e :9 === e.nodeType ? e.defaultView || e.parentWindow :!1;
}
d.offset = {
setOffset:function(e, t, n) {
var r, i, o, a, s, u, l, c = d.css(e, "position"), f = d(e), p = {};
"static" === c && (e.style.position = "relative"), s = f.offset(), o = d.css(e, "top"), u = d.css(e, "left"), l = ("absolute" === c || "fixed" === c) && d.inArray("auto", [ o, u ]) > -1, l ? (r = f.position(), a = r.top, i = r.left) :(a = parseFloat(o) || 0, i = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) :f.css(p);
}
}, d.fn.extend({
offset:function(e) {
if (arguments.length) return void 0 === e ? this :this.each(function(t) {
d.offset.setOffset(this, e, t);
});
var t, n, r = {
top:0,
left:0
}, i = this[0], o = i && i.ownerDocument;
if (!o) return;
if (t = o.documentElement, !d.contains(t, i)) return r;
return typeof i.getBoundingClientRect !== F && (r = i.getBoundingClientRect()), n = rn(o), {
top:r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
left:r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
};
},
position:function() {
if (!this[0]) return;
var e, t, n = {
top:0,
left:0
}, r = this[0];
return "fixed" === d.css(r, "position") ? t = r.getBoundingClientRect() :(e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (n = e.offset()), n.top += d.css(e[0], "borderTopWidth", !0), n.left += d.css(e[0], "borderLeftWidth", !0)), {
top:t.top - n.top - d.css(r, "marginTop", !0),
left:t.left - n.left - d.css(r, "marginLeft", !0)
};
},
offsetParent:function() {
return this.map(function() {
for (var e = this.offsetParent || nn; e && !d.nodeName(e, "html") && "static" === d.css(e, "position"); ) e = e.offsetParent;
return e || nn;
});
}
}), d.each({
scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"
}, function(e, t) {
var n = /Y/.test(t);
d.fn[e] = function(r) {
return U(this, function(e, r, i) {
var o = rn(e);
if (void 0 === i) return o ? t in o ? o[t] :o.document.documentElement[r] :e[r];
o ? o.scrollTo(n ? d(o).scrollLeft() :i, n ? i :d(o).scrollTop()) :e[r] = i;
}, e, r, arguments.length, null);
};
}), d.each([ "top", "left" ], function(e, t) {
d.cssHooks[t] = Fe(c.pixelPosition, function(e, n) {
if (n) return n = _e(e, t), Me.test(n) ? d(e).position()[t] + "px" :n;
});
}), d.each({
Height:"height",
Width:"width"
}, function(e, t) {
d.each({
padding:"inner" + e,
content:t,
"":"outer" + e
}, function(n, r) {
d.fn[r] = function(r, i) {
var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" :"border");
return U(this, function(t, n, r) {
var i;
if (d.isWindow(t)) return t.document.documentElement["client" + e];
if (9 === t.nodeType) return i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]);
return void 0 === r ? d.css(t, n, a) :d.style(t, n, r, a);
}, t, o ? r :void 0, o, null);
};
});
}), d.fn.size = function() {
return this.length;
}, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
return d;
});
var on = e.jQuery, an = e.$;
return d.noConflict = function(t) {
return e.$ === d && (e.$ = an), t && e.jQuery === d && (e.jQuery = on), d;
}, typeof t === F && (e.jQuery = e.$ = d), d;
}), /* @preserve
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
function(e, t, n) {
try {
var r = {};
e.migrateWarnings = [], e.migrateMute = t.enableRemoveMigrateWarns ? !1 :!0, !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !e.migrateMute), e.migrateReset = function() {
r = {}, e.migrateWarnings.length = 0;
};
function i(n) {
var i = t.console;
r[n] || (r[n] = t.enableRemoveMigrateWarns ? !1 :!0, e.migrateWarnings.push(n), i && i.error && !e.migrateMute && (i.error(n), e.migrateTrace && i.trace && i.trace()));
}
function o(t, n, r, o) {
if (Object.defineProperty) try {
return void Object.defineProperty(t, n, {
configurable:!0,
enumerable:!0,
get:function() {
return i(o), r;
},
set:function(e) {
i(o), r = e;
}
});
} catch (a) {}
e._definePropertyBroken = !0, t[n] = r;
}
"BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
var a = e("<input/>", {
size:1
}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function() {
return null;
}, l = e.attrHooks.value && e.attrHooks.value.set || function() {
return n;
}, c = /^(?:input|button)$/i, f = /^[238]$/, d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, p = /^(?:checked|selected)$/i;
o(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, r, o, u) {
var l = r.toLowerCase(), h = t && t.nodeType;
if (u && (s.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated"), t && !f.test(h) && (a ? r in a :e.isFunction(e.fn[r])))) return e(t)[r](o);
return "type" === r && o !== n && c.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && d.test(l) && (e.attrHooks[l] = {
get:function(t, r) {
var i, o = e.prop(t, r);
return o === !0 || "boolean" != typeof o && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() :n;
},
set:function(t, n, r) {
var i;
return n === !1 ? e.removeAttr(t, r) :(i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())), r;
}
}, p.test(l) && i("jQuery.fn.attr('" + l + "') may use property instead of attribute")), s.call(e, t, r, o);
}, e.attrHooks.value = {
get:function(e, t) {
var n = (e.nodeName || "").toLowerCase();
if ("button" === n) return u.apply(this, arguments);
return "input" !== n && "option" !== n && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value :null;
},
set:function(e, t) {
var n = (e.nodeName || "").toLowerCase();
if ("button" === n) return l.apply(this, arguments);
"input" !== n && "option" !== n && i("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t;
}
};
var h, m, g = e.fn.init, v = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
e.fn.init = function(t, n, r) {
var o;
if (t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("#" === o[0].charAt(0) && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML)) return g.call(this, e.parseHTML(o[2], n, !0), n, r);
return g.apply(this, arguments);
}, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
if (!e && null !== e) return null;
return v.apply(this, arguments);
}, e.uaMatch = function(e) {
e = e.toLowerCase();
var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
return {
browser:t[1] || "",
version:t[2] || "0"
};
}, e.browser || (h = e.uaMatch(navigator.userAgent), m = {}, h.browser && (m[h.browser] = !0, m.version = h.version), m.chrome ? m.webkit = !0 :m.webkit && (m.safari = !0), e.browser = m), o(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
function t(e, n) {
return new t.fn.init(e, n);
}
e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, i) {
return i && i instanceof e && !(i instanceof t) && (i = t(i)), e.fn.init.call(this, r, i, n);
}, t.fn.init.prototype = t.fn;
var n = t(document);
return i("jQuery.sub() is deprecated"), t;
}, e.ajaxSetup({
converters:{
"text json":e.parseJSON
}
});
var b = e.fn.data;
e.fn.data = function(t) {
var r, o, a = this[0];
if (a && "events" === t && 1 === arguments.length && (r = e.data(a, t), o = e._data(a, t), (r === n || r === o) && o !== n)) return i("Use of jQuery.fn.data('events') is deprecated"), o;
return b.apply(this, arguments);
};
var x = /\/(java|ecma)script/i;
e.clean || (e.clean = function(t, n, r, o) {
n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, i("jQuery.clean() is deprecated");
var a, s, u, l, c = [];
if (e.merge(c, e.buildFragment(t, n).childNodes), r) for (u = function(e) {
if (!e.type || x.test(e.type)) return o ? o.push(e.parentNode ? e.parentNode.removeChild(e) :e) :r.appendChild(e);
}, a = 0; null != (s = c[a]); a++) e.nodeName(s, "script") && u(s) || (r.appendChild(s), "undefined" != typeof s.getElementsByTagName && (l = e.grep(e.merge([], s.getElementsByTagName("script")), u), c.splice.apply(c, [ a + 1, 0 ].concat(l)), a += l.length));
return c;
});
var w = e.event.add, T = e.event.remove, C = e.event.trigger, N = e.fn.toggle, E = e.fn.live, k = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", j = new RegExp("\\b(?:" + S + ")\\b"), A = /(?:^|\s)hover(\.\S+|)\b/, D = function(t) {
if ("string" != typeof t || e.event.special.hover) return t;
return A.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(A, "mouseenter$1 mouseleave$1");
};
e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && o(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, r, o) {
e !== document && j.test(t) && i("AJAX events should be attached to document: " + t), w.call(this, e, D(t || ""), n, r, o);
}, e.event.remove = function(e, t, n, r, i) {
T.call(this, e, D(t) || "", n, r, i);
}, e.fn.error = function() {
var e = Array.prototype.slice.call(arguments, 0);
if (i("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length) return this.bind.apply(this, e);
return this.triggerHandler.apply(this, e), this;
}, e.fn.toggle = function(t, n) {
if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
i("jQuery.fn.toggle(handler, handler...) is deprecated");
var r = arguments, o = t.guid || e.guid++, a = 0, s = function(n) {
var i = (e._data(this, "lastToggle" + t.guid) || 0) % a;
return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), r[i].apply(this, arguments) || !1;
};
for (s.guid = o; a < r.length; ) r[a++].guid = o;
return this.click(s);
}, e.fn.live = function(t, n, r) {
if (i('jQuery.fn.live() is deprecated. Use "$(document).on( types, selector, data, fn );" instead.'), E) return E.apply(this, arguments);
return e(this.context).on(t, this.selector, n, r), this;
}, e.fn.die = function(t, n) {
if (i('jQuery.fn.die() is deprecated. Use "$(document).off( types, selector || "**", fn );" instead.'), k) return k.apply(this, arguments);
return e(this.context).off(t, this.selector || "**", n), this;
}, e.event.trigger = function(e, t, n, r) {
return n || j.test(e) || i("Global events are undocumented and deprecated"), C.call(this, e, t, n || document, r);
}, e.each(S.split("|"), function(t, n) {
e.event.special[n] = {
setup:function() {
var t = this;
return t !== document && (e.event.add(document, n + "." + e.guid, function() {
e.event.trigger(n, null, t, !0);
}), e._data(this, n, e.guid++)), !1;
},
teardown:function() {
return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1;
}
};
});
} catch (L) {
!function H() {
if (!document.getElementById("req_info")) return void setTimeout(H, 100);
t.onerror("3rd_JQUERY: jquery migrate " + L, 1, 1);
}();
}
}(window.jQuery, window), Object.defineProperties && function(e, t) {
var n = function(e, t, n) {
return void 0 !== n && Object.defineProperty(e, t, {
value:n
}), n;
}, r = {
pageX:function(t) {
if (!t) return;
var n = this.target.ownerDocument || e, r = n.documentElement, i = n.body;
return t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0);
},
pageY:function(t) {
if (!t) return;
var n = this.target.ownerDocument || e, r = n.documentElement, i = n.body;
return t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0);
},
relatedTarget:function(e) {
if (!e) return;
return e.fromElement === this.target ? e.toElement :e.fromElement;
},
metaKey:function(e) {
if (!e) return;
return e.ctrlKey;
},
which:function(e) {
if (!e) return;
return null !== e.charCode ? e.charCode :e.keyCode;
}
};
t.each(t.event.keyHooks.props.concat(t.event.mouseHooks.props, t.event.props), function(e, i) {
"target" !== i && !function() {
Object.defineProperty(t.Event.prototype, i, {
get:function() {
var e = this.originalEvent && this.originalEvent[i];
return void 0 !== this["_" + i] ? this["_" + i] :n(this, i, r[i] && void 0 === e ? r[i].call(this, this.originalEvent) :e);
},
set:function(e) {
this["_" + i] = e;
}
});
}();
}), t.event.fix = function(n) {
if (n[t.expando]) return n;
var r = n, i = r.target;
return n = t.Event(r), i || (i = r.srcElement || e), 3 === i.nodeType && (i = i.parentNode), n.target = i, n;
};
}(document, jQuery);