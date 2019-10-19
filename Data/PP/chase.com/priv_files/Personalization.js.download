
/* Begin Source: _personalization.js */
function Hashtable()
{this.Clear=function(){this.Table=new Array();}
this.ContainsKey=function(key){var exists=false;for(var i in this.Table){if(i==key&&this.Table[i]!=null){exists=true;break;}}return exists;};this.Get=function(key){var rv=this.Table[key];return rv?rv:null;};this.Put=function(key,value){if(key==null||value==null){return;}else{this.Table[key]=value;}};this.Remove=function(key){var rtn=this.Table[key];this.Table[key]=null;return rtn;};this.Table=new Array();}
function PersonalizationCookie()
{this.CookieName="PC_1_0";this.ValueDelimiter='|';this.origFieldOrder=[];var AccountInfoKey="accts";var LastSessionIdKey="lsid";var SegmentGroupKey="segg";var SegmentIdLegacyKey="seg";var SiteKey="site";var CustomerTypeKey="ct";var UserTypeKey="ut";var ProfileTypeKey="pt";var ProfileIdKey="pfid";var ZipCodeKey="zip";var RpcListKey="RPC";var IsPreviewModeKey="preview";var AocListKey="AOC";var IsKnownKey="known";var SourceCodeKey="source_code";var SourceCodeKeyAppliedFor="source_code_applied";var ECIKey="ECI";var GUIDKey="GUID";var LastUpdateKey="lastUpdate";var LastSentKey="lastSent";var SegmentIdKey="segment";var LocaleKey="locale";this.GetLastSessionId=function(){return this.Get(LastSessionIdKey);}
this.SetLastSessionId=function(val){if(checkNameValuePair(LastSessionIdKey,val))this.Put(LastSessionIdKey,val);}
this.GetSegmentGroup=function(){return this.Get(SegmentGroupKey);}
this.SetSegmentGroup=function(val){if(checkNameValuePair(SegmentGroupKey,val))this.Put(SegmentGroupKey,val);}
this.GetSegmentId=function(){return this.Get(SegmentIdKey);}
this.SetSegmentId=function(val){if(checkNameValuePair(SegmentIdKey,val)){this.Put(SegmentIdKey,val);if(this.ContainsKey(SegmentIdLegacyKey)){this.Remove(SegmentIdLegacyKey);}}}
this.GetSite=function(){return this.Get(SiteKey);}
this.SetSite=function(val){if(checkNameValuePair(SiteKey,val))this.Put(SiteKey,val);}
this.GetCustomerType=function(){return this.Get(CustomerTypeKey);}
this.SetCustomerType=function(val){if(checkNameValuePair(CustomerTypeKey,val))this.Put(CustomerTypeKey,val);}
this.GetUserType=function(){return this.Get(UserTypeKey);}
this.SetUserType=function(val){if(checkNameValuePair(UserTypeKey,val))this.Put(UserTypeKey,val);}
this.GetProfileType=function(){return this.Get(ProfileTypeKey);}
this.SetProfileType=function(val){if(checkNameValuePair(ProfileTypeKey,val))this.Put(ProfileTypeKey,val);}
this.GetProfileId=function(){return this.Get(ProfileIdKey);}
this.SetProfileId=function(val){if(checkNameValuePair(ProfileIdKey,val))this.Put(ProfileIdKey,val);}
this.GetZipCode=function(){return this.Get(ZipCodeKey);}
this.SetZipCode=function(val){if(checkNameValuePair(ZipCodeKey,val))this.Put(ZipCodeKey,val);}
this.GetRpcList=function(){return this.Get(RpcListKey);}
this.SetRpcList=function(val){if(checkNameValuePair(RpcListKey,val))this.Put(RpcListKey,val);}
this.GetRpcCode=function(){return this.Get(RpcListKey);}
this.SetRpcCode=function(val){if(checkNameValuePair(RpcListKey,val))this.Put(RpcListKey,val);}
this.GetIsPreviewMode=function(){return this.Get(IsPreviewModeKey);}
this.SetIsPreviewMode=function(val){if(checkNameValuePair(IsPreviewModeKey,val))this.Put(IsPreviewModeKey,val);}
this.GetAocList=function(){return this.Get(AocListKey);}
this.SetAocList=function(val){if(checkNameValuePair(AocListKey,val))this.Put(AocListKey,val);}
this.GetAccountInfo=function(){return this.Get(AccountInfoKey);}
this.GetIsKnown=function(){return this.Get(IsKnownKey);}
this.SetIsKnown=function(val){if(checkNameValuePair(IsKnownKey,val))this.Put(IsKnownKey,val);}
this.GetSourceCode=function(){return this.Get(SourceCodeKey);}
this.SetSourceCode=function(val){if(checkNameValuePair(SourceCodeKey,val))this.Put(SourceCodeKey,val);}
this.GetECI=function(){return this.Get(ECIKey);}
this.SetECI=function(val){if(checkNameValuePair(ECIKey,val))this.Put(ECIKey,val);}
this.GetGUID=function(){return this.Get(GUIDKey);}
this.SetGUID=function(val){if(checkNameValuePair(GUIDKey,val))this.Put(GUIDKey,val);}
this.GetLastUpdate=function(){return this.Get(LastUpdateKey);}
this.SetLastUpdate=function(val){if(checkNameValuePair(LastUpdateKey,val))this.Put(LastUpdateKey,val);}
this.GetLastSent=function(){return this.Get(LastSentKey);}
this.SetLastSent=function(val){if(checkNameValuePair(LastSentKey,val))this.Put(LastSentKey,val);}
this.GetSourceCodeKeyAppliedFor=function(){return this.Get(SourceCodeKeyAppliedFor);}
this.SetSourceCodeKeyAppliedFor=function(val){if(checkNameValuePair(SourceCodeKeyAppliedFor,val))this.Put(SourceCodeKeyAppliedFor,val);}
this.GetLocale=function(){return this.Get(LocaleKey);}
this.SetLocale=function(val){if(checkNameValuePair(LocaleKey,val))this.Put(LocaleKey,val);}
this.Persist=PersistValues;this.Init=Parse;this.Init();}
PersonalizationCookie.prototype=new Hashtable();function Parse()
{var val=GetCookie(this.CookieName);if(val)
{var vals=val.split(this.ValueDelimiter);if(vals)
{for(var i=0;i<vals.length;i++)
{var pair=vals[i].split('=');if(pair&&pair.length==2)
{if(checkNameValuePair(pair[0],pair[1])){if(pair[0]=='seg'){this.origFieldOrder.push('segment');this.SetSegmentId(decodeURIComponent(pair[1]));SetPersonaCookie(this.CookieName,null,-30);}else{this.origFieldOrder.push(pair[0]);this.Put(pair[0],decodeURIComponent(pair[1]));}}}}}}}
function PersistValues()
{var today=genLastUpdatedDate();this.SetLastUpdate(today);this.SetLastSent(today);var serializedValue="";for(var n=0;n<this.origFieldOrder.length;n++){serializedValue+=this.origFieldOrder[n]+'='+encodeURIComponent(this.Get(this.origFieldOrder[n]));serializedValue+=this.ValueDelimiter;}
for(var key in this.Table)
{if(typeof(this.Table[key])!=='function'){if(this.Table[key]!=null&&!arrayContains(this.origFieldOrder,key))
{serializedValue+=key+'='+encodeURIComponent(this.Table[key]);serializedValue+=this.ValueDelimiter;}}}
SetPersonaCookie(this.CookieName,serializedValue,365);var gwCookieVal=this.GetCustomerType()+"|"+this.GetUserType()+"|"+this.GetProfileType()+"|"+this.GetSegmentId()+"|"+this.GetSegmentGroup()+"|"+this.GetSite();SetPersonaCookie("GW",gwCookieVal);}
function arrayContains(myarray,value){for(var i=0;i<myarray.length;i++){if(myarray[i]==value){return true;}}
return false;}
function SetPersonaCookie(name,value,expire_days)
{var httponly=false;var secure=false;var path="/";var domain=GetCookieDomain_LegacyMode();var expire_date=new Date();expire_date.setDate(expire_date.getDate()+expire_days);document.cookie=name+"="+value+
((expire_days)?";expires="+expire_date.toGMTString():"")+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+
((secure)?";secure":"");}
function GetCookieDomain_LegacyMode(){var thisDomain=null;var subs=document.domain.split(".");if(subs.length>=2){thisDomain=subs[subs.length-2]+"."+subs[subs.length-1];}
return thisDomain;}
function GetCookieDomain(){var supportedDomains=['.chase.com','.cardmemberservices.com']
var thisDomain=null;for(var candidate in supportedDomains){if(window.location.toString().indexOf(candidate)>0){thisDomain=candidate;break;}}
return thisDomain;}
function GetCookie(name)
{var pos=document.cookie.indexOf(name+"=");if(pos!=-1)
{var start=pos+name.length+1;var end=document.cookie.indexOf(";",start);if(end==-1){end=document.cookie.length;}
return unescape(document.cookie.substring(start,end));}
return null;}
function checkNameValuePair(name,value){var result=false;var SEGMENTID_MAXLEN=3;var SOURCECODE_MAXLEN=4;var THREETOFOURCHAR_DELIMITED_REGEX="^([A-Za-z0-9]{3,4}|,)*,$";var ONETOFIVECHAR_DELIMITED_REGEX="^([A-Za-z0-9]{1,5}|,)*,$";if(value&&value.length>0){switch(name){case'zip':var zipValidateRegex=new RegExp("^\\d{5}-?(\\d{4})?$");if(zipValidateRegex.test(value)){result=true;}
break;case'source_code':case'source_code_applied':if(value.length==SOURCECODE_MAXLEN){result=true;}
break;case'lsid':result=true;break;case'segg':result=true;break;case'seg':case'segment':if(value.length==SEGMENTID_MAXLEN){result=true;}
break;case'site':result=true;break;case'ct':result=true;break;case'ut':result=true;break;case'pt':result=true;break;case'pfid':result=true;break;case'RPC':var rpcRegex=new RegExp(THREETOFOURCHAR_DELIMITED_REGEX);if(rpcRegex.test(value)){result=true;}
break;case'preview':result=true;break;case'AOC':var aocRegex=new RegExp(ONETOFIVECHAR_DELIMITED_REGEX);if(aocRegex.test(value)){result=true;}
break;case'known':var knownRegex=new RegExp("^(Y|N)$");if(knownRegex.test(value)){result=true;}
break;case'ECI':result=true;break;case'GUID':var guidRegex=new RegExp('^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$');if(guidRegex.test(value)){result=true;}
break;case'lastUpdate':case'lastSent':var luRegex=new RegExp('^\\d{4}-\\d{2}-\\d{2}$');if(luRegex.test(value)){result=true;}
break;case'locale':result=true;break;case'accts':result=true;break;}}
return result;}
function genLastUpdatedDate(){var today=new Date();var mon=today.getMonth()+1;var day=today.getDate();if(mon<10){mon="0"+mon;}
if(day<10){day="0"+day;}
return today.getFullYear()+'-'+mon+'-'+day;}
/* End Source: _personalization.js */