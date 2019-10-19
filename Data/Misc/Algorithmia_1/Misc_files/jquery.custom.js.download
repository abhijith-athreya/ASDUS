(function(){
	"use strict";
	if( document.cookie.indexOf('retina') === -1 && 'devicePixelRatio' in window && window.devicePixelRatio === 2 ){
		document.cookie = 'retina=' + window.devicePixelRatio + ';';
		window.location.reload();
	}
})();

jQuery(document).ready(function($){

	"use strict";

	/* Responsive Menu Set up --------------------------------------------------------------------*/

	var mobileNav = $('#primary-menu').clone().attr('id', 'mobile-primary-menu');

	$('#primary-menu').supersubs({
		minWidth: 14,
		maxWidth: 14,
		extraWidth: 1
	}).superfish({
		delay: 100,
		animation: {opacity:'show'},
		animationOut:  {opacity:'hide'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});

	function stag_mobilemenu(){
		var windowWidth = $(window).width();
		if( windowWidth <= 992 ) {
			if( !$('#mobile-nav').length ) {
				$('<a id="mobile-nav" href="#mobile-primary-menu">' + stag.menuIcon + '</a>').prependTo('#site-navigation');
				mobileNav.insertAfter('#mobile-nav').wrap('<div id="mobile-primary-menu-wrap" />');
				mobile_responder();
			}
			$('.site-header').removeClass('header-shrink');
		}else{
			mobileNav.css('display', 'none');
		}
	}
	stag_mobilemenu();

	function mobile_responder(){
		$('#mobile-nav').click(function(e) {
			if( $('body').hasClass('ie8') ) {
				var mobileMenu = $('#mobile-primary-menu');
				if( mobileMenu.css('display') === 'block' ) {
					mobileMenu.css({
						'display' : 'none'
					});
				} else {
					mobileMenu.css({
						'display' : 'block',
						'height' : 'auto',
						'z-index' : 999,
						'position' : 'absolute'
					});
				}
			} else {
				$('#mobile-primary-menu').stop().slideToggle(500);
			}
			e.preventDefault();
		});
	}

	$(window).resize(function() {
		stag_mobilemenu();
	});

	if( typeof jQuery().cycle === "function" ){
		$('.testimonials-slideshow').cycle({
			slides: '> blockquote',
			pager: '> .cycle-pager'
		});
	}

	if(typeof jQuery().mixitup === "function"){
		$('#portfolio-filter').mixitup({
			effects: ["fade", "rotateX"],
			transitionSpeed: 400
		});
	}

	var all_filters = $('#all-skills').data('all-filters'),
		all_skills  = $('#all-skills').data('all-skills');

	if( all_skills && all_skills.length >= 1 ) {
		all_filters.filter(function(i,v){
			if( all_skills.indexOf(i) === -1 ) {
				$('.portfolio-filter').find("[data-filter='"+ all_filters[v] +"']").addClass('invalid');
			}
		});
	}

	$('.page-template').find('.static-content').each(function(){
		var _this = $(this),
			bgColor = _this.find('.hentry').data('bg-color'),
			bgImage = _this.find('.hentry').data('bg-image'),
			bgOpacity = parseInt(_this.find('.hentry').data('bg-opacity'), 10),
			textColor = _this.find('.hentry').data('text-color'),
			linkColor = _this.find('.hentry').data('link-color');

		_this.css({ 'background-color': bgColor, 'color' : textColor });
		_this.prepend('<div class="static-content-cover" />');

		_this.find('.static-content-cover').css({ 'background-image' : 'url('+bgImage+')', 'opacity' : bgOpacity/100, '-ms-filter': '"alpha(opacity='+bgOpacity+')"' });

		_this.find('a').css('color', linkColor);
		_this.find('h1, h2, h3, h4, h5, h6').css('color', textColor);
	});


	var AnimatedHeader = (function(){
		var docElem = document.documentElement,
			header = $('.site-header'),
			didScroll = false,
			changeHeaderOn = 300;

		function init(){
			window.addEventListener( 'scroll', function() {
				if(!didScroll){
					didScroll = true;
					setTimeout(scrollPage, 250);
				}
			}, false);

		}

		function scrollPage(){
			var sy = scrollY();
			if ( sy >= changeHeaderOn && $(window).width() >= 992 ){
				header.addClass('header-shrink');
			}else{
				header.removeClass('header-shrink');
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}


		if ( $(window).width() >= 992 ){
			init();
		}

	})();

	$(window).resize(function(){
		$('.flex-caption').each(function(){
			var _this = $(this),
				parent_height = _this.parent().height();

			_this.css('height', parent_height);
		});
	});

	$(window).resize();

});


jQuery(window).load(function() {
	"use strict";

	if(typeof jQuery.flexslider === "function"){
		jQuery('.flexslider').flexslider({
			smoothHeight: true,
			directionNav: false,
			after: function(){
				jQuery(window).resize();
			},
			start: function(){
				jQuery(window).resize();
			},
			controlsContainer: '.flex-container'
		});
	}
});
