//tealium universal tag - utag.2 ut4.0.201704101726, Copyright 2017 Tealium.com Inc. All Rights Reserved.
window.v3LanderConfig=function(){window.env=window.bactm_envSelector||window.bactm_chatEnv||'notprod';var config={"defaultHostToPath":'/tc-chat-bac.html',"hostedFileURL":'/tc-chat-bac.html',"vanityDomain":env==='prod'?'https://bofa.inq.com':'https://bofa-test.inq.com',"cdnDomain":env==='prod'?'https://media-bofa.inq.com':'https://mediav3-test.inq.com',"iframeSrcParams":"&env="+env+"&tmProfile="+window.bactm_profile,"customLaunching":false};return config;}();window.v3LanderConfig=window.v3LanderConfig||window.boa.tc.config;if(navigator.userAgent.indexOf("MSIE 6")>=0||(navigator.userAgent.indexOf("MSIE 7")>=0&&navigator.userAgent.indexOf("Trident")==-1&&navigator.userAgent.toLowerCase().indexOf("media center")==-1)){}
else if(window["v3Lander"]==null){if(typeof window.v3LanderConfig!="object"){window.v3LanderConfig={};}
window.v3Lander={codeVersion:'1470848111488',v3Frame:false,domState:"defer-failed",domReady:false,normalizeProtocol:function(url){return url.replace(/^HTTPS?:/i,window.parent.location.protocol);},hostToPath:{},defaultHostToPath:window.v3LanderConfig.defaultHostToPath||"/tc-chat-bac.html",hostedFileURL:window.v3LanderConfig.hostedFileURL||"/tc-chat-bac.html",isAtHostedFileURL:false,log:function(s){if(typeof console!="undefined"&&console.log){console.log(s);}},FMProxy:{fcns:{},addFcn:function(name,fcnStr){var obj=null;try{obj=eval("({'"+name+"':"+fcnStr+"})");}
catch(err){throw"function eval failed. err="+err.toString();}
this.fcns[name]=obj[name];},getFcn:function(name){return this.fcns[name];},removeFcn:function(name){if(!!this.fcns[name]){delete this.fcns[name];return true;}
return false;}},_getHostedFileURL:function(domain){if(!domain)domain=window.location.host;domain=domain.toUpperCase();if(!v3Lander.hostToPath){return v3Lander.hostedFileURL;}
var url=null;try{url=v3Lander.hostToPath[domain];}catch(e){}
if(!url)
return v3Lander.hostedFileURL=this.defaultHostToPath;return url;},getHostedFileURL:function(domain){var url=this._getHostedFileURL(domain);if(url.indexOf("//")!=0){url="//"+domain+url;}
url=window.location.protocol+url;return url;},establishHostedFileURL:function(){if(window.v3LanderConfig.hostToPath){for(var i=0,paths=window.v3LanderConfig.hostToPath;i<paths.length;i++){v3Lander.hostToPath[paths[i].domain]=paths[i].hostedFileDirectory+v3Lander.hostedFileURL;}}
if(v3Lander.hostToPath){try{var url=v3Lander.hostToPath[window.location.host.toUpperCase()];}catch(e){}
v3Lander.hostedFileURL=url||this.defaultHostToPath||v3Lander.hostedFileURL;}},assignDomain:function(){try{if(this.isAtHostedFileURL){var domainName=document.domain;var temp=domainName.split('.');for(var i=0;i<temp.length;i++){try{var tempwindow=null;if(window.location.search=="")
tempwindow=window.opener;else if(window.location.search.indexOf('?IFRAME')==0||window.location.search=="?IEXF")
tempwindow=window.parent;else if(window.location.search=="?BLNK")
tempwindow=window.parent;else if(window.location.search=="?XHR")
tempwindow=window.parent.parent;else if(window.location.search=="?PRXY")
tempwindow=window.parent.parent;else return;if(document.domain==tempwindow.document.domain){break;}else{temp.shift();document.domain=temp.join('.');}}
catch(ee){temp.shift();document.domain=temp.join('.');}}}}catch(e){}},embeddedHostedFile:null,embeddedDiv:null,c2cQueryData:null,registerDivRetry:0,resizeAnscestorIframe:function(){var items=name.split("||");var iframeName=items[1];var width=items[2];var height=items[3];var iframeElements=parent.parent.document.getElementsByName(iframeName);if(iframeElements.length>0){try{var iframe=iframeElements[0];iframe.style.cssText+=";"+"width: "+width+"px;"+
"height: "+height+"px;"+
"display: block;"+
"overflow: hidden;"+
"overflow-x: hidden;"+
"overflow-y: hidden;"+
"border-style: hidden;"+
"border-style: none;"+
"border-width: 0px;";}catch(e){}}},registerDiv:function(retryCount){if(!!retryCount)
v3Lander.registerDivRetry=retryCount;try{if(top["Inq"]==null)throw(new Error("Inq not ready"));if(top.Inq["fireCustomEvent"]==null)throw(new Error("fireCustomEvent not ready"));top.Inq.fireCustomEvent("IframeC2C",{div:v3Lander.embeddedDiv,queryData:v3Lander.c2cQueryData});}catch(e){if(--(v3Lander.registerDivRetry)>0)
window.setTimeout(v3Lander.registerDiv,500);}},resizeIframe:function(width,height){var winName=!!window.name?window.name.replace(/\n|<.*?>/g,"").replace(/\"/g,'\\\''):window.name;var name="RESIZE||"+winName+"||"+width+"||"+height;var div=document.createElement("div");div.innerHTML='<ifr'+'ame id="inqChatStage" name="'+name+'" src="'+this.embeddedHostedFile+'?RSC2C"'
+' style="z-index:9999999;overflow:hidden;position:absolute;height:1px;width:1px;left:0px;top:0px;border-style: none;border-width: 0px;display: none;"'
+' scrolling="NO"'
+' frameborder=0'
+'></ifr'+'ame>';var ifrm=div.firstChild;document.body.appendChild(ifrm);},setSource:function(attributes,domain){v3Lander.embeddedHostedFile=v3Lander.getHostedFileURL(domain);v3Lander.embeddedDiv.innerHTML="";var image=new Image();image.onload=function(e){v3Lander.resizeIframe(this.width,this.height);return false;};for(attr in attributes){image.setAttribute(attr,attributes[attr]);}
if(!!image.onclick){try{if(!!image.style["cursor"])image.style.cursor="pointer";else image.style.cssText+=";cursor: pointer;cursor: hand;";}catch(e){};var fun=""+image.onclick;if(fun.indexOf("function")!=0){var funInner=image.onclick;image.onclick=new Function(funInner);}}
v3Lander.embeddedDiv.appendChild(image);},fixV3IFrames:function(div){var inqFrames=div.getElementsByTagName("IFRAME");div.style.cssText="overflow:hidden;position:absolute;height:1px;width:1px;left:0px;top:0px;"
+"border-style: none;border-width: 0px;";for(var ix=0;ix<inqFrames.length;ix++)
{inqFrame=inqFrames[ix];inqFrame.allowTransparency="true";inqFrame.border="0";inqFrame.frameBorder="no";inqFrame.frameSpacing=0;inqFrame.marginWidth=0;inqFrame.style.cssText="z-index:9999999;overflow:hidden;position:absolute;left:0px;top:0px;width:1px;height:1px;border-style: none;border-width: 0px;BACKGROUND-COLOR: Transparent;";}},prepareBeforeUnloadForEH:function(){if(!inqFrame.Inq.EC.isInitialized()){window.onbeforeunload=function(evt){inqFrame.Inq.EH.fireBeforeUnloadEvent();}}},prepareBeforeUnload:function(atxt,ctxt,cancelFcn,showImage,imageElement){window.onbeforeunload=function(evt){if(inqFrame.Inq.EH.isInitialized()){inqFrame.Inq.EH.fireBeforeUnloadEvent();}
if(inqFrame.Inq.EC.update()){if(showImage){var positionX=(window.innerWidth-imageElement.width)/2;var positionY=(window.innerHeight-imageElement.height)/2;var style=inqFrame.frameElement.style;style["display"]="block";style["z-index"]="9999999";style["overflow"]="hidden";style["position"]="absolute";style["height"]=imageElement.height+"px";style["width"]=imageElement.width+"px";style["left"]=positionX+"px";style["top"]=positionY+"px";style["border-style"]="none";style["border-width"]="0px";inqFrame.Inq.CHM.isImagePosition=true;}
inqFrame.Inq.EC.fireBeforeExitConfirmationEvent();if(atxt&&navigator.userAgent.indexOf("Firefox")<0){alert(atxt);}
window.onbeforeunload=null;setTimeout(cancelFcn,200);return String(ctxt);}};},initV3Frame:function(){if(window.frameElement)
window.clientwin=window.parent;else if(window.opener)
window.clientwin=window.opener;if(window.clientwin)
window.clientwin.inqFrame=window;window.inqFrame=window;window.name=opener?"_inqPersistentChat":"inqV3";this.insertLandingTag();},reload:function(){this.domReady=false;self.setTimeout("v3Lander._reload()",50);},_reload:function(){var chatStage=document.getElementById("inqChatStage");var corner=document.getElementById("inqDivResizeCorner");var title=document.getElementById("inqTitleBar");if(chatStage){document.body.removeChild(chatStage);}
if(corner){document.body.removeChild(corner);}
if(title){document.body.removeChild(title);}
window.inqFrame=null;window.Inq=null;this.start();},createV3Frame:function(){var div=document.createElement("div");var port=(document.location.port=="")?"":(":"+document.location.port);var iframesrc=((v3Lander.hostedFileURL).indexOf("/")==0)?document.location.protocol+'//'+document.location.hostname+port+v3Lander.hostedFileURL
+'?IFRAME'+(window.v3LanderConfig.iframeSrcParams||""):v3Lander.hostedFileURL;if(top!=parent){var rand=(Math.round(Math.random()*1000000000000)).toString(36);iframesrc+=(iframesrc.indexOf('?')==-1)?'?':'&';iframesrc+="rand="+rand;}
div.id="inqChatStage";div.style.cssText="z-index:9999999;overflow:hidden;position:absolute;height:1px;width:1px;left:0px;top:0px;"
+"border-style: none;border-width: 0px;";div.innerHTML='<ifr'+'ame id="inqChatStage" title="Chat Window" name="10004750" src="'+iframesrc+'"'
+' style="z-index:9999999;overflow:hidden;position:absolute;height:1px;width:1px;left:0px;top:0px;border-style: none;border-width: 0px;display: none;"'
+' scrolling="NO"'
+' frameborder=0'
+'></iframe>'
+'<div style="border-width: 0px; position: absolute; z-index: 9999999; left: 0px; top: 0px; cursor: move; height: 55px; width: 410px; display: none;" id="inqTitleBar">'
+'<img />'
+'</div>'
+'<div style="border-width: 0px; position: absolute; z-index: 9999999; left: 0px; top: 0px; display:none; height: 0px; width: 0px;" id="inqResizeBox">'
+'<div style="border-width: 0px; position: absolute; z-index: 9999999; left: 424px; top: 284px; cursor: se-resize; height: 16px; width: 16px; display: none;" id="inqDivResizeCorner"></div>';var bdy=document.getElementsByTagName("BODY");if(bdy&&bdy[0]){var iframes=div.getElementsByTagName("IFRAME");var divs=div.getElementsByTagName("DIV");if(iframes)for(ix=iframes.length-1;ix>-1;--ix)
bdy[0].appendChild(iframes[ix]);if(divs&&divs.length>0)for(ix=divs.length-1;ix>-1;--ix)
bdy[0].appendChild(divs[ix]);}
if(iframesrc==this.hostedFileURL){var stg=document.getElementById("inqChatStage");var doc=(stg.contentDocument)?stg.contentDocument:stg.contentWindow.document;if(typeof(doc)=="undefined"||doc==null)return;doc.open("replace");doc.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">\n'
+'<html><head><title></title>\n'
+'<meta http-equiv=Content-Type content="text/html; charset=utf-8">\n'
+'</head>\n'
+'<body>\n'
+'<script type="text\/javascript" language="javascript" charset="utf-8" \n'
+'\t\tsrc="'+v3Lander.normalizeProtocol(window.v3LanderConfig.vanityDomain||'https://bofa.inq.com')+'/chatskins/launch/inqChatLaunch10004750.js"><\/script>\n'
+'</body>\n'
+'</html>');doc.close();}
v3Lander.fixV3IFrames(div);},loadScript:function(name){var bdy=document.getElementsByTagName("BODY");if(bdy&&bdy[0]){var srctag=document.createElement("SC"+"RIPT");srctag.src=(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com").replace(/^HTTPS?:/i,window.location.protocol)+name;srctag.type="text/javascript";srctag.charset="utf-8";srctag.language="javascript";bdy[0].appendChild(srctag);}},inqSiteDataFun:null,inqRulesEngineFun:null,mbusToLoad:[],page:null,cgIDs:null,isBupMode:false,isRplMode:false,loadedMbuRuleDataFuns:[],requestPage:function(){this.resolvePage();},getPage:function(){return this.page;},getContentGroupIDs:function(){return this.cgIDs;},resolvePage:function(){var requestUrl="/tagserver/launch/resolvePage?siteID=10004750&url="+encodeURIComponent(document.URL)+"&codeVersion="+encodeURIComponent(v3Lander.codeVersion);var overriddenPageId=null;if(window.inqSiteID){overriddenPageId=window.inqSiteID;}else if(window.parent&&window.parent.inqSiteID){overriddenPageId=window.parent.inqSiteID;}
if(overriddenPageId){requestUrl+="&overridePageId="+encodeURIComponent(overriddenPageId);}
this.loadScript(requestUrl);},applyPage:function(data){var contains=function(a,obj){for(var i=0;i<a.length;i++){if(a[i]===obj){return true;}}
return false;};var prepareMbusList=function(bUnits){var mbusToLoad=[];for(var i=0;i<bUnits.length;i++){if(!contains(mbusToLoad,bUnits[i])){mbusToLoad.push(bUnits[i]);}}
return mbusToLoad;};if(this.isBupMode&&data.bUnits){this.mbusToLoad=prepareMbusList(data.bUnits);}
if(this.isRplMode&&data.page){this.page=data.page;}
if(this.isRplMode&&data.cgIDs){this.cgIDs=data.cgIDs;}
this.createV3Frame();},initSiteDefaultData:function(siteData,rulesEngineData,landingData){v3Lander.landingData=landingData;v3Lander.inqSiteDataFun="var initSiteData = "+siteData.toString();v3Lander.inqRulesEngineFun="var initRulesData = "+rulesEngineData.toString();if(!v3Lander.isBupMode||parent.v3Lander.mbusToLoad.length==0){v3Lander.loadTcFramework();}else{v3Lander.loadMbuData();}},loadTcFramework:function(){var bdy=document.getElementsByTagName("BODY");if(bdy&&bdy[0]){var srctag=document.createElement("SC"+"RIPT");srctag.src=v3Lander.normalizeProtocol(window.v3LanderConfig.cdnDomain+"/launch/tcFramework.min.js?codeVersion="+encodeURIComponent(v3Lander.codeVersion));srctag.type="text/javascript";srctag.charset="utf-8";srctag.language="javascript";bdy[0].appendChild(srctag);}},loadMbuData:function(){for(var i=0;i<parent.v3Lander.mbusToLoad.length;i++){this.loadMbuDataForBU(parent.v3Lander.mbusToLoad[i]);}},buDataCallbackFcn:null,loadMbuDataForBU:function(buID,callback){if(!!callback){this.buDataCallbackFcn=callback;}
v3Lander.loadScript("/chatskins/launch/site_10004750_bu_"+buID+".js?codeVersion="+encodeURIComponent(v3Lander.codeVersion));},applyMbuRuleData:function(mbuRuleData){if(this.buDataCallbackFcn){this.buDataCallbackFcn(mbuRuleData);this.buDataCallbackFcn=null;}
else{v3Lander.loadedMbuRuleDataFuns[v3Lander.loadedMbuRuleDataFuns.length]=mbuRuleData.toString();if(v3Lander.loadedMbuRuleDataFuns.length==parent.v3Lander.mbusToLoad.length){v3Lander.loadTcFramework();}}},insertLandingTag:function(){var bdy=document.getElementsByTagName("BODY");if(bdy&&bdy[0]){var srctag=document.createElement("SC"+"RIPT");srctag.src=v3Lander.normalizeProtocol(window.v3LanderConfig.cdnDomain+"/launch/site_10004750_default.js?codeVersion="+encodeURIComponent(this.codeVersion));srctag.type="text/javascript";srctag.charset="utf-8";srctag.language="javascript";bdy[0].appendChild(srctag);}},insertPostToServerTag:function(){insertScript("/tagserver/postToServer.js?codeVersion="+encodeURIComponent(this.codeVersion));function insertScript(name){var srctag=document.createElement("SC"+"RIPT");srctag.src=(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com")+name;srctag.type="text/javascript";srctag.charset="utf-8";srctag.language="javascript";document.body.appendChild(srctag);}},parseC2CQueryString:function(){var queryStringIndex=window.location.href.indexOf("?C2C");var queryString=window.location.href.substring(queryStringIndex+4);if(queryString.length>1){var c2cQueryData="{";var queryStringPairs=queryString.substring(1).split("&");for(var i=0;i<queryStringPairs.length;i++){var pair=queryStringPairs[i].split("=");if(pair.length>=1||pair.length<=2)
c2cQueryData+=(i==0?"":", ")
+pair[0]+": "
+(pair.length==2?"\""+unescape(pair[1])+"\"":"\"\"");}
c2cQueryData+="}";v3Lander.c2cQueryData=c2cQueryData;}},renderC2CDiv:function(){document.body.style.cssText="border-style: none; border-width: 0px; margin: 0px; padding: 0px;overflow: hidden;overflow-x: hidden;overflow-y: hidden;";var c2cdiv=document.createElement("DIV");c2cdiv.id=window.name;document.body.appendChild(c2cdiv);v3Lander.embeddedDiv=c2cdiv;c2cdiv["setSource"]=v3Lander.setSource;},onDomReady:function(){if(v3Lander.domReady)return;v3Lander.domReady=true;if(window.location.href.indexOf("?C2C")!=-1){try{v3Lander.renderC2CDiv();v3Lander.parseC2CQueryString();v3Lander.registerDiv(200);}catch(e){}
return;}
try{if(window!=window.parent&&!v3Lander.isAtHostedFileURL&&window.document.domain==window.parent.document.domain){return;}}catch(e){}
if(!this.v3Frame){if(this.isBupMode||this.isRplMode){this.requestPage();}
else{this.createV3Frame();}}else{this.initV3Frame();}},testReady:function(){var WAIT_PERIOD=100;if(typeof jQuery!="undefined"&&jQuery.isReady){setTimeout("v3Lander.onDomReady()",1);}else if(!v3Lander.v3Frame&&false){setTimeout("v3Lander.onDomReady()",1);}else if(typeof document.readyState=="undefined"){if(document.addEventListener){document.addEventListener("load",function(){setTimeout("v3Lander.onDomReady();",0);},false);document.addEventListener("DOMContentLoaded",function(){setTimeout("v3Lander.onDomReady();",0);},false);}
setTimeout("v3Lander.onDomReady()",WAIT_PERIOD);}else{var tridentVersion=navigator.userAgent.match(/Trident\/(\d+)/);var newIeVersion=false;if(tridentVersion!=null&&tridentVersion.length==2&&parseInt(tridentVersion[1])>=6){newIeVersion=true;}
if(document.readyState=="complete"&&newIeVersion){setTimeout("v3Lander.onDomReady();",0);}else if(!newIeVersion&&document.all&&!window.opera){try{var isExitChat=false;if(isExitChat){if(this.isAtHostedFileURL){document.write('<iframe id="tcBBFrame" src="'+v3Lander.normalizeProtocol(window.v3LanderConfig.vanityDomain||'https://bofa.inq.com')+'/tagserver/v3/blank.html" '+
'frameborder="0" style="height:0px;width:0px;visibility:hidden" '+
'onload="window.v3Lander._tcBBFrameOnload()"></iframe>');}}
document.write('<sc'+'ript type="text/javascript" id="v3ContentLoadTag" defer="defer" '+'></sc'+'ript>');}catch(e){this.log(e);}
var v3ContentLoadTag=document.getElementById("v3ContentLoadTag");if(v3ContentLoadTag){v3ContentLoadTag.onreadystatechange=function(){v3Lander.domState=this.readyState;if(this.readyState=="complete"){setTimeout("v3Lander.onDomReady()",WAIT_PERIOD);}};}
else{this.uponError();}}
else if(document.addEventListener||(newIeVersion&&document.attachEvent)){if(/loaded|complete/.test(document.readyState))
setTimeout("v3Lander.onDomReady();",0);else{setTimeout(arguments.callee,100);return;}}}},uponError:function(){if(document.readyState=="complete"){setTimeout("v3Lander.onDomReady()",1);}
else{document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);setTimeout("v3Lander.onDomReady()",1);}});}},prepBBDetect:function(){var blankURL=v3Lander.normalizeProtocol(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com")+"/tagserver/v3/blank.html";var tc_iframe_loaded_flag=false;function _tcBBFrameOnload(){if(!tc_iframe_loaded_flag&&document.getElementById("tcBBFrame").src.indexOf("?tc=1")==-1){setTimeout('document.getElementById("tcBBFrame").src ="'+blankURL+'?tc=1";',100);}else if(!tc_iframe_loaded_flag&&document.getElementById("tcBBFrame").src.indexOf("?tc=1")!=-1){tc_iframe_loaded_flag=true;}else if(tc_iframe_loaded_flag){window.inqFrame.Inq.EC.setEnabled(false);history.back();}}
v3Lander._tcBBFrameOnload=_tcBBFrameOnload;var placedIframe=0;var isIE=navigator.userAgent.toLowerCase().indexOf("msie")>-1;function _placeTcBBFrame(){if(placedIframe==0&&!isIE){placedIframe=1;var dynamicIframe=document.createElement('div');dynamicIframe.innerHTML='<iframe id="tcBBFrame" src="'+blankURL+'" frameborder="0" style="height:0px;width:0px;visibility:hidden" onload="v3Lander._tcBBFrameOnload()"></iframe>';document.getElementsByTagName('body')[0].appendChild(dynamicIframe);}}
v3Lander._placeTcBBFrame=_placeTcBBFrame;function placeTcBBFrame_pre(){setTimeout('v3Lander._placeTcBBFrame()',100);}
if(window.addEventListener){window.addEventListener('load',placeTcBBFrame_pre,true);}else if(window.attachEvent){window.attachEvent('onload',placeTcBBFrame_pre);}else{placeTcBBFrame_pre();}},removeNode:function(id){try{var tempID=document.getElementById(id);var tag=null;if(!!tempID)
tag=parent.parent.tempID;if(tag){tag=tag.parentNode;var p=tag.parentNode;var grandparent=parent.parent;if(grandparent["Inq"]==null)return;if(grandparent.Inq["removeProxyNode"]==null)
grandparent.Inq["removeProxyNode"]=new grandparent.Function("id",'var node=document.getElementById(id);\n'
+'try{\n'
+'if(!!node) {\n'
+'var p=node.parentNode;\n'
+'p.removeChild(node);\n'
+'node=p;\n'
+'if(!!node) {\n'
+'p=node.parentNode;\n'
+'p.removeChild(node);\n'
+'}\n'
+'}\n'
+'}catch(e){}\n');grandparent.setTimeout('Inq.removeProxyNode("'+id+'")',100);}}catch(ee){}},removeNodeXF:function(id){try{var tag=parent.parent.document.getElementById(id);if(tag){tag=tag.parentNode;var p=tag.parentNode;if(p)try{p.removeChild(tag);}catch(e){}}}catch(e){}},wrapWithTryCatch:function(code){return"try {\n"
+code
+"\n} catch(e){"
+"Inq.log('ERROR:' + e.message);"
+"};";},xframeToIjsf:function(){var items=name.split("||");var code=decodeURIComponent(items[3]);var chatStageWindow=window.parent.parent.parent.document.getElementById('inqChatStage').contentWindow;chatStageWindow.setTimeout(v3Lander.wrapWithTryCatch(code),1);},xhfToIjsf:function(){var code=decodeURIComponent(name);var chatStageWindow=window.parent.parent;chatStageWindow.setTimeout(v3Lander.wrapWithTryCatch(code),1);},postReturnsIE:function(){var items=name.split("||");var code=decodeURIComponent(items[1]);var grandParent=window.parent;grandParent.setTimeout(v3Lander.wrapWithTryCatch(code),1);v3Lander.removeNode(items[0]);},postReturns:function(){var items=name.split("||");var code=decodeURIComponent(items[1]);var grandParent=window.parent.parent;grandParent.setTimeout(v3Lander.wrapWithTryCatch(code),1);v3Lander.removeNode(items[0]);},start:function(){if(navigator.userAgent.indexOf("Opera")>=0){return;}
try{this.assignDomain();v3Lander.v3Frame=(window.frameElement!=null&&typeof(window.frameElement)!="undefined"&&window.frameElement.id=="inqChatStage")}catch(e){v3Lander.v3Frame=false}
var isExitChat=false;if(isExitChat){if(this.isAtHostedFileURL)
this.prepBBDetect();}
v3Lander.testReady();}};v3Lander.establishHostedFileURL();(v3Lander).isAtHostedFileURL=(window.location.href.indexOf(v3Lander.hostedFileURL)>-1);(v3Lander).assignDomain();if(window.location.href.indexOf("?BLNK")!=-1){}
else if(window.location.href.indexOf("?CCFRM")!=-1){var host=(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com").replace(/^https?:\/\//,"");var url="http://"+window.document.domain+"/tagserver/ccform/getCreditCardForm?host="+host;window.location.replace(url);}
else if(window.location.href.indexOf("?CCTKN=1")!=-1){var s=document.createElement("script");var params=window.location.href.replace(/^.*\?/,"?");var src=(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com")+"/tagserver/cctoken/getToken"+params;s.src=src;document.head.appendChild(s);}
else if(window.location.href.indexOf("?CCTKN=2")!=-1){var s=document.createElement("script");var params=window.location.href.replace(/^.*\?/,"?");var src=(window.v3LanderConfig.vanityDomain||"https://bofa.inq.com")+"/tagserver/cctokentest/getToken"+params;s.src=src;document.head.appendChild(s);}
else if(window.location.href.indexOf("?XHR")!=-1){v3Lander.xhfToIjsf();window.close();}
else if(window.location.href.indexOf("?IEXF")!=-1){v3Lander.assignDomain();v3Lander.postReturnsIE();window.close();}
else if(window.location.href.indexOf("?C2C")!=-1){v3Lander.testReady();}
else if(window.location.href.indexOf("?RSC2C")!=-1){v3Lander.resizeAnscestorIframe();}
else if(window.location.href.indexOf("?POST2SERVER")!=-1){v3Lander.insertPostToServerTag();}
else if(!!window.name&&window.name.indexOf("||")!=-1&&v3Lander.isAtHostedFileURL){if(window.location.search=="?XFRM"){v3Lander.xframeToIjsf();window.close();}
else{v3Lander.assignDomain();v3Lander.postReturns();window.close();}}
else{if(!window.v3LanderConfig.customLaunching){v3Lander.start();}}}
