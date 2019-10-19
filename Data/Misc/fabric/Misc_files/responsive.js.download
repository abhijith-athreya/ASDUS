jQuery(document).ready(function($) {

	if( $('.mobile-primary-toggle').length || $('.mobile-secondary-toggle').length ) {
		if(dynamik_sf_enabled) {
			var sf = $('ul.js-superfish');
		}

		$('.responsive-primary-menu-container .responsive-menu-icon').click(function() {
			if(dynamik_sf_enabled && dynamik_reveal_sub_pages) {
				sf.superfish('destroy');
			}
			$('.nav-primary').slideToggle();
			$('#nav').slideToggle();
		});

		$('.responsive-secondary-menu-container .responsive-menu-icon').click(function() {
			if(dynamik_sf_enabled && dynamik_reveal_sub_pages) {
				sf.superfish('destroy');
			}
			$('.nav-secondary').slideToggle();
			$('#subnav').slideToggle();
		});

		$(window).resize(function() {
			if(dynamik_sf_enabled && dynamik_reveal_sub_pages) {
				if(window.innerWidth <= media_query_mobile_width) {
					sf.superfish('destroy');
				} else {
					sf.superfish('init');
				}
			}
			if(window.innerWidth > media_query_mobile_width) {
				$('.nav-primary').removeAttr('style');
				$('#nav').removeAttr('style');
				$('.nav-secondary').removeAttr('style');
				$('#subnav').removeAttr('style');
			}
		});
	}

	if( $('#dropdown-nav select').length || $('#dropdown-subnav select').length ) {
		$('#dropdown-nav select').change(function() {
			window.location = $(this).find('option:selected').val();
		});

		$('#dropdown-subnav select').change(function() {
			window.location = $(this).find('option:selected').val();
		});
	}

});