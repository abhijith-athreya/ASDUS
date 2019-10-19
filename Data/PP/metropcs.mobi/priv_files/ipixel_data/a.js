window.oiq_uid = window.oiq_uid || 'Q' + ((Date.now() / 1000 | 0) - 946713600) + Math.floor(((Math.random() * 1147483647) + 1000000000)) + 'J';var oiq_img_src_0 = "https://px.owneriq.net/ep?sid%5B%5D=6600173737&sid%5B%5D=6600173742&sid%5B%5D=6600173747&sid%5B%5D=6600173752&sid%5B%5D=6600173757&sid%5B%5D=6600173762&sid%5B%5D=6600173767&sid%5B%5D=6600173772&sid%5B%5D=6600173777&sid%5B%5D=6600173782&sid%5B%5D=6600173787&sid%5B%5D=5644833174&sid%5B%5D=6249941294&pt=3rkrg6";
if(window.oiq_uid) { oiq_img_src_0 += '&uid=' + window.oiq_uid; } 
if(typeof(_oiq_fps_js) != 'undefined' && _oiq_fps_js === true){ oiq_img_src_0 += '&jcs=1'; }if(typeof(oiq_ii) === 'undefined') {
	var oiq_i_0 = new Image();
	oiq_i_0.src = oiq_img_src_0;
} else { 
	 try {
		oiq_ii('ep',oiq_img_src_0);
	 } catch(oiq_error_message) {
		oiq_error_message = oiq_error_message || { "message" : "couldn't find error" };
		var oiq_key = OIQLogging.eventFire("var_setup");
		OIQLogging.logEvent({'error' : oiq_error_message.message , 'action' : "segment_image_ingjection"}, oiq_key);
	}
}