/** 
 * jQuery.enable v0.6.0
 * 
 * @name jQuery
 * @namespace 
 *
 * @description <p>jQuery.enable.js is a small library of jQuery plugins
 *   designed to extend evented behaviors to JavaScript objects and classes.
 *   These behaviors include: custom events, Ajax, templating, caching,
 *   polling, and more.</p>
 *   <p>The cornerstone of the library is jQuery.bindable behavior. All of the
 *   other behaviors "inherit" custom event functionality from bindable.</p>
 *   
 * @author <a href="http://twitter.com/furf">Dave Furfero</a>
 */ 
(function (window, document, jQuery) {

  /**
   * Regular expression for finding whitespace
   * @type {regexp}
   */
  var rwhite = /\s+/;

  /**
   * @description <p>Trims and splits a whitespace-delimited string. A
   *   shortcut for splitting "jQuery-style" lists.</p>
   *
   * @example
   *
   * jQuery.unwhite('onDoSomething onDoSomethingElse');
   * // returns ['onDoSomething', 'onDoSomethingElse']
   *
   * @param {String} str Whitespace-delimited list
   * @return {Array} Array of list times
   */
  jQuery.unwhite = function (str) {
    str = str && jQuery.trim(str);
    return str.length ? str.split(rwhite) : [];
  };

  /**
   * @description <p>Takes a function and returns a new one that will always
   * have a particular context, omitting the event argument for improved
   * compatibility with external APIs.</p>
   * @see The documentation for
   *   <a href="http://api.jquery.com/jQuery.proxy/">jQuery.proxy</a>.
   *
   * @example
   *
   * // Bind a proxied function to an evented object
   * loadableObject.bind('onLoadSuccess', jQuery.eventProxy(function (data) {
   *   alert(data.message);
   * }));
   *
   * // Trigger the event
   * loadableObject.trigger('onLoadSuccess', [{ message: 'hello, world!' }]);
   *
   * // The event object normally passed as the first argument to callbacks
   * // is ignored and our callback alerts "hello, world!"
   *
   * @param {Function} fn
   * @param {Object} context (optional)
   */
  jQuery.eventProxy = function (fn, context) {
    var proxy = jQuery.proxy.apply(null, arguments);
    return function () {
      return proxy.apply(null, Array.prototype.slice.call(arguments, 1));
    };
  };

  /**
   * @description <p>Augments a static object or Class prototype with
   * custom event functionality.</p>
   * 
   * @example
   * // Usage with a static object
   * var dave = {
   *   name: 'dave',
   *   saySomething: function (text) {
   *     alert(this.name + ' says: ' + text);
   *     this.trigger('onSaySomething', [text]);
   *   }
   * };
   * 
   * // Add bindable behavior
   * $.bindable(dave);
   * 
   * // Add event listener using bind method
   * dave.bind('onSaySomething', function (evt, data) {
   *   console.log(this.name + ' said: ' + data);
   * });
   * 
   * dave.saySomething('hello, world!');
   * // alerts "furf says: hello, world!"
   * // logs "furf said: hello, world!"
   * 
   * @example
   * // Usage with a class
   * function Person (name) {
   *   this.name = name
   * }
   * 
   * // Add bindable behavior with custom event method
   * $.bindable(Person, 'onSaySomething');
   * 
   * Person.prototype.saySomething = function (text) {
   *   alert(this.name + ' says: ' + text);
   *   this.trigger('onSaySomething', [text]);
   * };
   * 
   * // Create instance
   * var furf = new Person('furf');
   * 
   * // Add event listener using custom event method
   * furf.onSaySomething(function (evt, data) {
   *   console.log(this.name + ' said: ' + data);
   * });
   * 
   * furf.saySomething('hello, world!');
   * // alerts "furf says: hello, world!"
   * // logs "furf said: hello, world!"
   * 
   * @param {Object|Function} obj (optional) Object to be augmented with
   *   bindable behavior. If none is supplied, a new Object will be created
   *   and augmented. If a function is supplied, its prototype will be 
   *   augmented, allowing each instance of the function access to the 
   *   bindable methods.
   * @param {String} types (optional) Whitespace-delimited list of custom
   *   events which will be exposed as convenience bind methods on the
   *   augmented object
   * @returns {Object} Augmented object
   */
  jQuery.bindable = function (obj, types) {

    // Allow instantiation without object
    if (!(obj instanceof Object)) {
      types = obj;
      obj   = {};
    }

    // Allow use of prototype for shorthanding the augmentation of classes
    obj = jQuery.isFunction(obj) ? obj.prototype : obj;

    // Augment the object with jQuery's bind, one, and unbind event methods
    jQuery.each(['bind', 'one', 'unbind'], function (i, method) {
      obj[method] = function (type, data, fn) {
        jQuery(this)[method](type, data, fn);
        return this;
      };
    });

    // The trigger event must be augmented separately because it requires a
    // new Event to prevent unexpected triggering of a method (and possibly
    // infinite recursion) when the event type matches the method name
    obj.trigger = function (type, data) {

      var event = new jQuery.Event(type),
          all   = new jQuery.Event(event);

      event.preventDefault();
      
      all.type = '*';

      if (event.type !== all.type) {
        jQuery.event.trigger(event, data, this);
      }
      
      jQuery.event.trigger(all, data, this);
      
      return this;
    };

    // Create convenience methods for event subscription which bind callbacks
    // to specified events
    if (typeof types === 'string') {
      jQuery.each(jQuery.unwhite(types), function (i, type) {
        obj[type] = function (data, fn) {
          return arguments.length ? this.bind(type, data, fn) : this.trigger(type);
        };
      });
    }

    return obj;
  };

  /**
   * @description <p>Augments a static object or Class prototype with
   * evented Ajax functionality.</p>
   * 
   * @param {Object|Function} obj (optional) Object to be augmented with
   *   loadable behavior
   * @param {Object|String} defaultCfg Default Ajax settings
   * @return {Object} Augmented object
   */
  jQuery.loadable = function (obj, defaultCfg) {

    // Allow instantiation without object
    if (typeof defaultCfg === 'undefined') {
      defaultCfg = obj;
      obj = {};
    }

    // Implement bindable behavior, adding custom methods for Ajax events
    obj = jQuery.bindable(obj, 'onLoadBeforeSend onLoadAbort onLoadSuccess onLoadError onLoadComplete');

    // Allow URL as config (shortcut)
    if (typeof defaultCfg === 'string') {
      defaultCfg = {
        url: defaultCfg
      };
    }

    jQuery.extend(obj, {

      /**
       * Merge runtime config with default config
       * Refactored out of load() for easier integration with everyone's
       * favorite sequential AJAX library...
       */
      loadableConfig: function (cfg) {

        var beforeSend, dataFilter, success, error, complete;

        // If one parameter is passed, it's either a config or a callback
        // @todo take (url, callback)
        if (typeof cfg === 'string') {
          cfg = {
            url: cfg
          };
        } else if (jQuery.isFunction(cfg)) {
          cfg = {
            success: cfg
          };
        }

        // Extend default config with runtime config
        cfg = jQuery.extend(true, {}, defaultCfg, cfg);

        // Cache configured callbacks so they can be called from wrapper
        // functions below.
        beforeSend = cfg.beforeSend;
        dataFilter = cfg.dataFilter;
        success    = cfg.success;
        error      = cfg.error;
        complete   = cfg.complete;

        // Overload each of the configured jQuery.ajax callback methods with
        // an evented wrapper function. Each wrapper function executes the
        // configured callback in the scope of the loadable object and then
        // fires the corresponding event, passing to it the return value of
        // the configured callback or the unmodified arguments if no callback
        // is supplied or the return value is undefined.
        return jQuery.extend(cfg, {

          /**
           * @param {XMLHTTPRequest} xhr
           * @param {Object} cfg
           */
          beforeSend: jQuery.proxy(function (xhr, cfg) {

            // If defined, execute the beforeSend callback and store its return
            // value for later return from this proxy function -- used for
            // aborting the XHR
            var ret = beforeSend && beforeSend.apply(this, arguments);

            // Trigger the onLoadBeforeSend event listeners
            this.trigger('onLoadBeforeSend', arguments);

            // If the request is explicitly aborted from the beforeSend
            // callback, trigger the onLoadAbort event listeners
            if (ret === false) {
              this.trigger('onLoadAbort', arguments);
            }

            return ret;

          }, this),


          // just added -- doc it up
          dataFilter: dataFilter && jQuery.proxy(dataFilter, this),


          /**
           * @param {Object} data
           * @param {String} status
           * @param {XMLHTTPRequest} xhr
           */
          success: jQuery.proxy(function (data, status, xhr) {

            var ret;

            // If defined, execute the success callback
            if (success) {
              ret = success.apply(this, arguments);
            }

            // Trigger the onLoadSuccess event listeners
            this.trigger('onLoadSuccess',  arguments);

            return ret;

          }, this),

          /**
           * @param {XMLHTTPRequest} xhr
           * @param {String} status
           * @param {Error} e
           * @todo correct param type for error?
           */
          error: jQuery.proxy(function (xhr, status, e) {

            var ret;

            // If defined, execute the error callback
            if (error) {
              ret = error.apply(this, arguments);
            }

            // Trigger the onLoadError event listeners
            this.trigger('onLoadError', arguments);

            return ret;

          }, this),

          /**
           * @param {XMLHTTPRequest} xhr
           * @param {String} status
           */
          complete: jQuery.proxy(function (xhr, status) {

            var ret;

            // If defined, execute the complete callback
            if (complete) {
              ret = complete.apply(this, arguments);
            }

            // Trigger the onLoadComplete event listeners
            this.trigger('onLoadComplete', arguments);

            return ret;

          }, this)
        });
      },

      /**
       * Execute the XMLHTTPRequest
       * @param {Object} cfg Overload jQuery.ajax configuration object
       */
      load: function (cfg) {
        return jQuery.ajax(this.loadableConfig(cfg));
      }

    });

    return obj;
  };

  /**
   * jQuery.renderable
   *
   * @param {Object|Function} obj (optional) Object to be augmented with renderable behavior
   * @param {String} tpl Template or URL to template file
   * @param {String|jQuery} elem (optional) Target DOM element
   * @return {Object} Augmented object
   */
  jQuery.renderable = function (obj, tpl, elem) {

    // Allow instantiation without object
    if (!(obj instanceof Object)) {
      elem = tpl;
      tpl  = obj;
      obj  = {};
    }

    // Implement bindable behavior, adding custom methods for render events
    obj = jQuery.bindable(obj, 'onBeforeRender onRender');

    // Create a jQuery target to handle DOM load
    if (typeof elem !== 'undefined') {
      elem = jQuery(elem);
    }

    // Create renderer function from supplied template
    var renderer = jQuery.isFunction(tpl) ? tpl : jQuery.template(tpl);

    // Augment the object with a render method
    obj.render = function (data, raw) {

      if (!(data instanceof Object)) {
        raw  = data;
        data = this;
      } else {
        data = jQuery.extend(true, {}, this, data);
      }

      this.trigger('onBeforeRender', [data]);

      // Force raw HTML if elem exists (saves effort)
      var ret = renderer.call(this, data, !!elem || raw);

      if (elem) {
        elem.html(ret);
      }

      this.trigger('onRender', [ret]);

      return ret;
    };

    return obj;
  };

  /**
   * jQuery.pollable
   * @todo add passing of anon function to start?
   * @param {Object|Function} obj (optional) Object to be augmented with pollable behavior
   * @return {object} Augmented object
   */
  jQuery.pollable = function (obj) {

    // Allow instantiation without object
    if (typeof obj === 'undefined') {
      obj = {};
    }

    // Implement bindable behavior, adding custom methods for pollable events
    obj = jQuery.bindable(obj, 'onStart onExecute onStop');

    // Augment the object with an pollable methods
    jQuery.extend(obj, {

      /**
       * @param {String} method
       * @return {boolean}
       */
      isExecuting: function (method) {
        var timers = jQuery(this).data('pollable.timers') || {};
        return method in timers;
      },

      /**
       * @param {String} method
       * @param {Number} interval
       * @param {Boolean} immediately
       */
      start: function (method, interval, data, immediately) {

        var self, timers;

        if (typeof data === 'boolean') {
          immediately = data;
          data = null;
        }

        data = data || [];

        if (!this.isExecuting(method) && jQuery.isFunction(this[method]) && interval > 0) {

          self   = jQuery(this);
          timers = self.data('pollable.timers') || {};

          // Store the proxy method as a property of the original method
          // for later removal
          this[method].proxy = jQuery.proxy(function () {
            this.trigger('onExecute', [method, this[method].apply(this, data)]);
          }, this);

          // Start timer and add to hash
          timers[method] = window.setInterval(this[method].proxy, interval);

          self.data('pollable.timers', timers);

          // Fire onStart event with method name
          this.trigger('onStart', [method]);

          if (immediately) {
            this[method].proxy();
          }
        }

        return this;
      },

      /**
       * @param {String} method
       */
      stop: function (method) {

        var self, timers;

        if (this.isExecuting(method)) {

          self   = jQuery(this);
          timers = self.data('pollable.timers') || {};

          // Clear timer
          window.clearInterval(timers[method]);

          // Remove timer from hash
          delete timers[method];

          // Remove proxy method from original method
          delete this[method].proxy;

          self.data('pollable.timers', timers);

          // Fire onStop event with method name
          this.trigger('onStop', [method]);
        }
        return this;
      }
    });

    return obj;
  };

  /**
   * @description <p>Augments a static object or Class prototype with timed
   * caching functionality.</p>
   *
   * @param {Object|Function} obj (optional) Object to be augmented with
   *   cacheable behavior
   * @param {Number} defaultTtl (optional) Default time-to-live for cached
   *   items
   * @return {object} Augmented object
   */
  jQuery.cacheable = function (obj, defaultTtl) {

    // Allow instantiation without object
    if (!(obj instanceof Object)) {
      defaultTtl = obj;
      obj        = {};
    }

    // Allow use of prototype for shorthanding the augmentation of classes
    obj = obj.prototype || obj;

    // I love using Infinity :)
    defaultTtl = typeof defaultTtl !== 'undefined' ? defaultTtl : Infinity;

    jQuery.extend(obj, {

      /**
       * @param {String} key
       * @param {*} value
       * @param {Number} ttl
       * @return undefined
       */
      cacheSet: function(key, value, ttl) {

        var self    = jQuery(this),
            cache   = self.data('cacheable.cache') || {},
            expires = jQuery.now() + (typeof ttl !== 'undefined' ? ttl : defaultTtl);

        cache[key] = {
          value:   value,
          expires: expires
        };

        self.data('cacheable.cache', cache);
      },

      /**
       * @param {String} key
       * @return
       */
      cacheGet: function(key) {

        var cache = jQuery(this).data('cacheable.cache') || {},
            data,
            ret;

        if (key) {

          if (key in cache) {

            data = cache[key];

            if (data.expires < jQuery.now()) {
              this.cacheUnset(key);
            } else {
              ret = data.value;
            }
          }

        } else {
          ret = cache;
        }

        return ret;
      },

      /**
       * @param {String} key
       * @return {boolean}
       */
      cacheHas: function(key) {
        var cache = jQuery(this).data('cacheable.cache');
        return (key in cache);
      },

      /**
       * @param {String} key
       * @return undefined
       */
      cacheUnset: function(key) {

        var self  = jQuery(this),
            cache = self.data('cacheable.cache');

        if (cache && key in cache) {

          cache[key] = null;
          delete cache[key];

          self.data('cacheable.cache', cache);
        }
      },

      cacheEmpty: function() {
        jQuery(this).data('cacheable.cache', {});
      }

    });

    return obj;
  };

  /**
   * jQuery.observable
   *
   * @param {Object|Function} obj Object to be augmented with observable behavior
   * @return {Object} Augmented object
   */
  jQuery.observable = function (obj) {

    // Allow instantiation without object
    if (typeof obj === 'undefined') {
      obj = {};
    }

    // Implement bindable behavior, adding custom methods for render events
    obj = jQuery.bindable(obj, 'onObserve');

    // Augment the object with observe and ignore methods
    jQuery.extend(obj, {

      observe: function (obj, namespaces) {
        obj.bind('*', jQuery.proxy(function (evt) {

          var orig = evt.originalEvent,
              type = orig.type,
              args = Array.prototype.slice.call(arguments, 1);

          if (namespace) {
            var self = this;
            jQuery.each(jQuery.unwhite(namespace), function (i, ns) {
              orig.type = type + '/' + ns;
              self.trigger(orig, args);
            });
          }

          orig.type = type + '/*';
          this.trigger(orig, args);

        }, this));
        this.trigger('onObserve', [namespace]);
        return this;
      },

      ignore: function (obj) {
        // @todo
        this.trigger('onIgnore', [namespace]);
      }
    });

    return obj;
  };

})(this, this.document, this.jQuery);
