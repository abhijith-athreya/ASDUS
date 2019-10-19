
//document.domain="mlb.com"; 
 
// identifies this page to omniture as one of our pages (as opposed 
// to a partner page; we use this for tracking the sales process):
var s_eVar16="mlb";
 
var FBVersion = "v2.0";
 
// sniff
var isWin = window.navigator.platform.toLowerCase().indexOf('win') != -1 ? 1:0;
var isMac = window.navigator.platform.toLowerCase().indexOf('mac') != -1 ? 1:0;
var isDOM = document.getElementById ? 1:0;
var isIE  = document.all ? 1:0;
var isIE4 = isIE && !isDOM ? 1:0;
var isIE5 = isIE && isDOM ? 1:0;
var isNS  = navigator.appName=='Netscape';
var isNS4 = isNS && !isDOM ? 1:0;
var isNS6 = isNS && isDOM ? 1:0;
var isOp  = window.opera ? 1:0;
var isDyn = isDOM||isIE||isNS4;
var isFirefox = window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1 ? 1:0;
 
 
 
var dq = "";
var agt= navigator.userAgent.toLowerCase();
var is_nav = ((agt.indexOf('spoofer') > -1) || (agt.indexOf('webtv') > -1) || (agt.indexOf('hotjava') > -1));
if (!is_nav) {
    if ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1)) { dq += "&os=win95"; }
    else if (agt.indexOf("mac")!=-1) { dq += "&os=mac";}
    else { dq += "&os=winX";}
} else { dq += "&os=other";}
 
dq += ((isIE) ? "&browser=IE" : "&browser=nonIE");
 
 
//domain
var matchFound=false;
var fcCookieData=["4,7,2","6,3,5","rD12MlmydnovtuVwx6ghSs","u,.?d78wagklD9efHTn/1XvY","kLYZ4IJaiT8N.-_QRbcHKPEF","`~!@+o#$bZE]|:;<>34mF={","}[&*GcV()_-st5%^U2W0","j90:/W3zABCU5pG7XOefq","c89wqZK.@+8Ai2k(m+@","4,3,8","0,9,l","d89#JXY89~;d=_aQn6@S|{"];
var _x=["8Z+2.Z.v88c:KwZ(cZ+t..+$.qZ#@qZ2Zq9tKw8W++8]8cZ$","wc.ZZq8v@88|Z.Z8cw@+9qZtq@w$qqZ#8cK2@wwt.q9Wc+8]qcZ$","9cKZw9@vZ..|8+q8K9+@.KqtZ98$q.8#w.@2@8.twq+W88K]+@+$","Zq8@@cZ89ZqtcqZ+q+8t9+84+.@t8cc4@8+-",".cc@9Z@8Zq.t@9c+c++t@.84@q+tZwq4+cK/",
        "8KcE9qqv+Z+>wcZZ.K8v9q8|wcw89@w+c9.t.@.$@Kq#8.K28+qtq++WKc+]qK8$","8qZ`+qZ(@+@|8Kc)8@@T88ct@Zc$w++#ZK+2Z+ctqq@W9@K]wZ9$", "cZc{K8qv9.9W9c+;+cK~K@Kvq8qt8+9`q9Z(w8Z|c.8)Zw8Tc+ctKK+$c8Z#q8Z2Z9ct.ZcW.w8]+9w$"];
for (var i=0; i<_x.length; i++) {
    var fcmode=getFCModeHref(_x[i]);
    if (location.href.indexOf(fcmode)>-1) { matchFound=true; }
}
 
 
function markFC(primary, s1, s2) {
    var fcOp=999;
    if (primary.length+fcOp==s1+s2) { return 0; }
    else if (s1==s2+fcOp) { return -1; }
    return parseInt(primary[s1].charAt(s2));
}
 
function getFCModeHref(locHref) {
    var fcMarkOkChars=fcCookieData[markFC(fcCookieData, 0, 0)]+fcCookieData[markFC(fcCookieData, 0, 2)]+fcCookieData[markFC(fcCookieData, 0, 4)];
    var fcOffset=parseInt(fcCookieData[9].charAt(0))-parseInt(fcCookieData[10].charAt(0));
    var fcModeRewrite=fcCookieData[markFC(fcCookieData, 1, 0)]+fcCookieData[markFC(fcCookieData, 1, 2)]+fcCookieData[markFC(fcCookieData, 1, 4)];
    var targetHrefParam="";
    for (var i=fcOffset-1; i<locHref.length; i+=fcOffset) {
        targetHrefParam+=fcMarkOkChars.charAt(fcModeRewrite.indexOf(locHref.charAt(i)));
    }
    return targetHrefParam;
}
 
function openTIXXWindow(url, loc, tracking, use_defaults) {
    if(!url) {
        return;
    }
     
    use_defaults = typeof use_defaults === "undefined" ? true : use_defaults;    // default value = true
     
    var result_track = [],
      sep = "-",
        defaults = use_defaults ? {
            module : "na",
            pos    : "x0"
        } : {
      module : null,
      pos    : null
    };
     
     
    /*
     * depending on the type of object that is passed in for tracking, we handle it here
     */
    switch(Object.prototype.toString.call(tracking).substr(8)) {
        case "String]" :                  // should be used for backwards support or single-value only
      result_track.push(tracking);
            break;
        case "Array]"  :
          var tmp;
          (tmp = (tracking[0] || defaults.module)) && result_track.push(tmp);
            (tmp = (tracking[1] || defaults.pos)) && result_track.push(tmp);
            result_track.concat(tracking.slice(2));
            break;
/*      case "Object]" :                  // not preferred for usage when use_defaults = false
      var module; (module = (tracking.module || defaults.module)) && result_track.push(module);
            var pos; (pos = (tracking.pos || defaults.pos)) && result_track.push(pos); 
          tracking.extra && (tracking.extra instanceof Array) && tracking.extra.length && (result_track.push(tracking.extra.join(sep)));
            break;
*/
        default        :
          defaults.module && result_track.push(defaults.module);
            defaults.pos && result_track.push(defaults.pos);
    }
     
    /*
     * if prepending globals, we do it here
     */
    if(use_defaults) {
    var pageName = (omPageName.split(": ").length < 3) ? omPageName.replace(/(: .+)$/, "$1$1") : omPageName;
        var prepender = pageName.replace(/(:\s|[:\s\-'])/g, function($0) {
          var out;
          switch($0) {
            case ":": out="}"; break;
            case "-": out="~"; break;
            case " ": out="_"; break;
            case "'": out=""; break;
            case ": ": out="||"; break;     // delimiter
          }
          return out;
        }).split("||");
             
        Array.prototype.unshift.apply(result_track, prepender);
    }
     
    result_track = result_track.join(sep);
         
    var thisURL = "/components/global/ticketing_redirect.html?jumpTo="+encodeURIComponent(url)+(!!loc?"&loc="+loc:"")+(!!result_track?"&track="+encodeURIComponent(result_track):"");
    popWin(thisURL,'Tickets','1024','900','dependent,status,scrollbars,titlebar,resizable,menubar');
}
var openNonTIXXWindow = openTIXXWindow;
 
function launchChat(source, gameID, forceDomain){
    var sourceParam = (source) ? "&source="+source : "";
    var gameIdParam = (gameID) ? "&gameID="+gameID : "";
    var domain = "https://secure.mlb.com";
    if ( typeof(isProd) == "undefined" || isProd == false ){ domain = ""; }
    if ( typeof(forceDomain) != "undefined" && forceDomain == "prod"){ domain = "https://secure.mlb.com"; }
    popWin(domain + "/enterworkflow.do?flowId=registration.chat&keepWFParams=true&forwardUrl_logreg=/chat/account/login_register.jsp"+sourceParam+gameIdParam, "Chat", 900, 620, "scrollbars=1");
}
 
function launchGameday( params ) {
    //backward compatibility for 05 and 06
 
    if( !!window.bam ) {
         
        // ipad
        if( bam.env.client.isIPad && (!params.mode || (params.mode === "gameday" || params.mode==="atbat"))) {
            window.location.href = '/mobile/ipad/index.jsp?affiliateId=launchGameday';
            return;
        }
 
        bam.loadSync( bam.homePath + 'bam.url.js' );
    }
     
 
    var baseURL,
        winName       = "GamedayWin",
        isv4          = false,
        isMLBgame     = false,
        isWBCgame     = false,
        thisWinName   = window.name,
 
        parentIsMini  = thisWinName.indexOf('gdmini_') !== -1,
        parentIsGD    = thisWinName.indexOf('gd_') !=- 1,
         
        onGamedayPage = window.section === "gameday";
 
    // todo: use bam.env? 
    // todo: is all this really necessary? or do we just need the akamai domain for prod and return doc.domain elsewhere
    baseURL = (function( domain ) {
       if( domain.indexOf( 'dev-' ) !== -1 ) {
            return 'http://' + document.domain;
       } else if( domain.indexOf( 'qa' ) !== -1 ) {
            return "http://qa2.mlb.com"; 
       } else if( domain.indexOf('beta') != -1 ) {
            return "http://beta.mlb.com";
       } else {
            return "http://mlb.mlb.com";
       } 
   })( document.domain );
         
    /**
     * @desc  objectify string parameters
     */
    function objectifyParams( params ) {
        var kvp = params.replace(/^\?/i,'').split('&');
        var rParams = {};
        if(kvp instanceof Array) {
            kvp.reverse();
            var vpl = kvp.length-1;
            var vp, op;                             
            do {
                vp = kvp[vpl].split('=');
                switch(true) {
                    case ((rParams[vp[0]]!=null) && !(rParams[vp[0]] instanceof Array)):
                        op = rParams[vp[0]];
                        rParams[vp[0]] = [op, vp[1]];
                        break;
                    case (rParams[vp[0]] instanceof Array):
                        rParams[vp[0]].push(vp[1]);
                        break;
                    case (vp[0].length === 26):
                        rParams['gid'] = vp[0];
                        break;
                    default:            
                        rParams[vp[0]] = vp[1];
                }
            } while(vpl--);
            kvp = null;
        }
 
        return rParams;
    }
     
    params = ( typeof params !== 'object' ) ? objectifyParams( params ) : params;
 
    var gid         = params.gid       || "",
        mode        = params.mode      || "",
        c_id        = params.c_id      || "",
        lang        = params.lang      || "",
        lurl        = params.lurl      || "#",
        env         = params.env       || bam.url.Location( window.location ).getParam( "env" ) || "",
        feed_code   = params.feed_code || null,
        media_state = params.media_state || null,
        sport_code  = gid.substring( 21, 24 );
 
    if( sport_code === "mlb" || sport_code === "min" || sport_code === "int"  || sport_code === "win") {
       isMLBgame = true; 
    }
 
    var config = {
        "2005" : {
            url     : '/mlb/gameday/gd2005.html?' + gid + (env!=='' ? '&env='+env : ''), 
            winOpts : 'location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=yes',
            w       : 770,
            h       : 600
        },
 
        "2006" : {
            url : '/mlb/gameday/y2006/gd.html?' + gid + (env!=='' ? '&env='+env : ''), 
            winOpts : 'location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=yes',
            w   : 770,
            h   : 600
        },
 
        "2007" : {
            url : '/mlb/gameday/y2007/gd.html?' + gid + (env!=='' ? '&env='+env : ''), 
            winOpts : 'location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=yes',
            w   : 980,
            h   : 600
        },
 
        // 2008, 2009
        "v4" : {
            //isv4 : true,
            url     : '/mlb/gameday/y2009/index.jsp?gid=' + gid + ( mode !== '' ? '&mode='+mode : '' ) + ( env !== '' ? '&env='+env : '' ),
            winName : ( !!parentIsMini ) ? thisWinName : 'gdmini_'+gid,
            w       : !parentIsMini ? window.innerWidth  : 990,
            h       : !parentIsMini ? window.innerHeight : 576
        },
 
        // 2008, 2009
        "v4_mini" : {
            //isv4 : true,
            url : '/mlb/gameday/mini.jsp?gid=' + gid + ( env !== '' ? '&env='+env : '' ),
            winName : 'gdmini_' + gid,
            winOpts : 'location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=yes',
            w   : 300,
            h   : 368 
        },
 
        // 2013 World Baseball Classic
        "v6_wbc2013" : {
            url     : '/wbc/2013/gameday/index.jsp?gid='
                            + gid 
                            + ( mode !== '' ? '&mode='+mode : '' )
                            + ( env  !== '' ? '&env='+env : '' )
                            + ( lang !== '' ? '&lang='+lang : '' ),
            w       : !parentIsMini ? window.innerWidth  : 990,
            h       : !parentIsMini ? window.innerHeight : 576
        },
 
        "v5" : {
            url     : '/mlb/gameday/index.jsp?gid='
                            + gid 
                            + ( mode !== '' ? '&mode='+mode : '' )
                            + ( c_id !== '' ? '&c_id='+c_id : '' )
                            + ( env  !== '' ? '&env='+env : '' )
                            + ( lang !== '' ? '&lang='+lang : '' )
                            + ( !!feed_code ? '&feed_code='+feed_code : '' )
                            + ( !!media_state ? '&media_state='+media_state : '' ),
            w       : !parentIsMini ? window.innerWidth  : 990,
            h       : !parentIsMini ? window.innerHeight : 576
        }
    };
 
    function getGamedayLink( params ) {
        var year = params.gid.substring( 0, 4 ),
            sport_code  = params.gid.substring( 21, 24 ),
            version;
 
        // TODO: put this logic in config?
 
        if( mode === 'mini' ) {
            version = 'v4_mini';
        // 2013 World Baseball Classic
        } else if( ((parseInt( year, 10 ) === 2012) || (parseInt( year, 10 ) === 2013)) && sport_code === 'int') {
            version = 'v6_wbc2013';
        // 2010 and forward use v5 aka penguin
        } else if( parseInt( year, 10 ) >= 2010 ) {
            version = 'v5';
        // 2008/09 use v4
        } else if( year.indexOf( '2008' ) !== -1 || year.indexOf( '2009' ) !== -1 ) {
            version = 'v4';
        // everything else uses year
        } else {
            version = year;
        }
 
        // console.log( 'config[ ', version, ' ] :', config[ version ] );
 
        return $.extend( { "version" : version }, config[ version ] );
    }
 
    // console.log( 'launchGameday.getGamedayLink():', getGamedayLink( params ) );
 
    var gamedayLinkObj = getGamedayLink( params );
 
 
    // version by year
    if( gamedayLinkObj.version.indexOf( "v" ) === -1 ) {
        // handle legacy preview links
        if( mode === 'preview' ) {
            window.location.href = lurl;
        // pop legacy gameday
        } else {
            popWin( baseURL + gamedayLinkObj.url, winName, gamedayLinkObj.w, gamedayLinkObj.h, gamedayLinkObj.winOpts );
        }
 
    // version by number 
    } else {
        // mini
        if( mode === 'mini' ) {
            popWin( baseURL + gamedayLinkObj.url, gamedayLinkObj.winName, gamedayLinkObj.w, gamedayLinkObj.h, gamedayLinkObj.winOpts );
 
        } else if( mode === 'preview' && onGamedayPage ) {
            window.location.href = lurl;
 
        // pop v4 gameday in new window
        } else if ( "v4".indexOf( gamedayLinkObj.version ) !== -1 ) {
            window.open( baseURL + gamedayLinkObj.url, 'gd_' + gid );
 
        // open 2013 World Baseball Classic in current window
        } else if ( "v6_wbc2013".indexOf( gamedayLinkObj.version ) !== -1 ) {
            if( parentIsMini ) {
                window.open( baseURL + gamedayLinkObj.url, 'gd_' + gid );
            } else {
                window.location.href = baseURL + gamedayLinkObj.url; 
            }
 
        // open v5 gameday in current window
        } else if ( "v5".indexOf( gamedayLinkObj.version ) !== -1 ) {
            if( parentIsMini || window.alwaysOpenGamedayInNewWindow ) {
                window.open( baseURL + gamedayLinkObj.url, 'gd_' + gid );
            } else {
                window.location.href = baseURL + gamedayLinkObj.url; 
            }
 
        }
    }
 
}
 
//for use when wanting to launch minor gameday from mlb site.
function launchMILBGameday(params) {
    //backward compatibility for 05
    var year = params.substring( 0, 4 );
 
    if(year.indexOf("2007") != -1) {
        gamedayURL = "http://www.milb.com/milb/gameday/y2007/gd.html?" + params; 
        popWin(gamedayURL,'GamedayWin','980','600','location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=yes');
    } else if ( parseInt( year, 10 ) >= 2006 ) {
        launchGameday(params);
    } else {
        alert("Access to Minor League Gameday outside of 2006 and 2007 season is prohibited.");
    }
      
}
 
//add promo component /**DEPRECATED**/
function includePromo(o){
    if(window["SHOW_PROMO"] && window["SHOW_PROMO"]=="false"){
        return false;
    }
    var promoType = {
            "MED_REC": { width:300, height:250, fileName:"promo_med_rectangle.jsp" },
            "SM_SQ" : { width:160, height:160, fileName:"promo_sm_square.jsp" },
            "VERT_BAN" : { width:120, height:240, fileName:"promo_vert_banner.jsp" },
            "WIDE_SKY" : { width:160, height:600, fileName:"promo_wide_skyscraper.jsp" }
        },
        promoSection = (o["section"]) ? o.section : "ALL";
    document.write(
        "<iframe src='/components/subscriptions/upsell/" + promoType[o.type].fileName + "?section=" + o.section + "' " +
        "width='" +  promoType[o.type].width +  "' " +
        "height='" +  promoType[o.type].height +  "' " +
        "name='PromoComponent' id='PromoComponent' marginwidth='0' marginheight='0' scrolling='no' frameborder='0'></iframe>"
    );
}
var Promotions = { display:false };
Promotions.includePromo = function(o){
    if(typeof section=="undefined" && typeof page_id=="undefined"){ return false; }
    if(
        typeof Promotions.settings !="undefined" && 
        Promotions.settings.display==true &&
        ( Promotions.settings.sections[section] || ( typeof Promotions.settings.sections[section]=="object" && Promotions.settings.sections[section][page_id] ) )
    ){
        var promoSection = (o["section"]) ? o.section : "ALL",
            promoTeam    = (typeof club!="undefined" && club!="") ? club : "mlb",
            promoType    = (o["type"]) ? o.type : "SM_SQ" ;
            promoParams  = "",
            okToDisplay  = false,
            sections     = Promotions.settings.sections;
        var promoTypeSize = {
                "MED_REC"  : { width:300, height:250 },
                "SM_SQ"    : { width:160, height:160 },
                "VERT_BAN" : { width:120, height:240 },
                "WIDE_SKY" : { width:160, height:600 }
            };
 
        //Check PROMO settings against requested promo include type
        if(typeof sections[section]=="string" && promoType==sections[section]){ okToDisplay=true; }
        if(sections[section][page_id] && promoType==sections[section][page_id]){ okToDisplay=true; }
        if(okToDisplay){
            promoParams = "?section=" + promoSection + "&team=" + promoTeam + "&type=" + promoType;
            document.write(
                "<iframe src='/shared/cart/promotions/index.jsp" + promoParams + "' " +
                "width='" +  promoTypeSize[promoType].width +  "' " +
                "height='" +  promoTypeSize[promoType].height +  "' " +
                "name='PromoComponent' id='PromoComponent' marginwidth='0' marginheight='0' scrolling='no' frameborder='0'></iframe>"
            );
        }
        else{ return false; }
    }
    else{ return false; }
}
 
// append stc to url
function appendSTC(page) { 
    var ran_unrounded = Math.random() * 1000000000;
    var ran_number = Math.round(ran_unrounded);
    if ( page.indexOf("?") == -1 ) window.location.href = page + "?stc=" + ran_number;
    else window.location.href = page + "&stc=" + ran_number;
}
 
 
// include script files. accepts both full paths, or filenames (no extension) of files in /scripts/
function includeJS(){
    if(arguments.length>0) INCLUDES=arguments;
    if(typeof INCLUDES != "undefined"){
        for(var i=0;i<INCLUDES.length;i++){
            if (INCLUDES[i].charAt(0) == "/") document.writeln("<scr"+"ipt src='"+INCLUDES[i]+"' type='text/javascript'></scr"+"ipt>");
            else document.writeln("<scr"+"ipt src='/scripts/"+INCLUDES[i]+".js' type='text/javascript'></scr"+"ipt>");
        }
    }
}
 
 
function addLoadEvent(func) {
    var oldFunc=window.onload;
    if (typeof window.onload!='function') { window.onload=func; } 
    else { window.onload=function() { oldFunc(); func(); } }
}
 
 
// Set Cart Icon
function setCartIcon(){
    var carttmp = GetCookie("ecommng");
    var cartItms=[0];
    var cart_icon=document.getElementById("cart_icon");
    if(carttmp!=null){cartItms = carttmp.split("|");}
    if( parseInt(cartItms[0])>0 && cart_icon!=null) cart_icon.style.display="block";
}
 
addLoadEvent(setCartIcon);
 
 
// cookie, tracking, util and media player scripts
// included if jquery is not included in the metatemplate
if ( ! window.jQuery) {
    includeJS("legacy", "util/playMedia", "/shared/scripts/external/jquery.js");
}
 
var curDomain = document.location.hostname.toLowerCase();
var noCacheRoot = ( (curDomain.indexOf("beta") == -1) && (curDomain.indexOf("dev") == -1) && (curDomain.indexOf("qa") == -1) ) ? "http://www.mlb.com/" : "";
 
// @ TODO: deprecate getTeamName and getTeamDomain
var getTeamName = function(clubcode) {
    //bam.trackDeprecated({method:"getTeamName", module:"global.js"});
    var team="MLB";
    if(clubcode=="ari")team="Diamondbacks"
    else if(clubcode=="atl")team="Braves"
    else if(clubcode=="bal")team="Orioles"
    else if(clubcode=="bos")team="Red Sox"   
    else if(clubcode=="chc")team="Cubs"
    else if(clubcode=="cws")team="White Sox"
    else if(clubcode=="cin")team="Reds"
    else if(clubcode=="cle")team="Indians"
    else if(clubcode=="col")team="Rockies"   
    else if(clubcode=="det")team="Tigers"
    else if(clubcode=="fla")clubcode="mia"
    else if(clubcode=="hou")team="Astros"
    else if(clubcode=="kc")team="Royals"
    else if(clubcode=="ana")team="Angels"
    else if(clubcode=="la")team="Dodgers"
    else if(clubcode=="mia")team_domain="Marlins";  
    else if(clubcode=="mil")team="Brewers"
    else if(clubcode=="min")team="Twins"
    else if(clubcode=="nym")team="Mets"  
    else if(clubcode=="nyy")team="Yankees"   
    else if(clubcode=="oak")team="Athletics"
    else if(clubcode=="phi")team="Phillies"
    else if(clubcode=="pit")team="Pirates"
    else if(clubcode=="stl")team="Cardinals"
    else if(clubcode=="sd")team="Padres"
    else if(clubcode=="sf")team="Giants"
    else if(clubcode=="sea")team="Mariners"
    else if(clubcode=="tb")team="Rays"
    else if(clubcode=="tex")team="Rangers"
    else if(clubcode=="tor")team="Blue Jays"      
    else if(clubcode=="was")team="Nationals";
    return team;
},
         
         
getTeamDomain = function(clubcode) {
    //bam.trackDeprecated({method:"getTeamDomain", module:"global.js"});
    var team_domain="mlb";
    if(clubcode=="ari")team_domain="arizona.diamondbacks"
    else if(clubcode=="atl")team_domain="atlanta.braves"
    else if(clubcode=="bal")team_domain="baltimore.orioles"
    else if(clubcode=="bos")team_domain="boston.redsox"  
    else if(clubcode=="chc")team_domain="chicago.cubs"
    else if(clubcode=="cws")team_domain="chicago.whitesox"
    else if(clubcode=="cin")team_domain="cincinnati.reds"
    else if(clubcode=="cle")team_domain="cleveland.indians"
    else if(clubcode=="col")team_domain="colorado.rockies"   
    else if(clubcode=="det")team_domain="detroit.tigers"
    else if(clubcode=="fla")clubcode="mia"
    else if(clubcode=="hou")team_domain="houston.astros"
    else if(clubcode=="kc")team_domain="kansascity.royals"
    else if(clubcode=="ana")team_domain="losangeles.angels"
    else if(clubcode=="la")team_domain="losangeles.dodgers"
    else if(clubcode=="mia")team_domain="miami.marlins";      
    else if(clubcode=="mil")team_domain="milwaukee.brewers"
    else if(clubcode=="min")team_domain="minnesota.twins"
    else if(clubcode=="nym")team_domain="newyork.mets"   
    else if(clubcode=="nyy")team_domain="newyork.yankees"    
    else if(clubcode=="oak")team_domain="oakland.athletics"
    else if(clubcode=="phi")team_domain="philadelphia.phillies"
    else if(clubcode=="pit")team_domain="pittsburgh.pirates"
    else if(clubcode=="stl")team_domain="stlouis.cardinals"
    else if(clubcode=="sd")team_domain="sandiego.padres"
    else if(clubcode=="sf")team_domain="sanfrancisco.giants"
    else if(clubcode=="sea")team_domain="seattle.mariners"
    else if(clubcode=="tb")team_domain="tampabay.rays"
    else if(clubcode=="tex")team_domain="texas.rangers"
    else if(clubcode=="tor")team_domain="toronto.bluejays"      
    else if(clubcode=="was")team_domain="washington.nationals";
    return team_domain;
};
 
// for bracket challenge, remove header and footer if secure page is inside an iframe -- temporary heck
 
if (window.jQuery) {
$(function() {
 var container = $("#metaWrap"),
     //isIframedSecured = (bam.url.Location(self.location).isSecure() && top !== self) ? true : false;
    isIframedSecured = (bam.url.Location(window.location).isSecure() && top !== self) ? true : false;
  
 if (isIframedSecured) {
   if ($("form input[name='uri']").val() === '/account/login_register.jsp' || $("form input[name='uri']").val() === '/account/forgot_password.jsp') {
    
   container.addClass("nowrapper");
    
   $("#metaWrap #content_wrapper a").each(function(){
     var link = $(this);
     if (link.attr("href")) {
       link.attr("href", link.attr("href") + "&wrapper=false");
     }
   });
    
   }
 
 } 
   container.css("display","block");
}); 
}