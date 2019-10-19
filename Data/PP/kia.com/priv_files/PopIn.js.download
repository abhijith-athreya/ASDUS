var objPopIn={};objPopIn.f={};objPopIn.v={};objPopIn.a={};var oldIeMarker=navigator.userAgent.toUpperCase().indexOf("IE 7");if(oldIeMarker<0)
{oldIeMarker=navigator.userAgent.toUpperCase().indexOf("IE 6");}
if(oldIeMarker<0)
{oldIeMarker=navigator.userAgent.toUpperCase().indexOf("IE 8");}
if((document.body)&&(oldIeMarker<0))
{objPopIn.v.popinDiv=document.createElement("div");objPopIn.v.popinDiv.id="iCoder_POP1141877261";if(objPopIn.v.popinDiv.addEventListener)
{objPopIn.v.popinDiv.addEventListener("mousedown",initializedrag,true);}else if(objPopIn.v.popinDiv.attachEvent)
{objPopIn.v.popinDiv.attachEvent("onmousedown",function(){initializedrag(event);});}
objPopIn.v.popinDiv.onmouseup=stopdrag;objPopIn.v.popinDiv.style.cursor="move";objPopIn.v.popinDiv.style.overflow="hidden";objPopIn.v.popinDiv.style.position="absolute";objPopIn.v.popinDiv.style.width="417px";objPopIn.v.popinDiv.style.height="207px";objPopIn.v.popinDiv.style.backgroundColor="#ff9933";objPopIn.v.popinDiv.style.display="none";objPopIn.v.popinDiv.style.zIndex="9999";objPopIn.v.popinTable=document.createElement("table");objPopIn.v.popinTable.id="mainTable";objPopIn.v.popinTable.cellSpacing="0";objPopIn.v.popinTable.cellPadding="2";objPopIn.v.popinTable.style.position="absolute";objPopIn.v.popinTable.style.top="4px";objPopIn.v.popinTable.style.left="4px";objPopIn.v.popinTable.style.width="417px";objPopIn.v.popinTable.style.height="207px";objPopIn.v.popinTable.style.font="normal 10pt Verdana";objPopIn.v.popinTable.style.border="1px solid navy";objPopIn.v.popinTBody=document.createElement("tbody");objPopIn.v.popinRow=document.createElement("tr");objPopIn.v.popinRow.style.height="100%";objPopIn.v.popinCol=document.createElement("td");objPopIn.v.popinCol.id="colorCell";objPopIn.v.popinCol.style.backgroundColor="#ff9933";objPopIn.v.popinCol.style.color="black";objPopIn.v.agentInfoDiv=document.createElement("div");objPopIn.v.agentInfoDiv.id="agent_info";objPopIn.v.agentInfoDiv.style.width="100%"
objPopIn.v.agentInfoDiv.style.verticalAlign="middle";objPopIn.v.popinCol.appendChild(objPopIn.v.agentInfoDiv);objPopIn.v.popinRow.appendChild(objPopIn.v.popinCol);objPopIn.v.popinTBody.appendChild(objPopIn.v.popinRow)
objPopIn.v.popinTable.appendChild(objPopIn.v.popinTBody);objPopIn.v.popinDiv.appendChild(objPopIn.v.popinTable);if(!document.getElementById("iCoder_POP1141877261"))
{document.body.appendChild(objPopIn.v.popinDiv);}}else
{if(!document.getElementById("iCoder_POP1141877261"))
{document.write('<div id="iCoder_POP1141877261" style="overflow:hidden;position:absolute;display:none;top:5000;left:0;width:425px;height:215px;background-color:#ff9933;z-index:9999;cursor:move;" onmousedown="initializedrag(event)" onmouseup="stopdrag()" ><table id="mainTable" cellspacing="0" cellpadding="2" style="top:4px; left:4px; position: absolute; width:417px; height:207px; font:normal 10pt Verdana;border:1px solid navy;"><tr style="height:100%"><td id="colorCell" style="background-color:#ff9933;color:black;">');document.write('<div id="agent_info" style="width:100%;vertical-align:middle"></div>');document.write('</td></tr></table></div>');}}
var IsDocumentLoaded=false;function SetLoadedFlag()
{IsDocumentLoaded=true;}
if(window.LoadHandlerRedirected)
{}
else
{window.LoadHandlerRedirected=true;if(customContainer!=null)
{}
else
{if(window.addEventListener)
{window.addEventListener("load",SetLoadedFlag,false);}else if(window.attachEvent)
{window.attachEvent("onload",SetLoadedFlag);}}
setTimeout("SetLoadedFlag()",10000);}
function setXCloseCookie(name)
{document.cookie=name+'=0;'}
function setXCloseedCookieValue(name)
{var date=new Date();date.setTime(date.getTime()+(1*60*60*1000));document.cookie=name+'=1;expires='+date.toUTCString()+'; path=/';}
function readCookie()
{var nameEQ="popinCount=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function GetCookie(sName)
{var aCookie=document.cookie.split("; ");for(var i=0;i<aCookie.length;i++)
{var aCrumb=aCookie[i].split("=");if(sName==aCrumb[0])
return unescape(aCrumb[1]);}
return null;}
function setCookie(value,hours)
{var date=new Date();date.setTime(date.getTime()+(hours*60*60*1000));if(/popinCount/.test(document.cookie))
{date=unescape(document.cookie).split('CaoPopinCookieExpireDate=')[1];}
document.cookie='popinCount='+value+',CaoPopinCookieExpireDate='+date+';expires='+date+'; path=/';}
function iPop_close(pop_name)
{if(!pop_name)pop_name="iCoder_POP1141877261";DHTMLAPI_hide(pop_name);}
function iPop1141877261_close(){DHTMLAPI_hide("iCoder_POP1141877261");setXCloseedCookieValue(xCloseCookieName);}
function iPop1141877261_init0()
{DHTMLAPI_init();iCoder_POP1141877261_Obj=DHTMLAPI_getRawObject("iCoder_POP1141877261");iCoder_POP1141877261_move();window.onscroll=iCoder_POP1141877261_move;window.onresize=iCoder_POP1141877261_move;}
var useVibro=true;var useDrop=true;var customPosition=false;var caoDropinBottomOffset=0;var custX,custY;var customContainer=null;var usesAnimationScript=false;var animationScriptLoaded=false;objPopIn.v.currentDropId;objPopIn.v.popInRunning=false;objPopIn.v.popInState=0;objPopIn.v.deactivateOnScrollEvent=false;objPopIn.v.deactivateOnResizeEvent=false;objPopIn.a.popInIntervalIds=new Array();function iPop1141877261_init1()
{if(usesAnimationScript&&!animationScriptLoaded)
{setTimeout("iPop1141877261_init1()",500);objPopIn.v.popInState=0;objPopIn.v.popInRunning=false;return;}
if(objPopIn.v.popInState>=2)
{return;}
objPopIn.v.popInState=2;if(objPopIn.v.popInRunning)
{return;}
objPopIn.v.popInRunning=true;if(!IsDocumentLoaded&&(customContainer==null))
{setTimeout("iPop1141877261_init1()",500);objPopIn.v.popInState=0;objPopIn.v.popInRunning=false;return;}
DHTMLAPI_init();iCoder_POP1141877261_Obj=DHTMLAPI_getRawObject("iCoder_POP1141877261");if(customContainer==null)
{document.body.appendChild(iCoder_POP1141877261_Obj);}else
{customContainer.appendChild(iCoder_POP1141877261_Obj);}
iCoder_POP1141877261_delta=16;var theObj=iCoder_POP1141877261_Obj;if(theObj&&isCSS)theObj=theObj.style;if(theObj&&theObj.visibility=="hidden")return;if(theObj&&theObj.display=="none"){theObj.display="block";theObj.position="absolute";}
DHTMLAPI_shiftTo(iCoder_POP1141877261_Obj,0,5000);var center=DHTMLAPI_positionWindow(iCoder_POP1141877261_Obj,true);iCoder_POP1141877261_x=center[0];iCoder_POP1141877261_y=center[1];var w_scroll=DHTMLAPI_getScrollWindow();var start_y=parseInt((w_scroll[1]-iCoder_POP1141877261_y-DHTMLAPI_getObjectHeight(iCoder_POP1141877261_Obj)-100)/100)*100+iCoder_POP1141877261_y;if(typeof objPopIn.f.popInCustomInitFunction=='function')
{objPopIn.f.popInCustomInitFunction();}
if(objPopIn.v.popInState>=3){return;}
objPopIn.v.popInState=3;if(useDrop)
{DHTMLAPI_shiftTo(iCoder_POP1141877261_Obj,iCoder_POP1141877261_x,start_y);var associatedId=objPopIn.f.generateId();objPopIn.v.currentDropId=setInterval("iCoder_POP1141877261_drop('"+associatedId+"')",50);objPopIn.a.popInIntervalIds.push(associatedId+";"+objPopIn.v.currentDropId);if(typeof objPopIn.f.preDropFunction=='function')
{objPopIn.f.preDropFunction();}}
else
{if(typeof CustomizedDropinAnimation=='function')
{CustomizedDropinAnimation();}else
{DHTMLAPI_positionWindow(iCoder_POP1141877261_Obj);}}
if(!objPopIn.v.deactivateOnScrollEvent)
{window.onscroll=iCoder_POP1141877261_move;}
if(!objPopIn.v.deactivateOnResizeEvent)
{window.onresize=iCoder_POP1141877261_move;}}
function iCoder_POP1141877261_move()
{if(window.iCoder_POP1141877261_timeout)clearTimeout(window.iCoder_POP1141877261_timeout);if(!iCoder_POP1141877261_Obj)return;var theObj=iCoder_POP1141877261_Obj;if(theObj&&isCSS)theObj=theObj.style;if(theObj&&theObj.visibility=="hidden")return;if(theObj&&theObj.display=="none"){theObj.display="block";theObj.position="absolute";}
DHTMLAPI_positionWindow(iCoder_POP1141877261_Obj);}
function DHTMLAPI_positionWindow(elemID,positionOnly)
{var obj=DHTMLAPI_getRawObject(elemID);var position=obj.getAttribute("pos");var scrollX=0,scrollY=0;if(document.body&&typeof(document.body.scrollTop)!="undefined")
{scrollX+=document.body.scrollLeft;scrollY+=document.body.scrollTop;if(0==document.body.scrollTop&&document.documentElement&&typeof(document.documentElement.scrollTop)!="undefined")
{scrollX+=document.documentElement.scrollLeft;scrollY+=document.documentElement.scrollTop;}}else if(typeof(window.pageXOffset)!="undefined")
{scrollX+=window.pageXOffset;scrollY+=window.pageYOffset;}
var x=Math.round((DHTMLAPI_getInsideWindowWidth()/2)-(DHTMLAPI_getObjectWidth(obj)/2))+scrollX;var y=Math.round((DHTMLAPI_getInsideWindowHeight()/2)-(DHTMLAPI_getObjectHeight(obj)/2))+scrollY;var shift_position=parseInt(0);if(isNaN(shift_position))shift_position=0;if(!customPosition)
{switch(position)
{case"tc":y=scrollY+shift_position;break;case"tl":y=scrollY+shift_position;x=scrollX+shift_position;break;case"tr":y=scrollY+shift_position;x=Math.round(DHTMLAPI_getInsideWindowWidth()-DHTMLAPI_getObjectWidth(obj))+scrollX-shift_position;break;case"ml":x=scrollX+shift_position;break;case"mr":x=Math.round(DHTMLAPI_getInsideWindowWidth()-DHTMLAPI_getObjectWidth(obj))+scrollX-shift_position;break;case"bc":y=Math.round(DHTMLAPI_getInsideWindowHeight()-DHTMLAPI_getObjectHeight(obj))+scrollY-shift_position-caoDropinBottomOffset;break;case"bl":y=Math.round(DHTMLAPI_getInsideWindowHeight()-DHTMLAPI_getObjectHeight(obj))+scrollY-shift_position-caoDropinBottomOffset;x=scrollX+shift_position;break;case"br":y=Math.round(DHTMLAPI_getInsideWindowHeight()-DHTMLAPI_getObjectHeight(obj))+scrollY-shift_position-caoDropinBottomOffset;x=Math.round(DHTMLAPI_getInsideWindowWidth()-DHTMLAPI_getObjectWidth(obj))+scrollX-shift_position;break;}}
else
{x=custX;y=custY;}
if(!positionOnly){DHTMLAPI_shiftTo(obj,x,y);}
return[x,y];}
function iCoder_POP1141877261_drop(intervalId)
{var noOfRunningPopinAnims=objPopIn.a.popInIntervalIds.length;if(noOfRunningPopinAnims>1)
{var firstIdPair=objPopIn.a.popInIntervalIds[0].split(";");if(firstIdPair[0]!=intervalId)
{for(var cao_i=1;cao_i<noOfRunningPopinAnims;cao_i++)
{var intervalIdPair=objPopIn.a.popInIntervalIds[cao_i].split(";");if(intervalIdPair[0]==intervalId)
{objPopIn.a.popInIntervalIds.splice(cao_i,1);clearInterval(parseInt(intervalIdPair[1]));return;}}}}
var y=DHTMLAPI_getObjectTop(iCoder_POP1141877261_Obj);if(iCoder_POP1141877261_y>y)
{DHTMLAPI_shiftTo(iCoder_POP1141877261_Obj,iCoder_POP1141877261_x,50+y);}else
{var firstIdPair=objPopIn.a.popInIntervalIds[0].split(";");clearInterval(parseInt(firstIdPair[1]));if(useVibro)
{iCoder_POP1141877261_vibrostart=setInterval("iCoder_POP1141877261_vibro()",40);}
if(typeof PostDropinCustomFunction=='function')
{if(objPopIn.v.popInState>=4)
{return;}
objPopIn.v.popInState=4;PostDropinCustomFunction();objPopIn.a.popInIntervalIds=[];}else
{objPopIn.v.popInRunning=false;objPopIn.v.popInState=0;}}}
function iCoder_POP1141877261_vibro()
{var y=DHTMLAPI_getObjectTop(iCoder_POP1141877261_Obj);DHTMLAPI_shiftTo(iCoder_POP1141877261_Obj,iCoder_POP1141877261_x,y-iCoder_POP1141877261_delta);if(iCoder_POP1141877261_delta<0)iCoder_POP1141877261_delta+=4;iCoder_POP1141877261_delta*=-1;if(iCoder_POP1141877261_delta==0)
{clearInterval(iCoder_POP1141877261_vibrostart);iCoder_POP1141877261_move();}}
function DHTMLAPI_hide(obj)
{var theObj=DHTMLAPI_getObject(obj);if(theObj)theObj.visibility="hidden";if(document.images)
{for(var i=0;i<document.images.length;i++)
{document.images[i].src=document.images[i].src;}}}
function DHTMLAPI_getRawObject(obj)
{var theObj;if(typeof obj=="string")
{if(isW3C)theObj=document.getElementById(obj);else if(isIE4)theObj=document.all(obj);else if(isNN4)theObj=DHTMLAPI_seekLayer(document,obj);}else theObj=obj;return theObj;}
function DHTMLAPI_shiftTo(obj,x,y)
{var theObj=DHTMLAPI_getObject(obj);if(theObj)
{if(isCSS)
{var units=(typeof theObj.left=="string")?"px":0;theObj.left=x+units;theObj.top=y+units;}else if(isNN4)theObj.moveTo(x,y);}}
function DHTMLAPI_getScrollWindow()
{var scrollX=0,scrollY=0;if(document.body&&typeof(document.body.scrollTop)!="undefined")
{scrollX+=document.body.scrollLeft;scrollY+=document.body.scrollTop;}else if(typeof(window.pageXOffset)!="undefined")
{scrollX+=window.pageXOffset;scrollY+=window.pageYOffset;}
return[scrollX,scrollY];}
function DHTMLAPI_getObjectHeight(obj)
{var elem=DHTMLAPI_getRawObject(obj);var result=0;if(elem.offsetHeight)result=elem.offsetHeight;else if(elem.clip&&elem.clip.height)result=elem.clip.height;else if(elem.style&&elem.style.pixelHeight)result=elem.style.pixelHeight;return parseInt(result);}
function DHTMLAPI_getObjectTop(obj)
{var elem=DHTMLAPI_getRawObject(obj);var result=0;if(document.defaultView)
{var style=document.defaultView;var cssDecl=style.getComputedStyle(elem,"");result=cssDecl.getPropertyValue("top");}
else if(elem.currentStyle)
{result=elem.currentStyle.top;}
else if(elem.style)
{result=elem.style.top;}
else if(isNN4)
{result=elem.top;}
return parseInt(result);}
function DHTMLAPI_getObject(obj)
{var theObj=DHTMLAPI_getRawObject(obj);if(theObj&&isCSS)theObj=theObj.style;return theObj;}
function DHTMLAPI_seekLayer(doc,name)
{var theObj;for(var i=0;i<doc.layers.length;i++)
{if(doc.layers[i].name==name)
{theObj=doc.layers[i];break;}
if(doc.layers[i].document.layers.length>0)theObj=DHTMLAPI_seekLayer(document.layers[i].document,name);}
return theObj;}
function DHTMLAPI_getInsideWindowWidth()
{if(window.innerWidth)
{return(window.innerWidth-17);}
else if((document.documentElement)&&(document.documentElement.clientWidth)&&(document.documentElement.clientWidth>0))
{return document.documentElement.clientWidth}
else if(document.body&&document.body.clientWidth)
{return document.body.clientWidth;}
return 0;}
function DHTMLAPI_getInsideWindowHeight()
{if(window.innerHeight)
{return(window.innerHeight-17);}
if((document.documentElement)&&(document.documentElement.clientHeight)&&(document.documentElement.clientHeight>0))
{return document.documentElement.clientHeight}
else if(document.body&&document.body.clientHeight)
{return document.body.clientHeight;}
return 0;}
function DHTMLAPI_getObjectWidth(obj)
{var elem=DHTMLAPI_getRawObject(obj);var result=0;if(elem.offsetWidth)result=elem.offsetWidth;else if(elem.clip&&elem.clip.width)result=elem.clip.width;else if(elem.style&&elem.style.pixelWidth)result=elem.style.pixelWidth;return parseInt(result);}
function DHTMLAPI_init()
{if(document.images)
{isCSS=(document.body&&document.body.style)?true:false;isW3C=(isCSS&&document.getElementById)?true:false;isIE4=(isCSS&&document.all)?true:false;isNN4=(document.layers)?true:false;isIE6CSS=false;}}
var dragapproved=false
var ie5=document.all&&document.getElementById
var ns6=document.getElementById&&!document.all
function iecompattest()
{return(!window.opera&&document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body}
function drag_drop(e)
{if(ie5&&dragapproved&&event.button==1)
{document.getElementById("iCoder_POP1141877261").style.left=tempx+event.clientX-offsetx+"px"
document.getElementById("iCoder_POP1141877261").style.top=tempy+event.clientY-offsety+"px"}
else if(ns6&&dragapproved)
{document.getElementById("iCoder_POP1141877261").style.left=tempx+e.clientX-offsetx+"px"
document.getElementById("iCoder_POP1141877261").style.top=tempy+e.clientY-offsety+"px"}}
function initializedrag(e)
{offsetx=ie5?event.clientX:e.clientX
offsety=ie5?event.clientY:e.clientY
tempx=parseInt(document.getElementById("iCoder_POP1141877261").style.left)
tempy=parseInt(document.getElementById("iCoder_POP1141877261").style.top)
dragapproved=true
document.getElementById("iCoder_POP1141877261").onmousemove=drag_drop}
function stopdrag()
{dragapproved=false;document.getElementById("iCoder_POP1141877261").onmousemove=null;}
function scaleObjectByWidth(target,newWidth)
{if(target.width<=newWidth)
{return;}
var originalWidth=target.width;var originalHeight=target.height;var ratio=(newWidth/originalWidth);var newHeight=parseInt(ratio*originalHeight);target.width=newWidth;target.height=newHeight;}
objPopIn.f.generateId=function()
{var randmId="";var possibleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<6;i++)
randmId+=possibleChars.charAt(Math.floor(Math.random()*possibleChars.length));return randmId;}
function CloseBargeIn()
{document.getElementById("iCoder_POP1141877261").setAttribute("style","display:none");ContactAtOnce.BargeIn.BargeInDestroyInviteByCustomInvite();}
objPopIn.f.getElementHeight=function(elem)
{return Math.max(elem.scrollHeight,elem.offsetHeight,elem.clientHeight);}
objPopIn.f.setMaxHeightToElement=function(elem,maxHeight,startingFontSize)
{var actualHeight=objPopIn.f.getElementHeight(elem);if(actualHeight>maxHeight)
{if(!startingFontSize)
{if(window.getComputedStyle)
{var strSize=window.getComputedStyle(elem,null).getPropertyValue("font-size");startingFontSize=parseFloat(strSize);}else
{startingFontSize=16;}}
startingFontSize--;var fontSize=startingFontSize+"px";elem.style.fontSize=fontSize;if(startingFontSize<=9)
{return;}
objPopIn.f.setMaxHeightToElement(elem,maxHeight,startingFontSize);}}