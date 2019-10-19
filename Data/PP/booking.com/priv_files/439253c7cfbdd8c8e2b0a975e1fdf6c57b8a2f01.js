var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2 = {
loaded:!0,
run:!1
}), booking.ensureNamespaceExists("calendar2"), function(t, e, i, n, a) {
_i_("a41:1"), i.ONE_DAY = 864e5, i.SUNDAY_FIRST = !0, i.DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], i.DAY_STATES = {
disabled:!0,
weekend:!0,
selected:!0,
hilighted:!0,
"in-range":!0,
"first-in-range":!0,
"last-in-range":!0,
today:!0
};
var s = 1;
i.uid = function() {
return _i_("a41:24"), s++, _r_("calendar_" + s);
}, i.today = function() {
_i_("a41:25");
var e = new Date(1e3 * t.env.b_timestamp), n = new Date(), a = Math.abs(e - n) > i.ONE_DAY;
return _r_(a ? new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0) :new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0));
}, i.minToday = function() {
_i_("a41:26");
var t = new Date(Date.now() - 396e5);
return _r_(new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0, 0)));
}, i.dayId = function(t, e, i) {
return _i_("a41:27"), _r_(Date.UTC(t, e, i, 0, 0, 0, 0));
}, i.monthId = function(t, e) {
return _i_("a41:28"), _r_("M" + Date.UTC(t, e, 1, 0, 0, 0, 0));
}, i.nextMonthId = function(t) {
if (_i_("a41:29"), "string" != typeof t) return _r_(!1);
var n = t.split("-"), a = e.parseInt(n[0]), s = e.parseInt(n[1]), r = new Date(s, a + 1, 1);
return _r_(i.monthId(r));
}, i.previousMonthId = function(t) {
_i_("a41:30");
var n = t.split("-"), a = e.parseInt(n[0]), s = e.parseInt(n[1]), r = new Date(s, a - 1, 1);
return _r_(i.monthId(r));
}, i.dayFactory = function(t, e) {
_i_("a41:31");
var e = e || {};
return e.isWeekend = 0 === t.getDay() || 6 === t.getDay(), e.isDisabled = e.startDate && t < e.startDate || e.endDate && t > e.endDate || e.type && "checkin" === e.type && Math.abs(t - e.endDate) <= i.ONE_DAY, _r_(new i.Day(t, e));
}, i.weekFactory = function(t, e) {
return _i_("a41:32"), _r_(new i.Week(e));
}, i.monthFactory = function(t, e, n) {
return _i_("a41:33"), _r_(new i.Month(t, e, n));
}, i.yearFactory = function(t, e) {
return _i_("a41:34"), _r_(new i.Year(t, e));
}, i.getNumberOfDaysInMonth = function(t, e) {
_i_("a41:35");
var n = i.DAYS_IN_MONTH[t];
return 1 === t && (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) && (n = 29), _r_(n);
}, t.calendar2.WRAPPER_CLASS = "c2-wrapper", t.calendar2.STATES = {
HIDDEN:"hidden",
RANGE_SELECTED:"range-highlighted"
}, _r_();
}(booking, booking.tools, booking.calendar2, $), B.define("hijri-calendar", function() {
_i_("a41:2");
var t = 10631 / 30, e = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function a(a) {
_i_("a41:13");
var s = a.day, r = a.month, o = a.year, _ = r + 1, h = o;
3 > _ && (h -= 1, _ += 12);
var l = Math.floor(h / 100), d = 2 - l + Math.floor(l / 4);
1583 > h && (d = 0), 1582 === h && (_ > 10 && (d = -10), 10 == _ && (d = 0, s > 4 && (d = -10)));
var c = Math.floor(365.25 * (h + 4716)) + Math.floor(30.6001 * (_ + 1)) + s + d - 1524;
d = 0, c > 2299160 && (l = Math.floor((c - 1867216.25) / 36524.25), d = 1 + l - Math.floor(l / 4));
var u = c + d + 1524, f = Math.floor((u - 122.1) / 365.25), g = Math.floor(365.25 * f), m = Math.floor((u - g) / 30.6001);
s = u - g - Math.floor(30.6001 * m), r = m - 1, m > 13 && (f += 1, r = m - 13), o = f - 4716;
var p = c - e, y = Math.floor(p / 10631);
p -= 10631 * y;
var v = Math.floor((p - i) / t), b = 30 * y + v;
p -= Math.floor(v * t + i);
var D = Math.floor((p + 28.5001) / 29.5);
13 == D && (D = 12);
var C = p - Math.floor(29.5001 * D - 29), E = {
gregorian_day:s,
gregorian_month:r - 1,
gregorian_year:o,
julian_day:c - 1,
hijri_day:C,
hijri_month:D - 1,
hijri_year:b,
hijri_month_tag:n[D - 1]
};
return _r_(E);
}
var s = "1" === $.cookie("hijri_enabled") ? !0 :!1, r = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("a41:45"), r && !s && (s = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("a41:46"), r && s && (s = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("a41:47"), _r_(s);
},
available:function() {
return _i_("a41:48"), _r_(r);
},
convert:a
});
}), B.define("utils", function(t, e, i) {
_i_("a41:3"), e.assertExists = function(t, e) {
if (_i_("a41:36"), "object" != typeof t || !(e in t)) throw new Error("Property " + e + " is not found");
_r_();
}, e.camelCaseKeys = function(t) {
_i_("a41:37");
var e, i, n = {};
for (e in t) t.hasOwnProperty(e) && (i = e.replace(/-([a-zA-Z])/g, function(t, e) {
return _i_("a41:197"), _r_(e.toUpperCase());
}), n[i] = t[e]);
return _r_(n);
}, e.nodeData = function(t) {
_i_("a41:38"), t.jquery && (t = t[0]), this.assertExists(t, "attributes");
var e, i, n, a = {};
for (e = 0, i = t.attributes.length; i > e; e++) n = t.attributes[e], n && 0 == n.name.indexOf("data-") && (a[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(a));
}, _r_();
}), B.define("utils/simple-unique-id", function(t, e, i) {
_i_("a41:4");
function n(t, e) {
return _i_("a41:14"), _r_(Math.floor(Math.random() * (e - t)) + t);
}
i.exports = function() {
return _i_("a41:39"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(t, e, i) {
"use strict";
_i_("a41:5");
var n = t("event-emitter"), a = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("a41:181"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(t) {
_i_("a41:182"), t = t || window.event;
var e = this.visibilityState;
t.type in a ? (this.hidden = "hidden" == a[t.type], this.visibilityState = a[t.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), e != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("a41:49"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(t, e) {
_i_("a41:6");
var i = t(window), n = jQuery({
progress:0
}), a = 10, s = 700, r = 5;
function o(t, n, s, r) {
_i_("a41:15");
var o, _ = "number" == typeof r ? r :a;
if (!t || !t.length) return _r_(new e(function(t) {
_i_("a41:186"), t(), _r_();
}));
if (n) o = d(t).top - _; else {
var h = l(t, _);
null === h && (h = i.scrollTop()), o = h;
}
return _r_(this.scrollToOffset(o, s));
}
function _(t, a) {
_i_("a41:16"), n.stop(!0);
var s = i.scrollTop(), o = t;
return _r_(new e(function(t) {
_i_("a41:51"), Math.abs(s - o) < r ? t() :h(s, o, a, t), _r_();
}));
}
function h(t, e, a, r) {
_i_("a41:17"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("a41:187"), i.scrollTop(t + n * (e - t)), _r_();
},
duration:"number" == typeof a ? a :s,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:r
}), _r_();
}
function l(t, e) {
if (_i_("a41:18"), 0 === t.height()) return _r_(null);
var i = d(t), n = c(), a = i.top < n.top, s = i.bottom > n.bottom, r = t.outerHeight() + e > u();
return _r_(a || s ? r || a ? i.top - e :i.bottom + e - u() :null);
}
function d(t) {
_i_("a41:19");
var e = t.offset().top;
return _r_({
top:e,
bottom:e + t.outerHeight()
});
}
function c() {
_i_("a41:20");
var t = i.scrollTop();
return _r_({
top:t,
bottom:t + u()
});
}
function u() {
return _i_("a41:21"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:o,
scrollToOffset:_
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(t, e) {
_i_("a41:7");
var i = function(e, i) {
if (_i_("a41:40"), !e) throw new Error("You did not pass proper date for countdown");
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
}, "number" == typeof e ? this.endTime = new Date(e) :this.endTime = Date.parse(e), this.options = t.extend(!0, {}, this.defaults, i), this._processOptions(), this._init(), _r_(this);
};
return t.extend(i.prototype, {
_processOptions:function() {
_i_("a41:52");
var t = this.options.leadingZeroes;
if ("boolean" == typeof t) for (var e = 0; e < this.dimensionsToCheck.length; e++) this.options.leadingZeroes[this.dimensionsToCheck[e]] = t;
_r_();
},
_init:function() {
_i_("a41:53"), e.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("a41:54"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("a41:55"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("a41:56");
var t = this._getRemainingTime();
t.total >= 0 ? (this._fireEvents(t), this.previousTime = t) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("a41:57");
var t = this.endTime - Date.parse(new Date()), e = Math.floor(t / 1e3 % 60), i = Math.floor(t / 1e3 / 60 % 60), n = Math.floor(t / 36e5 % 24), a = Math.floor(t / 864e5);
return _r_({
total:t,
days:a,
hours:n,
minutes:i,
seconds:e
});
},
_fireEvents:function(t) {
if (_i_("a41:58"), !this.previousTime) return _r_();
t ? (this._fireProgressEvents(t), this._fireEveryTickEvent(t)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(t) {
_i_("a41:59");
for (var e = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(t, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:e._formatDate(t)
});
_r_();
},
_fireEveryTickEvent:function(t) {
_i_("a41:60"), this.trigger("ticked", {
remainingTime:this._formatDate(t)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("a41:61"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(t, e) {
return _i_("a41:62"), _r_(!!(t[e] - this.previousTime[e]));
},
_setCallbacks:function() {
_i_("a41:63");
var t = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(e) {
_i_("a41:198"), t.options.callback(t._formatDate(e.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(e) {
_i_("a41:199"), t.options.expiredCallback.call(t._formatDate(e.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(e) {
_i_("a41:200"), t.options.callbacks[e.type] && "function" == typeof t.options.callbacks[e.type] && t.options.callbacks[e.type].call(t._formatDate(e.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(t) {
_i_("a41:64");
var e;
for (var i in t) this.options.leadingZeroes[i] && t.hasOwnProperty(i) && (e = "" + t[i], e.length <= 1 && (t[i] = "0" + e));
return _r_(t);
},
getStartRemainingTime:function() {
return _i_("a41:65"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("a41:66"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("a41:67"), this._start(), _r_();
}
}), _r_(i);
}), function(t, e, i, n) {
_i_("a41:8");
var a = t.require("jquery"), s = t.require("window-scroller"), r = 10;
i.Calendar = function(e, n) {
_i_("a41:41"), this.id_ = i.uid(), this.lazyEvents = {}, this.days = {}, this.daysIndex = [], this.months = {}, this.monthsIndex = [], this.selectedDays_ = [], this.states_ = {}, this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {}, this.firstShow = !0, this.search = n.search, this.initBaseMarkup(e, n.positioning), this.addState(t.calendar2.STATES.HIDDEN), this.$input.data("calendar2", this), this.setOptions(n), n.type && this.$element.addClass(this.getStateClassName_(n.type)), n.arrow && this.$element.addClass(this.getStateClassName_("has-arrow")), n.lazy ? this.bindLazyLoadingEvents() :this.initLazyMethods(), this.onReady(), this.initialized = !0, _r_();
}, i.Calendar.prototype = {
constructor:i.Calendar,
id:function() {
return _i_("a41:68"), _r_(this.id_);
},
type:function() {
return _i_("a41:69"), _r_(this.options && this.options.type || "unknown");
},
initBaseMarkup:function(e, i) {
_i_("a41:70"), this.$input = e;
var n = a('<div class="' + t.calendar2.WRAPPER_CLASS + " " + this.getStateClassName_("hidden") + '"></div>');
"inside" === i ? (this.$element = n, this.$input.append(this.$element)) :"outside" === i ? (this.$element = n, a(document.body).append(this.$element)) :this.$element = this.$input.wrap(n).parent(), this.$element.addClass(this.getStateClassName_("position-" + i)), _r_();
},
setOptions:function(t) {
_i_("a41:71");
var e = this.initialized && (t.startDate || t.endDate);
t = a.extend(this.options || {}, t), t.startDate = new Date(t.startDate), t.endDate = new Date(t.endDate), t.startDateId = i.dayId(t.startDate.getFullYear(), t.startDate.getMonth(), t.startDate.getDate()), t.endDateId = i.dayId(t.endDate.getFullYear(), t.endDate.getMonth(), t.endDate.getDate()), t.calendarWidth = t.monthWidth * t.monthsVisible + t.borderWidth * (t.monthsVisible - 1), this.options = t, e && this.rebuildCalendarMarkup(), _r_();
},
setDefaultDates:function() {
_i_("a41:72");
var t = this.options, e = t.defaultDate || null;
e && e.year && e.month >= 0 && e.date >= 0 ? (this.selectDay(i.dayId(e.year, e.month, e.date)), this.selectMonth(i.monthId(e.year, e.month))) :this.selectMonth(this.monthsIndex[0], {
force:!0
}), _r_();
},
getCalendarClassname:function() {
_i_("a41:73");
var t = "c2-calendar";
return "rtl" === this.options.direction && (t += " c2-calendar-rtl"), this.options.extraClasses && (t += " " + this.options.extraClasses), _r_(t);
},
initLazyMethods:function() {
_i_("a41:74"), this.unbindLazyLoadingEvents(), this.rebuildCalendarMarkup(), this.setDefaultDates(), this.onLazyInitiated(), _r_();
},
rebuildCalendarMarkup:function() {
_i_("a41:75"), this.initialized && (this.$calendarElement && this.$calendarElement.remove(), this.months = {}, this.monthsIndex = []), this.initMarkup(), this.bindElementsToModels(), this.setupOffsetsAndViewport_(), this.fitHorizontalPosition(), this.bindEvents(), _r_();
},
refreshDisabledDays:function() {
_i_("a41:76");
var t = this;
a.each(this.days, function(e, i) {
_i_("a41:194"), i.id() <= t.options.startDateId || i.id() > t.options.endDateId ? i.addState("disabled") :i.removeState("disabled"), _r_();
}), _r_();
},
initMarkup:function() {
_i_("a41:77");
var e = this.getOption_("title"), i = this.createMonths(), n = "";
if ("ro" == t.env.b_lang) var s = this.options.closeButton ? '<div class="c2-calendar-close-button"><i class="c2-calendar-close-button-icon">×</i></div>' :""; else if (t.et.track("OTfdASFbLYQCLBMDbQNZBeWe")) var s = this.options.closeButton ? '<button class="c2-calendar-close-button c2-calendar-close-button-clearappearance" aria-label="' + t.jstmpl.translations("a11y_sr_close_calendar_icon") + '" data-et-view="OTfdASFbLYQCLBMDbQNZBeWe:1" data-et-click="customGoal:OTfdASFbLYQCLBMDbQNZBeWe:1"><i class="c2-calendar-close-button-icon">×</i></button>' :""; else var s = this.options.closeButton ? '<div class="c2-calendar-close-button" data-et-view="OTfdASFbLYQCLBMDbQNZBeWe:1" data-et-click="customGoal:OTfdASFbLYQCLBMDbQNZBeWe:1"><i class="c2-calendar-close-button-icon">×</i></div>' :"";
var r = this.options.calendarWidth + "px", o = "";
this.options.pricePlaceHolder && (o = '<div class="c2-progress-bar"><div class="c2-progress-bar-inner"></div></div>');
var _ = '<div style="width:' + r + ';" class="' + this.getCalendarClassname() + '"><div class="c2-calendar-header">' + e + n + s + o + '</div><div class="c2-calendar-body"><div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div><div class="c2-calendar-viewport"><div class="c2-calendar-inner">' + i + '</div></div><div class="c2-calendar-footer"><div class="c2-calendar-footer-dynamic"></div></div></div></div>';
this.$calendarElement = a(_), this.$viewport = this.$calendarElement.find(".c2-calendar-viewport"), this.$screen = this.$viewport.find(".c2-calendar-inner"), this.$footer = this.$calendarElement.find(".c2-calendar-footer"), this.$header = this.$calendarElement.find(".c2-calendar-header"), this.$element.append(this.$calendarElement), t.et.initAttributesTracking(this.$element.find("c2-calendar-close-button")), _r_();
},
createMonths:function() {
_i_("a41:78");
var t = "", e = this.options, i = e.startDate.getFullYear(), n = e.endDate.getFullYear(), a = e.startDate.getMonth(), s = e.endDate.getMonth();
for (t += '<div class="c2-months-table">'; n > i || i === n && s >= a; ) t += this.createMonth(i, a).getHTML(), (a + 1) % 12 === 0 && i++, a = (a + 1) % 12;
return t += "</div>", _r_(t);
},
createMonth:function(t, e, n) {
_i_("a41:79");
var a = new i.Month(t, e, this), s = a.id();
return this.months[s] = a, this.monthsIndex.push(s), _r_(a);
},
createDay:function(t, e, n) {
_i_("a41:80");
var a = new i.Day(t, e, n, this), s = a.id();
return (s < this.options.startDateId || s > this.options.endDateId) && a.addState("disabled"), this.days[s] = a, this.daysIndex.push(s), _r_(a);
},
getDay:function(t) {
return _i_("a41:81"), _r_(this.days[t]);
},
bindElementsToModels:function() {
_i_("a41:82");
for (var t = this.$calendarElement.find(".c2-month"), e = this.$calendarElement.find(".c2-day"), i = 0, n = t.length; n > i; i++) this.months[t[i].getAttribute("data-id")].setElement(t[i]);
for (var i = 0, n = e.length; n > i; i++) this.days[e[i].getAttribute("data-id")].setElement(e[i]);
_r_();
},
setupOffsetsAndViewport_:function() {
_i_("a41:83");
for (var t, e, i = this.options.borderWidth, n = this.options.monthWidth, a = 0, s = this.monthsIndex.length; s > a; a++) "rtl" === this.options.direction ? (e = (s - (a + 1)) * (n + i), t = (s - (a + this.options.monthsVisible)) * (n + i)) :(t = a * (n + i), e = t), this.months[this.monthsIndex[a]].setOffset(t), this.months[this.monthsIndex[a]].setPosition(e);
_r_();
},
setCurrentMonth:function(t) {
return _i_("a41:84"), t ? -1 === this.monthsIndex.indexOf(t) && (t = this.monthsIndex[0]) :t = this.monthsIndex[0], this.currentMonth_ = t, _r_(this.currentMonth_);
},
getCurrentMonth:function() {
return _i_("a41:85"), _r_(this.currentMonth_ || this.setCurrentMonth());
},
getCurrentMonthUtc:function() {
return _i_("a41:86"), _r_(this.months[this.getCurrentMonth()].utcts_);
},
getCurrentDay:function() {
return _i_("a41:87"), _r_(this.selectedDays()[0]);
},
getSelectedDay:function() {
_i_("a41:88");
var t = this.getCurrentDay();
return _r_(t && this.days[t] ? this.days[t] :null);
},
selectMonth:function(t, e) {
_i_("a41:89");
var i, e = e || {}, n = this.getTargetMonth(t), a = {
type:"any"
};
if (this.getCurrentMonth() === n && !e.force) return _r_();
i = this.months[n], i && (this.setOffset_(i.getOffset()), this.setCurrentMonth(t)), this.monthsIndex[0] === this.getCurrentMonth() ? a.type = "first" :this.monthsIndex[this.monthsIndex.length - this.options.monthsVisible] === n && (a.type = "last"), this.onMonthShown(null, a), _r_();
},
getNextMonth:function() {
_i_("a41:90");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t + 1;
return _r_(this.monthsIndex[e]);
},
getPreviousMonth:function() {
_i_("a41:91");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t - 1;
return _r_(this.monthsIndex[e]);
},
getTargetMonth:function(t) {
_i_("a41:92");
var e, i = this.monthsIndex.indexOf(t), n = i + this.options.monthsVisible - 1;
return n >= this.monthsIndex.length && (e = n - (this.monthsIndex.length - 1), n -= e, i -= e), _r_(this.monthsIndex[i]);
},
getVisibleMonths:function() {
_i_("a41:93");
var t = this.monthsIndex.slice(0), e = this.monthsIndex.indexOf(this.getCurrentMonth());
return t = t.slice(e, e + this.options.monthsVisible), _r_(t);
},
setOffset_:function(e, i) {
_i_("a41:94");
var n = "margin-left", a = {};
a[n] = -e, i || 2 == t.env.b_site_type_id ? this.$screen.stop(!0, !0).css(a) :this.$screen.stop(!0, !0).animate(a, 300, "easeOutQuad"), _r_();
},
selectedDays:function() {
return _i_("a41:95"), _r_(this.selectedDays_);
},
selectDay:function(t, e) {
if (_i_("a41:96"), !t) return _r_(!1);
var i, n = this.days[t];
if (!n || n.hasState("disabled")) return _r_();
for (i in this.days) this.days.hasOwnProperty(i) && this.days[i].hasState("selected") && this.days[i].removeState("selected");
n.addState("selected"), this.selectedDays_ = [ n.id() ], this.onDateSelected(null, n.id(), e), _r_();
},
selectRange:function(e, i) {
_i_("a41:97");
var n = this.daysIndex.indexOf(e), a = this.daysIndex.indexOf(i) + 1, s = this.daysIndex.slice(n, a);
if (this.selectedRange_) for (var r = 0, o = this.selectedRange_.length; o > r; r++) this.days[this.selectedRange_[r]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
for (var r = 0, o = s.length; o > r; r++) this.days[s[r]].addState("in-range"), 0 === r ? this.days[s[r]].addState("first-in-range") :r === o - 1 && this.days[s[r]].addState("last-in-range");
s.length ? this.addState(t.calendar2.STATES.RANGE_SELECTED) :this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.selectedRange_ = s, _r_();
},
highlightRange:function(e, n, a) {
_i_("a41:98"), this.highlightedRanges_ || (this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {});
var s, r = this.daysIndex.indexOf(e), o = this.daysIndex.indexOf(n) + 1, _ = this.daysIndex.slice(r, o);
return s = a && a.name ? a.name :i.uid(), this.deleteRange_(s), _.length ? (this.createRange_(_, s, a), this.addState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeHighlighted", s)) :(this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", s)), _r_(s);
},
unHighlightRange:function(e) {
_i_("a41:99"), this.highlightedRanges_[e] && (this.deleteRange_(e), this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", e)), _r_();
},
createRange_:function(t, e, i) {
_i_("a41:100");
for (var n = 0, a = t.length; a > n; n++) i && i.className ? this.days[t[n]].addState(i.className) :this.days[t[n]].addState("in-range"), i && i.tooltip && this.days[t[n]].setTitle(i.tooltip), 0 === n ? this.days[t[n]].addState("first-in-range") :n === a - 1 && this.days[t[n]].addState("last-in-range");
this.highlightedRanges_[e] = t, this.highlightedRangesMeta_[e] = t, _r_();
},
deleteRange_:function(t) {
_i_("a41:101");
var e = this.highlightedRanges_[t], i = !1, n = !1;
if (this.highlightedRangesMeta_[t] && (i = this.highlightedRangesMeta_[t].className || !1, n = this.highlightedRangesMeta_[t].tooltip || !1), e) {
for (var a = 0, s = e.length; s > a; a++) this.days[e[a]].removeState("first-in-range").removeState("in-range").removeState("last-in-range"), i && this.days[e[a]].removeState(i), n && this.days[e[a]].removeTitle();
this.highlightedRanges_[t] = null, this.highlightedRangesMeta_[t] = null;
}
_r_();
},
shown:function() {
return _i_("a41:102"), _r_(!this.hasState(t.calendar2.STATES.HIDDEN));
},
changeInput:function(t) {
_i_("a41:103"), this.$input = t, _r_();
},
show:function() {
_i_("a41:104"), this.lazyInitiated || this.initLazyMethods(), this.firstShow && "checkin" == this.options["calendar2-type"] && (this.firstShow = !1), t.eventEmitter.trigger("CALENDAR:opened", {
id:this.id(),
instance:this
}), this.removeState(t.calendar2.STATES.HIDDEN), this.onReflow(), this.fireCallback("onShow"), "outside" === this.options.positioning ? this.fitVerticalPositionAbsolute() :this.fitVerticalPosition(), this.adjustHeight(), t.eventEmitter.trigger("CALENDAR:shown", {
id:this.id(),
instance:this
});
var e = this.getTargetMonth(this.getCurrentMonth()), i = this.months[e];
t.env.rtl && i && this.setOffset_(i.getOffset(), !0), _r_();
},
hide:function() {
_i_("a41:105"), t.eventEmitter.trigger("CALENDAR:closed", {
id:this.id(),
instance:this
}), this.addState(t.calendar2.STATES.HIDDEN), this.fireCallback("onHide"), _r_();
},
toggle:function() {
_i_("a41:106"), this.shown() ? this.hide() :this.show(), _r_();
},
fitHorizontalPosition:function() {
_i_("a41:107");
var t = window, e = this.$element, i = this.$calendarElement, n = "rtl" === this.options.direction, s = n ? "right" :"left", o = 0, _ = e.offset().left, h = i.outerWidth() + r;
n ? o = e.width() + _ - h :(o = a(t).width() - (_ + h), r > _ + o && (o = -r)), this.options.alignToRight && (o = this.$element.width() - this.$calendarElement.outerWidth()), 0 > o ? i.css(s, o) :i.css(s, 0), _r_();
},
fitVerticalPosition:function() {
_i_("a41:108");
var t = a(window), e = t.scrollTop(), i = this.$calendarElement, n = r + i.offset().top + i.height() - t.height();
n > e && s.scrollToOffset(n), _r_();
},
fitVerticalPositionAbsolute:function() {
_i_("a41:109");
var t = this.$input.offset();
this.$element.css({
position:"absolute",
top:t.top,
left:t.left
}), _r_();
},
resetModes:function() {
_i_("a41:110"), this.selectRange(), _r_();
},
adjustHeight:function(t) {
_i_("a41:111");
for (var e = this.getVisibleMonths(), i = 0, n = 0, a = 0; a < e.length; a++) i = this.months[e[a]].getHeight(t), n = i > n ? i :n;
n > 0 && this.$viewport.height(n), _r_();
},
trigger:function() {
_i_("a41:112"), this.$element.trigger.apply(this.$element, arguments), _r_();
},
fireCallback:function(t) {
_i_("a41:113");
var e = [].slice.call(arguments, 1);
e.unshift(this), this.options[t] && "function" == typeof this.options[t] && this.options[t].apply(this, e), _r_();
},
bindEvents:function() {
_i_("a41:114");
var t = this, e = a(window);
this.eventsAttached || (this.$input.bind("keydown", function(e) {
_i_("a41:201"), t.onKeyDown(e), _r_();
}), this.$input.bind("click touchstart", function(e) {
_i_("a41:202");
for (var i = e.target; i && i !== e.currentTarget; ) {
if (i.hasAttribute && i.hasAttribute("data-calendar2-cant-touch-this")) return _r_();
i = i.parentNode;
}
return t.toggle(), _r_(!1);
}), this.$element.bind("toggleCalendar", function() {
_i_("a41:203"), t.toggle(), _r_();
}), this.$element.bind("showCalendar", function() {
_i_("a41:204"), t.show(), _r_();
}), this.$element.bind("hideCalendar", function() {
_i_("a41:205"), t.hide(), _r_();
}), this.$element.click(function(t) {
_i_("a41:206"), 0 === a(t.target).parents(".b-link_external").length && (t.preventDefault(), t.stopPropagation()), _r_();
}), e.click(function() {
_i_("a41:207"), t.shown() && t.hide(), _r_();
}), e.resize(function() {
_i_("a41:208"), t.fitHorizontalPosition(), _r_();
}), e.resize(function() {
_i_("a41:209");
var e, i, n, a = 100, s = +new Date() - a - 1, r = function() {
_i_("a41:212"), t.shown() && t.onReflow(), _r_();
};
return _r_(function() {
_i_("a41:210"), window.clearTimeout(e), i = +new Date(), n = i - s, n >= a ? (s = i, r()) :e = window.setTimeout(r, a), _r_();
});
}()), this.$element.bind("dateSelected", a.proxy(this.onExternalDateSelected, this)), this.$element.bind("rangeSelected", a.proxy(this.onExternalRangeSelected, this)), this.$element.bind("monthSelected", a.proxy(this.onExternalMonthSelected, this)), this.eventsAttached = !0), this.$calendarElement.on("mouseenter", ".c2-day", a.proxy(this.onDayMouseEnter, this)), this.$calendarElement.on("mouseleave", ".c2-day", a.proxy(this.onDayMouseLeave, this)), this.$calendarElement.on("click touchstart", ".c2-day", a.proxy(this.onDayClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-earlier", a.proxy(this.onEarlierButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-further", a.proxy(this.onFurtherButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-calendar-close-button", a.proxy(this.onCloseButtonClick, this)), _r_();
},
bindLazyLoadingEvents:function() {
_i_("a41:115"), this.$element.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$element.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), this.$element.bind("show", a.proxy(this.show, this)), this.$element.bind("hide", a.proxy(this.hide, this)), this.$element.bind("toggle", a.proxy(this.toggle, this)), this.$input.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$input.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), _r_();
},
unbindLazyLoadingEvents:function() {
_i_("a41:116"), this.$element.unbind("mouseenter.calendar2 touchstart.calendar2"), this.$input.unbind("mouseenter.calendar2 touchstart.calendar2"), _r_();
},
addState:function(t) {
_i_("a41:117"), this.states_[t] || (this.states_[t] = !0, this.$element.addClass(this.getStateClassName_(t))), _r_();
},
removeState:function(t) {
_i_("a41:118"), this.states_[t] && (this.states_[t] = !1, this.$element.removeClass(this.getStateClassName_(t))), _r_();
},
hasState:function(t) {
return _i_("a41:119"), _r_(!!this.states_[t]);
},
getStateClassName_:function(t) {
return _i_("a41:120"), _r_(t ? "c2-wrapper-s-" + t :"");
},
onElementMouseEnter:function() {
_i_("a41:121"), this.unbindLazyLoadingEvents(), this.initLazyMethods(), _r_();
},
onElementTouchStart:function(t) {
_i_("a41:122"), t.preventDefault(), this.unbindLazyLoadingEvents(), this.$element.bind("lazyInitiated", a.proxy(function() {
_i_("a41:195"), this.show(), this.$element.unbind("lazyInitiated"), _r_();
}, this)), this.initLazyMethods(), _r_();
},
onDayClick:function(t) {
_i_("a41:123"), t.preventDefault(), t.stopPropagation();
var e = t.currentTarget.getAttribute("data-id");
this.fireCallback("onDayClick", e), this.selectDay(e, {
type:"user"
}), _r_();
},
onCloseButtonClick:function(t) {
_i_("a41:124"), t.preventDefault(), t.stopPropagation(), this.hide(), _r_();
},
onFurtherButtonClick:function(e) {
_i_("a41:125"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getNextMonth()), t.eventEmitter.trigger("CALENDAR:nextclick", {
instance:this
}), _r_();
},
onEarlierButtonClick:function(e) {
_i_("a41:126"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getPreviousMonth()), t.eventEmitter.trigger("CALENDAR:previousclick", {
instance:this
}), _r_();
},
onMonthShown:function(t, e) {
_i_("a41:127"), e && (this.$calendarElement.find(".c2-button-s-disabled").removeClass("c2-button-s-disabled"), "first" === e.type ? this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled") :"last" === e.type && this.$calendarElement.find(".c2-button-further").addClass("c2-button-s-disabled")), this.adjustHeight(), _r_();
},
onDateSelected:function(t, e, n) {
_i_("a41:128");
var a = this.getDay(e), s = i.monthId(a.getYear(), a.getMonth()), r = this.getVisibleMonths(), o = n || {};
-1 === r.indexOf(s) && this.selectMonth(s), "api" !== o.type && this.options.closeOnDateSelected === !0 && this.hide(), "user" === o.type && this.fireCallback("onDateSelected", a, o, this.search), _r_();
},
onDayMouseEnter:function(t) {
_i_("a41:129"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.addState("hilighted"), this.fireCallback("onDayMouseEnter", e), _r_();
},
onDayMouseLeave:function(t) {
_i_("a41:130"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.removeState("hilighted"), this.fireCallback("onDayMouseLeave", e), _r_();
},
onExternalMonthSelected:function(t, e) {
_i_("a41:131");
var n = e.value, a = i.monthId(n.year, n.month);
this.selectMonth(a), _r_();
},
onExternalDateSelected:function(t, e) {
_i_("a41:132");
var n, a = e.value;
if (!a) return _r_();
if (n = i.dayId(a.year, a.month, a.date), !n) return _r_();
if (this.getCurrentDay() === n) return _r_();
this.selectDay(n), _r_();
},
onExternalRangeSelected:function(t, e) {
_i_("a41:133");
var n, a, s, r;
if (!e) return _r_();
if (n = e.startValue, a = e.endValue, !n || !a) return _r_();
s = i.dayId(n.year, n.month, n.date), r = i.dayId(a.year, a.month, a.date), this.selectRange(s, r), _r_();
},
hilightToday:function() {
_i_("a41:134");
var t = i.today(), e = this.getDay(i.dayId(t.getFullYear(), t.getMonth(), t.getDate()));
e && e.addState("today"), _r_();
},
toggleNextPreviousControls:function() {
_i_("a41:135"), 0 === this.monthsIndex.indexOf(this.getCurrentMonth()) && this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled"), _r_();
},
onReady:function() {
_i_("a41:136"), this.fireCallback("onReady"), _r_();
},
onLazyInitiated:function() {
_i_("a41:137"), this.hilightToday(), this.toggleNextPreviousControls(), this.lazyInitiated = !0, this.fireCallback("onLazyInitiated"), this.trigger("lazyInitiated"), _r_();
},
onKeyDown:function(t) {
_i_("a41:138"), this.fireCallback("onKeyDown", t), _r_();
},
adjustArrowPosition:function() {
_i_("a41:139");
var t, e, i, n;
this.options.arrow && ("rtl" === this.options.direction ? (t = -1 * parseInt(this.$calendarElement.css("right"), 10) + 9, n = ".c2-wrapper-s-has-arrow .c2-calendar:before { right: " + t + "px !important;}") :(t = -1 * parseInt(this.$calendarElement.css("left"), 10) + 14, n = ".c2-wrapper-s-has-arrow .c2-calendar:before { left: " + t + "px !important;}"), isNaN(t) || (this.data("arrowStyleElement") ? i = this.data("arrowStyleElement") :(e = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style"), i.type = "text/css", e.appendChild(i), this.data("arrowStyleElement", i)), i.styleSheet ? i.styleSheet.cssText = n :i.appendChild(document.createTextNode(n)))), _r_();
},
onReflow:function() {
_i_("a41:140"), this.fitHorizontalPosition(), this.adjustArrowPosition(), this.fireCallback("onReflow"), _r_();
},
customData_:{},
setCustomVariable_:function(t, e) {
if (_i_("a41:141"), !t) throw new Error("setCustomVariable method requires a name parameter");
return "undefined" == typeof e && this.customData_.hasOwnProperty(t) && delete this.customData_[t], this.customData_[t] = e, _r_(this);
},
getCustomVariable_:function(t) {
if (_i_("a41:142"), !t) throw new Error("getCustomVariable method requires a name parameter");
return _r_(this.customData_[t]);
},
data:function() {
if (_i_("a41:143"), 1 === arguments.length) return _r_(this.getCustomVariable_(arguments[0]));
if (2 === arguments.length) return _r_(this.setCustomVariable_(arguments[0], arguments[1]));
throw new Error("calendar2 data function accepts maximum 2 parameters");
},
getOption_:function(t, e) {
_i_("a41:144");
var i, n;
if (!t) throw new Error("calendar2 getOption_ function requires name parameter");
return i = this.options[t], e = e || {}, n = e.defaultValue || "", n = "function" == typeof i && e.interpolate !== !1 ? i.call(this) :i, _r_(n);
}
}, _r_();
}(booking, booking.tools, booking.calendar2), function(t, e, i, n, a) {
_i_("a41:9");
var s = t.require("hijri-calendar");
i.Day = function(t, e, i, n) {
_i_("a41:42"), this.calendar_ = n, this.date_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, i, 0, 0, 0, 0), this.id_ = this.utcts_, this.dateObject_ = new Date(this.utcts_), this.states_ = {}, this.stateClasses_ = "", _r_();
}, n.extend(i.Day.prototype, {
id:function() {
return _i_("a41:145"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:146"), _r_(this.utcts_);
},
toString:function() {
return _i_("a41:147"), _r_([ this.getDate(), this.getMonth() + 1, this.getYear() ].join("."));
},
setElement:function(t) {
return _i_("a41:148"), this.element_ = t, _r_(this);
},
getElement:function() {
return _i_("a41:149"), _r_(this.element_);
},
getStateClasses_:function() {
_i_("a41:150");
var t, e = [];
for (t in this.states_) this.states_.hasOwnProperty(t) && this.states_[t] && e.push("c2-day-s-" + t);
return _r_(e);
},
getStateClassNames_:function() {
return _i_("a41:151"), _r_(this.getStateClasses_().join(" "));
},
setTitle:function(t) {
_i_("a41:152"), this.element_.setAttribute("data-title", t), _r_();
},
removeTitle:function() {
_i_("a41:153"), this.element_.removeAttribute("data-title"), _r_();
},
applyStates_:function() {
if (_i_("a41:154"), !this.element_) return _r_();
var t = this.element_.className, e = this.stateClasses_ || "", i = this.getStateClasses_();
return i !== e && (e = e.split(" "), e.length > 0 && (t = t.replace(new RegExp(e.join("|"), "g"), "")), i.length > 0 && (t = t.replace(new RegExp(i.join("|"), "g"), "")), t = n.trim(t) + " " + i.join(" "), this.stateClasses_ = i.join(" "), this.element_.className = t), _r_(this);
},
addState:function(t) {
return _i_("a41:155"), this.states_[t] = !0, this.applyStates_(), _r_(this);
},
removeState:function(t) {
return _i_("a41:156"), this.states_[t] = !1, this.applyStates_(), _r_(this);
},
hasState:function(t) {
return _i_("a41:157"), _r_(this.states_[t]);
},
getDate:function() {
return _i_("a41:158"), _r_(this.date_);
},
getMonth:function() {
return _i_("a41:159"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:160"), _r_(this.year_);
},
getFormattedDate:function() {
_i_("a41:161");
var t = this.getDate();
return _r_(10 > t ? "&nbsp;" + t :"" + t);
},
isWeekend:function() {
return _i_("a41:162"), _r_(0 === this.dateObject_.getUTCDay() || 6 === this.dateObject_.getUTCDay());
},
getHijriFormattedDate:function() {
_i_("a41:163");
var t = s.convert({
day:this.getDate(),
month:this.getMonth(),
year:this.getYear()
});
return _r_(t.hijri_day < 10 ? "&nbsp;" + t.hijri_day :"" + t.hijri_day);
},
getHTML:function() {
_i_("a41:164");
var e = "";
return this.isWeekend() && this.addState("weekend"), e += '<td class="c2-day ', e += this.getStateClassNames_(), e += '" data-id="' + this.id() + '">', e += '<span class="c2-day-inner">', e += this.getFormattedDate(), s.available() && (e += t.jstmpl("hijri_day").render({
hijriDate:this.getHijriFormattedDate()
})), e += "</span>", this.calendar_ && this.calendar_.options.pricePlaceHolder && (e += '<span class="c2-day-price">', e += '<i class="bicon bicon-search"></i>', e += "</span>"), e += "</td>", _r_(e);
}
}), _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
"use strict";
_i_("a41:10");
function s() {
_i_("a41:22");
var t = i.today();
return _r_(t);
}
function r() {
_i_("a41:23");
var e = i.today();
return t.env.b_search_max_months ? e.setMonth(e.getMonth() + t.env.b_search_max_months) :e.setFullYear(e.getFullYear() + 1), e.setDate(0), _r_(e);
}
i.defaults = {
startDate:s(),
endDate:r(),
defaultDate:null,
sundayFirst:!1,
direction:"ltr",
monthNames:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
dayNames:[ "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ],
monthsVisible:2,
monthWidth:261,
monthHeight:210,
borderWidth:1,
extraClasses:"",
title:"",
mode:"single_date",
lazy:!1,
closeButton:!1,
closeOnDateSelected:!0,
onDayClick:function(t, e, i) {},
onDaySelected:function(t, e, i) {},
onRangeSelected:function(t, e, i, n) {},
onLazyInitiated:function(t) {}
}, _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
_i_("a41:11"), i.Month = function(t, e, i) {
_i_("a41:43"), this.calendar_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, 1, 0, 0, 0, 0), this.id_ = "M" + this.utcts_, _r_();
}, n.extend(i.Month.prototype, {
id:function() {
return _i_("a41:169"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:170"), _r_(this.utcts_);
},
setElement:function(t) {
_i_("a41:171"), this.element_ = t, _r_();
},
getElement:function() {
return _i_("a41:172"), _r_(this.element_);
},
setOffset:function(t) {
_i_("a41:173"), this.element_ && this.element_.setAttribute("data-offset", t), this.offset_ = t, _r_();
},
setPosition:function(t) {
_i_("a41:174"), this.element_ && (this.element_.style.left = t + "px"), _r_();
},
getOffset:function() {
return _i_("a41:175"), _r_(this.offset_);
},
getHeight:function(t) {
return _i_("a41:176"), (t || !this.height_) && (this.height_ = n(this.getElement()).find(".c2-month-table").height()), _r_(this.height_);
},
getMonth:function() {
return _i_("a41:177"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:178"), _r_(this.year_);
},
getTitle:function() {
_i_("a41:179");
var t = "", e = this.getYear(), i = this.getMonth();
return "function" == typeof this.calendar_.options.monthTitle && (t = this.calendar_.options.monthTitle(e, i)), t || (t = this.calendar_.options.monthNames[i] + " " + e), _r_(t);
},
getHTML:function() {
_i_("a41:180");
var t = this.getMonth(), e = this.getYear(), n = i.getNumberOfDaysInMonth(t, e), a = 1, s = new Date(e, t, 1).getDay(), r = "";
this.calendar_.options.sundayFirst || (s = (s + 6) % 7), r += '<div class="c2-month" style="width:' + this.calendar_.options.monthWidth + 'px;" data-id="' + this.id() + '">', r += '<table class="c2-month-table">', r += "<thead>", r += '<tr class="c2-month-header"><th colspan="7" class="c2-month-header-monthname">' + this.getTitle() + "</th></tr>", r += "<tr>";
for (var o = 0; 6 >= o; o++) r += '<td class="c2-month-header-dayname">', r += this.calendar_.options.dayNames[o], r += "</td>";
r += "</tr>", r += "</thead>", r += "<tbody>", r += "<tr>";
for (var o = 0; 9 > o; o++) {
for (var _ = 0; 6 >= _; _++) n >= a && (o > 0 || _ >= s) ? (r += this.calendar_.createDay(e, t, a, this.calendar_).getHTML(), a++) :r += "<td></td>";
if (a > n) break;
r += "</tr><tr>";
}
return r += "</tr>", r += "</tbody>", r += "</table>", r += '<div class="c2-month__separator"></div>', r += "</div>", _r_(r);
}
}), _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
_i_("a41:12"), n.fn.calendar2 = function() {
_i_("a41:50"), i.Controller_ = function() {
_i_("a41:189"), this.instances_ = [], _r_();
}, i.Controller_.prototype.createCalendar = function(t, e) {
_i_("a41:190");
var n = new i.Calendar(t, e);
return this.addCalendar(n), _r_(n);
}, i.Controller_.prototype.addCalendar = function(t) {
return _i_("a41:191"), this.instances_.push(t), _r_(t);
}, i.Controller_.prototype.getCalendars = function() {
return _i_("a41:192"), _r_(this.instances_);
}, i.Controller_.prototype.each = function(t) {
if (_i_("a41:193"), "function" == typeof t) for (var e = 0; e < this.instances_.length && t.call(this.instances_[e], this.instances_[e]) !== !1; e++) ;
return _r_(this.instances_);
};
var t = i.controller = new i.Controller_();
return _r_(function(e, a) {
if (_i_("a41:188"), "all" === e) return _r_(t.getCalendars());
if ("each" === e) return _r_(t.each(a));
if ("show" === e) return _r_(t.each(function() {
_i_("a41:211"), this.show(), _r_();
}));
if ("hide" === e) return _r_(t.each(function() {
_i_("a41:213"), this.hide(), _r_();
}));
var s = e;
return _r_(this.each(function() {
_i_("a41:214");
var e = n(this), a = e.data(), r = a.calendar2;
a.calendar2Title && (s.title = a.calendar2Title), r ? r.setOptions(s) :t.createCalendar(e, n.extend({}, i.defaults, s, a)), _r_();
}));
});
}(), n(function() {
_i_("a41:44"), n(".calendar2").calendar2(), _r_();
}), _r_();
}(booking, booking.tools, booking.calendar2, $), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2.run = !0);