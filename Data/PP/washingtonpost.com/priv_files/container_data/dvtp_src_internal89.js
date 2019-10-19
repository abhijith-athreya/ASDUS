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
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
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
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, url, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
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

function getCurrentTime() {
    "use strict";
    if (Date.now) {
        return Date.now();
    }
    return (new Date()).getTime();
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS, 'i');
    var results = regex.exec(url);
    if (results == null) {
        return null;
    }
    else {
        return results[1];
    }
}

function dv_GetKeyValue(url) {
    var keyReg = new RegExp(".*=");
    var keyRet = url.match(keyReg)[0];
    keyRet = keyRet.replace("=", "");

    var valReg = new RegExp("=.*");
    var valRet = url.match(valReg)[0];
    valRet = valRet.replace("=", "");

    return {key: keyRet, value: valRet};
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url, prefix) {
    try {
        prefix = (prefix != undefined && prefix != null) ? prefix : 'dvp';
        var regex = new RegExp("[\\?&](" + prefix + "_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = [];
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (var key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            } else {
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
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj) {
            return obj[propName];
        }
    } catch (e) {
    }
}

function dvType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
                $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        for (i = 0; i < collision.eventsToFire.length; i++) {
            this.pubSub.publish(collision.eventsToFire[i], tag.uid);
        }
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&colltid=' + collision.allReasonsForTagBitFlag;

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&' + reason.name + "ms=" + reason.milliseconds;
        }

        if (collision.thisTag) {
            tpsServerUrl += '&tlts=' + collision.thisTag.t2tLoadTime;
        }
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBSIdFound = function (bsID, tag) {
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&bsimpid=' + bsID;
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBABSVerbose = function (verboseReportingValues, tag) {
        var queryString = "";
        


        var dvpPrepend = "&dvp_BABS_";
        queryString += dvpPrepend + 'NumBS=' + verboseReportingValues.bsTags.length;

        for (var i = 0; i < verboseReportingValues.bsTags.length; i++) {
            var thisFrame = verboseReportingValues.bsTags[i];

            queryString += dvpPrepend + 'GotCB' + i + '=' + thisFrame.callbackReceived;
            queryString += dvpPrepend + 'Depth' + i + '=' + thisFrame.depth;

            if (thisFrame.callbackReceived) {
                if (thisFrame.bsAdEntityInfo && thisFrame.bsAdEntityInfo.comparisonItems) {
                    for (var itemIndex = 0; itemIndex < thisFrame.bsAdEntityInfo.comparisonItems.length; itemIndex++) {
                        var compItem = thisFrame.bsAdEntityInfo.comparisonItems[itemIndex];
                        queryString += dvpPrepend + "tag" + i + "_" + compItem.name + '=' + compItem.value;
                    }
                }
            }
        }

        if (queryString.length > 0) {
            var tpsServerUrl = '';
            if (tag) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
            }
            var requestString = tpsServerUrl + queryString;
            $dv.domUtilities.addImage(requestString, tag.tagElement.parentElement);
        }
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dv.tags) {
                for (var uid in $dv.tags) {
                    if ($dv.tags.hasOwnProperty(uid) && $dv.tags[uid] && $dv.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            var tag;
            switch (data.action) {
                case 'uniquePageViewIdDetermination':
                    if (visitJSHasBeenCalledForThisTag) {
                        $dv.processT2TEvent(data, $dv.tags[myUID]);
                        $dv.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dv.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    data.collision.commonRecievedTS = timeCalled;
                    $dv.processTagToTagCollision(data.collision, tag);
                    break;
                case 'bsIdFound':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    $dv.processBSIdFound(data.id, tag);
                    break;
                case 'babsVerbose':
                    try {
                        tag = $dv.tags[myUID];
                        $dv.processBABSVerbose(data, tag);
                    } catch (err) {
                    }
                    break;
            }

        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    if (window.addEventListener) {
        addEventListener("message", messageEventListener, false);
    }
    else {
        attachEvent("onmessage", messageEventListener);
    }

    this.pubSub = (function () {
        var previousEventsCapacity = 1000;
        var subscribers = {};       
        var eventsHistory = {};     
        var prerenderHistory = {};  
        return {
            subscribe: function (eventName, id, actionName, func, errFunc) {
                if ($dv.isEval == 1) {
                    handleHistoryEvents(eventName, id, func, errFunc);
                    if (!subscribers[eventName + id]) {
                        subscribers[eventName + id] = [];
                    }
                    subscribers[eventName + id].push({Func: func, ErrFunc: errFunc, ActionName: actionName});
                } else {
                    handleHistoryEvents(eventName, id, func);
                    if (!subscribers[eventName + id]) {
                        subscribers[eventName + id] = [];
                    }
                    subscribers[eventName + id].push({Func: func, ActionName: actionName});
                }
            },

            publish: function (eventName, id, args) {
                var actionsResults = [];
                try {
                    if (eventName && id) {
                        if ($dv && $dv.tags[id] && $dv.tags[id].prndr) {
                            prerenderHistory[id] = prerenderHistory[id] || [];
                            prerenderHistory[id].push({eventName: eventName, args: args});
                        }
                        else {
                            actionsResults.push.apply(actionsResults, publishEvent(eventName, id, args));
                        }
                    }
                } catch (e) {
                }
                return actionsResults.join('&');
            },

            publishHistoryRtnEvent: function (id) {
                var actionsResults = [];
                if (prerenderHistory[id] instanceof Array) {
                    for (var i = 0; i < prerenderHistory[id].length; i++) {
                        var eventName = prerenderHistory[id][i].eventName;
                        var args = prerenderHistory[id][i].args;
                        if (eventName) {
                            actionsResults.push.apply(actionsResults, publishEvent(eventName, id, args));
                        }
                    }
                }

                prerenderHistory[id] = [];

                return actionsResults;
            }
        };

        function publishEvent(eventName, id, args) {
            var actionsResults = [];
            if (!eventsHistory[id]) {
                eventsHistory[id] = [];
            }
            if (eventsHistory[id].length < previousEventsCapacity) {
                eventsHistory[id].push({eventName: eventName, args: args});
            }
            if ($dv.isEval == 1) {
                if (subscribers[eventName + id] instanceof Array) {
                    for (var i = 0; i < subscribers[eventName + id].length; i++) {
                        var funcObject = subscribers[eventName + id][i];
                        if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                            var isSucceeded = true;
                            try {
                                funcObject.Func(id, args);
                            } catch (e) {
                                isSucceeded = false;
                                if (typeof funcObject.ErrFunc == "function") {
                                    runSafely(function () {
                                        funcObject.ErrFunc(e);
                                    });
                                }
                            }
                            actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                        }
                    }
                }
            } else {
                if (subscribers[eventName + id] instanceof Array) {
                    for (var i = 0; i < subscribers[eventName + id].length; i++) {
                        var funcObject = subscribers[eventName + id][i];
                        if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                            var isSucceeded = runSafely(function () {
                                return funcObject.Func(id, args);
                            });
                            actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                        }
                    }
                }
            }

            return actionsResults;
        }

        function handleHistoryEvents(eventName, id, func, errFunc) {
            try {
                if (eventsHistory[id] instanceof Array) {
                    for (var i = 0; i < eventsHistory[id].length; i++) {
                        if (eventsHistory[id][i] && eventsHistory[id][i].eventName === eventName) {
                            func(id, eventsHistory[id][i].args);
                        }
                    }
                }
            } catch (e) {
                if ($dv.isEval == 1) {
                    if (typeof errFunc == "function") {
                        runSafely(function () {
                            errFunc(e);
                        });
                    }
                }
            }
        }
    })();

    this.domUtilities = new function () {
        function getDefaultParent() {
            return document.body || document.head || document.documentElement;
        }

        this.createImage = function (parentElement) {
            parentElement = parentElement || getDefaultParent();
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = '';
            parentElement.insertBefore(image, parentElement.firstChild);
            return image;
        };

        var imgArr = [];
        var nextImg = 0;
        var imgArrCreated = false;
        if (!navigator.sendBeacon) {
            imgArr[0] = this.createImage();
            imgArr[1] = this.createImage();
            imgArrCreated = true;
        }

        this.addImage = function (url, parentElement, useGET, usePrerenderedImage) {
            parentElement = parentElement || getDefaultParent();
            if (!useGET && navigator.sendBeacon) {
                var message = appendCacheBuster(url);
                navigator.sendBeacon(message, {});
            } else {
                var image;
                if (usePrerenderedImage && imgArrCreated) {
                    image = imgArr[nextImg];
                    image.src = appendCacheBuster(url);
                    nextImg = (nextImg + 1) % imgArr.length;
                } else {
                    image = this.createImage(parentElement);
                    image.src = appendCacheBuster(url);
                    parentElement.insertBefore(image, parentElement.firstChild);
                }
            }
        };


        this.addScriptResource = function (url, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            parentElement = parentElement || getDefaultParent();
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
            if (value === undefined || value === null) {
                value = '[' + p1 + ']';
            }
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
            if (!that.tags[tagKey]) {
                that.tags[tagKey] = new that.tag();
            }
            for (var key in obj) {
                that.tags[tagKey][key] = obj[key];
            }
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    };

    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj) {
                this[key] = obj[key];
            }
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    
    this.eventBus = (function () {
        var getRandomActionName = function () {
            return 'EventBus_' + Math.random().toString(36) + Math.random().toString(36);
        };
        return {
            addEventListener: function (dvFrame, eventName, func, errFunc) {
                that.pubSub.subscribe(eventName, dvFrame.$frmId, getRandomActionName(), func, errFunc);
            },
            dispatchEvent: function (dvFrame, eventName, data) {
                that.pubSub.publish(eventName, dvFrame.$frmId, data);
            }
        };
    })();

    
    var messagesClass = function () {
        var waitingMessages = [];

        this.registerMsg = function (dvFrame, data) {
            if (!waitingMessages[dvFrame.$frmId]) {
                waitingMessages[dvFrame.$frmId] = [];
            }

            waitingMessages[dvFrame.$frmId].push(data);

            if (dvFrame.$uid) {
                sendWaitingEventsForFrame(dvFrame, dvFrame.$uid);
            }
        };

        this.startSendingEvents = function (dvFrame, impID) {
            sendWaitingEventsForFrame(dvFrame, impID);
            
        };

        function sendWaitingEventsForFrame(dvFrame, impID) {
            if (waitingMessages[dvFrame.$frmId]) {
                var eventObject = {};
                while (waitingMessages[dvFrame.$frmId].length) {
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

    var MAX_EVENTS_THRESHOLD = 100;
    window.eventsCounter = window.eventsCounter || {};
    var getImpressionIdToCall = function (impressionId) {
        return window.eventsCounter[impressionId] < MAX_EVENTS_THRESHOLD ? impressionId : 'tme-' + impressionId;
    };

    this.registerEventCall = function (impressionId, eventObject, timeoutMs, isRegisterEnabled, usePrerenderedImage) {

        window.eventsCounter[impressionId] =
            window.eventsCounter[impressionId] ? window.eventsCounter[impressionId] + 1 : 1;


        var avoTimeout = 0;
        if (this.tags[impressionId] && this.tags[impressionId].AVO
            && this.tags[impressionId].AVO['cto'] && !isNaN(this.tags[impressionId].AVO['cto'])) {
            avoTimeout = window._dv_win.$dv.tags[impressionId].AVO['cto'];
        }

        if (isRegisterEnabled !== false && avoTimeout) {
            addEventCallForDispatch(impressionId, eventObject);

            if (!timeoutMs || isNaN(timeoutMs)) {
                timeoutMs = avoTimeout;
            }

            var localThat = this;
            setTimeout(
                function () {
                    localThat.dispatchEventCalls(impressionId);
                }, timeoutMs);

        } else {
            this.dispatchEventImmediate(impressionId, eventObject);
        }
    };

    this.dispatchEventImmediate = function (impressionId, eventObject, timeoutMs, isRegisterEnabled, usePrerenderedImage) {
        var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" +impressionId + '&' + createQueryStringParams(eventObject);

        this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentNode, false, usePrerenderedImage);
    };

    var mraidObjectCache;
    this.getMraid = function () {
        var context = window._dv_win || window;
        var iterationCounter = 0;
        var maxIterations = 20;

        function getMraidRec(context) {
            iterationCounter++;
            var isTopWindow = context.parent == context;
            if (context.mraid || isTopWindow) {
                return context.mraid;
            } else {
                return ( iterationCounter <= maxIterations ) && getMraidRec(context.parent);
            }
        }

        try {
            return mraidObjectCache = mraidObjectCache || getMraidRec(context);
        } catch (e) {
        }
    };

    var dispatchEventCallsNow = function (impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId]) {
                    eventsForDispatch[impressionId] = {};
                }
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined') {
                this.dispatchEventCalls(impressionId);
            }
        }

        
        this.registerEventCall = this.dispatchEventImmediate;
    };

    this.dispatchEventCalls = function (impressionId) {
        if (typeof eventsForDispatch[impressionId] !== 'undefined' && eventsForDispatch[impressionId] != null) {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns +
                "/event.gif?impid=" + impressionId+ '&' + createQueryStringParams(eventsForDispatch[impressionId]);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
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
                if (params === '') {
                    params += key + '=' + value;
                }
                else {
                    params += '&' + key + '=' + value;
                }
            }
        }

        return params;
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4,
            Safari: 5, ChromeWebView: 6, SafariWebView: 7, PhantomJS: 99},
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
                if (url.slice(-1) == '&') {
                    url += 'cbust=' + dv_GetRnd();
                }
                else {
                    url += '&cbust=' + dv_GetRnd();
                }
            }
            else {
                url += '?cbust=' + dv_GetRnd();
            }
        }
        return url;
    };
}

var BrowserDetector = function () {
    var DetectionAreaEnum = {
        USER_AGENT_ONLY: 0,
        PROPERTIES_ONLY: 1,
        USER_AGENT_AND_PROPERTIES: 2
    };
    var BrowserTypeEnum = {
        Other: 0,
        IE: 1,
        Firefox: 2,
        Chrome: 3,
        Opera: 4,
        Safari: 5,
        ChromeWebView: 6,
        SafariWebView: 7,
        PhantomJS: 99
    };

    var Browser = function (browserID, detectionArea, browserDetectorRegexStr, browserVersionRegexStr, propertiesRuleFunc) {
        return {
            browserID: browserID,
            version: '',
            detectionArea: detectionArea,
            userAgentRules: {
                browserTypeRegexStr: browserDetectorRegexStr,
                browserVersionRegexStr: browserVersionRegexStr,
                passed: false
            },
            propertiesRules: {
                evaluatePropertiesRule: propertiesRuleFunc,
                passed: false
            }
        }
    };

    
    var BrowsersData = [

        
        Browser(
            BrowserTypeEnum.ChromeWebView,
            DetectionAreaEnum.USER_AGENT_ONLY,
            '(?:wv(.*?))version\/[0-9]+(?:.[0-9]+)* chrome\/[0-9]+(?:.[0-9]+)* mobile|version\/[0-9]+(?:.[0-9]+)* chrome\/[0-9]+(?:.[0-9]+)* mobile', 'chrome\/',
            null),
        Browser(
            BrowserTypeEnum.SafariWebView,
            DetectionAreaEnum.USER_AGENT_AND_PROPERTIES,
            '(?=.*(iphone|ipod|ipad))(?=^(?:(?!safari).)*$).*$', '',
            function () {
                return !window.navigator.standalone;
            }
        ),
        Browser(
            BrowserTypeEnum.IE,
            DetectionAreaEnum.PROPERTIES_ONLY,
            'msie|trident/7.*rv:11|rv:11.*trident/7|edge/', '(msie |rv:| edge/)',
            function () {
                return document.uniqueID != undefined &&
                    typeof document.uniqueID == 'string' &&
                    ((document.documentMode != undefined && document.documentMode >= 0) ||
                    (document.all != undefined && typeof document.all == 'object') ||
                    (window.ActiveXObject != undefined && typeof window.ActiveXObject == "function")) ||
                    (window.document && window.document.updateSettings && typeof window.document.updateSettings == "function");
            }),
        Browser(
            BrowserTypeEnum.Firefox,
            DetectionAreaEnum.PROPERTIES_ONLY,
            'firefox', 'firefox\/',
            function () {
                return window.mozInnerScreenY != undefined &&
                    typeof window.mozInnerScreenY == 'number' &&
                    window.mozPaintCount != undefined &&
                    window.mozPaintCount >= 0 &&
                    window.InstallTrigger != undefined &&
                    window.InstallTrigger.install != undefined;
            }),
        Browser(
            BrowserTypeEnum.Opera,
            DetectionAreaEnum.PROPERTIES_ONLY,
            'opr|opera', 'opr\/|version\/',
            function () {
                return (window.opera != undefined && window.history.navigationMode != undefined) ||
                    (window.opr != undefined && window.opr.addons != undefined
                    && typeof window.opr.addons.installExtension == 'function');
            }),
        Browser(
            BrowserTypeEnum.Chrome,
            DetectionAreaEnum.PROPERTIES_ONLY,
            'chrome', 'chrome\/',
            function () {
                return window.chrome != undefined &&
                    typeof window.chrome.csi == 'function' &&
                    typeof window.chrome.loadTimes == 'function' &&
                    document.webkitHidden != undefined &&
                    (document.webkitHidden == true || document.webkitHidden == false);
            }),
        Browser(
            BrowserTypeEnum.Safari,
            DetectionAreaEnum.PROPERTIES_ONLY,
            'safari|(os |os x )[0-9].*applewebkit', 'version\/',
            function () {
                var p = document.createElement('p');
                p.innerText = '.';
                p.style = 'text-shadow: rgb(99, 116, 171) 20px -12px 2px';

                return ((Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) ||
                    (window.webkitAudioPannerNode && window.webkitConvertPointFromNodeToPage)) &&
                    window.innerWidth != undefined && window.innerHeight != undefined && p.style.textShadow != undefined;
            }),
        Browser(
            BrowserTypeEnum.PhantomJS,
            DetectionAreaEnum.PROPERTIES_ONLY,
            '',
            '',
            function () {
                return typeof window.callPhantom === 'function';
            }),
        Browser(
            BrowserTypeEnum.Other,
            DetectionAreaEnum.USER_AGENT_ONLY,
            'mozilla.*android.*applewebkit(?!.*chrome.*)|linux.*android.*applewebkit.* version/.*chrome',
            '',
            null),
        Browser(
            BrowserTypeEnum.Other,
            DetectionAreaEnum.USER_AGENT_ONLY,
            'aol/.*aolbuild/|aolbuild/.*aol/|puffin|maxthon|valve|silk|playstation|playstation|nintendo|wosbrowser',
            '',
            null)
    ];

    var getBrowserVersion = function (browserVersionRegexStr, useragent) {
        var browserVersionRegex;
        var browserVersion = '';

        if (browserVersionRegexStr.length > 0) {
            browserVersionRegex = new RegExp(browserVersionRegexStr + '[0-9]+(?:.[0-9]+)*');
            var match = useragent.match(browserVersionRegex);
            if (match != null && match[0] != null) {
                browserVersion = match[0].replace(useragent.match(new RegExp(browserVersionRegexStr))[0], '');
            }
        }

        return browserVersion;
    };
    
    var isBrowserType = function (browserTypeRegexStr, useragent) {

        var browserTypeRegExp;
        if (browserTypeRegexStr.length > 0) {
            browserTypeRegExp = new RegExp(browserTypeRegexStr);
            return browserTypeRegExp.test(useragent);
        }
    };

    var fillBrowserDetailsByUserAgent = function (ua) {
        var useragent_lowerCase = ua.toLowerCase();
        for (var i = 0; i < BrowsersData.length; i++) {

            if (isBrowserType(BrowsersData[i].userAgentRules.browserTypeRegexStr ,useragent_lowerCase)) {
                BrowsersData[i].userAgentRules.passed = true;
                BrowsersData[i].version = getBrowserVersion(BrowsersData[i].userAgentRules.browserVersionRegexStr, useragent_lowerCase);
            }
        }
    };

    var fillBrowserDetailsByProperties = function () {
        for (var i = 0; i < BrowsersData.length; i++) {
            if (BrowsersData[i].propertiesRules.evaluatePropertiesRule) {
                try {
                    BrowsersData[i].propertiesRules.passed = BrowsersData[i].propertiesRules.evaluatePropertiesRule();
                }
                catch (e) {}
            }
        }
    };

    this.getBrowsersData = function () {
      return BrowsersData;
    };

    this.getBrowserIdAndVersion = function (ua) {
        var browserIdByUserAgent;
        var browserIdByProperties;
        var browserVersion;

        fillBrowserDetailsByUserAgent(ua);
        fillBrowserDetailsByProperties();

        for (var i = 0; i < BrowsersData.length; i++) {

            if (BrowsersData[i].detectionArea == DetectionAreaEnum.USER_AGENT_AND_PROPERTIES) {
                if (BrowsersData[i].userAgentRules.passed == true &&
                    BrowsersData[i].propertiesRules.passed == true) {
                    browserIdByUserAgent = BrowsersData[i].browserID;
                    browserIdByProperties = BrowsersData[i].browserID;
                }
            }
            else if (BrowsersData[i].detectionArea == DetectionAreaEnum.USER_AGENT_ONLY) {
                if (BrowsersData[i].userAgentRules.passed == true) {
                    
                    browserIdByUserAgent = BrowsersData[i].browserID;
                    browserIdByProperties = BrowsersData[i].browserID;
                }
            }
            else {
                if (browserIdByUserAgent == undefined && BrowsersData[i].userAgentRules.passed == true) {
                    browserIdByUserAgent = BrowsersData[i].browserID;
                }
                if (browserIdByProperties == undefined && BrowsersData[i].propertiesRules.passed == true) {
                    browserIdByProperties = BrowsersData[i].browserID;
                }
            }

            if (browserIdByProperties != undefined && browserIdByUserAgent != undefined) {
                break;
            }
        }

        browserVersion = browserIdByProperties === browserIdByUserAgent ? BrowsersData[i].version : '';
        return {
            ID: browserIdByProperties,
            version: browserVersion,
            ID_UA: browserIdByUserAgent
        };
    };
};

function dv_baseHandler(){function vb(){var a="";try{var c=eval(function(a,c,f,k,d,B){d=function(a){return(a<c?"":d(parseInt(a/c)))+(35<(a%=c)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;f--;)B[d(f)]=k[f]||d(f);k=[function(a){return B[a]}];d=function(){return"\\w+"};f=1}for(;f--;)k[f]&&(a=a.replace(RegExp("\\b"+d(f)+"\\b","g"),k[f]));return a}("(G(){1A{1A{36('1z?3o:3h')}1B(e){d{1x:\"-4m\"}}n 1h=[1z];1A{n V=1z;67(V!=V.3r&&V.1K.5F.5l){1h.1y(V.1K);V=V.1K}}1B(e){}G 1P(19){1A{1v(n i=0;i<1h.1d;i++){16(19(1h[i]))d 1h[i]==1z.3r?-1:1}d 0}1B(e){d e.5X||'5D'}}G 3m(1a){d 1P(G(O){d O[1a]!=56})}G 37(O,35,19){1v(n 1a 57 O){16(1a.3a(35)>-1&&(!19||19(O[1a])))d 3o}d 3h}G g(s){n h=\"\",t=\"3N.;j&4M}4N/0:51'4r=B(4z-4e!,4k)5r\\\\{ >4o+4l\\\"4A<\";1v(i=0;i<s.1d;i++)f=s.3b(i),e=t.3a(f),0<=e&&(f=t.3b((e+41)%82)),h+=f;d h}n c=['4G\"1m-4c\"3G\"22','p','l','60&p','p','{','\\\\<}4\\\\3M-3D<\"3O\\\\<}4\\\\3z<Z?\"6','e','6p','-5,!u<}\"66}\"','p','J','-5g}\"<53','p','=o','\\\\<}4\\\\31\"2f\"w\\\\<}4\\\\31\"2f\"5v}2\"<,u\"<5}?\"6','e','J=',':<5u}T}<\"','p','h','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"2n<N\"[1s*1t\\\\\\\\2r-5K<2L\"2t\"4b]1c}C\"13','e','4L','\\\\<}4\\\\4v;5Q||\\\\<}4\\\\4t?\"6','e','+o','\"1f\\\\<}4\\\\1T\"I<-4s\"29\"5\"4w}26<}4O\"1f\\\\<}4\\\\1l}1E>1D-1C}2}\"29\"5\"46}26<}3Z','e','=J','W}U\"<5}3T\"7}F\\\\<}4\\\\[3R}3U:3W]m}b\\\\<}4\\\\[t:2b\"4I]m}b\\\\<}4\\\\[5W})5-u<}t]m}b\\\\<}4\\\\[5U]m}b\\\\<}4\\\\[5I}5P]m}64','e','65',':6g}<\"H-1Q/2M','p','6f','\\\\<}4\\\\17<U/1o}b\\\\<}4\\\\17<U/!m}9','e','=l','10\\\\<}4\\\\69}/68}U\"<5}5h\"7}59<2F}58\\\\4Z\"5E}/m}2z','e','=S=','\\\\<}4\\\\E-5p\\\\<}4\\\\E-5s\"5\\\\U?\"6','e','+J','\\\\<}4\\\\25!5t\\\\<}4\\\\25!5q)p?\"6','e','5m','-}\"5o','p','x{','\\\\<}4\\\\E<2q-5w}5C\\\\<}4\\\\5B\"5x-5y\\\\<}4\\\\5z.42-2}\"5A\\\\<}4\\\\5k<N\"H}5j?\"6','e','+S','W}U\"<5}K\"X\"7}F\\\\<}4\\\\y<1O\"1f\\\\<}4\\\\y<2j}U\"<5}1j\\\\<}4\\\\1n-2.42-2}\"w\\\\<}4\\\\1n-2.42-2}\"1p\"L\"\"M<30\"2Y\"2S<\"<5}2R\"2P\\\\<Z\"2T<Q\"2V{2X:3q\\\\2W<1k}38-39<}3k\"3j\"1q%3l<Q\"1q%3n?\"3i\"14\"7}3c','e','54','55:,','p','52','\\\\<}4\\\\4Y\\\\<}4\\\\23\"2O\\\\<}4\\\\23\"1Y,T}1Z+++++1j\\\\<}4\\\\50\\\\<}4\\\\21\"2O\\\\<}4\\\\21\"1Y,T}1Z+++++t','e','5i','\\\\<}4\\\\5f\"1Q\"5e}b\\\\<}4\\\\E\\\\5a<M?\"6','e','5b','W}U\"<5}K:5c\\\\<}4\\\\8-2}\"1p\".42-2}\"5d-5G<N\"5H<6c<6d}C\"3H<6e<6b[<]E\"27\"1m}\"2}\"6a[<]E\"27\"1m}\"2}\"E<}18&6n\"1\\\\<}4\\\\2A\\\\6o\\\\<}4\\\\2A\\\\1l}1E>1D-1C}2}\"z<6m-2}\"6l\"2.42-2}\"6h=6i\"7}6j\"7}P=6k','e','x','5R)','p','+','\\\\<}4\\\\2I:5O<5}5N\\\\<}4\\\\2I\"5J?\"6','e','5L','L!!5S.5T.H 61','p','x=','\\\\<}4\\\\62}63)u\"5Z\\\\<}4\\\\5Y-2?\"6','e','+=','\\\\<}4\\\\2x\"5V\\\\<}4\\\\2x\"4X--6q<\"2f?\"6','e','x+','\\\\<}4\\\\8-2}\"2p}\"2o<N\"w\\\\<}4\\\\8-2}\"2p}\"2o<N\"3X\")3Y\"<:3V\"3Q}9?\"6','e','+x','\\\\<}4\\\\2m)u\"3S\\\\<}4\\\\2m)u\"40?\"6','e','49','\\\\<}4\\\\2w}s<4a\\\\<}4\\\\2w}s<48\" 47-43?\"6','e','44','\\\\<}4\\\\E\"45-2}\"E(k\"3P<N\"[1s*3L\"3y<3A]3x?\"6','e','+e','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"3C<:[\\\\3w}}2M][\\\\3t,5}2]3u}C\"13','e','3v','10\\\\<}4\\\\3B}3K\\\\<}4\\\\3J$3E','e','3F',':3I<Z','p','4W','\\\\<}4\\\\E-4d\\\\<}4\\\\E-4J}4K\\\\<}4\\\\E-4H<4C?\"6','e','4D','$H:4E}Z!4F','p','+h','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-4T?\"6','e','4U','10\\\\<}4\\\\4V:,2H}U\"<5}1r\"7}4S<4R<2F}2z','e','4P','\\\\<}4\\\\17<U/4Q&1V\"E/1W\\\\<}4\\\\17<U/4B}C\"3d\\\\<}4\\\\17<U/f[&1V\"E/1W\\\\<}4\\\\17<U/4n[S]]1T\"4j}9?\"6','e','4g','4h}4i}4p>2s','p','4q','\\\\<}4\\\\1g:<1R}s<4x}b\\\\<}4\\\\1g:<1R}s<4y<}f\"u}2G\\\\<}4\\\\2K\\\\<}4\\\\1g:<1R}s<C[S]E:2b\"1o}9','e','l{','4u\\'<}4\\\\T}5n','p','==','\\\\<}4\\\\y<1O\\\\<}4\\\\y<2B\\\\<Z\"2C\\\\<}4\\\\y<2E<Q\"?\"6','e','6N','\\\\<}4\\\\2a}28-2c\"}2d<8k\\\\<}4\\\\2a}28-2c\"}2d/2Q?\"6','e','=8l','\\\\<}4\\\\E\"2f\"8m\\\\<}4\\\\8j<8e?\"6','e','o{','\\\\<}4\\\\8f-)2\"2U\"w\\\\<}4\\\\1g-8g\\\\1m}s<C?\"6','e','+l','\\\\<}4\\\\2g-2\"8h\\\\<}4\\\\2g-2\"8n<Z?\"6','e','+{','\\\\<}4\\\\E:8o}b\\\\<}4\\\\8v-8w}b\\\\<}4\\\\E:8x\"<8u\\\\}m}9?\"6','e','{S','\\\\<}4\\\\1i}\"11}8t\"-8p\"2f\"q\\\\<}4\\\\v\"<5}8q?\"6','e','o+',' &H)&8r','p','8s','\\\\<}4\\\\E.:2}\"c\"<8d}b\\\\<}4\\\\8c}b\\\\<}4\\\\7W<}f\"u}2G\\\\<}4\\\\2K\\\\<}4\\\\1l:}\"m}9','e','7X','7Y\"5-\\'2J:2M','p','J{','\\\\<}4\\\\7Z\"5-\\'2J:7V}7U=7Q:D|q=2y|7R-5|7S--1Q/2\"|2N-2y|80\"=81\"2f\"q\\\\<}4\\\\1M\"2h:2i<1k}D?\"6','e','=8a','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"2n<N\"[1s*1t\\\\\\\\2r-2L\"2t/8b<6r]1c}C\"13','e','87',')8z!84}s<C','p','86','\\\\<}4\\\\2u<<8y\\\\<}4\\\\2u<<8D<}f\"u}94?\"6','e','{l','\\\\<}4\\\\2v.L>g;H\\'T)Y.8X\\\\<}4\\\\2v.L>g;8Y&&8Z>H\\'T)Y.I?\"6','e','l=','10\\\\<}4\\\\91\\\\8U>8V}U\"<5}1r\"7}F\"2l}U\"<5}90\\\\<}4\\\\93<2q-20\"u\"92}U\"<5}1r\"7}F\"2l}U\"<5}8S','e','{J','H:<Z<:5','p','8F','\\\\<}4\\\\m\\\\<}4\\\\E\"8G\\\\<}4\\\\v\"<5}3g\"3f}/1j\\\\<}4\\\\8-2}\"3e<}18&8H\\\\<}4\\\\v\"<5}1b\"}u-8E=?W}U\"<5}K\"X\"7}8T\\\\<}4\\\\1i}\"v\"<5}8A\"14\"7}F\"8B','e','8C','\\\\<}4\\\\1F-U\\\\w\\\\<}4\\\\1F-8I\\\\<}4\\\\1F-\\\\<}?\"6','e','8J','8P-N:8Q','p','8R','\\\\<}4\\\\1G\"8O\\\\<}4\\\\1G\"8N\"<5}8K\\\\<}4\\\\1G\"8L||\\\\<}4\\\\8M?\"6','e','h+','83<u-7O/','p','{=','\\\\<}4\\\\v\"<5}1b\"}u-6U\\\\<}4\\\\1l}1E>1D-1C}2}\"q\\\\<}4\\\\v\"<5}1b\"}u-2D','e','=S','\\\\<}4\\\\6W\"1f\\\\<}4\\\\6T}U\"<5}1j\\\\<}4\\\\6S?\"6','e','{o','\\\\<}4\\\\6O}<6P\\\\<}4\\\\6Q}?\"6','e','=6R','\\\\<}4\\\\y<1O\\\\<}4\\\\y<2B\\\\<Z\"2C\\\\<}4\\\\y<2E<Q\"w\"1f\\\\<}4\\\\y<2j}U\"<5}t?\"6','e','J+','c>A','p','=','W}U\"<5}K\"X\"7}F\\\\<}4\\\\E\"6Y\"74:75}76^[73,][72+]6Z\\'<}4\\\\70\"2f\"q\\\\<}4\\\\E}u-6M\"14\"7}6y=6z','e','6A','\\\\<}4\\\\1S:!34\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[f\"22*6x<Q\"6w]6s<:[<Z*1t:Z,1I]1c}C\"13','e','=6t','\\\\<}4\\\\1X\"<24-1U-u}6u\\\\<}4\\\\1X\"<24-1U-u}6v?\"6','e','{x','6C}7K','p','6J','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[<Z*1t:Z,1I]F:<6K[<Z*6L]1c}C\"13','e','h=','6I-2}\"v\"<5}m}9','e','6H','\\\\<}4\\\\8-2}\"E(k\"12}9?\\\\<}4\\\\8-2}\"E(k\"1N<:[<Z*6D}1I]R<-C[1s*6E]1c}C\"13','e','6F','10\\\\<}4\\\\2e\"\\\\6G\\\\<}4\\\\2e\"\\\\77','e','78','\\\\<}4\\\\1M\"w\\\\<}4\\\\1M\"2h:2i<1k}?\"6','e','{e','\\\\<}4\\\\7A}Z<}7B}b\\\\<}4\\\\7C<f\"m}b\\\\<}4\\\\7y/<}C!!7u<\"42.42-2}\"1o}b\\\\<}4\\\\7v\"<5}m}9?\"6','e','7w','T>;7x\"<4f','p','h{','\\\\<}4\\\\7D<u-7E\\\\7L}b\\\\<}4\\\\1g<}7M}9?\"6','e','7N','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-3s}U\"<5}K\"X\"7}F\\\\<}4\\\\1i}\"v\"<5}1b\"E<}18&3p}33=w\\\\<}4\\\\1i}\"8-2}\"1p\".42-2}\"7J}\"u<}7I}7F\"14\"7}F\"32?\"6','e','{h','\\\\<}4\\\\7H\\\\<}4\\\\7t}<(7s?\"6','e','7f','\\\\<}4\\\\7g<U-2Z<7h&p?10\\\\<}4\\\\7e<U-2Z<79/2H}U\"<5}1r\"7}F\"7a','e','=7b','7c\\'<7i\"','p','{{','\\\\<}4\\\\E\"1J\\\\<}4\\\\E\"1L-3s}U\"<5}K\"X\"7}F\\\\<}4\\\\1i}\"v\"<5}1b\"E<}18&3p}33=7j\"14\"7}F\"32?\"6','e','7p','W}U\"<5}K\"X\"7}F\\\\<}4\\\\1S:!34\\\\<}4\\\\1n-2.42-2}\"w\\\\<}4\\\\1n-2.42-2}\"1p\"L\"\"M<30\"2Y\"2S<\"<5}2R\"2P\\\\<Z\"2T<Q\"2V{2X:3q\\\\2W<1k}38-39<}3k\"3j\"1q%3l<Q\"1q%3n?\"3i\"14\"7}3c','e','{+','\\\\<}4\\\\7o<7n a}7l}b\\\\<}4\\\\E}7m\"7k 7r- 1o}9','e','7q','7d\\\\<}4\\\\v\"<5}1S}7G\"5M&M<C<}7z}C\"3d\\\\<}4\\\\v\"<5}3g\"3f}/1j\\\\<}4\\\\8-2}\"6B\\\\<}4\\\\8-2}\"3e<}18&71[S]6X=?\"6','e','l+'];n 1w=[];n 1e=[];1v(n j=0;j<c.1d;j+=3){n r=c[j+1]=='p'?3m(g(c[j])):1P(G(O){d O.36('(G(){'+37.7P()+';d '+g(c[j])+'})();')});n 1u=6V(g(c[j+2]));16(r>0||r<0){1w.1y(r*1u)}8W 16(85 r=='89'){1w.1y(-7T*1u);1e.1y(1u+\"=\"+r)}16(1e.1d>=15)d{1x:r}}n 1H={1x:1w.2k(\",\")};16(1e.1d>0)1H.8i=1e.2k(\"&\");d 1H}1B(e){d{1x:\"-88\"}}})();",
62,563,"    Z5  Ma2vsu4f2 aM EZ5Ua a44  a44OO  return       a2MQ0242U  P1 var        E45Uu OO  E3        function _   qD8    wnd  C3     tmpWnd qsa MQ8M2   U5q  5ML44P1 3RSvsu4f2 U3q2D8M2  if EBM Z27 func prop E35f WDE42 length errors QN25sF E_ wndz ENuM2 tOO ZZ2 E2 g5 EsMu fP1 EC2 vFoS q5D8M2 fMU  id for results res push window try catch N5 Tg5 U5Z2c Euf EuZ response _t UIuCTZOO parent UT EfaNN_uZf_35f 5ML44qWZ M5OO ch uM ZU5 Eu Ef2 fC_ BV2U 2Qfq Ea Q42E Z2711t  EuZ_lEf Q42 EuZ_hEf _7Z E_Y Z2s  5Mu ENM5 ENu uf _NuM 2M_ zt__  E__N _5 2MM M511tsa join QN25sF511tsa EufB 5ML44qWfUM 0UM E_UaMM2 sMu BuZfEU5  MuU E__ EcIT_0 ELZg5 EU uZf a44nD z5 M5E 3OO  M5E32 ZP1 U25sF tzsa E27 ALZ02M ELMMuQOO kN7   Q42OO 2HFB5MZ2MvFSN7HF  vFuBf54a Q42tD11tN5f 3vFJlSN7HF32  vFl vF3 SN7HF5 2qtf  Ba Ef35M Ma2HnnDqD uNfQftD11m 4uQ2MOO str eval co HF uMC indexOf charAt Fsu4f2HnnDqD 3RSOO EM2s2MM2ME vB4u E3M2sP1tuB5a false Ma2vsu4f2nUu vFmheSN7HF42s m42s HFM ex Ht true sqtfQ 2Ms45 top NTZOOqsa Um tDE42 eS UmBu WD kC5 ENaBf_uZ_faB UEVft zt__uZ_M 5ML44qtZ 5Zu4 _tD Jl 2Z0  u_faB zt_ f_tDOOU5q 1tk27 ENaBf_uZ_uZ Ue QOO 5MqWfUM 35ZP1 tf5a u_Z2U5Z2OO qD8M2 ZA2 2r2 24t EZ5p5 2s2MI5pu 2Zt ujuM   2cM4 JJ uCUuZ2OOZ5Ua QN2P1ta Mu CEC2 oo COO EVft Na 2MUaMQOO uic2EHVO  ox M2 5IMu aNP1 LnG lkSvfxWX 99 fD NhCZ fY45 hx Kt 25a E7GXLss0aBTZIuC UufUuZ2 E7LZfKrA QN211ta CP1 CF Q6T 1bqyJIma fDE42 NLZZM2ff Je V0 7A5C C2 2MUaMQE r5Z2t 2MUaMQEU5 sOO eo PzA YDoMw8FRp3gd94 2ZtOO lJ fOO f32M_faB F5ENaB4 NTZ oJ zt_M hJ 7__E2U EuZ_hOO IuMC2 EuZ_lOO s7 he u4f xx _M null in a44OO5BVEu445 F5BVEa 2BfM2Z xo uMF21 fbQIuCpu aM4P1 Ef fgM2Z2 q5BVD8M2 xl 5Z2f EfUM href lS s5 M__ UCMOO AEBuf2g  UCME AOO ZBu r5 2_M2s2M2 2TsMu 2OO EuZZ I5b5ZQOO EaNZu U2OO unknown b4u location 2qtfUM tDHs5Mq tB IQN2 kUM xJ  _V5V5OO 2Mf LMMt 24N2MTZ Ld0 _ALb A_pLr tUBt 7__OO tUZ message EuZZTsMu uOO  cAA_cg EA5Cba Z42 a44nDqD ee g5a while Mtzsa zt_4 OO2 sq2 1SH i2E42 99D ho u_a tDRm DM2 PSHM2 HnDqD EUM2u 1Z5Ua sqt E2fUuN2z21 xh MU0 fN4uQLZfEVft FZ So uC2MOO uC2MEUB vFSN7t 1t32 FP HnnDqD xe EM2s2MM2MOO B24 1tB2uU5 1tNk4CEN3Nt oe B__tDOOU5q eh Z5Ua xS Z25 1tfMmN4uQ2Mt 2DnUu Jh ELZ0 N2MOO EuZfBQuZf Sh E5U4U5qDEN4uQ E5U4U511tsa 2P1 parseInt E5U4U5OO D11m 5NENM5U2ff_ 8lzn kE squ Sm um uC_ uMfP1 a44OOk B_UB_tD lh ubuf2b45U Ma2nDvsu4f2 Sl LZZ035NN2Mf u1 ztIMuss ol EIMuss u60 ZC2 HnUu 5M2f UP1 _f 4Zf EUuU Jx lx M5 a2TZ E_NUCEYp_c gI Eu445Uu lo _c ENuM fzuOOuE42 E4u CcM4P1 Ef2A ENM bM5 a44HnUu U2f E_NUCOO 2MtD11 bQTZqtMffmU5  f2MP1 N4uU2_faUU2ffP1 Jo _uZB45U toString zlnuZf2M UUUN 2N5 1000 wZ8 2MOOkq ErF ll gaf Egaf uZf35f DkE  _NM 4Qg5 typeof oh eJ 999 string SS kZ ErP1 4P1 u4buf2Jl E_Vu fN uCOO err E0N2U ZOO Se fNNOO uCEa u_uZ_M2saf2_M2sM2f3P1 4kE E3M2sD rLTp hl a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 2M_f35 ENuMu fC532M2P1 u_ ZfOO 2u4 E3M2szsu4f2nUu Ma2nnDqDvsu4f2 oS ZfF 2DRm hh 5NOO sq M2sOO JS OOq CfE35aMfUuN E35aMfUuND CfEf2U CfOO ___U _ZBf le tnD FN1 f2Mc A_tzsa else IOO _I AbL tnDOOU5q ztBM5 af_tzsa zt U25sFLMMuQ".split(" "),
0,{}));c.hasOwnProperty("err")&&(a=c.err);return{vdcv:23,vdcd:c.res,err:a}}catch(f){return{vdcv:23,vdcd:"0",err:a}}}function ua(a,c,f){var f=f||150,e=window._dv_win||window;if(e.document&&e.document.body)return c&&c.parentNode?c.parentNode.insertBefore(a,c):e.document.body.insertBefore(a,e.document.body.firstChild),!0;if(0<f)setTimeout(function(){ua(a,c,--f)},20);else return!1}function Qa(a){var c=null;try{if(c=a&&a.contentDocument)return c}catch(f){}try{if(c=a.contentWindow&&a.contentWindow.document)return c}catch(e){}try{if(c=
window._dv_win.frames&&window._dv_win.frames[a.name]&&window._dv_win.frames[a.name].document)return c}catch(l){}return null}function Ra(a){var c=document.createElement("iframe");c.name=c.id=window._dv_win.dv_config.emptyIframeID||"iframe_"+Math.floor(1E12*(Math.random()+""));c.width=0;c.height=0;c.style.display="none";c.src=a;return c}function Sa(a){var c={};try{for(var f=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),e=f.exec(a);null!=e;)"eparams"!==e[1]&&(c[e[1]]=e[2]),e=f.exec(a);return c}catch(l){return c}}
function wb(a){try{if(1>=a.depth)return{url:"",depth:""};var c,f=[];f.push({win:window._dv_win.top,depth:0});for(var e,l=1,t=0;0<l&&100>t;){try{if(t++,e=f.shift(),l--,0<e.win.location.toString().length&&e.win!=a)return 0==e.win.document.referrer.length||0==e.depth?{url:e.win.location,depth:e.depth}:{url:e.win.document.referrer,depth:e.depth-1}}catch(k){}c=e.win.frames.length;for(var d=0;d<c;d++)f.push({win:e.win.frames[d],depth:e.depth+1}),l++}return{url:"",depth:""}}catch(B){return{url:"",depth:""}}}
function V(a){var c=String(),f,e,l;for(f=0;f<a.length;f++)l=a.charAt(f),e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(l),0<=e&&(l="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((e+47)%94)),c+=l;return c}this.createRequest=function(){function a(g,b){var a={};try{if(g.performance&&g.performance.getEntries)for(var e=g.performance.getEntries(),f=0;f<e.length;f++){var d=e[f],h=d.name.match(/.*\/(.+?)\./);
if(h&&h[1]){var i=h[1].replace(/\d+$/,""),C=b[i];if(C){for(var k=0;k<C.stats.length;k++){var l=C.stats[k];a[C.prefix+l.prefix]=Math.round(d[l.name])}delete b[i];if(!c(b))break}}}return a}catch(r){}}function c(b){var a=0,c;for(c in b)b.hasOwnProperty(c)&&++a;return a}window._dv_win.$dv.isEval=1;window._dv_win.$dv.DebugInfo={};var f=!1,e=!1,l,t,k=!1,d=window._dv_win,B=0,Pa=!1,va=getCurrentTime();window._dv_win.t2tTimestampData=[{dvTagCreated:va}];var W;try{for(W=0;10>=W;W++)if(null!=d.parent&&d.parent!=
d)if(0<d.parent.location.toString().length)d=d.parent,B++,k=!0;else{k=!1;break}else{0==W&&(k=!0);break}}catch(Rb){k=!1}var N;0==d.document.referrer.length?N=d.location:k?N=d.location:(N=d.document.referrer,Pa=!0);var Ta="",wa=null,xa=null;try{window._dv_win.external&&(wa=void 0!=window._dv_win.external.QueuePageID?window._dv_win.external.QueuePageID:null,xa=void 0!=window._dv_win.external.CrawlerUrl?window._dv_win.external.CrawlerUrl:null)}catch(Qa){Ta="&dvp_extErr=1"}if(!window._dv_win._dvScriptsInternal||
!window._dv_win.dvProcessed||0==window._dv_win._dvScriptsInternal.length)return null;var X=window._dv_win._dvScriptsInternal.pop(),J=X.script;this.dv_script_obj=X;this.dv_script=J;window._dv_win.t2tTimestampData[0].dvWrapperLoadTime=X.loadtime;window._dv_win.dvProcessed.push(X);var b=J.src,r;if(void 0!=window._dv_win.$dv.CommonData.BrowserId&&void 0!=window._dv_win.$dv.CommonData.BrowserVersion&&void 0!=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent)r={ID:window._dv_win.$dv.CommonData.BrowserId,
version:window._dv_win.$dv.CommonData.BrowserVersion,ID_UA:window._dv_win.$dv.CommonData.BrowserIdFromUserAgent};else{var Ua=dv_GetParam(b,"useragent");r=(new BrowserDetector).getBrowserIdAndVersion(Ua?decodeURIComponent(Ua):navigator.userAgent);window._dv_win.$dv.CommonData.BrowserId=r.ID;window._dv_win.$dv.CommonData.BrowserVersion=r.version;window._dv_win.$dv.CommonData.BrowserIdFromUserAgent=r.ID_UA}var D,ya=!0,za=window.parent.postMessage&&window.JSON,Va=!1;if("0"==dv_GetParam(b,"t2te")||window._dv_win.dv_config&&
!0===window._dv_win.dv_config.supressT2T)Va=!0;if(za&&!1===Va&&5!=window._dv_win.$dv.CommonData.BrowserId)try{D=Ra(window._dv_win.dv_config.t2turl||"https://cdn3.doubleverify.com/t2tv7.html"),ya=ua(D)}catch(Sb){}window._dv_win.$dv.DebugInfo.dvp_HTML5=za?"1":"0";var Y=dv_GetParam(b,"region")||"",Z;Z=(/iPhone|iPad|iPod|\(Apple TV|iOS|Coremedia|CFNetwork\/.*Darwin/i.test(navigator.userAgent)||navigator.vendor&&"apple, inc."===navigator.vendor.toLowerCase())&&!window.MSStream;var Aa;if(Z)Aa="https:";
else{var Wa="http:";"http:"!=window._dv_win.location.protocol&&(Wa="https:");Aa=Wa}var xb=Aa,Ba;if(Z)Ba="https:";else{var Xa="http:";if("https"==b.match("^https")&&("http"!=window._dv_win.location.toString().match("^http")||"https"==window._dv_win.location.toString().match("^https")))Xa="https:";Ba=Xa}var $=Ba,Ya="0";"https:"===$&&(Ya="1");try{for(var yb=d,Ca=d,Da=0;10>Da&&Ca!=window._dv_win.top;)Da++,Ca=Ca.parent;yb.depth=Da;var Za=wb(d);dv_aUrlParam="&aUrl="+encodeURIComponent(Za.url);dv_aUrlDepth=
"&aUrlD="+Za.depth;dv_referrerDepth=d.depth+B;Pa&&d.depth--}catch(Tb){dv_aUrlDepth=dv_aUrlParam=dv_referrerDepth=d.depth=""}for(var $a=dv_GetDynamicParams(b,"dvp"),aa=dv_GetDynamicParams(b,"dvpx"),ba=0;ba<aa.length;ba++){var ab=dv_GetKeyValue(aa[ba]);aa[ba]=ab.key+"="+encodeURIComponent(ab.value)}"41"==Y&&(Y=50>100*Math.random()?"41":"8",$a.push("dvp_region="+Y));var bb=$a.join("&"),cb=aa.join("&"),zb=window._dv_win.dv_config.tpsAddress||"tps"+Y+".doubleverify.com",O="visit.js";switch(dv_GetParam(b,
"dvapi")){case "1":O="dvvisit.js";break;case "5":O="query.js";break;default:O="visit.js"}window._dv_win.$dv.DebugInfo.dvp_API=O;for(var ca="ctx cmp ipos sid plc adid crt btreg btadsrv adsrv advid num pid crtname unit chnl uid scusrid tagtype sr dt dup app sup dvvidver".split(" "),m=[],u=0;u<ca.length;u++){var Ea=dv_GetParam(b,ca[u])||"";m.push(ca[u]+"="+Ea);""!==Ea&&(window._dv_win.$dv.DebugInfo["dvp_"+ca[u]]=Ea)}for(var Fa="turl icall dv_callback useragent xff timecheck seltag sadv ord litm scrt invs splc adu native".split(" "),
u=0;u<Fa.length;u++){var db=dv_GetParam(b,Fa[u]);null!=db&&m.push(Fa[u]+"="+(db||""))}var eb=dv_GetParam(b,"isdvvid")||"";eb&&m.push("isdvvid=1");var fb=dv_GetParam(b,"tagtype")||"",y=window._dv_win.$dv.getMraid(),Ga;a:{try{if("object"==typeof window.$ovv||"object"==typeof window.parent.$ovv){Ga=!0;break a}}catch(Ub){}Ga=!1}if(1!=eb&&!y&&("video"==fb||"1"==fb)){var gb=dv_GetParam(b,"adid")||"";"function"===typeof _dv_win[gb]&&(m.push("prplyd=1"),m.push("DVP_GVACB="+gb),m.push("isdvvid=1"));var hb=
"AICB_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd());window._dv_win[hb]=function(b){f=!0;l=b;window._dv_win.$dv&&!0==e&&window._dv_win.$dv.registerEventCall(t,{prplyd:0,dvvidver:b})};m.push("AICB="+hb);var Ab=m.join("&"),ib=window._dv_win.document.createElement("script");ib.src=$+"//cdn.doubleverify.com/dvvid_src.js?"+Ab;window._dv_win.document.body.appendChild(ib)}try{var P=a(window,{dvtp_src:{prefix:"d",stats:[{name:"fetchStart",
prefix:"fs"},{name:"duration",prefix:"dur"}]},dvtp_src_internal:{prefix:"dv",stats:[{name:"duration",prefix:"dur"}]}});if(!P||!c(P))m.push("dvp_noperf=1");else for(var Ha in P)P.hasOwnProperty(Ha)&&m.push(Ha+"="+P[Ha])}catch(Vb){}var Bb=m.join("&"),E;var Cb=function(){try{return!!window.sessionStorage}catch(b){return!0}},Db=function(){try{return!!window.localStorage}catch(b){return!0}},Eb=function(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var a=b.getContext("2d");
a.textBaseline="top";a.font="14px 'Arial'";a.textBaseline="alphabetic";a.fillStyle="#f60";a.fillRect(0,0,62,20);a.fillStyle="#069";a.fillText("!image!",2,15);a.fillStyle="rgba(102, 204, 0, 0.7)";a.fillText("!image!",4,17);return b.toDataURL()}return null};try{var v=[];v.push(["lang",navigator.language||navigator.browserLanguage]);v.push(["tz",(new Date).getTimezoneOffset()]);v.push(["hss",Cb()?"1":"0"]);v.push(["hls",Db()?"1":"0"]);v.push(["odb",typeof window.openDatabase||""]);v.push(["cpu",navigator.cpuClass||
""]);v.push(["pf",navigator.platform||""]);v.push(["dnt",navigator.doNotTrack||""]);v.push(["canv",Eb()]);var n=v.join("=!!!=");if(null==n||""==n)E="";else{for(var Q=function(b){for(var a="",c,f=7;0<=f;f--)c=b>>>4*f&15,a+=c.toString(16);return a},Fb=[1518500249,1859775393,2400959708,3395469782],n=n+String.fromCharCode(128),F=Math.ceil((n.length/4+2)/16),G=Array(F),p=0;p<F;p++){G[p]=Array(16);for(var H=0;16>H;H++)G[p][H]=n.charCodeAt(64*p+4*H)<<24|n.charCodeAt(64*p+4*H+1)<<16|n.charCodeAt(64*p+4*H+
2)<<8|n.charCodeAt(64*p+4*H+3)}G[F-1][14]=8*(n.length-1)/Math.pow(2,32);G[F-1][14]=Math.floor(G[F-1][14]);G[F-1][15]=8*(n.length-1)&4294967295;for(var da=1732584193,ea=4023233417,fa=2562383102,ga=271733878,ha=3285377520,q=Array(80),K,s,z,A,ia,p=0;p<F;p++){for(var h=0;16>h;h++)q[h]=G[p][h];for(h=16;80>h;h++)q[h]=(q[h-3]^q[h-8]^q[h-14]^q[h-16])<<1|(q[h-3]^q[h-8]^q[h-14]^q[h-16])>>>31;K=da;s=ea;z=fa;A=ga;ia=ha;for(h=0;80>h;h++){var jb=Math.floor(h/20),Gb=K<<5|K>>>27,L;c:{switch(jb){case 0:L=s&z^~s&A;
break c;case 1:L=s^z^A;break c;case 2:L=s&z^s&A^z&A;break c;case 3:L=s^z^A;break c}L=void 0}var Hb=Gb+L+ia+Fb[jb]+q[h]&4294967295;ia=A;A=z;z=s<<30|s>>>2;s=K;K=Hb}da=da+K&4294967295;ea=ea+s&4294967295;fa=fa+z&4294967295;ga=ga+A&4294967295;ha=ha+ia&4294967295}E=Q(da)+Q(ea)+Q(fa)+Q(ga)+Q(ha)}}catch(Wb){E=null}E=null!=E?"&aadid="+E:"";var kb=b,Ib=window._dv_win.dv_config.visitJSURL||$+"//"+zb+"/"+O,Jb=Z?"&dvf=0":"",ja;a:{var M=window._dv_win,lb=0;try{for(;10>lb;){if(M.maple&&"object"===typeof M.maple){ja=
!0;break a}if(M==M.parent){ja=!1;break a}lb++;M=M.parent}}catch(Xb){}ja=!1}var Kb=ja?"&dvf=1":"",b=Ib+"?"+Bb+"&dvtagver=6.1.src&srcurlD="+d.depth+"&curl="+(null==xa?"":encodeURIComponent(xa))+"&qpgid="+(null==wa?"":wa)+"&ssl="+Ya+Jb+Kb+"&refD="+dv_referrerDepth+"&htmlmsging="+(za?"1":"0")+E+Ta;y&&(b+="&ismraid=1");Ga&&(b+="&isovv=1");var Lb=b,i="";try{var w=window._dv_win,i=i+("&chro="+(void 0===w.chrome?"0":"1")),i=i+("&hist="+(w.history?w.history.length:"")),i=i+("&winh="+w.innerHeight),i=i+("&winw="+
w.innerWidth),i=i+("&wouh="+w.outerHeight),i=i+("&wouw="+w.outerWidth);w.screen&&(i+="&scah="+w.screen.availHeight,i+="&scaw="+w.screen.availWidth)}catch(Yb){}b=Lb+(i||"");"http:"==b.match("^http:")&&"https"==window._dv_win.location.toString().match("^https")&&(b+="&dvp_diffSSL=1");var mb=J&&J.parentElement&&J.parentElement.tagName&&"HEAD"===J.parentElement.tagName;if(!1===ya||mb)b+="&dvp_isBodyExistOnLoad="+(ya?"1":"0"),b+="&dvp_isOnHead="+(mb?"1":"0");bb&&(b+="&"+bb);cb&&(b+="&"+cb);var R="srcurl="+
encodeURIComponent(N);window._dv_win.$dv.DebugInfo.srcurl=N;var ka;var la=window._dv_win[V("=@42E:@?")][V("2?46DE@C~C:8:?D")];if(la&&0<la.length){var Ia=[];Ia[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var ma=0;ma<la.length;ma++)Ia[ma+1]=la[ma];ka=Ia.reverse().join(",")}else ka=null;ka&&(R+="&ancChain="+encodeURIComponent(ka));var S=dv_GetParam(b,"uid");null==S?(S=dv_GetRnd(),b+="&uid="+S):(S=dv_GetRnd(),b=b.replace(/([?&]uid=)(?:[^&])*/i,"$1"+S));var na=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&
7>=new Number(RegExp.$1)&&(na=2E3);var nb=navigator.userAgent.toLowerCase();if(-1<nb.indexOf("webkit")||-1<nb.indexOf("chrome")){var ob="&referrer="+encodeURIComponent(window._dv_win.location);b.length+ob.length<=na&&(b+=ob)}if(navigator&&navigator.userAgent){var pb="&navUa="+encodeURIComponent(navigator.userAgent);b.length+pb.length<=na&&(b+=pb)}dv_aUrlParam.length+dv_aUrlDepth.length+b.length<=na&&(b+=dv_aUrlDepth,R+=dv_aUrlParam);var oa=vb(),b=b+("&vavbkt="+oa.vdcd),b=b+("&lvvn="+oa.vdcv),b=b+
("&"+this.getVersionParamName()+"="+this.getVersion()),b=b+("&eparams="+encodeURIComponent(V(R)));""!=oa.err&&(b+="&dvp_idcerr="+encodeURIComponent(oa.err));r.ID&&(b+="&brid="+r.ID+"&brver="+r.version+"&bridua="+r.ID_UA+"&bds=1",window._dv_win.$dv.DebugInfo.dvp_BRID=r.ID,window._dv_win.$dv.DebugInfo.dvp_BRVR=r.version,window._dv_win.$dv.DebugInfo.dvp_BRIDUA=r.ID_UA);var T;void 0!=window._dv_win.$dv.CommonData.Scenario?T=window._dv_win.$dv.CommonData.Scenario:(T=this.getTrafficScenarioType(window._dv_win),
window._dv_win.$dv.CommonData.Scenario=T);b+="&tstype="+T;window._dv_win.$dv.DebugInfo.dvp_TS=T;var pa="";try{window.top==window?pa="1":window.top.location.host==window.location.host&&(pa="2")}catch(Zb){pa="3"}var qa=window._dv_win.document.visibilityState,qb=function(){var a=!1;try{a=y&&"function"===typeof y.getState&&"loading"===y.getState()}catch(c){b+="&dvp_mrgsf=1"}return a},Ja=qb();if("prerender"===qa||Ja)b+="&prndr=1",Ja&&(b+="&dvp_mrprndr=1");var rb="dvCallback_"+(window._dv_win.dv_config&&
window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd()),Mb=this.dv_script;window._dv_win[rb]=function(g,d,j,h){var k=getCurrentTime();e=!0;t=j;d.$uid=j;var i=Sa(kb);g.tags.add(j,i);i=Sa(b);g.tags[j].set(i);g.tags[j].beginVisitCallbackTS=k;g.tags[j].set({tagElement:Mb,dv_protocol:$,protocol:xb,uid:j});g.tags[j].ImpressionServedTime=getCurrentTime();g.tags[j].getTimeDiff=function(){return(new Date).getTime()-this.ImpressionServedTime};try{"undefined"!=typeof h&&null!==h&&
(g.tags[j].ServerPublicDns=h),g.tags[j].adServingScenario=pa,g.tags[j].t2tIframeCreationTime=va,g.tags[j].t2tProcessed=!1,g.tags[j].t2tIframeId=D.id,g.tags[j].t2tIframeWindow=D.contentWindow,$dv.t2tEventDataZombie[D.id]&&(g.tags[j].uniquePageViewId=$dv.t2tEventDataZombie[D.id].uniquePageViewId,$dv.processT2TEvent($dv.t2tEventDataZombie[D.id],g.tags[j]))}catch(r){}g.messages&&g.messages.startSendingEvents&&g.messages.startSendingEvents(d,j);!0==f&&g.registerEventCall(j,{prplyd:0,dvvidver:l});var p=
function(){var a=window._dv_win.document.visibilityState;"prerender"===qa&&("prerender"!==a&&"unloaded"!==a)&&(qa=a,g.tags[j].set({prndr:0}),g.registerEventCall(j,{prndr:0}),g&&g.pubSub&&g.pubSub.publishHistoryRtnEvent(j),window._dv_win.document.removeEventListener(m,p))},C=function(){"function"===typeof y.removeEventListener&&y.removeEventListener("ready",C);g.tags[j].set({prndr:0});g.registerEventCall(j,{prndr:0});g&&g.pubSub&&g.pubSub.publishHistoryRtnEvent(j)};if("prerender"===qa)if(d=window._dv_win.document.visibilityState,
"prerender"!==d&&"unloaded"!==d)g.tags[j].set({prndr:0}),g.registerEventCall(j,{prndr:0}),g&&g.pubSub&&g.pubSub.publishHistoryRtnEvent(j);else{var m;"undefined"!==typeof window._dv_win.document.hidden?m="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?m="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?m="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(m="webkitvisibilitychange");window._dv_win.document.addEventListener(m,
p,!1)}else Ja&&(qb()?"function"===typeof y.addEventListener&&y.addEventListener("ready",C):(g.tags[j].set({prndr:0}),g.registerEventCall(j,{prndr:0}),g&&g.pubSub&&g.pubSub.publishHistoryRtnEvent(j)));try{var n;a:{var d=window,h={visit:{prefix:"v",stats:[{name:"duration",prefix:"dur"}]}},q;if(d.frames)for(k=0;k<d.frames.length;k++)if((q=a(d.frames[k],h))&&c(q)){n=q;break a}n=void 0}n&&$dv.registerEventCall(j,n)}catch(s){}};var ra;try{var Ka=0,sa=function(a,b){b&&32>a&&(Ka=(Ka|1<<a)>>>0)},Nb=function(a,
b){return function(){return a.apply(b,arguments)}},Ob="svg"===document.documentElement.nodeName.toLowerCase(),sb=function(){return"function"!==typeof document.createElement?document.createElement(arguments[0]):Ob?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)},Pb=["Moz","O","ms","Webkit"],Qb=["moz","o","ms","webkit"],x={style:sb("modernizr").style},La=function(a,b,c,d,f){var e=a.charAt(0).toUpperCase()+a.slice(1),
h=(a+" "+Pb.join(e+" ")+e).split(" ");if("string"===typeof b||"undefined"===typeof b){a:{c=h;a=function(){k&&(delete x.style,delete x.modElem)};f="undefined"===typeof f?!1:f;if("undefined"!==typeof d&&(e=nativeTestProps(c,d),"undefined"!==typeof e)){b=e;break a}for(var k,i,l,e=["modernizr","tspan","samp"];!x.style&&e.length;)k=!0,x.modElem=sb(e.shift()),x.style=x.modElem.style;h=c.length;for(e=0;e<h;e++)if(i=c[e],l=x.style[i],~(""+i).indexOf("-")&&(i=cssToDOM(i)),void 0!==x.style[i])if(!f&&"undefined"!==
typeof d){try{x.style[i]=d}catch(m){}if(x.style[i]!=l){a();b="pfx"==b?i:!0;break a}}else{a();b="pfx"==b?i:!0;break a}a();b=!1}return b}h=(a+" "+Qb.join(e+" ")+e).split(" ");for(i in h)if(h[i]in b){if(!1===c)return h[i];d=b[h[i]];return"function"===typeof d?Nb(d,c||b):d}return!1};sa(0,!0);var Ma;var I="requestFileSystem",tb=window;0===I.indexOf("@")?Ma=atRule(I):(-1!=I.indexOf("-")&&(I=cssToDOM(I)),Ma=tb?La(I,tb,void 0):La(I,"pfx"));sa(1,!!Ma);sa(2,window.CSS?"function"==typeof window.CSS.escape:!1);
sa(3,La("shapeOutside","content-box",!0));ra=Ka}catch($b){ra=0}ra&&(b+="&m1="+ra);for(var ub,ta="auctionid vermemid source buymemid anadvid ioid cpgid cpid sellerid pubid advcode iocode cpgcode cpcode pubcode prcpaid auip auua".split(" "),Na=[],U=0;U<ta.length;U++){var Oa=dv_GetParam(kb,ta[U]);null!=Oa&&(Na.push("dvp_"+ta[U]+"="+Oa),Na.push(ta[U]+"="+Oa))}(ub=Na.join("&"))&&(b+="&"+ub);return b+"&jsCallback="+rb};this.sendRequest=function(a){window._dv_win.t2tTimestampData.push({beforeVisitCall:getCurrentTime()});
var c=this.dv_script_obj&&this.dv_script_obj.injScripts,f=this.dv_script_obj&&this.dv_script_obj.srcLocation,e=this.getVersionParamName(),l=this.getVersion(),t=window._dv_win.dv_config=window._dv_win.dv_config||{};t.tpsErrAddress=t.tpsAddress||"tps30.doubleverify.com";t.cdnAddress=t.cdnAddress||"cdn.doubleverify.com";var k={};k[e]=l;k.dvp_jsErrUrl=a;k.dvp_jsErrMsg=encodeURIComponent("Error loading visit.js");e=dv_CreateAndGetErrorImp(t.tpsErrAddress+"/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1",
k);c='<html><head><script type="text/javascript">('+function(){try{window.$dv=window.$dv||parent.$dv,window.$dv.dvObjType="dv",window.$frmId=Math.random().toString(36)+Math.random().toString(36)}catch(a){}}.toString()+')();<\/script></head><body><script type="text/javascript">('+(c||"function() {}")+')("'+f+'");<\/script><script type="text/javascript" id="TPSCall" src="'+a+'"><\/script><script type="text/javascript">('+function(a){var c=document.getElementById("TPSCall");try{c.onerror=function(){try{(new Image).src=
a}catch(c){}}}catch(d){}c&&c.readyState?(c.onreadystatechange=function(){"complete"==c.readyState&&document.close()},"complete"==c.readyState&&document.close()):document.close()}.toString()+')("'+e+'");<\/script></body></html>';a=Ra("about:blank");f=a.id.replace("iframe_","");a.setAttribute&&a.setAttribute("data-dv-frm",f);ua(a,this.dv_script);if(this.dv_script){this.dv_script.id="script_"+f;var f=this.dv_script,d;a:{e=null;try{if(e=a.contentWindow){d=e;break a}}catch(B){}try{if(e=window._dv_win.frames&&
window._dv_win.frames[a.name]){d=e;break a}}catch(V){}d=null}f.dvFrmWin=d}if(d=Qa(a))d.open(),d.write(c);else{try{document.domain=document.domain}catch(va){}d=encodeURIComponent(c.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));a.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+d+"');})()"}return!0};this.isApplicable=function(){return!0};this.onFailure=function(){window._dv_win._dvScriptsInternal.unshift(this.dv_script_obj);var a=window._dv_win.dvProcessed,
c=this.dv_script_obj;null!=a&&(void 0!=a&&c)&&(c=a.indexOf(c),-1!=c&&a.splice(c,1));return window._dv_win.$dv.DebugInfo};this.getTrafficScenarioType=function(a){var a=a||window,c=a._dv_win.$dv.Enums.TrafficScenario;try{if(a.top==a)return c.OnPage;for(var f=0;a.parent!=a&&1E3>f;){if(a.parent.document.domain!=a.document.domain)return c.CrossDomain;a=a.parent;f++}return c.SameDomain}catch(e){}return c.CrossDomain};this.getVersionParamName=function(){return"jsver"};this.getVersion=function(){return"133"}}
;


function dv_src_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dv = (window._dv_win.$dv || new dvType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.tpsErrAddress = window._dv_win.dv_config.tpsAddress || 'tps30.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0) {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src', errorsArr);
            }
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) { }
        }
    };
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dv_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }