(function() {
    var targetingParams = {};

    var VERSION_1 = 'a';

    var MAX_LEN_ENTROP_CHAR = 5;
    var GUARD_DELIM = ':';
    var ENCODE_BASE = 26;
    var randomCharRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    window._sp_ = window._sp_ || {};

    // Init MMS client cmd queue
    window._sp_.mms = window._sp_.mms || {};
    window._sp_.mms.cmd = window._sp_.mms.cmd || [];
    window._sp_.mms._internal = window._sp_.mms._internal || {};

    // Init MMS API
    window._sp_.mms.setTargeting = function(key, value) {
        targetingParams[key] = value;
    };

    window._sp_.mms.startMsg = function() {
        window._sp_.isAdblocking(loadMessage);
    };

    window._sp_.mms.reset = function() {
        targetingParams = {};
        window._sp_.mms.closeMsg();
    };

    window._sp_.mms.closeMsg = function() {
        window._sp_.msg.closeMessage();
    };

    window._sp_.mms._internal.cdc1 = function() {
        if (typeof window._sp_.config.mms_client_data_callback === 'function') {
            try {
                window._sp_.config.mms_client_data_callback.apply(
                    window._sp_.config.mms_client_data_callback,
                    arguments
                );
            } catch(e) {
                console.log("mms_client_data_callback failed", e);
            }
        }
    };

    window._sp_.msg = window._sp_.msg || {};
    window._sp_.msg.cmd = window._sp_.msg.cmd || [];
    window._sp_.msg.cmd.push(function() {
        for (var i = 0; i < window._sp_.mms.cmd.length; i++) {
            try {
                window._sp_.mms.cmd[i]();
            } catch(e) {
                console.error('Failed to execute cmd', e);
            }
        }

        var queue = [];
        queue.push = function(cmd) { try { cmd() } catch(e) { console.error('Failed to execute cmd queue', e); } };
        window._sp_.mms.cmd = queue;
    });

    // MMS client
    function loadMessage(isBlocking) {
        var targetingQueryParams = '';
        for (var key in targetingParams) {
            targetingQueryParams += '&' + encodeURIComponent('t[' + key + ']') + '=' + encodeURIComponent(targetingParams[key]);
        }

        var params = '?v=1&account_id=' + encodeURIComponent(window._sp_.config.account_id) +
                        '&abp=' + encodeURIComponent(isBlocking) +
                        '&referrer=' + encodeURIComponent(document.referrer) +
                        '&jv=' + encodeURIComponent(window._sp_.version) +
                        targetingQueryParams +
                        '&cdc=window._sp_.mms._internal.cdc1';

        // TODO remove when we settle on protocol
        var date = new Date();
        date.setTime(date.getTime() + 60000); // 1 hour from now

        var expires = 'expires=' + date.toUTCString() + ';',
            mmsDomainSplit = window._sp_.config.mms_domain.split('.'),
            hostnameSplit = window.location.hostname.split('.');

        var mmsDomainPart = mmsDomainSplit.pop(),
            hostnamePart = hostnameSplit.pop(),
            baseDomain = [];

        while (mmsDomainPart === hostnamePart && mmsDomainPart !== undefined && hostnamePart !== undefined) {
            baseDomain.push(mmsDomainPart);

            mmsDomainPart = mmsDomainSplit.pop();
            hostnamePart = hostnameSplit.pop();
        }

        if (baseDomain.length >= 2) {
            document.cookie = 'sp_cmd=/mms/get_site_js' + params + ';path=/;' + expires + 'domain=.' + baseDomain.reverse().join('.');
        }

        var msgScriptUrl = '//' + window._sp_.config.mms_domain + '/' + encodeVersion1('get_site_js' + params);
        if (isBlocking) {
            window._sp_.bootstrap(msgScriptUrl);
        } else {
            var script = document.createElement('script');
            script.src = msgScriptUrl;
            document.head.appendChild(script);
        }
    }

    function encodeVersion1 (data) {

        var rotationCount = Math.floor(Math.random() * 90) + 1;
        var entropyString = getEntropyString();

        var brutus = ceasarCipher(entropyString + data, rotationCount);
        var base64brutus = base64Encode(brutus);

        return VERSION_1 + encodeRotationCount(rotationCount) + base64brutus;
    }

    function getEntropyString () {
        var lenEntropCount =
            Math.floor(Math.random() * MAX_LEN_ENTROP_CHAR) + 1;
        var entropyStringArray = [];

        for (var i = 0; i < lenEntropCount; i++) {
            entropyStringArray.push(getRandomChar());
        }

        entropyStringArray.push(GUARD_DELIM);
        return entropyStringArray.join('');
    }

    function ceasarCipher (input, shift) {
        var outputArray = [];

        for (var i = 0; i < input.length; i++) {
            var charCode = input.charCodeAt(i);

            if (charCode >= 33 && charCode <= 127) {
                var delta = 33;

                charCode -= delta;
                charCode = (charCode + shift + 94) % 94;
                charCode += delta;
            }

            outputArray.push(String.fromCharCode(charCode));
        }

        return outputArray.join('');
    }

    function base64Encode (str) {
        return window.btoa(str)
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }

    function encodeRotationCount (code) {
        var d2 = code % ENCODE_BASE;
        var d1 = (code - d2) / ENCODE_BASE;
        var aCharCode = 'a'.charCodeAt(0);

        return String.fromCharCode(aCharCode + d1) +
            String.fromCharCode(aCharCode + d2);
    }

    function getRandomChar () {
        return randomCharRange.charAt(
            Math.floor(Math.random() * randomCharRange.length)
        );
    }
})();
