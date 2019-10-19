/* Copyright 2000-2005 Clickability Inc.    */
/* Clickability Platform Button			*/

document.write('<script language="JavaScript"> \n');
document.write('window.onerror=function(){clickURL=document.location.href;return true;} \n');
document.write('if(!self.clickURL) clickURL=parent.location.href; \n');
document.write('<\/script> \n');

var custom=0;
var popWin="width=510,height=480,resizable=1,scrollbars=1";
var commonLoc="&fb=Y&url="+encodeURIComponent(getClickURL())+"&title="+encodeURIComponent(getClickTitle())+"&random="+Math.random()+"&partnerID="+partnerID+"&cid="+trkcid+"&expire="+encodeURIComponent(getClickExpire());

/****************Don't Change Below****************/
var IMG="http://clickabl.hs.llnwd.net/o41/images/buttons/";
var stT, etT, ptT, mpT, altST, altET, altPT, altMP, altIR, altIR, textWrap, iCol, tCol;
var spons, sponLoc, sponIntro, sponCol, sponTagTop, sponTagBot, sponFunc;
var bLay=new Array(), sponLay=new Array();

/*Functions*/
function ST () {
	window.open('http://www.savethis.clickability.com/st/saveThisApp?clickMap=saveThis'+commonLoc,'click',popWin);
	return false;
}

function STMouseOver () {
	window.status='SAVE THIS';
	return true;
}

function STMouseOut () {
	window.status='';
	return true;
}
function ET () {
	window.open('http://www.emailthis.clickability.com/et/emailThis?clickMap=create'+commonLoc,'click',popWin);
	return false;
}

function ETMouseOver () {
	window.status='EMAIL THIS';
	return true;
}

function ETMouseOut () {
	window.status='';
	return true;
}
function PT () {
	window.open('http://www.printthis.clickability.com/pt/printThis?clickMap=printThis'+commonLoc,'click',popWin);
	return false;
}

function PTMouseOver () {
	window.status='PRINT THIS';
	return true;
}

function PTMouseOut () {
	window.status='';
	return true;
}
function MP () {
	window.open('http://www.emailthis.clickability.com/et/emailThis?clickMap=topTen&fb=Y&MPbut=Y&popularType=1&partnerID='+partnerID,'click',popWin);
}

function MPMouseOver () {
	window.status='MOST POPULAR';
	return true;
}

function MPMouseOut () {
	window.status='';
	return true;
}


function IR () {
	window.open('http://imware.clickability.com/imware/imware?action=rss.feeds&button=Y&destID='+partnerID,'click',popWin);
	return false;
}

function IRMouseOver () {
	window.status='RSS FEEDS';
	return true;
}

function IRMouseOut () {
	window.status='';
	return true;
}


function drawBtn(type,text) {
	if(type=='h' || type =='H') type='h';
	if(type=='v' || type =='V') type='v';
	var i=bLay.length;
	sponLay[i]=sponTagBot;
	bLay[i]="";

	//start no wrap button
	if (!textWrap) {
		var sIconImg=IMG+iCol+"/"+type+"-s-icon-l.gif";
		var sTextImg=IMG+tCol+"/"+type+"-s-text-l.gif";
		var eIconImg=IMG+iCol+"/"+type+"-e-icon-l.gif";
		var eTextImg=IMG+tCol+"/"+type+"-e-text-l.gif"; 
		var pIconImg=IMG+iCol+"/"+type+"-p-icon-l.gif";
		var pTextImg=IMG+tCol+"/"+type+"-p-text-l.gif";
		var mpIconImg=IMG+iCol+"/"+type+"-mp-icon-l.gif";
		var mpTextImg=IMG+tCol+"/"+type+"-mp-text-l.gif";
		var irIconImg=IMG+iCol+"/"+type+"-ir-icon-l.gif";
		var irTextImg=IMG+tCol+"/"+type+"-ir-text-l.gif";
		if (type=='h') {
			var iconHeight=18,sIconWidth=34,eIconWidth=30,pIconWidth=31,sTextWidth=50,eTextWidth=56,pTextWidth=55,mpIconWidth=30,mpTextWidth=77,irIconWidth=30,irTextWidth=77;
		}
		else {
			var iconHeight=23,sIconWidth=35,eIconWidth=35,pIconWidth=35,sTextWidth=55,eTextWidth=55,pTextWidth=55,mpIconWidth=35,mpTextWidth=77,irIconWidth=30,irTextWidth=77;
		}
	
	}
	//end no wrap button
	
	//start wrap button
	if (textWrap) {
		var sIconImg=IMG+iCol+"/"+type+"-s-icon-s.gif";
		var sTextImg=IMG+tCol+"/"+type+"-s-text-s.gif";
		var eIconImg=IMG+iCol+"/"+type+"-e-icon-s.gif";
		var eTextImg=IMG+tCol+"/"+type+"-e-text-s.gif"; 
		var pIconImg=IMG+iCol+"/"+type+"-p-icon-s.gif";
		var pTextImg=IMG+tCol+"/"+type+"-p-text-s.gif";
		var mpIconImg=IMG+iCol+"/"+type+"-mp-icon-s.gif";
		var mpTextImg=IMG+tCol+"/"+type+"-mp-text-s.gif";
		var irIconImg=IMG+iCol+"/"+type+"-ir-icon-s.gif";
		var irTextImg=IMG+tCol+"/"+type+"-ir-text-s.gif";
		if (type=='h') {
			var iconHeight=24,sIconWidth=35,eIconWidth=30,pIconWidth=32,sTextWidth=30,eTextWidth=34,pTextWidth=31,mpIconWidth=31,mpTextWidth=53,irIconWidth=31,irTextWidth=53;
		}
		else {
			var iconHeight=32,sIconWidth=35,eIconWidth=35,pIconWidth=35,sTextWidth=32,eTextWidth=32,pTextWidth=32,mpIconWidth=35,mpTextWidth=50,irIconWidth=35,irTextWidth=50;
		}
	}
	//end wrap button
	
	//start sponsor top
	if (spons) {
		if (type=='h') {
			if (sponLoc=="top") {
				document.write('<table><tr><td align="left"><table><tr><td><font size="1" face="Arial,Helvetica" color="#000000">'+sponIntro+'</font> </td><td>');
				eval(sponTagTop);
				document.write('</td></tr></table></td></tr><tr><td>');	
			}
			else {
				document.write('<table><tr><td>');	
			}
		}
	}
	//end sponsor top
	
	if (type=='h') document.write('<nobr>');
	
	//start SAVE THIS
	if (stT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"return(ST());\" onMouseOver=\"return(STMouseOver());\" onMouseOut=\"return(STMouseOut());\">";
		bLay[i]+="<IMG src=\""+sIconImg+"\" width=\""+sIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altST+"\" title=\""+altST+"\">";
		if (text) bLay[i]+="<IMG src=\""+sTextImg+"\" width=\""+sTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altST+"\" title=\""+altST+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end SAVE THIS
	//start EMAIL THIS
	if (etT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"return(ET());\" onMouseOver=\"return(ETMouseOver());\" onMouseOut=\"return(ETMouseOut());\">";
		bLay[i]+="<IMG src=\""+eIconImg+"\" width=\""+eIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altET+"\" title=\""+altET+"\">";
		if (text) bLay[i]+="<IMG src=\""+eTextImg+"\" width=\""+eTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altET+"\" title=\""+altET+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";		
	}
	//end EMAIL THIS
	//start PRINT THIS
	if (ptT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"return(PT());\" onMouseOver=\"return(PTMouseOver());\" onMouseOut=\"return(PTMouseOut());\">";
		bLay[i]+="<IMG src=\""+pIconImg+"\" width=\""+pIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altPT+"\" title=\""+altPT+"\">";
		if (text) bLay[i]+="<IMG src=\""+pTextImg+"\" width=\""+pTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altPT+"\" title=\""+altPT+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end PRINT THIS
	//start MOST POPULAR
	if (mpT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"return(MP());\" onMouseOver=\"return(MPMouseOver());\" onMouseOut=\"return(MPMouseOut());\">";
		bLay[i]+="<IMG src=\""+mpIconImg+"\" width=\""+mpIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altMP+"\" title=\""+altMP+"\">";
		if (text) bLay[i]+="<IMG src=\""+mpTextImg+"\" width=\""+mpTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altMP+"\" title=\""+altMP+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end MOST POPULAR
	//start imWareRSS
	if (irT) {
		if (type=='v') bLay[i]+="<div>";
		bLay[i]+="<A HREF=\"#\" ONCLICK=\"return(IR());\" onMouseOver=\"return(IRMouseOver());\" onMouseOut=\"return(IRMouseOut());\">";
		bLay[i]+="<IMG src=\""+irIconImg+"\" width=\""+irIconWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altIR+"\" title=\""+altIR+"\">";
		if (text) bLay[i]+="<IMG src=\""+irTextImg+"\" width=\""+irTextWidth+"\" height=\""+iconHeight+"\" border=\"0\" alt=\""+altIR+"\" title=\""+altIR+"\">";
		if (type=='h') bLay[i]+="</a>&nbsp;&nbsp;";
		if (type=='v') bLay[i]+="</a></div>";
	}
	//end imWareRSS

	document.write(bLay[i]);
	if (type=='h') document.write('</nobr>');
	
	//start spons bottom
	if (spons) {
		if (sponLoc=="top") {
			document.write('</td></tr></table><br clear="all">');	
		}
		else if (type=='h') {
			document.write('</td><td valign="top">');
			if (sponIntro && sponIntro != ' ') document.write('<font size="1" face="Arial,Helvetica" color="#000000">'+sponIntro+'</font><br>');
			eval(sponTagTop);
			document.write('</td></tr></table><br clear="all">');	
		}
		else {
			document.write('<div><table><tr><td> ');
			if (sponIntro && sponIntro != ' ') document.write('<font size="1" face="Arial,Helvetica" color="#000000">'+sponIntro+'</font><br> ');
			eval(sponTagTop);
			document.write('</td></tr></table></div>');
		}
	}
	//end spons bottom
}
function initBtn() {
	var a=initBtn.arguments;
	stT=a[0]; etT=a[1]; ptT=a[2]; mpT=a[3]; irT=a[4]
	textWrap=a[5]; iCol=a[6]; tCol=a[7];
}
function initSponsor() {
	var a=initSponsor.arguments;
	spons=a[0]; sponLoc=a[1]; sponIntro=a[2]; sponCol=a[3]; sponTagTop=a[4]; sponTagBot=a[5]; sponFunc=a[6];
}
function initAlt(s,e,p,m,i) {
	altST = (s) ? "Save a link to this article and return to it at www.savethis.com":"";
	altET = (e) ? "Email a link to this article":"";
	altPT = (p) ? "Printer-friendly version of this article":"";
	altMP = (m) ? "View a list of the most popular articles on our site":"";
	altIR = (i) ? "Get RSS feeds of the most popular articles on our site":"";
}
function btnDone() {
	for (i=0;i<sponLay.length;i++) {
		if (sponLay[i]) eval(sponLay[i]);
	}
}

function getClickURL() {
        if (self.clickURL) return clickURL;
        return document.location.href;
}

function getClickTitle() {
	if (self.clickTitle) return clickTitle;
	return document.title;
}
function getClickExpire() {
	if (self.clickExpire) return clickExpire; 
	return "";
}

window.onresize = function () {
    for (var i=0; i<document.links.length; i++) {
        document.links[i].onclick = document.links[i].onclick;
    }
}