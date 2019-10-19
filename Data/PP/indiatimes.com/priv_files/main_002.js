var test_server = 0;
var notification_on_mobile = 1;
var notification_on_desktop = 1;
var optin_delay_on_mobile = 1;
var optin_delay_on_desktop = 1;
var webnotCloseDaysGap = 7;
var webnotAllowDaysGap = 7;

var notification_version = 1.1;

/* make this varriable zero when live */
var test_qsee = 0;

var document_domain = "";
if (document.domain == "localhost") {
    document_domain = "localhost";
} else if (document.domain == "qsee.indiatimes.com" || document.domain == "alfa.wap.indiatimes.com" || document.domain == "qseedesktop2016.indiatimes.com" || document.domain == "qseemobile2016.indiatimes.com") {
    document_domain = "qsee.indiatimes";
} else if (document.domain == "www.indiatimes.com" || document.domain == "indiatimes.com" || document.domain == "m.indiatimes.com" || document.domain == "www.m.indiatimes.com") {
    document_domain = "live.indiatimes";
}else if (document.domain == "beta.mensxp.com" || document.domain == "www.beta.mensxp.com" || document.domain == "qsee.mensxp.com" || document.domain == "www.qsee.mensxp.com" || document.domain == "rewamp.mensxp.com" || document.domain == "www.rewamp.mensxp.com" || document.domain == "mobilebeta.mensxp.com" || document.domain == "www.mobilebeta.mensxp.com" || document.domain == "mobileqsee.mensxp.com" || document.domain == "www.mobileqsee.mensxp.com" || document.domain == "mobilerewamp.mensxp.com" || document.domain == "www.mobilerewamp.mensxp.com" || document.domain == "preview.mensxp.com" || document.domain == "www.preview.mensxp.com") {
    document_domain = "qsee.mensxp";
} else if (document.domain == "www.mensxp.com" || document.domain == "mensxp.com" || document.domain == "m.mensxp.com" || document.domain == "www.m.mensxp.com") {
    document_domain = "live.mensxp";
} else if (document.domain == "qseedesktop2016.idiva.com" || document.domain == "www.qseedesktop2016.idiva.com" || document.domain == "stagingdesktop2015.idiva.com" || document.domain == "www.stagingdesktop2015.idiva.com" || document.domain == "qseewap2016.idiva.com" || document.domain == "www.qseewap2016.idiva.com" || document.domain == "stagingwap2015.idiva.com" || document.domain == "www.stagingwap2015.idiva.com") {    
    document_domain = "qsee.idiva";
} else if (document.domain == "www.idiva.com" || document.domain == "idiva.com" || document.domain == "m.idiva.com" || document.domain == "www.m.idiva.com") {
    document_domain = "live.idiva";
}

if(document_domain == ""){
    throw new Error("domain not set");
}

if(document_domain == "live.indiatimes" && test_qsee ){
    document_domain = "qsee.indiatimes";
}
if(document_domain == "live.mensxp" && test_qsee ){
    document_domain = "qsee.mensxp";
}
if(document_domain == "live.idiva" && test_qsee ){
    document_domain = "qsee.idiva";
}


if(document_domain.indexOf("live.") > -1){
    var optin_delay_on_mobile = 20;
    var optin_delay_on_desktop = 20;
}

if (document_domain == "localhost") {
    var _my_web_push_app_main = {
        "app_id": "1",
        "app_name": "Indiatimes",		
        "app_subdomain": "http://localhost/webnotifications/indiatimes",
        "app_image": "http://localhost/webnotifications/indiatimes/icons/1_80.png?v="+notification_version,
        "app_closed": "http://localhost/webnotifications/indiatimes/icons/closed.png?v="+notification_version,
        "app_poweredby": "powered by Indiatimes",
        "app_url": "http://localhost/webnotifications",
        "app_cookie_domain": "localhost",
        "app_popup_desc": "Be up to date with the stories that matter to our generation. We'll not spam. Promise!",
		"app_popup_font1": "Robotomedium",
		"app_popup_font2": "Robotolight"
    };
    test_server = 1;
} else if (document_domain == "qsee.indiatimes") {
    var _my_web_push_app_main = {
        "app_id": "1",
        "app_name": "Indiatimes",
        "app_subdomain": "https://qseewebnotifications.indiatimes.com",
        "app_image": "https://qseewebnotifications.indiatimes.com/icons/1_80.png?v="+notification_version,
        "app_closed": "https://qseewebnotifications.indiatimes.com/icons/closed.png?v=?v="+notification_version,
        "app_poweredby": "powered by Indiatimes",
        "app_url": "http://www.indiatimes.com",
        "app_cookie_domain": ".indiatimes.com",
        "app_popup_desc": "Be up to date with the stories that matter to our generation. We'll not spam. Promise!",
		"app_popup_font1": "open_sansbold",
		"app_popup_font2": "open_sanslight"
    };
    test_server = 1;
} else if (document_domain == "qsee.mensxp") {    
    var _my_web_push_app_main = {
        "app_id": "2",
        "app_name": "MensXP",
        "app_subdomain": "https://qseenotify.mensxp.com",
        "app_image": "https://qseenotify.mensxp.com/icons/2_80.png?v="+notification_version,
        "app_closed": "https://qseenotify.mensxp.com/icons/closed.png?v=?v="+notification_version,
        "app_poweredby": "powered by MensXP",
        "app_url": "http://www.mensxp.com",
        "app_cookie_domain": ".mensxp.com",
        "app_popup_desc": "Stay up to date with the latest in men's fashion, fitness, lifestyle and dating.<br/> We'll not spam. Promise!",
		"app_popup_font1": "Robotomedium",
		"app_popup_font2": "Robotolight"
    };
    test_server = 1;
} else if (document_domain == "live.mensxp") {    
    var _my_web_push_app_main = {
        "app_id": "2",
        "app_name": "MensXP",
        "app_subdomain": "https://notify.mensxp.com",
        "app_image": "https://notify.mensxp.com/icons/2_80.png?v="+notification_version,
        "app_closed": "https://notify.mensxp.com/icons/closed.png?v=?v="+notification_version,
        "app_poweredby": "powered by MensXP",
        "app_url": "http://www.mensxp.com",
        "app_cookie_domain": ".mensxp.com",
        "app_popup_desc": "Stay up to date with the latest in men's fashion, fitness, lifestyle and dating.<br/> We'll not spam. Promise!",
		"app_popup_font1": "Robotomedium",
		"app_popup_font2": "Robotolight"
    }
} else if (document_domain == "qsee.idiva") {    
    var _my_web_push_app_main = {
        "app_id": "3",
        "app_name": "iDiva",
        "app_subdomain": "https://qseenotify.idiva.com",
        "app_image": "https://qseenotify.idiva.com/icons/3_80.png?v="+notification_version,
        "app_closed": "https://qseenotify.idiva.com/icons/closed.png?v=?v="+notification_version,
        "app_poweredby": "powered by iDiva",
        "app_url": "http://www.idiva.com",
        "app_cookie_domain": ".idiva.com",
        "app_popup_desc": "Be up to date with the latest in Women's fashion, style & beauty, relationships and health.<br/> We'll not spam. Promise!",
		"app_popup_font1": "Robotomedium",
		"app_popup_font2": "Robotolight"
    };
    test_server = 1;
} else if (document_domain == "live.idiva") {    
    var _my_web_push_app_main = {
        "app_id": "3",
        "app_name": "iDiva",
        "app_subdomain": "https://notify.idiva.com",
        "app_image": "https://notify.idiva.com/icons/3_80.png?v="+notification_version,
        "app_closed": "https://notify.idiva.com/icons/closed.png?v=?v="+notification_version,
        "app_poweredby": "powered by iDiva",
        "app_url": "http://www.idiva.com",
        "app_cookie_domain": ".idiva.com",
        "app_popup_desc": "Be up to date with the latest in Women's fashion, style & beauty, relationships and health.<br/> We'll not spam. Promise!",
		"app_popup_font1": "Robotomedium",
		"app_popup_font2": "Robotolight"
    };
} else {
    var _my_web_push_app_main = {
        "app_id": "1",
        "app_name": "Indiatimes",
        "app_subdomain": "https://notifications.indiatimes.com",
        "app_image": "https://notifications.indiatimes.com/icons/1_80.png?v="+notification_version,
        "app_closed": "https://webnotifications.indiatimes.com/icons/closed.png?v=1?v="+notification_version,
        "app_poweredby": "powered by Indiatimes",
        "app_url": "http://www.indiatimes.com",
        "app_cookie_domain": ".indiatimes.com",
        "app_popup_desc": "Be up to date with the stories that matter to our generation. We'll not spam. Promise!" ,
		"app_popup_font1": "open_sansbold",
		"app_popup_font2": "open_sanslight"    
    };
}

/* functions to check private mode browser */
function privateModeRetry(isDone, next) {
    var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
    var id = window.setInterval(
        function() {
            if (isDone()) {
                window.clearInterval(id);
                next(is_timeout);
            }
            if (current_trial++ > max_retry) {
                window.clearInterval(id);
                is_timeout = true;
                next(is_timeout);
            }
        },
        10
    );
}

function isIE10OrLater(user_agent) {
    var ua = user_agent.toLowerCase();
    if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
        return false;
    }
    var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
    if (match && parseInt(match[1], 10) >= 10) {
        return true;
    }
    return false;
}

function detectPrivateMode(callback) {
    var is_private;

    if (window.webkitRequestFileSystem) {
        window.webkitRequestFileSystem(
            window.TEMPORARY, 1,
            function() {
                is_private = false;
            },
            function(e) {
                is_private = true;
            }
        );
    } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
        var db;
        try {
            db = window.indexedDB.open('test');
        } catch(e) {
            is_private = true;
        }

        if (typeof is_private === 'undefined') {
            privateModeRetry(
                function isDone() {
                    return db.readyState === 'done' ? true : false;
                },
                function next(is_timeout) {
                    if (!is_timeout) {
                        is_private = db.result ? false : true;
                    }
                }
            );
        }
    } else if (isIE10OrLater(window.navigator.userAgent)) {
        is_private = false;
        try {
            if (!window.indexedDB) {
                is_private = true;
            }                 
        } catch (e) {
            is_private = true;
        }
    } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
        try {
            window.localStorage.setItem('test', 1);
        } catch(e) {
            is_private = true;
        }

        if (typeof is_private === 'undefined') {
            is_private = false;
            window.localStorage.removeItem('test');
        }
    }

    privateModeRetry(
        function isDone() {
            return typeof is_private !== 'undefined' ? true : false;
        },
        function next(is_timeout) {
            callback(is_private);
        }
    );
}
/* function to get cookie */
function myWebPushAppGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
/* function to get browser name and version */
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M;
})();
/* function to check device is mobile or desktop */
navigator.device = (function () {
    var ud = "desktop";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        ud = "mobile";
    }
    return ud;
})();

var _my_web_push_app_main_browser_details = navigator.sayswho;
var _my_web_push_app_main_browser_version = _my_web_push_app_main_browser_details[1];

var _my_web_push_app_main_device = navigator.device;

var _my_web_push_app_main_is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var _my_web_push_app_main_is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/* check for valid device */
var _is_valid_device = false;
if((_my_web_push_app_main_is_chrome && _my_web_push_app_main_browser_version >= 42) || (_my_web_push_app_main_is_firefox && _my_web_push_app_main_browser_version >= 44)){
    if(_my_web_push_app_main_device == "desktop"){
        _is_valid_device = true;
    } 
    if(_my_web_push_app_main_device == "mobile" && /Android/i.test(navigator.userAgent) && _my_web_push_app_main_is_chrome){
        _is_valid_device = true;
    }
}

if (!('serviceWorker' in navigator)) {
    _is_valid_device = false;
}

var pushSubscriberIDVar = "pushSubscriberID_"+_my_web_push_app_main.app_id;
var pushResponseIDVar = "pushResponseID_"+_my_web_push_app_main.app_id;
if (test_server) {
    console.log("pushSubscriberIDVar="+pushSubscriberIDVar);
    console.log("pushResponseIDVar="+pushResponseIDVar);
    console.log("pushSubscriberID="+myWebPushAppGetCookie(pushSubscriberIDVar));
    console.log("pushResponseID="+myWebPushAppGetCookie(pushResponseIDVar));
    console.log("_is_valid_device="+_is_valid_device);
}

var _my_web_push_app_main_is_private = false;

detectPrivateMode(
    function(is_private) {
        _my_web_push_app_main_is_private = typeof is_private === 'undefined' ? false : is_private ? true : false;
    }
);

var _my_web_push_app_main_optin_settings = {"desktop": {"optin_delay": optin_delay_on_desktop, "optin_title": "<strong class='idiva-webnot' style='padding-bottom:7px; display:block; font-family: "+_my_web_push_app_main.app_popup_font1+",Arial,Helvetica,sans-serif'> Get Notified with "+_my_web_push_app_main.app_name+" </strong> "+_my_web_push_app_main.app_popup_desc, "optin_allow_btn_txt": "YES PLEASE", "optin_close_btn_txt": "NEVER MIND"}, "mobile": {"optin_delay": optin_delay_on_mobile, "optin_title": "<strong style='padding-bottom:7px; display:block; font-family: "+_my_web_push_app_main.app_popup_font1+",Arial,Helvetica,sans-serif'> Get Notified with "+_my_web_push_app_main.app_name+" </strong> "+_my_web_push_app_main.app_popup_desc, "optin_allow_btn_txt": "YES PLEASE", "optin_close_btn_txt": "NEVER MIND"}};

if (_is_valid_device) {
    if ((_my_web_push_app_main_device == "desktop" && notification_on_desktop == 1) || (_my_web_push_app_main_device == "mobile" && notification_on_mobile == 1)) {
        if (location.protocol === "http:") {
            var __my_web_push_app_main = {
                subscribe: function () {                
                    if(myWebPushAppGetCookie("webnotAllowDays") == "" && myWebPushAppGetCookie("webnotCloseDays") == "" && myWebPushAppGetCookie("webnotDenyDays") == "" && myWebPushAppGetCookie(pushSubscriberIDVar) == "" && myWebPushAppGetCookie(pushResponseIDVar) == ""){
                        if (document.readyState == "complete") {
                            if (test_server) {
                                console.log("ready");
                            }
                        }
                        window.addEventListener("load", function () {
                            if (test_server) {
                                console.log("onload");
                            }
                            var delay = (_my_web_push_app_main_optin_settings[_my_web_push_app_main_device]['optin_delay']) * 1000; /* seconds */
                            
                            setTimeout(function () {
                                if (test_server) {
                                    console.log("_my_web_push_app_main_is_private = " + _my_web_push_app_main_is_private);
                                }                                
                                if(_my_web_push_app_main_is_private == false){
                                    htmlbody = document.getElementsByTagName("BODY")[0];
                                    htmlbody.insertAdjacentHTML('beforeend', "<div id='my_web_push_app_box_confirm' class='webnot-cont webnot-main'><div style='float:left; width:18%;margin-right: 3%;max-width:168px;' id='my_web_push_app_box_client_img'><img src='" + _my_web_push_app_main.app_image + "' style='max-width:100%;'></div> <div style='width:78%; position:relative; float:right;'><div style='font:15px/17px "+ _my_web_push_app_main.app_popup_font2 + ",Arial,Helvetica,sans-serif;color: #4A4A4A; padding-bottom:4px' id='my_web_push_app_box_dialog_content'>" + (_my_web_push_app_main_optin_settings[_my_web_push_app_main_device]['optin_title']) + "</div><div style='margin-top:6px; bottom:0; right:0; width:100%;'><div style='float: right;font-family: arial;padding:2.6% 5% 2.4% 5%;font-size:13px;background-color: #fff;color:#black;border: 1px solid #aaa;border-radius:3px;cursor:pointer;' id='my_web_push_app_box_allow_btn' >" + (_my_web_push_app_main_optin_settings[_my_web_push_app_main_device]['optin_allow_btn_txt']) + "</div> <div style='float:right;font-family: arial;font-size:13px;padding:2.6% 5% 2.4% 5%;border-radius: 5px;border: 1px solid #ddd;cursor:pointer; margin-right:5%; color:#aaa' id='my_web_push_app_box_close_btn'>" + (_my_web_push_app_main_optin_settings[_my_web_push_app_main_device]['optin_close_btn_txt']) + "</div></div></div> <div style='cursor: pointer; position: absolute; top:7px; right:8px;' id='my_web_push_app_box_close_img'><img style='width:20px' src='" + _my_web_push_app_main.app_closed + "'> </div> </div> </div>");
                                    var head = document.getElementsByTagName('head')[0];
                                    var link = document.createElement('link');
                                    link.rel = 'stylesheet';
                                    link.type = 'text/css';
                                    link.href = _my_web_push_app_main.app_subdomain + "/css/dialog.css?ts=" + new Date().getTime();
                                    link.media = 'screen';

                                    htmlbody.appendChild(link);

                                    var nowAllow = new Date();
                                    var timeAllow = nowAllow.getTime();
                                    var expireTimeAllow = timeAllow + (1000 * 60 * 60 * 24 * webnotAllowDaysGap);
                                    nowAllow.setTime(expireTimeAllow);

                                    var nowClose = new Date();
                                    var timeClose = nowClose.getTime();
                                    var expireTimeClose = timeClose + (1000 * 60 * 60 * 24 * webnotCloseDaysGap);
                                    nowClose.setTime(expireTimeClose);                                

                                    if (test_server) {
                                        console.log("nowAllow=" + nowAllow.toGMTString());
                                        console.log("nowClose=" + nowClose.toGMTString());
                                    }
                                    /* click on allow button */
                                    pe_allow_btn = document.getElementById("my_web_push_app_box_allow_btn");
                                    pe_allow_btn.addEventListener("click", function () {
                                        var link = _my_web_push_app_main.app_subdomain + "?action=subscribe";
                                        if (test_server) {
                                            console.log("link=" + link);
                                        }
                                        var _my_web_push_app_win = window.open(link, "_blank", "width=800, height=600");
                                        my_web_push_app_box_confirm = document.getElementById("my_web_push_app_box_confirm");
                                        my_web_push_app_box_confirm.style.display = "none";
                                        document.cookie = "webnotAllowDays=true; expires=" + nowAllow.toGMTString() + ";path=/;domain="+_my_web_push_app_main.app_cookie_domain;
                                    }); 
                                    /* click on close button */
                                    pe_close_btn = document.getElementById("my_web_push_app_box_close_btn");
                                    pe_close_btn.addEventListener("click", function () {
                                        my_web_push_app_box_confirm = document.getElementById("my_web_push_app_box_confirm");
                                        my_web_push_app_box_confirm.style.display = "none";
                                        document.cookie = "webnotCloseDays=true; expires=" + nowClose.toGMTString() + ";path=/;domain="+_my_web_push_app_main.app_cookie_domain;
                                    });
                                    /* click on close image */
                                    pe_close_img = document.getElementById("my_web_push_app_box_close_img");
                                    pe_close_img.addEventListener("click", function () {
                                        my_web_push_app_box_confirm = document.getElementById("my_web_push_app_box_confirm");
                                        my_web_push_app_box_confirm.style.display = "none";
                                        document.cookie = "webnotCloseDays=true; expires=" + nowClose.toGMTString() + ";path=/;domain="+_my_web_push_app_main.app_cookie_domain;
                                    });
                                    /* page on load */
                                    document.cookie = "webnotCloseDays=true; expires=" + nowClose.toGMTString() + ";path=/;domain="+_my_web_push_app_main.app_cookie_domain;                                    
                                }
                                
                            }, delay);
                            
                        }, false);
                    }
                }
            };
            __my_web_push_app_main.subscribe();
        }
    }
}
