var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

booking.env.enable_scripts_tracking && ("www" === booking.env.b_site_type && (booking.env.scripts_tracking.jquery = {
loaded:!!window.jQuery,
run:!!window.jQuery
}), booking.env.scripts_tracking.main = {
loaded:!0,
run:!1
}), "function" != typeof booking.debug && (booking.debug = function() {
return _i_("3da:322"), _r_(new function() {
_i_("3da:1076"), this.log = this.debug = this.info = this.warn = this.error = this.assert = this.dir = this.table = this.profile = this.trace = this.time = this.timeEnd = function() {}, _r_();
}());
}, booking.debug.enabled = function() {}), booking.console = booking.debug("booking"), window.console = window.console || booking.console, B.tools = {
inherits:function(e, t, i) {
_i_("3da:324");
var n = function() {};
n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n(), e.prototype.constructor = e, i && $.extend(e.prototype, i), _r_();
},
base:function(e, t, i) {
_i_("3da:325");
var n = arguments.callee.caller;
if (!n) throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
if (n.superClass_) return _r_(n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1)));
for (var r = Array.prototype.slice.call(arguments, 2), a = !1, o = e.constructor; o; o = o.superClass_ && o.superClass_.constructor) if (o.prototype[t] === n) a = !0; else if (a) return _r_(o.prototype[t].apply(e, r));
if (e[t] === n) return _r_(e.constructor.prototype[t].apply(e, r));
throw Error("tools.base called from a method of one name to a method of a different name");
},
addSingletonGetter:function(e) {
_i_("3da:326"), e.getInstance = function() {
return _i_("3da:1078"), e.__instance__ || (e.__instance__ = new e()), _r_(e.__instance__);
}, _r_();
},
abstractMethod:function() {
throw _i_("3da:327"), Error("unimplemented abstract method");
},
parseInt:function(e) {
return _i_("3da:328"), _r_(parseInt(e, 10));
},
string:{
substitute:function(e, t) {
_i_("3da:688");
for (var i = 1; i < arguments.length; i++) {
var n = String(arguments[i]).replace(/\$/g, "$$$$");
e = e.replace(/%s/, n);
}
return _r_(e);
},
htmlEncode:function(e) {
return _i_("3da:689"), _r_($("<textarea />").text(e).html());
},
htmlDecode:function(e) {
return _i_("3da:690"), _r_($("<textarea />").html(e).text());
}
},
object:{
clone:function(e) {
_i_("3da:691");
var t = $.type(e);
if ("object" === t || "array" === t) {
if ("function" == typeof e.clone) return _r_(e.clone());
var i = "array" === t ? [] :{};
for (var n in e) e.hasOwnProperty(n) && (i[n] = B.tools.object.clone(e[n]));
return _r_(i);
}
return _r_(e);
},
keys:Object.keys,
defaults:function(e, t) {
_i_("3da:692");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
},
getByName:function(e, t) {
_i_("3da:693");
for (var i, n = e.split("."), r = t || window; i = n.shift(); ) {
if (null === r[i] || void 0 === r[i]) return _r_(null);
r = r[i];
}
return _r_(r);
},
pick:function(e, t) {
_i_("3da:694");
var i = [].slice.call(arguments, 1), n = {};
return i.forEach(function(t) {
_i_("3da:1758"), t in e && (n[t] = e[t]), _r_();
}), _r_(n);
}
},
array:{
toObject:function(e) {
_i_("3da:695");
for (var t = {}, i = 0, n = e.length; n > i; i++) t[e[i]] = !0;
return _r_(t);
},
indexOf:function(e, t, i) {
_i_("3da:696");
for (var n = i || 0, r = e.length; r > n; n++) if (e[n] == t) return _r_(n);
return _r_(-1);
}
},
math:{
getRandomInt:function(e, t) {
return _i_("3da:697"), _r_(Math.round(Math.random() * (t - e)) + e);
}
},
dom:{
window:$(window),
getBlockWidth:function(e) {
return _i_("3da:698"), _r_(e.width());
},
getBlockHeight:function(e) {
return _i_("3da:699"), _r_(e.height());
},
getBlockOffset:function(e, t) {
_i_("3da:700");
var i = e.offset(), n = {
left:0,
top:0
};
return t && (n = t.offset()), _r_({
left:i.left - n.left,
top:i.top - n.top
});
},
getBounds:function(e) {
_i_("3da:701");
var t = $(e), i = t.offset(), n = t.outerWidth(), r = t.outerHeight();
return _r_({
left:i.left,
right:i.left + n,
top:i.top,
bottom:i.top + r,
width:n,
height:r
});
},
boundsOverlap:function(e, t) {
return _i_("3da:702"), _r_(e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top);
},
getWindowWidth:function() {
return _i_("3da:703"), _r_(B.tools.dom.getBlockWidth(B.tools.dom.window));
},
getWindowHeight:function() {
return _i_("3da:704"), _r_(B.tools.dom.getBlockHeight(B.tools.dom.window));
},
getWindowScrollLeft:function() {
return _i_("3da:705"), _r_(B.tools.dom.window.scrollLeft());
},
getWindowScrollTop:function() {
return _i_("3da:706"), _r_(B.tools.dom.window.scrollTop());
},
watchIfBlockVisibleInViewport:function(e, t, i, n) {
_i_("3da:707");
function r() {
_i_("3da:1079"), B.tools.dom.isBlockVisibleInViewport(e, i) && (t(), n || a()), _r_();
}
function a() {
_i_("3da:1080"), B.tools.dom.window.unbind("resize scroll", r), _r_();
}
return B.tools.dom.window.bind("resize scroll", r), setTimeout(r, 0), _r_({
forceCheck:r,
stopWatch:a
});
},
isBlockVisibleInViewport:function(e, t) {
if (_i_("3da:708"), !e || 0 === e.length || !e.is(":visible")) return _r_(!1);
var i = e.offset().top, n = {
top:i,
bottom:i + e.innerHeight()
}, r = B.tools.dom.getWindowScrollTop(), a = {
top:r,
bottom:r + B.tools.dom.getWindowHeight()
};
if (t) return _r_(n.top >= a.top && n.bottom <= a.bottom);
return _r_(n.top >= a.top && n.top <= a.bottom || n.bottom >= a.top && n.bottom <= a.bottom || n.top < a.top && n.bottom > a.bottom);
},
popupCancel:function(e) {
return _i_("3da:709"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200"), _r_(!1);
}
},
css:{
CSS_OPACITY_SUPPORT:"opacity" in document.body.style
},
url:{
parse:function(e) {
_i_("3da:710");
var t = {};
if ("string" != typeof e) return _r_(t);
return e.split(/[;&]/g).forEach(function(e) {
_i_("3da:1759");
var i = e.indexOf("="), n = e.substr(0, i);
void 0 === t[n] && (t[n] = e.substr(i + 1)), _r_();
}), _r_(t);
},
stringify:function(e, t, i) {
_i_("3da:711"), t = t || "&", i = i || "=";
var n = [];
return e && Object.keys(e).forEach(function(t) {
_i_("3da:2088"), n.push(t + i + e[t]), _r_();
}), _r_(n.join(t));
}
},
functions:{
throttle:function(e, t, i) {
_i_("3da:712");
var n, r, a, o = null, s = 0, _ = i || {}, l = function() {
_i_("3da:1760"), s = _.leading === !1 ? 0 :+new Date(), o = null, a = e.apply(n || {}, r || []), n = r = null, _r_();
};
return _r_(function() {
_i_("3da:1574");
var i = +new Date();
s || _.leading !== !1 || (s = i);
var d = t - (i - s);
return n = this, r = arguments, 0 >= d ? (clearTimeout(o), o = null, s = i, a = e.apply(n, r), n = r = null) :o || _.trailing === !1 || (o = setTimeout(l, d)), _r_(a);
});
}
},
jsStaticUrl:function(e) {
return _i_("3da:329"), _r_(e ? B.tools.getStaticHost(e) + e :"");
},
getStaticHost:function(e) {
if (_i_("3da:330"), !B.env.static_hostnames || !B.env.static_hostnames.length) return _r_(document.location.protocol + "//q.bstatic.com");
if (1 === B.env.static_hostnames.length || !e) return _r_(B.env.static_hostnames[0]);
var t = B.tools.getHashCode(e.toString()), i = Math.abs(t) % B.env.static_hostnames.length;
return _r_(B.env.static_hostnames[i]);
},
getHashCode:function(e) {
_i_("3da:331");
var t, i, n, r = 0;
if (0 === e.length) return _r_(r);
for (t = 0, n = e.length; n > t; t++) i = e.charCodeAt(t), r = (r << 5) - r + i, r |= 0;
return _r_(r);
}
}, B.tools.dom.Bounds, "undefined" != typeof B.define && B.define("tools", B.tools), /* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
function(e) {
_i_("3da:6"), e.CSS || (e.CSS = {});
var t = e.CSS, i = function(e) {
_i_("3da:713"), this.message = e, _r_();
};
i.prototype = new Error(), i.prototype.name = "InvalidCharacterError", t.escape ? e.CSS_escape = t.escape :t.escape = e.CSS_escape = function(e) {
_i_("3da:1575");
for (var t, n = String(e), r = n.length, a = -1, o = "", s = n.charCodeAt(0); ++a < r; ) {
if (t = n.charCodeAt(a), 0 == t) throw new i("Invalid character: the input contains U+0000.");
if (t >= 1 && 31 >= t || 127 == t || 0 == a && t >= 48 && 57 >= t || 1 == a && t >= 48 && 57 >= t && 45 == s) {
o += "\\" + t.toString(16) + " ";
continue;
}
if (t >= 128 || 45 == t || 95 == t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t) {
o += n.charAt(a);
continue;
}
o += "\\" + n.charAt(a);
}
return _r_(o);
}, _r_();
}("undefined" != typeof global ? global :window), function(e, t) {
_i_("3da:7");
function i() {
_i_("3da:332");
var e = "string", t = arguments;
if (typeof t[0] === e && (!t[1] || typeof t[1] === e)) return _r_(i.get.apply(i, t));
return _r_(i.define.apply(i, t));
}
t.extend(i, {
define:function() {
_i_("3da:1081");
var e = {}, t = arguments;
return e = "object" == typeof t[0] ? t[0] :{
name:t[0],
handler:t[1]
}, "string" == typeof e.name && "function" == typeof e.handler && (this._list[this._key(e)] = this.create(e)), _r_(this);
},
get:function(e, t) {
return _i_("3da:1082"), t = t || "", _r_(this._list[this._key(e, t)]);
},
register:function(e, i) {
_i_("3da:1083");
var n = this;
function r(r) {
_i_("3da:1761");
var a = t(this).attr(e), o = n.get(a, i) || n.get(a);
o && o.run(n.params(this, e), r), _r_();
}
t(document.body).delegate("[" + e + "]", i, r), _r_();
},
create:function(e) {
_i_("3da:1084");
var i = new this._onea();
return t.extend(i, e), _r_(i);
},
params:function(e, i, n) {
_i_("3da:1085"), "string" == typeof i && (n = i, i = void 0);
var r = (n || "data-command") + "-params";
if ("object" != typeof i) return _r_(this._parse(t(e).attr(r)));
var a = [];
t.each(i, function(e, t) {
_i_("3da:2401"), a.push(e + "=" + encodeURIComponent(t)), _r_();
}), t(e).attr(r, a.join(";")), _r_();
},
_list:{},
_onea:n,
_key:function(e, t) {
_i_("3da:1086");
var i = "object" == typeof e ? e :{
name:e,
type:t
};
return _r_(i.name + (i.type ? " " + i.type :""));
},
_parse:function(e) {
_i_("3da:1087");
var i = {};
return e && t.each(e.split(";"), function(e, t) {
_i_("3da:2402");
var n = t.split("=");
try {
i[n.shift()] = decodeURIComponent(n.join("="));
} catch (r) {}
_r_();
}), _r_(i);
}
}), t.each([ "bind", "unbind", "one", "trigger" ], function(n, r) {
_i_("3da:714"), i[r] = function() {
_i_("3da:1762");
var i = t.makeArray(arguments);
return i[0] = "command:" + i[0], _r_(e.eventEmitter[r].apply(e.eventEmitter, i));
}, _r_();
});
function n() {}
n.prototype = {
name:"",
type:"",
run:function() {
_i_("3da:1088");
var e = t.makeArray(arguments);
return e[0] = e[0] || {}, i.trigger.apply(i, [ this.name ].concat(e)), _r_(this.handler.apply(this, e));
},
handler:function() {}
}, booking.command = i, i.register("data-command", "click"), _r_();
}(window.booking, window.jQuery), function(e) {
"use strict";
_i_("3da:8");
var t = "function", i = "object", n = "reject", r = "fulfill", a = 0, o = typeof module === i && module.exports && "function" != typeof __webpack_require__;
function s() {
_i_("3da:334"), this._act = a, this._cbs = [], this._ebs = [], _r_();
}
s.tick = function(e) {
_i_("3da:715"), o ? process.nextTick(e) :setTimeout(e, 0), _r_();
}, s.prototype = {
_exec:function(e) {
_i_("3da:1090");
var i = this._val, n = this._act;
s.tick(function() {
_i_("3da:2089");
for (var r, a, o; r = e.shift(); ) if (a = r.pr, o = r.cb, typeof o === t) try {
a.fulfill(o(i));
} catch (s) {
a.reject(s);
} else a[n](i);
_r_();
}), _r_();
},
reject:function(e) {
_i_("3da:1091");
var t = this;
t._act === a && (t._val = e, t._act = n, t._exec(t._ebs)), _r_();
},
fulfill:function(e) {
_i_("3da:1092");
var n, o, s = this, _ = 1;
if (s._act === a) {
try {
if (e === s) throw TypeError();
o = e && typeof e, n = (o === t || o === i) && e.then;
} catch (l) {
return s.reject(l), _r_();
}
if (typeof n === t) try {
n.call(e, function(e) {
_i_("3da:2657"), _ = _ && s.fulfill(e), _r_();
}, function(e) {
_i_("3da:2658"), _ = _ && s.reject(e), _r_();
});
} catch (l) {
_ = _ && s.reject(l);
} else s._val = e, s._act = r, s._exec(s._cbs);
}
_r_();
},
then:function(e, t) {
_i_("3da:1093");
var i = this, r = new s();
return i._act === a ? (i._cbs.push({
cb:e,
pr:r
}), i._ebs.push({
cb:t,
pr:r
})) :i._exec([ {
cb:i._act === n ? t :e,
pr:r
} ]), _r_(r);
}
}, o ? module.exports = s :e.p0 = s, _r_();
}(booking), booking.promise = function() {
return _i_("3da:9"), _r_(new booking.p0());
}, booking.promise.when = function(e) {
_i_("3da:10");
var t, i, n;
if (t = e.length, i = [], n = booking.promise(), !t) return n.fulfill([]), _r_(n);
return e.forEach(function(e, r) {
_i_("3da:716");
var a = function(e) {
_i_("3da:1763"), t--, i[r] = e, t || n.fulfill(i), _r_();
};
booking.promise.is(e) ? e.then(a, function(e) {
_i_("3da:2090"), n.reject(e), _r_();
}) :a(e), _r_();
}), _r_(n);
}, booking.promise.is = function(e) {
return _i_("3da:11"), _r_(e && "function" == typeof e.then);
}, booking.p0.prototype.pipe = function(e) {
return _i_("3da:12"), _r_(booking.promise.is(e) ? this.then(function(t) {
_i_("3da:991"), e.fulfill(t), _r_();
}, function(t) {
_i_("3da:992"), e.reject(t), _r_();
}) :this);
}, booking.p0.prototype.log = function(e) {
_i_("3da:13"), e = e || "";
var t = function(t, i) {
return _i_("3da:717"), _r_(function(n) {
if (_i_("3da:1576"), window.console && console.log && console.log([ e, t ].join(" "), n), i) {
var r = B.promise();
return r.reject(n), _r_(r);
}
return _r_(n);
});
};
return _r_(this.then(t("resolved - "), t("rejected - ", !0)));
}, booking.p0.prototype.finishChain = function() {
_i_("3da:14"), this.then(null, function(e) {
_i_("3da:718"), e instanceof Error && setTimeout(function() {
throw _i_("3da:2091"), e;
}, 0), _r_();
}), _r_();
}, window.goog = {}, goog.inherits = B.tools.inherits, goog.base = B.tools.base, goog.abstractMethod = B.tools.abstractMethod, goog.addSingletonGetter = B.tools.addSingletonGetter, goog.isBoolean = function(e) {
return _i_("3da:15"), _r_("boolean" == typeof e);
}, goog.isNumber = function(e) {
return _i_("3da:16"), _r_("number" == typeof e);
}, goog.isString = function(e) {
return _i_("3da:17"), _r_("string" == typeof e);
}, goog.isObject = function(e) {
_i_("3da:18");
var t = typeof e;
return _r_("object" === t && null != e || "function" === t);
}, goog.isArray = function(e) {
return _i_("3da:19"), _r_("array" === $.type(e));
}, goog.isFunction = function(e) {
return _i_("3da:20"), _r_("function" === $.type(e));
}, function(e) {
_i_("3da:21"), e.ajaxSetup && e.ajaxSetup({
cache:!1,
beforeSend:function(t, i) {
if (_i_("3da:1764"), t.setRequestHeader("X-Booking-Pageview-Id", booking.env.pageview_id), t.setRequestHeader("X-Booking-AID", booking.env.aid || booking.env.b_aid), t.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid), booking.env.b_site_type_id && t.setRequestHeader("X-Booking-SiteType-Id", booking.env.b_site_type_id), booking.env.b_partner_channel_id && t.setRequestHeader("X-Partner-Channel-Id", booking.env.b_partner_channel_id), booking.env.b_label && t.setRequestHeader("X-Booking-Label", encodeURIComponent(booking.env.b_label || "")), booking.env.b_csrf_token && t.setRequestHeader("X-Booking-CSRF", booking.env.b_csrf_token), booking.env.b_lang_for_url && t.setRequestHeader("X-Booking-Language-Code", booking.env.b_lang_for_url), booking.env.b_extra_ajax_headers) for (var n in booking.env.b_extra_ajax_headers) booking.env.b_extra_ajax_headers.hasOwnProperty(n) && t.setRequestHeader(n, booking.env.b_extra_ajax_headers[n]);
var r = booking.require("et"), a = r.tracked();
a && t.setRequestHeader("X-Booking-Client-Info", a);
var o = e("#req_info").html();
o && t.setRequestHeader("X-Booking-Info", o), _r_();
}
}), _r_();
}(window.jQuery), window.bookmark = function(e, t, i) {
if (_i_("3da:22"), window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(t, e, ""); else if (window.external) try {
window.external.AddToFavoritesBar(e, t);
} catch (n) {
window.external.AddFavorite(e, t);
} else window.opera && window.print && (i.title = t);
return _r_(!1);
}, window.addBookmark = function(e, t) {
_i_("3da:23"), window.sidebar ? window.sidebar.addPanel(e, t, "") :document.all ? window.external.AddFavorite(t, e) :alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D"), _r_();
}, window.hideFrameContainer = function(e) {
if (_i_("3da:24"), document.getElementById) {
var t = document.getElementById(e);
t.style.display = "none", document.getElementById("headline_newsletter").style.display = "block", document.getElementById("headline_createprofile").style.display = "none";
}
_r_();
}, window.changeHeadline = function() {
_i_("3da:25"), document.getElementById("headline_newsletter").style.display = "none", document.getElementById("headline_createprofile").style.display = "block", _r_();
}, window.hideEl = function e(t) {
_i_("3da:26"), $.isArray(t) && $.each(t, function() {
_i_("3da:1094"), e(this), _r_();
}), $("#" + t).hide(), _r_();
}, window.showEl = function(e) {
_i_("3da:27"), $("#" + e).show(), _r_();
}, window.showFrameContainer = function(e, t, i, n, r, a, o, s) {
if (_i_("3da:28"), document.getElementById) {
var _ = document.getElementById(e), l = document.getElementById(t), d = document.getElementById(i);
if ("block" === l.style.display) return l.style.display = "none", _r_(!1);
d.src !== n && (d.src = n), l.style.visibility = "hidden", l.style.display = "block";
var c = $(_).position() || {}, u = c.left, h = c.top;
o && (u += o), s && (h += s), r || (r = l.offsetWidth);
var f = document.getElementById("bodyconstraint").offsetWidth;
return u + r > f && (u = f - r - 40), l.style.left = u + "px", l.style.top = h + "px", l.style.visibility = "visible", _r_(!1);
}
window.open(n), _r_();
}, window.sSc = function(e, t, i) {
_i_("3da:29"), document.getElementById && (document.getElementById("rsc_" + e).innerHTML = i), _r_();
}, window.sSc3 = function(e, t) {
_i_("3da:30"), $("li[id^=" + e + "]").attr("style", "display: none; "), $("li[id^=" + t + "]").removeAttr("style"), _r_();
}, window.sSc2 = function(e, t, i) {
if (_i_("3da:31"), document.getElementById) {
document.getElementById("rnr") && (document.getElementById("rnr").innerHTML = e);
for (var n = -1; 10 > n; n++) {
var r = document.getElementById("rl" + n);
r && (r.style.color = "", r.style.textDecoration = "underline");
}
t.style.color = "#003580", t.style.textDecoration = "none", t.blur(), $("#gr_profile_chooser ul").removeClass().addClass(i), $(".review_filter_sub").text($(t).find(".key").text());
var a;
a = "group" === i || "review_category_group_of_friends" === i ? "group_big" :"solo_traveller" === i ? "solo_big" :"family_with_young_children" === i || "review_category_family" === i ? "youngchildren_big" :"mature_couple" === i ? "maturecouple_big" :"family_with_older_children" === i ? "oldchildren_big" :"with_friends" === i ? "withfriends_big" :"young_couple" === i || "review_category_couple" === i ? "youngcouple_big" :"global_big", $(".review_user_type").attr("class", "review_user_type type_" + a);
}
_r_();
}, $(function() {
_i_("3da:32"), $(".newsletter_ajax_error").hide(), $('input#to[type="text"]').css({
backgroundColor:"#FFFFFF"
}), $('input#to[type="text"]').focus(function() {
_i_("3da:719"), $(this).css({
color:"#003580"
}), this.value === this.defaultValue && (this.value = ""), this.value !== this.defaultValue && this.select(), _r_();
}), $("input.text-input").blur(function() {
_i_("3da:720"), $(this).css({
backgroundColor:"#FFFFFF"
}), _r_();
}), _r_();
}), function(e, t) {
_i_("3da:33"), t = t || {};
var i = e.console || {};
i.warn = i.warn || function() {};
var n = {
_list:{},
get:function(e) {
return _i_("3da:1095"), _r_(n._list[e]);
},
set:function(e, t) {
_i_("3da:1096"), e = e || "", t = t || "", "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, "")), "string" == typeof t && (t = t.replace(/^\s+|\s+$/g, "")), e.length > 0 && "string" == typeof e || "string" != typeof e ? ("undefined" != typeof n._list[e] && i.warn("Booking Strings: replacing string with id: " + e), n._list[e] = t) :i.warn("Booking Strings: trying to insert string with empty id"), _r_();
}
}, r = function(e, t) {
return _i_("3da:721"), _r_(n["undefined" != typeof t ? "set" :"get"](e, t));
};
t.strings = r, t.strings.get = n.get, t.strings.set = n.set, _r_();
}(window, booking), B.define("search-config", [ "tmpl_data", "event-emitter" ], function(e, t, i) {
"use strict";
_i_("3da:34");
function n(e) {
if (_i_("3da:335"), !(this instanceof n)) return _r_(new n(e));
this.adults = Number(e.b_adults) || 0, this.children = Number(e.b_children) || 0, this.childrenAges = this.children ? e.b_children_ages.map(Number) :[], this.order = Number(e.b_room_order), _r_();
}
n.prototype.toString = function() {
_i_("3da:722");
for (var e = [], t = 0; t < this.adults; t++) e.push("A");
return e = e.concat(this.childrenAges), _r_(e.join(","));
};
function r(r) {
_i_("3da:336"), r === i && (r = e("b_search_config")), r ? this._set(r) :(this.isDefault = !0, this.isGroupSearch = !1, this.adults = 2, this.children = 0, this.rooms = [ n({
b_adults:2,
b_children:0,
b_children_ages:[],
b_room_order:1
}) ], this.childrenAges = []), t.extend(this), _r_();
}
return r.prototype._set = function(e) {
_i_("3da:723"), this.isDefault = !1, this.isGroupSearch = Boolean(Number(e.b_is_group_search)), this.adults = Number(e.b_adults_total), this.children = Number(e.b_children_total) || 0, this.pets = Number(e.b_pets_total) || 0, this.rooms = e.b_rooms.map(n), this.childrenAges = this.rooms.reduce(function(e, t) {
return _i_("3da:1951"), _r_(e.concat(t.childrenAges));
}, []), this.childrenAges.sort(), _r_();
}, r.prototype.set = function(e) {
_i_("3da:724"), this._set(e), this.emit("change"), _r_();
}, r.prototype.toArray = function(e) {
return _i_("3da:725"), _r_(e ? new r(e).toArray() :this.rooms.map(Function.prototype.call, n.prototype.toString));
}, r.prototype.toObject = function(e) {
return _i_("3da:726"), _r_(this.toArray(e).reduce(function(e, t, i) {
return _i_("3da:1765"), e["room" + (i + 1)] = t, _r_(e);
}, {}));
}, r.prototype.getRawValue = function() {
return _i_("3da:727"), _r_({
b_adults_total:this.adults,
b_nr_rooms_needed:this.rooms.length,
b_children_total:this.children,
b_children_ages_total:this.childrenAges,
b_is_group_search:this.isGroupSearch ? 1 :0,
b_pets_total:this.pets,
b_rooms:this.rooms.map(function(e) {
_i_("3da:2092");
var t = {
b_adults:e.adults,
b_room_order:e.order
};
return e.children && (t.b_children = e.children, t.b_children_ages = e.childrenAges), _r_(t);
})
});
}, _r_(new r());
}), booking.formatter = booking.formatter || {}, booking.formatter.date = B.require("formatting/date").compat, B.define("fragment", [ "jquery", "promise" ], function(e, t) {
_i_("3da:35");
var i, n, r = B.debug("fragment"), a = 15, o = 200, s = 50, _ = 0, l = [], d = function() {
_i_("3da:728");
var t, i, n = [], a = !0;
if (1 === l.length) i = l[0], i.args.tmpl && (a = !1), t = Object.assign({
name:i.name
}, i.args), n.push(i); else {
for (var o = {}, s = 0, _ = l.length; _ > s; s++) i = l[s], n.push(i), i.name in o || (o[i.name] = {}), o[i.name][i.id] = i.args;
t = {
batch:JSON.stringify(o)
};
}
var d = a ? B.env.b_fragment_url_json :B.env.b_fragment_url_html;
l = [], r.info("Request", d, t), e.ajax({
url:d,
data:t,
type:"POST",
cache:!1
}).done(function(e) {
if (_i_("3da:2093"), r.info("Resolve", e, n), 1 === n.length) n[0].resolve(e); else for (var t, i = 0, a = n.length; a > i; i++) t = n[i], t.resolve(e[t.name] ? e[t.name][t.id] :void 0);
(B.env.b_dev_server || B.env.dev_server) && h(e), _r_();
}).fail(function(e) {
_i_("3da:1766"), r.info("Reject", e, n);
for (var t = 0, i = n.length; i > t; t++) n[t].reject();
_r_();
}), _r_();
}, c = function(e, r) {
if (_i_("3da:729"), !e) throw new Error("Fragment name cannot be undefined.");
return _r_(new t(function(t, c) {
_i_("3da:1767"), clearTimeout(n), 0 === l.length && (i = Date.now()), l.push({
id:"frg-" + _++,
name:e,
args:r,
resolve:t,
reject:c
}), l.length > 1 && Date.now() - i > o || l.length === s ? d() :n = setTimeout(d, a), _r_();
}));
}, u = function(e) {
_i_("3da:730");
var t = {};
if (e) for (var i in e) if (e.hasOwnProperty(i)) {
var n = e[i];
t[i] = "object" == typeof n ? JSON.stringify(n) :n;
}
return _r_(t);
}, h = function(e) {
_i_("3da:731");
var t = B.require("events"), i = window.B.devTools.trackedExperiments || [], n = {};
i.length;
"object" == typeof e && (B.devTools = B.devTools || {}, i = i.concat(e._exp_debug_data)), window.B.devTools.trackedExperiments = i.reduce(function(e, t, i) {
return _i_("3da:1952"), "undefined" != typeof t && (isNaN(n[t.name]) ? (n[t.name] = e.length, e.push(t)) :e[n[t.name]].name == t.name ? e[n[t.name]].trackingPoints = e[n[t.name]].trackingPoints.concat(t.trackingPoints) :console.warn("ops", e[n[t.name]].name, t.name)), _r_(e);
}, []), t.trigger("TRACKING.exp_tracking_update"), _r_();
}, f = function(e, t) {
return _i_("3da:732"), _r_(c(e, u(t)));
};
return _r_({
call:f
});
}), booking.define("squeak", function() {
"use strict";
_i_("3da:36");
var e = 10, t = !1, i = [], n = {};
function r() {
_i_("3da:337"), i.length ? setTimeout(o, 1e3) :t = !1, _r_();
}
function a(r) {
if (_i_("3da:338"), n.hasOwnProperty(r) || (n[r] = 0), ++n[r] > e) return _r_();
if (i.push(r), t) return _r_();
t = !0, setTimeout(o, 1e3), _r_();
}
function o() {
_i_("3da:339"), $.ajax({
url:"/squeak",
type:"GET",
success:r,
error:r,
data:{
pid:booking.env.pageview_id,
stid:booking.env.b_stid,
sqk:"1:" + i.join(",")
}
}), i = [], _r_();
}
return _r_(a);
}), booking.squeak = booking.require("squeak"), B.define("et_deprecation_warnings", function(e, t, i) {
_i_("3da:37");
var n, r = {
EXP:"exp",
GET_VARIANT:"get_variant",
STAGE:"stage",
GOAL:"goal",
CUSTOM_GOAL:"custom_goal"
}, a = "et_deprecation_warnings_filter", o = [], s = !1;
try {
s = window.localStorage && window.sessionStorage ? !0 :!1, s && window.localStorage.setItem("btest", "1");
} catch (_) {
s = !1;
}
function l(e) {
_i_("3da:340"), "undefined" != typeof e && s && localStorage.setItem(a, e), _r_();
}
function d() {
_i_("3da:341");
var e = s && localStorage.getItem(a), t = e && new RegExp(e);
return _r_(function(e) {
return _i_("3da:994"), _r_(!t || t.test(e));
});
}
function c(e) {
return _i_("3da:342"), _r_(B.jsdt && "undefined" != typeof B.jsdt[e] && B.jsdt[e]);
}
function u(e) {
return _i_("3da:343"), _r_(e.replace("__hashed", ""));
}
function h(e) {
_i_("3da:344"), o.push(e), _r_();
}
function f() {
_i_("3da:345");
var e = o;
o = [], e.filter(d()).forEach(function(e) {
_i_("3da:1097"), console && console.log(e[0], e[1], e[2], e[3]), _r_();
}), _r_();
}
function p(e) {
_i_("3da:346");
var t = new Error(), i = t.stack && t.stack.split && t.stack.split("\n").map(function(e) {
if (_i_("3da:1768"), "string" == typeof e) {
var t = e.match(/(http[\/\w\.\-\:]*)/);
return _r_(t && t[1] ? t[1] :"");
}
return _r_("");
});
return _r_(i && i[e] ? i[e] :"");
}
function g(e, t, i) {
_i_("3da:347");
var a, o = c(t), s = u(t), _ = [ "%c" + s, "font-weight: bold;" ];
e === r.EXP ? a = o ? "B.track.exp is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.exp is deprecated, but used for tracking. Please use B.et.track instead." :e === r.GET_VARIANT ? a = o ? "B.track.getVariant is deprecated. v" + o + " of went fullon. Please, cleanup." :"B.track.getVariant method is deprecated, but used for tracking. Please, use B.et.track instead." :e === r.STAGE ? a = o ? "B.track.stage is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.stage method is deprecated, but used for tracking. Please, use B.et.stage instead." :e === r.GOAL ? a = "B.track.goal method is deprecated, but used for tracking. Please, use B.et.goal instead." :e === r.CUSTOM_GOAL && (a = o ? "B.track.custom_goal is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.custom_goal method is deprecated, but used for tracking. Please, use B.et.customGoal instead."), a && (_.push(a), _.push(p(4)), h(_)), n && window.clearTimeout(n), n = window.setTimeout(f, 1e3), _r_();
}
t.DEPRECATED = r, t.showDeprecationWarning = g, t.setFilter = l, _r_();
}), function(e, t, i) {
_i_("3da:38");
var n, r = "experiments", a = "startup", o = "experiments_load", s = "startup_load", _ = t.env, l = _ && _.b_site_type_id || "", d = i(document), c = _ && _.reportJSTracking || !1, u = function(e) {
return _i_("3da:733"), _r_("function" == typeof e);
}, h = function(e) {
_i_("3da:734");
var i = "b_site_experiment_" + e, n = t.jst && t.jst[e] > 0;
return _r_(i in _ && +_[i] > 0 || n);
};
if (B.env.et_deprecation_warnings) var f = B.require("et_deprecation_warnings").showDeprecationWarning, p = B.require("et_deprecation_warnings").DEPRECATED;
var g = t.require("request_info");
t.ensureNamespaceExists(r), t.ensureNamespaceExists(a), t.ensureNamespaceExists(o), t.ensureNamespaceExists(s), n = t[a], n.init = function(e) {
_i_("3da:735");
var n, l, d, c, f, p, g, m, v, b, w, y, k, S = [], C = 9, x = "ready" === e;
if (t.env.b_inc_filters) {
var B = t.env.b_inc_filters;
for (var E in B) {
var T = B[E];
for (var $ in T) t.jst[$] = T[$];
}
}
n = x ? r :o, d = t[n];
for (var N in d) {
if (t.b_disable_run && isNaN(_["b_site_experiment_" + N]) && t.jst && void 0 === t.jst[N]) continue;
d[N] && S.push([ d[N].priority || C, N, n, !h(N) ]);
}
l = x ? a :s, c = t[l];
for (f in c) b = c[f], S.push([ b.priority || C, f, l, !1 ]);
if (S.length > 0) for (S.sort(), y = 0, k = S.length; k > y; y += 1) p = S[y], g = p[1], m = p[2], b = t[m][g], i.extend(b, {
strings:t.strings
}), v = p[3] ? b.initElse :b.init, b.ns = "booking." + m, b.name = g, u(v) && setTimeout(function(e, t, i) {
return _i_("3da:2624"), _r_(function() {
_i_("3da:2695"), w = e.execute(t, i), w === !0 && (i.init = i.initElse = null), _r_();
});
}(this, v, b), 0);
i(document).trigger(e + ":finished"), _r_();
}, n.execute = function(e, t) {
return _i_("3da:736"), _r_(e.call(t));
}, _.amTracking = [], function() {
_i_("3da:737");
var n = 20, r = Object.prototype.toString, a = Array.prototype.slice, o = i(e), s = i(document), d = function(e) {
_i_("3da:1769");
var t, n = e.offset(), r = "function" == typeof n.constructor ? n.constructor :{
name:"OtherConstructor"
};
if ("ClientRect" === r.name) {
if (t = i(e.trackingSelector).eq(0).offset()) return _r_(t.top);
return _r_(!1);
}
return _r_(n.top);
}, u = function(e) {
_i_("3da:1770");
var t = d(e);
if (t === !1) return _r_(!1);
return _r_(o.scrollTop() + o.height() > t + n && e.is(":visible"));
}, h = function(e, t) {
_i_("3da:1771");
try {
o.trigger(e, t);
} catch (i) {}
_r_();
}, m = {
css:jQuery.fn.css,
show:jQuery.fn.show,
hide:jQuery.fn.hide,
toggle:jQuery.fn.toggle
}, v = {
show:/block|inline|list-item|inline-block/,
hide:/none/
};
jQuery.fn.css = function(e, t) {
_i_("3da:1772");
var i = m.css.apply(this, a.apply(arguments));
return this.selector && ("undefined" != typeof t && "display" === e ? h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:t
}) :"[object Object]" === r.apply(e) && "display" in e && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:e.display
})), _r_(i);
}, i.each("show hide toggle".split(" "), function(e, t) {
_i_("3da:1773"), jQuery.fn[t] = function() {
_i_("3da:2403");
var e = m[t].apply(this, a.apply(arguments));
return this.selector && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:this.css("display")
}), _r_(e);
}, _r_();
});
var b, w, y, k, S, C = [], x = [], E = [], T = [], $ = {}, N = _.b_action || "fixme";
k = function() {
_i_("3da:1774"), S = !1, _r_();
}, w = function() {
_i_("3da:1775");
var n, r, a = "", s = "";
if (b = !1, S || t.sending_logo) return b = setTimeout(w, 50), _r_();
if (C.length > 0 || x.length > 0 || E.length > 0 || T.length > 0) {
if (S = !0, o.trigger("ClickTale:TrackDynamic", {
experiments:C
}), n = x.length ? ";what=" + x.join(",") :"", E.length) {
a = ";custom=";
for (var d = 0, u = E.length; u > d; d++) a += E[d].join("|"), u > d + 1 && (a += ",");
}
if (T.length) {
s = ";stage=";
for (var d = 0, u = T.length; u > d; d++) s += T[d].join("|"), u > d + 1 && (s += ",");
}
g.populate(C), g.populate(T.map(function(e) {
return _i_("3da:2625"), _r_(e.join("|"));
}));
var h = "/js_tracking?ver=1" + n + a + s + ";ref_action=" + N + ";sid=" + _.b_sid + ";aid=" + _.b_aid + ";lang=" + _.b_lang_for_url + ";new=1;pid=" + _.pageview_id + ";exps=" + C.join(",") + ";stype=" + l;
try {
i.ajax({
url:h,
async:!0,
type:"GET",
complete:k
});
} catch (f) {
r = new Image(), r.onload = r.onerror = k, r.src = h, c && (c = !1, e.onerror("3rd_js_tracking_report: " + h, h, 1));
}
B.devTools && B.devTools.trackedExperimentsFilter && B.eventEmitter.trigger("TRACKING.js_exp_tracking_request", {
exps:C,
jsGoals:x,
jsCustomGoals:E,
jsStages:T
}), _.b_js_tracking_info_to_console && e.console && (C.length && e.console.info("JS exp tracking triggered: " + C.join(", ")), x.length && e.console.info("JS goal tracking triggered: " + x.join(", ")), E.length && e.console.info("JS custom goal tracking triggered: " + E.join(", ")), T.length && e.console.info("JS stage tracking triggered: " + T.join(", "))), C = [], x = [], E = [], T = [];
}
_r_();
}, y = function(n, r, a) {
if (_i_("3da:1776"), "undefined" == typeof n || null === n || "bot" === _.b_browser) return _r_();
var o, s, l, d, c, u = i.isArray(n) ? n :n.split && n.length ? n.split(",") :[], h = t.env.js_experiment_tracking || {};
if (u.length && !isNaN(a)) {
if (1 > a || a > 9) return _r_();
c = u[0], d = t.jst && "undefined" != typeof t.jst[c] && t.jsdt && !t.jsdt[c];
var g = c + ":stage" + a;
d && "undefined" == typeof _.amTracking[g] && (n = !0, T.push([ c, a ]), _.amTracking[g] = 1), a = void 0, u.length = 0;
}
for (o = 0, s = u.length; s > o; o += 1) c = u[o], t.checkExpTagHashed && t.checkExpTagHashed(c), B.env.et_deprecation_warnings && f(p.EXP, c), d = t.jst && "undefined" != typeof t.jst[c] && t.jsdt && !t.jsdt[c], l = (isNaN(+c) && h ? h[c] :c) || (d ? c :!1), (/^[0-9]+$/.test(l) || d) && "undefined" == typeof _.amTracking["e" + l] && (C.push(l), _.amTracking["e" + l] = 1);
if (r && (a || "undefined" != typeof _.amTracking["g" + r] || (x.push(r), _.amTracking["g" + r] = 1), !a || $[r] && $[r][a] || (E.push([ r, a ]), $[r] || ($[r] = []), $[r][a] = 1)), n !== !0 && !C.length) return _r_(!1);
h && h.njst && /^[0-9]+$/.test(h.njst) && "undefined" == typeof _.amTracking["e" + h.njst] && (C.push(h.njst), _.amTracking["e" + h.njst] = 1), b && (e.clearTimeout(b), b = !1), b = e.setTimeout(w, 50), _r_();
}, t.track = {
exp:y,
stage:function(e, i) {
if (_i_("3da:2094"), !e || 0 > +i || +i > 9 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_(!0);
return y(e, void 0, i), _r_(!0);
},
goal:function(e) {
if (_i_("3da:2095"), B.env.et_deprecation_warnings && f(p.GOAL, e), !e) return _r_();
y(!0, e), _r_();
},
custom_goal:function(e, i) {
if (_i_("3da:2096"), B.env.et_deprecation_warnings && f(p.CUSTOM_GOAL, e, i), !e || 1 > +i || +i > 5 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_();
y(!0, e, i), _r_();
},
getVariant:function(e) {
if (_i_("3da:2097"), t.checkExpTagHashed && t.checkExpTagHashed(e), B.env.et_deprecation_warnings && f(p.GET_VARIANT, e), e && t.jst && !isNaN(t.jst[e])) return _r_(t.jst[e]);
return _r_(!1);
},
onView:function(e) {
_i_("3da:2098");
var n = i(e).eq(0), s = this.exp, _ = this.stage;
n.trackingSelector = e;
var l = function() {
_i_("3da:2555");
var s = a.apply(arguments), _ = s.shift(), l = i.proxy(function() {
_i_("3da:2710");
var a;
u(n) && (a = "ONVIEW:" + ("[object String]" === r.apply(e) ? e :i(e).selector), o.trigger(a, {
source:e
}), _.apply(t.track, this.args), o.unbind("resize scroll", l)), _r_();
}, {
args:s
});
n.length && ("none" === n.css("display") && n.css({
display:"block",
visibility:"hidden"
}), o.bind("resize scroll", l), l()), _r_();
};
return _r_({
exp:function() {
_i_("3da:2626");
var e = a.apply(arguments);
e.unshift(s), l.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2627");
var e = a.apply(arguments);
e.unshift(_), l.apply(t.track, e), _r_();
}
});
},
onNav:function() {
return _i_("3da:2099"), _r_({
exp:function() {},
stage:function() {}
});
}
}, i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3da:1777");
var r = n.slice(0, 1), o = n.replace(r, r.toUpperCase());
t.track[n] = t.track["on" + o] = function(e) {
_i_("3da:2497");
var r = i(e), o = function() {
_i_("3da:2683");
var e = a.apply(arguments), o = e.shift(), s = i.proxy(function() {
_i_("3da:2739"), o.apply(t.track, this.args), r.unbind(n, s), _r_();
}, {
args:e
});
r.bind(n, s), _r_();
};
return _r_({
exp:function() {
_i_("3da:2696");
var e = a.apply(arguments);
e.unshift(t.track.exp), o.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2697");
var e = a.apply(arguments);
e.unshift(t.track.stage), o.apply(t.track, e), _r_();
}
});
}, t.track["live" + o] = function(e) {
_i_("3da:2404");
var r = function() {
_i_("3da:2659");
var r = a.apply(arguments), o = r.shift(), _ = i.proxy(function() {
_i_("3da:2734"), o.apply(t.track, this.args), s.undelegate(e, n, _), _r_();
}, {
args:r
});
s.delegate(e, n, _), _r_();
};
return _r_({
exp:function() {
_i_("3da:2684");
var e = a.apply(arguments);
e.unshift(t.track.exp), r.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2685");
var e = a.apply(arguments);
e.unshift(t.track.stage), r.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("show hide".split(" "), function(e, n) {
_i_("3da:1778"), t.track[n] = function(e) {
_i_("3da:2405");
var r = i(e);
if (!r.selector) return _r_({
exp:function() {},
stage:function() {}
});
var s = function() {
_i_("3da:2660");
var e = a.apply(arguments), s = e.shift(), _ = i.proxy(function(e, i) {
_i_("3da:2735"), v[n].test(i.value) && (i.elem.selector === r.selector || 1 === r.length && i.elem[0] === r[0]) && (s.apply(t.track, this.args), o.unbind("ELEMENT_DISPLAY:" + r.selector, _)), _r_();
}, {
args:e
});
o.bind("ELEMENT_DISPLAY:" + r.selector, _), _r_();
};
return _r_({
exp:function() {
_i_("3da:2686");
var e = a.apply(arguments);
e.unshift(t.track.exp), s.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2687");
var e = a.apply(arguments);
e.unshift(t.track.stage), s.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3da:1779");
var r = "[data-track-on-" + n + "]", a = function() {
_i_("3da:2406"), t.track.exp.call(t.track, i(this).data("track-on-" + n) + ""), _r_();
};
s.delegate(r, n, a), _r_();
});
var A = {
mouseenter:"hover",
click:"click"
};
s.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
_i_("3da:1780");
var n = (i(this).data("google-track") || "").split("/");
n[0].toLowerCase() === A[e.type] && t.google.trackEvent.apply(t.google, n), _r_();
}), B.env.b_new_ga_track || s.delegate("[data-ga-track]", "click", function(e) {
_i_("3da:2100");
var n = (i(this).data("ga-track") || "").split(":");
n[0].toLowerCase() === A[e.type] && t.google.trackPageview.apply(t.google, n), _r_();
}), _r_();
}(), _.trackExperiment = function() {
_i_("3da:738"), t.track.exp.apply(this, Array.prototype.slice.apply(arguments)), _r_();
}, i(function() {
_i_("3da:739"), d.trigger("ready:before"), t[a].init("ready"), _r_();
}), i(e).on("load", function() {
_i_("3da:740"), t[a].init("load"), _r_();
}), t.run = function(e) {
return _i_("3da:741"), _r_({
afterReady:function(e) {
_i_("3da:1953"), this.onReady(function() {
_i_("3da:2498"), d.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3da:1954"), t[a][e] = {
priority:9,
init:i
}, _r_();
},
onLoad:function(i) {
_i_("3da:1955"), t[s][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.runExp = function(e) {
return _i_("3da:742"), _r_({
beforeReady:function(e) {
_i_("3da:1956"), d.bind("ready:before", e), _r_();
},
afterReady:function(e) {
_i_("3da:1957"), this.onReady(function() {
_i_("3da:2499"), d.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3da:1958"), t[r][e] = {
priority:9,
init:i
}, _r_();
},
afterLoad:function(e) {
_i_("3da:1959"), this.onLoad(function() {
_i_("3da:2500"), d.bind("load:finished", e), _r_();
}), _r_();
},
onLoad:function(i) {
_i_("3da:1960"), t[o][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.env.b_occupancy = function() {
_i_("3da:995");
var e, i, n, r, a = t.env.b_group, o = 0, s = 0, _ = {
adults:2,
children:0,
guests:2
};
if ("[object Array]" !== Object.prototype.toString.apply(a)) return _r_(_);
if (i = a.length, n = a[0], r = i > 1 || 1 === i && (1 === n.guests || n.guests > 2 || n.children > 0), !r) return _r_(_);
for (e = 0; i > e; e += 1) n = a[e], o += n.guests, s += n.children;
return _r_({
adults:o,
children:s,
guests:o + s
});
}(), t.eventEmitter = i(e), e.sNSExperiments = r, e.sNSStartup = a, e.sNSExperimentsLoad = o, e.sNSStartupLoad = s, _r_();
}(window, window.booking, window.jQuery), B.define("component", function() {
"use strict";
_i_("3da:39");
function e() {}
return e.prototype.prepare = function(e) {
_i_("3da:743");
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
_r_();
}, e.prototype.init = function() {}, e.prototype.destroy = function() {}, e.prototype.render = function() {}, e.extend = function(t, i) {
_i_("3da:747");
var n = function() {}, r = i ? new i() :new e();
for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
return n.prototype = r, n.extend = function(t) {
return _i_("3da:1782"), _r_(e.extend.call(null, t, n));
}, _r_(n);
}, _r_(e);
}), B.define("component/legacy", function(e, t, i) {
"use strict";
_i_("3da:40");
var n = {};
function r(e, t) {
_i_("3da:349"), t.legacy = !0, B.define("component/" + e, function() {
return _i_("3da:1098"), _r_(t);
}), _r_();
}
function a(e, t, i) {
_i_("3da:350");
var r = B.require("component/" + e);
if (!r.legacy) throw new Error("Illegal legacy B.components.require of non-legacy component " + e + ".");
var a = t ? t.data("component-instance-" + e) :n[e];
return (i || void 0 === a) && (a = "function" == typeof r ? new r(B, $) :library[e], i || (t ? t.data("component-instance-" + e, a) :n[e] = a, a.init && a.init(t))), _r_(a);
}
function o(e) {
_i_("3da:351");
for (var t, i = 1, n = arguments.length; n > i; i++) t = a(arguments[i], void 0, !0), t.extend ? t.extend(e) :$.extend(e, t);
_r_();
}
function s(e, t) {
_i_("3da:352");
var i = a(t, void 0, !0);
$.extend(e, i, {
parent:i
}), _r_();
}
t.register = function(e) {
_i_("3da:748"), e.components = e.components || {}, e.components.define = r, e.components.extend = o, e.components.inherit = s, e.components.require = a, _r_();
}, _r_();
}), B.define("component/loader", function(e, t, i) {
"use strict";
_i_("3da:41");
var n = e("jquery");
function r(t, i) {
_i_("3da:353");
var r = e("component/" + t), a = i.data("component-instance-" + t);
return void 0 === a && (r.legacy ? (a = new r(B, n), a.init && a.init(i)) :(a = new r(), a.prepare({
el:i[0],
$el:i
}), a.init && a.init()), i.data("component-instance-" + t, a)), _r_(a);
}
function a(e, t) {
_i_("3da:354"), setTimeout(r.bind(null, e, t), 4), _r_();
}
function o(e) {
if (_i_("3da:355"), 0 == this.length) throw new Error("No element found with selector, unable to look for component.");
if (1 != this.length) throw new Error("Multiple elements found with selector, refusing to look for component.");
return _r_(r(e, this));
}
function s() {
return _i_("3da:356"), t.loadComponents(this), e("et").initAttributesTracking(this), _r_(this);
}
t.loadComponents = function(e) {
_i_("3da:749");
var t, i, r, o, s, _, l;
e = e || n("html");
var s = e.find("[data-component]");
for (e.is("[data-component]") && (s = e.length > 1 ? s.add(e) :s.add(e.filter("[data-component]"))), t = 0, r = s.length; r > t; t++) for (_ = s.eq(t), l = n.trim(_.attr("data-component")).split(/\s+/g), i = 0, o = l.length; o > i; i++) a(l[i], _);
_r_();
}, t.getComponent = function(e, t) {
_i_("3da:750");
var i, r = n(e);
if (t && r.data("component-instance-" + t)) return _r_(r.data("component-instance-" + t));
return i = r.attr("data-component"), _r_(i ? r.data("component-instance-" + i) :null);
}, t.registerJQuery = function() {
_i_("3da:751"), n.fn.component = o, n.fn.loadComponents = s, _r_();
}, _r_();
}), function(e, t) {
"use strict";
_i_("3da:42");
var i = e.require("component/loader"), n = e.require("component/legacy");
i.registerJQuery(), n.register(e), window.sNSStartup && e[sNSStartup] ? e[sNSStartup].bComponents = {
priority:100,
init:i.loadComponents
} :t(function() {
_i_("3da:1099"), i.loadComponents(), _r_();
}), _r_();
}(booking, jQuery), function() {
_i_("3da:43");
var e = B.require("jquery");
booking[sNSStartup].popups = {
priority:9,
popups:[],
tempTar:null,
sizes:{
s:{
width:300,
height:400
},
m:{
width:400,
height:400
},
l:{
width:600,
height:580
},
xl:{
width:850,
height:600
}
},
init:function() {
_i_("3da:1100");
var t = this;
e(document).on("click.popup_win", ".popup_s, .popup_m, .popup_l, .popup_xl", function() {
_i_("3da:2101");
for (var i = "l", n = e(this).attr("class").split(" "), r = 0; r < n.length; r++) n[r].indexOf("popup_") > -1 && (i = n[r].split("_")[1]);
return t.tempTar = e(this).attr("href") || e(this).data("url"), t.openPopup(i), _r_(!1);
}), _r_();
},
openPopup:function(e) {
_i_("3da:1101");
var t = this.sizes[e];
this.popups.push(window.open(this.tempTar, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + t.width + ",height=" + t.height + ",left=200,top=200")), this.popups.length > 1 && (this.popups[0].close(), this.popups.shift(), this.tempTar = null), _r_();
}
}, _r_();
}(), B.define("component/track", function(e, t, i) {
_i_("3da:44");
var n = e("component"), r = e("et");
i.exports = n.extend({
init:function() {
_i_("3da:1577");
var e = this.$el.attr("data-hash"), t = this.$el.attr("data-track") || "click", i = this.$el.attr("data-custom-goal"), n = this.$el.attr("data-stage");
if (!e) return _r_();
window.booking && booking.env && booking.env.b_dev_server && booking.env.componentTrackWhitelist && -1 === booking.env.componentTrackWhitelist.indexOf(e) && (booking.events ? booking.events.emit("NEW_DATA_TRACK_REFERENCE", this.$el, e) :booking.eventEmitter && booking.eventEmitter.trigger("NEW_DATA_TRACK_REFERENCE", [ this.$el, e ])), i ? r.on(t, this.$el).customGoal(e, i) :n ? r.on(t, this.$el).stage(e, n) :r.on(t, this.$el).track(e), _r_();
}
}), _r_();
}), B.define("component/fragment", function(e, t, i) {
_i_("3da:45");
var n = e("component"), r = e("fragment"), a = e("events"), o = e("when"), s = e("et");
i.exports = n.extend({
fragmentName:void 0,
fragmentTemplate:void 0,
fragmentIsCS:void 0,
fragmentArgs:{},
init:function() {
_i_("3da:1578");
var e = void 0 !== this.$el.attr("data-fragment-lazy"), t = this.$el.attr("data-fragment-event") || !1;
e ? (this._fragmentId = this.$el.attr("id"), this._fragmentOnActivateFragment = this._fragmentOnActivateFragment.bind(this), a.on("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment)) :t ? this._loadWithWhen(t) :this.fragmentLoadFragment(), _r_();
},
_fragmentOnActivateFragment:function(e) {
_i_("3da:1579"), e && e.id && e.id === this._fragmentId && (a.off("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment), this.fragmentLoadFragment()), _r_();
},
_loadWithWhen:function(e) {
_i_("3da:1580"), o({
events:e
}).run(function() {
_i_("3da:2501"), this.fragmentLoadFragment(), _r_();
}.bind(this)), _r_();
},
fragmentParamAttrs:function() {
_i_("3da:1581");
for (var e, t, i = {}, n = this.el.attributes, r = 0, a = n.length; a > r; r++) e = n[r], t = e.nodeName, t && t.length > 5 && 0 === t.indexOf("data-param-") && (i[t.slice(11)] = e.nodeValue);
return _r_(i);
},
fragmentLoadFragment:function() {
_i_("3da:1582");
var e = this.fragmentParamAttrs(), t = this.$el.attr("data-fragment-source"), i = this.$el.attr("data-fragment-name");
void 0 === i && (i = this.fragmentName);
var n, r, a = this.$el.attr("data-fragment-tmpl"), o = this.$el.attr("data-fragment-cs-tmpl");
void 0 !== a && void 0 !== o && B.env.b_is_dev_server && console.error("Fragment component cannot have both `fragment-tmpl` and `fragment-cs-tmpl` defined."), void 0 !== a ? (r = a, n = !1) :void 0 !== o ? (r = o, n = !0) :(r = this.fragmentTemplate, n = this.fragmentIsCS);
var s = Object.assign({}, this.fragmentArgs, e), _ = {
soruce:t,
tmpl:r,
isCS:n,
args:s
};
if (!1 !== this.fragmentBeforeRequest(_)) {
s = _.args, !n && r && (s.tmpl = r);
var l = this;
this.fragmentRequest(i, s).then(function(e) {
_i_("3da:2502");
var i = {
source:t,
data:e,
ctx:{},
args:s
};
if (!1 !== l.fragmentBeforeRender(i) && r) {
var a;
a = n ? B.jstmpl(r).render(Object.assign(i.ctx, i.data ? {
data:i.data
} :{})) :i.data || "", i.$targetEl ? i.$targetEl.html(a) :l.$el.html(a), l.fragmentAfterRender(i);
}
_r_();
}, function(e) {
_i_("3da:2503");
var i = {
source:t,
error:e
};
l.fragmentRequestError(i), _r_();
});
}
_r_();
},
fragmentRequest:function(e, t) {
return _i_("3da:1583"), _r_(r.call(e, t));
},
fragmentBeforeRequest:function() {},
fragmentRequestError:function() {},
fragmentBeforeRender:function() {},
fragmentAfterRender:function() {
_i_("3da:1587"), s.initAttributesTracking(this.$el), this.$el.loadComponents && this.$el.loadComponents(), _r_();
}
}), _r_();
}), booking.components.define("sh", function(e, t) {
"use strict";
_i_("3da:46");
var i = "SH", n = t(window);
function r(t) {
_i_("3da:357"), t.map(function(t) {
_i_("3da:1102"), e.eventEmitter.triggerHandler(i + ":" + t), _r_();
}), _r_();
}
function a(e) {
return _i_("3da:358"), _r_(n.scrollTop() + n.height() > e);
}
this.init = function(e) {
_i_("3da:752");
var i = e.offset().top, o = function() {
_i_("3da:1783"), a(i) && (r([ "seen" ]), n.unbind("scroll", o)), _r_();
};
n.bind("scroll", o), e.delegate(".lp-search-history-list-item", "click", function(e) {
_i_("3da:1784");
var i = t(this), n = i.find(".lp-search-history-list-item-link");
if (!n.length) return _r_();
var a = i.get(0).className.match(/sh-timestamp[^ \n]*/g) || [];
a.push("clicked"), r(a), _r_();
}), e.find(".lp-sh-hide-search").bind("click", function(e) {
_i_("3da:1785"), r([ "removed" ]), _r_();
}), o(), _r_();
}, _r_();
}), B.define("component/company/ga", function(e, t, i) {
_i_("3da:47");
var n = e("component"), r = e("utils"), a = e("ga-tracker");
i.exports = n.extend({
init:function() {
_i_("3da:1588"), this.options = r.nodeData(this.$el), this.options.trackEvents && this.$el.delegate("[data-track-event]", this.options.trackEvents, this.handleDOMEvent.bind(this)), this.options.trackOninit && this.track(this.split(this.options.trackOninit)), this.options.trackOnviewEvents && this.addOnViewElements(this.$el), _r_();
},
addOnViewElements:function(e) {
_i_("3da:1589");
var t = a[this.options.tracker];
e.find("[data-track-event-onview]").each(function(e, i) {
_i_("3da:2504");
var n = $(i);
B.tools.dom.watchIfBlockVisibleInViewport(n, function() {
_i_("3da:2713");
var e = this.split(n.data("track-event-onview"));
this.track.call(this, [ t ].concat(e)), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
},
handleDOMEvent:function(e) {
_i_("3da:1590");
var t = a[this.options.tracker];
if (!t) throw new Error("Tracker is not defined: " + this.options.tracker);
var i = ($(e.currentTarget).data("track-event") || "").split(/\s*\/\s*/);
e.type.toLowerCase() === i[0].toLowerCase() && this.track.call(this, [ t ].concat(i.slice(1))), _r_();
},
split:function(e) {
return _i_("3da:1591"), _r_((e || "").split(/\s*\/\s*/));
},
track:function(e) {
_i_("3da:1592"), a.trackEvent.apply(a, e), _r_();
}
}), _r_();
}), B.define("user-left-client", function(e, t, i) {
"use strict";
_i_("3da:48");
var n = e("user-left-tab"), r = e("user-left-store"), a = e("utils/simple-unique-id"), o = "lastSeen";
i.exports = {
enabled:r.enabled,
onHideTab:function(e) {
_i_("3da:1103"), r.set(o, new Date().getTime()), _r_();
},
onShowTab:function(e) {
_i_("3da:1104"), r.set(o, 0), _r_();
},
addEventListeners:function() {
_i_("3da:1105"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), n.addListener("show", this._onShowTab), n.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3da:1106"), this._onShowTab && n.removeListener("show", this._onShowTab), this._onHideTab && n.removeListener("hide", this._onHideTab), _r_();
},
register:function(e) {
_i_("3da:1107"), this.tabId = e + "_" + a(), this.addEventListeners(), _r_();
}
}, _r_();
}), B.define("user-left-master", function(e, t, i) {
_i_("3da:49");
var n = e("event-emitter"), r = e("user-left-tab"), a = e("user-left-store"), o = e("utils/simple-unique-id"), s = "lastSeen", _ = booking.env.bp_has_left_threshold ? booking.env.bp_has_left_threshold :7, l = 1e3, d = "(1) ";
i.exports = n.extend({
enabled:a.enabled,
didUserLeft:function() {
if (_i_("3da:1593"), this.halt) return _r_();
this.checkSessionMarker() || (this.stopCounting(), this.removeEventListeners());
var e = parseInt(a.get(s), 10);
if (!e) return _r_();
var t = new Date().getTime(), i = (t - e) / 1e3;
i >= _ && (this.stopCounting(), this.showNotification()), _r_();
},
removeNotification:function() {
_i_("3da:1594"), this.originalFavicon && this.changeFavicon(this.originalFavicon), document.title = this.originalTitle, _r_();
},
changeFavicon:function(e) {
_i_("3da:1595"), this.$favicon && this.$favicon.attr("href", e), _r_();
},
setNotifyFavicon:function(e) {
_i_("3da:1596"), this.$favicon = $('link[rel="shortcut icon"]').first(), this.$favicon.length && (this.originalFavicon = this.$favicon.attr("href"), this.notifyFavicon = e), _r_();
},
setNotificationStatus:function(e) {
_i_("3da:1597"), this.notificationStatus = e === !1 ? !1 :!0, _r_();
},
showNotification:function() {
_i_("3da:1598"), this.notified = !0, this.notificationStatus !== !1 && (this.notifyFavicon && this.changeFavicon(this.notifyFavicon), document.title = d + document.title), _r_();
},
startCounting:function() {
if (_i_("3da:1599"), this.notified) return _r_();
this.halt = !1, this.counterId = setInterval(this.didUserLeft.bind(this), l), _r_();
},
stopCounting:function() {
_i_("3da:1600"), this.halt = !0, clearInterval(this.counterId), _r_();
},
onShowTab:function(e) {
_i_("3da:1601"), this.stopCounting(), a.set(s, 0), this.notified && !this.cameBack && (this.cameBack = !0, this.removeEventListeners(), this.removeNotification(), this.trigger("back")), _r_();
},
onHideTab:function(e) {
_i_("3da:1602"), a.set(s, new Date().getTime()), this.startCounting(), _r_();
},
addEventListeners:function() {
_i_("3da:1603"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), r.addListener("show", this._onShowTab), r.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3da:1604"), this._onShowTab && r.removeListener("show", this._onShowTab), this._onHideTab && r.removeListener("hide", this._onHideTab), _r_();
},
setSessionMarker:function() {
if (_i_("3da:1605"), !booking.browserStorageHandler) return _r_();
booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey, this.tabId, !1), _r_();
},
checkSessionMarker:function() {
if (_i_("3da:1606"), this.tabId != booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey, !1)) return _r_(!1);
return _r_(!0);
},
register:function(e, t) {
_i_("3da:1607"), this.originalTitle = document.title, this.tabId = e + "_" + o(), this.sessionMarkerKey = t, this.setSessionMarker(), a.set(s, 0), this.addEventListeners(), _r_();
}
}), _r_();
}), B.define("user-left-store", function(e, t, i) {
"use strict";
_i_("3da:50");
var n = e("jquery");
i.exports = {
enabled:1,
encode:function(e) {
return _i_("3da:1108"), _r_(e);
},
decode:function(e) {
return _i_("3da:1109"), _r_(e);
},
get:function(e) {
return _i_("3da:1110"), _r_(this.decode(n.cookie(e)));
},
set:function(e, t) {
return _i_("3da:1111"), _r_(n.cookie(e, this.encode(t), {
expires:null,
path:"/",
domain:"booking.com"
}));
}
}, _r_();
}), B.define("user-left-tab", function(e, t, i) {
"use strict";
_i_("3da:51");
var n = e("window-visibilitychange"), r = e("event-emitter"), a = r.extend({
init:function() {
_i_("3da:1608"), this.didInit || ($(window).focus(this.show.bind(this)), $(window).blur(this.hide.bind(this)), $(window).bind("load", this.onLoad.bind(this)), n.on("visibilitychange", this.visibilityChange.bind(this)), this.didInit = !0), _r_();
},
visibilityChange:function(e) {
_i_("3da:1609"), n.hidden ? this.emit("hide", e) :this.emit("show", e), _r_();
},
onLoad:function(e) {
_i_("3da:1610"), n.hidden || this.show(e), _r_();
},
show:function(e) {
_i_("3da:1611"), this.emit("show", e), _r_();
},
hide:function(e) {
_i_("3da:1612"), this.emit("hide", e), _r_();
}
});
a.addListener = a.on = function() {
_i_("3da:996"), a.init(), r.prototype.addListener.apply(a, arguments), _r_();
}, i.exports = a, _r_();
}), B.define("component/popup-open", function(e, t, i) {
_i_("3da:52");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3da:1613"), this.$el.click(this.click.bind(this)), _r_();
},
click:function(e) {
_i_("3da:1614"), e.preventDefault();
var t = this.$el.attr("href"), i = Math.floor(this.$el.attr("data-width")) || 400, n = Math.floor(this.$el.attr("data-height")) || 400, r = screen.availTop || 0, a = screen.availLeft || 0, o = screen.width / 2 - i / 2 + a, s = screen.height / 2 - n / 2 + r, _ = window, l = "open", d = _[l];
d.call(_, t, "_blank", "width=" + i + ",height=" + n + ",top=" + s + ",left=" + o + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes"), _r_();
}
}), _r_();
}), function(e, t) {
_i_("3da:53"), t.define("core/fly-content-tooltip/fly-content-tooltip", function(e, i, n) {
"use strict";
_i_("3da:753"), n.exports = function() {
_i_("3da:1961");
var i = e("jquery"), n = "data-content-tooltip", r = "data-content-tooltip-element", a = ".js-fly-content-tooltip", o = "fly-content-tooltip--wrap", s = i.fly.tooltip.extend({
dataAttr:n,
defaults:{
baseClass:"fly-dropdown",
extraClass:"fly-content-tooltip",
hideClass:"fly-dropdown_hidden",
showDelay:100,
hideDelay:100,
arrowSize:5,
content:_
},
init:function() {
_i_("3da:2661");
var e, n = this.handle();
n.attr("data-position-tooltip") && (this.options.position = this.handle().attr("data-position-tooltip")), n.attr("data-position-tooltip-align") && (this.options.positionAlign = this.handle().attr("data-position-tooltip-align")), n.attr("data-extra-class-tooltip") && (this.options.extraClass = this.handle().attr("data-extra-class-tooltip")), i("[data-is-location-sensitive]").length && t.et.stage("adUAVGZWLKVfZfFcAQJO", 2), "book" == t.env.b_action && i(".review-breakdown-tooltip").length && i(".breakdown-has-breakfast-tracker").length && t.et.stage("adUAVGZTQHFcFfFAeFYbEfcWbKWe", 2), "hotel" == t.env.b_action && i(".review-breakdown-tooltip").length && t.et.stage("adUAVGZTQHFcFfFAeFYbEfcWfZZLOLHT", 1), e = n.attr("data-require-tooltip-class"), e && (this.options.requireTooltipClass = e), _r_();
},
timeout:null
});
function _(e) {
_i_("3da:2295");
var t = this.handle().attr(r), n = t ? i(t).html() :this.handle().attr(this.dataAttr);
n && e(l(n)), _r_();
}
function l(e) {
return _i_("3da:2296"), _r_('<div class="' + o + '">' + e + "</div>");
}
return _r_({
flyContentTooltip:s,
init:function(e) {
_i_("3da:2556"), e && (s = s.extend(e)), e = e || {}, s.delegate(e.delegateTo ? e.delegateTo :a), _r_();
}
});
}(), _r_();
});
var i = {
extraClass:"fly-content-tooltip ge-fly-content-tooltip"
};
t.require([ "require" ], function(e) {
_i_("3da:754"), e("core/fly-content-tooltip/fly-content-tooltip").init(), e("core/fly-content-tooltip/fly-content-tooltip").init({
defaults:i,
dataAttr:"data-ge-fly-tooltip",
delegateTo:".js-fly-content-tooltip[data-ge-fly-tooltip]"
}), _r_();
}), _r_();
}(jQuery, booking), B.define("component/dropdown-onload-shower", function(e, t, i) {
_i_("3da:54");
var n = e("component"), r = e("jquery");
i.exports = n.extend({
init:function() {
if (_i_("3da:1615"), this.isDisabled()) return _r_();
var e = r.fly.dropdown.create(this.$el, {
content:this.getContent(),
position:this.getPosition(),
extraClass:"fly-dropdown--onload-shower " + this.getExtraClass()
});
e.bind(e.events.rootready, function() {
_i_("3da:2297"), e.root().delegate("[data-command]", "click", function() {
_i_("3da:2630"), setTimeout(e.hide.bind(e), 0), _r_();
}), e.bind(e.events.hide, e._destroy.bind(e)), _r_();
}), setTimeout(function() {
_i_("3da:2298"), e.show(), _r_();
}, +this.$el.attr("data-component-delay") || 0), _r_();
},
isDisabled:function() {
_i_("3da:1616");
var e = this.$el.attr("data-component-show-once-key");
if (e) {
if (r.cookie(e)) return _r_(!0);
r.cookie(e, 1);
}
_r_();
},
getExtraClass:function() {
return _i_("3da:1617"), _r_(this.$el.attr("data-component-extra-class") || "");
},
getPosition:function() {
return _i_("3da:1618"), _r_(this.$el.attr("data-component-position"));
},
getContent:function() {
_i_("3da:1619");
var e = this.$el.attr("data-component-content");
return _r_(/^[a-z0-9_]+$/.test(e) ? booking.jstmpl(e).render(booking.env["component/dropdown-onload-shower/" + e]) :e);
}
}), _r_();
}), B.define("component/tt-fancy", function(e, t, i) {
"use strict";
_i_("3da:55");
var n = e("component"), r = {
delay:300,
width:300,
id:"tt-fancy",
content:"",
triggerOn:"hover"
};
i.exports = n.extend({
init:function() {
_i_("3da:1620"), this.domHelper = {}, this._getOptions(), this._createDomNodes(), this._attachEvents(), this.isMouseIn = !1, _r_();
},
_getOptions:function() {
_i_("3da:1621"), $.extend(this, r, {
width:this.$el.data("width"),
id:this.$el.data("id"),
content:this.$el.data("content"),
triggerOn:this.$el.data("trigger")
}), _r_();
},
_createDomNodes:function() {
_i_("3da:1622");
var e = $("#" + this.id);
if (e.length > 0) this.domHelper = {
$parent:e,
$content:e.find(".tt-fancy-content"),
$pointer:e.find(".tt-fancy-pointer")
}; else {
var t = $('<div class="tt-fancy-pointer"></div>'), i = $('<div class="tt-fancy-content"></div>');
this.domHelper = {
$parent:$('<div id="' + this.id + '" style="width: ' + this.width + 'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(t).append(i).appendTo(document.body),
$pointer:t,
$content:i
};
}
_r_();
},
_attachEvents:function() {
switch (_i_("3da:1623"), this.triggerOn) {
case "textSelect":
var e = this;
e.$el.bind("mouseup.fancyTT", function() {
_i_("3da:2505");
var t = $.trim(e._getSelectedText()), i = $.trim(e.$el.text());
t && i.search && i.search(t) > -1 && (e._showTT.call(e), setTimeout(function() {
_i_("3da:2714"), $("body").on("mouseup.fancyTTclose", function() {
_i_("3da:2743"), e._hideTT.call(e), $("body").off("mouseup.fancyTTclose"), _r_();
}), _r_();
}, 200)), _r_();
});
break;

case "hover":
default:
this.$el.bind("mouseenter.fancyTT", $.proxy(this._showTT, this)).bind("mouseleave.fancyTT", $.proxy(this._hideTT, this));
}
_r_();
},
_showTT:function() {
_i_("3da:1624");
var e = this;
e.isMouseIn = !0, setTimeout(function() {
_i_("3da:2299"), e.isMouseIn && (e.domHelper.$content.html(e.content), e._position_tt(), e.domHelper.$parent.css({
display:"block"
}), setTimeout(function() {
_i_("3da:2688"), e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:show"), _r_();
}, 10)), _r_();
}, this.delay), _r_();
},
_hideTT:function() {
_i_("3da:1625"), this.isMouseIn = !1, this.domHelper.$parent.css({
display:"none"
}).addClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:hide"), _r_();
},
_position_tt:function() {
_i_("3da:1626");
var e = $(window).width(), t = this.$el, i = this.width && "number" == typeof this.width, n = (i ? this.width :this.domHelper.$parent.width()) / 2, r = t.offset().left + t.outerWidth() / 2, a = t.offset().top + t.outerHeight() + 7, o = r - n, s = 15, _ = "auto", l = !1;
r + n > e ? (o = "auto", _ = s, l = !0, this.domHelper.$pointer.css({
right:e - r - s - 6 + "px",
left:"auto"
})) :s > r - n && (o = s, _ = "auto", l = !0, this.domHelper.$pointer.css({
left:r - s + "px",
right:"auto"
})), this.domHelper.$parent.css({
left:o,
right:_,
top:a
}), l || this.domHelper.$pointer.attr("style", ""), _r_();
},
_getSelectedText:function() {
_i_("3da:1627");
var e = "";
return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() :"undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), _r_($.trim(e));
}
}), _r_();
}), B.define("hijri-calendar", function() {
_i_("3da:56");
var e = 10631 / 30, t = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function r(r) {
_i_("3da:359");
var a = r.day, o = r.month, s = r.year, _ = o + 1, l = s;
3 > _ && (l -= 1, _ += 12);
var d = Math.floor(l / 100), c = 2 - d + Math.floor(d / 4);
1583 > l && (c = 0), 1582 === l && (_ > 10 && (c = -10), 10 == _ && (c = 0, a > 4 && (c = -10)));
var u = Math.floor(365.25 * (l + 4716)) + Math.floor(30.6001 * (_ + 1)) + a + c - 1524;
c = 0, u > 2299160 && (d = Math.floor((u - 1867216.25) / 36524.25), c = 1 + d - Math.floor(d / 4));
var h = u + c + 1524, f = Math.floor((h - 122.1) / 365.25), p = Math.floor(365.25 * f), g = Math.floor((h - p) / 30.6001);
a = h - p - Math.floor(30.6001 * g), o = g - 1, g > 13 && (f += 1, o = g - 13), s = f - 4716;
var m = u - t, v = Math.floor(m / 10631);
m -= 10631 * v;
var b = Math.floor((m - i) / e), w = 30 * v + b;
m -= Math.floor(b * e + i);
var y = Math.floor((m + 28.5001) / 29.5);
13 == y && (y = 12);
var k = m - Math.floor(29.5001 * y - 29), S = {
gregorian_day:a,
gregorian_month:o - 1,
gregorian_year:s,
julian_day:u - 1,
hijri_day:k,
hijri_month:y - 1,
hijri_year:w,
hijri_month_tag:n[y - 1]
};
return _r_(S);
}
var a = "1" === $.cookie("hijri_enabled") ? !0 :!1, o = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("3da:997"), o && !a && (a = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("3da:998"), o && a && (a = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("3da:999"), _r_(a);
},
available:function() {
return _i_("3da:1000"), _r_(o);
},
convert:r
});
}), B.define("utils", function(e, t, i) {
_i_("3da:57"), t.assertExists = function(e, t) {
if (_i_("3da:755"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("3da:756");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("3da:2407"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("3da:757"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, r = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (r[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(r));
}, _r_();
}), B.define("utils/simple-unique-id", function(e, t, i) {
_i_("3da:58");
function n(e, t) {
return _i_("3da:360"), _r_(Math.floor(Math.random() * (t - e)) + e);
}
i.exports = function() {
return _i_("3da:758"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(e, t, i) {
"use strict";
_i_("3da:59");
var n = e("event-emitter"), r = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("3da:1628"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(e) {
_i_("3da:1629"), e = e || window.event;
var t = this.visibilityState;
e.type in r ? (this.hidden = "hidden" == r[e.type], this.visibilityState = r[e.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), t != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("3da:1001"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(e, t) {
_i_("3da:60");
var i = e(window), n = jQuery({
progress:0
}), r = 10, a = 700, o = 5;
function s(e, n, a, o) {
_i_("3da:361");
var s, _ = "number" == typeof o ? o :r;
if (!e || !e.length) return _r_(new t(function(e) {
_i_("3da:1786"), e(), _r_();
}));
if (n) s = c(e).top - _; else {
var l = d(e, _);
null === l && (l = i.scrollTop()), s = l;
}
return _r_(this.scrollToOffset(s, a));
}
function _(e, r) {
_i_("3da:362"), n.stop(!0);
var a = i.scrollTop(), s = e;
return _r_(new t(function(e) {
_i_("3da:1112"), Math.abs(a - s) < o ? e() :l(a, s, r, e), _r_();
}));
}
function l(e, t, r, o) {
_i_("3da:363"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("3da:1787"), i.scrollTop(e + n * (t - e)), _r_();
},
duration:"number" == typeof r ? r :a,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:o
}), _r_();
}
function d(e, t) {
if (_i_("3da:364"), 0 === e.height()) return _r_(null);
var i = c(e), n = u(), r = i.top < n.top, a = i.bottom > n.bottom, o = e.outerHeight() + t > h();
return _r_(r || a ? o || r ? i.top - t :i.bottom + t - h() :null);
}
function c(e) {
_i_("3da:365");
var t = e.offset().top;
return _r_({
top:t,
bottom:t + e.outerHeight()
});
}
function u() {
_i_("3da:366");
var e = i.scrollTop();
return _r_({
top:e,
bottom:e + h()
});
}
function h() {
return _i_("3da:367"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:s,
scrollToOffset:_
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(e, t) {
_i_("3da:61");
var i = function(t, i) {
if (_i_("3da:759"), !t) throw new Error("You did not pass proper date for countdown");
return this.dimensionsToCheck = [ "seconds", "minutes", "hours", "days" ], this.defaults = {
updateInterval:1e3,
callback:!1,
expiredCallback:!1,
callbacks:!1,
leadingZeroes:{
seconds:!0,
minutes:!0,
hours:!0,
days:!1
}
}, "number" == typeof t ? this.endTime = new Date(t) :this.endTime = Date.parse(t), this.options = e.extend(!0, {}, this.defaults, i), this._processOptions(), this._init(), _r_(this);
};
return e.extend(i.prototype, {
_processOptions:function() {
_i_("3da:1113");
var e = this.options.leadingZeroes;
if ("boolean" == typeof e) for (var t = 0; t < this.dimensionsToCheck.length; t++) this.options.leadingZeroes[this.dimensionsToCheck[t]] = e;
_r_();
},
_init:function() {
_i_("3da:1114"), t.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("3da:1115"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("3da:1116"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("3da:1117");
var e = this._getRemainingTime();
e.total >= 0 ? (this._fireEvents(e), this.previousTime = e) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("3da:1118");
var e = this.endTime - Date.parse(new Date()), t = Math.floor(e / 1e3 % 60), i = Math.floor(e / 1e3 / 60 % 60), n = Math.floor(e / 36e5 % 24), r = Math.floor(e / 864e5);
return _r_({
total:e,
days:r,
hours:n,
minutes:i,
seconds:t
});
},
_fireEvents:function(e) {
if (_i_("3da:1119"), !this.previousTime) return _r_();
e ? (this._fireProgressEvents(e), this._fireEveryTickEvent(e)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(e) {
_i_("3da:1120");
for (var t = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(e, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:t._formatDate(e)
});
_r_();
},
_fireEveryTickEvent:function(e) {
_i_("3da:1121"), this.trigger("ticked", {
remainingTime:this._formatDate(e)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("3da:1122"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(e, t) {
return _i_("3da:1123"), _r_(!!(e[t] - this.previousTime[t]));
},
_setCallbacks:function() {
_i_("3da:1124");
var e = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(t) {
_i_("3da:2408"), e.options.callback(e._formatDate(t.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(t) {
_i_("3da:2409"), e.options.expiredCallback.call(e._formatDate(t.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(t) {
_i_("3da:2410"), e.options.callbacks[t.type] && "function" == typeof e.options.callbacks[t.type] && e.options.callbacks[t.type].call(e._formatDate(t.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(e) {
_i_("3da:1125");
var t;
for (var i in e) this.options.leadingZeroes[i] && e.hasOwnProperty(i) && (t = "" + e[i], t.length <= 1 && (e[i] = "0" + t));
return _r_(e);
},
getStartRemainingTime:function() {
return _i_("3da:1126"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("3da:1127"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("3da:1128"), this._start(), _r_();
}
}), _r_(i);
}), B.Search = B.Search || {}, B.Search.Events = {
DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",
DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",
TRAVEL_PURPOSE_CHANGED:"SEARCH:travel_purpose_changed",
DATE_CHANGED:"SEARCH:date_changed",
DATE_MONTH_CHANGED:"SEARCH:month_changed",
DATE_MODE_CHANGED:"SEARCH:mode_changed",
DATE_INVALID:"SEARCH:dates_invalid",
DATE_VALID:"SEARCH:dates_valid",
FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",
FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",
FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",
FLEXIBLE_VALID:"SEARCH:monthyear_valid",
MULTI_GROUP_CHANGED:"SEARCH:multi_group_changed",
GROUP_CHANGED:"SEARCH:group_changed",
GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",
GROUP_VALID:"SEARCH:group_valid",
GROUP_INVALID:"SEARCH:group_invalid",
ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled",
POPULAR_BUSINESS_FILTERS_OPENED:"SEARCH:pouplar_business_filters_opened",
POPULAR_BUSINESS_FILTERS_DISABLED:"SEARCH:pouplar_business_filters_closed"
}, B.Search.TrackingEvents = {
DESTINATION_CHANGED:"destination_changed",
CHECKOUT_DATEPICKER:"checkout_changed_datepicker",
CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",
CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",
CHECKIN_DATEPICKER:"checkin_changed_datepicker",
CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",
CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",
NO_DATES_SELECTED:"no_dates_selected",
FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",
FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",
GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",
GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",
GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",
GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",
GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",
GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",
GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",
ADVANCED_SEARCH_CHANGED:"advanced_search_changed",
ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",
FORM_SUBMITTED:"form_submitted"
}, B.Search.TravelTypeModes = {
BUSINESS:"business",
LEISURE:"leisure"
}, B.Search.DateModes = {
REGULAR:"regular",
NODATES:"no-dates",
FLEXIBLE:"flexible"
}, B.Search.GroupModes = {
REGULAR:"basic",
CUSTOM:"custom"
}, B.Search.rawGroupConfiguration, B.Search.groupConfiguration, B.Search.childrenConfiguration, B.Search.createGroup = function(e) {
if (_i_("3da:62"), !e || "object" != typeof e) return _r_(new B.Search.InvalidGroup());
return _r_(new B.Search.Group(e));
}, B.Search.AbstractGroup = function() {}, B.Search.AbstractGroup.prototype.parseChildrenConfig = function(e) {
_i_("3da:64");
var t, i = [];
return !e.childrenAges && e.childrenages && (e.childrenAges = e.childrenages), e.childrenAges instanceof Array ? i = e.childrenAges :"number" == typeof e.childrenAges ? i = [ e.childrenAges ] :"string" == typeof e.childrenAges ? i = e.childrenAges.split(",") :e.children instanceof Array ? i = e.children :"undefined" != typeof e.children ? (t = parseInt(e.children, 10), i = isNaN(t) ? [] :new Array(t)) :i = [], _r_({
childrenAges:i,
children:i.length
});
}, B.Search.AbstractGroup.prototype.parseConfig = function(e, t) {
_i_("3da:65");
var i = {};
return e.adults && (i.adults = e.adults), e.rooms && (i.rooms = e.rooms), 0 === i.rooms && (i.rooms = 1), $.extend(i, this.parseChildrenConfig(e)), e.name && (i.name = e.name), e.type && (i.type = e.type), t && t.useDefaults && (i = $.extend({
adults:2,
rooms:1,
children:0,
childrenAges:[]
}, i)), _r_(i);
}, B.Search.AbstractGroup.prototype.applyConfig = function(e) {
_i_("3da:66");
var t;
e.name !== t && (this.name = e.name), e.type !== t && (this.type = e.type), e.rooms !== t && (this.rooms = e.rooms), e.adults !== t && (this.adults = e.adults), e.children !== t && (this.children = e.children), e.childrenAges !== t && (this.childrenAges = e.childrenAges), _r_();
}, B.Search.InvalidGroup = function() {}, B.Search.InvalidGroup.prototype = new B.Search.AbstractGroup(), B.Search.InvalidGroup.prototype.valueOf = function() {
return _i_("3da:68"), _r_(null);
}, B.Search.Group = function(e) {
_i_("3da:69");
var t = this.parseConfig(e, {
useDefaults:!0
});
this.applyConfig(t), _r_();
}, B.Search.Group.prototype = new B.Search.AbstractGroup(), B.Search.Group.prototype.update = function(e) {
_i_("3da:70");
var t = this.parseConfig(e);
return this.applyConfig(t), _r_(this);
}, B.Search.Group.prototype.toString = function() {
return _i_("3da:71"), _r_(this.valueOf());
}, B.Search.Group.prototype.valueOf = function() {
_i_("3da:72");
var e = [ "Group:" ];
return this.name && e.push("Name: " + this.name), this.type && e.push("Type: " + this.type), e.push(this.rooms), e.push(this.adults), e.push(this.children), e.push(this.childrenAges.join("|")), _r_(e.join(","));
}, B.Search.ONE_DAY = 864e5, B.Search.createDate = function(e) {
_i_("3da:73");
var t, i, n, r, a, o, s, _, l;
switch (typeof e) {
case "string":
l = e.split("-"), l.length > 1 && (t = parseInt(l[0], 10), i = parseInt(l[1], 10) - 1), 3 === l.length && (n = parseInt(l[2], 10));
break;

case "object":
t = parseInt(e.year, 10), i = parseInt(e.month, 10), n = parseInt("day" in e ? e.day :e.date, 10);
break;

case "number":
s = e * B.Search.ONE_DAY, _ = new Date(s), t = _.getFullYear(), i = _.getMonth(), n = _.getDate();
break;

case "undefined":
r = "invalid";
}
return o = "number" == typeof t && !isNaN(t) && "number" == typeof i && !isNaN(i), a = o && "number" == typeof n && !isNaN(n) && 0 !== n, _r_(a ? new B.Search.Date({
year:t,
month:i,
date:n
}) :o ? new B.Search.MonthDate({
year:t,
month:i
}) :new B.Search.InvalidDate());
}, B.Search.AbstractDate = function() {}, B.Search.AbstractDate.prototype.initValue_ = function() {
_i_("3da:75"), this.dateObject_ = new Date(Date.UTC(this.year, this.month, this.date || 1)), this.value_ = Math.floor(this.dateObject_.valueOf() / B.Search.ONE_DAY), _r_();
}, B.Search.AbstractDate.toString = function() {
throw _i_("3da:76"), "Abstract method should be override in child classes";
}, B.Search.AbstractDate.prototype.valueOf = function() {
return _i_("3da:77"), this.value_ || this.initValue_(), _r_(this.value_);
}, B.Search.Date = function(e) {
_i_("3da:78"), this.year = e.year, this.month = e.month, this.date = e.date, this.type = "valid", _r_();
}, B.Search.Date.prototype = new B.Search.AbstractDate(), B.Search.Date.prototype.toString = function() {
_i_("3da:79");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), this.date <= 9 ? e.push("0" + this.date) :e.push(this.date), _r_(e.join("-"));
}, B.Search.Date.prototype.addDays = function(e) {
return _i_("3da:80"), _r_(B.Search.createDate(this + e));
}, B.Search.MonthDate = function(e) {
_i_("3da:81"), this.year = e.year, this.month = e.month, this.type = "month", _r_();
}, B.Search.MonthDate.prototype = new B.Search.AbstractDate(), B.Search.MonthDate.prototype.toString = function() {
_i_("3da:82");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), _r_(e.join("-"));
}, B.Search.InvalidDate = function() {
_i_("3da:83"), this.type = "invalid", _r_();
}, B.Search.InvalidDate.prototype = new B.Search.AbstractDate(), B.Search.InvalidDate.prototype.toString = function() {
return _i_("3da:84"), _r_("");
}, B.Search.AbstractWidget = function() {}, B.Search.AbstractWidget.prototype.initialize = function(e, t) {
_i_("3da:86"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractWidget.prototype.setOptions = function(e) {
_i_("3da:87"), this.options || (this.options = {}), this.options = $.extend(this.options, e), _r_();
}, B.Search.AbstractWidget.prototype.initEvents = function() {
throw _i_("3da:88"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3da:89"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.getConfig = function() {
throw _i_("3da:90"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.trigger = function(e) {
_i_("3da:91"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractWidget.prototype.onInit = function() {
_i_("3da:92");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3da:1129"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractWidget.prototype.onChange = function() {
_i_("3da:93"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractWidget.prototype.tryCallback = function(e, t, i) {
_i_("3da:94");
var n;
if (!e) return _r_();
t = t || [], "function" == typeof this.options[e] ? n = this.options[e] :"function" == typeof i && (n = i), n && n.apply(this, t), _r_();
}, B.Search.AbstractWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractWidget.prototype.hide = function() {
_i_("3da:95"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractWidget.prototype.show = function() {
_i_("3da:96"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.createWidgetPlugin = function(e, t) {
if (_i_("3da:97"), $.fn[e]) throw "Jquery plugin " + e + " is already defined";
return $.fn[e] = function(e, t) {
_i_("3da:1002");
var i = [];
return _r_(function(n) {
if (_i_("3da:1788"), "notify" === n) for (var r = arguments[1], a = arguments[2], o = 0; o < i.length; o++) i[o].trigger(r, a);
return _r_(this.each(function() {
_i_("3da:2411");
var r = e, a = $(this), o = a.data(), s = o[r];
s ? s.setOptions(n) :(s = new t(a, n), a.data(r, s), i.push(s)), _r_();
}));
});
}(e, t), _r_($.fn[e]);
}, B.Search.validators = {
storage_:[]
}, B.Search.Validator = function() {}, B.Search.Validator.prototype.name = "general", B.Search.Validator.prototype.type = "general", B.Search.Validator.prototype.success = void 0, B.Search.Validator.prototype.fail = void 0, B.Search.Validator.prototype.test = function() {}, B.Search.Validator.prototype.validate = function() {
_i_("3da:100");
var e = this.test(), t = e ? "fail" :"success", i = {
name:this.name,
status:t
}, n = t + "Callback";
return "function" == typeof this[t] ? i.message = this[t]() :"undefined" != typeof this[t] && (i.message = this[t]), "function" == typeof this[n] && (i.callback = this[n]), this.validationParameters && (i.validationParameters = this.validationParameters), _r_(new B.Search.ValidationResult(i));
}, B.Search.ValidationResult = function(e) {
_i_("3da:101"), this.setOptions_(e), _r_();
}, B.Search.ValidationResult.prototype.status = void 0, B.Search.ValidationResult.prototype.message = void 0, B.Search.ValidationResult.prototype.callback = function() {}, B.Search.ValidationResult.prototype.valueOf = function() {
return _i_("3da:103"), _r_("fail" !== this.status);
}, B.Search.ValidationResult.prototype.toString = function() {
return _i_("3da:104"), _r_(this.message || "");
}, B.Search.ValidationResult.prototype.setOptions_ = function(e) {
if (_i_("3da:105"), !e) return _r_(this);
return e.name && (this.name = e.name), e.status && (this.status = e.status), e.message && (this.message = e.message), "function" == typeof e.callback && (this.callback = e.callback), e.validationParameters && (this.validationParameters = e.validationParameters), _r_(this);
}, B.Search.validators.create = function(e) {
_i_("3da:106");
var t = new B.Search.Validator();
if (!e) return _r_(t);
return e.name && (t.name = e.name), e.type && (t.type = e.type), e.success && (t.success = e.success), e.fail && (t.fail = e.fail), e.failCallback && (t.failCallback = e.failCallback), e.successCallback && (t.successCallback = e.successCallback), e.test && (t.test = e.test), B.Search.validators.storage_.push(t), _r_(t);
}, B.Search.validators.all = function() {
return _i_("3da:107"), _r_(this.storage_);
}, B.Search.validators.allOfType = function(e) {
_i_("3da:108");
for (var t = [], i = 0; i < this.storage_.length; i++) this.storage_[i].type === e && t.push(this.storage_[i]);
return _r_(t);
}, B.Search.DEFAULT_GROUP_COFIGURATION = {
adults:2,
rooms:1,
children:0
}, B.Search.Interface = function() {
_i_("3da:109");
var e = this;
this.datesStorage = {
checkin:B.Search.createDate(),
checkout:B.Search.createDate(),
mode:"regular"
}, this.groupStorage = {
value:B.Search.createGroup()
}, this.flexibleDatesStorage = {
interval:null,
monthYear:B.Search.createDate()
}, this.destinationStorage = {
value:null
}, this.advancedSearchStorage = {
state:"disabled"
}, this.dates = function() {
_i_("3da:760");
var t;
switch (arguments.length) {
case 0:
return _r_({
checkin:this.getDate_("checkin"),
checkout:this.getDate_("checkout"),
mode:this.getDatesMode_(),
validate:function() {
return _i_("3da:2300"), _r_(e.validateDates_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3da:2301"), _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 0)));
},
validationResults:function() {
return _i_("3da:2302"), _r_(e.validationResults);
}
});

case 1:
return _r_(this.getDate_(arguments[0]));

case 2:
return "mode" === arguments[0] ? _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 1))) :(t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t)));

default:
return t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t));
}
_r_();
}, this.flexibleDates = function() {
return _i_("3da:761"), _r_({
interval:function() {
return _i_("3da:1962"), _r_(1 === arguments.length ? e.setInterval_.apply(e, [].slice.call(arguments, 0)) :e.getInterval_());
},
monthYear:function() {
return _i_("3da:1963"), _r_(1 === arguments.length ? e.setMonthYear_.apply(e, [].slice.call(arguments, 0)) :e.getMonthYear_());
},
validate:function() {
return _i_("3da:1964"), _r_(e.validateFlexibleDates_.apply(e, [].slice.call(arguments, 0)));
}
});
}, this.destination = function() {
switch (_i_("3da:762"), arguments.length) {
case 0:
return _r_(this.getDestination_());

default:
return _r_(this.setDestination_(arguments[0]));
}
_r_();
}, this.group = function() {
switch (_i_("3da:763"), arguments.length) {
case 0:
return _r_({
value:this.getGroup_(),
mode:function(t) {
return _i_("3da:2303"), _r_(t ? e.setGroupMode_.apply(e, [].slice.call(arguments, 0)) :e.getGroupMode_.apply(e, [].slice.call(arguments, 0)));
},
validate:function() {
return _i_("3da:2304"), _r_(e.validateGroup_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3da:2305"), _r_(e.setGroupMode_.apply(e, [].slice.call(arguments, 0)));
}
});

case 1:
return _r_("reset" === arguments[0] ? this.setGroup_("config", B.Search.DEFAULT_GROUP_COFIGURATION) :"value" === arguments[0] ? this.getGroup_() :"string" == typeof arguments[0] ? this.getGroup_(arguments[0]) :this.setGroup_("config", arguments[0]));

default:
if ("reset" === arguments[0]) return _r_(this.setGroup_("config", arguments[1]));
return _r_(this.setGroup_(arguments[0], arguments[1]));
}
_r_();
}, this.advanced = function() {
return _i_("3da:764"), _r_({
mode:function(t) {
return _i_("3da:1965"), _r_(t ? e.setAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)) :e.getAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)));
},
enable:function() {
return _i_("3da:1966"), _r_(e.setAdvancedSearchMode_.apply(e, [ "enabled" ]));
},
disable:function() {
return _i_("3da:1967"), _r_(e.setAdvancedSearchMode_.apply(e, [ "disabled" ]));
}
});
}, _r_();
}, B.Search.Interface.prototype = {
constructor:B.Search.Interface,
sanitizeDateType_:function(e) {
return _i_("3da:368"), _r_("checkin" === e || "checkout" === e ? e :null);
},
getDate_:function(e) {
_i_("3da:369");
var t = this.sanitizeDateType_(e);
return _r_(this.datesStorage[t]);
},
setDate_:function(e, t, i) {
_i_("3da:370");
var n = B.Search.createDate(t), r = "valid" === n.type ? B.Search.Events.DATE_CHANGED :B.Search.Events.DATE_MONTH_CHANGED, a = this.sanitizeDateType_(e), o = this.datesStorage[a];
return i = i || {}, a ? (n.type !== o.type || n.valueOf() !== o.valueOf()) && (this.datesStorage[a] = n, B.eventEmitter.trigger(r, {
type:a,
value:n,
search:this,
referrer:i.referrer
})) :window.onerror("attempt_to_set_date_with_wrong_type:_" + e, window.location), _r_(n);
},
validateDates_:function(e, t) {
if (_i_("3da:371"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.DATE_VALID), _r_(!0);
var i = B.Search.validators.allOfType("dates"), n = i.map(function(e) {
return _i_("3da:1630"), _r_(e.validate());
}), r = n.every(function(e) {
return _i_("3da:1631"), _r_("success" === e.status);
});
return r ? this.validationResults = null :this.validationResults = n, t && t.silent || B.eventEmitter.trigger(r ? B.Search.Events.DATE_VALID :B.Search.Events.DATE_INVALID, {
validators:n
}), _r_(r);
},
sanitizeDatesMode_:function(e) {
return _i_("3da:372"), _r_("regular" === e || "no-dates" === e || "flexible" === e ? e :null);
},
getDatesMode_:function() {
return _i_("3da:373"), _r_(this.datesStorage.mode);
},
setDatesMode_:function(e) {
_i_("3da:374");
var t = this.sanitizeDatesMode_(e);
return t && this.datesStorage.mode !== t && (this.datesStorage.mode = t, B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED, {
mode:t
})), _r_(this);
},
getMonthYear_:function() {
return _i_("3da:375"), _r_(this.flexibleDatesStorage.monthYear);
},
setMonthYear_:function(e) {
_i_("3da:376");
var t = B.Search.createDate(e), i = this.flexibleDatesStorage.monthYear;
return t.valueOf() !== i.valueOf() && (this.flexibleDatesStorage.monthYear = t, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED, {
value:t
})), _r_(t);
},
getInterval_:function() {
return _i_("3da:377"), _r_(this.flexibleDatesStorage.interval);
},
setInterval_:function(e) {
return _i_("3da:378"), "weekend" !== e && "week" !== e && (e = "any"), this.flexibleDatesStorage.interval !== e && (this.flexibleDatesStorage.interval = e, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED, {
value:e
})), _r_(this);
},
validateFlexibleDates_:function() {
_i_("3da:379");
var e = B.Search.validators.allOfType("flexible"), t = e.map(function(e) {
return _i_("3da:1632"), _r_(e.validate());
}), i = t.every(function(e) {
return _i_("3da:1633"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(i ? B.Search.Events.FLEXIBLE_VALID :B.Search.Events.FLEXIBLE_INVALID, {
validators:t
}), _r_(i);
},
getDestination_:function() {
return _i_("3da:380"), _r_(this.destinationStorage.value);
},
setDestination_:function(e) {
_i_("3da:381");
var t = e && e.data, i = this.destinationStorage && this.destinationStorage.value && this.destinationStorage.value;
t && (!i || i && i.dest_id !== t.dest_id) && (this.destinationStorage.value = t, B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED, this.destinationStorage.value)), _r_();
},
getGroup_:function(e) {
return _i_("3da:382"), _r_(e ? this.groupStorage.value[e] :this.groupStorage.value);
},
setGroup_:function(e, t) {
_i_("3da:383");
var i, n;
if ("rooms" === e || "adults" === e || "children" === e || "childrenAges" === e || "type" === e || "name" === e) this.setGroupValue_(e, t); else if ("config" === e) {
i = t instanceof B.Search.Group ? t :B.Search.createGroup(t);
for (var r = 0, a = i.childrenAges.length; a > r; r++) i.childrenAges[r] === n && (i.childrenAges[r] = this.groupStorage.value.childrenAges[r]);
i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent());
}
_r_();
},
setGroupValue_:function(e, t) {
_i_("3da:384");
var i, n = {};
n[e] = t, i = B.Search.createGroup(this.groupStorage.value), i.update(n), i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent()), _r_();
},
getGroupMode_:function() {
return _i_("3da:385"), _r_(this.groupStorage.mode);
},
setGroupMode_:function(e) {
return _i_("3da:386"), "basic" !== e && "custom" !== e && (e = "custom"), e && this.groupStorage.mode !== e && (this.groupStorage.mode = e, B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED, {
mode:e
})), _r_(this);
},
triggerGroupEvent:function() {
_i_("3da:387"), B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED, this.groupStorage.value), _r_();
},
validateGroup_:function(e) {
if (_i_("3da:388"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.GROUP_VALID), _r_(!0);
var t = B.Search.validators.allOfType("group"), i = t.map(function(e) {
return _i_("3da:1634"), _r_(e.validate());
}), n = i.every(function(e) {
return _i_("3da:1635"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(n ? B.Search.Events.GROUP_VALID :B.Search.Events.GROUP_INVALID, {
validators:i
}), _r_(n);
},
setAdvancedSearchMode_:function(e) {
_i_("3da:389"), e === this.advancedSearchStorage.state || "enabled" !== e && "disabled" !== e || (this.advancedSearchStorage.state = e, B.eventEmitter.trigger("enabled" === e ? B.Search.Events.ADVANCED_SEARCH_ENABLED :B.Search.Events.ADVANCED_SEARCH_DISABLED)), _r_();
},
getAdvancedSearchMode_:function() {
return _i_("3da:390"), _r_(this.advancedSearchStorage.state);
}
}, B.search = new B.Search.Interface(), booking[sNSStartup].initSearchValues = {
init:function() {
_i_("3da:391"), this.initDestination(), this.initDates(), this.initGroup(), _r_();
},
initDates:function() {
_i_("3da:392");
var e, t;
function i(e, t) {
_i_("3da:765");
var i = t.split("-"), n = new Date(i[0], i[1] - 1, e, 0, 0, 0, 0);
if (isNaN(n.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:i[0],
month:i[1] - 1,
date:e
}));
}
function n(e) {
_i_("3da:766");
var t = e.split("-"), i = new Date(t[0], t[1] - 1, t[2], 0, 0, 0, 0);
if (isNaN(i.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:t[0],
month:t[1] - 1,
date:t[2]
}));
}
B.env.s_value_checkin_monthday && B.env.s_value_checkin_year_month ? (e = i(B.env.s_value_checkin_monthday, B.env.s_value_checkin_year_month), e && B.search.dates("checkin", e)) :B.env.b_checkin_date ? (e = n(B.env.b_checkin_date), e && B.search.dates("checkin", e)) :B.env.b_session_checkin_date && (e = n(B.env.b_session_checkin_date), e && B.search.dates("checkin", e)), B.env.s_value_checkout_monthday && B.env.s_value_checkout_year_month ? (t = i(B.env.s_value_checkout_monthday, B.env.s_value_checkout_year_month), t && B.search.dates("checkout", t)) :B.env.b_checkout_date ? (t = n(B.env.b_checkout_date), t && B.search.dates("checkout", t)) :B.env.b_session_checkout_date && (t = n(B.env.b_session_checkout_date), t && B.search.dates("checkout", t)), B.env.b_no_dates_mode && B.search.dates("mode", B.Search.DateModes.NODATES), _r_();
},
initGroup:function() {
_i_("3da:393");
try {
var e = B.env.b_group && B.env.b_group[0], t = B.env.b_group_rooms_wanted, i = [];
if (e && t) {
if (e.ages) for (var n = 0; n < e.ages.length; n++) "undefined" != typeof e.ages[n].age && i.push(e.ages[n].age);
B.search.group({
adults:e.guests,
childrenAges:i,
rooms:t
});
} else B.search.group("value") instanceof B.Search.InvalidGroup && B.search.group({
adults:2,
rooms:1,
type:B.Search.GroupModes.REGULAR
});
} catch (r) {
throw "Unable to set group";
}
_r_();
},
initDestination:function() {
_i_("3da:394");
var e = {
name:void 0,
data:{}
};
B && B.env && (B.env.sess_dest_id && (e.data.dest_id = B.env.sess_dest_id), B.env.sess_dest_type && (e.data.dest_type = B.env.sess_dest_type), B.env.sess_dest_fullname && (e.data.name = B.env.sess_dest_fullname, e.term = B.env.sess_dest_fullname)), e.data.dest_id && e.data.dest_type && e.data.name && B.search.destination(e), _r_();
},
priority:5
}, function(e, t) {
_i_("3da:110");
function i(t, i) {
_i_("3da:395");
var n = this;
this.$element = t, this.$inputs = t.find("select, input"), this.options = i || {}, this.$element.data("always-enabled") && (this.options.alwaysEnabled = !0);
var r = t.find(".b-date-selector__control-dayselector select, .js--sb-dates__select-day"), a = t.find(".b-date-selector__control-monthselector select, .js--sb-dates__select-month-year");
function o(e) {
if (_i_("3da:767"), "string" != typeof e) return _r_(!1);
var t = e.split("-");
if (2 !== t.length) return _r_(!1);
return _r_({
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1
});
}
this.lastMonth = o(a.find("option:last").val());
function s(e) {
_i_("3da:768");
var t = document.createElement("option");
return t.innerHTML = e.text, t.selected = e.selected, t.value = e.value, _r_(t);
}
function _(t, n) {
_i_("3da:769");
var r = e.env.b_lang;
return _r_(isNaN(n) ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day :t :"ja" == r || "zh" == r || "ko" == r || "hu" == r ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day + " " + i.dayNames[n] :t + " " + i.dayNames[n] :i.dayNames[n] + " " + t);
}
function l(e, t) {
_i_("3da:770");
var i;
switch (e.month) {
case 1:
i = e.year % 4 === 0 && e.year % 100 !== 0 || e.year % 400 === 0 ? 29 :28;
break;

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
i = 31;
break;

case 3:
case 5:
case 8:
case 10:
i = 30;
}
return "checkin" === t && e.month === n.lastMonth.month && e.year === n.lastMonth.year && (i -= 1), _r_(i);
}
function d(t, i) {
_i_("3da:771");
var n, a, o, d, c = r.get(0), u = r.val();
if (t.year && t.month % 1 === 0) n = new Date(t.year, t.month, 1).getDay(), d = l(t, i), u = t.date; else {
if (t) return _r_();
d = 31;
}
for (;c.firstChild; ) c.removeChild(c.firstChild);
a = document.createDocumentFragment(), o = document.createElement("option"), o.innerHTML = e.env.sbox_day, o.value = 0, a.appendChild(o);
for (var h = 1; d >= h; h++) a.appendChild(s({
text:_(h, (n - 1 + h) % 7),
selected:u == h,
value:h
}));
c.appendChild(a), _r_();
}
function c(e) {
_i_("3da:772");
var t = e.year + "-" + (e.month + 1);
a.val(t), _r_();
}
function u(t) {
_i_("3da:773"), d(g(), i.type), f(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)), _r_();
}
function h(t) {
_i_("3da:774"), f(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_DAY_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)), _r_();
}
function f() {
_i_("3da:775");
var t = g();
if (!t) return _r_();
"checkin" === i.type ? e.search.dates("checkin", t) :"checkout" === i.type && e.search.dates("checkout", t), _r_();
}
function p(e) {
_i_("3da:776"), d(e), c(e), _r_();
}
function g() {
_i_("3da:777");
var e = o(a.val());
if (e.date = r.val(), !e || isNaN(e.date)) return _r_(!1);
return _r_(e);
}
function m(e, t) {
if (_i_("3da:778"), !t) return _r_();
t.type === i.type && p(t.value), _r_();
}
a.bind("change.dateSelector", u), r.bind("change.dateSelector", h), a.trigger("change.dateSelector"), t.bind("dateSelected", m), _r_();
}
i.prototype.setOptions = function(e) {
if (_i_("3da:779"), !e) return _r_(this);
return e.disabled ? this.$inputs.attr("disabled", !0) :this.$inputs.removeAttr("disabled"), _r_(this);
}, i.prototype.getOption = function(e) {
if (_i_("3da:780"), !e) return _r_(this.options);
return _r_(this.options[e] ? this.options[e] :null);
}, i.prototype.trigger = function(e) {
if (_i_("3da:781"), !e) return _r_(this);
return "disable" !== e || this.options.alwaysEnabled ? "enable" === e && this.setOptions({
disabled:!1
}) :this.setOptions({
disabled:!0
}), _r_(this);
};
function n() {
_i_("3da:396"), this.instances_ = [], _r_();
}
n.prototype.create = function(e, t) {
_i_("3da:782");
var n = new i(e, t);
return this.add(n), _r_(n);
}, n.prototype.add = function(e) {
return _i_("3da:783"), this.instances_.push(e), _r_(e);
}, n.prototype.all = function() {
return _i_("3da:784"), _r_(this.instances_);
}, n.prototype.notifyAll = function() {
_i_("3da:785");
for (var e = this.all(), t = 0; t < e.length; t++) e[t].trigger.apply(e[t], [].slice.call(arguments, 0));
return _r_(this.instances_);
};
var r = e.Search.datePickerController = new n();
t.fn.dateSelector = function(i) {
_i_("3da:786");
var n = e.env.b_simple_weekdays_for_js.slice(0);
return n.unshift(n.pop()), _r_(this.each(function() {
_i_("3da:1789");
var e = t(this), a = e.data(), o = a.calendar2;
o ? o.setOptions(i) :r.create(e, t.extend({
dayNames:n
}, i, a)), _r_();
}));
}, _r_();
}(B, $), booking[sNSStartup].search_utilities = {
init:function() {
_i_("3da:397"), B.Search = B.Search || {}, B.Search.getShiftedDate = function(e, t) {
if (_i_("3da:1130"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}, B.Search.openDatepicker = function(e) {
_i_("3da:1131");
var t, i, n, r = B.require("window-scroller"), a = {
selector:null,
duration:null
}, o = $.extend({}, a, e);
i = o.selector, n = o.duration, $.fn.calendar2("each", function(e) {
if (_i_("3da:2102"), !i) return t = e, _r_(!1);
if (e.$input.is(i)) return t = e, _r_(!1);
_r_();
}), t && r.scrollToBlock(t.$input, void 0, n).then(function() {
_i_("3da:2412"), t.show(), _r_();
}), _r_();
}, $(window).delegate(".js-open-datepicker", "click", function(e) {
_i_("3da:1132"), e.preventDefault();
var t = $(this), i = t.data(), n = {};
"undefined" != typeof i.selector && (n.selector = i.selector), "undefined" != typeof i.duration && (n.duration = i.duration), B.Search.openDatepicker(n), _r_();
}), _r_();
},
priority:5
}, function(e) {
_i_("3da:111"), e.events = e.require("events"), _r_();
}(booking), B.define("utils/wait-for-event", function(e, t, i) {
_i_("3da:112");
var n = e("promise");
function r(e, t, i) {
return _i_("3da:398"), _r_(new n(function(n) {
if (_i_("3da:1133"), i) {
var r = function() {
_i_("3da:2413"), i.apply(this, arguments) && (e.off(r), n()), _r_();
};
e.on(t, r);
} else e.once(t, n);
_r_();
}));
}
i.exports = r, _r_();
}), function() {
_i_("3da:113");
var e = {
_count:0,
_mixin:{},
_instances:[]
};
e._base = {
events:{
hide:"hide",
show:"show",
rootready:"rootready"
},
_cuid:e._count++,
_ctor:function() {},
_$root:null,
_$handle:null,
_emitter:null,
defaults:{
content:"",
redrawOnShow:!0
},
ens:"",
options:null,
create:function(t, i) {
_i_("3da:1135");
var n = this.extend({
ens:".ns" + e._count++,
_$handle:$(t),
_emitter:$({})
});
return n.options = $.extend({}, n.defaults, i), e._instances.push(n), _r_(n._init());
},
extend:function(t) {
_i_("3da:1136"), this._ctor.prototype = this, t && "defaults" in t && (t.defaults = $.extend({}, this.defaults, t.defaults));
var i = $.extend(new this._ctor(), t);
return i._cuid = e._count++, t.register$ && e.register$(t.register$, i), _r_(i);
},
delegate:function(e, t) {
_i_("3da:1137");
var i = this, n = "fly_delegated_" + i._cuid;
$.each(i.actions, function(r) {
_i_("3da:2103"), $(document.body).delegate(e, r, function() {
if (_i_("3da:2557"), $(this).data(n)) return _r_();
var e = i.create(this, t);
e.handle().data(n, 1), e._actionHandler(e.actions[r]).apply(e, arguments), _r_();
}), _r_();
}), _r_();
},
onrootready:function() {},
root:function() {
if (_i_("3da:1139"), !this._$root) {
var e = this.options;
this._$root = $("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body"), this.trigger(this.events.rootready);
}
return _r_(this._$root);
},
handle:function() {
return _i_("3da:1140"), _r_(this._$handle);
},
_init:function() {
return _i_("3da:1141"), this._action(!0), this.bind(this.events.rootready, $.proxy(this.onrootready, this)), this.init(), _r_(this);
},
_destroy:function() {
_i_("3da:1142"), this.destroy(), this._$root && (this._$root.remove(), this._$root = null), this._action(!1);
for (var t = 0, i = e._instances.length; i > t; t++) if (e._instances[t] === this) {
e._instances.splice(t, 1);
break;
}
_r_();
},
_action:function(e, t, i) {
_i_("3da:1143"), i = i || this.handle(), t = t || this.actions;
for (var n in t) e ? i.bind(n + this.ens, this._actionHandler(t[n])) :i.unbind(n + this.ens);
_r_();
},
_actionHandler:function(e) {
return _i_("3da:1144"), _r_("string" == typeof e ? $.proxy(this[e], this) :$.proxy(e, this));
},
_content:function(e) {
_i_("3da:1145");
var t = this.options.content;
"function" == typeof t ? t.length ? t.call(this, e) :e(t.call(this)) :e(t), _r_();
},
_render:function(e) {
_i_("3da:1146"), this.root().html(e || ""), this._rendered = !0, _r_();
},
_modCss:function() {
_i_("3da:1147");
var e = this.options.position.split(" "), t = this.options.baseClass;
return _r_([ t + "_" + e[0], t + "_arrow-" + e[1] ].join(" "));
},
_position:function() {},
init:function() {},
destroy:function() {},
show:function(e) {
_i_("3da:1151");
var t = this.options.redrawOnShow || !this._rendered;
if (t && !arguments.length) return _r_(this._content($.proxy(this.show, this)));
arguments.length && this._render(e), this.trigger(this.events.show), this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass), _r_();
},
hide:function() {
if (_i_("3da:1152"), this.hidden()) return _r_();
this.trigger(this.events.hide), this.root().addClass(this.options.hideClass), _r_();
},
redraw:function(e) {
_i_("3da:1153");
var t = this;
this._content(function(i) {
_i_("3da:2104"), t._render(i), "function" == typeof e && e(i), _r_();
}), _r_();
},
toggle:function(e) {
_i_("3da:1154"), e = arguments.length ? e :this.hidden(), this[e ? "show" :"hide"](), _r_();
},
hidden:function() {
return _i_("3da:1155"), _r_(!this._$root || this.root().hasClass(this.options.hideClass));
}
}, $.each([ "bind", "unbind", "one", "trigger" ], function(t, i) {
_i_("3da:787"), e._base[i] = function() {
return _i_("3da:1790"), this._emitter[i].apply(this._emitter, arguments), _r_(this);
}, _r_();
}), e._mixin.rect = function(e) {
_i_("3da:788");
var t = e[0].getBoundingClientRect();
return "width" in t || (t = $.extend({}, t), t.width = e.outerWidth(), t.height = e.outerHeight()), _r_(t);
}, e._mixin.position = function() {
_i_("3da:789");
var e = {}, t = $(window), i = this.options.position.split(" "), n = this.options.arrowSize, r = i.shift(), a = i.shift(), o = {}, s = 0, _ = this._rect(this.root()), l = this._rect(this.handle()), d = "fixed" === this.root().css("position"), c = d ? {
top:0,
left:0
} :{
top:t.scrollTop(),
left:t.scrollLeft()
};
switch (a) {
case "top":
o.top = l.height / 2 - 1.5 * n;
break;

case "left":
o.left = l.width / 2 - 1.5 * n;
break;

case "right":
o.left = l.width / 2 - _.width + 1.5 * n;
break;

case "bottom":
o.top = l.height / 2 - _.height + 1.5 * n;
break;

default:
o.top = (l.height - _.height) / 2, o.left = (l.width - _.width) / 2;
}
switch (s = "right" === this.options.positionAlign || "left" === this.options.positionAlign ? 0 :o.left, r) {
case "left":
e.top = c.top + l.top + o.top, e.left = c.left + l.left - _.width - n;
break;

case "right":
e.top = c.top + l.top + o.top, e.left = c.left + l.left + l.width + n;
break;

case "top":
e.top = c.top + l.top - _.height - n, "right" === this.options.positionAlign ? e.left = c.left + l.right - _.width + s :e.left = c.left + l.left + s;
break;

default:
e.top = c.top + l.top + l.height + n, "right" === this.options.positionAlign ? e.left = c.left + l.right - _.width + s :e.left = c.left + l.left + s;
}
return _r_(e);
}, e.tooltip = e._base.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave"
},
_showTimeout:null,
_hideTimeout:null,
onmouseenter:function() {
_i_("3da:1636");
var e = this;
if (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), this.options.requireTooltipClass && this.options.requireTooltipClass.length > 0 && this._$handle && !this._$handle.hasClass(this.options.requireTooltipClass)) return _r_();
this.hidden() && (this._showTimeout = setTimeout(function() {
_i_("3da:2558"), e.show(), _r_();
}, this.options.showDelay)), this.options.keepContentOnHover && (this.root().off("mouseenter").mouseenter(function() {
_i_("3da:2506"), e._hideTimeout && (clearTimeout(e._hideTimeout), e._hideTimeout = null), _r_();
}), this.root().off("mouseleave").mouseleave(function() {
_i_("3da:2507"), e._hideTimeout = setTimeout(function() {
_i_("3da:2698"), e.hide(), _r_();
}, e.options.hideDelay), _r_();
})), _r_();
},
onmouseleave:function() {
_i_("3da:1637");
var e = this;
this._showTimeout && (clearTimeout(this._showTimeout), this._showTimeout = null), this._hideTimeout = setTimeout(function() {
_i_("3da:2414"), e.hide(), _r_();
}, this.options.hideDelay), _r_();
},
_action:function(t) {
_i_("3da:1638"), e._base._action.apply(this, arguments), this.options.keepOnContent && this._keepOnContent(t), _r_();
},
_keepOnContent:function(t) {
_i_("3da:1639");
var i = this, n = this.events.rootready + "._keepOnContent";
t ? this.bind(n, function() {
_i_("3da:2508"), e._base._action.call(i, t, i.actions, i.root()), _r_();
}) :(this.unbind(n), e._base._action.call(this, t, this.actions, this.root())), _r_();
},
defaults:{
baseClass:"fly-tooltip",
hideClass:"fly-tooltip_hidden",
extraClass:"",
position:"bottom center",
positionAlign:"",
requireTooltipClass:"",
arrowSize:10,
showDelay:300,
hideDelay:300
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.dropdown = e._base.extend({
actions:{
click:"onclick"
},
onclick:function() {
_i_("3da:1640"), this.toggle(), _r_();
},
onresize:function() {
if (_i_("3da:1641"), this.hidden()) return _r_();
this.root().css(this._position()), _r_();
},
_action:function(t) {
_i_("3da:1642"), e._base._action.apply(this, arguments), e._base._action.call(this, t, {
resize:"onresize"
}, $(window)), this._autohide(t), _r_();
},
_autohide:function(e) {
_i_("3da:1643");
var t = this, i = "click" + t.ens + " keydown" + t.ens + " touchstart" + t.ens;
if (!e) return _r_();
this.bind(this.events.show, function() {
_i_("3da:2509"), setTimeout(n, 0), _r_();
}).bind(this.events.hide, function() {
_i_("3da:2306"), $(document).unbind(i), _r_();
});
function n() {
_i_("3da:1968"), $(document).bind(i, function(e) {
_i_("3da:2510");
var i = e.target, n = t.root()[0], r = t.handle()[0];
("keydown" === e.type && 27 === e.which || ("click" === e.type || "touchstart" === e.type) && i !== n && !$.contains(n, i) && i !== r && !$.contains(r, i)) && t.hide(), _r_();
}), _r_();
}
_r_();
},
defaults:{
baseClass:"fly-dropdown",
hideClass:"fly-dropdown_hidden",
extraClass:"",
position:"bottom center",
arrowSize:10
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.hideAll = function() {
_i_("3da:790");
for (var t = 0, i = e._instances.length; i > t; t++) "function" == typeof e._instances[t].hide && e._instances[t].hide();
_r_();
}, $.fly = e, e.register$ = function(t, i) {
if (_i_("3da:791"), i === e._base || !(i instanceof e._base._ctor) || $.fn[t]) return _r_();
var n = "fly_" + t + "_" + +new Date();
$.fn[t] = function(e) {
_i_("3da:1791");
var t;
return this.each(function(a) {
if (_i_("3da:2415"), t) return _r_(!1);
var o = $(this), s = o.data(n);
switch (e) {
case "instance":
t = s;
break;

case "destroy":
r(s);
break;

default:
r(s), o.data(n, i.create(o, e));
}
_r_();
}), _r_(t || this);
function r(e) {
_i_("3da:2105"), e && (e.handle().removeData(n), e._destroy()), _r_();
}
}, _r_();
}, $.each(e, e.register$), _r_();
}(), $.fly.tooltip = $.fly.tooltip.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave",
focus:"onmouseenter",
blur:"onmouseleave"
}
}), B.define("lists/lists-api/lists-api", function(e, t, i) {
"use strict";
_i_("3da:114");
var n = e("jquery");
function r(e) {
return _i_("3da:399"), _r_(n.extend({}, e || {}, {
aid:B.env.aid || B.env.b_aid,
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
stype:B.env.b_site_type_id || "",
currency:B.env.b_selected_currency,
label:B.env.b_label,
partner_channel_id:B.env.partner_id,
stid:B.env.b_stid
}, B.env.b_is_bbtool_admin ? {
user_is_bbtool_admin:1
} :{}));
}
function a(e) {
return _i_("3da:400"), e.data = r(e.data), _r_(n.ajax(n.extend(e, {
type:"POST"
})));
}
i.exports = {
API:{
_prepareParams:r,
request:function(e, t, i) {
return _i_("3da:1792"), _r_(a({
url:e,
data:n.extend({}, t),
success:function(e) {
return _i_("3da:2559"), _r_((i || n.noop)(e));
}
}));
},
list:function(e, t) {
return _i_("3da:1793"), _r_(a({
url:"/wishlist/get",
data:n.extend({
with_hotels:1,
include_availability:1
}, e),
success:function(e) {
return _i_("3da:2560"), _r_((t || n.noop)(e));
}
}));
},
listById:function(e, t) {
return _i_("3da:1794"), _r_(a({
url:"/wishlist/get",
data:{
with_hotels:1,
include_availability:1,
id:e
},
success:function(e) {
return _i_("3da:2561"), _r_((t || n.noop)(e));
}
}));
},
updateHotels:function(e, t) {
return _i_("3da:1795"), _r_(a({
url:"/wishlist/save_hotels",
data:{
list:e.list_id,
hotel_ids:e.hotel_ids.join(","),
new_states:e.states.join(",")
},
success:function(e) {
_i_("3da:2562"), (t || n.noop)(e), _r_();
}
}));
},
updateList:function(e, t) {
return _i_("3da:1796"), _r_(a({
url:"/wishlist/update",
data:e,
success:function(i) {
_i_("3da:2563"), i.success && (B.eventEmitter.trigger("lists:api:update", e), (t || n.noop)(i)), _r_();
}
}));
},
createList:function(e, t) {
return _i_("3da:1797"), _r_(a({
url:"/wishlist/create",
data:n.extend(e, {
name:String(e.name),
privacy:String(e.privacy)
}),
success:function(e) {
_i_("3da:2564"), (t || n.noop)(e), _r_();
}
}));
},
removeList:function(e, t) {
return _i_("3da:1798"), B.listmap && B.listmap.trigger("del_list"), _r_(a({
url:"/wishlist/delete",
data:{
list_id:e.list_id
},
success:function(e) {
_i_("3da:2565"), (t || n.noop)(e), _r_();
}
}));
},
updateTag:function(e, t) {
return _i_("3da:1799"), B.listmap && B.listmap.trigger(e.is_deleted ? "del_tag" :"added_tag"), _r_(a({
url:"/tag_item",
data:{
item_id:e.list_id,
tags:e.tags,
is_deleted:e.is_deleted || 0,
type:e.type
},
success:function(e) {
_i_("3da:2566"), (t || n.noop)(e), _r_();
}
}));
},
updateNote:function(e, t) {
return _i_("3da:1800"), B.listmap && B.listmap.trigger("save_note"), _r_(a({
url:"/wishlist/add_note",
data:{
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
},
success:function(e) {
_i_("3da:2567"), (t || n.noop)(e), _r_();
}
}));
},
removeHotel:function(e, t) {
return _i_("3da:1801"), _r_(a({
url:"/wishlist/save_hotel",
data:{
hotel_id:e.hotel_id,
lists:e.lists,
new_state:0
},
success:function(e) {
_i_("3da:2568"), (t || n.noop)(e), _r_();
}
}));
},
getRecentlyViewed:function(e, t) {
return _i_("3da:1802"), _r_(a({
url:"/wishlist/recently_viewed_hotel",
data:{
limit:e.limit,
list_id:e.list_id
},
success:function(e) {
_i_("3da:2569"), (t || n.noop)({
hotels:e
}), _r_();
}
}));
},
getAvailability:function(e, t) {
return _i_("3da:1803"), _r_(a({
url:"/wishlist/get_or_update_wishlist_hotels_dates",
data:n.extend({
hotel_ids:e.hotel_ids.join(","),
checkin:e.checkin,
checkout:e.checkout,
list_id:e.list_id || ""
}, e.additional),
success:function(e) {
_i_("3da:2570"), (t || n.noop)(e), _r_();
}
}));
}
},
type:{
RECENTLY_VIEWED:"3"
},
currentHotel:function() {
_i_("3da:1156");
var e = {
b_hotel_id:B.env.b_hotel_id,
b_hotel_name:B.env.b_hotel_name,
b_hotel_image_url_square60:B.env.b_hotel_image_url_square60,
b_hotel_url:"",
b_hotel_image_url_square150:""
};
return e.b_hotel_image_url_square60 && (e.b_hotel_image_url_square150 = e.b_hotel_image_url_square60.replace("square60", "square150")), !e.b_hotel_image_url_square150 && B.env.b_hotel_image_url_square90 && (e.b_hotel_image_url_square150 = B.env.b_hotel_image_url_square90.replace("square90", "square150")), "hotel" === B.env.b_action && (e.b_hotel_url = location.href), _r_(e);
},
getIdFromUrl:function(e) {
_i_("3da:1157");
var t = /wl_id=([a-zA-Z0-9-_]+)/, i = e.match(t);
return _r_(String(i && i[1]));
},
getLastChangedListId:function() {
_i_("3da:1158");
var e = B.env.b_reg_user_last_used_wishlist;
if (e) return _r_(e && e[0] && e[0].b_reg_user_detail_list_id);
return _r_("0");
},
storedProperty:function(e, t) {
return _i_("3da:1159"), window.b && window.b.storage ? ("undefined" != typeof t && window.b.storage({
key:e,
value:String(t),
location:"cookies"
}), _r_(String(window.b.storage({
key:e,
location:"cookies"
})))) :("undefined" != typeof t && n.cookie(e, String(t), {
domain:"booking.com",
path:"/"
}), _r_(n.cookie(e)));
}
}, _r_();
}), B.define("lists/lists-tools/lists-tools", function(e, t, i) {
"use strict";
_i_("3da:115"), i.exports = {
pick:function(e) {
_i_("3da:1160");
var t = {};
return $.each(Array.prototype.slice.call(arguments, 1), function(i, n) {
_i_("3da:2106"), t[n] = e[n], _r_();
}), _r_(t);
},
stringifyUrl:function(e, t, i) {
_i_("3da:1161"), t = t || "&", i = i || "=";
var n = [];
for (var r in e) e.hasOwnProperty(r) && n.push(r + i + e[r]);
return _r_(n.join(t));
},
keys:Object.keys,
throttle:function() {
_i_("3da:1644");
var e = function() {};
try {
e = B.tools.functions.throttle;
} catch (t) {
e = function(e) {
return _i_("3da:2571"), _r_(e());
};
}
return _r_(e);
}(),
ellipsis:function(e, t) {
if (_i_("3da:1162"), e.length < t) return _r_(e);
return _r_(e.slice(0, t) + "&hellip;");
},
htmlEncode:function() {
_i_("3da:1645");
var e = function() {};
try {
e = B.tools.string.htmlEncode;
} catch (t) {
e = function(e) {
return _i_("3da:2572"), _r_(e);
};
}
return _r_(e);
}(),
htmlDecode:function() {
_i_("3da:1646");
var e = function() {};
try {
e = B.tools.string.htmlDecode;
} catch (t) {
e = function(e) {
return _i_("3da:2573"), _r_(e);
};
}
return _r_(e);
}()
}, _r_();
}), B.define("lists/lists-store/lists-store", function(e, t, i) {
"use strict";
_i_("3da:116");
var n = e("jquery"), r = e("../lists-api/lists-api").API, a = booking.promise;
a = booking.promise ? booking.promise :function() {
_i_("3da:1163");
var e = n.Deferred();
return e.fulfill = e.resolve, _r_(e);
};
function o(e) {
_i_("3da:401");
var t = booking[sNSStartup].wlData;
if (!t) return _r_();
setTimeout(function() {
_i_("3da:1164"), t.clearCache(), B.eventEmitter.trigger(t.EVENTS.EDITHOTEL, e), _r_();
}, 0), _r_();
}
function s(e) {
return _i_("3da:402"), _r_(String(e.b_id || e.b_hotel_id || e.hotel_id || e.id));
}
function _(e, t) {
_i_("3da:403"), e.on = function(e, i) {
return _i_("3da:1165"), B.eventEmitter.bind(t + e, function() {
_i_("3da:2107");
var e = Array.prototype.slice.call(arguments, 1);
i.apply(B.eventEmitter, e), _r_();
}), _r_(this);
}, e.emit = function(e) {
_i_("3da:1166");
var i = Array.prototype.slice.call(arguments, 1);
B.eventEmitter.trigger(t + e, i), _r_();
}, _r_();
}
function l() {
_i_("3da:404");
var e = [];
this._lists = e, this._requestsInProgress = {}, this._fetchedHotelIds = {}, this._backCompatibility = !0, _(this, "listStore_"), _r_();
}
l.prototype.getHotelId = s, l.prototype.backCompatibility = function(e) {
_i_("3da:792"), this._backCompatibility = e, _r_();
}, l.prototype._prepareHotelsData = function(e) {
_i_("3da:793");
var t = this;
return e.forEach(function(e, i, n) {
_i_("3da:1804"), e.index = i, e.index_is_first = 0 === i, e.index_is_last = i === n.length - 1, t.emit("hotel:init", e), _r_();
}), _r_(e);
}, l.prototype._prepareListsData = function(e, t) {
_i_("3da:794");
var i = this;
return t = t || {}, e.forEach(function(e) {
_i_("3da:1805"), e.hotels_count = e.hotels_count || 0, t.hotel_id && (e.hotels || (e.hotels = []), e.selected && e.hotels.push({
id:t.hotel_id
})), i._prepareHotelsData(e.hotels || []), _r_();
}), _r_(e);
}, l.prototype.getListById = function(e) {
_i_("3da:795");
var t = {};
return this._lists.forEach(function(e) {
_i_("3da:1806"), t[e.id] = e, _r_();
}), _r_(t[e]);
}, l.prototype.getListByDefaultListId = function(e) {
_i_("3da:796");
var t = null;
return this._lists.forEach(function(i) {
_i_("3da:1807"), i.default_list && parseFloat(i.default_list) === e && (t = i), _r_();
}), _r_(t);
};
function d(e, t) {
return _i_("3da:405"), _r_(new Array(e + 1).join(String(t)).split(""));
}
l.prototype.toggleHotel = function(e) {
_i_("3da:797");
var t = a(), i = this.getHotelById(e);
return i ? this.removeHotels({
hotels:[ i ],
list_id:e.list_id
}).then(function(e) {
_i_("3da:2108"), t.fulfill({
res:e,
state:!1
}), _r_();
}) :this.addHotels({
hotels:[ {
hotel_id:e.hotel_id
} ],
list_id:e.list_id
}).then(function(e) {
_i_("3da:2109"), t.fulfill({
res:e,
state:!0
}), _r_();
}), _r_(t);
}, l.prototype.addHotels = function(e) {
_i_("3da:798");
var t = this, i = a(), n = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:n,
states:d(e.hotels.length, 1)
}, function(r) {
_i_("3da:1808");
var a = t.getListById(e.list_id);
if (a.hotels = a.hotels || [], Array.prototype.push.apply(a.hotels, t._prepareHotelsData(r.hotels_data)), "undefined" != typeof a.hotels_count && (a.hotels_count += 1), B.eventEmitter.trigger("lists:hotels:added", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", a, {
hotel_ids:n
}), i.fulfill(r), !t._backCompatibility) return _r_();
o({
params:{
hotel_id:n[0],
lists:e.list_id
},
result:r
}), _r_();
}), _r_(i);
}, l.prototype.getListByIndex = function(e) {
return _i_("3da:799"), _r_(this._lists[e]);
}, l.prototype.removeHotels = function(e) {
_i_("3da:800");
var t = this, i = a(), n = t.getListById(e.list_id);
e.hotels.forEach(function(e) {
_i_("3da:1809");
var i = t.getHotelIndexById({
hotel_id:s(e),
list_id:n.id
});
-1 !== i && n.hotels.splice(i, 1), _r_();
}), B.eventEmitter.trigger("hotels:before:removed", e);
var _ = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:_,
states:d(e.hotels.length, 0)
}, function(r) {
if (_i_("3da:1810"), n.hotels_count && (n.hotels_count -= e.hotels.length), B.eventEmitter.trigger("hotels:removed", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", n, {
hotel_ids:_
}), i.fulfill(r), !t._backCompatibility) return _r_();
o({
params:{
hotel_id:_[0],
lists:e.list_id,
new_state:0
},
result:r
}), _r_();
}), _r_(i);
}, l.prototype.createList = function(e) {
_i_("3da:801");
var t = this, i = a();
return r.createList(n.extend(e, {
name:e.name
}), function(n) {
if (_i_("3da:1811"), !n.success || !n.id) return _r_(i.reject(n));
t._lists.push(n), n.hotels = [], n.hotels_count = 0, e.hotel_id && (n.hotels.push({
hotel_id:e.hotel_id
}), n.hotels_count++), t.emit("list:created", n, {
hotel_ids:[ e.hotel_id ]
}), B.eventEmitter.trigger("lists:created", e), i.fulfill(n), _r_();
}), _r_(i);
}, l.prototype.updateList = function(e) {
_i_("3da:802");
var t = a(), i = this.getListById(e.list_id);
return n.extend(i, e), r.updateList(e, function(e) {
_i_("3da:1812"), t.fulfill(e), _r_();
}), _r_(t);
}, l.prototype.getHotels = function(e) {
_i_("3da:803");
var t = this, i = a();
if (e.hotels && e.hotels.length > 0 && Number(e.hotels_count) === e.hotels.length && e.hotels[0].name) return i.fulfill(e), _r_(i);
return t.emit("list:hotels:loading", !0), r.list({
id:e.id,
with_hotels:1,
include_availability:1
}, function(n) {
if (_i_("3da:1813"), !n.success) return _r_(i.reject(n));
var r = n.lists[0];
e.hotels = t._prepareHotelsData(r.hotels), r && r.travel_group && (e.travel_group = r.travel_group), t.emit("list:hotels:loading", !1), i.fulfill(e), _r_();
}), _r_(i);
}, l.prototype.removeList = function(e) {
_i_("3da:804");
var t = this, i = -1;
if (this._lists.forEach(function(t, n) {
_i_("3da:1814"), String(e.list_id) === String(t.id) && (i = n), _r_();
}), -1 === i) return _r_();
this._lists.splice(i, 1), r.removeList({
list_id:e.list_id
}, function() {
_i_("3da:1815"), t.emit("list:removed", e), _r_();
}), _r_();
}, l.prototype._find = function(e) {
_i_("3da:805");
var t = this, i = null, n = -1, r = t.getListById(e.list_id);
return e.list_id ? r.hotels.forEach(function(t, r) {
_i_("3da:2110"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}) :t._lists.forEach(function(t) {
_i_("3da:2111"), t.hotels.forEach(function(t, r) {
_i_("3da:2574"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}), _r_();
}), _r_({
index:n,
res:i
});
}, l.prototype.getHotelById = function(e) {
return _i_("3da:806"), _r_(this._find(e).res);
}, l.prototype.getHotelIndexById = function(e) {
return _i_("3da:807"), _r_(this._find(e).index);
}, l.prototype.fetch = function(e) {
_i_("3da:808"), e = e || {};
var t = this, i = a();
if (this._requestsInProgress[JSON.stringify(e)]) return _r_(this._requestsInProgress[JSON.stringify(e)]);
if (t._lists.length > 0) {
if (!e.hotel_id) return i.fulfill({
lists:t._lists
}), _r_(i);
if (t._fetchedHotelIds[e.hotel_id]) return i.fulfill({
lists:t._lists
}), _r_(i);
}
this._requestsInProgress[JSON.stringify(e)] = i, e.hotel_id || t.emit("liststore:loading", !0);
function o(n) {
if (_i_("3da:1167"), t._lists.length = 0, null === n) return _r_();
Array.prototype.push.apply(t._lists, t._prepareListsData(n.lists, e)), t.emit("liststore:loading", !1), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
function s(n) {
_i_("3da:1168"), t._fetchedHotelIds[e.hotel_id] = !0;
var r = t._prepareListsData(n.lists, e);
r.forEach(function(e) {
_i_("3da:2112");
var i = t.getListById(e.id);
i ? (i.hotels || (i.hotels = []), e.hotels.forEach(function(e) {
_i_("3da:2662");
var n = t.getHotelById({
list_id:i.id,
hotel_id:t.getHotelId(e)
});
n || i.hotels.push(e), _r_();
})) :t._lists.push(e), _r_();
}), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
return e.hotel_id ? r.list(n.extend({}, e), s) :r.list(n.extend({}, e), o), _r_(i);
}, l.prototype.clearCache = function() {
_i_("3da:809"), this._lists.length = 0, _r_();
}, i.exports = new l(), _r_();
}), B.define("lists/listview-header/listview-header", function(e, t, i) {
"use strict";
_i_("3da:117");
var n = e("../listview-dropdown/listview-dropdown"), r = e("../lists-store/lists-store");
function a() {
_i_("3da:406");
var e = this, t = {
RENAME:".js-listview-header-list-rename",
REMOVE:".js-listview-header-list-remove"
};
function i() {
_i_("3da:810");
var i = r._lists.length <= 1;
e.el.find(t.REMOVE).toggleClass("g-hidden", i), _r_();
}
r.on("list:removed", $.proxy(i, e)), r.on("list:created", $.proxy(i, e)), this.el.delegate(t.RENAME, "click", function(t) {
_i_("3da:1169"), t.preventDefault(), n.renameList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(t.REMOVE, "click", function(t) {
_i_("3da:1170"), t.preventDefault(), n.removeList.call(e, e.getCurrentList()), _r_();
}), _r_();
}
i.exports = a, _r_();
}), B.define("lists/listview-touch/listview-touch", function(e, t, i) {
"use strict";
_i_("3da:118");
function n() {
_i_("3da:407"), $(document.body).toggleClass("listview--is-tablet", B.env.b_is_tdot_traffic), B.eventEmitter.bind("foldout:login:success", function() {
if (_i_("3da:1171"), !window.listView) return _r_();
window.listView.clearCache(), _r_();
}), _r_();
}
n.isEnabled = function() {
return _i_("3da:811"), _r_(B.env.b_is_tdot_traffic);
}, i.exports = n, _r_();
}), B.define("lists/listview-dropdown/listview-dropdown", function(e, t, i) {
"use strict";
_i_("3da:119");
var n = e("jquery"), r = e("../lists-tools/lists-tools"), a = e("../lists-store/lists-store"), o = e("../listview-touch/listview-touch");
function s() {
_i_("3da:408");
var e = this, t = "listview__dropdown";
o.isEnabled() && (t += " listview__dropdown--touch"), n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:t,
content:function() {
return _i_("3da:2416"), _r_(B.jstmpl("listview_dropdown").render({
lists:n.map(a._lists, function(e) {
return _i_("3da:2715"), _r_(n.extend({
name_short:r.ellipsis(e.name, 18)
}, e));
}),
lists_count:a._lists.length,
currentList:e.getCurrentList(),
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
b_lang:B.env.b_lang
}));
}
},
onrootready:function() {
_i_("3da:2113");
var t = 10004, i = this;
i.bind("show", function() {
_i_("3da:2575"), B.eventEmitter.trigger("listview:open-dropdown"), _r_();
}), i.root().css("z-index", t).delegate(".js-listview-change-list", "click", function(t) {
_i_("3da:2726"), t.preventDefault();
var r = n(t.currentTarget).data("id");
e.setCurrentList({
id:r
}), i.hide(), _r_();
}).delegate(".js-listview-rename-list", "click", function(t) {
_i_("3da:2700"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id"), a = e.getListById(r);
s.renameList.call(e, a), i.hide(), _r_();
}).delegate(".js-listview-remove-list", "click", function(t) {
_i_("3da:2663"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id");
s.removeList.call(e, {
id:r
}, function() {
_i_("3da:2725"), i.hide(), _r_();
}), _r_();
}).delegate(".js-listview-create-list", "click", function(t) {
_i_("3da:2576"), t.preventDefault(), t.stopPropagation();
var r = n.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"), ""));
if (!r) return _r_();
a.createList({
name:r
}).then(function(t) {
_i_("3da:2699"), e.setCurrentList({
id:t.id
}), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).delegate(".js-listview-header-dropdown"), _r_();
}
s.renameList = function(e) {
_i_("3da:812");
var t = n.trim(window.prompt(B.jstmpl.translations("dsf_rename_list_dialogue"), e.name));
if (!t) return _r_();
a.updateList({
list_id:e.id,
name:r.htmlEncode(t)
}), this.renderHeader(), _r_();
}, s.removeList = function(e, t) {
_i_("3da:813");
var i = n.trim(B.jstmpl.translations("wishlist_delete_prompt"));
window.confirm(i) && (a.removeList({
list_id:e.id
}), B.eventEmitter.trigger("listview:remove-list"), t && t()), _r_();
}, i.exports = s, _r_();
}), B.define("lists/listview-travel-party/listview-travel-party", function(e, t, i) {
"use strict";
_i_("3da:120");
var n = e("jquery"), r = e("../lists-tools/lists-tools");
function a(e) {
_i_("3da:409"), setTimeout(function() {
_i_("3da:1172"), e.resizeLightbox(), _r_();
}, 300), _r_();
}
function o() {
_i_("3da:410");
var e = this;
B.env.b_is_wishlist_singlepage || e.el.find(".b-selectbox__groupselection").bind("change", function() {
_i_("3da:1816"), a(e), _r_();
}), B.eventEmitter.bind("change:list:hotels", function(t, i) {
_i_("3da:1173");
var r = i.travel_group;
if ((!r || n.isEmptyObject(r)) && (r = {
rooms:1,
adults:2,
children:0
}), 1 === Number(r.rooms) && 0 === Number(r.children) && B.search.group("adults") === Number(r.adults)) return _r_();
B.search.group(r), B.env.b_is_wishlist_singlepage || a(e), _r_();
}), _r_();
}
o.buildUrlPart = function() {
_i_("3da:814");
var e = B.env.b_query_params_delimiter, t = n.map(B.search.group("childrenAges"), function(e) {
return _i_("3da:2310"), _r_("age=" + e);
}).join(e), i = e + r.stringifyUrl({
group_rooms:B.search.group("rooms"),
group_adults:B.search.group("adults"),
group_children:B.search.group("children")
}, e) + e + t;
return _r_(i);
}, o.buildAvailabilityParams = function() {
_i_("3da:815");
var e = r.pick(B.search.group("value"), "rooms", "adults", "children", "childrenAges");
return e.childrenAges && (e.childrenAges = e.childrenAges.join(" ")), _r_({
additional:e
});
}, i.exports = o, _r_();
}), B.define("lists/listview-calendar/listview-calendar", function(e, t, i) {
"use strict";
_i_("3da:121");
var n = e("../lists-tools/lists-tools"), r = e("../listview-hotel/listview-hotel"), a = e("../listview-availability/listview-availability"), o = "silent_update";
function s() {
if (_i_("3da:411"), B.calendar2 && s._bindEvents.call(this), B.search) {
var e = B.search.dates;
B.search.dates = function(t, i, n) {
if (_i_("3da:1817"), "undefined" == typeof n) return _r_(e.apply(B.search, arguments));
return i = B.Search.createDate(i), _r_(this.setDate_(t, i, n));
};
}
_r_();
}
s._bindEvents = function() {
_i_("3da:816");
function e(e, t, i) {
_i_("3da:1174"), e.availability[t] = i.toString(), e.availability[t + "_localized_date_short"] = B.formatter.date(i.toString(), "short_date_without_year"), _r_();
}
var t = 0, i = this, _ = null, l = $.extend({}, B.calendar2.checkinOptions, {
lazy:!1
}), d = $.extend({}, B.calendar2.checkoutOptions, {
lazy:!1
}), c = this.el.find(".b-form-checkin .b-datepicker").calendar2(l).data("calendar2"), u = this.el.find(".b-form-checkout .b-datepicker").calendar2(d).data("calendar2");
function h(e, t) {
_i_("3da:1175"), B.eventEmitter.off("SEARCH:date_changed", g);
var i = B.search.dates("checkout");
i >= t ? (B.search.dates("checkin", e, {
referrer:o
}), B.search.dates("checkout", t, {
referrer:o
})) :(B.search.dates("checkout", t, {
referrer:o
}), B.search.dates("checkin", e, {
referrer:o
})), B.eventEmitter.bind("SEARCH:date_changed", g), _r_();
}
function f(e) {
_i_("3da:1176");
var t = B.Search.createDate(e);
return _r_({
date:t,
dayId:B.calendar2.dayId(t.year, t.month, t.date),
monthId:B.calendar2.monthId(t.year, t.month)
});
}
function p(e) {
_i_("3da:1177");
var t = e ? e.availability || {} :{};
if (t.checkin && t.checkout) {
var i = f(t.checkin), n = f(t.checkout);
h(i.date, n.date), c.selectRange(i.dayId, n.dayId), c.selectMonth(i.monthId), u.selectRange(i.dayId, n.dayId), u.selectMonth(n.monthId);
}
_r_();
}
B.eventEmitter.bind("SEARCH:date_changed", g);
function g(r, l) {
if (_i_("3da:1178"), !_ || l.referrer === o) return _r_();
"checkin" === l.type && e(_, "checkin", l.value), "checkout" === l.type && e(_, "checkout", l.value), _.availability.checkout || (s.ensureDates(), e(_, "checkout", B.search.dates("checkout"))), _.availability.checkin || (s.ensureDates(), e(_, "checkin", B.search.dates("checkin"))), t = setTimeout(function() {
if (_i_("3da:2311"), t && window.clearTimeout(t), !_) return _r_();
a.checkAvailability({
list:i.getCurrentList(),
hotels:[ _ ],
dates:n.pick(_.availability, "checkin", "checkout")
}), B.eventEmitter.trigger("listview:check-single-hotel-availability"), _ = null, _r_();
}, 100), _r_();
}
this.el.delegate(".js-listview-toggle-calendar", "click", function(e) {
_i_("3da:1818"), e.preventDefault(), _ = i.getHotelFromEvent(e), r.setHotelProperty(_, "edit", !0);
var t = $(e.currentTarget).attr("data-type");
p(_), setTimeout(function() {
_i_("3da:2417"), i.el.find(".b-form-" + t + " .b-datepicker").trigger("showCalendar"), _r_();
}, 0), _r_();
}), _r_();
}, s.ensureDates = function() {
if (_i_("3da:817"), !(B.search.dates("checkin") instanceof B.Search.Date && B.search.dates("checkout") instanceof B.Search.Date)) {
var e = new Date();
B.search.dates("checkin", {
date:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}), B.search.dates("checkout") instanceof B.Search.MonthDate && B.search.dates("checkout", {
date:1,
month:B.search.dates("checkout").month,
year:B.search.dates("checkout").year
});
}
_r_();
}, i.exports = s, _r_();
}), B.define("lists/listview-note/listview-note", function(e, t, i) {
"use strict";
_i_("3da:122");
var n = e("../lists-api/lists-api").API;
function r(e) {
_i_("3da:412"), $(e).find("textarea").each(function() {
_i_("3da:1819"), this.setAttribute("style", "height:" + (this.scrollHeight - 5) + "px; overflow-y:hidden;"), _r_();
}).bind("input", function() {
_i_("3da:1179"), this.style.height = "auto", this.style.height = this.scrollHeight - 5 + "px", _r_();
}), _r_();
}
function a() {
return _i_("3da:413"), $.extend(this, {
noteInput:function(e, t) {
_i_("3da:1820");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-text");
return "string" == typeof t && n.val(t), _r_(n.val());
},
toggleNote:function(e, t) {
_i_("3da:1821");
var i = this.getHotelNodeById(e.id);
i.find(".js-listview-note").toggleClass("g-hidden", !t), t && i.find(".js-listview-note-text").focus(), r(i), _r_();
},
toggleWrapper:function(e, t) {
_i_("3da:1822");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-toggle-wrapper");
n.css("visibility", t ? "visible" :"hidden"), _r_();
},
toggleNoteControls:function(e, t, i) {
_i_("3da:1823");
var n = this.getHotelNodeById(e.id);
n.find(".listview-note__controls").toggleClass("g-hidden", !t), i && i.blur && n.find(".js-listview-note-text").blur(), _r_();
},
showSavedConfirmation:function(e) {
if (_i_("3da:1824"), "" === e.note) return _r_();
var t = this.getHotelNodeById(e.id), i = "listview-note__saved--showing", n = t.find(".js-listview-note-saved");
n.addClass(i), setTimeout(function() {
_i_("3da:2418"), n.removeClass(i), _r_();
}, 2e3), _r_();
},
setHotelNote:function(e) {
_i_("3da:1825");
var t = this, i = this.getHotelById(e);
i.note = e.note, this.noteInput(i, e.note), n.updateNote({
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
}, function() {
_i_("3da:2419"), t.showSavedConfirmation(i), _r_();
}), _r_();
},
_bindNoteEvents:function() {
_i_("3da:1826");
var e = this;
this.delegateEvents({
"click .js-listview-note-toggle":function(e) {
_i_("3da:2577"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !1), this.toggleNote(t, !0), _r_();
},
"mousedown .js-listview-note-save":function(e) {
_i_("3da:2578"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:this.noteInput(t)
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"mousedown .js-listview-note-remove":function(e) {
_i_("3da:2579"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !0), this.toggleNote(t, !1), this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:""
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"blur .js-listview-note-text":function(e) {
_i_("3da:2580");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).removeClass("listview-note__text--active"), this.toggleNoteControls(t, !1), t.note || this.noteInput(t) || (this.toggleNote(t, !1), this.toggleWrapper(t, !0)), _r_();
},
"focus .js-listview-note-text":function(e) {
_i_("3da:2581");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).addClass("listview-note__text--active"), this.toggleNoteControls(t, !0), _r_();
}
}), B.eventEmitter.bind("listview:rendered:hotels", function() {
_i_("3da:2420"), r(e.el), _r_();
}), B.eventEmitter.bind("listview:rendered:hotel", function(e, t) {
_i_("3da:2421"), r(t), _r_();
}), _r_();
}
}), _r_(this);
}
i.exports = a, _r_();
}), B.define("lists/listview-tabs/listview-tabs", function(e, t, i) {
"use strict";
_i_("3da:123");
function n(e) {
if (_i_("3da:414"), this._el = e.el, 0 === this._el.length) return _r_();
this._currentTab = null, this.currentTab(e.current), this.onSwitch = e.onSwitch, _r_();
}
n.prototype.currentTab = function(e) {
if (_i_("3da:818"), "undefined" == typeof e) return _r_(this._currentTab);
var t = this._el.find('[data-tab="' + e + '"]');
if (0 === t.length) throw new Error("[listview-tabs] No such tab");
this._currentTab = e;
var i = t.data("tab-template");
i && 0 === t.children().length && t.html(B.jstmpl(i).render()), "function" == typeof this.onSwitch && this.onSwitch(e, t), this._el.find("[data-tab]").not(t).addClass("g-hidden"), t.removeClass("g-hidden"), _r_();
}, i.exports = n, _r_();
}), B.define("lists/listview-share/listview-share", function(e, t, i) {
"use strict";
_i_("3da:124");
var n = e("jquery");
function r() {
_i_("3da:415");
var e = this;
if ("0" === B.env.auth_level) return this.delegateEvents({
"click .js-listview-share-link":function(e) {
_i_("3da:2114"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}
}), _r_();
var t = n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:"listview-share",
content:function() {
return _i_("3da:2312"), _r_(B.jstmpl("listview_share").render(n.extend(e.getCurrentList(), {
b_selected_language:B.env.b_selected_language
})));
}
},
selectInput:function() {
_i_("3da:1969");
function e() {
_i_("3da:2313"), this.root().find(".js-listview-share-url").select(), _r_();
}
setTimeout(e.bind(this), 100), _r_();
},
handleClick:function(e) {
_i_("3da:1970"), e.preventDefault(), this.selectInput(), _r_();
},
onrootready:function() {
_i_("3da:1971");
var e = this, t = 10004;
this.bind("show", this.selectInput.bind(this)), this.bind("show", function() {
_i_("3da:2511"), e.root().loadComponents(), _r_();
}), this.root().css("z-index", t).delegate(".js-listview-share-url", "click", this.handleClick.bind(this)), B.et.goal("wl_invite_friends"), _r_();
}
});
t.delegate(".js-listview-share-link"), _r_();
}
i.exports = r, _r_();
}), B.define("lists/lists-listview/lists-listview", function(e, t, i) {
"use strict";
_i_("3da:125");
var n = e("../lists-tools/lists-tools"), r = e("../lists-api/lists-api"), a = e("../lists-api/lists-api").API, o = e("../lists-store/lists-store"), s = e("../listview-dropdown/listview-dropdown"), _ = e("../listview-travel-party/listview-travel-party"), l = e("../listview-calendar/listview-calendar"), d = e("../listview-header/listview-header"), c = e("../listview-touch/listview-touch"), u = e("../listview-tabs/listview-tabs"), h = (e("../listview-note/listview-note"), e("../listview-share/listview-share")), f = e("../listview-header/listview-create-list"), p = e("../listview-template/listview-template"), g = e("../listview-hotel/listview-hotel"), m = e("../listview-availability/listview-availability");
function v(e) {
_i_("3da:416");
this.el = e.el, this._currentList = {
id:"",
hotels:[],
name:"",
url:"",
privacy:"",
hotels_count:0
}, this.store = o, this._isShown = !1, o.on("hotel:init", function(e) {
_i_("3da:1180"), m.setHotelAvailability(e, e.availability || {}, {
updateNights:!0,
silent:!0
}), _r_();
}), c.isEnabled() && c.call(this);
var t = "mywishlist" === B.env.b_action && "www" === B.env.b_site_type ? "loader" :"main";
this.tabs = new u({
el:this.el,
current:t,
onSwitch:function(e) {}
}), _r_();
}
v.prototype.renderHeader = function() {
_i_("3da:819");
var e = B.jstmpl("listview_header").render($.extend({
currentList:this.getCurrentList(),
currentTabName:this.tabs.currentTab(),
b_selected_language:B.env.b_selected_language
}, p.getEnv()));
this.el.find(".js-listview-header-wrapper").html(e).loadComponents(), _r_();
}, v.prototype.getHotelById = function(e) {
return _i_("3da:820"), e.list_id = e.list_id || this.getCurrentList().id, _r_(o.getHotelById(e));
}, v.prototype.getHotelNodeById = function(e) {
return _i_("3da:821"), _r_(this.el.find('.listview-hotel[data-id="' + String(e) + '"]'));
}, v.prototype.getHotelFromEvent = function(e) {
_i_("3da:822");
var t = $(e.currentTarget).closest(".listview-hotel"), i = t.attr("data-id");
return _r_(t && this.getHotelById({
hotel_id:i
}));
}, v.prototype.delegateEvents = function(e) {
_i_("3da:823");
for (var t in e) {
var i = t.split(" ");
this.el.delegate(i[1], i[0], e[t].bind(this));
}
return _r_(this);
}, v.prototype._bindEvents = function() {
_i_("3da:824");
var e = this;
o.on("list:hotels:loading", function(t) {
_i_("3da:1827"), e.tabs.currentTab(t ? "loader" :"main"), _r_();
}), o.on("list:removed", function(t) {
if (_i_("3da:1828"), String(e.getCurrentList().id) !== String(t.list_id)) return _r_();
var i = o.getListByIndex(0);
if (!i) return _r_();
e.setCurrentList(i), _r_();
}), o.on("change:hotel_b_undo", function(t) {
_i_("3da:1829"), e.renderHotel(t), a.updateHotels({
list_id:e.getCurrentList().id,
hotel_ids:[ t.hotel_id ],
states:[ t.b_undo ? 0 :1 ]
}), _r_();
}), o.on("change:hotel_loading", function(t) {
_i_("3da:1830"), e.getHotelNodeById(t.id).toggleClass("listview-hotel--loading", t.loading), _r_();
}), o.on("change:hotel_hidden", function(t) {
_i_("3da:1831"), setTimeout(function() {
_i_("3da:2422");
var i = e.getHotelNodeById(t.id);
t.hidden ? i.hide() :i.slideDown(), _r_();
}, 0), _r_();
}), B.eventEmitter.bind("change:list", function(t, i) {
_i_("3da:1832"), i && (o.getHotels(i).then(function() {
_i_("3da:2582"), e.renderHotels(i), B.eventEmitter.trigger("change:list:hotels", i), _r_();
}), e.renderHeader()), _r_();
}), B.eventEmitter.bind("lists:hotels:added", function() {
_i_("3da:1833"), e.setCurrentList({
id:e.getCurrentList().id
}), _r_();
}), B.eventEmitter.bind("hotels:before:removed", function(t, i) {
_i_("3da:1834");
var n = i.hotels[0];
e.getHotelNodeById(n.id).slideUp(function() {
_i_("3da:2423"), e.updateRootClassNames(), e.renderHeader(), _r_();
}), _r_();
}), B.eventEmitter.bind("change:hotel", function(t, i) {
_i_("3da:1835"), e.renderHotel(i), _r_();
});
var t = !1;
this.delegateEvents({
"click .js-go-to-list":function() {
_i_("3da:2115"), B.eventEmitter.trigger("listview:go-to-listmap-page"), _r_();
},
"click .js-listview-hotel-title":function() {
_i_("3da:2116"), B.eventEmitter.trigger("listview:click-on-hotel-link"), _r_();
},
"click .js-listview-hotel-image":function() {
_i_("3da:2117"), B.eventEmitter.trigger("listview:click-on-hotel-image"), _r_();
},
"click .js-listview-book":function() {
_i_("3da:2118"), B.eventEmitter.trigger("listview:book-now-clicked"), _r_();
},
"click .js-check-availability":function(e) {
_i_("3da:2119"), e.preventDefault(), l.ensureDates(), t || (t = !0), B.eventEmitter.trigger("listview:check-all-hotels-availability"), m.checkAvailability({
list:this.getCurrentList(),
dates:{
checkin:B.search.dates("checkin").toString(),
checkout:B.search.dates("checkout").toString()
}
}), _r_();
},
"click .js-listview-add":function(e) {
_i_("3da:2120"), e.preventDefault(), o.addHotels({
hotels:[ r.currentHotel() ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-listview-add-hotel":function(e) {
_i_("3da:2121"), e.preventDefault();
var t = $(e.currentTarget).attr("data-hotel-id");
o.addHotels({
hotels:[ {
b_hotel_id:t
} ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-remove-hotel":function(e) {
_i_("3da:2122"), e.preventDefault();
var t = this.getHotelFromEvent(e);
g.setHotelProperty(t, "b_undo", !0), _r_();
},
"click .js-listview-undo":function(e) {
_i_("3da:2123"), e.preventDefault();
var t = this.getHotelFromEvent(e);
g.setHotelProperty(t, "b_undo", !1), _r_();
},
"click .js-listview-footer-signin-link":function(e) {
_i_("3da:2124"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
},
"click .js-listview-footer-remove-msg":function(t) {
_i_("3da:2125"), t.preventDefault(), e.toggleSigninBlock(!1), _r_();
},
"click .js-listview-tab-toggle-map":function(e) {
_i_("3da:2126"), e.preventDefault(), "main" === this.tabs.currentTab() ? this.tabs.currentTab("map") :this.tabs.currentTab("main"), _r_();
},
"click .js-listview-signin-banner-remove":function(e) {
_i_("3da:2127"), e.preventDefault(), $.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), this.renderHotels(this.getCurrentList()), _r_();
}
}), B.env.b_is_shared_wishlist && ($(".js-listview-footer-signin-link").on("click", function(e) {
_i_("3da:2128"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}), $(".js-listview-signin-banner-remove").on("click", function(e) {
_i_("3da:2129"), e.preventDefault(), $.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), $(this).closest(".listview-signin-banner").remove(), _r_();
})), B.env.b_is_wishlist_singlepage || $(window).resize(n.throttle(function() {
_i_("3da:2314"), e.resizeLightbox(), _r_();
}, 1e3)), l.call(this), s.call(this), c.isEnabled() || _.call(this), d.call(this), h.call(this), f.call(this), this._bindGA(), _r_();
}, v.prototype.toggleSigninBlock = function(e) {
_i_("3da:825"), this.el.find(".js-listview-footer-signin").toggleClass("g-hidden", !e), e || $.cookie("tfl_listview_lightbox_show_signin_block", 1, {
expires:999,
path:"/"
}), B.env.b_is_wishlist_singlepage || this.resizeLightbox(), _r_();
}, v.prototype._bindGA = function() {
_i_("3da:826");
var e = [ "listview:show", "listview:hide", "listview:open-dropdown", "listview:go-to-listmap-page", "listview:remove-hotel", "listview:check-single-hotel-availability", "listview:check-all-hotels-availability", "listview:remove-list", "listview:book-now-clicked", "listview:click-on-hotel-link", "listview:click-on-hotel-image" ];
B.eventEmitter.bind(e.join(" "), function(e) {
_i_("3da:2130");
var t = {
loggedIn:B.env.b_user_auth_level_is_low ? "logged_in" :"logged_out",
pb:B.env.b_reg_user_detail_bookings_count,
ac:B.env.b_action
};
this.getCurrentList() && this.getCurrentList().hotels && $.extend(t, {
L:o._lists.length,
H:this.getCurrentList().hotels.length,
pr:this.getCurrentList().privacy
}), B.google.trackEvent("Listview", e.type.toString(), n.stringifyUrl(t, " : ")), _r_();
}.bind(this)), _r_();
}, v.prototype.clearCache = function() {
return _i_("3da:827"), _r_(o.clearCache());
}, v.prototype.getLists = function() {
_i_("3da:828");
var e = {};
$.extend(e, {
with_hotels:0,
include_availability:0
});
var t = o.fetch(e);
return _r_(t);
}, v.prototype.getListById = function(e) {
return _i_("3da:829"), _r_(o.getListById(e));
}, v.prototype.getCurrentList = function() {
return _i_("3da:830"), _r_(this._currentList);
}, v.prototype.setCurrentList = function(e) {
_i_("3da:831");
var t = this;
if (this._currentList = this.getListById(e.id), !this._currentList) return _r_(null);
return setTimeout(function() {
_i_("3da:1836"), B.env.b_is_shared_wishlist || B.eventEmitter.trigger("change:list", t._currentList), t.lastSelectedListId = t._currentList.id, _r_();
}, 0), _r_(this._currentList);
}, v.prototype.removeRackRateLoadingIcon = function(e) {
if (_i_("3da:832"), !e) return _r_();
setTimeout(function() {
_i_("3da:1837"), e.find(".js-listview-rack-rate-animated, .js-listview-price-animated").removeClass("listview-rack-rate-animated listview-price-animated"), _r_();
}, 1500), _r_();
}, v.prototype.renderHotel = function(e) {
_i_("3da:833");
var t = "listview_hotel";
B.env.fe_cdm_wl_table_layout && (t = "listview_hotel_row");
var i = B.jstmpl(t).render(p.prepare(e));
this.getHotelNodeById(e.id).replaceWith(i), B.eventEmitter.trigger("listview:rendered:hotel", this.getHotelNodeById(e.id)), this.removeRackRateLoadingIcon(this.getHotelNodeById(e.id)), _r_();
}, v.prototype.renderHotels = function(e) {
_i_("3da:834");
var t = this, i = $.extend({
hotels_count:e.hotels_count,
hotels:e.hotels.map(function(e) {
return _i_("3da:2424"), _r_(p.prepare(e));
}),
fe_cdm_comparable_lists:B.env.fe_cdm_comparable_lists,
showListsSurvey:B.env.showListsSurvey,
b_show_bbtool_sr_admin_favourite_hotel_badge:B.env.b_show_bbtool_sr_admin_favourite_hotel_badge ? 1 :0
}, p.getEnv(), r.currentHotel()), n = this.el.find(".js-listview-hotels"), a = "listview_hotels";
B.env.fe_cdm_wl_table_layout && (a = "listview_hotels_row");
var o = B.jstmpl(a).render(i);
return n.html(o), "function" == typeof n.loadComponents && n.loadComponents(), this.updateRootClassNames(), B.env.b_is_wishlist_singlepage || setTimeout(function() {
_i_("3da:2131"), t.resizeLightbox(), _r_();
}, 0), B.eventEmitter.trigger("listview:rendered:hotels"), this.removeRackRateLoadingIcon(n), _r_(this);
}, v.prototype.updateRootClassNames = function() {
_i_("3da:835");
var e = this.getCurrentList(), t = e.hotels ? 0 === e.hotels.length :!0, i = B.jstmpl("listview_root_classnames").render({
b_action:B.env.b_action,
shown:this._isShown,
isEmpty:t,
currentList:e,
singlePage:B.env.b_is_wishlist_singlepage,
full_width:B.env.fe_cdm_wl_table_layout || B.env.fe_cdm_comparable_lists
});
this.el.get(0).className = i, _r_();
}, v.prototype.show = function() {
_i_("3da:836");
var e = this;
this._binded || (this._bindEvents(), this._binded = !0), e._isShown = !0, B.eventEmitter.trigger("listview:show", this), B.events.trigger("listview:show", this);
var t = "listview_lightbox";
this.updateRootClassNames(), this.renderHeader(), B.env.b_is_wishlist_singlepage || B.lightbox.show(e.el, {
bAnimation:!0,
customWrapperClassName:t,
hideCallBack:function() {
_i_("3da:2425"), B.eventEmitter.trigger("listview:hide"), e._isShown = !1, e.updateRootClassNames(), _r_();
}
}), $(".user_center_popover").hide(), "myreservations" === B.env.b_action && setTimeout(function() {
_i_("3da:2132"), $(".modal-mask").css("zIndex", 10003), _r_();
}, 0), B.env.auth_level < 1 && !$.cookie("tfl_listview_lightbox_show_signin_block") && this.getCurrentList().hotels_count > 2 && this.toggleSigninBlock(!0), _r_();
}, v.prototype.isShown = function() {
return _i_("3da:837"), _r_(this._isShown);
}, v.prototype.resizeLightbox = function() {
_i_("3da:838");
var e = this.el.find(".listview-footer").outerHeight();
e = e > 0 ? e + 15 :e;
var t = $(".listview_lightbox").height(), i = this.el.find(".listview__controls"), n = i.is(":visible") ? this.el.find(".listview__controls").outerHeight() :0;
this.el.find(".js-listview-hotels").height(t - (75 + n) - e), _r_();
}, i.exports = v, _r_();
}), B.define("component/lists/listview-empty-list", function(e, t, i) {
"use strict";
_i_("3da:126");
var n = e("../lists-api/lists-api").API, r = {
_hotels:[],
get:function(e) {
_i_("3da:1181");
var t = this;
n.getRecentlyViewed({
limit:5
}, function(i) {
_i_("3da:2133"), t._hotels = i.hotels, e(null, t._hotels), _r_();
}), _r_();
}
};
i.exports = e("component").extend({
tmpl:B.jstmpl("listview_empty_list_recently_viewed"),
state:{
recentlyViewedHotels:[]
},
setState:function(e) {
_i_("3da:1647"), $.extend(this.state, e), this.render(), _r_();
},
fetch:function() {
_i_("3da:1648");
var e = this;
r.get(function(t, i) {
_i_("3da:2315"), e.setState({
recentlyViewedHotels:i
}), _r_();
}), _r_();
},
render:function() {
_i_("3da:1649");
var e = this.tmpl.render(this.state);
this.$el.html(e), this.$el.find(".js-listview-empty-list-recently-viewed").hide().slideDown(), _r_();
},
init:function() {
_i_("3da:1650"), this.render(), this.fetch(), _r_();
}
}), _r_();
}), B.define("lists/listview-template/listview-template", function(e, t, i) {
"use strict";
_i_("3da:127");
var n = e("../lists-tools/lists-tools"), r = e("../listview-travel-party/listview-travel-party"), a = e("../listview-touch/listview-touch"), o = e("../lists-store/lists-store");
i.exports = {
getEnv:function() {
return _i_("3da:1182"), _r_({
b_action:B.env.b_action,
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
has_cookie_tfl_listview_show_signin_banner:Boolean($.cookie("tfl_listview_show_signin_banner")),
is_desktop:"1" === B.env.b_site_type_id,
is_logged_in:B.env.auth_level > 0,
b_lang_is_rtl:B.env.rtl,
is_inside_listview:1,
b_reg_user_wishlist_remaining:B.env.b_reg_user_wishlist_remaining,
b_wishlist_referrer:B.env.b_wishlist_referrer
});
},
buildHotelLink:function(e, t) {
_i_("3da:1183");
var i = "maxotel_rooms", o = "editDates", s = 0 === e.url.indexOf("http") ? e.url :B.env.b_nonsecure_hostname + e.url, _ = B.env.b_query_params_delimiter, l = e.availability && e.availability.checkin && e.availability.checkout;
return l && (s = s + _ + n.stringifyUrl(n.pick(e.availability, "checkin", "checkout"), _)), a.isEnabled() || (s += r.buildUrlPart()), t && t.from_list && (s = s + _ + "from_list=1"), B.env.b_label && (s = s + _ + "label=" + B.env.b_label), B.env.b_aid && !/aid=/.test(s) && (s = s + _ + "aid=" + B.env.b_aid), t && t.goToRoomTable && (s = s + "#" + (l ? i :o)), _r_(s);
},
prepare:function(e, t) {
_i_("3da:1184");
var i = {
from_list:1
}, n = 35;
$.extend(i, {
goToRoomTable:!0
});
var r = $.extend({}, e, {
id:o.getHotelId(e),
fe_cdm_comparable_lists:B.env.fe_cdm_comparable_lists,
b_guest_country:B.env.b_guest_country,
b_countrycode:e.cc1,
b_bookings_owned:B.env.b_bookings_owned,
b_partner_channel_id:B.env.b_partner_channel_id,
absolute_url:this.buildHotelLink(e),
book_now_url:this.buildHotelLink(e, i),
has_availability:!$.isEmptyObject(e.availability) && "undefined" != typeof e.availability.is_available,
available:Boolean(e.availability.is_available),
edit:Boolean(e.edit),
hotel_min_rate_num:parseFloat(e.hotel_min_rate_num),
hotel_review_score_non_localized:parseFloat(e.hotel_review_score_non_localized ? e.hotel_review_score_non_localized :e.hotel_review_score),
name_ellipsis:e.name && e.name.length > n ? e.name.slice(0, n) + "&hellip;" :e.name
}, this.getEnv(), t);
return r.availability && (r.availability.checkin && r.availability.checkout && (r.availability.nights = B.Search.createDate(r.availability.checkout).valueOf() - B.Search.createDate(r.availability.checkin).valueOf()), r.min_rate_availability = r.availability.is_available ? r.availability.price :void 0, r.b_rooms_left = r.availability.rooms_available), r.cdm_wl_location_review_exp = B.env.fe_cdm_wl_location_review, 2 === B.env.fe_cdm_comparable_lists && r.hotel_review_score_non_localized > 0 ? r.cdm_wl_location_review_exp = 2 :1 === B.env.fe_cdm_comparable_lists && (r.cdm_wl_location_review_exp = 0), _r_(r);
}
}, _r_();
}), B.define("lists/listview-hotel/listview-hotel", function(e, t, i) {
"use strict";
_i_("3da:128");
var n = e("../lists-store/lists-store");
i.exports = {
setHotelProperty:function(e, t, i) {
return _i_("3da:1185"), e[t] = i, n.emit("change:hotel_" + t, e, t), _r_(e);
}
}, _r_();
}), B.define("lists/listview-availability/listview-availability", function(e, t, i) {
"use strict";
_i_("3da:129");
var n = e("../lists-api/lists-api").API, r = e("../lists-store/lists-store"), a = e("../listview-hotel/listview-hotel"), o = e("../listview-touch/listview-touch"), s = e("../listview-travel-party/listview-travel-party");
i.exports = {
setHotelAvailability:function(e, t, i) {
_i_("3da:1186"), e.availability = t, i && i.silent || B.eventEmitter.trigger("change:hotel", e), _r_();
},
checkAvailability:function(e, t) {
_i_("3da:1187");
var i = this, _ = e.list, l = e.dates, d = e.hotels || _.hotels;
d.forEach(function(e) {
_i_("3da:2134"), a.setHotelProperty(e, "loading", !0), _r_();
});
var c = $.extend({
hotel_ids:d.map(r.getHotelId),
list_id:_.id
}, l);
o.isEnabled() || $.extend(c, s.buildAvailabilityParams()), n.getAvailability(c, function(e) {
_i_("3da:2135"), d.forEach(function(t) {
_i_("3da:2583"), a.setHotelProperty(t, "edit", !1), a.setHotelProperty(t, "loading", !1);
var n = r.getHotelId(t);
e[n] && i.setHotelAvailability(t, e[n], {
updateNights:!0
}), _r_();
}), t && t(), _r_();
}), _r_();
}
}, _r_();
}), B.define("lists/listview-header/listview-create-list", function(e, t, i) {
"use strict";
_i_("3da:130");
var n = (e("../lists-tools/lists-tools"), e("../lists-store/lists-store"));
e("../listview-touch/listview-touch");
function r() {
_i_("3da:417");
var e = this;
$(".js-listview-header-wrapper").on("click", ".js-listview-create-list", function(t) {
_i_("3da:1188"), t.preventDefault(), t.stopPropagation();
var i = ($(t.target), $.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"), "")));
if (!i) return _r_();
n.createList({
name:i
}).then(function(t) {
_i_("3da:2136"), e.setCurrentList({
id:t.id
}), t.remaining < 1 && (B.env.b_reg_user_wishlist_remaining = 0), _r_();
}), _r_();
}), _r_();
}
i.exports = r, _r_();
}), B.define("require_absolute", function(e, t, i) {
_i_("3da:131"), i.exports = function(t) {
return _i_("3da:839"), _r_(e(t.replace(/^.*components\//g, "")));
}, _r_();
});

function init() {
_i_("3da:1"), B.require([ "require_absolute" ], function(e) {
_i_("3da:418");
var t = B.env.b_is_tdot_traffic, i = e("../../components/lists/lists-api/lists-api"), n = e("../../components/lists/lists-store/lists-store"), r = e("../../components/lists/lists-listview/lists-listview");
function a(e) {
_i_("3da:840"), e.getLists().then(function() {
_i_("3da:1838");
var t = e.getListById(i.getLastChangedListId());
e.lastSelectedListId ? e.setCurrentList({
id:e.lastSelectedListId
}) :t ? e.setCurrentList({
id:t.id
}) :e.setCurrentList({
id:n.getListByIndex(0).id
}), e.show(), _r_();
}), _r_();
}
if (t) return _r_();
if (!B.env.is_listview_page) return _r_();
var o = new r({
el:$(".listview_lightbox__container")
});
window.listView = o, $(".js-uc-listview-lightbox").click(function(e) {
_i_("3da:1189"), e.preventDefault(), t && $(".select_foldout").hide(), a(o), _r_();
}), B.env.b_run_tfl_move_away_from_lightbox && $(".js-uc-wishlists-trigger").click(function(e) {
return _i_("3da:1839"), e.preventDefault(), window.location.href = B.env.b_wishlist_singlepage_url, _r_();
});
var s = function() {
_i_("3da:1190"), o && !o.isShown() && o.clearCache(), _r_();
};
B.eventEmitter.bind("wl:create", s), B.eventEmitter.bind("wl:edithotel", s);
var _ = $.grep([ ".js-wishlist-added-to-name-link", ".js-open-list", '.js-uc-notification-link[href*="wl_id="]', 'a[href*="/mywishlist"][href*="wl_id="]' ], Boolean);
if ($(document.body).undelegate(".wl-dropdown-link", "click"), $(document.body).delegate(_.join(","), "click", function(e) {
if (_i_("3da:1191"), !B.env.is_listview_page) return _r_();
if (B.env.b_run_tfl_move_away_from_lightbox) return window.location.href = e.target.href, _r_();
var t = i.getIdFromUrl($(e.currentTarget).attr("href"));
t && (e.preventDefault(), o.getLists().then(function() {
_i_("3da:2426"), o.setCurrentList({
id:t
}), o.show(), _r_();
})), _r_();
}), B.env.b_is_wishlist_singlepage) {
var l = i.getIdFromUrl(window.location.href);
"null" != l && B.env.auth_level > 0 ? o.getLists().then(function() {
_i_("3da:2137"), o.setCurrentList({
id:l
}), o.show(), _r_();
}) :a(o), $(".listview__controls").stick_in_parent({
sticky_class:"listview__controls--sticky"
});
}
B.env.fe_cdm_comparable_lists && (B.eventEmitter.bind("listview:rendered:hotels", handleHotelsRenderedEvent), $(document.body).on("click", ".comparable-list-scroll-btn", handleScrollClickEvent)), _r_();
}), _r_();
}

var SCROLL_DURATION = 200, SCROLL_STEP = 300;

function handleScrollClickEvent(e) {
_i_("3da:2");
var t = $(e.target), i = $(".comparable-list-container"), n = i.scrollLeft() || 0;
t.hasClass("comparable-list-scroll-btn--left") ? i.animate({
scrollLeft:n - SCROLL_STEP
}, SCROLL_DURATION) :i.animate({
scrollLeft:n + SCROLL_STEP
}, SCROLL_DURATION), B.et.customGoal("GaQOMZUHZCLcPUC", 3), _r_();
}

function handleHotelsRenderedEvent() {
_i_("3da:3");
var e = $(".comparable-list-container"), t = e.get(0);
if (!t) return _r_();
t.scrollWidth > t.clientWidth ? (B.et.customGoal("GaQOMZUHZCLcPUC", 1), $(".comparable-list-scroll-btn").show()) :$(".comparable-list-scroll-btn").hide(), e.on("scroll", function i(n) {
_i_("3da:419"), t.scrollLeft > 0 && (B.et.customGoal("GaQOMZUHZCLcPUC", 2), e.off("scroll", i)), _r_();
}), _r_();
}

B[sNSStartup].listView = {
init:init
}, B.define("component/qrcode/qrcodelib", function(e, t, i) {
"use strict";
_i_("3da:132");
var n;
!function() {
_i_("3da:841");
function e(e) {
_i_("3da:1192"), this.mode = i.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
for (var t = 0, n = this.data.length; n > t; t++) {
var r = [], a = this.data.charCodeAt(t);
a > 65536 ? (r[0] = 240 | (1835008 & a) >>> 18, r[1] = 128 | (258048 & a) >>> 12, r[2] = 128 | (4032 & a) >>> 6, r[3] = 128 | 63 & a) :a > 2048 ? (r[0] = 224 | (61440 & a) >>> 12, r[1] = 128 | (4032 & a) >>> 6, r[2] = 128 | 63 & a) :a > 128 ? (r[0] = 192 | (1984 & a) >>> 6, r[1] = 128 | 63 & a) :r[0] = a, this.parsedData.push(r);
}
this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239)), _r_();
}
e.prototype = {
getLength:function(e) {
return _i_("3da:2138"), _r_(this.parsedData.length);
},
write:function(e) {
_i_("3da:2139");
for (var t = 0, i = this.parsedData.length; i > t; t++) e.put(this.parsedData[t], 8);
_r_();
}
};
function t(e, t) {
_i_("3da:1193"), this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [], _r_();
}
t.prototype = {
addData:function(t) {
_i_("3da:2140");
var i = new e(t);
this.dataList.push(i), this.dataCache = null, _r_();
},
isDark:function(e, t) {
if (_i_("3da:2141"), 0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
return _r_(this.modules[e][t]);
},
getModuleCount:function() {
return _i_("3da:2142"), _r_(this.moduleCount);
},
make:function() {
_i_("3da:2143"), this.makeImpl(!1, this.getBestMaskPattern()), _r_();
},
makeImpl:function(e, i) {
_i_("3da:2144"), this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
for (var n = 0; n < this.moduleCount; n++) {
this.modules[n] = new Array(this.moduleCount);
for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
}
this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, i), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, i), _r_();
},
setupPositionProbePattern:function(e, t) {
_i_("3da:2145");
for (var i = -1; 7 >= i; i++) {
if (-1 >= e + i || this.moduleCount <= e + i) continue;
for (var n = -1; 7 >= n; n++) {
if (-1 >= t + n || this.moduleCount <= t + n) continue;
i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? this.modules[e + i][t + n] = !0 :this.modules[e + i][t + n] = !1;
}
}
_r_();
},
getBestMaskPattern:function() {
_i_("3da:2146");
for (var e = 0, t = 0, i = 0; 8 > i; i++) {
this.makeImpl(!0, i);
var n = o.getLostPoint(this);
(0 == i || e > n) && (e = n, t = i);
}
return _r_(t);
},
createMovieClip:function(e, t, i) {
_i_("3da:2147");
var n = e.createEmptyMovieClip(t, i), r = 1;
this.make();
for (var a = 0; a < this.modules.length; a++) for (var o = a * r, s = 0; s < this.modules[a].length; s++) {
var _ = s * r, l = this.modules[a][s];
l && (n.beginFill(0, 100), n.moveTo(_, o), n.lineTo(_ + r, o), n.lineTo(_ + r, o + r), n.lineTo(_, o + r), n.endFill());
}
return _r_(n);
},
setupTimingPattern:function() {
_i_("3da:2148");
for (var e = 8; e < this.moduleCount - 8; e++) {
if (null != this.modules[e][6]) continue;
this.modules[e][6] = e % 2 == 0;
}
for (var t = 8; t < this.moduleCount - 8; t++) {
if (null != this.modules[6][t]) continue;
this.modules[6][t] = t % 2 == 0;
}
_r_();
},
setupPositionAdjustPattern:function() {
_i_("3da:2149");
for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var i = 0; i < e.length; i++) {
var n = e[t], r = e[i];
if (null != this.modules[n][r]) continue;
for (var a = -2; 2 >= a; a++) for (var s = -2; 2 >= s; s++) -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s ? this.modules[n + a][r + s] = !0 :this.modules[n + a][r + s] = !1;
}
_r_();
},
setupTypeNumber:function(e) {
_i_("3da:2150");
for (var t = o.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n;
}
for (var i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n;
}
_r_();
},
setupTypeInfo:function(e, t) {
_i_("3da:2151");
for (var i = this.errorCorrectLevel << 3 | t, n = o.getBCHTypeInfo(i), r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
6 > r ? this.modules[r][8] = a :8 > r ? this.modules[r + 1][8] = a :this.modules[this.moduleCount - 15 + r][8] = a;
}
for (var r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
8 > r ? this.modules[8][this.moduleCount - r - 1] = a :9 > r ? this.modules[8][15 - r - 1 + 1] = a :this.modules[8][15 - r - 1] = a;
}
this.modules[this.moduleCount - 8][8] = !e, _r_();
},
mapData:function(e, t) {
_i_("3da:2152");
for (var i = -1, n = this.moduleCount - 1, r = 7, a = 0, s = this.moduleCount - 1; s > 0; s -= 2) for (6 == s && s--; ;) {
for (var _ = 0; 2 > _; _++) if (null == this.modules[n][s - _]) {
var l = !1;
a < e.length && (l = 1 == (e[a] >>> r & 1));
var d = o.getMask(t, n, s - _);
d && (l = !l), this.modules[n][s - _] = l, r--, -1 == r && (a++, r = 7);
}
if (n += i, 0 > n || this.moduleCount <= n) {
n -= i, i = -i;
break;
}
}
_r_();
}
}, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(e, i, n) {
_i_("3da:1840");
for (var r = d.getRSBlocks(e, i), a = new c(), s = 0; s < n.length; s++) {
var _ = n[s];
a.put(_.mode, 4), a.put(_.getLength(), o.getLengthInBits(_.mode, e)), _.write(a);
}
for (var l = 0, s = 0; s < r.length; s++) l += r[s].dataCount;
if (a.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * l + ")");
for (a.getLengthInBits() + 4 <= 8 * l && a.put(0, 4); a.getLengthInBits() % 8 != 0; ) a.putBit(!1);
for (;;) {
if (a.getLengthInBits() >= 8 * l) break;
if (a.put(t.PAD0, 8), a.getLengthInBits() >= 8 * l) break;
a.put(t.PAD1, 8);
}
return _r_(t.createBytes(a, r));
}, t.createBytes = function(e, t) {
_i_("3da:1841");
for (var i = 0, n = 0, r = 0, a = new Array(t.length), s = new Array(t.length), _ = 0; _ < t.length; _++) {
var d = t[_].dataCount, c = t[_].totalCount - d;
n = Math.max(n, d), r = Math.max(r, c), a[_] = new Array(d);
for (var u = 0; u < a[_].length; u++) a[_][u] = 255 & e.buffer[u + i];
i += d;
var h = o.getErrorCorrectPolynomial(c), f = new l(a[_], h.getLength() - 1), p = f.mod(h);
s[_] = new Array(h.getLength() - 1);
for (var u = 0; u < s[_].length; u++) {
var g = u + p.getLength() - s[_].length;
s[_][u] = g >= 0 ? p.get(g) :0;
}
}
for (var m = 0, u = 0; u < t.length; u++) m += t[u].totalCount;
for (var v = new Array(m), b = 0, u = 0; n > u; u++) for (var _ = 0; _ < t.length; _++) u < a[_].length && (v[b++] = a[_][u]);
for (var u = 0; r > u; u++) for (var _ = 0; _ < t.length; _++) u < s[_].length && (v[b++] = s[_][u]);
return _r_(v);
};
for (var i = {
MODE_NUMBER:1,
MODE_ALPHA_NUM:2,
MODE_8BIT_BYTE:4,
MODE_KANJI:8
}, r = {
L:1,
M:0,
Q:3,
H:2
}, a = {
PATTERN000:0,
PATTERN001:1,
PATTERN010:2,
PATTERN011:3,
PATTERN100:4,
PATTERN101:5,
PATTERN110:6,
PATTERN111:7
}, o = {
PATTERN_POSITION_TABLE:[ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
G15:1335,
G18:7973,
G15_MASK:21522,
getBCHTypeInfo:function(e) {
_i_("3da:2153");
for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0; ) t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
return _r_((e << 10 | t) ^ o.G15_MASK);
},
getBCHTypeNumber:function(e) {
_i_("3da:2154");
for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0; ) t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
return _r_(e << 12 | t);
},
getBCHDigit:function(e) {
_i_("3da:2155");
for (var t = 0; 0 != e; ) t++, e >>>= 1;
return _r_(t);
},
getPatternPosition:function(e) {
return _i_("3da:2156"), _r_(o.PATTERN_POSITION_TABLE[e - 1]);
},
getMask:function(e, t, i) {
switch (_i_("3da:2157"), e) {
case a.PATTERN000:
return _r_((t + i) % 2 == 0);

case a.PATTERN001:
return _r_(t % 2 == 0);

case a.PATTERN010:
return _r_(i % 3 == 0);

case a.PATTERN011:
return _r_((t + i) % 3 == 0);

case a.PATTERN100:
return _r_((Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0);

case a.PATTERN101:
return _r_(t * i % 2 + t * i % 3 == 0);

case a.PATTERN110:
return _r_((t * i % 2 + t * i % 3) % 2 == 0);

case a.PATTERN111:
return _r_((t * i % 3 + (t + i) % 2) % 2 == 0);

default:
throw new Error("bad maskPattern:" + e);
}
_r_();
},
getErrorCorrectPolynomial:function(e) {
_i_("3da:2158");
for (var t = new l([ 1 ], 0), i = 0; e > i; i++) t = t.multiply(new l([ 1, s.gexp(i) ], 0));
return _r_(t);
},
getLengthInBits:function(e, t) {
if (_i_("3da:2159"), t >= 1 && 10 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(10);

case i.MODE_ALPHA_NUM:
return _r_(9);

case i.MODE_8BIT_BYTE:
return _r_(8);

case i.MODE_KANJI:
return _r_(8);

default:
throw new Error("mode:" + e);
} else if (27 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(12);

case i.MODE_ALPHA_NUM:
return _r_(11);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(10);

default:
throw new Error("mode:" + e);
} else {
if (!(41 > t)) throw new Error("type:" + t);
switch (e) {
case i.MODE_NUMBER:
return _r_(14);

case i.MODE_ALPHA_NUM:
return _r_(13);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(12);

default:
throw new Error("mode:" + e);
}
}
_r_();
},
getLostPoint:function(e) {
_i_("3da:2160");
for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n++) for (var r = 0; t > r; r++) {
for (var a = 0, o = e.isDark(n, r), s = -1; 1 >= s; s++) {
if (0 > n + s || n + s >= t) continue;
for (var _ = -1; 1 >= _; _++) {
if (0 > r + _ || r + _ >= t) continue;
if (0 == s && 0 == _) continue;
o == e.isDark(n + s, r + _) && a++;
}
}
a > 5 && (i += 3 + a - 5);
}
for (var n = 0; t - 1 > n; n++) for (var r = 0; t - 1 > r; r++) {
var l = 0;
e.isDark(n, r) && l++, e.isDark(n + 1, r) && l++, e.isDark(n, r + 1) && l++, e.isDark(n + 1, r + 1) && l++, (0 == l || 4 == l) && (i += 3);
}
for (var n = 0; t > n; n++) for (var r = 0; t - 6 > r; r++) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (i += 40);
for (var r = 0; t > r; r++) for (var n = 0; t - 6 > n; n++) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (i += 40);
for (var d = 0, r = 0; t > r; r++) for (var n = 0; t > n; n++) e.isDark(n, r) && d++;
var c = Math.abs(100 * d / t / t - 50) / 5;
return i += 10 * c, _r_(i);
}
}, s = {
glog:function(e) {
if (_i_("3da:2161"), 1 > e) throw new Error("glog(" + e + ")");
return _r_(s.LOG_TABLE[e]);
},
gexp:function(e) {
for (_i_("3da:2162"); 0 > e; ) e += 255;
for (;e >= 256; ) e -= 255;
return _r_(s.EXP_TABLE[e]);
},
EXP_TABLE:new Array(256),
LOG_TABLE:new Array(256)
}, _ = 0; 8 > _; _++) s.EXP_TABLE[_] = 1 << _;
for (var _ = 8; 256 > _; _++) s.EXP_TABLE[_] = s.EXP_TABLE[_ - 4] ^ s.EXP_TABLE[_ - 5] ^ s.EXP_TABLE[_ - 6] ^ s.EXP_TABLE[_ - 8];
for (var _ = 0; 255 > _; _++) s.LOG_TABLE[s.EXP_TABLE[_]] = _;
function l(e, t) {
if (_i_("3da:1194"), void 0 == e.length) throw new Error(e.length + "/" + t);
for (var i = 0; i < e.length && 0 == e[i]; ) i++;
this.num = new Array(e.length - i + t);
for (var n = 0; n < e.length - i; n++) this.num[n] = e[n + i];
_r_();
}
l.prototype = {
get:function(e) {
return _i_("3da:2163"), _r_(this.num[e]);
},
getLength:function() {
return _i_("3da:2164"), _r_(this.num.length);
},
multiply:function(e) {
_i_("3da:2165");
for (var t = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < e.getLength(); n++) t[i + n] ^= s.gexp(s.glog(this.get(i)) + s.glog(e.get(n)));
return _r_(new l(t, 0));
},
mod:function(e) {
if (_i_("3da:2166"), this.getLength() - e.getLength() < 0) return _r_(this);
for (var t = s.glog(this.get(0)) - s.glog(e.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
for (var n = 0; n < e.getLength(); n++) i[n] ^= s.gexp(s.glog(e.get(n)) + t);
return _r_(new l(i, 0).mod(e));
}
};
function d(e, t) {
_i_("3da:1195"), this.totalCount = e, this.dataCount = t, _r_();
}
d.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], d.getRSBlocks = function(e, t) {
_i_("3da:1842");
var i = d.getRsBlockTable(e, t);
if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
for (var n = i.length / 3, r = [], a = 0; n > a; a++) for (var o = i[3 * a + 0], s = i[3 * a + 1], _ = i[3 * a + 2], l = 0; o > l; l++) r.push(new d(s, _));
return _r_(r);
}, d.getRsBlockTable = function(e, t) {
switch (_i_("3da:1843"), t) {
case r.L:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 0]);

case r.M:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 1]);

case r.Q:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 2]);

case r.H:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 3]);

default:
return _r_(void 0);
}
_r_();
};
function c() {
_i_("3da:1196"), this.buffer = [], this.length = 0, _r_();
}
c.prototype = {
get:function(e) {
_i_("3da:2167");
var t = Math.floor(e / 8);
return _r_(1 == (this.buffer[t] >>> 7 - e % 8 & 1));
},
put:function(e, t) {
_i_("3da:2168");
for (var i = 0; t > i; i++) this.putBit(1 == (e >>> t - i - 1 & 1));
_r_();
},
getLengthInBits:function() {
return _i_("3da:2169"), _r_(this.length);
},
putBit:function(e) {
_i_("3da:2170");
var t = Math.floor(this.length / 8);
this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++, _r_();
}
};
var u = [ [ 17, 14, 11, 7 ], [ 32, 26, 20, 14 ], [ 53, 42, 32, 24 ], [ 78, 62, 46, 34 ], [ 106, 84, 60, 44 ], [ 134, 106, 74, 58 ], [ 154, 122, 86, 64 ], [ 192, 152, 108, 84 ], [ 230, 180, 130, 98 ], [ 271, 213, 151, 119 ], [ 321, 251, 177, 137 ], [ 367, 287, 203, 155 ], [ 425, 331, 241, 177 ], [ 458, 362, 258, 194 ], [ 520, 412, 292, 220 ], [ 586, 450, 322, 250 ], [ 644, 504, 364, 280 ], [ 718, 560, 394, 310 ], [ 792, 624, 442, 338 ], [ 858, 666, 482, 382 ], [ 929, 711, 509, 403 ], [ 1003, 779, 565, 439 ], [ 1091, 857, 611, 461 ], [ 1171, 911, 661, 511 ], [ 1273, 997, 715, 535 ], [ 1367, 1059, 751, 593 ], [ 1465, 1125, 805, 625 ], [ 1528, 1190, 868, 658 ], [ 1628, 1264, 908, 698 ], [ 1732, 1370, 982, 742 ], [ 1840, 1452, 1030, 790 ], [ 1952, 1538, 1112, 842 ], [ 2068, 1628, 1168, 898 ], [ 2188, 1722, 1228, 958 ], [ 2303, 1809, 1283, 983 ], [ 2431, 1911, 1351, 1051 ], [ 2563, 1989, 1423, 1093 ], [ 2699, 2099, 1499, 1139 ], [ 2809, 2213, 1579, 1219 ], [ 2953, 2331, 1663, 1273 ] ];
function h() {
return _i_("3da:1197"), _r_("undefined" != typeof CanvasRenderingContext2D);
}
function f() {
_i_("3da:1198");
var e = !1, t = navigator.userAgent;
if (/android/i.test(t)) {
e = !0;
var i = t.toString().match(/android ([0-9]\.[0-9])/i);
i && i[1] && (e = parseFloat(i[1]));
}
return _r_(e);
}
var p = function() {
_i_("3da:1973");
var e = function(e, t) {
_i_("3da:2512"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3da:2513");
var t = this._htOption, i = this._el, n = e.getModuleCount();
Math.floor(t.width / n), Math.floor(t.height / n);
this.clear();
function r(e, t) {
_i_("3da:2631");
var i = document.createElementNS("http://www.w3.org/2000/svg", e);
for (var n in t) t.hasOwnProperty(n) && i.setAttribute(n, t[n]);
return _r_(i);
}
var a = r("svg", {
viewBox:"0 0 " + String(n) + " " + String(n),
width:"100%",
height:"100%",
fill:t.colorLight
});
a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(a), a.appendChild(r("rect", {
fill:t.colorLight,
width:"100%",
height:"100%"
})), a.appendChild(r("rect", {
fill:t.colorDark,
width:"1",
height:"1",
id:"template"
}));
for (var o = 0; n > o; o++) for (var s = 0; n > s; s++) if (e.isDark(o, s)) {
var _ = r("use", {
x:String(s),
y:String(o)
});
_.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), a.appendChild(_);
}
_r_();
}, e.prototype.clear = function() {
for (_i_("3da:2514"); this._el.hasChildNodes(); ) this._el.removeChild(this._el.lastChild);
_r_();
}, _r_(e);
}(), g = "svg" === document.documentElement.tagName.toLowerCase(), m = g ? p :h() ? function() {
_i_("3da:2317");
function e() {
_i_("3da:2515"), this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none", _r_();
}
function t(e, t) {
_i_("3da:2516");
var i = this;
if (i._fFail = t, i._fSuccess = e, null === i._bSupportDataURI) {
var n = document.createElement("img"), r = function() {
_i_("3da:2716"), i._bSupportDataURI = !1, i._fFail && i._fFail.call(i), _r_();
}, a = function() {
_i_("3da:2717"), i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i), _r_();
};
return n.onabort = r, n.onerror = r, n.onload = a, n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", _r_();
}
i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) :i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i), _r_();
}
var i = function(e, t) {
_i_("3da:2635"), this._bIsPainted = !1, this._android = f(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null, _r_();
};
return i.prototype.draw = function(e) {
_i_("3da:2636");
var t = this._elImage, i = this._oContext, n = this._htOption, r = e.getModuleCount(), a = n.width / r, o = n.height / r, s = Math.round(a), _ = Math.round(o);
t.style.display = "none", this.clear();
for (var l = 0; r > l; l++) for (var d = 0; r > d; d++) {
var c = e.isDark(l, d), u = d * a, h = l * o;
i.strokeStyle = c ? n.colorDark :n.colorLight, i.lineWidth = 1, i.fillStyle = c ? n.colorDark :n.colorLight, i.fillRect(u, h, a, o), i.strokeRect(Math.floor(u) + .5, Math.floor(h) + .5, s, _), i.strokeRect(Math.ceil(u) - .5, Math.ceil(h) - .5, s, _);
}
this._bIsPainted = !0, _r_();
}, i.prototype.makeImage = function() {
_i_("3da:2637"), this._bIsPainted && t.call(this, e), _r_();
}, i.prototype.isPainted = function() {
return _i_("3da:2638"), _r_(this._bIsPainted);
}, i.prototype.clear = function() {
_i_("3da:2639"), this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, _r_();
}, i.prototype.round = function(e) {
if (_i_("3da:2640"), !e) return _r_(e);
return _r_(Math.floor(1e3 * e) / 1e3);
}, _r_(i);
}() :function() {
_i_("3da:2316");
var e = function(e, t) {
_i_("3da:2632"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3da:2633");
for (var t = this._htOption, i = this._el, n = e.getModuleCount(), r = Math.floor(t.width / n), a = Math.floor(t.height / n), o = [ '<table style="border:0;border-collapse:collapse;">' ], s = 0; n > s; s++) {
o.push("<tr>");
for (var _ = 0; n > _; _++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + a + "px;background-color:" + (e.isDark(s, _) ? t.colorDark :t.colorLight) + ';"></td>');
o.push("</tr>");
}
o.push("</table>"), i.innerHTML = o.join("");
var l = i.childNodes[0], d = (t.width - l.offsetWidth) / 2, c = (t.height - l.offsetHeight) / 2;
d > 0 && c > 0 && (l.style.margin = c + "px " + d + "px"), _r_();
}, e.prototype.clear = function() {
_i_("3da:2634"), this._el.innerHTML = "", _r_();
}, _r_(e);
}();
function v(e, t) {
_i_("3da:1199");
for (var i = 1, n = b(e), a = 0, o = u.length; o >= a; a++) {
var s = 0;
switch (t) {
case r.L:
s = u[a][0];
break;

case r.M:
s = u[a][1];
break;

case r.Q:
s = u[a][2];
break;

case r.H:
s = u[a][3];
}
if (s >= n) break;
i++;
}
if (i > u.length) throw new Error("Too long data");
return _r_(i);
}
function b(e) {
_i_("3da:1200");
var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
return _r_(t.length + (t.length != e ? 3 :0));
}
n = function(e, t) {
if (_i_("3da:1844"), this._htOption = {
width:256,
height:256,
typeNumber:4,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:r.H
}, "string" == typeof t && (t = {
text:t
}), t) for (var i in t) this._htOption[i] = t[i];
"string" == typeof e && (e = document.getElementById(e)), this._htOption.useSVG && (m = p), this._android = f(), this._el = e, this._oQRCode = null, this._oDrawing = new m(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text), _r_();
}, n.prototype.makeCode = function(e) {
_i_("3da:1845"), this._oQRCode = new t(v(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage(), _r_();
}, n.prototype.makeImage = function() {
_i_("3da:1846"), "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage(), _r_();
}, n.prototype.clear = function() {
_i_("3da:1847"), this._oDrawing.clear(), _r_();
}, n.CorrectLevel = r, _r_();
}(), t.QRCode = n, _r_();
}), B.define("component/qrcode/qrcode", function(e, t, i) {
"use strict";
_i_("3da:133");
var n = e("component"), r = e("read-data-options"), a = e("component/qrcode/qrcodelib").QRCode;
i.exports = n.extend({
init:function() {
_i_("3da:1651"), this.options = r(this.el, {
url:String,
width:{
type:Number,
defaultValue:160
},
height:{
type:Number,
defaultValue:160
},
skipShorten:{
type:Boolean,
defaultValue:!1
}
}), this.$el.css({
width:this.options.width + "px",
height:this.options.height + "px"
}), this.options.skipShorten ? this.createQrCode() :this.shortenUrl(), _r_();
},
shortenUrl:function() {
_i_("3da:1652");
var e = this;
$.get("/short_uri?url=" + encodeURIComponent(e.options.url) + "&aid=" + booking.env.aid, function(t) {
_i_("3da:2318"), e.options.url = location.protocol + "//www.booking.com/" + t.short_url, e.createQrCode(), _r_();
}), _r_();
},
createQrCode:function() {
_i_("3da:1653"), new a(this.$el[0], {
text:this.options.url,
width:this.options.width,
height:this.options.height,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:2
}), _r_();
}
}), _r_();
}), booking[sNSStartup].wlData = function(e) {
_i_("3da:293");
var t = e.require("jquery"), i = {}, n = {
EDIT:"wl:edit",
FETCH:"wl:fetch",
CREATE:"wl:create",
REMOVE:"wl:remove",
EDITHOTEL:"wl:edithotel",
EDITHOTELSTART:"wl:edithotelstart",
EDITHOTELS:"wl:edithotels",
EDITHOTELSSTART:"wl:edithotelsstart",
LOADINGSTART:"wl:loadingstart",
LOADINGEND:"wl:loadingend"
}, r = {
RECENTLY_VIEWED:3
};
function a(e) {
return _i_("3da:627"), _r_(t.extend(e || {}, {
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id,
stid:booking.env.b_stid,
label:booking.env.b_label
}));
}
function o(e, r) {
_i_("3da:628"), r = a(r);
var o = e + t.param(r);
if (o in i) return _r_(i[o]);
var _ = booking.promise();
return s(n.LOADINGSTART, {
params:r
}), t.ajax({
type:"POST",
url:e,
data:r,
success:function(e) {
_i_("3da:1974"), _.fulfill({
params:r,
result:e
}), _r_();
},
error:function(e) {
_i_("3da:1975"), _.reject(e), _r_();
},
complete:function() {
_i_("3da:1976"), s(n.LOADINGEND, {
params:r
}), _r_();
}
}), i[o] = _, _r_(_);
}
function s(t, i) {
return _i_("3da:629"), e.eventEmitter.trigger(t, i), _r_(i);
}
function _(e) {
_i_("3da:630");
var i = "is_new", n = "creation_timestamp", r = [ "is_collaborated", "privacy", "selected" ];
t.each(e, function(e, a) {
_i_("3da:1654"), t.each(r, function(e, t) {
_i_("3da:2319"), t in a && (a[t] = Boolean(Number(a[t]))), _r_();
}), n in a && (a[i] = 1e3 * a[n] > new Date() - 864e5), _r_();
}), _r_();
}
return _r_({
init:function() {},
EVENTS:n,
TYPE:r,
edit:function() {},
lists:[],
getListById:function(e) {
_i_("3da:1203");
for (var t = 0; t < this.lists.length; t++) {
var i = this.lists[t];
if (i.id == e) return _r_(i);
}
return _r_(null);
},
updateLists:function(e) {
if (_i_("3da:1204"), !e || !e.params) return _r_();
var t = e.params.lists, i = this.getListById(t);
i && (i.selected = 1 == e.params.new_state), _r_();
},
addList:function(e) {
_i_("3da:1205"), e && e.id && this.lists.push(t.extend({
hotels_count:1,
selected:!0
}, e)), _r_();
},
fetch:function(e) {
return _i_("3da:1206"), _r_(o("/wishlist/get", e).then(function(e) {
return _i_("3da:2427"), _(e.result.lists), this.lists = e.result.lists, _r_(s(n.FETCH, e));
}.bind(this)));
},
create:function(e) {
return _i_("3da:1207"), this.clearCache(), _r_(o("/wishlist/create", e).then(function(i) {
if (_i_("3da:2428"), _([ i.result ]), this.addList(i.result), "string" == typeof e.hotel_ids) {
var r = e.hotel_ids.split(",");
t.each(r, function(e, r) {
_i_("3da:2701"), s(n.EDITHOTEL, {
params:t.extend({
hotel_id:r,
lists:i.result.id
}, i.params),
result:i.result
}), _r_();
});
}
return _r_(s(n.CREATE, i));
}.bind(this)));
},
remove:function() {},
editHotels:function(e) {
_i_("3da:1209"), this.clearCache(), s(n.EDITHOTELSSTART, e);
var i = e.hotel_ids, r = new Array(i.length + 1).join("1").split("");
return t.isArray(i) && (e.hotel_ids = i.join(",")), _r_(o("/wishlist/save_hotels", t.extend({
new_states:r.join(",")
}, e)).then(function(e) {
return _i_("3da:2171"), t.each(i, function(i, r) {
_i_("3da:2584"), s(n.EDITHOTELS, {
params:t.extend({
hotel_id:r
}, e.params),
result:e.result
}), _r_();
}), _r_(e);
}));
},
editHotel:function(e) {
return _i_("3da:1210"), this.clearCache(), s(n.EDITHOTELSTART, e), _r_(o("/wishlist/save_hotel", e).then(function(e) {
return _i_("3da:2429"), this.updateLists(e), _r_(s(n.EDITHOTEL, e));
}.bind(this)));
},
checkWishlisted:function(e) {
return _i_("3da:1211"), this.clearCache(), _r_(o("/wishlist/wishlisted_hotels", e));
},
clearCache:function() {
_i_("3da:1212"), i = {}, _r_();
},
bind:function(t, i, n) {
_i_("3da:1213"), e.eventEmitter.bind(t, function() {
_i_("3da:2172"), i.apply(n, arguments), _r_();
}), _r_();
}
});
}(booking), B.define("lists/lists-recently-viewed/lists-recently-viewed", function(e, t, i) {
"use strict";
_i_("3da:134");
var n = e("../lists-api/lists-api"), r = e("../lists-api/lists-api").API, a = e("../lists-store/lists-store"), o = [];
i.exports = {
recentlyViewedHotels:o,
addHotelsToList:function(e) {
_i_("3da:1214");
var t = this;
a.addHotels({
list_id:e.id,
hotels:t.recentlyViewedHotels
}).then(function() {
_i_("3da:2173"), t.onAddedtoList(e), _r_();
}), _r_();
},
onAddedtoList:function(e) {
if (_i_("3da:1215"), this.renderAddRecentlyViewedToList({
success:1,
recently_viewed_list_name:e.name,
recently_viewed_list_url:e.url
}), window.listView && !B.env.b_run_tfl_move_away_from_lightbox) {
var t = window.listView;
t.setCurrentList({
id:e.id
}), t.show();
}
_r_();
},
toggleLoader:function(e) {
_i_("3da:1216"), $(".js-add-recently-viewed-to-list-loader").toggleClass("g-hidden", !e), _r_();
},
addBinds:function() {
_i_("3da:1217");
var e = this;
function t() {
_i_("3da:1848");
var t = a.getListByDefaultListId(n.type.RECENTLY_VIEWED);
B.env.auth_level < 1 && (t = a.getListById("0"));
var i = booking.promise();
if (t) i.fulfill(t); else {
var r = $.trim($(".js-uc-viewed-hotels-trigger").text());
i.fulfill(a.createList({
name:r,
default_list:n.type.RECENTLY_VIEWED
}));
}
i.then(function(t) {
_i_("3da:2430"), e.addHotelsToList(t), _r_();
}), _r_();
}
$(".uc_viewedhotels").delegate(".js-save-recently-viewed", "click", function() {
_i_("3da:2174");
var i = {};
i.limit = 5, e.toggleLoader(!0), r.getRecentlyViewed(i, function(i) {
_i_("3da:2585"), e.recentlyViewedHotels = i.hotels, a.fetch({}).then(t), _r_();
}), _r_();
}), _r_();
},
renderAddRecentlyViewedToList:function(e) {
_i_("3da:1218");
var t = $(".uc_viewedhotels .user_search_item:not(.no_listing)").length;
if (0 === t) return _r_();
var i = $.extend(e, {
wl_recently_viewed_loader:B.tools.jsStaticUrl("/static/img/wl-recently-viewed-loader.gif"),
properties_length:t
});
$(".save-recently-viewed-container").remove(), $(".popover_footer_add_to_list").prepend(B.jstmpl("lists_recently_viewed").render(i)), B.eventEmitter.trigger("recently_viewed_properties_nav_trigger"), _r_();
},
init:function() {
_i_("3da:1219"), booking.eventEmitter.bind("uc_recently_viewed_loaded", this.renderAddRecentlyViewedToList.bind(this)), this.addBinds(), _r_();
}
}, _r_();
}), B.define("lists/lists-header-button/lists-header-button", function(e, t, i) {
"use strict";
_i_("3da:135");
var n = e("../lists-store/lists-store"), r = e("../listview-touch/listview-touch");
i.exports = B.require("component").extend({
init:function() {
_i_("3da:1655");
var e = booking[sNSStartup].wlData, t = this.$el.find(".js-lists-header-button"), i = "lists-header-button--flash", a = [ e.EVENTS.EDITHOTEL ];
B.eventEmitter.bind(a.join(" "), function(e, n) {
_i_("3da:2320"), t.addClass(i), setTimeout(function() {
_i_("3da:2641"), t.removeClass(i), _r_();
}, 600), _r_();
}), n.on("liststore:loading", function(e) {
_i_("3da:2321"), $(".lists-header-button").toggleClass("lists-header-button--loading", e), r.isEnabled() && $(".js-uc-listview-lightbox").toggleClass("uc-listview-loading", e), _r_();
}), _r_();
}
}), _r_();
}), B.require([ "require" ], function(e) {
_i_("3da:136");
var t = e("lists/lists-recently-viewed/lists-recently-viewed");
t.init(), B.define("component/lists-header-button", function() {
return _i_("3da:842"), _r_(e("lists/lists-header-button/lists-header-button"));
}), _r_();
}), /* @preserve
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
function(e, t) {
_i_("3da:137");
var i = {};
i.version = "0.3.2", i.settings = {
currency:{
symbol:"$",
format:"%s%v",
decimal:".",
thousand:",",
precision:2,
grouping:3
},
number:{
precision:0,
grouping:3,
thousand:",",
decimal:"."
}
};
var n = Array.prototype.map, r = Array.isArray, a = Object.prototype.toString;
function o(e) {
return _i_("3da:420"), _r_(!!("" === e || e && e.charCodeAt && e.substr));
}
function s(e) {
return _i_("3da:421"), _r_(r ? r(e) :"[object Array]" === a.call(e));
}
function _(e) {
return _i_("3da:422"), _r_(e && "[object Object]" === a.call(e));
}
function l(e, t) {
_i_("3da:423");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
}
function d(e, t, i) {
_i_("3da:424");
var r, a, o = [];
if (!e) return _r_(o);
if (n && e.map === n) return _r_(e.map(t, i));
for (r = 0, a = e.length; a > r; r++) o[r] = t.call(i, e[r], r, e);
return _r_(o);
}
function c(e, t) {
return _i_("3da:425"), e = Math.round(Math.abs(e)), _r_(isNaN(e) ? t :e);
}
function u(e) {
_i_("3da:426");
var t = i.settings.currency.format;
if ("function" == typeof e && (e = e()), o(e) && e.match("%v")) return _r_({
pos:e,
neg:e.replace("-", "").replace("%v", "-%v"),
zero:e
});
if (!e || !e.pos || !e.pos.match("%v")) return _r_(o(t) ? i.settings.currency.format = {
pos:t,
neg:t.replace("%v", "-%v"),
zero:t
} :t);
return _r_(e);
}
var h = i.unformat = i.parse = function(e, t) {
if (_i_("3da:1220"), s(e)) return _r_(d(e, function(e) {
return _i_("3da:2431"), _r_(h(e, t));
}));
if (e = e || 0, "number" == typeof e) return _r_(e);
t = t || i.settings.number.decimal;
var n = new RegExp("[^0-9-" + t + "]", [ "g" ]), r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
return _r_(isNaN(r) ? 0 :r);
}, f = i.toFixed = function(e, t) {
_i_("3da:1003"), t = c(t, i.settings.number.precision);
var n = Math.pow(10, t);
return _r_((Math.round(i.unformat(e) * n) / n).toFixed(t));
}, p = i.formatNumber = function(e, t, n, r) {
if (_i_("3da:1004"), s(e)) return _r_(d(e, function(e) {
return _i_("3da:2322"), _r_(p(e, t, n, r));
}));
e = h(e);
var a = l(_(t) ? t :{
precision:t,
thousand:n,
decimal:r
}, i.settings.number), o = c(a.precision), u = 0 > e ? "-" :"", g = parseInt(f(Math.abs(e || 0), o), 10) + "", m = g.length > 3 ? g.length % 3 :0;
return _r_(u + (m ? g.substr(0, m) + a.thousand :"") + g.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (o ? a.decimal + f(Math.abs(e), o).split(".")[1] :""));
}, g = i.formatMoney = function(e, t, n, r, a, o) {
if (_i_("3da:1005"), s(e)) return _r_(d(e, function(e) {
return _i_("3da:2323"), _r_(g(e, t, n, r, a, o));
}));
e = h(e);
var f = l(_(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:o
}, i.settings.currency), m = u(f.format), v = e > 0 ? m.pos :0 > e ? m.neg :m.zero;
return _r_(v.replace("%s", f.symbol).replace("%v", p(Math.abs(e), c(f.precision), f.thousand, f.decimal)));
};
i.formatColumn = function(e, t, n, r, a, f) {
if (_i_("3da:843"), !e) return _r_([]);
var g = l(_(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:f
}, i.settings.currency), m = u(g.format), v = m.pos.indexOf("%s") < m.pos.indexOf("%v") ? !0 :!1, b = 0, w = d(e, function(e, t) {
if (_i_("3da:1978"), s(e)) return _r_(i.formatColumn(e, g));
e = h(e);
var n = e > 0 ? m.pos :0 > e ? m.neg :m.zero, r = n.replace("%s", g.symbol).replace("%v", p(Math.abs(e), c(g.precision), g.thousand, g.decimal));
return r.length > b && (b = r.length), _r_(r);
});
return _r_(d(w, function(e, t) {
if (_i_("3da:1849"), o(e) && e.length < b) return _r_(v ? e.replace(g.symbol, g.symbol + new Array(b - e.length + 1).join(" ")) :new Array(b - e.length + 1).join(" ") + e);
return _r_(e);
}));
}, i.noConflict = function(n) {
return _i_("3da:1006"), _r_(function() {
return _i_("3da:1850"), e.accounting = n, i.noConflict = t, _r_(i);
});
}(e.accounting), e.accounting = i, _r_();
}(window), function() {
if (_i_("3da:138"), !window.accounting || !booking.env.accounting_config) return _r_();
var e = window.accounting, t = booking.env.accounting_config, i = {
init:function(e) {
_i_("3da:1221"), this._current = e, _r_();
},
formatMoney:function(i, a, o) {
if (_i_("3da:1222"), "number" != typeof i && isNaN(parseFloat(i)) && ("function" == typeof B.debug && B.debug("jstmpl").warn("formatMoney expected a number but got a string.", arguments), "function" == typeof B.squeak && B.squeak("MMZXZAQUfUfWcZZYTRXO")), "undefined" != typeof a ? "object" == typeof a && (o = a, a = this._current) :a = this._current, "undefined" == typeof a) throw "The module hasn't been initiated, so you have to provide currencyCode";
i % 1 === 0 && (o = o || {}, o.precision = "undefined" != typeof o.precision ? o.precision :"integer");
var s = o && "undefined" != typeof o.is_arabic_number ? o.is_arabic_number :"undefined" != typeof t.is_arabic_number ? t.is_arabic_number :!1, _ = n(a, o), l = e.formatMoney(i, _);
return s && (l = r(l)), _r_(l);
},
formatDistanceNumber:function(t, i) {
_i_("3da:1223");
var r = this._current, a = n(r, i), o = a.symbol, s = e.formatMoney(t, a), _ = new RegExp(o, "g");
return s = s.replace(_, ""), s = s.replace(/[^0-9\.\,]/g, ""), _r_(s);
},
formatDistance:function(e, t) {
_i_("3da:1224");
var i, n = booking.env, r = {
number:e,
unit:"m",
isImperial:n.distance_config && "metric" != n.distance_config
}, a = " ";
return t = t || {}, t.unit = t.unit || r.unit, t.hasOwnProperty("precision") || (t.precision = 1), this.changeDistanceToMetricUnit(r, t), r.isImperial && this.convertDistanceToImperial(r, t), i = this.formatDistanceNumber(r.number, t), _r_(i + a + r.unit);
},
changeDistanceToMetricUnit:function(e, t) {
_i_("3da:1225");
var i = e.number;
if (t.unit) switch (t.unit) {
case "m":
e.unit = "m", e.number = e.number;
break;

case "km":
e.number = .001 * i, !e.isImperial && t.autoUnit && Math.floor(e.number) < 1 ? (e.number = i, t.precision = 0, e.unit = "m") :e.unit = "km";
}
_r_();
},
convertDistanceToImperial:function(e, t) {
_i_("3da:1226");
var i = e.number;
switch (t.unit) {
case "m":
e.unit = "yd", e.number = 1.0936133 * i;
break;

case "km":
e.number = .621371192 * i, e.unit = "mi";
}
_r_();
},
getOptions:function() {
return _i_("3da:1227"), _r_(n(this._current));
}
};
i.init(booking.env.b_selected_currency || booking.env.b_hotel_currencycode), booking.utils = booking.utils || {}, booking.utils.accounting = i;
function n(e, i) {
_i_("3da:427"), i = $.extend(i, {
symbolFormat:"%s",
valueFormat:"%s"
}), i.valueFormat = i.valueFormat.replace("%s", "%v");
var n, r = i.symbolFormat, a = i.valueFormat, o = "undefined" != typeof t.html_symbol[e] ? t.html_symbol[e] :e, s = "undefined" != typeof t.decimal_separator[e] ? t.decimal_separator[e] :"undefined" != typeof t.decimal_separator["default"] ? t.decimal_separator["default"] :".", _ = "undefined" != typeof t.group_separator[e] ? t.group_separator[e] :"undefined" != typeof t.group_separator["default"] ? t.group_separator["default"] :",", l = function(e, t) {
return _i_("3da:1656"), _r_("before" === t ? r + e + a :a + e + r);
}("undefined" != typeof t.currency_separator[e] ? t.currency_separator[e] :"undefined" != typeof t.currency_separator["default"] && e ? t.currency_separator["default"] :" ", "undefined" != typeof t.symbol_position[e] ? t.symbol_position[e] :"undefined" != typeof t.symbol_position["default"] ? t.symbol_position["default"] :"before");
return "undefined" != typeof t.num_decimals && (n = t.num_decimals["default"]), "undefined" != typeof t.num_decimals && (n = "undefined" != typeof t.num_decimals[e] ? t.num_decimals[e] :n), "integer" === i.precision && (n = 0), isNaN(parseInt(i.precision, 10)) || (n = i.precision), _r_({
symbol:o,
decimal:s,
thousand:_,
format:l,
precision:n
});
}
function r(e) {
_i_("3da:428");
var t = [ "&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;" ], i = "";
return i = e.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g, function(e, i, n, r) {
return _i_("3da:1657"), _r_(t[parseInt(e, 10)]);
}), _r_(i);
}
_r_();
}(), $(function() {
_i_("3da:139"), booking.jstmpl && booking.jstmpl.setup(function(e) {
if (_i_("3da:1658"), !e || !e.formatMoney) return _r_({});
function t(t, i) {
if (_i_("3da:1979"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, _r_(e.formatMoney(t, "", i));
}
function i(t, i) {
if (_i_("3da:1980"), isNaN(t)) return _r_(t);
if (i = i || {}, i && !i.precision) {
var n = ("" + t).split("."), r = (n.length > 1 ? n[1] :"").length;
i.precision = r;
}
return _r_(e.formatMoney(t, "", i));
}
function n(e) {
_i_("3da:1981");
var t, i = Math.abs;
if (i(e) < 50) return _r_(e);
if (t = i(e) < 100 ? 5 :i(e) < 500 ? 10 :i(e) < 1e3 ? 50 :i(e) < 5e3 ? 100 :i(e) < 1e4 ? 500 :i(e) < 5e4 ? 1e3 :i(e) < 1e5 ? 5e3 :1e4, e % t === 0) return _r_(e);
var n = 1;
return 0 > e && (n = 0), e = Math.floor(e / t), e *= t, n && (e += t), _r_(e);
}
function r(t, i) {
if (_i_("3da:1982"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, t = n(t), _r_(e.formatMoney(t, "", i));
}
function a(t, i) {
return _i_("3da:1983"), _r_(e.formatMoney(t, i));
}
function o(e, t) {
_i_("3da:1984");
var n = i(e, t);
return /,|\./.test(n) || 10 == n || (n += booking.env.accounting_config.decimal_separator["default"] + "0"), _r_(n);
}
return _r_({
fn:{
format_number:t,
format_number_decimal:i,
format_number_rounded:r,
format_price:a,
format_review_score:o,
format_review_score_plain:o
}
});
}(booking && booking.utils && booking.utils.accounting)), _r_();
}), "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = function(e) {
_i_("3da:429");
var t = e.__proto__;
return _r_(t || null === t ? t :"[object Function]" === Function.prototype.call.call(Object.prototype.toString, e.constructor) ? e.constructor.prototype :e instanceof Object ? Object.prototype :null);
}), B.define("redux", function(e, t, i) {
_i_("3da:140"), function(e, n) {
_i_("3da:845"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("3da:844"), _r_(function(e) {
_i_("3da:1851");
var t = {};
function i(n) {
if (_i_("3da:2175"), t[n]) return _r_(t[n].exports);
var r = t[n] = {
exports:{},
id:n,
loaded:!1
};
return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, _r_(r.exports);
}
return i.m = e, i.c = t, i.p = "", _r_(i(0));
}([ function(e, t, i) {
"use strict";
_i_("3da:1985"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = f(n), a = i(7), o = f(a), s = i(6), _ = f(s), l = i(5), d = f(l), c = i(1), u = f(c), h = i(3);
f(h);
function f(e) {
return _i_("3da:2324"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = o["default"], t.bindActionCreators = _["default"], t.applyMiddleware = d["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("3da:1986"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("3da:2325");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("3da:2664"), _r_(e);
});
var n = function() {
_i_("3da:2702");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("3da:2744"), _r_(i.reduceRight(function(e, t) {
return _i_("3da:2748"), _r_(t(e));
}, e.apply(void 0, arguments)));
}
});
}();
if ("object" == typeof n) return _r_(n.v);
_r_();
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:1987"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = l;
var n = i(4), r = s(n), a = i(11), o = s(a);
function s(e) {
return _i_("3da:2326"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var _ = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function l(e, t, i) {
_i_("3da:2327");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(l)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, s = t, d = [], c = d, u = !1;
function h() {
_i_("3da:2517"), c === d && (c = d.slice()), _r_();
}
function f() {
return _i_("3da:2518"), _r_(s);
}
function p(e) {
if (_i_("3da:2519"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return h(), c.push(e), _r_(function() {
if (_i_("3da:2665"), !t) return _r_();
t = !1, h();
var i = c.indexOf(e);
c.splice(i, 1), _r_();
});
}
function g(e) {
if (_i_("3da:2520"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, s = a(s, e);
} finally {
u = !1;
}
for (var t = d = c, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function m(e) {
if (_i_("3da:2521"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, g({
type:_.INIT
}), _r_();
}
function v() {
_i_("3da:2522");
var e, t = p;
return _r_((e = {
subscribe:function(e) {
if (_i_("3da:2727"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("3da:2740"), e.next && e.next(f()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[o["default"]] = function() {
return _i_("3da:2703"), _r_(this);
}, e));
}
return g({
type:_.INIT
}), _r_((n = {
dispatch:g,
subscribe:p,
getState:f,
replaceReducer:m
}, n[o["default"]] = v, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:1988"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("3da:2328"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("3da:1989");
var n = i(8), r = i(9), a = i(10), o = "[object Object]", s = Object.prototype, _ = Function.prototype.toString, l = s.hasOwnProperty, d = _.call(Object), c = s.toString;
function u(e) {
if (_i_("3da:2329"), !a(e) || c.call(e) != o || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = l.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && _.call(i) == d);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("3da:1990"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("3da:2586");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = s;
var r = i(1), a = o(r);
function o(e) {
return _i_("3da:2330"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function s() {
_i_("3da:2331");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("3da:2587"), _r_(function(i, r, o) {
_i_("3da:2689");
var s = e(i, r, o), _ = s.dispatch, l = [], d = {
getState:s.getState,
dispatch:function(e) {
return _i_("3da:2745"), _r_(_(e));
}
};
return l = t.map(function(e) {
return _i_("3da:2741"), _r_(e(d));
}), _ = a["default"].apply(void 0, l)(s.dispatch), _r_(n({}, s, {
dispatch:_
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:1991"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("3da:2332"), _r_(function() {
return _i_("3da:2588"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("3da:2333"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var o = n[a], s = e[o];
"function" == typeof s && (r[o] = i(s, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:1992"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = _(r), o = i(3), s = _(o);
function _(e) {
return _i_("3da:2334"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function l(e, t) {
_i_("3da:2335");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function d(e, t, i) {
_i_("3da:2336");
var r = Object.keys(t), o = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + o + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var s = Object.keys(e).filter(function(e) {
return _i_("3da:2666"), _r_(!t.hasOwnProperty(e));
});
if (s.length > 0) return _r_("Unexpected " + (s.length > 1 ? "keys" :"key") + " " + ('"' + s.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function c(e) {
_i_("3da:2337"), Object.keys(e).forEach(function(t) {
_i_("3da:2642");
var i = e[t], r = i(void 0, {
type:n.ActionTypes.INIT
});
if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
var a = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
if ("undefined" == typeof i(void 0, {
type:a
})) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
_r_();
}), _r_();
}
function u(e) {
_i_("3da:2338");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, o = Object.keys(i);
try {
c(i);
} catch (_) {
a = _;
}
return _r_(function() {
_i_("3da:2589");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = d(e, i, t);
n && (0, s["default"])(n);
for (var r = !1, _ = {}, c = 0; c < o.length; c++) {
var u = o[c], h = i[u], f = e[u], p = h(f, t);
if ("undefined" == typeof p) {
var g = l(u, t);
throw new Error(g);
}
_[u] = p, r = r || p !== f;
}
return _r_(r ? _ :e);
});
}
_r_();
}, function(e, t) {
_i_("3da:1993");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("3da:2339"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("3da:1994");
function i(e) {
_i_("3da:2340");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("3da:1995");
function i(e) {
return _i_("3da:2341"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("3da:1996"), function(t) {
"use strict";
_i_("3da:2591"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("3da:2590"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("3da:1997"), e.exports = function(e) {
_i_("3da:2523");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("redux-thunk", function(e, t, i) {
_i_("3da:141");
function n(e) {
return _i_("3da:430"), _r_(function(t) {
_i_("3da:1007");
var i = t.dispatch, n = t.getState;
return _r_(function(t) {
return _i_("3da:1852"), _r_(function(r) {
if (_i_("3da:2342"), "function" == typeof r) return _r_(r(i, n, e));
return _r_(t(r));
});
});
});
}
var r = n();
r.withExtraArgument = n, i.exports = r, _r_();
}), function(e, t) {
if (_i_("3da:142"), !t) return _r_();
t.easing.jswing = t.easing.swing, t.extend(t.easing, {
def:"easeOutQuad",
swing:function(e, i, n, r, a) {
return _i_("3da:1228"), _r_(t.easing[t.easing.def](e, i, n, r, a));
},
easeInQuad:function(e, t, i, n, r) {
return _i_("3da:1229"), _r_(n * (t /= r) * t + i);
},
easeOutQuad:function(e, t, i, n, r) {
return _i_("3da:1230"), _r_(-n * (t /= r) * (t - 2) + i);
},
easeInOutQuad:function(e, t, i, n, r) {
if (_i_("3da:1231"), (t /= r / 2) < 1) return _r_(n / 2 * t * t + i);
return _r_(-n / 2 * (--t * (t - 2) - 1) + i);
},
easeInCubic:function(e, t, i, n, r) {
return _i_("3da:1232"), _r_(n * (t /= r) * t * t + i);
},
easeOutCubic:function(e, t, i, n, r) {
return _i_("3da:1233"), _r_(n * ((t = t / r - 1) * t * t + 1) + i);
},
easeInOutCubic:function(e, t, i, n, r) {
if (_i_("3da:1234"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t + 2) + i);
},
easeInQuart:function(e, t, i, n, r) {
return _i_("3da:1235"), _r_(n * (t /= r) * t * t * t + i);
},
easeOutQuart:function(e, t, i, n, r) {
return _i_("3da:1236"), _r_(-n * ((t = t / r - 1) * t * t * t - 1) + i);
},
easeInOutQuart:function(e, t, i, n, r) {
if (_i_("3da:1237"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t + i);
return _r_(-n / 2 * ((t -= 2) * t * t * t - 2) + i);
},
easeInQuint:function(e, t, i, n, r) {
return _i_("3da:1238"), _r_(n * (t /= r) * t * t * t * t + i);
},
easeOutQuint:function(e, t, i, n, r) {
return _i_("3da:1239"), _r_(n * ((t = t / r - 1) * t * t * t * t + 1) + i);
},
easeInOutQuint:function(e, t, i, n, r) {
if (_i_("3da:1240"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t * t * t + 2) + i);
},
easeInSine:function(e, t, i, n, r) {
return _i_("3da:1241"), _r_(-n * Math.cos(t / r * (Math.PI / 2)) + n + i);
},
easeOutSine:function(e, t, i, n, r) {
return _i_("3da:1242"), _r_(n * Math.sin(t / r * (Math.PI / 2)) + i);
},
easeInOutSine:function(e, t, i, n, r) {
return _i_("3da:1243"), _r_(-n / 2 * (Math.cos(Math.PI * t / r) - 1) + i);
},
easeInExpo:function(e, t, i, n, r) {
return _i_("3da:1244"), _r_(0 == t ? i :n * Math.pow(2, 10 * (t / r - 1)) + i);
},
easeOutExpo:function(e, t, i, n, r) {
return _i_("3da:1245"), _r_(t == r ? i + n :n * (-Math.pow(2, -10 * t / r) + 1) + i);
},
easeInOutExpo:function(e, t, i, n, r) {
if (_i_("3da:1246"), 0 == t) return _r_(i);
if (t == r) return _r_(i + n);
if ((t /= r / 2) < 1) return _r_(n / 2 * Math.pow(2, 10 * (t - 1)) + i);
return _r_(n / 2 * (-Math.pow(2, -10 * --t) + 2) + i);
},
easeInCirc:function(e, t, i, n, r) {
return _i_("3da:1247"), _r_(-n * (Math.sqrt(1 - (t /= r) * t) - 1) + i);
},
easeOutCirc:function(e, t, i, n, r) {
return _i_("3da:1248"), _r_(n * Math.sqrt(1 - (t = t / r - 1) * t) + i);
},
easeInOutCirc:function(e, t, i, n, r) {
if (_i_("3da:1249"), (t /= r / 2) < 1) return _r_(-n / 2 * (Math.sqrt(1 - t * t) - 1) + i);
return _r_(n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i);
},
easeInElastic:function(e, t, i, n, r) {
_i_("3da:1250");
var a = 1.70158, o = 0, s = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), s < Math.abs(n)) {
s = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / s);
return _r_(-(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
},
easeOutElastic:function(e, t, i, n, r) {
_i_("3da:1251");
var a = 1.70158, o = 0, s = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), s < Math.abs(n)) {
s = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / s);
return _r_(s * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + i);
},
easeInOutElastic:function(e, t, i, n, r) {
_i_("3da:1252");
var a = 1.70158, o = 0, s = n;
if (0 == t) return _r_(i);
if (2 == (t /= r / 2)) return _r_(i + n);
if (o || (o = r * (.3 * 1.5)), s < Math.abs(n)) {
s = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / s);
if (1 > t) return _r_(-.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
return _r_(s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i);
},
easeInBack:function(e, t, i, n, r, a) {
return _i_("3da:1253"), void 0 == a && (a = 1.70158), _r_(n * (t /= r) * t * ((a + 1) * t - a) + i);
},
easeOutBack:function(e, t, i, n, r, a) {
return _i_("3da:1254"), void 0 == a && (a = 1.70158), _r_(n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i);
},
easeInOutBack:function(e, t, i, n, r, a) {
if (_i_("3da:1255"), void 0 == a && (a = 1.70158), (t /= r / 2) < 1) return _r_(n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i);
},
easeInBounce:function(e, i, n, r, a) {
return _i_("3da:1256"), _r_(r - t.easing.easeOutBounce(e, a - i, 0, r, a) + n);
},
easeOutBounce:function(e, t, i, n, r) {
return _i_("3da:1257"), _r_((t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i :2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i :2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i :n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i);
},
easeInOutBounce:function(e, i, n, r, a) {
if (_i_("3da:1258"), a / 2 > i) return _r_(.5 * t.easing.easeInBounce(e, 2 * i, 0, r, a) + n);
return _r_(.5 * t.easing.easeOutBounce(e, 2 * i - a, 0, r, a) + .5 * r + n);
}
}), _r_();
}(window.booking, window.jQuery), /* @preserve
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e, t, i) {
_i_("3da:143");
var n, r = "hashchange", a = document, o = e.event.special, s = a.documentMode, _ = "on" + r in t && (s === i || s > 7);
function l(e) {
return _i_("3da:431"), e = e || location.href, _r_("#" + e.replace(/^[^#]*#?(.*)$/, "$1"));
}
e.fn[r] = function(e) {
return _i_("3da:846"), _r_(e ? this.bind(r, e) :this.trigger(r));
}, e.fn[r].delay = 50, o[r] = e.extend(o[r], {
setup:function() {
if (_i_("3da:1659"), _) return _r_(!1);
e(n.start), _r_();
},
teardown:function() {
if (_i_("3da:1660"), _) return _r_(!1);
e(n.stop), _r_();
}
}), n = function() {
_i_("3da:1008");
var n, o = {}, s = l(), d = function(e) {
return _i_("3da:1998"), _r_(e);
}, c = d, u = d;
o.start = function() {
_i_("3da:1999"), n || h(), _r_();
}, o.stop = function() {
_i_("3da:2000"), n && clearTimeout(n), n = i, _r_();
};
function h() {
_i_("3da:1661");
var i = l(), a = u(s);
i !== s ? (c(s = i, a), e(t).trigger(r)) :a !== s && (location.href = location.href.replace(/#.*/, "") + a), n = setTimeout(h, e.fn[r].delay), _r_();
}
return "msie" === B.env.b_browser && !_ && function() {
_i_("3da:2176");
var t, i;
o.start = function() {
_i_("3da:2592"), t || (i = e.fn[r].src, i = i && i + l(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
_i_("3da:2749"), i || c(l()), h(), _r_();
}).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function() {
_i_("3da:2728");
try {
"title" === event.propertyName && (t.document.title = a.title);
} catch (e) {}
_r_();
}), _r_();
}, o.stop = d, u = function() {
return _i_("3da:2593"), _r_(l(t.location.href));
}, c = function(i, n) {
_i_("3da:2594");
var o = t.document, s = e.fn[r].domain;
i !== n && (o.title = a.title, o.open(), s && o.write('<script>document.domain="' + s + '"</script>'), o.close(), t.location.hash = i), _r_();
}, _r_();
}(), _r_(o);
}(), _r_();
}(jQuery, window), function(e) {
_i_("3da:144"), e.fn.hint = function(t) {
return _i_("3da:847"), t || (t = "blur"), _r_(this.each(function() {
_i_("3da:1853");
var i = e(this), n = i.attr("title"), r = e(this.form), a = e(window);
function o() {
_i_("3da:2177"), i.val() === n && i.hasClass(t) && i.val("").removeClass(t), _r_();
}
n && (i.blur(function() {
_i_("3da:2704"), "" === this.value && i.val(n).addClass(t), _r_();
}).focus(o).blur(), r.submit(o), a.unload(o)), _r_();
}));
}, _r_();
}(jQuery), booking.env.no_search_placeholder_ie || $("input#keyword.faq_search_input").hint(), function() {
_i_("3da:145");
var e = B.require("jquery"), t = B.env.b_is_tdot_traffic ? "click touchstart" :"click", i = 0;
e.extend({
noticeAdd:function(n) {
_i_("3da:1259");
var r = !1;
if ("www" === B.env.b_site_type && "hotel" === B.env.b_action && -1 !== n.type.indexOf("abandoned-cart-growl-notification") && B.et.track("ABcLNYBcKRQYaAEbFPYDWHC")) return _r_(!1);
if (booking.events.on("growl:growlClosedManually", function(t) {
if (_i_("3da:2178"), t && t.type.indexOf("abandoned-cart-growl-notification")) {
if (t.growlElem.attr("data-cart-id") && B.et.track("HBVXGZGZVeDJdUDZHe")) return _r_();
e.cookie("fscag01", null, {
path:"/",
domain:booking.env.b_domain_end
});
}
_r_();
}), "abandoned_cart_growl_notification" == n.textLabel) {
if (e.cookie("fscag01")) ; else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
} else if ("abandoned_rooms_table" == n.textLabel) {
if (e.isNoticesDisabled() && !r) return _r_(!1);
} else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
i++;
var n, a, o, s, _, l, d = {
inEffect:{
opacity:"show"
},
inEffectDuration:600,
stayTime:3e3,
text:"",
stay:!1,
type:"notice",
destination:"",
platform:"mac",
addClassName:"",
injectHTML:!1,
zindex:!1,
isAutomatic:!1,
textLabel:null,
wrapperClass:"",
fullyClickable:!1,
closeOnCross:!1
}, c = !1;
n = e.extend({}, d, n);
var u = " ", h = " ", f = "notice-wrap " + h + n.platform;
B.env.b_is_tablet && "book" === B.env.b_action && (f += " growl_font_stack"), B.env.rtl && (f += " growl_rtl"), e(".notice-wrap").length ? a = e(".notice-wrap") :(a = e("<div></div>").addClass(f).addClass(n.wrapperClass).appendTo("body"), a[0].id = "growl_squash"), n.zindex === !1 || isNaN(n.zindex) || a.css("z-index", n.zindex);
var p, g;
B.env.rtl && p && g && (c = "__placement_" + g), c && a.addClass(c), o = e("<div></div>").addClass("notice-item-wrapper"), l = "" == n.destination || n.fullyClickable ? "<p>" + n.text + "</p>" :'<p><a  href="' + n.destination + '">' + n.text + "</a></p>", s = e("" !== n.destination && n.fullyClickable ? '<a  class="notice-item-clickable" href="' + n.destination + '"></a>' :"<div></div>"), n.cartId && B.et.track("HBVXGZGZVeDJdUDZHe") && s.attr("data-cart-id", n.cartId), s.hide().addClass("notice-item " + u + n.type + " " + n.addClassName).appendTo(a).html(l).animate(n.inEffect, n.inEffectDuration).wrap(o);
var m = s;
if (_ = e("<div></div>").addClass("notice-item-close-x").prependTo(s), n.closeOnCross && (m = _), m.bind(t, function(t) {
if (_i_("3da:2179"), "hotel" === booking.env.b_action) {
var i = JSON.parse(e.cookie("bs")) || {};
i.gc = 1, "undefined" != typeof JSON && e.cookie("bs", JSON.stringify(i), {
path:"/",
domain:booking.env.b_domain_end
});
}
if (booking.google.trackEvent(booking.google.clickTracker, "growl_removed", t && t.target && e(t.target).closest(".notice-item-close-x").length ? "x" :"message"), e.noticeRemove(s, n.addClassName, !1, !0), "" !== n.destination && n.fullyClickable && e(t.target).is(".notice-item-close-x")) return _r_(!1);
return _r_(!!n.destination);
}), n.injectHTML && s.prepend(n.injectHTML), "language" == n.type && (e(".notice-item p").css("cursor", "pointer"), e(".notice-item p").bind(t, function() {
return _i_("3da:2432"), e("#langselectformlist").val(booking.env.browser_lang), e("#languageselect")[0].submit(), e.noticeRemove(s), _r_(!1);
})), !n.stay) {
var v = n.stayTime;
setTimeout(function() {
_i_("3da:2433"), e.noticeRemove(s, "", 1), _r_();
}, v);
}
return booking.eventEmitter.triggerHandler("growl:show", n), booking.events.trigger("growl:show", n), _r_(s);
},
noticeRemove:function(t, i, n, r, a) {
_i_("3da:1260");
var o = t.attr("data-cart-id") && B.et.track("HBVXGZGZVeDJdUDZHe");
r && !o && e.setCookieOnClose(), r && B.env.b_growls_close_fast || "tdot" === B.env.b_site_type && "book" === B.env.b_action && 2 === B.env.b_stage || a ? t.parent().remove() :t.animate({
opacity:"0"
}, 600, function() {
_i_("3da:2434"), t.parent().animate({
height:"0px"
}, 300, function() {
_i_("3da:2667"), t.parent().remove(), _r_();
}), _r_();
}), i && "" != i && e("." + i).removeClass(i), booking.eventEmitter.triggerHandler("growl:close", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), r && booking.events.emit("growl:growlClosedManually", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), _r_();
},
canShowNotice:function() {
_i_("3da:1261");
var t = !0;
if (B.env.fe_disable_growls) return _r_(!1);
var i = parseInt(e.cookie("gcmdt")) || !1;
if (i !== !1) {
var n = (new Date().getTime() - i) / 1e3 / 60;
20 >= n && (t = !1);
}
return _r_(t);
},
isNoticesDisabled:function() {
return _i_("3da:1262"), _r_(!!(B && B.env && B.env.disableNotices));
},
setCookieOnClose:function() {
return _i_("3da:1263"), booking.env.b_paid_traffic || e.cookie("gcmdt", new Date().getTime(), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}
}), _r_();
}(), B.define("growl", function(e, t, i) {
"use strict";
_i_("3da:146");
function n(e) {
if (_i_("3da:432"), e && booking.env.growl_triggers && booking.env.growl_triggers[e]) return _r_($.noticeAdd(booking.env.growl_triggers[e]));
_r_();
}
i.exports = {
show:$.noticeAdd,
trigger:n
}, _r_();
}), function(e) {
_i_("3da:147"), e.fn.placeholder = function(t) {
_i_("3da:848");
var i = e.extend({
attr:"placeholder",
emptyClass:"empty"
}, t);
if ("placeholder" === i.attr && "placeholder" in document.createElement("input")) return _r_(this);
return _r_(this.each(function() {
_i_("3da:1854");
var t, n = e(this), r = n.attr(i.attr), a = "password" === n.attr("type"), o = "placeholder-polyfill";
if (!r || n.hasClass(o)) return _r_();
n.addClass(o), a && (t = e('<input type="text" />').attr({
value:r,
className:n[0].className
}).insertAfter(n.hide())), n.closest("form").submit(function() {
_i_("3da:2435"), n.trigger("focus"), _r_();
}), "" === n.val() && n.val(r).addClass(i.emptyClass), n.focus(function() {
_i_("3da:2436"), n.val() == r && n.val("").removeClass(i.emptyClass), _r_();
}), n.blur(function() {
if (_i_("3da:2437"), "" !== e.trim(this.value)) return _r_();
a ? n.after(t).hide() :n.val(r).addClass(i.emptyClass), _r_();
}), a && t.addClass(i.emptyClass).focus(function() {
_i_("3da:2595"), t.detach(), n.show().focus(), _r_();
}), _r_();
}));
}, _r_();
}(jQuery), function(e) {
"use strict";
_i_("3da:148"), e([ "jquery" ], function(e) {
_i_("3da:849");
var t = e.scrollTo = function(t, i, n) {
return _i_("3da:2001"), _r_(e(window).scrollTo(t, i, n));
};
t.defaults = {
axis:"xy",
duration:0,
limit:!0
}, t.window = function(t) {
return _i_("3da:1855"), _r_(e(window)._scrollable());
}, e.fn._scrollable = function() {
return _i_("3da:1856"), _r_(this.map(function() {
_i_("3da:2438");
var t = this, i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), [ "iframe", "#document", "html", "body" ]);
if (!i) return _r_(t);
var n = (t.contentWindow || t).document || t.ownerDocument || t;
return _r_(/webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body :n.documentElement);
}));
}, e.fn.scrollTo = function(n, r, a) {
return _i_("3da:1857"), "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = {
onAfter:a
}), "max" == n && (n = 9e9), a = e.extend({}, t.defaults, a), r = r || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = i(a.offset), a.over = i(a.over), _r_(this._scrollable().each(function() {
if (_i_("3da:2596"), null == n) return _r_();
var o, s = this, _ = e(s), l = n, d = {}, c = _.is("html,body");
switch (typeof l) {
case "number":
case "string":
if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)) {
l = i(l);
break;
}
if (l = c ? e(l) :e(l, this), !l.length) return _r_();

case "object":
(l.is || l.style) && (o = (l = e(l)).offset());
}
var u = e.isFunction(a.offset) && a.offset(s, l) || a.offset;
e.each(a.axis.split(""), function(e, i) {
_i_("3da:2705");
var n = "x" == i ? "Left" :"Top", r = n.toLowerCase(), f = "scroll" + n, p = s[f], g = t.max(s, i);
if (o) d[f] = o[r] + (c ? 0 :p - _.offset()[r]), a.margin && (d[f] -= parseInt(l.css("margin" + n)) || 0, d[f] -= parseInt(l.css("border" + n + "Width")) || 0), d[f] += u[r] || 0, a.over[r] && (d[f] += l["x" == i ? "width" :"height"]() * a.over[r]); else {
var m = l[r];
d[f] = m.slice && "%" == m.slice(-1) ? parseFloat(m) / 100 * g :m;
}
a.limit && /^\d+$/.test(d[f]) && (d[f] = d[f] <= 0 ? 0 :Math.min(d[f], g)), !e && a.queue && (p != d[f] && h(a.onAfterFirst), delete d[f]), _r_();
}), h(a.onAfter);
function h(e) {
_i_("3da:2668"), _.animate(d, r, a.easing, e && function() {
_i_("3da:2736"), e.call(this, l, a), _r_();
}), _r_();
}
_r_();
}).end());
}, t.max = function(t, i) {
_i_("3da:1858");
var n = "x" == i ? "Width" :"Height", r = "scroll" + n;
if (!e(t).is("html,body")) return _r_(t[r] - e(t)[n.toLowerCase()]());
var a = "client" + n, o = t.ownerDocument.documentElement, s = t.ownerDocument.body;
return _r_(Math.max(o[r], s[r]) - Math.min(o[a], s[a]));
};
function i(t) {
return _i_("3da:1264"), _r_(e.isFunction(t) || e.isPlainObject(t) ? t :{
top:t,
left:t
});
}
return _r_(t);
}), _r_();
}("function" == typeof define && define.amd ? define :function(e, t) {
_i_("3da:294"), "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) :t(jQuery), _r_();
}), booking[sNSStartup].aff_new_header_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("3da:433");
var e = this, t = $(".aff_languages_popover"), i = $(".aff_currency_popover");
$(".b_msie_6").length && (this.is_ie = 6), $(".b_msie_7").length && (this.is_ie = 7), $(".aff_select_box").mouseenter(function() {
_i_("3da:1265"), $(this).addClass("sel_hover"), _r_();
}), $(".aff_select_box").mouseleave(function() {
_i_("3da:1266"), $(this).removeClass("sel_hover"), _r_();
}), $("body").click(function(t) {
if (_i_("3da:1267"), 2 == e.opening_state) {
var i = $(t.target);
$(i).length && e.closeSelect();
}
_r_();
}), t.css({
width:e.getPopoverWidth($(".aff_language_flags")) + "px"
}), i.css({
width:e.getPopoverWidth($("#currency_dropdown_all .currency_list")) + "px"
}), $(".aff_select_box").click(function(t) {
_i_("3da:1268"), 0 == e.opening_state ? e.openSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.cur_open != $(this).attr("data-target") ? e.closeSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.closeSelect(), _r_();
}), _r_();
},
openSelect:function(e, t) {
_i_("3da:434"), oThat = this, this.cur_open = e;
var i = $("." + t), n = 0, r = 0, a = 0, o = 0, s = 0, _ = 0, l = 0, d = 0, c = 0, u = 0, h = 0, f = 0, p = 0, g = 0, m = 0, v = 0, b = 0, w = 0, y = i.parent(), k = $("." + e), S = oThat.getScreenSize()[0], C = (oThat.getScreenSize()[1], parseInt(y.width() / 2, 10)), x = $("#partner_branding3"), B = $(".hybrid-header #aff_personal_form"), E = $($(".uc_top_arrow", k)), T = parseInt(k.outerWidth(!0) / 2, 10), N = T - C, A = T - 8, D = oThat.getLeftPos(B)[0], M = oThat.getLeftPos(B)[1], I = oThat.getRightPos(B)[0], O = oThat.getRightPos(B)[1], o = parseInt(B.css("marginLeft"), 10), s = parseInt(B.css("marginRight"), 10), L = parseInt(y.offset().left, 10) - parseInt(x.offset().left, 10), j = parseInt(x.width(), 10), P = j - (T + C + L), H = L + C - T, R = $(".language_select_button"), F = $(".currency_select_button"), q = $(".affiliate_mybooking"), G = parseInt(F.outerWidth(), 10), V = parseInt(G / 2, 10), W = parseInt(R.outerWidth(), 10), U = parseInt(W / 2, 10), Y = parseInt(q.outerWidth(), 10), z = parseInt(F.css("marginLeft"), 10), J = parseInt(F.css("marginRight"), 10), Q = parseInt(R.css("marginLeft"), 10), K = parseInt(R.css("marginRight"), 10), Z = parseInt(F.css("paddingLeft"), 10), X = parseInt(F.css("paddingRight"), 10), ee = parseInt(R.css("paddingLeft"), 10), te = parseInt(R.css("paddingRight"), 10), ie = parseInt(q.css("marginLeft"), 10), ne = parseInt(q.css("marginRight"), 10), re = parseInt(q.css("paddingLeft"), 10), ae = parseInt(q.css("paddingRight"), 10), oe = oThat.getHeight($(".aff_select_box"));
$(".aff_select_wrap").hasClass("currency_select_button") && ((z > 0 || J > 0) && (l = z + J), (Z > 0 || X > 0) && (c = Z + X, u = Z / 2 + X / 2), btnClear = oThat.getClearCSS(F), r = G + l), $(".aff_select_wrap").hasClass("language_select_button") && ((Q > 0 || K > 0) && (_ = Q + K), (ee > 0 || te > 0) && (h = ee + te, f = ee / 2 + te / 2), btnClear = oThat.getClearCSS(R), a = W + _), $(".aff_select_wrap").hasClass("affiliate_mybooking") && ((ie > 0 || ne > 0) && (d = ie + ne), (re > 0 || ae > 0) && (p = re + ae), btnClear = oThat.getClearCSS(q), n = Y + d);
var se = oThat.getDistanceBetweenCenterElements(x, B);
(1625 >= S && se >= -285 || S > 1626 && se >= -410 || 0 > se && se >= -150) && (b = 1), (1625 >= S && 285 >= se || S > 1626 && 410 >= se || se > 0 && 150 >= se) && (w = 1), oThat.isrtlLang() ? D && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = n + a + l + c, v = M + o + n + a + u + V - 6) :k.hasClass("aff_languages_popover") && (g = n + _ + h, v = M + o + n + f + U - 6), g >= 0 && (m = g + M + o), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:v
})) :I && 0 == w ? (k.hasClass("aff_currency_popover") ? (g = O, v = k.width() - O - s + u - V - 6) :k.hasClass("aff_languages_popover") && (g = O + r, v = k.width() - O - s + f - r - U - 6), g >= 0 && (m = g + s), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:oe + "px"
}), E.css({
left:v
})) :(b || w) && (0 > P && H > 0 ? (N -= P, A -= P) :P > 0 && 0 > H && (N += H, A += H), k.css({
left:-Math.round(N),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", y).css("left", A)) :D && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = M, v = M + o + V - u - 6) :k.hasClass("aff_languages_popover") && (g = M + l + G, v = M + o + r + U - f - 6), g >= 0 && (m = g + o), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:v
})) :I && 0 == w ? (k.hasClass("aff_currency_popover") ? (g = O + (btnClear ? 0 :n) + (btnClear ? 0 :a) + l + c, v = k.width() - O - s - (btnClear ? 0 :n) - (btnClear ? 0 :a) - l - u - V - 6) :k.hasClass("aff_languages_popover") && (g = O + (btnClear ? 0 :n) + _ + h, v = k.width() - O - s - (btnClear ? 0 :n) - _ - f - U - 9), g >= 0 && (m = g + s), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:oe + "px"
}), E.css({
left:v
})) :(b || w) && (0 > P && H > 0 ? (N -= P, A -= P) :P > 0 && 0 > H && (N += H, A += H), k.css({
left:-Math.round(N),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", y).css("left", A)), $("." + t).addClass("sel_open"), this.opening_state = 1, k.css({
display:"block",
opacity:"1"
}), this.openSlow ? (this.openSlow = !1, k.animate({
height:iNewHeight + "px"
}, 800)) :k.css({
height:"auto"
}), setTimeout(function() {
_i_("3da:1269"), oThat.opening_state = 2, _r_();
}, 200), _r_();
},
getScreenSize:function() {
_i_("3da:435");
var e = parseInt($("#partner_branding3").width(), 10);
return screenHW = e / 2, restCal = screenHW - 150, 1625 >= e ? restCal = screenHW - 285 :e > 1626 && (restCal = screenHW - 410), _r_([ e, restCal ]);
},
getHeight:function(e) {
_i_("3da:436");
var t = parseInt(e.height(), 10);
return _r_(t);
},
getClearCSS:function(e) {
if (_i_("3da:437"), "both" == $(e).css("clear")) return _r_(!0);
return _r_(!1);
},
getLeftPos:function(e) {
_i_("3da:438");
var t = parseInt(e.css("left"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
getRightPos:function(e) {
_i_("3da:439");
var t = parseInt(e.css("right"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
isrtlLang:function() {
if (_i_("3da:440"), $("body").hasClass("lang_is_rtl")) return _r_(!0);
return _r_(!1);
},
getPopoverWidth:function(e) {
_i_("3da:441");
var t = e.length;
switch (t) {
case 4:
columns = 802;
break;

case 3:
columns = 602;
break;

case 2:
columns = 402;
break;

default:
columns = 202;
}
return _r_(columns);
},
getDistanceBetweenCenterElements:function(e, t) {
_i_("3da:442");
var i = e.width(), n = t.width(), r = e.offset().left, a = t.offset().left, o = parseInt(r) + parseInt(i) / 2, s = parseInt(a) + parseInt(n) / 2;
return _r_(s - o);
},
closeSelect:function(e, t) {
_i_("3da:443");
var i = this;
2 == this.opening_state && ($(".aff_user_popover").animate({
height:"0px"
}, 200, function() {
_i_("3da:1859"), $(".aff_user_popover").css({
display:"none"
}), $(".aff_select_box").removeClass("sel_open"), e && null != e && i.openSelect(e, t), _r_();
}), this.opening_state = 0), _r_();
}
}, booking[sNSStartup].anchorJump = {
priority:9,
init:function() {
_i_("3da:444"), $("#newsletterbox .error").length && (window.location.href = window.location.href + "#errormsg"), $(".forgotten a, a.forgotten").click(function() {
return _i_("3da:1270"), window.open(this.href, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200"), _r_(!1);
}), _r_();
}
}, B.authLightbox = {
init:function() {
_i_("3da:445");
var e = this;
if (e.ready) return _r_();
B.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab", function(t, i) {
_i_("3da:1271"), i = i || {};
var n = "user_access_menu_login_tab" === t.type;
if (e.form(i.mode).toggleClass("user-access-menu-lightbox--signin", n).toggleClass("user-access-menu-lightbox--signup", !n), !booking.env.b_is_tdot_traffic) if (B.env.b_run_prefill_login_email) e.form(i.mode).find(".user_access_password, .user_signup_password").select(); else {
var r = ".user_access_email";
"www" === B.env.b_site_type && (r += ":visible"), e.form(i.mode).find(r).select().focus();
}
_r_();
}), e.ready = !0, _r_();
},
show:function(e) {
_i_("3da:446");
var t = this.form(e.mode);
this.rewrite(e);
var i = "user-access-menu-lightbox";
e.extraClass && (i += " " + e.extraClass), $("#ng-overlay").hide(), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), $(".user_center_popover").hide(), B.lightbox.hide(), $(".js-user-access-menu-lightbox--embedded").hide(), B.lightbox.show(t, {
bAnimation:!booking.env.b_is_tdot_traffic,
customWrapperClassName:i,
hideCallBack:function() {
_i_("3da:1860"), t.find(".form-loading").hide(), $(".js-user-access-menu-lightbox--embedded").show(), B.eventEmitter.trigger("auth-dialog:hide", e), _r_();
}
}), this.initManageBooking(t, e), t.find("[data-target=user_access_" + e.tab + "_menu]").trigger("click", e), "manage_booking" === e.tab && this.showBNPForm(t), e.check_bs2 && B.et.stage("MRLQQDObODcIBTaNFVYFTQWe", 1), B.et.stage("MRLLJeVKccPDQDPNKOOLBZVZMYIO", 1), B.eventEmitter.trigger("auth-dialog:show", e);
var n = B.require("events");
n.trigger("auth-dialog-second:show", e), "zh-cn" === B.env.b_selected_language && "www" === B.env.b_site_type && "signup" === e.tab && B.et.stage("MKMBNLOLOLOOLBZTNSVbXQSIYSPae", 1), B.et.stage("MRLLeUINIQATJRLXBdFO", 1), _r_();
},
hide:function() {
_i_("3da:447"), B.lightbox.hide(), _r_();
},
form:function(e) {
return _i_("3da:448"), e = e ? "--" + e :"", _r_($(".js-user-access-menu-lightbox" + e));
},
rewrite:function(e) {
_i_("3da:449");
var t = this, i = t.form(e.mode);
$.each(t.rewrites, function(n, r) {
_i_("3da:1272");
var a = t.defaults[n];
a || (t.defaults[n] = a = r.call(t, i)), r.call(t, i, n in e ? e[n] :a), _r_();
}), _r_();
},
defaults:{},
rewrites:{
titleSignin:function(e, t) {
_i_("3da:850");
var i = e.find(".js-user-access-menu-lightbox__title--signin");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
titleSignup:function(e, t) {
_i_("3da:851");
var i = e.find(".js-user-access-menu-lightbox__title--signup");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
targetSignin:function(e, t) {
_i_("3da:852");
var i = e.find(".user_access_signin_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
targetSignup:function(e, t) {
_i_("3da:853");
var i = e.find(".user_access_signup_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
_fbFinalUrl:function(e, t) {
if (_i_("3da:854"), t) {
var i = e.attr("href");
if (i) {
var n = "final_url=" + encodeURIComponent(t);
i.indexOf("final_url=") > 0 ? i = i.replace(/final_url=[^&;]*/, n) :(i.charAt(i.length - 1) !== B.env.b_query_params_delimiter && (i += B.env.b_query_params_delimiter), i += n), e.attr("href", i);
}
}
_r_();
},
fbFinalUrlSignin:function(e, t) {
_i_("3da:855");
var i = e.find(".user_access_signin_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
},
fbFinalUrlSignup:function(e, t) {
_i_("3da:856");
var i = e.find(".user_access_signup_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
}
},
showBNPForm:function(e) {
_i_("3da:450"), e.find(".form-section").addClass("form-hidden-section"), e.find(".user_access_resend_confirmation").removeClass("form-hidden-section"), e.find(".user_access_manage_booking_menu").removeClass("form-hidden-section"), e.find(".resend-conf").addClass("resend-conf--absolute"), _r_();
},
initManageBooking:function(e, t) {
_i_("3da:451");
var i = e.find(".user_access_menu"), n = this;
i.unbind(".init-manage-booking"), i.delegate(".js-booking-nr-pin-link", "click.init-manage-booking", function() {
_i_("3da:1273"), n.showBNPForm(e), _r_();
}), i.delegate(".js-resend-conf__signin-link", "click.init-manage-booking", function() {
_i_("3da:1274");
var i = "manage_booking" == t.tab ? "signin" :t.tab;
e.find("[data-target=user_access_" + i + "_menu]").trigger("click", t), _r_();
}), _r_();
}
}, B.when({
condition:$(".js-user-access-menu-lightbox--embedded").length
}).run(function() {
_i_("3da:149");
var e = $(".js-user-access-menu-lightbox--embedded"), t = B.authLightbox;
t.init(), t.initManageBooking(e, {
tab:"signin"
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3da:150");
var t = e("jquery"), i = !1, n = -1, r = "Oops! Something went wrong.", a = ".js-auth_next_step__sms_", o = ".user_access_menu_auth_next_step__sms";
booking.authNextStepSMS = booking.authNextStepSMS || {};
function s(e) {
if (_i_("3da:452"), i) return _r_();
var o = t(a + "send_verification_code"), s = {};
s[n] = "Please enter the verification code.";
function _(e) {
_i_("3da:857");
var t = s[e] || r;
booking.userAccessFormHandler.displayErrorMsg({
msg:t,
parent:".user_access_menu_auth_next_step__sms"
}), _r_();
}
function l() {
_i_("3da:858"), e.find(".form-loading").hide(), t(a + "verify_phone_confirmation_code").val(""), t(".js-user-access-form--signin input[name=second_factor]").val(""), _r_();
}
function d() {
_i_("3da:859"), l(), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), t(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
o.on("click", function(i) {
_i_("3da:1275"), i.preventDefault(), t(".js-user-access-form--signin input[name=second_factor]").val(""), t(".js-user-access-form--signin").submit(), t(".form-loading", e).show(), _r_();
}), t(a + "verify_phone_form").on("submit", function(i) {
_i_("3da:1276");
var r = t(a + "verify_phone_confirmation_code").val() || "";
i.preventDefault(), r ? (t(".js-user-access-form--signin input[name=second_factor]").val(r), t(".js-user-access-form--signin").submit(), t(".form-loading", e).show()) :_(n), _r_();
}), t(a + "phone_number_login_close").on("click", d), e.find(".user_access_section_trigger").on("click", d), _r_();
}
booking.authNextStepSMS.promtUserForPhoneVerification = function(e, i) {
_i_("3da:860"), s(e), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), t(".form-loading", e).hide(), "verify" === i && t(o, e).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}, _r_();
}), B.define("utils/throttled", function(e, t, i) {
_i_("3da:151"), i.exports = function(e, t) {
_i_("3da:861");
var i, n = 0;
function r() {
_i_("3da:1277");
for (var a = this, o = new Array(arguments.length), s = 0, _ = arguments.length; _ > s; s++) o[s] = arguments[s];
var l = +new Date();
if (n && clearTimeout(n), t > l - i) return n = setTimeout(function() {
_i_("3da:2524"), r.apply(a, o), _r_();
}, t), _r_();
i = l, setTimeout(function() {
_i_("3da:2180"), e.apply(a, o), _r_();
}), _r_();
}
return _r_(r);
}, _r_();
}), B.when({
condition:B.env.b_run_MRLLaMCVCMDEUWEVSGFGPOAeUC
}).run(function(e) {
_i_("3da:152");
var t = "MRLLaMCVCMDEUWEVSGFGPOAeUC", i = function() {
_i_("3da:862"), window.fbAsyncInit = function() {
_i_("3da:1861");
var e = 0 === parseInt(B.env.auth_level, 10), i = "mdot" === B.env.b_site_type;
FB.init({
appId:"210068525731476",
xfbml:!0,
version:"v2.2"
});
function n(n) {
_i_("3da:2181"), "connected" === n.status ? e ? i ? B.et.stage(t, 5) :B.et.stage(t, 1) :i ? B.et.stage(t, 6) :B.et.stage(t, 2) :"not_authorized" === n.status && (e ? i ? B.et.stage(t, 7) :B.et.stage(t, 3) :i ? B.et.stage(t, 8) :B.et.stage(t, 4)), _r_();
}
FB.getLoginStatus(function(e) {
_i_("3da:2439"), n(e), _r_();
}), _r_();
}, function(e, t, i) {
_i_("3da:1862");
var n, r = e.getElementsByTagName(t)[0];
e.getElementById(i) || (n = e.createElement(t), n.id = i, n.src = "//connect.facebook.net/en_US/sdk.js", r.parentNode.insertBefore(n, r)), _r_();
}(document, "script", "facebook-jssdk"), _r_();
};
B.when({
events:"auth-dialog-second:show",
experiment:t
}).run(i), B.when({
action:[ "mysettings", "myreservations", "login", "mydashboard", "myreports", "reviewtimeline", "insiderguides", "mybooking" ],
experiment:t
}).run(i), _r_();
}), function(e, t) {
_i_("3da:153"), t.ensureNamespaceExists(sNSStartup), t[sNSStartup].bookingSticker = function() {
_i_("3da:863");
var i, n, r, a, o, s, _, l, d, c, u, h, f, p, g = 0;
t[sNSStartup].bookingSticker.stickToZIndex = "undefined" == typeof t[sNSStartup].bookingSticker.stickToZIndex ? 999 :t[sNSStartup].bookingSticker.stickToZIndex, t[sNSStartup].bookingSticker.stickedElements = "undefined" == typeof t[sNSStartup].bookingSticker.stickedElements ? [] :t[sNSStartup].bookingSticker.stickedElements, t[sNSStartup].bookingSticker.stickers = "undefined" == typeof t[sNSStartup].bookingSticker.stickers ? [] :t[sNSStartup].bookingSticker.stickers;
var m = function(e) {
_i_("3da:1863"), a.scrollTop() + g > f - n.data("stick-to-offset") && b(), a.scrollTop() + g <= f - n.data("stick-to-offset") && w(), _r_();
}, v = function(e) {
_i_("3da:1864"), n.css("width", "auto"), r.css("width", "auto").html(n.html()), r.is(":visible") ? (n.css("width", r.width()), E(r)) :(n.css("width", n.width()), E(n)), x(), m(), _r_();
}, b = function() {
if (_i_("3da:1865"), (-parseInt(n.css("top"), 10) || 0) < parseInt(n.height(), 10) && -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (y(), C()), p && a.scrollTop() + parseInt(n.height(), 10) + n.data("stick-to-offset") > x()) return n.css({
top:-(a.scrollTop() + parseInt(n.height(), 10) - x())
}), -parseInt(n.css("top"), 10) > parseInt(n.height(), 10) && (k(), C()), _r_();
if (p) return n.css({
top:n.data("stick-to-offset")
}), _r_();
return E(n), n.addClass("sticked").css({
top:n.data("stick-to-offset"),
"z-index":t[sNSStartup].bookingSticker.stickToZIndex
}).before(r), t[sNSStartup].bookingSticker.stickToZIndex--, p = !0, y(), C(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_STUCK, n), _r_();
}, w = function() {
if (_i_("3da:1866"), !p) return _r_();
return n.removeClass("sticked").css({
top:u,
"z-index":h
}), r.remove(), t[sNSStartup].bookingSticker.stickToZIndex++, p = !1, k(), C(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_RELEASE, n), _r_();
}, y = function() {
_i_("3da:1867"), -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (t[sNSStartup].bookingSticker.stickedElements.push(n), S()), _r_();
}, k = function() {
_i_("3da:1868");
var e = t[sNSStartup].bookingSticker.stickedElements.indexOf(n);
-1 !== e && (t[sNSStartup].bookingSticker.stickedElements.splice(e, 1), S()), _r_();
}, S = function() {
_i_("3da:1869"), t[sNSStartup].bookingSticker.stickedElements.sort(function(e, t) {
if (_i_("3da:2440"), e.data("elem-original-offset-top") > t.data("elem-original-offset-top")) return _r_(1);
if (e.data("elem-original-offset-top") < t.data("elem-original-offset-top")) return _r_(-1);
return _r_(0);
}), _r_();
}, C = function() {
if (_i_("3da:1870"), t[sNSStartup].bookingSticker.stickedElements.length > 0) for (var e = 0; e < t[sNSStartup].bookingSticker.stickedElements.length; e++) {
var i = t[sNSStartup].bookingSticker.stickedElements[e], n = i.data("initial-offset") || 0;
if (i.data("stick-to-offset", n), e > 0) {
for (var r = e, a = e - 1, o = n; a >= 0; ) o += t[sNSStartup].bookingSticker.stickedElements[a].outerHeight(), a--;
t[sNSStartup].bookingSticker.stickedElements[r].data("stick-to-offset", o);
}
}
_r_();
}, x = function() {
_i_("3da:1871");
var e = i && i.offset && i.offset();
return d = e ? "html" === i.selector ? 0 :parseInt(e.top, 10) :0, o = parseInt(i.css("border-bottom-width"), 10), _ = parseInt(i.css("padding-bottom"), 10), s = d + parseInt(i.height(), 10) + _ + o, _r_(s);
}, E = function(t) {
_i_("3da:1872");
var i = e(t), r = [ "inline", "inline-block", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group" ];
n.css({
width:i.width()
}), r.indexOf(i.css("display")) > 1 && n.find("td, th").each(function(t, n) {
_i_("3da:2597");
var r = e(i.find("td, th").get(t));
e(n).css({
width:r.width()
}), _r_();
}), _r_();
}, T = function() {
_i_("3da:1873"), a.bind({
scroll:m,
resize:v,
load:v
}), _r_();
}, $ = function() {
_i_("3da:1874"), f = r.is(":visible") ? parseInt(r.offset().top, 10) :parseInt(n.offset().top, 10), v(), C(), m(), _r_();
}, N = function(o, s, _) {
if (_i_("3da:1875"), i = e(s ? s :"html"), l = parseInt(i.height(), 10), n = e(o), c = parseInt(n.height(), 10), _ = _ || {}, !n.length) return _r_();
if (c >= l) return _r_();
var d = t[sNSStartup].bookingSticker.stickers;
-1 === d.indexOf(this) && d.push(this), a = e(window), elemOriginalCSSDisplay = n.css("display"), emOriginalCSSTop = n.css("top"), h = n.css("z-index"), x(), f = parseInt(n.offset().top, 10), n.data("elem-original-offset-top", f), n.data("stick-to-offset", 0), n.data("initial-offset", _.initialOffset), r = n.clone(!1).css({
visibility:"hidden"
}).addClass("sticked-placeholder"), E(n), T(), y(), C(), m(), _r_();
};
return _r_({
priority:9,
init:N,
restartPosition:$,
getElement:function() {
return _i_("3da:2002"), _r_(n);
},
getOffsetTopBoundaries:function() {
return _i_("3da:2003"), _r_({
lowerBound:f,
upperBound:x() - parseInt(n.height(), 10)
});
},
isSticked:function() {
return _i_("3da:2004"), _r_(p);
}
});
}, t[sNSStartup].bookingSticker.update = function() {
_i_("3da:864");
var i = t[sNSStartup].bookingSticker.stickers || [];
if (!i.length) return _r_();
e.each(i, function(e, t) {
_i_("3da:1876"), t.restartPosition(), _r_();
}), t.events.emit("booking_sticker:update"), _r_();
}, _r_();
}(window.jQuery, window.booking), booking.browserStorageHandler = function(e, t, i, n) {
_i_("3da:295");
var r = !1;
try {
r = e.localStorage && e.sessionStorage ? !0 :!1, r && e.localStorage.setItem("btest", "1");
} catch (a) {
r = !1;
}
var o = {
_readCookie:function(e) {
_i_("3da:1662");
var t = {};
try {
"undefined" != typeof JSON && (t = JSON.parse(n.cookie(e)) || {});
} catch (i) {}
return _r_(t);
},
_modifySingleValue:function(t, a, o, s, _) {
if (_i_("3da:1663"), !a || !o) return _r_(!1);
if (r && !_) {
var l = "session" === t ? e.sessionStorage :e.localStorage;
if ("delete" === a) l.removeItem(o); else try {
l.setItem(o, s);
} catch (d) {}
} else {
var c, u, h, f;
"session" === t ? c = "bs" :(c = "b", f = 30), u = this._readCookie(c), "delete" === a ? delete u[o] :u[o] = s, h = n.isEmptyObject(u) ? null :JSON.stringify(u), n.cookie(c, h, {
expires:f,
path:"/",
domain:i.b_domain_end
});
}
_r_();
},
_getValue:function(t, i, n) {
if (_i_("3da:1664"), !i) return _r_(void 0);
if (r && !n) {
var a = "session" === t ? e.sessionStorage :e.localStorage;
return _r_(a.getItem(i));
}
var o, s;
return o = "session" === t ? "bs" :"b", s = this._readCookie(o), _r_(s[i]);
}
};
return _r_({
addSessionValue:function(e, t, i) {
return _i_("3da:1278"), _r_(o._modifySingleValue("session", "add", e, t, i));
},
deleteSessionValue:function(e, t) {
return _i_("3da:1279"), _r_(o._modifySingleValue("session", "delete", e, void 0, t));
},
getSessionValue:function(e, t) {
return _i_("3da:1280"), _r_(o._getValue("session", e, t));
},
addPermanentValue:function(e, t, i) {
return _i_("3da:1281"), _r_(o._modifySingleValue("permanent", "add", e, t, i));
},
deletePermanentValue:function(e, t) {
return _i_("3da:1282"), _r_(o._modifySingleValue("permanent", "delete", e, void 0, t));
},
getPermanentValue:function(e, t) {
return _i_("3da:1283"), _r_(o._getValue("permanent", e, t));
},
isLocalStorageSupported:function() {
return _i_("3da:1284"), _r_(r);
}
});
}(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), function() {
_i_("3da:154");
var e = B.require("jquery"), t = booking.env, i = "", n = 1e3 * t.b_timestamp, r = Math.abs(+new Date() - new Date(n)) >= 864e5, a = r, o = booking[sNSStartup].calendar = {
priority:9,
version:1.4,
datefmt:"YYYY MM DD",
minimalDays:1,
maximalDays:30,
oldDays:1,
from:{
date:null,
day:null,
month:null,
year:null
},
till:{
date:null,
day:null,
month:null,
year:null
},
viewDateFrom:a ? new Date(n) :new Date(),
viewDateTill:a ? new Date(n) :new Date(),
oneDayInMS:864e5,
calendars:[],
calendarTypes:{
checkin_day:{
isTill:!1,
isDay:!0
},
checkin_monthday:{
isTill:!1,
isDay:!0
},
checkin_year_month:{
isTill:!1,
isDay:!1
},
pre_checkin_year_month:{
isTill:!1,
isDay:!1
},
checkout_day:{
isTill:!0,
isDay:!0
},
checkout_monthday:{
isTill:!0,
isDay:!0
},
checkout_year_month:{
isTill:!0,
isDay:!1
},
pre_checkout_year_month:{
isTill:!0,
isDay:!1
},
start_monthday:{
isTill:!1,
isDay:!0
},
start_year_month:{
isTill:!1,
isDay:!1
},
end_monthday:{
isTill:!0,
isDay:!0
},
end_year_month:{
isTill:!0,
isDay:!1
}
},
maxMonthsInFuture:12,
maxDaysInFuture:365,
maxDaysInThePast:1,
syncDate:null,
userServDate:!1,
hasDataRange:!1,
dateFormat:function(e, i, n) {
_i_("3da:1665");
var r = /D{1,4}|M{1,4}|YY(?:YY)?/g, a = function(e, t) {
for (_i_("3da:2343"), e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
return _r_(e);
}, o = this;
if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (i = e, e = void 0), e = e ? new Date(e) :new Date(), isNaN(e)) throw SyntaxError("invalid date");
i = String(i || o.datefmt), "UTC:" == i.slice(0, 4) && (i = i.slice(4), n = !0);
var s = n ? "getUTC" :"get", _ = e[s + "Date"](), l = e[s + "Day"](), d = e[s + "Month"](), c = e[s + "FullYear"](), u = (e[s + "Hours"](), e[s + "Minutes"](), e[s + "Seconds"](), {
D:_,
DD:a(_),
DDD:t.b_simple_weekdays_for_js[(l + 6) % 7],
DDDD:t.b_long_weekdays[(l + 6) % 7],
M:d + 1,
MM:a(d + 1),
MMM:t.b_short_months_abbr[d],
MMMM:t.b_short_months[d],
YY:String(c).slice(2),
YYYY:c
});
return _r_(i.replace(r, function(e) {
return _i_("3da:2344"), _r_(e in u ? u[e] :e.slice(1, e.length - 1));
}));
},
searchMinDays:function(e) {
_i_("3da:1666"), this.minimalDays = e, _r_();
},
maxYearsInFuture:function() {
_i_("3da:1667"), this.today = a ? this.noHourDate(new Date(n)) :this.noHourDate(null), this.maxMonthsInFuture = 12, this.maxDaysInFuture = parseInt(t.calendar_days_allowed_number), this.tomorrow = this.dateAfterDays(this.today, 1), this.endOfYear1 = this.dateAfterDays(this.today, this.maxDaysInFuture), this.endOfYear2 = this.dateAfterDays(this.today, this.maxDaysInFuture - 1), _r_();
},
setPast:function(e) {
_i_("3da:1668"), this.maxDaysInThePast = e, _r_();
},
syncDates:function(t, i, n, r, a) {
_i_("3da:1669"), e(".b_check_blocked").removeClass("b_check_blocked"), a || (e("#availcheck").attr("checked", !1), e("#define_group input, #define_group select").removeAttr("disabled"), e("#define_group").removeClass("disableme")), t ? (this.till.day = null == i ? this.till.day :i, this.till.month = null == n ? this.till.month :n, this.till.year = null == r ? this.till.year :r, null != this.till.day && null != this.till.month && null != this.till.year && (this.till.date = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"))) :(this.hasDataRange = !0, this.from.day = null == i ? this.from.day :i, this.from.month = null == n ? this.from.month :n, this.from.year = null == r ? this.from.year :r, null != this.from.day && null != this.from.month && null != this.from.year && (this.from.date = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00"), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")));
var o = !1;
t || null == this.from.date ? t && null != this.till.date && null == this.from.date && (a || (this.from.date = this.dateAfterDays(this.till.date, ~(this.minimalDays - 1)), o = !0)) :null != this.till.date ? this.till.date <= this.from.date ? (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.oldDays), o = !0) :booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckOutAvailable(this.from, this.till) === !1 && (this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00"), o = !0) :a || (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.minimalDays), o = !0), o && (t ? (this.from.year = this.from.date.getFullYear(), this.from.month = this.from.date.getMonth() + 1, this.from.day = this.from.date.getDate(), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")) :(this.till.year = this.till.date.getFullYear(), this.till.month = this.till.date.getMonth() + 1, this.till.day = this.till.date.getDate(), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00")));
for (var s = 0; s < this.calendars.length; s++) e(this.calendars[s]).trigger("changed_date", [ t, o ]);
booking.eventEmitter.trigger("CALENDAR:dates_changed", {
type:t ? "checkout" :"checkin",
otherChanged:o,
oldApi:this
}), _r_();
},
updateCalendarTables:function(t) {
_i_("3da:1670"), e(t).hasClass("calendarTill") ? this.rebuildCalendarTable(e("table", t).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear()) :this.rebuildCalendarTable(e("table", t).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear()), _r_();
},
init:function() {
if (_i_("3da:1671"), "hotel" == booking.env.b_action) return _r_();
if (this.calendarReady) return _r_();
this.calendarReady = !0, this.maxYearsInFuture(), this.initAddHandlers(), _r_();
},
initAddHandlers:function() {
_i_("3da:1672");
var t = this;
e("select").each(function() {
if (_i_("3da:2345"), "1" == this.getAttribute("data-no-old-calendar")) return _r_(!0);
var i = e(this).attr("name");
if (i && t.calendarTypes[i]) {
t.calendars.push(this), B.et.track("cDPRVQCLBMcaT");
var n = e(this).val();
if ("0" != n) {
var r = t.calendarTypes[i];
if (r.isDay) r.isTill ? t.till.day = n :t.from.day = n; else {
var a = n ? n.split("-") :"";
a.length && a.length > 0 && (r.isTill ? (t.till.year = a[0], t.till.month = a[1]) :(t.from.year = a[0], t.from.month = a[1]));
}
}
e(this).bind("changed_date", function(i, n, r) {
_i_("3da:2690"), e("input", this.parentNode).each(function() {
if (_i_("3da:2737"), t.calendarTypes[e(this).attr("name")]) {
var i = t.calendarTypes[e(this).attr("name")];
i.isDay && i.isTill && null != t.till.day && e(this).val(t.till.day), i.isDay && !i.isTill && null != t.from.day && e(this).val(t.from.day), !i.isDay && i.isTill && null != t.till.month && null != t.till.year && e(this).val(t.till.year + "-" + t.till.month), i.isDay || i.isTill || null == t.from.month || null == t.from.year || e(this).val(t.from.year + "-" + t.from.month);
}
_r_();
});
var a = t.calendarTypes[e(this).attr("name")];
((n || r) && a.isTill || (!n || r) && !a.isTill) && (a.isDay ? (a.isTill && null != t.till.year && null != t.till.month || !a.isTill && null != t.from.year && null != t.from.month) && t.rebuildDaySelect(this, a.isTill) :a.isTill && null != t.till.year && null != t.till.month ? t.selectOption(this, t.till.year + "-" + t.till.month) :a.isTill || null == t.from.year || null == t.from.month || t.selectOption(this, t.from.year + "-" + t.from.month)), _r_();
}), e(this).change(function() {
_i_("3da:2691");
var i = t.calendarTypes[e(this).attr("name")], n = e(this).val(), r = n.split("-");
if ("0" != n) if (e(this).parents(".newcalendar").length) {
var a = e(this).parents(".newcalendar");
r.length && r.length > 1 && (e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(r[0] + "/" + r[1] + "/" + t.viewDateTill.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", a).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = new Date(r[0] + "/" + r[1] + "/" + t.viewDateFrom.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", a).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear())));
} else t.syncDates(i.isTill, i.isDay ? n :null, i.isDay ? null :r.length && r.length > 1 ? r[1] :null, i.isDay ? null :r[0]);
_r_();
});
}
_r_();
}), e(".newcalendar").each(function() {
_i_("3da:2346"), B.et.track("cDPRVQCLBMcaT"), e(this).hasClass("calendarTill") ? t.rebuildCalendarTable(e("table", this).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.rebuildCalendarTable(e("table", this).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.calendars.push(this), e(this).bind("changed_date", function(i, n, r) {
if (_i_("3da:2643"), e(this).hasClass("calendarTill")) {
if (null != t.till.month && null != t.till.year) {
var a = t.till.day ? t.till.day :1;
t.viewDateTill = new Date(t.till.year + "/" + t.till.month + "/" + a + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !0, t.till.month, t.till.year);
}
} else if (null != t.from.month && null != t.from.year) {
var a = t.from.day ? t.from.day :1;
t.viewDateFrom = new Date(t.from.year + "/" + t.from.month + "/" + a + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !1, t.from.month, t.from.year);
}
t.updateLabels(), _r_();
});
var i = e(this);
i.undelegate("td", "click").delegate("td", "click", function() {
_i_("3da:2644");
var t = e(this).text();
return e("a", this).length && n(t), _r_(!1);
});
function n(n, r) {
if (_i_("3da:2525"), !parseInt(n)) return _r_();
i.hasClass("calendarTill") ? t.syncDates(!0, n, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.syncDates(!1, n, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.closePopupCalendar();
var a = booking.formatter.date(t.from.year + "-" + t.from.month + "-" + t.from.day, "short_date"), o = booking.formatter.date(t.till.year + "-" + t.till.month + "-" + t.till.day, "short_date");
e(".checkinDateSection .selected_date").text(a), e(".checkoutDateSection .selected_date").text(o), t.checkFormPost(), _r_();
}
e(".nextmonth", this).bind("click", function() {
if (_i_("3da:2645"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e(".prevmonth", this).bind("click", function() {
if (_i_("3da:2646"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e("select", this).each(function() {
_i_("3da:2647");
var i = e(this).attr("name"), n = e(this).val();
t.calendarTypes[i] ? t.calendarTypes[i].isDay || (e(this).attr("name", "pre_" + i), e(this.parentNode).append('<input type="hidden" name="' + i + '" value="' + n + '" />')) :e(this).change(function() {
_i_("3da:2738");
var i = e(this).val();
if ("0" != i) {
var n = i.split("-");
n.length && n.length > 0 && (oCalendar = e(this).parents(".newcalendar"), e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !0, n[1], n[0])) :(t.viewDateFrom = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !1, n[1], n[0])));
}
_r_();
}), _r_();
}), _r_();
}), B.env.b_calendar2 || e(".calendarLink").bind("click.calendar", function() {
return _i_("3da:2526"), window.calendarRef = e(this).parent().attr("class"), t.openPopupCalendar(this), _r_(!1);
}), e(".calendar_close").click(function() {
return _i_("3da:2347"), t.closePopupCalendar(), _r_(!1);
}), null != this.from.year && null != this.from.month && null != this.from.day && t.syncDates(!1, this.from.day, this.from.month, this.from.year, !0), null != this.till.year && null != this.till.month && null != this.till.day && t.syncDates(!0, this.till.day, this.till.month, this.till.year, !0), "#auto_open_checkout" == window.location.hash && e("#auto_open_checkout a").click(), _r_();
},
checkFormPost:function() {
if (_i_("3da:1673"), i && e("." + i + " .submit_on_change").length) if ("hotel" == booking.env.b_action) {
if ("dealCheckinDate" == i && e("#hotelpage_availform").attr("action").indexOf("#") > -1) {
var t = e("#hotelpage_availform").attr("action").split("#")[0];
e("#hotelpage_availform").attr("action", t);
}
e("#hotelpage_availform").submit();
} else e("#frm").submit();
_r_();
},
updateLabels:function() {
_i_("3da:1674");
var i = Math.round((this.noHourDate(this.till.date) - this.noHourDate(this.from.date)) / this.oneDayInMS);
if (i > 0 && t.night && t.nights) {
var n = 1 == i ? "1 " + t.night :t.nights.replace("{amount}", i);
n.indexOf(i) < 0 && (n = i + " " + n), e(".dayamount").length && e(".dayamount").text(n), e(".no_nights_helper").length && e(".no_nights_helper").text("(" + n + ")");
}
e(".calendarFrom").length && (e(".calendarFrom .ct_month").text(t.b_short_months[parseInt(this.from.month) - 1]), e(".calendarFrom .ct_day").text(this.from.day), e(".calendarTill").length && (e(".calendarTill .ct_month").text(t.b_short_months[parseInt(this.till.month) - 1]), e(".calendarTill .ct_day").text(this.till.day))), _r_();
},
updatePrevNextLinks:function(t, i) {
_i_("3da:1675");
var n = this, r = this.dateAfterDays(this.tomorrow, this.maxDaysInFuture - 2), a = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.tomorrow, ~this.maxDaysInThePast) :this.tomorrow, o = e(i).parents(".calendarTill").length ? this.viewDateTill :this.viewDateFrom;
e(".nextmonth", i.parentNode).each(function() {
_i_("3da:2348"), n.dateAfterDays(o, 0, 1, !0) > r ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), e(".prevmonth", i.parentNode).each(function() {
_i_("3da:2349"), n.dateAfterDays(o, 0, -1, !0) < a ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), this.selectOption(e("select", i.parentNode), o.getFullYear() + "-" + (o.getMonth() + 1)), _r_();
},
rebuildCalendarTable:function(i, n, r, a) {
_i_("3da:1676");
var o = e(i).parents(".newcalendar"), s = document.createElement("table");
e(s).html(i.innerHTML);
var _ = booking.env.b_site_experiment_av_calendar && o.hasClass("avCalendar");
n && _ && this.from.date && (e(".avCalendar_pick_checkin").hide(), e(".avCalendar.calendarTill").show());
var l = parseInt(new Date(a + "/" + r + "/1").getDay()) - 2;
t.sunday_first ? l += 1 :0 > l && (l = 7 + l);
for (var d = s.getElementsByTagName("td"), c = 0; 42 > c; c++) {
var u = c - l, h = d[c];
if (u > 0 && u <= this.getDaysInMonth(r, a)) {
var f = new Date(a + "/" + r + "/" + u + " 00:00:00");
if (this.isValidDate(f, n)) {
var p = "";
if (_ ? ((f - this.till.date == 0 && n || f - this.from.date == 0 && !n) && (p += " selected"), !n && booking.avCalendar.isDateInRange({
year:a,
month:r,
day:u
}) && (p += booking.avCalendar.isCheckInAvailable({
year:a,
month:r,
day:u
}) ? " has_av" :" no_av"), n && this.from.day && booking.avCalendar.isDateInRange(this.from) && (p += booking.avCalendar.isCheckOutAvailable(this.from, {
year:a,
month:r,
day:u
}) ? " has_av" :" no_av")) :(f - this.today == 0 && (p += " today"), f - this.till.date == 0 && (p += n ? " selected" :" endsel"), f - this.from.date == 0 && (p += n ? " endsel" :" selected"), f < this.till.date && f > this.from.date && (p += " inbetween")), booking.env.b_fd_hotel_dates) for (var g = 0; g < booking.env.b_fd_hotel_dates.length; g++) if (booking.env.b_fd_hotel_dates[g]) {
e.lst = booking.env.b_fd_hotel_dates[g].split("-");
var m = new Date(Number(e.lst[0]), Number(e.lst[1]) - 1, Number(e.lst[2]));
f - m == 0 && (p += " flashdeals");
}
h.innerHTML = '<a href="#" class="' + p + '">' + u + "</a>";
} else f - this.today != 0 || _ ? h.innerHTML = "<span>" + u + "</span>" :h.innerHTML = '<span class="today">' + u + "</span>";
} else h.innerHTML = "&nbsp;";
}
e(i).html(s.innerHTML), this.updatePrevNextLinks(!0, i), _r_();
},
isValidDate:function(e, t) {
_i_("3da:1677");
var i = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.today, ~this.maxDaysInThePast) :this.today;
return _r_(!(i > e || t && e < this.tomorrow && this.maxDaysInThePast < 2 || e > this.endOfYear1 || !t && e > this.endOfYear2));
},
rebuildDaySelect:function(i, n) {
_i_("3da:1678");
var r = "&nbsp;";
if (n) {
var a = this.till.month, o = this.till.year, s = this.till.day;
this.from.month, this.from.year, this.from.day;
(null == s || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
} else {
var a = this.from.month, o = this.from.year, s = this.from.day;
(null == s || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
}
e(i).html(r);
var _ = this.getDaysInMonth(a, o);
function l(e, t, i) {
_i_("3da:2005");
var n = new Date(Date.UTC(e, t - 1, i)), i = n.getUTCDay();
return i = i > 0 ? i - 1 :6, _r_(i);
}
for (var d = 1; _ >= d; d++) {
var c = l(o, a, d), u = t.b_simple_weekdays_for_js[c] + " " + d;
("ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang || "hu" == t.b_lang) && (u = "ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang ? d + B.env.sbox_day + " " + t.b_simple_weekdays_for_js[c] :d + " " + t.b_simple_weekdays_for_js[c]), e(i).append('<option value="' + d + '"' + (s == d ? ' selected="selected"' :"") + ">" + u + "</option>");
}
_r_();
},
noHourDate:function(e) {
_i_("3da:1679");
var t = "undefined" == typeof e || null === e ? this.userServDate ? new Date(this.syncDate) :new Date() :e;
return t.setHours(0), t.setMilliseconds(0), t.setMinutes(0), t.setSeconds(0), _r_(t);
},
getDaysInMonth:function(e, t) {
_i_("3da:1680");
var i = [ 31, function() {
return _i_("3da:2527"), _r_(t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 29 :28);
}(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
return _r_(i[e - 1]);
},
selectOption:function(t, i, n) {
_i_("3da:1681");
for (var r, a, o, s = e(t).parents(".newcalendar"), _ = booking.env.b_site_experiment_av_calendar && s.hasClass("avCalendar"), l = !1, d = e("option", t), c = 0; c < d.length; c++) r = d[c], a = e(r), o = a.text(), i && "" != i && (a.val() == i ? (r.selected = !0, l = !0, _ && s.find(".avCalendar_month").text(o)) :d[c].selected = !1), n && "" != n && (o == i ? (r.selected = !0, l = !0, _ && s.find(".avCalendar_month").text(o)) :r.selected = !1);
return _r_(l);
},
dateAfterDays:function(e, t, i, n) {
_i_("3da:1682");
var r = this.oneDayInMS * t, a = 12;
if (n && e.setDate(1), i) {
this.noHourDate(e);
if ((i > a || -1 * a > i) && (e.setFullYear(e.getFullYear() + parseInt(i / a)), i %= a), 0 != i) {
var o = e.getMonth();
o + i > a ? (e.setFullYear(e.getFullYear() + 1), e.setMonth(o + i - a)) :0 > o + i ? (e.setFullYear(e.getFullYear() - 1), e.setMonth(o + i + a)) :e.setMonth(o + i);
}
}
var s = new Date(1 * this.noHourDate(e) + r);
if (e.getTimezoneOffset() != s.getTimezoneOffset()) {
var _ = e.getTimezoneOffset() - s.getTimezoneOffset();
_ = 60 * (0 > _ ? ~_ + 1 :_) * 1e3, _ > 0 && (s = new Date(1 * this.noHourDate(e) + r + _));
}
return _r_(s);
},
setPosition:function(i) {
_i_("3da:1683");
var n = e(i).offset(), r = 10, a = n.top + r;
leftPos = n.left, $window = e(window), windowHeight = $window.height(), windowWidth = $window.width(), documentScrollTop = e(document).scrollTop(), t.rtl && (leftPos -= 211), windowWidth < leftPos + 230 && windowWidth - 230 > 0 && (leftPos = windowWidth - 230), windowHeight + documentScrollTop < a + 230 && (a - documentScrollTop - 250 > 0 ? a -= 250 :a = windowHeight + documentScrollTop - 250), e("#calendar_popup").css({
top:a + "px",
left:leftPos + "px"
}), _r_();
},
scrollHandlers:[],
openPopupCalendar:function(t) {
_i_("3da:1684");
var i, n = e("#calendar_popup").get(0), r = e(window), a = this, o = "";
switch (t.nodeName.toLowerCase()) {
case "a":
o = t.href.split("#")[1];
break;

case "input":
o = t.name;
break;

case "select":
o = t.name;
break;

case "label":
o = t.getAttribute("data-title");
}
i = function() {
_i_("3da:2350"), a.setPosition(t), _r_();
}, this.scrollHandlers.push(i), this.setPosition(t), r.bind("scroll resize", i), e("#calendar_popup").show(), this.calendarTypes[o] && this.calendarTypes[o].isTill ? (e(n).addClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear())) :(e(n).removeClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear())), e("body").bind("close_calendar", this.closeHandler), booking.eventEmitter.trigger("CALENDAR:datepicker_opened", this), _r_();
},
closeHandler:function() {
_i_("3da:1685"), o.closePopupCalendar(), _r_();
},
closePopupCalendar:function() {
_i_("3da:1686");
var t, i, n;
for (e("#calendar_popup").removeClass("calendarTill").hide(), e("body").unbind("close_calendar", this.closeHandler), t = 0, i = this.scrollHandlers.length; i > t; t += 1) n = this.scrollHandlers[t], "function" == typeof n && $window.unbind("scroll resize", n);
this.scrollHandlers = [], _r_();
}
};
_r_();
}(), booking[sNSStartupLoad].change_dates = {
priority:9,
init:function() {
_i_("3da:453"), "undefined" != typeof trigger_error_template_event_tracking && trigger_error_template_event_tracking === !0 && (booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Aggregate)", b_errors), "" != b_this_referer && booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Referrer)", b_this_referer + " - " + b_errors), booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (RequestURL)", b_this_url + " - " + b_errors)), "send_change_dates" == booking.env.b_page && ($("#message_changing-dates").fadeIn(), $("#change_dates").submit(function() {
_i_("3da:1877");
var e = $("input[name=do]"), t = $("#change_dates input[name=checkin_date]").val(), i = $("#change_dates input[name=checkout_date]").val();
t && i && (t.length > 0 || i.length > 0) && (cin_yymm = $("#checkin_year_month").val(), cin_dd = $("#checkin_day").val(), cin_yymmdd = cin_yymm + "-" + cin_dd, cout_yymm = $("#checkout_year_month").val(), cout_dd = $("#checkout_monthday").val(), cout_yymmdd = cout_yymm + "-" + cout_dd, a = t.replace(/-0/g, "-"), b = i.replace(/-0/g, "-"), (a != cin_yymmdd || b != cout_yymmdd) && e.val("dochangedates")), _r_();
})), "mybooking" == booking.env.b_action && $("#message_changing-dates").fadeIn(), _r_();
}
}, booking.command("lightbox-hide", function() {
_i_("3da:155"), booking.lightbox.hide(), _r_();
}), booking.command.define({
name:"show-auth-lightbox",
handler:function(e) {
if (_i_("3da:454"), B.env.b_run_redirect_from_app_to_book_for_login) {
var t = B.env.b_login_page_url, i = e ? e.tab :"";
i && (t += B.env.b_query_params_delimiter + "auth_tab=" + i), window.location.href = t;
} else {
if (B.authLightbox.init(), e.tab || (e.tab = "signin"), e.mode && e.mode in this.modes) return _r_(this.modes[e.mode].apply(this, arguments));
B.authLightbox.show(e);
}
_r_();
},
modes:{
"raise-auth":function(e) {
_i_("3da:865");
var t = B.promise();
return B.authLightbox.show(e), B.eventEmitter.one("auth-dialog:hide", n).one("UA:got_auth_level_high", r), t.then(i, i), _r_(t);
function i() {
_i_("3da:1285"), B.eventEmitter.unbind("auth-dialog:hide", n).unbind("UA:got_auth_level_high", r), _r_();
}
function n() {
_i_("3da:1286"), t.reject(), _r_();
}
function r(e, i) {
_i_("3da:1287");
var n = $.grep(B.env.b_user_emails, function(e) {
return _i_("3da:2351"), _r_(e.email === i.username);
});
n.length ? t.fulfill() :t.reject({
error:"different_email"
}), B.authLightbox.hide(), _r_();
}
}
}
}), booking.command("show-profile-menu", function() {}), booking.command.define({
name:"show-currency-selector",
handler:function(e) {
_i_("3da:455"), $(".user_center_option[data-id=currency_selector] .popover_trigger").click(), _r_();
}
}), booking.command.define("social-disconnect", function(e) {
_i_("3da:157");
var t = B.require("lightbox"), i = $(".js-social-connect-dialog--" + e.provider + "-disconnect");
i.length && t.show(i, {
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}), B.command("profile-add-email", function(e) {
if (_i_("3da:158"), !B.require("mysettings-model-emails") || "mysettings" != booking.env.b_action) return _r_();
B.require("mysettings-model-emails").getInstance().save({
b_is_new:!0,
b_email:e.email
}), _r_();
}), booking[booking.env && booking.env.cookie_warning_v2 ? sNSStartupLoad :sNSStartup].cookie_warning = {
priority:10,
init:function() {
_i_("3da:456");
var e, t, i = window.jQuery;
if (!window.B || !B.env || window.self !== window.top && !+B.env.b_bookings_owned) return _r_();
if (booking.env && booking.env.cookie_warning_v2 && (/(^|;)\s*cws=/.test(document.cookie) || (e = new Date(), e.setTime(e.getTime() + 31536e6), t = B.env.b_domain_end || ".booking.com", document.cookie = "cws=true; domain=" + t + "; path=/; expires=" + e.toGMTString(), B.env.cookie_warning = !0)), B.env.cookie_warning) {
var n = i("#cookie_warning"), r = function() {
_i_("3da:1878"), B.env.cookie_warning_excluded_country || i(document).unbind("click.cookieMessage"), i(document).unbind("keydown.cookieMessage"), i(window).unbind("scroll.cookieMessage"), _r_();
}, a = function(e) {
if (_i_("3da:1879"), i(e).hasClass("close_warning")) return n.fadeOut("1000", function() {
_i_("3da:2598"), i(e).remove(), i(document).unbind("click.cookieMessage"), _r_();
}), booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Close"), _r_(!1);
booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Read"), _r_();
}, o = function() {
_i_("3da:1880"), B.env.cookie_warning_excluded_country || n.fadeOut(1e3), r(), _r_();
};
i(document).bind({
"click.cookieMessage":function(e) {
_i_("3da:2182");
var t = e.target ? e.target :e.srcElement;
i(t).parents("#cookie_warning").length && "a" === t.tagName.toLowerCase() ? (a(t), r()) :i(t).parents("#cookie_warning").length || B.env.cookie_warning_excluded_country ? !i(t).parents("#cookie_warning").length && B.env.cookie_warning_excluded_country && (n.fadeOut(1e3), r()) :o(), _r_();
},
"keydown.cookieMessage":function() {
_i_("3da:2183"), o(), _r_();
}
}), i(window).bind({
"scroll.cookieMessage":function() {
_i_("3da:2184"), i(this).scrollTop() && (B.env.cookie_warning_excluded_country ? o() :i(window).unbind("scroll.cookieMessage")), _r_();
}
}), n.show();
}
_r_();
}
}, function(e, t) {
_i_("3da:159"), e("et_copy_tracking", [ "et", "jquery" ], function(e, t) {
_i_("3da:866");
var i = 1e3, n = 5e3, r = null, a = [], o = t(window), s = B && B.env && B.env.b_run_loc_ce_rescan_timer;
function _(i) {
_i_("3da:1288"), t.makeArray(document.scripts).filter(function(e) {
return _i_("3da:2441"), _r_("track_copy" === e.type);
}).forEach(function(n) {
_i_("3da:2185");
var r = n.getAttribute("data-hash"), o = n.parentNode, _ = t(o);
s && o.removeChild(n), i && _.is(":visible") ? e.on("view", o).stage(r, 1) :a.push({
hash:r,
$node:_,
offsetTop:_.offset().top
}), _r_();
}), _r_();
}
function l() {
_i_("3da:1289");
var t = o.scrollTop() + o.height();
a.forEach(function(i, n) {
_i_("3da:2186"), i.offsetTop < t && (i.offsetTop = i.$node.offset().top, i.$node.is(":visible") && i.offsetTop < t && (e.stage(i.hash, 1), a.splice(n, 1))), _r_();
}), _r_();
}
return t(function() {
_i_("3da:1881"), _(!0), r = setInterval(function() {
_i_("3da:2528"), a.length ? l() :s || clearInterval(r), _r_();
}, i), s && setInterval(_, n), _r_();
}), _r_({});
}), t("et_copy_tracking"), _r_();
}(B.define, B.require), booking[sNSExperiments].HOGeVdCScVUKeYEGecO = {
init:function() {
_i_("3da:457"), this.$first = $("#wl252-modal-1"), "true" !== $.cookie("wl252-gotit") && (booking[sNSStartup].lightbox.show(this.$first, {
customWrapperClassName:booking.et.track("MRLLfYCeHHQeFHVPSJQEZWSLCAae") ? "wl252-modal-wrapper--styled" :"wl252-modal"
}, this.autoFocus), booking.et.stage("MRLLfYCeHHQeFHVPSJQEZWSLCAae", 1), booking.eventEmitter.trigger("account-onboarding-modal-show")), this.setSkip(), this.gotIt(), this.saveNames(), this.saveStars(), this.placeholderShim(), _r_();
},
autoFocus:function() {
_i_("3da:458"), this.$first = $("#wl252-modal-1"), "msie" !== B.env.b_browser ? this.$first.find("#wl252-firstname").focus() :B.env.b_browser_version > 9 && this.$first.find("input:first").focus(), _r_();
},
placeholderShim:function() {
_i_("3da:459"), $("#wl252-firstname").add("#wl252-lastname").placeholder(), _r_();
},
gotIt:function() {
_i_("3da:460"), $(".wl252-gotit").click(function(e) {
_i_("3da:1290"), e.preventDefault(), $.cookie("wl252-gotit", "true"), booking[sNSStartup].lightbox.hide(), window.location.reload(), _r_();
}), _r_();
},
saveNames:function() {
_i_("3da:461");
var e = this, t = $("#wl252-onboard-name");
t.submit(function() {
_i_("3da:1291"), e.nextModal(1), _r_();
}), _r_();
},
saveStars:function() {
_i_("3da:462");
var e = this, t = $("#wl252-onboard-stars");
t.submit(function() {
_i_("3da:1292"), e.nextModal(2), _r_();
}), _r_();
},
nextModal:function(e) {
_i_("3da:463");
var t = e + 1, i = $("#wl252-modal-" + t);
0 !== i.length ? (booking[sNSStartup].lightbox.hide(), booking[sNSStartup].lightbox.show(i, {
customWrapperClassName:booking.et.track("MRLLfYCeHHQeFHVPSJQEZWSLCAae") ? "wl252-modal-wrapper--styled" :"wl252-modal"
})) :booking[sNSStartup].lightbox.hide(), _r_();
},
setSkip:function() {
_i_("3da:464");
var e = this;
$(".wl252-modal__skip, .wl252-btn-done").click(function(t) {
_i_("3da:1293"), t.preventDefault(), e.nextModal(parseInt($(this).data("modal"), 10)), _r_();
}), _r_();
}
}, window.switchDateStack = function(e, t) {
_i_("3da:160");
var i = e, n = 0;
for ($(e).parents("div").length && (i = $(e).parents("div").get(0)); i; ) "div" === i.nodeName.toLowerCase() && (n++, n == t && (i.style.display = "block")), i = i.nextSibling;
_r_();
}, function() {
_i_("3da:161"), booking[sNSStartup].AaSDdQeRYZDCATAJRXRT = {
init:function() {
_i_("3da:1294");
var e = "/resend_confirm_primary_email", t = this, i = $(".user-notification-email-confirm-resend, .js-notification-confirm-email");
this.$targetParent = i.parent(), i.click(function(n) {
_i_("3da:2187"), n.preventDefault();
var r = $(this).data("target-url") || e;
return r && (i.hide(), t.showLoadingMsg(), $.ajax({
url:r,
dataType:"json",
data:{
aid:B.env.b_aid,
lang:B.env.b_lang
},
success:function(e) {
_i_("3da:2706"), $(".user-notification-email-confirm-default").hide(), e && "sent" === e.status ? t.showSuccessMsg() :t.showErrorMsg(), _r_();
},
error:function() {
_i_("3da:2707"), $(".user-notification-email-confirm-default").hide(), t.showErrorMsg(), _r_();
}
})), _r_(!1);
}), _r_();
},
showLoadingMsg:function() {
_i_("3da:1295"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_loading", this.$targetParent).show(), _r_();
},
showErrorMsg:function() {
_i_("3da:1296"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_retry", this.$targetParent).show(), _r_();
},
showSuccessMsg:function() {
_i_("3da:1297"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_success", this.$targetParent).show(), _r_();
}
}, _r_();
}(), B[sNSStartup].destination_suggestion_on_right = {
init:function() {
_i_("3da:465");
var e, t = $("#searchbox_suggestion_on_right"), i = "destination-section", n = "tab-nav-item-active", r = "tab-content", a = "tab-panel", o = "tab-panel-active", s = ".tab-nav li", _ = 300;
t.delegate(s, "click", function(t) {
_i_("3da:1298"), t.preventDefault(), clearTimeout(e), l($(this)), _r_();
}), t.delegate(s, "mouseover", function() {
_i_("3da:1299");
var t = $(this);
e = setTimeout(function() {
_i_("3da:2352"), l(t), _r_();
}, _), _r_();
}), t.delegate(s, "mouseout", function() {
_i_("3da:1300"), clearTimeout(e), _r_();
});
function l(e) {
_i_("3da:867");
var t = e.closest("." + i), s = t.children("." + r);
e.siblings().removeClass(n), e.addClass(n), s.find("." + a).removeClass(o).eq(e.index()).addClass(o), _r_();
}
_r_();
}
}, booking[sNSStartup].emk_header_bar = function() {
"use strict";
_i_("3da:296");
function e() {
_i_("3da:631");
var e = $("#emk_header_bar");
if (!e.length) return _r_();
var t = function() {
_i_("3da:1687"), e.hide(), $("body").removeClass("emk_header"), _r_();
}, i = function() {
_i_("3da:1688");
var e = booking.env.b_label || "";
$.ajax({
url:"/newsletter/header_bar?label=" + e,
type:"GET",
success:function() {
_i_("3da:2529"), t(), _r_();
},
error:function() {
_i_("3da:2530"), t(), _r_();
}
}), _r_();
};
e.find(".js-close-emk-header-bar").click(function(e) {
_i_("3da:1689"), e.preventDefault(), i(), _r_();
}), _r_();
}
return _r_({
priority:9,
init:e
});
}(), $(function() {
_i_("3da:162");
var e = [ "item_searching", "topten", "item_volcano_eruption", "item_roomtypes", "item_pricing", "item_creditcards", "item_payments", "item_reservation_process", "item_hotelpolicies", "item_confirmation", "item_extrafacilities", "item_cancellation", "item_directions", "item_reviews" ], t = window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
if (null !== t && t.length > 1 && t[1].length) {
var i = t[1].split(",");
i.length && ($(e).each(function(e, t) {
_i_("3da:1882"), hideEl(t), _r_();
}), $.each(i, function(e, t) {
_i_("3da:1883");
var i = $("span#" + t), n = i.prev();
i && n && t.match(/faqa\d+/) && !n.parents("span.faqA").length && (n.clone().appendTo("#faq_deeplink"), i.clone().appendTo("#faq_deeplink")), _r_();
}));
}
if ($(".staticmenustyle").children("li").children("a").each(function(e, t) {
_i_("3da:868"), $(t).click(function() {
_i_("3da:1884"), $("#faq_deeplink").children().remove(), _r_();
}), _r_();
}), location && location.hash) {
var n = location.hash.slice(1);
if ("" != n) for (var r = 0; r < e.length; r++) {
var a = e[r];
a == "item_" + n || a == n ? showEl(a) :hideEl(a);
}
}
_r_();
}), booking.ensureNamespaceExists("feature"), booking.feature.transition = function() {
_i_("3da:297");
var e = document.body || document.documentElement, t = e.style, i = "transition";
if ("string" == typeof t[i]) return _r_(!0);
for (var n = [ "Moz", "webkit", "Webkit", "Khtml", "O", "ms" ], i = i.charAt(0).toUpperCase() + i.substr(1), r = 0; r < n.length; r++) if ("string" == typeof t[n[r] + i]) return _r_(!0);
return _r_(!1);
}(), booking[sNSStartup].fixMail = {
priority:9,
init:function() {
_i_("3da:466");
var e = this;
$(".encrypted").each(function() {
_i_("3da:1301"), $(this).html(e.deCode($(this).text())), $(this).removeClass("encrypted"), _r_();
}), _r_();
},
deCode:function(e) {
return _i_("3da:467"), _r_(e.replace(/[a-zA-Z]/g, function(e) {
return _i_("3da:1302"), _r_(String.fromCharCode(("Z" >= e ? 90 :122) >= (e = e.charCodeAt(0) + 13) ? e :e - 26));
}));
}
}, B.define("caniuse", function(e, t, i) {
_i_("3da:163");
var n = {};
return n.css = function() {
_i_("3da:1009");
var e = {
cache:{},
prefix:[ "webkit", "Moz", "ms", "O" ],
elm:document.createElement("div"),
getCamelCase:function(e) {
_i_("3da:2353");
var t = "", i = e.replace(/^-*/, "").split("-");
return i.map(function(e, i) {
_i_("3da:2648"), t += i > 0 ? e.charAt(0).toUpperCase() + e.substr(1) :e.toLowerCase(), _r_();
}), _r_(t);
},
getPrefixNames:function(e) {
_i_("3da:2354");
var t = [], i = this.getCamelCase(e);
return this.prefix.map(function(e) {
_i_("3da:2649"), t.push(e + i.charAt(0).toUpperCase() + i.substr(1)), _r_();
}), t.unshift(i), _r_(t);
},
checkFeature:function(e) {
_i_("3da:2355");
var t = this.elm, i = !1, n = this.getCamelCase(e), r = this.getPrefixNames(e);
return r.map(function(e) {
_i_("3da:2650"), void 0 !== t.style[e] && (i = !0), _r_();
}), this.cache[n] = i, _r_(i);
},
detection:function(e) {
_i_("3da:2356");
var t = this.getCamelCase(e);
return _r_(void 0 !== this.cache[t] ? this.cache[t] :this.checkFeature(e));
}
};
return _r_(function(t) {
return _i_("3da:1885"), _r_(e.detection(t));
});
}(), n.js = function() {
_i_("3da:1010");
var e = {
_cache:{},
deviceMotion:function() {
return _i_("3da:2357"), _r_(!!window.DeviceMotionEvent);
},
deviceOrientation:function() {
return _i_("3da:2358"), _r_(!!window.DeviceOrientationEvent);
},
geolocation:function() {
return _i_("3da:2359"), _r_(!(!window.navigator || !window.navigator.geolocation));
},
history:function() {
return _i_("3da:2360"), _r_(!(!window.history || !window.history.pushState));
},
svg:function() {
return _i_("3da:2361"), _r_(!(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect));
},
canvas:function() {
_i_("3da:2362");
var e = this._getElm("canvas");
return _r_(!(!e.getContext || !e.getContext("2d")));
},
webGL:function() {
_i_("3da:2363");
var e = this._getElm("canvas");
return _r_(!(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl")));
},
serviceWorker:function() {
return _i_("3da:2364"), _r_(!(!navigator || !navigator.serviceWorker));
},
serviceWorkerNotification:function() {
return _i_("3da:2365"), _r_(!!(window.ServiceWorkerRegistration && "showNotification" in ServiceWorkerRegistration.prototype));
},
push:function() {
return _i_("3da:2366"), _r_(!!window.PushManager);
},
notification:function() {
return _i_("3da:2367"), _r_(!!(window.Notification || window.webkitNotification || window.mozNotification || window.oNotification || window.msNotification));
},
matchMedia:function() {
return _i_("3da:2368"), _r_(!!window.matchMedia);
},
HTMLPictureElement:function() {
return _i_("3da:2369"), _r_(!!window.HTMLPictureElement);
},
touch:function() {
return _i_("3da:2370"), _r_(!!(window.ontouchstart || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch));
},
_test:function(e) {
_i_("3da:2371");
try {
return _r_(this._cache[e] = this[e](e));
} catch (t) {
return _r_(!1);
}
_r_();
},
_getElm:function(e) {
return _i_("3da:2372"), _r_(document.createElement(e));
},
_isCached:function(e) {
return _i_("3da:2373"), _r_(void 0 !== this._cache[e]);
},
_detection:function(e) {
if (_i_("3da:2374"), this._isCached(e)) return _r_(this._cache[e]);
return _r_(this._test(e));
}
};
return _r_(function(t) {
return _i_("3da:1886"), _r_(e._detection(t));
});
}(), n.deviceMotion = !!window.DeviceMotionEvent, n.geolocation = !(!window.navigator || !window.navigator.geolocation), n.history = !(!window.history || !window.history.pushState), n.svg = !(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), _r_(n);
}), B.define("dismiss-item", function(e, t, i) {
_i_("3da:164");
var n = e("jquery");
i.exports = function(e) {
if (_i_("3da:869"), !e) throw new Error("param itemId is required");
return _r_(n.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:e
}
}));
}, _r_();
}), B.define("component/dismissible-item/block", function(e, t, i) {
_i_("3da:165");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3da:1690"), this.options = a(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("3da:1691"), this.$el.on("click", ".js-close", function() {
_i_("3da:2531"), this._dismissItem(), this.hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3da:1692"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("3da:1693"), this.$el.hide(), _r_();
}
}), _r_();
}), B.define("component/dismissible-item/on-init", function(e, t, i) {
_i_("3da:166");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
return _i_("3da:1694"), this.options = a(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), _r_(r(this.options.itemId));
}
}), _r_();
}), B.define("component/bwallet/reward_prompt", function(e, t, i) {
_i_("3da:167");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3da:1695"), this.options = a(this.$el, {
itemId:{
name:"target-item-id",
type:String,
required:!0
}
}), setTimeout(function() {
_i_("3da:2532"), this._bindEvents(), _r_();
}.bind(this), 250), _r_();
},
_bindEvents:function() {
_i_("3da:1696");
var e = $("[data-item-id=" + this.options.itemId + "]");
e.on("click", ".js-close", function() {
_i_("3da:2533"), this._dismissItem(), e.parent().hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3da:1697"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("3da:1698"), this.$el.hide(), _r_();
}
}), _r_();
}), function() {
_i_("3da:168");
var e = "AEJPVLBLJMZIadLae";
B.when({
condition:null != document.getElementById("top")
}).run(function(t) {
_i_("3da:870");
var i = t("jquery"), n = i("#top").find("li.js-uc-language"), r = i(".js-uc-language-content").find(".select_foldout_wrap:eq(1)");
if (!n.length > 0 || !r.length > 0) return _r_(!1);
n.on("click", function(t) {
_i_("3da:1887"), B.et.stage(e, 1), _r_();
}), r.on("click", "li", function(t) {
_i_("3da:1888"), B.et.stage(e, 2), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("3da:169");
var e = B.require("caniuse"), t = "AEJPIKRPXPLAWHIbFYEQYFGXIbYTGSOC", i = window.Notification || window.webkitNotification || window.mozNotification || window.oNotification || window.msNotification;
B.when({
events:"ready",
condition:e.js("notification") && e.js("serviceWorkerNotification") && e.js("push") && "default" === i.permission
}).run(function(e) {
_i_("3da:871");
var n = e("et");
n.track(t) && i.requestPermission(function(e) {
_i_("3da:2188"), "granted" === e ? n.customGoal(t, 1) :"denied" === e ? n.customGoal(t, 2) :"default" === e && n.customGoal(t, 3), _r_();
}), "index" === B.env.b_action ? n.stage(t, 1) :/^(country|city|airport|region|district|landmark)$/.test(B.env.b_action) ? n.stage(t, 2) :"searchresults" === B.env.b_action ? n.stage(t, 3) :"hotel" === B.env.b_action ? n.stage(t, 4) :"book" === B.env.b_action ? n.stage(t, 5) :n.stage(t, 6), _r_();
}), _r_();
}();

function calcage(e, t, i) {
return _i_("3da:4"), s = (Math.floor(e / t) % i).toString(), LeadingZero && s.length < 2 && (s = "0" + s), _r_("<b>" + s + "</b>");
}

function CountBack(e) {
if (_i_("3da:5"), 0 > e) {
if (document.getElementById("cntdwn")) return document.getElementById("cntdwn").innerHTML = FinishMessage, _r_();
} else e > 86400 ? (DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(e, 86400, 1e5)), document.getElementById("flash_days").innerHTML = DisplayStr_days) :document.getElementById("flash_days_wrapper").style.display = "none";
DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(e, 3600, 24)), DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(e, 60, 60)), DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(e, 1, 60)), document.getElementById("flash_hours").innerHTML = DisplayStr_hours, document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes, document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds, CountActive && setTimeout("CountBack(" + (e + CountStepper) + ")", SetTimeOutPeriod), _r_();
}

"undefined" == typeof TargetDate && (TargetDate = "12/31/2020 5:00 AM"), "undefined" == typeof DisplayFormat && (DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."), "undefined" == typeof CountActive && (CountActive = !0), "undefined" == typeof FinishMessage && (FinishMessage = ""), "number" != typeof CountStepper && (CountStepper = -1), "undefined" == typeof LeadingZero && (LeadingZero = !0), CountStepper = Math.ceil(CountStepper), 0 == CountStepper && (CountActive = !1);

var SetTimeOutPeriod = 1e3 * (Math.abs(CountStepper) - 1) + 990, dthen = new Date(TargetDate), dnow = new Date();

CountStepper > 0 ? ddiff = new Date(dnow - dthen) :ddiff = new Date(dthen - dnow), gsecs = Math.floor(ddiff.valueOf() / 1e3), document.getElementById("flash_seconds") && CountBack(gsecs), function(e, t) {
_i_("3da:170");
function i() {
_i_("3da:468"), e.env.b_run_ge_new_newsletter_login && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3da:1889"), t(".user_signup_password").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking.components.define("ge-lightbox", function(e, t) {
"use strict";
_i_("3da:171");
function i(i) {
_i_("3da:469");
var n = i.data, r = i.template, a = i.onOpen || function() {}, o = i.wrapperClassName || "ge-about-lightbox-wrapper", s = t.noop, _ = t.noop;
e.require("profile/profile-menu/profile-menu").hide();
var l = function() {
_i_("3da:1303");
var i = e.env.b_user_genius_status && e.env.b_user_genius_status.b_genius_booking_for_genius;
i && (n.b_genius_booking_for_genius = e.env.b_user_genius_status.b_genius_booking_for_genius, s = function() {
_i_("3da:2442"), t(".modal-wrapper .ge-obd-tl-stamp-outer").loadComponents(), t(".modal-wrapper .ge-onboarding-index__timeline").addClass("animate"), _r_();
}), o += " new-genius-modal-wrapper", _r_();
}, d = "ge_aspiring_about_lightbox" == r || "ge_genius_about_lightbox" == r;
parseInt(e.env.b_reg_user_is_genius) && d && (e.et.goal("genius_about_lighbox_opened"), l()), e.env.b_reg_user_qualify_genius_challenge && d && e.et.goal("aspiring_genius_about_lighbox_opened"), setTimeout(function() {
_i_("3da:1304"), t("#tooltip_wrap").hide(), _r_();
}, 300), t(".user_center_popover").hide(), e.lightbox.show(e.jstmpl(r).render(n), {
customWrapperClassName:o,
hideCallBack:_
}, function(i) {
_i_("3da:1305"), t(".ge-mod-button").click(function() {
return _i_("3da:2189"), e.lightbox.hide(), _r_(!1);
}), s(), a && a(i), _r_();
}), _r_();
}
function n(e) {
_i_("3da:470");
var n = e.element;
t("body").delegate(n, "click", function(t) {
_i_("3da:1306"), t.preventDefault(), i(e), _r_();
}), _r_();
}
return _r_({
setup:n,
open:i
});
}), booking.jstmpl("ge_aspiring_about_lightbox", function() {
_i_("3da:298");
var e, t = [ '\n\n    <div class="ge-about-lightbox-container ge-about-lightbox-v3">\n      <div class="ge-about-lightbox-v3__header u-clearfix">\n        <div class="ge-about-lightbox-v3__header-top u-clearfix">\n          <h1 class="ge-about-lightbox-v3__logo-container">Booking Genius</h1>\n          <p class="ge-about-lightbox-v3__slogan">', "/private/ge_exp_pb_lightbox_header/name", '</p>\n        </div>\n      </div>\n\n      <div class="ge-about-lightbox-v3__blocks-list u-clearfix">\n        <div class="u-clearfix">\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '" height="26px" class="ge-about-lightbox-v3__block-image" alt="">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_pay_less_members_usp/name", "</strong></h3>\n            <p>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block is-center-has-plus">\n            <img src="', "</strong>", "<strong>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '</p>\n          </div>\n        </div>\n\n        <div class="ge-about-lightbox-v3__explanation u-clearfix">\n          <div class="ge-about-lightbox-v3__genius-brand">\n            <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n              <i class="bicon-dotgeniusbg"></i>\n              <i class="bicon-dotgeniusfold"></i>\n              <i class="bicon-dotgenius"></i>\n            </span>\n          </div>\n\n          <div class="ge-about-lightbox-v3__genius-about">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "</strong></h3>\n            ", "\n                <p>", "/private/ge_exp_lightbox_what_is_genius_desc_2/name", "Booking.com", "</p>\n            ", "\n          </div>\n        </div>\n      </div>\n    </div>\n\n" ], i = [ "ge_exp_pay_less_members_desc", "ge_exp_lightbox_discount_header", "ge_exp_lightbox_discount_desc", "ge_exp_lightbox_freebies_header", "ge_exp_lightbox_freebies_desc", "ge_exp_pb_lightbox_what_is_genius", "ge_exp_lightbox_what_is_genius_desc" ];
return _r_(function(n) {
_i_("3da:872");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], a.STATIC_HOSTNAME("/static/img/genius-lightbox-bestprice.png", 0, 0, 0), t[3], a.ME(t[4], a.MB, a.MN, null), t[5], a.MB(i[0]), t[6], a.STATIC_HOSTNAME("/static/img/genius-lightbox-discount.png", 0, 0, 0), t[3], a.MB(i[1]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[2]), n.shift(), e), t[9], a.STATIC_HOSTNAME("/static/img/genius-lightbox-perks.png", 0, 0, 0), t[3], a.MB(i[3]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[4]), n.shift(), e), t[10], a.MB(i[5]), t[11] ].join(""), r += a.MJ(a.track_experiment("cQZeCJdRGJMdPIHAGUYfWe")) ? [ t[12], (n.unshift({
b_companyname:t[14]
}), e = a.ME(t[13], a.MB, a.MN, null), n.shift(), e), t[15] ].join("") :[ t[12], (n.unshift({
b_companyname:t[14],
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[6]), n.shift(), e), t[15] ].join(""), r += t[16], _r_(r);
});
}()), booking.jstmpl("ge_genius_about_lightbox", function() {
_i_("3da:299");
var e, t = [ "\n    ", "\n\n", '\n\n\n\n<div class="ge_new_genius_modal ge-modal-container">\n    <aside>\n        <h1 class="ge-mod-genius-logo-container">\n                <span class="ge-iconfont-plate ge-mod-genius-logo yellow">\n                    <i class="bicon-dotgeniusbg"></i>\n                    <i class="bicon-dotgeniusfold"></i>\n                    <i class="bicon-dotgenius"></i>\n                </span>\n        </h1>\n        <h1 class="ge-main-heading">\n            ', "/private/ge_deepen_new_genius_lbox_header/name", '\n        </h1>\n    </aside>\n    <div class="right-side-content">\n        ', '\n            <div class="timeline-container">\n                <div class="ge-onboarding-index__timeline">\n                    <div class="ge-obd-tl-top">\n                        <ul class="ge-obd-tl-stamp-list clearfix">\n\n                            ', "\n                                ", "\n        ", "\n            ", "/private/ge_challenge_past_1_onb_widget/name", "\n                ", "/private/ge_challenge_past_2_onb_widget/name", "/private/ge_challenge_past_3_onb_widget/name", "/private/ge_challenge_past_4_onb_widget/name", "/private/ge_challenge_past_5_onb_widget/name", '\n\n    <li class="ge-obd-tl-stamp">\n        ', '\n            <a href="javascript:;" class="ge-obd-tl-link">\n        ', '\n\n        <div class="ge-obd-tl-stamp-outer"\n             data-component="tt-fancy" data-delay="0"\n             data-content="<div class=\'ge-challenge-tt\'><h6>', '</h6></div>">\n            ', '\n                <div class="ge-obd-tl-stamp-img"\n                     style="background-image: url(\'', "')\">\n                </div>\n            ", '\n                <i class="bicon-map-pin ge-obd-tl-stamp-icon"></i>\n            ', "\n        </div>\n\n    ", "\n        </a>\n    ", "\n</li>\n", "\n                            ", '\n                        </ul>\n\n                        <span class="ge-iconfont-plate  white   ">\n                            <i class="bicon-dotgeniusbg"></i>\n                            <i class="bicon-dotgeniusfold"></i>\n                            <i class="bicon-dotgenius"></i>\n                        </span>\n                    </div>\n                    <div class="ge-obd-tl-bottom">\n                        <ul class="ge-obd-tl-tick-list clearfix">\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--yellow">\n                                <i class="bicon-actick"></i>\n                            </li>\n                        </ul>\n                        <div class="ge-obd-tl-progress">\n                            <span class="ge-obd-tl-progress__cover"></span>\n                            <span class="ge-obd-tl-progress__bar"></span>\n                        </div>\n                    </div>\n                </div>\n                <div class="timeline-text">\n                    ', "\n                        ", "/private/ge_deepen_new_genius_lbox_welcome/name", "\n                    ", "/private/ge_deepen_new_genius_lbox_welcome_unknown/name", "\n                </div>\n            </div>\n        ", '\n            <div class="timeline-container">\n                <p style="width:520px; color: red; font-weight: bold;">Internal: The Genius timeline cannot be displayed because this user was "forced" to become Genius in the database (or you\'re using a developer account). A test account is available <a href="https://wiki.booking.com/display/GNS" target="_blank">here</a>.</p>\n            </div>\n        ', '\n        <div class="benefits-section">\n            <div class="benefits-heading">\n                ', "/private/ge_deepen_new_genius_lbox_start/name", '\n            </div>\n            <div class="content-row">\n                <div class="big-icon">\n                    <span class="ge-10-icon">', "/private/ge_deepen_new_genius_lbox_icon/name", '</span>\n                </div>\n                <div class="benefit-text">\n                    ', "/private/ge_deepen_new_genius_lbox_get/name", '\n                </div>\n            </div>\n\n            <div class="content-row">\n                <div class="big-icon">\n                        <span class="genius-extended-module genius-extended-module-freebies">\n                            <i class="bicon-gift"></i>\n                        </span>\n                </div>\n                <div class="benefit-text">\n                    ', "/private/ge_deepen_new_genius_lbox_freebies/name", "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", "\n" ], i = [ "b_genius_booking_for_genius", "city", "hotel_name", "fe_ge_stamp_message", "b_index", "b_city_url", "photo_url", "city_url", "b_genius_user", "b_user_genius_status", "b_is_internal_ip" ];
return _r_(function(n) {
_i_("3da:873");
var r = "", a = this.fn;
function o(e) {
_i_("3da:1307"), e += t[0], a.MN("ufi_name", a.MB(i[1]) || a.MB(i[2])), e += t[0], a.MN("start_highlight", "<b>"), e += t[0], a.MN("end_highlight", "</b>"), e += t[0];
var n = "";
n += t[7];
var r = a.MC(i[4]);
return n += a.MJ(r + "" == "0") ? [ t[8], a.ME(t[9], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "1") ? [ t[8], a.ME(t[11], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "2") ? [ t[8], a.ME(t[12], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "3") ? [ t[8], a.ME(t[13], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "4") ? [ t[8], a.ME(t[14], a.MB, a.MN, null), t[10] ].join("") :[ t[8], a.ME(t[9], a.MB, a.MN, null), t[7] ].join(""), n += t[0], a.MN(i[3], n), e += t[0], a.MN("start_highlight", ""), e += t[0], a.MN("end_highlight", ""), e += t[0], a.MN("ufi_name", ""), e += t[15], a.MD(i[5]) && (e += t[16]), e += [ t[17], a.MB(i[3]), t[18] ].join(""), e += a.MD(i[6]) ? [ t[19], a.STATIC_HOSTNAME(a.MB(i[6]), 0, 0, 0), t[20] ].join("") :t[21], e += t[22], a.MD(i[5]) && (e += t[23]), e += t[24], _r_(e);
}
function s(r) {
if (_i_("3da:1308"), r += t[1], r += [ t[2], a.ME(t[3], a.MB, a.MN, null), t[4] ].join(""), a.MJ(a.MG((a.MC(i[9]) || {}).b_genius_booking_for_genius))) {
r += t[5];
var s = a.MC(i[0]) || [];
n.unshift(null);
for (var _ = 1, l = s.length; l >= _; _++) n[0] = s[_ - 1], r += t[6], n.unshift({
b_city:a.MB(i[1]),
b_city_url:a.MB(i[7]),
b_hotel_name:a.MB(i[2]),
b_index:_,
b_photo_url:a.MB(i[6])
}), r = o(r), n.shift(), r += t[25];
n.shift(), r += t[26], r += a.MJ(a.MG((a.MC(i[8]) || {}).first_name)) ? [ t[27], (n.unshift({
user_name:a.MG((a.MC(i[8]) || {}).first_name)
}), e = a.ME(t[28], a.MB, a.MN, null), n.shift(), e), t[29] ].join("") :[ t[27], a.ME(t[30], a.MB, a.MN, null), t[29] ].join(""), r += t[31];
} else a.MD(i[10]) && (r += t[32]);
return r += [ t[33], a.ME(t[34], a.MB, a.MN, null), t[35], a.ME(t[36], a.MB, a.MN, null), t[37], a.ME(t[38], a.MB, a.MN, null), t[39], a.ME(t[40], a.MB, a.MN, null), t[41] ].join(""), _r_(r);
}
return r += t[0], r = s(r), r += t[42], _r_(r);
});
}()), booking.jstmpl("ge_trial_optin_lightbox", function() {
_i_("3da:300");
var e = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n    \n        <img src="', '" alt="Genius Trial" class="genius-trial-optin-desktop--giftbox">\n\n        <div class="ge-toi-mid-bl u-clearfix">\n            <h1>', "/private/ge_expand_trial_login_lbox_header/name", "</h1>\n            <p>", "/private/ge_expand_trial_login_lbox_subheader/name", '</p>\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-later" id="">', "/private/ge_expand_trial_login_lbox_cta_1/name", '</a>\n            \n            <form action="', "/genius_activate_trial", '" method="post">\n                <input type="hidden" name="return_url" value="', '">\n                <input type="hidden" name="campaign_id" value="', '">\n                <input type="hidden" name="src" value="lb">\n                <input type="submit" class="button genius-week-button" value="', "/private/ge_hp_start_ge_week/name", '">\n            </form>\n        </div>\n\n    </div>\n\n' ], t = [ "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id" ];
return _r_(function(i) {
_i_("3da:874");
var n = "", r = this.fn;
return n += [ e[0], r.STATIC_HOSTNAME("/static/img/genius/genius_trial/tier-gift.png", 0, 0, 0), e[1], r.ME(e[2], r.MB, r.MN, null), e[3], r.ME(e[4], r.MB, r.MN, null), e[5], r.ME(e[6], r.MB, r.MN, null), e[7], r.MC(t[0]), e[8], r.MC(t[1]), e[9], r.MC(t[2]), e[10], r.MB(t[3]), e[11], r.ME(e[12], r.MB, r.MN, null), e[13] ].join(""), _r_(n);
});
}()), booking.jstmpl("ge_pilot_markets_lightbox", function() {
_i_("3da:301");
var e, t = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n\n        <div class="ge-trial-optin-lightbox-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 40px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="ge-toi-mid-bl u-clearfix">\n\n            ', "\n                <h1>", "/private/ge_expand_already_genius_thanks/name", "</h1>\n            ", "/private/ge_expand_suspect_genius/name", "\n\n\n            <p>", "/private/ge_expand_already_genius_thanks_desc/name", '</p>\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-button is-alone" id="">', "/private/ge_expand_got_it_cta/name", "</a>\n        </div>\n\n    </div>\n\n" ], i = [ "b_reg_user_personal_minimum" ];
return _r_(function(n) {
_i_("3da:875");
var r = "", a = this.fn;
return r += t[0], r += a.MJ(a.MG(((a.MC(i[0]) || [])[0] || {}).b_reg_user_detail_firstname)) ? [ t[1], (n.unshift({
user_name:a.MG(((a.MC(i[0]) || [])[0] || {}).b_reg_user_detail_firstname)
}), e = a.ME(t[2], a.MB, a.MN, null), n.shift(), e), t[3] ].join("") :[ t[1], a.ME(t[4], a.MB, a.MN, null), t[3] ].join(""), r += [ t[5], a.ME(t[6], a.MB, a.MN, null), t[7], a.ME(t[8], a.MB, a.MN, null), t[9] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_genius_week_lightbox", function() {
_i_("3da:302");
var e, t = [ "\n    \n    ", "\n        ", "\n    ", '\n\n  <div class="genius-week-lightbox ', '">\n\n  ', '\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n      </span>\n      <img src="', '" alt="Genius Trial" class="genius-trial-desktop--giftbox">\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">\n        ', "\n            ", "/private/ge_expand_zero_trial_index_index_lightbox/name", "/private/ge_expand_zero_trial_index_index_lightbox_unknown/name", "\n      </h2>\n      <p>", "/private/ge_expand_zero_trial_index_index_lightbox_discount/name", '</p>\n      <hr>\n    </div>\n\n    <div class="genius-week-lightbox-block2 u-clearfix">\n        <span  class="ge-iconfont-extended ge-iconfont-extended-dd ge10-badge">\n            <i class="bicon-bookingdotgenius"></i>\n            <span class="genius-extended-module genius-extended-module-discount ">\n            <i class="ge-discount-rate">10%</i>\n            </span>\n        </span>\n        <p>', "/private/ge_expand_zero_trial_index_index_look_for_logo/name", '</p>\n    </div>\n\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_expand_zero_trial_index_index_lightbox_cta/name", "</a>\n  ", '\n    \n  \n\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n        ', '\n        <span class="genius-week-word-brand">week</span>\n        ', '\n      </span>\n\n      <h4 class="genius-week-headline">', "/private/genius_pp_travel_rewards_programme/name", '</h4>\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">', "/private/ge_lighbox_ge_week_headline/name", '</h2>\n\n      <div class="genius-week-itens u-clearfix">\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-pricetag"></i>\n          </span>\n          <h3>', "/private/ge_10_percent_headline/name", "</h3>\n          <p>", "/private/ge_email_gw_discount/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-gift"></i>\n          </span>\n          <h3>', "/private/ge_free_travel_perks_headline/name", "/private/ge_email_gw_free_perks/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-olderphone"></i>\n          </span>\n          <h3>', "/private/ge_faster_service/name", "/private/ge_email_gw_faster_service/name", '</p>\n        </div>\n      </div>\n\n      <div class="genius-week-about u-clearfix">\n        <div class="genius-week-ge-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="genius-week-text">\n          <h2>', "/private/ge_lightbox_gw_want_to/name", "</h2>\n          <p>", "/private/ge_lightbox_gw_good_things/name", '</p>\n        </div>\n      </div>\n    </div>\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_ligtbox_gw_cta/name", "</a>\n    ", "\n  </div>\n  \n" ], i = [ "fe_is_zero_ge_trial_desktop_user", "fe_zero_trial_class", "b_genius_user", "fe_is_zero_ge_trial_init_lightbox" ];
return _r_(function(n) {
_i_("3da:876");
var r = "", a = this.fn;
return r += t[0], a.MD(i[0]) && (r += t[1], a.MN("fe_zero_trial_class", "ge-zero-trial-lightbox"), r += t[2]), r += [ t[3], a.MB(i[1]), t[4] ].join(""), a.MD(i[3]) ? (r += t[2], a.MN("startStyle", "<strong>"), r += t[2], a.MN("endStyle", "</strong>"), r += [ t[5], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/trial-gift-open.png", 0, 0, 0), t[6] ].join(""), r += a.MJ(a.MG((a.MC(i[2]) || {}).first_name)) ? [ t[7], (n.unshift({
user_name:a.MG((a.MC(i[2]) || {}).first_name)
}), e = a.ME(t[8], a.MB, a.MN, null), n.shift(), e), t[1] ].join("") :[ t[7], a.ME(t[9], a.MB, a.MN, null), t[1] ].join(""), r += [ t[10], a.ME(t[11], a.MB, a.MN, null), t[12], a.ME(t[13], a.MB, a.MN, null), t[14], a.ME(t[15], a.MB, a.MN, null), t[16] ].join("")) :(r += t[17], a.MD(i[0]) || (r += t[18]), r += [ t[19], a.ME(t[20], a.MB, a.MN, null), t[21], a.ME(t[22], a.MB, a.MN, null), t[23], a.ME(t[24], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27], a.ME(t[28], a.MB, a.MN, null), t[25], a.ME(t[29], a.MB, a.MN, null), t[30], a.ME(t[31], a.MB, a.MN, null), t[25], a.ME(t[32], a.MB, a.MN, null), t[33], a.ME(t[34], a.MB, a.MN, null), t[35], a.ME(t[36], a.MB, a.MN, null), t[37], a.ME(t[38], a.MB, a.MN, null), t[39] ].join("")), r += t[40], _r_(r);
});
}()), booking.jstmpl("ge_perks_lightbox", function() {
_i_("3da:303");
var e, t = [ '\n  <div class="ge-about-lightbox-container ge-genius-tier-lightbox">\n    <h2 class="ge-genius-tier-lightbox-title"> ', "/private/ge_lightbox_trips_are/name", ' </h2>\n    <p class="ge-genius-tier-lightbox-text"> ', "/private/ge_lightbox_you_made/name", ' </p>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_new/name", '\n        <span class="ge-freebies-expires">', "/private/ge_lightbox_expires/name", ' </span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n            <span class="genius-extended-module-standalone-container">\n                <span class="genius-extended-module genius-extended-module-standalone">\n                    <i class="bicon-coffee"></i>\n                </span>\n            </span>\n            <span class="ge-freebie-item-text">\n                ', "/private/ge_perk_free_breakfast/name", '\n            </span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_travel_perks/name", "/private/ge_lightbox_no_expiry/name", '</span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n              <i class="ge-discount-rate">10%</i>\n            </span>\n          </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/1/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-earlycheckin"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/3/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-latecheckout"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/2/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-shuttlesmall"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/4/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bike"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/6/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bar"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/5/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-parking"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/8/name", '\n          </span>\n        </li>\n      </ul>\n    </div>\n\n    <span class="genius-lightbox-tip">', "/private/ge_lightbox_some_travel_perks/name", "</span>\n  </div>\n" ], i = [ "first_name", "plus_end_date" ];
return _r_(function(n) {
_i_("3da:877");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], (n.unshift({
first_name:a.MB(i[0])
}), e = a.ME(t[3], a.MB, a.MN, null), n.shift(), e), t[4], a.ME(t[5], a.MB, a.MN, null), t[6], (n.unshift({
numeric_date:a.MB(i[1])
}), e = a.ME(t[7], a.MB, a.MN, null), n.shift(), e), t[8], a.ME(t[9], a.MB, a.MN, null), t[10], a.ME(t[11], a.MB, a.MN, null), t[6], a.ME(t[12], a.MB, a.MN, null), t[13], a.ME(t[14], a.MB, a.MN, null), t[15], a.ME(t[16], a.MB, a.MN, null), t[17], a.ME(t[18], a.MB, a.MN, null), t[19], a.ME(t[20], a.MB, a.MN, null), t[21], a.ME(t[22], a.MB, a.MN, null), t[23], a.ME(t[24], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27], a.ME(t[28], a.MB, a.MN, null), t[29] ].join(""), _r_(r);
});
}()), booking[sNSStartup].ge_show_onb_msg = {
init:function() {
_i_("3da:471");
var e = function() {
_i_("3da:1309"), $.ajax({
type:"post",
url:"/genius_onb_message_seen",
data:{}
}), _r_();
}, t = null;
if ("" !== B.env.b_ge_should_show_onboarding_on_login && (t = parseInt(B.env.b_ge_should_show_onboarding_on_login, 10)), 1 === t) {
var i = B.components.require("ge-lightbox");
i.open({
data:{
b_genius_user:B.env.b_genius_user || {}
},
template:"ge_aspiring_about_lightbox",
onOpen:function() {
_i_("3da:2190"), B.eventEmitter.bind("modal:close", e), _r_();
}
});
}
_r_();
}
}, function(e) {
_i_("3da:172");
var t, i = {
"SH:seen":"sh_seen",
"SH:clicked":"sh_clicked",
"SH:removed":"sh_removed",
"SH:sh-timestamp-today":"sh_resume_last_24",
"SH:sh-timestamp-24-48-hrs":"sh_resume_last_24_48",
"SH:sh-timestamp-48-72-hrs":"sh_resume_last_48_72",
"SH:sh-timestamp-72-96-hrs":"sh_resume_last_72_96"
};
for (t in i) i.hasOwnProperty(t) && e.eventEmitter.one(t, function(t) {
return _i_("3da:2006"), _r_(function() {
_i_("3da:2443"), e.et.goal(t), _r_();
});
}(i[t]));
_r_();
}(booking), Array.prototype.walk || (Array.prototype.walk = function(e) {
_i_("3da:304");
for (var t = [], i = this.length; i--; ) t.push(e(this[i]));
return _r_(t.reverse());
}), Array.prototype.flatten || (Array.prototype.flatten = function() {
_i_("3da:305");
for (var e = [], t = -1, i = this.length; ++t < i; ) e = e.concat(this[t].constructor == Array ? this[t].flatten() :this[t]);
return _r_(e);
}), booking.ensureNamespaceExists("google"), booking.google.returnAnalyticsTrackingString = function(e) {
_i_("3da:173"), e = e && "object" == typeof e && Object.assign ? Object.assign({}, booking.env, e) :booking.env;
var t = [], i = e.b_this_urchin.replace(/&amp;$/, "");
return i = i.replace(/(&amp;)?(auth_key|bn|pin|reset_hash|invitation_token)([^;&]+)/gi, ""), t[t.length] = i, "hotel" === e.b_action && 0 === e.b_hotel_blocks && e.b_checkin_date && (t[t.length] = "ur_honovail=1"), -1 != window.location.href.indexOf("redirected=") && (-1 != window.location.href.indexOf("source=") ? t[t.length] = "redirected=" + window.location.href.match(/source=(\w+)/)[1] :t[t.length] = "redirected=1"), e.b_autoextension_radius_km && (t[t.length] = "sr_ae=" + e.b_autoextension_radius_km), +e.b_availability_checked || e.b_checkin_date ? t[t.length] = "ur_dat=1" :t[t.length] = "ur_nodat=1", "search" === e.b_action && e.b_multiple_destinations_found && (t[t.length] = "ur_srdis=1"), "searchresults" === e.b_action && "undefined" != typeof e.b_available_hotels && (0 == e.b_available_hotels ? t[t.length] = "ur_hc=0" :e.b_available_hotels <= 15 ? t[t.length] = "ur_hc=1" :t[t.length] = "ur_hc=2"), e.b_book_stage && (t[t.length] = "stage=" + e.b_book_stage), _r_(t.flatten().join("&amp;"));
}, booking.ensureNamespaceExists("google"), B.define("ga-tracker", function(e, t) {
_i_("3da:174");
var i, n, r = (B && B.debug && B.debug("ga"), window.ga, window._gaq), a = e("promise"), o = !1;
function s(e, t) {
_i_("3da:472"), "undefined" != typeof t && ("undefined" != typeof r && r.push([ "_trackPageview", t ]), window.ga && window.ga("send", "pageview", t)), _r_();
}
function _(e, t, i, n, a) {
_i_("3da:473"), "undefined" == typeof a && (a = 1), "undefined" != typeof e && ("undefined" != typeof r && r.push([ "_trackEvent", e, t, i, n, !0 ]), window.ga && window.ga("send", {
hitType:"event",
eventCategory:e,
eventAction:t,
eventLabel:i,
eventValue:n,
nonInteraction:1
})), _r_();
}
function l() {
_i_("3da:474"), o = !0, n && (n(), n = null), _r_();
}
function d() {
return _i_("3da:475"), i || (i = new a(function(e) {
_i_("3da:2007"), o ? e() :n = e, _r_();
})), _r_(i);
}
function c(e, t, i, n) {
if (_i_("3da:476"), !window.ga) return _r_();
if ("undefined" == typeof e) return _r_();
if (!t || "string" != typeof t) return _r_();
if ("string" == typeof i && i && (i = +i), isNaN(i) || !isFinite(i)) return _r_();
if ((!n || "string" != typeof n) && void 0 !== n) return _r_();
d().then(function() {
_i_("3da:1310"), window.ga("send", {
hitType:"timing",
timingCategory:e,
timingVar:t,
timingValue:i,
timingLabel:n
}), _r_();
}), _r_();
}
t.errorTracker = "Error", t.clickTracker = "Click", t.changeTracker = "Change", t.hoverTracker = "Hover", t.mapTracker = "Map", t.pageviewTracker = "Pageview", t.viewTracker = "View", t.cityTracker = "City", t.groupTracker = "Group", t.cardTracker = "Credit Card", t.comparisonTracker = "Hotel Comparison", t.userProfileTracker = "User profile", t.bookProcessTracker = "Book process", t.bookingProcessTracker = "Booking Process", t.hotelPageTracker = "Hotel Page", t.reviewSearchTracker = "Review search", t.BBToolTracker = "Business Bookers", t.TripPlannerTracker = "Trip Planner", t.growlTracker = "Growl", t.WebMessagingTracker = "Web Messaging", t.SearchResultsTracker = "Search Results", t.SearchResultsFilterTracker = "Filter", t.SearchResultsFilterMapTracker = "Filter - Map", t.articlesTracker = "Articles", t.DSFTracker = "DSF", t.ugcdTracker = "UGC Display", t.ugccDestinationTracker = "Destination UGC", t.ugccPropertyTracker = "Property UGC", t.assistantTracker = "Messaging V2", t.referralAdvocateTracker = "Referral - Advocate", t.referralFriendTracker = "Referral - Friend", t.Rewards = "Rewards", t.SearchBoxTracker = "Searchbox", t.TIMING = {}, t.TIMING.PERFORMANCE = "Browser Performance", t.trackEvent = _, t.trackTiming = c, t.trackPageview = s, t.setPageAsTracked = l, _r_();
}), B.require([ "et", "jquery", "ga-tracker" ], function(e, t, i) {
if (_i_("3da:175"), "mdot" == B.env.b_site_type || "www" == B.env.b_site_type && B.env.b_new_ga_track) {
var n = [ "click", "mouseenter", "mouseleave" ], r = booking.debug("GA"), a = function(e) {
if (_i_("3da:1311"), e && e.category) return _r_([ "category ->", e.category, "; action ->", e.action, "; label ->", e.label, "; value ->", e.value ].join(" "));
if (e && e.pageview) return _r_("link -> " + e.pageview);
_r_();
};
n = n.join(" "), n && t("body").on(n, "[data-ga-track]", function() {
_i_("3da:1890");
var e, o, s, _, l, d, c = t(this), u = c.data("ga-track");
u && (u.split("|").length >= 2 ? (u = u.split("|"), e = u[0], u[1].indexOf("pageview:") ? (o = u[1], s = u[2] ? u[2] :"", _ = u[3] ? u[3] :"", l = u[4] ? u[4] :"") :d = u[1].substr(u[1].indexOf(":") + 1)) :(e = u, o = c.data("ga-category"), s = c.data("ga-action"), _ = c.data("ga-label"), l = c.data("ga-value"), d = c.data("ga-track-pageview")), e && "string" == typeof e && n.indexOf(e.toLowerCase()) > -1 ? o && s && _ ? ("number" == typeof l && l >= 0 ? i.trackEvent(o, s, _, l) :i.trackEvent(o, s, _), r.log("trackEvent:", a({
category:o,
action:s,
label:_,
value:l
}))) :d && (i.trackPageview(null, d), r.log("trackPageview:", a({
pageview:d
}))) :r.warn("trackEvent: DOM Event:" + e + " not supported!")), _r_();
});
}
_r_();
}), window.booking.google ? window.booking.google = $.extend(window.booking.google, B.require("ga-tracker")) :window.booking.google = B.require("ga-tracker"), function() {
_i_("3da:176");
var e = B.require("jquery");
booking[sNSStartup].event_tracking = {
priority:9,
init:function() {
if (_i_("3da:1312"), "undefined" != typeof _gaq) {
e(window).on("load", function() {
if (_i_("3da:2444"), "undefined" != typeof booking.env.b_changed_language) {
var e = booking.env.b_lang_for_url, t = booking.env.b_changed_language;
booking.google.trackEvent(booking.google.changeTracker, "Language", "From " + t + " to " + e);
}
_r_();
});
var t = function(e) {
return _i_("3da:2445"), _r_(e.id.match(/\d{5}/) ? e.className ? "." + e.className :e.tagName.toLowerCase() :e.id ? "#" + e.id :e.className ? "." + e.className :e.tagName.toLowerCase());
};
e("body").delegate(".tracked a, .tracked .trackit", "click", function(i) {
_i_("3da:2446");
var n = [];
e(this).parentsUntil(".tracked", "div").each(function() {
_i_("3da:2669"), n.unshift(t(this)), _r_();
}), n.push(t(this)), booking.google.trackEvent(booking.google.clickTracker, "Action: " + booking.env.b_action, n.join(" > ")), _r_();
});
function i(e, t) {
_i_("3da:2191"), t && booking.google.trackEvent(booking.google.groupTracker, t.rooms + " rooms | " + t.adults + " adults | " + t.children + " kids" + (t.children ? " (" + t.childrenAges.join(" | ") + ")" :""), booking.env.b_action), _r_();
}
e("#frm").submit(function(t) {
_i_("3da:2447"), t.isDefaultPrevented() || i(e.Event(), B.search.groupStorage.value), _r_();
});
for (var n = e(".error, .errorSimpleMsg"), r = 0; r < n.length; r++) if (0 == e(n[r]).hasClass("disabled")) {
var a = n[r].getAttribute("rel");
null != a && booking.google.trackEvent(booking.google.errorTracker, "Display", a);
}
this.bindCustomTrackClick(), "undefined" != typeof trigger_error404_event_tracking && 1 == trigger_error404_event_tracking && booking.google.trackEvent(booking.google.pageviewTracker, "404 Error", document.location.pathname + document.location.search + "&from=" + document.referrer), "hotel" === booking.env.b_action && e("#hcta").click(function() {
_i_("3da:2599");
var e = "Hotel cta";
booking.env.track_htca && (e += "v" + booking.env.track_htca), booking.google.trackEvent(booking.google.clickTracker, e, this.getAttribute("data-id")), _r_();
}), e("#bookconditions").click(function() {
_i_("3da:2448"), booking.google.trackEvent(booking.google.clickTracker, "Booking Conditions", "Link clicked"), _r_();
}), e("#localcurr_dis a").mouseenter(function() {
_i_("3da:2449"), booking.google.trackEvent(booking.google.clickTracker, "Action: " + booking.env.b_action, "hover_tooltip_local_currency"), _r_();
}), booking.env.smart_deals_count && booking.env.smart_deals_count > 0 && booking.google.trackEvent(booking.google.viewTracker, "Smart deal filter", booking.env.smart_deals_count + " deals displayed"), booking.env.b_track_search_from_tool && B.google.trackEvent(B.google.BBToolTracker, "Search - search from tool", "Search Page");
}
return _r_(!0);
},
bindCustomTrackClick:function(t) {
_i_("3da:1313"), !t || t.length ? t = e(".custom_track") :t.hasClass(".custom_track") || (t = t.find(".custom_track")), t.click(function() {
_i_("3da:2192");
var t = e(this).attr("data-trackname"), i = e(this).attr("data-track-prefix") || booking.env.b_action, n = e(this).attr("data-tracker") || "userProfileTracker";
t && booking.google[n] && booking.google.trackEvent(booking.google[n], i + " : " + t, booking.env.b_action), _r_();
}), _r_();
}
}, _r_();
}(), function(e, t, i, n, r) {
_i_("3da:177");
var a = !1, o = !1, s = [], _ = 0, l = function(i) {
_i_("3da:878"), _ && console.log("googleInit");
var r;
if (!a) {
a = !0, r = t.createElement("script"), r.type = "text/javascript", r.src = n.google_map_current_url;
var l = function() {
_i_("3da:2193"), o = !0;
for (var e, t = 0, i = s.length; i > t; t++) e = s[t], e.cb && e.cb.apply(e.ctx || null, e.args || []);
_r_();
};
e.rerunCreateMap = l, $("head").append(r);
}
o || s.push(i), _r_();
};
i.google_geo_api = {
loaded:function() {
return _i_("3da:1314"), _r_(o && e.google && google.maps);
},
load:l
}, _r_();
}(window, document, booking, booking.env, sNSStartupLoad), B.when({
events:"load"
}).run(function() {
if (_i_("3da:178"), "undefined" == typeof B.env.google_analytics_tracking_enabled || !B.env.google_analytics_tracking_enabled) return _r_();
var e, t = booking.env, i = t.b_action;
t.survey_key && $('div#survey[surveykey="' + t.survey_key + '"] button[value="accept"]').click(function() {
_i_("3da:1315"), booking.google.trackPageview("click", t.surveytracklink), _r_();
}), "confirmation" === i && $("#external_review_invite_link").click(function() {
_i_("3da:1316"), booking.google.trackPageview("click", "/outgoinglink/confirmation/external_review_invite/"), _r_();
}), /error/.test(i) && (e = (t.b_referrer || "").split("?")[0].replace(window.location.origin, "") || "dont-know", booking.google.trackPageview("click", "/error-action/" + i + "/caused-by" + e)), _r_();
}), B.define("gta/impression-tracking", [ "et", "jquery" ], function(e, t) {
_i_("3da:179");
var i = !0, n = [], r = [], a = null;
function o(e, t) {
_i_("3da:477");
var i = e.getAttribute("id");
i || (i = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(), e.setAttribute("id", i)), B.when({
events:[ "view #" + i, "gta:lightbox:init #" + i ]
}).run(function() {
_i_("3da:1317"), l(t.getCurrentPlacementName(), t.getMethodName()), _r_();
}), _r_();
}
function s(e) {
_i_("3da:478");
var t = e.getAttribute("id"), i = e.getAttribute("data-placement");
t || (t = ("gta-link-" + i).toLowerCase(), e.setAttribute("id", t)), B.when({
events:[ "view #" + t, "gta:lightbox:init #" + t ]
}).run(function() {
_i_("3da:1318"), l(i, "link"), _r_();
}), _r_();
}
function _() {
_i_("3da:479"), n.length && r.length && (d({
placement:n.join("|"),
method:r.join("|")
}), n.length = 0, r.length = 0), _r_();
}
function l(e, t) {
if (_i_("3da:480"), !e || !t) return _r_();
i ? (clearTimeout(a), n.push(e), r.push(t), a = setTimeout(_, 500)) :d({
placement:e,
method:t
}), _r_();
}
function d(e) {
_i_("3da:481"), t.ajax({
url:"/gta_impression",
type:"POST",
data:e
}), _r_();
}
return _r_({
trackWidgetImpressionOnView:function(e, t) {
_i_("3da:1011"), o(e, t), _r_();
},
trackLinkImpressionOnView:function(e) {
_i_("3da:1012"), s(e), _r_();
},
trackImpression:function(e, t) {
_i_("3da:1013"), l(e, t), _r_();
}
});
}), B.require([ "gta/impression-tracking", "jquery" ], function(e, t) {
_i_("3da:180"), t(".gta-link-track").each(function(t, i) {
_i_("3da:879"), e.trackLinkImpressionOnView(i), _r_();
}), _r_();
}), B.define("gta/country-flags-dropdown", [ "et" ], function(e) {
return _i_("3da:181"), _r_({
init:function(t, i) {
_i_("3da:1014");
var n = i || $(".gta-country-flag-dropdown").get(0), r = $(".gta-cfd-list", n), a = $(".gta-cfd-value", n), o = a.children(".cprefix"), s = a.children('[class^="cflag"]').get(0), _ = r.children(), l = !1, d = $(document);
t.setCountryCode(o.data("prefix"), {
isUserAction:!1
});
function c() {
_i_("3da:1700"), r.hide(), l = !1, d.unbind("click", h), d.unbind("keypress", f), _r_();
}
function u() {
_i_("3da:1701"), r.show(), l = !0, d.bind("click", h), d.bind("keypress", f), e.stage("dLPLOefMXWSSIVDdWRe", 1), _r_();
}
function h(e) {
_i_("3da:1702"), $.contains(n, e.target) || c(), _r_();
}
function f(t) {
_i_("3da:1703");
var i = String.fromCharCode(t.which).toLowerCase().replace(/[\n\s]/g, "");
if (!i.length) return _r_();
var n = _.filter('[data-s^="' + i + '"]').get(0);
if (n) {
var r = d.scrollTop();
n.scrollIntoView(!0), d.scrollTop(r);
}
e.stage("dLPLOefMXWSSIVDdWRe", 2), _r_();
}
r.delegate("li", "click", function() {
_i_("3da:2008");
var i = $(this).data();
o.text(i.cc + " +" + i.prefix), s.className = s.className.replace(/cflag-\w+/, "cflag-" + i.cc.toLowerCase()), t.setCountryCode(i.prefix, {
isUserAction:!0
}), c(), e.stage("dLPLOefMXWSSIVDdWRe", 3), _r_();
}), a.bind("click", function() {
_i_("3da:2009"), l ? c() :u(), _r_();
}), _r_();
}
});
}), B.define("gta/base-widget", [ "gta/impression-tracking", "et" ], function(e, t) {
_i_("3da:182");
var i = [ "placement", "exp", "variant", "source", "city", "firstname", "lastname", "booknumber", "pincode", "authkey" ], n = function(e) {
_i_("3da:880"), this.dom = {
root:e,
wrapper:e.parent(),
label:e.find(".gta-widget-label"),
input:e.find(".gta-widget-input"),
button:e.find(".gta-widget-submit"),
message:e.find(".gta-widget-message")
}, this.sharedParams = this.dom.wrapper.data(), this.payload = this.getPayload(), this.isInputMasked = this.dom.input.hasClass("gta-widget-input-masked"), this.addEvents(), _r_();
};
return n.prototype.addEvents = function() {
_i_("3da:881"), this.dom.button.bind("click", this.onSubmit.bind(this)), this.dom.label.bind("click", function() {
_i_("3da:2194"), this.dom.input.focus(), _r_();
}.bind(this)), this.dom.input.bind("keyup", function(e) {
_i_("3da:2195"), t.stage("dLPLOefMXWSSIVDdWRe", 4), 13 == e.keyCode && this.onSubmit(e), _r_();
}.bind(this)), e.trackWidgetImpressionOnView(this.dom.root.get(0), this), _r_();
}, n.prototype.getPayload = function() {
_i_("3da:882");
var e = {
stype:B.env.b_site_type_id,
page:B.env.b_action
};
for (var t in this.sharedParams) this.sharedParams.hasOwnProperty(t) && i.indexOf(t) > -1 && (e[t] = this.sharedParams[t]);
return _r_(e);
}, n.prototype.getCurrentPlacementName = function() {
return _i_("3da:883"), _r_(this.dom.wrapper.data("override-placement") || this.sharedParams.placement);
}, n.prototype.getMethodName = function() {
return _i_("3da:884"), _r_(this.method);
}, n.prototype.onSubmit = function(e) {
if (_i_("3da:885"), e.preventDefault(), this.hideMessage(), !this.validate()) return _r_();
this.payload.placement = this.getCurrentPlacementName(), this.disableInputs(), this.sendRequest(), _r_();
}, n.prototype.sendRequest = function() {
_i_("3da:886"), $.ajax({
url:this.action,
type:"POST",
data:this.payload,
success:this.onSucessCallback.bind(this),
error:this.onErrorCallback.bind(this)
}), _r_();
}, n.prototype.onSucessCallback = function(e) {
if (_i_("3da:887"), "true" === e.isOk) this.showMessage("success"), this.enableInputs(), t.stage("dLPLOefMXWSSIVDdWRe", 6); else switch (e.err) {
case "limited":
this.showMessage("limit");
break;

case "multiple":
this.showMessage("multiple");
break;

case "invalid":
this.showMessage("validation"), this.enableInputs(), this.dom.input.focus(), t.stage("dLPLOefMXWSSIVDdWRe", 5);
break;

default:
this.showMessage("error"), this.enableInputs();
}
_r_();
}, n.prototype.onErrorCallback = function() {
_i_("3da:888"), this.showMessage("error"), this.enableInputs(), _r_();
}, n.prototype.validate = function() {
return _i_("3da:889"), _r_(!1);
}, n.prototype.showMessage = function(e) {
_i_("3da:890"), this.dom.message.addClass(e.indexOf("success") > -1 ? "success" :"invalid").text(this.dom.message.data(e)), this.dom.message.slideDown(), _r_();
}, n.prototype.hideMessage = function() {
_i_("3da:891"), this.dom.message.hide().removeClass("success").removeClass("invalid"), _r_();
}, n.prototype.disableInputs = function() {
_i_("3da:892"), this.dom.button.attr("disabled", !0), this.dom.input.attr("disabled", !0), _r_();
}, n.prototype.enableInputs = function() {
_i_("3da:893"), this.dom.button.removeAttr("disabled"), this.dom.input.removeAttr("disabled"), _r_();
}, n.extend = function() {
if (_i_("3da:894"), void 0 != Object.create) return _r_(Object.create(n.prototype));
function e() {}
return e.prototype = n.prototype, _r_(new e());
}, _r_(n);
}), B.define("gta/sms-widget", [ "gta/base-widget", "gta/country-flags-dropdown", "et" ], function(e, t, i) {
_i_("3da:183");
var n = function(i) {
_i_("3da:895"), this.method = "sms", this.action = "/send_app_sms_v2", e.apply(this, arguments), this.dom.countryFlagsDropdown = this.dom.root.find(".gta-country-flag-dropdown"), this.countryCode = "", this.dom.countryFlagsDropdown.length && t.init(this, this.dom.countryFlagsDropdown.get(0)), _r_();
};
return n.prototype = e.extend(), n.prototype.addEvents = function() {
_i_("3da:896"), e.prototype.addEvents.apply(this, arguments);
var t = this;
this.isInputMasked && (this.dom.input.one("keyup input", function() {
_i_("3da:2196"), t.clearMaskedInput(), _r_();
}), this.dom.input.one("oncut", function() {
_i_("3da:2197"), setTimeout(t.clearMaskedInput, 0), _r_();
}), this.dom.input.one("onpropertychange", function() {
_i_("3da:2198"), "value" == event.propertyName && t.clearMaskedInput(), _r_();
})), _r_();
}, n.prototype.getPayload = function() {
_i_("3da:897");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_sms", _r_(t);
}, n.prototype.validate = function() {
if (_i_("3da:898"), this.isInputMasked) return delete this.payload.telno, delete this.payload.cc_prefix, _r_(!0);
var e = this.countryCode + this.dom.input.val().replace(/\D/g, "");
if (e.length < 6) return this.showMessage("validation"), _r_(!1);
return this.payload.telno = e, this.payload.cc_prefix = this.countryCode, _r_(!0);
}, n.prototype.setCountryCode = function(e, t) {
_i_("3da:899"), this.countryCode = e, this.isInputMasked && t.isUserAction && this.clearMaskedInput(), _r_();
}, n.prototype.clearMaskedInput = function() {
_i_("3da:900"), this.dom.input.val(""), this.isInputMasked = !1, _r_();
}, _r_(n);
}), B.define("gta/email-widget", [ "gta/base-widget" ], function(e) {
_i_("3da:184");
var t = function(t) {
_i_("3da:901"), this.method = "email", this.action = "/send_app_email_v2", e.apply(this, arguments), _r_();
};
return t.prototype = e.extend(), t.prototype.getPayload = function() {
_i_("3da:902");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_email", _r_(t);
}, t.prototype.validate = function() {
_i_("3da:903");
var e = this.dom.input.val();
if (!e) return _r_(!1);
if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) return this.showMessage("validation"), _r_(!1);
return this.payload.email = e, _r_(!0);
}, _r_(t);
}), B.require([ "gta/sms-widget", "gta/email-widget", "gta/base-widget", "et" ], function(e, t, i, n) {
_i_("3da:185");
var r = [];
$(".gta-sms-widget").each(function(t, i) {
_i_("3da:904"), r.push(new e($(i))), _r_();
}), $(".gta-email-widget").each(function(e, i) {
_i_("3da:905"), r.push(new t($(i))), _r_();
}), _r_();
}), B.require([ "gta/impression-tracking", "et", "jquery" ], function(e, t, i) {
_i_("3da:186");
var n = function(e) {
_i_("3da:906"), this.placeholder = i(e), this.placement = this.placeholder.data("placement"), this.image = null, this.init(), _r_();
};
n.prototype.loadImage = function() {
_i_("3da:907"), this.image = new Image(), this.image.onload = function() {
_i_("3da:2199"), this.placeholder.empty().append(this.image), e.trackImpression(this.placement, "qr"), _r_();
}.bind(this), this.image.src = this.placeholder.data("url"), _r_();
}, n.prototype.init = function() {
_i_("3da:908"), B.when({
events:[ "view #" + this.placeholder.attr("id"), "gta:lightbox:init #" + this.placeholder.attr("id") ]
}).run(this.loadImage.bind(this)), _r_();
}, i(".gta-qr-code-placeholder").each(function(e, t) {
_i_("3da:909"), new n(t), _r_();
}), _r_();
}), B.require([ "jquery", "et" ], function(e, t) {
"use strict";
_i_("3da:187"), B.when({
condition:"www" === B.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3da:910");
var i = !1;
e(".gta-country-flag-dropdown").on("click", function() {
_i_("3da:1891"), i || (t.customGoal("dLPLOefAXZQCTBVfMZCbJXNLWe", 1), i = !0), _r_();
}), _r_();
}), _r_();
}), B.define("header/notifications/notifications", function(e, t, i) {
"use strict";
_i_("3da:188");
var n = !1, r = "1" === B.env.b_site_type_id, a = "2" === B.env.b_site_type_id;
i.exports = {
isLoggedIn:function() {
return _i_("3da:1320"), _r_(Number(B.env.auth_level) > 0);
},
init:function() {
_i_("3da:1321"), this.$root = $(".js-uc-notifications"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), this.bindEvents(), (this.getNotifications("unseen").length > 0 || this._hasMultipleTravelGuides) && this.lazySeen(), _r_();
},
refresh:function() {
_i_("3da:1322"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), _r_();
},
_readNotificationsFromDOM:function() {
_i_("3da:1323"), this._notifications = this.$root.find(".js-uc-notification").map(function(e, t) {
return _i_("3da:2534"), t = $(t), _r_({
type:t.attr("data-type"),
fingerprint:t.attr("data-fingerprint"),
id:t.data("id"),
seen:"0" !== String(t.attr("data-seen"))
});
}).toArray(), this._hasMultipleTravelGuides = this.getNotificationsByType("explorer_available").length > 1 || this.getNotificationsByType("multiple_travel_guides").length, _r_();
},
lazySeen:function() {
_i_("3da:1324");
var e = /notif_id=([\w\d]+)/.exec(window.location.href);
if (null == e) return _r_();
var t = e[1], i = this._notifications.filter(function(e) {
return _i_("3da:2450"), _r_(e.id === t);
})[0];
if (void 0 === i) return _r_();
r && this._hasMultipleTravelGuides && ("multiple_travel_guides" === i.type || "explorer_available" === i.type), _r_();
},
seen:function(e, t) {
_i_("3da:1325"), e.seen = t, this.getNotificationNode(e).toggleClass("uc-notification-seen", t).toggleClass("uc-notification-unseen", !t), _r_();
},
markAsSeen:function(e) {
_i_("3da:1326");
var t = this;
if (0 === e.length) return _r_();
var i = JSON.stringify(e), r = "/seen_notifications";
if (e.forEach(function(e) {
_i_("3da:2200"), t.seen(e, !0), _r_();
}), this.updateState(), n) return _r_();
$.ajax({
type:"POST",
url:r,
data:{
notifications:i
}
}), _r_();
},
_setCount:function(e) {
_i_("3da:1327");
var t = a ? $(".js-uc-notifications-bell-count") :this.$root.find(".js-uc-notifications-bell-count");
if (0 === t.length) return _r_();
t.text(e), t.toggleClass("g-hidden", 0 === e), a && this.$root.toggleClass("g-hidden", 0 === this._notifications.length), _r_();
},
updateState:function() {
_i_("3da:1328"), this.updateCounter(), this.$root.toggleClass("uc-notifactions-has-unseen", this.getNotifications("unseen").length > 0), _r_();
},
updateCounter:function() {
_i_("3da:1329"), this._setCount(this.getNotifications("unseen").length + this._getUnseenCountsFromGroups()), this.$root.toggleClass("uc-notifications_new", 0 !== this.getNotifications().length), _r_();
},
bindEvents:function() {
_i_("3da:1330");
var e = this;
B.eventEmitter.bind("header:notifications:item_removed", function() {
_i_("3da:2201"), e.updateState(), _r_();
}), r && (B.eventEmitter.bind("uc_popover_showed", function(e, t) {
_i_("3da:2451"), "notifications" === t.id && (B.eventEmitter.trigger("header:notifications:shown"), B.events.emit("header:notifications:shown")), _r_();
}), this.$root.delegate(".js-uc-notification a", "click", function(t) {
_i_("3da:2452");
var i = e.getNotificationFromEvent(t);
if (null == i) return _r_();
_r_();
})), B.eventEmitter.bind("header:notifications:hidden", function() {
_i_("3da:2202"), e.updateState(), _r_();
}), this.$root.delegate(".js-uc-notification-close", "click", function(t) {
_i_("3da:2203");
var i = e.getNotificationFromEvent(t);
e.hideNotification(i), _r_();
}), this.$root.delegate(".js-uc-notification-seen", "click", function(t) {
_i_("3da:2204");
var i = e.getNotificationFromEvent(t);
"thread" === i.type || e.markAsSeen([ i ]), _r_();
}), _r_();
},
getNotificationNode:function(e) {
return _i_("3da:1331"), _r_(this.$root.find('[data-fingerprint="' + e.fingerprint + '"][data-type="' + e.type + '"]'));
},
getNotificationData:function(e) {
_i_("3da:1332");
var t = null;
return this.getNotifications().forEach(function(i) {
_i_("3da:2205"), $(e).attr("data-type") === i.type && $(e).attr("data-fingerprint") === i.fingerprint && (t = i), _r_();
}), _r_(t);
},
getNotificationFromEvent:function(e) {
_i_("3da:1333");
var t = $(e.currentTarget).closest(".js-uc-notification");
return _r_(t && this.getNotificationData(t));
},
hideNotification:function(e) {
_i_("3da:1334");
var t = this.getNotifications().indexOf(e);
n || $.post("/dismiss_user_notification", e), this.getNotificationNode(e).addClass("uc-notification_hidden"), -1 !== t && this.getNotifications().splice(t, 1), B.eventEmitter.trigger("header:notifications:item_removed"), _r_();
},
_filters:{
seen:function(e) {
return _i_("3da:1892"), _r_(e.seen);
},
unseen:function(e) {
return _i_("3da:1893"), _r_(!e.seen);
}
},
getNotifications:function(e) {
if (_i_("3da:1335"), this._filters[e]) return _r_(this._notifications.filter(this._filters[e]));
return _r_(this._notifications);
},
getNotificationsByType:function(e) {
return _i_("3da:1336"), _r_(this._notifications.filter(function(t) {
return _i_("3da:2206"), _r_(t.type === e);
}));
},
_getUnseenCountsFromGroups:function() {
_i_("3da:1337");
var e = 0;
return this.$root.find(".uc-notifications-group_iframe").each(function(t, i) {
_i_("3da:2207");
var n = $(i).data("unread-count");
"undefined" != typeof n && (e += n), _r_();
}), _r_(e);
}
}, _r_();
}), B.require([ "require" ], function(e) {
_i_("3da:189"), e("header/notifications/notifications").init(), _r_();
}), booking[sNSStartup].header_cleaned_links = {
priority:9,
init:function() {
_i_("3da:482"), $(".js-user-access-form--back-to-signin").click(function() {
_i_("3da:1338");
var e = $(".user_access_signin_menu, .user_access_signup_menu");
e.find(".js-user-access-form--signin").removeClass("g-hidden"), e.find(".js-user-access-form--signup").removeClass("g-hidden"), e.find(".js-user-access-form--reminder").addClass("g-hidden"), e.find(".js-user-access-form--reminder-sent").addClass("g-hidden"), _r_();
}), $("body").delegate(".forgot_link_look, .forgot_pass_trigger", "click", function(e) {
if (_i_("3da:1339"), e.preventDefault(), B.env.b_show_user_accounts_features && $(this).closest(".user_access_signin_menu, .user_access_signup_menu").length) {
var t = $(this).closest(".user_access_signin_menu, .user_access_signup_menu");
t.find(".js-user-access-form--signin").addClass("g-hidden"), t.find(".js-user-access-form--signup").addClass("g-hidden"), t.find(".js-user-access-form--reminder").removeClass("g-hidden"), t.find(".js-user-access-form--reminder .user_access_email").val(t.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select(), booking.eventEmitter.one("UA:password-reminder-sent", function() {
_i_("3da:2453"), t.find(".form-loading").hide(), t.find(".alert-error").removeClass("alert-displayed"), t.find(".js-user-access-form--reminder").addClass("g-hidden"), t.find(".js-user-access-form--reminder-sent").removeClass("g-hidden"), _r_();
});
} else {
var i = $(this).attr("data-href") || $(this).attr("href");
window.open(i, "_blank", "left=42,top=42,height=502px,width=440px,resizable=false");
}
_r_();
}), $("body").delegate(".hide_reminder_iframe", "click", function() {
_i_("3da:1340"), $(this).parent(".reminder_iframe_wrapper").remove(), $(".better_login").show(), booking[sNSStartup].new_personal_menu.recheckHeight(), oThat.openSelect("current_account"), _r_();
}), $("#foldout_loggedin").delegate("li", "click", function() {
_i_("3da:1341");
var e = $(this);
e.hasClass("seo_link_look") && e.attr("data-href") && (e.hasClass("my_logout") || (window.location = e.attr("data-href"))), _r_();
}), _r_();
}
}, function() {
_i_("3da:190");
var e = B.require("jquery");
B.require("et");
booking[sNSStartup].hotel_share_center = {
priority:9,
share_center:null,
share_center_popup:null,
prev_share_center_link:null,
init:function() {
_i_("3da:1342");
var t = !1;
"hotel" === B.env.b_action && e(".js-disable_share_center_button_icon").length && (t = !0);
var i = this;
e(".share_center .share_center_button strong, .general_share_center_button, div.hp_improve_share_center_button .share_center_button_icon").click(function(n) {
if (_i_("3da:2208"), t) return _r_(!1);
if (e("#general_share_center").length) {
i.share_center = e("#general_share_center").get(0), e(i.share_center).removeClass("has_short_url");
var r = e(this).attr("data-hotelname"), a = e(this).attr("data-hotelimage"), o = e(this).attr("data-sharelinks").split(","), s = e(i.share_center).attr("data-checkinvars"), _ = [ e(this).offset().left - e("#bodyconstraint-inner").offset().left, e(this).offset().top ], l = '<img src="' + a + '" width="50" height="50" alt="" /><h3>' + r + "</h3><small>" + o[0] + "</small><hr />";
e(".details", i.share_center).html(l), e("#share_center_url").val(o[0]), e(".sc_facebook a", i.share_center).attr("href", o[1] + s), e(".sc_google a", i.share_center).attr("href", o[2] + s), e(".sc_twitter a", i.share_center).attr("href", o[3] + s), e(".sc_email a", i.share_center).attr("href", o[4] + s), e(i.share_center).css({
left:_[0] + "px",
top:_[1] + "px"
});
} else i.share_center = e(this).closest(".share_center");
return i.share_center_popup = e(".share_center_popup", i.share_center), e(i.share_center).hasClass("open") ? null == i.prev_share_center_link || i.prev_share_center_link == this ? i.close() :i.addShortUrl() :(i.prev_share_center_link = this, i.open()), _r_(!1);
}), e(".share_center .close").click(function() {
return _i_("3da:2209"), i.close(" - Corner"), _r_(!1);
}), e(".share_center .out_link a").click(function() {
_i_("3da:2210");
var t = e(this).attr("rel"), i = e(this).attr("href");
return _gaq.push([ "_trackSocial", "Share Center", "Link Share on" + t ]), window.open(i, "sc_share", "menubar=0,resizable=1,width=600,height=400"), _r_(!1);
}), e(".share_center .sc_email a").click(function() {
_i_("3da:2211"), _gaq.push([ "_trackSocial", "Share Center", "Link Share onEmail" ]), _r_();
}), e(".share_center_url").click(function() {
_i_("3da:2212"), this.select(), e(".copy_hint", e(this).closest(".share_center")).fadeIn("fast"), _gaq.push([ "_trackSocial", "Share Center", "Copy URL" ]), _r_();
}), e(".share_center_url").blur(function() {
_i_("3da:2213"), e(".share_center .copy_hint", this).fadeOut("fast"), _r_();
}), _r_();
},
open:function() {
_i_("3da:1343"), e(this.share_center_popup).fadeIn("fast"), e(this.share_center).addClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Open Share Center" ]), this.addShortUrl(), _r_();
},
addShortUrl:function() {
if (_i_("3da:1344"), !e(this.share_center).hasClass("has_short_url")) {
var t = e(".share_center_url", this.share_center).val() + "?label=social_sharecenter_copy_url";
e(this.share_center).data("checkin") && e(this.share_center).data("checkout") && (t = t + "&checkin=" + e(this.share_center).data("checkin") + "&checkout=" + e(this.share_center).data("checkout")), e.get("/short_uri?url=" + escape(t) + "&aid=" + booking.env.aid, function(t) {
_i_("3da:2454");
var i = "http://booking.com/" + t.short_url;
e("h3 + small", this.share_center).text(i), e(".share_center_url", this.share_center).val(i), e(this.share_center).addClass("has_short_url"), _r_();
});
}
_r_();
},
close:function(t) {
_i_("3da:1345"), this.prev_share_center_link = null, e(this.share_center_popup).fadeOut("fast"), e(this.share_center).removeClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Close Share Center" + t ]), _r_();
}
}, _r_();
}(), function() {
"use strict";
_i_("3da:191");
var e, t = window.jQuery, i = (window.booking, {
selector_badge:".d-deal",
className_tt_left:"d-deal__tooltip-left",
className_tt_right:"d-deal__tooltip-right",
className_tt_preinit:"d-deal__pre-init"
}), n = t(window);
function r() {
_i_("3da:483"), clearTimeout(e), e = setTimeout(function() {
_i_("3da:1704");
var r, a, o = n.width() || 1e3;
clearTimeout(e), t(i.selector_badge).each(function(e, n) {
_i_("3da:2375"), r = t(n), r.removeClass(i.className_tt_preinit), r.removeClass(i.className_tt_left), r.removeClass(i.className_tt_right), a = r.offset().left, a > o - 270 ? r.addClass(i.className_tt_right) :200 > a && r.addClass(i.className_tt_left), _r_();
}), _r_();
}, 300), _r_();
}
r(), t(window).on("resize", r), _r_();
}(), "object" != typeof JSON && (JSON = {}), function() {
"use strict";
_i_("3da:192");
function f(e) {
return _i_("3da:484"), _r_(10 > e ? "0" + e :e);
}
"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
return _i_("3da:1346"), _r_(isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" :null);
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
return _i_("3da:1894"), _r_(this.valueOf());
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
}, rep;
function quote(e) {
return _i_("3da:485"), escapable.lastIndex = 0, _r_(escapable.test(e) ? '"' + e.replace(escapable, function(e) {
_i_("3da:2010");
var t = meta[e];
return _r_("string" == typeof t ? t :"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
}) + '"' :'"' + e + '"');
}
function str(e, t) {
_i_("3da:486");
var i, n, r, a, o, s = gap, _ = t[e];
switch (_ && "object" == typeof _ && "function" == typeof _.toJSON && (_ = _.toJSON(e)), "function" == typeof rep && (_ = rep.call(t, e, _)), typeof _) {
case "string":
return _r_(quote(_));

case "number":
return _r_(isFinite(_) ? String(_) :"null");

case "boolean":
case "null":
return _r_(String(_));

case "object":
if (!_) return _r_("null");
if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(_)) {
for (a = _.length, i = 0; a > i; i += 1) o[i] = str(i, _) || "null";
return r = 0 === o.length ? "[]" :gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" :"[" + o.join(",") + "]", gap = s, _r_(r);
}
if (rep && "object" == typeof rep) for (a = rep.length, i = 0; a > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, _), r && o.push(quote(n) + (gap ? ": " :":") + r)); else for (n in _) Object.prototype.hasOwnProperty.call(_, n) && (r = str(n, _), r && o.push(quote(n) + (gap ? ": " :":") + r));
return r = 0 === o.length ? "{}" :gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" :"{" + o.join(",") + "}", gap = s, _r_(r);
}
_r_();
}
"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
_i_("3da:1347");
var n;
if (gap = "", indent = "", "number" == typeof i) for (n = 0; i > n; n += 1) indent += " "; else "string" == typeof i && (indent = i);
if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
return _r_(str("", {
"":e
}));
}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
_i_("3da:1348");
var j;
function walk(e, t) {
_i_("3da:1895");
var i, n, r = e[t];
if (r && "object" == typeof r) for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n :delete r[i]);
return _r_(reviver.call(e, t, r));
}
if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return _i_("3da:2535"), _r_("\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), _r_("function" == typeof reviver ? walk({
"":j
}, "") :j);
throw new SyntaxError("JSON.parse");
}), _r_();
}(), $.cookie("b") ? window.b_cookie = JSON.parse($.cookie("b")) || {} :window.b_cookie = {};

var dont_execute_in_tdot = function() {
_i_("3da:193");
var e = B.require("jquery"), t = booking.env, i = booking[sNSStartupLoad].show_language = {
priority:9,
init:function() {
_i_("3da:1705");
var n = function() {
_i_("3da:2376"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), _r_();
};
if ("undefined" == typeof window.b_cookie && (window.b_cookie = {}), e("#langselectbutton, #languageselect input").hide(), e("#langselectformlist, #currList").change(function() {
_i_("3da:2377"), e("#languageselect")[0].submit(), n(), _r_();
}), e(".current_language, .prompt_close").click(function(t) {
_i_("3da:2378"), t.preventDefault(), e(".language_prompt").hide(), e.get("/general." + booking.env.b_lang + ".html?tmpl=blank"), _r_();
}), e(".language_flags").click(function() {
_i_("3da:2379"), n(), _r_();
}), t.show_language_suggestion) {
if (window.b_cookie.countLang) if (isNaN(window.b_cookie.countLang)) t.language_dialog_count2 = 1, window.b_cookie.countLang = 1; else {
var r = parseInt(parseInt(window.b_cookie.countLang, 10) + 1, 10);
4 >= r && (t.language_dialog_count2 = r, window.b_cookie.countLang = t.language_dialog_count2);
} else t.language_dialog_count2 = 1, window.b_cookie.countLang = 1;
"undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), "dontshow" !== window.b_cookie.langPrompt && t.language_dialog_count2 < 4 && !booking.affiliate.platform.isHybrid && setTimeout(i.createAlert, 2e3);
}
_r_();
},
createAlert:function(i) {
_i_("3da:1706");
var n, r = t.show_language_suggestion, a = !1, o = "", s = "", _ = "";
if (r) {
var l = 230, d = e("#current_currency").width(), c = e("#current_language").width(), u = Math.round(d + c / 2 - l / 2), h = "";
e("#languageselect .language-wrapper").length ? (n = e("#languageselect .language-wrapper"), o = "margin-top:10px;", s = "top: -2px;", t.b_is_ie7 && (_ = "margin-top:25px;left:100px;"), a = !0) :(n = e("#personal_form"), s = "top: -11px;", _ = "top:40px;"), h += '<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:' + l + "px;left:" + u + "px;" + _ + '"><div style="position:absolute;zoom:1;' + s + ";left:120px;width:17px;height:13px;background:url('//s-ec.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);" + o + '"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">' + t.transl_close_x + "</a>", h += '<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(' + B.tools.jsStaticUrl("/static/img/flags/24/" + t.b_flag_to_suggest + ".png") + ') no-repeat;" data-lang-code="' + r.suggested_lang_select + '">' + r.transl_change_page_lang_to_x + "</a>", h += "</div></div>", n.append(h), e("#lang-prompt").fadeIn("slow"), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Show"), e("#lang-prompt .close").click(function() {
return _i_("3da:2536"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), e("#lang-prompt").hide(), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Close"), _r_(!1);
}), e("#lang-prompt .lang_change_link").click(function() {
_i_("3da:2537");
var i;
window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
});
var n = e(this).attr("data-lang-code");
a ? (e("#langselectformlist").val(n), e("#languageselect")[0].submit()) :(i = e(".lang_" + n).find("a").attr("href"), i && (window.location = i)), _r_();
});
}
_r_();
}
};
_r_();
};

booking.env.b_is_tablet || dont_execute_in_tdot(), booking[sNSStartup].ng_last_viewed = {
priority:9,
resultsPerPage:booking.env.b_is_android_tablet ? 4 :5,
totalPages:0,
currentPage:0,
click:null,
googleTracked:!1,
lastViewedHotels:null,
overlay:null,
ajaxPath:"/userhistory." + booking.env.b_lang_for_url + ".html",
ajaxStatus:0,
staticPath:[],
init:function() {
if (_i_("3da:487"), "tdot" !== B.env.b_site_type) return _r_();
this.staticPath = booking.env.b_static_images_hostnames, $("body").append('<div id="ng-overlay" hidden></div>'), this.$overlay = $("#ng-overlay"), this.addEvents(), _r_();
},
addEvents:function() {
_i_("3da:488");
var e = this, t = $("#top_lw_wrapper"), i = $("a#top_last_viewed");
i.bind("click", {
exp:e
}, function(i) {
_i_("3da:1349");
var n = $("#history_count").attr("data-count");
e.googleTracked || (booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the header button"), e.googleTracked = !0), e.isVisibleOverlay() && "lw" == e.click ? (e.distroyOverlay(), t.hide()) :(e.createOverlay(), $(".milk_menu").hide(), t.show(), e.click = "lw"), !e.ajaxStatus && n && n - 0 > 0 && e.getLastViewedHotels(), "undefined" != typeof booking.maps && booking.maps.map_opened && booking.maps.close(), i.preventDefault(), _r_();
}), $("#ng-overlay, #current_account, #header_currency, #header_language").bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3da:1350");
var i = $(t.target);
"ng-overlay" == i.get(0).id && t.preventDefault(), e.distroyOverlay(), _r_();
}), $("#lw_next, #lw_prev").bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3da:1351");
var i = $(this);
t.preventDefault(), setTimeout(function() {
_i_("3da:2214"), e.renderItems(i.data("page")), _r_();
}, 300), _r_();
}), $("#sidebar_last_viewed").bind("click", function(e) {
_i_("3da:1352"), e.preventDefault(), $(document.body).animate({
scrollTop:0
}, 400, function() {
_i_("3da:2215"), i.trigger("click"), booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the sidebar button"), _r_();
}), _r_();
}), _r_();
},
handleCookieWarning:function(e) {
_i_("3da:489");
var t = !1;
if ("undefined" != typeof booking[sNSStartup].t_cookie_warning && !booking[sNSStartup].t_cookie_warning.getCookie() && /be|el|lt|pt|bg|es|lu|ro|cz|hu|si|dk|hr|mt|sk|de|it|fi|ee|cy|se|ie|lv|pl|uk|gb|fr|at/.test(booking.env.b_guest_country) && (t = !0), t) ; else if ("nl" != booking.env.b_guest_country || "undefined" != typeof booking[sNSExperiments].t_cookie_warning && booking[sNSExperiments].t_cookie_warning.getCookie()) return _r_();
var i = $("#cookie_warning");
i.length && ("show" == e ? i.show() :i.hide()), _r_();
},
createOverlay:function() {
_i_("3da:490");
var e = this;
e.handleCookieWarning(), $("#ng-overlay").height($("html").outerHeight(!0)).show(), _r_();
},
distroyOverlay:function() {
_i_("3da:491");
var e = this;
return $("#ng-overlay").hide(), $("#top_lw_wrapper").hide(), e.handleCookieWarning("show"), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), _r_(!1);
},
isVisibleOverlay:function() {
_i_("3da:492");
var e = this;
return _r_(e.$overlay.is(":visible"));
},
getLastViewedHotels:function() {
_i_("3da:493");
var e = this, t = $("#lw_list #spinner");
return e.ajaxStatus = 1, $.ajax && $.ajax({
type:"GET",
cache:!1,
url:e.ajaxPath,
dataType:"JSON",
data:{
last_viewed_json:1,
tmpl:"profile/json",
stid:350339
},
success:function(i) {
if (_i_("3da:2216"), e.ajaxStatus = 2, "object" != typeof i && (i = $.parseJSON(i)), !i || $.isEmptyObject(i) || i instanceof Array && !i.length) return _r_();
e.lastViewedHotels = i, e.totalPages = Math.ceil(i.length / e.resultsPerPage), e.renderItems(1), t.remove(), _r_();
}
}), _r_(!0);
},
renderItems:function(e) {
_i_("3da:494");
var t = this, i = $("#lw_next"), n = $("#lw_prev"), r = $("#lw_list"), a = t.lastViewedHotels, o = (e - 1) * t.resultsPerPage, s = o + t.resultsPerPage;
for (s = s > a.length ? a.length :s, r.empty(), t.currentPage = e, o; s > o; o++) r.append(this.renderItem(a[o]));
t.currentPage < t.totalPages ? i.data("page", t.currentPage + 1).show() :i.hide(), 1 != t.currentPage ? n.data("page", t.currentPage - 1).show() :n.hide(), _r_();
},
renderItem:function(e) {
_i_("3da:495");
var t = this, i = "";
if (i += "<li>", i += '<a class="ui-helper-clearfix" href="', i += booking.env.b_nonsecure_hostname_signup + e.url + booking.env.b_query_params_with_lang, i += booking.env.b_url_params + booking.env.b_query_params_delimiter, "undefined" != booking.env.b_param_do_availability_check && (i += "do_availability_check=on" + booking.env.b_query_params_delimiter, booking.env.b_checkin_date && booking.env.b_checkout_date && (i += "checkin=" + booking.env.b_checkin_date, i += booking.env.b_query_params_delimiter, i += "checkout=" + booking.env.b_checkout_date)), i += '">', e.photo_id) {
var n = Math.round(Math.random());
i += '<img width="60px" height="60px" src="' + t.staticPath[n] + "/images/hotel/square60/" + e.photo_id.substring(0, 3) + "/" + e.photo_id + '.jpg " />';
}
return i += '<span class="lw_hotel_name">' + e.title + "</span>", e.rating && (i += e.class_is_estimated && "de" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :e.class_is_estimated && "au" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :'<span class="retina_stars_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>'), e.address && (i += '<span class="lw_address">' + e.address + "</span>"), i += "</a>", i += "</li>", _r_(i);
},
loadRatingClass:function(e, t) {
return _i_("3da:496"), _r_(t ? "circle" + e + "i4half" :"circle" + e + "i4");
},
loadRetinaRatingClass:function(e, t) {
return _i_("3da:497"), _r_("retina_stars_small_" + e + (t ? "half" :""));
}
}, booking[sNSExperimentsLoad].lazy_load_print_css = {
priority:9,
init:function() {
_i_("3da:498");
var e = document.createElement("link");
e.rel = "stylesheet", e.type = "text/css", e.href = booking.env.print_css_href, e.media = "print", document.getElementsByTagName("head")[0].appendChild(e), _r_();
}
}, booking.ensureNamespaceExists(sNSStartup), booking.lightbox = booking[sNSStartup].lightbox = function() {
_i_("3da:499");
var e, t, i, n, r, a, o = $("body"), s = {
bAnimation:!0,
bCloseButton:!0,
bMaskClick:!0,
closeOnEsc:!0,
customWrapperClassName:"",
customMaskClassName:"",
bFullscreen:!1,
hideCallBack:null,
hideBeforeCallBack:null,
positionBeforeCallBack:null,
positionAfterCallBack:null,
cloneElement:!1,
bCanScroll:!1,
bOverflowVisible:!1,
autoCenter:!0,
limitHeight:!1,
opacity:.5,
autoWidth:!1,
position:"fixed",
topMargin:0,
bottomMargin:0,
preventBodyScroll:!1,
trapFocus:!1,
modalLabeledById:""
}, _ = {}, l = [], d = function() {
_i_("3da:1707");
for (var e = [ "", "moz", "webkit" ], t = !1, i = 0; 3 > i; i++) if (e[i] + ("" === e[i] ? "b" :"B") + "oxSizing" in document.body.style) return _r_(!0);
return _r_(t);
}(), c = !1;
function u() {
_i_("3da:911");
var e = o.width();
a = parseInt(o.css("padding-right"), 10), o.css("overflow", "hidden");
var t = o.width() - e;
o.css("padding-right", a + t), _r_();
}
function h() {
_i_("3da:912"), o.css({
overflow:"auto",
paddingRight:a
}), _r_();
}
var f = function(i) {
_i_("3da:1353");
var n;
_.positionBeforeCallBack && _.positionBeforeCallBack(), e.css({
width:$(document).width(),
height:$(document).height()
});
var r = $(window).width(), a = Math.max(0, $(window).height() - _.topMargin - _.bottomMargin);
if (d || (r = r - parseInt(t.css("paddingLeft")) - parseInt(t.css("paddingRight")), a = a - parseInt(t.css("paddingTop")) - parseInt(t.css("paddingBottom"))), !_.limitHeight) {
var o = Math.max(0, $(window).height() - _.topMargin - _.bottomMargin);
t.outerHeight() > o ? (t.css("height", a), n = !0) :(t.css("height", ""), t.outerHeight() >= o && t.css("height", a));
}
if (t.outerWidth() > $(window).width()) t.css("width", r); else if (t.css("width", ""), t.outerWidth() >= $(window).width()) t.css("width", r); else if (_.autoWidth) {
var s = t.children().first().outerWidth();
d && (s += parseInt(t.css("padding-left"), 10) + parseInt(t.css("padding-right"), 10), s += parseInt(t.css("border-left-width"), 10) + parseInt(t.css("border-right-width"), 10)), t.css({
width:s
});
}
var l = 0, c = 0;
_.bFullscreen ? t.css({
width:r,
height:a
}) :(l = Math.max(_.topMargin, $(window).height() / 2 - t.outerHeight() / 2), c = Math.max(0, $(window).width() / 2 - t.outerWidth() / 2));
var u = "hidden";
_.bCanScroll ? u = "auto" :_.bOverflowVisible && (u = "visible"), "absolute" == _.position ? (l = Math.max(0, $(window).height() / 2 - t.outerHeight() / 2), l += $(document).scrollTop(), t.css("position", "absolute")) :"dynamic" == _.position && !function() {
_i_("3da:2538");
var e = "modal-pos-abs", r = "modal-pos-to-fix";
n ? (l = i && i.preserveAbsolute && t.hasClass(e) ? (t.offset() || {}).top :$(document).scrollTop() + _.topMargin, t.css({
position:"absolute",
height:""
}).addClass(e)) :(t.css({
position:"fixed"
}), t.hasClass(e) ? t.removeClass(e).addClass(r) :t.removeClass(r)), _r_();
}(), t.css({
top:l,
left:c,
overflow:u
}), _.positionAfterCallBack && _.positionAfterCallBack(), _r_();
}, p = function(e) {
_i_("3da:1354"), t && t.is(":visible") && f(e), _r_();
}, g = function() {
if (_i_("3da:1355"), !t) return _r_();
_.hideBeforeCallBack && _.hideBeforeCallBack(), _.cloneElement || (n.prepend(i), i.css("display", r)), _.trapFocus && booking.trapFocus && booking.trapFocus.release(), e.remove(), t.remove(), c = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", p), $(window).unbind("resize", p), _.closeOnEsc && $(document).unbind("keyup", m), $("#calendar_popup").css("display", "none"), _.hideCallBack && _.hideCallBack(), _.preventBodyScroll && h(), booking.eventEmitter.trigger("modal:close"), B.events.trigger("modal:close"), _r_();
}, m = function(e) {
_i_("3da:1356"), 27 !== e.keyCode || l.length || g(), _r_();
}, v = function() {
_i_("3da:1357"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
_i_("3da:2217"), g(), _r_();
}), _.bMaskClick && $(".modal-mask").one("click", function() {
_i_("3da:2455"), g(), _r_();
}), _.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", p), "absolute" == _.position && _.autoCenter && $(window).bind("scroll", p), _r_();
}, b = function() {
_i_("3da:1358"), e = $('<div class="modal-mask"/>').appendTo(document.body), _.customMaskClassName.length > 0 && e.addClass(_.customMaskClassName), t = $('<div class="modal-wrapper"/>').attr({
role:"dialog"
}).appendTo(document.body), _.modalLabeledById && t.attr("aria-labelledby", _.modalLabeledById), _.customWrapperClassName.length > 0 && t.addClass(_.customWrapperClassName), _.cloneElement ? i.clone().appendTo(t) :t.append(i), _.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"/>').appendTo(t), _.bFullscreen && t.addClass("modal-wrapper--fullscreen"), c = !0, $("body").addClass("modal-visible"), _.preventBodyScroll && u(), i.show(), f(), v(), _r_();
}, w = function() {
if (_i_("3da:1359"), b(), t.css("visibility", "visible"), _.bAnimation) {
var i = _.bAnimation;
"number" != typeof i && (i = parseInt(i, 10) || 1e3), e.fadeTo(Math.max(0, Math.min(600, i - 400)), _.opacity), t.css("opacity", "0").animate({
opacity:1
}, i, function() {
_i_("3da:2456"), $(this).css("opacity", ""), _r_();
}), _.trapFocus && booking.trapFocus && setTimeout(function() {
_i_("3da:2600"), booking.trapFocus.trap(t[0]), _r_();
}, 100);
} else e.css("opacity", _.opacity).show();
_.ajax && "function" == typeof _.loadCallBack && _.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), _r_();
}, y = function(e, a, o) {
if (_i_("3da:1360"), t && t.is(":visible")) return _r_();
if (_ = {}, $.extend(_, s, a), _.trapFocus && "undefined" == typeof booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"), _.iframe) {
var l = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + _.iframeHeight + '"></iframe> ');
"function" == typeof _.loadCallBack && l.load(_.loadCallBack), i = l, n = i.parent(), r = i.css("display"), w();
} else _.ajax ? jQuery.ajax({
url:e,
cache:!0,
success:function(e) {
_i_("3da:2651"), i = _.ajaxRawContent ? $(e) :$($.trim(e)).eq(0), n = i.parent(), r = i.css("display"), w(), _r_();
}
}) :(i = $(e), i.length && "SCRIPT" === i[0].tagName && (i = $($.trim(i.html()))), n = i.parent(), r = i.css("display"), w());
return "undefined" != typeof o && o(), _r_(t);
}, k = function(e, t, i, n) {
_i_("3da:1361"), booking[sNSStartup].lightbox.show($("#" + n)), _r_();
};
return _r_({
priority:5,
init:function() {},
show:y,
hide:g,
rePosition:p,
open:k,
isVisible:function() {
return _i_("3da:1709"), _r_(c);
},
pushEscStack:function(e) {
_i_("3da:1710"), l.push(e), _r_();
},
popEscStack:function() {
_i_("3da:1711"), l.pop(), _r_();
},
hideWithFade:function(i, n) {
_i_("3da:1712"), t.fadeOut(i), e.fadeOut(i, function() {
_i_("3da:2380"), g(), n && n(), _r_();
}), _r_();
}
});
}(), B.define("lightbox", booking.lightbox), booking[sNSStartup].loc_index_japanese_map = {
init:function() {
_i_("3da:500"), $(".map_links").hover(function() {
_i_("3da:1362");
var e = this.id;
$("#" + e + "_in").show(), _r_();
}, function() {
_i_("3da:1363");
var e = this.id;
$("#" + e + "_in").hide(), _r_();
}), $(".tab01").click(function() {
_i_("3da:1364"), $(".map_overseas").hide(), $(".map_ja").show(), $(".tab02").removeClass("active"), $(".tab01").addClass("active"), _r_();
}), $(".tab02, #ja11").click(function() {
_i_("3da:1365"), $(".map_ja").hide(), $(".map_overseas").show(), $(".tab01").removeClass("active"), $(".tab02").addClass("active"), _r_();
});
var e = $(".map_overseas"), t = $(".overseas_cities");
e.delegate(".country_list", "click", function(e) {
_i_("3da:1366"), e.preventDefault();
var n = $(this), r = n.data("id"), a = t.find(".country_" + r).clone();
i.open({
title:n.clone(),
content:a
}), _r_();
});
var i = function() {
_i_("3da:1713");
var e, t = $(".map_box_overlay"), i = t.find(".map_box_overlay_header_title"), n = t.find(".map_box_overlay_content");
return t.delegate(".map_box_overlay_mask", "click", function(t) {
_i_("3da:2539"), e.close(), _r_();
}).delegate(".map_box_overlay_close_button", "click", function(t) {
_i_("3da:2381"), e.close(), _r_();
}), e = {
open:function(e) {
_i_("3da:2540");
var r = e.content || "", a = e.title || "";
i.empty().append(a), n.empty().append(r), t.show(), _r_();
},
close:function() {
_i_("3da:2541"), t.hide(), _r_();
}
}, _r_(e);
}();
_r_();
},
initElse:function() {}
}, B.when({
events:"ready"
}).run(function() {
_i_("3da:194");
var e = B.require("jquery"), t = B.require("et"), i = B.require("events");
i.on("rc-lightbox-open", function(i, n) {
_i_("3da:913"), e(n).hasClass("rt_resort_credits_info--selected_facilities") && t.stage("YdVXfCAUfDMcMGceTfBSBXe", 1), _r_();
}), _r_();
}), function() {
_i_("3da:195");
var e = B.require("jquery");
booking[sNSStartup].login_foldout = {
priority:9,
fontchange:!1,
init:function() {
_i_("3da:1367");
var t = this;
"https:" == location.protocol && booking.env.b_is_app && e(".stay_login, #login-form").each(function() {
_i_("3da:2457");
var t = e(this).attr("action");
if (-1 == t.indexOf("protocol=https")) {
var i = t;
i = t.indexOf("protocol=http") > -1 ? t.replace("protocol=http", "protocol=https_www") :sCurlink + "&protocol=https_www", e(this).attr("action", i);
}
_r_();
}), booking.env.b_can_acc_bp_auth_lightbox || e("#login_redesign").click(function() {
return _i_("3da:2458"), e(this).hasClass("no_arrow") || (e(this).hasClass("login_opened") ? e(this).removeClass("login_opened") :e(this).addClass("login_opened"), e("#login-form_wrapper fieldset").toggle()), _r_(!1);
}), e(".stay_login").submit(function() {
_i_("3da:2218"), booking.google.userProfileTracker && booking.google.trackEvent(booking.google.userProfileTracker, "Login attempt : Header", booking.env.b_action), e("#foldout_error").hide(), e("#login_loading").show();
var i = document.getElementById("username_input_top").value;
if ("" == i) return t.hideLoader(), e('label[for="username_input_top"]').css({
color:"#B30000",
"font-weight":"bold"
}), e("#username_input_top").focus(), _r_(!1);
var n = /^[0-9[\.]+$/.exec(i);
if (n) {
var r = e("#bm_log").val();
r += r.indexOf(!1) ? "&" :"?";
var a = e("#password_input_top", this).val();
r += "pincode=" + a + "&bn=" + i, e("#tar_tmpl").attr("value", ""), e(this).attr("action", r), e(this).attr("target", "_top");
}
setTimeout(function() {
_i_("3da:2601"), t.hideLoader(), _r_();
}, 1e4), _r_();
}), e("#signup_form_regular,#sign_up_form").submit(function() {
if (_i_("3da:2219"), !t.validateLoginSubmitData({
formId:this.id
})) return _r_(!1);
_r_();
}), e("#user_mybooking_login_form").submit(function() {
if (_i_("3da:2220"), !t.validateLoginSubmitData({
formId:this.id,
passwordIsNumeric:1,
loginIsBookingNr:1
})) return _r_(!1);
_r_();
}), e(".in-pagelogin-form").submit(function() {
if (_i_("3da:2221"), booking.env.auth_level < 1) var t = e(".in-pagelogin-form").height() - 11; else var t = e(".in-pagelogin-form").height() + 19;
e("#page_login_loading").css("height", t + "px").show(), _r_();
}), e(document).on("click", ".user_login_show_signin, .user_login_show_signup", function() {
return _i_("3da:2222"), e(this).hasClass("user_login_show_signup") ? booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this) :booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this), e(".user_login_error_msg").hide(), _r_(!1);
}), e(window).bind("beforeunload", function() {
_i_("3da:2223"), e("iframe[name=log_tar]").each(function() {
_i_("3da:2602");
var t = e(this).parent();
e(this).remove().attr("src", "about:blank").appendTo(t), _r_();
}), _r_();
}), _r_();
},
validateLoginSubmitData:function(t) {
_i_("3da:1368");
var i, n, r, a, o, s, _ = e("#" + t.formId);
if (a = _.parents(".user_login_form"), o = e(".user_login_error_msg", a), t.loginIsBookingNr && (s = e(".user_bn_login_input", _).val(), s = s.replace(/\./g, ""), e(".user_bn_login_input", _).val(s), !s.length || !/^\d+$/g.test(s))) return this.displayLoginErrorMsg({
errorTarget:o,
errorMsg:0 === s.length ? booking.env.b_blank_bkng_nr :booking.env.b_bkng_nr_must_be_numeric
}), _r_(!1);
if ($passwordInput = e(".password_input", _), !$passwordInput.length) return _r_(1);
if (i = $passwordInput.val(), t.passwordIsNumeric || o.length && a.hasClass("user_login_single_signup") || e(".userlogin_signup_tab", a).hasClass("active")) {
if (n = i && i.length ? i.length :0, t.passwordIsNumeric) {
if (!n || !/^\d+$/g.test(i)) return this.displayLoginErrorMsg({
errorTarget:o,
errorMsg:0 === n ? booking.env.b_blank_numeric_pin :booking.env.b_password_must_be_numeric
}), _r_(!1);
} else {
if (8 > n) return this.displayLoginErrorMsg({
errorTarget:o,
errorMsg:booking.env[n ? "password_needs_8" :"account_error_add_password"]
}), _r_(!1);
if (r = e(".username_input", _), r.length && r.val() && r.val() === i) return this.displayLoginErrorMsg({
errorTarget:o,
errorMsg:booking.env.password_cant_be_username
}), _r_(!1);
}
return _r_(!0);
}
_r_();
},
displayLoginErrorMsg:function(t) {
if (_i_("3da:1369"), !t || !t.errorTarget || !t.errorMsg) return _r_();
t.errorTarget.show().text(t.errorMsg), booking[sNSStartup].new_personal_menu.recheckHeight();
var i = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", i + "px"), _r_();
},
thirdParty:function(t, i, n, r) {
_i_("3da:1370"), i && !r && e("#log_tar").attr("src", n), r && e("#email_send").show("slow"), _r_();
},
thirdPartyCancel:function(t, i, n) {
_i_("3da:1371"), this.hideLoader(), "undefined" != typeof e.noticeAdd && e.noticeAdd({
text:"\n \n \n " + i + " \n \n \n ",
stay:!1,
textLabel:"login_foldout",
stayTime:3e3,
type:"users",
close:"all",
destination:""
}), n && e("#email_send").show("slow"), _r_();
},
reCall:function(t) {
_i_("3da:1372");
var i = this;
if (t.reload && (booking.env.b_req_login = "1"), "OK" == t.loginstatus) if (t.userlanguage || t.currency) {
var n = booking.env.b_this_url, r = n.indexOf("?") > 0 ? "&" :"?";
t.userlanguage && (n += r + "lang=" + t.userlanguage, r = "&"), t.currency && (n += r + "selected_currency=" + t.currency), n.replace("logout=1", ""), document.location.href = n;
} else if (booking.env.b_redirect) document.location.href = booking.env.b_redirect; else if ("1" == booking.env.b_req_login) {
var a = booking.env.b_this_url;
a.replace("logout=1", ""), document.location.href = a;
} else {
var o = booking.env.b_this_url;
if (o.replace("logout=1", ""), o = o.indexOf("?") > 0 ? o + ";logout=1" :o + "?logout=1", sLoginLinks = t.loginlink.replace("sign_out_url", o), e("#login-form_wrapper fieldset").hide(), e(".welcome_login_link").hide(), e("#current_account_foldout").removeClass("non_logged_in_user").addClass("logged_in_user"), booking.env.is_user_wishlists ? (e("#search_tab_favourite").hide(), e("#search_tab_wishlists").show(), booking.env.is_user_wishlists_for_all && (e("#wishlist_modal_user_access").hide(), e("#wishlist_modal_content").show(), booking.lightbox.rePosition(), booking.env.b_user_has_imported_faves && e("#search_tab_wishlists").find(".user_imported_faves_new").show()), long_list = !1, hotel_id = booking.env.b_hotel_id, e.get("/wishlist/get", {
hotel_id:hotel_id,
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id
}, function(t) {
if (_i_("3da:2718"), t && t.success && t.lists && t.lists.length) {
for (var i, n = (t.lists, ""), r = "", a = 0, o = t.lists.length; o > a; a++) t.lists.length > 3 && (long_list = !0), i = t.lists[a], n += '<li><label><input type="checkbox" id="wl_' + i.id + '" value="wl_' + i.id + '"' + (1 == i.selected ? 'checked="checked"' :"") + " />" + i.name + "</label></li>", r += '<li><a href="' + booking.env.new_wishlist_url + i.id + '"><span>' + i.name + "</span></a></li>";
e("#wl_list").html(n), e("#search_tab_wishlists_content .menu_wishlists").html(r), (long_list = !0) && e(".wl_list_box").addClass("scrolling_list");
}
_r_();
})) :(e("#search_tab_favourite").show(), e("#search_tab_wishlists").hide(), booking.lightbox.hide()), e("#login_redesign").length) {
var s = e("#login_redesign").get(0);
e(s).addClass("no_arrow"), e(s).mouseover(function() {
return _i_("3da:2719"), _r_(!1);
}), e(s.parentNode).mouseover(function() {
return _i_("3da:2720"), _r_(!1);
});
}
e("#current_account_foldout").css("width", "auto");
window.setTimeout(function() {
_i_("3da:2708"), e("#password_input_top").val(""), t.avatarurl && "0" != t.avatarurl ? e(".my_image img").length && e(".my_image img").each(function() {
_i_("3da:2747"), e(this).attr("src", t.avatarurl), e(".head_firstname").length && e(this).css({
"margin-top":"-5px",
width:"26px",
height:"26px"
}), _r_();
}) :0 != t.defaultavatar && e(".my_image img").length && (e(".my_image img").addClass("def_avtr"), e(".my_image img").addClass("t_s_avtr_" + t.defaultavatar), e(".my_image img").css({
"margin-top":"-4px",
"margin-left":"-1px",
width:"24px",
height:"24px"
})), setTimeout(function() {
_i_("3da:2742"), i.preShowMenu(), _r_();
}, 100), e("#b_header").length || "undefined" != typeof e.noticeAdd && t.growl1 && t.growl2 && e.noticeAdd({
text:"\n \n \n " + unescape(t.growl1) + "<br>" + unescape(t.growl2) + " \n \n \n ",
textLabel:"user_login_notice",
stay:!1,
stayTime:3e3,
type:"users",
close:"all",
destination:"",
addClassName:"notice_login"
}), _r_();
}, 500);
"" != t.email && (e("#email_confirm").length && "" == e("#email_confirm").val() && (e("#email_confirm").val(t.email), e("#error_email_confirm").hide(), e("#label_email_confirm").removeClass("val-no").addClass("val-yes")), e("#email").length && "" == e("#email").val() && (e("#email").val(t.email), e("#error_email").hide(), e("#label_email").removeClass("val-no").addClass("val-yes"))), t.fdata1 && e("#address1").length && "" == e("#address1").val() && e("#address1").val(t.fdata1), t.fdata2 && e("#city").length && "" == e("#city").val() && e("#city").val(t.fdata2), t.fdata3 && e("#zip").length && "" == e("#zip").val() && e("#zip").val(t.fdata3), t.fdata4 && e("#cc1").length && "" == e("#cc1").val() && e("#cc1").val(t.fdata4), t.fdata5 && e("#phone").length && "" == e("#phone").val() && e("#phone").val(t.fdata5);
var _ = " ";
t.fdata6 && (e("#lastname").length && "" == e("#lastname").val() && (e("#lastname").val(t.fdata6), e("#error_lastname").hide(), e("#label_lastname").removeClass("val-no").addClass("val-yes")), e(".head_lastname").text(t.fdata6), _ = t.fdata6), t.fdata7 ? (e("#firstname").length && "" == e("#firstname").val() && (e("#firstname").val(t.fdata7), e("#error_firstname").hide(), e("#label_firstname").removeClass("val-no").addClass("val-yes")), e(".head_firstname").text(t.fdata7), _ = t.fdata7 + " " + _) :t.fdata6 && e(".head_firstname").text(""), e(".login_for_name").length && " " != _ && (e(".login_for_name").val(_), e(".login_for_name").css({
color:"#003580"
})), e("input[name='username']").val(t.email), booking.lightbox && booking.lightbox.isopen && booking.lightbox.close(), booking[sNSStartup].new_personal_menu.closeSelect(null, !0, t.hasbookings), booking[sNSStartup].hide_email_confirm && booking[sNSStartup].hide_email_confirm.hideConfMailInit(), t.has_stored_cc > 0 && (current_book_url = booking.env.b_this_url, current_book_url = current_book_url.replace(";logout=1", ""), current_book_url += ";tmpl=profile/creditcards_ajax;", e("#bs3_cc_form #book_credit_card").load(current_book_url + " #book_credit_card"), e("#cc_img").remove()), e("#multiple_login").hide(), i.hideLoader();
} else {
if (t.error) var l = unescape(t.error); else var l = "";
var d = t.nofoldout ? !1 :!0;
window.setTimeout(function() {
if (_i_("3da:2542"), d) {
if (B.env.b_is_tdot_traffic) {
e("#foldout_error").html(l);
var t = e(".forgot_link_look").text(), i = e(".forgot_link_look").attr("data-href");
e(".forgot_pass_trigger").attr("href", i).attr("data-href", i).text(t), e("#foldout_error").show();
} else e("#foldout_error").html(l).show();
var n = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", n + "px"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), e(".user_login_show_signup").click(function() {
return _i_("3da:2721"), e("#username").val(e("#username_input_top").val()), e("#new_user").click(), _r_(!1);
});
} else e("#bs2_page_login_error").length && e("#bs2_page_login_error").html(l).show();
_r_();
}, 500);
i.hideLoader();
}
_r_();
},
toggle:function(t, i) {
_i_("3da:1373");
var n = t.getAttribute("shown");
if ("false" == n) {
if (e("#foldout_error").hide(), e(t).css("display", "block"), 1e3 == i) {
var r = e("#loginPopup form").get(0);
i = e(r).height();
}
e(t).animate({
height:i + "px"
}, 500, function() {
_i_("3da:2459"), document.getElementById("username_input_top").focus(), _r_();
}), t.setAttribute("shown", "true");
} else e(t).animate({
height:"0px"
}, 500, function() {
_i_("3da:2460"), e(this).css("display", "none"), _r_();
}), t.setAttribute("shown", "false");
_r_();
},
hideLoader:function() {
_i_("3da:1374"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
},
preShowMenu:function() {
_i_("3da:1375"), ("book" != booking.env.b_action || "1" == booking.env.is_exp_user_center_bar) && (booking[sNSStartup].new_personal_menu.openSelect("current_account"), oThat.moused_menu = !1, e("#current_account").mouseenter(function() {
_i_("3da:2461"), oThat.moused_menu = !0, _r_();
}), setTimeout(function() {
_i_("3da:2462"), oThat.moused_menu || booking[sNSStartup].new_personal_menu.closeSelect(), _r_();
}, 4e3)), _r_();
}
}, booking[sNSStartup].new_personal_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("3da:1376");
var t = this;
e(".b_msie_6").length && (this.is_ie = 6), e(".b_msie_7").length && (this.is_ie = 7), "1" == booking.env.is_user_center_bar || (e(".select_box").mouseenter(function() {
_i_("3da:2463"), e(this).addClass("sel_hover"), _r_();
}), e(".select_box").mouseleave(function() {
_i_("3da:2464"), e(this).removeClass("sel_hover"), _r_();
})), e("body").click(function(i) {
if (_i_("3da:2224"), 2 == t.opening_state) {
var n = e(i.target);
e(n).length && (e(n).parents("#current_account_foldout").length || t.closeSelect());
}
if (booking.maps && booking.maps.map_opened && (!booking.maps.is_sr || !booking.map.mapHasBeenDragged)) {
var r = e(i.target);
!booking.maps.is_hp && !booking.maps.is_sr || !r.length || r.is("#b_map_container") || r.parents("#b_map_container,#sr_map").length || "close_map" === r.attr("id") || /gstatic/.test(r.attr("src")) || (e("#close_map").length > 0 ? e("#close_map").click() :e("#close_map_lightbox").length > 0 && e("#close_map_lightbox").click());
}
_r_();
}), e(".select_box").click(function(i) {
_i_("3da:2225"), 0 == t.opening_state ? t.openSelect(e(this).attr("id")) :t.cur_open != e(this).attr("id") ? t.closeSelect(e(this).attr("id")) :e(i.target).parents("#current_account_foldout").length || t.closeSelect(), _r_();
}), _r_();
},
recheckHeight:function() {
_i_("3da:1377");
var t = e("#current_account_foldout .select_foldout_wrap").height() + 15;
e("#current_account_foldout").animate({
height:t + "px"
}, 400), _r_();
},
openSelect:function(t) {
if (_i_("3da:1378"), booking.env.b_is_tdot_traffic) {
var i = e("#" + t);
if ("show-auth-lightbox" === i.attr("data-command")) return _r_();
}
if ("1" != booking.env.is_user_center_bar || booking.env.b_is_tdot_traffic) {
if (oThat = this, "login_redesign" === t && booking.env.b_can_acc_bp_auth_lightbox) return _r_();
this.cur_open = t;
var n, r = e("#" + t + "_foldout"), a = "block" == e("#foldout_loggedin").css("display");
e("#" + t).addClass("sel_open"), this.opening_state = 1, r.css({
display:"block",
opacity:"0",
overflow:"hidden",
height:"400px",
width:"200px"
}), n = e(e(".select_foldout_wrap", r).get(0)), n.css({
"overflow-y":"hidden",
height:"auto"
});
var o = n.height(), s = n.width(), _ = this.max_select_height;
if (r.hasClass("flex_foldout")) var l = s + 10; else if (e("#" + t).hasClass("sel_done")) var l = s; else {
var l = s + 20;
e("#" + t).addClass("sel_done");
}
if (o >= this.max_select_height - 10 && "current_account_foldout" != r.attr("id") ? r.hasClass("flex_foldout") ? (_ = o + 10, 300 > _ && (_ = 300)) :(n.css({
"overflow-y":"scroll",
height:"230px",
width:l + "px"
}), 6 == !this.is_ie && 7 == !this.is_ie && (l += 10)) :(_ = o + 10, n.css({
"overflow-y":"hidden",
height:"auto"
})), 6 == this.is_ie || 7 == this.is_ie && !a ? (r.css({
opacity:"1",
height:"0px",
width:"0px"
}), r.css({
width:"auto"
}), r.hasClass("smaller_booking_nr_login") ? n.css({
width:"600px"
}) :n.css({
width:"482px"
}), s = n.width(), l = s + 10) :r.css({
opacity:"1",
height:"0px",
width:"auto"
}), r.hasClass("left_foldout") && !booking.env.rtl ? r.css({
width:l + "px",
"padding-right":"0px"
}) :r.css({
width:l + "px",
"padding-right":"10px",
left:"0"
}), 6 == this.is_ie || 7 == this.is_ie && !a) {
var d = r.parents(0).width();
if (r.hasClass("left_foldout") && !booking.env.rtl && (iFixedPointEx = d - r.width() - 2, iFixedPointEx < 0 && (d -= iFixedPointEx)), 6 == this.is_ie || 7 == this.is_ie) {
var c = 210;
e("#multiple_login", r).length && (c = e(".smaller_booking_nr_login").length && !a ? 550 :"block" != e("#foldout_loggedin").css("display") ? 482 :182), 7 == this.is_ie && (d += 100), r.css({
width:c + "px",
"padding-right":"18px"
});
} else r.css({
width:l + "px"
}), e(".select_foldout_wrap", r).css({
"overflow-x":"hidden"
});
}
this.openSlow ? (this.openSlow = !1, r.animate({
height:_ + "px"
}, 800)) :r.css({
height:_ + "px"
}), setTimeout(function() {
_i_("3da:2465"), oThat.opening_state = 2, _r_();
}, 200), booking.env.b_is_ipad && e("body").bind("touchstart", function(t) {
if (_i_("3da:2603"), 2 == oThat.opening_state) {
var i = e(t.target);
e(i).length && !e(i).is("#current_account") && (e(i).parents("#current_account_foldout").length || e(i).parents("#login_redesign") || (oThat.closeSelect(), e(this).unbind(t)));
}
_r_();
});
} else ;
_r_();
},
closeSelect:function(t, i, n) {
_i_("3da:1379");
var r = this;
i && (e("#foldout_login").css({
display:"none"
}), e("#multiple_login").css({
display:"none"
}), e("#foldout_loggedin").css({
display:"block"
}), n && e("#stats_menu_link").css({
display:"block"
})), 2 == this.opening_state && (e(".select_foldout").animate({
height:"0px"
}, 200, function() {
_i_("3da:2466"), e(".select_foldout").css({
display:"none"
}), e(".select_box").removeClass("sel_open"), t && null != t && r.openSelect(t), _r_();
}), this.opening_state = 0), e("#user_searches_menu").length && booking[sNSStartup].top_saved_searches.closeTabs(), _r_();
},
scrollToLogin:function() {
_i_("3da:1380"), booking.env.rtl ? e("body").scrollTo({
top:0,
left:0
}, 500) :e("body").scrollTo({
top:0,
left:1e3
}, 500), this.openSlow = !0, 0 == this.opening_state ? this.openSelect("current_account") :this.closeSelect("current_account"), _r_();
},
hideLoader:function() {
_i_("3da:1381"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
}
}, booking[sNSStartup].my_social_networks = {
priority:9,
tp_window:null,
tp_cur:"",
cur_state:"CLOSED",
window_sizes:{
yahoo:[ 510, 500 ],
facebook:[ 500, 450 ],
google:[ 850, 510 ]
},
init:function() {
_i_("3da:1382");
var t = this;
e(".signup_tp a, #re_log_in a, a.connect_with").click(function() {
_i_("3da:2226"), booking[sNSStartup].new_personal_menu.opening_state = 2;
var i = this, n = e(i).attr("href"), r = e(i).attr("id"), a = n;
if (e("#login_loading").show(), "OPENING" != t.cur_state) if (t.tp_window) t.tp_cur != r.toLowerCase() ? (window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED") :t.tp_window.focus(); else {
t.cur_state = "OPENING", t.tp_cur = r.toLowerCase();
var o = 500, s = 500;
if (t.window_sizes[t.tp_cur]) var o = t.window_sizes[t.tp_cur][0], s = t.window_sizes[t.tp_cur][0];
var _ = "width=" + o + ",height=" + s + ",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
t.tp_window = window.open(a, "", _);
var l = "rem_provider=" + t.tp_cur;
booking.env.b_this_url.indexOf(l) > -1 && (booking.env.b_this_url = booking.env.b_this_url.replace(";" + l, ""), booking.env.b_this_url = booking.env.b_this_url.replace(l, "")), t.checking_in = window.setInterval(function() {
_i_("3da:2722"), (t.tp_window && t.tp_window.closed || !t.tp_window) && (e("#login_loading").hide(), e("#page_login_loading").hide(), window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED"), _r_();
}, 1e3), t.cur_state = "OPENED", t.tp_window && t.tp_window.focus();
}
return _r_(!1);
}), _r_();
}
}, booking[sNSStartup].merge_mybooking_myaccount = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("3da:1383");
var t = this;
e("#user_pin_link").click(function() {
return _i_("3da:2227"), e("#foldout_error").hide(), e("#old_pin_login").css({
display:"block",
top:"0px"
}), e("#existing_user_login .login_right").hide(), e(".b_msie_8").length ? e("#old_pin_login").css({
left:"240px"
}) :e("#old_pin_login").animate({
left:"240px"
}), t.old_pin_show = !0, _r_(!1);
}), e("#new_user").click(function() {
_i_("3da:2228"), t.newUserOpen(!0, this), _r_();
}), e("#existing_user").click(function() {
_i_("3da:2229"), t.newUserOpen(!1, this), _r_();
}), e("#old_pin_login a").click(function() {
return _i_("3da:2230"), e("#foldout_error").hide(), e("#old_pin_login").css({
top:"0px"
}), e("#old_pin_login").animate({
left:"500px"
}, function() {
_i_("3da:2604"), e("#old_pin_login").css("display", "none"), _r_();
}), t.old_pin_show = !1, _r_(!1);
}), booking.env.b_is_on_signup_page && booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, document.getElementById("account_new_user")), _r_();
},
newUserOpen:function(t, i) {
_i_("3da:1384");
var n = e(i).parents(".user_login_form");
this.old_pin_show && (e("#old_pin_login", n).hide(), e("#existing_user_login .login_right", n).show()), t ? (e("#existing_user_login, #existing_user_signin", n).hide(), e("#foldout_signup, #new_user_signup", n).show(), e("#existing_user, #account_existing_user", n).removeClass("active"), e("#new_user, #account_new_user", n).addClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()) :(e("#existing_user_login, #existing_user_signin", n).show(), e("#foldout_signup, #new_user_signup", n).hide(), e("#existing_user, #account_existing_user", n).addClass("active"), e("#new_user, #account_new_user", n).removeClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()), e(".better_error").hide(), e("#old_pin_login").css("top", "0px"), _r_();
}
}, booking[sNSStartup].welcome_user = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("3da:1385"), e("#welcome_login").click(function() {
return _i_("3da:2231"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), _r_(!1);
}), e("#welcome_signup").click(function() {
return _i_("3da:2232"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this.id), _r_(!1);
}), _r_();
}
}, booking[sNSStartup].faq_login_foldout = {
priority:9,
init:function() {
_i_("3da:1386"), "general" == booking.env.b_action && "0" == booking.env.auth_level && e(".open_top_login").click(function() {
return _i_("3da:2467"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), e("body").scrollTo({
top:0,
left:0
}, 500), _r_(!1);
}), _r_();
}
}, _r_();
}(), function() {
_i_("3da:196"), B.when({
events:"ready"
}).run(function() {
_i_("3da:914");
var e = $(window);
function t() {
if (_i_("3da:1387"), null == window.opener) return _r_();
if (screen.width <= e.width()) return _r_();
var t = "404815" == booking.env.b_partner_id, n = e.width() < .9 * screen.width;
t ? n && $("body").bind("click.resize_partners", function(e) {
if (_i_("3da:2605"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(.95 * screen.width, .95 * screen.height), i(), _r_();
}) :$("body").bind("click.resize_partners", function(e) {
if (_i_("3da:2468"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(screen.width, screen.height), i(), _r_();
}), _r_();
}
function i() {
_i_("3da:1388"), $("body").unbind("click.resize_partners"), window.moveTo(0, 0), $(window).trigger("resize"), _r_();
}
t(), _r_();
}), _r_();
}(), booking[sNSStartupLoad].message_box = {
priority:9,
init:function() {
_i_("3da:502"), $("#self_change1 .messageBox").click(function(e) {
_i_("3da:1389");
var t = $(this).children("a").attr("href"), i = /(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
return t && "#" != t && !i.test(t) && (location.href = $(this).children("a").attr("href")), _r_(!1);
}), $("#isDifferent").fadeIn(), _r_();
}
}, booking.newsLanding = function() {
_i_("3da:306");
var e = function() {
_i_("3da:1015"), $(document).on("focus", ".location_dropdowns select", function() {
_i_("3da:2011");
var e = $(this).find(":selected").text();
$(this).attr("oldValue", e), _r_();
}), $(".location_dropdowns select").change(function() {
_i_("3da:2012");
var e, t = $(this).attr("id"), i = $(this).find(":selected").val(), n = $(this).find(":selected").text(), r = $(this).attr("oldValue");
i.length > 0 ? "fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries | " + n :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions | " + n :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities | " + n) :"fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries Remove | " + r :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions Remove | " + r :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities Remove | " + r), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), this.form.submit(), _r_();
}), $("#b_sortbox select").change(function() {
_i_("3da:2013"), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", "df_dropdown_sorting"), this.form.submit(), _r_();
}), $("#checkin-flexible-form").submit(function() {
_i_("3da:2014");
var e, t = $("#b_fd_checkin_date").val(), i = $("#fd_flex").attr("checked");
e = "undefined" != t ? i ? booking.env.b_lang + " | Date Select | Flexible" :booking.env.b_lang + " | Date Select" :booking.env.b_lang + " | Date Remove | ", booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].newsletterSignup = {
priority:8,
init:function() {
if (_i_("3da:503"), $(".subscriptionbox").click(function() {
return _i_("3da:1390"), booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), _r_(!1);
}), booking.env.b_show_newsletter_popup && booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), booking.env.b_show_solicitation_popup) {
if (booking.env.b_show_success_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_success"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
if (booking.env.b_show_error_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_error"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
}
_r_();
}
}, booking[sNSStartup].newsletterTutorials = {
priority:8,
init:function() {
_i_("3da:504");
var e = 1, t = this;
if (booking.env.tutorialpopup && window.b_cookie && window.b_cookie.showthistutorial != booking.env.tutorialpopup) {
var i = booking.env.tutorialpopup, n = $(".tutorialwrapper_" + i).attr("id");
t.loadPopups("#tutorial_dyk_" + i + "_s" + e, i, e);
}
$("#tutorial_dyk_02_s1 a.fd_next").click(function() {
_i_("3da:1391"), $("#show_reviews_tab").click(), _r_();
}), $("a.fd_close").click(function() {
_i_("3da:1392"), t.closeTutorial(this), _r_();
}), $("a.fd_next").click(function() {
_i_("3da:1393"), t.nextPopup(this, n, i), _r_();
}), _r_();
},
loadPopups:function(e, t, i) {
_i_("3da:505");
var n = this, r = $("#tutorial_dyk_" + t + "_s" + i).attr("rel");
if (r) {
var a = new n.relativePosition(r, !0, !1), o = $(e).attr("rev"), s = $(e).width(), _ = new n.getRelInlineCss(e);
if (_.rgValues && $(this).css({
top:"",
right:"",
bottom:"",
left:""
}), "undefined" != o) if ("right" == o) var l = {
top:a.relDivTop + _.rgTop + "px",
left:a.relDivSide + _.rgLeft + "px"
}; else if ("left" == o) var l = {
top:a.relDivTop + _.rgTop + "px",
left:a.relDivSide - s + _.rgLeft + "px"
};
a.scrollToDiv && 1 == i ? $("html, body").delay(500).animate({
scrollTop:a.relDivTop - 50
}, 1e3, function() {
_i_("3da:2233"), $(e).css(l).fadeIn(300), _r_();
}) :$(e).delay(300).css(l).fadeIn(500);
} else $(e).delay(300).fadeIn(500);
_r_();
},
relativePosition:function(e) {
_i_("3da:506");
var t = $("#" + e).offset() || {};
this.relDivTop = t.top;
var i = t.left, n = $("#bodyconstraint-inner").offset().left;
this.relDivSide = i - n, this.relDivTop > 200 ? this.scrollToDiv = !0 :this.scrollToDiv = !1, _r_();
},
getRelInlineCss:function(e) {
_i_("3da:507"), this.rgTop = parseInt($(e).css("top").replace("px", "")) || 0, this.rgLeft = parseInt($(e).css("left").replace("px", "")) || 0, 0 == this.rgLeft && this.rgTop ? this.rgValues = !1 :this.rgValues = !0, _r_();
},
nextPopup:function(e, t, i) {
_i_("3da:508");
var n = $(e).attr("id").split("nextstep_")[1], r = parseInt(n) + 1, a = "#" + t + "_s" + n;
$(a).fadeOut(300), this.loadPopups("#tutorial_dyk_" + i + "_s" + r, i, r), _r_();
},
closeTutorial:function(e) {
return _i_("3da:509"), $(e).closest(".tutorial_dyk").fadeOut(300), window.b_cookie = window.b_cookie || {}, window.b_cookie.showthistutorial = booking.env.tutorialpopup, "undefined" != typeof JSON && $.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_(!1);
}
}, booking[sNSStartup].ow_page = {
init:function() {
_i_("3da:510"), $(".country_flag a").click(function(e) {
_i_("3da:1394");
var t = $(this).parents("div.country_block");
$("div.aaa:eq(0)", t).is(":visible") ? $("div.aaa", t).hide() :$("div.aaa", t).show(), e.preventDefault(), _r_();
}), $(".gcityname a").click(function(e) {
_i_("3da:1395");
var t = $(this).parents("div.office");
$("div.bbb:eq(0)", t).is(":visible") ? $("div.bbb", t).hide() :$("div.bbb", t).show(), e.preventDefault(), _r_();
}), _r_();
}
}, booking[sNSStartup].accounts_for_everybody = {
priority:9,
passwordFields:0,
passwordChar:"",
maskPass:"",
isAdding:!1,
keyCounter:0,
init:function() {
_i_("3da:511");
var e = this;
$(".passwd_strength").each(function() {
_i_("3da:1396");
var e = '<div class="pwd_strength"><div class="strength"></div></div><span class="jq_tooltip strength_text" title="' + booking.env.b_passwd_tooltip + '" rel="300">&nbsp;</span>';
$(this).after(e);
var t = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px");
var i = this;
$(".pwd_strength", this.parentNode).click(function() {
_i_("3da:2234"), $(i).focus(), _r_();
}), $(".pwd_strength", this.parentNode).mouseenter(function() {
_i_("3da:2235"), $(i).addClass("hoverText"), _r_();
}), $(".pwd_strength", this.parentNode).mouseleave(function() {
_i_("3da:2236"), $(i).removeClass("hoverText"), _r_();
}), _r_();
}), $(".passwd_strength").focus(function() {
_i_("3da:1397");
var e = parseInt($(this).css("margin-left").replace("px", "")), t = "safari" == booking.env.b_browser ? 2 :e + 2;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px"), _r_();
}), $(".passwd_strength").blur(function() {
_i_("3da:1398");
var e = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", e + "px"), _r_();
}), $(".passwd_strength").keyup(function() {
_i_("3da:1399"), e.keyCounter++;
var t = this, i = e.keyCounter;
setTimeout(function() {
_i_("3da:2237"), e.calculateStrength(t, i), _r_();
}, 400), _r_();
}), $("td.pass_fix").length && ($("#new_pass").blur(function() {
_i_("3da:1896");
var e = $(this).parents("tr").get(0);
"" != $(this).val() ? ($("th span", e).removeClass("val-no"), $("th span", e).addClass("val-yes")) :($("th span", e).removeClass("val-yes"), $("th span", e).addClass("val-no")), _r_();
}), $("#confirm_new_pass").blur(function() {
_i_("3da:1897");
var e = $("#new_pass").val(), t = $(this).parents("tr").get(0);
"" != $(this).val() && $(this).val() == e ? ($("th span", t).removeClass("val-no"), $("th span", t).addClass("val-yes")) :($("th span", t).removeClass("val-yes"), $("th span", t).addClass("val-no")), _r_();
})), _r_();
},
calculateStrength:function(e, t) {
if (_i_("3da:512"), this.keyCounter == t) {
var i = $(e).val(), n = $(".pwd_strength .strength", e.parentNode);
if (n.length) {
var r, a, o = 0, s = 0, _ = 0, l = 0, d = 0, c = i.length;
if (c > 0) {
o = parseInt(c / 2.5);
for (var u = 0; c > u; u++) {
var h = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_±¤", f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
isNaN(i.charAt(u)) || (s += 1), isNaN(i.charAt(u)) && (_ = 1), h.indexOf(i.charAt(u)) > -1 && (l += 2), f.indexOf(i.charAt(u)) > -1 && (d += 1);
}
l > 4 && (l = 4), s > 2 && (s = 2), d > 2 && (d = 2), 0 != _ && (o += s), o += l, o += d, o > 10 && (o = 10);
}
r = 26, ($(e).parents("#foldout_signup").length || $(e).parents("#registration_id").length) && (r = 18), a = r * o;
var p = parseInt(o / 2 + 1);
8 > c ? (n.addClass("strength_invalid"), 0 === a ? a = r :a > 3 && (a = 3 * r), p = 0) :n.removeClass("strength_invalid"), n.animate({
width:a + "px"
}), "" != i ? $(".strength_text", e.parentNode).text(booking.env.b_password_strength_msg[p]) :$(".strength_text", e.parentNode).text("");
}
}
_r_();
},
togglePasswd:function(e) {
_i_("3da:513");
var t = $(e).parents("form").get(0);
$(".textual_passwd", t).toggle();
var i = $(".textual_passwd", t).get(0), n = $(i).css("display"), r = $(i).attr("name");
r = r.split("textpwd_")[1];
var a = $("input[name='" + r + "']", t).get(0);
"none" != n ? (this.fixCursorPosition(null, i), $("td.pass_fix").length || $(a).addClass("focusText")) :($(a).removeClass("focusText"), this.fixCursorPosition(null, a)), this.syncPassFields($(i).get(0), !0), _r_();
},
fixCursorPosition:function(e, t) {
if (_i_("3da:514"), null != e) var i = document.getElementById(e); else var i = t;
i.focus();
var n = $(i).val().length;
if (n > 0) if ("selectionStart" in i) i.selectionStart = n, i.focus(); else {
var r = document.selection.createRange();
r.moveStart("character", n), r.moveEnd("character", 0), r.select();
}
_r_();
},
syncPassFieldsMask:function(e) {
_i_("3da:515");
var t = this, i = "textpwd_" + $(e).attr("name"), n = $("input." + i, e.parentNode).get(0), r = $(e).val(), a = "";
t.maskPass = "";
for (var o = 0; o < r.length; o++) o >= r.length - 1 ? (a += r[o], t.maskPass += this.passwordChar) :(a += this.passwordChar, t.maskPass += this.passwordChar);
$(n).val(a), setTimeout(function() {
_i_("3da:1400"), t.syncPassFieldsFullMask(n), _r_();
}, 1e3), _r_();
},
syncPassFieldsFullMask:function(e) {
_i_("3da:516"), $(e).val(this.maskPass), _r_();
},
syncPassFields:function(e, t) {
_i_("3da:517");
var i = !1, n = null, r = this;
if (t) {
var a = $(e).attr("name");
a = a.split("textpwd_")[1];
var o = $("input[name='" + a + "']", e.parentNode.parentNode).get(0), s = $(o).attr("id");
if (s.indexOf("confirm_") > -1) {
var _ = "#" + s.replace("confirm_", "");
$(_).length || (_ = "#" + s.replace("_confirm", "")), i = !0;
} else var _ = "#confirm_" + s;
if ($(_).length) {
n = $(_).get(0), $(n).val($(e).val());
var l = $(n).attr("name");
l = "textpwd_" + l;
var d = $("input." + l, n.parentNode.parentNode).get(0);
$(d).val($(e).val());
}
} else var a = "textpwd_" + $(e).attr("name"), o = $("input." + a, e.parentNode).get(0);
if ($(o).val($(e).val()), t) {
if (i) {
if ($(n).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2469"), r.calculateStrength(n, c), _r_();
}, 400);
}
} else if ($(o).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2470"), r.calculateStrength(n, c), _r_();
}, 400);
}
} else if ($(e).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2238"), r.calculateStrength(n, c), _r_();
}, 400);
}
_r_();
}
}, booking[sNSStartup].pb_mybooking_bn_pin_login_resend_conf = function(e, t, i) {
_i_("3da:307");
var n = !1, r = 240, a = 0, o = 28, s = "g-hidden";
function _() {
_i_("3da:632"), t("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat", "click", d), t("body").delegate(".js-btn--close", "click", c), t("body").delegate(".resend-conf-form", "submit", u), t("body").delegate(".resend-conf-form__send", "click", u), _r_();
}
function l() {
_i_("3da:633"), n || (n = !0, r = t(".popover_content--has-footer").outerHeight(), t(".popover_content--has-footer").css("min-height", r), t(".resend-conf").addClass("resend-conf--absolute")), _r_();
}
function d(e) {
_i_("3da:634");
var i = t(e.target).closest(".resend-conf");
return i.closest(".popover_content--has-footer").length && l(), a = a || i.find(".resend-conf__step--invite").outerHeight(), r = booking.env.b_is_tdot_traffic ? r + 100 :r, i.addClass("resend-conf--active"), i.animate({
height:r - o
}, 250), i.find(".resend-conf__step").addClass(s), i.find(".resend-conf__step--form").removeClass(s), _r_(!1);
}
function c(e) {
_i_("3da:635");
var i = t(e.target).closest(".resend-conf");
return i.removeClass("resend-conf--active"), i.find(".resend-conf__step").addClass(s), i.find(".resend-conf__step--invite").removeClass(s), i.animate({
height:a
}, 250), _r_(!1);
}
function u(e) {
_i_("3da:636");
var i = t(e.target), n = i.closest(".resend-conf"), r = i.is("form") ? i :i.closest(".resend-conf-form"), a = n.find(".resend-conf-form__send");
if (e.preventDefault(), a.is(".disabled")) return _r_(!1);
if ("" == r.find("input[name=email]").val() || !r.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return r.find("input[name=email]").addClass("invalid-input"), r.find(".resend-conf-form__error").removeClass(s), _r_(!1);
r.find("input[name=email]").removeClass("invalid-input"), r.find(".resend-conf-form__error").addClass(s), a.addClass("disabled"), t.ajax({
url:r.attr("action") + "?" + r.serialize(),
dataType:"jsonp",
jsonpCallback:"booking_cb_" + Date.now(),
success:function() {
_i_("3da:2015"), f(n), h(n), _r_();
},
error:function() {
_i_("3da:2016"), p(n), _r_();
}
}), _r_();
}
function h(e) {
_i_("3da:637");
var t = e.find(".resend-conf-form");
t.length && t[0].reset(), e.find(".resend-conf-form input[name=email]").removeClass("invalid-input"), e.find(".resend-conf-form .resend-conf-form__error").addClass(s), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
function f(e) {
_i_("3da:638"), e.find(".resend-conf__step").addClass(s), e.find(".resend-conf__step--success").removeClass(s), e.find(".resend-conf__success__email").text(e.find(".resend-conf-form input[name=email]").val()), _r_();
}
function p(e) {
_i_("3da:639"), e.find(".resend-conf__step").addClass(s), e.find(".resend-conf__step--error").removeClass(s), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
return _r_({
init:_
});
}(booking, jQuery, jQuery(window)), function(e, t) {
_i_("3da:197");
var i = B.require("jquery"), n = function(e) {
_i_("3da:915");
var i, n, r, a = "msie" === B.env.b_browser;
for (i = 0, n = e.length; n > i; i += 1) {
if (a) {
new Image().src = e[i];
continue;
}
r = t.createElement("object"), r.data = e[i], a ? (r.width = 1, r.height = 1, r.style.visibility = "hidden", r.type = "text/plain") :(r.width = 0, r.height = 0), t.body.appendChild(r);
}
_r_();
};
i(e).on("load", function() {
_i_("3da:916");
var e = i(t.body), r = "mousemove keyup scroll mousedown", a = i("[data-preload-assets]"), o = i.cookie("has_preloaded"), s = 0, _ = function() {
_i_("3da:1898"), e.unbind(r, d), clearTimeout(s), n(a.data("preload-assets")), i.cookie && i.cookie("has_preloaded", 1, {
expires:1,
path:"/"
}), _r_();
}, l = function() {
_i_("3da:1899"), s = setTimeout(_, 1e4), _r_();
}, d = function() {
_i_("3da:1900"), clearTimeout(s), l(), _r_();
};
if (o) return _r_();
a.length && setTimeout(function() {
_i_("3da:2239"), l(), e.bind(r, d), _r_();
}, 1e4), _r_();
}), _r_();
}(window, window.document), function() {
_i_("3da:198");
var e = B.require("jquery");
booking[sNSStartup].rate_guarantee = {
priority:9,
init:function() {
_i_("3da:1401");
var t = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip " ].join(","), i = [ "status=1", "toolbar=0", "menubar=0", "width=450", "height=550", "scrollbars=1" ].join(","), n = function() {
return _i_("3da:2240"), window.open(this.href, "RateGuarantee", i), _r_(!1);
};
return e(document).on("click", t, n), _r_(!0);
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].search_engine_partitioned_disambiguation_page = {
priority:9,
init:function() {
_i_("3da:518"), $(".disambBlockHeader").click(function() {
_i_("3da:1402");
var e = $(this), t = $("#" + e.attr("data-results"));
return t.hasClass("disambBlockShown") ? t.slideUp().removeClass("disambBlockShown") :t.slideDown().addClass("disambBlockShown"), _r_(!1);
}), _r_();
}
}, B[sNSStartup].searchbox_dates_widget = function(e, t) {
_i_("3da:308");
function i(t) {
_i_("3da:640");
var i = e.require("search/searchbox/analytics");
i.send(t), _r_();
}
function n(n) {
_i_("3da:641"), e.Search.validators.create({
type:"dates",
name:"dates_are_not_empty",
test:function() {
_i_("3da:2017");
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("regular" !== e.search.dates().mode) return _r_(!1);
return _r_("valid" !== t.type && "valid" !== i.type);
},
fail:function() {
return _i_("3da:2018"), i("[error] dates: dates_are_not_empty"), _r_(e.jstmpl.translations("searchbox_error_msg_need_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_date_is_selected",
test:function() {
if (_i_("3da:2019"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== t.type);
},
fail:function() {
return _i_("3da:2020"), i("[error] dates: checkin_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_in_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkout_date_is_selected",
test:function() {
if (_i_("3da:2021"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== i.type);
},
fail:function() {
return _i_("3da:2022"), i("[error] dates: checkout_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_out_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"duration_is_less_than_30_days",
test:function() {
if (_i_("3da:2023"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(Math.abs(i - t) > 30);
},
fail:function() {
return _i_("3da:2024"), i("[error] dates: duration_is_less_than_30_days"), _r_(e.jstmpl.translations("sbox_error_30_night_res"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_is_earlier_than_checkout",
test:function() {
if (_i_("3da:2025"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t > i);
},
fail:function() {
return _i_("3da:2026"), i("[error] dates: checkin_is_earlier_than_checkout"), _r_(e.jstmpl.translations("sbox_error_checkout_after"));
}
}), e.Search.validators.create({
type:"dates",
name:"dates_are_not_in_past",
test:function() {
if (_i_("3da:2027"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
var n = e.calendar2.minToday();
return _r_(n > t.dateObject_ || n > i.dateObject_);
},
fail:function() {
return _i_("3da:2028"), i("[error] dates: dates_are_not_in_past"), _r_(e.jstmpl.translations("sbox_error_checkin_future"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_checkout_not_on_same_day",
test:function() {
if (_i_("3da:2029"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t.valueOf() == i.valueOf());
},
fail:function() {
return _i_("3da:2030"), i("[error] dates: checkin_checkout_not_on_same_day"), _r_(e.jstmpl.translations("search_box_cal_error_dates_same"));
}
}), e.eventEmitter.bind(e.Search.Events.DATE_INVALID, function(e, i) {
_i_("3da:1714");
var n, r = t(".js--sb-searchbox__dates-error"), a = i.validators;
if (!a) return _r_();
n = a.reduce(function(e, t) {
return _i_("3da:2471"), "fail" === t.status && t.message && e.push(t.message), _r_(e);
}, []), n.length > 0 && r.html(n.shift()).addClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_VALID, function() {
_i_("3da:1715");
var e = t(".js--sb-searchbox__dates-error");
e.html("").removeClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_MODE_CHANGED, function(t, i) {
_i_("3da:1716"), e.search.dates().validate("reset"), _r_();
}), t("#frm, .js--sb-searchbox").bind("submit", function(t) {
_i_("3da:1717");
var i, n = e.search.dates();
return n.mode !== e.Search.DateModes.NODATES && "valid" !== n.checkin.type && "valid" !== n.checkout.type && n.setMode(e.Search.DateModes.NODATES), i = n.validate(), _r_(i);
}), _r_();
}
function r(e, t) {
if (_i_("3da:642"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}
function a(i, n) {
_i_("3da:643");
var a, s, _ = n.type, l = e.search.dates(n.type), d = 1, c = function() {
_i_("3da:1718");
var e = t('[data-component="search/searchbox/searchbox"]').data("componentInstanceSearch/searchbox/searchbox");
if (e && e.model.destination && e.model.destination.get().acc_type_id) return _r_(e.model.destination.get().acc_type_id);
return _r_(null);
};
if (("resorts" === e.env.b_landingpage_theme || 206 == e.env.b_indirect_acc_type_id || 206 == c()) && (e.et.stage("YdVSfHRdZeEXfCYO", 1), e.et.track("YdVSfHRdZeEXfCYO") && (d = 4)), "checkin" !== _ && "checkout" !== _) return _r_();
if ("valid" !== l.type && "month" !== l.type) return _r_();
if (a = e.search.dates("checkin"), s = e.search.dates("checkout"), "checkin" === _ && ("invalid" === s.type || a >= s) && (s = e.search.dates("checkout", r(a, d))), "checkout" === _ && ("valid" !== a.type && (a = e.search.dates("checkin", r(e.search.dates("checkout"), -d))), a >= s && (a = e.search.dates("checkin", r(e.search.dates("checkout"), -d)))), o(), e.search.dates("mode", e.Search.DateModes.REGULAR), "hotel" == booking.env.b_action) return _r_();
try {
"checkin" === _ && "valid" === a.type && e[sNSStartup].calendar.syncDates(!1, a.date, a.month + 1, a.year, !1), "checkout" === _ && "valid" === s.type && e[sNSStartup].calendar.syncDates(!0, s.date, s.month + 1, s.year, !1);
} catch (u) {
window.onerror("old_calendar_api_method_does_not_exist");
}
_r_();
}
function o() {
_i_("3da:644");
var i = _();
t(".js--sb-dates__los").html(e.jstmpl("search_dates_length_of_stay").render({
b_checkin_checkout_interval:i,
fe_sb_state_length_of_stay:i,
b_lang:e.env.b_lang
})), _r_();
}
function s(t) {
_i_("3da:645"), t.find(".b-date-selector, .js--sb-dates__check-in, .js--sb-dates__check-out").dateSelector(), e.eventEmitter.bind(e.Search.Events.DATE_CHANGED, a), e.eventEmitter.bind(e.Search.Events.DATE_MONTH_CHANGED, a), _r_();
}
function _() {
_i_("3da:646");
var t, i, n, r = 0;
return t = e.search.dates(), i = t && t.checkin, n = t && t.checkout, n && i && n.valueOf() > i.valueOf() && (r = n.valueOf() - i.valueOf()), _r_(r);
}
function l() {
if (_i_("3da:647"), e.env.b_is_villa_site) return _r_();
var i = t(".b-form__dates, .js--sb-dates");
s(i), n(i), "company" == booking.env.b_action && i.find(".b-form-flexible-dates__toggler input:checked").length && booking.search.dates().setMode("no-dates"), _r_();
}
return _r_({
init:l
});
}(B, $), B.Search.tracker = {
track:function(e, t, i) {
_i_("3da:519");
var n = [ "Searchbox", B.env.b_action, "[" + e + "] " + t, i ];
B.google.trackEvent.apply(B.google, n), _r_();
},
trackError:function(e) {},
trackEvent:function(e) {
return _i_("3da:521"), _r_(this.track("interaction", e));
}
}, B[sNSStartup].sb_group_widget = function() {
_i_("3da:309");
var e = B.require("jquery");
B.Search = B.Search || {}, B.Search.SPECIAL_DIGITS = {
"０":0,
"１":1,
"２":2,
"３":3,
"４":4,
"５":5,
"６":6,
"７":7,
"８":8,
"９":9,
"٠":0,
"١":1,
"٢":2,
"٣":3,
"٤":4,
"٥":5,
"٦":6,
"٧":7,
"٨":8,
"٩":9,
"۰":0,
"۱":1,
"۲":2,
"۳":3,
"۴":4,
"۵":5,
"۶":6,
"۷":7,
"۸":8,
"۹":9
}, B.Search.AbstractGroupConfigurationWidget = function(e, t) {}, B.Search.AbstractGroupConfigurationWidget.prototype.initialize = function(e, t) {
_i_("3da:1017"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.setOptions = function(t) {
_i_("3da:1018"), this.options || (this.options = {}), this.options = e.extend(this.options, t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.initEvents = function() {
throw _i_("3da:1019"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3da:1020"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages = function(t) {
_i_("3da:1021"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages");
for (var i = e("<ul></ul>", {
"class":"b-form-group__error-messages_list"
}), n = e("<li></li>", {
"class":"b-form-group__error-messages_list-item"
}), r = 0; r < t.length; r++) i.append(n.clone().html(t[r]));
this.$errorContainer.empty().append(i), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages = function() {
_i_("3da:1022"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages"), this.$errorContainer.empty(), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.getConfig = function() {
throw _i_("3da:1023"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.trigger = function(e, t) {
_i_("3da:1024"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), "groupModeChanged" === e && "function" == typeof this.onExternalEventModeChanged && this.onExternalEventModeChanged.apply(this, [].slice.call(arguments, 1)), "groupInvalid" === e && "function" == typeof this.onExternalEventGroupInvalid && this.onExternalEventGroupInvalid.apply(this, [].slice.call(arguments, 1)), "groupValid" === e && "function" == typeof this.onExternalEventGroupValid && this.onExternalEventGroupValid.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onInit = function() {
_i_("3da:1025");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3da:2382"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onChange = function() {
_i_("3da:1026"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractGroupConfigurationWidget.prototype.hide = function() {
_i_("3da:1027"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.show = function() {
_i_("3da:1028"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.PredefinedGroupSelector = function(e, t) {
_i_("3da:1029"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.PredefinedGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.PredefinedGroupSelector.prototype.initialize = function(t, i) {
_i_("3da:1030");
var n, r, a = {};
this.$element = t, this.$selector = t.find("select"), this.setOptions(i), this.$selector.find("option").each(function(t, i) {
_i_("3da:2031");
var o = e(i), s = B.Search.createGroup(o.data());
a[s] = i, "more_options" === s.type && (n = i), o.is(":selected") && (r = s), _r_();
}), this.defaultConfigurationOption = n, this.groupConfigurationOptions = a, this.selectedConfiguration = r, _r_();
}, B.Search.PredefinedGroupSelector.prototype.initEvents = function() {
_i_("3da:1031"), this.$selector.bind("change", e.proxy(this.onChange, this)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onChange = function(e) {
_i_("3da:1032");
var t = this.getConfig();
this.selectedConfiguration.valueOf() !== t.valueOf() && (this.selectConfiguration(t), "function" == typeof this.options.onChange && this.options.onChange.call(this, t)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.selectConfiguration = function(e) {
_i_("3da:1033"), this.groupConfigurationOptions[e] ? (this.groupConfigurationOptions[e].setAttribute("selected", "selected"), this.selectedConfiguration = e) :(this.selectedConfiguration = !1, this.defaultConfigurationOption.setAttribute("selected", "selected")), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
if (_i_("3da:1034"), this.selectedConfiguration.valueOf() === e.valueOf()) return _r_();
this.selectConfiguration(e), _r_();
}, B.Search.PredefinedGroupSelector.prototype.getConfig = function() {
_i_("3da:1035");
var t = this.$selector.get(0), i = e(t.options[t.selectedIndex]), n = this.parseOption(i);
return _r_(n);
}, B.Search.PredefinedGroupSelector.prototype.parseOption = function(e) {
_i_("3da:1036");
var t = e.data(), i = B.Search.createGroup(t);
return _r_(i);
}, B.Search.CustomGroupSelector = function(t, i) {
_i_("3da:1037"), this.$element = t, this.setOptions(i), this.$adultsSelector = t.find("select[name=group_adults]"), this.$roomsSelector = t.find("select[name=no_rooms]"), this.$childrenSelector = t.find("select[name=group_children]"), this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]", "change", e.proxy(this.onChange, this)), this.onInit(), _r_();
}, B.Search.CustomGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.CustomGroupSelector.prototype.DISABLED_CLASS = "b-form-custom-group_disabled", B.Search.CustomGroupSelector.prototype.getConfig = function() {
_i_("3da:1038");
var e = this.$adultsSelector.val(), t = this.$roomsSelector.val(), i = this.$childrenSelector.val(), n = {};
return e && !isNaN(parseInt(e, 10)) && (n.adults = parseInt(e, 10)), t && !isNaN(parseInt(t, 10)) && (n.rooms = parseInt(t, 10)), i && !isNaN(parseInt(i, 10)) && (n.children = parseInt(i, 10)), _r_(n);
}, B.Search.CustomGroupSelector.prototype.onChange = function(e) {
_i_("3da:1039");
var t = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, t), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventModeChanged = function(e) {
_i_("3da:1040"), "basic" === e.mode ? this.hide() :this.show(), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3da:1041");
var t;
e.adults !== t && this.$adultsSelector.val(e.adults), e.rooms !== t && this.$roomsSelector.val(e.rooms), e.children !== t && this.$childrenSelector.val(e.children), "basic" === e.type ? this.hide() :this.show(), _r_();
}, B.Search.ChildrenAgesSelector = function(e, t) {
_i_("3da:1042"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.ChildrenAgesSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.ChildrenAgesSelector.prototype.show = function() {
_i_("3da:1043"), B.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initialize = function(e, t) {
_i_("3da:1044"), this.$element = e, this.$inputsContainer = this.$element.find(".b-custom-element__container"), this.ages = this.getAges(), this.setOptions(t), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initEvents = function() {
_i_("3da:1045"), this.$element.delegate("select[name=age]", "change", e.proxy(this.onChange, this)), this.$inputsContainer.find(".b-custom-element__label").bind("click", e.proxy(this.onLabelClick, this)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.sanitizeInput = function() {
_i_("3da:1046"), this.getInputs().each(function(e, t) {
_i_("3da:2032");
var i = t.value;
i = i.replace(/\D/g, function(e) {
return _i_("3da:2606"), _r_(B.Search.SPECIAL_DIGITS.hasOwnProperty(e) ? B.Search.SPECIAL_DIGITS[e] :e);
}), t.value = i, _r_();
}), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onChange = function() {
_i_("3da:1047"), this.sanitizeInput();
var e = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, e), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onLabelClick = function(e) {
_i_("3da:1048"), e.preventDefault();
var t = this.getInputs(), i = t.filter(function() {
return _i_("3da:2472"), _r_("" == this.value);
}).first();
i.length ? i.focus() :t.first().focus(), _r_();
}, B.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS = "b-form-children-ages_disabled", B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid = function(e) {
_i_("3da:1049"), this.showErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid = function(e) {
_i_("3da:1050"), this.hideErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3da:1051");
for (var t, i = this.getAges(), n = e.childrenAges, r = 0; r < n.length; r++) n[r] === t && (n[r] = i[r]);
0 === n.length ? this.hide() :((n.length !== i.length || n.join(",") !== this.serialize()) && this.render(n), this.show()), _r_();
}, B.Search.ChildrenAgesSelector.prototype.getInputs = function() {
return _i_("3da:1052"), _r_(this.$inputsContainer.find(".b-children-ages-configurator__element"));
}, B.Search.ChildrenAgesSelector.prototype.getConfig = function() {
return _i_("3da:1053"), _r_({
childrenAges:this.getAges()
});
}, B.Search.ChildrenAgesSelector.prototype.getAges = function() {
_i_("3da:1054");
var t = this.getInputs(), i = [];
return t.each(function(t, n) {
_i_("3da:2033"), e(n).find(":selected").hasClass("sb_child_ages_empty_zero") ? i.push(void 0) :i.push(n.value), _r_();
}), this.ages = i, _r_(i);
}, B.Search.ChildrenAgesSelector.prototype.serialize = function() {
return _i_("3da:1055"), _r_(this.ages.join(","));
}, B.Search.ChildrenAgesSelector.prototype.renderLabel = function(t) {
_i_("3da:1056");
var i = null, n = null, r = null, a = null, o = null, s = B.require("formatting/date"), _ = B.search.dates("checkout"), l = this.$element.find(".b-custom-element__label");
"valid" === _.type ? (i = {
day:_.date,
month:_.month,
year:_.year
}, r = B.jstmpl.translations("bh_gsb_search_box_checkout_age", null, {
date:s.format(i, "short_date")
}), n = B.jstmpl.translations("bh_gsb_search_box_checkout_age_plural", null, {
date:s.format(i, "short_date")
}), l.text(1 == t ? r :n), "city" === B.env.b_action && (a = e(".lp_bold_date_picker_lightbox_clear.plural"), o = e(".lp_bold_date_picker_lightbox_clear.singular"), a.text(n), o.text(r))) :(n = B.jstmpl.translations("loc_sbox_children_age_plural"), r = B.jstmpl.translations("loc_sbox_children_age_singular"), l.text(1 == t ? r :n)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.render = function(e) {
_i_("3da:1057");
var t, i = e.length, n = "";
this.$inputsContainer.find(".b-children-ages-configurator__element").remove(), this.renderLabel(i);
for (var r = 0; i > r; r++) t = e[r] >= 0 ? e[r] :"", n += this.renderSelector(t);
this.$inputsContainer.append(n), _r_();
}, B.Search.ChildrenAgesSelector.prototype.renderSelector = function(e, t, i) {
_i_("3da:1058");
var n = "b-children-ages-configurator__element b-children-ages-configurator__element_selector js-multi-room-ages", r = '<select name="age" class="' + n + '">';
if (e) var e = parseInt(e, 10) || 0; else r += "index" === B.env.b_action || "hotel" === B.env.b_action || "searchresults" === B.env.b_action ? '<option class="sb_child_ages_empty_zero" value="12 " selected="selected"></option>' :'<option class="sb_child_ages_empty_zero" value="0 " selected="selected"></option>';
for (var a = 0; 17 >= a; a++) r += "<option " + (0 === a ? 'class="sb_child_ages_not_empty_zero"' :"") + ' value="' + a + '" ' + (a === e ? "selected" :"") + ">" + a + "</option>";
return r += "</select>", _r_(r);
}, B.Search.createWidgetPlugin("predefinedGroupSelector", B.Search.PredefinedGroupSelector), B.Search.createWidgetPlugin("customGroupSelector", B.Search.CustomGroupSelector), B.Search.createWidgetPlugin("childrenAgesSelector", B.Search.ChildrenAgesSelector);
function t() {
_i_("3da:648"), e(".b-form-predefined-group").predefinedGroupSelector({
onChange:function(e) {
_i_("3da:2034"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), "more_options" !== e.type && B.search.group(e), "more_options" === e.type ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED) :"basic" === e.type && 2 === e.adults && 1 === e.rooms && 0 === e.children ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED) :"basic" === e.type && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED), _r_();
},
onInit:function(e) {
_i_("3da:2035"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), _r_();
}
}), e(".b-form-custom-group").customGroupSelector({
onChange:function(e) {
_i_("3da:2036");
var t = B.search.group().value;
t.adults !== e.adults && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED), t.rooms !== e.rooms && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED), t.children !== e.children && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED), B.search.group(e), _r_();
},
onInit:function(e) {
_i_("3da:2037"), "basic" !== B.search.group().mode() && this.show(), _r_();
}
}), e(".b-form-children-ages").childrenAgesSelector({
onChange:function(e) {
_i_("3da:2038"), B.search.group("childrenAges", e.childrenAges), B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED), _r_();
},
onInit:function(e) {
_i_("3da:2039"), e.childrenAges.length > 0 ? this.show() :this.hide(), B.eventEmitter.bind(B.Search.Events.DATE_CHANGED, function(e, t) {
_i_("3da:2652"), "checkout" === t.type && this.renderLabel(this.getConfig().childrenAges.length), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_INVALID, function(e, t) {
_i_("3da:2653"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_MONTH_CHANGED, function(e, t) {
_i_("3da:2654"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), _r_();
}
}), B.eventEmitter.bind(B.Search.Events.GROUP_MODE_CHANGED, function(t, i) {
_i_("3da:1719"), e.fn.predefinedGroupSelector("notify", "groupModeChanged", i), e.fn.customGroupSelector("notify", "groupModeChanged", i), e.fn.childrenAgesSelector("notify", "groupModeChanged", i), B.search.group().validate("reset"), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_CHANGED, function(t, i) {
_i_("3da:1720"), e.fn.predefinedGroupSelector("notify", "groupChanged", i), e.fn.customGroupSelector("notify", "groupChanged", i), e.fn.childrenAgesSelector("notify", "groupChanged", i), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_INVALID, function(t, i) {
_i_("3da:1721");
for (var n = i.validators, r = [], a = [], o = 0; o < n.length; o++) n[o].validationParameters.invalidAges && r.push(n[o].validationParameters.invalidAges), n[o].message && a.push(n[o].message);
e.fn.childrenAgesSelector("notify", "groupInvalid", {
messages:a,
agesStatus:r
}), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_VALID, function(t, i) {
_i_("3da:1722"), e.fn.childrenAgesSelector("notify", "groupValid", {
message:"message",
agesStatus:[]
}), _r_();
}), e("#frm").bind("submit", function(e) {
return _i_("3da:1723"), _r_(B.search.group().validate());
}), e("#frm").find(".group-groupsearch").length && B.et.track("bHARWSEFQBINFeCTRe") && e("#frm").bind("submit", function(t) {
if (_i_("3da:2040"), !B.search.dates().validate()) return _r_(!1);
var i = e(this), n = [ "[name=group_adults]", "[name=group_children]", "[name=age]" ], r = i.find("[name=room1]");
i.find(n.join(",")).prop("disabled", !0), r.val(r.val().replace(" ", "")), _r_();
}), _r_();
}
return _r_({
init:t
});
}(), $(".city_reviews-wrp").length > 0 && (booking[sNSStartup].seo_city_reviews_refined = {
init:function() {
_i_("3da:917"), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseenter", function() {
_i_("3da:1901");
var e = $(this);
e.removeClass("hei-60 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseleave", function() {
_i_("3da:1902");
var e = $(this);
e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-60 col-grey73"), _r_();
}), _r_();
}
}), booking.ensureNamespaceExists(sNSExperiments), booking[sNSStartup].b_site_experiment_expand_signup = {
priority:9,
init:function() {
_i_("3da:522");
var e = B.require("jquery"), t = e("#newsletter_to", ".footerForm"), i = t.attr("value");
if (t.click(function() {
_i_("3da:1403");
var t = e(this);
e("dl #newsletter_to").removeClass("error"), t.val() === i ? t.val("") :t.select(), _r_();
}), t.blur(function() {
_i_("3da:1404");
var t = e(this);
"" === t.val() && t.val(i), _r_();
}), e("#newsletter_button_footer").click(function() {
_i_("3da:1405"), e(this).parents("form:first").submit(), _r_();
}), e(".signupForm").submit(function(t) {
_i_("3da:1406"), t.preventDefault(), e(".newsletter_ajax_error").hide();
var i, n = booking.env, r = e(this), a = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, o = e("input[name=url]", r).val(), s = e("input[name=hostname]", r).val(), _ = e("input[name=aid]", r).val(), l = e("input[name=companyname]", r).val(), d = e("input[name=subscribe_source]", r).val(), c = e("input[name=subscribe_notification]", r).val(), u = e("input[name=dest_id]", r).val(), h = e("input[name=dest_type]", r).val(), f = e("input[name=to]", r).val(), p = e("input[name=get_the_app]", r).is(":checked"), g = e("input[name=incentive_popup_campaign_id]", r).val(), m = e("input[name=incentive_popup_share_link]", r).val();
if ("" === f || !a.test(f)) return e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_invalid", r).show(), _r_(!1);
f = encodeURIComponent(f), i = "to=" + f + "&url=" + o + "&hostname=" + s + "&aid=" + _ + "&companyname=" + l + "&subscribe_source=" + d, "" !== c && (i = i + "&subscribe_notification=" + c), "" != u && (i = i + "&dest_id=" + u), "" != h && (i = i + "&dest_type=" + h), p === !0 && (i += "&get_the_app=1"), g && (i = i + "&incentive_popup_campaign_id=" + g), m && (i = i + "&incentive_popup_share_link=" + m), e(".newsletter_sub_preloader", r).show(), e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3da:2473"), e(".newsletter_sub_preloader", r).hide(), 0 === t.success) return "denied" === t.error ? e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_denied", r).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide()) :"bad_params" === t.error && (e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_bad_unknown", r).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide())), _r_();
if (1 === t.success) if (e("div#flashdealsbg_wrapper").length) window.location.href = n.b_nonsecure_hostname_signup + n.b_fd_searchresults_url_signup; else if (e("form").hasClass("unsubHero-action")) e("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide(), e(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show(), e(".unsubDesc strong").replaceWith("<strong>" + f + "</strong>"), e(".unsubHero-form").addClass("success"), e("body").hasClass("unsub_hero_thanks") || e("html, body").animate({
scrollTop:e(".unsubHero-form").offset().top
}, 750), e("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked", "checked"), e(".feedback.error", ".unsub_messages").hide(), e("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked"); else if (e(".newsletter_sub_info", r).hide(), e(".newsletter_sub_success", r).show(), e("#add_location_to").val(f), e(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid", r).hide(), t.has_account) {
var i = e("#userdataform form").eq(0);
i && i.attr("action", i.attr("data-url-login"));
}
_r_();
}
}), _r_();
}), "subscribe" == B.env.b_action && e("body").hasClass("unsub_hero_thanks") && e(document).ready(function() {
_i_("3da:2241"), e("#newsletter_button_footer").parents("form:first").submit(), _r_();
}), e(".signupWithnameForm").submit(function(t) {
_i_("3da:1407"), t.preventDefault(), e(".feedback_msg").each(function() {
_i_("3da:2242"), e(this).hide(), _r_();
});
var i, n = (booking.env, e(this)), r = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, a = e("input[name=companyname]", n).val(), o = e("input[name=aid]", n).val(), s = e("input[name=subscribe_source]", n).val(), _ = e("input[name=email]", n).val(), l = e("input[name=firstname]", n).val();
if ("" === _ || !r.test(_)) return e(".newsletter_subscribe_error_invalid", n).show(), _r_(!1);
e('<div class="loader_placer"></div>').appendTo("#sfl_stepOne"), i = "to=" + _ + "&email=" + _ + "&aid=" + o + "&companyname=" + a + "&subscribe_source=" + s, e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3da:2474"), 0 == t.success) return e(".loader_placer").hide(), "denied" == t.error ? (e(".newsletter_subscribe_error_denied", n).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()) :("bad_params" == t.error || "unknown" == t.error) && (e(".newsletter_subscribe_error_bad_unknown", n).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()), _r_();
if (1 == t.success) if (e(".loader_placer").hide(), e(".uspfield").hide(), e("#sfl_stepOne").hide(), "" == l || booking.env.b_exclude_lang_firstname) e("#sfl_stepThree").show(), e(".userWithoutFirstname").show(); else if (l = escape(l), 1 == t.has_account) e(".firstnameplacer").html(l), e("#sfl_stepThree").show(), e(".userWithAccount").show(); else {
var i = booking.env.b_signup_iframe_url + "&firstname=" + l + "&email=" + escape(_);
i += "&aid=" + B.env.aid, i += "&label=" + B.env.b_label, e('<iframe border="0" id="sfl_stepTwo" src="' + i + '" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm");
}
_r_();
}
}), _r_();
}), e("#subscriber_account_active").submit(function(t) {
if (_i_("3da:1408"), e('input[name="mypassword"]').val().length < 1) return e(".newsletter_register_error_nopassword").show(), _r_(!1);
e('<input type="hidden" name="password" value="' + e('input[name="myssword"]').val() + '" />').appendTo("#subscriber_account_active"), _r_();
}), e(".modal-mask-closeBtn").click(function() {
return _i_("3da:1409"), _r_(!1);
}), e(".modal-mask").click(function() {
return _i_("3da:1410"), _r_(!1);
}), !e("#newsletter_form_footer_container").length) return _r_(!1);
e(".nl_inputfield_track, .newsletter_button").click(function() {
return _i_("3da:1903"), _r_(!1);
}), _r_();
}
}, booking.social_plugins_footer = function() {
_i_("3da:310");
var e = function() {
_i_("3da:1059");
var e = $("#footer_weibo"), t = $("#footer_wechat"), i = $("#footer_naver");
i.hover(function() {
_i_("3da:2041"), i.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2042"), i.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), e.hover(function() {
_i_("3da:2043"), e.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2044"), e.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), t.hover(function() {
_i_("3da:2045"), t.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2046"), t.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].social_plugins_footer = {
priority:9,
init:function() {
_i_("3da:523"), booking.env.social_plugins_footer && booking.social_plugins_footer.init(), _r_();
}
}, booking[sNSStartup].store_cc_details = {
priority:9,
init:function() {
if (_i_("3da:524"), "book" === B.env.b_action) return _r_();
$("#saved_credit_cards .cc_save").attr("disabled", "disabled"), $("#saved_credit_cards .cc_save").addClass("cc_save_disabled"), $("#saved_credit_cards select").change(function() {
_i_("3da:1411");
var e = $(this).closest("form");
$(this).css({
"font-weight":"bold"
}), $(".cc_save", e).removeAttr("disabled"), $(".cc_save", e).removeClass("cc_save_disabled"), _r_();
}), $("#card_status").length && setTimeout(function() {
_i_("3da:1904"), $("#card_status").hide("slow"), _r_();
}, 5e3), "login" === B.env.b_action && $(".cc_delete").mousedown(function() {
_i_("3da:1905");
var e = $(this).closest("tr").get(0), t = $(this).val() || $(this).attr("value"), i = "/delete_cc_card?cc_id=" + t;
return $.ajax({
url:i,
type:"POST",
success:function(t) {
_i_("3da:2607"), $(e).hide(), _r_();
},
error:function(e) {
return _i_("3da:2608"), _r_(!1);
}
}), _r_(!1);
}), _r_();
}
}, booking.env.Tabs = function(e) {
_i_("3da:199");
var t = {
baseEl:"#newsletter_deals_city",
menuEl:".deals_menu",
contentEl:".deals_wrapper",
dealsEl:".deals",
navEl:".nav_menu",
defaultEl:1
}, e = $.extend(t, e);
$(e.menuEl + " li:nth-child(" + e.defaultEl + ")").addClass("active").show(), $(e.contentEl + " ul.deals:nth-child(" + e.defaultEl + ")").show(), $("li", e.menuEl).click(function() {
_i_("3da:918"), $("li", e.menuEl).removeClass("active"), $(this).addClass("active"), $(e.dealsEl, e.contentEl).hide();
var t = $(this).find("a").attr("href");
return $(t).show(), _r_(!1);
}), $(e.contentEl, e.baseEl).show(), _r_();
}, function(e, t, i, n) {
"use strict";
_i_("3da:200"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3da:919");
var t = !e.env.b_is_ipad && e.env.pointer_events_s_r_n_d ? 1 :0;
if (!(e.env.b_is_ipad || !e.env.b_is_ipad && e.et.track("PYWIGJDFHQWXXdVLYGGIPKEePSbMC") || t)) return _r_();
var i, n, r, a, o, s = e.require("jquery"), _ = !1;
function l(e) {
if (_i_("3da:1412"), i.isVisibleOverlay() && i.click == e) i.distroyOverlay(); else {
var t = a.data("spinner-loaded");
if (t || (a.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), o.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), a.data("spinner-loaded", !0)), i.createOverlay(), i.click = e, s(".milk_menu").hide(), s(".b_recentlyviewed").length && s(".b_recentlyviewed").removeClass("rv-content-visible"), s("#top_lw_wrapper").hide(), "lang" === e && !_) {
_ = !0;
var n = a.clone();
n.find(".t_flag").each(function() {
_i_("3da:2609");
var e = s(this), t = e.data("img"), i = e.data("size");
e.append('<img src="' + t + '" width="' + i + '" height="' + i + '" />'), _r_();
}), a.html(n.html());
}
"lang" === e ? a.show() :"curr" === e && o.show();
}
_r_();
}
function d() {
_i_("3da:1413"), n.on("click", function() {
_i_("3da:2243"), l("lang"), _r_();
}), r.on("click", function() {
_i_("3da:2244"), l("curr"), _r_();
});
var e = function() {
_i_("3da:2245");
var e = s(this), t = e.parent();
if (t.hasClass("selected")) return i.distroyOverlay(), _r_(!1);
t.parent().parent().find("li.selected").removeClass("selected"), s(".mm_loading").removeClass("mm_loading"), t.addClass("mm_loading"), _r_();
};
a.on("click", "li a", e), o.on("click", "li a", e), _r_();
}
function c() {
_i_("3da:1414"), i = booking[sNSStartup].ng_last_viewed || "", n = s("#b_nav_language"), r = s("#b_nav_currency"), a = s("#top_language"), o = s("#top_currency"), d(), _r_();
}
c(), _r_();
}), _r_();
}(window.booking, window, document), function() {
_i_("3da:201");
var e = B.require("jquery");
booking[sNSStartup].rewrite_tt = {
priority:7,
version:"1.2.5",
tt:null,
ttWinHeight:0,
ttWinWidth:0,
ttScrollTop:0,
ttScrollLeft:0,
ttShowLeft:!1,
ttShowTop:!1,
ttCounter:0,
ttShow:null,
ttContent:"",
ttCurElem:null,
ttCurText:"",
ttTimedOut:null,
ttTimeout:300,
ttClass:"basic_tooltip_class js-tooltip-wrap",
ttHidennodeAttr:"node_tt_id",
ttNodes:[ ".jq_tooltip", "*[data-title]", ".policy_name_tt" ],
toolTips:{},
preLoadedImages:{},
init:function() {
if (_i_("3da:1415"), booking.env.b_is_tdot_traffic && "book" === booking.env.b_action) return _r_(!0);
booking.env.rtl && (this.ttClass += " rtl_tooltip_class");
var t = this;
booking.env.b_is_ie7 && (this.ttTimeout = 0), this.tt = document.getElementById("tooltip_wrap") || function() {
_i_("3da:2475");
var e = document.createElement("div");
e.id = "tooltip_wrap";
var t = '<div class="tt_shadow"><div class="tt_content"></div></div>';
return document.body.appendChild(e), e.innerHTML = t, _r_(e);
}(), window.onresize = function() {
_i_("3da:2246"), t.setWindowSize(), _r_();
}, e(window).on("scroll", function() {
_i_("3da:2247"), t.setScrollPosition(), _r_();
}), setTimeout(function() {
_i_("3da:2248");
var i = t.ttNodes.join(", ");
if (t.ttContent = e(".tt_content", t.tt).length ? e(".tt_content", t.tt).get(0) :t.tt, t.setWindowSize(), t.setScrollPosition(), booking.env.b_is_tdot_traffic && e(document).on("touchstart.ttfix", ".js-tooltip-wrap", function() {
_i_("3da:2670"), t.showHideTooltip(null, 0, 0), _r_();
}), e("body").delegate(i, "mouseover mouseout mousemove", function(i) {
_i_("3da:2610");
var n = "tooltip" === e(this).attr("data-component");
if (n) return _r_();
var r = i || window.event, a = r.pageX || r.clientX + this.ttScrollLeft || 0, o = r.pageY || r.clientY + this.ttScrollTop || 0;
"mouseout" === r.type ? t.showHideTooltip(null, a, o) :t.showHideTooltip(this, a, o), _r_();
}), booking.env.b_is_ie8 || booking.env.b_is_ie9) {
var n = t.ttNodes.join("[title], ");
e(n).each(function() {
_i_("3da:2671");
var e = this.getAttribute("title");
this.setAttribute("data-title", e), this.removeAttribute("title"), _r_();
});
}
_r_();
}, 500), _r_();
},
showHideTooltip:function(e, t, i) {
if (_i_("3da:1416"), null != this.ttShow || null == e) {
if (e != this.ttCurElem && null != this.ttCurElem) this.ttShow = null, this.ttContent && (this.ttContent.innerHTML = ""), this.ttCurText = "", this.ttCurElem = null, this.ttShowLeft = !1, this.ttShowTop = !1, this.tt && (this.tt.style.display = "none", this.tt.className = "", this.tt.style.width = "auto"); else if (this.tt) {
var n = this.getPosition(t, i, this.tt);
n && n.length > 1 && (this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px");
}
} else {
var r = this.getTTNode(e);
if (null != r) {
this.ttShow = e.id;
var a = r;
this.ttCurElem = e, this.ttCurText = a[0];
var o = "" != a[1] ? a[1] :this.ttClass;
if (a[2] && (this.ttShowLeft = !0), a[5] && (this.ttShowTop = !0), a[4] && (o += " tt_loading", this.preloadImg(e.id)), this.ttContent.innerHTML = this.ttCurText, this.tt && (this.tt.className = o, null != a[3] ? this.tt.style.width = ("function" == typeof a[3] ? a[3].call(this.tt) :a[3]) + "px" :this.tt.style.width = "auto"), a[4] || this.showToolTip(0), this.tt) {
var n = this.getPosition(t, i, this.tt);
this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px";
}
}
}
_r_();
},
showToolTip:function(e) {
_i_("3da:1417");
var t = this;
if (0 != this.ttTimeout) {
var i = e < this.ttTimeout ? this.ttTimeout - e :10;
t.showingTooltip && clearTimeout(t.showingTooltip), t.showingTooltip = setTimeout(function() {
_i_("3da:2543"), "" != t.ttCurText ? (booking.eventEmitter.trigger("tooltip.show", [ t.ttCurElem, t ]), t.tt.style.display = "block") :t.showHideTooltip(null, 0, 0), _r_();
}, i);
} else this.tt && (this.tt.style.display = "block");
_r_();
},
setScrollPosition:function() {
_i_("3da:1418"), "number" == typeof window.pageYOffset ? (this.ttScrollLeft = window.pageXOffset, this.ttScrollTop = window.pageYOffset) :document.documentElement && document.documentElement.scrollTop ? (this.ttScrollLeft = document.documentElement.scrollLeft, this.ttScrollTop = document.documentElement.scrollTop) :(this.ttScrollLeft = document.body.scrollLeft, this.ttScrollTop = document.body.scrollTop), _r_();
},
setWindowSize:function() {
_i_("3da:1419"), window.innerWidth ? (this.ttWinWidth = window.innerWidth, this.ttWinHeight = window.innerHeight) :0 != document.documentElement.clientWidth ? (this.ttWinWidth = document.documentElement.clientWidth, this.ttWinHeight = document.documentElement.clientHeight) :(this.ttWinWidth = document.body.clientWidth, this.ttWinHeight = document.body.clientHeight), _r_();
},
getTTNode:function(t) {
if (_i_("3da:1420"), !e(t).attr("data-resized")) {
if (t.id) var i = t.id; else {
this.ttCounter++;
var i = "b_tt_holder_" + this.ttCounter;
t.id = i;
}
if (this.toolTips[i]) return _r_(this.toolTips[i]);
if (e(t).attr("data-" + this.ttHidennodeAttr) && e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).length) var n = e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).html(); else if (e(t).hasClass("policy_name_tt")) var n = e(t).siblings(".differing_policies").html(); else if (e(t).hasClass("fleximeter_tt")) var n = e(t).parents(".hp-rt__policy-list").siblings(".differing_policies").html(); else if (e(t).hasClass("non-refundable-savings")) var n = e(t).siblings(".differing_policies").html(); else {
var n = t.getAttribute("data-title") || t.getAttribute("title");
t.getAttribute("title") && !t.getAttribute("data-title") && (t.setAttribute("data-title", t.getAttribute("title")), t.removeAttribute("title"));
}
var r = t.nodeName.toLowerCase();
if (("option" == r || "link" == r || "select" == r) && (n = ""), n && "" != n) {
var a = this.ttClass, o = e(t).hasClass("left_tt"), s = !1, _ = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), l = _.exec(n), d = l && l[2];
if (d && (n = n.replace(_, ""), B.et.stage(d, 1)), s) return _r_(null);
var c = null, u = t.getAttribute("data-width");
if (u && !isNaN(u) && u > 150 && 1001 > u) c = u; else {
var h = t.getAttribute("rel");
h && !isNaN(h) && h > 150 && 1001 > h && (c = h);
}
var f = n.indexOf("<img") > -1 && null == c ? !0 :!1;
t.className.indexOf("large_tooltip") > -1 && (a += " tt_large"), f && (a += " blackBorderTooltip"), e(t).attr("data-tooltip-class") && (a += " " + e(t).attr("data-tooltip-class"));
var p = e(t).attr("data-toponly"), g = !!p;
return this.toolTips[i] = [ n, a, o, c, f, g ], null != t.getAttribute("title") && (null == t.getAttribute("data-title") && t.setAttribute("data-title", t.title), t.title = "", t.removeAttribute("title")), booking.env.b_is_ie && t.removeAttribute("alt"), _r_(this.toolTips[i]);
}
return _r_(null);
}
_r_();
},
getPosition:function(t, i, n) {
_i_("3da:1421");
var r = 15, a = 10, o = t + r, s = i + a, _ = e(n).width(), l = e(n).height(), d = 20;
return (t + _ + this.ttScrollLeft > this.ttWinWidth - d || this.ttShowLeft && t > _ + d) && (o = t - _ - d), B.env.rtl && (o = t - _ - r, _ + d > t - this.ttScrollLeft && (o = t + r)), this.ttShowTop ? i - l - a > this.ttScrollTop && (s = i - l - a) :(this.ttShowTop || i + l - this.ttScrollTop > this.ttWinHeight - d) && (s = i - l - a), _r_([ o, s ]);
},
preloadImg:function(e) {
_i_("3da:1422");
var t = this, i = new Date(), n = this.toolTips[e][0].match(/src=['"]([^'"]+)['"]/);
if (!n[1]) return this.toolTips[e][4] = !1, _r_();
if (this.preLoadedImages[n[1]]) return this.toolTips[e][4] = !1, -1 === this.preLoadedImages[n[1]].ttid.indexOf(e) && this.preLoadedImages[n[1]].ttid.push(e), _r_();
this.preLoadedImages[n[1]] = {
ttid:[ e ],
loaded:!1
};
var r = document.createElement("img");
r.onload = function() {
_i_("3da:2249"), t.preLoadedImages[this.src].loaded = !0, t.preLoadedImages[this.src].ttid.forEach(function(e) {
_i_("3da:2611");
var n = t.toolTips[e];
if (null != n[3]) {
var r = this.width + 20;
r > 150 && (n[3] = r);
}
if (n[4] = !1, t.ttShow !== e) return _r_();
null != n[3] && (t.tt.style.width = n[3] + "px");
var a = new Date(), o = a.getTime() - i.getTime();
t.showToolTip(o), _r_();
}), _r_();
}, r.src = n[1], _r_();
},
addTooltip:function(t, i, n, r, a, o) {
_i_("3da:1423"), "function" == typeof i && (i = i());
var s = this;
"string" == typeof t && e("#" + t).length ? (e("#" + t).addClass("jq_tooltip"), this.toolTips[t] = [ i, n, r, a, o ]) :"object" == typeof t && e(t).each(function() {
if (_i_("3da:2544"), e(this).addClass("jq_tooltip"), this.id) var t = this.id; else {
s.ttCounter++;
var t = "b_tt_holder_" + s.ttCounter;
this.id = t;
}
i || (i = e(this).attr("data-title")), a || (a = e(this).attr("data-width")), s.toolTips[t] = [ i, n, r, a, o ], _r_();
}), _r_();
},
updateTooltip:function(t, i, n, r) {
if (_i_("3da:1424"), r = r || {}, e(t).attr("id")) var a = e(t).attr("id"); else {
this.ttCounter++;
var a = "b_tt_holder_" + this.ttCounter;
e(t).attr("id", a);
}
!n && this.toolTips[a] ? (this.toolTips[a][0] = i, r.width && (this.toolTips[a][3] = r.width)) :this.addTooltip(a, i, "", !1, r.width || null, !1), _r_();
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].touch_device_check = {
priority:5,
init:function() {
return _i_("3da:525"), booking.env.touch_os = "ontouchstart" in document.documentElement ? !0 :!1, /(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && (booking.env.touch_os = !1), _r_(!0);
}
}, booking[sNSStartup].userAccessFormValidation = {
init:function() {
_i_("3da:526"), booking.userAccessFormHandler.init(), _r_();
}
}, booking.userAccessFormHandler = function(e) {
_i_("3da:311");
var t = B.require("jquery"), i = {
$userAccessMenu:{},
$parentForm:{},
$parentFormWrapper:{},
submitHooks:{},
globalSubmitHooks:{},
_init:function(e) {
_i_("3da:1724");
var i = this;
this.$userAccessMenu = t(".user_access_menu"), e && (this.$userAccessMenu = t(e)), this.$userAccessMenu.delegate(".user_access_section_trigger", "click", function(e) {
_i_("3da:2383");
var n = t(this), r = n.parents(".user_access_menu"), a = this.getAttribute("data-target");
return t(".form-section", r).addClass("form-hidden-section").removeClass("form-shown-section"), i.$parentForm = t("." + a, r), i.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section"), t(".form-tabs", r).removeClass("user_menu_active_tab"), t("." + a + "_tab", r).addClass("user_menu_active_tab"), booking.eventEmitter && ("user_access_signup_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_register_tab"), "user_access_signin_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_login_tab")), _r_(!1);
}), t(".user_access_menu_auth_low_not_me").click(function(e) {
_i_("3da:2384");
var i, n, r = t(e.target).attr("href");
r && (i = '<form method="POST" action="' + r + '" ><input type="hidden" name="logout" value="1" /></form>', n = t(i), n.prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'), e.preventDefault(), t("body").append(n), n.submit()), _r_();
}), t(".user_access_menu_password_toggle_link").click(function(e) {
_i_("3da:2385"), e.preventDefault(), B.et.customGoal("MRLLeUINIQATJRLXBdFO", 1);
var i = t(e.target).closest("form").find("[name=password]:first")[0];
if (i) {
var n = "password" === i.getAttribute("type");
n ? (i.setAttribute("type", "text"), t(e.target).text(B.jstmpl.translations("accounts_registration_lightbox_password_hide") + "Hide password")) :(i.setAttribute("type", "password"), t(e.target).text(B.jstmpl.translations("accounts_registration_lightbox_password_show") + "Show password"));
}
_r_();
}), t("body").delegate(".user_access_form", "submit", function() {
if (_i_("3da:2386"), i.$parentForm = t(this), i.$parentFormWrapper = t(this).parents(".form-section"), !i._validateForm()) return _r_(!1);
if (i.userNameIsPhone && (i.fe_enable_login_with_phone_number && i.$parentForm.hasClass("js-user-access-form--reminder") || i.fe_enable_signup_with_phone_number && i.$parentForm.hasClass("js-user-access-form--signup"))) t(".js-suppress_refresh").val(1), t(".js-no_login_after_signup").val(1), t(".js-no_redirect").val(1), t(".js-username_is_phone").val(1), booking.phoneNumberLogin.setPassword(t("input[name=password]", i.$parentFormWrapper).val()); else if (i.userNameIsPhone || (t(".js-suppress_refresh").val(0), t(".js-no_login_after_signup").val(0), t(".js-username_is_phone").val(0)), t(".form-loading", i.$parentFormWrapper).show(), t(this).trigger("submit_pb_mybooking_cant_find"), t(this).hasClass("form-secondary-login") && "msie" === B.env.b_browser && B.env.b_browser_version < 9) {
var e = "&" + t(this).serialize(), n = t(this).attr("action"), r = n + e;
location.href = r;
} else booking.eventEmitter.trigger("user-acess-menu:valid-submit-start", i);
_r_();
}), t("#login_redesign").click(function() {
_i_("3da:2387"), t(".bs2_inline_signin_box").toggle(), B.eventEmitter.trigger("user-access-menu:toggle"), _r_();
}), this._initPassStrength(), "https:" === location.protocol && booking.env.b_is_app && t(".user_access_form").each(function() {
_i_("3da:2545");
var e = t(this), i = e.attr("action");
-1 !== i.indexOf("protocol=http") && -1 === i.indexOf("protocol=https") ? (i = i.replace("protocol=http", "protocol=https_www"), e.attr("action", i)) :-1 !== i.indexOf("protocol=https") && (i = i.replace("protocol=https", "protocol=https_www"), e.attr("action", i)), _r_();
}), _r_();
},
_initPassStrength:function(e) {
_i_("3da:1725");
var i, n, r = this;
e || (e = ".password_strength"), n = t(t(e).attr("data-wrapper")), n = n.length ? n :this.$userAccessMenu, n.delegate(e, "keyup", function() {
_i_("3da:2388");
var e = t(this), n = e.val();
i && clearTimeout(i), i = setTimeout(function() {
_i_("3da:2672"), r._calculatePasswordStrength(e, n), booking.eventEmitter && B.eventEmitter.trigger("passStrength"), _r_();
}, 400), _r_();
}), _r_();
},
_validations:{
email:function(e) {
_i_("3da:2047");
var t = e.indexOf("@"), i = e.lastIndexOf(".");
return _r_(t > 0 && i > t);
},
emailOrPhone:function(e) {
_i_("3da:2048");
var t = this.email(e), i = this.phone(e);
return _r_(t || i);
},
phone:function(e) {
_i_("3da:2049");
var t = e.match(/\d/g);
if (t && t.length && t.length > 9 && t.length < 16 && e.indexOf("@") > -1) return _r_(!1);
return _r_(t && t.length && t.length > 9 && t.length < 16);
}
},
fe_enable_login_with_phone_number:B.env.fe_enable_login_with_phone_number,
fe_enable_signup_with_phone_number:B.env.fe_enable_signup_with_phone_number,
fe_run_email_validation:0 === parseInt(B.env.auth_level, 10),
_validateForm:function() {
if (_i_("3da:1726"), !this.$parentForm.length) return _r_(1);
var i = !0, n = e.error_sign_up_password_email_combo_01, r = this;
return t("input", this.$parentForm).each(function() {
_i_("3da:2389");
var e, a, o, s, _ = t(this), l = _.attr("data-validation"), d = _.val();
if (l) {
l = l.split("|");
for (var c = 0, u = l.length; u > c && i; c++) e = l[c].split(/\{/), a = e[0], "required" !== a || d ? "numeric_with_dots" === a || "numeric" === a ? ("numeric_with_dots" === a && (d = d.replace(/\./g, ""), _.val(d)), /^\d+$/g.test(d) || (i = !1)) :/min_length\([0-9]+\)/.test(a) ? (o = a.split("(")[1], o = o.slice(0, -1), d.length < o && (i = !1)) :/required_match\([a-zA-Z_]+\)/.test(a) && (s = a.split("(")[1], s = s.slice(0, -1), t(this).val() !== t("#" + s).val() && (i = !1)) :i = !1, r.fe_enable_login_with_phone_number && "email-or-phone" === a && (i = r._validations.emailOrPhone(d), r.userNameIsPhone = r._validations.phone(d), r.userNameIsPhone && booking.phoneNumberLogin.setPhone(d)), r.fe_run_email_validation && "email" === a && (i = r._validations.email(d)), e[1] && (n = e[1].slice(0, -1));
if (!i) return _r_(!1);
}
_r_();
}), i ? _r_(!0) :(this.$parentForm.length && (this.$parentForm.hasClass("js-user-access-form--signin") || this.$parentForm.hasClass("js-user-access-form--signup")) && B.et.track("OTfdASFMRcUJRIBWVUZDaORe") && (n = '<span class="alert-error-icon" aria-hidden="true">&#45339;</span> ' + n), t(".alert-error", this.$parentFormWrapper).html(n).show(), booking.eventEmitter.trigger("form-error", this.$parentFormWrapper), _r_(!1));
},
_calculatePasswordStrength:function(i, n) {
if (_i_("3da:1727"), "undefined" == typeof n || "undefined" == typeof n.length) return _r_();
for (var r, a, o = n.length, s = parseInt(o / 2.5, 10), _ = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_", l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", d = 0, c = !1, u = 0, h = 0, f = i.attr("data-wrapper") ? i.parents(i.attr("data-wrapper")) :i.parents(".user_access_form"), p = t(".user_access_password_strength", f).find(".pass_strength_step").width(), g = t(".user_access_password_strength", f).find(".pass_strength_progress"), m = 0; o > m; m++) isNaN(n.charAt(m)) ? c = !0 :d += 1, _.indexOf(n.charAt(m)) > -1 && (u += 2), l.indexOf(n.charAt(m)) > -1 && (h += 1);
u > 4 && (u = 4), d > 2 && (d = 2), h > 2 && (h = 2), c && (s += d), s += u, s += h, s > 10 ? s = 10 :0 === s && (s = 1), 8 > o ? (g.addClass("pass_strength_invalid"), s > 3 && (s = 3), a = 0) :(g.removeClass("pass_strength_invalid"), a = parseInt(s / 2, 10) + 1), a = a > 5 ? 5 :a, r = p * s, g.animate({
width:r + "px"
}), t(".pass_strength_text", f).text(e.b_password_strength_msg[a]), _r_();
},
_displayErrorMsg:function(e) {
if (_i_("3da:1728"), !e || !e.msg) return _r_();
var n, r, a;
if (e.parent && (r = t(e.parent)), n = e.target ? t(e.target, r) :t(".alert-error", r), i.$parentForm.length && (i.$parentForm.hasClass("js-user-access-form--signin") || i.$parentForm.hasClass("js-user-access-form--signup")) && B.et.track("OTfdASFMRcUJRIBWVUZDaORe")) {
var o = '<span class="alert-error-icon" aria-hidden="true">&#45339;</span> ' + e.msg;
n.html(o).addClass("alert-displayed");
} else n.html(e.msg).addClass("alert-displayed");
t(".form-loading, #page_login_loading").hide(), booking.env.is_genius_onboarding && (a = t("#slide1").height(), t("#slides").animate({
height:a
})), _r_();
},
_addSubmitHook:function(e, t, i) {
_i_("3da:1729");
var n = i ? this.globalSubmitHooks :this.submitHooks;
if (!t || !e) return _r_();
n[e] = t, _r_();
},
_removeSubmitHook:function(e, t) {
_i_("3da:1730");
var n = t ? this.globalSubmitHooks :this.submitHooks;
if (!i) return _r_();
delete n[e], _r_();
},
_promtUserForPhoneVerification:function() {
_i_("3da:1731"), booking.authNextStepSMS && booking.authNextStepSMS.promtUserForPhoneVerification(this.$userAccessMenu, "verify"), _r_();
},
_promptForNextAuthStep:function(e) {
_i_("3da:1732");
var t = e && e.step, n = function(e) {
_i_("3da:2476");
var t = {
sms:i._promtUserForPhoneVerification.bind(i)
};
return _r_(t[e] || function() {});
}(t);
n(), _r_();
}
};
return _r_({
init:function() {
_i_("3da:1425"), i._init(), _r_();
},
initPassStrength:function(e) {
_i_("3da:1426"), i._initPassStrength(e), _r_();
},
displayErrorMsg:i._displayErrorMsg,
promptForNextAuthStep:i._promptForNextAuthStep
});
}(booking.env), booking[sNSStartup].user_menu_dropdowns = function() {
_i_("3da:312");
var e = !1, t = !1, i = $("#current_language_foldout"), n = function(e) {
_i_("3da:1060"), $(e).each(function() {
_i_("3da:2050");
var e = $(this).attr("data-lang"), t = booking.env.b_switch_language_url[e];
$(this).find("a").attr("href", t), _r_();
}), _r_();
}, r = function(e) {
_i_("3da:1061"), $(e).each(function() {
_i_("3da:2051");
var e = booking.env.b_this_url;
("genius" === booking.env.b_action || "guest" === booking.env.b_action) && (e = booking.env.b_this_url_without_lang);
var t = $(this).attr("data-currency"), i = e.indexOf("?") > -1 ? ";" :"?";
t += ";changed_currency=1";
var n = $(this).closest(".select_foldout_wrap").is(".select_foldout_wrap_top");
n && (t += ";top_currency=1"), $(this).attr("href", e + i + "selected_currency=" + t), _r_();
}), _r_();
}, a = function(e) {
_i_("3da:1062");
var t = "loading_option";
e.delegate("a", "click", function(i) {
_i_("3da:2052");
var n = $(this).parent();
if (n.hasClass("selected_language") || n.hasClass("selected_currency")) return i.preventDefault(), _r_();
if (n.hasClass(t) ? i.preventDefault() :e.find("." + t).removeClass(t), n.addClass(t), B.env.b_run_sr_ajax) {
var r = B.require("searchresults/events");
r.trigger(r.UI_NAVIGATE_TO, {
url:$(this).attr("href"),
fixUrl:!0,
reload:!0
}), i.preventDefault();
}
_r_();
}), _r_();
}, o = function() {
_i_("3da:1063"), e || $.get(booking.env.b_currency_url, function(t) {
_i_("3da:2390"), $("#current_currency").html(t), a($("#current_currency_foldout")), r($("#current_currency a")), e = !0, B.eventEmitter.trigger("b_currency_dropdown_ready"), B.events.trigger("b_currency_dropdown_ready"), _r_();
}), _r_();
}, s = function() {
_i_("3da:1064"), t || $.get(booking.env.b_languages_url, function(e) {
_i_("3da:2391"), i.length ? i.replaceWith(e) :$("#current_language").html(e), a(i), n($("#current_language li")), t = !0, "zh" !== B.env.b_lang && B.et.customGoal("IZVJWcJRIEcVBLHJZIUC", 1), _r_();
}), _r_();
}, _ = function() {
_i_("3da:1065");
var e = $("#current_language_foldout");
a(e), $(".uc_currency a.popover_trigger").click(function() {
_i_("3da:2053"), o(), _r_();
}), "zh" !== B.env.b_lang && ($(".uc_language a.popover_trigger").click(function() {
_i_("3da:2392"), B.et.stage("IZVJWcJRIEcVBLHJZIUC", 1), B.et.track("IZVJWcJRIEcVBLHJZIUC") || B.et.customGoal("IZVJWcJRIEcVBLHJZIUC", 1), _r_();
}), B.et.track("IZVJWcJRIEcVBLHJZIUC") && $(".uc_language a.popover_trigger").click(function() {
_i_("3da:2546"), s(), _r_();
})), "zh" === B.env.b_lang && $(".zh .uc_language a.popover_trigger").click(function() {
_i_("3da:2393"), s(), _r_();
}), _r_();
};
return _r_({
init:_
});
}(), booking.jstmpl("language_menu_item", function() {
_i_("3da:313");
var e = [ ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ' ], t = [ "lang" ];
return _r_(function(i) {
_i_("3da:920");
var n = "", r = this.fn;
return n += [ e[0], (r.MC(t[0]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[0]) || {}).current)) && (n += e[1]), n += [ e[2], (r.MC(t[0]) || {}).code, e[3], (r.MC(t[0]) || {}).url, e[4], (r.MC(t[0]) || {}).flag, e[5], (r.MC(t[0]) || {}).name, e[6] ].join(""), _r_(n);
});
}()), booking.jstmpl("language_menu_list", function() {
_i_("3da:314");
var e = [ '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n" ], t = [ "title", "columns", "lang" ];
return _r_(function(i) {
_i_("3da:921");
var n = "", r = this.fn;
function a(i) {
return _i_("3da:1427"), i += [ e[3], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[4]), i += [ e[5], (r.MC(t[2]) || {}).code, e[6], (r.MC(t[2]) || {}).url, e[7], (r.MC(t[2]) || {}).flag, e[8], (r.MC(t[2]) || {}).name, e[9] ].join(""), _r_(i);
}
n += [ e[0], r.MB(t[0]), e[1] ].join("");
var o = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var s, _ = 1, l = o.length; l >= _; _++) {
i[0].column = s = o[_ - 1], n += e[2];
var d = _, c = o, u = l, h = f, o = s || [];
i.unshift({
lang:null
});
for (var f, _ = 1, l = o.length; l >= _; _++) i[0].lang = f = o[_ - 1], i.unshift({
lang:f
}), n = a(n), i.shift();
i.shift(), _ = d, o = c, l = u, f = h, n += e[10];
}
return i.shift(), n += e[11], _r_(n);
});
}()), booking.jstmpl("language_menu", function() {
_i_("3da:315");
var e = [ "\n    ", "\n        ", '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n", "\n" ], t = [ "title", "columns", "lang", "popular_languages", "lang_dropdown_top_langs", "languages", "lang_dropdown_all_langs" ];
return _r_(function(i) {
_i_("3da:922");
var n = "", r = this.fn;
function a(n) {
_i_("3da:1428"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var a = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var o, _ = 1, l = a.length; l >= _; _++) {
i[0].column = o = a[_ - 1], n += e[4];
var d = _, c = a, u = l, h = f, a = o || [];
i.unshift({
lang:null
});
for (var f, _ = 1, l = a.length; l >= _; _++) i[0].lang = f = a[_ - 1], i.unshift({
lang:f
}), n = s(n), i.shift();
i.shift(), _ = d, a = c, l = u, f = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function o(n) {
_i_("3da:1429"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var a = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var o, s = 1, l = a.length; l >= s; s++) {
i[0].column = o = a[s - 1], n += e[4];
var d = s, c = a, u = l, h = f, a = o || [];
i.unshift({
lang:null
});
for (var f, s = 1, l = a.length; l >= s; s++) i[0].lang = f = a[s - 1], i.unshift({
lang:f
}), n = _(n), i.shift();
i.shift(), s = d, a = c, l = u, f = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function s(i) {
return _i_("3da:1430"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
function _(i) {
return _i_("3da:1431"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
return n += e[0], r.MD(t[3]) && (n += e[1], i.unshift({
columns:r.MB(t[3]),
title:r.MB(t[4])
}), n = a(n), i.shift(), n += e[0]), n += e[0], i.unshift({
columns:r.MB(t[5]),
title:r.MB(t[6])
}), n = o(n), i.shift(), n += e[14], _r_(n);
});
}()), booking[sNSStartupLoad].user_wishlists = {
init:function() {
_i_("3da:527"), $(".wl_dates_trigger").click(function() {
_i_("3da:1432"), booking[sNSStartup].lightbox.show($("#wl_dates_modal"), {
customWrapperClassName:"wl_dates_modal_wrapper",
bOverflowVisible:!0,
hideCallBack:function() {
_i_("3da:2477"), $(".alert-error").hide(), _r_();
}
}), _r_();
}), _r_();
}
}, booking[sNSStartup].viewed_hotels = {
priority:9,
fullListShowed:!1,
minListSize:5,
lastviewTimer:null,
loadStart:null,
init:function() {
_i_("3da:528"), this.loadStart = new Date();
var e = this;
if (document.getElementById("LastViewedHotels")) {
try {
this.minListSize = parseInt($("#LastViewedHotels").attr("min"), 10);
} catch (t) {}
$("a.remove_hotel").click(function() {
_i_("3da:1906");
var e = $(this).attr("href").substring(1);
return $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:e
}
}), booking[sNSStartup].viewed_hotels.cleanupHistoryList(this), this.blur(), _r_(!1);
}), $("#showAllHistory").length && $("#showAllHistory").click(function(e) {
return _i_("3da:2250"), booking[sNSStartup].viewed_hotels.showAll(e.target), this.blur(), _r_(!1);
}), $("#removeAllHistory").length && $("#removeAllHistory").click(function() {
return _i_("3da:2251"), booking[sNSStartup].viewed_hotels.removeAll(!0), this.blur(), _r_(!1);
});
}
return $(".lastVisitdate").length && ($(".lastVisitdate").parents("li").mouseenter(function() {
_i_("3da:1907");
var t = $(".lastVisitdate", this);
$(t).slideDown("fast"), $(this).addClass("selectedVisit"), e.updateTime(t), e.lastviewTimer = window.setInterval(function() {
_i_("3da:2547"), e.updateTime(t), _r_();
}, 1e3), _r_();
}), $(".lastVisitdate").parents("li").mouseleave(function() {
_i_("3da:1908"), window.clearInterval(e.lastviewTimer), $(".lastVisitdate", this).slideUp("fast"), $(this).removeClass("selectedVisit"), _r_();
})), _r_(!0);
},
updateTime:function(e) {
_i_("3da:529");
var t = this.loadStart, i = new Date();
void 0 == $(e).attr("sh") && ($(e).attr("sd", $(".viewed_d", e).text()), $(e).attr("sh", $(".viewed_h", e).text()), $(e).attr("sm", $(".viewed_m", e).text()), $(e).attr("ss", $(".viewed_s", e).text()), "" == $(e).attr("sd") && $(e).attr("sd", "0"), "" == $(e).attr("sh") && $(e).attr("sh", "0"), "" == $(e).attr("sm") && $(e).attr("sm", "0"), "" == $(e).attr("ss") && $(e).attr("ss", "0"));
var n = 0, r = 0, a = 0, o = 0, s = i.getSeconds() - t.getSeconds();
0 > s && (s = 60 - t.getSeconds() + i.getSeconds(), n = 1);
var _ = i.getMinutes() - t.getMinutes() - n;
0 > _ && (_ = 60 - t.getMinutes() + i.getMinutes() - n, r = 1);
var l = i.getHours() - t.getHours() - r;
0 > l && (l = 24 - t.getHours() + i.getHours() - r, a = 1), l > 24 && (l -= 24, o = 1 - a);
var d = parseInt($(e).attr("sh"), 10) + l, c = parseInt($(e).attr("sm"), 10) + _, u = parseInt($(e).attr("ss"), 10) + s;
u > 59 && (u -= 60, c += 1), c > 59 && (c -= 60, d += 1), d > 23 && (d -= 24, o += 1), 0 == u ? ($(".viewed_s", e).text(""), $(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).removeClass("show")) :($(".viewed_s", e).text(u), 1 == u ? ($(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).addClass("show")) :($(".viewed_seconds", e).addClass("show"), $(".viewed_second", e).removeClass("show"))), 0 == c ? ($(".viewed_m", e).text(""), $(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).removeClass("show")) :($(".viewed_m", e).text(c), 1 == c ? ($(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).addClass("show")) :($(".viewed_minutes", e).addClass("show"), $(".viewed_minute", e).removeClass("show"))), 0 == d ? ($(".viewed_h", e).text(""), $(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).removeClass("show")) :($(".viewed_h", e).text(d), 1 == d ? ($(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).addClass("show")) :($(".viewed_hours", e).addClass("show"), $(".viewed_hour", e).removeClass("show"))), 0 == o ? ($(".viewed_d", e).text(""), $(".viewed_days", e).removeClass("show"), $(".viewed_day", e).removeClass("show")) :($(".viewed_d", e).text(o), 1 == o ? ($(".viewed_days", e).removeClass("show"), $(".viewed_day", e).addClass("show")) :($(".viewed_days", e).addClass("show"), $(".viewed_day", e).removeClass("show"))), _r_();
},
cleanupHistoryList:function(e) {
_i_("3da:530");
var t = this, i = this.minListSize;
$(e).parent().fadeOut(500, function() {
_i_("3da:1433"), $(e).parents("li").remove();
var n = $("#LastViewedHotels"), r = n.find("ul.lastViewedList li"), a = n.find("#viewed_hotels_header");
if (r.length || booking[sNSStartup].viewed_hotels.removeAll(!1), r.length < 2 && $("#share_hotel_history").css("borderTop", "none"), r.length >= i) {
var o = r.get(i - 1);
$(o).fadeIn(1e3);
}
document.getElementById("showAllHistory") && r.length <= i && $("#moreHistoryLinkWrapper").hide(), n.hasClass("viewed_hotels_copy") && (r.length < 5 ? (n.removeClass("viewed_hotels_copy"), a.find(".base_header").show(), a.find(".variant_header").remove()) :5 == r.length && (a.find(".base_header").hide(), a.find(".variant_header").show())), booking.eventEmitter.trigger("viewed_hotels:update", {
items:r
}), t.callBack(), _r_();
}), _r_();
},
showAll:function(e) {
_i_("3da:531");
var t, i = this, n = $("#LastViewedHotels ul.lastViewedList li"), r = this.minListSize, a = $("#viewed_hotels_header");
if (booking[sNSStartup].viewed_hotels.fullListShowed) {
for (t = r; t < n.length; t++) $(n[t]).fadeOut(500, function() {
_i_("3da:2252"), i.callBack(), _r_();
});
booking[sNSStartup].viewed_hotels.fullListShowed = !1, e.className.indexOf("viewed_hotels_copy") > -1 && (a.find(".base_header").hide(), a.find(".variant_header").show());
} else {
for (t = r - 1; t < n.length; t++) $(n[t]).fadeIn(500), i.callBack();
booking[sNSStartup].viewed_hotels.fullListShowed = !0, e.className.indexOf("viewed_hotels_copy") > -1 && (a.find(".base_header").show(), a.find(".variant_header").hide());
}
booking[sNSStartup].viewed_hotels.switchCaption(), _r_();
},
removeAll:function(e) {
_i_("3da:532"), e && $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:-1
}
}), $("#LastViewedHotels").fadeOut(500, function() {
_i_("3da:1434"), $(this).remove(), _r_();
}), _r_();
},
switchCaption:function() {
_i_("3da:533"), booking[sNSStartup].viewed_hotels.fullListShowed ? ($("#showAllHistory .showLink").hide(), $("#showAllHistory .hideLink").show()) :($("#showAllHistory .showLink").show(), $("#showAllHistory .hideLink").hide()), _r_();
},
callBack:function() {}
}, B.define("profile/profile-menu/profile-menu", function(e, t, i) {
"use strict";
_i_("3da:202");
var n = e("jquery"), r = "[data-command=show-profile-menu]", a = e("ga-tracker");
i.exports = {
_dropdown:null,
init:function() {
_i_("3da:1435");
var e = this;
n.fly.dropdown.extend({
init:function() {
_i_("3da:2612"), e._dropdown = this, this.bind(this.events.show, e.onshow.bind(e));
var t = booking.jstmpl("profile_menu_extra_class");
t && "__no_op__" !== t.name ? this.options.extraClass += " " + t.render(booking.env.profile_menu) :this.options.extraClass += " g-hidden", _r_();
}
}).delegate(r, {
extraClass:"fly-dropdown--profile-menu",
position:booking.env.rtl ? "bottom left" :"bottom right",
content:function() {
_i_("3da:2478");
var e = booking.jstmpl("profile_menu");
if (!e || "__no_op__" === e.name) {
var t = (this.handle() || n()).eq(0).children("a[href]"), i = t && t.attr("href") || "";
return /\/mydashboard/.test(i) && (window.location.href = i), _r_("");
}
var r;
return r = "switch-accounts" == this.handle().data("menu-mode") ? e.render(Object.assign({}, booking.env.profile_menu, {
b_menu_mode:"switch-accounts"
})) :e.render(booking.env.profile_menu), _r_(n(r).loadComponents());
}
}), n(document).on("click", ".profile-menu__item--myreferrals .profile-menu__link", function() {
_i_("3da:2253"), a.trackEvent(a.referralAdvocateTracker, "click", "myreferrals item in profile menu"), _r_();
}), _r_();
},
onshow:function() {
_i_("3da:1436"), "android" === booking.env.b_browser && this.forceReflow(), n(".milk_menu").hide(), n(".b_recentlyviewed").length && n(".b_recentlyviewed").removeClass("rv-content-visible"), n(".uc_genius_tooltip").remove(), _r_();
},
hide:function() {
_i_("3da:1437"), this._dropdown && this._dropdown.hide(), _r_();
},
forceReflow:function() {
_i_("3da:1438"), setTimeout(function() {
_i_("3da:2479");
var e = this._dropdown && this._dropdown.root();
e && e.hide().show(0), _r_();
}.bind(this), 0), _r_();
}
}, _r_();
}), function() {
_i_("3da:203"), B[sNSStartup]["profile-menu"] = {
init:function() {
_i_("3da:1439"), B.require("profile/profile-menu/profile-menu").init(), _r_();
}
}, _r_();
}(), function(e) {
_i_("3da:204");
var t = e.require("jquery"), i = null, n = "show_non_age_message";
function r() {
return _i_("3da:535"), _r_(new RegExp(n + "=1").test(location.href));
}
function a() {
_i_("3da:536"), e.when({
action:"searchresults"
}).run(function(n) {
_i_("3da:1440");
function r() {
_i_("3da:1909"), i && i.hide(), _r_();
}
t('[name="group_children"]').on("change", r), e.eventEmitter.bind("CALENDAR:opened", r), _r_();
}), _r_();
}
function o() {
_i_("3da:537");
var n = 200, r = e.env.rtl ? "left" :"right", a = "searchbox_children_age_default_12_dropdown";
t(".sb-summary").length && (a += " fly-dropdown-hide-on-load"), i && i.hide(), setTimeout(function() {
if (_i_("3da:1441"), 0 === t(".b-children-ages-configurator, .sb-group__children__field").length) return _r_();
i = t.fly.dropdown.extend({
defaults:{
position:r,
content:function() {
return _i_("3da:2692"), _r_(e.jstmpl("searchbox_children_ages_default_12_tooltip").render({}));
},
extraClass:a
},
actions:{
click:function(e) {
_i_("3da:2693"), t(e.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("3da:2656"), this.bind(this.events.show, function() {
_i_("3da:2723"), t("." + a).delegate(".fly-dropdown-close", "click", function(e) {
_i_("3da:2746"), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(".b-children-ages-configurator, .sb-group__children__field"), i.show(), _r_();
}, n), _r_();
}
e.when({
condition:r(),
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3da:923"), o(), _r_();
}), e.when({
events:"load",
action:[ "index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "reviews_region", "reviews_city", "genius", "mydashboard" ]
}).run(function(e) {
_i_("3da:924");
var i = t("#frm"), r = i.find("[name=group_children]"), a = t('<input type="hidden" name="' + n + '" value="1">');
i.on("submit", function(e) {
_i_("3da:1910");
var t = i.find("[name=" + n + "]"), o = parseInt(r.val()), s = i.find("[name=age]").find(":selected.sb_child_ages_empty_zero").length;
o && s ? i.append(a) :t.remove(), _r_();
}), _r_();
}), e.when({
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3da:925");
var t = (e("et"), e("searchresults/events"));
t.on(t.DATA_ENVIRONMENT_UPDATED, function(e) {
_i_("3da:1911"), r() && (a(), o()), _r_();
}), _r_();
}), a(), _r_();
}(booking), B.when({
events:"ready",
condition:$(".pincode_expired_error").length > 0
}).run(function() {
_i_("3da:205");
var e = $(".pincode_expired_error"), t = e.data("bn"), i = "<p>" + e.data("msg") + "</p>";
function n() {
_i_("3da:538"), e.html(i).closest(".js-pincode-ondemand-error").css({
backgroundColor:"#CEE5C3",
color:"#2C5520",
fontWeight:"bold"
}), _r_();
}
function r() {
_i_("3da:539");
var e = $(i);
e.hide(), $("body").append(e), B.require("lightbox").show(e, {
customWrapperClassName:"user-access-menu-lightbox user-access-menu-lightbox--user-center pincode_expired_error__resend_lightbox",
hideCallback:function() {
_i_("3da:1912"), e.remove(), _r_();
}
}), _r_();
}
e.find(".pincode_expired_error__resend_email_link").on("click", function(e) {
_i_("3da:926"), e.preventDefault(), $.ajax({
url:"/resend_confirmation_email",
type:"POST",
data:{
bn:t,
bhc_csrf_token:B.env.b_csrf_token
},
success:function() {
_i_("3da:2254"), "mdot" === B.env.b_site_type ? n() :r(), _r_();
}
}), _r_();
}), _r_();
}), B[sNSStartup].calendar2 = function(e, t, i, n, r) {
"use strict";
_i_("3da:316"), booking.jstmpl("calendar_buttons", function() {
_i_("3da:1442");
var e, t = [ "\n        ", '<div class="c2-calendar-footer-buttons">\n	', "\n		", '\n			<button class="c2-calendar-footer__this_weekend c2-weekend-button ', "__disabled", '" data-checkin="', '" data-checkout="', '">\n				', "/private/sxp_sbox_calendar_this_weekend_cta/name", "\n			</button>\n		", '\n			<button class="c2-calendar-footer__next_weekend c2-weekend-button ', "/private/sxp_sbox_calendar_next_weekend_cta/name", "\n	", "\n</div>\n", "\n    " ], i = [ "weekend", "dates" ];
return _r_(function(n) {
_i_("3da:2054");
var r = "", a = this.fn;
function o(r) {
return _i_("3da:2394"), r += t[1], a.MD(i[0]) && (r += t[2], a.MJ(a.MC(i[0]).thisWeekend) && a.MJ(a.MC(i[0]).thisWeekend.checkin) && (r += t[3], a.MJ(a.MC(i[0]).thisWeekend.checkin + "" == "" + a.MC(i[1]).checkin) && a.MJ(a.MC(i[0]).thisWeekend.checkout + "" == "" + a.MC(i[1]).checkout) && (r += t[4]), r += [ t[5], ((a.MC(i[0]) || {}).thisWeekend || {}).checkin, t[6], ((a.MC(i[0]) || {}).thisWeekend || {}).checkout, t[7], (n.unshift({
weekend_date:a.MG(((a.MC(i[0]) || {}).thisWeekend || {}).label)
}), e = a.ME(t[8], a.MB, a.MN, null), n.shift(), e), t[9] ].join("")), r += t[2], a.MJ(a.MG((a.MC(i[0]) || {}).nextWeekend)) && (r += t[10], a.MJ(a.MC(i[0]).nextWeekend.checkin + "" == "" + a.MC(i[1]).checkin) && a.MJ(a.MC(i[0]).nextWeekend.checkout + "" == "" + a.MC(i[1]).checkout) && (r += t[4]), r += [ t[5], ((a.MC(i[0]) || {}).nextWeekend || {}).checkin, t[6], ((a.MC(i[0]) || {}).nextWeekend || {}).checkout, t[7], (n.unshift({
weekend_date:a.MG(((a.MC(i[0]) || {}).nextWeekend || {}).label)
}), e = a.ME(t[11], a.MB, a.MN, null), n.shift(), e), t[9] ].join("")), r += t[12]), r += t[13], _r_(r);
}
return r += t[0], r = o(r), r += t[14], _r_(r);
});
}());
var a, o = i.require("hijri-calendar"), s = !1;
function _() {
_i_("3da:649"), i.search.dates("checkin") || r("#homein").find(".calendarLink").trigger("show"), _r_();
}
function l(e, t) {
_i_("3da:650");
var n = t.search || i.search, a = n.dates("checkin"), o = n.dates("checkout"), s = n.dates(t.type), _ = a && o && "valid" === a.type && "valid" === o.type;
r.fn.calendar2("each", function(e) {
if (_i_("3da:1733"), t.search && t.search !== e.search) return _r_();
e.type() === t.type && ("month" === s.type ? e.trigger("monthSelected", {
type:t.type,
value:s
}) :"valid" === s.type && e.trigger("dateSelected", {
type:t.type,
value:s
})), !_ || "checkin" !== e.type() && "checkout" !== e.type() || (e.trigger("rangeSelected", {
type:t.type,
startValue:a,
endValue:o
}), S(e, a, o, o.valueOf() - a.valueOf())), _r_();
}), _r_();
}
function d(e, t) {
_i_("3da:651"), r.fn.calendar2("each", function(e) {
_i_("3da:1734"), e.adjustHeight(!0), t.id !== e.id() && e.trigger("hide"), ("calendar_6" == t.id || "calendar_7" == t.id) && (o.disable(), r(".hijri-toggle-2").removeClass("active")), _r_();
}), i.env.b_weekend_buttons && i.et.stage("UBKeJGWcOCabUBWSTYDEZREGWe", 2), _r_();
}
function c() {
_i_("3da:652"), r.fn.calendar2("hide"), _r_();
}
function u() {
_i_("3da:653");
var e = new Date();
return _r_(e);
}
function h() {
_i_("3da:654");
var e = p();
return e.setDate(e.getDate() - 1), _r_(e);
}
function f() {
_i_("3da:655");
var e = i.calendar2.today();
return e.setDate(e.getDate() + 1), _r_(e);
}
function p() {
_i_("3da:656");
var e = i.calendar2.today();
return i.env.b_search_max_months ? (e.setMonth(e.getMonth() + i.env.b_search_max_months), e.setDate(0)) :e = new Date(e.getFullYear() + 1, e.getMonth() + 1, 0), _r_(e);
}
function g(e, t, n) {
_i_("3da:657");
var r = this.search || i.search;
if (!e && !t) return _r_();
var a, o, s = e.type();
r.dates(s, {
year:t.getYear(),
month:t.getMonth(),
date:t.getDate()
}), a = r.dates("checkin"), o = r.dates("checkout"), "valid" === a.type && ("invalid" === o.type ? r.dates("checkout", r.dates("checkin").addDays(1)) :a > o && r.dates("checkout", r.dates("checkin").addDays(1))), "valid" === o.type && "invalid" === a.type && r.dates("checkin", r.dates("checkout").addDays(-1)), e && e.$element && e.$element.parents(".b-searchbox").length > 0 && ("checkin" === s ? i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKIN_DATEPICKER) :"checkout" === s && i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKOUT_DATEPICKER)), "checkin" === s && e && e.$element && "searchresults" == i.env.b_action && i.et.track("AEJPCcYTPaCQbZBTEYDOUEaDZIET") && e.$element.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkout").trigger("show"), e.$input.focus(), _r_();
}
function m(e, t) {
_i_("3da:658"), 13 !== t.which || e.shown() || (r("#frm").submit(), t.preventDefault()), _r_();
}
function v(e) {
_i_("3da:659");
var t, n, a = e.search || i.search, s = a.dates("checkout"), _ = a.dates("checkin"), l = _ && s && "valid" === _.type && "valid" === s.type, d = e.type();
if ("checkin" === d ? "valid" === _.type ? (t = "dateSelected", n = _) :"month" === _.type && (t = "monthSelected", n = _) :"checkout" === d && ("valid" === s.type ? (t = "dateSelected", n = s) :"month" === s.type && (t = "monthSelected", n = s)), t && n && e.trigger(t, {
type:d,
value:n
}), l && e.trigger("rangeSelected", {
startValue:_,
endValue:s
}), S(e, _, s, s.valueOf() - _.valueOf()), o.available() && (r(".c2-wrapper-s-" + d + " .c2-calendar-header").contents().filter(function() {
return _i_("3da:2395"), _r_(3 === this.nodeType);
}).replaceWith(M(d)), o.enabled() && e.addState("hijri-enabled"), e.$calendarElement.delegate(".c2-calendar-header_hijri-toggle", "click", function(t) {
_i_("3da:2055"), t.preventDefault(), o.enabled() ? o.disable() :o.enable(), e.adjustHeight(!0), _r_();
})), 2 === i.env.b_weekend_buttons && C(e), i.et.track("OAZEUacYeNVYQCLBMC")) {
var c = e.days[e.daysIndex[0]].dateObject_, u = e.days[e.daysIndex[e.daysIndex.length - 1]].dateObject_;
i.require("fragment").call("mlt.bookings", {
checkin:c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate(),
checkout:u.getFullYear() + "-" + (u.getMonth() + 1) + "-" + u.getDate()
}).then(function(t) {
if (_i_("3da:2056"), t && t.constructor === Array && t.length && (i.et.stage("OAZEUacYeNVYQCLBMC", 1), 2 == i.et.track("OAZEUacYeNVYQCLBMC"))) {
for (var n in t) {
var r = new Date(t[n].checkin).getTime(), a = new Date(t[n].checkout).getTime();
e.highlightRange(r, a, {
name:t[n].checkin + "-" + t[n].checkout + "-" + Math.floor(1e4 * Math.random()),
className:"booking",
tooltip:i.jstmpl.translations("mlt_highlight_dates_for_booked_destination_tooltip", null, {
destination:t[n].city
})
});
}
i.et.on("mouseenter", ".c2-day-s-booking").customGoal("OAZEUacYeNVYQCLBMC", 1);
}
_r_();
}, function(e) {});
}
_r_();
}
function b(e, t) {
_i_("3da:660");
var n = "";
if (i.env.b_year_months[e + "-" + (t + 1)] && (n = i.env.b_year_months[e + "-" + (t + 1)].name), o.available()) {
var r = o.convert({
year:e,
month:t,
day:1
}), a = o.convert({
year:e,
month:t,
day:i.calendar2.DAYS_IN_MONTH[t]
});
n += i.jstmpl("hijri_month").render({
monthTitleAddition:w(r, a)
});
}
return _r_(n);
}
function w(e, t) {
return _i_("3da:661"), _r_(e.year && t.year && e.year !== t.year ? i.jstmpl.translations("ar_islamic_calendar_two_years", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
first_year:e.hijri_year,
second_year:t.hijri_year
}) :e.hijri_month_tag && t.hijri_month_tag && e.hijri_month_tag !== t.hijri_month_tag ? i.jstmpl.translations("ar_islamic_calendar_two_months", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
year:e.hijri_year
}) :i.jstmpl.translations("ar_islamic_calendar_no_month_change", null, {
hijri_month:i.jstmpl.translations(e.hijri_month_tag),
year:e.hijri_year
}));
}
var y = "hover";
function k(t, n) {
_i_("3da:662");
var r, a, o, s, _, l = this.search || i.search;
if (n && n.hasState("disabled")) return _r_();
if (e.clearTimeout(t.rangeHighlightTimeout), "checkin" === t.type() ? (r = n.id(), o = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), s = l.dates("checkout"), a = i.calendar2.dayId(s.year, s.month, s.date)) :"checkout" === t.type() && (o = l.dates("checkin"), r = i.calendar2.dayId(o.year, o.month, o.date), s = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), a = n.id()), o && "valid" === o.type && s && "valid" === s.type && (_ = s.valueOf() - o.valueOf(), _ > 0)) {
if (t.unHighlightRange(y), t.selectedRange_) for (var d = 0, c = t.selectedRange_.length; c > d; d++) t.days[t.selectedRange_[d]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
t.highlightRange(r, a, {
name:y
}), S(t, o, s, _);
}
_r_();
}
function S(e, t, n, r) {
_i_("3da:663");
var a = "";
if (t && n && (a = N(t, n, r), o.available() && (a += i.jstmpl("hijri_footer_warning").render())), 2 == i.env.b_weekend_buttons) {
var s = B(), _ = i.search.dates();
_.checkin = _.checkin.toString(), _.checkout = _.checkout.toString(), a += i.jstmpl("calendar_buttons").render({
weekend:s,
dates:_
});
}
"" !== a && e.$element.find(".c2-calendar-footer-dynamic").html(a), _r_();
}
function C(e) {
_i_("3da:664");
var t = [];
e.$element.find(".c2-calendar-footer").on("click", ".c2-weekend-button", function() {
_i_("3da:1735"), $(r(this).data()), i.env.b_weekend_buttons && i.et.customGoal("UBKeJGWcOCabUBWSTYDEZREGWe", 1), _r_();
}), e.$element.find(".c2-calendar-footer").on("mouseenter", ".c2-weekend-button", function() {
_i_("3da:1736");
var i = r(this);
if (i.hasClass("__disabled")) return _r_();
var n = [ i.data("checkin"), i.data("checkout") ];
t = x(e, n, "c2-day-weekend-hilighted"), _r_();
}), e.$element.find(".c2-calendar-footer").on("mouseleave click", ".c2-weekend-button", function() {
_i_("3da:1737");
for (var e = 0; e < t.length; e++) t[e].removeClass("c2-day-weekend-hilighted");
_r_();
}), _r_();
}
function x(e, t, n) {
_i_("3da:665");
for (var a, o, s = [], _ = 0; _ < t.length; _++) {
if (!t[_]) continue;
if (a = t[_].split("-"), a.length < 3) continue;
a[1] = a[1] - 1 + "", o = i.calendar2.dayId.apply(i.calendar2, a), o && s.push(r(e.getDay(o).element_).addClass(n));
}
return _r_(s);
}
function B() {
if (_i_("3da:666"), a) return _r_(a);
var e = 6, t = 0;
i.env.b_weekend_days && 2 === i.env.b_weekend_days.length && (e = parseInt(i.env.b_weekend_days[0].b_number, 10), t = parseInt(i.env.b_weekend_days[1].b_number, 10), 7 == t && (t = 0));
var n = i.require("formatting/date"), r = new Date(), o = {}, s = {}, _ = T(r, t);
o.checkin = E(T(r, e)), o.checkout = E(_);
var l = "short_date_without_year_range";
"ar" === i.env.b_selected_language && (l = "long_date_range_both_years"), o.label = "<span>" + n.locale_format({
date:o.checkin,
date_until:o.checkout,
format:l
}) + "</span>";
var d = T(_, e);
return s.checkin = E(d), s.checkout = E(T(d, t)), s.label = "<span>" + n.locale_format({
date:s.checkin,
date_until:s.checkout,
format:l
}) + "</span>", r.getDay() === t && (o = {}), a = {
thisWeekend:o,
nextWeekend:s
}, _r_(a);
}
function E(e) {
_i_("3da:667");
var t = new Date(e), i = "" + (t.getMonth() + 1), n = "" + t.getDate(), r = t.getFullYear();
return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([ r, i, n ].join("-"));
}
function T(e, t) {
_i_("3da:668");
var i = new Date(e.getTime());
return i.setDate(e.getDate() + (7 + t - e.getDay()) % 7), _r_(i);
}
function $(e) {
_i_("3da:669"), i.search.dates("checkin", e.checkin), i.search.dates("checkout", e.checkout), _r_();
}
function N(e, t, n) {
if (_i_("3da:670"), n > 0 && e && "valid" === e.type && t && "valid" === t.type) {
var r = "short_date_with_weekday_without_year", a = "short_date_with_weekday";
return _r_(i.jstmpl("length_of_stay_detailed").render({
b_interval:n,
b_checkin_date_formatted:i.formatter.date(e.toString(), r),
b_checkout_date_formatted:i.formatter.date(t.toString(), a)
}));
}
return _r_("");
}
function A(e, t) {
_i_("3da:671");
var i;
t === y && (i = e.getSelectedDay(), i && i.removeState("selected")), _r_();
}
function D(t, n) {
_i_("3da:672");
var r = this.search || i.search;
t.rangeHighlightTimeout = e.setTimeout(function() {
_i_("3da:1913"), t.rangeHighlightTimeout && (t.unHighlightRange(y), t.selectedRange_ && t.selectedRange_.length && t.createRange_(t.selectedRange_, "selected"), S(t, r.dates("checkin"), r.dates("checkout"), r.dates("checkout").valueOf() - r.dates("checkin").valueOf())), _r_();
}, 100), _r_();
}
function M(e) {
_i_("3da:673");
var t = "";
return o.available() && (t += i.jstmpl("hijri_toggle").render({
type:e || this.type(),
hijri_visible:!1
})), _r_(t);
}
function I(e) {
_i_("3da:674"), r.fn.calendar2("each", function(e) {
_i_("3da:1738"), e.addState("hijri-enabled"), _r_();
}), _r_();
}
function O(e) {
_i_("3da:675"), r.fn.calendar2("each", function(e) {
_i_("3da:1739"), e.removeState("hijri-enabled"), _r_();
}), _r_();
}
function L() {
_i_("3da:676");
var e = n.sunday_first, t = n.b_simple_weekdays.slice(0), a = n.b_short_months;
e && t.unshift(t.pop());
var s = i.calendar2.generalOptions = {
dayNames:t,
sundayFirst:e,
monthNames:a,
direction:n.rtl ? "rtl" :"ltr",
lazy:!0,
closeButton:!0,
onDateSelected:g,
onLazyInitiated:v,
monthTitle:b,
onKeyDown:m,
onRangeHighlighted:A,
onDayMouseEnter:k,
onDayMouseLeave:D,
arrow:!0,
search:i.search
};
i.env.b_sb_prices && (s.pricePlaceHolder = !0);
var _ = i.calendar2.checkinOptions = r.extend({}, s, {
type:"checkin",
defaultDate:i.search.dates("checkin"),
startDate:u(),
endDate:h(),
title:o.available() ? M :n.transl_checkin_title
}), l = i.calendar2.checkoutOptions = r.extend({}, s, {
type:"checkout",
defaultDate:i.search.dates("checkout"),
startDate:f(),
endDate:p(),
title:o.available() ? M :n.transl_checkout_title
});
return _r_({
checkinOptions:_,
checkoutOptions:l
});
}
function j() {
if (_i_("3da:677"), s) return _r_();
s = !0, i.eventEmitter.bind("SEARCH:destination_selected", _), i.eventEmitter.bind("SEARCH:date_changed", l), i.eventEmitter.bind("SEARCH:month_changed", l), i.eventEmitter.bind("CALENDAR:opened", d), i.eventEmitter.bind("AUTOCOMPLETE:opened", c), i.eventEmitter.bind("CALENDAR:hijri_enabled", I), i.eventEmitter.bind("CALENDAR:hijri_disabled", O), i.maps && "function" == typeof i.maps.on && i.maps.on("click-open", c), _r_();
}
function P() {
if (_i_("3da:678"), !i.env.b_calendar2) return _r_();
if (!i.calendar2 || i.env.b_is_tdot_traffic && "book" === i.env.b_action && 2 === i.env.b_book_stage) return _r_();
var e = r(".calendarLink, .b-datepicker");
if (0 === e.length) return _r_();
var t = L();
e.each(function(e, i) {
_i_("3da:1740");
var n = r(i), a = n.attr("rel") || n.data("type") || n.data("calendar2-type"), o = {};
n.unbind("click.calendar"), n.unbind("click.calendar2"), n.data("calendar2-align-right") && (o.alignToRight = 1), "checkin_year_month" === a || "checkin" === a ? n.calendar2(r.extend({}, t.checkinOptions, o)) :("checkout_year_month" === a || "checkout" === a) && n.calendar2(r.extend({}, t.checkoutOptions, o)), _r_();
}), j(), _r_();
}
function H() {}
function R(e, t) {
if (_i_("3da:680"), !i.env.b_calendar2) return _r_();
if (!i.calendar2 || i.env.b_is_tdot_traffic && "book" === i.env.b_action && 2 === i.env.b_book_stage) return _r_();
j();
var n = L();
e.calendar2(n.checkinOptions), t.calendar2(n.checkoutOptions), _r_();
}
return _r_({
init:P,
initElse:H,
initCalendars:R,
priority:8
});
}(window, document, booking, booking.env, $), function(e) {
if (_i_("3da:206"), e.getElementById("reactive_text_items")) {
var t = function() {
_i_("3da:1443");
var e = $("#reactive_text_items span").map(function() {
return _i_("3da:2548"), _r_("(" + decodeURIComponent($(this).text()) + ")");
}).get();
return _r_(new RegExp(e.join("|"), "i"));
}, i = function() {
return _i_("3da:1444"), _r_($("#reactive_text_items").children().length > 0);
};
$(function() {
_i_("3da:1445");
var e, n = t();
e = function() {
_i_("3da:2255");
var e = $(this).val();
n.test(e) || $("#reactive_text_box").is(":visible") && $("#reactive_text_box").fadeOut(), _r_();
}, $("#reactive_text_box").hide(), i() && $("#messagebox").keyup(e), _r_();
});
}
_r_();
}(document), function(e) {
_i_("3da:207"), e(function() {
_i_("3da:927"), e("#wl252-modal__if").length > 0 && booking.eventEmitter.bind("account-onboarding-modal-show", function() {
_i_("3da:2256"), e.cookie("wl252-gotit", "true", {
expires:365,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}), _r_();
}), _r_();
}(window.jQuery), function(e, t) {
_i_("3da:208");
var i, n, r, a = 0;
function o() {
_i_("3da:540");
var r = e(document).scrollTop(), a = t.tools.dom.getBounds(i);
return a.top = n + r, a.bottom = n + a.height + r, _r_(a);
}
function s(s) {
if (_i_("3da:541"), i || (i = e(".notice-wrap")), !i.length) return _r_();
n || (n = parseInt(i.css("top"), 10)), i.css({
transition:"0.3s top",
"-webkit-transition":"0.3s top"
});
var _ = +new Date() + s.stayTime;
_ > a && (a = _);
var l = n;
(function d(s) {
_i_("3da:1741");
var _ = e(".displace_growl:visible"), c = o();
l = n, _.each(function() {
_i_("3da:2396");
var e = t.tools.dom.getBounds(this), i = e.bottom;
t.tools.dom.boundsOverlap(e, c) && i >= l && (l = n + Math.max(0, i)), _r_();
});
var u = Math.max(n, l - e(document).scrollTop());
s != u && i.css({
top:u + "px"
}), new Date() < a && (clearTimeout(r), r = setTimeout(d, 500, u)), _r_();
}).call(), _r_();
}
function _() {
if (_i_("3da:542"), !window.navigator || !navigator.platform || -1 == navigator.platform.indexOf("Mac")) return _r_();
e(".uc_genius_tooltip").addClass("displace_growl"), t.eventEmitter.bind("growl:show", function(e, t) {
_i_("3da:1446"), s(t), _r_();
}), _r_();
}
t.ensureNamespaceExists(sNSStartup), B[sNSStartup].ge_adjust_growls_to_user_notice_popups = {
priority:9,
init:_
}, _r_();
}(window.jQuery, window.booking), booking[sNSExperiments].cQPHBAEWPAfJPESaO = {
init:function() {
_i_("3da:543");
var e, t, i = B.require("jquery"), n = this;
i('li.uc-notification[data-type="extension_announce"] a').click(function(r) {
_i_("3da:1447"), r.preventDefault(), e = i("#promo-chrome-ext-container"), t = i("#promo-chrome-ext"), i(".user_center_popover").hide(), n.initLightbox(e, t), booking[sNSStartup].lightbox.show(i("#promo-chrome-ext-container"), {
customWrapperClassName:"chrome-ext-container",
bAnimation:!0,
bCloseButton:!0
}), t.find(".cta-install-now a").click(function() {
_i_("3da:2257"), r.preventDefault(), chrome.webstore.install(booking.env.b_chrome_extension_install_url, function() {
_i_("3da:2613"), booking[sNSStartup].lightbox.hide(), _r_();
}), _r_();
}), t.find(".cta-play-again a").click(function() {
_i_("3da:2258"), r.preventDefault(), n.resetAnimation(t), n.startAnimation(t), _r_();
}), _r_();
}), _r_();
},
initElse:function() {},
initLightbox:function(e, t) {
_i_("3da:545"), t.hide().removeClass("hidden").show(), _r_();
},
resetAnimation:function(e) {
_i_("3da:546"), e.find(".cel-header").hide().css({
width:"362px",
height:"72px",
left:"189px",
top:"242px"
}), e.find(".cel-badge").hide(), e.find(".step-info").hide(), e.find(".popup").hide(), e.find(".cel-input").hide(), e.find(".extension-usps li").hide(), e.find(".cta-install-now,.cta-play-again").hide(), _r_();
},
startAnimation:function(e) {
_i_("3da:547"), e.queue("promoAnim", function() {
_i_("3da:1914"), $(this).find(".cel-header").delay(100).fadeIn(1e3).delay(1e3).fadeOut(1e3), $(this).dequeue("promoAnim"), _r_();
}).delay(4500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1915"), $(this).find(".step-1").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1916"), $(this).find(".popup-step-1").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2729"), $(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2674"), $(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2480"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1917"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-2").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2481"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(2500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1918"), $(this).find(".step-2").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1919"), $(this).find(".popup-step-3").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2730"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2675"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2482"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1920"), $(this).find(".popup-step-4").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2731"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2676"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2483"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1921"), $(this).find(".step-3").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1922"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-5").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(3e3).queue(function() {
_i_("3da:2484"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1923"), e.find(".cel-header").delay(1e3).css({
opacity:1
}).fadeIn(1e3).delay(1e3).animate({
width:181,
height:36,
top:130
}, 750), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:1924"), e.queue(function() {
_i_("3da:2677"), function t() {
_i_("3da:2732"), e.find("li:hidden:first").delay(1e3).fadeIn(500, t), _r_();
}(), $(this).dequeue(), _r_();
}).delay(7e3).queue(function() {
_i_("3da:2485"), e.find(".cta-install-now,.cta-play-again").fadeIn(), $(this).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.dequeue("promoAnim"), _r_();
},
stopAnimation:function(e) {
_i_("3da:548"), e.clearQueue("promoAnim"), e.stop("promoAnim", !0, !0), _r_();
}
}, function(e, t) {
_i_("3da:209");
function i() {
_i_("3da:549"), e.user && e.user.showGeniusForGoogle && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3da:1925"), t(".user_center_popover").css("z-index", "999"), e[sNSStartup].lightbox.rePosition(), t(".user_access_email").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking[sNSExperiments].cQPbbadAHHKe = {
init:function() {
_i_("3da:550"), booking.env.priceWatch.b_price_alert_all_canceled && booking[sNSStartup].lightbox.show($(".js-price-watch-unsubscribe--all"), {
customWrapperClassName:"price-watch-unsubscribe-wrapper"
}), _r_();
}
}, B.when({
condition:$('li.uc-notification[data-type="genius_onboarding_reminder"] a').length && "www" === B.env.b_site_type
}).run(function(e) {
_i_("3da:210");
var t = e("jquery"), i = t('li.uc-notification[data-type="genius_onboarding_reminder"] a');
i.click(function(e) {
_i_("3da:928"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), booking[sNSExperiments].header_2012 = function() {
_i_("3da:317");
var e = function() {
_i_("3da:1066"), $("#b_nav_profile").bind("click", function() {
_i_("3da:2058"), $(this).toggleClass("selected"), $("#b_header").hasClass("profile_slide_down") ? $("#b_header").removeClass("profile_slide_down").addClass("profile_slide_up") :$("#b_header").removeClass("profile_slide_up").addClass("profile_slide_down"), _r_();
}), $(".profile_login_switcher").bind("click", function() {
_i_("3da:2059"), $("#profile_forms").toggleClass("profile_sign-in").toggleClass("profile_sign-up"), _r_();
}), $("select", "#header_currency").bind("change", function() {
_i_("3da:2060"), $(this).parent("form").submit(), _r_();
}), $("select", "#header_language").bind("change", function() {
_i_("3da:2061"), $(this).parent("form").submit(), _r_();
}), _r_();
}, t = function() {
_i_("3da:1067"), e(), _r_();
};
return _r_({
init:t
});
}(), function(e) {
"use strict";
_i_("3da:211"), $(".profile-area__nav").delegate(".js-insiderguides-track", "click", function() {
_i_("3da:929");
var t = $(this).data("trackname");
e.google.trackEvent("Insider Guides", "Profile Nav Click", [ e.env.b_action, ":", t ].join(" ")), _r_();
}), _r_();
}(booking), booking[sNSStartup].sh_ga_event_tracking = function() {
_i_("3da:318");
function e() {
_i_("3da:681"), $(".ga-sh-tracker").click(function() {
_i_("3da:1742");
var e = $(this).data("google-track-event-category") || "Click", t = $(this).data("google-track-event-label") || "", i = $(this).data("google-track-event-action") || "", i = i.replace(/\n/g, ""), n = [];
"[" === i.substr(0, 1) && "]" === i.substr(-1) ? n = i.substr(1, i.length - 2).split(";") :i && n.push(i);
for (var r = 0; r < n.length; r++) n[r] && B.google.trackEvent(e, n[r], t);
_r_();
}), _r_();
}
return _r_({
init:e
});
}(), booking[sNSStartup].pss_bp_come_back = {
init:function() {
_i_("3da:551");
var e = B.require("user-left-client");
if (!(e.enabled && B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported())) return _r_();
e.register(B.env.b_action || "_client_"), _r_();
}
}, B[sNSStartup].responsive_header = function(e, t) {
"use strict";
_i_("3da:319");
var i = 167;
"ar" === t.env.b_lang && (i = 295), "zh-cn" === t.env.b_lang_for_url && (i = 236), t.env.b_is_villa_site && (i = 202);
function n(t) {
_i_("3da:682"), this.$element = e(t), this.priority_ = this.$element.data("priority") || 5, _r_();
}
n.prototype.width = function() {
return _i_("3da:1068"), this.width_ || (this.width_ = this.$element.outerWidth()), _r_(this.width_);
}, n.prototype.priority = function() {
return _i_("3da:1069"), _r_(this.priority_);
}, n.prototype.hide = function() {
return _i_("3da:1070"), this.$element.hide(), _r_(this);
}, n.prototype.show = function() {
return _i_("3da:1071"), this.$element.show(), _r_(this);
};
function r(t) {
_i_("3da:683"), this.$element = e(t), this.items = e.map(this.$element.find(".user_center_option"), function(e) {
return _i_("3da:1926"), _r_(new n(e));
}), this.sortedItems = this.items.sort(function(e, t) {
return _i_("3da:1927"), _r_(e.priority() - t.priority());
}), _r_();
}
r.prototype.fitWidth = function(i) {
return _i_("3da:1072"), e.each(this.sortedItems, function(e, t) {
_i_("3da:2062"), i - t.width() > 0 ? (i -= t.width(), t.show()) :t.hide(), _r_();
}), t.events && t.events.trigger("header:fit-width"), _r_(this);
};
function a() {
_i_("3da:684");
var n = e("#top"), a = new r(n.find(".user_center_nav"));
function o() {
_i_("3da:1073"), a.fitWidth(n.width() - i), _r_();
}
e(window).bind("resize", t.tools.functions.throttle(o, 300)), o(), _r_();
}
return _r_({
init:a,
priority:9
});
}($, booking), booking[sNSExperiments].notifications = {
priority:9,
init:function() {
_i_("3da:552"), this.initializeNotifications(), _r_();
},
initElse:function() {
_i_("3da:553"), this.initializeNotifications(), _r_();
},
initializeNotifications:function() {
_i_("3da:554");
var e = $("#notificationMenu .alert");
e.css({
display:"block",
visibility:"hidden"
});
var t = $("#formwrap"), i = t.height(), n = $(".sidebar_menu_placeholder").height();
n > i && t.animate({
"min-height":n
}, {
duration:400
}), e.css({
display:"none",
visibility:"visible"
}).css("opacity", 0).slideDown(500).animate({
opacity:1
}, {
queue:!1,
duration:750
}), _r_();
}
}, B[sNSStartup].search_summary_block = {
init:function() {
_i_("3da:555");
function e(e) {
_i_("3da:930");
var t = $("#searchboxInc");
t.find(".search_summary_block").hide(), t.find(".original_search_form").removeClass("original_search_form_hidden"), e.preventDefault(), _r_();
}
$(".search_summary_toggle_button").click(e), $(".sb-summary-block-item, .sb-summary-block__submit").click(function(e) {
_i_("3da:1448"), e.preventDefault(), $(".b-searchbox").removeClass("b-searchbox_summary"), _r_();
}), _r_();
}
}, booking[sNSStartup].SecretDeals = {
priority:8,
init:function() {
_i_("3da:556");
var e = this;
if (!$("#secretdeals-bg1").length) return _r_(!1);
$(window).bind("scroll", function(t) {
_i_("3da:1449"), e.parallaxScroll(), _r_();
}), $("a.section1").click(function() {
return _i_("3da:1450"), $("html, body").animate({
scrollTop:0
}, 1e3, function() {
_i_("3da:2259"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section2").click(function() {
return _i_("3da:1451"), $("html, body").animate({
scrollTop:$("#section2").offset().top
}, 1e3, function() {
_i_("3da:2260"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section3").click(function() {
return _i_("3da:1452"), $("html, body").animate({
scrollTop:$("#section3").offset().top
}, 1e3, function() {
_i_("3da:2261"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section4").click(function() {
return _i_("3da:1453"), $("html, body").animate({
scrollTop:$("#section4").offset().top
}, 1e3, function() {
_i_("3da:2262"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("nav#primary a").hover(function() {
_i_("3da:1454"), $(this).prev("h1").show(), _r_();
}, function() {
_i_("3da:1455"), $(this).prev("h1").hide(), _r_();
}), $(window).scroll(function() {
_i_("3da:1456");
var t = $(window).scrollTop();
900 >= t ? (e.removeActiveClass(), $("a#sd_nr1").addClass("active")) :t > 900 && 1750 > t ? (e.removeActiveClass(), $("a#sd_nr2").addClass("active")) :t > 1751 && 2500 > t ? (e.removeActiveClass(), $("a#sd_nr3").addClass("active")) :(e.removeActiveClass(), $("a#sd_nr4").addClass("active")), _r_();
}), _r_();
},
removeActiveClass:function() {
_i_("3da:557"), $(".sc_navigator a").each(function() {
_i_("3da:1457"), $(this).removeClass("active"), _r_();
}), _r_();
},
parallaxScroll:function() {
_i_("3da:558");
var e = $(window).scrollTop();
$("#secretdeals-bg1").css("top", 0 - .25 * e + "px"), $("#secretdeals-bg2").css("top", 0 - .5 * e + "px"), $("#secretdeals-bg3").css("top", 0 - .75 * e + "px"), $("#secretdeals-bg4").css("top", 0 - .3 * e + "px"), _r_();
}
}, "index" === B.env.b_action && $("#ed-wrapper").length > 0 && (booking[sNSExperiments].IZVJPVZMYCOKNIUAFCSDWLYScEUC = {
init:function() {
_i_("3da:1458");
var e = $("#ed-pagination"), t = $("#ed-prevpage"), i = $("#ed-nextpage"), n = $("#ed-cpagenum"), r = $("#ed-tpagenum"), a = $(".ed-list-wrapper.ed-cgrp"), o = $(".ed-list-wrapper"), s = o.length;
if (s > 1) {
o.each(function(e) {
_i_("3da:2486"), $(this).hasClass("ed-cgrp") && n.text(e + 1), _r_();
}), o.eq(s - 1).addClass("ed-lgrp"), e.show(), r.text(s);
function _() {
_i_("3da:2263");
var e = $(this);
"ed-prevpage" !== e.attr("id") || a.hasClass("ed-fgrp") ? "ed-nextpage" !== e.attr("id") || a.hasClass("ed-lgrp") || (a.removeClass("ed-cgrp").hide().next().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) + 1)) :(a.removeClass("ed-cgrp").hide().prev().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) - 1)), a = $(".ed-list-wrapper.ed-cgrp"), t.removeClass("ed-disclick"), i.removeClass("ed-disclick"), a.hasClass("ed-fgrp") ? t.addClass("ed-disclick") :a.hasClass("ed-lgrp") && i.addClass("ed-disclick"), _r_();
}
t.click(_), i.click(_);
}
_r_();
}
}), $(".popular_hotels-wrp").length > 0 && (booking[sNSExperiments].IZAFCSDWLCUC = {
init:function() {
_i_("3da:931"), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseenter", function() {
_i_("3da:1928");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-1").addClass("zind-10"), e.removeClass("hei-40 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseleave", function() {
_i_("3da:1929");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-10").addClass("zind-1"), e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-40 col-grey73"), _r_();
}), _r_();
}
}), booking[sNSStartup].survey = {
priority:9,
run:function() {
_i_("3da:559");
var e = $("#survey").attr("surveyurl");
if (e && (window.b_survey_url = e, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), "undefined" != typeof window.b_survey_url && window.b_survey_url) {
var t = $("#conf_survey,#survey,#conf_survey_bottom"), i = "/survey?", n = function() {
_i_("3da:1930"), "hotel" === booking.env.b_action && booking[sNSStartup].bookingSticker.update(), _r_();
}, r = function(e) {
if (_i_("3da:1931"), booking.env.showRevdSurvey2016Q1) var r = $(e.target).val(); else var r = $(this).val();
return r && (booking[sNSStartup].fix_move_book_header_and_button && (booking[sNSStartup].fix_move_book_header_and_button.surveyFixed = !1), "accept" === r || "Yes" === r || "yes" === r || "Ja, ik doe mee" === r || "Okay" === r ? window.open(window.b_survey_url, "booking_survey_window") :t.hide("normal", n), $.get(i + "decision=" + r + "&survey_key=" + booking.env.survey_key, {}, function(e) {
_i_("3da:2614"), t.hide("normal", function() {
_i_("3da:2709"), t.remove(), n(), _r_();
}), _r_();
})), _r_(!1);
};
booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
_i_("3da:2264"), t.addClass("show"), _r_();
}), t.find("button").on("click", r)) :(t.fadeIn("normal", n), t.find("button").click(r));
}
_r_();
},
init:function() {
if (_i_("3da:560"), this.run(), B.env.b_run_sr_ajax) {
var e = this;
B.require([ "searchresults/events" ], function(t) {
_i_("3da:1932"), t.on(t.UI_RESULTS_UPDATED, function() {
_i_("3da:2487"), e.run(), _r_();
}), _r_();
});
}
_r_();
}
}, function() {
_i_("3da:212");
var e = B.require("jquery");
booking[sNSExperiments].ZeZbObSAeOESJVWKMKe = {
init:function() {
_i_("3da:1459"), e(".wl_create_form").delegate(".wl-dropdown-toggle", "click", function() {
_i_("3da:2265"), e(this).toggleClass("collapsed"), e(this).parents(".wl-btn-group-wrap").next(".wl-dropdown-menu").slideToggle("fast"), _r_();
}), e(".wl_create_form").delegate(".wl-dropdown-menu-a", "click", function(t) {
_i_("3da:2266"), t.preventDefault();
var i = e(this);
e(".wl-privacy").val(this.rel), i.parents("form:first").submit(), "" != e(".wl_nameList_input").val() && e("#wl_create_shared_or_personal_list_modal").parent().css("opacity", .5), _r_();
}), _r_();
},
initElse:function() {}
}, _r_();
}(), B.define("component/banner", function(e, t, i) {
"use strict";
_i_("3da:213");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3da:1743"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3da:1744"), this.$el.on("click", ".js-close", this.hideEl.bind(this)), _r_();
},
hideEl:function(e) {
_i_("3da:1745"), e.preventDefault(), this.$el.fadeOut("fast"), _r_();
}
}), _r_();
}), booking[sNSStartup].user_autofocus_email_signinup = {
$ul:!1,
setFocusAndOrTrack:function() {
_i_("3da:561");
var e = this;
setTimeout(function() {
_i_("3da:1461"), e.$ul.find(".user_access_email:visible:first").select(), _r_();
}, 50), _r_();
},
setFocusSignIn:function() {
_i_("3da:562");
var e = this;
e.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function() {
_i_("3da:1462"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
setFocusSignUp:function() {
_i_("3da:563");
var e = this;
e.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function() {
_i_("3da:1463"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
init:function() {
_i_("3da:564"), this.$ul = $(".user_center_nav"), this.setFocusSignIn(), this.setFocusSignUp(), _r_();
}
}, function() {
_i_("3da:214");
var e = B.require("jquery");
booking[sNSExperiments].user_center_bar = {
priority:9,
init:function() {
_i_("3da:1464"), this.handleKeyDown = this.handleKeyDown.bind(this), this.initializeUserCenterBar(), booking.events.emit("user_center_bar:init"), _r_();
},
initializeUserCenterBar:function() {
_i_("3da:1465");
var t = this, i = e("#user_form>ul.user_center_nav").hasClass("toggle"), n = [];
if (n = n.concat([ {
className:"uc_language",
offset:0
} ]), booking.browserStorageHandler.deletePermanentValue("wl_fv", !0), booking.env.showFavesToWishlistNotice && !booking.browserStorageHandler.getPermanentValue("wl_fv2", !0)) {
var r = e("#top .uc_wishlists"), a = r.width() / 2, o = e("#faves_to_wishlist_notice"), s = o.width() / 2, _ = s - a, l = s - 8;
_ = -Math.round(_) + "px", l += "px", o.css("left", _), e("#faves_to_wishlist_notice .uc_top_arrow", r).css("left", l), o.show(), e(document).on("click", ".close_popover", function() {
_i_("3da:2488"), e(".popover_notice").remove(), _r_();
}), e(document).on("click", "#faves_to_wishlist_notice_link", function() {
_i_("3da:2489"), e(".popover_notice").remove(), e("#uc_wishlists_trigger").click(), _r_();
}), booking.browserStorageHandler.addPermanentValue("wl_fv2", 1, !0);
} else e(".user_imported_faves_new_badge").hide();
e(document.body).on("click", ".popover_trigger", function(r) {
_i_("3da:2267");
var a = e(this);
a.parent(), a.parent().hasClass("logged_in_user");
if (a.hasClass("js-disable-popover")) return _r_();
r && r.currentTarget && e(r.currentTarget).hasClass("profile_menu_trigger") && booking.eventEmitter && booking.eventEmitter.trigger("user_access_menu_open"), r.preventDefault();
for (var o = {}, s = n.length - 1; s >= 0; s--) {
var _ = a.parent().hasClass(n[s].className);
if (_) {
o.offset = n[s].offset;
break;
}
}
i ? a.next(".user_center_popover").is(":visible") ? t.hideDropdowns() :(t.hideDropdowns(a.parent()), t.positionPopover(a, o)) :t.positionPopover(a, o), _r_();
}), e(document).ready(function() {
_i_("3da:2268");
e(".user_center_option");
i && e("body").on("click", function(i) {
_i_("3da:2678"), 0 === e(i.target).closest(".user_center_option").length && t.hideDropdowns(), _r_();
}), e("body").mousedown(function(t) {
_i_("3da:2615"), e(t.target).closest(".user_center_option").find(".user_center_popover").is(":visible") && B.et.customGoal("YdVANUYbYLAXCJGOGAPTPWOGANOJNET", 2), i || t && t.target && !e(t.target).closest(".user_center_popover").length && (e(".user_center_popover").hide(), booking.eventEmitter.trigger("uc_popover_hidden"), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li.user_center_option").removeClass("active_option")), _r_();
}), (booking.user.showUserLoginOnLoad || booking.user.showUserLoginOnLoadDSF) && e(".signin_cta").click(), _r_();
}), !booking.browserStorageHandler.getSessionValue("np_user_popover_continue_registration") && e(".uc_account .popover_trigger").length && e(".new_partnership_user_center_popover").length && (t.positionPopover(e(".uc_account .popover_trigger"), {
popover:".new_partnership_user_center_popover"
}), booking.browserStorageHandler.addSessionValue("np_user_popover_continue_registration", !0)), e(".new_partnership_user_center_popover").on("click", function(e) {
_i_("3da:2269"), e.stopPropagation(), _r_();
});
var d = !1, c = !1;
function u() {
if (_i_("3da:1933"), d || c) return _r_();
booking.eventEmitter.trigger("uc_recently_viewed_opened"), c = !0;
var t = e(this).attr("data-href"), i = e(".uc_viewedhotels .hotels_container");
e.ajax({
url:t,
type:"GET",
success:function(e) {
_i_("3da:2616"), i.html(e), d = !0, booking.eventEmitter.trigger("uc_recently_viewed_loaded"), _r_();
},
complete:function() {
_i_("3da:2617"), e(".uc_viewedhotels .ajax_loading").hide(), e(".user_search_header").hide(), e(".no_listing:visible").length ? e(".uc_viewed_hotels .popover_content").addClass("empty_list") :(e(".user_search_header").appendTo(".uc_viewedhotels .popover_footer"), e(".user_search_header").show()), c = !1, _r_();
}
}), _r_();
}
e(".uc_viewed_hotels .popover_trigger").click(u), e(document).on("click", ".socnet_mailafriend", function() {
_i_("3da:2270"), setTimeout(function() {
_i_("3da:2618"), e(".user_center_popover").hide(), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li .popover_trigger").removeClass("active_option"), _r_();
}, 200), _r_();
}), e(document).on("click", "#user_form a.remove_hotel, #user_form a.user_search_item_remove_link", function(i) {
_i_("3da:2271");
var n = e(this).attr("href").split("#")[1], r = {
hotel_id:n
};
r = t.addDefaultParams(r), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:r
}), this.blur();
var a = e(this).parents(".user_search_item").get(0), o = a.parentNode;
return e(a).hide("slow", function() {
if (_i_("3da:2619"), e(".hidden_item", o).length) {
var t = e(".hidden_item", o).get(0);
e(t).removeClass("hidden_item");
}
_r_();
}), t.removeOneHome(n), e("#user_form .user_search_item:visible").length || e(this).parents("#user_form").find(".user_search_item:visible").length || (e(".uc_viewedhotels .popover_footer").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_center_popover .no_listing").show()), _r_(!1);
}), e(document).on("click", "#user_form a#removeAllHistoryHotel", function() {
return _i_("3da:2272"), t.removeAll(e(this).attr("id")), e(".user_center_popover").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_searches_content").show(), e(".user_searches_content .user_search_item").hide(), e(".user_search_footer").hide(), e("#user_form .uc_viewed_hotels .popover_footer").remove(), e(".uc_viewed_hotels .no_listing").show(), _r_(!1);
}), _r_();
},
hideDropdowns:function(t) {
_i_("3da:1466");
var i = e(".user_center_option").not(t), n = i.find(".user_center_popover:visible");
n.length > 0 && (n.hide(), booking.eventEmitter.trigger("uc_popover_hidden")), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e(".new_partnership_user_center_popover").remove(), i.removeClass("active_option"), B.et.track("OTfdASFfaNaSAeMVNaSQWDEZCLWKGdYT") && this.removeEvents(), _r_();
},
removeAll:function(t) {
_i_("3da:1467");
var i = this, n = e("#" + t).parents(".user_searches_content");
if ("removeAllHistoryHotel" == t) {
var r = {
hotel_id:-1
};
r = this.addDefaultParams(r), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:r
}), i.removeAllHome();
} else booking[sNSStartup].search_history.removeAll(!0);
e("#" + t).blur(), e(".user_search_item", n).each(function() {
_i_("3da:2273"), e(this).hasClass("no_listing") ? e(this).show("slow") :e(this).hide("slow", function() {
_i_("3da:2679"), e(this).remove(), _r_();
}), _r_();
}), e(".user_search_header", n).hide(), e(".user_search_footer", n).hide(), _r_();
},
removeAllHome:function() {
_i_("3da:1468"), e(".user_searches_content").hide(), _r_();
},
removeOneHome:function(t) {
_i_("3da:1469"), e(".user_searches_content .remove_hotel").each(function() {
_i_("3da:2274");
var i;
e(this).attr("href") == "#" + t && (i = e(this).parents(".user_search_item"), i.remove()), _r_();
}), _r_();
},
positionPopover:function(t, i) {
_i_("3da:1470"), e("#faves_to_wishlist_notice").remove();
var n = e(t).parent();
if (!n) return _r_();
var r, a = n.width() / 2;
r = "string" == typeof i.popover ? e(i.popover, n) :e(".user_center_popover", n), "current_account" == n.attr("id") && (r.length > 1 || !r.hasClass("uc_genius_tooltip")) && (r = r.filter(":not(.uc_genius_tooltip)"), e(".uc_genius_tooltip").remove());
var o = r.width() / 2, s = o - a, _ = o - 8, l = n.offset().left - e("#bodyconstraint").offset().left, d = e("#bodyconstraint").width(), c = d - (o + a + l), u = l + a - o;
0 > c && u > 0 ? (s -= c, _ -= c) :c > 0 && 0 > u && (s += u, _ += u);
var h = i && i.offset;
if (h && (s += h, _ += h), r.css("left", -Math.round(s)), e(".user_center_popover .uc_top_arrow", n).css("left", _), e(".user_center_popover:visible").length && booking.eventEmitter.trigger("uc_popover_hidden"), e(".user_center_popover:visible", n).length) e(".user_center_popover").hide(); else {
var f = n.attr("data-id") || n.attr("id");
e(".user_center_popover").hide(), r.show(), booking.eventEmitter.trigger("uc_popover_showed", {
id:f
}), 1 == t.closest("li.user_center_option").find(".user_center_popover").length && B.et.stage("YdVANUYbYLAXCJGOGAPTPWOGANOJNET", 1);
}
e("body.user_center #formwrap #signup_password:visible").length && (e("#formwrap #signup_password").css("z-index", "99"), e("#formwrap .pwd_strength").css("z-index", "99")), e("#dashboard_search #inout").css("z-index", "99"), B.et.track("OTfdASFfaNaSAeMVNaSQWDEZCLWKGdYT") && this.attachEvents(), _r_();
},
addDefaultParams:function(t) {
return _i_("3da:1471"), _r_(e.extend(t, {
aid:B.env.b_aid,
sid:B.env.b_sid,
stype:B.env.b_site_type_id,
stid:B.env.b_stid,
label:B.env.b_label
}));
},
attachEvents:function() {
_i_("3da:1472"), document.addEventListener("keydown", this.handleKeyDown, !0), _r_();
},
removeEvents:function() {
_i_("3da:1473"), document.removeEventListener("keydown", this.handleKeyDown, !0), _r_();
},
handleKeyDown:function(e) {
_i_("3da:1474"), 27 == e.keyCode && this.hideDropdowns(), _r_();
}
}, _r_();
}(), function() {
_i_("3da:215");
var e = B.require("ga-tracker"), t = B.require("jquery");
t(document.documentElement).on("click", ".js-raf-center-bar-link", function() {
_i_("3da:932"), e.trackEvent(e.referralAdvocateTracker, "click", "center bar"), _r_();
}), _r_();
}(), booking[sNSStartup].wishlist_invite_multiple = {
init:function() {
_i_("3da:565");
var e = $(".mail_friend_box"), t = $(".wl_field_wrapper:first", e), i = $("#wishlist_modal"), n = $(".wl_field_and_remove_wrapper:first").clone(), r = function() {
return _i_("3da:1475"), _r_(n.clone());
}, a = $(".wl_share_list_toggle");
$(e).delegate(".wl_extra_email_field", "click", function() {
if (_i_("3da:1476"), 8 == $(".wl_field_wrapper", e).length) $(".wl_extra_email_field").addClass("disabled"); else {
var i = $(".wl_field_wrapper", e).length + 1;
t.clone().insertAfter($(".wl_field_wrapper:last", e)), $(".wl_field_wrapper:last .maf_input", e).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + i).attr("id", "to" + i), $(".wl_field_wrapper:last .wl_btn_remove_email_field", e).show();
}
_r_();
}), $(e).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("3da:1477"), $(this).parent().remove(), $(".wl_field_wrapper", e).length < 4 && $(".wl_extra_email_field").removeClass("disabled"), _r_();
}), $(e).delegate(".wl_add_message_field", "click", function() {
_i_("3da:1478"), $(".wl_add_message_input_field").toggle(), _r_();
}), $(".wl_email_share_trigger").click(function() {
_i_("3da:1479"), booking[sNSStartup].lightbox.show($("#wl_email_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_invite_share_trigger").click(function() {
_i_("3da:1480"), booking[sNSStartup].lightbox.show($("#wl_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_add_new_trigger").click(function() {
_i_("3da:1481"), booking[sNSStartup].lightbox.show($("#wl_create_shared_or_personal_list_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), i.find(".toggler").click(function() {
return _i_("3da:1482"), $(this).closest("div").find(".toggable").slideDown(), $(this).remove(), _r_(!1);
}), $("#shareCheck").click(function() {
_i_("3da:1483"), $(this).is(":checked") ? $(".wl_share_list_with_others").show() :$(".wl_share_list_with_others").hide(), _r_();
}), $(a).delegate(".wl_create_extra_email_field", "click", function() {
if (_i_("3da:1484"), 4 == $(".wl_field_and_remove_wrapper", a).length) $(".wl_create_extra_email_field").addClass("disabled"); else {
var e = $(".wl_field_and_remove_wrapper", a).length + 1;
r().appendTo($(".js-wl-emails-wrapper", a)), $(".wl_field_and_remove_wrapper:last .maf_input", a).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + e).attr("id", "to" + e), $(".wl_field_and_remove_wrapper:last .wl_btn_remove_email_field", a).show();
}
_r_();
}), $(a).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("3da:1485"), $(this).parent().remove(), $(".wl_field_and_remove_wrapper", a).length < 4 && $(".wl_create_extra_email_field").removeClass("disabled"), _r_();
}), _r_();
}
}, booking[sNSStartup].pp_bpg_overlay = function(e) {
_i_("3da:320");
var t = e.require("jquery");
function i() {
_i_("3da:685"), t("body").on("click", "a.open-bpg-in-overlay-instead", function(t) {
_i_("3da:1746"), t.preventDefault(), t.stopPropagation();
var i = e.require("lightbox");
i.hide();
var r = e.require("async-loader");
r.load({
js:"async_wpm_overlay_js",
css:"async_wpm_overlay_css"
}).then(n), _r_();
}), _r_();
}
function n() {
_i_("3da:686");
var i = e.require("lightbox"), n = e.jstmpl("bpg_module_overlay").render({
bpg_label:e.env.bpg_label,
b_hotel_price_parity:e.env.is_eligible_to_double_price_match,
b_site_type:e.env.b_site_type,
cs_page_link:e.env.prd_bpg_overlay_cs_link,
b_companyname:e.env.b_companyname,
b_action:e.env.b_action
});
i.show(n, {
customWrapperClassName:"bgp_module_overlay",
autoWidth:!1,
bCloseButton:!1,
bAnimation:!1
}), t(".bpg-overlay--content").on("click", ".bpg-overlay--close", function() {
_i_("3da:1747"), i.hide(), _r_();
}), _r_();
}
function r() {
_i_("3da:687");
var i = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip", ".best_price_popup", ".pp_bpg_tooltip_holder", ".bp-usps__usp__title" ].join(",");
t("body").on("click", i, function() {
_i_("3da:2063"), e.events.trigger("BPG:Click"), _r_();
}).on("mouseenter", i, function() {
_i_("3da:1748"), e.events.trigger("BPG:Hover"), _r_();
}), _r_();
}
return _r_({
init:function() {
_i_("3da:1486"), r(), i(), _r_();
}
});
}(booking), B.events.on("BPG:Click", function() {
_i_("3da:216"), B.et.stage("eDdJFHdUbSLRBRJcCcCcCDPBFO", 1), _r_();
}), B.events.on("BPG:Click", function() {
_i_("3da:217"), B.et.stage("eDdJFBfeSIFcCeRYWe", 2), _r_();
}), B.events.on("BPG:Hover", function() {
_i_("3da:218"), B.et.stage("eDdJFBfeSIFcCeRYWe", 1), _r_();
}), booking[sNSExperiments].PVAYZQVceWTNOaEVC = {
init:function() {
_i_("3da:566");
var e = $(".da_tab_bar"), t = e.find(".da_tab"), i = e.find(".all_tab"), n = 0;
if (e.length < 1) return _r_();
var r = $(".disam-single-result").first().data("type");
t.each(function() {
_i_("3da:1487");
var e = $(this).data("tab"), t = $(".filter_type_" + e).length;
n += t, "all" !== e && ($("body").hasClass("lang_is_rtl") ? $(this).prepend("<span class='type_count'>" + t + "</span>") :$(this).append("<span class='type_count'>" + t + "</span>")), 0 === t && "all" !== e && $(this).hide(), _r_();
}), i.append("<span class='type_count'>" + n + "<span>"), t.click(function() {
_i_("3da:1488"), t.removeClass("active"), $(this).addClass("active");
var e = $(this).data("tab");
"all" === e ? $(".disam-single-result").show() :($(".disam-single-result").hide(), $(".filter_type_" + e).show()), _r_();
}), t.each(function() {
_i_("3da:1489"), $(this).data("tab") === r && $(this).click(), _r_();
}), e.css("visibility", "visible"), _r_();
}
}, B.when({
events:"load",
experiment:"EKMTOBAWGRcUQAcSWXCeLFSKe"
}).require([ "et", "jquery", "squeak" ], function(e, t, i) {
_i_("3da:219"), t('[id="req_info"]').length > 1 && i("GCaQadTGJNbHRKecbbRe"), _r_();
}), B.define("font-face-on-load", function(e, t, i) {
"use strict";
_i_("3da:220");
var n = e("jquery"), r = B.debug("font-face-on-load"), a = "AxmTYklsjo190QW", o = "sans-serif", s = "serif", _ = {
normal:"400",
bold:"700"
}, l = {
tolerance:2,
delay:100,
glyphs:"",
success:function() {},
error:function() {},
timeout:5e3,
weight:"400",
style:"normal"
}, d = [ "display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap" ], c = '<div style="%s">' + a + "</div>";
function u() {
_i_("3da:567"), this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {}, _r_();
}
u.prototype.getMeasurements = function() {
return _i_("3da:933"), _r_({
sansSerif:{
width:this.sansSerif.offsetWidth,
height:this.sansSerif.offsetHeight
},
serif:{
width:this.serif.offsetWidth,
height:this.serif.offsetHeight
}
});
}, u.prototype.load = function() {
_i_("3da:934");
var e, t = new Date(), i = this, n = i.serif, a = i.sansSerif, _ = i.parent, l = i.appended, u = this.options, h = u.reference;
function f(e) {
return _i_("3da:1492"), _r_(d.concat([ "font-weight:" + u.weight, "font-style:" + u.style ]).concat("font-family:" + e).join(";"));
}
var p = c.replace(/\%s/, f(o)), g = c.replace(/\%s/, f(s));
_ || (_ = i.parent = document.createElement("div")), _.innerHTML = p + g, a = i.sansSerif = _.firstChild, n = i.serif = a.nextSibling, u.glyphs && (a.innerHTML += u.glyphs, n.innerHTML += u.glyphs);
function m(e, t, i) {
return _i_("3da:1493"), _r_(Math.abs(e.width - t.offsetWidth) > i || Math.abs(e.height - t.offsetHeight) > i);
}
function v() {
return _i_("3da:1494"), _r_(new Date().getTime() - t.getTime() > u.timeout);
}
!function b() {
_i_("3da:1934"), h || (h = document.body), !l && h && (h.appendChild(_), l = i.appended = !0, e = i.getMeasurements(), a.style.fontFamily = i.fontFamily + ", " + o, n.style.fontFamily = i.fontFamily + ", " + s), l && e && (m(e.sansSerif, a, u.tolerance) || m(e.serif, n, u.tolerance)) ? (r.log(i.fontFamily + " font loaded"), u.success()) :v() ? (r.error(i.fontFamily + " font loading timed out"), u.error()) :!l && "requestAnimationFrame" in window ? window.requestAnimationFrame(b) :window.setTimeout(b, u.delay), _r_();
}(), _r_();
}, u.prototype.checkFontFaces = function(e) {
_i_("3da:935");
var t = this;
document.fonts.forEach(function(i) {
_i_("3da:1935"), i.family.toLowerCase() === t.fontFamily.toLowerCase() && (_[i.weight] || i.weight) === "" + t.options.weight && i.style === t.options.style && i.load().then(function() {
_i_("3da:2620"), r.log(t.fontFamily + " font loaded"), t.options.success(), window.clearTimeout(e), _r_();
}), _r_();
}), _r_();
}, u.prototype.init = function(e, t) {
_i_("3da:936");
var i;
for (var a in l) t.hasOwnProperty(a) || (t[a] = l[a]);
this.options = t, this.fontFamily = e, !t.glyphs && "fonts" in document && "function" == typeof document.fonts.forEach ? (t.timeout && (i = window.setTimeout(n.proxy(function() {
_i_("3da:2621"), r.error(this.fontFamily + " font loading timed out"), t.error(), _r_();
}, this), t.timeout)), this.checkFontFaces(i)) :this.load(), _r_();
};
function h(e, t) {
_i_("3da:568");
var i = new u();
return i.init(e, t), _r_(i);
}
i.exports = h, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3da:221");
var t = e("font-face-on-load"), i = {
woff:"//s-ec.bstatic.com/static/css/fonticons_clean/base64/woff/5d61b8a7156073e5e3e9741f65dda44ae3eef7d2.css",
opentype:"//s-ec.bstatic.com/static/css/fonticons_clean/base64/opentype/379fae32e03d316d4fa8a000bd53978baa8de48a.css",
truetype:"//t-ec.bstatic.com/static/css/fonticons_clean/base64/truetype/789d396d92f96569dc6900688e31505670801b0e.css"
}, n = function() {
_i_("3da:937"), $("body").removeClass("iconfont_is_loading"), _r_();
}, r = function() {
if (_i_("3da:938"), "msie" == B.env.b_browser) return _r_("opentype");
if ("safari" == B.env.b_browser && B.env.b_browser <= 5) return _r_("truetype");
if ("android" == B.env.b_browser && B.env.b_browser_version <= 4.4) return _r_("truetype");
return _r_("woff");
}, a = function() {
_i_("3da:939");
var e = r();
return _r_(i[e]);
}, o = function() {
_i_("3da:940");
var e = a(), t = document.createElement("link");
t.type = "text/css", t.rel = "stylesheet", t.href = e;
var i = document.createElement("img");
i.onerror = function() {
_i_("3da:1936"), n(), _r_();
}, i.src = e, document.getElementsByTagName("head")[0].appendChild(t), _r_();
}, s = function() {
_i_("3da:941"), n(), _r_();
}, _ = function() {
_i_("3da:942"), o(), _r_();
};
t("booking-iconset", {
success:s,
error:_,
timeout:250
}), _r_();
}), B.define("profile/social/social-connect/social-connect", function(e, t, i) {
"use strict";
_i_("3da:222"), i.exports = {
getEnv:function() {
return _i_("3da:1495"), _r_(booking.env["social-connect"]);
},
findPendingState:function() {
return _i_("3da:1496"), _r_(this.getEnv().filter(function(e) {
return _i_("3da:2397"), _r_(/_REQUIRED|_CONFLICT|_EXISTING/.test(e.state));
})[0]);
},
clearState:function(e) {
_i_("3da:1497"), $.get("/update_facebook_connect_state", {
action:"clear_state",
state:e.state,
provider:e.provider
}), _r_();
}
}, _r_();
}), B.define("profile/social/social-connect-dialogs/social-connect-dialogs", function(e, t, i) {
"use strict";
_i_("3da:223");
var n = e("profile/social/social-connect/social-connect");
i.exports = {
support:{
MERGE_REQUIRED:"merge-required",
EMAIL_REQUIRED:"email-required",
EMAIL_CONFLICT:"email-conflict",
EMAIL_EXISTING:"email-existing",
CONNECTED:void 0
},
onload:function() {
_i_("3da:1498");
var e = n.findPendingState();
e && this.show(e), _r_();
},
selector:function(e) {
return _i_("3da:1499"), _r_(".js-social-connect-dialog--" + e.provider + "-" + this.support[e.state]);
},
show:function(e) {
_i_("3da:1500");
var t = $(this.selector(e));
if (0 === t.length) return _r_();
booking.lightbox.show(t, {
hideCallBack:n.clearState.bind(n, e),
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}
}, _r_();
}), B.when({
condition:B.env.b_run_social_connect,
events:"ready"
}).run(function() {
_i_("3da:224"), B.require("profile/social/social-connect-dialogs/social-connect-dialogs").onload(), _r_();
}), B.when({
language:"ja",
hover:"350ms .d-deal-b",
experiment:"YdVcRQZBESaTfQHZKe",
stage:1
}), B.when({
events:"ready",
experiment:"PVSfZFCPdaIFPXe",
condition:$("body").hasClass("sb_advanced_search")
}).run(function() {
_i_("3da:225");
var e = $("#searchboxInc #frm"), t = $(".b-form__booker-type", e), i = $(".group-groupsearch", e), n = $(".genius--white-yellow", e), r = $(".b-form-number-of-nights", e), a = $('<span class="advanced_link"> <b>' + B.jstmpl.translations("sbox_more_search_options_toggle") + "</b></span>"), o = $('<i class="bicon-upchevron"></i>'), s = $('<i class="bicon-downchevron"></i>', e);
e && e.length > 0 && (t.hide(), i.hide(), n.hide(), r.after(a), a.prepend(o).prepend(s), a.click(function() {
_i_("3da:1501"), B.et.customGoal("PVSfZFCPdaIFPXe", 1), t.toggle(), i.toggle(), n.toggle(), o.toggle(), s.toggle(), _r_();
})), _r_();
}), B.when({
events:"ready",
condition:B.env.b_genius_user && $("body").hasClass("sb_can_have_advanced_search")
}).run(function() {
_i_("3da:226"), B.et.stage("PVSfZFCPdaIFPXe", 1), _r_();
}), $(function() {
"use strict";
_i_("3da:227");
var e, t = B.require("jquery"), i = "vpmss";
if (t(window).on("resize", function() {
_i_("3da:943"), e && clearTimeout(e), e = setTimeout(function() {
_i_("3da:2064"), t.cookie(i, null), _r_();
}, 2e3), _r_();
}), t.cookie(i)) return _r_();
if (!B.env.vpm_log_screen_size) return _r_();
setTimeout(function() {
_i_("3da:944");
var e = t(window), r = parseInt(e.width(), 10), a = parseInt(e.height(), 10);
if (!n(r) || !n(a)) return _r_();
t.post("/vpmlogdesktopscreensize", {
width:r,
height:a
}), t.cookie(i, 1, {
expires:31,
path:"/"
}), _r_();
}, 5);
function n(e) {
return _i_("3da:569"), _r_(!isNaN(e) && isFinite(e) && e > 0);
}
_r_();
}), B.when({
condition:B.env.fe_is_user_aspiring,
events:"ready"
}).run(function() {
_i_("3da:228");
var e, t, i = $(".book-challenge__stamp--current"), n = $(".book-challenge__message"), r = $(".book-challenge__message-inner"), a = r.html();
if ($(".book-challenge__stamp--booked").on("mouseenter", function() {
_i_("3da:945");
var a = $(this);
t = a.index() + 1, e && clearInterval(e);
var o = a.data("progMsg");
n.addClass("book-challenge__message__arrow--stamp" + t), i.removeClass("book-challenge__stamp--current"), r.addClass("book-challenge__message-hover"), o && r.html(o), _r_();
}), $(".js-genius-trial-desktop---show-challange").on("click", function() {
_i_("3da:946"), $(".genius-trial-desktop--wrapper").toggleClass("genius-trial-desktop--ch-open"), $(".book-challenge").toggleClass("genius-trial-desktop-shown"), $(".genius-trial-desktop--challenge-info").toggleClass("ge-yellow-border"), $(".book-challenge").toggleClass("ge-yellow-border"), _r_();
}), $(".js-genius-trial-desktop--lightbox").length) {
var o = B.components.require("ge-lightbox");
o.setup({
element:".js-genius-trial-desktop--lightbox",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
});
}
if (B.env.fe_ge_show_asp_trial_opt_in_lightbox) {
function s() {
_i_("3da:947"), $.ajax({
type:"post",
url:"/genius_trial_optin_lightbox_seen?campaign_id=4",
data:{}
}), _r_();
}
var _ = B.components.require("ge-lightbox");
_.open({
template:"ge_trial_optin_lightbox",
onOpen:function() {
_i_("3da:1937"), s(), _r_();
},
data:B.env.fe_ge_asp_trial_opt_in_lightbox_data
});
}
if ($(".book-challenge__stamp--booked").on("mouseleave", function() {
_i_("3da:948"), n.removeClass("book-challenge__message__arrow--stamp" + t), e = setTimeout(function() {
_i_("3da:2065"), i.addClass("book-challenge__stamp--current"), r.removeClass("book-challenge__message-hover"), r.html(a), _r_();
}, 100), _r_();
}), $(".ge_challenge_cta").length) {
var l = B.components.require("ge-lightbox");
l.setup({
element:".ge_challenge_cta",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_action:B.env.b_action
}
});
}
_r_();
}), B.when({
condition:B.env.b_reg_user_is_genius
}).run(function() {
if (_i_("3da:229"), B.env.fe_ge_pilot_markets_lb) {
function e() {
_i_("3da:949"), $.ajax({
type:"post",
url:"/genius_login_lightbox_seen",
data:{}
}), _r_();
}
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_pilot_markets_lightbox",
onOpen:function() {
_i_("3da:1938"), e(), _r_();
},
data:B.env.fe_ge_pilot_markets_lb_data
});
}
_r_();
}), B.when({
condition:$(".ge_challenge_cta,.js-open-asp-about-lightbox").length
}).run(function(e) {
_i_("3da:230");
var t = e("jquery");
t(".ge_challenge_cta,.js-open-asp-about-lightbox").click(function(e) {
_i_("3da:950"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_user_genius_status && parseInt(B.env.b_user_genius_status.is_genius_plus)
}).run(function() {
if (_i_("3da:231"), $("#genius-plus-progress-bar").length) {
var e = $("#genius-plus-progress-cont").data("days"), t = e / 365 * 100, i = $("#genius-plus-progress-bar"), n = i.attr("r"), r = Math.PI * (2 * n);
0 > t && (t = 0), t > 100 && (t = 100);
var a = (100 - t) / 100 * r;
i.css({
strokeDashoffset:a
});
}
var o = $("#js-ge-open-tier-lighbox");
o.length && o.on("click", function(e) {
_i_("3da:1502"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_perks_lightbox",
data:{
first_name:B.env.b_genius_user.first_name || "Genius",
plus_end_date:B.env.b_user_genius_status.plus_end_date
}
}), _r_();
});
var s = $("#js-ge-lonely-planet-lighbox");
s.length && s.on("click", function(e) {
_i_("3da:1503"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_lonely_planet_lightbox",
data:{}
}), _r_();
}), _r_();
}), B.when({
action:"index"
}).run(function() {
_i_("3da:232"), $(".ge-onboarding-index__timeline").addClass("animate"), _r_();
}), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDWe"
}), setTimeout(function() {
_i_("3da:233"), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDZSAcQeKe",
stage:1
}), _r_();
}, 1e3), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3da:234");
var t = e("jquery"), i = B.components.require("ge-lightbox");
t(document).on("click", '[data-ge-id="js_user_menu_ge_lb_link"]', function(e) {
_i_("3da:951"), e.preventDefault(), i.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_has_abandoned_cart_data && B.env.fe_user_is_aspiring_1plus_in_www
}).run(function() {
_i_("3da:235"), B.events.on("growl:show", function(e) {
_i_("3da:952"), e.type.match("abandoned-cart-growl-notification") && B.et.stage("cQHSdDHNLCKbHRGZEHe", 1), _r_();
}), _r_();
}), B.when({
condition:B.env.b_action.match(/^(index|hotel|searchresults|mydashboard|continent|country|region|city|district|landmark|airport|place)$/) && "www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function() {
_i_("3da:236");
var e = B.components.require("ge-lightbox");
function t() {
_i_("3da:570"), $.ajax({
type:"post",
url:"/genius_trial_lightbox_seen?campaign_id=" + B.env.ge_trial_campaign_id,
data:{}
}), _r_();
}
var i = {
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
};
B.env.fe_is_zero_ge_trial_desktop_user && (i.fe_is_zero_ge_trial_desktop_user = 1, i.fe_is_zero_ge_trial_init_lightbox = 1), B.env.show_ge_trial_lighbox_onload && setTimeout(function() {
_i_("3da:1504"), e.open({
template:"ge_genius_week_lightbox",
data:i,
onOpen:function() {
_i_("3da:2490"), t(), _r_();
}
}), _r_();
}, 1500), $(document).on("click", ".js-ge-open-trial-lighbox", function(t) {
_i_("3da:953"), t.preventDefault(), e.open({
template:"ge_genius_week_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
}
}), _r_();
}), $(document).on("click", "#js_close_trial_lightbox", function() {
return _i_("3da:954"), B.lightbox.hide(), _r_(!1);
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3da:237");
var t = e("jquery"), i = t("#ge_genius_rate"), n = B.browserStorageHandler;
if (!n) return _r_();
var r = n.getPermanentValue("genius_search_checkbox_checked");
if (r || !i.length) return _r_();
B.et.track("cQZVDZOKZdKNWYKe") && i.prop("checked", !0).on("change", function() {
_i_("3da:1505"), n.addPermanentValue("genius_search_checkbox_checked", 1), _r_();
}), _r_();
}), B.when({
condition:$('li.uc-notification[data-type="genius_challenge_reminder"] a').length
}).run(function(e) {
_i_("3da:238");
var t = e("jquery");
t('li.uc-notification[data-type="genius_challenge_reminder"] a').click(function(e) {
_i_("3da:955"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("3da:239");
var r = "TNHQRXLDTJRPRSPaEHfXQWBBO", a = e.et, o = e.env, s = e.browserStorageHandler, _ = "www" === o.b_site_type, l = "t_touch_events_v4", d = l + "___touchSupport", c = l + "___preferTouch";
e.when({
condition:_ && s,
events:"ready"
}).run(function() {
_i_("3da:956");
var n = e.require("jquery"), _ = e.require("lightbox");
if (!o.b_bookings_owned) return _r_();
if (!s.isLocalStorageSupported()) return a.customGoal(r, 5), _r_();
if (s.deletePermanentValue("t_touch_events___touchSupport"), s.deletePermanentValue("t_touch_events___preferTouch"), s.deletePermanentValue("t_touch_events_v2___touchSupport"), s.deletePermanentValue("t_touch_events_v2___preferTouch"), s.deletePermanentValue("t_touch_events_v3___touchSupport"), s.deletePermanentValue("t_touch_events_v3___preferTouch"), !n("#footertopnav").length && !n("#footernav").length) return _r_();
if (!a.track(r)) return s.deletePermanentValue(d), s.deletePermanentValue(c), _r_();
function l() {
_i_("3da:1506"), n("#preferred_site_type_link").removeClass("g-hidden"), _r_();
}
function u() {
_i_("3da:1507"), n(i).on("click", ".touch-confirm__button--submit", function() {
_i_("3da:2275"), s.addPermanentValue(c, "1"), _r_();
}), n(i).on("click", ".touch-confirm__button--cancel", function() {
_i_("3da:2276"), _.hide(), _r_();
}), t.setTimeout(function() {
_i_("3da:2277"), _.show(n("#preferred_site_type_lightbox"), {
customWrapperClassName:"touch-confirm",
hideCallBack:function() {
_i_("3da:2680"), s.addPermanentValue(c, "0"), l(), a.customGoal(r, 3), _r_();
}
}), _r_();
}, 250), _r_();
}
function h() {
return _i_("3da:1508"), _r_(/^(index|hotel|searchresults|airport|city|country|district|landmark|region)$/.test(o.b_action));
}
function f() {
_i_("3da:1509"), a.stage(r, 1), 2 === a.track(r) && u(), _r_();
}
function p(e) {
_i_("3da:1510"), s.addPermanentValue(d, "1"), v(), e.closest('button[type="submit"], a[href]').length || f(), _r_();
}
function g(e) {
_i_("3da:1511");
var t = n(e.target);
if (!h()) return _r_();
"touchstart" === e.type ? p(t) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType) && p(t), _r_();
}
function m() {
_i_("3da:1512"), n(t).on("touchstart pointermove MSPointerMove", g), _r_();
}
function v() {
_i_("3da:1513"), n(t).off("touchstart pointermove MSPointerMove", g), _r_();
}
"1" === s.getPermanentValue(d) ? s.getPermanentValue(c) ? "0" === s.getPermanentValue(c) && l() :h() ? f() :(s.deletePermanentValue(d), m()) :m(), _r_();
}), _r_();
}(window.booking, window, document), function(e, t, i, n) {
"use strict";
_i_("3da:240"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3da:957");
var t = e.require("jquery");
if (e.env.b_bookings_owned && 2 === e.et.track("TNHQRXLDTJRPRSPaEHfXQWBBO")) {
var i = t(".touch-version-message");
i.on("click pointerdown MSPointerDown", function() {
_i_("3da:2278"), i.remove(), _r_();
});
}
_r_();
}), _r_();
}(window.booking, window, document), B.when({
action:"index",
events:"ready",
experiment:"ZLLfICXWAWTCUZZCCQBC"
}).run(function(e) {
_i_("3da:241");
var t = e("jquery");
t(".dsf_entry_city").on("click", function() {
_i_("3da:958"), B.et.customGoal("ZLLfICXWAWTCUZZCCQBC", 1), _r_();
}), _r_();
}), B.when({
events:"load",
condition:B.env.fe_scroll_jank
}).run(function() {
_i_("3da:242");
function e() {
_i_("3da:571");
for (var t = Date.now(); Date.now() - t < 30; ) ;
setTimeout(e, 100), _r_();
}
e(), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("3da:243"), e.when({
condition:"www" === e.env.b_site_type && e.env.b_bookings_owned,
events:"ready",
experiment:"PNQFZYLMEVRGHQLMVYPYKDcdC"
}).run(function() {
_i_("3da:959");
var n, r, a, o, s, _, l = e.require("jquery"), d = e.require("ga-tracker"), c = 10, u = 300, h = "Desktop Screen Touch";
function f() {
_i_("3da:1514"), d.trackEvent(h, "Tap", e.env.b_action), _r_();
}
function p() {
_i_("3da:1515"), d.trackEvent(h, "Double Tap", e.env.b_action), _r_();
}
function g(e) {
if (_i_("3da:1520"), !(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0])) return _r_();
n = e.originalEvent.touches[0].clientX, r = e.originalEvent.touches[0].clientY, s && (t.clearTimeout(s), Math.abs(a - n) > c || Math.abs(o - r) > c ? f() :(_ = !0, p())), _r_();
}
function m(e) {
if (_i_("3da:1522"), !(e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0])) return _r_();
if (_) return _ = !1, _r_();
if (!n || !r) return _r_();
a = e.originalEvent.changedTouches[0].clientX, o = e.originalEvent.changedTouches[0].clientY, Math.abs(a - n) > c || Math.abs(o - r) > c || (s = t.setTimeout(f, u)), _r_();
}
l(i).on("touchstart pointerdown MSPointerDown", function(e) {
_i_("3da:1939"), "touchstart" === e.type ? g(e) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType), _r_();
}), l(i).on("touchend pointerup MSPointerUp", function(e) {
_i_("3da:1940"), "touchend" === e.type ? m(e) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.when({
experiment:"BffIEcEUXPNMPOHET",
condition:B.env.auth_level > 0,
events:"load"
}).require([ "jquery", "header/notifications/notifications" ], function(e, t) {
_i_("3da:244");
function i(t) {
_i_("3da:572"), e(".uc-notifications-group__messenger").height(t), _r_();
}
function n(i) {
_i_("3da:573"), e(".uc-notifications-group__messenger").data("unread-count", i), t.refresh(), _r_();
}
window.addEventListener("message", function(e) {
if (_i_("3da:960"), !e) return _r_();
if (!e.data) return _r_();
if (e.data.indexOf("notifications-height:") > -1) {
var t = parseInt(e.data.replace("notifications-height:", ""), 10);
isNaN(t) || i(t);
} else if (e.data.indexOf("notifications-unread-count:") > -1) {
var r = parseInt(e.data.replace("notifications-unread-count:", ""), 10);
isNaN(r) || n(r);
}
_r_();
}), B.eventEmitter.bind("uc_popover_showed", function(t, i) {
if (_i_("3da:961"), !i || !i.id || "notifications" !== i.id) return _r_();
var n = e(".uc-notifications__messenger").get(0);
if (!n || !n.contentWindow) return _r_();
n.contentWindow.postMessage("you-are-visible", n.src), _r_();
}), _r_();
}), $(function() {
"use strict";
_i_("3da:245");
var e = B.debug("time_to_interact"), t = window.ttiStats;
if (!t) return _r_();
e.log("init");
function i(e) {
_i_("3da:574"), t[e] ? n(e) :$(document).one(e, function() {
_i_("3da:1941"), setTimeout(function() {
_i_("3da:2491"), n(e), _r_();
}, 100), _r_();
}), _r_();
}
function n(i) {
if (_i_("3da:575"), window.ga) {
var n = t[i];
e.log(i, n), ga("send", "timing", "Time To Interact", i, n, B.env.b_action);
}
_r_();
}
i("click"), i("scroll"), _r_();
}), B.when({
condition:B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
}).run(function() {
"use strict";
_i_("3da:246");
var e, t, i = B.debug("fps"), n = 200, r = 0;
try {
t = parseInt(localStorage.getItem("fps_avg")), localStorage.removeItem("fps_avg");
} catch (a) {}
i.log("fps_avg (storage)", t), t && B.et.goalWithValue("js_fps_avg", t), "searchresults" === B.env.b_action && B.et.track("cDPIOCNPCPeRe") && (setTimeout(function() {
_i_("3da:1523"), e && (i.log("js_fps_avg_1m", e), B.et.goalWithValue("js_fps_avg_1m", parseInt(e))), _r_();
}, 6e4), setTimeout(function() {
_i_("3da:1524"), e && (i.log("js_fps_avg_2m", e), B.et.goalWithValue("js_fps_avg_2m", parseInt(e))), _r_();
}, 12e4), setTimeout(function() {
_i_("3da:1525"), e && (i.log("js_fps_avg_3m", e), B.et.goalWithValue("js_fps_avg_3m", parseInt(e))), _r_();
}, 18e4), setTimeout(function() {
_i_("3da:1526"), e && (i.log("js_fps_avg_5m", e), B.et.goalWithValue("js_fps_avg_5m", parseInt(e))), _r_();
}, 3e5), window.navigator && navigator.sendBeacon && B.env.js_tracking_url && (B.et.customGoal("cDPIOCNPCPeRe", 1), window.addEventListener("unload", function() {
_i_("3da:1942"), e && (i.log("js_fps_avg_beacon", e), navigator.sendBeacon(B.env.js_tracking_url + "&gwv=js_fps_avg_beacon|" + parseInt(e) + "&_=" + Date.now())), _r_();
}, !1)));
function o(t) {
_i_("3da:576");
var n = Math.min(t, 60);
if (i.log(n), r) {
var a = r * e;
r += 1, e = (a + n) / r;
} else r = 1, e = n;
i.log("fps_avg", e);
try {
localStorage.setItem("fps_avg", e);
} catch (o) {}
_r_();
}
var s = !1;
function _() {
_i_("3da:577");
var e = performance.now(), t = 0;
s = !1;
var i = function() {
if (_i_("3da:1527"), t++, s) {
var n = performance.now(), r = Math.round(1e3 * t / (n - e));
o(r);
} else requestAnimationFrame(i);
_r_();
};
requestAnimationFrame(i), _r_();
}
var l;
function d() {
_i_("3da:578"), l = void 0, s = !0, _r_();
}
function c() {
_i_("3da:579"), void 0 === l ? _() :clearTimeout(l), l = setTimeout(d, n), _r_();
}
window.addEventListener("scroll", c, !0), B.eventEmitter.on("et-scroll-observer:scroll", c), _r_();
}), B.define("performance/metrics-storage", function(e, t, i) {
"use strict";
_i_("3da:247");
var n, r = e("jquery"), a = [ "index", "searchresults", "hotel", "book", "confirmation", "mydashboard", "myrewards", "myreservations", "reviewtimeline", "myreferrals", "myreports", "mysettings" ];
function o(e) {
_i_("3da:580"), this.namespace = e, _r_();
}
r.extend(o.prototype, {
saveToStorage:function(e, t) {
_i_("3da:1528");
var i;
try {
i = this._loadByKeyActionIndexed(e), i[this._compressActionName(B.env.b_action)] = t, window.localStorage.setItem(this._buildStorageKey(e), JSON.stringify(i));
} catch (n) {}
_r_();
},
loadFromStorage:function(e, t) {
_i_("3da:1529");
try {
return _r_(this._loadByKeyActionIndexed(e)[this._compressActionName(t)]);
} catch (i) {
return _r_(void 0);
}
_r_();
},
popFromStorage:function(e, t) {
_i_("3da:1530");
var i, n = void 0;
try {
i = this._loadByKeyActionIndexed(e), n = i[this._compressActionName(t)], delete i[this._compressActionName(t)], 0 == Object.keys(i).length ? window.localStorage.removeItem(this._buildStorageKey(e)) :window.localStorage.setItem(this._buildStorageKey(e), JSON.stringify(i));
} catch (r) {}
return _r_(n);
},
_loadByKeyActionIndexed:function(e) {
return _i_("3da:1531"), _r_(JSON.parse(window.localStorage.getItem(this._buildStorageKey(e)) || "{}"));
},
_compressActionName:function(e) {
return _i_("3da:1532"), _r_(a.indexOf(e));
},
_buildStorageKey:function(e) {
return _i_("3da:1533"), _r_([ this.namespace, e ].join("."));
}
}), i.exports = {
TARGET_ACTION_LIST:a,
getStorage:function() {
return _i_("3da:1534"), n || (n = new o("p_m")), _r_(n);
}
}, _r_();
}), B.define("performance/render-tree-metrics", function(e, t, i) {
"use strict";
_i_("3da:248");
var n, r = e("jquery"), a = e("performance/metrics-storage"), o = e("promise"), s = window.performance;
function _() {
_i_("3da:581"), this.rawRenderTreeSize = null, this.value = null, this.promise = null, _r_();
}
r.extend(_.prototype, {
calculate:function() {
if (_i_("3da:1535"), this.promise) return _r_(this.promise);
return _r_(this.promise = new o(function(e) {
_i_("3da:2549"), r(document).on("DOMContentLoaded", this._saveRawRenderTreeSize.bind(this)), r(window).on("load", function() {
_i_("3da:2724"), 0 === this.rawRenderTreeSize && this._saveRawRenderTreeSize(), e({
renderTreeConstructionTime:this._calculateDomProcessingTimeStampValue(),
renderTreeSize:this.rawRenderTreeSize
}), _r_();
}.bind(this)), _r_();
}.bind(this)));
},
_saveRawRenderTreeSize:function() {
_i_("3da:1536"), this.rawRenderTreeSize = r("*:visible").length, _r_();
},
_calculateDomProcessingTimeStampValue:function() {
_i_("3da:1537");
var e, t;
return e = s.timing.domContentLoadedEventStart, t = s.timing.domContentLoadedEventEnd, _r_(t - e);
}
});
function l() {}
l.prototype.getMetricName = function() {}, l.prototype.getMetricValue = function(e) {}, l.prototype.captureMetric = function() {}, l.prototype.cleanMetric = function(e) {};
function d(e, t) {
_i_("3da:583"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(d.prototype, {
VALUE_KEY:"rtts",
getMetricName:function() {
return _i_("3da:1538"), _r_("render_tree_time_single");
},
getMetricValue:function(e) {
_i_("3da:1539");
var t;
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
cleanMetric:function(e) {
_i_("3da:1540"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
captureMetric:function() {
_i_("3da:1541"), this.perfAware.calculate().then(function(e) {
_i_("3da:2492"), this.storage.saveToStorage(this.VALUE_KEY, parseInt(e.renderTreeConstructionTime)), _r_();
}.bind(this)), _r_();
}
});
function c(e, t) {
_i_("3da:584"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(c.prototype, {
SUFFICIANT_SESSION_COUNT:3,
VALUE_KEY:"rtta",
getMetricName:function() {
return _i_("3da:1542"), _r_("render_tree_time_avg");
},
getMetricValue:function(e) {
_i_("3da:1543");
var t, i;
if (t = this.storage.loadFromStorage(this.VALUE_KEY, e), !t) return _r_(void 0);
if (i = parseInt(t[0]) || 0, i < this.SUFFICIANT_SESSION_COUNT) return _r_(void 0);
return _r_(parseInt(t[1]));
},
cleanMetric:function(e) {
_i_("3da:1544"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
captureMetric:function() {
_i_("3da:1545"), this.perfAware.calculate().then(this._processSessionValue.bind(this)), _r_();
},
_processSessionValue:function(e) {
_i_("3da:1546");
var t, i, n;
if (!e || !e.renderTreeConstructionTime) return _r_();
n = this.storage.loadFromStorage(this.VALUE_KEY, B.env.b_action), t = parseFloat(n ? n[1] :0) || 0, i = parseInt(n ? n[0] :0) || 0, t = (t * i + e.renderTreeConstructionTime) / (i + 1), t = parseInt(1e3 * t) / 1e3, this.storage.saveToStorage(this.VALUE_KEY, [ i + 1, t ]), _r_();
}
});
function u(e, t) {
_i_("3da:585"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(u.prototype, {
VALUE_KEY:"rtnpms",
TREE_SIZE_CONFIDENT_INTERVAL:{
lowerBound:2700,
upperBound:3700
},
getMetricName:function() {
return _i_("3da:1547"), _r_("render_tree_ms_per_node");
},
captureMetric:function() {
_i_("3da:1548"), this.perfAware.calculate().then(this._processSessionValue.bind(this)), _r_();
},
getMetricValue:function(e) {
_i_("3da:1549");
var t;
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
cleanMetric:function(e) {
_i_("3da:1550"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
_processSessionValue:function(e) {
if (_i_("3da:1551"), !e.renderTreeConstructionTime || !e.renderTreeSize) return _r_();
if (!(this.TREE_SIZE_CONFIDENT_INTERVAL.lowerBound <= e.renderTreeSize && e.renderTreeSize <= this.TREE_SIZE_CONFIDENT_INTERVAL.upperBound)) return _r_();
this.storage.saveToStorage(this.VALUE_KEY, parseInt(e.renderTreeConstructionTime / e.renderTreeSize)), _r_();
}
});
function h(e) {
_i_("3da:586"), this.storage = e, this.isSupportedValue = void 0, this.iteration = 0, this.time = 0, this.testValue = 0, this.markNameStart = "mark_start_" + this.getMetricName(), this.markNameEnd = "mark_end_" + this.getMetricName(), this.measureName = "measure_" + this.getMetricName(), _r_();
}
r.extend(h.prototype, {
ITERATION_NUMBER:5e4,
MEASUREMENT_LATENCY:.2,
VALUE_KEY:"btmr",
getMetricName:function() {
return _i_("3da:1552"), _r_("benchmark_test_math_random");
},
getMetricValue:function(e) {
_i_("3da:1553");
var t;
if (!this._isSupported()) return _r_(void 0);
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
captureMetric:function() {
if (_i_("3da:1554"), !this._isSupported()) return _r_();
this._requestNextTestIteration(), _r_();
},
cleanMetric:function(e) {
if (_i_("3da:1555"), !this._isSupported()) return _r_();
this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
_requestNextTestIteration:function() {
_i_("3da:1556"), requestIdleCallback(function(e) {
for (_i_("3da:2493"), s.clearMarks(this.markNameStart), s.clearMarks(this.markNameEnd), 0 == this.testValue && (this.testValue = 1), s.mark(this.markNameStart); e.timeRemaining() >= this.MEASUREMENT_LATENCY && this.iteration <= this.ITERATION_NUMBER && this.testValue; this.iteration++) this.testValue = (this.testValue + 1001) % 1000000007;
if (s.mark(this.markNameEnd), s.measure(this.measureName, this.markNameStart, this.markNameEnd), this.iteration > this.ITERATION_NUMBER) return requestIdleCallback(this._calculateMeasurement.bind(this)), _r_();
this._requestNextTestIteration(), _r_();
}.bind(this)), _r_();
},
_calculateMeasurement:function() {
if (_i_("3da:1557"), this.time = s.getEntriesByName(this.measureName).reduce(function(e, t) {
return _i_("3da:2398"), e += t.duration, _r_(e);
}, 0), 0 == this.time) return _r_();
s.clearMarks(this.markNameStart), s.clearMarks(this.markNameEnd), s.clearMeasures(this.measureName), this.storage.saveToStorage(this.VALUE_KEY, parseInt(this.time)), _r_();
},
_isSupported:function() {
return _i_("3da:1558"), void 0 === this.isSupportedValue && (this.isSupportedValue = "function" == typeof window.requestIdleCallback && "function" == typeof s.mark && "function" == typeof s.clearMarks && "function" == typeof s.measure && "function" == typeof s.clearMeasures), _r_(this.isSupportedValue);
}
}), i.exports = {
TASK_NAME:{
SINGLE_SESSION:"single_session",
AVERAGE_SESSION:"avg_session",
NODE_PER_MS_SESSION:"node_per_ms_session",
BENCHMARK_TEST_MATH_RANDOM:"benchmark_test_math_random"
},
getRenderTreePerfAware:function() {
return _i_("3da:1559"), n || (n = new _()), _r_(n);
},
createByName:function(e) {
if (_i_("3da:1560"), e == this.TASK_NAME.SINGLE_SESSION) return _r_(new d(a.getStorage(), this.getRenderTreePerfAware()));
if (e == this.TASK_NAME.AVERAGE_SESSION) return _r_(new c(a.getStorage(), this.getRenderTreePerfAware()));
if (e == this.TASK_NAME.NODE_PER_MS_SESSION) return _r_(new u(a.getStorage(), this.getRenderTreePerfAware()));
if (e == this.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM) return _r_(new h(a.getStorage()));
_r_();
}
}, _r_();
}), B.when({
condition:B.env.fe_enable_performance_goal_with_value && window.performance && window.performance.timing && window.localStorage
}).run(function(e) {
_i_("3da:249");
var t = e("performance/render-tree-metrics"), i = e("performance/metrics-storage"), n = e("ga-tracker");
if (-1 == i.TARGET_ACTION_LIST.indexOf(B.env.b_action)) return _r_();
function r(e) {
_i_("3da:587"), this.taskList = e, this.init(), _r_();
}
return r.prototype = {
NUMBER_OF_SESSION_FOR_AVG:5,
init:function() {
_i_("3da:1561"), i.TARGET_ACTION_LIST.forEach(function(e) {
_i_("3da:2279"), this.taskList.forEach(function(t) {
_i_("3da:2622");
var i;
if (void 0 === (i = t.getMetricValue(e))) return _r_();
this._daddyIsWatching() && console.log("send", t.getMetricName(), i, e), this._sendMetricToGA(t.getMetricName(), i, e), t.cleanMetric(e), _r_();
}, this), _r_();
}, this), this.taskList.forEach(function(e) {
_i_("3da:2280"), e.captureMetric(), _r_();
}, this), _r_();
},
_sendMetricToGA:function(e, t, i) {
_i_("3da:1562"), n.trackTiming(n.TIMING.PERFORMANCE, "js_" + e, t, i), _r_();
},
_daddyIsWatching:function() {
_i_("3da:1563");
try {
return _r_(!!window.localStorage.getItem("perf_matters"));
} catch (e) {}
_r_();
}
}, _r_(new r([ t.createByName(t.TASK_NAME.SINGLE_SESSION), t.createByName(t.TASK_NAME.AVERAGE_SESSION), t.createByName(t.TASK_NAME.NODE_PER_MS_SESSION), t.createByName(t.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM) ]));
}), B.eventEmitter.on("user_access_menu_login_tab user_access_menu_register_tab", function(e) {
_i_("3da:250");
var t = "user_access_menu_register_tab" === e.type ? "up" :"in", i = $("a.social-connect-button--facebook"), n = $("a.social-connect-button--google");
if (!i.length && !n.length) return _r_();
i.text(B.jstmpl.translations("loc_social_connect_facebook_sign_" + t)), n.text(B.jstmpl.translations("loc_social_connect_google_sign_" + t)), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("3da:251");
var r = "PYWIGJDFHQWXXdVLYGGIPKEePSbMC";
e.when({
condition:"tdot" === e.env.b_site_type && !e.env.b_is_ipad,
events:"ready"
}).run(function() {
_i_("3da:966");
var t = e.require("jquery");
e.et.track(r) ? t("#b_nav_language, #b_nav_currency").on("click", function() {
_i_("3da:2281"), e.et.stage(r, 1), _r_();
}) :t("#header_currency, #header_language").on("click", function() {
_i_("3da:2282"), e.et.stage(r, 1), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.define("component/core/number-input-spinner", [ "component" ], function(e) {
return _i_("3da:252"), _r_(e.extend({
init:function() {
_i_("3da:1564");
var e = this.$el.find("[data-input]"), t = this.$el.attr("data-max-value"), i = this.$el.attr("data-min-value"), n = this.$el.find("[data-increment]"), r = this.$el.find("[data-decrement]");
n.bind("click", function(i) {
_i_("3da:2283");
var n = parseInt(e.val(), 10);
if (n >= t) return _r_();
n += 1, e.val(n), e.trigger("change"), _r_();
}), r.bind("click", function(t) {
_i_("3da:2284");
var n = parseInt(e.val(), 10);
if (i >= n) return _r_();
n -= 1, e.val(n), e.trigger("change"), _r_();
}), _r_();
}
}));
}), B.define("component/villas-redirect-msg", function(e, t, i) {
_i_("3da:253");
var n = e("component"), r = B.env.b_is_tdot_traffic ? B[sNSStartup].lightbox :e("lightbox"), a = e("jquery");
i.exports = n.extend({
init:function() {
_i_("3da:1749"), a.cookie("villas_redirect_msg_seen") || (r.show(a(".villas-redirect-msg"), {
opacity:.7,
autoWidth:!0
}), a.cookie("villas_redirect_msg_seen", 1, {
path:"/"
})), _r_();
}
}), _r_();
}), B.require([ "jquery", "et" ], function(e, t) {
_i_("3da:254");
var i = "eIBbFYHIIHTPZeVXGRcNcC";
e(".feedback_link_look").click(function() {
_i_("3da:967"), t.stage(i, 1), _r_();
}), e(".menu_help").click(function() {
_i_("3da:968"), t.stage(i, 2), _r_();
}), _r_();
}), B.define("detect-device", function() {
"use strict";
_i_("3da:255");
var e = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent :null;
if (!e) return _r_("Unknown");
return e = e.indexOf("Xbox") > -1 && e.indexOf("Xbox One") > -1 ? "Xbox One" :e.indexOf("Xbox") > -1 ? "Xbox 360" :e.indexOf("Playstation 4") > -1 ? "PlayStation 4" :e.indexOf("Playstation 3") > -1 ? "PlayStation 3" :e.indexOf("Nintendo WiiU") > -1 || e.indexOf("NintendoBrowser") > -1 ? "Nintendo" :e.indexOf("SMART-TV") > -1 || e.indexOf("SmartTV") > -1 || e.indexOf("Opera TV Store") > -1 || e.indexOf("PhilipsTV") > -1 ? "Smart TV" :e.indexOf("GoogleTV") > -1 ? "Google TV" :e.indexOf("AppleTV") > -1 ? "Apple TV" :e.indexOf("Android") > -1 && e.indexOf("SM-G900P") > -1 ? "Galaxy S5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 5") > -1 ? "Nexus 5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 6") > -1 ? "Nexus 6" :e.indexOf("Android") > -1 && e.indexOf("Nexus 7") > -1 ? "Nexus 7" :e.indexOf("Android") > -1 && e.indexOf("Nexus 10") > -1 ? "Nexus 10" :e.indexOf("Android") > -1 ? "Android" :e.indexOf("BlackBerry") > -1 ? "BlackBerry" :e.indexOf("KFAPWI") > -1 ? "Kindle Fire" :e.indexOf("NOKIA") > -1 || e.indexOf("NokiaBrowser") > -1 ? "Nokia" :e.indexOf("Windows Phone") > -1 ? "Windows Phone" :e.indexOf("MSIE") > -1 ? "Internet Explorer" :e.indexOf("Opera Mini") > -1 ? "Opera Mini" :e.indexOf("iPhone") > -1 ? "iPhone" :e.indexOf("iPod") > -1 ? "iPod" :e.indexOf("iPad") > -1 ? "iPad" :"Unknown", _r_(e);
}), B.define("screen-info", function() {
"use strict";
_i_("3da:256");
var e = window && window.screen ? window.screen :null;
if (!e) return _r_(null);
var t = {
height:e.height,
width:e.width
};
return t.orientation = t.height < t.width ? "landscape" :"portrait", window.devicePixelRatio && (t.pixelDensity = window.devicePixelRatio, t.retinaDisplay = t.pixelDensity > 1 ? !0 :!1), window.navigator && window.navigator.maxTouchPoints && (t.max_touch_points = window.navigator.maxTouchPoints), _r_(t);
}), B.require([ "jquery", "dismiss-item" ], function(e, t) {
_i_("3da:257"), B.when({
events:"ready"
}).run(function() {
_i_("3da:969");
var i = e(".free_attractions_ribbon");
if (!i.length) return _r_();
i.find(".free_attractions_ribbon--button").on("click", function() {
_i_("3da:1943"), i.remove(), t("puf_city_free_attractions"), _r_();
}), _r_();
}), _r_();
}), B.when({
events:[ "view .sb-dates__calendar-button", "view .mb-change-dates__fieldset", "view .fieldline", "view .unified-postcard__overlay", "view .sort_category.with_dd", "view .concvisitors", "view .lp_promotion_cards_list_child_viewsadvice", "view .mb-slidebox__rate-guarantee" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:1
}).run(function() {}), B.when({
events:[ "view .sb-dates__calendar-button", "view .mb-change-dates__fieldset", "view .fieldline" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:2
}).run(function() {}), B.when({
events:[ "view .unified-postcard__overlay" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:3
}).run(function() {}), B.when({
events:[ "view .sort_category.with_dd" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:4
}).run(function() {}), B.when({
events:[ "view .concvisitors", "view .lp_promotion_cards_list_child_viewsadvice" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:5
}).run(function() {}), B.when({
events:[ "view .mb-slidebox__rate-guarantee" ],
experiment:"YQecaRbAMFFCTDTOJTJcaT",
stage:6
}).run(function() {}), B.when({
events:[ "view .dates_rec_sr", "view .remove_hotel", "view .lp-upcoming-date-suggestions", "view .feedback_link_look", "view .hotel_quick_links_item__legacy" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:1
}).run(function() {}), B.when({
events:[ "view .dates_rec_sr" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:2
}).run(function() {}), B.when({
events:[ "view .remove_hotel" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:3
}).run(function() {}), B.when({
events:[ "view .lp-upcoming-date-suggestions" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:4
}).run(function() {}), B.when({
events:[ "view .feedback_link_look" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:5
}).run(function() {}), B.when({
events:[ "view .hotel_quick_links_item__legacy" ],
experiment:"YQecaRbAMFFCTDTOJTJNET",
stage:6
}).run(function() {}), B.when({
events:[ "view .js-uc-notifications-bell", "view .sb-searchbox__title", "view .sb-date-field__field", "view .subsc_title", "view .share_links", "view .littlescore", "view #moreHistoryLinkWrapper", "view .cheapest_roomtype" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:1
}).run(function() {}), B.when({
events:[ "view .js-uc-notifications-bell" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:2
}).run(function() {}), B.when({
events:[ "view .sb-searchbox__title" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:3
}).run(function() {}), B.when({
events:[ "view .sb-date-field__field" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:4
}).run(function() {}), B.when({
events:[ "view .subsc_title" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:5
}).run(function() {}), B.when({
events:[ "view .share_links" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:6
}).run(function() {}), B.when({
events:[ "view .littlescore", "view #moreHistoryLinkWrapper", "view .cheapest_roomtype" ],
experiment:"YQecaRbAMFFCTDTOJTJaYO",
stage:7
}).run(function() {}), B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number || B.env.fe_enable_signup_with_phone_number
}).run(function() {
_i_("3da:277");
var e, t, i = B.env.b_secure_domain || B.env.b_secure_hostname, n = !1;
booking.phoneNumberLogin = booking.phoneNumberLogin || {}, booking.phoneNumberLogin.checkSmsVerificationCode = function(e) {
if (_i_("3da:970"), e && e.onBeforeSend && e.onBeforeSend(), n && B.et.track("MKMBYdNHWCaNUFceHBVPBJfBWZJbHT")) return _r_(!1);
n = !0, $.ajax({
method:"POST",
url:i + "/confirm_phone_number",
data:{
phone:e.phoneNumber,
country_code:"cn",
confirmation_code:e.verificationCode,
origin:B.env.b_action
},
success:function(t) {
_i_("3da:2285"), n = !1, t && t.error && e.error && e.error(t.error), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3da:2286"), n = !1, t && e.error(t.error), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.sendVerificationSms = function(e) {
_i_("3da:971"), e && e.onBeforeSend && e.onBeforeSend(), $.ajax({
method:"POST",
url:i + "/send_verification_sms",
data:{
phone:e.phoneNumber,
country_code:"cn",
origin:B.env.b_action
},
success:function(t) {
_i_("3da:2287"), t && t.error && e.error && e.error(t.error), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3da:2288"), t && e.error(t.error), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.getPassword = function() {
return _i_("3da:972"), _r_(e);
}, booking.phoneNumberLogin.setPassword = function(t) {
_i_("3da:973"), e = t, _r_();
}, booking.phoneNumberLogin.getPhone = function() {
return _i_("3da:974"), _r_(t);
}, booking.phoneNumberLogin.setPhone = function(e) {
_i_("3da:975"), t = e, _r_();
}, _r_();
}), B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number
}).run(function(e) {
_i_("3da:278");
var t, i, n = e("jquery"), r = n(".js-send_verification_code"), a = n(".js-wait_resend_verification_code"), o = n(".js-resend_cta_countdown_number"), s = n(".js-phone_error_message"), _ = n(".user_access_menu");
function l() {
_i_("3da:588"), clearInterval(i), r.html(r.attr("data-resend-copy")), r.removeClass("g-hidden"), a.addClass("g-hidden"), _r_();
}
function d(e) {
_i_("3da:589"), B.env.fe_run_enable_book_with_phone && B.env.b_stage && 2 === B.env.b_stage && B.et.customGoal("MKMBYcWNOHfKXNDBae", 3), l(), -1 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-2 === e ? n(".js-phone_already_confirmed").removeClass("g-hidden") :-3 === e ? n(".js-phone_code_missing").removeClass("g-hidden") :-4 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-5 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-6 === e && n(".js-phone_code_wrong").removeClass("g-hidden"), _r_();
}
function c() {
_i_("3da:590"), t = 60, o.html(t), i = setInterval(function() {
_i_("3da:1750"), t--, 0 === t ? l() :o.html(t), _r_();
}, 1e3), _r_();
}
function u() {
_i_("3da:591"), booking.phoneNumberLogin.sendVerificationSms({
onBeforeSend:function() {
_i_("3da:1944"), s.addClass("g-hidden"), r.addClass("g-hidden"), a.removeClass("g-hidden"), c(), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone() || n("#phone").val(),
error:d,
success:function(e) {
_i_("3da:1945"), n(".js-verify_phone_number_success_send").removeClass("g-hidden"), _r_();
}
}), _r_();
}
r.on("click", function(e) {
_i_("3da:976"), e.preventDefault(), n(this).attr("data-add-phone-to-account") ? n.ajax({
url:B.env.b_secure_domain + "/user_settings?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify({
phone:n("#phone").val()
}),
success:function(e) {
_i_("3da:2494"), "ok" === e.status ? u() :console.log(e), _r_();
},
error:function(e) {
_i_("3da:2495"), console.log(e), _r_();
}
}) :u(), _r_();
}), n(".js-verify_phone_confirmation_code").length && B.et.track("MKMBYdNHWOJPaaRLXVWTHNCdDOHQC") && n(".js-verify_phone_confirmation_code").on("keyup", function(e) {
_i_("3da:1565"), n(this).val().length > 5 && (booking.phoneNumberLogin.getPhone() || n("#phone").length && n("#phone").val().length) ? n(".js-send_verification_code_submit").removeClass("b-button_disabled").removeAttr("disabled") :n(".js-send_verification_code_submit").addClass("b-button_disabled").attr("disabled", "disabled"), _r_();
}), n(".js-verify_phone_form").on("submit", function(e) {
_i_("3da:977"), e.preventDefault(), booking.phoneNumberLogin.checkSmsVerificationCode({
onBeforeSend:function() {
_i_("3da:2289"), s.addClass("g-hidden"), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone(),
verificationCode:n(".js-verify_phone_confirmation_code").val(),
error:d,
success:function() {
_i_("3da:2290"), n(".js-user-access-form--signin input[name=username]").val(booking.phoneNumberLogin.getPhone()), n(".js-user-access-form--signin input[name=password]").val(booking.phoneNumberLogin.getPassword()), n(".js-user-access-form--signin").submit(), _r_();
}
}), _r_();
}), n(".js-phone_number_login_close").on("click", function(e) {
_i_("3da:978"), n(".form-section", _).addClass("form-hidden-section").removeClass("form-shown-section"), n(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}), n(".js-reset_password_by_phone_form").on("submit", function(e) {
_i_("3da:979"), e.preventDefault(), window.location = "" + B.env.b_secure_domain + "/login" + B.env.b_query_params_with_lang + "&username=" + booking.phoneNumberLogin.getPhone() + "&reset_hash=" + n(".js-reset_by_phone_hash").val() + "&op=changepw&fbaddpw=0&go_back_url=https%3A%2F%2Fsecure.booking.com%2Fmydashboard." + B.env.b_selected_language + ".html", _r_();
}), booking.phoneNumberLogin && (booking.phoneNumberLogin.desktop = {}, booking.phoneNumberLogin.desktop.showLightbox = function(e) {
_i_("3da:1566"), n(".js-verify_phone_number").text(booking.phoneNumberLogin.getPhone()), n(".form-section", _).addClass("form-hidden-section").removeClass("form-shown-section"), "verify" === e ? n(".user_access_verify_phone_menu", _).removeClass("form-hidden-section").addClass("form-shown-section") :"reminder-sent-mobile" === e && n(".reset_password_by_phone_sent", _).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}), _r_();
}), B.define("component/deals/deals_of_today", [ "component", "require", "jquery" ], function(e, t, i) {
_i_("3da:279");
function n() {
_i_("3da:592"), console.log("deals_of_today"), _r_();
}
return _r_(e.extend({
init:n
}));
}), B.define("async-css-style", function(e, t, i) {
"use strict";
_i_("3da:280");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3da:593"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
return _r_(o(e.href));
}
function o(e) {
return _i_("3da:594"), _r_(new n(function(t, i) {
_i_("3da:1567"), s(e, function(e) {
_i_("3da:2291");
var n, r = _();
switch (e.status) {
case 200:
n = document.createElement("style"), n.innerHTML = e.responseText, r.parentNode.insertBefore(n, r.nextSibling), t();
break;

default:
i();
}
_r_();
}), _r_();
}));
}
function s(e, t) {
_i_("3da:595");
var i = new XMLHttpRequest();
i.open("GET", e), i.onreadystatechange = function() {
_i_("3da:1568"), i.readyState === XMLHttpRequest.DONE && t(i), _r_();
}, i.send(), _r_();
}
function _(e) {
_i_("3da:596");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return _r_(n);
}
t.load = a, _r_();
}), B.define("async-css-link", function(e, t, i) {
"use strict";
_i_("3da:281");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3da:597"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
var i = s(e.after), n = d(e.href);
return c(function() {
_i_("3da:1569"), i.parentNode.insertBefore(n, i.nextSibling), _r_();
}), _r_(o(n, e));
}
function o(e, t) {
return _i_("3da:598"), _r_(new n(function(i, n) {
_i_("3da:1570"), _(e, t, function() {
_i_("3da:2292"), i(), _r_();
}, function() {
_i_("3da:2293"), n(), _r_();
}), _r_();
}));
}
function s(e) {
_i_("3da:599");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return "main" === e && "undefined" != typeof t && (n = l(n, t)), _r_(n);
}
function _(e, t, i, n) {
_i_("3da:600"), e.addEventListener && (e.addEventListener("load", i), e.addEventListener("error", n)), e.attachEvent && (e.attachEvent("onload", i), e.attachEvent("onerror", n)), _r_();
}
function l(e, t) {
_i_("3da:601");
for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++) if ("1" === i[n].getAttribute("data-main-css")) return _r_(i[n]);
return _r_(e);
}
function d(e) {
_i_("3da:602");
var t = r.createElement("link");
return t.rel = "stylesheet", t.href = e, _r_(t);
}
function c(e) {
if (_i_("3da:603"), r.body) return _r_(e());
window.setTimeout(function() {
_i_("3da:1571"), c(e), _r_();
}, 100), _r_();
}
t.load = a, _r_();
}), B.define("async-css", function(e, t, i) {
"use strict";
_i_("3da:282"), "isApplicationInstalled" in navigator ? t.load = e("async-css-style").load :t.load = e("async-css-link").load, _r_();
}), B.define("loadscript", function(e, t, i) {
_i_("3da:283");
var n = e("promise");
function r(e) {
return _i_("3da:604"), _r_(new n(function(t, i) {
_i_("3da:1572");
var n = document.createElement("script");
n.onload = n.onreadystatechange = function(e, i) {
_i_("3da:2399"), (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, i || t()), _r_();
}, n.onerror = i, n.type = "text/javascript", n.src = e;
var r = document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(n, r), _r_();
}));
}
function a(e, t) {
_i_("3da:605");
var i = a._urls[e] || e;
if (!i) throw new Error("Must provide a URL.");
if (i === e && -1 === i.indexOf("/")) throw new Error('"' + i + "\" doesn't seem like a script URL.");
return _r_(r(i, t));
}
a._urls = {}, a.add = function(e, t) {
_i_("3da:980");
var i = a._urls;
$.isPlainObject(e) ? $.extend(i, e) :i[name] = t, _r_();
}, i.exports = a, _r_();
}), B.define("async-loader", function(e, t, i) {
"use strict";
_i_("3da:284");
var n = e("loadscript"), r = e("async-css"), a = e("promise"), o = {}, s = B.env || {};
function _(e) {
if (_i_("3da:606"), "object" != typeof e) throw new Error("async-loader: load() expects an object!");
var t = Object.keys(e).map(function(t) {
_i_("3da:1751");
var i = e[t], n = i;
if ("string" == typeof n && n.length > 0 && (i = {
path:n
}), "object" != typeof i || !i.hasOwnProperty("path")) throw new Error("async-loader: .load() invalid argument!");
return _r_(d(t, i));
});
return _r_(a.all(t));
}
function l(e) {
_i_("3da:607");
var t;
if (!s.hasOwnProperty("asyncLoader") || !s.asyncLoader.hasOwnProperty(e)) throw new Error("async-loader: could not find file path in B.env.asyncLoader");
if (t = s.asyncLoader[e], "string" != typeof t || 0 === t.length) throw new Error("async-loader: invalid path for " + e);
return _r_(t);
}
function d(e, t) {
_i_("3da:608");
var i = t.path = l(t.path);
return o[i] || (o[i] = c(e, t)), _r_(o[i]);
}
function c(e, t) {
_i_("3da:609");
var i;
switch (e) {
case "css":
return i = r.load(t), i["catch"](function() {
_i_("3da:1946"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"), _r_();
}), _r_(i);

case "js":
return i = n(t.path), i["catch"](function() {
_i_("3da:1947"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"), _r_();
}), _r_(i);

default:
throw new Error("async-loader: file type [" + e + "] not supported!");
}
_r_();
}
function u(e) {
if (_i_("3da:610"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .css() invalid argument!");
return _r_(d("css", e));
}
function h(e) {
if (_i_("3da:611"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .js() invalid argument!");
return _r_(d("js", e));
}
function f(e) {
if (_i_("3da:612"), "string" != typeof e || 0 === e.length) throw new Error("async-loader: registerPath() invalid argument");
if (!s.hasOwnProperty("asyncLoader")) throw new Error("async-loader: B.env.asyncLoader is not defined");
return s.asyncLoader.hasOwnProperty(e) || (s.asyncLoader[e] = e), _r_(e);
}
t.load = _, t.css = u, t.js = h, t.registerPath = f, _r_();
}), B.define("defaultsjs:modules/lib/assistant/overview/overview.js", function(e, t, i) {
_i_("3da:285");
var n, r, a, o = e("jquery"), s = e("promise"), _ = B.env.b_messaging_assistant_overview_url || "/get_ba_overview", l = B.env.b_messaging_url || "/messages2.html", d = 6e4, c = [];
function u(e) {
return _i_("3da:613"), a = Object.assign({}, e, {
b_messaging_url:l,
reservations:e.reservations.map(function(e) {
return _i_("3da:2294"), _r_(Object.assign({}, e, {
fe_messaging_url:l + ";bn=" + e.reservation_id
}));
})
}), _r_(a);
}
function h(e) {
return _i_("3da:614"), n = null, _r_(e);
}
function f(e) {
return _i_("3da:615"), c.length && (r = window.setTimeout(g, d)), _r_(e);
}
function p(e) {
return _i_("3da:616"), c.forEach(function(t) {
_i_("3da:1573"), t(e), _r_();
}), _r_(e);
}
function g() {
return _i_("3da:617"), n ? _r_(n) :(n = s.resolve(o.getJSON(_)).then(u).then(h).then(f).then(p)["catch"](function(e) {
return _i_("3da:2066"), _r_(s.reject("failed to fetch overview"));
}), _r_(n));
}
function m(e) {
_i_("3da:618");
var t = c.length;
return c.push(e), 1 === c.length && 0 === t && g(), a && e(a), _r_(function() {
_i_("3da:1074");
for (var t = 0; t < c.length; t++) c[t] === e && (c.splice(t, 1), c.length || window.clearTimeout(r));
_r_();
});
}
i.exports = {
subscribe:m,
fetchOnce:g
}, _r_();
}), B.define("assistant/tracker", function(e, t, i) {
_i_("3da:286");
var n = e("ga-tracker"), r = {
"bk_exit menu":"BK Exit Menu",
bk_wall:"BK Wall",
entry_point:"Entry Point",
welcome_screen:"Welcome screen"
};
i.exports.actions = r, i.exports.trackAssistantEvent = n.trackEvent.bind(null, n.assistantTracker), i.exports.trackAssistantEntryPoint = n.trackEvent.bind(null, n.assistantTracker, r.entry_point), i.exports.trackAssistantWelcomeScreen = n.trackEvent.bind(null, n.assistantTracker, r.welcome_screen), _r_();
}), B.define("component/assistant/entrypoint", function(e, t, i) {
_i_("3da:287");
var n, r = e("component"), a = e("jquery"), o = e("defaultsjs:modules/lib/assistant/overview/overview.js").subscribe, s = e("async-loader"), _ = "assistant-entry-point_has-unread", l = ".assistant-entry-point__text";
function d(t) {
_i_("3da:619");
var i = e("lightbox"), r = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
n = a(B.jstmpl("assistant_modal").render(t)), i.show(n, r), _r_();
}
function c(e) {
if (_i_("3da:620"), !e) return _r_(null);
if ("string" != typeof e) return _r_(null);
var t = /[;&]bn=(\d*)/, i = e.match(t);
return _r_(i && i[1] ? i[1] :null);
}
function u(e) {
_i_("3da:621");
var t = e.attr("data-messaging-url") || e.attr("href");
return _r_({
url:t,
privacyPolicyUrl:e.attr("data-privacy-policy-url"),
messengerUrl:e.attr("data-messenger-link"),
text:e.find(l).text(),
modal:Boolean(e.attr("data-messages-is-modal")),
reservations:[],
selectedReservationId:c(t),
consistentText:Boolean(e.attr("data-consistent-text"))
});
}
function h(e) {
_i_("3da:622");
var t = e.reservations, i = e.selectedReservationId;
if (!i) return _r_(t.reduce(function(e, t) {
return _i_("3da:1948"), Boolean(t.has_unread) && (e += 1), _r_(e);
}, 0));
for (var n = 0; n < t.length; n++) if (String(t[n].reservation_id) === i) return _r_(Boolean(t[n].has_unread));
return _r_(!1);
}
function f(e) {
if (_i_("3da:623"), e.consistentText) return _r_(e.text);
var t = e.reservations, i = e.selectedReservationId, n = !1;
if (i) for (var r = 0; r < t.length; r++) String(t[r].reservation_id) === i && (n = Boolean(t[r].has_unread));
return _r_(n ? B.jstmpl.translations("msg_entry_notification_unread_message") :B.jstmpl.translations("msg_www_ask_a_question"));
}
function p(e) {
_i_("3da:624");
var t = {
url:e.url,
text:f(e),
unread:h(e)
};
return _r_(t);
}
function g(e) {
_i_("3da:625");
var t = {
b_messaging_url:e.url,
privacy_policy_url:this.privacyPolicyUrl,
messenger_link:this.messengerUrl
};
return _r_(t);
}
function m(e, t) {
_i_("3da:626"), e.find(l).text(t.text), e.toggleClass(_, t.unread), e.attr("href", t.url), _r_();
}
i.exports = r.extend({
init:function() {
_i_("3da:1752"), s.css("async_assistant_entrypoint_css");
var e = u(this.$el);
this._defaultText = e.text, o(function(t) {
_i_("3da:2550"), e = Object.assign({}, e, {
reservations:t.reservations
}), m(this.$el, p(e)), _r_();
}.bind(this)), m(this.$el, p(e)), this.$el.on("click", function(t) {
_i_("3da:2400"), e.modal && (t.preventDefault(), d(g(e))), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/assistant/modal-entrypoint", function(e, t, i) {
_i_("3da:288");
var n = e("component/assistant/entrypoint"), r = e("lightbox"), a = e("jquery"), o = e("assistant/tracker").trackAssistantWelcomeScreen, s = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
i.exports = n.extend({
renderViews:function() {
_i_("3da:1753"), this.$modal || (this.$modal = a(B.jstmpl("assistant_modal").render({
b_messaging_url:this._url,
privacy_policy_url:this._privacyPolicyUrl,
messenger_link:this._messenger_link
}))), _r_();
},
showModal:function(e) {
_i_("3da:1754"), this.renderViews(), this.$modal.find(".assistant-view").hide(), this.$modal.find(".assistant-view_" + e + "-screen").show(), r.show(this.$modal, s), _r_();
},
showWelcomeScreen:function(e) {
_i_("3da:1755"), o("Shown"), this.showModal("welcome"), B.et.stage("bKeHAcCOWcFAcQNSEbHeFUSeGDPHe", 1), _r_();
},
showLoadingScreen:function() {
_i_("3da:1756"), this.showModal("loading"), _r_();
},
navigateToMessenger:function() {
_i_("3da:1757"), o("Assistant Chosen"), this.showModal("app"), _r_();
}
}), _r_();
}), booking.jstmpl("assistant_modal", function() {
_i_("3da:321");
var e = [ '\n  <div class="assistant-modal-view">\n    <div class="assistant-view assistant-view_app-screen">\n      <iframe\n        width="100%"\n        height="100%"\n        src="', '"\n        class="app-screen_iframe" frameborder="0"\n        id="assistant-iframe"></iframe>\n    </div>\n  </div>\n' ], t = [ "b_messaging_url" ];
return _r_(function(i) {
_i_("3da:981");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1] ].join(""), _r_(n);
});
}()), B.define("tooltip", function(e, t, i) {
"use strict";
_i_("3da:289");
var n, r = e("event-emitter"), a = e("jquery"), o = e("jstmpl"), s = 0, _ = {}, l = {
position:"top",
arrow:!0,
animation:!0,
customClass:"",
trigger:"hover focus",
hiddenClass:"tltp--hidden",
animationClass:"tltp--animate",
wrapperTemplate:'<div class="tltp tltp--hidden"></div>',
innerTemplate:'<div class="tltp__content"><div class="tltp__image" role="image"></div><div class="tltp__header" role="header"></div><div class="tltp__body" role="body"></div></div>',
latency:0,
rtl:B.env.rtl,
triggerDelays:{
mouseenter:200,
mouseleave:200
},
smartPositioning:!0,
preventDefaultOnClick:!1
}, d = {
booking:l
}, c = d.booking, u = a("body"), h = a(window), f = {
mouseenter:"mouseleave",
focus:"blur",
click:"click"
}, p = /^start|end$/i, g = /^top|bottom$/i, m = /^start|top$/i, v = /^end|bottom$/i, b = [ "top", "bottom", "start", "end", "middle" ], w = [ [ 0, 1, 2, 3 ], [ 1, 0, 2, 3 ], [ 2, 3, 0, 1 ], [ 3, 2, 0, 1 ] ], y = [ [ 2, 4, 3 ], [ 2, 4, 3 ], [ 0, 4, 1 ], [ 0, 4, 1 ] ], k = [ [ 0, 1, 2 ], [ 2, 1, 0 ], [ 0, 1, 2 ], [ 2, 1, 0 ], [ 1, 0, 2 ] ], S = function(e) {
_i_("3da:982");
var t;
try {
return t = new A(e), _r_(t.api);
} catch (i) {
B.debug("tooltip").error(i);
}
_r_();
}, C = function() {
return _i_("3da:983"), a.each(_, function(e, t) {
_i_("3da:1949"), t.hide(), _r_();
}), _r_(this);
}, x = function(e) {
return _i_("3da:984"), _r_(_[e]);
}, E = function(e) {
return _i_("3da:985"), a.each(_, e), _r_(this);
}, T = function(e, t) {
return _i_("3da:986"), d[e] = a.extend({}, l, t), _r_(this);
}, $ = function(e) {
_i_("3da:987");
var t = d[e];
return t && (c = t), _r_(this);
}, N = function(e) {
return _i_("3da:988"), _[e.id] = e, _r_(this);
};
n = {
setup:S,
hideAll:C,
get:x,
each:E,
addPreset:T,
usePreset:$
}, r.extend(n), i.exports = n;
var A = function() {
_i_("3da:1075");
var e = function(e) {
_i_("3da:2067"), this.options = e, a.isFunction(e.onBeforeInit) && e.onBeforeInit.call(this), this.processOptions(e), this.api = {
id:this.id,
$target:this.$el,
settings:this.settings,
isVisible:a.proxy(this.isVisible, this),
show:a.proxy(this.show, this),
hide:a.proxy(this.hide, this),
toggle:a.proxy(this.toggle, this),
set:a.proxy(this.set, this),
reposition:a.proxy(this.position, this),
destroy:a.proxy(this.destroy, this),
on:a.proxy(this.on, this)
}, N(this.api), this.$el.data("tooltip-instance", this.api), this.triggerEvent("init"), _r_();
};
return e.prototype.processOptions = function(e) {
_i_("3da:2068");
var t = d[e.preset] || c, i = this.settings = a.extend({}, t, e);
if (this.id = i.id || ++s, _[this.id]) throw new Error('A tooltip with the same id "' + this.id + '" already exists.');
if (this.$el = a(i.target).first(), this.el = this.$el[0], !(i.title || i.text || i.content || i.contentTemplate || i.contentTarget)) throw new Error('No content for the tooltip. Please use any of these options: "content", "template" or "content-target".');
this.namespace = ".tooltip." + this.id, this.setupPosition(), this.setupEvents(), this.setupTriggers(), _r_();
}, e.prototype.setupTriggers = function() {
_i_("3da:2069");
var e = this.settings.triggerShow ? this.settings.triggerShow.split(/\s+/) :[], t = this.settings.triggerHide ? this.settings.triggerHide.split(/\s+/) :[], i = !e.length && this.settings.trigger ? this.settings.trigger.split(/\s+/) :[], n = this, r = function(e) {
return _i_("3da:2551"), _r_(a.grep(e, function(t, i) {
return _i_("3da:2694"), _r_(i === a.inArray(t, e));
}));
};
a.each(i, function(i, n) {
_i_("3da:2552");
var r;
"hover" === n && (n = "mouseenter"), r = f[n], e.push(n), r && t.push(r), _r_();
}), e = r(e), t = r(t), a.each(e, function(e, i) {
_i_("3da:2553");
var r, o = a.inArray(i, t);
r = i + n.namespace, o > -1 ? (n.$el.on(r, a.proxy(n.toggle, n)), t.splice(o, 1)) :(n.$el.on(r, a.proxy(n.show, n)), "click" == i ? n.$el.on(r, a.proxy(n._showOnClick, n)) :n.$el.on(r, a.proxy(n.show, n))), _r_();
}), a.each(t, function(e, t) {
_i_("3da:2554"), n.$el.on(t, a.proxy(n.hide, n)), _r_();
}), _r_();
}, e.prototype.setupPosition = function() {
_i_("3da:2070");
var e, t, i = this.settings.position;
if (i = i.replace(/left/g, "start"), i = i.replace(/right/g, "end"), this.settings.rtl && (i = i.replace(p, function(e) {
return _i_("3da:2681"), _r_("end" === e ? "start" :"end");
})), i = a.trim(i).split(/\s+/), e = this.placement = i[0], t = i[1], this.placementAxis = p.test(e) ? "x" :"y", p.test(t) || g.test(t) || (t = "middle"), this.alignment = t, !p.test(e) && !g.test(e)) throw new Error("The tooltip has to be aligned either on top, bottom, left or right.");
_r_();
}, e.prototype.setupEvents = function() {
_i_("3da:2071");
var e = /^on[A-Z].+/;
a.each(this.settings, a.proxy(function(t, i) {
if (_i_("3da:2623"), !e.test(t)) return _r_();
var n = t[2].toLowerCase() + t.substring(3);
this.on("tooltip:" + n + ":" + this.id, a.proxy(i, this)), _r_();
}, this)), _r_();
}, e.prototype.addArrow = function(e, t) {
if (_i_("3da:2072"), this.$tip.removeClass(this.arrowClass), !this.settings.arrow) return _r_();
var i = "tltp--" + e;
"middle" !== t && (i = i + "-" + t), this.$tip.addClass(i), this.arrowClass = i, _r_();
}, e.prototype.createTooltipNode = function() {
_i_("3da:2073"), this.triggerEvent("beforeCreateTooltipNode");
var e, t = this.settings, i = this.$tip = a(t.wrapperTemplate);
return t.icon || t.image || t.title || t.text ? e = this.buildLayout(t) :t.content ? e = t.content :t.contentTemplate ? e = o(t.contentTemplate).render(t.contentTemplateData) :(e = a(t.contentTarget), e.is("script") && (e = a($content.html()))), i.find('[role="content"]').andSelf().last().append(e), i.addClass(this.settings.customClass), this.settings.animation && i.addClass(this.settings.animationClass), u.append(i), this.api.$tooltip = i, this.triggerEvent("createTooltipNode"), _r_(this);
}, e.prototype.triggerByEvent = function(e, t) {
_i_("3da:2074");
var i = this.settings.delay;
void 0 === i && (i = this.settings.triggerDelays[e.type]), clearTimeout(this.timeout), this.timeout = setTimeout(a.proxy(t, this), i), _r_();
}, e.prototype.isVisible = function() {
return _i_("3da:2075"), _r_(this.$tip && (!this.$tip.hasClass(this.settings.hiddenClass) || this.$tip.hasClass(this.settings.visibleClass)));
}, e.prototype.triggerEvent = function(e) {
_i_("3da:2076");
var t = a.Event("tooltip:" + e, {
tooltip:this.api
}), i = a.Event(t.type + ":" + this.id, {
tooltip:this.api
});
n.emit(t.type, t, this), this.$el.trigger(t), n.emit(i.type, i, this), this.$el.trigger(i), _r_();
}, e.prototype.on = function(e, t) {
return _i_("3da:2077"), this.$el.on(e, t), _r_(this.api);
}, e.prototype.toggle = function() {
return _i_("3da:2078"), this.isVisible() ? this.hide() :this.show(), _r_(this.api);
}, e.prototype.show = function() {
_i_("3da:2079");
var e = this;
if (this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeShow"), this.$tip || this.createTooltipNode(), this.position(), clearTimeout(this.timeout), this.showTimer || (this.showTimer = setTimeout(function() {
_i_("3da:2682"), e.$tip.removeClass(e.settings.hiddenClass), e.$tip.addClass(e.settings.visibleClass), _r_();
}, this.settings.latency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", a.proxy(this.triggerEvent, this, "show")) :this.triggerEvent("show"), _r_(this.api);
}, e.prototype._showOnClick = function(e) {
_i_("3da:2080"), this.settings.preventDefaultOnClick && e.preventDefault(), this.show(), _r_();
}, e.prototype.hide = function() {
if (_i_("3da:2081"), this.showTimer && (this.showTimer = clearTimeout(this.showTimer)), !this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeHide"), clearTimeout(this.timeout), this.$tip.addClass(this.settings.hiddenClass), this.$tip.removeClass(this.settings.visibleClass), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", a.proxy(this.triggerEvent, this, "hide")) :this.triggerEvent("hide"), _r_(this.api);
}, e.prototype.position = function(e, t) {
_i_("3da:2082"), this.triggerEvent("beforePosition"), e = e || this.placement, t = t || this.alignment;
var i, n, r, a, o, s = this.$el, _ = this.$tip, l = this.buildInsideWindowFn(_.outerWidth(), _.outerHeight(), h.scrollLeft(), h.scrollTop(), h.width(), h.height()), d = b.indexOf(e), c = b.indexOf(t), u = w[d], f = k[c], p = -1;
e:for (var g = 0; 4 > g; g++) {
d = u[g], e = b[d];
for (var m = 0; 3 > m; m++) if (c = f[m], t = b[y[d][c]], i = this.calcCoords(e, t, s, _), n = l(i.left, i.top), n > p && (p = n, r = i, a = e, o = t), !this.settings.smartPositioning || 1 === n) break e;
}
if (this.coords && this.coords.left === r.left && this.coords.top === r.top) return _r_(this.api);
return this.settings.animation && this.$tip.removeClass(this.settings.animationClass), this.coords = r, _.css(r), this.addArrow(a, o), _.outerWidth(), this.settings.animation && this.$tip.addClass(this.settings.animationClass), this.triggerEvent("position"), _r_(this.api);
}, e.prototype.set = function(e, t) {
_i_("3da:2083");
var i = {};
return "object" === a.type(e) ? i = e :i[e] = t, a.extend(this.settings, i), this.setupPosition(), this.$tip && (this.$tip.toggleClass(this.settings.animationClass, this.settings.animation), this.position()), _r_(this.api);
}, e.prototype.destroy = function() {
_i_("3da:2084"), this.triggerEvent("beforeDestroy"), clearTimeout(this.timeout), this.$el.off(this.namespace), this.$el.removeData("tooltip-instance"), this.$tip && this.$tip.remove(), delete _[this.id], _r_();
}, e.prototype.calcCoords = function(e, t, i, n) {
_i_("3da:2085");
var r = i.offset(), a = {}, o = "top", s = "outerHeight", _ = "left", l = "outerWidth";
return p.test(e) && (o = "left", s = "outerWidth", _ = "top", l = "outerHeight"), m.test(e) ? a[o] = r[o] - n[s]() :a[o] = r[o] + i[s](), m.test(t) ? a[_] = r[_] :v.test(t) ? a[_] = r[_] + i[l]() - n[l]() :a[_] = r[_] + i[l]() / 2 - n[l]() / 2, _r_(a);
}, e.prototype.buildInsideWindowFn = function(e, t, i, n, r, a) {
_i_("3da:2086");
var o = i + r, s = n + a;
return _r_(function(r, a) {
_i_("3da:2496");
var _ = r + e, l = a + t, d = Math.max(i, r), c = Math.min(o, _), u = Math.max(n, a), h = Math.min(s, l), f = (_ - r) * (l - a), p = Math.max(0, c - d) * Math.max(0, h - u);
return _r_(p / f);
});
}, e.prototype.buildLayout = function(e) {
_i_("3da:2087");
var t = a(e.innerTemplate), i = a('[role="image"]', t);
a('[role="header"]', t).append(e.title).filter(":empty").remove(), a('[role="body"]', t).andSelf().last().append(e.text).filter(":empty").remove(), e.image ? i.append(a('<img src="' + e.image + '">')) :e.icon ? i.append(a('<i class="bicon bicon-' + e.icon + '"></i>')) :i.remove();
var n = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), r = n.exec(e.text), o = r && r[2];
return o && B.et.stage(o, 1), _r_(t);
}, _r_(e);
}();
_r_();
}), B.define("component/tooltip", function(e, t, i) {
"use strict";
_i_("3da:290");
var n = e("component"), r = e("jquery"), a = e("tooltip"), o = function(e) {
_i_("3da:989");
var t = {}, i = e.data();
return r.each(i, function(e, i) {
_i_("3da:1950");
var n;
if (e.length < 8 || 0 !== e.indexOf("tooltip")) return _r_();
e = e.substring(7), n = e[0].toLowerCase() + e.slice(1), t[n] = i, _r_();
}), t.target = e, _r_(t);
}, s = function() {
_i_("3da:990"), this.tooltip = a.setup(o(this.$el)), _r_();
};
i.exports = n.extend({
init:s
}), _r_();
}), B.when({
events:"ready",
condition:"ar" == B.env.b_lang
}).run(function() {
_i_("3da:291");
var e = document.createElement("div");
e.style["float"] = "left", e.style.position = "absolute", e.style.left = "-9999px", e.innerHTML = "عربي بوكينج", document.body.appendChild(e), e.style.fontFamily = '"Geeza Pro", "Tahoma", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
var t = e.clientWidth;
e.style.fontFamily = '"Noto Naskh Arabic", "Geeza Pro", "Tahoma", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
var i = e.clientWidth;
document.body.removeChild(e), t != i && B.et.stage("YdALOLOLOTWOLWKODHbFIRZZCOYZXJBXPNQbedWRe", 1), _r_();
}), B.when({
events:"load",
experiment:"cDZXbSYTUSGbBBOaT"
}).run(function() {
_i_("3da:292"), B.et.customGoal("cDZXbSYTUSGbBBOaT", 1), _r_();
}), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.main.run = !0);