var arcotIsInitDone = 0;

function setVariable(myVar){
	arcotIsInitDone = myVar;	
	return;
}

function getDocumentDomain() {
	try {	
		var d = document.domain;
		if (d.indexOf(".") > -1) {
			var end = d.substring(d.lastIndexOf("."), d.length);
			d = d.substring(0, d.lastIndexOf("."));
			d = d.substring(d.lastIndexOf(".") + 1, d.length);
			d = d + end;
		}
		return d;
	} catch(e) {
		return null;
	}
}

function getFlashMovieObject(movieName) {
	if (window.document[movieName])
		return window.document[movieName];
	if (navigator.appName.indexOf("Microsoft Internet")==-1) {
		if (document.embeds && document.embeds[movieName])
		  	return document.embeds[movieName];
	}
	else
		return document.getElementById(movieName);
}

function getFlashCookie(cookieName) {
	return;
}

function setFCookie(cookieName, cookieValue) {
	return;
}

function getDocumentCookie(name) {
	try {
		var dcookie = document.cookie;
		var cname = name + "=";
		var clen = dcookie.length;
		var cbegin = 0;
		var hasempty = 0;
		while(cbegin < clen) {
			var vbegin = cbegin + cname.length;
			if(dcookie.substring(cbegin, vbegin) == cname) {
				var vend = dcookie.indexOf(";", vbegin);
				if(vend == -1) vend = clen;
				if(vbegin == vend) ++hasempty;
				else return unescape(dcookie.substring(vbegin, vend));
			}
			cbegin = dcookie.indexOf(" ", cbegin) + 1;
			if(cbegin == 0) break;
		}
		if(hasempty > 0) return "";
		else return null;
	} catch(e) {
		return null;
	}
}

function deviceCookie() {
	return "adtoken";
}

function deviceSignature() {
	return jsonSignature();
}

function deviceId() {
	return "";
}

function setDeviceId(did, callBackFunctionName) {
	return;
}

function setFlashCookie(cookieName,cookieValue) {
	return;
}

function setFlashCookie(cookieName,cookieValue, callBackFunctionName) { 
	return;
}

function waitForMovieToLoad() {
	return;
}

function callBackFunctionDefault() {}
