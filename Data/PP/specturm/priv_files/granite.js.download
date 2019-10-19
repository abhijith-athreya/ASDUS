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

(function ($, window, undefined) {

    var http;

    // namespacing
    window.Granite = window.Granite || {};
    window.Granite.$ = window.Granite.$ || $;

    // for deprecated "shared" support (GRANITE-1602)
    window._g = window._g || {};
    window._g.$ = window._g.$ || $;

    //grab Granite.HTTP
    http = Granite.HTTP;

    $.ajaxSetup({ // necessary global modifications for ajax calls 
        externalize: true,
        encodePath: true,
        hook: true,
        beforeSend: function (jqXHR, s) { // s: settings provided by the ajax call or default values
            if (typeof G_IS_HOOKED == "undefined" || !G_IS_HOOKED(s.url)) {
                if (s.externalize) { // add context to calls
                    s.url = http.externalize(s.url);
                }
                if (s.encodePath) {
                    s.url = http.encodePathOfURI(s.url);
                }
            }
            if (s.hook) { // portlet XHR hook
                var hook = http.getXhrHook(s.url, s.type, s.data);
                if (hook) {
                    s.url = hook.url;
                    if (hook.params) {
                        if (s.type.toUpperCase() == 'GET') {
                            s.url += '?' + $.param(hook.params);
                        } else {
                            s.data = $.param(hook.params);
                        }
                    }
                }
            }
        },
        statusCode: {
            403: function(jqXHR) {
                if (jqXHR.getResponseHeader("X-Reason") === "Authentication Failed") {
                    // login session expired: redirect to login page
                    http.handleLoginRedirect();
                }
            }
        }
    });

    $.ajaxSettings.traditional = true;
    
}(jQuery, this));
/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2015 Adobe Systems Incorporated
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
(function (window, undefined) {

    window.Granite = window.Granite || {};

    // avoid double initialization
    if (window.Granite.csrf) {
        return;
    }

    window.Granite.csrf = {
        initialised: false
    };

    /**
     * small promise impl
     * @constructor
     */
    function Promise() {
        this._handler = [];
    }

    Promise.prototype = {
        then: function (resolveFn, rejectFn) {
            this._handler.push({resolve: resolveFn, reject: rejectFn});
        },
        resolve: function () {
            this._execute('resolve', arguments);
        },
        reject: function () {
            this._execute('reject', arguments);
        },
        _execute: function (result, args) {
            if (this._handler === null) {
                throw new Error('Promise already completed.');
            }
            
            for (var i = 0, ln = this._handler.length; i < ln; i++) {
                this._handler[i][result].apply(window, args);
            }
            
            this.then = function (resolveFn, rejectFn) {
                (result === 'resolve' ? resolveFn : rejectFn).apply(window, args);
            };

            this._handler = null;
        }

    };

    function verifySameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host, // host + port
            protocol = document.location.protocol,
            relativeOrigin = '//' + host,
            origin = protocol + relativeOrigin;

            // Allow absolute or scheme relative URLs to same origin
            return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
                (url == relativeOrigin || url.slice(0, relativeOrigin.length + 1) == relativeOrigin + '/') ||
                // or any other URL that isn't scheme relative or absolute i.e relative.
                !(/^(\/\/|http:|https:).*/.test(url));
    }

    var FIELD_NAME = ':cq_csrf_token',
		HEADER_NAME = 'CSRF-Token',
        TOKEN_SERVLET = '/libs/granite/csrf/token.json';

    var promise, globalToken;

    function getToken() {
        promise = new Promise();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    globalToken = data.token;
                    promise.resolve(globalToken);
                } catch (ex) {
                    promise.reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', Granite.HTTP.externalize(TOKEN_SERVLET), true);
        xhr.send();
    }

    function addField(form) {
        if (form.action && !verifySameOrigin(form.getAttribute("action"))) {
            return;
        }

        var input = form.querySelector('input[name="' + FIELD_NAME +'"]');
    
        if (!input) {
            input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', FIELD_NAME);
            form.appendChild(input);
        }

        input.setAttribute('value', globalToken);
    }

    function handleForm(document) {
        var handler = function(ev) {
            var t = ev.target;
            
            if (t.nodeName.toLowerCase() === 'form' && globalToken) {
                addField(t);
            }
        };
        
        if (document.addEventListener) {
        	document.addEventListener('submit', handler, true);
        } else if (document.attachEvent) {
            document.attachEvent('submit', handler);
        }
    }

    getToken();
    handleForm(document);

    var open = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function(method, url) {
		if (verifySameOrigin(url) && method.toLowerCase() !== 'get') {
            this._csrf = true;
        }

        return open.apply(this, arguments);
    };

    var send = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.send = function(method) {
		if (!this._csrf) {
            send.apply(this, arguments);
            return;
        }

        if (globalToken) {
            this.setRequestHeader(HEADER_NAME, globalToken);
            send.apply(this, arguments);
            return;
        }

       	var self = this;
        var args = Array.prototype.slice.call(arguments);

        promise.then(function(token) {
			self.setRequestHeader(HEADER_NAME, token);
			send.apply(self, args);
        }, function() {
            if (window.console) {
                console.error("Unable to read CSRF meta information");
            }
			send.apply(self, args);
        });
    };

    var submit = HTMLFormElement.prototype.submit;

    HTMLFormElement.prototype.submit = function() {
		addField(this);
		return submit.apply(this, arguments);
    };
    
    if (window.Node) {
        var ac = Node.prototype.appendChild;

        Node.prototype.appendChild = function() {
            var result = ac.apply(this, arguments);

            if (result.nodeName === 'IFRAME') {
                try {   //Workaround for Granite-10335
                    if (result.contentWindow && !result._csrf) {
                        result._csrf = true;
                        handleForm(result.contentWindow.document);
                    }
                }
                catch(e){}
            }

            return result;
        };
    }

    // refreshing csrf token periodically
    setInterval(function() {
        getToken();
    }, 300000);
})(this);

