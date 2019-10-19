/**
 * @file
 * Initiate Owl Carousel.
 */

(function($) {

  Drupal.behaviors.owlcarousel = {
    attach: function(context, settings) {

      for (var carousel in settings.owlcarousel) {
        // Carousel instance.
        var owl = $('.' + carousel);

        // lazyLoad support.
        if (settings.owlcarousel[carousel].settings.lazyLoad) {
          var images = owl.find('img');

          $.each(images, function(i, image) {
            $(image).attr('data-src', $(image).attr('src'));
          });

          images.addClass('lazyOwl');
        }

        // Attach instance settings.
        owl.owlCarousel(settings.owlcarousel[carousel].settings);

        // Set an inline height if custom AJAX pagination is enabled;
        // otherwise replacement of carousel element causes scrolling effect.
        if (settings.owlcarousel[carousel].views.ajax_pagination) {
          var owlnav = $('.' + carousel);
          owlnav.parent().css('height', owlnav.height());

          var view = owlnav.parent().parent();
          var next = $(view).find('.pager-next a', context);
          var prev = $(view).find('.pager-previous a', context);

          // Attach Owl Carousel behaviors to pager elements.
          $(next).once('ajax', function() {
            $(next, context).click(function() {
              owlnav.trigger('owl.next');
            });
          });
          $(prev).once('ajax', function() {
            $(prev, context).click(function() {
              owlnav.trigger('owl.prev');
            });
          });
        }
      }
    }
  };

}(jQuery));
