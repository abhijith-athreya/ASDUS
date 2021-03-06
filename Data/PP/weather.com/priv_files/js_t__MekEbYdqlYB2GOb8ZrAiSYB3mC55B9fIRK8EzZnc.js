angular.module("gm_footer",[]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/gm_footer/gm_footer.app.min.js.map
;
angular.module("title_h2",[]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/modules/title_h2/title_h2.app.min.js.map
;
twc.glomo_smart_banner=twc.glomo_smart_banner||{},twc.glomo_smart_banner.app=twc.glomo_smart_banner.app||angular.module("glomo_smart_banner",[]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_smart_banner/glomo_smart_banner.app.min.js.map
;
angular.module("glomo_cobrand_headers",[]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_cobrand_headers/glomo_cobrand_headers.app.min.js.map
;
angular.module("glomo_breaking_now",[]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_breaking_now/glomo_breaking_now.app.min.js.map
;
angular.module("glomo_social_sharing",[]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_social_sharing/glomo_social_sharing.app.min.js.map
;
/**
 * Created by riggs on 6/12/14.
 */
twc.shared.apps.config(['twcMessageProvider',function(twcMessageProvider) {
	twcMessageProvider.add({
		"en_US" : {
      "error_handler.GENERIC_ERROR_TITLE" : "Oops!",
      "error_handler.GENERIC_ERROR_DESCRIPTION" : "Looks like this feature didn't load properly. Please check back soon.",
      "error_handler.NOT_AVAILABLE_TITLE" : "We're Sorry...",
      "error_handler.NOT_AVAILABLE_DESCRIPTION" : "Data is not currently available for this location."
		}
	});
}]);;
angular.module("glomo_search",[]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_search/glomo_search.app.min.js.map
;
twc.shared.apps.value("aliases",{specialty:{alcatraz:"USCA0987:1:US","amelia island":"USFL0144:1:US","american somoa":"USAS0001:1:US","canary islands":"SPXX0210:1:SP","catalina island":"USCA0055:1:US","disney hawaii":"USHI0200:1:US","disney world":"USFL0615:1:US",disneyland:"USCA1306:1:US","grand cayman":"CJXX0001:1:CJ","green acres":"USFL0512:1:US","hawaii aulani disney resort":"USHI0200:1:US",kauai:"USHI0060:1:US","kiawah island":"USSC0174:1:US","la porte":"USCA1106:1:US",lanai:"USHI0057:1:US",manhattan:"USNY0996:1:US",maui:"USHI0031:1:US",monoco:"MNXX0001:1:MN",oahu:"USHI0026:1:US","tampa bay":"USFL0481:1:US","tel aviv":"ISXX0026:1:IS",uk:"UKXX0085:1:UK","walt disney world":"USFL0615:1:US","washington dc":"USDC0001:1:US","new york city":"USNY0996:1:US",aruba:"AAXX0001:1:AA",bahamas:"BFXX0005:1:BF",bermuda:"BDXX0001:1:BD","big bear":"USCA0093:1:US",brooklyn:"USNY0176:1:US","costa rica":"CSXX1935:1:CS",disneyworld:"USFL0615:1:US",la:"USCA0638:1:US",nyc:"USNY0996:1:US","puerto rico":"USPR0087:1:US"},state:{al:"alabama",ak:"alaska",az:"arizona",ar:"arkansas",ca:"california",co:"colorado",ct:"connecticut",de:"delaware",fl:"florida",ga:"georgia",hi:"hawaii",di:"idaho",il:"illinois","in":"indiana",ia:"iowa",ks:"kansas",ky:"kentucky",la:"louisiana",me:"maine",md:"maryland",ma:"massachusetts",mi:"michigan\tmi",mn:"minnesota\tmn",ms:"mississippi",mo:"missouri",mt:"montana",ne:"nebraska",nv:"nevada",nh:"new hampshire",nj:"new jersey",nm:"new mexico",ny:"new york",nc:"north carolina",nd:"north dakota",oh:"ohio",ok:"oklahoma",or:"oregon",pa:"pennsylvania",ri:"rhode island",sc:"south carolina",sd:"south dakota",tn:"tennessee",tx:"texas",ut:"utah",vt:"vermont",va:"virginia",wa:"washington",wv:"west virginia",wi:"wisconsin",wy:"wyoming",as:"american samoa",dc:"district of columbia",gu:"guam",mp:"northern mariana islands",mq:"midway island",pr:"puerto rico",vi:"virgin islands",wq:"wake island"}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_typeahead/twc_alias.value.min.js.map
;
angular.module("gm_header_savedlocations",["gm_locations","twc_dal","glomo_alert_factory"]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/gm_header_savedlocations/gm_header_savedlocations.app.min.js.map
;
!function(){twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.requires.push("ui.bootstrap"),twc.shared.apps.requires.push("ui.bootstrap.tooltip"),twc.shared.apps.requires.push("ui.bootstrap.popover")}();
//# sourceMappingURL=/sites/all/modules/glomo/shared/ui_bootstrap/ui_bootstrap.init.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("dialog",["$modal","$sce","customEvent",function(t,n,o){var e={replace:!0,transclude:!0,template:'<button data-ng-show="showButton" class="btn" data-ng-class="dialogButtonClass" data-ng-click="openDialog()" ng-bind-html="buttonText"></button data-ng-if="showButton">',restrict:"A",scope:{dialogButton:"@",dialogButtonClass:"@",title:"@",disableButton:"@",openEvent:"@",dialogClass:"@",confirmText:"@",cancelText:"@",confirmAction:"&",cancelAction:"&"},link:function(e,a,l,s,i){if(e.buttonText=n.trustAsHtml(l.dialogButton),e.showButton="true"!==e.disableButton,e.dialogButtonClass=e.dialogButtonClass||"btn-primary",e.openDialog=function(){var n=t.open({templateUrl:"/sites/all/modules/glomo/shared/ui_bootstrap/custom/templates/dialog.template.html",controller:"dialogContentCtrl",scope:e,windowClass:e.dialogClass,resolve:{content:function(){var t=angular.element("<div></div>");return i(function(n){t.append(n)}),t}}});n.result.then(function(){e.confirmAction()},function(){e.cancelAction()})},e.openEvent){var c=o.getEvent(e.openEvent);c.progress(e.openDialog)}}};return e}]).directive("nestedModalTransclude",function(){return{scope:{content:"=nestedModalTransclude"},link:function(t,n){n.append(t.content)}}}).controller("dialogContentCtrl",["$scope","$modalInstance","content",function(t,n,o){t.content=o,t.confirm=function(){n.close()},t.dismiss=function(){n.dismiss()}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/ui_bootstrap/custom/dialog.directive.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.config(["$provide",function(e){e.decorator("dropdownDirective",["$delegate","$rootScope","customEvent",function(e,n,o){var t=e[0],r=t.link;return t.compile=function(){return function(e,t,a){function s(e){var n=angular.element(e.target).hasClass("dropdown-toggle"),o=angular.element(".dropdown").find(e.target).length>0;return n||o}r.apply(this,arguments);t.find(".dropdown");t.on("touchstart",function(e){var n=angular.element(e.currentTarget),o=n.children(".dropdown-menu").find(e.target).length>0;o||(e.stopPropagation(),e.preventDefault(),n.hasClass("open")?n.removeClass("open hover"):n.addClass("open").siblings().removeClass("open hover"))}),n.isTouch&&o.getEvent("touch-on-body-event").progress(function(n){s(n)||e.$$phase||e.$apply(function(){t.removeClass("open hover")})})}},e}])}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/ui_bootstrap/custom/dropdown.decorator.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.config(["$provide",function(r){r.decorator("tooltipClassesDirective",["$delegate",function(r){var t=r[0],e=t.link;return t.compile=function(){return function(r,t,o){e.apply(this,arguments),t.find(".tooltip-arrow").addClass("wx-iconfont-global").addClass(r.arrowClass())}},t.controller=["$scope","$element","$attrs",function(r,t,e){r.placement=r.placement||"top",r.arrowClass=function(){switch(r.placement){case"top":return"wx-icon-arrow-down-2";case"bottom":return"wx-icon-arrow-up-2";case"left":return"wx-icon-arrow-right-2";case"right":return"wx-icon-arrow-left-2";default:return"wx-icon-arrow-down-2"}}}],r}])}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/ui_bootstrap/custom/tooltip.decorator.min.js.map
;
twc.shared.apps.directive("wxNotifications",function(){"use strict";return{templateUrl:"/sites/all/modules/glomo/shared/wx_notifications/templates/wx_notifications.html",restrict:"A",transclude:!0,scope:{settings:"=gmNotifications"},link:function(e,t,i,n,s){s(function(t){e.isDisplayTransclude=!(!t[1]||!t[1].tagName)})},controller:["$scope","pcoUser","customEvent","$window","$filter","PcoPage",function(e,t,i,n,s,o){function a(){e.canPush=!0}function r(){var t=c();"us"===t&&(e.canPush=!0)}function c(){var e=TWC.pco.get("page").get("locale"),t=e.split("-")[1].toLowerCase();return"us"===t&&window.esidata&&!_.isEmpty(window.esidata.country)&&window.esidata.country.search(/esi:vars/)<0&&(t=window.esidata.country.toLowerCase()),t}e.getTargetUrl=function(){var e=TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale;if(e&&"en_US"!==e){var t=e.split("_");e="/"+t[0]+(t[1]?"-"+t[1].toUpperCase():"")}else e="";return e+"/life/manage-notifications"},e.canPush=!1,e.locale=TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale,e.tempUnit=t.getTempUnit(),e.setTempUnit=function(i){e.tempUnit=i,t.setTempUnit(i,e.onTempUnitChanged)},o.getPagePromises().then(function(){if("serviceWorker"in navigator&&"PushManager"in window){var e=window.RequestFileSystem||window.webkitRequestFileSystem;if(e)return void e(window.TEMPORARY,100,a,r)}r()})}]}});
//# sourceMappingURL=/sites/all/modules/glomo/shared/wx_notifications/wx_notifications.directive.min.js.map
;
twc.shared.apps.directive("wxSettings",function(){"use strict";return{templateUrl:"/sites/all/modules/glomo/shared/wx_settings/templates/wx_settings.html",restrict:"A",transclude:!0,scope:{onTempUnitChanged:"&",settings:"=gmSettings"},link:function(e,t,n,o,s){window.TWC&&window.TWC.moveLinksToBottom&&window.TWC.moveLinksToBottom(t),s(function(t){e.isDisplayTransclude=!(!t[1]||!t[1].tagName)})},controller:["$scope","pcoUser","customEvent","$window","$filter","PcoPage",function(e,t,n,o,s,i){function a(){e.canPush=!0}function l(e){var t=[];return _.each(e,function(e){var n,o={title:e.catName,items:[]};_.each(e.countryName,function(e){"north korea"!==e.name.toLowerCase()&&(n={link_url:"/"+e.code,code:e.code,title:e.name,language:e.language,from_str:e.name},o.items.push(n))}),t.push(o)}),t}e.locales=l(e.settings.header_international_links),e.tempUnit=t.getTempUnit();var c=t.getLocale(),r=c.replace("_","-");e.isDesktop=!1,e.ifDesktop=function(){o.innerWidth>=768?e.isDesktop=!0:e.isDesktop=!1,e.$evalAsync()},e.ifDesktop(),e.isDesktop===!1?(e.showlocales=!1,e.showMoreLocalesBtn=!0,e.showLessLocalesBtn=!1,e.showLessLocales=function(){e.showlocales=!1,e.showMoreLocalesBtn=!0,e.showLessLocalesBtn=!1},e.showMoreLocales=function(){e.showlocales=!0,e.showMoreLocalesBtn=!1,e.showLessLocalesBtn=!0}):(e.showlocales=!0,e.showMoreLocalesBtn=!1,e.showLessLocalesBtn=!1),e.setTempUnit=function(o){e.tempUnit=o;var s="F"===o?"farenheit":"celsius";n.getEvent("track-string-event").notify({module_id:e.settings.module_id||"header-saved-locations",trackStr:s}),t.setTempUnit(o,e.onTempUnitChanged)},e.setLocale=function(e){t.setEditionLocale(e.code,function(){window.location.href=e.link_url})},e.openLocaleMenu=function(){n.getEvent("drilldown-reset").notify()},e.selectedLocale=!1,function(){angular.forEach(e.localeLinks,function(t){var n=t.description,o=t.title,i=t.url;"https://weather.com/?par=usa"===i&&(i="https://weather.com/en-US"),i.indexOf(r)>-1&&(e.localeTitleDisplay=s("pfTranslate")(o,{context:"wx_settings"}),e.localeDescriptionDisplay=s("pfTranslate")(n,{context:"wx_settings"}),e.selectedLocale=!0)})}(),e.getTargetUrl=function(){var e=TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale;if(e&&"en_US"!==e){var t=e.split("_");e="/"+t[0]+(t[1]?"-"+t[1].toUpperCase():"")}else e="";return e+"/life/manage-notifications"},e.canPush=!1,e.locale=TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale,i.getPagePromises().then(function(){if("serviceWorker"in navigator&&"PushManager"in window){var e=window.RequestFileSystem||window.webkitRequestFileSystem;e&&e(window.TEMPORARY,100,a)}})}]}}).directive("gmIsolateScrolling",function(){return{restrict:"A",link:function(e,t,n){t.bind("mousewheel DOMMouseScroll",function(e){var t=e.originalEvent,n=t.wheelDelta||-t.detail;this.scrollTop+=10*(n<=0?1:-1),e.preventDefault()})}}});
//# sourceMappingURL=/sites/all/modules/glomo/shared/wx_settings/wx_settings.directive.min.js.map
;
angular.module("gm_locations").controller("gmLocationsMigrationModalInstanceCtrl",["$scope","$modalInstance","customEvent","$document","rejectedCollection","totalSavedLocations",function(o,e,n,a,t,i){function s(){return o.link="/life/profile",0===t.length?"Congrats! You just saved locations in your profile, you can also manage your locations by clicking here. Have fun!":"Sorry! Locations: "+t+" have not been saved due to over 10 records, please manage your locations by clicking here. Have fun!"}o.showActionNeededPart=i>=10,e.opened["finally"](function(){o.message=s()},function(){}),o.dismiss=e.dismiss}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/components/migration-modal/migration-modal.controller.min.js.map
;
angular.module("gm_locations").directive("gmLocationsProfileModal",["$q","$timeout","gmLocations","gmLocationsPco","gmLocationsCookies","twcPco","customEvent",function(o,e,t,i,l,s,c){"use strict";return{restrict:"EA",templateUrl:"/sites/all/modules/glomo/shared/gm_locations/components/profile-modal/profile-modal.html",replace:!0,scope:{customMessageKey:"@",origin:"@"},controller:["$scope",function(o){s.get("user");o.modal={height:600,width:750},o.showProfileModal=!1,o.iframeSrc=""}]}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/components/profile-modal/profile-modal.directive.min.js.map
;
angular.module("gm_locations").controller("gmLocationsConfirmModalInstanceCtrl",["$scope","$modalInstance",function(n,o){"use strict";n.confirm=function(){o.close("confirm")},n.dismiss=function(){o.dismiss("cancel")}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/components/confirm-delete-modal/confirm-delete-modal.controller.min.js.map
;
angular.module("gm_locations").controller("gmLocationsErrorModalInstanceCtrl",["$scope","$modalInstance",function(n,o){n.dismiss=function(){o.dismiss("cancel")}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/components/error-modal/error-modal.controller.min.js.map
;
angular.module("glomo_cobrand_headers").controller("twc_glomo_cobrand_headers_controller",["$scope","DrupalSettings","settings","dsxclient","twcConfig",function(o,e,t,n,r){"use strict"}]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_cobrand_headers/glomo_cobrand_headers.controller.min.js.map
;

angular
    .module('glomo_breaking_now').value('BreakingNowMock_Severe', {
  "title"     : "BREAKING NOW",
  "headline"  : "ALERT: High Winds and Heavy Snow Pound the Coast of New England",
  "link_url"  : "//www.weather.com/news/tornado-central/severe-weather-tracker-page",
  "color"     : "#AC050F",
  "share"     : {
    "type"    : "social" // Other values include mfw/none
  }
}).value('BreakingNowMock_Severe_MFW', {
  "title"       : "BREAKING NOW",
  "headline"    : "ALERT: High Winds and Heavy Snow Pound the Coast of New England",
  "link_url"    : "//www.weather.com/news/tornado-central/severe-weather-tracker-page",
  "color"       : "#AC050F",
  "share"       : {
    "type"      : "mfw", // Other values include mfw/none
    "locations" : [ // if social/mfw, options is a must have attribute
      {
        "type" : "city_state",
        "value": "Atlanta,Georgia"
      },
      {
        "type" : "city_state",
        "value": "Duluth,Minnesota"
      }
      // Other values
      // {"type" : "state", "value" : "MN"}
      // {"type" : "geolocation", "value" : "33.12,-44.64|60"}
    ]
  }
}).value('BreakingNowMock_Severe_MFW2', {
  "title"       : "BREAKING NOW",
  "headline"    : "ALERT: High Winds and Heavy Snow Pound the Coast of New England",
  "link_url"    : "//www.weather.com/news/tornado-central/severe-weather-tracker-page",
  "color"       : "#DD552A",
  "share"       : {
    "type"      : "mfw", // Other values include mfw/none
    "locations" : [ // if social/mfw, options is a must have attribute
      {
        "type" : "state",
        "value": "Georgia"
      },
      {
        "type" : "state",
        "value": "Minnesota"
      }
      // Other values
      // {"type" : "state", "value" : "MN"}
      // {"type" : "geolocation", "value" : "33.12,-44.64|60"}
    ]
  }
}).value('BreakingNowMock_Severe_MFW3', {
  "title"       : "BREAKING NOW",
  "headline"    : "ALERT: High Winds and Heavy Snow Pound the Coast of New England",
  "link_url"    : "//www.weather.com/news/tornado-central/severe-weather-tracker-page",
  "color"       : "#0E4274",
  "share"       : {
    "type"      : "mfw", // Other values include mfw/none
    "locations" : [ // if social/mfw, options is a must have attribute
      {
        "type" : "geolocation",
        "value": "37.7793,-122.419|50"
      }
      // Other values
      // {"type" : "state", "value" : "MN"}
      // {"type" : "geolocation", "value" : "33.12,-44.64|60"}
    ]
  }
});;
angular.module("header_drilldown",["gm_locations"]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/header_drilldown/header_drilldown.app.min.js.map
;
angular.module("title_h2").controller("twc_title_h2_controller",["$scope","settings",function(t,e){"use strict";t.title_h2=e.title_h2?e.title_h2:""}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/modules/title_h2/title_h2.controller.min.js.map
;
angular.module("glomo_cobrand_headers").directive("glomoWxCoBrandHeader",["PcoPage","assetUtil","twcUtil",function(e,t,n){"use strict";var l="/sites/all/modules/glomo/modules/glomo_cobrand_headers/templates/",r={earthlinkHTML:l+"earthlink_co_brand.html",nbcnewsHTML:l+"nbcnews_co_brand.html",peoplepcHTML:l+"peoplepc_co_brand.html",xfinityHTML:l+"xfinity_co_brand.html"},o=["xfinity_10day","xfinity_logo","xfinity_hourly"];return{restrict:"A",templateUrl:function(){var t,l=e.getPartner();if("nbcnews"===l)t=r.nbcnewsHTML;else if("peoplepc"===l)t=r.peoplepcHTML;else if("earthlink"===l)t=r.earthlinkHTML;else if(n.contains(o,l)){var i=e.attrs,a=i&&i.content;("homepage"===a||"hourly"===a||"10day"===a)&&(t=r.xfinityHTML)}return t}(),link:function(e){e.assetsUrl=t.getAssetsUrl()}}}]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_cobrand_headers/glomo_cobrand_headers.directive.min.js.map
;
angular.module("glomo_breaking_now").directive("glomoBreakingNow",[function(){return{priority:0,replace:!1,templateUrl:"/sites/all/modules/glomo/modules/glomo_breaking_now/templates/breaking_now_content.html",scope:"=",restrict:"EA"}}]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_breaking_now/glomo_breaking_now.directive.min.js.map
;
!function(o){o.module("glomo_social_sharing").controller("twc_glomo_social_sharing_controller",["$controller","$scope","DrupalSettings","settings","$window","pcoUser","$timeout","PcoPage",function(t,e,n,i,l,r,a,c){"use strict";t("glomoSocialSharingController",{$scope:e,settings:i});var s=o.element,g=s("body");s(".social-wrapper");e.socialSharing={toggleExpand:!1,getTheme:function(){return"auto"===i.theme?g.hasClass("light")?"light":"color":i.theme},getLayoutType:function(){return"auto"===i.position&&r.getBrowser().ltIE9?document.documentElement.clientWidth>=1270?"vertical":"horizontalBottom":i.position}},e.initSocial(i)}])}(angular);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_social_sharing/glomo_social_sharing.controller.min.js.map
;
!function(o){o.module("glomo_social_sharing").directive("glomoSocialBarPosition",["$window","pcoUser",function(t,i){"use strict";var a=null;return{link:function(t,r){var n=o.element,s=t.socialSharing&&t.socialSharing.getLayoutType()||"auto";if(t.socialSharing&&!a&&(a=t.socialSharing),"auto"!==s&&"vertical"!==s&&"horizontalBottom"!==s&&!i.getBrowser().ltIE9)return void(t.toolPos="bottom");var l=function(){s=t.socialSharing&&t.socialSharing.getLayoutType(),("auto"===s||i.getBrowser().ltIE9)&&n(window).width()<=1268?(r.css("bottom",0).show(),t.toolPos="top"):"horizontalBottom"===s||i.getBrowser().ltIE9?(r.css("bottom",0).show(),t.toolPos="top"):(r.css("bottom","15px").show(),t.toolPos="right")};n(window).on("load resize",l),domready&&domready(function(){l()})}}}])}(angular);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_social_sharing/glomo_social_sharing.socialBarPosition.directive.min.js.map
;
twc.glomo_smart_banner.app.controller("twc_glomo_smart_banner_controller",["$filter","assetUtil","ActionTracker","PcoPage",function(a,t,e,r){"use strict";var o=angular.element,n=o("head"),p=t.getAssetsUrl(),l=navigator.userAgent,i=navigator.appVersion,c=i.match(/iPad/),s=l.match(/Safari/i)&&(i.match(/iPhone/i)||i.match(/iPod/i)||c),m=l.match(/Android/i);if(m||s){var g,_,d,h=a("pfTranslate");m?(n.append('<meta name="google-play-app" content="app-id=com.weather.Weather">'),g="https://app.appsflyer.com/com.weather.Weather?pid=SmartBannerDNA&af_adset=SamsungWidget",_={button:h("VIEW",{context:"glomo_smart_banner"}),price:h("FREE",{context:"glomo_smart_banner"}),google_play:h("In Google Play",{context:"glomo_smart_banner"})},d="android"):(g=c?"https://itunes.apple.com/app/apple-store/id364252504?pt=137056&ct=WWW_AA_Smart_Banner&mt=8":"https://app.appsflyer.com/id295646461?pid=WWW&c=SmartBanner_DNA&af_adset=AppleWidget",_={button:h("VIEW",{context:"glomo_smart_banner"}),price:h("FREE",{context:"glomo_smart_banner"}),google_play:h("In Google Play",{context:"glomo_smart_banner"})},d="ios");var b=r.attrs.partner;g=b&&b.length&&g.indexOf("appsflyer.com")>-1?g+"&af_sub1="+b:g,o.smartbanner({title:"Weather",author:"The Weather Channel, LLC",icon:p+"/TWC_logo_100x100.gif",iconGloss:!1,button:_.button,price:_.price,inGooglePlay:_.google_play,daysReminder:5,daysHidden:0,androidSmartBannerUrl:g,url:g,force:d})}window.sendActionTrackEvent=function(a){var t=m?"android":"apple",r={linkTrackVars:"eVar70,prop17,prop35",prop35:a,trackStr:a};e.track(t+"-glomo-smart-banner","close",r)}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_smart_banner/glomo_smart_banner.controller.min.js.map
;
angular.module("glomo_breaking_now").controller("twc_glomo_breaking_now_controller",["$scope","dsxclient","twcPco","$rootScope","GlomoSocialAPI","settings",function(e,o,i,n,t,a){var c={init:function(i){o.execute([{$id:"bnModel",recordType:"cms",recordName:"BreakingNow"}]).then(["bnModel",function(o){i&&i.apply(e.breaking_now,[o])}])},loadGigya:function(){t.apiLoaded||t.loadAPI()}};e.isTouch=n.isTouch,e.moduleId=a.module_id,e.breaking_now={model:{},fb:{},display:!1,process:function(e){e&&e.getTitle()&&(c.loadGigya(),this.model=e,this.pagename=i.get("metrics")&&i.get("metrics").attributes.pagename||"",this.display=!0,this.cid=i.getNodeValue("metrics","contentChannel")||"")}},c.init(e.breaking_now.process)}]);
//# sourceMappingURL=/sites/all/modules/glomo/modules/glomo_breaking_now/glomo_breaking_now.controller.min.js.map
;
/**
 * Created by rriggs on 6/12/14.
 */
twc.shared.apps.config(['twcMessageProvider',function(twcMessageProvider) {
	twcMessageProvider.add({
		"fr_FR" : {
      "error_handler.GENERIC_ERROR_TITLE" : "Oups!",
      "error_handler.GENERIC_ERROR_DESCRIPTION" : "On dirait que cette fonctionnalité n'a pas tout à fait charger correctement ... S'il vous plaît revenez bientôt.",
      "error_handler.NOT_AVAILABLE_TITLE" : "Nous sommes désolés...",
      "error_handler.NOT_AVAILABLE_DESCRIPTION" : "Données n'est pas actuellement disponible pour cet emplacement."
		}
	});
}]);;
