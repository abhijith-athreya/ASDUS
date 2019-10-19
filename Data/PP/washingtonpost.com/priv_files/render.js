(function($,window){var env=wp_pb.environment||"production";var apiURL,subscribeURL,unSubscribeURL,recentNotificationsURL;var pushNotifToken="push_notification_token";var Notifications="push_notifications";var sessionCount="push_notif_session_count";var lastModified="push_notif_lastModified";var subscribedToMMP="push_notif_subscribedMMP";var reg;var logger=new TWP.Tools.logger("dn");var Push={init:function(){var width=window.innerWidth>0?window.innerWidth:screen.width,is_chrome=navigator.userAgent.indexOf("Chrome")>
-1;if(env=="production")apiURL="https://devicereg.washingtonpost.com/";else apiURL="https://device-reg-staging.wpdigital.net/";subscribeURL=apiURL+"pushv2/register/breaking_news/DESKTOP_ALERTS/DESKTOP_CHROME?deviceToken\x3d";unSubscribeURL=apiURL+"pushv2/unregister/breaking_news/DESKTOP_ALERTS?deviceToken\x3d";recentNotificationsURL=apiURL+"pushv2/messages/recent?pushApp\x3dDESKTOP_ALERTS\x26days\x3d1";if(env=="production")recentNotificationsURL="https://device-reg.wpdigital.net/pushv2/messages/recent?pushApp\x3dDESKTOP_ALERTS\x26days\x3d1";
$(".pb-f-page-push-notifications").addClass("hide");if(is_chrome&&width>400)Push.initServiceWorker()},initServiceWorker:function(){if("serviceWorker"in navigator){logger.log("Service Worker is supported");navigator.serviceWorker.addEventListener("message",function(event){logger.log("Push alerts updated",event.data);Push.saveInLocalStorage(event.data)});wp_pb&&wp_pb.StaticMethods&&wp_pb.StaticMethods.registerServiceWorker().then(function(){return navigator.serviceWorker.ready}).then(function(serviceWorkerRegistration){reg=
serviceWorkerRegistration;logger.log("Service Worker is ready :^)",reg);Push.requestPermission();Push.initNotifications()})["catch"](function(error){logger.log("Service Worker Error :^(",error)})}},getSubscription:function(callback){reg.pushManager.getSubscription().then(function(pushSubscription){if(pushSubscription==null)reg.pushManager.subscribe({userVisibleOnly:true}).then(function(pushSubscription){var x=pushSubscription.endpoint.split("/");token=x[x.length-1];window.localStorage.setItem(pushNotifToken,
token);Push.subscribeMMP(pushSubscription,callback)});else{var x=pushSubscription.endpoint.split("/");var token=x[x.length-1];window.localStorage.setItem(pushNotifToken,token);if(callback)callback()}})},subscribeMMP:function(subscription,callback){var userData,token,url;userData=subscription.toJSON().keys.auth;var x=subscription.endpoint.split("/");token=x[x.length-1];url=subscribeURL+token+"\x26userData\x3d"+userData;(function _subscribeMMP(){$.get(url,function(data){if(callback)callback();if(data.status==
"Registered")window.localStorage.setItem(subscribedToMMP,true);else if(data.status=="Queued"){window.localStorage.setItem(subscribedToMMP,"Queued");setTimeout(function(){_subscribeMMP()},3E4)}}).fail(function(){window.localStorage.setItem(subscribedToMMP,false);setTimeout(function(){_subscribeMMP()},3E4)})})()},unsubscribe:function(callback){reg.pushManager.getSubscription().then(function(pushSubscription){if(pushSubscription){var x=pushSubscription.endpoint.split("/");var token=x[x.length-1];(function _unsubscribeMMP(){$.get(unSubscribeURL+
token,function(data){window.localStorage.removeItem(pushNotifToken);window.localStorage.removeItem(Notifications);window.localStorage.removeItem(lastModified);window.localStorage.removeItem(subscribedToMMP);pushSubscription.unsubscribe().then(function(event){logger.log("Unsubscribed!",event);if(callback)callback()})["catch"](function(error){logger.log("Error unsubscribing",error)})}).fail(function(){setTimeout(function(){_unsubscribeMMP()},3E4);window.localStorage.removeItem(pushNotifToken);window.localStorage.removeItem(Notifications);
window.localStorage.removeItem(lastModified);window.localStorage.removeItem(subscribedToMMP);$(".notifications-container .permission-request").addClass("hide");$(".notifications-container .notification-items").addClass("hide");pushSubscription.unsubscribe().then(function(event){logger.log("Unsubscribed!",event);if(callback)callback()})["catch"](function(error){logger.log("Error unsubscribing",error)});sendToScout("count","UnSubscribeResponseError",1,["env:"+env],1)})})()}else{window.localStorage.removeItem(pushNotifToken);
window.localStorage.removeItem(Notifications);window.localStorage.removeItem(lastModified);if(callback)callback()}})},getSubscriptionToken:function(){return localStorage.getItem(pushNotifToken)},_timeSince:function(date){var currentTime=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"});var seconds=Math.floor((new Date(currentTime)-date)/1E3);if(seconds<3)return"just now";if(seconds<60)return Math.floor(seconds)+" seconds ago";var interval=Math.floor(seconds/3600);if(interval==1)return interval+
" hour ago";if(interval>24)return false;if(interval>1)return interval+" hours ago";interval=Math.floor(seconds/60);if(interval==1)return interval+" minute ago";if(interval>1)return interval+" minutes ago";return Math.floor(seconds)+" seconds ago"},_appendItem:function(notifications){var $container=$(".notifications-container .notification-items .notifications-list");var seenCount=0,itemAdded=false;if(window.localStorage.getItem(subscribedToMMP)=="false"){$container.html("\x3cp class\x3d'empty-notification-txt'\x3eNotifications are not currently available.\x3c/p\x3e");
return}if(notifications&&notifications.length>0){var $list=$(document.createElement("div"));for(var i=0;i<notifications.length;i++){var data=notifications[i];var messageId=data.pushID;var time=Push._timeSince(new Date(data.datetime));if(time!==false){var $item=$(document.createElement("div"));$item.addClass("item");if(data.seen)$item.addClass("seen");else seenCount++;var $headline=$(document.createElement("a"));$headline.addClass("headline");$headline.html(data.headline);if(data.contentURL.indexOf("?")>
-1)var url=data.contentURL+"\x26tid\x3dnotifi_bell_breaking-news\x26pushid\x3d"+messageId;else var url=data.contentURL+"?tid\x3dnotifi_bell_breaking-news\x26pushid\x3d"+messageId;$headline.attr("href",url);var $tagline=$(document.createElement("p"));$tagline.addClass("tagline");$tagline.html(time);$item.append($headline);$item.append($tagline);$list.append($item);itemAdded=true}}}if(seenCount>0)$(".notif-number").html(seenCount).removeClass("hide");if(itemAdded==false)$container.html("\x3cp class\x3d'empty-notification-txt'\x3eThere are no recent notifications.\x3c/p\x3e");
else $container.html($list)},updateNotifications:function(){function performGET(){$.get(recentNotificationsURL,function(data,status,xhr){window.localStorage.setItem(lastModified,xhr.getResponseHeader("Last-Modified"));Push.saveInLocalStorage(data.DESKTOP_ALERTS)}).fail(function(){sendToScout("count","APIResponseError",1,["env:"+env],1)})}var lastModifiedData=window.localStorage.getItem(lastModified);if(lastModifiedData)$.ajax({type:"HEAD",url:recentNotificationsURL}).done(function(data,status,xhr){if(xhr.getResponseHeader("Last-Modified")!==
lastModifiedData)performGET()}).fail(function(){sendToScout("count","APIResponseError",1,["env:"+env],1)});else performGET()},saveInLocalStorage:function(notificationData){var savedData=JSON.parse(window.localStorage.getItem(Notifications));if(savedData){for(var i=0;i<notificationData.length;i++){var result=$.grep(savedData,function(e){return e.messageId==notificationData[i].messageId});if(result.length>0)notificationData[i].seen=result[0].seen}savedData=notificationData}else savedData=notificationData;
if(savedData&&savedData.length>0){window.localStorage.setItem(Notifications,JSON.stringify(savedData));Push._appendItem(savedData)}else $(".notifications-container .notifications-list").html("\x3cp class\x3d'empty-notification-txt'\x3eThere are no recent notifications.\x3c/p\x3e")},fetchNotifications:function(){var token=Push.getSubscriptionToken();if(token&&token!==""){savedData=JSON.parse(window.localStorage.getItem(Notifications));Push.saveInLocalStorage(savedData);if(window.localStorage.getItem(subscribedToMMP)!==
"true")setTimeout(function(){reg.pushManager.getSubscription().then(function(pushSubscription){Push.subscribeMMP(pushSubscription)})},3E4)}},reqPermNativePopup:function(pageLoad){setTimeout(function(){sendCustomTrackProps("notifications ask","notifi_ask")},5E3);Notification.requestPermission(function(permission){if(permission==="granted"){sendCustomTrackProps("notifications allowed","notifi_allowed");Push.getSubscription(function(){Push.fetchNotifications();Push.updateNotifications();$(".notifications-container .permission-request").addClass("hide");
$(".notify-ic").removeClass("bell-opened")})}else if(permission==="denied"){$(".notifications-container .permission-request .permission-default").addClass("hide");$(".notifications-container .permission-request .permission-denied").removeClass("hide");sendCustomTrackProps("notifications blocked","notifi_blocked")}else if(permission=="default")sendCustomTrackProps("notifications dismissed","notifi_dismissed")})},initNotifications:function(){function hideAll(scrolling){$(".notif-number, .notification-items, .permission-request").addClass("hide");
$(".notify-ic").removeClass("bell-opened");$(".notifications-list").removeClass("scrolling");if(scrolling)sendCustomTrackProps("notifications bell close scroll","notifi_bell-close-scroll");else sendCustomTrackProps("notifications bell close click","notifi_bell-close-click")}function showRequestPermission(){$(".notifications-container .permission-request").removeClass("hide");$(".notifications-container .notification-items").addClass("hide");$(".notify-ic").addClass("bell-opened")}function showNotifications(){var savedData=
JSON.parse(window.localStorage.getItem(Notifications));Push._appendItem(savedData);$(".notification-items").removeClass("hide");$(".notifications-container .permission-request").addClass("hide");$(".notify-ic").addClass("bell-opened");var h=Math.max(document.documentElement.clientHeight,window.innerHeight||0);if(h-220<$(".notifications-list").height())$(".notifications-list").addClass("scrolling");if(!$(".notif-number").hasClass("hide")){$(".notif-number").addClass("hide");if(savedData){for(var i=
0;i<savedData.length;i++)savedData[i].seen=true;window.localStorage.setItem(Notifications,JSON.stringify(savedData))}}}$(document).mouseup(function(e){var container=$(".notifications-container");if(!container.is(e.target)&&container.has(e.target).length===0&&(!$(".notification-items").hasClass("hide")||!$(".permission-request").hasClass("hide")))hideAll()});wp_pb.register("nav","finish_close",function(){if(!$(".notification-items").hasClass("hide")||!$(".permission-request").hasClass("hide"))hideAll(true)});
window.addEventListener("online",function(e){console.log("online test");var token=Push.getSubscriptionToken();if(token&&token!=="")Push.updateNotifications()});$(".notifications-container .permission-request .notify-action.yes").click(function(){sendCustomTrackProps("notifications turn on","notifi_bell-turnon");Push.reqPermNativePopup()});$(".notifications-container .turn-off").click(function(){sendCustomTrackProps("notifications turn off","notifi_bell-turnoff");Push.unsubscribe(function(){$(".notifications-container .permission-request").removeClass("hide");
$(".notifications-container .notification-items").addClass("hide")});return false});$(".notifications-container .notify-action.not-now").click(function(){sendCustomTrackProps("notifications not now","notifi_bell-notnow");hideAll()});$(".notify-ic").click(function(){if($(this).hasClass("bell-opened")){hideAll();return}if($(".pb-f-posttv-live-bar").height())$(".notifications-top-arrow").addClass("gear-bar");else $(".notifications-top-arrow").removeClass("gear-bar");sendCustomTrackProps("notifications bell open",
"notifi_bell-open");if(Notification.permission==="granted"){var token=Push.getSubscriptionToken();if(token&&token!=="")showNotifications();else showRequestPermission()}else showRequestPermission()});if(Notification.permission==="granted")Push.fetchNotifications();var $headerNotifications=$(".pb-f-page-push-notifications .notifications-container").removeClass("hidden");$(".pb-f-page-header-v2 .sign-up-buttons").after($headerNotifications)},requestPermission:function(){if(Notification.permission===
"default"){var session=window.sessionStorage.getItem(sessionCount),sessionIntVal=session?parseInt(session):0;window.sessionStorage.setItem(sessionCount,++sessionIntVal);if(sessionIntVal%3==0)Push.reqPermNativePopup(true)}}};var sendToScout=function(type,key,value,tgs,sampleRate){sampleRate=sampleRate||1;tgs=tgs||[];var message={k:"PushNotification."+key,v:value,tags:tgs,sr:sampleRate};var xmlhttp=new XMLHttpRequest;xmlhttp.open("POST","https://pharos.arcpublishing.com/scout/"+type);xmlhttp.setRequestHeader("Content-Type",
"application/json;charset\x3dUTF-8");xmlhttp.send(JSON.stringify(message))};function trackProps(value){var props={pageName:window.wp_page_name,eVar1:window.wp_page_name,prop2:window.wp_subsection,eVar2:window.wp_channel,prop3:window.wp_content_type,eVar17:window.wp_content_type};props.eVar26=value;return props}function sendCustomTrackProps(name,value){if(!!window.s)window.s.sendDataToOmniture(name,"event80",trackProps(value),{wait:true})}Push.init()})(jQuery,window);

(function() {

	// NOTE: Event queue
	__e = window.__e || [];

	var
		 $w = $(window)
		,logger = (!!window.TWP && !!TWP.Tools && !!TWP.Tools.logger) ? new TWP.Tools.logger('pb-f-sharebars-top-share-bar') : window.console
	;

  try {

    var socialTools = {
        myRoot: '.top-sharebar-wrapper',
        init: function() {
        	$('.pb-f-sharebars-top-share-bar').each(function(index, root) {
        		//vertical-sticky-top-sharebar has no mobile view
            	if (!TWPHead.desktop && !$(root).find('.top-sharebar-wrapper').data('pb-prevent-ajax') && $(root).find('.vertical-sticky-top-sharebar').length == 0) {
            		var contentUriPath = $(root).find('.top-sharebar-wrapper').data('pb-canonical-url');
            		if (contentUriPath.indexOf('.washingtonpost.com') >= 0) {
            			$.ajax({
	        	            url:'/pb/api/v2/render/feature',
	        	            dataType:'json',
	        	            data: {
	        	            	id: $(root)[0].id,
	        	                uri: window.location.pathname,
	        	                contentUri: contentUriPath,
	        	                desktop: TWPHead.desktop,
	        	                mobile: TWPHead.mobile
	        	            },
	        	            cache:true,
	        	            jsonCallback:'wpTopShareBarAjax',
	        	            success:function(data) {
	        	            	$(root).empty();
	        	            	$(root).append($(data.rendering).children());
	        	            	socialTools.originalInit();
	        	            },
	        	            error:function(data){
	        	            	socialTools.originalInit();
	        	            }
	        	        });
            		} else {
            			socialTools.originalInit();
            		}
            		$(root).find('.top-sharebar-wrapper').data('pb-prevent-ajax','true');
            	} else {
            		socialTools.originalInit();
            	}
            });
        },
        originalInit: function(myRoot) {
            var self = this;
            myRoot = myRoot || this.myRoot;
            $myRoot = $(myRoot);

            //handle sticky behavior
            if ($myRoot.hasClass('sticky-top-sharebar')) {
            	stickyHorizontalShareBar.init();
            }

            $myRoot.each(function(index, myRootElement) {
            	//handle vertical-sticky behavior for each element that is vertical-sticky
            	if ($(myRootElement).hasClass('vertical-sticky-top-sharebar')) {
            		stickyVerticalShareBar.init($(myRootElement));
            	}
                var $root = $(myRootElement),
                    $individualTool = $('.tool:not(.more, .read-later-bookmark, .read-later-list)', $root),
                    $socialToolsWrapper = $('.social-tools-wrapper', $root),
                    $socialToolsMoreBtn = $('.tool.more', $socialToolsWrapper),
                    $socialToolsAdditional = $('.social-tools-additional', $root),
                    width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
                    isMobile = (mobile_browser === 1 && width < 480) ? true : false;

                $socialToolsMoreBtn.off('click').on('click', this, function(ev) {
                    $socialToolsMoreBtn.hide();
                    $socialToolsAdditional.show('fast', function(ev) {
                        $root.addClass("expanded");
                        $('.social-tools', $socialToolsAdditional).animate({
                            "margin-left": 0
                        }, 4250);
                    }).addClass('more-open'); //end addtl show
                }); //end more click
                $individualTool.off("click");
                $individualTool.on({
                    click: function(event) {
                        //event.stopPropagation();
                        var shareType = $(this).attr('class');
                        var eVar1 = $(this).data('evar1');
                        shareType = (typeof shareType != 'undefined') ? shareType.split(" ")[0].trim() : '';
                        self.trackTraffic('share.' + shareType, shareType + '_bar', eVar1);
                    }
                });
                if (wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.tablet) {
                    $root.addClass("tablet");
                }
                //vertical-sticky-top-sharebar has no mobile-view
                if (TWPHead.mobile && $root.find('.vertical-sticky-top-sharebar').length > 0) {
                	var calcMobileIcons = function() {
                		var width = $root.find('.social-tools-wrapper').width()-5;
                		var shareIconWidth =  Math.ceil($root.find('.social-tools-primary .social-tools .tool').first().outerWidth(true));
                		$root.find('.social-tools-primary .social-tools .tool.more').hide();
                		var allShare  = $root.find('.social-tools-primary .social-tools .tool:not(.more), .social-tools-additional .social-tools .tool').hide();
                		if ($root.find('.social-tools-readlater').length > 0) {
                			width = width-Math.ceil($root.find('.social-tools-readlater').width());
                		}
                		var numShare = Math.floor(width/shareIconWidth);
                		for (var int = 0; int < allShare.length; int++) {
                			try {
                				if (int < numShare) {
                					$(allShare.get(int)).fadeIn();
                				} else {
                					$(allShare.get(int)).hide();
                				}
                			} catch (e) {
                			}
                		}
                	}
                	$( window ).resize(function() {
                		calcMobileIcons();
                	});
                	calcMobileIcons();
                } else {
                	$root.find('.social-tools-primary .social-tools .tool').fadeIn();
                }
                $root.removeClass("unprocessed");
            });
            if (typeof wp_pb.StaticMethods.initReadLater == 'function'){
            	wp_pb.StaticMethods.initReadLater($myRoot, 'top-share-bar');
            }
        },
        trackTraffic: function(name, eVar27, eVar1) {
            if (typeof window.sendDataToOmniture === 'function') {
                var omnitureVars = {
                    "eVar1": ((typeof eVar1 != 'undefined')?eVar1:(typeof window.s == 'object') && s && s.eVar1),
                    "eVar2": (typeof window.s == 'object') && s && s.eVar2,
                    "eVar8": (typeof window.s == 'object') && s && s.eVar8,
                    "eVar17": (typeof window.s == 'object') && s && s.eVar17,
                    "eVar27": eVar27
                };
                try {
                    sendDataToOmniture(name, 'event6', omnitureVars);
                } catch (e) {}
            }
        }
    }; // end socialTools

    var stickyVerticalShareBar = {
    		init : function($myRoot) {
    			$myRoot.closest('.pb-f-sharebars-top-share-bar').insertBefore('#pb-root');
    			if (window.innerWidth > 992) {
    				//center vertically [+25px for half the header-v2]
	    			$myRoot.css({top: (($w.height()-$myRoot.outerHeight()+25)/2)+'px'});
	    			$myRoot.animate({left: '-1px'});
	    			$w.resize(function() {
	    				$myRoot.animate({top: (($w.height()-$myRoot.outerHeight()+25)/2)+'px'},50);
	    			});
    			}
    			
                //handle content collision
                stickyVerticalShareBar.enableCollisionDetection($myRoot);
                wp_pb.register('sticky-vertical-sharebar', 'collides_with_main_content', function(collides) {
                    $myRoot.closest('.pb-f-sharebars-top-share-bar').css('opacity', collides ? '0' : '');
                });

    			//handle magnet strip
    			wp_pb.register('magnet', 'start_open', function(){
    				$myRoot.animate({top: (($w.height()-$myRoot.outerHeight()+$('.pb-f-page-magnet .pb-module-area').height()+25)/2)+'px'},50);
    			});
    			wp_pb.register('magnet', 'start_close', function(){
    				$myRoot.animate({top: (($w.height()-$myRoot.outerHeight()+25)/2)+'px'},50);
    			});
    			
    			//handle left-side hamburger menu
    			wp_pb.register('nav', 'menu_start_open', function(){
    				$myRoot.hide();
    				$myRoot.css('left', '-' + $myRoot.outerWidth() + 'px');
    			});
    			wp_pb.register('nav', 'menu_finish_close', function(){
    				if (window.innerWidth > 992) {
	    				setTimeout(function(){
	    					$myRoot.show();
	        				$myRoot.animate({left: '-1px'});
	    				}, 100);
    				}
    			});
    		},
            enableCollisionDetection: function(supported) {
                var INTERVAL_MS = 600;
                var MAX_INTERVALS = 3;
                var intervalCount = 0;

                return function($myRoot) {
                    var job;

                    if (!supported || intervalCount > MAX_INTERVALS) return;

                    job = setInterval(function() {
                        var $sb = $myRoot.closest('.pb-f-sharebars-top-share-bar');
                        var $sbw = $sb.find('.top-sharebar-wrapper');
                        var $mc = $('html').hasClass('gallery_story') ? $('.pb-f-gallery-gallery') : $('#main-content');
                        var oldcollides = $sb.data('__mccollides');
                        var newcollides = { 'value': undefined };

                        if ( !$sb.length || !$sbw.length || !$mc.length ) {
                            // kill interval since document no longer supports this feature
                            clearInterval(job);
                        } else {
                            newcollides.value = collision($mc[0], $sbw[0]);

                            if ( !oldcollides || newcollides.value !== oldcollides.value ) {
                                wp_pb.report('sticky-vertical-sharebar', 'collides_with_main_content', newcollides.value);
                                $sb.data('__mccollides', { 'value': newcollides.value });
                            }
                        }
                    }, INTERVAL_MS);

                    intervalCount++;

                    function collision(element1, element2) {
                        var rect1 = element1.getBoundingClientRect(),
                            rect2 = element2.getBoundingClientRect();

                        return !(
                            rect1.top > rect2.bottom ||
                            rect1.right < rect2.left ||
                            rect1.bottom < rect2.top ||
                            rect1.left > rect2.right
                        );
                    }
                }
            }( 'getBoundingClientRect' in document.documentElement )
    }; // end stickyVerticalShareBar 

    var stickyHorizontalShareBar = {
        setElmTop: function($sharebarElm, y) {
            var style = y? 'translate3d(0px, ' + y + 'px, 0px)':'initial';
            $sharebarElm.css({
                'transform': style
            });
        },
        navMenuToggle: function($sharebarElm) {
            wp_pb.register('nav', 'finish_open', function() {
                this.setElmTop($sharebarElm, 0);
            }, this);
            wp_pb.register('nav', 'finish_close', function() {
                this.setElmTop($sharebarElm, -50);
            }, this);
            wp_pb.register('magnet', 'start_open', function() {
                //this.setElmTop($sharebarElm, 115);
            }, this);
        },
        fixedPosition: function($sharebarElm, sharebarTop) {
            var currentTop = $w.scrollTop();
            if (currentTop > sharebarTop) {
                if (!$sharebarElm.hasClass('top-sharebar-fixed')) {
                    $sharebarElm.addClass('top-sharebar-fixed');
                    wp_pb.report('sticky-top-sharebar', 'sharebar_fixed', true);
                }
            } else {
                $sharebarElm.removeClass('top-sharebar-fixed');
                wp_pb.report('sticky-top-sharebar', 'sharebar_unfixed', true);
            }

            if ($(".shareBar-follow-modal").css('display') == 'block') {
                if ($('#wp-header').height() > 0) {
                    $(".shareBar-follow-modal").addClass('fixedModalNav').removeClass('fixedModal');
                } else {
                    $(".shareBar-follow-modal").addClass('fixedModal').removeClass('fixedModalNav');
                }
            }
        },
        moveOutOfRoot: function($sharebarElm) {
            //This is hacky!! Have to move leaderboard and sharebar outside of pb-root if it has max-width.
            var $pbRoot = $('#pb-root');
            if ($pbRoot.css('max-width') !== 'none') {
                var $sharebarRoot = $sharebarElm.parent();
                var $leaderboard = $('.pb-f-ad-leaderboard');
                $sharebarRoot.find('.sticky-top-sharebar').css('padding-top', '55px');
                $pbRoot.before($sharebarRoot);
                $pbRoot.before($leaderboard);
            }
        },
        detectMobileForSMS: function() {
            if (mobile_browser) {
                var shareString = '';
                if (windows_browser) {
                    shareString = 'sms://?body=';
                } else if (android_browser || android233_browser) {
                    shareString = 'sms:?body=';
                }

                if (shareString.length > 0) {
                    $('.pb-f-sharebars-top-share-bar .sms-share-device.unprocessed').each(function() {
                        $(this).attr('onclick', $(this).attr('onclick').replace(/sms:\?&body=/g, shareString));
                        $(this).removeClass('unprocessed');
                    });
                } else {
                    //iOS is used as default and does not require change
                    $('.pb-f-sharebars-top-share-bar .sms-share-device.unprocessed').removeClass('unprocessed');
                }
            }
        },
        init: function() {
            var $sharebarElm = $('.sticky-top-sharebar'),
                self = this;
            if (!$sharebarElm.length) return;
            this.moveOutOfRoot($sharebarElm);
            var sharebarTop = $sharebarElm.offset().top;
            var $header = $('#wp-header');
            if ($header.css('position') === 'fixed' && $w.scrollTop() > sharebarTop) {
                this.fixedPosition($sharebarElm, sharebarTop);
            }
            $w.off('scroll.sharebar').on('scroll.sharebar', function() {
                self.fixedPosition($sharebarElm, sharebarTop);
            });
            $(function() {
                self.navMenuToggle($sharebarElm);
            });

            this.detectMobileForSMS();
        }
    }; // end stickyHorizontalShareBar 

    var userId = ((document.cookie.match(/wapo_login_id=([^;]+)/)) ? RegExp.$1 : '');
    var userSecureId = ((document.cookie.match(/wapo_secure_login_id=([^;]+)/)) ? RegExp.$1 : '');
    var userAgent = navigator.userAgent;

    var follow = {

        init: function() {

            var userSignedIn = (userId !== '') ? true : false,
                userApiUrl = "",
                jsonData = {},
                getUserData = true,
                followed = []; // Check which categories are followed

            $("#shareBar-follow").removeClass('hide');

            // Get user data
            if (userSignedIn) {
                userApiUrl = "https://follow.washingtonpost.com/Follow/api/user";
                jsonData = {
                    washPostId: userId,
                    wapoLoginID: userId,
                    wapoSecureID: userSecureId,
                    userAgent: userAgent
                };
            } else if (localStorage.getItem('wp_follow_modal_email')) {
                userApiUrl = "https://follow.washingtonpost.com/Follow/api/anonymous-user"; // TO DO change
                jsonData = {
                    emailId: localStorage.getItem('wp_follow_modal_email')
                };
            } else {
                getUserData = false; // Unanimous user, no data to fetch
            }

            if (getUserData) {

                $.ajax({
                    type: 'POST',
                    url: userApiUrl,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(jsonData),
                    success: function(data) {
                        if (data.emailId) {
                            localStorage.setItem('wp_follow_modal_email', data.emailId);
                        }

                        if (data.tags) {
                            for (var i = 0, len = data.tags.length; i < len; i++) {
                                if (data.tags[i].type === 'category') {
                                    followed.push(data.tags[i].slug);
                                }
                            }
                        }

                        if (followed.indexOf($("#subtitle-follow").data('categorySlug')) >= 0) {
                            $("#shareBar-follow").addClass('following');
                            $("#shareBar-follow .followLbl").text('Following');
                        }
                    }
                });
            }

            // Click follow button
            $("#shareBar-follow").on('click', function() {
                var $this = $(this);
                var endpoint = ($this.hasClass('following') ? 'unfollow' : 'follow'),
                    categorySlug = $this.data('categorySlug'),
                    categoryTitle = $this.data('categoryTitle'),
                    position = {};

                position.top = 55;
                position.left = 650;

                function applyCallBack(data) {
                    // change button text
                    if (endpoint === 'follow')
                        $this.addClass('following').find('.followLbl').text('Following');
                    else
                        $this.removeClass('following').find('.followLbl').text('Follow');

                    // send omniture events
                    if (endpoint === 'follow') {
                        s.sendDataToOmniture('Follow', 'event103', {
                            eVar1: s.eVar1,
                            eVar2: s.eVar2,
                            eVar26: 'fl_sharebar_topic_' + categorySlug.replace(/-/g, '')
                        });
                    } else {
                        s.sendDataToOmniture('Unfollow', 'event104', {
                            eVar1: s.eVar1,
                            eVar2: s.eVar2,
                            eVar26: 'fl_sharebar_topic_' + categorySlug.replace(/-/g, '')
                        });
                    }
                }

                var data = {
                    categorySlug: categorySlug,
                    categoryTitle: categoryTitle,
                    signedIn: userSignedIn,
                    endpoint: endpoint,
                    callBack: applyCallBack
                };

                // Follow
                if (endpoint === 'follow') {
                    data.position = position;

                    if (localStorage.getItem('wp_follow_modal_seen') !== 'true' || !localStorage.getItem('wp_follow_modal_email')) {
                        var tagData = {
                            "tag": {
                                "slug": categorySlug,
                                "type": "category"
                            }
                        };

                        // Get pip description: TO DO this will be moved to site service later
                        $.ajax({
                            type: 'POST',
                            url: "https://follow.washingtonpost.com/Follow/api/tag",
                            contentType: 'application/json',
                            dataType: 'json',
                            data: JSON.stringify(tagData),
                            success: function(result) {
                                data.categoryDesc = result.tag.description;
                                follow.displayPip(data);
                            },
                            error: function(reason) {
                                follow.displayPip(data);
                            }
                        });
                    } else {
                        data.email = localStorage.getItem('wp_follow_modal_email');

                        follow.followApi(data);
                    }
                } else { // Unfollow
                    follow.unfollowApi(data);
                }

                return false;
            });

            if (typeof Hammer === 'function' && wp_pb.BrowserInfo.mobile_browser) {
                try {
                    var hammertime = new Hammer($('#shareBar-follow')[0], {
                        prevent_mouseevents: true
                    });
                    hammertime.on("tap", handleTap);
                } catch (err) {}
            }

            /* hammer.js tap */

            function handleTap(ev) {
                ev.gesture.preventDefault();
                ev.gesture.stopPropagation();
                $(ev.gesture.target).click();
                $(ev.gesture.target).blur();
            }

        },

        displayPip: function(data) {

            var modal = $('.shareBar-follow-modal');

            if (data.signedIn === false) {
                modal.find('.not-signed-In.before').removeClass('hide');
                modal.find('.not-signed-In.after').addClass('hide');
                modal.find('.signed-In').addClass('hide');

                if (localStorage.getItem('wp_follow_modal_email')) {
                    modal.find('#follow-modal-input').val(localStorage.getItem('wp_follow_modal_email'));
                }
            } else {
                modal.find('.not-signed-In').addClass('hide');
                modal.find('.signed-In').removeClass('hide');

                data.position.top += 20;
            }

            modal.find('.category-desc').text(data.categoryDesc ? data.categoryDesc : "");

            // set correct position
            modal.css('top', data.position.top);
            modal.css('left', data.position.left);

            if ($('#wp-header').css('position') === 'fixed') {
                if ($('#wp-header').height() > 0) {
                    modal.addClass('fixedModalNav');
                } else {
                    modal.addClass('fixedModal');
                }
            }

            modal.jqm({
                overlayClass: 'sharebar-follow-modal',
                overlay: 0,
                onHide: function(hash) {
                    modal.find('.sign-up').off('click');
                    modal.find('.follow-modal-close').off('click');
                    modal.find('.got-it').off('click');

                    hash.w.hide() && hash.o && hash.o.remove();
                    return true;
                }
            });

            // Close modal
            modal.find('.sign-up').click(function() {
                var email = modal.find('#follow-modal-input').val();
                var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

                if (email === '' || !re.test(email)) {
                    $(".invalid-email").show();
                } else {
                    $(".invalid-email").hide();
                    data.email = email;

                    localStorage.setItem('wp_follow_modal_email', email);

                    follow.followApi(data, function() {
                        modal.find('.not-signed-In.before').addClass('hide');
                        modal.find('.not-signed-In.after').removeClass('hide');
                    });
                }
            });

            modal.find('.follow-modal-close').click(function() {
                modal.jqmHide();
            });

            modal.find('.got-it').click(function() {
                modal.jqmHide();
            });

            if (data.signedIn) {
                follow.followApi(data, function() {
                    if (localStorage.getItem('wp_follow_modal_seen') !== 'true') {
                        modal.jqmShow();
                        localStorage.setItem('wp_follow_modal_seen', 'true');
                    }
                });
            } else {
                if (localStorage.getItem('wp_follow_modal_seen') !== 'true' || !localStorage.getItem('wp_follow_modal_email')) {

                    modal.jqmShow();

                    s.sendDataToOmniture('Follow', 'event101', {
                        eVar1: s.eVar1,
                        eVar2: s.eVar2,
                        eVar26: 'fl_sharebar_topic_' + data.categorySlug.replace(/-/g, '')
                    });

                    localStorage.setItem('wp_follow_modal_seen', 'true');
                } else {
                    data.email = localStorage.getItem('wp_follow_modal_email');

                    follow.followApi(data);
                }
            }
        },

        followApi: function(data, callBack) {
            var serviceBase = "https://follow.washingtonpost.com",
                jsonData = {
                    washPostId: userId,
                    tags: []
                };

            // user is not signed in
            if (data.email && data.signedIn === false) {
                serviceBase += "/Follow/api/anonymous-follow";

                jsonData.emailId = data.email;

                jsonData.tags = [{
                    slug: data.categorySlug,
                    type: 'category'
                }];
            } else {
                serviceBase += "/Follow/api/follow";

                jsonData.tags = [{
                    slug: data.categorySlug,
                    title: data.categoryTitle,
                    level: 1,
                    type: 'category'
                }];
            }

            $.ajax({
                type: 'POST',
                url: serviceBase,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(jsonData),
                success: function(result) {
                    if (result.status === true) {
                        data.callBack(data);
                        if (callBack) {
                            callBack();
                        }
                    }
                }
            });
        },

        unfollowApi: function(data) {
            var serviceBase = "https://follow.washingtonpost.com";

            var tags = [{
                slug: data.categorySlug,
                title: data.categoryTitle,
                level: 1,
                type: 'category'
            }];

            var jsonData = {
                washPostId: userId,
                wapoLoginID: userId,
                wapoSecureID: userSecureId,
                userAgent: userAgent,
                tags: tags
            };

            if (data.signedIn) {
                serviceBase += "/Follow/api/unfollow";
            } else {
                serviceBase += "/Follow/api/anonymous-unfollow";
                jsonData.emailId = localStorage.getItem('wp_follow_modal_email');
            }

            $.ajax({
                type: 'POST',
                url: serviceBase,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(jsonData),
                success: function(responce) {
                    if (responce.status === true && data.callBack)
                        data.callBack(responce);
                }
            });
        },

        localStorageAvailable: function() {
            var test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        }
    }; // end follow

    /**
     * Utilities START
     * Note: Same code in sharebars\utlity-bar
     */
    var textResizer = {
	    currIncrementMax: 9,
	    currIncrementUnit: 2,
	    currIncrementIndex: 0,
	    init: function(myRoot, resizeableElementList, clickElement) {
	        myRoot = myRoot || '#article-body article, .related-story, .liveblog-intro, #liveblog-story-list .description, #full-recipe .article-content';
	        resizeableElementList = resizeableElementList || 'p, li';
	        clickElement = clickElement || '.tool.textresizer';
	        this.root = $(myRoot);
	        this.resizeableElements = $(resizeableElementList, this.root);

	        // add "Next up" lable to the resizable element's list
	        if ($(".related-story").prev('h3').length > 0) {
	            this.resizeableElements.push($('.related-story').prev('h3'));
	            this.resizeableElements.push($('.related-story h4 a'));
	        }
	        $(clickElement).on('click', this, this.resize);
	    }, // end textResizer.init
	    resize: function(event) {
	        var currObj = event.data;
	        if (currObj.currIncrementIndex == currObj.currIncrementMax) {
	            currObj.currIncrementIndex = 0;
	            currObj.currIncrementUnit = (currObj.currIncrementUnit == 2) ? -2 : 2;
	        }
	        currObj.currIncrementIndex = currObj.currIncrementIndex + 1;
	        currObj.resizeableElements.each(function() {
	            elm = $(this);
	            currSize = parseFloat(elm.css('font-size'), 5);
	            var result = currSize + currObj.currIncrementUnit;
	            elm.css('font-size', result);
	            wp_pb.report('textresizer', 'resized', result);
	        });
	    } // end textResizer.resize
	}; // end textResizer

	var trackTraffic = function(name) {
	    if (typeof window.sendDataToOmniture === 'function') {
	        var omnitureVars = {
	            "eVar1": (typeof window.s == 'object') && s && s.eVar1,
	            "eVar2": (typeof window.s == 'object') && s && s.eVar2,
	            "eVar8": (typeof window.s == 'object') && s && s.eVar8,
	            "eVar17": (typeof window.s == 'object') && s && s.eVar17,
	            "eVar27": name
	        };
	        try {
	            sendDataToOmniture(name + '.click', 'event6', omnitureVars);
	        } catch (e) {}
	    }
	}; // end trackTraffic 

	/**
	* Utilities END
	*/

	// START: lifecycle setup
	var lifecycle = {

		init:function(){
			$('.social-tools-wrapper .tool.textresizer, .social-tools-wrapper .tool.print').on('click', function() {
					var name = $(this).attr('class').split(" ")[0].trim();
					trackTraffic(name);
			});

			window.TWP = TWP || {};
			TWP.SocialTools = TWP.SocialTools || socialTools;
			TWP.SocialTools.init();

			TWP.TextResizer = TWP.TextResizer || textResizer;
			TWP.TextResizer.init();

			var tablet = isMobile.tablet();

			if(!!window.VisitorSegment){
				window.VisitorSegment && VisitorSegment('tablet', function() {
					return (tablet && $w.width() > 768);
				});
			}
		} // end lifecycle.init

	};
	// END: lifecycle setup

	// START: lifecycle
	if( wp_pb.StaticMethods.isPageHydrated() ){
		lifecycle.init();
	}

	// NOTE: For PWA
	__e.push(['shamble', function() {
		lifecycle.init();
	}]);
	// END: lifecycle

  } catch (err) {
		logger.error(err);
	}
})();

(function($,TWP,undefined){var AD_LOAD_TIMER=2E3;var AD_MIN_VISIBLE=4E3;var AD_HEIGHT_LIMITED=150;var ANIM_SPEED=250;var console=new TWP.Tools.logger("leaderboard");if($(".layout_article #pb-root .pb-f-ad-leaderboard.full").length)var $leaderboard=$(".pb-f-ad-leaderboard");var applyStickiness=function(){var isLoginUser=document.cookie.match(/wapo_secure_login_id=([^;]+)/)?RegExp.$1:"";if(wp_pb.BrowserInfo&&wp_pb.BrowserInfo.tablet||isLoginUser)return;$(function(){var $html=$("html"),$feature=getFeature().find(".leaderboard"),
$window=$(window),timer,slotId="slug_leaderboard",$slotAd=$feature.find("#"+slotId),$closeBtn=$feature.find(".leaderboard-close");if(!$feature.length)return;function removeSticky(){setTimeout(function(){console.log("remove sticky leaderboard.");$feature.slideUp(ANIM_SPEED,function(){$html.removeClass("lb-persist-top-true");$feature.slideDown(ANIM_SPEED)})},AD_MIN_VISIBLE)}function applySticky(){if($window.scrollTop()>100)$html.addClass("lb-persist-top-true");else $html.removeClass("lb-persist-top-true")}
function bindEvents(){$window.on("scroll.lb-sticky",function(e){e.stopPropagation();applySticky();var bnbHeight=$(".pb-f-page-breaking-news-bar .breaking-news-bar").outerHeight();if(bnbHeight>0){$feature.addClass("pb-has-breaking-news");$feature.css("margin-top",bnbHeight+"px");wp_pb.register("breakingnews","close",function(){$feature.removeClass("pb-has-breaking-news");$feature.css("margin-top","")})}});wp_pb.register("nav","finish_open",function(){$feature.removeClass("pb-navheader-hidden")});wp_pb.register("nav",
"finish_close",function(){$feature.addClass("pb-navheader-hidden")});$closeBtn.on("click.lb-sticky",function(e){AD_MIN_VISIBLE=0;afterLoaded();if(typeof window.sendDataToOmniture==="function"){var data={pageName:window.wp_page_name,eVar1:window.wp_page_name,prop2:window.wp_subsection,eVar2:window.wp_channel,prop3:window.wp_content_type,eVar17:window.wp_content_type,eVar26:"leaderboard-close"};sendDataToOmniture("leaderboard-close","event80",data)}})}function afterLoaded(){var $featureContainer=getFeature();
if($feature.height()>$featureContainer.outerHeight())$featureContainer.height($feature.height()+30);$feature.addClass("leaderboard-ad-loaded");$window.off("scroll.lb-sticky");if($html.hasClass("lb-persist-top-true"))removeSticky()}function afterAdInserted(){timer=setTimeout(function(){console.log("from second timeout: prevent ad load fail.");afterLoaded()},6E3);if(window.googletag&&googletag.pubadsReady)googletag.pubads().addEventListener("slotRenderEnded",function(event){console.log("ad slot: "+
event.slot.getSlotElementId()+" inserted success");if(event.slot.getSlotElementId()===slotId){clearTimeout(timer);setTimeout(function(){console.log("leaderboard ad load success.");afterLoaded()},AD_LOAD_TIMER)}})}applySticky();bindEvents();setTimeout(function(){$closeBtn.addClass("fa-remove")},6E3);if($slotAd.children().length)timer=setTimeout(function(){console.log("from first timeout: if ad is already loaded");afterLoaded()},AD_LOAD_TIMER);$feature.on("DOMNodeInserted",function(e){var $el=$(e.target),
id=$el.attr("id");if($el.is("iframe")&&id&&!/(hidden)/g.test(id)){clearTimeout(timer);$feature.off("DOMNodeInserted");afterAdInserted()}});$feature.on("disableSticky.lb-sticky",function(e){clearTimeout(timer);$window.off("scroll.lb-sticky");$feature.off("DOMNodeInserted");$html.removeClass("lb-persist-top-true");TWP.Features.Ad.Leaderboard.sticky=false})})};if(!!TWP.Features.Ad.Leaderboard.sticky)applyStickiness();if(!!TWP.Features.Ad.Leaderboard.belowSharebar)applySharebarPosition();$(window.document).on("abtest-ready",
function(e,ABT){var test=ABT.get("ads-leaderboard");getFeature().attr("moat-test-id",[getFeature().attr("moat-id")||"unknown/unknown",test.name||"control"].join("-"));if(test.is("below_sharebar"))applySharebarPosition();if(test.is("sticky"))applyStickiness()});function applySharebarPosition(){var $leaderboard=getFeature();var $shareBar=getSharebar();$leaderboard.addClass("after-sharebar-leaderboard");return $leaderboard.insertAfter($shareBar)}function getFeature(){return $(".pb-f-ad-leaderboard")}
function getSharebar(){return $(".pb-f-sharebars-top-share-bar")}})(jQuery,TWP);
(function($){__e=window.__e||[];try{var $d=$(document),$w=$(window),logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-article-article-topper"):window.console;var feature={remarryHeadlines:function(){var self=this;var remarryHeadlinesSelector=".pb-f-article-article-topper h1, .pb-f-article-ans-article-topper h1";try{wp_pb.StaticMethods.remarryHeadline(remarryHeadlinesSelector)}catch(e){}},initTiffanyTile:function(){logger.log("initTiffanyTile");var tiffanyTile=$("#article-topper #slug_tiffany_tile");
logger.log(tiffanyTile.is("visible"));if(tiffanyTile.length&&(tiffanyTile.is("visible")||!tiffanyTile.is("hidden"))){$("#topper-headline-wrapper").addClass("col-sm-8").removeClass("col-sm-12");$("#topper-headline-wrapper").addClass("col-lg-9").removeClass("col-lg-12")}else $d.ready(function(){if(window.googletag&&googletag.cmd)googletag.cmd.push(function(){var slotId="tiffany_tile";googletag.pubads().addEventListener("slotRenderEnded",function(event){if(event.slot.getSlotElementId().indexOf(slotId)>
0){logger.log("initTiffanyTile rendered end");if(event.slot.j._empty_===false||$("#article-topper #slug_tiffany_tile").is("visible")||!$("#article-topper #slug_tiffany_tile").is(":hidden")){$("#topper-headline-wrapper").addClass("col-sm-8").removeClass("col-sm-12");$("#topper-headline-wrapper").addClass("col-lg-9").removeClass("col-lg-12")}}})})})},initAlignToggle:function(){var self=this;if($(".header-tool")!==undefined&&$(".header-tool").length>0)if($(".header-tool").position().left==0)$(".header-tool").css("margin-left",
"0");else $(".header-tool").css("margin-left","30px")},initLanguageDivs:function(){var self=this;var langdivs=$('span[id^\x3d"translate-text-"]').hide(),divi=0;(function cycle(){langdivs.eq(divi).fadeIn("slow").delay(3E3).fadeOut("slow",cycle);divi=++divi%langdivs.length})()},initLanguageToggle:function(){var self=this;var $toggleOption=$(".header-wp-language-button");$toggleOption.click(function(e){var $this=$(".header-lang-dropdown");if($this.hasClass("wp-language-button-clicked")){$this.removeClass("wp-language-button-clicked");
$toggleOption.removeClass("wp-language-button-clicked-wrapper");$(".header-tool").removeClass("header-tool-selected")}else{$this.addClass("wp-language-button-clicked");$toggleOption.addClass("wp-language-button-clicked-wrapper");$(".header-tool").addClass("header-tool-selected")}});$d.click(function(e){var target=e.target;if(!$(target).is(".header-wp-language-button")&&!$(target).parents().is(".header-wp-language-button")){$(".header-lang-dropdown").removeClass("wp-language-button-clicked");$(".header-wp-language-button").removeClass("wp-language-button-clicked-wrapper");
$(".header-tool").removeClass("header-tool-selected")}})},initFollow:function(){var self=this;var userId=document.cookie.match(/wapo_login_id=([^;]+)/)?RegExp.$1:"",userSecureId=document.cookie.match(/wapo_secure_login_id=([^;]+)/)?RegExp.$1:"",userAgent=navigator.userAgent;var follow={init:function(){var userSignedIn=userId!==""?true:false,userApiUrl="",jsonData={},getUserData=true,followed=[];$("#subtitle-follow").removeClass("hide");if(userSignedIn){userApiUrl="https://follow.washingtonpost.com/Follow/api/user";
jsonData={washPostId:userId,wapoLoginID:userId,wapoSecureID:userSecureId,userAgent:userAgent}}else if(follow.localStorageAvailable()&&localStorage.getItem("wp_follow_modal_email")){userApiUrl="https://follow.washingtonpost.com/Follow/api/anonymous-user";jsonData={emailId:localStorage.getItem("wp_follow_modal_email")}}else getUserData=false;if(getUserData)$.ajax({type:"POST",url:userApiUrl,contentType:"application/json",dataType:"json",data:JSON.stringify(jsonData),success:function(data){if(follow.localStorageAvailable()&&
data.emailId)localStorage.setItem("wp_follow_modal_email",data.emailId);if(data.tags)for(var i=0,len=data.tags.length;i<len;i++)if(data.tags[i].type==="category")followed.push(data.tags[i].slug);if(followed.indexOf($("#subtitle-follow").data("categorySlug"))>=0){$("#subtitle-follow").addClass("following");$("#subtitle-follow .followLbl").text("Following")}}});$("#subtitle-follow").on("click",function(){var $this=$(this);var endpoint=$this.hasClass("following")?"unfollow":"follow",categorySlug=$this.data("categorySlug"),
categoryTitle=$this.data("categoryTitle"),position={};position.top=35;position.left=485;function applyCallBack(data){if(endpoint==="follow")$this.addClass("following").find(".followLbl").text("Following");else $this.removeClass("following").find(".followLbl").text("Follow");if(endpoint==="follow")s.sendDataToOmniture("Follow","event103",{eVar1:s.eVar1,eVar2:s.eVar2,eVar26:"fl_top_topic_"+categorySlug.replace(/-/g,"")});else s.sendDataToOmniture("Unfollow","event104",{eVar1:s.eVar1,eVar2:s.eVar2,eVar26:"fl_top_topic_"+
categorySlug.replace(/-/g,"")})}var data={categorySlug:categorySlug,categoryTitle:categoryTitle,signedIn:userSignedIn,endpoint:endpoint,callBack:applyCallBack};if(endpoint==="follow"){data.position=position;if(follow.localStorageAvailable()&&(localStorage.getItem("wp_follow_modal_seen")!=="true"||!localStorage.getItem("wp_follow_modal_email"))){var tagData={"tag":{"slug":categorySlug,"type":"category"}};$.ajax({type:"POST",url:"https://follow.washingtonpost.com/Follow/api/tag",contentType:"application/json",
dataType:"json",data:JSON.stringify(tagData),success:function(result){data.categoryDesc=result.tag.description;follow.displayPip(data)},error:function(reason){follow.displayPip(data)}})}else{data.email=follow.localStorageAvailable()?localStorage.getItem("wp_follow_modal_email"):"";follow.followApi(data)}}else follow.unfollowApi(data);return false});if(typeof Hammer==="function"&&wp_pb.BrowserInfo.mobile_browser)try{var hammertime=new Hammer($("#subtitle-follow")[0],{prevent_mouseevents:true});hammertime.on("tap",
handleTap)}catch(err){}function handleTap(ev){ev.gesture.preventDefault();ev.gesture.stopPropagation();$(ev.gesture.target).click();$(ev.gesture.target).blur()}},displayPip:function(data){var modal=$(".subTitle-follow-modal");if(data.signedIn===false){modal.find(".not-signed-In.before").removeClass("hide");modal.find(".not-signed-In.after").addClass("hide");modal.find(".signed-In").addClass("hide");if(follow.localStorageAvailable()&&localStorage.getItem("wp_follow_modal_email"))modal.find("#follow-modal-input").val(localStorage.getItem("wp_follow_modal_email"))}else{modal.find(".not-signed-In").addClass("hide");
modal.find(".signed-In").removeClass("hide");data.position.top+=20}modal.find(".category-desc").text(data.categoryDesc?data.categoryDesc:"");modal.css("top",data.position.top);modal.css("left",data.position.left);modal.jqm({overlayClass:"article-topper-follow-modal",overlay:0,onHide:function(hash){modal.find(".sign-up").off("click");modal.find(".follow-modal-close").off("click");modal.find(".got-it").off("click");hash.w.hide()&&hash.o&&hash.o.remove();return true}});modal.find(".sign-up").click(function(){var email=
modal.find("#follow-modal-input").val();var re=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;if(email==""||!re.test(email))$(".invalid-email").show();else{$(".invalid-email").hide();data.email=email;if(follow.localStorageAvailable())localStorage.setItem("wp_follow_modal_email",email);follow.followApi(data,function(){modal.find(".not-signed-In.before").addClass("hide");modal.find(".not-signed-In.after").removeClass("hide")})}});modal.find(".follow-modal-close").click(function(){modal.jqmHide()});modal.find(".got-it").click(function(){modal.jqmHide()});
if(data.signedIn)follow.followApi(data,function(){if(follow.localStorageAvailable()&&localStorage.getItem("wp_follow_modal_seen")!=="true"){modal.jqmShow();localStorage.setItem("wp_follow_modal_seen","true")}else modal.jqmShow()});else if(follow.localStorageAvailable()&&(localStorage.getItem("wp_follow_modal_seen")!=="true"||!localStorage.getItem("wp_follow_modal_email"))){modal.jqmShow();s.sendDataToOmniture("Follow","event101",{eVar1:s.eVar1,eVar2:s.eVar2,eVar26:"fl_top_topic_"+data.categorySlug.replace(/-/g,
"")});localStorage.setItem("wp_follow_modal_seen","true")}else{if(follow.localStorageAvailable())data.email=localStorage.getItem("wp_follow_modal_email");follow.followApi(data)}},followApi:function(data,callBack){var serviceBase="https://follow.washingtonpost.com",jsonData={washPostId:userId,tags:[]};if(data.email&&data.signedIn==false){serviceBase+="/Follow/api/anonymous-follow";jsonData.emailId=data.email;jsonData.tags=[{slug:data.categorySlug,type:"category"}]}else{serviceBase+="/Follow/api/follow";
jsonData.tags=[{slug:data.categorySlug,title:data.categoryTitle,level:1,type:"category"}]}$.ajax({type:"POST",url:serviceBase,contentType:"application/json",dataType:"json",data:JSON.stringify(jsonData),success:function(result){if(result.status==true){data.callBack(data);if(callBack)callBack()}}})},unfollowApi:function(data){var serviceBase="https://follow.washingtonpost.com";var tags=[{slug:data.categorySlug,title:data.categoryTitle,level:1,type:"category"}];var jsonData={washPostId:userId,wapoLoginID:userId,
wapoSecureID:userSecureId,userAgent:userAgent,tags:tags};if(data.signedIn)serviceBase+="/Follow/api/unfollow";else{serviceBase+="/Follow/api/anonymous-unfollow";jsonData.emailId=localStorage.getItem("wp_follow_modal_email")}$.ajax({type:"POST",url:serviceBase,contentType:"application/json",dataType:"json",data:JSON.stringify(jsonData),success:function(responce){if(responce.status==true&&data.callBack)data.callBack(responce)}})},localStorageAvailable:function(){var test="test";try{localStorage.setItem(test,
test);localStorage.removeItem(test);return true}catch(e){return false}}};$w.on("abtest-ready",function(e,ABT){var test=ABT.get("follow-powerPostTop");if(test.is("sharebar"))return;else follow.init()})},initStoryLabelModal:function(){var modal=$(".story-label-explainer");if(modal.find(".label-title").hasClass("Perspective"))modal.find(".label-content").text("Discussion of news topics with a point of view, including narratives by individuals regarding their own experiences");else if(modal.find(".label-title").hasClass("Analysis"))modal.find(".label-content").text("Interpretation of the news based on evidence, including data, as well as anticipating how events might unfold based on past events");
else if(modal.find(".label-title").hasClass("Opinion"))modal.find(".label-content").text("A column or article in the Opinions section (in print, this is known as the Editorial Pages).");else if(modal.find(".label-title").hasClass("Review"))modal.find(".label-content").text("A professional critic\u2019s assessment of a service, product, performance, or artistic or literary work");modal.jqm({overlayClass:"story-label-explainer",overlay:0,onHide:function(hash){hash.w.hide()&&hash.o&&hash.o.remove();
return true}});modal.find(".label-modal-close").click(function(){modal.jqmHide()});$(".section-label-span").hover(function(){modal.jqmShow()});$(document).mouseup(function(e){var container=$(".story-label-explainer");if(!container.is(e.target)&&container.has(e.target).length===0)modal.jqmHide()});if(typeof Hammer==="function"&&wp_pb.BrowserInfo.mobile_browser)try{var hammertime=new Hammer($(".section-label-span")[0],{prevent_mouseevents:true});hammertime.on("tap",handleTap)}catch(err){}function handleTap(ev){ev.gesture.preventDefault();
ev.gesture.stopPropagation();modal.jqmShow()}},initEssentials:function(){var self=this;var tablet=isMobile.tablet();window.VisitorSegment&&VisitorSegment("tablet",function(){return tablet&&$(window).width()>768});window._essentials_onrender=function(Essentials){var $target=$("#essentials-topper"),name=Essentials.name,data=Essentials.data,pdata=Essentials.getPersistentData(),status=pdata[Essentials.contentPath],count=!!name&&!!data?data.results.length:undefined,tcount;if(!!Essentials.name&&$(".cf-essentials-module").length!=
0){$target.show();$(function(){if(count){switch(count){case 1:tcount="One";break;case 2:tcount="Two";break;case 3:tcount="Three";break;case 4:tcount="Four";break;case 5:tcount="Five";break;default:tcount="";break}$(('\x3ch2\x3e\x3cspan class\x3d"status vg-check status-icon status-%s"\x3e\x3c/span\x3e '+'\x3cspan class\x3d"status-count"\x3e'+tcount+" Essentials\x3c/span\x3e "+'\x3cspan class\x3d"status-kicker"\x3e%k\x3c/span\x3e'+"\x3c/h2\x3e").replace("%s","undefined"==typeof status?"scroll":"read").replace("%k",
data.kicker.text)).appendTo($target);$target.on("click.essentials-topper",function(e){wp_pb.report("essentials-topper","click",{$target:$target});wp_pb.report("essentials","scrollto",{$from:$target})})}})}}},init:function(){var self=this;this.initTiffanyTile();this.initAlignToggle();this.initLanguageDivs();this.initLanguageToggle();this.initStoryLabelModal();this.initEssentials()}};if(wp_pb.StaticMethods.isPageHydrated())feature.init();__e.push(["shamble",function(){feature.init()}]);$w.on("resize",
wp_pb.StaticMethods.debounce(function(ev){feature.initAlignToggle()},25))}catch(err){}})(jQuery);
(function($){})(jQuery);
(function($){__e=window.__e||[];var $article,$d=$(document),$w=$(window),$b=$("body"),isDesktop=wp_pb.BrowserInfo.desktop,isMobile=!isDesktop,logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-article-article-body"):window.console;window.cr_on=false;var feature={initKicker:function(){var self=this;if(!!$(".layout_article #pb-root .pb-f-article-article-topper .headline-kicker, .layout_article #pb-root .pb-f-article-ans-article-topper .headline-kicker").length){var $kicker=
$(".pb-f-article-article-topper .headline-kicker, .pb-f-article-ans-article-topper .headline-kicker").clone();$(".layout_article #pb-root .pb-f-article-article-body .pb-timestamp, .layout_article #pb-root .pb-f-article-ans-article-body .pb-timestamp").before($kicker)}},initLoadTime:function(){$article=$("#article-body");var sel=".pb-loadtime .loadtime."+(isDesktop?"active-on-desktop":"active-on-mobile");$(sel,$article).each(function(i){var $this=$(this),$parent=$this.parent(),threshold=(!isNaN($this.attr("data-threshold"))?
$this.attr("data-threshold"):2)*1E3;if(!!window.history&&!!history.state.loadTime){$this.html(Math.round(history.state.loadTime/10)/100);if(history.state.loadTime<threshold)$parent.show();else $parent.hide()}})},initIframes:function(){var self=this;$("iframe[data-src]",$article).each(function(i){var $this=$(this);$this.attr("src",$this.attr("data-src"))})},initAboutTheAuthors:function(){var self=this;$("#about-the-authors").click(function(e){var $this=$(this);var $container=$this.closest(".multi-author-bio");
if(!!$container){if($container.hasClass("open"))$container.removeClass("open").addClass("closed");else $container.removeClass("closed").addClass("open");wp_pb.report("global","domChanged")}})},initTables:function(){var self=this;var $tables=$("div.extra table",$article);$tables.each(function(){var $table=$(this),$bars=$(".barchart",$table),longestBar=0;$bars.each(function(i){var $bar=$(this),w=$bar.attr("width");if(!isNaN(w)){w=w*1;longestBar=w>longestBar?w:longestBar}});$bars.each(function(i){var $bar=
$(this),w=$bar.attr("width");if(!isNaN(w)){w=w*1;var scale=$article.width()>480?.85:.75;relativeWidth=scale*(Math.ceil(100*(w/longestBar)*100)/100);$bar.css("width",relativeWidth+"%")}})})},initGalleries:function(){var self=this;$(".pb-f-gallery-gallery, .pb-f-gallery-gallery-ans",$article).each(function(i){var $gallery=$(this).children("div:first"),$gtitle=$gallery.attr("data-title"),$permalink=$gallery.attr("data-permalink"),$gurl=$permalink.indexOf("js.")>-1?$permalink.replace("js.","www."):$permalink,
$guuid=$gallery.attr("data-uuid"),$genctitle=encodeURI($gtitle),$gencurl=encodeURI($gurl),$gmain=$gallery.find(".wp-volt-gal-main"),$gheadline=$gallery.find(".wp-volt-gal-embed-promo-top"),$gpromotop=$gallery.find(".wp-volt-gal-embed-promo-top span.cell");if($gtitle&&$gurl){$gheadline.html('\x3ch3 class\x3d"promo-top-title"\x3e'+$gpromotop.html()+"\x3c/h3\x3e");var gshare='\x3cspan class\x3d"wp-article-sharing"\x3e\x3cspan class\x3d"wp-tooltip-button wp-article-embed"\x3e\x3cspan class\x3d"title"\x3eEmbed\x3c/span\x3e\x3ci class\x3d"fa fa-code icon-code"\x3e\x3c/i\x3e\x3cspan class\x3d"wp-tooltip"\x3e\x3cspan class\x3d"wp-sharing-copy"\x3e\x3cspan class\x3d"wp-sharing-copy-input-wrap"\x3e\x3cinput type\x3d"text" class\x3d"wp-sharing-copy-input" value\x3d"\x3ciframe width\x3d\'480\' height\x3d\'700\' scrolling\x3d\'no\' src\x3d\''+
$gurl+'?_template\x3dgallery-embed\' frameborder\x3d\'0\' webkitallowfullscreen mozallowfullscreen allowfullscreen\x3e\x3c/iframe\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"wp-sharing-copy-button"\x3eCopy\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"wp-tooltip-button wp-article-social"\x3e\x3cspan class\x3d"title"\x3eShare\x3c/span\x3e\x3ci class\x3d"fa fa-share icon-share-alt"\x3e\x3c/i\x3e\x3cspan class\x3d"wp-tooltip"\x3e\x3ci class\x3d"wp-sharing-button fa fa-facebook icon-facebook"\x3e\x3c/i\x3e\x3ci class\x3d"wp-sharing-button fa fa-twitter icon-twitter"\x3e\x3c/i\x3e\x3ci class\x3d"wp-sharing-button fa fa-google-plus icon-google-plus"\x3e\x3c/i\x3e\x3ca class\x3d"wp-sharing-button-email" href\x3d"mailto:?subject\x3d'+
$genctitle+" from The Washington Post\x26body\x3d"+$gencurl+'%3Ftid\x3dss_mail"\x3e\x3ci class\x3d"fa fa-envelope"\x3e\x3c/i\x3e\x3c/a\x3e\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e';$(gshare).insertAfter($gmain);var $facebook=$gallery.find(".fa-facebook");$facebook.click(function(){var shareWindow=window.open("https://www.facebook.com/sharer/sharer.php?u\x3d"+$gencurl+"%3Ftid\x3dss_fb","share_facebook","width\x3d658,height\x3d354,scrollbars\x3dno");return false});var $twitter=$gallery.find(".fa-twitter");
$twitter.click(function(){var shareWindow=window.open("https://twitter.com/share?url\x3d"+$gencurl+"%3Ftid\x3dss_tw\x26text\x3d"+$genctitle,"share_twitter","width\x3d550,height\x3d350,scrollbars\x3dno");return false});var $google=$gallery.find(".fa-google-plus");$google.click(function(){var shareWindow=window.open("https://plus.google.com/share?url\x3d"+$gencurl+"%3Ftid\x3dss_gp","share_google-plus","width\x3d832,height\x3d472,scrollbars\x3dno");return false});var $copybtn=$gallery.find(".wp-sharing-copy-button");
$copybtn.click(function(event){event.stopPropagation();$(event.currentTarget).parent().find(".wp-sharing-copy-input").select();try{document.execCommand("copy")}catch(err){}})}})},initTooltips:function(){var self=this;var $toggleOption=$(".wp-tooltip-button");$toggleOption.click(function(e){var $this=$(this);if($(e.target).is("span")||$(e.target).is("i.wp-sharing-button")||$(e.target).is("i.icon-envelope")||$(e.target).is("input")){e.preventDefault();return}else if($(this).hasClass("wp-tooltip-button-clicked"))$this.removeClass("wp-tooltip-button-clicked");
else{$toggleOption.filter(".wp-tooltip-button-clicked").removeClass("wp-tooltip-button-clicked");$this.addClass("wp-tooltip-button-clicked")}})},initHeadline:function(){var self=this;try{wp_pb.StaticMethods.remarryHeadline($(".pb-byline-tool-mobile"))}catch(e){}},initReadMore:function(){var referringDomain=document.referrer.split("/")[2]||"";var referringDomain=referringDomain.split(":")[0]||"";if(referringDomain!==location.hostname){var rmButton=$("\x3cbutton id\x3d'resumeReading'\x3eRead More\x3c/button\x3e").on("click",
readMore);$("#article-body article").addClass("blockReading").after(rmButton)}function readMore(e){e.preventDefault();$(this).siblings(".blockReading").removeClass("blockReading").end().remove()}},initResizableIframes:function(){var self=this;var hasResizableIframe=false;$("iframe[width][height]",$article).each(function(i){var $iframe=$(this),w=$iframe.attr("width"),h=$iframe.attr("height");if(!isNaN(w)&&!isNaN(h)){$iframe.attr("data-aspect-ratio",w/h);if($iframe.attr("width")!=$article.width()){var hFudgeFactor=
!!$iframe.attr("src")&&$iframe.attr("src").match(/instagram.com/)?40:0;$iframe.attr("width",Math.round($article.width()));$iframe.attr("height",Math.round($article.width()/$iframe.attr("data-aspect-ratio"))+hFudgeFactor)}if(!hasResizableIframe){hasResizableIframe=true;$w.resize(function(ev){$("iframe[data-aspect-ratio]",$article).each(function(i){var $ifr=$(this);hFF=!!$iframe.attr("src")&&$iframe.attr("src").match(/instagram.com/)?40:0;$ifr.attr("width",Math.round($article.width()));$ifr.attr("height",
Math.round($article.width()/$ifr.attr("data-aspect-ratio"))+hFF)})})}}})},initAudio:function(){var self=this;$("audio").each(function(){if(!!$(this).find("source")[0]){var audioSrc=$(this).find("source")[0].src;var audioId=$(this)[0].id;$(this).replaceWith('\x3cdiv class\x3d"audio-wrapper" id\x3d"'+audioId+'"\x3e\x3caudio preload\x3d"none"\x3e\x3csource src\x3d"'+audioSrc+'" type\x3d"audio/mp3" /\x3e\x3ca href\x3d"'+audioSrc+'"\x3e'+audioSrc+'\x3c/a\x3e\x3c/audio\x3e\x3cdiv class\x3d"audio-player"\x3e\x3cdiv class\x3d"play-button play"\x3e\x3c/div\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3cdiv class\x3d"elapsed-bar"\x3e\x3c/div\x3e\x3cdiv class\x3d"playhead"\x3e\x3c/div\x3e\x3cdiv class\x3d"time"\x3e \x3cspan class\x3d"elapsed-time"\x3e00:00\x3c/span\x3e / \x3cspan class\x3d"total-time"\x3e00:00\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')}});
$(".audio-wrapper").each(function(){var $this=$(this),$audio=$this.find("audio"),audio=$audio[0],$audioPlayer=$this.find(".audio-player"),$playButton=$audioPlayer.find(".play-button"),$progressBar=$audioPlayer.find(".progress-bar"),$elapsedBar=$audioPlayer.find(".elapsed-bar"),$playhead=$audioPlayer.find(".playhead"),$time=$progressBar.find(".time"),$elapsedTime=$time.find(".elapsed-time"),$totalTime=$time.find(".total-time");var duration;$audio.on("loadedmetadata",function(){duration=audio.duration;
$totalTime.text(formatDuration(duration))});$audio.trigger("load");var playheadWidth=$playhead.outerWidth(),progressBarWidth=$progressBar.outerWidth(),progressBarLeft=$progressBar.offset().left,firstPlayed=false,dragging=false,draggingWhilePaused=false;$playButton.click(function(){if(audio.paused){audio.play();$(this).removeClass("play").addClass("pause");if(firstPlayed===false){firstPlayed=true;$playhead.show()}}else{audio.pause();$(this).removeClass("pause").addClass("play")}});$audio.on("timeupdate",
audioUpdate);$w.on("resize",function(){progressBarWidth=$progressBar.outerWidth();progressBarLeft=$progressBar.offset().left;audioUpdate()});$progressBar.on("mousedown",function(e){if(e.which==1&&firstPlayed===true){e.preventDefault();dragging=true;if(audio.paused)draggingWhilePaused=true;else audio.pause();$w.on("mousemove",drag);$audio.off("timeupdate",audioUpdate)}});$w.on("mouseup",function(e){if(dragging===true){drag(e);$w.off("mousemove",drag);audio.currentTime=duration*((e.pageX-progressBarLeft)/
progressBarWidth);if(audio.currentTime>=duration){audio.pause();$playButton.removeClass("pause").addClass("play")}else if(!draggingWhilePaused)audio.play();$audio.on("timeupdate",audioUpdate)}dragging=false;draggingWhilePaused=false});function drag(e){var newLeft=e.pageX-progressBarLeft;if(newLeft>=0&&newLeft<=progressBarWidth){$playhead.css("left",newLeft-playheadWidth/2+"px");$elapsedBar.css("width",newLeft+"px")}if(newLeft<0){$playhead.css("left",-(playheadWidth/2)+"px");$elapsedBar.css("width",
"0px")}if(newLeft>progressBarWidth){$playhead.css("left",progressBarWidth-playheadWidth/2+"px");$elapsedBar.css("width",progressBarWidth+"px")}}function audioUpdate(){var elapsedBarWidth=progressBarWidth*(audio.currentTime/duration);$playhead.css("left",elapsedBarWidth-playheadWidth/2+"px");$elapsedBar.css("width",elapsedBarWidth+"px");if(audio.currentTime>=duration)$playButton.removeClass("pause").addClass("play");$elapsedTime.text(formatDuration(audio.currentTime))}function formatDuration(duration){sec=
Math.floor(duration);min=Math.floor(sec/60);min=min>=10?min:"0"+min;sec=Math.floor(sec%60);sec=sec>=10?sec:"0"+sec;return min+":"+sec}})},initVideo:function(){var self=this;$article.find(".inline-video").each(function(){var $this=$(this);var $wpvPlayer=$this.find(".wpv-player");if($wpvPlayer.attr("data-show-caption")!=="1")$this.find(".inline-video-caption").show();else;})},initABTests:function(){var self=this;$d.on("abtest-ready",function(e,ABT){if("article-politics"===wp_pb.pageName)politicsCrbtnTest();
function politicsCrbtnTest(){var articleUuid=$('meta[name\x3d"eomportal-uuid"]').attr("content"),version=ABT.get("politics-cr_button").name,strVar="";if("b"==version){switch(articleUuid){case "e9cb3eaa-e544-11e5-bc08-3e03a5b41910":strVar+='\x3ca href\x3d"https://wapo.st/lookingforamerica2?tid\x3dlfa-b-1" class\x3d"normal cr_button-b"\x3e\x3cdiv class\x3d"navbox"\x3e';strVar+='\x3cimg src\x3d"https://www.washingtonpost.com/rf/image_358w/2010-2019/WashingtonPost/2016/03/15/National-Politics/Graphics/L4A_part2.jpg"\x3e';
strVar+='\x3cp\x3eCome with us to New Hampshire to hear more voters\' answers.\x26nbsp;\x3ci class\x3d"fa  fa-arrow-right"\x3e\x3c/i\x3e\x3c/p\x3e';strVar+="\x3c/div\x3e\x3c/a\x3e";break;case "c10b4b8a-e545-11e5-bc08-3e03a5b41910":strVar+='\x3ca href\x3d"https://wapo.st/lookingforamerica3?tid\x3dlfa-b-2" class\x3d"normal cr_button-b"\x3e\x3cdiv class\x3d"navbox"\x3e';strVar+='\x3cimg src\x3d"https://www.washingtonpost.com/rf/image_358w/2010-2019/WashingtonPost/2016/03/15/National-Politics/Graphics/L4A_part3.jpg"\x3e';
strVar+='\x3cp\x3eCome with us South Carolina and Nevada to hear more voters\' answers.\x26nbsp;\x3ci class\x3d"fa  fa-arrow-right"\x3e\x3c/i\x3e\x3c/p\x3e';strVar+="\x3c/div\x3e\x3c/a\x3e";break;case "be970d52-e546-11e5-bc08-3e03a5b41910":strVar+='\x3ca href\x3d"https://wapo.st/lookingforamerica4?tid\x3dlfa-b-3" class\x3d"normal cr_button-b"\x3e\x3cdiv class\x3d"navbox"\x3e';strVar+='\x3cimg src\x3d"https://www.washingtonpost.com/rf/image_358w/2010-2019/WashingtonPost/2016/03/15/National-Politics/Graphics/L4A_part4.jpg"\x3e';
strVar+='\x3cp\x3eCome with us to Michigan, Texas, Kentucky and Arkansas to hear more voters\' answers.\x26nbsp;\x3ci class\x3d"fa  fa-arrow-right"\x3e\x3c/i\x3e\x3c/p\x3e';strVar+="\x3c/div\x3e\x3c/a\x3e";break;default:}if(strVar)$article.find(".inline-html a.normal .navbox").parent().replaceWith(strVar)}else{switch(articleUuid){case "e9cb3eaa-e544-11e5-bc08-3e03a5b41910":strVar+="https://wapo.st/lookingforamerica2?tid\x3dlfa-default-1";break;case "c10b4b8a-e545-11e5-bc08-3e03a5b41910":strVar+="https://wapo.st/lookingforamerica3?tid\x3dlfa-default-2";
break;case "be970d52-e546-11e5-bc08-3e03a5b41910":strVar+="https://wapo.st/lookingforamerica4?tid\x3dlfa-default-3";break;default:}if(strVar)$article.find(".inline-html a.normal .navbox").parent().attr("href",strVar)}}})},initInlineLinks:function(){var self=this;var inlineLinkConfig={ctx:"#article-body article",selector:'p a[href*\x3d"www\\.washingtonpost\\.com"]',param:"tid",getParamValue:function($link,ev){return this.param+"\x3da_inl"}};var inlineBioConfig={ctx:"#article-body article",selector:'.inline-content.author-bio a[href*\x3d"www\\.washingtonpost\\.com"]',
param:"tid",getParamValue:function($link,ev){return this.param+"\x3da_bio"}};try{wp_pb.StaticMethods.parametrizeLinks.init([inlineLinkConfig,inlineBioConfig])}catch(e){}},initAuthorBioBox:function(){var self=this;var authorBioBoxHandler={init:function(){try{if(mobile_browser||$(window).width()<975)$(".pb-f-article-article-body .pb-author-wrapper, .pb-f-article-ans-article-body .pb-author-wrapper").each(function(){var $this=$(this);if($this.find(".pb-author-modal-wrapper").length>0){$this.addClass("handle-as-mobile");
var $modal=$this.find(".pb-author-modal-wrapper .slide-layer"),$otherModal=$this.siblings().find(".pb-author-modal-wrapper .slide-layer"),$modalWrapper=$this.find(".pb-author-modal-wrapper"),$closeBtn=$this.find(".pb-author-modal-wrapper .close-btn");var modalFadeIn=function(ev){if($modal.is(":hidden")){modalFadeOut();ev.preventDefault();ev.stopPropagation();$modal.find(".pb-author-modal").css("width",window.innerWidth*.75+"px");$modalWrapper.css("margin-left","-"+$modal.outerWidth()/2+"px");$modal.show(200);
$("body").on("click",modalFadeOut)}else if(ev.target.nodeName!="A"&&ev.target.nodeName!="IMG"){ev.preventDefault();ev.stopPropagation()}};var modalFadeOut=function(){$otherModal.hide(200);$modal.hide(200);$("body").off("click",modalFadeOut)};$this.on("click",modalFadeIn);$closeBtn.on("click",modalFadeOut)}});else{$(".pb-f-article-article-body, .pb-f-article-ans-article-body").prepend('\x3cdiv id\x3d"pb-article-body-author-modals"\x3e\x3c/div\x3e');$(".pb-f-article-article-body .pb-author-wrapper, .pb-f-article-ans-article-body .pb-author-wrapper").each(function(){var $this=
$(this);if($this.find(".pb-author-modal-wrapper").length>0){var $modal=$this.find(".pb-author-modal-wrapper .slide-layer"),transitionTimer,thisTop;$modal.appendTo($this.closest(".article-body").siblings("#pb-article-body-author-modals"));$this.add($modal).hover(function(ev){if(thisTop!=$this.closest(".pb-sig-line").position().top){var top=0,left=0;if($(".pb-f-article-article-body .headshot-to-the-left, .pb-f-article-ans-article-body .headshot-to-the-left").length>0){top=parseFloat($(".article-body").css("margin-top"))+
$this.height()+$this.position().top+5;left=$this.position().left+20}else{top=parseFloat($(".article-body").css("margin-top"))+$this.position().top+$this.height()+5;left=$this.position().left+20}$modal.css({top:top+"px",left:left+"px"});thisTop=$this.closest(".pb-sig-line").position().top}if(transitionTimer){clearTimeout(transitionTimer);transitionTimer=null}transitionTimer=setTimeout(function(){$modal.show(200)},100)},function(ev){if(transitionTimer){clearTimeout(transitionTimer);transitionTimer=
null}var targetElement=ev.toElement;if(targetElement===undefined)targetElement=ev.relatedTarget;if($modal.has(targetElement).length===0&&$this.has(targetElement).length===0)$modal.hide(200)})}})}}catch(err){}}};authorBioBoxHandler.init()},initFactChecker:function(){if(!!window.wp_meta_data&&!!wp_meta_data.page_id&&!!wp_meta_data.page_id.length&&wp_meta_data.page_id[0].match(/^fact-checker\d+$/))if(!!window.wp_import)wp_import(["//dhpikd1t89arn.cloudfront.net/js/include/sharethefacts-v1.js"],function(ShareTheFacts){if(!!window.sharethefacts_embed)try{window.sharethefacts_scanned=
false;sharethefacts_embed()}catch(e){}})},init:function(){var self=this;$article=$("#article-body");this.initKicker();this.initIframes();this.initAboutTheAuthors();this.initTables();this.initGalleries();this.initTooltips();this.initHeadline();this.initResizableIframes();this.initAudio();this.initVideo();this.initABTests();this.initInlineLinks();this.initAuthorBioBox();this.initFactChecker()}};if(wp_pb.StaticMethods.isPageHydrated())feature.init();__e.push(["shamble",function(){feature.init()}]);$d.on("loadTimeUpdated",
function(ev){feature.initLoadTime()})})(jQuery);
(function($){var $w=$(window);var userId=document.cookie.match(/wapo_login_id=([^;]+)/)?RegExp.$1:"",userSecureId=document.cookie.match(/wapo_secure_login_id=([^;]+)/)?RegExp.$1:"",wp_pb=window.wp_pb||{},env=wp_pb.environment||"production";function NewsletterData(objValue){var obj=objValue||{};this.id=obj.id||"";this.name=obj.name||"";this.headline=obj.headline||"";this.blurb=obj.blurb||""}function Newsletter($root){var $article=$("#article-body article"),isHomepage=$root.find(".newsletter-inline-unit").hasClass("homepage"),
codedNewsletter=$root.find(".newsletter-inline-unit").hasClass("codedNewsletter"),keywordExists=$root.find(".newsletter-inline-unit").hasClass("keywordExists"),showdefault=$root.find(".hidden-data .show-default").text()=="true"?true:false,newsletter={value:new NewsletterData};if($root.find(".newsletter-inline-unit").hasClass("rightRail"))$root.addClass("rightRail");if(isHomepage)$root.addClass("homepage");this.init=function(){var showUnit=true,newsletterpositioned=true;if(codedNewsletter&&keywordExists==
false&&showdefault==false&&isHomepage==false)showUnit=false;if(showUnit){if(isHomepage==false)newsletterpositioned=positionNewsletter();if(newsletterpositioned!==false)if($root.find(".pb-subscribe-newsletter").hasClass("showSubscription")&&wp_pb&&wp_pb.StaticMethods&&!wp_pb.StaticMethods.isSubscriber())$root.find(".pb-subscribe-newsletter").removeClass("hide");else applyDarwinTest()}else $root.addClass("hide")};function applyTestParams(variant){if(variant.is("visual")){$(".signup-module .headline-img").attr("src",
"http://img.washingtonpost.com/pb/resources/img/blogs/sos-yellow-lightbulb.png");$(".signup-module .img-cont").removeClass("hide");applyDesktop("tst_visual")}else if(variant.is("oneClick"))applyMailTo("One-click sign up","Instead of typing your email address, all you have to do is hit send to start receiving Speaking of Science, our weekly email on the latest and greatest in science news.");else if(variant.is("oneClickAlt"))applyMailTo("Instant subscribe","Instead of typing your email address, all you have to do is hit send to start receiving Speaking of Science, our weekly email on the latest and greatest in the world of science.");
else applyDesktop("tst_defailt")}function applyDesktop(variantMataData){if(typeof grecaptcha==="undefined")$.ajax({url:"https://www.google.com/recaptcha/api.js",dataType:"script",cache:true,success:function(data){var findCaptcha=setInterval(function(){if(typeof grecaptcha!=="undefined")clearInterval(findCaptcha)},50)},error:function(data){}});var captchaId;var email;var resetCaptcha=function(){if(captchaId)grecaptcha.reset();$("#nlilrecaptchadiv").html("");captchaId=grecaptcha.render("nlilrecaptchadiv",
{sitekey:"6Lf0DRoUAAAAAEawkoNEUKcpWx8eh_I7PRArTA9V",size:"invisible",callback:function(resp){console.log("response key \x3d "+grecaptcha.getResponse(captchaId));$("#captchaDiv .text-success").show();setTimeout(function(){$("#captchaDiv .text-success").hide();$("#captchaDiv").hide()},5E3);subscribe(email,resp,variantMataData)}})};var captchaInitialized=0;$root.find(".sign-up-input").click(function(){if(!captchaInitialized){captchaInitialized=1;resetCaptcha($(this).html())}});$root.find(".inline-newsletter-form").submit(function(e){e.preventDefault();
var subscribeEmail=$root.find(".sign-up-input").val(),re=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;if(subscribeEmail==""||!re.test(subscribeEmail))showError("Please enter a valid email address");else{hideError();email=subscribeEmail;grecaptcha.execute(captchaId)}});$root.find(".open-sign-up-btn").click(function(){if(userId!=="")subscribe();else{$root.find(".open-sign-up, .title-container").addClass("hide");$root.find(".input-container, .submit-sign-up").removeClass("hide")}})}function applyMailTo(buttonTxt,
bodyMessage){var email="newslettersignup@washpost.com";var subject="Hit send to start receiving the Speaking of Science newsletter";var href="mailto:"+email+"?subject\x3d"+subject+"\x26body\x3d"+bodyMessage;$(".signup-module .headline-img").attr("src","http://img.washingtonpost.com/pb/resources/img/blogs/sos-yellow-lightbulb.png");$(".signup-module .img-cont").removeClass("hide");var $link=$("\x3ca\x3e",{href:"#",html:buttonTxt,"class":"mailToLink"});$(".sign-up-btn.open-sign-up-btn").html($link);
$(".sign-up-btn.open-sign-up-btn .mailToLink").click(function(){s.sendDataToOmniture("Newsletter In Line Unit","event80",trackProps("nl_instream_simple_"+newsletter.value.name.toLowerCase().split(" ").join("-")+"_1"),{wait:true});window.location.href=href})}var applyDarwinTest=function(){_dw=window._dw||[];var speakingScience=$root.find(".blogname-instream").text()=="speaking-of-science";_dw.push(["global","before",function(api){api.segment("not logged in mobile",function(){var mobile=isMobile.any();
return mobile==true&&userId==""&&speakingScience})}]);_dw.push(["global","ready",function(api){var variant=api.get("article-oneClickNL");applyNewsletterData().done(function(result){applyTestParams(variant)})}])};function showConfirmation(){$root.find(".signup-module").addClass("hide");$root.find(".success-confirmation, .title-container").removeClass("hide")}function showError(message){$root.find(".error").text(message).removeClass("hide")}function hideError(){$root.find(".error").addClass("hide")}
function getPageData(){var section=$root.find(".section-instream").text(),subSection=$root.find(".subsection-instream").text(),blog=$root.find(".blogname-instream").text(),data={};if(userId!=="")data.washPostId=userId;if(blog)data.blog=blog;if(subSection)data.subSection=subSection;if(section)data.section=section;return data}function getInLineNewsletter(){var data=getPageData(),url="https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletter";return $.ajax({type:"POST",dataType:"json",
contentType:"application/json",url:url,data:JSON.stringify(data)})}function subscribe(email,recaptchaToken,testVariantMetadata){var data,url;if(userId!==""){if(env=="production")url="https://subscribe.washingtonpost.com/person/newsletter/subscribe";else url="https://subscribe.digitalink.com/person/newsletter/subscribe";data={wapoLoginID:userId,wapoSecureID:userSecureId,userAgent:navigator.userAgent,newsletterName:newsletter.value.id,metadata:[{name:"nl_start_method",value:"S"},{name:"nl_start_location",
value:"IS"}]};if(recaptchaToken)data["recaptchaResponse"]=recaptchaToken}else if(email){if(env=="production")url="https://subscribe.washingtonpost.com/person/newsletter/subscribe-email";else url="https://subscribe.digitalink.com/person/newsletter/subscribe-email";data={email:email,newsletterName:newsletter.value.id,metadata:[{name:"nl_start_method",value:"S"},{name:"nl_start_location",value:"IS"}]};if(testVariantMetadata)data.metadata.push({name:"nl_start_initiative",value:testVariantMetadata});if(recaptchaToken)data["recaptchaResponse"]=
recaptchaToken}$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:url,data:JSON.stringify(data),success:function(data){if(data.status=="SUCCESS"){showConfirmation();s.sendDataToOmniture("Newsletter In Line Unit","event91",trackProps("nl_instream_simple_"+newsletter.value.name.toLowerCase().split(" ").join("-")+"_1"),{wait:true})}else showError("Error while subscribing, please try later.")},error:function(request,status,error){showError("Error while subscribing, please try later.")}})}
var applyNewsletterData=function(){var d=$.Deferred();if(codedNewsletter&&keywordExists||isHomepage&&codedNewsletter){$root.addClass("codedNewsletter").find(".newsletter-inline-unit").removeClass("hide");var data={};data.headline=data.name=$root.find(".coded-nl-headline").text();data.blurb=$root.find(".coded-nl-tagline").text();data.id=$root.find(".coded-nl-id").text();newsletter.value=new NewsletterData(data);$root.find(".headline").text(newsletter.value.headline);$root.find(".tagline").text(newsletter.value.blurb);
d.resolve("hardcoded")}else if(!codedNewsletter||showdefault)getInLineNewsletter().done(function(data){if(!$.isEmptyObject(data.newsletter)){newsletter.value=new NewsletterData(data.newsletter);$root.find(".headline").text(newsletter.value.headline);$root.find(".tagline").text(newsletter.value.blurb);$root.find(".newsletter-inline-unit").removeClass("hide");d.resolve("gotnewsletter")}else{$root.addClass("hide");d.resolve("hidden")}}).fail(function(error){$root.addClass("hide");d.reject()});return d.promise()};
function positionNewsletter(){var position=$root.find(".newsletter-position").text();if(position=="after3th"){if($article.length>0&&$article.children("p").length<3){$root.addClass("hide");return false}var index=2;for(var i=0;i<=index;i++){var p=$article.find(" \x3e p")[i];if(p&&$(p).text().trim()=="")index++}var paragraph=$article.find(" \x3e p")[index];$(paragraph).after($root.addClass("injected-by-front-end"));return true}else if(position=="liveblog3rd"){if($(".liveblog-stream").length>0&&$(".liveblog-post").length<
3){$root.addClass("hide");return false}var post=$(".liveblog-stream").find(".liveblog-post")[2];$(post).after($root.addClass("injected-by-front-end"));return true}else{if($article.length>0&&$article.children("p").length<8){$root.addClass("hide");return false}var paragraphs=$article.find(" \x3e p");var last=$(paragraphs).last();$(paragraphs).find(" \x3e strong, \x3e b").each(function(data,index){var text=$(this).text();var linkT=$(this).find("a").text();if(linkT.indexOf("Read More")>=0||linkT.indexOf("Read more")>=
0||text.indexOf("Read More")>=0||text.indexOf("Read more")>=0||linkT.indexOf("Also Read")>=0||linkT.indexOf("Also read")>=0||text.indexOf("Also Read")>=0||text.indexOf("Also read")>=0)last=$(this).parent()});var paragraph=$(last).prev().prev().prev().prev();if($(last).text().trim()=="")paragraph=paragraph.prev();if($(last).prev().text().trim()=="")paragraph=paragraph.prev();if($(last).prev().prev().text().trim()=="")paragraph=paragraph.prev();if($(last).prev().prev().prev().text().trim()=="")paragraph=
paragraph.prev();$(paragraph).before($root.addClass("injected-by-front-end"));var prevContent=$root.prev(),prevprevContent=$root.prev().prev(),prevprevprevContent=$root.prev().prev().prev();if($(prevContent).hasClass("inline-photo-left")||$(prevContent).hasClass("inline-photo-right"));if($(prevprevContent).hasClass("inline-photo-left")||$(prevprevContent).hasClass("inline-photo-right"));if($(prevprevprevContent).hasClass("inline-photo-left")||$(prevprevprevContent).hasClass("inline-photo-right"))$(prevprevprevContent).before();
return true}}function trackOmniture(){s.sendDataToOmniture("Newsletter In Line Unit","event59",trackProps("nl_instream_simple_"+newsletter.value.name.toLowerCase().split(" ").join("-")+"_1"),{wait:true});$w.off("scroll.newsletterInLine")}function trackProps(enhancedKey){var subsection=window.wp_subsection||"";var contentType=window.wp_content_type||"";var channel=window.wp_channel||"";var props={eVar2:"wp - "+subsection,prop2:"wp - "+subsection,prop3:contentType,eVar17:contentType,channel:channel};
props.eVar26=enhancedKey;return props}}var newsletters=new Array;var lifecycle={init:function(){$(".pb-f-page-newsletter-inLine").each(function(i){var nl=new Newsletter($(this));nl.init()})}};if(wp_pb.StaticMethods.isPageHydrated())lifecycle.init();__e.push(["shamble",function(){lifecycle.init()}])})(jQuery);
$(function(){wp_pb=window.wp_pb||{};wp_pb.CommentLoader=wp_pb.CommentLoader||function(){var width=window.innerWidth>0?window.innerWidth:screen.width,isMobile=wp_pb&&wp_pb.BrowserInfo&&wp_pb.BrowserInfo.mobile_browser===1&&width<480?true:false,isArticle=$("html").hasClass("layout_article")?true:false,commentsClosed=$(".echo_container .closed").length>0?true:false,loadDeferred=$(".echo_container.defer").length>0?true:false,triggerLoad=$(".echo_container.triggerLoad").length>0?true:false,loadDeferredMobile=
$(".echo_container.deferMobile").length>0?true:false,noMobile=$(".echo_container.no-mobile").length>0&&isMobile?true:false,noDesktop=$(".echo_container.no-desktop").length>0?true:false,$window=$(window),$echoPlaceholder=$(".echo_container_placeholder"),loadThreshhold=.7,env=wp_pb.environment||"production",apiBaseURL=env=="production"?"https://comments-api.ext.nile.works":"https://comments-api-staging.ext.nile.works",forceShowComments=$(document).getUrlParam("sc"),commentOverlay={overlayElements:{overlay:"#comment_overlay",
articleWrapper:".article-wrapper",articleTopper:".article-topper",articleParent:".story-stream"},onClose:function(data){data.overlay=data.overlay||$(commentOverlay.overlayElements.overlay);data.overlay.addClass("overlay-closed")},onOpen:function(data){if($("body").is(".left-menu")){$("#site-menu-btn").click();setTimeout(function(){data.overlay.addClass("overlay-fixed").removeClass("overlay-absolute");data.overlayWrapper.removeClass("overlay-closed")},600)}else{data.overlay.addClass("overlay-fixed").removeClass("overlay-absolute");
data.overlayWrapper.removeClass("overlay-closed")}},onScroll:function(event){},closeSelector:"a.close"};var loadComments=function(){if(!noMobile&&!noDesktop)if(typeof wp_e2=="undefined"||typeof wp_e2.initStatus=="undefined"){var domain=env=="production"?"//www.washingtonpost.com/pb":"/pb";var outputtype=env=="production"?"\x26outputType\x3djavascript":"\x26outputType\x3djavascript";var resourceToken=wp_pb.resourceToken||"201504300950";var commentsFile=[domain+"/1d/twp-comments.js"+"?token\x3d"+resourceToken+
outputtype];window.TWPHead&&TWPHead.load(commentsFile)}};var showComments=function(data){loadComments();$window.off("scroll.showComments");var $overlay=$(commentOverlay.overlayElements.overlay);if($overlay.length===0){$(".comment-summary.summary-expanded, .comment-summary.summary-expanded-mobile, .comment-summary.summary-expanded-desktop").slideUp("fast",function(){$(".echo_container.comments-collapsed").removeClass("comments-collapsed").addClass("comments-expanded").slideDown("fast",function(){wp_pb.report("global",
"domChanged")});$(this).addClass("summary-collapsed").removeClass("summary-expanded summary-expanded-mobile summary-expanded-desktop");if(typeof window.sendDataToOmniture==="function")try{sendDataToOmniture("echo.gotoComments","event5",{eVar26:"go to comments"})}catch(err){}});var bottomOffset=$(document).height()-$($echoPlaceholder.parent()[0]).offset().top;var windowHeight=$(window).height();if(bottomOffset<windowHeight)$($echoPlaceholder.parent()[0]).height(windowHeight-bottomOffset);$echoPlaceholder.parent()[0].scrollIntoView()}else{if(typeof data==
"undefined")return;$overlayWrapper=data.elm.parents(commentOverlay.overlayElements.articleWrapper);if(!$overlay.is(".overlay-closed"))wp_pb.report("comments","commentsMultiClosed",{overlay:$overlay,overlayWrapper:$overlayWrapper});else{$overlay.find(commentOverlay.closeSelector).on("click",function(event){event.stopPropagation();wp_pb.report("comments","commentsMultiClosed",{overlay:$overlay,overlayWrapper:$overlayWrapper})});$overlayWrapper.after($overlay);var top=data&&data.location&&data.location.offset().top||
$(document).scrollTop();if(typeof data.guid!=="undefined"){var allow_comments=$overlayWrapper.find(".pb-comment-wrapper").attr("data-allow-comments")==="true"?true:false;wp_e2.refreshComments({id:"#"+$overlay.find(".echo_container.comments").attr("id"),url:data.guid,allow_comments:allow_comments})}wp_pb.report("comments","commentsMultiOpened",{parent:$overlayWrapper.parent($(commentOverlay.overlayElements.articleParent)),overlay:$overlay,overlayWrapper:$overlayWrapper})}}};var loadCommentCount=function(elms){var echoCountApi=
apiBaseURL+"/v2/mux"+"?appkey\x3d"+(TWP.Data.echo_appkey!="undefined"?TWP.Data.echo_appkey:"prod.washpost.com")+"\x26requests\x3d";var query="(childrenof:'{guid}'"+encodeURI("source:washpost.com (((state:Untouched AND user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved,ModeratorDeleted AND -user.state:ModeratorBanned,ModeratorDeleted) )))"+" children: 2 (((state:Untouched AND user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved AND -user.state:ModeratorBanned,ModeratorDeleted) ) )");
var muxArray=new Array;var dataUrl;$(elms).each(function(index,el){var thisData=$(el).attr("guid")||$(el).attr("data");if(typeof thisData!="undefined"){query=query.replace("{guid}",thisData);muxArray.push({id:thisData,method:"count",q:query})}});jQuery.ajax({url:echoCountApi+JSON.stringify(muxArray),dataType:"jsonp",cache:true}).done(function(data,status){if(status!="error")$.each(data,function(index,el){var count=el.result!="error"?parseInt(el.count):"";var counterTarget=$(".echo-counter[guid\x3d'"+
index+"']");formatCount(count,counterTarget)})})};var formatCount=function(rawCount,uiTargets){for(i=0;i<uiTargets.length;i++)if(rawCount>=1E3&&uiTargets[i].classList.contains("format_short")){var shortCount=(Math.floor(10*(rawCount/1E3))/10).toFixed(1);uiTargets[i].innerHTML=shortCount+"k"}else uiTargets[i].innerHTML=rawCount};var resetFixed=function(data){var $shareBarHeight=$(".sticky-top-sharebar"),$streamHeader=$(".echo-apps-conversations-streamHeader");if(data=="opened"&&$(".bar-hidden").length===
0)$streamHeader.addClass("nav-open");else $streamHeader.removeClass("nav-open")};var init=function(){if(commentsClosed&&isArticle){$(".pb-f-page-comments").addClass("closed-message");$(".social-tools-wrapper-bottom").addClass("align-left").removeClass("align-right")}if(window.location.hash=="#comments")showComments();wp_pb.register("comments","showComments",showComments,this);wp_pb.register("comments","commentsReady",function(){if(forceShowComments==="1")showComments();if(window.location.hash=="#comments")$echoPlaceholder.parent()[0].scrollIntoView();
$($echoPlaceholder.parent()[0]).height("auto")});wp_pb.register("nav","finish_open",function(){resetFixed("opened")});wp_pb.register("nav","finish_close",function(){resetFixed("closed")});wp_pb.register("sticky-top-sharebar","sharebar_fixed",function(){$(".echo-apps-conversations-streamHeader").addClass("top-sharebar-fixed")});wp_pb.register("sticky-top-sharebar","sharebar_unfixed",function(){$(".echo-apps-conversations-streamHeader").removeClass("top-sharebar-fixed")});wp_pb.register("nav","menu_start_open",
function(){var $overlay=$(commentOverlay.overlayElements.overlay);if($overlay.length>0)$overlay.parent().hide()});wp_pb.register("nav","menu_finish_close",function(){var $overlay=$(commentOverlay.overlayElements.overlay);if($overlay.length>0)$overlay.parent().show()});wp_pb.register("comments","commentsMultiOpened",commentOverlay.onOpen);wp_pb.register("comments","commentsMultiClosed",commentOverlay.onClose);$(".comment-summary").click(function(){var data={elm:$(this),guid:$(this).find(".echo_container").attr("guid")};
history.pushState(null,null,"#comments");wp_pb.report("comments","showComments",data)});$(".comment-jump").click(function(){history.pushState(null,null,"#comments")});if(isMobile)$(".comment-summary.jump").hide();if(isMobile&&loadDeferredMobile||!isMobile&&triggerLoad)loadCommentCount(".echo-counter");else if(!isMobile&&loadDeferred){loadCommentCount(".echo-counter");$window.on("scroll.showComments",function(){if($window.scrollTop()/$echoPlaceholder.offset().top>=loadThreshhold)loadComments();if($window.scrollTop()>=
$echoPlaceholder.offset().top)showComments()})}else loadComments();if(triggerLoad){var triggerLoadLogger=new TWP.Tools.logger("LOAD-BLOCKER-COMMENTS");TWP.loadImmediatelyBlockers=TWP.loadImmediatelyBlockers||{};TWP.loadImmediatelyBlockers.comments=TWP.loadImmediatelyBlockers.comments||[];var checkCommentsBlockers=function(){triggerLoadLogger.log("checkCommentsBlockers: "+TWP&&TWP.loadImmediatelyBlockers&&TWP.loadImmediatelyBlockers.comments&&TWP.loadImmediatelyBlockers.comments.length!=0);return TWP&&
TWP.loadImmediatelyBlockers&&TWP.loadImmediatelyBlockers.comments&&TWP.loadImmediatelyBlockers.comments.length!=0};var loadCommentsLoader=function(forceAdd){if((!checkCommentsBlockers()||!!forceAdd)&&!!!TWP.loadImmediatelyBlockers.loadedComments){triggerLoadLogger.log("loadCommentsLoader");try{loadComments();TWP.loadImmediatelyBlockers.loadedComments=true}catch(err){}}};if(checkCommentsBlockers())$.each(TWP.loadImmediatelyBlockers.comments,function(i,val){$(window.document).on(val,function(){triggerLoadLogger.log("comments inEvent: "+
val);loadCommentsLoader()});setTimeout(function(){triggerLoadLogger.log("comments inTimeout");$(window.document).off(val);loadCommentsLoader(true)},5E3)});else{triggerLoadLogger.log("comments inElse");loadCommentsLoader(true)}}};return{init:init,showComments:showComments,loadCommentCount:loadCommentCount}}();wp_pb.CommentLoader.init()});
(function($){__e=window.__e||[];var logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-page-share-bar"):window.console;var feature={setUpTracking:function(){var $socialToolsBottom=$(".social-tools-bottom"),$individualTools=$socialToolsBottom.children(),config={"omnitureEvent":"event6"};$individualTools.on("click",function(e){if(typeof window.sendDataToOmniture==="function"){var shareType=$(this).data("sharetype"),eventName=config.omnitureEvent,omnitureVars={"eVar1":typeof window.s==
"object"&&s&&s.eVar1,"eVar2":typeof window.s=="object"&&s&&s.eVar2,"eVar8":typeof window.s=="object"&&s&&s.eVar8,"eVar17":typeof window.s=="object"&&s&&s.eVar17,"eVar27":""};omnitureVars.eVar27=shareType+"_bottom";try{sendDataToOmniture("share."+shareType,eventName,omnitureVars)}catch(e){logger.error(e)}}})},init:function(){this.setUpTracking()}};var lifecycle={init:function(){feature.init()}};if(wp_pb.StaticMethods.isPageHydrated())lifecycle.init();__e.push(["shamble",function(){lifecycle.init()}])})(jQuery);
/* global __e:true, _dw:true */
(function($) {
  // NOTE: Event queue
  __e = window.__e || [];
  _dw = window._dw || [];

  var logger = !!window.TWP && !!TWP.Tools && !!TWP.Tools.logger
    ? new TWP.Tools.logger('pb-f-article-article-author-bio')
    : window.console;

  var feature = {
    initHideMultiAuthorImages: function() {
      logger.info('initHideMultiAuthorImages');
      $(
        '.pb-f-article-article-author-bio, .pb-f-article-ans-article-author-bio'
      ).each(function() {
        var numAuthors = $(this).find('.pb-bottom-author').length;
        if (numAuthors == 0) {
          $(this).hide();
        } else if (numAuthors > 1) {
          $(this).find('.pb-bottom-author').addClass('hide-images');
        }
      });
    }, // end feature.initHideMultiAuthorImages

    initABTests: function() {
      _dw.push([
        'global',
        'ready',
        function(api) {
          var variant = api.get('upgrade-toolkit_v110');

          if (variant.is('variant_1')) {
            $('.pb-f-article-article-author-bio').addClass(
              'border-bottom-hairline'
            );
          }
        },
      ]);
    },

    init: function() {
      // logger.info('init');
      this.initHideMultiAuthorImages();
      this.initABTests();
    }, // end feature.init
  }; // end feature

  if (wp_pb.StaticMethods.isPageHydrated()) {
    feature.init();
  }

  // NOTE: For PWA
  __e.push([
    'shamble',
    function() {
      feature.init();
    },
  ]);
})(jQuery);

(function($){$(".pb-f-generic-promo-image").each(function(){var $hasLabel=$(this).find(".label-wrapper");if($hasLabel.length==0)$(this).find("\x3e:first-child").addClass("mobile-border")})})(jQuery);
(function(){var $=jQuery;var TWP=window.TWP||{};TWP.Perso=TWP.Perso||{};TWP.Perso.Tools=TWP.Perso.Tools||{};var T=TWP.Perso.Tools;var $sponsored=null;var $container=null;var $pbcontainer=null;var log=new TWP.Tools.logger("HYBRID");var validOnes=[];var clientString="recommend-strip-v8";if(window["wp_meta_data"]&&window["wp_meta_data"]["isPWA"])clientString+="-pwa";var client=new TWP.Perso.Recommend(clientString,3);var status="";var visible=false;var clickListenerAdded=false;var trackRenderedAllCalled=
false;function _failure(error){log.debug("Failure",function(){$pbcontainer.hide();trackError(error);status="failed"})}function isValid(recommendation){return recommendation&&recommendation.url&&recommendation.responsetype&&recommendation.headline&&recommendation.summary&&recommendation.photo&&recommendation.photo.path}function render(recommendations){if(!recommendations||recommendations.length==0)return _failure("no-recommendations");validOnes=[];for(var i=0;i<recommendations.length;i++)if(isValid(recommendations[i]))validOnes.push(recommendations[i]);
if(validOnes.length==0)return _failure("no-valid-recommendations");log.debug("Render",function(){_renderArticle(validOnes)});status="rendered";trackVisible()}function _renderArticle(recommendations){var idx=0;var html="";var classes="";for(var i=0;i<recommendations.length;i++){log.debug("Render item ("+i+")");html=html+renderItem(recommendations[i],idx,recommendations.length);idx=idx+1}html='\x3cdiv class\x3d"postrecommends contentfeed'+classes+'"\x3e'+'\x3cdiv class\x3d"content-strip"\x3e'+'\x3cdiv class\x3d"label-wrapper label-wrapper-post-recommends"\x3e'+
'\x3cspan class\x3d"label label-kicker"\x3eThe Post Recommends\x3c/span\x3e'+"\x3c/div\x3e"+'\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e'+html+'\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e'+"\x3c/div\x3e"+"\x3c/div\x3e";$sponsored=$("#slug_postrecommends");$sponsored.remove();$container.html(html);$container.find(".content-strip \x3e .label-wrapper").before($sponsored);$container.show();$pbcontainer.show();$pbcontainer.after('\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e');$(document).trigger("dom-manipulation-complete")}
function renderURL(recommendation){return recommendation.url+"?tid\x3d"+recommendation.responsetype}function renderImgURL(recommendation,w,h){var url=recommendation.photo.path;var re1=/(\washingtonpost.com\/rf\/image_[^\/]+\/)/;var re2=/(\washingtonpost.com\/rw?\/)/;if(url.match(re1)||url.match(re2))url=url.replace(RegExp.$1,"washingtonpost.com/rf/image_"+w+"x"+h+"/");else url="https://www.washingtonpost.com/wp-apps/imrs.php?src\x3d"+encodeURIComponent(url)+"\x26w\x3d"+w+"\x26h\x3d"+h;return url}
function renderClasses(recommendation,index,total){var classes="";if(recommendation.responsetype.match(/video/))classes=classes+"video ";if(index==0)classes=classes+"first ";if(index==total-1)classes=classes+"last";return classes}function renderItem(recommendation,index,total){var node=$($("#postrecommends-article-template").html());node.addClass(renderClasses(recommendation,index,total));var headline=node.find(".headline a");headline.html(recommendation.headline);headline.attr("href",renderURL(recommendation));
var labelWrapper=node.find(".label-wrapper");var label=node.find(".label");if(recommendation["storyType"])label.text(recommendation["storyType"]);else labelWrapper.remove();var linkImg=node.find(".photo-wrapper a");linkImg.attr("href",renderURL(recommendation));var blurb=node.find(".blurb");blurb.html(recommendation.summary);var displayDate=recommendation.displayDate||recommendation.publishedAt;if(displayDate){displayDate=wp_pb.StaticMethods.getTwitterTime(displayDate);blurb.after('\x3cdiv class\x3d"timestamp"\x3e'+
displayDate+"\x3c/div\x3e")}var img='\x3cimg alt\x3d"" src\x3d"'+renderImgURL(recommendation,480,320)+'"'+' data-hi-res-src\x3d"'+renderImgURL(recommendation,480,320)+'"'+' data-low-res-src\x3d"'+renderImgURL(recommendation,112,75)+'"'+' data-threshold\x3d"112" class\x3d"courtesy-of-the-resizer"\x3e';node.find(".photo-wrapper img").replaceWith(img);if(recommendation.responsetype.match(/video/)){var time="";if(recommendation.videoDuration&&recommendation.videoDuration>1E3){var seconds=Math.floor(recommendation.videoDuration/
1E3);var minutes=Math.floor(seconds/60);seconds=seconds%60;if(seconds<10)seconds="0"+seconds.toString();time=minutes+":"+seconds}var caption='\x3cdiv class\x3d"standalone-overlay posttv-playlist-text-play-btn"\x3e'+'\x3ca class\x3d"video-play" href\x3d"'+renderURL(recommendation)+'"\x3e'+'\x3cspan class\x3d"fa fa-play icon-left"\x3e\x3c/span\x3e\x3cspan\x3ePlay Video\x3c/span\x3e'+'\x3cspan class\x3d"duration"\x3e'+time+"\x3c/span\x3e"+"\x3c/a\x3e"+"\x3c/div\x3e";blurb.after(caption)}return node[0].outerHTML}
function clickTracker(ev){var link=this;var mClick=ev.button>0||ev.ctrlKey||ev.metaKey||ev.shiftKey;var prefetched=$(link).hasClass("pre-fetched");log.debug("Click",function(){var href=link.href;var tid=href.replace(/.*\?tid=/,"");log.debug("URL : "+href);trackClicked(client,href,tid);if(mClick||prefetched);else setTimeout(function(){log.debug("Redirecting");document.location=href},200)});return mClick||prefetched}function trackClicks(){if(!clickListenerAdded){clickListenerAdded=true;$pbcontainer.on("click",
".row a",null,clickTracker)}}function trackClicked(client,url,tid){T.Omniture.send("post_recommends","",{prop69:tid},log);client.clicked(url)}function trackVisible(){if(status=="rendered"&&visible&&!trackRenderedAllCalled){trackRenderedAllCalled=true;var param=[];for(var i=0;i<validOnes.length;i++)param.push(validOnes[i].responsetype);var props={prop72:param.join(",")};T.Omniture.send("post_recommends","",props,log);client.rendered()}}function trackError(error){T.noticeError(clientName,error)}function _preload(){log.debug("Setting up click handlers");
trackClicks();log.debug("Requesting recommendations");client.recommend().done(function(data){render(data["results"])})}function _visible(){log.debug("Visible",function(){visible=true;trackVisible()})}function _init(){log.debug("DOM Ready",function(){try{log.debug("(Re)Init variables");status="";visible=false;trackRenderedAllCalled=false;log.debug("Finding containers");$container=$("#post-recommends");$container.hide();if(!$pbcontainer||$pbcontainer.length==0)$pbcontainer=$container.parent();if($container.length==
1){log.debug("Setting up scroll listener");if(document.location.toString().match(/\/lifestyle\/kidspost\//)){T.Events.smartPreload($pbcontainer,{});$pbcontainer.hide()}else T.Events.smartPreload($pbcontainer,{preload:_preload,visible:_visible,screens:2})}}catch(e){trackError("init-error")}})}if(wp_pb.StaticMethods.isPageHydrated())$(function(){_init()});__e.push(["shamble",function(){_init()}])})();
(function($){var logger=window.TWP&&TWP.Tools&&TWP.Tools.logger?new TWP.Tools.logger("feature-loader"):window.console;function makeLoadFeatureFunc(baseConfig){baseConfig=baseConfig||{};return function(config,options){var conf=$.extend(baseConfig,config);wp_pb.StaticMethods.loadFeature(conf,options)}}var loaderInstances=$(".pb-f-tools-feature-loader");loaderInstances.each(function(i,el){var $el=$(el);var $config=$(".feature-loader-config",$el);var id=$el.attr("id");if(!$config.length||!id)return;var loadFeature=
makeLoadFeatureFunc({el:id});var actionFuncs={loadFeature:loadFeature};var conditionsURL=$config.data("conditionsurl");if(conditionsURL){$.get(conditionsURL).then(handler).then(null,function(e){logger.error(e)});return}if($config.is("script")){var conditions;try{conditions=JSON.parse($config.html())}catch(e){logger.error(e);return}if(conditions){handler(conditions);return}}function handler(configs){ConditionManager.makeFromConfig({configs:configs,conditionFuncs:wp_pb.conditions,actionFuncs:actionFuncs})}
})})(window.jQuery);
(function($){function trackModalDisplay(){if(!!window.s){var props={eVar1:s.eVar1,eVar2:s.eVar2,eVar26:"apple-pay-modal"};window.sendDataToOmniture&&sendDataToOmniture("apple pay modal","event66",props)}}function localStorageAvailable(){var test="test";try{localStorage.setItem(test,test);localStorage.removeItem(test);return true}catch(e){return false}}var ApplePayModal={showOverlay:function(){if(localStorageAvailable()){var $this=this;$modal=$("#apple-signup-overlay");$modal.jqm({overlay:85,modal:true,
toTop:true,trigger:false,closeClass:"overlay-closer",onShow:function(h){h.o.prependTo("#pb-root");$("html").addClass("applepay-modal-up");h.w.show();localStorage.setItem("applepay-modal-seen",true);setTimeout(function(){trackModalDisplay()},1E3)},onHide:function(h){$("html").removeClass("applepay-modal-up");$(".pb-f-page-apple-pay-modal").addClass("applepay-modal-minimized");h.w.fadeOut("2000",function(){h.o.remove()})}});$modal.jqmShow()}},supportedDevice:function(){return location.protocol==="https:"&&
"ApplePaySession"in window},canMakePayments:function(){try{return ApplePaySession.canMakePayments()}catch(e){return false}},canMakePaymentsWithActiveCard:function(merchantID){merchantID=merchantID||"merchant.com.washingtonpost";try{return ApplePaySession.canMakePaymentsWithActiveCard(merchantID)}catch(e){return false}},init:function(){var $this=this;var modalNotSeen=localStorage.getItem("applepay-modal-seen")!=="true";var isSubscriber=/rplsb=1/.test(document.cookie);var UPCCheck=$.cookie("rplmct")==
2||$.cookie("rplmct")==4;if(modalNotSeen&&!isSubscriber&&UPCCheck&&$this.supportedDevice()&&$this.canMakePayments())$this.canMakePaymentsWithActiveCard().then(function(supported){if(supported)$this.showOverlay()});$("#apple-signup-minimized").click(function(){$(".pb-f-page-apple-pay-modal").removeClass("applepay-modal-minimized");$this.showOverlay()});wp_pb.register("breakingnews","reload",function(){if($(".pb-f-page-breaking-news-bar").height()>0)$("#apple-signup-overlay .apple-pay-contet").addClass("breaking-news-bar-open");
else $("#apple-signup-overlay .apple-pay-contet").removeClass("breaking-news-bar-open")});wp_pb.register("breakingnews","close",function(){if($(".pb-f-page-breaking-news-bar").height()>0)$("#apple-signup-overlay .apple-pay-contet").addClass("breaking-news-bar-open");else $("#apple-signup-overlay .apple-pay-contet").removeClass("breaking-news-bar-open")})}};if($("#apple-signup-overlay").length)ApplePayModal.init()})(jQuery);
(function($,TWP){var console=new TWP.Tools.logger("flex");var applyStickiness=function(){var $window=$(window),$ad=$(".pb-f-ad-flex"),$ad_div=$($ad.children()[0]),slotId="slug_flex_ss_bb_hp",adSize=0,min_viewport=990;$ad.on("DOMNodeInserted",function(e){var $el=$(e.target),id=$el.attr("id");if($el.is("iframe")&&id&&!/(hidden)/g.test(id)){$ad.off("DOMNodeInserted");$ad.addClass("sticky");afterAdInserted($el)}});var bindScrollDown=function(){var scrollTop,stopTop=$ad.offset().top+$ad.height()-$ad_div.outerHeight()-
50;var getTopPoint=function(){return $ad.offset().top-50};var getAdBottom=function(){return $ad_div.offset().top+$ad_div.height()};var getMarginLeft=function(){var left=($ad.outerWidth()-adSize)/2;return left<0?0:left};var getAdLeft=function(){return $ad.offset().left};var getStopPoint=function(){return $ad.offset().top+$ad.height()};var applySticky=function(top){var left=0;if(top<stopTop){left=getAdLeft()+getMarginLeft();$ad_div.css({"top":50,"left":left,"position":"fixed"})}else{left=getMarginLeft();
var bTop=$ad.height()-$ad_div.height();$ad_div.css({"top":bTop,"left":left,"position":"absolute"})}};var removeSticky=function(){if($ad.hasClass("sticky")){$ad.removeClass("sticky");$ad_div.attr("style","");$window.off("scroll.flexAd-sticky")}};$window.off("scroll.flexAd-sticky").on("scroll.flexAd-sticky",function(){scrollTop=$window.scrollTop();if(scrollTop>getTopPoint())applySticky(scrollTop);else if($ad.hasClass("sticky"))$ad_div.css({"top":0,"position":"static"})});$window.off("resize.flexAd-sticky").on("resize.flexAd-sticky",
function(){if($(window).outerWidth()>min_viewport)if($ad.hasClass("sticky")){var left=0;if($ad_div.css("position")==="fixed")left=getAdLeft()+getMarginLeft();else left=getMarginLeft();$ad_div.css({"left":left})}else{$ad.addClass("sticky");startSticky()}else removeSticky()});$ad.on("flexAd.remove_sticky",function(){$window.off("resize.flexAd-sticky");removeSticky()})};function startSticky(){if($(window).outerWidth()>min_viewport)bindScrollDown();else $window.on("resize.flexAd-invisible",function(){if($ad.is(":visible"))bindScrollDown();
else $ad.trigger("flexAd.remove_sticky")})}var afterAdInserted=function(){if(window.googletag&&googletag.pubadsReady)googletag.pubads().addEventListener("slotRenderEnded",function(event){if(event.slot.getSlotElementId()===slotId){adSize=event.size[0];if(event.size[1]<1050)startSticky()}})}};if(TWP&&TWP.Features&&TWP.Features.Ad&&TWP.Features.Ad.flexAd&&TWP.Features.Ad.flexAd.sticky)applyStickiness()})(jQuery,TWP);
(function($){__e=window.__e||[];var $d=$(document),logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-article-article-body"):window.console;var feature={initABTest:function(){$d.on("abtest-ready",function(e,ABT){var variation=ABT.get("recommendation-mostread");if(variation.is("chartbeat")){$("ul.def-feed").hide();$("ul.alt-feed").show()}})},initSubscribe:function(){if(wp_pb&&wp_pb.StaticMethods&&!wp_pb.StaticMethods.isSubscriber())$(".pb-mostread-subscribe").show()},init:function(){this.initABTest();
this.initSubscribe()}};var lifecycle={init:function(){feature.init()}};if(wp_pb.StaticMethods.isPageHydrated())lifecycle.init();__e.push(["shamble",function(){lifecycle.init()}])})(jQuery);
__e=window.__e||[];
(function($){var $w=$(window),$d=$(document),logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-homepage-story"):window.console;var feature={handleTimestamps:function(){var $items=$(".flex-item");$items.each(function(i){var $feature=$(this);var $timestamps=$feature.find("*[data-timestamp][data-timestamp-duration]");var now=(new Date).getTime();$timestamps.each(function(i){try{var $e=$(this);var duration=$e.attr("data-timestamp-duration");var hoursAgo=Math.floor((now-$e.attr("data-timestamp"))/
(1*60*60*1E3));if(hoursAgo<=duration){try{$e.text(wp_pb.StaticMethods.getTwitterTime($e.attr("data-timestamp")/1))}catch(e){}$e.show().css({"display":"inline-block"})}else{var $p=$e.parent();$e.remove();if(!$.trim($p.html()))$p.remove()}}catch(e){$e.show()}})})},handleFlippers:function(){var $flippers=$(".flex-flipper.unprocessed");if($flippers.length>0){wp_pb.StaticMethods.handleFlexFlippers();$flippers.each(function(i){var $this=$(this),size=$this.children().length,count=0,targetBgColor="";$this.find(".flex-flipper-item,.art-in-flipper").each(function(i){var $item=
$(this),bgColor=$item.css("background-color");if(i==0&&(bgColor=="transparent"||bgColor=="rgba(0, 0, 0, 0)"||bgColor==undefined)){var lookForBgColor=true;$item.parents().filter(function(){var color=$(this).css("background-color");if(lookForBgColor&&color!="transparent"&&color!="rgba(0, 0, 0, 0)"&&color!=undefined){lookForBgColor=false;targetBgColor=color}})}if(!!targetBgColor)$item.css({"background-color":targetBgColor})});$this.children(":not(:first-child)").hide();$this.removeClass("unprocessed");
var loops=$this.data("maxLoops");loops=isNaN(loops)?100:loops;if(loops>0){var time=$this.data("duration");time=isNaN(time)||time<=0?6E3:time*1E3;var fadeSpeed=$this.data("fadeSpeed");fadeSpeed=isNaN(fadeSpeed)||fadeSpeed<=0?1400:fadeSpeed*1E3;var interval=setInterval(function(){count++;if(count<size*loops){$this.data("count",count);$this.children(":first-child").fadeOut(fadeSpeed).next().show().end().appendTo($this)}if(count>=size*loops){clearInterval(interval);$this.removeClass("equalize-heights");
$this.children().css("height","auto")}},time)}})}},handleImageRefreshRates:function(){var $imgs=$("*[data-refresh-rate-status\x3d'unprocessed'][data-refresh-rate]");if($imgs.length>0){logger.info("handle images with refresh rates");var rateDict={};$imgs.each(function(i){var $img=$(this),src=$img.attr("src"),rate=$img.attr("data-refresh-rate");$img.attr("data-refresh-rate-status","processed");logger.info("\nimg: "+src+"\nrate: "+Math.round(rate/1E3)+" secs");setInterval(function(){logger.info("\nrefreshing: "+
src);$img.attr("src",src)},rate)})}},handleChartable:function(){var chartContainer=document.getElementById("chartContainer");if(!chartContainer)return;var ts=(new Date).getTime();var chartId=$("#chartContainer").attr("data-chartable-id");var script=document.createElement("script");script.type="text/javascript";script.setAttribute("id","chartScript");script.setAttribute("class","twp-module-chart-embed");script.setAttribute("data-move","false");script.setAttribute("data-data-uri","https://postgraphics.s3.amazonaws.com/chartable/"+
chartId+"/latest.json?v\x3d"+ts);script.setAttribute("data-fallback-image","https://chartable.wpentdev.com/"+chartId+"/2300.jpg");script.src="https://chartable.wpentdev.com/public/TWP.Module.chart.embed-0.0.54.min.js?v\x3d3";$("#chartContainer").empty();chartContainer.appendChild(script)},handleStoryTypeWarnings:function(){$(".story-type-warning").each(function(i){var $this=$(this),$open=$this.find(".story-type-warning-tools-open"),$closed=$this.find(".story-type-warning-tools-closed"),timeout=null;
$open.on("click",function(ev){$this.removeClass("open").addClass("closed",{duration:500});if(!!timeout)clearTimeout(timeout);timeout=setTimeout(function(){if(!$open.is(":visible"))$closed.trigger("click")},6E4)});$closed.on("click",function(ev){$this.removeClass("closed").addClass("open",{duration:500})})})},handleFishyContentEdits:function($nodes){try{$('*[data-will-poison-app\x3d"true"]').each(function(i){var $el=$(this),msgInfo=_getMessageInfo($el,{textTmpl:"{{type}}: BAD CODING"});$el.removeAttr("data-will-poison-app");
msgInfo.$target.before(msgInfo.html)})}catch(e){logger.error("ERROR in handleFishyContentEdits:"+e)}function _getMessageInfo($el,options){options=$.extend(true,{textTmpl:"{{type}}: BAD CODING",htmlTmpl:'\x3cdiv class\x3d"content-editable-warning"\x3e\x3cspan class\x3d"fa fa-exclamation-triangle"\x3e\x3c/span\x3e {{text}} \x3cspan class\x3d"fa fa-exclamation-triangle"\x3e\x3c/span\x3e\x3c/div\x3e'},options||{});var msgInfo={},type="";if($el.hasClass("blurb")){msgInfo.$target=$el.closest(".blurb");
type="BLURB"}else if($el.hasClass("byline")||$el.parent().hasClass("byline")){msgInfo.$target=$el.closest(".sigline");type="BYLINE"}else if($el.hasClass("caption")){msgInfo.$target=$el.closest(".caption");type="CAPTION"}else if($el.hasClass("deck")||$el.parent().hasClass("deck")){msgInfo.$target=$el.closest(".deck");type="DECK"}else if($el.hasClass("headline")||$el.parent().hasClass("headline")){msgInfo.$target=$el.closest(".headline");type="HEADLINE"}else if($el.hasClass("label-primary")){msgInfo.$target=
$el.closest(".label-wrapper");type="PRIMARY LABEL";if($el.hasClass("label-item"))type="PRIMARY ITEM LABEL"}else if($el.hasClass("label-secondary")){msgInfo.$target=$el.closest(".label-wrapper");type="SECONDARY LABEL"}else{msgInfo.$target=$el;type="TEXT"}msgInfo.text=options.textTmpl.replace("{{type}}",type);msgInfo.html=options.htmlTmpl.replace("{{text}}",msgInfo.text);return msgInfo}},init:function(){var self=this;self.handleTimestamps();$w.on("load",function(ev){self.handleFlippers()});self.handleImageRefreshRates();
self.handleFishyContentEdits();self.handleStoryTypeWarnings()}};__e.push(["phase1-1",applyFeature]);function applyFeature(){feature.init();if($w.width()>1024)setInterval(function(){feature.handleTimestamps()},6E4);$d.on("dom-manipulation-complete",function(ev){feature.handleTimestamps()});setInterval(function(){feature.handleChartable()},6E4)}})(jQuery);
TWP=TWP||{};TWP.Onlinegame=TWP.Onlinegame||{};TWP.Onlinegame.loaded=TWP.Onlinegame.loaded||false;
(function(){var THROTTLE=1E3;var GamesWidget=function(){this.$module=$(".game-module");this.$game=null;this.trigger='a[data-toggle\x3d"game-trigger"]';this.padding=30;this.width=731;this.height=480;this.containerWidth=0;this.$target=null;this.parentModule={$target:null,$iframe:null,container:{$inner:null,$outer:null,$img:null}}};GamesWidget.prototype.init=function(){if(TWP.Onlinegame.loaded)return;TWP.Onlinegame.loaded=true;if(!this.isMobile())this.handleGameClick()};GamesWidget.prototype.isMobile=
function(){if(!isMobile.any()){$(".game-module .game-widgets-container .flash").show();return false}$(".game-module .game-widgets-container .flash").remove();$(".game-module.html5").hide();return true};GamesWidget.prototype.handleGameClick=function(){this.$module.on("click",this.trigger,this.gameStart)};GamesWidget.prototype.gameStart=function(){gamesWidget.$game=$(this);gamesWidget.getGameDimensions();gamesWidget.initGameView()};GamesWidget.prototype.getGameDimensions=function(){this.$target=this.$game.find(".game-item");
var width=parseInt(this.$target.attr("iframewidth")),height=parseInt(this.$target.attr(".iframeheight"));this.width=width>0?width:this.width;this.height=height>0?height:this.height;this.containerWidth=this.$game.parents(".game-module").width()};GamesWidget.prototype.initGameView=function(){this.parentModule.$target=this.$game.parents(".game-module");this.parentModule.$iframe=this.parentModule.$target.find(".game-player-container iframe");this.parentModule.container={$inner:this.parentModule.$target.find(".game-player-container-inner"),
$outer:this.parentModule.$target.find(".game-player-container"),$img:this.parentModule.$target.find(".game-player-container img")};var screenshot=this.$game.find(".game-item").attr("screenshot");this.parentModule.$iframe.attr("width",this.width).attr("height",this.height);if(isIE())this.parentModule.container.$inner.css("width",this.width+"px");this.parentModule.container.$img.attr("src",screenshot).attr("width",this.width).css("opacity",1).show();this.parentModule.container.$outer.css("margin-left",
this.containerWidth+"px").show();this.renderGame()};GamesWidget.prototype.renderGame=function(){var that=this;this.parentModule.container.$outer.animate({marginLeft:this.containerWidth-this.width-this.padding},THROTTLE,function(){var url=that.$target.attr("onlineEmbeddedGameUrl");that.parentModule.$iframe.attr("src",url);that.parentModule.container.$img.animate({opacity:0},THROTTLE,function(){that.parentModule.container.$img.hide()})});this.closeGame()};GamesWidget.prototype.closeGame=function(){var that=
this;this.$module.on("click",".game-player-container .close-button",function(){that.parentModule.$iframe.attr("src","");that.parentModule.container.$outer.css("left",0).hide()})};var gamesWidget=new GamesWidget;gamesWidget.init();function IE7(){return $.browser.msie&&$.browser.version.substring(0,1)=="7"}function IE8(){return $.browser.msie&&$.browser.version.substring(0,1)==="8"}function IE9(){return $.browser.msie&&$.browser.version.substring(0,1)==="9"}function isIE(){var regex=new RegExp("[^[-a-z]ie");
console.log(regex.exec(document.documentElement.className))}})();
(function($){__e=window.__e||[];var $w=$(window),$d=$(document),logger=!!window.TWP&&!!TWP.Tools&&!!TWP.Tools.logger?new TWP.Tools.logger("pb-f-article-article-body"):window.console;var deviceWidth=window.innerWidth>0?window.innerWidth:screen.width;function Newsletter(){var defaultNewsLetter={frequency:"Daily",headline:"Get the Today's Headlines Newsletter",id:"post_newsletter1",name:"Today's Headlines",tagline:"Free daily updates delivered just for you.",template:"signup-confirm-heads",variable:"vars[intent_heads]"},
defaultNewsLetters=[{frequency:"Daily",headline:"Get the Today's Headlines Newsletter",id:"post_newsletter1",name:"Today's Headlines",tagline:"Free daily updates delivered just for you.",template:"signup-confirm-heads",variable:"vars[intent_heads]"},{frequency:"Daily",headline:"Get the Read In Newsletter",id:"post_newsletter112",name:"Read In",tagline:"Free daily updates delivered just for you.",template:"signup-confirm-readin",variable:"vars[intent_readin]"},{frequency:"Weekly",headline:"Get the Lean \x26 Fit Newsletter",
id:"post_newsletter8",name:"Lean \x26 Fit",tagline:"Free weekly updates delivered just for you.",template:"signup-confirm-lean",variable:"vars[intent_lean]"},{frequency:"Twice-weekly",headline:"Get the Checkpoint Newsletter",id:"post_newsletter130",name:"Checkpoint",tagline:"Free twice-weekly updates delivered just for you.",template:"signup-confirm-check",variable:"vars[intent_check]"}],subscribeEmail,washPostId,showNewsletter=function(){$("#signup-box-rr").show()},hideNewsletter=function(){$("#signup-box-rr").hide()},
showSignUpForm=function(){$("#newsletter-signUp-form").show();$("#newsletter-signUp-button").hide()},showSignUpButton=function(){$("#newsletter-signUp-form").hide();$("#newsletter-signUp-button").show()},showErrorMessage=function(message){if(message)$(".newsLetter-error-msg").text(message).show()},hideErrorMessage=function(){$(".newsLetter-error-msg").hide()},setNewsLetterValue=function(data){$("#newsletter-headline").append(data.headline);$("#newsletter-tagline").text(data.blurb)},setRecommendationsValues=
function(data){$(".suggestion-list .recommended").each(function(index){$(this).find("p").text(data[index].headline);$(this).find("input[type\x3d'checkbox']").attr("value",data[index].id);$(this).find("input[type\x3d'checkbox']").attr("name",data[index].name)})},toggleRecommendations=function(show){if(show){$("#newsletter-signUp-form, #newsletter-signUp-button, #newsletter-tagline").hide();$("#newsletter-suggestions-rr, #headline-checked, #subscribed-confirmation, #all-newsletters-lbl").show()}else $("#newsletter-suggestions-rr").hide()},
showSignUpConfirmation=function(){$("#newsletter-signUp-form, #newsletter-signUp-button, #newsletter-tagline").hide();$("#headline-checked, #subscribed-confirmation, #all-newsletters-lbl").show()},getUserId=function(){return document.cookie.match(/wapo_login_id=([^;]+)/)?RegExp.$1:""},getWapoId=function(){return document.cookie.match(/wapo_secure_login_id=([^;]+)/)?RegExp.$1:""},getPageData=function(){var section=$("#newsletter-section").text(),subSection=$("#newsletter-subsection").text(),blog=$("#newsletter-blogname").text(),
data={};washPostId=getUserId();if(washPostId!=="")data.washPostId=washPostId;if(blog)data.blog=blog;if(subSection)data.subSection=subSection;if(section)data.section=section;return data},getMainNewsletter=function(){var data=getPageData();return $.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletter",data:JSON.stringify(data)})},getRecommendations=function(newsletters){var data=getPageData();data.newsletters=
newsletters;return $.ajax({type:"POST",dataType:"json",contentType:"application/json",url:"https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletters",data:JSON.stringify(data)})},subscribe=function(email,recaptchaToken){var data,url;if(washPostId!==""){url="https://subscribe.washingtonpost.com/person/newsletter/subscribe";data={"wapoLoginID":washPostId,"wapoSecureID":getWapoId(),"userAgent":navigator.userAgent,"newsletterName":window.Newsletter.id,"metadata":[{"name":"nl_start_method",
"value":"EI"},{"name":"nl_start_location","value":"RR"}]};if(recaptchaToken)data["recaptchaResponse"]=recaptchaToken}else if(email){url="https://subscribe.washingtonpost.com/person/newsletter/subscribe-email";data={"email":email,"newsletterName":window.Newsletter.id,"metadata":[{"name":"nl_start_method","value":"EI"},{"name":"nl_start_location","value":"RR"}]};if(recaptchaToken)data["recaptchaResponse"]=recaptchaToken}$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:url,data:JSON.stringify(data),
success:function(data){if(data.status=="SUCCESS"){sendCustomTrackProps("event91",trackProps(window.Newsletter.name,1,"simple"),"Newsletter Right Rail Sign-up");setUpRecommendations(window.Newsletter.id)}},error:function(request,status,error){console.log(error,"Error while subscribing")}})},subscribeBundle=function(){var data,url,newsletters=[],newsletterNames=[];$("#newsletter-suggestions-rr input:checked").each(function(index){newsletters.push($(this).val());newsletterNames.push({name:$(this).attr("name"),
position:$(this).attr("data-pos")})});if(newsletters.length>0&&newsletterNames.length>0){if(washPostId!==""){url="https://subscribe.washingtonpost.com/person/newsletter/subscribe-list";data={"wapoLoginID":washPostId,"wapoSecureID":getWapoId(),"userAgent":navigator.userAgent,"newsletters":newsletters,"metadata":[{"name":"nl_start_method","value":"EA"},{"name":"nl_start_location","value":"RR"}]}}else if(subscribeEmail){url="https://subscribe.washingtonpost.com/person/newsletter/subscribe-list-email";
data={"email":subscribeEmail,"newsletters":newsletters,"metadata":[{"name":"nl_start_method","value":"EA"},{"name":"nl_start_location","value":"RR"}]}}$.ajax({type:"POST",dataType:"json",contentType:"application/json",url:url,data:JSON.stringify(data),success:function(data){if(data.status=="SUCCESS"){for(var i=0;i<newsletterNames.length;i++)sendCustomTrackProps("event91",trackProps(newsletterNames[i].name,newsletterNames[i].position,"enhanced"),"Newsletter Right Rail Sign-up Bundle");setUpRecommendations(newsletters,
true);toggleRecommendations(false)}},error:function(request,status,error){console.log(error,"Error while subscribing bundle")}})}},setUpRecommendations=function(newsletterId,confirmBundleSubscribe){var recommendations=getRecommendations([window.Newsletter.id]);recommendations.done(function(data){if(!$.isEmptyObject(data.newsletters)&&data.newsletters.length>=3&&!confirmBundleSubscribe){window.Newsletters=data.newsletters;setRecommendationsValues(data.newsletters);toggleRecommendations(true)}else toggleRecommendations(false);
showSignUpConfirmation()});recommendations.fail(function(){if(!confirmBundleSubscribe){window.Newsletters=defaultNewsLetters;setRecommendationsValues(defaultNewsLetters);toggleRecommendations(true)}})},setUpMainNewsletter=function(newsletter){window.Newsletter=newsletter;setNewsLetterValue(newsletter);showNewsletter();if(getUserId()!=="")showSignUpButton();else showSignUpForm()},applyRrNewsletters=function(variant,version){var mainNewsletter=getMainNewsletter();mainNewsletter.done(function(data){if(!$.isEmptyObject(data.newsletter))setUpMainNewsletter(data.newsletter);
else hideNewsletter()});mainNewsletter.fail(function(){setUpMainNewsletter(defaultNewsLetter);sendCustomTrackProps("event50",trackProps(defaultNewsLetter.name,1),"Newsletter Right Rail API failure case")});if(typeof grecaptcha==="undefined")$.ajax({url:"https://www.google.com/recaptcha/api.js",dataType:"script",cache:true,success:function(data,textStatus,jqxhr){var findCaptcha=setInterval(function(){if(typeof grecaptcha!=="undefined")clearInterval(findCaptcha)},50)},error:function(data){console.log(data)}});
var captchaId;var email;var resetCaptcha=function(formContent){if(captchaId)grecaptcha.reset();$("#nlrecaptchadiv").html("");captchaId=grecaptcha.render("nlrecaptchadiv",{"sitekey":"6Lf0DRoUAAAAAEawkoNEUKcpWx8eh_I7PRArTA9V","size":"invisible","callback":function(resp){console.log("response key \x3d "+grecaptcha.getResponse(captchaId));$("#captchaDiv .text-success").show();setTimeout(function(){$("#captchaDiv .text-success").hide();$("#captchaDiv").hide()},5E3);subscribe(email,resp)}})};var captchaInitialized=
0;$("#newsLetter-input").click(function(e){if(!captchaInitialized){captchaInitialized=1;resetCaptcha($(this).html())}});$(".subscribe-newsLetter").click(function(){var re=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;subscribeEmail=$("#newsLetter-input").val();if(this.id!=="newsletter-signUp-button"&&(subscribeEmail==""||!re.test(subscribeEmail)))showErrorMessage("Please enter a valid email address");else{hideErrorMessage();email=subscribeEmail;if(washPostId!=="")subscribe(subscribeEmail);else grecaptcha.execute(captchaId)}return false});
$("#subscribe-bundle").click(function(){subscribeBundle()});$("#cancel-bundle").click(function(){sendCustomTrackProps("event58",trackProps(),"No Thanks, Newsletter Right Rail Sign-up Bundle");$("#newsletter-suggestions-rr, #subscribed-confirmation").hide()})};function trackProps(newsletterName,index,enhancedKey){var subsection=window.wp_subsection||"";var contentType=window.wp_content_type||"";var channel=window.wp_channel||"";var props={"eVar2":"wp - "+subsection,"prop2":"wp - "+subsection,"prop3":contentType,
"eVar17":contentType,"channel":channel};if(newsletterName&&index)props.eVar26="nl_rightrail_"+enhancedKey+"_"+newsletterName.toLowerCase().split(" ").join("-")+"_"+index;return props}function sendCustomTrackProps(eventKey,props,name){if(!!window.s)window.s.sendDataToOmniture(name||"PB Feature - Page-Newsletter",eventKey,props,{wait:true})}function onVisibilityChange(el,callBack){return function(){if(isElementInViewport(el))callBack()}}function isElementInViewport(el){if(typeof jQuery==="function"&&
el instanceof jQuery)el=el[0];var rect=el.getBoundingClientRect();return rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth)}function initABTest(){$d.on("abtest-ready",function(e,ABT){if(deviceWidth>460)if(window.TWP.Data.Tracking.props.content_type=="front")applyRrNewsletters();else if(window.TWP.Data.Tracking.props.content_type=="blog"||window.TWP.Data.Tracking.props.content_type==
"article"){var testArticle=ABT.get("newsletters-articleUnits");if(!testArticle.is("banner")&&!testArticle.is("bottom"))applyRrNewsletters(testArticle)}else applyRrNewsletters()})}this.init=function(){initABTest()}}var lifecycle={init:function(){var nl=new Newsletter;nl.init()}};if(wp_pb.StaticMethods.isPageHydrated())lifecycle.init();__e.push(["shamble",function(){lifecycle.init()}])})(jQuery);
(function($){try{function cleanUp(){$("li","#editors-picks-rr").each(function(i){var $this=$(this);var $headline=$(".headline",$this);var $number=$(".number",$this);var lineHeight=parseInt($headline.css("lineHeight"));if($headline.height()<=2*lineHeight)$headline.css({"padding-top":"7px","padding-bottom":"8px"});else if($headline.height()>3*lineHeight)while($headline.height()>3*lineHeight){$headline.text($headline.text().replace(/\.\.\.$/,""));$headline.text($headline.text().slice(0,-1));$headline.text($headline.text()+
"...")}})}cleanUp()}catch(e){}})(jQuery);
(function($,TWP){var AD_LOAD_TIMEOUT=7E3;var AD_MIN_VISIBLE=1E3;var applyStickiness=function(){var $window=$(window),$ad=$(".pb-f-ad-right-rail-ads"),$rightRail=$ad.closest(".right-rail"),original_top=$rightRail.offset().top-100,iframeError;$rightRail.css({"position":"relative"});$ad.on("DOMNodeInserted",function(e){var $el=$(e.target),id=$el.attr("id");if($el.is("iframe")&&id&&!/(hidden)/g.test(id)){$ad.off("DOMNodeInserted");afterAdInserted($el)}});var bindScrollDown=function(){var top;$window.off("scroll.rightRail-sticky").on("scroll.rightRail-sticky",
function(){top=$window.scrollTop()>original_top?$window.scrollTop()-original_top:0;$rightRail.css({"top":top})})};var bindScrollUp=function(){$window.off("scroll.rightRail-sticky").on("scroll.rightRail-sticky",function(){if($window.scrollTop()<original_top){$window.off("scroll.rightRail-sticky");$rightRail.css({"top":0})}else if($window.scrollTop()<$rightRail.offset().top)$rightRail.css({"top":$window.scrollTop()-original_top})})};var afterAdInserted=function($el){var afterLoaded=function(){bindScrollUp()};
iframeError=setTimeout(function(){afterLoaded()},AD_LOAD_TIMEOUT);$el.on("load",function(){clearTimeout(iframeError);setTimeout(function(){afterLoaded()},AD_MIN_VISIBLE)})};bindScrollDown()};if(!!TWP&&!!TWP.Features&&!!TWP.Features.Ad&&!!TWP.Features.Ad.RightRailAd&&!!TWP.Features.Ad.RightRailAd.sticky)applyStickiness()})(jQuery,TWP);
(function($,TWP){var applyStickiness=function(){var $window=$(window),$ad=$(".pb-f-ad-flex-3"),$nextStory=$(".pb-f-article-next-story"),$leaderboardAd=$(".pb-f-ad-leaderboard-2"),$rightRail=jQuery("#right-rail"),slotId="slug_flex_ss_bb_hp_3",$prevSibling=$ad.prev();if(!$rightRail.length)$rightRail=$prevSibling;$ad.on("DOMNodeInserted",function(e){var $el=$(e.target),id=$el.attr("id");if($el.is("iframe")&&id&&!/(hidden)/g.test(id)){$ad.off("DOMNodeInserted");afterAdInserted($el)}});var bindScrollDown=
function(){var original_top=$ad.offset().top,scrollTop,ad_left=$rightRail.offset().left,adWidth=$rightRail.width(),min_left=618;var getStopPoint=function(){var leaderboardAdTop=$leaderboardAd.length?$leaderboardAd.offset().top:$(document).height();var featureTop=$nextStory.is(":visible")?$nextStory.offset().top:leaderboardAdTop;return featureTop-$ad.height()-50};var getTopPoint=function(){if($prevSibling.length)return $prevSibling.offset().top+$prevSibling.height();else return original_top};var applySticky=
function(scrollTop){var stopPoint=getStopPoint();if(scrollTop>stopPoint){if($ad.hasClass("sticky")){$ad.removeClass("sticky");$ad.css({"top":stopPoint,"position":"absolute"})}}else if(!$ad.hasClass("sticky")&&ad_left>min_left){$ad.css({"top":50,"left":ad_left,"width":adWidth,"position":"initial"});$ad.addClass("sticky")}};var removeSticky=function(){if($ad.hasClass("sticky")){$ad.attr("style","");$ad.removeClass("sticky")}};$window.off("scroll.flexAd3-sticky").on("scroll.flexAd3-sticky",function(){scrollTop=
$window.scrollTop();if(scrollTop>getTopPoint())applySticky(scrollTop);else removeSticky()});$window.off("resize.flexAd3-sticky").on("resize.flexAd3-sticky",function(){ad_left=$rightRail.offset().left;if($ad.is(":visible")&&$ad.hasClass("sticky"))if(ad_left>min_left)$ad.css({"left":ad_left});else removeSticky()});$ad.on("flexAd3.remove_sticky",function(){$window.off("scroll.flexAd3-sticky");$window.off("resize.flexAd3-sticky");removeSticky()})};function startSticky(){if(!TWP.Features.Ad.flexAd3.sticky)return;
if($ad.is(":visible"))bindScrollDown();else $window.on("resize.flexAd3-invisible",function(){if($ad.is(":visible"))bindScrollDown();else $ad.trigger("flexAd3.remove_sticky")})}var afterAdInserted=function(){if(window.googletag&&googletag.pubadsReady)googletag.pubads().addEventListener("slotRenderEnded",function(event){if(event.slot.getSlotElementId()===slotId)startSticky()})}};if(TWP.Features.Ad.flexAd3&&TWP.Features.Ad.flexAd3.sticky)applyStickiness()})(jQuery,TWP);
(function($){TWP=window.TWP||{};TWP.PostTV=TWP.PostTV||{};TWP.PostTV.StickyPlayer=TWP.PostTV.StickyPlayer||{};var $root=$($(".pb-f-posttv-sticky-player")),$subRoot=$root.find(".posttv-sticky-player-video"),$vidWrapper=$root.find(".posttv-sticky-player-wrapper"),$textEl=$root.find(".posttv-sticky-player-text"),$caption=$root.find(".posttv-sticky-player-caption");TWP.PostTV.StickyPlayer.showPlayer=function(){$subRoot.removeClass("wpv-hidden")};TWP.PostTV.StickyPlayer.hidePlayer=function(){$subRoot.addClass("wpv-hidden")};
TWP.PostTV.StickyPlayer.showText=function(){$textEl.removeClass("wpv-hidden")};TWP.PostTV.StickyPlayer.hideText=function(){$textEl.addClass("wpv-hidden")};TWP.PostTV.StickyPlayer.updateBlurb=function(newBlurb){$caption.html(newBlurb)};var adjustSize=function(){var stickyWidth=$(window).width()*.3+12;if(stickyWidth>492)stickyWidth=492;else if(stickyWidth<156)stickyWidth=156;$root.css({"width":stickyWidth});$vidWrapper.css({"width":stickyWidth-12});$vidWrapper.css({"height":$vidWrapper.width()*9/16})};
$(window).off("resize.stickyPlayerResize").on("resize.stickyPlayerResize",function(){adjustSize()});adjustSize();function isElementInViewport(el,fract){if(typeof jQuery==="function"&&el instanceof jQuery)el=el[0];var fraction=fract||.8;var rect=el.getBoundingClientRect();var topOffsetAdjustment=0,$navBarEl=$("#nav-bar"),$breakingNewsEl=$(".pb-f-page-breaking-news-bar"),$shareBarEl=$(".top-sharebar-wrapper",".pb-f-sharebars-top-share-bar");if($navBarEl.length>0)topOffsetAdjustment+=$navBarEl.height();
if($breakingNewsEl.length>0)topOffsetAdjustment+=$breakingNewsEl.height();return rect.top+el.offsetHeight*fraction>=topOffsetAdjustment&&rect.left>=0&&rect.bottom-el.offsetHeight*fraction<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth)||rect.top<0&&rect.bottom>(window.innerHeight||document.documentElement.clientHeight)}var $players=$(".posttv-video-embed");var throttleInterval=5;var waitInterval=400;var lastTime=(new Date).getTime();
var isOut=false;var playerOutId;var waitTimeout;var $target=$root.find("#posttv-sticky-player-wrapper");var $stickyClose=$root.find(".posttv-sticky-player-exit");var outTracker=false;var closeTracker=false;var WAIT=false;function getExceptions(){var url="//projects.posttv.com/siteconfig/settings.json";$.getJSON(url,function(data){var excludeUrls=data["sticky-player-exclude-urls"];var isException=false;excludeUrls.forEach(function(url){if(window.location.href.indexOf(url)>-1)isException=true});if(!isException)initEventHandlers()})}
function safetyCheck(cb){clearTimeout(waitTimeout);waitTimeout=setTimeout(function(){WAIT=true;cb&&cb()},waitInterval)}function moveOut(id,$el,playerEmbed){if(!outTracker){playerEmbed.reportEvent("event8888","Sticky Player initialized");outTracker=true}playerOutId=id;isOut=true;$root.removeClass("wpv-hidden");clearTimeout(waitTimeout);if($target.get(0).style.display!="none")playerEmbed.animateTo($el,{fixed:true,zIndex:536870903,cb:function(){if(isOut)TWP.PostTV.StickyPlayer.showPlayer()}})}function moveBack($el,
playerEmbed){TWP.PostTV.StickyPlayer.hidePlayer();safetyCheck(function(){playerEmbed.animateTo($el,{cb:function(){WAIT=false}})});$root.addClass("wpv-hidden");isOut=false}function checkPlayers(){var $el=$($players.get(0));if($el.data("aspect-ratio")<.56||$el.data("aspect-ratio")>.57)return true;var id=$el.attr("id");var hasBeenVisible=$el.data("has-been-visible");var player=window.TWP&&TWP.PostTV&&TWP.PostTV.players?TWP.PostTV.players[id]:null;var playerEmbed=window.TWP&&TWP.PostTV&&TWP.PostTV.embeds?
TWP.PostTV.embeds[id]:null;var $wrap=$el.parent().hasClass("wpv-wrap")?$el.parent():$el.parent().parent().hasClass("wpv-wrap")?$el.parent().parent():null;if($wrap&&player&&player.player&&hasBeenVisible&&!closeTracker)if(isElementInViewport($wrap)&&isOut&&playerOutId===id)moveBack($wrap,playerEmbed);else if(!isElementInViewport($wrap)&&!isOut&&player.player.getState()==="playing")moveOut(id,$target,playerEmbed)}function initEventHandlers(){$(window).scroll(function(){var time=(new Date).getTime();
if(time-lastTime>throttleInterval&&isMobile&&!isMobile.any()&&!WAIT){lastTime=time;checkPlayers()}});$(window).resize(function(){if(isOut&&playerOutId)TWP.PostTV.embeds[playerOutId].animateTo($target,{fixed:true,speed:10,zIndex:536870903})});$stickyClose.click(function(){var playerEmbed=playerOutId?TWP.PostTV.embeds[playerOutId]:null;var player=TWP.PostTV.players[playerOutId];if(!closeTracker){playerEmbed.reportEvent("event8889","Sticky Player closed");closeTracker=true}if(playerEmbed){player.pause();
moveBack($("#"+playerOutId).parent(),playerEmbed)}})}if(!$(".powa").length){console.debug(".powa found in orig sticky");var waitForPubSub=setInterval(function(){if(typeof PubSub!=="undefined"){clearInterval(waitForPubSub);PubSub.subscribe("playerCreated",function(msg,data){if(data.playerType!=="posttv-embed")return;var $el=$("#"+data.playerContainerId);$el.addClass("wpv-sticky");var $wrap=$el.parent().hasClass("wpv-wrap")?$el.parent():null;var playerEmbed=TWP&&TWP.PostTV&&TWP.PostTV.embeds?TWP.PostTV.embeds[$el.attr("id")]:
null;if(!$wrap&&playerEmbed)playerEmbed.wrap()})}},200)}getExceptions();$(function(){$root.addClass("wpv-hidden")})})(jQuery);
(function($,window){function saveKeyValue(key,value){try{var segments=localStorage.getItem("usersegmentsAdops")||"{}";segments=JSON.parse(segments);segments[key]=value;localStorage.setItem("usersegmentsAdops",JSON.stringify(segments))}catch(e){}}function setAdopsData(data){var value=null;if(data&&data.segmentsFlag){value=data.segmentsFlag["7978704408"];if(value=="8936"){saveKeyValue("8936",1);saveKeyValue("9868",0);saveKeyValue("6136",0)}else if(value=="9868"){saveKeyValue("8936",0);saveKeyValue("9868",
1);saveKeyValue("6136",0)}else if(value=="6136"){saveKeyValue("8936",0);saveKeyValue("9868",0);saveKeyValue("6136",1)}else{saveKeyValue("8936",0);saveKeyValue("9868",0);saveKeyValue("6136",0)}value=data.segmentsFlag["5497328667"];if(value=="7204"){saveKeyValue("7204",1);saveKeyValue("0862",0);saveKeyValue("2467",0);saveKeyValue("0668",0)}else if(value=="0862"){saveKeyValue("7204",0);saveKeyValue("0862",1);saveKeyValue("2467",0);saveKeyValue("0668",0)}else if(value=="2467"){saveKeyValue("7204",0);
saveKeyValue("0862",0);saveKeyValue("2467",1);saveKeyValue("0668",0)}else{saveKeyValue("7204",0);saveKeyValue("0862",0);saveKeyValue("2467",0);saveKeyValue("0668",1)}var segments=["808","809","810"];var thresholds=["H","M","L"];for(var is=0;is<segments.length;is++)for(var it=0;it<thresholds.length;it++){value=data.segmentsFlag["9013442"+segments[is]];if(value&&value.toUpperCase()==thresholds[it])saveKeyValue(segments[is]+"_"+thresholds[it],1);else saveKeyValue(segments[is]+"_"+thresholds[it],0)}var newsletters=
["6362","3552","3433","7543","8636","5723","2748","3522","5263"];var list=[];value=data.segmentsFlag["1599213719"];if(value&&value.length>0)list=value.split(",");for(var i=0;i<newsletters.length;i++){var nl=newsletters[i];if(list.indexOf(nl)>-1)saveKeyValue(nl,1);else saveKeyValue(nl,0)}}}function getUserSegments(){var svi=false;var update=true;try{var segments=JSON.parse(localStorage.getItem("usersegments"));var updatedAt=(new Date(segments.updated)).getTime();if(Date.now()-updatedAt<3600*1E3)update=
false}catch(e){}try{var sviFull=document.cookie.match(/s_vi=([^;]+)/)?RegExp.$1:false;if(sviFull&&sviFull!==""){svi=sviFull.replace(/.*\|/,"").replace(/\[.*/,"").split("-");svi=svi[0]+"-"+svi[1]}}catch(e){}if(update)$.ajax("https://usersegment.wpdigital.net/usersegments",{type:"POST",dataType:"json",processData:false,contentType:"application/json",data:JSON.stringify({userid:svi})}).done(function(data){setAdopsData(data);data.updated=new Date;localStorage.setItem("usersegments",JSON.stringify(data))})}
function normalizeURL(url,removeTrailingSlash){var str=(url||"").trim();str=str.replace(/^(https?:)?\/\//,"");str=str.replace(/[?#].*/,"");if(removeTrailingSlash)str=str.replace(/\/$/,"");return str}function extractQueryParam(param){var rgx=new RegExp(".*[?\x26]"+param+"\x3d([^\x26]+).*");if(rgx.test(document.location.toString()))return document.location.toString().replace(rgx,"$1");else return""}function callTargeting(){var clavisAuxiliaries=window.wp_meta_data&&wp_meta_data.clavis&&wp_meta_data.clavis.auxiliaries||
[];var canonicalUrl=$('link[rel\x3d"canonical"]').attr("href");if(!canonicalUrl)canonicalUrl=[window.location.host,window.location.pathname].join("");var loxodoId=null;try{loxodoId=localStorage.getItem("wp_vi")}catch(e){}var contentType="";try{contentType=TWP.Data.Tracking.props.content_type}catch(e){}var usersegments=null;try{usersegments=JSON.parse(localStorage.getItem("usersegments"))}catch(e){}var metadata=window.wp_meta_data||null;if(metadata){metadata=JSON.parse(JSON.stringify(metadata));var ctype=
metadata["contentType"];if(ctype==""||ctype===null||ctype===false||typeof ctype=="undefined")metadata["contentType"]=[];else metadata["contentType"]=[].concat(ctype)}var dataPayload={articleid:normalizeURL(canonicalUrl,true),referrer:normalizeURL(document.referrer),uuid:loxodoId,userid:loxodoId,auxiliaries:clavisAuxiliaries,contentType:contentType,wp_meta_data:metadata,usersegments:usersegments,tid:extractQueryParam("tid"),wpisrc:extractQueryParam("wpisrc"),isMobile:window.isMobile&&window.isMobile.any()};
$.ajax({url:"https://targeting.washpost.nile.works/TargetingWebAPP/targeting",type:"POST",contentType:"application/json",dataType:"JSON",data:JSON.stringify(dataPayload)}).done(function(response){var auxMap=response.aux_map&&response.aux_map.join(",");if(auxMap)localStorage.setItem("targeting_aux_map",auxMap);else localStorage.setItem("targeting_aux_map","")})}if(wp_pb.StaticMethods.isPageHydrated()){getUserSegments();callTargeting()}__e.push(["shamble",function(){getUserSegments();callTargeting()}])})(jQuery,
window);
(function($){})(jQuery);
(function magnetAnonymous(window,$,wp_pb,undefined){var SCROLL_INTERVAL=200;var DEFAULT_DEBOUNCE=100;var UP_OFFSET=-175;var DOWN_OFFSET=-10;var WINDOW_TOP_OFFSET=0;var SCREEN_BOTTOM_OFFSET=600;logMagnetTag();$(function(){var $w=$(window);var $d=$(document);var $r=$("html");var $h=$(".pb-f-page-header-v2");var $instance=$(".pb-f-page-magnet");$instance.each(function(){var $el=$(this);$el.insertAfter($h);init($el)});function init($container){var $modulearea=$container.find(".pb-module-area");var $isMobile=
$("html").hasClass("mobile");if($isMobile)makeTitle().insertBefore(".pb-f-page-magnet").addClass("mb-title");else{makeTitle().insertAfter(".pb-magnet-controls").addClass("desk-title");$(".desk-title").addClass("showInlineBlock")}var $ctrl={};$ctrl.$container=$container.find(".pb-magnet-controls");$ctrl.$mvleft=$ctrl.$container.find(".pb-magnet-mvleft");$ctrl.$mvright=$ctrl.$container.find(".pb-magnet-mvright");$container.data("magnetControl",$ctrl);var $title=$modulearea.find(".pb-magnet-title");
applyTitleCase($title.find(".pb-magnet-h2.magnet-title-case"));$modulearea.find('[data-pb-magnet-first\x3d"true"]').insertAfter($title);var $items=$container.find(".pb-magnet-item");var $imgs=$items.find(".pb-magnet-article-image");if($items.length==0)return;var tagname=$modulearea.data("tag");var omniParams=params($modulearea.data("omni"));tagLinks(omniParams);attachNavEvents();$modulearea.css("display","");function attachNavEvents(){applyLazyload();var edown="mousedown.magnet";if(!touchDevice()){containerScroll(function(){applyNavVisibility()});
$ctrl.$mvleft.off(edown).on(edown,function(){var value=Math.max(0,$container.scrollLeft()-computeWidth());moveScroll(value)});$ctrl.$mvright.off(edown).on(edown,function(){var value=$container.scrollLeft()+computeWidth();moveScroll(value)});registerOnce("nav","start_open",debounce(function(){down()},DEFAULT_DEBOUNCE,true))}else windowTop(function(){if(WINDOW_TOP_OFFSET>=$w.scrollTop())down()});registerOnce("nav","start_close",debounce(function(){up()},DEFAULT_DEBOUNCE,true));registerOnce("magnet",
"start_open",debounce(function(){if(tagname&&!!window.s)s.sendDataToOmniture("magnet_open","",{prop72:tagname})},DEFAULT_DEBOUNCE,true));function computeWidth(){var winwidth=$w.width();var itemwidth=$items.first().width();return Math.floor(winwidth/itemwidth)*itemwidth}}function params(value){var params=value?value.split("\x26"):[value];var result=[];if(params.length>0)$.each(params,function(index,value){var param=value.split("\x3d");result.push(param)});return result}function tagLinks(params){$modulearea.find("a").each(function(){var $a=
$(this);var url=$a.attr("href");$.each(params,function(index,param){url=updateUrlParam(url,param[0],param[1])});$a.attr("href",url)})}function registerOnce(arg1,arg2,fn){var regdata=[arg1,arg2];var regname=regdata.join(":");if(!$container.data(regname))wp_pb.register(regdata[0],regdata[1],fn);$container.data(regname,true)}function applyNavVisibility(){$ctrl.scrollleft=$container.scrollLeft();$ctrl.leftoffset=$container.scrollLeft()+$container.width();var rightbound=$modulearea[0].offsetWidth-$ctrl.leftoffset<=
0;$ctrl.$mvleft.toggle(!!$ctrl.scrollleft);$ctrl.$mvright.toggle(!rightbound)}function applyLazyload(){var sename="scroll.magnet-lazy";var reveal=0;$container.off(sename).on(sename,debounce(function(){lazy()},1,true));lazy();function lazy(){var count=Math.max(reveal,computeNumberOfImages());if(!!count&&"NaN"!==count.toString()&&reveal!==count){reveal=count;$imgs.filter(":lt("+reveal+")").each(function(){var $el=$(this);$el.attr("src",$el.data("original"))})}}function computeNumberOfImages(){return Math.ceil(($container.scrollLeft()+
($container.width()||$(window).width()))/$items.first().width())}}function nearBottom(){return $w.scrollTop()>=$d.height()-$w.height()-SCREEN_BOTTOM_OFFSET}function down(){$r.addClass("magnet");$(".mb-title").addClass("showBlock");if(!nearBottom())$r.addClass("magnet-nudge");if(touchDevice())$container.add(".mb-title").addClass("magnet-open");else $container.addClass("magnet-open").css({top:DOWN_OFFSET});wp_pb.report("magnet","start_open")}function up(){$r.removeClass("magnet magnet-nudge");$(".mb-title").removeClass("showBlock");
if(touchDevice())$container.add(".mb-title").removeClass("magnet-open");else $container.removeClass("magnet-open").css({top:UP_OFFSET});wp_pb.report("magnet","start_close")}function containerScroll(fn){var scroll;var rename="resize.magnet";$w.off(rename).on(rename,function(){scroll=true});var sename="scroll.magnet";$container.off(sename).on(sename,function(){scroll=true});var tid;setInterval(function(){if(scroll){if(tid)clearTimeout(tid);tid=setTimeout(function(){fn()},SCROLL_INTERVAL)}scroll=false},
SCROLL_INTERVAL)}function getTitleHtml(){return $("#PageMagnetTitle").html()}function makeTitle(){return $(getTitleHtml())}function windowTop(fn){var atop=false;var tid;var sename="scroll.magnet";$w.off(sename).on(sename,function(){var top=$(window).scrollTop();if(!atop&&top==0){atop=true;if(tid)clearTimeout(tid);tid=setTimeout(function(){fn()},SCROLL_INTERVAL)}else if(top>=0)atop=false})}function moveScroll(value){$container.stop().animate({scrollLeft:value},"slow")}}function touchDevice(){return $r.hasClass("touch")}
});function titleCase(strValue){var str=strValue.replace(/([^\W_]+[^\s-]*) */g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()});var lowers=["A","An","The","And","But","Or","For","Nor","As","At","By","For","From","In","Into","Near","Of","On","Onto","To","With"];var i,j;for(i=0,j=lowers.length;i<j;i++)str=str.replace(new RegExp("\\s"+lowers[i]+"\\s","g"),function(txt){return txt.toLowerCase()});var uppers=["Id","Tv"];for(i=0,j=uppers.length;i<j;i++)str=str.replace(new RegExp("\\b"+
uppers[i]+"\\b","g"),uppers[i].toUpperCase());return str}function applyTitleCase($el){var title=titleCase(($el.text()||"").replace(/_/gi," "));$el.text(title)}function updateUrlParam(url,key,value){var n=new RegExp("([?\x26])"+key+"\x3d.*?(\x26|$)","i");var i=-1!==url.indexOf("?")?"\x26":"?";return url.match(n)?url.replace(n,"$1"+key+"\x3d"+value+"$2"):url+i+key+"\x3d"+value}function logMagnetTag(){var tagname;var modulearea=document.getElementsByClassName("pb-f-page-magnet")[0].getElementsByClassName("pb-module-area")[0];
tagname=modulearea&&modulearea.getAttribute("data-tag");if(tagname&&!!window.s)s.prop55=tagname}function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args)};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args)}}})(window,jQuery,wp_pb);
__darwinmeta__=window.__darwinmeta__||{isFired:false};(function(window,store){var MAX_WAIT=200;_dw=window._dw||[];_dw.push(["global","ready",function(api){if(!store.isFired){store.isFired=true;fireEvent(api)}}]);setTimeout(function(){if(!store.isFired&&"function"==typeof window._dw)_dw.push(["global","ready",function(api){store.isFired=true;fireEvent(api)}])},MAX_WAIT);function fireEvent(api){$(window.document).trigger("abtest-ready",[api])}})(window,__darwinmeta__);