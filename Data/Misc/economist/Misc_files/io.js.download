/* jshint laxcomma:true, sub:true, asi:true */
// v1.31 JS Library for data collection. MIT License.
// https://github.com/lytics/jstag
(function(win,doc,nav) {
  var dloc = doc.location
    , ckie = doc.cookie
    , jstag = win.jstag || {}
    , config = jstag.config || {}
    , l = 'length'
    , ioVersion = "1.31"
    , cache = {}
    , uidv
    , changeId
    , didGetId
    , as = Array.prototype.slice
    , otostr = Object.prototype.toString
    , dref = referrer()
    , uri = parseUri()
    , sesCkieVal = undefined
    , isSesStart = false
    , pageData = {}

  win['jstag'] = jstag;
  jstag.isLoaded = true;

  if (!win.console){
    win.console = {log:function(){}};
  }

  jstag.config = extend({
    url:''
    , Q:[]
    , id: undefined
    , cid : undefined
    , getid : makeid
    , loadid: undefined
    , serializer:toString
    , pipeline:['identity','analyze']
    , delay:2000
    , path: '/c/'
    , idpath: '/cid/'
    , cookie:"seerid"
    , sesname:"seerses"
    , stream: undefined
    , sessecs: 1800
    , channel:'Gif'//  Form,Gif
    , qsargs: []
    , ref: true
    , tagid: 'jstag-csdk'
    , pagedata: {}
    , version : ioVersion
  }, config)

  function isFn(it){return otostr.call(it) === "[object Function]"}
  function isObject(it){return otostr.call(it) === "[object Object]"}
  function isString(it){return otostr.call(it) === "[object String]"}
  function isArray(it){return otostr.call(it) === "[object Array]"}

  /**
   * the classic extend, nothing special about this
   * @param target
   * @param source
   * @param overwrite (bool, optional) to overwrite
   *   target with source properties default = false.
   * @returns target
  */
  function extend(){
    var extended = {},
        deep = false,
        i = 0,
        length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for ( var prop in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                // If deep merge and property is an object, merge properties
                if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    extended[prop] = extend( true, extended[prop], obj[prop] );
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;
  }

  /*
    parseUri 1.2.1
    (c) 2007 Steven Levithan <stevenlevithan.com>
    http://stevenlevithan.com/demo/parseuri/js/
    MIT License
  */
  function parseUri(str) {
    if (str === undefined){
        str = dloc.href;
    }
    var o   =  {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "qs",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    }
    var m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;
    while (i--) uri[o.key[i]] = m[i] || "";
    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = decodeURIComponent($2);
    });
    return uri;
  }

  jstag["parseUri"] = parseUri;

  function s16() {
     return ((1+Math.random())*0x10000).toString()
  }
  /**
   * creates random id
  */
  function makeid(cb){
    jstag.setid(s16())
    if (isFn(cb)) cb(uidv);
  }
  /**
   * the built in getid assumes you have jquery
   * @param cb = callback function (mandatory)
  */
  function jqgetid(cb){
    if (!jQuery) {
      jstag.setid(s16())
      return
    }
    if (jQuery && jQuery.ajax && isFn(jQuery.ajax)) {
      var idurl = config.url + config.idpath + config.cid[0];
      jQuery.ajax({url: idurl,dataType: 'jsonp',success: function(json){
        jstag.setid(json)
        didGetId = "t"
        cb(json)
      }});
    }
  }

  // setid
  jstag.setid = function(id){
    uidv = id
    var eid = ckieGet(config.cookie);
    if (eid && eid[l] && eid != "undefined") {
      changeId = eid
    }
    var expires = new Date();
    expires.setTime(expires.getTime() + 7776000 * 1000)
    ckieSet(config.cookie, id, expires)
  }

  /**
   * the getid forces the id to load in advance
  */
  jstag.getid = function(cb) {
    if(config.getid && isFn(config.getid)){
      cb = cb ? cb : function(){}
      var sid = ckieGet(config.cookie);
      if (sid && sid[l] && sid != "undefined") {
        uidv=sid
        cb(uidv)
      } else {
        config.getid(cb)
      }
    }
    return uidv
  }

  /**
   * the http referrer
  */
  function referrer(){
    var r = '';
    try {
        r = top.document.referrer
    } catch (e1) {
        try {
            r = parent.document.referrer
        } catch (e2) {
            r = ''
        }
    }
    if (r === '') {
        r = doc.referrer
    }
    return r
  }
  /**
   * The connect/init function accepts config object
   */
  function connect(opts){
    config = extend(jstag.config, opts)
    if (config.loadid) {
      config.getid = jqgetid;
    }
    pageAnalysis();
    return jstag
  }
  if ('_c' in jstag) connect(jstag._c)

  jstag["init"] = jstag['connect'] = connect;

  /* ------------- event binding -------------------
   *
  **/

  var events = {}, evtConfig = {onetime:false}
  /**
   * Bind events:  accepts params, but also the cb function
   * can be marked up with a property as onetime:
   *
   *      function dowork(opts){
   *           // do work
   *      }
   *      dowork.onetime = true;
   *      jstag.bind("send.finished",dowork)
   *
   * @param the event filter (string) to bind to
   * @param callback :  the function to be called upon triggering elsewhere.
   * @param options:  {onetime:true(default=false)}
  **/
  function bind(filter,cb,opts){
    cb.opts = extend({}, opts)
    if (!(filter in events)){
      events[filter] = [cb]
    } else {
      events[filter].push(cb)
    }
  }
  jstag['bind'] = bind;

  /**
   * Emit events
   * @param the event name filter (string) to bind to
  **/
  function emit(evt){
    var onetime = [], eventsn = [], cb,
      args = Array.prototype.slice.call(arguments,1);
    if (events[evt]&&events[evt].length){
      for (var i=0,len=events[evt].length;i<len;i++){
        if (isFn(events[evt][i])){
          cb = events[evt][i];
          if (cb.opts.onetime){
            onetime.push(cb);
          } else {
            cb.apply({},args);
            eventsn.push(events[evt][i])
          }
        }
      }
    }
    events[evt] = eventsn
    for (var k = onetime[l] - 1; k >= 0; k--) {
      onetime[k].apply({},args)
    }
    //onetime.forEach(function(cb){
    //  cb.apply({}, args);
    //})
  }
  jstag['emit'] = emit;

  /**
   * Replace the temporary Q object, iterating through and
   * calling the actual functions with arguments
   * the async tag provides a set of stub's which actually don't work
   * but instead get queued into Q.
  **/
  function handleQitem(q){
    if (isString(q[1]) && q[1] in jstag ){
      // these are alises for not yet created fn (when put in q)
      //  q[0]    q[1]
      // "ready", "send"
      // "ready", "send", {data:stuff}
      // "ready", "send", {data:stuff}, fn()
      bind(q[0],function(){
        jstag[q[1]].apply(jstag,as.call(q[2]? q[2] : {}))
      })
    } else {
      // "ready", fn(), {data:stuff},
      bind.apply(jstag,[q[0]].concat(as.call(q[1])))
    }
  }
  function replaceTempQ(){
    // check for any temp events
    if ("_q" in jstag && isArray(jstag._q)){
      for (var i = jstag._q.length - 1; i >= 0; i--) {
        handleQitem(jstag._q[i])
      }
      // don't emit ready here, tooooo soon
    }
  }

  /**
   * Get a cookie
   */
  function ckieGet(name){
    if (ckie[l] > 0) {
      var begin = ckie.indexOf(name+"="), end;
      if (begin != -1) {
        begin += name.length+1;
        end = ckie.indexOf(";", begin);
        if (end == -1) end = ckie[l];
        return unescape(ckie.substring(begin, end));
      }
    }
    return null;
  }
  // expose it publicly
  jstag['ckieGet'] = ckieGet;

  function ckieDel(name) {
    doc.cookie=name+"=; path=/; expires=Monday, 19-Aug-1996 05:00:00 GMT";
  }

  function ckieSet(name, value, expires, path, domain, secure) {
    var subdomain = domain;
    if (!domain && uri && uri.host){
      var hp = uri.host.split(".");
      subdomain = uri.host;
      if (hp.length > 1){
        domain = "." + hp[hp.length-2] +"." + hp[hp.length-1]
      }
    }
    path = path || "/"
    var cv = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    var cvsub = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((subdomain) ? "; domain=" + subdomain : "") +
        ((secure) ? "; secure" : "");
    doc.cookie = cv;
    doc.cookie = cvsub;
  }
  jstag['ckieSet'] = ckieSet;

  function addQs(url, n, v) {
    if (url.indexOf("?") < 1) url += "?"
    else url += "&"
    return url + n + '=' + v
  }


  /**
   * @Object available channels
  */
  jstag.channels = {
    /**
     * @class jstag.channels.Gif
     * uses empty gif images to send the request
     * @constructur
    */
    Gif: function(opts){
      return {
        images:[],
        /**
        * Sends the data
        */
        send:function(data,o){
          if (doc.images){
            var gif = this,
              img = new Image(),
              onFinish = function(to){
                if (!o.callback.hasRun){
                  o.callback.hasRun=true;
                  try{
                    o.callback(to);
                  } catch (e){}
                }
              };
            this.images.push(img);
            if (arguments.length === 2 && o && isFn(o.callback)){
              o.callback.hasRun=false;
              if (img.onload) img.onload = onFinish();
              win.setTimeout(function(){onFinish({timeout:true})}, jstag.config.delay);
            }
            img.src=this.getUrl(data);
          }
        },
        /**
         * Creates the url to be sent to the collection server
         */
        getUrl:function(data){
          var url = opts.sendurl;
          if (url.indexOf("?") < 1) url += "?"
          else url += "&"
          return url + data
        }

      }
    },
    /**
     * @class channels.Form
     * Form:  uses an iframe to post values
     * @constructor
    */
    Form: function(opts){
       // form based communication channel
      this.config = opts
      var self = this
        , sendAlternate = function(data){
            // If iFrame transport fails, fallback on Gif
            var g = new jstag.channels.Gif(opts);
            try {
              g.send(data);
            } catch (err){}
        };
      return {
        send: function(data,o){
          try {
            var iframe = doc.createElement("iframe")
              , form
              , inp
              , fid = 'f' + Math.floor(Math.random() * 99999)
              , onFinish = function(to){
                if (o && o.callback && !o.callback.hasRun){
                  o.callback.hasRun=true;
                  o.callback(to);
                }
              };
            doc.body.appendChild(iframe);
            iframe.style.display = "none";
            iframe.id = fid
            setTimeout(function() {
              form = iframe.contentWindow.document.createElement("form");
              if (!(iframe.contentWindow.document.body)) {
                return sendAlternate(data)
              }
              iframe.contentWindow.document.body.appendChild(form);
              form.setAttribute("action", opts.sendurl );
              form.setAttribute("method", "post");
              inp = iframe.contentWindow.document.createElement("input");
              inp.setAttribute("type", "hidden");
              inp.setAttribute("name", "_js");
              inp.value = data;
              form.appendChild(inp);
              form.submit();
              setTimeout(function(){
                try {
                  doc.body.removeChild(iframe);
                } catch (err) { }
                onFinish({timeout:true})
              }, config.delay * 2);
            }, 0);
          } catch(e) {
            sendAlternate(data);
          }
        }
      }
    }
  }

  function isMobile(){
    var a = navigator.userAgent||navigator.vendor||window.opera
    var ism = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))
    if (ism){
      return true
    }
    return false
  }
  function pageAnalysis(){
      sesCkieVal = ckieGet(jstag.config.sesname)
      var ref
      for (var k in uri.qs) {
        if (k.indexOf("utm_") === 0){
          pageData[k] = uri.qs[k];
        }
      }
      if (jstag.config.qsargs && isArray(jstag.config.qsargs)) {
        var qsa = null
        for (var i = jstag.config.qsargs.length - 1; i >= 0; i--) {
          qsa = jstag.config.qsargs[i]
          if (qsa in uri.qs){
            pageData[qsa] = uri.qs[qsa];
          }
        }
      }

      if (!sesCkieVal) {
        pageData['_sesstart'] = "1"
      }

      if (dref && dref[l] > 1){
        var rh = dref.toString().match(/\/\/(.*)\//);
        if (rh && rh[1].indexOf(dloc.host) == -1) {
          pageData['_ref'] = dref.replace("http://","").replace("https://","");
          if (!sesCkieVal) {
            pageData['_sesref'] = dref.replace("http://","").replace("https://","");
          }
        }
      }

      // update the session time
      var expires = new Date();
      expires.setTime(expires.getTime() + jstag.config.sessecs * 1000)
      ckieSet(jstag.config.sesname,"e", expires)
      // some browser items
      pageData["_tz"] = parseInt(expires.getTimezoneOffset() / 60 * -1) || "0";
      pageData["_ul"] = nav.appName == "Netscape" ? nav.language : nav.userLanguage;
      if (typeof (screen) == "object") {
        pageData["_sz"] = screen.width + "x" + screen.height;
      }
  }
  // the core page analysis functions, an array of options
  var pipeline = {
    analyze: function(o){
      if (!("_e" in o.data)) o.data["_e"] = "pv";
      for (var k in pageData) {
        o.data[k] = pageData[k];
      }
    },
    identity: function(o){
      // set mobile flags
      if (isMobile()) {
        o.data["_mob"] = "t"
        var mobType = "unknown"
        if (nav.userAgent.match(/Android/i)) {
          mobType="Android"
        } else if (nav.userAgent.match(/BlackBerry/i)) {
          mobType="Blackberry"
        } else if (nav.userAgent.match(/iPhone|iPad|iPod/i)) {
          mobType="IOS"
        } else if (nav.userAgent.match(/IEMobile/i)) {
          mobType="WinMobile"
        }
        o.data["_device"] = mobType;
      } else {
        o.data["_nmob"] = "t"
        o.data["_device"] = "desktop";
      }
      // get location
      // TODO:   fix url in ?
      //if (!("url" in o.data)) {
        o.data['url'] = dloc.href.replace("http://","").replace("https://","");
      //}
      // determine if we are in an iframe
      if (win.location != win.parent.location) o.data["_if"] =  "t";
      // clean up uid
      if (("_uid" in o.data) && (!o.data["_uid"] || o.data["_uid"] == "null" || o.data["_uid"] == "undefined")) {
        delete o.data["_uid"]
      }
      var ga = ckieGet("__utma"), gai = -1
      if (ga && ga[l] > 10) {
        gai = ga.indexOf(".",10)
        o.data["_ga"] = ga.substring(0,gai)
      }
      if (!("_uid" in o.data)) { // don't replace uid if supplied
        if (uidv){
          o.data['_uid']=uidv
        } else {
          var sid = ckieGet(config.cookie);
          if (sid && sid[l] && sid != "undefined") {
            uidv=o.data['_uid']=sid
          }
        }
      }
      if (didGetId) {
        o.data["_getid"] = "t"
      }
      if (changeId) {
        o.data["_uido"] = changeId
      }
      // handle saving optimizely id
      var optzly = ckieGet("optimizelyEndUserId");
      if (optzly) {
        o.data["optimizelyid"] = optzly;
      }
      if (!("_v" in o.data)) o.data["_v"] =  ioVersion;
    }
  }
  // make sure we only run once
  pipeline.analyze.onetime = true;

  function encode(v){
    return encodeURIComponent(v);
  }

  /**
   * toString name=value&   serializer, converts objects to flat names
   * ie {user:{id:12,name:"aaron"}} becomes user.id=12&user.name=aaron
   * and {groups:["admin","api"]} becomes groups=admin&groups=api&groups_len=2
  */
  function toString(data, ns){
    var as = [], key = "";
    if (arguments.length == 1){
      ns = ""
    }
    // If we have a top level array?   what to do?
    if (isArray(data)){
      if (window.JSON) {
        as.push("_json=" + encode(JSON.stringify(data)));
      }
      for (var i = data.length - 1; i >= 0; i--) {
        as.push(toString(data[i], ns))
      };
      return as.join("&");
    }
    for (var p in data){
      if (data.hasOwnProperty(p)) {
        key = encode(p);
        if (ns !== "") {
          key = ns + '.' + key
        }
        if (isObject(data[p])){
          as.push(toString(data[p],p))
        } else if (isFn(data[p])) {
          as.push(key + '=' + encode(data[p]()))
        } else if (isArray(data[p])) {
          as.push(key + "_len=" + data[p].length);
          if (window.JSON) {
            as.push(key + "_json=" + encode(window.JSON.stringify(data[p])));
          }
          for (var ai = data[p].length - 1; ai >= 0; ai--) {
            if (isObject(data[p][ai])){
              as.push(toString(data[p][ai], key))
            } else if (data[p][ai] !== null && data[p][ai] !== undefined ){
              as.push(key + '=' + encode(data[p][ai]))
            }
          }
        } else if (isString(data[p]) && data[p].length > 0) {
          as.push(key + '=' + encode(data[p]))
        } else if (data[p] !== null && data[p] !== undefined ){
          as.push(key + '=' + encode(data[p]))
        }
      }
    }
    return as.join("&");
  }

  /**
   * @class jstag.Io
   * Io constructor, base communication object for sending info
  */
  function Io(o){
    if (!(this instanceof Io)) return new Io(o);
    this.init(o);
    return this;
  }
  // expose it publicly
  jstag['Io'] = Io;

  /**
   * @Function jstag.send
   * public function for send, note this send will overwrite
   * the temporary one in the async function
   * @param stream:  (string) optional name of stream to send to
   * @param data:  the javascript object to be sent
   * @param callback (optional):  the function to be called upon triggering elsewhere.
  */
  function send(){
    var stream,data,cb, args=arguments
    if (isString(args[0])){
      stream = args[0]
      data = args[1]
      if (args.length===3) cb = args[2]
    } else {
      data = args[0]
      if (args.length===2) cb = args[1]
    }

    if ('io' in cache && isArray(cache['io'])){
      // it is possible to create more than 1 sender, send events multiple locations
      for (var i = cache['io'].length - 1; i >= 0; i--) {
        cache['io'][i].send(data,cb,stream);
      }
    } else {
      var io = new Io();// this will auto-cache
      io.send(data,cb,stream);
    }
  }
  jstag['send'] = send

  function pageView(){
    var stream = "default",data,cb, args=arguments
    if (isString(args[0])){
      stream = args[0]
      data = args[1]
      if (args.length===3) cb = args[2]
    } else {
      data = args[0]
      if (args.length===2) cb = args[1]
    }
    if (!(isObject(data))){
      data = {}
    }
    if (!("_e" in data)) data["_e"] = "pv";
    for (var k in pageData) {
      data[k] = pageData[k];
    }
    send(data,cb,stream)
  }
  jstag['pageView'] = pageView

  // Used to identify a user when you have a strong
  //   identity, aka logging in, etc
  //
  // identify(userId, data)
  //  @userId = strong identity, email, hashed email, user_id from db
  //  @data = object of key:value properties to collect
  function identify(){
    var uid = "", stream="default",data={},cb, args=arguments;
    uid = args[0]
    if (isString(args[1])){
      stream = args[1]
      data = args[2]
      if (args.length===4) cb = args[3]
    } else {
      data = args[1]
      if (args.length===3) cb = args[2]
    }
    if (!data) data = {};
    data["user_id"] = uid;
    send(data,cb,stream)
  }
  jstag['identify'] = identify

  Io.prototype = function(){

    var _pipe = []
      , self = null
      , o = null
      , pitem = null;


    return {
      init: function(opts){
        self = this
        o = config
        if (!o.url || o.url === ''){
          var tagel = doc.getElementById(o.tagid), elu = null;
          if (tagel) {
            elu = parseUri(tagel.getAttribute("src"))
            o.url = "//" + elu.authority
          }
        }
        if (!o.url || !o.cid) throw new Error("Must have collection url and ProjectIds (cid)");
        if ('cid' in o) {
          if (isArray(o.cid)) {
            jstag.config.cid = o.cid;
          } else {
            jstag.config.cid = [o.cid]
          }
        }
        this.serializer = o.serializer;

        if (!('io' in cache)){
          cache['io'] = [this]
        } else {
          cache['io'].push(this)
        }

        this.channel = new jstag.channels[o.channel](o);

        // define pipeline
        for (var i = o.pipeline.length - 1; i >= 0; i--) {
          pitem = o.pipeline[i]
          if (isFn(pitem)){
            _pipe.push(pitem)
          } else if (pitem in pipeline){
            _pipe.push(pipeline[pitem])
          } else if (item in win){
            _pipe.push(win[pitem])
          }
        }

        // if they supplied a Q, wire it up
        if (o.Q && o.length > 0){
          for (var k = o.Q.length - 1; k >= 0; k--) {
            self.send.apply(self,o.Q[k])
          }
        }
        if (o.Q){
          o.Q.push=function(){
            self.send.apply(self,Array.prototype.slice.call(arguments))
          }
        }
        jstag.emit("io.ready",this)
      },
      collect:function(opts,cb){
        var self = this, dataout = {}, o = config, dataMsg;

        jstag.emit("send.before", opts)
        this.data = opts.data;
        opts.data['_ca'] = "jstag1";

        dataout = extend(config.pagedata, opts.data);

        dataMsg = this.serializer(dataout);

        var currentChannel = this.channel;
        // uri max length = ~2000
        if (isString(dataMsg) && (dataMsg.length + o.sendurl.length) > 2000) {
          currentChannel = new jstag.channels['Form'](o);
        }

        // now send
        currentChannel.send(dataMsg,{callback:function(to){
          opts.returndata = to
          if (isFn(cb)){
            cb(opts,self);
          }
          jstag.emit("send.finished",opts,self)
        }});
      },
      send : function(data,cb,stream) {
        if (isArray(config.cid)) {
          for (var i = config.cid.length - 1; i >= 0; i--) {
            this.sendcid(config.cid[i], data,cb,stream);
          }
        } else {
          this.sendcid(config.cid, data,cb,stream);
        }
      },
      sendcid : function(cid, payload, cb, stream) {
        var data = extend(data, payload) || {};

        data["_ts"] = new Date().getTime();
        // todo, support json or n/v serializer?
        var opts = {data:data,callback:cb,config:this.config}
          , self = this
          , url = o.url + o.path + cid
          , pipeNew = [];
        stream = stream || jstag.config.stream;
        o.sendurl = stream ? url + "/" + stream  : url
        if (o.sendurl.indexOf("_uidn=") == -1 && config.cookie != "seerid") {
          o.sendurl = addQs(o.sendurl, "_uidn", config.cookie)
        }
        // run pre-work
        for (var i = _pipe.length - 1; i >= 0; i--) {
          _pipe[i](opts)
          if (!(_pipe[i].onetime)){
            pipeNew.push(_pipe[i])
          }
        }

        _pipe = pipeNew

        // now for the actual collection
        if (uidv) {
          self.collect(opts,cb)
        } else if (config.getid && isFn(config.getid)) {
          config.getid(function(id){
            if (id && !(data['_uid'])) {
              data['_uid']=id
              didGetId = "t"
              data["_getid"] = "t"
              uidv = id
            }
            self.collect(opts,cb)
          })
        } else {
          self.collect(opts,cb)
        }

      },
      debug:function(){
        return "<table><tr><th>field</th><th>value</th></tr>" + oToS(this.data) +
          "<tr><th>config</th></tr><tr>" + oToS(config) + "</tr></table>"
      }
    }
  }()

  function oToS(o,lead){
    var s = '';
    lead = lead || ''
    for (var p in o){
      if (isObject(o[p])) {
        s += oToS(o[p], p + ".")
      } else if (isFn(o[p])) {
      } else {
        s+="<tr><td>"+lead + p+"</td><td>"+o[p]+"</td></tr>"
      }
    }
    return s
  }


  if (win && 'jstagAsyncInit' in win && isFn(win.jstagAsyncInit)){
    win.jstagAsyncInit();
  }


  if (!("ready" in jstag)){
    jstag.ready = function(){}
  }

  jstag['load'] = function() {return this};

  replaceTempQ();
  jstag.emit("ready")


}(window,document,window.navigator));
