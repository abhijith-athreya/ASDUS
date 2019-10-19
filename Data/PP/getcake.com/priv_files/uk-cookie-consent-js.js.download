//All the cookie setting stuff
function catapultSetCookie(cookieName, cookieValue, nDays) {
	var today = new Date();
	var expire = new Date();
	if (nDays==null || nDays==0) nDays=1;
	expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+"; path=/";
}
function catapultReadCookie(cookieName) {
	var theCookie=" "+document.cookie;
	var ind=theCookie.indexOf(" "+cookieName+"=");
	if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
	if (ind==-1 || cookieName=="") return "";
	var ind1=theCookie.indexOf(";",ind+1);
	if (ind1==-1) ind1=theCookie.length; 
	// Returns true if the versions match
	return ctcc_vars.version == unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}
function catapultDeleteCookie(cookieName) {
	document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
function catapultAcceptCookies() {
	catapultSetCookie('catAccCookies', ctcc_vars.version, ctcc_vars.expiry);
	jQuery("html").removeClass('has-cookie-bar');
	jQuery("html").css("margin-top","0");
	jQuery("#catapult-cookie-bar").fadeOut();
}
// The function called by the timer
function ctccCloseNotification() {
		catapultAcceptCookies();
}
// The function called if first page only is specified
function ctccFirstPage() {
	if ( ctcc_vars.method ) {
		catapultSetCookie('catAccCookies', ctcc_vars.version, ctcc_vars.expiry);
	}
}
jQuery(document).ready(function($){
	$('.x_close').on('click', function(){
		catapultAcceptCookies();
	});
});