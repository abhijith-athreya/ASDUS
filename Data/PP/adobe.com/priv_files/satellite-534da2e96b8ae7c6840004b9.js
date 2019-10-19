_satellite.pushAsyncScript(function(event, target, $variables){
  (function () {

    "use strict";

    function getCookie(name) {
        var dc = document.cookie,
            prefix = name + "=",
            begin = dc.indexOf("; " + prefix),
            end;
        if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) {
                return null;
            }
        } else {
            begin += 2;
        }
        end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = dc.length;
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    function setCookie(name, value, days) {
        var domain = "adobe.com",
            path = "/",
            domain_string = "; domain=" + domain,
            path_string = "; path=" + path,
            date,
            expires_string;
        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires_string = "; expires=" + date.toGMTString();
        } else {
            expires_string = "";
        }
        document.cookie = name + "=" + value + expires_string + domain_string + path_string;
    }

    function getKeys(obj) {
        var keys = [],
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    function regexEscape(s) {
        return s.replace(/[\-\/\[\]\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    if (getCookie("sfdc_session") === null) {

        setCookie("sfdc_session", "-");

        var has_referrer = !! document.referrer,
            cid_mappings,
            seo_url_patterns,
            referrer_host,
            i,
            host_pattern,
            cid;

        if (has_referrer && !/[?&]skwcid=/.test(location.href)) {
            cid_mappings = {
                '.google.': '70130000000kXAt',
                '.search-results.': '701a0000000mrYs',
                '.nifty.': '701a0000000mrZH',
                '.biglobe.': '701a0000000mrZ7',
                '.soso.': '701a0000000mrZ2',
                '.goo.': '701a0000000mrYx',
                '.seznam.': '701a0000000mrYn',
                '.mywebsearch.': '701a0000000mrYY',
                'mail.ru': '701a0000000mrYJ',
                '.sogou.': '701a0000000mrTt',
                '.daum.': '701a0000000mrTo',
                '.askjeeves.': '70130000000kvNi',
                '.aol.': '70130000000kvNd',
                '.excite.': '70130000000kvNY',
                '.baidu.': '70130000000kvNT',
                '.naver.': '70130000000kvNO',
                '.yandex.': '70130000000kvNE',
                '.yahoo.': '70130000000kvN9',
                '.bing.': '70130000000kvN4'
            };

            seo_url_patterns = getKeys(cid_mappings);
            referrer_host = document.referrer.split('/')[2];

            for (i = 0; i < seo_url_patterns.length; i += 1) {
                host_pattern = regexEscape(seo_url_patterns[i]);

                if ((new RegExp(host_pattern)).test(referrer_host)) {
                    cid = cid_mappings[seo_url_patterns[i]];
                    setCookie('s_cid', cid, 30);
                    break;
                }
            }
        }
    }

})();
});
