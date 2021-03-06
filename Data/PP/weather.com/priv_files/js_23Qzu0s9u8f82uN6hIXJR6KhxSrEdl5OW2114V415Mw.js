!function(n){n.nonConusStates=["AK","AS","GU","HI","MP","MQ","PR","VI","WQ"],n.isConus=function(t){var o=t.getStateCode(),u=t.getCountryCode();return n.isConusByCountryState(o,u)},n.isConusByCountryState=function(t,o){return"US"===o&&n.nonConusStates.indexOf(t)===-1}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-geo.min.js.map
;
!function(t){t.formatTime=function(t){var e=t.split(":"),n=t.split(" ");return[e[0],":",e[1]," ",n[1]].join("")},t.getTimeZone=function(t){return t?t:(new Date).toString().match(/\(([A-Za-z\s].*)\)/)[1]},t.dateTimeToDate=function(t){return t&&t.replace(/-/g,"").substr(0,8)},t.getGMTOffsetFromISODate=function(t){if(t){var e=t.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d+)([+-]?)(\d+)([:]{1})(\d+)/);if(e&&12===e.length){var n=(parseInt(e[9])||0)+(parseInt(e[11])||0)/60;return"-"===e[8]?-n:n}}return null},t.fromISOToDate=function(){var t="2011-11-24T09:00:27+0200",e=Date.parse(t);if(1322118027e3===e)return function(t){return new Date(Date.parse(t))};var n=function(t){var e=t.slice(0,-5).split(/\D/).map(function(t){return parseInt(t,10)||0});e[1]-=1,e=new Date(Date.UTC.apply(Date,e));var n=t.slice(-5),r=parseInt(n,10)/100;return"+"===n.slice(0,1)&&(r*=-1),e.setHours(e.getHours()+r),e};return 1322118027e3===n(t)?n:function(t){var e,n,r=/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/,a=r.exec(t)||[];return a[1]?(e=a[1].split(/\D/).map(function(t){return parseInt(t,10)||0}),e[1]-=1,e=new Date(Date.UTC.apply(Date,e)),e.getDate()?(a[5]&&(n=parseInt(a[5],10)/100*60,a[6]&&(n+=parseInt(a[6],10)),"+"===a[4]&&(n*=-1),n&&e.setUTCMinutes(e.getUTCMinutes()+n)),e):NaN):NaN}}()}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-datetime.min.js.map
;
!function(r){r.getImageUrl=function(r,t,u){if(!r)return!1;try{r.match()}catch(p){return!1}var i=[],n=r.match(/.*:\/\/(.*)image\/(.{1,2}\/)(.*\.\b(jpg|jpeg|gif|png)\b)/);if(!n)return r;var a=n[2],e=n[3];if(TWC.Configs.image_poc.instart)return i.push("http://cm.imwx.com/"),i.push(a),i.push(e),i.push("?i10c=img.resize(width:"),i.push(u),i.push(",height:"),i.push(t),i.push(")"),i.join("");if(TWC.Configs.image_poc.akamai){i.push("http://ion.imwx.com/"),i.push(a),i.push(e),i.push("?resize="),i.push(u),i.push("px:"),i.push(t),i.push("px&output-format=");var s=e.substr(e.lastIndexOf(".")+1)||"jpg";return i.push(s),i.join("")}return r},r.hexToRgb=function(r,t){var u=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;r=r.replace(u,function(r,t,u,p){return t+t+u+u+p+p});var p=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),i=parseInt(p[1],16),n=parseInt(p[2],16),a=parseInt(p[3],16),e=t||1,s=[i,n,a,e].join(","),h=["rgba(",s,")"].join("");return p?h:null}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-images.min.js.map
;
!function(e){_isValid=function(e){var r=/^[a-z0-9 ]$/i;return r.test(e)},_removeChar=function(e,r){var n=_isValid(r)?r:"\\"+r,t=new RegExp(n,"g");return e.replace(t,function(e,r){return""})},e.capitalize=window.TWC&&TWC.PcoUtils&&TWC.PcoUtils.capitalize||function(e){return e=String(e),e&&e.charAt(0).toUpperCase()+e.slice(1)},e.trim=function(e){return e.replace(/^\s+|\s+$/g,"")},e.isNumeric=function(e){return/^-?\d+$/.test(e)},e.removeDupChar=function(e,r){var n=_isValid(r)?"("+r+")\\1+":"(\\"+r+")\\1+",t=new RegExp(n,"g");return e.replace(t,function(e,r){return r[0]})},e.removeSpecialChars=function(e){return e.replace(/[^\w\s]/gi,"")},e.removeSpaces=function(e){return e.replace(/\s+/g,"")},e.getCamelCase=function(e){return e.toLowerCase().replace(/-(.)/g,function(e,r){return r.toUpperCase()})}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-strings.min.js.map
;
!function(n){n.chunk=function(c,t){return[].concat.apply([],n.map(c,function(n,u){return u%t?[]:[c.slice(u,u+t)]}))}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-array.min.js.map
;
!function(e){e.deepExtend=function(n){var t=e.deepExtend,c=Array.prototype.slice.call(arguments,1);return e.each(c,function(c){e.each(c,function(c,i){c&&e.isObject(c)?(n[i]=n[i]||{},t(n[i],c)):n[i]=c})}),n}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-object.min.js.map
;
!function(i){i.isNumber=function(n){return"number"==typeof n&&i.isFinite(n)&&!isNaN(n)}}(_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-number.min.js.map
;
!function(e,n){"use strict";e.getURLParameter="PcoUtils"in TWC&&"getURLParameter"in TWC.PcoUtils?TWC.PcoUtils.getURLParameter:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[void 0,""])[1].replace(/\+/g,"%20"))||null},"undefined"==typeof e.normalizeUrl&&(e.normalizeUrl=function(n,t){return t=t||"https",e.isString(n)?(n=n.replace(/^(http(s)?)?:?\/\//,t.replace(":","")+"://"),n.indexOf("www.weather.com")&&"https"===t&&(n=n.replace("www.weather.com","weather.com")),n):n}),"undefined"==typeof e.makeUrlSecure&&(e.makeUrlSecure=function(e){return this.normalizeUrl(e,"https")}),"undefined"==typeof e.removeParam&&(e.removeParam=function(e,n){var t,r=n.split("?")[0],o=[],i=n.indexOf("?")!==-1?n.split("?")[1]:"";if(""!==i){o=i.split("&");for(var a=o.length-1;a>=0;a-=1)t=o[a].split("=")[0],t===e&&o.splice(a,1);r=r+"?"+o.join("&")}return r}),"undefined"==typeof e.addEscapedFragment&&(e.addEscapedFragment=function(e){return e+=(e.indexOf("?")!==-1?"&":"?")+(e.indexOf("_escaped_fragment_")!==-1?"":"_escaped_fragment_")}),"undefined"==typeof e.removeEscapedFragment&&(e.removeEscapedFragment=function(n){return e.removeParam("_escaped_fragment_",n)}),"undefined"==typeof e.toQueryString&&(e.toQueryString=function(n){var t,r,o=[];for(r in n)n.hasOwnProperty(r)&&(t=n[r],e.isArray(t)?o.push(e.map(t,function(e){return encodeURIComponent(r)+"[]="+encodeURIComponent(e)}).join("&")):e.isObject(t)?o.push(e.chain(t).mapObject(function(n,t){return e.isObject(n)?"":encodeURIComponent(r)+"["+t+"]="+encodeURIComponent(n)}).values().join("&")):e.isNull(t)?o.push(encodeURIComponent(r)):o.push(encodeURIComponent(r)+"="+encodeURIComponent(t)));return o.join("&")})}(_,window);
//# sourceMappingURL=/sites/all/modules/glomo/shared/util/util-url.min.js.map
;
!function(n,r){function u(){return r}n.module("angular-underscore",[]).factory("twcUtil",u)}(angular,_);
//# sourceMappingURL=/sites/all/modules/glomo/shared/underscore/angular-underscore.min.js.map
;
window.twc=window.twc||{},window.twc.shared={},window.twc.shared.apps=angular.module("shared",["ngTouch","pascalprecht.translate","pf.drupal.translate","angular-underscore"]);
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/shared_module/shared_module.app.min.js.map
;
(function (root, factory) {
  root.PollenObsTurboModel = factory(root.TwcDalBaseModel);
}(window.TWC, function (TwcDalBaseModel) {

  function pollenObsTurboModel(TwcDalBaseModel) {
    return TwcDalBaseModel.extend({
      transform: function () {

      },
      construct: function (geocode) {
        this.urlConfig = {
          baseUrl: TWC.Configs.sunTurbo.baseUrl || 'https://qaapi.weather.com',
          apiKey: TWC.Configs.sunTurbo.apiKey || '',
          resource: '/v2/turbo/vt1pollenobs',
          language: TWC.Configs.sunTurbo.locale || 'en',
          format: 'json'
        };

        if (geocode) {
          this.urlConfig['geocode'] = geocode;
        }
      }
    });
  }
  return pollenObsTurboModel(TwcDalBaseModel);
}));
;
/**
 * Created by son.din on 06/09/16.
 */

(function (root, factory) {
  root.V1AlertsDalModel = factory(root.TwcDalBaseModel);
}(window.TWC, function (TwcDalBaseModel) {

  function v1AlertsDalModel(TwcDalBaseModel) {
    var product = 'alerts';

    return TwcDalBaseModel.extend({
      transform: function () {

        var _this = this;

        _this.getData = function () {
          if (_this.data) {
            return _this.data.alerts;
          }
          return null;
        };

        return Object.freeze(_this);

      },
      construct: function (geocode, format) {
        format = (typeof format !== 'undefined') ?  format : 'json';

        this.urlConfig = {
          baseUrl: TWC.Configs.sunTurbo.baseUrl || 'https://qaapi.weather.com', //TODO add back baseURL
          apiKey: 'd522aa97197fd864d36b418f39ebb323',
          resource: '/v1/geocode/',
          language: TWC.Configs.sunTurbo.locale || 'en',
        };

        if (geocode) {
          this.urlConfig['resource'] = this.urlConfig['resource'] + geocode;
        }
        this.urlConfig['resource'] = this.urlConfig['resource'] + '/' + product + "." + format;

      }

    });
  }
  return v1AlertsDalModel(TwcDalBaseModel);
}));
;
(function (root, factory) {
    root.AlertsTurboModel = factory(root.TwcDalBaseModel, root.SunTurboAggregationConfig);
}(window.TWC, function (TwcDalBaseModel, SunTurboAggregationConfig) {

  function alertsTurboModel(TwcDalBaseModel, SunTurboAggregationConfig) {
    var AlertsAggregationConfig = _.clone(SunTurboAggregationConfig);
    AlertsAggregationConfig.urlMatch = '/v2/turbo/vt1alerts?';

    return TwcDalBaseModel.extend({
      // aggregation config to group similar turbo calls
      aggregationConfig: AlertsAggregationConfig,
      isExpiredRule: function (data) {
        if (data.data && !data.data.alerts) {   
          return true;    
        }   
         return false;   
      },
      transform: function () {
        var _this = this;
        this.items = transformData(this.get('vt1alerts'));
      },
      construct: function (geocode) {
        this.urlConfig = {
          baseUrl: TWC.Configs.sunTurbo.baseUrl || 'https://qaapi.weather.com',
          apiKey: TWC.Configs.sunTurbo.apiKey || '',
          resource: '/v2/turbo/vt1alerts',
          language: TWC.Configs.sunTurbo.locale || 'en',
          format: 'json'
        };
        if (geocode) {
          this.urlConfig['geocode'] = geocode;
        }
      }
    });
  }
  function transformDay(data, keys, i) {
      var item = {};
      keys.forEach(function (key) {
        item[key] = data[key][i];
      });
      return item;
  }
  
  function transformData(data) {
    var items = [];
    if (data) {
      var keys = Object.keys(data);
        // get the first keys array size
      var count = data[keys[0]] && data[keys[0]].length || 0;
      for (var i = 0; i < count; i++) {
        var item = transformDay(data, keys, i);
        items.push(item);
      }
    }
    return items;
   
  }
  return alertsTurboModel(TwcDalBaseModel, SunTurboAggregationConfig);
}));
;
/**
 * Created by son.din on 06/09/16.
 */

(function (root, factory) {
  root.V1AlertDetailsDalModel = factory(root.TwcDalBaseModel);
}(window.TWC, function (TwcDalBaseModel) {

  function v1AlertDetailsDalModel(TwcDalBaseModel) {
    var product = 'details';

    return TwcDalBaseModel.extend({
      transform: function () {

        var _this = this;

        _this.getData = function () {
          if (_this.data) {
            return _this.data.alertDetail;
          }
          return null;
        };

        return Object.freeze(_this);

      },
      construct: function (detailKey, format) {
        format = (typeof format !== 'undefined') ?  format : 'json';

        this.urlConfig = {
          baseUrl: TWC.Configs.sunTurbo.baseUrl || 'https://qaapi.weather.com', //TODO add back baseURL
          apiKey: 'd522aa97197fd864d36b418f39ebb323',
          resource: '/v1/alert/',
          language: TWC.Configs.sunTurbo.locale || 'en',
        };
        
        if (detailKey) {
          this.urlConfig['resource'] = this.urlConfig['resource'] + detailKey;
        }
        this.urlConfig['resource'] = this.urlConfig['resource'] + '/' + product + "." + format;
        
      }

    });
  }
  return v1AlertDetailsDalModel(TwcDalBaseModel);
}));;
twc.shared.apps.provider("twcConfig",function(){var n={},t=[];return{__override__:function(n){t.push(n)},add:function(t){angular.extend(n,t)},$get:["twcUtil",function(e){return angular.forEach(t,function(t){e.deepExtend(n,t)}),n}]}}),twc.shared.apps.provider("twcMessage",function(){var n={};return{deepExtend:function(n){var t=Array.prototype.slice.call(arguments,1),e=this;angular.forEach(t,function(t){angular.forEach(t,function(t,r){t&&angular.isObject(t)?(n[r]=n[r]||{},e.deepExtend(n[r],t)):n[r]=t})})},add:function(t){this.deepExtend(n,t)},getAll:function(t){return n},$get:function(){return n}}});
//# sourceMappingURL=/sites/all/modules/custom/angularmods/app/shared/config/config.factory.min.js.map
;
