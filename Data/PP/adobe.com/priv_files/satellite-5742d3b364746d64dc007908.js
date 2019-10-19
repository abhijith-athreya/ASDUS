/*var w = window,
    loc = w.location,
    hostname = loc.hostname.toLowerCase(),
    pathname = loc.pathname;

var mcRegEx = new RegExp(/\/(fr|de|uk)\/marketing-cloud/);
var mcUSRegEx = new RegExp(/^\/marketing-cloud/);
// var mcUSDCRegEx = new RegExp(/\/us\/en\/documents\//);
var GeoRegEx = new RegExp(/\/(us\/en|jp\/ja|de\/de|fr\/fr|uk\/en|ca\/fr|au\/en|ca\/en|nz\/en|dk\/da|es\/es|fi\/fi|it\/it|nl\/nl|no\/no|se\/sv)\//);
var _bizo_data_partner_id = '';

if (mcRegEx.test(location.pathname)) {
    _bizo_data_partner_id = "8572";
} else if (hostname === "success.adobe.com" || hostname === "offers.adobe.com" || hostname === "landing.adobe.com") {
    if (pathname.indexOf("/en/uk/") !== -1 || pathname.indexOf("/de/de/") !== -1 || pathname.indexOf("/fr/fr/") !== -1) {
        _bizo_data_partner_id = "8572";
    } else if (pathname.indexOf("/en/na/") !== -1) {
        _bizo_data_partner_id = "872";
    }
} else if ((_satellite.getVar("isSite_Acrobat") && GeoRegEx.test(location.pathname)) || mcUSRegEx.test(location.pathname) || hostname === "www.cmo.com") {
    ((_satellite.getVar("isSite_Acrobat") && pathname.indexOf('/us/en/') !== -1) || (hostname === "www.cmo.com")) ? _linkedin_data_partner_id = "872": _bizo_data_partner_id = "872";
} else {
    _bizo_data_partner_id = "8540";
}

(function() {
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    if ((_satellite.getVar("isSite_Acrobat") && pathname.indexOf('/us/en/') !== -1)) {
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    } else {
        b.src = (window.location.protocol === "https:" ? "https://sjs" : "http://js") + ".bizographics.com/insight.min.js";
    }

    s.parentNode.insertBefore(b, s);
})(); */
