/*
 *  (c) 2000-2016 deviantART, Inc. All rights reserved.
 */
window.TakeOver=function(e,a,r){return f2=Function("var r;if (arguments.callee._takeover_f1)arguments.callee._takeover_f1.apply(this, arguments); r = arguments.callee._takeover_f2.apply(this, arguments); if (arguments.callee._takeover_f3)arguments.callee._takeover_f3.apply(this, arguments); return r;"),f2._takeover_f1=e,f2._takeover_f2=a,f2._takeover_f3=r,f2},window.DWait&&DWait.run("jms/lib/takeover.js");
window.Refunction=function(n,e){var t,u,r;if(t=Refunction.get(n,e),!t){for(t=Function("return arguments.callee._refunction_f.apply(arguments.callee._refunction_obj, arguments.callee._refunction_args || arguments)"),t._refunction_obj=n,t._refunction_f=e,r=[],u=2;arguments.length>u;u++)r.push(arguments[u]);if(r.length&&(t._refunction_args=r),r.length||"run once"==this)return t;Refunction.lookup.push([n,e,t])}return t},Refunction.runOnce=function(n,e){return Refunction.call("run once",n,e)},Refunction.lastCall=function(n,e){return Refunction.get(n,e,!0)},Refunction.get=function(n,e,t){var u,r;for(u=0;r=Refunction.lookup[u];u++)if(r[0]==n&&r[1]==e)return t&&Refunction.lookup.splice(u,1),r[2];return null},Refunction.timeout=function(n,e){var t;for(t=Function("return arguments.callee._refunction_f.apply(arguments.callee._refunction_obj, arguments.callee._refunction_args || arguments)"),t._refunction_obj=n,t._refunction_f=e,args=[],i=2;arguments.length>i;i++)args.push(arguments[i]);return args.length||"run once"==this?(t._refunction_args=args,t):void 0},Refunction.lookup=[],window.DWait&&DWait.run("jms/lib/refunction.js");
window.App||(window.App=App={}),App.cacheResourceView=function(e,p,r,c,s){var i,o,u;if("string"==typeof c)u=c;else{u=[];for(o in c)u.push(o+":"+Number(c[o]));u.sort(),u=u.join(",")}return i=e+":"+p+":"+r+":"+u,App.resources_by_rid_cache||(App.resources_by_rid_cache={}),void 0===s?App.resources_by_rid_cache[i]:(App.resources_by_rid_cache[i]=s,void 0)},App.stuff||(App.stuff={}),window.DWait&&DWait.run("jms/lib/app.js.resource_cache.js");
PHP={$GLOBALS:{urls:{avatarurl:document.location.protocol+"//a.deviantart.net/avatars"},symbols:{"+":{userclass:"admin",description:"DeviantArt Staff"},$:{userclass:"admin",description:"DeviantArt Staff"},"@":{userclass:"admin",description:"DeviantArt Staff"},"¢":{userclass:"admin",description:"DeviantArt Staff"},"£":{userclass:"admin",description:"DeviantArt Staff"},"*":{userclass:"premium",description:"Premium Member"},".":{userclass:"hell",description:"Premium Member 'til Hell Freezes Over"},"=":{userclass:"beta",description:"Beta Tester"},":":{userclass:"hell-beta",description:"Beta Tester 'til Hell Freezes Over"},"°":{userclass:"senior",description:"Senior Member"},"`":{userclass:"senior",description:"Senior Member"},"^":{userclass:"volunteer",description:"Volunteer"},"!":{userclass:"banned",description:"Banned or Deactivated/Closed Account"},"#":{userclass:"group",description:"Group",clickthrough:document.location.protocol+"//groups.deviantart.com"},"%":{userclass:"super group",description:"Super Group",clickthrough:document.location.protocol+"//groups.deviantart.com"},"~":{userclass:"regular",description:""},"-":{userclass:"banned",description:""}},safedomains:["deviantart.com","sta.sh","fav.me","deviantart.net"],mobileprotocols:["deviantart","deviantart-rc","deviantart-preview","deviantart-sandbox","deviantart-partner"]},image_type_to_extension:function(e,r){var s,t=1,a=2,i=3;if(e=Number(e),void 0===r&&(r=!0),!e)return!1;switch(s=r?".":"",e){case t:return s+"gif";case a:return s+"jpg";case i:return s+"png";default:return s+e}},subdirize:function(e,r,s){var t,a,i;if(void 0===r&&(r=3),void 0===s&&(s=!1),t=e,r>e.length&&(r=e.length),a=e.indexOf("."),a>0&&r>a&&(r=a),1>r)return!1;for(e=e.replace(/[^A-Za-z0-9]/g,"_"),i="",s&&(e=strrev(e)),$i=0;r>$i;$i++)i+=e.substr($i,1)+"/";return i+=t},userurl:function(e){return document.location.protocol+"//"+e.toLowerCase()+".deviantart.com"},userlink:function(e,r,s,t,a){void 0===r&&(r="~");var i,n=PHP.$GLOBALS.symbols[r]?PHP.$GLOBALS.symbols[r]:PHP.$GLOBALS.symbols["~"];return void 0===s&&(s="/"),("!"===r||"-"===r)&&(t=!0),"object"==typeof e?(r=e.symbol,e=e.username):"number"==typeof e&&(e=""+e),e?(("~"==r||"-"==r)&&(a=!1),r='<span class="user-symbol '+n.userclass+'"'+'data-quicktip-text="'+n.description+'"'+'data-gruser-type="'+n.userclass+'"'+(a===!0?"onmouseover=\"if (window.QuickTip)QuickTip.show(this, 'simple')\"":"")+"></span>",t?'<span class="username-with-symbol u"><span class="'+n.userclass+' username">'+e+"</span>"+r+"</span>":(i='<span class="username-with-symbol u"><a class="username" href="'+PHP.userurl(e)+s+'">'+e+"</a>",r&&(i+=r),i+="</span>")):"<em>Nobody</em>"},usericon:function(e,r,s,t){var a;return void 0===r&&(r=1),void 0===s&&(s=!1),void 0===t&&(t=!1),e=e.toLowerCase(),a=t?' style="float:left; padding-right: 2px; padding-bottom: 2px;"':"",'<a href="'+PHP.userurl(e)+'/"><img class="avatar"'+a+' src="'+PHP.usericonurl(e,r)+'" width="50" height="50" alt="'+":icon"+e+":"+'" title="'+e+'"/></a>'},usericonlink:function(e,r,s){var t;return void 0===s&&(s=1),t=PHP.userlink(e,r),t=t.replace("</a>",'<img class="avatar" src="'+PHP.usericonurl(e,s)+'" width="50" height="50" alt=":icon'+e+':"/></a>')},usericonurl:function(e,r){var s;return void 0===r&&(r=1),$cachebuster=15&r>>2,s=r?PHP.subdirize(e.toLowerCase(),2)+PHP.image_type_to_extension(3&r):"default.gif",$cachebuster&&(s+="?"+$cachebuster),PHP.$GLOBALS.urls.avatarurl+"/"+s},isSafeURL:function(e){var r=window.PHP.$GLOBALS.safedomains;if(/^mailto:/.test(e))return!0;var s=RegExp("^("+window.PHP.$GLOBALS.mobileprotocols.join("|")+")://","i");return s.test(e)?!0:/deviantart\.com\/users\/outgoing/.test(e)||!/https?:\/\//.test(e)?!1:RegExp("\\.("+r.join("|").replace(/\./g,"\\.")+")$").test("."+e.split("/")[2])}},window.DWait&&DWait.run("jms/lib/php.js");
window.pluralize=function(e,t,r){return(e?e:"no")+" "+t+(1==e?"":r||"s")},window.htmlspecialchars=function(e){return e.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},window.time_string=function(e,t){var r,n,a,u,s,o,i,l,g,m,h,p;if(!Number(e))return"";if(n={minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26298e5,years:315576e5},s=new Date,s.setTime(1e3*Number(e)),u=new Date,m=u.valueOf()-s.valueOf(),0>m)return"Moments ago";m>3*n.days&&(p=!0),r=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["th","st","nd","rd","th"],o=s.getDate(),h=r[s.getMonth()].substr(0,3)+" "+o+", "+s.getFullYear()+", "+(s.getHours()%12||12)+":"+(s.getMinutes()>=10?"":"0")+s.getMinutes()+" "+(12>s.getHours()?"AM":"PM"),i=[];for(g in n)m>n[g]&&i.push(g);if(0==i.length)return"Moments ago";for(i=i.slice(Math.max(i.length-(t||2),0)),l=[];g=i.pop();)o=Math.floor(m/n[g]),m%=n[g],o>0&&l.push(o+" "+(1==o?g.substr(g,g.length-1):g));return l=l.join(", ")+" ago",'<span title="'+(p?l:h)+'">'+(p?h:l)+"</span>"},window.DWait&&DWait.run("jms/lib/formatting.js");if(window.DWait){DWait.count()}