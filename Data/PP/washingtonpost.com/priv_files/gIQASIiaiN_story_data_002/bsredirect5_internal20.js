function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null) {
                return errorsArr;
            }
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    };

    function handleSpecificHandler(handler) {
        var request;
        var errorObj = null;

        try {
            request = handler.createRequest();
            if (request && !request.isSev1) {
                var url = request.url || request;
                if (url) {
                    if (!handler.sendRequest(url)) {
                        errorObj = createAndGetError('sendRequest failed.',
                            url,
                            handler.getVersion(),
                            handler.getVersionParamName(),
                            handler.dv_script);
                    }
                } else {
                    errorObj = createAndGetError('createRequest failed.',
                        url,
                        handler.getVersion(),
                        handler.getVersionParamName(),
                        handler.dv_script,
                        handler.dvScripts,
                        handler.dvStep,
                        handler.dvOther
                    );
                }
            }
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, request ? (request.url || request) : null, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script, dvScripts, dvStep, dvOther) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD') {
            errorObj['dvp_isOnHead'] = '1';
        }
        if (url) {
            errorObj['dvp_jsErrUrl'] = url;
        }
        if (dvScripts) {
            var dvScriptsResult = '';
            for (var id in dvScripts) {
                if (dvScripts[id] && dvScripts[id].src) {
                    dvScriptsResult += encodeURIComponent(dvScripts[id].src) + ":" + dvScripts[id].isContain + ",";
                }
            }
            
            
            
        }
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) { 
                isEvaluationVersionChosen = true;
            }
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable()) {
            return handlersArray[index].handler;
        }
        else {
            return null;
        }
    }
}

function dv_GetParam(url, name, checkFromStart) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = (checkFromStart ? "(?:\\?|&|^)" : "[\\?&]") + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_SendErrorImp(serverUrl, errorsArr) {
    for (var j = 0; j < errorsArr.length; j++) {
        var errorQueryString = '';
        var errorObj = errorsArr[j];
        for (key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
                if (key.indexOf('dvp_jsErrUrl') == -1) {
                    errorQueryString += '&' + key + '=' + errorObj[key];
                }
                else {
                    var params = ['ctx', 'cmp', 'plc', 'sid'];
                    for (var i = 0; i < params.length; i++) {
                        var pvalue = dv_GetParam(errorObj[key], params[i]);
                        if (pvalue) {
                            errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                        }
                    }
                }
            }
        }

        var windowProtocol = 'https:';
        var sslFlag = '&ssl=1';

        var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
        dv_sendRequest(errorImp);
    }
}

function dv_sendRequest(url) {
    document.write('<scr' + 'ipt language="javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dvBsrType() {
    'use strict';
    var that = this;
    var eventsForDispatch = {};

    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {
        this.addImage = function (url, parentElement) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        };
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () {
    };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    };

    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.getTagObjectByService = function (serviceName) {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] === 'object'
                && this.tags[impressionId].services
                && this.tags[impressionId].services[serviceName]
                && !this.tags[impressionId].services[serviceName].isProcessed) {
                this.tags[impressionId].services[serviceName].isProcessed = true;
                return this.tags[impressionId];
            }
        }

        return null;
    };

    this.addService = function (impressionId, serviceName, paramsObject) {
        if (!impressionId || !serviceName)
            return;

        if (!this.tags[impressionId])
            return;
        else {
            if (!this.tags[impressionId].services)
                this.tags[impressionId].services = {};

            this.tags[impressionId].services[serviceName] = {
                params: paramsObject,
                isProcessed: false
            };
        }
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5},
        TrafficScenario: {OnPage: 1, SameDomain: 2, CrossDomain: 128}
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) {
            return false;
        }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };

    
    var messagesClass = function () {
        var waitingMessages = [];

        this.registerMsg = function(dvFrame, data) {
            if (!waitingMessages[dvFrame.$frmId]) {
                waitingMessages[dvFrame.$frmId] = [];
            }

            waitingMessages[dvFrame.$frmId].push(data);

            if (dvFrame.$uid) {
                sendWaitingEventsForFrame(dvFrame, dvFrame.$uid);
            }
        };

        this.startSendingEvents = function(dvFrame, impID) {
            sendWaitingEventsForFrame(dvFrame, impID);
            
        };

        function sendWaitingEventsForFrame(dvFrame, impID) {
            if (waitingMessages[dvFrame.$frmId]) {
                var eventObject = {};
                for (var i = 0; i < waitingMessages[dvFrame.$frmId].length; i++) {
                    var obj = waitingMessages[dvFrame.$frmId].pop();
                    for (var key in obj) {
                        if (typeof obj[key] !== 'function' && obj.hasOwnProperty(key)) {
                            eventObject[key] = obj[key];
                        }
                    }
                }
                that.registerEventCall(impID, eventObject);
            }
        }

        function startMessageManager() {
            for (var frm in waitingMessages) {
                if (frm && frm.$uid) {
                    sendWaitingEventsForFrame(frm, frm.$uid);
                }
            }
            setTimeout(startMessageManager, 10);
        }
    };
    this.messages = new messagesClass();

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                dispatchEventCalls(impressionId, this);
        }
    };

    var dispatchEventCalls = function (impressionId, dvObj) {
        var tag = dvObj.tags[impressionId];
        var eventObj = eventsForDispatch[impressionId];
        if (typeof eventObj !== 'undefined' && eventObj != null) {
            var url = tag.protocol + '//' + tag.ServerPublicDns + "/bsevent.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObj);
            dvObj.domUtilities.addImage(url, tag.tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };

    this.registerEventCall = function (impressionId, eventObject, timeoutMs) {
        addEventCallForDispatch(impressionId, eventObject);

        if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
            dispatchEventCallsNow(this, impressionId, eventObject);
        else {
            if (timeoutMs > 2000)
                timeoutMs = 2000;

            var dvObj = this;
            setTimeout(function () {
                dispatchEventCalls(impressionId, dvObj);
            }, timeoutMs);
        }
    };

    var dispatchEventCallsNow = function (dvObj, impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId, dvObj);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('unload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.addEventListener('beforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.attachEvent('onbeforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else {
        window.document.body.onunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
        window.document.body.onbeforeunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };
}

function dv_baseHandler(){function R(c){var b="http:",a=window._dv_win.location.toString().match("^http(?:s)?");if("https"==c.match("^https")&&("https"==a||"http"!=a))b="https:";return b}function C(c){var b=window._dv_win.dvRecoveryObj;if(b){var a=dv_GetParam(c.dvparams,"ctx",!0),b=b[a]?b[a].RecoveryTagID:b._fallback_?b._fallback_.RecoveryTagID:1;1===b&&c.tagsrc?document.write(c.tagsrc):2===b&&c.altsrc&&document.write(c.altsrc);return!0}return!1}function S(){var c;c=!window._dv_win.dv_config||!window._dv_win.dv_config.isUT?
window._dv_win.bsredirect5ScriptsInternal.pop():window._dv_win.bsredirect5ScriptsInternal[window._dv_win.bsredirect5ScriptsInternal.length-1];window._dv_win.bsredirect5Processed.push(c);return c}function T(c,b){var a=document.createElement("iframe");a.name=a.id="iframe_"+dv_GetRnd();a.width=0;a.height=0;a.id=b;a.style.display="none";a.src=c;return a}function J(c,b,a){var a=a||150,d=window._dv_win||window;if(d.document&&d.document.body)return b&&b.parentNode?b.parentNode.insertBefore(c,b):d.document.body.insertBefore(c,
d.document.body.firstChild),!0;if(0<a)setTimeout(function(){J(c,b,--a)},20);else return!1}function K(c){var b=null;try{if(b=c&&c.contentDocument)return b}catch(a){}try{if(b=c.contentWindow&&c.contentWindow.document)return b}catch(d){}try{if(b=window._dv_win.frames&&window._dv_win.frames[c.name]&&window._dv_win.frames[c.name].document)return b}catch(i){}return null}function L(c,b,a,d,i,e,q){var f,g;f=window._dv_win.dv_config&&window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:dv_GetRnd();
var h,l=window.parent.postMessage&&window.JSON;g=!0;var s=!1;if("0"==dv_GetParam(c.dvparams,"t2te")||window._dv_win.dv_config&&!0==window._dv_win.dv_config.supressT2T)s=!0;if(l&&!1==s)try{s="https://cdn3.doubleverify.com/bst2tv3.html",window._dv_win&&(window._dv_win.dv_config&&window._dv_win.dv_config.bst2turl)&&(s=window._dv_win.dv_config.bst2turl),h=T(s,"bst2t_"+f),g=J(h)}catch(L){}var z,U=(z=(/iPhone|iPad|iPod|\(Apple TV|iOS|Coremedia|CFNetwork\/.*Darwin/i.test(navigator.userAgent)||navigator.vendor&&
"apple, inc."===navigator.vendor.toLowerCase())&&!window.MSStream)?"https:":R(q.src),V="0";"https:"==U&&(V="1");h=c.rand;var W="__verify_callback_"+h,X="__tagObject_callback_"+h;window[W]=function(b){try{if(void 0==b.ResultID)document.write(1!=b?c.tagsrc:c.altsrc);else switch(b.ResultID){case 1:b.Passback?document.write(decodeURIComponent(b.Passback)):document.write(c.altsrc);break;case 2:case 3:document.write(c.tagsrc)}}catch(a){}};z?h="https:":(h="http:","http:"!=window._dv_win.location.protocol&&
(h="https:"));var C=h,Y=z?"https:":R(q.src),Z="0";"https:"===Y&&(Z="1");var M=window._dv_win.document.visibilityState;window[X]=function(b){try{var a={};a.protocol=C;a.ssl=Z;a.dv_protocol=Y;a.serverPublicDns=b.ServerPublicDns;a.ServerPublicDns=b.ServerPublicDns;a.tagElement=q;a.redirect=c;a.impressionId=b.ImpressionID;window._dv_win.$dvbsr.tags.add(b.ImpressionID,a);if(q.dvFrmWin){var e=window._dv_win.$dvbsr;q.dvFrmWin.$uid=b.ImpressionID;e.messages&&e.messages.startSendingEvents&&e.messages.startSendingEvents(q.dvFrmWin,
b.ImpressionID)}var d=function(){var a=window._dv_win.document.visibilityState;"prerender"===M&&("prerender"!==a&&"unloaded"!==a)&&(M=a,window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0}),window._dv_win.document.removeEventListener(f,d))};if("prerender"===M)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0});else{var f;"undefined"!==typeof window._dv_win.document.hidden?f="visibilitychange":
"undefined"!==typeof window._dv_win.document.mozHidden?f="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?f="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(f="webkitvisibilitychange");window._dv_win.document.addEventListener(f,d,!1)}var i;var a={verifyc:{prefix:"vf",stats:[{name:"duration",prefix:"dur"}]}},h;b:{e={};try{if(window&&window.performance&&window.performance.getEntries)for(var j=window.performance.getEntries(),g=0;g<j.length;g++){var k=
j[g],l=k.name.match(/.*\/(.+?)\./);if(l&&l[1]){var m=l[1].replace(/\d+$/,""),n=a[m];if(n){for(var p=0;p<n.stats.length;p++){var r=n.stats[p];e[n.prefix+r.prefix]=Math.round(k[r.name])}delete a[m];if(!$(a))break}}}h=e;break b}catch(s){}h=void 0}i=h&&$(h)?h:void 0;i&&window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,i)}catch(t){}};void 0==c.dvregion&&(c.dvregion=0);var N="",s=h="";try{for(var m=a,j=0;10>j&&m!=window.top;)j++,m=m.parent;a.depth=j;dv_additionalUrl=ca(a);h="&aUrl="+encodeURIComponent(dv_additionalUrl.url);
s="&aUrlD="+dv_additionalUrl.depth;N=a.depth+d;i&&a.depth--}catch(S){s=h=N=a.depth=""}void 0!=c.aUrl&&(h="&aUrl="+c.aUrl);var D;d=function(){try{return!!window.sessionStorage}catch(b){return!0}};i=function(){try{return!!window.localStorage}catch(b){return!0}};m=function(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var a=b.getContext("2d");a.textBaseline="top";a.font="14px 'Arial'";a.textBaseline="alphabetic";a.fillStyle="#f60";a.fillRect(0,0,62,20);a.fillStyle="#069";
a.fillText("!image!",2,15);a.fillStyle="rgba(102, 204, 0, 0.7)";a.fillText("!image!",4,17);return b.toDataURL()}return null};try{j=[];j.push(["lang",navigator.language||navigator.browserLanguage]);j.push(["tz",(new Date).getTimezoneOffset()]);j.push(["hss",d()?"1":"0"]);j.push(["hls",i()?"1":"0"]);j.push(["odb",typeof window.openDatabase||""]);j.push(["cpu",navigator.cpuClass||""]);j.push(["pf",navigator.platform||""]);j.push(["dnt",navigator.doNotTrack||""]);j.push(["canv",m()]);var n=j.join("=!!!=");
if(null==n||""==n)D="";else{for(var d=function(a){for(var b="",c,e=7;0<=e;e--)c=a>>>4*e&15,b+=c.toString(16);return b},i=[1518500249,1859775393,2400959708,3395469782],n=n+String.fromCharCode(128),v=Math.ceil((n.length/4+2)/16),p=Array(v),m=0;m<v;m++){p[m]=Array(16);for(j=0;16>j;j++)p[m][j]=n.charCodeAt(64*m+4*j)<<24|n.charCodeAt(64*m+4*j+1)<<16|n.charCodeAt(64*m+4*j+2)<<8|n.charCodeAt(64*m+4*j+3)}p[v-1][14]=8*(n.length-1)/Math.pow(2,32);p[v-1][14]=Math.floor(p[v-1][14]);p[v-1][15]=8*(n.length-1)&
4294967295;for(var n=1732584193,j=4023233417,E=2562383102,F=271733878,G=3285377520,r=Array(80),A,t,w,x,H,m=0;m<v;m++){for(var k=0;16>k;k++)r[k]=p[m][k];for(k=16;80>k;k++)r[k]=(r[k-3]^r[k-8]^r[k-14]^r[k-16])<<1|(r[k-3]^r[k-8]^r[k-14]^r[k-16])>>>31;A=n;t=j;w=E;x=F;H=G;for(k=0;80>k;k++){var aa=Math.floor(k/20),K=A<<5|A>>>27,B;c:{switch(aa){case 0:B=t&w^~t&x;break c;case 1:B=t^w^x;break c;case 2:B=t&w^t&x^w&x;break c;case 3:B=t^w^x;break c}B=void 0}var da=K+B+H+i[aa]+r[k]&4294967295;H=x;x=w;w=t<<30|t>>>
2;t=A;A=da}n=n+A&4294967295;j=j+t&4294967295;E=E+w&4294967295;F=F+x&4294967295;G=G+H&4294967295}D=d(n)+d(j)+d(E)+d(F)+d(G)}}catch(ka){D=null}var v=window._dv_win&&window._dv_win.dv_config&&window._dv_win.dv_config.verifyJSCURL?dvConfig.verifyJSCURL+"?":U+"//rtb"+c.dvregion+".doubleverify.com/verifyc.js?",I;a:{p=window._dv_win;r=0;try{for(;10>r;){if(p.maple&&"object"===typeof p.maple){I=!0;break a}if(p==p.parent){I=!1;break a}r++;p=p.parent}}catch(la){}I=!1}a=v+c.dvparams+"&num=5&srcurlD="+a.depth+
"&callback="+W+"&jsTagObjCallback="+X+"&ssl="+V+(z?"&dvf=0":"")+(I?"&dvf=1":"")+"&refD="+N+"&htmlmsging="+(l?"1":"0")+"&guid="+f+(null!=D?"&aadid="+D:"");b="dv_url="+encodeURIComponent(b);if(!1==g||e)a=a+("&dvp_isBodyExistOnLoad="+(g?"1":"0"))+("&dvp_isOnHead="+(e?"1":"0"));if((e=window[O("=@42E:@?")][O("2?46DE@C~C:8:?D")])&&0<e.length){g=[];g[0]=window.location.protocol+"//"+window.location.hostname;for(f=0;f<e.length;f++)g[f+1]=e[f];e=g.reverse().join(",")}else e=null;e&&(b+="&ancChain="+encodeURIComponent(e));
if(!1==/MSIE (\d+\.\d+);/.test(navigator.userAgent)||7<new Number(RegExp.$1)||2E3>=h.length+s.length+a.length)a+=s,b+=h;if(void 0!=window._dv_win.$dvbsr.CommonData.BrowserId&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent)f=window._dv_win.$dvbsr.CommonData.BrowserId,g=window._dv_win.$dvbsr.CommonData.BrowserVersion,e=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent;else{f=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},
{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];
e=0;g="";h=navigator.userAgent;for(l=0;l<f.length;l++)if(null!=h.match(RegExp(f[l].brRegex))){e=f[l].id;if(null==f[l].verRegex)break;h=h.match(RegExp(f[l].verRegex+"[0-9]*"));null!=h&&(g=h[0].match(RegExp(f[l].verRegex)),g=h[0].replace(g[0],""));break}f=l=ea();g=l===e?g:"";window._dv_win.$dvbsr.CommonData.BrowserId=f;window._dv_win.$dvbsr.CommonData.BrowserVersion=g;window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent=e}a+="&brid="+f+"&brver="+g+"&bridua="+e;"prerender"===window._dv_win.document.visibilityState&&
(a+="&prndr=1");var y;try{var P=0,e=function(b,a){a&&32>b&&(P=(P|1<<b)>>>0)},fa=function(b,a){return function(){return b.apply(a,arguments)}},ga="svg"===document.documentElement.nodeName.toLowerCase(),ba=function(){return"function"!==typeof document.createElement?document.createElement(arguments[0]):ga?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)},ha=["Moz","O","ms","Webkit"],ia=["moz","o","ms","webkit"],u={style:ba("modernizr").style};
g=function(b,a,c,e,f){var d=b.charAt(0).toUpperCase()+b.slice(1),h=(b+" "+ha.join(d+" ")+d).split(" ");if("string"===typeof a||"undefined"===typeof a){a:{c=h;b=function(){i&&(delete u.style,delete u.modElem)};f="undefined"===typeof f?!1:f;if("undefined"!==typeof e&&(d=nativeTestProps(c,e),"undefined"!==typeof d)){a=d;break a}for(var i,g,j,d=["modernizr","tspan","samp"];!u.style&&d.length;)i=!0,u.modElem=ba(d.shift()),u.style=u.modElem.style;h=c.length;for(d=0;d<h;d++)if(g=c[d],j=u.style[g],~(""+g).indexOf("-")&&
(g=cssToDOM(g)),void 0!==u.style[g])if(!f&&"undefined"!==typeof e){try{u.style[g]=e}catch(k){}if(u.style[g]!=j){b();a="pfx"==a?g:!0;break a}}else{b();a="pfx"==a?g:!0;break a}b();a=!1}return a}h=(b+" "+ia.join(d+" ")+d).split(" ");for(g in h)if(h[g]in a){if(!1===c)return h[g];e=a[h[g]];return"function"===typeof e?fa(e,c||a):e}return!1};e(0,!0);var Q;f="requestFileSystem";l=window;0===f.indexOf("@")?Q=atRule(f):(-1!=f.indexOf("-")&&(f=cssToDOM(f)),Q=l?g(f,l,void 0):g(f,"pfx"));e(1,!!Q);e(2,window.CSS?
"function"==typeof window.CSS.escape:!1);e(3,g("shapeOutside","content-box",!0));y=P}catch(ma){y=0}y&&(a+="&m1="+y);y=ja();a+="&vavbkt="+y.vdcd;a+="&lvvn="+y.vdcv;""!=y.err&&(a+="&dvp_idcerr="+encodeURIComponent(y.err));return a+"&eparams="+encodeURIComponent(O(b))}function ja(){var c="";try{var b=eval(function(a,b,c,q,f,g){f=function(a){return(a<b?"":f(parseInt(a/b)))+(35<(a%=b)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;c--;)g[f(c)]=q[c]||f(c);q=[function(a){return g[a]}];
f=function(){return"\\w+"};c=1}for(;c--;)q[c]&&(a=a.replace(RegExp("\\b"+f(c)+"\\b","g"),q[c]));return a}("(G(){1A{1A{36('1z?3o:3h')}1B(e){d{1x:\"-4m\"}}n 1h=[1z];1A{n V=1z;67(V!=V.3r&&V.1K.5F.5l){1h.1y(V.1K);V=V.1K}}1B(e){}G 1P(19){1A{1v(n i=0;i<1h.1d;i++){16(19(1h[i]))d 1h[i]==1z.3r?-1:1}d 0}1B(e){d e.5X||'5D'}}G 3m(1a){d 1P(G(O){d O[1a]!=56})}G 37(O,35,19){1v(n 1a 57 O){16(1a.3a(35)>-1&&(!19||19(O[1a])))d 3o}d 3h}G g(s){n h=\"\",t=\"3N.;j&4M}4N/0:51'4r=B(4z-4e!,4k)5r\\\\{ >4o+4l\\\"4A<\";1v(i=0;i<s.1d;i++)f=s.3b(i),e=t.3a(f),0<=e&&(f=t.3b((e+41)%82)),h+=f;d h}n c=['4G\"1m-4c\"3G\"22','p','l','60&p','p','{','\\\\<}4\\\\3M-3D<\"3O\\\\<}4\\\\3z<Z?\"6','e','6p','-5,!u<}\"66}\"','p','J','-5g}\"<53','p','=o','\\\\<}4\\\\31\"2f\"w\\\\<}4\\\\31\"2f\"5v}2\"<,u\"<5}?\"6','e','J=',':<5u}T}<\"','p','h','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"2n<N\"[1s*1t\\\\\\\\2r-5K<2L\"2t\"4b]1c}C\"13','e','4L','\\\\<}4\\\\4v;5Q||\\\\<}4\\\\4t?\"6','e','+o','\"1f\\\\<}4\\\\1T\"I<-4s\"29\"5\"4w}26<}4O\"1f\\\\<}4\\\\1l}1E>1D-1C}2}\"29\"5\"46}26<}3Z','e','=J','W}U\"<5}3T\"7}F\\\\<}4\\\\[3R}3U:3W]m}b\\\\<}4\\\\[t:2b\"4I]m}b\\\\<}4\\\\[5W})5-u<}t]m}b\\\\<}4\\\\[5U]m}b\\\\<}4\\\\[5I}5P]m}64','e','65',':6g}<\"H-1Q/2M','p','6f','\\\\<}4\\\\17<U/1o}b\\\\<}4\\\\17<U/!m}9','e','=l','10\\\\<}4\\\\69}/68}U\"<5}5h\"7}59<2F}58\\\\4Z\"5E}/m}2z','e','=S=','\\\\<}4\\\\E-5p\\\\<}4\\\\E-5s\"5\\\\U?\"6','e','+J','\\\\<}4\\\\25!5t\\\\<}4\\\\25!5q)p?\"6','e','5m','-}\"5o','p','x{','\\\\<}4\\\\E<2q-5w}5C\\\\<}4\\\\5B\"5x-5y\\\\<}4\\\\5z.42-2}\"5A\\\\<}4\\\\5k<N\"H}5j?\"6','e','+S','W}U\"<5}K\"X\"7}F\\\\<}4\\\\y<1O\"1f\\\\<}4\\\\y<2j}U\"<5}1j\\\\<}4\\\\1n-2.42-2}\"w\\\\<}4\\\\1n-2.42-2}\"1p\"L\"\"M<30\"2Y\"2S<\"<5}2R\"2P\\\\<Z\"2T<Q\"2V{2X:3q\\\\2W<1k}38-39<}3k\"3j\"1q%3l<Q\"1q%3n?\"3i\"14\"7}3c','e','54','55:,','p','52','\\\\<}4\\\\4Y\\\\<}4\\\\23\"2O\\\\<}4\\\\23\"1Y,T}1Z+++++1j\\\\<}4\\\\50\\\\<}4\\\\21\"2O\\\\<}4\\\\21\"1Y,T}1Z+++++t','e','5i','\\\\<}4\\\\5f\"1Q\"5e}b\\\\<}4\\\\E\\\\5a<M?\"6','e','5b','W}U\"<5}K:5c\\\\<}4\\\\8-2}\"1p\".42-2}\"5d-5G<N\"5H<6c<6d}C\"3H<6e<6b[<]E\"27\"1m}\"2}\"6a[<]E\"27\"1m}\"2}\"E<}18&6n\"1\\\\<}4\\\\2A\\\\6o\\\\<}4\\\\2A\\\\1l}1E>1D-1C}2}\"z<6m-2}\"6l\"2.42-2}\"6h=6i\"7}6j\"7}P=6k','e','x','5R)','p','+','\\\\<}4\\\\2I:5O<5}5N\\\\<}4\\\\2I\"5J?\"6','e','5L','L!!5S.5T.H 61','p','x=','\\\\<}4\\\\62}63)u\"5Z\\\\<}4\\\\5Y-2?\"6','e','+=','\\\\<}4\\\\2x\"5V\\\\<}4\\\\2x\"4X--6q<\"2f?\"6','e','x+','\\\\<}4\\\\8-2}\"2p}\"2o<N\"w\\\\<}4\\\\8-2}\"2p}\"2o<N\"3X\")3Y\"<:3V\"3Q}9?\"6','e','+x','\\\\<}4\\\\2m)u\"3S\\\\<}4\\\\2m)u\"40?\"6','e','49','\\\\<}4\\\\2w}s<4a\\\\<}4\\\\2w}s<48\" 47-43?\"6','e','44','\\\\<}4\\\\E\"45-2}\"E(k\"3P<N\"[1s*3L\"3y<3A]3x?\"6','e','+e','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"3C<:[\\\\3w}}2M][\\\\3t,5}2]3u}C\"13','e','3v','10\\\\<}4\\\\3B}3K\\\\<}4\\\\3J$3E','e','3F',':3I<Z','p','4W','\\\\<}4\\\\E-4d\\\\<}4\\\\E-4J}4K\\\\<}4\\\\E-4H<4C?\"6','e','4D','$H:4E}Z!4F','p','+h','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-4T?\"6','e','4U','10\\\\<}4\\\\4V:,2H}U\"<5}1r\"7}4S<4R<2F}2z','e','4P','\\\\<}4\\\\17<U/4Q&1V\"E/1W\\\\<}4\\\\17<U/4B}C\"3d\\\\<}4\\\\17<U/f[&1V\"E/1W\\\\<}4\\\\17<U/4n[S]]1T\"4j}9?\"6','e','4g','4h}4i}4p>2s','p','4q','\\\\<}4\\\\1g:<1R}s<4x}b\\\\<}4\\\\1g:<1R}s<4y<}f\"u}2G\\\\<}4\\\\2K\\\\<}4\\\\1g:<1R}s<C[S]E:2b\"1o}9','e','l{','4u\\'<}4\\\\T}5n','p','==','\\\\<}4\\\\y<1O\\\\<}4\\\\y<2B\\\\<Z\"2C\\\\<}4\\\\y<2E<Q\"?\"6','e','6N','\\\\<}4\\\\2a}28-2c\"}2d<8k\\\\<}4\\\\2a}28-2c\"}2d/2Q?\"6','e','=8l','\\\\<}4\\\\E\"2f\"8m\\\\<}4\\\\8j<8e?\"6','e','o{','\\\\<}4\\\\8f-)2\"2U\"w\\\\<}4\\\\1g-8g\\\\1m}s<C?\"6','e','+l','\\\\<}4\\\\2g-2\"8h\\\\<}4\\\\2g-2\"8n<Z?\"6','e','+{','\\\\<}4\\\\E:8o}b\\\\<}4\\\\8v-8w}b\\\\<}4\\\\E:8x\"<8u\\\\}m}9?\"6','e','{S','\\\\<}4\\\\1i}\"11}8t\"-8p\"2f\"q\\\\<}4\\\\v\"<5}8q?\"6','e','o+',' &H)&8r','p','8s','\\\\<}4\\\\E.:2}\"c\"<8d}b\\\\<}4\\\\8c}b\\\\<}4\\\\7W<}f\"u}2G\\\\<}4\\\\2K\\\\<}4\\\\1l:}\"m}9','e','7X','7Y\"5-\\'2J:2M','p','J{','\\\\<}4\\\\7Z\"5-\\'2J:7V}7U=7Q:D|q=2y|7R-5|7S--1Q/2\"|2N-2y|80\"=81\"2f\"q\\\\<}4\\\\1M\"2h:2i<1k}D?\"6','e','=8a','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"2n<N\"[1s*1t\\\\\\\\2r-2L\"2t/8b<6r]1c}C\"13','e','87',')8z!84}s<C','p','86','\\\\<}4\\\\2u<<8y\\\\<}4\\\\2u<<8D<}f\"u}94?\"6','e','{l','\\\\<}4\\\\2v.L>g;H\\'T)Y.8X\\\\<}4\\\\2v.L>g;8Y&&8Z>H\\'T)Y.I?\"6','e','l=','10\\\\<}4\\\\91\\\\8U>8V}U\"<5}1r\"7}F\"2l}U\"<5}90\\\\<}4\\\\93<2q-20\"u\"92}U\"<5}1r\"7}F\"2l}U\"<5}8S','e','{J','H:<Z<:5','p','8F','\\\\<}4\\\\m\\\\<}4\\\\E\"8G\\\\<}4\\\\v\"<5}3g\"3f}/1j\\\\<}4\\\\8-2}\"3e<}18&8H\\\\<}4\\\\v\"<5}1b\"}u-8E=?W}U\"<5}K\"X\"7}8T\\\\<}4\\\\1i}\"v\"<5}8A\"14\"7}F\"8B','e','8C','\\\\<}4\\\\1F-U\\\\w\\\\<}4\\\\1F-8I\\\\<}4\\\\1F-\\\\<}?\"6','e','8J','8P-N:8Q','p','8R','\\\\<}4\\\\1G\"8O\\\\<}4\\\\1G\"8N\"<5}8K\\\\<}4\\\\1G\"8L||\\\\<}4\\\\8M?\"6','e','h+','83<u-7O/','p','{=','\\\\<}4\\\\v\"<5}1b\"}u-6U\\\\<}4\\\\1l}1E>1D-1C}2}\"q\\\\<}4\\\\v\"<5}1b\"}u-2D','e','=S','\\\\<}4\\\\6W\"1f\\\\<}4\\\\6T}U\"<5}1j\\\\<}4\\\\6S?\"6','e','{o','\\\\<}4\\\\6O}<6P\\\\<}4\\\\6Q}?\"6','e','=6R','\\\\<}4\\\\y<1O\\\\<}4\\\\y<2B\\\\<Z\"2C\\\\<}4\\\\y<2E<Q\"w\"1f\\\\<}4\\\\y<2j}U\"<5}t?\"6','e','J+','c>A','p','=','W}U\"<5}K\"X\"7}F\\\\<}4\\\\E\"6Y\"74:75}76^[73,][72+]6Z\\'<}4\\\\70\"2f\"q\\\\<}4\\\\E}u-6M\"14\"7}6y=6z','e','6A','\\\\<}4\\\\1S:!34\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[f\"22*6x<Q\"6w]6s<:[<Z*1t:Z,1I]1c}C\"13','e','=6t','\\\\<}4\\\\1X\"<24-1U-u}6u\\\\<}4\\\\1X\"<24-1U-u}6v?\"6','e','{x','6C}7K','p','6J','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[<Z*1t:Z,1I]F:<6K[<Z*6L]1c}C\"13','e','h=','6I-2}\"v\"<5}m}9','e','6H','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[<Z*6D}1I]R<-C[1s*6E]1c}C\"13','e','6F','10\\\\<}4\\\\2e\"\\\\6G\\\\<}4\\\\2e\"\\\\77','e','78','\\\\<}4\\\\1M\"w\\\\<}4\\\\1M\"2h:2i<1k}?\"6','e','{e','\\\\<}4\\\\7A}Z<}7B}b\\\\<}4\\\\7C<f\"m}b\\\\<}4\\\\7y/<}C!!7u<\"42.42-2}\"1o}b\\\\<}4\\\\7v\"<5}m}9?\"6','e','7w','T>;7x\"<4f','p','h{','\\\\<}4\\\\7D<u-7E\\\\7L}b\\\\<}4\\\\1g<}7M}9?\"6','e','7N','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-3s}U\"<5}K\"X\"7}F\\\\<}4\\\\1i}\"v\"<5}1b\"E<}18&3p}33=w\\\\<}4\\\\1i}\"8-2}\"1p\".42-2}\"7J}\"u<}7I}7F\"14\"7}F\"32?\"6','e','{h','\\\\<}4\\\\7H\\\\<}4\\\\7t}<(7s?\"6','e','7f','\\\\<}4\\\\7g<U-2Z<7h&p?10\\\\<}4\\\\7e<U-2Z<79/2H}U\"<5}1r\"7}F\"7a','e','=7b','7c\\'<7i\"','p','{{','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-3s}U\"<5}K\"X\"7}F\\\\<}4\\\\1i}\"v\"<5}1b\"E<}18&3p}33=7j\"14\"7}F\"32?\"6','e','7p','W}U\"<5}K\"X\"7}F\\\\<}4\\\\1S:!34\\\\<}4\\\\1n-2.42-2}\"w\\\\<}4\\\\1n-2.42-2}\"1p\"L\"\"M<30\"2Y\"2S<\"<5}2R\"2P\\\\<Z\"2T<Q\"2V{2X:3q\\\\2W<1k}38-39<}3k\"3j\"1q%3l<Q\"1q%3n?\"3i\"14\"7}3c','e','{+','\\\\<}4\\\\7o<7n a}7l}b\\\\<}4\\\\E}7m\"7k 7r- 1o}9','e','7q','7d\\\\<}4\\\\v\"<5}1S}7G\"5M&M<C<}7z}C\"3d\\\\<}4\\\\v\"<5}3g\"3f}/1j\\\\<}4\\\\8-2}\"6B\\\\<}4\\\\8-2}\"3e<}18&71[S]6X=?\"6','e','l+'];n 1w=[];n 1e=[];1v(n j=0;j<c.1d;j+=3){n r=c[j+1]=='p'?3m(g(c[j])):1P(G(O){d O.36('(G(){'+37.7P()+';d '+g(c[j])+'})();')});n 1u=6V(g(c[j+2]));16(r>0||r<0){1w.1y(r*1u)}8W 16(85 r=='89'){1w.1y(-7T*1u);1e.1y(1u+\"=\"+r)}16(1e.1d>=15)d{1x:r}}n 1H={1x:1w.2k(\",\")};16(1e.1d>0)1H.8i=1e.2k(\"&\");d 1H}1B(e){d{1x:\"-88\"}}})();",
62,563,"    Z5  Ma2vsu4f2 aM EZ5Ua a44  a44OO  return       a2MQ0242U  P1 var        E45Uu OO  E3        function _   qD8    wnd  C3     tmpWnd qsa MQ8M2   U5q  5ML44P1 3RSvsu4f2 U3q2D8M2  if EBM Z27 func prop E35f WDE42 length errors QN25sF E_ wndz ENuM2 tOO ZZ2 E2 g5 EsMu fP1 EC2 vFoS q5D8M2 fMU  id for results res push window try catch N5 Tg5 U5Z2c Euf EuZ response _t UIuCTZOO parent UT EfaNN_uZf_35f 5ML44qWZ M5OO ch uM ZU5 Eu Ef2 fC_ BV2U 2Qfq Ea Q42E Z2711t  EuZ_lEf Q42 EuZ_hEf _7Z E_Y Z2s  5Mu ENM5 ENu uf _NuM 2M_ zt__  E__N _5 2MM M511tsa join QN25sF511tsa EufB 5ML44qWfUM 0UM E_UaMM2 sMu BuZfEU5  MuU E__ EcIT_0 ELZg5 EU uZf a44nD z5 M5E 3OO  M5E32 ZP1 U25sF tzsa E27 ALZ02M ELMMuQOO kN7   Q42OO 2HFB5MZ2MvFSN7HF  vFuBf54a Q42tD11tN5f 3vFJlSN7HF32  vFl vF3 SN7HF5 2qtf  Ba Ef35M Ma2HnnDqD uNfQftD11m 4uQ2MOO str eval co HF uMC indexOf charAt Fsu4f2HnnDqD 3RSOO EM2s2MM2ME vB4u E3M2sP1tuB5a false Ma2vsu4f2nUu vFmheSN7HF42s m42s HFM ex Ht true sqtfQ 2Ms45 top NTZOOqsa Um tDE42 eS UmBu WD kC5 ENaBf_uZ_faB UEVft zt__uZ_M 5ML44qtZ 5Zu4 _tD Jl 2Z0  u_faB zt_ f_tDOOU5q 1tk27 ENaBf_uZ_uZ Ue QOO 5MqWfUM 35ZP1 tf5a u_Z2U5Z2OO qD8M2 ZA2 2r2 24t EZ5p5 2s2MI5pu 2Zt ujuM   2cM4 JJ uCUuZ2OOZ5Ua QN2P1ta Mu CEC2 oo COO EVft Na 2MUaMQOO uic2EHVO  ox M2 5IMu aNP1 LnG lkSvfxWX 99 fD NhCZ fY45 hx Kt 25a E7GXLss0aBTZIuC UufUuZ2 E7LZfKrA QN211ta CP1 CF Q6T 1bqyJIma fDE42 NLZZM2ff Je V0 7A5C C2 2MUaMQE r5Z2t 2MUaMQEU5 sOO eo PzA YDoMw8FRp3gd94 2ZtOO lJ fOO f32M_faB F5ENaB4 NTZ oJ zt_M hJ 7__E2U EuZ_hOO IuMC2 EuZ_lOO s7 he u4f xx _M null in a44OO5BVEu445 F5BVEa 2BfM2Z xo uMF21 fbQIuCpu aM4P1 Ef fgM2Z2 q5BVD8M2 xl 5Z2f EfUM href lS s5 M__ UCMOO AEBuf2g  UCME AOO ZBu r5 2_M2s2M2 2TsMu 2OO EuZZ I5b5ZQOO EaNZu U2OO unknown b4u location 2qtfUM tDHs5Mq tB IQN2 kUM xJ  _V5V5OO 2Mf LMMt 24N2MTZ Ld0 _ALb A_pLr tUBt 7__OO tUZ message EuZZTsMu uOO  cAA_cg EA5Cba Z42 a44nDqD ee g5a while Mtzsa zt_4 OO2 sq2 1SH i2E42 99D ho u_a tDRm DM2 PSHM2 HnDqD EUM2u 1Z5Ua sqt E2fUuN2z21 xh MU0 fN4uQLZfEVft FZ So uC2MOO uC2MEUB vFSN7t 1t32 FP HnnDqD xe EM2s2MM2MOO B24 1tB2uU5 1tNk4CEN3Nt oe B__tDOOU5q eh Z5Ua xS Z25 1tfMmN4uQ2Mt 2DnUu Jh ELZ0 N2MOO EuZfBQuZf Sh E5U4U5qDEN4uQ E5U4U511tsa 2P1 parseInt E5U4U5OO D11m 5NENM5U2ff_ 8lzn kE squ Sm um uC_ uMfP1 a44OOk B_UB_tD lh ubuf2b45U Ma2nDvsu4f2 Sl LZZ035NN2Mf u1 ztIMuss ol EIMuss u60 ZC2 HnUu 5M2f UP1 _f 4Zf EUuU Jx lx M5 a2TZ E_NUCEYp_c gI Eu445Uu lo _c ENuM fzuOOuE42 E4u CcM4P1 Ef2A ENM bM5 a44HnUu U2f E_NUCOO 2MtD11 bQTZqtMffmU5  f2MP1 N4uU2_faUU2ffP1 Jo _uZB45U toString zlnuZf2M UUUN 2N5 1000 wZ8 2MOOkq ErF ll gaf Egaf uZf35f DkE  _NM 4Qg5 typeof oh eJ 999 string SS kZ ErP1 4P1 u4buf2Jl E_Vu fN uCOO err E0N2U ZOO Se fNNOO uCEa u_uZ_M2saf2_M2sM2f3P1 4kE E3M2sD rLTp hl a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 2M_f35 ENuMu fC532M2P1 u_ ZfOO 2u4 E3M2szsu4f2nUu Ma2nnDqDvsu4f2 oS ZfF 2DRm hh 5NOO sq M2sOO JS OOq CfE35aMfUuN E35aMfUuND CfEf2U CfOO ___U _ZBf le tnD FN1 f2Mc A_tzsa else IOO _I AbL tnDOOU5q ztBM5 af_tzsa zt U25sFLMMuQ".split(" "),
0,{}));b.hasOwnProperty("err")&&(c=b.err);return{vdcv:23,vdcd:b.res,err:c}}catch(a){return{vdcv:23,vdcd:"0",err:c}}}function $(c){var b=0,a;for(a in c)c.hasOwnProperty(a)&&++b;return b}function ca(c){try{if(1>=c.depth)return{url:"",depth:""};var b,a=[];a.push({win:window.top,depth:0});for(var d,i=1,e=0;0<i&&100>e;){try{if(e++,d=a.shift(),i--,0<d.win.location.toString().length&&d.win!=c)return 0==d.win.document.referrer.length||0==d.depth?{url:d.win.location,depth:d.depth}:{url:d.win.document.referrer,
depth:d.depth-1}}catch(q){}b=d.win.frames.length;for(var f=0;f<b;f++)a.push({win:d.win.frames[f],depth:d.depth+1}),i++}return{url:"",depth:""}}catch(g){return{url:"",depth:""}}}function O(c){new String;var b=new String,a,d,i;for(a=0;a<c.length;a++)i=c.charAt(a),d="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(i),0<=d&&(i="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((d+47)%94)),
b+=i;return b}function ea(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(c){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 3;
if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&
"function"==typeof window.document.updateSettings)return 1;var b=!1;try{var a=document.createElement("p");a.innerText=".";a.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";b=void 0!=a.style.textShadow}catch(d){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&b&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(i){return 0}}this.createRequest=function(){var c=!1,b=window,
a=0,d=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=b.parent&&b.parent!=b)if(0<b.parent.location.toString().length)b=b.parent,a++,c=!0;else{c=!1;break}else{0==dv_i&&(c=!0);break}}catch(i){c=!1}0==b.document.referrer.length?c=b.location:c?c=b.location:(c=b.document.referrer,d=!0);if(!window._dv_win.bsredirect5ScriptsInternal||!window._dv_win.bsredirect5Processed||0==window._dv_win.bsredirect5ScriptsInternal.length)return{isSev1:!1,url:null};var e=S();this.dv_script_obj=e;var e=this.dv_script=e.script,
q=e.src.replace(/^.+?callback=(.+?)(&|$)/,"$1");if(q&&(this.redirect=eval(q+"()"))&&!this.redirect.done){this.redirect.done=!0;if(C(this.redirect))return{isSev1:!0};b=L(this.redirect,c,b,a,d,e&&e.parentElement&&e.parentElement.tagName&&"HEAD"===e.parentElement.tagName,e);b+="&"+this.getVersionParamName()+"="+this.getVersion();return{isSev1:!1,url:b}}};this.isApplicable=function(){return!0};this.onFailure=function(){};this.sendRequest=function(c){dv_sendRequest(c);try{var b,a=this.dv_script_obj&&this.dv_script_obj.injScripts||
"function() {}",d=window._dv_win.dv_config=window._dv_win.dv_config||{};d.cdnAddress=d.cdnAddress||"cdn.doubleverify.com";b='<html><head><script type="text/javascript">('+function(){try{window.$dv=window.$dvbsr||parent.$dvbsr,window.$dv.dvObjType="dvbsr"}catch(a){}}.toString()+')();<\/script></head><body><script type="text/javascript">('+a+')("'+d.cdnAddress+'");<\/script><script type="text/javascript">setTimeout(function() {document.close();}, 0);<\/script></body></html>';var i=T("about:blank");
i.id=i.name;var e=i.id.replace("iframe_","");i.setAttribute&&i.setAttribute("data-dv-frm",e);J(i,this.dv_script);if(this.dv_script){var q=this.dv_script,f;a:{c=null;try{if(c=i.contentWindow){f=c;break a}}catch(g){}try{if(c=window._dv_win.frames&&window._dv_win.frames[i.name]){f=c;break a}}catch(h){}f=null}q.dvFrmWin=f}var l=K(i);if(l)l.open(),l.write(b);else{try{document.domain=document.domain}catch(s){}var C=encodeURIComponent(b.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));i.src='javascript: (function(){document.open();document.domain="'+
window.document.domain+"\";document.write('"+C+"');})()"}}catch(z){b=(window._dv_win.dv_config=window._dv_win.dv_config||{}).tpsAddress||"tps30.doubleverify.com",dv_SendErrorImp(b+"/verifyc.js?ctx=818052&cmp=1619415",[{dvp_jsErrMsg:"DvFrame: "+encodeURIComponent(z)}])}return!0};if(window.debugScript&&(!window.minDebugVersion||10>=window.minDebugVersion))window.DvVerify=L,window.createRequest=this.createRequest;this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"56"}}
;


function dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbsr = (window._dv_win.$dvbsr || new dvBsrType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) {
            }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];

    if (!window.debugScript) {
    (new dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
}
} catch (e) {
}