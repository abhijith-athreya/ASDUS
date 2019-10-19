_satellite.pushAsyncScript(function(event, target, $variables){
  var w = window,
    loc = w.location,
    host = loc.hostname.toLowerCase(),
    path = loc.pathname,
    US = '/us/en',
    sign = '/sign',
    us_sign = US + sign,
    usecases = '/use-cases',
    sign_usecase = sign + usecases,
    sign_freetrialglogal = sign + '/free-trial-global',
    sign_capabilities = sign + '/capabilities/',
    why_adobe = '/why-adobe',
    why_adobe_integ = why_adobe + '/integrations',
    html = '.html',
    is = false,
    index = function(str, substr) {
        return str.indexOf(substr) !== -1;

    };
var mcRegEx = new RegExp(/\/(fr|de|uk)\/marketing-cloud/);
var mcUSRegEx = new RegExp(/^\/marketing-cloud/);
// var mcUSDCRegEx = new RegExp(/\/us\/en\/documents\//);
var GeoRegEx = new RegExp(/\/(us\/en|jp\/ja|de\/de|fr\/fr|uk\/en|ca\/fr|au\/en|ca\/en|nz\/en|dk\/da|es\/es|fi\/fi|it\/it|nl\/nl|no\/no|se\/sv)\//);
if (host.indexOf('www.adobe.com') !== -1 || host.indexOf('www.stage.adobe.com') !== -1) {
    if (path.indexOf('/creativecloud') !== -1 && path.indexOf("plans.html") === -1) {
        is = true;
    } else if (mcRegEx.test(path)) {
        is = true;
    } else if (mcUSRegEx.test(path)) {
        is = true;
    }
} else if (host === "success.adobe.com" || host === "offers.adobe.com" || host === "landing.adobe.com") {
    if (path.indexOf("/en/na/") !== -1 || path.indexOf("/en/uk/") !== -1 || path.indexOf("/de/de/") !== -1 || path.indexOf("/fr/fr/") !== -1) {
        is = true;
    }
} else if (host === "www.cmo.com") {
    is = true;
} else if (_satellite.getVar("isSite_Acrobat") && ((GeoRegEx.test(path) && (index(path, sign + html) ||
            index(path, us_sign + '/how-to/digital-signatures' + html) ||
            index(path, '/acrobat/how-to/electronic-signatures-online-e-signatures' + html) ||
            index(path, US + sign_usecase + html) ||
            index(path, sign_usecase + '/human-resources' + html) ||
            index(path, sign_usecase + '/procurement' + html) ||
            index(path, sign_usecase + '/sales' + html) ||
            index(path, sign_freetrialglogal + html) ||
            index(path, sign_freetrialglogal + '/registration-thankyou' + html) ||
            index(path, sign_freetrialglogal + '/salesforce' + html) ||
            index(path, sign_freetrialglogal + '/salesforce-thankyou' + html) ||
            index(path, US + sign_capabilities + html) ||
            index(path, sign_capabilities + '/sign-approve' + html) ||
            index(path, sign_capabilities + '/sign-send-documents' + html) ||
            index(path, sign_capabilities + '/track-manage-documents' + html) ||
            index(path, why_adobe_integ + html) ||
            index(path, why_adobe_integ + '/salesforce' + html) ||
            index(path, why_adobe_integ + '/ariba' + html) ||
            index(path, why_adobe_integ + '/apttus' + html) ||
            index(path, why_adobe_integ + '/microsoft-dynamic-crm' + html) ||
            index(path, why_adobe_integ + '/microsoft-sharepoint' + html) ||
            index(path, why_adobe_integ + '/workday' + html) ||
            index(path, why_adobe_integ + '/xero' + html) ||
            index(path, why_adobe + '/it-resources' + html) ||
            index(path, why_adobe + html) ||
            index(path, '/request-form' + html) ||
            index(path, '/acrobat/e-sign-pdf-files' + html) ||
            index(path, '/acrobat/send-for-signature' + html) ||
            index(path, sign + '/pricing/plans' + html) ||
            index(path, sign + '/pricing/compare-plans' + html) ||
            index(path, sign + '/contact' + html) ||
            index(path, sign + '/contact/contact-thankyou' + html))) ||
        path.indexOf(US) !== -1)) {
    is = true;
}


if (is) {
    //<script type="text/javascript">
    _linkedin_data_partner_id = "872";
    //</script><script type="text/javascript">
    (function() {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })();
    //</script>
    //<noscript>
    //<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=872&fmt=gif" />
    //</noscript>    
}

});
