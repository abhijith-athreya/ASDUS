// Bam.js library is a product of MLB.com / MLB Advanced Media Inc.
// Any use of this code base outside or w/o written permission of MLB.com is prohibited
(function(window, document, $, undefined) {
	
	//jQuery Global Compatibility Settings
	$.ajaxSettings.traditional = true;
	
	var STRING = "string", NUMBER = "number", OBJECT = "object", FUNCTION = "function", TRUE = true, FALSE = false, NULL = null;
	//Private function to lookup document css styles by href
	var _findStyle = function(href) {
		var styles = document.styleSheets,
			stLen = styles.length - 1,
			cStyle = NULL;
		if(stLen >= 0) {				
			do {
				cStyle = styles[stLen];
				if(!!cStyle.href && cStyle.href.lastIndexOf(href) > -1) {
					return cStyle;	
				}
			} while(stLen--);
		}
		return NULL;
	};
	//Prevents modules from being requested twice
	// Changed to <map> to speed up loading
	var _modules = {
			add: function(path) {
				if(!/add|isLoaded/.test(path)) {
					this[path] = TRUE;
				}
			},
			isLoaded:function(path) {
				var out = FALSE, mod = _modules[path];				
				if(typeof(mod) !== "undefined") {
					out=TRUE;
				}
				return out;
			}
		};		
	
	var _bam = {
		version: "3.3",
		//Sets a local path for packages to load dependencies
    	//Be sure to set packed version homePath to: /shared/scripts/bam/packed/
		homePath: "/shared/scripts/bam/",
		//Extends functionality of the bam namespace
		/* Ex:
			 bam.extend({
				utils: {
					//... utils code	
				}
			});
			Then access it by - bam.util
		*/			
		extend: function() {
			var ext = NULL, obj = NULL, i;
			if(arguments.length>1){obj=arguments[0];ext=arguments[1];}else{obj=_bam;ext=arguments[0];}
			if(typeof(ext) === OBJECT && !!ext) {
				for(i in ext) {
					if (ext.hasOwnProperty(i)) {
						if(typeof(ext[i]) === OBJECT) {
							if(!obj[i] || !!obj[i].path) { //If backwards
								obj[i] = ext[i];
								if(arguments.length === 1){obj[i].packageName = "bam." + i;}
							} 
						}
					}
				}
			}
		},
		// Appends functions in bulk to an object
		augment: function() {
			var ext = NULL, obj = NULL, i;
			if(arguments.length>1){obj=arguments[0];ext=arguments[1];}else{obj=_bam;ext=arguments[0];}
			if(typeof(ext) === OBJECT && !!ext) {
				for(i in ext) {
					if (ext.hasOwnProperty(i)) {
						if(typeof(ext[i]) === FUNCTION) {
							if(!obj[i]) {
								obj[i] = ext[i];
							}
						}
					}
				}
			}
		},
		// (DEPRICATED) This function resembles Java import functionality for a package sub component
		// It activates a package subcomponent if it hasn't been activated yet
		// Usage: bam.imports(bam.dom);
		imports: function() {
			function _syncLoad(obj) {
				if(typeof(obj) === OBJECT && !!obj.lib) {
					var path = _bam.homePath + obj.path;
					delete _bam[obj.lib];
					_bam.loadSync(path);
				}
			}
			if(arguments.length > 1) {
				var aLen = arguments.length-1;
				do {
					_syncLoad(arguments[aLen]);
				} while(aLen--);
			} else {
				_syncLoad(arguments[0]);
			}
		},
		//This function loads stand alone remote bam package (async)
		load: function(path, cb) {
			if(typeof(path) === STRING) {
				if(!_modules.isLoaded(path)) {
					$.get(path, function(text){
						try {
							var json = eval("("+text+")");
							bam.extend(json);
							_modules.add(path);						
							if(!!cb && typeof(cb) === FUNCTION) {
								cb();
							}
						} catch(ex) { /* Could not eval file */}
					});
				} else {
					if(!!cb && typeof(cb) === FUNCTION) {
						cb();
					}
				}
			}
		},
		loadSync: function() {
			function _syncLoad(path) {
				$.ajax({
					type: "GET",
					url: path,
					dataType: "text",
					async:FALSE,
					success: function(text) {
						try {
							var json = eval("("+text+")");
							bam.extend(json);
							_modules.add(path);
						} catch(ex) { /* Could not eval file */}
					}
				});
			}
			if(arguments.length > 1) {
				var aLen = arguments.length-1, _a=0;
				do {						
					if(!_modules.isLoaded(arguments[_a])) {
						_syncLoad(arguments[_a]);
					}
				} while(_a++ < aLen);
			} else {
				if(!_modules.isLoaded(arguments[0])) {
					_syncLoad(arguments[0]);
				}
			}
		},
		//Loads and applies CSS stylesheet to a page
		loadCSS: function(){
			 var stylePath, aLen = arguments.length-1, _a=0;
			 if(aLen >= 0) {
				 var _head = document.getElementsByTagName("head")[0], 
					 _link = document.createElement("link"),
					 cLink = NULL;
					 _link.setAttribute("rel", "stylesheet");
					 _link.setAttribute("type", "text/css");
				 do {	 
					  if(!_findStyle(arguments[_a])){
						   stylePath = arguments[_a];
						   if(typeof(stylePath) === STRING) {
							   cLink = _link.cloneNode(TRUE);
							   cLink.setAttribute("href", stylePath);
							   _head.appendChild(cLink);
						   }
					  }
				 } while(_a++ < aLen);
			 }
		 },
		//This function unloads/removes a stylesheet from a document based on href path specified
		unloadCSS: function() {							 
			 var styleSheet = NULL, 
				owner = NULL,
				parent = NULL,		 
			 	aLen = arguments.length-1;
			 if(aLen >= 0) {
				 do {
					  if(!!(styleSheet = _findStyle(arguments[aLen]))){
						   //First disable it
						   styleSheet.disabled = TRUE;
						   //Then remove it
						   owner = (!!styleSheet.owningElement)?styleSheet.owningElement:styleSheet.ownerNode;
						   parent = (!!owner.parentElement)?owner.parentElement:owner.parentNode;
						   parent.removeChild(owner);
					  }
				 } while(aLen--);
			 }
		 },			 
		// bam.clone() makes a copy of the passed object and returns it.
		// If the passed object is not of type "object" or is null, an error is thrown
		clone: function(obj){
			if(typeof(obj)===OBJECT&&!!obj){
				function F(){}
				F.prototype = obj;
				return new F();
			} 
			else {
				throw new Error("bam.clone() was called with an invalid or null argument.");	
			}
		},
		//Backwards compat code
		collections		:{path:"bam.collections.js", lib:"collections"},
		cookies			:{path:"bam.cookies.js", lib:"cookies"},
		datetime		:{path:"bam.datetime.js", lib:"datetime"},
		dom				:{path:"bam.dom.js", lib:"dom"},
		filters			:{path:"bam.filters.js", lib:"filters"},
		forms			:{path:"bam.forms.js", lib:"forms"},
		soap			:{path:"bam.soap.js", lib:"soap"},
		url				:{path:"bam.url.js", lib:"url"},
		validation		:{path:"bam.validation.js", lib:"validation"},
		xml				:{path:"bam.xml.js", lib:"xml"},
		//Objects utils
		object: {
			
			typeOf: function(obj) {
				var out = "", ots = Object.prototype.toString;
				if(typeof(obj) === OBJECT) {
					switch(TRUE) {
						case (obj === NULL): out = "null"; break;
						case (ots.call(obj) === "[object String]"): out = STRING; break;
						case (ots.call(obj) === "[object Number]"): out = isNaN(obj)?"NaN":NUMBER; break;
						case (ots.call(obj) === "[object Date]"): out = isNaN(obj)?"NaN":"date"; break;
						case (ots.call(obj) === "[object Array]" || obj instanceof Array): out = "array"; break; //<- speciffic case for objects that derrive from Array
						case (ots.call(obj) === "[object Error]"): out = "error"; break;						
						case ("tagName" in obj): out = obj.tagName.toLowerCase(); break;
						case ("nodeType" in obj): out = "xml"; break;
						default: out = OBJECT;
					}
				} else {
					if(typeof(obj) === NUMBER && isNaN(obj)) {
						out = "NaN";
					} else {
						out = typeof(obj);
					}
				}
				return out;
			},			
			/**
			* Returns the value of a nested property or undefined if any property of
			* the dot-delimited path does not exist.
			*
			* Example:
			* var foo = {
			*   deeply: {
			*     nested: {
			*       property: 'bar'
			*     }
			*   }
			* };
			*
			* getDeepValue(foo, 'deeply.nested.property'); // returns 'bar'
			* getDeepValue(foo, 'deeply.held.belief');     // returns undefined
			*
			* @method
			* @name getDeepValue
			* @alias bam.object.getDeepValue
			* @memberOf bam.object
			* @static
			* @public
			* @param {Object} obj Source object
			* @param {String} deepProp Dot-delimited path to nested property
			* @returns Value of nested property or undefined
			*/
			getDeepValue: function (obj, deepProp) {
				var props = deepProp.split('.'),
					i = 0, n = props.length;
				while (typeof (obj = obj[props[i]]) !== 'undefined' && ++i < n) {};
				return obj;
			},
				
			/**
			* Sets the value of an object's nested property, specified by dot-delimited
			* string, defining any undefined property in its path.
			*
			* Example:
			* var foo = {
			*   deeply: {}
			* };
			*
			* setDeepValue(foo, 'deeply.nested.property', 'bar');
			*
			* // foo = {
			* //   deeply: {
			* //     nested: {
			* //       property: 'bar'
			* //     }
			* //   }
			* // }
			*
			* @method
			* @name setDeepValue
			* @alias bam.object.setDeepValue
			* @memberOf bam.object
			* @static
			* @public
			* @param {Object} obj Target object
			* @param {String} deepProp Dot-delimited path to nested property
			* @param val Value to assign to nested property
			* @returns {Object} The modified target object
			*/
			setDeepValue: function (obj, deepProp, val) {
				var props = deepProp.split('.'),
					root = obj,
					i = 0, n = props.length - 1,
					p, t;
				
				while (i < n) {
				  p = props[i];
				  t = typeof obj[p];
				  obj = obj[p] = (t === OBJECT || t === FUNCTION) ? obj[p] : {};
				  i++;
				}
				
				obj[props[i]] = val;
				
				return root;
			},
				  			  
			/**
			* YUI 2.6.0
			* Utility to set up the prototype, constructor and superclass properties to
			* support an inheritance strategy that can chain constructors and methods.
			* Static members will not be inherited.
			*
			* @method extend
			* @static
			* @param {Function} subclass   the object to modify
			* @param {Function} superclass the object to inherit
			* @param {Object} overrides  additional properties/methods to add to the
			*                              subclass prototype.  These will override the
			*                              matching items obtained from the superclass 
			*                              if present.
			*/
			extend: function (subclass, superclass, overrides) {
				if (!superclass || !subclass) {
				  throw new Error('extend failed, please check that all dependencies are included.');
				}
				var F = function () {};
				F.prototype = superclass.prototype;
				subclass.prototype = new F();
				subclass.prototype.constructor = subclass;
				subclass.superclass = superclass.prototype;
				if (superclass.prototype.constructor === Object.prototype.constructor) {
				  superclass.prototype.constructor = superclass;
				}
				if (overrides) {
				  for (var i in overrides) {
					if (overrides.hasOwnProperty(i)) {
					  subclass.prototype[i] = overrides[i];
					}
				  }
				  var isIE  = !+"\v1";
				  if (isIE) {
					  bam.object._IEEnumFix(subclass.prototype, overrides);
				  }
				}
			},
				
			/**
			* YUI 2.6.0
			* IE will not enumerate native functions in a derived object even if the
			* function was overridden.  This is a workaround for specific functions 
			* we care about on the Object prototype. 
			* @property _IEEnumFix
			* @param {Function} obj  the object to receive the augmentation
			* @param {Function} ext  the object that supplies the properties to augment
			* @static
			* @private
			*/
			_IEEnumFix: function(obj, ext) {
				var fnNames = ['toString', 'valueOf'],
					fnName,
					fn,
					i, n;
				for (i = 0, n = fnNames.length; i < n; ++i) {
				  fnName = fnNames[i];
				  fn = ext[fnName];
				  if (typeof fn === FUNCTION && fn != Object.prototype[fnName]) {
					obj[fnName] = fn;
				  }          
				}
			},
				
			/**
			* Returns a function bound to the scope (the object referred to by the
			* "this" keyword inside the function) of a supplied object. Accepts
			* optional default arguments to be passed to the function if supplied
			* arguments are undefined. This method is useful for helping callback
			* functions keep their intended scope.
			*
			* Example:
			*
			* var Person = function(name) {
			*   this.name = name;
			* };
			* 
			* Person.prototype = {
			*   greet: function(greeting, occupation) {
			*     return greeting + ', my name is ' + this.name + ' and I\'m a ' + occupation + '.';
			*   }
			* };
			* 
			* var furf = new Person('furf');
			*
			* // NOTE: The following two lines are synonymous...
			* var callback = bind(furf.greet, furf, 'Aloha', 'code monkey');
			* var callback = bind('greet', furf, 'Aloha', 'code monkey');
			*
			* callback();                   // Returns "Aloha, my name is furf and I'm a code monkey."
			* callback('Hello');            // Returns "Hello, my name is furf and I'm a code monkey."
			* callback('Ciao', 'gigolo');   // Returns "Ciao, my name is furf and I'm a gigolo."
			* callback(undefined, 'bonzo'); // Returns "Aloha, my name is furf and I'm a bonzo."
			*
			* @method
			* @name bind
			* @alias bam.object.bind
			* @memberOf bam.object
			* @static
			* @public
			* @param {Function|String} fn Function or method name of obj param
			* @param {Object} obj Object (scope) in which to execute function
			* @returns {Function} Bound function
			*/
			proxy: function (fn, obj /*, defaults */) {			
				var scope = obj || window,
					defaults;
				
				fn = (typeof fn === 'string') ? scope[fn] : fn;
				
				// If no defaults are supplied, return the lightweight callback
				if (arguments.length < 3) {
				
				  return function() {
					  return fn.apply(scope, arguments);
				  };
				
				// Otherwise, wrap with code to merge defaults with supplied arguments
				} else {				
					defaults = Array.prototype.slice.call(arguments, 2);
					
					return function() {				
						// Merge defaults with supplied arguments
						var args = [];
						for (var i = 0; i < Math.max(arguments.length, defaults.length); ++i) {
						  args[i] = (typeof arguments[i] !== 'undefined') ? arguments[i] : defaults[i];
						}
						
						return fn.apply(scope, args);
					};
				}
			},
			
			eventProxy: function (/* fn, obj, defaults */) {
				var fn = bam.object.proxy.apply(NULL, arguments);
				return function (/* evt, args */) {
          			return fn.apply(NULL, Array.prototype.slice.call(arguments, 1));
        		};
      		}      
		},
		
		namespace: function (obj, ns) {

			var props = (ns || obj).split('.'),
				  i, n;

		  obj = ns && obj || bam;
		  
			for (i = 0, n = props.length; i < n; ++i) {
			  obj = obj[props[i]] = obj[props[i]] || {};
			}
			return obj;
		},
		
		util: {
			
			/**
			* Ensures the value passed in is returned as an array. Useful for
			* situations that require iteration of data. Undefined values are returned
			* as empty arrays.
			*
			* @method
			* @name ensureArray
			* @alias bam.util.ensureArray
			* @memberOf bam.util
			* @static
			* @public
			* @param val Original value
			* @returns {Array} The original array or the original value wrapped in array
			*/
			ensureArray: function (val) {
				return (val instanceof Array) ? val : (typeof val !== 'undefined') ? [val] : [];
			},
			
			/**
			* Shortcut utility for returning the queryResults.row property of a data
			* object as an iterable array. Useful for extracting data from a standard
			* MLB feed.
			*
			* @method
			* @name getQueryResults
			* @alias bam.util.getQueryResults
			* @memberOf bam.util
			* @static
			* @public
			* @param {Object} data Source object
			* @param {String} deepProp (optional) Dot-delimited path to nested property
			* @returns {Array} Query result rows wrapped in an iterable array
			*/
			getQueryResults: function (data /*, deepProp */) {
				var deepProp = (typeof arguments[1] !== 'undefined') ? arguments[1] + '.' : '';
				return bam.util.ensureArray(bam.object.getDeepValue(data, deepProp + 'queryResults.row'));
			},
			
			getQueryResult: function (data /*, deepProp, index */) {
				return bam.util.getQueryResults(data, arguments[1])[arguments[2] || 0];
			},
			
			countQueryResults: function (data /*, deepProp */) {
				var deepProp = (typeof arguments[1] !== 'undefined') ? arguments[1] + '.' : '';
				return parseInt(bam.object.getDeepValue(data, deepProp + 'queryResults.totalSize'), 10);
			},
			
			/**
			* Shortcut utility for wrapping data as queryResults.row property of an
			* object. Useful for passing non-standard MLB feed data to a DataGrid
			* instance.
			*
			* Example:
			*
			* var uie = wrapQueryResults([
			*   { id: 1, name: 'Mike' },
			*   { id: 2, name: 'Aleks' },
			*   { id: 3, name: 'Sam' },
			*   ...
			* ]);
			*
			* // uie = {
			* //   queryResults: {
			* //     row: [
			* //       { id: 1, name: 'Mike' },
			* //       { id: 2, name: 'Aleks' },
			* //       { id: 3, name: 'Sam' },
			* //       ...
			* //     ]
			* //   }
			* // }
			*
			* @method
			* @name wrapQueryResults
			* @alias bam.util.wrapQueryResults
			* @memberOf bam.util
			* @static
			* @public
			* @param {Object} data Source object
			* @returns {Object} Wrapped object
			*/
			wrapQueryResults: function (data) {
				return bam.object.setDeepValue({}, 'queryResults.row', data);
			}
		},
		//Number extensions
		number: {		  
			/**
			* Returns either the original value or the limit if value is out of bounds
			*
			* @method
			* @name limitValueToRange
			* @alias bam.util.limitValueToRange
			* @memberOf bam.util
			* @static
			* @public
			* @param {Number} val Value to limit
			* @param {Number} rangeA One end of a numeric range
			* @param {Number} rangeB The other end of a numeric range
			* @returns {Number} Limited value
			*/
			limitValueToRange: function(val, rangeA, rangeB) {
				var min = Math.min(rangeA, rangeB),
					max = Math.max(rangeA, rangeB);
				return Math.max(Math.min(val, max), min);
			}
		},
		//String extensions
		string: (function(){
			var _self = {
				trim: function(str) {
					return $.trim(str);
				},
				equals: function(str, str2) {
					if(typeof(str) === STRING && typeof(str2) === STRING){return str === str2;}
				},
				equalsIgnoreCase: function(str, str2) {
					if(typeof(str) === STRING && typeof(str2) === STRING){return str.toLowerCase() === str2.toLowerCase();}
				},
				toCharArray: function(str) {
					if(typeof(str) === STRING){								
						return str.split("");
					}
				},
				instr: function(str, from, to, val) {
					var _out = str;
					if(typeof(str) === STRING){
						if((!isNaN(from)) && (from >= 0) && (from <= str.length)) {
							if((!isNaN(to)) && (to >= 0) && (to <= str.length)) {
								var _tmp = str.substring(0, from);
								_tmp += val;
								_tmp += str.substring(to);
								_out = _tmp;
							}
						}
					}
					return _out;
				},
				textWrap: function(str, largestWordLength, wordPartSize, wordBreaker) {
					if( bam.object.typeOf(str) !== STRING) {
						return str;
					}
					else {
						str = String(str);
					}
					
					largestWordLength = largestWordLength	|| 20;
					wordPartSize = wordPartSize				|| 5;
					
					var userAgent;
					if (wordBreaker) {
					} else if((userAgent = navigator.userAgent.match(/Firefox\/([0-9\.]+)/i)) && parseInt(userAgent[1], 10) < 3) {	// FF 2 does not have &shy; support, but does support &#8203;
						wordBreaker = "&#8203;";
					} else {
						wordBreaker = "&shy;";
					}
	
					var regex = new RegExp("([a-z0-9\\-_]{" + largestWordLength + ",})([^<]*?>)?", "gi");
					return str.replace(regex, function() {
						var match = arguments[1];
						var result = [];
						var i = 0;
	
						if(match.indexOf(wordBreaker) !== -1 || arguments[2]) {
							if(arguments[2])
								match += arguments[2];										// the word has already been split or we're inside a long tag
							return match;
						}
	
						while (match.length > 0) {
							result.push(match.substring(0, wordPartSize));
							match = match.substring(wordPartSize);
						}
						return result.join(wordBreaker);
					});
				},
				StringBuffer: function(str) {
					this.buffer = [];
					this.length = 0;	
					if(!!str) {
						this.append(str);
					}
				},
				//escape HTML
				escapeHTML: function(htmlStr) {
					var div = document.createElement("div");
					div["innerText" in div?"innerText":"textContent"] = htmlStr;
					return div.innerHTML;
				},
				//Unescape HTML to it's original state
				unescapeHTML: function(htmlStr) {
					var div = document.createElement("div");
					div.innerHTML = htmlStr;
					return div["innerText" in div?"innerText":"textContent"].replace("&apos;", "'");
				}
			};
			/* StringBuffer prototype functions */
			_self.StringBuffer.prototype = {
				append: function(obj) {
					if(typeof obj !== "undefined") {
						 var tmp = String(obj);
						 this.length += tmp.length;
						 this.buffer.push(tmp);
					}
					return this;
				},
				replace: function(start, end, rplStr) {
					if(bam.object.typeOf(rplStr) === STRING) {
						var tmp = this.toString();
						tmp = bam.string.instr(tmp, start, end, rplStr);
						this.clear();
						this.append(tmp);
					}
					return this;
				},
				remove: function(start, end) {
					if(!!end) {
						this.replace(start, end, "");
					} else {
						this.replace(start, this.length, "");
					}					
					return this;
				},
				reverse: function() {
					this.buffer = this.toString().split("").reverse();
					return this;
				},
				clear: function() {
					this.length = 0;
					this.buffer.length = 0;
					return this;
				},
				toString: function() {
					return this.buffer.join("");
				}
			};
			return _self;
		})(),

    /**
     * Environment detection
     * @author dkhayzin
     */
    env: (function(win) {
      // host detection     
      var _host = {};
      _host.isDev = _host.isQA = _host.isBeta = _host.isProd = false;

      var _subdomain = win.location.host.split(".").reverse()[2];
      var _env = _subdomain && (_subdomain.indexOf("dev") > -1 && "Dev" ||
        _subdomain.indexOf("qa") > -1 && "QA" ||
        _subdomain.indexOf("beta") > -1 && "Beta") ||
        "Prod";
      _host["is" + _env] = true;
      
      // client detection; add more as necessary
      var _userAgent = win.navigator.userAgent;
      var _client = {
        isIPhone: !!_userAgent.match(/iPhone.+Mac/i),
        isIPad: !!_userAgent.match(/ipad.+Mac/i),
        isXoom: !!_userAgent.match(/Android 3/i),
        isPlaybook: !!_userAgent.match(/RIM Tablet OS/i),
        isAndroid: !!_userAgent.match(/Android/i),
        isTouchpad: !!_userAgent.match(/hp-tablet.*wOSBrowser.*534.6 TouchPad.*/i),
        isVizio: !!_userAgent.match(/Vizio/i),
        isKindle: !!_userAgent.match(/Kindle/i),
        isWindowsPhone: !!_userAgent.match(/Windows Phone/i),
        isWapDevice: !!_userAgent.match(/Android[^\ ]|Android\ [^3]|Android$|Kindle|Blazer|Blackberry|Windows\ CE.\ PPC|phone|IEMobile|Sprint:PPC|^LG|^MOT|^HTC|up.browser|netfront|midp|au- mic|webOS|Bada.*Mobile/i)
      };
      
      return {
        host: _host,
        client: _client
      };
    })(window)
	};	
	
  // for backward compatibility until cleaned up - furf
	_bam.object.bind = _bam.object.proxy;
	_bam.object.namespace = _bam.namespace;
	
	// this patch provides jsonpCallback to jQuery.ajax (versions < 1.4)
  // @see http://gist.github.com/306998
  // jQuery.useJsonpCallback = (parseFloat(jQuery.fn.jquery) >= 1.4) ? jQuery.noop : function () {
  //   var cfg = this, jsonp = cfg.dataType === 'script' && cfg.jsonpCallback;
  //   if (jsonp && !window[jsonp]) {
  //     window[jsonp] = function (data) {
  //       cfg.success.call(cfg, data, 'success');
  //       try {
  //         delete window[jsonp];
  //       } catch (ie6) {
  //         // cannot delete window properties in IE6
  //         window[jsonp] = undefined; 
  //       }
  //     };
  //   }
  // };
  
  
  /**
   * Augments an object (or its prototype) with jQuery's event methods (bind,
   * one, trigger, unbind), providing it with custom event capability. An
   * optional second parameter can create convenient shortcut methods for 
   * binding to specific events.
   *
   * @example
   *
   * function Person (name, age) {
   *   this.name = name;
   *   this.age = age;
   * }
   * 
   * Person.prototype = {
   *   setName: function (name) {
   *     this.name = name;
   *     this.trigger('setName', [name]);
   *   },
   *   setAge: function (age) {
   *     this.age = age;
   *     this.trigger('setAge', [age]);
   *   },
   *   doSomething: function () {
   *     this.trigger('onDoSomething');
   *   },
   *   doSomethingElse: function () {
   *     this.trigger('onDoSomethingElse');
   *   }
   * };
   * 
   * // Augment Person.prototype with jQuery's four event methods and custom
   * // event subscriber methods onDoSomething and onDoSomethingElse.
   * $.bindable(Person, 'onDoSomething onDoSomethingElse');
   * 
   * // Create a generic custom event listener
   * function customEventListener (evt, val) {
   *   console.dir({
   *     event: evt,
   *     value: val,
   *     scope: this
   *   });
   * }
   * 
   * var dave = new Person('dave', 36),
   *     dahl = new Person('dahl', 36);
   * 
   * dave.bind('setName setAge', customEventListener);
   * dahl.bind('setName', customEventListener);
   * 
   * dave.setName('furf');
   * dahl.setName('baby');
   * dave.setAge(37);
   * 
   * dave.onDoSomething(customEventListener);
   * dave.onDoSomethingElse(customEventListener);
   * dave.doSomething();
   * dave.doSomethingElse();
   * 
   * @param {Object} obj object to augment with jQuery event methods
   * @param {String} types whitespace-delimited list of custom events
   * @returns {Object} augmented object
   */
  $.bindable = function (obj /*, types */) {

    /**
     * Allow use of prototype for shorthanding the augmentation of classes
     */
    obj = obj.prototype || obj;

    /**
     * Augment the object with jQuery's bind, one, and unbind event methods
     */ 
    $(['bind', 'one', 'unbind']).each(function (i, method) {
      obj[method] = function (type, data, fn, thisObject) {
        $(this)[method](type, data, fn, thisObject);
        return this;
      };
    });

    /**
     * The trigger event must be augmented separately because it requires a new
     * Event to prevent unexpected triggering of a method (and possibly
     * infinite recursion) when the event type matches the method name
     */ 
    obj.trigger = function (type, data) {
      var event = new $.Event(type),
          all   = new $.Event(event);
      event.preventDefault();
      all.type = '*';
      if (event.type !== '*') {
        $(this).trigger(event, data);
      }
      $(this).trigger(all, data);
      return this;
    };

    /**
     * Create convenience methods for event subscription which bind callbacks
     * to specified events
     */
    if (typeof arguments[1] === 'string') {
      $.each(arguments[1].split(/\s+/), function (i, type) {
        obj[type] = function (data, fn, thisObject) {
          return arguments.length ? this.bind(type, data, fn, thisObject) : this.trigger(type);
        };
      });
    }

    return obj;
  };
  
  /**
   * Used for setting value of bam.EASTERN_TIME in metatemplate.jsp
   */
  _bam.getDateByOffset = function (offset /*, local */) {

    var offsetHours   = ~~(offset / 100),
        offsetMinutes = offset % 100,
        local = (typeof arguments[1] !== 'undefined') ? new Date(arguments[1]) : new Date();

    return new Date(
      local.getUTCFullYear(),
      local.getUTCMonth(),
      local.getUTCDate(),
      local.getUTCHours() + offsetHours,
      local.getUTCMinutes() + offsetMinutes,
      local.getUTCSeconds(),
      local.getUTCMilliseconds()
    );
  };
  
	//return _bam;

	// If window.bam already exists, preserve the properties already on it.
	// This allows required.js to be before this file, making the transition
	// to a modular codebase possible.
	window.bam = $.extend( _bam, window.bam || {} );
	
})(this, this.document, jQuery);
