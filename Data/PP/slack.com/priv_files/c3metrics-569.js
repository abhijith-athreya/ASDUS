/**
 * C3 Metrics
 *
 * http://www.c3metrics.com
 * http://www.c3tag.com
 *
 * Copyright (c) 2008 - 2013 C3 Metrics, Inc. All Rights Reserved
 * Patent Pending
 */
(function(window, undefined){
function indexOf(needle,haystack){if(haystack.length!==undefined){if(Array.prototype.indexOf){return haystack.indexOf(needle)}else{for(var i=0;i<haystack.length;i++){if(haystack[i]===needle){return i}}return -1}}return -1};
var oValidApiParamKeys=['c3api','c3apiks','c3apidt','c3apimn','c3apibg','c3apimx'], oValidClientParamKeys=['c3placement','c3creative','c3size','c3ad','c3adid','c3advertiser','c3campaign'], nidlbl={}, oClientParams=[], xnidLabels={}, reservedNids={}, c3Labels={}, gaLabels={}, labelPriority=[];
c3Labels = {"cm_mmc":{"delimiter":"-_-","glue":"-","map":[""]}};    function c3CTJScall(refBlocked,siteTitle,expirationminutes,c3cid,c3uid2,c3nid,ctcallurl,c3os,c3nidlabels,c3nidlabelaliases,clientParams,xnidLabels,reservedNids,c3Labels,c3ps,c3ip,gaLabels,labelPriority,isAccountId,ufc_id,ufc_timestamp){var c3uid1=document.cookie.match('(^|;) ?C3UID-'+c3cid+'=([^;]*)(;|)'),c3s=document.cookie.match('(^|;) ?C3S-'+c3cid+'=([^;]*)(;|)'),w=screen.width,h=screen.height,network='1',nLink=document.createElement('a'),c3referrername='';nLink.href=document.referrer;if(nLink.hostname)
c3referrername=nLink.hostname.match(/([0-9A-Za-z\-]{2,}\.[0-9A-Za-z\-]{2,3}\.[0-9A-Za-z\-]{2,3}|[0-9A-Za-z\-]{2,}\.[0-9A-Za-z\-]{2,3})$/)[0].split(':')[0];if(c3nid)
network=c3nid;else if(document.referrer){var isInIFrame=window.location!==window.parent.location,sUrl;if(isInIFrame)
sUrl=document.referrer;else{if(c3referrername!=document.domain.match(/([0-9A-Za-z\-]{2,}\.[0-9A-Za-z\-]{2,3}\.[0-9A-Za-z\-]{2,3}|[0-9A-Za-z\-]{2,}\.[0-9A-Za-z\-]{2,3})$/)[0])
network='seo-'+c3referrername.toLowerCase();else return null}
var iIndex;if(sUrl){nLink.href=sUrl;if(nLink.search){var queryString=decodeURI(nLink.search.slice(1)),aParameters=queryString.split('&'),aNidLabels=c3nidlabels.split(','),ga_values={},ga_value_count=0,nid_values={api:'',cid:'',c3_label:{channel:'',nid:''},ga_nid:'',reserved_nid:{channel:'',nid:''},xnid:{channel:'',nid:''},xnid_label:{channel:'',nid:''}},nid='';for(var i=0;i<aParameters.length;i++){var aParamSplit=aParameters[i].split('='),sKey=aParamSplit[0].toLowerCase(),sValue=aParamSplit[1];if(sValue){if(xnidLabels[sKey]){nid_values.xnid_label.channel=xnidLabels[sKey].c3ch;if(sValue&&xnidLabels[sKey].c3nid==='%param%'){nid_values.xnid_label.nid=sValue}else nid_values.xnid_label.nid=xnidLabels[sKey].c3nid}
if(typeof c3nidlabelaliases[sKey]!=='undefined'){sKey=c3nidlabelaliases[sKey]}
if(indexOf(sKey,oValidClientParamKeys)!==-1){clientParams[sKey]=sValue}
if(indexOf(sKey,oValidApiParamKeys)!==-1){if(sValue)
nid_values.api=sKey+':'+sValue}
if(typeof reservedNids[sKey]!=='undefined'){var reservedNid=reservedNids[sKey];nid_values.reserved_nid.channel='Uncategorized';if(sValue)
nid_values.reserved_nid.nid=sValue;if(typeof reservedNid.channel!=='undefined'){nid_values.reserved_nid.channel=reservedNid.channel}
if(typeof reservedNid.delimiter!=='undefined'&&typeof reservedNid.position=='number'){var split_nid=sValue.split(reservedNid.delimiter);nid_values.reserved_nid.nid=split_nid[reservedNid.position]}
if(sKey=='siteid'){nid_values.reserved_nid.nid=nid_values.reserved_nid.nid.replace(/\./g,'*').replace(/_/g,'/')}}
if(sKey=='c3ch'){nid_values.xnid.channel=sValue}
if(sKey=='c3nid'){if(sValue)
nid_values.xnid.nid=sValue}
if(sKey=='c3ps'){if(sValue)
c3ps=sValue}
if(sKey=='c3ip'){if(sValue)
c3ip=sValue}
if(indexOf("'"+sKey+"'",aNidLabels)!==-1){if(nid_values.cid.length)
nid_values.cid+=',';if(sValue)
nid_values.cid+=sValue}
if(typeof c3Labels[sKey]!=='undefined'){var label=c3Labels[sKey];if(sValue){var value_split=sValue.split(label.delimiter);if(value_split.length>1||(value_split.length===1&&value_split[0])){for(var j=0,len=value_split.length;j<len;j++){switch(label.map[j]){case 'channel':nid_values.c3_label.channel=value_split[j];break;case 'nid':if(nid_values.c3_label.nid.length>0){nid_values.c3_label.nid+=(label.glue?label.glue:',')}
nid_values.c3_label.nid+=value_split[j];break;case 'client_creative':break;case 'client_placement':break;case 'client_size':break}}}}}
if(gaLabels.length&&indexOf("'"+sKey+"'",gaLabels)!==-1){ga_values["'"+sKey+"'"]=sValue;ga_value_count++}}}
if(ga_value_count&&gaLabels.length){for(var i=0,len=gaLabels.length;i<len;i++){if(typeof ga_values[gaLabels[i]]!==undefined){if(nid_values.ga_nid.length){nid_values.ga_nid+=','}
nid_values.ga_nid+=ga_values[gaLabels[i]]}}}
if(labelPriority.length){for(var i=0,len=labelPriority.length;i<len;i++){switch(labelPriority[i]){case 'api':if(nid_values.api!==''){nid=nid_values.api}
break;case 'c3-label':if(nid_values.c3_label.nid!==''){nid=nid_values.c3_label.nid;if(nid_values.c3_label.channel!==''){nid="x-nid:"+nid_values.c3_label.channel+'<-ch-nid->'+nid_values.c3_label.nid}}
break;case 'cid':if(nid_values.cid!==''){nid=nid_values.cid}
break;case 'google-analytics':if(nid_values.ga_nid!==''){nid='ga-nid: '+nid_values.ga_nid}
break;case 'reserved-nid':if(nid_values.reserved_nid.nid!==''&&nid_values.reserved_nid.channel!==''){nid='x-nid:'+nid_values.reserved_nid.channel+'<-ch-nid->'+nid_values.reserved_nid.nid}
break;case 'xnid':if(nid_values.xnid.nid!==''&&nid_values.xnid.channel!==''){nid='x-nid:'+nid_values.xnid.channel+'<-ch-nid->'+nid_values.xnid.nid}
break;case 'xnid-label':if(nid_values.xnid_label.nid!==''&&nid_values.xnid_label.channel!==''){nid='x-nid:'+nid_values.xnid_label.channel+'<-ch-nid->'+nid_values.xnid_label.nid}
break}}}else{if(nid_values.xnid_label.nid!==''&&nid_values.xnid_label.channel!=='')
nid='x-nid:'+nid_values.xnid_label.channel+'<-ch-nid->'+nid_values.xnid_label.nid;if(nid_values.cid!=='')
nid=nid_values.cid;if(nid_values.ga_nid!==''){nid='ga-nid: '+nid_values.ga_nid}
if(nid_values.c3_label.nid!==''){nid=nid_values.c3_label.nid;if(nid_values.c3_label.channel!==''){nid="x-nid:"+nid_values.c3_label.channel+'<-ch-nid->'+nid_values.c3_label.nid}}
if(nid_values.reserved_nid.nid!==''&&nid_values.reserved_nid.channel!=='')
nid='x-nid:'+nid_values.reserved_nid.channel+'<-ch-nid->'+nid_values.reserved_nid.nid;if(nid_values.api!=='')
nid=nid_values.api;if(nid_values.xnid.nid!==''&&nid_values.xnid.channel!=='')
nid='x-nid:'+nid_values.xnid.channel+'<-ch-nid->'+nid_values.xnid.nid}
if(nid)
network=nid}}}
if(c3s&&c3uid1&&network==1&&(isAccountId==0||c3uid1[2]==c3uid2)){return null}
if(c3uid1){var date=new Date(),c3expire=date.setTime(date.getTime()+(expirationminutes*60*1000)),domain_array=document.domain.split('.'),domain_array_length=domain_array.length,hostdomain='.'+domain_array[domain_array_length-2]+'.'+domain_array[domain_array_length-1];c3uid1=c3uid1[2];c3expire=date.toGMTString();document.cookie="C3S-"+c3cid+"=on"+";expires="+c3expire+";path=/;domain="+hostdomain+";"}
var c3randomid=Math.floor((Math.random()*10000)+1),ctcallurl=ctcallurl+"?iN="+c3randomid,ctdataString="&nid="+escape(network)+"&cid="+escape(c3cid)+"&c3uid1="+escape(c3uid1)+"&c3uid2="+escape(c3uid2);if(siteTitle)ctdataString+='&title='+escape(siteTitle);if(c3referrername)
ctdataString+='&tld='+c3referrername;if(c3ps)
ctdataString+='&c3ps='+c3ps;if(refBlocked){ctdataString+='&url='+window.location}
if(c3ip)
ctdataString+='&c3ip='+c3ip;for(var i in clientParams)
if(clientParams.hasOwnProperty(i)&&clientParams[i])
ctdataString+="&c3params["+i+"]="+escape(clientParams[i]);if(isAccountId!=0)
ctdataString+="&c3acid=1";if(ufc_id&&ufc_timestamp){ctdataString+="&ufc_id="+ufc_id+"&ufc_ts="+ufc_timestamp}
var ctcallurl=ctcallurl+ctdataString+"&w="+escape(w)+"&h="+escape(h)+"&os="+escape(c3os),c3scr=document.getElementsByTagName('script')[0],c3s1=document.createElement("script");c3s1.src=ctcallurl;c3s1.id='c3ct'+c3randomid;c3s1.type='text/javascript';c3scr.parentNode.insertBefore(c3s1,c3scr)}
var nidlbl={},oClientParams=[],xnidLabels={},reservedNids={},c3Labels={},gaLabels={},labelPriority=[]

    
    c3CTJScall(true,document.title,30,'569','209647788177156224','','//569-ct.c3tag.com/ctv4/ctcall.php','Linux',"'c3','utm_source','utm_medium','utm_campaign','cvosrc'",nidlbl, oClientParams,xnidLabels,reservedNids,'1','','','','');
})(this);
