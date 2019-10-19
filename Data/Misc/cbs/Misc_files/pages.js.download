
$(document).ready(function() {

    $(".js-include").each(function(){
        var inc=$(this);
        $.get(inc.attr("title"), function(data){
            inc.replaceWith(data);
        });
    });

   $("#twitterCarousel").owlCarousel({
      items: 4,
    	jsonPath : 'feeds/tweets.json',
    	autoPlay: 5000,
        jsonSuccess : customDataSuccess
    });

    $("#intern-carousel").owlCarousel({
       items: 4,
     	autoPlay: 5000
     });

    jQuery('#ad_showcase li:not(.alwaysOpen)').hover(function(){
        jQuery(this).find('.stateIcon').addClass('open');
        jQuery(this).find('.details').animate({ 'top':'5px', 'left':'5px','width':'212px' ,'height':'169px' } );
    },function(){
        jQuery(this).find('.stateIcon').removeClass('open');
        jQuery(this).find('.details').animate({ 'top':'130px', 'left':'0px','width':'223px' ,'height':'190px'  } );
    });

    jQuery('#ad_showcase li:not(.alwaysOpen) .details, #ad_showcase li:not(.alwaysOpen) .stateIcon').click(function(){

        var width = 1250;
        if (jQuery(this).parent().find('.unitName').text() == 'Home Page Switch Over') {
            width = 1600;
        }
        var windowSize = 'width=' + width + ', height=800, scrollbars=yes';

        newwindow = window.open(jQuery(this).parent().find('.popupUrl').text(),
                /*commenting out code in case it is needed in the future. caused a problem in ie for unit names that are more than a single word
                 jQuery(this).parent().find('.unitName').text()*/
                '', windowSize);
        if(window.focus){ newwindow.focus() }
        return false;
    });

    jQuery('body.benefits .brands-container .plus').hover(function () {
        jQuery(this).find('h3').toggleClass('hidden');
    });


});