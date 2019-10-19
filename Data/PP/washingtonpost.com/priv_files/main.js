(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TWPTracking"] = factory();
	else
		root["TWPTracking"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable camelcase */
	/* eslint-disable prefer-template */
	
	var _deepAssign = __webpack_require__(46);
	
	var _deepAssign2 = _interopRequireDefault(_deepAssign);
	
	var _trackingShared = __webpack_require__(1);
	
	var _snowflake = __webpack_require__(9);
	
	var _snowflake2 = _interopRequireDefault(_snowflake);
	
	var _omniture = __webpack_require__(17);
	
	var omniture = _interopRequireWildcard(_omniture);
	
	var _comscore = __webpack_require__(5);
	
	var comscore = _interopRequireWildcard(_comscore);
	
	var _chartbeat = __webpack_require__(10);
	
	var chartbeat = _interopRequireWildcard(_chartbeat);
	
	var _effectiveMeasure = __webpack_require__(6);
	
	var effectiveMeasure = _interopRequireWildcard(_effectiveMeasure);
	
	var _loxodo = __webpack_require__(7);
	
	var _loxodo2 = _interopRequireDefault(_loxodo);
	
	var _nielsen = __webpack_require__(14);
	
	var nielsen = _interopRequireWildcard(_nielsen);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!('Promise' in global)) global.Promise = __webpack_require__(54);
	
	var createTracker = _trackingShared.tracker.createTracker,
	    combineTrackers = _trackingShared.tracker.combineTrackers;
	var PAGE_VIEW = _trackingShared.constants.PAGE_VIEW,
	    EVENT = _trackingShared.constants.EVENT;
	
	
	var moatTest = function () {
	  var STATE_KEY = '__analytics_moat_test';
	  var support = function support() {
	    return !!global.localStorage;
	  };
	  var getState = function getState() {
	    return !!window.localStorage.getItem(STATE_KEY) ? -1 : 0;
	  };
	
	  return support() ? getState() : 1;
	}();
	
	var defaultConfig = {
	  suite: 'production',
	  service: {
	    omniture: true,
	    comscore: true,
	    effectiveMeasure: _trackingShared.geo.isInternational(),
	    chartbeat: self === top,
	    moat: moatTest < 0 ? true : false,
	    nielsen: false
	  },
	  chartbeat: { useCanonical: true },
	  suppressTrackPageLoad: false,
	  snowflake: false
	};
	
	var combinedTrack = combineTrackers(omniture.track, chartbeat.track);
	var trackPV = createTracker(combinedTrack, _extends({ type: PAGE_VIEW }, defaultConfig));
	var trackData = createTracker(combinedTrack, { type: EVENT });
	
	function initAnalytics() {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  if (typeof this.readyState === 'undefined') this.readyState = false;
	  var cfg = TWP.Analytics.config = (0, _deepAssign2.default)({}, defaultConfig, config);
	
	  // Needs to be set early for ads
	  if (!window.wp_pvid) {
	    window.wp_pvid = Math.round(Math.random() * Math.pow(10, 13)) + '-' + new Date().getTime();
	  }
	
	  if (!!TWP.Analytics.config.service.omniture) TWP.Analytics.initOmniture();
	  if (!!TWP.Analytics.config.service.comscore && !TWP.Analytics.config.suppressTrackPageLoad) TWP.Analytics.initComScore();
	  if (!!TWP.Analytics.config.service.chartbeat) TWP.Analytics.initChartbeat(undefined, cfg);
	  if (!!TWP.Analytics.config.service.effectiveMeasure) TWP.Analytics.initEffectiveMeasure();
	  if (!!TWP.Analytics.config.service.nielsen) nielsen.init();
	  if (!!TWP.Analytics.config.service.moat) _trackingShared.signalTracker.init();
	
	  _trackingShared.newsletterHistory.init();
	}
	
	var TWP = window.TWP = window.TWP || {};
	TWP.Analytics = TWP.Analytics || {};
	TWP.Analytics.report = TWP.Analytics.report || {};
	TWP.Analytics.isMobile = TWP.Analytics.isMobile || _trackingShared.utils.isMobile;
	TWP.Analytics.checkAds = TWP.Analytics.checkAds || _trackingShared.ads.check;
	TWP.Analytics.sendPageview = trackPV;
	TWP.Analytics.sendData = trackData;
	TWP.Analytics.init = TWP.Analytics.init || initAnalytics;
	
	TWP.Analytics.initOmniture = TWP.Analytics.initOmniture || omniture.init;
	TWP.Analytics.omniture = omniture;
	TWP.Analytics.omnitureReady = TWP.Analytics.omnitureReady || function (cb) {
	  return omniture.state.ready(cb);
	};
	TWP.Analytics.report.omniture = { name: 'Omniture', on: false };
	
	TWP.Analytics.initComScore = TWP.Analytics.initComScore || comscore.init;
	TWP.Analytics.report.comscore = { name: 'comScore', on: false };
	
	TWP.Analytics.initChartbeat = TWP.Analytics.initChartbeat || chartbeat.init;
	TWP.Analytics.chartbeat = chartbeat;
	TWP.Analytics.report.chartbeat = { name: 'Chartbeat', on: false };
	
	TWP.Analytics.initEffectiveMeasure = TWP.Analytics.initEffectiveMeasure || effectiveMeasure.init;
	TWP.Analytics.report.effectiveMeasure = {
	  name: 'Effective Measure',
	  on: false
	};
	
	TWP.Analytics.nielsen = nielsen;
	
	TWP.Analytics.loxodo = _loxodo2.default.implementation;
	
	TWP.Analytics.signalTracker = TWP.Analytics.signalTracker || _trackingShared.signalTracker;
	TWP.Analytics.trackScrolling = TWP.Analytics.trackScrolling || _trackingShared.trackScrolling;
	TWP.Analytics.scrollDepth = TWP.Analytics.scrollDepth || _trackingShared.scrollDepth;
	TWP.Analytics.ElementTracker = TWP.Analytics.ElementTracker || _trackingShared.ElementTracker;
	TWP.Analytics.initReport = TWP.Analytics.initReport || function initReport() {
	  console.log('deprecated: initReport'); // eslint-disable-line
	};
	
	TWP.Analytics.Snowflake = _snowflake2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.user = exports.applePay = exports.constants = exports.geo = exports.tracker = exports.getTrackingConfig = exports.StateStore = exports.trackScrolling = exports.signalTracker = exports.scrollDepth = exports.queryString = exports.newsletterHistory = exports.loadScript = exports.ElementTracker = exports.ads = undefined;
	
	var _ads = __webpack_require__(21);
	
	var _ads2 = _interopRequireDefault(_ads);
	
	var _elementTracker = __webpack_require__(23);
	
	var _elementTracker2 = _interopRequireDefault(_elementTracker);
	
	var _loadScript = __webpack_require__(26);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _newsletterHistory = __webpack_require__(27);
	
	var _newsletterHistory2 = _interopRequireDefault(_newsletterHistory);
	
	var _queryString = __webpack_require__(28);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _scrollDepth = __webpack_require__(29);
	
	var _scrollDepth2 = _interopRequireDefault(_scrollDepth);
	
	var _signalTracker = __webpack_require__(30);
	
	var _signalTracker2 = _interopRequireDefault(_signalTracker);
	
	var _trackScrolling = __webpack_require__(32);
	
	var _trackScrolling2 = _interopRequireDefault(_trackScrolling);
	
	var _stateStore = __webpack_require__(31);
	
	var _stateStore2 = _interopRequireDefault(_stateStore);
	
	var _trackingConfig = __webpack_require__(34);
	
	var _tracker = __webpack_require__(33);
	
	var tracker = _interopRequireWildcard(_tracker);
	
	var _geo = __webpack_require__(25);
	
	var geo = _interopRequireWildcard(_geo);
	
	var _constants = __webpack_require__(22);
	
	var constants = _interopRequireWildcard(_constants);
	
	var _applepay = __webpack_require__(24);
	
	var applePay = _interopRequireWildcard(_applepay);
	
	var _user = __webpack_require__(35);
	
	var user = _interopRequireWildcard(_user);
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.ads = _ads2.default;
	exports.ElementTracker = _elementTracker2.default;
	exports.loadScript = _loadScript2.default;
	exports.newsletterHistory = _newsletterHistory2.default;
	exports.queryString = _queryString2.default;
	exports.scrollDepth = _scrollDepth2.default;
	exports.signalTracker = _signalTracker2.default;
	exports.trackScrolling = _trackScrolling2.default;
	exports.StateStore = _stateStore2.default;
	exports.getTrackingConfig = _trackingConfig.getConfig;
	exports.tracker = tracker;
	exports.geo = geo;
	exports.constants = constants;
	exports.applePay = applePay;
	exports.user = user;
	exports.utils = _utils2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _cookie = __webpack_require__(36);
	
	var _runtime = __webpack_require__(45);
	
	var _events = __webpack_require__(38);
	
	var _debounce = __webpack_require__(37);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _externalEmbed = __webpack_require__(39);
	
	var _externalEmbed2 = _interopRequireDefault(_externalEmbed);
	
	var _getQueryParam = __webpack_require__(40);
	
	var _getQueryParam2 = _interopRequireDefault(_getQueryParam);
	
	var _loadScript = __webpack_require__(42);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _logger = __webpack_require__(43);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _mobile = __webpack_require__(44);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	var _history = __webpack_require__(41);
	
	var history = _interopRequireWildcard(_history);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var persistValue = void 0;
	var readValue = void 0;
	var deleteValue = void 0;
	if (_runtime.hasStorage) {
	  persistValue = function persistValue(key, val) {
	    return localStorage.setItem(key, val);
	  };
	  readValue = function readValue(key) {
	    return localStorage.getItem(key);
	  };
	  deleteValue = function deleteValue(key) {
	    return localStorage.removeItem(key);
	  };
	} else {
	  persistValue = function persistValue(key, val) {
	    return (0, _cookie.create)(key, val, 30);
	  };
	  readValue = function readValue(key) {
	    return (0, _cookie.read)(key);
	  };
	  deleteValue = function deleteValue(key) {
	    return (0, _cookie.remove)(key);
	  };
	}
	
	module.exports = {
	  hasStorage: _runtime.hasStorage,
	  hasJSON: _runtime.hasJSON,
	  hasConsole: _runtime.hasConsole,
	  debugMode: _runtime.debugMode,
	  shouldLog: _runtime.shouldLog,
	  debounce: _debounce2.default,
	  persistValue: persistValue,
	  readValue: readValue,
	  deleteValue: deleteValue,
	  getQueryParam: _getQueryParam2.default,
	  history: history,
	  Log: _logger2.default,
	  loadScript: _loadScript2.default,
	  isMobile: _runtime.isMobile,
	  mobile: _mobile2.default,
	  isExternalEmbed: _externalEmbed2.default,
	  waitForEvent: _events.waitForEvent,
	  createCookie: _cookie.create,
	  readCookie: _cookie.read,
	  deleteCookie: _cookie.remove,
	  getKey: _cookie.getKey
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(49).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configure = configure;
	exports.init = init;
	
	var _objectAssign = __webpack_require__(50);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _trackingShared = __webpack_require__(1);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/* eslint-disable max-len */
	/* eslint-disable no-nested-ternary */
	/* eslint-disable no-underscore-dangle */
	/* eslint-disable camelcase */
	
	var $ = global.jQuery || global.Zepto;
	
	var mobile = _trackingShared.utils.mobile;
	
	var TWP = global.TWP = global.TWP || {};
	var FB_INSTANT = 'fbinstant';
	var COASTGUARD = 'coastguard';
	
	var _cbq = global._cbq = global._cqb || [];
	
	var getUserType = function getUserType() {
	  if (_trackingShared.user.isSubscriber()) {
	    return 'paid';
	  } else if (_trackingShared.user.isLoggedIn()) {
	    return 'lgdin';
	  } else {
	    return 'anon';
	  }
	};
	
	function getChartbeatUrl(trackingType) {
	  var protocol = document.location.protocol === 'https:' ? 'https://' : 'http://';
	  var scriptPath = void 0;
	  switch (trackingType) {
	    case FB_INSTANT:
	      scriptPath = 'static2.chartbeat.com/js/chartbeat_fiadev.js';
	      break;
	    default:
	      scriptPath = 'static.chartbeat.com/js/chartbeat.js';
	  }
	
	  return protocol + scriptPath;
	}
	
	function getChartbeatAuthors(data) {
	  var authors = '';
	
	  if (!!data.author) {
	    authors = data.author;
	  } else if (TWP.Data && TWP.Data.Tracking && TWP.Data.Tracking.props && !!TWP.Data.Tracking.props.author) {
	    authors = TWP.Data.Tracking.props.author;
	  }
	
	  return authors.split('; ').join(',') || 'no author';
	}
	
	function getChartbeatSections(data) {
	  var sections = [];
	  var section = !!data.section ? data.section : TWP.Data && TWP.Data.Tracking ? TWP.Data.Tracking.props.section : global.thisNode ? global.thisNode.split('/')[0] : '';
	  var subsection = !!data.subsection ? data.subsection : TWP.Data && TWP.Data.Tracking ? TWP.Data.Tracking.props.subsection : '';
	  if (!!section) sections.push(section);
	  if (!!subsection && subsection !== section) sections.push(subsection);
	
	  var blogname = !!data.blogname ? data.blogname : TWP.Data && TWP.Data.Tracking ? TWP.Data.Tracking.props.blogname : '';
	  if (!!blogname) sections.push(blogname);
	
	  var contentType = !!data.content_type ? data.content_type : TWP.Data && TWP.Data.Tracking ? TWP.Data.Tracking.props.content_type : '';
	  if (!!contentType) {
	    var contentTypeWhiteList = ['article', 'gallery', 'video', 'graphic', 'discussion', 'quiz', 'knowledge quiz', 'personality quiz', 'kindle', 'topic', 'interactive graphics'];
	    if (contentType === 'blog') contentType = 'article';
	    if (contentTypeWhiteList.indexOf(contentType) !== -1) sections.push(contentType);
	  }
	
	  var site = !!data.site ? data.site : TWP.Data && TWP.Data.Tracking ? TWP.Data.Tracking.props.site : '';
	  if (!!site) sections.push(site);
	
	  return sections.join(',') || 'no category';
	}
	
	function getChartbeatPath() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      site = _ref.site;
	
	  var path = global.location.pathname.split(';jsessionid=')[0];
	
	  if (mobile.any() && /^\/regional\/?$/.test(path)) {
	    path = '/';
	  }
	
	  if (site === COASTGUARD) {
	    path += '?site=' + site;
	  }
	
	  return path;
	}
	
	function getChartbeatTitle(data) {
	  if (data.meta_data && data.meta_data.isHomepage) {
	    return 'Homepage';
	  }
	  return global.document.title;
	}
	
	function shouldUseCanonical(data) {
	  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref2$useCanonical = _ref2.useCanonical,
	      useCanonical = _ref2$useCanonical === undefined ? true : _ref2$useCanonical;
	
	  if (!useCanonical) {
	    return false;
	  }
	
	  return !(data.meta_data && data.meta_data.isErrorPage);
	}
	
	function configure(config, opts) {
	  global._sf_startpt = new Date().getTime();
	
	  var uid = 19624;
	  var title = getChartbeatTitle(config);
	  var domain = 'washingtonpost.com';
	  var playerdomain = 'www.washingtonpost.com';
	  var sections = getChartbeatSections(config);
	  var authors = getChartbeatAuthors(config);
	  var path = getChartbeatPath(config);
	  var useCanonical = shouldUseCanonical(config, opts);
	  return {
	    uid: uid,
	    domain: domain,
	    playerdomain: playerdomain,
	    sections: sections,
	    authors: authors,
	    path: path,
	    title: title,
	    useCanonical: useCanonical
	  };
	}
	
	var loaded = false;
	function loadChartbeat() {
	  if (loaded) return;
	  var tref = _trackingShared.utils.getQueryParam('tref');
	  try {
	    TWP.Analytics.report.chartbeat.on = true;
	    TWP.Analytics.report.chartbeat.loaded = false;
	  } catch (e) {
	    // do nothing
	  }
	
	  $(function () {
	    (0, _trackingShared.loadScript)(getChartbeatUrl(tref), function () {
	      loaded = true;
	      try {
	        TWP.Analytics.report.chartbeat.loaded = true;
	      } catch (e) {
	        // do nothing
	      }
	    });
	  });
	}
	
	function init() {
	  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      data = _ref3.data;
	
	  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      chartbeat = _ref4.chartbeat;
	
	  var trackingConfig = data ? (0, _trackingShared.getTrackingConfig)(data) : (0, _trackingShared.getTrackingConfig)();
	
	  _cbq.push(['_acct', getUserType()]);
	
	  var cfg = chartbeat ? configure(trackingConfig, chartbeat) : configure(trackingConfig);
	
	  global._sf_async_config = global._sf_async_config || {};
	
	  // disable chartbeat video autodetection for FBIA
	  if (_trackingShared.utils.getQueryParam('tref') === FB_INSTANT) {
	    _sf_async_config.autoDetect = true;
	  }
	
	  // NOTE: not sure why, but must modify the window variable instead of reassigning
	  (0, _objectAssign2.default)(global._sf_async_config, cfg);
	  loadChartbeat();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.sendPageview = sendPageview;
	
	var _trackingShared = __webpack_require__(1);
	
	var $ = global.jQuery || global.Zepto; /* global TWP, _comscore */
	/* eslint-disable no-native-reassign */
	/* eslint-disable no-underscore-dangle */
	
	var logger = new _trackingShared.utils.Log({
	  namespace: 'COMSCORE',
	  fmtOptions: {
	    color: '#8e44ad',
	    'font-weight': 'bold',
	    'text-decoration': 'underline'
	  },
	  shouldLog: _trackingShared.utils.shouldLog
	});
	
	var initialized = false;
	
	function init() {
	  logger.log('initializing');
	  initialized = true;
	  TWP.Analytics.report.comscore.on = true;
	  TWP.Analytics.report.comscore.loaded = false;
	
	  // NOTE: START Global variable
	  _comscore = window._comscore || [];
	  _comscore.push({ c1: 2, c2: 3005617 });
	  // NOTE: END Global variable
	
	  $(function () {
	    var comscoreURL = (document.location.protocol === 'https:' ? 'https://sb' : 'http://b') + '.scorecardresearch.com/beacon.js'; // eslint-disable-line prefer-template
	    (0, _trackingShared.loadScript)(comscoreURL, function () {
	      TWP.Analytics.report.comscore.loaded = true;
	    });
	  });
	}
	
	function sendPageViewToComscoreDontPanic() {
	  logger.log("DON'T PANIC: pageview will be sent on the live site");
	}
	
	function sendPageview() {
	  if (!initialized) {
	    init();
	    return;
	  }
	
	  // for comscore panelist tracking.
	  try {
	    // NOTE: Only works when this URL will resolve
	    if (!!global.location.hostname.match(/\.washingtonpost\.com/)) {
	      logger.log('Sending pageview');
	
	      var encodedPath = encodeURIComponent(location.pathname);
	      var pvcUrl = 'https://js.washingtonpost.com/wp-stat/comscore/pageview_candidate.txt?comscorekw=' + encodedPath;
	      var opts = {
	        url: pvcUrl,
	        dataType: 'text',
	        cache: false,
	        error: function error() {}
	      };
	
	      var i = new Image();
	      i.onload = i.onerror = function () {
	        return $.ajax(opts);
	      };
	
	      var ogURL = $('meta[property="og:url"]').attr('content');
	      i.src = (document.location.protocol === 'https:' ? 'https://sb' : 'http://b') + '.scorecardresearch.com/b?c1=2&c2=3005617&c7=' + encodeURI(ogURL || location.href); // eslint-disable-line prefer-template
	    } else {
	      sendPageViewToComscoreDontPanic();
	    }
	  } catch (e) {
	    // do nothing
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendPageView = sendPageView;
	exports.init = init;
	/* eslint-disable no-underscore-dangle */
	/* global TWP */
	
	function sendPageView() {
	  try {
	    global._em.trackAjaxPageview();
	  } catch (e) {
	    // do nothing
	  }
	}
	
	function init() {
	  TWP.Analytics.report.effectiveMeasure.on = true;
	  TWP.Analytics.report.effectiveMeasure.loaded = false;
	
	  var protocol = document.location.protocol === 'https:' ? 'https://me-ssl' : 'http://me-cdn';
	
	  var _em = document.createElement('script');
	  _em.type = 'text/javascript';
	  _em.async = true;
	  _em.src = protocol + '.effectivemeasure.net/em.js';
	
	  var _script = document.getElementsByTagName('script')[0];
	  _script.parentNode.insertBefore(_em, _script);
	
	  _em.onload = function () {
	    TWP.Analytics.report.effectiveMeasure.loaded = true;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(12);
	
	module.exports = {
	  implementation: implementation
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _trackingShared = __webpack_require__(1);
	
	var omnitureState = new _trackingShared.StateStore({
	  eventName: 'twpOmnitureReady',
	  service: 'OMNITURE'
	});
	
	module.exports = omnitureState;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _trackingShared = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var DEFAULT_PARAM = 'utm_term';
	
	var current = null;
	
	var Snowflake = function () {
	  function Snowflake() {
	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Snowflake);
	
	    var _config$param = config.param,
	        param = _config$param === undefined ? DEFAULT_PARAM : _config$param;
	
	    this.param = param;
	    this.queryParams = {};
	    current = this;
	  }
	
	  _createClass(Snowflake, [{
	    key: 'parseState',
	    value: function parseState() {
	      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global.location.search;
	
	      var queryParams = _trackingShared.queryString.parse(_trackingShared.queryString.extract(search), { decode: false });
	
	      var incoming = queryParams[this.param];
	      var outgoing = createSnowflake();
	
	      this.incoming = incoming && /^\.[0-9a-zA-Z]{12}$/.test(incoming) ? incoming : '';
	      this.outgoing = outgoing;
	
	      queryParams[this.param] = outgoing;
	      this.queryParams = queryParams;
	    }
	  }, {
	    key: 'syncState',
	    value: function syncState() {
	      _trackingShared.utils.history.replaceSearch(_trackingShared.queryString.stringify(this.queryParams, { encode: false, strict: false }));
	    }
	  }, {
	    key: 'clearState',
	    value: function clearState() {
	      delete this.queryParams[this.param];
	      this.syncState();
	    }
	  }], [{
	    key: 'getCurrent',
	    value: function getCurrent() {
	      return current;
	    }
	  }]);
	
	  return Snowflake;
	}();
	
	exports.default = Snowflake;
	
	function createSnowflake() {
	  var d = new Date().getTime();
	  if (window.performance && typeof window.performance.now === 'function') {
	    d += performance.now();
	  }
	  return '.' + 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = (d + Math.random() * 16) % 16 | 0;
	    d = Math.floor(d / 16);
	    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.track = exports.init = undefined;
	
	var _init = __webpack_require__(4);
	
	var _tracker = __webpack_require__(11);
	
	var _tracker2 = _interopRequireDefault(_tracker);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.init = _init.init;
	exports.track = _tracker2.default;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trackingShared = __webpack_require__(1);
	
	var _init = __webpack_require__(4);
	
	var createTracker = _trackingShared.tracker.createTracker,
	    schemafy = _trackingShared.tracker.schemafy;
	var PAGE_VIEW = _trackingShared.constants.PAGE_VIEW;
	
	var schema = {
	  section: 'section',
	  subsection: 'subsection',
	  author: 'author',
	  meta_data: 'meta_data',
	  content_type: 'content_type',
	  blogname: 'blogname'
	};
	
	var trackFunc = function trackFunc() {
	  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var options = arguments[1];
	  var type = options.type;
	
	  if (type === PAGE_VIEW) {
	    (0, _init.init)({ data: schemafy(d, schema) }, options);
	
	    try {
	      global.pSUPERFLY.virtualPage(global.location.pathname, global.document.title);
	    } catch (e) {
	      // do nothing;
	    }
	  }
	};
	
	exports.default = createTracker(trackFunc);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _trackingShared = __webpack_require__(1);
	
	var logger = __webpack_require__(13);
	
	var $ = global.jQuery || global.Zepto;
	
	var endpoint = 'https://cdn-api.arcpublishing.com/v1.0/loxodo/datapoint/save';
	
	// wp loxodo config
	// ================
	var orgId = 'wpniwashpostcom';
	var siteId = !!window.wp_site ? wp_site : 'www.washingtonpost.com';
	
	// uuid storage keys
	// =================
	var UID_KEY = 'wp_vi';
	var IID_KEY = 'lox_iid';
	var SID_KEY = 'lox_sid';
	
	// uuids
	// =====
	var uid = getUUID(); // user
	var iid = generateUUID(); // interaction
	var sid = getPersistentUUID(SID_KEY); // session
	var targeting_uid = !!document.cookie.match(/wapo_login_id=([^;]+)/) ? RegExp.$1 : ''; // targeting
	
	module.exports = {
	  extract: extract,
	  sendData: sendData,
	  getIID: getIID,
	  getUID: getUID,
	  getSID: getSID
	};
	
	function extract(obj, options) {
	
	  var extraction = {};
	
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return extraction;
	
	  var linkTrackVars = obj.linkTrackVars;
	
	  var dataPattern = /pageName|prop|eVar|channel|hier|pageType|list|events|products|campaign/;
	  var metaDataPattern = /referrer|server|NameSpace|zip|browser|resolution|purchaseID|^u$|plugins|pageURL|linkTypecolorDepth|trackingServer|^un$|cookies|java|currencyCode/;
	
	  for (var key in obj) {
	    var val = obj[key];
	
	    if (typeof val != 'function' && !!val) {
	      if (key.match(metaDataPattern)) {
	
	        extraction[key] = val;
	      } else if (key.match(dataPattern)) {
	
	        if (options && options.partial) {
	          if (linkTrackVars.indexOf(key) > -1) extraction[key] = val;
	        } else {
	          extraction[key] = val;
	        }
	      }
	    }
	  }
	
	  if ('events' in extraction && typeof extraction.events === 'string') extraction.events = extraction.events.split(',');
	
	  extraction = Object.keys(extraction).length ? extraction : null;
	
	  return extraction;
	}
	
	function getUUID() {
	  var uuid = getPersistentUUID(UID_KEY);
	  if (!uuid) {
	    uuid = generateUUID();
	    setPersistentUUID(UID_KEY, uuid);
	  }
	
	  return uuid;
	}
	
	function getPersistentUUID(localStorageKey) {
	  return _trackingShared.utils.readValue(localStorageKey);
	}
	
	function setPersistentUUID(localStorageKey, value) {
	  return _trackingShared.utils.persistValue(localStorageKey, value);
	}
	
	function generateUUID() {
	  var d = new Date().getTime();
	
	  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = (d + Math.random() * 16) % 16 | 0;
	    d = Math.floor(d / 16);
	    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	  });
	
	  return uuid;
	}
	
	function processData(data) {
	  try {
	    return JSON.stringify(data);
	  } catch (e) {
	    logger.error(e);
	    return JSON.stringify({ prop30: 'Client: bad data' });
	  }
	}
	
	function sendData(data, options) {
	  // disable loxodo in embedded content
	  if (window.self !== window.top) {
	    return;
	  }
	
	  logger.log('sd');
	
	  if (!!options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    if ('mode' in options) {
	      if (!('eventType' in data)) {
	        data.eventType = options.mode;
	      }
	    }
	  } else {
	    throw new Error("sendData - options parameter must be an object");
	  }
	
	  if (data.eventType === 'pv') {
	    iid = generateUUID();
	  }
	
	  data.orgId = orgId;
	  data.siteId = siteId;
	
	  if (!!uid) data.uid = uid;
	  if (!!iid) data.iid = iid;
	  if (!!sid) data.sid = sid;
	  if (!!targeting_uid) data.targeting_uid = targeting_uid;
	
	  var payload = processData(data);
	
	  var ajaxOptions = {
	    type: "POST",
	    url: endpoint,
	    data: payload,
	    contentType: 'application/json; charset=utf-8'
	  };
	
	  return $.ajax(ajaxOptions).then(function (response) {
	    uid = !!response && !!response.uid ? response.uid : uid;
	    iid = !!response && !!response.iid ? response.iid : iid;
	    sid = !!response && !!response.sid ? response.sid : sid;
	
	    setPersistentUUID(UID_KEY, uid);
	    setPersistentUUID(IID_KEY, iid);
	    setPersistentUUID(SID_KEY, sid);
	    logger.log('sd success:', response);
	  }).then(null, function (error) {
	    logger.error("sd failure:", error);
	  });
	}
	
	function getIID() {
	  return iid;
	}
	
	function getUID() {
	  return uid;
	}
	
	function getSID() {
	  return sid;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _trackingShared = __webpack_require__(1);
	
	module.exports = new _trackingShared.utils.Log({
	  namespace: "LOXODO",
	  fmtOptions: {
	    "color": "#27ae60",
	    "font-weight": "bold",
	    "text-decoration": "underline"
	  },
	  shouldLog: _trackingShared.utils.shouldLog
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _trackingShared = __webpack_require__(1);
	
	var scriptURLBase = '//cdn-gl.imrworldwide.com/novms/js/2/nlsDcrLite510.min.js';
	
	function init() {
	  var trackingData = (0, _trackingShared.getTrackingConfig)();
	
	  var sfCode = 'dcr';
	  var apid = 'T972724C7-F0A2-44C8-B9C1-DE11C8E8341D';
	
	  var assetName = trackingData.section;
	
	  var config = {
	    nol_sfcode: sfCode,
	    nol_apid: apid,
	    nol_ci: 'us-904793',
	    nol_apn: 'washingtonpostCOM',
	    nol_vc: 'b01',
	    nol_assetname: assetName
	  };
	
	  var params = _trackingShared.queryString.stringify(config);
	  var scriptURL = scriptURLBase + '#' + params;
	
	  return (0, _trackingShared.loadScript)(scriptURL, function () {
	    console.log('nielsen script loaded');
	  });
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var applePay = exports.applePay = function applePay(deviceSupport, hasCreditCard) {
	  var deviceFragment = deviceSupport ? 'valid-dev' : 'invalid-dev';
	  var creditCardFragment = hasCreditCard ? 'valid-cc' : 'invalid-cc';
	
	  if (!deviceSupport) {
	    return deviceFragment + '_';
	  }
	
	  return deviceFragment + '_' + creditCardFragment;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	}; /* global s, TWP */
	
	var _trackingShared = __webpack_require__(1);
	
	var _snowflake = __webpack_require__(9);
	
	var _snowflake2 = _interopRequireDefault(_snowflake);
	
	var _comscore = __webpack_require__(5);
	
	var _formatter = __webpack_require__(15);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	var isDesktop = function isDesktop() {
	  return !_trackingShared.utils.mobile.any();
	};
	
	var delay = function delay(time) {
	  return new Promise(function (resolve) {
	    return setTimeout(resolve, time);
	  });
	};
	
	var getQueryParam = _trackingShared.utils.getQueryParam;
	
	var $ = global.jQuery || global.Zepto;
	
	var effectiveMeasure = __webpack_require__(6);
	var omnitureState = __webpack_require__(8);
	var internal = __webpack_require__(7).implementation;
	var logger = __webpack_require__(19);
	
	var twpOmnitureInitialized = false;
	
	// var webGLSupported = utils.webGLSupported;
	// try {
	//   window.wp_evar26 = 'webglTest_' + webGLSupported.isSupported + '_' +
	//   webGLSupported.isSupportedWithoutPerformanceCaveat + '_' +
	//   webGLSupported.hardwareConcurrency;
	// } catch (e) {
	//   window.wp_evar26 = 'webglTest_error';
	// }
	
	module.exports = loadOmniture;
	
	wp_defaultEvents = 'event1,event105'; // event105: UPC
	
	var combineEvents = function combineEvents() {
	  for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
	    events[_key] = arguments[_key];
	  }
	
	  return events.filter(Boolean).join(',');
	};
	
	var applePayStorageKey = 'tb_applepay';
	
	function detectApplePayCard() {
	  var hasApplePayDeviceSupport = _trackingShared.applePay.supportedDevice() && _trackingShared.applePay.canMakePayments();
	
	  if (hasApplePayDeviceSupport) {
	    _trackingShared.applePay.canMakePaymentsWithActiveCard().then(function (hasCard) {
	      return localStorage.setItem(applePayStorageKey, hasCard);
	    });
	  } else {
	    localStorage.setItem(applePayStorageKey, false);
	  }
	}
	
	function getHasCard() {
	  var hasCC = void 0;
	  try {
	    hasCC = localStorage.getItem(applePayStorageKey);
	    localStorage.removeItem(applePayStorageKey);
	  } catch (e) {
	    hasCC = null;
	  }
	
	  if (hasCC === null) {
	    return hasCC;
	  }
	
	  return hasCC === 'true';
	}
	
	function trackApplePay(s) {
	  var hasApplePayDeviceSupport = _trackingShared.applePay.supportedDevice() && _trackingShared.applePay.canMakePayments();
	
	  var hasCard = getHasCard();
	  if (hasCard !== null) {
	    s.eVar52 = (0, _formatter.applePay)(hasApplePayDeviceSupport, hasCard);
	  }
	
	  try {
	    detectApplePayCard();
	  } catch (e) {
	    console.log(e);
	  }
	}
	
	function loadOmniture(config) {
	  var defaultSnowflakeEnabled = config.snowflake;
	
	  var defaultSnowflake = new _snowflake2.default();
	  defaultSnowflake.parseState(location.search);
	
	  if (defaultSnowflakeEnabled) {
	    defaultSnowflake.syncState();
	  } else {
	    defaultSnowflake.clearState();
	  }
	
	  /* SiteCatalyst code version: H.24.2.
	  Copyright 1997-2007 Omniture, Inc. More info available at
	  http://www.omniture.com */
	  /************************ ADDITIONAL FEATURES ************************
	       Plugins
	  */
	  /* Specify the Report Suite ID(s) to track here */
	  window.s_account = window.s_account || "wpniwashpostcom";
	  window.s = s_gi(s_account);
	
	  /************************** CONFIG SECTION **************************/
	  /* You may add or alter any code config here. */
	  /* E-commerce Config */
	  s.currencyCode = "USD";
	  /* Link Tracking Config */
	  s.trackDownloadLinks = true;
	  s.trackExternalLinks = true;
	  s.trackInlineStats = true;
	  s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,ics";
	  s.linkInternalFilters = "javascript:,washingtonpost.com,www.facebook.com/plugins," + window.location.host;
	  s.linkLeaveQueryString = false;
	  s.linkTrackVars = "server";
	  s.linkTrackEvents = "None";
	
	  // DST dates for time parting
	  s.dstStart = "03/11/2012";
	  s.dstEnd = "11/04/2012";
	
	  /* Plugin Config */
	  s.usePlugins = true;
	
	  function s_doPlugins(s) {
	    /* Add calls to plugins here */
	
	    /* Plugin Example: getQueryParam v2.0 */
	    if (typeof s.campaign == 'undefined' || typeof s.campaign == 'string' && s.campaign == '') {
	      if (!!getQueryParam('wpsrc')) {
	        s.campaign = getQueryParam('wpsrc');
	      } else if (!!getQueryParam('wpmk')) {
	        s.campaign = getQueryParam('wpmk');
	      } else if (!!getQueryParam('wpmm')) {
	        s.campaign = getQueryParam('wpmm');
	      }
	    }
	
	    if (typeof s.eVar3 == 'undefined' || typeof s.eVar3 == 'string' && s.eVar3 == '') s.eVar3 = getQueryParam('wpisrc');
	
	    if (!document.referrer.toString().match(/washingtonpost\.com/)) s.eVar29 = getQueryParam('wprss');
	
	    /* Plugin Example: getValOnce v0.2 */
	    s.campaign = s.getValOnce(s.campaign, "s_campaign", 0);
	    s.eVar3 = s.getValOnce(s.eVar3, 's_eVar3', 0);
	    s.eVar29 = s.getValOnce(s.eVar29, 's_eVar29', 0);
	
	    s.events = !!s.events ? s.events : s.getUniqueEvents(wp_events);
	
	    /* Set eVar 1 & 2 to PN and Channel  */
	    s.eVar1 = typeof wp_evar1 != "undefined" ? wp_evar1 : s.pageName;
	    s.eVar2 = typeof wp_evar2 != "undefined" ? wp_evar2 : s.channel;
	
	    /* Set eVar11 to prop25 (blog name) */
	    s.eVar11 = typeof s.prop25 != "undefined" ? s.prop25 : '';
	
	    /* Set DSLV & New vs Repeat  */
	    try {
	      s.prop18 = s.getNewRepeat();
	    } catch (e) {
	      s.prop18 = "nocategory";
	    }
	
	    s.prop17 = s.getDaysSinceLastVisit('s_lv');
	    s.prop17 = s.getAndPersistValue(s.prop17, 's_dslv', 0);
	    s.eVar14 = s.prop18;
	    s.eVar15 = s.prop17;
	
	    /* Get Visit Num */
	    try {
	      s.eVar16 = s.getVisitNum('m', 's_vmonthnum', 's_monthinvisit');
	    } catch (e) {
	      s.eVar16 = "nocategory";
	    }
	
	    /* Plugin Example: timeparting - EST - hour,day,weekday */
	    var wp_current_year = new Date().getFullYear() + '';
	    s.prop8 = s.getTimeParting('d', '-5', wp_current_year);
	    s.prop9 = s.getTimeParting('h', '-5', wp_current_year);
	    s.prop10 = s.getTimeParting('w', '-5', wp_current_year);
	    // Ideally, we'd capture the year with an SSI, but because thise file is used on servers where SSIs might not be supported, not doing that.
	
	    /* Set hierarchy to prop23 */
	    s.prop23 = s.hier1;
	
	    /* Set eVar18 to entry content type */
	    var ct = s.prop3;
	    var isEP = s.c_r('s_wp_ep');
	    if (!isEP && ct) {
	      s.c_w('s_wp_ep', ct, 0);
	      s.eVar18 = ct;
	    }
	
	    /* Look for Navigation ID - Set prop28 & 29 */
	    var pp = s.getPreviousPage();
	    var ppn = s.getPreviousValue(s.pageName, 'gvp_p5');
	    var nid = getQueryParam('nid');
	    if (nid) {
	      s.prop28 = nid;
	    }
	    s.prop29 = ppn;
	    s.eVar6 = ppn;
	
	    var ppv;
	    try {
	      ppv = s.getPercentPageViewed(s.pageName);
	    } catch (e) {
	      logger.error('initialized before ready.');
	    }
	    // true if prev page id matches prev page name
	    if (ppv && (typeof ppv === 'undefined' ? 'undefined' : _typeof(ppv)) === 'object' && ppv[0] === ppn) {
	      // initial_percent_viewed|max_percent_viewed
	      var p61 = [ppv[2], ppv[1]].join('|');
	      s.prop61 = p61;
	    }
	
	    /* Look for Navigation ID - Set prop28 & 29 */
	    var ppc = s.getPreviousValue(s.channel, 'gvp_p51');
	    ppc = !ppc ? 'entry' : ppc;
	    s.prop51 = ppc + '>' + s.channel;
	
	    /* Look for homepage id - Set prop 27 if HP value is previous page */
	    var hpid = getQueryParam('hpid');
	    if (hpid && (ppn == "wp - homepage" || ppn == "wp - homepage - regional")) {
	      s.prop27 = hpid;
	      s.eVar19 = s.prop27;
	    }
	
	    var hpv = getQueryParam('hpv'); //multimedia check
	    if (hpid && hpv == "national") {
	      pp = "wp - homepage";
	      s.prop27 = pp + ' - ' + hpid;
	      s.eVar19 = s.prop27;
	    }
	
	    if (hpid && hpv == "default") {
	      pp = "wp - homepage";
	      s.prop27 = pp + ' - ' + hpid;
	      s.eVar19 = s.prop27;
	    }
	
	    if (hpid && hpv == "override") {
	      pp = "wp - homepage";
	      s.prop27 = pp + ' - ' + hpid;
	      s.eVar19 = s.prop27;
	    }
	
	    if (s.server == "washingtonpost.com jobs") {
	      s.eVar4 = s.prop6;
	    }
	
	    var temp1 = getQueryParam('reload');
	    var temp2 = getQueryParam('sub');
	    if (temp1 == "true") {
	      s.prop31 = "site reload";
	    };
	
	    if (temp2 && temp2.toLowerCase() == "ar") {
	      s.prop31 = "completed sign in";
	    }
	
	    if (temp2 && temp2.toLowerCase() == "new") {
	      s.prop31 = "completed registration";
	    }
	
	    var historyTid;
	    try {
	      historyTid = history.state.tid;
	    } catch (e) {
	      // do nothing
	    }
	
	    if (historyTid) {
	      s.prop20 = historyTid;
	    }
	
	    var tid = getQueryParam('tid');
	    if (tid) {
	      s.prop20 = tid;
	    }
	
	    var campaign_id = getQueryParam('campaign_id');
	    var campaign_type = getQueryParam('campaign_type');
	    if (!s.prop20 && campaign_id && campaign_type) {
	      s.prop20 = campaign_id + '|' + campaign_type;
	    }
	
	    if (!s.prop20) {
	      s.prop20 = getQueryParam('fb_Ref');
	    }
	
	    var utm_source = getQueryParam('utm_source');
	    if (!s.prop20 && !!utm_source && /^rss_/.test(utm_source)) {
	      s.prop20 = utm_source;
	    }
	
	    s.eVar20 = s.prop20;
	
	    if (!s.eVar31) {
	      if (navigator.userAgent.match(/(iPad|SCH-I800|PlayBook|A500|Kindle)/i)) {
	        s.eVar31 = "tablet";
	      } else {
	        s.eVar31 = "desktop";
	      }
	    }
	
	    /* Set event20 as visit entry event (wether the referrer is external, or the page is a direct load) */
	    s._referrer = s._2referrer = s.referrer ? s.referrer : document.referrer;
	    if (!s._referrer) {
	      s._referrer = s._2referrer = s._entry = "Direct-Load";
	    }
	
	    if (s._referrer) {
	      s._referrer = s._referrer.indexOf('?') > -1 ? s._referrer.substring("0", s._referrer.indexOf('?')) : s._referrer;
	      s._urlCheck = s.split(s.linkInternalFilters, ",");
	      s._urlCheckLength = s._urlCheck.length - 1;
	      for (s._for = 0; s._for <= s._urlCheckLength; s._for++) {
	        s._urlReferrer = s._referrer.indexOf(s._urlCheck[s._for]) > -1 ? "1" : "0";
	        if (s._urlReferrer == "1") {
	          s._entry = "0";
	        }
	      }
	    }
	
	    if (s._entry != "0") {
	      s._referrerPass = s._2referrer;
	      s._referrerPass = s.getValOnce(s._referrerPass, 's._ref', 0);
	      if (s._referrerPass) {
	        s.events = s.apl(s.events, 'event20', ',', 2);
	      }
	    }
	
	    /* New vs Repeat  */
	    if (s.pageName == "wp - homepage - local") {
	      try {
	        s.prop15 = s.getNewRepeat('', 's_npr');
	      } catch (e) {
	        s.prop15 = "nocategory";
	      }
	    }
	
	    // sailthru user uuid
	    var sailthruUid = getQueryParam('uid');
	    if (!!sailthruUid) {
	      s.eVar34 = sailthruUid;
	    }
	
	    var pushID = getQueryParam('pushid');
	    if (pushID) {
	      s.eVar74 = pushID;
	    }
	  }
	  s.doPlugins = s_doPlugins;
	  /************************** PLUGINS SECTION *************************/
	  /* You may insert any plugins you wish to use here.                 */
	
	  /*
	   * getUniqueEvents
	   */
	  s.getUniqueEvents = function (events) {
	    events = !!events ? events.split(',') : '';
	    var u = {},
	        a = [];
	
	    for (var i = 0, l = events.length; i < l; ++i) {
	      var e = events[i].replace(/^\s+|\s$/g, '');
	
	      if (typeof u[e] == 'undefined' && e != '') {
	        u[e] = 1;
	        a.push(e);
	      }
	    }
	
	    return a.sort().join(',');
	  };
	
	  /*
	   * Plugin: getValOnce_v1.0
	   */
	  s.getValOnce = new Function("v", "c", "e", "" + "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c" + ");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return" + " v==k?'':v");
	
	  /*
	   * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
	   */
	  s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
	  /*
	   * Plugin Utility: apl v1.1
	   */
	  s.apl = new Function("L", "v", "d", "u", "" + "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)L=L?L+d+v:v;return L");
	
	  /*
	   * Plugin: getAndPersistValue 0.3 - get a value on every page
	   */
	  s.getAndPersistValue = new Function("v", "c", "e", "" + "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(" + "v)s.c_w(c,v,e?a:0);return s.c_r(c);");
	
	  /*
	   * Plugin: Days since last Visit 1.1.H - capture time from last visit
	   */
	  s.getDaysSinceLastVisit = new Function("c", "" + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT" + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s" + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s" + "!=f5) return '';else return cval_s;");
	
	  /*
	   * Plugin: getVisitNum - version 3.0
	   */
	  s.getVisitNum = new Function("tp", "c", "c2", "" + "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" + "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" + "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" + "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" + "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" + "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" + "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" + "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" + "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" + ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
	  s.dimo = new Function("m", "y", "" + "var d=new Date(y,m+1,0);return d.getDate();");
	  s.endof = new Function("x", "" + "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" + "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" + "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " + "t;");
	
	  /*
	   * Plugin: getPercentPageViewed v1.71
	   */
	  s.getPercentPageViewed = new Function("n", "" + "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load" + "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o" + "rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s" + ".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v" + "ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(" + "',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;" + "a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=" + "!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';" + "if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va" + "r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|" + "|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid" + "th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|" + "|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs" + "tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s" + "_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H" + "s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i" + "nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(" + "C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p" + "=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180" + ":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i," + "v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=" + "N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i" + "Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'" + ":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+" + "','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x" + "+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s" + "_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E." + "length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v" + "ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
	
	  /*
	   * Plugin: getTimeParting 2.0
	   */
	  s.getTimeParting = new Function("t", "z", "y", "l", "" + "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S" + "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U" + ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801" + "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z" + "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin" + "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D" + "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat" + "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new" + " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g" + "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo" + "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get" + "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='" + "00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6" + "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab" + "le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r" + "eturn A}}else{return Z+', '+W}}}");
	
	  /*
	   * Plugin: getPreviousValue_v1.0 - return previous value of designated
	   *   variable (requires split utility)
	   */
	  s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
	  /*
	   * Plugin: getPreviousPage_v1.1 - return previous page based on event list
	   */
	  s.getPreviousPage = new Function("el", "" + "var s=this,pid,i,j,e;if(el){if(s.events){while(el){if(pid){break;}i" + "=el.indexOf(',');i=i<0?el.length:i;e=s.events;while(e){j=e.indexOf(" + "',');j=j<0?e.length:j;if(e.substring(0,j)==el.substring(0,i)){pid=s" + ".p_gpp();}e=e.substring(j==e.length?j:j+1);}el=el.substring(i==el.l" + "ength?i:i+1);}}}else{pid=s.p_gpp();}return pid;");
	  /*
	   * Utility Function: p_gpp
	   */
	  s.p_gpp = new Function("" + "var s=this,p,i;p=s.rq(s.un);i=p.indexOf('pid=')+4;p=p.substring(i,p" + ".length);i=p.indexOf('&');p=p.substring(0,i);p=unescape(p);return p" + ";");
	  /*
	   * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
	   */
	  s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
	  /*
	   * Function - read combined cookies v 0.2
	   */
	  s.c_rr = s.c_r;
	  s.c_r = new Function("k", "" + "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret" + "urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=" + "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'" + ",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:" + "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get" + "Time()){if(toxicOmnitureCounter<20){toxicOmnitureCounter++;d.setTim" + "e(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}else{toxicOmnitureC" + "ounter=0;throw new ThreateningStackOverflowException()}}return v;");
	  /*
	   * Function - write combined cookies v 0.2
	   */
	  s.c_wr = s.c_w;
	  s.c_w = new Function("k", "v", "e", "" + "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv," + "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s" + ".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr" + "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv" + ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i" + "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())" + "{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'" + "='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t" + ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i" + "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set" + "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
	  /*
	   * Function - Get Full Referring Domains
	   */
	  s.getFullReferringDomains = new Function("" + "var s=this,dr=window.document.referrer,n=s.linkInternalFilters.spli" + "t(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){i" + "f(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}");
	
	  /* WARNING: Changing any of the below variables will cause drastic
	  changes to how your visitor data is collected.  Changes should only be
	  made when instructed to do so by your account manager.*/
	  s.visitorNamespace = "wpni";
	  s.trackingServer = "metrics.washingtonpost.com";
	  s.trackingServerSecure = "smetrics.washingtonpost.com";
	  s.dc = 112;
	
	  /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
	  window.s_objectID = undefined;
	  window.s_code = '';
	
	  function s_gi(un, pg, ss) {
	    var c = "s.version='H.24.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\"" + "\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur" + "n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p" + "<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU" + "pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h" + ".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('" + "%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)" + "{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri" + "ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a" + "=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var" + " s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde" + "fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';" + "s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa" + "rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a" + "pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd" + "(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie" + "=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s." + "_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(" + "x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return " + "r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs" + "oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi" + "s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet" + "('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun" + "ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje" + "ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p" + "=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl" + "(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window" + ".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im." + "s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if" + "(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na" + "me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg" + "=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s" + "=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas" + "e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l" + "=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su" + "bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f" + "){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v) {if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=" + "0)){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.in" + "dexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(s" + "v){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';e" + "lse if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}}if(qs" + "!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType" + "){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;" + "if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&" + "e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL" + "'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS" + "erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s" + ".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='" + "cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els" + "e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else" + " if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q" + "='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k==" + "'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(" + "b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase(" + "):'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h." + "indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(" + "s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';r" + "eturn ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+']," + "f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e" + "){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&" + "&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/" + "':'')+h}return h};s.ot=function(o){var t=o.tagName;if((''+o.tagUrn)!='undefined'||((''+o.scopeName)!='undefined'&&(''+o.scopeName).toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase(" + "):'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0" + ";if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",'" + "'),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){" + "o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+','" + ")>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un" + ");return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){" + "var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)i" + "f(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v" + "+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o" + "=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(" + "s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0," + "s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n" + "){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0" + "&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n," + "i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.u" + "n.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r," + "l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;" + "m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m" + "._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s" + "[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if" + "((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl" + ")for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]" + "){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=" + "g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.su" + "bstring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=" + "s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s" + ".maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o" + ".type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o')" + ";o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=fun" + "ction(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=" + "v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<" + "s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxD" + "elay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()}" + ";s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),v" + "t=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code=''" + ",vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.proto" + "type){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','" + "var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if" + "(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElem" + "ent.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}re" + "turn hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&" + "pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.con" + "nectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pa" + "geURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo" + "&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('." + "s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);" + "if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');q+='&pe='+s.pe+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex" + ";if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}" + "if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLi" + "ghtProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd." + "s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfile" + "ID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagConta" + "inerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];" + "x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&ty" + "peof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().in" + "dexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var " + "apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.iso" + "pera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.ap" + "v=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i" + "=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cooki" + "eDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s." + "va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider," + "channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n" + "=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWi" + "dth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBuffer" + "edRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,lin" + "kDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=n" + "ew Object;s.retrieveLightData=new Object;if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
	        w = window,
	        l = w.s_c_il,
	        n = navigator,
	        u = n.userAgent,
	        v = n.appVersion,
	        e = v.indexOf('MSIE '),
	        m = u.indexOf('Netscape6/'),
	        a,
	        i,
	        j,
	        x,
	        s;
	
	    if (un) {
	      un = un.toLowerCase();
	      if (l) for (j = 0; j < 2; j++) {
	        for (i = 0; i < l.length; i++) {
	          s = l[i];
	          x = s._c;
	          if ((!x || x == 's_c' || j > 0 && x == 's_l') && (s.oun == un || s.fs && s.sa && s.fs(s.oun, un))) {
	            if (s.sa) s.sa(un);
	            if (x == 's_c') return s;
	          } else s = 0;
	        }
	      }
	    }
	
	    w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
	    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
	    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
	    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
	    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
	    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
	    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
	    c = s_d(c);
	
	    if (e > 0) {
	      a = parseInt(i = v.substring(e + 5));
	      if (a > 3) a = parseFloat(i);
	    } else if (m > 0) a = parseFloat(u.substring(m + 10));else a = parseFloat(v);if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c);
	    if (!s) {
	      s = new Object();
	      if (!w.s_c_in) {
	        w.s_c_il = new Array();
	        w.s_c_in = 0;
	      }
	      s._il = w.s_c_il;
	      s._in = w.s_c_in;
	      s._il[s._in] = s;
	      w.s_c_in++;
	    }
	
	    s._c = 's_c';
	    new Function("s", "un", "pg", "ss", c)(s, un, pg, ss);
	    return s;
	  }
	
	  function s_giqf() {
	    var w = window,
	        q = w.s_giq,
	        i,
	        t,
	        s;
	
	    if (q) for (i = 0; i < q.length; i++) {
	      t = q[i];
	      s = s_gi(t.oun);
	      s.sa(t.un);
	      s.setTagContainer(t.tagContainerName);
	    }
	    w.s_giq = 0;
	  }
	  s_giqf();
	
	  /* START: TWP vars, fns, objs, etc. */
	  /* START: s.initForTwp */
	  s.initForTwp = function () {
	    /* Facebook domains */
	    s.facebookSocial = 'facebook - recommendations|facebook.com/plugins/recommendations.php>facebook - friends activity|facebook.com/plugins/activity.php';
	
	    /* You may give each page an identifying name, server, and channel on the next lines. */
	    if (typeof wp_section != 'undefined') {
	      wp_section = wp_section.replace(/\//, ' - ');
	    }
	
	    if (typeof wp_subsection != 'undefined') {
	      wp_subsection = wp_subsection.replace(/\//, ' - ');
	    }
	    /* need to test */
	
	    if (typeof wp_page_name != 'undefined') {
	      s.pageName = wp_page_name.replace(/<[a-zA-Z\/][^>]*>/g, '');
	
	      //remove session id
	      s.pageName = s.pageName.replace(/\;jsessionid\=.{23}/g, '');
	    } else {
	      s.pageName = 'wp - ' + document.location.pathname + ' - ' + document.title;
	
	      //remove html
	      s.pageName = s.pageName.replace(/<[a-zA-Z\/][^>]*>/g, '');
	
	      //remove session id
	      s.pageName = s.pageName.replace(/\;jsessionid\=.{23}/g, '');
	    }
	
	    if (typeof wp_channel != 'undefined') {
	      s.channel = wp_channel.indexOf('wp - ') >= 0 ? wp_channel : 'wp - ' + wp_channel;
	    } else if (typeof wp_section != 'undefined') {
	      s.channel = wp_section.indexOf('wp - ') >= 0 ? wp_section.split('/')[0] : 'wp - ' + wp_section.split('/')[0];
	    } else if (typeof wp_hierarchy != 'undefined') {
	      s.channel = wp_hierarchy.indexOf('wp - ') >= 0 ? wp_hierarchy.split('|')[0] : 'wp - ' + wp_hierarchy.split('|')[0];
	    } else {
	      s.channel = 'wp - nocategory';
	    }
	
	    s_portalInstance = '';
	    if (document.getElementsByName('eomportal-instanceid').length) {
	      s_portalInstance = document.getElementsByName('eomportal-instanceid')[0].getAttribute('content');
	    }
	
	    s.server = 'washingtonpost.com';
	    s.server += s_portalInstance ? ':' + s_portalInstance : '';
	
	    s.pageType = window.wp_page_type ? wp_page_type : '';
	
	    var fmtCookie = function fmtCookie(name, val) {
	      return name + ':' + val;
	    };
	
	    var targetCookies = ['rplampr', // pwa
	    'rplabrfg', // meter test
	    'rplabscmtr', // meter test
	    'rplpwabt2', // meter test
	    'rplpwabt3', // meter test
	    'rplpwabt4'];
	
	    var combined = targetCookies.reduce(function (acc, cookie) {
	      var cookieVal = _trackingShared.utils.readCookie(cookie);
	
	      if (cookieVal !== null) {
	        return [].concat(_toConsumableArray(acc), [fmtCookie(cookie, cookieVal)]);
	      }
	
	      return acc;
	    }, []);
	
	    if (combined.length) {
	      s.prop1 = combined.join(';');
	    }
	
	    if (typeof wp_subsection != 'undefined') {
	      wp_subsection = wp_subsection.toLowerCase();
	      s.prop2 = wp_subsection.indexOf('wp - ') >= 0 || wp_subsection.length == 0 ? wp_subsection : 'wp - ' + wp_subsection;
	    }
	
	    if (typeof wp_content_type != 'undefined') {
	      s.prop3 = wp_content_type.toLowerCase();
	    }
	
	    if (typeof wp_source != 'undefined') {
	      s.prop4 = wp_source.toLowerCase();
	    } else {
	      s.prop4 = 'washingtonpost.com';
	    }
	
	    if (typeof wp_site != 'undefined') {
	      s.prop58 = wp_site.toLowerCase();
	    } else {
	      s.prop58 = 'www.washingtonpost.com';
	    }
	
	    var tref = getQueryParam('tref');
	    if (!!tref) {
	      s.prop58 = tref;
	    }
	
	    // facebook instant referrer override
	    if (tref === 'fbinstant' && !document.referrer) {
	      s.referrer = global.ia_document && global.ia_document.referrer || 'http://ia.facebook.com';
	    }
	
	    if (typeof wp_author != 'undefined') {
	      s.prop5 = wp_author.toLowerCase();
	    }
	
	    if (typeof wp_search_keywords != 'undefined') {
	      s.prop6 = wp_search_keywords.toLowerCase();
	    }
	
	    if (typeof wp_search_type != 'undefined') {
	      s.prop7 = wp_search_type.toLowerCase();
	    }
	
	    s.prop8 = '';
	    s.prop9 = '';
	    s.prop10 = '';
	    s.prop11 = '';
	    if (typeof wp_content_id != 'undefined') {
	      s.prop12 = wp_content_id;
	      if (window.wp_application) {
	        s.prop13 = '';
	      }
	      if (window.wp_content_id) {
	        s.prop13 = wp_content_id + ' - ' + window.wp_headline;
	      }
	    }
	
	    if (typeof wp_page_num != 'undefined') {
	      s.prop14 = wp_page_num;
	    }
	
	    var VERSION = ("1.0.41");
	
	    s.prop16 = VERSION;
	
	    if (typeof wp_search_result_count != 'undefined') {
	      s.prop21 = wp_search_result_count;
	    }
	
	    if (typeof wp_story_type != 'undefined') {
	      s.prop24 = wp_story_type;
	    }
	
	    if (typeof wp_blogname != 'undefined') {
	      s.prop25 = wp_blogname;
	    }
	
	    if (typeof wp_columnname != 'undefined') {
	      s.prop26 = wp_columnname;
	    }
	
	    s.getRegistrationStatus = function () {
	      var regStatus = 'anonymous';
	      if (document.cookie.match(/wpniuser=([^;]+)/)) {
	        regStatus = 'wp registration';
	      }
	      if (document.cookie.indexOf('fbuid') != -1) {
	        regStatus = 'facebook connect';
	      }
	      return regStatus;
	    };
	    getFBConnectUserName = s.getRegistrationStatus;
	    s.prop33 = s.getRegistrationStatus();
	
	    function getUserName() {
	      var username;
	      if (document.cookie.match(/wpniuser=([^;]+)/)) {
	        return RegExp.$1;
	      }
	      return username;
	    }
	
	    /* START: s.prop34 */
	    if (typeof wp_news_or_commercial != 'undefined') {
	      s.prop34 = wp_news_or_commercial;
	    } else {
	      s.prop34 = 'News';
	      if (s.channel.match(/^(wp - )?(cars|classifieds|jobs|real ?estate|rentals)/)) {
	        s.prop34 = 'Commercial';
	      }
	    }
	    /* END: s.prop34 */
	
	    s.prop35 = s.getFullReferringDomains();
	
	    s.getPersonalPostStatus = function () {
	      var ppStatus = 'anonymous';
	      var ppRe = /(?:^|;)\s*pp_([^=]{32,32})=([^;]+)/;
	      if (ppRe.test(document.cookie)) {
	        if (RegExp.$2 == 'no_id_set') {
	          ppStatus = 'no_id_set';
	        } else {
	          ppStatus = 'personal post';
	        }
	      }
	
	      return ppStatus;
	    };
	    s.prop37 = s.getPersonalPostStatus();
	
	    if (typeof wp_published != 'undefined') {
	      s.prop38 = wp_published;
	    }
	
	    if (typeof wp_commercial_node != 'undefined') {
	      s.prop39 = wp_commercial_node;
	    }
	
	    function _getScreenOrientation() {
	      switch (window.orientation) {
	        case 0:
	          return 'portrait';
	        // break;
	
	        case 180:
	          return 'portrait';
	        // break;
	
	        case 90:
	          return 'landscape';
	        // break;
	
	        case -90:
	          return 'landscape';
	        // break;
	
	        default:
	          return undefined;
	      }
	    }
	
	    var _screenOrientation = _getScreenOrientation();
	    if (_screenOrientation) {
	      s.eVar39 = _screenOrientation;
	    } else {
	      s.eVar39 = '';
	    }
	
	    if (typeof wp_content_category != 'undefined') {
	      s.prop40 = wp_content_category;
	    }
	
	    s.prop41 = getUserName();
	
	    if (!!window.wp_site_identity) {
	      s.prop52 = wp_site_identity;
	    } else {
	      if (document.cookie.match(/X-WP-Split=([^;]+)/)) {
	        s.prop52 = 'prodportal-' + RegExp.$1;
	      } else {
	        s.prop52 = 'unknown';
	      }
	    }
	
	    s.prop54 = navigator.userAgent;
	
	    if (document.cookie.match(/wapo_login_id=([^;]+)/)) {
	      s.prop59 = RegExp.$1;
	    } else {
	      s.prop59 = '';
	    }
	
	    var protocol = window.document.location.protocol;
	    s.prop62 = protocol.match(/http/) ? protocol.replace(':', '') : '';
	
	    if (typeof wp_platform != 'undefined') {
	      s.prop70 = wp_platform;
	      s.eVar70 = s.prop70;
	    } else if (!!window.wp_meta_data && !!wp_meta_data.platform) {
	      s.prop70 = wp_meta_data.platform;
	      s.eVar70 = s.prop70;
	    }
	
	    if (!window.wp_pvid) {
	      wp_pvid = Math.round(Math.random() * Math.pow(10, 13)) + '-' + new Date().getTime();
	    }
	    s.prop73 = wp_pvid;
	
	    /* E-commerce Variables */
	    s.campaign = typeof s.campaign == 'undefined' ? '' : s.campaign;
	    s.state = '';
	    s.zip = '';
	    s.events = '';
	    s.products = '';
	    s.purchaseID = '';
	    s.eVar1 = typeof wp_evar1 != 'undefined' ? wp_evar1 : s.pageName;
	    s.eVar2 = typeof wp_evar2 != 'undefined' ? wp_evar2 : s.channel;
	    s.eVar3 = typeof wp_evar3 != 'undefined' ? wp_evar3 : '';
	    s.eVar4 = typeof wp_evar4 != 'undefined' ? wp_evar4 : '';
	    s.eVar5 = typeof wp_evar5 != 'undefined' ? wp_evar5 : '';
	    // eVar6 moved to s_doPlugins
	    s.eVar7 = typeof wp_evar7 != 'undefined' ? wp_evar7 : '';
	    s.eVar8 = typeof wp_evar8 != 'undefined' ? wp_evar8 : s.prop5;
	    s.eVar9 = typeof wp_evar9 != 'undefined' ? wp_evar9 : '';
	    s.eVar10 = typeof wp_evar10 != 'undefined' ? wp_evar10 : '';
	    s.eVar11 = typeof wp_evar11 != 'undefined' ? wp_evar11 : '';
	    s.eVar12 = typeof wp_evar12 != 'undefined' ? wp_evar12 : '';
	    s.eVar13 = typeof wp_evar13 != 'undefined' ? wp_evar13 : '';
	    s.eVar14 = typeof wp_evar14 != 'undefined' ? wp_evar14 : '';
	    s.eVar15 = typeof wp_evar15 != 'undefined' ? wp_evar15 : '';
	    s.eVar16 = typeof wp_evar16 != 'undefined' ? wp_evar16 : '';
	    s.eVar17 = typeof wp_evar17 != 'undefined' ? wp_evar17 : s.prop3;
	    s.eVar18 = typeof wp_evar18 != 'undefined' ? wp_evar18 : '';
	    s.eVar19 = typeof wp_evar19 != 'undefined' ? wp_evar19 : '';
	    s.eVar20 = typeof wp_evar20 != 'undefined' ? wp_evar20 : '';
	    s.eVar21 = typeof wp_evar21 != 'undefined' ? wp_evar21 : '';
	    s.eVar22 = typeof wp_evar22 != 'undefined' ? wp_evar22 : '';
	    s.eVar23 = typeof wp_evar23 != 'undefined' ? wp_evar23 : '';
	    s.eVar24 = typeof wp_evar24 != 'undefined' ? wp_evar24 : '';
	    s.eVar25 = typeof wp_evar25 != 'undefined' ? wp_evar25 : '';
	    s.eVar26 = typeof wp_evar26 != 'undefined' ? wp_evar26 : '';
	    s.eVar27 = typeof wp_evar27 != 'undefined' ? wp_evar27 : '';
	    s.eVar29 = typeof wp_evar29 != 'undefined' ? wp_evar29 : '';
	    s.eVar30 = typeof wp_evar30 != 'undefined' ? wp_evar30 : '';
	    s.eVar31 = typeof wp_evar31 != 'undefined' ? wp_evar31 : '';
	    s.eVar32 = typeof wp_evar32 != 'undefined' ? wp_evar32 : '';
	    s.eVar33 = typeof wp_evar33 != 'undefined' ? wp_evar33 : s.prop33;
	    s.eVar34 = typeof wp_evar34 != 'undefined' ? wp_evar34 : '';
	    s.eVar35 = typeof wp_evar35 != 'undefined' ? wp_evar35 : s.prop35;
	    s.eVar36 = typeof wp_evar36 != 'undefined' ? wp_evar36 : '';
	    s.eVar37 = typeof wp_evar37 != 'undefined' ? wp_evar37 : '';
	    s.eVar38 = typeof wp_evar38 != 'undefined' ? wp_evar38 : '';
	    s.eVar40 = typeof wp_evar40 != 'undefined' ? wp_evar40 : '';
	    s.eVar41 = typeof wp_evar41 != 'undefined' ? wp_evar41 : '';
	    s.eVar42 = typeof wp_evar42 != 'undefined' ? wp_evar42 : '';
	    s.eVar43 = typeof wp_evar43 != 'undefined' ? wp_evar43 : '';
	    s.eVar44 = typeof wp_evar44 != 'undefined' ? wp_evar44 : '';
	    s.eVar45 = typeof wp_evar45 != 'undefined' ? wp_evar45 : '';
	    s.eVar46 = typeof wp_evar46 != 'undefined' ? wp_evar46 : '';
	    s.eVar47 = typeof wp_evar47 != 'undefined' ? wp_evar47 : '';
	    s.eVar48 = typeof wp_evar48 != 'undefined' ? wp_evar48 : '';
	    s.eVar49 = typeof wp_evar49 != 'undefined' ? wp_evar49 : '';
	    s.eVar50 = typeof wp_evar50 != 'undefined' ? wp_evar50 : '';
	    s.eVar51 = typeof wp_evar51 != 'undefined' ? wp_evar51 : '';
	    s.eVar52 = typeof wp_evar52 != 'undefined' ? wp_evar52 : '';
	    s.eVar53 = typeof wp_evar53 != 'undefined' ? wp_evar53 : '';
	    s.eVar54 = typeof wp_evar54 != 'undefined' ? wp_evar54 : s.prop54;
	    s.eVar55 = typeof wp_evar55 != 'undefined' ? wp_evar55 : '';
	    s.eVar56 = typeof wp_evar56 != 'undefined' ? wp_evar56 : '';
	    s.eVar57 = _trackingShared.newsletterHistory.getHistLength() || 'none';
	    s.eVar58 = typeof wp_evar58 != 'undefined' ? wp_evar58 : s.prop58;
	    s.eVar59 = typeof wp_evar59 != 'undefined' ? wp_evar59 : s.prop59;
	    s.eVar60 = s.prop60 = typeof wp_evar60 != 'undefined' ? wp_evar60 : ''; //paywall tracking
	    s.eVar61 = typeof wp_evar61 != 'undefined' ? wp_evar61 : '';
	    s.eVar62 = typeof wp_evar62 != 'undefined' ? wp_evar62 : typeof s.prop41 !== 'undefined' ? 'logged in' : 'logged out'; //paywall tracking
	    s.eVar63 = typeof wp_evar63 != 'undefined' ? wp_evar63 : '';
	    s.eVar64 = typeof wp_evar64 != 'undefined' ? wp_evar64 : ''; //paywall tracking
	
	    var actMgmtCookie = _trackingShared.utils.readCookie('wapo_actmgmt') || '';
	    var subInfo = _trackingShared.utils.getKey(actMgmtCookie, 'omniture');
	    s.eVar65 = s.prop65 = subInfo; // paywall tracking
	    s.eVar66 = s.prop66 = typeof wp_evar66 != 'undefined' ? wp_evar66 : ''; //paywall tracking
	    s.eVar67 = typeof wp_evar67 != 'undefined' ? wp_evar67 : '';
	    s.eVar68 = typeof wp_evar68 != 'undefined' ? wp_evar68 : '';
	    s.eVar69 = typeof wp_evar69 != 'undefined' ? wp_evar69 : '';
	
	    s.eVar72 = defaultSnowflake.incoming;
	    s.eVar73 = defaultSnowflake.outgoing;
	
	    s.eVar75 = typeof wp_evar75 != 'undefined' ? wp_evar75 : '';
	    /* Hierarchy Variables */
	    if (typeof wp_hierarchy != 'undefined') {
	      s.hier1 = wp_hierarchy.toLowerCase();
	    } else {
	      s.hier1 = 'nocategory';
	    }
	
	    var iabc = window.__iabc;
	    var iabcd;
	    try {
	      iabcd = !!localStorage.getItem('__iabcd');
	    } catch (e) {
	      iabcd = false;
	    }
	    var blockStatus = iabc || iabcd ? 'blocked' : 'notblocked';
	    s.prop63 = blockStatus;
	    s.eVar28 = blockStatus;
	
	    // if (!twpOmnitureInitialized) {
	    twpOmnitureInitialized = true;
	    $(window.document).trigger('twpOmnitureInit');
	    // }
	  };
	  /* END: s.initForTwp */
	
	  /* START: Initialize Darwin tracking variables on s object */
	  s.copyDarwinTrackingProps = function () {
	    _dw = global._dw || [];
	    _dw.push(['global', 'init', function (api) {
	      try {
	        var value = api.get('.get_history').toTrackVar();
	        s.prop56 = value;
	        s.list1 = value;
	      } catch (e) {}
	    }]);
	  };
	  /* END: Initialize Darwin tracking variables on s object */
	
	  /* START: Initialize wp_ variables from TWP.Data.Tracking.props, if available */
	  s.copyTrackingPropsToWd = function (props) {
	    if (!!props) {
	      for (p in props) {
	        window["wp_" + p] = props[p];
	      }
	    }
	  };
	  s.copyTWPToWd = function () {
	    if (window.TWP && TWP.Data && TWP.Data.Tracking && TWP.Data.Tracking.props) {
	      s.copyTrackingPropsToWd(TWP.Data.Tracking.props);
	    }
	  };
	  /* END: Initialize wp_ variables from TWP.Data.Tracking.props, if available */
	
	  /* START: s.sendPageViewToOmniture family */
	  s.nullifyOnResend = ['events', 'campaign', 'prop20', 'prop27', 'prop61', 'prop71', 'eVar3', 'eVar13', 'eVar20', 'eVar29', 'eVar71'];
	
	  function applyProps(s, props, nullify) {
	    var oldProps = {};
	
	    props = props || {};
	    props.keepPropsActive = !!props.keepPropsActive;
	
	    var loadTime = global.history && history.state && history.state.loadTime;
	    var domTime = global.history && history.state && history.state.domLoadTime;
	    var defaultEvents = 'event1,event105' + (loadTime ? ',event113=' + loadTime : '') + (domTime ? ',event119=' + domTime : '');
	
	    props.events = s.getUniqueEvents(!!props.events ? props.events + ',' + defaultEvents : defaultEvents);
	
	    if (Object.prototype.toString.call(nullify) === '[object Array]') {
	      nullify = nullify.concat(s.nullifyOnResend);
	    } else {
	      nullify = s.nullifyOnResend;
	    }
	
	    for (var i = 0; i < nullify.length; i++) {
	      s[nullify[i]] = null;
	      window['wp_' + nullify[i].toLowerCase()] = '';
	    }
	
	    // START: wp_pvid/s.prop73 needs a new value for each page view
	    if (!window.wp_pvid) {
	      wp_pvid = Math.round(Math.random() * Math.pow(10, 13)) + '-' + new Date().getTime();
	    } else {
	      wp_pvid = wp_pvid.split('-')[0] + '-' + new Date().getTime();
	    }
	    s.prop73 = wp_pvid;
	    // END: wp_pvid/s.prop73 needs a new value for each page view
	
	    for (p in props) {
	      // Save old props so they can be restored later.
	      if (!props.keepPropsActive) {
	        oldProps[p] = s[p];
	      }
	
	      s[p] = props[p];
	    }
	
	    if (props.keepPropsActive && typeof props.track_scrolling == 'boolean') {
	      wp_track_scrolling = props.track_scrolling;
	    }
	
	    return oldProps;
	  }
	
	  function restoreProps(s, oldProps, nullify) {
	    // Restore s with oldProps
	    if (!oldProps.keepPropsActive) {
	      for (prop in oldProps) {
	        s[prop] = oldProps[prop];
	      }
	    }
	  }
	
	  function sendData(options) {
	    var extractedData = internal.extract(s);
	    if (options.omniture) {
	      logger.log('sendPageView - props:', extractedData);
	      s.t();
	    }
	    if (options.loxodo && extractedData) internal.sendData(extractedData, { mode: 'pv' });
	    if (options.comscore) s.sendPageViewToComscore();
	    if (options.effectiveMeasure) effectiveMeasure.sendPageView();
	  }
	
	  s.sendPageViewToOmniture = function (props, nullify) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var defaults = {
	      omniture: true,
	      loxodo: true,
	      comscore: true,
	      effectiveMeasure: true,
	      usePlugins: true,
	      snowflake: false,
	      reset: false
	    };
	
	    var opts = _extends({}, defaults, options);
	
	    var effect = function effect() {
	      if (opts.reset) {
	        s.copyTWPToWd();
	        s.initForTwp();
	        s.copyDarwinTrackingProps();
	      }
	
	      if (opts.snowflake) {
	        var snowflake = new _snowflake2.default();
	        snowflake.parseState();
	        snowflake.syncState();
	
	        props = _extends({}, props, { eVar72: snowflake.incoming, eVar73: snowflake.outgoing });
	      }
	
	      var oldProps = applyProps(s, props, nullify);
	
	      var oldUsePlugins = s.usePlugins;
	      s.usePlugins = opts.usePlugins;
	
	      sendData(opts);
	      restoreProps(s, oldProps, nullify);
	      s.usePlugins = oldUsePlugins;
	    };
	
	    if (opts.wait) {
	      omnitureState.ready(effect);
	      return;
	    }
	
	    effect();
	  };
	
	  s.getPageViewPropsFromTrackingData = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return {
	      referrer: typeof props.referrer != 'undefined' ? props.referrer : 'http://www.washingtonpost.com',
	      pageName: typeof props.page_name != 'undefined' ? props.page_name : typeof s.pageName != 'undefined' ? s.pageName : '',
	      channel: typeof props.channel != 'undefined' ? props.channel : typeof s.channel != 'undefined' ? s.channel : '',
	      hier1: typeof props.hierarchy != 'undefined' ? props.hierarchy : typeof s.hier1 != 'undefined' ? s.heir1 : '',
	      pageType: typeof props.page_type != 'undefined' ? props.page_type : typeof s.pageType != 'undefined' ? s.pageType : '',
	      prop2: typeof props.channel != 'undefined' ? props.channel : typeof s.prop2 != 'undefined' ? s.prop2 : '',
	      prop3: typeof props.content_type != 'undefined' ? props.content_type : typeof s.prop3 != 'undefined' ? s.prop3 : '',
	      prop4: typeof props.source != 'undefined' ? props.source.toLowerCase() : typeof s.prop4 != 'undefined' ? s.prop4 : '',
	      prop5: typeof props.author != 'undefined' ? props.author : typeof s.prop5 != 'undefined' ? s.prop5 : '',
	      prop12: typeof props.content_id != 'undefined' ? props.content_id : typeof s.prop12 != 'undefined' ? s.prop12 : '',
	      prop13: typeof props.content_id != 'undefined' && typeof props.headline != 'undefined' ? props.content_id + ' - ' + props.headline : typeof s.prop13 != 'undefined' ? s.prop13 : '',
	      prop14: typeof props.page_num != 'undefined' ? props.page_num : typeof s.prop14 != 'undefined' ? s.prop14 : '',
	      prop24: typeof props.story_type != 'undefined' ? props.story_type : typeof s.prop24 != 'undefined' ? s.prop24 : '',
	      prop25: typeof props.blogname != 'undefined' ? props.blogname : typeof s.prop25 != 'undefined' ? s.prop25 : '',
	      prop26: typeof props.columnname != 'undefined' ? props.columnname : typeof s.prop26 != 'undefined' ? s.prop26 : '',
	      prop34: typeof props.news_or_commercial != 'undefined' ? props.news_or_commercial : typeof s.prop34 != 'undefined' ? s.prop34 : '',
	      prop38: typeof props.published != 'undefined' ? props.published : typeof s.prop38 != 'undefined' ? s.prop38 : '',
	      prop39: typeof props.commercial_node != 'undefined' ? props.commercial_node : typeof s.prop39 != 'undefined' ? s.prop39 : '',
	      prop40: typeof props.content_category != 'undefined' ? props.content_category : typeof s.prop40 != 'undefined' ? s.prop40 : '',
	      prop70: typeof props.platform != 'undefined' ? props.platform : typeof s.prop70 != 'undefined' ? s.prop70 : '',
	      track_scrolling: typeof props.track_scrolling == 'boolean' ? props.track_scrolling : typeof wp_track_scrolling == 'boolean' ? wp_track_scrolling : false
	    };
	  };
	
	  s.sendPageViewToOmnitureWithFullReset = function (props, nullify) {
	    return s.sendPageViewToOmniture(props, nullify, { reset: true });
	  };
	
	  s.sendPageViewToComscore = _comscore.sendPageview;
	  /* END: s.sendPageViewToOmniture family */
	
	  function removeNumericEventModifiers(events) {
	    return events.replace(/=\d+(,|$)/g, '$1');
	  }
	
	  /* START: sendDataToOmniture */
	  function _sendDataToOmniture(customLinkName, events, props) {
	    // START: abort if no s_acount or no customLinkName or no events and props
	    if (typeof s_account != "undefined" && customLinkName && (events || props)) {
	      logger.log('sendData -', 'customLinkName:', customLinkName, '| events:', events, '| props:', props);
	      var oldProps = {};
	      var oldLinkTrackVars = s.linkTrackVars;
	      var oldLinkTrackEvents = s.linkTrackEvents;
	      var propPattern = /^(prop|eVar|channel|hier|pageName|pageType|list)/;
	
	      // START: make sure events is a string
	      if (events) {
	        if (typeof events == "string") {} else if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) == "object" && events.join) {
	          events = events.join(',');
	        } else {
	          events = null;
	        }
	      }
	      // END: make sure events is a string
	
	      // START: make sure props is an object
	      if (props) {
	        if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) == "object") {} else {
	          props = null;
	        }
	      }
	      // END: make sure props is an object
	
	      // START: only continue of both props and events haven't been nulled out
	      if (events || props) {
	        // START: set linkTrackVars
	        var linkTrackVars = [];
	
	        if (events) linkTrackVars[linkTrackVars.length] = "events";
	
	        if (props) {
	          for (prop in props) {
	            if (prop.match(propPattern)) linkTrackVars[linkTrackVars.length] = prop;
	          }
	        }
	        // START: set linkTrackVars
	
	        // START: if no linkTrackVars, no point in doing anything
	        if (linkTrackVars.length || !!customLinkName) {
	          s.linkTrackVars = linkTrackVars;
	
	          if (events) s.linkTrackEvents = removeNumericEventModifiers(events);
	
	          for (prop in props) {
	            if (prop.match(propPattern)) {
	              // save old props
	              oldProps[prop] = s[prop];
	              s[prop] = props[prop];
	            }
	          }
	
	          if (events) {
	            oldProps.events = s.events;
	            s.events = events;
	          }
	
	          var oldUsePlugins = s.usePlugins;
	          s.usePlugins = false;
	
	          // The Holy Grail:
	          s.tl(true, 'o', customLinkName);
	
	          s.usePlugins = oldUsePlugins;
	
	          var extractedData = internal.extract(s, { partial: true });
	          if (extractedData) internal.sendData(extractedData, { mode: 'd' });
	
	          // Restore s with oldProps
	          for (prop in oldProps) {
	            if (prop.match(propPattern)) {
	              s[prop] = oldProps[prop];
	            }
	          }
	
	          s.linkTrackVars = oldLinkTrackVars;
	          s.linkTrackEvents = oldLinkTrackEvents;
	        }
	        // END: if no linkTrackVars, no point in doing anything
	      }
	      // END: only continue of both props and events haven't been nulled out
	    }
	    // END: abort if no s_account and no events or props
	  }
	
	  s.sendDataToOmniture = function (customLinkName, events, props, options) {
	
	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	      if (options.wait) {
	        return omnitureState.ready(function () {
	          _sendDataToOmniture(customLinkName, events, props);
	        });
	      }
	    }
	
	    _sendDataToOmniture(customLinkName, events, props);
	  };
	
	  sendDataToOmniture = sendEventToOmniture = sendDataToOmnitureFromEvri = s.sendDataToOmniture;
	  /* END: sendDataToOmniture */
	
	  window.toxicOmnitureCounter = 0;
	
	  function ThreateningStackOverflowException() {
	    this.description = "Threatening Stack Overflow Exception";
	    this.name = "ThreateningStackOverflowException";
	    this.number = "";
	    this.message = this.description;
	  }
	
	  s.isNotIframe = function () {
	    return self === top && !/embedContext=/.test(location.search) || self !== top && !!self.document.referrer.match(/https?:\/\/([^\.]+\.)?(stumbleupon|jungroup|hyprmx|flickr|snip|wapo)\.(com|ly|st)\//) || window.location && /outputType=tracking/.test(location.search) || window.location && /resType=tracking/.test(location.search);
	  };
	  /* END: TWP vars, fns, objs, etc. */
	
	  /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
	
	  var requiresPaywallTracking = function requiresPaywallTracking() {
	    return global.TWP && TWP.Identity && TWP.Identity.paywall && TWP.Identity.paywall.requireTracking;
	  };
	
	  var paywallHasResponded = function paywallHasResponded() {
	    return new Promise(function (resolve) {
	      if (global.TWP && TWP.Identity && TWP.Identity.paywall && TWP.Identity.paywall.pwresp) {
	        resolve();
	      }
	    });
	  };
	
	  var waitForPaywallTracking = function waitForPaywallTracking() {
	    var timer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
	    return Promise.race([_trackingShared.utils.waitForEvent(document, 'onTwpMeterComplete.omniture'), delay(timer), paywallHasResponded()]);
	  };
	
	  function getLoadTime() {
	    var _performance$timing = performance.timing,
	        start = _performance$timing.navigationStart,
	        end = _performance$timing.domInteractive;
	
	    return end - start;
	  }
	
	  function getDomTime() {
	    var _performance$timing2 = performance.timing,
	        start = _performance$timing2.domLoading,
	        end = _performance$timing2.domInteractive;
	
	    return end - start;
	  }
	
	  var docReady = false;
	  $(function () {
	    docReady = true;
	  });
	
	  function trackPerformance(s) {
	    if (docReady) {
	      s.events = combineEvents(wp_events, 'event113=' + getLoadTime(), 'event119=' + getDomTime());
	    } else {
	      var rand = Math.random() * 100;
	      // on desktop, log performance time in separate event 10% of the time
	      if (isDesktop() && rand > 10) {
	        return;
	      }
	
	      // on mobile, always send the fallback event
	      $(function () {
	        var events = combineEvents('event115=' + getLoadTime(), 'event120=' + getDomTime());
	        sendDataToOmniture('load time', events, s);
	      });
	    }
	  }
	
	  function initOmniture() {
	    s.copyDarwinTrackingProps();
	
	    wp_events = !!window.wp_events ? wp_events : '';
	    wp_events = !!window.wp_suppressDefaultEvent ? wp_events : combineEvents(wp_defaultEvents, wp_events);
	
	    if (s.isNotIframe()) {
	      try {
	        trackPerformance(s);
	      } catch (e) {
	        logger.log(e);
	      }
	
	      try {
	        trackApplePay(s);
	      } catch (e) {
	        logger.log(e);
	      }
	
	      s_code = s.t();
	
	      var extractedData = internal.extract(s);
	      if (extractedData) internal.sendData(extractedData, { mode: 'pv' });
	    }
	
	    omnitureState.setReady();
	  }
	
	  // initialize lots of variables
	  s.copyTWPToWd();
	  s.initForTwp();
	
	  var init = function init() {
	    return setTimeout(initOmniture, 0);
	  };
	
	  if ((typeof _suppressTrackPageLoad == 'undefined' || !_suppressTrackPageLoad) && !config.suppressTrackPageLoad) {
	    if (requiresPaywallTracking()) {
	      waitForPaywallTracking().then(init);
	    } else {
	      init();
	    }
	  } else {
	    omnitureState.setReady();
	  }
	  /* End SiteCatalyst code version: H.24.2 */
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.track = exports.state = exports.init = undefined;
	
	var _init = __webpack_require__(18);
	
	var _init2 = _interopRequireDefault(_init);
	
	var _state = __webpack_require__(8);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _tracker = __webpack_require__(20);
	
	var _tracker2 = _interopRequireDefault(_tracker);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.init = _init2.default;
	exports.state = _state2.default;
	exports.track = _tracker2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global TWP, s_account, s */
	var loadOmniture = __webpack_require__(16);
	
	var $ = global.jQuery || global.Zepto;
	
	module.exports = function initOmniture(config) {
	  var includeOmniture = true;
	  switch (TWP.Analytics.config.suite) {
	    case 'preproduction':
	      // NOTE: For now, not using mobile suite.
	      // window.s_account=(TWP.Analytics.isMobile())?"wpniwpmobileprodpp":"wpniwashpostcomEidospp";
	      window.s_account = 'wpniwashpostcomEidospp';
	      break;
	    case 'production':
	      // NOTE: For now, not using mobile suite.
	      // window.s_account=(TWP.Analytics.isMobile())?"wpniwpmobileprod":"wpniwashpostcom";
	      window.s_account = 'wpniwashpostcom';
	      break;
	    default:
	      includeOmniture = false;
	  }
	
	  if (includeOmniture) {
	    loadOmniture(TWP.Analytics.config);
	
	    TWP.Analytics.report.omniture.on = true;
	    TWP.Analytics.report.omniture.loaded = true;
	    TWP.Analytics.report.omniture.suite = s_account;
	    TWP.Analytics.report.omniture.testCode = !!TWP.Analytics.config.service.omnitureTest;
	    $(document).trigger('TWP.Analytics.omnitureLoaded');
	
	    if (!!window.s) {
	      TWP.Analytics.uploadData = s.sendDataToOmniture;
	      TWP.Analytics.triggerPageView = s.sendPageViewToOmniture;
	      TWP.Analytics.triggerFullPageView = s.sendPageViewToOmnitureWithFullReset;
	      try {
	        var trackScrolling = global.TWP.Analytics.config.trackScrolling;
	        if (trackScrolling) {
	          TWP.Analytics.trackScrolling(trackScrolling);
	        }
	      } catch (e) {
	        // do nothing
	      }
	    }
	  } // if(includeOmniture)
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _trackingShared = __webpack_require__(1);
	
	module.exports = new _trackingShared.utils.Log({
	  namespace: "OMNITURE",
	  fmtOptions: {
	    "color": "#2980b9",
	    "font-weight": "bold",
	    "text-decoration": "underline"
	  },
	  shouldLog: _trackingShared.utils.shouldLog
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.schema = undefined;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	}; /* eslint-disable camelcase */
	
	var _trackingShared = __webpack_require__(1);
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var createTracker = _trackingShared.tracker.createTracker,
	    schemafy = _trackingShared.tracker.schemafy;
	var PAGE_VIEW = _trackingShared.constants.PAGE_VIEW;
	var schema = exports.schema = {
	  events: 'events',
	  referrer: 'referrer',
	  pageName: 'page_name',
	  channel: 'section',
	  hier1: 'hierarchy',
	  pageType: 'page_type',
	  eVar1: 'page_name',
	  prop2: 'subsection', // NOTE: should possibly be mapped to section
	  eVar2: 'section',
	  prop3: 'content_type',
	  prop4: 'source',
	  prop5: 'author',
	  eVar8: 'author',
	  eVar11: 'blogname',
	  prop12: 'content_id',
	  prop14: 'page_num',
	  prop16: 'op_ranking',
	  eVar17: 'content_type',
	  prop23: 'hierarchy',
	  prop24: 'story_type',
	  prop25: 'blogname',
	  prop26: 'columnname',
	  prop34: 'news_or_commercial',
	  prop38: 'published',
	  prop39: 'commercial_node',
	  prop40: 'content_category',
	  prop56: 'tests',
	  prop58: 'site',
	  eVar58: 'site',
	  prop70: 'platform',
	  eVar70: 'platform',
	  list1: 'tests'
	};
	
	var defaults = {
	  site: 'www.washingtonpost.com',
	  news_or_commercial: 'News'
	};
	
	function setDefinedKey(object, key, val) {
	  if (key) object[key] = val; // eslint-disable-line
	}
	
	function makeDynamicProps(_ref) {
	  var headline = _ref.headline,
	      content_id = _ref.content_id;
	
	  var dynamic = {};
	
	  if (headline && content_id) {
	    setDefinedKey(dynamic, 'prop13', headline + ' - ' + content_id);
	  }
	
	  return dynamic;
	}
	
	function trackFunc() {
	  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var type = options.type,
	      nullify = options.nullify;
	
	  var transformed = schemafy(_extends({}, defaults, data), schema, options);
	  var dynamic = makeDynamicProps(data, options);
	  var outgoing = _extends({}, transformed, dynamic);
	
	  if (type === PAGE_VIEW) {
	    return global.s.sendPageViewToOmniture(outgoing, nullify, options);
	  }
	
	  var friendlyName = 'Default link track name';
	
	  var events = outgoing.events,
	      props = _objectWithoutProperties(outgoing, ['events']);
	
	  return global.sendDataToOmniture(friendlyName, events || '', props, options);
	}
	
	exports.default = createTracker(trackFunc, { strict: false });
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var $ = global.jQuery || global.Zepto;
	
	module.exports = {
		check: checkAds
	};
	
	function checkAds(timeout) {
	
		var adIds = {
			desktop: ['#slug_leaderboard', '#slug_flex_ss_bb_hp', '#slug_leaderboard_bottom', '#slug_inline_bb'],
			mobile: ['#slug_fixedBottom', '#slug_mob_bigbox']
		};
	
		var deferred = $.Deferred();
		var blockerDetected = false;
		var adElements = [];
	
		setTimeout(function () {
	
			var ids = _utils2.default.isMobile() ? adIds.mobile : adIds.desktop;
	
			for (var i = 0; i < ids.length; i++) {
				var adId = ids[i];
				var adElem = $(adId);
				if (adElem[0]) adElements.push(adElem);
			}
	
			if (!adElements.length > 0) {
				blockerDetected = true;
			}
	
			for (var i = 0; i < adElements.length; i++) {
				(function ($element) {
	
					var element = $element[0];
					var iframeChild = $element.children('iframe');
					var elemId = $element.attr('id');
					var elemHeight = $element.height();
					var elemWidth = $element.width();
	
					if (!elemHeight > 0 || !elemWidth > 0) {
						blockerDetected = true;
					}
	
					if (window.getComputedStyle !== undefined) {
	
						var baitTemp = window.getComputedStyle(element, null);
						if (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden') {
							blockerDetected = true;
						}
					}
				})(adElements[i]);
			}
	
			deferred.resolve(blockerDetected);
		}, timeout);
	
		return deferred.promise();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PAGE_VIEW = exports.PAGE_VIEW = 'PAGE_VIEW';
	var EVENT = exports.EVENT = 'EVENT';

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var $ = global.jQuery || global.Zepto;
	
	// Objects instantiated by ElementTracker execute a configurable callback
	// that runs when a scrolling pageview should fire.
	module.exports = function () {
	
	  var $w = $(window);
	
	  // returns true if any part of the element is in viewport
	  function isElementInViewport(el) {
	    if (typeof $ === "function" && el instanceof $) el = el[0];
	    var rect = el.getBoundingClientRect();
	    return rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
	  }
	
	  function ElementTracker(config) {
	
	    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') throw new Error('ElementTracker: first argument must be a configuration object');
	    if (!('element' in config)) throw new Error('ElementTracker: configuration object must have "element" property');
	
	    var _elem = $(config.element);
	    var _container = 'container' in config ? $(config.container) : $(window);
	    var _lastPosition = null;
	    var _lastPageNum = null;
	    var _lastPage = null;
	    var _cb = null;
	
	    this.getElem = function () {
	      return _elem;
	    };
	    this.getContainer = function () {
	      return _container;
	    };
	    this.getLastPosition = function () {
	      return _lastPosition;
	    };
	    this.getLastPageNum = function () {
	      return _lastPageNum;
	    };
	    this.getLastPage = function () {
	      return _lastPage;
	    };
	    this.getCb = function () {
	      return _cb;
	    };
	    this.setCb = function (cb) {
	      if (_checkViewport) {
	        _cb = _utils2.default.debounce(function () {
	          if (isElementInViewport(_elem)) {
	            var pos = _currentPosition();
	            var pg = _currentPage();
	            if (_checkPosition(pos, pg)) {
	              if (typeof cb === 'function') cb();
	            }
	          }
	        }, 500);
	      } else {
	        _cb = _utils2.default.debounce(function () {
	          var pos = _currentPosition();
	          var pg = _currentPage();
	          if (_checkPosition(pos, pg)) {
	            if (typeof cb === 'function') cb();
	          }
	        }, 500);
	      }
	    };
	
	    var _checkViewport = 'checkViewport' in config ? config.checkViewport : false;
	    var _containerOffsetTop = _container.offset() ? _container.offset().top : 0;
	    var _offsetTop = _elem.offset().top - _containerOffsetTop;
	
	    function _currentPage() {
	      return Math.floor(Math.abs(_currentPosition() - _offsetTop) / _pageHeight()) + 1;
	    }
	    function _checkPosition(pos, pg) {
	      if (pos == _currentPosition() && pg != _lastPage && Math.abs((_lastPosition || _offsetTop) - pos) >= _pageHeight()) {
	        _lastPosition = pos;
	        _lastPage = pg;
	        _lastPageNum = 'page_' + pg;
	        return true;
	      }
	    }
	    function _screenFactor() {
	      return TWP.Analytics.isMobile() ? 4 : 2;
	    }
	    function _pageHeight() {
	      return $w.height() * _screenFactor();
	    }
	    function _currentPosition() {
	      return _container.scrollTop();
	    }
	  }
	
	  ElementTracker.prototype.onPageView = function (cb) {
	    if (!cb || typeof cb !== 'function') throw new Error('ElementTracker: onPageView expects a function');
	    this.setCb(cb);
	    return this;
	  };
	
	  ElementTracker.prototype.startTracking = function () {
	    var cb = this.getCb();
	    if (!cb) throw new Error('ElementTracker: must configure an onPageView callback before calling startTracking');
	    this.getContainer().on('scroll', cb);
	    return this;
	  };
	
	  ElementTracker.prototype.stopTracking = function () {
	    var cb = this.getCb();
	    if (!cb) throw new Error('ElementTracker: must configure an onPageView callback before calling stopTracking');
	    this.getContainer().off('scroll', cb);
	    return this;
	  };
	
	  ElementTracker.prototype.runCallback = function () {
	    var cb = this.getCb();
	    cb();
	    return this;
	  };
	
	  return ElementTracker;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedDevice = supportedDevice;
	exports.canMakePayments = canMakePayments;
	exports.canMakePaymentsWithActiveCard = canMakePaymentsWithActiveCard;
	function supportedDevice() {
	  return location.protocol === 'https:' && 'ApplePaySession' in global;
	}
	
	function canMakePayments() {
	  try {
	    return ApplePaySession.canMakePayments();
	  } catch (e) {
	    return false;
	  }
	}
	
	function canMakePaymentsWithActiveCard() {
	  var merchantID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'merchant.com.washingtonpost';
	
	  try {
	    return ApplePaySession.canMakePaymentsWithActiveCard(merchantID);
	  } catch (e) {
	    return Promise.resolve(false);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isInternational = isInternational;
	function isInternational() {
	  var geo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGeoCookie();
	
	  // if geo unidentifiable, always return true
	  if (!geo) {
	    return true;
	  }
	
	  return !/20:usa/.test(geo);
	}
	
	function getGeoCookie() {
	  return document.cookie.match(/rpld1=([^;]+)/) ? RegExp.$1 : '';
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadScript;
	
	var _scriptjs = __webpack_require__(52);
	
	var _scriptjs2 = _interopRequireDefault(_scriptjs);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function loadScript(url, cb) {
	  (0, _scriptjs2.default)(url, function () {
	    return cb();
	  });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var LOCAL_STORAGE_KEY = 'newsletter_history';
	var NEWSLETTER_PARAM = 'wpisrc';
	
	function init() {
	  var newsletter = _utils2.default.getQueryParam(NEWSLETTER_PARAM);
	  var hist;
	  if (newsletter) {
	    hist = getHist();
	    hist[newsletter] = new Date().toUTCString();
	    setHist(hist);
	  }
	}
	
	function getHist() {
	  try {
	    return parseHist(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
	  } catch (e) {
	    return {};
	  }
	}
	
	function setHist(hist) {
	  try {
	    window.localStorage.setItem(LOCAL_STORAGE_KEY, stringifyHistory(hist));
	  } catch (e) {}
	}
	
	function parseHist(hist) {
	  try {
	    return JSON.parse(hist);
	  } catch (e) {
	    return {};
	  }
	}
	
	function stringifyHistory(hist) {
	  try {
	    return JSON.stringify(hist);
	  } catch (e) {
	    return "";
	  }
	}
	
	function getHistLength() {
	  try {
	    return Object.keys(getHist()).length;
	  } catch (e) {
	    return 0;
	  }
	}
	
	exports.init = init;
	exports.getHist = getHist;
	exports.getHistLength = getHistLength;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// adapted from https://github.com/sindresorhus/query-string
	'use strict';
	
	var strictUriEncode = __webpack_require__(53);
	var objectAssign = __webpack_require__(48);
	
	function encode(value, opts) {
	  if (opts.encode) {
	    return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	  }
	
	  return value;
	}
	
	exports.extract = function (str) {
	  return str.split('?')[1] || '';
	};
	
	exports.parse = function (str, opts) {
	  var defaults = {
	    decode: true
	  };
	
	  opts = objectAssign(defaults, opts);
	
	  // Create an object with no prototype
	  // https://github.com/sindresorhus/query-string/issues/47
	  var ret = Object.create(null);
	
	  if (typeof str !== 'string') {
	    return ret;
	  }
	
	  str = str.trim().replace(/^(\?|#|&)/, '');
	
	  if (!str) {
	    return ret;
	  }
	
	  str.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    // Firefox (pre 40) decodes `%3D` to `=`
	    // https://github.com/sindresorhus/query-string/pull/37
	    var key = parts.shift();
	    var val = parts.length > 0 ? parts.join('=') : undefined;
	
	    // missing `=` should be `null`:
	    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
	    val = val === undefined ? null : val;
	
	    if (opts.decode) {
	      key = decodeURIComponent(key);
	      val = val === null ? null : decodeURIComponent(val);
	    }
	
	    if (ret[key] === undefined) {
	      ret[key] = val;
	    } else if (Array.isArray(ret[key])) {
	      ret[key].push(val);
	    } else {
	      ret[key] = [ret[key], val];
	    }
	  });
	
	  return ret;
	};
	
	exports.stringify = function (obj, opts) {
	  var defaults = {
	    encode: true,
	    strict: true
	  };
	
	  opts = objectAssign(defaults, opts);
	
	  return obj ? Object.keys(obj).sort().map(function (key) {
	    var val = obj[key];
	
	    if (val === undefined) {
	      return '';
	    }
	
	    if (val === null) {
	      return key;
	    }
	
	    if (Array.isArray(val)) {
	      var result = [];
	
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return;
	        }
	
	        if (val2 === null) {
	          result.push(encode(key, opts));
	        } else {
	          result.push(encode(key, opts) + '=' + encode(val2, opts));
	        }
	      });
	
	      return result.join('&');
	    }
	
	    return encode(key, opts) + '=' + encode(val, opts);
	  }).filter(function (x) {
	    return x.length > 0;
	  }).join('&') : '';
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var $ = global.jQuery || global.Zepto;
	
	module.exports = {
	  track: trackScrollDepth,
	  get: getScrollDepth
	};
	
	var $w = $(window);
	var wHeight = $w.height();
	
	function getScrollDepth(previousPageName) {
	  return previousPageName === _utils2.default.readValue('wp_s_d_pp') ? _utils2.default.readValue('wp_s_d') : null;
	}
	
	function trackScrollDepth(scrollingElement) {
	
	  var $scrollingElement = $(scrollingElement);
	  var scrollableHeight = (scrollingElement === window.document ? $scrollingElement.height() : $scrollingElement.prop('scrollHeight')) - wHeight;
	
	  _utils2.default.persistValue('wp_s_d_pp', wp_page_name);
	
	  $scrollingElement.on('scroll', _utils2.default.debounce(function () {
	
	    var percentageScrolled = $scrollingElement.scrollTop() / scrollableHeight * 100;
	    _utils2.default.persistValue('wp_s_d', percentageScrolled);
	
	    if (_utils2.default.shouldLog) console.log('percent scrolled:', getScrollDepth(wp_page_name));
	  }, 500));
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var $ = global.jQuery || global.Zepto;
	
	module.exports = function () {
	
	  var persistenceKey = "b_sig";
	  var sessionHistoryTimeLimit = 30;
	  var thirtyMinutes = 1000 * 60 * 30;
	
	  // localStorage
	  var localData = {
	    sessions: [],
	    sessionTimes: {}
	  };
	  var initialLocalData = {};
	  initialLocalData = _extends({}, initialLocalData, localData);
	
	  // sessionStorage
	  var sessionData = {
	    referralDomain: null,
	    pagesSeeninSession: 0,
	    recordedSessionCount: false,
	    updatedAt: new Date()
	  };
	  var initialSessionData = {};
	  initialSessionData = _extends({}, initialSessionData, sessionData);
	
	  function readPersistentData() {
	    sessionData = JSON.parse(sessionStorage.getItem(persistenceKey));
	    localData = JSON.parse(localStorage.getItem(persistenceKey));
	    if (sessionData === null || (typeof sessionData === "undefined" ? "undefined" : _typeof(sessionData)) !== "object" || new Date() - sessionData.updatedAt > thirtyMinutes) {
	      sessionData = {};
	      sessionData = _extends({}, sessionData, initialSessionData);
	    }
	    if (localData === null || (typeof localData === "undefined" ? "undefined" : _typeof(localData)) !== "object") {
	      localData = {};
	      localData = _extends({}, localData, initialLocalData);
	    }
	    rewritePersistentData();
	  }
	
	  function initBeforeUnload() {
	    if (typeof window.onbeforeunload !== "undefined") {
	      var date = new Date();
	
	      // calculates the length of the PV and persists the data
	      var handler = function beforeUnloadHandler() {
	        var sessionDuration = Math.round((new Date() - date) / 1000); // unit: seconds
	        localData.sessionTimes[currentDate()] = (localData.sessionTimes[currentDate()] || 0) + sessionDuration;
	        persistData();
	      };
	      $(window).on("beforeunload", handler);
	    }
	  }
	
	  function setReferrer() {
	    sessionData.referralDomain = sessionData.referralDomain || document.referrer;
	  }
	
	  function rejectExpiredSessions() {
	    var expireDate = currentDate() - sessionHistoryTimeLimit;
	
	    var newSessionTimes = {};
	    for (var sessionDate in localData.sessionTimes) {
	      if (localData.sessionTimes.hasOwnProperty(sessionDate) && sessionDate > expireDate) {
	        newSessionTimes[sessionDate] = localData.sessionTimes[sessionDate];
	      }
	    }
	    localData.sessionTimes = newSessionTimes;
	
	    var newSessions = [];
	    for (sessionDate in localData.sessions) {
	      (function (sessionDate) {
	        var sesDate = localData.sessions[sessionDate];
	        if (sesDate > expireDate) newSessions.push(sesDate);
	      })(sessionDate);
	    }
	    localData.sessions = newSessions;
	  }
	
	  function incrementPagesSeen() {
	    sessionData.pagesSeeninSession++;
	  }
	
	  function recordCurrentSession() {
	    if (!sessionData.recordedSessionCount) {
	      localData.sessions.push(currentDate());
	      sessionData.recordedSessionCount = true;
	    }
	  }
	
	  function persistData() {
	    sessionData.updatedAt = new Date();
	    sessionStorage.setItem(persistenceKey, JSON.stringify(sessionData));
	    localStorage.setItem(persistenceKey, JSON.stringify(localData));
	  }
	
	  function currentDate() {
	    var msSince2015 = new Date() - new Date(2015, 0, 0);
	    var dayInMs = 1000 * 60 * 60 * 24;
	    return Math.ceil(msSince2015 / dayInMs);
	  }
	
	  function sessions() {
	    return localData.sessions.length;
	  }
	
	  function avgSessionTime() {
	    var sessionsAmt = localData.sessions.length;
	    if (sessionsAmt < 1) {
	      return 0;
	    }
	
	    var expireDate = currentDate() - sessionHistoryTimeLimit;
	    var totalSessionTime = 0;
	
	    for (var sessionDate in localData.sessionTimes) {
	      if (!localData.sessionTimes.hasOwnProperty(sessionDate) && sessionDate > expireDate) {
	        continue;
	      }
	
	      totalSessionTime += localData.sessionTimes[sessionDate];
	    }
	    return Math.ceil(totalSessionTime / sessionsAmt);
	  }
	
	  function rewritePersistentData() {
	    for (var prop in initialLocalData) {
	      localData[prop] = localData[prop] || initialLocalData[prop];
	    }
	    for (prop in initialSessionData) {
	      sessionData[prop] = sessionData[prop] || initialSessionData[prop];
	    }
	  }
	
	  function results() {
	    return {
	      loyalty_bsg: sessions(),
	      avgsestime_bsg: avgSessionTime(),
	      firstimp_bsg: sessionData.pagesSeeninSession,
	      referral_bsg: sessionData.referralDomain
	    };
	  }
	
	  function createScript() {
	    var queryParams = [];
	    var _results = results();
	    for (var result in _results) {
	      queryParams.push(encodeURIComponent(result) + "=" + encodeURIComponent(_results[result]));
	    }
	
	    var scriptPath;
	    if (_utils2.default.hasJSON && _utils2.default.hasStorage) {
	      scriptPath = "https://z.moatads.com/washpost421KqtH31/moatcontent.js?" + queryParams.join("&");
	    } else {
	      scriptPath = "https://z.moatads.com/washpost421KqtH31/moatcontent.js";
	    }
	
	    var _moatRequest = _utils2.default.loadScript(scriptPath);
	    if (!!_moatRequest) {
	      window._moatState = _moatRequest;
	    }
	  }
	
	  return {
	    init: function init() {
	      if (_utils2.default.hasJSON && _utils2.default.hasStorage) {
	        readPersistentData();
	        initBeforeUnload();
	        setReferrer();
	        rejectExpiredSessions();
	        recordCurrentSession();
	        incrementPagesSeen();
	        persistData();
	      }
	      createScript();
	    },
	    results: results
	  };
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _utils = __webpack_require__(2);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var $ = global.jQuery || global.Zepto;
	
	var $doc = $(window.document);
	
	module.exports = StateStore;
	
	function StateStore(config) {
	  'use strict';
	
	  config = config || {};
	
	  if ('service' in config) this.service = config.service;
	  if ('eventName' in config) this.eventName = config.eventName;
	  this.timeout = 'timeout' in config ? config.timeout : 5000;
	
	  this.readyState = false;
	}
	
	StateStore.prototype.ready = function (cb) {
	  var timeout;
	
	  if (this.readyState) {
	    if (_utils2.default.shouldLog) console.log(this.service + ' - ready(immediate)');
	    return cb();
	  } else {
	    var readyHandler = function readyHandler(e) {
	      clearTimeout(timeout);
	      _self.readyState = true;
	      if (_utils2.default.shouldLog) console.log(_self.service + ' - ready(event)');
	      return cb();
	    };
	
	    if (_utils2.default.shouldLog) console.log(this.service + ' - waiting for ' + this.eventName);
	    var _self = this;
	
	    $doc.one(_self.eventName, readyHandler);
	
	    timeout = setTimeout(function () {
	      $doc.off(_self.eventName, readyHandler);
	      if (_utils2.default.shouldLog) console.log(_self.service + ' - timeout');
	      return readyHandler();
	    }, _self.timeout);
	  }
	};
	
	StateStore.prototype.setReady = function () {
	  this.readyState = true;
	  $(window.document).trigger(this.eventName);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var $ = global.jQuery || global.Zepto;
	
	module.exports = function (config) {
	  config = config || {};
	
	  var $w = $(window);
	  function _screenFactor() {
	    return TWP.Analytics.isMobile() ? 4 : 2;
	  }
	  function _pageHeight() {
	    return $w.height() * _screenFactor();
	  }
	  function _currentPosition() {
	    return $w.scrollTop();
	  }
	  function _currentPage() {
	    return Math.floor(_currentPosition() / _pageHeight()) + 1;
	  }
	
	  TWP.Analytics.scrollingConfig = {
	    lastPosition: _currentPosition(),
	    lastPage: _currentPage()
	  };
	
	  function _checkPosition(pos, pg, ts) {
	    if (pos == _currentPosition() && pg != TWP.Analytics.scrollingConfig.lastPage && Math.abs(TWP.Analytics.scrollingConfig.lastPosition - pos) >= _pageHeight()) {
	      TWP.Analytics.scrollingConfig.lastPosition = pos;
	      TWP.Analytics.scrollingConfig.lastPage = pg;
	      // NOTE: START Global variable
	      wp_page_num = "page_" + pg;
	      // NOTE: END Global variable
	      var nullify = null;
	      if (!!ts) {
	        TWP.Analytics.triggerPageView({
	          prop14: wp_page_num
	        }, nullify, config);
	      }
	    }
	  }
	
	  $w.on('scroll', function () {
	    var pos = _currentPosition();
	    var pg = _currentPage();
	    // closure voodoo here
	    setTimeout(function (arg1, arg2, arg3) {
	      return function () {
	        _checkPosition(arg1, arg2, arg3);
	      };
	    }(pos, pg, window.wp_track_scrolling), 500);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.schemafy = schemafy;
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	// trackFunc receives the incoming data object as its first parameter and an options
	// object as its second param. When creating a trackFunc, you can optionally
	// use the schemafy function to transform the raw data into a structure required
	// by a tracking service's API.
	//
	// TrackFunc params: data (object), options (object)
	// Options can be passed at creation and when tracker is invoked. The options that
	// tracker is invoked with will be merged with any options supplied at creation time.
	var createTracker = exports.createTracker = function createTracker(trackFunc) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function (data) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return trackFunc(data, _extends({}, opts, options));
	  };
	};
	
	function dropKeys(object, keys) {
	  var obj = _extends({}, object);
	  keys.forEach(function (key) {
	    delete obj[key];
	  });
	  return obj;
	}
	
	// schemafy takes an object representing raw data as its first param, an
	// object representing the schema as its second param, and an options object as its
	// third param.
	//
	// The schema object looks like this: `{ prop3: 'section' }`.
	// schemafy will iterate through the schema and attempt to add a new key-value
	// pair to the transformed data object for each key on the schema. It will only
	// do so if the data object has a key corresponding to a value in the schema.
	//  In the example schema above, if the `section` key is defined on the incoming
	//  data object, schemafy will output `{ prop3: '<SECTION_VALUE>' }`.
	//
	// If opts strict is disabled (enabled by default), the keys defined in the schema
	// will be pulled off of the data object and the rest of the keys will be merged
	// as is.
	function schemafy() {
	  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$strict = _ref.strict,
	      strict = _ref$strict === undefined ? true : _ref$strict;
	
	  var data = _extends({}, d);
	
	  // map schema keys
	  var remove = [];
	  var result = Object.keys(schema).reduce(function (acc, schemaKey) {
	    var dataKey = schema[schemaKey];
	    var val = data[dataKey];
	
	    // only add key to output if val is defined
	    if (val) {
	      acc[schemaKey] = val; // eslint-disable-line no-param-reassign
	      if (!strict) remove = [].concat(_toConsumableArray(remove), [dataKey]);
	    }
	
	    return acc;
	  }, {});
	
	  if (!strict) {
	    // remove schema keys from data object
	    data = dropKeys(data, remove);
	    // add remaining unmapped data keys to result
	    result = _extends({}, result, data);
	  }
	
	  return result;
	}
	
	var combineTrackers = exports.combineTrackers = function combineTrackers() {
	  for (var _len = arguments.length, trackers = Array(_len), _key = 0; _key < _len; _key++) {
	    trackers[_key] = arguments[_key];
	  }
	
	  return function (d) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return trackers.forEach(function (tracker) {
	      return tracker(d, options);
	    });
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getWPGlobalConfig = getWPGlobalConfig;
	exports.getConfig = getConfig;
	var keyBlacklist = ['wp_pb', 'wp_import'];
	
	function getWPGlobalConfig() {
	  var config = {};
	  var re = /^wp_/;
	  for (var key in window) {
	    if (re.test(key) && keyBlacklist.indexOf(key) < 0) {
	      config[key.replace('wp_', '')] = window[key];
	    }
	  }
	
	  return config;
	}
	
	function getConfig(config) {
	  return config || getWPGlobalConfig();
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSubscriber = exports.isLoggedIn = undefined;
	
	var _jsCookie = __webpack_require__(51);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var isLoggedIn = exports.isLoggedIn = function isLoggedIn() {
	  return !!_jsCookie2.default.get('wapo_secure_login_id');
	};
	var isSubscriber = exports.isSubscriber = function isSubscriber() {
	  return _jsCookie2.default.get('rplsb') === '1';
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;
	exports.read = read;
	exports.remove = remove;
	exports.getKey = getKey;
	function create(name, value, days) {
	  var expires;
	  if (days) {
	    var date = new Date();
	    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	    expires = '; expires=' + date.toGMTString();
	  } else expires = '';
	  document.cookie = name + '=' + value + expires + '; path=/';
	}
	
	function read(name) {
	  var nameEQ = name + '=';
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1, c.length);
	    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	  }
	
	  return null;
	}
	
	function remove(name) {
	  create(name, '', -1);
	}
	
	function getKey(unserialized, key) {
	  var valueDelimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '|';
	  var keyDelimiter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ':';
	
	  var result = null;
	  if (!unserialized || unserialized.indexOf(valueDelimiter) < 0) {
	    // invalid delimiter
	    return result;
	  }
	  var kvPairs = unserialized.split(valueDelimiter) || [];
	
	  kvPairs.forEach(function (value) {
	    if (value.indexOf(key) >= 0 && value.indexOf(keyDelimiter) >= 0) {
	      result = value.split(keyDelimiter)[1];
	    }
	  });
	  return result;
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function debounce(func, wait, immediate) {
	  var timeout;
	
	  return function () {
	    var context = this;
	    var args = arguments;
	
	    var later = function later() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	
	    var callNow = immediate && !timeout;
	
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $ = global.jQuery || global.Zepto;
	
	var waitForEvent = exports.waitForEvent = function waitForEvent(element, event) {
	  return new Promise(function (resolve) {
	    return $(element).one(event, resolve);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function isExternalEmbed() {
	  var isEmbed = window.self !== window.top;
	  var isExternal;
	  try {
	    isExternal = !/washingtonpost\.com/.test(window.top.location.hostname);
	  } catch (e) {
	    isExternal = true;
	  }
	
	  return isEmbed && isExternal;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getQueryParam;
	function getQueryParam(name) {
	  var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : global.location.search;
	
	  var n = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	  var regex = new RegExp('[\\?&]' + n + '=([^&#]*)');
	  var results = regex.exec(search);
	  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceSearch = replaceSearch;
	var history = global.history;
	
	function replaceSearch() {
	  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  // prefix with '?' when non-empty and '?' prefix isn't already there
	  var newSearch = search !== '' && search[0] !== '?' ? '?' + search : search;
	
	  var _global$location = global.location,
	      pathname = _global$location.pathname,
	      hash = _global$location.hash;
	
	  // don't override existing history state
	
	  var state = history && history.state || {};
	
	  var newpath = pathname + newSearch + hash;
	  if (history && typeof history.replaceState === 'function') {
	    history.replaceState(state, document.title, newpath);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var $ = global.jQuery || global.Zepto;
	
	module.exports = loadScript;
	
	function isIE() {
	  var navigatorString = navigator.userAgent.toLowerCase();
	  return navigatorString.indexOf('msie') != -1 ? parseInt(navigatorString.split('msie')[1]) : false;
	}
	
	function loadScript(path) {
	  var _deferred = new $.Deferred();
	
	  var a = document,
	      b = a.createElement('script'),
	      a = a.getElementsByTagName('script')[0];
	
	  b.type = 'text/javascript';
	  b.async = !0;
	  b.src = path;
	
	  b.onload = function () {
	    _deferred.resolve(path + ' loaded');
	  };
	  b.onerror = function () {
	    _deferred.reject(path + ' error');
	  };
	
	  a.parentNode.insertBefore(b, a);
	
	  var ieVersion = isIE();
	  if (ieVersion && ieVersion < 9) {
	    return null;
	  }
	
	  return _deferred.promise();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _slice = Array.prototype.slice;
	
	function Log(config) {
	  config = config || {};
	  this.shouldLog = config.shouldLog || false;
	  this.namespace = config.namespace || '';
	  this.lineNums = config.lineNums || false;
	
	  var fmtOpts = config.fmtOptions;
	  var fmt = '';
	  if ((typeof fmtOpts === 'undefined' ? 'undefined' : _typeof(fmtOpts)) == 'object') {
	    for (var option in fmtOpts) {
	      fmt += option + ':' + fmtOpts[option] + ';';
	    }
	  } else if (typeof fmtOpts === 'string') {
	    fmt = fmtOpts;
	  }
	
	  this.fmt = fmt;
	}
	
	Log.prototype.format = function () {
	  // config
	  // var msgSeparator        = ' ';
	  var lineSparator = '\n';
	
	  // get caller line number
	  var lineNum = getLineNumber();
	
	  var namespace = '%c#' + this.namespace + '%c';
	  var msgInfo = lineNum;
	  var msg = _slice.call(arguments, 0);
	
	  // tokens for string formatting of metadata and msg
	  var infoToken = getTokenForType(msgInfo);
	  var msgTokens = msg.map(function (msgString) {
	    return getTokenForType(msgString);
	  }).join(' ');
	  var fullTokens = [namespace].concat(msgTokens);
	
	  if (this.lineNums) {
	    fullTokens = fullTokens.concat(infoToken);
	  }
	
	  var styles = [this.fmt, '']; // second index is empty string to remove styles from msg
	  var output = [fullTokens.join(lineSparator)].concat(styles, msg);
	
	  if (this.lineNums) {
	    output = output.concat(msgInfo);
	  }
	
	  return output;
	};
	
	Log.prototype.log = function log() {
	  var args = _slice.call(arguments, 0);
	  if (this.shouldLog) return console.log.apply(console, this.format.apply(this, args));
	};
	
	Log.prototype.error = function error() {
	  var args = _slice.call(arguments, 0);
	  if (this.shouldLog) return console.error.apply(console, this.format.apply(this, args));
	};
	
	function getTokenForType(data) {
	  var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);
	  switch (type) {
	    case 'string':
	      return '%s';
	    case 'number':
	      return '%f';
	    case 'object':
	      return '%O';
	  }
	}
	
	function getLineNumber() {
	  return new Error().stack.split('\n')[4].trim();
	}
	
	module.exports = Log;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {
	  Android: function Android() {
	    return navigator.userAgent.match(/Android/i);
	  },
	  BlackBerry: function BlackBerry() {
	    return navigator.userAgent.match(/BlackBerry/i);
	  },
	  iOS: function iOS() {
	    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	  },
	  Opera: function Opera() {
	    return navigator.userAgent.match(/Opera Mini/i);
	  },
	  Windows: function Windows() {
	    return navigator.userAgent.match(/IEMobile/i);
	  },
	  any: function any() {
	    return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var $ = global.jQuery || global.Zepto;
	// var webGLSupported = require('./webgl-detection');
	
	var hasStorage = function () {
	  var storageTest = new Date();
	  try {
	    localStorage.setItem(storageTest, storageTest);
	    localStorage.removeItem(storageTest);
	    return true;
	  } catch (e) {
	    return false;
	  }
	}();
	
	var hasJSON = function () {
	  return !!window.JSON && typeof JSON.parse === 'function';
	}();
	
	var hasConsole = !!window.console && !!console.log;
	var debugAnalytics = !!document.location.search.match(/debugAnalytics=([^;]+)/);
	var debugMode = debugAnalytics && RegExp.$1 === 'true';
	var shouldLog = function () {
	  try {
	    return hasConsole && localStorage.getItem('__debugAnalytics') || debugAnalytics && RegExp.$1 === 'log';
	  } catch (e) {
	    return false;
	  }
	}();
	
	function isMobile() {
	  return $(window).width() < 768;
	}
	
	module.exports = {
	  hasStorage: hasStorage,
	  hasJSON: hasJSON,
	  hasConsole: hasConsole,
	  debugAnalytics: debugAnalytics,
	  debugMode: debugMode,
	  shouldLog: shouldLog,
	  isMobile: isMobile
	  // webGLSupported: webGLSupported()
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObj = __webpack_require__(47);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Sources cannot be null or undefined');
		}
	
		return Object(val);
	}
	
	function assignKey(to, from, key) {
		var val = from[key];
	
		if (val === undefined || val === null) {
			return;
		}
	
		if (hasOwnProperty.call(to, key)) {
			if (to[key] === undefined || to[key] === null) {
				throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
			}
		}
	
		if (!hasOwnProperty.call(to, key) || !isObj(val)) {
			to[key] = val;
		} else {
			to[key] = assign(Object(to[key]), from[key]);
		}
	}
	
	function assign(to, from) {
		if (to === from) {
			return to;
		}
	
		from = Object(from);
	
		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				assignKey(to, from, key);
			}
		}
	
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(from);
	
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					assignKey(to, from, symbols[i]);
				}
			}
		}
	
		return to;
	}
	
	module.exports = function deepAssign(target) {
		target = toObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			assign(target, arguments[s]);
		}
	
		return target;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 50 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.4
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					var stringifiedAttributes = '';
	
					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return (document.cookie = key + '=' + value + stringifiedAttributes);
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */
	
	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs
	
	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }
	
	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }
	
	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }
	
	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }
	
	  $script.get = create
	
	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }
	
	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }
	
	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }
	
	  return $script
	});


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {}
	  
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function() {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new (this.constructor)(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);
	
	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
	    function (fn) {
	      setTimeoutFunc(fn, 0);
	    };
	
	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };
	
	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };
	  
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate))

/***/ }
/******/ ])
});
;