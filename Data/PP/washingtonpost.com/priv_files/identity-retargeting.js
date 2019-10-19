;(function($){
	try{
		function initRetargeting(){
			var
			RetargeterScript = "http://dynads.adextent.com/ansn-creative/dynads/ServeS3.ashx/autotag-wp.js",
			RetargeterSecureScript = "https://ssl.adextent.com/ansn-creative/dynads/ServeS3.ashx/autotag-wp.js",
			RetargeterHitTheWallUrl = "http://www.washingtonpost.com/paywall",
			RetargeterSubscriberUrl = "http://www.washingtonpost.com/subscriber",
			WPPlusDefaultUrl = "//pixel.mathtag.com/event/js?mt_id=290247&mt_adid=109699&v1=&v2=&v3=&s1=&s2=&s3=",
			WPPlusHitTheWallUrl = "//pixel.mathtag.com/event/js?mt_id=290248&mt_adid=109699&v1=&v2=&v3=&s1=&s2=&s3=",
			WPPlusSubscriberUrl = "//pixel.mathtag.com/event/js?mt_id=290249&mt_adid=109699&v1=&v2=&v3=&s1=&s2=&s3="
			;
			// TWP.Identity.paywall.pwresp.mtr: content-is-metered [1|not-1]
			// TWP.Identity.paywall.pwresp.sub: user-is-unmetered -1
			if(TWP.Identity.paywall.pwresp.mtr==1 && TWP.Identity.paywall.pwresp.sub==0){
				// jQuery.ajax({
				// 	dataType: "script",
				// 	cache: true,
				// 	url:(location.protocol=="https:") ? RetargeterSecureScript : RetargeterScript,
				// 	success:function(data) {
					try {
						setTimeout(function(){ 
							try {
								wpAd.utils.addPixel(WPPlusDefaultUrl);
							} catch(e) {}
							
						}, 1000);
						// TWP.StaticMethods.addScript(WPPlusDefaultUrl,WPPlusDefaultUrl);
						if (TWP.Identity.paywall.pwresp.action==3){
							window.fireAdextentPixel&&fireAdextentPixel(RetargeterHitTheWallUrl);
							TWP.StaticMethods.addScript(WPPlusHitTheWallUrl,WPPlusHitTheWallUrl);
						}
					} catch (e) {}
				// 	}
				// });
} else if (TWP.Identity.paywall.pwresp.sub==1) {
	try {
				// Subscribed User
				setTimeout(function(){ 
					try {
						wpAd.utils.addPixel(WPPlusSubscriberUrl);
					} catch(e) {}
					
					// console.log('fired subscriber pixel');
				}, 1000);
				
				// TWP.StaticMethods.addScript(WPPlusSubscriberUrl,WPPlusSubscriberUrl);
			} catch (e) {console.log('error: ', e);}
		}
	}

	if(
		window.TWP
		&& TWP.Identity
		&& TWP.Identity.paywall
		&& TWP.Identity.paywall.pwresp
		&& TWP.StaticMethods
		&& TWP.StaticMethods.addScript
		){
		initRetargeting();
} else {
	$(document).on('onTwpMeterReady',function(){
		initRetargeting();
	});
}

}catch(e){
	window.console&&console.exception&&console.exception(e);
}
})(jQuery);