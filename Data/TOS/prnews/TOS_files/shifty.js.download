/*----------------------------------------------------------------------------------------------------------------------
         MOBILE SLIDE-MENU
         Slides the mobile menu open and closed.
----------------------------------------------------------------------------------------------------------------------*/

jQuery(document).ready(function($){
		jQuery('body').on('click', '#left-nav-wrap.active #panel-content', mobileMenuClick);

	jQuery('#mobile-menu-nav a#mobile-menu-btn').on('click', mobileMenuClick);

	function mobileMenuClick(event){

			event.preventDefault();
			$('#mobile-menu-btn').toggleClass('active');
			$('#left-nav-wrap').toggleClass('active');
			$('body').toggleClass('lock');

	}

/*----------------------------------------------------------------------------------------------------------------------
         MOBILE ACCORDION MENU ITEM
         Slides the menu when a parent menu is clicked to its child menu.
----------------------------------------------------------------------------------------------------------------------*/

	var slideAmount = 0;
	var clickedLink;
	var clickedLinkTarget;

	$('body').on('click', 'li.parent > a', menuToggle);

	$('body').on('click','.mobile-nav-back', function(event){
		slideAmount = slideAmount + 275;
		$('#left-nav > ul').css({ 'margin-left' : slideAmount });
	});

	
	function menuToggle(event){
		if($('body').css('vertical-align') === "top") {

			event.preventDefault();

			slideAmount = slideAmount - 275;
			$('#left-nav > ul').css({ 'margin-left' : slideAmount });
			$(this).parent('li').parent('ul').children('li.parent').children('ul').css({ 'display' : 'none' });
			$(this).siblings('ul').css({ 'display' : 'block' })
			if(!$(this).siblings('ul').find('.mobile-child-nav').length){
				clickedLink = $(this).text();
				clickedLinkTarget = $(this).attr('href');
				$(this).siblings('ul').prepend('<li class="mobile-child-nav mobile-only"><a class="mobile-nav-back" alt="back" href="#"></a><a class="mobile-clicked-link" href="#">' + clickedLink + '</a></li>');
			}
			$('body').off('click', 'li.parent > a');
			setTimeout(function() { $('body').on('click', 'li.parent > a', menuToggle); }, 275);
		}
	}


});

