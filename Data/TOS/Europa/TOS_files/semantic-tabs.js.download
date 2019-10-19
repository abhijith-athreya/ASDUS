(function ($) {
  // variables global to this plugin's scope
  var tabIndex = 0;
  var instanceId = 0;

  $.fn.ckeditortabs = function () {
    this.each(function () {
      var el = $(this);
      var current;

      var numTabs = el.find('dt').length;
      var tabHeight = 0;
      el.find('> dt').each(function () {
        var tabId = 'tab-' + instanceId + '-' + tabIndex;
        // Populate DTs with anchor links if not already present
        if (!$(this).has('a').length) {
          $(this).wrapInner('<a href="#' + tabId + '" class="tab-link" />');
        }
        $(this).css({
          'width': (100 / numTabs) + '%',
          'left': (100 / numTabs * tabIndex) + '%'
        });
        // Determine max tab height
        tabHeight = Math.max(tabHeight, $(this).find('> a').height());
        // ID attribute on DTs
        $(el.find('> dt').get(tabIndex)).attr('id', tabId);
        tabIndex = tabIndex + 1;
      });
      // Set the min-height on the tabs for consistency
      el.find('> dt > a').css('min-height', tabHeight + 'px');
      el.find('> dd').hide();

      // Remove text nodes so that display:inline-block behave nicely
      var reBlank = /^\s*$/;
      var walk = function (node) {
        var child, next;
        switch (node.nodeType) {
          case 3: // Text node
            if (reBlank.test(node.nodeValue)) {
              node.parentNode.removeChild(node);
            }
            break;
          case 1: // Element node
          case 9: // Document node
            child = node.firstChild;
            while (child) {
              next = child.nextSibling;
              walk(child);
              child = next;
            }
            break;
        }
      };
      walk($(this)[0]);

      // Initialise tab depending on current hash
      var hash = location.hash;
      if (el.find('dt a[href="' + hash + '"]').length) {
        current = el.find('a[href="' + hash + '"]').parent().addClass('current');
      } else {
        current = el.find('> dt:first').addClass('current');
      }

      // Show dd
      current.next('dd').show();

      instanceId = instanceId + 1;
    });

    // onclick event
    $('dl.ckeditor-tabber dt a.tab-link').click(function (e) {
      e.preventDefault();

      var el = $(this).parents('dl.ckeditor-tabber');
      el.find('.current').removeClass('current').next('dd').hide(0);
      var current = $(this).parent('dt').addClass('current');

      // Show dd
      current.next('dd').show(0);
      el.removeAttr('style');

      // Update hash with pushState or fallback
      if (history.pushState) {
        history.pushState({}, "", $(this).attr('href'));
      } else {
        var scrollV = document.body.scrollTop,
          scrollH = document.body.scrollLeft;
        location.hash = $(this).attr('href');
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
      }
    });
  }
})(jQuery);
(function ($) {
  Drupal.behaviors.ckeditorTabs = {
    attach: function (context, settings) {
      if (settings.ckeditor_tabber && settings.ckeditor_tabber.elements) {
        $(settings.ckeditor_tabber.elements, context).ckeditortabs();
      }
    }
  };
}(jQuery));
