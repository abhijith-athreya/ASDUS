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
 * The <code>_g</code> library contains all Granite component classes and utilities.
 * @static
 * @granite-class _g
 */
window._g = window._g || {};

// namespace
_g.shared = {};

// debug console
if (window.console === undefined) {
    window.console = {log:function(m){}};
}

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
 * A helper class providing a set of HTTP-related utilities.
 * @static
 * @singleton
 * @class CQ.shared.HTTP
 * @deprecated use Granite.HTTP and Granite.$#ajax instead
 */
_g.shared.HTTP = new function() {
    /**
     * Creates an empty response object.
     * @private
     * @static
     * @return {Object} The response object
     */
    var createResponse = function() {
        var response = new Object();
        response.headers = new Object();
        response.body = new Object();
        return response;
    };

    var getResponseFromXhr = function(request) {
        if (!request) return null;
        var response = createResponse();
        response.body = request.responseText;
        response.headers[_g.HTTP.HEADER_STATUS] = request.status;
        // set properties for backward compatibility (pre 5.3)
        response.responseText = request.responseText;
        response.status = request.status;
        return response;
    };

    return {
        /**
         * The extension for HTML files.
         * @static
         * @final
         * @type String
         */
        EXTENSION_HTML: ".html",

        /**
         * The extension for JSON files.
         * @static
         * @final
         * @type String
         */
        EXTENSION_JSON: ".json",

        /**
         * The extension for resources.
         * @private
         * @static
         * @final
         * @type String
         */
        EXTENSION_RES: ".res",

        /**
         * The Status header.
         * @static
         * @final
         * @type String
         */
        HEADER_STATUS: "Status",

        /**
         * The Message header.
         * @static
         * @final
         * @type String
         */
        HEADER_MESSAGE: "Message",

        /**
         * The Location header.
         * @static
         * @final
         * @type String
         */
        HEADER_LOCATION: "Location",

        /**
         * The Path header.
         * @static
         * @final
         * @type String
         */
        HEADER_PATH: "Path",

        /**
         * The parameter name for no caching.
         * @static
         * @final
         * @type String
         */
        PARAM_NO_CACHE: "cq_ck",

        /**
         * Requests the specified URL from the server using GET. The request
         * will be synchronous, unless a callback function is specified.
         * @static
         * @param {String} url The URL to request
         * @param {Function} callback (optional) The callback function which is
         *        called regardless of success or failure and is passed the following
         *        parameters:<ul>
         *        <li><b>options</b> : Object<div class="sub-desc">The parameter to the request call.</div></li>
         *        <li><b>success</b> : Boolean<div class="sub-desc">True if the request succeeded.</div></li>
         *        <li><b>response</b> : Object<div class="sub-desc">The response object.</div></li>
         *        </ul>
         * @param {Object} scope The scope for the callback (optional)
         * @param {Boolean} suppressForbiddenCheck Suppress the check if the session has timed out (optional)
         * @return {Mixed} The response object or, if the
         *         request is asynchronous, the transaction ID
         */
        get: function(url, callback, scope, suppressForbiddenCheck) {
            url = _g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url, true));

            if (callback != undefined) {
                return _g.$.ajax({
                    type: "GET",
                    url: url,
                    externalize: false,
                    encodePath: false,
                    hook: false,
                    complete: function(request, textStatus) {
                        var response = getResponseFromXhr(request);
                        if (!suppressForbiddenCheck) _g.HTTP.handleForbidden(response);
                        callback.call(scope || this,
                                this,
                                textStatus == "success",
                                response);
                    }
                });
            } else {
                try {
                    var request = _g.$.ajax({
                        type: "GET",
                        url: url,
                        async: false,
                        externalize: false,
                        encodePath: false,
                        hook: false
                    });
                    var response = getResponseFromXhr(request);
                    if (!suppressForbiddenCheck) _g.HTTP.handleForbidden(response);
                    return response;
                } catch (e) {
                    return null;
                }
            }
        },

        /**
         * Requests the specified URL from the server using POST. The request
         * will be synchronous, unless a callback function is specified.
         * The returned response object looks like this:
         * <pre><code>{ headers: { "Status": 200, ... } }</code></pre>
         * See constants above for all supported headers.
         * @static
         * @param {String} url The URL to request
         * @param {Function} callback (optional) The callback function which is
         *        called regardless of success or failure and is passed the following
         *        parameters:<ul>
         *        <li><b>options</b> : Object<div class="sub-desc">The parameter to the request call.</div></li>
         *        <li><b>success</b> : Boolean<div class="sub-desc">True if the request succeeded.</div></li>
         *        <li><b>xhr</b> : Object<div class="sub-desc">The XMLHttpRequest object containing the response data.
         *        See <a href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</a> for details about
         *        accessing elements of the response.</div></li>
         *        <li><b>response</b> : Object<div class="sub-desc">The response object.<br>
         *        <i>Added in CQ 5.3</i></div></li>
         *        </ul>
         * @param {Object} params The parameters
         * @param {Object} scope The scope for the callback
         * @param {Boolean} suppressErrorMsg Suppress the error msg notification
         * @param {Boolean} suppressForbiddenCheck Suppress the check if the session has timed out (optional)
         * @return {Mixed} The response object or, if the request is
         *         asynchronous, the transaction ID
         */
        post: function(url, callback, params, scope, suppressErrorMsg, suppressForbiddenCheck) {
            url = _g.HTTP.externalize(url, true);

            var hook = _g.HTTP.getXhrHook(url, "POST", params);
            if (hook) {
                url = hook.url;
                params = hook.params;
            }

            if (callback != undefined) {
                return _g.$.ajax({
                    type: "POST",
                    url: url,
                    data: params,
                    externalize: false,
                    encodePath: false,
                    hook: false,
                    complete: function(request, textStatus) {
                        var response = _g.HTTP.buildPostResponseFromHTML(request.responseText);
                        if (!suppressForbiddenCheck) _g.HTTP.handleForbidden(request);
                        callback.call(scope || this,
                                this,
                                textStatus == "success",
                                response);
                    }
                });
            } else {
                try {
                    var request = _g.$.ajax({
                        type: "POST",
                        url: url,
                        data: params,
                        async: false,
                        externalize: false,
                        encodePath: false,
                        hook: false
                    });
                    var response = _g.HTTP.buildPostResponseFromHTML(request.responseText);
                    if (!suppressForbiddenCheck) _g.HTTP.handleForbidden(request);
                    return response;
                } catch (e) {
                    return null;
                }
            }
        },

        /**
         * Returns the value of the parameter with the specified name
         * in the URL. Only the first value will be considered.
         * Values will be URL-decoded.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter
         * @return {String} The value
         */
        getParameter: function(url, name) {
            var params = _g.HTTP.getParameters(url, name);
            return params != null ? params[0] : null;
        },

        /**
         * Returns the values of the parameters with the specified name
         * in the URL. Values will be URL-decoded.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter
         * @return {String[]} The values
         */
        getParameters: function(url, name) {
            var values = [];
            if (!name) {
                return null;
            }
            name = encodeURIComponent(name);
            if (url.indexOf("?") == -1) {
                return null;
            }
            if (url.indexOf("#") != -1) {
                url = url.substring(0, url.indexOf("#"));
            }
            var query = url.substring(url.indexOf("?") + 1);
            if (query.indexOf(name) == -1) {
                return null;
            }
            var queryPts = query.split("&");
            for (var i = 0; i < queryPts.length; i++) {
                var paramPts = queryPts[i].split("=");
                if (paramPts[0] == name) {
                    values.push(paramPts.length > 1 ? decodeURIComponent(paramPts[1]) : "");
                }
            }
            return values.length > 0 ? values : null;
        },

        /**
         * Adds a parameter to the specified URL. The parameter name and
         * value will be URL-endcoded.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter
         * @param {String/String[]} value The value of the parameter.
         *        Since 5.3, an array of strings can be passed
         * @return {String} The URL with the new parameter
         */
        addParameter: function(url, name, value) {
            if (value && value instanceof Array) {
                for (var i = 0; i < value.length; i++) {
                    url = _g.HTTP.addParameter(url, name, value[i]);
                }
                return url;
            }
            var separator = url.indexOf("?") == -1 ? "?" : "&";
            var hashIdx = url.indexOf("#");
            if (hashIdx < 0) {
                return url + separator + encodeURIComponent(name) + "=" + encodeURIComponent(value);
            } else {
                var hash = url.substring(hashIdx);
                url = url.substring(0, hashIdx);
                return url + separator + encodeURIComponent(name) + "=" + encodeURIComponent(value) + hash;
            }
        },

        /**
         * Overwrites a parameter in the specified URL. The parameter name
         * and value will be URL-endcoded.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter
         * @param {String} value The value of the parameter
         * @return {String} The URL with the new parameter
         */
        setParameter: function(url, name, value) {
            url = _g.HTTP.removeParameter(url, name);
            return _g.HTTP.addParameter(url, name, value);
        },

        /**
         * Removes a parameter from the specified URL.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter to remove
         * @return {String} The URL without the parameter
         */
        removeParameter: function(url, name) {
            var pattern0 = "?" + encodeURIComponent(name) + "=";
            var pattern1 = "&" + encodeURIComponent(name) + "=";
            var pattern;
            if (url.indexOf(pattern0) != -1) {
                pattern = pattern0;
            }
            else if (url.indexOf(pattern1) != -1) {
                pattern = pattern1;
            }
            else {
                return url;
            }

            var indexCutStart = url.indexOf(pattern);
            var begin = url.substring(0, indexCutStart);

            var indexCutEnd = url.indexOf("&", indexCutStart + 1);
            var end = "";
            if (indexCutEnd != -1) {
                end = url.substring(indexCutEnd);
                if (end.indexOf("&") == 0) {
                    end = end.replace("&", "?");
                }
            }
            return begin + end;
        },

        /**
         * Removes all parameter from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without parameters
         */
        removeParameters: Granite.HTTP.removeParameters,

        /**
         * Adds the specified selector to an URL.
         * @param {String} url The URL. The URL must contain a extension and
         *                 must not contain a suffix (x.json/a/b). Anchor and
         *                 request parameters are supported.
         * @param {String} selector The name of the selector to insert
         * @param {Number} index (optional) The index of the selector. If it is "-1"
         *                 or bigger than the number of the existing selectors
         *                 the selector will be appended. Defaults to "0".
         * @return {String} The updated URL
         * @since 5.3
         */
        addSelector: function(url, selector, index) {
            if (!index) index = 0;

            // url:  /x/y.z.json?a=1#b
            // post: ?a=1#b
            // path: /x
            // main: y.z.json
            var post = ""; // string of parameters and anchor
            var pIndex = url.indexOf("?");
            if (pIndex == -1) pIndex = url.indexOf("#");
            if (pIndex != -1) {
                post = url.substring(pIndex);
                url = url.substring(0, pIndex);
            }
            var sIndex = url.lastIndexOf("/");
            var main = url.substring(sIndex); // name, selectors and extension
            if (main.indexOf("." + selector + ".") == -1) {
                var path = url.substring(0, sIndex);
                var obj = main.split(".");
                var newMain = "";
                var delim = "";
                if (index > obj.length - 2 || index == -1) {
                    // insert at last position
                    index = obj.length - 2;
                }
                for (var i = 0; i < obj.length; i++) {
                    newMain += delim + obj[i];
                    delim = ".";
                    if (index == i) {
                        newMain += delim + selector;
                    }
                }
                return path + newMain + post;
            }
            else {
                return url;
            }
        },

        /**
         * Replaces the selector at the given index position. If no selector exists
         * at the index position, no change is made to the URL.
         *
         * @param {String} url The URL.
         * @param {String} selector The value with which to replace the selector.
         * @param {Number} index The index of the selector to set/replace.
         * @return {String} The URL with the selector replaced.
         * @since 5.4
         */
        setSelector: function(url, selector, index) {

            var post = "";
            var pIndex = url.indexOf("?");
            if (pIndex == -1) pIndex = url.indexOf("#");
            if (pIndex != -1) {
                post = url.substring(pIndex);
                url = url.substring(0, pIndex);
            }

            var selectors = _g.HTTP.getSelectors(url);
            var ext = url.substring(url.lastIndexOf("."));
            // cut extension
            url = url.substring(0, url.lastIndexOf("."));
            // cut selectors
            var fragment = (selectors.length > 0) ? url.replace("." + selectors.join("."), "") : url;

            if (selectors.length > 0) {
                for (var i = 0; i < selectors.length; i++) {
                    if (index == i) {
                        fragment += "." + selector;
                    } else {
                        fragment += "." + selectors[i]
                    }
                }
            } else {
                fragment += "." + selector;
            }

            return fragment + ext + post;
        },

        /**
         * Adds the specified selectors to an URL.
         * @param {String} url The URL. The URL must contain a extension and
         *                 must not contain a suffix (x.json/a/b). Anchor and
         *                 request parameters are supported.
         * @param {String[]} selectors The name of the selectors to insert
         * @return {String} The updated URL
         * @since 5.5
         */
        addSelectors: function(url, selectors) {
            var res = url;
            if( url && selectors && selectors.length) {
                for(var i=0;i< selectors.length;i++) {
                    res = _g.HTTP.addSelector(res, selectors[i], i);
                }
            }
            return res;
        },

        /**
         * Returns the anchor part of the URL.
         * @static
         * @param {String} url The URL
         * @return {String} The anchor
         */
        getAnchor: function(url) {
            if (url.indexOf("#") != -1) {
                return url.substring(url.indexOf("#") + 1);
            }
            return "";
        },

        /**
         * Sets the anchor of the specified URL.
         * @static
         * @param {String} url The URL
         * @param {String} anchor The anchor
         * @return {String} The URL with anchor
         */
        setAnchor: function(url, anchor) {
            return _g.HTTP.removeAnchor(url) + "#" + anchor;
        },

        /**
         * Removes the anchor from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without anchor
         */
        removeAnchor: Granite.HTTP.removeAnchor,

        /**
         * Prevents caching by adding a timestamp to the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL with timestamp
         */
        noCaching: function(url) {
            return _g.HTTP.setParameter(url, _g.HTTP.PARAM_NO_CACHE, new Date().valueOf());
        },

        /**
         * Builds a response object using the specified node and its child nodes.
         * The content of each node with an ID will be set as a response header.
         * @private
         * @static
         * @param {Node} node The content document or the node to parse
         * @param {Object} response The response object to use (optional)
         * @return {Object} The response object
         */
        buildPostResponseFromNode: function(node, response) {
            if (!node) {
                return null;
            }
            if (response == undefined) {
                response = createResponse();
            }

            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                if (child.tagName) {
                    if (child.id) {
                        if (child.href) {
                            response.headers[child.id] = child.href;
                        }
                        else {
                            response.headers[child.id] = child.innerHTML;
                        }
                    }
                    response = _g.HTTP.buildPostResponseFromNode(child, response);
                }
            }
            return response;
        },

        /**
         * Builds a response object using the specified HTML string. The
         * content of each node with an ID will be set as a response header.
         * @private
         * @static
         * @param {String} html The HTML string
         * @return {Object} The response object
         */
        buildPostResponseFromHTML: function(html) {
            var response = createResponse();
            try {
                if (html.responseText != undefined) {
                    html = html.responseText;
                } else if (typeof html != "string") {
                    html = html.toString();
                }
                var div = document.createElement("div");
                div.innerHTML = html;
                response = _g.HTTP.buildPostResponseFromNode(div, response);
                div = null;
            } catch (e) {
            }
            return response;
        },

        /**
         * Returns the value of the cookie with the specified name.
         * @static
         * @param {String} name The name of the cookie
         * @return {String} The value of the cookie
         */
        getCookie: function(name) {
            var cname = encodeURIComponent(name) + "=";
            var dc = document.cookie;
            if (dc.length > 0) {
                var begin = dc.indexOf(cname);
                if (begin != -1) {
                    begin += cname.length;
                    var end = dc.indexOf(";", begin);
                    if (end == -1) end = dc.length;
                    return decodeURIComponent(dc.substring(begin, end));
                }
            }
            return null;
        },

        /**
         * Sets the value of the cookie with the specified name.
         * @static
         * @param {String} name The name of the cookie
         * @param {String} value The value of the cookie
         * @param {String} path (optional) The server path the cookie applies to
         * @param {Number} days (optional) The number of days the cookie will live
         * @param {String} domain (optional) The server domain
         * @param {Boolean} secure (optional) True if the
         *        connection is secure
         * @return {String} The value of the cookie
         */
        setCookie: function(name, value, path, days, domain, secure) {
            if (typeof(days) != "number") days = 7;
            var date;
            if (days > 0) {
                date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            } else {
                date = new Date(0);
            }
            document.cookie = encodeURIComponent(name) + "=" +
                    encodeURIComponent(value) + "; " +
                    (days != 0 ? "expires=" + date.toGMTString() + "; " : "") +
                    (domain ? "domain=" + domain + "; " : "") +
                    (path ? "path=" + path : "") +
                    (secure ? "; secure" : "");
            return value;
        },

        /**
         * Clears the cookie with the specified name.
         * @static
         * @param {String} name The name of the cookie
         * @param {String} path (optional) The server path the cookie applies to
         * @param {String} domain (optional) The server domain
         * @param {Boolean} secure (optional) True if the
         *        connection is secure
         */
        clearCookie : function(name, path, domain, secure) {
            _g.HTTP.setCookie(name, "null", path || "", -1, domain || "", secure || "");
        },

        /**
         * Returns the scheme and authority (user, hostname, port) part of
         * the specified URL or an empty string if the URL does not include
         * that part.
         * @static
         * @param {String} url The URL
         * @return {String} The scheme and authority part
         */
        getSchemeAndAuthority: Granite.HTTP.getSchemeAndAuthority,

        /**
         * Returns the context path used on the server.
         * @static
         * @return {String} The context path
         * @since 5.3
         */
        getContextPath: Granite.HTTP.getContextPath,

        /**
         * Makes sure the specified relative URL starts with the context path
         * used on the server. If an absolute URL is passed, it will be returned
         * as-is.
         * @static
         * @param {String} url The URL
         * @param {boolean} encode true to encode the path of the URL (optional)
         * @return {String} The externalized URL
         * @since 5.3
         */
        externalize: function(url, encode) {
            // check if URL is already XHR_HOOKED and assume that the externalization has
            // already been applied if so (externalizing an already hooked URL will break
            // it in several/most cases!)
            if ((typeof G_IS_HOOKED != "undefined") && G_IS_HOOKED(url)) {
                return url;
            }
            if (encode) url = _g.HTTP.encodePathOfURI(url);

            // Granite.HTTP.externalize does nor hooked check nor encoding
            url = Granite.HTTP.externalize(url);

            return url;
        },

        /**
         * Removes scheme, authority and context path from the specified
         * absolute URL if it has the same scheme and authority as the
         * specified document (or the current one).
         * @static
         * @param {String} url The URL
         * @param {String} doc (optional) The document
         * @return {String} The internalized URL
         */
        internalize: Granite.HTTP.internalize,

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
         * @since 5.3
         */
        getPath: Granite.HTTP.getPath,

        /**
         * Returns the current request suffix as provided by CQURLInfo.suffix.
         *
         * @static
         * @return {String} The suffix
         *
         * @since 5.5
         */
        getSuffix: function() {
            if (window.CQURLInfo && CQURLInfo.suffix) {
                return CQURLInfo.suffix;
            }
            return null;
        },

        /**
         * Returns an array with the selectors present in the given url.
         * If no selectors are present, an empty array is returned.
         * @static
         * @param {String} url The URL, optional. If no url is provided, the
         *                     selectors as provided by CQURLInfo.selectors
         *                     are taken, with a fallback to window.location.href.
         * @return {Array} An array containing the selectors or an empty
         *                 array if none were found.
         * @since 5.4
         */
        getSelectors: function(url) {

            if (!url && window.CQURLInfo) {
                if (CQURLInfo.selectors) {
                    return CQURLInfo.selectors;
                }
            }

            var selectors = [];

            url = url || window.location.href;

            url = _g.HTTP.removeParameters(url);
            url = _g.HTTP.removeAnchor(url);

            var fragment = url.substring(url.lastIndexOf("/"));
            if (fragment) {
                var split = fragment.split(".");
                if (split.length > 2) {
                    for (var i = 0; i < split.length; i++) {
                        // don't add node name and extension as selectors
                        if (i > 0 && i < split.length - 1) {
                            selectors.push(split[i]);
                        }
                    }
                }
            }

            return selectors;
        },

        /**
         * Returns the extension of an URL. This is the string
         * after the last dot until the end of the url without
         * any request parameters, anchors or suffix, for
         * example "html".
         *
         * @param {String} url The URL
         * @return {String} The URL extension (without the dot)
         *                  or an empty string if no was found.
         * @since 5.4
         */
        getExtension: function(url) {

            if (!url && window.CQURLInfo) {
                if (CQURLInfo.extension) {
                    return CQURLInfo.extension;
                }
            }

            url = url || window.location.href;

            // strip things from the end
            url = _g.HTTP.removeParameters(url);
            url = _g.HTTP.removeAnchor(url);

            // extension is everything after the last dot
            var pos = url.lastIndexOf(".");
            if (pos < 0) {
                return "";
            }

            // do not include the dot
            url = url.substring(pos + 1);

            // remove suffix if present
            pos = url.indexOf("/");
            if (pos < 0) {
                return url;
            }

            return url.substring(0, pos);
        },

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
         * @since 5.3
         */
        encodePathOfURI: Granite.HTTP.encodePathOfURI,

        /**
         * Encodes the specified path using encodeURI. Additionally <code>+</code>,
         * <code>#</code> and <code>?</code> are encoded.<br>
         * The following characters are not encoded:<br>
         * <code>0-9 a-z A-Z</code><br>
         * <code>- _ . ! ~ * ( )</code><br>
         * <code>/ : @ & =</code><br>
         * @param {String} path The path to encode
         * @return {String} The encoded path
         * @since 5.3
         */
        encodePath: Granite.HTTP.encodePath,

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
        eval: Granite.HTTP.eval,

        /**
         * Checks whether the specified status code is OK.
         * @static
         * @param {Number} status The status code
         * @return {Boolean} True if the status is OK, else false
         */
        isOkStatus: function(status) {
            try {
                return (new String(status).indexOf("2") == 0);
            } catch (e) {
                return false;
            }
        },

        /**
         * Checks if the specified response is OK.
         * The response object is expected to look like this:
         * <pre><code>{ headers: { "Status": 200, ... } }</code></pre>
         * See constants above for all supported headers.
         * @static
         * @param {Object} response The response object
         * @return {Boolean} True if the response is OK, else false
         */
        isOk: function(response) {
            try {
                return _g.HTTP.isOkStatus(
                        response.headers[_g.HTTP.HEADER_STATUS]);
            } catch (e) {
                return false;
            }
        },

        /**
         * <p>Returns if the specified response is of status 403/forbidden. If the
         * status is 403 and <code>suppressLogin</code> is undefined the document
         * is redirected to the login page.</p>
         * <p>The status is expected to be found in the "status" property of the
         * response: <code>{ "status": 403 }</code></p>
         * @param {Object} response The response
         * @param {Boolean} suppressLogin <code>true</code> to not redirect to the login page
         * @return {Boolean} <code>true</code> if the status is 403
         */
        handleForbidden: function(response, suppressLogin) {
            try {
                if (response[_g.HTTP.HEADER_STATUS.toLowerCase()] == 403) {
                    Granite.HTTP.handleLoginRedirect();
                    return true;
                }
                return false;
            } catch (e) {
                return false;
            }
        },

        /**
         * Gets the XHR hooked URL if called in a portlet context
         * @param {String} url The URL to get
         * @param {String} method The method to use to retrieve the XHR hooked URL
         * @param {Object} params The parameters
         * @return {String} The XHR hooked URL if available, the provided URL otherwise
         */
        getXhrHook: Granite.HTTP.getXhrHook,

        /**
         * Gets the XHR hooked URL if called in a portlet context
         * @param {String} url The URL to get
         * @param {String} method The method to use to retrieve the XHR hooked URL
         * @param {Object} params The parameters
         * @return {String} The XHR hooked URL if available, the provided URL otherwise
         */
        getXhrHookedURL: function(url, method, params) {
            var hook = _g.HTTP.getXhrHook(url, method, params);
            if (hook) {
                return hook.url;
            }
            return url;
        },

        /**
         * Reloads the XHR hook (portlet context)
         * @static
         * @param {String} url The URL
         * @return {String} Updated URL if reload hook function exists
         */
        reloadHook: function(url) {
            if (typeof G_RELOAD_HOOK != "undefined" && _g.$.isFunction(G_RELOAD_HOOK)) {
                if (CQURLInfo.selectorString != "") {
                    url = _g.HTTP.addSelector(url, CQURLInfo.selectorString);
                }
                url = G_RELOAD_HOOK(url) || url;
            }
            return url;
        }

    }
};

// shortcut
_g.HTTP = _g.shared.HTTP;

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
 * A helper class providing a set of general utilities.
 * @static
 * @singleton
 * @class CQ.shared.Util
 * @granite-class _g.Util
 * @deprecated
 */
_g.shared.Util = new function() {
    return {
        /**
         * Reloads the window or replaces its location with the specified URL.
         * If no window is specified, the current window will be used.
         * @static
         * @param {Window} win (optional) The window to reload
         * @param {String} url (optional) The URL
         * @param {String} preventHistory (optional) Prevent history
         */
        reload: function(win, url, preventHistory) {
            if (!win) win = window;
            if (!url) {
                url = _g.HTTP.noCaching(win.location.href);
            }
            url = _g.HTTP.reloadHook(url);

            if (preventHistory) {
                win.location.replace(url);
            } else {
                win.location.href = url;
            }
        },

        /**
         * Loads the specified URL in the current window.
         * @static
         * @param {String} url The URL
         * @param {String} preventHistory (optional) Prevent history
         */
        load: function(url, preventHistory) {
            _g.Util.reload(window, url, preventHistory);
        },

        /**
         * Opens a new window with the specified URL.
         * If no window is specified, the current window will be used.
         * @static
         * @param {String} url The URL
         * @param {Window} win (optional) The window to reload
         * @param {String} name (optional) New window name
         * @param {String} options (optional) New window options
         * @return {Object} New window
         */
        open: function(url, win, name, options) {
            if (!win) win = window;
            if (!url) {
                return;
            }
            url = _g.HTTP.reloadHook(url);

            if (!name) {
                name = "";
            }
            if (!options) {
                options = "";
            }

            return win.open(url, name, options);
        },

        /**
         * Converts certain characters (&, <, >, and ") to their HTML character equivalents for literal display in web pages.
         * @param {String} value The string to encode
         * @return {String} The encoded text
         */
        htmlEncode : function(value) {
            return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        },

        /**
         * Converts certain characters (&, <, >, and ") from their HTML character equivalents.
         * @param {String} value The string to decode
         * @return {String} The decoded text
         */
        htmlDecode : function(value) {
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        },

        /**
         * Truncates a string and add an ellipsis ('...') to the end if it exceeds the specified length
         * @param {String}  value  The string to truncate
         * @param {Number}  length The maximum length to allow before truncating
         * @param {Boolean} word   True to try to find a common work break
         * @return {String} The converted text
         */
        ellipsis : function(value, length, word) {
            if (value && value.length > length) {
                if (word) {
                    var vs = value.substr(0, length - 2);
                    var index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'), vs.lastIndexOf(';'));
                    if (index == -1 || index < (length - 15)) {
                        return value.substr(0, length - 3) + "...";
                    } else {
                        return vs.substr(0, index) + "...";
                    }
                } else {
                    return value.substr(0, length - 3) + "...";
                }
            }
            return value;
        },

                /**
         * Replaces occurrences of <code>{n}</code> in the specified text with
         * the texts from the snippets.
         * <p>Example 1 (single snippet):<pre><code>
var text = CQ.shared.Util.patchText("{0} has signed in.", "Jack");
           </code></pre>Result 1:<pre><code>
Jack has signed in.
           </code></pre></p>
         * <p>Example 2 (multiple snippets):<pre><code>
var text = "{0} {1} has signed in from {2}.";
text = CQ.shared.Util.patchText(text, ["Jack", "McFarland", "10.0.0.99"]);
           </code></pre>Result 2:<pre><code>
Jack McFarland has signed in from 10.0.0.99.
           </code></pre></p>
         * @static
         * @param {String} text The text
         * @param {String/String[]} snippets The text(s) replacing
         *        <code>{n}</code>
         * @return {String} The patched text
         */
        patchText: Granite.Util.patchText,

        /**
         * Evaluates and returns the response text of the specified response
         * object.
         * @static
         * @param {Object} response The response object
         * @return {Object} The evaluated object
         * @deprecated Use {@link CQ.shared.HTTP#eval} instead
         */
        eval: function(response) {
            return _g.HTTP.eval(response);
        },

        /**
         * Returns the top most accessible window.
         * @static
         * @return {Window} The top window
         * @since 5.5
         */
        getTopWindow: Granite.Util.getTopWindow,
        
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
         setIFrameMode: Granite.Util.setIFrameMode
    }

};

// shortcut
_g.Util = _g.shared.Util;

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
 * @class CQ.Sling
 * @deprecated use Granite.Sling instead
 */
_g.shared.Sling = function() {

    return {

        /**
         * The selector for infinite hierarchy depth when retrieving
         * repository content.
         * @static
         * @final
         * @type String
         */
        SELECTOR_INFINITY: Granite.Sling.SELECTOR_INFINITY,

        /**
         * The parameter name for the used character set.
         * @static
         * @final
         * @type String
         */
        CHARSET: Granite.Sling.CHARSET,

        /**
         * The parameter name for the status.
         * @static
         * @final
         * @type String
         */
        STATUS: Granite.Sling.STATUS,

        /**
         * The parameter value for the status type "browser".
         * @static
         * @final
         * @type String
         */
        STATUS_BROWSER: Granite.Sling.STATUS_BROWSER,

        /**
         * The parameter name for the operation.
         * @static
         * @final
         * @type String
         */
        OPERATION: Granite.Sling.OPERATION,

        /**
         * The parameter value for the delete operation.
         * @static
         * @final
         * @type String
         */
        OPERATION_DELETE: Granite.Sling.OPERATION_DELETE,

        /**
         * The parameter value for the move operation.
         * @static
         * @final
         * @type String
         */
        OPERATION_MOVE: Granite.Sling.OPERATION_MOVE,

        /**
         * The parameter name suffix for deleting.
         * @static
         * @final
         * @type String
         */
        DELETE_SUFFIX: Granite.Sling.DELETE_SUFFIX,

        /**
         * The parameter name suffix for setting a type hint.
         * @static
         * @final
         * @type String
         */
        TYPEHINT_SUFFIX: Granite.Sling.TYPEHINT_SUFFIX,

        /**
         * The parameter name suffix for copying.
         * @static
         * @final
         * @type String
         */
        COPY_SUFFIX: Granite.Sling.COPY_SUFFIX,

        /**
         * The parameter name suffix for moving.
         * @static
         * @final
         * @type String
         */
        MOVE_SUFFIX: Granite.Sling.MOVE_SUFFIX,

        /**
         * The parameter name for the ordering.
         * @static
         * @final
         * @type String
         */
        ORDER: Granite.Sling.ORDER,

        /**
         * The parameter name for the replace flag.
         * @static
         * @final
         * @type String
         */
        REPLACE: Granite.Sling.REPLACE,

        /**
         * The parameter name for the destination flag.
         * @static
         * @final
         * @type String
         */
        DESTINATION: Granite.Sling.DESTINATION,

        /**
         * The parameter name for the save parameter prefix.
         * @static
         * @final
         * @type String
         */
        SAVE_PARAM_PREFIX: Granite.Sling.SAVE_PARAM_PREFIX,

        /**
         * The parameter name for input fields that should
         * be ignored by Sling.
         * @static
         * @final
         * @type String
         */
        IGNORE_PARAM: Granite.Sling.IGNORE_PARAM,

        /**
         * The parameter name for login requests.
         * @static
         * @final
         * @type String
         */
        REQUEST_LOGIN_PARAM: Granite.Sling.REQUEST_LOGIN_PARAM,

        /**
         * Login URL
         * @static
         * @final
         * @type String
         */
        LOGIN_URL: Granite.Sling.LOGIN_URL,

        /**
         * Logout URL
         * @static
         * @final
         * @type String
         */
        LOGOUT_URL: Granite.Sling.LOGOUT_URL,

        /**
         * Detects and processes binary repository data returned by Sling
         * and does some preparsing on it for more easy data handling.
         * @static
         * @param {Object} value The repository data to check
         * @return {Object} The processed repository data
         */
        processBinaryData: function(value) {
            if (value && value[":jcr:data"] != undefined) {
                // value is a binary
                var o = new Object();
                o.size = value[":jcr:data"];
                o.type = value["jcr:mimeType"];
                o.date = value["jcr:lastModified"];
                value = o;
            }
            return value;
        },

        /**
         * Returns the content path for the data.
         * @static
         * @param {String} relPath The relative path to resolve
         * @param {String} absPath The absolute path to resovle against
         * @param {Boolean} allowParentPaths Indicates parent paths (../) should be processed at the start of the
         * relative path
         * @return {String} The absolute path path
         */
        getContentPath: function(relPath, absPath, allowParentPaths) {
            var path = absPath;
            if (path.lastIndexOf(".") > path.lastIndexOf("/")) {
                // remove selectors and extension from absPath:
                // /content/foo.bar.html >> /content/foo
                path = path.substr(0, path.indexOf(".", path.lastIndexOf("/")));
            }
            if (relPath) {
                if (relPath.indexOf("/") == 0) {
                    path = relPath;
                } else {
                    if (allowParentPaths) {
                        while (relPath.indexOf("../") == 0) {
                            relPath = relPath.substring(3);
                            path = path.substring(0, path.lastIndexOf("/"));
                        }
                    }
                    relPath = relPath.replace("./", "");
                    path = path + "/" + relPath;
                }
            }
            return path;
        }
    };

}();

// shortcut
_g.Sling = _g.shared.Sling;

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
 * Provides static utilities for XSS management.
 * @static
 * @singleton
 * @since 5.4
 * @class CQ.shared.XSS
 * @granite-class _g.XSS
 * @deprecated
 */
_g.shared.XSS = new function() {
    return {
        /**
         * Get XSS property name from a provided property name
         *
         * @static
         * @param  {String} propertyName Property name
         * @return {String} XSS property name
         */
        getXSSPropertyName: function(propertyName) {
            if (!propertyName) {
                return '';
            }
            if (_g.XSS.KEY_REGEXP.test(propertyName)) {
                return propertyName;
            }
            return propertyName += _g.XSS.KEY_SUFFIX;
        },

        /**
         * Get XSS property value from provided property name and json record
         *
         * @static
         * @param  {Object} rec          Object containing the properties and their values
         * @param  {String} propertyName Property name
         * @param  {Number} ellipsisLimit Maximum number of characters
         * @return {String} XSS property value if it exists, non protected value otherwise
         */
        getXSSRecordPropertyValue: function(rec, propertyName, ellipsisLimit) {
            var value = '';
            if (rec && propertyName) {
                var xssPropValue = rec.get(this.getXSSPropertyName(propertyName));
                if (xssPropValue) {
                    value = xssPropValue;
                } else {
                    value = rec.get(propertyName);
                }

                if (ellipsisLimit && !isNaN(ellipsisLimit)) {
                    value = _g.Util.ellipsis(value, ellipsisLimit, true);
                }
            }
            return value;
        },

        /**
         * Get XSS property value from provided property name and table
         *
         * @static
         * @param  {Object} table         Object containing the properties and their values
         * @param  {String} propertyName  Property name
         * @param  {Number} ellipsisLimit Maximum number of characters
         * @return {String} XSS property value
         */
        getXSSTablePropertyValue: function(table, propertyName, ellipsisLimit) {
            var value = '';
            if (table && propertyName) {
                var xssPropValue = table[this.getXSSPropertyName(propertyName)];
                if (xssPropValue) {
                    value = xssPropValue;
                } else {
                    value = table[propertyName];
                }

                if (ellipsisLimit && !isNaN(ellipsisLimit)) {
                    value = _g.Util.ellipsis(value, ellipsisLimit, true);
                }
            }
            return value;
        },

        /**
         * XSS value renderer
         *
         * @static
         * @param  {String} val  Value to protect
         * @return {String} XSS protected value
         */
        getXSSValue: function(val) {
            if (val) {
                // There is a value to display, which we encode
                return _g.Util.htmlEncode(val);
            } else {
                // There was no value to display
                return '';
            }
        },

        /**
         * Update configuration object's property name if XSS is enabled for it
         *
         * @static
         * @param {Object}  cfg          Configuration object
         * @param {String}  propertyName Property name of the provided configuration object
         */
        updatePropertyName: function(cfg, propertyName) {
            if (!cfg || !propertyName || !cfg[propertyName]) {
                return;
            }
            if (cfg['xssProtect'] && !cfg['xssKeepPropName']) {
                cfg[propertyName] = this.getXSSPropertyName(cfg[propertyName]);
            }
        },

        /**
         * XSS property renderer
         *
         * @static
         * @param  {String} val  Value to display if XSS would not have been requested or is not available
         * @param  {Object} meta Field metadata
         * @param  {Object} cfg  Field configuration
         * @param  {Object} rec  Record containing information
         * @return {String} XSS property value
         */
        xssPropertyRenderer: function(val, meta, rec, cfg) {
            if (cfg && cfg['dataIndex'] && rec && rec.data && rec.data[this.getXSSPropertyName(cfg['dataIndex'])]) {
                // The record contains the XSS property equivalent
                val = rec.data[this.getXSSPropertyName(cfg['dataIndex'])];
                if (cfg['ellipsisLimit'] && !isNaN(cfg['ellipsisLimit'])) {
                    val = _g.Util.ellipsis(val, cfg['ellipsisLimit'], true);
                }
                return val;
            } else if (val) {
                // The record does not contain the XSS property equivalent
                return val;
            } else {
                // There was no value to display
                return '';
            }
        }
    }
};

// shortcut
_g.XSS = _g.shared.XSS;

/**
 * Key suffix for XSS property name
 * @static
 * @final
 * @type String
 */
_g.XSS.KEY_SUFFIX = "_xss";

/**
 * Key regular expression to test if a property name already ends with XSS suffix
 * @private
 * @static
 * @final
 * @type Object
 */
_g.XSS.KEY_REGEXP = new RegExp(_g.XSS.KEY_SUFFIX + "$");

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
 * A helper class providing a set of utilities related to internationalization
 * (i18n). Note: for cq localization, make sure to use CQ.I18n.get().
 * @static
 * @singleton
 * @class CQ.I18n
 * @granite-class _g.I18n
 * @deprecated use Granite.I18n instead
 */
_g.shared.I18n = Granite.I18n;//function() {

// shortcut
_g.I18n = _g.shared.I18n;

_g.shared.I18n.getMessage = Granite.I18n.get;
_g.shared.I18n.getVarMessage = Granite.I18n.getVar;

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
 * A helper class providing a set of String related utilities.
 * @static
 * @singleton
 * @since 5.5
 * @class CQ.shared.String
 * @granite-class _g.String
 * @deprecated
 */
_g.shared.String = new function() {

    return {

        /**
         * Check to see if the the str starts with the prefix.
         * The comparison is case sensitive.
         * @static
         * @param {String} str The string to check.
         * @param {String} prefix The prefix to find.
         * @return {Boolean} if the str starts with the prefix
         * return true, otherwise false.
         */
        startsWith: function( str, prefix ) {
            if (str == null || prefix == null) {
                return str == null && prefix == null;
            }

            if (prefix.length > str.length) {
                return false;
            }

            // ensure we are dealing with the string form of this object
            var sMatch = str.toString();
            var sSearch	= prefix.toString();

            return (sMatch.indexOf(sSearch) == 0);
        },

        /**
         * Check to see if the the str ends with the suffix.
         * The comparison is case sensitive.
         * @static
         * @param {String} str The string to check.
         * @param {String} suffix The suffix to find.
         * @return {Boolean} if the str ends with the suffix
         * return true, otherwise false.
         */
        endsWith: function( str, suffix ) {

            if (str == null || suffix == null) {
                return str == null && suffix == null;
            }

            if (suffix.length > str.length) {
                return false;
            }

            // ensure we are dealing with the string form of this object
            str = str.toString();
            suffix	= suffix.toString();

            return (str.lastIndexOf(suffix) == (str.length - suffix.length));
        },

        /**
         * Check to see if the the str contains the searchStr.
         * The comparison is case sensitive.
         * @static
         * @param {String} str The string to check.
         * @param {String} searchStr The prefix to find.
         * @return {Boolean} if the str ends with the suffix
         * return true, otherwise false.
         */
        contains: function( str, searchStr ) {

            if (str == null || searchStr == null) {
                return false;
            }

            // ensure we are dealing with the string form of this object
            str = str.toString();
            searchStr = searchStr.toString();

            return (str.indexOf(searchStr) >= 0);
        }
    }
};

// shortcut
_g.String = _g.shared.String;

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
 * @class _g.shared.ClientSidePersistence
 * The _g.shared.ClientSidePersistence is a class providing method to persist a map of pairs (key/value).
 * @constructor
 * Creates a new ClientSidePersistence object.
 */
_g.shared.ClientSidePersistence = function(cfg) {
    var session = {
        /**
         * @cfg {String} PERSISTENCE_NAME
         * Persistence global key name
         * @final
         * @private
         */
        PERSISTENCE_NAME: _g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),

        /**
         * @cfg {Object} config
         * Default configuration of ClientSidePersistence
         */
        config: {},

        /**
         * @property {Object} cache
         * Client side persistence cache object
         * @private
         */
        cache: null,

        /**
         * Returns current ClientSidePersistence mode
         * @return {Object} Current ClientSidePersistence mode (see {@link #config})
         */
        getMode: function() {
            return this.config.mode;
        },

        /**
         * Returns window object used by ClientSidePersistence
         * @return {Object} window object used by ClientSidePersistence
         */
        getWindow: function() {
            return this.config['window'] || _g.shared.Util.getTopWindow();
        },

        /**
         * Prints actual ClientSidePersistence content restricted to specified container name (if specified) and to used mode
         * @private
         * @return
         */
        debug: function() {
            if (console) {
                var map = this.getMap();
                var debugInfo = "[ClientSidePersistence -> mode=" + this.getMode().name + ", container=" + (this.config.container || '') + "]\n";
                var count = 0;
                var containerRE = new RegExp('^' + this.config.container + '/');

                for (var idx = 0, keys = Object.keys(map).sort(), last = null; idx < keys.length; idx++) {
                    var key = keys[idx];

                    if (this.config.container && (typeof(key) == 'string') && !key.match(containerRE)) {
                        continue;
                    }

                    var value = map[key];
                    debugInfo += "-[" + ++count + "]-> '" + key.replace(containerRE, '') + "' = '" + decodeURIComponent(value) + "'\n";
                }

                if (!count) {
                    debugInfo += "(container is empty)";
                }

                console.log(debugInfo);
            }
        },

        /**
         * Returns user provided key with container name (if it's specified)
         * @param {String} key
         * @private
         * @return {String} user provided key with container name
         */
        keyName: function(key) {
            return (this.config.container ? (this.config.container + '/') : '') + key;
        },

        /**
         * Returns the list of all the keys contained into the persistence
         * @return {String[]} list of the keys
         */
        getKeys: function() {
            var map = this.getMap();
            var keys = [];
            if( map ) {
                for ( var k in map ) {
                    if ( this.config.container ) {
                        if (k.indexOf(this.config.container + '/') == 0 ) {
                            var key = k.substring( this.config.container.length + 1 );
                            keys.push(key);
                        }
                    } else {
                        keys.push(k);
                    }
                }

            }
            return keys;
        },

        /**
         * Returns the value of the given key.
         * @param {String} key
         * @return {String} value of a given key
         */
        get: function(key) {
            var value = this.getMap()[this.keyName(key)];
            return value ? decodeURIComponent(value) : value;
        },

        /**
         * Sets the value of the given key.
         * @param {String} key
         * @param {String} value
         */
        set: function(key, value) {
            key = (typeof key === 'string') ? key.replace(/:=/g, '') : '';
            var eventData = {'key' : key};
            key = this.keyName(key);

            if (!key.length) {
                return;
            }

            var result = [];
            var map = this.getMap();
            eventData.action = map[key] ? "update": "set";

            if (value) {
                map[key] = encodeURIComponent(value);
            } else {
                eventData.action = "remove";
                delete map[key];
            }

            for (var entry in map) {
                result.push(entry + ':=' + map[entry]);
            }

            this.cache = map;
            this.write(result.join('|'));

            _g.$.extend(eventData, {
                'value': value,
                'mode': this.getMode().name,
                'container': this.config.container
            });

            _g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME, eventData);
        },

        /**
         * Returns object containing a map of key/value pairs
         * @private
         * @return {Object} map of key/value pairs
         */
        getMap: function() {
            if (!this.cache || !this.config.useCache) {
                var data = this.read().split('|');
                var result = {};

                for (var idx = 0; idx < data.length; idx++) {
                    var chunks = data[idx].split(':=');
                    var key = chunks[0];

                    if (key && key.length) {
                        result[key] = chunks[1] || '';
                    }
                }

                this.cache = result;
            }

            return this.cache;
        },

        /**
         * Removes key from the persistence
         * @param {String} key
         * @return
         */
        remove: function(key) {
            this.set(key);
        },

        /**
         * Clears the whole content of persistence object
         * @return
         */
        clearMap: function() {
            this.write();
        },

        /**
         * Reads the whole content of persistence object
         * @private
         * @return {String} content of persistence object
         */
        read: function() {
            return this.config.mode.read(this) || '';
        },

        /**
         * Stores user provided data in persistence object
         * @param {String} data
         * @private
         * @return
         */
        write: function(data) {
            this.config.mode.write(this, data || '');
        }
    };

    /* applies user provided config on top of default configuration */
    _g.$.extend(session.config, _g.shared.ClientSidePersistence.getDefaultConfig(), cfg);

    if (session.config.useContainer === false) {
        session.config.container = null;
    }

    /* check if sessionStorage is supported and switch to localStorage otherwise */
    if ((session.config.mode === _g.shared.ClientSidePersistence.MODE_SESSION) && (!window.sessionStorage || !window.sessionStorage.getItem || !window.sessionStorage.setItem)) {
        session.config.mode = _g.shared.ClientSidePersistence.MODE_LOCAL;
    }

    /* check if localStorage is supported and switch to window.name otherwise */
    if ((session.config.mode === _g.shared.ClientSidePersistence.MODE_LOCAL) && (!window.localStorage || !window.localStorage.getItem || !window.localStorage.setItem)) {
        session.config.mode = _g.shared.ClientSidePersistence.MODE_WINDOW;
    }

    return session;
};

/**
 * @cfg {String} EVENT_NAME
 * Event name triggered while setting/updating key in ClientSidePersistence
 * @final
 * @private
 */
_g.shared.ClientSidePersistence.EVENT_NAME = 'ClientSidePersistence';

/**
 * window.sessionStorage implementation for ClientSidePersistence
 */
_g.shared.ClientSidePersistence.MODE_SESSION = {
    /**
     * @property {String} name
     * Name of MODE_SESSION storage implementation
     */
    name: 'session',

    /**
     * Reads the whole content of persistence object (using window.sessionStorage)
     * @param {ClientSidePersistence} self
     * @return content of persistence object
     */
    read: function(self) {
        return self.getWindow().sessionStorage.getItem(self.PERSISTENCE_NAME);
    },

    /**
     * Stores user provided data in persistence object (using window.sessionStorage)
     * @param {ClientSidePersistence} self
     * @param {String} value
     * @return
     */
    write: function(self, value) {
        if (Granite.OptOutUtil.isOptedOut()) return;
        try {
            self.getWindow().sessionStorage.setItem(self.PERSISTENCE_NAME, value);
        } catch(error) {
            //could not deal with the setItem
            return;
        }
    }
};

/**
 * window.localStorage implementation for ClientSidePersistence
 */
_g.shared.ClientSidePersistence.MODE_LOCAL = {
    /**
     * @property {String} name
     * Name of MODE_LOCAL storage implementation
     */
    name: 'local',

    /**
     * Reads the whole content of persistence object (using window.localStorage)
     * @param {ClientSidePersistence} self
     * @return content of persistence object
     */
    read: function(self) {
        return self.getWindow().localStorage.getItem(self.PERSISTENCE_NAME);
    },

    /**
     * Stores user provided data in persistence object (using window.localStorage)
     * @param {ClientSidePersistence} self
     * @param {String} value
     * @return
     */
    write: function(self, value) {
        if (Granite.OptOutUtil.isOptedOut()) return;
        try {
            self.getWindow().localStorage.setItem(self.PERSISTENCE_NAME, value);
        } catch(error) {
            //could not deal with the setItem
            return;
        }
    }
};

_g.shared.ClientSidePersistence.decoratePersistenceName = function(name) {
    return name;
};

/**
 * window.name implementation for ClientSidePersistence
 */
_g.shared.ClientSidePersistence.MODE_WINDOW = {
    /**
     * @property {String} name
     * Name of MODE_WINDOW storage implementation
     */
    'name': 'window',

    /**
     * Reads the whole content of persistence object (using window.name)
     * @param {ClientSidePersistence} self
     * @return content of persistence object
     */
    read: function(self) {
        return self.getWindow().name;
    },

    /**
     * Stores user provided data in persistence object (using window.name)
     * @param {ClientSidePersistence} self
     * @param {String} value
     * @return
     */
    write: function(self, value) {
        if (Granite.OptOutUtil.isOptedOut()) return;
        self.getWindow().name = value;
    }
};

/**
 * document.cookie implementation for ClientSidePersistence
 */
_g.shared.ClientSidePersistence.MODE_COOKIE = {
    /**
     * @property {String} COOKIE_NAME
     * Cookie key name used by MODE_COOKIE persistence mode
     */
    COOKIE_NAME: _g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),

    /**
     * @property {String} name
     * Name of MODE_COOKIE storage implementation
     */
    name: 'cookie',

    /**
     * Reads the whole content of persistence object (using document.cookie)
     * @param {ClientSidePersistence} self
     * @return content of persistence object
     */
    read: function(self) {
        return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME);
    },

    /**
     * Stores or clears user provided data in persistence object (using document.cookie)
     * @param {ClientSidePersistence} self
     * @param {String} value (optional)
     * @return
     */
    write: function(self, value) {
        if (Granite.OptOutUtil.isOptedOut() && !Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)) return;
        if (!value) {
            _g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME);
        } else {
            _g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME, value, 365 /* days */);
        }
    }
};

/*
 * ClientSidePersistence default config
 */
_g.shared.ClientSidePersistence.getDefaultConfig = function() {
    return {
        /**
         * @property {Object} window
         * Defines which window object should be used by ClientSidePersistence
         */
        window: _g.shared.Util.getTopWindow(),

        /**
         * @property {Boolean} useCache
         * Determines if ClientSidePersistence should use internal cache
         */
        useCache: false,

        /**
         * @property {String} container
         * Container name where key/values will be stored (by default it's null)
         */
        container: null,

        /**
         * @property {Object} mode
         * Defines which mode should be used (available modes are {@link _g.shared.ClientSidePersistence.MODE_SESSION MODE_SESSION},
         * {@link _g.shared.ClientSidePersistence.MODE_LOCAL MODE_LOCAL}, {@link _g.shared.ClientSidePersistence.MODE_WINDOW MODE_WINDOW}
         * and {@link _g.shared.ClientSidePersistence.MODE_COOKIE MODE_COOKIE})
         */
        mode: _g.shared.ClientSidePersistence.MODE_LOCAL
    };
};

/**
 * Cookie helper class.
 * @class _g.shared.ClientSidePersistence.CookieHelper
 * @singleton
 */
_g.shared.ClientSidePersistence.CookieHelper = {
    /**
     * Sets a cookie.
     * @param {String} name
     * @param {String} value
     * @param {Number} days
     */
    set: function(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        if (value) {
            value = encodeURIComponent(value);
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    /**
     * Returns the value of the cookie of the given name.
     * @param {String} name
     * @return {String} value of a given name (can be null)
     */
    read: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                var value = c.substring(nameEQ.length, c.length);
                return value ? decodeURIComponent(value) : null;
            }
        }
        return null;
    },

    /**
     * Removes the cookie of the given name.
     * @param {String} name
     */
    erase: function(name) {
        _g.shared.ClientSidePersistence.CookieHelper.set(name, "", -1);
    }
};

/*
 * Clears client side persistence using all implemented modes
 */
_g.shared.ClientSidePersistence.clearAllMaps = function() {
    var modes = [
        _g.shared.ClientSidePersistence.MODE_COOKIE,
        _g.shared.ClientSidePersistence.MODE_LOCAL,
        _g.shared.ClientSidePersistence.MODE_SESSION,
        _g.shared.ClientSidePersistence.MODE_WINDOW
    ];

    _g.$.each(modes, function(id, mode) {
        var persistence = new _g.shared.ClientSidePersistence({'mode': mode});
        persistence.clearMap();
    });
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

//------------------------------------------------------------------------------
// Initialize the Granite shared library

//todo: user language (not yet available)
//_g.I18n.init({locale: _g.User.getLanguage()});
_g.I18n.init();

/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */


/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * The <code>CQ</code> library contains all CQ component classes and utilities.
 * @static
 */
window.CQ = window.CQ || {};

// map CQ.shared to Granite shared
CQ.shared = _g.shared;

// shortcuts
CQ.Sling = CQ.shared.Sling;
CQ.I18n = CQ.shared.I18n;

// map constants for portlet support
G_XHR_HOOK = typeof CQ_XHR_HOOK != "undefined" ? CQ_XHR_HOOK : undefined;
G_RELOAD_HOOK = typeof CQ_RELOAD_HOOK != "undefined" ? CQ_RELOAD_HOOK : undefined;
G_IS_HOOKED = typeof CQ_IS_HOOKED != "undefined" ? CQ_IS_HOOKED : undefined;
G_CONTENT_PATH = typeof CQ_CONTENT_PATH != "undefined" ? CQ_CONTENT_PATH : undefined;

/**
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2011 Adobe Systems Incorporated
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
 * A helper class providing a set of form related utilities.
 * @static
 * @singleton
 * @class CQ.shared.Form
 */
CQ.shared.Form = function() {

    /**
     * Returns an associative array mapping ids to label nodes.
     * @private
     * @return {Object} For instance:
     *      {
     *          id1: labelNode1,
     *          id2: labelNode2,
     *          ...
     *      }
     */
    var getDocumentLabelMap = function() {
        var labelMap = new Object();
        var labelNodes = document.getElementsByTagName("label");
        for (var i = 0; i < labelNodes.length; i++) {
            var forId = labelNodes[i].htmlFor;  // buggy IE can't handle getAttribute("for")
            if (forId) {
                labelMap[forId] = labelNodes[i];
            }
        }
        return labelMap;
    };

    /**
     * Given a <label> node (perhaps one containing <input> or <select> children), return the text
     * content (excluding any <input> or <select> content).
     * @private
     * @return {String} The text content of all non-<input> and non-<select> descendants.
     */
    var getLabelNodeTextContent = function(node) {
        var text = "";
        var walkTree = function(node) {
            if (node.nodeType == 3) { // text node
                text += node.nodeValue;
            }
            if (node.nodeName.toLowerCase() == "select"
                || node.nodeName.toLowerCase() == "input"
                || node.nodeName.toLowerCase() == "textarea"
                || node.nodeName.toLowerCase() == "button") {
                // don't walk into fields if they're children of the label
                return;
            }
            for (var i = 0; node.childNodes && i < node.childNodes.length; i++) {
                walkTree(node.childNodes[i]);
            }
        };
        walkTree(node);
        return text;
    };

    /**
     * Given an indexed id, return the id for the parent section (the id with the index stripped off).
     * @private
     */
    var getSectionIdForIndexedId = function(id) {
        return id.replace(/-\d+$/, "");
    };

    /**
     * <p>Return the label text (as a <code>String</code>) for a particular <code>id</code>.  When a label
     * can't be found, return the id itself as a fall-back.</p>
     * <p>Note: Public callers can ignore the <code>documentLabelMap</code> parameter (it's used internally
     * as a caching mechanism).</p>
     * @param {String} id The id which the target <code>&lt;label&gt;</code> refers to.
     * @return {String} The label text.
     */
    var getLabelForId = function(id, documentLabelMap) {
        if (!documentLabelMap) {
            documentLabelMap = getDocumentLabelMap();
        }

        if (documentLabelMap[id]) {
            return getLabelNodeTextContent(documentLabelMap[id]);
        }
        return null;
    };

    /**
     * Locate the default values for the given node. Supported nodes
     * include, <code>input</code>, <code>textarea</code>, <code>option</code>.
     *
     * @private
     * @param {HTMLElement} node The element which to locate the default value for.
     * @return {String} the default value for the given node.
     */
    var getDefaultValue = function(node) {
        var defaultValue;
        var nodeName = node.nodeName.toLowerCase();
        var nodeType = hasAttribute(node, "type") ? node.getAttribute("type") : undefined;

        if (nodeName == "input") {
            if (nodeType == "radio" || nodeType == "checkbox") {
                if (hasAttribute(node, "checked")) {
                    defaultValue = node.getAttribute("value");
                }
            } else if (node.type == "text") {
                defaultValue = node.defaultValue;
                // support elements like hidden, reset, submit
            } else {
                defaultValue = node.value;
            }
        } else if (nodeName == "textarea") {
            defaultValue = node.value;
        } else if (nodeName == "option" && hasAttribute(node, "selected")) {
            defaultValue = node.getAttribute("value");
        }

        return defaultValue;
    };

    /**
     * Helper function to get around IE7 not supporting hasAttribute.
     * @private
     * @param {HTMLElement} el the html element
     * @param {String} attr the attribute to test for.
     */
    var hasAttribute = function(el, attr) {
        if (el == null) {
            return false;
        }

        // IE8 issue with attributes being not null but empty string
        return ($CQ(el).attr(attr) != undefined);
    };

    return {

        /**
         * Searches an array for an object with a particular property of a particular value.
         * @return {Object} the first object which matches, or null if no objects match.
         */
        searchArray: function(arr, testProperty, testValue) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][testProperty] && arr[i][testProperty] == testValue) {
                    return arr[i];
                }
            }
            return null;
        },

        /**
         * <p>Return the label text for an <code>&lt;input&gt;</code> or <code>&lt;select&gt;</code>.  When a
         * label can't be found, the element's name attribute is used as a fall-back.</p>
         * <p>Note: Public callers can ignore the <code>documentLabelMap</code> parameter (it's used internally
         * as a caching mechanism).</p>
         * @param {HTMLElement} fieldNode The <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code> or
         * <code>&lt;textArea&gt;</code> node.
         * @return {String} The label text.
         */
        getLabelForField: function(fieldNode, documentLabelMap) {
            if (!documentLabelMap) {
                documentLabelMap = getDocumentLabelMap();
            }

            var id = fieldNode.getAttribute("id");
            if (id && documentLabelMap[id]) {
                return getLabelNodeTextContent(documentLabelMap[id]);
            }

            var parent = fieldNode.parentNode;
            while (parent) {
                if (parent.nodeName.toLowerCase() == "label") {
                    return getLabelNodeTextContent(parent);
                }
                parent = parent.parentNode;
            }

            // No label found; we'll have to live with the name:
            return fieldNode.getAttribute("name");
        },

        /**
         * Get a list of fields in the document.
         * @return {Array} Each object in the array represents a field.  Each field contains:
         * <div class="mdetail-params"><ul)
         *   <li><code>text</code> : String<div class="sub-desc">The label to display (usually the field's caption).</div></li>
         *   <li><code>value</code> : String<div class="sub-desc">The name of the field.</div></li>
         *   <li><code>enumeration</code> : Array|null<div class="sub-desc">For enumerated fields, a nested array of text/value pairs.</div></li>
         * </ul></div>
         */
        getFields: function() {

            var documentLabelMap = getDocumentLabelMap();

            var fields = [];

            var visitNamedNode = function(node, inLocalNode) {
                var name = node.getAttribute("name");
                var nodeType = node.nodeName.toLowerCase();
                var field;

                if (nodeType == "input" || nodeType == "textarea") {
                    var controlType = hasAttribute(node, "type") ? node.getAttribute("type").toLowerCase() : "text";
                    if (controlType == "button" || controlType == "submit" || controlType == "reset") {
                        return;
                    }

                    // Fetch (or create) the field record:
                    //
                    field = CQ.shared.Form.searchArray(fields, "value", name);
                    if (!field) {
                        fields.push({
                            "text": CQ.shared.Form.getLabelForField(node, documentLabelMap),
                            "value": name,      // for Selection.setOptions()
                            "name": name,       // for everyone else
                            "enumeration": undefined,
                            "local": inLocalNode,
                            "type": nodeType,
                            "defaultValue": getDefaultValue(node),
                            "node": node
                        });
                        field = fields[fields.length-1];
                    }

                    // See if we're an enumeration.  Note that Sidekick-authored checkboxes are always
                    // enumerations, even when they appear singly.
                    //
                    if (controlType == "radio" || (field.local && controlType == "checkbox")) {
                        if (!field.enumeration) {
                            // This is the first one we've found of this group; promote the label to the
                            // section label
                            var inputId = node.getAttribute("id");
                            if (inputId) {
                                var sectionId = getSectionIdForIndexedId(inputId);
                                var sectionLabel = getLabelForId(sectionId, documentLabelMap);
                                field.text = (sectionLabel ? sectionLabel : name);
                            } else {
                                field.text = name;
                            }
                            field.enumeration = [];
                        }
                        field.enumeration.push({
                            "text": CQ.shared.Form.getLabelForField(node, documentLabelMap),
                            "value": node.getAttribute("value"),
                            "defaultValue": getDefaultValue(node),
                            "node": node
                        });
                    }
                } else if (nodeType == "select") {
                    // Create the field record:
                    //
                    fields.push({
                        "text": CQ.shared.Form.getLabelForField(node, documentLabelMap),
                        "value": name,              // for Selection.setOptions()
                        "name": name,               // for everyone else
                        "enumeration": [],
                        "local": inLocalNode,
                        "type": nodeType,
                        "defaultValue": undefined,  // defaultValues are on the options, not select element
                        "node": node
                    });
                    field = fields[fields.length-1];

                    // Add the options to the field's enumeration:
                    //
                    var optionNodes = node.getElementsByTagName("option");
                    for (var i = 0; i < optionNodes.length; i++) {
                        field.enumeration.push({
                            "text": optionNodes[i].innerHTML,
                            "value": optionNodes[i].getAttribute("value"),
                            "defaultValue": getDefaultValue(optionNodes[i]),
                            "node": optionNodes[i]
                        });
                    }
                }
            };

            var walkTree = function(node, inLocalNode) {
                if (node.nodeName.toLowerCase() == "div" && $CQ(node).hasClass("section")) {
                    inLocalNode = true;
                }

                if (node.getAttribute && node.getAttribute("name")) {
                    visitNamedNode(node, inLocalNode);
                }

                for (var i = 0; node.childNodes && i < node.childNodes.length; i++) {
                    var child = node.childNodes[i];
                    if (child.nodeType == 1) { // if element
                        walkTree(child, inLocalNode);
                    }
                }
            };

            walkTree(document, false);
            return fields;
        }
    }
}();

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * A helper class providing information about a CQ user.
 * @class CQ.shared.User
 * @singleton
 */
CQ.shared.User = function(infoData) {
    return  {
        /**
         * @property {Object} data
         * The user data.
         * @private
         */
        data: null,

        /**
         * @property {String} language
         * Resolved language read from preferences
         * @private
         */
        language: null,

        /**
         * @property {String} userPropsPath
         * The path where user properties may be requested from.
         * @private
         */
        userPropsPath: null,

        /**
         * Assembles the url to request the user properties from.
         * Apply default if no path has been set.
         * @private
         */
        getUserPropsUrl: function() {
            if(!this.userPropsPath) {
                this.userPropsPath = CQ.shared.User.PROXY_URI;
            }
            return this.userPropsPath;
        },

        /**
         * Loads the data.
         * @private
         */
        load: function() {
            var url = this.getUserPropsUrl();
            url = CQ.shared.HTTP.noCaching(url);
            var response = CQ.shared.HTTP.get(url);
            if (CQ.shared.HTTP.isOk(response)) {
                this.data = CQ.shared.Util.eval(response);
            }
        },

        /**
         * Instantly initializes the user via a request to server or the provided infoData if it has not already been initialized.
         * @param {Object} infoData (optional) Data to initialize the user with
         * @param {Boolean} force  (otpional) True to force initialization (in case of second initialization)
         * @return {Object} The initialization data
         */
        init: function(infoData, force) {
            if( !this.initialized || force) {
                if (infoData) {
                    // this is not used yet
                    this.data = infoData;
                } else {
                    this.load();
                }
                this.initialized = true;
            }
            return this.data;
        },

        /**
         * Initializes the user via a request to server only when user is used for the first time.
         */
        lazyInit: function() {
            this.lazyLoad = function() {
                this.load();
                this.initialized = true;
            }
        },

        /**
         * Returns if the user has been initialized.
         * @return {Boolean} True if initialized, false otherwise.
         */
        isInitialized: function() {
            return this.initialized;
        },

        /**
         * Returns the language selected by the user.
         * @return {String} The language
         */
        getLanguage: function() {
            if( !this.isInitialized() && this.lazyLoad ) {
                this.lazyLoad.call(this);
            }

            this.language = this.data &&
                this.data["preferences"] &&
                this.data["preferences"]["language"] ?
                this.data["preferences"]["language"] :
                "en";
            return this.language;
        }

    }

}();

/**
 * The URI to retrieve the user info from (defaults to <code>"/libs/cq/security/userinfo.json"</code>).
 * @static
 * @final
 * @type String
 */
CQ.shared.User.PROXY_URI = CQ.shared.HTTP.externalize("/libs/cq/security/userinfo" + CQ.shared.HTTP.EXTENSION_JSON);
/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
//------------------------------------------------------------------------------
// Initialize the CQ shared library

CQ.shared.User.lazyInit();

CQ.shared.I18n.init({
    locale: function() { return CQ.shared.User.getLanguage();},
    urlPrefix: "/libs/cq/i18n/dict."
});

