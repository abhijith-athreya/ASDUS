!function() {
/**
     * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/jrburke/almond for details
     */
var e, t, n;
!function(r) {
var o, i, a, u, s = {}, f = {}, c = {}, l = {}, p = Object.prototype.hasOwnProperty, h = [].slice, v = /\.js$/;
function d(e) {
var t = {};
return e && "[object Function]" === t.toString.call(e);
}
function g(e, t) {
var n = B.env && B.env.b_dev_server, r = d(B.reportError) && B.reportError.bind(B), o = !r;
if (n || o) throw new Error(e);
r({
message:e
}, t);
}
function m(e, t) {
return p.call(e, t);
}
function _(e, t) {
var n, r, o, i, a, u, s, f, l, p, h, d = t && t.split("/"), g = c.map, m = g && g["*"] || {};
if (e && "." === e.charAt(0)) if (t) {
for (d = d.slice(0, d.length - 1), e = e.split("/"), a = e.length - 1, c.nodeIdCompat && v.test(e[a]) && (e[a] = e[a].replace(v, "")), e = d.concat(e), l = 0; l < e.length; l += 1) if (h = e[l], "." === h) e.splice(l, 1), l -= 1; else if (".." === h) {
if (1 === l && (".." === e[2] || ".." === e[0])) break;
l > 0 && (e.splice(l - 1, 2), l -= 2);
}
e = e.join("/");
} else 0 === e.indexOf("./") && (e = e.substring(2));
if ((d || m) && g) {
for (n = e.split("/"), l = n.length; l > 0; l -= 1) {
if (r = n.slice(0, l).join("/"), d) for (p = d.length; p > 0; p -= 1) if (o = g[d.slice(0, p).join("/")], o && (o = o[r])) {
i = o, u = l;
break;
}
if (i) break;
!s && m && m[r] && (s = m[r], f = l);
}
!i && s && (i = s, u = f), i && (n.splice(0, u, i), e = n.join("/"));
}
return e;
}
function y(e, t) {
return function() {
var n = h.call(arguments, 0);
return "string" != typeof n[0] && 1 === n.length && n.push(null), i.apply(r, n.concat([ e, t ]));
};
}
function w(e) {
return function(t) {
return _(t, e);
};
}
function b(e) {
return function(t) {
s[e] = t;
};
}
function T(e) {
if (m(f, e)) {
var t = f[e];
delete f[e], l[e] = !0, o.apply(r, t);
}
return m(s, e) || m(l, e) || g("No " + e, "almond"), s[e];
}
function E(e) {
var t, n = e ? e.indexOf("!") :-1;
return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [ t, e ];
}
a = function(e, t) {
var n, r = E(e), o = r[0];
return e = r[1], o && (o = _(o, t), n = T(o)), o ? e = n && n.normalize ? n.normalize(e, w(t)) :_(e, t) :(e = _(e, t), r = E(e), o = r[0], e = r[1], o && (n = T(o))), {
f:o ? o + "!" + e :e,
n:e,
pr:o,
p:n
};
};
function N(e) {
return function() {
return c && c.config && c.config[e] || {};
};
}
u = {
require:function(e) {
return y(e);
},
exports:function(e) {
var t = s[e];
return "undefined" != typeof t ? t :s[e] = {};
},
module:function(e) {
return {
id:e,
uri:"",
exports:s[e],
config:N(e)
};
}
}, o = function(e, t, n, o) {
var i, c, p, h, v, d, _ = [], w = typeof n;
if (o = o || e, "undefined" === w || "function" === w) {
for (t = !t.length && n.length ? [ "require", "exports", "module" ] :t, v = 0; v < t.length; v += 1) h = a(t[v], o), c = h.f, "require" === c ? _[v] = u.require(e) :"exports" === c ? (_[v] = u.exports(e), d = !0) :"module" === c ? i = _[v] = u.module(e) :m(s, c) || m(f, c) || m(l, c) ? _[v] = T(c) :h.p ? (h.p.load(h.n, y(o, !0), b(c), {}), _[v] = s[c]) :g(e + " missing " + c, "almond");
p = n ? n.apply(s[e], _) :void 0, e && (i && i.exports !== r && i.exports !== s[e] ? s[e] = i.exports :p === r && d || (s[e] = p));
} else e && (s[e] = n);
}, e = t = i = function(e, t, n, s, f) {
if ("string" == typeof e) {
if (u[e]) return u[e](t);
return T(a(e, t).f);
}
if (!e.splice) {
if (c = e, c.deps && i(c.deps, c.callback), !t) return;
t.splice ? (e = t, t = n, n = null) :e = r;
}
return t = t || function() {}, "function" == typeof n && (n = s, s = f), s ? o(r, e, t, n) :setTimeout(function() {
o(r, e, t, n);
}, 4), i;
}, i.config = function(e) {
return i(e);
}, e._defined = s, n = function(e, t, n) {
t.splice || (n = t, t = []), m(s, e) || m(f, e) || (f[e] = [ e, t, n ]);
}, n.amd = {
jQuery:!0
};
}(), B.define = n, B.require = t, B.requirejs = e;
}(), function(e, t) {
"use strict";
"function" == typeof define && define.amd ? define(t) :"object" == typeof exports ? module.exports = t() :e.returnExports = t();
}(this, function() {
var e, t = Array.prototype, n = Object.prototype, r = Function.prototype, o = String.prototype, i = Number.prototype, a = t.slice, u = t.splice, s = t.push, f = t.unshift, c = r.call, l = n.toString, p = Array.isArray || function(e) {
return "[object Array]" === l.call(e);
}, h = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, v = Function.prototype.toString, d = function(e) {
try {
return v.call(e), !0;
} catch (t) {
return !1;
}
}, g = "[object Function]", m = "[object GeneratorFunction]";
e = function(e) {
if ("function" != typeof e) return !1;
if (h) return d(e);
var t = l.call(e);
return t === g || t === m;
};
var _, y = RegExp.prototype.exec, w = function(e) {
try {
return y.call(e), !0;
} catch (t) {
return !1;
}
}, b = "[object RegExp]";
_ = function(e) {
if ("object" != typeof e) return !1;
return h ? w(e) :l.call(e) === b;
};
var T, E = String.prototype.valueOf, N = function(e) {
try {
return E.call(e), !0;
} catch (t) {
return !1;
}
}, j = "[object String]";
T = function(e) {
if ("string" == typeof e) return !0;
if ("object" != typeof e) return !1;
return h ? N(e) :l.call(e) === j;
};
var x = function(t) {
var n = l.call(t), r = "[object Arguments]" === n;
return r || (r = !p(t) && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && e(t.callee)), r;
}, O = function(e) {
var t, n = Object.defineProperty && function() {
try {
return Object.defineProperty({}, "x", {}), !0;
} catch (e) {
return !1;
}
}();
return t = n ? function(e, t, n, r) {
if (!r && t in e) return;
Object.defineProperty(e, t, {
configurable:!0,
enumerable:!1,
writable:!0,
value:n
});
} :function(e, t, n, r) {
if (!r && t in e) return;
e[t] = n;
}, function(n, r, o) {
for (var i in r) e.call(r, i) && t(n, i, r[i], o);
};
}(n.hasOwnProperty);
function I(e) {
var t = typeof e;
return null === e || "undefined" === t || "boolean" === t || "number" === t || "string" === t;
}
var A = {
ToInteger:function(e) {
var t = +e;
return t !== t ? t = 0 :0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t;
},
ToPrimitive:function(t) {
var n, r, o;
if (I(t)) return t;
if (r = t.valueOf, e(r) && (n = r.call(t), I(n))) return n;
if (o = t.toString, e(o) && (n = o.call(t), I(n))) return n;
throw new TypeError();
},
ToObject:function(e) {
if (null == e) throw new TypeError("can't convert " + e + " to object");
return Object(e);
},
ToUint32:function(e) {
return e >>> 0;
}
}, S = function() {};
O(r, {
bind:function(t) {
var n = this;
if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
for (var r, o = a.call(arguments, 1), i = function() {
if (this instanceof r) {
var e = n.apply(this, o.concat(a.call(arguments)));
if (Object(e) === e) return e;
return this;
}
return n.apply(t, o.concat(a.call(arguments)));
}, u = Math.max(0, n.length - o.length), s = [], f = 0; u > f; f++) s.push("$" + f);
return r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this, arguments); }")(i), n.prototype && (S.prototype = n.prototype, r.prototype = new S(), S.prototype = null), r;
}
});
var k = c.bind(n.hasOwnProperty), R = function() {
var e = [ 1, 2 ], t = e.splice();
return 2 === e.length && p(t) && 0 === t.length;
}();
O(t, {
splice:function(e, t) {
return 0 === arguments.length ? [] :u.apply(this, arguments);
}
}, !R);
var C = function() {
var e = {};
return t.splice.call(e, 0, 0, 1), 1 === e.length;
}();
O(t, {
splice:function(e, t) {
if (0 === arguments.length) return [];
var n = arguments;
return this.length = Math.max(A.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = a.call(arguments), n.length < 2 ? n.push(this.length - e) :n[1] = A.ToInteger(t)), u.apply(this, n);
}
}, !C);
var B = 1 !== [].unshift(0);
O(t, {
unshift:function() {
return f.apply(this, arguments), this.length;
}
}, B), O(Array, {
isArray:p
});
var L = Object("a"), D = "a" !== L[0] || !(0 in L), M = function(e) {
var t = !0, n = !0;
return e && (e.call("foo", function(e, n, r) {
"object" != typeof r && (t = !1);
}), e.call([ 1 ], function() {
"use strict";
n = "string" == typeof this;
}, "x")), !!e && t && n;
};
O(t, {
forEach:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = arguments[1], i = -1, a = r.length >>> 0;
if (!e(t)) throw new TypeError();
for (;++i < a; ) i in r && t.call(o, r[i], i, n);
}
}, !M(t.forEach)), O(t, {
map:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = r.length >>> 0, i = Array(o), a = arguments[1];
if (!e(t)) throw new TypeError(t + " is not a function");
for (var u = 0; o > u; u++) u in r && (i[u] = t.call(a, r[u], u, n));
return i;
}
}, !M(t.map)), O(t, {
filter:function(t) {
var n, r = A.ToObject(this), o = D && T(this) ? this.split("") :r, i = o.length >>> 0, a = [], u = arguments[1];
if (!e(t)) throw new TypeError(t + " is not a function");
for (var s = 0; i > s; s++) s in o && (n = o[s], t.call(u, n, s, r) && a.push(n));
return a;
}
}, !M(t.filter)), O(t, {
every:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = r.length >>> 0, i = arguments[1];
if (!e(t)) throw new TypeError(t + " is not a function");
for (var a = 0; o > a; a++) if (a in r && !t.call(i, r[a], a, n)) return !1;
return !0;
}
}, !M(t.every)), O(t, {
some:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = r.length >>> 0, i = arguments[1];
if (!e(t)) throw new TypeError(t + " is not a function");
for (var a = 0; o > a; a++) if (a in r && t.call(i, r[a], a, n)) return !0;
return !1;
}
}, !M(t.some));
var G = !1;
t.reduce && (G = "object" == typeof t.reduce.call("es5", function(e, t, n, r) {
return r;
})), O(t, {
reduce:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = r.length >>> 0;
if (!e(t)) throw new TypeError(t + " is not a function");
if (!o && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
var i, a = 0;
if (arguments.length >= 2) i = arguments[1]; else for (;;) {
if (a in r) {
i = r[a++];
break;
}
if (++a >= o) throw new TypeError("reduce of empty array with no initial value");
}
for (;o > a; a++) a in r && (i = t.call(void 0, i, r[a], a, n));
return i;
}
}, !G);
var q = !1;
t.reduceRight && (q = "object" == typeof t.reduceRight.call("es5", function(e, t, n, r) {
return r;
})), O(t, {
reduceRight:function(t) {
var n = A.ToObject(this), r = D && T(this) ? this.split("") :n, o = r.length >>> 0;
if (!e(t)) throw new TypeError(t + " is not a function");
if (!o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
var i, a = o - 1;
if (arguments.length >= 2) i = arguments[1]; else for (;;) {
if (a in r) {
i = r[a--];
break;
}
if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value");
}
if (0 > a) return i;
do a in r && (i = t.call(void 0, i, r[a], a, n)); while (a--);
return i;
}
}, !q);
var P = Array.prototype.indexOf && -1 !== [ 0, 1 ].indexOf(1, 2);
O(t, {
indexOf:function(e) {
var t = D && T(this) ? this.split("") :A.ToObject(this), n = t.length >>> 0;
if (!n) return -1;
var r = 0;
for (arguments.length > 1 && (r = A.ToInteger(arguments[1])), r = r >= 0 ? r :Math.max(0, n + r); n > r; r++) if (r in t && t[r] === e) return r;
return -1;
}
}, P);
var F = Array.prototype.lastIndexOf && -1 !== [ 0, 1 ].lastIndexOf(0, -3);
O(t, {
lastIndexOf:function(e) {
var t = D && T(this) ? this.split("") :A.ToObject(this), n = t.length >>> 0;
if (!n) return -1;
var r = n - 1;
for (arguments.length > 1 && (r = Math.min(r, A.ToInteger(arguments[1]))), r = r >= 0 ? r :n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
return -1;
}
}, F);
var V = !{
toString:null
}.propertyIsEnumerable("toString"), H = function() {}.propertyIsEnumerable("prototype"), U = !k("x", "0"), K = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], W = K.length;
O(Object, {
keys:function(t) {
var n = e(t), r = x(t), o = null !== t && "object" == typeof t, i = o && T(t);
if (!o && !n && !r) throw new TypeError("Object.keys called on a non-object");
var a = [], u = H && n;
if (i && U || r) for (var s = 0; s < t.length; ++s) a.push(String(s));
if (!r) for (var f in t) u && "prototype" === f || !k(t, f) || a.push(String(f));
if (V) for (var c = t.constructor, l = c && c.prototype === t, p = 0; W > p; p++) {
var h = K[p];
l && "constructor" === h || !k(t, h) || a.push(h);
}
return a;
}
});
var z = Object.keys && function() {
return 2 === Object.keys(arguments).length;
}(1, 2), $ = Object.keys;
O(Object, {
keys:function(e) {
return $(x(e) ? t.slice.call(e) :e);
}
}, !z);
var J = -621987552e5, X = "-000001", Z = Date.prototype.toISOString && -1 === new Date(J).toISOString().indexOf(X);
O(Date.prototype, {
toISOString:function() {
var e, t, n, r, o;
if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
for (r = this.getUTCFullYear(), o = this.getUTCMonth(), r += Math.floor(o / 12), o = (o % 12 + 12) % 12, e = [ o + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds() ], r = (0 > r ? "-" :r > 9999 ? "+" :"") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 :-6), t = e.length; t--; ) n = e[t], 10 > n && (e[t] = "0" + n);
return r + "-" + e.slice(0, 2).join("-") + "T" + e.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z";
}
}, Z);
var Y = !1;
try {
Y = Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(J).toJSON().indexOf(X) && Date.prototype.toJSON.call({
toISOString:function() {
return !0;
}
});
} catch (Q) {}
Y || (Date.prototype.toJSON = function(e) {
var t, n = Object(this), r = A.ToPrimitive(n);
if ("number" == typeof r && !isFinite(r)) return null;
if (t = n.toISOString, "function" != typeof t) throw new TypeError("toISOString property is not callable");
return t.call(n);
});
var ee = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"), te = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")), ne = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
(!Date.parse || ne || te || !ee) && (Date = function(e) {
function t(n, r, o, i, a, u, s) {
var f = arguments.length;
if (this instanceof e) {
var c = 1 === f && String(n) === n ? new e(t.parse(n)) :f >= 7 ? new e(n, r, o, i, a, u, s) :f >= 6 ? new e(n, r, o, i, a, u) :f >= 5 ? new e(n, r, o, i, a) :f >= 4 ? new e(n, r, o, i) :f >= 3 ? new e(n, r, o) :f >= 2 ? new e(n, r) :f >= 1 ? new e(n) :new e();
return c.constructor = t, c;
}
return e.apply(this, arguments);
}
var n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), r = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 ];
function o(e, t) {
var n = t > 1 ? 1 :0;
return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970);
}
function i(t) {
return Number(new e(1970, 0, 1, 0, 0, 0, t));
}
for (var a in e) t[a] = e[a];
return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(t) {
var r = n.exec(t);
if (r) {
var a, u = Number(r[1]), s = Number(r[2] || 1) - 1, f = Number(r[3] || 1) - 1, c = Number(r[4] || 0), l = Number(r[5] || 0), p = Number(r[6] || 0), h = Math.floor(1e3 * Number(r[7] || 0)), v = Boolean(r[4] && !r[8]), d = "-" === r[9] ? 1 :-1, g = Number(r[10] || 0), m = Number(r[11] || 0);
if ((l > 0 || p > 0 || h > 0 ? 24 :25) > c && 60 > l && 60 > p && 1e3 > h && s > -1 && 12 > s && 24 > g && 60 > m && f > -1 && f < o(u, s + 1) - o(u, s) && (a = 60 * (24 * (o(u, s) + f) + c + g * d), a = 1e3 * (60 * (a + l + m * d) + p) + h, v && (a = i(a)), a >= -864e13 && 864e13 >= a)) return a;
return NaN;
}
return e.parse.apply(this, arguments);
}, t;
}(Date)), Date.now || (Date.now = function() {
return new Date().getTime();
});
var re = i.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)), oe = {
base:1e7,
size:6,
data:[ 0, 0, 0, 0, 0, 0 ],
multiply:function(e, t) {
for (var n = -1; ++n < oe.size; ) t += e * oe.data[n], oe.data[n] = t % oe.base, t = Math.floor(t / oe.base);
},
divide:function(e) {
for (var t = oe.size, n = 0; --t >= 0; ) n += oe.data[t], oe.data[t] = Math.floor(n / e), n = n % e * oe.base;
},
numToString:function() {
for (var e = oe.size, t = ""; --e >= 0; ) if ("" !== t || 0 === e || 0 !== oe.data[e]) {
var n = String(oe.data[e]);
"" === t ? t = n :t += "0000000".slice(0, 7 - n.length) + n;
}
return t;
},
pow:function ge(e, t, n) {
return 0 === t ? n :t % 2 === 1 ? ge(e, t - 1, n * e) :ge(e * e, t / 2, n);
},
log:function(e) {
for (var t = 0; e >= 4096; ) t += 12, e /= 4096;
for (;e >= 2; ) t += 1, e /= 2;
return t;
}
};
O(i, {
toFixed:function(e) {
var t, n, r, o, i, a, u, s;
if (t = Number(e), t = t !== t ? 0 :Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
if (n = Number(this), n !== n) return "NaN";
if (-1e21 >= n || n >= 1e21) return String(n);
if (r = "", 0 > n && (r = "-", n = -n), o = "0", n > 1e-21) if (i = oe.log(n * oe.pow(2, 69, 1)) - 69, a = 0 > i ? n * oe.pow(2, -i, 1) :n / oe.pow(2, i, 1), a *= 4503599627370496, i = 52 - i, i > 0) {
for (oe.multiply(0, a), u = t; u >= 7; ) oe.multiply(1e7, 0), u -= 7;
for (oe.multiply(oe.pow(10, u, 1), 0), u = i - 1; u >= 23; ) oe.divide(1 << 23), u -= 23;
oe.divide(1 << u), oe.multiply(1, 1), oe.divide(2), o = oe.numToString();
} else oe.multiply(0, a), oe.multiply(1 << -i, 0), o = oe.numToString() + "0.00000000000000000000".slice(2, 2 + t);
return t > 0 ? (s = o.length, o = t >= s ? r + "0.0000000000000000000".slice(0, t - s + 2) + o :r + o.slice(0, s - t) + "." + o.slice(s - t)) :o = r + o, o;
}
}, re);
var ie = o.split;
2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function() {
var e = "undefined" == typeof /()??/.exec("")[1];
o.split = function(t, n) {
var r = this;
if ("undefined" == typeof t && 0 === n) return [];
if (!_(t)) return ie.call(this, t, n);
var o, i, a, u, f = [], c = (t.ignoreCase ? "i" :"") + (t.multiline ? "m" :"") + (t.extended ? "x" :"") + (t.sticky ? "y" :""), l = 0;
for (t = new RegExp(t.source, c + "g"), r += "", e || (o = new RegExp("^" + t.source + "$(?!\\s)", c)), n = "undefined" == typeof n ? -1 >>> 0 :A.ToUint32(n), i = t.exec(r); i && (a = i.index + i[0].length, !(a > l && (f.push(r.slice(l, i.index)), !e && i.length > 1 && i[0].replace(o, function() {
for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (i[e] = void 0);
}), i.length > 1 && i.index < r.length && s.apply(f, i.slice(1)), u = i[0].length, l = a, f.length >= n))); ) t.lastIndex === i.index && t.lastIndex++, i = t.exec(r);
return l === r.length ? (u || !t.test("")) && f.push("") :f.push(r.slice(l)), f.length > n ? f.slice(0, n) :f;
};
}() :"0".split(void 0, 0).length && (o.split = function(e, t) {
if ("undefined" == typeof e && 0 === t) return [];
return ie.call(this, e, t);
});
var ae = o.replace, ue = function() {
var e = [];
return "x".replace(/x(.)?/g, function(t, n) {
e.push(n);
}), 1 === e.length && "undefined" == typeof e[0];
}();
ue || (o.replace = function(t, n) {
var r = e(n), o = _(t) && /\)[*?]/.test(t.source);
if (r && o) {
var i = function(e) {
var r = arguments.length, o = t.lastIndex;
t.lastIndex = 0;
var i = t.exec(e) || [];
return t.lastIndex = o, i.push(arguments[r - 2], arguments[r - 1]), n.apply(this, i);
};
return ae.call(this, t, i);
}
return ae.call(this, t, n);
});
var se = o.substr, fe = "".substr && "b" !== "0b".substr(-1);
O(o, {
substr:function(e, t) {
return se.call(this, 0 > e && (e = this.length + e) < 0 ? 0 :e, t);
}
}, fe);
var ce = "	\n\f\r   ᠎             　\u2028\u2029\ufeff", le = "​", pe = "[" + ce + "]", he = new RegExp("^" + pe + pe + "*"), ve = new RegExp(pe + pe + "*$"), de = o.trim && (ce.trim() || !le.trim());
O(o, {
trim:function() {
if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
return String(this).replace(he, "").replace(ve, "");
}
}, de), (8 !== parseInt(ce + "08") || 22 !== parseInt(ce + "0x16")) && (parseInt = function(e) {
var t = /^0[xX]/;
return function(n, r) {
return n = String(n).trim(), Number(r) || (r = t.test(n) ? 16 :10), e(n, r);
};
}(parseInt));
}), "function" != typeof Object.assign && !function() {
Object.assign = function(e) {
"use strict";
if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
for (var t = Object(e), n = 1; n < arguments.length; n++) {
var r = arguments[n];
if (void 0 !== r && null !== r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
}
return t;
};
}(), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc = {
loaded:!0,
run:!1
}), function(e, t) {
"use strict";
if (t.jstmpl) return;
var n, r, o, i, a, u, s, f, c, l, p, h, v, d, g, m, _, y, w, b, T, E, N, j, x, O, I, A, S, k, R, C, B, L, D, M, G, q = [], P = 42;
u = function(e, t) {
this.closure = e, this.name = t;
}, s = function(e) {
var t = [];
return h(t, e, 0), 1 === t.length ? t[0] :t.join("");
}, l = function(e, t, n) {
if (/^[0-9]+$/.test(e)) return e;
if ("" === e) return null;
return G(S("Attempting to use non-numeric value '%s' for translation tag '%s'", e, n)), 0;
}, G = function(r, o) {
r = r || "BHCJS runtime issue", t && t.env && t.env.b_dev_server ? (o && console.warn("Template: " + o), console.error(r)) :n.error_out && e.onerror && e.onerror("JSTMPL:: " + r, o || "jstmpl", 0);
}, p = function(e) {
if ("string" != typeof e || -1 === e.indexOf("{")) return e;
var t = [];
return d(t, e, 0), 1 === t.length ? t[0] :t.join("");
}, g = new Array(P), d = function(e, t, n) {
var r = 0;
for (t.length; ;) {
var o = t.indexOf("{", r);
if (-1 === o) {
0 === r ? e.push(t) :e.push(t.substring(r));
break;
}
o !== r && (e.push(t.substring(r, o)), r = o);
var i = t.indexOf("}", o + 1);
if (i === o + 1) {
e.push("{}"), r = i + 1;
continue;
}
if (-1 === i) {
e.push(t.substring(r));
break;
}
for (var a = o + 1; i > a; ++a) {
var u = t.charAt(a).toLowerCase();
if (!(u >= "0" && "9" >= u || u >= "a" && "z" >= u || "_" == u || "/" == u || "-" == u)) break;
}
a === i ? (h(e, t.substring(o + 1, i), n + 1), r = i + 1) :(e.push(t.substring(o, a)), r = a);
}
}, h = function(e, t, n) {
if (n > 0) {
if (n >= P) return console.warn("Detected excessive recursion in tag sequence: %s, returning '%s'", interpolate_tags.slice(1, P).join(" "), value), void e.push(t);
if (t === g[n - 1]) return console.warn("Detected self-referential tag '%s', returning '%s'", value, value), void e.push(t);
}
g[n] = t;
for (var r = 0, i = o.length; i > r; ++r) if (t in o[r]) {
var u = o[r][t];
return void ("string" == typeof u && -1 !== u.indexOf("{") ? d(e, u, n + 1) :e.push(u));
}
if (a && t in a) return u = a[t], void ("string" == typeof u && -1 !== u.indexOf("{") ? d(e, u, n + 1) :e.push(u));
e.push("");
}, v = function(e) {
for (var t = 0, n = o.length; n > t; ++t) if (e in o[t]) return o[t][e];
return "";
}, m = function(e) {
for (var t = 0, n = o.length; n > t; ++t) if (e in o[t]) {
var r = o[t][e];
return r instanceof Array ? r.length :"0" === r ? 0 :r;
}
if (a && e in a) return a[e];
return !1;
}, w = function(e) {
return "0" === e ? "" :e ? 1 :"";
}, b = function(e) {
return "0" === e ? 1 :e ? "" :1;
}, T = function(e) {
var t = parseFloat(e);
return isFinite(t) ? t :0;
}, y = function(e, t) {
o[o.length - 2][e] = t;
}, j = function(e) {
for (var t in e) if (e.hasOwnProperty(t)) return !1;
return !0;
}, x = function(e, t, n) {
var r = [];
if (e = e || 0, t = t || 0, n = Math.abs(n || 1), "string" != typeof e || isNaN(e) || (e = Number(e)), "string" != typeof t || isNaN(t) || (t = Number(t)), /^[A-Za-z]$/.exec(e) || /^[A-Za-z]$/.exec(t)) if ((1 !== e.length || 1 !== t.length || /[a-z]/.exec(e) && !/[a-z]/.exec(t) || /[A-Z]/.exec(e) && !/[A-Z]/.exec(t)) && G("Invalid range '" + e + "'-'" + t + "' in seq()"), e = e.charCodeAt(0), t = t.charCodeAt(0), t >= e) for (;t >= e; ) r.push({
value:String.fromCharCode(e)
}), e += n; else for (;e >= t; ) r.push({
value:String.fromCharCode(e)
}), e -= n; else if (t >= e) for (;t >= e; ) r.push({
value:e
}), e += n; else for (;e >= t; ) r.push({
value:e
}), e -= n;
return r;
}, E = function(e, t) {
for (var n = [], r = 0; t > r; ++r) for (var o = 0, i = e.length; i > o; ++o) n.push(e[o]);
return n;
}, k = function(e) {
return e.charAt(0).toUpperCase() + e.substr(1);
}, R = function(e) {
return e.charAt(0).toLowerCase() + e.substr(1);
}, C = function(e) {
for (var t = e.split(/\s/), n = 0, r = t.length; r > n; ++n) t[n] = k(t[n]);
return t.join(" ");
}, L = function(e) {
for (var t = e.toString(), n = 1, r = arguments.length; r > n; ++n) if (arguments[n].toString() === t) return 1;
return 0;
}, O = function(e) {
return void 0 === e ? Math.random() :Math.random() * e;
}, _ = function(e, t, n, r) {
G("to use TMPL_TRANS/TMPL_TRANSLIST, pass 'get_trans' to setup()");
}, f = function(e, t, n) {
G("to use TMPL_TEXT, pass 'get_text' to setup()");
}, c = function(e, t) {
G("to use TMPL_VAR, with N attribute, pass 'get_var_plural' to setup()");
}, N = function(e, t, n, r) {
G("to use TMPL_STATIC_URL/TMPL_SCRIPT_URL, pass 'get_static_hostname' to setup()");
}, A = function(e, t, n) {
return e.substr(t, n);
}, S = function() {
for (var e, t = [].slice.apply(arguments), n = t.splice(0, 1)[0]; e = t.splice(0, 1)[0]; ) n = n.replace(/%\w/, e);
return n;
}, I = function(e) {
return void 0 !== e ? 1 :0;
}, B = function() {
return +new Date() / 1e3;
}, i = function(e) {
return o = e, e;
}, M = {}, D = {}, u.prototype = {
render:function(e, t) {
e = e || {};
var n = "";
q.push(o), o = [ {}, e ];
try {
n = this.closure(o);
} catch (r) {
G(r, this.name);
}
return o = q.pop(), n;
},
fn:{
FILTERS:M,
F:M,
GET_VAR:s,
GET_V:v,
GET_IF_VAR:m,
INTERPOLATE:p,
GET_TRANS:_,
SET_VAR:y,
GET_TEXT:f,
PERL_BOOL:w,
PERL_NOT:b,
PARSE_FLOAT:T,
REPEAT_ARRAY:E,
STATIC_HOSTNAME:N,
IS_EMPTY_OBJECT:j,
MB:s,
MC:v,
MD:m,
ME:_,
MF:f,
MG:p,
MI:T,
MJ:w,
MK:b,
ML:E,
MN:y,
MO:l,
VP:c,
SV:i,
seq:x,
defined:I,
substr:A,
sprintf:S,
ucfirst:k,
lcfirst:R,
ucfirstword:C,
rand:O,
time:B,
in_array:L
}
}, r = function(e) {
var t = function(e, t) {
if (!t) return;
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
};
t(u.prototype.fn, e.fn), t(u.prototype.fn.FILTERS, e.filters), "get_trans" in e && (u.prototype.fn.GET_TRANS = u.prototype.fn.ME = e.get_trans), "get_text" in e && (u.prototype.fn.GET_TEXT = u.prototype.fn.MF = e.get_text), "get_var_plural" in e && (u.prototype.fn.GET_VAR_PLURAL = u.prototype.fn.VP = e.get_var_plural), "get_static_hostname" in e && (u.prototype.fn.STATIC_HOSTNAME = e.get_static_hostname), "get_csrf_token" in e && (u.prototype.fn.CSRF_TOKEN = e.get_csrf_token), "get_date" in e && (u.prototype.fn.DATE = e.get_date), "get_helper" in e && (u.prototype.fn.HELPER = e.get_helper), "translations" in e && (a = e.translations);
}, n = function(e, t) {
if (void 0 === t) return e in D ? D[e] :D.__no_op__;
var n = new u(t, e);
return D[e] = n, n;
}, n.setup = r, n.fn = u.prototype.fn, n("__no_op__", function() {
return G("JSTMPL -> TMPL not found") || "";
}), t.jstmpl = n;
}(window, window.booking || {}), function() {
var e;
e = function() {
return booking.env.b_csrf_token || "";
}, booking.jstmpl.setup({
get_csrf_token:e
});
}(), function(e) {
if (e.jstmpl = e.jstmpl || {
setup:function() {
console.error("This is a mocked method. It's needed for client BHC templates to work, and doesn't need to work while we don't use them");
}
}, e.jstmpl.translations) return;
var t, n, r, o, i, a, u = e.jstmpl, s = e.env, t = function(e, t, n, o) {
var i = 0, a = !(0 !== o && !o);
if (a) {
if (/^[0-9]+$/.test(o)) i = parseInt(o, 10); else {
var u = t(o);
/^[0-9]+$/.test(u) ? i = u :console.warn("Trying to use a non-numeric template var for exception tool on copy '%s'", e);
}
n("num", i);
}
if (s && s.global_translation_tags) for (var f in s.global_translation_tags) t(f) || n(f, s.global_translation_tags[f]);
return r(e, t, n, i, a);
}, r = function(e, t, n, a, u) {
var s, f = e.split("/");
if ("" === f[0] && f.shift(), 1 == f.length) {
var c = f[0];
"{" === c.charAt(0) && "}" === c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2)), f = [ "private", c, "name" ];
}
for (var l = 0, p = f.length; p > l; ++l) {
var c = f[l];
"{" === c.charAt(0) && "}" === c.charAt(c.length - 1) && (f[l] = t(c.substr(1, c.length - 2)));
}
if (s = o(f[0], f[1], f[2]), u && (s = i(f, a) || s), s) {
var h = s.match(/{.*?}/g);
if (!h) return s;
for (var l = 0, p = h.length; p > l; ++l) {
var v, d = h[l];
v = -1 === d.indexOf("/") ? t(d.substr(1, d.length - 2)) :r(d, t, n, a, u), s = s.split(d).join(v);
}
}
return s || "";
}, o = function(t, n, r) {
if ("private" === t) {
var o = (a && a["private"] || {})[n];
return o && "string" != typeof o && o.experiment_hash && o.value && (e.et && e.et.stage(o.experiment_hash, 1), o = o.value), o;
}
return ((a && a[t] || {})[n] || {})[r || "name"];
}, i = function(e, t) {
var n = "", r = "language_exception_" + e[1] + "_";
"private" !== e[0] && (n = "_" + e[2]);
var i = [ t ];
if (t >= 100) {
var a = t % 100;
10 > a && i.push("*0"), i.push("*" + a);
}
t >= 10 && i.push("*" + t % 10);
for (var u = 0, s = i.length; s > u; ++u) {
var f = o(e[0], r + i[u] + n, e[2]);
if (f) return f;
}
return "";
}, n = function(e, n, r) {
if (r) throw "Can't use TMPL_TEXT on client-side templates";
return t(e, u.fn.GET_VAR, u.fn.SET_VAR, n);
};
u.setup({
get_trans:t,
get_var_plural:n,
get_text:n
});
var f = function(e) {
var e = e || {};
return {
gv:function(t) {
return e[t] || "";
},
sv:function(t, n) {
e[t] = n;
}
};
};
u.translations = function(e, n, r) {
var o = f(r);
return t(e, o.gv, o.sv, n);
}, u.translations.set = function(e) {
return e && (a = e, u.setup({
translations:e["private"] || {}
})), a;
};
}(window.booking || {}), function() {
if (booking.jstmpl.fn.track_experiment) return;
var e, t, n, r;
e = function(e) {
return booking.et.track(e);
}, n = function(e, t) {
return booking.et.stage(e, t);
}, t = function(e) {
return booking.et.track(e);
}, r = function(e, t) {
return booking.et.customGoal(e, t);
}, booking.jstmpl.setup({
fn:{
track_experiment:e,
track_experiment_stage:n,
experiment_variant:t,
track_custom_goal:r
}
});
}(), function(e) {
"use strict";
if (!e.jstmpl) return;
var t, n, r, o, i, a, u, s, f, c, l, p, h, v, d, g, m, _, y, w, b, T, E = {
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;",
"/":"&#47;"
}, N = {
"\b":"\\b",
"\f":"\\f",
"\n":"\\n",
"\r":"\\r",
"	":"\\t",
"'":"\\'",
'"':'\\"',
"<":"\\u003c",
">":"\\u003e",
"\\":"\\\\",
"&#39;":"&#39;",
"&quot;":"&quot;"
}, j = {
">":"\\u003e",
"<":"\\u003c"
};
n = function(e) {
return E[e];
}, t = function(e) {
return String(e).replace(/&(?!amp;|lt;|gt;|quot;|#39;|#47;)/g, "&amp;").replace(/[<>"'\/]/g, n);
}, o = function(e, t) {
return "\n<br />" + (t ? "\n<br />" :"");
}, r = function(e) {
return e.replace(/(?:\r?\n)((?:\r?\n)*)/, o);
}, a = function(e, t) {
return t ? "</p>\n<p>" :"\n<br />";
}, i = function(e) {
return e.replace(/(?:\r?\n)((?:\r?\n)*)/, a);
}, s = function(e) {
return r(_(e));
}, u = function(e) {
return r(t(e));
}, f = function(e) {
return "<p>" + i(t(e)) + "</p>";
}, c = function(e) {
return "<p>" + i(String(e)) + "</p>";
}, p = function(e) {
return N[e];
}, l = function(e) {
return String(e).replace(/([\b\f\n\r\t'"\\<>]|&quot;|&#39;)/g, p);
}, h = function(t) {
return e.jstmpl.fn.PERL_BOOL(t) ? "true" :"false";
}, v = function(e) {
return null === e || void 0 === e ? "" :"'" + l(e) + "'";
}, d = function(e) {
return encodeURIComponent(e).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}, g = function(e) {
return String(e).replace(/ /g, "");
}, m = function(e) {
return String(e).replace(/\n/g, "<br />");
}, b = function(e) {
return e in E ? E[e] :"&#" + e.charCodeAt(0) + ";";
}, _ = function(e) {
return String(e).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f&<>"'\/\u00A0-\u9999<>]/g, b);
}, T = function(e) {
return String(e).replace(/^\s+|\s+$/g, "");
}, w = function(e) {
return j[e];
}, y = function(e) {
return JSON.stringify(e).replace(/[<>]/g, w);
}, e.jstmpl.setup({
filters:{
html:t,
text2entities:s,
text2html:u,
text2para:f,
html2para:c,
js:l,
jsbool:h,
jsstr:v,
url:d,
nospace:g,
br:m,
entities:_,
json:y,
trim:T
}
});
}(window.booking || {}), function(e) {
"use strict";
if (!e.jstmpl) return;
var t, n, r, o, i, a, u, s, f, c;
t = function(e) {
var t, n, r, o = 0;
if (!e || 0 === e.length) return o;
for (t = 0, r = e.length; r > t; t++) n = e.charCodeAt(t), o = (o << 5) - o + n, o |= 0;
return o;
}, n = function(n, r, o, i) {
var a = "", u = o ? "" :document.location.protocol;
if (e && e.env && e.env.static_hostnames && e.env.static_hostnames.length) if (1 !== e.env.static_hostnames.length && n) {
if (!/https?:/.test(n.toString())) {
var s = t(n.toString()), f = Math.abs(s) % e.env.static_hostnames.length;
a = e.env.static_hostnames[f];
}
} else a = e.env.static_hostnames[0]; else a = u + "//q.bstatic.com";
return o && (a = a.replace(/^https?:/, "")), a + n;
}, a = function(e) {
return Array.isArray(e) ? e.length :0;
}, r = function(e, t, n, r, o) {
var i = B.require("utils/string-interpolate"), a = B.require("formatting/date").locale_format;
if (!e) return "";
var u = e.split(" ").slice(0, 2), s = (o || "").split(" ").slice(0, 2), f = {
date:u[0],
time:u[1],
date_until:s[0],
time_until:s[1],
format:t
};
return i(a(f), {
begin_marker:n,
end_marker:r
});
}, u = function(t) {
return e.jstmpl.fn && e.jstmpl.fn.FILTERS && e.jstmpl.fn.FILTERS.html ? e.jstmpl.fn.FILTERS.html(t) :"";
}, s = function(t) {
return e.jstmpl.fn && e.jstmpl.fn.FILTERS && e.jstmpl.fn.FILTERS.entities ? e.jstmpl.fn.FILTERS.entities(t) :"";
}, i = function(e, t, n) {
if ("string" == typeof e && "string" == typeof t) return e.indexOf(t, n || 0);
return -1;
}, f = function(e, t) {
var n = t.height, r = t.width, o = t["class"] || "", i = e.replace(/\//g, "-"), a = document.querySelector(".bk-icon.-" + i);
if (!e || !t || !a) return;
var u = a.getAttribute("viewBox"), s = u.split(" "), f = parseInt(s[2] - s[0], 10), c = parseInt(s[3] - s[1], 10);
n && !r ? r = Math.floor(n / (c / f)) :r && !n && (n = Math.floor(r / (f / c))), Object.assign(t, {
width:r || f,
height:n || c,
viewBox:u,
"class":"bk-icon -" + i + (o ? " " + o :"")
});
var l = Object.keys(t).reduce(function(e, n) {
return e + " " + n + '="' + t[n] + '"';
}, ""), p = a.innerHTML;
if (!p && void 0 !== typeof XMLSerializer) {
var h = new XMLSerializer();
p = "";
for (var v = a.childNodes, d = 0; d < v.length; d++) p += h.serializeToString(v[d]);
}
return "<svg " + l + ">" + p + "</svg>";
}, c = function(e, t, n, r) {
try {
return f(e, {
width:t,
height:n,
"class":r
});
} catch (o) {
if (window.B && B.env.b_dev_server) throw o;
return "";
}
}, o = function(e, t) {
switch (e) {
case "icon":
var n = t.name;
return delete t.name, f(n, t);

default:
throw new Error("unkown TMPL_HELPER " + name);
}
}, e.jstmpl.setup({
get_static_hostname:n,
get_date:r,
get_helper:o,
fn:{
escape_html:u,
escape_entities:s,
array_length:a,
index:i,
icon:c
}
});
}(window.booking), function(e) {
if (!e.jstmpl) return;
e.jstmpl.error_out = 1;
}(window.booking), window.booking && booking.define && booking.jstmpl && (booking.define("jstmpl", function() {
return booking.jstmpl;
}), booking.define("jstmpl-translations", function() {
var e = booking.require("jstmpl");
return e.translations;
})), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc.run = !0), function(e, t) {
e("tmpl_data", [], function() {
"use strict";
var e = {};
function t(t, n, r) {
void 0 === e[t] ? e[t] = n :(e.b_dev_server && console.warn("SERVER::Trying to override " + t + " with value: " + n), r && (e[t] = n));
}
function n(n, r) {
if (r) t(n, r); else {
if ("string" == typeof n) return e[n];
if ("object" != typeof n) return Object.keys(e).reduce(function(t, n) {
return t[n] = e[n], t;
}, {});
if (n.slice) {
for (var o, i = {}, a = 0, u = n.length; u > a; ++a) o = n[a], i[o] = e[o];
return i;
}
for (var s in n) n.hasOwnProperty(s) && t(s, n[s]);
}
}
return n.reset = function(e) {
for (var n in e) e.hasOwnProperty(n) && t(n, e[n], !0);
}, n;
});
}(B.define, B.require), function(e, t) {
e("request_info", [], function() {
"use strict";
var e, t = {}, n = "";
function r() {
var r = n;
n = Object.keys(t).join(","), (e || (e = document.getElementById("req_info"))) && (e.innerHTML !== r && (o(e.innerHTML), n = Object.keys(t).join(",")), e.innerHTML = n);
}
function o(e) {
t = e.split(",").reduce(function(e, t) {
return e[t] = !0, e;
}, t);
}
function i(e) {
t[e] = !0;
}
function a(e) {
i(e), "string" == typeof e ? (i(e), r()) :e instanceof Array && (e.forEach(i), r());
}
return {
populate:a
};
});
}(B.define, B.require), function(e, t) {
e("et_debug", [], function() {
var e, n = {
UNABLE_TO_STRINGIFY:"unable_to_stringify",
INIT_BEACON:"init_beacon",
DEFER_BEACON:"defer_beacon",
SEND_BEACON:"send_beacon",
BEACON_SENT:"beacon_sent",
TRACK_UNKNOWN_ITEM:"track_unknown_item",
SHOULD_TRACK:"should_track",
TRACKING_ATTEMPT:"tracking_attempt",
NOT_TRACKING_WAS_TRACKED:"not_tracking_was_tracked",
NOT_TRACKING_FULLON:"not_tracking_fullon",
NOT_TRACKING_NOT_RUNNING:"not_tracking_not_running",
ADD_EVENT_LISTENER:"add_event_listener",
NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER:"not_existing_element_wont_add_listener",
ADD_DEBOUNCED_VIEW_HANDLER:"add_view_handler",
ATTACH_VIEW_LISTENER:"attach_view_listener",
DETACH_VIEW_LISTENER:"detach_view_listener",
CHECK_IF_VISIBLE:"check_if_visible",
ONVIEW_TRACKING_TRIGGERED:"onview_tracking_triggered",
VISIBLE_CHECK_FINISHED:"visible_check_finished",
WONT_ATTACH_EVENT_TRACKING:"wont_attach_event_tracking"
}, r = B.env.b_dev_server && B.env.et_debug_level ? parseInt(B.env.et_debug_level, 10) :0;
function o(e, t) {
try {
var n = i();
n.trigger.apply(n, [].slice.call(arguments));
} catch (o) {
r && console.log("Error when trying to report et event", e, t, "error:", o);
}
}
function i() {
try {
if (!e) {
var n = t("event-emitter");
e = new n("et", {
async:!0
});
}
return e;
} catch (o) {
return r && console.log("Error when trying to init et event emitter", "error:", o), null;
}
}
return {
level:r,
events:n,
report:o,
getEventEmitter:i
};
}), function(t, n) {
"function" == typeof e && e.amd ? e("et", [ "jquery" ], n) :t.et = n(t.jQuery);
}(this, function(e) {
var n, r = fe(), o = {
experiment:"e",
stage:"s",
goal:"g",
customGoal:"cg",
goalWithValue:"gwv"
}, i = [], a = function() {
"use strict";
var e, t = {}, n = "";
function r() {
var r = n;
n = Object.keys(t).join(","), (e || (e = document.getElementById("req_info"))) && (e.innerHTML !== r && (o(e.innerHTML), n = Object.keys(t).join(",")), e.innerHTML = n);
}
function o(e) {
t = e.split(",").reduce(function(e, t) {
return e[t] = !0, e;
}, t);
}
function i(e) {
t[e] = !0;
}
function a(e) {
i(e), "string" == typeof e ? (i(e), r()) :e instanceof Array && (e.forEach(i), r());
}
return {
populate:a
};
}(), u = 0, s = 100, f = 10;
function c(e) {
var t, n = e.offset(), r = "function" == typeof n.constructor ? n.constructor :{
name:"OtherConstructor"
};
if ("ClientRect" === r.name) {
if (t = e.offset()) return t.top;
return !1;
}
return n.top;
}
function l(e, t, n) {
var r = c(e);
if (r === !1) return !1;
return !!(t + n > r && e.is(":visible"));
}
var p, h = function() {
var t, i = !1, a = [], c = [], l = 0;
function p(e) {
for (var t, n = [], i = [], a = [], u = [], s = [], f = 0, c = e.length; c > f; ++f) switch (t = e[f], t.what) {
case o.experiment:
n.push(t.hash);
break;

case o.stage:
s.push(t.hash + "|" + t.id);
break;

case o.goal:
i.push(t.hash);
break;

case o.customGoal:
a.push(t.hash + "|" + t.id);
break;

case o.goalWithValue:
var l = B(t.hash);
l && u.push(l);
break;

default:
r.level && r.report(r.events.UNABLE_TO_STRINGIFY, t);
}
return "exps=" + n.join(",") + "&what=" + i.join(",") + "&custom=" + a.join(",") + "&stage=" + s.join(",") + "&gwv=" + u.join(",");
}
function h(e) {
var t, n = e.url, r = e.complete || function() {}, o = e.headers || {}, i = XMLHttpRequest.DONE || 4, a = new XMLHttpRequest();
if (!n) return !1;
if (a.open("GET", n, !0), o) for (t in o) o.hasOwnProperty(t) && a.setRequestHeader(t, "function" == typeof o[t] ? o[t].call() :o[t]);
a.onreadystatechange = function() {
a.readyState === i && r(a, a.status);
}, a.send();
}
function v() {
r.level && r.report(r.events.BEACON_SENT, a), i = !1, l = 0, t = null, a.length && g();
}
function d() {
l++, i = !1, t = null, l >= f ? c = [] :(a = a.concat(c), c = [], t = window.setTimeout(g, l * s));
}
function g() {
r.level && r.report(r.events.SEND_BEACON, a.slice(0)), i = !0, c = a;
var t = n + "&" + p(c);
S.m && (t += "&m=" + encodeURIComponent(S.m)), a = [];
try {
E ? h({
url:t,
complete:function(e, t) {
200 === t ? v() :d();
},
headers:j
}) :e.ajax({
url:t,
complete:function(e, t) {
"success" === t ? v() :d();
}
});
} catch (o) {
var u = new Image();
u.onload = v, u.onerror = d, u.src = n;
}
}
function m(e, n, o) {
r.level && r.report(r.events.INIT_BEACON, e, n, o), 0 === arguments.length, a.push({
what:e,
hash:n,
id:o
}), i || t ? r.level && r.report(r.events.DEFER_BEACON, a) :t = window.setTimeout(g, u);
}
return m;
}(), v = {}, d = 300, g = !1, m = {}, _ = [], y = !1, w = !1, b = !1, T = !1, E = !1, N = !1, j = {}, x = !1, O = !1, I = "scroll resize", A = !1, S = {
r:{},
t:{},
f:{}
};
S.r || (S.r = {}), S.f || (S.f = {}), S.t || (S.t = {});
var k = {}, R = 50;
function C(e, t) {
k[e] || (k[e] = [ [], [] ]);
var n = k[e][0], r = k[e][1];
if (r.length <= R + 10) return n.push(t), !0;
}
function B(e) {
if (!k[e] || !k[e][0].length) return;
var t = k[e][0], n = k[e][1], r = [ e, t.join(":") ];
return n.length && r.push(n.join(":")), [].push.apply(n, t.splice(0, t.length)), r.join("|");
}
function L(e, t, n) {
var r;
return r = e === o.experiment || e === o.goal ? [ e, t ] :[ e, t, n ], r.join("-");
}
function D(e) {
if (!b) return e;
if (v[e]) return v[e];
for (var t = 2166136261, n = 0, r = e.length; r > n; ++n) t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t ^= e.charCodeAt(n);
return v[e] = (t >>> 0).toString(16);
}
function M(e, t, n) {
if (r.level && r.report(r.events.TRACKING_ATTEMPT, {
what:e,
hash:t,
id:n,
variant:(e === o.experiment || e === o.stage) && ee(t)
}), q(e, t, n)) switch (e) {
case o.experiment:
G(o.experiment, t), a.populate(t), S.m && i.push(t), h(o.experiment, t);
break;

case o.stage:
G(o.stage, t, n), a.populate(t + "|" + n), S.m && i.push(t + "|" + n), h(o.stage, t, n);
break;

case o.goal:
G(o.goal, t), h(o.goal, t);
break;

case o.customGoal:
G(o.customGoal, t, n), h(o.customGoal, t, n);
break;

case o.goalWithValue:
C(t, n) && h(o.goalWithValue, t, n);
break;

default:
r.level && r.report(r.events.TRACK_UNKNOWN_ITEM, e, t, n);
}
return e === o.experiment ? ee(t) :!0;
}
function G(e, t, n) {
m[L(e, t, n)] = !0;
}
function q(e, t, n) {
if (N) return !1;
r.level && r.report(r.events.SHOULD_TRACK, e, t, n);
var i = {
what:e,
hash:t,
id:n,
variant:(e === o.experiment || e === o.stage) && ee(t)
};
if (m[L(e, t, n)]) return r.level && r.report(r.events.NOT_TRACKING_WAS_TRACKED, i), !1;
if (e === o.experiment || e === o.stage) {
var a = 1 << (n || 0), u = D(t);
if (S.f[u]) return r.level && r.report(r.events.NOT_TRACKING_FULLON, i), !1;
if (void 0 === S.r[u]) return r.level && r.report(r.events.NOT_TRACKING_NOT_RUNNING, i), !1;
if (S.t[u] & a) return G(e, t, n), r.level && r.report(r.events.NOT_TRACKING_WAS_TRACKED, i), !1;
} else if (e === o.customGoal) {
var u = D(t);
if (S.f[u]) return r.level && r.report(r.events.NOT_TRACKING_FULLON, i), !1;
if (void 0 === S.r[u]) return r.level && r.report(r.events.NOT_TRACKING_NOT_RUNNING, i), !1;
}
return !0;
}
function P(t, n, o, i, a) {
r.level && r.report(r.events.ADD_EVENT_LISTENER, t, n, o, i, a), p || (p = e(window));
var u = e(n).eq(0);
if ("view" !== t && (u = e(n)), !u.length) return void (r.level && r.report(r.events.NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER, o, i, a));
function s() {
M(o, i, a);
}
"view" === t ? F(u, o, i, a) :u.one(t, s);
}
function F(e, t, n, o) {
r.level && r.report(r.events.ADD_DEBOUNCED_VIEW_HANDLER, e, t, n, o);
var i = L(t, n, o);
if (m[i]) return !1;
_.push([ e, t, n, o ]), y || (r.level && r.report(r.events.ATTACH_VIEW_LISTENER, _), p.bind("load", function() {
setTimeout(V, d);
}), setTimeout(V, d), p.bind(I, V), x && x(V), y = !0);
}
function V() {
if (w) {
if (g) return;
g = setTimeout(function() {
g = !1, V();
}, d);
}
w = !0;
var e = [], t = p.scrollTop(), n = p.height();
r.level && r.report(r.events.CHECK_IF_VISIBLE, _);
for (var o, i = 0, a = _.length; a > i; ++i) o = _[i], o && l(o[0], t, n) ? (r.level && r.report(r.events.ONVIEW_TRACKING_TRIGGERED, o[1], o[2], o[3]), M(o[1], o[2], o[3])) :e.push(o);
_ = e, r.level && r.report(r.events.VISIBLE_CHECK_FINISHED, _), 0 === _.length && (y = !1, p.unbind(I, V), O && O(V), r.level && r.report(r.events.DETACH_VIEW_LISTENER)), window.setTimeout(function() {
w = !1;
}, d);
}
function H(e, t, n, o, i) {
r.level && r.report(r.events.ADD_EVENT_LISTENER, e, t, n, o, i);
var a = z(t);
if (a.length > 0) if ("view" === e) U(a[0], n, o, i); else {
function u() {
M(n, o, i);
for (var t = 0, r = a.length; r > t; t++) J(a[t], e, u);
}
for (var s = 0, f = a.length; f > s; s++) $(a[s], e, u);
} else r.level && r.report(r.events.NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER, n, o, i);
}
function U(e, t, n, o) {
r.level && r.report(r.events.ADD_DEBOUNCED_VIEW_HANDLER, e, t, n, o);
var i = L(t, n, o);
if (m[i]) return !1;
_.push([ e, t, n, o ]), y || (r.level && r.report(r.events.ATTACH_VIEW_LISTENER, _), $(window, "scroll", K), $(window, "resize", K), x && x(K), y = !0);
}
function K() {
if (w) return;
w = !0;
var e = [];
r.level && r.report(r.events.CHECK_IF_VISIBLE, _);
for (var t, n = 0, o = _.length; o > n; ++n) t = _[n], t && W(t[0]) ? (r.level && r.report(r.events.ONVIEW_TRACKING_TRIGGERED, t[1], t[2], t[3]), M(t[1], t[2], t[3])) :e.push(t);
_ = e, r.level && r.report(r.events.VISIBLE_CHECK_FINISHED, _), 0 === _.length && (y = !1, J(window, "scroll", K), J(window, "resize", K), O && O(K), r.level && r.report(r.events.DETACH_VIEW_LISTENER)), window.setTimeout(function() {
w = !1;
}, d);
}
function W(e) {
var t, n, r;
if (!e) return !1;
if (!e.parentElement) return !1;
if (!e.getBoundingClientRect) return !0;
if (t = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth, t.right < 0 || t.left > r || 0 === t.top && 0 === t.left && 0 === t.right && 0 === t.bottom) return !1;
return t.top < n;
}
function z(t) {
if (e) return e(t).toArray();
if ("string" == typeof t) return [].slice.call(document.querySelectorAll(t));
if (t instanceof HTMLCollection) return [].slice.call(t);
if (t instanceof NodeList) return [].slice.call(t);
if (t instanceof Element) return [ t ];
if ("[object Array]" === Object.prototype.toString.call(t)) return t;
return [];
}
function $(e, t, n) {
e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
e["e" + t + n](window.event);
}, e.attachEvent("on" + t, e[t + n])) :e.addEventListener(t, n, !1);
}
function J(e, t, n) {
e.detachEvent ? e[t + n] && (e.detachEvent("on" + t, e[t + n]), e[t + n] = null) :e.removeEventListener(t, n, !1);
}
function X(e, t, n) {
return function(o, i) {
q(n, o, i) ? window.jQuery && !T ? P(e, t, n, o, i) :H(e, t, n, o, i) :r.level && r.report(r.events.WONT_ATTACH_EVENT_TRACKING, e, t, n, o, i);
};
}
function Z(e, t) {
return {
track:X(e, t, o.experiment),
stage:X(e, t, o.stage),
goal:X(e, t, o.goal),
customGoal:X(e, t, o.customGoal)
};
}
function Y(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
}
function Q(e) {
S.f = e.f || {}, Y(S.r, e.r || {}), Y(S.t, e.t || {}), e.m && !S.m && (S.m = e.m, i = []);
}
function ee(e) {
var t = D(e);
return S.r[t] || S.f[t] || 0;
}
function te(e) {
if (arguments.length > 1) throw "Track only accept one parameter";
if (!e) {
if (A) throw "B.et.track: hash value should be a non-empty string";
return 0;
}
return M(o.experiment, e);
}
function ne(e, t) {
if (!e) {
if (A) throw "B.et.trackStage: hash value should be a non-empty string";
return !1;
}
if (void 0 === t) {
if (A) throw "B.et.trackStage: stage number should be a number between 1 and 9";
return !1;
}
if (0 === t) return te(e);
if (!/^[1-9]$/.test(t)) {
if (A) throw "B.et.trackStage: stage number should be a number between 1 and 9";
return !1;
}
return M(o.stage, e, t);
}
function re(e) {
if (!e) {
if (A) throw "B.et.goal: name should be a non-empty string";
return !1;
}
return M(o.goal, e);
}
function oe(e, t) {
if (!e || !t || !/^[1-5]$/.test(t)) {
if (A) {
if (!e) throw "B.et.customGoal: hash value should be a non-empty string";
if (!t || !/^[1-5]$/.test(t)) throw "B.et.customGoal: custom goal number should be a number between 1 and 5";
}
return !1;
}
return M(o.customGoal, e, t);
}
function ie(e, t) {
if (!/^js_/.test(e) || !/^-?[0-9]+$/.test(t)) {
if (A) {
if (!/^js_/.test(e)) throw "B.et.goalWithValue: name should be a non-empty string with prefix js_";
if (!/^-?[0-9]+$/.test(t)) throw "B.et.goalWithValue: value should be an integer";
}
return !1;
}
return M(o.goalWithValue, e, t);
}
function ae(t) {
var n, r, o, i = [ "change", "click", "mouseenter", "touch", "focus", "view" ];
T ? u() :a();
function a() {
for (t && 0 !== t.length || (t = e("body")), n = 0; n < i.length; n++) r = i[n], o = "data-et-" + r, t.find("[" + o + "]").each(function(t, n) {
var i = ue(e(n).attr(o)), a = "touch" === r ? "touchstart" :r, u = Z(a, n);
i.forEach(function(e) {
u && u[e.action] && u[e.action](e.hash, e.value);
});
});
}
function u() {
for (t && 0 !== t.length ? t.length && (t = t[0]) :t = document.querySelector("body"), n = 0; n < i.length; n++) {
r = i[n], o = "data-et-" + r;
for (var e = t.querySelectorAll("[" + o + "]"), a = 0; a < e.length; a++) {
var u = e[a], s = ue(u.getAttribute(o)), f = "touch" === r ? "touchstart" :r, c = Z(f, u);
s.forEach(function(e) {
c && c[e.action] && c[e.action](e.hash, e.value);
});
}
}
}
}
function ue(e) {
var t, n = /^(?:(goal|customGoal):)?([a-zA-Z]\w+)?(?::([\d]))?$/, r = [];
for (e = e.split(/\s+/), t = 0; t < e.length; t++) {
var o = e[t].match(n), i = o && o[2], a = o && o[3], u = o && o[1] || (a ? "stage" :"track");
u && r.push({
hash:i,
value:a,
action:u
});
}
return r;
}
function se(e) {
e.url && (n = e.url), e.jset && Q(e.jset), "undefined" != typeof e.useFNV && (b = e.useFNV), "undefined" != typeof e.noJqueryOn && (T = e.noJqueryOn), "undefined" != typeof e.noJqueryAjax && (E = e.noJqueryAjax), "undefined" != typeof e.ajaxHeaders && (j = e.ajaxHeaders), "undefined" != typeof e.snt && (N = e.snt), "function" == typeof e.bindOnView && (x = e.bindOnView), "function" == typeof e.unbindOnView && (O = e.unbindOnView), e.isDevServer && (A = !0);
}
function fe() {
try {
r = t("et_debug");
} catch (e) {}
return r || (r = {
level:0
}), r;
}
function ce() {
return i.join(",");
}
function le() {}
return le.prototype.track = te, le.prototype.stage = ne, le.prototype.goal = re, le.prototype.customGoal = oe, le.prototype.goalWithValue = ie, le.prototype.on = Z, le.prototype.set = Q, le.prototype.Trackables = o, le.prototype.configure = se, le.prototype.initAttributesTracking = ae, le.prototype.tracked = ce, new le();
});
}(B.define, B.require), B.define("utils/string-interpolate", function(e, t, n) {
n.exports = function(e, t) {
return e.replace(/{([^{}]*)}/g, function(e, n) {
var r = t[n];
return "string" == typeof r || "number" == typeof r ? r :e;
});
};
}), B.define("utils/string-pad", function(e, t, n) {
function r(e, t, n, r) {
var o = (t || 2) - e.toString().length + 1;
if (0 >= o) return e;
var i = new Array(o).join(n || "0");
return r ? e + i :i + e;
}
r.left = r, r.right = function(e, t, n) {
return r(e, t, n, !0);
}, n.exports = r;
}), B.define("formatting/date", function(e, t, n) {
var r = B.env.b_date_format, o = B.env.b_month_for_formatted_date, i = B.env.b_weekday_formatted_date, a = B.require("utils/string-interpolate");
i[0] = i[7];
function u(e) {
return (10 > e ? "0" :"") + e;
}
t.format = function(e, t) {
if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day) throw new Error("formatting/date: invalid date provided");
if (!t) throw new Error("formatting/date: invalid format provided");
if (e.year = +e.year, e.month = +e.month, e.day = +e.day, isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) throw new Error("formatting/date: invalid date provided");
var n = r[t] || t, s = new Date(Date.UTC(e.year, e.month, e.day, e.hours || 0, e.minutes || 0)), f = s.getUTCMonth() + 1, c = s.getUTCDate(), l = o[f], p = i[s.getUTCDay()], h = {
weekday:p.name,
short_weekday:p["short"],
day_of_month:c,
zero_padded_day_of_month:u(c),
month:f,
month_name_with_year_only:l.name_with_year_only,
zero_padded_month:u(f),
month_name:l.name,
short_month_name:l.short_name,
full_year:s.getUTCFullYear(),
time:u(s.getUTCHours()) + ":" + u(s.getUTCMinutes())
};
return a(n, h);
}, t.compat = function(e, n) {
var r;
if (e instanceof Date) r = e; else if (e && e.indexOf && -1 === e.indexOf(":") && (e += " 00:00"), r = isNaN(Date.parse(e)) ? !1 :new Date(e), r || "undefined" == typeof e || null === e || (e = e.replace(/-/g, "/"), r = isNaN(Date.parse(e)) ? !1 :new Date(e)), !r) return !1;
n = n || "short_date", e = t.breakdown(r);
try {
return t.format(e, n);
} catch (o) {
return !1;
}
};
var s = /^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}).*/;
t.locale_format = function(e) {
var t = "object" == typeof e ? e.date :e, n = e.time, u = e.date_until, f = e.time_until;
if (!t) throw new Error("formatting/date: no date provided");
if (t = t.replace(s, function(e, t) {
return t;
}), !t.match(s)) throw new Error("formatting/date: invalid date provided — " + t);
if (u && (u = u.replace(s, function(e, t) {
return t;
}), !u.match(s))) throw new Error("formatting/date: invalid date_until provided — " + u);
var c = e.format || "short_date";
if (!r[c]) return "";
var l = t.split(/-0*/), p = u ? u.split(/-0*/) :void 0, h = {};
if (n) {
var v = B.require("formatting/time").locale_format;
h.time = n ? v(n) :"", h.time_until = f ? v(f) :"";
}
return [ l ].concat(u ? [ p ] :[]).forEach(function(e, n) {
var r = (n ? u :t).split(/-0*/), a = {
month_name:o[parseInt(e[1], 10)],
weekday:i[new Date(Date.UTC(+r[0], +r[1] - 1, +r[2], 0, 0, 0, 0)).getUTCDay()]
};
[ "full_year", "month", "day_of_month" ].forEach(function(t, r) {
h[t + (n ? "_until" :"")] = e[r];
}), [ "%", "%_nom", "%_in", "%_from", "%_to", "short_%" ].forEach(function(e) {
Object.keys(a).forEach(function(t) {
h[(e + (n ? "_until" :"")).replace("%", t)] = a[t]["%" === e[0] || "month_name" === t ? e.replace("%", "name").replace(/_nom$/, "_only") :"short"];
});
}), n || (h.month_name_with_year_only = o[parseInt(e[1], 10)].name_with_year_only);
}), a(r[c], h);
}, t.breakdown = function(e) {
return {
year:e.getFullYear(),
month:e.getMonth(),
day:e.getDate(),
hours:e.getHours(),
minutes:e.getMinutes()
};
}, t.stringify = function(e) {
return t.format(t.breakdown(e), "{full_year}-{zero_padded_month}-{zero_padded_day_of_month} {time}");
};
}), B.define("formatting/time", function(e, t, n) {
var r = B.env.b_time_format, o = B.require("utils/string-interpolate"), i = B.require("utils/string-pad");
return {
locale_format:function(e) {
e = "object" != typeof e ? {
time:e
} :e;
var t, n = {};
if (!e.time) throw new Error("formatting/time: no time provided");
if (e.until = e.until || !1, e.until = e.no_html || !0, "en-us" === B.env.b_locale && !B.env.ip_country.match(/^(?:us|ca)$/)) return e.time;
if (e.time.match(/^(?:([0-2]?[0-9])[.: -]?([0-5]?[0-9]))$/).slice(1).forEach(function(e, t) {
n[t ? "minutes" :"hour"] = e.replace(/^0/, "") || 0;
}), Math.abs(n.hour - 12) > 12 || Math.abs(n.minutes - 30) > 30) throw new Error("formatting/time: invalid time provided — " + e.time);
return n.hour = n.hour % 24, n.hour_24h_no0 = n.hour, n.hour_24h = i(n.hour), n.hour_24h_show24_no0 = n.minutes || n.hour ? n.hour_24h_no0 :24, n.hour_24h_show24 = i(n.hour_24h_show24_no0), n.hour_24h_until24_no0 = n[e.until ? "hour_24h_show24_no0" :"hour_24h_no0"], n.hour_24h_until24 = i(n.hour_24h_until24_no0), n.hour_12h_no0 = n.hour % 12 || 12, n.hour_12h = i(n.hour_12h_no0), n.minutes_no0 = n.minutes, n.minutes = i(n.minutes_no0), n.AM_PM = r[(n.hour < 12 ? "AM" :"PM") + "_symbol"].name, t = o(r.time.name, n).trim(), e.no_html ? t.replace(/\s/g, "&nbsp;") :t;
}
};
}), B.define("event-emitter", function(e, t, n) {
(function() {
var e = Array.prototype.slice, t = "function" == typeof setImmediate, r = 0;
function o(e, t, n) {
return function() {
return e.apply(t, n);
};
}
function i(e) {
e || (e = {});
var t = this._events = {
events:{},
listening:[],
context:e.context,
count:0,
name:e.name || ++r
};
if (e.debug && (t.debug = !0, t.last = {
time:0,
eventCount:0
}), e.strict && (t.strict = !0, t.strictKeys = e.events, !e.events)) throw new Error("No events defined for emitter " + t.name);
e.async && (this.emitSync = this.emit, this.emit = this.emitNext, t.async = !0);
}
function a(e, t, n) {
var r = e._events;
if (r.strict && r.strictKeys.hasOwnProperty(n)) return;
var o = new Error(t + "(): event '" + n + "' has not been registered for emitter " + r.name);
throw o.emitter = e, o;
}
i.prototype.addListener = function(e, t, n) {
var r = this._events;
if (null == e) throw new Error("addListener(name, fn, context): name cant be " + e);
r.strict && a(this, "addListener", e);
var o = r.events[e] || (r.events[e] = []);
return o.push(n ? {
fn:t,
context:n
} :t), this;
}, i.prototype.once = function(e, t) {
var n = this._events;
n.strict && a(this, "once", e);
var r = this, o = !1;
function i() {
o || (o = !0, t.apply(this, arguments), r.removeListener(e, i));
}
return this.addListener(e, i);
}, i.prototype.removeListener = function(t, n) {
var r = this._events;
r.strict && a(this, "removeListener", t);
var o = this, i = this._events.events[t];
if ("*" === t) if (n) for (var u in r.events) r.events.hasOwnProperty(u) && o.removeListener(u, n); else r.events = {}; else if (n && i) {
for (var s = e.call(i, 0), f = 0; f < s.length; f++) {
var r = r;
!s[f] || s[f] !== n && s[f].fn !== n || i.splice(f, 1);
}
0 === i.length && delete r.events[t];
} else delete r.events[t];
return this;
}, i.prototype.emit = function(t) {
var n = this._events;
if (null == t) throw new Error("emit(name): name cant be " + t);
n.strict && a(this, "emit", t), n.debug && this.tick();
var r = n.events[t];
if (!r) return this;
r = e.call(r, 0);
for (var o = 0; o < r.length; o++) {
var i = r[o], u = i.context || n._context || this, s = i.fn || i, f = arguments.length;
switch (f) {
case 1:
s.call(u);
break;

case 2:
s.call(u, arguments[1]);
break;

case 3:
s.call(u, arguments[1], arguments[2]);
break;

default:
for (var c = new Array(f - 1), l = 1; f > l; l++) c[l - 1] = arguments[l];
s.apply(u, c);
}
}
return this;
}, i.prototype.emitNext = function(e) {
var n = this._events;
n.strict && a(this, "emitNext", e);
var r = this, u = arguments, s = o(i.prototype.emit, r, u);
return t ? setImmediate(s) :setTimeout(s, 0);
}, i.prototype.tick = function() {
var e = this._events, t = +new Date(), n = e.last;
e.count++, t - n.time > 5e3 && (e.rate = Math.floor((e.count - n.count) / (t - n.time) / 1e3), e.last = {
time:t,
count:e.count
});
}, i.prototype.proxy = function(t, n) {
var r = this;
return function() {
var o = e.call(arguments, 0);
"function" == typeof n && (o = n.apply(null, o)), o.unshift(t), r.emit.apply(r, o);
};
}, i.extend = function(e, t) {
i.call(e, t);
var n = i.prototype;
for (var r in n) {
if (!n.hasOwnProperty(r)) continue;
e[r] = n[r];
}
return e;
}, i.create = function(e) {
return new i(e);
};
var u = {
on:"addListener",
off:"removeListener",
trigger:"emit",
one:"once"
};
for (var s in u) {
if (!u.hasOwnProperty(s)) continue;
i.prototype[s] = i.prototype[u[s]];
}
"undefined" != typeof n && n.exports ? n.exports = i :"function" == typeof define ? define("Evy", function() {
return i;
}) :this.Evy = i;
}).call(this);
}), B.define("events", function(e, t, n) {
var r = e("event-emitter"), o = new r();
return o.Emitter = r, o;
}), B.define("jquery", function() {
"use strict";
return jQuery;
}), B.define("promise", function(e, t, n) {
"undefined" == typeof Promise ? !function(e) {
var t = i.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
setTimeout(e, 1);
};
function r(e, t) {
return function() {
e.apply(t, arguments);
};
}
var o = Array.isArray || function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
};
function i(e) {
if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
if ("function" != typeof e) throw new TypeError("not a function");
this._state = null, this._value = null, this._deferreds = [], l(e, r(u, this), r(s, this));
}
function a(e) {
var n = this;
if (null === this._state) return void this._deferreds.push(e);
t(function() {
var t = n._state ? e.onFulfilled :e.onRejected;
if (null === t) return void (n._state ? e.resolve :e.reject)(n._value);
var r;
try {
r = t(n._value);
} catch (o) {
return void e.reject(o);
}
e.resolve(r);
});
}
function u(e) {
try {
if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
if (e && ("object" == typeof e || "function" == typeof e)) {
var t = e.then;
if ("function" == typeof t) return void l(r(t, e), r(u, this), r(s, this));
}
this._state = !0, this._value = e, f.call(this);
} catch (n) {
s.call(this, n);
}
}
function s(e) {
this._state = !1, this._value = e, f.call(this);
}
function f() {
for (var e = 0, t = this._deferreds.length; t > e; e++) a.call(this, this._deferreds[e]);
this._deferreds = null;
}
function c(e, t, n, r) {
this.onFulfilled = "function" == typeof e ? e :null, this.onRejected = "function" == typeof t ? t :null, this.resolve = n, this.reject = r;
}
function l(e, t, n) {
var r = !1;
try {
e(function(e) {
if (r) return;
r = !0, t(e);
}, function(e) {
if (r) return;
r = !0, n(e);
});
} catch (o) {
if (r) return;
r = !0, n(o);
}
}
i.prototype["catch"] = function(e) {
return this.then(null, e);
}, i.prototype.then = function(e, t) {
var n = this;
return new i(function(r, o) {
a.call(n, new c(e, t, r, o));
});
}, i.all = function() {
var e = Array.prototype.slice.call(1 === arguments.length && o(arguments[0]) ? arguments[0] :arguments);
return new i(function(t, n) {
if (0 === e.length) return t([]);
var r = e.length;
function o(i, a) {
try {
if (a && ("object" == typeof a || "function" == typeof a)) {
var u = a.then;
if ("function" == typeof u) return void u.call(a, function(e) {
o(i, e);
}, n);
}
e[i] = a, 0 === --r && t(e);
} catch (s) {
n(s);
}
}
for (var i = 0; i < e.length; i++) o(i, e[i]);
});
}, i.resolve = function(e) {
if (e && "object" == typeof e && e.constructor === i) return e;
return new i(function(t) {
t(e);
});
}, i.reject = function(e) {
return new i(function(t, n) {
n(e);
});
}, i.race = function(e) {
return new i(function(t, n) {
for (var r = 0, o = e.length; o > r; r++) e[r].then(t, n);
});
}, "undefined" != typeof n && n.exports ? n.exports = i :e.Promise || (e.Promise = i);
}(this) :n.exports = Promise;
}), B.define("when/core", function(e, t, n) {
var r = e("promise"), o = {};
function i(e, t) {
var n = [], r = [];
return Object.keys(e).map(function(i) {
var a = o[i];
if (!a || "function" != typeof a.handler) throw new Error("B.when: " + i + " is not a valid condition");
a.defer === !0 ? r.push({
key:i,
value:e[i]
}) :n.push(a.handler.call(null, e[i], t)), t.conditions[i] = e[i];
}), {
resolved:n,
deferred:r
};
}
function a(t) {
if ("object" != typeof t) throw new Error("B.when: expecting an object as argument");
var n, a, u, s, f = {
conditions:{}
}, c = i(t, f), l = r.all(c.resolved).then(function(e) {
if (!e.every(Boolean)) return u && u.call(f);
var t = c.deferred.map(function(e) {
var t = o[e.key];
return t.handler.call(null, e.value, f);
});
if (!t.every(Boolean)) return u && u.call(f);
"function" == typeof n && B.require(a || [ "require" ], n.bind(f));
})["catch"](function(e) {
if ("function" == typeof u) return u.call(f, e);
setTimeout(function() {
throw e;
}, 0);
});
return l.run = function(e, t) {
"function" == typeof n ? s = e :n = e || function() {}, u = t;
}, l.load = function(t) {
return n = function() {
var n = e("async-loader").load(t);
"function" == typeof s && n.then(function() {
B.require([], s.bind(f));
}, function() {});
}, {
run:l.run
};
}, l.require = function(e, t, r) {
n = t, a = e, u = r;
}, l;
}
a.add = function(e, t) {
if ("string" == typeof e) o[e] = {
name:e,
handler:t
}; else {
var n = e;
o[n.name] = n;
}
}, n.exports = a;
}), function() {
var e = !1, t = !1, n = B.require("events"), r = B.require("jquery");
r(window).on("load", function() {
e = !0, n.trigger("load");
}), r(function() {
t = !0, n.trigger("ready");
}), B.define("when/events", function(o, i, a) {
var u = o("promise"), s = o("when/events-view");
function f(e) {
var t, n, r, o, i, a = "string" == typeof e ? [ e ] :e, u = [];
for (o = 0, r = a.length; r > o; ++o) n = a[o], t = !1, i = n.indexOf(" "), i > -1 && (t = n.slice(i + 1), n = n.slice(0, i)), u.push({
evt:n,
node:t
});
return u;
}
function c(o) {
var i, a = f(o);
return new u(function(o) {
function u() {
o(!0);
}
for (;a.length; ) switch (i = a.pop(), !0) {
case "view" === i.evt && !!i.node:
s(i.node, u);
break;

case !!i.node:
r(i.node).one(i.evt, u);
break;

case "ready" === i.evt && t:
u();
break;

case "load" === i.evt && e:
u();
break;

default:
n.on(i.evt, u);
}
});
}
a.exports = {
name:"events",
handler:c
};
});
}(), B.define("when/events-view", function(e, t, n) {
var r = e("jquery"), o = 100, i = 20, a = [], u = r(window), s = !1, f = !1;
function c(e) {
var t = u.scrollTop(), n = e[0], r = u.height(), o = n.offset();
if (o && t + r > o.top + i && n.is(":visible")) return e[1].call(e[2], n), !1;
return !0;
}
function l() {
if (f) return;
f = !0, a = a.filter(c), a.length || (u.off("scroll", l), u.off("resize", l), s = !1), setTimeout(function() {
f = !1;
}, o);
}
function p(e, t, n) {
var o, i = r(e);
if (!i.length || "function" != typeof t) return;
o = [ r(e), t, n || this ], c(o) && a.push(o), !s && a.length && (u.on("scroll", l), u.on("resize", l), s = !0);
}
n.exports = p;
}), B.define("when/click", function(e, t, n) {
var r = e("promise"), o = e("jquery");
function i(e) {
return new r(function(t) {
o(function() {
o(e).on("click", t);
});
});
}
n.exports = {
name:"click",
handler:i
};
}), B.define("when/hover", function(e, t, n) {
var r = e("promise"), o = e("jquery");
function i(e) {
var t = e.match(/^(\d+)(\w+)?\s(.*)/);
return {
delay:t ? "s" === t[2] ? 1e3 * t[1] :t[1] :0,
selector:t ? t[3] :e
};
}
function a(e) {
return e = i(e), new r(function(t) {
o(e.selector).each(function() {
var n = o(this), r = null, i = function() {
r = setTimeout(function() {
n.unbind("mouseenter", i), n.unbind("mouseleave", a), t(!0);
}, +e.delay);
}, a = function() {
clearTimeout(r);
};
n.bind("mouseenter.when-hover", i), n.bind("mouseleave.when-hover", a);
});
});
}
n.exports = {
name:"hover",
handler:a
};
}), B.define("when/ready", function(e, t, n) {
var r = e("jquery"), o = e("events"), i = !1;
r(function() {
i = !0, o.trigger("when:ready");
});
function a() {
return i || new Promise(function(e) {
o.on("when:ready", e);
});
}
n.exports = {
name:"ready",
handler:a
};
}), B.define("when/load", function(e, t, n) {
var r = e("promise"), o = e("events"), i = e("jquery"), a = "complete" === document.readyState;
i(window).on("load", function() {
a = !0, o.trigger("when:load");
});
function u() {
return a || new r(function(e) {
event.on("when:load", e);
});
}
n.exports = {
name:"load",
handler:u
};
}), B.define("when/action", function(e, t, n) {
function r(e) {
if (e instanceof Array) return e.indexOf(B.env.b_action) > -1;
return B.env.b_action === e;
}
n.exports = {
name:"action",
handler:r
};
}), B.define("when/condition", function(e, t, n) {
function r(e) {
return "function" == typeof e ? e.call(null) :e;
}
n.exports = {
name:"condition",
handler:r
};
}), B.define("when/experiment", function(e, t, n) {
var r = e("et");
function o(e, t) {
return t.hash = e, t.variant = function() {
return r.track(e);
}, r.track(e) > 0;
}
n.exports = {
name:"experiment",
handler:o,
defer:!0
};
}), B.define("when/stage", function(e, t, n) {
var r = e("et");
function o(e, t) {
if (!t.conditions.experiment) throw new Error('when: "stage" must come after "experiment" condition');
return t.stage = e, r.stage(t.hash, e), !0;
}
n.exports = {
name:"stage",
handler:o,
defer:!0
};
}), B.define("when/language", function(e, t, n) {
function r(e) {
if ("string" != typeof e || "function" != typeof e.split) return !1;
var t = e.split(",").map(function(e) {
return e.trim();
});
if (1 === t.length && "cjk" === t[0]) return Boolean(B.env.b_lang_is_cjk);
return t.indexOf(B.env.b_lang) > -1;
}
n.exports = {
name:"language",
handler:r
};
}), B.define("when", function(e, t, n) {
var r = e("when/core");
return [ "when/events", "when/click", "when/hover", "when/ready", "when/load", "when/action", "when/condition", "when/experiment", "when/stage", "when/language" ].forEach(function(t) {
r.add(e(t));
}), r;
}), B.when = B.require("when"), window.jQuery.cookie = function(e, t, n) {
if ("undefined" == typeof t) {
var r = null;
if (document.cookie && "" != document.cookie) for (var o = document.cookie.split(";"), i = 0; i < o.length; i++) {
var a = o[i].trim();
if (a.substring(0, e.length + 1) == e + "=") {
r = decodeURIComponent(a.substring(e.length + 1));
break;
}
}
return r;
}
n = n || {}, null === t && (t = "", n = $.extend({}, n), n.expires = -1);
var u = "";
if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
var s;
"number" == typeof n.expires ? (s = new Date(), s.setTime(s.getTime() + 24 * n.expires * 60 * 60 * 1e3)) :s = n.expires, u = "; expires=" + s.toUTCString();
}
var f = n.path ? "; path=" + n.path :"", c = n.domain ? "; domain=" + n.domain :"", l = n.secure ? "; secure" :"";
document.cookie = [ e, "=", encodeURIComponent(t), u, f, c, l ].join("");
};