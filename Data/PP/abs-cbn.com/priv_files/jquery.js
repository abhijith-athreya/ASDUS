/**
 * jquery.clever-infinite-scroll.js
 * Working with jQuery 2.1.4
*/
/* global define, require, history, window, document, location  */
(function(root, factory){
	"use strict";
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		factory(require("jquery"));
	} else {
		factory(root.jQuery);
	}
})(this, function($) {
	"use strict";
	/**
	 * Elements it reffers. Each page must has those selectors.
	 * The structure must be same as article1.html
	 * #contentsWrapper, .content, #next
	*/
	$.fn.cleverInfiniteScroll = function(options) {
		/**
		 * Settings
		*/
		var windowHeight = (typeof window.outerHeight !== "undefined") ? Math.max(window.outerHeight, $(window).height()) : $(window).height(),
		defaults = {
			contentsWrapperSelector: ".section-left-panel",
			contentSelector: ".full-article",
			nextSelector: "#next",
			loadImage: "loader.gif",
			offset: windowHeight,
		}, settings = $.extend(defaults, options);

		/**
		 * Private methods
		*/
		var generateHiddenSpans = function(_title, _path) {
			return "<span class='hidden-title' style='display:none'>" + _title + "</span><span class='hidden-url' style='display:none'>" + _path + "</span>";
		},
		setTitleAndHistory = function(_title, _path) {
			// Set history
			history.pushState(null, _title, _path);
			// Set title
			$("title").html(_title);
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-57B699');
		},
		
		changeTitleAndURL = function(_value) {
			// value is an element of a content user is seeing
			// Get title and path of the article page from hidden span elements
			var title = $(_value).children(".hidden-title:first").text(),
				path = $(_value).children(".hidden-url:first").text();
			if($("title:first").text() !== title) {
				// If it has changed
				$(settings.contentSelector).removeClass("active");
				$(_value).addClass("active");
				setTitleAndHistory(title, path);
				
			}
			<!--Social Share Script Start-->
							!function (e, a, f) {
								var c, b = e.getElementsByTagName(a)[0];
								if (!e.getElementById(f)) {
									c = e.createElement(a);
									c.id = f;
									c.src = "//platform.twitter.com/widgets.js";
									b.parentNode.insertBefore(c, b)
								}
							}
							(document, "script", "twitter-wjs");
							$(function () {
								function k(m) {
									//alert(location.href);
									window.open(m, "sharer", "width=625,height=300,left=350,top=200")
								}
								$("a.fb").click(function (n) {
									n.preventDefault();
									var m = "https://www.facebook.com/sharer/sharer.php?u=" + location.href;
									k(m)
								}
								);
								$("a.twitter").click(function (n) {
									n.preventDefault();
									var o = $("title:last").text();
									var m = "https://twitter.com/share?url=&text=" + o.trim().replace('|', '-') + " ";
									k(m)
									//?source=tweetbutton&text=mytexthere&url=myurl
								}
								);
								$("a.email").click(function () {
									var n = $("title").text();
									var m = $('meta[name="og:description"]').attr("content");
									$(this).attr("href", "mailto:?Subject=ABS-CBN.com&body=" + n + "%0D%0A" + m)
								}
								);
								$("a.btn-close").click(function () {
									$(".leaderboard.top").slideUp();
									$("#wrapper").animate({
										"background-position-y": "-100px"
									}
									)
								}
								);
								var j = null;
								$(".main-nav li").has("ul.dropdown").hover(function () {
									var m = $(this);
									j = setTimeout(function () {
										m.children("a").addClass("current");
										m.children("ul.dropdown").stop(true, true).slideDown("400")
									}
									, 200)
								}
								, function () {
									clearTimeout(j);
									$(this).children("a").removeClass("current");
									$(this).children("ul.dropdown").stop(true, true).slideUp("fast")
								}
								);
								$(".show-content:first").show();
								$("ul.dropdown li > a:first").addClass("hovered");
								$("ul.dropdown li > a").hover(function () {
									$(".show-content").hide();
									$("ul.dropdown li a").removeClass("hovered");
									$(this).addClass("hovered");
									$(this).next(".show-content").show()
								}
								);
								$("ul.dropdown").hover(function () {
									$(this).prev("a").addClass("drop-hover")
								}
								, function () {
									$(this).prev("a").removeClass("drop-hover")
								}
								);
								Date.prototype.customFormat = function (r) {
									var L, v, B, o, A, u, w, t, F, z, G, p, H, I, C, E, y, x, K, n, q;
									var J = this;
									v = ((L = J.getFullYear()) + "").slice(-2);
									A = (u = J.getMonth() + 1) < 10 ? ("0" + u) : u;
									o = (B = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][u - 1]).substring(0, 3);
									F = (z = J.getDate()) < 10 ? ("0" + z) : z;
									t = (w = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][J.getDay()]).substring(0, 3);
									q = (z >= 10 && z <= 20) ? "th" : ((n = z % 10) == 1) ? "st" : (n == 2) ? "nd" : (n == 3) ? "rd" : "th";
									r = r.replace("#YYYY#", L).replace("#YY#", v).replace("#MMMM#", B).replace("#MMM#", o).replace("#MM#", A).replace("#M#", u).replace("#DDDD#", w).replace("#DDD#", t).replace("#DD#", F).replace("#D#", z).replace("#th#", q);
									H = (G = J.getHours());
									if (H == 0) {
										H = 24
									}
									if (H > 12) {
										H -= 12
									}
									p = H < 10 ? ("0" + H) : H;
									K = (x = G < 12 ? "am" : "pm").toUpperCase();
									I = (C = J.getMinutes()) < 10 ? ("0" + C) : C;
									E = (y = J.getSeconds()) < 10 ? ("0" + y) : y;
									return r.replace("#hhh#", G).replace("#hh#", p).replace("#h#", H).replace("#mm#", I).replace("#m#", C).replace("#ss#", E).replace("#s#", y).replace("#ampm#", x).replace("#AMPM#", K)
								}
								;
								$.getJSON("https://api.instagram.com/v1/users/342854217/media/recent?count=5&access_token=5623115.1fb234f.d582d3feb5654785b6d7d0f1e4e6a80a&callback=?", function (n) {
									var m = $(".instagram-feed ul");
									$.each(n.data, function (t, x) {
										var s = x.caption ? x.caption.text : "";
										var w = x.images.thumbnail.url;
										var o = x.images.low_resolution.url;
										var u = x.images.standard_resolution.url;
										var y = x.caption ? x.caption.created_time + "000" : "000";
										var p = new Date(parseInt(y));
										var r = x.likes.count;
										var v = x.comments.count;
										var q = $('<li><a rel="instagramphoto" href="#" title=""><img src=""><span class="date"></span></a></li>');
										q.find("img").attr("src", (t == 0) ? o : w);
										q.find("a").attr("href", u);
										q.find("a").attr("title", s);
										q.find("span.date").text(p.customFormat("#MMM# #DD# #YYYY# | #hh#:#mm##AMPM#"));
										m.append(q)
									}
									)
								}
								);
							
								/*var f=$("#assets li");
								var e=$("#assets li").length;
								var i=$("<ul/>").appendTo($("#assets").parent());
								e=e/2+1;
								f.slice(e).appendTo(i);
								*/
							
								window.fbAsyncInit = function () {
									FB.init({
										status: true, cookie: true, xfbml: true
									}
									)
								}
								;
								(function (o) {
									var n, p = "facebook-jssdk", m = o.getElementsByTagName("script")[0];
									if (o.getElementById(p)) {
										return
									}
									n = o.createElement("script");
									n.id = p;
									n.async = true;
									n.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=241652265969060";
									m.parentNode.insertBefore(n, m)
								}
								(document));
								var l = $("#sticky-footer");
								var b = $("#wrapper").height();
								var a = $(window).height();
								$(".footer-bottom").css({
									"margin-bottom": 50
								}
								);
								if ((b - a) < 500) {
									l.removeClass("sticky");
									$(".footer-bottom").css({
										"margin-bottom": 0
									}
									)
								}
								$(window).scroll(function () {
									if ($(window).scrollTop() > 500) {
										if (!l.hasClass("scrolled")) {
											l.addClass("scrolled");
											l.stop(true, false).animate({
												bottom: 0
											}
											, 500)
										}
									} else {
										l.stop(true, false).animate({
											bottom: "-50"
										}
										, 300, function () {
											l.removeClass("scrolled")
										}
										)
									}
								}
								);
								$(".tab-content:first").show();
								$(".tabs a").click(function () {
									$(".tabs a").removeClass("active");
									$(this).addClass("active");
									$(".tab-content").hide();
									var m = $(this).attr("href");
									$(m).fadeIn();
									return false
								}
								);
								$("section.videos").find("a").append('<span class="icn-play">');
								$(".icn-video").find("a").append('<span class="icn-play">');
								$(".icn-video a img, .aside article a img").wrap('<div class="black-bg">');
								var g = Math.ceil(($(".photo-selector").children().length) / 6 - 1);
								var h = 0;
								function d() {
									var m = 98 * (6 * h);
									$(".photo-selector").animate({
										left: -m
									}
									, "slow")
								}
								$(".photo-thumb-slider .arrow-nav a.next").click(function (m) {
									m.preventDefault();
									if (h + 1 <= g) {
										h++;
										d()
									}
								}
								);
								$(".photo-thumb-slider .arrow-nav a.prev").click(function (m) {
									m.preventDefault();
									if (h - 1 >= 0) {
										h--;
										d()
									}
								}
								);
								$(".members").find("a").append('<span class="name-plate"><span class="number">');
								var c = $(".members li");
								$.each(c, function (m, n) {
									$("span.number", this).text($(this).index() + 1)
								}
								);
								$("a.top").click(function () {
									$("body").animate({
										scrollTop: $(".main-content").offset().top
									}
									, 800);
									return false
								}
								);
								$(".mentors a, .coach a").click(function () {
									var m = $(this).attr("href");
									$("body").animate({
										scrollTop: $(m).offset().top
									}
									, 800);
									return false
								}
								)
							}
							);
							<!--Social Share Links END-->
		};

		/**
		 * Initialize
		*/
		// Get current page's title and URL.
		var title = $("title").text(),
			path = $(location).attr("href"),
			documentHeight = $(document).height(),
			threshold = settings.offset,
			$contents = $(settings.contentSelector);
		// Set hidden span elements and history
		$(settings.contentSelector + ":last").append(generateHiddenSpans(title, path));
		$(settings.contentSelector).addClass("active");
		setTitleAndHistory(title, path);

		/**
		 * scroll
		*/
		var lastScroll = 0, currentScroll;
		$(window).scroll(function() {
			// Detect where you are
			window.clearTimeout($.data("this", "scrollTimer"));
			$.data(this, "scrollTimer", window.setTimeout(function() {
				// Get current scroll position
				currentScroll = $(window).scrollTop();

				// Detect whether it's scrolling up or down by comparing current scroll location and last scroll location
				if(currentScroll > lastScroll) {
					// If it's scrolling down
					$contents.each(function(key, value) {
						if($(value).offset().top + $(value).height() > currentScroll) {
							// Change title and URL
							changeTitleAndURL(value);
							// Quit each loop
							return false;
						}
					});
				} else if(currentScroll < lastScroll) {
					// If it's scrolling up
					$contents.each(function(key, value) {
						if($(value).offset().top + $(value).height() - windowHeight / 2 > currentScroll) {
							// Change title and URL
							changeTitleAndURL(value);
							// Quit each loop
							return false;
						}
					});
				} else {
					// When currentScroll == lastScroll, it does not do anything because it has not been scrolled.
				}
				// Renew last scroll position
				lastScroll = currentScroll;
			}, 200));

			if($(window).scrollTop()+ windowHeight+ threshold>=($(document).height() - $('.article-footer').height()-$('footer.main').height())){
				// If scrolling close to the bottom

				// Getting URL from settings.nextSelector
				var $url = [$(settings.nextSelector).attr("href")];
				$(settings.nextSelector).remove();
				if($url[0] !== undefined) {
					// If the page has link, call ajax
					// console.log($(settings.contentsWrapperSelector));
					if(settings.loadImage !== "") {
						$(settings.contentsWrapperSelector).append("<div class='loader' id='cis-load-img'></div>");
					}
					var photoCount = $(".photo-display").length-1;
					$.ajax({
						url: $url[0],
						dataType: "html",
						success: function(res) {
							// Get title and URL
							title = $(res).filter("title").text();
							path = $url[0];
							// Set hidden span elements and history
							$(settings.contentsWrapperSelector).append($(res).find(settings.contentSelector).append(generateHiddenSpans(title, path)));
							if($(res).find(settings.contentSelector).find(settings.nextSelector).length === 0){
								//If there is no nextSelector in the contentSelector, get next Slecter from response and append it.
								$(settings.contentsWrapperSelector).append($(res).find(settings.nextSelector));
							}
							//slider gallery
							
								//$('.full-block > iframe').wrap('<div class="video-embed"></div>');
								documentHeight = $(document).height();
								$contents = $(settings.contentSelector);
								if (rcnt < lm) {
									$("#next").attr("href", related_articles[rcnt]);
									rcnt++;
								} else {
									$("#next").remove();
								}
							if($(".photo-display").length-1 > photoCount)
							{
								photoCount = $(".photo-display").length-1;
								var mainCarousel = $(".photo-display:nth(" + photoCount + ")");
								var navCarousel = $(".slider-nav:nth(" + photoCount + ")");
								$("#cis-load-img").remove();
								//$('.full-block > div > div:last').css('padding-top','0');
								//$('.full-block:first > div > div').css('padding-top','56.3%');
								if(mainCarousel.length > 0 && navCarousel.length > 0){
									//$('.full-block:first > div > div').css('padding-top','0');
									mainCarousel.slick({
										slidesToShow: 1,
										slidesToScroll: 1,
										arrows: true,
										accessibility: false,	// disable keyboard presses
										swipe: false,			// disable swipe
										draggable: false,		// disable drag
										asNavFor: '.slider-nav',
										fade: true
										// initialSlide: getInitialSlide()
									});
									navCarousel.slick({
										slidesToShow: 6,
										slidesToScroll: 1,
										asNavFor: '.photo-display',
										focusOnSelect: true,
									// initialSlide: getInitialSlide(),
										responsive: [
											{ breakpoint: 754, settings: { slidesToShow: 4 } },
											{ breakpoint: 466, settings: { slidesToShow: 2 } }
										]
									});
									n++;
								}
							}
							function callAnalytics() {
								var dtitle = $(document).find("title").text();
								var durl = window.location.href;
								// Set history
								history.pushState(null, dtitle, durl);
								//GTM code here...
								// <!-- Google Tag Manager -->
								(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore (j,f);
								})(window,document,'script','dataLayer','GTM-57B699');
								// <!-- End Google Tag Manager -->
							}
							mainCarousel.on('afterChange', function(){
								callAnalytics();							
							});



						}
					});
				}
			}
		}); //scroll

		return (this);
	}; //$.fn.cleverInfiniteScroll
});
