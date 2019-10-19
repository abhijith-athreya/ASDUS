_satellite.pushAsyncScript(function(event, target, $variables){
  var signed_status = '',
    guid = '',
    uuid = '',
    mcid = '',
    faas_id = _satellite.getQueryParam('faas_unique_submission_id') || '', // for u8 parameter
    p_name = '';

_satellite._poll(function() {
    if (typeof s_adbadobenonacdc !== 'undefined' && (_satellite.getVar('isSite_cloudAcrobatLegacy') || (typeof adobeIMS === 'undefined'))){
        signed_status = s_adbadobenonacdc.prop27;

        guid = s_adbadobenonacdc.eVar12;
      //console.log('adbadobenonacdc');
    } 
    
    if(typeof adobeIMS !== 'undefined' && adobeIMS){
        signed_status = adobeIMS.isSignedInUser() ? "SignedIn" : "NotSignedIn";
        var signedIn = adobeIMS.isSignedInUser(),
            profile = adobeIMS.getUserProfile(),
            userId = profile && profile.userId && profile.userId.replace('@AdobeID', '');

        guid = (signedIn && profile && userId ? userId : '');
      // console.log('AdobeIMS exists');
    }
 // uuid
    uuid = _satellite.readCookie('aam_uuid') || '';
    //mcid
    if (typeof s_adbadobenonacdc !== 'undefined' && s_adbadobenonacdc && s_adbadobenonacdc.marketingCloudVisitorID !== undefined &&
        s_adbadobenonacdc.marketingCloudVisitorID) {
        mcid = s_adbadobenonacdc.marketingCloudVisitorID;
         //console.log('mcid : ' + mcid);
    }
    //Adobe Analytics page name
    p_name = _satellite.getVar('adbadobenonacdc_pageName') || '';
    if(p_name === ''){
      p_name = s_adbadobenonacdc.pageName;
      //console.log('p_name : ' + p_name);
    }

    if (signed_status && mcid && p_name) {
        var axel = Math.random() + "",
            a = axel * 10000000000000,
            dclkFrame = document.createElement('iframe');
        dclkFrame.style.display = "none";
        dclkFrame.style.width = "1";
        dclkFrame.style.height = "1";
        dclkFrame.src = 'https://1295336.fls.doubleclick.net/activityi;src=1295336;type=idsync;cat=uuidm0;u1=' + signed_status + ';u2=' + uuid + ';u3=' + mcid + ';u4=;u5=' + guid + ';u6=' + p_name + ';u7=%%dc_rdid%%;u8='+faas_id +';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?';
        document.body.appendChild(dclkFrame);
    }

}, [function() {
    if ((typeof adobeIMS !== 'undefined' && adobeIMS) || (typeof s_adbadobenonacdc !== 'undefined' && s_adbadobenonacdc && typeof _satellite.getVar('isSite_cloudAcrobatLegacy') !== 'undefined')) {
        return true;
    }
}], { timeout: 10000, interval: 200 })

});
