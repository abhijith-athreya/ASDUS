window.addTophatTrackingParams = function () {
    var hostname = window.location.hostname;
    var isIndeedCom = hostname.substring(hostname.length - 11) === '.indeed.com';
    if (isIndeedCom || !window.tophat) {
        return;
    }

    var hasStandardAddEventListener = !!document.addEventListener;
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        var el = anchors[i];
        var href = el.href;
        if (!href) {
            continue;
        }

        // Check for links that are subdomains of indeed.com
        var indeedDomainRe = new RegExp("^https?://[^/]*[.]indeed[.]com", "i");
        // Special case when we link to indeed.com directly, not a subdomain of it.
        // Can't reuse the above without making the first [.] optional, and that
        // could lead to matching a partial domain (e.g. http://securityholeindeed.com)
        var specificIndeedDomainRe = new RegExp("^https?://indeed[.]com", "i");
        // If we are linking to an indeed domain it means that we want to add on the tracking parameters
        if (indeedDomainRe.test(href) || specificIndeedDomainRe.test(href)) {
            var cb = (function (el) {
                var callback = function () {
                    // Must use `el.href` as there may have been other callbacks
                    // attached to the `onmousedown` event and they may modify
                    // the href.
                    el.href = addTrackingParams(el.href);
                    if (hasStandardAddEventListener) {
                        el.removeEventListener('mousedown', callback, false);
                    } else {
                        el.detachEvent('onmousedown', callback);
                    }
                };

                return callback;
            })(el);

            if (hasStandardAddEventListener) {
                el.addEventListener('mousedown', cb, false);
            } else if (el.attachEvent) { // for < IE 9
                el.attachEvent('onmousedown', cb);
            }
        }
    };
};

window.addTrackingParams = function (href) {
    var tophat = window.tophat;
    if (!tophat) {
        return href;
    }

    var params = ['sid', 'kw', 'isid', 'ikw'];
    var queryParams = [];
    for (var i = 0; i < params.length; i++) {
        var key = params[i];
        var keyEquals = key + "=";
        // Due to the way existing Wordpress pages implemented cross-domain
        // tracking functionality (appendPreviousSidKw) we need to check for
        // stringified "null".
        if (tophat[key] && tophat[key] != 'null' && href.indexOf('?' + keyEquals) === -1 && href.indexOf('&' + keyEquals) === -1) {
            queryParams.push(keyEquals + encodeURIComponent(tophat[key]));
        }
    }

    if (queryParams.length) {
        var queryParamStr = queryParams.join('&');
        var joinStr = href.indexOf('?') === -1 ? '?' : '&';
        var hashComponent = null;

        // Check for '#' and move that data to the end
        if (href.indexOf('#') !== -1) {
            var components = href.split('#');
            href = components[0];
            hashComponent = components[1];
        }

        var newHref = [href, queryParamStr].join(joinStr);
        if (hashComponent) {
            newHref = [newHref, hashComponent].join('#');
        }
        return newHref;
    } else {
        return href;
    }
};

window.addTophatTrackingParams();
