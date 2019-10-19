var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

B.define("caret", function() {
_i_("4ab:1");
var t = function(t) {
_i_("4ab:88");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), e.moveStart("character", -t.value.length), _r_(e.text.length);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionStart);
return _r_(0);
}, e = function(t, e) {
_i_("4ab:89");
var i;
if (!t) return _r_();
document.selection ? (t.focus(), i = document.selection.createRange(), i.moveStart("character", -t.value.length), i.moveStart("character", e), i.moveEnd("character", 0), i.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = e, t.focus()), _r_();
}, i = function(t, e, i) {
_i_("4ab:90");
var n;
if (!t) return _r_();
document.selection ? (t.focus(), n = document.selection.createRange(), n.moveStart("character", -t.value.length), n.moveStart("character", e), n.moveEnd("character", i - e), n.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = i, t.focus()), _r_();
}, n = function(t) {
_i_("4ab:91");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), _r_(e.text.length || 0);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionEnd - t.selectionStart);
return _r_(0);
};
return _r_({
getPosition:t,
setPosition:e,
setSelection:i,
getSelectionLength:n
});
}), B.define("click-out", function(t, e, i) {
"use strict";
_i_("4ab:2");
var n = {}, a = !1;
function s() {
_i_("4ab:44"), a || (a = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", r) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", r)), _r_();
}
function r(t) {
_i_("4ab:45");
var e, i = Object.keys(n), a = {}, s = !1;
if (i.length) for (e = t.target || t.srcElement; e && (i.forEach(function(t) {
_i_("4ab:447"), n[t].element === e && (a[t] = !0, 1 == i.length && (s = !0)), _r_();
}), !s); ) e = e.parentNode;
i.forEach(function(t) {
_i_("4ab:127"), !a[t] && n[t] && (n[t].callback.call(!1), o(t)), _r_();
}), _r_();
}
function o(t) {
_i_("4ab:46"), n[t] && delete n[t], _r_();
}
function _() {
_i_("4ab:47");
var t = Object.keys(n);
t.forEach(function(t) {
_i_("4ab:128"), n[t].callback.call(!1), o(t), _r_();
}), _r_();
}
e.addMonitor = function(t, e) {
_i_("4ab:92"), s();
var i = Math.random();
return "string" == typeof t.jquery && (t = t[0]), setTimeout(function() {
_i_("4ab:429"), n[i] = {
element:t,
callback:e
}, _r_();
}, 4), _r_(i);
}, e.removeMonitor = o, e.forceClickOut = _, _r_();
}), B.define("keycodes", [], function() {
"use strict";
_i_("4ab:3");
var t = {
backspace:8,
tab:9,
enter:13,
shift:16,
control:17,
alt:18,
escape:27,
space:32,
pageUp:33,
pageDown:34,
end:35,
home:36,
leftArrow:37,
upArrow:38,
rightArrow:39,
downArrow:40,
"delete":46,
navigation:[ 9 ].concat(i(33, 40)),
deletion:[ 8, 46 ],
arrow:i(37, 40),
number:i(48, 57).concat(i(96, 105)),
alphabetic:i(65, 90),
modifier:i(16, 18)
};
t = n(t);
function e(t) {
return _i_("4ab:48"), _r_(t.slice(0, 1).toUpperCase() + t.slice(1));
}
function i(t, e) {
_i_("4ab:49");
for (var i = [], n = 0; e - t >= n; n++) i.push(t + n);
return _r_(i);
}
function n(t) {
_i_("4ab:50");
var e = 65;
return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(t, i) {
return _i_("4ab:129"), t[i] = e++, _r_(t);
}, t));
}
function a(e, i) {
if (_i_("4ab:51"), Array.isArray(t[e]) && -1 !== t[e].indexOf(i)) return _r_(!0);
if (t[e] === i) return _r_(!0);
return _r_(!1);
}
function s(t, e) {
return _i_("4ab:52"), _r_(a(e, t));
}
function r(e) {
_i_("4ab:53");
var i = [];
return Object.keys(t).forEach(function(t) {
_i_("4ab:130"), a(t, e) && i.push(t), _r_();
}), _r_(i);
}
var o = {
getTypes:r,
isKeycodeType:s
};
return Object.keys(t).forEach(function(t) {
_i_("4ab:93"), o["is" + e(t)] = function(e) {
return _i_("4ab:430"), _r_(s(e, t));
}, _r_();
}), _r_(o);
}), B.define("read-data-options", function(t, e, i) {
_i_("4ab:4"), i.exports = function(t, e) {
_i_("4ab:94");
var i = {};
return t.jquery && (t = t[0]), Object.keys(e).forEach(function(n) {
_i_("4ab:431");
var a = e[n], s = "data-" + n, r = null;
if ("function" == typeof a && (a = {
type:a
}), "string" == typeof a.name && (s = "data-" + a.name), !t.attributes[s]) {
if (a.hasOwnProperty("defaultValue")) i[n] = a.defaultValue; else if (a.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + s + " attribute");
return _r_();
}
var r = t.getAttribute(s);
if (a.type === Boolean) r = !/^0|false|no|off$/.test(r); else if (a.type === String) r = r || a.defaultValue; else {
if (a.type !== Number) throw new Error("data-options: Invalid option type for " + n);
r = parseFloat(r, 10), isNaN(r) && (r = a.defaultValue);
}
i[n] = r, _r_();
}), _r_(i);
}, _r_();
}), B.define("calendar-base", function(t, e, i) {
_i_("4ab:5");
function n(t) {
_i_("4ab:54"), t = t || {}, this.startDate = t.startDate, this.endDate = t.endDate, this.siblingMonths = t.siblingMonths, this.weekNumbers = t.weekNumbers, this.weekStart = t.weekStart, void 0 === this.weekStart && (this.weekStart = 0), _r_();
}
n.prototype.getCalendar = function(t, e) {
_i_("4ab:95");
var i = new Date(Date.UTC(t, e, 1, 0, 0, 0, 0));
t = i.getUTCFullYear(), e = i.getUTCMonth();
for (var a, s, r, o, _, l = [], h = i.getUTCDay(), d = -((7 - this.weekStart + h) % 7), c = n.daysInMonth(t, e), u = (c - d) % 7, p = n.daysInMonth(t, e - 1), f = d, b = c - f + (0 != u ? 7 - u :0) + d, m = null; b > f; ) s = f + 1, a = ((1 > f ? 7 + f :f) + h) % 7, 1 > s || s > c ? this.siblingMonths ? (1 > s ? (o = e - 1, _ = t, 0 > o && (o = 11, _--), s = p + s) :s > c && (o = e + 1, _ = t, o > 11 && (o = 0, _++), s = f - c + 1), r = {
day:s,
weekDay:a,
month:o,
year:_,
siblingMonth:!0
}) :r = !1 :r = {
day:s,
weekDay:a,
month:e,
year:t
}, r && this.weekNumbers && (null === m ? m = n.calculateWeekNumber(r) :1 == a && 52 == m ? m = 1 :1 == a && m++, r.weekNumber = m), r && this.startDate && (r.selected = this.isDateSelected(r)), l.push(r), f++;
return _r_(l);
}, n.prototype.isDateSelected = function(t) {
if (_i_("4ab:96"), t.year == this.startDate.year && t.month == this.startDate.month && t.day == this.startDate.day) return _r_(!0);
if (this.endDate) {
if (t.year == this.startDate.year && t.month == this.startDate.month && t.day < this.startDate.day) return _r_(!1);
if (t.year == this.endDate.year && t.month == this.endDate.month && t.day > this.endDate.day) return _r_(!1);
if (t.year == this.startDate.year && t.month < this.startDate.month) return _r_(!1);
if (t.year == this.endDate.year && t.month > this.endDate.month) return _r_(!1);
if (t.year < this.startDate.year) return _r_(!1);
if (t.year > this.endDate.year) return _r_(!1);
return _r_(!0);
}
return _r_(!1);
}, n.prototype.setStartDate = function(t) {
_i_("4ab:97"), this.startDate = t, _r_();
}, n.prototype.setEndDate = function(t) {
_i_("4ab:98"), this.endDate = t, _r_();
}, n.prototype.setDate = n.prototype.setStartDate, n.diff = function(t, e) {
return _i_("4ab:99"), t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), _r_(Math.ceil((t.getTime() - e.getTime()) / 864e5));
}, n.interval = function(t, e) {
return _i_("4ab:100"), _r_(Math.abs(n.diff(t, e)) + 1);
}, n.compare = function(t, e) {
if (_i_("4ab:101"), "object" != typeof t || "object" != typeof e || null === t || null === e) throw new TypeError("dates must be objects");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
}, n.daysInMonth = function(t, e) {
return _i_("4ab:102"), _r_(new Date(t, e + 1, 0).getDate());
}, n.isLeapYear = function(t) {
return _i_("4ab:103"), _r_(t % 4 == 0 && t % 100 != 0 || t % 400 == 0);
}, n.calculateWeekNumber = function(t) {
_i_("4ab:104");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), i = new Date(e.valueOf()), n = (e.getUTCDay() + 6) % 7;
i.setUTCDate(i.getUTCDate() - n + 3);
var a = i.valueOf();
return i.setUTCMonth(0, 1), 4 != i.getUTCDay() && i.setUTCMonth(0, 1 + (4 - i.getUTCDay() + 7) % 7), _r_(1 + Math.ceil((a - i) / 6048e5));
}, i.exports = {
Calendar:n
}, _r_();
}), B.define("morphdom", function(t, e, i) {
_i_("4ab:6"), function(t) {
if (_i_("4ab:106"), "object" == typeof e && "undefined" != typeof i) i.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = t();
}
_r_();
}(function() {
_i_("4ab:105");
var t, e;
t = {
exports:e = {}
};
var i, n, a = "undefined" != typeof document ? document.body || document.createElement("div") :{}, s = "http://www.w3.org/1999/xhtml", r = 1, o = 3, _ = 8;
n = a.hasAttributeNS ? function(t, e, i) {
return _i_("4ab:448"), _r_(t.hasAttributeNS(e, i));
} :a.hasAttribute ? function(t, e, i) {
return _i_("4ab:473"), _r_(t.hasAttribute(i));
} :function(t, e, i) {
return _i_("4ab:474"), _r_(!!t.getAttributeNode(i));
};
function l(t) {
_i_("4ab:131");
for (var e in t) if (t.hasOwnProperty(e)) return _r_(!1);
return _r_(!0);
}
function h(t) {
_i_("4ab:132"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var e;
return i && i.createContextualFragment ? e = i.createContextualFragment(t) :(e = document.createElement("body"), e.innerHTML = t), _r_(e.childNodes[0]);
}
var d = {
OPTION:function(t, e) {
_i_("4ab:449"), t.selected = e.selected, t.selected ? t.setAttribute("selected", "") :t.removeAttribute("selected", ""), _r_();
},
INPUT:function(t, e) {
_i_("4ab:450"), t.checked = e.checked, t.checked ? t.setAttribute("checked", "") :t.removeAttribute("checked"), t.value !== e.value && (t.value = e.value), n(e, null, "value") || t.removeAttribute("value"), t.disabled = e.disabled, t.disabled ? t.setAttribute("disabled", "") :t.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(t, e) {
_i_("4ab:451");
var i = e.value;
t.value !== i && (t.value = i), t.firstChild && t.firstChild.nodeValue !== i && (t.firstChild.nodeValue = i), _r_();
}
};
function c() {}
var u = function(t, e) {
return _i_("4ab:432"), _r_(t.nodeName === e.nodeName && t.namespaceURI === e.namespaceURI);
};
function p(t, e) {
return _i_("4ab:134"), _r_(e && e !== s ? document.createElementNS(e, t) :document.createElement(t));
}
function f(t, e) {
_i_("4ab:135");
var i, a, s, r, o, _, l = e.attributes;
for (i = l.length - 1; i >= 0; i--) a = l[i], s = a.name, o = a.value, r = a.namespaceURI, r ? (s = a.localName || s, _ = t.getAttributeNS(r, s)) :_ = t.getAttribute(s), _ !== o && (r ? t.setAttributeNS(r, s, o) :t.setAttribute(s, o));
for (l = t.attributes, i = l.length - 1; i >= 0; i--) a = l[i], a.specified !== !1 && (s = a.name, r = a.namespaceURI, n(e, r, r ? s = a.localName || s :s) || t.removeAttributeNode(a));
_r_();
}
function b(t, e) {
_i_("4ab:136");
for (var i = t.firstChild; i; ) {
var n = i.nextSibling;
e.appendChild(i), i = n;
}
return _r_(e);
}
function m(t) {
return _i_("4ab:137"), _r_(t.id);
}
function g(t, e, i) {
if (_i_("4ab:138"), i || (i = {}), "string" == typeof e) if ("#document" === t.nodeName || "HTML" === t.nodeName) {
var n = e;
e = document.createElement("html"), e.innerHTML = n;
} else e = h(e);
var a = {}, s = {}, g = i.getNodeKey || m, v = i.onBeforeNodeAdded || c, M = i.onNodeAdded || c, y = i.onBeforeElUpdated || i.onBeforeMorphEl || c, B = i.onElUpdated || c, C = i.onBeforeNodeDiscarded || c, k = i.onNodeDiscarded || c, w = i.onBeforeElChildrenUpdated || i.onBeforeMorphElChildren || c, x = i.childrenOnly === !0, D = [];
function S(t, e) {
_i_("4ab:433");
var i = g(t);
if (i ? a[i] = t :e || k(t), t.nodeType === r) for (var n = t.firstChild; n; ) S(n, e || i), n = n.nextSibling;
_r_();
}
function $(t) {
if (_i_("4ab:434"), t.nodeType === r) for (var e = t.firstChild; e; ) g(e) || (k(e), $(e)), e = e.nextSibling;
_r_();
}
function E(t, e, i) {
if (_i_("4ab:435"), C(t) === !1) return _r_();
e.removeChild(t), i ? g(t) || (k(t), $(t)) :S(t), _r_();
}
function T(t, e, i, n) {
_i_("4ab:436");
var l = g(e);
if (l && delete a[l], !n) {
if (y(t, e) === !1) return _r_();
if (f(t, e), B(t), w(t, e) === !1) return _r_();
}
if ("TEXTAREA" !== t.nodeName) {
var h, c, p, b, m, C = e.firstChild, k = t.firstChild;
t:for (;C; ) {
for (p = C.nextSibling, h = g(C); k; ) {
var x = g(k);
if (c = k.nextSibling, !i && x && (m = s[x])) {
m.parentNode.replaceChild(k, m), T(k, m, i), k = c;
continue;
}
var S = k.nodeType;
if (S === C.nodeType) {
var $ = !1;
if (S === r ? (u(k, C) && (x || h ? h === x && ($ = !0) :$ = !0), $ && T(k, C, i)) :(S === o || S == _) && ($ = !0, k.nodeValue = C.nodeValue), $) {
C = p, k = c;
continue t;
}
}
E(k, t, i), k = c;
}
h && ((b = a[h]) ? (T(b, C, !0), C = b) :s[h] = C), v(C) !== !1 && (t.appendChild(C), M(C)), C.nodeType === r && (h || C.firstChild) && D.push(C), C = p, k = c;
}
for (;k; ) c = k.nextSibling, E(k, t, i), k = c;
}
var N = d[t.nodeName];
N && N(t, e), _r_();
}
var N = t, J = N.nodeType, F = e.nodeType;
if (!x) if (J === r) F === r ? u(t, e) || (k(t), N = b(t, p(e.nodeName, e.namespaceURI))) :N = e; else if (J === o || J === _) {
if (F === J) return N.nodeValue = e.nodeValue, _r_(N);
N = e;
}
if (N === e) k(t); else {
T(N, e, !1, x);
var I = function(t) {
_i_("4ab:490");
for (var e = t.firstChild; e; ) {
var i = e.nextSibling, n = g(e);
if (n) {
var s = a[n];
if (s && u(e, s)) {
if (e.parentNode.replaceChild(s, e), T(s, e, !0), e = i, l(a)) return _r_(!1);
continue;
}
}
e.nodeType === r && I(e), e = i;
}
_r_();
};
if (!l(a)) t:for (;D.length; ) {
var O = D;
D = [];
for (var P = 0; P < O.length; P++) if (I(O[P]) === !1) break t;
}
for (var j in a) if (a.hasOwnProperty(j)) {
var A = a[j];
k(A), $(A);
}
}
return !x && N !== t && t.parentNode && t.parentNode.replaceChild(N, t), _r_(N);
}
return t.exports = g, _r_(t.exports);
}), _r_();
}), B.define("search/modules/flags", function(t, e, i) {
_i_("4ab:7");
function n(t) {
_i_("4ab:55");
var e = {};
if ("string" != typeof t) throw new TypeError("First argument must be a string");
if (t = t.trim(), "" === t) return _r_(e);
return t.split(/\s+/).forEach(function(t) {
_i_("4ab:139");
var i = t, n = !0, s = t.indexOf(":");
-1 !== s && (i = t.substr(0, s), n = t.substr(s + 1), n || (n = 0), a(n) && (n = parseInt(n, 10))), e[i] = n, _r_();
}), _r_(e);
}
function a(t) {
return _i_("4ab:56"), _r_(!isNaN(parseFloat(t)) && isFinite(t));
}
i.exports = {
parse:n
}, _r_();
}), B.define("search/modules/search-date", function(t, e, i) {
_i_("4ab:8");
var n = t("calendar-base").Calendar;
function a(t) {
_i_("4ab:57"), this.year = null, this.month = null, this.day = null, this.complete = !1, "number" == typeof t.year && (this.year = t.year), "number" == typeof t.month && (this.month = t.month), "number" == typeof t.day && (this.day = t.day), null !== this.month && (this.month < 0 ? this.month = 0 :this.month > 11 && (this.month = 11)), null !== this.day && (this.day < 0 ? this.day = 0 :this.day > s(this.year, this.month) && (this.day = s(this.year, this.month))), this.complete = null !== this.year && null !== this.month && null !== this.day, _r_();
}
a.prototype = {
toString:function() {
if (_i_("4ab:140"), !this.complete) return _r_("");
var t = this.month + 1;
return _r_(this.year + "-" + (10 > t ? "0" :"") + t + "-" + (this.day < 10 ? "0" :"") + this.day);
},
toNative:function() {
if (_i_("4ab:141"), !this.complete) return _r_(new Date(NaN));
return _r_(new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0)));
},
valueOf:function() {
return _i_("4ab:142"), _r_(this.toNative().valueOf());
}
}, a.create = function(t) {
if (_i_("4ab:107"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
return _r_(new a(t));
}, a.createFromString = function(t) {
if (_i_("4ab:108"), "string" != typeof t) throw new TypeError("dateString must be a string");
var e = t.split(/-/g), i = {
year:parseInt(e[0], 10),
month:parseInt(e[1], 10) - 1,
day:parseInt(e[2], 10)
};
return _r_(a.create(i));
}, a.createFlexible = function(t) {
if (_i_("4ab:109"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
if ("number" != typeof t.year || "number" != typeof t.month || "number" != typeof t.day) throw new TypeError("invalid date");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0));
return t = {
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}, _r_(a.create(t));
}, a.isStrictlyValid = function(t) {
_i_("4ab:110");
var e = a.create(t);
return _r_(t.year === e.year && t.month === e.month && t.day === e.day);
}, a.compare = function(t, e) {
if (_i_("4ab:111"), !(t instanceof a && e instanceof a)) throw new TypeError("dates must be an instance of SearchDate");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
};
function s(t, e) {
return _i_("4ab:58"), _r_("number" == typeof t && "number" == typeof e ? n.daysInMonth(t, e) :3 == e || 5 == e || 8 == e || 10 == e ? 30 :1 == e ? 29 :31);
}
i.exports = {
SearchDate:a
}, _r_();
}), B.define("component/autocomplete-core", function(t, e, i) {
_i_("4ab:9");
var n = t("jquery"), a = t("component"), s = t("read-data-options");
i.exports = a.extend({
init:function() {
_i_("4ab:246"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = t("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
acFocus:{
name:"ac-focus",
type:Boolean
},
openFocus:{
name:"open-focus",
type:Boolean
},
highlightFirst:{
name:"highlight-first",
type:Boolean
}
}), this.options = s(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_();
},
addInputEventListeners:function() {
_i_("4ab:247");
var t = this.$input.component("keyboard");
t.on("keydown:Escape", this.inputEscape.bind(this)), t.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), t.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), t.on("keydown:Enter", this.inputEnter.bind(this)), t.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_();
},
addListEventListeners:function() {
_i_("4ab:248"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_();
},
addItemsEventListeners:function() {
_i_("4ab:249"), this.$items.click(this.listItemClick.bind(this)), _r_();
},
addClickOutEventListener:function() {
_i_("4ab:250"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_();
},
removeClickOutEventListener:function() {
_i_("4ab:251"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_();
},
calculateListHeight:function() {
_i_("4ab:252"), this.listHeight = this.$list.outerHeight(), _r_();
},
inputClick:function(t) {},
inputFocus:function(t) {
_i_("4ab:254"), this.options.openFocus && (!this.items.length && this.options.acFocus ? this.autocomplete() :(this.listShow(), this.autocomplete({
fromFocus:!0
}))), _r_();
},
inputBlur:function(t) {
_i_("4ab:255"), setTimeout(this.inputBlurSync.bind(this), 4), _r_();
},
inputBlurSync:function() {
_i_("4ab:256"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
inputKeyDown:function(t) {
_i_("4ab:257");
var e = t.ctrlKey || t.metaKey || t.shiftKey || t.altKey, i = 8 == t.which || 46 == t.which;
this.isDeletion = i, this.taintedKeyDown = e, _r_();
},
inputInput:function(t) {
_i_("4ab:258"), this.autocomplete(), _r_();
},
inputKeyUp:function(t) {
_i_("4ab:259");
var e = this.taintedKeyDown || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey || t.which >= 16 && t.which <= 18 || 91 == t.which, i = 32 == t.which || t.which >= 48, n = t.which >= 37 && t.which <= 40;
e || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_();
},
inputEscape:function(t) {
_i_("4ab:260"), this.listVisible && (t.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_();
},
inputArrowUp:function(t) {
_i_("4ab:261"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() :this.listShow(), _r_();
},
inputArrowDown:function(t) {
_i_("4ab:262"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() :this.listShow(), _r_();
},
inputEnter:function(t) {
_i_("4ab:263"), this.listVisible && -1 != this.highlightedIndex && (t.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_();
},
inputTab:function(t) {
_i_("4ab:264"), this.inputEnter.apply(this, arguments), _r_();
},
listItemClick:function(t) {
_i_("4ab:265");
var e = n(t.currentTarget);
this.choose(e.data("i")), _r_();
},
listMouseDown:function(t) {
_i_("4ab:266"), this.preventBlurClose = !0, _r_();
},
listMouseUp:function(t) {
_i_("4ab:267"), this.preventBlurClose = !1, _r_();
},
clickOut:function() {
_i_("4ab:268"), this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
setValue:function(t) {
_i_("4ab:269"), this.input.value = t, _r_();
},
listShow:function() {
_i_("4ab:270"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
_i_("4ab:527"), this.$list[0].scrollTop = 0, _r_();
}.bind(this), 10)), _r_();
},
listHide:function() {
_i_("4ab:271"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_();
},
highlightPrevious:function() {
_i_("4ab:272");
var t = this.highlightedIndex;
do -1 == t ? t = this.items.length - 1 :t--; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightNext:function() {
_i_("4ab:273");
var t = this.highlightedIndex;
do t == this.items.length - 1 ? t = -1 :t++; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightFromNavigation:function(t, e) {
if (_i_("4ab:274"), (-1 == this.highlightedIndex || e) && (this.valueBuffer = this.input.value), -1 == t) this.highlightReset({
preserveFocus:!0
}); else if (this.supportsInputEvent) if (this.valueBuffer && 0 == this.items[t].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
var i = this.valueBuffer.length, n = this.items[t].value.length, a = this.valueBuffer + this.items[t].value.substring(i);
if (this.input.value != a && this.setValue(a), this.input.setSelectionRange) this.input.setSelectionRange(i, n); else if (this.input.createTextRange) {
var s = this.input.createTextRange();
s.collapse(!0), s.moveStart("character", i), s.moveEnd("character", n), s.select();
} else void 0 !== this.input.selectionStart && (this.input.selectionStart = i, this.input.selectionEnd = n);
} else this.setValue(this.items[t].value), this.fixIEFocusLoss();
this.highlight(t), _r_();
},
highlightFromAutocomplete:function() {
_i_("4ab:275");
var t = this.input.value, e = this.getListFirstIndex();
-1 !== e && this.options.highlightFirst && !this.isDeletion && t && 0 === this.items[e].valueLowerCase.indexOf(t.toLowerCase()) ? this.highlightFromNavigation(e, !0) :this.highlight(-1), _r_();
},
highlight:function(t) {
_i_("4ab:276"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != t && this.$items.eq(t).addClass("-highlighted"), this.highlightedIndex = t, this.highlightScroll(), _r_();
},
highlightReset:function(t) {
_i_("4ab:277"), t = t || {}, null === this.valueBuffer || t.preserveInputValue || (this.setValue(this.valueBuffer), t.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_();
},
highlightScroll:function() {
_i_("4ab:278");
var t = !1, e = this.$list[0].scrollTop;
if (-1 != this.highlightedIndex) {
var i = this.$items.eq(this.highlightedIndex), n = (1 == i.length && i.position().top) + e, a = i.outerHeight();
n + a > this.listHeight + e ? t = n + a - this.listHeight :e > n && (t = n);
} else t = 0;
t !== !1 && t != e && (this.$list[0].scrollTop = t), _r_();
},
getListLength:function() {
return _i_("4ab:279"), _r_(this.items.length);
},
getListFirstIndex:function() {
return _i_("4ab:280"), _r_(0 === this.items.length ? -1 :0);
},
autocomplete:function() {
_i_("4ab:281"), this.postAutocomplete(), _r_();
},
postAutocomplete:function() {
_i_("4ab:282"), 0 === this.getListLength() ? this.listHide() :(this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete()), _r_();
},
choose:function(t) {
_i_("4ab:283"), this.selectedIndex = t, this.selectedValue = this.items[t].value, this.setValue(this.selectedValue), this.reset(), _r_();
},
reset:function(t) {
_i_("4ab:284"), t = t || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), t.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_();
},
resetFlags:function() {
_i_("4ab:285"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_();
},
fixIEFocusLoss:function() {
if (_i_("4ab:286"), this.input.createTextRange) {
var t = this.input.createTextRange();
t.moveStart("character", this.input.value.length), t.collapse(), t.select();
}
_r_();
}
}), _r_();
}), B.define("component/core/input-placeholder", function(t, e, i) {
"use strict";
_i_("4ab:10");
var n = t("component"), a = t("read-data-options");
return _r_(n.extend({
init:function() {
if (_i_("4ab:143"), this.browserSupported()) return _r_();
this.options = a(this.$el, {
placeholderClass:{
name:"placeholder-class",
type:String
},
placeholderColor:{
name:"placeholder-color",
type:String,
defaultValue:"#7C90A6"
}
});
var t = "input, textarea", e = this.$el.find(t);
this.$el.is(t) && (e = e.add(this.$el)), e.filter(function(t, e) {
return _i_("4ab:492"), _r_(!!$(e).attr("placeholder"));
}).each(function(t, e) {
_i_("4ab:491"), this.setupPlaceholder($(e)), _r_();
}.bind(this)), _r_();
},
browserSupported:function() {
_i_("4ab:144");
var t = $('input[type="text"]')[0] || $('<input type="text">')[0];
return _r_(!!("placeholder" in t));
},
setupPlaceholder:function(t) {
_i_("4ab:145");
var e = $("<label />").text(t.attr("placeholder")).css({
width:t.width() + "px",
height:t.height() + "px",
paddingTop:t.css("padding-top"),
paddingLeft:t.css("padding-left"),
paddingRight:t.css("padding-right"),
fontFamily:t.css("font-family"),
fontSize:t.css("font-size"),
color:this.options.placeholderColor,
overflow:"hidden",
cursor:"text",
position:"absolute"
});
this.options.placeholderClass && e.addClass(this.options.placeholderClass), e.insertBefore(t), e.click(function() {
_i_("4ab:452"), t.focus(), _r_();
}), t.focus(function() {
_i_("4ab:493"), e.hide(), _r_();
}).blur(function() {
_i_("4ab:453"), e[t.val().length ? "hide" :"show"](), _r_();
}), t.get(0) === document.activeElement ? t.triggerHandler("focus") :t.triggerHandler("blur"), _r_();
}
}));
}), B.define("component/keyboard", function(t, e, i) {
_i_("4ab:11");
var n = t("component"), a = t("event-emitter"), s = {
8:"Backspace",
46:"Delete",
9:"Tab",
13:"Enter",
32:"Space",
27:"Escape",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"ArrowLeft",
38:"ArrowUp",
39:"ArrowRight",
40:"ArrowDown",
48:"0",
49:"1",
50:"2",
51:"3",
52:"4",
53:"5",
54:"6",
55:"7",
56:"8",
57:"9",
65:"A",
66:"B",
67:"C",
68:"D",
69:"E",
70:"F",
71:"G",
72:"H",
73:"I",
74:"J",
75:"K",
76:"L",
77:"M",
78:"N",
79:"O",
80:"P",
81:"Q",
82:"R",
83:"S",
84:"T",
85:"U",
86:"V",
87:"W",
88:"X",
89:"Y",
90:"Z"
};
function r(t, e) {
return _i_("4ab:59"), _r_(function(i) {
_i_("4ab:120");
var n = "";
i.which && void 0 !== s[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + s[i.which], t.trigger(e + n, {
keys:e + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("4ab:287"), a.extend(this), this.$el.bind("keydown", r(this, "keydown")).bind("keyup", r(this, "keyup")), _r_();
}
}), _r_();
}), B.define("component/tooltip-loc", function(t, e, i) {
"use strict";
_i_("4ab:12");
var n = t("component"), a = t("jquery");
i.exports = n.extend({
DEFAULTS:{
template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
placement:"top",
alignment:"center",
trigger:"hover focus",
animation:"true"
},
init:function() {
_i_("4ab:288"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("4ab:289"), this.options = a.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = a(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("4ab:290");
var t = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (t = t + " " + this.options.extraClass), "true" === this.options.animation && (t += " tooltip-animate"), this.$tip = a(this.options.template), this.$tip.addClass(t), this._attachContent(), this.$tip.appendTo(a("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("4ab:291");
var t = this.$tip.find(".tooltip-inner");
this.options.target ? t.append(this.options.target.clone()) :(this.options.target = [], t.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("4ab:292"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("4ab:293"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(t) {
if (_i_("4ab:294"), !B.env.rtl) return _r_(t);
if ("left" === t) return _r_("right");
if ("right" === t) return _r_("left");
return _r_(t);
},
_placeTooltip:function() {
_i_("4ab:295");
var t = this._accountForRTL(this.position), e = this.dimension;
this._accountForRTL(this.options.placement) === t ? this[t] = this.elOffset[t] - this.$tip[e]() :this[t] = this.elOffset[t] + this.$el[e](), _r_();
},
_alignTooltip:function() {
_i_("4ab:296");
var t, e;
switch ("left" === this.position ? (t = "top", e = "outerHeight") :(t = "left", e = "outerWidth"), this._accountForRTL(this.options.alignment)) {
case t:
this[t] = this.elOffset[t];
break;

case "center":
this[t] = this.$el[e]() / 2 + this.elOffset[t] - this.$tip[e]() / 2;
break;

default:
this[t] = this.elOffset[t] + this.$el[e]() - this.$tip[e]();
}
_r_();
},
_attachEvents:function() {
if (_i_("4ab:297"), this.options.trigger.match(/manual/)) return _r_();
var t, e, i, n = this.options.trigger.split(" "), s = n.length, r = this.$el.add(this.$tip);
for (this.options.intangible && (r = this.$el), s; s--; ) t = n[s], "click" === t ? this.$el.on("click", $proxy(this.toggle, this)) :(e = "hover" == t ? "mouseenter" :"focusin", i = "hover" == t ? "mouseleave" :"focusout", r.on(e, a.proxy(this.show, this)), r.on(i, a.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(t) {
_i_("4ab:298");
var e = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("4ab:475"), e.trigger(t, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("4ab:299"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("4ab:300"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("4ab:301"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.define("component/search/destination/input-placeholder", function(t, e, i) {
_i_("4ab:13");
var n = B.require("component/core/input-placeholder"), a = t("search/searchbox/model");
B.tools.dom.isBlockVisibleInViewport;
return _r_(n.extend({
init:function() {
_i_("4ab:146"), this.model = a.getInstance(this.$el.data("sb-id")), n.prototype.init.apply(this, arguments), _r_();
}
}));
}), B.define("component/search/destination/input", function(t, e, i) {
"use strict";
_i_("4ab:14"), booking.jstmpl("search_destination_autocomplete_results", function() {
_i_("4ab:121");
var t = [ "\n		", "\n\n	", "\n	", "\n\n		\n\n		", '\n			<li\n				class="', "c-autocomplete__item sb-autocomplete__item ", "sb-autocomplete__item--cjk ", '"\n				>\n				<div class="sb-autocomplete__section-title-wrapper">\n					<div class="sb-autocomplete__section-title">\n						', '\n							<i class="bicon bicon-', '"></i>\n						', "\n						<span>", "</span>\n					</div>\n				</div>\n			</li>\n		", '\n		<li\n			class="', "sb-autocomplete__item--airport ", "sb-autocomplete__item--city ", "sb-autocomplete__item--country ", "sb-autocomplete__item--district ", "sb-autocomplete__item--hotel ", "sb-autocomplete__item--landmark ", "sb-autocomplete__item--region ", "sb-autocomplete__item--theme ", "sb-autocomplete__item__item--elipsis ", "sb-autocomplete__item--with-title ", "sb-autocomplete__item--theme-expanded ", "first_theme ", "1", "smaller_theme_wrapper ", '"\n			data-list-item\n			data-i="', '"\n			data-value="', '"\n			', '\n				data-label="', "\n			>", "", '<div class="', "sb_passion_highlight_wrapper smaller_theme ", '">\n					<p class="sb_passion_highlight_inner">\n						<i class="', "sb_passion_icon dficon-", " ", '">\n							</i>\n						<strong class="', "sb_passion_highlight_heading ", '">', "</strong>\n					</p>\n				</div>", '<span class="sb-autocomplete__item__highlight">', "</span>", '<span class="sb-autocomplete__item__extra">', '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "/private/search_top_50_badge/name", "</li>\n	", '\n		<li class="sb-autocomplete__google"></li>\n	', "\n" ], e = [ "total_index", "results", "lc", "section_title_icon", "section_title", "dest_type", "is_first_theme", "index", "value", "label", "dest_id", "label_blocks", "highlighted", "text", "label_highlighted", "additional_label", "flags", "is_powered_by_google" ];
return _r_(function(i) {
_i_("4ab:437");
var n = "", a = this.fn;
function s(n) {
if (_i_("4ab:454"), a.MD(e[1])) {
n += t[1], a.MN("index", 0), n += t[2], a.MN(e[0], a.MI(a.array_length(a.MB(e[1]))) - a.MI(1)), n += t[1];
var s = a.MC(e[1]) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) {
if (i[0] = s[r - 1], n += t[3], a.MJ(a.MB(e[4])) && (n += t[4], n += t[5], a.MJ(/zh|xt|ja|ko/.test(a.MB(e[2]))) && (n += t[6]), n += t[7], a.MD(e[3]) && (n += [ t[8], a.MC(e[3]), t[9] ].join("")), n += [ t[10], a.MC(e[4]), t[11] ].join("")), n += t[12], n += t[5], a.MJ(/zh|xt|ja|ko/.test(a.MB(e[2]))) && (n += t[6]), n += a.MJ(a.MB(e[5]) + "" == "airport") ? t[13] :a.MJ(a.MB(e[5]) + "" == "city") ? t[14] :a.MJ(a.MB(e[5]) + "" == "country") ? t[15] :a.MJ(a.MB(e[5]) + "" == "district") ? t[16] :a.MJ(a.MB(e[5]) + "" == "hotel") ? t[17] :a.MJ(a.MB(e[5]) + "" == "landmark") ? t[18] :a.MJ(a.MB(e[5]) + "" == "region") ? t[19] :a.MJ(a.MB(e[5]) + "" == "theme") ? t[20] :t[15], n += t[21], a.MD(e[4]) && (n += t[22]), a.MJ(a.MB(e[5]) + "" == "theme") && (n += t[23], a.MD(e[6]) || (n += t[24], a.MN(e[6], t[25])), n += t[26]), n += [ t[27], a.MC(e[7]), t[28], a.F.entities(a.MC(e[8])), t[29] ].join(""), a.MD(e[9]) && (n += [ t[30], a.F.html(a.MC(e[9])), t[29] ].join("")), n += t[31], n += t[32], a.MJ(a.MB(e[5]) + "" == "theme")) n += t[33], n += t[34], n += t[35], n += [ t[36], a.F.entities(a.MC(e[10])), t[37] ].join(""), n += t[38], n += t[39], n += [ t[40], a.F.entities(a.MC(e[9])), t[41] ].join(""); else {
if (n += t[32], a.MD(e[11])) {
n += t[32];
var _ = r, l = s, h = o, s = a.MC(e[11]) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) i[0] = s[r - 1], n += t[32], a.MD(e[12]) && (n += t[42]), n += [ t[32], a.F.entities(a.MC(e[13])), t[32] ].join(""), a.MD(e[12]) && (n += t[43]), n += t[32];
i.shift(), r = _, s = l, o = h, n += t[32];
} else a.MD(e[14]) ? n += [ t[32], a.MC(e[14]), t[32] ].join("") :a.MD(e[9]) && (n += [ t[32], a.F.entities(a.MC(e[9])), t[32] ].join(""));
n += t[32], a.MD(e[15]) && (n += [ t[44], a.MC(e[15]), t[43] ].join("")), n += t[32], a.MJ(a.MC(e[16]).popular) && (n += [ t[45], a.F.entities(a.ME(t[46], a.MB, a.MN, null)), t[43] ].join("")), n += t[32];
}
n += t[32], a.MN("index", a.MI(a.MB(e[7])) + a.MI(1)), n += t[32], n += t[47];
}
i.shift(), n += t[1], a.MD(e[17]) && (n += t[48]), n += t[49];
}
return n += t[49], _r_(n);
}
return n += t[0], n = s(n), n += t[2], _r_(n);
});
}()), booking.jstmpl("search_destination_autocomplete_loading", function() {
_i_("4ab:122");
var t = [ "\n		", '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n	', '\n		<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n			', '\n				<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n			', "\n		</li>\n	", "\n</ul>\n", "\n	" ], e = [ "fe_sb_autocomplete_loading_items" ];
return _r_(function(i) {
_i_("4ab:438");
var n = "", a = this.fn;
function s(n) {
_i_("4ab:455"), a.MN("fe_sb_autocomplete_loading_items", 5), n += t[1];
var s = a.seq(1, a.MB(e[0])) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) {
i[0] = s[r - 1], n += t[2];
var _ = r, l = s, h = o, s = a.seq(1, 3) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) i[0] = s[r - 1], n += t[3];
i.shift(), r = _, s = l, o = h, n += t[4];
}
return i.shift(), n += t[5], _r_(n);
}
return n += t[0], n = s(n), n += t[6], _r_(n);
});
}());
var n = t("component/autocomplete-core"), a = t("search/searchbox/model"), s = t("search/searchbox/analytics"), r = t("et");
i.exports = n.extend({
init:function() {
_i_("4ab:302"), this.optionsSpec = {
delay:{
name:"delay",
type:Number,
defaultValue:300
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
filterDestType:{
name:"filter-dest-type",
type:String
},
gpf:{
name:"gpf",
type:Boolean
},
gpOnly:{
name:"gp-only",
type:Boolean
},
minLength:{
name:"minlength",
type:Number,
defaultValue:2
},
focusOnLoad:{
name:"focus-on-load",
type:Boolean
},
focusOnKeypress:{
name:"focus-on-keypress",
type:Boolean
},
required:{
name:"required",
type:Boolean
},
flags:{
name:"flags",
type:String,
defaultValue:""
}
}, $.extend(this.optionsSpec, this.extendOptions()), this.$errors = this.$el.find("[data-error-id]"), this.$clear = this.$el.find('[data-clear=""]'), n.prototype.init.apply(this, arguments), this.model = a.getInstance(this.options.modelId), this.model.use("destination"), this.model.updateFlags(this.options.flags), this.inputUntouched = !0, this.model.on("change", this.modelChange.bind(this)), this.model.on("validation", this.modelValidation.bind(this)), this.options.required && this.model.destination.configure({
validate:!0
}), this.options.gpOnly && this.model.destination.configurePredictions({
gpo:1
}), this.options.gpf && this.model.destination.configure({
gpf:1
}), this.options.filterDestType && this.model.destination.configurePredictions({
dest_type:this.options.filterDestType
}), this.options.focusOnLoad && this.focusOnLoad(), this.options.focusOnKeypress && this.focusOnKeypress(), this.$errors.filter(".-visible").length && (this.model.destination.valid = !1), this.templateResults = B.jstmpl("search_destination_autocomplete_results"), this.toggleClear(), this.modelInit(), this.renderLoadingElement(), _r_();
},
addInputEventListeners:function() {
_i_("4ab:303"), n.prototype.addInputEventListeners.apply(this, arguments), this.$clear.length && this.$clear.on("click", this.clearClick.bind(this)), _r_();
},
renderLoadingElement:function() {
_i_("4ab:304"), this.shouldShowLoadingState = !0;
var t = {};
this.$loading = $(B.jstmpl("search_destination_autocomplete_loading").render(t)), this.$loading.find(".js-placeholder-text").each(function() {
_i_("4ab:476"), $(this).width(65 + parseInt(65 * Math.random(), 10)), _r_();
}), this.$loading.insertAfter(this.$list), _r_();
},
showLoading:function() {
_i_("4ab:305"), this.shouldShowLoadingState && (n.prototype.listHide.apply(this), this.$loading.addClass("-visible")), _r_();
},
hideLoading:function() {
_i_("4ab:306"), this.shouldShowLoadingState && this.$loading.removeClass("-visible"), _r_();
},
modelInit:function() {
_i_("4ab:307");
var t = {
ss:this.input.value
};
this.model.destination.init(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:308"), t && t.group && "destination" == t.group) {
var e = this.model.destination.get();
e.ss == this.input.value || this.isDeletion || this.setValue(e.ss), t.onlyCurrentCountry && (this.$input.focus(), this.autocomplete()), this.inputUntouched = !1;
}
_r_();
},
modelValidation:function(t) {
_i_("4ab:309"), t && "destination" == t.group && (this.$errors.filter(".-visible").removeClass("-visible"), this.model.destination.valid || (B.et.stage("HDDPBDDLfOFYBLcVT", 1), 1 == B.et.track("HDDPBDDLfOFYBLcVT") && this.$el.find("#destination__error").addClass("-visible"), this.$errors.filter('[data-error-id="' + this.model.destination.validationError + '"]').addClass("-visible"), s.send("[error] destination: " + this.model.destination.validationError))), _r_();
},
inputClick:function() {
if (_i_("4ab:310"), "" === this.input.value || this.inputUntouched) {
var t = this.model.getFlag("on_click_suggestions_track");
t && r.stage(t, 1), this.model.getFlag("on_click_suggestions") && this.showSuggestions();
}
n.prototype.inputClick.apply(this, arguments), _r_();
},
inputInput:function() {
_i_("4ab:311"), this.model.destination.setSearchString(this.input.value), n.prototype.inputInput.apply(this, arguments), _r_();
},
inputKeyUp:function() {
_i_("4ab:312"), n.prototype.inputKeyUp.apply(this, arguments), _r_();
},
inputFocus:function() {
_i_("4ab:313"), s.send("[interaction] search input focus"), this.input && this.input.value.length && (this.items.length || B.et.stage("TAeKPFfCaDPJRHDWKGdYT", 1), this.options.acFocus && this.model.destination.setSearchString(this.input.value)), n.prototype.inputFocus.apply(this, arguments), _r_();
},
inputBlur:function() {
_i_("4ab:314"), clearTimeout(this.timer), this.model.destination.abortPredictions();
var t = this.model.destination.get().ss_raw;
if (t) {
var e = t.split(/\s+/).length;
s.sendOnce("[interaction] autocomplete tokens typed [" + e + "]");
}
n.prototype.inputBlur.apply(this, arguments), this.suggestionsLocked = !1, _r_();
},
inputEnter:function(t) {
_i_("4ab:315"), s.send("[interaction] search input pressed enter"), n.prototype.inputEnter.apply(this, arguments), _r_();
},
clearClick:function(t) {
_i_("4ab:316"), t.preventDefault(), this.reset({
hard:!0
}), this.input.focus(), _r_();
},
setValue:function(t) {
_i_("4ab:317"), n.prototype.setValue.apply(this, arguments), this.toggleClear(), _r_();
},
toggleClear:function() {
_i_("4ab:318"), this.$clear.length && this.$clear.toggleClass("-visible", "" !== this.input.value), _r_();
},
listShow:function() {
_i_("4ab:319"), this.items.length > 0 && this.input.value.length >= this.options.minLength ? n.prototype.listShow.apply(this, arguments) :this.items.length > 0 && this.model.getFlag("on_click_suggestions") && n.prototype.listShow.apply(this, arguments), _r_();
},
autocomplete:function(t) {
_i_("4ab:320"), t = t || {}, this.highlightReset({
preserveInputValue:!0
}), clearTimeout(this.timer), this.model.destination.abortPredictions(), this.hideLoading(), this.toggleClear(), t.fromFocus || (this.isDeletion ? this.model.destination.reset() :this.postAutocomplete(), this.input.value.length >= this.options.minLength && (this._loading = !0), this.timer = setTimeout(function() {
_i_("4ab:533"), this.input.value.length >= this.options.minLength && (this.model.destination.getPredictions(this.query(), this.render.bind(this)), this.showLoading()), _r_();
}.bind(this), this.options.delay)), _r_();
},
query:function() {
return _i_("4ab:321"), _r_(this.input.value);
},
extendOptions:function() {
return _i_("4ab:322"), _r_({});
},
render:function(t, e) {
_i_("4ab:323"), this.results = [], this.items = [], this.$items = $({}), this.on_click_suggestion = !1, this.hideLoading(), !t && this.model.getFlag("on_click_suggestions_track") && e.on_click_suggestion && (this.on_click_suggestion = !0), this._loading = !1, !t || "service-booking-no-results" != t.toString() && -1 === t.toString().indexOf("ZERO_RESULTS") || s.send("[context] autocomplete zero results search"), !t && Array.isArray(e.results) ? (s.send("[context] autocomplete suggestions [" + e.results.length + "]"), e.is_powered_by_google && s.send("[context] autocomplete google place search"), this.results = e.results, this.items = e.results.map(function(t) {
return _i_("4ab:519"), _r_({
value:t.label,
valueLowerCase:t.label.toLowerCase()
});
}), this.$list.html(this.templateResults.render(e)), this.$items = this.$list.find('[data-list-item=""]')) :t || this.$list.html(this.templateResults.render(e)), this.postAutocomplete(), setTimeout(function() {
_i_("4ab:499"), this.$items.each(function() {
_i_("4ab:536"), this.scrollWidth > this.offsetWidth && this.setAttribute("data-title", this.getAttribute("data-label")), _r_();
}), _r_();
}.bind(this), 500), _r_();
},
choose:function(t) {
_i_("4ab:324"), s.send("[interaction] autocomplete click position [" + t + "]"), s.send("[interaction] autocomplete click [" + this.results[t].dest_type + "]"), clearTimeout(this.timer), this.model.destination.abortPredictions(), this.model.destination.set(this.results[t]), n.prototype.choose.apply(this, arguments), this.on_click_suggestion && this.model.getFlag("on_click_suggestions_track") && B.et.customGoal(this.model.getFlag("on_click_suggestions_track"), 1);
var e = this.results[t];
B.et.goal("autocomplete_option_selected"), "theme" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_theme") :"hotel" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_hotel") :this.results[t].place_id ? B.et.goal("autocomplete_option_selected_google_places") :"query_finder" == this.results[t].result_type || B.et.goal("autocomplete_option_selected_destination"), -1 !== [ "region" ].indexOf(e.dest_type) && this.model.getFlag("track_automap_blackout") ? (B.et.stage("adUAKYTaQJeaILYDTQVDZVC", 1), this.model.destination.setTrackingFields("map_trigger_blackout", [ {
name:"reg_sel",
value:1
} ])) :this.model.destination.setTrackingFields("map_trigger_blackout", []);
var i = [ "landmark", "airport", "district", "region" ];
if (this.model.getFlag("adUAKYTaQJeaILYDTQVDZVC") && (i = [ "landmark", "airport", "district" ]), this.model.getFlag("UBKeJOQUSLUTBQXNQBC") && (i = [ "landmark", "airport", "district", "hotel" ]), -1 !== [ "hotel" ].indexOf(e.dest_type) ? this.model.destination.setTrackingFields("map_autoopen", [ {
name:"map_tk",
value:1
} ]) :this.model.destination.setTrackingFields("map_autoopen", []), -1 !== i.indexOf(e.dest_type)) {
this.locationSelected = !0;
var a = [];
this.model.getFlag("open_location_in_map") && (a.push({
name:"map",
value:1
}), $(".sb-searchbox__map_trigger").removeClass("g-hidden")), this.model.destination.setTrackingFields("map_trigger", a);
} else this.model.getFlag("open_location_in_map") && ($(".sb-searchbox__map_trigger").addClass("g-hidden"), this.model.destination.setTrackingFields("map_trigger", []));
("theme" == this.results[t].dest_type || "theme_dest" == this.results[t].result_type) && this.model.submit(), "query_finder" == this.results[t].result_type && $(".b-travel-purpose").removeClass("b-form__booker-type--align-with-acc-types"), this.showCalendarOnDesinationChange(), _r_();
},
showCalendarOnDesinationChange:function() {
if (_i_("4ab:325"), !this.model.getFlag("calendar_on_destination_change") || this.model.dates.get().checkin) return _r_();
this.showCalendar(), _r_();
},
showCalendar:function() {
_i_("4ab:326"), setTimeout(function() {
_i_("4ab:500"), this.$el.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkin").trigger("show"), _r_();
}.bind(this)), _r_();
},
showSuggestions:function() {
if (_i_("4ab:327"), this.suggestionsLocked) return _r_();
this.model.destination.getSuggestions(this.render.bind(this)), this.suggestionsLocked = !0, _r_();
},
focusOnLoad:function() {
_i_("4ab:328");
var t = $(document);
t.ready(function() {
_i_("4ab:501"), this.input.focus(), _r_();
}.bind(this)), _r_();
},
focusOnKeypress:function() {
_i_("4ab:329");
var t = $(document);
this.$input.on("blur", function() {
_i_("4ab:502"), t.on("keydown.autofocus", this.inputFocusAndScroll.bind(this)), _r_();
}.bind(this)), this.$input.on("focus", function() {
_i_("4ab:503"), t.off("keydown.autofocus", this.inputFocusAndScroll.bind(this)), _r_();
}.bind(this)), _r_();
},
inputFocusAndScroll:function(t) {
_i_("4ab:330");
var e = this.$input.offset().top, i = t.keyCode, n = i > 47 && 58 > i || i > 64 && 91 > i || i > 95 && 112 > i;
n && document.activeElement && !/INPUT|TEXTAREA/.test(document.activeElement.nodeName) && this.$input.is(":visible") && !$(".modal-mask").length && (this.input.focus(), window.scrollY > e && $("html, body").animate({
scrollTop:e - 5
})), _r_();
},
reset:function() {
_i_("4ab:331"), this.selectedValue || this.model.destination.reset(), n.prototype.reset.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("search/destination/model", function(t, e, i) {
"use strict";
_i_("4ab:15");
var n = t("search/destination/service");
function a(t) {
_i_("4ab:60"), this.model = t, this.data = {
ss:""
}, this.valid = !0, this.validationError = "", this.options = {}, this.predicitonParameters = {}, this.searchInstance = null, this.suggestionsCache = {
results:[]
}, _r_();
}
$.extend(a.prototype, {
init:function(t) {
_i_("4ab:147"), this.data = t, this.model.getFlag("on_click_suggestions") && (this.model.use("group"), this.model.on("init", function(t) {
_i_("4ab:520"), "group" === t.group && this.fetchSuggestions(), _r_();
}.bind(this))), this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("4ab:148"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
getOption:function(t) {
return _i_("4ab:149"), _r_(this.options[t]);
},
get:function() {
return _i_("4ab:150"), _r_(this.data);
},
set:function(t) {
if (_i_("4ab:151"), this.searchInstance && this.searchInstance.getResultDetails && !t._details) return this.searchInstance.getResultDetails(t, function(e, i) {
_i_("4ab:521"), i = i || {}, i._details = !0, this.set(i), window.ga && window.ga("send", "event", "ac_google_places", [ i.place_types || "unknown", i.name ].join("|"), this.data.ss_raw, t.position), _r_();
}.bind(this)), _r_();
this.data.ss = t.ss, this.data.dest_id = t.dest_id, this.data.dest_type = t.dest_type, t.nr_hotels && (this.data.nr_hotels = t.nr_hotels), this.data.acc_type_id = t.acc_type_id, t.place_id && t.latitude && t.longitude ? (this.data.place_id = t.place_id, this.data.latitude = t.latitude, this.data.longitude = t.longitude, this.data.place_types = t.place_types) :(this.data.place_id = "", this.data.latitude = "", this.data.longitude = "", this.data.place_types = null), t._fa && this.model.setFormAction(t._fa), "es" == t.cc1, t._ef = t._ef || [], this.data.dest_id && t._ef.push({
name:"dest_id",
value:this.data.dest_id
}), this.data.dest_type && t._ef.push({
name:"dest_type",
value:this.data.dest_type
}), this.data.place_id && t._ef.push({
name:"place_id",
value:this.data.place_id
}), this.data.latitude && t._ef.push({
name:"place_id_lat",
value:this.data.latitude
}), this.data.longitude && t._ef.push({
name:"place_id_lon",
value:this.data.longitude
}), this.data.place_types && Array.isArray(this.data.place_types) && t._ef.push({
name:"place_types",
value:this.data.place_types.join(",")
}), t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"search_selected",
value:"true"
}), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", t._ef), this.emit("change"), _r_();
},
setSearchString:function(t) {
_i_("4ab:152"), this.data.ss = t, this.data.ss_raw = t, this.valid || this.validate(), _r_();
},
reset:function() {
_i_("4ab:153"), this.data.dest_id = null, this.data.dest_type = null, this.data.place_id = null, this.data.latitude = null, this.data.longitude = null, this.model.setFormAction(null), this.model.setFields("destination", []), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", [ {
name:"dest_id",
value:""
}, {
name:"dest_type",
value:""
}, {
name:"search_pageview_id",
value:B.env.pageview_id
}, {
name:"search_selected",
value:"false"
} ]), this.emit("change"), _r_();
},
setTrackingFields:function(t, e) {
_i_("4ab:154"), this.model.setFields(t, e), this.emit("change"), _r_();
},
validate:function() {
_i_("4ab:155");
var t = !0, e = "", i = this.model.getFlag("b_loc_part_of_memorial_day_search_us_exp_flag");
if (null != i && "" !== i) {
var n = document.getElementsByName("ss"), a = "";
n && n.length >= 1 && (a = n[0].value);
var s = -1 != a.toLowerCase().replace(/ /g, "").indexOf("memorialday");
s && "www" === B.env.b_site_type && "en-us" === B.env.b_selected_language && "us" === B.env.ip_country && 1 == B.et.track("YdALOLOLOVZMYCKBXAbbFGUPVZHe") && this.setDefaultParamsForUSCityForMemorailDay();
}
var r = this.model.getFlag("loc_part_of_show_us_city_exp_flag");
if (null != r && "" !== r) {
var n = document.getElementsByName("ss"), a = "";
n && n.length >= 1 && (a = n[0].value), "" !== this.data.ss && "" !== a || "www" !== B.env.b_site_type || "en-us" !== B.env.b_selected_language || "us" !== B.env.ip_country || 1 != B.et.track("YdVWLZYEEFVYRZGbGBRe") || this.setDefaultParamsForUSCity();
}
if (!this.options.validate) return this.valid = t, this.validationError = e, _r_(t);
return "" === this.data.ss && (t = !1, e = "search-string-empty"), this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
setDefaultParamsForUSCityForMemorailDay:function() {
_i_("4ab:156");
var t = document.getElementsByName("loc_memorial_day_ss"), e = "";
t && t.length >= 1 && (e = t[0].value);
var i = document.getElementsByName("loc_memorial_day_dest_id"), n = "";
i && i.length >= 1 && (n = i[0].value);
var a = document.getElementsByName("loc_memorial_day_dest_type"), s = "";
a && a.length >= 1 && (s = a[0].value);
var r = B.env.pageview_id, o = "true";
this.data.ss = e, this.data.ss_raw = e, this.data.dest_id = n, this.data.dest_type = s, this.model.setFields("destinationSelected", [ {
name:"ss",
value:e
}, {
name:"dest_id",
value:n
}, {
name:"dest_type",
value:s
}, {
name:"search_pageview_id",
value:r
}, {
name:"search_selected",
value:o
} ]);
for (var t = document.getElementsByName("ss"), _ = 0; t && _ < t.length; _++) t[_].setAttribute("value", e);
for (var i = document.getElementsByName("dest_id"), _ = 0; i && _ < i.length; _++) i[_].setAttribute("value", n);
for (var a = document.getElementsByName("dest_type"), _ = 0; a && _ < a.length; _++) a[_].setAttribute("value", s);
for (var l = document.getElementsByName("search_pageview_id"), _ = 0; l && _ < l.length; _++) l[_].setAttribute("value", r);
for (var h = document.getElementsByName("search_selected"), _ = 0; h && _ < h.length; _++) h[_].setAttribute("value", o);
_r_();
},
setDefaultParamsForUSCity:function() {
_i_("4ab:157");
var t = document.getElementsByName("loc_ss"), e = "";
t && t.length >= 1 && (e = t[0].value);
var i = document.getElementsByName("loc_dest_id"), n = "";
i && i.length >= 1 && (n = i[0].value);
var a = document.getElementsByName("loc_dest_type"), s = "";
a && a.length >= 1 && (s = a[0].value);
var r = B.env.pageview_id, o = "true";
this.data.ss = e, this.data.ss_raw = e, this.data.dest_id = n, this.data.dest_type = s, this.model.setFields("destinationSelected", [ {
name:"ss",
value:e
}, {
name:"dest_id",
value:n
}, {
name:"dest_type",
value:s
}, {
name:"search_pageview_id",
value:r
}, {
name:"search_selected",
value:o
} ]);
for (var t = document.getElementsByName("ss"), _ = 0; t && _ < t.length; _++) t[_].setAttribute("value", e);
for (var i = document.getElementsByName("dest_id"), _ = 0; i && _ < i.length; _++) i[_].setAttribute("value", n);
for (var a = document.getElementsByName("dest_type"), _ = 0; a && _ < a.length; _++) a[_].setAttribute("value", s);
for (var l = document.getElementsByName("search_pageview_id"), _ = 0; l && _ < l.length; _++) l[_].setAttribute("value", r);
for (var h = document.getElementsByName("search_selected"), _ = 0; h && _ < h.length; _++) h[_].setAttribute("value", o);
_r_();
},
initPredictions:function() {
if (_i_("4ab:158"), this.options.gpf) {
var t = B.require("search/destination/service-atlas");
t.init();
}
_r_();
},
configurePredictions:function(t) {
_i_("4ab:159"), $.extend(this.predicitonParameters, t), _r_();
},
getPredictions:function(t, e) {
_i_("4ab:160");
var i = $.extend({}, B.env.search_autocomplete_params, this.predicitonParameters);
this.searchInstance && this.searchInstance.abort();
function a(t, i) {
_i_("4ab:439"), i && (this.model.setFields("destination", i._ef), this.model.setFields("destinationNotSelected", i._efd)), e.apply(null, arguments), _r_();
}
i.ss = t, i.gpf = this.options.gpf, this.options.onlyCurrentCountry && (i.e_acf_i = B.env.b_country_id, i.e_acf_t = "country"), this.searchInstance = n.search(i, a.bind(this)), this.model.setFields("destinationOriginal", [ {
name:"ss_raw",
value:i.ss
} ]), this.model.setFields("destinationSelected", [ {
name:"search_pageview_id",
value:B.env.pageview_id
} ]), _r_();
},
abortPredictions:function() {
_i_("4ab:161"), this.searchInstance && this.searchInstance.abort(), _r_();
},
getSuggestions:function(t) {
if (_i_("4ab:162"), this.suggestionsCache.results.length) return setTimeout(function() {
_i_("4ab:522"), t(null, this.suggestionsCache), _r_();
}.bind(this), 0), _r_();
this.model.one("destination:suggestions", function() {
_i_("4ab:494"), this.suggestionsCache.results.length && t(null, this.suggestionsCache), _r_();
}.bind(this)), _r_();
},
fetchSuggestions:function() {
if (_i_("4ab:163"), this.suggestionsLoading) return _r_();
var t = function(t, e) {
if (_i_("4ab:456"), !t && e && e.results) {
e.on_click_suggestion = e.results.length > 0;
for (var i = 0; i < e.results.length; i++) !e.results[i].ss && e.results[i].label && (e.results[i].ss = e.results[i].label);
this.suggestionsCache = e;
}
this.suggestionsLoading = !1, this.emit("destination:suggestions"), _r_();
}, e = B.require("search/destination/service-booking");
this.suggestionsInstance = e.getSuggestions(t.bind(this), this.model.group.get()), this.suggestionsLoading = !0, _r_();
},
initOnlyCurrentCountry:function(t) {
_i_("4ab:164"), this.options.onlyCurrentCountry = !!t, _r_();
},
getOnlyCurrentCountry:function() {
return _i_("4ab:165"), _r_(!!this.options.onlyCurrentCountry);
},
setOnlyCurrentCountry:function(t) {
_i_("4ab:166"), this.options.onlyCurrentCountry = !!t, this.emit("change", {
onlyCurrentCountry:!0
}), _r_();
},
emit:function(t, e) {
_i_("4ab:167"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"destination"
})), _r_();
}
}), i.exports = a, _r_();
}), B.define("search/destination/service", function(t, e, i) {
"use strict";
_i_("4ab:16");
var n = t("search/destination/service-booking"), a = t("search/destination/service-atlas");
function s(t, e, i) {
_i_("4ab:61");
var n, a, s, o = [], _ = [], l = [], h = 0, d = function(t, e, n) {
if (_i_("4ab:168"), h++, o.length && (e ? _.push(e) :l[t] = n, h == o.length)) if (_.length == o.length) i.call(null, _[0], null); else {
var a = r(l);
i.call(null, null, a);
}
_r_();
}, c = function() {
for (_i_("4ab:169"), n = 0; n < o.length; n++) o[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) a = t[n].search.call(t[n], $.extend({}, e), d.bind(null, n)), a.getResultDetails && (s = a.getResultDetails), o.push(a);
return _r_({
abort:c,
getResultDetails:s
});
}
function r(t) {
_i_("4ab:62");
var e = 6, i = 3, n = {
results:[],
_ef:[],
_efd:[]
};
return t.forEach(function(t) {
if (_i_("4ab:170"), !t) return _r_();
if (t.results) if (n.results.length) {
t.results = t.results.filter(l), t.results.splice(i);
var a = e - t.results.length;
n.results.splice(a), n.results = t.results.concat(n.results);
} else n.results = t.results;
[ "_ef", "_efd" ].forEach(function(e) {
_i_("4ab:457"), t[e] && (n[e] = n[e].concat(t[e].filter(o(n[e])))), _r_();
}), n.is_powered_by_google = n.is_powered_by_google || t.results.length && t.is_powered_by_google, _r_();
}), n.results.forEach(function(t, e) {
_i_("4ab:171"), t._ef = _(t._ef, "ac_position", e), _r_();
}), n.city = n.results, n.__js_upa__ = n.is_powered_by_google, _r_(n);
}
function o(t) {
_i_("4ab:63");
var e = {};
return t.forEach(function(t) {
_i_("4ab:172"), e[t.name] = !0, _r_();
}), _r_(function(t) {
return _i_("4ab:123"), _r_(!e[t.name]);
});
}
function _(t, e, i) {
return _i_("4ab:64"), t = t.filter(function(t) {
return _i_("4ab:332"), _r_(t.name !== e);
}), t.push({
name:e,
value:i
}), _r_(t);
}
function l(t) {
return _i_("4ab:65"), _r_(-1 != [ "route", "postal_code", "street_address" ].indexOf(t.place_type));
}
function h(t, e, i) {
_i_("4ab:66");
var n, a = [], s = [], r = function(t, e) {
if (_i_("4ab:173"), a.length) if (t) s.push(t), s.length == a.length && i.call(null, t, e); else for (i.call(null, t, e), n = 0; n < a.length; n++) a[n].abort();
_r_();
}, o = function() {
for (_i_("4ab:174"), n = 0; n < a.length; n++) a[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) a.push(t[n].search.call(t[n], $.extend({}, e), r));
return _r_({
abort:o
});
}
function d(t, e, i) {
_i_("4ab:67");
var n, a = {}, s = function(e, n) {
_i_("4ab:175"), setTimeout(function() {
_i_("4ab:458"), e && t.length ? r() :i.call(null, e, n), _r_();
}, 0), _r_();
}, r = function() {
_i_("4ab:176");
var i = t.shift();
n = i.search.call(i, $.extend({}, e), s), a.getResultDetails = n.getResultDetails, _r_();
}, o = function() {
_i_("4ab:177"), n && n.abort(), _r_();
};
return r(), a.abort = o, _r_(a);
}
i.exports = {
search:function(t, e) {
if (_i_("4ab:178"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
return _r_(t.gpo ? a.search(t, e) :t.fesp_acf_i || t.fesp_acf_i_regions || t.fesp_acf_i_cities ? n.search(t, e) :t.gpf && t.ss.match(/[0-9]/) ? s([ n, a ], t, e) :t.gpr ? h([ n, a ], t, e) :t.gpf ? d([ n, a ], t, e) :n.search(t, e));
}
}, _r_();
}), B.define("search/destination/service-atlas", function(t, e, i) {
"use strict";
_i_("4ab:17");
var n = t("event-emitter"), a = B.env.b_map_center_latitude || B.env.b_latitude || void 0, s = B.env.b_map_center_longitude || B.env.b_longitude || void 0, r = 3e4, o = 2, _ = [ "ChIJNy0jzGPMUQ4RWpboPw0ztMY", "ChIJ2xJC2SwmsUcRBqiHnUEubtY", "ChIJT-IyeGHurw0Rx89nUEaYTPM", "ChIJk_Swujrurw0R7yS_X2BSuD4" ], l = {
administrative_area_level_1:"region",
administrative_area_level_2:"region",
administrative_area_level_3:"region",
administrative_area_level_4:"region",
administrative_area_level_5:"region",
airport:"airport",
country:"country",
locality:"city",
point_of_interest:"landmark",
route:"region",
street_address:"region",
postal_code:"region",
sublocality:"district"
};
function h() {
return _i_("4ab:68"), _r_(!!B.atlas);
}
function d(t, e, i) {
_i_("4ab:69");
var n = {
city:[]
};
n.__upa__ = e.filter(c).slice(0, 5).map(function(e, i) {
_i_("4ab:333"), e = e.get("data");
var n = {
upa:!0,
nr_hotels:0,
nr_hotels_25:0,
ss_raw:t.ss,
dest_id:e.id,
place_id:e.id,
dest_type:l[e.types && e.types[0]] || "landmark",
place_type:e.types && e.types[0],
place_types:e.types,
ss:e.description,
label:e.description,
label_blocks:b(e.description, e.matched_substrings),
label_highlighted:f(e.description, e.matched_substrings, {
encode:t.gpf_encode
}),
label_multiline:"<span><b>" + e.description + "</b></span>",
hotels:0,
lc:B.env.b_lang,
position:i,
is_google_result:!0,
_ef:[],
cjk:"zh" === B.env.b_lang || "xt" === B.env.b_lang || "ja" === B.env.b_lang || "ko" === B.env.b_lang
};
return n._ef.push({
name:"ac_position",
value:i
}), _r_(n);
}), n.results = n.__upa__, n._ef = [], n._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), n.is_powered_by_google = n.results.length > 0, n.__js_upa__ = n.is_powered_by_google, i(null, n), _r_();
}
function c(t) {
_i_("4ab:70");
var e = t.get("data");
return _r_(-1 === _.indexOf(e.id));
}
function u(t, e, i) {
_i_("4ab:71"), t = t || {}, t.id = e.id || e.place_id, t.place_id = t.id, t.name = e.name || e.formatted_address, t.latitude = e.geometry.location.lat(), t.longitude = e.geometry.location.lng(), t.place_types = e.types, t.dest_type = l[e.types && e.types[0]] || "landmark", t._ef = t._ef || [], t._ef.push({
name:"ss_short",
value:e.name
}), i(null, t), _r_();
}
function p(t, e) {
if (_i_("4ab:72"), !t.place_id) return e(null, t), _r_();
this.atlas.getGeocodeDetails({
placeId:t.place_id
}, function(i) {
_i_("4ab:179"), u(t, i, e), _r_();
}), _r_();
}
function f(t, e, i) {
_i_("4ab:73");
var n = "";
if (i = i || {}, !e || 0 === e.length) return _r_(t);
for (var a = e.map(function(t) {
return _i_("4ab:334"), _r_(t.offset);
}), s = e.map(function(t) {
return _i_("4ab:335"), _r_(t.offset + t.length - 1);
}), r = 0; r < t.length; r++) -1 != a.indexOf(r) && (n += "<b>"), n += t.charAt(r), -1 != s.indexOf(r) && (n += "</b>");
return i.encode && (n = B.jstmpl.fn.FILTERS.entities(n), n = n.replace(/&lt;b&gt;/g, "<b>"), n = n.replace(/&lt;&#47;b&gt;/g, "</b>")), _r_(n);
}
function b(t, e) {
_i_("4ab:74");
var i = [];
if (!e || 0 === e.length) return _r_([ {
text:t
} ]);
return e[0].offset && i.push({
text:t.substr(0, e[0].offset)
}), e.forEach(function(n, a) {
_i_("4ab:180");
var s = n.offset + n.length, r = (e[a + 1] && e[a + 1].offset || t.length) - s;
i.push({
highlighted:!0,
text:t.substr(n.offset, n.length)
}), r && i.push({
text:t.substr(s, r)
}), _r_();
}), _r_(i);
}
i.exports = n.extend({
init:function(t, e) {
_i_("4ab:336"), t = t || {};
var i = this, n = "booking-places";
if (!h()) return _r_();
if (this.initialized) return e && this.atlas.done(e), _r_();
this.initialized = !0;
var a = function(t) {
_i_("4ab:477");
var a = document.createElement("div");
i.atlas = new t({
provider:"provider-places",
modules:[ "autocomplete", "places" ],
options:{
domNode:a,
channel:n
}
}), e && i.atlas.done(e), _r_();
};
B.atlas.isAtlasAsync ? B.require([ "async-loader" ], function(t) {
_i_("4ab:504"), t.load({
js:"async_atlas_places_js"
}).then(function() {
_i_("4ab:537"), a(B.atlas.require("atlas-places")), _r_();
}), _r_();
}) :a(B.atlas.require("atlas-places")), _r_();
},
search:function(t, e) {
if (_i_("4ab:337"), !t || !t.ss || "function" != typeof e) throw new Error("service-atlas-invalid-arguments");
if (t.ss.length < o) return setTimeout(function() {
_i_("4ab:505"), e(new Error("service-atlas-too-short-search-string"), {}), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
if (!h()) return setTimeout(function() {
_i_("4ab:506"), e(new Error("service-atlas-no-atlas"), null), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
var i = !1, n = {
query:t.ss
};
a && s && r && (n.lat = a, n.lon = s, n.radius = r);
var _ = function(n) {
_i_("4ab:478"), i || (n && Array.isArray(n) ? d(t, n, e) :e(new Error("service-atlas-invalid-results"), null)), _r_();
}, l = function(t) {
_i_("4ab:479"), i || e(new Error("service-atlas-error " + t), null), _r_();
};
this.init(t, function() {
_i_("4ab:507"), this.atlas.autocomplete(n, _, l), _r_();
}.bind(this));
var c = function() {
_i_("4ab:480"), i = !0, _r_();
};
return _r_({
getResultDetails:p.bind(this),
abort:c
});
}
}), _r_();
}), B.define("search/destination/service-booking", function(t, e, i) {
"use strict";
_i_("4ab:18");
var n = t("event-emitter"), a = B.env.b_sb_autocomplete_predictions_url;
function s(t) {
return _i_("4ab:75"), t.term = t.ss, delete t.ss, _r_(t);
}
function r(t, e, i) {
_i_("4ab:76"), t && t.city ? t.__upa__ || 0 !== t.city.length || t.bbtoollocations && 0 !== t.bbtoollocations.length || t.theme && 0 !== t.theme.length || t.searches && 0 !== t.searches.length ? (t.city = t.city.map(function(e, i) {
return _i_("4ab:481"), !e.label && e.labels && (e.label = l(e.labels)), !e.labels || "zh" !== e.lc && "xt" !== e.lc && "ja" !== e.lc && "ko" !== e.lc || (e.label_blocks = h(e.labels)), e.ss = e.label, e.label_highlighted = e.label_highlighted || e.label, B.env.is_user_from_us && e.labels && o(e.labels) && B.et.track("YdVDEZREYDbRfBDDVOGDNMUO") && (e.label_highlighted = _(e.labels, !0), e.label = _(e.labels, !1), e.ss = e.label), e.position = i, e._ef = e._ef || [], e._ef.push({
name:"ac_position",
value:i
}), e._ef.push({
name:"ac_langcode",
value:e.lc
}), t.__did_you_mean__ && (e._ef.push({
name:"suggested_term",
value:t.__did_you_mean__.suggestion
}), e._ef.push({
name:"suggestion_clicked",
value:1
})), _r_(e);
}), t.results = t.city, t.bbtoollocations && (t.results = t.bbtoollocations.map(function(t, e) {
return _i_("4ab:528"), delete t.label_highlighted, t.label_blocks = [ {
highlighted:1,
text:t.name
}, {
text:", "
}, {
text:t.address
} ], t.ss = t.name, t.latitude = t.place_id_lat, t.longitude = t.place_id_lon, t.position = e, t._ef = t._ef || [], t._ef.push({
name:"bbtoollocation",
value:"1"
}), _r_(t);
}).concat(t.results)), t.theme && (t.theme = t.theme.map(function(e, i) {
return _i_("4ab:508"), e.ss = e.label, e._ef = e._ef || [], e._ef.push({
name:"ac_position",
value:i + t.city.length
}), _r_(e);
}), t.theme.length && e.limitOneTheme && (t.theme = [ t.theme[0] ]), t.results = t.results.concat(t.theme)), t.searches && t.searches.length > 0 && (t.results = t.searches.concat(t.results)), t._ef = t._ef || [], t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"ac_suggestion_list_length",
value:t.city.length
}), t._ef.push({
name:"ac_suggestion_theme_list_length",
value:t.theme ? t.theme.length :0
}), t._efd = t._efd || [], i(null, t)) :i(new Error("service-booking-no-results"), t) :i(new Error("service-booking-data-invalid"), null), _r_();
}
function o(t) {
_i_("4ab:77");
var e = !1;
return $.each(t, function(t, i) {
if (_i_("4ab:181"), "country" === i.type && "us" === i.dest_id) return e = !0, _r_(!1);
_r_();
}), _r_(e);
}
function _(t, e) {
return _i_("4ab:78"), _r_(t.filter(function(t) {
return _i_("4ab:459"), _r_(-1 === [ "region", "country", "continent" ].indexOf(t.type));
}).map(function(t) {
return _i_("4ab:440"), _r_(e && t.hl ? "<b class='search_hl_name'>" + t.text + "</b>" :t.text);
}).join(", "));
}
function l(t) {
return _i_("4ab:79"), _r_(t.map(function(t) {
return _i_("4ab:441"), _r_(t.text);
}).join(", "));
}
function h(t) {
_i_("4ab:80");
var e = [];
return t.forEach(function(t, i) {
_i_("4ab:182"), i > 0 && e.push({
text:", "
}), e.push({
highlighted:!!t.hl,
text:t.text
}), _r_();
}), _r_(e);
}
i.exports = n.extend({
search:function(t, e) {
if (_i_("4ab:338"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
var i = s(t);
this.emit("beforeajax", t, i);
var n = $.ajax({
type:"get",
url:a,
data:i,
success:function(i, n, a) {
_i_("4ab:534"), r(i, t, e), _r_();
}.bind(this),
error:function(t, i, n) {
_i_("4ab:535"), "abort" !== i && e(new Error("service-booking-error " + n), null), _r_();
}.bind(this)
}), o = function() {
_i_("4ab:482"), n && n.abort && n.abort(), _r_();
};
return _r_({
abort:o
});
},
getSuggestions:function(t, e) {
_i_("4ab:339");
var i = B.env.search_autocomplete_params, n = 0, a = "";
B.env.bb && B.env.ibb ? n = 5 :e && (n = 0 === e.children_ages.length ? 1 === e.adults_count ? 1 :2 === e.adults_count ? 2 :3 :4), "searchresults" === B.env.b_action && (a = B.search.dates("checkin"), a = "valid" === a.type ? a.toString() :""), i = Object.assign({}, i, {
ttype:n,
checkin:a
});
var s = $.ajax({
type:"get",
url:"/search_history_and_suggestions",
data:i,
success:function(e, i, n) {
_i_("4ab:523"), t(null, e), _r_();
},
error:function(e, i, n) {
if (_i_("4ab:524"), "abort" === i) return _r_();
t(new Error("service-booking-error " + n), null), _r_();
}
}), r = function() {
_i_("4ab:483"), s && s.abort && s.abort(), _r_();
};
return _r_({
abort:r
});
}
}), _r_();
}), B.define("component/search/dates/date-field", function(t, e, i) {
"use strict";
_i_("4ab:19");
var n = t("caret"), a = t("component"), s = t("formatting/date"), r = t("keycodes"), o = t("read-data-options"), _ = t("ga-tracker"), l = t("search/searchbox/model");
i.exports = a.extend({
init:function() {
_i_("4ab:340"), this.options = o(this.el, {
forceInitRender:{
name:"force-init-render",
type:Boolean,
defaultValue:!1
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
modelMode:{
name:"mode",
type:String,
defaultValue:"single"
}
}), this.model = l.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.model.dates.configure({
noValidation:!0,
allowMaxLos:!0
}), this.$display = this.$el.find("[data-display]"), this.$inputs = this.$el.find("[data-input]"), this.$inputYear = this.$inputs.filter('[data-input-fragment="year"]'), this.$inputMonth = this.$inputs.filter('[data-input-fragment="month"]'), this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]'), this.$controls = this.$el.find("[data-controls]"), this.$iconDay = this.$el.find("[data-icon-day]"), this.$field = this.$el.find("[data-field]"), this.$controls.on("mousedown", this.controlsMouseDown.bind(this)), this.$inputs.on("focus", this.inputFocus.bind(this)), this.$inputs.one("focus", this.inputFocusTrack.bind(this)), this.$inputs.on("blur", this.inputBlur.bind(this)), this.$inputs.on("keydown", this.inputKeyDown.bind(this)), this.$inputs.on("keyup", this.inputKeyUp.bind(this)), this.$inputs.on("keypress", this.inputKeyPress.bind(this)), B.eventEmitter.on("CALENDAR:shown CALENDAR:closed", this.updateFocusClass.bind(this)), this.previousState = {}, this.state = {
editing:!1,
currentField:null
}, this.checkDateFields(), this.initModel(), _r_();
},
checkDateFields:function() {
_i_("4ab:341");
var t, e;
this.$inputYear.length && this.$inputMonth.length && this.$inputDay.length || (t = this.model.dates.getFallbackDates(this.options.modelMode), 0 === this.$inputYear.length && (e = t.year || "", this.$inputYear = this.createDateInputField(this.options.modelMode + "_year", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:529"), Error("Date input field year was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputMonth.length && (e = t.month || "", this.$inputMonth = this.createDateInputField(this.options.modelMode + "_month", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:530"), Error("Date input field month was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputDay.length && (e = t.day || "", this.$inputDay = this.createDateInputField(this.options.modelMode + "_monthday", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:531"), Error("Date input field day was not found in " + B.env.b_action + " action");
}, 0))), _r_();
},
createDateInputField:function(t, e) {
return _i_("4ab:342"), _r_($("<input>").attr({
type:"hidden",
name:t,
value:e
}).val(e));
},
initModel:function() {
_i_("4ab:343");
var t = !1, e = this.$inputYear.val(), i = this.$inputMonth.val(), n = this.$inputDay.val();
t = e && i && n ? this.model.dates.initDate(this.options.modelMode, {
year:+e,
month:+i - 1,
day:+n
}) :this.model.dates.initDate(this.options.modelMode, null), (!t || this.options.forceInitRender) && this.render(), _r_();
},
modelChange:function(t) {
if (_i_("4ab:344"), "dates" !== t.group || !t[this.options.modelMode]) return _r_();
this.render(), _r_();
},
controlsMouseDown:function(t) {
_i_("4ab:345"), this.inputBlurPrevented = !0, setTimeout(function() {
_i_("4ab:509"), this.inputBlurPrevented = !1, _r_();
}.bind(this)), _r_();
},
inputFocus:function(t) {
_i_("4ab:346"), clearTimeout(this.inputBlurTimer), this.state.editing = !0, this.state.currentField = t.target.getAttribute("data-input-fragment"), this.startEditing(), this.updateFocusClass(), _r_();
},
inputFocusTrack:function() {
_i_("4ab:347"), _.trackEvent(_.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_();
},
inputBlur:function(t) {
_i_("4ab:348");
var e = t.target, i = e.getAttribute("data-input-fragment");
this.inputBlurPrevented || (this.state.editing = !1, this.state.currentField = null), this.setDateFragment(i, e.value), this.inputBlurTimer = setTimeout(function() {
_i_("4ab:525"), this.apply(), this.updateFocusClass(), _r_();
}.bind(this)), _r_();
},
inputKeyDown:function(t) {
_i_("4ab:349");
var e = t.target, i = e.getAttribute("data-input-fragment");
if (r.isModifier(t.which)) return _r_();
r.isUpArrow(t.which) ? (this.adjustDateFragment(i, e.value, 1), t.preventDefault()) :r.isDownArrow(t.which) ? (this.adjustDateFragment(i, e.value, -1), t.preventDefault()) :r.isLeftArrow(t.which) || r.isBackspace(t.which) ? this.inputMoveAdjacent(t, -1, {
backspace:r.isBackspace(t.which)
}) :r.isRightArrow(t.which) && this.inputMoveAdjacent(t, 1), _r_();
},
inputKeyUp:function(t) {
_i_("4ab:350");
var e = t.target;
if (r.isModifier(t.which)) return _r_();
!r.isNavigation(t.which) && !r.isDeletion(t.which) && e.value.length >= Math.floor(e.getAttribute("maxlength")) && this.inputMoveAdjacent(t, 1, {
automatic:!0
}), _r_();
},
inputMoveAdjacent:function(t, e, i) {
_i_("4ab:351");
var a, s, r = t.target, o = this.$inputs.length, _ = n.getPosition(r), l = 0, h = this.$inputs.filter(r).index(), d = o - 1, i = i || {};
if (e > 0 && (l = r.value.length, d = 0), i.automatic && h == o - 1) return _r_();
if (!i.force && n.getSelectionLength(r)) return _r_();
(i.force || _ == l) && (h += e, (0 > h || h > o - 1) && (h = d), a = this.$inputs.get(h), i.automatic && a.value.length ? a.select() :(s = e > 0 ? 0 :a.value.length, n.setPosition(a, s), i.backspace || t.preventDefault())), _r_();
},
inputKeyPress:function(t) {
_i_("4ab:352"), t.keyCode && r.isNavigation(t.keyCode) || !(t.which < 48 || t.which > 57) || (this.inputMoveAdjacent(t, 1, {
automatic:!0,
force:!0
}), t.preventDefault()), _r_();
},
startEditing:function() {
_i_("4ab:353"), setTimeout(function() {
_i_("4ab:510"), this.model.dates.startEditing(), _r_();
}.bind(this)), this.render(), _r_();
},
setDateFragment:function(t, e) {
_i_("4ab:354"), e = "" === e ? null :+e, "month" === t && null !== e && (e -= 1), this.model.dates.setEditingFragment(this.options.modelMode, t, e), _r_();
},
adjustDateFragment:function(t, e, i) {
_i_("4ab:355"), e = "" === e ? 0 :+e, "month" === t && (e -= 1), this.model.dates.adjustEditingFragment(this.options.modelMode, t, e, i), _r_();
},
apply:function() {
_i_("4ab:356"), this.model.dates.applyEditing(this.options.modelMode), _r_();
},
render:function() {
_i_("4ab:357");
var t = this.$field.hasClass("-editing"), e = this.model.dates.get(), i = this.$inputYear.val(), n = this.$inputMonth.val(), a = this.$inputDay.val(), r = e[this.options.modelMode], o = e["editing_" + this.options.modelMode] || {}, _ = o.year, l = o.month, h = o.day, d = "date_with_weekday";
i = "" === i ? null :+i, n = "" === n ? null :+n, a = "" === a ? null :+a, _ = "number" == typeof _ ? _ :null, l = "number" == typeof l ? l + 1 :null, h = "number" == typeof h ? h :null, t != this.state.editing && (t = this.state.editing, this.$field.toggleClass("-editing", t)), i !== _ && (this.$inputYear.val(_), "year" === this.state.currentField && this.$inputYear.select()), n !== l && (this.$inputMonth.val(l), "month" === this.state.currentField && this.$inputMonth.select()), a !== h && (this.$inputDay.val(h), "day" === this.state.currentField && this.$inputDay.select()), t || r || (this.$field.addClass("-empty"), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), !t && r && (this.$field.removeClass("-empty"), d = this.$display.data("date-format") || d, this.$display.html(s.format(r, d)), this.$iconDay.html(s.format(r, "{day_of_month}"))), _r_();
},
updateFocusClass:function() {
_i_("4ab:358"), setTimeout(function() {
_i_("4ab:511");
var t = this.$el.parent(), e = this.state.editing, i = !t.hasClass("c2-wrapper-s-hidden");
e || i ? this.$el.addClass("-focus") :this.$el.removeClass("-focus"), _r_();
}.bind(this), 100), _r_();
}
}), _r_();
}), B.define("search/dates/util", function(t, e, i) {
_i_("4ab:20"), i.exports = {
formatDate:function(t) {
_i_("4ab:183");
var e = new Date(t), i = "" + (e.getMonth() + 1), n = "" + e.getDate(), a = e.getFullYear();
return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([ a, i, n ].join("-"));
},
addDay:function(t) {
_i_("4ab:184");
var e = new Date(t);
return e.setDate(e.getDate() + 1), _r_(e);
},
substractDay:function(t) {
_i_("4ab:185");
var e = new Date(t);
return e.setDate(e.getDate() - 1), _r_(e);
},
daysBetween:function(t, e) {
_i_("4ab:186"), t = new Date(t), e = new Date(e);
var i = 864e5, n = t.getTime(), a = e.getTime(), s = Math.abs(n - a);
return _r_(Math.round(s / i));
}
}, _r_();
}), B.define("search/dates/date-prices-service", function(t, e, i) {
_i_("4ab:21");
var n = t("promise"), a = t("fragment"), s = t("search/dates/util"), r = {
getGroupInformation:function() {
_i_("4ab:187");
var t = 2, e = 0, i = !1, n = B.env.b_group_rooms_wanted || 1;
return B.env.b_group && B.env.b_group[0] && B.env.b_group[0].guests && (t = B.env.b_group[0].guests, e = B.env.b_group[0].children || 0, B.env.b_group[0].children_ages && (i = B.env.b_group[0].children_ages)), _r_({
adults:t,
children:e,
ages:i,
rooms:n
});
},
getPrices:function(t) {
_i_("4ab:188");
var e, i = this.getGroupInformation();
if (t.dates) {
if ("string" == typeof t.model && "av_calendar" === t.model) {
var n = {
hotel_id:t.destinationId,
checkin:t.dates.startFromDay,
n_days:t.days,
result_format:"price_histogram",
no_rooms:i.rooms,
group_adults:i.adults,
group_children:i.children
};
i.ages && (n.age = i.ages), e = a.call("hotel.availability_calendar", n);
} else {
var n = {
dest_type:t.destinationType,
dest_id:t.destinationId,
checkin:t.dates.startFromDay,
n_days:t.days,
adults:i.adults
};
"dots" === t.style && (n.price_indicator = 1), t.months && t.months.length && (n.legend_months = t.months), e = a.call("lp.get_av_calendar_prices", n);
}
return _r_(e.then(function(e) {
if (_i_("4ab:495"), !e || !e.dates && !e.days) return _r_({
data:t.datesData,
legends:t.legends
});
var i = e.dates || e.days, n = {
data:t.datesData.concat(i)
};
return t.months && t.months.length && e.legends ? (n.legends = e.legends, t.cacheObject.monthLenged[t.months.join("-")] = e.legends) :n.legends = t.legends, _r_(n);
}));
}
return _r_({
data:t.datesData,
legends:t.legends
});
},
getPricesFromCache:function(t, e) {
_i_("4ab:189");
var i = e, a = e.monthLenged = e.monthLenged || {};
return t.cacheObject = e, _r_(new n(function(e, n) {
_i_("4ab:496");
var r, o, _ = new Date(t.dates.startFromDay), l = new Date(t.dates.endUntilDay), h = t.datesData;
if (t.months && t.months.length) {
var d = t.months.join("-");
a[d] && (t.legends = a[d]);
} else t.legends = {};
for (;l >= _ && (r = i[s.formatDate(_)]); ) h.push(r), _ = s.addDay(_);
if (_ >= l) return t.dates = !1, _r_(e($.extend(t, {
dates:t.dates,
datesData:h
})));
for (t.dates.startFromDay = s.formatDate(s.substractDay(_)), o = new Date(t.dates.startFromDay), _ = new Date(t.dates.endUntilDay); _ >= o && (r = i[s.formatDate(_)]); ) h.push(r), _ = s.substractDay(_);
return o >= _ ? t.dates = !1 :(t.dates.endUntilDay = s.formatDate(s.addDay(_)), t.days = s.daysBetween(t.dates.startFromDay, t.dates.endUntilDay)), _r_(e($.extend(t, {
dates:t.dates,
datesData:h
})));
}.bind(this)));
},
getDatesToQuery:function(t, e) {
_i_("4ab:190");
var i = new Date(t), n = new Date(t), a = i.getMonth() + 1, r = a + 1 === 13 ? 1 :a + 1;
return n.setDate(n.getDay() + e.daysToDisplay), _r_({
startFromDay:s.formatDate(i),
endUntilDay:s.formatDate(n),
months:[ a, r ]
});
}
};
i.exports = r, _r_();
}), B.define("search/dates/date-prices", function(t, e, i) {
_i_("4ab:22");
var n = t("component"), a = t("search/dates/date-prices-service"), s = B.utils.accounting.formatMoney, r = t("search/dates/util"), o = "UBKeJbLYQCLBMJFUWOEQeRe", _ = t("et"), l = {
daysToDisplay:62,
style:"numbers"
}, h = {}, d = {}, c = {}, u = /^(city|country|district|region|hotel)$/;
booking.jstmpl("search_calendar_date_prices", function() {
_i_("4ab:124");
var t = [ "\n		", '<span class="sb-date-prices-footer">\n	', "\n		<span>\n			", "/private/sxp_sbox_calendar_legend/name", "\n		</span>\n		", '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __green"></i> ', "-", "\n			</span>\n		", '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __yellow"></i> ', '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __red"></i> ', "+\n			</span>\n		", "\n	", "\n</span>\n" ], e = [ "legends" ];
return _r_(function(i) {
_i_("4ab:442");
var n = "", a = this.fn;
function s(i) {
return _i_("4ab:460"), i += t[1], a.MD(e[0]) && (i += [ t[2], a.ME(t[3], a.MB, a.MN, null), t[4] ].join(""), a.MJ(a.MG((a.MC(e[0]) || {}).low)) && (i += [ t[5], ((a.MC(e[0]) || {}).low || [])[0], t[6], ((a.MC(e[0]) || {}).low || [])[1], t[7] ].join("")), i += t[0], a.MJ(a.MG((a.MC(e[0]) || {}).medium)) && (i += [ t[8], ((a.MC(e[0]) || {}).medium || [])[0], t[6], ((a.MC(e[0]) || {}).medium || [])[1], t[7] ].join("")), i += t[0], a.MJ(a.MG((a.MC(e[0]) || {}).high)) && (i += [ t[9], ((a.MC(e[0]) || {}).high || [])[0], t[10] ].join("")), i += t[11]), i += t[12], _r_(i);
}
return n += t[0], n = s(n), n += t[11], _r_(n);
});
}());
var p = n.extend({
init:function(t) {
_i_("4ab:359"), this.options = Object.assign({}, l, t), this.model || (this.model = t.model, this.hash = t.trackHash || o, this.model.use && (this.model.use("destination"), u = /^(city|country|district|region)$/), t.variant ? (this.initParameters(), this.bindEvents()) :(this.initParameters(), this.initTrackingOnly())), _r_();
},
initParameters:function() {
_i_("4ab:360"), ("index" !== B.env.b_action || B.env.b_cal_dest_id || B.env.b_cal_dest_type) && parseInt(B.env.b_cal_dest_id, 10) && B.env.b_cal_dest_type && B.env.b_cal_dest_type.match(u) ? (this.destinationId = parseInt(B.env.b_cal_dest_id, 10), this.destinationType = B.env.b_cal_dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters(), _r_();
},
resetParameters:function() {
_i_("4ab:361"), this.destinationId = !1, this.destinationType = !1, $(".c2-wrapper").addClass("calendar-no-prices"), _r_();
},
bindEvents:function() {
_i_("4ab:362"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.onCalendarShown.bind(this)), this.model.on && this.model.on("change", this.modelChange.bind(this)), _r_();
},
modelChange:function(t) {
_i_("4ab:363"), t && t.group && "destination" == t.group && (this.cleanPrices(), t = this.model.destination.get(), parseInt(t.dest_id, 10) && t.dest_type && t.dest_type.match(u) ? (this.destinationId = parseInt(t.dest_id), this.destinationType = t.dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters()), _r_();
},
initTrackingOnly:function() {
_i_("4ab:364"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.trackStage.bind(this)), this.model.on && this.model.on("change", this.modelChange.bind(this)), _r_();
},
trackStage:function(t, e) {
if (_i_("4ab:365"), !e || !e.instance || !e.instance.options) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
if ("string" == typeof this.model && this.model !== e.instance.options.category) return _r_();
switch (_.stage(this.hash, 1), B.env.b_action) {
case "index":
_.stage(this.hash, 2), B.env.b_is_domestic && _.stage(this.hash, 3);
break;

case "searchresults":
_.stage(this.hash, 4), B.env.b_is_domestic && _.stage(this.hash, 3);
break;

case "hotel":
B.env.b_has_valid_dates_not_in_past && B.env.b_availability_checked && _.stage(this.hash, 2), B.env.b_has_valid_dates_not_in_past && !B.env.b_availability_checked && _.stage(this.hash, 3), B.env.b_has_valid_dates_not_in_past || _.stage(this.hash, 4), B.env.b_has_valid_dates_not_in_past && B.env.b_checkin_date && (r.daysBetween(new Date(), B.env.b_checkin_date) >= 7 ? _.stage(this.hash, 5) :_.stage(this.hash, 6));
}
_r_();
},
onCalendarShown:function(t, e) {
if (_i_("4ab:366"), !e || !e.instance || !e.instance.options) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
if ("string" == typeof this.model && this.model !== e.instance.options.category) return _r_();
this.trackStage(t, e);
var i = e.instance, n = a.getDatesToQuery(i.getCurrentMonthUtc(), this.options);
this.showLoading(i), a.getPricesFromCache({
dates:n,
datesData:[],
months:n.months,
days:this.options.daysToDisplay,
destinationId:this.destinationId,
destinationType:this.destinationType,
model:this.model,
style:this.options.style
}, d).then(a.getPrices.bind(a)).then(this.displayPrices.bind(this, i, n)).then(this.hideLoading.bind(this, i))["catch"](this.hideLoading.bind(this, i)), _r_();
},
updateCalendarFooter:function(t, e) {
_i_("4ab:367");
var i = B.jstmpl("search_calendar_date_prices").render({
legends:e
});
t.$element.find(".sb-date-prices-footer").remove(), t.$element.find(".c2-calendar-footer").append(i), _r_();
},
cleanPrices:function() {
_i_("4ab:368"), d = {}, c = {}, $(".c2-day-price-ready").each(function() {
_i_("4ab:484"), $(this).removeClass("c2-day-price-ready").data("day-price", "").html('<i class="bicon bicon-search"></i>'), _r_();
}), $(".sb-date-prices-footer").html(""), _r_();
},
displayPrices:function(t, e, i) {
_i_("4ab:369");
var n, a, o, _ = 0, l = 0, h = t.$screen, u = t.id();
i && i.data || this.hideLoading(t);
var p = i.data;
i.legends && this.updateCalendarFooter(t, i.legends), c[u] = c[u] || {};
for (var f = 0; f < p.length; f++) {
if (p[f].error || !p[f].avg_price_raw) continue;
if (n = new Date(p[f].checkin), o = r.formatDate(n), c[u][o]) continue;
if (d[o] = p[f], c[u][o] = !0, l = Math.floor(parseInt(p[f].avg_price_raw, 10)), "dots" === this.options.style) {
if (_ = "", !p[f].price_indicator) continue;
var b = "";
switch (p[f].price_indicator) {
case 1:
b = "__green";
break;

case 2:
b = "__yellow";
break;

case 3:
b = "__red";
}
_ = '<div class="c2-price-dot ' + b + '"></div>';
} else _ = p[f].avg_price_pretty, _ = s(l, B.env.b_selected_currency);
if (!_) break;
a = h.find("[data-id=" + n.getTime() + "]").find(".c2-day-price"), a.length && a.hasClass("c2-day-price-ready") || (a.addClass("c2-day-price-ready"), a.data("day-price", l), a.html(_));
}
_r_();
},
hideLoading:function(t) {
_i_("4ab:370"), t.$header.find(".c2-progress-bar-inner").removeClass("c2-progress-bar-animation"), _r_();
},
showLoading:function(t) {
_i_("4ab:371"), t.$header.find(".c2-progress-bar-inner").addClass("c2-progress-bar-animation"), _r_();
},
isAvCalendar:function(t) {
return _i_("4ab:372"), _r_("hotel" === B.env.b_action && t && t.instance && t.instance.options && "av_calendar" === t.instance.options.category);
}
});
i.exports = {
getInstance:function(t) {
return _i_("4ab:191"), t = t || "searchbox", h[t] || (h[t] = new p()), _r_(h[t]);
}
}, _r_();
}), B.define("component/search/dates/dates-errors", function(t, e, i) {
"use strict";
_i_("4ab:23");
var n = t("component"), a = t("jstmpl"), s = t("read-data-options"), r = t("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:373"), this.options = s(this.el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("validation", this.modelValidation.bind(this)), this.template = a("fe_search_dates_errors"), _r_();
},
modelValidation:function(t) {
if (_i_("4ab:374"), "dates" !== t.group) return _r_();
t.valid ? this.$el.html("") :this.$el.html(this.template.render({
fe_error:t.validationError,
fe_new:!0
})), B.et.stage("HDDPBDDLfOFYBLcVT", 1), _r_();
}
}), _r_();
}), booking.jstmpl("search_dates_length_of_stay", function() {
_i_("4ab:42");
var t, e = [ "\n	", "\n", "\n\n  \n    ", '\n      <div data-et-view=" ', ':1"></div>\n    ', '\n       <div data-et-view=" ', ':2"></div>\n    ', '\n\n    <div\n      class="sb-dates__los ', " sb-dates__los--flush-top ", '">\n      \n      ', "\n        ", "/private/loc_sbox_general_dates_num_nights_v2/name", "\n      ", "/private/sbox_general_dates_num_nights_1/name", "\n    </div>\n" ], i = [ "b_action", "fe_sb_state_length_of_stay" ];
return _r_(function(n) {
_i_("4ab:112");
var a = "", s = this.fn;
function r(a) {
return _i_("4ab:192"), a += e[1], s.MJ(s.MB(i[1])) && (a += e[2], s.MJ(s.MC(i[0]) + "" == "index") ? a += [ e[3], "YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe", e[4] ].join("") :s.MJ(s.MC(i[0]) + "" == "searchresults") && (a += [ e[5], "YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe", e[6] ].join("")), a += e[7], s.MJ(s.track_experiment("AESfHJefeTcZAZRO")) && (a += e[8]), a += e[9], a += s.MJ(s.MC(i[0]) + "" != "hotel") && s.MJ(s.track_experiment("YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe")) ? [ e[10], (n.unshift({
num_nights:s.MB(i[1])
}), t = s.ME(e[11], s.MB, s.MN, s.MO(s.MC(i[1]), null, e[11])), n.shift(), t), e[12] ].join("") :[ e[10], (n.unshift({
num_nights:s.MB(i[1])
}), t = s.ME(e[13], s.MB, s.MN, s.MO(s.MC(i[1]), null, e[13])), n.shift(), t), e[12] ].join(""), a += e[14]), _r_(a);
}
return a += e[0], a = r(a), a += e[1], _r_(a);
});
}()), B.define("component/search/dates/length-of-stay", function(t, e, i) {
_i_("4ab:24");
var n = t("calendar-base").Calendar, a = t("component"), s = t("read-data-options"), r = t("search/searchbox/model");
i.exports = a.extend({
init:function() {
_i_("4ab:375"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
isAvailability:{
name:"is-availability",
type:Boolean
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.state = {}, this.template = B.jstmpl("search_dates_length_of_stay"), _r_();
},
modelChange:function(t) {
if (_i_("4ab:376"), !t || "dates" != t.group) return _r_();
this.render(), _r_();
},
render:function() {
_i_("4ab:377");
var t = this.model.dates.get();
this.state.fe_is_availability = this.options.isAvailability, this.state.fe_sb_state_length_of_stay = !t.editing && t.checkin && t.checkout && n.diff(t.checkout, t.checkin) > 0 ? n.interval(t.checkin, t.checkout) - 1 :"", this.$el.html(this.template.render(this.state)), _r_();
}
}), _r_();
}), B.define("search/dates/model", function(t, e, i) {
"use strict";
_i_("4ab:25");
var n = t("calendar-base").Calendar, a = t("search/modules/search-date").SearchDate, s = B.env.b_timestamp, r = B.env.sunday_first, o = B.env.b_search_max_months || 13;
function _(t) {
_i_("4ab:81"), this._model = t, this._data = {
initialized:!1,
checkin:null,
checkout:null,
firstValidDay:null,
lastValidDay:null,
editing:!1,
editing_checkin:null,
editing_checkout:null,
length_of_stay:null,
week_start:r ? 0 :1
}, this._valid = !0, this._validationError = "", this._options = {
maxLos:30,
maxMonths:o,
syncLegacy:!0
};
var e = new Date(1e3 * (s - 39600));
this._data.firstValidDay = a.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}), this._data.lastValidDay = a.createFlexible({
year:e.getUTCFullYear(),
month:e.getUTCMonth() + this._options.maxMonths,
day:0
}), this._data.firstValidCheckoutDay = a.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate() + 1
}), this._options.syncLegacy && (this.boundLegacyDateChange = this.legacyDateChange.bind(this), B.eventEmitter.on(B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange)), _r_();
}
$.extend(_.prototype, {
init:function(t) {
_i_("4ab:193");
var e = a.create(t.checkin), i = a.create(t.checkout);
this.validateDate("checkin", e).valid && this.validateDate("checkout", i, {
checkin:e
}).valid && (this.setDate("checkin", e, {
init:!0
}), this.setDate("checkout", i, {
init:!0
}), this.emit("init")), _r_();
},
configure:function(t, e) {
_i_("4ab:194");
var i = this._options.maxMonths, n = this._options.syncLegacy;
void 0 !== e ? this._options[t] = e :"object" == typeof t && $.extend(this._options, t), i != this._options.maxMonths && (this._data.lastValidDay = a.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month + this._options.maxMonths,
day:0
})), n !== this._options.syncLegacy && B.eventEmitter[this._options.syncLegacy ? "on" :"off"](B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange), _r_();
},
getOption:function(t) {
return _i_("4ab:195"), _r_(this._options[t]);
},
get:function() {
return _i_("4ab:196"), _r_(this._data);
},
initDate:function(t, e, i) {
_i_("4ab:197"), i = i || {}, i.init = !0;
var n = !1;
if (this._data.initialized) return _r_(!1);
return e && (n = this.setDate(t, e, i)), this["initialized" + t] = !0, this.initializedcheckin && this.initializedcheckout && (this.emit("init"), this._data.initialized = !0), _r_(n);
},
setDate:function(t, e, i) {
_i_("4ab:198"), i = i || {};
var s, r, o, _ = {};
if (e = a.create(e), !this._options.noValidation && !this.validateDate(t, e, {
loose:!0
}).valid) return _r_(!1);
if ("checkin" == t) this._data.checkin = e, r = !0, a.compare(this._data.checkin, this._data.firstValidDay) < 0 && (this._data.checkin = a.create(this._data.firstValidDay)), a.compare(this._data.checkin, this._data.lastValidDay) > 0 && (this._data.checkin = a.createFlexible({
year:this._data.lastValidDay.year,
month:this._data.lastValidDay.month,
day:this._data.lastValidDay.day - 1
})), this._data.checkout ? (s = n.diff(this._data.checkout, e), 0 >= s ? (this._data.checkout = a.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0) :!this._options.allowMaxLos && s > this._options.maxLos && (this._data.checkout = a.createFlexible({
year:e.year,
month:e.month,
day:e.day + this._options.maxLos
}), o = !0)) :(this._data.checkout = a.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0); else {
if ("checkout" != t) return _r_(!1);
this._data.checkout = e, o = !0, a.compare(this._data.checkout, this._data.lastValidDay) > 0 && (this._data.checkout = a.create(this._data.lastValidDay)), 0 == a.compare(this._data.checkout, this._data.firstValidDay) && (this._data.checkin = a.create(this._data.firstValidDay), this._data.checkout = a.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month,
day:this._data.firstValidDay.day + 1
}), o = !0), this._data.checkin && (s = n.diff(e, this._data.checkin), 0 >= s && (this._data.checkin = null)), this._data.checkin || (this._data.checkin = a.createFlexible({
year:e.year,
month:e.month,
day:e.day - 1
}), r = !0);
}
return r && (this._options.syncLegacy && B.search.setDate_("checkin", this._data.checkin.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkin = this._data.checkin, _.checkin = !0), o && (this._options.syncLegacy && B.search.setDate_("checkout", this._data.checkout.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkout = this._data.checkout, _.checkout = !0), (r || o) && (this._data.length_of_stay = this._data.checkin && this._data.checkout && n.interval(this._data.checkin, this._data.checkout) - 1), this._data.editing = !1, i.init || this.emit("change", _), _r_(!0);
},
startEditing:function() {
if (_i_("4ab:199"), this._data.editing) return _r_();
this._data.editing = !0, this.emit("change", {
editing:!0
}), _r_();
},
setEditingFragment:function(t, e, i) {
if (_i_("4ab:200"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
if ("number" != typeof i && null !== i) throw new TypeError("invalid value");
var n = this._data["editing_" + t] || {}, s = {
year:n.year,
month:n.month,
day:n.day
}, r = {
editing:!0
};
return s[e] = i, this._data.editing = !0, this._data["editing_" + t] = a.create(s), r[t] = !0, this.emit("change", r), _r_(!0);
},
adjustEditingFragment:function(t, e, i, n) {
if (_i_("4ab:201"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
var a = 1, s = (this._data["editing_" + t] || {}, i + n);
return "month" == e ? a = 0 :"year" == e && (a = this._data.firstValidDay.year), a > s && (s = a), _r_(this.setEditingFragment(t, e, s));
},
applyEditing:function(t) {
if (_i_("4ab:202"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
return this._data["editing_" + t].complete ? _r_(this.setDate(t, this._data["editing_" + t])) :(this.clearDates(), _r_(!0));
},
clearDates:function() {
_i_("4ab:203"), this._data.checkin = null, this._data.checkout = null, this._data.editing = !1, this._data.editing_checkin = null, this._data.editing_checkout = null, this._data.length_of_stay = null, this._options.syncLegacy && (B.search.setDate_("checkin", "", {
referrer:"search/dates/model"
}), B.search.setDate_("checkout", "", {
referrer:"search/dates/model"
})), this.emit("change", {
checkin:!0,
checkout:!0
}), _r_();
},
validate:function(t) {
_i_("4ab:204"), t = t || {};
var e = !0, i = "";
if (!e || !t.notEmpty || this._data.checkin && this._data.checkout || (e = !1, i = "missing-dates"), e && !this._data.checkin && this._data.checkout && (e = !1, i = "missing-checkin"), e && this._data.checkin && !this._data.checkout && (e = !1, i = "missing-checkout"), e && this._data.checkin) {
var n = this.validateDate("checkin", this._data.checkin);
n.valid || (e = n.valid, i = n.validationError);
}
if (e && this._data.checkout) {
var n = this.validateDate("checkout", this._data.checkout);
n.valid || (e = n.valid, i = n.validationError);
}
return t.checkOnly || this._valid == e || (this._valid = e, this._validationError = i, this.emit("validation", {
valid:e,
validationError:i
})), _r_(e);
},
validateDate:function(t, e, i) {
_i_("4ab:205"), i = i || {}, i.checkin = i.checkin || this._data.checkin;
var s = null;
if (!t || "checkin" != t && "checkout" != t) return _r_({
valid:!1,
validationError:"invalid-data"
});
if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day || isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) return _r_({
valid:!1,
validationError:"invalid-data"
});
if ("checkin" == t && a.compare(e, this._data.firstValidDay) < 0 || "checkout" == t && 0 == a.compare(e, this._data.firstValidDay)) return _r_({
valid:!1,
validationError:"past"
});
if ("checkout" == t && i.checkin && (s = n.diff(e, i.checkin)), null !== s) {
if (0 == s) return _r_({
valid:!1,
validationError:"more-than-one-day"
});
if (0 > s) return _r_({
valid:!1,
validationError:"negative-period"
});
if (s > this._options.maxLos) return _r_({
valid:!1,
validationError:"exceeds-max-los"
});
}
return _r_({
valid:!0,
validationError:""
});
},
legacyDateChange:function(t, e) {
_i_("4ab:206");
var i, n;
if ("search/dates/model" == e.referrer) return _r_();
i = "checkin" == e.type ? "checkin" :"checkout", n = a.createFromString(e.value.toString()), this.setDate(i, n), _r_();
},
emit:function(t, e) {
_i_("4ab:207"), e = e || {}, this._model.emit(t, $.extend(e, {
group:"dates"
})), _r_();
},
getFallbackDates:function(t) {
_i_("4ab:208");
var e, i;
return i = "checkin" === t ? B.env.b_checkin_date :B.env.b_checkout_date, i && (i = i.split("-"), e = {
year:parseInt(i[2], 10),
month:parseInt(i[1], 10),
day:parseInt(i[0], 10)
}), _r_(e || {});
}
}), i.exports = _, _r_();
}), booking.jstmpl("fe_search_dates_errors", function() {
_i_("4ab:43");
var t = [ "\n	", "\n\n	", "\n\n		", "\n			", "\n				", "/error/checkout_date_invalid/name", "/error/checkin_date_invalid/name", "/private/sbox_error_checkin_future/name", "/error/checkin_date_to_far_in_the_future/name", "/private/sbox_error_checkout_after/name", "/private/sbox_error_30_night_res/name", "\n		", "\n	\n		", "\n\n\n\n\n\n\n\n\n\n", "\n    ", "\n", "\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__scale_small fe_banner__inherit_font_size ", "fe_banner__unify ", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', "> ", '<i class="fe_banner__icon ', '"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message"> ', " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose"></i></span> ', "\n\n\n\n", "\n\n", "0", "red", '\n		<div class="sb-searchbox__error -visible">\n			', "\n		</div>\n\n	" ], e = [ "fe_error_message", "fe_error", "s_raw_param_errorc_checkout_date_invalid", "s_raw_param_errorc_checkin_date_invalid", "s_raw_param_errorc_checkin_date_in_the_past", "s_raw_param_errorc_checkin_date_to_far_in_the_future", "s_raw_param_errorc_checkout_date_not_after_checkin_date", "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin", "fe_banner__color_scheme", "b_site_type", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__message_text", "fe_banner__banners_count" ];
return _r_(function(i) {
_i_("4ab:113");
var n = "", a = this.fn;
function s(n) {
if (_i_("4ab:209"), a.MJ(a.MB(e[1])) || a.MJ(a.MC(e[2])) || a.MJ(a.MC(e[3])) || a.MJ(a.MC(e[4])) || a.MJ(a.MC(e[5])) || a.MJ(a.MC(e[6])) || a.MJ(a.MC(e[7]))) {
if (n += t[1], a.MJ(a.track_experiment("HDDPBDDLfOFYBLcVT"))) {
n += t[2];
var s = "";
s += t[3], a.MJ(a.MB(e[1]) + "" == "missing-checkout") || a.MJ(a.MC(e[2])) ? s += [ t[4], a.ME(t[5], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "missing-checkin") || a.MJ(a.MC(e[3])) ? s += [ t[4], a.ME(t[6], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "past") || a.MJ(a.MC(e[4])) ? s += [ t[4], a.ME(t[7], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "checkin_date_to_far_in_the_future") || a.MJ(a.MC(e[5])) ? s += [ t[4], a.ME(t[8], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "negative-period") || a.MJ(a.MC(e[6])) ? s += [ t[4], a.ME(t[9], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "exceeds-max-los") || a.MJ(a.MC(e[7])) ? s += [ t[4], a.ME(t[10], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1])) && (s += [ t[4], a.ME(t[6], a.MB, a.MN, null), t[3] ].join("")), s += t[11], a.MN(e[0], s), n += t[12], i.unshift({
fe_banner__close_button:t[54],
fe_banner__color_scheme:t[55],
fe_banner__message_text:a.MB(e[0])
}), n = r(n), i.shift(), n += t[1];
} else n += t[56], a.MJ(a.MB(e[1]) + "" == "missing-checkout") || a.MJ(a.MC(e[2])) ? n += [ t[4], a.ME(t[5], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "missing-checkin") || a.MJ(a.MC(e[3])) ? n += [ t[4], a.ME(t[6], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "past") || a.MJ(a.MC(e[4])) ? n += [ t[4], a.ME(t[7], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "checkin_date_to_far_in_the_future") || a.MJ(a.MC(e[5])) ? n += [ t[4], a.ME(t[8], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "negative-period") || a.MJ(a.MC(e[6])) ? n += [ t[4], a.ME(t[9], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1]) + "" == "exceeds-max-los") || a.MJ(a.MC(e[7])) ? n += [ t[4], a.ME(t[10], a.MB, a.MN, null), t[3] ].join("") :a.MJ(a.MB(e[1])) && (n += [ t[4], a.ME(t[6], a.MB, a.MN, null), t[3] ].join("")), n += t[57];
n += t[53];
}
return n += t[15], _r_(n);
}
function r(i) {
if (_i_("4ab:210"), i += t[13], a.MJ(a.MB(e[8]) + "" == "red") && a.MJ(a.MC(e[9]) + "" == "www") && a.MJ(a.track_experiment("YQecaQJKDKGHVPSDDaXGHNNALFUWe")) && (i += t[14], a.MN("fe_banner__color_scheme_classes", "_a11y"), i += t[15]), i += t[16], a.MD(e[34])) {
i += t[17], a.MD(e[11]) && (i += t[18], a.MN(e[10], [ t[19], a.MB(e[11]), t[20], a.MB(e[12]), t[21] ].join("")), i += t[14]), i += t[17], a.MD(e[13]) && (i += t[18], a.MN(e[10], [ a.MB(e[10]), t[22], a.MB(e[13]), t[20], a.MB(e[14]), t[21] ].join("")), i += t[14]), i += t[17], a.MD(e[15]) && (i += t[18], a.MN(e[10], [ a.MB(e[10]), t[22], a.MB(e[15]), t[20], a.MB(e[16]), t[21] ].join("")), i += t[14]), i += t[17], a.MD(e[17]) && (i += t[18], a.MN(e[10], [ a.MB(e[10]), t[22], a.MB(e[17]), t[20], a.MB(e[18]), t[21] ].join("")), i += t[14]), i += t[17], a.MD(e[19]) && (i += t[18], a.MN(e[10], [ a.MB(e[10]), t[22], a.MB(e[19]), t[20], a.MB(e[20]), t[21] ].join("")), i += t[14]), i += t[17], a.MD(e[21]) && (i += t[23]), i += t[24];
var n = a.MB(e[22]);
a.MJ(n + "" == "small") && (i += t[25]), (a.MJ(a.MB(e[23])) || a.MJ(a.MB(e[24])) || a.MJ(a.MB(e[25]))) && (i += t[26]), a.MD(e[26]) && (i += t[27]), a.MJ(a.MB(e[8])) && (i += [ t[28], a.MC(e[8]), a.MC(e[27]), t[29] ].join("")), a.MJ(a.MB(e[23])) && a.MJ(a.MB(e[28])) && (i += [ t[30], a.MC(e[28]), t[29] ].join("")), a.MJ(a.MC(e[9]) + "" == "www") && a.MJ(1 == a.track_experiment("HBaMEAbXDMUBdOYZbKZTSfXPRQYO")) ? a.MJ(a.MC(e[29]) + "" == "book") && (i += t[31]) :a.MJ(a.MC(e[9]) + "" == "www") && a.MJ(2 == a.track_experiment("HBaMEAbXDMUBdOYZbKZTSfXPRQYO")) ? (i += t[32], a.MJ(a.MC(e[29]) + "" == "book") && (i += t[31])) :a.MJ(a.MC(e[29]) + "" == "book") && (i += t[33]), i += [ a.MC(e[30]), t[34] ].join(""), a.MD(e[31]) && (i += [ t[35], a.MC(e[31]), t[36] ].join("")), a.MD(e[10]) && (i += [ a.MC(e[10]), t[29] ].join("")), i += t[37], a.MD(e[23]) ? i += [ t[38], a.MC(e[23]), t[39] ].join("") :a.MD(e[24]) ? i += [ t[40], a.MC(e[24]), t[41] ].join("") :a.MD(e[25]) && (i += [ t[42], a.MC(e[25]), t[43] ].join("")), a.MD(e[32]) && (i += t[44]), a.MD(e[33]) && (i += [ t[45], a.MC(e[33]), t[46] ].join("")), a.MD(e[34]) && (i += [ t[47], a.MC(e[34]), t[48] ].join("")), a.MD(e[32]) && (i += [ t[49], a.MC(e[32]), t[48] ].join("")), a.MD(e[32]) && (i += t[50]), a.MD(e[26]) && (i += t[51]), i += t[50], a.MD(e[21]) && (i += t[50]), i += t[15];
}
return i += t[52], a.MN(e[8], void 0), i += t[15], a.MN(e[23], void 0), i += t[15], a.MN(e[24], void 0), i += t[15], a.MN(e[25], void 0), i += t[15], a.MN(e[28], void 0), i += t[15], a.MN(e[33], void 0), i += t[15], a.MN(e[34], void 0), i += t[15], a.MN(e[32], void 0), i += t[15], a.MN(e[26], void 0), i += t[15], a.MN(e[31], void 0), i += t[15], a.MN(e[30], void 0), i += t[15], a.MN(e[22], void 0), i += t[53], a.MN(e[11], void 0), i += t[15], a.MN(e[12], void 0), i += t[15], a.MN(e[13], void 0), i += t[15], a.MN(e[14], void 0), i += t[15], a.MN(e[15], void 0), i += t[15], a.MN(e[16], void 0), i += t[15], a.MN(e[17], void 0), i += t[15], a.MN(e[18], void 0), i += t[15], a.MN(e[19], void 0), i += t[15], a.MN(e[20], void 0), i += t[53], a.MN(e[27], void 0), i += t[53], a.MN(e[10], void 0), i += t[15], a.MN("fe_banner__banners_count", a.MI(a.MB(e[35])) + a.MI(1)), i += t[53], a.MJ(a.MC(e[29]) + "" == "book") && a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? i += t[15] :a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (i += t[15]), _r_(i);
}
return n += t[0], n = s(n), n += t[15], _r_(n);
});
}()), B.define("component/search/searchbox/submit-button", function(t, e, i) {
_i_("4ab:26");
var n = t("component"), a = t("search/searchbox/model"), s = t("et"), r = t("events");
i.exports = n.extend({
init:function() {
_i_("4ab:378"), this.model = a.getInstance(this.$el.data("sb-id") || "main"), this.model.use("destination"), this.$helper = this.$el.find(".sb-submit-helper");
var t = "UBKeJbLYbOMFcZSHT";
void 0 !== this.model.getFlag(t) && this.model.on("change", this.updatePropertyCount.bind(this, this.model.getFlag(t))), this.handleLoadingIndicator(), _r_();
},
handleLoadingIndicator:function() {
_i_("4ab:379");
var t = this.$el, e = this.$el.find(".sb-submit__loader_icon");
if (!e.length) return _r_(!1);
r.on("SearchBox::Submit__Success", function() {
_i_("4ab:485"), t.addClass("sb-searchbox__button--in-progress"), e.removeClass("g-hidden"), _r_();
}), _r_();
},
setHelperText:function(t) {
_i_("4ab:380"), 0 === t.length ? this.$helper.removeClass("-visible").html("") :this.$helper.html(t).addClass("-visible"), _r_();
},
updatePropertyCount:function(t, e) {
_i_("4ab:381");
var i, n, a = 0;
"dates" === e.group && e.checkout ? (n = this.model.destination.get(), n && n.nr_hotels && (a = n.nr_hotels)) :"destination" === e.group && (i = this.model.dates.get(), i && i.checkin && i.checkout && i.checkin.toString() && i.checkout.toString() && (n = this.model.destination.get(), n && n.nr_hotels && (a = n.nr_hotels)));
var r = "UBKeJbLYbOMFcZSHT";
if (a) switch (s.stage(r, 1), B.env.b_action) {
case "index":
s.stage(r, 2);
break;

case "hotel":
s.stage(r, 3);
break;

case "searchresults":
s.stage(r, 4);
}
if (a && t) if (2 == this.model.getFlag(r)) {
var o = B.jstmpl.translations("sxp_sbox_num_properties_left_of_cta_v2", a, {
num_properties:a
});
this.showCounterText(o);
} else {
var o = B.jstmpl.translations("sxp_sbox_num_properties_on_cta_v1", a, {
num_properties:a
});
this.setHelperText(o);
}
_r_();
},
showCounterText:function(t) {
_i_("4ab:382"), this.$counterText && this.$counterText.length || (this.$counterText = $("<p/>").addClass("sb-searchbox__property_count").prependTo(this.$el.parent().find(".sb-searchbox__map_trigger_wrapper"))), this.$counterText.html(t), _r_();
}
}), _r_();
}), B.define("component/search/destination/country-only", function(t, e, i) {
"use strict";
_i_("4ab:27");
var n = t("component"), a = t("search/searchbox/model"), s = t("read-data-options");
i.exports = n.extend({
init:function() {
_i_("4ab:383"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = a.getInstance(this.options.modelId), this.model.use("destination"), this.model.on("change", this.modelChange.bind(this)), this.$onlyCurrentCountry = this.$el.find("[data-input]"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("4ab:384");
var t = this.$onlyCurrentCountry.is(":checked");
this.model.destination.initOnlyCurrentCountry(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:385"), !t || !t.onlyCurrentCountry) return _r_();
var e = this.$onlyCurrentCountry.is(":checked"), i = this.model.destination.getOnlyCurrentCountry();
e != i && this.$onlyCurrentCountry.prop("checked", i), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:386"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
}
}), _r_();
}), B.define("component/search/group/group", function(t, e, i) {
_i_("4ab:28"), booking.jstmpl("search_group_group_html", function() {
_i_("4ab:125");
var t, e = [ "\n		", "\n", '\n	<div data-et-view="customGoal:', ':1"></div>\n', ':2"></div>\n', ':3"></div>\n', '\n\n<div class="u-clearfix', " sb-group--flex-compact", " sb-group--flex-wide", " sb-group-reorder", '" data-render>\n\n', "\n\n", "\n	", "\n\n\n\n", '\n		<input type="hidden" name="', '" value="', '">\n	', "\n			", '\n		<input type="hidden" name="room', '">\n		', "\n\n\n	", "\n\n	", "\n\n		\n		", '\n			<div class="sb-group__field sb-group__field-rooms">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="1" data-max-value="', '">\n					<input type="hidden" name="no_rooms" id="no_rooms" value="', '" data-group-rooms-count data-input>\n					<button type="button" class="sb-group__input__button sb-group__input__button--left" data-decrement', " disabled", '>-</button>\n					<span class="sb-group__input__label">', "/private/search_box_room_filter/name", '</span>\n					<button type="button" class="sb-group__input__button sb-group__input__button--right" data-increment', ">+</button>\n				</div>\n			</div>\n		\n		", '\n			<div class="sb-group__field-a sb-group__field-rooms">\n				<label class="sb-searchbox__label -small sb-group__label" for="no_rooms">', "/private/sbox_rooms/name", '</label>\n				<div class="sb-group__input">\n					', '\n	<select name="no_rooms" id="no_rooms" data-group-rooms-count ', 'class="sb-searchbox__input sb-group__input__select"', "1", ">\n		", '\n			<option value="', '" ', 'selected="selected"', ">\n\n			\n				", "\n					", "/private/loc_search_box_room_filter/name", "\n				", "\n			\n\n			</option>\n		", "\n	</select>\n	", '\n					<i class="sb-group__input__chevron bicon-downchevron"></i>\n				</div>\n			</div>\n		', '\n			<div class="sb-group__field-a -b sb-group__field-rooms">\n				<div class="sb-group__input">\n					', '\n			<div class="sb-group__field sb-group__field-rooms">\n				<label class="sb-searchbox__label sb-group__field__label ', "-inline", ' -small" for="no_rooms">', "</label>\n				", "\n			</div>\n		", '\n		<input type="hidden" name="no_rooms" value="', '\n			<div class="sb-group__field">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="1" data-max-value="', '">\n					<input type="hidden" name="group_adults" id="group_adults" value="', '" data-group-adults-count data-input>\n					<button type="button" class="sb-group__input__button sb-group__input__button--left" data-decrement', "/private/search_box_adults_filter/name", '\n			<div class="sb-group__field-a">\n				<label class="sb-searchbox__label -small sb-group__label" for="group_adults">\n					', "/private/sbox_adults/name", "/private/bbt_searchbox_travellers/name", '\n				</label>\n				<div class="sb-group__input">\n					', '\n			<select name="group_adults" id="group_adults" data-group-adults-count ', " data-should-track-", ' data-tooltip="', '\n<div class="sb-searchbox-children-tooltip">\n    <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n    <h4 class="sb-searchbox-children-tooltip__title">', "/private/gs_hp_model_header/name", '</h4>\n    <p class="sb-searchbox-children-tooltip__text">', "/private/gs_hp_model_desc/name", "</p>\n</div>\n", '"', ">\n				", '\n					<option value="', ">\n\n					\n						", "\n						", "	\n						", "	\n\n						", "\n							", "/private/loc_search_box_adults_filter/name", "\n					\n\n					</option>\n				", "\n			</select>\n		", '\n			<div class="sb-group__field-a -b">\n				<div class="sb-group__input">\n					', '\n			<div class="sb-group__field">\n				<label class="sb-searchbox__label sb-group__field__label ', ' -small" for="group_adults">\n					', "\n				</label>\n				", '\n		<input type="hidden" name="group_adults" value="', '\n			<div class="sb-group__field">\n				<div class="sb-searchbox__input sb-group__input__spinner" data-component="core/number-input-spinner" data-min-value="0" data-max-value="', '">\n					<input type="hidden" name="group_children" id="group_children" value="', '" data-component="search/group/children-ages-tooltip" data-group-children-count data-input>\n					<button type="button" class="sb-group__input__button  sb-group__input__button--left" data-decrement', '>-</button>\n					<span class="sb-group__input__label">\n						', "/private/search_box_no_children_filter_default/name", "/private/search_box_children_filter/name", '\n					</span>\n					<button type="button" class="sb-group__input__button sb-group__input__button--right" data-increment', '\n			<div class="sb-group__field-a">\n				<label class="sb-searchbox__label -small sb-group__label" for="group_children">', "/private/sbox_children/name", '\n			<select name="group_children" id="group_children" data-group-children-count data-component="search/group/children-ages-tooltip" ', "/private/gs_index_model_header_family/name", "/private/gs_index_model_desc_family/name", ">\n\n					\n					", "/private/loc_search_box_no_children_filter_default/name", "/private/loc_search_box_children_filter/name", '\n			<div class="sb-group__field ', "ex-es-fx", '">\n				<label class="sb-searchbox__label sb-group__field__label ', ' -small" for="group_children">\n				', "/private/sbox_children_clarification/name", "&nbsp;", '\n			<div class="sb-group__children__field', " -a", '">\n				', '\n				<label class="sb-searchbox__label -small sb-group__children__label">\n					', "/private/bh_gsb_search_box_checkout_age/name", "/private/bh_gsb_search_box_checkout_age_plural/name", "/private/loc_sbox_children_age_singular/name", "/private/loc_sbox_children_age_plural/name", "\n\n				", '\n							<div class="sb-group__input">\n						', "\n						<select ", ' name="age" data-group-child-age="', '">\n							<option class="sb_child_ages_empty_zero" value="12 ">', "\n								", "\n									", "/private/gsb_search_box_age_on_date/name", "/private/gsb_search_box_age_no_date/name", "</option>\n							", '\n								<option value="', ">\n									", "\n										", "\n											", "/private/gsb_index_sb_child_age_under/name", "/private/gsb_index_sb_child_age/name", "/private/loc_counter_word_child_age_cjk/name", "\n								</option>\n							", "\n						</select>\n						", '\n								<i class="sb-group__input__chevron bicon-downchevron"></i>\n							</div>\n						', "\n\n</div>\n" ], i = [ "b_search_config", "fe_sb_width", "fe_sb_bbtool_searchbox", "b_browser", "fe_sb_state_traveller", "fe_sb_group_always_expanded", "fe_sb_include_traveller", "b_action", "b_predicted_traveller_type", "fe_action_is_landing_page", "fe_sb_state_room_distribution", "fe_sb_state_rooms", "fe_room_parameter", "aux_counter", "fe_sb_group_max_rooms", "fe_sb_state_number_of_rooms", "b_lang_is_cjk", "fe_text", "fe_sb_group_block_labels", "fe_new", "fe_sb_group_rooms_hide", "fe_sb_hide_rooms_select", "fe_sb_group_max_adults", "fe_sb_state_number_of_adults", "fe_sb_group_use_adults_label", "fe_adults_children_tooltip", "fe_sb_group_adults_hide", "fe_sb_group_max_children", "fe_sb_state_number_of_children", "fe_sb_group_children_hide", "fe_sb_group_localized_short_date", "fe_sb_state_checkout", "fe_children_ages", "fe_child_i", "fe_sb_group_max_children_age", "fe_sb_state_children_ages" ];
return _r_(function(n) {
_i_("4ab:443");
var a = "", s = this.fn;
function r(a) {
return _i_("4ab:461"), a += e[12], s.MK(s.MB(i[20]) || s.MB(i[21])) ? (a += e[22], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (a += [ e[23], s.MC(i[14]), e[24], s.MC(i[15]), e[25] ].join(""), s.MJ(1 == s.MB(i[15])) && (a += e[26]), a += [ e[27], (n.unshift({
num_rooms:s.MB(i[15])
}), t = s.ME(e[28], s.MB, s.MN, s.MO(s.MC(i[15]), null, e[28])), n.shift(), t), e[29] ].join(""), s.MJ(s.MB(i[15]) == s.MB(i[14])) && (a += e[26]), a += e[30]) :s.MJ(1 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += [ e[31], s.ME(e[32], s.MB, s.MN, null), e[33] ].join(""), n.unshift({
fe_new:e[36]
}), a = l(a), n.shift(), a += e[47]) :s.MJ(2 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += e[48], n.unshift({
fe_new:e[36],
fe_text:e[36]
}), a = h(a), n.shift(), a += e[47]) :(a += e[49], s.MD(i[18]) || (a += e[50]), a += [ e[51], s.ME(e[32], s.MB, s.MN, null), e[52] ].join(""), a = _(a), a += e[53]), a += e[12]) :a += [ e[54], s.F.entities(s.MC(i[15])), e[16] ].join(""), a += e[12], _r_(a);
}
function o(a) {
if (_i_("4ab:462"), a += e[1], s.MJ(s.MC(i[0])) && s.MJ(s.MC(i[0]).b_nr_rooms_needed > 1) && (a += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[3] ].join("")), a += e[1], s.MJ(s.MC(i[0])) && s.MJ(s.MC(i[0]).b_adults_total > 2) && (a += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[4] ].join("")), a += e[1], s.MJ(s.MC(i[0])) && s.MJ(s.MC(i[0]).b_children_total > 0) && (a += [ e[2], "bHVSfPTGTfNdSPeXJdFGC", e[5] ].join("")), a += e[6], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (a += s.MJ(/small/.test(s.MB(i[1]))) ? e[7] :e[8]), s.MJ(s.MB(i[1]) + "" == "small") && s.MJ(s.track_experiment("bHVSfHXIFTdZRSdSHNYO")) && (a += e[9]), a += e[10], s.MN("fe_sb_group_max_rooms", 30), a += e[1], s.MN("fe_sb_group_max_pets", 10), a += e[1], s.MN("fe_sb_group_max_adults", 30), a += e[1], s.MN("fe_sb_group_max_children", 10), a += e[1], s.MN("fe_sb_group_max_children_age", 17), a += e[11], s.MJ(s.MC(i[3])) && s.MJ(s.MC(i[3]) + "" != "msie") && s.MJ(s.track_experiment_stage("search_sb_groups_new_style", 1)), a += e[1], s.MJ(s.MC(i[3])) && s.MJ(s.MC(i[3]) + "" == "msie") && s.MJ(s.track_experiment_stage("search_sb_groups_new_style", 2)), a += e[1], s.MJ(s.MC(i[3])) && s.MJ(s.MC(i[3]) + "" != "msie") && s.MK(s.MB(i[2])) && s.MJ(s.track_experiment_stage("gs_sb_plus_minus_controls", 1)), a += e[1], s.MJ(s.MC(i[3])) && s.MJ(s.MC(i[3]) + "" == "msie") && s.MK(s.MB(i[2])) && s.MJ(s.track_experiment_stage("gs_sb_plus_minus_controls", 2)), a += e[1], s.MK(s.MB(i[2])) && s.MJ(/small/.test(s.MB(i[1]))) && s.MJ(s.track_experiment_stage("gs_sb_plus_minus_controls", 3)) ? a += e[12] :s.MK(s.MB(i[2])) && s.MJ(s.track_experiment_stage("gs_sb_plus_minus_controls", 4)) && (a += e[1]), a += e[13], s.MK(s.MB(i[5])) && s.MJ(s.MB(i[6])) && (a += e[12], s.MJ(s.MB(i[4]) + "" == "couple") ? (a += e[0], s.MN("fe_sb_group_rooms_hide", 1), a += e[0], s.MN("fe_sb_group_adults_hide", 1), a += e[0], s.MN("fe_sb_group_children_hide", 1), a += e[12]) :s.MJ(s.MB(i[4]) + "" == "solo") ? (a += e[0], s.MN("fe_sb_group_rooms_hide", 1), a += e[0], s.MN("fe_sb_group_adults_hide", 1), a += e[0], s.MN("fe_sb_group_children_hide", 1), a += e[12]) :s.MJ(s.MB(i[4]) + "" == "business") && (a += e[0], s.MN("fe_sb_group_use_adults_label", 1), a += e[0], s.MN("fe_sb_group_children_hide", 1), a += e[12]), a += e[1]), a += e[11], s.MN("fe_sb_hide_rooms_select", s.MJ(s.MC(i[7]) + "" == "searchresults") && (s.MC(i[0]) && s.MJ(1 == s.MC(i[0]).b_adults_total) && s.MK(s.MC(i[0]).b_is_group_search) || s.MJ(s.MC(i[8]) + "" == "solo")) && s.track_experiment("bHVSfZKCBZAebdCXAYXHUVSDFPKe")), a += e[11], s.MN("fe_action_is_landing_page", s.MJ(s.MC(i[7]) + "" == "city") || s.MJ(s.MC(i[7]) + "" == "district") || s.MJ(s.MC(i[7]) + "" == "airport") || s.MJ(s.MC(i[7]) + "" == "landmark") || s.MJ(s.MC(i[7]) + "" == "country") || s.MJ(s.MC(i[7]) + "" == "region")), a += e[11], s.MJ(s.MC(i[7]) + "" == "index") && s.MJ(s.track_experiment_stage("gs_sb_reorder_group_options", 1)), a += e[1], s.MJ(s.MC(i[7]) + "" == "searchresults") && s.MJ(s.track_experiment_stage("gs_sb_reorder_group_options", 2)), a += e[1], s.MJ(s.MC(i[7]) + "" == "hotel") && s.MJ(s.track_experiment_stage("gs_sb_reorder_group_options", 3)), a += e[1], s.MJ(s.MB(i[9])) && s.MJ(s.track_experiment_stage("gs_sb_reorder_group_options", 4)), a += e[1], s.MJ(s.MC(i[7]) + "" == "mydashboard") && s.MJ(s.track_experiment_stage("gs_sb_reorder_group_options", 5)), a += e[11], s.MD(i[10])) {
a += e[12];
var o = s.MC(i[10]) || [];
n.unshift({
fe_room:null
});
for (var _, l = 1, h = o.length; h >= l; l++) n[0].fe_room = _ = o[l - 1], a += [ e[14], s.F.entities((_ || {}).name), e[15], s.F.entities((_ || {}).value), e[16] ].join("");
n.shift(), a += e[1];
} else if (s.MD(i[11])) {
a += e[12], s.MN("aux_counter", 1), a += e[12];
var o = s.MC(i[11]) || [];
n.unshift({
fe_room:null
});
for (var _, l = 1, h = o.length; h >= l; l++) {
n[0].fe_room = _ = o[l - 1], a += e[0], s.MN("fe_room_parameter", ""), a += e[0];
var f = l, b = o, m = h, g = v, o = s.seq(1, _.b_adults) || [];
n.unshift({
i:null
});
for (var v, l = 1, h = o.length; h >= l; l++) n[0].i = v = o[l - 1], a += e[17], s.MN("fe_room_parameter", s.MB(i[12]) + "" + (s.MB(i[12]) ? "," :"") + "A"), a += e[0];
n.shift(), l = f, o = b, h = m, v = g, a += e[0];
var f = l, b = o, m = h, M = y, o = (_ || {}).b_children_ages || [];
n.unshift({
fe_child_age:null
});
for (var y, l = 1, h = o.length; h >= l; l++) n[0].fe_child_age = y = o[l - 1], a += e[17], s.MN("fe_room_parameter", s.MB(i[12]) + "" + (s.MB(i[12]) ? "," :"") + (y || "0")), a += e[0];
n.shift(), l = f, o = b, h = m, y = M, a += [ e[18], s.F.entities(s.MC(i[13])), e[15], s.F.entities(s.MC(i[12])), e[19] ].join(""), s.MN("aux_counter", s.MI(s.MB(i[13])) + s.MI(1)), a += e[12];
}
n.shift(), a += e[1];
}
if (a += e[20], a += e[21], a += e[21], s.MJ(s.MB(i[1])) && s.MJ(s.track_experiment("bHVSfHXIFTdZRSdSHNYO")) || (a += e[0], a = r(a), a += e[12]), a += e[21], s.MN("fe_adults_children_tooltip", s.MC(i[0]) && (s.MJ(s.MC(i[0]).b_adults_total <= 2) && s.MJ(s.MC(i[8]) + "" == "group") || s.MK(s.MC(i[0]).b_children_total) && s.MJ(s.MC(i[8]) + "" == "family"))), a += e[21], s.MK(s.MB(i[26])) ? (a += e[0], a += e[22], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (a += [ e[55], s.MC(i[22]), e[56], s.MC(i[23]), e[57] ].join(""), s.MJ(1 == s.MB(i[23])) && (a += e[26]), a += [ e[27], (n.unshift({
num_adults:s.MB(i[23])
}), t = s.ME(e[58], s.MB, s.MN, s.MO(s.MC(i[23]), null, e[58])), n.shift(), t), e[29] ].join(""), s.MJ(s.MB(i[23]) == s.MB(i[22])) && (a += e[26]), a += e[30]) :s.MJ(1 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += e[59], a += s.MD(i[24]) ? s.ME(e[61], s.MB, s.MN, null) :s.ME(e[60], s.MB, s.MN, null), a += e[62], n.unshift({
fe_new:e[36]
}), a = u(a), n.shift(), a += e[47]) :s.MJ(2 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += e[82], n.unshift({
fe_new:e[36],
fe_text:e[36]
}), a = u(a), n.shift(), a += e[47]) :(a += e[83], s.MD(i[18]) || (a += e[50]), a += e[84], a += s.MD(i[24]) ? s.ME(e[61], s.MB, s.MN, null) :s.ME(e[60], s.MB, s.MN, null), a += e[85], a = u(a), a += e[53]), a += e[12]) :a += [ e[86], s.F.entities(s.MC(i[23])), e[16] ].join(""), a += e[21], s.MK(s.MB(i[29])) && (a += e[0], a += e[22], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (a += [ e[87], s.MC(i[27]), e[88], s.MC(i[28]), e[89] ].join(""), s.MJ(0 == s.MB(i[28])) && (a += e[26]), a += e[90], a += s.MJ(0 == s.MB(i[28])) ? [ e[78], s.ME(e[91], s.MB, s.MN, null), e[75] ].join("") :[ e[78], (n.unshift({
num_kids:s.MB(i[28])
}), t = s.ME(e[92], s.MB, s.MN, s.MO(s.MC(i[28]), null, e[92])), n.shift(), t), e[75] ].join(""), a += e[93], s.MJ(s.MB(i[28]) == s.MB(i[27])) && (a += e[26]), a += e[30]) :s.MJ(1 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += [ e[94], s.ME(e[95], s.MB, s.MN, null), e[33] ].join(""), n.unshift({
fe_new:e[36]
}), a = p(a), n.shift(), a += e[47]) :s.MJ(2 == s.track_experiment("PVSfZRSdUDDDBMURET")) ? (a += e[82], n.unshift({
fe_new:e[36],
fe_text:e[36]
}), a = p(a), n.shift(), a += e[47]) :(a += e[102], s.MJ(s.track_experiment("ZOBMJUYOAAREaQXMDMWJINFUKBQVIKe")) && (a += e[103]), a += e[104], s.MD(i[18]) || (a += e[50]), a += e[105], a += s.MJ(s.track_experiment("ZOBMJUYOAAREaQXMDMWJINFUKBQVIKe")) ? [ e[42], (n.unshift({
nbsp:e[107]
}), t = s.ME(e[106], s.MB, s.MN, null), n.shift(), t), e[44] ].join("") :[ e[42], s.ME(e[95], s.MB, s.MN, null), e[44] ].join(""), a += e[85], a = p(a), a += e[53]), a += e[12]), a += e[21], s.MJ(s.MB(i[1]) + "" == "medium") && s.MJ(s.track_experiment("bHVSfHXIFTdZRSdSHNYO")) && (a += e[0], a = r(a), a += e[12]), a += e[21], s.MK(s.MB(i[29]))) {
if (a += e[0], s.MJ(s.MB(i[28])) && (s.MJ(s.MB(i[11])) || s.MJ(s.MB(i[35])))) {
if (a += e[108], s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) && (a += e[109]), a += e[110], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) || (a += e[111], s.MD(i[31]) ? (s.MN(i[30], s.DATE(s.MB(i[31]), "short_date", "", "", "")), a += s.MJ(1 == s.MB(i[28])) ? [ (n.unshift({
date:s.MB(i[30])
}), t = s.ME(e[112], s.MB, s.MN, null), n.shift(), t), e[1] ].join("") :[ (n.unshift({
date:s.MB(i[30])
}), t = s.ME(e[113], s.MB, s.MN, null), n.shift(), t), e[1] ].join("")) :a += s.MJ(1 == s.MB(i[28])) ? [ s.ME(e[114], s.MB, s.MN, null), e[1] ].join("") :[ s.ME(e[115], s.MB, s.MN, null), e[1] ].join(""), a += e[85]), a += e[116], s.MN("fe_child_i", 0), a += e[116], a += e[116], s.MD(i[35])) a += e[42], n.unshift({
fe_children_ages:s.MB(i[35])
}), a = c(a), n.shift(), a += e[44]; else if (s.MD(i[11])) {
a += e[42];
var o = s.MC(i[11]) || [];
n.unshift({
fe_room:null
});
for (var _, l = 1, h = o.length; h >= l; l++) n[0].fe_room = _ = o[l - 1], a += e[75], n.unshift({
fe_children_ages:s.MG((_ || {}).b_children_ages)
}), a = d(a), n.shift(), a += e[42];
n.shift(), a += e[44];
}
a += e[53];
}
a += e[12];
}
return a += e[21], s.MJ(s.MB(i[1]) + "" == "small") && s.MJ(s.track_experiment("bHVSfHXIFTdZRSdSHNYO")) && (a += e[0], a = r(a), a += e[12]), a += e[136], _r_(a);
}
function _(a) {
_i_("4ab:463"), a += e[34], s.MD(i[19]) && (a += e[35]), a += e[37];
var r = s.seq(1, s.MB(i[14])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ e[38], s.F.entities(o.value), e[39] ].join(""), s.MJ(s.MB(i[15]) == o.value) && (a += e[40]), a += e[41], s.MJ(s.MC(i[16])) && s.MJ(s.track_experiment("YdVGPWVSfZSPcJLSRe")) ? a += [ e[42], (n.unshift({
num_rooms:o.value
}), t = s.ME(e[43], s.MB, s.MN, s.MO(o.value, null, e[43])), n.shift(), t), e[44] ].join("") :(a += e[42], s.MD(i[17]) ? (n.unshift({
num_rooms:o.value
}), t = s.ME(e[28], s.MB, s.MN, s.MO(o.value, null, e[28])), n.shift(), a += t) :a += o.value, a += e[44]), a += e[45];
return n.shift(), a += e[46], _r_(a);
}
function l(a) {
_i_("4ab:464"), a += e[34], s.MJ(e[36]) && (a += e[35]), a += e[37];
var r = s.seq(1, s.MB(i[14])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ e[38], s.F.entities(o.value), e[39] ].join(""), s.MJ(s.MB(i[15]) == o.value) && (a += e[40]), a += e[41], s.MJ(s.MC(i[16])) && s.MJ(s.track_experiment("YdVGPWVSfZSPcJLSRe")) ? a += [ e[42], (n.unshift({
num_rooms:o.value
}), t = s.ME(e[43], s.MB, s.MN, s.MO(o.value, null, e[43])), n.shift(), t), e[44] ].join("") :(a += e[42], s.MD(i[17]) ? (n.unshift({
num_rooms:o.value
}), t = s.ME(e[28], s.MB, s.MN, s.MO(o.value, null, e[28])), n.shift(), a += t) :a += o.value, a += e[44]), a += e[45];
return n.shift(), a += e[46], _r_(a);
}
function h(a) {
_i_("4ab:465"), a += e[34], s.MJ(e[36]) && (a += e[35]), a += e[37];
var r = s.seq(1, s.MB(i[14])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ e[38], s.F.entities(o.value), e[39] ].join(""), s.MJ(s.MB(i[15]) == o.value) && (a += e[40]), a += e[41], s.MJ(s.MC(i[16])) && s.MJ(s.track_experiment("YdVGPWVSfZSPcJLSRe")) ? a += [ e[42], (n.unshift({
num_rooms:o.value
}), t = s.ME(e[43], s.MB, s.MN, s.MO(o.value, null, e[43])), n.shift(), t), e[44] ].join("") :(a += e[42], s.MJ(e[36]) ? (n.unshift({
num_rooms:o.value
}), t = s.ME(e[28], s.MB, s.MN, s.MO(o.value, null, e[28])), n.shift(), a += t) :a += o.value, a += e[44]), a += e[45];
return n.shift(), a += e[46], _r_(a);
}
function d(a) {
_i_("4ab:466"), a += e[42];
var r = c, o = h, _ = u, l = d, h = s.MC(i[32]) || [];
n.unshift({
fe_child_age:null
});
for (var d, c = 1, u = h.length; u >= c; c++) {
n[0].fe_child_age = d = h[c - 1], a += e[75], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[117]), a += e[118], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[35]), a += [ e[119], s.F.entities(s.MC(i[33])), e[120] ].join(""), s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (a += e[121], s.MD(i[31]) ? (a += e[122], s.MN(i[30], s.DATE(s.MB(i[31]), "short_date", "", "", "")), a += [ e[122], (n.unshift({
checkout_date:s.MB(i[30])
}), t = s.ME(e[123], s.MB, s.MN, null), n.shift(), t), e[121] ].join("")) :a += [ e[122], s.ME(e[124], s.MB, s.MN, null), e[121] ].join(""), a += e[78]), a += e[125];
var p = c, f = h, b = u, m = g, h = s.seq(0, s.MB(i[34])) || [];
n.unshift({
i:null
});
for (var g, c = 1, u = h.length; u >= c; c++) n[0].i = g = h[c - 1], a += [ e[126], s.F.entities(g.value), e[39] ].join(""), s.MJ(d + "" != "") && s.MJ(d + "" == "" + g.value) && (a += e[40]), a += e[127], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (a += e[128], a += s.MJ(g.value + "" == "0") ? [ e[129], s.ME(e[130], s.MB, s.MN, null), e[128] ].join("") :[ e[129], (n.unshift({
num:s.MG((g || {}).value)
}), t = s.ME(e[131], s.MB, s.MN, s.MO((g || {}).value, null, e[131])), n.shift(), t), e[128] ].join(""), a += e[122]) :(a += [ e[128], g.value ].join(""), s.MD(i[16]) && (a += s.ME(e[132], s.MB, s.MN, null)), a += e[122]), a += e[133];
n.shift(), c = p, h = f, u = b, g = m, a += e[134], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[135]), a += e[75], s.MN("fe_child_i", s.MI(s.MB(i[33])) + s.MI(1)), a += e[42];
}
return n.shift(), c = r, h = o, u = _, d = l, a += e[44], _r_(a);
}
function c(a) {
_i_("4ab:467"), a += e[42];
var r = s.MC(i[32]) || [];
n.unshift({
fe_child_age:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) {
n[0].fe_child_age = o = r[_ - 1], a += e[75], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[117]), a += e[118], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[35]), a += [ e[119], s.F.entities(s.MC(i[33])), e[120] ].join(""), s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) && (a += e[121], s.MD(i[31]) ? (a += e[122], s.MN(i[30], s.DATE(s.MB(i[31]), "short_date", "", "", "")), a += [ e[122], (n.unshift({
checkout_date:s.MB(i[30])
}), t = s.ME(e[123], s.MB, s.MN, null), n.shift(), t), e[121] ].join("")) :a += [ e[122], s.ME(e[124], s.MB, s.MN, null), e[121] ].join(""), a += e[78]), a += e[125];
var h = _, d = r, c = l, u = p, r = s.seq(0, s.MB(i[34])) || [];
n.unshift({
i:null
});
for (var p, _ = 1, l = r.length; l >= _; _++) n[0].i = p = r[_ - 1], a += [ e[126], s.F.entities(p.value), e[39] ].join(""), s.MJ(o + "" != "") && s.MJ(o + "" == "" + p.value) && (a += e[40]), a += e[127], s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC")) ? (a += e[128], a += s.MJ(p.value + "" == "0") ? [ e[129], s.ME(e[130], s.MB, s.MN, null), e[128] ].join("") :[ e[129], (n.unshift({
num:s.MG((p || {}).value)
}), t = s.ME(e[131], s.MB, s.MN, s.MO((p || {}).value, null, e[131])), n.shift(), t), e[128] ].join(""), a += e[122]) :(a += [ e[128], p.value ].join(""), s.MD(i[16]) && (a += s.ME(e[132], s.MB, s.MN, null)), a += e[122]), a += e[133];
n.shift(), _ = h, r = d, l = c, p = u, a += e[134], (s.MJ(s.track_experiment("PVSfZRSdUDDDBMURET")) || s.MK(s.MB(i[2])) && s.MJ(s.track_experiment("bHVSfPTGTfNdSPeXJdFGC"))) && (a += e[135]), a += e[75], s.MN("fe_child_i", s.MI(s.MB(i[33])) + s.MI(1)), a += e[42];
}
return n.shift(), a += e[44], _r_(a);
}
function u(a) {
if (_i_("4ab:468"), a += e[63], s.MD(i[19]) && (a += e[35]), s.MJ(s.MB(i[25])) && (a += [ e[64], "bHVSfZTQHbFeabFINIQSaTfRe" ].join(""), s.MJ(s.track_experiment("bHVSfZTQHbFeabFINIQSaTfRe")))) {
a += e[65];
var r = "";
r = f(r), a += s.F.html(r), a += e[71];
}
a += e[72];
var o = s.seq(1, s.MB(i[22])) || [];
n.unshift({
i:null
});
for (var _, l = 1, h = o.length; h >= l; l++) n[0].i = _ = o[l - 1], a += [ e[73], s.F.entities(_.value), e[39] ].join(""), s.MJ(s.MB(i[23]) == _.value) && (a += e[40]), a += e[74], s.MJ(s.MC(i[16])) && s.MJ(/city|country|region|place|airport|landmark|district/.test(s.MC(i[7]))) && s.MJ(s.track_experiment_stage("loc_d_all_sb_counter_words", 1)), a += e[75], s.MJ(s.MC(i[16])) && s.MJ(s.MC(i[7]) + "" == "index") && s.MJ(s.track_experiment_stage("loc_d_all_sb_counter_words", 2)), a += e[75], s.MJ(s.MC(i[16])) && s.MJ(s.MC(i[7]) + "" == "searchresults") && s.MJ(s.track_experiment_stage("loc_d_all_sb_counter_words", 3)), a += e[76], s.MJ(s.MC(i[16])) && s.MJ(s.MC(i[7]) + "" == "hotel") && s.MJ(s.track_experiment_stage("loc_d_all_sb_counter_words", 4)), a += e[77], s.MJ(s.MC(i[16])) && s.MJ(s.track_experiment("YdVGPWVSfZSPcJLSRe")) ? a += [ e[78], (n.unshift({
num_adults:_.value
}), t = s.ME(e[79], s.MB, s.MN, s.MO(_.value, null, e[79])), n.shift(), t), e[75] ].join("") :(a += e[78], s.MD(i[17]) ? (n.unshift({
num_adults:_.value
}), t = s.ME(e[58], s.MB, s.MN, s.MO(_.value, null, e[58])), n.shift(), a += t) :a += _.value, a += e[75]), a += e[80];
return n.shift(), a += e[81], _r_(a);
}
function p(a) {
if (_i_("4ab:469"), a += e[96], s.MD(i[19]) && (a += e[35]), s.MJ(s.MC(i[0])) && s.MK(s.MC(i[0]).b_children_total) && s.MJ(s.MC(i[8]) + "" == "family") && (a += [ e[64], "bHVSfZTLLFKWILXcdcCcEO" ].join(""), s.MJ(s.track_experiment("bHVSfZTLLFKWILXcdcCcEO")))) {
a += e[65];
var r = "";
r = b(r), a += s.F.html(r), a += e[71];
}
a += e[72];
var o = s.seq(0, s.MB(i[27])) || [];
n.unshift({
i:null
});
for (var _, l = 1, h = o.length; h >= l; l++) n[0].i = _ = o[l - 1], a += [ e[73], s.F.entities(_.value), e[39] ].join(""), s.MJ(s.MB(i[28]) == _.value) && (a += e[40]), a += e[99], s.MJ(s.MC(i[16])) && s.MJ(s.track_experiment("YdVGPWVSfZSPcJLSRe")) ? (a += e[75], a += s.MJ(0 == _.value) ? [ e[78], s.ME(e[100], s.MB, s.MN, null), e[75] ].join("") :[ e[78], (n.unshift({
num_kids:_.value
}), t = s.ME(e[101], s.MB, s.MN, s.MO(_.value, null, e[101])), n.shift(), t), e[75] ].join(""), a += e[42]) :(a += e[75], a += s.MJ(s.MB(i[17])) && s.MJ(0 == _.value) ? [ e[78], s.ME(e[91], s.MB, s.MN, null), e[75] ].join("") :s.MJ(s.MB(i[17])) ? [ e[78], (n.unshift({
num_kids:_.value
}), t = s.ME(e[92], s.MB, s.MN, s.MO(_.value, null, e[92])), n.shift(), t), e[75] ].join("") :[ e[78], _.value, e[75] ].join(""), a += e[42]), a += e[80];
return n.shift(), a += e[81], _r_(a);
}
function f(t) {
return _i_("4ab:470"), t += [ e[66], s.ME(e[67], s.MB, s.MN, null), e[68], s.ME(e[69], s.MB, s.MN, null), e[70] ].join(""), _r_(t);
}
function b(t) {
return _i_("4ab:471"), t += [ e[66], s.ME(e[97], s.MB, s.MN, null), e[68], s.ME(e[98], s.MB, s.MN, null), e[70] ].join(""), _r_(t);
}
return a += e[0], a = o(a), a += e[12], _r_(a);
});
}());
var n = t("component"), a = t("morphdom"), s = t("read-data-options"), r = t("search-config"), o = (t("et"), t("search/searchbox/model"));
i.exports = n.extend({
init:function() {
_i_("4ab:387"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
sbWidth:{
name:"sb-width",
type:String
},
sbBBToolSearchbox:{
name:"sb-bbtool-searchbox",
type:Boolean
},
childrenHide:{
name:"sb-group-children-hide",
type:Boolean
},
petsHide:{
name:"sb-group-pets-hide",
type:Boolean
},
roomsHide:{
name:"sb-group-rooms-hide",
type:Boolean
},
useAdultsLabel:{
name:"sb-group-use_adults_label",
type:Boolean
},
blockLabels:{
name:"sb-group-block-labels",
type:Boolean
},
alwaysExpanded:{
name:"sb-group-always-expanded",
type:Boolean
},
removeOldParams:{
name:"sb-group-remove-old-params",
type:Boolean
}
}), this.model = o.getInstance(this.options.modelId), this.model.use("group"), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.$form = this.$el.parents("form"), this.options.removeOldParams && this.$form.on("submit", this.formSubmit.bind(this)), r.on("change", this.searchConfigChange.bind(this)), this.$el.on("change", '[data-group-rooms-count=""]', this.groupRoomsChange.bind(this)), this.$el.on("change", '[data-group-adults-count=""]', this.groupAdultsChange.bind(this)), this.$el.on("change", '[data-group-children-count=""]', this.groupChildrenChange.bind(this)), this.$el.on("change", "[data-group-child-age]", this.groupChildAgeChange.bind(this)), this.renderEl = this.$el.find('[data-render=""]')[0], this.template = B.jstmpl("search_group_group_html"), this.$form.on("change", ".b-booker-type__input_business-booker", this.businessBookerSelected.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("4ab:388");
var t = {
rooms_count:r.rooms ? r.rooms.length :1,
adults_count:r.adults || 2,
children_ages:r.childrenAges || [],
default_empty_age_to:"12 "
};
this.model.group.init(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:389"), !t || "group" != t.group && "dates" != t.group) return _r_();
this.render(), _r_();
},
searchConfigChange:function() {
_i_("4ab:390"), this.model.group.set({
key:"rooms_count",
value:Array.isArray(r.rooms) ? r.rooms.length :1
}), this.model.group.set({
key:"adults_count",
value:r.adults
}), this.model.group.set({
key:"children_count",
value:Array.isArray(r.childrenAges) ? r.childrenAges.length :1
}), Array.isArray(r.childrenAges) && r.childrenAges.forEach(function(t, e) {
_i_("4ab:526"), this.model.group.set({
key:"children_ages",
i:e,
value:t
}), _r_();
}.bind(this)), _r_();
},
groupRoomsChange:function(t) {
_i_("4ab:391");
var e = $(t.currentTarget);
this.model.group.set({
key:"rooms_count",
value:e.val()
}), _r_();
},
groupAdultsChange:function(t) {
_i_("4ab:392");
var e = $(t.currentTarget);
this.model.group.set({
key:"adults_count",
value:e.val()
}), this.groupAdultsChanged = !0, _r_();
},
groupChildrenChange:function(t) {
_i_("4ab:393");
var e = $(t.currentTarget);
this.model.group.set({
key:"children_count",
value:e.val()
}), _r_();
},
groupChildAgeChange:function(t) {
_i_("4ab:394");
var e = $(t.currentTarget), i = e.attr("data-group-child-age");
this.model.group.set({
key:"children_ages",
i:+i,
value:e.val()
}), _r_();
},
formSubmit:function(t) {
if (_i_("4ab:395"), t.isDefaultPrevented()) return _r_(!1);
var e = [ "[data-group-adults-count]", "[data-group-children-count]", "[data-group-child-age]" ], i = this.$el.find("[name=room1]");
this.$el.find(e.join(",")).prop("disabled", !0), i.val(i.val().replace(" ", "")), _r_();
},
render:function() {
_i_("4ab:396");
var t = {}, e = this.model.group.get(), i = this.model.dates.get();
e = {
fe_sb_state_number_of_rooms:e.rooms_count,
fe_sb_state_number_of_adults:e.adults_count,
fe_sb_state_number_of_children:e.children_ages.length,
fe_sb_state_children_ages:e.children_ages,
fe_sb_state_traveller:e.fe_sb_state_traveller,
fe_sb_state_rooms:[ {
b_adults:e.adults_count,
b_children:e.children_ages.length,
b_children_ages:e.children_ages,
b_room_order:1
} ]
}, B.env.b_lang_is_cjk && (e.b_lang_is_cjk = B.env.b_lang_is_cjk), i.checkout && (e.fe_sb_state_checkout = i.checkout.toString()), this.options.sbWidth && (e.fe_sb_width = this.options.sbWidth), this.options.childrenHide && (e.fe_sb_group_children_hide = 1), this.options.petsHide && (e.fe_sb_group_pets_hide = 1), this.options.roomsHide && (e.fe_sb_group_rooms_hide = 1), this.options.blockLabels && (e.fe_sb_group_block_labels = 1), this.options.alwaysExpanded && (e.fe_sb_group_always_expanded = 1), this.options.useAdultsLabel && (e.fe_sb_group_use_adults_label = 1), this.options.sbBBToolSearchbox && (e.fe_sb_bbtool_searchbox = 1), this.model.hasFlag("PVSfZTKDEIIYBKbONdPbCTNNC") && (e.fe_sb_include_traveller = 1);
var n = this.template.render(e).trim();
"msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = function(t, e) {
_i_("4ab:512");
var i = t.getAttribute(jQuery.expando);
return i && e.setAttribute(jQuery.expando, i), _r_(!0);
}), a(this.renderEl, n, t), _r_();
},
businessBookerSelected:function() {
_i_("4ab:397"), this.groupAdultsChanged || this.model.group.set({
key:"adults_count",
value:1
}), _r_();
}
}), _r_();
}), B.define("search/group/model", function(t, e, i) {
"use strict";
_i_("4ab:29");
t("et");
function n(t) {
_i_("4ab:82"), this.model = t, this.data = {
preset:-1
}, this.valid = !0, this.validationError = "", this.options = {}, this.model.getFlag("PVSfZTKDEIIYBKbONdPbCTNNC") && (this.model.use("traveller"), this.model.on("change", this.modelChange.bind(this))), _r_();
}
$.extend(n.prototype, {
init:function(t) {
_i_("4ab:211"), this.data = t, this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("4ab:212"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
get:function() {
if (_i_("4ab:213"), this.model.getFlag("PVSfZTKDEIIYBKbONdPbCTNNC")) {
var t = this.model.traveller.get().travellerType;
this.data.fe_sb_state_traveller = t;
}
return _r_(this.data);
},
set:function(t) {
if (_i_("4ab:214"), !t || !t.key) return _r_(!1);
if ("children_count" == t.key) if (this.data.children_ages || (this.data.children_ages = []), 0 == t.value) this.data.children_ages = []; else if (this.data.children_ages.length < t.value) for (var e = this.data.children_ages.length; e < t.value; e++) this.data.default_empty_age_to ? this.data.children_ages.push(this.data.default_empty_age_to) :this.data.children_ages.push(""); else this.data.children_ages.length > t.value && this.data.children_ages.splice(t.value, this.data.children_ages.length - t.value); else t.hasOwnProperty("i") ? this.data[t.key] ? this.data[t.key][t.i] = t.value :(this.data[t.key] = [], this.data[t.key][t.i] = t.value) :this.data[t.key] = t.value;
return this.emit("change"), _r_(!0);
},
validate:function() {
_i_("4ab:215");
var t = !0, e = "";
return this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
modelChange:function(t) {
if (_i_("4ab:216"), !t || "traveller" !== t.group) return _r_();
var e = this.model.traveller.get().travellerType;
switch (e) {
case null:
case "":
case "couple":
this.data.rooms_count = 1, this.data.adults_count = 2, this.data.children_ages = [];
break;

case "solo":
case "business":
this.data.rooms_count = 1, this.data.adults_count = 1, this.data.children_ages = [];
break;

case "family":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages && 0 != this.data.children_ages.length || (this.data.children_ages = [ this.data.default_empty_age_to ]);
break;

case "group":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages = [];
}
this.data.fe_sb_state_traveller = e, this.emit("change"), _r_();
},
emit:function(t, e) {
_i_("4ab:217"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"group"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("search/searchbox/analytics", function(t, e, i) {
_i_("4ab:30");
var n = {};
e.send = function(t, e, i) {
if (_i_("4ab:114"), !window.ga) return _r_();
window.ga("send", "event", "Searchbox", B.env.b_action, t, e, i), _r_();
}, e.sendNonInteractive = function(t, i) {
_i_("4ab:115"), e.send(t, i, {
nonInteraction:!0
}), _r_();
}, e.sendOnce = function(t, i) {
_i_("4ab:116");
var a = t + ":" + i;
n[a] || (e.send(t, i), n[a] = !0), _r_();
}, _r_();
}), B.define("search/searchbox/model", function(t, e, i) {
"use strict";
_i_("4ab:31");
var n = t("event-emitter"), a = t("search/modules/flags"), s = {};
function r(t) {
_i_("4ab:83"), n.extend(this), this.id = t, this.formAction, this.fieldGroups = {
track:[]
}, this.flags = {}, this.validators = [], _r_();
}
$.extend(r.prototype, {
use:function(e) {
if (_i_("4ab:218"), this[e]) return _r_();
switch (e) {
case "destination":
var i = t("search/destination/model");
this[e] = new i(this);
break;

case "dates":
var n = t("search/dates/model");
this[e] = new n(this);
break;

case "group":
var a = t("search/group/model");
this[e] = new a(this);
break;

case "traveller":
var s = t("search/traveller/model");
this[e] = new s(this);
break;

default:
return _r_();
}
"function" == typeof this[e].validate && this.validators.push(this[e].validate.bind(this[e])), _r_();
},
submit:function() {
_i_("4ab:219"), this.emit("submit"), _r_();
},
getFormAction:function() {
return _i_("4ab:220"), _r_(this.formAction);
},
setFormAction:function(t) {
_i_("4ab:221"), this.formAction = t, _r_();
},
getFields:function() {
_i_("4ab:222");
var t = [];
return Object.keys(this.fieldGroups).forEach(function(e) {
_i_("4ab:497"), Array.isArray(this.fieldGroups[e]) && (t = t.concat(this.fieldGroups[e])), _r_();
}.bind(this)), _r_(t);
},
setFields:function(t, e) {
_i_("4ab:223"), this.fieldGroups[t] = e, _r_();
},
hasFlag:function(t) {
return _i_("4ab:224"), _r_(t in this.flags);
},
getFlag:function(t) {
return _i_("4ab:225"), _r_(this.flags[t]);
},
updateFlags:function(t) {
_i_("4ab:226");
var e = a.parse(t);
Object.assign(this.flags, e), _r_();
},
validate:function() {
_i_("4ab:227");
var t = this.validators.filter(function(t) {
return _i_("4ab:486"), _r_(t.call());
});
return _r_(t.length == this.validators.length);
}
}), i.exports = {
getInstance:function(t) {
return _i_("4ab:228"), s[t] || (s[t] = new r(t)), _r_(s[t]);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox", function(t, e, i) {
"use strict";
_i_("4ab:32");
var n = t("component"), a = t("search/searchbox/model"), s = t("read-data-options"), r = t("search/dates/date-prices"), o = t("events"), _ = [ "country", "dest_id", "dest_type", "district", "iata", "landmark", "latitude", "longitude", "place_id", "place_id_lat", "place_id_lon", "region", "prefill_submitted" ];
i.exports = n.extend({
init:function() {
if (_i_("4ab:398"), this.hiddenFields = [], this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
flags:{
name:"sb-flags",
type:String,
defaultValue:""
},
isFirstVisible:{
name:"is-first-visible",
type:Boolean
}
}), this.model = a.getInstance(this.options.modelId), this.model.on("init", this.modelChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), this.model.on("submit", this.modelSubmit.bind(this)), this.model.updateFlags(this.options.flags), this.$form = this.$el.is("form") ? this.$el :this.$el.find("form:eq(0)"), this.$form.submit(this.formSubmit.bind(this)), this.originalAction = this.$form.attr("action"), this.options.isFirstVisible && this.model.hasFlag("sticky")) {
var e = t("search/searchbox/searchbox-sticky-controller").getController();
e.setElement(this.$form);
}
this.$searchOverlay = this.$el.find("[data-searching-overlay]"), this.shouldShowSearchOverlay = this.model.getFlag("AEJPAcBacPONDcFGHT") && this.$searchOverlay.length, this.shouldShowSearchOverlay && (this.$searchOverlay.on("click", this.searchOverlayClick.bind(this)), $(document).on("keydown", this.hideSearchOverlay.bind(this))), this.shouldTrackSRPP = this.model.getFlag("MKMBYTfBDSYeRT"), this.shouldTrackSRPP && (this.$SRPP = this.$el.find(".sr_sb_pp"), this.shouldShowSRPP = this.$SRPP.length, this.shouldShowSRPP && (this.SRPPOverlay = t("component/search/searchbox/experiments/experiment_china_sr_sb_pp"), this.SRPPOverlay.init(this.$SRPP))), this.$searchPageOverlay = this.$el.find(".sb-searchbox__searching-page-overlay"), this.shouldShowSearchPageOverlay = this.model.getFlag("MKMBYDEZRESfPCaYfNbAEO") && this.$searchPageOverlay.length, "index" == B.env.b_action && "zh-cn" === B.env.b_lang_for_url && (this.shouldTrackPageOverlay = !0, this.pageOverlay = t("component/search/searchbox/experiments/experiment_china_index_sb_show_page_overlay"), this.shouldShowSearchPageOverlay && this.pageOverlay.init(this.$searchPageOverlay)), this.initCurrentCountryField(), this.initMapTrigger(), this.model.getFlag("UBKeJbLYQCLBMJFUWOEQeRe") && (this.datePrices = r.getInstance(), this.datePrices.init({
model:this.model,
variant:B.et.track("UBKeJbLYQCLBMJFUWOEQeRe"),
style:"dots",
trackHash:"UBKeJbLYQCLBMJFUWOEQeRe"
})), _r_();
},
modelChange:function(t) {
_i_("4ab:399"), this.updateHiddenFields(), _r_();
},
modelSubmit:function() {
_i_("4ab:400"), this.$form.submit(), _r_();
},
initMapTrigger:function() {
_i_("4ab:401");
var t = this.$form;
if ("index" != B.env.b_action) return _r_();
t.find("input[name=map]").change(function() {
_i_("4ab:487"), $(this).prop("checked") ? t.append('<input type="hidden" name="map_open_trigger" value=1>') :t.find("input[name=map_open_trigger]").remove(), _r_();
}), _r_();
},
initCurrentCountryField:function() {
_i_("4ab:402");
var t = !1;
this.$onlyCurrentCountry = this.$form.find("#limit-search-area"), this.$onlyCurrentCountry.length && (t = this.$onlyCurrentCountry.is(":checked"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.model.use("destination"), this.model.destination.initOnlyCurrentCountry(t)), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:403"), this.model.use("destination"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
},
updateHiddenFields:function() {
_i_("4ab:404");
var t = this.model.getFormAction(), e = this.$form.attr("action");
t || (t = this.originalAction), e != t && this.$form.attr("action", t), this.hiddenFields && this.hiddenFields.forEach(function(t) {
_i_("4ab:513"), t.$node.remove(), t.$node = null, _r_();
});
var i = this.model.getFields();
this.hiddenFields = [];
var n = [], a = !1;
i.forEach(function(t) {
_i_("4ab:514"), this.hiddenFields.push({
name:t.name,
value:t.value
}), n.push(t.name), -1 != _.indexOf(t.name) && (a = !0), _r_();
}.bind(this)), this.$form.find("input").filter(function() {
return _i_("4ab:515"), _r_(a && -1 != _.indexOf(this.name) || -1 != n.indexOf(this.name));
}).remove(), this.hiddenFields.forEach(function(t) {
_i_("4ab:516");
var e = $("<input>");
e.attr("type", "hidden"), e.attr("name", t.name), e.attr("value", t.value), t.$node = e, this.$form.append(e), _r_();
}.bind(this)), _r_();
},
formSubmit:function(t) {
_i_("4ab:405");
var e = this.model.getFlag("b_loc_part_of_memorial_day_search_us_exp_flag");
if (null != e && "" !== e) {
var i = document.getElementsByName("ss"), n = "";
i && i.length >= 1 && (n = i[0].value);
var a = -1 != n.toLowerCase().replace(/ /g, "").indexOf("memorialday");
a && "www" === B.env.b_site_type && "en-us" === B.env.b_selected_language && "us" === B.env.ip_country && B.et.stage("YdALOLOLOVZMYCKBXAbbFGUPVZHe", 1);
}
var s = this.model.getFlag("loc_part_of_show_us_city_exp_flag");
if (null != s && "" !== s) {
var i = document.getElementsByName("ss"), n = "";
i && i.length >= 1 && (n = i[0].value), "" === n && "www" === B.env.b_site_type && "en-us" === B.env.b_selected_language && "us" === B.env.ip_country && B.et.stage("YdVWLZYEEFVYRZGbGBRe", 1);
}
this.shouldTrackPageOverlay && B.et.stage("MKMBYDEZRESfPCaYfNbAEO", 1), this.shouldTrackSRPP && B.et.stage("MKMBYTfBDSYeRT", 1);
var r = this.model.validate();
if (!r) return t.preventDefault(), _r_();
o.trigger("SearchBox::Submit__Success"), this.shouldShowSearchOverlay ? this.showSearchOverlay() :this.shouldShowSearchPageOverlay ? this.pageOverlay.show(this.model.destination.data.ss_raw) :this.shouldShowSRPP && this.SRPPOverlay.show(this.model.destination.data.ss_raw), _r_();
},
searchOverlayClick:function() {
_i_("4ab:406"), this.abortSubmit(), this.hideSearchOverlay(), B.et.customGoal("AEJPAcBacPONDcFGHT", 1), _r_();
},
abortSubmit:function() {
_i_("4ab:407"), window.stop ? window.stop() :document.execCommand && document.execCommand("Stop"), _r_();
},
showSearchOverlay:function() {
_i_("4ab:408"), this.$searchOverlay.addClass("-visible"), _r_();
},
hideSearchOverlay:function() {
_i_("4ab:409"), this.$searchOverlay.removeClass("-visible"), _r_();
}
}), _r_();
}), B.define("search/searchbox/searchbox-sticky-controller", function(t, e, i) {
"use strict";
_i_("4ab:33");
var n = t("jquery"), a = t("event-emitter"), s = null;
function r() {
_i_("4ab:84"), a.extend(this), this.visible = !1, this.bottomPosition = null, this.$el = null, this.$window = n(window), this.$window.on("scroll", this.windowScroll.bind(this)), _r_();
}
Object.assign(r.prototype, {
setElement:function(t) {
if (_i_("4ab:229"), this.bottomPosition) {
var e = t.offset(), i = t.outerHeight();
if (e && e.top + i > this.bottomPosition) return _r_();
}
this.$el = t, this.recalculate(), _r_();
},
isVisible:function() {
return _i_("4ab:230"), _r_(this.visible);
},
recalculate:function() {
if (_i_("4ab:231"), null === this.$el) return _r_();
var t = this.$el.offset(), e = this.$el.outerHeight();
if (!t) return _r_();
this.bottomPosition = t.top + e, this.updateStatus(), _r_();
},
updateStatus:function() {
_i_("4ab:232"), !this.visible && this.$window.scrollTop() >= this.bottomPosition ? (this.visible = !0, this.emit("show"), "searchresults" == B.env.b_action && B.et.stage("OLSfZPXCSFMEfTRe", 1)) :this.visible && this.$window.scrollTop() < this.bottomPosition && (this.visible = !1, this.emit("hide")), _r_();
},
windowScroll:function(t) {
if (_i_("4ab:233"), null === this.bottomPosition) return _r_();
this.updateStatus(), _r_();
}
}), i.exports = {
getController:function() {
return _i_("4ab:234"), s || (s = new r()), _r_(s);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox-sticky", function(t, e, i) {
"use strict";
_i_("4ab:34");
var n = t("component"), a = t("events"), s = t("search/searchbox/searchbox-sticky-controller").getController();
i.exports = n.extend({
init:function() {
_i_("4ab:410"), s.on("show", this.show.bind(this)), s.on("hide", this.hide.bind(this)), s.isVisible() && this.hardShow(), _r_();
},
show:function(t) {
_i_("4ab:411"), this.$el.addClass("-visible-1"), a.trigger("searchbox-sticky:show"), setTimeout(function() {
_i_("4ab:517"), this.$el.addClass("-visible-2"), _r_();
}.bind(this), 0), _r_();
},
hardShow:function() {
_i_("4ab:412"), this.$el.addClass("-visible-1 -visible-2"), _r_();
},
hide:function(t) {
_i_("4ab:413"), this.$el.removeClass("-visible-2"), setTimeout(function() {
_i_("4ab:518"), this.$el.removeClass("-visible-1"), _r_();
}.bind(this), 1e3), _r_();
}
}), _r_();
}), B.define("component/search/group/children-ages-tooltip", function(t, e, i) {
"use strict";
_i_("4ab:35");
var n = t("jquery"), a = t("jstmpl"), s = t("component");
i.exports = s.extend({
init:function() {
_i_("4ab:414"), this.dropdown = !1, this.$form = n("#frm"), this.isPopupAlreadyShown = !1, this.agesSelector = '[name="age"]', this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("4ab:415"), this.$el.change(this.showTooltip.bind(this)), this.$form.delegate(this.agesSelector, "click", this.hideTooltip.bind(this)), B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)), _r_();
},
showTooltip:function(t) {
_i_("4ab:416");
var e = parseInt(this.$el.val()) > 0;
e && !this.isPopupAlreadyShown && setTimeout(function() {
if (_i_("4ab:532"), 0 === n("#frm " + this.agesSelector + ":eq(0)").length) return _r_();
this.dropdown = n.fly.dropdown.extend({
defaults:{
position:B.et.track("bHVSfPTGTfNdSPeXJdFGC") ? "bottom" :"bottom left",
content:function() {
return _i_("4ab:538"), _r_(a("searchbox_children_ages_tooltip").render({}));
},
extraClass:"searchbox_children_ages_tooltip"
}
}).create("#frm " + this.agesSelector + ":eq(0)"), this.dropdown.show(), this.isPopupAlreadyShown = !0, _r_();
}.bind(this), 0), _r_();
},
hideTooltip:function(t) {
_i_("4ab:417"), this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()), _r_();
}
}), _r_();
}), B.define("search/traveller/model", function(t, e, i) {
"use strict";
_i_("4ab:36");
function n(t) {
_i_("4ab:85"), this.model = t, this.data = {
travellerType:null
}, _r_();
}
Object.assign(n.prototype, {
initTravellerType:function(t) {
_i_("4ab:235"), this.data.travellerType = t, this.emit("init"), _r_();
},
get:function() {
return _i_("4ab:236"), _r_(this.data);
},
setTravellerType:function(t) {
_i_("4ab:237"), this.data.travellerType = t, this.data.sb_travel_purpose = "business" == t ? "business" :"", this.emit("change"), _r_();
},
emit:function(t, e) {
_i_("4ab:238"), e = e || {}, this.model.emit(t, Object.assign(e, {
group:"traveller"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("component/search/traveller/travel-party", function(t, e, i) {
_i_("4ab:37");
var n = t("component"), a = t("search/searchbox/model"), s = t("read-data-options");
i.exports = n.extend({
init:function() {
_i_("4ab:418"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = a.getInstance(this.options.modelId), this.model.use("traveller"), this.model.on("change", this.modelChange.bind(this)), this.modelInit(), this.$travellerTypes = this.$el.find(), this.$el.on("click", "[data-traveller-value]", this.travellerChange.bind(this)), this.$el.find("label[for]").on("keyup", function(t) {
if (_i_("4ab:488"), 13 != t.keyCode) return _r_();
var e = $(this);
return $("#" + e.attr("for")).click(), _r_(!1);
}), _r_();
},
modelInit:function() {
_i_("4ab:419");
var t = this.$el.find("[data-traveller-value]");
"radio" == t.attr("type") && (t = this.$el.find('[data-traveller=""]:checked')), t.length && this.model.traveller.initTravellerType(t.val()), _r_();
},
modelChange:function(t) {
if (_i_("4ab:420"), !t || "traveller" !== t.group) return _r_();
var t = this.model.traveller.get();
this.$el.find("[data-param-travel-purpose]").val(t.sb_travel_purpose), t.travellerType && ("msie" === B.env.b_browser && "8" === B.env.b_browser_version && (this.$el.find("[data-traveller-value]").removeClass("-checked"), this.$el.find('[data-traveller-value="' + t.travellerType + '"]').addClass("-checked"), this.$el.find('[data-traveller-value="' + t.travellerType + '"] input').attr("checked", "checked")), this.$el.find('[data-traveller-info=""]').remove()), this._count = this._count || 0, this._count++, B.et.customGoal("PVSfZTKDEIIYBKbONdPbCTNNC", 1 == this._count ? 1 :2 == this._count ? 2 :3), _r_();
},
travellerChange:function(t) {
_i_("4ab:421");
var e = $(t.currentTarget), i = $(t.target);
if (("msie" != B.env.b_browser || "8" != B.env.b_browser_version) && !i.is("input")) return _r_();
this.model.traveller.setTravellerType(e.attr("data-traveller-value")), _r_();
}
}), _r_();
}), B.define("component/search/searchbox/experiments/experiment_china_index_sb_show_page_overlay", function(t, e, i) {
"use strict";
_i_("4ab:38");
var n = t("jquery"), a = t("et"), s = "MKMBYDEZRESfPCaYfNbAEO", r = null, o = 0, _ = {
init:function(t) {
_i_("4ab:239"), "index" === B.env.b_action && (r = t), _r_();
},
show:function(t) {
if (_i_("4ab:240"), r) {
var e = {
customWrapperClassName:"sb-sspo-lightbox-wrapper",
customMaskClassName:"sb-sspo-mask",
hideCallBack:this.hide
};
n(".sb-sspo__body1").html(t + n(".sb-sspo__body1").data("trans")), booking.lightbox.show(r, e), this.rotateUSP();
}
_r_();
},
rotateUSP:function() {
_i_("4ab:241");
var t = r.find(".sb-sspo__message");
t.addClass("g-hidden");
var e = t.length, i = e > 1 ? Math.floor(Math.random() * e) :0;
t.eq(i).removeClass("g-hidden"), o = setInterval(function() {
_i_("4ab:489"), t.eq(i).addClass("g-hidden"), i++, i === e && (i = 0), t.eq(i).removeClass("g-hidden"), _r_();
}, 3e3), _r_();
},
hide:function() {
_i_("4ab:242"), r && (clearInterval(o), a.customGoal(s, 1)), _r_();
}
};
return _r_(_);
}), B.define("component/search/searchbox/experiments/experiment_china_sr_sb_pp", function(t, e, i) {
"use strict";
_i_("4ab:39");
var n = t("jquery"), a = (t("et"), null), s = {
autoStart:!1,
step:15,
firstStep:20,
stepWait:100,
maximum:98,
finishDuration:200
};
function r(t) {
_i_("4ab:86"), this.options = n.extend({}, s, t), this.$el = n(".loader_background", t.wrapper), this.$bar = this.$el.children().eq(0), this._now = 0, this.options.autoStart && this.start(), _r_();
}
r.prototype.start = r.prototype._progress = function(t) {
_i_("4ab:126");
var e = this, i = this.options;
if (t && e.setTo(t), e._now >= i.maximum) return _r_();
var n = t ? Math.max(500, 2 * Math.random() * i.stepWait) :0;
e._t = setTimeout(function() {
_i_("4ab:472");
var n = t ? i.step :i.firstStep;
n = o(.4 * n, 1.3 * n), e._now > 60 && (n = Math.sqrt(n * (100 - e._now) / 100)), e._progress(e._now + n), _r_();
}, n), _r_();
}, r.prototype.setTo = function(t) {
_i_("4ab:117"), this._now = t, this.$bar.css({
width:t + "%"
}), _r_();
}, r.prototype.finish = function(t) {
_i_("4ab:118"), this._t && clearTimeout(this._t), this.$bar.css({
width:"100%",
transitionTimingFunction:"ease-out",
transitionDuration:this.options.finishDuration + "ms"
}), this.$bar.width("100%"), t && setTimeout(t, this.options.finishDuration), _r_();
};
function o(t, e) {
return _i_("4ab:87"), _r_(Math.random() * (e - t) + t);
}
var _ = {
init:function(t) {
_i_("4ab:243");
var e = this;
"searchresults" === B.env.b_action && (a = t, this._progress = new r({
wrapper:a
}), a.on("click", function() {
_i_("4ab:498"), e.hide(), _r_();
})), _r_();
},
show:function(t) {
_i_("4ab:244"), a.show(), this._progress.start(), _r_();
},
hide:function() {
_i_("4ab:245"), a.hide(), this._progress.finish(), this._progress.setTo(0), _r_();
}
};
return _r_(_);
}), function(t, e, i, n) {
"use strict";
_i_("4ab:40");
var a = "bHVSfHXIFTdZRSdSHNYO";
t.require([ "jquery", "et" ], function(t, e) {
_i_("4ab:119");
var i = t("[data-group-adults-count]"), n = t("[data-group-children-count]"), s = t("[data-group-rooms-count]");
i.on("change", function() {
_i_("4ab:444"), e.customGoal(a, 1), _r_();
}), n.on("change", function() {
_i_("4ab:445"), e.customGoal(a, 2), _r_();
}), s.on("change", function() {
_i_("4ab:446"), e.customGoal(a, 3), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.define("component/search/dates/prompt", function(t, e, i) {
"use strict";
_i_("4ab:41");
var n = "sb-dates-prompt-dismissed", a = 200, s = t("component"), r = t("click-out"), o = t("searchresults/events");
i.exports = s.extend({
init:function() {
if (_i_("4ab:422"), this.boundHide = this.hide.bind(this), this.boundCleanUp = this.cleanUp.bind(this), this.$el.find(".sb-dates-prompt__close").on("click", this.dismiss.bind(this)), this.isDismissed()) return _r_();
this.isLandingScrollStarted() ? o.once(o.UI_LANDING_SCROLL_COMPLETED, this.show.bind(this)) :this.show(), _r_();
},
show:function() {
if (_i_("4ab:423"), this.hiding) return _r_();
this.$el.removeClass("g-hidden").addClass("fadein"), this.monitorId = r.addMonitor(this.el, this.boundHide), _r_();
},
hide:function() {
_i_("4ab:424"), this.hiding = !0, this.$el.removeClass("fadein").addClass("fadeout"), window.setTimeout(this.boundCleanUp, a), _r_();
},
dismiss:function() {
_i_("4ab:425"), B.browserStorageHandler.addSessionValue(n, !0), this.hide(), _r_();
},
cleanUp:function() {
_i_("4ab:426"), this.monitorId && r.removeMonitor(this.monitorId), this.$el.addClass("g-hidden").removeClass("fadeout"), this.hiding = !1, _r_();
},
isDismissed:function() {
return _i_("4ab:427"), _r_("true" === B.browserStorageHandler.getSessionValue(n));
},
isLandingScrollStarted:function() {
return _i_("4ab:428"), _r_(B.sr && B.sr.landingScrollStarted || B.env.fe_landing_scroll_started);
}
}), _r_();
});