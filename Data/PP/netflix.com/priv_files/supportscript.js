





    
    /*
     The content of this script will be included
     by *.netflix.com pages. served by /csescript
     action.
     */

    (function () {
        var queryParamSearch = window.location.search,
            localeParams,
            config;
        var netflixSaysText = "Netflix says...";

        if (queryParamSearch.match(/forceCountry/) && queryParamSearch.match(/locale/)) {
            localeParams = queryParamSearch.split('?')[1].replace('forceCountry', 'country');

            config = {
                chatUrl: "https://help.netflix.com/chat?" + localeParams + "&cell=&stickyLocale=false",
                chatBoxUrl: "https://help.netflix.com/chatbox?" + localeParams + "&cell=&stickyLocale=false",
                newChatUrl: "https://help.netflix.com/startchat?cmd=request&" + localeParams + "&cell=",
                newChatAfterSignInUrl: "https://help.netflix.com/startchat?cmd=request&waitForSignin=true&" + localeParams + "&cell=",
                chatAvailUrl: "https://help.netflix.com/startchat?cmd=chat_available&" + localeParams + "&cell=",
                jqueryDnD: "https://help.nflximg.net/FilePackageGetter/sharedSystem/pkg-JQUERYDND-fe-s-1499364502-1.js?v=1",
                cookieName: "cseChatSessionId",
                position: ""
            }
        } else {
            config = {
                chatUrl: "https://help.netflix.com/chat?locale=en&country=US&cell=&stickyLocale=false",
                chatBoxUrl: "https://help.netflix.com/chatbox?locale=en&country=US&cell=&stickyLocale=false",
                newChatUrl: "https://help.netflix.com/startchat?cmd=request&locale=en&country=US&cell=",
                newChatAfterSignInUrl: "https://help.netflix.com/startchat?cmd=request&waitForSignin=true&locale=en&country=US&cell=",
                chatAvailUrl: "https://help.netflix.com/startchat?cmd=chat_available&locale=en&country=US&cell=",
                jqueryDnD: "https://help.nflximg.net/FilePackageGetter/sharedSystem/pkg-JQUERYDND-fe-s-1499364502-1.js?v=1",
                cookieName: "cseChatSessionId",
                position: ""
            };
        }

        var chatInstance,
            Utils = {
                chatInProgress: false,

                getCookie: function (c_name) {
                    var i, x, y, ARRcookies = document.cookie.split(";");
                    for (i = 0; i < ARRcookies.length; i++) {
                        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                        x = x.replace(/^\s+|\s+$/g, "");
                        if (x == c_name) {
                            return unescape(y);
                        }
                    }
                },
                getConfigCookie: function() {
                    return this.getCookie(config.cookieName) && "-";
                },
                isMobileBrowser : function(){
                    var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Mobile/i) ? true : false;
                    if (isMobile) {
                        return true;
                    }
                    return false;
                },

                deleteCookie: function (c_name) {
                    if (c_name) {
                        document.cookie = c_name + "=; domain=netflix.com; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    }
                },

                bind: function (evnt, elem, func) {
                    if (elem.addEventListener) {
                        elem.addEventListener(evnt,func,false);
                    } else if (elem.attachEvent) {
                        var r = elem.attachEvent("on" + evnt, func);
                    }
                },

                onload: function (func) {
                    var deferredFunc = function () {
                        setTimeout(func, 1);
                    };
                    // Catch cases where $(document).ready() is called after the
                    // browser event has already occurred.
                    if (document.readyState === "complete") {
                        // Handle it asynchronously to allow scripts the opportunity to delay ready
                        deferredFunc();
                        return;
                    }

                    var funcCalled = false,
                            funcWrapper = function () {
                                if (funcCalled === true) {
                                    return;
                                }
                                if (document.addEventListener) {
                                    document.removeEventListener("DOMContentLoaded", funcWrapper, false);
                                    deferredFunc();
                                    funcCalled = true;
                                } else if (document.attachEvent) {
                                    document.detachEvent("onreadystatechange", funcWrapper);
                                    deferredFunc();
                                    funcCalled = true;
                                }
                            };

                    if (document.addEventListener) {
                        // Use the handy event callback
                        document.addEventListener("DOMContentLoaded", funcWrapper, false);

                        // A fallback to window.onload, that will always work
                        window.addEventListener("load", funcWrapper, false);

                    } else if (document.attachEvent) {

                        document.attachEvent("onreadystatechange", funcWrapper);

                        // A fallback to window.onload, that will always work
                        window.attachEvent("onload", funcWrapper);
                    }
                },

                loadScript: function (url, callback) {
                    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                            script = document.createElement("script");
                    script.async = "async";
                    script.src = url;
                    script.onload = script.onreadystatechange = function (_, isAbort) {
                        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (head && script.parentNode) {
                                head.removeChild(script);
                            }
                            script = undefined;
                            callback();
                        }
                    };
                    head.insertBefore(script, head.firstChild);

                },


                post: function(url, callback, postParams) {
                    if (!postParams) {
                        postParams = "";
                    }

                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', url);
                    xhr.withCredentials = true;
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            if (typeof callback == 'function') {
                                var responseData= JSON.parse(xhr.responseText);
                                callback(responseData);
                            }
                        }
                    };

                   xhr.send(postParams + "&cf_token=" + this.getCookie("cf_token"));
                },

                onPageVisible: function (visiblecb, hiddencb) {
                    var change, vis = {
                        hidden: "visibilitychange",
                        mozHidden: "mozvisibilitychange",
                        webkitHidden: "webkitvisibilitychange",
                        msHidden: "msvisibilitychange",
                        oHidden: "ovisibilitychange" /* not currently supported */
                    };
                    for (var hidden in vis) {
                        if (vis.hasOwnProperty(hidden) && hidden in document) {
                            change = vis[hidden];
                            break;
                        }
                    }
                    if (change) {
                        document.addEventListener(change, onchange);
                    } else if (/*@cc_on!@*/false) { // IE 9 and lower
                        document.onfocusin = document.onfocusout = onchange
                    } else {
                        window.onfocus = window.onblur = onchange;
                    }

                    function onchange(evt) {
                        var body = document.body;
                        evt = evt || window.event;

                        if (evt.type == "focus" || evt.type == "focusin") {
                            visiblecb();
                        } else if (evt.type == "blur" || evt.type == "focusout") {
                            if (document.hasFocus && document.hasFocus()) {
                                return;
                            }
                            hiddencb();
                        } else {
                            if (this[hidden]) {
                                hiddencb();
                            } else {
                                visiblecb();
                            }
                        }
                    }
                },

                supportsLocalStorage : function(){
                    try {
                        return 'localStorage' in window && window['localStorage'] !== null;
                    } catch (e) {
                        return false;
                    }
                },

                shouldPopout: function() {
                    // Don't support popout in Safari as it always opens tab.
                    var nAgt = navigator.userAgent;
                    if (nAgt.indexOf("Safari") != -1 && nAgt.indexOf("Chrome") == -1) {
                        return false;
                    }

                    return this.supportsLocalStorage();
                },

                getQueryParameter: function (name) {
                    try {
                        var search = location.search;
                        if (!search) {
                            return;
                        }
                        if (search.charAt(0) == '?') {
                            search = search.substring(1);
                        }
                        var searchArr = search.split("&"),
                                searchLen = searchArr.length;
                        for (var i = 0; i < searchLen; i++) {
                            var keyVal = (searchArr[i] || "").split("=");
                            if (keyVal[0] === name) {
                                return keyVal[1];
                            }
                        }
                    } catch (e) {
                    }
                },

                getViewPort: function () {
                    var viewPortWidth, viewPortHeight;

                    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
                    if (typeof window.innerWidth != 'undefined') {
                        viewPortWidth = window.innerWidth,
                                viewPortHeight = window.innerHeight
                    }

                    // older versions of IE
                    else {
                        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                                viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
                    }
                    return {width: viewPortWidth, height: viewPortHeight};

                },

                getWindowOrientation: function() {
                    //check if we're in LTR or RTL language - main page
                    var htmlDirection = document.getElementsByTagName("html")[0].getAttribute("dir") || "LTR";
                    var initialPosition = (htmlDirection === "LTR") ? 'right' : 'left';
                    return initialPosition;
                },

                getChatLanguageOrientation: function() {
                    //get chat window's language orientation which may be different than window's language
                    var languageDirection = "LTR";
                    var chatLanguageOrientation = (languageDirection.toLowerCase() === "ltr") ? 'left' : 'right';
                    return chatLanguageOrientation;
                }
            },

            ChatFrame = function (options) {
                options = options || {};

                this.chatFrameId = options.id || "cseChatFrameId";
                this.width = options.width || 360;
                this.height = options.height || 400;
                this.handleHeight = 50;
                this.closeWidth = 30;

                this.dragged = false;
                this.url = config.chatBoxUrl;
                this.css = {
                    chatDiv: {
                        width: this.width + "px",
                        height: this.height + "px",
                        position: "fixed",
                        border: "none",
                        zIndex: "1000",
                        overflow: "hidden"
                    },
                    chatDivPosition: {
                        bottom: "0px"
                    },
                    iframe: {
                        overflow: "hidden",
                        background: "transparent",
                        border: "none",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        width: "100%",
                        height: "100%"
                    },
                    iframeMask: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px"
                    },
                    dragHandle: {
                        width: "36%",
                        height: this.handleHeight + "px",
                        position: "absolute",
                        top: "0px",
                        cursor: "move"
                    },
                    resizeHandle: {
                        position: "absolute",
                        bottom: "0px",
                        width: "32px",
                        height: "32px",
                        backgroundImage: "none"
                    }
                };

                //set chat window position based on window locale orientation
                this.css.chatDivPosition[Utils.getWindowOrientation()] = "10px";

                // set drag handle on header based on actual chat user language
                this.css.dragHandle[Utils.getChatLanguageOrientation()] = "33%";
            };

        ChatFrame.prototype.startChat = function (chatSessionId, helpText, startcb, endcb) {

            var chatElem = document.getElementById(this.chatFrameId),
                    chatFrameObj = this;
            if (!this.chatNodes) {
                chatElem = document.createElement("div"),
                        chatIframe = document.createElement('iframe'),
                        iframeMask = document.createElement("div"),
                        dragHandle = document.createElement("div"),
                        placeHolder = document.getElementById("cseChatPlaceholder")
                                || document.getElementsByTagName('body')[0];

                chatIframe.setAttribute("frameBorder", "0");
                chatIframe.setAttribute("allowTransparency", "true");
                chatElem.appendChild(chatIframe);
                this.applyCss(chatIframe, this.css.iframe);

                chatElem.appendChild(iframeMask);
                this.applyCss(iframeMask, this.css.iframeMask);
                chatElem.appendChild(dragHandle);
                this.applyCss(dragHandle, this.css.dragHandle);

                chatElem.setAttribute("id", this.chatFrameId);
                this.applyCss(chatElem, this.css.chatDiv);
                this.applyCss(chatElem, this.getPosistionCss());
                placeHolder.appendChild(chatElem);

                this.bindOnResize();

                this.chatNodes = {
                    chatDiv: chatElem,
                    iframe: chatIframe,
                    dragHandle: dragHandle
                };

                Utils.bind("load", chatIframe, function () {
                    var onLoadCallback = function (res) {
                        if (res && res.data && !res.data.chatEvents && !Utils.getConfigCookie(config.cookieName)) {
                            while (chatElem.firstChild) {
                                chatElem.removeChild(chatElem.firstChild);
                            }
                            placeHolder.removeChild(chatElem);
                            Utils.chatInProgress = false;
                            typeof endcb == "function" && endcb();
                            return;
                        }
                        Utils.chatInProgress = true;

                        typeof startcb == "function" && startcb(null, chatSessionId);
                    };

                    setTimeout(function() {
                        Utils.post(config.chatUrl + "&chatSessionId=" + chatSessionId, onLoadCallback);
                    }, 100);
                });

                try {
                    Utils.bind("message", window, function (e) {
                        if (e.data == "hide") {
                            chatFrameObj.applyCss(chatElem, {display: "none"});
                        } else {
                            chatFrameObj.applyCss(chatElem, {display: "block"});
                        }
                    });
                } catch (e) {
                    if (window.console && console.error) console.error(e);
                }

                var _self = this,
                    setupDnD = function ($) {
                        var iMask = $(iframeMask);
                        if ($.fn.draggable) {
                            $(chatElem).draggable({
                                handle: dragHandle,
                                containment: "parent",
                                start: function () {
                                    if (_self.dragged === false) {
                                        $(chatElem).css({right: "auto", bottom: "auto"});
                                        _self.dragged = true;
                                    }
                                    iMask.css("bottom", "0");
                                },
                                stop: function () {
                                    iMask.css("bottom", "auto");
                                }
                            });
                            $(chatElem).resizable({
                                minWidth: 320,
                                start: function () {
                                    iMask.css("bottom", "0");
                                },
                                stop: function () {
                                    iMask.css("bottom", "auto");
                                }
                            }).find(".ui-resizable-se").css(_self.css.resizeHandle);
                        }
                    };

                try {
                    if (window.jQuery && typeof jQuery.fn.draggable == "function"
                            && typeof jQuery.fn.resizable == "function") {   // jQuery dependent code.
                        setupDnD(window.jQuery);
                    } else {
                        Utils.loadScript(config.jqueryDnD, function () {
                            setupDnD(jQuery.noConflict(true));   // Call no conflict to restore old jquery in page.
                        });
                    }

                } catch (e) {

                }
            }

            var chatIframeUrl = this.url + "&chatSessionId=" + encodeURIComponent(chatSessionId) + "&enablePopout=" + Utils.shouldPopout();
            if (helpText) {
                chatIframeUrl += "&helpText=" + encodeURIComponent(helpText);
            }
            this.chatNodes.iframe.src = chatIframeUrl;
            return this;
        };

        ChatFrame.prototype.applyCss = function (node, css) {
            for (var st in css) {
                try {
                    node.style[st] = css[st];
                } catch (e) {

                }
            }
        };

        ChatFrame.prototype.getPosistionCss = function () {
            var posCss = this.css.chatDivPosition,
                position = config.position || Utils.getQueryParameter("chatPosition"),
                xPx = posCss.right, yPx = posCss.bottom,
                viewPort = Utils.getViewPort(),
                xMidPx = Math.ceil((viewPort.width - this.width) / 2) + "px",
                yMidPx = Math.ceil((viewPort.height - this.height) / 2) + "px";

            if (!position) {
                return posCss;
            }

            delete posCss["bottom"];
            delete posCss["right"];

            switch (position.toLowerCase()) {
                case "topleft":
                    posCss.top = yPx;
                    posCss.left = xPx;
                    break;
                case "topright":
                    posCss.top = yPx;
                    posCss.right = xPx;
                    break;
                case "bottomleft":
                    posCss.bottom = yPx;
                    posCss.left = xPx;
                    break;
                case "topcenter":
                    posCss.top = yPx;
                    posCss.left = xMidPx;
                    break;
                case "bottomcenter":
                    posCss.bottom = yPx;
                    posCss.left = xMidPx;
                    break;
                case "rightcenter":
                    posCss.right = xPx;
                    posCss.top = yMidPx;
                    break;
                case "leftcenter":
                    posCss.left = xPx;
                    posCss.top = yMidPx;
                    break;
                default:
                    posCss.bottom = yPx;
                    posCss.right = xPx;
                    break;
            }
            return posCss;
        };

        /* handle chat resize postMessage from chatbox */
        ChatFrame.prototype.bindOnResize = function () {
            /* Create IE + others compatible event handler */
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
            var chatElem = document.getElementById(this.chatFrameId),
                chatFrameObj = this;

            /* Listen to message from child window */
            eventer(messageEvent, function (e) {
                if (!e && !e.data) {
                    return;
                }
                if (typeof e.data === "string" && e.data.indexOf("chat-resize") === 0) {
                    var padding;
                    try {
                        padding = parseInt(e.data.split(":")[1], 10);
                    } catch (e) {

                    }

                    /* jQuery should be loaded by this time */
                    if (!padding || !window.jQuery) {
                        return;
                    }
                    var $chatElem = window.jQuery(chatElem),
                        chatElHeight = $chatElem.height() + padding,
                        viewPortHeight = window.jQuery(window).height();

                    if (viewPortHeight < chatElHeight) {
                        chatElHeight = viewPortHeight;
                    }
                    $chatElem.height(chatElHeight);
                }
            }, false);
        };


        // Register top frame events
        var ns = window.NETFLIX = window.NETFLIX || {};
        ns.cse = ns.cse || {};

        ns.cse.cmd = {
            startChat: function (chatSessionId, helpText, startcb, endcb) {
                chatInstance = new ChatFrame().startChat(chatSessionId, helpText, startcb, endcb);
                return chatInstance.el;
            },
            startNewChat: function (startcb, endcb, chatContext) {
                if (Utils.getCookie(config.cookieName)) {
                    if (Utils.chatInProgress) {
                        typeof startcb == "function" && startcb();
                        return;
                    }
                    Utils.deleteCookie(config.cookieName);
                }

                var postParams = this.getPostParams(chatContext);

                var callback = function(response) {
                    if (!response || response.result === "error") {
                        if (startcb) {
                            startcb(response ? response.actionErrors : []);
                        }
                        return;
                    }
                    ns.cse.cmd.startChat(response.data.chatSessionId, null, startcb, endcb);
                };

                Utils.post(config.newChatUrl, callback, postParams);
            },

            startNewChatAfterLogin: function (startcb, chatContext) {
                if (Utils.getCookie(config.cookieName)) {
                    if (Utils.chatInProgress) {
                        typeof startcb == "function" && startcb();
                        return;
                    }
                    Utils.deleteCookie(config.cookieName);
                }

                var postParams = this.getPostParams(chatContext);
                var callback = function(response) {
                    if (!response || response.result === "error") {
                        if (startcb) {
                            startcb(response ? response.actionErrors : []);
                        }
                        return;
                    }
                    if (startcb) {
                        startcb(null, response.data.chatSessionId);
                    }
                };

                Utils.post(config.newChatAfterSignInUrl, callback, postParams);
            },

            getPostParams: function(chatContext){
                var forceChatSkill = Utils.getQueryParameter("forceChatSkill"),
                        postParams = "";

                if (forceChatSkill) {
                    postParams += "forceChatSkill=" + encodeURIComponent(forceChatSkill);
                }
                if (chatContext) {
                    postParams  += "&chatContext="  +  encodeURIComponent(chatContext);
                }

                if (Utils.supportsLocalStorage()) {
                    var localStorage = window['localStorage'];
                    var problemDescription = localStorage.getItem("CHAT_DESC");
                    if (problemDescription) {
                        postParams += "&problemDescription=" + encodeURIComponent(problemDescription);
                        localStorage.removeItem("CHAT_DESC");
                    }

                    var referral = localStorage.getItem("cse.chat.REFERRAL");
                    if (referral) {
                        postParams += "&referral=" + encodeURIComponent(referral);
                        localStorage.removeItem("cse.chat.REFERRAL");
                    }
                }

                return postParams;
            },

            isChatAvailable: function (callback) {
                Utils.post(config.chatAvailUrl, function (resp) {
                    if (!resp || resp.result === "error") {
                        callback(false, resp ? resp.actionErrors[0].message : null);
                        return;
                    }
                    callback(true, {ewtInMinutes: resp.data.ewt, ewtGreaterThanMax: resp.data.ewtGreaterThanMax});
                });
            },
            isChatActive: function (callback) {
                var sessionId = Utils.getCookie(config.cookieName);
                if (!sessionId) {
                    callback(false);
                    return;
                }
                Utils.post(config.chatUrl + "&cmd=CHAT_STATE&chatSessionId=" + encodeURIComponent(sessionId), function (res) {
                    if (res && res.data) {
                        callback(!res.data.chatEnded);
                    } else {
                        callback(false);
                    }
                });
            }
        };

        var sessionId = Utils.getCookie(config.cookieName);
        if (sessionId) {
            Utils.onload(function () {
                if (Utils.isMobileBrowser()
                        || (Utils.supportsLocalStorage() && window.localStorage.getItem("NETFLIX.cse.chat.popOutState") === "popout")) {
                    return;
                }
                Utils.post(config.chatUrl + "&cmd=CHAT_STATE&chatSessionId=" + encodeURIComponent(sessionId), function (res) {
                    if (res && res.data) {

                        if ((res.data.chatEnded === false && res.data.hideChat !== true) || res.data.chatJustEnded) {
                            var pageCbs = {},
                                chatLanguageOrientation;
                            if (window.NETFLIX && NETFLIX.cse && typeof NETFLIX.cse.beforeLoadChat == "function") {
                                pageCbs = NETFLIX.cse.beforeLoadChat();
                            }
                            if(res.data.chatLanguageOrientation !== null) {
                                chatLanguageOrientation = res.data.chatLanguageOrientation;
                            }
                            chatInstance = new ChatFrame()
                                    .startChat(sessionId, null, pageCbs.startcb, pageCbs.endcb);

                        }
                    }
                });
            });
        }

        // Listen for messages from iFrame and blink title
        (function ($) {
            function watchVisibility(onVisibilityChanged) {
                var hidden, visibilityChange;

                if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
                    hidden = "hidden";
                    visibilityChange = "visibilitychange";
                } else if (typeof document.msHidden !== "undefined") {
                    hidden = "msHidden";
                    visibilityChange = "msvisibilitychange";
                } else if (typeof document.webkitHidden !== "undefined") {
                    hidden = "webkitHidden";
                    visibilityChange = "webkitvisibilitychange";
                }

                var documentHidden = document[hidden];

                $(document).on(visibilityChange, function () {
                    if (documentHidden !== document[hidden]) {
                        documentHidden = document[hidden];
                        onVisibilityChanged(!documentHidden);
                    }
                });
            }

            var original = document.title;
            var timeout;
            var isFlashing = false;

            function flashTitle(newMsg) {
                if (isFlashing) {
                    return;
                }

                function step() {
                    document.title = (document.title === original) ? newMsg : original;

                    if (isFlashing) {
                        timeout = setTimeout(step, 2000);
                    }
                }

                cancelFlashTitle();
                isFlashing = true;
                step();
            }

            function cancelFlashTitle() {
                isFlashing = false;
                clearTimeout(timeout);
                document.title = original;
            }

            $(function () {
                var isVisible = true;

                function onVisibilityChanged(visible) {
                    isVisible = visible;
                    if (isVisible) {
                        cancelFlashTitle();
                    }
                }

                watchVisibility(onVisibilityChanged);

                $(window).on('message', function (e) {
                    var origin = e.origin || e.originalEvent.origin;
                    if (location.protocol + "//" + location.host !== origin) {
                        return;
                    }

                    if (!isVisible) {
                        flashTitle(netflixSaysText);
                    }
                });
            });
        })(jQuery);
    })();

