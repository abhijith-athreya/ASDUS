_satellite.pushAsyncScript(function(event, target, $variables){
  function sendAAMPixel(adobeID) {
    dpuuid = adobeID.split('@')[0];
    if (_satellite._readCookie("aam_tnt") !== '' && _satellite._readCookie("adobe_optout") === "" && _satellite.readCookie("aam_cctc") !== "true") {
        var aam_tnt = _satellite._unescape(_satellite._readCookie("aam_tnt"));
        //cctcImg = document.createElement('img');
        //cctcImg.style.display = "none";
        //cctcImg.style.width = "1";
        //cctcImg.style.height = "1";

        var cctc = '';

        if (aam_tnt.indexOf("cctc_photographer") > -1) {
            cctc = 'photographer';
        } else if (aam_tnt.indexOf("cctc_designer") > -1) {
            cctc = 'designer';
        } else if (aam_tnt.indexOf("cctc_student") > -1) {
            cctc = 'student';
        } else if (aam_tnt.indexOf("cctc_smb") > -1) {
            cctc = 'smb';
        } else if (aam_tnt.indexOf("cctc_stock") > -1) {
            cctc = 'stock';
        }
        if (cctc && dpuuid) {

            //cctcImg.src = 'https://adobe.demdex.net/event?d_rtbd=json&key=val&d_cb=processAudienceManagerProfile&d_dpid=813&d_dpuuid=' + dpuuid + '&cctc=' + cctc;
            //document.body.appendChild(cctcImg);
            s_adbadobenonacdc.eVar12 = dpuuid;
            s_adbadobenonacdc.eVar101 = "seg=cctc_"+cctc;
            s_adbadobenonacdc.linkTrackVars = "eVar12,eVar101";
            s_adbadobenonacdc.tl(true,"o","cctc_segment_sharing");
            _satellite.setCookie("aam_cctc",true);           

        }
    }
}
var dpuuid = '';

if (window.location.hostname === "www.stage.adobe.com" || window.location.hostname === "www.adobe.com") {
    if (typeof adobeIMS === "object" && adobeIMS.onReadyAlreadyCalled) {
        if (window.adobeIMS._profile && window.adobeIMS._profile.userId) {

            sendAAMPixel(window.adobeIMS._profile.userId);

        }
    } else {
        try {
            adobeIMS.addEventListener(adobeIMS.Events.READY, function() {
                if (window.adobeIMS._profile && window.adobeIMS._profile.userId) {
                    sendAAMPixel(window.adobeIMS._profile.userId);
                }
            });
        } catch (err) {

        }
    }
}

});
