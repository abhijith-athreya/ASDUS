
//JS
var Browser = {
	a : navigator.userAgent.toLowerCase()
}
Browser = {
	ie : /*@cc_on true || @*/ false,
	ie6 : Browser.a.indexOf('msie 6') != -1,
	ie7 : Browser.a.indexOf('msie 7') != -1,
	ie8 : Browser.a.indexOf('msie 8') != -1,
	opera : !!window.opera,
	safari : Browser.a.indexOf('safari') != -1,
	safari3 : Browser.a.indexOf('applewebkit/5') != -1,
	mac : Browser.a.indexOf('mac') != -1
}
function $(e) {
	if(typeof e == 'string')
    	return document.getElementById(e);
	return e;
}
function createElement(name, attrs, doc, xmlns) {
	var doc = doc ? doc : document;
	var elm;
	if(doc.createElementNS)
		elm = doc.createElementNS(xmlns ? xmlns : "http://www.w3.org/1999/xhtml", name);
	else
		elm = doc.createElement(name);
	if(attrs)
		for(attr in attrs)
			elm.setAttribute(attr, attrs[attr]);
	return elm;
}
function setDisplay(e, display) {
	$(e).style.display = display;
}
function hide(e) {
	setDisplay(e, 'none');
}
function show(e) {
	setDisplay(e, '');
}
function visible(e) {
	return $(e).style.display != 'none';
}
function toggle(e) {
	(visible(e) ? hide : show)(e);
}
function visibleInverse(e) {
	return $(e).style.display != '';
}
function toggleInverse(e, display) {
	setDisplay(e, visibleInverse(e) ? '' : display);
}
function getChildElementsByTagName(e, tagName) {
	var nodes = [];
	for(var i = 0; i < e.childNodes.length; i++)
		if(e.childNodes[i].nodeName.toLowerCase() == tagName)
			nodes.push(e.childNodes[i]);
	return nodes;
}
function removeChildren(e) {
	while(e.firstChild)
		e.removeChild(e.firstChild);
}
function addEvent(obj, evType, fn) {
	if(obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if(obj.attachEvent)
		return obj.attachEvent("on" + evType, fn);
	return false;
}

function getFormQueryString(form) {
	var pairs = [];
	var inputs = form.getElementsByTagName('input');
	var textareas = form.getElementsByTagName('textarea');
	var selects = form.getElementsByTagName('select');

	for(var i = 0, input; input = inputs[i]; i++)
		pairs.push(input.name + '=' + encodeURI(input.value));

	for(var i = 0, input; input = textareas[i]; i++)
		pairs.push(input.name + '=' + encodeURI(input.value));

	for(var i = 0, input; input = selects[i]; i++)
		for(var j = 0, option; option = input.options[j]; j++)
			if(option.selected)
				pairs.push(input.name + '=' + encodeURI(option.value));

	return pairs.join('&');
}

function getURLParams() {
	var map = {};
	var entries = document.location.search.substr(1).split('&');
	for(var i = 0; i < entries.length; i++) {
		var entry = entries[i].split('=', 2);
		if(!map[entry[0]])
			map[entry[0]] = [];
		map[entry[0]].push(entry.length == 2 ? decodeURIComponent(entry[1]) : null);
	}
	return map;
}

function createURLSearchString(map) {
	var search = '';
	for(field in map)
		if(!Object.prototype[field]) {
			var array = map[field];
			for(var i = 0; i < array.length; i++) {
				if(search != '')
					search += '&';
				search += field;
				if(array[i] != null)
					search += '=' + array[i];
			}
		}
	if(search != '')
		search = '?' + search;
	return search;
}

function setURLParam(parameter, value) {
	var url = document.location.protocol + '//' + document.location.host + document.location.pathname;
	var params = getURLParams();
	params[parameter] = [value];
	url += createURLSearchString(params);
	url += document.location.hash;
	return url;
}

function addStylesheet(href, media) {
	document.getElementsByTagName("head")[0].appendChild(createElement('link', {
		'rel': 'stylesheet',
		'type': 'text/css',
		'media': media ? media : 'screen, projection',
		'href': href
	}));
}

function createObject(type, data, width, height, params, doc, fallback) {
	var obj = createElement('object', {
		'type': type,
		'data': data,
		'width': width,
		'height': height
	}, doc);
	if(params)
		for(var i = 0, pair; pair = params[i]; i++)
			obj.appendChild(createElement("param", {
				'name': pair[0],
				'value': pair[1]
			}, doc));
	if(fallback)
		obj.appendChild(fallback);
	return obj;
}

function setFlash(target, data, width, height, params, fallbackMsg) { // avoids IE Eolas patent UI workarounds
	// IE ignores objects created with DOM. Serialize & use innerHTML
	var doc = Browser.ie ? new ActiveXObject('Microsoft.XMLDOM') : document;
	var obj = createObject('application/x-shockwave-flash', data, width, height, params, doc,
			doc.createTextNode(fallbackMsg));
	var targetNode = $(target);
	if(Browser.ie)
		targetNode.innerHTML = obj.xml;
	else {
		removeChildren(targetNode);
		targetNode.appendChild(obj);
	}
}

function selectLanguage(lang) {
	window.location = HTTP.setURLParam('locale', lang);
}

var HTTP = {
	URL_SPACE_REGEXP : /%20/g,
	getURLParams : function(url) {
		var map = {};
		if(url) {
			var queryStart = url.indexOf('?');
			var hashStart = url.indexOf('#');
			if(queryStart != -1) {
				if(hashStart != -1)
					url = url.substring(queryStart + 1, hashStart);
				else
					url = url.substr(queryStart + 1);
			} else
				return map;
		} else
			url = window.location.search.substr(1);
		var entries = url.split('&');
		for(var i = 0; i < entries.length; i++) {
			var entry = entries[i].split('=', 2);
			if(!map[entry[0]])
				map[entry[0]] = [];
			map[entry[0]].push(entry.length == 2 ? decodeURIComponent(entry[1]) : null);
		}
		return map;
	},
	setURLParam : function(parameter, value, url) {
		var hash = '';
		var path;
		if(url) {
			var queryStart = url.indexOf('?');
			var hashStart = url.indexOf('#');
			if(queryStart != -1)
				path = url.substring(0, queryStart);
			else if(hashStart != -1)
				path = url.substring(0, hashStart);
			else
				path = url;
			if(hashStart != -1)
				hash = url.substr(hashStart);
		} else {
			url = false;
			path = window.location.pathname;
			hash = window.location.hash;
		}
		var params = HTTP.getURLParams(url);
		params[parameter] = [value];
		return path + HTTP._createQueryString(params) + hash;
	},
	encodeForm : function(form, post) {
		var pairs = [];
		var inputs = form.getElementsByTagName('input');
		var textareas = form.getElementsByTagName('textarea');
		var selects = form.getElementsByTagName('select');

		for(var i = 0, input; input = inputs[i]; i++)
			if(!input.disabled && input.name && ((input.type != 'radio' && input.type != 'checkbox') || input.checked))
				pairs.push(HTTP._formUrlEncode(input.name, post) + '=' + HTTP._formUrlEncode(input.value, post));

		for(var i = 0, input; input = textareas[i]; i++)
			if(!input.disabled && input.name)
				pairs.push(HTTP._formUrlEncode(input.name, post) + '=' + HTTP._formUrlEncode(input.value, post));

		for(var i = 0, input; input = selects[i]; i++)
			if(!input.disabled && input.name)
				for(var j = 0, option; option = input.options[j]; j++)
					if(option.selected)
						pairs.push(HTTP._formUrlEncode(input.name, post) + '=' + HTTP._formUrlEncode(option.value, post));

		return pairs.join('&');
	},
	_createQueryString : function(map) {
		var search = '';
		for(field in map)
			if(!Object.prototype[field]) {
				var array = map[field];
				for(var i = 0; i < array.length; i++) {
					if(search != '')
						search += '&';
					search += field;
					if(array[i] != null)
						search += '=' + array[i];
				}
			}
		if(search != '')
			search = '?' + search;
		return search;
	},
	_formUrlEncode : function(val, post) {
		if(post)
			return encodeURIComponent(val).replace(HTTP.URL_SPACE_REGEXP, '+');
		return encodeURIComponent(val);
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


/* AGE GATE */
//	if(containsAgeGate) AgeGate.addListenerId(id);

function loadScript(src, id) {
	var head = document.getElementsByTagName('head')[0];
	var script = createElement('script', {
		'type': 'text/javascript',
		'src': src
	});
	if(id) {
		var old = document.getElementById(id);
		if(old)
			old.parentNode.removeChild(old);
		script.id = id;
	}
	head.appendChild(script);
}

function jsonCallback(result) {
	// ageAppropriate is global
	var tmp = result.ageAppropriate;

	if(tmp == null)
		ageAppropriate = null;
	else if(typeof tmp == 'string')
		ageAppropriate = tmp == "true";
	else
		ageAppropriate = !!tmp;
}

var AgeGate = {
	FORM_ID: 'ageGateForm',
	day: '',
	month: '',
	year: '',
	listenerIds: [],
	verify: function() {
		ageAppropriate = readCookie("ageAppropriate")

		if(ageAppropriate == null)
			return null;
		return ageAppropriate;
	},
	setYear: function(v) {
		AgeGate._set('year', v);
	},
	setMonth: function(v) {
		AgeGate._set('month', v);
	},
	setDay: function(v) {
		AgeGate._set('day', v);
	},
	addListenerId: function(id) {
		AgeGate.listenerIds.push(id);

	},
	setCookies: function(cookies) {
		//jsonCallback(cookies);
		createCookie("ageAppropriate",ageAppropriate,(ageAppropriate)?14:0)

		for(index in AgeGate.listenerIds) {
			//alert('notifying listener: ' + AgeGate.listenerIds[index] + ', ageAppropriate = ' + ageAppropriate);
			$(AgeGate.listenerIds[index]).passedAgeGate(ageAppropriate);
		}
	},
	verifyRedirect: function(loc) {
		var validated = AgeGate.verify();
		if(validated)
			window.location = loc
		else if(validated == false)
			alert('not old enough');
		else
			alert('show age gate');
	},
	_set: function(name, value) {
		 // per asset age gate
			AgeGate[name] = value;
			if(AgeGate.year != '' && AgeGate.month != '' && AgeGate.day != '')
				{
					agedate = new Date(AgeGate.month +"/"+AgeGate.day+"/"+AgeGate.year)
					agerequired = new Date();
					agerequired.setFullYear(agerequired.getFullYear()-18)

					ageAppropriate = (agerequired>agedate)?true:false;
					AgeGate.setCookies(ageAppropriate)
				}

	}
}


function getstrings()
{  return dobstring +":"+ srystring +":"+ datestring +":"+ loc +":"+ sstrings }

//#END AGE GATE

function btoggle(targ,obj)
{ 	 if(!obj.parentNode.mfocus)
	{ document.getElementById(targ).style.display = 'none'; }
}

function trim(stringToTrim)  { return stringToTrim.replace(/^\s+|\s+$/g,""); }
function ltrim(stringToTrim) { return stringToTrim.replace(/^\s+/,""); }
function rtrim(stringToTrim) { return stringToTrim.replace(/\s+$/,""); }


// Blizzard.com Specific Functions

function makehmenu(tagtype,targdiv){ if(!tagtype){ tagtype = "H3" } if(!targdiv){ targdiv = "h3menu" }
addEvent(window, 'load', function(){
	sarr = document.getElementsByTagName(tagtype);
	for(i=0; i<sarr.length; i++){ div = (i<sarr.length - 1)?" | ":""; val = sarr[i].innerHTML; div=""
	val = trim(val); val = val.replace(/\s/,"&nbsp;"); 	sarr[i].innerHTML += "<a id=h3l"+i+"></a>"
	document.getElementById(targdiv).innerHTML += "<a href='#h3l"+i+"'>"+val+"</a>" + div; }
	});
}


function clearDefault(el) { if (defsearch==el.value) el.value = ""; }

function setDefault(el) { if (el.value == "") el.value = defsearch; }


var prevvideo, videoinit
function video(opt)
{

    blkout = document.getElementById('blackout');
	vcntr = document.getElementById("viewerContent");

	if(opt == "close")
		document.getElementById('videoContainer').stopflash();
	else
	{	initplayer();	}
}

var agegatereq = "false", autoplay = "false"
function buildplayer(name,w,h,gtype){

	gtype = gtype||gt;
	var v_locale = ((typeof video_locale != "undefined")?video_locale:locale).toLowerCase();
    va = gtype + "-" + name + "-" + v_locale + ":" + gtype + "-" + name + ":" + "games/" + gtype + "/" + name;

	var flashvars = { "vidArr": va, "skincolor": skincolor,	"rating": "", "autoplay": autoplay, "agegatereq":agegatereq };
	var params = { menu: "false", base: ctx + "movies/player/", allowFullScreen: "true", allowScriptAccess: "always", bgcolor: "000000"  };
	var attributes = { id: "videoContainer", name: "videoContainer"  };

	swfobject.embedSWF(ctx + "movies/player/video_loader2.swf", "videoContainer", w, Number(h) + 30, "9","expressInstall.swf", flashvars, params, attributes);

	sV.setVideo(sV.videoTitle, sV.videoWidth, sV.videoHeight);

}

function changevideo(targ,opt,gtype)
{
	var opt = opt.split(":");
	buildplayer(opt[0],opt[1],opt[2],gtype);

	if(document.getElementById('video_list'))
	{
		if(!prevvideo)
			prevvideo = document.getElementById('video_list').getElementsByTagName("a")[0];

		ntitle = targ.getElementsByTagName("b")[0].innerHTML;
		document.getElementById("cvideo_title").getElementsByTagName("b")[0].innerHTML = ntitle;

		$j(targ).slideUp()
		$j(prevvideo).slideDown();
		prevvideo = targ;
   }
   else
   {
	   var gametxt = "<b>" + targ.parentNode.getElementsByTagName("div")[0].getElementsByTagName("b")[0].innerHTML + "</b> - " + targ.parentNode.getElementsByTagName("div")[0].getElementsByTagName("div")[0].innerHTML;
	   dlhtml = targ.parentNode.getElementsByTagName("div")[0].getElementsByTagName("div")[1].innerHTML.split('<div class="dl_break">');

	   var dl_link = '<div class="v_dl">'+dlhtml[0]+'</div>';
	   var moreinfo = '<div class="v_dl add">' + dlhtml[1];

	   if(dlhtml[1] == undefined)
		   $j("#v_title").html(dl_link + gametxt);
	    else
	    	$j("#v_title").html(dl_link + gametxt + moreinfo);
   }

	$j("#vplayer").hide();
	$j("#v_title").animate( { width:opt[1]+"px" }, "fast","linear")
	$j("#video_container").animate( {width:opt[1]+"px"},"fast","linear",function(){ $j("#vplayer").show(); })
	$j("#video_player").animate( {width:opt[1]+"px", height:Number(opt[2])+30+"px"}, "fast","linear" )
}

function autostart(vid)
{  if(location.href.indexOf("#")>-1)
	{
	  sortype = unescape(location.href.split("#")[1]);
      lista = $j(".sort_opt_br > a")
	  for(i=0;i<lista.length;i++){  if(lista[i].innerHTML.toLowerCase().indexOf(sortype)>-1) { $j(lista[i]).click() } }
    }

   vid = vid.split(":");
   tr_tags = document.getElementById("trailer_tags").getElementsByTagName("a")
	for(i=0;i<tr_tags.length;i++)
	{ str_onclick = String(tr_tags[i].rel).toLowerCase()
	   if(str_onclick.indexOf(vid[1])>-1 && str_onclick.indexOf(vid[0])>-1)
		{
  		 changevideo(tr_tags[i],str_onclick.split('-')[0],vid[0])
		 return; }
		}
}

function youtubelink(targ,vidval,qual){
qual = qual||18
var ytlink = "http://www.youtube.com/watch?v="+vidval+"&fmt="+qual;
var ytembed = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/'+vidval+'&hl=en&fmt='+qual+'&hd=1&fs=1&color1=0x008aff&color2=0xb0c9de"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+vidval+'&hl=en&fmt='+qual+'&hd=1&fs=1&color1=0x008aff&color2=0xb0c9de" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>'

var morehtml = embedtxt+': <input onclick="this.select()" value=\''+ytembed+'\'/>'
var tdiv = (targ.parentNode.parentNode.id =="v_title")?targ.parentNode.parentNode:targ.parentNode;
var tdivs = tdiv.getElementsByTagName("div")
for (xi in tdivs){ if(tdivs[xi].className == "v_more") { tdivs[xi].innerHTML = morehtml; }}
toggle_dl(targ,"emb");
}

function video_dl(targ)
{  location.href = (Browser.mac)?targ.replace(".exe",".zip"):targ }

function toggle_dl(target, cssClass)
{
	var targetDiv = (target.parentNode.parentNode.id == "v_title") ? target.parentNode.parentNode : target.parentNode;

	if(targetDiv.className.indexOf(cssClass) > -1)
		$j(targetDiv).toggleClass(cssClass);
	else
		targetDiv.className = "v_dl " + cssClass;
}

function show_vopt()
{
	$j('#sort_opt').slideToggle("fast")
}


var prevtarg
function vsort(targ, opt)
{
	if(prevtarg) prevtarg.className = ''
	if(targ) { targ.className = 'selected'
			   $j('#sort_opt').hide()
			   prevtarg = targ }
	opt = (opt == '')?opt:"("+opt.toLowerCase()+")"
	var count=0,vcount=0;
	for(i=0;i<titletags.length;i++)
		{
			if(titletags[i].toLowerCase().indexOf(opt)<0){ $j("#title_"+i).hide(); }
			else { $j("#title_"+i).show();
					vcount += $j("#title_"+i).children(".v_archive_entry").length
					count++; }
		}
	$j('#sortparam').text(targ.innerHTML);
	if(opt)	{
				location.href = "#"+opt.slice(1,-1);
				$j('#trailer_top').addClass("sorted")
				$j('#trailer_top > h3:first').html("<span class='title'>"+targ.innerHTML+"</span><span class='year'>("+count+" "+titlestext[0]+" / "+vcount+" "+titlestext[1]+")</span>")
			}
	else	{
				location.href = "#all"
				$j('#trailer_top').removeClass("sorted")
			}
}

function chash()
{
	if(location.href.indexOf("#") > -1)
		return '#'+location.href.split('#')[1];
	else
		return ""
}


var lightboxViewer = {
	view : function(trgL) {
		if (Browser.ie)
		{
			$j("#blackout").addClass('lightBoxGroup');
			setDisplay($('blackout'), 'block');
			$('blackout').style.height = document.documentElement.scrollHeight + 'px';

		} else {
			$j("#blackout").fadeIn(1500).addClass('lightBoxGroup');
		}
		rePositionY = (Browser.ie)? document.documentElement.scrollTop: self.pageYOffset;
		trgL.show().addClass('lightBoxGroup noPaging').css('top',rePositionY+116);

	},
	close : function() {
		$j(".lightBoxGroup").hide().removeClass("lightBoxGroup");
	}
}


function resizeflashtext(flashtextdivid,flashwidth,flashheight)
{
	document.getElementById(flashtextdivid).style.width = flashwidth + 'px';
	document.getElementById(flashtextdivid).style.height = flashheight + 'px';

	/* Fix IE squished bug : Laundering flash objects */
	if(Browser.ie) {
		var launderingDiv = $j('#'+flashtextdivid);
		var launderingObj = launderingDiv.children();
			launderingDiv.empty().append(launderingObj);
	};
}

function alertme(textmsg)
{
	alert(textmsg);
}

function openLink(url,target)
{
	if (target == "new") {
		window.open(url,'_blank');
	}
	else {
		window.location=url;
	}
}

function galleryinit(){
targ = document.getElementById("gallery_thumbs").getElementsByTagName("a")
for(i=0;i<targ.length;i++) { targ[i].num = i + 1; targ[i].onclick = function(){ gal_select(this); return false;}; }
$j("#gallery_thumbs a:first").click();

}
var cnum, prevtarg

function gal_select(targ)
{ if($j("#current_image > img").attr("src") != targ.href)
  { cnum = targ.num
    if(prevtarg)prevtarg.className = "";
	targ.className = "selected"; prevtarg = targ;
    $j("#current_image > img").attr({src: targ.href});
   $j("#gal_cap0").html("&#35; "+ targ.num +" / "+ gal_total);
   $j("#gal_cap1").html(targ.title);
  }
}

function gal_next(dir)
{ if(!cnum && cnum != 0) cnum = 1;
  if(!dir)  dir = 1;
  cnum += dir
  cnum = (cnum-1>=gal_total)?1:(cnum-1<0)?gal_total:cnum;
  $j("#gallery_thumbs a:eq("+(cnum-1)+")").click()
}

//Contests Page
var last_idx
function ft_select(idx,url)
{
	if(last_idx == idx){return;}
	last_idx = last_idx||0
		$j("#ft_list a:eq("+idx+")").addClass("selected")
		$j("#ft_list a:eq("+last_idx+")").removeClass("selected")
		$j("#bnd_"+last_idx).slideUp("fast");
		$j("#bnd_"+idx).slideDown("fast");
		$j("#ft_"+last_idx).fadeOut();
		$j("#ft_"+idx).fadeIn();
		$j("#featured_link").attr("href",url)
	last_idx = idx
}

var ft_pg = 0;  ft_perpg = 3;
function adv_featured(dir)
{	ft_pg+=dir;
	ft_pg = (ft_pg<0)?ft_max_pg:(ft_pg>ft_max_pg)?0:ft_pg;
    targ_ht = ft_pg*318
	$j("#ft_list").animate({marginTop: -targ_ht+"px"});
	//$j("#ft_list a:eq("+ft_pg*ft_perpg+")").click();
	$j("#featured_cpage > span").text(ft_pg+1);
}


function goSearch()
{
	var q = document.getElementById("q").value;
	if(q == '' || q == defsearch) {

		return false;
	}
	document.gs.action = root+loc+"/search.html";
	//document.gs.submit();
}

shotList = new Array();
function galleryView(thisScreenshot){
if(shotList) sV.setImageCollection(shotList,thisScreenshot)
else window.location.href = thisScreenshot; return;
}

function ga_track(someurl,somehref,newwin,pageTracker)
{ if(pageTracker) pageTracker._trackPageview(someurl);
  if(newwin) window.open(somehref);
  else location.href = somehref;
  if(typeof(event) != "undefined") event.returnValue = false;
  //console.log(somehref)
}

function spotlight_impression_ga_track(campaign) {
	_gaq.push(['_trackEvent', 'Spotlight', 'Ad Impression', 'Spotlight '+campaign+' - '+Core.locale, null, true]);
}

function spotlight_click_ga_track(campaign, somehref, newwin) {
	_gaq.push(['_trackEvent', 'Spotlight', 'Ad Click', 'Spotlight '+campaign+' - '+Core.locale]);
	if(newwin) {	window.open(somehref);	}
	else {	location.href = somehref;	}
}

//CS survey accept terms button
function acceptTerms() {
	var isTermsChecked = $j("#terms-accept")[0].checked;
		surveyUrl = "";

	if (lang == "en_gb"){
		surveyUrl = "http://blizzard.gamescom-en.sgizmo.com/s3/"
	}
	else if (lang == "de_de") {
			surveyUrl = "http://blizzard.gamescom-de.sgizmo.com/s3/"
	}
	else if (lang == "pl_pl") {
			surveyUrl = "http://blizzard.gamescom-po.sgizmo.com/s3/"
	}

	if(isTermsChecked) {
		$j("#terms-accpet").removeClass('disable').attr('href',surveyUrl);
	}
	else {
		$j("#terms-accpet").addClass('disable').removeAttr('href');
	}
}

/*
* Append Tracking tag
* @param url
* @param $parent    optional jQuery wrapper parent element
* */
function appendTrackingTag(url, $parent) {

    if(typeof url === 'undefined')
        return;

    $parent = $parent || $j('body');

    if(jQuery.browser.msie) {
        $parent.append('<iframe src="' + url + '" width="1" height="1" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
    }else {
        $parent.append('<object type="text/html" data="' + url + '" width="1" height="1"></object>');
    }
};
