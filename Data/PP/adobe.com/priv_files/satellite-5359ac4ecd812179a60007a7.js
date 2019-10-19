_satellite.pushAsyncScript(function(event, target, $variables){
  
(function (SL) {
  var trackingid = SL.getQueryParam('trackingid'),
    sdid = SL.getQueryParam('sdid'),
    promoid = SL.getQueryParam('promoid'),
    trackingidQueryParamPresent = (trackingid === undefined) ? false : true,
    sdidQueryParamPresent = (sdid === undefined) ? false : true,
    promoidQueryParamPresent = (promoid === undefined) ? false : true,
    // Read from either top level cookie or from TID sub-cookie
    tid = SL._readCookie('TID'),
    tidPieces = [],
    expires = 120 * 24 * 60 * 60 * 1000; // 120 days

  if (sdidQueryParamPresent || 
    trackingidQueryParamPresent || 
    promoidQueryParamPresent) {

    tid = tid || '--';

    tidPieces = tid.split('-');

    // trackingid
    if (!trackingidQueryParamPresent) {
      trackingid = tidPieces[0] || '';
    }

    // sdid
    if (!sdidQueryParamPresent) {
      sdid = tidPieces[1] || '';
    }

    // promoid
    if (!promoidQueryParamPresent) {
      promoid = tidPieces[2] || '';
    }

    // TODO: Remove when clients are fully migrated
    // continue to set the sub-cookie for now
    SL._setCookie('TID', trackingid + '-' + sdid + '-' + promoid, expires);

    // set top level cookie
    // NOTE: This needs to be set AFTER the sub-cookie is set because if it is set before, it will
    // get deleted and stuck into the sub-cookie
    SL._setCookie('TID', trackingid + '-' + sdid + '-' + promoid, expires, null, null, true);
  }
}(SL));
});
