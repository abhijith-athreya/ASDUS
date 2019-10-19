jQuery(document).ready(function($) {

auto_s = (chpcsArgs.auto_scroll=="true") ? true : false;
cir = (chpcsArgs.circular=="true") ? true : false;
infinite = (chpcsArgs.infinite=="true") ? true : false;
css_transition = (chpcsArgs.css_transition=="true") ? true : false;
touch_swipe = (chpcsArgs.touch_swipe=="true") ? true : false;

$("#wa_chpc_slider").carouFredSel({
	width:'100%',
	circular: cir,
	direction: chpcsArgs.direction,
	align: 'center',
	infinite: infinite,
	auto 	: {
			play:auto_s,
			timeoutDuration:parseInt(chpcsArgs.time_out)
			},
	prev	: {	
		button	: "#wa_chpc_slider_prev",
		key		: "left"
	},
	next	: { 
		button	: "#wa_chpc_slider_next",
		key		: "right"
	},
	pagination	: "#wa_chpcs_pager",
	scroll : {
fx: chpcsArgs.fx,
easing : chpcsArgs.easing_effect,
duration: parseInt(chpcsArgs.duration),					
pauseOnHover	: true
},
transition:css_transition 
});




if ( touch_swipe ) {

			//touch swipe
			jQuery("#wa_chpc_slider").swipe({ 
			excludedElements: "button, input, select, textarea, .noSwipe", 
			swipeLeft: function() { 
			jQuery('#wa_chpc_slider').trigger('next', 'auto'); 
			}, 
			swipeRight: function() { 
			jQuery('#wa_chpc_slider').trigger('prev', 'auto'); 
			console.log("swipeRight"); 
			}, 
			tap: function(event, target) { 
			jQuery(target).closest('.chpcs_title').find('a').click(); 
			}
			});

}

});