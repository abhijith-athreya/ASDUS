/**
 * User: Hussein Qudsi
 * Date: 3/04/2016
 * Time: 17:11
 */
/* global twc */
/*jshint -W065 */
/*Version 0.1 */
(function () {
  'use strict';

  // Event vars:
  var Events = TWC.Events;
  var TWC_SW_gmPush_ready = 'TWC_SW_gmPush_ready';
  var TWC_SW_push_allow = 'TWC_SW_push_allow';
  var TWC_SW_push_allow_confirmed = 'TWC_SW_push_allow_confirmed';
  var TWC_SW_push_allow_denied = 'TWC_SW_push_allow_denied';
  var TWC_SW_unsubscribe_confirmed = 'TWC_SW_unsubscribe_confirmed';
  var TWC_SW_push_allow_complete = 'TWC_SW_push_allow_complete';
  var unsubscribeEvent = 'TWC_push_unsub';
  var disableBodyTag = 'disableBodyTag';
  // Disabling the body tag
  var bodyDisabled = false;
  var pcoAttrs = TWC.pco.get('user') && TWC.pco.get('user').attributes;

  /**
   * Sets user PCO preference
   */
  var pcoHelper = function (updatePco) {
    var pco = TWC && TWC.pco;
    var products = TWC.pco.get('products');
    if (pco) {
      products.attributes.WebPushNotifications = products.attributes.WebPushNotifications || {};
      return function () {
        updatePco.apply(this, arguments);
        pco.set('products', products);
      };
    }
  };

  /**
   * All work done in the controller goes here in the form of well-defined functions
   */
  var _helperFnc = {
    /** Sending banner ready event */
    sendBannerEvent: function (sendEvent, value) {
      Events.getEvent(sendEvent).notify(value);
    },

    /** Tracking
     * @param browser = the browser
     * @param status = the status
     * */
    trackingEvent: function (browser, status) {
      !!(window.sc_trackAction) && window.sc_trackAction(document, ('push-notification-user-opt-' + (browser.chrome ? 'chrome:' : 'firefox:') + status));
    },

    /**
     * Pco update
     * @param status = what pco action needs
     * @param pcoString = The pco WebPushNotifications prop value setter
     * */
    updatePco: pcoHelper(function (statusAction, pcoString) {
      var WebPushNotifiObj = TWC.pco.getNodeValue("products", "WebPushNotifications");
      switch (statusAction) {
        case 'saveToken': // Saving users token in PCO product's WebPushNotifications obj
          WebPushNotifiObj.deviceToken = pcoString;
          break;
        case 'reShow': // Reshowing Alert notification banner
          delete WebPushNotifiObj.PushStatus;
          break;
        case 'denied-prompt': // User denied browsers prompt.
        case 'user-unsub': // User un-subscribed
          WebPushNotifiObj.PushStatus = pcoString;
      }
    })
  };// End of _helperFnc namespace


  /**
   * RegSW namespace
   * All work done in the controller goes here in the form of well-defined functions
   */
  var RegSW = {
    /**
     * Disable body tag
     * Disables the body tag until user interacts w/ browsers prompt
     * @param addRemove = add or remove the css disable class
     * */
    bodyTagStatus: function(){
      // Getting Body tag
      var body = document.querySelector('body');
      var child = body.children[0];
      // Making the overlay
      var overlay = document.createElement('div');
      // Styling the overlay
      overlay.style.width = 100 + '%';
      overlay.style.height = 100 + '%';
      overlay.style.position = 'fixed';
      overlay.style['zIndex'] = 5999; // plus one :)
      overlay.style.background = 'black';
      overlay.style.opacity = 0.75;
      // Returning a fnc w/ the behavior
      return function(addRemove){
        body[addRemove](overlay, child);
      };
    }(),

    /** Subscribing a user */
    subscribe: function (fromEvent) {
      var browser = pcoAttrs.browser;
      var defaultBrowserPrompt = (Notification.permission === 'default');

      // Disables the body tag until user interacts w/ browsers prompt, --only w/ chrome
      if(pcoAttrs && browser.chrome && Notification.permission === 'default'){
        bodyDisabled = true;
        RegSW.bodyTagStatus('insertBefore');
      }

      navigator.serviceWorker.getRegistration()
        .then(function (reg) {
          if (!reg) {
            throw new Error('[ServiceWorker]: Registration is undefined');
          }

          return reg.pushManager.getSubscription();
        })
        .then(function (pushSubscription) {

          // https://developer.mozilla.org/en-US/docs/Web/API/PushManager/getSubscription
          // It returns a Promise that resolves to a PushSubscription object containing
          // details of an existing subscription. If no existing subscription exists,
          // this resolves to a null value.
          if (!pushSubscription) {
            console.debug('[ServiceWorker]: Subscription does not exist');
            console.debug('[ServiceWorker]: Subscribing user');
            return navigator.serviceWorker.getRegistration()
              .then(function (reg) {
                if (!reg) {
                  throw new Error('[ServiceWorker]: Registration is undefined');
                }

                return reg.pushManager.subscribe({userVisibleOnly: true});
              });
          }

          return pushSubscription;
        })
        .then(function (pushSubscription) {

          if (!pushSubscription) {
            throw new Error('[ServiceWorker]: Subscription does not exist');
          }

          console.debug('[ServiceWorker]: PushManager subscribed');

          return pushSubscription;
        })
        .then(function (pushSubscription) {
          var endPointURL = pushSubscription.endpoint;
          var deviceToken = endPointURL.substring(endPointURL.lastIndexOf('/') + 1);

          // Updating the body tag
          bodyDisabled && RegSW.bodyTagStatus('removeChild');
          bodyDisabled = false;

          // Profile event
          Events.getEvent(TWC_SW_push_allow_complete).notify({
            'permission': Notification.permission,
            'deviceToken': deviceToken
          });

          // Saving users token in PCO product
          _helperFnc.updatePco('saveToken', deviceToken);

          // Tracking update: WEB-7464 fix, only tracking the initial tracking
          defaultBrowserPrompt && _helperFnc.trackingEvent(browser, 'allow');

          // Sending event to manage notification page or banner
          _helperFnc.sendBannerEvent(TWC_SW_push_allow_confirmed);
        })
        .catch(function (err) {
          console.error('[ServiceWorker]: Error occurred in subscribe', err);

          // Updating the body tag
          bodyDisabled && RegSW.bodyTagStatus('removeChild');
          bodyDisabled = false;

          var permissions = Notification.permission;

          // User dismissed the browser prompt
          _helperFnc.sendBannerEvent(TWC_SW_push_allow_denied, permissions);

          switch (permissions) {
            case 'denied':

              // Pco update, user denied prompt
              _helperFnc.updatePco('denied-prompt', 'User-denied-browsers-prompt');

              // Tracking update:
              _helperFnc.trackingEvent(browser, 'block');
              break;
            case 'default':

              // Reshowing Alert notification banner
              _helperFnc.updatePco('reShow');

              // Tracking update:
              _helperFnc.trackingEvent(browser, 'close');
          }

          // Profile event
          Events.getEvent(TWC_SW_push_allow_complete).notify({
            'permission': Notification.permission,
            'deviceToken': ''
          });

        });
    },

    /** Un-subscribing a user */
    unsubscribe: function () {
      navigator.serviceWorker.getRegistration()
        .then(function (reg) {
          if (!reg) {
            throw new Error('[ServiceWorker]: Registration is undefined');
          }

          return reg.pushManager.getSubscription();
        })
        .then(function (pushSubscription) {

          if (!pushSubscription) {
            throw new Error('[ServiceWorker]: Subscription does not exist');
          }

          return pushSubscription.unsubscribe();
        })
        .then(function (event) {
          console.debug('[ServiceWorker]: PushManager unsubscribed.');

          // User has unsubscribed
          _helperFnc.updatePco('user-unsub', 'UserUnSubscribed');

          // unsubscribe confirmed
          _helperFnc.sendBannerEvent(TWC_SW_unsubscribe_confirmed);
        })
        .catch(function (err) {
          console.error('[ServiceWorker]: Error occurred in unsubscribe', err);
        });
    }

  };// End of RegSW namespace

  if ('serviceWorker' in navigator) {

    // Enable the commented after 30 days due to service-worker file renaming.
    //
    //
    // Your service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
    // See https://github.com/slightlyoff/ServiceWorker/issues/468
    // if (navigator.serviceWorker.controller) {
    //   console.debug('[ServiceWorker]:', 'Already registered!');
    //   subscribeEvents();
    // } else {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (reg) {
          if (!reg) {
            throw new Error('[ServiceWorker]: Registration is undefined');
          }

          console.debug('[ServiceWorker]: Registered!');
          subscribeEvents();
        })
        .catch(function (e) {
          console.error('[ServiceWorker]: Error during service worker registration:', e);
        });
    // }
  }

  // Listen to events after registering/verifying service worker
  function subscribeEvents() {

    console.debug('[ServiceWorker]: Ready for push notifications');

    // Notify modules that service worker is ready for push notifications
    _helperFnc.sendBannerEvent(TWC_SW_gmPush_ready);

    Events.getEvent(TWC_SW_push_allow).progress(function () {
      RegSW.subscribe();
    });
    Events.getEvent(unsubscribeEvent).progress(function () {
      RegSW.unsubscribe();
    });
  }
})();
