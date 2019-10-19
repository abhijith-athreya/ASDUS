(function(d,w,RB) {

  Array.prototype.map = Array.prototype.map || function(fn){
    var y = []; var length = this.length; for (var i = 0; i < length; i++) { y.push(fn(this[i],i)); }
    return y
  }

  Object.keys = Object.keys || function(obj) {
    var theKeys = []; for (var name in obj) { theKeys.push(name); }
    return theKeys
  }

  var base64 = {};
  base64.PADCHAR = '=';
  base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  base64.makeDOMException = function() { return "base64.decode issue" }

  base64.decode = function(s) {
    var s = '' + s;
    var getbyte64 = function(s,i) {
      var idx = base64.ALPHA.indexOf(s.charAt(i));
      if (idx === -1) {
          throw base64.makeDOMException();
      }
      return idx;
    };
    var pads, i, b10;

    if (s.length % 4 !== 0) {
      s = s + Array((4 - (s.length % 4)) + 1).join("=")
    }

    var imax = s.length
    if (imax === 0) {
      return s;
    }

    if (imax % 4 !== 0) {
      throw base64.makeDOMException();
    }

    pads = 0
    if (s.charAt(imax - 1) === base64.PADCHAR) {
      pads = 1;
      if (s.charAt(imax - 2) === base64.PADCHAR) {
          pads = 2;
      }
      // either way, we want to ignore this last block
      imax -= 4;
    }

    var x = [];
    for (i = 0; i < imax; i += 4) {
      b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) |
          (getbyte64(s,i+2) << 6) | getbyte64(s,i+3);
      x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
    }

    switch (pads) {
    case 1:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) | (getbyte64(s,i+2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
        break;
    case 2:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }
    return x.join('');
  }

  var atob = atob || base64.decode;


  w.RB = RB;
  var sources = atob(RB.source).split("|")
    , RB = RB
    , baseUrl = "https://getrockerbox.com/pixel.gif?"
    , anURL = "https://secure.adnxs.com/px?"
    , source = sources[0]
    , encReferrer = encodeURIComponent(w.location.href)
    , processSource = function(x) { 
        s = x.split(":")
        if (s.length == 1) return { an_seg: s[0] , type: "imp" }
        if (s.length == 2) return { seg: s[0] , id: s[1] , type: "conv" }
      }
    , mappings = {}
    , _ = "view|purchase|signup|login".split("|").map(function(type,i) {
        mappings[type] = processSource(sources[i+1])
      })
    , extend = function(base,ext) {
        Object.keys(ext).map(function(k){ base[k] = ext[k] })
      }
    , HTTPBuildQuery = function(values, arg_separator) {
        var key, use_val, use_key
          , tmp_arr = []
          , arg_separator = arg_separator || "&";

        Object.keys(values).map(function(key) {
          var val = values[key];
          if (val) {
            use_val = encodeURIComponent(val.toString());
            use_key = encodeURIComponent(key);
            tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
          }
        });

        return tmp_arr.join(arg_separator);
      }
    , fire = function(href) {
        var ping = new Image();
        ping.src = href;
      }
    , trackConv = function(v) {
        var obj = { t: 2 };
        ["id","seg","order_id","value"].map(function(k){
          if (v[k]) obj[k] = v[k]
        });
        
        var valuesString = HTTPBuildQuery(obj)
          , url = anURL + valuesString;

        fire(url); 
      }


    RB.track = function(action, values) {
      var values = values || {}
        , v = {
            pageReferrer: document.referrer
          , action: action
          , source: source
        }
        , obj = mappings[action] || {};

      extend(v,obj);
      extend(v,values);

      var valuesString = HTTPBuildQuery(v)
        , url = baseUrl + valuesString;

      fire(url);
      if (v.type == "conv") trackConv(v);

    }

    if (!RB.disablePushState) RB.track("view")
    RB.queue.map(function(args){ RB.track(args[0],args[1]) })
    RB.queue = []

})(document,window,window.RB || {})
