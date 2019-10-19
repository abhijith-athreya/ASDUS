function startActivityHandler(e) {
    document.removeEventListener("touchstart", arguments.callee, false);
    document.documentElement.onmousemove = null; // We need it here to turn off mouse move too.

   if (true) {
        timeoutSleep(0, placeCssAspxRequest);
    }
};
document.documentElement.onmousemove = startActivityHandler;
document.addEventListener("touchstart", startActivityHandler, false);

function placeCheckerRequest() {
    var stt1 = '/layouts/system';
    var stt2 = '/VIChecker.aspx?tstamp=';
    var stt3 = getMetatagContent();

    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', stt1 + stt2 + stt3);
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

function placeCssAspxRequest() {
    st1 = '/layouts/system/Visitor';
    st2 = 'Identification';
    st3 = 'CSS.aspx?' + new Date().getTime();

    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', st1 + st2 + st3);
    document.getElementsByTagName("head")[0].appendChild(fileref);
    
    timeoutSleep(30000, placeCheckerRequest);
}

function timeoutSleep(milliseconds, callbackFunction) {
    window.setTimeout(
        function () {
            callbackFunction();
        }, milliseconds);
}

function getMetatagContent() {
    var metas = document.getElementsByTagName('meta');

    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("name") == "VIcurrentDateTime") {
            return metas[i].getAttribute("content");
        }
    }

    return "";
}
