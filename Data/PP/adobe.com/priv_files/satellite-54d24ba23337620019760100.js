_satellite.pushAsyncScript(function(event, target, $variables){
  (function(win, doc) {
        var scriptElement;
        if (typeof(win.ClickTaleCreateDOMElement) != "function") {
            win.ClickTaleCreateDOMElement = function(tagName) {
                if (doc.createElementNS) {
                    return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
                }
                return doc.createElement(tagName);
            };
        }
        win.WRInitTime = (new Date()).getTime();
        scriptElement = ClickTaleCreateDOMElement('script');
        scriptElement.type = "text/javascript";
        scriptElement.src = "//cdnssl.clicktale.net/www20/ptc/544fc825-311a-44c5-86f0-70581a36c216.js";
        doc.getElementsByTagName('body')[0].appendChild(scriptElement);
}) (window, document);
});
