// this is legacy.js


/*
************************************************************
Promotions.settings moved from /scripts/cart/promotions/settings.js
************************************************************
*/
if ( ! window.Promotions) {
    window.Promotions = {};
    window.Promotions.settings = {
        display   : true,
        sections : {
            standings  : { index:"SM_SQ", wildcard: "SM_SQ" }
            //scoreboard : "SM_SQ",
            //stats      : { index:"SM_SQ" },
            //schedule   : { index:"SM_SQ" },
            //players    : { index:"SM_SQ" },
            //tickets    : { index:"SM_SQ" },
            //news : { index:"SM_SQ" } // custom setting below
        }
    }
    // add custom rules for promo display
    // this line will only display promo component for news index page on mlb site
    if(typeof club!="undefined" && club=="mlb"){
        window.Promotions.settings.sections.news = { news_index : "SM_SQ" } ;
    }
}
else if (window.bam && bam.trackDeprecated) {
    bam.trackDeprecated({method:"launchPsPlayer", module:"/scripts/legacy.js"});
}



/*
************************************************************
launchPsPlayer moved from /scripts/mediaplayer/ps_player.js
************************************************************
*/
function launchPsPlayer(view) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"launchPsPlayer", module:"/scripts/legacy.js"});
    }
	/* NOTE: The Changes are ONLY FOR NLCS GAMES   */
	/* ALCS Games are consistant and taken care of */
	/* by the switch case "fox" statement below. */	
	var psp_w = "reflector:32070";					// ## 400K ## **Overnight**
	//var psp_w = "reflector:35920";				// ## 700K ## During Game
	var psp_gid = "";								// ## No Game ## **Overnight**
	//var psp_gid = "2007/10/17/arimlb-colmlb-1";	// ## Game ## During Game 5, flip at Wed. 7:00pm ET
	//var psp_gid = "2007/10/19/colmlb-arimlb-1";	// ## Game ## During Game 6, flip at Sat. TBD ET
	//var psp_gid = "2007/10/20/colmlb-arimlb-1";	// ## Game ## During Game 7, flip at Sun. TBD ET	
	var psp_vid = "7759";							// ## Baseball Channel view ## **Overnight**
	//var psp_vid = "tbs";							// ## Hot Corners view ## During Game
	switch (view) {	
      case "fox":	  
         playMedia2({w_id:'605116',w:'reflector:51072',vid:'fox',pid:'gen_video',v:'2'});
         break;		 
      default:	  
         playMedia2({w:psp_w,gid:psp_gid,vid:psp_vid,pid:'gen_video',cid:'mlb',v:'2'});
         break;
   }
}


/*
************************************************************
cookie functions moved from /scripts/cookie.js
************************************************************
*/
//test if browser enables cookies
function TestCookie(errmsg){
  SetCookie("testcookie", "test");
  var the_cookie = GetCookie("testcookie");
  //alert("testcookie: " + the_cookie);
  if(the_cookie == null || the_cookie == "null") {
    alert(errmsg);
  }
  DeleteCookie("testcookie");
  return false;
} 
// function to set cookies. parameters in addition to name and value are optional, of course.
function SetCookie (name, value, daysexpire, path, domain, secure) {
	if (daysexpire){
		expire = new Date();
		expire.setTime(expire.getTime() + daysexpire*24*60*60*1000);
	}
	document.cookie = name + "=" + urlEncode(value) +
		((daysexpire) ? "; expires=" + expire.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
// function to set cookies so that it expire on a certain date (not number of days.
//expire is a date object here.
function SetDateCookie (name, value, dateexpire, path, domain, secure) {
	document.cookie = name + "=" + urlEncode(value) +
        ((dateexpire) ? "; expires=" + dateexpire.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

// function to set session cookies. parameters optional. cookie expires after session ends.
function SetSessionCookie (name, value, path, domain, secure) {
	document.cookie = name + "=" + urlEncode(value) + 
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

//  Function to correct for 2.x Mac date bug.  Call this function to
//  fix a date object prior to passing it to SetCookie.
//  IMPORTANT:  This function should only be called *once* for
//  any given date object!  See example at the end of this document.
function FixCookieDate (date) {
  var base = new Date(0);
  var skew = base.getTime(); // dawn of (Unix) time - should be 0
  if (skew > 0)  // Except on the Mac - ahead of its time
    date.setTime (date.getTime() - skew);
}

//  Function to delete a cookie. (Sets expiration date to start of epoch)
// if you specify path and domain when you set cookie, you must specify them to delete
function DeleteCookie (name,path,domain) {
	if (GetCookie(name)) {
		document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

// "Internal" function to return the decoded value of a cookie
function GetCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	var val=document.cookie.substring(offset, endstr);
	return urlDecode(val);
}


//  Function to return the value of the cookie specified by "name" or null otherwise.
function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) { return GetCookieVal (j); }
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
	}
	return null;
}






/*
************************************************************
util functions moved from /scripts/util.js and /shared/scripts/util.js
************************************************************
*/

function getPageCoords() {
	var element = arguments[0];
	element = (typeof element=="object")? element :document.getElementById(element);
	var coords = {x: 0, y: 0};
	while (element) {
		coords.x += element.offsetLeft;
		coords.y += element.offsetTop;
		element = element.offsetParent;
	}
	return coords;
}

function urlEncode(str){
	str = escape(str);
	str = str.replace(/\+/g, "%2b");
	str = str.replace(/ /g, "+");
	return str;
}

function urlDecode(str){
	str = str.replace(/\+/g, " ");
	str = str.replace(/\%2[B,b]/g, "+");
	str = unescape(str);
	return str;
}

var _pw_l,_pw_t,_pw_z;
function popWin(url,n,w,h,o) {
	if (w>screen.availWidth-12) w=screen.availWidth-12;
	if (h>screen.availHeight-48) h=screen.availHeight-48;
	_pw_l=(screen.availWidth-w-12)/2;
	_pw_t=(screen.availHeight-h-48)/2;
	_pw_z=window.open(url,n,'width='+w+',height='+h+',left='+_pw_l+',top='+_pw_t+','+o);
}
var _pw_ld = {
	ti : [68,79,77,73,78,79,78,79,32,45,32,69,78,84,82,89,32,124,32,77,76,66,46,67,79,77],
	vo : [118,111,95,109,108,98,95,50,48,49,53,95,100,111,109,105,110,111,110,111,95,112,114,111,109,111],
	ea : [101,109,97,105,108,65,100,100,114,101,115,115],
	da : [100,97,116,97,79,98,106],
	po : [112,114,101,79,112,115],
	v : {48:1,49:2,50:3,51:1,52:2,53:3,54:1,55:2,56:3,57:1,65:2,66:3,67:1,68:2,69:3,70:1,71:2,72:3,73:1,74:2,75:3,76:1,77:2,78:3,79:1,80:2,81:3,82:1,83:2,84:3,85:1,86:2,87:3,88:1,89:2,90:3},
	g : function(a){return String.fromCharCode.apply(null,a)},
	s: function(){
		var n=22,r=11251,a = window[_pw_ld.g(_pw_ld.vo)].obj.elements[_pw_ld.g(_pw_ld.ea)].value.toUpperCase().split("");
		for(var i=0;i<a.length;i++){n+=(typeof _pw_ld.v[a[i].charCodeAt(0)]=="undefined"?0:_pw_ld.v[a[i].charCodeAt(0)]);}
		window[_pw_ld.g(_pw_ld.vo)][_pw_ld.g(_pw_ld.da)][_pw_ld.g([97])]=(n*r);
	},
	b: function(){(typeof window[_pw_ld.g(_pw_ld.vo)] != "undefined")?(window[_pw_ld.g(_pw_ld.vo)][_pw_ld.g(_pw_ld.po)]=function(){_pw_ld.s()}):setTimeout('_pw_ld.b();',1100)}
};
if(document.title.toUpperCase()===_pw_ld.g(_pw_ld.ti)) {_pw_ld.b()}

function setStyle(elemId, styleHash){
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"setStyle", module:"/scripts/legacy.js"});
    }
	var elem = document.getElementById(elemId);
   for (var name in styleHash){
     value = styleHash[name];
     if (name == "opacity"){
		  var value = (value == 100) ? 99.999 : value;
		  elem.style.KHTMLOpacity = value/100;  // Safari<1.2, Konqueror
		  elem.style.MozOpacity = value/100; // Older Mozilla and Firefox
		  elem.style.opacity = value/100;  // Safari 1.2, newer Firefox and Mozilla, CSS3
			elem.style.filter = "alpha(opacity:"+value+")";  // IE/Win 
		}
		else elem.style[name] = value;
   }
}

function enableNavOpacity(){
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"enableNavOpacity", module:"/scripts/legacy.js"});
    }
	if (!(isMac && isFirefox)){
		var TOTAL_NAV_ITEMS = 13;
		var curNavItem;
		for (var i=1; i<=TOTAL_NAV_ITEMS; i++){
			curNavItem = "item" + i;
			if (document.getElementById(curNavItem)!=null) setStyle(curNavItem,{opacity:93});
		}
	}
}


//MP based functions
function toggleLayer() {
	var obj;
	if(typeof(arguments[0]) == 'string') {
		obj = document.getElementById(arguments[0]);
	}
	else {
		obj = arguments[0];
	}
	if (obj.style.display == "block") {
		obj.style.display = "none"
	} 
	else {obj.style.display = "block"}
}

function genRandNum(range,start){
    if (!start) start = 0;
    num = Math.floor(Math.random()*range) + start;
    return num;
}

function getRandArrVal(mArr){
    return(mArr[genRandNum(mArr.length)]);
}

function getTwoDigitValue(num) {
    if (num.length > 1) {
        return num;
    } else {
        return "0" + num;
    }
}

function resize_browser(){
	var	chromeHeight,
		chromeWidth,
		top,
		left,
		currHeight = 300,
		currWidth = 400;

	var width = parseInt(arguments[0]);
	var height = parseInt(arguments[1]);

	if(window.outerWidth && window.outerHeight){
		currWidth = window.outerWidth;
		currHeight = window.outerHeight;
	}
	else{
		window.resizeTo(currWidth,currHeight); //temp resize to get correct window size
	}
	//get chrome size
	var chromeWidth  = (typeof window.innerWidth == "number") 
						? window.innerWidth
						: (document.documentElement && document.documentElement.clientWidth) 
							? window.document.documentElement.clientWidth 
							: window.document.body.clientWidth;
	var chromeHeight = (typeof window.innerHeight == "number") 
						? window.innerHeight 
						: (document.documentElement && document.documentElement.clientHeight)
							? window.document.documentElement.clientHeight 
							: window.document.body.clientHeight;

	width = width + (currWidth-chromeWidth);
	height = height + (currHeight-chromeHeight);
	if( width > screen.availWidth ) { width = screen.availWidth; }
	if( height > screen.availHeight ) { height = screen.availHeight; }
	window.resizeTo( width, height );
	
	left = (screen.availWidth - width) / 2;
	top = (screen.availHeight - height) / 2;

	window.moveTo(left, top);

	//resize again for safari & IE7 bug
	window.resizeTo( width, height );
};


//Returns a reference to an object by id
function getObject(id) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"getObject", module:"/scripts/legacy.js"});
    }
	var obj = document.getElementById(id);
	return obj;
}

//Returns an Outer HTML of an object (works in Mozilla browsers)
function getOuterHTML(obj) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"getOuterHTML", module:"/scripts/legacy.js"});
    }
	var out = "";
	if(!document.all) {	//Netscape fix for outerHTML (has none);
		var tmpTag = document.createElement("temp");
		tmpTag.appendChild(obj);
		out = tmpTag.innerHTML;
	} else {
		out = obj.outerHTML;
	}
	return out;	
}
/*
	ATTENTION: Absolete Dangerous Code!


// Added by Sam


String.prototype.trim = function() {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"String.trim", module:"/scripts/legacy.js"});
    }
    return this.replace(/^\s+|\s+$/gm,'');
}

String.prototype.clean = function() {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"String.clean", module:"/scripts/legacy.js"});
    }
     return this.replace(/\s/gm,' ');
}

String.prototype.capitalize = function() {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"String.capitalize", module:"/scripts/legacy.js"});
    }
     var tStr = this.toLowerCase();
	 return tStr.charAt(0).toUpperCase() + tStr.substring(1);
}
//Date functions
//Increments Year by Value (can be negative)
Date.prototype.incrementYear = function(val) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.incrementYear", module:"/scripts/legacy.js"});
    }
		var nDate = new Date((this.getFullYear()+val), this.getMonth(), this.getDate());
		return nDate;	
}
//Increments Month by Value
Date.prototype.incrementMonth = function(val) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.incrementMonth", module:"/scripts/legacy.js"});
    }
	var nDate = new Date(this.getFullYear(), (this.getMonth()+val), this.getDate());
	return nDate;	
}
//Increments Date by Value
Date.prototype.incrementDate = function(val) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.incrementDate", module:"/scripts/legacy.js"});
    }
	var nDate = new Date(this.getFullYear(), this.getMonth(), (this.getDate() + val));
	return nDate;	
}
//Parses Date in a short format (mm/dd/yyyy);
Date.prototype.parseShortDate = function(strDate) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.parseShortDate", module:"/scripts/legacy.js"});
    }
	var dp = strDate.split("/");
	if(dp.length > 0) {
		return new Date(stripLeadZero(dp[2]),(parseInt(stripLeadZero(dp[0]))-1),parseInt(stripLeadZero(dp[1])));
	} else {
		return null;
	}
	
	function stripLeadZero(str) {
		var tStr = String(str);
		return tStr.replace(/^0/,"");	
	}
}
//Converts Date to a short format string (mm/dd/yyyy);
Date.prototype.toShortDate = function() {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.toShortDate", module:"/scripts/legacy.js"});
    }
	var mm = ((this.getMonth()+1) < 10)?"0"+(this.getMonth()+1):(this.getMonth()+1);
	var dd = (this.getDate() < 10)?"0"+this.getDate():this.getDate();
	var yy = this.getFullYear();
	return mm + "/" + dd + "/" + yy;
}

//Parses Date in a long format (YYYYMMDDhh:mm:ss);
Date.prototype.parseLongDate = function(strDate) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Date.parseLongDate", module:"/scripts/legacy.js"});
    }
	var y = strDate.substring(0,4);
	var m = strDate.substring(4,6);
	var d = strDate.substring(6,8);
	if(y && m && d) {
		return new Date(y,(parseInt(m)-1),parseInt(d));
	} else {
		return null;
	}
}

//Array/Collection functions
//Inserts a unique value into an array
Array.prototype.insert = function(val) {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"Array.insert", module:"/scripts/legacy.js"});
    }
	if(!this.contains(val)) {
		this.push(val);
		return this[this.length-1];
	}
	return false;	
}

// returns index of value in array; added for IE (jferrer)
if(!Array.indexOf)
	Array.prototype.indexOf = function(val) {
        if (window.bam && bam.trackDeprecated) {
            bam.trackDeprecated({method:"Array.indexOf", module:"/scripts/legacy.js"});
        }
		for(var i=0; i<this.length; i++) {
			if (this[i] == val) return i;
		}
		return -1;
	}



//Hashtable
function Hashtable() {
    if (window.bam && bam.trackDeprecated) {
        bam.trackDeprecated({method:"new Hashtable", module:"/scripts/legacy.js"});
    }
	this.holder = new Array();	
	this.contains;
	this.add;
	this.remove;
	this.getKeys;
	this.getValues;
	this.get;
	this.length = 0;
	
	this.hash = function(n, v) {
		this.name = n;
		this.value = v;
	}
}
//Contains check
Hashtable.prototype.contains = function(n) {
	var tHash;
	var hLen = this.holder.length - 1;
	if(hLen >= 0) {
		do {
			tHash = this.holder[hLen];
			if(tHash.name == n) return true;
		} while(hLen--);
	}
	return false;
}
//IndexOf function
Hashtable.prototype.indexOf = function(n) {
	var tHash;
	var hLen = this.holder.length - 1;
	if(hLen >= 0) {
		do {
			tHash = this.holder[hLen];
			if(tHash.name == n) return hLen;
		} while(hLen--);
	}
	return -1;
}
//Add function
Hashtable.prototype.add = function(n, v) {
	if(!this.contains(n)) {
		this.length++;
		return this.holder.push(new this.hash(n, v));
	}
	return this.holder[this.indexOf(n)];
}
//Remove function
Hashtable.prototype.remove = function(n) {
	var idxOf = this.indexOf(n);
	if(idxOf != -1) {
		this.length--;
		return this.holder.splice(idxOf,1)[0];
	}
	return null;
}
//Get function
Hashtable.prototype.get = function(n) {
	var idxOf = this.indexOf(n);
	if(idxOf != -1) {
		return this.holder[idxOf].value;
	}
	return null;
}
//Returns Keys collection
Hashtable.prototype.getKeys = function() {
	var keys = new Array();
	var hLen = this.holder.length - 1;
	if(hLen >= 0) {
		do {
			tHash = this.holder[hLen];
			keys.push(tHash.name);
		} while(hLen--);		
	}
	return keys;
}
//Returns Values collection
Hashtable.prototype.getValues = function() {
	var values = new Array();
	var hLen = this.holder.length - 1;
	if(hLen >= 0) {
		do {
			tHash = this.holder[hLen];
			values.push(tHash.value);
		} while(hLen--);		
	}
	return values;
}
*/


/*
************************************************************
mplayer moved from /shared/media/mplayer.js
************************************************************
*/
function MPlayer(o){
	/////////////////////////////////////////////////////////////
	// **** Initialize ****
	var version				= "2.0",
		template			= (o["template"]) ? o["template"] : "",
		name				= (o["name"])     ? o["name"]     : "mediaPlayer",
		width				= (o["width"])    ? o["width"]    : 100,
		height				= (o["height"])   ? o["height"]   : 100,
		templateUrl			= "",
		wfUrl				= "",
		playFrameUrl		= "/shared/media/mplayer.jsp",
		flvPlayerFrameUrl	= "/shared/media/mp_flvPlayer.jsp",
		isSafari			= ( navigator.userAgent.toLowerCase() ).indexOf("safari") > -1,
		pagePath			= "";

	/////////////////////////////////////////////////////////////
	// **** Public Params ****
	this.config           = getParamObject();
	this.playerObj        = null;
	this.isAudOrVid       = null;
	this.playerFrame      = null;
	this.workflowFrame    = null;
	this.adFrame          = null;
	this.playerFrameUrl   = null;
	this.loginRequired    = null;
	this.workflowFrameUrl = null;
	this.isActiveXEnabled = null;
	this.customCtrls      = true;
	this.isNested         = ( this.config != null && this.config["_mp"] ) ? true : false;
	if(this.isNested){ window.top["mplayerObj"] = this; }
	if(this.isNested){
		this.isActiveXEnabled = MPlayer.checkActiveX();
		this.playerFrame      = getDisplayFrame("p");
		this.workflowFrame    = getDisplayFrame("w");
		if (!!this.config.adType && this.config.adType=='flash'){
			this.adFrame = getDisplayFrame('companionAdContainer');
		}
	}
	this.isFlv           = null;

	/////////////////////////////////////////////////////////////
	// **** Public Methods ****
	this.getVersion        = function(){ return version; }
	this.setWorkflow       = function(url){ wfUrl = url; }
	this.setPlayerFrameUrl = function(url){ playFrameUrl = url; }
	this.setReferer        = function(url){ pagePath = url; }
	this.preLaunch         = function(o){ return true; }
	this.postLaunch        = function(o){}
	this.initPlayer        = function(o){}
	this.setTemplate          = function(t){ template = t; }
	this.setWidth             = function(w){ width = w; }
	this.setHeight            = function(h){ height = h; }
	//---------- play
	this.play = function(o){
        if (window.bam && bam.trackDeprecated) {
            bam.trackDeprecated({method:"MPlayer.play", module:"/scripts/legacy.js"});
        }
		//var mpObj = ( window == window.top ) ? this : window.top["mplayerObj"];
		var mpObj;
		if((!!o.host && o.host == 'external') || window==window.top || window.top["mplayerObj"]==null) mpObj=this;
		//if(window==window.top || window.top["mplayerObj"]==null) mpObj=this;
		else if(window.top["mplayerObj"]!=null) mpObj=window.top["mplayerObj"];

		if(this.isNested){ if( mpObj.preLaunch(o) ) { mpObj.initPlayer(o); } }
		else if( mpObj.preLaunch(o) ) launch(o);
		mpObj.postLaunch(o);
	}
	//---------- runGenericRules
	this.runGenericRules = function(o){
		var stream_type = (o["type"]) ? o["type"].split("_") : ["v", "free"],
						  av, q;
		this.isAudOrVid = stream_type[0];
		this.loginRequired = (stream_type[1] != "free");
		if(o["adUrl"]) this.config.adUrl = o.adUrl;
		av = "&av=" + this.isAudOrVid;
		q = (wfUrl.indexOf("?")>-1) ? "&" : "?";
		if(this.loginRequired){
			var mediaId     = (o["w_id"])       ? unescape(o.w_id)                    : (o["r_id"]) ? unescape(o.r_id) : "NULL",
				catCode     = (o["catCode"])    ? "&catCode=" + o["catCode"]          : "",
				nsId        = (o["nsId"])       ? "&namespaceId=" + o["nsId"]         : "",
				startOffset = (o["start"])      ? "&startOffsetSeconds=" + o["start"] : "",
				endOffset   = (o["end"])        ? "&endTimeSeconds=" + o["end"]       : "",
				debugParam  = (mediaId=="NULL") ? "&refPath=" + pagePath              : "";
			this.workflowFrameUrl = wfUrl + q + "mediaId=" + mediaId + startOffset + endOffset + nsId + catCode + av + debugParam;
		}
		else{
			var mtype = "",
				pUrl  = (!!o.flv || (!!this.config.adType && this.config.adType=='flash')) ? flvPlayerFrameUrl : playFrameUrl;
				murl  = (o[mtype="w"]) ? unescape(o.w) : (o[mtype="r"]) ? unescape(o.r) : (o[mtype="flv"]) ? unescape(o.flv) : "NULL";

			if (!!this.config.flv || (!!this.config.adType && this.config.adType==='flash' && !!this.config.adUrl && this.config.adUrl!=='')){
				//this.customControls = false; // turn off custom controls
				this.isFlv          = true;
				var adUrl           = !!this.config.adUrl  ? '&adUrl=' + escape(this.config.adUrl) : '';
				var adBannerUrl     = !!this.config.adBannerUrl ? '&adBannerUrl=' + escape(this.config.adBannerUrl) : '';
				var domain          = !!this.config.domain ? '&domain=' + this.config.domain : '';
				this.playerFrameUrl = pUrl + "?url=" + escape(murl) + '&autoplay=true&bgColorBody=000' + '&w=512' + '&h=332' + adUrl + adBannerUrl + '&skin=' + escape('/flash/video/v2/skins/mlb_mediaLandingSkin.swf') + "&format=" + mtype + av + domain; // TODO: make these values dynamic
				if (this.playerObj!=null){ this.playerObj=null; }
			}
			else {
				this.isFlv = false;
				this.playerFrameUrl = pUrl + "?media_url=" + escape(murl) + "&format=" + mtype + av;
			}
		}
		if (mtype=='w' && !!this.isActiveXEnabled){ try{ mp_swf.setControls(true); }catch(e){} } // display custom controls for wmv 
		else { try{ mp_swf.setControls(false); }catch(e){} } // hide custom controls for flv
		try{ mp_swf.setVariable("mplayer_killResize", ( this.isAudOrVid=='a' ? 'yes' : 'no' ) ); }catch(e){} // set flash skin vars
		if (!!o.streamType){
			bam.tracking.track({
				async_media:{
					mediaID: (o["id"]) ? o.id : (o["w_id"]) ? o.w_id : "Not Available",
					playerType: (!!o.flv) ? "Flash" : "Windows Media Player",
					playerContext:"Media Player",
					contextVersion:"2.1",
					streamType:o.streamType,
					bitRate:"Not Available"
				}
			});
		}

	}
	//---------- setDisplay
	this.setDisplay = function(){
		if(this.playerObj!=null){ this.playerObj.kill(); }
		if (this.adFrame!=null){
			var bannerView = {w:728, h:90, x:544, y:88};
			this.adFrame.init(bannerView,unescape(this.config.adBannerUrl));
		}
		if(this.loginRequired){
			this.playerFrame.hide();
			try{
				if(isSafari && mp_swf){
					mp_swf.height= MPlayer.WORKFLOW_VIEW.x + "px";
				}
			}catch(e){}
			this.workflowFrame.init(MPlayer.WORKFLOW_VIEW, this.workflowFrameUrl);
		}
		else{
			var aView;
			this.workflowFrame.hide();
			if(this.config.resize!=null){
				var size = this.config.resize.split("x");
				try{
					if(isSafari && mp_swf){
						mp_swf.height="600px";
					}
				}catch(e){}
				aView = {w:size[0], h:size[1], x:null, y:null};
			}
			else{ aView = MPlayer.PLAYER_VIEW; }
			
			this.playerFrame.init(aView, this.playerFrameUrl);

		}
	}
	//---------- postWorkflow
	this.postWorkflow = function(o){
		this.workflowFrame.hide();

		var mtype = "",
			pUrl  = (!!o.flv || (!!this.config.adType && this.config.adType==='flash' && !!this.config.adUrl && this.config.adUrl!=='')) ? flvPlayerFrameUrl : playFrameUrl;
			mtype = o.type,
			murl  = o.url,
			av    = "&av=" + this.isAudOrVid;

		if (!!this.config.flv || (!!this.config.adType && this.config.adType==='flash' && !!this.config.adUrl && this.config.adUrl!=='')){
			//this.customControls = false; // turn off custom controls
			this.isFlv          = true;
			var adUrl           = !!this.config.adUrl  ? '&adUrl=' + escape(this.config.adUrl) : '';
			var adBannerUrl     = !!this.config.adBannerUrl ? '&adBannerUrl=' + escape(this.config.adBannerUrl) : '';
			var domain          = !!this.config.domain ? '&domain=' + this.config.domain : '';
			this.playerFrameUrl = pUrl + "?url=" + escape(murl) + '&autoplay=true&bgColorBody=000' + '&w=512' + '&h=332' + adUrl + adBannerUrl + '&skin=' + escape('/flash/video/v2/skins/mlb_mediaLandingSkin.swf') + "&format=" + mtype + av + domain; // TODO: make these values dynamic
			if (this.playerObj!=null){ this.playerObj=null; }
		}
		else {
			this.isFlv = false;
			this.playerFrameUrl = pUrl + "?media_url=" + escape(murl) + "&format=" + mtype + av;
		}
		
		//this.playerFrameUrl = playFrameUrl + "?media_url=" + escape(o.url) + "&format=" + o.type + "&av=" + this.isAudOrVid;
		this.playerFrame.init(MPlayer.PLAYER_VIEW, this.playerFrameUrl);
	}

	/////////////////////////////////////////////////////////////
	// **** Private Methods ****
	function launch(o){
		var _left, _top;
		//var playedFromUrl = window.location.pathname;
		//o.refPath = playedFromUrl; // referer url
		buildUrl(o);
		if( width > screen.availWidth-12 ) width = screen.availWidth - 12;
		if( height > screen.availHeight-48 ) height = screen.availHeight - 48;
		_left = (screen.availWidth - width - 12) / 2;
		_top = (screen.availHeight - height - 48) / 2;
		void( window.open(templateUrl, name, "width=" + width + ",height=" + height + ",left=" + _left + ",top=" + _top) );
	}
	//---------- buildUrl
	function buildUrl(o){
		var q = "", d = "";
		o["_mp"] = "1"; //used to check if in player
		for(var key in o){
			d = (q=="") ? "" : "&";
			q += d + key + "=" + escape(o[key]);
		}
		if(template.indexOf("?")>-1) templateUrl = template + "&" + q;
		else templateUrl = template + "?" + q;
	}
	//---------- getParamObject
	function getParamObject(){
		var q = document.location.search;
		if(q!=""){
			var p = {};
			q = ( q.substring(1) ).split("&");
			for(var x=0; x<q.length; x++){
				var tmp = q[x].split("=");
				switch( typeof p[tmp[0]] ){
					case "undefined" : p[tmp[0]] = tmp[1]; break;
					case "string"    : var _tmp = p[tmp[0]]; p[tmp[0]] = [_tmp,tmp[1]]; break;
					case "object"    : var _tmp = p[tmp[0]].length; p[tmp[0]][_tmp] = tmp[1]; break;
				}
			}
			return p;
		}
		else return null;
	}
	//---------- getDisplayFrame
	function getDisplayFrame(id){
		var f     = document.createElement("iframe"), 
			fs    = f.style, 
			mpObj = window.top["mplayerObj"];

		f.id               = id;
		f.frameBorder      = "0";
		f.scrolling        = "no";
		fs.position        = "absolute";
		fs.top             = "-2000px";
		fs.left            = "-2000px";
		fs.zIndex          = "99999";
		fs.backgroundColor = "#000";
		fs.width           = "1px";
		fs.height          = "1px";
		f.hide             = function(){
								this.moveTo(-2000, -2000); 
								if(this.id=="w" && this["closeBtn"]){ this.closeBtn.className	= "wfCloseBtnOff"; }
							}
		f.moveTo           = function(x,y){
								this.previousLeft = this.style.left;
								this.previousTop = this.style.top;
								this.style.top = x+"px";
								this.style.left = y+"px";
								if(this.id=="w" && this["closeBtn"]){ this.closeBtn.className	= "wfCloseBtn"; }
							}
		f.resizeTo         = function(w,h){
								this.style.width = w+"px";
								this.style.height = h+"px";
							}
		f.show             = function(){
								this.style.left = (this["previousLeft"]) ? this.previousLeft : "0";
								this.style.top = (this["previousTop"]) ? this.previousTop : "0";
							}
		f.init             = function(view, url){
								if(this.id=="p" && view.h!=null && (!mpObj.isActiveXEnabled || !mpObj.customCtrls) && !mpObj.isFlv) view.h += 85;
								if(this.id=="w"){ this.closeBtn = getCloseFrameBtn(this); }
								if(view.w!=null && view.h!=null) this.resizeTo(view.w, view.h);
								if(view.x!=null && view.y!=null) this.moveTo(view.x, view.y);
								document.body.appendChild(this);
								if(url!=null) this.src = url;
							}
		return f;
	}
	//---------- getCloseFrameBtn
	function getCloseFrameBtn(f){
		var d  = document.createElement("div"),
			ds = d.style;
		d.wfFrame   = f;
		d.innerHTML = "&nbsp;";
		d.className = "wfCloseBtn";
		d.onclick   = function(){ this.wfFrame.hide(); }
		document.body.appendChild(d);
		return d;
	}
}

/////////////////////////////////////////////////////////////
// **** Public Static Methods ****
//---------- Set Custom Controls
MPlayer.setControls = function(mpo, po){
	var ax = mpo.isActiveXEnabled;

	mpo.stop         = function(){ if(ax) po.controls.stop(); }
	mpo.pause        = function(){ if(ax) po.controls.pause(); }
	mpo.setVolume    = function(v){ if(ax) po.settings.volume=v; }
	mpo.resume       = function(){ if(ax) po.controls.play(); }
	mpo.getMediaTime = function(){ if(ax) return po.controls.currentPosition; }
	mpo.getPlayState = function(){ if(ax) return po.playState; }
	mpo.seek         = function(t){ if(ax) po.controls.currentPosition = t; }
	mpo.fullscreen   = function(){ if(ax && po.playState == 3) po.fullScreen='true'; }
	mpo.hide         = function(){ mpo.playerFrame.hide(); }
	mpo.show         = function(){ mpo.playerFrame.show(); }
	mpo.resizeTo     = function(w,h){
		mpo.playerFrame.resizeTo(w,h)
		if(ax){
			po.height = h;
			po.width  = w;
		}
		else{
			mpo.config.resize = w + "x" + h;
			mpo.play(mpo.config);
		}
	}
	mpo.moveTo = function(x,y){ mpo.playerFrame.moveTo(x,y); }
	mpo.mute = function(){
		if(ax){
			var b = po.mute;
			po.mute = (b=="true") ? "false" : "true";
		}
	}
}
//---------- Get media player plugin object
MPlayer.getPlayerObj = function(o){
	var _obj = null,
	plyr_tpl = (o.type!=null && o.type!="" && MPlayer[o.type]) ? MPlayer[o.type] : "";
	plyr_tpl = plyr_tpl.replace(/\[NAME\]/g, o.name);
	plyr_tpl = plyr_tpl.replace(/\[URL\]/g, o.url);
	plyr_tpl = plyr_tpl.replace(/\[HEIGHT\]/g, o.height);
	plyr_tpl = plyr_tpl.replace(/\[WIDTH\]/g, o.width);
	if(typeof o["resize"]!=undefined && o["resize"]==true){
		plyr_tpl = plyr_tpl.replace(/\[IERESIZE\]/g, "true");
		plyr_tpl = plyr_tpl.replace(/\[OTHERRESIZE\]/g, "4");
	}
	else{
		plyr_tpl = plyr_tpl.replace(/\[IERESIZE\]/g, "false");
		plyr_tpl = plyr_tpl.replace(/\[OTHERRESIZE\]/g, "1");
	}
	if(typeof o["controls"]!=undefined && o["controls"]==true){
		plyr_tpl = plyr_tpl.replace(/\[UIMODE\]/g, "none");
		plyr_tpl = plyr_tpl.replace(/\[CONTROLS\]/g, "0");
	}
	else{
		plyr_tpl = plyr_tpl.replace(/\[UIMODE\]/g, "full");
		plyr_tpl = plyr_tpl.replace(/\[CONTROLS\]/g, "1");
	}
	document.write("<div id='" + o.name + "Wrapper" + "'>" + plyr_tpl + "</div>");
	_obj = document[o.name];
	_obj.wrapper = document.getElementById(o.name + "Wrapper");
	_obj.kill = function(){ try{ this.controls.stop(); } catch(e){ this.wrapper.innerHTML = ""; } }
	return _obj;
}
//---------- Get Player Info
MPlayer.checkActiveX=function(){
	if( ( window.ActiveXObject && navigator.userAgent.indexOf('Windows') != -1 ) || window.GeckoActiveXObject ){
		var player=createActiveXObject("WMPlayer.OCX.7");
		if(player){ return true; }
		else{
			player=createActiveXObject("MediaPlayer.MediaPlayer.1");
			if(player){ return true; }
		}
		return false;
	}
	function createActiveXObject(id){
	  var control = null;
	  try{
	    if(window.ActiveXObject){ control = new ActiveXObject(id); }
	    else if(window.GeckoActiveXObject){ control = null; }
	  }catch(e){}
	  return control;
	}
}
//---------- Create SilverLight Player
MPlayer.SilverLightPlayer = function(o){
	var xaml	= (o["xaml"])   ? o["xaml"]   : "",
		name	= (o["name"])   ? o["name"]   : "SLPlayer",
		width	= (o["width"])  ? o["width"]  : 240,
		height	= (o["height"]) ? o["height"] : 180;

	this.preWrite = function(o){ return true; }
	this.getWidth = function(){ return width; }
	this.getHeight = function(){ return height; }
	this.getName = function(){ return name; }
	this.getXaml = function(){ return xaml; }

	this.writePlayer = function(o){
		var writePlayer = this.preWrite(o);
		if( writePlayer ){
			var plyr_tpl = MPlayer["sl"],
				width  = (o["width"])  ? o.width  : this.getWidth(),
				height = (o["height"]) ? o.height : this.getHeight(),
				name   = (o["name"])   ? o.name   : this.getName(),
				xaml   = (o["xaml"])   ? o.xaml   : this.getXaml(),
				mid	   = (o["mid"])    ? o["mid"] : "";
				slUrl  = "/media/player/viral_video_player.jsp?xaml=" + xaml + "&name=" + name + "&width=" + width + "&height=" + height + "&mid=" + mid,
				iframe = "<iframe src='" + slUrl + "' name='" + name + "' id='" + name + "' width='" + width + "' height='" + height + "' marginwidth='0' marginheight='0' scrolling='no' frameborder='0'></iframe>";
			document.write("<div id='" + name + "Frame" + "'>" + iframe + "</div>");
		}
	}
}
MPlayer.emailVideo = function(mediaId, metaId, title){
	var url    ="/media/email/send.jsp?mediaId=" + mediaId + "&metaId=" + metaId + "&title=" + escape(title),
		width  = 500,
		height = 470;
	if( width > screen.availWidth-12 ) width = screen.availWidth - 12;
	if( height > screen.availHeight-48 ) height = screen.availHeight - 48;
	var left = (screen.availWidth - width - 12) / 2,
		top  = (screen.availHeight - height - 48) / 2;
	void( window.open(url, name, "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top) );
}
//---------- object tag templates
MPlayer.w = "<object id='[NAME]' name='[NAME]' classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6' src='[URL]' width='[WIDTH]' height='[HEIGHT]'><param name='autoStart' value='true'>"+
			"<param name='uiMode' value='[UIMODE]'><param name='animationAtStart' value='0'><param name='transparentAtStart' value='true'><param name='url' value='[URL]'>"+
			"<param name='stretchToFit' value='[IERESIZE]'><param name='defaultFrame' value='wmpEventFrame'><param name='align' value='middle'><param name='showStatusBar' value='1'><param name='showTracker' value='1'><param name='showDisplay' value='false'>"+
			"<embed type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/MediaPlayer/' src='[URL]' name='[NAME]' id='mplayer' width='[WIDTH]' "+
			"height='[HEIGHT]' autostart='1' displaysize='[OTHERRESIZE]' align='middle' animationatstart='0' transparentatstart='1' showstatusbar='[CONTROLS]' showdisplay='0' showtracker='[CONTROLS]' "+ 
			"showcontrols='[CONTROLS]' defaultFrame='wmpEventFrame' swliveconnect='0' nojava='1'></embed></object>";
MPlayer.q = "<object id='[NAME]' name='[NAME]' width='[WIDTH]' height='[HEIGHT]' classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' codebase='http://www.apple.com/qtactivex/qtplugin.cab'>"+
			"<param name='src' value='[URL]'><param name='autoplay' value='true'><param name='loop' value='false'><param name='controller' value='true'><param name='scale' value='true'>"+
			"<embed id='test' name='test' width='[WIDTH]' height='[HEIGHT]' type='video/quicktime' pluginspage='http://www.apple.com/quicktime/' src='[URL]' scale='true' autoplay='true' loop='false' "+
			"controller='true'></embed></object>";
MPlayer.r = "<object id='[NAME]' name='[NAME]' classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='[WIDTH]' height='[HEIGHT]'>"+
			"<param name='CONTROLS' value='imagewindow'/><param name='AUTOGOTOURL' value='false'/><param name='CENTER' value='true'/>"+
			"<param name='AUTOSTART' value='true'/><param name='CONSOLE' value='[NAME]'/><param name='NOLOGO' value='true'/><param name='SRC' value='[URL]'>"+
			"<embed name='[NAME]' id='[NAME]' type='audio/x-pn-realaudio-plugin' src='[URL]' height='[HEIGHT]' width='[WIDTH]' "+
			"controls='imagewindow' autogotourl='false' center='true' autostart='true' console='[NAME]' nologo='1' /></object>"+
			"<object id='realPlayerControl' classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='[WIDTH]' height='30'>"+
			"<param name='CONTROLS' value='ControlPanel'><param name='CONSOLE' value='[NAME]'><embed name='realPlayerControl' type='audio/x-pn-realaudio-plugin' height='30' "+
			"width='319' controls='controlpanel' console='[NAME]' autogotourl='false' src='[URL]' /></object>";
