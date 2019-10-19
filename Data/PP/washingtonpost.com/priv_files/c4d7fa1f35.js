(function($){TWP.Util=TWP.Util||{};TWP.Util.User=function(){var initialized=false;var isAuthenticated=false;var userName=null;var userId="";var userEmail="";var userCookie=null;var isFacebookUser=false;var userType="washington-post";var validCookies=["wapo_display"];var authCookies=["wapo_login_id"];var emailCookie=["at"];function parseCookieUserName(cookie,startStr){if(cookie===null||cookie.length===0)return"";var start=-1,end=-1;start=cookie.indexOf(startStr)+startStr.length+1;end=userCookie.indexOf(";",
start)==-1?userCookie.length:userCookie.indexOf(";",start);var userData=cookie.substring(start,end).split("|");var parsedName="";if(userData[3])parsedName=userData[3].replace(/\+/g," ");else if(userData[2]&&userData[2].indexOf("rw%3D")==-1)parsedName=userData[2].replace(/\+/g," ");else parsedName=userData[0];return parsedName}function parseCookieEmail(){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){var x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("\x3d"));var y=
ARRcookies[i].substr(ARRcookies[i].indexOf("\x3d")+1);var x=x.replace(/^\s+|\s+$/g,"");if(x=="at"){var string=unescape(y);var email=string.split("\x3d")[3];var isValidEmail=false;if(email){email=email.split("\x26")[0];if(email)var isValidEmail=validateEmail(email);else return isValidEmail}else return isValidEmail;return email.length>0&&typeof email=="string"&&isValidEmail?email:false}}}function validateEmail(str){var atpos=str.indexOf("@");var dotpos=str.lastIndexOf(".");if(atpos<1||dotpos<atpos+
2||dotpos+2>=str.length)return false;else return true}function setCustomCookie(){var upcUrl=document.location.href;if(upcUrl.indexOf("localhost")>-1){var c=$.cookie("TWPNIUCID");if(typeof c=="undefined"||c==null){var d=new Date;var i="TWPNI"+d.getTime()+"."+Math.round(Math.random()*1E4);d.setTime(d.getTime()+31104E6);$.cookie("TWPNIUCID",i,{domain:TWP.Data.cookie_domain,expires:d,path:"/"})}}if(upcUrl.indexOf("beta")>-1){var c=$.cookie("x-split-override");if(c==null||typeof c=="undefined"){var d=
new Date;d.setTime(d.getTime()+1E3*60*60*24*30);$.cookie("x-split-override","B",{domain:TWP.Data.cookie_domain,expires:d,path:"/"});$.cookie("X-WP-Split","B",{domain:TWP.Data.cookie_domain,expires:d,path:"/"})}}}function convertPersistentToSessionCookie(){var xsplitoverride=$.cookie("x-split-override");if(typeof xsplitoverride!="undefined"&&xsplitoverride!=null){$.cookie("x-split-override",null,{domain:TWP.Data.cookie_domain,path:"/"});$.cookie("x-split-override",xsplitoverride,{domain:TWP.Data.cookie_domain,
path:"/"})}var xwpslit=$.cookie("X-WP-Split");if(typeof xwpslit!="undefined"&&xwpslit!=null){$.cookie("X-WP-Split",null,{domain:TWP.Data.cookie_domain,path:"/"});$.cookie("X-WP-Split",xwpslit,{domain:TWP.Data.cookie_domain,path:"/"})}}return{init:function(){var userCookieName="";for(var a=0;a<authCookies.length;a++)if(document.cookie.indexOf(authCookies[a])!=-1){isAuthenticated=true;break}for(var a=0;a<validCookies.length;a++)if(document.cookie.indexOf(validCookies[a])!=-1){userCookie=document.cookie;
userType=validCookies[a];break}if(isAuthenticated){switch(userType){case "fbuname":userCookieName=parseCookieUserName(userCookie,userType,8);break;default:userCookieName=parseCookieUserName(userCookie,userType,9);break}userCookieName=decodeURIComponent(userCookieName);userName=userCookieName.indexOf("@")!==-1?userCookieName.substring(0,userCookieName.indexOf("@")):userCookieName;userName=userName.replace(/"/gi,"");userId=userCookieName;userEmail=parseCookieEmail()}setCustomCookie()},getUserCookie:function(){return userCookie.length>
0&&typeof userCookie=="string"?userCookie:null},getUserType:function(){return userType.length>0&&typeof userType=="string"?userType:null},getUserId:function(){return userId},getUserName:function(){return typeof userName=="string"?userName:""},getUserEmail:function(){return userEmail.length<0||userEmail==false?null:userEmail},getAuthentication:function(){return isAuthenticated}}}();TWP.Util.User.init()})(window.Zepto||window.jQuery);
;(function($){ 

    // NOTE: Event queue
    __e = window.__e || [];

    window.TWP = window.TWP || {};
    TWP.Identity = TWP.Identity || {};
    TWP.Identity.paywall = TWP.Identity.paywall || {};
    TWP.Identity.paywall.requireTracking = true ;
    TWP.server = TWP.server || window.location.href.match(/^.*?:\/\/.*?\//)[0];
    var isSSL = (window.location.protocol.indexOf('https')) < 0?false:true;
    var currDomain = (TWP.Data && (TWP.Data.environment == 'prod') || TWP.Data.environment == 'stage')?'.washingtonpost.com':'.digitalink.com';
    var currDocDomain = (TWP.Data && (TWP.Data.environment == 'prod') || TWP.Data.environment == 'stage')?'washingtonpost.com':'digitalink.com';
    var userCookie = "wapo_login_id";
    var wpatcCookie = "WPATC";
    var actmgmtCookie = "wapo_actmgmt";
    var gmeCookie = "wapo_gme";  
    var acqTestCookie = "acq_test";
    var isPWA = !!TWP.PWA;
    var isMobile = isPWA || (typeof mobile_browser != 'undefined' && mobile_browser === 1)?true:false;
    var tidValues = {
        "main":"sub_s004",
        "home":"s_001",
        "digital":"s_002",
        "gift":"s_003"
    };

    // NOTE: values set in setPerPageVars
    var
      expireTime
      ,acqTest
      ,user
      ,wpatc
      ,wapo_actmgmt
      ,wapo_gme
    ; 

    /* json response format
        {"pwresp":{"action":0,"url":"N/A","sub":0,"mtr":20,"mtrct":0,"mtfn":1,"t":-1,"st":-1,"loc":0,"mvw":20,"fr":0,"dt":0,"mx":1}}
        
        Action values: 
            action: 0 - do nothing
            action: 1 - warning
            action: 2 - pop reg sign-in overlay using supplied url
            action: 3 - pop subscription overlay using supplied url         
            action: 4 - pop free access overlay.  This is applied manually only                         
    */  
    
    /*EVENT MANAGEMENT
     * The following events may be triggered by other code:
        onTwpLoginInit
        onTwpLoginError
        onTwpLoginComplete
        onTwpRegisterInit
        onTwpRegisterComplete
        onTwpWarningFreeAccess  warning overlay link to paywall overlay.  Allows opening of paywall overlay.  Requires pwresp object
        onTwpMastheadComplete - external masthead created, and masthead code added to page
    
        
    * The following events  are triggered by this code:
        onTwpMeterReady - when meter api is returned successfully, and TWP.Identity.paywall.pwresp object created
    */
    
    var setPerPageVars = function () {
		  var d = new Date();

		  // NOTE: If you add a value here, you must initialize it above where the rest of these variables are initialize
		  // NOTE: These variable are not local to this function. They are why this method exists.
		  expireTime = d.setHours(d.getHours() + 24); 
		  // acqTest = $.cookie(acqTestCookie);
		  user = $.cookie(userCookie);
		  wpatc = $.cookie(wpatcCookie);
		  wapo_actmgmt = $.cookie(actmgmtCookie);
		  wapo_gme = $.cookie(gmeCookie); 
	  }

    var overlays = new Array();

    overlays[0] = {}; //do nothing
    overlays[1] = {
                // should isPWA be isMobile?
                overlay:'<div id="wp_Alert" class="simple-overlay'+((isPWA?' is-pwa':''))+'" style="overflow: hidden;"><div class="jqmClose close"></div><iframe src class="'+((isPWA?'is-pwa':''))+'" height="306px" width="460px" scrolling="auto" frameborder="0"></iframe></div>',
                overlayConfig: {
                  overlay:100
                  ,overlayClass: "wp_alert"+(isPWA?' is-pwa':'')
                  ,modal:false
                  ,closeClass: "close"
                  ,toTop:true
                  ,trigger:".close"

                  ,onShow: function(h) {
                    h.w.prependTo(h.o);
                    h.o.prependTo('body'); 
                    if(typeof h.w.fadeIn == 'function'){
                        h.w.fadeIn();
                    }else{
                        h.w.show();
                    }
                    
                  }
                  ,onHide:function(h){
                      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
                          var closeVars = {"eVar1":s.eVar1,
                                           "eVar2":s.eVar2,
                                           "eVar6":s.eVar6,
                                           "eVar7":"",
                                           "eVar17":s.eVar17,
                                           "eVar60":s.eVar60,                                                  
                                           "eVar62":s.eVar62,
                                           "eVar64":s.eVar64,
                                           "eVar65":s.eVar65,
                                           "eVar66":s.eVar66
                                          };
                          try {               
                              s.sendDataToOmniture("close alert",'event67',closeVars);
                          } catch(e){}    
                      }
                      if(typeof h.w.fadeOut == 'function'){
                          h.w.fadeOut('500',function(){ h.o.remove()});
                      }else{
                          h.w.hide();
                          h.o.remove();
                      }
                  }
                }
            };
    overlays[2] = {
                // should isPWA be isMobile?
                overlay:'<div id="wp_Signin" class="simple-overlay'+((isPWA?' is-pwa':''))+'" style="overflow: hidden;"><div class="jqmClose close"></div><iframe src class="'+((isPWA?'is-pwa':''))+'" height="100%" width="100%" scrolling="auto" frameborder="0"></iframe></div>',
                overlayConfig: {
                  overlay:100
                  ,overlayClass: "wp_signin"+(isPWA?' is-pwa':'')
                  ,modal:false
                  ,closeClass: "close"
                  ,toTop:true
                  ,trigger:".close"

                  ,onShow: function(h) {
                    h.w.prependTo(h.o);
                    h.o.prependTo('body'); 
                    if(typeof h.w.fadeIn == 'function'){
                        h.w.fadeIn();
                    }else{
                        h.w.show();
                    }
                    
                  }
                  ,onHide:function(h){
                    if ($(arguments[0].target).is(".close")) {
                          window.location.href = "/";
                      }       
                      $('body').css('overflow-y','');
                      $(document).unbind('touchmove mousewheel mousemove scroll', _scrollHandler);                                        
                      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
                          var closeVars = {"eVar1":s.pageName,
                                           "eVar2":s.channel,
                                           "eVar5": s.prop3
                                          }
                          try {               
                              s.sendDataToOmniture("close overlay",'event69',closeVars);
                          } catch(e){}    
                      }
                    }
                } 
            };          
    overlays[3] = {
                // should isPWA be isMobile?
                overlay:'<div id="wp_Signin" class="simple-overlay'+((isPWA?' is-pwa':''))+'" style="overflow: hidden;"><div class=""></div><iframe src class="'+((isPWA?'is-pwa':''))+'" height="100%" width="100%" scrolling="'+((isPWA?'yes':'auto'))+'" frameborder="0"></iframe></div>',
                overflowCss:'hidden',
                overlayConfig: {
                  overlay:97
                  ,overlayClass: "wp_signin"+(isPWA?' is-pwa':'')
                  ,modal:true
                  ,closeClassxxx: "close"
                  ,toTop:true
                  ,triggerxxx:".close"

                  ,onShow: function(h) {
                    h.w.prependTo(h.o);
                    if ($('.pb-f-page-header-v2 .site-header.bar-hidden').length > 0){
                      $('.pb-f-page-header-v2 .site-header').removeClass('bar-hidden');
                    }
                    //var multiplier = isPWA ? 1 : (!!window.wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.mobile)?1.6:2,
                    headerHeight = $('.pb-f-page-header-v2 .site-header').height(),
                    bnHeight = $('.pb-f-page-breaking-news-bar').height();
                    //var cssTop = ((headerHeight > 0)?(headerHeight*multiplier + bnHeight):(bnHeight > 0)?bnHeight*multiplier:(isPWA)?0:100);
                    var zIndexOverlay = parseFloat($('.pb-f-page-breaking-news-bar .breaking-news-bar').css('z-index')) + 1;
                    //h.w.css({"top":cssTop + "px"});
                    h.o.css('z-index', zIndexOverlay );
                    h.w.css('z-index', zIndexOverlay + 1)                    
                    h.o.prependTo('body'); 
                    if(typeof h.w.fadeIn == 'function'){
                        h.w.fadeIn();
                    }else{
                        h.w.show();
                    }
                    
                  }
                  ,onHide:function(h){
                    if ($(arguments[0].target).is(".close")) {
                          window.location.href = "/";
                      }       
                      $('body').css('overflow-y','');
                      $(document).unbind('touchmove mousewheel mousemove scroll', _scrollHandler);                                        
                      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
                          var closeVars = {"eVar1":s.pageName,
                                           "eVar2":s.channel,
                                           "eVar5": s.prop3
                                          }
                          try {               
                              s.sendDataToOmniture("close overlay",'event63',closeVars);
                          } catch(e){}    
                      }
                    }
                }
            }; 
                    
    overlays[4] = {
                // should isPWA be isMobile?
                overlay:'<div id="wp_Signin" class="simple-overlay'+((isPWA?' is-pwa':''))+'" style="overflow: hidden;"><div class="jqmClose close"></div><iframe src class="'+((isPWA?'is-pwa':''))+'" height="100%" width="100%" scrolling="no" frameborder="0"></iframe></div>',
                overlayConfig: {
                  overlay:100
                  ,overlayClass: "wp_signin"+(isPWA?' is-pwa':'')
                  ,modal:false
                  ,closeClass: "close"
                  ,toTop:true
                  ,trigger:".close"

                  ,onShow: function(h) {
                    h.w.prependTo(h.o);
                    h.o.prependTo('body'); 
                    if(typeof h.w.fadeIn == 'function'){
                        h.w.fadeIn();
                    }else{
                        h.w.show();
                    }
                    
                  }
                  ,onHide:function(h){
                    if ($(arguments[0].target).is(".close")) {
                          window.location.href = "/";
                      }       
                      $('body').css('overflow-y','');
                      $(document).unbind('touchmove mousewheel mousemove scroll', _scrollHandler);                                        
                      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
                          var closeVars = {"eVar1":s.pageName,
                                         "eVar2":s.channel,
                                         "eVar5": s.prop3,
                                         "eVar63": "one-time overlay"
                              }
                          try {               
                              s.sendDataToOmniture("close overlay",'event69',closeVars);
                          } catch(e){}    
                      }
                    }
                }
            };  

    overlays['mobile'] = {
                // should isPWA be isMobile?
                overlay:'<div id="wp_Alert" class="simple-overlay'+((isPWA?' is-pwa':''))+'" style="overflow: hidden;"><div class="jqmClose close"></div><iframe src class="'+((isPWA?'is-pwa':''))+'" height="100%" width="100%" scrolling="no" frameborder="0"></iframe></div>',
                overlayConfig: {
                  overlay:100
                  ,overlayClass: "wp_alert"+(isPWA?' is-pwa':'')
                  ,modal:false
                  ,closeClass: "close"
                  ,toTop:true
                  ,trigger:".close"

                  ,onShow: function(h) {
                    h.w.prependTo(h.o);
                    h.o.prependTo('body'); 
                    if(typeof h.w.fadeIn == 'function'){
                        h.w.fadeIn();
                    }else{
                        h.w.show();
                    }
                    
                  }
                  ,onHide:function(h){
                    if ($(arguments[0].target).is(".close")) {
                          window.location.href = "/";
                      }       
                      $('body').css('overflow-y','');
                      $(document).unbind('touchmove mousewheel mousemove scroll', _scrollHandler);                                        
                      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
                          var closeVars = {"eVar1":s.eVar1,
                                           "eVar2":s.eVar2,
                                           "eVar6":s.eVar6,
                                           "eVar7":"",
                                           "eVar17":s.eVar17,
                                           "eVar60":s.eVar60,                                                  
                                           "eVar62":s.eVar62,
                                           "eVar64":s.eVar64,
                                           "eVar65":s.eVar65,
                                           "eVar66":s.eVar66
                                          }
                          try {               
                              s.sendDataToOmniture("close alert",'event67',closeVars);
                          } catch(e){}    
                      }
                      if(typeof h.w.fadeOut == 'function'){
                          h.w.fadeOut('500',function(){ h.o.remove()});
                      }else{
                          h.w.hide();
                          h.o.remove();
                      }
                    }
                }
            };  

    TWP.Identity.omniture = {
            sub:{'-1':'N/A',
                '0':'Unsubscribed',
                '1':'Subscribed'
                },
            mtr:{'-1': 'Unmetered',
                '1':'Metered',
                 '20':'Unmetered: content_type',
                 '21':'Unmetered: referer',
                 '22':'Unmetered: domain'
                 }, 
            tracking: {  
                'wp_evar60':'not available',
                'wp_evar64':'not available',
                'wp_evar65':'not available',
                'wp_evar66':'not available'
                }
    };

    TWP.isSignedIn = function () {
      var cookies = document.cookie;
      idx = cookies.indexOf('wapo_login_id');
      
      if(idx > -1){
               return true;
      }else {
               return false;
      }
    };
    
    TWP.Identity.setAuthenticationLinkForPWA =  function(data){

			$.fn.appendLinkItems = function(links, surroundingTag) {
				var element = this;
				surroundingTag = surroundingTag || "<li>";
				$.each(links, function(i, link) {
					var a = $("<a>");
					if (link.title) { a.text(link.title); }
					if (link.html) { a.html(link.html); }
					if (link.href) { a.attr("href", link.href); }
					if (link.attr) { a.attr(link.attr); }
					element.append(
							$(surroundingTag).append(a).addClass(link.selected ? "selected" : "")
					);
				});
				return this;
			};

			var idenity={},idp; 
			idenity.getIdentityProvider = function () {
					return idp;
			};

			idenity.setIdentityMenu = function ($el,menu) {
				$el.children('li').remove();
				$el.appendLinkItems(menu);
			};

			idenity.setIdentityProvider = function (provider) {
				var ef = function () {}; //empty function
				idp = {};
				// we'll pad any missing portion with empty function
				idp.name = provider.name || "";
				idp.getUserId = provider.getUserId || ef;
				idp.getProfileMenu = provider.getProfileMenu || ef;
				idp.getSubscribeMenu = provider.getSubscribeMenu || ef;
				idp.getLogOutMenu = provider.getLogOutMenu || ef;
				idp.getSignInMenu = provider.getSignInMenu || ef;
				idp.getSignInLink = provider.getSignInLink || ef;
				idp.getRegistrationLink = provider.getRegistrationLink || ef;
				idp.isUserLoggedIn = provider.isUserLoggedIn || ef;
					
				idp.userMenu = [];

				idp.render = provider.render || function () {
					var $identityEl = $('#logged-in-status');
					if (idp.isUserLoggedIn()) {

						idp.userMenu.push( idp.getProfileMenu() );
						if( !wp_pb.StaticMethods.isSubscriber() ) {
							idp.userMenu.push( idp.getSubscribeMenu() );
						}
						idp.userMenu.push( idp.getLogOutMenu() );
					} else {
						idp.userMenu.push( idp.getSignInMenu() );
						idp.userMenu.push( idp.getSubscribeMenu() );
					}
				  idenity.setIdentityMenu($identityEl,idp.userMenu);
				};

			};

			idenity.renderIdentity = function (callback) {
				callback = callback || function () {};
				if (idp) { // the user might not have configured any identity. So check for it.
					idp.render();
				}
				callback(idp);
			};

			/*
			 * Using the provded API, set up the default identity provider as TWP
			 */

			// set a flag so that we don't process login at all
			var showIdentity = true;

			// default Identity
			var current = window.location.href.split("?")[0];
			var twpIdentity = {
				name: "TWP",
				getUserId: function () {
					var username = TWP.Util.User.getUserName();
					var userid = TWP.Util.User.getUserId();
					if (typeof username == "string" && username.length > 0) {
							return username;
					} else {
							return userid;
					}
				},
				getProfileMenu: function () {
					return { "title": "Profile", "href": TWP.signin.profileurl + current + '&refresh=true' };
				},
				getSubscribeMenu: function () {
					return { "title": "Subscribe", "href": TWP.signin.subscribe };
				},
				getLogOutMenu: function () {
					return { "title": "Log out", "href": TWP.signin.logouturl_page };
				},
				getSignInMenu: function () {
					return { "title": "Sign In", "href": TWP.signin.loginurl_page + current };
				},
				getSignInLink: function () {
					return TWP.signin.loginurl_page + current;
				},
				getRegistrationLink: function () {
					return TWP.signin.registrationurl_page + current;
				},
				isUserLoggedIn: function () {
					return (TWP.Util.User) ? TWP.Util.User.getAuthentication() : false;
				}
			};

			// If we are showing identity then set the default identity provider to TWP.
			//   User can overide this whenever they want.
			//
			// In TWP, identity user interface needs to processed after the fact that all other javascript has been loaded.
			//   But the js resources are loaded asynchronously and it doesn't have any callbacks hooks. So we watch for it.
			if (showIdentity) {
				//try to load TWP only if we are showing Identity.
				var init = new Date().getTime();
				(function checkTWP() {
						// if there's already idp set, then don't try to load TWP.
					if (!idenity.getIdentityProvider()) {
						if (!!window.TWP && !!TWP.signin && !!TWP.Util) { // make sure TWP has been loaded.
							idenity.setIdentityProvider(twpIdentity);
							idenity.renderIdentity();
						} else {
							var now = new Date().getTime();
							// after 3 seconds, if TWP indentity hasn't been loaded. Let's just stop.
							// if (now - init < 3 * 1000) {
								// if it hasn't been loaded, we wait few milliseconds and try again.
								window.setTimeout(function () { checkTWP(); }, 200);
							// }
						}
					}
				}());
			}
    };

    TWP.Identity.setAuthenticationLink =  function(data){
        if (typeof data == "object") {
            $.extend(TWP.Identity.paywall.pwresp,data.pwresp);
        }

        if (TWP.server.match(/digitalink\.com|washingtonpost\.com|wpprivate\.com/ig) == null){
            return;
        }
        
        var wrapperElm = $('#utility-wrapper');
        if (isPWA) {
            TWP.Identity.setAuthenticationLinkForPWA();
            return;
        } else if (wrapperElm.length <= 0) {
            return;
        }
        var userName = '';
        var provider = '';
        var currentURL = window.location.href.split("?")[0];

        TWP.Identity.isSignedIn = TWP.Util.User.getAuthentication();
        if (TWP.Identity.isSignedIn){       
            userName = TWP.Util.User.getUserName();
            provider = (typeof TWP.signedInProvider == 'function')?TWP.signedInProvider():'Washington Post';
            provider =  (typeof provider != 'undefined')?provider.toLowerCase():'';
        }
        
        var freeAccessLink = (TWP.Identity.paywall.pwresp.fr === 1)?'<li class="no-right">' 
                                + '<a href="' + TWP.signin.free_access + '">GET FREE ACCESS</a>'
                                + '</li>':'';
        var signinLinks = {
            'pw': {
                'anon': '<li id="global-signin"style="min-width:32px;">' + '<a href="' + TWP.signin.loginurl_page +  currentURL + '">Sign In</a>' + '</li>'
                        + '<li class="no-right"><a href="' + TWP.signin.profileurl + currentURL + '&refresh=true">My Account </a></li>'
                        + freeAccessLink
                        + '<ul class="subscribe-links left">'
                        + '<li class="no-right subscribe"><a href="' + TWP.signin.subscribe + '?tid=' + tidValues.main + '&promo=digital04_header_default&oscode=RPWH&wpsrc=CM0000447&show4=true">SUBSCRIBE: </a></li>'
                        + '<li ><a href="' + TWP.signin.print_offer + 'tid=' + tidValues.home + '&promo=digital06_header_homedelivery&oscode=RPWH&wpsrc=CM0000450">Home Delivery</a></li>'
                        + '<li class="no-right"><a href="' + TWP.signin.digital_offer + 'tid=' + tidValues.digital + '&promo=digital04_header_default&oscode=RPWH&wpsrc=CM0000447">Digital</a></li>'
                        //+ '<li class="no-right"><a href="' + TWP.signin.subscribe + '/gift-subscription.html?landing=1&tid=' + tidValues.gift + '">Gift Subscriptions</a></li>'                     
                        + '</ul>',
                '0':    '<li>' + ((provider.indexOf('facebook') >= 0)?'<a class="icon share facebook" ':'<a ') + ' href="' + TWP.signin.profileurl + currentURL + '&refresh=true"> Hi, ' + userName + '!</a>' + '</li>'
                        + '<li><a href="' + TWP.signin.profileurl + currentURL + '&refresh=true">My Account </a></li>'
                        + '<li class="no-right"><a href="' + TWP.signin.logouturl_page + '">Sign Out</a></li>'
                        + freeAccessLink                        
                        + '<ul class="subscribe-links left">'
                        + '<li class="no-right subscribe"><a href="' + TWP.signin.subscribe + '?tid=' + tidValues.main + '&promo=digital04_header_default&oscode=RPWH&wpsrc=CM0000447&show4=true">SUBSCRIBE: </a></li>'
                        + '<li ><a href="' + TWP.signin.print_offer + 'tid=' + tidValues.home+ '&promo=digital06_header_homedelivery&oscode=RPWH&wpsrc=CM0000450">Home Delivery</a></li>'
                        + '<li class="no-right"><a href="' + TWP.signin.digital_offer + 'tid=' + tidValues.digital + '&promo=digital04_header_default&oscode=RPWH&wpsrc=CM0000447">Digital</a></li>'
                        //+ '<li class="no-right"><a href="' + TWP.signin.subscribe + '/gift-subscription.html?landing=1&tid=' + tidValues.gift + '">Gifts</a></li>'
                        + '</ul>',
                '1':    '<li>' + ((provider.indexOf('facebook') >= 0)?'<a class="icon share facebook" ':'<a ') + ' href="' + TWP.signin.profileurl + currentURL + '&refresh=true">Hi, ' + userName + '!</a>' + '</li>'
                        + '<li><a href="' + TWP.signin.profileurl + currentURL + '&refresh=true">My Account </a></li>'
                        + '<li class="no-right"><a href="' + TWP.signin.logouturl_page + '">Sign Out</a></li>'  
                        + '<ul class="subscribe-links left">'
                        //+ '<li class="no-right"><a href="' + TWP.signin.subscribe + '/gift-subscription.html?landing=1&tid=' + tidValues.gift + '">Gift Subscriptions</a></li>'
                        + '</ul>'
            }, 
            'np':{
                'anon': '<li id="global-signin" style="min-width:32px;">' + '<a href="' + TWP.signin.loginurl_page +  currentURL + '">Sign In</a>' + '</li>'
                        + '<li><a href="' + TWP.signin.profileurl + currentURL + '&refresh=true">My Account </a></li>'
                        + '<li id="global-registration" class="no-right" style="margin-right:25px;">' + '<a href="' + TWP.signin.registrationurl_page +  currentURL + '">Register</a>' + '</li>',
                'signedin': '<li id="global-signin" style="min-width:32px;">' + ((provider.indexOf('facebook') >= 0)?'<a class="icon share facebook" ':'<span>Hello </span><a ') + ' href="' + TWP.signin.profileurl + currentURL + '&refresh=true">' + userName + '</a>' + '</li>'
                        + '<li><a href="' + TWP.signin.profileurl + currentURL + '&refresh=true">My Account </a></li>'
                        + '<li  id="global-registration" class="no-right" style="margin-right:25px;"><a href="' + TWP.signin.logouturl_page + '">Sign Out</a></li>'
            } 
                        
        };


        var linkString = '';   
        if (TWP.Identity.paywall.pwresp.sub < 0) {   //user is in reg mode          
            if (TWP.Identity.isSignedIn) {
                linkString = signinLinks.np.signedin;
            } else {
                linkString = signinLinks.np.anon;
            }
        }  else { //user is in paywall mode
            if (TWP.Identity.isSignedIn) {
                linkString = signinLinks.pw[TWP.Identity.paywall.pwresp.sub]; //sign in links based on subscribed/not subscribed state
            } else {
                linkString = signinLinks.pw.anon;
            }
        }
        
        wrapperElm.find('ul#utility-links.inline-list.left').remove();
        wrapperElm.prepend('<ul id="utility-links" class="inline-list left">' + linkString + '</ul>');                                
    };
    

    TWP.Identity.setHandlers = function () { 
        //login
        try {
            $(window.document).on('onTwpLoginComplete', function (event,data) { 
               (typeof TWP_Debug != 'undefined') && TWP_Debug.pagedebug && window.console && console.log && console.log(event.type + 'fired!');   
               event.stopPropagation();
               //Main Call to Re Run Authentication
                TWP.Util.User.init();
                TWP.Identity.setAuthenticationLink(data); 
               //Closing Overlay! 
                try {
                    $('body').css('overflow-y','');
                    $("#wp_Signin.simple-overlay").overlay().close();
                } catch (e){}      
            });  
        } catch(e) {
        
        }
        
        /*register.  Not currently used.
        try {       
            $(document).on('onTwpRegisterComplete',function(event){
               (typeof TWP_Debug != 'undefined') && TWP_Debug.pagedebug && window.console && console.log && console.log(event.type + 'fired!'); 
               event.stopPropagation();         
                try {
                    $(".simple-overlay").overlay().close();
                } catch (e){};  
            });
        } catch(e) {
        
        }
        */      
        //gov/mil/edu overlay
        try {
            $(window.document).on('onTwpMeterReady', function (event,data) { 
                if (TWP.Identity.paywall.pwresp.action === 0 && TWP.Identity.paywall.pwresp.fr === 1 && wapo_gme !== "1" ) {
                    $.cookie(gmeCookie,"1",{
                                                domain:currDomain,
                                                expires:new Date(expireTime),
                                                path:"/"
                                            });
                    _openOverlay(event,{pwresp:{action:4,url:TWP.signin.free_access_overlay}});
                }
            });  
        } catch (e){
        
        }
        //warning overlay link to paywall overlay   
        try {
            $(window.document).on('onTwpWarningFreeAccess', function (event,data) { 
                _openOverlay(event,data);
            });  
        } catch(e) {
        
        }   
        //masthead has been built. Event triggered by external masthead ajax.   
        try {
            $(window.document).on('onTwpMastheadComplete', function (event,data) { 
                event.stopPropagation();    
                TWP.Identity.setAuthenticationLink();
            });  
        } catch(e) {
        
        }       
        //link to sign in   
        try {
            $(window.document).on('onTwpLoginInit', function (event,data) { 
                _openOverlay(event,data);
            });  
        } catch(e) {
        
        }    
        TWP.Identity.handlersSet = true;
    };

    var copyToWindow = function copyToWindow(object) {
        for (var key in object) {
            window[key] = object[key];
        }
    }
        
    TWP.Identity.auth = function (identityData) {
        
        var origUrl, origReferrer = document.referrer;
        if (typeof identityData != 'undefined'){
            origUrl = identityData.url;
            origReferrer = identityData.referrer;
        } else {    
          origUrl = (window.originalWashingtonPostURl && window.originalWashingtonPostURl.substring(window.originalWashingtonPostURl.indexOf('.com/')+4)) || location.pathname;         
          origUrl = origUrl + location.search;
        }
        if(isPWA && !!window.history && !!history.state && !!history.state.referrer){
            origReferrer = history.state.referrer;
        }
                 
        try {  
          document.domain = currDocDomain; //must match pwapiddmn in iframe include from above
          typeof TWP_Debug != 'undefined' && window.console && console.log && console.log( '[' + (new Date() - TWP_Debug.initialTime) / 1000 + ']' + ' STARTING Paywall');
         (typeof TWP_Debug != "undefined") && TWP_Debug.pagedebug && window.console && console.log && console.log("RegWall action: " + data.pwresp.action + "\nRegWall - url: " + data.pwresp.url + "\n");
          (typeof TWP_Debug != "undefined") && TWP_Debug.pagedebug && window.console && console.log && console.log(data);
          window.console && console.log && console.log("PAYWALL CHECK STATUS: " + status );
          window.console && console.log && console.log("PWAPI URL: " + TWP.signin.auth_api_url  + (encodeURI( origUrl + ((origUrl.indexOf('?') >=0)?'&':'?') + 'rplapisplit=1&referrer=' + origReferrer)));

          function successCallback(data){
            if (data && data.pwresp) {
                window.console && console.log && console.log("PAYWALL ACTION: " + data.pwresp.action);
                window.console && console.log && console.log("PAYWALL URL: " + data.pwresp.url);
                window.console && console.log && console.log("PAYWALL SUB: " + TWP.Identity.omniture.sub[data.pwresp.sub]);
                window.console && console.log && console.log("PAYWALL METERED: " + TWP.Identity.omniture.mtr[data.pwresp.mtr]);
                window.console && console.log && console.log("PAYWALL METER COUNT: " + data.pwresp.mtrct);
                window.console && console.log && console.log("PAYWALL MODE: " + data.pwresp.mtfn);
                $.extend(TWP.Identity.paywall,eval(data));
                TWP.Identity.setAuthenticationLink();
                //set omniture variables
                var tmpVal = _getKey(($.cookie(actmgmtCookie)||"").toLowerCase(),"partner");            
                TWP.Identity.omniture.tracking.wp_evar60 = (tmpVal === null)?"none":tmpVal;                      
                TWP.Identity.omniture.tracking.wp_evar64 = 
                            (data.pwresp.sub == 1)?TWP.Identity.omniture.sub[data.pwresp.sub]:(data.pwresp.action > 1)?'overlay':data.pwresp.mtrct;             
                tmpVal = _getKey(($.cookie(actmgmtCookie)||""),"omniture");        
                TWP.Identity.omniture.tracking.wp_evar65 = (tmpVal === null)?"none":tmpVal;          
                TWP.Identity.omniture.tracking.wp_evar66 = data.pwresp.mtr; 
                if (data.pwresp.mtrsc === 1 && data.pwresp.mtrctsc > 0) {
                  TWP.Identity.omniture.tracking.wp_evar10 = data.pwresp.mtrctsc;
                }
                if (data.pwresp.mtruv === 1 && data.pwresp.mtrctuv > 0) {
                  TWP.Identity.omniture.tracking.wp_evar9 = data.pwresp.mtrctuv;
                }

                copyToWindow(TWP.Identity.omniture.tracking);
                
                _openOverlay(null,data);
                $(window.document).trigger('onTwpMeterReady');//indicates pwresp is available
            };
          }

          /*
            errorCallback called for timeout or error
            for timeout: errTextStatusStr: 'timeout', errThrownStr: 'timeout'
            otherwise errTextStatusStr, errThrownStr is 'error' or other error string
          */
          function errorCallback(errTextStatusStr, errThrownStr){
            TWP.Identity.omniture.tracking.wp_evar53 = 'paywall_' + errTextStatusStr || 'error';
            copyToWindow(TWP.Identity.omniture.tracking);
            $(window.document).trigger('onTwpMeterComplete'); 
            window.console && console.log && console.log('this is the callback errorCallback: errTextStatusStr: ' + errTextStatusStr + ', errThrownStr: ' + errThrownStr);
          }

          var args = {};
          args.referrer = origReferrer;

          var wpPwapi = new WpPwapi1.pwapi(
            $,
            TWP.signin.auth_api_url,   //pwapi endpoint
            currDomain,          //cookie domain
            origUrl, //path of current url
            args, 
            successCallback,
            errorCallback
          );
          try{
            wpPwapi.setTimeout(2000);
            wpPwapi.proc();
          }catch(err){
            console.error("Unable to call pwapi: err message: " + err.message, err);
          }
        /*                                                           
            $.ajax(
            {
              type: "GET",
              url: TWP.signin.auth_api_url  + (encodeURI( origUrl + ((origUrl.indexOf('?') >=0)?'&':'?') + 'rplapisplit=1&referrer=' + origReferrer)),
              dataType: "jsonp",
              timeout: 2000,
              cache: "false"                  
            })
            .always(function(data,status ) {
                (typeof TWP_Debug != "undefined") && TWP_Debug.pagedebug && window.console && console.log && console.log("RegWall action: " + data.pwresp.action + "\nRegWall - url: " + data.pwresp.url + "\n");
                (typeof TWP_Debug != "undefined") && TWP_Debug.pagedebug && window.console && console.log && console.log(data);
                window.console && console.log && console.log("PAYWALL CHECK STATUS: " + status );
                window.console && console.log && console.log("PWAPI URL: " + TWP.signin.auth_api_url  + (encodeURI( origUrl + ((origUrl.indexOf('?') >=0)?'&':'?') + 'rplapisplit=1&referrer=' + origReferrer)));
                if (status == 'success' && data && data.pwresp) {
                    window.console && console.log && console.log("PAYWALL ACTION: " + data.pwresp.action);
                    window.console && console.log && console.log("PAYWALL URL: " + data.pwresp.url);
                    window.console && console.log && console.log("PAYWALL SUB: " + TWP.Identity.omniture.sub[data.pwresp.sub]);
                    window.console && console.log && console.log("PAYWALL METERED: " + TWP.Identity.omniture.mtr[data.pwresp.mtr]);
                    window.console && console.log && console.log("PAYWALL METER COUNT: " + data.pwresp.mtrct);
                    window.console && console.log && console.log("PAYWALL MODE: " + data.pwresp.mtfn);
                    $.extend(TWP.Identity.paywall,eval(data));
                    TWP.Identity.setAuthenticationLink();
                    //set omniture variables
                    var tmpVal = _getKey(($.cookie(actmgmtCookie)||"").toLowerCase(),"partner");            
                    TWP.Identity.omniture.tracking.wp_evar60 = (tmpVal === null)?"none":tmpVal;                      
                    TWP.Identity.omniture.tracking.wp_evar64 = 
                                (data.pwresp.sub == 1)?TWP.Identity.omniture.sub[data.pwresp.sub]:(data.pwresp.action > 1)?'overlay':data.pwresp.mtrct;             
                    tmpVal = _getKey(($.cookie(actmgmtCookie)||""),"omniture");        
                    TWP.Identity.omniture.tracking.wp_evar65 = (tmpVal === null)?"none":tmpVal;          
                    TWP.Identity.omniture.tracking.wp_evar66 = data.pwresp.mtr; 
                    
                    for (var trackingVar in TWP.Identity.omniture.tracking){
                        window[trackingVar] = TWP.Identity.omniture.tracking[trackingVar];
                    }
                    
                    _openOverlay(null,data);
                    $(window.document).trigger('onTwpMeterReady');//indicates pwresp is available
                };
                $(window.document).trigger('onTwpMeterComplete');           
            }); 
            */
        } catch(err) {
            $(window.document).trigger('onTwpMeterComplete');   
        };
    };  
    
    TWP.Identity.init = function () {
      setPerPageVars();
      if (!TWP.Identity.initComplete && window.top == window.self) {
        if(!TWP.Identity.handlersSet){ TWP.Identity.setHandlers() }
        _signInInit();
        // $(document).ready(function(){
          TWP.Identity.auth();
          TWP.Identity.initComplete=true;
        // });
      }
    }

    var _scrollHandler = function(event){
            event.stopPropagation();
            return false;
    }
    
    var _getKey = function (cookieString, cookieKeyValue, valueDelimiter, keyDelimiter) {
        
        valueDelimiter = (typeof valueDelimiter == "undefined" || !valueDelimiter)?"|":valueDelimiter;
        keyDelimiter = (typeof keyDelimiter == "undefined" || !keyDelimiter)?":":keyDelimiter;
        var returnValue = null;
        if (cookieString == null || typeof cookieString == 'undefined' || cookieString.indexOf(valueDelimiter)<0) {
            //invalid delimiter
            return returnValue;
        }
        var tmpArry = cookieString.split(valueDelimiter);
        
        $.each(tmpArry || [],function(key, value){
            if (value.indexOf(cookieKeyValue) >=0 ) {
                if (value.indexOf(keyDelimiter) >=0) {
                    returnValue = value.split(keyDelimiter)[1];
                }   
            }
        })
        return returnValue;
    }
    
    var _signInInit = function(){
        try {
            if(!user || user.length == 0 || user == null){
                //do nothing
            } else if (user && (!wpatc || wpatc.length == 0  ) || (user && wpatc && !wpatc.match(/\:K\=\d+/))){
                var url = TWP.signin.api_url + "?username="+user;           
                var thisDate = new Date();
                $.ajax({
                  type: "GET",
                  url: url,
                  dataType: "jsonp",
                  timeout: 2000,
                  cache: "false",   
                  success: function(data){
                    if (data.K){
                        /*
                        wpatc = wpatc.replace(/\:K\=\d+/,"");
                        thisData = (typeof data == "object")?data:jQuery.parseJSON(data);
                        $.cookie("WPATC",wpatc+":K="+thisData.K,{
                                                domain:currDomain,
                                                expires:new Date(thisDate.setDate(thisDate.getDate() + 700)),
                                                path:"/"
                                            })
                        */  
                    }
                  }                 
                })
        
            }
        } catch (e) {}      
    }
    
    var _openOverlay = function(event,data){
       (typeof TWP_Debug != 'undefined') && TWP_Debug.pagedebug && window.console && console.log && console.log(event.type + 'fired!');   
       try{event && event.stopPropagation()}catch(e){};

       if (data.pwresp.action === 0) {
            return;
       };
       
       try {
            var obj = $.extend({},TWP.Identity.paywall.pwresp, data.pwresp);//merge data & TWP.Identity.paywall
            if(isPWA){obj.tref='pwa'}
            var params = '';

            $.each(obj,function(i,v){
                 if (i != 'url' && i != 'locstor'){
                    params = params + "&" + i + "=" + v;
                 }   
            })
            var url = data.pwresp.url + ((data.pwresp.url.indexOf('?')>=0)?'&':'?') + encodeURI('page=' + (!!window.s && s.eVar1) 
                                    + "&section=" + (!!window.s && s.eVar2) 
                                    + "&prev=" + (!!window.s && s.eVar6) 
                                    + "&geo=" + (!!window.s && s.eVar7) 
                                    + "&ctype=" + (!!window.s && s.eVar17) 
                                    + "&signedin=" + (!!window.s && s.eVar62) 
                                    + "&mcount=" + (data.pwresp.mtrct || (TWP.Identity.paywall.pwresp && TWP.Identity.paywall.pwresp.mtrct))
                                    + "&sub=" + (data.pwresp.sub  || (TWP.Identity.paywall.pwresp && TWP.Identity.paywall.pwresp.sub))
                                    + "&ismetered=" + (data.pwresp.mtr  || (TWP.Identity.paywall.pwresp && TWP.Identity.paywall.pwresp.mtr))
                                    + "&pwrsn=" + (data.pwresp.pwrsn)
                                    + "&destination=" + window.location.href.split("?")[0]
                                    + params
                                    );
            window.console && console.log && console.log("PAYWALL OVERLAY/REDIRECT URL: " + url);
            
            //if paywall, check whether to display overlay
            if (data.pwresp.action >= 3 && _isOverlayDisplayed(data) === false) {
                 //manually set acqTest to 1. 
                 //TODO REMOVE THIS CODE WHEN IE8/9 updated                
                window.location.href = url + '&acq_test=1';
                return;
            };
            
            //overlay may be displayed.  
            if( typeof overlays[data.pwresp.action].overlay !== 'undefined' && data.pwresp.action > 0 ) {
                try{
                    (typeof window.TWP_Debug != 'undefined') && TWP_Debug.pagedebug && window.console && console.log && console.log("Regwall: preparing to display overlay");
                    (typeof window.TWP_Debug != 'undefined') && TWP_Debug.pagedebug && window.console && console.log && console.log(TWP.Identity.paywall);                 
                }catch(e){}

                var thisAction = data.pwresp.action;
                if (isMobile && thisAction === 1) {     
                    thisAction = 'mobile';
                }       
                var $overlay = $(overlays[thisAction].overlay);
                $('body').css('overflow-y',overlays[thisAction].overflowCss);
                //$('body').prepend(overlay);
                if (thisAction > 1) {
                    $(document).on('touchmove mousewheel mousemove scroll', _scrollHandler);                
                }
                $overlay.jqm(overlays[thisAction].overlayConfig);
                $overlay.find("iframe").attr('src',url); 
                $overlay.jqmShow();            
            };
        } catch (e) {
        };  
    };
    
    var _isOverlayDisplayed = function(data) {
        var displayOverlay = true;
        
        //Display paywall overlay for all browsers except IE version 9 and less
        //if (isMobile || typeof acqTest != 'undefined' && acqTest == "1" && (data && data.pwresp && data.pwresp.action && data.pwresp.action >=3 ) ) {
        
        if ((window.wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.browser == "Explorer" && wp_pb.BrowserInfo.version <=9 ) ||
              ($.browser && $.browser.msie && $.browser.version <= 9)) {
             displayOverlay = false;
        };
        
        return displayOverlay;
    };
    
    /**** Onsite Messaging ****/

    var _qaEnvironment = (window.location.host.indexOf('digitalink.com') != -1);

    var showingBreakingNewsBar = function() {
      var breakingNewsBar = $('.pb-f-page-breaking-news-bar .breaking-news-bar').first();
      var closeBarTime = (localStorage.getItem('breaking_news_bar_close_time') === null) ? 0 : parseInt(localStorage.getItem('breaking_news_bar_close_time'));
      
      if(!breakingNewsBar.data('suppressed') && breakingNewsBar.data('hasTimestamp') &&
          (breakingNewsBar.data('inEditor') || breakingNewsBar.data('timestamp') > closeBarTime)) {
        return true;
      }
      return false;
    
    };

    // Track appearance
    var omnitureShowMessages = function(reason, eventCode) {
      if (!!window.s && typeof s.sendDataToOmniture == 'function'){
        try {               
            s.sendDataToOmniture('onsitemessaging', eventCode, {
            eVar1: window.wp_page_name,
            prop2: window.wp_subsection,
            eVar2: window.wp_channel,
            prop3: window.wp_content_type,
            eVar17: window.wp_content_type,
            eVar26: reason
          }, {wait: true});
        } catch(e){}    
      }
    };

    var _getUserMessages = function(_callback) {
      var user = $.cookie('wapo_login_id');
      if(user) {
        var url = 'https://subscribe.washingtonpost.com/onsitemessaging/';
        
        // update url for qa accounts
        if(_qaEnvironment) {
          url += 'qa/';
        } else {
          url += 'prod/';
        }

        url +=  user + '.json';
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'text',
          timeout: 2000,
          cache: 'false',   
          success: function(data){
            // check for JSON before parsing response (ignore 404)
            if(data[0] == "{") {
              try {
                data = JSON.parse(data);
            if(_callback && new Date().getTime() < data.notValidAfter && data && data.messages.length > 0) {
                  _callback(data);
            }
              } catch(ex) {}
            }
          }             
        }).fail(function() {});
      }
    };

    var _messageTypes = {
      CANCEL: [ 
        {
          'display': {
            'default': {
              'message': 'You have canceled your subscription. {LINK} to keep your access past {DATE}.',
              'action': 'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} your subscription to keep your access.', 
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': {'type':'percent', 'remaining':'100'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_cancelled_subscriber_1',
          'style': 'urgent'

        },
        {
          'display': {
            'default': {
              'message':'{LINK} your subscription before {DATE} to keep your access.',
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} your subscription to keep your access.', 
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': {'type':'percent', 'remaining': '49'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_cancelled_subscriber_2',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'{LINK} your subscription in the next {DAYS} days to keep your access.',
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} your subscription to keep your access.', 
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': {'type':'percent', 'remaining': '25'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_cancelled_subscriber_3',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'Your subscription expires in {HOURS} hours. {LINK} now to keep your access. ',
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} your subscription to keep your access.', 
              'action':'Reactivate', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': { 'type': 'hours', 'remaining':'24'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_cancelled_subscriber_4',
          'style': 'urgent'
        }
      ],
      SUSPEND: [
        {
          'display': {
            'default':{
              'message':'We were unable to process your last payment. {LINK} to keep your access.', 
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} to keep your access.', 
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': {'type':'percent', 'remaining':'100'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_suspended_subscriber_1',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'Your account still has payment issues. {LINK} to keep your access.',
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} to keep your access.', 
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          },
          'trigger': {'type':'percent', 'remaining': '49'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_suspended_subscriber_2',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'{LINK} in {HOURS} hours to keep your access.',
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            },
            'mobile': {
              'message': '{LINK} to keep your access.', 
              'action':'Update your payment method', 'link': 'https://subscribe.washingtonpost.com/profile/#/profile/digitalsubscription'
            }
          }, 
          'trigger': { 'type': 'hours', 'remaining':'24'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_suspended_subscriber_3',
          'style': 'urgent'
        }
      ],
      FREETRIAL: [
        {
          'display': {
            'default': {
              'message':'Welcome to your free trial of The Washington Post. Enjoy free digital access until {DATE}.'
            },
            'mobile': {
              'message': 'Welcome to your free trial of The Washington Post.'
            }
          },
          'trigger': {'type':'once'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_1',
          'style': 'default'
        },
        {
          'display': {
            'default': {
              'message':'We hope you\'re enjoying your free trial. {LINK} to keep your access past {DATE}.',
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            },
            'mobile': {
              'message': 'Your free trial expires on {DATE}. {LINK} to keep your access.', 
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            }
          },
          'trigger': {'type':'percent', 'remaining':'95'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_2',
          'style': 'default'
        },
        {
          'display': {
            'default': {
              'message':'Your digital access expires in {DAYS} days. Become a subscriber to keep your access.',
              'action':'Subscribe now', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            },
            'mobile': {
              'message': '{LINK} to keep your access.', 
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            }
          },
          'trigger': {'type':'percent', 'remaining':'50'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_3',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'Your free trial expires in {DAYS} days. {LINK} to enjoy your access past {DATE}.',
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            },
            'mobile': {
              'message': '{LINK} to keep your access.', 
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            }
          },
          'trigger': {'type':'percent', 'remaining':'25'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_4',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'Your free trial expires soon. {LINK} to keep your access past {DATE}.',
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            },
            'mobile': {
              'message': 'Your free trial expires soon. {LINK} to keep your access past {DATE}.', 
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            }
          },
          'trigger': {'type':'percent', 'remaining':'5'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_5',
          'style': 'urgent'
        },
        {
          'display': {
            'default': {
              'message':'Hurry! Your free trial expires in {HOURS} hours. {LINK} to keep your access.',
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            },
            'mobile': {
              'message': 'Your free trial expires in {HOURS} hours. {LINK} to keep your access.', 
              'action':'Subscribe', 'link': 'https://subscribe.washingtonpost.com/acquisition?promo=freetopaid39'
            }
          },
          'trigger': {'type':'hours', 'remaining':'24'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_free_trial_subscriber_6',
          'style': 'urgent'
        }
      ],
      START: [
        {
          'display': {
            'default': {
              'message':'Welcome to The Washington Post. Thank you for subscribing.'
            },
            'mobile': {
              'message': 'Welcome to The Washington Post. Thank you for subscribing.'
            }
          },
          'trigger': {'type':'once'},
          'dismiss': '1 per visit, per device',
          'reason': 'ntfn_start_1',
          'style': 'default'
        },
        {
          'display': {
            'default': {
              'message':'What are you interested in? {LINK} from The Post\'s 65+ newsletters for more great content.',
              'action':'Choose', 'link': 'https://subscribe.washingtonpost.com/newsletters/#/newsletters?method=MP&location=WELE_ON'
            },
            'mobile': {
              'message': '{LINK} from The Post\'s 65+ newsletters for more great content.', 
              'action':'Choose', 'link': 'https://subscribe.washingtonpost.com/newsletters/#/newsletters?method=MP&location=WELE_ON'
            }
          },
          'trigger': {'type':'percent', 'remaining':'90'},
          'dismiss': 'server',
          'reason': 'ntfn_start_2',
          'style': 'default'
        }
      ]
    };

    var _generateMessages = function(messageData, mobile) {

      var messages = messageData.messages;

      var type; // look at the first message
      var i;
      for(i = 0; i < messages.length; i++) {
        // modify use case for special use cases
        if(messages[i].useCase == "START" && messages[i].isFreeTrial == "Y") {
          messages[i].useCase = "FREETRIAL"
        }

        // special case based on promo code
        if(messages[i].promoCode == "GRAHAM100" || messages[i].promoCode == "dg_amazonprimedeal") {
          return false;
        }

        type = messages[i].useCase;
        // select the first recognized message type
        if(_messageTypes[type]) {
          break;
        }
      } 

      // stop if we do not have a recognized message type
      if(!_messageTypes[type]) {
        return false;
      }

      var messageDuration = messages[i].messageExpire - messages[i].messageDate;
      var timeRemaining = messages[i].messageExpire - new Date().getTime();
      var percentRemaining = (timeRemaining / messageDuration);
      percentRemaining;

      // select the message
      var _messageTemplate;
      var messageId = messages[i].id;

      for(var m = 0; m < _messageTypes[type].length; m++) {
        var trigger = _messageTypes[type][m].trigger;

        if(trigger.type == "once") {
          // show this message once
          var messageReason = _messageTypes[type][m].reason;
          if(!_isDismissed(messageId, messageReason)) {
            _messageTemplate = _messageTypes[type][m];
            break;
          }
        } else if(trigger.type == "hours") {
          var hoursRemaining = (timeRemaining / (1000 * 60 * 60)); // convert from ms to hours
          if(trigger.remaining > hoursRemaining) {
            _messageTemplate = _messageTypes[type][m];
          }

        } else if(trigger.type == "percent") {
          if((trigger.remaining/100) > percentRemaining) {
            _messageTemplate = _messageTypes[type][m];
          }
        }
      }

      // do not display the message if it has been dismissed
      if(_isDismissed(messageId, _messageTemplate.reason)) {
        return false;
      }

      // if only meant to show once, mark this message as dismissed, so that it only appears once
      if(_messageTemplate.trigger.type == "once") {
        _dismissMessageLocal(messageId, _messageTemplate.reason, false);
      }

      var _message = _messageTemplate.display.default;
      if(mobile && _messageTemplate.display.mobile) {
        _message = _messageTemplate.display.mobile;
      }
      
      var _html = _message.message;

      var validUntil = new Date(messages[i].messageExpire).toLocaleDateString('en-us', { month: 'long', day: 'numeric' });;
      _html = _html.replace('{DATE}', validUntil);

      var validHours = Math.round(timeRemaining / (1000 * 60 * 60));

      // do not show messages with negative time
      if(validHours < 0) {
        return false;
      }

      var validDays = Math.round(validHours / 24);

      _html = _html.replace('{DAYS}', validDays);
      _html = _html.replace('{HOURS}', validHours);
      
      if(_qaEnvironment && _message.link) {
        // rewrite the message link for qa
        _message.link = _message.link.replace('washingtonpost.com','digitalink.com');
      }

      // add reason to tid query parameter for omniturte tracking
      if(_message.link) {
        _message.link += (_message.link && _message.link.indexOf("?") > -1 ? "&tid=" : "?tid=") + _messageTemplate.reason;
      } else {
        _message.link = "#";
      }

      // add on the button information + mobile design
      /*
      if(mobile && _message.action) {
        _html += " <a href=" + _message.link + " style='color:white;text-decoration:underline;white-space: nowrap;'>" + _message.action + "</a>";
      }
      else if(_message.action) {
        _html += " <a href=" + _message.link + " style='cursor:pointer;background-color:#8BC34A;color:#FFFFFF;padding:2px;padding-left:10px;padding-right:10px;border-radius:2px;font-size:14px;display:inline-block;margin-left:20px;'>" + _message.action + "</a>";
      }
      */

      // add link
      var action = "<a href=" + _message.link + " style='color:white;display:inline-block;border-bottom:1px solid #FFFFFF;white-space: nowrap;'>" + _message.action + "</a>"
      _html = _html.replace("{LINK}", action);

      // add button
      var button = "<a href=" + _message.link + " style='cursor:pointer;background-color:#8BC34A;color:#FFFFFF;padding:2px;padding-left:10px;padding-right:10px;border-radius:2px;font-size:14px;display:inline-block;margin-left:20px;'>" + _message.action + "</a>";
      _html = _html.replace("{BUTTON}", action);

      return {html:_html, id:messageId, reason:_messageTemplate.reason, link:_message.link, style:_messageTemplate.style, dismiss: _messageTemplate.dismiss};
    };

    var _isDismissed = function(id, reason) {
      
        var dismissed = false;

        try {
          dismissed = JSON.parse(localStorage.getItem('userMessages'));
          if(dismissed && dismissed[id]) {
            if(dismissed[id].reasons[reason]) {
              return true;
            }
          }
        } catch(ex) {
          // if localStorage is not available, do not show the message
          return true;
        }

        try {
          dismissed = JSON.parse(sessionStorage.getItem('userMessages'));
          if(dismissed && dismissed[id]) {
            if(dismissed[id].reasons[reason]) {
              return true;
            }
          }
        } catch(ex) {
          // if sessionStorage is not available, do not show the message
          return true;
        }

      return false;
    };

    var _dismissMessageServer = function(id, reason, hide) {

      // dismiss the message on the serve
      var url = _qaEnvironment ? "https://subscribe.digitalink.com" : "https://subscribe.washingtonpost.com";

      $.ajax({
        type: "POST",
        url: url + "/onsiteapi/dismiss",
        xhrFields: {
          withCredentials: true
        },
        data: JSON.stringify({id: id}),
        processData: false,
        success: function(resp){
        },
        error:  function() {
        },
        contentType: 'application/json'
      });

      // additionally dismiss the message in local storage
      _dismissMessageLocal(id,reason,hide);

    };

    var _dismissMessageLocal = function(id, reason, hide) {
      // lookup the message by id
      // @todo: dismiss session, date or server
      // localStorage, server api

      hide = (hide==null) ? true : hide;

      try {
        var dismissed = JSON.parse(localStorage.getItem('userMessages'));
        dismissed = (dismissed && typeof dismissed == "object") ? dismissed : {};

        dismissed[id] = (dismissed[id] && typeof dismissed[id] == "object") ? dismissed[id] : {};

        dismissed[id].status = 'dismissed';
        dismissed[id].timestamp = new Date();
        
        dismissed[id].reasons = (typeof dismissed[id].reasons == "object") ? dismissed[id].reasons : {};

        dismissed[id].reasons[reason] = true;

        localStorage.setItem('userMessages', JSON.stringify(dismissed));

      } catch(ex) {
        // sessionStorage/localStorage unavailable
      }

      if(hide) {
        $messageArea = $('#_userMessages');
        $messageArea.css({overflow:"hidden"});
        $messageArea.animate({height:0}, function(){
          $('#page').animate({'height':originalPageHeight}, function(){
            $messageArea.remove();
          });
        });
      }
    };

    var _dismissMessageSession = function(id, reason, hide) {
      // lookup the message by id
      // @todo: dismiss session, date or server
      // sessionStorage, server api

      hide = (hide==null) ? true : hide;

      try {
        var dismissed = JSON.parse(sessionStorage.getItem('userMessages'));
        dismissed = (dismissed && typeof dismissed == "object") ? dismissed : {};

        dismissed[id] = (dismissed[id] && typeof dismissed[id] == "object") ? dismissed[id] : {};

        dismissed[id].status = 'dismissed';
        dismissed[id].timestamp = new Date();
        
        dismissed[id].reasons = (typeof dismissed[id].reasons == "object") ? dismissed[id].reasons : {};

        dismissed[id].reasons[reason] = true;
        sessionStorage.setItem('userMessages', JSON.stringify(dismissed));

      } catch(ex) {
        // sessionStorage/localStorage unavailable
      }

      if(hide) {
        $messageArea = $('#_userMessages');
        $messageArea.css({overflow:"hidden"});
        $messageArea.animate({height:0}, function(){
          $('#page').animate({'height':originalPageHeight}, function(){
            $messageArea.remove();
          });
        });
      }
    };

    var _displayMessages = function(messageData) {
      messages = messageData.messages;
      console.log(messages[0].useCase);

      var messageId = messages[0].id;

      // dismiss check moved, to include message reason

      // determine mobile vs desktop
      var mobile = $( window ).width() <= 480;
      var _message = _generateMessages(messageData, mobile);
      console.log(_message)

      if(_message) {

        // @todo: move to css media queries for responsive styles
        var dynamicStyle = mobile ? "font-size:14px;text-align:left;" : "font-size:16px;text-align:center;";
        var dynamicPadding = mobile ? "20px" : "40px";

        // @todo: use css classes based on message types
        if(_message.style == "urgent") {
          _message.html = _message.html.replace("color:white","color:#A94442");

          // append the message to the html on the page
          $('.top-nav').append("\
              <div id='_userMessages' style='"+dynamicStyle+"-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);cursor:pointer;display:none;background-color:#EFDEDE;color:#A94442;position:fixed;left:0px;right:0px;top:60px;font-family:FranklinITCProBold;'>\
                <div style='padding:13px;'><div style='margin-left:"+dynamicPadding+";margin-right:40px;'>"+_message.html+"</div>\
                <div id='_userMessagesDismiss' style='cursor:pointer;position:absolute;top:calc(50% -  13px);right:20px;background-color:#C39190;color:#EFDEDE;height: 26px;width: 26px;line-height: 26px;font-size: 26px;text-align: center;font-family:FranklinITCProLight;font-weight: 300;border-radius:100px;'>&times;</div>\
              </div></div></div>").css('overflow','visible');
        } else {
          _message.html = _message.html.replace("color:white","color:#ffffff");

          // append the message to the html on the page
          $('.top-nav').append("\
              <div id='_userMessages' style='"+dynamicStyle+"-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);cursor:pointer;display:none;background-color:#1955A5;color:#ffffff;position:fixed;left:0px;right:0px;top:60px;font-family:FranklinITCProBold;'>\
                <div style='padding:13px;'><div style='margin-left:"+dynamicPadding+";margin-right:40px;'>"+_message.html+"</div>\
                <div id='_userMessagesDismiss' style='cursor:pointer;position:absolute;top:calc(50% -  13px);right:20px;background-color:#004681;color:#ffffff;height: 26px;width: 26px;line-height: 26px;font-size: 26px;text-align: center;font-family:FranklinITCProLight;font-weight: 300;border-radius:100px;'>&times;</div>\
              </div></div></div>").css('overflow','visible');          
        }

        $userMessages = $('#_userMessages');

        lastMessageHeight = messageHeight = $userMessages.css('height');

        // increase the height of the nav bar
        originalPageHeight = pageHeight = $('#page').css('height');
        pageHeight = parseInt(pageHeight) + parseInt(messageHeight); 
        $('#page').css('height', pageHeight + 'px');
        
        $userMessages.css('height','0px')
        $userMessages.css('display','block');
        $userMessages.animate({'height':messageHeight});

        // delay long enough for omniture to complete loading
        setTimeout(function(){ 
          omnitureShowMessages(_message.reason, 'event66');
        }, 2000);

        // make full error message clickable
        $userMessages.click(function(){
          if(_message.link == "#") {
            $('#_userMessagesDismiss').click();
          } else {
            window.location.href = _message.link;
          }
        });

        // set the click handler for disimissing the messages
        $('#_userMessagesDismiss').click(function(event){
          event.stopPropagation();
          if(_message.dismiss == "server") {
            // server
            _dismissMessageServer(_message.id, _message.reason);
          } else if(_message.dismiss == "local") {
            // localStorage
            _dismissMessageLocal(_message.id, _message.reason);
          } else { 
             // sessionStorage
            _dismissMessageSession(_message.id, _message.reason);
          }

          omnitureShowMessages(_message.reason, 'event63');
        });
        
        // on resize
        $(window).resize(function() {
          $userMessages = $('#_userMessages');
          $userMessages.css('height','auto');
          var newMessageHeight = $userMessages.css('height');

          var heightChange = parseInt(newMessageHeight) - parseInt(lastMessageHeight);
          lastMessageHeight = newMessageHeight;
          var pageHeight = $('#page').css('height');
          pageHeight = parseInt(pageHeight) + heightChange; 
          $('#page').css('height', pageHeight + 'px');


        });
      }
    };

    var _showMessages = function() {

      var articlePage = (window.location.pathname.match(/\//g).length > 4 && window.location.pathname != "/pb/homepage/" && window.location.pathname != "/" && window.location.pathname != "");

      // show messages only on article pages, without the breaking news b
      if(articlePage && !showingBreakingNewsBar()) {
        _getUserMessages(_displayMessages);
      }

    };
    
    /***** End Onsite Messaging ****/

    TWP.Identity._openOverlay = _openOverlay;
    TWP.Identity._showMessages = _showMessages;
    
    if(!window.wp_pb || !wp_pb.StaticMethods || !wp_pb.StaticMethods.isPageHydrated || wp_pb.StaticMethods.isPageHydrated()){
      TWP.Identity.init();
      TWP.Identity._showMessages();
    }

    // NOTE: For PWA
    __e.push(['shamble', function() {
      TWP.Identity.initComplete=false;
      TWP.Identity.init();
      TWP.Identity._showMessages();
    }]);

})(window.Zepto || window.jQuery);
