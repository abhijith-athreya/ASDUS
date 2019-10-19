/*jslint bitwise: true, eqeqeq: true, immed: true, newcap: true, nomen: false,
 onevar: false, plusplus: false, regexp: true, undef: true, white: true, indent: 2
 browser: true */

/*global jQuery: true Drupal: true window: true document: true ThemeBuilder: true */

(function ($, window, document, undefined) {

/**
 * Respond to the jQuery UI dialogopen event.
 */
function userDialogOpen (event) {
  // The dialog.
  var $dialog = $(this);
  // Wrap the field items in a div
  $dialog.find('form')
  .children('div')
  .once('dialog-content', function (index) {
    $(this)
    .children('[class^="form"], [class^="field"], .tos-and-disclaimer, .message')
    .wrapAll($('<div>').addClass('user-fields'))
    .parent()
    .wrapAll($('<div>').addClass('auth-methods'));
  });
  $dialog
  .find('form')
  // Add Drupal Gardens attribution if it does not already exist.
  .addClass('clearfix')
  .end()
  .once('service-attribution', function(index) {
    $(this)
    .append($('<ul>', {
      html: Drupal.behaviors.gardensFeaturesUIDialog.getServiceAttribution()
    }).addClass('service-attribution'))
  })
  // Display the signin widget and trigger contentupdate to resize it.
  .trigger('contentupdate');
}

function userDialogClose (event) {
  return;
}

/**
 * Responds to the custom event 'contentupdate'.
 *
 * Resizes the dialog to accomodate its contents.
 */
function userDialogResize (event) {
  // The dialog.
  var $dialog = $(this),
  // Resize the dialog.
  dialogWidth = $dialog.outerWidth(),
  dialogPadding = $dialog.outerWidth() - $dialog.width(),
  $dialogContent = $('.ui-dialog-content', $dialog),
  contentPadding = $dialogContent.outerWidth() - $dialogContent.width(),
  $form = $dialogContent.find('#dialog-form-wrapper > form'),
  formPadding = $form.outerWidth() - $form.width(),
  width = dialogPadding + contentPadding + formPadding,
  // Add the width of the form contents to the total width.
  $formUnits = $dialogContent.find('.auth-methods').children(':visible'),
  unitLength = $formUnits.length,
  maxWidth = (document.documentElement.clientWidth * .95) / unitLength;
  if (unitLength > 1) {
    $formUnits.each(function (index) {
      var $unit = $(this);
      var totalWidth = $unit.outerWidth(true),
      outerWidth = totalWidth - $unit.width(),
      w = (totalWidth < maxWidth) ? totalWidth : maxWidth;
      // Increase the dialog width.
      width += w;
      $unit.width(w - outerWidth);
    });
  }
  else {
    width = $dialogContent.width();
  }

  var left = (document.documentElement.clientWidth - width) / 2;

  // show the dialog.
  // There is a lot of manipulation here to smooth out visual
  // changes in the dialog's content as calculations happen.
  if (unitLength > 1) {
    $dialog
    .stop(true, true)
    // These keep the dialog's height even without changing the height property.
    .css({
      'max-height': '300px',
      'min-height': '300px'
    })
    .find('form > div')
    .css({
      visibility: 'hidden'
    })
    .end()
    .animate({
      left: left,
      width: width
    },
    500, function () {
      $(this)
      .css({
        'max-height': 'none'
      })
      .find('form > div')
      .hide()
      .css({
        visibility: 'visible'
      })
      .fadeIn(500);
    });
  }
}

/**
 * Utility function to remove 'px' string from css values in jQuery
 */
function stripPX (value) {
  var index = value.indexOf('px');
  if (index === -1) {
    return Number(value);
  }
  else {
    return Number(value.substring(0, index));
  }
}

/**
 * Bind handlers to the user login and register dialogs in order to resize
 * and reposition them.
 *
 * We might expand this to most UI Dialogs eventually.
 */
Drupal.behaviors.gardensFeaturesUIDialog = {
  attach: function (context, settings) {
    // Prepare the login and register dialogs.
    $('.user-login-dialog, .user-register-form-dialog, .user-pass-dialog').once('gardensFeaturesEnhancedDialog', function (context, settings) {
      $(this)
      .bind('dialogopen.gardensFeaturesUIDialog', {context: context, settings: settings}, userDialogOpen)
      .bind('dialogclose.gardensFeaturesUIDialog', {context: context, settings: settings}, userDialogClose)
      .bind('contentupdate.gardensFeaturesUIDialog', {context: context, settings: settings}, userDialogResize);
    });
  }
};

/**
 * Get service attribution
 */
Drupal.behaviors.gardensFeaturesUIDialog.getServiceAttribution = function () {
  var isSMB = Drupal.settings.gardensFeatures.isSMB;
  var $output = $('<li>').addClass('service');
  $output.append($('<span>', {
    text: Drupal.t('Site powered by')
  }))
  $output.append($('<span>', {
    html: '&nbsp;'
  }).addClass('spacer'));
  $output.append($('<a>', {
    href: isSMB ? 'http://www.drupalgardens.com/' : Drupal.settings.gardensFeatures.siteFactoryProductPage,
    text: isSMB ? Drupal.t('Drupal Gardens') : Drupal.t('Acquia Cloud Site Factory')
  }).addClass('service-uri'));
  return $output;
}

}(jQuery, window, document));
;
