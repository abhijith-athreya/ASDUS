function readCookie(name){
       var cookieValue = "";
       var search = name + "=";
	    if(document.cookie.length > 0){ 
              offset = document.cookie.indexOf(search);
              if (offset != -1){ 
                offset += search.length;
	        end = document.cookie.indexOf(";", offset);
                if (end == -1) end = document.cookie.length;
                cookieValue = unescape(document.cookie.substring(offset, end))
	      }
            }
     	return cookieValue;
}

function createCookie(name,value,days){
	if (days) {
	var date = new Date();

	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function createCookieDomain(name,value,days){
	if (days) {
	var date = new Date();

	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+";domain =.prnewswire.com;path=/";
}

function eraseCookie(name){
	createCookie(name,"",-1);
}
