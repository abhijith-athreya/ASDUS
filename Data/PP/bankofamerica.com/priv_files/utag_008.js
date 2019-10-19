//tealium universal tag - utag.41 ut4.0.201706150108, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function(parent,name,context,definition){if(!context||!context[parent]||!Array.prototype.filter){return;}
context[parent]['plugins'][name]=definition();})('bactm','convertro',typeof window!=='undefined'?window:null,function(){var parent='bactm',ba=window[parent],win=window,doc=document||{},version='1.3.0',ddo=win.digitalData,cvoConfig={clientName:'bankofamerica',siteId:'1'},cvoSID,cvoStore=new ba.Store('cvo'),pageId,deviceId,currentUrl=win.location.href,referrerUrl=doc.referrer||'',currentUA=navigator.userAgent,apiBaseUrl='https://sp1.convertro.com/',liveRampSyncUrl='https://idsync.rlcdn.com/366738.gif',SID_DIGITS='23456789ABCDEFGHJKMNPQRSTUVWXYZ'.split(''),SID_LENGTH=12,CVO_URL_MAP={'pageview':'api/hit','impression':'view/vt/api','user':'api/user','click':'api/hit','event':'api/hit'},MMC_MAP={},SP_MAP={'cvosrc':['onsite','2.0','^2.1'],'cvo_cid':'1','cvo_pid':'2.0','cvo_crid':'^2.2','cvo_lob':'0'},CVO_MAP=['cvosrc','cvo_cid','cvo_pid','cvo_crid','cvo_lob'],DISABLE_LIVERAMP=['homepage:Content:Personal;home_personal','homepage:Content;home_personal','homepage:Content:smbus;homepage_smbus'],LOG_LEVEL={OFF:10,FATAL:5,ERROR:4,WARN:3,INFO:2,DEBUG:1};if(!ddo)return;var _tracker=function(eventType,cvo){var baseParams={'sid':cvoSID,'cip':'host','pag':currentUrl,'ref':referrerUrl,'cua':currentUA,'ts':Math.floor(Date.now()/1000)}
if(typeof cvo==='object'){for(var key in cvo){if(cvo.hasOwnProperty(key))baseParams[key]=cvo[key];}}
var qs=new ba.QueryString('');qs.load(baseParams);var pixelUrl=apiBaseUrl+CVO_URL_MAP[eventType]+'/'+cvoConfig.clientName+'/'+cvoConfig.siteId+'/'+'?'+qs.toString(),pixel=new ba.PixelTag(pixelUrl);pixel.appendToBody();}
var _trackClick=function(obj){if(!obj||!obj.href)return;var id=obj.id||obj.getAttribute('name')||'',sp=ba.QueryString(obj.href||'').get('cm_sp'),cvo=sp?_convertSPtoCVO(sp):{};cvo['click_id']=id;_tracker('click',cvo);}
var _trackEvent=function(eventType){var cvo={'typ':eventType,'val':eventValue?eventValue:1}
_tracker('event',cvo)}
var _trackImpression=function(cvo){_tracker('impression',cvo);}
var _trackPageview=function(){var cvo=_getPageviewParams();_tracker('pageview',cvo);_liveRampSync();}
var _trackSPImpressions=function(){var anchors=doc.getElementsByTagName('a');for(var i=0,len=anchors.length;i<len;i++){var sp=ba.QueryString(anchors[i].href).get('cm_sp');if(!sp)continue;anchors[i].addEventListener('click',function(e){_trackClick(this);});}}
var _trackUser=function(){var id=ba.ddo.get('user.olb3rdpartyid','');if(!id)return;var cvoLongStorage=new ba.Store('cvo',true),cvo={'id':ba.ddo.get('user.olb3rdpartyid','')};_tracker('user',cvo);cvoLongStorage.set(cvoSID,id);cvoLongStorage.save();}
var _convertMMCtoCVO=function(mmc){var mmc=mmc||'',mmcParts=mmc.split('-_-'),partsLen=mmcParts.length,cvo={};for(var key in MMC_MAP){cvo[key]=partsLen>MMC_MAP[key]?mmcParts[MMC_MAP[key]]:'';}
return cvo;}
var _convertSPtoCVO=function(sp){var spParts=sp.split('-_-'),partsLen=spParts.length,cvo={};for(var key in SP_MAP){var positions=Array.isArray(SP_MAP[key])?SP_MAP[key]:[SP_MAP[key]],val=typeof cvo[key]!=='undefined'?cvo[key]:'';for(var i=0,len=positions.length;len>i;i++){var pos=positions[i];if(isNaN(parseFloat(pos.replace('^','')))){val=pos+'.';continue;}
var dot=pos.indexOf('.'),end=dot===-1?pos.length:dot,topPos=pos.substring(0,end).replace('^',''),param=partsLen>topPos?spParts[topPos]:'';if(dot===-1){val+=param+'.';continue;}
var subMap=pos.split('.'),paramParts=param.split('_'),subPartsLen=paramParts.length,subPos=parseInt(subMap[1]),caret=pos.indexOf('^')>-1;if(!caret){val+=paramParts[subPos]+'.';continue;}
for(var j=subPos;j<subPartsLen;j++){val+=paramParts[j]+'_';}
val=val.slice(0,-1)+'.';}
cvo[key]=val.slice(0,-1);}
return cvo;}
var _generateSid=function(){var xor_array=[];if(win.crypto&&win.crypto.getRandomValues&&win.Uint8Array){xor_array=new Uint8Array(SID_LENGTH);win.crypto.getRandomValues(xor_array);}
else{var i=SID_LENGTH;while(i--)xor_array[i]=0;}
var sid='';var i=SID_LENGTH;while(i--){sid=sid+SID_DIGITS[(256*Math.random()^xor_array[i])%SID_DIGITS.length];}
return sid;}
var _getCurrentPageId=function(){if(win.cG7&&win.cG7.cM0&&win.cm_ClientID)return win.cG7.cM0[cm_ClientID];return ba.ddo.pageInfo.get('pageID');}
var _getCVOParamsFromUrl=function(){var qs=ba.QueryString(),cvo={};for(var i=0,len=CVO_MAP.length;i<len;i++){var val=qs.get(CVO_MAP[i]);if(val)cvo[CVO_MAP[i]]=val;}
return cvo;}
var _getPageviewParams=function(){var qs=ba.QueryString(),cvosrc=qs.get('cvosrc');if(cvosrc)return _getCVOParamsFromUrl();var mmc=qs.get('cm_mmc')
if(mmc)return _convertMMCtoCVO(mmc);var sp=qs.get('cm_sp');if(sp)return _convertSPtoCVO(sp);return{};}
var _liveRampSync=function(){if(DISABLE_LIVERAMP.indexOf(pageId)>-1||currentUrl.indexOf('/homepage/overview.go')>-1)return;if(cvoStore.get('liveRampSync')==true)return;var liveRampTag=new ba.PixelTag(liveRampSyncUrl+'?partner_uid='+cvoSID);liveRampTag.appendToBody();cvoStore.set('liveRampSync',true);cvoStore.save();}
var _setDeviceId=function(){var cookies=new ba.Cookies(),did=cookies.get('BOA_0020');if(did)deviceId=did;}
var _setSID=function(){var cvoLongStorage=new ba.Store('cvo',true),sid=cvoLongStorage.get('sid');if(!sid)sid=_generateSid();cvoLongStorage.set('sid',sid);cvoLongStorage.save();cvoSID=sid;}
var _init=function(){ba._log('bactm.plugins.convertro v'+version+' initializing.',LOG_LEVEL.INFO);pageId=_getCurrentPageId();_setSID();_setDeviceId();var cvoLongStorage=new ba.Store('cvo',true),cvoUserSync=cvoLongStorage.get(cvoSID),olb3rdpartyid=ba.ddo.get('user.olb3rdpartyid','');if(cvoUserSync||(!olb3rdpartyid||String(olb3rdpartyid).toLowerCase()==='null')){ba.ready(_trackPageview);}else{ba.ready(_trackUser);}
var impressionTimer=setTimeout(_trackSPImpressions,1250);}
_init();return{trackClick:_trackClick,trackEvent:_trackEvent,trackImpression:_trackImpression,trackPageview:_trackPageview,trackUser:_trackUser};});}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("41","bofa.main");}catch(error){utag.DB(error);}
