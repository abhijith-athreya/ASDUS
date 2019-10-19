
/***********************************************************************************************************************************/
/**********    This section of the code  for refresh  session *********************/
/***********************************************************************************************************************************/

var disableSessionExpiredPopup = false;

var showPopup = false;

var showSessionExpiredPopup = false;

var expiringTime = 1500000;
var expiringPopupTime = 300000;
/*var expiringTime = 25000;
var expiringPopupTime = 30000;*/
/*var expiringTime = 150000;
var expiringPopupTime = 30000;*/
var isHttpsPage = window.location.protocol == "https:";


var refreshSessionSucess = true;
	function getErightsCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	

	function refreshSessionAndShowPopup() {
		if(!disableSessionExpiredPopup){
	        var cookieValue =  getErightsCookie("ERIGHTS");
	        if (cookieValue != null && showSessionPopup()) {
	        	if(!showPopup){
	        		// refreshErightsSession(cookieValue, refreshCallbackAndShowPopup);
	        		refreshIdemSession();
	        	}else{
	        		showSessionExpiringOverlay();
	        	}
			}else{
				
			}
		}
	}


	function checkPageToShowSessionPopup(){
		 var currLocation = window.location.href.toLowerCase();
		 if((currLocation.indexOf('login') > -1) ||  (currLocation.indexOf('register') > -1 )){
			disableSessionExpiredPopup = true;
		 }
	}
	

	function refreshIdemSession() {
		if(isHttpsPage){
			addHtmlAtEndOfBody('<iframe id="refreshsessionIframe" src="' + myApaUrl.replace("http:", "https:") + '/apa/idm/refreshsession.jsf" width="0" height="0" frameborder="no"></iframe>');
		}else{
			addHtmlAtEndOfBody('<iframe id="refreshsessionIframe" src="' + myApaUrl + '/apa/idm/refreshsession.jsf" width="0" height="0" frameborder="no"></iframe>');
		}

		if(showPopup){
			showSessionExpiringOverlay();
		}else{
			showPopup = true;
			setTimeout(refreshSessionAndShowPopup , expiringTime);
		}
	}

	
	function logoutIdem(){
		hideSessionPopupOverlay();
		 var currLocation = window.location.href;
		 window.location.href=myApaUrl+ "/apa/idm/logout.jsf?ERIGHTS_TARGET=" + currLocation;
	}
	
	function cancelPopup(){
		hideSessionExpiredPopupOverlay();
		deleteErightsCookies();
		window.location.reload();
	}
	
	

	function loginToIdem(){
		 hideSessionExpiredPopupOverlay();
		 deleteErightsCookies();
		 var currLocation = window.location.href;
		 window.location.href=myApaUrl+"/apa/idm/login.jsf?ERIGHTS_TARGET=" + currLocation;
	}
	
	
	
	function keepMeLoggedInIdem(){
		showPopup = false;
		showSessionExpiredPopup = false;
		refreshSessionAndShowPopup();
		hideSessionPopupOverlay();
	}
	
	
	function showSessionExpiringOverlay() {
		showSessionOverlay();
		hideOverlayImage();
		jQ("<div id='sessionExpiringOverlayDivID' style='display: block; z-index: 10002; outline: 0px none; height: auto; width: 390px; top: 200px; left: 555px;' class='sessionExpiringOverlayDiv  ui-dialog ui-widget ui-widget-content ui-corner-all timeout-dialog' tabindex='-1' role='dialog' aria-labelledby='ui-dialog-title-timeout-dialog'>" + 
		"<div class='ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'><span class='ui-dialog-title' id='ui-dialog-title-timeout-dialog' style='white-space: nowrap'>Your session is about to expire!</span><a href='#' class='ui-dialog-titlebar-close ui-corner-all' role='button'>" +
		"<span class='ui-icon ui-icon-closethick'>close</span></a></div><div id='timeout-dialog' class='ui-dialog-content ui-widget-content' style='width: auto; min-height: 0px; height: auto;'><p id='timeout-message' style='font-size:13px;text-align:center;padding-bottom:15px;'>You will be logged out in <span style='font-size:15px;font-weight:bold;'>5</span> minutes.</p> " +
		"<p id='timeout-question'>Do you want to stay signed in?</p><div class='ui-dialog-title-smaller'>If you log out, you will lose any unsaved information.</div></div><div class='ui-dialog-buttonpane ui-widget-content ui-helper-clearfix' style='padding-left:75px;'><div class='ui-dialog-buttonset'><button type='button' onclick='keepMeLoggedInIdem()' id='timeout-keep-signin-btn' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' role='button' style='width:173px;'><span class='ui-button-text' style='color:white;text-decoration:none;font-weight:bold;padding:10px;font-family: arial;font-size:14px;'>Keep me logged in</span></button>" +
		"<button type='button' onclick='logoutIdem()' id='timeout-sign-out-button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' role='button' style='width:90px;'><span class='ui-button-text' style='color:#6497CB;text-decoration:none;font-weight:bold;padding:10px;'>Log out</span></button></div></div></div> ").appendTo("body");
		
		/*jQ("<div onmouseover='' id='confirmOverlay' class='sessionTimeOutDiv'><div class='sessionTimeOutWindowClose'><a href='#' onclick='javascript:hideSessionPopupOverlay()'>Close</a></div>" + 
				 "<div class='sessionTimeOutForm'><span class='popupTitle'>APA Session expires soon.</span> " + 
				 "<p class='popupBody'>For more information about becoming an APA Member, please go to our.</p>" + 
				 "<div class='popupLRDiv'><div class='popupButtonDivLeft popupLDiv'><button id='backBtn' class='submit popupBtn' onclick=''>Keep session alive</button>" + 
				 "</div><div class='popupButtonDivRight popupRDiv'><button id='okBtn' class='submit popupBtn' onclick='hideSessionPopupOverlay()'>Cancel</button></div>" + 
				 "</div></div></div>" ).appendTo("body");
		
		*/
		window.scrollTo(0,0);
		if("function" == typeof(newSessionTimeoutPopupExpiring)){
			newSessionTimeoutPopupExpiring();
		}
		showSessionExpiredPopup = true;
		setTimeout(showSessionExpiredOverlay , expiringPopupTime);
	}

	
	
	

	function showSessionExpiredOverlay() {
		if(showSessionExpiredPopup){
			hideSessionPopupOverlay();
			if("function" == typeof(newSessionTimeoutPopupExpired)){
				console.log('hideoverlay and bootbox');
				hideOverlay();jQ(".bootbox").remove();
			}
			showSessionOverlay();
			hideOverlayImage();
			jQ("<div id='sessionExpiredOverlayDivID' style='display: block; z-index: 10002; outline: 0px none; height: auto; width: 310px; top: 200px; left: 555px;' class='sessionExpiredOverlayDiv ui-dialog ui-widget ui-widget-content ui-corner-all timeout-dialog' tabindex='-1' role='dialog' aria-labelledby='ui-dialog-title-timeout-dialog'>" + 
					 "<div class='ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'><span class='ui-dialog-title' id='ui-dialog-title-timeout-dialog' style='white-space: nowrap'>Your session has expired!</span><a href='#' class='ui-dialog-titlebar-close ui-corner-all' role='button'>" + 
					 "<span class='ui-icon ui-icon-closethick'>close</span></a></div><div id='timeout-dialog' class='ui-dialog-content ui-widget-content' style='width: auto; min-height: 0px; height: auto; '><p id='timeout-question'>Do you want to log in again?</p></div>" + 
					 "<div  style='margin-left: 85px;' class='ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'><div class='ui-dialog-buttonset'><button onclick='loginToIdem()' type='button' id='timeout-keep-signin-btn' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' role='button'  style=''>" + 
					 "<span class='ui-button-text' style='color:white;text-decoration:none;font-weight:bold;padding:10px;font-family: arial;font-size:14px;'>Log in</span></button>"+
					 "<button type='button' onclick='cancelPopup()' id='timeout-sign-out-button' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only' role='button' style=''><span class='ui-button-text' style='color:#6497CB;text-decoration:none;font-weight:bold;padding:10px;'>Cancel</span></button></div></div></div> ").appendTo("body");	
			window.scrollTo(0,0);
			if("function" == typeof(newSessionTimeoutPopupExpired)){
				newSessionTimeoutPopupExpired();
			}
		}else{
			hideSessionExpiredPopupOverlay();
		}
		
	}
	
	
	
	function hideSessionPopupOverlay() {hideOverlay();jQ(".sessionExpiringOverlayDiv").remove();}


	function hideSessionExpiredPopupOverlay() {hideOverlay();jQ(".sessionExpiredOverlayDiv").remove();}

	
	function showSessionOverlay() {
		jQ("<div id='overlay'></div><div id='overlayImage'><img src='" + myApaUrl + "/apa/shop/img/ajax.gif' /><div class='waitText'>Please Wait...</div></div>").appendTo("body");
		jQ("#overlay").css("width", jQ(document).width());
		jQ("#overlay").css("height", jQ(document).height());
	}


	function showSessionPopup() {
		 var currLocation = window.location.hostname;
	     if (top !== self) {
	    	 currLocation = window.parent.location.hostname;
	     }
	     var showSessionpop = ( currLocation.toLowerCase().indexOf("my", 0)  >=0   ||  (currLocation.toLowerCase() == "test.apa.org"  )  || currLocation.toLowerCase().indexOf("www.apa.org", 0)  >0 );
	    // alert("currLocation=" + currLocation  + "  showSessionpop=" +showSessionpop);
	     return showSessionpop &&  !disableSessionExpiredPopup;
	}
	

	 function deleteErightsCookies() {
		 document.cookie =  'ERIGHTS=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	 }
	
	
	 
	 checkPageToShowSessionPopup();

	setTimeout(refreshSessionAndShowPopup , 5000);


	/***********************************************************************************************************************************/



	
	