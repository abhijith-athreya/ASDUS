function doRegTracking(e) {
	if(e === 'regorigin' && Cookie.get("regorigin") !== null){
		console.log(e);
		var regorigin = document.createElement('meta');
		regorigin.setAttribute('name', 'DCSext.qse_b2b_newreg');
		regorigin.setAttribute('content', Cookie.get("regorigin"));
		document.getElementsByTagName('head')[0].appendChild(regorigin);
		Cookie.erase("regorigin");
	}	
	if(e === 'USERID_COOKIE' && Cookie.get("USERID_COOKIE") !== null){
		//dcsMultiTrack("DCSext.qse_b2b_loggedin", "yes", "WT.dl", "29");
		var loginmeta = document.createElement('meta');
		loginmeta.setAttribute('name', 'DCSext.qse_b2b_loggedin');
		loginmeta.setAttribute('content', 'yes');
		document.getElementsByTagName('head')[0].appendChild(loginmeta);
	}
	if(e === 'reghistory' && Cookie.get("reghistory") !== null){
		console.log(e);
		var reghistorymeta = document.createElement('meta');
		reghistorymeta.setAttribute('name', 'DCSext.qse_b2b_reghistory');
		reghistorymeta.setAttribute('content', Cookie.get("reghistory"));
		document.getElementsByTagName('head')[0].appendChild(reghistorymeta);		
	}		
}

function regTrackingCall() {
	var metas = document.getElementsByTagName('meta');
	var reghistoryFound = ''; var regoriginFound = ''; var loginFound = '';
	
	for (var i=0; i<metas.length; ++i) {
	  var regTrackingmeta = metas[i];
	  if (regTrackingmeta.getAttribute('name') === "DCSext.qse_b2b_reghistory") {
		reghistoryFound = regTrackingmeta;
		console.log("Found DCSext.qse_b2b_reghistory");
	  }
	  if (regTrackingmeta.getAttribute('name') === "DCSext.qse_b2b_loggedin") {
		loginFound = regTrackingmeta;
		console.log("Found DCSext.qse_b2b_loggedin");
	  }
	  if (regTrackingmeta.getAttribute('name') === "DCSext.qse_b2b_newreg") {
		regoriginFound = regTrackingmeta;
		console.log("Found DCSext.qse_b2b_newreg");
	  }		  
	}

	if(regoriginFound==='')
		doRegTracking('regorigin');
		
	if(loginFound==='')			
		doRegTracking('USERID_COOKIE');

	if(reghistoryFound==='')
		doRegTracking('reghistory');
}

var Cookie = {
	set: function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		
		var chostName = location.hostname;
		var cdomain = chostName.substring(chostName.indexOf("."), chostName.length); 
		document.cookie = name+"="+value+expires+";domain="+cdomain+"; path=/";
	},
	get: function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	erase: function(e) {
		Cookie.set(e, "", -1)
	}
},
getQueryStringforReg = function(e, n) {
	var t = n ? n : window.location.href,
		o = new RegExp("[?&]" + e + "=([^&#]*)", "i"),
		i = o.exec(t);
	return i ? i[1] : null
};

//Call tracking on every page load
regTrackingCall();	