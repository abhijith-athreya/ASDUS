/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

window.Granite = window.Granite || {};

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

/**
 * A helper class providing a set of Sling-related utilities.
 * @static
 * @singleton
 * @class Granite.Sling
 */
Granite.Sling = {

        /**
         * The selector for infinite hierarchy depth when retrieving
         * repository content.
         * @static
         * @final
         * @type String
         */
        SELECTOR_INFINITY: ".infinity",

        /**
         * The parameter name for the used character set.
         * @static
         * @final
         * @type String
         */
        CHARSET: "_charset_",

        /**
         * The parameter name for the status.
         * @static
         * @final
         * @type String
         */
        STATUS: ":status",

        /**
         * The parameter value for the status type "browser".
         * @static
         * @final
         * @type String
         */
        STATUS_BROWSER: "browser",

        /**
         * The parameter name for the operation.
         * @static
         * @final
         * @type String
         */
        OPERATION: ":operation",

        /**
         * The parameter value for the delete operation.
         * @static
         * @final
         * @type String
         */
        OPERATION_DELETE: "delete",

        /**
         * The parameter value for the move operation.
         * @static
         * @final
         * @type String
         */
        OPERATION_MOVE: "move",

        /**
         * The parameter name suffix for deleting.
         * @static
         * @final
         * @type String
         */
        DELETE_SUFFIX: "@Delete",

        /**
         * The parameter name suffix for setting a type hint.
         * @static
         * @final
         * @type String
         */
        TYPEHINT_SUFFIX: "@TypeHint",

        /**
         * The parameter name suffix for copying.
         * @static
         * @final
         * @type String
         */
        COPY_SUFFIX: "@CopyFrom",

        /**
         * The parameter name suffix for moving.
         * @static
         * @final
         * @type String
         */
        MOVE_SUFFIX: "@MoveFrom",

        /**
         * The parameter name for the ordering.
         * @static
         * @final
         * @type String
         */
        ORDER: ":order",

        /**
         * The parameter name for the replace flag.
         * @static
         * @final
         * @type String
         */
        REPLACE: ":replace",

        /**
         * The parameter name for the destination flag.
         * @static
         * @final
         * @type String
         */
        DESTINATION: ":dest",

        /**
         * The parameter name for the save parameter prefix.
         * @static
         * @final
         * @type String
         */
        SAVE_PARAM_PREFIX: ":saveParamPrefix",

        /**
         * The parameter name for input fields that should
         * be ignored by Sling.
         * @static
         * @final
         * @type String
         */
        IGNORE_PARAM: ":ignore",

        /**
         * The parameter name for login requests.
         * @static
         * @final
         * @type String
         */
        REQUEST_LOGIN_PARAM: "sling:authRequestLogin",

        /**
         * Login URL
         * @static
         * @final
         * @type String
         */
        LOGIN_URL: "/system/sling/login.html",

        /**
         * Logout URL
         * @static
         * @final
         * @type String
         */
        LOGOUT_URL: "/system/sling/logout.html"
};

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */
(function (Granite, $) {
    /**
     * A helper class providing a set of general utilities.
     * @static
     * @singleton
     * @class Granite.Util
     */
    Granite.Util = (function() {

        var self = {

            /**
             * Replaces occurrences of <code>{n}</code> in the specified text with
             * the texts from the snippets.
             * <p>Example 1 (single snippet):<pre><code>
    var text = Granite.Util.patchText("{0} has signed in.", "Jack");
               </code></pre>Result 1:<pre><code>
    Jack has signed in.
               </code></pre></p>
             * <p>Example 2 (multiple snippets):<pre><code>
    var text = "{0} {1} has signed in from {2}.";
    text = Granite.Util.patchText(text, ["Jack", "McFarland", "10.0.0.99"]);
               </code></pre>Result 2:<pre><code>
    Jack McFarland has signed in from 10.0.0.99.
               </code></pre></p>
             * @static
             * @param {String} text The text
             * @param {String/String[]} snippets The text(s) replacing
             *        <code>{n}</code>
             * @return {String} The patched text
             */
            patchText: function(text, snippets) {
                if (snippets) {
                    if (!$.isArray(snippets)) {
                        text = text.replace("{0}", snippets);
                    } else {
                        for (var i=0; i < snippets.length; i++) {
                            text = text.replace(("{" + i + "}"), snippets[i]);
                        }
                    }
                }
                return text;
            },

            /**
             * Returns the top most accessible window. Check {@link setIFrameMode} to avoid security exception message
             * on WebKit browsers if this method is called in an iFrame included in a window from different domain.
             * @static
             * @return {Window} The top window
             */
            getTopWindow: function() {
                var win = window;
                if( this.iFrameTopWindow ) {
                    return this.iFrameTopWindow;
                }
                try {
                    // try to access parent
                    // win.parent.location.href throws an exception if not authorized (e.g. different location in a portlet)
                    while(win.parent && win !== win.parent && win.parent.location.href) {
                        win = win.parent;
                    }
                } catch( error) {}
                return win;
            },

            /**
             * Allows to define if Granite.Util is running in an iFrame and parent window is in another domain
             * (and optionally define what would be the top window in that case.
             * This is necessary to use {@link getTopWindow} in a iFrame on WebKit based browsers because
             * {@link getTopWindow} iterates on parent windows to find the top one which triggers a security exception
             * if one parent window is in a different domain. Exception cannot be caught but is not breaking the JS
             * execution.
             * @param {Object} topWindow (optional) The iFrame top window. Must be running on the same host to avoid
             * security exception. Defaults to window.
             */
            setIFrameMode: function(topWindow) {
                this.iFrameTopWindow = topWindow || window;
            },

            /**
             * Applies default properties if inexistent inzo the base object.
             * Child objects are merged recursively.
             * REMARK: 
             *   - objects are recursively merged
             *   - simple type obejct properties are copied over the base
             *   - arrays are cloned and override the base (no value merging)
             * 
             * @static
             * @param {Object} base object
             * @param {Object} pass objects to be copied onto the base
             * @return {Object} The base object with defaults
             */
            applyDefaults: function() {
                var override, base = arguments[0] || {};

                for (var i=1; i < arguments.length; i++) {
                    override = arguments[i];

                    for (var name in override) {
                        var value = override[name];

                        if (override.hasOwnProperty(name) && value) {

                            if (typeof value === "object" && !(value instanceof Array)) {
                                // nested object
                                base[name] = self.applyDefaults(base[name], value);
                            } else if (value instanceof Array) {
                                //override array
                                base[name] = value.slice(0);
                            } else {
                                // simple type
                                base[name] = value;
                            }
                        }
                        
                    }
                }

                return base;
            },

            /**
             * Get keycode from event
             * @param event Event
             * @returns {Number} Keycode
             */
            getKeyCode: function(event) {
                return event.keyCode ? event.keyCode : event.which;
            }

        };

        return self;

    }());

}(Granite, jQuery));
/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

(function (Granite, util, sling, $) {

    /**
     * A helper class providing a set of HTTP-related utilities.
     * @static
     * @singleton
     * @class Granite.HTTP
     */
    Granite.HTTP = (function() {
        /**
         * The context path used on the server.
         * May only be set by {@link #detectContextPath}.
         * @private
         * @type String
         */
        var contextPath = null,

        /**
         * The regular expression to detect the context path used
         * on the server using the URL of this script.
         * @private
         * @final
         * @type RegExp
         */
            SCRIPT_URL_REGEXP = /^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,

        /**
         * The regular expression to detect unescaped special characters in a path.
         * @private
         * @final
         * @type RegExp
         */
            ENCODE_PATH_REGEXP = /[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,

        /**
         * Indicates after a session timeout if a refresh has already been triggered
         * in order to avoid multiple alerts.
         * @private
         * @type String
         */
            loginRedirected = false,

            self = {};

        /**
         * Returns the scheme and authority (user, hostname, port) part of
         * the specified URL or an empty string if the URL does not include
         * that part.
         * @static
         * @param {String} url The URL
         * @return {String} The scheme and authority part
         */
        self.getSchemeAndAuthority = function (url) {
            var end;

            try {
                if (url.indexOf("://") == -1) return ""; // e.g. url was /en.html
                end = url.indexOf("/", url.indexOf("://") + 3);

                return (end == -1) ?
                    url :   // e.g. url was http://www.day.com
                    url.substring(0, end);  // e.g. url was http://www.day.com/en.html
            }
            catch (e) {
                return "";
            }
        };

        /**
         * Returns the context path used on the server.
         * @static
         * @return {String} The context path
         */
        self.getContextPath = function () {
            return contextPath;
        };

        /**
         * Detects the context path used on the server.
         * @private
         * @static
         */
        self.detectContextPath = function () {
            try {
                if (window.CQURLInfo) {
                    contextPath = CQURLInfo.contextPath || "";
                } else {
                    var scripts = document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        // in IE the first script is not the expected widgets js: loop
                        // until it is found
                        var result = SCRIPT_URL_REGEXP.exec(scripts[i].src);
                        if (result) {
                            contextPath = result[1];
                            return;
                        }
                    }
                    contextPath = "";
                }
            } catch (e) {
            }
        };

        /**
         * Makes sure the specified relative URL starts with the context path
         * used on the server. If an absolute URL is passed, it will be returned
         * as-is.
         * @static
         * @param {String} url The URL
         * @return {String} The externalized URL
         */
        self.externalize = function (url) {
            try {
                if (url.indexOf("/") == 0 && contextPath &&
                    url.indexOf(contextPath + "/") != 0) {
                    url = contextPath + url;
                }
            }
            catch (e) {
            }
            return url;
        };

        /**
         * Removes scheme, authority and context path from the specified
         * absolute URL if it has the same scheme and authority as the
         * specified document (or the current one). If a relative URL is passed,
         * the context path will be stripped if present.
         * @static
         * @param {String} url The URL
         * @param {String} doc (optional) The document
         * @return {String} The internalized URL
         */
        self.internalize = function (url, doc) {
        	if (url.charAt(0) == '/') {
                if (contextPath === url) {
                    return '';
                }
                else if (contextPath && url.indexOf(contextPath + "/") == 0) {
        			return url.substring(contextPath.length);
        		} else {
        			return url;
        		}
        	}
        	
        	if (!doc) doc = document;
            var docHost = self.getSchemeAndAuthority(doc.location.href);
            var urlHost = self.getSchemeAndAuthority(url);
            if (docHost == urlHost) {
                return url.substring(urlHost.length + (contextPath ? contextPath.length : 0));
            }
            else {
                return url;
            }
        };

        /**
         * Removes all parts but the path from the specified URL.
         * <p>Examples:<pre><code>
         /x/y.sel.html?param=abc => /x/y
         </code></pre>
         * <pre><code>
         http://www.day.com/foo/bar.html => /foo/bar
         </code></pre><p>
         * @static
         * @param {String} url The URL, may be empty. If empty <code>window.location.href</code> is taken.
         * @return {String} The path
         */
        self.getPath = function (url) {

            if (!url) {
                if (window.CQURLInfo && CQURLInfo.requestPath) {
                    return CQURLInfo.requestPath;
                } else {
                    url = window.location.pathname;
                }
            } else {
                url = self.removeParameters(url);
                url = self.removeAnchor(url);
            }

            url = self.internalize(url);
            var i = url.indexOf(".", url.lastIndexOf("/"));
            if (i != -1) {
                url = url.substring(0, i);
            }
            return url;
        };

        /**
         * Removes the anchor from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without anchor
         */
        self.removeAnchor = function (url) {
            if (url.indexOf("#") != -1) {
                return url.substring(0, url.indexOf("#"));
            }
            return url;
        };

        /**
         * Removes all parameter from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without parameters
         */
        self.removeParameters = function (url) {
            if (url.indexOf("?") != -1) {
                return url.substring(0, url.indexOf("?"));
            }
            return url;
        };

        /**
         * Encodes the path of the specified URL if it is not already encoded.
         * Path means the part of the URL before the first question mark or
         * hash sign.<br>
         * See {@link #encodePath} for details about the encoding.<br>
         * Sample:<br>
         * <code>/x/y+z.png?path=/x/y+z >> /x/y%2Bz.png?path=x/y+z</code><br>
         * Note that the sample would not work because the "+" in the request
         * parameter would be interpreted as a space. Parameters must be encoded
         * separately.
         * @param {String} url The URL to encoded
         * @return {String} The encoded URL
         */
        self.encodePathOfURI = function (url) {
            var parts, delim;
            if (url.indexOf("?") != -1) {
                parts = url.split("?");
                delim = "?";
            }
            else if (url.indexOf("#") != -1) {
                parts = url.split("#");
                delim = "#";
            }
            else {
                parts = [url];
            }
            if (ENCODE_PATH_REGEXP.test(parts[0])) {
                parts[0] = self.encodePath(parts[0]);
            }
            return parts.join(delim);
        };

        /**
         * Encodes the specified path using encodeURI. Additionally <code>+</code>,
         * <code>#</code> and <code>?</code> are encoded.<br>
         * The following characters are not encoded:<br>
         * <code>0-9 a-z A-Z</code><br>
         * <code>- _ . ! ~ * ( )</code><br>
         * <code>/ : @ & =</code><br>
         * @param {String} path The path to encode
         * @return {String} The encoded path
         */
       self.encodePath = function (path) {
            // ensure IPV6 address square brackets are not encoded - see bug #34844
            path = encodeURI(path).replace(/%5B/g, '[').replace(/%5D/g, ']');
            path = path.replace(/\+/g, "%2B");
            path = path.replace(/\?/g, "%3F");
            path = path.replace(/;/g, "%3B");
            path = path.replace(/#/g, "%23");
            path = path.replace(/=/g, "%3D");
            path = path.replace(/\$/g, "%24");
            path = path.replace(/,/g, "%2C");
            path = path.replace(/'/g, "%27");
            path = path.replace(/"/g, "%22");
            return path;
       };

        /**
        * Returns if the redirect to the login page has already been triggered.
        * @return {Boolean}
        */
        self.handleLoginRedirect = function () {
            if (!loginRedirected) {
                loginRedirected = true;
                alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
                var l = util.getTopWindow().document.location;
                l.href = self.externalize(sling.LOGIN_URL) +
                    "?resource=" + encodeURIComponent(l.pathname + l.search + l.hash);
            }
        };

        /**
        * Gets the XHR hooked URL if called in a portlet context
        * @param {String} url The URL to get
        * @param {String} method The method to use to retrieve the XHR hooked URL
        * @param {Object} params The parameters
        * @return {String} The XHR hooked URL if available, the provided URL otherwise
        */
        self.getXhrHook = function (url, method, params) {
            method = method || "GET";
            if (window.G_XHR_HOOK && $.isFunction(G_XHR_HOOK)) {
                var p = {
                    "url": url,
                    "method": method
                };
                if (params) {
                    p["params"] = params;
                }
                return G_XHR_HOOK(p);
            }
            return null;
        };

        /**
         * Evaluates and returns the body of the specified response object.
         * Alternatively, a URL can be specified, in which case it will be
         * requested using a synchornous {@link #get} in order to acquire
         * the response object.
         * @static
         * @param {Object/String} response The response object or URL
         * @return {Object} The evaluated response body
         * @since 5.3
         */
        self.eval = function(response) {
            if (typeof response != "object") {
                response = $.ajax({
                    url: response,
                    type: 'get',
                    async: false
                });
            }
            try {
                // support responseText for backward compatibility (pre 5.3)
                return eval("(" + (response.body ? response.body :
                    response.responseText) + ")");
            } catch (e) {
            }
            return null;
        };

        return self;
    }());

}(Granite, Granite.Util, Granite.Sling, jQuery));

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

(function (document, Granite, util, http, $) {
    /**
     * A helper class providing a set of utilities related to internationalization (i18n).
     *
     * <h3>Locale Priorities</h3>
     * <p>The locale is read based on the following priorities:</p>
     * <ol>
     *   <li>manually specified locale</li>
     *   <li><code>document.documentElement.lang</code></li>
     *   <li><code>Granite.I18n.LOCALE_DEFAULT</code></li>
     * </ol>
     * 
     * <h3>Dictionary Priorities</h3>
     * <p>The dictionary URL is read based on the following priorities:</p>
     * <ol>
     *   <li>manually specified URL (<code>urlPrefix</code, <code>urlSuffix</code>)</li>
     *   <li><code>data-i18n-dictionary-src</code> attribute at &lt;html&gt; element, which has the type of <a href="http://tools.ietf.org/html/rfc6570">URI Template</a> string</li>
     *   <li>The URL resolved from default <code>urlPrefix</code> and <code>urlSuffix</code></li>
     * </ol>
     * 
     * <h3>URI Template of data-i18n-dictionary-src</h3>
     * <p>It expects the variable named <code>locale</code>, which will be fetched from the locale (based on priorities above).
     * E.g. <code>&lt;html lang="en" data-i18n-dictionary-src="/libs/cq/i18n/dict.{+locale}.json"&gt;</code>.</p>
     * 
     * @static
     * @singleton
     * @class Granite.I18n
     */
    Granite.I18n = (function() {

        /**
         * The map where the dictionaries are stored under their locale.
         * @private
         * @type Object
         */
        var dicts = {},

        /**
         * The prefix for the URL used to request dictionaries from the server.
         * @private
         * @type String
         */
            urlPrefix = "/libs/cq/i18n/dict.",

        /**
         * The suffix for the URL used to request dictionaries from the server.
         * @private
         * @type String
         */
            urlSuffix = ".json",

        /**
         * The manually specified locale as a String or a function that returns the locale as a string.
         * @private
         * @static
         * @type String
         */
            manualLocale = undefined,

        /**
         * If the current locale represents pseudo translations.
         * In that case the dictionary is expected to provide just a special
         * translation pattern to automatically convert all original strings.
         */
            pseudoTranslations = false,

            languages = null,

            self = {},
            
        /**
         * Indicates if the dictionary parameters are specified manually.
         */
            manualDictionary = false,
        
            getDictionaryUrl = function(locale) {
                if (manualDictionary) {
                    return urlPrefix + locale + urlSuffix;
                }
                
                var dictionarySrc = $("html").attr("data-i18n-dictionary-src");
                
                if (!dictionarySrc) {
                    return urlPrefix + locale + urlSuffix;
                }
                
                // dictionarySrc is a URITemplate
                // Use simple string replacement for now; for more complicated scenario, please use Granite.URITemplate
                return dictionarySrc.replace("{locale}", encodeURIComponent(locale)).replace("{+locale}", locale);
            };

        /**
         * The default locale (en).
         * @static
         * @final
         * @type String
         */
        self.LOCALE_DEFAULT = "en";

        /**
         * Language code for pseudo translations.
         * @static
         * @final
         * @type String
         */
        self.PSEUDO_LANGUAGE = "zz";

        /**
         * Dictionary key for pseudo translation pattern.
         * @static
         * @final
         * @type String
         */
        self.PSEUDO_PATTERN_KEY = "_pseudoPattern_";

        /**
         * Initializes I18n with the given config options:
         * <ul>
         * <li>locale: the current locale (defaults to "en")</li>
         * <li>urlPrefix: the prefix for the URL used to request dictionaries from
         * the server (defaults to "/libs/cq/i18n/dict.")</li>
         * <li>urlSuffix: the suffix for the URL used to request dictionaries from
         * the server (defaults to ".json")</li>
         * </ul>
         * Sample config. The dictioniary would be requested from
         * "/apps/i18n/dict.fr.json":
         <code><pre>{
         "locale": "fr",
         "urlPrefix": "/apps/i18n/dict.",
         "urlSuffix": ".json"
         }</pre></code>
         * @param {Object} config The config
         */
        self.init = function (config) {
            config  = config || {};
            
            this.setLocale(config.locale);
            this.setUrlPrefix(config.urlPrefix);
            this.setUrlSuffix(config.urlSuffix);
        };

        /**
         * Sets the current locale.
         * @static
         * @param {String/Function} locale The locale or a function that returns the locale as a string
         */
        self.setLocale = function (locale) {
            if (!locale) return;
            
            manualLocale = locale;
        };

        /**
         * Returns the current locale based on the priorities.
         * @static
         * @return {String} The locale
         */
        self.getLocale = function () {
            if ($.isFunction(manualLocale)) {
                // execute function first time only and store result in currentLocale
                manualLocale = manualLocale();
            }
            
            return manualLocale || document.documentElement.lang || self.LOCALE_DEFAULT;
        };

        /**
         * Sets the prefix for the URL used to request dictionaries from
         * the server. The locale and URL suffix will be appended.
         * @static
         * @param {String} prefix The URL prefix
         */
        self.setUrlPrefix = function (prefix) {
            if (!prefix) return;
            
            urlPrefix = prefix;
            manualDictionary = true;
        };

        /**
         * Sets the suffix for the URL used to request dictionaries from
         * the server. It will be appended to the URL prefix and locale.
         * @static
         * @param {String} suffix The URL suffix
         */
        self.setUrlSuffix = function (suffix) {
            if (!suffix) return;
            
            urlSuffix = suffix;
            manualDictionary = true;
        };

        /**
         * Returns the dictionary for the specified locale. This method
         * will request the dictionary using the URL prefix, the locale,
         * and the URL suffix. If no locale is specified, the current
         * locale is used.
         * @static
         * @param {String} locale (optional) The locale
         * @return {Object} The dictionary
         */
        self.getDictionary = function (locale) {
            locale = locale || self.getLocale();
            
            if (!dicts[locale]) {
                pseudoTranslations = (locale.indexOf(self.PSEUDO_LANGUAGE) == 0);

                try {
                    var response = $.ajax(getDictionaryUrl(locale), {
                        async: false,
                        dataType: "json"
                    });
                    dicts[locale] = $.parseJSON(response.responseText);
                } catch (e) {}
                if (!dicts[locale]) {
                    dicts[locale] = {};
                }
            }
            return dicts[locale];
        };

        /**
         * Translates the specified text into the current language.
         * @static
         * @param {String} text The text to translate
         * @param {String[]} snippets The snippets replacing <code>{n}</code> (optional)
         * @param {String} note A hint for translators (optional)
         * @return {String} The translated text
         */
        self.get = function (text, snippets, note) {
            var dict, newText, lookupText;

            dict = self.getDictionary();

            // note that pseudoTranslations is initialized in the getDictionary() call above
            lookupText = pseudoTranslations ? self.PSEUDO_PATTERN_KEY :
                note ? text + " ((" + note + "))" :
                    text;
            if (dict) {
                newText = dict[lookupText];
            }
            if (!newText) {
                newText = text;
            }
            if (pseudoTranslations) {
                newText = newText.replace("{string}", text).replace("{comment}", note ? note : "");
            }
            return util.patchText(newText, snippets);
        };

        /**
         * Translates the specified text into the current language. Use this
         * method to translate String variables, e.g. data from the server.
         * @static
         * @param {String} text The text to translate
         * @param {String} note A hint for translators (optional)
         * @return {String} The translated text
         */
        self.getVar = function (text, note) {
            if (!text) {
                return null;
            }
            return self.get(text, null, note);
        };

        /**
         * Returns the available languages, including a "title" property with a display name:
         * for instance "German" for "de" or "German (Switzerland)" for "de_ch".
         * @static
         * @return {Object} An object with language codes as keys and an object with "title",
         *                  "language", "country" and "defaultCountry" members.
         */
        self.getLanguages = function () {
            if (!languages) {
                try {
                    // use overlay servlet so customers can define /apps/wcm/core/resources/languages
                    var json = http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json"); // TODO: broken!!!
                    $.each(json, function(name, lang) {
                        lang.title = self.getVar(lang.language);
                        if (lang.title && lang.country && lang.country != "*") {
                            lang.title += " ("+self.getVar(lang.country)+")";
                        }
                    });
                    languages = json;
                } catch (e) {
                    languages = {};
                }
            }
            return languages;
        };

        /**
         * Parses a language code string such as "de_CH" and returns an object with
         * language and country extracted. The delimiter can be "_" or "-".
         * @static
         * @param {String} langCode a language code such as "de" or "de_CH" or "de-ch"
         * @return {Object} an object with "code" ("de_CH"), "language" ("de") and "country" ("CH")
         *                  (or null if langCode was null)
         */
        self.parseLocale = function (langCode) {
            if (!langCode) {
                return null;
            }
            var pos = langCode.indexOf("_");
            if (pos < 0) {
                pos = langCode.indexOf("-");
            }

            var language, country;
            if (pos < 0) {
                language = langCode;
                country = null;
            } else {
                language = langCode.substring(0, pos);
                country = langCode.substring(pos + 1);
            }
            return {
                code: langCode,
                language: language,
                country: country
            };
        };

        return self;

    }());

}(document, Granite, Granite.Util, Granite.HTTP, jQuery));

/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */

/**
 * Implements the "Adobe Dynamic Touch Indicator" that tracks touch events and displays a visual indicator for
 * screen sharing and presentation purposes.
 *
 * To enable it call <code>Granite.TouchIndicator.init()</code> e.g. on document ready:
 * <pre><code>

 Granite.$(document).ready(function() {
     Granite.TouchIndicator.init();
 });

 </code></pre>
 *
 * AdobePatentID="2631US01"
 */
(function (Granite, $) {

    var touchIndicator = function() {

        var CSS = {
            "visibility": "hidden",
            "position": "absolute", // fixed would be better, but flickers on ipad while scrolling
            "width": "30px",
            "height": "30px",
            "-webkit-border-radius": "20px",
            "border-radius": "20px",
            "border": "5px solid orange",
            "-webkit-user-select": "none",
            "user-select": "none",
            "opacity": "0.5",
            "z-index": "2000",
            "pointer-events": "none"
        };

        var used = {};

        var unused = [];

        return {
            debugWithMouse: false,

            init: function() {
                var self = this;

                $(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator", function(e) {
                    var touches = e.originalEvent.touches;
                    self.update(touches);
                    return true;
                });

                if (this.debugWithMouse) {
                    $(document).on("mousemove.touchindicator", function(e){
                        e.identifer = "fake";
                        self.update([e]);
                        return true;
                    });
                }
            },

            update: function(touches) {
                // go over all touch events present in the array
                var retained = {};
                for (var i = 0; i<touches.length; i++) {
                    var touch = touches[i];
                    var id = touch.identifier;

                    // check if we already have a indicator with the correct id
                    var indicator = used[id];
                    if (!indicator) {
                        // if not, check if we have an unused one
                        indicator = unused.pop();

                        // if not, create a new one and append it to the dom
                        if (!indicator) {
                            indicator = $("<div></div>").css(CSS);
                            $("body").append(indicator);
                        }
                    }

                    retained[id] = indicator;
                    indicator.offset({
                        left: touch.pageX - 20,
                        top: touch.pageY - 20
                    });
                    indicator.css("visibility", "visible");
                }

                // now hide all unused ones and stuff them in the unused array
                for (id in used) {
                    if (used.hasOwnProperty(id) && !retained[id]) {
                        indicator = used[id];
                        indicator.css("visibility", "hidden");
                        unused.push(indicator);
                    }
                }
                used = retained;
            }
        }
    };
    Granite.TouchIndicator = new touchIndicator();

}(Granite, jQuery));

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */
(function (Granite, util, http, $) {

    /**
     * A tool to determine whether any opt-out cookie is set and whether a given cookie name
     * is white-listed. The opt-out and white-list cookie names are determined by a server
     * side configuration (com.adobe.granite.security.commons.OptOutService) and provided to
     * this tool by an optionally included component (/libs/granite/security/components/optout)
     * which provides a global JSON object named <code>GraniteOptOutConfig</code>.
     *
     * @static
     * @singleton
     * @class Granite.OptOutUtil
     */
    Granite.OptOutUtil = (function () {

        var self = {};

        /**
         * Contains the names of cookies the presence of which indicates the user has opted out.
         * @private
         * @type Array
         */
        var optOutCookieNames = [];

        /**
         * Contains the names of cookies which may still be set in spite of the user having opted out.
         * @private
         * @type Array
         */
        var whitelistedCookieNames = [];

        /**
         * Initializes this tool with an opt-out configuration. The following options are supported:
         * <ul>
         *     <li>cookieNames: an array of cookie names representing opt-out cookies. Defaults to empty.</li>
         *     <li>whitelistCookieNames: an array of cookies representing white-listed cookies. Defaults to empty.</li>
         * </ul>
         * Sample config:
         * <code>
         *     <pre>
         *         {
         *         "cookieNames":["omniture_optout","cq-opt-out"],
         *         "whitelistCookieNames":["someAppCookie", "anotherImportantAppCookie"]
         *         }
         *     </pre>
         * </code>
         * @param config The opt-out configuration
         */
        self.init = function (config) {
            if (config) {
                optOutCookieNames = config.cookieNames
                        ? config.cookieNames : optOutCookieNames;
                whitelistedCookieNames = config.whitelistCookieNames
                        ? config.whitelistCookieNames : whitelistedCookieNames;
            }
        };

        /**
         * Returns the array of configured cookie names representing opt-out cookies.
         * @static
         * @return {Array} The cookie names
         */
        self.getCookieNames = function () {
            return optOutCookieNames;
        };

        /**
         * Returns the array of configured cookie names representing white-listed cookies.
         * @static
         * @return {Array} The cookie names
         */
        self.getWhitelistCookieNames = function () {
            return whitelistedCookieNames;
        };

        /**
         * Determines whether the user (browser) has elected to opt-out. This is indicated by the presence of
         * one of the cookies retrieved through #getCookieNames().
         * @return {Boolean} True if an opt-cookie was found in the browser's cookies.
         */
        self.isOptedOut = function () {
            var browserCookies = document.cookie.split(";");
            for (var i = 0; i < browserCookies.length; i++) {
                var cookie = browserCookies[i];
                var cookieName = $.trim(cookie.split("=")[0]);
                if ($.inArray(cookieName, self.getCookieNames()) > -1) {
                    return true;
                }
            }

            return false;
        };

        /**
         * Determines whether the given <code>cookieName</code> may be used to set a cookie. This is the case
         * if either opt-out is inactive (#isOptedOut() == false) or it is active and the give cookie name was
         * found in the white-list (#getWhitelistCookieNames()).
         * @param cookieName The name of the cookie to check.
         * @return {Boolean} True if a cookie of this name may be used with respect to the opt-out status.
         */
        self.maySetCookie = function (cookieName) {
            return !(self.isOptedOut() && $.inArray(cookieName, self.getWhitelistCookieNames()) === -1);
        };

        return self;

    }());

}(Granite, Granite.Util, Granite.HTTP, jQuery));
/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 *
 */


//------------------------------------------------------------------------------
// Initialize the Granite utils library

Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();

