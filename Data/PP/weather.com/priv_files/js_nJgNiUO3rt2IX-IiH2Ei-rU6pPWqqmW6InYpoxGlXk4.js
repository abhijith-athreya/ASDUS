!function(n,e){function r(r,o,t){var i=new r,a={};return{loadJSFiles:function(r,c){for(var u=[],f=[],l=0,s=r.length;l<s;l++){var w="/"+r[l];a[r[l]]||(u.push(w),a[r[l]]=1),i.createDefer(w),f.push(i.getPromise(w))}return u&&u.length&&e.script(t.map(u,function(n){return c?n+"?v="+c:n})).wait(function(){n.forEach(u,function(n){i.resolveDefer(n)})}),o.all(f)}}}n.module("shared").factory("AsyncLoader",r),r.$inject=["PromisePool","$q","twcUtil"]}(window.angular,window.$LAB);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/instance/asyncloader.factory.min.js.map
;
!function(e,t,n,o,i){function l(l,a,d,c,s,u,g,_,p,m){return{scope:!0,replace:!1,transclude:!1,compile:function(){return{pre:function(r,f,v){var w=a.getSettings(v.instance),h=d.getInstance(v.twcController),S={settings:w,logger:h},b=v.moduleName,$=b&&t.settings.twc.files&&t.settings.twc.files[b]||{},z=w&&w.module_version||"",F=[],C=function(){var e=f.children().attr("data-ng-non-bindable");return e&&(f.children().children().appendTo(f),f.children("[data-ng-non-bindable]").remove()),l(v.twcController,S),v.$set("twcInit",void 0),f.removeClass("twc-init"),e},P=t.settings.ajaxPageState&&t.settings.ajaxPageState.js||{};if(e.forEach($,function(e,t){P[t]||F.push(t)}),F.sort(function(e,t){var n=$[e],o=$[t];return n.group=n.group||5,n.weight=n.weight||10,o.group=o.group||5,o.weight=o.weight||10,n.group===o.group?function(){return n.weight===o.weight?0:n.weight<o.weight?-1:1}():n.group<o.group?-1:1}),e.extend(S,{$scope:r}),w.conditional_load_viewport){var y={load_on_tablet:w.conditional_viewport_load_on_tablet,load_on_mobile:w.conditional_viewport_load_on_mobile,load_on_desktop:w.conditional_viewport_load_on_desktop};if("mobileSized"===c.getScreenSize()&&!y.load_on_mobile)return void f.remove();if("tabletSized"===c.getScreenSize()&&!y.load_on_tablet)return void f.remove();if("desktopSized"===c.getScreenSize()&&!y.load_on_desktop)return void f.remove()}if(w.conditional_load_browser){var j={load_on_ie_less_equal_ten:w.conditional_browser_load_ie_less_equal_ten};if(!navigator.userAgent.match(/(msie\s(10\.0|[5-9]))/i)&&j.load_on_ie_less_equal_ten)return void f.remove()}if(TWC.Configs.disable_lazyload)return void(C()?g(f.contents())(r):e.noop());if(v.templateFile){!i&&_.onScrollThrottle(function(){m.getEvent("scrollFired").resolve()});var k=function(){if(!v.compiled)return o&&o.timer("module."+b+".lazyload","Time it takes to load a lazy loaded module for instance "+v.instance).start(),v.$set("compiled",!0),p.loadJSFiles(F,z).then(function(){if(C(),s.get(v.templateFile))return s.get(v.templateFile);var e={};return z&&(e={params:{v:z}}),u.get(v.templateFile,e).then(function(e){return s.put(v.templateFile,e.data),e.data})}).then(function(e){d.debug("Loaded template file for: ",v.templateFile),f.html(e),g(f.contents())(r),o&&o.timer("module."+b+".lazyload").end()})};"gm_navigation"===w.module_id&&k(),m.getEvent("scrollFired").then(function(){return k()}),n(function(){if(!i&&TWC.PcoUtils.isInViewPort(f)||i)return k()})}else p.loadJSFiles(F,z).then(function(){C()?g(f.contents())(r):e.noop()})}}},controller:r}}function r(e,t,n,o){e.getInstance=function(){return o.getSettings(n.instance)}}e.module("shared").directive("twcController",l),l.$inject=["$controller","DrupalSettings","$log","PcoPage","$templateCache","$http","$compile","throttler","AsyncLoader","customEvent"],r.$inject=["$scope","$element","$attrs","DrupalSettings"]}(window.angular,window.Drupal,window.domready,window.bar,window.callPhantom);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/instance/instance.directive.min.js.map
;
twc.shared.apps.factory("TwcModel",["TwcClass","twcUtil",function(t,i){return t.extend({requiredAttrs:[],construct:function(t,i){this.attrs=angular.copy(this.defaults)||{},angular.forEach(this.requiredAttrs,function(i){if(void 0===t[i])throw'Attribute "'+i+'" is required!'}),this.fromDto(t),this.init&&this.init(t,i)},fromDto:function(t){return this.set(t),this},_get:function(t){if(2===arguments.length){var i=arguments[1],r=this.attrs[t];r||r===i||this._set(t,i)}return this.attrs[t]},_set:function(t,i){return angular.isObject(t)?angular.extend(this.attrs,arguments[0]):this.attrs[t]=i,this},get:function(t){var r="get"+i.capitalize(t);return this[r]?this[r].apply(this,i.rest(arguments)):this._get.apply(this,arguments)},set:function(t){if(angular.isObject(t)){var r=t,s=arguments[1]||{},a=this;return angular.forEach(r,function(t,i){a.set.apply(a,[i,t].concat(s[i]||[]))}),this}if(t){var n="set"+i.capitalize(t);return this[n]?this[n].apply(this,i.rest(arguments)):this._set.apply(this,arguments)}},mapTo:function(t,i,r){r=r||{};var s=this;return angular.forEach(i,function(i){var a=r[i]||i;t.set(a,s.get(i))}),t}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/model/model.class.factory.min.js.map
;
twc.shared.apps.directive("twcModal",["ModalBox","twcConstant",function(t,o){"use strict";var e=(o.ascii,"/sites/all/modules/custom/angularmods/app/shared/twc_dialog_box/templates/");return{template:'<span ng-click="showDialog()" ng-transclude></span>',transclude:!0,restrict:"EA",scope:{title:"@",body:"@",okText:"@",cancelText:"@",okAction:"&",cancelAction:"&",showIt:"="},controller:["$scope","$timeout","twcConstant",function(t,o,e){t.hideDialog=function(){t.$evalAsync(function(){t.show=!1,t.showIt=!1})},t.keyPressBindings=[{id:"Escape",keyCode:e.ascii.ESC,action:function(){t.hideDialog()}}],t.ok=function(){t.hideDialog(),o(function(){t.okAction()},0,!1)},t.cancel=function(){t.hideDialog(),o(function(){t.cancelAction()},0,!1)}}],link:function(o,n,i,a){o.$watch("showIt",function(e,n){if(e&&JSON.parse(e)===!0){t.showDialog(o,i)}else o.hideDialog()}),i.$observe("dialogTemplate",function(t,n){o.$evalAsync(function(){o.template=i.dialogTemplate?i.dialogTemplate:e+"dialog.html"})}),i.$observe("body",function(e,n){t.showDialog(o,i)})}}}]).factory("ModalBox",["$compile","$document","$sce",function(t,o,e){var n={},i="/sites/all/modules/custom/angularmods/app/shared/twc_dialog_box/templates/",a="twc_modal.html";return{getPopup:function(e){if(!n[e.$id]){n[e.$id]='<div class="twc-modal" data-ng-if="show" data-twc-key-press="keyPressBindings"><div data-ng-include="template"></div>',angular.element(o[0].body).append(t(n[e.$id])(e));var i=angular.element(o[0].body).find("div");n[e.$id]=i[i.length-1]}return t(n[e.$id])(e),n[e.$id]},showDialog:function(t,o){var n={width:"500px",height:"100px"},c=this.getPopup(t);return t.buttonState=t.okAction?"ok-cancel":"cancel",t.okText=o.okText?o.okText:"OK",t.cancelText=o.cancelText?o.cancelText:"Cancel",t.hasHeader=!!o.header,t.headerContent=o.header,t.body=o.body?e.trustAsHtml(o.body):"Body Text Here.",t.hasFooter="has-buttons"===o.footer?"has-buttons":"has-content",t.footerContent=o.footer,t.style={width:"500px",height:"100px"},t.template=o.dialogTemplate?o.dialogTemplate:i+a,o.width&&(n.width=o.width),o.height&&(n.height=o.height),n.height="680px",n.width="844px",t.style=JSON.stringify(n),t.show=!0,c}}}]).factory("ConfirmDialog",["$rootScope","ModalBox",function(t,o){var e=t.$new();return e.hideDialog=function(){e.show=!1},e.ok=function(){e.show=!1},e.cancel=function(){e.show=!1},{showDialog:function(t){o.showDialog(e,t)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_modal/twc_modal.directive.min.js.map
;
twc.shared.apps.directive("twcKeyPress",["$document",function(e){"use strict";return{scope:{keyBindings:"=twcKeyPress",twcEventNamespace:"@twcEventNamespace",twcEventNamespaceSuspended:"=twcEventNamespaceSuspended"},link:function(n,t,c){function a(e){angular.forEach(n.keyBindings,function(t){e.which===parseInt(t.keyCode)&&(e.preventDefault(),n.$apply(t.action))})}var s="INPUT"===t[0].tagName?angular.element(t[0]):e,p="keydown"+(n.twcEventNamespace?"."+n.twcEventNamespace:"");s.on(p,function(e){n.twcEventNamespaceSuspended||a(e)}),n.$on("$destroy",function(){s.off("."+n.twcEventNamespace)})}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_keypress/twc_keypress.directive.min.js.map
;
twc.shared.apps.factory("MetricsControl",["twcPco","twcUtil","customEvent",function(e,t,r){var a,n=jQuery,c=r.getEvent("tagsReady");return a={resetPCO:function(t){pcoPage=e.get("page"),pcoPage.setUpFV(t),pcoPage.setUpPartner(t,[null,e.get("user")])},resetMetrics:function(){s.prop39="",s.eVar39=e.getNodeValue("user","partner"),s.eVar60=e.getNodeValue("page","partner")}},{pageView:function(){c.done(function(){a.resetPCO(n),a.resetMetrics(),s.t()})}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/metrics_control/metrics_control.factory.min.js.map
;
twc.shared.apps.factory("TwcMicrodata",["twcConstant","$q","$http",function(e,t,n){"use strict";var a=function(){var e=angular.element(document.querySelector('meta[name="description"]'));return e&&e.length>0?e.attr("content"):"Brought to you by The Weather Channel"},o=function(e){angular.forEach(e,function(e,t){"schema"===t?r(e):angular.isObject(e)?angular.forEach(e,function(e,t){"schema"===t?r(e):c(e,t)}):c(e,t)})},r=function(e){var t=angular.element(document.querySelector("html"));t&&(t.attr("itemscope",""),t.attr("itemtype",e))},c=function(e,t){if(null!==e){var n,a={fbShareCount:{itemProp:"interactionCount",content:"FacebookLikes"},gplusShareCount:{itemProp:"interactionCount",content:"GooglePlus"}},o={};t.indexOf("ShareCount")>0&&a[t]?(o.key=a[t].itemProp,o.val=a[t].content+":"+e,n=angular.element(document.querySelector("meta[content^='"+a[t].content+"']"))):(o.key=t,o.val=e,n=angular.element(document.querySelector('meta[itemprop="'+t+'"]'))),n&&0===n.length?(n=angular.element('<meta itemprop="'+o.key+'" content="'+o.val+'" />'),angular.element("head").append(n)):(n.attr("itemprop",o.key),n.attr("content",o.val))}},l=function(e){var n=t.defer();return n.resolve({}),[n.promise]},i={injectMicrodata:function(n){var r=n?n:{},c=r.url?r.url:window.location.href;t.all(l(c)).then(function(t){var n=(t&&t.length>0?t[0].total_count:"N/A",e.microdata),c=r.schema?r.schema:"Organization",l=n.url,i={schema:l+c,name:r.name?r.name:"The Weather Channel",description:r.description?r.description:a(),image:r.image?r.image:e.assetsUrl+"/TWC_logo_100x100.gif"},u={Organization:{schema:l+c,common:i},VideoObject:{common:i,duration:r.duration?r.duration:null,thumbnailUrl:r.thumbnailUrl?r.thumbnailUrl:null,contentUrl:r.contentUrl?r.contentUrl:null,embedUrl:r.embedUrl?r.embedUrl:null,uploadDate:r.uploadDate?r.uploadDate:null,expires:r.expires?r.expires:null},ImageObject:{common:i,author:r.author?r.author:"The Weather Channel",contentLocation:r.contentLocation?r.contentLocation:"",publishDate:r.publishDate?r.publishDate:""},Article:{schema:l+c,common:i}};o(u[c])})}};return i}]),twc.shared.apps.run(["twcConstant","TwcMicrodata","customEvent",function(e,t,n){n.getEvent("pcoReady").done(function(){var n=e.microdata.schema,a=angular.element(document.querySelector('meta[property="og:image"]')),o=angular.element(document.querySelector('link[rel="canonical"]')),r=TWC.pco.getNodeValue("page","content");switch(r){case"article":case"news":t.injectMicrodata({schema:n[r].name,image:a?a.attr("content"):null});break;case"video":t.injectMicrodata({schema:n[r].name,image:a?a.attr("content"):null,thumbnailUrl:a?a.attr("content"):null,embedUrl:o?o.attr("href"):null});break;case"other":"ugc"===TWC.pco.getNodeValue("page","pathname")?t.injectMicrodata({schema:n.image.name,image:a?a.attr("content"):null}):t.injectMicrodata();break;default:t.injectMicrodata()}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_microdata/twc_microdata.factory.min.js.map
;
twc.shared.apps.directive("twcUpsAlert",["customEvent",function(t){"use strict";return{link:function(c,n,e){var i=e.twcUpsAlert;n.on("click",function(){t.getEvent("twc-ups-alert").notify({data:{type:i}})}),c.$on("$destroy",function(){$el.off("click")})}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_ups_alert/twc_ups_alert.directive.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("removePanePadding",function(){return{scope:!0,replace:!1,transclude:!1,link:function(e,a,s){a.closest(".panel-pane").removeClass("module-padding")}}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/remove_padding/remove_padding.directive.min.js.map
;
twc.shared.apps.directive("twcReferenceScope",["$rootScope",function(e){"use strict";return{restrict:"A",controller:["$scope",function(e){this.refScope=function(){return e.refScope}}],link:function(e,c,r,t){e.refScope=e.$eval(r.twcReferenceScope)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_reference/twc_reference.directive.min.js.map
;
!function(e,t){"use strict";t.shared.apps.provider("socialConstants",["twcConstant",function(e){return{$get:["$location",function(t){var a="The Weather Channel";return{basePath:"https://"+t.host(),securePath:"https://ssl.weather.com",playerSwf:"/sites/all/modules/custom/angularmods/app/shared/videoamp/lib/amp.premier/AkamaiPremierPlayer.swf",logoImage:e.assetsUrl+"240x180_twc_default.png",site_name:a,twitterSite:"@weatherchannel",address:{streetAddress:"300 Interstate North Pkwy",addressLocality:"Atlanta, Georgia",postalCode:"30339"},profiles:{facebook:"https://www.facebook.com/TheWeatherChannel",twitter:"https://www.twitter.com/weatherchannel",instagram:"http://instagram.com/weatherchannel",googleplus:"https://plus.google.com/+TheWeatherChannel/posts",youtube:"http://www.youtube.com/user/TheWeatherChannel"},apps:{itunes:{ipad:{name:"The Weather Channel App for iPad",id:"364252504",url:"https://itunes.apple.com/us/app/weather-channel-app-for-ipad/id364252504?mt=8"},iphone:{name:a,id:"295646461",url:"https://itunes.apple.com/us/app/weather-channel-local-forecasts/id295646461?mt=8"}},googleplay:{name:a,id:"com.weather.Weather",url:"https://play.google.com/store/apps/details?id=com.weather.Weather"},facebook:{app_id:"115862191798713",profile_id:"TheWeatherChannel"},windows:{"msapplication-config":e.assetsUrl+"/tile.xml","msApplication-ID":"Weather.TheWeatherChannel","msApplication-PackageFamilyName":"Weather.TheWeatherChannel_t3yemqpq4kp7p","application-name":a,"msapplication-tooltip":a,"msapplication-starturl":"/","msapplication-task":["name="+a+";action-uri=https://weather.com;icon-uri=https://weather.com/favicon.ico","name="+a+" on Twitter;action-uri=https://www.twitter.com/weatherchannel;icon-uri=http://twitter.com/favicon.ico","name="+a+" on Facebook;action-uri=https://www.facebook.com/TheWeatherChannel;icon-uri=https://s-static.ak.facebook.com/rsrc.php/yi/r/q9U99v3_saj.ico","name="+a+" on Google+;action-uri=https://plus.google.com/+TheWeatherChannel/posts;icon-uri=http://linkedin.com/favicon.ico","name="+a+" on Instagram;action-uri=http://instagram.com/weatherchannel;icon-uri=http://linkedin.com/favicon.ico","name="+a+" on YouTube;action-uri=http://www.youtube.com/user/TheWeatherChannel;icon-uri=https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico"]}},urlParams:{facebook:"utm_medium=social&utm_source=facebook&cm_ven=Facebook&cm_cat=www.facebook.com&cm_pla=fb_feed&cm_ite=fb_social_rec&fb_ref=ls_share",twitter:"utm_medium=social&utm_source=twitter&cm_ven=Twitter&cm_cat=www.twitter.com&cm_pla=tw_feed&cm_ite=tw_social_tweet",reddit:"utm_medium=social&utm_source=reddit&cm_ven=Reddit&cm_cat=www.reddit.com&cm_pla=r_feed&cm_ite=r_social_post",pinterest:"utm_medium=social&utm_source=pinterest&cm_ven=Pinterest&cm_cat=www.pinterest.com&cm_pla=p_feed&cm_ite=p_social_pin",googleplus:"utm_medium=social&utm_source=googleplus&cm_ven=GooglePlus&cm_cat=plus.google.com&cm_pla=gp_feed&cm_ite=gp_social_post",email:"utm_medium=email&utm_source=website&cm_ven=Email&cm_cat="},metaSchema:{al:[],article:["published_time","modified_time","expiration_time","author","section","tag"],fb:["admins","profile_id","app_id"],og:["image","image:url","image:secure_url","image:type","image:width","image:height","video","video:url","video:secure_url","video:type","video:width","video:height","audio","audio:url","audio:secure_url","audio:type","title","type","url","description","site_name","locale","locale:alternative","restrictions:country","restrictions:age","updated_time","see_also","rich_attachment","ttl"],profile:["first_name","last_name","username","gender"],twitter:["card","creator","creator:id","site","site:id","description","title","image","url","player","player:width","player:height","player:stream","player:stream:content_type","app:country","app:name:iphone","app:id:iphone","app:url:iphone","app:name:ipad","app:id:ipad","app:url:ipad","app:name:googleplay","app:id:googleplay","app:url:googleplay"]},omnitureEvents:{facebook:"event53,event57",twitter:"event55,event57",pinterest:"event62,event57",reddit:"event67,event57",googleplus:"event61,event57",email:"event56,event57"}}}]}}])}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/social_constants/social_constants.provider.min.js.map
;
twc.shared.apps.factory("providerRulesFactory",["$window","$log","$q","customEvent","MediaAssetFactory","providerRulesSettings",function(e,r,t,o,a,s){var i=r.getInstance("providerRulesFactory"),n=o.getEvent("providerErrorMessageVideoReady"),d=o.getEvent("providerErrorMessageVideoReadyOverride"),g={getErrorMessageVideo:function(e,r){a.getMediaAssetData({id:"videoData",assetId:e||s.errorMessageAssets.video}).then(function(e){(r||n).resolve(e)})}};return g.getErrorMessageVideo(),{providerRulesPassed:function(r){var t=r.getFlags()||{},o=Object.keys(t),a=e.location.host;if(e.location!==e.parent.location){var n=document.referrer.split("/");n.constructor===Array&&n.length>=3&&(a=n[2])}for(var d=0;d<o.length;d++){var g=o[d];if(s.domains_map[g])for(var c=0;c<s.domains_map[g].length;c++){var v=s.domains_map[g][c];if(a.match(v))return i.debug("Determined we are currently in ",g),t[g]}}return i.debug("Host does not match with any provider rules listing. Defaulting to pass.",a,s.domains_map),!0},getErrorMessageAsset:function(e,r){var t;switch(e){case"video":r?(t=d,g.getErrorMessageVideo(r.video,d)):t=n;break;default:t=n}return t}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/provider_rules/provider_rules.factory.min.js.map
;
twc.shared.apps.value("providerRulesSettings",{domains_map:{Facebook:[/facebook.com/],Twitter:[/twitter.com/],YouTube:[/youtube.com/],"Google+":[/google.com/],"Big Web":[/www.weather.com/,/twcrb.dev.weather.com/,/adev.weather.com/,/astg.weather.com/,/aprd.weather.com/,/edit.weather.com/],"Little Web":[/m.weather.com/]},errorMessageAssets:{video:"41ebda0f-6471-423a-85b3-78db6392a4d0"}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/provider_rules/provider_rules.value.min.js.map
;
twc.shared.apps.factory("MediaAssetFactory",["dsxclient","$q",function(e,t){return{getAssetModel:function(e,t){if(t.indexOf("db04bc18-ee64-11e2-9ee2-001d092f5a10")!==-1)return"ugcAssetWithColl";var s=e.attrs.rawResponseMap,d=s["/cms/asset-collection/"+t];if(d&&d.doc&&d.doc.providerid){var r=d.doc.providerid;if(null!=r&&"db04bc18-ee64-11e2-9ee2-001d092f5a10"===r)return"ugcAssetWithColl";if(null!==r&&"video"===d.doc.type)return"videoAssetWithColl"}return"videoAssetWithColl"},getMediaAssetData:function(s){var d=this,r={},i={$id:s.id,recordType:"cms",recordName:"videoAssetWithColl",assetId:s.assetId};if(!s.assetId)return null;var o=e.execute([i]),a=t.defer();return o.then(["response",function(e){var t=d.getAssetModel(e,s.assetId),i=e.getModel({$id:s.id,recordType:"cms",recordName:t,assetId:s.assetId});r[s.id]=i,o.$setResults(r),a.resolve(i)}]),a.promise}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/media_asset_factory/media_asset.factory.min.js.map
;
twc.shared.apps.run(["$swipe","customEvent","$window","twcUtil","twcConstant","$rootScope",function(e,t,n,c,o,a){if(function(){var e=[/https:\/\/.*.weather.com/,/https:\/\/weather.com/],c=function(n){var c=!1;if(e.forEach(function(e){n.origin.match(e)&&(c=!0)}),c){var o=n.data.type;o=o?o+"-post-message":null,o&&t.getEvent(o).notify(n.data)}};n.addEventListener?addEventListener("message",c,!1):attachEvent("onmessage",c)}(),"ontouchstart"in document.documentElement&&e.bind(angular.element(document).find("html"),{start:function(e,n){"HTML"===n.currentTarget.nodeName&&t.getEvent("touch-on-body-event").notify(n)},cancel:function(e){}}),angular.element(n).resize(c.debounce(function(e){angular.element(this).trigger("ScreenResizeEnd")},300)),angular.element(n).scroll(c.debounce(function(e){angular.element(this).trigger("ScreenScrolled")},1e3)),angular.element(n).resize(c.debounce(function(e){angular.element(this).trigger("ScreenResizeEnd1Sec")},1e3)),Boolean(angular.element.cookie("debug"))){var i=(o.ascii,!1);angular.element("body").on("mousedown mousemove",c.debounce(function(e){if(o.holdShiftKey=e.shiftKey,o.holdAltKey=e.altKey,1===e.which&&o.holdShiftKey&&o.holdAltKey&&"mousemove"===e.type){var t=angular.element(e.target).closest("[data-twc-controller]");t.length>0&&(a.$log.log(Drupal.settings.twc.instance[t.attr("instance")]),i||(a.$log.log("Total of ",Object.keys(Drupal.settings.twc.instance).length," modules on the page."),i=!0))}},300))}}]),twc.shared.apps.directive("twcClick",function(){return function(e,t,n){t.bind("click",function(t){t.preventDefault(),e.$apply(function(){e.$eval(n.twcClick)})})}}),twc.shared.apps.directive("documentClick",["$document","$parse",function(e,t){var n=function(n,c,o){var a=o.documentClick,i=t(a);e.on("click",function(e){n.$apply(function(){i(n,{$event:e})})})};return n}]),twc.shared.apps.directive("twcEnter",["twcConstant",function(e){return function(t,n,c){n.bind("keydown keypress",function(n){n.which===e.ascii.CR&&(n.preventDefault(),t.$apply(function(){t.$eval(c.twcEnter)}))})}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_events/twc_events.run.min.js.map
;
!function(i,e){"use strict";e.shared.apps.factory("mimeTypes",function(){var i={"3g2":"video/3gpp2","3gp":"video/3gpp",aac:"audio/x-aac",adp:"audio/adpcm",aif:"audio/x-aiff",aifc:"audio/x-aiff",aiff:"audio/x-aiff",apr:"application/vndlotus-approach",asf:"video/x-ms-asf",asr:"video/x-ms-asf",asx:"video/x-ms-asf",au:"audio/basic",avi:"video/x-msvideo",bmp:"image/bmp",btif:"image/prsbtif",cgm:"image/cgm",cmx:"image/x-cmx",cod:"image/cis-cod",djvu:"image/vnddjvu",dra:"audio/vnddra",dts:"audio/vnddts",dtshd:"audio/vnddtshd",dvi:"application/x-dvi",dwf:"model/vnddwf",dwg:"image/vnddwg",dxf:"image/vnddxf",eol:"audio/vnddigital-winds",f4v:"video/x-f4v",fh:"image/x-freehand",fli:"video/x-fli",flv:"video/x-flv",fpx:"image/vndfpx",fst:"image/vndfst",fvt:"video/vndfvt",g3:"image/g3fax",gif:"image/gif",h261:"video/h261",h263:"video/h263",h264:"video/h264",ico:"image/x-icon",ief:"image/ief",jfif:"image/pipeg",jpe:"image/jpeg",jpeg:"image/jpeg",jpg:"image/jpeg",jpgv:"video/jpeg",jpm:"video/jpm",js:"application/javascript",json:"application/json",ktx:"image/ktx",lsf:"video/x-la-asf",lsx:"video/x-la-asf",lvp:"audio/vndlucentvoice",m3u:"audio/x-mpegurl",m3u8:"application/vndapplempegurl",m4v:"video/x-m4v",mdi:"image/vndms-modi",mid:"audio/midi",mj2:"video/mj2",mmr:"image/vndfujixeroxedmics-mmr",mov:"video/mp4",movie:"video/x-sgi-movie",mp2:"video/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mpa:"video/mpeg",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpga:"audio/mpeg",mpv2:"video/mpeg",mxu:"video/vndmpegurl",npx:"image/vndnet-fpx",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",pbm:"image/x-portable-bitmap",pcx:"image/x-pcx",pgm:"image/x-portable-graymap",pic:"image/x-pict",png:"image/png",pnm:"image/x-portable-anymap",ppm:"image/x-portable-pixmap",psd:"image/vndadobephotoshop",pya:"audio/vndms-playreadymediapya",pyv:"video/vndms-playreadymediapyv",qt:"video/quicktime",ra:"audio/x-pn-realaudio",ram:"audio/x-pn-realaudio",ras:"image/x-cmu-raster",rgb:"image/x-rgb",rip:"audio/vndrip",rlc:"image/vndfujixeroxedmics-rlc",rmi:"audio/mid",rmp:"audio/x-pn-realaudio-plugin",snd:"audio/basic",sub:"image/vnddvbsubtitle",svg:"image/svg+xml",swf:"application/x-shockwave-flash",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",uva:"audio/vnddeceaudio",uvh:"video/vnddecehd",uvi:"image/vnddecegraphic",uvm:"video/vnddecemobile",uvp:"video/vnddecepd",uvs:"video/vnddecesd",uvu:"video/vnduvvump4",uvv:"video/vnddecevideo",viv:"video/vndvivo",wav:"audio/x-wav",wax:"audio/x-ms-wax",wbmp:"image/vndwapwbmp",weba:"audio/webm",webm:"video/webm",webp:"image/webp",wm:"video/x-ms-wm",wma:"audio/x-ms-wma",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",wvx:"video/x-ms-wvx",xbm:"image/x-xbitmap",xif:"image/vndxiff",xpm:"image/x-xpixmap",xwd:"image/x-xwindowdump"};return{getType:function(i){return i=i.split("/").pop().replace(/\#(.*?)$/,"").replace(/\?(.*?)$/,""),i=i.split("."),this.getTypeFromExt(i[1])},getTypeFromExt:function(e){return i.hasOwnProperty(e)?i[e]:""}}})}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/mimetypes/mimetypes.factory.min.js.map
;
twc.shared.apps.factory("assetUtil",["dsxclient",function(e){"use strict";return{getAssetData:function(t){var n=this,o=n.getAssetConfig(t);return e.execute([o]).then(function(e){return e.getModel(n.getAssetConfig(t))})},getAssetConfig:function(e){return{recordType:"cms",recordName:"aidQ",assetId:e}},getAssetsInCollection:function(t,n,o,s){var r=this,i=r.getAssetsInCollConfig(t,n,o,s);return e.execute([i]).then(function(e){return e.getModel(r.getAssetsInCollConfig(t,n,o,s))})},getAssetsInCollConfig:function(e,t,n,o){var s,r,i={};return e&&(i.pcollid=e),t&&(i.type=t),"boolean"==typeof n||isNaN(n)||(s=n),"boolean"==typeof o||isNaN(o)||(r=o),{recordType:"cms",recordName:"a",custom_params:{query:[i],start:s,end:r}}},getCollectionData:function(t){var n=this,o=n.getCollConfig(t);return e.execute([o]).then(function(e){return e.getModel(n.getCollConfig(t))})},getCollConfig:function(e){return{recordType:"cms",recordName:"collections",path:e}},getAssetsUrl:function(){return window.TWC&&window.TWC.Configs&&window.TWC.Configs.assets_url}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/asset_util/asset_util.factory.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("fromStr",["$log","twcPco",function(e,t){"use strict";var r=e.getInstance("fromStr");return{replace:!1,transclude:!1,link:function(e,n,c){n.bind("click",function(n){var o,s=t.get("metrics")&&t.get("metrics").attributes.pagename,a=e.getInstance&&e.getInstance()||e.settings||{};for(var i in a)i.indexOf("module_id")>-1&&(o=e.getInstance&&e.getInstance()[i]||a[i]);o=o||c.moduleId;var m=e.fromAttrs||"";m=m?m+"-":"";var d=m+c.fromStr,g=o?[s,o,d].join("_"):[s,d].join("_");jQuery.cookie("fromStr",g,{domain:".weather.com",path:"/"}),r.debug(g)})}}}]).run(["customEvent","twcPco",function(e,t){e.getEvent("from-string-event").progress(function(e){var r=t.get("metrics")&&t.get("metrics").attributes.pagename,n=e.module_id||e.settings&&e.settings.module_id||e.scope&&e.scope.getInstance&&e.scope.getInstance().module_id,c=[r,n,e.fromStr].join("_");jQuery.cookie("fromStr",c,{domain:".weather.com",path:"/"})})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/from_str/from_str.directive.min.js.map
;
var anim=function(t){"use strict";t=function(a,c,u,d){var l,s,p=[],m=function(e){(e=p.shift())&&(e[1]?t.apply(this,e).anim(m):e[0]>0?setTimeout(m,1e3*e[0]):(e[0](),m()))};a.charAt&&(a=document.getElementById(a)),(a>0||!a)&&(c={},u=0,m(p=[[a||0]])),f(c,{padding:0,margin:0,border:"Width"},[e,n,o,r]),f(c,{borderRadius:"Radius"},[e+r,e+n,o+n,o+r]),++i;for(l in c)s=c[l],s.to||0===s.to||(s=c[l]={to:s}),t.defs(s,a,l,d);return t.iter(c,1e3*u,m),{anim:function(){return p.push([].slice.call(arguments)),this}}};var e="Top",n="Right",o="Bottom",r="Left",i=1,f=function(t,e,n,o,r,i,f){for(o in t)if(o in e){for(f=t[o],r=0;i=n[r];r++)t[o.replace(e[o],"")+i+(e[o]||"")]={to:0===f.to?f.to:f.to||f,fr:f.fr,e:f.e};delete t[o]}},a=function(t,e){return t["webkitR"+e]||t["r"+e]||t["mozR"+e]||t["msR"+e]||t["oR"+e]}(window,"equestAnimationFrame");return t.defs=function(e,n,o,r,f){f=n.style,e.a=o,e.n=n,e.s=o in f?f:n,e.e=e.e||r,e.fr=e.fr||(0===e.fr?0:e.s==n?n[o]:(window.getComputedStyle?getComputedStyle(n,null):n.currentStyle)[o]),e.u=(/\d(\D+)$/.exec(e.to)||/\d(\D+)$/.exec(e.fr)||[0,0])[1],e.fn=/color/i.test(o)?t.fx.color:t.fx[o]||t.fx._,e.mx="anim_"+o,n[e.mx]=e.mxv=i,n[e.mx]!=e.mxv&&(e.mxv=null)},t.iter=function(t,e,n){var o,r,i,f,c,u=+new Date+e,o=function(d){if(r=u-(new Date).getTime(),r<50){for(i in t)i=t[i],i.p=1,i.fn(i,i.n,i.to,i.fr,i.a,i.e);n&&n()}else{r/=e;for(i in t){if(i=t[i],i.n[i.mx]!=i.mxv)return;c=i.e,f=r,"lin"==c?f=1-f:"ease"==c?(f=2*(.5-f),f=1-(f*f*f-3*f+2)/4):"ease-in"==c?(f=1-f,f=f*f*f):f=1-f*f*f,i.p=f,i.fn(i,i.n,i.to,i.fr,i.a,i.e)}a?a(o):setTimeout(o,20,0)}};o()},t.fx={_:function(t,e,n,o,r,i){o=parseFloat(o)||0,n=parseFloat(n)||0,t.s[r]=(t.p>=1?n:t.p*(n-o)+o)+t.u},width:function(e,n,o,r,i,f){e._fr>=0||(e._fr=isNaN(r=parseFloat(r))?"width"==i?n.clientWidth:n.clientHeight:r),t.fx._(e,n,o,e._fr,i,f)},opacity:function(t,e,n,o,r,i){isNaN(o=o||t._fr)&&(o=e.style,o.zoom=1,o=t._fr=(/alpha\(opacity=(\d+)\b/i.exec(o.filter)||{})[1]/100||1),o*=1,n=t.p*(n-o)+o,e=e.style,r in e?e[r]=n:e.filter=n>=1?"":"alpha("+r+"="+Math.round(100*n)+")"},color:function(e,n,o,r,i,f,a,c){for(e.ok||(o=e.to=t.toRGBA(o),r=e.fr=t.toRGBA(r),0==o[3]&&(o=[].concat(r),o[3]=0),0==r[3]&&(r=[].concat(o),r[3]=0),e.ok=1),c=[0,0,0,e.p*(o[3]-r[3])+1*r[3]],a=2;a>=0;a--)c[a]=Math.round(e.p*(o[a]-r[a])+1*r[a]);(c[3]>=1||t.rgbaIE)&&c.pop();try{e.s[i]=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"}catch(f){t.rgbaIE=1}}},t.fx.height=t.fx.width,t.RGBA=/#(.)(.)(.)\b|#(..)(..)(..)\b|(\d+)%,(\d+)%,(\d+)%(?:,([\d\.]+))?|(\d+),(\d+),(\d+)(?:,([\d\.]+))?\b/,t.toRGBA=function(e,n){return n=[0,0,0,0],e.replace(/\s/g,"").replace(t.RGBA,function(t,e,o,r,i,f,a,c,u,d,l,s,p,m,h){var a=[e+e||i,o+o||f,r+r||a],x=[c,u,d];for(t=0;t<3;t++)a[t]=parseInt(a[t],16),x[t]=Math.round(2.55*x[t]);n=[a[0]||x[0]||s||0,a[1]||x[1]||p||0,a[2]||x[2]||m||0,l||h||1]}),n},t}();
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/anim/vendor/anim_modified/anim.modified.min.js.map
;
function sc_trackAction(r,a,c){try{var t=null!=c?s_gi(c):s_gi(s_account),n=a;t.prop35=n,t.linkTrackVars="prop35",t.linkTrackEvents="None",t.tl(r,"o",n)}catch(o){return}}twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.factory("ActionTracker",["customEvent",function(r){var a={track:function(a,c,t){var n=[a,c,t.trackStr].join("_");t.trackStr&&r.ifReady(["tagsReady"]).done(function(r){t.linkTrackVars=t.linkTrackVars&&t.linkTrackVars+",prop35,prop44,eVar44,eVar65,eVar70"||"prop35,prop44,eVar44,eVar65,eVar70";for(var a in t)a.match(/event|eVar|prop|linkTrackVars|campaign|linkTrackEvents/)&&(s[a]=t[a]);t.socialTrackAction&&(n=t.trackStr),s.prop35=n,s.tl(document,"o",n),s.prop35="";for(a in t)s[a]=""})}};return a}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/track_str/track_str_action_tracker.factory.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("trackStr",["customEvent","twcPco","ActionTracker",function(t,e,c){"use strict";return{scope:!1,replace:!1,transclude:!1,link:function(t,a,r){a.click(function(a){if(r.trackOnce&&"true"===r.trackOnce&&angular.element(this).unbind(a),!r.trackFlag||"true"===r.trackFlag){window.bar&&window.bar.event().addCallToActionEvent(r.trackStr);var n=e.get("metrics")&&e.get("metrics").attributes.pagename,s=t.getInstance&&t.getInstance().module_id||r.moduleId;c.track(n,s,r)}})}}}]).factory("trackEvent",["customEvent","twcPco","ActionTracker",function(t,e,c){return{fire:function(a){t.ifReady(["tagsReady"]).done(function(){var t=e.get("metrics")&&e.get("metrics").attributes.pagename,r=(scope.getInstance&&scope.getInstance().module_id||"").replace(/ /g,"-"),n={trackStr:a};c.track(t,r,n)})}}}]).run(["customEvent","twcPco","ActionTracker",function(t,e,c){t.ifReady(["tagsReady"]).then(function(){t.getEvent("track-string-event").progress(function(t){var a=(e.get("metrics")&&e.get("metrics").attributes.pagename||"").replace(/ /g,"-"),r=t.module_id||t.settings&&t.settings.module_id||t.scope&&t.scope.getInstance&&t.scope.getInstance().module_id,n=t.attrs&&t.attrs.trackStr||t.trackStr||"",s=angular.extend({},t.attrs||{},{trackStr:n});c.track(a,r,s)})})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/track_str/track_str.directive.min.js.map
;
twc.shared.apps.controller("glomoBaseSearchController",["$scope","$injector","$q","customEvent","dsxclient","twcConfig","twcUtil","pcoUser","$filter","twcConstant",function(e,t,n,o,r,c,a,s,l,i){"use strict";var g=e.$root.$log.getInstance("glomoBaseSearchController"),u=t.has("WxdLocModelClass")&&t.get("WxdLocModelClass"),d=t.has("XwebWebLocModelClass")&&t.get("XwebWebLocModelClass"),h=l("pfTranslate"),f=function(e,t,n){if(u){var o=new u({id:e.getId()||"",cntryCd:e.getCountryCode(),locId:e.getLocId(),locType:e.getLocType(),cityNm:a.capitalize(e.getCity(),!0,!0),bigCity:e.isBigCity(),stCd:e.getStateCode(),stNm:e.getState(),prsntNm:e.getFormattedName(),_country:e.getCountryName(),nickname:e.getNickname()||"",zipCd:e.getZipCode()||"",pos:e.getPosition()||"",lat:e.getLatitude()||"","long":e.getLongitude()||"",recentSearch:"recentSearch"===t},"WxdLocModelClass");"recentSearch"===t?n?s.addRecentSearchLocation(o):s.removeRecentSearchLocation(o):"saveLocation"===t?n?s.addSavedLocation(o):s.removeSavedLocation(o):s.updateLocation(o)}},y=function(e){return e.getCity&&e.getStateCode&&e.getCountry&&e.getCountryCode&&e.getLocType?new d({id:e.getId()||"",name:e.getCity()+", "+e.getStateCode()+", "+e.getCountry(),key:e.getFullLocId(),locId:e.getLocId(),locType:e.getLocType(),cntryCd:e.getCountryCode(),_country:e.getCountry(),stCd:e.getStateCode(),stNm:e.getState()||"",cityNm:e.getCity()||"",bigCity:e.getBigCity&&e.getBigCity()||!1,nickname:e.getNickname&&e.getNickname()||"",tag:e.getTag&&e.getTag()||"",address:e.getAddress&&e.getAddress()||"",pos:e.getPosition()||"",recentSearch:!0},"XwebWebLocModelClass"):null},m=function(e){S&&S.notifier&&o.getEvent(S.notifier).notify(e)};o.getEvent("pcoReady").then(function(t){e.$evalAsync(function(){S.recentSearches=null,S.savedLocations=null})}),o.getEvent("locations_changed").progress(function(t){"savedLocations"===t.key?(e.$evalAsync(function(){S.savedLocations=null}),m("saved")):"recentSearchLocations"===t.key&&(e.$evalAsync(function(){S.recentSearches=null}),m("recent"))});var v={ar_AE:"2",bn_BD:"2",en_GB:"2",fa_IR:"2",hi_IN:"2",iw_IL:"2",ja_JP:"1",ko_KR:"1",th_TH:"1",uk_UA:"2",ur_PK:"2",zh_CN:"1",zh_TW:"1",zh_HK:"1"};e.getMinChar=function(e){return v[e]||"3"},e.getBoostCountry=function(e){return i.localeToCountry[e]||"us"},e.config=[{}];var p=TWC&&TWC.Titan&&TWC.Titan.locale||TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale||"en_US";e.params={minChar:e.getMinChar(p),resultLimit:10,dsx:c.dsxclient,locTypes:"",xwebRecords:c.dsxclient.xweb.records,wxdRecords:c.dsxclient.wxd.records,noResult:h("No results found.",{context:"glomo_base_search"}),settings:{},moduleId:"",resultType:"",recentSearches:null,savedLocations:null,locArr:[],suppressRecentSearches:!1,notifier:null,isIE8:angular.element("html").hasClass("lt-ie9"),search_locale:p};var S=e.params;e.term="",e.getXwebLocFromLoc=function(e){return y(e)},e.showRecentSearches=function(){return e.params.suppressRecentSearches===!0?"Suppressed":"Recent"},e.createLocArray=function(e){angular.forEach(e,function(e,t){S.locArr.push(e)}),S.locArr.sort(function(e,t){return e-t}),angular.forEach(S.locArr,function(e){S.locTypes+=e+"/"})},e.noResultError=function(){S.resultType="NoResult",e.results=[{result:S.noResult}],o.getEvent("search-with-noresults").resolve({item:{result:S.noResult,autoSelect:!0}})},e.goSelectItem=function(e){g.debug("This function needs to be overridden.")},e.getRecentSearches=function(){if(!S.recentSearches){var e=s.getRecentSearchLocations();e&&(S.recentSearches=[],angular.forEach(e,function(e){var t=y(e);t&&S.recentSearches.push(t)}))}return S.recentSearches},e.getSavedLocations=function(){if(!S.savedLocations){var e=s.getSavedLocations();e&&(S.savedLocations=[],angular.forEach(e,function(e){var t=y(e);t&&(t.data.recentSearch=!1,S.savedLocations.push(t))}))}return S.savedLocations},e.saveRecentSearch=function(e){S.recentSearches=null,f(e,"recentSearch",!0)},e.saveSavedLocation=function(e){f(e,"saveLocation",!0)},e.updateSavedLocation=function(e){f(e,"updateLocation",!0)},e.removeSavedLocation=function(e){f(e,"saveLocation",!1)},e.removeRecentSearch=function(e){f(e,"recentSearch",!1)},e.ensureUrlSlash=function(e){return e.match(/^\//)||(e="/"+e),e.match(/\/$/)?e:e+="/"},e.validatePageUrl=function(t){var n=i.pageUrl[S.moduleId].page;t=t?t:"/weather/today/l/","dynamic"===n&&(i.pageUrl[S.moduleId].page=e.ensureUrlSlash(t))},e.landingPage=function(t,n){e.addToRecentSearch.apply(e,[n,"deferLandingPage"])},e.deferLandingPage=function(e){var t="object"==typeof e?e.getKey():e;location.href=i.pageUrl[S.moduleId].page+t},e.addToRecentSearch=function(t,n){var r=t.getKey&&t.getKey()||t.getFullLocId&&t.getFullLocId();if(t&&t.data&&!l("twcFilter").getByProperty("key",r,e.getRecentSearches())&&!l("twcFilter").getByProperty("key",r,e.getSavedLocations())){var c=e.getRecentSearches();o.getEvent("locations_changed").progress(function(o){(10===o.locations.length||o.locations.length>c.length)&&e[n](t)}),e.saveRecentSearch(t)}else e[n](t)},e.getLocationByLocId=function(t){var o=n.defer();e.config=[{recordType:"wxd",recordName:S.wxdRecords.loc,fullLocId:t,locale:S.search_locale}];try{r.execute(e.config).then(function(e){o.resolve(e)})}catch(c){g.error(c.message),o.reject(c.message)}return o.promise},e.tracking=function(e,t){e&&e.length>0&&o.getEvent("from-string-event").notify({settings:S.settings,fromStr:e}),t&&t.length>0&&o.getEvent("track-string-event").notify({settings:S.settings,trackStr:t,linkTrackEvents:"event1",events:"event1"})},e.recentSearches=function(){return e.getRecentSearches()},e.resultType=function(){return S.resultType},e.getPresName=function(t){var n=e.results[t];return"en_US"===S.search_locale||TWC&&TWC.Titan&&TWC.Titan.locale?n&&n.getFormattedName?n.getFormattedName():"":n&&n.getFormattedNameIntl?n.getFormattedNameIntl():""},e.hasResults=function(){return e.term||(e.results=e.recentSearches(),S.resultType=e.showRecentSearches()),!!(e.results&&e.results.length>0)},e.selectItem=function(t,n){var r=e.term;r.length>=S.minChar||0===r.length?n!==!0||a.isNumeric(r)?e.goSelectItem(t):o.ifReady(["search-in-progress"]).then(function(t){o.removeEvent("search-in-progress"),e.goSelectItem(t.item)}):r.length<=2?e.goSelectItem(t):o.ifReady(["search-with-noresults"]).then(function(t){o.removeEvent("search-with-noresults"),e.goSelectItem(t.item)})},e.search=function(t){S.resultType="Computing";var n=e.getBoostCountry(S.search_locale);if(e.results=[{result:h("Searching...",{context:"glomo_base_search"})}],t&&t.length>=S.minChar){var c=e.config[0];c.locTypes=S.locTypes,c.country={code:n,boost:!0},c.term=t,c.locale=S.search_locale;try{r.execute(e.config,{pg:"0,"+S.resultLimit}).then(function(r){S.resultType="Search";var c=r.getModel({recordType:"xweb",recordName:S.xwebRecords.webLoc,locTypes:S.locTypes,term:t,locale:S.search_locale,country:{code:n,boost:!0}});c&&c.length>0?(e.results=c.length>10?c.splice(0,10):c,o.getEvent("search-location-completed").notify(e.results)):(e.noResultError(),o.getEvent("search-location-completed").notify([]))})}catch(s){e.noResultError(),g.error(s.message)}}else o.getEvent("search-location-completed").notify([]),S.resultType=e.showRecentSearches(),0!==t.length&&e.results.length>0?(S.resultType="NoResult",e.$evalAsync(function(){e.results=a.isNumeric(t)&&5===t.length?[]:[{result:S.noResult}]})):0===t.length&&(e.results=e.getRecentSearches())}.debounce(200)}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_base_search/glomo_base_search.controller.min.js.map
;
twc.shared.apps.directive("twcTypeahead",["$timeout","$log","$swipe","$rootScope","twcConstant","customEvent","twcUtil","aliases",function(e,t,i,n,c,s,a,o){"use strict";var u=c.ascii;return{restrict:"EA",transclude:!0,replace:!0,templateUrl:function(e,t){var i="/sites/all/modules/custom/angularmods/app/shared/twc_typeahead/templates/",c=n.isMobile?"nemo":"global",s=t.template,a=angular.element("html").hasClass("lt-ie9")||angular.element("html").hasClass("ie-9")?"_twc_typeahead_ie8.html":"_twc_typeahead_basic.html";return a=s?s+".html":a,t.template?i+t.template+".html":i+c+a},scope:{search:"&",term:"=",select:"&",items:"=",pattern:"@",formClass:"@",iconClass:"@",placeholderText:"@",validateClass:"@",tooltip:"@",inputClass:"@",containerClass:"@",hideSearchIcon:"="},controller:["$scope",function(e){e.goSearch=function(){e.itemsHidden=!1,e.search({term:e.term})},e.isHighLighted=function(){return!e.itemsHidden&&(e.mouseOver||e.hasFocus)},this.get$scope=function(){return e},this.getActiveItem=function(){return e.activeItem},this.setActiveItem=function(t){e.activeItem=t||null},this.setDefaultActiveItem=function(){var t=e.items,i=t&&t[0];i?(i.autoSelect=!0,this.setActiveItem(i),e.$evalAsync(function(){e.itemsHidden=!1})):this.setActiveItem(null)},this.selectActiveItem=function(t){var i=!!(t&&e.activeItem&&e.activeItem.autoSelect)&&t;this.selectItem(e.activeItem,i)},this.selectItem=function(t,i){e.activeItem&&!e.activeItem.result&&(e.input&&(e.input.focus(),Modernizr.touch&&e.input.blur()),e.hasFocus=!0,e.itemsHidden=!0),t&&t.data&&t.data.recentSearch&&(t.autoSelect=i=!1),e.select({item:t,enter:i})},this.search=function(){e.search()},this.isItemActive=function(t){return e.activeItem===t},this.getActiveItemIndex=function(){return e.items.indexOf(e.activeItem)},this.setNextItemActive=function(){this.setItemActiveAt(this.getActiveItemIndex()+1)},this.setPrevItemActive=function(){this.setItemActiveAt(this.getActiveItemIndex()-1)},this.setItemActiveAt=function(t){var i=e.items.length-1;t<0&&(t=i),t>i&&(t=0);var n=e.items[t];n&&(n.autoSelect=!1,this.setActiveItem(n))},this.isEmpty=function(){return!e.term},this.focusReset=function(t){e.$evalAsync(function(){e.hasFocus=t})},e.items?this.setDefaultActiveItem():e.items=[]}],link:function(t,i,c,l){function r(e,i){var n,c,s=!0;return t.activeItem||i!==!0?t.activeItem&&t.activeItem.result&&t.validateClass&&t.validateClass.length>0&&(n=t.$$childHead?t.$$childHead:t,c=t.term,(c.length>0&&!o.specialty[c.toLowerCase()]&&"Searching..."!==t.activeItem.result||c===t.placeholderText)&&(s=e===!0,n.$apply(function(){n.isValid=s,s||(t.itemsHidden=!0,h.blur())}))):(n=t.$$childHead?t.$$childHead:t,e===!0?s=!0:(s=!!(t.term||t.term&&0===t.term.length&&t.$parent.getRecentSearches&&t.$parent.getRecentSearches().length>0),h.blur()),n.$apply(function(){n.isValid=s})),s}function m(){t.$apply(function(){t.hasFocus=!1}),r(!0,!1)}function d(e){l.focusReset(e)}var h=i.find("form > input"),v=i.find("div.menu"),f=i.find("div.icon--search");c.containerClass&&"input-base"===c.containerClass&&(t.input=h),s.getEvent("page-back-event").progress(function(){m()}),h.bind("focus",function(){d(!0)}),t.$watch("visible",function(){i.hasClass("mobile")&&h.focus(),0===f.length&&(f=i.find("div.icon--search"),0===f.length||f.bind("click",function(){h.val().length>0&&r(!1,!1)?t.$apply(function(){l.selectActiveItem()}):t.activeItem&&t.activeItem.result&&t.$apply(function(){t.hasFocus=!0,t.itemsHidden=!1})}))}),t.$watch("hasFocus",function(e){n.$broadcast("twcTypeahead.input.focus",e)}),t.$watch("itemsHidden",function(e){}),Modernizr.touch&&(h.bind("click",function(){h.focus(),n.$broadcast("twcTypeahead.mobile.input.focus",t.hasFocus)}),s.getEvent("touch-on-body-event").progress(function(e){t.$root.isMobile||t.itemsHidden!==!1||t.mouseOver!==!1||t.$apply(function(){t.hasFocus=!1})})),h.bind("blur",function(){d(!1)}),v.bind("mouseover",function(){t.$apply(function(){t.mouseOver=!0})}),v.bind("mouseleave",function(){t.$apply(function(){t.mouseOver=!1})}),h.bind("keyup",a.debounce(function(i){if(i.keyCode===u.CR){var n=l.getActiveItem().data?0:t.term.length<3?0:850;e(function(){r(!1,!0)&&t.$apply(function(){l.selectActiveItem(!0)})},n)}else i.keyCode===u.ESC&&h.blur()},30)),h.bind("keydown",function(e){e.keyCode===u.CR||e.keyCode===u.ESC?e.preventDefault():e.keyCode===u.DOWN?(e.preventDefault(),t.$apply(function(){l.setNextItemActive()})):e.keyCode===u.UP?(e.preventDefault(),t.$apply(function(){l.setPrevItemActive()})):r(!0,!1)}),t.$watch("items",function(e,t){t!==e&&l.setDefaultActiveItem()}),t.$watch("isHighLighted()",function(e){e?v.css({display:"block",position:"absolute",width:h[0].offsetWidth}):v.css("display","none")})}}}]).directive("twcTypeaheadItem",["$swipe","$log","$compile","customEvent",function(e,t,i,n){"use strict";return{require:"^twcTypeahead",transclude:"true",template:'<div ng-click="selectItem()" ng-class="{\'twc-typeahead-item-active\': isActive()}"><div ng-transclude></div></div>',link:function(t,c,s,a){var o=t.$eval(s.twcTypeaheadItem);t.isActive=function(){return a.isItemActive(o)},t.selectItem=function(){o.autoSelect=!1,t.$evalAsync(function(){a.selectItem(o)}),Modernizr.touch&&angular.element(c).hasClass("for-touch")&&i(c)(t)},Modernizr.touch&&e.bind(c,{start:function(){}}),c.bind("mouseenter",function(){t.$apply(function(){a.setActiveItem(o)})}),!a.isEmpty()&&t.$last&&(n.removeEvent("search-in-progress"),n.getEvent("search-in-progress").resolve({item:a.getActiveItem()}))}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_typeahead/twc_typeahead.directive.min.js.map
;
twc.shared.apps.directive("twcSelectText",function(){"use strict";return{restrict:"A",link:function(t,e){var n=!1;e.mouseup(function(t){n&&(t.preventDefault(),n=!1)}),e.mousedown(function(){n=!1}),e.on("focusin",function(t){t.preventDefault(),e.select(),setTimeout(function(){e.select()}),n=!0})}}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_select_text/twc_select_text.directive.min.js.map
;
twc.shared.apps.directive("twcInputErrorState",function(){return{restrict:"A",scope:{isValid:"@"},link:function(t,r,a){var e=a.twcInputErrorState;t.$watch("isValid",function(t){e&&(Boolean(t)?r.removeClass(e):r.addClass(e))})}}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_input_error_state/twc_input_error_state.directive.min.js.map
;
twc.shared.apps.directive("twcPlaceholder",["$timeout",function(t){return{restrict:"A",link:function(t,n,e){t.text=e.twcPlaceholder;var a=function(e){0===n.val().length&&t.$apply(function(){n.val(e?t.text:"")})};n.bind("focus",function(){n.val()===t.text&&t.$apply(function(){n.val("")})}),n.bind("blur",function(){""===n.val()&&a(!0)}),t.$watch("term",function(e,a){e!==a&&(e&&0!==e.length||!n.hasClass("manage-location-input")||n.val(t.text))}),setTimeout(function(){n.val(t.text)},50)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_placeholder/twc_placeholder.directive.min.js.map
;
/**
 * Created with JetBrains PhpStorm.
 * User: jefflu
 * Date: 2/8/14
 * Time: 6:42 PM
 * To change this template use File | Settings | File Templates.
 */

twc.shared.apps.factory('XwebWebLocModelClass',['RecordModel', 'twcUtil', 'twcConstant', 'pcoUser' ,function(RecordModel, twcUtil, twcConstant, pcoUser){
  return RecordModel.extend({
    recordType: 'WebLoc',
    isCacheable: false,

    setResponse: function( response ) {
      this.data = response;
      this.header = "NA";
    },

    getFormattedName: function(isMobile, longRc) {
      var locTypes = twcConstant.locTypes;
      var types = [locTypes.Airports, locTypes.Ski, locTypes.Golf, locTypes.Lakes, locTypes.Outdoor, locTypes.Parks];
      var country = this.getCountryCode() === 'US' && this.getLocType() === 1 || this.getCountryCode() !== 'US' ? twcUtil.capitalize(this._get('_country'), true) : '';
      var regionName = this.getStateCode().length > 0 ? country.length > 0 ? twcUtil.capitalize(this.getState(), true, true) + ', ' : twcUtil.capitalize(this.getState(), true, true) : '';
      var region = longRc ? regionName + country : this._get('stCd');
      var presName = twcUtil.capitalize(this.getCity(), true, true);
      var name3 = types.indexOf(this.getLocType()) >= 0 && this.getParentCity() ? this.getParentCity() + ', ' : '';
      var name1 = twcUtil.capitalize(this.getCity(), true, true) + ', ' + name3 + region;
      var zip = this.getLocId();
      var zipSearch = this.getLocType() === locTypes.Zips && (twcUtil.isNumeric(zip) || this.getCountryCode() !== 'US') ? ' (' + zip + ')' : '';
      // adding the changes for titan to display state code instead of state name
      var name, name2;
      if(TWC && TWC.Titan && TWC.Titan.locale) {
        name2 = regionName.length > 0 ? presName + (this._get('stCd') !== '' && this._get('stCd') !== '*' ? ', ' + this._get('stCd') : '') : presName;
        name = this.getCountryCode() === 'US' ? name1 + zipSearch : twcUtil.capitalize(name2 + (zipSearch.length > 0 ? " " + zipSearch : ""), false) + ', ' + country;
      } else {
        name2 = regionName.length > 0 ? presName + ', ' + name3 + this._get('stNm') : presName;
        name = this.getCountryCode() === 'US' ? name1 + zipSearch : twcUtil.capitalize(name2, true, true) + ', ' + country;
      }
      return name;
    },

    getFormattedNameIntl: function() {
      var locTypes = twcConstant.locTypes,
        types = [locTypes.Airports, locTypes.Ski, locTypes.Golf, locTypes.Lakes, locTypes.Outdoor, locTypes.Parks],
        locale = pcoUser.getLocale(),
        defaultCountryCodeForLocale = (twcConstant.localeToCountry[locale] || 'US').toUpperCase();
      var country = this.getCountryCode() === defaultCountryCodeForLocale && this.getLocType() === 1 || this.getCountryCode() !== defaultCountryCodeForLocale ? twcUtil.capitalize(this._get('_country'), true) : '';
      var region = this._get('stNm') || this._get('stCd');
      var name3 = types.indexOf(this.getLocType()) >= 0 && this.getParentCity() ? this.getParentCity() + ', ' : '';
      var name1 = this.getCity() + ', ' + name3 + region;
      var zipSearch = this.getLocType() === locTypes.Zips ? ' (' + this.getLocId() + ')' : '';

      var name = this.getCountryCode() === defaultCountryCodeForLocale ? name1 + zipSearch : name1 + zipSearch + ', ' + country;

      return name;
    },

    getId: function() {
      return this._get('id');
    },

    isBigCity: function() {
      return this._get('bigCity');
    },

    getCityName: function() {
      return this._get('cityNm');
    },

    getName: function() {
      return this._get('name');
    },

    getFullName: function() {
      return this.getFormattedName();
    },

    getFullLocId: function() {
      return this.getLocId() + ':' + this.getLocType() + ':' + this.getCountryCode();
    },

    getNickname: function() {
      var nickname = this._get('nickname');
      return angular.isString(nickname) ? nickname.trim() : nickname;
    },

    getCountryCode: function() {
      return this._get('cntryCd');
    },

    getKey: function() {
      return this._get('key');
    },

    getCountryName: function() {
      return this._get('_country');
    },

    getLocId: function() {
      return this._get('locId');
    },

    getLocType: function() {
      return this._get('locType');
    },

    getPresName: function() {
      return this._get('prsntNm');
    },

    getRegionCode: function() {
      return this._get('stCd');
    },

    getRegionName: function() {
      return this._get('stNm');
    },

    getStateName: function() {
      return this.getRegionName();
    },

    getStateCode: function() {
      return this._get('stCd') ? this._get('stCd') : '';
    },

    /**
     * Trying to standardize getters across wxdLoc, xwebLoc & savedLocations Models
     * @returns {*}
     */

    getParentCity: function() {
      return this._get('parentCity');
    },

    getState: function() {
      return this._get('stNm') ? this._get('stNm') : '';
    },

    getCity: function() {
      return this._get('cityNm');
    },

    getCountry: function() {
      return this._get('_country');
    },

    getAddress : function() {
        return this._get('addr');
    },

    // DKB-1499 requires a zipCd.
    // Putting this in because webLoc's
    // Do not have zipCd
    getZipCode: function() {
      var locId = this.getKey(),
          zip = locId.match(/(\d{5}):4:/);
      return zip && zip[1] || "";
    },

    getPosition : function() {
      return this._get('position');
    },

    getGeocode: function () {
      var _return;
      if(this._get('lat')){
        _return = this._get('lat') + ',' + this._get('long');
      } else {
        _return = this._get('geocode') || this._get('geoCode');
      }
      return _return;
    },

    getLongitude: function () {
      var _result;
      if (this._get('long')) {
        _result = this._get('long');
      } else if (this.getGeocode()) {
        var attrs = this.getGeocode().split(',');
        _result = attrs && attrs.length > 0 ? attrs[1] : '';
      }
      return _result;
    },

    getLatitude: function () {
      var _result;
      if (this._get('lat')) {
        _result = this._get('lat');
      } else if (this.getGeocode()) {
        var attrs = this.getGeocode().split(',');
        _result = attrs && attrs.length > 0 ? attrs[0] : '';
      }
      return _result;
    }


  });
}]);
;
!function(c){twc.shared.apps.factory("TwcClass",function(){return c.TwcClass})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/class/class_ng.factory.min.js.map
;
twc.shared.apps.config(["twcConfigProvider",function(d){d.add({module_status_codes:{LOADING:"loading",NOT_AVAILABLE:"na",ERROR:"error",DEFAULT:"default"}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/app_config/app.config.min.js.map
;
twc.shared.apps.factory("twcLogger",function(){return function(n){var e=(new Date,function(){var n=new Date,e=n.getTime()-window.windowRenderStartTime,o=1900+n.getYear(),t=n.getMonth()+1;return t+"/"+n.getDate()+"/"+o+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()+":"+n.getMilliseconds()+"["+e+"]"});return{getInstance:function(o){return o=o?o:"",{log:function(){n.log("LOG:  "+e()+" - "+o+"::",arguments)},debug:function(){n.debug("DEBUG:  "+e()+" - "+o+"::",arguments)},warn:function(){n.log("WARN:  "+e()+" - "+o+"::",arguments)},info:function(){n.log("INFO:  "+e()+" - "+o+"::",arguments)},error:function(){var t={url:location.href,agent:navigator.userAgent,stackTrace:arguments};n.debug("ERROR:  "+e()+" - "+o+"::",t),TWC.pco.get("twclog").error(e()+" - "+o+"::",t)},assert:function(){console.assert&&console.assert(arguments[0],"ASSERT:  "+e()+" - "+o+"::",arguments.length>0&&arguments[1])},group:function(){console.group("INFO:  "+e()+" - "+o+"::",arguments)},groupEnd:function(){console.groupEnd()},setClassName:function(n){o=n}}},error:n.error,debug:n.debug,info:n.info,log:n.log,warn:n.warn,assert:n.assert}}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_logger/twc_logger.factory.min.js.map
;
twc.shared.apps.filter("safeDisplay",["twcUtil",function(t){return function(t,n){return"isLoading"in this&&this.isLoading?"":0===t||t?t:n||"-"}}]).filter("twcFilter",["twcUtil",function(t){return{getByProperty:function(n,e,r){return t.find(r,function(t){return t.data?t.data[n]===e:t[n]===e})}}}]).filter("truncate",function(){return function(t,n,e){return t?(n=parseInt(n,10))?t.length<=n?t:(t=t.substr(0,n),t+(e||" …")):t:""}}).filter("appendRandomLoremIpsum",function(){function t(t,n,e){var u,a,o;return u="undefined"==typeof r[t]?i%t.length:r[t]>=t.length?0:r[t],r[t]=u+1,a=t.charCodeAt(u),o=e-n,a%o+n}function n(n){return u[t(n,0,u.length)]}function e(e,r,i){var u,a=" ",o=t(e,r,i);for(u=0;u<o;u++)a+=n(e)+" ";return a}var r,i,u=["Lorem","ipsum","sit","amor","cetere","Carthago","delenda","est","et","ad","alia"];return function(t,n,u){return r={},i=(new Date).getMinutes(),t=t||"",n=n||0,u=u||12,t+e(t,n,u)}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/filters/module_filters.filter.min.js.map
;
twc.shared.apps.factory("linkerFactory",["$rootScope","dsxclient","PcoPage","customEvent","$interpolate","twcPco","twcUtil",function(e,t,o,r,n,a,i){"use strict";var c,l,u,d,g=function(){t.execute(u).then(["dateTimeModel",function(e){e?(c=e&&e.getDateTimeISO?e.getDateTimeISO():e.data&&e.data.datetime?e.data.datetime:(new Date).toISOString(),r.getEvent("gotCurrentTime").resolve({date:c})):(c=(new Date).toISOString(),r.getEvent("gotCurrentTime").resolve({date:c}))}])["catch"](function(){r.getEvent("gotCurrentTime").reject(),console.log("error")})},m=function(e,t){var o="+",r="00";t<0&&(o="-",t*=-1);var n=t>9?"":"0";return t%1!==0&&(t=parseInt(t),r="30"),e.replace(" ","T")+o+n+t+":"+r},f=window.jQuery,s=function(){f.when.apply(f,[].concat(a.get("page").promises,a.get("user").promises)).done(function(){var t;if(d="dynamiclocation"in e&&e.dynamiclocation?e:{},r.getEvent("linker_factory_tempScope").resolve(d),o.getCurrentLocationModel()&&!o.getCurrentLocationModel().data.error){var n=o.getCurrentLocationModel(),a="Y"===n.getDaylightSavingsActive()?1:0;t=n.getFullLocId(),l=n.getGmtDiff()+a}else t="30339:4:US",l=(new Date).getTimezoneOffset()/60*-1;u=[{$id:"dateTimeModel",recordType:"cs",recordName:"datetime",fullLocId:t}],g()})};return s(),{validateLinkSchedule:function(e,t){if(t&&(l=t),!e.value)return!0;var o=m(e.value,l),r=m(e.value2,l),n=i.fromISOToDate(o).getTime(),a=i.fromISOToDate(r).getTime(),u=i.fromISOToDate(c).getTime();return!(n&&a&&u&&n!==a)||n<u&&a>u},interpolateLinkUrl:function(e){return d&&e?n(e)(d):e}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/linker_factory/linker_factory.factory.min.js.map
;
twc.shared.apps.config(["$provide","$logProvider",function(o,e){e.debugEnabled(TWC.debugEnabled()),o.decorator("$log",["$delegate","twcLogger",function(o,e){return e(o)}])}]),twc.shared.apps.run(["$rootScope","$log",function(o,e){o.$log=e}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_logger/twc_logger.config.min.js.map
;
twc.shared.apps.factory("Set",["TwcClass",function(t){return t.extend({construct:function(){this.setMap={}},add:function(t){var n=t&&t.toString().replace(/ /g,"");n&&!this.setMap[n]&&(this.setMap[n]=t)},getAll:function(){var t=[];return angular.forEach(this.setMap,function(n,a){t.push(a)}),t},hasKey:function(t){return t in this.setMap}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/collections/collections.factory.min.js.map
;
twc.shared.apps.constant("twcConstant",{locTypes:{Region:1003,State:1001,Country:1e3,Cities:1,Golf:5,Airports:9,Ski:11,Outdoor:13,Zips:4,Parks:19,Lakes:21},localeToCountry:{ar_AE:"ae",bn_BD:"bd",ca_ES:"sp",cs_CZ:"ez",da_DK:"da",de_DE:"gm",el_GR:"gr",en_AU:"as",en_CA:"ca",en_GB:"uk",en_NZ:"nz",en_US:"us",es_AR:"ar",es_MX:"mx",es_US:"us",fa_IR:"ir",fi_FI:"fi",fr_CA:"ca",fr_FR:"fr",he_IL:"is",hi_IN:"in",hr_HR:"hr",hu_HU:"hu",in_ID:"id",it_IT:"it",iw_IL:"is",ja_JP:"ja",kk_KZ:"kz",ko_KR:"ks",ms_MY:"my",nl_NL:"nl",no_NO:"no",pl_PL:"pl",pt_BR:"br",ro_RO:"ro",ru_RU:"rs",sk_SK:"lo",sv_SE:"sw",th_TH:"th",tl_PH:"ph",tr_TR:"tu",uk_UA:"up",ur_PK:"pk",vi_VN:"vm",zh_CN:"cn",zh_HK:"hk"},statesCodesToNames:[{name:"ALABAMA",abbreviation:"AL"},{name:"ALASKA",abbreviation:"AK"},{name:"AMERICAN SAMOA",abbreviation:"AS"},{name:"ARIZONA",abbreviation:"AZ"},{name:"ARKANSAS",abbreviation:"AR"},{name:"CALIFORNIA",abbreviation:"CA"},{name:"COLORADO",abbreviation:"CO"},{name:"CONNECTICUT",abbreviation:"CT"},{name:"DELAWARE",abbreviation:"DE"},{name:"DISTRICT OF COLUMBIA",abbreviation:"DC"},{name:"FEDERATED STATES OF MICRONESIA",abbreviation:"FM"},{name:"FLORIDA",abbreviation:"FL"},{name:"GEORGIA",abbreviation:"GA"},{name:"GUAM",abbreviation:"GU"},{name:"HAWAII",abbreviation:"HI"},{name:"IDAHO",abbreviation:"ID"},{name:"ILLINOIS",abbreviation:"IL"},{name:"INDIANA",abbreviation:"IN"},{name:"IOWA",abbreviation:"IA"},{name:"KANSAS",abbreviation:"KS"},{name:"KENTUCKY",abbreviation:"KY"},{name:"LOUISIANA",abbreviation:"LA"},{name:"MAINE",abbreviation:"ME"},{name:"MARSHALL ISLANDS",abbreviation:"MH"},{name:"MARYLAND",abbreviation:"MD"},{name:"MASSACHUSETTS",abbreviation:"MA"},{name:"MICHIGAN",abbreviation:"MI"},{name:"MINNESOTA",abbreviation:"MN"},{name:"MISSISSIPPI",abbreviation:"MS"},{name:"MISSOURI",abbreviation:"MO"},{name:"MONTANA",abbreviation:"MT"},{name:"NEBRASKA",abbreviation:"NE"},{name:"NEVADA",abbreviation:"NV"},{name:"NEW HAMPSHIRE",abbreviation:"NH"},{name:"NEW JERSEY",abbreviation:"NJ"},{name:"NEW MEXICO",abbreviation:"NM"},{name:"NEW YORK",abbreviation:"NY"},{name:"NORTH CAROLINA",abbreviation:"NC"},{name:"NORTH DAKOTA",abbreviation:"ND"},{name:"NORTHERN MARIANA ISLANDS",abbreviation:"MP"},{name:"OHIO",abbreviation:"OH"},{name:"OKLAHOMA",abbreviation:"OK"},{name:"OREGON",abbreviation:"OR"},{name:"PALAU",abbreviation:"PW"},{name:"PENNSYLVANIA",abbreviation:"PA"},{name:"PUERTO RICO",abbreviation:"PR"},{name:"RHODE ISLAND",abbreviation:"RI"},{name:"SOUTH CAROLINA",abbreviation:"SC"},{name:"SOUTH DAKOTA",abbreviation:"SD"},{name:"TENNESSEE",abbreviation:"TN"},{name:"TEXAS",abbreviation:"TX"},{name:"UTAH",abbreviation:"UT"},{name:"VERMONT",abbreviation:"VT"},{name:"VIRGIN ISLANDS",abbreviation:"VI"},{name:"VIRGINIA",abbreviation:"VA"},{name:"WASHINGTON",abbreviation:"WA"},{name:"WEST VIRGINIA",abbreviation:"WV"},{name:"WISCONSIN",abbreviation:"WI"},{name:"WYOMING",abbreviation:"WY"}],ascii:{TAB:9,CR:13,ESC:27,DOWN:40,UP:38,L:37,R:39,DEL:127,BS:8},pageUrl:{hdr:{page:"/weather/today/l/",enhance:"/search/enhancedlocalsearch?where="},video:{page:"/video/",enhance:"/search/enhancedlocalsearch?where="},"ap-main":{page:"/health/aches-pains/forecast/",enhance:"/search/enhancedlocalsearch?where="},"ap-fcst":{page:"/health/aches-pains/forecast/",enhance:"/search/enhancedlocalsearch?where="},"pollen-main":{page:"/health/pollen/forecast/",enhance:"/search/enhancedlocalsearch?where="},"pollen-fcst":{page:"/health/pollen/forecast/",enhance:"/search/enhancedlocalsearch?where="},"hg-main":{page:"/home-garden/forecast/",enhance:"/search/enhancedlocalsearch?where="},"hg-fcst":{page:"/home-garden/forecast/",enhance:"/search/enhancedlocalsearch?where="},"fish-main":{page:"/outlook/recreation/outdoors/fishing/",enhance:"/search/enhancedlocalsearch?where="},"fish-fcst":{page:"/outlook/recreation/outdoors/fishing/",enhance:"/search/enhancedlocalsearch?where="},"ski-main":{page:"/sports-rec/ski/forecast/",enhance:"/sports-rec/ski/results?where="},"ski-fcst":{page:"/sports-rec/ski/forecast/",enhance:"/sports-rec/ski/results?where="},"hp-countdown":{page:"dynamic",enhance:"/search/enhancedlocalsearch?where="},title_enhanced:{page:"dynamic",enhance:"/search/enhancedlocalsearch?where="},"title-lifestyle-health":{page:"dynamic",enhance:"/search/enhancedlocalsearch?where="},cold_flu_map:{page:"dynamic",enhance:"/search/enhancedlocalsearch?where="},vertSearch:{page:"dynamic",enhance:"/search/enhancedlocalsearch?where="},"tornado-central":{page:"/storms/tornado/forecast/"}},socialMedia:{facebook:{icon:"facebook",title:"Facebook Recommend"},twitter:{icon:"twitter",title:"Twitter Tweet"},googleplus:{icon:"google-plus",title:"Google Plus"},reddit:{icon:"reddit",title:"Post to Reddit"},pinterest:{icon:"pinterest",title:"Pinterest Pin"},email:{icon:"email",title:"Email Shares"},qq:{icon:"qzone",title:"QIt"},sina:{icon:"sina-weibo",title:"Sina"}},microdata:{url:"http://schema.org/",schema:{organization:{name:"Organization"},video:{name:"VideoObject"},image:{name:"ImageObject"},article:{name:"Article"}}},hurricaneSeason:{start:"May 15",end:"November 30"},assetsUrl:window.TWC&&window.TWC.Configs&&window.TWC.Configs.assets_url+"/",oldAssetsIDomain:"//i.imwx.com/",oldAssetsImageDomain:"//i.imwx.com/",sina:{icon:"sina-weibo",title:"Sina"},LogoTWC:{logo_100x100:"TWC_logo_100x100.gif",white_logo:"twc-white.png"},profile:{host:"profile.weather.com",version:"",protocol:"https"},search:{LOCATION_CHANGED_EVENT:"search_location-changed",ENHANCE_HANDLER:"Enhance",SKI_ENHANCE_HANDLER:"SkiHandler",LANDING_PAGE_HANDLER:"LandingPage"}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_constant/twc_constant.constant.min.js.map
;
twc.shared.apps.config(["twcConfigProvider",function(o){o.add({pco:{models:{savedLocation:"PcoSavedLocationModel",recentSearchLocation:"PcoSavedLocationModel",wxdMORecordModel:"WxdMORecordModelClass"},createFullUserLocationList:function(o){return(o.getSavedLocations()||[]).concat(o.getRecentSearchLocations()||[])}}})}]).run(["pcoUser",function(o){window.user=o}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/pco.config.min.js.map
;
twc.shared.apps.filter("glomoLocationName",["$injector","twcUtil","twcConstant","pcoUser",function(e,t,o,a){function s(e){var o=null;switch(e.className){case"XwebWebLocModelClass":o=e;break;case"WxdLocModelClass":o=new c({presName:e.getPresName()||e.prsntNm,lat:e.getLatitude()||e.lat,lng:e.getLongitude()||e["long"],name:e.getAddress?e.getAddress()+" "+e.getCity()+", "+e.getStateCode():e.getCity()+", "+e.getStateCode()+", "+e.getCountry(),key:e.getFullLocId()||e.loc,locId:e.getLocId()||e.locId,locType:e.getLocType()||e.locType,cntryCd:e.getCountryCode()||e.cntryCd,_country:e.getCountry()||e._country,stCd:e.getStateCode()||e.stCd,stNm:e.getState()||e.stNm,cityNm:t.capitalize(e.getCity()||e.cityNm,!0),bigCity:!1,nickname:"",recentSearch:!1,addr:e.getAddress&&e.getAddress()},"XwebWebLocModelClass")}return o}function r(e){if(t.isEmpty(e))return null;var r,c=a.getLocale(),n=(o.localeToCountry[c]||"US").toUpperCase(),d=e.prsntNm?e:s(e),l=e.cntryCd||d.getCountryCode(),g=e.stCd||d.getStateCode(),C=e.prsntNm||d.data.presName,i=e.nickname;if("en_US"!==c&&n===l){var y=C.split(",");r=y[0]+", "+g}else r=C;return i||r}var c=e.has("XwebWebLocModelClass")&&e.get("XwebWebLocModelClass");return r}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_location_name/glomo_location_name.filter.min.js.map
;
!function(n){"use strict";function t(t){function e(e,i){function o(){r||requestAnimationFrame(s),r=!0}function a(){c=window.scrollY||window.pageYOffset,f&&f.length&&f.offset&&(l=f.offset().top,o())}function s(){if(c>l){var n=f.outerHeight(!0);d.addClass(u),f.css("padding-top",n+"px")}else d.removeClass(u),f.css("padding-top","0");r=!1}var r,c,l,d=i.parents(".today.glomo-header"),f=i.parents(".region.navigation"),u="nav-fixed";d.find(".glomo_local_suite_nav").length;n.element(t).on("scroll",a)}return{restrict:"E",link:e}}twc.shared.apps.directive("stickyNav",t),t.$inject=["$window"]}(angular);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_sticky_nav/gm_sticky_nav.directive.min.js.map
;
/**
 * Author: ksankaran (Velu)
 * Date: 11/12/13
 * Time: 2:12 PM
 * Comments:
 */
/* global twc */
/*jshint -W065 */

twc.shared.apps.factory('WxdMORecordModelClass',['RecordModel' ,'$injector','dsxModelUtils',function(RecordModel ,$injector,dsxModelUtils){
  var pcoUser = $injector.get('pcoUser');
  return RecordModel.extend({
    recordType: 'MORecord',

    /**
     * Temperature fahrenheit or celsius, get temp by passing unit or by user preference
     * @param unit
     * @returns {String}  Ex: F
     */
    getTemp: function(unit) {
      unit = unit || this.getUser().getTempUnit();
      return this._get('tmp'+unit);
    },

    /**
     * Temperature fahrenheit or celsius, get temp by passing unit or by user preference
     * @returns {String}  Ex: F
     */
    getTempUnit: function() {
      return this.getUser().getTempUnit();
    },

    /**
     * Get user object from pco
     * @returns {Object} Pco user Object
     */
    getUser: function() {
      return pcoUser;
    },

    /**
     * Get if location is currently Day or Night
     * @returns {String} D = day, N = night, X = missing
     */
    getDayNight: function() {
      return this._get('dyNght');
    },

    /**
     * Weather description for period
     * @returns {String}  Ex: Cloudy (Range: 257 phrases)
     */
    getWeatherDescription: function() {
      return this._get('wx');
    },

    /**
     * sky code (icon) for current period. Daily is 24 hours, Daypart 12 or 24 hours, Hourly is 1 hour, observations current time
     * @returns {String}  Ex: 19 (Range: 0 - 48)
     */
    getSkyCode: function() {
      return this._get('sky');
    },

    /**
     * sky code extended (icon) for current period.
     * @returns {String}  Ex: 3200
     */
    getSkyCodeExtended: function() {
      return this._get('iconExt');
    },

    /**
     * Get observation date
     * @returns {String}  Ex: Sep 26
     */
    getObsDate: function() {
      return this._get('locObsDay');
    },

    /**
     * Get observation time based on client browser
     * @returns {String}  Ex. 10:20am EDT
     */
    getObsTime: function() {
      return this._get('locObsTm');
    },

    /**
     * Get observation GMT time
     * @returns {String}
     */
    getObsGmt: function() {
      return this._get('obsTmGmt');
    },

    /**
     * Get feels like index in fahrenheit or celsius based on user preference
     * @returns {String}  Ex: 79°F
     */
    getFeelsLike: function() {
      return this._get('flsLkIdx'+this.getUser().getTempUnit());
    },

    /**
     * Maximum temperature for the last 24 hours in fahrenheit or celsius based on user preference
     * @returns {String}  Ex: 99°F
     */
    getTodayHi: function() {
      return this._get('tmpMx24'+this.getUser().getTempUnit());
    },

    /**
     * Minuimum temperature for the last 24 hours in fahrenheit or celsius based on user perference
     * @returns {String }  Ex: 69°F
     */
    getTodayLo: function() {
      return this._get('tmpMn24'+this.getUser().getTempUnit());
    },

    /**
     * Precipitation for 24 hour period in inches
     * @returns {String}  Ex: 0.05
     */
    getPrecip24: function() {
      return dsxModelUtils.getPrecipValue(this,'prcp24');
    },

    /**
     * Precipitation amount within last 3 to 6 hours
     * @returns {String}  Ex: 0.08
     */
    getPrecip3_6: function() {
      return dsxModelUtils.getPrecipValue(this,'prcp3_6hr');
    },

    /**
     * Precipitation for the hour
     * @returns {String}  Ex: 0.50
     */
    getPrecipHour: function() {
      return dsxModelUtils.getPrecipValue(this,'prcpHr');
    },

    /**
     * Precipitation for Last 7 Days in inches or millimeters
     * @returns {String}  Ex: 0.05
     */
    getPrecipLast7Days: function() {
      return dsxModelUtils.getPrecipValue(this,'prcp7Dy');
    },

    /**
     * Precipitation total for the Month in inches - Begins first day of the month 12 01 local time
     * @returns {String}  Ex: 15.02
     */
    getPrecipMonth: function() {
      return dsxModelUtils.getPrecipValue(this,'prcpMTD');
    },

    /**
     * Precipitation total for the Year in inches - Begins January 1 at 12 01 local time
     * @returns {String}  Ex: 68.03
     */
    getPrecipYear: function() {
      return dsxModelUtils.getPrecipValue(this,'prcpYr');
    },

    /**
     * Snow Depth - in inches on the ground when record type is METAR, snow accumulation for the last 24 hours when record type is TECCI
     * @returns {String}  Ex: 12.0
     */
    getSnowDepth: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwDep');
    },

    /**
     * Snow increasing in inches per hour when the record type is METAR, snow accumulation for the last hour in inches when the record type is TECCI
     * @returns {String}  Ex: 12.0 (Range: 0 - 15)
     */
    getSnowIncrease: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwIncr');
    },

    /**
     * Total snow accumulation in inches for the current storm when record type is METAR, snow accumulation in inches for the last 6 hours when record type is TECCI
     * @returns {String}  Ex: 130.0 (Range: 0 - 300)
     */
    getSnowTotal: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwTot');
    },

    /**
     * Snow total Month To Date in inches - begins first day of the month at 0000Z GMT
     * @returns {String}  Ex: 39.0 (Range: 0 to 999.9 - frequently null)
     */
    getSnowMTD: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwMTD');
    },

    /**
     * Snow total for the season in inches - begins July 1 at 0000Z, ends June 30, 2359Z GMT
     * @returns {String}  EX: 155.0 (Range: 0 to 9999.9 - frequently null)
     */
    getSnowSeason: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwSsn');
    },

    /**
     * Snow total yearly in inches - begins January 1, 0000Z GMT
     * @returns {String}  366.9 (Range: 0 to 9999.9 - frequently null)
     */
    getSnowByYear: function() {
      return dsxModelUtils.getAccumulationValue(this,'snwYr');
    },

    /**
     * Sunrise in local apparent time of location
     * @returns {String}  Ex: 06 50 00 am
     */
    getSunrise: function() {
      return this._get('sunrise');
    },

    /**
     * Sunset in local apparent time of location
     * @returns {String}  Ex: 06 30 00 pm
     */
    getSunset: function() {
      return this._get('sunset');
    },

    /**
     * Sunrise in ISO format
     * @returns {String}  Ex: 2014-02-06T01:14:00.000Z
     */
    getSunriseISO: function() {
      return this._get('sunriseISO');
    },

    /**
     * Sunset in ISO format
     * @returns {String}   Ex: 2014-02-06T01:14:00.000Z
     */
    getSunsetISO: function() {
      return this._get('sunsetISO');
    },

    /**
     * Sunrise in ISO format
     * @returns {String}  Ex: 2014-02-06T01:14:00.000Z
     */
    getSunriseISOLocal: function() {
      return this._get('_sunriseISOLocal');
    },

    /**
     * Sunset in ISO format
     * @returns {String}   Ex: 2014-02-06T01:14:00.000Z
     */
    getSunsetISOLocal: function() {
      return this._get('_sunsetISOLocal');
    },


    /**
     * Wind direction in text (ascii)
     * @returns {String}  Ex: NE (Range: N , NNE , NE, ENE, E, ESE, SE, SSE, S, SSW, SW, WSW, W, WNW, NW, NNW, CALM, VAR)
     */
    getWindDirection: function() {
      return this._get('wDirAsc');
    },

    /**
     * Wind direction in degrees
     * @returns {String}  Ex: 45 (Range: 0 - 359)
     */
    getWindDirectionDegrees: function() {
      return this._get('wDir');
    },

    /**
     * Wind gust in miles or Kilometers per hour
     * @returns {String}  Ex: 20
     */
    getWindGust: function() {
      var pLocale = ((TWC && TWC.Configs && TWC.Configs.dsx && TWC.Configs.dsx.locale) || (TWC && TWC.Titan && TWC.Titan.locale));
      if(pLocale && pLocale === "en_GB") {
        return this._get('wGstM');
      }
      return this._get('wGst'+this.getUser().getSpeedUnit());
    },

    /**
     * Wind speed in miles or kilometers per hour
     * @returns {String}  Ex: 20
     */
    getWindSpeed: function() {
      var pLocale = ((TWC && TWC.Configs && TWC.Configs.dsx && TWC.Configs.dsx.locale) || (TWC && TWC.Titan && TWC.Titan.locale));
      if(pLocale && pLocale === "en_GB") {
        return this._get('wSpdM');
      }
      return this._get('wSpd'+this.getUser().getSpeedUnit());
    },

    /**
     * Relative humidity
     * @returns {String}  Ex: 90 (Range: 0 - 100)
     */
    getHumidity: function() {
      return this._get('rH');
    },

    /**
     * UV index
     * @returns {String}  Ex: 8 (Range: 0 to 11 and 999)
     */
    getUVIndex: function() {
      return this._get('uvIdx');
    },

    /**
     * UV index description
     * @returns {String}  Ex: High (Range:  Extreme, High, Low, Minimal, Moderate, No Report, Not Available)
     */
    getUVDescription: function() {
      return this._get('uvDes');
    },

    /**
     * Barometric Trend Ascii representation
     * @returns {String}  Ex: Rising (Range: Falling, Falling Rapidly, Rising, Rising Rapidly, Steady)
     */
    getBarometricText: function() {
      return this._get('baroTrndAsc');
    },

    /**
     * Barometric Trend - Note - you cannot determine if pressure is rising or falling rapidly with this field, it is recommended you use baroTrndAsc
     * @returns {String}  Ex: 2 (Range: 0 = steady, 1 = rising, 2 = falling)
     */
    getBarometric: function() {
      return this._get('');
    },

    /**
     * Ceiling in feet or metters
     * @returns {String}  Ex: 20 (Range:  0 to 30000 or null)
     */
    getCeiling: function() {
      var unit = this.getUser().getSpeedUnit();
      return this._get('ceil'+ unit==='M' ? unit : '');
    },

    /**
     * Clouds for observations. Indicates if the sky is clear, few clouds, scattered clouds, broken layer of clouds or is completely overcast.
     * @returns {String}  Ex: SKC (Range: SKC,CLR,SCT,FEW,BKN,OVC)
     */
    getClouds: function() {
      return this._get('clds');
    },

    /**
     * Dewpoint Fahrenheit or Celsius
     * @returns {String}  Ex: 50 (Range: -80F - 100F or -62C - 37C)
     */
    getDewPoint: function() {
      return this._get('dwpt'+this.getUser().getTempUnit());
    },

    /**
     * Heat index fahrenheit - only usable above 70 degrees F or Celsius - only usable above 21 C
     * @returns {String}  Ex: 90
     */
    getHeatIndex: function() {
      return this._get('hI'+this.getUser().getTempUnit());
    },

    /**
     * Barometric pressure in millibars
     * @returns {String}  Ex: 1033.3
     * 12/12/13 DBlakely - Removed unit from returned value for ease of data validation module controllers
     */
    getPressure: function() {
      var unit = this.getUser().getPressureUnit();
      return (unit === 'mb' ? this._get('pres') : this._get('alt'));
    },

    /**
     * Pressure change - change in pressure over the last hour
     * @returns {String}  Ex:  -0,02
     */
    getPressureChange: function() {
      return this._get('presChnge');
    },

    /**
     * Visibility in miles - if greater than 120.0 default to 999 for unlimited or  in kilometers -if greater than 193.0 default to 999 for unlimited
     * @returns {String}  Ex: 10.08
     * 12/12/13 DBlakely - Removed unit from returned value for ease of data validation by module controllers
     */
    getVisibility: function() {
      return this._get('vis'+this.getUser().getSpeedUnit());
    },

    /**
     * Wind chill in fahrenheit - only use below 40 F - 24 hour value or in celsius - only use below 5 C - 24 hour value
     * @returns {String}  Ex: -25
     */
    getWindChill: function() {
      return this._get('wC'+this.getUser().getTempUnit());
    },

    /**
     * Obs qualifier severity rating
     * @returns {String}  Ex: 2
     */
    getQualifierSeverity: function() {
        return this._get('qulfrSvrty');
    },

    /**
     * Obs extended qualifier phrase
     * @returns {String}  Ex: It is now more than 25 degrees colder than it was yesterday at this time.
     */
    getQualifierPhrase: function() {
        return this._get('_extendedQulfrPhrase');
    },

    /**
     * Get Local observation time
     * @returns {String}  Ex. 2014-04-11T23:00:00.000+03:00
     */
    getLocalObsTime: function() {
      return this._get('_obsDateLocalTimeISO');
    }

  });
}]);;
/**
 * Created with JetBrains PhpStorm.
 * User: thomas.vo
 * Date: 9/9/13
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */
/* global twc */
/*jshint -W065 */

twc.shared.apps.factory('WxdLocModelClass',['RecordModel',function(RecordModel){
  return RecordModel.extend({
    recordType: 'loc',

    setResponse: function( response ) {
      this.data = response;
      this.header = "NA";
    },

    toSavedLocation: function(savedLocation) {
      var savedLocData = angular.copy(this.data);
      return savedLocation.fromDto(savedLocData);
    },

    getFullLocId: function() {
      return this._get('locId') + ':' + this._get('locType') + ':' + this._get('cntryCd');
    },

    getLocType: function() {
      return this._get('locType');
    },

    getLocId: function() {
      return this._get('locId');
    },

    getCountryCode: function() {
      return this._get('cntryCd');
    },

    getPresName: function() {
      return this._get('prsntNm');
    },

    getLatitude: function() {
      return this._get('lat');
    },

    getLongitude: function() {
      return this._get('long');
    },

    getTimezoneAbbrev: function() {
      return this._get('tmZnAbbr');
    },

    getGmtDiff: function() {
      return this._get('gmtDiff');
    },

    getZipCode: function() {
      return this._get('zipCd');
    },

    getGMTOffset: function() {
      return this._get('gmtDiff');
    },

    getGeocode: function () {
      return this._get('lat') + ',' + this._get('long');
    },

    getStateCode: function() {
      return this._get('stCd');
    },

    getStateName: function() {
      return this._get('stNm');
    },

    /**
     * Trying to standardize getters across wxdLoc, xwebLoc & savedLocations Models
     * @returns {*}
     */
    getState: function() {
      return this._get('stNm');
    },

    getCountry : function() {
      return this._get("_country");
    },

    getDaylightSavingsIndicator : function() {
      return this._get("dySTInd");
    },

    getDaylightSavingsActive: function() {
      return this._get("dySTAct");
    },

    getRegion : function() {
      return this._get('regSat');
    },

    getCity : function() {
      return this._get('cityNm');
    },

    getClsRad : function() {
      return this._get('clsRad');
    },

    getDmaCode : function() {
      return this._get('dmaCd');
    }
  });
}]);
;
/**
 * Author: ksankaran (Velu)
 * Date: 11/12/13
 * Time: 3:37 PM
 * Comments: This model contains two attributes key and name. Go for it.
 */
/* global twc */
/*jshint -W065 */

twc.shared.apps.factory('QLocModelClass',['RecordModel',function( RecordModel ) {
  return RecordModel.extend({
    recordType: 'QLocRecord',

    getKey: function() {
      return this._get('key');
    },

    getName: function() {
      return this._get('name');
    },

    setResponse: function( response ) {
      this.data = response;
      this.header = "NA";
    }
  });
}]);;
twc.shared.apps.factory("PcoProducts",["TwcModel","twcUtil","twcPco","$q",function(t,a,e,n){var s=t.extend({init:function(){this.fromDto(a.clone(e.get("products").getAttributes()))},onReady:function(t){n.all(e.get("products").promises).then(function(){t()})},getMapState:function(t){return this._get(t)||{}},getPangeaState:function(){return this._get("pangeaMap")||{}},saveMapState:function(t,a){var n={};n[t]=angular.extend(this.getMapState(t),a),this.set(n),e.setNodeValue("products",t,this.getMapState(t))},savePangeaState:function(t){this.set({pangeaMap:angular.extend(this.getPangeaState(),t)}),e.setNodeValue("products","pangeaMap",this.getPangeaState())},getPangeaBaseMap:function(){var t=this.getPangeaState();return t&&t.basemap},getBaseMap:function(t){var a=this.getMapState(t);return a&&a.basemap},getMapOpacityConfigs:function(t){return this.getMapState(t).opacity},getOpacityConfigs:function(){return this.getPangeaState().opacity},setPangeaBaseMap:function(t){this.savePangeaState({basemap:t})},setBaseMap:function(t,a){this.saveMapState(t,{basemap:a})}});return new s}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.products.model.class.factory.min.js.map
;
twc.shared.apps.factory("PcoProfile",["TwcModel","twcUtil","twcPco","$q",function(t,e,n,r){var i=t.extend({init:function(){this.fromDto(e.clone(n.get("profile").getAttributes()));var t=this;r.all(n.get("profile").promises).then(function(){t.fromDto(e.clone(n.get("profile").getAttributes()))})},getAddlParams:function(){return this._get("addlparams")},getLastModified:function(){return this._get("lastmodified")},getUpHostname:function(){return this._get("uphostname")},getUsername:function(){return this._get("username")},getUserId:function(){return this._get("userid")}});return new i}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.profile.model.class.factory.min.js.map
;
twc.shared.apps.service("twcLog",["twcPco",function(c){return c.get("twclog")}]).factory("PcoLog",["TwcModel","twcUtil","twcLog",function(c,r,t){return{debug:function(){t.debug.apply(t,Array.prototype.slice.call(arguments,0))},error:function(){t.error.apply(t,Array.prototype.slice.call(arguments,0))}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.twclog.model.class.factory.min.js.map
;
twc.shared.apps.factory("PcoSavedLocationModel",["TwcModel",function(t){return t.extend({toPcoData:function(){return this.attrs},fromPcoData:function(t){return this.set(t),this},setLongitude:function(t){return this._set("lon",t)},setLatitude:function(t){return this._set("lat",t)},setLocType:function(t){return this._set("locType",t)},setLocId:function(t){return this._set("locId",t)},getLocId:function(){return this._get("locId")},getId:function(){return this._get("id")},getLocType:function(){return this._get("locType")},getLatitude:function(){return this._get("lat")},getLongitude:function(){return this._get("long")},getGeocode:function(){return this._get("lat")+","+this._get("long")},getFullName:function(){return this._get("prsntNm")},setCountryCode:function(t){return this._set("cntryCd",t)},getCountryCode:function(){return this._get("cntryCd")},setLocationRecord:function(t){jQuery.extend(this.attrs,t.data)},setObservationRecord:function(t){this._observationRecord=t},getObservationRecord:function(){return this._observationRecord},markObservationRecordFetched:function(){return this._observationRecordFetched=!0,this},getIsObservationRecordFetched:function(){return!!this._observationRecordFetched},getNickname:function(){return this._get("nickname")},setNickname:function(t){return this._set("nickname",t)},getFullLocId:function(){return this.getLocId()+":"+this.getLocType()+":"+this.getCountryCode()},getCity:function(){return this.attrs.city?this._get("city"):this._get("cityNm")},getState:function(){return this.attrs.state?this._get("state"):this._get("stNm")},getCountry:function(){return this.attrs.countryName?this._get("countryName"):this._get("_country")},getStateName:function(){return this._get("stateName")},getBigCity:function(){return this._get("bigcity")},getCountryName:function(){return this.attrs.countryName?this._get("countryName"):this._get("_country")},getCityName:function(){return this._get("cityNm")},getStateCode:function(){return this._get("stCd")},getTag:function(){return this._get("tag")},getAddress:function(){return this._get("address")},getPosition:function(){return this._get("position")}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.savedLocation.model.class.factory.min.js.map
;
twc.shared.apps.service("twcPerf",["twcPco",function(c){return c.get("performance")}]).factory("PcoPerf",["TwcModel","twcUtil","twcPerf",function(c,l,r){return{logDsxCall:function(){r.log_dsx_call.apply(r,Array.prototype.slice.call(arguments,0))},log:function(){r.log.apply(r,Array.prototype.slice.call(arguments,0))}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.performance.model.class.factory.min.js.map
;
twc.shared.apps.factory("PcoAd",["TwcModel","twcUtil","twcPco","$q",function(t,e,n,o){var s=t.extend({init:function(){this.fromDto(e.clone(n.get("ad").getAttributes()));var t=this;o.all(n.get("ad").promises).then(function(){t.fromDto(e.clone(n.get("ad").getAttributes()))})},getCustom_Params:function(){return this._get("cust_params")},getAd_Positions:function(){return this._get("ad_positions")},getAdPromises:function(){return o.all(n.get("ad").promises)},getRefreshSlots:function(){return this._get("DFPSlots")}});return new s}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.ad.model.class.factory.min.js.map
;
twc.shared.apps.factory("PcoDevice",["TwcModel","twcUtil","twcPco","$q",function(e,t,n,r){var i=e.extend({init:function(){this.fromDto(t.clone(n.get("device").getAttributes()));var e=this;r.all(n.get("device").promises).then(function(){e.fromDto(t.clone(n.get("device").getAttributes()))})},onReady:function(e){r.all(n.get("device").promises).then(function(){e()})},getOpenDDRCrawler:function(){return this._get("OpenDDRCrawler")},getOpenDDRDesktop:function(){return this._get("OpenDDRDesktop")},getOpenDDRDevice:function(){return this._get("OpenDDRDevice")},getOpenDDRDisplay:function(){return this._get("OpenDDRDisplay")},getOpenDDRId:function(){return this._get("OpenDDRId")},getOpenDDRJS:function(){return this._get("OpenDDRJS")},getOpenDDRTablet:function(){return this._get("OpenDDRTablet")},getOpenDDRWireless:function(){return this._get("OpenDDRWireless")},getUserAgent:function(){return this._get("UserAgent")},getBrowserId:function(){return this._get("browserId")},getBrowserName:function(){return this._get("browserName")},getBrowserOS:function(){return this._get("browserOS")},getBrowserVer:function(){return this._get("browserVer")},getDClass:function(){return this._get("dClass")},getDClassVersion:function(){return this._get("dClassVersion")}});return new i}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.device.model.class.factory.min.js.map
;
twc.shared.apps.factory("pcoUser",["TwcModel","twcPco","twcUtil","$q","locUtil","PcoSavedLocationModel","customEvent","$filter",function(t,e,n,i,r,o,s,a){var c=t.extend({init:function(){this.fromDto(n.clone(e.get("user").getAttributes())),this._set("userpromise_wrapper",i.defer());var t=this;jQuery.when.apply($,e.get("user").promises).done(function(){t.fromDto(n.clone(e.get("user").getAttributes())),t._get("userpromise_wrapper").resolve()}),s.getEvent("preferred_location_change").progress(function(e){e&&e.locations&&t.set({preferredLocation:e.locations})}),s.getEvent("current_location_change").progress(function(i){t.fromDto(n.clone(e.get("user").getAttributes()))})},getUserPromises:function(){return this._get("userpromise_wrapper").promise},getGender:function(){return this._get("gender")},getPreferredDeclaration:function(){return this._get("preferredDeclaration")},getRmid:function(){return this._get("rmid")},getTimezoneOffset:function(){return this._get("tzOffset")},getTimeZoneAbbr:function(){var t=this._get("currentLocation");return t.tmZnAbbr},getFlashPlayerVersion:function(){return this._get("flash")},getBrowser:function(){return this._get("browser")},getAgeGroups:function(){return this._get("age")},getBackToPage:function(){return this._get("backTo")},getUnit:function(){return TWC.PcoUtils.getUserPreferedUnits()},getSpeedMeasure:function(){var t=TWC&&TWC.Configs&&TWC.Configs.dsx&&TWC.Configs.dsx.locale||TWC&&TWC.Titan&&TWC.Titan.locale;return t&&"en_GB"===t?"mph":"e"===this.getUnit()?"mph":"km/h"},getPressureUnit:function(){return"e"===this.getUnit()?"in":"mb"},getDistanceUnit:function(){return"e"===this.getUnit()?"mi":"km"},getSpeedUnit:function(){return"e"===this.getUnit()?"M":"K"},getTempUnit:function(){return"e"===this.getUnit()?"F":"C"},getAccumulationUnit:function(){return"e"===this.getUnit()?"in":"cm"},getPrecipUnit:function(){return"e"===this.getUnit()?"in":"mm"},getFreezingPoint:function(){return"F"===this.getTempUnit()?32:0},translateUnits:function(t){var e=a("pfTranslate"),n=e(t,{context:"weather_units"});return n},getSpeedMeasureLabel:function(){return this.translateUnits(this.getSpeedMeasure())},getPressureUnitLabel:function(){return this.translateUnits(this.getPressureUnit())},getDistanceUnitLabel:function(){return this.translateUnits(this.getDistanceUnit())},getSpeedUnitLabel:function(){return this.translateUnits(this.getSpeedUnit())},getTempUnitLabel:function(){return this.translateUnits(this.getTempUnit())},getAccumulationUnitLabel:function(){return this.translateUnits(this.getAccumulationUnit())},getPrecipUnitLabel:function(){return this.translateUnits(this.getPrecipUnit())},setTempUnit:function(t,n,i){var r,o;switch(t){case"F":r="e";break;default:r="m"}return this._set("unit",r),e.setNodeValue("user","userSpecifiedUnits",!0),o=e.setNodeValue("user","unit",r),o.then(n,i),this},getIsSignedIn:function(){return!!this.getSignedInToken()},getSignedInToken:function(){return this._get("signedIn")},getLocale:function(){return this._get("locale")},setLocale:function(t){return this._set("locale",t),e.setNodeValue("user","locale",t),this},getEditionLocale:function(){return this._get("editionLocale")},setEditionLocale:function(t,n,i){return this._set("editionLocale",t),promise=e.setNodeValue("user","editionLocale",t),promise.then(n,i),this},getPreferredLocation:function(){return this._get("preferredLocation")},getFullLocationList:function(){var t=this._get("savedLocations")||[],e=this._get("recentSearchLocations")||[];return t.concat(e)},getSavedLocations:function(){return n.map(this._get("savedLocations"),function(t){return(new o).fromPcoData(t)})},addSavedLocation:function(t){return this.addLocation(t,"saved"),this},removeSavedLocation:function(t){return this.removeLocation(t,"saved"),this},getRecentSearchLocations:function(){return n.map(this._get("recentSearchLocations"),function(t){return(new o).fromPcoData(t)})},addRecentSearchLocation:function(t){return this.addLocation(t,"recentSearch"),this},removeRecentSearchLocation:function(t){return this.removeLocation(t,"recentSearch"),this},addLocation:function(t,n){if(t){var i=!1,o=n+"Locations",s=this._get(o)||[],a="saved"===n?"recentSearch":"saved",c=a+"Locations",u=[];t=t.attrs?t.attrs:t,t=t.data?t.data:t;for(var g=0,h=s.length;g<h;g++)if(r.areLocationsEqual(t,s[g])){i=!0;break}for(var f=this._get(c)||[],l=0,d=f.length;l<d;l++)if(r.areLocationsEqual(t,f[l])){if("recentSearch"===a){this.removeLocation(f[l],a);break}i=!0}if(!i){u=this._get(o)||[],"saved"===n?u.push(t):this._get(o).unshift(t);var p=u.slice(0,Math.min(u.length,10));e.setNodeValue("user",o,p)}}},removeLocation:function(t,n){if(t){var i=n+"Locations",r=this._get(i);t=t.attrs?t.attrs:t,t=t.data?t.data:t;for(var o=r.length-1;o>=0;o--)if(r[o].locId===t.locId){r.splice(o,1);break}e.setNodeValue("user",i,r)}},updateLocation:function(t){if(t){var n=this._get("savedLocations");if(t=t.attrs?t.attrs:t,t=t.data?t.data:t,n&&angular.isArray(n))for(var i=0,o=n.length;i<o;i++)if(r.areLocationsEqual(t,n[i])){angular.extend(n[i],t);break}e.setNodeValue("user","savedLocations",n)}}});return new c}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.user.model.class.factory.min.js.map
;
twc.shared.apps.directive("twcGlomoLocationName",["$filter",function(t){"use strict";var o={scope:{twcLocationName:"="},link:function(o){var a=t("glomoLocationName");o.$watch("twcLocationName",function(t){o.$parent.presentationName=a(t)})}};return o}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_location_name/twc_location_name.directive.min.js.map
;
twc.shared.apps.service("twcPco",function(){return TWC.pco});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/pco.factory.min.js.map
;
twc.shared.apps.factory("PcoMetrics",["TwcModel","twcUtil","twcPco",function(t,e,c){var n=t.extend({init:function(){this.fromDto(e.clone(c.get("metrics").getAttributes()))},getPageName:function(){return this._get("pagename")}});return new n}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.metrics.model.class.factory.min.js.map
;
twc.shared.apps.factory("dynamicLocResolvedEvent",["customEvent",function(e){return e.getEvent("DYNAMIC_LOC_RESOLVED")}]).run(["$rootScope","$q","twcPco","PcoPage","pcoUser","customEvent","dynamicLocResolvedEvent","$filter","WxdLocModelClass",function(e,o,n,t,c,r,a,i,s){var u,g=window.jQuery;u=function(o,n,t,c){if(o){var r="loc"in o;e[n]=r?o:null,e[t]=r?o.loc:null,e[c]=r&&"prsntNm"in o?i("glomoLocationName")(o):null}},g.when.apply(g,n.get("page").promises).done(function(){var e=t._get("currentLocation");u(e,"pagelocation","pageLocId","pageLocName")}),g.when.apply(g,n.get("user").promises).done(function(){var e=c.getPreferredLocation(),o=c._get("currentLocation");u(e||o,"userlocation","userLocId","userLocName")}),g.when.apply(g,[].concat(n.get("page").promises,n.get("user").promises)).done(function(){var e,o=c.getPreferredLocation();e=function(){var e=t._get("currentLocation"),n=c._get("currentLocation");o=c.getPreferredLocation(),u(e&&!e.error?e:o||n,"dynamiclocation","dynamicLocId","dynamicLocName"),"resolved"!==a.state()&&a.resolve()},o||e(),r.getEvent("preferred_location_change").progress(function(o){e()}),r.getEvent("current_location_change").progress(function(o){e()})})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/pco.run.min.js.map
;
twc.shared.apps.factory("PcoPage",["TwcModel","twcUtil","twcPco","$q","$injector","$rootScope",function(t,e,r,n,o,i){var g=t.extend({construct:function(){this.attrs=r.get("page").getAttributes(),this._set("pagepromise_wrapper",n.defer());var t=this;jQuery.when.apply(jQuery,r.get("page").promises).done(function(){t.attrs=r.get("page").getAttributes();var e=t._get("currentLocation"),n=t._get("currentLocationModel");if(e&&!n){var i=o.has("WxdLocModelClass")&&o.get("WxdLocModelClass");i&&t.set({currentLocationModel:new i(e)})}t._get("pagepromise_wrapper").resolve()})},getCurrentLocId:function(){return this._get("currentLocId")},getCurrentLocation:function(){return this._get("currentLocation")},getGeocode:function(){var t=this.getCurrentLocation();return t.lat+","+t["long"]},getCurrentLocationModel:function(){return this._get("currentLocationModel")},getAMPM:function(){return this._get("ampm")},getEnv:function(){return this._get("env")},getFromString:function(){return this._get("fromStr")},getFV:function(){return this._get("fv")},getLanguage:function(){return this._get("lang")},getLocale:function(){return this._get("locale")},getServerDate:function(){return this._get("serverdate")},getServerTime:function(){return this._get("servertime")},getServerDay:function(){return this._get("serverday")},getServerHours:function(){return this._get("serverhrs")},getPagePromises:function(){return this._get("pagepromise_wrapper").promise},getBackToPage:function(){return this._get("backTo")},getPartner:function(){return this._get("partner")},getPageType:function(){return this._get("content")},getTimeZone:function(){return this._get("timezone")},getScreenSize:function(){return this._get("screenSize")}});return new g}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pco/models/pco.page.model.class.factory.min.js.map
;
!function(a,e){"use strict";e.shared.apps.factory("GlomoSocialAPI",["$window","$q","customEvent","httpclient",function(a,e,i,o){var n=e.defer(),r={url:"https://cdns.gigya.com/js/gigya.js",key:"2_zm_J-0UHOLnihq44PTNDi4NgoxbHWy24MhkmKlQMWPd3lOa1a-4r8uViC7HAu8Jr",params:{callback:a.apiConnectCallback}},t={apiLoaded:!1,params:{},getAPIUrl:function(){return r.url+"?apiKey="+r.key},onSocialAPIServiceReady:function(a){t.apiLoaded=!0,i.getEvent("socialApiLoaded").resolve(),n.resolve(a)},loadAPI:function(){return"undefined"!=typeof gigya||t.apiLoaded||"loading"===t.apiLoaded?n.resolve():(t.apiLoaded="loading",a.onGigyaServiceReady=t.onSocialAPIServiceReady,o.getScript({callback:function(){n.resolve()},url:t.getAPIUrl()})),n.promise},isAPIloaded:function(){return!(!0!==this.apiLoaded||!gigya)||"loading"!==this.apiLoaded&&(this.loadAPI(),!1)},connect:function(a){var i=e.defer();return r.params={provider:a,callback:function(a){i.resolve(a)}},t.loadAPI().then(function(){gigya.socialize.addConnection(r.params)}),i.promise}};return t}])}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/social_api/social_api.factory.min.js.map
;
!function(t,e,i,s){"use strict";i.shared.apps.factory("TagBuilder",["$location","twcConstant","twcUtil","socialConstants",function(i,n,r,a){function h(t,e,i){r.isString(t)?(this.name=t,this.value=e||"",this.primary=i||!1):r.isObject(t)&&(this.name=t.name||r.keys(t)[0],this.value=t.value||r.values(t)[0]||"",this.primary=t.primary||!1)}function o(t,i){this.name=this.tagName=t,this.attributes=[],r.isArray(i)?e.forEach(i,function(t){this.attributes.push(new h(t))},this):r.isObject(i)&&this.attributes.push(new h(i))}function u(t,e){o.call(this,t,e)}function c(t,e,i,s){s=s||null,u.call(this,e,s),this.type=t,this.name=e,this.tagName="meta",this.override=i||null,this.allowed=this.isAllowed(),this.head=this.getHeadTag()}var l=a.metaSchema;return h.prototype={name:null,primary:!1,value:null,isPrimary:function(){return this.primary||!1}},o.prototype={_action:"append",_added:!1,_exists:!1,_updated:!1,allowDuplicates:!1,attr:null,attributes:[],context:s,head:null,name:null,primaryAttribute:null,tag:null,tagName:null,utf:null,getContext:function(t){return this.context=t||s,this.context},setContext:function(t){this.context=t},getUtfTag:function(t){return this.utf&&!t||(this.utf=s.querySelector('meta[charset^="utf"]')),this.utf},getPrimaryAttribute:function(){return this.primaryAttribute?this.primaryAttribute:(this.attributes.length>0&&e.forEach(this.attributes,function(t){if(t.primary)return this.primaryAttribute=t,t},this),this.name?new h(this.attr,this.name,(!0)):{})},getSelector:function(){var t=this.primaryAttribute||this.getPrimaryAttribute();return this.tagName+"["+t.name+'="'+t.value+'"]'},getTag:function(t,e){return this.tag&&!e?this.tag:(t=this.getContext(t),this.tag=t.querySelector(this.getSelector()),this.tag)},exists:function(t){return this.allowDuplicates?this._exists=!1:(t=this.getContext(t),this._exists=!!t.querySelector(this.getSelector())),this._exists},create:function(){this.tag=s.createElement(this.tagName)},action:function(t,e,i){if(!t)return!1;switch(i=i?i:this.tag,e=this._action?this._action:e){case"prepend":t.prepend(i);break;case"after":t.after(i);break;case"before":t.before(i);break;default:t.append(i)}},append:function(t){var i=this;return!this.exists()&&(this.tag.onload=function(){i.exists()},t=this.getContext(t),t?this.action(e.element(t)):this.action(e.element("body")),!0)},addAttribute:function(t,e,i){this.attributes.push(new h(t,e))},setTagAttribute:function(t,i){e.forEach(this.attributes,function(e,s){i.name===t&&(e.value=i)})},setAttribute:function(e,i){this.tag||this.create(),t.PcoUtils.isElement(this.tag)&&this.tag.setAttribute(e,i),this.setTagAttribute(e,i)},setAttributes:function(){e.forEach(this.attributes,function(t,e){r.isObject(t)?this.setAttribute(t.name,t.value):r.isString(t)&&r.isString(e)&&this.setAttribute(e,t)},this)},addToDOM:function(t){return this.exists()||this._exists?new Error("Element already exists."):(t=this.getContext(t),!this.tag&&this.create(),this.setAttributes(),void(this._added=this.append(t)))}},u.prototype={},e.extend(u.prototype,o.prototype,{_action:"prepend",getHeadTag:function(t){return this.head&&!t||(this.head=s.getElementsByTagName("head")[0]),this.head},getContext:function(t){return this.context=t||this.getHeadTag()||s,this.context},__append:function(t){var i=this;return!this.exists()&&(this.tag.onload=function(){i.exists()},t=this.getContext(t),t?this.action(e.element(t)):this.action(e.element(this.getUtfTag()),"after"),!0)}}),c.prototype={},e.extend(c.prototype,u.prototype,{allowedProperties:[],attr:"name",content:null,fallback:null,override:null,tagName:"meta",type:null,getSelector:function(){return this.tagName+"["+this.attr+'="'+this.getPropertyName()+'"]'},getPropertyName:function(){return this.name.indexOf(":")>-1?this.name:this.type?this.type+":"+this.name:this.name},getMeta:function(t,e){return this.getTag(t,e)},setMeta:function(){this.tag||this.append(),this.setAttribute(this.attr,this.getPropertyName()),this.setAttribute("content",this.content||this.getContent()),this.setAttribute("updated","PageMetaTags")},update:function(){return!(!this.attr||!this.name)&&(this.setMeta(),void(this._updated=!0))},init:function(){this.isAllowed()&&(this.setContent(),this.exists()||this.addToDOM(),this.maybeOverride())},getCurrentContent:function(){return e.element(this.getMeta()).attr("content")},setContent:function(t){var e;t=t||this.override,t?(this.content=t,this.isoverride=!0,this.isfallback=!1):(e=this.getCurrentContent())?(this.content=e,this.isoverride=!1,this.isfallback=!1):(this.content=this.fallback,this.isoverride=!1,this.isfallback=!1)},getContent:function(t){return t=t||this.override,this.setContent(t),this.content},getAllowedProperties:function(t){return this.allowedProperties=l[this.type]||[],this.allowedProperties},isAllowed:function(){var t,e=this.getAllowedProperties();return!!r.isEmpty(e)||(t=e.indexOf(this.name),this.allowed=this.name===this.allowedProperties[t],this.allowed)},isFallback:function(){return this.content||this.setContent(),this.isfallback},isOverride:function(){return!(!this.override||""+this.override===this.getCurrentContent())},maybeOverride:function(){var t=this.isOverride();return t&&this.update(),t}}),{TagAttribute:h,Tag:o,HeadTag:u,HeadMetaTag:c}}])}(TWC,angular,twc,document);
//# sourceMappingURL=/sites/all/modules/glomo/shared/tag_builder/tag_builder.factory.min.js.map
;
!function(t,r){"use strict";r.shared.apps.factory("bitly",["$http","$q","twcUtil",function(t,r,e){var n="https://api-ssl.bitly.com",a="wxch.nl",o="7593fd3da379f2972e4ed6448cf0da3b6b595ebc",i={};return i.urlExists=function(r){var a={url:r,access_token:o};return t.get(n+"/v3/link/lookup?"+e.toQueryString(a)).then(function(t){var r=TWC.PcoUtils.getter(t,"data.data.link_lookup");return!(!r||r&&r[0].error)&&(r&&r[0].aggregate_link?r[0].aggregate_link:void 0)})},i.createShortUrl=function(r){var i={longUrl:r,domain:a,access_token:o};return t.get(n+"/v3/shorten?"+e.toQueryString(i)).then(function(t){var r=TWC.PcoUtils.getter(t,"data.data.url");return r?r.replace("bit.ly",a):""})},i.getShortUrl=function(t){var e=r.defer();return i.urlExists(t).then(function(r){r?e.resolve(r):i.createShortUrl(t).then(function(t){e.resolve(t)})}),e.promise},i}])}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/bitly/bitly.factory.min.js.map
;
!function(t,e){"use strict";e.shared.apps.factory("GlomoSocialMetaTags",["TagBuilder","twcConstant","twcUtil",function(e,a,i){function o(t,a){e.HeadMetaTag.call(this,null,t,a),this.attr="name",this.allowDuplicates=!0,this.init()}function n(t,a){e.HeadMetaTag.call(this,"twitter",t,a),this.attr="name",this.init()}function p(t,a){e.HeadMetaTag.call(this,null,t,a),this.attr="itemprop",this.init()}function s(t,a){e.HeadMetaTag.call(this,null,t,a),this.attr="itemtype",this.init(),this.addAttribute("itemscope","")}function r(t,a){e.HeadMetaTag.call(this,"og",t,a),this.attr="property",this.init()}function d(t,a){e.HeadMetaTag.call(this,"fb",t,a),this.attr="property",this.init()}function l(t,e){this["app:name:"+t]=new n("app:name:"+t,e.name),this["app:id:"+t]=new n("app:id:"+t,e.id),this["app:url:"+t]=new n("app:url:"+t,e.url)}function c(){Object.defineProperty(this,"tags",{value:null,enumerable:!0,writable:!0})}return o.prototype={},t.extend(o.prototype,e.HeadMetaTag.prototype),n.prototype={},t.extend(n.prototype,e.HeadMetaTag.prototype),p.prototype={},t.extend(p.prototype,e.HeadMetaTag.prototype),s.prototype={},t.extend(s.prototype,e.HeadMetaTag.prototype),r.prototype={},t.extend(r.prototype,e.HeadMetaTag.prototype),d.prototype={},t.extend(d.prototype,e.HeadMetaTag.prototype),c.prototype={},t.extend(c.prototype,{schema:a.microdata.schema,_add:function(t,a,i,o){var s,l=[t,a].join(":");switch(t){case"fb":s=new d(a,i,o);break;case"googleplus":s=new p(a,i,o);break;case"og":s=new r(a,i,o);break;case"twitter":s=new n(a,i,o);break;default:l=a,s=new e.HeadMetaTag("",a,i,o)}s=s.isAllowed()?s:null,s&&(this[l]=s)},addOTG:function(t,e,a){this.addOg(t,e,a),this.addTwitter(t,e,a),this.addGooglePlus(t,e,a)},addOT:function(t,e,a){this.addOg(t,e,a),this.addTwitter(t,e,a)},addOg:function(t,e,a){this._add("og",t,e,a)},addTwitter:function(t,e,a){this._add("twitter",t,e,a)},addGooglePlus:function(t,e,a){this._add("googleplus",t,e,a)},isEmpty:function(){return i.isEmpty(this.tags)}}),{WindowsMetaTag:o,TwitterMetaTag:n,GooglePlusMetaTag:p,SchemaMetaTag:s,OgMetaTag:r,FacebookMetaTag:d,AppTags:l,MetaTags:c}}])}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/metatags/metatags.factory.min.js.map
;
angular.module("gm_locations",["ngSanitize"]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/gm_locations.app.min.js.map
;
twc.shared.apps.factory("throttler",["$q","$window","twcUtil",function(n,t,e){var l=n.defer(),o=n.defer(),r=n.defer();return angular.element(t).bind("resize",e.throttle(function(){l.notify()},125)),angular.element(t).bind("orientationchange",e.throttle(function(){l.notify()},125)),angular.element(t).bind("scroll",e.debounce(function(){o.notify()},250)),angular.element(t).bind("scroll",e.throttle(function(){r.notify()},50)),{onResize:function(n,t){l.promise.then(null,null,n)},onScroll:function(n,t){o.promise.then(null,null,n)},onScrollThrottle:function(n){r.promise.then(null,null,n)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/throttled_events/throttle.factory.min.js.map
;
twc.shared.apps.directive("throttledEventsOnResize",["$parse","throttler",function(t,e){return{restrict:"A",link:function(i,n,r){if(r.throttledEventsOnResize){var h=t(r.throttledEventsOnResize);h&&e.onResize(function(){h(i,{width:n.width(),height:n.height()})})}}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/throttled_events/on_resize.directive.min.js.map
;
twc.shared.apps.directive("twcFbShare",["twcConstant",function(t){"use strict";return{scope:!0,replace:!1,transclude:!1,controller:["$scope","$element","$attrs","customEvent",function(e,o,i,c){o.bind("click",function(){return c.getEvent("socialApiLoaded").done(function(){var e=window.location.protocol.indexOf("http:")!==-1?"http://":"https://";i.fbDescription||(i.fbDescription="Visit www.weather.com for continuing coverage."),i.twcFbShare.indexOf("http://")<0&&i.twcFbShare.indexOf("https://")<0&&(i.twcFbShare=e+window.location.hostname+i.twcFbShare);var o=new gigya.socialize.UserAction;o.setTitle(i.fbTitle),o.setSubtitle(i.fbCaption||e+"www.weather.com"),o.setLinkBack(i.twcFbShare),gigya.socialize.postBookmark({provider:"facebook",url:i.twcFbShare,title:i.fbTitle,cid:i.fbCid,shortURLs:"always",thumbnailURL:i.fbPicture||t.assetsUrl+"240x180_twc_default.png",userAction:o})}),!1})}]}}]).directive("twcGplusShare",function(){"use strict";return{scope:!0,replace:!1,transclude:!1,controller:["$scope","$element","$attrs","customEvent",function(t,e,o,i){e.bind("click",function(){return i.getEvent("socialApiLoaded").done(function(){var t=window.location.protocol.indexOf("http:")!==-1?"http://":"https://";o.twcGplusShare.indexOf("http://")<0&&o.twcGplusShare.indexOf("https://")<0&&(o.twcGplusShare=t+window.location.hostname+o.twcGplusShare),gigya.socialize.postBookmark({provider:"googleplus",url:o.twcGplusShare,cid:o.twcGplusCid,shortURLs:"never"})}),!1})}]}}).directive("twcTwShare",function(){"use strict";return{scope:!0,replace:!1,transclude:!1,controller:["$scope","$element","$attrs","customEvent",function(t,e,o,i){e.bind("click",function(){return i.getEvent("socialApiLoaded").done(function(){var t=window.location.protocol.indexOf("http:")!==-1?"http://":"https://";o.twcTwShare.indexOf("http://")<0&&o.twcTwShare.indexOf("https://")<0&&(o.twcTwShare=t+window.location.hostname+o.twcTwShare),gigya.socialize.postBookmark({provider:"twitter",title:o.twTitle+"&via=weatherchannel",cid:o.twcTwCid,url:o.twcTwShare,shortURLs:"always"})}),!1})}]}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/social_links/social_links.directives.min.js.map
;
!function(){"use strict";twc.shared.apps.factory("PageIdentifier",["$window",function(e){function t(t){"undefined"==typeof t&&(t=TWC&&TWC.pco&&TWC.pco.get("page")&&TWC.pco.get("page").attributes&&TWC.pco.get("page").attributes.content);var a,i=e.location.pathname,c=i&&i.split("/");switch(t){case"video":var o=c[c.length-2];if("player"===o)a="video-standalone";else{var n=e.location.search.substring(1);a="video"===o?n.match(/pl=/)?"video-watch-playlist":"video-watch-collection":""}break;case"article":a="article-watch";break;case"index":a="collection-index";break;case"homepage":a="homepage";break;case"other":var r=c[1],s=c[c.length-1];"series"===r&&"video"===s?a="video-collection":"video"===s?a="video-index":"series"===r&&"news"===s?a="article-collection":"news"===s&&(a="article-index");break;default:a=""}return a}return{getPageId:t}}])}();
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/page_identifier/page_identifier.factory.min.js.map
;
twc.shared.apps.factory("DrupalSettings",["PcoPage",function(t){"use strict";return{getArticleUUID:function(){return window.Drupal&&window.Drupal.settings&&window.Drupal.settings.ct_article&&window.Drupal.settings.ct_article&&window.Drupal.settings.ct_article.article_uuid},getSettings:function(t){return Drupal.settings.twc.instance[t]},getContexts:function(){return Drupal.settings.twc.contexts},getContextArg:function(t){var n=this.getContexts();return!!n.hasOwnProperty(t)&&n[t].id},getLocation:function(n,e){var i=Drupal.settings.twc.contexts,s=e||"twclocation",r=n[s],c=t.getCurrentLocId();return i?i[r]&&i[r].is_page_loc&&c?{id:c}:i[r]:(n.id=r,n)},getLocId:function(t,n){return this.getLocation(t,n).id},getAsset:function(t){var n=Drupal.settings.twc.contexts;return n?n[t.twcasset]:(t.id=t.twcasset,t)},isArticle:function(){return!!Drupal.settings.ct_article},getModuleByName:function(t){return Drupal.settings.twc.modules&&Drupal.settings.twc.modules[t]},getAssetId:function(t){return this.getAsset(t).id},getInstanceIdBySettings:function(t){return Object.getKey(Drupal.settings.twc.instance,t)},getInstanceId:function(t){return Object.keys(Drupal.settings.twc.instance)[t]},getPathInfo:function(){var t=window.location.pathname.split("/");return t[t.length-1]}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/drupal_settings/drupal_settings.factory.min.js.map
;
angular.module("twc_dal",[]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/twc_dal_ng.app.min.js.map
;
angular.module("glomo_alert_factory",["twc_dal"]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_alert_factory/glomo_alert_factory.app.min.js.map
;
twc.shared.apps.factory("datefactory",["$locale","twcUtil","$log",function(t,e,n){function i(t,e,i){try{return new r(t,e,i)}catch(s){n.error(s)}return null}var r=function(n,i,r){var s=this,a=function(){function n(t,e,n){return t.concat(l.call(e,n))}function i(t,e,n){var i="";for(t<0&&(i="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),i+t}function r(t,e,n,r){return n=n||0,function(s){var a=s[d+t]();return(n>0||a>-n)&&(a+=n),0===a&&n===-12&&(a=12),i(a,e,r)}}function a(t,e){return function(n,i){var r=n[d+t](),s=f(e?"SHORT"+t:t);return i[s][r]}}function u(t){var e=-1*t.getTimezoneOffset(),n=e>=0?"+":"";return n+=i(Math[e>0?"floor":"ceil"](e/60),2)+i(Math.abs(e%60),2)}function h(){return s.tz}function o(t,e){return(t[d+"Hours"]()<12?e.AMPMS[0]:e.AMPMS[1]).toLowerCase()}function c(t,e){return o(t,e).toUpperCase()}var d,l=[].slice,f=function(t){return e.isString(t)?t.toUpperCase():t},g={yyyy:r("FullYear",4),yy:r("FullYear",2,0,!0),y:r("FullYear",1),MMMM:a("Month"),MMM:a("Month",!0),MM:r("Month",2,1),M:r("Month",1,1),dd:r("Date",2),d:r("Date",1),HH:r("Hours",2),H:r("Hours",1),hh:r("Hours",2,-12),h:r("Hours",1,-12),mm:r("Minutes",2),m:r("Minutes",1),ss:r("Seconds",2),s:r("Seconds",1),sss:r("Milliseconds",3),EEEE:a("Day"),EEE:a("Day",!0),a:o,A:c,Z:u,z:h},M=/((?:[^yMdHhmsaAZzE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|A|Z|z))(.*)/,D=/^\d+$/;return function(){function i(t){var e=t.match(r);if(e){var n=new Date(0),i=0,s=0,a=e[8]?n.setUTCFullYear:n.setFullYear,u=e[8]?n.setUTCHours:n.setHours;e[9]&&(i=int(e[9]+e[10]),s=int(e[9]+e[11])),a.call(n,int(e[1]),int(e[2])-1,int(e[3]));var h=int(e[4]||0)-i,o=int(e[5]||0)-s,c=int(e[6]||0),d=Math.round(1e3*parseFloat("0."+(e[7]||0)));return u.call(n,h,o,c,d),n}return t}var r=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(r,a){var u,h,o="",c=[];if(d=s.nativeDate?"get":"getUTC",a=a||"mediumDate",a=t.DATETIME_FORMATS[a]||a,e.isString(r)&&(r=D.test(r)?int(r):i(r)),e.isNumber(r)&&(r=new Date(r)),!e.isDate(r))return r;for(;a;)h=M.exec(a),h?(c=n(c,h,1),a=c.pop()):(c.push(a),a=null);return e.each(c,function(e){u=g[e],o+=u?u(r,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),o}}()}();if(this.format=function(t){return a(this.nativeDate||this.toUTCDateObject(),t)},this.toUTCDateObject=function(){return new Date(Date.UTC(this.year,this.month-1,this.day,this.hour||0,this.minute||0,this.second||0,0))},this.toDateObject=function(){return new Date(this.year,this.month-1,this.day,this.hour||0,this.minute||0,this.second||0,0)},this.getDayOfWeek=function(){return new Date(this.year,this.month-1,this.day).getDay()},this.toString=function(){return"DSXDate Object: "+this.date+" - "+this.time+" - "+this.tz},this.nativeDate=angular.isDate(n)&&n,this.tz=String(r||""),!this.nativeDate&&(this.date=String(n||""),this.time=String(i||""),this.date&&8===this.date.length&&(this.year=parseInt(this.date.substring(0,4),10),this.month=parseInt(this.date.substring(4,6),10),this.day=parseInt(this.date.substring(6),10)),this.time)){var u=parseInt(this.time.substring(0,2),10),h=parseInt(this.time.substring(2,4),10),o=parseInt(this.time.substring(4),10);this.hour=isNaN(u)?void 0:u,this.minute=isNaN(h)?void 0:h,this.second=isNaN(o)?void 0:o}},s={"new":function(){if(arguments[0]&&angular.isDate(arguments[0]))return i(arguments[0],null,arguments[1]);var t,e,n;if(arguments.length<=2)if(isNaN(arguments[0])){var r=arguments[0].match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);r&&r.length>=7&&(t=r[1]+r[2]+r[3],e=r[4]+r[5]+r[6],n=arguments[1])}else t=arguments[0].toString().slice(0,8),e=arguments[0].toString().slice(8),n=arguments[1];else 3===arguments.length&&(t=arguments[0],e=arguments[1],n=arguments[2]);return i(t,e,n)}};return s}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsx_date/dsx_date.factory.min.js.map
;
twc.shared.apps.factory("locUtil",["twcUtil",function(t){function n(n){if(!n)return null;if(t.isString(n)){if(5===(""+n).length&&!isNaN(n))return n+":4:US";if(8===n.length&&"US"===n.slice(0,2))return n+":1:US";if(2===n.split(",").length)return n;if((splitLength=n.split(":").length)>=2)return n+(2===splitLength?":US":"");if(3===n.split(":").length)return n}else{if(t.isNumber(n)&&5===n.toString().length)return n+":4:US";if(t.isObject(n)){if("lat"in n&&"lng"in n)return n.lat+","+n.lng;if("locId"in n&&"locType"in n&&"cntryCd"in n)return n.locId+":"+n.locType+":"+n.cntryCd}}return null}function i(t,i){return!(!t||!i)&&n(t)===n(i)}return{getFullLocId:function(t){return n(t)},areLocationsEqual:function(t,n){return i(t,n)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/loc_util/loc_util.factory.min.js.map
;
twc.shared.apps.run(["$locale",function(M){M.DATETIME_FORMATS.dsxShortDate="MMM, d",M.DATETIME_FORMATS.dsxLongDate="EEEE, MMM d",M.DATETIME_FORMATS.dsxMedium="MMM d, yyyy, h:mma z"}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsx_date/dsx_date.config.min.js.map
;
twc.shared.apps.factory("MouseBroadcast",["$rootScope",function(t){"use strict";var a=null,e=null,o={getLocation:function(){return angular.copy(a)},setLocation:function(o,n,c){a&&(e=a),a={x:c.pageX,y:c.pageY};var r=n.eventName?n.eventName+"-"+c.type+"-broadcast":c.type+"-broadcast";t.$broadcast(r,this.getLocation())}};return o}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/mouse_broadcast/mouse_broadcast.factory.min.js.map
;
twc.shared.apps.factory("AggregateUtil",["RecordUtil","Set",function(r,t){function n(t){var n=[];return angular.forEach(t,function(t){n.push(r.getRecordURL(t))}),n}function e(r){var n=[],e=[],a=99;angular.forEach(r,function(r){r.length<a&&(a=r.length),angular.forEach(r,function(r,e){n[e]=n[e]||new t,n[e].add(r)})});for(var o=0,c=a-1;o<c;o++){var u=n[o],i=u.getAll();if(u.hasKey("cms")&&i.length>1)throw"cms call cannot be aggregated.";if(1!==i.length)break;e.push(i[0])}return e}function a(r){for(var n=new t,e=0,a=r.length;e<a;e++){var o=r[e],c=o.length,u=o[c-1];if(!(u&&u.match&&u.match(/^([^:]+):([^:]+):([A-Z]{2})$/))){n=!1;break}n.add(u)}var i=n&&n.getAll();return!!(i&&1===i.length&&r.length>1)&&i[0]}function o(r){for(var t=e(r),n=a(r),o=[],c=0,u=r.length;c<u;c++){var i=r[c];t.length>0&&(i=i.slice(t.length)),n&&(i=i.slice(0,i.length-1)),o.push(i.join("/"))}return(t.length>0?t.join("/")+"/":"")+("("+o.join(";")+")")+(n?"/"+n:"")}return{getAggregatedURL:function(r){return o(n(r))}}}]).factory("ParamUtil",["twcConfig","twcUtil",function(r,t){function n(r,n){var a=e[n.recordType].recordConfig[n.recordName],o={};return a&&"paramFormat"in a&&(o=a.paramFormat(r,t)),o}var e=r.dsxclient;return{parseParams:function(r){var t={};return angular.forEach(r,function(r){r.custom_params&&(t=angular.extend(t,n(r.custom_params,r)))}),t}}}]).factory("RecordUtil",["twcConfig","twcUtil",function(r,t){var n=r.dsxclient;return{getRecordURL:function(r){if("url"in r)return r.url.split("/");var t=n[r.recordType].recordConfig[r.recordName],e=n[r.recordType].defaultPathFormat;return t&&t.pathFormat&&(e=t.pathFormat),e(r,n)},getRecordID:function(r){return"/"+t.removeDupChar(this.getRecordURL(r).join("/"),"/")},getUniqueKey:function(r){return"/"+t.removeDupChar(this.getRecordURL(r).join("/"),"/")+(r.custom_params?"-"+JSON.stringify(r.custom_params):"")}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.utils.min.js.map
;
twc.shared.apps.factory("dsxLocalCache",["$window","twcUtil","$log","$timeout","twcConfig","RecordUtil",function(e,t,i,o,a,r){var n=!1;try{n=!!("localStorage"in e&&e.localStorage)}catch(c){i.debug("Unable to access local storage. Going to make calls every time.")}var l={hasWebStorage:n,webStorage:n?e.localStorage:{},webStorageMax:a.dsxclient.cache_size,itemQueue:[],itemMap:{},expirationTime:a.dsxclient.cache_expiry,timeoutPromise:null,locale:a.dsxclient.locale,version:5},m={getStorageKey:function(){return"dsxcache"},deleteItem:function(e){if(e in l.itemMap){var i=l.itemMap[e];l.itemQueue=t.without(l.itemQueue,i),delete l.itemMap[e]}},getUnExpiredRecords:function(e){return t.filter(e,function(e){return!m.isExpired(e)})},storeInMemory:function(e,t){t.cacheKey=e,e in l.itemMap&&m.deleteItem(e),l.itemMap[e]=t,l.itemQueue.push(t)},writeToStorage:function(){l.timeoutPromise&&(l.timeoutPromise=o.cancel(l.timeoutPromise)&&!1),l.timeoutPromise=o(function(){var e=m.getUnExpiredRecords(l.itemQueue);if(e.length>l.webStorageMax){var t=e.length-l.webStorageMax;e=e.slice(t)}l.webStorage.setItem(m.getStorageKey(),angular.toJson({version:l.version,locale:l.locale,records:e}))},2e3)},init:function(){if(l.hasWebStorage)try{var e=l.webStorage.getItem(m.getStorageKey()),t=((new Date).getTime(),e?angular.fromJson(e):{});if(t&&t.version<5&&(window.localStorage.removeItem(m.getStorageKey()),window.TWC&&TWC.pco&&TWC.pco.get&&"e"!==TWC.pco.getNodeValue("user","unit")&&"en"===TWC.pco.getNodeValue("page","lang")&&TWC.pco.setNodeValue&&TWC.pco.setNodeValue("user","unit","e")),t.version&&t.version===l.version&&t.locale&&t.locale===l.locale){var o=m.getUnExpiredRecords(t.records);l.itemQueue=o,angular.forEach(o,function(e){l.itemMap[e.cacheKey]=e})}var a=window.explicit_location,n=window.explicit_location_obj,c=r.getRecordID({recordType:"wxd",recordName:"loc",fullLocId:a});if(a&&n&&!(c in l.itemMap)){var u={cacheKey:c,timestamp:(new Date).getTime()+1e4,doc:n,id:c,status:200};l.itemMap[c]=u,l.itemQueue.push(u)}m.writeToStorage()}catch(g){i.debug("Exception while trying to initialize webstorage cache. Resetting it."),l.webStorage.removeItem(m.getStorageKey())}},isExpired:function(e){var t=(new Date).getTime();return!("timestamp"in e)||e.timestamp<t},getExpirationTime:function(e){var t=(new Date).getTime(),i=l.expirationTime;if(e&&e.generatedTime&&e.cacheMaxSeconds&&e.currentTime){var o=e.cacheMaxSeconds-(e.currentTime-e.generatedTime);o>0&&(o<600||e.id&&(e.id.match(/\/loc\//)||e.id.match(/\/Astro\//)))&&(i=o)}return t+1e3*i}};return m.init(),{isEnabled:function(){return l.hasWebStorage},add:function(e,t){t&&l.hasWebStorage&&(m.storeInMemory(e,angular.extend(t,{timestamp:m.getExpirationTime(t),lscache:!0})),m.writeToStorage())},get:function(e){(new Date).getTime();return e in l.itemMap&&m.isExpired(l.itemMap[e])?null:l.itemMap[e]}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.cache.min.js.map
;
twc.shared.apps.factory("timeoutHttpIntercept",function(){return{request:function(e){return e.timeout=3e4,e}}}).config(["$httpProvider",function(e){e.interceptors.push("timeoutHttpIntercept")}]).factory("AsyncCallCounter",[function(){return{increment:function(){window.twc.async_calls=window.twc.async_calls?++window.twc.async_calls:1},decrement:function(){window.twc.async_calls>0&&--window.twc.async_calls}}}]).factory("dsxclient",["httpclient","twcConfig","$injector","twcUtil","Set","$log","PromisePool","PromisePoolStatusCodes","$q","RecordUtil","AggregateUtil","ParamUtil","PcoPerf","DsxClientPromise","DsxClientResponse","dsxLocalCache","AsyncCallCounter",function(e,r,t,n,a,c,o,i,s,l,d,u,f,g,h,m,p){function w(e){for(var r=0,t=e.length;r<t;r++){var n=e[r];if("recordType"in n&&"cache"in D[n.recordType]&&D[n.recordType].cache===!1||"recordType"in n&&D[n.recordType]&&D[n.recordType].recordConfig&&D[n.recordType].recordConfig[n.recordName]&&D[n.recordType].recordConfig[n.recordName].cache===!1||"cache"in n&&n.cache===!1)return!1}return!0}function y(e){return e.sort(function(e,r){return"recordName"in e&&"recordName"in r?e.recordName===r.recordName?0:e.recordName<r.recordName?-1:1:0})}function v(e,r){p.increment();var t=s.all(e),a=s.defer(),c=n.some(r,function(e){return!("$id"in e)}),o=c?a.promise:new g(t);return t.then(function(e){var t=e;e&&angular.isArray(e)&&e.length&&angular.isObject(e[0])&&"headers"in e[0]?angular.isArray(e)&&e.length&&(t=e[0]):t={lscache:!1,status:200,data:{body:e}};var i=!1;n.filter(r,{recordName:"MORecord"}).length>0&&(i=!0),i&&window.bar&&bar.timer("weatherdata.parse","Time it takes to parse the HTTP response for MORecord into a model").start();var s=new h(t,r);if(c)a.resolve(s);else{var l={};n.each(r,function(e){"$id"in e&&(l[e.$id]=s.getModel(e))}),i&&window.bar&&bar.timer("weatherdata.parse").end(),l.response=s,o.$setResults(l)}}),c&&t["catch"](function(e){a.reject(e)}),o["finally"](function(){p.decrement()}),o}var D=r.dsxclient,P=new o;return{getURLPath:function(e){return D.url+d.getAggregatedURL(e)},getURLParams:function(e,r){var t=u.parseParams(e),n=r;return n||(n={}),angular.extend(n,D.params,t),n},execute:function(r,t){var a=[],c=[],o=D.cache&&w(r);if(o){for(var s=0,d=r.length;s<d;s++){var u=r[s],g=l.getUniqueKey(u),h=!1,p=m.get(g);p&&!P.hasDefer(g)&&(P.createDefer(g),P.resolveDefer(g,p)),!p&&m.isEnabled()&&P.getStatus(g)===i.RESOLVED&&P.deleteDefer(g),P.hasDefer(g)&&(h=!0,f.logDsxCall(g,!0)),h||a.push(u),c.push(P.getPromise(g))}a=y(a)}else a=r;if(a.length>0){var C=n.chunk(a,10),T=this;angular.forEach(C,function(r){var n=T.getURLPath(r),a=new Date;f.logDsxCall("/"+n,!1);var i=T.getURLParams(r,t),s=e.jsonp(n,{params:i});s.then(function(e){var t={},c=new Date;if(f.logDsxCall("/"+n,!1,(c.getTime()-a.getTime())/1e3),e&&e.data&&e.data.body&&angular.isArray(e.data.body))for(var i=e.data.body,s=0,d=i.length;s<d;s++){var u=i[s];"id"in u&&(t[u.id]=u)}for(var g=0,h=r.length;g<h;g++){var p=r[g],w=l.getRecordID(p),y=l.getUniqueKey(p),v=t[w];o&&(m.add(y,v),P.resolveDefer(y,v))}}),s["catch"](function(e){if(o)for(var t=0;t<r.length;t++){var n=r[t],a=l.getUniqueKey(n);P.rejectDefer(a,e)}}),o||c.push(s)})}return c.length?v(c,r):null}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.factory.min.js.map
;
twc.shared.apps.factory("TwcDomEventOriginVerifier",["twcUtil","TwcClass","pcoUser",function(i,n,t){var r=0,e="twcDomEventOriginVerifier";return n.extend({construct:function(i,n){this.id=r++,i&&(this.setOriginator(i),n&&this.bindEvents(n))},setOriginator:function(i){this.originator=angular.element(i)},bindEvents:function(n){n=i.isArray(n)?n:n.split(/\s+/);var r=i.reduce(n,function(i,n){return i+(n?n+"."+e+" ":"")},""),o=this;t.getBrowser().ltIE9?this.originator.on(r,function(i){i.originalEvent&&(i.originalEvent.data=e+":"+o.id)}):this.originator.on(r,function(i){i.originalEvent&&(i.originalEvent[e]=o.id)})},cleanUp:function(){this.originator&&this.originator.off("."+e)},verifyOrigin:function(i){return i=i.originalEvent||i,t.getBrowser().ltIE9?i.data===e+":"+this.id:i[e]===this.id},test:function(i){return this.verifyOrigin(i)}})}]).factory("eventOrigin",["TwcDomEventOriginVerifier",function(i){return{init:function(n){var t=n.scope,r=n.event||n.events,e=n.origin,o=new i(e,r);return t.$on("$destroy",function(){o.cleanUp()}),o}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dom_event_origin_verifier/dom_event_origin_verifier.factory.min.js.map
;
twc.shared.apps.factory("DsxClientPromise",["TwcClass","$injector","$q","twcUtil",function(t,n,s,e){return t.extend({constructor:function(t){this._promise=t,this._results={}},$setResults:function(t){e.extend(this._results,t)},then:function(t,s){var e=[],i=this;return e.push(t&&function(){return n.invoke(t,null,i._results)}),e.push(s&&function(){return s.apply(null,arguments)}),this._promise.then.apply(this._promise,e)},"catch":function(t){return this.then(null,t)},"finally":function(t){return this._promise["finally"](t)},addResultsTo:function(t){var n=this;return this._promise.then(function(){e.extend(t,n._results)}),this}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.promise.min.js.map
;
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t,s){"use strict";var i="drilldown",e="data-next-parent",n={event:"click",selector:"a",speed:300,cssClass:{container:i+"-container",root:i+"-root",sub:i+"-sub",back:i+"-back"}},o=function(){function o(s,e){var o=this;this._name=i,this._defaults=n,this.element=s,this.$element=t(s),this.options=t.extend({},n,e),this._history=[],this._css={"float":"left",width:null},this.$container=this.$element.find("."+this.options.cssClass.container),this.$element.on(this.options.event+"."+i,this.options.selector,function(s){h.call(o,s,t(this))})}function h(t,s){var i=s.nextAll("."+this.options.cssClass.sub),e=!0;i.length?a.call(this,i):s.closest("."+this.options.cssClass.back).length?r.call(this):e=!1,e&&"A"===s.prop("tagName")&&t.preventDefault()}function a(t,i){var n=i&&i.speed!==s?i.speed:this.options.speed;t.length&&(this._css.width=this.$element.outerWidth(),this.$container.width(2*this._css.width),t.parent().attr(e,!0),t=t.removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root),this.$container.append(t),c.call(this,{marginLeft:-1*this._css.width,speed:n},function(){var s=t.prev();this._history.push(s.detach()),l.call(this,t)}.bind(this)))}function r(t){var i=t&&t.speed!==s?t.speed:this.options.speed,n=this._history.pop();this._css.width=this.$element.outerWidth(),this.$container.width(2*this._css.width),this.$container.prepend(n),c.call(this,{marginLeft:0,speed:i},function(){var t=n.next();t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root),this.$container.find("["+e+"]").last().removeAttr(e).append(t),l.call(this,n)}.bind(this))}function c(t,s){var i=this.$container.children("."+this.options.cssClass.root);i.css(this._css),i.first().animate({marginLeft:t.marginLeft},t.speed,s)}function l(t){t.css({"float":"",width:"",marginLeft:""}),this.$container.css("width","")}return o.prototype={destroy:function(){this.reset(),this.$element.off(this.options.event+"."+i,this.options.selector)},reset:function(){var t;for(t=this._history.length;t>0;t--)r.call(this,{speed:0});this._history=[],this._css={"float":"left",width:null}}},o}();t.fn[i]=function(s){return this.each(function(){var e=t.data(this,i),n=s;e?"string"==typeof n&&("destroy"===n&&t.removeData(this,i),"function"==typeof e[n]&&e[n]()):t.data(this,i,new o(this,s))})}});
//# sourceMappingURL=/sites/all/modules/glomo/shared/drilldown/vendor/jquery.drilldown.min.js.map
;
twc.shared.apps.factory("customEvent",function(){"use strict";return TWC.Events});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/custom_event/custom_event.factory.min.js.map
;
twc.shared.apps.config(["twcConfigProvider",function(e){e.add({dsxclient:{cache:!0,cache_size:70,cache_expiry:60,locale:TWC.Configs.dsx.locale,url:TWC.Configs.dsx.host,version:"v2",cmsVersion:TWC.Configs.dsx.cmsVersion,addLocale:!("v4"!==TWC.Configs.dsx.cmsVersion||!TWC.Configs.dsx.locale),params:{jsonp:"JSON_CALLBACK",api:TWC.Configs.dsx.apiKey},wxd:{records:{astro:"Astro",airportDelay:"ADRecord",observation:"MORecord",dailyForecast:"DFRecord",hourly:"DHRecord",daypart:"DDRecord",dailyInternational:"DIRecord",airQuality:"ESRecord",flightArrival:"FARecord",flu:"FURecord",bulletin:"BERecord",nowcast:"NCRecord",intraday:"IFRecord",index:"IDRecord",interstate:"Interstate",moon:"Moon",lightning:"LGRecord",pastObsAvg:"PastObsAvg",precipitation:"PERecord",pollen:"Pollen",pollenObserved:"PLRecord",hurricaneTracker:"HTRecord",tide:"TIRecord",pollenUk:"UPRecord",hurricaneProjection:"HPRecord",ski:"SKRecord",stormReport:"SRRecord",locFull:"LFRecord",loc:"loc",marine:"WMRecord",wv:"WVRecord",ww:"WWRecord",zipMapping:"ZFRecord",climo:"Climatology",mappoint:"mappoint",wwir:"wwir",hiradff:"HiRadFF",alertStates:"AlertsStates",alertArea:"AlertsArea",alertLocations:"AlertLocations",farmingAlmanac:"FarmingAlmanacRecord",NationalFlu:"NationalFlu",PastFlu:"PastFlu",fifteenDayForecast:"FifteenDayForecast",ObservedPollen:"PLRecord",PastPollen:"PastPollen",PollenHotSpots:"PollenHotSpots",HurricaneTracker:"HTRecord",HurricanePath:"HPRecord",ActiveTrop:"ActiveTrop",TropicalStorms:"TropicalStorms",SRRecord:"SRRecord",TropicalBulletins:"TropicalBulletins",StormMap:"StormMap"},defaultPathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.fullLocId]},recordConfig:{AlertsStates:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,"alerts","states"]}},AlertsArea:{pathFormat:function(e,o){return["wxd",e.version||o.version,"alerts","area",e.locale||o.locale,e.fullLocId]}},AlertLocations:{pathFormat:function(e,o){return["wxd",e.version||o.version,"alerts","alertLocations",e.locale||o.locale,e.twcIId]}},FarmingAlmanacRecord:{pathFormat:function(e,o){return["wxd",e.version||o.version,"FarmingAlmanac",e.locale||o.locale,e.date,e.fullLocId]}},BERecord:{type:"array",pathFormat:function(e,o){return e.areaId&&e.office&&e.phenomena&&e.significance&&e.etn?["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.areaId,e.office,e.phenomena,e.significance,e.etn]:["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.fullLocId]}},DDRecord:{type:"collection"},DFRecord:{type:"collection"},DHRecord:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,"DHRecord",e.locale||o.locale,e.fullLocId]}},PERecord:{type:"collection"},IFRecord:{type:"collection"},DIRecord:{type:"collection"},Pollen:{type:"collection"},PollenHotSpots:{type:"array"},PLRecord:{type:"simple"},IDRecord:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.indexType||1,e.fullLocId]}},ESRecord:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.airQualityType||"F",e.fullLocId]}},loc:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.fullLocId||e.lat+","+e.lng]}},Moon:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.days||1,e.fullLocId]}},Climatology:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.month+(e.date?"-"+e.date:""),e.count||1,e.fullLocId]}},PastObsAvg:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.date,e.numOfDays||1,e.fullLocId]}},mappoint:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.key]}},HiRadFF:{type:"collection",model:"WxdHiRadFFModelClass",responseFormat:{data:"HiRadFFData",header:"HiRadFFHdr"},pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.fullLocId]}},Astro:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.date,e.numOfDays||1,e.fullLocId]}},NationalFlu:{type:"collection",pathFormat:function(e,o){return e.date?["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.date]:["wxd",e.version||o.version,e.recordName,e.locale||o.locale]}},PastFlu:{type:"collection,",pathFormat:function(e,o){return e.numReports?["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.numReports,e.state]:["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.state]}},FifteenDayForecast:{type:"collection",model:"WxdFifteenDayForecastModelClass",responseFormat:{data:"fcstdaily15alluoms.forecasts",header:"metadata"},pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName?"15DayForecast":"",e.locale||o.locale,e.fullLocId]}},PastPollen:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.date,e.numOfDays||1,e.fullLocId]}},HTRecord:{type:"array",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.stormId]}},HPRecord:{pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale,e.stormId]}},ActiveTrop:{pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.locale||o.locale]}},TropicalStorms:{pathFormat:function(e,o){var r=["wxd",e.version||o.version,e.recordName];return e.years&&r.push(e.years),r}},SRRecord:{type:"collection",pathFormat:function(e,o){var r=["wxd",e.version||o.version,e.recordName,e.locale||o.locale];return"none"!==e.type?r.push("type",e.type):r.push("type","none"),"none"!==e.date?r.push("date",e.date):r.push("date","none"),"none"!==e.state?r.push("state",e.state):r.push("state","none"),"none"!==e.start&&(r.push("pg",e.start),"none"!==e.maxPerPage&&r.push(e.maxPerPage)),r}},TropicalBulletins:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName]}},StormMap:{type:"collection",pathFormat:function(e,o){return["wxd",e.version||o.version,e.recordName,e.stormId]}}}},q:{recordConfig:{loc:{type:"array",pathFormat:function(e,o){var r=[];return e.country&&e.region&&e.key?r.push(e.country,e.region,e.key):(e.locType&&r.push(e.locType),r.push(e.key)),["q",e.version||o.version,"loc",e.locale||o.locale].concat(r)}},"loc.near":{type:"collection",model:"QLocModelClass",pathFormat:function(e,o){return["q",e.version||o.version,"loc.near",e.locale||o.locale,e.locType,e.zoom,e.lat+","+e.lon]}}}},survey:{recordConfig:{getEverything:{type:"collection",pathFormat:function(e,o){return["v1","survey"]}},getTemplate:{type:"collection",pathFormat:function(e,o){return["v1","survey","template"]}},getResults:{type:"collection",pathFormat:function(e,o){return["v1","survey","results"]}},setResults:{type:"collection",pathFormat:function(e,o){return["v1","survey","results"]}}}},cms:{defaultPathFormat:function(e,o){return o.addLocale?["cms",e.cmsVersion||o.cmsVersion,"assets",o.locale]:["cms","assets"]},recordConfig:{a:{type:"array",transformParamMap:{DMA:"tags.geo.DMA",wxlow:"tags.wx.low",wxhigh:"tags.wx.high",keyword:"tags.keyword",city:"tags.geo.city",state:"tags.geo.state",loc:"tags.loc"},transformParam:function(e,o,r){return e+":$"+r+"("+o+")"},paramFormat:function(e){var o={};if(e.query){for(var r=e.query,a=[],t=0,n=r.length;t<n;t++){var s=r[t],c=[],l=this;for(var i in s)if(s.hasOwnProperty(i)){var d=s[i],m=i.split("|"),u=m.length>1?m[1]:"in";i=m[0];var p="";if(angular.isArray(d)){for(var v=d.slice(0),h=0,f=v.length;h<f;h++)v[h]="'"+v[h]+"'";p=v.join(",")}else p="'"+d+"'";c.push(l.transformParam(l.transformParamMap[i]?l.transformParamMap[i]:i,p,u))}a.push(c.join(";"))}a.length>0&&(o.q=a)}return"undefined"!=typeof e.start&&"undefined"!=typeof e.end?o.pg=e.start+","+e.end:o.pg="0,10",o}},aidQ:{model:"CmsAModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"a",o.locale,e.assetId]:["cms","a",e.assetId]}},querySet:{model:"CmsAModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"query-set","en_US",e.assetId]:["cms","query-set",e.assetId]}},aImg:{model:"CmsAModelClass",pathFormat:function(e,o){return["cms","a",e.assetId]}},videoAssetWithColl:{model:"VideoAssetModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"asset-collection",o.locale,e.assetId]:["cms","asset-collection",e.assetId]}},ugcAssetWithColl:{model:"UGCAssetModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"asset-collection",o.locale,e.assetId]:["cms","asset-collection",e.assetId]}},ugc:{model:"UGCAssetModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"a",o.locale,e.assetId]:["cms","a",e.assetId]}},video:{model:"VideoAssetModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"a",o.locale,e.assetId]:["cms","a",e.assetId]}},slideshow:{model:"CmsAModelClass",pathFormat:function(e){return["cms","assets","slideshow",e.assetId,(e.startIndex||0)+","+(e.count||50)]}},nextarticle:{model:"CmsNextArticleModelClass",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"nextArticle",o.locale,e.assetId]:["cms","nextArticle",e.assetId]}},collections:{pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"collections",o.locale,e.path]:["cms","collections",e.path]}},adDataServer:{model:"CmsAdDataServerPoiClass",type:"array",pathFormat:function(e){return["cms","AdDataServer","poi",e.sponsorId,e.tileId]}},BreakingNow:{pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"settings",o.locale,"breakingnow"]:["cms",e.version||o.version,"settings/breakingnow"]}},AssetList:{model:"CmsAssetListModelClass",type:"array",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"asset-list",o.locale,e.listName,(e.startIndex||0)+","+(e.count||20)]:["cms",e.version||o.version,"asset-list",e.listName,(e.startIndex||0)+","+(e.count||20)]}},orderedlist:{pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"orderedlist",o.locale,"video",e.path]:["cms","orderedlist/video",e.path]}},playlist:{model:"VideoAssetModelClass",type:"array",pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"orderedlist",o.locale,"video",e.path]:["cms","orderedlist/video",e.path]}},affiliateVideos:{pathFormat:function(e,o){return o.addLocale?["cms",o.cmsVersion,"dma",o.locale,e.dma]:["cms",e.version||o.version,"dma",e.dma]}}}},cs:{recordConfig:{datetime:{pathFormat:function(e,o){return["cs",e.version||o.version,"datetime",e.locale||o.locale,e.fullLocId]}}}},maps:{records:{series:"series",radar:"radar",rwi:"rwi",hiradClouds:"hirad_clouds",hiradTemp:"hirad_temp",hiradWindSpeed:"hirad_windSpeed",hiradUV:"hirad_UV"},recordConfig:{series:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series"]}},radar:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/radar"]}},rwi:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/rwi"]}},hirad_clouds:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/hirad_clouds"]}},hirad_temp:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/hirad_temp"]}},hirad_windSpeed:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/hirad_windSpeed"]}},hirad_UV:{pathFormat:function(e,o){return["maps",e.version||o.version,"i/series/hirad_UV"]}}}},xweb:{records:{webdailyForecast:"WebDFRecord",webhourly:"WebDHRecord",loc:"loc",webLoc:"WebLoc",commuter:"CommutercastRecord",social:"social",photos:"photos",titanDaily:"TitanDaily"},recordConfig:{WebDFRecord:{type:"collection",pathFormat:function(e,o){return["x",e.version||o.version,"web/WebDFRecord",e.locale||o.locale,e.fullLocId]}},TitanDaily:{type:"collection",model:"XwebWebDFRecordModelClass",responseFormat:{data:"WebDFData",header:"WebDFHdr"},pathFormat:function(e,o){return["x-web",e.version||o.version,"titan-daily",e.locale||o.locale,e.fullLocId]}},CommutercastRecord:{pathFormat:function(e,o){return["x-web",e.version||o.version,"commutercast",e.locale||o.locale,e.hourIndex,e.fullLocId]}},WebDHRecord:{type:"collection",pathFormat:function(e,o){return["x",e.version||o.version,"web/WebDHRecord",e.locale||o.locale,e.fullLocId]}},social:{pathFormat:function(e,o){return["x",e.version||o.version,"social",e.path]}},photos:{model:"XwebPhotosModelClass",type:"array",pathFormat:function(e,o){return["x",e.version||o.version,"social",e.path,[e.pageStart,e.pageEnd].join(",")]}},WebLoc:{cache:!1,type:"array",pathFormat:function(e,o){var r=[];return e.proximity?r=["x",e.version||o.version,"web/loc.near",e.locType,e.zoom,e.lat+","+e.lon]:(r=["x",e.version||o.version,"web/loc",e.locale||o.locale],e.locTypes&&(angular.isArray(e.locTypes)?r.push.apply(r,e.locTypes):r.push(e.locTypes)),e.country&&(e.country.code?r.push(e.country.code+(e.country.boost?"^":"")):r.push(e.country)),e.region&&r.push(e.region),e.term&&r.push(e.term)),r}},WebLocNear:{type:"array",pathFormat:function(e,o){return["x",e.version||o.version,"web/loc.near",e.locale||o.locale,e.locType,e.zoom,e.lat+","+e.lon]}},loc:{type:"array",pathFormat:function(e,o){var r=[];return e.locType&&r.push(e.locType),r.push(e.key),["x",e.version||o.version,"web","loc",e.locale||o.locale].concat(r)}}}},xmweb:{records:{mwebdailyForecast:"MWebDFRecord"},recordConfig:{MWebDFRecord:{type:"collection",pathFormat:function(e,o){return["x",e.version||o.version,"mweb/MWebDFRecord",e.locale||o.locale,e.fullLocId]}}}},u:{records:{user:"user"},recordConfig:{user:{model:"UUserIdModelClass",pathFormat:function(e,o){return["u",e.version||o.version,e.userId]}}}},xreboot:{records:{bulletin:"BERecord"},recordConfig:{BERecord:{type:"array",pathFormat:function(e,o){return["x",e.version||o.version,"reboot",e.recordName,e.fullLocId]}}}}}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.config.min.js.map
;
twc.shared.apps.factory("MemCache",["TwcClass",function(t){return t.extend({construct:function(){this.data={}},put:function(t,n){this.data[t]=n},hasKey:function(t){return t in this.data},get:function(t){return this.data[t]}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/pagecache/pagecache.factory.min.js.map
;
twc.shared.apps.value("PromisePoolStatusCodes",{PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}).factory("PromisePool",["TwcClass","$q","PromisePoolStatusCodes",function(t,e,s){return t.extend({construct:function(){this.data={},this.status={}},getPromise:function(t){return this.createDefer(t),this.data[t].promise},hasDefer:function(t){return t in this.data},createDefer:function(t){this.hasDefer(t)||(this.data[t]=e.defer(),this.status[t]=s.PENDING)},deleteDefer:function(t){delete this.data[t],delete this.status[t]},resolveDefer:function(t,e){this.hasDefer(t)&&(this.data[t].resolve(e),this.status[t]=s.RESOLVED)},rejectDefer:function(t,e){this.hasDefer(t)&&(this.data[t].reject(e),this.status[t]=s.REJECTED)},getStatus:function(t){return this.status[t]}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/promise_pool/promise_pool.factory.min.js.map
;
twc.shared.apps.factory("httpclient",["$http","twcUtil","PcoDevice","twcConfig",function(e,t,r,a){var n=angular.element,c=function(){function e(e,t,a){return a.async=!0,e.scriptCharset&&(a.charset=e.scriptCharset),a.src=e.url,a.onload=a.onreadystatechange=function(r,n){(n||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,a.parentNode&&e.remove&&a.parentNode.removeChild(a),n||t(200,"success"))},r.insertBefore(a,r.firstChild),a}var r=document.head||jQuery("head")[0]||document.documentElement;return{cache:{},getScript:function(r){var a,c,o;if(angular.isObject(r)||(r={url:arguments[0],callback:arguments[1],attrs:arguments[2]}),t.defaults(r,{url:"",callback:angular.noop,attrs:{},remove:!0}),a=r.url,c=r.callback,o=r.attrs,this.cache[a])this.cache[a].done(c);else{var i=this.cache[a]=n.Deferred();i.done(c);var s=n(document.createElement("script"));s.attr(o),e(r,function(){i.resolve()},s[0])}}}}();return{jsonp:function(t,a){return t.indexOf("MORecord")>-1&&window.bar&&bar.timer("weatherdata.request","Time it takes to make a request for MORecord"),"Firefox"===r.getBrowserName()&&t.match(/wxd\/|cs\//)&&jQuery.extend(a.params,{_:(new Date).getTime()}),e.jsonp(t,a).then(function(e){return window.bar&&bar.timer("weatherdata.request").end(),e})},getScript:function(e){return c.getScript.apply(c,arguments)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/httpclient/httpclient.factory.min.js.map
;
twc.shared.apps.factory("DsxClientResponse",["TwcModel","$log","twcConfig","twcUtil","$injector","RecordUtil","$parse",function(e,r,t,o,n,a,d){function i(e,t){if(!e||!e.id||"error"in e||!e.doc)return null;var a,i,c="DsxModel";if("recordType"in t&&"recordName"in t){var l=t.recordType;c=t.recordName,i=s[l].recordConfig[c],a=o.capitalize(l)+o.capitalize(c)+"ModelClass",i&&"model"in i&&(a=i.model)}t&&"model"in t&&(a=t.model);var p=!!a&&n.has(a)&&n.get(a);p||(r.debug((a?a:"_NULL_")+" not found. Returning RAW response."),a="ResponseModel",p=n.get("ResponseModel").extend({}),p.prototype.recordType=c);var u,f,g,y,h=[],v=!0;if(i&&i.type&&"collection"===i.type){if(c.indexOf("Record")!==-1||"responseFormat"in i){v=!1;var R,m;if(i.responseFormat?(R=i.responseFormat.data,m=i.responseFormat.header):(R=/(.*)Record/.exec(c)[1]+"Data",m=/(.*)Record/.exec(c)[1]+"Hdr"),u=e.doc[m],f=e.doc[R],!f)try{f=d(R)(e.doc)}catch(M){r.debug("Error trying to parse the record data: ",R)}for(g=0,y=f.length;g<y;g++){var w={};w[m]={},w[R]=f[g],h.push(new p(w,a))}var x=n.get("RecordCollection").extend({});return x.prototype.recordType=c,new x({items:h,header:u})}}else if(i&&i.type&&"array"===i.type){if(v=!1,f=e.doc,angular.isArray(f))for(g=0,y=f.length;g<y;g++)h.push(new p(f[g],a));return h}return v?new p(e.doc,a):void 0}var s=t.dsxclient;return e.extend({construct:function(e,r){this.attrs=e,this.attrs.responseMap={},this.attrs.rawResponseMap={},this.process(e,r)},process:function(e,r){var t=this.get("responseMap"),o=this.get("rawResponseMap");if(e&&e.data&&e.data.body&&angular.isArray(e.data.body))for(var n=e.data.body,d=0,i=n.length;d<i;d++){var s=n[d];s&&"id"in s&&(o[s.id]=s)}if(r&&r.length>0){angular.forEach(r,function(e){var r=a.getRecordID(e),n=a.getUniqueKey(e);t[n]=o[r]})}},getModel:function(e){if(angular.isObject(e)){var r=this._get("responseMap")[a.getUniqueKey(e)];return r?i(r,e):null}return null},getLocation:function(e){return this.getModel({recordType:"wxd",recordName:"loc",fullLocId:e})}})}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/dsxclient.response.min.js.map
;
twc.shared.apps.factory("ResponseModel",["TwcClass",function(e){return e.extend({setResponse:function(e){this.data=e},_get:function(e){return this.data?this.data[e]:""},set:function(e){angular.extend(this.data,e)},construct:function(e,t){this.className=t,this.setResponse(e)}})}]).factory("RecordModel",["ResponseModel",function(e){return e.extend({setResponse:function(e){var t=/(.*)Record/.exec(this.recordType)[1]+"Data",n=/(.*)Record/.exec(this.recordType)[1]+"Hdr";this.header=e[n],this.data=e[t]},getHeader:function(){return this.header},getRecordUpdatedTime:function(e){var t="_procTmLocal";return e&&(t=e),this.header&&this.header[t]?this.header[t]:""}})}]).factory("RecordCollection",["ResponseModel",function(e){return e.extend({setResponse:function(e){this.header=e.header,this.items=e.items},getHeader:function(){return this.header},getItems:function(){return this.items},getRecordUpdatedTime:function(e){var t="_procTmLocal";return e&&(t=e),this.header&&this.header[t]?this.header[t]:""}})}]).factory("dsxModelUtils",["pcoUser","$parse",function(e,t){return{getPrecipValue:function(t,n){return"mm"===e.getPrecipUnit()?angular.isDefined(t._get("_"+n+"Mm"))?t._get("_"+n+"Mm"):25.4*t._get(n):t._get(n)},getAccumulationValue:function(t,n){return"cm"===e.getAccumulationUnit()?angular.isDefined(t._get("_"+n+"Cm"))?t._get("_"+n+"Cm"):2.54*t._get(n):t._get(n)},getWindDirectionText:function(e,t,n){return n?e._get("_"+t+"_en"):e._get(t)},getPrecipFromValue:function(n,r){var i="data.metric."+r,a="data.imperial."+r;if("mm"===e.getPrecipUnit()){var s=t(i)(n);return angular.isDefined(s)?s:25.4*t(a)(n)}return t(a)(n)}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsxclient/models/base.model.min.js.map
;
angular.module("gm_locations").factory("gmLocationsPco",["$filter","$injector","locUtil","PcoSavedLocationModel","twcPco","twcUtil",function(e,t,o,a,n,i){"use strict";function r(){return y(S)}function c(e){v(e,S)}function s(){return y(I)}function d(e){m(e,I)}function g(e){var t=p(e);if(t){var a=n.getNodeValue("user",I);if(t=t.attrs?t.attrs:t,t=t.data?t.data:t,a&&angular.isArray(a))for(var i=0,r=a.length;i<r;i++)if(o.areLocationsEqual(t,a[i])){angular.extend(a[i],t),a[i].position=t.position;break}n.setNodeValue("user",I,a)}}function u(e){v(e,I)}function l(){return n.get("user").removeSavedLocations()}function L(){return y(k)}function f(e){m(e,k)}function C(e){v(e,k)}function y(t){var o=n.getNodeValue("user",t)||[],r=i.map(o,function(e){var t=new a;return N(t.fromPcoData(e))}),c=e("orderBy")(r,"data.position");return c}function m(e,t){if(e){var a=!1,i=n.getNodeValue("user",t)||[],r=[],c="savedLocations"===t?"recentSearchLocations":"savedLocations";e=e.attrs?e.attrs:e,e=e.data?e.data:e;for(var s=0,d=i.length;s<d;s++)if(o.areLocationsEqual(e,i[s])){a=!0;break}for(var g=n.getNodeValue("user",c)||[],u=0,l=g.length;u<l;u++)if(o.areLocationsEqual(e,g[u])){if("recentSearchLocations"===c){v(g[u],c);break}a=!0}if(!a){r=n.getNodeValue("user",t)||[],"savedLocations"===t?r.push(e):n.getNodeValue("user",t).unshift(e);var L=r.slice(0,Math.min(r.length,10));n.setNodeValue("user",t,L)}}}function v(e,t){if(e){var o=n.getNodeValue("user",t);e=e.attrs?e.attrs:e,e=e.data?e.data:e;for(var a=o.length-1;a>=0;a--)if(o[a].locId===e.locId){o.splice(a,1);break}n.setNodeValue("user",t,o)}}function N(e){return e.getCity&&e.getStateCode&&e.getCountry&&e.getCountryCode&&e.getLocType?new h({id:e.getId()||"",name:e.getCity()+", "+e.getStateCode()+", "+e.getCountry(),key:e.getFullLocId(),lat:e.getLatitude(),"long":e.getLongitude(),locId:e.getLocId(),locType:e.getLocType(),cntryCd:e.getCountryCode(),_country:e.getCountry(),stCd:e.getStateCode(),stNm:e.getState()||"",cityNm:e.getCity()||"",bigCity:e.getBigCity&&e.getBigCity()||!1,nickname:e.getNickname&&e.getNickname()||"",tag:e.getTag&&e.getTag()||"",address:e.getAddress&&e.getAddress()||"",position:e.getPosition(),recentSearch:!0},"XwebWebLocModelClass"):null}function p(e){return new b({id:e.getId()||"",cntryCd:e.getCountryCode(),lat:e.getLatitude?e.getLatitude():"","long":e.getLongitude?e.getLongitude():"",locId:e.getLocId(),locType:e.getLocType(),cityNm:i.capitalize(e.getCity(),!0,!0),bigCity:e.isBigCity(),stCd:e.getStateCode(),stNm:e.getState(),prsntNm:e.getFormattedName(),_country:e.getCountryName(),nickname:e.getNickname()||"",zipCd:e.getZipCode()||"",position:e.getPosition()},"WxdLocModelClass")}var h=t.has("XwebWebLocModelClass")&&t.get("XwebWebLocModelClass"),b=t.has("WxdLocModelClass")&&t.get("WxdLocModelClass"),S="savedLocations",I="savedLocations",k="recentSearchLocations";return{temporaryLocations:{getAll:r,remove:c},savedLocations:{getAll:s,add:d,update:g,remove:u,removeAll:l},recentLocations:{getAll:L,add:f,remove:C},createWxdLocModel:p,isLoggedIn:n.get("user").signedIn}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/datasource/pco/gm_locations_pco.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsSavedLocations",["$q","gmLocationsLocationsBase","gmLocationsPco","gmLocationsDatasource","gmLocationsModals","gmLocationsMetrics",function(e,o,t,a,n,r){"use strict";function i(e,o){if(f())n.rootScope.title="Maximum Allowable Is "+v,n.rootScope.message="You have exceeded the maximum allowable saved locations, You may delete older saved locations before adding new ones.",n.error.open(n.rootScope);else if(m(e)){var t=p(e);n.rootScope.message="<strong>"+t+"</strong> has already been saved.",n.error.open(n.rootScope)}else c(e)["finally"](o)}function c(e){var o=t.createWxdLocModel(e);return h.addLocation(e),h.notifyListChanged(),a.save(e).then(function(){t.savedLocations.add(o)})["catch"](function(){h.rollbackAddLocation(),h.notifyListChanged(),n.rootScope.message="There was an error saving the location. Please try again later.",n.error.open(n.rootScope)})}function s(e){a.getLocationEndpointsAlerts(e).then(function(o){n.rootScope.confirmDelete={},n.rootScope.confirmDelete.displayName=e?e.getFormattedName(!1):"",n.rootScope.confirmDelete.endpointsAlerts=o,n.rootScope.confirmDelete.hasAlerts=o.length>0;var t="m",a=n.confirmDelete.open(n.rootScope,t);a.result.then(function(){l(e)})})["catch"](function(e){n.rootScope.message="There was an error deleting the location. Please try again later.",n.error.open(n.rootScope)})}function l(e){var o=t.createWxdLocModel(e);h.removeLocation(o),h.notifyListChanged(),a.remove(e).then(function(){r.customEventNotify("delete-saved",n.rootScope),t.savedLocations.remove(o)})["catch"](function(e){n.rootScope.message="There was an error deleting the location. Please try again later.",n.error.open(n.rootScope),h.rollbackRemovedLocation(),h.notifyListChanged()})}function u(e){return h.notifyListChanged(),a.update(e).then(function(){r.customEventNotify("locationedit",n.rootScope),t.savedLocations.update(e)})["catch"](function(){h.updateLocationFailed()})}function d(o){var n=[];return h.notifyListChanged(),angular.forEach(o,function(e){n.push(a.update(e))}),e.all(n).then(function(){angular.forEach(o,function(e){t.savedLocations.update(e)})})["catch"](function(){h.updateLocationFailed()})}function f(){var e=0;return h.publicInterface.list&&h.publicInterface.list.length&&(e=h.publicInterface.list.length),e>=v}function m(e){var o=e.getKey(),t=!1;return angular.forEach(h.publicInterface.list,function(e){if(o===e.getKey())return void(t=!0)}),t}function p(e){var o=n.rootScope.isMobile||!1;return e?e.getFormattedName(o):""}var g=o.createService(t.savedLocations);angular.extend(this,g);var h=this,v=10;return h.subscribeProfileLocationsLoaded(),angular.extend(h.publicInterface,{save:c,saveWithVerify:i,remove:l,removeWithConfirm:s,update:u,updateMany:d,maxLimit:v,maxLimitReached:f})}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_saved_locations.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsDatasource",["$q","pcoUser","gmLocationsDsx","twcUtil",function(e,n,a,o){"use strict";function t(e){var n={};return e.nickname&&(n.nickname=e.nickname),e.loc?n.loc=e.loc:n.loc=e.key,e.tag&&(n.tag=e.tag),e.nickname&&(n.nickname=e.nickname),e.address&&(n.address=e.address),(e.pos||e.position)&&(n.position=e.pos||e.position),n}function r(e){return e.data||e}function i(e){var n=r(e),o=t(n);return a.put("/p/locations/"+n.id,o)}function c(e){var n="loc"+TWC.PcoUtils.generateUUID(),o=r(e);o.id=n;var i=t(o);return a.put("/p/locations/"+n,i)}function l(n){var a=[];return angular.forEach(n,function(e){var n=r(e);a.push(c(n))}),e.all(a)}function s(n){var a=[];return angular.forEach(n,function(e){a.push(i(e))}),e.all(a)}function d(e){var n=r(e);return a.destroy("/p/locations/"+n.id)}function u(e){var n=/^([^\/]*)\/.*$/,a=e.match(n);return a&&a.length>1?a[1]:e}function h(e){var n=u(e.id),a=e.doc.product,t=w[n+"/"+a];return t?t:o.capitalize(n)}function p(n){var a=r(n).id,o=e.all({endpoints:m(),alerts:g()});return o.then(function(e){var n=f(e.alerts,a),o=e.endpoints,t=[];return angular.forEach(o,function(e){var a=[];if(angular.forEach(n,function(n){var o=e.id,t=n.doc.endpoint;if(t===o){var r=h(n);a.push({name:r})}}),a.length>0){var o=e.doc.chan,r=v[o];t.push({name:r,alerts:a})}}),t})}function f(e,n){var a=[];return angular.forEach(e,function(e){n===e.doc.location&&a.push(e)}),a}function g(){return a.get("/p/services")}function m(){return a.get("/p/endpoints")}var v={"wns-desktop":"Windows Desktop",adm:"Kindle","adm-ent":"Kindle","ipad-free":"iPad","ipadent-free":"iPad","iphone-free":"iPhone","iphone-max":"iPhone","iphoneent-free":"iPhone",smtp:"Email",gcm:"Android","gcm-ent":"Android",sms:"Text","wns-phone":"Windows Phone"},w={"followme-rain":"Real-Time Rain","followme-lightning":"Lightning Strikes","followme-severe":"National Weather Service","cms-push/breakingnews":"Breaking News","cms-push/winterweathernews":"Winter Weather Breaking News","global8/NRF":"Heavy Rainfall","global8/NSF":"Heavy Snowfall","global8/NIC":"Ice Forecast","global8/NEH":"High Heat","global8/NEC":"Very Cold","global8/NHW":"High Wind","global8/NTS":"Thunderstorm","global8/NFG":"Dense Fog",severe:"National Weather Service",pollen:"Pollen","scheduled/curr":"Current Conditions","scheduled/excold":"Extreme Cold","scheduled/exheat":"Extreme Heat","scheduled/farmcast":"Farmer's Forecast","scheduled/fcst":"Daily Forecast","scheduled/icyprcp":"Icy Precipitation","scheduled/marine":"Surf and Sea Conditions","scheduled/outdoor":"Outdoor Activity Forecast","scheduled/pollen":"Pollen","scheduled/precip":"Daily Rain/Snow","scheduled/rain":"Daily Rain","scheduled/school":"School Day Forecast","scheduled/snow":"Snow"};return{update:i,save:c,saveMany:l,updateMany:s,remove:d,getLocationEndpointsAlerts:p}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/datasource/dsx/gm_locations_datasource.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsDsx",["$http","$q","twcUtil","customEvent",function(n,t,e,o){"use strict";var r={};r.BASE_URL=TWC.Configs.dsx.hostReadWrite,r.API_KEY=TWC.Configs.dsx.apiKey;var u=!1,s=!1;r.head=function(n){return i(n+"?jsonp=JSON_CALLBACK&head=")},r.get=function(n){return i(n+"?jsonp=JSON_CALLBACK")},r.getWithParams=function(n){return i(n+"&jsonp=JSON_CALLBACK")},r.post=function(n,t){var e=n+"?jsonp=JSON_CALLBACK&post="+A(t);return i(e)},r.put=function(n,t){var e=n+"?jsonp=JSON_CALLBACK&put="+A(t);return i(e)},r.destroy=function(n){return i(n+"?jsonp=JSON_CALLBACK&delete=true")},r.deauthorize=function(){return r.destroy("/dsx/session").then(C)};var i=function(n){return a().then(null,c).then(function(){return p(n)})},a=function(){if(u){var n=jQuery.cookie("dsx");n&&"bye"!==n||(u=!1)}return u?t.when():p("/p?jsonp=JSON_CALLBACK").then(function(n){s=!e.isEmpty(n)&&n,f()})},c=function(n){return p("/dsx/session?jsonp=JSON_CALLBACK&post="+r.API_KEY).then(f)},f=function(){u=!0},C=function(){u=!1},p=function(e){var u=t.defer();return s&&"/p?jsonp=JSON_CALLBACK"===e?u.resolve(s):n.jsonp(r.BASE_URL+e).then(function(n){401===n.data.status||419===n.data.status?(C(),o.getEvent("authentication-timeout-event").notify()):u.resolve(n.data.body)},function(n){u.reject("Failed DSX request to "+e)}),u.promise},A=function(n){return n=angular.isObject(n)?angular.toJson(n):n,encodeURIComponent(n)};return r}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/datasource/dsx/gm_locations_dsx.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsTemporaryLocations",["gmLocationsLocationsBase","gmLocationsPco","gmLocationsModals",function(o,e,t){"use strict";function r(o){var t=e.createWxdLocModel(o);e.temporaryLocations.remove(t),c.removeLocation(t),c.notifyListChanged()}function a(o){t.rootScope.confirmDelete={},t.rootScope.confirmDelete.displayName=o?o.getFormattedName(!1):"";var e="m",a=t.confirmDelete.open(t.rootScope,e);return a.result.then(function(){r(o)}),a.result}var n=o.createService(e.temporaryLocations);angular.extend(this,n);var c=this;return angular.extend(c.publicInterface,{remove:r,removeWithConfirm:a})}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_temporary_locations.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsModals",["$rootScope","$modal","customEvent",function(o,e,t){"use strict";var n=o.$new(),l=this;return l.rootScope=n,l.profile={showMessage_MustLoginToSave:function(o){o.message="You must log in to save locations.",l.error.open(o)},open:function(){return window.scrollTo(0,0),t.getEvent("GML_COMMAND_PROFILE_MODAL_OPEN").notify()}},l.migration={open:function(o,t,n,l){e.open({templateUrl:"/sites/all/modules/glomo/shared/gm_locations/components/migration-modal/migration-modal.html",controller:"gmLocationsMigrationModalInstanceCtrl",windowClass:"gm-locations-modal pref-intro-dialog",backdrop:!0,scope:o,resolve:{rejectedCollection:function(){return n?n:""},totalSavedLocations:function(){return l?l.length:0}}})}},l.error={open:function(o){o.title||(o.title="Oops!"),e.open({templateUrl:"/sites/all/modules/glomo/shared/gm_locations/components/error-modal/error-modal.html",controller:"gmLocationsErrorModalInstanceCtrl",windowClass:"gm-locations-modal",size:"sm",scope:o})}},l.confirmDelete={open:function(o,t){return e.open({templateUrl:"/sites/all/modules/glomo/shared/gm_locations/components/confirm-delete-modal/confirm-delete-modal.html",controller:"gmLocationsConfirmModalInstanceCtrl",windowClass:"gm-locations-modal",size:t||"sm",scope:o})}},l}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_modals.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocations",["gmLocationsDatasource","gmLocationsPco","gmLocationsMigration","gmLocationsModals","gmLocationsCookies","gmLocationsRecentLocations","gmLocationsSavedLocations","gmLocationsTemporaryLocations",function(o,a,s,t,n,c,i,e){"use strict";return{pcoDatasource:{savedLocations:{removeAll:a.savedLocations.removeAll},isLoggedIn:a.isLoggedIn},savedLocations:i,recentLocations:c,temporaryLocations:e,migration:s,modals:t}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/gm_locations.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsMigration",["$q","gmLocationsDatasource","gmLocationsSavedLocations","gmLocationsTemporaryLocations","gmLocationsModals","customEvent","pcoUser",function(o,n,e,a,r,t,i){"use strict";function c(o){t.getEvent("profileIsMerged").progress(function(n){var e=n.locs2Write2Dsx.locations,a=n.locsMoved2RecentSearch,r=n.locsAddedToProfile,t=u(e,r);r&&r.length>0?s(o,t,r,a,e,n):l(o,t,r,a,e,n)})}function s(t,c,s,l,u,g){var d=n.updateMany(c),f=n.saveMany(s);o.all(d,f).then(function(){e.reload(),a.reload(),r.migration.open(t,s,l,u)},function(){t.message="There was an while error saving your locations. We will roll back the changes.",r.error.open(t),i.restoreProfileLocations()})}function l(o,t,i,c,s,l){e.reload(),a.reload(),n.updateMany(t).then(function(){r.migration.open(o,i,c,s)})}function u(o,n){var e=[],a=[];return angular.forEach(n,function(o){a.push(o.id)}),angular.forEach(o,function(o){a.indexOf(o.id)===-1&&e.push(o)}),e}return{syncEventHandler:c}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_migration.factory.min.js.map
;
angular.module("gm_locations").service("gmLocationsLocationsBase",["gmLocationsModals","customEvent",function(o,e){"use strict";this.createService=function(n){function t(o){L.push(o)}function a(){angular.forEach(L,function(o){o()})}function c(){e.getEvent("profileLocationsLoaded").progress(function(o){i()})}function i(){p=n.getAll(),a()}function r(o){for(var e=0;e<p.length;e++)if(p[e].data.locId===o.data.locId){g=p[e],f=e,p.splice(e,1);break}}function l(){p.splice(f,0,g)}function u(o){p.push(o)}function s(){p.pop()}function d(){o.rootScope.message="There was an error updating the location. Please try again later.",o.error.open(o.rootScope)}var f,g,p,L=[];return{notifyListChanged:a,removeLocation:r,rollbackRemovedLocation:l,addLocation:u,rollbackAddLocation:s,updateLocationFailed:d,reload:i,subscribeProfileLocationsLoaded:c,publicInterface:{get list(){return p||(p=n.getAll()),p},reload:i,subscribeListChanged:t,get hasLocations(){return!(!p||!p.length)&&p.length>0},save:null,remove:null,update:null,updateMany:null}}}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_locations_base.service.min.js.map
;
angular.module("gm_locations").factory("gmLocationsRecentLocations",["gmLocationsLocationsBase","gmLocationsSavedLocations","gmLocationsPco","gmLocationsModals","gmLocationsMetrics","customEvent",function(e,o,t,a,c,n){"use strict";function i(e){if(c.customEventNotify("delete-recently-searched",a.rootScope),e&&e.data&&e.data.recentSearch===!0){var o=t.createWxdLocModel(e);t.recentLocations.remove(o),s.removeLocation(o),s.notifyListChanged()}}var r=e.createService(t.recentLocations);angular.extend(this,r);var s=this;return s.subscribeProfileLocationsLoaded(),angular.extend(s.publicInterface,{remove:i})}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/ui/gm_locations_recent_locations.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsMetrics",["customEvent",function(t){"use strict";function n(n,e){t.getEvent("track-string-event").notify({settings:e.settings,trackStr:n})}return{customEventNotify:n}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/gm_locations_metrics.factory.min.js.map
;
angular.module("gm_locations").factory("gmLocationsCookies",["twcPco",function(){"use strict";return{removeSession:function(){var o={path:"/",domain:".weather.com"};jQuery.removeCookie("userSession",o),jQuery.removeCookie("uplogin",o),jQuery.removeCookie("dsx",o)}}}]);
//# sourceMappingURL=/sites/all/modules/glomo/shared/gm_locations/services/datasource/cookies/gm_locations_cookies.factory.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("socialIcon",["twcUtil","socialIconFactory",function(a,e){var t={priority:0,replace:!1,template:"<img/>",scope:{socialCode:"="},restrict:"EA",link:function(a,t){t.addClass("social-icon"),a.$watch("socialCode",function(){var c=angular.element("<img/>");c.attr("src",e.getIconUrl(a.socialCode)),c.attr("aria-hidden","true"),c.attr("alt",e.getIconName(a.socialCode).replace("-"," ")),t.find("img").replaceWith(c)})}};return t}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/social_icon/social_icon.directive.min.js.map
;
twc.shared.apps.factory("socialIconFactory",["twcUtil",function(n){function t(n){return o.useSVG&&!n?o.useSVGz?".svgz":".svg":".png"}function e(n){return o.basePath}var o={basePath:window.TWC&&window.TWC.Configs&&window.TWC.Configs.assets_url+"/",pngPath:"png/",svgPath:"svg/",svgzPath:"svgz/",allowSVG:!0,useSVGz:!1};o.useSVG=o.allowSVG&&Modernizr.svg;var s={facebook:["0","00"],twitter:["1","01"],"google-plus":["2","02"],instagram:["3","03"],youTube:["4","04"]};return{getIconName:function(t){var e;if(n.isNumeric(t)&&t>=0&&t<=4){var o=n.keys(s);n.each(o,function(o){n.indexOf(s[o],t.toString())!==-1&&(e=o)})}else e="na";return e},getIconUrl:function(n,o){return e(o)+this.getIconName(n)+t(o)+"?1"}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/social_icon/social_icon.factory.min.js.map
;
!function(e,t,a,s){"use strict";t.shared.apps.factory("GlomoTwcSocialSharing",["$rootScope","$window","$location","$interpolate","$q","$compile","customEvent","TagBuilder","twcConstant","twcUtil","socialConstants","httpclient","TwcMicrodata","PageIdentifier","GlomoSocialAPI","GlomoSocialMetaTags","mimeTypes","DrupalSettings","dsxclient","assetUtil",function(t,i,r,o,n,l,g,c,p,d,u,w,m,f,T,h,b,v,y,U){function M(e,t){this.asset=t,this.data=t&&t.data?t.data:{},this.instanceId=e,this.assetId=t&&t.getId?t.getId():"",this.metaTags=new h.MetaTags}var I={},k=new M,O=k.metaTags,P=U.getAssetsUrl();return g.getEvent("close-ugc-modal-event").progress(function(){I.setShare(k.instanceId),I.setMetaTags()}),e.extend(I,{settingsData:{messageAssetId:{video:""}},isLoggedIn:!1,userName:"",status:"",user:"",userAuth:{},shareUrl:r.absUrl(),apiLoaded:T.apiLoaded,params:{},getUrlFrag:function(t){return t=t||e.element(s.querySelector('[rel="canonical"]')).attr("href")||r.absUrl(),d.normalizeUrl(d.addEscapedFragment(t))},getUrl:function(t,a,o){var n=i.location.href||r.absUrl()||e.element(s.querySelector('[rel="canonical"]')).attr("href");switch(a="boolean"!=typeof a||!!a,o="boolean"!=typeof o||!!o,t){case"og":case"twitter":case"googleplus":case"facebook":t="og"===t?"facebook":t,n=a?I.getUrlFrag(n):d.normalizeUrl(n);break;default:n=d.normalizeUrl(n)}return t&&o&&(n+=(n.indexOf("?")!==-1?"&":"?")+u.urlParams[t]),n},getType:function(e){var t,s;if(!e)switch(s=a.pco.get("page").attributes.content,t=f.getPageId(s)){case"video-index":case"video-collection":case"video-watch-collection":case"video-standalone":return"video.other";default:return"article"}return e},setDefaultMetaTags:function(){var e,t;O.site={og:new h.OgMetaTag("site_name",u.site_name),twitter:new h.TwitterMetaTag("site",u.twitterSite)},O["twitter:creator"]=new h.TwitterMetaTag("creator",u.twitterSite),O["twitter:domain"]=new h.TwitterMetaTag("domain","https://weather.com"),O.apps={fb:{profile_id:new h.FacebookMetaTag("profile_id",u.apps.facebook.profile_id),app_id:new h.FacebookMetaTag("app_id",u.apps.facebook.app_id)},twitter:{},windows:{}};for(t in u.apps)if("itunes"===t)for(e in u.apps.itunes)u.apps.itunes.hasOwnProperty(e)&&(O.apps.twitter[e]=new h.AppTags(e,u.apps.itunes[e]));else if("windows"===t)for(e in u.apps.windows)u.apps.windows.hasOwnProperty(e)&&(d.isArray(u.apps.windows[e])?(O.apps.windows[e]=[],d.each(u.apps.windows[e],function(t){O.apps.windows[e].push(new h.WindowsMetaTag(e,t))})):O.apps.windows[e]=new h.WindowsMetaTag(e,u.apps.windows[e]));else u.apps.hasOwnProperty(t)&&(O.apps.twitter[t]=new h.AppTags(t,u.apps[t]));I.addLinks(),I.setMetaTags()},canIShareOn:function(e){var t=k.asset.getFlags&&k.asset.getFlags(),a={"big-web":"Big Web",facebook:"Facebook","google+":"Google+",intranet:"Intranet","little-web":"Little Web","mobile-apps":"Mobile App","tv-app":"TV App",twitter:"Twitter",youtube:"YouTube"};return e="googleplus"===e?"google+":e,t&&a.hasOwnProperty(e)?t[a[e]]:!t||!t["big-web"]||t["big-web"]},setMetaTags:function(){var e,s,r,n,l;e=k.asset?this.getType(k.asset.getType()):I.getType(),k.asset&&k.asset.getUrl?(n=i.location.protocol+"//"+i.location.hostname+k.asset.getUrl()+i.location.search,n=I.getUrlFrag(n)):n=k.asset&&k.asset.url?k.asset.url:I.getUrl("facebook",!0,!1)+i.location.search,s={card:"summary_large_image",image:k.asset&&k.asset.getVariant&&k.asset.getVariant(12).replace("http://utst.imwx.com",P+"/ugc")||d.normalizeUrl(u.logoImage),title:k.asset&&k.asset.getTitle&&k.asset.getTitle()||a.pageTitle,type:e||"article",url:d.normalizeUrl(n)},s.image=d.normalizeUrl(s.image),O.addOg("type",s.type),O.addTwitter("card","summary_large_image"),r=k.asset&&k.asset.getDescription&&k.asset.getDescription()||a.pageDescription,r=r.indexOf("DOCTYPE")>-1?r.replace(/<\/?[^>]+(>|$)/g,"").trim():r,l=a.pco.get("page").getAttributes(),l.currentLocation&&l.currentLocation.prsntNm&&r&&(r=r.replace("$(prsntnm)",l.currentLocation.prsntNm)),s.description=o(r)(t),O.addOTG("description",s.description),O.addOTG("image",s.image),O.image_src=new c.HeadTag("link",[{href:s.image,rel:"image_src",type:b.getType(s.image)}]),O.thumbnailUrl=new h.GooglePlusMetaTag("thumbnailUrl",s.image),O.image=new h.GooglePlusMetaTag("image",s.image),O.primaryImageOfPage=new h.GooglePlusMetaTag("primaryImageOfPage",s.image),s.title=o(s.title)(t),O.addOTG("title",s.title),O.addOT("url",s.url)},addLinks:function(){O.links={publisher:new c.HeadTag("link",[{name:"rel",value:"publisher",primary:!0},{name:"href",value:u.profiles.googleplus}]),author:new c.HeadTag("link",[{name:"rel",value:"author",primary:!0},{name:"href",value:u.profiles.googleplus}])},O.links.publisher.addToDOM(),O.links.author.addToDOM()},getPageContent:function(){var e=a.pco.get("page"),t=e.getAttributes();return"other"===t.content&&Drupal.settings.twc.contexts&&Drupal.settings.twc.contexts.term?"term":t.content},getAsset:function(){var t,s,i,r=n.defer(),o=[];a.pco.get("page").getAttributes();switch(I.getPageContent()){case"video":s="video",t=a.PcoUtils.getter(v.getContexts(),"node.uuid");break;case"other":case"article":s="aImg",i=v.getContexts(),t=i&&a.PcoUtils.getter(i,"node.uuid"),t||r.resolve(null);break;default:r.resolve(null)}return o.push({$id:"singleAssetData",assetId:t,recordType:"cms",recordName:s}),y.execute(o).then(["singleAssetData",function(t){return!!t&&(t.data=e.extend({itemIndex:0},t.data),void r.resolve(t))}],function(){r.reject(new Error("No results",status.ERROR))}),r.promise},setShare:function(e,t){return k=new M(e,t),O=k.metaTags,k},getShare:function(){return k},initSocialSettings:function(e,t){return I.settingsData.messageAssetId.video=t.videoMessageAssetId,I.setShare(e,t._asset),n.all(I.setDefaultMetaTags(),T.loadAPI())}},k),I}])}(angular,twc,TWC,document);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_social_sharing_factory/social_sharing.factory.min.js.map
;
!function(e,t,a,n){a.shared.apps.controller("glomoSocialSharingController",["$scope","$location","$window","$q","$injector","$compile","$document","settings","DrupalSettings","dsxclient","GlomoTwcSocialSharing","GlomoSocialAPI","customEvent","twcConfig","twcConstant","twcPco","twcUtil","socialConstants","bitly","assetUtil",function(a,i,r,o,s,c,l,g,p,d,h,m,u,v,f,w,y,I,C,T){"use strict";var S,U,A,D=v.module_status_codes,E=T.getAssetsUrl(),M={createProviderArray:function(e){t.forEach(e.providers,function(e){e&&a.params.providers.push(e)})},getAsset:h.getAsset};a.params={instanceId:null,providers:[],scope:a,settings:null,status:D.LOADING},a.sData={},a.asset={},a.getPageContent=h.getPageContent,a.initSocial=function(){a.params.settings=g,A=a.params.instanceId=p.getInstanceIdBySettings(g),M.createProviderArray(g),o.all(w.get("page").promises.concat(w.get("user").promises)).then(function(){M.getAsset().then(function(t){e.PcoUtils.schema.addItemType(n.querySelector("html"),"http://schema.org/Article"),a.asset=g._asset=t,a.setAsset(t),h.initSocialSettings(a.params.instanceId,g).then(function(){S=a.params,U=h.setShare(S.instanceId,t)})})}),u.getEvent("newAsset").progress(function(t,n){var i=e.pco.get("page").getAttributes();"article"===i.content&&"videoplayer-present"===i.contains_videoplayer&&t.getType&&"article"!==t.getType()||(A=n||t.getId&&t.getId()||a.params.instanceId,a.asset=t,a.setAsset(t),t.getSEOUrl&&t.getSEOUrl()&&t.getUrl&&!t.getUrl()&&(t.data.url=t.getSEOUrl()),h.setShare(A,t),h.setMetaTags())}),u.getEvent("imap_layerChanged").progress(function(t){var n=i.absUrl(),r=n.indexOf("?")!==-1?"&":"?",o=e.PcoUtils.getURLParameter("interactiveMapLayer"),s=n.indexOf("interactiveMapLayer");s!==-1?n=n.replace("interactiveMapLayer="+o,"interactiveMapLayer="+t):n+=r+"interactiveMapLayer="+t,h.setShare(a.params.instanceId,{url:n}),h.setMetaTags()}),u.getEvent("alertDetailEvent").progress(function(e){a.asset=e,h.setShare(a.params.instanceId,e),h.setMetaTags()}),u.getEvent("urlChangeEvent").progress(function(){})},a.setAsset=function(i){var o,s,l,g,p;if(i&&i.getType&&"video"===i.getType()){var d=i.getDuration();o=t.element(".videoWrapper"),e.PcoUtils.schema.addItemType(n.querySelector("#wx-hero-content"),"http://schema.org/Article"),a.sData={videoData:i},o&&(s=t.element(".videoWrapper").find(".video-schema"),0===s.length&&(e.PcoUtils.schema.addItemType(n.querySelector(".videoWrapper"),"http://schema.org/VideoObject"),o.append(c(n.createElement("video-schema"))(a)[0])),(l=i.getVariant(16))?(p=1280,g=720):(l=i.getVariant(12))&&(p=980,g=551),t.extend(a.sData,{href:r.location.href,duration:function(e){for(var t="PT%sH%sM%sS",a=1;a<e.length;a++)t=t.replace(/%s/,e[a]);return t}(d.split(":")),image:{url:l,width:p,height:g},embedUrl:I.securePath+"/video/player/"+i.getId(),id:i.getId(),title:i.getTitle(),description:i.getVideoDescription&&i.getVideoDescription()||i.getDescription&&i.getDescription(),datePublished:i.data.lastmodifieddate||i.getPublishDate()}))}else i&&i.getType&&("article"===i.getType()||"image"===i.getType())&&(o=t.element("main"),e.PcoUtils.schema.addItemType(n.querySelector("#wx-main"),"http://schema.org/Article"),a.sData={imageData:i},o&&(s=t.element("#wx-main").find(".image-schema"),0===s.length&&o.prepend(c(n.createElement("image-schema"))(a)[0]),(l=i.getVariant(16))?(p=1280,g=720):(l=i.getVariant(12))&&(p=980,g=551),t.extend(a.sData,{href:r.location.href,image:{url:l,width:p,height:g},id:i.getId(),title:i.getTitle(),description:i.getVideoDescription&&i.getVideoDescription()||i.getDescription(),datePublished:i.data.lastmodifieddate||i.getPublishDate()})))},a.getMetaContent=function(e){var t,a=["name","property","itemprop"],i=function(a){return t=n.querySelector("["+a+'="'+e+'"]'),!!t&&t.getAttribute("content")};if(U=h.getShare(),U.metaTags&&U.metaTags[e])return U.metaTags[e].getContent();for(var r=0,o=a.length;r<o;r++)if(t=i(a[r]))return t;return""},a.openShare=function(e){o.when(m.loadAPI()).then(function(){a.doOpenShare(e)})},a.doOpenShare=function(n){var o,s,c,l="twitter"!==n?this.getMetaContent("og:description"):this.getMetaContent("twitter:description"),g=this.getMetaContent("og:url"),p=new gigya.socialize.UserAction;switch(n){case"twitter":o=this.getMetaContent("twitter:title")||this.getMetaContent("twitter:description"),o+=" @weatherchannel",s=this.getMetaContent("twitter:image")||this.getMetaContent("og:image"),c=this.getMetaContent("twitter:player")||this.getMetaContent("og:video:url");break;default:o=this.getMetaContent("og:title"),s=this.getMetaContent("og:image"),c=this.getMetaContent("twitter:player")}o||(o=t.element("title").text()),"ugc"===e.pco.get("page").attributes.content&&(s=s.replace("http://utst.imwx.com",E+"/ugc")),"term"===a.getPageContent()&&Drupal.settings.twc.contexts.term.field_meta_og_image.und[0].value&&(s=Drupal.settings.twc.contexts.term.field_meta_og_image.und[0].value),s=y.normalizeUrl(s),c=y.normalizeUrl(c),p.setTitle(o),p.setSubtitle(i.host()),n&&(g+=(g.indexOf("?")!==-1?"&":"?")+I.urlParams[n]),g=y.normalizeUrl(y.removeEscapedFragment(g)),p.setLinkBack(g),p.addActionLink("Get Weather App","https://weather.com/apps"),p.addActionLink("Connect with Weather.com","https://weather.com/social"),l&&p.setDescription(l),p.addMediaItem({type:"image",src:s,href:g}),"video.other"!==a.getMetaContent("og:type")||"facebook"!==n&&"twitter"!==n||p.addMediaItem({previewImageURL:s,previewImageWidth:"160",previewImageHeight:"90",src:c,type:"flash",width:"485",height:"273"}),u.getEvent("socialApiLoaded").then(function(){if(!m.isAPIloaded())return!1;var e={provider:n,url:g,title:o,description:l,thumbnailURL:s,shortURLs:"never",cid:w.getNodeValue("metrics","contentChannel")||"",onError:function(e){console.log("Error: %o",arguments)},userAction:p};if(u.getEvent("shareElement").progress(function(t){e.title=t.title||e.title,e.description=t.description||e.description,e.thumbnailURL=t.thumbnailURL||e.thumbnailURL,e.userAction.mediaItems=t.mediaItem||e.userAction.mediaItems}),"email"===n){var t=function(){var e="I saw this on The Weather Channel and thought you might want to see it.\n\n",t="%%TITLE%%\n",a="%%DESCRIPTION%%\n\n",n="See the article here: %%URL%%\n\nDownload The Weather Channel app: https://weather.com/apps\nFollow The Weather Channel: https://weather.com/social";return e+=o?t.replace("%%TITLE%%",o):"",e+=l?a.replace("%%DESCRIPTION%%",l):"",e+=n.replace("%%URL%%",g)},i=function(){r.location="mailto:?body="+encodeURIComponent(t())+"&subject="+(encodeURIComponent(o)||"Check this out on the Weather Channel")};i()}else"facebook"===n&&(e.facebookDialogType="feed"),gigya.socialize.postBookmark(e);a.trackProvider(n)})},a.trackProvider=function(e){var t={linkTrackVars:"eVar21,eVar22,eVar24,campaign,events",linkTrackEvents:I.omnitureEvents[e],socialTrackAction:!0,eVar21:e,eVar22:w.getNodeValue("metrics","pagename")||"",eVar24:w.getNodeValue("metrics","contentChannel")||"",campaign:null,events:I.omnitureEvents[e]};u.getEvent("track-string-event").notify({trackStr:f.socialMedia[e].title,settings:a.params.settings||{},attrs:t})}}])}(TWC,angular,twc,document);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_social_sharing_factory/social_sharing.controller.min.js.map
;
!function(e,t){t.shared.apps.directive("videoSchema",["$compile",function(e){return{replace:!0,restrict:"EA",scope:!0,templateUrl:"/sites/all/modules/glomo/shared/glomo_social_sharing_factory/templates/video_schema.html"}}]).directive("imageSchema",["$compile",function(e){return{replace:!0,restrict:"EA",scope:!0,templateUrl:"/sites/all/modules/glomo/shared/glomo_social_sharing_factory/templates/image_schema.html"}}]).directive("glomoSocialBar",["$rootScope","twcUtil","$compile","$parse","$timeout",function(t,o,l,r,a){return{restrict:"EA",templateUrl:function(o,l){var r="/sites/all/modules/glomo/shared/glomo_social_sharing_factory/templates/",a=t.isMobile?"mobile":"",i=l.template,c=(e.element("html").hasClass("lt-ie9")||e.element("html").hasClass("ie-9"),"glomo_social_bar.html");return c=i?i+".html":c,(l.template?r+l.template+".html":r+a+c)+"?v=1.0.113"},require:"^twcReferenceScope",scope:{providers:"=",theme:"="},controller:["$scope",function(e){this.doShare=function(t){e.callback(e.refCtrl.refScope(),{media:t})},this.theme=function(){return e.theme},e.toggleExpand=!1,e.expand=function(){e.toggleExpand=!e.toggleExpand}}],link:function(t,o,a,i){var c=o.find("ul");t.refCtrl=i,t.callback=r(a.callback),e.forEach(t.providers,function(e,o){c.append(l('<div data-glomo-media data-provider="'+e+'"></div>')(t))})}}}]).directive("glomoMedia",["twcConstant","$filter",function(e,t){return{restrict:"EA",replace:!0,templateUrl:"/sites/all/modules/glomo/shared/glomo_social_sharing_factory/templates/glomo_social_media.html",require:["^glomoSocialBar"],scope:!0,controller:["$scope",function(e){e.doShare=function(){e.ctrl.doShare(e.provider)},e.getTheme=function(){return e.ctrl.theme()}}],link:function(o,l,r,a){l.find("span");o.provider=r.provider?r.provider:"";var i={facebook:"Share on Facebook",twitter:"Tweet",googleplus:"Post to Google+",reddit:"Post to Reddit",pinterest:"Pin It",email:"Email",qq:"QIt",sina:"Sina"},c=i[o.provider],n=t("pfTranslate"),s=n(c,{context:"glomo_social_sharing_factory"});o.title=s,o.mediaClass=e.socialMedia[o.provider].icon||"",o.ctrl=a[0]}}}])}(angular,twc);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_social_sharing_factory/social_sharing.directive.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("preload",function(){var a={priority:0,replace:!1,template:'<div class="loading clearfix"><div class="preloader" data-anim="base wrapper"><div class="left-wrap"><div class="circle left" data-anim="base left"></div></div><div class="right-wrap"><div class="circle right" data-anim="base right"></div></div></div></div>',scope:!0,restrict:"A"};return a});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/preload/preload.directive.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("errorHandler",["twcConfig","$compile",function(r,e){var a={priority:0,replace:!0,template:'<div data-ng-if="hasError" class="wx-module-error" data-ng-class="{dark: errorHandlerTheme === \'dark\'}">\n    <div class="wx-module-error-content">\n        <span class="wx-iconfont-global wx-icon-error-2"></span>\n        <div class="messaging">\n            <p class="error-title" data-ng-bind-template="{{errorTitle | translate}}"></p>\n            <p class="error-description"  data-ng-bind-template="{{errorDescription | translate}}"></p>\n        </div>\n    </div>\n</div>\n',scope:{errorHandler:"=",errorHandlerMode:"@",errorHandlerTheme:"@"},restrict:"A",link:function(e){e.hasError=e.errorHandler===r.module_status_codes.ERROR,e.funcs={myErrorHandler:function(){switch(e.errorHandlerMode){case"na":e.errorTitle="error_handler.NOT_AVAILABLE_TITLE",e.errorDescription="error_handler.NOT_AVAILABLE_DESCRIPTION";break;case"generic":e.errorTitle="error_handler.GENERIC_ERROR_TITLE",e.errorDescription="error_handler.GENERIC_ERROR_DESCRIPTION";break;default:e.errorTitle="error_handler.GENERIC_ERROR_TITLE",e.errorDescription="error_handler.GENERIC_ERROR_DESCRIPTION"}}},e.funcs.myErrorHandler(),e.$watch("errorHandler",function(r,a){e.hasError="error"===r}),e.$watch("errorHandlerMode",function(r,a){r!==a&&(e.errorHandlerMode=r,e.funcs.myErrorHandler())})}};return a}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/error_handler/error_handler.directive.min.js.map
;
/**
 * Author: ksankaran (Velu)
 * Date: 7/8/14
 * Time: 3:02 PM
 * Comments:
 */

twc.shared.apps.factory('CmsBreakingNowModelClass',['RecordModel',function( RecordModel ) {
  return RecordModel.extend({
    recordType: 'CmsBreakingNowModelClass',

    getTitle: function() {
      return this._get('title');
    },

    getHeadLine: function() {
      return this._get('headline');
    },

    getLinkUrl: function() {
      return this._get('link_url');
    },

    getColor: function() {
      return this._get('color');
    },

    getShare: function() {
      return this._get('share');
    },

    getShareType: function() {
      return this.getShare().type;
    },

    getLocations: function() {
      return this.getShare().locations;
    },

    setResponse: function( response ) {
      this.data = response;
      this.header = "NA";
    }
  });
}]);;
/**
 * Author: ksankaran (Velu)
 * Date: 11/26/13
 * Time: 12:21 PM
 * Comments:
 */

twc.shared.apps.factory('CmsAModelClass',['RecordModel',function(RecordModel){
  return RecordModel.extend({
    recordType: 'a',

    /**
     * The response is simple and without header. So, set the response as data.
     * @param response
     */
    setResponse : function( response ) {
      this.data = response;
      this.header = "NA";
    },

    /**
     * Get asset id
     *
     * @returns {String}
     */
    getId: function() {
      return this._get('id');
    },

    /**
     * Get asset type
     *
     * @returns {String}
     */
    getType: function() {
      return this._get('type');
    },

    getHasWxNodeVideo: function() {
      return this._get('wxnodes')  && this._get('wxnodes').some(function(e) { return e.type === 'wxnode_video';});
    },

    /**
     * Get asset title
     *
     * @returns {String}
     */
    getTitle: function(teaserFlag) {
      return (teaserFlag && this._get('teaserTitle')) || this._get('title');
    },

    /**
     * Set asset title override
     *
     * @param overrideTitle
     */
    setTitle: function(overrideTitle) {
      if(overrideTitle) {
        this.set({"title": overrideTitle});
      }
    },

    /**
     * Add playlist to the end of URL
     * @param playlist
     */
    setPlaylistUrl: function(playlist) {
      var url = this._get("url");
      if(playlist && url && url.indexOf("pl=") === -1) {
        var hasQuestionMark = url.indexOf("?") !== -1;
        this.set({"playlisturl": url + (hasQuestionMark ? "&" : "?") + "pl=" + playlist});
      }
    },

    /**
     * Get url for media module based on various conditions.
     * Well, various for now is: playlisturl or url.
     */
    getMediaUrl : function() {
      return (this._get("playlisturl") || this._get("url"));
    },

    /**
     * Get URL of the asset.
     *
     * @note Other models contain this method, so this one should as well.
     * @returns {*}
     */
    getAssetUrl: function() {
      // ID of 12 was selected due to its most popular use.
      return this.getVariant(12);
    },

    /**
     * Get sub-assets
     *
     * @returns {String}
     */
    getAssets: function() {
      return this._get('assets');
    },

    /**
     * Get asset's primary collection id.
     *
     * @returns {String}
     */
    getPrimaryCollectionId : function() {
      return this._get('pcollid');
    },

    /**
     * Get asset's duration (for video).
     *
     * @returns {String}
     */
    getDuration : function() {
      var duration = this._get('duration');
      var duration_parts = duration.split(':');
      if (duration_parts.length === 3) {
        var first_part = parseInt(duration_parts[0]);
        if (!isNaN(parseFloat(first_part)) && isFinite(first_part) && first_part === 0) {
          duration_parts.shift();
        }
      }
      return duration_parts.join(':');
    },

    /**
     * Get asset's seo URL
     *
     * @returns {String}
     */
    getSEOUrl : function() {
      return this._get('seourl');
    },

    /**
     * Get asset's description
     *
     * @returns {String}
     */
    getDescription : function() {
      return this._get('description');
    },

    /**
     * Get asset's publish date. Eg: "2013-06-25T06:28:16-04:00"
     *
     * @returns {String}
     */
    getPublishDate : function() {
      return this._get('publishdate');
    },

    /**
     * Get video created date
     * @return {String}
     */
    getCreatedDate : function() {
        return this._get('createddate');
    },

    /**
     * Get asset's last modified date
     * @return {String}
     */
    getLastModifiedDate : function() {
        return this._get('lastmodifieddate');
    },

    /**
     * Get asset's source date. Eg: "2013-06-25T06:28:16-04:00"
     *
     * @returns {String}
     */
    getSourceDate : function() {
      return this._get('sourcedate');
    },

    /**
     * Get asset's tags. Tags have multiple sub nodes. Example below:
     *  tags: {
     *      geo: [
     *        "city:Providence",
     *        "DMA:US.521:US",
     *        "state:US.RI:US",
     *        "9reg:US.ne:US",
     *        "4reg:US.ne:US"
     *      ],
     *      keyword: [
     *        "lightning"
     *      ],
     *      loc: "USRI0050:1:US",
     *      wx: {
     *        hi: "91",
     *        low: "69",
     *        t: "Partly Cloudy",
     *        icon: "30"
     *      }
     *  }
     *
     * @returns {String}
     */
    getTags : function() {
      return this._get('tags');
    },

    /**
     *
     * Returns Object with list of flags that authorize usage in different domains
     * @returns {Object}
     */
    getFlags: function() {
     return this._get('flags');
    },

    /**
     * Get collections to which the asset belongs to.
     *
     * @returns {Array}
     */
    getCollections : function() {
      return this._get('colls');
    },

    /**
     * Get variants for this asset.
     *
     * @returns {Object}
     */
    getVariants : function() {
      return this._get('variants');
    },

    /**
     * Get a particular variant for this asset.
     *
     * @returns {Object}
     */
    getVariant : function(variant) {
      var variants = this._get('variants');
      return variants ? variants[variant] : null;
    },

    /**
     * Returns the url to the ttml-xml for closed captioning
     */
    getCCUrl: function() {
      return this._get('cc_url');
    },

    /**
     * Get provider id for the asset.
     *
     * @returns {String}
     */
    getProviderId : function() {
      return this._get('providerid');
    },

    /**
     * Get provider name for the asset.
     *
     * @returns {String}
     */
    getProviderName : function() {
      return this._get('providername');
    },

    /**
     * Get trimmed provider name for the asset.
     *
     * @returns {String}
     */
    getTrimmedProviderName : function() {
      return this._get('providername') ? this._get('providername').split(" ")[0] : "";
    },

    getMarketId : function() {
      return this._get('marketid');
    },

    /**
     * Get vendor id for the asset.
     *
     * @returns {String}
     */
    getVendorId : function() {
      return this._get('vendorid');
    },

    /**
     * Get a
     * @returns {*}
     */
    getSource : function() {
      var source = this._get('flags') && this._get('flags').orig_source;
      return (source ? source : "");
    },

    /**
     * Get Total assets. This is not available for all assets but for few like slideshow.
     * @returns {*}
     */
    getTotalAssets : function() {
      return this._get('totalAssets');
    },

    /**
     * Temp stub till we actually have credit.
     * @returns {*}
     */
    getCredit : function() {
      return this._get('credit');
    },

    /**
     * Get the credit fo the slideshow image.
     * Slideshow is using sourcename and now credit.
     * @returns {*}
     */
    getSourceName : function() {
      return this._get('sourcename');
    },

    /**
     * Gets asset's source as to where it came from: mmclip, mpx etc.
     * @returns {*}
     */
    getSourceName2: function() {
      return this._get('source_name');
    },

    /**
     * Get URL of the asset.
     *
     * @returns {*}
     */
    getUrl: function() {
      return this._get('url');
    },

    /**
     * Get asset collection data
     *
     * @returns {String}
     */
    getCollectionData : function() {
      var colldata = this._get("_collectiondata") || {};
      return  {
        getId: function() {
            return colldata.id;
        },
        getAdMetrics: function() {
          return colldata.ad_metrics;
        },
        getSponsored: function() {
          return colldata.sponsored;
        },
        getBackgroundImage: function() {
          return colldata.background_image;
        },
        getVideoBackgroundImage: function() {
          return colldata.background_image && colldata.background_image.video || null;
        },
        getArticleImage: function() {
          return colldata.background_image && colldata.background_image.article || null;
        },
        getTitleImage: function() {
          return colldata.background_image && colldata.background_image.title || null;
        },
        getUrl: function() {
          return colldata.url;
        },
        getTitle: function() {
          return colldata.title;
        }
      };
    },
    /**
     * Get asset author
     *
     * @returns {String}
     */
    getAuthors : function() {
        return this._get('author');
    },
    /**
     * Get playlist data
     *
     * @returns {String}
     */
    getPlaylistData : function() {
        var pldata = this._get('_pldata') || {};
        return {
            getUrl: function() {
                return pldata.url;
            },
            getTitle: function() {
                return pldata.title;
            }
        };
    },
    getAuthRequired: function() {
      return this._get('auth_required');
    }

  });
}]);
twc.shared.apps.factory('UGCAssetModelClass',['CmsAModelClass',function(CmsAModelClass){
    return CmsAModelClass.extend({
        recordType: 'ugc',

        /**
         * Get a particular variant for this asset.
         *
         * @returns {Object}
         */
        getVariant : function(variant) {
          var result = (this._get('variants') || [])[variant];
          var assetsUrl = window.TWC && window.TWC.Configs && window.TWC.Configs.assets_url;
          // HACK: We will remove those code below after fixing dsx request.
          return result && result.replace('http:', 'https:').replace('https://utst.imwx.com', (assetsUrl + '/ugc')).replace('https://ugc.aws-digital-prod-web.s3-website-us-east-1.amazonaws.com', (assetsUrl + '/ugc'));
        },
        /**
         * Get alt asset title
         *
         * @returns {String}
         */
        getAltTitle: function() {
            return this._get('title');
        },

        /**
         * Get URL of the asset.
         *
         * @returns {*}
         */
        getAssetUrl: function() {
            return this.getVariant("stream");
        },

        /**
         * Get canonical URL where you can view the asset on website
         *
         * @returns {String}
         */
        getCanonicalUrl : function() {
            return this._get('seourl');
        },

        /**
         * Get asset's thumb URL, do I need this
         *
         * @returns {String}
         */
        getLargeThumbUrl : function() {
            return this.getVariant(12);
        },

        getProviderId: function() {
          return this._get('providerid');
        },

        getPublishDate: function() {
          return this._get('publishdate');
        },

      /**
       * Get asset collection data
       *
       * @returns {String}
       */
      getCollectionData : function() {
        var colldata = this._get("_collectiondata") || {};
        return  {
          getId: function() {
            return colldata.groupid;
          },
          getAdMetrics: function() {
            return colldata.ad_metrics;
          },
          getSponsored: function() {
            return colldata.sponsored;
          },
          getBackgroundImage: function() {
            return colldata.background_image;
          },
          getVideoBackgroundImage: function() {
            return colldata.background_image && colldata.background_image.video || null;
          },
          getArticleImage: function() {
            return colldata.background_image && colldata.background_image.article || null;
          },
          getTitleImage: function() {
            return colldata.background_image && colldata.background_image.title || null;
          },
          getUrl: function() {
            return colldata.url;
          },
          getTitle: function() {
            return colldata.title;
          }
        };
      }

    });
}]);
twc.shared.apps.factory('VideoAssetModelClass',['CmsAModelClass',function(CmsAModelClass){
    return CmsAModelClass.extend({
        recordType: 'video',

        /**
         * Get alt asset title
         *
         * @returns {String}
         */
        getAltTitle: function() {
            return this._get('altitle');
        },

        /**
         * Get the video description.
         *
         * @returns {String}
         */
        getVideoDescription: function() {
          return this._get('description');
        },

        /**
         * Get URL of the asset.
         *
         * @returns {*}
         */
        // TODO: THIS SHOULD BE UNDER VARIANTS {STREAM: 'VIDEOURL'}
        getAssetUrl: function() {
            return this._get("mezzanine_url");
        },

        /**
         * Get canonical URL where you can view the asset on website
         *
         * @returns {String}
         */
        getCanonicalUrl : function() {
            return this._get('url');
        },

        /**
         * Get asset's thumb URL, do I need this
         *
         * @returns {String}
         */
        getLargeThumbUrl : function() {
            return this.getVariant(200);
        },


        /**
         * Index of asset item
         *
         * @returns {String}
         */
        getItemIndex : function() {
          return this._get("itemIndex");
        },

        /**
         * Setter method for item index
         * @param idx
         */
        setItemIndex : function(idx) {
          this.set({"itemIndex": idx});
        }
    });
}]);
;
/**
 * Author: ksankaran (Velu)
 * Date: 2/4/14
 * Time: 1:27 PM
 * Comments:
 */

twc.shared.apps.factory('CmsCollectionsModelClass', ['RecordModel',
    function(RecordModel) {
        return RecordModel.extend({
            recordType: 'CmsCollections',

            /**
             * The response is simple and without header. So, set the response as data.
             * @param response
             */
            setResponse: function(response) {
                this.data = response;
                this.header = "NA";
            },

            /**
             * getGroupId
             * @returns {String}
             */
            getGroupId: function() {
                return this._get('groupid');
            },

            /**
             * Collection ID
             * @return {String}
             */
            getId: function() {
                return this._get('id');
            },

            /**
             * Get asset id
             *
             * @returns {String}
             */
            getDescription: function() {
                return this._get('description');
            },
            /**
             * getTitle
             * @returns {String}
             */
            getTitle: function() {
                return this._get('title');
            },
            /**
             * theme
             * @returns {String}
             */
            getTheme: function() {
                return this._get('theme');
            },
            /**
             * sponsorship
             * @returns {String}
             */
            getSponsorship: function() {
                return this._get('sponsorship');
            },
            /**
             * sequence
             * @returns {String}
             */
            getSequence: function() {
                return this._get('sequence');
            },
            /**
             * featured
             * @returns {String}
             */
            getFeatured: function() {
                return this._get('featured');
            },
            /**
             * imageurl
             * @returns {String}
             */
            getImageUrl: function() {
                return this._get('imageurl');
            },

            /**
             * Get collection data background image - video
             *
             * @returns {String}
             */
            getVideoBackgroundImage: function() {
                return this._get('background_image') ? this._get('background_image').video : null;
            },

            /**
             * Get collection data background image - article
             *
             * @returns {String}
             */
            getArticleBackgroundImage: function() {
                return this._get('background_image') ? this._get('background_image').article : null;
            },

            /**
             * Get collection data background image - article
             *
             * @returns {String}
             */
            getTitleImage: function() {
                return this._get('background_image') ? this._get('background_image').title : null;
            },

            /**
             * imageurl
             * @returns {String}
             */
            getUrl: function() {
                return this._get('url');
            },

            /**
             * Get collection data background image - article
             *
             * @returns {String}
             */
            getSponsored: function() {
                return this._get('sponsored');
            },

            /**
             *  Returns ads metrics object
             */
            getAdMetrics: function() {
              return this._get('ad_metrics');
            }

        });
    }
]);
;
!function(n){angular.module("twc_dal").factory("SunTurboAggregationConfig",function(){return n.SunTurboAggregationConfig})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/aggregation_configs/sun_turbo_agg_config_ng.factory.min.js.map
;
!function(a){angular.module("twc_dal").factory("TwcDalCache",function(){return a.TwcDalCache})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/twc_dal_ng.cache.factory.min.js.map
;
!function(n){angular.module("twc_dal").factory("TwcDalClient",function(){return n.TwcDalClient})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/twc_dal_ng.client.factory.min.js.map
;
!function(l){angular.module("twc_dal").factory("TwcDalModel",function(){return l.TwcDalModel})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/twc_dal_ng.model.factory.min.js.map
;
!function(a){angular.module("twc_dal").factory("TwcDalBaseModel",function(){return a.TwcDalBaseModel})}(window.TWC);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/twc_dal/ng/models/base_turbo_ng.model.factory.min.js.map
;
!function(e,a){"use strict";function n(){return nwsOfficeIDMapping={KALY:"Albany, NY",KLWX:"Baltimore/Washington, MD",KBGM:"Binghamton, NY",KBOX:"Boston, MA",KTAR:"Boston, NERFC MA",KBUF:"Buffalo, NY",KBTV:"Burlington, VT",KCAR:"Caribou, ME",KCTP:"State College, PA",KRHA:"State College, MARFC PA",KCHS:"Charleston, SC",KRLX:"Charleston, WV",KILN:"Cincinnati/Wilmington, OH",KTIR:"Cincinnati, OHRFC OH",KCLE:"Cleveland, OH",KCAE:"Columbia, SC",KGSP:"Greenville-Spartanburg, SC",KMHX:"Newport, NC",KOKX:"New York City, NY",KPHI:"Philadelphia, PA",KPBZ:"Pittsburgh, PA",KGYX:"Portland, ME",KRAH:"Raleigh/Durham, NC",KRNK:"Roanoke/Blacksburg, VA",KAKQ:"Wakefield, VA",KILM:"Wilmington, NC",KABQ:"Albuquerque, NM",KAMA:"Amarillo, TX",KFFC:"Atlanta, GA",KALR:"Atlanta, SERFC GA",KEWX:"Austin/San Antonio, TX",KBMX:"Birmingham, AL",KBRO:"Brownsville, TX",KCRP:"Corpus Christi, TX",KFWD:"Dallas/Fort Worth, TX",KFWR:"Fort Worth, WGRFC TX",KEPZ:"El Paso, TX",KHGX:"Houston/Galveston, TX",KHUN:"Huntsville, AL",KJAN:"Jackson, MS",KJAX:"Jacksonville, FL",KMRX:"Knoxville/Tri-Cities, TN",KEYX:"Key West, FL",KKEY:"Key West, FL",KEYW:"Key West, FL",KLCH:"Lake Charles, LA",KLZK:"Little Rock, AR",KLUB:"Lubbock, TX",KMLB:"Melbourne, FL",KMEG:"Memphis, TN",KMFL:"Miami, FL",KMAF:"Midland/Odessa, TX",KMOB:"Mobile, AL",KOHX:"Nashville, TN",KLIX:"New Orleans/Baton Rouge, LA",KORN:"Slidell, LMRFC LA",KOUN:"Oklahoma City, OK",KSJT:"San Angelo, TX",TJSJ:"San Juan, PR",KSHV:"Shreveport, LA",KTAE:"Tallahassee, FL",KTBW:"Tampa Bay/Ruskin, FL",KTSA:"Tulsa, OK",KTUA:"Tulsa, ABRFC OK",KABR:"Aberdeen, SD",KAPX:"Alpena/Gaylord, MI",KBIS:"Bismarck, ND",KCYS:"Cheyenne, WY",KLOT:"Chicago, IL",KDVN:"Davenport/Quad Cities, IA",KBOU:"Denver/Boulder, CO",KDMX:"Des Moines, IA",KDTX:"Detroit, MI",KDDC:"Dodge City, KS",KDLH:"Duluth, MN",KEVV:"Evansville, IN",KFGF:"Fargo/Grand Forks, ND",KGLD:"Goodland, KS",KGJT:"Grand Junction, CO",KGRR:"Grand Rapids, MI",KGRB:"Green Bay, WI",KGID:"Hastings, NE",KIND:"Indianapolis, IN",KJKL:"Jackson, KY",KEAX:"Kansas City/Pleasant Hill, MO",KKRF:"Pleasant Hill, MBRFC MO",KARX:"LaCrosse, WI",KILX:"Lincoln, IL",KLMK:"Louisville, KY",KMQT:"Marquette, MI",KMKX:"Milwaukee/Sullivan, WI",KMPX:"Minneapolis, MN",KMSR:"Chanhassen, NCRFC MN",KLBF:"North Platte, NE",KIWX:"North Webster, IN",KOAX:"Omaha, NE",KPAH:"Paducah, KY",KPUB:"Pueblo, CO",KUNR:"Rapid City, SD",KRIW:"Riverton, WY",KFSD:"Sioux Falls, SD",KSGF:"Springfield, MO",KLSX:"St. Louis, MO",KTOP:"Topeka, KS",KICT:"Wichita, KS",KBYZ:"Billings, MT",KBOI:"Boise, ID",KLKN:"Elko, NV",KEKA:"Eureka, CA",KFGZ:"Flagstaff, AZ",KGGW:"Glasgow, MT",KTFX:"Great Falls, MT",KHNX:"Hanford, CA",KVEF:"Las Vegas, NV",KLOX:"Los Angeles, CA",KMFR:"Medford, OR",KMSO:"Missoula, MT",KPDT:"Pendleton, OR",KPSR:"Phoenix, AZ",KPIH:"Pocatello/Idaho Falls, ID",KPQR:"Portland, OR",KPTR:"Portland, NWRFC OR",KREV:"Reno, NV",KSTO:"Sacramento, CA",KRSA:"Sacramento, CNRFC CA",KSLC:"Salt Lake City, UT",KSTR:"Salt Lake City, CBRFC UT",KSGX:"San Diego, CA",KMTR:"San Francisco/Monterey, CA",KSEW:"Seattle/Tacoma, WA",KOTX:"Spokane, WA",KTWC:"Tucson, AZ",PAFC:"Anchorage, AK",PACR:"Anchorage, APRFC AK",PANT:"Annette Island, AK",PABR:"Barrow, AK",PABE:"Bethel, AK",PACD:"Cold Bay, AK",PAFG:"Fairbanks, AK",PAJK:"Juneau, AK",PAKN:"King Salmon, AK",PADQ:"Kodiak, AK",PAOT:"Kotzebue, AK",PAMC:"McGrath, AK",PAOM:"Nome, AK",PASN:"St. Paul Island, AK",PAVW:"Valdez, AK",PAYA:"Yakutat, AK",PHFO:"Honolulu, HI",PGUM:"Tiyan, GU",NSTU:"Pago Pago, AS",NCDC:"National Climatic Data Center, NC",NCEP:"National Centers for Environmental Prediction, MD",NSSL:"National Severe Storms Laboratory, OK",NDBC:"National Data Buoy Center, MS",KTPC:"Tropical Prediction Center, FL",KNHC:"National Hurricane Center, FL",KHPC:"Hydrometeorological Prediction Center, MD",KWNH:"Hydrometeorological Prediction Center, MD",KAWC:"Aviation Weather Center, MO",KSPC:"Storm Prediction Center, OK",SWPC:"Space Weather Prediction Center, CO",KCPC:"Climate Prediction Center, MD",KOPC:"Ocean (Marine) Prediction Center, MD",KMPC:"Marine (Ocean) Prediction Center, MD",KWNM:"Marine (Ocean) Prediction Center, MD",KWBC:"Telecommunications Operations Center, MD",KWBN:"Telecommunications Operations Center, MD",PAAQ:"West Coast/Alaska Tsunami Warning Center, AK",PHEB:"Pacific Tsunami Warning Center, HI",AAWU:"Alaska Aviation Weather Unit, AK",CPHC:"Central Pacific Hurricane Center, HI",ITIC:"International Tsunami Information Center, HI",KZZZ:"The Weather Channel, GA"},{getOfficeName:function(e){return nwsOfficeIDMapping[e]}}}e.module("glomo_alert_factory").factory("nwsOfficeIDMapping",n),n.$inject=[]}(angular,TWC);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_alert_factory/glomo_alert_office_mapping.factory.min.js.map
;
!function(e,t){"use strict";function n(e,n,o,a,c,i,l,u,s,f){function d(e){var t,n,o;t=e instanceof Error?e:null,n=t?t.message:"string"==typeof e?e:null,o=t||"object"!=typeof e?null:e,r.error(n||o)}function m(e,t,n){var r=o;if(!e)return null;var a=r["new"](e,t);return a.format(n)}function g(e){for(var t=e.split("\n"),n=[""],r=0,o=0;o<t.length;o++)t[o]=t[o].replace(/[.]{3}/g,"... ").trim(),t[o]&&t[o].indexOf("EUMETNET - MeteoAlarm")===-1&&(n[r]=n[r]?n[r]+t[o]:t[o],n[r]+=" ",n[r]=n[r].replace(/amp/,"&&")," "===t[o+1]&&r++);return n}function h(e,t,n,r){return e?e:"US"===r?null!=t&&null!=n&&("TTW"===t&&"TB"===n||"TEM"===t&&"TB"===n||"TLL"===t&&"TR"===n||"TWX"===t&&"TR"===n)?"The Weather Channel":"The National Weather Service":"CA"===r?"Environment Canada":"EUMETNET - MeteoAlarm"}function v(e,t,r){var o="";if(t||r){var a={"@headline":e};o=n("pfTranslate")("@headline for ",{context:"glomo_alert_factory",vars:a})}var c=[o,t,r&&t&&", ",r];return c.join("")}function _(e,t,n){return e?e:"CA"===n?"Meteorological Service of Canada":t?nwsOfficeIDMapping.getOfficeName(t):""}function p(e,t){var n;return e&&(n=e.fld_location_name),n?t+" ("+n+")":t}function b(e,t){var n,r=3;return e&&(L=e[0],Math.max(L.tree,L.grass,L.weed)>=r&&(n={severity:r,description:y("Local Pollen Alert",{context:"gm_alerts"}),type:"pollen",fromStr:"pollen",url:t.pollenUrl+t.locId})),n}function T(e,t){var n=[];return e&&(n=f.map(e,function(e){return{type:"bulletin",severity:e.severity_cd,fromStr:e.phenomena+e.significance,validEndTime:m(e.expire_dt_tm_local,e.effective_dt_tm_tz_abbrv,P),validStartTime:m(e.effective_dt_tm_local,e.issue_dt_tm_tz_abbrv,P),description:p(e.flood,e.event_desc),phenomena:e.phenomena,significance:e.significance,area_id:e.area_id,office_cd:e.office_cd,etn:e.etn,detail_key:e.detail_key,url:[t.detailUrl,t.locId,"?phenomena=",e.phenomena,"&significance=",e.significance,"&areaid=",e.area_id,"&office=",e.office_cd,"&etn=",e.etn].join("")}})),n}r=a.getInstance("glomo_alert_factory");var x={isShowPollen:!1,pollenUrl:"/forecast/allergy/l/",detailUrl:"/weather/alerts/localalerts/l/",currentLocation:null,locId:""},y=n("pfTranslate"),P=y("h:mma z, EEE MMM d",{context:"weather_dateformats"}),w=e.all([].concat(c.get("page").promises,c.get("user").promises)).then(function(){var e=c.get("page").attributes.currentLocation;if(e){var t=e.lat,n=e["long"],r=t&&n?new i(t+"/"+n):void 0,o=t&&n?new l(t+","+n):void 0,a=t&&n?new s(t+","+n):void 0;return{bulletins:r,pollenObs:o,bulletinsTurbo:a,locId:e.loc}}})["catch"](d),L={getBullentins:function(e){if(e&&e.currentLocation){var t=new i(e.currentLocation.lat+"/"+e.currentLocation["long"]);return t.execute().then(function(){return T(t.getData(),e)})["catch"](function(e){return[]})}return w.then(function(t){var n;return t&&t.bulletins?n=t.bulletins.execute().then(function(){return e.locId=t.locId,T(t.bulletins.getData(),e)})["catch"](function(e){return[]}):r.warn("Could not execute commonP.getBullentins: ",t),n})},getTurboBullentins:function(e){var t=e.currentLocation.lat+","+e.currentLocation["long"],n=new s(t),r=[],o=n.execute().then(function(){return r=f.map(n.items,function(e){return{type:"bulletin",severity:e.severityCode,fromStr:e.phenomenaCode+e.significanceCode,phenomena:e.phenomenaCode,significance:e.significanceCode}})})["catch"](function(e){return r});return o},getPollenObs:function(e){if(!e.isShowPollen)return null;if(e&&e.currentLocation){var t=new l(e.currentLocation.lat+","+e.currentLocation["long"]);return t.execute().then(function(){return b(t.items,e)})["catch"](d)}return w.then(function(t){var n;return t&&t.pollenObs?n=t.pollenObs.execute().then(function(){return e.locId=t.locId,b(t.pollenObs.items,e)})["catch"](d):r.warn("Could not execute commonP.pollenObs: ",t),n})},getDetail:function(e){var t=new u(e),n=t.execute().then(function(){var e;return t.getData()&&(e=t.getData()),e})["catch"](d);return n},getAlerts:function(t){var n=f.extend(f.clone(x),t);return e.all([this.getBullentins(n),this.getPollenObs(n)]).then(function(e){var t=e[0],n=e[1];return n?[].concat(t,n):[].concat(t)})["catch"](d)},getTurboAlerts:function(e){var t=f.extend(f.clone(x),e);return Promise.all([this.getTurboBullentins(t),this.getPollenObs(t)]).then(function(e){var t=e[0],n=e[1];return n?[].concat(t,n):[].concat(t)})["catch"](d)},getAlertDetail:function(e){var n=f.extend(f.clone(x),e),r=this,o={office_cd:t.PcoUtils.getURLParameter("office")||"",area_id:t.PcoUtils.getURLParameter("areaid")||"",phenomena:t.PcoUtils.getURLParameter("phenomena")||"",significance:t.PcoUtils.getURLParameter("significance")||"",etn:t.PcoUtils.getURLParameter("etn")||""};return r.getAlerts(n).then(function(e){var t,n=f.findWhere(e,o);return n&&(t=r.getDetail(n.detail_key).then(function(t){var r=f.reject(e,function(e){return n===e});return{others:r,issuerLoc:_(t.office_name,t.office_cd,t.office_cntry_cd),issuer:h(t.source,t.phenomena,t.significance,t.office_cntry_cd),issueTime:m(t.issue_dt_tm_local,t.issue_dt_tm_tz_abbrv,P),disclaimer:t.disclaimer,source:t.source,severity:t.severity_cd,headline:v(t.event_desc,t.area_name,t.st_name),narrative:t.texts&&t.texts[0]&&t.texts[0].description?g(t.texts[0].description):"",synopsis:t.texts&&t.texts[0]&&t.texts[0].overview?g(t.texts[0].overview):""}})["catch"](function(e){return e})),t})["catch"](d)}};return Object.freeze(L)}var r;e.module("glomo_alert_factory").factory("glomoAlertFactory",n),n.$inject=["$q","$filter","datefactory","$log","twcPco","V1AlertsDalModel","PollenForecastTurboModel","V1AlertDetailsDalModel","AlertsTurboModel","twcUtil"]}(angular,TWC);
//# sourceMappingURL=/sites/all/modules/glomo/shared/glomo_alert_factory/glomo_alert_factory.factory.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("dsxdate",["$rootScope","datefactory",function(e,t){var a={priority:0,replace:!0,template:'<span class="wx-dsxdate" data-ng-bind="dsxDateOutput()"></span>',scope:!0,restrict:"EA",link:function(e,a,r){e.dsxDateOutput=function(){prefix=e.$eval(r.labelprefix)||"";var a={date:e.$eval(r.date),time:e.$eval(r.time),datetime:e.$eval(r.datetime),timezone:e.$eval(r.timezone),placeholder:e.$eval(r.placeholder),format:e.$eval(r.format)};if(!(a.datetime||a.date||a.time))return prefix+" "+angular.isDefined(a.placeholder)?a.placeholder:t["new"]("",a.timezone).format(a.format);var i;if(i=a.datetime?t["new"](a.datetime,a.timezone):t["new"](a.date,a.time,a.timezone)){var d=i.format(a.format);if(d)return prefix+" "+d}}}};return a}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/dsx_date/dsx_date.directive.min.js.map
;
twc.shared=twc.shared||{},twc.shared.apps=twc.shared.apps||angular.module("shared",[]),twc.shared.apps.directive("wxicon",["twcUtil","wxiconFactory",function(e,r){var t={priority:0,replace:!1,template:function(e,r){var t='<div class="svg-icon">';return t+=navigator.userAgent.indexOf("Firefox")===-1&&navigator.appVersion.indexOf("Trident")===-1&&"raster"!==r.imageType?r.vectorOptimized?"<ng-include src=\"getIconUrl('vector', true)\" />":"<img ng-src=\"{{getIconUrl('vector')}}\" />":"<img ng-src=\"{{getIconUrl('raster')}}\" />",t+="</div>"},scope:{skyCode:"="},restrict:"EA",link:function(e,t){t.addClass("wx-weather-icon"),e.$watch("skyCode",function(a){t.attr("aria-hidden","true");var n=r.getIconName(e.skyCode),c=n?n.replace(/-/g," "):null;if(c){var i=t.find("img");i&&i[0]&&angular.element(i[0]).attr("alt",c),t.attr("alt",c)}}),e.getIconUrl=function(t,a){return r.getIconUrl(e.skyCode,"raster"===t,a)}}};return t}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/wxicon/wxicon.directive.min.js.map
;
twc.shared.apps.factory("wxiconFactory",["twcUtil",function(t){function n(t){return e.useSVG&&!t?e.useSVGz?".svgz":".svg":".png"}function s(t,n){var s=e.useSVG&&!t?e.useSVGz?e.svgzPath:e.svgPath:e.pngPath;return e.basePath+s}var e={basePath:"/sites/all/modules/custom/angularmods/app/shared/wxicon/",pngPath:"png/",svgPath:"svg/",svgzPath:"svgz/",allowSVG:!0,useSVGz:!0};e.useSVG=e.allowSVG&&Modernizr.svg;var r={tornado:["0","00"],"tropical-storm":["1","01","2","02"],thunderstorm:["3","03","4","04"],"rain-snow":["5","05","7","07"],"rain-hail":["6","06","10","35"],"freezing-drizzle":["8","08"],"scattered-showers":["9","09","11","39"],rain:["12"],flurries:["13"],snow:["14","16"],"blowing-snow":["15","25"],hail:["17","18"],fog:["19","20","21","22"],wind:["23","24"],cloudy:["26"],"mostly-cloudy-night":["27"],"mostly-cloudy":["28"],"partly-cloudy-night":["29"],"partly-cloudy":["30"],"clear-night":["31"],sunny:["32","36"],"mostly-clear-night":["33"],"mostly-sunny":["34"],"isolated-thunderstorms":["37"],"scattered-thunderstorms":["38"],"heavy-rain":["40"],"scattered-snow":["41"],"heavy-snow":["42","43"],na:["-","44","na"],"scattered-showers-night":["45"],"scattered-snow-night":["46"],"scattered-thunderstorms-night":["47"]};return{getIconName:function(n,s){var e;if(t.isNumeric(n)&&n>=0&&n<=47){var a=t.keys(r);t.each(a,function(s){t.indexOf(r[s],n.toString())!==-1&&(e=s)})}else e="na";return s&&(e+="-optimized"),e},getIconUrl:function(t,e,r){return s(e)+this.getIconName(t,!e&&r)+n(e)+"?1"}}}]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/wxicon/wxicon.factory.min.js.map
;
!function(n,i){function l(n,i){return{link:function(i,l){l.drilldown({selector:".drilldown-item"}).on("click.drilldown",".drilldown-item",function(n){l.scrollTop(0)}),n.getEvent("drilldown-reset").progress(function(){l.drilldown("reset")})}}}twc.shared.apps.directive("drilldown",l),l.$inject=["customEvent","$timeout"]}(angular,jQuery);
//# sourceMappingURL=/sites/all/modules/glomo/shared/drilldown/drilldown.directive.min.js.map
;
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.bindHtml","ui.bootstrap.dropdown","ui.bootstrap.position","ui.bootstrap.tooltip","ui.bootstrap.modal","ui.bootstrap.buttons","ui.bootstrap.transition","ui.bootstrap.tabs","ui.bootstrap.carousel","ui.bootstrap.popover","ui.bootstrap.alert","ui.bootstrap.accordion"]),angular.module("ui.bootstrap.tpls",["template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/modal/backdrop.html","template/modal/window.html","template/tabs/tab.html","template/tabs/tabset.html","template/carousel/carousel.html","template/carousel/slide.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/alert/alert.html","template/accordion/accordion-group.html","template/accordion/accordion.html"]),angular.module("ui.bootstrap.collapse",[]).directive("collapse",["$animate",function(e){return{link:function(t,n,o){function a(){n.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e.addClass(n,"in",{to:{height:n[0].scrollHeight+"px"}}).then(i)}function i(){n.removeClass("collapsing"),n.css({height:"auto"})}function l(){return n.hasClass("collapse")||n.hasClass("in")?(n.css({height:n[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void e.removeClass(n,"in",{to:{height:"0"}}).then(r)):r()}function r(){n.css({height:"0"}),n.removeClass("collapsing"),n.addClass("collapse")}t.$watch(o.collapse,function(e){e?l():a()})}}}]),angular.module("ui.bootstrap.bindHtml",[]).value("$bindHtmlUnsafeSuppressDeprecated",!1).directive("bindHtmlUnsafe",["$log","$bindHtmlUnsafeSuppressDeprecated",function(e,t){return function(n,o,a){t||e.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"),o.addClass("ng-binding").data("$binding",a.bindHtmlUnsafe),n.$watch(a.bindHtmlUnsafe,function(e){o.html(e||"")})}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document","$rootScope",function(e,t){var n=null;this.open=function(t){n||(e.bind("click",o),e.bind("keydown",a)),n&&n!==t&&(n.isOpen=!1),n=t},this.close=function(t){n===t&&(n=null,e.unbind("click",o),e.unbind("keydown",a))};var o=function(e){if(n&&(!e||"disabled"!==n.getAutoClose())){var o=n.getToggleElement();if(!(e&&o&&o[0].contains(e.target))){var a=n.getDropdownElement();e&&"outsideClick"===n.getAutoClose()&&a&&a[0].contains(e.target)||(n.isOpen=!1,t.$$phase||n.$apply())}}},a=function(e){27===e.which?(n.focusToggleElement(),o()):n.isKeynavEnabled()&&/(38|40)/.test(e.which)&&n.isOpen&&(e.preventDefault(),e.stopPropagation(),n.focusDropdownEntry(e.which))}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate","$position","$document","$compile","$templateRequest",function(e,t,n,o,a,i,l,r,s,c){var p,u,d=this,m=e.$new(),f=o.openClass,v=angular.noop,g=t.onToggle?n(t.onToggle):angular.noop,h=!1,$=!1,b=r.find("body");this.init=function(o){d.$element=o,t.isOpen&&(u=n(t.isOpen),v=u.assign,e.$watch(u,function(e){m.isOpen=!!e})),h=angular.isDefined(t.dropdownAppendToBody),$=angular.isDefined(t.keyboardNav),h&&d.dropdownMenu&&(b.append(d.dropdownMenu),b.addClass("dropdown"),o.on("$destroy",function(){d.dropdownMenu.remove()}))},this.toggle=function(e){return m.isOpen=arguments.length?!!e:!m.isOpen},this.isOpen=function(){return m.isOpen},m.getToggleElement=function(){return d.toggleElement},m.getAutoClose=function(){return t.autoClose||"always"},m.getElement=function(){return d.$element},m.isKeynavEnabled=function(){return $},m.focusDropdownEntry=function(e){var t=d.dropdownMenu?angular.element(d.dropdownMenu).find("a"):angular.element(d.$element).find("ul").eq(0).find("a");switch(e){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===t.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=t.length-1}t[d.selectedOption].focus()},m.getDropdownElement=function(){return d.dropdownMenu},m.focusToggleElement=function(){d.toggleElement&&d.toggleElement[0].focus()},m.$watch("isOpen",function(t,n){if(h&&d.dropdownMenu){var o=l.positionElements(d.$element,d.dropdownMenu,"bottom-left",!0),r={top:o.top+"px",display:t?"block":"none"},u=d.dropdownMenu.hasClass("dropdown-menu-right");u?(r.left="auto",r.right=window.innerWidth-(o.left+d.$element.prop("offsetWidth"))+"px"):(r.left=o.left+"px",r.right="auto"),d.dropdownMenu.css(r)}var $=h?b:d.$element;if(i[t?"addClass":"removeClass"]($,f).then(function(){angular.isDefined(t)&&t!==n&&g(e,{open:!!t})}),t)d.dropdownMenuTemplateUrl&&c(d.dropdownMenuTemplateUrl).then(function(e){p=m.$new(),s(e.trim())(p,function(e){var t=e;d.dropdownMenu.replaceWith(t),d.dropdownMenu=t})}),m.focusToggleElement(),a.open(m);else{if(d.dropdownMenuTemplateUrl){p&&p.$destroy();var C=angular.element('<ul class="dropdown-menu"></ul>');d.dropdownMenu.replaceWith(C),d.dropdownMenu=C}a.close(m),d.selectedOption=null}angular.isFunction(v)&&v(e,t)}),e.$on("$locationChangeSuccess",function(){"disabled"!==m.getAutoClose()&&(m.isOpen=!1)});var C=e.$on("$destroy",function(){m.$destroy()});m.$on("$destroy",C)}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(e,t,n,o){o.init(t),t.addClass("dropdown")}}}).directive("dropdownMenu",function(){return{restrict:"AC",require:"?^dropdown",link:function(e,t,n,o){if(o){var a=n.templateUrl;a&&(o.dropdownMenuTemplateUrl=a),o.dropdownMenu||(o.dropdownMenu=t)}}}}).directive("keyboardNav",function(){return{restrict:"A",require:"?^dropdown",link:function(e,t,n,o){t.bind("keydown",function(e){if([38,40].indexOf(e.which)!==-1){e.preventDefault(),e.stopPropagation();var t=o.dropdownMenu.find("a");switch(e.which){case 40:angular.isNumber(o.selectedOption)?o.selectedOption=o.selectedOption===t.length-1?o.selectedOption:o.selectedOption+1:o.selectedOption=0;break;case 38:angular.isNumber(o.selectedOption)?o.selectedOption=0===o.selectedOption?0:o.selectedOption-1:o.selectedOption=t.length-1}t[o.selectedOption].focus()}})}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(e,t,n,o){if(o){t.addClass("dropdown-toggle"),o.toggleElement=t;var a=function(a){a.preventDefault(),t.hasClass("disabled")||n.disabled||e.$apply(function(){o.toggle()})};t.bind("click",a),t.attr({"aria-haspopup":!0,"aria-expanded":!1}),e.$watch(o.isOpen,function(e){t.attr("aria-expanded",!!e)}),e.$on("$destroy",function(){t.unbind("click",a)})}}}}),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function o(e){return"static"===(n(e,"position")||"static")}var a=function(t){for(var n=e[0],a=t.offsetParent||n;a&&a!==n&&o(a);)a=a.offsetParent;return a||n};return{position:function(t){var n=this.offset(t),o={top:0,left:0},i=a(t[0]);i!=e[0]&&(o=this.offset(angular.element(i)),o.top+=i.clientTop-i.scrollTop,o.left+=i.clientLeft-i.scrollLeft);var l=t[0].getBoundingClientRect();return{width:l.width||t.prop("offsetWidth"),height:l.height||t.prop("offsetHeight"),top:n.top-o.top,left:n.left-o.left}},offset:function(n){var o=n[0].getBoundingClientRect();return{width:o.width||n.prop("offsetWidth"),height:o.height||n.prop("offsetHeight"),top:o.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:o.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}},positionElements:function(e,t,n,o){var a,i,l,r,s=n.split("-"),c=s[0],p=s[1]||"center";a=o?this.offset(e):this.position(e),i=t.prop("offsetWidth"),l=t.prop("offsetHeight");var u={center:function(){return a.left+a.width/2-i/2},left:function(){return a.left},right:function(){return a.left+a.width}},d={center:function(){return a.top+a.height/2-l/2},top:function(){return a.top},bottom:function(){return a.top+a.height}};switch(c){case"right":r={top:d[p](),left:u[c]()};break;case"left":r={top:d[p](),left:a.left-i};break;case"bottom":r={top:d[c](),left:u[p]()};break;case"over_top_left":r={top:a.top,left:a.left};break;default:r={top:a.top-l,left:u[p]()}}return r}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0,useContentExp:!1},n={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},o={};this.options=function(e){angular.extend(o,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate","$rootScope","$parse",function(a,i,l,r,s,c,p,u){return function(a,d,m,f){function v(e){var t=(e||f.trigger||m).split(" "),o=t.map(function(e){return n[e]||e});return{show:t,hide:o}}f=angular.extend({},t,o,f);var g=e(a),h=c.startSymbol(),$=c.endSymbol(),b="<div "+g+'-popup title="'+h+"title"+$+'" '+(f.useContentExp?'content-exp="contentExp()" ':'content="'+h+"content"+$+'" ')+'placement="'+h+"placement"+$+'" popup-class="'+h+"popupClass"+$+'" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';return{restrict:"EA",compile:function(e,t){var n=i(b);return function(e,t,o,i){function c(){q.isOpen?g():m()}function m(){I&&!e.$eval(o[d+"Enable"])||(w(),q.popupDelay?D||(D=l(h,q.popupDelay,!1)):h())}function g(){$(),p.$$phase||p.$digest()}function h(){return D=null,S&&(l.cancel(S),S=null),(f.useContentExp?q.contentExp():q.content)?(b(),q.isOpen=!0,M&&M.assign(q.origScope,q.isOpen),p.$$phase||q.$apply(),x.css({display:"block"}),void F()):angular.noop}function $(){q.isOpen=!1,M&&M.assign(q.origScope,q.isOpen),l.cancel(D),D=null,l.cancel(A),A=null,q.animation?S||(S=l(C,500)):C()}function b(){x&&C(),T=q.$new(),x=n(T,function(e){U?r.find("body").append(e):t.after(e)}),f.useContentExp&&(T.$watch("contentExp()",function(e){!e&&q.isOpen&&$()}),T.$watch(function(){H||(H=!0,T.$$postDigest(function(){H=!1,q.isOpen&&F()}))}))}function C(){S=null,x&&(x.remove(),x=null),T&&(T.$destroy(),T=null)}function w(){k(),y(),E()}function k(){q.popupClass=o[d+"Class"]}function y(){var e=o[d+"Placement"];q.placement=angular.isDefined(e)?e:f.placement}function E(){var e=o[d+"PopupDelay"],t=parseInt(e,10);q.popupDelay=isNaN(t)?f.popupDelay:t}function O(){var e=o[d+"Trigger"];L(),N=v(e),"none"!==N.show&&N.show.forEach(function(e,n){e===N.hide[n]?t[0].addEventListener(e,c):e&&(t[0].addEventListener(e,m),t[0].addEventListener(N.hide[n],g))})}var x,T,S,D,A,U=!!angular.isDefined(f.appendToBody)&&f.appendToBody,N=v(void 0),I=angular.isDefined(o[d+"Enable"]),q=e.$new(!0),H=!1,M=!!angular.isDefined(o[d+"IsOpen"])&&u(o[d+"IsOpen"]),F=function(){x&&(A||(A=l(function(){x.css({top:0,left:0,width:"auto",height:"auto"});var e=s.position(x),n=s.positionElements(t,x,q.placement,U);n.top+="px",n.left+="px",n.width=e.width+"px",n.height=e.height+"px",x.css(n),A=null},0,!1)))};q.origScope=e,q.isOpen=!1,q.contentExp=function(){return e.$eval(o[a])},f.useContentExp||o.$observe(a,function(e){q.content=e,!e&&q.isOpen?$():F()}),o.$observe("disabled",function(e){D&&e&&(l.cancel(D),D=null),e&&q.isOpen&&$()}),o.$observe(d+"Title",function(e){q.title=e,F()}),o.$observe(d+"Placement",function(){q.isOpen&&(y(),F())}),M&&e.$watch(M,function(e){e!==q.isOpen&&c()});var L=function(){N.show.forEach(function(e){t.unbind(e,m)}),N.hide.forEach(function(e){t.unbind(e,g)})};O();var P=e.$eval(o[d+"Animation"]);q.animation=angular.isDefined(P)?!!P:f.animation;var j=e.$eval(o[d+"AppendToBody"]);U=angular.isDefined(j)?j:U,U&&e.$on("$locationChangeSuccess",function(){q.isOpen&&$()}),e.$on("$destroy",function(){l.cancel(S),l.cancel(D),l.cancel(A),L(),C(),q=null})}}}}}]}).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(e,t,n,o){return{link:function(a,i,l){var r,s,c,p=a.$eval(l.tooltipTemplateTranscludeScope),u=0,d=function(){s&&(s.remove(),s=null),r&&(r.$destroy(),r=null),c&&(e.leave(c).then(function(){s=null}),s=c,c=null)};a.$watch(t.parseAsResourceUrl(l.tooltipTemplateTransclude),function(t){var l=++u;t?(o(t,!0).then(function(o){if(l===u){var a=p.$new(),s=o,m=n(s)(a,function(t){d(),e.enter(t,i)});r=a,c=m,r.$emit("$includeContentLoaded",t)}},function(){l===u&&(d(),a.$emit("$includeContentError",t))}),a.$emit("$includeContentRequested",t)):d()}),a.$on("$destroy",d)}}}]).directive("tooltipClasses",function(){return{restrict:"A",link:function(e,t,n){e.placement&&t.addClass(e.placement),e.popupClass&&t.addClass(e.popupClass),e.animation()&&t.addClass(n.tooltipAnimationClass)}}}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html"}}).directive("tooltipTemplate",["$tooltip",function(e){return e("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html"}}).directive("tooltipHtml",["$tooltip",function(e){return e("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).value("tooltipHtmlUnsafeSuppressDeprecated",!1).directive("tooltipHtmlUnsafe",["$tooltip","tooltipHtmlUnsafeSuppressDeprecated","$log",function(e,t,n){return t||n.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."),e("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;n<e.length;n++)if(t==e[n].key)return e[n]},keys:function(){for(var t=[],n=0;n<e.length;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){for(var n=-1,o=0;o<e.length;o++)if(t==e[o].key){n=o;break}return e.splice(n,1)[0]},removeTop:function(){return e.splice(e.length-1,1)[0]},length:function(){return e.length}}}}}).factory("$$multiMap",function(){return{createNew:function(){var e={};return{entries:function(){return Object.keys(e).map(function(t){return{key:t,value:e[t]}})},get:function(t){return e[t]},hasKey:function(t){return!!e[t]},keys:function(){return Object.keys(e)},put:function(t,n){e[t]||(e[t]=[]),e[t].push(n)},remove:function(t,n){var o=e[t];if(o){var a=o.indexOf(n);a!==-1&&o.splice(a,1),o.length||delete e[t]}}}}}}).directive("modalBackdrop",["$animate","$injector","$modalStack",function(e,t,n){function o(t,o,i){i.modalInClass&&(a?a(o,{addClass:i.modalInClass}).start():e.addClass(o,i.modalInClass),t.$on(n.NOW_CLOSING_EVENT,function(t,n){var l=n();a?a(o,{removeClass:i.modalInClass}).start().then(l):e.removeClass(o,i.modalInClass).then(l)}))}var a=null;return t.has("$animateCss")&&(a=t.get("$animateCss")),{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(e,t){return e.addClass(t.backdropClass),o}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector",function(e,t,n,o){var a=null;return o.has("$animateCss")&&(a=o.get("$animateCss")),{restrict:"EA",scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(e,t){return t.templateUrl||"template/modal/window.html"},link:function(o,i,l){i.addClass(l.windowClass||""),o.size=l.size,o.close=function(t){var n=e.getTop();n&&n.value.backdrop&&"static"!==n.value.backdrop&&t.target===t.currentTarget&&(t.preventDefault(),t.stopPropagation(),e.dismiss(n.key,"backdrop click"))},o.$isRendered=!0;var r=t.defer();l.$observe("modalRender",function(e){"true"==e&&r.resolve()}),r.promise.then(function(){var r=null;l.modalInClass&&(r=a?a(i,{addClass:l.modalInClass}).start():n.addClass(i,l.modalInClass),o.$on(e.NOW_CLOSING_EVENT,function(e,t){var o=t();a?a(i,{removeClass:l.modalInClass}).start().then(o):n.removeClass(i,l.modalInClass).then(o)})),t.when(r).then(function(){var e=i[0].querySelectorAll("[autofocus]");e.length?e[0].focus():i[0].focus()});var s=e.getTop();s&&e.modalRendered(s.key)})}}}]).directive("modalAnimationClass",[function(){return{compile:function(e,t){t.modalAnimation&&e.addClass(t.modalAnimationClass)}}}]).directive("modalTransclude",function(){return{link:function(e,t,n,o,a){a(e.$parent,function(e){t.empty(),t.append(e)})}}}).factory("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(e,t,n,o,a,i,l,r,s){function c(){for(var e=-1,t=b.keys(),n=0;n<t.length;n++)b.get(t[n]).value.backdrop&&(e=n);return e}function p(e,t){var o=n.find("body").eq(0),a=b.get(e).value;b.remove(e),d(a.modalDomEl,a.modalScope,function(){var t=a.openedClass||$;C.remove(t,e),o.toggleClass(t,C.hasKey(t))}),u(),t&&t.focus?t.focus():o.focus()}function u(){if(v&&c()==-1){var e=g;d(v,g,function(){e=null}),v=void 0,g=void 0}}function d(t,n,o){function a(){a.done||(a.done=!0,f?f(t,{event:"leave"}).start().then(function(){t.remove()}):e.leave(t),n.$destroy(),o&&o())}var l,r=null,s=function(){return l||(l=i.defer(),r=l.promise),function(){l.resolve()}};return n.$broadcast(w.NOW_CLOSING_EVENT,s),i.when(r).then(a)}function m(e,t,n){return!e.value.modalScope.$broadcast("modal.closing",t,n).defaultPrevented}var f=null;l.has("$animateCss")&&(f=l.get("$animateCss"));var v,g,h,$="modal-open",b=s.createNew(),C=r.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},k=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return a.$watch(c,function(e){g&&(g.index=e)}),n.bind("keydown",function(e){if(e.isDefaultPrevented())return e;var t=b.top();if(t&&t.value.keyboard)switch(e.which){case 27:e.preventDefault(),a.$apply(function(){w.dismiss(t.key,"escape key press")});break;case 9:w.loadFocusElementList(t);var n=!1;e.shiftKey?w.isFocusInFirstItem(e)&&(n=w.focusLastFocusableElement()):w.isFocusInLastItem(e)&&(n=w.focusFirstFocusableElement()),n&&(e.preventDefault(),e.stopPropagation())}}),w.open=function(e,t){var i=n[0].activeElement,l=t.openedClass||$;b.add(e,{deferred:t.deferred,renderDeferred:t.renderDeferred,modalScope:t.scope,backdrop:t.backdrop,keyboard:t.keyboard,openedClass:t.openedClass}),C.put(l,e);var r=n.find("body").eq(0),s=c();if(s>=0&&!v){g=a.$new(!0),g.index=s;var p=angular.element('<div modal-backdrop="modal-backdrop"></div>');p.attr("backdrop-class",t.backdropClass),t.animation&&p.attr("modal-animation","true"),v=o(p)(g),r.append(v)}var u=angular.element('<div modal-window="modal-window"></div>');u.attr({"template-url":t.windowTemplateUrl,"window-class":t.windowClass,size:t.size,index:b.length()-1,animate:"animate"}).html(t.content),t.animation&&u.attr("modal-animation","true");var d=o(u)(t.scope);b.top().value.modalDomEl=d,b.top().value.modalOpener=i,r.append(d),r.addClass(l),w.clearFocusListCache()},w.close=function(e,t){var n=b.get(e);return n&&m(n,t,!0)?(n.value.modalScope.$$uibDestructionScheduled=!0,n.value.deferred.resolve(t),p(e,n.value.modalOpener),!0):!n},w.dismiss=function(e,t){var n=b.get(e);return n&&m(n,t,!1)?(n.value.modalScope.$$uibDestructionScheduled=!0,n.value.deferred.reject(t),p(e,n.value.modalOpener),!0):!n},w.dismissAll=function(e){for(var t=this.getTop();t&&this.dismiss(t.key,e);)t=this.getTop()},w.getTop=function(){return b.top()},w.modalRendered=function(e){var t=b.get(e);t&&t.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return h.length>0&&(h[0].focus(),!0)},w.focusLastFocusableElement=function(){return h.length>0&&(h[h.length-1].focus(),!0)},w.isFocusInFirstItem=function(e){return h.length>0&&(e.target||e.srcElement)==h[0]},w.isFocusInLastItem=function(e){return h.length>0&&(e.target||e.srcElement)==h[h.length-1]},w.clearFocusListCache=function(){h=[],k=0},w.loadFocusElementList=function(e){if((void 0===h||!h.length0)&&e){var t=e.value.modalDomEl;t&&t.length&&(h=t[0].querySelectorAll(y))}},w}]).provider("$modal",function(){var e={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$modalStack",function(t,n,o,a,i,l){function r(e){return e.template?o.when(e.template):a(angular.isFunction(e.templateUrl)?e.templateUrl():e.templateUrl)}function s(e){var n=[];return angular.forEach(e,function(e){angular.isFunction(e)||angular.isArray(e)?n.push(o.when(t.invoke(e))):angular.isString(e)?n.push(o.when(t.get(e))):n.push(o.when(e))}),n}var c={},p=null;return c.getPromiseChain=function(){return p},c.open=function(t){var a=o.defer(),c=o.defer(),u=o.defer(),d={result:a.promise,opened:c.promise,rendered:u.promise,close:function(e){return l.close(d,e)},dismiss:function(e){return l.dismiss(d,e)}};if(t=angular.extend({},e.options,t),t.resolve=t.resolve||{},!t.template&&!t.templateUrl)throw new Error("One of template or templateUrl options is required.");var m,f=o.all([r(t)].concat(s(t.resolve)));return m=p=o.all([p]).then(function(){return f},function(){return f}).then(function(e){var o=(t.scope||n).$new();o.$close=d.close,o.$dismiss=d.dismiss,o.$on("$destroy",function(){o.$$uibDestructionScheduled||o.$dismiss("$uibUnscheduledDestruction")});var r,s={},p=1;t.controller&&(s.$scope=o,s.$modalInstance=d,angular.forEach(t.resolve,function(t,n){s[n]=e[p++]}),r=i(t.controller,s),t.controllerAs&&(t.bindToController&&angular.extend(r,o),o[t.controllerAs]=r)),l.open(d,{scope:o,deferred:a,renderDeferred:u,content:e[0],animation:t.animation,backdrop:t.backdrop,keyboard:t.keyboard,backdropClass:t.backdropClass,windowClass:t.windowClass,windowTemplateUrl:t.windowTemplateUrl,size:t.size,openedClass:t.openedClass}),c.resolve(!0)},function(e){c.reject(e),a.reject(e)})["finally"](function(){p===m&&(p=null)}),d},c}]};return e}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(e){this.activeClass=e.activeClass||"active",this.toggleEvent=e.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(e,t,n,o){var a=o[0],i=o[1];t.find("input").css({display:"none"}),i.$render=function(){t.toggleClass(a.activeClass,angular.equals(i.$modelValue,e.$eval(n.btnRadio)))},t.bind(a.toggleEvent,function(){if(!n.disabled){var o=t.hasClass(a.activeClass);o&&!angular.isDefined(n.uncheckable)||e.$apply(function(){i.$setViewValue(o?null:e.$eval(n.btnRadio)),i.$render()})}})}}}).directive("btnCheckbox",["$document",function(e){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(t,n,o,a){function i(){return r(o.btnCheckboxTrue,!0)}function l(){return r(o.btnCheckboxFalse,!1)}function r(e,n){var o=t.$eval(e);return angular.isDefined(o)?o:n}var s=a[0],c=a[1];n.find("input").css({display:"none"}),c.$render=function(){n.toggleClass(s.activeClass,angular.equals(c.$modelValue,i()))},n.bind(s.toggleEvent,function(){o.disabled||t.$apply(function(){c.$setViewValue(n.hasClass(s.activeClass)?l():i()),c.$render()})}),n.on("keypress",function(a){o.disabled||32!==a.which||e[0].activeElement!==n[0]||t.$apply(function(){c.$setViewValue(n.hasClass(s.activeClass)?l():i()),c.$render()})})}}}]),angular.module("ui.bootstrap.transition",[]).value("$transitionSuppressDeprecated",!1).factory("$transition",["$q","$timeout","$rootScope","$log","$transitionSuppressDeprecated",function(e,t,n,o,a){function i(e){for(var t in e)if(void 0!==r.style[t])return e[t]}a||o.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");var l=function(o,a,i){i=i||{};var r=e.defer(),s=l[i.animation?"animationEndEventName":"transitionEndEventName"],c=function(e){n.$apply(function(){o.unbind(s,c),r.resolve(o)})};return s&&o.bind(s,c),t(function(){angular.isString(a)?o.addClass(a):angular.isFunction(a)?a(o):angular.isObject(a)&&o.css(a),s||r.resolve(o)}),r.promise.cancel=function(){s&&o.unbind(s,c),r.reject("Transition cancelled")},r.promise},r=document.createElement("trans"),s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},c={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return l.transitionEndEventName=i(s),l.animationEndEventName=i(c),l}]),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(e){var t=this,n=t.tabs=e.tabs=[];t.select=function(e){angular.forEach(n,function(t){t.active&&t!==e&&(t.active=!1,t.onDeselect(),e.selectCalled=!1)}),e.active=!0,e.selectCalled||(e.onSelect(),e.selectCalled=!0)},t.addTab=function(e){n.push(e),1===n.length&&e.active!==!1?e.active=!0:e.active?t.select(e):e.active=!1},t.removeTab=function(e){var a=n.indexOf(e);if(e.active&&n.length>1&&!o){var i=a==n.length-1?a-1:a+1;t.select(n[i])}n.splice(a,1)};var o;e.$on("$destroy",function(){o=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(e,t,n){e.vertical=!!angular.isDefined(n.vertical)&&e.$parent.$eval(n.vertical),e.justified=!!angular.isDefined(n.justified)&&e.$parent.$eval(n.justified)}}}).directive("tab",["$parse","$log",function(e,t){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(n,o,a,i,l){n.$watch("active",function(e){e&&i.select(n)}),n.disabled=!1,a.disable&&n.$parent.$watch(e(a.disable),function(e){n.disabled=!!e}),a.disabled&&(t.warn('Use of "disabled" attribute has been deprecated, please use "disable"'),n.$parent.$watch(e(a.disabled),function(e){n.disabled=!!e})),n.select=function(){n.disabled||(n.active=!0)},i.addTab(n),n.$on("$destroy",function(){i.removeTab(n)}),n.$transcludeFn=l}}}]).directive("tabHeadingTransclude",function(){return{restrict:"A",require:"^tab",link:function(e,t,n,o){e.$watch("headingElement",function(e){e&&(t.html(""),t.append(e))})}}}).directive("tabContentTransclude",function(){function e(e){return e.tagName&&(e.hasAttribute("tab-heading")||e.hasAttribute("data-tab-heading")||e.hasAttribute("x-tab-heading")||"tab-heading"===e.tagName.toLowerCase()||"data-tab-heading"===e.tagName.toLowerCase()||"x-tab-heading"===e.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(t,n,o){var a=t.$eval(o.tabContentTransclude);a.$transcludeFn(a.$parent,function(t){angular.forEach(t,function(t){e(t)?a.headingElement=t:n.append(t)})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("CarouselController",["$scope","$element","$interval","$animate",function(e,t,n,o){function a(t,n,a){h||(angular.extend(t,{direction:a,active:!0}),angular.extend(u.currentSlide||{},{direction:a,active:!1}),o.enabled()&&!e.noTransition&&!e.$currentTransition&&t.$element&&u.slides.length>1&&(t.$element.data(v,t.direction),u.currentSlide&&u.currentSlide.$element&&u.currentSlide.$element.data(v,t.direction),e.$currentTransition=!0,m?o.on("addClass",t.$element,function(t,n){"close"===n&&(e.$currentTransition=null,o.off("addClass",t))}):t.$element.one("$animate:close",function(){e.$currentTransition=null})),u.currentSlide=t,g=n,l())}function i(e){if(angular.isUndefined(d[e].index))return d[e];var t;d.length;for(t=0;t<d.length;++t)if(d[t].index==e)return d[t]}function l(){r();var t=+e.interval;!isNaN(t)&&t>0&&(c=n(s,t))}function r(){c&&(n.cancel(c),c=null)}function s(){var t=+e.interval;p&&!isNaN(t)&&t>0&&d.length?e.next():e.pause()}var c,p,u=this,d=u.slides=e.slides=[],m=angular.version.minor>=4,f="uib-noTransition",v="uib-slideDirection",g=-1;u.currentSlide=null;var h=!1;u.select=e.select=function(t,n){var o=e.indexOfSlide(t);void 0===n&&(n=o>u.getCurrentIndex()?"next":"prev"),t&&t!==u.currentSlide&&!e.$currentTransition&&a(t,o,n)},e.$on("$destroy",function(){h=!0}),u.getCurrentIndex=function(){return u.currentSlide&&angular.isDefined(u.currentSlide.index)?+u.currentSlide.index:g},e.indexOfSlide=function(e){return angular.isDefined(e.index)?+e.index:d.indexOf(e)},e.next=function(){var t=(u.getCurrentIndex()+1)%d.length;return 0===t&&e.noWrap()?void e.pause():u.select(i(t),"next")},e.prev=function(){var t=u.getCurrentIndex()-1<0?d.length-1:u.getCurrentIndex()-1;return e.noWrap()&&t===d.length-1?void e.pause():u.select(i(t),"prev")},e.isActive=function(e){return u.currentSlide===e},e.$watch("interval",l),e.$on("$destroy",r),e.play=function(){p||(p=!0,l())},e.pause=function(){e.noPause||(p=!1,r())},u.addSlide=function(t,n){t.$element=n,d.push(t),1===d.length||t.active?(u.select(d[d.length-1]),1==d.length&&e.play()):t.active=!1},u.removeSlide=function(e){angular.isDefined(e.index)&&d.sort(function(e,t){return+e.index>+t.index});var t=d.indexOf(e);d.splice(t,1),d.length>0&&e.active?t>=d.length?u.select(d[t-1]):u.select(d[t]):g>t&&g--,0===d.length&&(u.currentSlide=null)},e.$watch("noTransition",function(e){t.data(f,e)})}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(e,t){return t.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(e,t,n,o){o.addSlide(e,t),e.$on("$destroy",function(){o.removeSlide(e)}),e.$watch("active",function(t){t&&o.select(e)})}}}).animation(".item",["$injector","$animate",function(e,t){function n(e,t,n){e.removeClass(t),n&&n()}var o="uib-noTransition",a="uib-slideDirection",i=null;return e.has("$animateCss")&&(i=e.get("$animateCss")),{beforeAddClass:function(e,l,r){if("active"==l&&e.parent()&&!e.parent().data(o)){var s=!1,c=e.data(a),p="next"==c?"left":"right",u=n.bind(this,e,p+" "+c,r);return e.addClass(c),i?i(e,{addClass:p}).start().done(u):t.addClass(e,p).then(function(){s||u(),r()}),function(){s=!0}}r()},beforeRemoveClass:function(e,l,r){if("active"===l&&e.parent()&&!e.parent().data(o)){var s=!1,c=e.data(a),p="next"==c?"left":"right",u=n.bind(this,e,p,r);return i?i(e,{addClass:p}).start().done(u):t.addClass(e,p).then(function(){s||u(),r()}),function(){s=!0}}r()}}}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html"}}).directive("popoverTemplate",["$tooltip",function(e){return e("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"
},templateUrl:"template/popover/popover-html.html"}}).directive("popoverHtml",["$tooltip",function(e){return e("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(e){return e("popover","popover","click")}]),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(e,t){e.closeable=!!t.close,this.close=e.close}]).directive("alert",function(){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(e,t){return t.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(e){return{require:"alert",link:function(t,n,o,a){e(function(){a.close()},parseInt(o.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(o){var a=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;a&&angular.forEach(this.groups,function(e){e!==o&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(n){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);t!==-1&&this.groups.splice(t,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(e,t){return t.templateUrl||"template/accordion/accordion.html"}}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(e){this.heading=e}},link:function(e,t,n,o){o.addGroup(e),e.openClass=n.openClass||"panel-open",e.panelClass=n.panelClass,e.$watch("isOpen",function(n){t.toggleClass(e.openClass,n),n&&o.closeOthers(e)}),e.toggleOpen=function(t){e.isDisabled||t&&32!==t.which||(e.isOpen=!e.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(e,t,n,o,a){o.setHeading(a(e,angular.noop))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(e,t,n,o){e.$watch(function(){return o[n.accordionTransclude]},function(e){e&&(t.find("span").html(""),t.find("span").append(e))})}}}),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(e){e.put("template/modal/backdrop.html",'<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(e){e.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n\tng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(e){e.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="wx-iconfont-global wx-icon-arrow-left-2"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="wx-iconfont-global wx-icon-arrow-right-2"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(e){e.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(e){e.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
//# sourceMappingURL=/sites/all/modules/glomo/shared/ui_bootstrap/vendor/ui-bootstrap-custom-0.13.4/ui-bootstrap-custom-tpls-0.13.4.min.js.map
;
(function(root) {
  angular.module('twc_dal')
    .factory('TwcDalBaseModel', function() {
      return root.TwcDalBaseModel;
    });
}(window.TWC));;
(function(root) {
  angular.module('twc_dal')
    .factory('ObservationTurboModel', function() {
      return root.ObservationTurboModel;
    })
    .config(["$provide", function($provide) {
      $provide.decorator('ObservationTurboModel', ["$injector", "$delegate",
        function($injector, $delegate) {
          var $q = $injector.get('$q');
          var pcoUser = $injector.get('pcoUser');
          return $delegate.extend({
            /**
              * Get user object from pco
              * @returns {Object} Pco user Object
              */
              getUser: function() {
                return pcoUser;
              },
              getTempUnit: function () {
                return pcoUser.getTempUnit();
              },
              execute: function() {
                return $q.when(this.constructor.__super__.execute.apply(this, arguments));
              }
          });
      }]);
  }]);
}(window.TWC));;
(function(root) {
  angular.module('twc_dal')
    .factory('PollenObsTurboModel', function() {
      return root.PollenObsTurboModel;
    })
      .config(["$provide", function($provide) {
          $provide.decorator('PollenObsTurboModel', ["$injector", "$delegate",
              function($injector, $delegate) {
                  var $q = $injector.get('$q');
                  return $delegate.extend({
                      execute: function() {
                          return $q.when(this.constructor.__super__.execute.apply(this, arguments));
                      }
                  });
              }]);
      }]);
}(window.TWC));;
/**
 * Created by son.dinh on 8/17/16.
 */

(function(root) {
  angular.module('twc_dal')
  .factory('V1AlertsDalModel', function() {
    return root.V1AlertsDalModel;
  })
  .config(["$provide", function($provide) {
    $provide.decorator('V1AlertsDalModel', ["$injector", "$delegate",
      function($injector, $delegate) {
        var $q = $injector.get('$q');
        return $delegate.extend({
          execute: function() {
            return $q.when(this.constructor.__super__.execute.apply(this, arguments));
          }
        });
      }]);
  }]);
}(window.TWC));
;
(function(root) {
  angular.module('twc_dal')
    .factory('AlertsTurboModel', function() {
      return root.AlertsTurboModel;
    })
      .config(["$provide", function($provide) {
          $provide.decorator('AlertsTurboModel', ["$injector", "$delegate",
              function($injector, $delegate) {
                  var $q = $injector.get('$q');
                  return $delegate.extend({
                      execute: function() {
                          return $q.when(this.constructor.__super__.execute.apply(this, arguments));
                      }
                  });
              }]);
      }]);
}(window.TWC));;
(function(root) {
  angular.module('twc_dal')
    .factory('PollenForecastTurboModel', function() {
      return root.PollenForecastTurboModel;
    })
      .config(["$provide", function($provide) {
          $provide.decorator('PollenForecastTurboModel', ["$injector", "$delegate",
              function($injector, $delegate) {
                  var $q = $injector.get('$q');
                  return $delegate.extend({
                      execute: function() {
                          return $q.when(this.constructor.__super__.execute.apply(this, arguments));
                      }
                  });
              }]);
      }]);
}(window.TWC));;
/**
 * Created by son.dinh on 8/17/16.
 */

(function(root) {
  angular.module('twc_dal')
  .factory('V1AlertDetailsDalModel', function() {
    return root.V1AlertDetailsDalModel;
  })
  .config(["$provide", function($provide) {
    $provide.decorator('V1AlertDetailsDalModel', ["$injector", "$delegate",
      function($injector, $delegate) {
        var $q = $injector.get('$q');
        return $delegate.extend({
          execute: function() {
            return $q.when(this.constructor.__super__.execute.apply(this, arguments));
          }
        });
      }]);
  }]);
}(window.TWC));
;
