var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

if (B.when({
condition:B.env.b_this_url_without_lang.match(/offices.html/)
}).run(function(t) {
_i_("915:1");
var n = "offices-continents__sticky_fix", i = t("jquery"), e = i(".js-show-offices-trigger"), o = i(".js-show-contact-trigger"), a = i(".offices-continents__menu");
function c(t, n) {
_i_("915:4"), i(".js-show-contact-trigger[data-country-id=" + t + "]").toggleClass("active", n), i(".js-show-contact[data-country-id=" + t + "]").toggleClass("g-hidden", !n), _r_();
}
function s(t, n) {
_i_("915:5"), i(".js-show-offices-trigger[data-country-id=" + t + "]").toggleClass("active", n), i(".js-show-offices[data-country-id=" + t + "]").toggleClass("g-hidden", !n), _r_();
}
e.click(function(t) {
_i_("915:8"), t.preventDefault();
var n = i(this).attr("data-country-id");
i(this).hasClass("active") ? s(n, !1) :(s(n, !0), c(n, !1)), _r_();
}), o.click(function(t) {
_i_("915:9"), t.preventDefault();
var n = i(this).attr("data-country-id");
i(this).hasClass("active") ? c(n, !1) :(c(n, !0), s(n, !1)), _r_();
}), i(".js-continent-filter").change(function() {
if (_i_("915:10"), i(":selected", i(this)).hasClass("js-all-continents")) i(".js-continent-container").removeClass("g-hidden"); else {
var t = i(":selected", i(this)).attr("data-continent-id");
i(".js-continent-container").addClass("g-hidden"), i(".js-continent-container[data-continent-id=" + t + "]").removeClass("g-hidden");
}
_r_();
}), i('[data-continent-filter="true"]').on("click", function(t) {
_i_("915:11");
var e = i(this), o = "active", c = e.data("continent-id"), s = i(".js-continent-container");
"all" === c ? s.removeClass("g-hidden") :s.addClass("g-hidden").siblings(".js-continent-container[data-continent-id=" + c + "]").removeClass("g-hidden"), e.parent().addClass(o).siblings().removeClass(o);
var _ = i(".offices-continents__sidebar").offset().top;
i(window).scrollTop(_), a.removeClass(n).css({
width:"auto"
}), _r_();
}), i(window).on("scroll resize", function(t) {
_i_("915:12");
var e = 5, o = i(this).scrollTop(), c = i("#footer_menu_track").offset().top - 70, s = i(".offices-continents__sidebar").offset().top, _ = o > s && o + a.height() + e < c;
_ ? a.addClass(n).css({
width:a.parent().width()
}) :a.removeClass(n).css({
width:"auto"
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_this_url_without_lang.match(/offices.html/)
}).run(function() {
_i_("915:2");
var t = "eIBbFYHIBfWbMKTTfXILMSBRe", n = B.et;
$(".js-show-contact-trigger").click(function() {
_i_("915:13"), n.customGoal(t, 1), _r_();
}), _r_();
}), B.when({
condition:B.env.b_this_url_without_lang.match(/partner-contact.html/)
}).run(function() {
_i_("915:3");
var t = "eIBbFYHIMeHGVJfTHXSJXAadBNKe", n = B.et;
$(".country_block a").click(function() {
_i_("915:14"), n.stage(t, 1), _r_();
}), _r_();
}), B.env.b_this_url_without_lang.match(/offices.html/)) {
var _hash = "eIBbFYYDIFEIUUSHOLWdLeTdfNcHe";
B.require([ "jquery", "et" ], function(t, n) {
_i_("915:6"), n.track(_hash) ? t("body").on("click", ".js-show-contact-trigger", function() {
_i_("915:17");
var n = t(".js-show-contact[data-country-id=" + t(this).attr("data-country-id") + "]");
n.find(".contact-phone--inline").each(function() {
_i_("915:21"), t(this).text(t(this).attr("data-phone-nr")), _r_();
}), _r_();
}) :t(".contact-phone--inline").each(function() {
_i_("915:18"), t(this).text(t(this).attr("data-phone-nr")), _r_();
}), t("body").on("click", ".js-show-contact-trigger", function() {
_i_("915:15"), n.customGoal(_hash, 1), _r_();
}), _r_();
});
}

if (B.env.b_this_url_without_lang.match(/partner-contact.html/)) {
var _hash = "eIBbFYdeRLeRKTTRTfIZfUUcDZQWe";
B.require([ "jquery", "et" ], function(t, n) {
_i_("915:7"), n.track(_hash) ? t("body").on("click", ".country_flag a", function() {
_i_("915:19");
var n = t(this).parents("div.country_block");
n.find(".phone_nr").each(function() {
_i_("915:22"), t(this).text(t(this).attr("data-phone-nr")), _r_();
}), _r_();
}) :t(".phone_nr").each(function() {
_i_("915:20"), t(this).text(t(this).attr("data-phone-nr")), _r_();
}), t("body").on("click", ".country_flag a", function() {
_i_("915:16"), n.customGoal(_hash, 1), _r_();
}), _r_();
});
}