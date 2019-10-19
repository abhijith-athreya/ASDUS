(function () {
  /*jslint browser: true, devel: true */

  'use strict';
  if (!document.querySelectorAll || !''.trim) {
    return;
  }

  /**
   * @summary The Bloglovin SDK
   * @description Apart from defining an API for finding and including widgets it will also find and include all widgets on page load
   * @namespace blSdk
   */

  /**
   * Create a collection/object as a property on an object, preserving any existing values on that key
   *
   * @memberOf blSdk.util
   * @param {object}  obj - the object to add the key to
   * @param {string}  key - the name of the key to add
   * @param {object} [defaultValue] - what to set as the default if no value already exists
   * @return {object} the created collection
   */
  var nsCollection = function (obj, key, defaultValue) {
      return (obj[key] = obj[key] || (defaultValue || {}));
    },
    // Shorthands
    doc = document,
    head = doc.getElementsByTagName('head')[0],
    // SDK properties
    sdk = nsCollection(window, 'blSdk'),
    /**
     * Utility methods used internally to create the SDK and the widgets
     *
     * @namespace blSdk.util
     */
    util = nsCollection(sdk, 'util'),
    /**
     * The prefix that's used for classes and "data-" attribute properties
     *
     * @name    blSdk.prefix
     * @type    {string}
     * @default 'blsdk-'
     */
    prefix = sdk.prefix = sdk.prefix || 'blsdk-',
    /**
     * The prefix that's used on the class name of the created widget iframes
     *
     * @name    blSdk.widgetPrefix
     * @type    {string}
     * @default 'bloglovin-widget-'
     */
    widgetPrefix = sdk.widgetPrefix = sdk.widgetPrefix || 'bloglovin-widget-',
    // Misc variables
    prefixRegexp = new RegExp('^(' + prefix + ')'),
    isNumeric = /^\d+$/,
    // Functions
    domReady,
    createElem,
    getProperty,
    getProperties,
    getSize,
    find,
    loadScript,
    objectForEach;

  util.nsCollection = nsCollection;

  /**
   * The domain from which to load javascript and widgets
   *
   * @name    blSdk.domain
   * @type    {string}
   * @default 'http://www.bloglovin.com'
   */
  sdk.domain = document.getElementById("bloglovin-sdk").src.indexOf("devlovin") !== -1 ?
      document.getElementById("bloglovin-sdk").src.split("/widget")[0]
      : 'https://www.bloglovin.com';

  /**
   * The path to load additional widget javascripts from
   *
   * @name    blSdk.jsUrl
   * @type    {string}
   * @default {@link blSdk.domain} + '/assets/widget/'
   */
  sdk.jsUrl = sdk.jsUrl || sdk.domain + '/widget/js/';

  /**
   * The path to load widget iframes from
   *
   * @name    blSdk.widgetUrl
   * @type    {string}
   * @default {@link blSdk.domain} + '/ngwidgets/'
   */
  sdk.widgetUrl = sdk.widgetUrl || sdk.domain + '/v2/widget';

  /* jshint ignore:start */
  /* jscs: disable */
  // From https://github.com/ded/domready
  /*!
   * domready (c) Dustin Diaz 2014 - License MIT
   */
  domReady = util.domReady = (function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}}());
  /* jscs: enable */
  /* jshint ignore:end */

  /**
   * Shorthand for creating a DOM element
   *
   * @function blSdk.util.createElem
   * @param {string}  name  - the name of the tag to create
   * @param {Object<string, string>} [attrs] - the attributes to set on the new element
   * @param {HTMLElement} [targetElem] - an element to either replace or append to
   * @param {string} [mode] - if set to 'replace' then the new element will replace targetElem
   * @return {HTMLElement} the created element
   */
  createElem = util.createElem = function (name, attrs, targetElem, mode) {
    var elem = doc.createElement(name);

    objectForEach(attrs || {}, function (key, value) {
      if (typeof value === 'object') {
        objectForEach(value, function (subKey, value) {
          elem[key][subKey] = value;
        });
      } else {
        elem[key] = value;
      }
    });

    if (targetElem) {
      if (mode === 'replace') {
        targetElem.parentNode.replaceChild(elem, targetElem);
      } else {
        targetElem.appendChild(elem);
      }
    }

    return elem;
  };

  /**
   * Shorthand for getting a "data-" property from a DOM element
   *
   * @function blSdk.util.getProperty
   * @param {HTMLElement} target - the DOM element to fetch the property from
   * @param {string} property - the property to fetch
   * @return {string|null} the value of the property
   */
  getProperty = util.getProperty = function (target, property) {
    return target.getAttribute('data-' + prefix + property);
  };

  getProperties = function (target) {
    var result = {};
    var ignore = ['href', 'type', 'logged-out', 'counter'];

    if (target.hasAttributes()) {
      var attrs = target.attributes,
        attrPrefix = 'data-' + prefix,
        attrPrefixLength = attrPrefix.length,
        name, value;

      for (var i = attrs.length - 1; i >= 0; i--) {
        value = attrs[i].value.trim();

        if (value !== '' && attrs[i].name.indexOf(attrPrefix) === 0) {
          name = attrs[i].name.substr(attrPrefixLength);
          if (name && ignore.indexOf(name) === -1) {
            result[name] = value;
          }
        }
      }
    }

    return result;
  };

  /**
   * Formats a size to a proper CSS value – trimming, appending "px" etc
   *
   * @memberOf blSdk
   * @inner
   * @param {string|number} size
   * @return {string}
   */
  getSize = function (size) {
    if (size === undefined) { return; }

    size = (size + '').trim();

    if (isNumeric.test(size)) {
      size += 'px';
    }

    return size;
  };

  /**
   * Shorthand for creating a full widget
   *
   * @function blSdk.util.createWidget
   * @param {HTMLElement} target - the DOM element to replace with the widget
   * @param {Object}  options - options to use to create the widget
   * @param {string}  options.s - the source of the widget iframe, relative to {@link blSdk.widgetUrl}
   * @param {string}  options.t - the name of the widget type – used in the class name of the widget iframe
   * @param {object} [options.q] - key/value-pairs of query parameters to add to the widget iframe URL
   * @param {string|number} [options.w] - the width of the iframe, as a valid CSS value or a plain number
   *   that will be translated to pixels. Will be overriden by the 'width' property, see {@link blSdk.util.getProperty}
   * @param {string|number} [options.h] - the height of the iframe, as a valid CSS value or a plain number
   *   that will be translated to pixels. Will be overriden by the 'height' property, see {@link blSdk.util.getProperty}
   * @return {HTMLElement}
   */
  util.createWidget = function (target, options) {
    var q = [];
    objectForEach(options.q || {}, function (key, value) {
      q.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    });

    objectForEach(getProperties(target), function (key, value) {
      q.push(encodeURIComponent('blsdk-' + key) + '=' + encodeURIComponent(value));
    });

    q = q.join('&');
    return createElem('iframe', {
      src: sdk.widgetUrl + "/" + options.s +  (q ? '?' + q : ''),
      frameborder: 0,
      scrolling: 'no',
      allowtransparency: 'true',
      className: widgetPrefix + options.t,
      style: {
        border: '0',
        width: getSize(getProperty(target, 'width') || options.w) || '',
        height: getSize(getProperty(target, 'height') || options.h) || '',
      },
    }, target, 'replace');
  };

  /**
   * @callback blSdk.util~findCallback
   * @param {*} arrayItem
   * @return {*|undefined} if a non-undefined value {@link blSdk.util.find} will stop its iteration and return the value
   */

  /**
   * An [].each()/[].some()-like method
   *
   * Iterates over the array and calls a callback on each item until the
   * callback returns a value, then it stops and returns that value.
   *
   * @function blSdk.util.find
   * @param {array|object} arrayish - an array or an array-like object
   * @param {blSdk.util~findCallback} callback - the callback that is called for each and every array item
   * @return {HTMLElement}
   */
  find = util.find = function (arrayish, callback) {
    var i = 0, length = arrayish.length, result;
    for (; i < length; i++) {
      result = callback(arrayish[i]);
      if (result !== undefined) {
        return result;
      }
    }
    return false;
  };

  /**
   * Shorthand for loading an additional javascript
   *
   * @memberOf blSdk
   * @inner
   * @param {string} name - the name of the script, relative to {@link blSdk.jsUrl}
   */
  loadScript = function (name) {
    var el = doc.createElement('script');
    el.async = 1;
    el.src = sdk.jsUrl + name + '.js?v=' + Date.now();
    head.insertBefore(el, head.lastChild);
  };

  /**
   * @callback blSdk.util~objectForEachCallback
   * @param {*} key
   * @param {*} value
   */

  /**
   * Calls a callback for each key/value-pair on the object
   *
   * @function blSdk.util.objectForEach
   * @param {object} obj
   * @param {blSdk.util~objectForEachCallback} callback - the callback that is called for each and every key/value-pair
   */
  objectForEach = util.objectForEach = function (obj, callback) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        callback(key, obj[key]);
      }
    }
  };

  // *** Widgets ***

  /** @namespace blSdk.widgets */
  var widgets = nsCollection(sdk, 'widgets'),
    /**
     * Contains all not yet initialized widget locations, keyed by widget tupe
     *
     * @name blSdk.widgets.embeds
     * @type {Object<string, HTMLElement[]>}
     */
    embeds = nsCollection(widgets, 'embeds'),
    /**
     * Contains all loaded methods to initiate widgets, keyed by widget type name
     *
     * @namespace blSdk.widgets.types
     */
    types = nsCollection(widgets, 'types'),
    callbacks = nsCollection(widgets, 'callbacks'),
    // Widget methods
    widgetsInitiate,
    widgetsFind,
    widgetsLoad;

  /**
   * Initializes all {@link blSdk.widgets.embeds} directly or by loading the scripts for new widget types
   *
   * @function blSdk.widgets.initiate
   * @param {?blSdk.widgets~loadCallback} callback
   */
  widgetsInitiate = widgets.initiate = function (callback) {
    objectForEach(embeds, function (type) {
      if (!types[type]) {
        loadScript('widget-' + type);
        if (callback) {
          callbacks[type] = callbacks[type] || [];
          callbacks[type].push(callback);
        }
      } else {
        types[type](embeds[type], callback);
      }
    });
  };

  /**
   * @summary Finds all uninitalized embeds and adds them to {@link blSdk.widgets.embeds}
   *
   * @description Finds all elements with a class name that starts with {@link blSdk.prefix} and
   * adds it as a widget with the name that's the rest of the class name.
   *
   * Will ensure that no duplicates are added to {@link blSdk.widgets.embeds}.
   *
   * To also initiate the widgets one has to follow up with a call to {@link blSdk.widgets.initiate}.
   *
   * @function blSdk.widgets.find
   * @param {HTMLElement} [container=document] - the container to look for new widgets in
   */
  widgetsFind = widgets.find = function (container) {
    find((container || doc).querySelectorAll('[class^="' + prefix + '"], [class*=" ' + prefix + '"]'), function (elem) {
      var widgetName = find(elem.className.split(' '), function (className) {
        if (prefixRegexp.test(className)) {
          return className.replace(prefixRegexp, '');
        }
      });

      if (widgetName) {
        embeds[widgetName] = embeds[widgetName] || [];
        if (embeds[widgetName].indexOf(elem) === -1) {
          embeds[widgetName].push(elem);
        }
      }
    });
  };

  /**
   * A callback that will be called once the widgets of a type has been initialized
   *
   * @callback blSdk.widgets~loadCallback
   * @param {string} type - the widget type that has been initialized
   */

  /**
   * Finds and initializes all widgets of the page
   *
   * @function blSdk.widgets.load
   * @param {blSdk.widgets~loadCallback} [callback]
   */
  widgetsLoad = widgets.load = function (callback) {
    widgetsFind();
    widgetsInitiate(callback);
  };

  domReady(function () {
    widgetsLoad();
  });
}());
