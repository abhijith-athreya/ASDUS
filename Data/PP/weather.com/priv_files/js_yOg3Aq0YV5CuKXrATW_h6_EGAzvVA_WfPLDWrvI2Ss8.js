(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
(function(){
  Drupal.behaviors.tf_full_html_ckeditor_link_target = {
    attach: function(context, settings) {
      if (typeof(CKEDITOR) != 'undefined') {
        CKEDITOR.on( 'dialogDefinition', function( ev ) {
          // Take the dialog name and its definition from the event data.
          var dialogName = ev.data.name;
          var dialogDefinition = ev.data.definition;

          // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
          if ( dialogName == 'link' ) {
            // Get a reference to the "Target" tab.
            var targetTab = dialogDefinition.getContents('target');
            var target = targetTab.get('linkTargetType');
            target['default'] = '_blank';
          }
        });
      }
    }
  }
})();;
(function($){
/*
  Drupal.behaviors.tf_full_html = {
    attach: function(context, settings) {
      if (typeof(CKEDITOR) != 'undefined') {
        CKEDITOR.config.scayt_autoStartup = true;
        CKEDITOR.on( 'dialogDefinition', function( ev ) {
          // Take the dialog name and its definition from the event data.
          var dialogName = ev.data.name;
          var dialogDefinition = ev.data.definition;

          // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
          if ( dialogName == 'table' ) {
            // Get a reference to the "Link Info" tab.
            var infoTab = dialogDefinition.getContents( 'info' );
            var tableWidth = infoTab.get('txtWidth');
            tableWidth['default'] = 650;
          }
        });
      }
    }
  }
*/
})(jQuery);
;
