/*
 Product Name: dhtmlxGrid 
 Version: 4.6 
 Edition: Standard 
 License: content of this file is covered by GPL. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
 Copyright UAB Dinamenta http://www.dhtmlx.com
 */

if (typeof(window.dhx4) == "undefined") {
    window.dhx4 = {
        version: "4.6", skin: null, skinDetect: function (a) {
            return {10: "dhx_skyblue", 20: "dhx_web", 30: "dhx_terrace"}[this.readFromCss(a + "_skin_detect")] || null
        }, readFromCss: function (c, d) {
            var b = document.createElement("DIV");
            b.className = c;
            if (document.body.firstChild != null) {
                document.body.insertBefore(b, document.body.firstChild)
            } else {
                document.body.appendChild(b)
            }
            var a = b[d || "offsetWidth"];
            b.parentNode.removeChild(b);
            b = null;
            return a
        }, lastId: 1, newId: function () {
            return this.lastId++
        }, zim: {
            data: {}, step: 5, first: function () {
                return 100
            }, last: function () {
                var c = this.first();
                for (var b in this.data) {
                    c = Math.max(c, this.data[b])
                }
                return c
            }, reserve: function (a) {
                this.data[a] = this.last() + this.step;
                return this.data[a]
            }, clear: function (a) {
                if (this.data[a] != null) {
                    this.data[a] = null;
                    delete this.data[a]
                }
            }
        }, s2b: function (a) {
            if (typeof(a) == "string") {
                a = a.toLowerCase()
            }
            return (a == true || a == 1 || a == "true" || a == "1" || a == "yes" || a == "y" || a == "on")
        }, s2j: function (s) {
            var obj = null;
            dhx4.temp = null;
            try {
                eval("dhx4.temp=" + s)
            } catch (e) {
                dhx4.temp = null
            }
            obj = dhx4.temp;
            dhx4.temp = null;
            return obj
        }, absLeft: function (a) {
            if (typeof(a) == "string") {
                a = document.getElementById(a)
            }
            return this.getOffset(a).left
        }, absTop: function (a) {
            if (typeof(a) == "string") {
                a = document.getElementById(a)
            }
            return this.getOffset(a).top
        }, _aOfs: function (a) {
            var c = 0, b = 0;
            while (a) {
                c = c + parseInt(a.offsetTop);
                b = b + parseInt(a.offsetLeft);
                a = a.offsetParent
            }
            return {top: c, left: b}
        }, _aOfsRect: function (d) {
            var g = d.getBoundingClientRect();
            var h = document.body;
            var b = document.documentElement;
            var a = window.pageYOffset || b.scrollTop || h.scrollTop;
            var e = window.pageXOffset || b.scrollLeft || h.scrollLeft;
            var f = b.clientTop || h.clientTop || 0;
            var i = b.clientLeft || h.clientLeft || 0;
            var j = g.top + a - f;
            var c = g.left + e - i;
            return {top: Math.round(j), left: Math.round(c)}
        }, getOffset: function (a) {
            if (a.getBoundingClientRect) {
                return this._aOfsRect(a)
            } else {
                return this._aOfs(a)
            }
        }, _isObj: function (a) {
            return (a != null && typeof(a) == "object" && typeof(a.length) == "undefined")
        }, _copyObj: function (d) {
            if (this._isObj(d)) {
                var c = {};
                for (var b in d) {
                    if (typeof(d[b]) == "object" && d[b] != null) {
                        c[b] = this._copyObj(d[b])
                    } else {
                        c[b] = d[b]
                    }
                }
            } else {
                var c = [];
                for (var b = 0; b < d.length; b++) {
                    if (typeof(d[b]) == "object" && d[b] != null) {
                        c[b] = this._copyObj(d[b])
                    } else {
                        c[b] = d[b]
                    }
                }
            }
            return c
        }, screenDim: function () {
            var a = (navigator.userAgent.indexOf("MSIE") >= 0);
            var b = {};
            b.left = document.body.scrollLeft;
            b.right = b.left + (window.innerWidth || document.body.clientWidth);
            b.top = Math.max((a ? document.documentElement : document.getElementsByTagName("html")[0]).scrollTop, document.body.scrollTop);
            b.bottom = b.top + (a ? Math.max(document.documentElement.clientHeight || 0, document.documentElement.offsetHeight || 0) : window.innerHeight);
            return b
        }, selectTextRange: function (d, g, b) {
            d = (typeof(d) == "string" ? document.getElementById(d) : d);
            var a = d.value.length;
            g = Math.max(Math.min(g, a), 0);
            b = Math.min(b, a);
            if (d.setSelectionRange) {
                try {
                    d.setSelectionRange(g, b)
                } catch (f) {
                }
            } else {
                if (d.createTextRange) {
                    var c = d.createTextRange();
                    c.moveStart("character", g);
                    c.moveEnd("character", b - a);
                    try {
                        c.select()
                    } catch (f) {
                    }
                }
            }
        }, transData: null, transDetect: function () {
            if (this.transData == null) {
                this.transData = {transProp: false, transEv: null};
                var c = {
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    OTransition: "oTransitionEnd",
                    msTransition: "transitionend",
                    transition: "transitionend"
                };
                for (var b in c) {
                    if (this.transData.transProp == false && document.documentElement.style[b] != null) {
                        this.transData.transProp = b;
                        this.transData.transEv = c[b]
                    }
                }
                c = null
            }
            return this.transData
        }, _xmlNodeValue: function (a) {
            var c = "";
            for (var b = 0; b < a.childNodes.length; b++) {
                c += (a.childNodes[b].nodeValue != null ? a.childNodes[b].nodeValue.toString().replace(/^[\n\r\s]{0,}/, "").replace(/[\n\r\s]{0,}$/, "") : "")
            }
            return c
        }
    };
    window.dhx4.isIE = (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0);
    window.dhx4.isIE6 = (window.XMLHttpRequest == null && navigator.userAgent.indexOf("MSIE") >= 0);
    window.dhx4.isIE7 = (navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0);
    window.dhx4.isIE8 = (navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0);
    window.dhx4.isIE9 = (navigator.userAgent.indexOf("MSIE 9.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0);
    window.dhx4.isIE10 = (navigator.userAgent.indexOf("MSIE 10.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0 && window.navigator.pointerEnabled != true);
    window.dhx4.isIE11 = (navigator.userAgent.indexOf("Trident") >= 0 && window.navigator.pointerEnabled == true);
    window.dhx4.isEdge = (navigator.userAgent.indexOf("Edge") >= 0);
    window.dhx4.isOpera = (navigator.userAgent.indexOf("Opera") >= 0);
    window.dhx4.isChrome = (navigator.userAgent.indexOf("Chrome") >= 0) && !window.dhx4.isEdge;
    window.dhx4.isKHTML = (navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0) && !window.dhx4.isEdge;
    window.dhx4.isFF = (navigator.userAgent.indexOf("Firefox") >= 0);
    window.dhx4.isIPad = (navigator.userAgent.search(/iPad/gi) >= 0);
    window.dhx4.dnd = {
        evs: {},
        p_en: ((window.dhx4.isIE || window.dhx4.isEdge) && (window.navigator.pointerEnabled || window.navigator.msPointerEnabled)),
        _mTouch: function (a) {
            return (window.dhx4.isIE10 && a.pointerType == a.MSPOINTER_TYPE_MOUSE || window.dhx4.isIE11 && a.pointerType == "mouse" || window.dhx4.isEdge && a.pointerType == "mouse")
        },
        _touchOn: function (a) {
            if (a == null) {
                a = document.body
            }
            a.style.touchAction = a.style.msTouchAction = "";
            a = null
        },
        _touchOff: function (a) {
            if (a == null) {
                a = document.body
            }
            a.style.touchAction = a.style.msTouchAction = "none";
            a = null
        }
    };
    if (window.navigator.pointerEnabled == true) {
        window.dhx4.dnd.evs = {start: "pointerdown", move: "pointermove", end: "pointerup"}
    } else {
        if (window.navigator.msPointerEnabled == true) {
            window.dhx4.dnd.evs = {start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp"}
        } else {
            if (typeof(window.addEventListener) != "undefined") {
                window.dhx4.dnd.evs = {start: "touchstart", move: "touchmove", end: "touchend"}
            }
        }
    }
}
if (typeof(window.dhx4.template) == "undefined") {
    window.dhx4.trim = function (a) {
        return String(a).replace(/^\s{1,}/, "").replace(/\s{1,}$/, "")
    };
    window.dhx4.template = function (b, c, a) {
        return b.replace(/#([a-z0-9_-]{1,})(\|([^#]*))?#/gi, function () {
            var g = arguments[1];
            var f = window.dhx4.trim(arguments[3]);
            var h = null;
            var e = [c[g]];
            if (f.length > 0) {
                f = f.split(":");
                var d = [];
                for (var i = 0; i < f.length; i++) {
                    if (i > 0 && d[d.length - 1].match(/\\$/) != null) {
                        d[d.length - 1] = d[d.length - 1].replace(/\\$/, "") + ":" + f[i]
                    } else {
                        d.push(f[i])
                    }
                }
                h = d[0];
                for (var i = 1; i < d.length; i++) {
                    e.push(d[i])
                }
            }
            if (typeof(h) == "string" && typeof(window.dhx4.template[h]) == "function") {
                return window.dhx4.template[h].apply(window.dhx4.template, e)
            }
            if (g.length > 0 && typeof(c[g]) != "undefined") {
                if (a == true) {
                    return window.dhx4.trim(c[g])
                }
                return String(c[g])
            }
            return ""
        })
    };
    window.dhx4.template.date = function (a, b) {
        if (a != null) {
            if (a instanceof Date) {
                return window.dhx4.date2str(a, b)
            } else {
                a = a.toString();
                if (a.match(/^\d*$/) != null) {
                    return window.dhx4.date2str(new Date(parseInt(a)), b)
                }
                return a
            }
        }
        return ""
    };
    window.dhx4.template.maxlength = function (b, a) {
        return String(b).substr(0, a)
    };
    window.dhx4.template.number_format = function (d, e, c, a) {
        var b = window.dhx4.template._parseFmt(e, c, a);
        if (b == false) {
            return d
        }
        return window.dhx4.template._getFmtValue(d, b)
    };
    window.dhx4.template.lowercase = function (a) {
        if (typeof(a) == "undefined" || a == null) {
            a = ""
        }
        return String(a).toLowerCase()
    };
    window.dhx4.template.uppercase = function (a) {
        if (typeof(a) == "undefined" || a == null) {
            a = ""
        }
        return String(a).toUpperCase()
    };
    window.dhx4.template._parseFmt = function (h, c, a) {
        var d = h.match(/^([^\.\,0-9]*)([0\.\,]*)([^\.\,0-9]*)/);
        if (d == null || d.length != 4) {
            return false
        }
        var b = {
            i_len: false,
            i_sep: (typeof(c) == "string" ? c : ","),
            d_len: false,
            d_sep: (typeof(a) == "string" ? a : "."),
            s_bef: (typeof(d[1]) == "string" ? d[1] : ""),
            s_aft: (typeof(d[3]) == "string" ? d[3] : "")
        };
        var g = d[2].split(".");
        if (g[1] != null) {
            b.d_len = g[1].length
        }
        var e = g[0].split(",");
        if (e.length > 1) {
            b.i_len = e[e.length - 1].length
        }
        return b
    };
    window.dhx4.template._getFmtValue = function (value, fmt) {
        var r = String(value).match(/^(-)?([0-9]{1,})(\.([0-9]{1,}))?$/);
        if (r != null && r.length == 5) {
            var v0 = "";
            if (r[1] != null) {
                v0 += r[1]
            }
            v0 += fmt.s_bef;
            if (fmt.i_len !== false) {
                var i = 0;
                var v1 = "";
                for (var q = r[2].length - 1; q >= 0; q--) {
                    v1 = "" + r[2].charAt(q) + v1;
                    if (++i == fmt.i_len && q > 0) {
                        v1 = fmt.i_sep + v1;
                        i = 0
                    }
                }
                v0 += v1
            } else {
                v0 += r[2]
            }
            if (fmt.d_len !== false) {
                if (r[4] == null) {
                    r[4] = ""
                }
                while (r[4].length < fmt.d_len) {
                    r[4] += "0"
                }
                eval("dhx4.temp = new RegExp(/\\d{" + fmt.d_len + "}/);");
                var t1 = (r[4]).match(dhx4.temp);
                if (t1 != null) {
                    v0 += fmt.d_sep + t1
                }
                dhx4.temp = t1 = null
            }
            v0 += fmt.s_aft;
            return v0
        }
        return value
    }
}
if (typeof(window.dhx4.dateLang) == "undefined") {
    window.dhx4.dateLang = "en";
    window.dhx4.dateStrings = {
        en: {
            monthFullName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthShortName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayFullName: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayShortName: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        }
    };
    window.dhx4.dateFormat = {en: "%Y-%m-%d"};
    window.dhx4.date2str = function (f, d, a) {
        if (d == null || typeof(d) == "undefined") {
            d = window.dhx4.dateFormat[window.dhx4.dateLang]
        }
        if (a == null || typeof(a) == "undefined") {
            a = window.dhx4.dateStrings[window.dhx4.dateLang]
        }
        if (f instanceof Date) {
            var e = function (g) {
                return (String(g).length == 1 ? "0" + String(g) : g)
            };
            var b = function (i) {
                switch (i) {
                    case"%d":
                        return e(f.getDate());
                    case"%j":
                        return f.getDate();
                    case"%D":
                        return a.dayShortName[f.getDay()];
                    case"%l":
                        return a.dayFullName[f.getDay()];
                    case"%m":
                        return e(f.getMonth() + 1);
                    case"%n":
                        return f.getMonth() + 1;
                    case"%M":
                        return a.monthShortName[f.getMonth()];
                    case"%F":
                        return a.monthFullName[f.getMonth()];
                    case"%y":
                        return e(f.getYear() % 100);
                    case"%Y":
                        return f.getFullYear();
                    case"%g":
                        return (f.getHours() + 11) % 12 + 1;
                    case"%h":
                        return e((f.getHours() + 11) % 12 + 1);
                    case"%G":
                        return f.getHours();
                    case"%H":
                        return e(f.getHours());
                    case"%i":
                        return e(f.getMinutes());
                    case"%s":
                        return e(f.getSeconds());
                    case"%a":
                        return (f.getHours() > 11 ? "pm" : "am");
                    case"%A":
                        return (f.getHours() > 11 ? "PM" : "AM");
                    case"%%":
                        return "%";
                    case"%u":
                        return f.getMilliseconds();
                    case"%P":
                        if (window.dhx4.temp_calendar != null && window.dhx4.temp_calendar.tz != null) {
                            return window.dhx4.temp_calendar.tz
                        }
                        var l = f.getTimezoneOffset();
                        var j = Math.abs(Math.floor(l / 60));
                        var g = Math.abs(l) - j * 60;
                        return (l > 0 ? "-" : "+") + e(j) + ":" + e(g);
                    default:
                        return i
                }
            };
            var c = String(d || window.dhx4.dateFormat).replace(/%[a-zA-Z]/g, b)
        }
        return (c || String(f))
    };
    window.dhx4.str2date = function (g, s, x) {
        if (s == null || typeof(s) == "undefined") {
            s = window.dhx4.dateFormat[window.dhx4.dateLang]
        }
        if (x == null || typeof(x) == "undefined") {
            x = window.dhx4.dateStrings[window.dhx4.dateLang]
        }
        s = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\\:|]/g, "\\$&");
        var u = [];
        var j = [];
        s = s.replace(/%[a-z]/gi, function (e) {
            switch (e) {
                case"%d":
                case"%m":
                case"%y":
                case"%h":
                case"%H":
                case"%i":
                case"%s":
                    j.push(e);
                    return "(\\d{2})";
                case"%D":
                case"%l":
                case"%M":
                case"%F":
                    j.push(e);
                    return "([a-zéûä\u0430-\u044F\u0451]{1,})";
                case"%j":
                case"%n":
                case"%g":
                case"%G":
                    j.push(e);
                    return "(\\d{1,2})";
                case"%Y":
                    j.push(e);
                    return "(\\d{4})";
                case"%a":
                    j.push(e);
                    return "([a|p]m)";
                case"%A":
                    j.push(e);
                    return "([A|P]M)";
                case"%u":
                    j.push(e);
                    return "(\\d{1,6})";
                case"%P":
                    j.push(e);
                    return "([+-]\\d{1,2}:\\d{1,2})"
            }
            return e
        });
        var y = new RegExp(s, "i");
        var l = g.match(y);
        if (l == null || l.length - 1 != j.length) {
            return "Invalid Date"
        }
        for (var b = 1; b < l.length; b++) {
            u.push(l[b])
        }
        var c = {
            "%y": 1,
            "%Y": 1,
            "%n": 2,
            "%m": 2,
            "%M": 2,
            "%F": 2,
            "%d": 3,
            "%j": 3,
            "%a": 4,
            "%A": 4,
            "%H": 5,
            "%G": 5,
            "%h": 5,
            "%g": 5,
            "%i": 6,
            "%s": 7,
            "%u": 7,
            "%P": 7
        };
        var m = {};
        var i = {};
        for (var b = 0; b < j.length; b++) {
            if (typeof(c[j[b]]) != "undefined") {
                var d = c[j[b]];
                if (!m[d]) {
                    m[d] = [];
                    i[d] = []
                }
                m[d].push(u[b]);
                i[d].push(j[b])
            }
        }
        u = [];
        j = [];
        for (var b = 1; b <= 7; b++) {
            if (m[b] != null) {
                for (var o = 0; o < m[b].length; o++) {
                    u.push(m[b][o]);
                    j.push(i[b][o])
                }
            }
        }
        var a = new Date();
        a.setDate(1);
        a.setHours(0);
        a.setMinutes(0);
        a.setSeconds(0);
        a.setMilliseconds(0);
        var n = function (p, e) {
            for (var f = 0; f < e.length; f++) {
                if (e[f].toLowerCase() == p) {
                    return f
                }
            }
            return -1
        };
        for (var b = 0; b < u.length; b++) {
            switch (j[b]) {
                case"%d":
                case"%j":
                case"%n":
                case"%m":
                case"%Y":
                case"%H":
                case"%G":
                case"%i":
                case"%s":
                case"%u":
                    if (!isNaN(u[b])) {
                        a[{
                            "%d": "setDate",
                            "%j": "setDate",
                            "%n": "setMonth",
                            "%m": "setMonth",
                            "%Y": "setFullYear",
                            "%H": "setHours",
                            "%G": "setHours",
                            "%i": "setMinutes",
                            "%s": "setSeconds",
                            "%u": "setMilliseconds"
                        }[j[b]]](Number(u[b]) + (j[b] == "%m" || j[b] == "%n" ? -1 : 0))
                    }
                    break;
                case"%M":
                case"%F":
                    var h = n(u[b].toLowerCase(), x[{"%M": "monthShortName", "%F": "monthFullName"}[j[b]]]);
                    if (h >= 0) {
                        a.setMonth(h)
                    }
                    break;
                case"%y":
                    if (!isNaN(u[b])) {
                        var t = Number(u[b]);
                        a.setFullYear(t + (t > 50 ? 1900 : 2000))
                    }
                    break;
                case"%g":
                case"%h":
                    if (!isNaN(u[b])) {
                        var t = Number(u[b]);
                        if (t <= 12 && t >= 0) {
                            a.setHours(t + (n("pm", u) >= 0 ? (t == 12 ? 0 : 12) : (t == 12 ? -12 : 0)))
                        }
                    }
                    break;
                case"%P":
                    if (window.dhx4.temp_calendar != null) {
                        window.dhx4.temp_calendar.tz = u[b]
                    }
                    break
            }
        }
        return a
    }
}
if (typeof(window.dhx4.ajax) == "undefined") {
    window.dhx4.ajax = {
        cache: false, method: "get", parse: function (a) {
            if (typeof a !== "string") {
                return a
            }
            a = a.replace(/^[\s]+/, "");
            if (window.DOMParser && !dhx4.isIE) {
                var b = (new window.DOMParser()).parseFromString(a, "text/xml")
            } else {
                if (window.ActiveXObject !== window.undefined) {
                    var b = new window.ActiveXObject("Microsoft.XMLDOM");
                    b.async = "false";
                    b.loadXML(a)
                }
            }
            return b
        }, xmltop: function (a, d, c) {
            if (typeof d.status == "undefined" || d.status < 400) {
                xml = (!d.responseXML) ? dhx4.ajax.parse(d.responseText || d) : (d.responseXML || d);
                if (xml && xml.documentElement !== null) {
                    try {
                        if (!xml.getElementsByTagName("parsererror").length) {
                            return xml.getElementsByTagName(a)[0]
                        }
                    } catch (b) {
                    }
                }
            }
            if (c !== -1) {
                dhx4.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], c])
            }
            return document.createElement("DIV")
        }, xpath: function (c, a) {
            if (!a.nodeName) {
                a = a.responseXML || a
            }
            if (dhx4.isIE) {
                try {
                    return a.selectNodes(c) || []
                } catch (f) {
                    return []
                }
            } else {
                var d = [];
                var g;
                var b = (a.ownerDocument || a).evaluate(c, a, null, XPathResult.ANY_TYPE, null);
                while (g = b.iterateNext()) {
                    d.push(g)
                }
                return d
            }
        }, query: function (a) {
            dhx4.ajax._call((a.method || "GET"), a.url, a.data || "", (a.async || true), a.callback, null, a.headers)
        }, get: function (a, b) {
            return this._call("GET", a, null, true, b)
        }, getSync: function (a) {
            return this._call("GET", a, null, false)
        }, put: function (b, a, c) {
            return this._call("PUT", b, a, true, c)
        }, del: function (b, a, c) {
            return this._call("DELETE", b, a, true, c)
        }, post: function (b, a, c) {
            if (arguments.length == 1) {
                a = ""
            } else {
                if (arguments.length == 2 && (typeof(a) == "function" || typeof(window[a]) == "function")) {
                    c = a;
                    a = ""
                } else {
                    a = String(a)
                }
            }
            return this._call("POST", b, a, true, c)
        }, postSync: function (b, a) {
            a = (a == null ? "" : String(a));
            return this._call("POST", b, a, false)
        }, getLong: function (a, b) {
            this._call("GET", a, null, true, b, {url: a})
        }, postLong: function (b, a, c) {
            if (arguments.length == 2 && (typeof(a) == "function" || typeof(window[a]))) {
                c = a;
                a = ""
            }
            this._call("POST", b, a, true, c, {url: b, postData: a})
        }, _call: function (a, b, c, e, g, j, d) {
            var i = (window.XMLHttpRequest && !dhx4.isIE ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
            var f = (navigator.userAgent.match(/AppleWebKit/) != null && navigator.userAgent.match(/Qt/) != null && navigator.userAgent.match(/Safari/) != null);
            if (e == true) {
                i.onreadystatechange = function () {
                    if ((i.readyState == 4) || (f == true && i.readyState == 3)) {
                        if (i.status != 200 || i.responseText == "") {
                            if (!dhx4.callEvent("onAjaxError", [{xmlDoc: i, filePath: b, async: e}])) {
                                return
                            }
                        }
                        window.setTimeout(function () {
                            if (typeof(g) == "function") {
                                g.apply(window, [{xmlDoc: i, filePath: b, async: e}])
                            }
                            if (j != null) {
                                if (typeof(j.postData) != "undefined") {
                                    dhx4.ajax.postLong(j.url, j.postData, g)
                                } else {
                                    dhx4.ajax.getLong(j.url, g)
                                }
                            }
                            g = null;
                            i = null
                        }, 1)
                    }
                }
            }
            if (a == "GET") {
                b += this._dhxr(b)
            }
            i.open(a, b, e);
            if (d != null) {
                for (var h in d) {
                    i.setRequestHeader(h, d[h])
                }
            } else {
                if (a == "POST" || a == "PUT" || a == "DELETE") {
                    i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } else {
                    if (a == "GET") {
                        c = null
                    }
                }
            }
            i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            i.send(c);
            if (e != true) {
                if ((i.readyState == 4) || (f == true && i.readyState == 3)) {
                    if (i.status != 200 || i.responseText == "") {
                        dhx4.callEvent("onAjaxError", [{xmlDoc: i, filePath: b, async: e}])
                    }
                }
            }
            return {xmlDoc: i, filePath: b, async: e}
        }, _dhxr: function (a, b) {
            if (this.cache != true) {
                if (a.match(/^[\?\&]$/) == null) {
                    a = (a.indexOf("?") >= 0 ? "&" : "?")
                }
                if (typeof(b) == "undefined") {
                    b = true
                }
                return a + "dhxr" + new Date().getTime() + (b == true ? "=1" : "")
            }
            return ""
        }
    }
}
if (typeof(window.dhx4._enableDataLoading) == "undefined") {
    window.dhx4._enableDataLoading = function (g, c, f, e, h) {
        if (h == "clear") {
            for (var b in g._dhxdataload) {
                g._dhxdataload[b] = null;
                delete g._dhxdataload[b]
            }
            g._loadData = null;
            g._dhxdataload = null;
            g.load = null;
            g.loadStruct = null;
            g = null;
            return
        }
        g._dhxdataload = {initObj: c, xmlToJson: f, xmlRootTag: e, onBeforeXLS: null};
        g._loadData = function (n, o, p) {
            if (arguments.length == 2) {
                p = o;
                o = null
            }
            var m = null;
            if (arguments.length == 3) {
                p = arguments[2]
            }
            if (typeof(n) == "string") {
                var l = n.replace(/^\s{1,}/, "").replace(/\s{1,}$/, "");
                var s = new RegExp("^<" + this._dhxdataload.xmlRootTag);
                if (s.test(l.replace(/^<\?xml[^\?]*\?>\s*/, ""))) {
                    m = dhx4.ajax.parse(n);
                    if (m != null) {
                        m = this[this._dhxdataload.xmlToJson].apply(this, [m])
                    }
                }
                if (m == null && (l.match(/^[\s\S]*{[.\s\S]*}[\s\S]*$/) != null || l.match(/^[\s\S]*\[[.\s\S]*\][\s\S]*$/) != null)) {
                    m = dhx4.s2j(l)
                }
                if (m == null) {
                    this.callEvent("onXLS", []);
                    var j = [];
                    if (typeof(this._dhxdataload.onBeforeXLS) == "function") {
                        var l = this._dhxdataload.onBeforeXLS.apply(this, [n]);
                        if (l != null && typeof(l) == "object") {
                            if (l.url != null) {
                                n = l.url
                            }
                            if (l.params != null) {
                                for (var q in l.params) {
                                    j.push(q + "=" + encodeURIComponent(l.params[q]))
                                }
                            }
                        }
                    }
                    var r = this;
                    var i = function (a) {
                        var t = null;
                        if ((a.xmlDoc.getResponseHeader("Content-Type") || "").search(/xml/gi) >= 0 || (a.xmlDoc.responseText.replace(/^\s{1,}/, "")).match(/^</) != null) {
                            t = r[r._dhxdataload.xmlToJson].apply(r, [a.xmlDoc.responseXML])
                        } else {
                            t = dhx4.s2j(a.xmlDoc.responseText)
                        }
                        if (t != null) {
                            r[r._dhxdataload.initObj].apply(r, [t, n])
                        }
                        r.callEvent("onXLE", []);
                        if (p != null) {
                            if (typeof(p) == "function") {
                                p.apply(r, [])
                            } else {
                                if (typeof(window[p]) == "function") {
                                    window[p].apply(r, [])
                                }
                            }
                        }
                        i = p = null;
                        t = a = r = null
                    };
                    j = j.join("&") + (typeof(o) == "string" ? "&" + o : "");
                    if (dhx4.ajax.method == "post") {
                        dhx4.ajax.post(n, j, i)
                    } else {
                        if (dhx4.ajax.method == "get") {
                            dhx4.ajax.get(n + (j.length > 0 ? (n.indexOf("?") > 0 ? "&" : "?") + j : ""), i)
                        }
                    }
                    return
                }
            } else {
                if (typeof(n.documentElement) == "object" || (typeof(n.tagName) != "undefined" && typeof(n.getElementsByTagName) != "undefined" && n.getElementsByTagName(this._dhxdataload.xmlRootTag).length > 0)) {
                    m = this[this._dhxdataload.xmlToJson].apply(this, [n])
                } else {
                    m = window.dhx4._copyObj(n)
                }
            }
            if (m != null) {
                this[this._dhxdataload.initObj].apply(this, [m])
            }
            if (p != null) {
                if (typeof(p) == "function") {
                    p.apply(this, [])
                } else {
                    if (typeof(window[p]) == "function") {
                        window[p].apply(this, [])
                    }
                }
                p = null
            }
        };
        if (h != null) {
            var d = {struct: "loadStruct", data: "load"};
            for (var b in h) {
                if (h[b] == true) {
                    g[d[b]] = function () {
                        return this._loadData.apply(this, arguments)
                    }
                }
            }
        }
        g = null
    }
}
if (typeof(window.dhx4._eventable) == "undefined") {
    window.dhx4._eventable = function (a, b) {
        if (b == "clear") {
            a.detachAllEvents();
            a.dhxevs = null;
            a.attachEvent = null;
            a.detachEvent = null;
            a.checkEvent = null;
            a.callEvent = null;
            a.detachAllEvents = null;
            a = null;
            return
        }
        a.dhxevs = {data: {}};
        a.attachEvent = function (c, e) {
            c = String(c).toLowerCase();
            if (!this.dhxevs.data[c]) {
                this.dhxevs.data[c] = {}
            }
            var d = window.dhx4.newId();
            this.dhxevs.data[c][d] = e;
            return d
        };
        a.detachEvent = function (f) {
            for (var d in this.dhxevs.data) {
                var e = 0;
                for (var c in this.dhxevs.data[d]) {
                    if (c == f) {
                        this.dhxevs.data[d][c] = null;
                        delete this.dhxevs.data[d][c]
                    } else {
                        e++
                    }
                }
                if (e == 0) {
                    this.dhxevs.data[d] = null;
                    delete this.dhxevs.data[d]
                }
            }
        };
        a.checkEvent = function (c) {
            c = String(c).toLowerCase();
            return (this.dhxevs.data[c] != null)
        };
        a.callEvent = function (d, f) {
            d = String(d).toLowerCase();
            if (this.dhxevs.data[d] == null) {
                return true
            }
            var e = true;
            for (var c in this.dhxevs.data[d]) {
                e = this.dhxevs.data[d][c].apply(this, f) && e
            }
            return e
        };
        a.detachAllEvents = function () {
            for (var d in this.dhxevs.data) {
                for (var c in this.dhxevs.data[d]) {
                    this.dhxevs.data[d][c] = null;
                    delete this.dhxevs.data[d][c]
                }
                this.dhxevs.data[d] = null;
                delete this.dhxevs.data[d]
            }
        };
        a = null
    };
    dhx4._eventable(dhx4)
}
if (!window.dhtmlxValidation) {
    dhtmlxValidation = function () {
    };
    dhtmlxValidation.prototype = {
        isEmpty: function (a) {
            return a == ""
        }, isNotEmpty: function (a) {
            return (a instanceof Array ? a.length > 0 : !a == "")
        }, isValidBoolean: function (a) {
            return !!a.toString().match(/^(0|1|true|false)$/)
        }, isValidEmail: function (a) {
            return !!a.toString().match(/(^[a-z0-9]([0-9a-z\-_\.]*)@([0-9a-z_\-\.]*)([.][a-z]{3})$)|(^[a-z]([0-9a-z_\.\-]*)@([0-9a-z_\-\.]*)(\.[a-z]{2,4})$)/i)
        }, isValidInteger: function (a) {
            return !!a.toString().match(/(^-?\d+$)/)
        }, isValidNumeric: function (a) {
            return !!a.toString().match(/(^-?\d\d*[\.|,]\d*$)|(^-?\d\d*$)|(^-?[\.|,]\d\d*$)/)
        }, isValidAplhaNumeric: function (a) {
            return !!a.toString().match(/^[_\-a-z0-9]+$/gi)
        }, isValidDatetime: function (b) {
            var a = b.toString().match(/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/);
            return a && !!(a[1] <= 9999 && a[2] <= 12 && a[3] <= 31 && a[4] <= 59 && a[5] <= 59 && a[6] <= 59) || false
        }, isValidDate: function (a) {
            var b = a.toString().match(/^(\d{4})-(\d{2})-(\d{2})$/);
            return b && !!(b[1] <= 9999 && b[2] <= 12 && b[3] <= 31) || false
        }, isValidTime: function (b) {
            var a = b.toString().match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
            return a && !!(a[1] <= 24 && a[2] <= 59 && a[3] <= 59) || false
        }, isValidIPv4: function (a) {
            var b = a.toString().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
            return b && !!(b[1] <= 255 && b[2] <= 255 && b[3] <= 255 && b[4] <= 255) || false
        }, isValidCurrency: function (a) {
            return a.toString().match(/^\$?\s?\d+?([\.,\,]?\d+)?\s?\$?$/) && true || false
        }, isValidSSN: function (a) {
            return a.toString().match(/^\d{3}\-?\d{2}\-?\d{4}$/) && true || false
        }, isValidSIN: function (a) {
            return a.toString().match(/^\d{9}$/) && true || false
        }
    };
    dhtmlxValidation = new dhtmlxValidation()
}
if (typeof(window.dhtmlx) == "undefined") {
    window.dhtmlx = {
        extend: function (d, c) {
            for (var e in c) {
                if (!d[e]) {
                    d[e] = c[e]
                }
            }
            return d
        }, extend_api: function (a, d, c) {
            var b = window[a];
            if (!b) {
                return
            }
            window[a] = function (g) {
                if (g && typeof g == "object" && !g.tagName) {
                    var f = b.apply(this, (d._init ? d._init(g) : arguments));
                    for (var e in dhtmlx) {
                        if (d[e]) {
                            this[d[e]](dhtmlx[e])
                        }
                    }
                    for (var e in g) {
                        if (d[e]) {
                            this[d[e]](g[e])
                        } else {
                            if (e.indexOf("on") === 0) {
                                this.attachEvent(e, g[e])
                            }
                        }
                    }
                } else {
                    var f = b.apply(this, arguments)
                }
                if (d._patch) {
                    d._patch(this)
                }
                return f || this
            };
            window[a].prototype = b.prototype;
            if (c) {
                dhtmlx.extend(window[a].prototype, c)
            }
        }, url: function (a) {
            if (a.indexOf("?") != -1) {
                return "&"
            } else {
                return "?"
            }
        }
    }
}
function dhtmlDragAndDropObject() {
    if (window.dhtmlDragAndDrop) {
        return window.dhtmlDragAndDrop
    }
    this.lastLanding = 0;
    this.dragNode = 0;
    this.dragStartNode = 0;
    this.dragStartObject = 0;
    this.tempDOMU = null;
    this.tempDOMM = null;
    this.waitDrag = 0;
    window.dhtmlDragAndDrop = this;
    return this
}
dhtmlDragAndDropObject.prototype.removeDraggableItem = function (a) {
    a.onmousedown = null;
    a.dragStarter = null;
    a.dragLanding = null
};
dhtmlDragAndDropObject.prototype.addDraggableItem = function (a, b) {
    a.onmousedown = this.preCreateDragCopy;
    a.dragStarter = b;
    this.addDragLanding(a, b)
};
dhtmlDragAndDropObject.prototype.addDragLanding = function (a, b) {
    a.dragLanding = b
};
dhtmlDragAndDropObject.prototype.preCreateDragCopy = function (a) {
    if ((a || window.event) && (a || event).button == 2) {
        return
    }
    if (window.dhtmlDragAndDrop.waitDrag) {
        window.dhtmlDragAndDrop.waitDrag = 0;
        document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU;
        document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM;
        return false
    }
    if (window.dhtmlDragAndDrop.dragNode) {
        window.dhtmlDragAndDrop.stopDrag(a)
    }
    window.dhtmlDragAndDrop.waitDrag = 1;
    window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup;
    window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove;
    window.dhtmlDragAndDrop.dragStartNode = this;
    window.dhtmlDragAndDrop.dragStartObject = this.dragStarter;
    document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy;
    document.body.onmousemove = window.dhtmlDragAndDrop.callDrag;
    window.dhtmlDragAndDrop.downtime = new Date().valueOf();
    if ((a) && (a.preventDefault)) {
        a.preventDefault();
        return false
    }
    return false
};
dhtmlDragAndDropObject.prototype.callDrag = function (c) {
    if (!c) {
        c = window.event
    }
    dragger = window.dhtmlDragAndDrop;
    if ((new Date()).valueOf() - dragger.downtime < 100) {
        return
    }
    if (!dragger.dragNode) {
        if (dragger.waitDrag) {
            dragger.dragNode = dragger.dragStartObject._createDragNode(dragger.dragStartNode, c);
            if (!dragger.dragNode) {
                return dragger.stopDrag()
            }
            dragger.dragNode.onselectstart = function () {
                return false
            };
            dragger.gldragNode = dragger.dragNode;
            document.body.appendChild(dragger.dragNode);
            document.body.onmouseup = dragger.stopDrag;
            dragger.waitDrag = 0;
            dragger.dragNode.pWindow = window;
            dragger.initFrameRoute()
        } else {
            return dragger.stopDrag(c, true)
        }
    }
    if (dragger.dragNode.parentNode != window.document.body && dragger.gldragNode) {
        var a = dragger.gldragNode;
        if (dragger.gldragNode.old) {
            a = dragger.gldragNode.old
        }
        a.parentNode.removeChild(a);
        var b = dragger.dragNode.pWindow;
        if (a.pWindow && a.pWindow.dhtmlDragAndDrop.lastLanding) {
            a.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(a.pWindow.dhtmlDragAndDrop.lastLanding)
        }
        if (_isIE) {
            var f = document.createElement("Div");
            f.innerHTML = dragger.dragNode.outerHTML;
            dragger.dragNode = f.childNodes[0]
        } else {
            dragger.dragNode = dragger.dragNode.cloneNode(true)
        }
        dragger.dragNode.pWindow = window;
        dragger.gldragNode.old = dragger.dragNode;
        document.body.appendChild(dragger.dragNode);
        b.dhtmlDragAndDrop.dragNode = dragger.dragNode
    }
    dragger.dragNode.style.left = c.clientX + 15 + (dragger.fx ? dragger.fx * (-1) : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px";
    dragger.dragNode.style.top = c.clientY + 3 + (dragger.fy ? dragger.fy * (-1) : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px";
    if (!c.srcElement) {
        var d = c.target
    } else {
        d = c.srcElement
    }
    dragger.checkLanding(d, c)
};
dhtmlDragAndDropObject.prototype.calculateFramePosition = function (e) {
    if (window.name) {
        var c = parent.frames[window.name].frameElement.offsetParent;
        var d = 0;
        var b = 0;
        while (c) {
            d += c.offsetLeft;
            b += c.offsetTop;
            c = c.offsetParent
        }
        if ((parent.dhtmlDragAndDrop)) {
            var a = parent.dhtmlDragAndDrop.calculateFramePosition(1);
            d += a.split("_")[0] * 1;
            b += a.split("_")[1] * 1
        }
        if (e) {
            return d + "_" + b
        } else {
            this.fx = d
        }
        this.fy = b
    }
    return "0_0"
};
dhtmlDragAndDropObject.prototype.checkLanding = function (b, a) {
    if ((b) && (b.dragLanding)) {
        if (this.lastLanding) {
            this.lastLanding.dragLanding._dragOut(this.lastLanding)
        }
        this.lastLanding = b;
        this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, a.clientX, a.clientY, a);
        this.lastLanding_scr = (_isIE ? a.srcElement : a.target)
    } else {
        if ((b) && (b.tagName != "BODY")) {
            this.checkLanding(b.parentNode, a)
        } else {
            if (this.lastLanding) {
                this.lastLanding.dragLanding._dragOut(this.lastLanding, a.clientX, a.clientY, a)
            }
            this.lastLanding = 0;
            if (this._onNotFound) {
                this._onNotFound()
            }
        }
    }
};
dhtmlDragAndDropObject.prototype.stopDrag = function (b, c) {
    dragger = window.dhtmlDragAndDrop;
    if (!c) {
        dragger.stopFrameRoute();
        var a = dragger.lastLanding;
        dragger.lastLanding = null;
        if (a) {
            a.dragLanding._drag(dragger.dragStartNode, dragger.dragStartObject, a, (_isIE ? event.srcElement : b.target))
        }
    }
    dragger.lastLanding = null;
    if ((dragger.dragNode) && (dragger.dragNode.parentNode == document.body)) {
        dragger.dragNode.parentNode.removeChild(dragger.dragNode)
    }
    dragger.dragNode = 0;
    dragger.gldragNode = 0;
    dragger.fx = 0;
    dragger.fy = 0;
    dragger.dragStartNode = 0;
    dragger.dragStartObject = 0;
    document.body.onmouseup = dragger.tempDOMU;
    document.body.onmousemove = dragger.tempDOMM;
    dragger.tempDOMU = null;
    dragger.tempDOMM = null;
    dragger.waitDrag = 0
};
dhtmlDragAndDropObject.prototype.stopFrameRoute = function (c) {
    if (c) {
        window.dhtmlDragAndDrop.stopDrag(1, 1)
    }
    for (var a = 0; a < window.frames.length; a++) {
        try {
            if ((window.frames[a] != c) && (window.frames[a].dhtmlDragAndDrop)) {
                window.frames[a].dhtmlDragAndDrop.stopFrameRoute(window)
            }
        } catch (b) {
        }
    }
    try {
        if ((parent.dhtmlDragAndDrop) && (parent != window) && (parent != c)) {
            parent.dhtmlDragAndDrop.stopFrameRoute(window)
        }
    } catch (b) {
    }
};
dhtmlDragAndDropObject.prototype.initFrameRoute = function (c, d) {
    if (c) {
        window.dhtmlDragAndDrop.preCreateDragCopy();
        window.dhtmlDragAndDrop.dragStartNode = c.dhtmlDragAndDrop.dragStartNode;
        window.dhtmlDragAndDrop.dragStartObject = c.dhtmlDragAndDrop.dragStartObject;
        window.dhtmlDragAndDrop.dragNode = c.dhtmlDragAndDrop.dragNode;
        window.dhtmlDragAndDrop.gldragNode = c.dhtmlDragAndDrop.dragNode;
        window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag;
        window.waitDrag = 0;
        if (((!_isIE) && (d)) && ((!_isFF) || (_FFrv < 1.8))) {
            window.dhtmlDragAndDrop.calculateFramePosition()
        }
    }
    try {
        if ((parent.dhtmlDragAndDrop) && (parent != window) && (parent != c)) {
            parent.dhtmlDragAndDrop.initFrameRoute(window)
        }
    } catch (b) {
    }
    for (var a = 0; a < window.frames.length; a++) {
        try {
            if ((window.frames[a] != c) && (window.frames[a].dhtmlDragAndDrop)) {
                window.frames[a].dhtmlDragAndDrop.initFrameRoute(window, ((!c || d) ? 1 : 0))
            }
        } catch (b) {
        }
    }
};
_isFF = false;
_isIE = false;
_isOpera = false;
_isKHTML = false;
_isMacOS = false;
_isChrome = false;
_FFrv = false;
_KHTMLrv = false;
_OperaRv = false;
if (navigator.userAgent.indexOf("Macintosh") != -1) {
    _isMacOS = true
}
if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    _isChrome = true
}
if ((navigator.userAgent.indexOf("Safari") != -1) || (navigator.userAgent.indexOf("Konqueror") != -1)) {
    _KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5));
    if (_KHTMLrv > 525) {
        _isFF = true;
        _FFrv = 1.9
    } else {
        _isKHTML = true
    }
} else {
    if (navigator.userAgent.indexOf("Opera") != -1) {
        _isOpera = true;
        _OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))
    } else {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            _isIE = true;
            if ((navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1 || navigator.appVersion.indexOf("MSIE 10.0") != -1 || document.documentMode > 7) && document.compatMode != "BackCompat") {
                _isIE = 8
            }
        } else {
            if (navigator.appName == "Netscape" && navigator.userAgent.indexOf("Trident") != -1) {
                _isIE = 8
            } else {
                _isFF = true;
                _FFrv = parseFloat(navigator.userAgent.split("rv:")[1])
            }
        }
    }
}
if (typeof(window.dhtmlxEvent) == "undefined") {
    function dhtmlxEvent(b, c, a) {
        if (b.addEventListener) {
            b.addEventListener(c, a, false)
        } else {
            if (b.attachEvent) {
                b.attachEvent("on" + c, a)
            }
        }
    }
}
if (dhtmlxEvent.touchDelay == null) {
    dhtmlxEvent.touchDelay = 2000
}
if (typeof(dhtmlxEvent.initTouch) == "undefined") {
    dhtmlxEvent.initTouch = function () {
        var d;
        var e;
        var b, a;
        dhtmlxEvent(document.body, "touchstart", function (f) {
            e = f.touches[0].target;
            b = f.touches[0].clientX;
            a = f.touches[0].clientY;
            d = window.setTimeout(c, dhtmlxEvent.touchDelay)
        });
        function c() {
            if (e) {
                var f = document.createEvent("HTMLEvents");
                f.initEvent("dblclick", true, true);
                e.dispatchEvent(f);
                d = e = null
            }
        }

        dhtmlxEvent(document.body, "touchmove", function (f) {
            if (d) {
                if (Math.abs(f.touches[0].clientX - b) > 50 || Math.abs(f.touches[0].clientY - a) > 50) {
                    window.clearTimeout(d);
                    d = e = false
                }
            }
        });
        dhtmlxEvent(document.body, "touchend", function (f) {
            if (d) {
                window.clearTimeout(d);
                d = e = false
            }
        });
        dhtmlxEvent.initTouch = function () {
        }
    }
}
function dataProcessor(a) {
    this.serverProcessor = a;
    this.action_param = "!nativeeditor_status";
    this.object = null;
    this.updatedRows = [];
    this.autoUpdate = true;
    this.updateMode = "cell";
    this._tMode = "GET";
    this._headers = null;
    this._payload = null;
    this.post_delim = "_";
    this._waitMode = 0;
    this._in_progress = {};
    this._invalid = {};
    this.mandatoryFields = [];
    this.messages = [];
    this.styles = {
        updated: "font-weight:bold;",
        inserted: "font-weight:bold;",
        deleted: "text-decoration : line-through;",
        invalid: "background-color:FFE0E0;",
        invalid_cell: "border-bottom:2px solid red;",
        error: "color:red;",
        clear: "font-weight:normal;text-decoration:none;"
    };
    this.enableUTFencoding(true);
    dhx4._eventable(this);
    if (this.connector_init) {
        this.setTransactionMode("POST", true);
        this.serverProcessor += (this.serverProcessor.indexOf("?") != -1 ? "&" : "?") + "editing=true"
    }
    return this
}
dataProcessor.prototype = {
    setTransactionMode: function (b, a) {
        if (typeof b == "object") {
            this._tMode = b.mode || this._tMode;
            this._headers = this._headers || b.headers;
            this._payload = this._payload || b.payload
        } else {
            this._tMode = b;
            this._tSend = a
        }
        if (this._tMode == "REST") {
            this._tSend = false;
            this._endnm = true
        }
    }, escape: function (a) {
        if (this._utf) {
            return encodeURIComponent(a)
        } else {
            return escape(a)
        }
    }, enableUTFencoding: function (a) {
        this._utf = dhx4.s2b(a)
    }, setDataColumns: function (a) {
        this._columns = (typeof a == "string") ? a.split(",") : a
    }, getSyncState: function () {
        return !this.updatedRows.length
    }, enableDataNames: function (a) {
        this._endnm = dhx4.s2b(a)
    }, enablePartialDataSend: function (a) {
        this._changed = dhx4.s2b(a)
    }, setUpdateMode: function (b, a) {
        this.autoUpdate = (b == "cell");
        this.updateMode = b;
        this.dnd = a
    }, ignore: function (b, a) {
        this._silent_mode = true;
        b.call(a || window);
        this._silent_mode = false
    }, setUpdated: function (d, c, e) {
        if (this._silent_mode) {
            return
        }
        var b = this.findRow(d);
        e = e || "updated";
        var a = this.obj.getUserData(d, this.action_param);
        if (a && e == "updated") {
            e = a
        }
        if (c) {
            this.set_invalid(d, false);
            this.updatedRows[b] = d;
            this.obj.setUserData(d, this.action_param, e);
            if (this._in_progress[d]) {
                this._in_progress[d] = "wait"
            }
        } else {
            if (!this.is_invalid(d)) {
                this.updatedRows.splice(b, 1);
                this.obj.setUserData(d, this.action_param, "")
            }
        }
        if (!c) {
            this._clearUpdateFlag(d)
        }
        this.markRow(d, c, e);
        if (c && this.autoUpdate) {
            this.sendData(d)
        }
    }, _clearUpdateFlag: function (a) {
    }, markRow: function (f, c, e) {
        var d = "";
        var b = this.is_invalid(f);
        if (b) {
            d = this.styles[b];
            c = true
        }
        if (this.callEvent("onRowMark", [f, c, e, b])) {
            d = this.styles[c ? e : "clear"] + d;
            this.obj[this._methods[0]](f, d);
            if (b && b.details) {
                d += this.styles[b + "_cell"];
                for (var a = 0; a < b.details.length; a++) {
                    if (b.details[a]) {
                        this.obj[this._methods[1]](f, a, d)
                    }
                }
            }
        }
    }, getState: function (a) {
        return this.obj.getUserData(a, this.action_param)
    }, is_invalid: function (a) {
        return this._invalid[a]
    }, set_invalid: function (c, b, a) {
        if (a) {
            b = {
                value: b, details: a, toString: function () {
                    return this.value.toString()
                }
            }
        }
        this._invalid[c] = b
    }, checkBeforeUpdate: function (a) {
        return true
    }, sendData: function (a) {
        if (this._waitMode && (this.obj.mytype == "tree" || this.obj._h2)) {
            return
        }
        if (this.obj.editStop) {
            this.obj.editStop()
        }
        if (typeof a == "undefined" || this._tSend) {
            return this.sendAllData()
        }
        if (this._in_progress[a]) {
            return false
        }
        this.messages = [];
        if (this.getState(a) !== "deleted") {
            if (!this.checkBeforeUpdate(a) && this.callEvent("onValidationError", [a, this.messages])) {
                return false
            }
        }
        this._beforeSendData(this._getRowData(a), a)
    }, _beforeSendData: function (a, b) {
        if (!this.callEvent("onBeforeUpdate", [b, this.getState(b), a])) {
            return false
        }
        this._sendData(a, b)
    }, serialize: function (d, e) {
        if (typeof d == "string") {
            return d
        }
        if (typeof e != "undefined") {
            return this.serialize_one(d, "")
        } else {
            var a = [];
            var c = [];
            for (var b in d) {
                if (d.hasOwnProperty(b)) {
                    a.push(this.serialize_one(d[b], b + this.post_delim));
                    c.push(b)
                }
            }
            a.push("ids=" + this.escape(c.join(",")));
            if (dhtmlx.security_key) {
                a.push("dhx_security=" + dhtmlx.security_key)
            }
            return a.join("&")
        }
    }, serialize_one: function (d, b) {
        if (typeof d == "string") {
            return d
        }
        var a = [];
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                if ((c == "id" || c == this.action_param) && this._tMode == "REST") {
                    continue
                }
                a.push(this.escape((b || "") + c) + "=" + this.escape(d[c]))
            }
        }
        return a.join("&")
    }, _sendData: function (e, f) {
        if (!e) {
            return
        }
        if (!this.callEvent("onBeforeDataSending", f ? [f, this.getState(f), e] : [null, null, e])) {
            return false
        }
        if (f) {
            this._in_progress[f] = (new Date()).valueOf()
        }
        var j = this;
        var i = function (m) {
            var o = [];
            if (f) {
                o.push(f)
            } else {
                if (e) {
                    for (var n in e) {
                        o.push(n)
                    }
                }
            }
            return j.afterUpdate(j, m, o)
        };
        var b = this.serverProcessor + (this._user ? (dhtmlx.url(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.obj.getUserData(0, "version")].join("&")) : "");
        if (this._tMode == "GET") {
            dhx4.ajax.get(b + ((b.indexOf("?") != -1) ? "&" : "?") + this.serialize(e, f), i)
        } else {
            if (this._tMode == "POST") {
                dhx4.ajax.post(b, this.serialize(e, f), i)
            } else {
                if (this._tMode == "REST") {
                    var c = this.getState(f);
                    var d = b.replace(/(\&|\?)editing\=true/, "");
                    var g = d.split("?");
                    if (g[1]) {
                        g[1] = "?" + g[1]
                    }
                    var h = "";
                    var a = "post";
                    if (c == "inserted") {
                        h = this.serialize(e, f)
                    } else {
                        if (c == "deleted") {
                            a = "DELETE";
                            d = g[0] + f + (g[1] || "")
                        } else {
                            a = "PUT";
                            h = this.serialize(e, f);
                            d = g[0] + f + (g[1] || "")
                        }
                    }
                    if (this._payload) {
                        for (var l in this._payload) {
                            d = d + (d.indexOf("?") === -1 ? "?" : "&") + this.escape(l) + "=" + this.escape(this._payload[l])
                        }
                    }
                    dhx4.ajax.query({url: d, method: a, headers: this._headers, data: h, callback: i})
                }
            }
        }
        this._waitMode++
    }, sendAllData: function () {
        if (!this.updatedRows.length) {
            return
        }
        this.messages = [];
        var b = true;
        for (var a = 0; a < this.updatedRows.length; a++) {
            if (this.getState(this.updatedRows[a]) !== "deleted") {
                b &= this.checkBeforeUpdate(this.updatedRows[a])
            }
        }
        if (!b && !this.callEvent("onValidationError", ["", this.messages])) {
            return false
        }
        if (this._tSend) {
            this._sendData(this._getAllData())
        } else {
            for (var a = 0; a < this.updatedRows.length; a++) {
                if (!this._in_progress[this.updatedRows[a]]) {
                    if (this.is_invalid(this.updatedRows[a])) {
                        continue
                    }
                    this._beforeSendData(this._getRowData(this.updatedRows[a]), this.updatedRows[a]);
                    if (this._waitMode && (this.obj.mytype == "tree" || this.obj._h2)) {
                        return
                    }
                }
            }
        }
    }, _getAllData: function (d) {
        var b = {};
        var a = false;
        for (var c = 0; c < this.updatedRows.length; c++) {
            var e = this.updatedRows[c];
            if (this._in_progress[e] || this.is_invalid(e)) {
                continue
            }
            if (!this.callEvent("onBeforeUpdate", [e, this.getState(e), this._getRowData(e)])) {
                continue
            }
            b[e] = this._getRowData(e, e + this.post_delim);
            a = true;
            this._in_progress[e] = (new Date()).valueOf()
        }
        return a ? b : null
    }, setVerificator: function (b, a) {
        this.mandatoryFields[b] = a || (function (c) {
                return (c !== "")
            })
    }, clearVerificator: function (a) {
        this.mandatoryFields[a] = false
    }, findRow: function (b) {
        var a = 0;
        for (a = 0; a < this.updatedRows.length; a++) {
            if (b == this.updatedRows[a]) {
                break
            }
        }
        return a
    }, defineAction: function (a, b) {
        if (!this._uActions) {
            this._uActions = []
        }
        this._uActions[a] = b
    }, afterUpdateCallback: function (b, g, f, e) {
        var a = b;
        var d = (f != "error" && f != "invalid");
        if (!d) {
            this.set_invalid(b, f)
        }
        if ((this._uActions) && (this._uActions[f]) && (!this._uActions[f](e))) {
            return (delete this._in_progress[a])
        }
        if (this._in_progress[a] != "wait") {
            this.setUpdated(b, false)
        }
        var c = b;
        switch (f) {
            case"inserted":
            case"insert":
                if (g != b) {
                    this.obj[this._methods[2]](b, g);
                    b = g
                }
                break;
            case"delete":
            case"deleted":
                this.obj.setUserData(b, this.action_param, "true_deleted");
                this.obj[this._methods[3]](b);
                delete this._in_progress[a];
                return this.callEvent("onAfterUpdate", [b, f, g, e]);
                break
        }
        if (this._in_progress[a] != "wait") {
            if (d) {
                this.obj.setUserData(b, this.action_param, "")
            }
            delete this._in_progress[a]
        } else {
            delete this._in_progress[a];
            this.setUpdated(g, true, this.obj.getUserData(b, this.action_param))
        }
        this.callEvent("onAfterUpdate", [c, f, g, e])
    }, afterUpdate: function (j, h, a) {
        if (window.JSON) {
            try {
                var o = JSON.parse(h.xmlDoc.responseText);
                var d = o.action || this.getState(a) || "updated";
                var b = o.sid || a[0];
                var c = o.tid || a[0];
                j.afterUpdateCallback(b, c, d, o);
                j.finalizeUpdate();
                return
            } catch (l) {
            }
        }
        var n = dhx4.ajax.xmltop("data", h.xmlDoc);
        if (!n || n.tagName == "DIV") {
            return this.cleanUpdate(a)
        }
        var m = dhx4.ajax.xpath("//data/action", n);
        if (!m.length) {
            return this.cleanUpdate(a)
        }
        for (var g = 0; g < m.length; g++) {
            var f = m[g];
            var d = f.getAttribute("type");
            var b = f.getAttribute("sid");
            var c = f.getAttribute("tid");
            j.afterUpdateCallback(b, c, d, f)
        }
        j.finalizeUpdate()
    }, cleanUpdate: function (b) {
        if (b) {
            for (var a = 0; a < b.length; a++) {
                delete this._in_progress[b[a]]
            }
        }
    }, finalizeUpdate: function () {
        if (this._waitMode) {
            this._waitMode--
        }
        if ((this.obj.mytype == "tree" || this.obj._h2) && this.updatedRows.length) {
            this.sendData()
        }
        this.callEvent("onAfterUpdateFinish", []);
        if (!this.updatedRows.length) {
            this.callEvent("onFullSync", [])
        }
    }, init: function (a) {
        this.obj = a;
        if (a._dp_init) {
            a._dp_init(this)
        }
        if (this.connector_init) {
            a._dataprocessor = this
        }
    }, setOnAfterUpdate: function (a) {
        this.attachEvent("onAfterUpdate", a)
    }, enableDebug: function (a) {
    }, setOnBeforeUpdateHandler: function (a) {
        this.attachEvent("onBeforeDataSending", a)
    }, setAutoUpdate: function (c, b) {
        c = c || 2000;
        this._user = b || (new Date()).valueOf();
        this._need_update = false;
        this._update_busy = false;
        this.attachEvent("onAfterUpdate", function (d, f, g, e) {
            this.afterAutoUpdate(d, f, g, e)
        });
        this.attachEvent("onFullSync", function () {
            this.fullSync()
        });
        var a = this;
        window.setInterval(function () {
            a.loadUpdate()
        }, c)
    }, afterAutoUpdate: function (a, c, d, b) {
        if (c == "collision") {
            this._need_update = true;
            return false
        } else {
            return true
        }
    }, fullSync: function () {
        if (this._need_update == true) {
            this._need_update = false;
            this.loadUpdate()
        }
        return true
    }, getUpdates: function (a, b) {
        if (this._update_busy) {
            return false
        } else {
            this._update_busy = true
        }
        dhx4.ajax.get(a, b)
    }, _v: function (a) {
        if (a.firstChild) {
            return a.firstChild.nodeValue
        }
        return ""
    }, _a: function (a) {
        var c = [];
        for (var b = 0; b < a.length; b++) {
            c[b] = this._v(a[b])
        }
        return c
    }, loadUpdate: function () {
        var b = this;
        var a = this.obj.getUserData(0, "version");
        var c = this.serverProcessor + dhtmlx.url(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + a].join("&");
        c = c.replace("editing=true&", "");
        this.getUpdates(c, function (j) {
            var l = dhx4.ajax.xmltop("updates", j.xmlDoc);
            var f = dhx4.ajax.xpath("//userdata", l);
            b.obj.setUserData(0, "version", b._v(f[0]));
            var d = dhx4.ajax.xpath("//update", l);
            if (d.length) {
                b._silent_mode = true;
                for (var g = 0; g < d.length; g++) {
                    var e = d[g].getAttribute("status");
                    var m = d[g].getAttribute("id");
                    var h = d[g].getAttribute("parent");
                    switch (e) {
                        case"inserted":
                            b.callEvent("insertCallback", [d[g], m, h]);
                            break;
                        case"updated":
                            b.callEvent("updateCallback", [d[g], m, h]);
                            break;
                        case"deleted":
                            b.callEvent("deleteCallback", [d[g], m, h]);
                            break
                    }
                }
                b._silent_mode = false
            }
            b._update_busy = false;
            b = null
        })
    }
};
if (window.dataProcessor && !dataProcessor.prototype.init_original) {
    dataProcessor.prototype.connector_init = true
}
function dhtmlXCalendarObject(f, l) {
    this.i = {};
    var c = null;
    if (typeof(f) == "string") {
        var d = document.getElementById(f)
    } else {
        var d = f
    }
    if (d && typeof(d) == "object" && d.tagName && String(d.tagName).toLowerCase() != "input") {
        c = d
    }
    d = null;
    if (typeof(f) != "object" || !f.length) {
        f = [f]
    }
    for (var b = 0; b < f.length; b++) {
        if (typeof(f[b]) == "string") {
            f[b] = (document.getElementById(f[b]) || null)
        }
        if (f[b] != null && f[b].tagName && String(f[b].tagName).toLowerCase() == "input") {
            this.i[window.dhx4.newId()] = {input: f[b]}
        } else {
            if (!(f[b] instanceof Array) && f[b] instanceof Object && (f[b].input != null || f[b].button != null)) {
                if (f[b].input != null && typeof(f[b].input) == "string") {
                    f[b].input = document.getElementById(f[b].input)
                }
                if (f[b].button != null && typeof(f[b].button) == "string") {
                    f[b].button = document.getElementById(f[b].button)
                }
                this.i[window.dhx4.newId()] = f[b]
            }
        }
        f[b] = null
    }
    this.conf = {
        skin: (l || window.dhx4.skin || (typeof(dhtmlx) != "undefined" ? dhtmlx.skin : null) || window.dhx4.skinDetect("dhtmlxcalendar") || "dhx_skyblue"),
        zi: window.dhx4.newId(),
        touch: !window.dhx4.isIE,
        time: true,
        today: false,
        ws_first: true
    };
    this.setSkin = function (m, a) {
        if (this.conf.skin == m && !a) {
            return
        }
        this.conf.skin = m;
        this.base.className = "dhtmlxcalendar_" + this.conf.skin;
        this._ifrSize()
    };
    this.base = document.createElement("DIV");
    this.base.style.display = "none";
    this.base.appendChild(document.createElement("DIV"));
    if (c != null) {
        this._hasParent = true;
        c.appendChild(this.base);
        c = null
    } else {
        document.body.appendChild(this.base)
    }
    this.setParent = function (a) {
        if (this._hasParent) {
            if (typeof(a) == "object") {
                a.appendChild(this.base)
            } else {
                if (typeof(a) == "string") {
                    document.getElementById(a).appendChild(this.base)
                }
            }
        }
    };
    this.setSkin(this.conf.skin, true);
    this.base.onclick = function (a) {
        a = a || event;
        if (a.preventDefault) {
            a.preventDefault()
        }
        a.cancelBubble = true
    };
    this.base.onmousedown = function () {
        return false
    };
    if (this.conf.touch) {
        this.base.ontouchstart = this.base.onclick
    }
    this.loadUserLanguage = function (o) {
        if (!this.langData[o]) {
            return
        }
        this.lang = o;
        this.setWeekStartDay(this.langData[this.lang].weekstart);
        this.setDateFormat(this.langData[this.lang].dateformat || "%Y-%m-%d");
        if (this.msCont) {
            var n = 0;
            for (var m = 0; m < this.msCont.childNodes.length; m++) {
                for (var a = 0; a < this.msCont.childNodes[m].childNodes.length; a++) {
                    this.msCont.childNodes[m].childNodes[a].innerHTML = this.langData[this.lang].monthesSNames[n++]
                }
            }
        }
    };
    this.contMonth = document.createElement("DIV");
    this.contMonth.className = "dhtmlxcalendar_month_cont";
    this.contMonth.onselectstart = function (a) {
        a = a || event;
        a.cancelBubble = true;
        if (a.preventDefault) {
            a.preventDefault()
        } else {
            a.returnValue = false
        }
        return false
    };
    this.base.firstChild.appendChild(this.contMonth);
    var g = document.createElement("UL");
    g.className = "dhtmlxcalendar_line";
    this.contMonth.appendChild(g);
    var j = document.createElement("LI");
    j.className = "dhtmlxcalendar_cell dhtmlxcalendar_month_hdr";
    j.innerHTML = "<div class='dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_left' onmouseover='this.className=\"dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_left_hover\";' onmouseout='this.className=\"dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_left\";'></div><span></span><div class='dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_right' onmouseover='this.className=\"dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_right_hover\";' onmouseout='this.className=\"dhtmlxcalendar_month_arrow dhtmlxcalendar_month_arrow_right\";'></div>";
    g.appendChild(j);
    var e = this;
    j.onclick = function (o) {
        o = o || event;
        if (o.type == "touchstart" && o.preventDefault != null) {
            o.preventDefault()
        }
        var m = (o.target || o.srcElement);
        if (m.className && m.className.indexOf("dhtmlxcalendar_month_arrow") === 0) {
            e._hideSelector();
            var n = (m.parentNode.firstChild == m ? -1 : 1);
            var a = new Date(e._activeMonth);
            e._drawMonth(new Date(e._activeMonth.getFullYear(), e._activeMonth.getMonth() + n, 1, 0, 0, 0, 0));
            e._evOnArrowClick([a, new Date(e._activeMonth)]);
            return
        }
        if (m.className && m.className == "dhtmlxcalendar_month_label_month") {
            o.cancelBubble = true;
            e._showSelector("month", Math.round(m.offsetLeft + m.offsetWidth / 2), m.offsetTop + m.offsetHeight + 2, "selector_month", true);
            return
        }
        if (m.className && m.className == "dhtmlxcalendar_month_label_year") {
            o.cancelBubble = true;
            e._showSelector("year", Math.round(m.offsetLeft + m.offsetWidth / 2), m.offsetTop + m.offsetHeight + 2, "selector_year", true);
            return
        }
        e._hideSelector()
    };
    if (this.conf.touch == true) {
        j.ontouchstart = j.onclick
    }
    this.contDays = document.createElement("DIV");
    this.contDays.className = "dhtmlxcalendar_days_cont";
    this.base.firstChild.appendChild(this.contDays);
    this.setWeekStartDay = function (a) {
        if (a == 0) {
            a = 7
        }
        this._wStart = Math.min(Math.max((isNaN(a) ? 1 : a), 1), 7);
        this._drawDaysOfWeek()
    };
    this._drawDaysOfWeek = function () {
        if (this.contDays.childNodes.length == 0) {
            var o = document.createElement("UL");
            o.className = "dhtmlxcalendar_line";
            this.contDays.appendChild(o)
        } else {
            var o = this.contDays.firstChild
        }
        var m = this._wStart;
        var n = this.langData[this.lang].daysSNames;
        n.push(String(this.langData[this.lang].daysSNames[0]).valueOf());
        for (var p = 0; p < 8; p++) {
            if (o.childNodes[p] == null) {
                var a = document.createElement("LI");
                o.appendChild(a)
            } else {
                var a = o.childNodes[p]
            }
            if (p == 0) {
                a.className = "dhtmlxcalendar_cell_wn";
                a.innerHTML = "<div class='dhtmlxcalendar_label'>" + (this.langData[this.lang].weekname || "w") + "</div>"
            } else {
                a.className = "dhtmlxcalendar_cell" + (m >= 6 ? " dhtmlxcalendar_day_weekday_cell" : "") + (p == 1 ? "_first" : "");
                a.innerHTML = n[m];
                if (++m > 7) {
                    m = 1
                }
            }
        }
        if (this._activeMonth != null) {
            this._drawMonth(this._activeMonth)
        }
    };
    this._wStart = this.langData[this.lang].weekstart;
    this.setWeekStartDay(this._wStart);
    this.contDates = document.createElement("DIV");
    this.contDates.className = "dhtmlxcalendar_dates_cont";
    this.base.firstChild.appendChild(this.contDates);
    this.contDates.onclick = function (q) {
        q = q || event;
        if (q.type == "touchstart" && q.preventDefault != null) {
            q.preventDefault()
        }
        var m = (q.target || q.srcElement);
        if (m.parentNode != null && m.parentNode._date != null) {
            m = m.parentNode
        }
        if (m._date != null && !m._css_dis) {
            var o = e._activeDate.getHours();
            var n = e._activeDate.getMinutes();
            var p = m._date;
            if (e.checkEvent("onBeforeChange")) {
                if (!e.callEvent("onBeforeChange", [new Date(m._date.getFullYear(), m._date.getMonth(), m._date.getDate(), o, n)])) {
                    return
                }
            }
            if (e._activeDateCell != null) {
                e._activeDateCell._css_date = false;
                e._updateCellStyle(e._activeDateCell._q, e._activeDateCell._w)
            }
            var a = (e._activeDate.getFullYear() + "_" + e._activeDate.getMonth() != p.getFullYear() + "_" + p.getMonth());
            e._nullDate = false;
            e._activeDate = new Date(p.getFullYear(), p.getMonth(), p.getDate(), o, n);
            e._activeDateCell = m;
            e._activeDateCell._css_date = true;
            e._activeDateCell._css_hover = false;
            e._updateCellStyle(e._activeDateCell._q, e._activeDateCell._w);
            if (a) {
                e._drawMonth(e._activeDate)
            }
            if (e._activeInp && e.i[e._activeInp] && e.i[e._activeInp].input != null) {
                e.i[e._activeInp].input.value = e._dateToStr(new Date(e._activeDate.getTime()))
            }
            if (!e._hasParent) {
                if (q.type == "touchstart") {
                    window.setTimeout(function () {
                        e._hide()
                    }, 400)
                } else {
                    e._hide()
                }
            }
            e._evOnClick([new Date(e._activeDate.getTime())])
        }
    };
    if (this.conf.touch == true) {
        this.contDates.ontouchstart = this.contDates.onclick
    }
    this.contDates.onmouseover = function (m) {
        m = m || event;
        var a = (m.target || m.srcElement);
        if (a.parentNode != null && a.parentNode._date != null) {
            a = a.parentNode
        }
        if (a._date != null) {
            if (e._lastHover == a || a._css_hover) {
                return
            }
            a._css_hover = true;
            e._updateCellStyle(a._q, a._w);
            e._lastHover = a;
            e._evOnMouseOver([new Date(a._date.getFullYear(), a._date.getMonth(), a._date.getDate(), 0, 0, 0, 0), m]);
            a = null
        }
    };
    this.contDates.onmouseout = function (a) {
        e._clearDayHover(a || event)
    };
    this._lastHover = null;
    this._clearDayHover = function (a) {
        if (!this._lastHover) {
            return
        }
        this._lastHover._css_hover = false;
        this._updateCellStyle(this._lastHover._q, this._lastHover._w);
        if (a != null) {
            e._evOnMouseOut([new Date(this._lastHover._date.getFullYear(), this._lastHover._date.getMonth(), this._lastHover._date.getDate(), 0, 0, 0, 0), a])
        }
        this._lastHover = null
    };
    for (var b = 0; b < 6; b++) {
        var g = document.createElement("UL");
        g.className = "dhtmlxcalendar_line";
        this.contDates.appendChild(g);
        for (var i = 0; i <= 7; i++) {
            var j = document.createElement("LI");
            if (i == 0) {
                j.className = "dhtmlxcalendar_cell_wn"
            } else {
                j.className = "dhtmlxcalendar_cell"
            }
            g.appendChild(j)
        }
    }
    this.contTime = document.createElement("DIV");
    this.contTime.className = "dhtmlxcalendar_time_cont";
    this.contTime.style.display = "none";
    this.base.firstChild.appendChild(this.contTime);
    this.showTime = function () {
        if (this.conf.time != true) {
            this.conf.time = true;
            this._adjustTimeCont()
        }
    };
    this.hideTime = function () {
        if (this.conf.time == true) {
            this.conf.time = false;
            this._adjustTimeCont()
        }
    };
    this.showToday = function () {
        if (this.conf.today != true) {
            this.conf.today = true;
            this._adjustTimeCont()
        }
    };
    this.hideToday = function () {
        if (this.conf.today == true) {
            this.conf.today = false;
            this._adjustTimeCont()
        }
    };
    this._adjustTimeCont = function () {
        var a = "";
        if (this.conf.time == true) {
            a += "_time"
        }
        if (this.conf.today == true) {
            a += "_today"
        }
        if (a == "") {
            this.contTime.style.display = "none"
        } else {
            this.contTime.className = "dhtmlxcalendar_time_cont dhtmlxcalendar_mode" + a;
            this.contTime.style.display = ""
        }
        this._ifrSize()
    };
    this._adjustTimeCont();
    var g = document.createElement("UL");
    g.className = "dhtmlxcalendar_line";
    this.contTime.appendChild(g);
    var j = document.createElement("LI");
    j.className = "dhtmlxcalendar_cell dhtmlxcalendar_time_hdr";
    j.innerHTML = "<div class='dhtmlxcalendar_time_img'></div><span class='dhtmlxcalendar_label_hours'></span><span class='dhtmlxcalendar_label_colon'> : </span><span class='dhtmlxcalendar_label_minutes'></span><span class='dhtmlxcalendar_label_clear'>Clear</span><span class='dhtmlxcalendar_label_today'>Today</span>";
    g.appendChild(j);
    j.onclick = function (n) {
        n = n || event;
        if (n.type == "touchstart" && n.preventDefault != null) {
            n.preventDefault()
        }
        var a = (n.target || n.srcElement);
        if (a.tagName != null && a.tagName.toLowerCase() == "span" && a._par == true && a.parentNode != null) {
            a = a.parentNode
        }
        if (a.className && a.className == "dhtmlxcalendar_label_hours") {
            n.cancelBubble = true;
            var m = e.contMonth.offsetHeight + e.contDays.offsetHeight + e.contDates.offsetHeight + a.offsetTop;
            e._showSelector("hours", Math.round(a.offsetLeft + a.offsetWidth / 2), m - 2, "selector_hours", true);
            return
        }
        if (a.className && a.className == "dhtmlxcalendar_label_minutes") {
            n.cancelBubble = true;
            if (e._minutesInterval == 1) {
                var o = e.getFormatedDate("%i");
                a.innerHTML = "<span class='dhtmlxcalendar_selected_date'>" + o.charAt(0) + "</span>" + o.charAt(1);
                a.firstChild._par = true;
                e._selectorMode = 1
            }
            var m = e.contMonth.offsetHeight + e.contDays.offsetHeight + e.contDates.offsetHeight + a.offsetTop;
            e._showSelector("minutes", Math.round(a.offsetLeft + a.offsetWidth / 2), m - 2, "selector_minutes", true);
            return
        }
        e._hideSelector();
        if (a.className && a.className == "dhtmlxcalendar_label_today") {
            var o = new Date();
            o.setHours(e._activeDate.getHours());
            o.setMinutes(e._activeDate.getMinutes());
            o.setSeconds(e._activeDate.getSeconds());
            e.setDate(o)
        }
        if (a.className && a.className == "dhtmlxcalendar_label_clear") {
            e._nullDate = true;
            e._drawMonth(new Date())
        }
    };
    if (this.conf.touch == true) {
        j.ontouchstart = j.onclick
    }
    this._activeMonth = null;
    this._activeDate = new Date();
    this._activeDateCell = null;
    this.setDate = function (m) {
        window.dhx4.temp_calendar = {tz: null};
        this._nullDate = (typeof(m) == "undefined" || m === "" || !m);
        if (!(m instanceof Date)) {
            m = this._strToDate(String(m || ""));
            if (m == "Invalid Date") {
                m = new Date()
            } else {
                this.conf.tz = window.dhx4.temp_calendar.tz
            }
            window.dhx4.temp_calendar = null
        }
        if (this.conf.tz == null) {
            this.conf.tz = window.dhx4.date2str(m, "%P")
        }
        var a = m.getTime();
        if (this._isOutOfRange(a)) {
            return
        }
        this._activeDate = new Date(a);
        this._drawMonth(this._nullDate ? new Date() : this._activeDate);
        this._updateVisibleHours();
        this._updateVisibleMinutes()
    };
    this.getDate = function (n) {
        if (this._nullDate) {
            return null
        }
        var a = new Date(this._activeDate.getTime());
        if (n) {
            window.dhx4.temp_calendar = {tz: this.conf.tz};
            var m = this._dateToStr(a);
            window.dhx4.temp_calendar = null;
            return m
        }
        return a
    };
    this._drawMonth = function (v) {
        if (!(v instanceof Date)) {
            return
        }
        if (isNaN(v.getFullYear())) {
            v = new Date(this._activeMonth.getFullYear(), this._activeMonth.getMonth(), 1, 0, 0, 0, 0)
        }
        this._activeMonth = new Date(v.getFullYear(), v.getMonth(), 1, 0, 0, 0, 0);
        this._activeDateCell = null;
        var t = new Date(this._activeMonth.getTime());
        var n = t.getDay();
        var z = n - this._wStart;
        if (z < 0) {
            z = z + 7
        }
        t.setDate(t.getDate() - z);
        var D = v.getMonth();
        var E = new Date(this._activeDate.getFullYear(), this._activeDate.getMonth(), this._activeDate.getDate(), 0, 0, 0, 0).getTime();
        var r = 0;
        for (var m = 0; m < 6; m++) {
            var u = this._wStart;
            for (var C = 0; C <= 7; C++) {
                if (C == 0) {
                    var A = this.getWeekNumber(new Date(t.getFullYear(), t.getMonth(), t.getDate() + r, 0, 0, 0, 0));
                    if (A >= 52 && this.conf.ws_first == true && this._activeMonth.getMonth() == 0) {
                        var p = this.getWeekNumber(new Date(t.getFullYear(), t.getMonth(), t.getDate() + r + 7, 0, 0, 0, 0));
                        if (p < A && p > 1) {
                            A = 1
                        }
                    }
                    this.contDates.childNodes[m].childNodes[C].innerHTML = "<div class='dhtmlxcalendar_label'>" + A + "</div>"
                } else {
                    var a = new Date(t.getFullYear(), t.getMonth(), t.getDate() + r, 0, 0, 0, 0);
                    if (a.getHours() != 0) {
                        var s = (a.getHours() > 12 ? 24 - a.getHours() : a.getHours());
                        a.setTime(a.getTime() + 60 * 60 * 1000 * s)
                    }
                    var y = a.getDay();
                    var o = a.getTime();
                    var x = "dhtmlxcalendar_label";
                    if (this._tipData[o] != null) {
                        if (this._tipData[o].usePopup && typeof(window.dhtmlXPopup) == "function") {
                            this.contDates.childNodes[m].childNodes[C].removeAttribute("title");
                            this._initTooltipPopup()
                        } else {
                            this.contDates.childNodes[m].childNodes[C].setAttribute("title", this._tipData[o].text)
                        }
                        if (this._tipData[o].showIcon) {
                            x += " dhtmlxcalendar_label_title"
                        }
                    } else {
                        this.contDates.childNodes[m].childNodes[C].removeAttribute("title")
                    }
                    this.contDates.childNodes[m].childNodes[C].innerHTML = "<div class='" + x + "'>" + a.getDate() + "</div>";
                    this.contDates.childNodes[m].childNodes[C]._date = new Date(o);
                    this.contDates.childNodes[m].childNodes[C]._q = m;
                    this.contDates.childNodes[m].childNodes[C]._w = C;
                    this.contDates.childNodes[m].childNodes[C]._css_month = (a.getMonth() == D);
                    this.contDates.childNodes[m].childNodes[C]._css_date = (!this._nullDate && o == E);
                    this.contDates.childNodes[m].childNodes[C]._css_weekend = (u >= 6);
                    this.contDates.childNodes[m].childNodes[C]._css_dis = this._isOutOfRange(o);
                    this.contDates.childNodes[m].childNodes[C]._css_holiday = (this._holidays[o] == true);
                    this._updateCellStyle(m, C);
                    if (o == E) {
                        this._activeDateCell = this.contDates.childNodes[m].childNodes[C]
                    }
                    if (++u > 7) {
                        u = 1
                    }
                    r++
                }
            }
        }
        this.contMonth.firstChild.firstChild.childNodes[1].innerHTML = this._buildMonthHdr(v)
    };
    this._updateCellStyle = function (o, a) {
        var n = this.contDates.childNodes[o].childNodes[a];
        var m = "dhtmlxcalendar_cell dhtmlxcalendar_cell";
        m += (n._css_month ? "_month" : "");
        m += (n._css_date ? "_date" : "");
        m += (n._css_weekend ? "_weekend" : "");
        m += (n._css_holiday ? "_holiday" : "");
        m += (n._css_dis ? "_dis" : "");
        m += (n._css_hover && !n._css_dis ? "_hover" : "");
        n.className = m;
        n = null
    };
    this._minutesInterval = 5;
    this._initSelector = function (t, o) {
        if (!this._selCover) {
            this._selCover = document.createElement("DIV");
            this._selCover.className = "dhtmlxcalendar_selector_cover";
            this.base.firstChild.appendChild(this._selCover)
        }
        if (!this._sel) {
            this._sel = document.createElement("DIV");
            this._sel.className = "dhtmlxcalendar_selector_obj";
            this.base.firstChild.appendChild(this._sel);
            this._sel.appendChild(document.createElement("TABLE"));
            this._sel.firstChild.className = "dhtmlxcalendar_selector_table";
            this._sel.firstChild.cellSpacing = 0;
            this._sel.firstChild.cellPadding = 0;
            this._sel.firstChild.border = 0;
            this._sel.firstChild.appendChild(document.createElement("TBODY"));
            this._sel.firstChild.firstChild.appendChild(document.createElement("TR"));
            this._sel.firstChild.firstChild.firstChild.appendChild(document.createElement("TD"));
            this._sel.firstChild.firstChild.firstChild.appendChild(document.createElement("TD"));
            this._sel.firstChild.firstChild.firstChild.appendChild(document.createElement("TD"));
            this._sel.firstChild.firstChild.firstChild.childNodes[0].className = "dhtmlxcalendar_selector_cell_left";
            this._sel.firstChild.firstChild.firstChild.childNodes[1].className = "dhtmlxcalendar_selector_cell_middle";
            this._sel.firstChild.firstChild.firstChild.childNodes[2].className = "dhtmlxcalendar_selector_cell_right";
            this._sel.firstChild.firstChild.firstChild.childNodes[0].innerHTML = "&nbsp;";
            this._sel.firstChild.firstChild.firstChild.childNodes[2].innerHTML = "&nbsp;";
            this._sel.firstChild.firstChild.firstChild.childNodes[0].onmouseover = function () {
                this.className = "dhtmlxcalendar_selector_cell_left dhtmlxcalendar_selector_cell_left_hover"
            };
            this._sel.firstChild.firstChild.firstChild.childNodes[0].onmouseout = function () {
                this.className = "dhtmlxcalendar_selector_cell_left"
            };
            this._sel.firstChild.firstChild.firstChild.childNodes[2].onmouseover = function () {
                this.className = "dhtmlxcalendar_selector_cell_right dhtmlxcalendar_selector_cell_right_hover"
            };
            this._sel.firstChild.firstChild.firstChild.childNodes[2].onmouseout = function () {
                this.className = "dhtmlxcalendar_selector_cell_right"
            };
            this._sel.onmouseover = function (w) {
                w = w || event;
                var q = (w.target || w.srcElement);
                if (q._cell === true) {
                    if (e._selHover != q) {
                        e._clearSelHover()
                    }
                    if (String(q.className).match(/^\s{0,}dhtmlxcalendar_selector_cell\s{0,}$/gi) != null) {
                        q.className += " dhtmlxcalendar_selector_cell_hover";
                        e._selHover = q
                    }
                }
            };
            this._sel.onmouseout = function () {
                e._clearSelHover()
            };
            this._sel.firstChild.firstChild.firstChild.childNodes[0].onclick = function (q) {
                q = q || event;
                if (q.type == "touchstart" && q.preventDefault != null) {
                    q.preventDefault()
                }
                q.cancelBubble = true;
                e._scrollYears(-1)
            };
            this._sel.firstChild.firstChild.firstChild.childNodes[2].onclick = function (q) {
                q = q || event;
                if (q.type == "touchstart" && q.preventDefault != null) {
                    q.preventDefault()
                }
                q.cancelBubble = true;
                e._scrollYears(1)
            };
            if (this.conf.touch == true) {
                this._sel.firstChild.firstChild.firstChild.childNodes[0].ontouchstart = this._sel.firstChild.firstChild.firstChild.childNodes[0].onclick;
                this._sel.firstChild.firstChild.firstChild.childNodes[2].ontouchstart = this._sel.firstChild.firstChild.firstChild.childNodes[2].onclick
            }
            this._sel._ta = {};
            this._selHover = null;
            this._sel.appendChild(document.createElement("DIV"));
            this._sel.lastChild.className = "dhtmlxcalendar_selector_obj_arrow"
        }
        if (this._sel._ta[t] == true) {
            return
        }
        if (t == "month") {
            this._msCells = {};
            this.msCont = document.createElement("DIV");
            this.msCont.className = "dhtmlxcalendar_area_" + o;
            this._sel.firstChild.firstChild.firstChild.childNodes[1].appendChild(this.msCont);
            var m = 0;
            for (var a = 0; a < 4; a++) {
                var s = document.createElement("UL");
                s.className = "dhtmlxcalendar_selector_line";
                this.msCont.appendChild(s);
                for (var u = 0; u < 3; u++) {
                    var v = document.createElement("LI");
                    v.innerHTML = this.langData[this.lang].monthesSNames[m];
                    v.className = "dhtmlxcalendar_selector_cell";
                    s.appendChild(v);
                    v._month = m;
                    v._cell = true;
                    this._msCells[m++] = v
                }
            }
            this.msCont.onclick = function (w) {
                w = w || event;
                if (w.type == "touchstart" && w.preventDefault != null) {
                    w.preventDefault()
                }
                w.cancelBubble = true;
                var q = (w.target || w.srcElement);
                if (q._month != null) {
                    e._hideSelector();
                    e._updateActiveMonth();
                    e._drawMonth(new Date(e._activeMonth.getFullYear(), q._month, 1, 0, 0, 0, 0));
                    e._doOnSelectorChange()
                }
            };
            if (this.conf.touch == true) {
                this.msCont.ontouchstart = this.msCont.onclick
            }
        }
        if (t == "year") {
            this._ysCells = {};
            this.ysCont = document.createElement("DIV");
            this.ysCont.className = "dhtmlxcalendar_area_" + o;
            this._sel.firstChild.firstChild.firstChild.childNodes[1].appendChild(this.ysCont);
            for (var a = 0; a < 4; a++) {
                var s = document.createElement("UL");
                s.className = "dhtmlxcalendar_selector_line";
                this.ysCont.appendChild(s);
                for (var u = 0; u < 3; u++) {
                    var v = document.createElement("LI");
                    v.className = "dhtmlxcalendar_selector_cell";
                    v._cell = true;
                    s.appendChild(v)
                }
            }
            this.ysCont.onclick = function (w) {
                w = w || event;
                if (w.type == "touchstart" && w.preventDefault != null) {
                    w.preventDefault()
                }
                w.cancelBubble = true;
                var q = (w.target || w.srcElement);
                if (q._year != null) {
                    e._hideSelector();
                    e._drawMonth(new Date(q._year, e._activeMonth.getMonth(), 1, 0, 0, 0, 0));
                    e._doOnSelectorChange()
                }
            };
            if (this.conf.touch == true) {
                this.ysCont.ontouchstart = this.ysCont.onclick
            }
        }
        if (t == "hours") {
            this._hsCells = {};
            this.hsCont = document.createElement("DIV");
            this.hsCont.className = "dhtmlxcalendar_area_" + o;
            this._sel.firstChild.firstChild.firstChild.childNodes[1].appendChild(this.hsCont);
            var m = 0;
            for (var a = 0; a < 4; a++) {
                var s = document.createElement("UL");
                s.className = "dhtmlxcalendar_selector_line";
                this.hsCont.appendChild(s);
                for (var u = 0; u < 6; u++) {
                    var v = document.createElement("LI");
                    v.innerHTML = this._fixLength(m, 2);
                    v.className = "dhtmlxcalendar_selector_cell";
                    s.appendChild(v);
                    v._hours = m;
                    v._cell = true;
                    this._hsCells[m++] = v
                }
            }
            this.hsCont.onclick = function (w) {
                w = w || event;
                if (w.type == "touchstart" && w.preventDefault != null) {
                    w.preventDefault()
                }
                w.cancelBubble = true;
                var q = (w.target || w.srcElement);
                if (q._hours != null) {
                    e._hideSelector();
                    e._activeDate.setHours(q._hours);
                    e._updateActiveHours();
                    e._updateVisibleHours();
                    e._doOnSelectorChange();
                    e.callEvent("onTimeChange", [new Date(e._activeDate.getTime())])
                }
            };
            if (this.conf.touch == true) {
                this.hsCont.ontouchstart = this.hsCont.onclick
            }
        }
        if (t == "minutes") {
            var r = 4;
            var n = 3;
            var p = 2;
            if (this._minutesInterval == 1) {
                if (this._selectorMode == 1) {
                    r = 2;
                    n = 3;
                    p = 1
                } else {
                    r = 2;
                    n = 5;
                    p = 1;
                    o += "5"
                }
            }
            if (this._minutesInterval == 10) {
                r = 2
            }
            if (this._minutesInterval == 15) {
                r = 1;
                n = 4;
                o += "4"
            }
            this._rsCells = {};
            this.rsCont = document.createElement("DIV");
            this.rsCont.className = "dhtmlxcalendar_area_" + o;
            this._sel.firstChild.firstChild.firstChild.childNodes[1].appendChild(this.rsCont);
            var m = 0;
            for (var a = 0; a < r; a++) {
                var s = document.createElement("UL");
                s.className = "dhtmlxcalendar_selector_line";
                this.rsCont.appendChild(s);
                for (var u = 0; u < n; u++) {
                    var v = document.createElement("LI");
                    v.innerHTML = (p > 1 ? this._fixLength(m, p) : m);
                    v.className = "dhtmlxcalendar_selector_cell";
                    s.appendChild(v);
                    v._minutes = m;
                    v._cell = true;
                    this._rsCells[m] = v;
                    m += this._minutesInterval
                }
            }
            this.rsCont.onclick = function (x) {
                x = x || event;
                if (x.type == "touchstart" && x.preventDefault != null) {
                    x.preventDefault()
                }
                x.cancelBubble = true;
                var w = (x.target || x.srcElement);
                if (w._minutes != null) {
                    if (e._minutesInterval == 1) {
                        var q = e.getFormatedDate("%i");
                        if (e._selectorMode == 1) {
                            q = w._minutes.toString() + q.charAt(1)
                        } else {
                            q = q.charAt(0) + w._minutes.toString()
                        }
                        e._activeDate.setMinutes(Number(q));
                        e.callEvent("onTimeChange", [new Date(e._activeDate.getTime())]);
                        e._hideSelector();
                        if (e._selectorMode == 1) {
                            e._updateVisibleMinutes(true);
                            e._selectorMode = 2;
                            e._showSelector("minutes", e._sel._x, e._sel._y, "selector_minutes", true);
                            e._updateActiveMinutes();
                            return
                        } else {
                            e._selectorMode = 1
                        }
                    } else {
                        e._hideSelector();
                        e._activeDate.setMinutes(w._minutes);
                        e._updateActiveMinutes();
                        e.callEvent("onTimeChange", [new Date(e._activeDate.getTime())])
                    }
                    e._updateVisibleMinutes();
                    e._doOnSelectorChange()
                }
            };
            if (this.conf.touch == true) {
                this.rsCont.ontouchstart = this.rsCont.onclick
            }
        }
        this._sel._ta[t] = true
    };
    this._showSelector = function (p, m, q, o, a) {
        if (a === true && this._sel != null && this._isSelectorVisible() && p == this._sel._t) {
            this._hideSelector();
            return
        }
        if (this.conf.skin == "dhx_terrace") {
            m += 12
        }
        if (!this._sel || !this._sel._ta[p]) {
            this._initSelector(p, o)
        }
        if (p != this._sel._t && this._sel._t == "minutes" && this._minutesInterval == 1) {
            this.contTime.firstChild.firstChild.childNodes[3].innerHTML = this.getFormatedDate("%i")
        }
        this._sel._x = m;
        this._sel._y = q;
        this._sel.style.visibility = "hidden";
        this._sel.style.display = "";
        this._selCover.style.width = this.base.offsetWidth - 2 + "px";
        this._selCover.style.top = this.contMonth.offsetHeight + "px";
        this._selCover.style.height = this.contDates.offsetHeight + this.contDays.offsetHeight - 1 + "px";
        this._selCover.style.display = "";
        this._sel._t = p;
        this._sel.className = "dhtmlxcalendar_selector_obj dhtmlxcalendar_" + o + (p == "hours" && this.conf.today == true ? "2" : "");
        this._sel.childNodes[0].firstChild.firstChild.childNodes[0].style.display = this._sel.childNodes[0].firstChild.firstChild.childNodes[2].style.display = (p == "year" ? "" : "none");
        var n = Math.max(0, m - Math.round(this._sel.offsetWidth / 2));
        if (n + this._sel.offsetWidth > this._sel.parentNode.offsetWidth) {
            n = this._sel.parentNode.offsetWidth - this._sel.offsetWidth
        }
        this._sel.style.left = n + "px";
        if (p == "hours" || p == "minutes") {
            this._sel.style.top = q - this._sel.offsetHeight + "px"
        } else {
            this._sel.style.top = q + "px"
        }
        this._sel.childNodes[1].style.width = this._sel.childNodes[0].offsetWidth + "px";
        this._sel.style.visibility = "visible";
        this._doOnSelectorShow(p)
    };
    this._doOnSelectorShow = function (a) {
        if (a == "month") {
            this._updateActiveMonth()
        }
        if (a == "year") {
            this._updateYearsList(this._activeMonth)
        }
        if (a == "hours") {
            this._updateActiveHours()
        }
        if (a == "minutes") {
            this._updateActiveMinutes()
        }
    };
    this._hideSelector = function (a) {
        if (!this._sel) {
            return
        }
        this._sel.style.display = "none";
        this._sel.style.visible = "hidden";
        this._selCover.style.display = "none";
        if (this._sel._t == "minutes" && this._minutesInterval == 1) {
            this.contTime.firstChild.firstChild.childNodes[3].innerHTML = this.getFormatedDate("%i");
            this._unloadSelector("minutes")
        }
    };
    this._isSelectorVisible = function () {
        if (!this._sel) {
            return false
        }
        return (this._sel.style.display != "none")
    };
    this._doOnSelectorChange = function (a) {
        this.callEvent("onChange", [new Date(this._activeMonth.getFullYear(), this._activeMonth.getMonth(), this._activeDate.getDate(), this._activeDate.getHours(), this._activeDate.getMinutes(), this._activeDate.getSeconds()), a === true])
    };
    this._clearSelHover = function () {
        if (!this._selHover) {
            return
        }
        this._selHover.className = String(this._selHover.className.replace(/dhtmlxcalendar_selector_cell_hover/gi, ""));
        this._selHover = null
    };
    this._unloadSelector = function (n) {
        if (!this._sel) {
            return
        }
        if (!this._sel._ta[n]) {
            return
        }
        if (n == "month") {
            this.msCont.onclick = this.msCont.ontouchstart = null;
            this._msActive = null;
            for (var m in this._msCells) {
                this._msCells[m]._cell = null;
                this._msCells[m]._month = null;
                this._msCells[m].parentNode.removeChild(this._msCells[m]);
                this._msCells[m] = null
            }
            this._msCells = null;
            while (this.msCont.childNodes.length > 0) {
                this.msCont.removeChild(this.msCont.lastChild)
            }
            this.msCont.parentNode.removeChild(this.msCont);
            this.msCont = null
        }
        if (n == "year") {
            this.ysCont.onclick = this.ysCont.ontouchstart = null;
            for (var m in this._ysCells) {
                this._ysCells[m]._cell = null;
                this._ysCells[m]._year = null;
                this._ysCells[m].parentNode.removeChild(this._ysCells[m]);
                this._ysCells[m] = null
            }
            this._ysCells = null;
            while (this.ysCont.childNodes.length > 0) {
                this.ysCont.removeChild(this.ysCont.lastChild)
            }
            this.ysCont.parentNode.removeChild(this.ysCont);
            this.ysCont = null
        }
        if (n == "hours") {
            this.hsCont.onclick = this.hsCont.ontouchstart = null;
            this._hsActive = null;
            for (var m in this._hsCells) {
                this._hsCells[m]._cell = null;
                this._hsCells[m]._hours = null;
                this._hsCells[m].parentNode.removeChild(this._hsCells[m]);
                this._hsCells[m] = null
            }
            this._hsCells = null;
            while (this.hsCont.childNodes.length > 0) {
                this.hsCont.removeChild(this.hsCont.lastChild)
            }
            this.hsCont.parentNode.removeChild(this.hsCont);
            this.hsCont = null
        }
        if (n == "minutes") {
            this.rsCont.onclick = this.rsCont.ontouchstart = null;
            this._rsActive = null;
            for (var m in this._rsCells) {
                this._rsCells[m]._cell = null;
                this._rsCells[m]._minutes = null;
                this._rsCells[m].parentNode.removeChild(this._rsCells[m]);
                this._rsCells[m] = null
            }
            this._rsCells = null;
            while (this.rsCont.childNodes.length > 0) {
                this.rsCont.removeChild(this.rsCont.lastChild)
            }
            this.rsCont.parentNode.removeChild(this.rsCont);
            this.rsCont = null
        }
        this._sel._ta[n] = null
    };
    this.setMinutesInterval = function (a) {
        if (!(a == 1 || a == 5 || a == 10 || a == 15)) {
            return
        }
        this._minutesInterval = a;
        this._unloadSelector("minutes")
    };
    this._updateActiveMonth = function () {
        if (typeof(this._msActive) != "undefined" && typeof(this._msCells[this._msActive]) != "undefined") {
            this._msCells[this._msActive].className = "dhtmlxcalendar_selector_cell"
        }
        this._msActive = this._activeMonth.getMonth();
        this._msCells[this._msActive].className = "dhtmlxcalendar_selector_cell dhtmlxcalendar_selector_cell_active"
    };
    this._updateActiveYear = function () {
        var a = this._activeMonth.getFullYear();
        if (this._ysCells[a]) {
            this._ysCells[a].className = "dhtmlxcalendar_selector_cell dhtmlxcalendar_selector_cell_active"
        }
    };
    this._updateYearsList = function (r) {
        for (var n in this._ysCells) {
            this._ysCells[n] = null;
            delete this._ysCells[n]
        }
        var o = 12 * Math.floor(r.getFullYear() / 12);
        for (var p = 0; p < 4; p++) {
            for (var m = 0; m < 3; m++) {
                this.ysCont.childNodes[p].childNodes[m].innerHTML = o;
                this.ysCont.childNodes[p].childNodes[m]._year = o;
                this.ysCont.childNodes[p].childNodes[m].className = "dhtmlxcalendar_selector_cell";
                this._ysCells[o++] = this.ysCont.childNodes[p].childNodes[m]
            }
        }
        this._updateActiveYear()
    };
    this._scrollYears = function (a) {
        var n = (a < 0 ? this.ysCont.firstChild.firstChild._year : this.ysCont.lastChild.lastChild._year) + a;
        var m = new Date(n, this._activeMonth.getMonth(), 1, 0, 0, 0, 0);
        this._updateYearsList(m)
    };
    this._updateActiveHours = function () {
        if (typeof(this._hsActive) != "undefined" && typeof(this._hsCells[this._hsActive]) != "undefined") {
            this._hsCells[this._hsActive].className = "dhtmlxcalendar_selector_cell"
        }
        this._hsActive = this._activeDate.getHours();
        this._hsCells[this._hsActive].className = "dhtmlxcalendar_selector_cell dhtmlxcalendar_selector_cell_active"
    };
    this._updateVisibleHours = function () {
        this.contTime.firstChild.firstChild.childNodes[1].innerHTML = this._fixLength(this._activeDate.getHours(), 2)
    };
    this._updateActiveMinutes = function () {
        if (this._rsActive != null && typeof(this._rsActive) != "undefined" && typeof(this._rsCells[this._rsActive]) != "undefined") {
            this._rsCells[this._rsActive].className = "dhtmlxcalendar_selector_cell"
        }
        if (this._minutesInterval == 1) {
            this._rsActive = (this.getFormatedDate("%i").toString()).charAt(this._selectorMode == 1 ? 0 : 1)
        } else {
            this._rsActive = this._activeDate.getMinutes()
        }
        if (typeof(this._rsCells[this._rsActive]) != "undefined") {
            this._rsCells[this._rsActive].className = "dhtmlxcalendar_selector_cell dhtmlxcalendar_selector_cell_active"
        }
    };
    this._updateVisibleMinutes = function (m) {
        var a = this._fixLength(this._activeDate.getMinutes(), 2).toString();
        if (m == true) {
            a = a.charAt(0) + "<span class='dhtmlxcalendar_selected_date'>" + a.charAt(1) + "</span>"
        }
        this.contTime.firstChild.firstChild.childNodes[3].innerHTML = a;
        if (m == true) {
            this.contTime.firstChild.firstChild.childNodes[3].lastChild._par = true
        }
    };
    this._fixLength = function (a, m) {
        while (String(a).length < m) {
            a = "0" + String(a)
        }
        return a
    };
    this._dateFormat = "";
    this._dateFormatRE = null;
    this.setDateFormat = function (p) {
        var o = {};
        if (this._strToDate != null) {
            for (var m in this.i) {
                if (this.i[m].input != null && this.i[m].input.value.length > 0) {
                    var q = this._strToDate(this.i[m].input.value, this._dateFormat || this.langData[this.lang].dateformat || "%Y-%m-%d");
                    if (q instanceof Date) {
                        o[m] = q
                    }
                }
            }
        }
        this._dateFormat = p;
        var n = String(this._dateFormat).replace(/%[a-zA-Z]+/g, function (a) {
            var r = a.replace(/%/, "");
            switch (r) {
                case"n":
                case"h":
                case"j":
                case"g":
                case"G":
                    return "\\d{1,2}";
                case"m":
                case"d":
                case"H":
                case"i":
                case"s":
                case"y":
                    return "\\d{2}";
                case"Y":
                    return "\\d{4}";
                case"M":
                    return "(" + e.langData[e.lang].monthesSNames.join("|").toLowerCase() + "){1,}";
                case"F":
                    return "(" + e.langData[e.lang].monthesFNames.join("|").toLowerCase() + "){1,}";
                case"D":
                    return "[a-z]{2}";
                case"a":
                case"A":
                    return "AM|PM";
                case"u":
                    return "\\d{1,6}";
                case"P":
                    return "[\\+\\-]\\d{1,2}\\:\\d{1,2}"
            }
            return a
        });
        this._dateFormatRE = new RegExp(n, "i");
        for (var m in o) {
            this.i[m].input.value = this._dateToStr(o[m])
        }
        o = null
    };
    this.setDateFormat(this.langData[this.lang].dateformat || "%Y-%m-%d");
    this._updateDateStr = function (m) {
        if (!this._dateFormatRE || !m.match(this._dateFormatRE)) {
            return
        }
        if (m == this.getFormatedDate()) {
            return
        }
        var a = this._strToDate(m);
        if (!(a instanceof Date)) {
            return
        }
        if (this.checkEvent("onBeforeChange")) {
            if (!this.callEvent("onBeforeChange", [new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds())])) {
                if (this.i != null && this._activeInp != null && this.i[this._activeInp] != null && this.i[this._activeInp].input != null) {
                    this.i[this._activeInp].input.value = this.getFormatedDate()
                }
                return
            }
        }
        this._nullDate = false;
        this._activeDate = a;
        this._drawMonth(this._nullDate ? new Date() : this._activeDate);
        this._updateVisibleMinutes();
        this._updateVisibleHours();
        if (this._sel && this._isSelectorVisible()) {
            this._doOnSelectorShow(this._sel._t)
        }
        this._doOnSelectorChange(true)
    };
    this.showMonth = function (a) {
        if (typeof(a) == "string") {
            a = this._strToDate(a)
        }
        if (!(a instanceof Date)) {
            return
        }
        this._drawMonth(a)
    };
    this.setFormatedDate = function (p, q, m, o) {
        var n = this._strToDate(q, p);
        if (o) {
            return n
        }
        this.setDate(n)
    };
    this.getFormatedDate = function (m, a) {
        if (!(a && a instanceof Date)) {
            if (this._nullDate) {
                return ""
            }
            a = new Date(this._activeDate)
        }
        return this._dateToStr(a, m)
    };
    this.getWeekNumber = function (q) {
        if (typeof(q) == "string") {
            q = this._strToDate(q)
        }
        if (!(q instanceof Date)) {
            return "Invalid Date"
        }
        if (typeof(this._ftDay) == "undefined") {
            this._ftDay = 4
        }
        var w = this._wStart;
        var p = w + 7;
        var v = 4;
        var n = new Date(q.getFullYear(), 0, 1, 0, 0, 0, 0);
        var o = n.getDay();
        if (o == 0) {
            o = 7
        }
        if (v < w) {
            v += 7;
            o += 7
        }
        var t = 0;
        if (o >= w && o <= v) {
        } else {
            t = 1
        }
        var s = o - w;
        var u = new Date(q.getFullYear(), 0, 1 - s + t * 7, 0, 0, 0, 0);
        var y = 604800000;
        var m = new Date(q.getFullYear(), q.getMonth(), q.getDate() + 1, 0, 0, 0, 0);
        var x = Math.ceil((m.getTime() - u.getTime()) / y);
        if (x == 0) {
            var r = new Date(q.getFullYear(), q.getMonth(), q.getDate(), 0, 0, 0, 0);
            var a = r.getDay() - this._wStart;
            if (a < 0) {
                a = a + 7
            }
            r.setDate(r.getDate() - a);
            x = this.getWeekNumber(r)
        }
        return x
    };
    this.showWeekNumbers = function () {
        this.base.firstChild.className = "dhtmlxcalendar_wn"
    };
    this.hideWeekNumbers = function () {
        this.base.firstChild.className = ""
    };
    this.show = function (n) {
        if (!n && this._hasParent) {
            this._show();
            return
        }
        if (typeof(n) == "object" && typeof(n._dhtmlxcalendar_uid) != "undefined" && this.i[n._dhtmlxcalendar_uid] == n) {
            this._show(n._dhtmlxcalendar_uid);
            return
        }
        if (typeof(n) == "undefined") {
            for (var m in this.i) {
                if (!n) {
                    n = m
                }
            }
        }
        if (!n) {
            return
        }
        this._show(n)
    };
    this.hide = function () {
        if (this._isVisible()) {
            this._hide()
        }
    };
    this.isVisible = function () {
        return this._isVisible()
    };
    this._activeInp = null;
    this.pos = "bottom";
    this.setPosition = function (a, m) {
        this._px = null;
        this._py = null;
        if (a == "right" || a == "bottom") {
            this.pos = a
        } else {
            this.pos = "int";
            if (typeof(a) != "undefined" && !isNaN(a)) {
                this.base.style.left = a + "px";
                this._px = a
            }
            if (typeof(m) != "undefined" && !isNaN(m)) {
                this.base.style.top = m + "px";
                this._py = m
            }
            this._ifrSize()
        }
    };
    this._show = function (r, m) {
        if (m === true && this._activeInp == r && this._isVisible()) {
            this._hide();
            return
        }
        this.base.style.visibility = "hidden";
        this.base.style.display = "";
        if (!r) {
            if (this._px != null && this._py != null) {
                this.base.style.left = this._px + "px";
                this.base.style.top = this._py + "px"
            } else {
                this.base.style.left = "0px";
                this.base.style.top = "0px"
            }
        } else {
            if (this.base.className.indexOf("dhtmlxcalendar_in_input") == -1) {
                this.base.className += " dhtmlxcalendar_in_input"
            }
            var n = (this.i[r].input || this.i[r].button);
            var s = window.dhx4.screenDim();
            var q = {top: window.dhx4.absTop(n), left: window.dhx4.absLeft(n)};
            if (this.pos == "right") {
                this.base.style.left = q.left + n.offsetWidth + "px";
                this.base.style.top = Math.min(q.top, s.bottom - this.base.offsetHeight) + "px"
            } else {
                if (this.pos == "bottom") {
                    var p = q.top + n.offsetHeight + 1;
                    if (p + this.base.offsetHeight > s.bottom) {
                        var o = q.top - this.base.offsetHeight;
                        if (o >= -20) {
                            p = o
                        }
                    }
                    var a = q.left;
                    if (a + this.base.offsetWidth > s.right) {
                        a = Math.max(0, q.left + n.offsetWidth - this.base.offsetWidth)
                    }
                    this.base.style.left = a + "px";
                    this.base.style.top = p + "px"
                } else {
                    this.base.style.left = (this._px || 0) + "px";
                    this.base.style.top = (this._py || 0) + "px"
                }
            }
            this._activeInp = r;
            n = null
        }
        this._hideSelector();
        this.base.style.visibility = "visible";
        this.base.style.zIndex = window.dhx4.zim.reserve(this.conf.zi);
        this._ifrSize();
        if (this._ifr) {
            this._ifr.style.display = ""
        }
        this.callEvent("onShow", [])
    };
    this._hide = function () {
        if (this._lastHover != null) {
            this._clearDayHover()
        }
        this._hideSelector();
        this.base.style.display = "none";
        window.dhx4.zim.clear(this.conf.zi);
        if (this.base.className.indexOf("dhtmlxcalendar_in_input") >= 0) {
            this.base.className = this.base.className.replace(/\s{0,}dhtmlxcalendar_in_input/gi, "")
        }
        this._activeInp = null;
        if (this._ifr) {
            this._ifr.style.display = "none"
        }
        this.callEvent("onHide", [])
    };
    this._isVisible = function () {
        return (this.base.style.display != "none")
    };
    this._rangeActive = false;
    this._rangeFrom = null;
    this._rangeTo = null;
    this._rangeSet = {};
    this.setInsensitiveDays = function (n) {
        var a = this._extractDates(n);
        for (var m = 0; m < a.length; m++) {
            this._rangeSet[new Date(a[m].getFullYear(), a[m].getMonth(), a[m].getDate(), 0, 0, 0, 0).getTime()] = true
        }
        this._drawMonth(this._activeMonth)
    };
    this.clearInsensitiveDays = function () {
        this._clearRangeSet();
        this._drawMonth(this._activeMonth)
    };
    this._holidays = {};
    this.setHolidays = function (m) {
        if (m == null) {
            this._clearHolidays()
        } else {
            if (m != null) {
                var a = this._extractDates(m);
                for (var n = 0; n < a.length; n++) {
                    this._holidays[new Date(a[n].getFullYear(), a[n].getMonth(), a[n].getDate(), 0, 0, 0, 0).getTime()] = true
                }
            }
        }
        this._drawMonth(this._activeMonth)
    };
    this._extractDates = function (n) {
        if (typeof(n) == "string" || n instanceof Date) {
            n = [n]
        }
        var m = [];
        for (var o = 0; o < n.length; o++) {
            if (typeof(n[o]) == "string") {
                var p = n[o].split(",");
                for (var a = 0; a < p.length; a++) {
                    m.push(this._strToDate(p[a]))
                }
            } else {
                if (n[o] instanceof Date) {
                    m.push(n[o])
                }
            }
        }
        return m
    };
    this._clearRange = function () {
        this._rangeActive = false;
        this._rangeType = null;
        this._rangeFrom = null;
        this._rangeTo = null
    };
    this._clearRangeSet = function () {
        for (var m in this._rangeSet) {
            this._rangeSet[m] = null;
            delete this._rangeSet[m]
        }
    };
    this._clearHolidays = function () {
        for (var m in this._holidays) {
            this._holidays[m] = null;
            delete this._holidays[m]
        }
    };
    this._isOutOfRange = function (m) {
        if (this._rangeSet[m] == true) {
            return true
        }
        if (this._rangeActive) {
            if (this._rangeType == "in" && (m < this._rangeFrom || m > this._rangeTo)) {
                return true
            }
            if (this._rangeType == "out" && (m >= this._rangeFrom && m <= this._rangeTo)) {
                return true
            }
            if (this._rangeType == "from" && m < this._rangeFrom) {
                return true
            }
            if (this._rangeType == "to" && m > this._rangeTo) {
                return true
            }
        }
        var a = new Date(m);
        if (this._rangeWeek) {
            if (this._rangeWeekData[a.getDay()] === true) {
                return true
            }
        }
        if (this._rangeMonth) {
            if (this._rangeMonthData[a.getDate()] === true) {
                return true
            }
        }
        if (this._rangeYear) {
            if (this._rangeYearData[a.getMonth() + "_" + a.getDate()] === true) {
                return true
            }
        }
        return false
    };
    this.clearSensitiveRange = function () {
        this._clearRange();
        this._drawMonth(this._activeMonth)
    };
    this.setSensitiveRange = function (o, n, a) {
        var m = false;
        if (o != null && n != null) {
            if (!(o instanceof Date)) {
                o = this._strToDate(o)
            }
            if (!(n instanceof Date)) {
                n = this._strToDate(n)
            }
            if (o.getTime() > n.getTime()) {
                return
            }
            this._rangeFrom = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0).getTime();
            this._rangeTo = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0).getTime();
            this._rangeActive = true;
            this._rangeType = "in";
            m = true
        }
        if (!m && o != null && n == null) {
            if (!(o instanceof Date)) {
                o = this._strToDate(o)
            }
            this._rangeFrom = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0).getTime();
            this._rangeTo = null;
            if (a === true) {
                this._rangeFrom++
            }
            this._rangeActive = true;
            this._rangeType = "from";
            m = true
        }
        if (!m && o == null && n != null) {
            if (!(n instanceof Date)) {
                n = this._strToDate(n)
            }
            this._rangeFrom = null;
            this._rangeTo = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0).getTime();
            if (a === true) {
                this._rangeTo--
            }
            this._rangeActive = true;
            this._rangeType = "to";
            m = true
        }
        if (m) {
            this._drawMonth(this._activeMonth)
        }
    };
    this.setInsensitiveRange = function (m, a) {
        if (m != null && a != null) {
            if (!(m instanceof Date)) {
                m = this._strToDate(m)
            }
            if (!(a instanceof Date)) {
                a = this._strToDate(a)
            }
            if (m.getTime() > a.getTime()) {
                return
            }
            this._rangeFrom = new Date(m.getFullYear(), m.getMonth(), m.getDate(), 0, 0, 0, 0).getTime();
            this._rangeTo = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0).getTime();
            this._rangeActive = true;
            this._rangeType = "out";
            this._drawMonth(this._activeMonth);
            return
        }
        if (m != null && a == null) {
            this.setSensitiveRange(null, m, true);
            return
        }
        if (m == null && a != null) {
            this.setSensitiveRange(a, null, true);
            return
        }
    };
    this.disableDays = function (r, p) {
        if (r == "week") {
            if (typeof(p) != "object" && typeof(p.length) == "undefined") {
                p = [p]
            }
            if (!this._rangeWeekData) {
                this._rangeWeekData = {}
            }
            for (var m in this._rangeWeekData) {
                this._rangeWeekData[m] = false;
                delete this._rangeWeekData[m]
            }
            for (var o = 0; o < p.length; o++) {
                this._rangeWeekData[p[o]] = true;
                if (p[o] == 7) {
                    this._rangeWeekData[0] = true
                }
            }
            this._rangeWeek = true
        }
        if (r == "month") {
            if (typeof(p) != "object" && typeof(p.length) == "undefined") {
                p = [p]
            }
            if (!this._rangeMonthData) {
                this._rangeMonthData = {}
            }
            for (var m in this._rangeMonthData) {
                this._rangeMonthData[m] = false;
                delete this._rangeMonthData[m]
            }
            for (var o = 0; o < p.length; o++) {
                this._rangeMonthData[p[o]] = true
            }
            this._rangeMonth = true
        }
        if (r == "year") {
            var n = this._extractDates(p);
            if (!this._rangeYearData) {
                this._rangeYearData = {}
            }
            for (var m in this._rangeYearData) {
                this._rangeYearData[m] = false;
                delete this._rangeYearData[m]
            }
            for (var o = 0; o < n.length; o++) {
                this._rangeYearData[n[o].getMonth() + "_" + n[o].getDate()] = true
            }
            this._rangeYear = true
        }
        this._drawMonth(this._activeMonth)
    };
    this.enableDays = function (a) {
        if (a == "week") {
            this._rangeWeek = false
        }
        if (a == "month") {
            this._rangeMonth = false
        }
        if (a == "year") {
            this._rangeYear = false
        }
        this._drawMonth(this._activeMonth)
    };
    this._tipData = {};
    this._tipTM = null;
    this._tipTMTime = 400;
    this._tipEvs = false;
    this._tipPopup = null;
    this._tipCellDate = null;
    this._tipCellDim = null;
    this.setTooltip = function (n, r, s, a) {
        var o = this._extractDates(n);
        for (var p = 0; p < o.length; p++) {
            var m = new Date(o[p].getFullYear(), o[p].getMonth(), o[p].getDate(), 0, 0, 0, 0).getTime();
            this._tipData[m] = {text: r, showIcon: s, usePopup: a}
        }
        this._drawMonth(this._activeMonth)
    };
    this.clearTooltip = function (m) {
        var n = this._extractDates(m);
        for (var o = 0; o < n.length; o++) {
            var a = new Date(n[o].getFullYear(), n[o].getMonth(), n[o].getDate(), 0, 0, 0, 0).getTime();
            this._tipData[a] = null;
            delete this._tipData[a]
        }
        this._drawMonth(this._activeMonth)
    };
    this._initTooltipPopup = function () {
        if (this._tipEvs) {
            return
        }
        this.attachEvent("onMouseOver", function (m) {
            var a = new Date(m.getFullYear(), m.getMonth(), m.getDate(), 0, 0, 0, 0).getTime();
            if (this._tipData[a] != null) {
                if (this._tipTM) {
                    window.clearTimeout(this._tipTM)
                }
                this._tipCellDate = m;
                this._tipCellDim = this.getCellDimension(m);
                this._tipText = this._tipData[a].text;
                this._tipTM = window.setTimeout(this._showTooltipPopup, this._tipTMTime)
            }
        });
        this.attachEvent("onMouseOut", this._hideTooltipPopup);
        this._tipEvs = true
    };
    this._showTooltipPopup = function (o, a, p, m, n) {
        if (!e._tipPopup) {
            e._tipPopup = new dhtmlXPopup({mode: "top"})
        }
        e._tipPopup.attachHTML(e._tipText);
        e._tipPopup.show(e._tipCellDim.x, e._tipCellDim.y, e._tipCellDim.w, e._tipCellDim.h);
        e.callEvent("onPopupShow", [e._tipCellDate])
    };
    this._hideTooltipPopup = function () {
        if (this._tipTM) {
            window.clearTimeout(this._tipTM)
        }
        if (this._tipPopup != null && this._tipPopup.isVisible()) {
            this._tipPopup.hide();
            this.callEvent("onPopupHide", [this._tipCellDate])
        }
    };
    this.getPopup = function () {
        return this._tipPopup
    };
    this.getCellDimension = function (n) {
        if (typeof(n) == "string") {
            n = this._strToDate(n)
        }
        if (!(n instanceof Date)) {
            return null
        }
        var o = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0).getTime();
        var m = null;
        for (var r = 0; r < this.contDates.childNodes.length; r++) {
            for (var a = 0; a < this.contDates.childNodes[r].childNodes.length; a++) {
                var s = this.contDates.childNodes[r].childNodes[a];
                if (s._date != null && s._date.getTime() == o) {
                    m = {x: window.dhx4.absLeft(s), y: window.dhx4.absTop(s), w: s.offsetWidth, h: s.offsetHeight}
                }
                s = null
            }
        }
        return m
    };
    this._updateFromInput = function (a) {
        if (this._nullInInput && ((a.value).replace(/\s/g, "")).length == 0) {
            if (this.checkEvent("onBeforeChange")) {
                if (!this.callEvent("onBeforeChange", [null])) {
                    if (this.i != null && this._activeInp != null && this.i[this._activeInp] != null && this.i[this._activeInp].input != null) {
                        this.i[this._activeInp].input.value = this.getFormatedDate()
                    }
                    return
                }
            }
            this.setDate(null)
        } else {
            this._updateDateStr(a.value)
        }
        a = null
    };
    this._doOnClick = function (m) {
        m = m || event;
        var a = (m.target || m.srcElement);
        if (a._dhtmlxcalendar_uid && a._dhtmlxcalendar_uid != e._activeInp && e._isVisible() && e._activeInp) {
            e._hide();
            return
        }
        if (!a._dhtmlxcalendar_uid || !e.i[a._dhtmlxcalendar_uid]) {
            if (e._isSelectorVisible()) {
                e._hideSelector()
            } else {
                if (!e._hasParent && e._isVisible()) {
                    e._hide()
                }
            }
        }
    };
    this._doOnKeyDown = function (a) {
        a = a || event;
        if (a.keyCode == 27 || a.keyCode == 13) {
            if (e._isSelectorVisible()) {
                e._hideSelector()
            } else {
                if (e._isVisible() && !e._hasParent) {
                    e._hide()
                }
            }
        }
    };
    this._doOnInpClick = function (m) {
        m = m || event;
        if (m.type == "touchstart" && m.preventDefault != null) {
            m.preventDefault()
        }
        var a = (m.target || m.srcElement);
        if (!a._dhtmlxcalendar_uid) {
            return
        }
        if (!e._listenerEnabled) {
            e._updateFromInput(a)
        }
        e._show(a._dhtmlxcalendar_uid, true)
    };
    this._doOnInpKeyUp = function (m) {
        m = m || event;
        var a = (m.target || m.srcElement);
        if (m.keyCode == 13 || !a._dhtmlxcalendar_uid) {
            return
        }
        if (!e._listenerEnabled) {
            e._updateFromInput(a)
        }
    };
    this._doOnBtnClick = function (m) {
        m = m || event;
        if (m.type == "touchstart" && m.preventDefault != null) {
            m.preventDefault()
        }
        var a = (m.target || m.srcElement);
        if (!a._dhtmlxcalendar_uid) {
            return
        }
        if (e.i[a._dhtmlxcalendar_uid].input != null) {
            e._updateFromInput(e.i[a._dhtmlxcalendar_uid].input)
        }
        e._show(a._dhtmlxcalendar_uid, true)
    };
    this._doOnUnload = function () {
        if (e && e.unload) {
            e.unload()
        }
    };
    if (typeof(window.addEventListener) == "function") {
        document.body.addEventListener("click", e._doOnClick, false);
        window.addEventListener("keydown", e._doOnKeyDown, false);
        window.addEventListener("unload", e._doOnUnload, false);
        if (this.conf.touch == true) {
            document.body.addEventListener("touchstart", e._doOnClick, false)
        }
    } else {
        document.body.attachEvent("onclick", e._doOnClick);
        document.body.attachEvent("onkeydown", e._doOnKeyDown);
        window.attachEvent("onunload", e._doOnUnload)
    }
    this.attachObj = function (n) {
        var m = window.dhx4.newId();
        if (typeof(n) == "string") {
            this.i[m] = {input: document.getElementById(n)}
        } else {
            if (typeof(n.tagName) != "undefined") {
                this.i[m] = {input: n}
            } else {
                if (typeof(n) == "object" && (n.input != null || n.button != null)) {
                    this.i[m] = {};
                    if (n.input != null) {
                        this.i[m].input = (typeof(n.input) == "string" ? document.getElementById(n.input) : n.input)
                    }
                    if (n.button != null) {
                        this.i[m].button = (typeof(n.button) == "string" ? document.getElementById(n.button) : n.button)
                    }
                }
            }
        }
        this._attachEventsToObject(m);
        return m
    };
    this.detachObj = function (o) {
        var n = null;
        if (this.i[o] != null) {
            n = o
        } else {
            if (typeof(o) == "string") {
                o = document.getElementById(o);
                n = o._dhtmlxcalendar_uid
            } else {
                if (typeof(o.tagName) != "undefined") {
                    n = o._dhtmlxcalendar_uid
                } else {
                    if (typeof(o) == "object" && (o.input != null || o.button != null)) {
                        if (n == null && o.input != null) {
                            n = (typeof(o.input) == "string" ? document.getElementById(o.input) : o.input)._dhtmlxcalendar_uid
                        }
                        if (n == null && o.button != null) {
                            n = (typeof(o.button) == "string" ? document.getElementById(o.button) : o.button)._dhtmlxcalendar_uid
                        }
                    }
                }
            }
        }
        if (n != null && this.i[n] != null) {
            this._detachEventsFromObject(n);
            for (var m in this.i[m]) {
                this.i[n][m]._dhtmlxcalendar_uid = null;
                this.i[n][m] = null;
                delete this.i[n][m]
            }
            this.i[n] = null;
            delete this.i[n];
            return true
        }
        return false
    };
    this._attachEventsToObject = function (m) {
        if (this.i[m].button != null) {
            this.i[m].button._dhtmlxcalendar_uid = m;
            if (typeof(window.addEventListener) == "function") {
                this.i[m].button.addEventListener("click", e._doOnBtnClick, false);
                if (this.conf.touch == true) {
                    this.i[m].button.addEventListener("touchstart", e._doOnBtnClick, false)
                }
            } else {
                this.i[m].button.attachEvent("onclick", e._doOnBtnClick)
            }
        } else {
            if (this.i[m].input != null) {
                this.i[m].input._dhtmlxcalendar_uid = m;
                if (typeof(window.addEventListener) == "function") {
                    this.i[m].input.addEventListener("click", e._doOnInpClick, false);
                    this.i[m].input.addEventListener("keyup", e._doOnInpKeyUp, false);
                    if (this.conf.touch == true) {
                        this.i[m].input.addEventListener("touchstart", e._doOnInpClick, false)
                    }
                } else {
                    this.i[m].input.attachEvent("onclick", e._doOnInpClick);
                    this.i[m].input.attachEvent("onkeyup", e._doOnInpKeyUp)
                }
            }
        }
    };
    this._detachEventsFromObject = function (m) {
        if (this.i[m].button != null) {
            if (typeof(window.addEventListener) == "function") {
                this.i[m].button.removeEventListener("click", e._doOnBtnClick, false);
                if (this.conf.touch == true) {
                    this.i[m].button.removeEventListener("touchstart", e._doOnBtnClick, false)
                }
            } else {
                this.i[m].button.detachEvent("onclick", e._doOnBtnClick)
            }
        } else {
            if (this.i[m].input != null) {
                if (typeof(window.addEventListener) == "function") {
                    this.i[m].input.removeEventListener("click", e._doOnInpClick, false);
                    this.i[m].input.removeEventListener("keyup", e._doOnInpKeyUp, false);
                    if (this.conf.touch == true) {
                        this.i[m].input.removeEventListener("touchstart", e._doOnInpClick, false)
                    }
                } else {
                    this.i[m].input.detachEvent("onclick", e._doOnInpClick);
                    this.i[m].input.detachEvent("onkeyup", e._doOnInpKeyUp)
                }
            }
        }
    };
    this.enableListener = function (a) {
        if (!a) {
            return
        }
        if (typeof(window.addEventListener) == "function") {
            a.addEventListener("focus", e._listenerEvFocus, false);
            a.addEventListener("blur", e._listenerEvBlur, false)
        } else {
            a.attachEvent("onfocus", e._listenerEvFocus);
            a.attachEvent("onblur", e._listenerEvBlur)
        }
        a = null
    };
    this.disableListener = function (a) {
        if (!a) {
            return
        }
        a._f0 = false;
        if (this._tmListener) {
            window.clearTimeout(this._tmListener)
        }
        if (typeof(window.addEventListener) == "function") {
            a.removeEventListener("focus", e._listenerEvFocus, false);
            a.removeEventListener("blur", e._listenerEvBlur, false)
        } else {
            a.detachEvent("onfocus", e._listenerEvFocus);
            a.detachEvent("onblur", e._listenerEvBlur)
        }
        a = null
    };
    this._startListener = function (a) {
        if (this._tmListener) {
            window.clearTimeout(this._tmListener)
        }
        if (typeof(a._v1) == "undefined") {
            a._v1 = a.value
        }
        if (a._v1 != a.value) {
            this._updateFromInput(a);
            a._v1 = a.value
        }
        if (a._f0) {
            this._tmListener = window.setTimeout(function () {
                e._startListener(a)
            }, 100)
        }
    };
    this._listenerEvFocus = function (m) {
        m = m || event;
        var a = m.target || m.srcElement;
        a._f0 = true;
        e._startListener(a);
        a = null
    };
    this._listenerEvBlur = function (m) {
        m = m || event;
        var a = m.target || m.srcElement;
        a._f0 = false;
        a = null
    };
    for (var h in this.i) {
        this._attachEventsToObject(h)
    }
    window.dhx4._eventable(this);
    this._evOnArrowClick = function (a) {
        return this.callEvent("onArrowClick", a)
    };
    this._evOnClick = function (a) {
        return this.callEvent("onClick", a)
    };
    this._evOnMouseOut = function (a) {
        return this.callEvent("onMouseOut", a)
    };
    this._evOnMouseOver = function (a) {
        return this.callEvent("onMouseOver", a)
    };
    this.unload = function () {
        this._activeDate = null;
        this._activeDateCell = null;
        this._activeInp = null;
        this._activeMonth = null;
        this._dateFormat = null;
        this._dateFormatRE = null;
        this._lastHover = null;
        if (this._tmListener) {
            window.clearTimeout(this._tmListener)
        }
        this._tmListener = null;
        if (typeof(window.addEventListener) == "function") {
            document.body.removeEventListener("click", e._doOnClick, false);
            window.removeEventListener("keydown", e._doOnKeyDown, false);
            window.removeEventListener("unload", e._doOnUnload, false);
            if (this.conf.touch == true) {
                document.body.removeEventListener("touchstart", e._doOnClick, false)
            }
        } else {
            document.body.detachEvent("onclick", e._doOnClick);
            document.body.detachEvent("onkeydown", e._doOnKeyDown);
            window.detachEvent("onunload", e._doOnKeyDown)
        }
        this._doOnClick = null;
        this._doOnKeyDown = null;
        this._doOnUnload = null;
        for (var m in this.i) {
            this.i[m]._dhtmlxcalendar_uid = null;
            this._detachEventsFromObject(m);
            this.disableListener(this.i[m].input);
            this.i[m] = null;
            delete this.i[m]
        }
        this.i = null;
        this._doOnInpClick = null;
        this._doOnInpKeyUp = null;
        window.dhx4._eventable(this, "clear");
        this.contMonth.onselectstart = null;
        this.contMonth.firstChild.firstChild.onclick = null;
        this.contMonth.firstChild.firstChild.ontouchstart = null;
        this.contMonth.firstChild.firstChild.firstChild.onmouseover = null;
        this.contMonth.firstChild.firstChild.firstChild.onmouseout = null;
        this.contMonth.firstChild.firstChild.lastChild.onmouseover = null;
        this.contMonth.firstChild.firstChild.lastChild.onmouseout = null;
        while (this.contMonth.firstChild.firstChild.childNodes.length > 0) {
            this.contMonth.firstChild.firstChild.removeChild(this.contMonth.firstChild.firstChild.lastChild)
        }
        this.contMonth.firstChild.removeChild(this.contMonth.firstChild.firstChild);
        this.contMonth.removeChild(this.contMonth.firstChild);
        this.contMonth.parentNode.removeChild(this.contMonth);
        this.contMonth = null;
        while (this.contDays.firstChild.childNodes.length > 0) {
            this.contDays.firstChild.removeChild(this.contDays.firstChild.lastChild)
        }
        this.contDays.removeChild(this.contDays.firstChild);
        this.contDays.parentNode.removeChild(this.contDays);
        this.contDays = null;
        this.contDates.onclick = null;
        this.contDates.ontouchstart = null;
        this.contDates.onmouseover = null;
        this.contDates.onmouseout = null;
        while (this.contDates.childNodes.length > 0) {
            while (this.contDates.lastChild.childNodes.length > 0) {
                this.contDates.lastChild.lastChild._css_date = null;
                this.contDates.lastChild.lastChild._css_month = null;
                this.contDates.lastChild.lastChild._css_weekend = null;
                this.contDates.lastChild.lastChild._css_hover = null;
                this.contDates.lastChild.lastChild._date = null;
                this.contDates.lastChild.lastChild._q = null;
                this.contDates.lastChild.lastChild._w = null;
                this.contDates.lastChild.removeChild(this.contDates.lastChild.lastChild)
            }
            this.contDates.removeChild(this.contDates.lastChild)
        }
        this.contDates.parentNode.removeChild(this.contDates);
        this.contDates = null;
        this.contTime.firstChild.firstChild.onclick = null;
        this.contTime.firstChild.firstChild.ontouchstart = null;
        while (this.contTime.firstChild.firstChild.childNodes.length > 0) {
            this.contTime.firstChild.firstChild.removeChild(this.contTime.firstChild.firstChild.lastChild)
        }
        this.contTime.firstChild.removeChild(this.contTime.firstChild.firstChild);
        this.contTime.removeChild(this.contTime.firstChild);
        this.contTime.parentNode.removeChild(this.contTime);
        this.contTime = null;
        this._lastHover = null;
        this._unloadSelector("month");
        this._unloadSelector("year");
        this._unloadSelector("hours");
        this._unloadSelector("minutes");
        if (this._selCover) {
            this._selCover.parentNode.removeChild(this._selCover);
            this._selCover = null
        }
        if (this._sel) {
            for (var m in this._sel._ta) {
                this._sel._ta[m] = null
            }
            this._sel._ta = null;
            this._sel._t = null;
            this._sel.onmouseover = null;
            this._sel.onmouseout = null;
            while (this._sel.firstChild.firstChild.firstChild.childNodes.length > 0) {
                this._sel.firstChild.firstChild.firstChild.lastChild.onclick = null;
                this._sel.firstChild.firstChild.firstChild.lastChild.onmouseover = null;
                this._sel.firstChild.firstChild.firstChild.lastChild.onmouseout = null;
                this._sel.firstChild.firstChild.firstChild.removeChild(this._sel.firstChild.firstChild.firstChild.lastChild)
            }
            this._sel.firstChild.firstChild.removeChild(this._sel.firstChild.firstChild.firstChild);
            this._sel.firstChild.removeChild(this._sel.firstChild.firstChild);
            while (this._sel.childNodes.length > 0) {
                this._sel.removeChild(this._sel.lastChild)
            }
            this._sel.parentNode.removeChild(this._sel);
            this._sel = null
        }
        this.base.onclick = null;
        this.base.onmousedown = null;
        this.base.ontouchstart = null;
        this.base.onmouseout = null;
        this.base.parentNode.removeChild(this.base);
        this.base = null;
        this._clearDayHover = null;
        this._clearSelHover = null;
        this._doOnSelectorChange = null;
        this._doOnSelectorShow = null;
        this._drawMonth = null;
        this._fixLength = null;
        this._ifrSize = null;
        this._hide = null;
        this._hideSelector = null;
        this._initSelector = null;
        this._isSelectorVisible = null;
        this._isVisible = null;
        this._scrollYears = null;
        this._show = null;
        this._showSelector = null;
        this._strToDate = null;
        this._updateActiveHours = null;
        this._updateActiveMinutes = null;
        this._updateActiveMonth = null;
        this._updateActiveYear = null;
        this._updateCellStyle = null;
        this._updateDateStr = null;
        this._updateVisibleHours = null;
        this._updateVisibleMinutes = null;
        this._updateYearsList = null;
        this.enableIframe = null;
        this.hide = null;
        this.hideTime = null;
        this.setDate = null;
        this.setDateFormat = null;
        this.setYearsRange = null;
        this.show = null;
        this.showTime = null;
        this.unload = null;
        if (this._tipPopup != null) {
            this._tipPopup.unload();
            this._tipPopup = null
        }
        for (var m in this) {
            delete this[m]
        }
        m = e = null
    };
    this.setDate(this._activeDate);
    return this
}
dhtmlXCalendarObject.prototype.lang = "en";
dhtmlXCalendarObject.prototype.langData = {
    en: {
        dateformat: "%Y-%m-%d",
        hdrformat: "%F %Y",
        monthesFNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthesSNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        daysFNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysSNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekstart: 1,
        weekname: "w"
    }
};
dhtmlXCalendarObject.prototype._buildMonthHdr = function (e) {
    var b = this;
    var d = function (f) {
        return (String(f).length == 1 ? "0" + String(f) : f)
    };
    var a = function (f, g) {
        return "<span class='dhtmlxcalendar_month_label_" + f + "'>" + g + "</span>"
    };
    var c = String(this.langData[this.lang].hdrformat || ("%F %Y")).replace(/%[a-z]/gi, function (f) {
        switch (f) {
            case"%m":
                return a("month", d(e.getMonth() + 1));
            case"%n":
                return a("month", e.getMonth() + 1);
            case"%M":
                return a("month", b.langData[b.lang].monthesSNames[e.getMonth()]);
            case"%F":
                return a("month", b.langData[b.lang].monthesFNames[e.getMonth()]);
            case"%y":
                return a("year", d(e.getYear() % 100));
            case"%Y":
                return a("year", e.getFullYear());
            case"%%":
                return "%";
            default:
                return f
        }
    });
    b = d = a = null;
    return c
};
dhtmlXCalendarObject.prototype.enableIframe = function (a) {
    if (a == true) {
        if (!this._ifr) {
            this._ifr = document.createElement("IFRAME");
            this._ifr.frameBorder = 0;
            this._ifr.border = 0;
            this._ifr.setAttribute("src", "javascript:false;");
            this._ifr.className = "dhtmlxcalendar_ifr";
            this._ifr.onload = function () {
                this.onload = null;
                this.contentWindow.document.open("text/html", "replace");
                this.contentWindow.document.write("<html><head><style>html,body{width:100%;height:100%;overflow:hidden;margin:0px;}</style></head><body</body></html>")
            };
            this.base.parentNode.insertBefore(this._ifr, this.base);
            this._ifrSize()
        }
    } else {
        if (this._ifr) {
            this._ifr.parentNode.removeChild(this._ifr);
            this._ifr = null
        }
    }
};
dhtmlXCalendarObject.prototype._ifrSize = function () {
    if (this._ifr) {
        this._ifr.style.left = this.base.style.left;
        this._ifr.style.top = this.base.style.top;
        this._ifr.style.width = this.base.offsetWidth + "px";
        this._ifr.style.height = this.base.offsetHeight + "px"
    }
};
dhtmlxCalendarObject = dhtmlXCalendarObject;
dhtmlXCalendarObject.prototype._dateStrings = function () {
    var a = this.langData[this.lang];
    return {
        monthFullName: a.monthesFNames,
        monthShortName: a.monthesSNames,
        dayFullName: a.daysFNames,
        dayShortName: a.daysSNames
    }
};
dhtmlXCalendarObject.prototype._strToDate = function (b, a) {
    return window.dhx4.str2date(b, a || this._dateFormat, this._dateStrings())
};
dhtmlXCalendarObject.prototype._dateToStr = function (b, a) {
    return window.dhx4.date2str(b, a || this._dateFormat, this._dateStrings())
};
window.dhtmlxDblCalendarObject = window.dhtmlXDoubleCalendarObject = window.dhtmlXDoubleCalendar = function (b) {
    var a = this;
    this.leftCalendar = new dhtmlXCalendarObject(b);
    this.leftCalendar.hideTime();
    this.rightCalendar = new dhtmlXCalendarObject(b);
    this.rightCalendar.hideTime();
    this.leftCalendar.attachEvent("onClick", function (c) {
        a._updateRange("rightCalendar", c, null);
        a._evOnClick(["left", c])
    });
    this.rightCalendar.attachEvent("onClick", function (c) {
        a._updateRange("leftCalendar", null, c);
        a._evOnClick(["right", c])
    });
    this.leftCalendar.attachEvent("onBeforeChange", function (c) {
        return a._evOnBeforeChange(["left", c])
    });
    this.rightCalendar.attachEvent("onBeforeChange", function (c) {
        return a._evOnBeforeChange(["right", c])
    });
    this.show = function () {
        this.leftCalendar.show();
        this.rightCalendar.base.style.marginLeft = this.leftCalendar.base.offsetWidth - 1 + "px";
        this.rightCalendar.show()
    };
    this.hide = function () {
        this.leftCalendar.hide();
        this.rightCalendar.hide()
    };
    this.setDateFormat = function (c) {
        this.leftCalendar.setDateFormat(c);
        this.rightCalendar.setDateFormat(c)
    };
    this.setDates = function (d, c) {
        if (d != null) {
            this.leftCalendar.setDate(d)
        }
        if (c != null) {
            this.rightCalendar.setDate(c)
        }
        this._updateRange()
    };
    this._updateRange = function (c, e, d) {
        if (arguments.length == 3) {
            (c == "leftCalendar" ? this.leftCalendar : this.rightCalendar).setSensitiveRange(e, d)
        } else {
            this.leftCalendar.setSensitiveRange(null, this.rightCalendar.getDate());
            this.rightCalendar.setSensitiveRange(this.leftCalendar.getDate(), null)
        }
    };
    this.getFormatedDate = function () {
        return this.leftCalendar.getFormatedDate.apply(this.leftCalendar, arguments)
    };
    this.unload = function () {
        window.dhx4._eventable(this, "clear");
        this.leftCalendar.unload();
        this.rightCalendar.unload();
        this.leftCalendar = this.rightCalendar = null;
        this._updateRange = null;
        this._evOnClick = null;
        this._evOnBeforeChange = null;
        this.show = null;
        this.hide = null;
        this.setDateFormat = null;
        this.setDates = null;
        this.getFormatedDate = null;
        this.unload = null;
        a = null
    };
    this._evOnClick = function (c) {
        return this.callEvent("onClick", c)
    };
    this._evOnBeforeChange = function (c) {
        return this.callEvent("onBeforeChange", c)
    };
    window.dhx4._eventable(this);
    return this
};
function dhtmlXCombo(f, j, c, h, e) {
    var g = this;
    var d = null;
    var l = null;
    if (typeof(f) == "object" && !f.tagName) {
        d = f;
        f = d.parent;
        c = d.width;
        j = d.name;
        h = d.mode;
        l = d.skin
    }
    this.cont = (typeof(f) == "string" ? document.getElementById(f) : f);
    this.conf = {
        skin: null,
        form_name: j || "dhxcombo",
        combo_width: (parseInt(c) || this.cont.offsetWidth || 120) - (dhx4.isFF || dhx4.isIE || dhx4.isChrome || dhx4.isOpera ? 2 : 0),
        combo_image: false,
        combo_focus: false,
        opts_type: (typeof(h) == "string" && typeof(this.modes[h]) != "undefined" ? h : "option"),
        opts_count: 8,
        opts_count_min: 3,
        opts_width: null,
        item_h: null,
        list_zi_id: window.dhx4.newId(),
        allow_free_text: true,
        allow_empty_value: true,
        free_text_empty: false,
        enabled: true,
        btn_left: ((window.dhx4.isIE6 || window.dhx4.isIE7 || window.dhx4.isIE8) && typeof(window.addEventListener) == "undefined" ? 1 : 0),
        ro_mode: false,
        ro_text: "",
        ro_tm: null,
        ro_tm_time: 750,
        img_path: "",
        img_def: "",
        img_def_dis: true,
        template: {header: true, input: "#text#", option: "#text#"},
        f_func: null,
        f_mode: false,
        f_url: false,
        f_cache: false,
        f_cache_data: {},
        f_dyn: false,
        f_dyn_end: false,
        f_mask: "",
        f_ac: true,
        f_ac_text: "",
        f_server_tm: null,
        f_server_last: "",
        f_loading: false,
        s_tm: null,
        s_time: 200,
        s_mode: "select",
        last_hover: null,
        last_selected: null,
        last_match: null,
        last_text: "",
        last_value: "",
        tm_hover: null,
        tm_confirm_blur: null,
        clear_click: false,
        clear_blur: false,
        clear_bsp: false,
        clear_key: false,
        sp: {
            dhx_skyblue: {list_ofs: 1, hdr_ofs: 1, scr_ofs: 1},
            dhx_web: {list_ofs: 0, hdr_ofs: 1, scr_ofs: 0},
            dhx_terrace: {list_ofs: 1, hdr_ofs: 1, scr_ofs: 1}
        },
        col_w: null
    };
    this.conf.combo_image = (this.modes[this.conf.opts_type].image == true);
    this.t = {};
    this.base = document.createElement("DIV");
    this.base.style.width = this.conf.combo_width + "px";
    this.base.innerHTML = "<input type='text' class='dhxcombo_input' style='width:" + (this.conf.combo_width - 24 - (this.conf.combo_image ? 23 : 0)) + "px;" + (this.conf.combo_image ? "margin-left:23px;" : "") + "' autocomplete='off'><input type='hidden' value=''><input type='hidden' value='false'><div class='dhxcombo_select_button'><div class='dhxcombo_select_img'></div></div>" + (this.conf.combo_image ? "<div class='dhxcombo_top_image'>" + this.modes[this.conf.opts_type].getTopImage(null, this.conf.enabled) + "</div>" : "");
    this.cont.appendChild(this.base);
    this.list = document.createElement("DIV");
    this.list._listId = window.dhx4.newId();
    this.list.style.display = "none";
    document.body.insertBefore(this.list, document.body.firstChild);
    this._doOnListScroll = function () {
        if (g.conf.s_tm != null) {
            window.clearTimeout(g.conf.s_tm)
        }
        g.conf.s_tm = window.setTimeout(g._doOnListScrollAction, g.conf.s_time)
    };
    this._doOnListScrollAction = function () {
        g.conf.s_tm = null;
        if (g.conf.s_mode == "scroll" && g.list.scrollHeight - g.list.scrollTop - 10 < g.list.clientHeight) {
            g._subloadRequest()
        }
    };
    if (typeof(window.addEventListener) == "function") {
        this.list.addEventListener("scroll", this._doOnListScroll, false)
    } else {
        this.list.attachEvent("onscroll", this._doOnListScroll)
    }
    this.setSkin(l || window.dhx4.skin || (typeof(dhtmlx) != "undefined" ? dhtmlx.skin : null) || window.dhx4.skinDetect("dhxcombo") || "dhx_skyblue");
    this._updateTopImage = function (a) {
        if (!this.conf.combo_image) {
            return
        }
        if (a != null) {
            this.base.lastChild.innerHTML = this.t[a].obj.getTopImage(this.t[a].item, this.conf.enabled)
        } else {
            this.base.lastChild.innerHTML = this.modes[this.conf.opts_type].getTopImage(null, this.conf.enabled)
        }
    };
    this._filterOpts = function (u) {
        if (this.conf.f_server_tm) {
            window.clearTimeout(this.conf.f_server_tm)
        }
        var o = String(this.base.firstChild.value).replace(new RegExp(this.conf.f_ac_text + "$", "i"), "");
        if (this.conf.f_server_last == o.toLowerCase()) {
            this._checkForMatch();
            return
        }
        if (this.conf.f_url != null && this.checkEvent("onDynXLS")) {
            this.conf.f_server_last = o.toLowerCase();
            this.callEvent("onDynXLS", [o]);
            return
        }
        if (this.conf.f_url != null) {
            if (o.length == 0) {
                this.conf.f_server_last = o.toLowerCase();
                this.clearAll();
                return
            }
            if (this.conf.f_cache == true && this.conf.f_cache_data[o] != null) {
                this.clearAll();
                this.conf.f_server_last = o.toLowerCase();
                for (var n = 0; n < this.conf.f_cache_data[o].data.length; n++) {
                    this.load(this.conf.f_cache_data[o].data[n])
                }
                if (this.conf.f_dyn) {
                    this.conf.f_dyn_end = this.conf.f_cache_data[o].dyn_end;
                    this.conf.f_mask = this.conf.f_cache_data[o].mask
                }
                if (u !== true) {
                    this._showList(true);
                    this._checkForMatch()
                }
            } else {
                this.conf.f_server_tm = window.setTimeout(function () {
                    g.conf.f_server_last = o.toLowerCase();
                    g.conf.f_mask = o;
                    var q = "mask=" + encodeURIComponent(o);
                    if (g.conf.f_dyn) {
                        q += "&pos=0";
                        g.conf.f_dyn_end = false
                    }
                    var a = function (z) {
                        if (g.conf.f_cache) {
                            if (!g.conf.f_cache_data[o]) {
                                g.conf.f_cache_data[o] = {data: [], dyn_end: false, mask: o}
                            }
                            g.conf.f_cache_data[o].data.push(z.xmlDoc.responseXML)
                        }
                        g.clearAll();
                        g.load(z.xmlDoc.responseXML);
                        var y = (g.base.offsetWidth > 0 && g.base.offsetHeight > 0);
                        if (y == true && g.conf.enabled == true && g.conf.combo_focus == true && u !== true) {
                            if (g.conf.f_ac && g.conf.f_mode == "start" && g.conf.clear_bsp == false && g.list.firstChild != null) {
                                var t = g.list.firstChild._optId;
                                var A = String(g.t[t].obj.getText(g.list.firstChild, true));
                                if (o == g.base.firstChild.value && String(A).toLowerCase().indexOf(String(o).toLowerCase()) === 0) {
                                    g.base.firstChild.value = A;
                                    g.conf.f_ac_text = A.substr(o.length);
                                    g._selectRange(o.length, A.length)
                                }
                            }
                            g._showList(true);
                            g._checkForMatch()
                        }
                        a = null
                    };
                    if (window.dhx4.ajax.method == "post") {
                        window.dhx4.ajax.post(g.conf.f_url, q, a)
                    } else {
                        if (window.dhx4.ajax.method == "get") {
                            window.dhx4.ajax.get(g.conf.f_url + (String(g.conf.f_url).indexOf("?") >= 0 ? "&" : "?") + q, a)
                        }
                    }
                }, 200)
            }
        } else {
            this.conf.f_server_last = o.toLowerCase();
            var m = (o.length == 0 ? true : new RegExp((this.conf.f_mode == "start" ? "^" : "") + String(o).replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/gi, "\\$&"), "i"));
            var p = null;
            for (var v in this.t) {
                var x = false;
                if (m !== true) {
                    if (this.conf.f_func != null) {
                        var s = this._getOption(this.t[v].item._optId, n);
                        x = (this.conf.f_func.apply(window, [o, s]) == true)
                    } else {
                        var w = this.t[v].obj.getText(this.t[v].item, true);
                        x = (m.test(w) == true)
                    }
                }
                if (m === true || x == true) {
                    this.t[v].item.style.display = "";
                    if (p == null && o.length > 0) {
                        p = String(this.t[v].obj.getText(this.t[v].item, true))
                    }
                } else {
                    this.t[v].item.style.display = "none"
                }
            }
            if (this.conf.f_ac && this.conf.f_mode == "start" && this.conf.clear_bsp == false && p != null) {
                this.conf.f_ac_text = p.replace(new RegExp("^" + o, "i"), "");
                this.base.firstChild.value = p;
                this._selectRange(this.conf.f_server_last.length, this.base.firstChild.value.length)
            }
            if (this.conf.f_mode == "between" && this.conf.clear_bsp == true) {
                this._checkForMatch(true)
            }
            if (u !== true) {
                this._showList(true);
                this._checkForMatch()
            }
        }
    };
    this._searchRO = function (m) {
        if (this.conf.ro_tm) {
            window.clearTimeout(this.conf.ro_tm)
        }
        this.conf.ro_text += m;
        this._showList();
        for (var n = 0; n < this.list.childNodes.length; n++) {
            var a = this.list.childNodes[n]._optId;
            var o = String(this.t[a].obj.getText(this.list.childNodes[n], true)).toLowerCase();
            if (o.indexOf(this.conf.ro_text) === 0) {
                this._setSelected(a, true, true);
                this._confirmSelect("script", false);
                break
            }
        }
        this.conf.ro_tm = window.setTimeout(function () {
            g.conf.ro_text = ""
        }, this.conf.ro_tm_time)
    };
    this._initObj = function (a) {
        if (typeof(a.template) != "undefined") {
            this.setTemplate(a.template)
        }
        if (a.add != true && this.conf.f_loading != true) {
            this.clearAll(false)
        }
        this.addOption(a.options)
    };
    this._xmlToObj = function (J, p, o) {
        var u = {add: false, options: []};
        var C = (p == true ? J : J.getElementsByTagName("complete"));
        if (C.length > 0) {
            if (window.dhx4.s2b(C[0].getAttribute("add")) == true) {
                u.add = true
            }
            var A = C[0].childNodes;
            for (var y = 0; y < A.length; y++) {
                if (typeof(A[y].tagName) != "undefined") {
                    if (String(A[y].tagName).toLowerCase() == "template") {
                        var I = {};
                        for (var s = 0; s < A[y].childNodes.length; s++) {
                            var z = A[y].childNodes[s];
                            if (z.tagName != null) {
                                var D = z.tagName;
                                if (typeof(this.conf.template[D]) != "undefined") {
                                    I[D] = window.dhx4._xmlNodeValue(z)
                                }
                                if (D == "columns") {
                                    for (var F = 0; F < z.childNodes.length; F++) {
                                        var r = z.childNodes[F];
                                        if (r.tagName != null && r.tagName == "column") {
                                            var x = {};
                                            for (var H in {width: 1, css: 1, header: 1, option: 1}) {
                                                if (r.getAttribute(H) != null) {
                                                    x[H] = r.getAttribute(H)
                                                }
                                            }
                                            for (var H in {header: 1, option: 1}) {
                                                var E = r.getElementsByTagName(H);
                                                if (E[0] != null && E[0].firstChild != null) {
                                                    x[H] = window.dhx4._xmlNodeValue(E[0])
                                                }
                                            }
                                            if (I.columns == null) {
                                                I.columns = []
                                            }
                                            I.columns.push(x)
                                        }
                                        r = null
                                    }
                                }
                            }
                            z = null
                        }
                        this.setTemplate(I)
                    }
                    if (String(A[y].tagName).toLowerCase() == "option") {
                        var v = false;
                        if (p == true) {
                            v = (u.options.length == o)
                        } else {
                            v = window.dhx4.s2b(A[y].getAttribute("selected"))
                        }
                        var m = {
                            value: A[y].getAttribute("value"),
                            text: window.dhx4._xmlNodeValue(A[y]),
                            selected: v,
                            checked: window.dhx4.s2b(A[y].getAttribute("checked"))
                        };
                        for (var H in {img: 1, img_dis: 1, img_src: 1, img_src_dis: 1, css: 1}) {
                            if (A[y].getAttribute(H) != null) {
                                m[H] = A[y].getAttribute(H)
                            }
                        }
                        for (var s = 0; s < A[y].childNodes.length; s++) {
                            if (A[y].childNodes[s].tagName != null && String(A[y].childNodes[s].tagName).toLowerCase() == "text") {
                                m.text = {};
                                var z = A[y].childNodes[s];
                                for (var F = 0; F < z.childNodes.length; F++) {
                                    if (z.childNodes[F].tagName != null) {
                                        m.text[z.childNodes[F].tagName] = window.dhx4._xmlNodeValue(z.childNodes[F])
                                    }
                                }
                            }
                        }
                        u.options.push(m)
                    }
                }
            }
            C = A = null
        }
        return u
    };
    window.dhx4._enableDataLoading(this, "_initObj", "_xmlToObj", "complete", {data: true});
    window.dhx4._eventable(this);
    this._getNearItem = function (n, m) {
        var a = null;
        while (n != null) {
            n = n[m < 0 ? "previousSibling" : "nextSibling"];
            if (a == null && n != null && n.style.display == "" && n._optId != null) {
                a = n;
                n = null
            }
        }
        return a
    };
    this.setName(this.conf.form_name);
    this._doOnListMouseMove = function (m) {
        m = m || event;
        var a = m.target || m.srcElement;
        while (a != null && a != this) {
            if (typeof(a._optId) != "undefined") {
                if (g.conf.tm_hover) {
                    window.clearTimeout(g.conf.tm_hover)
                }
                g._setSelected(a._optId, false, false, true)
            }
            a = a.parentNode
        }
        a = null
    };
    this._doOnListMouseDown = function (a) {
        a = a || event;
        a.cancelBubble = true;
        g.conf.clear_click = true;
        window.setTimeout(function () {
            g.base.firstChild.focus()
        }, 1)
    };
    this._doOnListMouseUp = function (n) {
        n = n || event;
        if (n.button != g.conf.btn_left) {
            return
        }
        var a = n.target || n.srcElement;
        while (a != null && a != this) {
            if (typeof(a._optId) != "undefined") {
                var m = true;
                if (typeof(g.t[a._optId].obj.optionClick) == "function" && g.t[a._optId].obj.optionClick(a, n, g) !== true) {
                    m = false
                }
                if (m) {
                    g._setSelected(a._optId, null, true);
                    g._confirmSelect("click")
                }
            }
            a = a.parentNode
        }
        a = null
    };
    this._doOnListMouseOut = function (a) {
        if (g.conf.tm_hover) {
            window.clearTimeout(g.conf.tm_hover)
        }
        g.conf.tm_hover = window.setTimeout(function () {
            var m = g.conf.last_match || g.conf.last_selected;
            if (g.conf.last_match == null && g.t[m] != null) {
                if (g.base.firstChild.value != g.t[m].obj.getText(g.t[m].item, true)) {
                    m = null
                }
            }
            g._setSelected(m, null, true, true)
        }, 1)
    };
    this._doOnBaseMouseDown = function (q) {
        if (!g.conf.enabled) {
            return
        }
        g.conf.clear_click = true;
        q = q || event;
        if (q.button != g.conf.btn_left) {
            return
        }
        var m = q.target || q.srcElement;
        if (m != this.firstChild) {
            window.setTimeout(function () {
                g.base.firstChild.focus()
            }, 1);
            var o = m;
            while (o != this && o != null) {
                if (o == this.lastChild) {
                    if (typeof(g.modes[g.conf.opts_type].topImageClick) == "function") {
                        var n = (g.conf.last_hover || g.conf.last_selected);
                        var a = (n != null ? g.t[n].item : null);
                        if (g.modes[g.conf.opts_type].topImageClick(a, g) !== true) {
                            n = a = null;
                            return
                        }
                    }
                    o = null
                } else {
                    o = o.parentNode
                }
            }
        }
        if (g._isListVisible()) {
            g._hideList()
        } else {
            if (m != this.firstChild) {
                g.conf.clear_blur = true
            }
            g._showList();
            g._setSelected(g.conf.last_selected, true, true)
        }
        m = null
    };
    this._doOnBodyMouseDown = function () {
        if (g.conf.clear_click) {
            g.conf.clear_click = false;
            return
        }
        g._confirmSelect("blur")
    };
    this._doOnInputFocus = function () {
        g.conf.clear_blur = false;
        if (g.conf.tm_confirm_blur) {
            window.clearTimeout(g.conf.tm_confirm_blur)
        }
        if (g.conf.combo_focus == false) {
            g.conf.combo_focus = true;
            g.callEvent("onFocus", [])
        }
    };
    this._doOnInputBlur = function () {
        if (g.conf.clear_blur == true) {
            g.conf.clear_blur = false;
            return
        }
        if (g.conf.tm_confirm_blur) {
            window.clearTimeout(g.conf.tm_confirm_blur)
        }
        g.conf.tm_confirm_blur = window.setTimeout(function () {
            if (g.conf.clear_click == false) {
                g._confirmSelect("blur");
                g.conf.combo_focus = false;
                g.callEvent("onBlur", [])
            }
        }, 20)
    };
    this._doOnInputKeyUp = function (a) {
        a = a || event;
        if (g.conf.f_mode != false) {
            g.conf.clear_bsp = (a.keyCode == 8 || a.keyCode == 46);
            g._filterOpts();
            return
        } else {
            g._checkForMatch()
        }
    };
    this._doOnInputKeyDown = function (a) {
        a = a || event;
        if ((a.keyCode == 38 || a.keyCode == 40) && !a.ctrlKey && !a.shiftKey && !a.altKey) {
            if (a.preventDefault) {
                a.preventDefault()
            } else {
                a.returnValue = false
            }
            a.cancelBubble = true;
            g._keyOnUpDown(a.keyCode == 38 ? -1 : 1)
        }
        if (a.keyCode == 113) {
            if (!g._isListVisible()) {
                g._showList();
                if (g.base.firstChild.value == g.conf.last_text) {
                    g._setSelected(g.conf.last_selected, true, true);
                    g.base.firstChild.value = g.conf.last_text;
                    g.conf.f_server_last = g.base.firstChild.value.toLowerCase()
                } else {
                    g.conf.f_server_last = g.base.firstChild.value.toLowerCase();
                    if (g.conf.f_mode == false) {
                        g._checkForMatch()
                    }
                }
            } else {
            }
        }
        if (a.keyCode == 27) {
            if (a.preventDefault) {
                a.preventDefault()
            } else {
                a.returnValue = false
            }
            a.cancelBubble = true;
            g._cancelSelect()
        }
        if (a.keyCode == 13) {
            if (a.preventDefault) {
                a.preventDefault()
            }
            g._confirmSelect("kbd")
        }
        if (g.conf.ro_mode == true && ((a.keyCode >= 48 && a.keyCode <= 57) || (a.keyCode >= 65 && a.keyCode <= 90))) {
            g._searchRO(String.fromCharCode(a.keyCode).toLowerCase());
            a.cancelBubble = true
        }
        g.conf.clear_key = true;
        g.callEvent("onKeyPressed", [a.keyCode || a.charCode])
    };
    this._doOnInputKeyPress = function (a) {
        if (g.conf.clear_key) {
            g.conf.clear_key = false;
            return
        }
        a = a || event;
        g.callEvent("onKeyPressed", [a.keyCode || a.charCode])
    };
    this._keyOnUpDown = function (a) {
        var m = null;
        if (this.conf.last_hover) {
            m = this.t[this.conf.last_hover].item
        } else {
            if (this.conf.last_selected) {
                m = this.t[this.conf.last_selected].item
            }
        }
        if (!m && this._getListVisibleCount() == 0) {
            return
        }
        if (m != null && m.style.display != "") {
            m = null
        }
        this._showList();
        if (m != null) {
            if (this.t[m._optId].obj.isSelected(m)) {
                m = this._getNearItem(m, a)
            }
        } else {
            m = this.list.firstChild;
            if (m.style.display != "") {
                m = this._getNearItem(m, 1)
            }
        }
        if (m == null) {
            return
        }
        this._setSelected(m._optId, true, true);
        if (this.conf.f_mode == false) {
            this.base.firstChild.value = this.t[m._optId].obj.getText(m, true)
        } else {
            var n = String(this.t[m._optId].obj.getText(m, true));
            if (this.conf.f_mode == "start" && this.conf.f_ac == true) {
                if (n.toLowerCase().indexOf(this.conf.f_server_last) === 0) {
                    this.conf.f_ac_text = n.substring(this.conf.f_server_last.length, n.length);
                    this.base.firstChild.value = n;
                    this._selectRange(this.conf.f_server_last.length, this.base.firstChild.value.length)
                } else {
                    this.base.firstChild.value = n;
                    this.conf.f_server_last = this.base.firstChild.value.toLowerCase();
                    this._selectRange(0, this.base.firstChild.value.length)
                }
            } else {
                this.base.firstChild.value = n;
                this.conf.f_server_last = this.base.firstChild.value.toLowerCase()
            }
        }
        m = null
    };
    this.conf.evs_nodes = [{node: document.body, evs: {mousedown: "_doOnBodyMouseDown"}}, {
        node: this.base,
        evs: {mousedown: "_doOnBaseMouseDown"}
    }, {
        node: this.base.firstChild,
        evs: {
            keyup: "_doOnInputKeyUp",
            keydown: "_doOnInputKeyDown",
            keypress: "_doOnInputKeyPress",
            focus: "_doOnInputFocus",
            blur: "_doOnInputBlur"
        }
    }, {
        node: this.list,
        evs: {
            mousemove: "_doOnListMouseMove",
            mousedown: "_doOnListMouseDown",
            mouseup: "_doOnListMouseUp",
            mouseout: "_doOnListMouseOut"
        }
    }];
    for (var b = 0; b < this.conf.evs_nodes.length; b++) {
        for (var i in this.conf.evs_nodes[b].evs) {
            if (typeof(window.addEventListener) == "function") {
                this.conf.evs_nodes[b].node.addEventListener(i, this[this.conf.evs_nodes[b].evs[i]], false)
            } else {
                this.conf.evs_nodes[b].node.attachEvent("on" + i, this[this.conf.evs_nodes[b].evs[i]])
            }
        }
    }
    this.unload = function () {
        this.clearAll();
        this.t = null;
        for (var n = 0; n < this.conf.evs_nodes.length; n++) {
            for (var m in this.conf.evs_nodes[n].evs) {
                if (typeof(window.addEventListener) == "function") {
                    this.conf.evs_nodes[n].node.removeEventListener(m, this[this.conf.evs_nodes[n].evs[m]], false)
                } else {
                    this.conf.evs_nodes[n].node.detachEvent("on" + m, this[this.conf.evs_nodes[n].evs[m]])
                }
                this.conf.evs_nodes[n].evs[m] = null;
                delete this.conf.evs_nodes[n].evs[m]
            }
            this.conf.evs_nodes[n].node = null;
            this.conf.evs_nodes[n].evs = null;
            delete this.conf.evs_nodes[n].node;
            delete this.conf.evs_nodes[n].evs;
            this.conf.evs_nodes[n] = null
        }
        window.dhx4._eventable(this, "clear");
        window.dhx4._enableDataLoading(this, null, null, null, "clear");
        this._mcDetachHeader();
        this.DOMelem_input = this.DOMelem_button = this.DOMlist = this.DOMelem = this.DOMParent = null;
        for (var m in this.conf) {
            this.conf[m] = null;
            delete this.conf[m]
        }
        this.conf = null;
        if (typeof(window.addEventListener) == "function") {
            this.list.removeEventListener("scroll", this._doOnListScroll, false)
        } else {
            this.list.detachEvent("onscroll", this._doOnListScroll)
        }
        this.base.parentNode.removeChild(this.base);
        this.list.parentNode.removeChild(this.list);
        this.base = this.list = this.cont = null;
        this.modes = null;
        for (var m in this) {
            if (typeof(this[m]) == "function") {
                this[m] = null
            }
        }
        g = null
    };
    this.DOMelem_input = this.base.firstChild;
    this.DOMelem_button = this.base.childNodes[this.base.childNodes.length - (this.conf.combo_image ? 2 : 1)];
    this.DOMlist = this.list;
    this.DOMelem = this.base;
    this.DOMParent = f;
    f = null;
    if (d != null) {
        if (d.filter != null) {
            if (typeof(d.filter) == "string") {
                this.enableFilteringMode(true, d.filter, window.dhx4.s2b(d.filter_cache), window.dhx4.s2b(d.filter_sub_load))
            } else {
                this.enableFilteringMode(true)
            }
        }
        if (d.image_path != null) {
            this.setImagePath(d.image_path)
        }
        if (d.default_image != null || d.default_image_dis != null) {
            this.setDefaultImage(d.default_image, d.default_image_dis)
        }
        if (d.items || d.options) {
            this.addOption(d.items || d.options)
        }
        if (d.xml || d.json) {
            this.load(d.xml || d.json)
        }
        if (typeof(d.readonly) != "undefined") {
            this.readonly(d.readonly)
        }
        d = null
    }
    return this
}
function dhtmlXComboFromSelect(c) {
    if (typeof(c) == "string") {
        c = document.getElementById(c)
    }
    var b = c.offsetWidth;
    var j = c.getAttribute("name") || null;
    var d = document.createElement("SPAN");
    c.parentNode.insertBefore(d, c);
    var f = c.getAttribute("mode") || c.getAttribute("opt_type") || "option";
    var e = new dhtmlXCombo(d, j, b, f);
    d = null;
    var h = c.getAttribute("imagePath");
    if (h) {
        e.setImagePath(h)
    }
    var i = c.getAttribute("defaultImage");
    var g = c.getAttribute("defaultImageDis");
    if (window.dhx4.s2b(g) == true) {
        g = true
    }
    if (i != null || g != null) {
        e.setDefaultImage(i, g)
    }
    var a = e._xmlToObj([c], true, c.selectedIndex);
    if (a.options.length > 0) {
        e.addOption(a.options)
    }
    a = null;
    c.parentNode.removeChild(c);
    c = null;
    return e
}
dhtmlXCombo.prototype.setName = function (a) {
    this.conf.form_name = a;
    this.base.childNodes[1].name = a;
    this.base.childNodes[2].name = a.replace(/(\[.*)?$/, "_new_value$1")
};
dhtmlXCombo.prototype.readonly = function (a) {
    if (window.dhx4.s2b(a)) {
        this.base.firstChild.setAttribute("readOnly", "true");
        this.conf.ro_mode = true
    } else {
        this.base.firstChild.removeAttribute("readOnly");
        this.conf.ro_mode = false
    }
};
dhtmlXCombo.prototype.setPlaceholder = function (a) {
    if (typeof(a) == "undefined" || a == null) {
        a = ""
    }
    this.base.firstChild.setAttribute("placeholder", String(a))
};
dhtmlXCombo.prototype.setTemplate = function (c) {
    for (var b in c) {
        if (typeof(this.conf.template[b]) != "undefined") {
            if (b == "header") {
                this.conf.template[b] = window.dhx4.s2b(c[b])
            } else {
                this.conf.template[b] = String(c[b])
            }
        }
    }
    if (c.columns != null) {
        this._mcMakeTemplate(c.columns)
    } else {
        this._mcDetachHeader()
    }
    for (var b in this.t) {
        this.t[b].obj.setText(this.t[b].item, this.t[b].item._conf.text)
    }
    this._confirmSelect()
};
dhtmlXCombo.prototype.setSkin = function (a) {
    if (a == this.conf.skin) {
        return
    }
    this.conf.skin = a;
    this.base.className = "dhxcombo_" + this.conf.skin + (this.conf.enabled ? "" : " dhxcombo_disabled");
    this.list.className = "dhxcombolist_" + this.conf.skin + (this.hdr != null ? " dhxcombolist_multicolumn" : "");
    if (this.hdr != null) {
        this.hdr.className = "dhxcombolist_" + this.conf.skin + " dhxcombolist_hdr"
    }
};
dhtmlXCombo.prototype.getInput = function () {
    return this.base.firstChild
};
dhtmlXCombo.prototype.getButton = function () {
    return this.base.childNodes[this.base.childNodes.length - (this.conf.combo_image ? 2 : 1)]
};
dhtmlXCombo.prototype.getList = function () {
    return this.list
};
dhtmlXCombo.prototype.getBase = function () {
    return this.base
};
dhtmlXCombo.prototype.getParent = function () {
    return this.DOMParent
};
dhtmlXCombo.prototype.forEachOption = function (a) {
    for (var b = 0; b < this.list.childNodes.length; b++) {
        a.apply(window, [this._getOption(this.list.childNodes[b]._optId, b)])
    }
};
dhtmlXCombo.prototype.setFocus = function () {
    if (this.conf.enabled) {
        this.base.firstChild.focus()
    }
};
dhtmlXCombo.prototype.setFontSize = function (a, b) {
    if (a != null) {
        this.base.firstChild.style.fontSize = a
    }
    if (b != null) {
        this.list.style.fontSize = b
    }
};
dhtmlXCombo.prototype.getOption = function (e) {
    var f = null;
    var c = null;
    for (var d = 0; d < this.list.childNodes.length; d++) {
        if (f == null) {
            var b = this.list.childNodes[d]._optId;
            if (this.t[b].obj.getValue(this.t[b].item) == e) {
                f = b;
                c = d
            }
        }
    }
    return (f == null ? null : this._getOption(f, c))
};
dhtmlXCombo.prototype.getOptionByIndex = function (a) {
    if (a < 0) {
        return null
    }
    if (this.list.childNodes[a] == null) {
        return null
    }
    return this._getOption(this.list.childNodes[a]._optId, a)
};
dhtmlXCombo.prototype.getOptionByLabel = function (e) {
    var f = null;
    var c = null;
    for (var d = 0; d < this.list.childNodes.length; d++) {
        if (f == null) {
            var b = this.list.childNodes[d]._optId;
            if (this.t[b].obj.getText(this.t[b].item, true) == e) {
                f = b;
                c = d
            }
        }
    }
    return (f == null ? null : this._getOption(f, c))
};
dhtmlXCombo.prototype.getSelectedIndex = function () {
    return this._getOptionProp(this.conf.last_selected, "index", -1)
};
dhtmlXCombo.prototype.getSelectedText = function () {
    return this._getOptionProp(this.conf.last_selected, "text", "")
};
dhtmlXCombo.prototype.getSelectedValue = function () {
    return this._getOptionProp(this.conf.temp_selected || this.conf.last_selected, "value", null)
};
dhtmlXCombo.prototype.getActualValue = function () {
    return this.base.childNodes[1].value
};
dhtmlXCombo.prototype.getComboText = function () {
    return this.base.childNodes[0].value
};
dhtmlXCombo.prototype.getIndexByValue = function (b) {
    var a = this.getOption(b);
    return (a != null ? a.index : -1)
};
dhtmlXCombo.prototype.setComboText = function (a) {
    if (this.conf.allow_free_text != true) {
        return
    }
    this.unSelectOption();
    this.conf.last_text = this.base.firstChild.value = a;
    this.conf.f_server_last = this.base.firstChild.value.toLowerCase()
};
dhtmlXCombo.prototype.setComboValue = function (b) {
    var a = this.getOption(b);
    if (a != null) {
        this.selectOption(a.index)
    } else {
        this.conf.last_value = b;
        this.base.childNodes[1].value = this.conf.last_value;
        this.base.childNodes[2].value = "true"
    }
};
dhtmlXCombo.prototype.selectOption = function (b, c, a) {
    if (b < 0 || b >= this.list.childNodes.length) {
        return
    }
    var d = this.list.childNodes[b]._optId;
    this._setSelected(d, this._isListVisible(), true);
    this._confirmSelect("script")
};
dhtmlXCombo.prototype.unSelectOption = function () {
    if (this.conf.last_hover != null) {
        this.t[this.conf.last_hover].obj.setSelected(this.t[this.conf.last_hover].item, false);
        this.conf.last_hover = null
    }
    this.base.firstChild.value = "";
    if (this.conf.f_mode != false) {
        this._filterOpts(true)
    }
    this._hideList();
    this._updateTopImage(null);
    this._confirmSelect("script")
};
dhtmlXCombo.prototype.confirmValue = function () {
    this._confirmSelect("script")
};
dhtmlXCombo.prototype.enable = function (a) {
    a = (typeof(a) == "undefined" ? true : window.dhx4.s2b(a));
    if (this.conf.enabled == a) {
        return
    }
    this.conf.enabled = a;
    if (a) {
        this.base.className = "dhxcombo_" + this.conf.skin;
        this.base.firstChild.removeAttribute("disabled")
    } else {
        this._hideList();
        this.base.className = "dhxcombo_" + this.conf.skin + " dhxcombo_disabled";
        this.base.firstChild.setAttribute("disabled", "true")
    }
    this._updateTopImage(this.conf.last_selected)
};
dhtmlXCombo.prototype.disable = function (a) {
    a = (typeof(a) == "undefined" ? true : window.dhx4.s2b(a));
    this.enable(!a)
};
dhtmlXCombo.prototype.isEnabled = function () {
    return (this.conf.enabled == true)
};
dhtmlXCombo.prototype.show = function (a) {
    if (typeof(a) == "undefined") {
        a = true
    } else {
        a = window.dhx4.s2b(a)
    }
    this.base.style.display = (a == true ? "" : "none")
};
dhtmlXCombo.prototype.hide = function (a) {
    if (typeof(a) == "undefined") {
        a = true
    }
    this.show(!a)
};
dhtmlXCombo.prototype.isVisible = function () {
    return (this.base.style.display == "")
};
dhtmlXCombo.prototype.setFilterHandler = function (a) {
    if (typeof(a) == "function") {
        this.conf.f_func = a;
        this.conf.f_mode = true;
        this.conf.f_dyn = this.conf.f_cache = this.conf.f_url = null
    } else {
        if (typeof(a) == "string" && typeof(window[a]) == "function") {
            this.conf.f_func = window[a];
            this.conf.f_mode = true;
            this.conf.f_dyn = this.conf.f_cache = this.conf.f_url = null
        } else {
            this.conf.f_func = null
        }
    }
};
dhtmlXCombo.prototype.enableFilteringMode = function (d, b, a, c) {
    if (d == true || d == "between") {
        this.conf.f_mode = (d == true ? "start" : "between");
        if (b != null) {
            this.conf.f_url = b;
            this.conf.f_cache = window.dhx4.s2b(a);
            this.conf.f_dyn = window.dhx4.s2b(c)
        } else {
            this.conf.f_url = null;
            this.conf.f_cache = false;
            this.conf.f_dyn = false
        }
    } else {
        this.conf.f_mode = false;
        this.conf.f_url = null;
        this.conf.f_cache = false;
        this.conf.f_dyn = false
    }
};
dhtmlXCombo.prototype.filter = function (c, a) {
    for (var d = 0; d < this.list.childNodes.length; d++) {
        var b = c.apply(window, [this._getOption(this.list.childNodes[d]._optId, d)]);
        this.list.childNodes[d].style.display = (b === true ? "" : "none")
    }
    if (typeof(a) == "undefined" || a == true) {
        this._showList(true)
    }
};
dhtmlXCombo.prototype.sort = function (c) {
    var a = [];
    for (var b = 0; b < this.list.childNodes.length; b++) {
        var d = this.list.childNodes[b]._optId;
        a.push([d, this._getOption(d, b)])
    }
    if (c == "asc" || c == "desc") {
        k = true;
        a.sort(function (f, e) {
            f = f[1].text_option.toLowerCase();
            e = e[1].text_option.toLowerCase();
            var g = (c == "asc" ? 1 : -1);
            return (f > e ? g : -1 * g)
        })
    } else {
        if (typeof(c) == "function" || typeof(window[c]) == "function") {
            if (typeof(window[c]) == "function") {
                c = window[c]
            }
            a.sort(function (f, e) {
                return c.apply(window, [f[1], e[1]])
            })
        }
    }
    while (this.list.childNodes.length > 0) {
        this.list.removeChild(this.list.lastChild)
    }
    for (var b = 0; b < a.length; b++) {
        this.list.appendChild(this.t[a[b][0]].item)
    }
};
dhtmlXCombo.prototype.enableAutocomplete = function (a) {
    if (typeof(a) == "undefined") {
        a = true
    } else {
        a = window.dhx4.s2b(a)
    }
    this.conf.f_ac = a
};
dhtmlXCombo.prototype.disableAutocomplete = function (a) {
    if (typeof(a) == "undefined") {
        a = true
    } else {
        a = window.dhx4.s2b(a)
    }
    this.enableAutocomplete(!a)
};
dhtmlXCombo.prototype.allowFreeText = function (b, a) {
    this.conf.allow_free_text = (typeof(b) == "undefined" ? true : window.dhx4.s2b(b));
    this.conf.free_text_empty = (typeof(a) == "undefined" ? false : window.dhx4.s2b(a))
};
dhtmlXCombo.prototype._checkForMatch = function (d) {
    var a = window.dhx4.trim(this.base.firstChild.value).toLowerCase();
    var e = null;
    var b = this.list.firstChild;
    while (b != null) {
        if (b.style.display == "" && b._optId != null) {
            var c = window.dhx4.trim(this.t[b._optId].obj.getText(b, true)).toLowerCase();
            if (a == c) {
                e = b._optId;
                b = null
            }
        }
        if (b != null) {
            b = b.nextSibling
        }
    }
    if (this.conf.last_match == null) {
        if (e != null) {
            this._setSelected(e, true, true);
            this.conf.last_match = e
        } else {
            if (this.conf.f_mode != "between" || d == true) {
                this._setSelected(null, true, true);
                this.conf.last_match = null
            }
        }
    } else {
        if (e != null) {
            if (e != this.conf.last_match) {
                this._setSelected(e, true, true);
                this.conf.last_match = e
            }
        } else {
            this._setSelected(null, true, true);
            this.conf.last_match = null
        }
    }
};
dhtmlXCombo.prototype._selectRange = function (b, a) {
    if (this.conf.combo_focus == true) {
        window.dhx4.selectTextRange(this.base.firstChild, b, a)
    }
};
dhtmlXCombo.prototype.openSelect = function () {
    if (!this._isListVisible()) {
        this._showList()
    }
};
dhtmlXCombo.prototype.closeAll = function () {
    this._hideList()
};
dhtmlXCombo.prototype._showList = function (a) {
    if (this._getListVisibleCount() == 0) {
        if (a && this._isListVisible()) {
            this._hideList()
        }
        return
    }
    if (this._isListVisible()) {
        this._checkListHeight();
        return
    }
    this.list.style.zIndex = window.dhx4.zim.reserve(this.conf.list_zi_id);
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.zIndex = Number(this.list.style.zIndex) + 1
    }
    this.list.style.visibility = "hidden";
    this.list.style.display = "";
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.visibility = this.list.style.visibility;
        this.hdr.style.display = this.list.style.display
    }
    var b = (this.hdr != null && this.conf.template.header == true ? this.hdr.offsetHeight : 0);
    this.list.style.width = Math.max(this.conf.opts_width || this.conf.col_w || 0, this.conf.combo_width) + "px";
    this.list.style.top = window.dhx4.absTop(this.base) + b + this.base.offsetHeight - 1 + "px";
    this.list.style.left = window.dhx4.absLeft(this.base) + "px";
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.width = this.list.style.width;
        this.hdr.style.left = this.list.style.left;
        this.hdr.style.top = parseInt(this.list.style.top) - b + "px"
    }
    this._checkListHeight();
    this.list.style.visibility = "visible";
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.visibility = "visible"
    }
    this.callEvent("onOpen", [])
};
dhtmlXCombo.prototype._hideList = function () {
    if (!this._isListVisible()) {
        return
    }
    window.dhx4.zim.clear(this.conf.list_zi_id);
    this.list.style.display = "none";
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.display = "none"
    }
    this.conf.clear_click = false;
    this.callEvent("onClose", [])
};
dhtmlXCombo.prototype._isListVisible = function () {
    return (this.list.style.display == "")
};
dhtmlXCombo.prototype._getListVisibleCount = function () {
    var a = 0;
    for (var b = 0; b < this.list.childNodes.length; b++) {
        a += (this.list.childNodes[b].style.display == "" ? 1 : 0)
    }
    return a
};
dhtmlXCombo.prototype._checkListHeight = function () {
    if (!this._isListVisible()) {
        return
    }
    if (this.conf.item_h == null) {
        var j = this.list.firstChild;
        while (j != null) {
            if (j.style.display == "") {
                this.conf.item_h = j.offsetHeight + (this.hdr != null ? -1 : 0);
                j = null
            } else {
                j = j.nextSibling
            }
        }
        j = null
    }
    var l = window.dhx4.screenDim();
    var f = window.dhx4.absTop(this.base);
    var b = this.base.offsetHeight;
    var a = (this.hdr != null && this.conf.template.header == true ? this.hdr.offsetHeight : 0);
    var c = Math.max(0, Math.floor((f + a - l.top) / this.conf.item_h));
    var i = Math.max(0, Math.floor((l.bottom - (f + b + a)) / this.conf.item_h));
    var m = this._getListVisibleCount();
    if (i < Math.min(this.conf.opts_count_min, m) && c > i) {
        i = null
    }
    var g = Math.min((i == null ? c : i), this.conf.opts_count, m);
    var d = (g < m ? (g * this.conf.item_h) + "px" : "");
    var e = this.conf.sp[this.conf.skin][this.hdr != null && this.conf.template.header == true ? "hdr_ofs" : "list_ofs"];
    this.list.style.height = d;
    this.list.style.top = (i == null ? f - this.list.offsetHeight + e : f + b + a - e) + "px";
    if (this.hdr != null && this.conf.template.header == true) {
        this.hdr.style.top = (i == null ? f - a - this.list.offsetHeight + e : f + b - e) + "px"
    }
};
dhtmlXCombo.prototype._scrollToItem = function (e) {
    var d = this.t[e].item.offsetTop;
    var c = d + this.t[e].item.offsetHeight;
    var b = this.list.scrollTop;
    var a = b + this.list.clientHeight;
    if (d < b) {
        this.list.scrollTop = d + (this.hdr != null && this.conf.template.header == true ? 1 : 0)
    } else {
        if (c > a) {
            this.list.scrollTop = c - this.list.clientHeight + (this.hdr != null && this.conf.template.header == true ? -this.conf.sp[this.conf.skin].scr_ofs : 0)
        }
    }
};
dhtmlXCombo.prototype._setSelected = function (d, c, b, a) {
    this.conf.temp_selected = null;
    if (b) {
        this._updateTopImage(d)
    }
    if (d != null && this.conf.last_hover == d) {
        if (c) {
            this._scrollToItem(d)
        }
        return
    }
    if (this.conf.last_hover != null) {
        this.t[this.conf.last_hover].obj.setSelected(this.t[this.conf.last_hover].item, false);
        this.conf.last_hover = null;
        if (d == null) {
            this.callEvent("onSelectionChange", [])
        }
    }
    if (d != null) {
        this.t[d].obj.setSelected(this.t[d].item, true);
        this.conf.last_hover = d;
        if (a != true) {
            this.conf.temp_selected = d;
            this.callEvent("onSelectionChange", [])
        }
        if (this.conf.s_mode == "select" && this.t[d].item == this.t[d].item.parentNode.lastChild) {
            this._subloadRequest()
        }
        if (c) {
            this._scrollToItem(d)
        }
    }
};
dhtmlXCombo.prototype._subloadRequest = function () {
    if (this.conf.f_url != null && this.conf.f_dyn == true && this.conf.f_dyn_end == false) {
        var c = "mask=" + encodeURIComponent(this.conf.f_mask) + "&pos=" + this.list.childNodes.length;
        var a = this;
        var b = function (e) {
            if (a.conf.f_cache) {
                a.conf.f_cache_data[a.conf.f_mask].data.push(e.xmlDoc.responseXML)
            }
            var d = a.list.childNodes.length;
            a.conf.f_loading = true;
            a.load(e.xmlDoc.responseXML);
            a.conf.f_loading = false;
            if (d == a.list.childNodes.length) {
                a.conf.f_dyn_end = true;
                if (a.conf.f_cache) {
                    a.conf.f_cache_data[a.conf.f_mask].dyn_end = true
                }
            }
            b = a = null
        };
        if (window.dhx4.ajax.method == "post") {
            window.dhx4.ajax.post(this.conf.f_url, c, b)
        } else {
            if (window.dhx4.ajax.method == "get") {
                window.dhx4.ajax.get(this.conf.f_url + (String(this.conf.f_url).indexOf("?") >= 0 ? "&" : "?") + c, b)
            }
        }
    }
};
dhtmlXCombo.prototype.addOption = function (f, g, b, a, d) {
    var c = null;
    if (!(f instanceof Array)) {
        var h = this._renderOption({value: f, text: g, css: b, img: a});
        if (c == null && window.dhx4.s2b(d) == true) {
            c = h
        }
    } else {
        for (var e = 0; e < f.length; e++) {
            if (typeof(f[e]) == "undefined") {
                continue
            }
            if (f[e] instanceof Array) {
                h = this._renderOption({value: f[e][0], text: f[e][1], css: f[e][2], img: f[e][3]});
                if (c == null && window.dhx4.s2b(f[e][4]) == true) {
                    c = h
                }
            } else {
                var h = this._renderOption(f[e]);
                if (c == null && window.dhx4.s2b(f[e].selected) == true) {
                    c = h
                }
            }
        }
    }
    if (c != null) {
        this._setSelected(c, this._isListVisible(), true);
        this._confirmSelect("onInit")
    }
};
dhtmlXCombo.prototype.updateOption = function (a, c, b, d) {
    var e = this._getOptionId(a);
    if (e == null) {
        return
    }
    this.t[e].obj.update(this.t[e].item, {value: c, text: b, css: d});
    if (this.conf.last_selected == e) {
        this.conf.last_text = this.base.firstChild.value = this.t[e].obj.getText(this.t[e].item, true);
        this.conf.f_server_last = this.base.firstChild.value.toLowerCase()
    }
};
dhtmlXCombo.prototype.deleteOption = function (d) {
    for (var b in this.t) {
        var c = this.t[b].obj.getValue(this.t[b].item);
        if (c == d) {
            this._removeOption(b)
        }
    }
    if (this._isListVisible()) {
        this._showList(true)
    }
};
dhtmlXCombo.prototype.clearAll = function (b) {
    b = (typeof(b) == "undefined" ? true : window.dhx4.s2b(b));
    for (var c in this.t) {
        this._removeOption(c)
    }
    if (this.conf.tm_hover) {
        window.clearTimeout(this.conf.tm_hover)
    }
    this.conf.last_hover = null;
    this.conf.last_selected = null;
    this.list.scrollTop = 0;
    if (b == true) {
        this._hideList()
    }
};
dhtmlXCombo.prototype._renderOption = function (d) {
    var e = window.dhx4.newId();
    var c = document.createElement("DIV");
    c._optId = e;
    c._tpl = this.conf.template;
    if (typeof(d.img) == "undefined" && typeof(d.img_src) != "undefined") {
        d.img = d.img_src;
        delete d.img_src
    }
    if (typeof(d.img_dis) == "undefined" && typeof(d.img_src_dis) != "undefined") {
        d.img_dis = d.img_src_dis;
        delete d.img_src_dis
    }
    d.img_path = this.conf.img_path;
    d.img_def = this.conf.img_def;
    d.img_def_dis = this.conf.img_def_dis;
    this.list.appendChild(c);
    var b = (this._isListVisible() && window.dhx4.isFF == true);
    if (b == true) {
        var a = this.list.scrollTop;
        this.list.scrollTop -= 1
    }
    if (this.hdr != null) {
        d.multicol = true
    }
    this.t[c._optId] = {obj: this.modes[this.conf.opts_type].render(c, d), item: c, conf: {type: this.conf.opts_type}};
    c = null;
    if (b == true) {
        this.list.scrollTop += 1
    }
    return e
};
dhtmlXCombo.prototype._removeOption = function (a) {
    this.t[a].obj.destruct(this.t[a].item);
    this.t[a].obj = null;
    this.t[a].item.parentNode.removeChild(this.t[a].item);
    this.t[a].item = null;
    this.t[a].conf = null;
    this.t[a] = null;
    delete this.t[a];
    if (this.conf.last_hover == a) {
        this.conf.last_hover = null
    }
    if (this.conf.last_selected == a) {
        this.conf.last_selected = null;
        this._confirmSelect("onDelete")
    }
};
dhtmlXCombo.prototype._confirmSelect = function (c, a) {
    var b = false;
    if (typeof(a) == "undefined") {
        a = true
    }
    if (this.conf.f_server_tm) {
        window.clearTimeout(this.conf.f_server_tm)
    }
    if (this.conf.last_hover != null) {
        b = b || (this.conf.last_value != this._getOptionValue(this.conf.last_hover));
        this.conf.last_match = this.conf.last_selected = this.conf.last_hover;
        this.conf.last_value = this._getOptionValue(this.conf.last_selected);
        this.conf.last_text = this.base.firstChild.value = this.t[this.conf.last_selected].obj.getText(this.t[this.conf.last_selected].item, true);
        this.conf.f_server_last = this.base.firstChild.value.toLowerCase();
        this.base.childNodes[1].value = this.conf.last_value;
        this.base.childNodes[2].value = "false"
    } else {
        if (this.conf.allow_free_text || (this.base.firstChild.value == "" && this.conf.allow_empty_value)) {
            b = b || (this.conf.last_text != this.base.firstChild.value);
            this.conf.last_match = this.conf.last_value = this.conf.last_selected = null;
            this.conf.last_text = this.base.firstChild.value;
            this.conf.f_server_last = this.base.firstChild.value.toLowerCase();
            this.base.childNodes[1].value = this.conf.last_text;
            this.base.childNodes[2].value = "true"
        } else {
            this._cancelSelect(true);
            this._updateTopImage(this.conf.last_selected);
            return
        }
    }
    if (this.conf.f_ac && this.conf.f_mode == "start") {
        this.conf.f_ac_text = "";
        if (c != "blur") {
            this._selectRange(this.base.firstChild.value.length, this.base.firstChild.value.length)
        }
    }
    if (a) {
        this._hideList()
    }
    if (b == true && c != "onInit" && c != "onDelete") {
        this.callEvent("onSelectionChange", []);
        this.callEvent("onChange", [this.conf.last_value, this.conf.last_text])
    }
};
dhtmlXCombo.prototype._cancelSelect = function (a) {
    this._hideList();
    if (a == true && this.conf.allow_free_text == false && this.conf.free_text_empty == true) {
        this.conf.f_server_last = this.conf.last_match = this.conf.last_value = this.conf.last_selected = null;
        this.base.childNodes[1].value = this.conf.last_text = this.base.firstChild.value = "";
        this.base.childNodes[2].value = "false"
    } else {
        this.base.firstChild.value = this.conf.last_text
    }
    if (this.conf.f_mode != false) {
        this._filterOpts(true)
    }
};
dhtmlXCombo.prototype._getOption = function (g, d) {
    if (!this.t[g]) {
        return null
    }
    if (typeof(d) == "undefined") {
        d = -1
    }
    if (d < 0) {
        for (var f = 0; f < this.list.childNodes.length; f++) {
            if (d < 0 && this.list.childNodes[f]._optId == g) {
                d = f
            }
        }
    }
    var e = {
        value: this.t[g].obj.getValue(this.t[g].item),
        text: this.t[g].obj.getText(this.t[g].item),
        text_input: this.t[g].obj.getText(this.t[g].item, true),
        text_option: this.t[g].obj.getText(this.t[g].item, null, true),
        css: this.t[g].obj.getCss(this.t[g].item),
        selected: (g == this.conf.last_selected),
        index: d
    };
    if (typeof(this.t[g].obj.getExtraData) == "function") {
        var c = this.t[g].obj.getExtraData(this.t[g].item);
        for (var b in c) {
            if (typeof(e[b]) == "undefined") {
                e[b] = c[b]
            }
        }
    }
    return e
};
dhtmlXCombo.prototype._getOptionProp = function (d, c, b) {
    if (d != null) {
        var a = this._getOption(d);
        if (a != null) {
            return a[c]
        }
    }
    return b
};
dhtmlXCombo.prototype._getOptionId = function (b) {
    var d = null;
    for (var a = 0; a < this.list.childNodes.length; a++) {
        if (d == null) {
            var c = this.list.childNodes[a]._optId;
            if (b == this.t[c].obj.getValue(this.t[c].item)) {
                d = c
            }
        }
    }
    return d
};
dhtmlXCombo.prototype._getOptionValue = function (a) {
    return this._getOptionProp(a, "value", null)
};
dhtmlXCombo.prototype.setSize = function (a) {
    this.conf.combo_width = parseInt(a) - (dhx4.isFF || dhx4.isIE || dhx4.isChrome || dhx4.isOpera ? 2 : 0);
    this.base.style.width = Math.max(0, this.conf.combo_width) + "px";
    this._adjustBase()
};
dhtmlXCombo.prototype._adjustBase = function () {
    this.base.firstChild.style.width = Math.max(0, (this.conf.combo_width - 24 - (this.conf.combo_image ? 23 : 0))) + "px";
    this.base.firstChild.style.marginLeft = (this.conf.combo_image ? "23px" : "0px")
};
dhtmlXCombo.prototype.setOptionWidth = function (a) {
    this.conf.opts_width = (parseInt(a) || null)
};
dhtmlXCombo.prototype.setOptionIndex = function (c, a) {
    if (isNaN(a) || a < 0) {
        return
    }
    var d = this.getOption(c);
    if (d == null) {
        return
    }
    if (a == d.index) {
        return
    }
    var b = this.list.childNodes[d.index];
    b.parentNode.removeChild(b);
    if (this.list.childNodes[a] != null) {
        this.list.insertBefore(b, this.list.childNodes[a])
    } else {
        this.list.appendChild(b)
    }
    b = null
};
dhtmlXCombo.prototype.getOptionsCount = function () {
    return this.list.childNodes.length
};
dhtmlXCombo.prototype._mcMakeTemplate = function (i) {
    var e = "";
    var d = "";
    this.conf.col_w = 0;
    for (var f = 0; f < i.length; f++) {
        var a = Number(parseInt(i[f].width) || 50);
        var c = (i[f].css || "");
        var g = (f == 0 && window.dhx4.isIE6 == true ? "_first" : "");
        d += "<div class='dhxcombo_cell" + g + " " + c + "' style='width:" + a + "px;'><div class='dhxcombo_cell_text'>" + (i[f].option || "&nbsp;") + "</div></div>";
        e += "<div class='dhxcombo_hdrcell" + g + " " + c + "' style='width:" + a + "px;'><div class='dhxcombo_hdrcell_text'>" + (i[f].header || "&nbsp;") + "</div></div>";
        this.conf.col_w += a + 1
    }
    var a = 500;
    var b = document.createElement("DIV");
    b.style.position = "absolute";
    b.style.top = "10px";
    b.style.left = -a * 2 + "px";
    b.style.width = a + "px";
    b.style.height = "50px";
    b.style.overflowY = "scroll";
    b.innerHTML = "<div>&nbsp;</div>";
    document.body.appendChild(b);
    this.conf.col_w += a - b.firstChild.offsetWidth + 10;
    b.parentNode.removeChild(b);
    b = null;
    this.conf.template.option = d;
    this._mcAttachHeader(e);
    this.list.className += " dhxcombolist_multicolumn"
};
dhtmlXCombo.prototype._mcAttachHeader = function (a) {
    if (this.hdr == null) {
        this.hdr = document.createElement("DIV");
        this.hdr.className = "dhxcombolist_" + this.conf.skin + " dhxcombolist_hdr";
        this.hdr.style.display = "none";
        this.list.parentNode.insertBefore(this.hdr, this.list);
        if (typeof(window.addEventListener) == "function") {
            this.hdr.addEventListener("mousedown", this._doOnListMouseDown, false)
        } else {
            this.hdr.attachEvent("onmousedown", this._doOnListMouseDown)
        }
        if (this.conf.opts_type == "checkbox" && this.conf.combo_image == true) {
            this.conf.combo_image = false;
            if (this.base.lastChild.className.match(/dhxcombo_top_image/) != null) {
                this.base.removeChild(this.base.lastChild)
            }
            this._adjustBase()
        }
    }
    this.hdr.innerHTML = "<div class='dhxcombo_hdrtext'>" + a + "</div>"
};
dhtmlXCombo.prototype._mcDetachHeader = function () {
    if (this.hdr != null) {
        if (typeof(window.addEventListener) == "function") {
            this.hdr.removeEventListener("mousedown", this._doOnListMouseDown, false)
        } else {
            this.hdr.detachEvent("onmousedown", this._doOnListMouseDown)
        }
        this.hdr.parentNode.removeChild(this.hdr);
        this.hdr = null
    }
    this.conf.col_w = null;
    this.conf.item_h = null
};
dhtmlXCombo.prototype.modes = {};
dhtmlXCombo.prototype.doWithItem = function (a, g, e, c) {
    var f = (a >= 0 && a < this.list.childNodes.length ? this.list.childNodes[a]._optId : null);
    if (f == null) {
        return null
    }
    if (typeof(this.t[f].obj[g]) != "function") {
        return null
    }
    var d = [this.t[f].item];
    for (var b = 2; b < arguments.length; b++) {
        d.push(arguments[b])
    }
    return this.t[f].obj[g].apply(this.t[f].obj, d)
};
function dhtmlXComboExtend(d, c) {
    for (var b in dhtmlXCombo.prototype.modes[c]) {
        if (typeof(dhtmlXCombo.prototype.modes[d][b]) == "undefined") {
            dhtmlXCombo.prototype.modes[d][b] = dhtmlXCombo.prototype.modes[c][b]
        }
    }
}
dhtmlXCombo.prototype.modes.option = {
    image: false,
    html: false,
    option_css: "dhxcombo_option_text",
    render: function (a, b) {
        a._conf = {value: b.value, css: ""};
        a.className = "dhxcombo_option";
        a.innerHTML = "<div class='" + this.option_css + "'>&nbsp;</div>";
        if (b.css != null) {
            a.lastChild.style.cssText = b.css;
            a._conf.css = b.css
        }
        this.setText(a, b.text);
        return this
    },
    destruct: function (a) {
        a._conf = null
    },
    update: function (a, b) {
        a._conf.value = b.value;
        a._conf.css = b.css;
        a.lastChild.style.cssText = b.css;
        this.setText(a, b.text)
    },
    setText: function (b, c) {
        b._conf.text = c;
        var a = (typeof(c) == "object" ? window.dhx4.template(b._tpl.option, this.replaceHtml(b._conf.text), true) : window.dhx4.trim(this.replaceHtml(b._conf.text) || ""));
        b.lastChild.innerHTML = (a.length == 0 ? "&nbsp;" : a)
    },
    getText: function (c, a, b) {
        if (window.dhx4.s2b(a) && typeof(c._conf.text) == "object") {
            return window.dhx4.template(c._tpl.input, c._conf.text, true)
        }
        if (window.dhx4.s2b(b) && typeof(c._conf.text) == "object") {
            return window.dhx4.template(c._tpl.option, c._conf.text, true)
        }
        return c._conf.text
    },
    getValue: function (a) {
        return a._conf.value
    },
    getCss: function (a) {
        return a._conf.css
    },
    setSelected: function (a, b) {
        a.className = "dhxcombo_option" + (b ? " dhxcombo_option_selected" : "")
    },
    isSelected: function (a) {
        return String(a.className).indexOf("dhxcombo_option_selected") >= 0
    },
    getExtraData: function (a) {
        return {type: "option"}
    },
    replaceHtml: function (d) {
        if (this.html == true) {
            return d
        }
        if (typeof(d) == "object") {
            var c = {};
            for (var b in d) {
                c[b] = this.replaceHtml(d[b])
            }
        } else {
            var c = d.replace(/[\<\>\&\s]/g, function (a) {
                switch (a) {
                    case"<":
                        return "&lt;";
                    case">":
                        return "&gt;";
                    case"&":
                        return "&amp;";
                    case" ":
                        return "&nbsp;"
                }
                return a
            })
        }
        return c
    }
};
dhtmlXCombo.prototype.modes.checkbox = {
    image: true,
    html: true,
    image_css: "dhxcombo_checkbox dhxcombo_chbx_#state#",
    option_css: "dhxcombo_option_text dhxcombo_option_text_chbx",
    render: function (a, b) {
        if (this.image_css_regexp == null) {
            this.image_css_regexp = new RegExp(this.image_css.replace("#state#", "\\d*"))
        }
        a._conf = {value: b.value, css: "", checked: window.dhx4.s2b(b.checked)};
        a.className = "dhxcombo_option";
        if (b.multicol == true) {
            b.text.checkbox = "<div class='" + String(this.image_css).replace("#state#", (a._conf.checked ? "1" : "0")) + "'></div>&nbsp;";
            a.innerHTML = "<div class='" + dhtmlXCombo.prototype.modes.option.option_css + "'></div>"
        } else {
            a.innerHTML = "<div class='" + String(this.image_css).replace("#state#", (a._conf.checked ? "1" : "0")) + "'></div><div class='" + this.option_css + "'>&nbsp;</div>"
        }
        if (b.css != null) {
            a.lastChild.style.cssText += b.css;
            a._conf.css = b.css
        }
        this.setText(a, b.text);
        return this
    },
    setChecked: function (b, c) {
        b._conf.checked = window.dhx4.s2b(c);
        var a = String(this.image_css).replace("#state#", (b._conf.checked ? "1" : "0"));
        this._changeChbxCss(b.childNodes, a)
    },
    _changeChbxCss: function (a, b) {
        for (var c = 0; c < a.length; c++) {
            if (a[c].tagName != null && a[c].className != null && a[c].className.match(this.image_css_regexp) != null) {
                a[c].className = b
            } else {
                if (a[c].childNodes.length > 0) {
                    this._changeChbxCss(a[c].childNodes, b)
                }
            }
        }
    },
    isChecked: function (a) {
        return (a._conf.checked == true)
    },
    getExtraData: function (a) {
        return {type: "checkbox", checked: a._conf.checked}
    },
    optionClick: function (e, d, f) {
        var c = true;
        var b = (d.target || d.srcElement);
        while (c == true && b != null && b != e && b.className != null) {
            if (b.className.match(this.image_css_regexp) != null) {
                var a = [e._conf.value, !e._conf.checked];
                if (f.callEvent("onBeforeCheck", a) === true) {
                    this.setChecked(e, !this.isChecked(e));
                    f.callEvent("onCheck", a)
                }
                c = false;
                a = null
            } else {
                b = b.parentNode
            }
        }
        b = f = e = null;
        return c
    },
    getTopImage: function (b, a) {
        return ""
    },
    topImageClick: function (a, b) {
        return true
    }
};
dhtmlXComboExtend("checkbox", "option");
dhtmlXCombo.prototype.setChecked = function (a, b) {
    this.doWithItem(a, "setChecked", b)
};
dhtmlXCombo.prototype.getChecked = function (a) {
    var b = [];
    for (var c = 0; c < this.list.childNodes.length; c++) {
        if (this.isChecked(c)) {
            b.push(this._getOptionProp(this.list.childNodes[c]._optId, "value", ""))
        }
    }
    return b
};
dhtmlXCombo.prototype.isChecked = function (a) {
    return this.doWithItem(a, "isChecked")
};
dhtmlXCombo.prototype.modes.image = {
    image: true,
    html: true,
    image_css: "dhxcombo_image",
    option_css: "dhxcombo_option_text dhxcombo_option_text_image",
    render: function (a, b) {
        a._conf = {value: b.value, css: ""};
        a.className = "dhxcombo_option";
        a.innerHTML = "<div class='" + this.image_css + "'></div><div class='" + this.option_css + "'>&nbsp;</div>";
        if (b.css != null) {
            a.lastChild.style.cssText += b.css;
            a._conf.css = b.css
        }
        this.setText(a, b.text);
        this.setImage(a, b.img, b.img_dis, b.img_path, b.img_def, b.img_def_dis);
        return this
    },
    update: function (a, b) {
        a._conf.value = b.value;
        a._conf.css = b.css;
        a.lastChild.style.cssText = b.css;
        this.setText(a, b.text);
        this.setImage(a, b.img, b.img_dis, b.img_path, b.img_def, b.img_def_dis)
    },
    setImage: function (c, a, e, f, d, b) {
        if (a != null && a.length > 0) {
            a = f + a
        } else {
            if (d != null && d.length > 0) {
                a = f + d
            } else {
                a = null
            }
        }
        if (e != null && e.length > 0) {
            e = f + e
        } else {
            if (b != null && b.length > 0) {
                e = f + b
            } else {
                if (b == true) {
                    e = a
                } else {
                    e = null
                }
            }
        }
        c._conf.img = a;
        c._conf.img_dis = e;
        c.firstChild.style.backgroundImage = (a != null ? "url(" + a + ")" : "none")
    },
    getExtraData: function (a) {
        return {type: "image"}
    },
    getTopImage: function (d, c) {
        var b = (c ? "img" : "img_dis");
        if (d != null && d._conf[b] != null) {
            return "<div class='" + this.image_css + "' style='background-image:url(" + d._conf[b] + ");'></div>"
        }
        return ""
    }
};
dhtmlXComboExtend("image", "option");
dhtmlXCombo.prototype.setDefaultImage = function (a, b) {
    if (a != null) {
        this.conf.img_def = a
    }
    if (b != null) {
        this.conf.img_def_dis = b
    }
};
dhtmlXCombo.prototype.setImagePath = function (a) {
    this.conf.img_path = a
};
function dhtmlXMenuObject(e, f) {
    var d = this;
    this.conf = {
        skin: (f || window.dhx4.skin || (typeof(dhtmlx) != "undefined" ? dhtmlx.skin : null) || window.dhx4.skinDetect("dhxmenu") || "dhx_skyblue"),
        mode: "web",
        align: "left",
        is_touched: false,
        selected: -1,
        last_click: -1,
        fixed_pos: false,
        rtl: false,
        icons_path: "",
        arrow_ff_fix: (navigator.userAgent.indexOf("MSIE") >= 0 && document.compatMode == "BackCompat"),
        live_id: window.dhx4.newId(),
        tags: {
            root: "menu",
            item: "item",
            text_ext: "itemtext",
            userdata: "userdata",
            tooltip: "tooltip",
            hotkey: "hotkey",
            href: "href"
        },
        autoload: {},
        hide_tm: {},
        top_mode: true,
        top_tmtime: 200,
        v_enabled: false,
        v: {x1: null, x2: null, y1: null, y2: null},
        dir_toplv: "bottom",
        dir_sublv: "right",
        auto_overflow: false,
        overflow_limit: 0,
        of_utm: null,
        of_utime: 20,
        of_ustep: 3,
        of_dtm: null,
        of_dtime: 20,
        of_dstep: 3,
        of_ah: {dhx_skyblue: 24, dhx_web: 25, dhx_terrace: 27},
        of_ih: {dhx_skyblue: 24, dhx_web: 24, dhx_terrace: 24},
        tm_sec: 400,
        tm_handler: null,
        dload: false,
        dload_url: "",
        dload_icon: false,
        dload_params: {action: "loadMenu"},
        dload_pid: "parentId",
        tl_botmarg: 1,
        tl_rmarg: 0,
        tl_ofsleft: 1,
        context: false,
        ctx_zoneid: false,
        ctx_autoshow: true,
        ctx_autohide: true,
        ctx_hideall: true,
        ctx_zones: {},
        ctx_baseid: null,
        selected_sub: [],
        opened_poly: []
    };
    if (typeof(e) == "object" && e != null && typeof(e.tagName) == "undefined") {
        if (e.icons_path != null || e.icon_path != null) {
            this.conf.icons_path = (e.icons_path || e.icon_path)
        }
        if (e.skin != null) {
            this.conf.skin = e.skin
        }
        if (e.visible_area) {
            this.conf.v_enabled = true;
            this.conf.v = {x1: e.visible_area.x1, x2: e.visible_area.x2, y1: e.visible_area.y1, y2: e.visible_area.y2}
        }
        for (var c in {
            json: 1,
            xml: 1,
            items: 1,
            top_text: 1,
            align: 1,
            open_mode: 1,
            overflow: 1,
            dynamic: 1,
            dynamic_icon: 1,
            context: 1,
            onload: 1,
            onclick: 1,
            oncheckboxclick: 1,
            onradioclick: 1
        }) {
            if (e[c] != null) {
                this.conf.autoload[c] = e[c]
            }
        }
        e = e.parent
    }
    if (e == null) {
        this.base = document.body
    } else {
        var b = (typeof(e) == "string" ? document.getElementById(e) : e);
        if (b != null) {
            this.base = b;
            if (!this.base.id) {
                this.base.id = "menuBaseId_" + new Date().getTime()
            }
            this.base.className += " dhtmlxMenu_" + this.conf.skin + "_Middle dir_left";
            this.base._autoSkinUpdate = true;
            if (this.base.oncontextmenu) {
                this.base._oldContextMenuHandler = this.base.oncontextmenu
            }
            this.conf.ctx_baseid = this.base.id;
            this.base.onselectstart = function (a) {
                a = a || event;
                if (a.preventDefault) {
                    a.preventDefault()
                } else {
                    a.returnValue = false
                }
                return false
            };
            this.base.oncontextmenu = function (a) {
                a = a || event;
                if (a.preventDefault) {
                    a.preventDefault()
                } else {
                    a.returnValue = false
                }
                return false
            }
        } else {
            this.base = document.body
        }
    }
    this.idPrefix = "";
    this.topId = "dhxWebMenuTopId";
    this.idPull = {};
    this.itemPull = {};
    this.userData = {};
    this.radio = {};
    this.setSkin = function (h) {
        var i = this.conf.skin;
        this.conf.skin = h;
        switch (this.conf.skin) {
            case"dhx_skyblue":
            case"dhx_web":
                this.conf.tl_botmarg = 2;
                this.conf.tl_rmarg = 1;
                this.conf.tl_ofsleft = 1;
                break;
            case"dhx_terrace":
                this.conf.tl_botmarg = 0;
                this.conf.tl_rmarg = 0;
                this.conf.tl_ofsleft = 0;
                break
        }
        if (this.base._autoSkinUpdate) {
            this.base.className = this.base.className.replace("dhtmlxMenu_" + i + "_Middle", "") + " dhtmlxMenu_" + this.conf.skin + "_Middle"
        }
        for (var g in this.idPull) {
            this.idPull[g].className = String(this.idPull[g].className).replace(i, this.conf.skin)
        }
    };
    this.setSkin(this.conf.skin);
    this._addSubItemToSelected = function (h, g) {
        var a = true;
        for (var i = 0; i < this.conf.selected_sub.length; i++) {
            if ((this.conf.selected_sub[i][0] == h) && (this.conf.selected_sub[i][1] == g)) {
                a = false
            }
        }
        if (a == true) {
            this.conf.selected_sub.push(new Array(h, g))
        }
        return a
    };
    this._removeSubItemFromSelected = function (i, h) {
        var a = new Array();
        var g = false;
        for (var j = 0; j < this.conf.selected_sub.length; j++) {
            if ((this.conf.selected_sub[j][0] == i) && (this.conf.selected_sub[j][1] == h)) {
                g = true
            } else {
                a[a.length] = this.conf.selected_sub[j]
            }
        }
        if (g == true) {
            this.conf.selected_sub = a
        }
        return g
    };
    this._getSubItemToDeselectByPolygon = function (i) {
        var a = new Array();
        for (var j = 0; j < this.conf.selected_sub.length; j++) {
            if (this.conf.selected_sub[j][1] == i) {
                a[a.length] = this.conf.selected_sub[j][0];
                a = a.concat(this._getSubItemToDeselectByPolygon(this.conf.selected_sub[j][0]));
                var h = true;
                for (var g = 0; g < this.conf.opened_poly.length; g++) {
                    if (this.conf.opened_poly[g] == this.conf.selected_sub[j][0]) {
                        h = false
                    }
                }
                if (h == true) {
                    this.conf.opened_poly[this.conf.opened_poly.length] = this.conf.selected_sub[j][0]
                }
                this.conf.selected_sub[j][0] = -1;
                this.conf.selected_sub[j][1] = -1
            }
        }
        return a
    };
    this._hidePolygon = function (a) {
        if (this.idPull["polygon_" + a] != null) {
            if (this.idPull["polygon_" + a]._zId != null) {
                window.dhx4.zim.clear(this.idPull["polygon_" + a]._zId)
            }
            if (typeof(this._menuEffect) != "undefined" && this._menuEffect !== false) {
                this._hidePolygonEffect("polygon_" + a)
            } else {
                if (this.idPull["polygon_" + a].style.display == "none") {
                    return
                }
                this.idPull["polygon_" + a].style.display = "none";
                if (this.idPull["arrowup_" + a] != null) {
                    this.idPull["arrowup_" + a].style.display = "none"
                }
                if (this.idPull["arrowdown_" + a] != null) {
                    this.idPull["arrowdown_" + a].style.display = "none"
                }
                this._updateItemComplexState(a, true, false);
                if (window.dhx4.isIE6 && this.idPull["polygon_" + a + "_ie6cover"] != null) {
                    this.idPull["polygon_" + a + "_ie6cover"].style.display = "none"
                }
            }
            a = String(a).replace(this.idPrefix, "");
            if (a == this.topId) {
                a = null
            }
            this.callEvent("onHide", [a]);
            if (a != null && this.conf.skin == "dhx_terrace" && this.itemPull[this.idPrefix + a].parent == this.idPrefix + this.topId) {
                this._improveTerraceButton(this.idPrefix + a, true)
            }
        }
    };
    this._showPolygon = function (v, i) {
        var E = this._countVisiblePolygonItems(v);
        if (E == 0) {
            return
        }
        var z = "polygon_" + v;
        if ((this.idPull[z] != null) && (this.idPull[v] != null)) {
            if (this.conf.top_mode && this.conf.mode == "web" && !this.conf.context) {
                if (!this.idPull[v]._mouseOver && i == this.conf.dir_toplv) {
                    return
                }
            }
            if (!this.conf.fixed_pos) {
                this._autoDetectVisibleArea()
            }
            var A = 0;
            var D = 0;
            var H = null;
            var s = null;
            if (this.idPull[z]._zId == null) {
                this.idPull[z]._zId = window.dhx4.newId()
            }
            this.idPull[z]._zInd = window.dhx4.zim.reserve(this.idPull[z]._zId);
            this.idPull[z].style.visibility = "hidden";
            this.idPull[z].style.left = "0px";
            this.idPull[z].style.top = "0px";
            this.idPull[z].style.display = "";
            this.idPull[z].style.zIndex = this.idPull[z]._zInd;
            if (this.conf.auto_overflow) {
                if (this.idPull[z].childNodes[1].childNodes[0].offsetHeight > this.conf.v.y2 - this.conf.v.y1) {
                    var r = Math.max(Math.floor((this.conf.v.y2 - this.conf.v.y1 - this.conf.of_ah[this.conf.skin] * 2) / this.conf.of_ih[this.conf.skin]), 1);
                    this.conf.overflow_limit = r
                } else {
                    this.conf.overflow_limit = 0;
                    if (this.idPull["arrowup_" + v] != null) {
                        this._removeUpArrow(String(v).replace(this.idPrefix, ""))
                    }
                    if (this.idPull["arrowdown_" + v] != null) {
                        this._removeDownArrow(String(v).replace(this.idPrefix, ""))
                    }
                }
            }
            if (this.conf.overflow_limit > 0 && this.conf.overflow_limit < E) {
                if (this.idPull["arrowup_" + v] == null) {
                    this._addUpArrow(String(v).replace(this.idPrefix, ""))
                }
                if (this.idPull["arrowdown_" + v] == null) {
                    this._addDownArrow(String(v).replace(this.idPrefix, ""))
                }
                H = this.idPull["arrowup_" + v];
                H.style.display = "none";
                s = this.idPull["arrowdown_" + v];
                s.style.display = "none"
            }
            if (this.conf.overflow_limit > 0 && this.conf.overflow_limit < E) {
                this.idPull[z].childNodes[1].style.height = this.conf.of_ih[this.conf.skin] * this.conf.overflow_limit + "px";
                H.style.width = s.style.width = this.idPull[z].childNodes[1].style.width = this.idPull[z].childNodes[1].childNodes[0].offsetWidth + "px";
                this.idPull[z].childNodes[1].scrollTop = 0;
                H.style.display = "";
                A = H.offsetHeight;
                s.style.display = "";
                D = s.offsetHeight
            } else {
                this.idPull[z].childNodes[1].style.height = "";
                this.idPull[z].childNodes[1].style.width = ""
            }
            if (this.itemPull[v] != null) {
                var p = "polygon_" + this.itemPull[v]["parent"]
            } else {
                if (this.conf.context) {
                    var p = this.idPull[this.idPrefix + this.topId]
                }
            }
            var a = (this.idPull[v].tagName != null ? window.dhx4.absLeft(this.idPull[v]) : this.idPull[v][0]);
            var F = (this.idPull[v].tagName != null ? window.dhx4.absTop(this.idPull[v]) : this.idPull[v][1]);
            var g = (this.idPull[v].tagName != null ? this.idPull[v].offsetWidth : 0);
            var j = (this.idPull[v].tagName != null ? this.idPull[v].offsetHeight : 0);
            var o = 0;
            var n = 0;
            var q = this.idPull[z].offsetWidth;
            var C = this.idPull[z].offsetHeight;
            if (i == "bottom") {
                if (this.conf.rtl) {
                    o = a + (g != null ? g : 0) - q
                } else {
                    if (this.conf.align == "right") {
                        o = a + g - q
                    } else {
                        o = a - 1 + (i == this.conf.dir_toplv ? this.conf.tl_rmarg : 0)
                    }
                }
                n = F - 1 + j + this.conf.tl_botmarg
            }
            if (i == "right") {
                o = a + g - 1;
                n = F + 2
            }
            if (i == "left") {
                o = a - this.idPull[z].offsetWidth + 2;
                n = F + 2
            }
            if (i == "top") {
                o = a - 1;
                n = F - C + 2
            }
            if (this.conf.fixed_pos) {
                var u = 65536;
                var t = 65536
            } else {
                var u = (this.conf.v.x2 != null ? this.conf.v.x2 : 0);
                var t = (this.conf.v.y2 != null ? this.conf.v.y2 : 0);
                if (u == 0) {
                    if (window.innerWidth) {
                        u = window.innerWidth;
                        t = window.innerHeight
                    } else {
                        u = document.body.offsetWidth;
                        t = document.body.scrollHeight
                    }
                }
            }
            if (o + q > u && !this.conf.rtl) {
                o = a - q + 2
            }
            if (o < this.conf.v.x1 && this.conf.rtl) {
                o = a + g - 2
            }
            if (o < 0) {
                o = 0
            }
            if (n + C > t && this.conf.v.y2 != null) {
                n = Math.max(F + j - C + 2, (this.conf.v_enabled ? this.conf.v.y1 + 2 : 2));
                if (this.conf.context && this.idPrefix + this.topId == v && s != null) {
                    n = n - 2
                }
                if (this.itemPull[v] != null && !this.conf.context) {
                    if (this.itemPull[v]["parent"] == this.idPrefix + this.topId) {
                        n = n - this.base.offsetHeight
                    }
                }
            }
            this.idPull[z].style.left = o + "px";
            this.idPull[z].style.top = n + "px";
            if (typeof(this._menuEffect) != "undefined" && this._menuEffect !== false) {
                this._showPolygonEffect(z)
            } else {
                this.idPull[z].style.visibility = "";
                if (this.conf.overflow_limit > 0 && this.conf.overflow_limit < E) {
                    this.idPull[z].childNodes[1].scrollTop = 0;
                    this._checkArrowsState(v)
                }
                if (window.dhx4.isIE6) {
                    var m = z + "_ie6cover";
                    if (this.idPull[m] == null) {
                        var l = document.createElement("IFRAME");
                        l.className = "dhtmlxMenu_IE6CoverFix_" + this.conf.skin;
                        l.frameBorder = 0;
                        l.setAttribute("src", "javascript:false;");
                        document.body.insertBefore(l, document.body.firstChild);
                        this.idPull[m] = l
                    }
                    this.idPull[m].style.left = o + "px";
                    this.idPull[m].style.top = n + "px";
                    this.idPull[m].style.width = this.idPull[z].offsetWidth + "px";
                    this.idPull[m].style.height = this.idPull[z].offsetHeight + "px";
                    this.idPull[m].style.zIndex = this.idPull[z].style.zIndex - 1;
                    this.idPull[m].style.display = ""
                }
            }
            v = String(v).replace(this.idPrefix, "");
            if (v == this.topId) {
                v = null
            }
            this.callEvent("onShow", [v]);
            if (v != null && this.conf.skin == "dhx_terrace" && this.itemPull[this.idPrefix + v].parent == this.idPrefix + this.topId) {
                this._improveTerraceButton(this.idPrefix + v, false)
            }
        }
    };
    this._redistribSubLevelSelection = function (l, j) {
        while (this.conf.opened_poly.length > 0) {
            this.conf.opened_poly.pop()
        }
        var a = this._getSubItemToDeselectByPolygon(j);
        this._removeSubItemFromSelected(-1, -1);
        for (var g = 0; g < a.length; g++) {
            if ((this.idPull[a[g]] != null) && (a[g] != l)) {
                if (this.itemPull[a[g]]["state"] == "enabled") {
                    this.idPull[a[g]].className = "sub_item"
                }
            }
        }
        for (var g = 0; g < this.conf.opened_poly.length; g++) {
            if (this.conf.opened_poly[g] != j) {
                this._hidePolygon(this.conf.opened_poly[g])
            }
        }
        if (this.itemPull[l]["state"] == "enabled") {
            this.idPull[l].className = "sub_item_selected";
            if (this.itemPull[l]["complex"] && this.conf.dload && (this.itemPull[l]["loaded"] == "no")) {
                if (this.conf.dload_icon == true) {
                    this._updateLoaderIcon(l, true)
                }
                this.itemPull[l].loaded = "get";
                var h = l.replace(this.idPrefix, "");
                this._dhxdataload.onBeforeXLS = function () {
                    var m = {params: {}};
                    m.params[this.conf.dload_pid] = h;
                    for (var i in this.conf.dload_params) {
                        m.params[i] = this.conf.dload_params[i]
                    }
                    return m
                };
                this.loadStruct(this.conf.dload_url)
            }
            if (this.itemPull[l]["complex"] || (this.conf.dload && (this.itemPull[l]["loaded"] == "yes"))) {
                if ((this.itemPull[l]["complex"]) && (this.idPull["polygon_" + l] != null)) {
                    this._updateItemComplexState(l, true, true);
                    this._showPolygon(l, this.conf.dir_sublv)
                }
            }
            this._addSubItemToSelected(l, j);
            this.conf.selected = l
        }
    };
    this._doOnClick = function (g, s, i) {
        this.conf.last_click = g;
        if (this.itemPull[this.idPrefix + g]["href_link"] != null && this.itemPull[this.idPrefix + g].state == "enabled") {
            var l = document.createElement("FORM");
            var o = String(this.itemPull[this.idPrefix + g]["href_link"]).split("?");
            l.action = o[0];
            if (o[1] != null) {
                var h = String(o[1]).split("&");
                for (var a = 0; a < h.length; a++) {
                    var r = String(h[a]).split("=");
                    var n = document.createElement("INPUT");
                    n.type = "hidden";
                    n.name = (r[0] || "");
                    n.value = (r[1] || "");
                    l.appendChild(n)
                }
            }
            if (this.itemPull[this.idPrefix + g]["href_target"] != null) {
                l.target = this.itemPull[this.idPrefix + g]["href_target"]
            }
            l.style.display = "none";
            document.body.appendChild(l);
            l.submit();
            if (l != null) {
                document.body.removeChild(l);
                l = null
            }
            return
        }
        if (s.charAt(0) == "c") {
            return
        }
        if (s.charAt(1) == "d") {
            return
        }
        if (s.charAt(2) == "s") {
            return
        }
        if (this.checkEvent("onClick")) {
            this.callEvent("onClick", [g, this.conf.ctx_zoneid, i])
        } else {
            if ((s.charAt(1) == "d") || (this.conf.mode == "win" && s.charAt(2) == "t")) {
                return
            }
        }
        if (this.conf.context && this._isContextMenuVisible() && this.conf.ctx_autohide) {
            this._hideContextMenu()
        } else {
            if (this._clearAndHide) {
                this._clearAndHide()
            }
        }
    };
    this._doOnTouchMenu = function (a) {
        if (this.conf.is_touched == false) {
            this.conf.is_touched = true;
            if (this.checkEvent("onTouch")) {
                this.callEvent("onTouch", [a])
            }
        }
    };
    this._searchMenuNode = function (h, l) {
        var a = new Array();
        for (var i = 0; i < l.length; i++) {
            if (typeof(l[i]) == "object") {
                if (l[i].length == 5) {
                    if (typeof(l[i][0]) != "object") {
                        if ((l[i][0].replace(this.idPrefix, "") == h) && (i == 0)) {
                            a = l
                        }
                    }
                }
                var g = this._searchMenuNode(h, l[i]);
                if (g.length > 0) {
                    a = g
                }
            }
        }
        return a
    };
    this._getMenuNodes = function (i) {
        var g = new Array;
        for (var h in this.itemPull) {
            if (this.itemPull[h]["parent"] == i) {
                g[g.length] = h
            }
        }
        return g
    };
    this._genStr = function (a) {
        var g = "dhxId_";
        var i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var h = 0; h < a; h++) {
            g += i.charAt(Math.round(Math.random() * (i.length - 1)))
        }
        return g
    };
    this.getItemType = function (a) {
        a = this.idPrefix + a;
        if (this.itemPull[a] == null) {
            return null
        }
        return this.itemPull[a]["type"]
    };
    this.forEachItem = function (h) {
        for (var g in this.itemPull) {
            h(String(g).replace(this.idPrefix, ""))
        }
    };
    this._clearAndHide = function () {
        d.conf.selected = -1;
        d.conf.last_click = -1;
        while (d.conf.opened_poly.length > 0) {
            d.conf.opened_poly.pop()
        }
        for (var a = 0; a < d.conf.selected_sub.length; a++) {
            var g = d.conf.selected_sub[a][0];
            if (d.idPull[g] != null) {
                if (d.itemPull[g]["state"] == "enabled") {
                    if (d.idPull[g].className == "sub_item_selected") {
                        d.idPull[g].className = "sub_item"
                    }
                    if (d.idPull[g].className == "dhtmlxMenu_" + d.conf.skin + "_TopLevel_Item_Selected") {
                        if (d.itemPull[g]["cssNormal"] != null) {
                            d.idPull[g].className = d.itemPull[g]["cssNormal"]
                        } else {
                            d.idPull[g].className = "dhtmlxMenu_" + d.conf.skin + "_TopLevel_Item_Normal"
                        }
                    }
                }
            }
            d._hidePolygon(g)
        }
        d.conf.is_touched = false;
        if (d.conf.context && d.conf.ctx_hideall) {
            d._hidePolygon(d.idPrefix + d.topId)
        }
    };
    this._showSubLevelItem = function (g, a) {
        if (document.getElementById("arrow_" + this.idPrefix + g) != null) {
            document.getElementById("arrow_" + this.idPrefix + g).style.display = (a ? "none" : "")
        }
        if (document.getElementById("image_" + this.idPrefix + g) != null) {
            document.getElementById("image_" + this.idPrefix + g).style.display = (a ? "none" : "")
        }
        if (document.getElementById(this.idPrefix + g) != null) {
            document.getElementById(this.idPrefix + g).style.display = (a ? "" : "none")
        }
    };
    this._hideSubLevelItem = function (a) {
        this._showSubLevelItem(a, true)
    };
    this.idPrefix = this._genStr(12) + "_";
    this._bodyClick = function (a) {
        a = a || event;
        if (a.button == 2 || (window.dhx4.isOpera && a.ctrlKey == true)) {
            return
        }
        if (d.conf.context) {
            if (d.conf.ctx_autohide && (!window.dhx4.isOpera || (d._isContextMenuVisible() && window.dhx4.isOpera))) {
                d._hideContextMenu()
            }
        } else {
            if (d._clearAndHide) {
                d._clearAndHide()
            }
        }
    };
    this._bodyContext = function (h) {
        h = h || event;
        var g = String((h.srcElement || h.target).className);
        if (g.search("dhtmlxMenu") != -1 && g.search("SubLevelArea") != -1) {
            return
        }
        var a = true;
        var i = h.target || h.srcElement;
        while (i != null) {
            if (i.id != null) {
                if (d.isContextZone(i.id)) {
                    a = false
                }
            }
            if (i == document.body) {
                a = false
            }
            i = i.parentNode
        }
        if (a) {
            d.hideContextMenu()
        }
    };
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("click", this._bodyClick, false);
        window.addEventListener("contextmenu", this._bodyContext, false)
    } else {
        document.body.attachEvent("onclick", this._bodyClick);
        document.body.attachEvent("oncontextmenu", this._bodyContext)
    }
    this.unload = function () {
        window.dhx4._eventable(this, "clear");
        dhtmlXMenuObject.prototype.liveInst[this.conf.live_id] = null;
        try {
            delete dhtmlXMenuObject.prototype.liveInst[this.conf.live_id]
        } catch (h) {
        }
        this.conf.live_id = null;
        if (typeof(window.addEventListener) == "function") {
            window.removeEventListener("click", this._bodyClick, false);
            window.removeEventListener("contextmenu", this._bodyContext, false)
        } else {
            document.body.detachEvent("onclick", this._bodyClick);
            document.body.detachEvent("oncontextmenu", this._bodyContext)
        }
        this._bodyClick = null;
        this._bodyContext = null;
        this.removeItem(this.idPrefix + this.topId, true);
        this.itemPull = null;
        this.idPull = null;
        if (this.conf.context) {
            for (var g in this.conf.ctx_zones) {
                this.removeContextZone(g)
            }
        }
        if (this.cont != null) {
            this.cont.className = "";
            this.cont.parentNode.removeChild(this.cont);
            this.cont = null
        }
        if (this.base != null) {
            if (!this.conf.context) {
                this.base.className = ""
            }
            if (!this.conf.context) {
                this.base.oncontextmenu = (this.base._oldContextMenuHandler || null)
            }
            this.base.onselectstart = null;
            this.base = null
        }
        for (var g in this) {
            this[g] = null
        }
        d = null
    };
    dhtmlXMenuObject.prototype.liveInst[this.conf.live_id] = this;
    window.dhx4._enableDataLoading(this, "_initObj", "_xmlToJson", this.conf.tags.root, {struct: true});
    window.dhx4._eventable(this);
    if (window.dhx4.s2b(this.conf.autoload.context) == true) {
        this.renderAsContextMenu()
    }
    if (this.conf.autoload.dynamic != null) {
        this.enableDynamicLoading(this.conf.autoload.dynamic, window.dhx4.s2b(this.conf.autoload.dynamic_icon))
    } else {
        if (this.conf.autoload.items != null) {
            this.loadStruct(this.conf.autoload.items, this.conf.autoload.onload)
        } else {
            if (this.conf.autoload.json != null) {
                this.loadStruct(this.conf.autoload.json, this.conf.autoload.onload)
            } else {
                if (this.conf.autoload.xml != null) {
                    this.loadStruct(this.conf.autoload.xml, this.conf.autoload.onload)
                }
            }
        }
    }
    for (var c in {onclick: 1, oncheckboxclick: 1, onradioclick: 1}) {
        if (this.conf.autoload[c] != null) {
            if (typeof(this.conf.autoload[c]) == "function") {
                this.attachEvent(c, this.conf.autoload[c])
            } else {
                if (typeof(window[this.conf.autoload[c]]) == "function") {
                    this.attachEvent(c, window[this.conf.autoload[c]])
                }
            }
        }
    }
    if (this.conf.autoload.top_text != null) {
        this.setTopText(this.conf.autoload.top_text)
    }
    if (this.conf.autoload.align != null) {
        this.setAlign(this.conf.autoload.align)
    }
    if (this.conf.autoload.open_mode != null) {
        this.setOpenMode(this.conf.autoload.open_mode)
    }
    if (this.conf.autoload.overflow != null) {
        this.setOverflowHeight(this.conf.autoload.overflow)
    }
    for (var c in this.conf.autoload) {
        this.conf.autoload[c] = null;
        delete this.conf.autoload[c]
    }
    this.conf.autoload = null;
    return this
}
dhtmlXMenuObject.prototype._init = function () {
    if (this._isInited == true) {
        return
    }
    if (this.conf.dload) {
        this._dhxdataload.onBeforeXLS = function () {
            var c = {params: {}};
            for (var b in this.conf.dload_params) {
                c.params[b] = this.conf.dload_params[b]
            }
            return c
        };
        this.loadStruct(this.conf.dload_url)
    } else {
        this._initTopLevelMenu();
        this._isInited = true
    }
};
dhtmlXMenuObject.prototype._countVisiblePolygonItems = function (f) {
    var d = 0;
    for (var b in this.itemPull) {
        var c = this.itemPull[b]["parent"];
        var e = this.itemPull[b]["type"];
        if (this.idPull[b] != null) {
            if (c == f && (e == "item" || e == "radio" || e == "checkbox") && this.idPull[b].style.display != "none") {
                d++
            }
        }
    }
    return d
};
dhtmlXMenuObject.prototype._redefineComplexState = function (b) {
    if (this.idPrefix + this.topId == b) {
        return
    }
    if ((this.idPull["polygon_" + b] != null) && (this.idPull[b] != null)) {
        var a = this._countVisiblePolygonItems(b);
        if ((a > 0) && (!this.itemPull[b]["complex"])) {
            this._updateItemComplexState(b, true, false)
        }
        if ((a == 0) && (this.itemPull[b]["complex"])) {
            this._updateItemComplexState(b, false, false)
        }
    }
};
dhtmlXMenuObject.prototype._updateItemComplexState = function (e, c, d) {
    if ((!this.conf.context) && (this._getItemLevelType(e.replace(this.idPrefix, "")) == "TopLevel")) {
        this.itemPull[e]["complex"] = c;
        return
    }
    if ((this.idPull[e] == null) || (this.itemPull[e] == null)) {
        return
    }
    this.itemPull[e]["complex"] = c;
    if (e == this.idPrefix + this.topId) {
        return
    }
    var a = null;
    var b = this.idPull[e].childNodes[this.conf.rtl ? 0 : 2];
    if (b.childNodes[0]) {
        if (String(b.childNodes[0].className).search("complex_arrow") === 0) {
            a = b.childNodes[0]
        }
    }
    if (this.itemPull[e]["complex"]) {
        if (a == null) {
            a = document.createElement("DIV");
            a.className = "complex_arrow";
            a.id = "arrow_" + e;
            while (b.childNodes.length > 0) {
                b.removeChild(b.childNodes[0])
            }
            b.appendChild(a)
        }
        if (this.conf.dload && (this.itemPull[e].loaded == "get") && this.conf.dload_icon) {
            if (a.className != "complex_arrow_loading") {
                a.className = "complex_arrow_loading"
            }
        } else {
            a.className = "complex_arrow"
        }
        return
    }
    if ((!this.itemPull[e]["complex"]) && (a != null)) {
        b.removeChild(a);
        if (this.itemPull[e]["hotkey_backup"] != null && this.setHotKey) {
            this.setHotKey(e.replace(this.idPrefix, ""), this.itemPull[e]["hotkey_backup"])
        }
    }
};
dhtmlXMenuObject.prototype._getItemLevelType = function (a) {
    return (this.itemPull[this.idPrefix + a]["parent"] == this.idPrefix + this.topId ? "TopLevel" : "SubLevelArea")
};
dhtmlXMenuObject.prototype.setIconsPath = function (a) {
    this.conf.icons_path = a
};
dhtmlXMenuObject.prototype._updateItemImage = function (c, d) {
    c = this.idPrefix + c;
    var i = this.itemPull[c]["type"];
    if (i == "checkbox" || i == "radio") {
        return
    }
    var f = (this.itemPull[c]["parent"] == this.idPrefix + this.topId && !this.conf.context);
    var g = null;
    if (f) {
        for (var a = 0; a < this.idPull[c].childNodes.length; a++) {
            try {
                if (this.idPull[c].childNodes[a].className == "dhtmlxMenu_TopLevel_Item_Icon") {
                    g = this.idPull[c].childNodes[a]
                }
            } catch (h) {
            }
        }
    } else {
        try {
            var g = this.idPull[c].childNodes[this.conf.rtl ? 2 : 0].childNodes[0]
        } catch (h) {
        }
        if (!(g != null && typeof(g.className) != "undefined" && g.className == "sub_icon")) {
            g = null
        }
    }
    var l = this.itemPull[c][(this.itemPull[c]["state"] == "enabled" ? "imgen" : "imgdis")];
    if (l.length > 0) {
        if (g != null) {
            g.src = this.conf.icons_path + l
        } else {
            if (f) {
                var g = document.createElement("IMG");
                g.className = "dhtmlxMenu_TopLevel_Item_Icon";
                g.src = this.conf.icons_path + l;
                g.border = "0";
                g.id = "image_" + c;
                if (!this.conf.rtl && this.idPull[c].childNodes.length > 0) {
                    this.idPull[c].insertBefore(g, this.idPull[c].childNodes[0])
                } else {
                    this.idPull[c].appendChild(g)
                }
            } else {
                var g = document.createElement("IMG");
                g.className = "sub_icon";
                g.src = this.conf.icons_path + l;
                g.border = "0";
                g.id = "image_" + c;
                var j = this.idPull[c].childNodes[this.conf.rtl ? 2 : 0];
                while (j.childNodes.length > 0) {
                    j.removeChild(j.childNodes[0])
                }
                j.appendChild(g)
            }
        }
    } else {
        if (g != null) {
            var b = g.parentNode;
            b.removeChild(g);
            b.innerHTML = "&nbsp;";
            b = g = null
        }
    }
};
dhtmlXMenuObject.prototype._getAllParents = function (f) {
    var c = new Array();
    for (var b in this.itemPull) {
        if (this.itemPull[b]["parent"] == f) {
            c[c.length] = this.itemPull[b]["id"];
            if (this.itemPull[b]["complex"]) {
                var d = this._getAllParents(this.itemPull[b]["id"]);
                for (var e = 0; e < d.length; e++) {
                    c[c.length] = d[e]
                }
            }
        }
    }
    return c
};
dhtmlXMenuObject.prototype._autoDetectVisibleArea = function () {
    if (this.conf.v_enabled) {
        return
    }
    var a = window.dhx4.screenDim();
    this.conf.v.x1 = a.left;
    this.conf.v.x2 = a.right;
    this.conf.v.y1 = a.top;
    this.conf.v.y2 = a.bottom
};
dhtmlXMenuObject.prototype.getItemPosition = function (e) {
    e = this.idPrefix + e;
    var d = -1;
    if (this.itemPull[e] == null) {
        return d
    }
    var a = this.itemPull[e]["parent"];
    var c = (this.idPull["polygon_" + a] != null ? this.idPull["polygon_" + a].tbd : this.cont);
    for (var b = 0; b < c.childNodes.length; b++) {
        if (c.childNodes[b] == this.idPull["separator_" + e] || c.childNodes[b] == this.idPull[e]) {
            d = b
        }
    }
    return d
};
dhtmlXMenuObject.prototype.setItemPosition = function (g, f) {
    g = this.idPrefix + g;
    if (this.idPull[g] == null) {
        return
    }
    var b = (this.itemPull[g]["parent"] == this.idPrefix + this.topId);
    var a = this.idPull[g];
    var d = this.getItemPosition(g.replace(this.idPrefix, ""));
    var c = this.itemPull[g]["parent"];
    var e = (this.idPull["polygon_" + c] != null ? this.idPull["polygon_" + c].tbd : this.cont);
    e.removeChild(e.childNodes[d]);
    if (f < 0) {
        f = 0
    }
    if (b && f < 1) {
        f = 1
    }
    if (f < e.childNodes.length) {
        e.insertBefore(a, e.childNodes[f])
    } else {
        e.appendChild(a)
    }
};
dhtmlXMenuObject.prototype.getParentId = function (a) {
    a = this.idPrefix + a;
    if (this.itemPull[a] == null) {
        return null
    }
    return ((this.itemPull[a]["parent"] != null ? this.itemPull[a]["parent"] : this.topId).replace(this.idPrefix, ""))
};
dhtmlXMenuObject.prototype.hide = function () {
    this._clearAndHide()
};
dhtmlXMenuObject.prototype.clearAll = function () {
    this.removeItem(this.idPrefix + this.topId, true);
    this._isInited = false;
    this.idPrefix = this._genStr(12) + "_";
    this.itemPull = {}
};
if (typeof(dhtmlXMenuObject.prototype.liveInst) == "undefined") {
    dhtmlXMenuObject.prototype.liveInst = {}
}
dhtmlXMenuObject.prototype._redistribTopLevelSelection = function (d, b) {
    var a = this._getSubItemToDeselectByPolygon("parent");
    this._removeSubItemFromSelected(-1, -1);
    for (var c = 0; c < a.length; c++) {
        if (a[c] != d) {
            this._hidePolygon(a[c])
        }
        if ((this.idPull[a[c]] != null) && (a[c] != d)) {
            this.idPull[a[c]].className = this.idPull[a[c]].className.replace(/Selected/g, "Normal")
        }
    }
    if (this.itemPull[this.idPrefix + d]["state"] == "enabled") {
        this.idPull[this.idPrefix + d].className = "dhtmlxMenu_" + this.conf.skin + "_TopLevel_Item_Selected";
        this._addSubItemToSelected(this.idPrefix + d, "parent");
        this.conf.selected = (this.conf.mode == "win" ? (this.conf.selected != -1 ? d : this.conf.selected) : d);
        if ((this.itemPull[this.idPrefix + d]["complex"]) && (this.conf.selected != -1)) {
            this._showPolygon(this.idPrefix + d, this.conf.dir_toplv)
        }
    }
};
dhtmlXMenuObject.prototype._initTopLevelMenu = function () {
    this.conf.dir_toplv = "bottom";
    this.conf.dir_sublv = (this.conf.rtl ? "left" : "right");
    if (this.conf.context) {
        this.idPull[this.idPrefix + this.topId] = new Array(0, 0);
        this._addSubMenuPolygon(this.idPrefix + this.topId, this.idPrefix + this.topId)
    } else {
        var a = this._getMenuNodes(this.idPrefix + this.topId);
        for (var b = 0; b < a.length; b++) {
            if (this.itemPull[a[b]]["type"] == "item") {
                this._renderToplevelItem(a[b], null)
            }
            if (this.itemPull[a[b]]["type"] == "separator") {
                this._renderSeparator(a[b], null)
            }
        }
    }
};
dhtmlXMenuObject.prototype._renderToplevelItem = function (g, f) {
    var e = this;
    var a = document.createElement("DIV");
    a.id = g;
    if (this.itemPull[g]["state"] == "enabled" && this.itemPull[g]["cssNormal"] != null) {
        a.className = this.itemPull[g]["cssNormal"]
    } else {
        a.className = "dhtmlxMenu_" + this.conf.skin + "_TopLevel_Item_" + (this.itemPull[g]["state"] == "enabled" ? "Normal" : "Disabled")
    }
    if (this.itemPull[g]["title"] != "") {
        var d = document.createElement("DIV");
        d.className = "top_level_text";
        d.innerHTML = this.itemPull[g]["title"];
        a.appendChild(d)
    }
    if (this.itemPull[g]["tip"].length > 0) {
        a.title = this.itemPull[g]["tip"]
    }
    if ((this.itemPull[g]["imgen"] != "") || (this.itemPull[g]["imgdis"] != "")) {
        var c = this.itemPull[g][(this.itemPull[g]["state"] == "enabled") ? "imgen" : "imgdis"];
        if (c) {
            var b = document.createElement("IMG");
            b.border = "0";
            b.id = "image_" + g;
            b.src = this.conf.icons_path + c;
            b.className = "dhtmlxMenu_TopLevel_Item_Icon";
            if (a.childNodes.length > 0 && !this.conf.rtl) {
                a.insertBefore(b, a.childNodes[0])
            } else {
                a.appendChild(b)
            }
        }
    }
    a.onselectstart = function (h) {
        h = h || event;
        if (h.preventDefault) {
            h.preventDefault()
        } else {
            h.returnValue = false
        }
        return false
    };
    a.oncontextmenu = function (h) {
        h = h || event;
        if (h.preventDefault) {
            h.preventDefault()
        } else {
            h.returnValue = false
        }
        return false
    };
    if (!this.cont) {
        this.cont = document.createElement("DIV");
        this.cont.dir = "ltr";
        this.cont.className = (this.conf.align == "right" ? "align_right" : "align_left");
        this.base.appendChild(this.cont)
    }
    if (f != null) {
        f++;
        if (f < 0) {
            f = 0
        }
        if (f > this.cont.childNodes.length - 1) {
            f = null
        }
    }
    if (f != null) {
        this.cont.insertBefore(a, this.cont.childNodes[f])
    } else {
        this.cont.appendChild(a)
    }
    this.idPull[a.id] = a;
    if (this.itemPull[g]["complex"] && (!this.conf.dload)) {
        this._addSubMenuPolygon(this.itemPull[g]["id"], this.itemPull[g]["id"])
    }
    a.onmouseover = function () {
        if (e.conf.mode == "web") {
            window.clearTimeout(e.conf.tm_handler)
        }
        var h = e._getSubItemToDeselectByPolygon("parent");
        e._removeSubItemFromSelected(-1, -1);
        for (var l = 0; l < h.length; l++) {
            if (h[l] != this.id) {
                e._hidePolygon(h[l])
            }
            if ((e.idPull[h[l]] != null) && (h[l] != this.id)) {
                if (e.itemPull[h[l]]["cssNormal"] != null) {
                    e.idPull[h[l]].className = e.itemPull[h[l]]["cssNormal"]
                } else {
                    if (e.idPull[h[l]].className == "sub_item_selected") {
                        e.idPull[h[l]].className = "sub_item"
                    }
                    e.idPull[h[l]].className = e.idPull[h[l]].className.replace(/Selected/g, "Normal")
                }
            }
        }
        if (e.itemPull[this.id]["state"] == "enabled") {
            this.className = "dhtmlxMenu_" + e.conf.skin + "_TopLevel_Item_Selected";
            e._addSubItemToSelected(this.id, "parent");
            e.conf.selected = (e.conf.mode == "win" ? (e.conf.selected != -1 ? this.id : e.conf.selected) : this.id);
            if (e.conf.dload) {
                if (e.itemPull[this.id].loaded == "no") {
                    this._dynLoadTM = new Date().getTime();
                    e.itemPull[this.id].loaded = "get";
                    var m = this.id.replace(e.idPrefix, "");
                    e._dhxdataload.onBeforeXLS = function () {
                        var n = {params: {}};
                        n.params[this.conf.dload_pid] = m;
                        for (var i in this.conf.dload_params) {
                            n.params[i] = this.conf.dload_params[i]
                        }
                        return n
                    };
                    e.loadStruct(e.conf.dload_url)
                }
                if (e.conf.top_mode && e.conf.mode == "web" && !e.conf.context) {
                    this._mouseOver = true
                }
            }
            if ((!e.conf.dload) || (e.conf.dload && (!e.itemPull[this.id]["loaded"] || e.itemPull[this.id]["loaded"] == "yes"))) {
                if ((e.itemPull[this.id]["complex"]) && (e.conf.selected != -1)) {
                    if (e.conf.top_mode && e.conf.mode == "web" && !e.conf.context) {
                        this._mouseOver = true;
                        var j = this.id;
                        this._menuOpenTM = window.setTimeout(function () {
                            e._showPolygon(j, e.conf.dir_toplv)
                        }, e.conf.top_tmtime)
                    } else {
                        e._showPolygon(this.id, e.conf.dir_toplv)
                    }
                }
            }
        }
        e._doOnTouchMenu(this.id.replace(e.idPrefix, ""))
    };
    a.onmouseout = function () {
        if (!((e.itemPull[this.id]["complex"]) && (e.conf.selected != -1)) && (e.itemPull[this.id]["state"] == "enabled")) {
            if (e.itemPull[this.id]["cssNormal"] != null) {
                a.className = e.itemPull[this.id]["cssNormal"]
            } else {
                a.className = "dhtmlxMenu_" + e.conf.skin + "_TopLevel_Item_Normal"
            }
        }
        if (e.conf.mode == "web") {
            window.clearTimeout(e.conf.tm_handler);
            e.conf.tm_handler = window.setTimeout(function () {
                e._clearAndHide()
            }, e.conf.tm_sec, "JavaScript")
        }
        if (e.conf.top_mode && e.conf.mode == "web" && !e.conf.context) {
            this._mouseOver = false;
            window.clearTimeout(this._menuOpenTM)
        }
    };
    a.onclick = function (l) {
        if (e.conf.mode == "web") {
            window.clearTimeout(e.conf.tm_handler)
        }
        if (e.conf.mode != "web" && e.itemPull[this.id]["state"] == "disabled") {
            return
        }
        l = l || event;
        l.cancelBubble = true;
        if (l.preventDefault) {
            l.preventDefault()
        } else {
            l.returnValue = false
        }
        if (e.conf.mode == "win") {
            if (e.itemPull[this.id]["complex"]) {
                if (e.conf.selected == this.id) {
                    e.conf.selected = -1;
                    var j = false
                } else {
                    e.conf.selected = this.id;
                    var j = true
                }
                if (j) {
                    e._showPolygon(this.id, e.conf.dir_toplv)
                } else {
                    e._hidePolygon(this.id)
                }
            }
        }
        var h = (e.itemPull[this.id]["complex"] ? "c" : "-");
        var m = (e.itemPull[this.id]["state"] != "enabled" ? "d" : "-");
        var i = {ctrl: l.ctrlKey, alt: l.altKey, shift: l.shiftKey};
        e._doOnClick(this.id.replace(e.idPrefix, ""), h + m + "t", i);
        return false
    };
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXMenuObject.prototype._addSubMenuPolygon = function (f, e) {
    var b = this._renderSublevelPolygon(f, e);
    var a = this._getMenuNodes(e);
    for (c = 0; c < a.length; c++) {
        if (this.itemPull[a[c]]["type"] == "separator") {
            this._renderSeparator(a[c], null)
        } else {
            this._renderSublevelItem(a[c], null)
        }
    }
    if (f == e) {
        var d = "topLevel"
    } else {
        var d = "subLevel"
    }
    for (var c = 0; c < a.length; c++) {
        if (this.itemPull[a[c]]["complex"]) {
            this._addSubMenuPolygon(f, this.itemPull[a[c]]["id"])
        }
    }
};
dhtmlXMenuObject.prototype._renderSublevelPolygon = function (e, d) {
    var b = document.createElement("DIV");
    b.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_Polygon " + (this.conf.rtl ? "dir_right" : "");
    b.dir = "ltr";
    b.oncontextmenu = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        f.cancelBubble = true;
        return false
    };
    b.id = "polygon_" + d;
    b.onclick = function (f) {
        f = f || event;
        f.cancelBubble = true
    };
    b.style.display = "none";
    document.body.insertBefore(b, document.body.firstChild);
    b.innerHTML = '<div style="position:relative;"></div><div style="position: relative; overflow:hidden;"></div><div style="position:relative;"></div>';
    var c = document.createElement("TABLE");
    c.className = "dhtmlxMebu_SubLevelArea_Tbl";
    c.cellSpacing = 0;
    c.cellPadding = 0;
    c.border = 0;
    var a = document.createElement("TBODY");
    c.appendChild(a);
    b.childNodes[1].appendChild(c);
    b.tbl = c;
    b.tbd = a;
    this.idPull[b.id] = b;
    if (this.sxDacProc != null) {
        this.idPull["sxDac_" + d] = new this.sxDacProc(b, b.className);
        if (window.dhx4.isIE) {
            this.idPull["sxDac_" + d]._setSpeed(this.dacSpeedIE);
            this.idPull["sxDac_" + d]._setCustomCycle(this.dacCyclesIE)
        } else {
            this.idPull["sxDac_" + d]._setSpeed(this.dacSpeed);
            this.idPull["sxDac_" + d]._setCustomCycle(this.dacCycles)
        }
    }
    return b
};
dhtmlXMenuObject.prototype._renderSublevelItem = function (a, j) {
    var h = this;
    var i = document.createElement("TR");
    i.className = (this.itemPull[a]["state"] == "enabled" ? "sub_item" : "sub_item_dis");
    var g = document.createElement("TD");
    g.className = "sub_item_icon";
    var l = this.itemPull[a][(this.itemPull[a]["state"] == "enabled" ? "imgen" : "imgdis")];
    if (l != "") {
        var o = this.itemPull[a]["type"];
        if (o == "checkbox" || o == "radio") {
            var e = document.createElement("DIV");
            e.id = "image_" + this.itemPull[a]["id"];
            e.className = "sub_icon " + l;
            g.appendChild(e)
        }
        if (!(o == "checkbox" || o == "radio")) {
            var e = document.createElement("IMG");
            e.id = "image_" + this.itemPull[a]["id"];
            e.className = "sub_icon";
            e.src = this.conf.icons_path + l;
            g.appendChild(e)
        }
    } else {
        g.innerHTML = "&nbsp;"
    }
    var f = document.createElement("TD");
    f.className = "sub_item_text";
    if (this.itemPull[a]["title"] != "") {
        var n = document.createElement("DIV");
        n.className = "sub_item_text";
        n.innerHTML = this.itemPull[a]["title"];
        f.appendChild(n)
    } else {
        f.innerHTML = "&nbsp;"
    }
    var d = document.createElement("TD");
    d.className = "sub_item_hk";
    if (this.itemPull[a]["complex"]) {
        var b = document.createElement("DIV");
        b.className = "complex_arrow";
        b.id = "arrow_" + this.itemPull[a]["id"];
        d.appendChild(b)
    } else {
        if (this.itemPull[a]["hotkey"].length > 0 && !this.itemPull[a]["complex"]) {
            var c = document.createElement("DIV");
            c.className = "sub_item_hk";
            c.innerHTML = this.itemPull[a]["hotkey"];
            d.appendChild(c)
        } else {
            d.innerHTML = "&nbsp;"
        }
    }
    i.appendChild(this.conf.rtl ? d : g);
    i.appendChild(f);
    i.appendChild(this.conf.rtl ? g : d);
    i.id = this.itemPull[a]["id"];
    i.parent = this.itemPull[a]["parent"];
    if (this.itemPull[a]["tip"].length > 0) {
        i.title = this.itemPull[a]["tip"]
    }
    i.onselectstart = function (p) {
        p = p || event;
        if (p.preventDefault) {
            p.preventDefault()
        } else {
            p.returnValue = false
        }
        return false
    };
    i.onmouseover = function (p) {
        if (h.conf.hide_tm[this.id]) {
            window.clearTimeout(h.conf.hide_tm[this.id])
        }
        if (h.conf.mode == "web") {
            window.clearTimeout(h.conf.tm_handler)
        }
        if (!this._visible) {
            h._redistribSubLevelSelection(this.id, this.parent)
        }
        this._visible = true
    };
    i.onmouseout = function () {
        if (h.conf.mode == "web") {
            if (h.conf.tm_handler) {
                window.clearTimeout(h.conf.tm_handler)
            }
            h.conf.tm_handler = window.setTimeout(function () {
                if (h && h._clearAndHide) {
                    h._clearAndHide()
                }
            }, h.conf.tm_sec, "JavaScript")
        }
        var p = this;
        if (h.conf.hide_tm[this.id]) {
            window.clearTimeout(h.conf.hide_tm[this.id])
        }
        h.conf.hide_tm[this.id] = window.setTimeout(function () {
            p._visible = false
        }, 50)
    };
    i.onclick = function (q) {
        if (!h.checkEvent("onClick") && h.itemPull[this.id]["complex"]) {
            return
        }
        q = q || event;
        q.cancelBubble = true;
        if (q.preventDefault) {
            q.preventDefault()
        } else {
            q.returnValue = false
        }
        tc = (h.itemPull[this.id]["complex"] ? "c" : "-");
        td = (h.itemPull[this.id]["state"] == "enabled" ? "-" : "d");
        var p = {ctrl: q.ctrlKey, alt: q.altKey, shift: q.shiftKey};
        switch (h.itemPull[this.id]["type"]) {
            case"checkbox":
                h._checkboxOnClickHandler(this.id.replace(h.idPrefix, ""), tc + td + "n", p);
                break;
            case"radio":
                h._radioOnClickHandler(this.id.replace(h.idPrefix, ""), tc + td + "n", p);
                break;
            case"item":
                h._doOnClick(this.id.replace(h.idPrefix, ""), tc + td + "n", p);
                break
        }
        return false
    };
    var m = this.idPull["polygon_" + this.itemPull[a]["parent"]];
    if (j != null) {
        j++;
        if (j < 0) {
            j = 0
        }
        if (j > m.tbd.childNodes.length - 1) {
            j = null
        }
    }
    if (j != null && m.tbd.childNodes[j] != null) {
        m.tbd.insertBefore(i, m.tbd.childNodes[j])
    } else {
        m.tbd.appendChild(i)
    }
    this.idPull[i.id] = i
};
dhtmlXMenuObject.prototype._renderSeparator = function (b, g) {
    var a = (this.conf.context ? "SubLevelArea" : (this.itemPull[b]["parent"] == this.idPrefix + this.topId ? "TopLevel" : "SubLevelArea"));
    if (a == "TopLevel" && this.conf.context) {
        return
    }
    var e = this;
    if (a != "TopLevel") {
        var f = document.createElement("TR");
        f.className = "sub_sep";
        var c = document.createElement("TD");
        c.colSpan = "3";
        f.appendChild(c)
    }
    var d = document.createElement("DIV");
    d.id = "separator_" + b;
    d.className = (a == "TopLevel" ? "top_sep" : "sub_sep");
    d.onselectstart = function (j) {
        j = j || event;
        if (j.preventDefault) {
            j.preventDefault()
        } else {
            j.returnValue = false
        }
    };
    d.onclick = function (l) {
        l = l || event;
        l.cancelBubble = true;
        var j = {ctrl: l.ctrlKey, alt: l.altKey, shift: l.shiftKey};
        e._doOnClick(this.id.replace("separator_" + e.idPrefix, ""), "--s", j)
    };
    if (a == "TopLevel") {
        if (g != null) {
            g++;
            if (g < 0) {
                g = 0
            }
            if (this.cont.childNodes[g] != null) {
                this.cont.insertBefore(d, this.cont.childNodes[g])
            } else {
                this.cont.appendChild(d)
            }
        } else {
            var i = this.cont.childNodes[this.cont.childNodes.length - 1];
            if (String(i).search("TopLevel_Text") == -1) {
                this.cont.appendChild(d)
            } else {
                this.cont.insertBefore(d, i)
            }
        }
        this.idPull[d.id] = d
    } else {
        var h = this.idPull["polygon_" + this.itemPull[b]["parent"]];
        if (g != null) {
            g++;
            if (g < 0) {
                g = 0
            }
            if (g > h.tbd.childNodes.length - 1) {
                g = null
            }
        }
        if (g != null && h.tbd.childNodes[g] != null) {
            h.tbd.insertBefore(f, h.tbd.childNodes[g])
        } else {
            h.tbd.appendChild(f)
        }
        c.appendChild(d);
        this.idPull[d.id] = f
    }
};
dhtmlXMenuObject.prototype.addNewSeparator = function (a, b) {
    b = this.idPrefix + (b != null ? b : this._genStr(24));
    var c = this.idPrefix + this.getParentId(a);
    this._addItemIntoGlobalStrorage(b, c, "", "separator", false, "", "");
    this._renderSeparator(b, this.getItemPosition(a))
};
dhtmlXMenuObject.prototype._initObj = function (l, m, g) {
    if (!(l instanceof Array)) {
        g = l.parentId;
        if (g != null && String(g).indexOf(this.idPrefix) !== 0) {
            g = this.idPrefix + String(g)
        }
        l = l.items
    }
    for (var c = 0; c < l.length; c++) {
        if (typeof(l[c].id) == "undefined" || l[c].id == null) {
            l[c].id = this._genStr(24)
        }
        if (l[c].text == null) {
            l[c].text = ""
        }
        if (String(l[c].id).indexOf(this.idPrefix) !== 0) {
            l[c].id = this.idPrefix + String(l[c].id)
        }
        var d = {type: "item", tip: "", hotkey: "", state: "enabled", imgen: "", imgdis: ""};
        for (var n in d) {
            if (typeof(l[c][n]) == "undefined") {
                l[c][n] = d[n]
            }
        }
        if (l[c].imgen == "" && l[c].img != null) {
            l[c].imgen = l[c].img
        }
        if (l[c].imgdis == "" && l[c].img_disabled != null) {
            l[c].imgdis = l[c].img_disabled
        }
        if (l[c].title == null && l[c].text != null) {
            l[c].title = l[c].text
        }
        if (l[c].href != null) {
            if (l[c].href.link != null) {
                l[c].href_link = l[c].href.link
            }
            if (l[c].href.target != null) {
                l[c].href_target = l[c].href.target
            }
        }
        if (l[c].userdata != null) {
            for (var n in l[c].userdata) {
                this.userData[l[c].id + "_" + n] = l[c].userdata[n]
            }
        }
        if (typeof(l[c].enabled) != "undefined" && window.dhx4.s2b(l[c].enabled) == false) {
            l[c].state = "disabled"
        } else {
            if (typeof(l[c].disabled) != "undefined" && window.dhx4.s2b(l[c].disabled) == true) {
                l[c].state = "disabled"
            }
        }
        if (typeof(l[c].parent) == "undefined") {
            l[c].parent = (g != null ? g : this.idPrefix + this.topId)
        }
        if (l[c].type == "checkbox") {
            l[c].checked = window.dhx4.s2b(l[c].checked);
            l[c].imgen = l[c].imgdis = "chbx_" + (l[c].checked ? "1" : "0")
        }
        if (l[c].type == "radio") {
            l[c].checked = window.dhx4.s2b(l[c].checked);
            l[c].imgen = l[c].imgdis = "rdbt_" + (l[c].checked ? "1" : "0");
            if (typeof(l[c].group) == "undefined" || l[c].group == null) {
                l[c].group = this._genStr(24)
            }
            if (this.radio[l[c].group] == null) {
                this.radio[l[c].group] = []
            }
            this.radio[l[c].group].push(l[c].id)
        }
        this.itemPull[l[c].id] = l[c];
        if (l[c].items != null && l[c].items.length > 0) {
            this.itemPull[l[c].id].complex = true;
            this._initObj(l[c].items, true, l[c].id)
        } else {
            if (this.conf.dload && l[c].complex == true) {
                this.itemPull[l[c].id].loaded = "no"
            }
        }
        this.itemPull[l[c].id].items = null
    }
    if (m !== true) {
        if (this.conf.dload == true) {
            if (g == null) {
                this._initTopLevelMenu()
            } else {
                this._addSubMenuPolygon(g, g);
                if (this.conf.selected == g) {
                    var j = (this.itemPull[g].parent == this.idPrefix + this.topId);
                    var b = (j && !this.conf.context ? this.conf.dir_toplv : this.conf.dir_sublv);
                    var e = false;
                    if (j && this.conf.top_mode && this.conf.mode == "web" && !this.conf.context) {
                        var o = this.idPull[g];
                        if (o._mouseOver == true) {
                            var f = this.conf.top_tmtime - (new Date().getTime() - o._dynLoadTM);
                            if (f > 1) {
                                var i = g;
                                var h = this;
                                o._menuOpenTM = window.setTimeout(function () {
                                    h._showPolygon(i, b);
                                    h = i = null
                                }, f);
                                e = true
                            }
                        }
                    }
                    if (!e) {
                        this._showPolygon(g, b)
                    }
                }
                this.itemPull[g].loaded = "yes";
                if (this.conf.dload_icon == true) {
                    this._updateLoaderIcon(g, false)
                }
            }
        } else {
            this._init()
        }
    }
};
dhtmlXMenuObject.prototype._xmlToJson = function (f, e) {
    var h = [];
    if (e == null) {
        var j = f.getElementsByTagName(this.conf.tags.root);
        if (j == null || (j != null && j.length == 0)) {
            return {items: []}
        }
        j = j[0]
    } else {
        j = f
    }
    if (j.getAttribute("parentId") != null) {
        e = this.idPrefix + j.getAttribute("parentId")
    }
    for (var b = 0; b < j.childNodes.length; b++) {
        if (typeof(j.childNodes[b].tagName) != "undefined" && String(j.childNodes[b].tagName).toLowerCase() == this.conf.tags.item) {
            var a = j.childNodes[b];
            var n = {
                id: this.idPrefix + (a.getAttribute("id") || this._genStr(24)),
                title: a.getAttribute("text") || "",
                imgen: a.getAttribute("img") || "",
                imgdis: a.getAttribute("imgdis") || "",
                tip: "",
                hotkey: "",
                type: a.getAttribute("type") || "item"
            };
            if (a.getAttribute("cssNormal") != null) {
                n.cssNormal = a.getAttribute("cssNormal")
            }
            if (n.type == "checkbox") {
                n.checked = a.getAttribute("checked")
            }
            if (n.type == "radio") {
                n.checked = a.getAttribute("checked");
                n.group = a.getAttribute("group")
            }
            n.state = "enabled";
            if (a.getAttribute("enabled") != null && window.dhx4.s2b(a.getAttribute("enabled")) == false) {
                n.state = "disabled"
            } else {
                if (a.getAttribute("disabled") != null && window.dhx4.s2b(a.getAttribute("disabled")) == true) {
                    n.state = "disabled"
                }
            }
            n.parent = (e != null ? e : this.idPrefix + this.topId);
            if (this.conf.dload) {
                n.complex = (a.getAttribute("complex") != null);
                if (n.complex) {
                    n.loaded = "no"
                }
            } else {
                var c = this._xmlToJson(a, n.id);
                n.items = c.items;
                n.complex = (n.items.length > 0)
            }
            for (var l = 0; l < a.childNodes.length; l++) {
                if (typeof(a.childNodes[l].tagName) != "undefined") {
                    var m = String(a.childNodes[l].tagName || "").toLowerCase();
                    if (m == this.conf.tags.userdata) {
                        var g = a.childNodes[l];
                        if (g.getAttribute("name") != null) {
                            this.userData[n.id + "_" + g.getAttribute("name")] = (g.firstChild != null && g.firstChild.nodeValue != null ? g.firstChild.nodeValue : "")
                        }
                    }
                    if (m == this.conf.tags.text_ext) {
                        n.title = a.childNodes[l].firstChild.nodeValue
                    }
                    if (m == this.conf.tags.tooltip) {
                        n.tip = a.childNodes[l].firstChild.nodeValue
                    }
                    if (m == this.conf.tags.hotkey) {
                        n.hotkey = a.childNodes[l].firstChild.nodeValue
                    }
                    if (m == this.conf.tags.href && n.type == "item") {
                        n.href_link = a.childNodes[l].firstChild.nodeValue;
                        if (a.childNodes[l].getAttribute("target") != null) {
                            n.href_target = a.childNodes[l].getAttribute("target")
                        }
                    }
                }
            }
            h.push(n)
        }
    }
    var a = {parentId: e, items: h};
    return a
};
dhtmlXMenuObject.prototype.enableDynamicLoading = function (a, b) {
    this.conf.dload = true;
    this.conf.dload_url = a;
    this.conf.dload_sign = (String(this.conf.dload_url).search(/\?/) == -1 ? "?" : "&");
    this.conf.dload_icon = b;
    this._init()
};
dhtmlXMenuObject.prototype._updateLoaderIcon = function (d, c) {
    if (this.idPull[d] == null) {
        return
    }
    if (String(this.idPull[d].className).search("TopLevel_Item") >= 0) {
        return
    }
    var b = (this.conf.rtl ? 0 : 2);
    if (!this.idPull[d].childNodes[b]) {
        return
    }
    if (!this.idPull[d].childNodes[b].childNodes[0]) {
        return
    }
    var a = this.idPull[d].childNodes[b].childNodes[0];
    if (String(a.className).search("complex_arrow") === 0) {
        a.className = "complex_arrow" + (c ? "_loading" : "")
    }
};
dhtmlXMenuObject.prototype.addNewSibling = function (d, e, a, b, c, h) {
    var g = this.idPrefix + (e != null ? e : this._genStr(24));
    var f = this.idPrefix + (d != null ? this.getParentId(d) : this.topId);
    this._addItemIntoGlobalStrorage(g, f, a, "item", b, c, h);
    if ((f == this.idPrefix + this.topId) && (!this.conf.context)) {
        this._renderToplevelItem(g, this.getItemPosition(d))
    } else {
        this._renderSublevelItem(g, this.getItemPosition(d))
    }
};
dhtmlXMenuObject.prototype.addNewChild = function (g, f, d, a, b, c, e) {
    if (g == null) {
        if (this.conf.context) {
            g = this.topId
        } else {
            this.addNewSibling(g, d, a, b, c, e);
            if (f != null) {
                this.setItemPosition(d, f)
            }
            return
        }
    }
    d = this.idPrefix + (d != null ? d : this._genStr(24));
    if (this.setHotKey) {
        this.setHotKey(g, "")
    }
    g = this.idPrefix + g;
    this._addItemIntoGlobalStrorage(d, g, a, "item", b, c, e);
    if (this.idPull["polygon_" + g] == null) {
        this._renderSublevelPolygon(g, g)
    }
    this._renderSublevelItem(d, f - 1);
    this._redefineComplexState(g)
};
dhtmlXMenuObject.prototype.removeItem = function (d, f, e) {
    if (!f) {
        d = this.idPrefix + d
    }
    var g = null;
    if (d != this.idPrefix + this.topId) {
        if (this.itemPull[d] == null) {
            return
        }
        if (this.idPull["polygon_" + d] && this.idPull["polygon_" + d]._tmShow) {
            window.clearTimeout(this.idPull["polygon_" + d]._tmShow)
        }
        var m = this.itemPull[d]["type"];
        if (m == "separator") {
            var l = this.idPull["separator_" + d];
            if (this.itemPull[d]["parent"] == this.idPrefix + this.topId) {
                l.onclick = null;
                l.onselectstart = null;
                l.id = null;
                l.parentNode.removeChild(l)
            } else {
                l.childNodes[0].childNodes[0].onclick = null;
                l.childNodes[0].childNodes[0].onselectstart = null;
                l.childNodes[0].childNodes[0].id = null;
                l.childNodes[0].removeChild(l.childNodes[0].childNodes[0]);
                l.removeChild(l.childNodes[0]);
                l.parentNode.removeChild(l)
            }
            this.idPull["separator_" + d] = null;
            this.itemPull[d] = null;
            delete this.idPull["separator_" + d];
            delete this.itemPull[d];
            l = null
        } else {
            g = this.itemPull[d]["parent"];
            var l = this.idPull[d];
            l.onclick = null;
            l.oncontextmenu = null;
            l.onmouseover = null;
            l.onmouseout = null;
            l.onselectstart = null;
            l.id = null;
            while (l.childNodes.length > 0) {
                l.removeChild(l.childNodes[0])
            }
            l.parentNode.removeChild(l);
            this.idPull[d] = null;
            this.itemPull[d] = null;
            delete this.idPull[d];
            delete this.itemPull[d];
            l = null
        }
        m = null
    }
    for (var i in this.itemPull) {
        if (this.itemPull[i]["parent"] == d) {
            this.removeItem(i, true, true)
        }
    }
    var j = new Array(d);
    if (g != null && !e) {
        if (this.idPull["polygon_" + g] != null) {
            if (this.idPull["polygon_" + g].tbd.childNodes.length == 0) {
                j.push(g);
                this._updateItemComplexState(g, false, false)
            }
        }
    }
    for (var b = 0; b < j.length; b++) {
        if (this.idPull["polygon_" + j[b]]) {
            var c = this.idPull["polygon_" + j[b]];
            c.onclick = null;
            c.oncontextmenu = null;
            c.tbl.removeChild(c.tbd);
            c.tbd = null;
            c.childNodes[1].removeChild(c.tbl);
            c.tbl = null;
            c.id = null;
            c.parentNode.removeChild(c);
            c = null;
            if (window.dhx4.isIE6) {
                var h = "polygon_" + j[b] + "_ie6cover";
                if (this.idPull[h] != null) {
                    document.body.removeChild(this.idPull[h]);
                    delete this.idPull[h]
                }
            }
            if (this.idPull["arrowup_" + d] != null && this._removeArrow) {
                this._removeArrow("arrowup_" + d)
            }
            if (this.idPull["arrowdown_" + d] != null && this._removeArrow) {
                this._removeArrow("arrowdown_" + d)
            }
            this.idPull["polygon_" + j[b]] = null;
            delete this.idPull["polygon_" + j[b]]
        }
    }
    j = null;
    if (this.conf.skin == "dhx_terrace" && arguments.length == 1) {
        this._improveTerraceSkin()
    }
};
dhtmlXMenuObject.prototype._addItemIntoGlobalStrorage = function (h, a, c, g, d, b, f) {
    var e = {
        id: h,
        title: c,
        imgen: (b != null ? b : ""),
        imgdis: (f != null ? f : ""),
        type: g,
        state: (d == true ? "disabled" : "enabled"),
        parent: a,
        complex: false,
        hotkey: "",
        tip: ""
    };
    this.itemPull[e.id] = e
};
dhtmlXMenuObject.prototype.renderAsContextMenu = function () {
    this.conf.context = true;
    if (this.base._autoSkinUpdate == true) {
        this.base.className = this.base.className.replace("dhtmlxMenu_" + this.conf.skin + "_Middle", "");
        this.base._autoSkinUpdate = false
    }
    if (this.conf.ctx_baseid != null) {
        this.addContextZone(this.conf.ctx_baseid)
    }
};
dhtmlXMenuObject.prototype.addContextZone = function (b) {
    if (b == document.body) {
        b = "document.body." + this.idPrefix;
        var d = document.body
    } else {
        if (typeof(b) == "string") {
            var d = document.getElementById(b)
        } else {
            var d = b
        }
    }
    var f = false;
    for (var c in this.conf.ctx_zones) {
        f = f || (c == b) || (this.conf.ctx_zones[c] == d)
    }
    if (f == true) {
        return false
    }
    this.conf.ctx_zones[b] = d;
    var e = this;
    if (window.dhx4.isOpera) {
        this.operaContext = function (a) {
            e._doOnContextMenuOpera(a, e)
        };
        d.addEventListener("mouseup", this.operaContext, false)
    } else {
        if (d.oncontextmenu != null && !d._oldContextMenuHandler) {
            d._oldContextMenuHandler = d.oncontextmenu
        }
        d.oncontextmenu = function (g) {
            for (var a in dhtmlXMenuObject.prototype.liveInst) {
                if (a != e.conf.live_id) {
                    if (dhtmlXMenuObject.prototype.liveInst[a].context) {
                        dhtmlXMenuObject.prototype.liveInst[a]._hideContextMenu()
                    }
                }
            }
            g = g || event;
            g.cancelBubble = true;
            if (g.preventDefault) {
                g.preventDefault()
            } else {
                g.returnValue = false
            }
            e._doOnContextBeforeCall(g, this);
            return false
        }
    }
};
dhtmlXMenuObject.prototype._doOnContextMenuOpera = function (c, a) {
    for (var b in dhtmlXMenuObject.prototype.liveInst) {
        if (b != a.conf.live_id) {
            if (dhtmlXMenuObject.prototype.liveInst[b].context) {
                dhtmlXMenuObject.prototype.liveInst[b]._hideContextMenu()
            }
        }
    }
    c.cancelBubble = true;
    if (c.preventDefault) {
        c.preventDefault()
    } else {
        c.returnValue = false
    }
    if (c.button == 0 && c.ctrlKey == true) {
        a._doOnContextBeforeCall(c, this)
    }
    return false
};
dhtmlXMenuObject.prototype.removeContextZone = function (a) {
    if (!this.isContextZone(a)) {
        return false
    }
    if (a == document.body) {
        a = "document.body." + this.idPrefix
    }
    var b = this.conf.ctx_zones[a];
    if (window.dhx4.isOpera) {
        b.removeEventListener("mouseup", this.operaContext, false)
    } else {
        b.oncontextmenu = (b._oldContextMenuHandler != null ? b._oldContextMenuHandler : null);
        b._oldContextMenuHandler = null
    }
    try {
        this.conf.ctx_zones[a] = null;
        delete this.conf.ctx_zones[a]
    } catch (c) {
    }
    return true
};
dhtmlXMenuObject.prototype.isContextZone = function (a) {
    if (a == document.body && this.conf.ctx_zones["document.body." + this.idPrefix] != null) {
        return true
    }
    var b = false;
    if (this.conf.ctx_zones[a] != null) {
        if (this.conf.ctx_zones[a] == document.getElementById(a)) {
            b = true
        }
    }
    return b
};
dhtmlXMenuObject.prototype._isContextMenuVisible = function () {
    if (this.idPull["polygon_" + this.idPrefix + this.topId] == null) {
        return false
    }
    return (this.idPull["polygon_" + this.idPrefix + this.topId].style.display == "")
};
dhtmlXMenuObject.prototype._showContextMenu = function (b, c, a) {
    this._clearAndHide();
    if (this.idPull["polygon_" + this.idPrefix + this.topId] == null) {
        return false
    }
    window.clearTimeout(this.conf.tm_handler);
    this.idPull[this.idPrefix + this.topId] = new Array(b, c);
    this._showPolygon(this.idPrefix + this.topId, "bottom");
    this.callEvent("onContextMenu", [a])
};
dhtmlXMenuObject.prototype._hideContextMenu = function () {
    if (this.idPull["polygon_" + this.idPrefix + this.topId] == null) {
        return false
    }
    this._clearAndHide();
    this._hidePolygon(this.idPrefix + this.topId)
};
dhtmlXMenuObject.prototype._doOnContextBeforeCall = function (f, h) {
    this.conf.ctx_zoneid = h.id;
    this._clearAndHide();
    this._hideContextMenu();
    if (window.dhx4.isChrome == true || window.dhx4.isEdge == true || window.dhx4.isOpera == true || window.dhx4.isIE11 == true) {
        var g = window.dhx4.absLeft(f.currentTarget) + f.offsetX;
        var d = window.dhx4.absTop(f.currentTarget) + f.offsetY
    } else {
        if (window.dhx4.isIE6 == true || window.dhx4.isIE7 == true || window.dhx4.isIE == true) {
            var g = window.dhx4.absLeft(f.srcElement) + f.x || 0;
            var d = window.dhx4.absTop(f.srcElement) + f.y || 0
        } else {
            var c = (f.srcElement || f.target);
            var b = (window.dhx4.isIE || window.dhx4.isKHTML ? f.offsetX : f.layerX);
            var a = (window.dhx4.isIE || window.dhx4.isKHTML ? f.offsetY : f.layerY);
            var g = window.dhx4.absLeft(c) + b;
            var d = window.dhx4.absTop(c) + a
        }
    }
    if (this.checkEvent("onBeforeContextMenu")) {
        if (this.callEvent("onBeforeContextMenu", [h.id, f])) {
            if (this.conf.ctx_autoshow) {
                this._showContextMenu(g, d, h.id);
                this.callEvent("onAfterContextMenu", [h.id, f])
            }
        }
    } else {
        if (this.conf.ctx_autoshow) {
            this._showContextMenu(g, d, h.id);
            this.callEvent("onAfterContextMenu", [h.id])
        }
    }
};
dhtmlXMenuObject.prototype.showContextMenu = function (a, b) {
    this._showContextMenu(a, b, false)
};
dhtmlXMenuObject.prototype.hideContextMenu = function () {
    this._hideContextMenu()
};
dhtmlXMenuObject.prototype.setAutoShowMode = function (a) {
    this.conf.ctx_autoshow = (a == true ? true : false)
};
dhtmlXMenuObject.prototype.setAutoHideMode = function (a) {
    this.conf.ctx_autohide = (a == true ? true : false)
};
dhtmlXMenuObject.prototype.setContextMenuHideAllMode = function (a) {
    this.conf.ctx_hideall = (a == true ? true : false)
};
dhtmlXMenuObject.prototype.getContextMenuHideAllMode = function () {
    return this.conf.ctx_hideall
};
dhtmlXMenuObject.prototype._improveTerraceSkin = function () {
    for (var d in this.itemPull) {
        if (this.itemPull[d].parent == this.idPrefix + this.topId && this.idPull[d] != null) {
            var f = false;
            var e = false;
            if (this.idPull[d].parentNode.firstChild == this.idPull[d]) {
                f = true
            }
            if (this.idPull[d].parentNode.lastChild == this.idPull[d]) {
                e = true
            }
            for (var c in this.itemPull) {
                if (this.itemPull[c].type == "separator" && this.itemPull[c].parent == this.idPrefix + this.topId) {
                    if (this.idPull[d].nextSibling == this.idPull["separator_" + c]) {
                        e = true
                    }
                    if (this.idPull[d].previousSibling == this.idPull["separator_" + c]) {
                        f = true
                    }
                }
            }
            this.idPull[d].style.borderLeftWidth = (f ? "1px" : "0px");
            this.idPull[d].style.borderTopLeftRadius = this.idPull[d].style.borderBottomLeftRadius = (f ? "3px" : "0px");
            this.idPull[d].style.borderTopRightRadius = this.idPull[d].style.borderBottomRightRadius = (e ? "3px" : "0px");
            this.idPull[d]._bl = f;
            this.idPull[d]._br = e
        }
    }
};
dhtmlXMenuObject.prototype._improveTerraceButton = function (b, a) {
    if (a) {
        this.idPull[b].style.borderBottomLeftRadius = (this.idPull[b]._bl ? "3px" : "0px");
        this.idPull[b].style.borderBottomRightRadius = (this.idPull[b]._br ? "3px" : "0px")
    } else {
        this.idPull[b].style.borderBottomLeftRadius = "0px";
        this.idPull[b].style.borderBottomRightRadius = "0px"
    }
};
if (typeof(window.dhtmlXCellObject) != "undefined") {
    dhtmlXCellObject.prototype._createNode_menu = function (e, b, d, a, c) {
        if (typeof(c) != "undefined") {
            e = c
        } else {
            e = document.createElement("DIV");
            e.className = "dhx_cell_menu_" + (this.conf.borders ? "def" : "no_borders");
            e.appendChild(document.createElement("DIV"))
        }
        this.cell.insertBefore(e, this.cell.childNodes[this.conf.idx.toolbar || this.conf.idx.cont]);
        this.conf.ofs_nodes.t.menu = true;
        this._updateIdx();
        return e
    };
    dhtmlXCellObject.prototype.attachMenu = function (a) {
        if (this.dataNodes.menu) {
            return
        }
        this.callEvent("_onBeforeContentAttach", ["menu"]);
        if (typeof(a) == "undefined") {
            a = {}
        }
        if (typeof(a.skin) == "undefined") {
            a.skin = this.conf.skin
        }
        a.parent = this._attachObject("menu").firstChild;
        this.dataNodes.menu = new dhtmlXMenuObject(a);
        this._adjustCont(this._idd);
        a.parent = null;
        a = null;
        this.callEvent("_onContentAttach", []);
        return this.dataNodes.menu
    };
    dhtmlXCellObject.prototype.detachMenu = function () {
        if (!this.dataNodes.menu) {
            return
        }
        this.dataNodes.menu.unload();
        this.dataNodes.menu = null;
        delete this.dataNodes.menu;
        this._detachObject("menu")
    };
    dhtmlXCellObject.prototype.showMenu = function () {
        this._mtbShowHide("menu", "")
    };
    dhtmlXCellObject.prototype.hideMenu = function () {
        this._mtbShowHide("menu", "none")
    };
    dhtmlXCellObject.prototype.getAttachedMenu = function () {
        return this.dataNodes.menu
    }
}
dhtmlXMenuObject.prototype.setItemEnabled = function (a) {
    this._changeItemState(a, "enabled", this._getItemLevelType(a))
};
dhtmlXMenuObject.prototype.setItemDisabled = function (a) {
    this._changeItemState(a, "disabled", this._getItemLevelType(a))
};
dhtmlXMenuObject.prototype.isItemEnabled = function (a) {
    return (this.itemPull[this.idPrefix + a] != null ? (this.itemPull[this.idPrefix + a]["state"] == "enabled") : false)
};
dhtmlXMenuObject.prototype._changeItemState = function (e, d, b) {
    var c = false;
    var a = this.idPrefix + e;
    if ((this.itemPull[a] != null) && (this.idPull[a] != null)) {
        if (this.itemPull[a]["state"] != d) {
            this.itemPull[a]["state"] = d;
            if (this.itemPull[a]["parent"] == this.idPrefix + this.topId && !this.conf.context) {
                this.idPull[a].className = "dhtmlxMenu_" + this.conf.skin + "_TopLevel_Item_" + (this.itemPull[a]["state"] == "enabled" ? "Normal" : "Disabled")
            } else {
                this.idPull[a].className = "sub_item" + (this.itemPull[a]["state"] == "enabled" ? "" : "_dis")
            }
            this._updateItemComplexState(this.idPrefix + e, this.itemPull[this.idPrefix + e]["complex"], false);
            this._updateItemImage(e, b);
            if ((this.idPrefix + this.conf.last_click == a) && (b != "TopLevel")) {
                this._redistribSubLevelSelection(a, this.itemPull[a]["parent"])
            }
            if (b == "TopLevel" && !this.conf.context) {
            }
        }
    }
    return c
};
dhtmlXMenuObject.prototype.getItemText = function (a) {
    return (this.itemPull[this.idPrefix + a] != null ? this.itemPull[this.idPrefix + a]["title"] : "")
};
dhtmlXMenuObject.prototype.setItemText = function (f, d) {
    f = this.idPrefix + f;
    if ((this.itemPull[f] != null) && (this.idPull[f] != null)) {
        this._clearAndHide();
        this.itemPull[f]["title"] = d;
        if (this.itemPull[f]["parent"] == this.idPrefix + this.topId && !this.conf.context) {
            var c = null;
            for (var a = 0; a < this.idPull[f].childNodes.length; a++) {
                try {
                    if (this.idPull[f].childNodes[a].className == "top_level_text") {
                        c = this.idPull[f].childNodes[a]
                    }
                } catch (b) {
                }
            }
            if (String(this.itemPull[f]["title"]).length == "" || this.itemPull[f]["title"] == null) {
                if (c != null) {
                    c.parentNode.removeChild(c)
                }
            } else {
                if (!c) {
                    c = document.createElement("DIV");
                    c.className = "top_level_text";
                    if (this.conf.rtl && this.idPull[f].childNodes.length > 0) {
                        this.idPull[f].insertBefore(c, this.idPull[f].childNodes[0])
                    } else {
                        this.idPull[f].appendChild(c)
                    }
                }
                c.innerHTML = this.itemPull[f]["title"]
            }
        } else {
            var c = null;
            for (var a = 0; a < this.idPull[f].childNodes[1].childNodes.length; a++) {
                if (String(this.idPull[f].childNodes[1].childNodes[a].className || "") == "sub_item_text") {
                    c = this.idPull[f].childNodes[1].childNodes[a]
                }
            }
            if (String(this.itemPull[f]["title"]).length == "" || this.itemPull[f]["title"] == null) {
                if (c) {
                    c.parentNode.removeChild(c);
                    c = null;
                    this.idPull[f].childNodes[1].innerHTML = "&nbsp;"
                }
            } else {
                if (!c) {
                    c = document.createElement("DIV");
                    c.className = "sub_item_text";
                    this.idPull[f].childNodes[1].innerHTML = "";
                    this.idPull[f].childNodes[1].appendChild(c)
                }
                c.innerHTML = this.itemPull[f]["title"]
            }
        }
    }
};
dhtmlXMenuObject.prototype.loadFromHTML = function (c, f, d) {
    var b = this.conf.tags.item;
    this.conf.tags.item = "div";
    var e = (typeof(c) == "string" ? document.getElementById(c) : c);
    var a = this._xmlToJson(e, this.idPrefix + this.topId);
    this._initObj(a);
    this.conf.tags.item = b;
    if (f) {
        e.parentNode.removeChild(e)
    }
    e = objOd = null;
    if (onload != null) {
        if (typeof(d) == "function") {
            d()
        } else {
            if (typeof(window[d]) == "function") {
                window[d]()
            }
        }
    }
};
dhtmlXMenuObject.prototype.hideItem = function (a) {
    this._changeItemVisible(a, false)
};
dhtmlXMenuObject.prototype.showItem = function (a) {
    this._changeItemVisible(a, true)
};
dhtmlXMenuObject.prototype.isItemHidden = function (b) {
    var a = null;
    if (this.idPull[this.idPrefix + b] != null) {
        a = (this.idPull[this.idPrefix + b].style.display == "none")
    }
    return a
};
dhtmlXMenuObject.prototype._changeItemVisible = function (c, b) {
    var a = this.idPrefix + c;
    if (this.itemPull[a] == null) {
        return
    }
    if (this.itemPull[a]["type"] == "separator") {
        a = "separator_" + a
    }
    if (this.idPull[a] == null) {
        return
    }
    this.idPull[a].style.display = (b ? "" : "none");
    this._redefineComplexState(this.itemPull[this.idPrefix + c]["parent"])
};
dhtmlXMenuObject.prototype.setUserData = function (c, a, b) {
    this.userData[this.idPrefix + c + "_" + a] = b
};
dhtmlXMenuObject.prototype.getUserData = function (b, a) {
    return (this.userData[this.idPrefix + b + "_" + a] != null ? this.userData[this.idPrefix + b + "_" + a] : null)
};
dhtmlXMenuObject.prototype.setOpenMode = function (a) {
    this.conf.mode = (a == "win" ? "win" : "web")
};
dhtmlXMenuObject.prototype.setWebModeTimeout = function (a) {
    this.conf.tm_sec = (!isNaN(a) ? a : 400)
};
dhtmlXMenuObject.prototype.getItemImage = function (b) {
    var a = new Array(null, null);
    b = this.idPrefix + b;
    if (this.itemPull[b]["type"] == "item") {
        a[0] = this.itemPull[b]["imgen"];
        a[1] = this.itemPull[b]["imgdis"]
    }
    return a
};
dhtmlXMenuObject.prototype.setItemImage = function (c, a, b) {
    if (this.itemPull[this.idPrefix + c]["type"] != "item") {
        return
    }
    this.itemPull[this.idPrefix + c]["imgen"] = a;
    this.itemPull[this.idPrefix + c]["imgdis"] = b;
    this._updateItemImage(c, this._getItemLevelType(c))
};
dhtmlXMenuObject.prototype.clearItemImage = function (a) {
    this.setItemImage(a, "", "")
};
dhtmlXMenuObject.prototype.setVisibleArea = function (b, a, d, c) {
    this.conf.v_enabled = true;
    this.conf.v.x1 = b;
    this.conf.v.x2 = a;
    this.conf.v.y1 = d;
    this.conf.v.y2 = c
};
dhtmlXMenuObject.prototype.setTooltip = function (b, a) {
    b = this.idPrefix + b;
    if (!(this.itemPull[b] != null && this.idPull[b] != null)) {
        return
    }
    this.idPull[b].title = (a.length > 0 ? a : null);
    this.itemPull[b]["tip"] = a
};
dhtmlXMenuObject.prototype.getTooltip = function (a) {
    if (this.itemPull[this.idPrefix + a] == null) {
        return null
    }
    return this.itemPull[this.idPrefix + a]["tip"]
};
dhtmlXMenuObject.prototype.setTopText = function (a) {
    if (this.conf.context) {
        return
    }
    if (this._topText == null) {
        this._topText = document.createElement("DIV");
        this._topText.className = "dhtmlxMenu_TopLevel_Text_" + (this.conf.rtl ? "left" : (this.conf.align == "left" ? "right" : "left"));
        this.base.appendChild(this._topText)
    }
    this._topText.innerHTML = a
};
dhtmlXMenuObject.prototype.setAlign = function (a) {
    if (this.conf.align == a) {
        return
    }
    if (a == "left" || a == "right") {
        this.conf.align = a;
        if (this.cont) {
            this.cont.className = (this.conf.align == "right" ? "align_right" : "align_left")
        }
        if (this._topText != null) {
            this._topText.className = "dhtmlxMenu_TopLevel_Text_" + (this.conf.align == "left" ? "right" : "left")
        }
    }
};
dhtmlXMenuObject.prototype.setHref = function (c, a, b) {
    if (this.itemPull[this.idPrefix + c] == null) {
        return
    }
    this.itemPull[this.idPrefix + c]["href_link"] = a;
    if (b != null) {
        this.itemPull[this.idPrefix + c]["href_target"] = b
    }
};
dhtmlXMenuObject.prototype.clearHref = function (a) {
    if (this.itemPull[this.idPrefix + a] == null) {
        return
    }
    delete this.itemPull[this.idPrefix + a]["href_link"];
    delete this.itemPull[this.idPrefix + a]["href_target"]
};
dhtmlXMenuObject.prototype.getCircuit = function (b) {
    var a = new Array(b);
    while (this.getParentId(b) != this.topId) {
        b = this.getParentId(b);
        a[a.length] = b
    }
    return a.reverse()
};
dhtmlXMenuObject.prototype._getCheckboxState = function (a) {
    if (this.itemPull[this.idPrefix + a] == null) {
        return null
    }
    return this.itemPull[this.idPrefix + a]["checked"]
};
dhtmlXMenuObject.prototype._setCheckboxState = function (b, a) {
    if (this.itemPull[this.idPrefix + b] == null) {
        return
    }
    this.itemPull[this.idPrefix + b]["checked"] = a
};
dhtmlXMenuObject.prototype._updateCheckboxImage = function (b) {
    if (this.idPull[this.idPrefix + b] == null) {
        return
    }
    this.itemPull[this.idPrefix + b]["imgen"] = "chbx_" + (this._getCheckboxState(b) ? "1" : "0");
    this.itemPull[this.idPrefix + b]["imgdis"] = this.itemPull[this.idPrefix + b]["imgen"];
    try {
        this.idPull[this.idPrefix + b].childNodes[(this.conf.rtl ? 2 : 0)].childNodes[0].className = "sub_icon " + this.itemPull[this.idPrefix + b]["imgen"]
    } catch (a) {
    }
};
dhtmlXMenuObject.prototype._checkboxOnClickHandler = function (d, a, b) {
    if (a.charAt(1) == "d") {
        return
    }
    if (this.itemPull[this.idPrefix + d] == null) {
        return
    }
    var c = this._getCheckboxState(d);
    if (this.checkEvent("onCheckboxClick")) {
        if (this.callEvent("onCheckboxClick", [d, c, this.conf.ctx_zoneid, b])) {
            this.setCheckboxState(d, !c)
        }
    } else {
        this.setCheckboxState(d, !c)
    }
    if (this.checkEvent("onClick")) {
        this.callEvent("onClick", [d])
    }
};
dhtmlXMenuObject.prototype.setCheckboxState = function (b, a) {
    this._setCheckboxState(b, a);
    this._updateCheckboxImage(b)
};
dhtmlXMenuObject.prototype.getCheckboxState = function (a) {
    return this._getCheckboxState(a)
};
dhtmlXMenuObject.prototype.addCheckbox = function (h, d, i, j, l, a, e) {
    if (this.conf.context && d == this.topId) {
    } else {
        if (this.itemPull[this.idPrefix + d] == null) {
            return
        }
        if (h == "child" && this.itemPull[this.idPrefix + d]["type"] != "item") {
            return
        }
    }
    var f = "chbx_" + (a ? "1" : "0");
    var c = f;
    if (h == "sibling") {
        var b = this.idPrefix + (j != null ? j : this._genStr(24));
        var g = this.idPrefix + this.getParentId(d);
        this._addItemIntoGlobalStrorage(b, g, l, "checkbox", e, f, c);
        this.itemPull[b]["checked"] = a;
        this._renderSublevelItem(b, this.getItemPosition(d))
    } else {
        var b = this.idPrefix + (j != null ? j : this._genStr(24));
        var g = this.idPrefix + d;
        this._addItemIntoGlobalStrorage(b, g, l, "checkbox", e, f, c);
        this.itemPull[b]["checked"] = a;
        if (this.idPull["polygon_" + g] == null) {
            this._renderSublevelPolygon(g, g)
        }
        this._renderSublevelItem(b, i - 1);
        this._redefineComplexState(g)
    }
};
dhtmlXMenuObject.prototype.setHotKey = function (g, a) {
    g = this.idPrefix + g;
    if (!(this.itemPull[g] != null && this.idPull[g] != null)) {
        return
    }
    if (this.itemPull[g]["parent"] == this.idPrefix + this.topId && !this.conf.context) {
        return
    }
    if (this.itemPull[g]["complex"]) {
        return
    }
    var b = this.itemPull[g]["type"];
    if (!(b == "item" || b == "checkbox" || b == "radio")) {
        return
    }
    var f = null;
    try {
        if (this.idPull[g].childNodes[this.conf.rtl ? 0 : 2].childNodes[0].className == "sub_item_hk") {
            f = this.idPull[g].childNodes[this.conf.rtl ? 0 : 2].childNodes[0]
        }
    } catch (d) {
    }
    if (a.length == 0) {
        this.itemPull[g]["hotkey_backup"] = this.itemPull[g]["hotkey"];
        this.itemPull[g]["hotkey"] = "";
        if (f != null) {
            f.parentNode.removeChild(f)
        }
    } else {
        this.itemPull[g]["hotkey"] = a;
        this.itemPull[g]["hotkey_backup"] = null;
        if (f == null) {
            f = document.createElement("DIV");
            f.className = "sub_item_hk";
            var c = this.idPull[g].childNodes[this.conf.rtl ? 0 : 2];
            while (c.childNodes.length > 0) {
                c.removeChild(c.childNodes[0])
            }
            c.appendChild(f)
        }
        f.innerHTML = a
    }
};
dhtmlXMenuObject.prototype.getHotKey = function (a) {
    if (this.itemPull[this.idPrefix + a] == null) {
        return null
    }
    return this.itemPull[this.idPrefix + a]["hotkey"]
};
dhtmlXMenuObject.prototype._clearAllSelectedSubItemsInPolygon = function (a) {
    var c = this._getSubItemToDeselectByPolygon(a);
    for (var b = 0; b < this.conf.opened_poly.length; b++) {
        if (this.conf.opened_poly[b] != a) {
            this._hidePolygon(this.conf.opened_poly[b])
        }
    }
    for (var b = 0; b < c.length; b++) {
        if (this.idPull[c[b]] != null && this.itemPull[c[b]]["state"] == "enabled") {
            this.idPull[c[b]].className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_Item_Normal"
        }
    }
};
dhtmlXMenuObject.prototype._checkArrowsState = function (d) {
    var b = this.idPull["polygon_" + d].childNodes[1];
    var c = this.idPull["arrowup_" + d];
    var a = this.idPull["arrowdown_" + d];
    if (b.scrollTop == 0) {
        c.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowUp_Disabled"
    } else {
        c.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowUp" + (c.over ? "_Over" : "")
    }
    if (b.scrollTop + b.offsetHeight < b.scrollHeight) {
        a.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowDown" + (a.over ? "_Over" : "")
    } else {
        a.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowDown_Disabled"
    }
    b = c = a = null
};
dhtmlXMenuObject.prototype._addUpArrow = function (d) {
    var b = this;
    var c = document.createElement("DIV");
    c.pId = this.idPrefix + d;
    c.id = "arrowup_" + this.idPrefix + d;
    c.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowUp";
    c.over = false;
    c.onselectstart = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        return false
    };
    c.oncontextmenu = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        return false
    };
    c.onmouseover = function () {
        if (b.conf.mode == "web") {
            window.clearTimeout(b.conf.tm_handler)
        }
        b._clearAllSelectedSubItemsInPolygon(this.pId);
        if (this.className == "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowUp_Disabled") {
            return
        }
        this.className = "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowUp_Over";
        this.over = true;
        b._canScrollUp = true;
        b._doScrollUp(this.pId, true)
    };
    c.onmouseout = function () {
        if (b.conf.mode == "web") {
            window.clearTimeout(b.conf.tm_handler);
            b.conf.tm_handler = window.setTimeout(function () {
                b._clearAndHide()
            }, b.conf.tm_sec, "JavaScript")
        }
        this.over = false;
        b._canScrollUp = false;
        if (this.className == "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowUp_Disabled") {
            return
        }
        this.className = "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowUp";
        window.clearTimeout(b.conf.of_utm)
    };
    c.onclick = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        f.cancelBubble = true;
        return false
    };
    var a = this.idPull["polygon_" + this.idPrefix + d];
    a.childNodes[0].appendChild(c);
    this.idPull[c.id] = c;
    a = c = null
};
dhtmlXMenuObject.prototype._addDownArrow = function (d) {
    var b = this;
    var c = document.createElement("DIV");
    c.pId = this.idPrefix + d;
    c.id = "arrowdown_" + this.idPrefix + d;
    c.className = "dhtmlxMenu_" + this.conf.skin + "_SubLevelArea_ArrowDown";
    c.over = false;
    c.onselectstart = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        return false
    };
    c.oncontextmenu = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        return false
    };
    c.onmouseover = function () {
        if (b.conf.mode == "web") {
            window.clearTimeout(b.conf.tm_handler)
        }
        b._clearAllSelectedSubItemsInPolygon(this.pId);
        if (this.className == "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowDown_Disabled") {
            return
        }
        this.className = "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowDown_Over";
        this.over = true;
        b._canScrollDown = true;
        b._doScrollDown(this.pId, true)
    };
    c.onmouseout = function () {
        if (b.conf.mode == "web") {
            window.clearTimeout(b.conf.tm_handler);
            b.conf.tm_handler = window.setTimeout(function () {
                b._clearAndHide()
            }, b.conf.tm_sec, "JavaScript")
        }
        this.over = false;
        b._canScrollDown = false;
        if (this.className == "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowDown_Disabled") {
            return
        }
        this.className = "dhtmlxMenu_" + b.conf.skin + "_SubLevelArea_ArrowDown";
        window.clearTimeout(b.conf.of_dtm)
    };
    c.onclick = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
        f.cancelBubble = true;
        return false
    };
    var a = this.idPull["polygon_" + this.idPrefix + d];
    a.childNodes[2].appendChild(c);
    this.idPull[c.id] = c;
    a = c = null
};
dhtmlXMenuObject.prototype._removeUpArrow = function (b) {
    var a = "arrowup_" + this.idPrefix + b;
    this._removeArrow(a)
};
dhtmlXMenuObject.prototype._removeDownArrow = function (b) {
    var a = "arrowdown_" + this.idPrefix + b;
    this._removeArrow(a)
};
dhtmlXMenuObject.prototype._removeArrow = function (a) {
    var b = this.idPull[a];
    b.onselectstart = null;
    b.oncontextmenu = null;
    b.onmouseover = null;
    b.onmouseout = null;
    b.onclick = null;
    if (b.parentNode) {
        b.parentNode.removeChild(b)
    }
    b = null;
    this.idPull[a] = null;
    try {
        delete this.idPull[a]
    } catch (c) {
    }
};
dhtmlXMenuObject.prototype._isArrowExists = function (a) {
    if (this.idPull["arrowup_" + a] != null && this.idPull["arrowdown_" + a] != null) {
        return true
    }
    return false
};
dhtmlXMenuObject.prototype._doScrollUp = function (f, d) {
    var a = this.idPull["polygon_" + f].childNodes[1];
    if (this._canScrollUp && a.scrollTop > 0) {
        var c = false;
        var e = a.scrollTop - this.conf.of_ustep;
        if (e < 0) {
            c = true;
            e = 0
        }
        a.scrollTop = e;
        if (!c) {
            var b = this;
            this.conf.of_utm = window.setTimeout(function () {
                b._doScrollUp(f, false);
                b = null
            }, this.conf.of_utime)
        } else {
            d = true
        }
    } else {
        this._canScrollUp = false;
        this._checkArrowsState(f)
    }
    if (d) {
        this._checkArrowsState(f)
    }
};
dhtmlXMenuObject.prototype._doScrollDown = function (f, d) {
    var a = this.idPull["polygon_" + f].childNodes[1];
    if (this._canScrollDown && a.scrollTop + a.offsetHeight <= a.scrollHeight) {
        var c = false;
        var e = a.scrollTop + this.conf.of_dstep;
        if (e + a.offsetHeight >= a.scrollHeight) {
            c = true;
            e = a.scrollHeight - a.offsetHeight
        }
        a.scrollTop = e;
        if (!c) {
            var b = this;
            this.conf.of_dtm = window.setTimeout(function () {
                b._doScrollDown(f, false);
                b = null
            }, this.conf.of_dtime)
        } else {
            d = true
        }
    } else {
        this._canScrollDown = false;
        this._checkArrowsState(f)
    }
    if (d) {
        this._checkArrowsState(f)
    }
};
dhtmlXMenuObject.prototype._countPolygonItems = function (f) {
    var d = 0;
    for (var b in this.itemPull) {
        var c = this.itemPull[b]["parent"];
        var e = this.itemPull[b]["type"];
        if (c == this.idPrefix + f && (e == "item" || e == "radio" || e == "checkbox")) {
            d++
        }
    }
    return d
};
dhtmlXMenuObject.prototype.setOverflowHeight = function (e) {
    if (e === "auto") {
        this.conf.overflow_limit = 0;
        this.conf.auto_overflow = true;
        return
    }
    if (this.conf.overflow_limit == 0 && e <= 0) {
        return
    }
    this._clearAndHide();
    if (this.conf.overflow_limit >= 0 && e > 0) {
        this.conf.overflow_limit = e;
        return
    }
    if (this.conf.overflow_limit > 0 && e <= 0) {
        for (var d in this.itemPull) {
            if (this._isArrowExists(d)) {
                var c = String(d).replace(this.idPrefix, "");
                this._removeUpArrow(c);
                this._removeDownArrow(c);
                this.idPull["polygon_" + d].childNodes[1].style.height = ""
            }
        }
        this.conf.overflow_limit = 0;
        return
    }
};
dhtmlXMenuObject.prototype._getRadioImgObj = function (c) {
    try {
        var a = this.idPull[this.idPrefix + c].childNodes[(this.conf.rtl ? 2 : 0)].childNodes[0]
    } catch (b) {
        var a = null
    }
    return a
};
dhtmlXMenuObject.prototype._setRadioState = function (d, c) {
    var b = this._getRadioImgObj(d);
    if (b != null) {
        var a = this.itemPull[this.idPrefix + d];
        a.checked = c;
        a.imgen = "rdbt_" + (a.checked ? "1" : "0");
        a.imgdis = a.imgen;
        b.className = "sub_icon " + a.imgen
    }
};
dhtmlXMenuObject.prototype._radioOnClickHandler = function (d, a, b) {
    if (a.charAt(1) == "d" || this.itemPull[this.idPrefix + d]["group"] == null) {
        return
    }
    var c = this.itemPull[this.idPrefix + d]["group"];
    if (this.checkEvent("onRadioClick")) {
        if (this.callEvent("onRadioClick", [c, this.getRadioChecked(c), d, this.conf.ctx_zoneid, b])) {
            this.setRadioChecked(c, d)
        }
    } else {
        this.setRadioChecked(c, d)
    }
    if (this.checkEvent("onClick")) {
        this.callEvent("onClick", [d])
    }
};
dhtmlXMenuObject.prototype.getRadioChecked = function (d) {
    var f = null;
    for (var c = 0; c < this.radio[d].length; c++) {
        var e = this.radio[d][c].replace(this.idPrefix, "");
        var a = this._getRadioImgObj(e);
        if (a != null) {
            var b = (a.className).match(/rdbt_1$/gi);
            if (b != null) {
                f = e
            }
        }
    }
    return f
};
dhtmlXMenuObject.prototype.setRadioChecked = function (b, d) {
    if (this.radio[b] == null) {
        return
    }
    for (var a = 0; a < this.radio[b].length; a++) {
        var c = this.radio[b][a].replace(this.idPrefix, "");
        this._setRadioState(c, (c == d))
    }
};
dhtmlXMenuObject.prototype.addRadioButton = function (i, e, j, l, m, n, a, f) {
    if (this.conf.context && e == this.topId) {
    } else {
        if (this.itemPull[this.idPrefix + e] == null) {
            return
        }
        if (i == "child" && this.itemPull[this.idPrefix + e]["type"] != "item") {
            return
        }
    }
    var c = this.idPrefix + (l != null ? l : this._genStr(24));
    var g = "rdbt_" + (a ? "1" : "0");
    var b = g;
    if (i == "sibling") {
        var h = this.idPrefix + this.getParentId(e);
        this._addItemIntoGlobalStrorage(c, h, m, "radio", f, g, b);
        this._renderSublevelItem(c, this.getItemPosition(e))
    } else {
        var h = this.idPrefix + e;
        this._addItemIntoGlobalStrorage(c, h, m, "radio", f, g, b);
        if (this.idPull["polygon_" + h] == null) {
            this._renderSublevelPolygon(h, h)
        }
        this._renderSublevelItem(c, j - 1);
        this._redefineComplexState(h)
    }
    var d = (n != null ? n : this._genStr(24));
    this.itemPull[c]["group"] = d;
    if (this.radio[d] == null) {
        this.radio[d] = new Array()
    }
    this.radio[d][this.radio[d].length] = c;
    if (a == true) {
        this.setRadioChecked(d, String(c).replace(this.idPrefix, ""))
    }
};
dhtmlXMenuObject.prototype.serialize = function () {
    var a = "<menu>" + this._readLevel(this.idPrefix + this.topId) + "</menu>";
    return a
};
dhtmlXMenuObject.prototype._readLevel = function (d) {
    var e = "";
    for (var i in this.itemPull) {
        if (this.itemPull[i]["parent"] == d) {
            var b = "";
            var c = "";
            var l = "";
            var h = String(this.itemPull[i]["id"]).replace(this.idPrefix, "");
            var g = "";
            var j = (this.itemPull[i]["title"] != "" ? ' text="' + this.itemPull[i]["title"] + '"' : "");
            var f = "";
            if (this.itemPull[i]["type"] == "item") {
                if (this.itemPull[i]["imgen"] != "") {
                    b = ' img="' + this.itemPull[i]["imgen"] + '"'
                }
                if (this.itemPull[i]["imgdis"] != "") {
                    c = ' imgdis="' + this.itemPull[i]["imgdis"] + '"'
                }
                if (this.itemPull[i]["hotkey"] != "") {
                    l = "<hotkey>" + this.itemPull[i]["hotkey"] + "</hotkey>"
                }
            }
            if (this.itemPull[i]["type"] == "separator") {
                g = ' type="separator"'
            } else {
                if (this.itemPull[i]["state"] == "disabled") {
                    f = ' enabled="false"'
                }
            }
            if (this.itemPull[i]["type"] == "checkbox") {
                g = ' type="checkbox"' + (this.itemPull[i]["checked"] ? ' checked="true"' : "")
            }
            if (this.itemPull[i]["type"] == "radio") {
                g = ' type="radio" group="' + this.itemPull[i]["group"] + '" ' + (this.itemPull[i]["checked"] ? ' checked="true"' : "")
            }
            e += "<item id='" + h + "'" + j + g + b + c + f + ">";
            e += l;
            if (this.itemPull[i]["complex"]) {
                e += this._readLevel(i)
            }
            e += "</item>"
        }
    }
    return e
};
dhtmlXMenuObject.prototype.enableEffect = function (c, e, d) {
    this._menuEffect = (c == "opacity" || c == "slide" || c == "slide+" ? c : false);
    this._pOpStyleIE = (navigator.userAgent.search(/MSIE\s[678]\.0/gi) >= 0);
    for (var b in this.idPull) {
        if (b.search(/polygon/) === 0) {
            this._pOpacityApply(b, (this._pOpStyleIE ? 100 : 1));
            this.idPull[b].style.height = ""
        }
    }
    this._pOpMax = (typeof(e) == "undefined" ? 100 : e) / (this._pOpStyleIE ? 1 : 100);
    this._pOpStyleName = (this._pOpStyleIE ? "filter" : "opacity");
    this._pOpStyleValue = (this._pOpStyleIE ? "progid:DXImageTransform.Microsoft.Alpha(Opacity=#)" : "#");
    this._pSlSteps = (this._pOpStyleIE ? 10 : 20);
    this._pSlTMTimeMax = d || 50
};
dhtmlXMenuObject.prototype._showPolygonEffect = function (a) {
    this._pShowHide(a, true)
};
dhtmlXMenuObject.prototype._hidePolygonEffect = function (a) {
    this._pShowHide(a, false)
};
dhtmlXMenuObject.prototype._pOpacityApply = function (a, b) {
    this.idPull[a].style[this._pOpStyleName] = String(this._pOpStyleValue).replace("#", b || this.idPull[a]._op)
};
dhtmlXMenuObject.prototype._pShowHide = function (a, b) {
    if (!this.idPull) {
        return
    }
    if (this.idPull[a]._tmShow != null) {
        if ((this.idPull[a]._step_h > 0 && b == true) || (this.idPull[a]._step_h < 0 && b == false)) {
            return
        }
        window.clearTimeout(this.idPull[a]._tmShow);
        this.idPull[a]._tmShow = null;
        this.idPull[a]._max_h = null
    }
    if (b == false && (this.idPull[a].style.visibility == "hidden" || this.idPull[a].style.display == "none")) {
        return
    }
    if (b == true && this.idPull[a].style.display == "none") {
        this.idPull[a].style.visibility = "hidden";
        this.idPull[a].style.display = ""
    }
    if (this.idPull[a]._max_h == null) {
        this.idPull[a]._max_h = parseInt(this.idPull[a].offsetHeight);
        this.idPull[a]._h = (b == true ? 0 : this.idPull[a]._max_h);
        this.idPull[a]._step_h = Math.round(this.idPull[a]._max_h / this._pSlSteps) * (b == true ? 1 : -1);
        if (this.idPull[a]._step_h == 0) {
            return
        }
        this.idPull[a]._step_tm = Math.round(this._pSlTMTimeMax / this._pSlSteps);
        if (this._menuEffect == "slide+" || this._menuEffect == "opacity") {
            this.idPull[a].op_tm = this.idPull[a]._step_tm;
            this.idPull[a].op_step = (this._pOpMax / this._pSlSteps) * (b == true ? 1 : -1);
            if (this._pOpStyleIE) {
                this.idPull[a].op_step = Math.round(this.idPull[a].op_step)
            }
            this.idPull[a]._op = (b == true ? 0 : this._pOpMax);
            this._pOpacityApply(a)
        } else {
            this.idPull[a]._op = (this._pOpStyleIE ? 100 : 1);
            this._pOpacityApply(a)
        }
        if (this._menuEffect.search(/slide/) === 0) {
            this.idPull[a].style.height = "0px"
        }
        this.idPull[a].style.visibility = "visible"
    }
    this._pEffectSet(a, this.idPull[a]._h + this.idPull[a]._step_h)
};
dhtmlXMenuObject.prototype._pEffectSet = function (c, b) {
    if (!this.idPull) {
        return
    }
    if (this.idPull[c]._tmShow) {
        window.clearTimeout(this.idPull[c]._tmShow)
    }
    this.idPull[c]._h = Math.max(0, Math.min(b, this.idPull[c]._max_h));
    if (this._menuEffect.search(/slide/) === 0) {
        this.idPull[c].style.height = this.idPull[c]._h + "px"
    }
    b += this.idPull[c]._step_h;
    if (this._menuEffect == "slide+" || this._menuEffect == "opacity") {
        this.idPull[c]._op = Math.max(0, Math.min(this._pOpMax, this.idPull[c]._op + this.idPull[c].op_step));
        this._pOpacityApply(c)
    }
    if ((this.idPull[c]._step_h > 0 && b <= this.idPull[c]._max_h) || (this.idPull[c]._step_h < 0 && b >= 0)) {
        var a = this;
        this.idPull[c]._tmShow = window.setTimeout(function () {
            a._pEffectSet(c, b)
        }, this.idPull[c]._step_tm)
    } else {
        if (this._menuEffect.search(/slide/) === 0) {
            this.idPull[c].style.height = ""
        }
        if (this.idPull[c]._step_h < 0) {
            this.idPull[c].style.visibility = "hidden"
        }
        if (this._menuEffect == "slide+" || this._menuEffect == "opacity") {
            this.idPull[c]._op = (this.idPull[c]._step_h < 0 ? (this._pOpStyleIE ? 100 : 1) : this._pOpMax);
            this._pOpacityApply(c)
        }
        this.idPull[c]._tmShow = null;
        this.idPull[c]._h = null;
        this.idPull[c]._max_h = null;
        this.idPull[c]._step_tm = null
    }
};
function dhtmlXToolbarObject(b, c) {
    var a = this;
    this.conf = {
        skin: (c || window.dhx4.skin || (typeof(dhtmlx) != "undefined" ? dhtmlx.skin : null) || window.dhx4.skinDetect("dhxtoolbar") || "dhx_skyblue"),
        align: "left",
        align_autostart: "left",
        icons_path: "",
        iconSize: 18,
        sel_ofs_x: 0,
        sel_ofs_y: 0,
        xml_autoload: null,
        items_autoload: null
    };
    if (typeof(b) == "object" && b != null && typeof(b.tagName) == "undefined") {
        if (b.icons_path != null || b.icon_path != null) {
            this.conf.icons_path = (b.icons_path || b.icon_path)
        }
        if (b.icons_size != null) {
            this.conf.icons_size_autoload = b.icons_size
        }
        if (b.json != null) {
            this.conf.json_autoload = b.json
        }
        if (b.xml != null) {
            this.conf.xml_autoload = b.xml
        }
        if (b.onload != null) {
            this.conf.onload_autoload = b.onload
        }
        if (b.onclick != null || b.onClick != null) {
            this.conf.auto_onclick = (b.onclick || b.onClick)
        }
        if (b.items != null) {
            this.conf.items_autoload = b.items
        }
        if (b.skin != null) {
            this.conf.skin = b.skin
        }
        if (b.align != null) {
            this.conf.align_autostart = b.align
        }
        b = b.parent
    }
    this.cont = (typeof(b) != "object") ? document.getElementById(b) : b;
    while (this.cont.childNodes.length > 0) {
        this.cont.removeChild(this.cont.childNodes[0])
    }
    b = null;
    this.cont.dir = "ltr";
    this.base = document.createElement("DIV");
    this.base.className = "dhxtoolbar_float_left";
    this.cont.appendChild(this.base);
    this.cont.ontouchstart = function (d) {
        d = d || event;
        if ((String(d.target.tagName || "").toLowerCase() == "input")) {
            return true
        }
        if (d.preventDefault) {
            d.preventDefault()
        } else {
            d.returnValue = false
        }
        d.cancelBubble = true;
        return false
    };
    this.setSkin(this.conf.skin);
    this.objPull = {};
    this.anyUsed = "none";
    this._genStr = function (d) {
        var e = "dhxId_";
        var g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var f = 0; f < d; f++) {
            e += g.charAt(Math.round(Math.random() * (g.length - 1)))
        }
        return e
    };
    this.rootTypes = new Array("button", "buttonSelect", "buttonTwoState", "separator", "label", "slider", "text", "buttonInput");
    this.idPrefix = this._genStr(12);
    window.dhx4._enableDataLoading(this, "_initObj", "_xmlToJson", "toolbar", {struct: true});
    window.dhx4._eventable(this);
    this._getObj = function (g, d) {
        var e = null;
        for (var f = 0; f < g.childNodes.length; f++) {
            if (g.childNodes[f].tagName != null) {
                if (String(g.childNodes[f].tagName).toLowerCase() == String(d).toLowerCase()) {
                    e = g.childNodes[f]
                }
            }
        }
        return e
    };
    this._addImgObj = function (e) {
        var d = document.createElement("IMG");
        if (e.childNodes.length > 0) {
            e.insertBefore(d, e.childNodes[0])
        } else {
            e.appendChild(d)
        }
        return d
    };
    this._setItemImage = function (g, e, d) {
        if (d == true) {
            g.imgEn = e
        } else {
            g.imgDis = e
        }
        if ((!g.state && d == true) || (g.state && d == false)) {
            return
        }
        var f = this._getObj(g.obj, "img");
        if (f == null) {
            f = this._addImgObj(g.obj)
        }
        f.src = this.conf.icons_path + e
    };
    this._clearItemImage = function (f, d) {
        if (d == true) {
            f.imgEn = ""
        } else {
            f.imgDis = ""
        }
        if ((!f.state && d == true) || (f.state && d == false)) {
            return
        }
        var e = this._getObj(f.obj, "img");
        if (e != null) {
            e.parentNode.removeChild(e)
        }
    };
    this._setItemText = function (d, f) {
        var e = this._getObj(d.obj, "div");
        if (f == null || f.length == 0) {
            if (e != null) {
                e.parentNode.removeChild(e)
            }
            return
        }
        if (e == null) {
            e = document.createElement("DIV");
            e.className = "dhxtoolbar_text";
            d.obj.appendChild(e)
        }
        e.innerHTML = f
    };
    this._getItemText = function (d) {
        var e = this._getObj(d.obj, "div");
        if (e != null) {
            return e.innerHTML
        }
        return ""
    };
    this._enableItem = function (e) {
        if (e.state) {
            return
        }
        e.state = true;
        if (this.objPull[e.id]["type"] == "buttonTwoState" && this.objPull[e.id]["obj"]["pressed"] == true) {
            e.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_pres";
            e.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_over"
        } else {
            e.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_def";
            e.obj.renderAs = e.obj.className
        }
        if (e.arw) {
            e.arw.className = String(e.obj.className).replace("btn", "arw")
        }
        var d = this._getObj(e.obj, "img");
        if (e.imgEn != "") {
            if (d == null) {
                d = this._addImgObj(e.obj)
            }
            d.src = this.conf.icons_path + e.imgEn
        } else {
            if (d != null) {
                d.parentNode.removeChild(d)
            }
        }
    };
    this._disableItem = function (e) {
        if (!e.state) {
            return
        }
        e.state = false;
        e.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.objPull[e.id]["type"] == "buttonTwoState" && e.obj.pressed ? "pres_" : "") + "dis";
        e.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
        if (e.arw) {
            e.arw.className = String(e.obj.className).replace("btn", "arw")
        }
        var d = this._getObj(e.obj, "img");
        if (e.imgDis != "") {
            if (d == null) {
                d = this._addImgObj(e.obj)
            }
            d.src = this.conf.icons_path + e.imgDis
        } else {
            if (d != null) {
                d.parentNode.removeChild(d)
            }
        }
        if (e.polygon != null) {
            if (e.polygon.style.display != "none") {
                window.dhx4.zim.clear(e.polygon._idd);
                e.polygon.style.display = "none";
                if (e.polygon._ie6cover) {
                    e.polygon._ie6cover.style.display = "none"
                }
                if (this.conf.skin == "dhx_terrace") {
                    this._improveTerraceButtonSelect(e.id, true)
                }
                this.callEvent("onButtonSelectHide", [e.obj.idd])
            }
        }
        this.anyUsed = "none"
    };
    this.clearAll = function () {
        for (var d in this.objPull) {
            this._removeItem(String(d).replace(this.idPrefix, ""))
        }
    };
    this._doOnClick = function (d) {
        if (a && a.forEachItem) {
            a.forEachItem(function (f) {
                if (a.objPull[a.idPrefix + f]["type"] == "buttonSelect") {
                    var e = a.objPull[a.idPrefix + f];
                    if (e.arw._skip === true) {
                        e.arw._skip = false
                    } else {
                        if (e.polygon.style.display != "none") {
                            e.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
                            e.obj.className = e.obj.renderAs;
                            e.arw.className = String(e.obj.renderAs).replace("btn", "arw");
                            a.anyUsed = "none";
                            window.dhx4.zim.clear(e.polygon._idd);
                            e.polygon.style.display = "none";
                            if (e.polygon._ie6cover) {
                                e.polygon._ie6cover.style.display = "none"
                            }
                            if (a.conf.skin == "dhx_terrace") {
                                a._improveTerraceButtonSelect(e.id, true)
                            }
                            a.callEvent("onButtonSelectHide", [e.obj.idd])
                        }
                    }
                }
            })
        }
    };
    if (typeof(window.addEventListener) != "undefined") {
        window.addEventListener("mousedown", this._doOnClick, false);
        window.addEventListener("touchstart", this._doOnClick, false)
    } else {
        document.body.attachEvent("onmousedown", this._doOnClick)
    }
    if (this.conf.icons_size_autoload != null) {
        this.setIconSize(this.conf.icons_size_autoload);
        this.conf.icons_size_autoload = null
    }
    if (this.conf.items_autoload != null) {
        this.loadStruct(this.conf.items_autoload, this.conf.onload_autoload);
        this.conf.items_autoload = null
    } else {
        if (this.conf.json_autoload != null) {
            this.loadStruct(this.conf.json_autoload, this.conf.onload_autoload);
            this.conf.json_autoload = null
        } else {
            if (this.conf.xml_autoload != null) {
                this.loadStruct(this.conf.xml_autoload, this.conf.onload_autoload);
                this.conf.xml_autoload = null
            }
        }
    }
    if (this.conf.align_autostart != this.conf.align) {
        this.setAlign(this.conf.align_autostart);
        this.conf.align_autostart = null
    }
    if (typeof(this.conf.auto_onclick) == "function") {
        this.attachEvent("onClick", this.conf.auto_onclick)
    } else {
        if (typeof(this.conf.auto_onclick) == "string" && typeof(window[this.conf.auto_onclick]) == "function") {
            this.attachEvent("onClick", window[this.conf.auto_onclick])
        }
    }
    return this
}
dhtmlXToolbarObject.prototype.addSpacer = function (c) {
    var b = this.idPrefix + c;
    if (this._spacer != null) {
        if (this._spacer.idd == c) {
            return
        }
        if (this._spacer == this.objPull[b].obj.parentNode) {
            var a = true;
            while (a) {
                var g = this._spacer.childNodes[0].idd;
                this.base.appendChild(this._spacer.childNodes[0]);
                if (g == c || this._spacer.childNodes.length == 0) {
                    if (this.objPull[b].arw != null) {
                        this.base.appendChild(this.objPull[b].arw)
                    }
                    a = false
                }
            }
            this._spacer.idd = c;
            this._fixSpacer();
            return
        }
        if (this.base == this.objPull[b].obj.parentNode) {
            var a = true;
            var f = (this.objPull[b].arw != null);
            while (a) {
                var d = this.base.childNodes.length - 1;
                if (f == true) {
                    if (this.base.childNodes[d] == this.objPull[b].arw) {
                        a = false
                    }
                }
                if (this.base.childNodes[d].idd == c) {
                    a = false
                }
                if (a) {
                    if (this._spacer.childNodes.length > 0) {
                        this._spacer.insertBefore(this.base.childNodes[d], this._spacer.childNodes[0])
                    } else {
                        this._spacer.appendChild(this.base.childNodes[d])
                    }
                }
            }
            this._spacer.idd = c;
            this._fixSpacer();
            return
        }
    } else {
        var e = null;
        for (var d = 0; d < this.base.childNodes.length; d++) {
            if (this.base.childNodes[d] == this.objPull[this.idPrefix + c].obj) {
                e = d;
                if (this.objPull[this.idPrefix + c].arw != null) {
                    e = d + 1
                }
            }
        }
        if (e != null) {
            this._spacer = document.createElement("DIV");
            this._spacer.className = (this.conf.align == "right" ? " dhxtoolbar_float_left" : " dhxtoolbar_float_right");
            this._spacer.dir = "ltr";
            this._spacer.idd = c;
            while (this.base.childNodes.length > e + 1) {
                this._spacer.appendChild(this.base.childNodes[e + 1])
            }
            this.cont.appendChild(this._spacer);
            this._fixSpacer()
        }
    }
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype.removeSpacer = function () {
    if (!this._spacer) {
        return
    }
    while (this._spacer.childNodes.length > 0) {
        this.base.appendChild(this._spacer.childNodes[0])
    }
    this._spacer.parentNode.removeChild(this._spacer);
    this._spacer = null;
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype._fixSpacer = function () {
    if (typeof(window.addEventListener) == "undefined" && this._spacer != null) {
        this._spacer.style.borderLeft = "1px solid #a4bed4";
        var a = this._spacer;
        window.setTimeout(function () {
            a.style.borderLeft = "0px solid #a4bed4";
            a = null
        }, 1)
    }
};
dhtmlXToolbarObject.prototype.getType = function (c) {
    var d = this.getParentId(c);
    if (d != null) {
        var b = null;
        var a = this.objPull[this.idPrefix + d]._listOptions[c];
        if (a != null) {
            if (a.sep != null) {
                b = "buttonSelectSeparator"
            } else {
                b = "buttonSelectButton"
            }
        }
        return b
    } else {
        if (this.objPull[this.idPrefix + c] == null) {
            return null
        }
        return this.objPull[this.idPrefix + c]["type"]
    }
};
dhtmlXToolbarObject.prototype.getTypeExt = function (b) {
    var a = this.getType(b);
    if (a == "buttonSelectButton" || a == "buttonSelectSeparator") {
        if (a == "buttonSelectButton") {
            a = "button"
        } else {
            a = "separator"
        }
        return a
    }
    return null
};
dhtmlXToolbarObject.prototype.inArray = function (c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c[a] == b) {
            return true
        }
    }
    return false
};
dhtmlXToolbarObject.prototype.getParentId = function (e) {
    var f = null;
    for (var d in this.objPull) {
        if (this.objPull[d]._listOptions) {
            for (var c in this.objPull[d]._listOptions) {
                if (c == e) {
                    f = String(d).replace(this.idPrefix, "")
                }
            }
        }
    }
    return f
};
dhtmlXToolbarObject.prototype._addItem = function (a, b) {
    if (typeof(a.text) == "string") {
        a.text = window.dhx4.trim(a.text);
        if (a.text.length == 0) {
            a.text = null
        }
    }
    this._addItemToStorage(a, b);
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype.addButton = function (e, d, b, a, c) {
    this._addItem({id: e, type: "button", text: b, img: a, imgdis: c}, d)
};
dhtmlXToolbarObject.prototype.addText = function (c, b, a) {
    this._addItem({id: c, type: "text", text: a}, b)
};
dhtmlXToolbarObject.prototype.addButtonSelect = function (d, h, l, a, b, i, g, n, e, f) {
    var m = [];
    for (var c = 0; c < a.length; c++) {
        var j = {};
        if (a[c] instanceof Array) {
            j.id = a[c][0];
            j.type = (a[c][1] == "obj" ? "button" : "separator");
            j.text = (a[c][2] || null);
            j.img = (a[c][3] || null)
        } else {
            if (a[c] instanceof Object && a[c] != null && typeof(a[c].id) != "undefined" && typeof(a[c].type) != "undefined") {
                j.id = a[c].id;
                j.type = (a[c].type == "obj" ? "button" : "separator");
                j.text = a[c].text;
                j.img = a[c].img
            }
        }
        m.push(j)
    }
    this._addItem({
        id: d,
        type: "buttonSelect",
        text: l,
        img: b,
        imgdis: i,
        renderSelect: g,
        openAll: n,
        options: m,
        maxOpen: e,
        mode: f
    }, h)
};
dhtmlXToolbarObject.prototype.addButtonTwoState = function (e, d, b, a, c) {
    this._addItem({id: e, type: "buttonTwoState", img: a, imgdis: c, text: b}, d)
};
dhtmlXToolbarObject.prototype.addSeparator = function (b, a) {
    this._addItem({id: b, type: "separator"}, a)
};
dhtmlXToolbarObject.prototype.addSlider = function (b, g, e, d, i, c, f, a, h) {
    this._addItem({
        id: b,
        type: "slider",
        length: e,
        valueMin: d,
        valueMax: i,
        valueNow: c,
        textMin: f,
        textMax: a,
        toolTip: h
    }, g)
};
dhtmlXToolbarObject.prototype.addInput = function (d, c, b, a) {
    this._addItem({id: d, type: "buttonInput", value: b, width: a}, c)
};
dhtmlXToolbarObject.prototype.forEachItem = function (c) {
    for (var b in this.objPull) {
        if (this.inArray(this.rootTypes, this.objPull[b]["type"])) {
            c(this.objPull[b]["id"].replace(this.idPrefix, ""))
        }
    }
};
(function () {
    var f = "isVisible,enableItem,disableItem,isEnabled,setItemText,getItemText,setItemToolTip,getItemToolTip,getInput,setItemImage,setItemImageDis,clearItemImage,clearItemImageDis,setItemState,getItemState,setItemToolTipTemplate,getItemToolTipTemplate,setValue,getValue,setMinValue,getMinValue,setMaxValue,getMaxValue,setWidth,getWidth,setMaxOpen".split(",");
    var c = [false, "", "", false, "", "", "", "", "", "", "", "", "", false, "", "", "", null, "", [null, null], "", [null, null], "", null];
    var b = function (g, h) {
        return function (l, j, i) {
            l = this.idPrefix + l;
            if (this.objPull[l][g] != null) {
                return this.objPull[l][g].call(this.objPull[l], j, i)
            } else {
                return h
            }
        }
    };
    for (var e = 0; e < f.length; e++) {
        var a = f[e];
        var d = c[e];
        dhtmlXToolbarObject.prototype[a] = b(a, d)
    }
})();
dhtmlXToolbarObject.prototype.showItem = function (a) {
    a = this.idPrefix + a;
    if (this.objPull[a] != null && this.objPull[a].showItem != null) {
        this.objPull[a].showItem();
        if (this.conf.skin == "dhx_terrace") {
            this._improveTerraceSkin()
        }
    }
};
dhtmlXToolbarObject.prototype.hideItem = function (a) {
    a = this.idPrefix + a;
    if (this.objPull[a] != null && this.objPull[a].hideItem != null) {
        this.objPull[a].hideItem();
        if (this.conf.skin == "dhx_terrace") {
            this._improveTerraceSkin()
        }
    }
};
dhtmlXToolbarObject.prototype.getPosition = function (a) {
    return this._getPosition(a)
};
dhtmlXToolbarObject.prototype._getPosition = function (e, c) {
    if (this.objPull[this.idPrefix + e] == null) {
        return null
    }
    var d = null;
    var a = 0;
    for (var b = 0; b < this.base.childNodes.length; b++) {
        if (this.base.childNodes[b].idd != null) {
            if (this.base.childNodes[b].idd == e) {
                d = a
            }
            a++
        }
    }
    if (!d && this._spacer != null) {
        for (var b = 0; b < this._spacer.childNodes.length; b++) {
            if (this._spacer.childNodes[b].idd != null) {
                if (this._spacer.childNodes[b].idd == e) {
                    d = a
                }
                a++
            }
        }
    }
    return d
};
dhtmlXToolbarObject.prototype.setPosition = function (a, b) {
    this._setPosition(a, b)
};
dhtmlXToolbarObject.prototype._setPosition = function (e, d) {
    if (this.objPull[this.idPrefix + e] == null) {
        return
    }
    var a = null;
    if (this._spacer) {
        a = this._spacer.idd;
        this.removeSpacer()
    }
    if (isNaN(d)) {
        d = this.base.childNodes.length
    }
    if (d < 0) {
        d = 0
    }
    var c = this.objPull[this.idPrefix + e];
    this.base.removeChild(c.obj);
    if (c.arw) {
        this.base.removeChild(c.arw)
    }
    var b = this._getIdByPosition(d, true);
    if (b[0] == null) {
        this.base.appendChild(c.obj);
        if (c.arw) {
            this.base.appendChild(c.arw)
        }
    } else {
        this.base.insertBefore(c.obj, this.base.childNodes[b[1]]);
        if (c.arw) {
            this.base.insertBefore(c.arw, this.base.childNodes[b[1] + 1])
        }
    }
    if (a != null) {
        this.addSpacer(a)
    }
};
dhtmlXToolbarObject.prototype._getIdByPosition = function (f, b) {
    var e = null;
    var a = 0;
    var c = 0;
    for (var d = 0; d < this.base.childNodes.length; d++) {
        if (this.base.childNodes[d]["idd"] != null && e == null) {
            if ((a++) == f) {
                e = this.base.childNodes[d]["idd"]
            }
        }
        if (e == null) {
            c++
        }
    }
    c = (e == null ? null : c);
    return (b == true ? new Array(e, c) : e)
};
dhtmlXToolbarObject.prototype.removeItem = function (a) {
    this._removeItem(a);
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype._removeItem = function (e) {
    var c = this.getType(e);
    e = this.idPrefix + e;
    var d = this.objPull[e];
    if (c == "button") {
        d.obj._doOnMouseOver = null;
        d.obj._doOnMouseOut = null;
        d.obj._doOnMouseUp = null;
        d.obj._doOnMouseUpOnceAnywhere = null;
        d.obj.onclick = null;
        d.obj.onmouseover = null;
        d.obj.onmouseout = null;
        d.obj.onmouseup = null;
        d.obj.onmousedown = null;
        d.obj.onselectstart = null;
        d.obj.renderAs = null;
        d.obj.idd = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.state = null;
        d.img = null;
        d.imgEn = null;
        d.imgDis = null;
        d.type = null;
        d.enableItem = null;
        d.disableItem = null;
        d.isEnabled = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null;
        d.setItemText = null;
        d.getItemText = null;
        d.setItemImage = null;
        d.clearItemImage = null;
        d.setItemImageDis = null;
        d.clearItemImageDis = null;
        d.setItemToolTip = null;
        d.getItemToolTip = null
    }
    if (c == "buttonTwoState") {
        d.obj._doOnMouseOver = null;
        d.obj._doOnMouseOut = null;
        d.obj.onmouseover = null;
        d.obj.onmouseout = null;
        d.obj.onmousedown = null;
        d.obj.onselectstart = null;
        d.obj.renderAs = null;
        d.obj.idd = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.state = null;
        d.img = null;
        d.imgEn = null;
        d.imgDis = null;
        d.type = null;
        d.enableItem = null;
        d.disableItem = null;
        d.isEnabled = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null;
        d.setItemText = null;
        d.getItemText = null;
        d.setItemImage = null;
        d.clearItemImage = null;
        d.setItemImageDis = null;
        d.clearItemImageDis = null;
        d.setItemToolTip = null;
        d.getItemToolTip = null;
        d.setItemState = null;
        d.getItemState = null
    }
    if (c == "buttonSelect") {
        for (var b in d._listOptions) {
            this.removeListOption(e, b)
        }
        d._listOptions = null;
        if (d.polygon._ie6cover) {
            document.body.removeChild(d.polygon._ie6cover);
            d.polygon._ie6cover = null
        }
        d.p_tbl.removeChild(d.p_tbody);
        d.polygon.removeChild(d.p_tbl);
        d.polygon.onselectstart = null;
        document.body.removeChild(d.polygon);
        d.p_tbody = null;
        d.p_tbl = null;
        d.polygon = null;
        d.obj.onclick = null;
        d.obj.onmouseover = null;
        d.obj.onmouseout = null;
        d.obj.onmouseup = null;
        d.obj.onmousedown = null;
        d.obj.onselectstart = null;
        d.obj.idd = null;
        d.obj.iddPrefix = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.arw.onclick = null;
        d.arw.onmouseover = null;
        d.arw.onmouseout = null;
        d.arw.onmouseup = null;
        d.arw.onmousedown = null;
        d.arw.onselectstart = null;
        d.arw.parentNode.removeChild(d.arw);
        d.arw = null;
        d.renderSelect = null;
        d.state = null;
        d.type = null;
        d.id = null;
        d.img = null;
        d.imgEn = null;
        d.imgDis = null;
        d.openAll = null;
        d._isListButton = null;
        d._separatorButtonSelectObject = null;
        d._buttonButtonSelectObject = null;
        d.setWidth = null;
        d.enableItem = null;
        d.disableItem = null;
        d.isEnabled = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null;
        d.setItemText = null;
        d.getItemText = null;
        d.setItemImage = null;
        d.clearItemImage = null;
        d.setItemImageDis = null;
        d.clearItemImageDis = null;
        d.setItemToolTip = null;
        d.getItemToolTip = null;
        d.addListOption = null;
        d.removeListOption = null;
        d.showListOption = null;
        d.hideListOption = null;
        d.isListOptionVisible = null;
        d.enableListOption = null;
        d.disableListOption = null;
        d.isListOptionEnabled = null;
        d.setListOptionPosition = null;
        d.getListOptionPosition = null;
        d.setListOptionImage = null;
        d.getListOptionImage = null;
        d.clearListOptionImage = null;
        d.setListOptionText = null;
        d.getListOptionText = null;
        d.setListOptionToolTip = null;
        d.getListOptionToolTip = null;
        d.forEachListOption = null;
        d.getAllListOptions = null;
        d.setListOptionSelected = null;
        d.getListOptionSelected = null
    }
    if (c == "buttonInput") {
        d.obj.childNodes[0].onkeydown = null;
        d.obj.removeChild(d.obj.childNodes[0]);
        d.obj.w = null;
        d.obj.idd = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.type = null;
        d.enableItem = null;
        d.disableItem = null;
        d.isEnabled = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null;
        d.setItemToolTip = null;
        d.getItemToolTip = null;
        d.setWidth = null;
        d.getWidth = null;
        d.setValue = null;
        d.getValue = null;
        d.setItemText = null;
        d.getItemText = null
    }
    if (c == "slider") {
        if (window.dhx4.isIPad) {
            document.removeEventListener("touchmove", pen._doOnMouseMoveStart, false);
            document.removeEventListener("touchend", pen._doOnMouseMoveEnd, false)
        } else {
            if (typeof(window.addEventListener) == "function") {
                window.removeEventListener("mousemove", d.pen._doOnMouseMoveStart, false);
                window.removeEventListener("mouseup", d.pen._doOnMouseMoveEnd, false)
            } else {
                document.body.detachEvent("onmousemove", d.pen._doOnMouseMoveStart);
                document.body.detachEvent("onmouseup", d.pen._doOnMouseMoveEnd)
            }
        }
        d.pen.allowMove = null;
        d.pen.initXY = null;
        d.pen.maxX = null;
        d.pen.minX = null;
        d.pen.nowX = null;
        d.pen.newNowX = null;
        d.pen.valueMax = null;
        d.pen.valueMin = null;
        d.pen.valueNow = null;
        d.pen._definePos = null;
        d.pen._detectLimits = null;
        d.pen._doOnMouseMoveStart = null;
        d.pen._doOnMouseMoveEnd = null;
        d.pen.onmousedown = null;
        d.obj.removeChild(d.pen);
        d.pen = null;
        d.label.tip = null;
        document.body.removeChild(d.label);
        d.label = null;
        d.obj.onselectstart = null;
        d.obj.idd = null;
        while (d.obj.childNodes.length > 0) {
            d.obj.removeChild(d.obj.childNodes[0])
        }
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.type = null;
        d.state = null;
        d.enableItem = null;
        d.disableItem = null;
        d.isEnabled = null;
        d.setItemToolTipTemplate = null;
        d.getItemToolTipTemplate = null;
        d.setMaxValue = null;
        d.setMinValue = null;
        d.getMaxValue = null;
        d.getMinValue = null;
        d.setValue = null;
        d.getValue = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null
    }
    if (c == "separator") {
        d.obj.onselectstart = null;
        d.obj.idd = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.type = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null
    }
    if (c == "text") {
        d.obj.onselectstart = null;
        d.obj.idd = null;
        d.obj.parentNode.removeChild(d.obj);
        d.obj = null;
        d.id = null;
        d.type = null;
        d.showItem = null;
        d.hideItem = null;
        d.isVisible = null;
        d.setWidth = null;
        d.setItemText = null;
        d.getItemText = null
    }
    c = null;
    d = null;
    this.objPull[this.idPrefix + e] = null;
    delete this.objPull[this.idPrefix + e]
};
(function () {
    var d = "addListOption,removeListOption,showListOption,hideListOption,isListOptionVisible,enableListOption,disableListOption,isListOptionEnabled,setListOptionPosition,getListOptionPosition,setListOptionText,getListOptionText,setListOptionToolTip,getListOptionToolTip,setListOptionImage,getListOptionImage,clearListOptionImage,forEachListOption,getAllListOptions,setListOptionSelected,getListOptionSelected".split(",");
    var b = function (e) {
        return function (l, g, f, j, i, h) {
            l = this.idPrefix + l;
            if (this.objPull[l] == null) {
                return
            }
            if (this.objPull[l]["type"] != "buttonSelect") {
                return
            }
            return this.objPull[l][e].call(this.objPull[l], g, f, j, i, h)
        }
    };
    for (var c = 0; c < d.length; c++) {
        var a = d[c];
        dhtmlXToolbarObject.prototype[a] = b(a)
    }
})();
dhtmlXToolbarObject.prototype._rtlParseBtn = function (b, a) {
    return b + a
};
dhtmlXToolbarObject.prototype._separatorObject = function (a, c, b) {
    this.id = a.idPrefix + c;
    this.obj = document.createElement("DIV");
    this.obj.className = "dhx_toolbar_sep";
    this.obj.style.display = (b.hidden != null ? "none" : "");
    this.obj.idd = String(c);
    this.obj.title = (b.title || "");
    this.obj.onselectstart = function (d) {
        d = d || event;
        if (d.preventDefault) {
            d.preventDefault()
        } else {
            d.returnValue = false
        }
    };
    this.obj.ontouchstart = function (d) {
        d = d || event;
        if (d.preventDefault) {
            d.preventDefault()
        } else {
            d.returnValue = false
        }
        d.cancelBubble = true;
        return false
    };
    a.base.appendChild(this.obj);
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    return this
};
dhtmlXToolbarObject.prototype._textObject = function (a, c, b) {
    this.id = a.idPrefix + c;
    this.obj = document.createElement("DIV");
    this.obj.className = "dhx_toolbar_text";
    this.obj.style.display = (b.hidden != null ? "none" : "");
    this.obj.idd = String(c);
    this.obj.title = (b.title || "");
    this.obj.onselectstart = function (d) {
        d = d || event;
        if (d.preventDefault) {
            d.preventDefault()
        } else {
            d.returnValue = false
        }
    };
    this.obj.ontouchstart = function (d) {
        d = d || event;
        if (d.preventDefault) {
            d.preventDefault()
        } else {
            d.returnValue = false
        }
        d.cancelBubble = true;
        return false
    };
    this.obj.innerHTML = (b.text || "");
    a.base.appendChild(this.obj);
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    this.setItemText = function (d) {
        this.obj.innerHTML = d
    };
    this.getItemText = function () {
        return this.obj.innerHTML
    };
    this.setWidth = function (d) {
        this.obj.style.width = d + "px"
    };
    this.setItemToolTip = function (d) {
        this.obj.title = d
    };
    this.getItemToolTip = function () {
        return this.obj.title
    };
    return this
};
dhtmlXToolbarObject.prototype._buttonObject = function (a, d, b) {
    this.id = a.idPrefix + d;
    this.state = (b.enabled != null ? false : true);
    this.imgEn = (b.img || "");
    this.imgDis = (b.imgdis || "");
    this.img = (this.state ? (this.imgEn != "" ? this.imgEn : "") : (this.imgDis != "" ? this.imgDis : ""));
    this.obj = document.createElement("DIV");
    this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.state ? "def" : "dis");
    this.obj.style.display = (b.hidden != null ? "none" : "");
    this.obj.allowClick = false;
    this.obj.extAction = (b.action || null);
    this.obj.renderAs = this.obj.className;
    this.obj.idd = String(d);
    this.obj.title = (b.title || "");
    this.obj.pressed = false;
    this.obj.innerHTML = a._rtlParseBtn((this.img != "" ? "<img src='" + a.conf.icons_path + this.img + "'>" : ""), (b.text != null ? "<div class='dhxtoolbar_text'>" + b.text + "</div>" : ""));
    var c = this;
    this.obj.onselectstart = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
    };
    this.obj.onmouseover = function () {
        this._doOnMouseOver()
    };
    this.obj.onmouseout = function () {
        this._doOnMouseOut()
    };
    this.obj._doOnMouseOver = function () {
        this.allowClick = true;
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            return
        }
        this.className = "dhx_toolbar_btn dhxtoolbar_btn_over";
        this.renderAs = this.className
    };
    this.obj._doOnMouseOut = function () {
        this.allowClick = false;
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            return
        }
        this.className = "dhx_toolbar_btn dhxtoolbar_btn_def";
        this.renderAs = this.renderAs
    };
    this.obj.onclick = function (f) {
        if (c.state == false) {
            return
        }
        if (this.allowClick == false) {
            return
        }
        f = f || event;
        var g = this.idd.replace(a.idPrefix, "");
        if (this.extAction) {
            try {
                window[this.extAction](g)
            } catch (f) {
            }
        }
        if (a && a.callEvent) {
            a.callEvent("onClick", [g])
        }
    };
    this.obj[window.dhx4.isIPad ? "ontouchstart" : "onmousedown"] = function (f) {
        if (c.state == false) {
            f = f || event;
            if (f.preventDefault) {
                f.preventDefault()
            } else {
                f.returnValue = false
            }
            f.cancelBubble = true;
            return false
        }
        if (a.anyUsed != "none") {
            return
        }
        a.anyUsed = this.idd;
        this.className = "dhx_toolbar_btn dhxtoolbar_btn_pres";
        this.pressed = true;
        this.onmouseover = function () {
            this._doOnMouseOver()
        };
        this.onmouseout = function () {
            a.anyUsed = "none";
            this._doOnMouseOut()
        };
        return false
    };
    this.obj[window.dhx4.isIPad ? "ontouchend" : "onmouseup"] = function (h) {
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            if (a.anyUsed != this.idd) {
                return
            }
        }
        var g = a.anyUsed;
        this._doOnMouseUp();
        if (window.dhx4.isIPad && g != "none") {
            if (this.extAction) {
                var f = this;
                window.setTimeout(function () {
                    try {
                        window[f.extAction](d)
                    } catch (i) {
                    }
                    f = null
                }, 1)
            }
            a.callEvent("onClick", [this.idd.replace(a.idPrefix, "")])
        }
    };
    if (window.dhx4.isIPad) {
        this.obj.ontouchmove = function (f) {
            this._doOnMouseUp()
        }
    }
    this.obj._doOnMouseUp = function () {
        a.anyUsed = "none";
        this.className = this.renderAs;
        this.pressed = false
    };
    this.obj._doOnMouseUpOnceAnywhere = function () {
        this._doOnMouseUp();
        this.onmouseover = function () {
            this._doOnMouseOver()
        };
        this.onmouseout = function () {
            this._doOnMouseOut()
        }
    };
    a.base.appendChild(this.obj);
    this.enableItem = function () {
        a._enableItem(this)
    };
    this.disableItem = function () {
        a._disableItem(this)
    };
    this.isEnabled = function () {
        return this.state
    };
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    this.setItemText = function (e) {
        a._setItemText(this, e)
    };
    this.getItemText = function () {
        return a._getItemText(this)
    };
    this.setItemImage = function (e) {
        a._setItemImage(this, e, true)
    };
    this.clearItemImage = function () {
        a._clearItemImage(this, true)
    };
    this.setItemImageDis = function (e) {
        a._setItemImage(this, e, false)
    };
    this.clearItemImageDis = function () {
        a._clearItemImage(this, false)
    };
    this.setItemToolTip = function (e) {
        this.obj.title = e
    };
    this.getItemToolTip = function () {
        return this.obj.title
    };
    return this
};
dhtmlXToolbarObject.prototype._buttonSelectObject = function (c, f, e) {
    this.id = c.idPrefix + f;
    this.state = (e.enabled != null ? (e.enabled == "true" ? true : false) : true);
    this.imgEn = (e.img || "");
    this.imgDis = (e.imgdis || "");
    this.img = (this.state ? (this.imgEn != "" ? this.imgEn : "") : (this.imgDis != "" ? this.imgDis : ""));
    this.mode = (e.mode || "button");
    if (this.mode == "select") {
        this.openAll = true;
        this.renderSelect = false;
        if (!e.text || e.text.length == 0) {
            e.text = "&nbsp;"
        }
    } else {
        this.openAll = (window.dhx4.s2b(e.openAll) == true);
        this.renderSelect = (e.renderSelect == null ? true : window.dhx4.s2b(e.renderSelect))
    }
    this.maxOpen = (!isNaN(e.maxOpen ? e.maxOpen : "") ? e.maxOpen : null);
    this._maxOpenTest = function () {
        if (!isNaN(this.maxOpen)) {
            if (!c._sbw) {
                var h = document.createElement("DIV");
                h.className = "dhxtoolbar_maxopen_test";
                document.body.appendChild(h);
                var g = document.createElement("DIV");
                g.className = "dhxtoolbar_maxopen_test2";
                h.appendChild(g);
                c._sbw = h.offsetWidth - g.offsetWidth;
                h.removeChild(g);
                g = null;
                document.body.removeChild(h);
                h = null
            }
        }
    };
    this._maxOpenTest();
    this.obj = document.createElement("DIV");
    this.obj.allowClick = false;
    this.obj.extAction = (e.action || null);
    this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.state ? "def" : "dis");
    this.obj.style.display = (e.hidden != null ? "none" : "");
    this.obj.renderAs = this.obj.className;
    this.obj.onselectstart = function (g) {
        g = g || event;
        if (g.preventDefault) {
            g.preventDefault()
        } else {
            g.returnValue = false
        }
    };
    this.obj.idd = String(f);
    this.obj.title = (e.title || "");
    this.obj.pressed = false;
    this.callEvent = false;
    this.obj.innerHTML = c._rtlParseBtn((this.img != "" ? "<img src='" + c.conf.icons_path + this.img + "'>" : ""), (e.text != null ? "<div class='dhxtoolbar_text'>" + e.text + "</div>" : ""));
    c.base.appendChild(this.obj);
    this.arw = document.createElement("DIV");
    this.arw.className = "dhx_toolbar_arw dhxtoolbar_btn_" + (this.state ? "def" : "dis");
    this.arw.style.display = this.obj.style.display;
    this.arw.innerHTML = "<div class='arwimg'>&nbsp;</div>";
    this.arw.title = this.obj.title;
    this.arw.onselectstart = function (g) {
        g = g || event;
        if (g.preventDefault) {
            g.preventDefault()
        } else {
            g.returnValue = false
        }
    };
    c.base.appendChild(this.arw);
    var a = this;
    this.obj.onmouseover = function (g) {
        g = g || event;
        if (c.anyUsed != "none") {
            return
        }
        if (!a.state) {
            return
        }
        a.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_over";
        a.obj.className = a.obj.renderAs;
        a.arw.className = String(a.obj.renderAs).replace("btn", "arw")
    };
    this.obj.onmouseout = function () {
        a.obj.allowClick = false;
        if (c.anyUsed != "none") {
            return
        }
        if (!a.state) {
            return
        }
        a.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
        a.obj.className = a.obj.renderAs;
        a.arw.className = String(a.obj.renderAs).replace("btn", "arw");
        a.callEvent = false
    };
    this.arw.onmouseover = this.obj.onmouseover;
    this.arw.onmouseout = this.obj.onmouseout;
    if (this.openAll == true) {
    } else {
        this.obj.onclick = function (g) {
            g = g || event;
            if (!a.obj.allowClick) {
                return
            }
            if (!a.state) {
                return
            }
            if (c.anyUsed != "none") {
                return
            }
            var h = a.obj.idd.replace(c.idPrefix, "");
            if (a.obj.extAction) {
                try {
                    window[a.obj.extAction](h)
                } catch (g) {
                }
            }
            c.callEvent("onClick", [h])
        };
        this.obj[window.dhx4.isIPad ? "ontouchstart" : "onmousedown"] = function (g) {
            g = g || event;
            if (c.anyUsed != "none") {
                return
            }
            if (!a.state) {
                return
            }
            a.obj.allowClick = true;
            a.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_pres";
            a.arw.className = "dhx_toolbar_arw dhxtoolbar_btn_pres";
            a.callEvent = true
        };
        this.obj[window.dhx4.isIPad ? "ontouchend" : "onmouseup"] = function (h) {
            h = h || event;
            h.cancelBubble = true;
            if (c.anyUsed != "none") {
                return
            }
            if (!a.state) {
                return
            }
            a.obj.className = a.obj.renderAs;
            a.arw.className = String(a.obj.renderAs).replace("btn", "arw");
            if (window.dhx4.isIPad) {
                if (this.extAction) {
                    var g = this;
                    window.setTimeout(function () {
                        try {
                            window[g.extAction](i)
                        } catch (j) {
                        }
                        g = null
                    }, 1)
                }
                if (a.callEvent) {
                    var i = a.obj.idd.replace(c.idPrefix, "");
                    c.callEvent("onClick", [i])
                }
            }
        }
    }
    if (window.dhx4.isIPad) {
        this.obj.ontouchmove = this.obj.onmouseout
    }
    this.arw[window.dhx4.isIPad ? "ontouchstart" : "onmousedown"] = function (i) {
        i = i || event;
        var p = (this.className.indexOf("dhx_toolbar_arw") === 0 ? this : this.nextSibling);
        if (p._skip) {
            i = i || event;
            i.cancelBubble = true
        } else {
            p._skip = true
        }
        p = null;
        if (!a.state) {
            return
        }
        if (c.anyUsed == a.obj.idd) {
            a.obj.className = a.obj.renderAs;
            a.arw.className = String(a.obj.renderAs).replace("btn", "arw");
            c.anyUsed = "none";
            window.dhx4.zim.clear(a.polygon._idd);
            a.polygon.style.display = "none";
            if (a.polygon._ie6cover) {
                a.polygon._ie6cover.style.display = "none"
            }
            if (c.conf.skin == "dhx_terrace") {
                c._improveTerraceButtonSelect(a.id, true)
            }
            c.callEvent("onButtonSelectHide", [a.obj.idd])
        } else {
            if (c.anyUsed != "none") {
                if (c.objPull[c.idPrefix + c.anyUsed]["type"] == "buttonSelect") {
                    var o = c.objPull[c.idPrefix + c.anyUsed];
                    if (o.polygon.style.display != "none") {
                        o.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
                        o.obj.className = o.obj.renderAs;
                        o.arw.className = String(a.obj.renderAs).replace("btn", "arw");
                        window.dhx4.zim.clear(o.polygon._idd);
                        o.polygon.style.display = "none";
                        if (o.polygon._ie6cover) {
                            o.polygon._ie6cover.style.display = "none"
                        }
                        if (c.conf.skin == "dhx_terrace") {
                            c._improveTerraceButtonSelect(o.id, true)
                        }
                        c.callEvent("onButtonSelectHide", [o.obj.idd])
                    }
                }
            }
            a.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_over";
            a.arw.className = "dhx_toolbar_arw dhxtoolbar_btn_pres";
            c.anyUsed = a.obj.idd;
            a.polygon.style.top = "0px";
            a.polygon.style.visibility = "hidden";
            a.polygon.style.zIndex = window.dhx4.zim.reserve(a.polygon._idd);
            a.polygon.style.display = "";
            if (c.conf.skin == "dhx_terrace") {
                c._improveTerraceButtonSelect(a.id, false)
            }
            a._fixMaxOpenHeight(a.maxOpen || null);
            c._autoDetectVisibleArea();
            var j = window.dhx4.absTop(a.obj) + a.obj.offsetHeight + c.conf.sel_ofs_y;
            var m = a.polygon.offsetHeight;
            if (j + m > c.tY2) {
                var l = (a.maxOpen != null ? Math.floor((c.tY2 - j) / 22) : 0);
                if (l >= 1) {
                    a._fixMaxOpenHeight(l)
                } else {
                    j = window.dhx4.absTop(a.obj) - m - c.conf.sel_ofs_y;
                    if (j < 0) {
                        j = 0
                    }
                }
            }
            a.polygon.style.top = j + "px";
            if (c.rtl) {
                a.polygon.style.left = window.dhx4.absLeft(a.obj) + a.obj.offsetWidth - a.polygon.offsetWidth + c.conf.sel_ofs_x + "px"
            } else {
                var h = document.body.scrollLeft;
                var g = h + (window.innerWidth || document.body.clientWidth);
                var n = window.dhx4.absLeft(a.obj) + c.conf.sel_ofs_x;
                if (n + a.polygon.offsetWidth > g) {
                    n = window.dhx4.absLeft(a.arw) + a.arw.offsetWidth - a.polygon.offsetWidth
                }
                a.polygon.style.left = Math.max(n, 5) + "px"
            }
            a.polygon.style.visibility = "visible";
            if (a.polygon._ie6cover) {
                a.polygon._ie6cover.style.left = a.polygon.style.left;
                a.polygon._ie6cover.style.top = a.polygon.style.top;
                a.polygon._ie6cover.style.width = a.polygon.offsetWidth + "px";
                a.polygon._ie6cover.style.height = a.polygon.offsetHeight + "px";
                a.polygon._ie6cover.style.display = ""
            }
            c.callEvent("onButtonSelectShow", [a.obj.idd])
        }
        return false
    };
    this.arw.onclick = function (g) {
        g = g || event;
        g.cancelBubble = true
    };
    this.arw[window.dhx4.isIPad ? "ontouchend" : "onmouseup"] = function (g) {
        g = g || event;
        g.cancelBubble = true
    };
    if (this.openAll === true) {
        this.obj.onclick = this.arw.onclick;
        this.obj.onmousedown = this.arw.onmousedown;
        this.obj.onmouseup = this.arw.onmouseup;
        if (window.dhx4.isIPad) {
            this.obj.ontouchstart = this.arw.ontouchstart;
            this.obj.ontouchend = this.arw.ontouchend
        }
    }
    this.obj.iddPrefix = c.idPrefix;
    this._listOptions = {};
    this._fixMaxOpenHeight = function (m) {
        var l = "auto";
        var j = false;
        if (m !== null) {
            var i = 0;
            for (var g in this._listOptions) {
                i++
            }
            if (i > m) {
                this._ph = 22 * m;
                l = this._ph + "px"
            } else {
                j = true
            }
        }
        this.polygon.style.width = "auto";
        this.polygon.style.height = "auto";
        if (!j && a.maxOpen != null) {
            this.polygon.style.width = this.p_tbl.offsetWidth + c._sbw + "px";
            this.polygon.style.height = l
        }
    };
    this._separatorButtonSelectObject = function (i, g, h) {
        this.obj = {};
        this.obj.tr = document.createElement("TR");
        this.obj.tr.className = "tr_sep";
        this.obj.tr.onselectstart = function (j) {
            j = j || event;
            if (j.preventDefault) {
                j.preventDefault()
            } else {
                j.returnValue = false
            }
            return false
        };
        this.obj.td = document.createElement("TD");
        this.obj.td.colSpan = "2";
        this.obj.td.className = "td_btn_sep";
        this.obj.td.onselectstart = function (j) {
            j = j || event;
            if (j.preventDefault) {
                j.preventDefault()
            } else {
                j.returnValue = false
            }
            return false
        };
        if (isNaN(h)) {
            h = a.p_tbody.childNodes.length + 1
        } else {
            if (h < 1) {
                h = 1
            }
        }
        if (h > a.p_tbody.childNodes.length) {
            a.p_tbody.appendChild(this.obj.tr)
        } else {
            a.p_tbody.insertBefore(this.obj.tr, a.p_tbody.childNodes[h - 1])
        }
        this.obj.tr.appendChild(this.obj.td);
        this.obj.sep = document.createElement("DIV");
        this.obj.sep.className = "btn_sep";
        this.obj.sep.onselectstart = function (j) {
            j = j || event;
            if (j.preventDefault) {
                j.preventDefault()
            } else {
                j.returnValue = false
            }
            return false
        };
        this.obj.td.appendChild(this.obj.sep);
        a._listOptions[i] = this.obj;
        return this
    };
    this._buttonButtonSelectObject = function (l, i, j) {
        var h = true;
        if (typeof(i.enabled) != "undefined") {
            h = window.dhx4.s2b(i.enabled)
        } else {
            if (typeof(i.disabled) != "undefined") {
                h = window.dhx4.s2b(i.disabled)
            }
        }
        this.obj = {};
        this.obj.tr = document.createElement("TR");
        this.obj.tr.en = h;
        this.obj.tr.extAction = (i.action || null);
        this.obj.tr._selected = (i.selected != null);
        this.obj.tr.className = "tr_btn" + (this.obj.tr.en ? (this.obj.tr._selected && a.renderSelect ? " tr_btn_selected" : "") : " tr_btn_disabled");
        this.obj.tr.onselectstart = function (m) {
            m = m || event;
            if (m.preventDefault) {
                m.preventDefault()
            } else {
                m.returnValue = false
            }
            return false
        };
        this.obj.tr.idd = String(l);
        if (isNaN(j)) {
            j = a.p_tbody.childNodes.length + 1
        } else {
            if (j < 1) {
                j = 1
            }
        }
        if (j > a.p_tbody.childNodes.length) {
            a.p_tbody.appendChild(this.obj.tr)
        } else {
            a.p_tbody.insertBefore(this.obj.tr, a.p_tbody.childNodes[j - 1])
        }
        this.obj.td_a = document.createElement("TD");
        this.obj.td_a.className = "td_btn_img";
        this.obj.td_a.onselectstart = function (m) {
            m = m || event;
            if (m.preventDefault) {
                m.preventDefault()
            } else {
                m.returnValue = false
            }
            return false
        };
        this.obj.td_b = document.createElement("TD");
        this.obj.td_b.className = "td_btn_txt";
        this.obj.td_b.onselectstart = function (m) {
            m = m || event;
            if (m.preventDefault) {
                m.preventDefault()
            } else {
                m.returnValue = false
            }
            return false
        };
        if (c.rtl) {
            this.obj.tr.appendChild(this.obj.td_b);
            this.obj.tr.appendChild(this.obj.td_a)
        } else {
            this.obj.tr.appendChild(this.obj.td_a);
            this.obj.tr.appendChild(this.obj.td_b)
        }
        if (i.img != null) {
            this.obj.td_a.innerHTML = "<img class='btn_sel_img' src='" + c.conf.icons_path + i.img + "' border='0'>";
            this.obj.tr._img = i.img
        } else {
            this.obj.td_a.innerHTML = "&nbsp;"
        }
        var g = (i.text != null ? i.text : (i.itemText || ""));
        this.obj.td_b.innerHTML = "<div class='btn_sel_text'>" + g + "</div>";
        this.obj.tr.onmouseover = function (m) {
            m = m || event;
            if (m.type.match(/touch/) != null) {
                return
            }
            if (!this.en || (this._selected && a.renderSelect)) {
                return
            }
            this.className = "tr_btn tr_btn_over"
        };
        this.obj.tr.onmouseout = function (m) {
            m = m || event;
            if (m.type.match(/touch/) != null) {
                return
            }
            if (!this.en) {
                return
            }
            if (this._selected && a.renderSelect) {
                if (String(this.className).search("tr_btn_selected") == -1) {
                    this.className = "tr_btn tr_btn_selected"
                }
            } else {
                this.className = "tr_btn"
            }
        };
        this.obj.tr.ontouchstart = this.obj.tr.onmousedown = function (m) {
            m = m || event;
            if (this._etype == null) {
                this._etype = m.type
            }
        };
        this.obj.tr.onclick = function (n) {
            n = n || event;
            n.cancelBubble = true;
            if (!this.en) {
                return
            }
            a.setListOptionSelected(this.idd.replace(c.idPrefix, ""));
            a.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
            a.obj.className = a.obj.renderAs;
            a.arw.className = String(a.obj.renderAs).replace("btn", "arw");
            if (this._etype != null && this._etype.match(/touch/) == null) {
                window.dhx4.zim.clear(a.polygon._idd);
                a.polygon.style.display = "none";
                if (a.polygon._ie6cover) {
                    a.polygon._ie6cover.style.display = "none"
                }
            } else {
                var m = a.polygon;
                window.setTimeout(function () {
                    window.dhx4.zim.clear(m._idd);
                    m.style.display = "none";
                    m = null
                }, 500)
            }
            this._etype = null;
            if (c.conf.skin == "dhx_terrace") {
                c._improveTerraceButtonSelect(a.id, true)
            }
            c.anyUsed = "none";
            c.callEvent("onButtonSelectHide", [a.obj.idd]);
            var o = this.idd.replace(c.idPrefix, "");
            if (this.extAction) {
                try {
                    window[this.extAction](o)
                } catch (n) {
                }
            }
            c.callEvent("onClick", [o])
        };
        a._listOptions[l] = this.obj;
        return this
    };
    this.polygon = document.createElement("DIV");
    this.polygon.dir = "ltr";
    this.polygon.style.display = "none";
    this.polygon.className = "dhx_toolbar_poly_" + c.conf.skin + " dhxtoolbar_icons_" + c.conf.iconSize;
    this.polygon.onselectstart = function (g) {
        g = g || event;
        if (g.preventDefault) {
            g.preventDefault()
        } else {
            g.returnValue = false
        }
    };
    this.polygon.onmousedown = function (g) {
        g = g || event;
        g.cancelBubble = true
    };
    this.polygon.style.overflowY = "auto";
    this.polygon._idd = window.dhx4.newId();
    this.polygon.ontouchstart = function (g) {
        g = g || event;
        g.cancelBubble = true
    };
    this.polygon.ontouchend = function (g) {
        g = g || event;
        g.cancelBubble = true
    };
    this.p_tbl = document.createElement("TABLE");
    this.p_tbl.className = "buttons_cont";
    this.p_tbl.cellSpacing = "0";
    this.p_tbl.cellPadding = "0";
    this.p_tbl.border = "0";
    this.polygon.appendChild(this.p_tbl);
    this.p_tbody = document.createElement("TBODY");
    this.p_tbl.appendChild(this.p_tbody);
    if (e.options != null) {
        for (var d = 0; d < e.options.length; d++) {
            var b = "_" + (e.options[d].type || "") + "ButtonSelectObject";
            if (e.options[d].id == null) {
                e.options[d].id = c._genStr(24)
            }
            if (typeof(this[b]) == "function") {
                new this[b](e.options[d].id, e.options[d])
            }
        }
    }
    document.body.appendChild(this.polygon);
    if (window.dhx4.isIE6) {
        this.polygon._ie6cover = document.createElement("IFRAME");
        this.polygon._ie6cover.frameBorder = 0;
        this.polygon._ie6cover.style.position = "absolute";
        this.polygon._ie6cover.style.border = "none";
        this.polygon._ie6cover.style.backgroundColor = "#000000";
        this.polygon._ie6cover.style.filter = "alpha(opacity=100)";
        this.polygon._ie6cover.style.display = "none";
        this.polygon._ie6cover.setAttribute("src", "javascript:false;");
        document.body.appendChild(this.polygon._ie6cover)
    }
    this.setWidth = function (g) {
        this.obj.style.width = g - this.arw.offsetWidth + "px";
        this.polygon.style.width = this.obj.offsetWidth + this.arw.offsetWidth - 2 + "px";
        this.p_tbl.style.width = this.polygon.style.width
    };
    this.enableItem = function () {
        c._enableItem(this)
    };
    this.disableItem = function () {
        c._disableItem(this)
    };
    this.isEnabled = function () {
        return this.state
    };
    this.showItem = function () {
        this.obj.style.display = "";
        this.arw.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none";
        this.arw.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    this.setItemText = function (g) {
        c._setItemText(this, g)
    };
    this.getItemText = function () {
        return c._getItemText(this)
    };
    this.setItemImage = function (g) {
        c._setItemImage(this, g, true)
    };
    this.clearItemImage = function () {
        c._clearItemImage(this, true)
    };
    this.setItemImageDis = function (g) {
        c._setItemImage(this, g, false)
    };
    this.clearItemImageDis = function () {
        c._clearItemImage(this, false)
    };
    this.setItemToolTip = function (g) {
        this.obj.title = g;
        this.arw.title = g
    };
    this.getItemToolTip = function () {
        return this.obj.title
    };
    this.addListOption = function (m, l, i, j, g) {
        if (!(i == "button" || i == "separator")) {
            return
        }
        var h = {id: m, type: i, text: j, img: g};
        new this["_" + i + "ButtonSelectObject"](m, h, l)
    };
    this.removeListOption = function (i) {
        if (!this._isListButton(i, true)) {
            return
        }
        var g = this._listOptions[i];
        if (g.td_a != null && g.td_b != null) {
            g.td_a.onselectstart = null;
            g.td_b.onselectstart = null;
            while (g.td_a.childNodes.length > 0) {
                g.td_a.removeChild(g.td_a.childNodes[0])
            }
            while (g.td_b.childNodes.length > 0) {
                g.td_b.removeChild(g.td_b.childNodes[0])
            }
            g.tr.onselectstart = null;
            g.tr.onmouseover = null;
            g.tr.onmouseout = null;
            g.tr.onclick = null;
            g.tr.ontouchstart = null;
            g.tr.onmousedown = null;
            while (g.tr.childNodes.length > 0) {
                g.tr.removeChild(g.tr.childNodes[0])
            }
            g.tr.parentNode.removeChild(g.tr);
            g.td_a = null;
            g.td_b = null;
            g.tr = null
        } else {
            g.sep.onselectstart = null;
            g.td.onselectstart = null;
            g.tr.onselectstart = null;
            while (g.td.childNodes.length > 0) {
                g.td.removeChild(g.td.childNodes[0])
            }
            while (g.tr.childNodes.length > 0) {
                g.tr.removeChild(g.tr.childNodes[0])
            }
            g.tr.parentNode.removeChild(g.tr);
            g.sep = null;
            g.td = null;
            g.tr = null
        }
        g = null;
        this._listOptions[i] = null;
        try {
            delete this._listOptions[i]
        } catch (h) {
        }
    };
    this.showListOption = function (g) {
        if (!this._isListButton(g, true)) {
            return
        }
        this._listOptions[g].tr.style.display = ""
    };
    this.hideListOption = function (g) {
        if (!this._isListButton(g, true)) {
            return
        }
        this._listOptions[g].tr.style.display = "none"
    };
    this.isListOptionVisible = function (g) {
        if (!this._isListButton(g, true)) {
            return
        }
        return (this._listOptions[g].tr.style.display != "none")
    };
    this.enableListOption = function (g) {
        if (!this._isListButton(g)) {
            return
        }
        this._listOptions[g].tr.en = true;
        this._listOptions[g].tr.className = "tr_btn" + (this._listOptions[g].tr._selected && c.renderSelect ? " tr_btn_selected" : "")
    };
    this.disableListOption = function (g) {
        if (!this._isListButton(g)) {
            return
        }
        this._listOptions[g].tr.en = false;
        this._listOptions[g].tr.className = "tr_btn tr_btn_disabled"
    };
    this.isListOptionEnabled = function (g) {
        if (!this._isListButton(g)) {
            return
        }
        return this._listOptions[g].tr.en
    };
    this.setListOptionPosition = function (i, h) {
        if (!this._listOptions[i] || this.getListOptionPosition(i) == h || isNaN(h)) {
            return
        }
        if (h < 1) {
            h = 1
        }
        var g = this._listOptions[i].tr;
        this.p_tbody.removeChild(g);
        if (h > this.p_tbody.childNodes.length) {
            this.p_tbody.appendChild(g)
        } else {
            this.p_tbody.insertBefore(g, this.p_tbody.childNodes[h - 1])
        }
        g = null
    };
    this.getListOptionPosition = function (i) {
        var h = -1;
        if (!this._listOptions[i]) {
            return h
        }
        for (var g = 0; g < this.p_tbody.childNodes.length; g++) {
            if (this.p_tbody.childNodes[g] == this._listOptions[i].tr) {
                h = g + 1
            }
        }
        return h
    };
    this.setListOptionImage = function (i, g) {
        if (!this._isListButton(i)) {
            return
        }
        var h = this._listOptions[i].tr.childNodes[(c.rtl ? 1 : 0)];
        h.innerHTML = "<img src='" + c.conf.icons_path + g + "' class='btn_sel_img'>";
        h = null
    };
    this.getListOptionImage = function (i) {
        if (!this._isListButton(i)) {
            return
        }
        var h = this._listOptions[i].tr.childNodes[(c.rtl ? 1 : 0)];
        var g = null;
        if (h.childNodes.length > 0) {
            g = h.childNodes[0].src
        }
        h = null;
        return g
    };
    this.clearListOptionImage = function (h) {
        if (!this._isListButton(h)) {
            return
        }
        var g = this._listOptions[h].tr.childNodes[(c.rtl ? 1 : 0)];
        while (g.childNodes.length > 0) {
            g.removeChild(g.childNodes[0])
        }
        g.innerHTML = "&nbsp;";
        g = null
    };
    this.setListOptionText = function (h, g) {
        if (!this._isListButton(h)) {
            return
        }
        this._listOptions[h].tr.childNodes[(c.rtl ? 0 : 1)].childNodes[0].innerHTML = g
    };
    this.getListOptionText = function (g) {
        if (!this._isListButton(g)) {
            return
        }
        return this._listOptions[g].tr.childNodes[(c.rtl ? 0 : 1)].childNodes[0].innerHTML
    };
    this.setListOptionToolTip = function (h, g) {
        if (!this._isListButton(h)) {
            return
        }
        this._listOptions[h].tr.title = g
    };
    this.getListOptionToolTip = function (g) {
        if (!this._isListButton(g)) {
            return
        }
        return this._listOptions[g].tr.title
    };
    this.forEachListOption = function (h) {
        for (var g in this._listOptions) {
            h(g)
        }
    };
    this.getAllListOptions = function () {
        var h = new Array();
        for (var g in this._listOptions) {
            h[h.length] = g
        }
        return h
    };
    this.setListOptionSelected = function (i) {
        for (var g in this._listOptions) {
            var h = this._listOptions[g];
            if (h.td_a != null && h.td_b != null && h.tr.en) {
                if (g == i) {
                    h.tr._selected = true;
                    h.tr.className = "tr_btn" + (this.renderSelect ? " tr_btn_selected" : "");
                    if (this.mode == "select") {
                        if (h.tr._img) {
                            this.setItemImage(h.tr._img)
                        } else {
                            this.clearItemImage()
                        }
                        this.setItemText(this.getListOptionText(i))
                    }
                } else {
                    h.tr._selected = false;
                    h.tr.className = "tr_btn"
                }
            }
            h = null
        }
    };
    this.getListOptionSelected = function () {
        var h = null;
        for (var g in this._listOptions) {
            if (this._listOptions[g].tr._selected == true) {
                h = g
            }
        }
        return h
    };
    this._isListButton = function (h, g) {
        if (this._listOptions[h] == null) {
            return false
        }
        if (!g && this._listOptions[h].tr.className == "tr_sep") {
            return false
        }
        return true
    };
    this.setMaxOpen = function (g) {
        this._ph = null;
        if (typeof(g) == "number") {
            this.maxOpen = g;
            this._maxOpenTest();
            return
        }
        this.maxOpen = null
    };
    if (e.width) {
        this.setWidth(e.width)
    }
    if (this.mode == "select" && typeof(e.selected) != "undefined") {
        this.setListOptionSelected(e.selected)
    }
    return this
};
dhtmlXToolbarObject.prototype._buttonInputObject = function (c, e, d) {
    this.id = c.idPrefix + e;
    this.obj = document.createElement("DIV");
    this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_def";
    this.obj.style.display = (d.hidden != null ? "none" : "");
    this.obj.idd = String(e);
    this.obj.w = (d.width != null ? d.width : 100);
    this.obj.title = (d.title != null ? d.title : "");
    this.obj.innerHTML = "<input class='dhxtoolbar_input' type='text' style='width:" + this.obj.w + "px;'" + (d.value != null ? " value='" + d.value + "'" : "") + ">";
    var b = c;
    var a = this;
    this.obj.childNodes[0].onkeydown = function (f) {
        f = f || event;
        if (f.keyCode == 13) {
            b.callEvent("onEnter", [a.obj.idd, this.value])
        }
    };
    c.base.appendChild(this.obj);
    this.enableItem = function () {
        this.obj.childNodes[0].disabled = false
    };
    this.disableItem = function () {
        this.obj.childNodes[0].disabled = true
    };
    this.isEnabled = function () {
        return (!this.obj.childNodes[0].disabled)
    };
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display != "none")
    };
    this.setValue = function (f) {
        this.obj.childNodes[0].value = f
    };
    this.getValue = function () {
        return this.obj.childNodes[0].value
    };
    this.setWidth = function (f) {
        this.obj.w = f;
        this.obj.childNodes[0].style.width = this.obj.w + "px"
    };
    this.getWidth = function () {
        return this.obj.w
    };
    this.setItemToolTip = function (f) {
        this.obj.title = f
    };
    this.getItemToolTip = function () {
        return this.obj.title
    };
    this.getInput = function () {
        return this.obj.firstChild
    };
    if (typeof(d.enabled) != "undefined" && window.dhx4.s2b(d.enabled) == false) {
        this.disableItem()
    }
    return this
};
dhtmlXToolbarObject.prototype._buttonTwoStateObject = function (a, d, b) {
    this.id = a.idPrefix + d;
    this.state = (b.enabled != null ? false : true);
    this.imgEn = (b.img != null ? b.img : "");
    this.imgDis = (b.imgdis != null ? b.imgdis : "");
    this.img = (this.state ? (this.imgEn != "" ? this.imgEn : "") : (this.imgDis != "" ? this.imgDis : ""));
    this.obj = document.createElement("DIV");
    this.obj.pressed = (b.selected != null);
    this.obj.extAction = (b.action || null);
    this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.obj.pressed ? "pres" + (this.state ? "" : "_dis") : (this.state ? "def" : "dis"));
    this.obj.style.display = (b.hidden != null ? "none" : "");
    this.obj.renderAs = this.obj.className;
    this.obj.idd = String(d);
    this.obj.title = (b.title || "");
    if (this.obj.pressed) {
        this.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_over"
    }
    this.obj.innerHTML = a._rtlParseBtn((this.img != "" ? "<img src='" + a.conf.icons_path + this.img + "'>" : ""), (b.text != null ? "<div class='dhxtoolbar_text'>" + b.text + "</div>" : ""));
    a.base.appendChild(this.obj);
    var c = this;
    this.obj.onselectstart = function (f) {
        f = f || event;
        if (f.preventDefault) {
            f.preventDefault()
        } else {
            f.returnValue = false
        }
    };
    this.obj.onmouseover = function () {
        this._doOnMouseOver()
    };
    this.obj.onmouseout = function () {
        this._doOnMouseOut()
    };
    this.obj._doOnMouseOver = function () {
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            return
        }
        if (this.pressed) {
            this.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_over";
            return
        }
        this.className = "dhx_toolbar_btn dhxtoolbar_btn_over";
        this.renderAs = this.className
    };
    this.obj._doOnMouseOut = function () {
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            return
        }
        if (this.pressed) {
            this.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_def";
            return
        }
        this.className = "dhx_toolbar_btn dhxtoolbar_btn_def";
        this.renderAs = this.className
    };
    this.obj[window.dhx4.isIPad ? "ontouchstart" : "onmousedown"] = function (f) {
        if (a.checkEvent("onBeforeStateChange")) {
            if (!a.callEvent("onBeforeStateChange", [this.idd.replace(a.idPrefix, ""), this.pressed])) {
                return
            }
        }
        if (c.state == false) {
            return
        }
        if (a.anyUsed != "none") {
            return
        }
        this.pressed = !this.pressed;
        this.className = (this.pressed ? "dhx_toolbar_btn dhxtoolbar_btn_pres" : this.renderAs);
        var g = this.idd.replace(a.idPrefix, "");
        if (this.extAction) {
            try {
                window[this.extAction](g, this.pressed)
            } catch (f) {
            }
        }
        a.callEvent("onStateChange", [g, this.pressed]);
        return false
    };
    this.setItemState = function (f, h) {
        if (this.obj.pressed != f) {
            if (f == true) {
                this.obj.pressed = true;
                this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_pres" + (this.state ? "" : "_dis");
                this.obj.renderAs = "dhx_toolbar_btn dhxtoolbar_btn_over"
            } else {
                this.obj.pressed = false;
                this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.state ? "def" : "dis");
                this.obj.renderAs = this.obj.className
            }
            if (h == true) {
                var i = this.obj.idd.replace(a.idPrefix, "");
                if (this.obj.extAction) {
                    try {
                        window[this.obj.extAction](i, this.obj.pressed)
                    } catch (g) {
                    }
                }
                a.callEvent("onStateChange", [i, this.obj.pressed])
            }
        }
    };
    this.getItemState = function () {
        return this.obj.pressed
    };
    this.enableItem = function () {
        a._enableItem(this)
    };
    this.disableItem = function () {
        a._disableItem(this)
    };
    this.isEnabled = function () {
        return this.state
    };
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    this.setItemText = function (e) {
        a._setItemText(this, e)
    };
    this.getItemText = function () {
        return a._getItemText(this)
    };
    this.setItemImage = function (e) {
        a._setItemImage(this, e, true)
    };
    this.clearItemImage = function () {
        a._clearItemImage(this, true)
    };
    this.setItemImageDis = function (e) {
        a._setItemImage(this, e, false)
    };
    this.clearItemImageDis = function () {
        a._clearItemImage(this, false)
    };
    this.setItemToolTip = function (e) {
        this.obj.title = e
    };
    this.getItemToolTip = function () {
        return this.obj.title
    };
    return this
};
dhtmlXToolbarObject.prototype._sliderObject = function (d, f, e) {
    this.id = d.idPrefix + f;
    this.state = (e.enabled != null ? (e.enabled == "true" ? true : false) : true);
    this.obj = document.createElement("DIV");
    this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_" + (this.state ? "def" : "dis");
    this.obj.style.display = (e.hidden != null ? "none" : "");
    this.obj.onselectstart = function (g) {
        g = g || event;
        if (g.preventDefault) {
            g.preventDefault()
        } else {
            g.returnValue = false
        }
    };
    this.obj.idd = String(f);
    this.obj.len = (e.length != null ? Number(e.length) : 50);
    this.obj.innerHTML = "<div class='dhxtoolbar_text'>" + (e.textMin || "") + "</div><div class='dhxtoolbar_sl_bg_l'></div><div class='dhxtoolbar_sl_bg_m' style='width:" + this.obj.len + "px;'></div><div class='dhxtoolbar_sl_bg_r'></div><div class='dhxtoolbar_text'>" + (e.textMax || "") + "</div>";
    d.base.appendChild(this.obj);
    var a = this;
    this.pen = document.createElement("DIV");
    this.pen.className = "dhxtoolbar_sl_pen";
    this.obj.appendChild(this.pen);
    var c = this.pen;
    this.label = document.createElement("DIV");
    this.label.dir = "ltr";
    this.label.className = "dhx_toolbar_slider_label_" + d.conf.skin + (d.rtl ? "_rtl" : "");
    this.label.style.display = "none";
    this.label.tip = (e.toolTip || "%v");
    this.label._zi = window.dhx4.newId();
    document.body.appendChild(this.label);
    var b = this.label;
    this.pen.valueMin = (e.valueMin != null ? Number(e.valueMin) : 0);
    this.pen.valueMax = (e.valueMax != null ? Number(e.valueMax) : 100);
    if (this.pen.valueMin > this.pen.valueMax) {
        this.pen.valueMin = this.pen.valueMax
    }
    this.pen.valueNow = (e.valueNow != null ? Number(e.valueNow) : this.pen.valueMax);
    if (this.pen.valueNow > this.pen.valueMax) {
        this.pen.valueNow = this.pen.valueMax
    }
    if (this.pen.valueNow < this.pen.valueMin) {
        this.pen.valueNow = this.pen.valueMin
    }
    this.pen._detectLimits = function () {
        this.minX = a.obj.childNodes[1].offsetLeft + 2;
        this.maxX = a.obj.childNodes[3].offsetLeft - this.offsetWidth + 1
    };
    this.pen._detectLimits();
    this.pen._definePos = function () {
        this.nowX = Math.round((this.valueNow - this.valueMin) * (this.maxX - this.minX) / (this.valueMax - this.valueMin) + this.minX);
        this.style.left = this.nowX + "px";
        this.newNowX = this.nowX
    };
    this.pen._definePos();
    this.pen.initXY = 0;
    this.pen.allowMove = false;
    this.pen[window.dhx4.isIPad ? "ontouchstart" : "onmousedown"] = function (g) {
        if (a.state == false) {
            return
        }
        g = g || event;
        this.initXY = (window.dhx4.isIPad ? g.touches[0].clientX : g.clientX);
        this.newValueNow = this.valueNow;
        this.allowMove = true;
        this.className = "dhxtoolbar_sl_pen dhxtoolbar_over";
        if (b.tip != "") {
            b.style.visibility = "hidden";
            b.style.display = "";
            b.innerHTML = b.tip.replace("%v", this.valueNow);
            b.style.left = Math.round(window.dhx4.absLeft(this) + this.offsetWidth / 2 - b.offsetWidth / 2) + "px";
            b.style.top = window.dhx4.absTop(this) - b.offsetHeight - 3 + "px";
            b.style.visibility = "";
            b.style.zIndex = window.dhx4.zim.reserve(b._zi)
        }
    };
    this.pen._doOnMouseMoveStart = function (h) {
        h = h || event;
        if (!c.allowMove) {
            return
        }
        var g = (window.dhx4.isIPad ? h.touches[0].clientX : h.clientX);
        var i = g - c.initXY;
        if (g < window.dhx4.absLeft(c) + Math.round(c.offsetWidth / 2) && c.nowX == c.minX) {
            return
        }
        if (g > window.dhx4.absLeft(c) + Math.round(c.offsetWidth / 2) && c.nowX == c.maxX) {
            return
        }
        c.newNowX = c.nowX + i;
        if (c.newNowX < c.minX) {
            c.newNowX = c.minX
        }
        if (c.newNowX > c.maxX) {
            c.newNowX = c.maxX
        }
        c.nowX = c.newNowX;
        c.style.left = c.nowX + "px";
        c.initXY = g;
        c.newValueNow = Math.round((c.valueMax - c.valueMin) * (c.newNowX - c.minX) / (c.maxX - c.minX) + c.valueMin);
        if (b.tip != "") {
            b.innerHTML = b.tip.replace(/%v/gi, c.newValueNow);
            b.style.left = Math.round(window.dhx4.absLeft(c) + c.offsetWidth / 2 - b.offsetWidth / 2) + "px";
            b.style.top = window.dhx4.absTop(c) - b.offsetHeight - 3 + "px"
        }
        h.cancelBubble = true;
        if (h.preventDefault) {
            h.preventDefault()
        } else {
            h.returnValue = false
        }
        return false
    };
    this.pen._doOnMouseMoveEnd = function () {
        if (!c.allowMove) {
            return
        }
        c.className = "dhxtoolbar_sl_pen";
        c.allowMove = false;
        c.nowX = c.newNowX;
        c.valueNow = c.newValueNow;
        if (b.tip != "") {
            b.style.display = "none";
            window.dhx4.zim.clear(b._zi)
        }
        d.callEvent("onValueChange", [a.obj.idd.replace(d.idPrefix, ""), c.valueNow])
    };
    if (window.dhx4.isIPad) {
        document.addEventListener("touchmove", c._doOnMouseMoveStart, false);
        document.addEventListener("touchend", c._doOnMouseMoveEnd, false)
    } else {
        if (typeof(window.addEventListener) != "undefined") {
            window.addEventListener("mousemove", c._doOnMouseMoveStart, false);
            window.addEventListener("mouseup", c._doOnMouseMoveEnd, false)
        } else {
            document.body.attachEvent("onmousemove", c._doOnMouseMoveStart);
            document.body.attachEvent("onmouseup", c._doOnMouseMoveEnd)
        }
    }
    this.enableItem = function () {
        if (this.state) {
            return
        }
        this.state = true;
        this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_def"
    };
    this.disableItem = function () {
        if (!this.state) {
            return
        }
        this.state = false;
        this.obj.className = "dhx_toolbar_btn dhxtoolbar_btn_dis"
    };
    this.isEnabled = function () {
        return this.state
    };
    this.showItem = function () {
        this.obj.style.display = ""
    };
    this.hideItem = function () {
        this.obj.style.display = "none"
    };
    this.isVisible = function () {
        return (this.obj.style.display == "")
    };
    this.setValue = function (g, h) {
        g = Number(g);
        if (g < this.pen.valueMin) {
            g = this.pen.valueMin
        }
        if (g > this.pen.valueMax) {
            g = this.pen.valueMax
        }
        this.pen.valueNow = g;
        this.pen._definePos();
        if (h == true) {
            d.callEvent("onValueChange", [this.obj.idd.replace(d.idPrefix, ""), this.pen.valueNow])
        }
    };
    this.getValue = function () {
        return this.pen.valueNow
    };
    this.setMinValue = function (h, g) {
        h = Number(h);
        if (h > this.pen.valueMax) {
            return
        }
        this.obj.childNodes[0].innerHTML = g;
        this.obj.childNodes[0].style.display = (g.length > 0 ? "" : "none");
        this.pen.valueMin = h;
        if (this.pen.valueNow < this.pen.valueMin) {
            this.pen.valueNow = this.pen.valueMin
        }
        this.pen._detectLimits();
        this.pen._definePos()
    };
    this.setMaxValue = function (h, g) {
        h = Number(h);
        if (h < this.pen.valueMin) {
            return
        }
        this.obj.childNodes[4].innerHTML = g;
        this.obj.childNodes[4].style.display = (g.length > 0 ? "" : "none");
        this.pen.valueMax = h;
        if (this.pen.valueNow > this.pen.valueMax) {
            this.pen.valueNow = this.pen.valueMax
        }
        this.pen._detectLimits();
        this.pen._definePos()
    };
    this.getMinValue = function () {
        var g = this.obj.childNodes[0].innerHTML;
        var h = this.pen.valueMin;
        return new Array(h, g)
    };
    this.getMaxValue = function () {
        var g = this.obj.childNodes[4].innerHTML;
        var h = this.pen.valueMax;
        return new Array(h, g)
    };
    this.setItemToolTipTemplate = function (g) {
        this.label.tip = g
    };
    this.getItemToolTipTemplate = function () {
        return this.label.tip
    };
    return this
};
dhtmlXToolbarObject.prototype.unload = function () {
    if (typeof(window.addEventListener) == "function") {
        window.removeEventListener("mousedown", this._doOnClick, false);
        window.removeEventListener("touchstart", this._doOnClick, false)
    } else {
        document.body.detachEvent("onmousedown", this._doOnClick)
    }
    this._doOnClick = null;
    this.clearAll();
    this.objPull = null;
    if (this._xmlLoader) {
        this._xmlLoader.destructor();
        this._xmlLoader = null
    }
    while (this.base.childNodes.length > 0) {
        this.base.removeChild(this.base.childNodes[0])
    }
    this.cont.removeChild(this.base);
    this.base = null;
    while (this.cont.childNodes.length > 0) {
        this.cont.removeChild(this.cont.childNodes[0])
    }
    this.cont.className = "";
    this.cont = null;
    window.dhx4._enableDataLoading(this, null, null, null, "clear");
    window.dhx4._eventable(this, "clear");
    this.tX1 = null;
    this.tX2 = null;
    this.tY1 = null;
    this.tY2 = null;
    this.anyUsed = null;
    this.idPrefix = null;
    this.rootTypes = null;
    this._rtl = null;
    this._rtlParseBtn = null;
    this.setRTL = null;
    this._sbw = null;
    this._getObj = null;
    this._addImgObj = null;
    this._setItemImage = null;
    this._clearItemImage = null;
    this._setItemText = null;
    this._getItemText = null;
    this._enableItem = null;
    this._disableItem = null;
    this._xmlParser = null;
    this._addItemToStorage = null;
    this._genStr = null;
    this._addItem = null;
    this._getPosition = null;
    this._setPosition = null;
    this._getIdByPosition = null;
    this._separatorObject = null;
    this._textObject = null;
    this._buttonObject = null;
    this._buttonSelectObject = null;
    this._buttonInputObject = null;
    this._buttonTwoStateObject = null;
    this._sliderObject = null;
    this._autoDetectVisibleArea = null;
    this._removeItem = null;
    this.setAlign = null;
    this.setSkin = null;
    this.setIconsPath = null;
    this.setIconPath = null;
    this.loadXML = null;
    this.loadXMLString = null;
    this.clearAll = null;
    this.addSpacer = null;
    this.removeSpacer = null;
    this.getType = null;
    this.getTypeExt = null;
    this.inArray = null;
    this.getParentId = null;
    this.addButton = null;
    this.addText = null;
    this.addButtonSelect = null;
    this.addButtonTwoState = null;
    this.addSeparator = null;
    this.addSlider = null;
    this.addInput = null;
    this.forEachItem = null;
    this.showItem = null;
    this.hideItem = null;
    this.isVisible = null;
    this.enableItem = null;
    this.disableItem = null;
    this.isEnabled = null;
    this.setItemText = null;
    this.getItemText = null;
    this.setItemToolTip = null;
    this.getItemToolTip = null;
    this.setItemImage = null;
    this.setItemImageDis = null;
    this.clearItemImage = null;
    this.clearItemImageDis = null;
    this.setItemState = null;
    this.getItemState = null;
    this.setItemToolTipTemplate = null;
    this.getItemToolTipTemplate = null;
    this.setValue = null;
    this.getValue = null;
    this.setMinValue = null;
    this.getMinValue = null;
    this.setMaxValue = null;
    this.getMaxValue = null;
    this.setWidth = null;
    this.getWidth = null;
    this.getPosition = null;
    this.setPosition = null;
    this.removeItem = null;
    this.addListOption = null;
    this.removeListOption = null;
    this.showListOption = null;
    this.hideListOption = null;
    this.isListOptionVisible = null;
    this.enableListOption = null;
    this.disableListOption = null;
    this.isListOptionEnabled = null;
    this.setListOptionPosition = null;
    this.getListOptionPosition = null;
    this.setListOptionText = null;
    this.getListOptionText = null;
    this.setListOptionToolTip = null;
    this.getListOptionToolTip = null;
    this.setListOptionImage = null;
    this.getListOptionImage = null;
    this.clearListOptionImage = null;
    this.forEachListOption = null;
    this.getAllListOptions = null;
    this.setListOptionSelected = null;
    this.getListOptionSelected = null;
    this.unload = null;
    this.setUserData = null;
    this.getUserData = null;
    this.setMaxOpen = null;
    this.items = null;
    this.conf = null
};
dhtmlXToolbarObject.prototype._autoDetectVisibleArea = function () {
    var a = window.dhx4.screenDim();
    this.tX1 = a.left;
    this.tX2 = a.right;
    this.tY1 = a.top;
    this.tY2 = a.bottom
};
dhtmlXToolbarObject.prototype._initObj = function (b) {
    for (var a = 0; a < b.length; a++) {
        this._addItemToStorage(b[a])
    }
    if (this.conf.skin == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype._xmlToJson = function (l) {
    var i = [];
    var o = l.getElementsByTagName("toolbar");
    if (o != null && o[0] != null) {
        o = o[0];
        var m = function (h) {
            var e = null;
            for (var p = 0; p < h.childNodes.length; p++) {
                if (e == null && h.childNodes[p].tagName == "itemText") {
                    e = window.dhx4._xmlNodeValue(h.childNodes[p]);
                    break
                }
            }
            return e
        };
        var x = ["id", "type", "hidden", "title", "text", "enabled", "img", "imgdis", "action", "openAll", "renderSelect", "mode", "maxOpen", "width", "value", "selected", "length", "textMin", "textMax", "toolTip", "valueMin", "valueMax", "valueNow"];
        var c = ["id", "type", "enabled", "disabled", "action", "selected", "img", "text"];
        for (var b = 0; b < o.childNodes.length; b++) {
            if (o.childNodes[b].tagName == "item") {
                var g = {};
                for (var s = 0; s < x.length; s++) {
                    var d = o.childNodes[b].getAttribute(x[s]);
                    if (d != null) {
                        g[x[s]] = d
                    }
                }
                for (var n = 0; n < o.childNodes[b].childNodes.length; n++) {
                    if (o.childNodes[b].childNodes[n].tagName == "item" && g.type == "buttonSelect") {
                        var v = {};
                        for (var s = 0; s < c.length; s++) {
                            var d = o.childNodes[b].childNodes[n].getAttribute(c[s]);
                            if (d != null) {
                                v[c[s]] = d
                            }
                        }
                        var j = o.childNodes[b].childNodes[n].getElementsByTagName("userdata");
                        for (var s = 0; s < j.length; s++) {
                            if (!v.userdata) {
                                v.userdata = {}
                            }
                            var a = {};
                            try {
                                a.name = j[s].getAttribute("name")
                            } catch (f) {
                                a.name = null
                            }
                            try {
                                a.value = j[s].firstChild.nodeValue
                            } catch (f) {
                                a.value = ""
                            }
                            if (a.name != null) {
                                v.userdata[a.name] = a.value
                            }
                        }
                        v.text = m(o.childNodes[b].childNodes[n]) || v.text;
                        if (g.options == null) {
                            g.options = []
                        }
                        g.options.push(v)
                    }
                    if (o.childNodes[b].childNodes[n].tagName == "userdata") {
                        if (g.userdata == null) {
                            g.userdata = {}
                        }
                        var v = {};
                        try {
                            v.name = o.childNodes[b].childNodes[n].getAttribute("name")
                        } catch (f) {
                            v.name = null
                        }
                        try {
                            v.value = o.childNodes[b].childNodes[n].firstChild.nodeValue
                        } catch (f) {
                            v.value = ""
                        }
                        if (v.name != null) {
                            g.userdata[v.name] = v.value
                        }
                    }
                }
                g.text = m(o.childNodes[b]) || g.text;
                i.push(g)
            }
        }
        m = null
    }
    return i
};
dhtmlXToolbarObject.prototype._addItemToStorage = function (f, h) {
    var g = (f.id || this._genStr(24));
    var d = (f.type || "");
    if (d == "spacer") {
        this.addSpacer(this._lastId)
    } else {
        this._lastId = g
    }
    if (d != "" && this["_" + d + "Object"] != null) {
        if (d == "buttonSelect") {
            if (f.options != null) {
                for (var e = 0; e < f.options.length; e++) {
                    if (f.options[e].type == "obj") {
                        f.options[e].type = "button"
                    }
                    if (f.options[e].type == "sep") {
                        f.options[e].type = "separator"
                    }
                }
            }
        }
        if (d == "slider") {
            var c = {
                tip_template: "toolTip",
                value_min: "valueMin",
                value_max: "valueMax",
                value_now: "valueNow",
                text_min: "textMin",
                text_max: "textMax"
            };
            for (var b in c) {
                if (f[c[b]] == null && f[b] != null) {
                    f[c[b]] = f[b]
                }
            }
        }
        if (d == "buttonInput") {
            if (f.value == null && f.text != null) {
                f.value = f.text
            }
        }
        if (d == "buttonTwoState") {
            if (typeof(f.selected) == "undefined" && typeof(f.pressed) != "undefined" && window.dhx4.s2b(f.pressed)) {
                f.selected = true
            }
        }
        if (typeof(f.enabled) == "undefined" && typeof(f.disabled) != "undefined" && window.dhx4.s2b(f.disabled)) {
            f.enabled = false
        }
        if (f.imgDis == null && f.img_disabled != null) {
            f.imgdis = f.img_disabled
        }
        if ((typeof(f.openAll) == "undefined" || f.openAll == null) && this.conf.skin == "dhx_terrace") {
            f.openAll = true
        }
        this.objPull[this.idPrefix + g] = new this["_" + d + "Object"](this, g, f);
        this.objPull[this.idPrefix + g]["type"] = d;
        this.setPosition(g, h)
    }
    if (f.userdata != null) {
        for (var b in f.userdata) {
            this.setUserData(g, b, f.userdata[b])
        }
    }
    if (f.options != null) {
        for (var e = 0; e < f.options.length; e++) {
            if (f.options[e].userdata != null) {
                for (var b in f.options[e].userdata) {
                    this.setListOptionUserData(f.id, f.options[e].id, b, f.options[e].userdata[b])
                }
            }
        }
    }
};
dhtmlXToolbarObject.prototype.setSkin = function (e, c) {
    if (c === true) {
        this.cont.className = this.cont.className.replace(/dhxtoolbar_icons_\d{1,}/, "dhxtoolbar_icons_" + this.conf.iconSize)
    } else {
        this.conf.skin = e;
        if (this.conf.skin == "dhx_skyblue") {
            this.conf.sel_ofs_y = 1
        }
        if (this.conf.skin == "dhx_web") {
            this.conf.sel_ofs_y = 1;
            this.conf.sel_ofs_x = 1
        }
        if (this.conf.skin == "dhx_terrace") {
            this.conf.sel_ofs_y = -1;
            this.conf.sel_ofs_x = 0
        }
        this.cont.className = "dhx_toolbar_" + this.conf.skin + " dhxtoolbar_icons_" + this.conf.iconSize
    }
    for (var b in this.objPull) {
        var d = this.objPull[b];
        if (d.type == "slider") {
            d.pen._detectLimits();
            d.pen._definePos();
            d.label.className = "dhx_toolbar_slider_label_" + this.conf.skin
        }
        if (d.type == "buttonSelect") {
            d.polygon.className = "dhx_toolbar_poly_" + this.conf.skin + " dhxtoolbar_icons_" + this.conf.iconSize
        }
    }
    if (e == "dhx_terrace") {
        this._improveTerraceSkin()
    }
};
dhtmlXToolbarObject.prototype.setAlign = function (a) {
    this.conf.align = (a == "right" ? "right" : "left");
    this.base.className = (a == "right" ? "dhxtoolbar_float_right" : "dhxtoolbar_float_left");
    if (this._spacer) {
        this._spacer.className = (a == "right" ? " dhxtoolbar_float_left" : " dhxtoolbar_float_right")
    }
};
dhtmlXToolbarObject.prototype.setIconSize = function (a) {
    this.conf.iconSize = ({18: true, 24: true, 32: true, 48: true}[a] ? a : 18);
    this.setSkin(this.conf.skin, true);
    this.callEvent("_onIconSizeChange", [this.conf.iconSize])
};
dhtmlXToolbarObject.prototype.setIconsPath = function (a) {
    this.conf.icons_path = a
};
dhtmlXToolbarObject.prototype.setUserData = function (c, a, b) {
    c = this.idPrefix + c;
    if (this.objPull[c] != null) {
        if (this.objPull[c].userData == null) {
            this.objPull[c].userData = {}
        }
        this.objPull[c].userData[a] = b
    }
};
dhtmlXToolbarObject.prototype.getUserData = function (b, a) {
    b = this.idPrefix + b;
    if (this.objPull[b] != null && this.objPull[b].userData != null) {
        return this.objPull[b].userData[a] || null
    }
    return null
};
dhtmlXToolbarObject.prototype._isListOptionExists = function (a, c) {
    if (this.objPull[this.idPrefix + a] == null) {
        return false
    }
    var b = this.objPull[this.idPrefix + a];
    if (b.type != "buttonSelect") {
        return false
    }
    if (b._listOptions[c] == null) {
        return false
    }
    return true
};
dhtmlXToolbarObject.prototype.setListOptionUserData = function (a, e, b, d) {
    if (!this._isListOptionExists(a, e)) {
        return
    }
    var c = this.objPull[this.idPrefix + a]._listOptions[e];
    if (c.userData == null) {
        c.userData = {}
    }
    c.userData[b] = d
};
dhtmlXToolbarObject.prototype.getListOptionUserData = function (a, d, b) {
    if (!this._isListOptionExists(a, d)) {
        return null
    }
    var c = this.objPull[this.idPrefix + a]._listOptions[d];
    if (!c.userData) {
        return null
    }
    return (c.userData[b] ? c.userData[b] : null)
};
dhtmlXToolbarObject.prototype._improveTerraceSkin = function () {
    if (this.conf.terrace_radius == null) {
        this.conf.terrace_radius = "3px"
    }
    var c = [];
    var d = {separator: true, text: true};
    var g = [this.base];
    if (this._spacer != null) {
        g.push(this._spacer)
    }
    for (var i = 0; i < g.length; i++) {
        c[i] = [];
        for (var b = 0; b < g[i].childNodes.length; b++) {
            if (g[i].childNodes[b].idd != null && g[i].childNodes[b].style.display != "none") {
                var h = this.idPrefix + g[i].childNodes[b].idd;
                if (this.objPull[h] != null && this.objPull[h].obj == g[i].childNodes[b]) {
                    c[i].push({
                        a: h,
                        type: this.objPull[h].type,
                        node: this.objPull[h][this.objPull[h].type == "buttonSelect" ? "arw" : "obj"]
                    })
                }
            }
        }
        g[i] = null
    }
    for (var i = 0; i < c.length; i++) {
        for (var b = 0; b < c[i].length; b++) {
            var j = c[i][b];
            var l = false;
            var f = false;
            if (!d[j.type]) {
                if (b == c[i].length - 1 || (c[i][b + 1] != null && d[c[i][b + 1].type])) {
                    l = true
                }
                if (b == 0 || (b - 1 >= 0 && c[i][b - 1] != null && d[c[i][b - 1].type])) {
                    f = true
                }
            }
            j.node.style.borderRightWidth = (l ? "1px" : "0px");
            j.node.style.borderTopRightRadius = j.node.style.borderBottomRightRadius = (l ? this.conf.terrace_radius : "0px");
            if (j.type == "buttonSelect") {
                j.node.previousSibling.style.borderTopLeftRadius = j.node.previousSibling.style.borderBottomLeftRadius = (f ? this.conf.terrace_radius : "0px");
                j.node.previousSibling._br = l;
                j.node.previousSibling._bl = f
            } else {
                j.node.style.borderTopLeftRadius = j.node.style.borderBottomLeftRadius = (f ? this.conf.terrace_radius : "0px")
            }
            j.node._br = l;
            j.node._bl = f
        }
    }
    for (var i = 0; i < c.length; i++) {
        for (var b = 0; b < c[i].length; b++) {
            for (var h in c[i][b]) {
                c[i][b][h] = null
            }
            c[i][b] = null
        }
        c[i] = null
    }
    c = g = null
};
dhtmlXToolbarObject.prototype._improveTerraceButtonSelect = function (c, b) {
    var a = this.objPull[c];
    if (b == true) {
        a.obj.style.borderBottomLeftRadius = (a.obj._bl ? this.conf.terrace_radius : "0px");
        a.arw.style.borderBottomRightRadius = (a.obj._br ? this.conf.terrace_radius : "0px")
    } else {
        a.obj.style.borderBottomLeftRadius = "0px";
        a.arw.style.borderBottomRightRadius = "0px"
    }
    a = null
};
if (typeof(window.dhtmlXCellObject) != "undefined") {
    dhtmlXCellObject.prototype._createNode_toolbar = function (e, b, d, a, c) {
        if (typeof(c) != "undefined") {
            e = c
        } else {
            e = document.createElement("DIV");
            e.className = "dhx_cell_toolbar_" + (this.conf.borders ? "def" : "no_borders");
            e.appendChild(document.createElement("DIV"));
            e.firstChild.className = "dhx_toolbar_base_18_dhx_skyblue"
        }
        this.cell.insertBefore(e, this.cell.childNodes[this.conf.idx.cont]);
        this.conf.ofs_nodes.t.toolbar = true;
        this._updateIdx();
        return e
    };
    dhtmlXCellObject.prototype.attachToolbar = function (a) {
        if (!(this.dataNodes.ribbon == null && this.dataNodes.toolbar == null)) {
            return
        }
        this.callEvent("_onBeforeContentAttach", ["toolbar"]);
        if (typeof(a) == "undefined") {
            a = {}
        } else {
            if (typeof(a) == "string") {
                a = {skin: a}
            }
        }
        if (typeof(a.skin) == "undefined") {
            a.skin = this.conf.skin
        }
        a.parent = this._attachObject("toolbar").firstChild;
        this.dataNodes.toolbar = new dhtmlXToolbarObject(a);
        this._adjustCont(this._idd);
        this.dataNodes.toolbar._masterCell = this;
        this.dataNodes.toolbar.attachEvent("_onIconSizeChange", function () {
            this._masterCell._adjustCont()
        });
        a.parent = null;
        a = null;
        this.callEvent("_onContentAttach", []);
        return this.dataNodes.toolbar
    };
    dhtmlXCellObject.prototype.detachToolbar = function () {
        if (!this.dataNodes.toolbar) {
            return
        }
        this.dataNodes.toolbar._masterCell = null;
        this.dataNodes.toolbar.unload();
        this.dataNodes.toolbar = null;
        delete this.dataNodes.toolbar;
        this._detachObject("toolbar")
    };
    dhtmlXCellObject.prototype.showToolbar = function () {
        this._mtbShowHide("toolbar", "")
    };
    dhtmlXCellObject.prototype.hideToolbar = function () {
        this._mtbShowHide("toolbar", "none")
    };
    dhtmlXCellObject.prototype.getAttachedToolbar = function () {
        return this.dataNodes.toolbar
    }
}
var globalActiveDHTMLGridObject;
String.prototype._dhx_trim = function () {
    return this.replace(/&nbsp;/g, " ").replace(/(^[ \t]*)|([ \t]*$)/g, "")
};
function dhtmlxArray(a) {
    return dhtmlx.extend((a || new Array()), dhtmlxArray._master)
}
dhtmlxArray._master = {
    _dhx_find: function (b) {
        for (var a = 0; a < this.length; a++) {
            if (b == this[a]) {
                return a
            }
        }
        return -1
    }, _dhx_insertAt: function (c, b) {
        this[this.length] = null;
        for (var a = this.length - 1; a >= c; a--) {
            this[a] = this[a - 1]
        }
        this[c] = b
    }, _dhx_removeAt: function (a) {
        this.splice(a, 1)
    }, _dhx_swapItems: function (a, c) {
        var b = this[a];
        this[a] = this[c];
        this[c] = b
    }
};
function dhtmlXGridObject(id) {
    if (dhtmlxEvent.initTouch) {
        dhtmlxEvent.initTouch()
    }
    if (_isIE) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (e) {
        }
    }
    if (id) {
        if (typeof(id) == "object") {
            this.entBox = id;
            if (!this.entBox.id) {
                this.entBox.id = "cgrid2_" + this.uid()
            }
        } else {
            this.entBox = document.getElementById(id)
        }
    } else {
        this.entBox = document.createElement("DIV");
        this.entBox.id = "cgrid2_" + this.uid()
    }
    this.entBox.innerHTML = "";
    dhx4._eventable(this);
    var self = this;
    this._wcorr = 0;
    this.fontWidth = 7;
    this.cell = null;
    this.row = null;
    this.iconURL = "";
    this.editor = null;
    this._f2kE = true;
    this._dclE = true;
    this.combos = new Array(0);
    this.defVal = new Array(0);
    this.rowsAr = {};
    this.rowsBuffer = dhtmlxArray();
    this.rowsCol = dhtmlxArray();
    this._data_cache = {};
    this._ecache = {};
    this._ud_enabled = true;
    this.xmlLoader = this.doLoadDetails;
    this._maskArr = [];
    this.selectedRows = dhtmlxArray();
    this.UserData = {};
    this._sizeFix = this._borderFix = 0;
    this.entBox.className += " gridbox";
    this.entBox.style.width = this.entBox.getAttribute("width") || (window.getComputedStyle ? (this.entBox.style.width || window.getComputedStyle(this.entBox, null)["width"]) : (this.entBox.currentStyle ? this.entBox.currentStyle.width : this.entBox.style.width || 0)) || "100%";
    this.entBox.style.height = this.entBox.getAttribute("height") || (window.getComputedStyle ? (this.entBox.style.height || window.getComputedStyle(this.entBox, null)["height"]) : (this.entBox.currentStyle ? this.entBox.currentStyle.height : this.entBox.style.height || 0)) || "100%";
    this.entBox.style.cursor = "default";
    this.entBox.onselectstart = function () {
        return false
    };
    var t_creator = function (name) {
        var t = document.createElement("TABLE");
        t.cellSpacing = t.cellPadding = 0;
        t.style.cssText = "width:100%;table-layout:fixed;";
        t.className = name.substr(2);
        return t
    };
    this.obj = t_creator("c_obj");
    this.hdr = t_creator("c_hdr");
    this.hdr.style.marginRight = "20px";
    this.hdr.style.paddingRight = "20px";
    this.objBox = document.createElement("DIV");
    this.objBox.style.width = "100%";
    this.objBox.style.overflow = "auto";
    this.objBox.appendChild(this.obj);
    this.objBox.className = "objbox";
    if (dhtmlx.$customScroll) {
        dhtmlx.CustomScroll.enable(this)
    }
    this.hdrBox = document.createElement("DIV");
    this.hdrBox.style.width = "100%";
    this.hdrBox.style.height = "25px";
    this.hdrBox.style.overflow = "hidden";
    this.hdrBox.className = "xhdr";
    this.preloadImagesAr = new Array(0);
    this.sortImg = document.createElement("DIV");
    this.sortImg.style.display = "none";
    this.hdrBox.appendChild(this.sortImg);
    this.hdrBox.appendChild(this.hdr);
    this.hdrBox.style.position = "relative";
    this.entBox.appendChild(this.hdrBox);
    this.entBox.appendChild(this.objBox);
    this.entBox.grid = this;
    this.objBox.grid = this;
    this.hdrBox.grid = this;
    this.obj.grid = this;
    this.hdr.grid = this;
    this.cellWidthPX = [];
    this.cellWidthPC = [];
    this.cellWidthType = this.entBox.cellwidthtype || "px";
    this.delim = this.entBox.delimiter || ",";
    this._csvDelim = ",";
    this.hdrLabels = [];
    this.columnIds = [];
    this.columnColor = [];
    this._hrrar = [];
    this.cellType = dhtmlxArray();
    this.cellAlign = [];
    this.initCellWidth = [];
    this.fldSort = [];
    this._srdh = (_isIE && (document.compatMode != "BackCompat") ? 22 : 20);
    this.imgURL = window.dhx_globalImgPath || "";
    this.isActive = false;
    this.isEditable = true;
    this.useImagesInHeader = false;
    this.pagingOn = false;
    this.rowsBufferOutSize = 0;
    dhtmlxEvent(window, "unload", function () {
        try {
            if (self.destructor) {
                self.destructor()
            }
        } catch (e) {
        }
    });
    this.setSkin = function (name) {
        this._srdh = window.dhx4.readFromCss("dhxgrid_rh_" + name) + 4;
        this.skin_name = name;
        if (this._imgURL) {
            this.setImagePath(this._imgURL)
        }
        var classname = this.entBox.className.split(" gridbox")[0];
        this.entBox.className = classname + " gridbox gridbox_" + name + (_isIE ? " isIE" : " isModern");
        this.skin_h_correction = 0;
        this.enableAlterCss("ev_" + name, "odd_" + name, this.isTreeGrid());
        this._fixAlterCss();
        switch (name) {
            case"dhx_terrace":
                this._srdh = 33;
                this.forceDivInHeader = true;
                break;
            case"dhx_web":
                this.forceDivInHeader = true;
                this._srdh = 31;
                break;
            case"dhx_skyblue":
                this.forceDivInHeader = true;
                break
        }
        if (_isIE && this.hdr) {
            var d = this.hdr.parentNode;
            d.removeChild(this.hdr);
            d.appendChild(this.hdr)
        }
        this.setSizes()
    };
    if (_isIE) {
        this.preventIECaching(true)
    }
    if (window.dhtmlDragAndDropObject) {
        this.dragger = new dhtmlDragAndDropObject()
    }
    this._doOnScroll = function (e, mode) {
        this.callEvent("onScroll", [this.objBox.scrollLeft, this.objBox.scrollTop]);
        this.doOnScroll(e, mode)
    };
    this.doOnScroll = function (e, mode) {
        this.hdrBox.scrollLeft = this.objBox.scrollLeft;
        if (this.ftr) {
            this.ftr.parentNode.scrollLeft = this.objBox.scrollLeft
        }
        if (mode) {
            return
        }
        if (this._srnd) {
            if (this._dLoadTimer) {
                window.clearTimeout(this._dLoadTimer)
            }
            this._dLoadTimer = window.setTimeout(function () {
                if (self._update_srnd_view) {
                    self._update_srnd_view()
                }
            }, 100)
        }
    };
    this.attachToObject = function (obj) {
        obj.appendChild(this.globalBox ? this.globalBox : this.entBox);
        this.setSizes()
    };
    this.init = function (fl) {
        if ((this.isTreeGrid()) && (!this._h2)) {
            this._h2 = this._createHierarchy();
            if ((this._fake) && (!this._realfake)) {
                this._fake._h2 = this._h2
            }
            this._tgc = {imgURL: null}
        }
        if (!this._hstyles) {
            return
        }
        if (!this.skin_name) {
            this.setSkin(window.dhx4.skin || (typeof(dhtmlx) != "undefined" ? dhtmlx.skin : null) || window.dhx4.skinDetect("dhxgrid") || "dhx_skyblue")
        }
        this.editStop();
        this.lastClicked = null;
        this.resized = null;
        this.fldSorted = this.r_fldSorted = null;
        this.cellWidthPX = [];
        this.cellWidthPC = [];
        if (this.hdr.rows.length > 0) {
            var temp = this.xmlFileUrl;
            this.clearAll(true);
            this.xmlFileUrl = temp
        }
        var hdrRow = this.hdr.insertRow(0);
        for (var i = 0; i < this.hdrLabels.length; i++) {
            hdrRow.appendChild(document.createElement("TH"));
            hdrRow.childNodes[i]._cellIndex = i;
            hdrRow.childNodes[i].style.height = "0px"
        }
        if (_isIE && _isIE < 8 && document.body.style.msTouchAction == this.undefined) {
            hdrRow.style.position = "absolute"
        } else {
            hdrRow.style.height = "auto"
        }
        var hdrRow = this.hdr.insertRow(_isKHTML ? 2 : 1);
        hdrRow._childIndexes = new Array();
        var col_ex = 0;
        for (var i = 0; i < this.hdrLabels.length; i++) {
            hdrRow._childIndexes[i] = i - col_ex;
            if ((this.hdrLabels[i] == this.splitSign) && (i != 0)) {
                if (_isKHTML) {
                    hdrRow.insertCell(i - col_ex)
                }
                hdrRow.cells[i - col_ex - 1].colSpan = (hdrRow.cells[i - col_ex - 1].colSpan || 1) + 1;
                hdrRow.childNodes[i - col_ex - 1]._cellIndex++;
                col_ex++;
                hdrRow._childIndexes[i] = i - col_ex;
                continue
            }
            hdrRow.insertCell(i - col_ex);
            hdrRow.childNodes[i - col_ex]._cellIndex = i;
            hdrRow.childNodes[i - col_ex]._cellIndexS = i;
            this.setColumnLabel(i, this.hdrLabels[i])
        }
        if (col_ex == 0) {
            hdrRow._childIndexes = null
        }
        this._cCount = this.hdrLabels.length;
        if (_isIE) {
            window.setTimeout(function () {
                if (self.setSizes) {
                    self.setSizes()
                }
            }, 1)
        }
        if (!this.obj.firstChild) {
            this.obj.appendChild(document.createElement("TBODY"))
        }
        var tar = this.obj.firstChild;
        if (!tar.firstChild) {
            tar.appendChild(document.createElement("TR"));
            tar = tar.firstChild;
            if (_isIE && _isIE < 8 && document.body.style.msTouchAction == this.undefined) {
                tar.style.position = "absolute"
            } else {
                tar.style.height = "auto"
            }
            for (var i = 0; i < this.hdrLabels.length; i++) {
                tar.appendChild(document.createElement("TH"));
                tar.childNodes[i].style.height = "0px"
            }
        }
        this._c_order = null;
        if (this.multiLine != true) {
            this.obj.className += " row20px"
        }
        this.sortImg.style.position = "absolute";
        this.sortImg.style.display = "none";
        this.sortImg.className = "dhxgrid_sort_desc";
        this.sortImg.defLeft = 0;
        if (this.noHeader) {
            this.hdrBox.style.display = "none"
        } else {
            this.noHeader = false
        }
        if (this._ivizcol) {
            this.setColHidden()
        }
        this.attachHeader();
        this.attachHeader(0, 0, "_aFoot");
        this.setSizes();
        if (fl) {
            this.parseXML()
        }
        this.obj.scrollTop = 0;
        if (this.dragAndDropOff) {
            this.dragger.addDragLanding(this.entBox, this)
        }
        if (this._initDrF) {
            this._initD()
        }
        dhx4.callEvent("onGridCreated", [this])
    };
    this.setColumnSizes = function (gridWidth) {
        var summ = 0;
        var fcols = [];
        var fix = 0;
        for (var i = 0; i < this._cCount; i++) {
            if ((this.initCellWidth[i] == "*") && !this._hrrar[i]) {
                this._awdth = false;
                fcols.push(i);
                continue
            }
            if (this.cellWidthType == "%") {
                if (typeof this.cellWidthPC[i] == "undefined") {
                    this.cellWidthPC[i] = this.initCellWidth[i]
                }
                var cwidth = (gridWidth * this.cellWidthPC[i] / 100) || 0;
                if (fix > 0.5) {
                    cwidth++;
                    fix--
                }
                var rwidth = this.cellWidthPX[i] = Math.floor(cwidth);
                var fix = fix + cwidth - rwidth
            } else {
                if (typeof this.cellWidthPX[i] == "undefined") {
                    this.cellWidthPX[i] = this.initCellWidth[i]
                }
            }
            if (!this._hrrar[i]) {
                summ += this.cellWidthPX[i] * 1
            }
        }
        if (fcols.length) {
            var ms = Math.floor((gridWidth - summ) / fcols.length);
            if (ms < 0) {
                ms = 1
            }
            for (var i = 0; i < fcols.length; i++) {
                var next = Math.max((this._drsclmW ? (this._drsclmW[fcols[i]] || 0) : 0), ms);
                this.cellWidthPX[fcols[i]] = next;
                summ += next
            }
            if (gridWidth > summ) {
                var last = fcols[fcols.length - 1];
                this.cellWidthPX[last] = this.cellWidthPX[last] + (gridWidth - summ);
                summ = gridWidth
            }
            this._setAutoResize()
        }
        this.obj.style.width = summ + "px";
        this.hdr.style.width = summ + "px";
        if (this.ftr) {
            this.ftr.style.width = summ + "px"
        }
        this.chngCellWidth();
        return summ
    };
    this.setSizes = function () {
        if ((!this.hdr.rows[0])) {
            return
        }
        var quirks = this.quirks = (_isIE && document.compatMode == "BackCompat");
        var outerBorder = (this.entBox.offsetWidth - this.entBox.clientWidth) / 2;
        if (!this.dontSetSizes) {
            if (this.globalBox) {
                if (!this.globalBox.clientWidth) {
                    return
                }
                var ow = this.globalBox.clientWidth;
                var splitOuterBorder = (this.globalBox.offsetWidth - ow) / 2;
                if (this._delta_x && !this._realfake) {
                    this.globalBox.style.width = this._delta_x;
                    var owu = this.globalBox.clientWidth;
                    this.entBox.style.width = Math.max(0, (owu + (quirks ? splitOuterBorder * 2 : 0)) - this._fake.entBox.clientWidth) + "px";
                    if (owu != this._lastTimeSplitWidth) {
                        this._fake._correctSplit(this._fake.entBox.clientWidth);
                        this._lastTimeSplitWidth = owu
                    }
                }
                if (this._delta_y && !this._realfake) {
                    this.globalBox.style.height = this._delta_y;
                    this.entBox.style.overflow = this._fake.entBox.style.overflow = "hidden";
                    this.entBox.style.height = this._fake.entBox.style.height = this.globalBox.clientHeight + (quirks ? splitOuterBorder * 2 : 0) + "px"
                }
            } else {
                if (this._delta_x) {
                    if (this.entBox.parentNode && this.entBox.parentNode.tagName == "TD") {
                        this.entBox.style.width = "1px";
                        this.entBox.style.width = parseInt(this._delta_x) * this.entBox.parentNode.clientWidth / 100 - outerBorder * 2 + "px"
                    } else {
                        this.entBox.style.width = this._delta_x
                    }
                }
                if (this._delta_y) {
                    this.entBox.style.height = this._delta_y
                }
            }
        }
        window.clearTimeout(this._sizeTime);
        if (!this.entBox.offsetWidth && (!this.globalBox || !this.globalBox.offsetWidth)) {
            this._sizeTime = window.setTimeout(function () {
                if (self.setSizes) {
                    self.setSizes()
                }
            }, 250);
            return
        }
        var border_x = ((!this._wthB) && ((this.entBox.cmp || this._delta_x) && (this.skin_name || "").indexOf("dhx") == 0 && !quirks) ? 2 : 0);
        var border_y = ((!this._wthB) && ((this.entBox.cmp || this._delta_y) && (this.skin_name || "").indexOf("dhx") == 0 && !quirks) ? 2 : 0);
        if (this._sizeFix) {
            border_x -= this._sizeFix;
            border_y -= this._sizeFix
        }
        var isVScroll = this.parentGrid ? false : (this.objBox.scrollHeight > this.objBox.offsetHeight);
        var scrfix = dhtmlx.$customScroll ? 0 : 18;
        var gridWidth = this.entBox.clientWidth - (this.skin_h_correction || 0) * (quirks ? 0 : 1) - border_x;
        var gridWidthActive = this.entBox.clientWidth - (this.skin_h_correction || 0) - border_x;
        var gridHeight = this.entBox.clientHeight - border_y;
        var summ = this.setColumnSizes(gridWidthActive - (isVScroll ? scrfix : 0) - (this._correction_x || 0));
        var isHScroll = this.parentGrid ? false : ((this.objBox.scrollWidth > this.objBox.offsetWidth) || (this.objBox.style.overflowX == "scroll"));
        var headerHeight = this.hdr.clientHeight;
        var footerHeight = this.ftr ? this.ftr.clientHeight : 0;
        var newWidth = gridWidth;
        var newHeight = gridHeight - headerHeight - footerHeight;
        if (this._awdth && this._awdth[0] && this._awdth[1] == 99999) {
            isHScroll = 0
        }
        if (this._ahgr) {
            if (this._ahgrMA) {
                newHeight = this.entBox.parentNode.clientHeight - headerHeight - footerHeight
            } else {
                newHeight = this.obj.offsetHeight + (isHScroll ? scrfix : 0) + (this._correction_y || 0)
            }
            if (this._ahgrM) {
                if (this._ahgrF) {
                    newHeight = Math.min(this._ahgrM, newHeight + headerHeight + footerHeight) - headerHeight - footerHeight
                } else {
                    newHeight = Math.min(this._ahgrM, newHeight)
                }
            }
            if (isVScroll && newHeight >= this.obj.scrollHeight + (isHScroll ? scrfix : 0)) {
                isVScroll = false;
                this.setColumnSizes(gridWidthActive - (this._correction_x || 0))
            }
        }
        if ((this._awdth) && (this._awdth[0])) {
            if (this.cellWidthType == "%") {
                this.cellWidthType = "px"
            }
            if (this._fake) {
                summ += this._fake.entBox.clientWidth
            }
            var newWidth = Math.min(Math.max(summ + (isVScroll ? scrfix : 0), this._awdth[2]), this._awdth[1]) + (this._correction_x || 0);
            this.objBox.style.overflowX = (!isVScroll && this.objBox.scrollWidth <= newWidth) ? "hidden" : "auto";
            if (this._fake) {
                newWidth -= this._fake.entBox.clientWidth
            }
        }
        newHeight = Math.max(0, newHeight);
        this._ff_size_delta = (this._ff_size_delta == 0.1) ? 0.2 : 0.1;
        if (!_isFF) {
            this._ff_size_delta = 0
        }
        if (!this.dontSetSizes) {
            this.entBox.style.width = Math.max(0, newWidth + (quirks ? 2 : 0) * outerBorder + this._ff_size_delta) + "px";
            this.entBox.style.height = newHeight + (quirks ? 2 : 0) * outerBorder + headerHeight + footerHeight + "px"
        }
        this.objBox.style.height = newHeight + ((quirks && !isVScroll) ? 2 : 0) * outerBorder + "px";
        this.hdrBox.style.height = headerHeight + "px";
        if (newHeight != gridHeight) {
            this.doOnScroll(0, !this._srnd)
        }
        var ext = this["setSizes_" + this.skin_name];
        if (ext) {
            ext.call(this)
        }
        this.setSortImgPos();
        if (headerHeight != this.hdr.clientHeight && this._ahgr) {
            this.setSizes()
        }
        this.callEvent("onSetSizes", [])
    };
    this.chngCellWidth = function () {
        if ((_isOpera) && (this.ftr)) {
            this.ftr.width = this.objBox.scrollWidth + "px"
        }
        var l = this._cCount;
        for (var i = 0; i < l; i++) {
            this.hdr.rows[0].cells[i].style.width = this.cellWidthPX[i] + "px";
            this.obj.rows[0].childNodes[i].style.width = this.cellWidthPX[i] + "px";
            if (this.ftr) {
                this.ftr.rows[0].cells[i].style.width = this.cellWidthPX[i] + "px"
            }
        }
    };
    this.setDelimiter = function (delim) {
        this.delim = delim
    };
    this.setInitWidthsP = function (wp) {
        this.cellWidthType = "%";
        this.initCellWidth = wp.split(this.delim.replace(/px/gi, ""));
        if (!arguments[1]) {
            this._setAutoResize()
        }
    };
    this._setAutoResize = function () {
        if (this._realfake) {
            return
        }
        var el = window;
        var self = this;
        dhtmlxEvent(window, "resize", function () {
            window.clearTimeout(self._resize_timer);
            if (self._setAutoResize) {
                self._resize_timer = window.setTimeout(function () {
                    if (self.setSizes) {
                        self.setSizes()
                    }
                    if (self._fake) {
                        self._fake._correctSplit()
                    }
                }, 100)
            }
        })
    };
    this.setInitWidths = function (wp) {
        this.cellWidthType = "px";
        this.initCellWidth = wp.split(this.delim);
        if (_isFF) {
            for (var i = 0; i < this.initCellWidth.length; i++) {
                if (this.initCellWidth[i] != "*") {
                    this.initCellWidth[i] = parseInt(this.initCellWidth[i])
                }
            }
        }
    };
    this.enableMultiline = function (state) {
        this.multiLine = dhx4.s2b(state)
    };
    this.enableMultiselect = function (state) {
        this.selMultiRows = dhx4.s2b(state)
    };
    this.setImagePath = function (path) {
        path = path.replace(/imgs\/dhxgrid_[a-z]*\/$/, "imgs/");
        this._imgURL = path;
        this.imgURL = path + "dhxgrid_" + (this.skin_name || "dhx_skyblue").replace("dhx_", "") + "/";
        this.iconTree = this.imgURL + "tree/"
    };
    this.setImagesPath = this.setImagePath;
    this.setIconPath = function (path) {
        this.iconURL = path
    };
    this.setIconsPath = this.setIconPath;
    this.changeCursorState = function (ev) {
        var el = ev.target || ev.srcElement;
        if (el.tagName != "TD") {
            el = this.getFirstParentOfType(el, "TD")
        }
        if (!el) {
            return
        }
        if ((el.tagName == "TD") && (this._drsclmn) && (!this._drsclmn[el._cellIndex])) {
            return el.style.cursor = "default"
        }
        var check = (ev.layerX || 0) + (((!_isIE) && (ev.target.tagName == "DIV")) ? el.offsetLeft : 0);
        if ((el.offsetWidth - (ev.offsetX || (parseInt(this.getPosition(el, this.hdrBox)) - check) * -1)) < (_isOpera ? 20 : 10)) {
            el.style.cursor = "E-resize"
        } else {
            el.style.cursor = "default"
        }
        if (_isOpera) {
            this.hdrBox.scrollLeft = this.objBox.scrollLeft
        }
    };
    this.startColResize = function (ev) {
        if (this.resized) {
            this.stopColResize()
        }
        this.resized = null;
        var el = ev.target || ev.srcElement;
        if (el.tagName != "TD") {
            el = this.getFirstParentOfType(el, "TD")
        }
        var x = ev.clientX;
        var tabW = this.hdr.offsetWidth;
        var startW = parseInt(el.offsetWidth);
        if (el.tagName == "TD" && el.style.cursor != "default") {
            if ((this._drsclmn) && (!this._drsclmn[el._cellIndex])) {
                return
            }
            self._old_d_mm = document.body.onmousemove;
            self._old_d_mu = document.body.onmouseup;
            document.body.onmousemove = function (e) {
                if (self) {
                    self.doColResize(e || window.event, el, startW, x, tabW)
                }
            };
            document.body.onmouseup = function () {
                if (self) {
                    self.stopColResize()
                }
            }
        }
    };
    this.stopColResize = function () {
        document.body.onmousemove = self._old_d_mm || "";
        document.body.onmouseup = self._old_d_mu || "";
        this.setSizes();
        this.doOnScroll(0, 1);
        this.callEvent("onResizeEnd", [this])
    };
    this.doColResize = function (ev, el, startW, x, tabW) {
        el.style.cursor = "E-resize";
        this.resized = el;
        var fcolW = startW + (ev.clientX - x);
        var wtabW = tabW + (ev.clientX - x);
        if (!(this.callEvent("onResize", [el._cellIndex, fcolW, this]))) {
            return
        }
        if (_isIE) {
            this.objBox.scrollLeft = this.hdrBox.scrollLeft
        }
        var result = false;
        if (el.colSpan > 1) {
            var a_sizes = new Array();
            for (var i = 0; i < el.colSpan; i++) {
                a_sizes[i] = Math.round(fcolW * this.hdr.rows[0].childNodes[el._cellIndexS + i].offsetWidth / el.offsetWidth)
            }
            for (var i = 0; i < el.colSpan; i++) {
                result = this._setColumnSizeR(el._cellIndexS + i * 1, a_sizes[i])
            }
        } else {
            result = this._setColumnSizeR(el._cellIndex, fcolW)
        }
        this.doOnScroll(0, 1);
        this.setSizes();
        if (this._fake && this._awdth) {
            this._fake._correctSplit()
        }
        return result
    };
    this._setColumnSizeR = function (ind, fcolW) {
        if (fcolW > ((this._drsclmW && !this._notresize) ? (this._drsclmW[ind] || 10) : 10)) {
            this.obj.rows[0].childNodes[ind].style.width = fcolW + "px";
            this.hdr.rows[0].childNodes[ind].style.width = fcolW + "px";
            if (this.ftr) {
                this.ftr.rows[0].childNodes[ind].style.width = fcolW + "px"
            }
            if (this.cellWidthType == "px") {
                this.cellWidthPX[ind] = fcolW
            } else {
                var gridWidth = parseInt(this.entBox.offsetWidth);
                if (this.objBox.scrollHeight > this.objBox.offsetHeight) {
                    gridWidth -= 17
                }
                var pcWidth = Math.round(fcolW / gridWidth * 100);
                this.cellWidthPC[ind] = pcWidth
            }
            if (this.sortImg.style.display != "none") {
                this.setSortImgPos()
            }
        } else {
            return false
        }
    };
    this.setSortImgState = function (state, ind, order, row) {
        order = (order || "asc").toLowerCase();
        if (!dhx4.s2b(state)) {
            this.sortImg.style.display = "none";
            this.fldSorted = this.r_fldSorted = null;
            return
        }
        if (order == "asc") {
            this.sortImg.className = "dhxgrid_sort_asc"
        } else {
            this.sortImg.className = "dhxgrid_sort_desc"
        }
        this.sortImg.style.display = "";
        this.fldSorted = this.hdr.rows[0].childNodes[ind];
        var r = this.hdr.rows[row || 1];
        if (!r) {
            return
        }
        for (var i = 0; i < r.childNodes.length; i++) {
            if (r.childNodes[i]._cellIndexS == ind) {
                this.r_fldSorted = r.childNodes[i];
                return this.setSortImgPos()
            }
        }
        return this.setSortImgState(state, ind, order, (row || 1) + 1)
    };
    this.setSortImgPos = function (ind, mode, hRowInd, el) {
        if (this._hrrar && this._hrrar[this.r_fldSorted ? this.r_fldSorted._cellIndex : ind]) {
            return
        }
        if (!el) {
            if (!ind) {
                var el = this.r_fldSorted
            } else {
                var el = this.hdr.rows[hRowInd || 0].cells[ind]
            }
        }
        if (el != null) {
            var pos = this.getPosition(el, this.hdrBox);
            var wdth = el.offsetWidth;
            this.sortImg.style.left = Number(pos[0] + wdth - 13) + "px";
            this.sortImg.defLeft = parseInt(this.sortImg.style.left);
            this.sortImg.style.top = Number(pos[1] + 5) + "px";
            if ((!this.useImagesInHeader) && (!mode)) {
                this.sortImg.style.display = "inline"
            }
            this.sortImg.style.left = this.sortImg.defLeft + "px"
        }
    };
    this.setActive = function (fl) {
        if (arguments.length == 0) {
            var fl = true
        }
        if (fl == true) {
            if (globalActiveDHTMLGridObject && (globalActiveDHTMLGridObject != this)) {
                globalActiveDHTMLGridObject.editStop();
                globalActiveDHTMLGridObject.callEvent("onBlur", [globalActiveDHTMLGridObject])
            }
            globalActiveDHTMLGridObject = this;
            this.isActive = true
        } else {
            this.isActive = false;
            this.callEvent("onBlur", [this])
        }
    };
    this._doClick = function (ev) {
        var selMethod = 0;
        var el = this.getFirstParentOfType(_isIE ? ev.srcElement : ev.target, "TD");
        if (!el || !el.parentNode || !el.parentNode.idd) {
            return
        }
        var fl = true;
        if (this.markedCells) {
            var markMethod = 0;
            if (ev.shiftKey || ev.metaKey) {
                markMethod = 1
            }
            if (ev.ctrlKey) {
                markMethod = 2
            }
            this.doMark(el, markMethod);
            return true
        }
        if (this.selMultiRows != false) {
            if (ev.shiftKey && this.row != null && this.selectedRows.length) {
                selMethod = 1
            }
            if (ev.ctrlKey || ev.metaKey) {
                selMethod = 2
            }
        }
        return this.doClick(el, fl, selMethod, false)
    };
    this._doContClick = function (ev) {
        var el = this.getFirstParentOfType(_isIE ? ev.srcElement : ev.target, "TD");
        if ((!el) || (typeof(el.parentNode.idd) == "undefined")) {
            this.callEvent("onEmptyClick", [ev]);
            return true
        }
        if (ev.button == 2 || (_isMacOS && ev.ctrlKey)) {
            if (!this.callEvent("onRightClick", [el.parentNode.idd, el._cellIndex, ev])) {
                var z = function (e) {
                    (e || event).cancelBubble = true;
                    return false
                };
                (ev.srcElement || ev.target).oncontextmenu = z;
                return z(ev)
            }
            if (this._ctmndx) {
                if (!(this.callEvent("onBeforeContextMenu", [el.parentNode.idd, el._cellIndex, this]))) {
                    return true
                }
                if (_isIE) {
                    ev.srcElement.oncontextmenu = function () {
                        event.cancelBubble = true;
                        return false
                    }
                }
                if (this._ctmndx.showContextMenu) {
                    var dEl0 = window.document.documentElement;
                    var dEl1 = window.document.body;
                    var corrector = new Array((dEl0.scrollLeft || dEl1.scrollLeft), (dEl0.scrollTop || dEl1.scrollTop));
                    if (_isIE) {
                        var x = ev.clientX + corrector[0];
                        var y = ev.clientY + corrector[1]
                    } else {
                        var x = ev.pageX;
                        var y = ev.pageY
                    }
                    this._ctmndx.showContextMenu(x - 1, y - 1);
                    this.contextID = this._ctmndx.contextMenuZoneId = el.parentNode.idd + "_" + el._cellIndex;
                    this._ctmndx._skip_hide = true
                } else {
                    el.contextMenuId = el.parentNode.idd + "_" + el._cellIndex;
                    el.contextMenu = this._ctmndx;
                    el.a = this._ctmndx._contextStart;
                    el.a(el, ev);
                    el.a = null
                }
                ev.cancelBubble = true;
                return false
            }
        } else {
            if (this._ctmndx) {
                if (this._ctmndx.hideContextMenu) {
                    this._ctmndx.hideContextMenu()
                } else {
                    this._ctmndx._contextEnd()
                }
            }
        }
        return true
    };
    this.doClick = function (el, fl, selMethod, show) {
        if (!this.selMultiRows) {
            selMethod = 0
        }
        var psid = this.row ? this.row.idd : 0;
        this.setActive(true);
        if (!selMethod) {
            selMethod = 0
        }
        if (this.cell != null) {
            this.cell.className = this.cell.className.replace(/cellselected/g, "")
        }
        if (el.tagName == "TD") {
            if (this.checkEvent("onSelectStateChanged")) {
                var initial = this.getSelectedId()
            }
            var prow = this.row;
            if (selMethod == 1) {
                var elRowIndex = this.rowsCol._dhx_find(el.parentNode);
                var lcRowIndex = this.rowsCol._dhx_find(this.lastClicked);
                if (elRowIndex > lcRowIndex) {
                    var strt = lcRowIndex;
                    var end = elRowIndex
                } else {
                    var strt = elRowIndex;
                    var end = lcRowIndex
                }
                for (var i = 0; i < this.rowsCol.length; i++) {
                    if ((i >= strt && i <= end)) {
                        if (this.rowsCol[i] && (!this.rowsCol[i]._sRow)) {
                            if (!this.rowsCol[i].idd) {
                                continue
                            }
                            if (this.rowsCol[i].className.indexOf("rowselected") == -1 && (this.callEvent("onBeforeSelect", [this.rowsCol[i].idd, psid, el._cellIndex]))) {
                                this.rowsCol[i].className += " rowselected";
                                this.selectedRows[this.selectedRows.length] = this.rowsCol[i]
                            }
                        } else {
                            this.clearSelection();
                            return this.doClick(el, fl, 0, show)
                        }
                    }
                }
            } else {
                if (selMethod == 2) {
                    if (el.parentNode.className.indexOf("rowselected") != -1) {
                        el.parentNode.className = el.parentNode.className.replace(/rowselected/g, "");
                        this.selectedRows._dhx_removeAt(this.selectedRows._dhx_find(el.parentNode));
                        var skipRowSelection = true;
                        show = false
                    }
                }
            }
            this.editStop();
            if (typeof(el.parentNode.idd) == "undefined") {
                return true
            }
            if ((!skipRowSelection) && (!el.parentNode._sRow)) {
                if (this.callEvent("onBeforeSelect", [el.parentNode.idd, psid, el._cellIndex])) {
                    if (this.getSelectedRowId() != el.parentNode.idd) {
                        if (selMethod == 0) {
                            this.clearSelection()
                        }
                        this.cell = el;
                        if ((prow == el.parentNode) && (this._chRRS)) {
                            fl = false
                        }
                        this.row = el.parentNode;
                        this.row.className += " rowselected";
                        if (this.selectedRows._dhx_find(this.row) == -1) {
                            this.selectedRows[this.selectedRows.length] = this.row
                        }
                    } else {
                        this.cell = el;
                        this.row = el.parentNode
                    }
                } else {
                    fl = false
                }
            }
            if (this.cell && this.cell.parentNode.className.indexOf("rowselected") != -1) {
                this.cell.className = this.cell.className.replace(/cellselected/g, "") + " cellselected"
            }
            if (selMethod != 1) {
                if (!this.row) {
                    return
                }
            }
            this.lastClicked = el.parentNode;
            var rid = this.row.idd;
            var cid = this.cell;
            if (fl && typeof(rid) != "undefined" && cid && !skipRowSelection) {
                self.onRowSelectTime = setTimeout(function () {
                    if (self.callEvent) {
                        self.callEvent("onRowSelect", [rid, cid._cellIndex])
                    }
                }, 100)
            } else {
                this.callEvent("onRowSelectRSOnly", [rid])
            }
            if (this.checkEvent("onSelectStateChanged")) {
                var afinal = this.getSelectedId();
                if (initial != afinal) {
                    this.callEvent("onSelectStateChanged", [afinal, initial])
                }
            }
            if (skipRowSelection) {
                return false
            }
        }
        this.isActive = true;
        if (show !== false && this.cell && this.cell.parentNode.idd) {
            this.moveToVisible(this.cell)
        }
    };
    this.selectAll = function () {
        this.clearSelection();
        var coll = this.rowsBuffer;
        if (this.pagingOn) {
            coll = this.rowsCol
        }
        for (var i = 0; i < coll.length; i++) {
            this.render_row(i).className += " rowselected"
        }
        this.selectedRows = dhtmlxArray([].concat(coll));
        if (this.selectedRows.length) {
            this.row = this.selectedRows[0];
            this.cell = this.row.cells[0]
        }
        if ((this._fake) && (!this._realfake)) {
            this._fake.selectAll()
        }
    };
    this.selectCell = function (r, cInd, fl, preserve, edit, show) {
        if (!fl) {
            fl = false
        }
        if (typeof(r) != "object") {
            r = this.render_row(r)
        }
        if (!r || r == -1) {
            return null
        }
        if (r._childIndexes) {
            var c = r.childNodes[r._childIndexes[cInd]]
        } else {
            var c = r.childNodes[cInd]
        }
        if (!c) {
            c = r.childNodes[0]
        }
        if (!this.markedCells) {
            if (preserve) {
                this.doClick(c, fl, 3, show)
            } else {
                this.doClick(c, fl, 0, show)
            }
        } else {
            this.doMark(c, preserve ? 2 : 0)
        }
        if (edit) {
            this.editCell()
        }
    };
    this.moveToVisible = function (cell_obj, onlyVScroll) {
        if (this.pagingOn) {
            var newPage = Math.floor(this.getRowIndex(cell_obj.parentNode.idd) / this.rowsBufferOutSize) + 1;
            if (newPage != this.currentPage) {
                this.changePage(newPage)
            }
        }
        try {
            if (cell_obj.offsetHeight) {
                var distance = cell_obj.offsetLeft + cell_obj.offsetWidth + 20;
                var scrollLeft = 0;
                if (distance > (this.objBox.offsetWidth + this.objBox.scrollLeft)) {
                    if (cell_obj.offsetLeft > this.objBox.scrollLeft) {
                        scrollLeft = cell_obj.offsetLeft - (this.objBox.offsetWidth - cell_obj.offsetWidth) + 5
                    }
                } else {
                    if (cell_obj.offsetLeft < this.objBox.scrollLeft) {
                        distance -= cell_obj.offsetWidth * 2 / 3;
                        if (distance < this.objBox.scrollLeft) {
                            scrollLeft = cell_obj.offsetLeft - 5
                        }
                    }
                }
                if ((scrollLeft) && (!onlyVScroll)) {
                    this.objBox.scrollLeft = scrollLeft
                }
            }
            if (!cell_obj.offsetHeight) {
                var mask = this._realfake ? this._fake.rowsAr[cell_obj.parentNode.idd] : cell_obj.parentNode;
                distance = this.rowsBuffer._dhx_find(mask) * this._srdh
            } else {
                distance = cell_obj.offsetTop
            }
            var distancemax = distance + cell_obj.offsetHeight + 38;
            if (distancemax > (this.objBox.offsetHeight + this.objBox.scrollTop)) {
                var scrollTop = distance
            } else {
                if (distance < this.objBox.scrollTop) {
                    var scrollTop = distance - 5
                }
            }
            if (scrollTop) {
                this.objBox.scrollTop = scrollTop
            }
        } catch (er) {
        }
    };
    this.editCell = function () {
        if (this.editor && this.cell == this.editor.cell) {
            return
        }
        this.editStop();
        if ((this.isEditable != true) || (!this.cell)) {
            return false
        }
        var c = this.cell;
        if (c.parentNode._locked) {
            return false
        }
        this.editor = this.cells4(c);
        if (this.editor != null) {
            if (this.editor.isDisabled()) {
                this.editor = null;
                return false
            }
            if (this.callEvent("onEditCell", [0, this.row.idd, this.cell._cellIndex]) != false && this.editor.edit) {
                this._Opera_stop = (new Date).valueOf();
                this.editor.edit();
                c.className += " editable";
                this.callEvent("onEditCell", [1, this.row.idd, this.cell._cellIndex])
            } else {
                this.editor = null
            }
        }
    };
    this.editStop = function (mode) {
        if (_isOpera) {
            if (this._Opera_stop) {
                if ((this._Opera_stop * 1 + 50) > (new Date).valueOf()) {
                    return
                }
                this._Opera_stop = null
            }
        }
        if (this.editor && this.editor != null) {
            this.editor.cell.className = this.editor.cell.className.replace("editable", "");
            if (mode) {
                var t = this.editor.val;
                this.editor.detach();
                this.editor.setValue(t);
                this.editor = null;
                this.callEvent("onEditCancel", [this.row.idd, this.cell._cellIndex, t]);
                return
            }
            if (this.editor.detach()) {
                this.cell.wasChanged = true
            }
            var g = this.editor;
            if (g == null) {
                return
            }
            this.editor = null;
            var z = this.callEvent("onEditCell", [2, this.row.idd, this.cell._cellIndex, g.getValue(), g.val]);
            if ((typeof(z) == "string") || (typeof(z) == "number")) {
                g[g.setImage ? "setLabel" : "setValue"](z)
            } else {
                if (!z) {
                    g[g.setImage ? "setLabel" : "setValue"](g.val)
                }
            }
            if (this._ahgr && this.multiLine) {
                this.setSizes()
            }
        }
    };
    this._nextRowCell = function (row, dir, pos) {
        row = this._nextRow((this._groups ? this.rowsCol : this.rowsBuffer)._dhx_find(row), dir);
        if (!row) {
            return null
        }
        return row.childNodes[row._childIndexes ? row._childIndexes[pos] : pos]
    };
    this._getNextCell = function (acell, dir, i) {
        acell = acell || this.cell;
        var arow = acell.parentNode;
        if (this._tabOrder) {
            i = this._tabOrder[acell._cellIndex];
            if (typeof i != "undefined") {
                if (i < 0) {
                    acell = this._nextRowCell(arow, dir, Math.abs(i) - 1)
                } else {
                    acell = arow.childNodes[i]
                }
            }
        } else {
            var i = acell._cellIndex + dir;
            if (i >= 0 && i < this._cCount) {
                if (arow._childIndexes) {
                    i = arow._childIndexes[acell._cellIndex] + dir
                }
                acell = arow.childNodes[i]
            } else {
                acell = this._nextRowCell(arow, dir, (dir == 1 ? 0 : (this._cCount - 1)))
            }
        }
        if (!acell) {
            if ((dir == 1) && this.tabEnd) {
                this.tabEnd.focus();
                this.tabEnd.focus();
                this.setActive(false)
            }
            if ((dir == -1) && this.tabStart) {
                this.tabStart.focus();
                this.tabStart.focus();
                this.setActive(false)
            }
            return null
        }
        if (acell.style.display != "none" && (!this.smartTabOrder || !this.cells(acell.parentNode.idd, acell._cellIndex).isDisabled())) {
            return acell
        }
        return this._getNextCell(acell, dir)
    };
    this._nextRow = function (ind, dir) {
        var r = this.render_row(ind + dir);
        if (!r || r == -1) {
            return null
        }
        if (r && r.style.display == "none") {
            return this._nextRow(ind + dir, dir)
        }
        return r
    };
    this.scrollPage = function (dir) {
        if (!this.rowsBuffer.length) {
            return
        }
        var master = this._realfake ? this._fake : this;
        var new_ind = Math.floor((master._r_select || this.getRowIndex(this.row.idd) || 0) + (dir) * this.objBox.offsetHeight / (this._srdh || 20));
        if (new_ind < 0) {
            new_ind = 0
        }
        if (new_ind >= this.rowsBuffer.length) {
            new_ind = this.rowsBuffer.length - 1
        }
        if (this._srnd && !this.rowsBuffer[new_ind]) {
            this.objBox.scrollTop += Math.floor((dir) * this.objBox.offsetHeight / (this._srdh || 20)) * (this._srdh || 20);
            if (this._fake) {
                this._fake.objBox.scrollTop = this.objBox.scrollTop
            }
            master._r_select = new_ind
        } else {
            this.selectCell(new_ind, this.cell._cellIndex, true, false, false, (this.multiLine || this._srnd));
            if (!this.multiLine && !this._srnd && !this._realfake) {
                this.objBox.scrollTop = this.getRowById(this.getRowId(new_ind)).offsetTop;
                if (this._fake) {
                    this._fake.objBox.scrollTop = this.objBox.scrollTop
                }
            }
            master._r_select = null
        }
    };
    this.doKey = function (ev) {
        if (!ev) {
            return true
        }
        if ((ev.target || ev.srcElement).value !== window.undefined) {
            var zx = (ev.target || ev.srcElement);
            if (zx.className != "dhxcombo_input" && ((!zx.parentNode) || (zx.parentNode.className.indexOf("editable") == -1))) {
                return true
            }
        }
        if ((globalActiveDHTMLGridObject) && (this != globalActiveDHTMLGridObject)) {
            return globalActiveDHTMLGridObject.doKey(ev)
        }
        if (this.isActive == false) {
            return true
        }
        if (this._htkebl) {
            return true
        }
        if (!this.callEvent("onKeyPress", [ev.keyCode, ev.ctrlKey, ev.shiftKey, ev])) {
            return false
        }
        var code = "k" + ev.keyCode + "_" + (ev.ctrlKey ? 1 : 0) + "_" + (ev.shiftKey ? 1 : 0);
        if (this.cell) {
            if (this._key_events[code]) {
                if (false === this._key_events[code].call(this)) {
                    return true
                }
                if (ev.preventDefault) {
                    ev.preventDefault()
                }
                ev.cancelBubble = true;
                return false
            }
            if (this._key_events.k_other) {
                this._key_events.k_other.call(this, ev)
            }
        }
        return true
    };
    this.selectRow = function (r, fl, preserve, show) {
        if (typeof(r) != "object") {
            r = this.render_row(r)
        }
        this.selectCell(r, 0, fl, preserve, false, show)
    };
    this.wasDblClicked = function (ev) {
        var el = this.getFirstParentOfType(_isIE ? ev.srcElement : ev.target, "TD");
        if (el) {
            var rowId = el.parentNode.idd;
            return this.callEvent("onRowDblClicked", [rowId, el._cellIndex, ev])
        }
    };
    this._onHeaderClick = function (e, el) {
        var that = this.grid;
        el = el || that.getFirstParentOfType(_isIE ? event.srcElement : e.target, "TD");
        if (this.grid.resized == null) {
            if (!(this.grid.callEvent("onHeaderClick", [el._cellIndexS, (e || window.event)]))) {
                return false
            }
            that.sortField(el._cellIndexS, false, el)
        }
        this.grid.resized = null
    };
    this.deleteSelectedRows = function () {
        var num = this.selectedRows.length;
        if (num == 0) {
            return
        }
        var tmpAr = this.selectedRows;
        this.selectedRows = dhtmlxArray();
        for (var i = num - 1; i >= 0; i--) {
            var node = tmpAr[i];
            if (!this.deleteRow(node.idd, node)) {
                this.selectedRows[this.selectedRows.length] = node
            } else {
                if (node == this.row) {
                    var ind = i
                }
            }
        }
        if (ind) {
            try {
                if (ind + 1 > this.rowsCol.length) {
                    ind--
                }
                this.selectCell(ind, 0, true)
            } catch (er) {
                this.row = null;
                this.cell = null
            }
        }
    };
    this.getSelectedRowId = function () {
        var selAr = new Array(0);
        var uni = {};
        for (var i = 0; i < this.selectedRows.length; i++) {
            var id = this.selectedRows[i].idd;
            if (uni[id]) {
                continue
            }
            selAr[selAr.length] = id;
            uni[id] = true
        }
        if (selAr.length == 0) {
            return null
        } else {
            return selAr.join(this.delim)
        }
    };
    this.getSelectedCellIndex = function () {
        if (this.cell != null) {
            return this.cell._cellIndex
        } else {
            return -1
        }
    };
    this.getColWidth = function (ind) {
        return parseInt(this.cellWidthPX[ind])
    };
    this.setColWidth = function (ind, value) {
        if (value == "*") {
            this.initCellWidth[ind] = "*"
        } else {
            if (this._hrrar[ind]) {
                return
            }
            if (this.cellWidthType == "px") {
                this.cellWidthPX[ind] = parseInt(value)
            } else {
                this.cellWidthPC[ind] = parseInt(value)
            }
        }
        this.setSizes()
    };
    this.getRowIndex = function (row_id) {
        for (var i = 0; i < this.rowsBuffer.length; i++) {
            if (this.rowsBuffer[i] && this.rowsBuffer[i].idd == row_id) {
                return i
            }
        }
        return -1
    };
    this.getRowId = function (ind) {
        return this.rowsBuffer[ind] ? this.rowsBuffer[ind].idd : this.undefined
    };
    this.setRowId = function (ind, row_id) {
        this.changeRowId(this.getRowId(ind), row_id)
    };
    this.changeRowId = function (oldRowId, newRowId) {
        if (oldRowId == newRowId) {
            return
        }
        var row = this.rowsAr[oldRowId];
        row.idd = newRowId;
        if (this.UserData[oldRowId]) {
            this.UserData[newRowId] = this.UserData[oldRowId];
            this.UserData[oldRowId] = null
        }
        if (this._h2 && this._h2.get[oldRowId]) {
            this._h2.get[newRowId] = this._h2.get[oldRowId];
            this._h2.get[newRowId].id = newRowId;
            delete this._h2.get[oldRowId]
        }
        this.rowsAr[oldRowId] = null;
        this.rowsAr[newRowId] = row;
        for (var i = 0; i < row.childNodes.length; i++) {
            if (row.childNodes[i]._code) {
                row.childNodes[i]._code = this._compileSCL(row.childNodes[i]._val, row.childNodes[i])
            }
        }
        if (this._mat_links && this._mat_links[oldRowId]) {
            var a = this._mat_links[oldRowId];
            delete this._mat_links[oldRowId];
            for (var c in a) {
                for (var i = 0; i < a[c].length; i++) {
                    this._compileSCL(a[c][i].original, a[c][i])
                }
            }
        }
        this.callEvent("onRowIdChange", [oldRowId, newRowId])
    };
    this.setColumnIds = function (ids) {
        this.columnIds = ids.split(this.delim)
    };
    this.setColumnId = function (ind, id) {
        this.columnIds[ind] = id
    };
    this.getColIndexById = function (id) {
        for (var i = 0; i < this.columnIds.length; i++) {
            if (this.columnIds[i] == id) {
                return i
            }
        }
    };
    this.getColumnId = function (cin) {
        return this.columnIds[cin]
    };
    this.getColumnLabel = function (cin, ind, hdr) {
        var z = (hdr || this.hdr).rows[(ind || 0) + 1];
        for (var i = 0; i < z.cells.length; i++) {
            if (z.cells[i]._cellIndexS == cin) {
                return (_isIE ? z.cells[i].innerText : z.cells[i].textContent)
            }
        }
        return ""
    };
    this.getColLabel = this.getColumnLabel;
    this.getFooterLabel = function (cin, ind) {
        return this.getColumnLabel(cin, ind, this.ftr)
    };
    this.setRowTextBold = function (row_id) {
        var r = this.getRowById(row_id);
        if (r) {
            r.style.fontWeight = "bold"
        }
    };
    this.setRowTextStyle = function (row_id, styleString) {
        var r = this.getRowById(row_id);
        if (!r) {
            return
        }
        for (var i = 0; i < r.childNodes.length; i++) {
            var pfix = r.childNodes[i]._attrs.style || "";
            if ((this._hrrar) && (this._hrrar[i])) {
                pfix = "display:none;"
            }
            if (_isIE) {
                r.childNodes[i].style.cssText = pfix + "width:" + r.childNodes[i].style.width + ";" + styleString
            } else {
                r.childNodes[i].style.cssText = pfix + "width:" + r.childNodes[i].style.width + ";" + styleString
            }
        }
    };
    this.setRowColor = function (row_id, color) {
        var r = this.getRowById(row_id);
        for (var i = 0; i < r.childNodes.length; i++) {
            r.childNodes[i].bgColor = color
        }
    };
    this.setCellTextStyle = function (row_id, ind, styleString) {
        var r = this.getRowById(row_id);
        if (!r) {
            return
        }
        var cell = r.childNodes[r._childIndexes ? r._childIndexes[ind] : ind];
        if (!cell) {
            return
        }
        var pfix = "";
        if ((this._hrrar) && (this._hrrar[ind])) {
            pfix = "display:none;"
        }
        if (_isIE) {
            cell.style.cssText = pfix + "width:" + cell.style.width + ";" + styleString
        } else {
            cell.style.cssText = pfix + "width:" + cell.style.width + ";" + styleString
        }
    };
    this.setRowTextNormal = function (row_id) {
        var r = this.getRowById(row_id);
        if (r) {
            r.style.fontWeight = "normal"
        }
    };
    this.doesRowExist = function (row_id) {
        if (this.getRowById(row_id) != null) {
            return true
        } else {
            return false
        }
    };
    this.getColumnsNum = function () {
        return this._cCount
    };
    this.moveRowUp = function (row_id) {
        var r = this.getRowById(row_id);
        if (this.isTreeGrid()) {
            return this.moveRowUDTG(row_id, -1)
        }
        var rInd = this.rowsCol._dhx_find(r);
        if ((r.previousSibling) && (rInd != 0)) {
            r.parentNode.insertBefore(r, r.previousSibling);
            this.rowsCol._dhx_swapItems(rInd, rInd - 1);
            this.setSizes();
            var bInd = this.rowsBuffer._dhx_find(r);
            this.rowsBuffer._dhx_swapItems(bInd, bInd - 1);
            if (this._cssEven) {
                this._fixAlterCss(rInd - 1)
            }
        }
    };
    this.moveRowDown = function (row_id) {
        var r = this.getRowById(row_id);
        if (this.isTreeGrid()) {
            return this.moveRowUDTG(row_id, 1)
        }
        var rInd = this.rowsCol._dhx_find(r);
        if (r.nextSibling) {
            this.rowsCol._dhx_swapItems(rInd, rInd + 1);
            if (r.nextSibling.nextSibling) {
                r.parentNode.insertBefore(r, r.nextSibling.nextSibling)
            } else {
                r.parentNode.appendChild(r)
            }
            this.setSizes();
            var bInd = this.rowsBuffer._dhx_find(r);
            this.rowsBuffer._dhx_swapItems(bInd, bInd + 1);
            if (this._cssEven) {
                this._fixAlterCss(rInd)
            }
        }
    };
    this.getCombo = function (col_ind) {
        if (!this.combos[col_ind]) {
            this.combos[col_ind] = new dhtmlXGridComboObject()
        }
        return this.combos[col_ind]
    };
    this.setUserData = function (row_id, name, value) {
        if (!row_id) {
            row_id = "gridglobaluserdata"
        }
        if (!this.UserData[row_id]) {
            this.UserData[row_id] = new Hashtable()
        }
        this.UserData[row_id].put(name, value)
    };
    this.getUserData = function (row_id, name) {
        if (!row_id) {
            row_id = "gridglobaluserdata"
        }
        this.getRowById(row_id);
        var z = this.UserData[row_id];
        return (z ? z.get(name) : "")
    };
    this.setEditable = function (fl) {
        this.isEditable = dhx4.s2b(fl)
    };
    this.selectRowById = function (row_id, multiFL, show, call) {
        if (!call) {
            call = false
        }
        this.selectCell(this.getRowById(row_id), 0, call, multiFL, false, show)
    };
    this.clearSelection = function () {
        this.editStop();
        for (var i = 0; i < this.selectedRows.length; i++) {
            var r = this.rowsAr[this.selectedRows[i].idd];
            if (r) {
                r.className = r.className.replace(/rowselected/g, "")
            }
        }
        this.selectedRows = dhtmlxArray();
        this.row = null;
        if (this.cell != null) {
            this.cell.className = this.cell.className.replace(/cellselected/g, "");
            this.cell = null
        }
        this.callEvent("onSelectionCleared", [])
    };
    this.copyRowContent = function (from_row_id, to_row_id) {
        var frRow = this.getRowById(from_row_id);
        if (!this.isTreeGrid()) {
            for (var i = 0; i < frRow.cells.length; i++) {
                this.cells(to_row_id, i).setValue(this.cells(from_row_id, i).getValue())
            }
        } else {
            this._copyTreeGridRowContent(frRow, from_row_id, to_row_id)
        }
        if (!_isIE) {
            this.getRowById(from_row_id).cells[0].height = frRow.cells[0].offsetHeight
        }
    };
    this.setFooterLabel = function (c, label, ind) {
        return this.setColumnLabel(c, label, ind, this.ftr)
    };
    this.setColumnLabel = function (c, label, ind, hdr) {
        var z = (hdr || this.hdr).rows[ind || 1];
        var col = (z._childIndexes ? z._childIndexes[c] : c);
        if (!z.cells[col]) {
            return
        }
        if (!this.useImagesInHeader) {
            var hdrHTML = "<div class='hdrcell'>";
            if (label.indexOf("img:[") != -1) {
                var imUrl = label.replace(/.*\[([^>]+)\].*/, "$1");
                label = label.substr(label.indexOf("]") + 1, label.length);
                hdrHTML += "<img width='18px' height='18px' align='absmiddle' src='" + imUrl + "' hspace='2'>"
            }
            hdrHTML += label;
            hdrHTML += "</div>";
            z.cells[col].innerHTML = hdrHTML;
            if (this._hstyles[col]) {
                z.cells[col].style.cssText = this._hstyles[c]
            }
        } else {
            z.cells[col].style.textAlign = "left";
            z.cells[col].innerHTML = "<img src='" + label + "'>";
            var a = new Image();
            a.src = "" + label.replace(/(\.[a-z]+)/, ".des$1");
            this.preloadImagesAr[this.preloadImagesAr.length] = a;
            var b = new Image();
            b.src = "" + label.replace(/(\.[a-z]+)/, ".asc$1");
            this.preloadImagesAr[this.preloadImagesAr.length] = b
        }
        if ((label || "").indexOf("#") != -1) {
            var t = label.match(/(^|{)#([^}]+)(}|$)/);
            if (t) {
                var tn = "_in_header_" + t[2];
                if (this[tn]) {
                    this[tn]((this.forceDivInHeader ? z.cells[col].firstChild : z.cells[col]), col, label.split(t[0]))
                }
            }
        }
    };
    this.setColLabel = function (a, b, ind, c) {
        return this.setColumnLabel(a, b, (ind || 0) + 1, c)
    };
    this.clearAll = function (header) {
        if (!this.obj.rows[0]) {
            return
        }
        if (this._h2) {
            this._h2 = this._createHierarchy();
            if (this._fake) {
                if (this._realfake) {
                    this._h2 = this._fake._h2
                } else {
                    this._fake._h2 = this._h2
                }
            }
        }
        this.limit = this._limitC = 0;
        this.editStop(true);
        if (this._dLoadTimer) {
            window.clearTimeout(this._dLoadTimer)
        }
        if (this._dload) {
            this.objBox.scrollTop = 0;
            this.limit = this._limitC || 0;
            this._initDrF = true
        }
        var len = this.rowsCol.length;
        len = this.obj.rows.length;
        for (var i = len - 1; i > 0; i--) {
            var t_r = this.obj.rows[i];
            t_r.parentNode.removeChild(t_r)
        }
        if (header) {
            this._master_row = null;
            this.obj.rows[0].parentNode.removeChild(this.obj.rows[0]);
            for (var i = this.hdr.rows.length - 1; i >= 0; i--) {
                var t_r = this.hdr.rows[i];
                t_r.parentNode.removeChild(t_r)
            }
            if (this.ftr) {
                this.ftr.parentNode.removeChild(this.ftr);
                this.ftr = null
            }
            this._aHead = this.ftr = this.cellWidth = this._aFoot = null;
            this.cellType = dhtmlxArray();
            this._hrrar = [];
            this.columnIds = [];
            this.combos = [];
            this._strangeParams = [];
            this.defVal = [];
            this._ivizcol = null
        }
        this.row = null;
        this.cell = null;
        this.rowsCol = dhtmlxArray();
        this.rowsAr = {};
        this._RaSeCol = [];
        this.rowsBuffer = dhtmlxArray();
        this.UserData = [];
        this.selectedRows = dhtmlxArray();
        if (this.pagingOn || this._srnd) {
            this.xmlFileUrl = ""
        }
        if (this.pagingOn) {
            this.changePage(1)
        }
        if (this._contextCallTimer) {
            window.clearTimeout(this._contextCallTimer)
        }
        if (this._sst) {
            this.enableStableSorting(true)
        }
        this._fillers = this.undefined;
        this.setSortImgState(false);
        this.setSizes();
        this.callEvent("onClearAll", [])
    };
    this.sortField = function (ind, repeatFl, r_el) {
        if (this.getRowsNum() == 0) {
            return false
        }
        var el = this.hdr.rows[0].cells[ind];
        if (!el) {
            return
        }
        if (el.tagName == "TH" && (this.fldSort.length - 1) >= el._cellIndex && this.fldSort[el._cellIndex] != "na") {
            var data = this.getSortingState();
            var sortType = (data[0] == ind && data[1] == "asc") ? "des" : "asc";
            if (!this.callEvent("onBeforeSorting", [ind, this.fldSort[ind], sortType])) {
                return
            }
            this.sortImg.className = "dhxgrid_sort_" + (sortType == "asc" ? "asc" : "desc");
            if (this.useImagesInHeader) {
                var cel = this.hdr.rows[1].cells[el._cellIndex].firstChild;
                if (this.fldSorted != null) {
                    var celT = this.hdr.rows[1].cells[this.fldSorted._cellIndex].firstChild;
                    celT.src = celT.src.replace(/(\.asc\.)|(\.des\.)/, ".")
                }
                cel.src = cel.src.replace(/(\.[a-z]+)$/, "." + sortType + "$1")
            }
            this.sortRows(el._cellIndex, this.fldSort[el._cellIndex], sortType);
            this.fldSorted = el;
            this.r_fldSorted = r_el;
            var c = this.hdr.rows[1];
            var c = r_el.parentNode;
            var real_el = c._childIndexes ? c._childIndexes[el._cellIndex] : el._cellIndex;
            this.setSortImgPos(false, false, false, r_el)
        }
    };
    this.setCustomSorting = function (func, col) {
        if (!this._customSorts) {
            this._customSorts = new Array()
        }
        this._customSorts[col] = (typeof(func) == "string") ? eval(func) : func;
        this.fldSort[col] = "cus"
    };
    this.enableHeaderImages = function (fl) {
        this.useImagesInHeader = fl
    };
    this.setHeader = function (hdrStr, splitSign, styles) {
        if (typeof(hdrStr) != "object") {
            var arLab = this._eSplit(hdrStr)
        } else {
            arLab = [].concat(hdrStr)
        }
        var arWdth = new Array(0);
        var arTyp = new dhtmlxArray(0);
        var arAlg = new Array(0);
        var arVAlg = new Array(0);
        var arSrt = new Array(0);
        for (var i = 0; i < arLab.length; i++) {
            arWdth[arWdth.length] = Math.round(100 / arLab.length);
            arTyp[arTyp.length] = "ed";
            arAlg[arAlg.length] = "left";
            arVAlg[arVAlg.length] = "middle";
            arSrt[arSrt.length] = "na"
        }
        this.splitSign = splitSign || "#cspan";
        this.hdrLabels = arLab;
        this.cellWidth = arWdth;
        if (!this.initCellWidth.length) {
            this.setInitWidthsP(arWdth.join(this.delim), true)
        }
        this.cellType = arTyp;
        this.cellAlign = arAlg;
        this.cellVAlign = arVAlg;
        this.fldSort = arSrt;
        this._hstyles = styles || []
    };
    this._eSplit = function (str) {
        if (![].push) {
            return str.split(this.delim)
        }
        var a = "r" + (new Date()).valueOf();
        var z = this.delim.replace(/([\|\+\*\^])/g, "\\$1");
        return (str || "").replace(RegExp(z, "g"), a).replace(RegExp("\\\\" + a, "g"), this.delim).split(a)
    };
    this.getColType = function (cInd) {
        return this.cellType[cInd]
    };
    this.getColTypeById = function (cID) {
        return this.cellType[this.getColIndexById(cID)]
    };
    this.setColTypes = function (typeStr) {
        this.cellType = dhtmlxArray(typeStr.split(this.delim));
        this._strangeParams = new Array();
        for (var i = 0; i < this.cellType.length; i++) {
            if ((this.cellType[i].indexOf("[") != -1)) {
                var z = this.cellType[i].split(/[\[\]]+/g);
                this.cellType[i] = z[0];
                this.defVal[i] = z[1];
                if (z[1].indexOf("=") == 0) {
                    this.cellType[i] = "math";
                    this._strangeParams[i] = z[0]
                }
            }
            if (!window["eXcell_" + this.cellType[i]]) {
                dhx4.callEvent("onConfigurationError", ["Incorrect cell type: " + this.cellType[i], this, this.cellType[i]])
            }
        }
    };
    this.setColSorting = function (sortStr) {
        this.fldSort = sortStr.split(this.delim);
        var check = {str: 1, "int": 1, date: 1};
        for (var i = 0; i < this.fldSort.length; i++) {
            if ((!check[this.fldSort[i]]) && (typeof(window[this.fldSort[i]]) == "function")) {
                if (!this._customSorts) {
                    this._customSorts = new Array()
                }
                this._customSorts[i] = window[this.fldSort[i]];
                this.fldSort[i] = "cus"
            }
        }
    };
    this.setColAlign = function (alStr) {
        this.cellAlign = alStr.split(this.delim);
        for (var i = 0; i < this.cellAlign.length; i++) {
            this.cellAlign[i] = this.cellAlign[i]._dhx_trim()
        }
    };
    this.setColVAlign = function (valStr) {
        this.cellVAlign = valStr.split(this.delim)
    };
    this.setNoHeader = function (fl) {
        this.noHeader = dhx4.s2b(fl)
    };
    this.showRow = function (rowID) {
        this.getRowById(rowID);
        if (this._h2) {
            this.openItem(this._h2.get[rowID].parent.id)
        }
        var c = this.getRowById(rowID).childNodes[0];
        while (c && c.style.display == "none") {
            c = c.nextSibling
        }
        if (c) {
            this.moveToVisible(c, true)
        }
    };
    this.setStyle = function (ss_header, ss_grid, ss_selCell, ss_selRow) {
        this.ssModifier = [ss_header, ss_grid, ss_selCell, ss_selCell, ss_selRow];
        var prefs = ["#" + this.entBox.id + " table.hdr td", "#" + this.entBox.id + " table.obj td", "#" + this.entBox.id + " table.obj tr.rowselected td.cellselected", "#" + this.entBox.id + " table.obj td.cellselected", "#" + this.entBox.id + " table.obj tr.rowselected td"];
        var index = 0;
        while (!_isIE) {
            try {
                var temp = document.styleSheets[index].cssRules.length
            } catch (e) {
                index++;
                continue
            }
            break
        }
        for (var i = 0; i < prefs.length; i++) {
            if (this.ssModifier[i]) {
                if (_isIE) {
                    document.styleSheets[0].addRule(prefs[i], this.ssModifier[i])
                } else {
                    document.styleSheets[index].insertRule(prefs[i] + (" { " + this.ssModifier[i] + " }"), document.styleSheets[index].cssRules.length)
                }
            }
        }
    };
    this.setColumnColor = function (clr) {
        this.columnColor = clr.split(this.delim)
    };
    this.enableAlterCss = function (cssE, cssU, perLevel, levelUnique) {
        if (cssE || cssU) {
            this.attachEvent("onGridReconstructed", function () {
                this._fixAlterCss();
                if (this._fake) {
                    this._fake._fixAlterCss()
                }
            })
        }
        this._cssSP = perLevel;
        this._cssSU = levelUnique;
        this._cssEven = cssE;
        this._cssUnEven = cssU
    };
    this._fixAlterCss = function (ind) {
        if (this._h2 && (this._cssSP || this._cssSU)) {
            return this._fixAlterCssTGR(ind)
        }
        if (!this._cssEven && !this._cssUnEven) {
            return
        }
        ind = ind || 0;
        var j = ind;
        for (var i = ind; i < this.rowsCol.length; i++) {
            if (!this.rowsCol[i]) {
                continue
            }
            if (this.rowsCol[i].style.display != "none") {
                if (this.rowsCol[i]._cntr) {
                    j = 1;
                    continue
                }
                if (this.rowsCol[i].className.indexOf("rowselected") != -1) {
                    if (j % 2 == 1) {
                        this.rowsCol[i].className = this._cssUnEven + " rowselected " + (this.rowsCol[i]._css || "")
                    } else {
                        this.rowsCol[i].className = this._cssEven + " rowselected " + (this.rowsCol[i]._css || "")
                    }
                } else {
                    if (j % 2 == 1) {
                        this.rowsCol[i].className = this._cssUnEven + " " + (this.rowsCol[i]._css || "")
                    } else {
                        this.rowsCol[i].className = this._cssEven + " " + (this.rowsCol[i]._css || "")
                    }
                }
                j++
            }
        }
    };
    this.clearChangedState = function () {
        for (var i = 0; i < this.rowsCol.length; i++) {
            var row = this.rowsCol[i];
            if (row && row.childNodes) {
                var cols = row.childNodes.length;
                for (var j = 0; j < cols; j++) {
                    row.childNodes[j].wasChanged = false
                }
            }
        }
    };
    this.getChangedRows = function (and_added) {
        var res = new Array();
        this.forEachRow(function (id) {
            var row = this.rowsAr[id];
            if (row.tagName != "TR") {
                return
            }
            var cols = row.childNodes.length;
            if (and_added && row._added) {
                res[res.length] = row.idd
            } else {
                for (var j = 0; j < cols; j++) {
                    if (row.childNodes[j].wasChanged) {
                        res[res.length] = row.idd;
                        break
                    }
                }
            }
        });
        return res.join(this.delim)
    };
    this._sUDa = false;
    this._sAll = false;
    this.setSerializationLevel = function (userData, fullXML, config, changedAttr, onlyChanged, asCDATA) {
        this._sUDa = userData;
        this._sAll = fullXML;
        this._sConfig = config;
        this._chAttr = changedAttr;
        this._onlChAttr = onlyChanged;
        this._asCDATA = asCDATA
    };
    this.setSerializableColumns = function (list) {
        if (!list) {
            this._srClmn = null;
            return
        }
        this._srClmn = (list || "").split(",");
        for (var i = 0; i < this._srClmn.length; i++) {
            this._srClmn[i] = dhx4.s2b(this._srClmn[i])
        }
    };
    this._serialise = function (rCol, inner, closed) {
        this.editStop();
        var out = [];
        var close = "</" + this.xml.s_row + ">";
        if (this.isTreeGrid()) {
            this._h2.forEachChildF(0, function (el) {
                var temp = this._serializeRow(this.render_row_tree(-1, el.id));
                out.push(temp);
                if (temp) {
                    return true
                } else {
                    return false
                }
            }, this, function () {
                out.push(close)
            })
        } else {
            for (var i = 0; i < this.rowsBuffer.length; i++) {
                if (this.rowsBuffer[i]) {
                    if (this._chAttr && this.rowsBuffer[i]._locator) {
                        continue
                    }
                    var temp = this._serializeRow(this.render_row(i));
                    out.push(temp);
                    if (temp) {
                        out.push(close)
                    }
                }
            }
        }
        return [out.join("")]
    };
    this._serializeRow = function (r, i) {
        var out = [];
        var ra = this.xml.row_attrs;
        var ca = this.xml.cell_attrs;
        out.push("<" + this.xml.s_row);
        out.push(" id='" + r.idd + "'");
        if ((this._sAll) && this.selectedRows._dhx_find(r) != -1) {
            out.push(" selected='1'")
        }
        if (this._h2 && this._h2.get[r.idd].state == "minus") {
            out.push(" open='1'")
        }
        if (ra.length) {
            for (var i = 0; i < ra.length; i++) {
                out.push(" " + ra[i] + "='" + r._attrs[ra[i]] + "'")
            }
        }
        out.push(">");
        if (this._sUDa && this.UserData[r.idd]) {
            keysAr = this.UserData[r.idd].getKeys();
            for (var ii = 0; ii < keysAr.length; ii++) {
                out.push("<userdata name='" + keysAr[ii] + "'>" + (this._asCDATA ? "<![CDATA[" : "") + this.UserData[r.idd].get(keysAr[ii]) + (this._asCDATA ? "]]>" : "") + "</userdata>")
            }
        }
        var changeFl = false;
        for (var jj = 0; jj < this._cCount; jj++) {
            if ((!this._srClmn) || (this._srClmn[jj])) {
                var zx = this.cells3(r, jj);
                out.push("<cell");
                if (ca.length) {
                    for (var i = 0; i < ca.length; i++) {
                        out.push(" " + ca[i] + "='" + zx.cell._attrs[ca[i]] + "'")
                    }
                }
                zxVal = zx[this._agetm]();
                if (this._asCDATA) {
                    zxVal = "<![CDATA[" + zxVal + "]]>"
                }
                if ((this._ecspn) && (zx.cell.colSpan) && zx.cell.colSpan > 1) {
                    out.push(' colspan="' + zx.cell.colSpan + '" ')
                }
                if (this._chAttr) {
                    if (zx.wasChanged()) {
                        out.push(' changed="1"');
                        changeFl = true
                    }
                } else {
                    if ((this._onlChAttr) && (zx.wasChanged())) {
                        changeFl = true
                    }
                }
                if (this._sAll && this.cellType[jj] == "tree") {
                    out.push((this._h2 ? (" image='" + this._h2.get[r.idd].image + "'") : "") + ">" + zxVal + "</cell>")
                } else {
                    out.push(">" + zxVal + "</cell>")
                }
                if ((this._ecspn) && (zx.cell.colSpan)) {
                    for (var u = 0; u < zx.cell.colSpan - 1; u++) {
                        out.push("<cell/>");
                        jj++
                    }
                }
            }
        }
        if ((this._onlChAttr) && (!changeFl) && (!r._added)) {
            return ""
        }
        return out.join("")
    };
    this._serialiseConfig = function () {
        var out = "<head>";
        for (var i = 0; i < this.hdr.rows[0].cells.length; i++) {
            if (this._srClmn && !this._srClmn[i]) {
                continue
            }
            var sort = this.fldSort[i];
            if (sort == "cus") {
                sort = this._customSorts[i].toString();
                sort = sort.replace(/function[\ ]*/, "").replace(/\([^\f]*/, "")
            }
            out += "<column width='" + this.getColWidth(i) + "' align='" + this.cellAlign[i] + "' type='" + this.cellType[i] + "' sort='" + (sort || "na") + "' color='" + (this.columnColor[i] || "") + "'" + (this.columnIds[i] ? (" id='" + this.columnIds[i] + "'") : "") + ">";
            if (this._asCDATA) {
                out += "<![CDATA[" + this.getColumnLabel(i) + "]]>"
            } else {
                out += this.getColumnLabel(i)
            }
            var z = this.getCombo(i);
            if (z) {
                for (var j = 0; j < z.keys.length; j++) {
                    out += "<option value='" + z.keys[j] + "'>" + z.values[j] + "</option>"
                }
            }
            out += "</column>"
        }
        return out += "</head>"
    };
    this.serialize = function () {
        var out = '<?xml version="1.0"?><rows>';
        if (this._mathSerialization) {
            this._agetm = "getMathValue"
        } else {
            this._agetm = "getValue"
        }
        if (this._sUDa && this.UserData.gridglobaluserdata) {
            var keysAr = this.UserData.gridglobaluserdata.getKeys();
            for (var i = 0; i < keysAr.length; i++) {
                out += "<userdata name='" + keysAr[i] + "'>" + this.UserData.gridglobaluserdata.get(keysAr[i]) + "</userdata>"
            }
        }
        if (this._sConfig) {
            out += this._serialiseConfig()
        }
        out += this._serialise();
        out += "</rows>";
        return out
    };
    this.getPosition = function (oNode, pNode) {
        if (!pNode) {
            var pos = dhx4.getOffset(oNode);
            return [pos.left, pos.top]
        }
        pNode = pNode || document.body;
        var oCurrentNode = oNode;
        var iLeft = 0;
        var iTop = 0;
        while ((oCurrentNode) && (oCurrentNode != pNode)) {
            iLeft += oCurrentNode.offsetLeft - oCurrentNode.scrollLeft;
            iTop += oCurrentNode.offsetTop - oCurrentNode.scrollTop;
            oCurrentNode = oCurrentNode.offsetParent
        }
        if (pNode == document.body) {
            if (_isIE) {
                iTop += document.body.offsetTop || document.documentElement.offsetTop;
                iLeft += document.body.offsetLeft || document.documentElement.offsetLeft
            } else {
                if (!_isFF) {
                    iLeft += document.body.offsetLeft;
                    iTop += document.body.offsetTop
                }
            }
        }
        return [iLeft, iTop]
    };
    this.getFirstParentOfType = function (obj, tag) {
        while (obj && obj.tagName != tag && obj.tagName != "BODY") {
            obj = obj.parentNode
        }
        return obj
    };
    this.objBox.onscroll = function () {
        this.grid._doOnScroll()
    };
    this.hdrBox.onscroll = function () {
        if (this._try_header_sync) {
            return
        }
        this._try_header_sync = true;
        if (Math.abs(this.grid.objBox.scrollLeft - this.scrollLeft) > 1) {
            this.grid.objBox.scrollLeft = this.scrollLeft
        }
        this._try_header_sync = false
    };
    if ((!_isOpera) || (_OperaRv > 8.5)) {
        this.hdr.onmousemove = function (e) {
            this.grid.changeCursorState(e || window.event)
        };
        this.hdr.onmousedown = function (e) {
            return this.grid.startColResize(e || window.event)
        }
    }
    this.obj.onmousemove = this._drawTooltip;
    this.objBox.onclick = function (e) {
        e = e || event;
        e.cancelBubble = true;
        this.firstChild.grid.setActive(true);
        window.dhx4.callEvent("_onGridClick", [e, this.firstChild.grid])
    };
    this.obj.onclick = function (e) {
        if (this.grid._doClick(e || window.event) !== false) {
            if (this.grid._sclE) {
                this.grid.editCell(e || window.event)
            } else {
                this.grid.editStop()
            }
        }
        e = e || event;
        e.cancelBubble = true;
        window.dhx4.callEvent("_onGridClick", [e, this.grid])
    };
    if (_isMacOS) {
        this.entBox.oncontextmenu = function (e) {
            e.cancelBubble = true;
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
            var that = this.grid;
            if (that._realfake) {
                that = that._fake
            }
            return that._doContClick(e || window.event)
        }
    } else {
        this.entBox.onmousedown = function (e) {
            return this.grid._doContClick(e || window.event)
        };
        this.entBox.oncontextmenu = function (e) {
            if (this.grid._ctmndx) {
                (e || event).cancelBubble = true
            }
            return !this.grid._ctmndx
        }
    }
    this.obj.ondblclick = function (e) {
        if (!this.grid.wasDblClicked(e || window.event)) {
            return false
        }
        if (this.grid._dclE) {
            var row = this.grid.getFirstParentOfType((_isIE ? event.srcElement : e.target), "TR");
            if (row == this.grid.row) {
                this.grid.editCell(e || window.event)
            }
        }
        (e || event).cancelBubble = true;
        if (_isOpera) {
            return false
        }
    };
    this.hdr.onclick = this._onHeaderClick;
    this.sortImg.onclick = function () {
        self._onHeaderClick.apply({grid: self}, [null, self.r_fldSorted])
    };
    this.hdr.ondblclick = this._onHeaderDblClick;
    if (!document.body._dhtmlxgrid_onkeydown) {
        dhtmlxEvent(document, "keydown", function (e) {
            if (globalActiveDHTMLGridObject) {
                return globalActiveDHTMLGridObject.doKey(e || window.event)
            }
        });
        document.body._dhtmlxgrid_onkeydown = true
    }
    dhtmlxEvent(document.body, "click", function () {
        if (self.editStop) {
            self.editStop()
        }
        if (self.isActive) {
            self.setActive(false)
        }
    });
    if (this.entBox.style.height.toString().indexOf("%") != -1) {
        this._delta_y = this.entBox.style.height
    }
    if (this.entBox.style.width.toString().indexOf("%") != -1) {
        this._delta_x = this.entBox.style.width
    }
    if (this._delta_x || this._delta_y) {
        this._setAutoResize()
    }
    this.setColHidden = this.setColumnsVisibility;
    this.enableCollSpan = this.enableColSpan;
    this.setMultiselect = this.enableMultiselect;
    this.setMultiLine = this.enableMultiline;
    this.deleteSelectedItem = this.deleteSelectedRows;
    this.getSelectedId = this.getSelectedRowId;
    this.getHeaderCol = this.getColumnLabel;
    this.isItemExists = this.doesRowExist;
    this.getColumnCount = this.getColumnsNum;
    this.setSelectedRow = this.selectRowById;
    this.setHeaderCol = this.setColumnLabel;
    this.preventIECashing = this.preventIECaching;
    this.enableAutoHeigth = this.enableAutoHeight;
    this.getUID = this.uid;
    if (dhtmlx.image_path) {
        this.setImagePath(dhtmlx.image_path)
    }
    if (dhtmlx.skin) {
        this.setSkin(dhtmlx.skin)
    }
    return this
}
dhtmlXGridObject.prototype = {
    getRowAttribute: function (b, a) {
        return this.getRowById(b)._attrs[a]
    },
    setRowAttribute: function (c, a, b) {
        this.getRowById(c)._attrs[a] = b
    },
    isTreeGrid: function () {
        return (this.cellType._dhx_find("tree") != -1)
    },
    setRowHidden: function (g, c) {
        var b = dhx4.s2b(c);
        var e = this.getRowById(g);
        if (!e) {
            return
        }
        if (e.expand === "") {
            this.collapseKids(e)
        }
        if ((c) && (e.style.display != "none")) {
            e.style.display = "none";
            var d = this.selectedRows._dhx_find(e);
            if (d != -1) {
                e.className = e.className.replace("rowselected", "");
                for (var a = 0; a < e.childNodes.length; a++) {
                    e.childNodes[a].className = e.childNodes[a].className.replace(/cellselected/g, "")
                }
                this.selectedRows._dhx_removeAt(d)
            }
            this.callEvent("onGridReconstructed", [])
        }
        if ((!c) && (e.style.display == "none")) {
            e.style.display = "";
            this.callEvent("onGridReconstructed", [])
        }
        this.callEvent("onRowHide", [g, c]);
        this.setSizes()
    },
    setColumnHidden: function (c, b) {
        if (!this.hdr.rows.length) {
            if (!this._ivizcol) {
                this._ivizcol = []
            }
            return this._ivizcol[c] = b
        }
        if ((this.fldSorted) && (this.fldSorted.cellIndex == c) && (b)) {
            this.sortImg.style.display = "none"
        }
        var a = dhx4.s2b(b);
        if (a) {
            if (!this._hrrar) {
                this._hrrar = new Array()
            } else {
                if (this._hrrar[c]) {
                    return
                }
            }
            this._hrrar[c] = "display:none;";
            this._hideShowColumn(c, "none")
        } else {
            if ((!this._hrrar) || (!this._hrrar[c])) {
                return
            }
            this._hrrar[c] = "";
            this._hideShowColumn(c, "")
        }
        if ((this.fldSorted) && (this.fldSorted.cellIndex == c) && (!b)) {
            this.sortImg.style.display = "inline"
        }
        this.setSortImgPos();
        this.callEvent("onColumnHidden", [c, b])
    },
    isColumnHidden: function (a) {
        if ((this._hrrar) && (this._hrrar[a])) {
            return true
        }
        return false
    },
    setColumnsVisibility: function (b) {
        if (b) {
            this._ivizcol = b.split(this.delim)
        }
        if (this.hdr.rows.length && this._ivizcol) {
            for (var a = 0; a < this._ivizcol.length; a++) {
                this.setColumnHidden(a, this._ivizcol[a])
            }
        }
    },
    _fixHiddenRowsAll: function (h, c, a, b, f) {
        f = f || "_cellIndex";
        var g = h.rows.length;
        for (var e = 0; e < g; e++) {
            var l = h.rows[e].childNodes;
            if (l.length != this._cCount) {
                for (var d = 0; d < l.length; d++) {
                    if (l[d][f] == c) {
                        l[d].style[a] = b;
                        break
                    }
                }
            } else {
                l[c].style[a] = b
            }
        }
    },
    _hideShowColumn: function (e, d) {
        var a = e;
        if (this.hdr.rows[1] && (this.hdr.rows[1]._childIndexes) && (this.hdr.rows[1]._childIndexes[e] != e)) {
            a = this.hdr.rows[1]._childIndexes[e]
        }
        if (d == "none") {
            this.hdr.rows[0].cells[e]._oldWidth = this.hdr.rows[0].cells[e].style.width || (this.initCellWidth[e] + "px");
            this.hdr.rows[0].cells[e]._oldWidthP = this.cellWidthPC[e];
            this.obj.rows[0].cells[e].style.width = "0px";
            var b = {rows: [this.obj.rows[0]]};
            this.forEachRow(function (f) {
                if (this.rowsAr[f].tagName == "TR") {
                    b.rows.push(this.rowsAr[f])
                }
            });
            this._fixHiddenRowsAll(b, e, "display", "none");
            if (this.isTreeGrid()) {
                this._fixHiddenRowsAllTG(e, "none")
            }
            if ((_isOpera && _OperaRv < 9) || _isKHTML || (_isFF)) {
                this._fixHiddenRowsAll(this.hdr, e, "display", "none", "_cellIndexS")
            }
            if (this.ftr) {
                this._fixHiddenRowsAll(this.ftr.childNodes[0], e, "display", "none")
            }
            this._fixHiddenRowsAll(this.hdr, e, "whiteSpace", "nowrap", "_cellIndexS");
            if (!this.cellWidthPX.length && !this.cellWidthPC.length) {
                this.cellWidthPX = [].concat(this.initCellWidth)
            }
            if (this.cellWidthPX[e]) {
                this.cellWidthPX[e] = 0
            }
            if (this.cellWidthPC[e]) {
                this.cellWidthPC[e] = 0
            }
        } else {
            if (this.hdr.rows[0].cells[e]._oldWidth) {
                var c = this.hdr.rows[0].cells[e];
                if (_isOpera || _isKHTML || (_isFF)) {
                    this._fixHiddenRowsAll(this.hdr, e, "display", "", "_cellIndexS")
                }
                if (this.ftr) {
                    this._fixHiddenRowsAll(this.ftr.childNodes[0], e, "display", "")
                }
                var b = {rows: [this.obj.rows[0]]};
                this.forEachRow(function (f) {
                    if (this.rowsAr[f].tagName == "TR") {
                        b.rows.push(this.rowsAr[f])
                    }
                });
                this._fixHiddenRowsAll(b, e, "display", "");
                if (this.isTreeGrid()) {
                    this._fixHiddenRowsAllTG(e, "")
                }
                this._fixHiddenRowsAll(this.hdr, e, "whiteSpace", "normal", "_cellIndexS");
                if (c._oldWidthP) {
                    this.cellWidthPC[e] = c._oldWidthP
                }
                if (c._oldWidth) {
                    this.cellWidthPX[e] = parseInt(c._oldWidth)
                }
            }
        }
        this.setSizes();
        if ((!_isIE) && (!_isFF)) {
            this.obj.border = 1;
            this.obj.border = 0
        }
    },
    enableColSpan: function (a) {
        this._ecspn = dhx4.s2b(a)
    },
    enableRowsHover: function (b, a) {
        this._unsetRowHover(false, true);
        this._hvrCss = a;
        if (dhx4.s2b(b)) {
            if (!this._elmnh) {
                this.obj._honmousemove = this.obj.onmousemove;
                this.obj.onmousemove = this._setRowHover;
                if (_isIE) {
                    this.obj.onmouseleave = this._unsetRowHover
                } else {
                    this.obj.onmouseout = this._unsetRowHover
                }
                this._elmnh = true
            }
        } else {
            if (this._elmnh) {
                this.obj.onmousemove = this.obj._honmousemove;
                if (_isIE) {
                    this.obj.onmouseleave = null
                } else {
                    this.obj.onmouseout = null
                }
                this._elmnh = false
            }
        }
    },
    enableEditEvents: function (b, c, a) {
        this._sclE = dhx4.s2b(b);
        this._dclE = dhx4.s2b(c);
        this._f2kE = dhx4.s2b(a)
    },
    enableLightMouseNavigation: function (a) {
        if (dhx4.s2b(a)) {
            if (!this._elmn) {
                this.entBox._onclick = this.entBox.onclick;
                this.entBox.onclick = function () {
                    return true
                };
                this.obj._onclick = this.obj.onclick;
                this.obj.onclick = function (b) {
                    var d = this.grid.getFirstParentOfType(b ? b.target : event.srcElement, "TD");
                    if (!d) {
                        return
                    }
                    this.grid.editStop();
                    this.grid.doClick(d);
                    this.grid.editCell();
                    (b || event).cancelBubble = true
                };
                this.obj._onmousemove = this.obj.onmousemove;
                this.obj.onmousemove = this._autoMoveSelect;
                this._elmn = true
            }
        } else {
            if (this._elmn) {
                this.entBox.onclick = this.entBox._onclick;
                this.obj.onclick = this.obj._onclick;
                this.obj.onmousemove = this.obj._onmousemove;
                this._elmn = false
            }
        }
    },
    _unsetRowHover: function (b, d) {
        if (d) {
            that = this
        } else {
            that = this.grid
        }
        if ((that._lahRw) && (that._lahRw != d)) {
            for (var a = 0; a < that._lahRw.childNodes.length; a++) {
                that._lahRw.childNodes[a].className = that._lahRw.childNodes[a].className.replace(that._hvrCss, "")
            }
            that._lahRw = null
        }
    },
    _setRowHover: function (b) {
        var d = this.grid.getFirstParentOfType(b ? b.target : event.srcElement, "TD");
        if (d && d.parentNode != this.grid._lahRw) {
            this.grid._unsetRowHover(0, d);
            d = d.parentNode;
            if (!d.idd || d.idd == "__filler__") {
                return
            }
            for (var a = 0; a < d.childNodes.length; a++) {
                d.childNodes[a].className += " " + this.grid._hvrCss
            }
            this.grid._lahRw = d
        }
        this._honmousemove(b)
    },
    _autoMoveSelect: function (a) {
        if (!this.grid.editor) {
            var b = this.grid.getFirstParentOfType(a ? a.target : event.srcElement, "TD");
            if (b.parentNode.idd) {
                this.grid.doClick(b, true, 0)
            }
        }
        this._onmousemove(a)
    },
    enableDistributedParsing: function (c, a, b) {
        if (dhx4.s2b(c)) {
            this._ads_count = a || 10;
            this._ads_time = b || 250
        } else {
            this._ads_count = 0
        }
    },
    destructor: function () {
        this.editStop(true);
        if (this._sizeTime) {
            this._sizeTime = window.clearTimeout(this._sizeTime)
        }
        this.entBox.className = (this.entBox.className || "").replace(/gridbox.*/, "");
        if (this.formInputs) {
            for (var c = 0; c < this.formInputs.length; c++) {
                this.parentForm.removeChild(this.formInputs[c])
            }
        }
        var b;
        for (var c = 0; c < this.rowsCol.length; c++) {
            if (this.rowsCol[c]) {
                this.rowsCol[c].grid = null
            }
        }
        for (c in this.rowsAr) {
            if (this.rowsAr[c]) {
                this.rowsAr[c] = null
            }
        }
        this.rowsCol = new dhtmlxArray();
        this.rowsAr = {};
        this.entBox.innerHTML = "";
        var d = function () {
        };
        this.entBox.onclick = this.entBox.onmousedown = this.entBox.onbeforeactivate = this.entBox.onbeforedeactivate = this.entBox.onbeforedeactivate = this.entBox.onselectstart = d;
        this.setSizes = this._update_srnd_view = this.callEvent = d;
        this.entBox.grid = this.objBox.grid = this.hdrBox.grid = this.obj.grid = this.hdr.grid = null;
        if (this._fake) {
            this.globalBox.innerHTML = "";
            this._fake.setSizes = this._fake._update_srnd_view = this._fake.callEvent = d;
            this.globalBox.onclick = this.globalBox.onmousedown = this.globalBox.onbeforeactivate = this.globalBox.onbeforedeactivate = this.globalBox.onbeforedeactivate = this.globalBox.onselectstart = d
        }
        for (b in this) {
            if ((this[b]) && (this[b].m_obj)) {
                this[b].m_obj = null
            }
            this[b] = null
        }
        if (this == globalActiveDHTMLGridObject) {
            globalActiveDHTMLGridObject = null
        }
        return null
    },
    getSortingState: function () {
        var a = new Array();
        if (this.fldSorted) {
            a[0] = this.fldSorted._cellIndex;
            a[1] = (this.sortImg.className == "dhxgrid_sort_desc" ? "des" : "asc")
        }
        return a
    },
    enableAutoHeight: function (c, b, a) {
        this._ahgr = dhx4.s2b(c);
        this._ahgrF = dhx4.s2b(a);
        this._ahgrM = b || null;
        if (arguments.length == 1) {
            this.objBox.style.overflowY = c ? "hidden" : "auto"
        }
        if (b == "auto") {
            this._ahgrM = null;
            this._ahgrMA = true;
            this._setAutoResize()
        }
    },
    enableStableSorting: function (a) {
        this._sst = dhx4.s2b(a);
        this.rowsCol.stablesort = function (f) {
            var e = this.length - 1;
            for (var d = 0; d < this.length - 1; d++) {
                for (var c = 0; c < e; c++) {
                    if (f(this[c], this[c + 1]) > 0) {
                        var b = this[c];
                        this[c] = this[c + 1];
                        this[c + 1] = b
                    }
                }
                e--
            }
        }
    },
    enableKeyboardSupport: function (a) {
        this._htkebl = !dhx4.s2b(a)
    },
    enableContextMenu: function (a) {
        this._ctmndx = a
    },
    setScrollbarWidthCorrection: function (a) {
    },
    enableTooltips: function (b) {
        this._enbTts = b.split(",");
        for (var a = 0; a < this._enbTts.length; a++) {
            this._enbTts[a] = dhx4.s2b(this._enbTts[a])
        }
    },
    enableResizing: function (b) {
        this._drsclmn = b.split(",");
        for (var a = 0; a < this._drsclmn.length; a++) {
            this._drsclmn[a] = dhx4.s2b(this._drsclmn[a])
        }
    },
    setColumnMinWidth: function (a, b) {
        if (arguments.length == 2) {
            if (!this._drsclmW) {
                this._drsclmW = new Array()
            }
            this._drsclmW[b] = a
        } else {
            this._drsclmW = a.split(",")
        }
    },
    enableCellIds: function (a) {
        this._enbCid = dhx4.s2b(a)
    },
    lockRow: function (a, c) {
        var b = this.getRowById(a);
        if (b) {
            b._locked = dhx4.s2b(c);
            if ((this.cell) && (this.cell.parentNode.idd == a)) {
                this.editStop()
            }
        }
    },
    _getRowArray: function (e) {
        var d = new Array();
        for (var c = 0; c < e.childNodes.length; c++) {
            var b = this.cells3(e, c);
            d[c] = b.getValue()
        }
        return d
    },
    setDateFormat: function (b, a) {
        this._dtmask = b;
        this._dtmask_inc = a
    },
    setNumberFormat: function (h, c, e, g) {
        var d = h.replace(/[^0\,\.]*/g, "");
        var a = d.indexOf(".");
        if (a > -1) {
            a = d.length - a - 1
        }
        var b = d.indexOf(",");
        if (b > -1) {
            b = d.length - a - 2 - b
        }
        if (typeof e != "string") {
            e = this.i18n.decimal_separator
        }
        if (typeof g != "string") {
            g = this.i18n.group_separator
        }
        var i = h.split(d)[0];
        var f = h.split(d)[1];
        this._maskArr[c] = [a, b, i, f, e, g]
    },
    _aplNFb: function (e, d) {
        var b = this._maskArr[d];
        if (!b) {
            return e
        }
        var c = parseFloat(e.toString().replace(/[^0-9]*/g, ""));
        if (e.toString().substr(0, 1) == "-") {
            c = c * -1
        }
        if (b[0] > 0) {
            c = c / Math.pow(10, b[0])
        }
        return c
    },
    _aplNF: function (f, e) {
        var b = this._maskArr[e];
        if (!b) {
            return f
        }
        var g = (parseFloat(f) < 0 ? "-" : "") + b[2];
        f = Math.abs(Math.round(parseFloat(f) * Math.pow(10, b[0] > 0 ? b[0] : 0))).toString();
        f = (f.length < b[0] ? Math.pow(10, b[0] + 1 - f.length).toString().substr(1, b[0] + 1) + f.toString() : f).split("").reverse();
        f[b[0]] = (f[b[0]] || "0") + b[4];
        if (b[1] > 0) {
            for (var d = (b[0] > 0 ? 0 : 1) + b[0] + b[1]; d < f.length; d += b[1]) {
                f[d] += b[5]
            }
        }
        return g + f.reverse().join("") + b[3]
    },
    _launchCommands: function (a) {
        for (var d = 0; d < a.length; d++) {
            var c = new Array();
            for (var b = 0; b < a[d].childNodes.length; b++) {
                if (a[d].childNodes[b].nodeType == 1) {
                    c[c.length] = a[d].childNodes[b].firstChild.data
                }
            }
            this[a[d].getAttribute("command")].apply(this, c)
        }
    },
    _parseHead: function (e) {
        var d = dhx4.ajax.xpath("./head", e);
        if (d.length) {
            var f = dhx4.ajax.xpath("./column", d[0]);
            var g = dhx4.ajax.xpath("./settings", d[0]);
            var u = "setInitWidths";
            var p = false;
            if (g[0]) {
                for (var h = 0; h < g[0].childNodes.length; h++) {
                    switch (g[0].childNodes[h].tagName) {
                        case"colwidth":
                            if (g[0].childNodes[h].firstChild && g[0].childNodes[h].firstChild.data == "%") {
                                u = "setInitWidthsP"
                            }
                            break;
                        case"splitat":
                            p = (g[0].childNodes[h].firstChild ? g[0].childNodes[h].firstChild.data : false);
                            break
                    }
                }
            }
            this._launchCommands(dhx4.ajax.xpath("./beforeInit/call", d[0]));
            if (f.length > 0) {
                if (this.hdr.rows.length > 0) {
                    this.clearAll(true)
                }
                var a = [[], [], [], [], [], [], [], [], []];
                var o = ["", "width", "type", "align", "sort", "color", "format", "hidden", "id"];
                var n = ["", u, "setColTypes", "setColAlign", "setColSorting", "setColumnColor", "", "", "setColumnIds"];
                for (var t = 0; t < f.length; t++) {
                    for (var r = 1; r < o.length; r++) {
                        a[r].push(f[t].getAttribute(o[r]))
                    }
                    a[0].push((f[t].firstChild ? f[t].firstChild.data : "").replace(/^\s*((\s\S)*.+)\s*$/gi, "$1"))
                }
                this.setHeader(a[0]);
                for (var t = 0; t < n.length; t++) {
                    if (n[t]) {
                        this[n[t]](a[t].join(this.delim))
                    }
                }
                for (var t = 0; t < f.length; t++) {
                    if ((this.cellType[t].indexOf("co") == 0) || (this.cellType[t] == "clist")) {
                        var l = dhx4.ajax.xpath("./option", f[t]);
                        if (l.length) {
                            var q = new Array();
                            if (this.cellType[t] == "clist") {
                                for (var r = 0; r < l.length; r++) {
                                    q[q.length] = l[r].firstChild ? l[r].firstChild.data : ""
                                }
                                this.registerCList(t, q)
                            } else {
                                var v = this.getCombo(t);
                                for (var r = 0; r < l.length; r++) {
                                    v.put(l[r].getAttribute("value"), l[r].firstChild ? l[r].firstChild.data : "")
                                }
                            }
                        }
                    } else {
                        if (a[6][t]) {
                            if ((this.cellType[t].toLowerCase().indexOf("calendar") != -1) || (this.fldSort[t] == "date")) {
                                this.setDateFormat(a[6][t])
                            } else {
                                this.setNumberFormat(a[6][t], t)
                            }
                        }
                    }
                }
                this.init();
                var c = a[7].join(this.delim);
                if (this.setColHidden && c.replace(/,/g, "") != "") {
                    this.setColHidden(c)
                }
                if ((p) && (this.splitAt)) {
                    this.splitAt(p)
                }
            }
            this._launchCommands(dhx4.ajax.xpath("./afterInit/call", d[0]))
        }
        var b = dhx4.ajax.xpath("//rows/userdata", e);
        if (b.length > 0) {
            if (!this.UserData.gridglobaluserdata) {
                this.UserData.gridglobaluserdata = new Hashtable()
            }
            for (var r = 0; r < b.length; r++) {
                var w = "";
                for (var m = 0; m < b[r].childNodes.length; m++) {
                    w += b[r].childNodes[m].nodeValue
                }
                this.UserData.gridglobaluserdata.put(b[r].getAttribute("name"), w)
            }
        }
    },
    getCheckedRows: function (a) {
        var b = new Array();
        this.forEachRowA(function (d) {
            var c = this.cells(d, a);
            if (c.changeState && c.getValue() != 0) {
                b.push(d)
            }
        }, true);
        return b.join(",")
    },
    checkAll: function () {
        var b = arguments.length ? arguments[0] : 1;
        for (var a = 0; a < this.getColumnsNum(); a++) {
            if (this.getColType(a) == "ch") {
                this.setCheckedRows(a, b)
            }
        }
    },
    uncheckAll: function () {
        this.checkAll(0)
    },
    setCheckedRows: function (b, a) {
        this.forEachRowA(function (c) {
            if (this.cells(c, b).isCheckbox()) {
                this.cells(c, b).setValue(a)
            }
        })
    },
    _drawTooltip: function (f) {
        var g = this.grid.getFirstParentOfType(f ? f.target : event.srcElement, "TD");
        if (!g || ((this.grid.editor) && (this.grid.editor.cell == g))) {
            return true
        }
        var d = g.parentNode;
        if (!d.idd || d.idd == "__filler__") {
            return
        }
        var b = (f ? f.target : event.srcElement);
        if (d.idd == window.unknown) {
            return true
        }
        if (!this.grid.callEvent("onMouseOver", [d.idd, g._cellIndex, (f || window.event)])) {
            return true
        }
        if ((this.grid._enbTts) && (!this.grid._enbTts[g._cellIndex])) {
            if (b.title) {
                b.title = ""
            }
            return true
        }
        if (g._cellIndex >= this.grid._cCount) {
            return
        }
        var a = this.grid.cells3(d, g._cellIndex);
        if (!a || !a.cell || !a.cell._attrs) {
            return
        }
        if (b._title) {
            a.cell.title = ""
        }
        if (!a.cell._attrs.title) {
            b._title = true
        }
        if (a) {
            b.title = a.cell._attrs.title || (a.getTitle ? a.getTitle() : (a.getValue() || "").toString().replace(/<[^>]*>/gi, ""))
        }
        return true
    },
    enableCellWidthCorrection: function (a) {
        if (_isFF) {
            this._wcorr = parseInt(a)
        }
    },
    getAllRowIds: function (c) {
        var a = [];
        for (var b = 0; b < this.rowsBuffer.length; b++) {
            if (this.rowsBuffer[b]) {
                a.push(this.rowsBuffer[b].idd)
            }
        }
        return a.join(c || this.delim)
    },
    getAllItemIds: function () {
        return this.getAllRowIds()
    },
    setColspan: function (b, q, d) {
        if (!this._ecspn) {
            return
        }
        var a = this.getRowById(b);
        if ((a._childIndexes) && (a.childNodes[a._childIndexes[q]])) {
            var g = a._childIndexes[q];
            var e = a.childNodes[g];
            var f = e.colSpan;
            e.colSpan = 1;
            if ((f) && (f != 1)) {
                for (var l = 1; l < f; l++) {
                    var p = document.createElement("TD");
                    if (e.nextSibling) {
                        a.insertBefore(p, e.nextSibling)
                    } else {
                        a.appendChild(p)
                    }
                    a._childIndexes[q + l] = g + l;
                    p._cellIndex = q + l;
                    p.style.textAlign = this.cellAlign[l];
                    p.style.verticalAlign = this.cellVAlign[l];
                    e = p;
                    this.cells3(a, q + l).setValue("")
                }
            }
            for (var o = q * 1 + 1 * f; o < a._childIndexes.length; o++) {
                a._childIndexes[o] += (f - 1) * 1
            }
        }
        if ((d) && (d > 1)) {
            if (a._childIndexes) {
                var g = a._childIndexes[q]
            } else {
                var g = q;
                a._childIndexes = new Array();
                for (var o = 0; o < a.childNodes.length; o++) {
                    a._childIndexes[o] = o
                }
            }
            a.childNodes[g].colSpan = d;
            for (var o = 1; o < d; o++) {
                a._childIndexes[a.childNodes[g + 1]._cellIndex] = g;
                a.removeChild(a.childNodes[g + 1])
            }
            var h = a.childNodes[a._childIndexes[q]]._cellIndex;
            for (var o = h * 1 + 1 * d; o < a._childIndexes.length; o++) {
                a._childIndexes[o] -= (d - 1)
            }
        }
    },
    preventIECaching: function (a) {
        dhx4.ajax.cache = !a
    },
    enableColumnAutoSize: function (a) {
        this._eCAS = dhx4.s2b(a)
    },
    _onHeaderDblClick: function (c) {
        var b = this.grid;
        var a = b.getFirstParentOfType(_isIE ? event.srcElement : c.target, "TD");
        if (!b._eCAS) {
            return false
        }
        b.adjustColumnSize(a._cellIndexS)
    },
    adjustColumnSize: function (g, b) {
        if (this._hrrar && this._hrrar[g]) {
            return
        }
        this._notresize = true;
        var c = 0;
        this._setColumnSizeR(g, 20);
        for (var e = 1; e < this.hdr.rows.length; e++) {
            var n = this.hdr.rows[e];
            n = n.childNodes[(n._childIndexes) ? n._childIndexes[g] : g];
            if ((n) && ((!n.colSpan) || (n.colSpan < 2)) && n._cellIndex == g) {
                if ((n.childNodes[0]) && (n.childNodes[0].className == "hdrcell")) {
                    n = n.childNodes[0]
                }
                c = Math.max(c, n.scrollWidth)
            }
        }
        var d = this.obj.rows.length;
        var h = 0;
        var p = this.cellType._dhx_find("tree");
        for (var f = 1; f < d; f++) {
            var o = this.obj.rows[f];
            if (!this.rowsAr[o.idd]) {
                continue
            }
            if (o._childIndexes && o._childIndexes[g] != g || !o.childNodes[g]) {
                continue
            }
            h = (o.childNodes[g].innerText || o.childNodes[g].textContent || "").length * this.fontWidth;
            if (this._h2 && g == p) {
                h += this._h2.get[o.idd].level * 22
            }
            if (h > c) {
                c = h
            }
        }
        c += 20 + (b || 0);
        this._setColumnSizeR(g, c);
        this._notresize = false;
        this.setSizes()
    },
    detachHeader: function (a, c) {
        c = c || this.hdr;
        var b = c.rows[a + 1];
        if (b) {
            b.parentNode.removeChild(b)
        }
        this.setSizes()
    },
    detachFooter: function (a) {
        this.detachHeader(a, this.ftr)
    },
    attachHeader: function (a, d, b) {
        if (typeof(a) == "string") {
            a = this._eSplit(a)
        }
        if (typeof(d) == "string") {
            d = d.split(this.delim)
        }
        b = b || "_aHead";
        if (this.hdr.rows.length) {
            if (a) {
                this._createHRow([a, d], this[(b == "_aHead") ? "hdr" : "ftr"])
            } else {
                if (this[b]) {
                    for (var c = 0; c < this[b].length; c++) {
                        this.attachHeader.apply(this, this[b][c])
                    }
                }
            }
        } else {
            if (!this[b]) {
                this[b] = new Array()
            }
            this[b][this[b].length] = [a, d, b]
        }
    },
    _createHRow: function (c, m) {
        if (!m) {
            if (this.entBox.style.position != "absolute") {
                this.entBox.style.position = "relative"
            }
            var g = document.createElement("DIV");
            g.className = "c_ftr".substr(2);
            this.entBox.appendChild(g);
            var p = document.createElement("TABLE");
            p.cellPadding = p.cellSpacing = 0;
            if (!_isIE || _isIE == 8) {
                p.width = "100%";
                p.style.paddingRight = "20px"
            }
            p.style.marginRight = "20px";
            p.style.tableLayout = "fixed";
            g.appendChild(p);
            p.appendChild(document.createElement("TBODY"));
            this.ftr = m = p;
            var f = p.insertRow(0);
            var a = ((this.hdrLabels.length <= 1) ? c[0].length : this.hdrLabels.length);
            for (var d = 0; d < a; d++) {
                f.appendChild(document.createElement("TH"));
                f.childNodes[d]._cellIndex = d
            }
            if (_isIE && _isIE < 8) {
                f.style.position = "absolute"
            } else {
                f.style.height = "auto"
            }
        }
        var e = c[1];
        var g = document.createElement("TR");
        m.rows[0].parentNode.appendChild(g);
        for (var d = 0; d < c[0].length; d++) {
            if (c[0][d] == "#cspan") {
                var h = g.cells[g.cells.length - 1];
                h.colSpan = (h.colSpan || 1) + 1;
                continue
            }
            if ((c[0][d] == "#rspan") && (m.rows.length > 1)) {
                var r = m.rows.length - 2;
                var q = false;
                var h = null;
                while (!q) {
                    var h = m.rows[r];
                    for (var b = 0; b < h.cells.length; b++) {
                        if (h.cells[b]._cellIndex == d) {
                            q = b + 1;
                            break
                        }
                    }
                    r--
                }
                h = h.cells[q - 1];
                h.rowSpan = (h.rowSpan || 1) + 1;
                continue
            }
            var l = document.createElement("TD");
            l._cellIndex = l._cellIndexS = d;
            if (this._hrrar && this._hrrar[d] && !_isIE) {
                l.style.display = "none"
            }
            if (typeof c[0][d] == "object") {
                l.appendChild(c[0][d])
            } else {
                if (this.forceDivInHeader) {
                    l.innerHTML = "<div class='hdrcell'>" + (c[0][d] || "&nbsp;") + "</div>"
                } else {
                    l.innerHTML = (c[0][d] || "&nbsp;")
                }
                if ((c[0][d] || "").indexOf("#") != -1) {
                    var p = c[0][d].match(/(^|{)#([^}]+)(}|$)/);
                    if (p) {
                        var n = "_in_header_" + p[2];
                        if (this[n]) {
                            this[n]((this.forceDivInHeader ? l.firstChild : l), d, c[0][d].split(p[0]))
                        }
                    }
                }
            }
            if (e) {
                l.style.cssText = e[d]
            }
            g.appendChild(l)
        }
        var o = m;
        if (_isKHTML) {
            if (m._kTimer) {
                window.clearTimeout(m._kTimer)
            }
            m._kTimer = window.setTimeout(function () {
                m.rows[1].style.display = "none";
                window.setTimeout(function () {
                    m.rows[1].style.display = ""
                }, 1)
            }, 500)
        }
    },
    attachFooter: function (a, b) {
        this.attachHeader(a, b, "_aFoot")
    },
    setCellExcellType: function (c, a, b) {
        this.changeCellType(this.getRowById(c), a, b)
    },
    changeCellType: function (c, d, b) {
        b = b || this.cellType[d];
        var e = this.cells3(c, d);
        var a = e.getValue();
        e.cell._cellType = b;
        var e = this.cells3(c, d);
        e.setValue(a)
    },
    setRowExcellType: function (c, b) {
        var d = this.rowsAr[c];
        for (var a = 0; a < d.childNodes.length; a++) {
            this.changeCellType(d, a, b)
        }
    },
    setColumnExcellType: function (a, c) {
        for (var b = 0; b < this.rowsBuffer.length; b++) {
            if (this.rowsBuffer[b] && this.rowsBuffer[b].tagName == "TR") {
                this.changeCellType(this.rowsBuffer[b], a, c)
            }
        }
        if (this.cellType[a] == "math") {
            this._strangeParams[b] = c
        } else {
            this.cellType[a] = c
        }
    },
    forEachRow: function (c) {
        for (var b in this.rowsAr) {
            if (this.rowsAr[b] && this.rowsAr[b].idd) {
                c.apply(this, [this.rowsAr[b].idd])
            }
        }
    },
    forEachRowA: function (c) {
        for (var b = 0; b < this.rowsBuffer.length; b++) {
            if (this.rowsBuffer[b]) {
                c.call(this, this.render_row(b).idd)
            }
        }
    },
    forEachCell: function (c, b) {
        var d = this.getRowById(c);
        if (!d) {
            return
        }
        for (var a = 0; a < this._cCount; a++) {
            b(this.cells3(d, a), a)
        }
    },
    enableAutoWidth: function (c, a, b) {
        this._awdth = [dhx4.s2b(c), parseInt(a || 99999), parseInt(b || 0)];
        if (arguments.length == 1) {
            this.objBox.style.overflowX = c ? "hidden" : "auto"
        }
    },
    updateFromXML: function (a, d, b, c) {
        if (typeof d == "undefined") {
            d = true
        }
        this._refresh_mode = [true, d, b];
        this.load(a, c)
    },
    _refreshFromXML: function (d) {
        if (this._f_rowsBuffer) {
            this.filterBy(0, "")
        }
        reset = false;
        if (window.eXcell_tree) {
            eXcell_tree.prototype.setValueX = eXcell_tree.prototype.setValue;
            eXcell_tree.prototype.setValue = function (n) {
                var i = this.grid._h2.get[this.cell.parentNode.idd];
                if (i && this.cell.parentNode.valTag) {
                    this.setLabel(n)
                } else {
                    this.setValueX(n)
                }
            }
        }
        var m = this.cellType._dhx_find("tree");
        var f = dhx4.ajax.xmltop("rows", d);
        var e = f.getAttribute("parent") || 0;
        var h = {};
        if (this._refresh_mode[2]) {
            if (m != -1) {
                this._h2.forEachChild(e, function (i) {
                    h[i.id] = true
                }, this)
            } else {
                this.forEachRow(function (i) {
                    h[i] = true
                })
            }
        }
        var l = dhx4.ajax.xpath("//row", f);
        for (var c = 0; c < l.length; c++) {
            var j = l[c];
            var a = j.getAttribute("id");
            h[a] = false;
            var e = j.parentNode.getAttribute("id") || e;
            if (this.rowsAr[a] && this.rowsAr[a].tagName != "TR") {
                if (this._h2) {
                    this._h2.get[a].buff.data = j
                } else {
                    this.rowsBuffer[this.getRowIndex(a)].data = j
                }
                this.rowsAr[a] = j
            } else {
                if (this.rowsAr[a]) {
                    this._process_xml_row(this.rowsAr[a], j, -1);
                    this._postRowProcessing(this.rowsAr[a], true);
                    if (this._fake && this._fake.rowsAr[a]) {
                        this._fake._process_xml_row(this._fake.rowsAr[a], j, -1)
                    }
                } else {
                    if (this._refresh_mode[1]) {
                        var g = {idd: a, data: j, _parser: this._process_xml_row, _locator: this._get_xml_data};
                        var b = this.rowsBuffer.length;
                        if (this._refresh_mode[1] == "top") {
                            this.rowsBuffer.unshift(g);
                            b = 0
                        } else {
                            this.rowsBuffer.push(g)
                        }
                        if (this._h2) {
                            reset = true;
                            (this._h2.add(a, (j.parentNode.getAttribute("id") || j.parentNode.getAttribute("parent")))).buff = this.rowsBuffer[this.rowsBuffer.length - 1]
                        } else {
                            if (this._srnd) {
                                reset = true
                            }
                        }
                        this.rowsAr[a] = j;
                        j = this.render_row(b);
                        this._insertRowAt(j, b ? -1 : 0)
                    }
                }
            }
        }
        if (this._refresh_mode[2]) {
            for (a in h) {
                if (h[a] && this.rowsAr[a]) {
                    this.deleteRow(a)
                }
            }
        }
        this._refresh_mode = null;
        if (window.eXcell_tree) {
            eXcell_tree.prototype.setValue = eXcell_tree.prototype.setValueX
        }
        if (reset) {
            if (this._h2) {
                this._renderSort()
            } else {
                this.render_dataset()
            }
        }
        if (this._f_rowsBuffer) {
            this._f_rowsBuffer = null;
            this.filterByAll()
        }
    },
    getCustomCombo: function (c, b) {
        var a = this.cells(c, b).cell;
        if (!a._combo) {
            a._combo = new dhtmlXGridComboObject()
        }
        return a._combo
    },
    setTabOrder: function (b) {
        var d = b.split(this.delim);
        this._tabOrder = [];
        var a = this._cCount || b.length;
        for (var c = 0; c < a; c++) {
            d[c] = {c: parseInt(d[c]), ind: c}
        }
        d.sort(function (f, e) {
            return (f.c > e.c ? 1 : -1)
        });
        for (var c = 0; c < a; c++) {
            if (!d[c + 1] || (typeof d[c].c == "undefined")) {
                this._tabOrder[d[c].ind] = (d[0].ind + 1) * -1
            } else {
                this._tabOrder[d[c].ind] = d[c + 1].ind
            }
        }
    },
    i18n: {loading: "Loading", decimal_separator: ".", group_separator: ","},
    _key_events: {
        k13_1_0: function () {
            var a = this.rowsCol._dhx_find(this.row);
            this.selectCell(this.rowsCol[a + 1], this.cell._cellIndex, true)
        }, k13_0_1: function () {
            var a = this.rowsCol._dhx_find(this.row);
            this.selectCell(this.rowsCol[a - 1], this.cell._cellIndex, true)
        }, k13_0_0: function () {
            this.editStop();
            this.callEvent("onEnter", [(this.row ? this.row.idd : null), (this.cell ? this.cell._cellIndex : null)]);
            this._still_active = true
        }, k9_0_0: function () {
            this.editStop();
            if (!this.callEvent("onTab", [true])) {
                return true
            }
            var a = this._getNextCell(null, 1);
            if (a) {
                this.selectCell(a.parentNode, a._cellIndex, (this.row != a.parentNode), false, true);
                this._still_active = true
            }
        }, k9_0_1: function () {
            this.editStop();
            if (!this.callEvent("onTab", [false])) {
                return false
            }
            var a = this._getNextCell(null, -1);
            if (a) {
                this.selectCell(a.parentNode, a._cellIndex, (this.row != a.parentNode), false, true);
                this._still_active = true
            }
        }, k113_0_0: function () {
            if (this._f2kE) {
                this.editCell()
            }
        }, k32_0_0: function () {
            var a = this.cells4(this.cell);
            if (!a.changeState || (a.changeState() === false)) {
                return false
            }
        }, k27_0_0: function () {
            this.editStop(true)
        }, k33_0_0: function () {
            if (this.pagingOn) {
                this.changePage(this.currentPage - 1)
            } else {
                this.scrollPage(-1)
            }
        }, k34_0_0: function () {
            if (this.pagingOn) {
                this.changePage(this.currentPage + 1)
            } else {
                this.scrollPage(1)
            }
        }, k37_0_0: function () {
            if (!this.editor && this.isTreeGrid()) {
                this.collapseKids(this.row)
            } else {
                return false
            }
        }, k39_0_0: function () {
            if (!this.editor && this.isTreeGrid()) {
                this.expandKids(this.row)
            } else {
                return false
            }
        }, k40_0_0: function () {
            var b = this._realfake ? this._fake : this;
            if (this.editor && this.editor.combo) {
                this.editor.shiftNext()
            } else {
                if (!this.row.idd) {
                    return
                }
                var a = Math.max((b._r_select || 0), this.getRowIndex(this.row.idd));
                var c = this._nextRow(a, 1);
                if (c) {
                    b._r_select = null;
                    this.selectCell(c, this.cell._cellIndex, true);
                    if (b.pagingOn) {
                        b.showRow(c.idd)
                    }
                } else {
                    if (!this.callEvent("onLastRow", [])) {
                        return false
                    }
                    this._key_events.k34_0_0.apply(this, []);
                    if (this.pagingOn && this.rowsCol[a + 1]) {
                        this.selectCell(a + 1, 0, true)
                    }
                }
            }
            this._still_active = true
        }, k38_0_0: function () {
            var b = this._realfake ? this._fake : this;
            if (this.editor && this.editor.combo) {
                this.editor.shiftPrev()
            } else {
                if (!this.row.idd) {
                    return
                }
                var a = this.getRowIndex(this.row.idd) + 1;
                if (a != -1 && (!this.pagingOn || (a != 1))) {
                    var c = this._nextRow(a - 1, -1);
                    this.selectCell(c, this.cell._cellIndex, true);
                    if (b.pagingOn && c) {
                        b.showRow(c.idd)
                    }
                } else {
                    this._key_events.k33_0_0.apply(this, [])
                }
            }
            this._still_active = true
        }
    },
    _build_master_row: function () {
        var c = document.createElement("DIV");
        var b = ["<table><tr>"];
        for (var a = 0; a < this._cCount; a++) {
            b.push("<td></td>")
        }
        b.push("</tr></table>");
        c.innerHTML = b.join("");
        this._master_row = c.firstChild.rows[0]
    },
    _prepareRow: function (a) {
        if (!this._master_row) {
            this._build_master_row()
        }
        var c = this._master_row.cloneNode(true);
        for (var b = 0; b < c.childNodes.length; b++) {
            c.childNodes[b]._cellIndex = b;
            if (this._enbCid) {
                c.childNodes[b].id = "c_" + a + "_" + b
            }
            if (this.dragAndDropOff) {
                this.dragger.addDraggableItem(c.childNodes[b], this)
            }
        }
        c.idd = a;
        c.grid = this;
        return c
    },
    _process_jsarray_row: function (b, c) {
        b._attrs = {};
        for (var a = 0; a < b.childNodes.length; a++) {
            b.childNodes[a]._attrs = {}
        }
        this._fillRow(b, (this._c_order ? this._swapColumns(c) : c));
        return b
    },
    _get_jsarray_data: function (b, a) {
        return b[a]
    },
    _process_json_row: function (a, b) {
        b = this._c_order ? this._swapColumns(b.data) : b.data;
        return this._process_some_row(a, b)
    },
    _process_some_row: function (b, c) {
        b._attrs = {};
        for (var a = 0; a < b.childNodes.length; a++) {
            b.childNodes[a]._attrs = {}
        }
        this._fillRow(b, c);
        return b
    },
    _get_json_data: function (b, a) {
        return b.data[a]
    },
    _process_js_row: function (c, d) {
        var a = [];
        for (var b = 0; b < this.columnIds.length; b++) {
            a[b] = d[this.columnIds[b]];
            if (!a[b] && a[b] !== 0) {
                a[b] = ""
            }
        }
        this._process_some_row(c, a);
        c._attrs = d;
        return c
    },
    _get_js_data: function (b, a) {
        return b[this.columnIds[a]]
    },
    _process_csv_row: function (b, c) {
        b._attrs = {};
        for (var a = 0; a < b.childNodes.length; a++) {
            b.childNodes[a]._attrs = {}
        }
        this._fillRow(b, (this._c_order ? this._swapColumns(c.split(this.csv.cell)) : c.split(this.csv.cell)));
        return b
    },
    _get_csv_data: function (b, a) {
        return b.split(this.csv.cell)[a]
    },
    _process_store_row: function (e, d) {
        var a = [];
        for (var c = 0; c < this.columnIds.length; c++) {
            a[c] = d[this.columnIds[c]]
        }
        for (var b = 0; b < e.childNodes.length; b++) {
            e.childNodes[b]._attrs = {}
        }
        e._attrs = d;
        this._fillRow(e, a)
    },
    _process_xml_row: function (a, f) {
        var n = dhx4.ajax.xpath(this.xml.cell, f);
        var l = [];
        a._attrs = this._xml_attrs(f);
        if (this._ud_enabled) {
            var m = dhx4.ajax.xpath("./userdata", f);
            for (var e = m.length - 1; e >= 0; e--) {
                var h = "";
                for (var c = 0; c < m[e].childNodes.length; c++) {
                    h += m[e].childNodes[c].nodeValue
                }
                this.setUserData(a.idd, m[e].getAttribute("name"), h)
            }
        }
        for (var c = 0; c < n.length; c++) {
            var d = n[this._c_order ? this._c_order[c] : c];
            if (!d) {
                continue
            }
            var b = a._childIndexes ? a._childIndexes[c] : c;
            var g = d.getAttribute("type");
            if (a.childNodes[b]) {
                if (g) {
                    a.childNodes[b]._cellType = g
                }
                a.childNodes[b]._attrs = this._xml_attrs(d)
            }
            if (!d.getAttribute("xmlcontent")) {
                if (d.firstChild) {
                    d = d.firstChild.wholeText || d.firstChild.data
                } else {
                    d = ""
                }
            }
            l.push(d)
        }
        for (c < n.length; c < a.childNodes.length; c++) {
            a.childNodes[c]._attrs = {}
        }
        if (a.parentNode && a.parentNode.tagName == "row") {
            a._attrs.parent = a.parentNode.getAttribute("idd")
        }
        this._fillRow(a, l);
        return a
    },
    _get_xml_data: function (b, a) {
        b = b.firstChild;
        while (true) {
            if (!b) {
                return ""
            }
            if (b.tagName == "cell") {
                a--
            }
            if (a < 0) {
                break
            }
            b = b.nextSibling
        }
        return (b.firstChild ? b.firstChild.data : "")
    },
    _fillRow: function (d, f) {
        if (this.editor && this.editor.parentNode && this.editor.parentNode.idd == d.idd) {
            this.editStop()
        }
        for (var b = 0; b < d.childNodes.length; b++) {
            if ((b < f.length) || (this.defVal[b])) {
                var c = d.childNodes[b]._cellIndex;
                var e = f[c];
                var a = this.cells4(d.childNodes[b]);
                if ((this.defVal[c]) && ((e == "") || (typeof(e) == "undefined"))) {
                    e = this.defVal[c]
                }
                if (a) {
                    a.setValue(e)
                }
            } else {
                d.childNodes[b].innerHTML = "&nbsp;";
                d.childNodes[b]._clearCell = true
            }
        }
        return d
    },
    _postRowProcessing: function (f, h) {
        if (f._attrs["class"]) {
            f._css = f.className = f._attrs["class"]
        }
        if (f._attrs.locked) {
            f._locked = true
        }
        if (f._attrs.bgColor) {
            f.bgColor = f._attrs.bgColor
        }
        var g = 0;
        for (var b = 0; b < f.childNodes.length; b++) {
            var j = f.childNodes[b];
            var e = j._cellIndex;
            var d = j._attrs.style || f._attrs.style;
            if (d) {
                j.style.cssText += ";" + d
            }
            if (j._attrs["class"]) {
                j.className = j._attrs["class"]
            }
            d = j._attrs.align || this.cellAlign[e];
            if (d) {
                j.align = d
            }
            j.vAlign = j._attrs.valign || this.cellVAlign[e];
            var a = j._attrs.bgColor || this.columnColor[e];
            if (a) {
                j.bgColor = a
            }
            if (j._attrs.colspan && !h) {
                this.setColspan(f.idd, b + g, j._attrs.colspan);
                g += (j._attrs.colspan - 1)
            }
            if (this._hrrar && this._hrrar[e] && !h) {
                j.style.display = "none"
            }
        }
        this.callEvent("onRowCreated", [f.idd, f, null])
    },
    load: function (a, c, b) {
        this.callEvent("onXLS", [this]);
        if (arguments.length == 2 && typeof c != "function") {
            b = c;
            c = null
        }
        b = b || "xml";
        if (!this.xmlFileUrl) {
            this.xmlFileUrl = a
        }
        this._data_type = b;
        this.xmlLoader = this.doLoadDetails;
        var d = this;
        this.xmlLoader = function (e) {
            if (!d.callEvent) {
                return
            }
            d["_process_" + b](e.xmlDoc);
            if (!d._contextCallTimer) {
                d.callEvent("onXLE", [d, 0, 0, e.xmlDoc])
            }
            if (c) {
                c();
                c = null
            }
        };
        return dhx4.ajax.get(a, this.xmlLoader)
    },
    loadXMLString: function (b, a) {
        if (window.console && window.console.info) {
            window.console.info("loadXMLString was deprecated", "http://docs.dhtmlx.com/migration__index.html#migrationfrom43to44")
        }
        this.parse({responseXML: dhx4.ajax.parse(b)}, a, "xml")
    },
    loadXML: function (a, b) {
        if (window.console && window.console.info) {
            window.console.info("loadXML was deprecated", "http://docs.dhtmlx.com/migration__index.html#migrationfrom43to44")
        }
        this.load(a, b, "xml")
    },
    parse: function (c, b, a) {
        if (arguments.length == 2 && typeof b != "function") {
            a = b;
            b = null
        }
        a = a || "xml";
        this._data_type = a;
        if (a == "xml" && typeof c == "string") {
            c = {responseXML: dhx4.ajax.parse(c)}
        }
        this["_process_" + a](c);
        if (!this._contextCallTimer) {
            this.callEvent("onXLE", [this, 0, 0, c])
        }
        if (b) {
            b()
        }
    },
    xml: {top: "rows", row: "./row", cell: "./cell", s_row: "row", s_cell: "cell", row_attrs: [], cell_attrs: []},
    csv: {row: "\n", cell: ","},
    _xml_attrs: function (b) {
        var c = {};
        if (b.attributes.length) {
            for (var a = 0; a < b.attributes.length; a++) {
                c[b.attributes[a].name] = b.attributes[a].value
            }
        }
        return c
    },
    _process_xml: function (l) {
        if (this._refresh_mode) {
            return this._refreshFromXML(l)
        }
        this._parsing = true;
        var f = dhx4.ajax.xmltop(this.xml.top, l);
        if (f.tagName != this.xml.top) {
            return
        }
        var j = f.getAttribute("dhx_security");
        if (j) {
            dhtmlx.security_key = j
        }
        this._parseHead(f);
        var m = dhx4.ajax.xpath(this.xml.row, f);
        var e = parseInt(f.getAttribute("pos") || 0);
        var g = parseInt(f.getAttribute("total_count") || 0);
        if (!this.pagingOn) {
            var g = Math.min(g, 32000000 / this._srdh)
        }
        var d = false;
        if (g && g != this.rowsBuffer.length) {
            if (!this.rowsBuffer[g - 1]) {
                if (this.rowsBuffer.length) {
                    d = true
                }
                this.rowsBuffer[g - 1] = null
            }
            if (g < this.rowsBuffer.length) {
                this.rowsBuffer.splice(g, this.rowsBuffer.length - g);
                d = true
            }
        }
        if (this.isTreeGrid()) {
            return this._process_tree_xml(f)
        }
        for (var b = 0; b < m.length; b++) {
            if (this.rowsBuffer[b + e]) {
                continue
            }
            var a = m[b].getAttribute("id") || (b + e + 1);
            this.rowsBuffer[b + e] = {idd: a, data: m[b], _parser: this._process_xml_row, _locator: this._get_xml_data};
            this.rowsAr[a] = m[b]
        }
        this.callEvent("onDataReady", []);
        if (d && this._srnd) {
            var c = this.objBox.scrollTop;
            this._reset_view();
            this.objBox.scrollTop = c
        } else {
            this.render_dataset()
        }
        this._parsing = false
    },
    _process_jsarray: function (data) {
        this._parsing = true;
        data = data.responseText || data;
        if (typeof data == "string") {
            eval("dhtmlx.temp=" + data + ";");
            data = dhtmlx.temp
        }
        for (var i = 0; i < data.length; i++) {
            var id = i + 1;
            this.rowsBuffer.push({
                idd: id,
                data: data[i],
                _parser: this._process_jsarray_row,
                _locator: this._get_jsarray_data
            });
            this.rowsAr[id] = data[i]
        }
        this.render_dataset();
        this._parsing = false
    },
    _process_csv: function (d) {
        this._parsing = true;
        d = d.responseText || d;
        d = d.replace(/\r/g, "");
        d = d.split(this.csv.row);
        if (this._csvHdr) {
            this.clearAll();
            var c = d.splice(0, 1)[0].split(this.csv.cell);
            if (!this._csvAID) {
                c.splice(0, 1)
            }
            this.setHeader(c.join(this.delim));
            this.init()
        }
        for (var b = 0; b < d.length; b++) {
            if (!d[b] && b == d.length - 1) {
                continue
            }
            if (this._csvAID) {
                var e = b + 1;
                this.rowsBuffer.push({idd: e, data: d[b], _parser: this._process_csv_row, _locator: this._get_csv_data})
            } else {
                var a = d[b].split(this.csv.cell);
                var e = a.splice(0, 1)[0];
                this.rowsBuffer.push({
                    idd: e,
                    data: a,
                    _parser: this._process_jsarray_row,
                    _locator: this._get_jsarray_data
                })
            }
            this.rowsAr[e] = d[b]
        }
        this.render_dataset();
        this._parsing = false
    },
    _process_js: function (a) {
        return this._process_json(a, "js")
    },
    _process_json: function (data, mode) {
        this._parsing = true;
        var data = data.responseText || data;
        if (typeof data == "string") {
            eval("dhtmlx.temp=" + data + ";");
            data = dhtmlx.temp
        }
        if (mode == "js") {
            if (data.data) {
                data = data.data
            }
            for (var i = 0; i < data.length; i++) {
                var row = data[i];
                var id = row.id || (i + 1);
                this.rowsBuffer.push({idd: id, data: row, _parser: this._process_js_row, _locator: this._get_js_data});
                this.rowsAr[id] = data[i]
            }
        } else {
            if (data.rows) {
                for (var i = 0; i < data.rows.length; i++) {
                    var id = data.rows[i].id;
                    this.rowsBuffer.push({
                        idd: id,
                        data: data.rows[i],
                        _parser: this._process_json_row,
                        _locator: this._get_json_data
                    });
                    this.rowsAr[id] = data.rows[i]
                }
            }
        }
        if (data.dhx_security) {
            dhtmlx.security_key = data.dhx_security
        }
        this.callEvent("onDataReady", []);
        this.render_dataset();
        this._parsing = false
    },
    render_dataset: function (d, a) {
        if (this._srnd) {
            if (this._fillers) {
                return this._update_srnd_view()
            }
            a = Math.min((this._get_view_size() + (this._srnd_pr || 0)), this.rowsBuffer.length)
        }
        if (this.pagingOn) {
            d = Math.max((d || 0), (this.currentPage - 1) * this.rowsBufferOutSize);
            a = Math.min(this.currentPage * this.rowsBufferOutSize, this.rowsBuffer.length)
        } else {
            d = d || 0;
            a = a || this.rowsBuffer.length
        }
        for (var c = d; c < a; c++) {
            var f = this.render_row(c);
            if (f == -1) {
                if (this.xmlFileUrl) {
                    if (this.callEvent("onDynXLS", [c, (this._dpref ? this._dpref : (a - c))])) {
                        this.load(this.xmlFileUrl + dhtmlx.url(this.xmlFileUrl) + "posStart=" + c + "&count=" + (this._dpref ? this._dpref : (a - c)), this._data_type)
                    }
                }
                a = c;
                break
            }
            if (!f.parentNode || !f.parentNode.tagName) {
                this._insertRowAt(f, c);
                if (f._attrs.selected || f._attrs.select) {
                    this.selectRow(f, f._attrs.call ? true : false, true);
                    f._attrs.selected = f._attrs.select = null
                }
            }
            if (this._ads_count && c - d == this._ads_count) {
                var e = this;
                this._context_parsing = this._context_parsing || this._parsing;
                return this._contextCallTimer = window.setTimeout(function () {
                    e._contextCallTimer = null;
                    e.render_dataset(c, a);
                    if (!e._contextCallTimer) {
                        if (e._context_parsing) {
                            e.callEvent("onXLE", [])
                        } else {
                            e._fixAlterCss()
                        }
                        e._context_parsing = false
                    }
                }, this._ads_time)
            }
        }
        if (this._ads_count && c == a) {
            this.callEvent("onDistributedEnd", [])
        }
        if (this._srnd && !this._fillers) {
            var b = this.rowsBuffer.length - a;
            this._fillers = [];
            if (this._fake && !this._realfake) {
                this._fake._fillers = []
            }
            while (b > 0) {
                var h = (_isIE || window._FFrv) ? Math.min(b, 30000) : b;
                var g = this._add_filler(a, h);
                if (g) {
                    this._fillers.push(g)
                }
                b -= h;
                a += h
            }
        }
        this.setSizes()
    },
    render_row: function (b) {
        if (!this.rowsBuffer[b]) {
            return -1
        }
        if (this.rowsBuffer[b]._parser) {
            var a = this.rowsBuffer[b];
            if (this.rowsAr[a.idd] && this.rowsAr[a.idd].tagName == "TR") {
                return this.rowsBuffer[b] = this.rowsAr[a.idd]
            }
            var c = this._prepareRow(a.idd);
            this.rowsBuffer[b] = c;
            this.rowsAr[a.idd] = c;
            a._parser.call(this, c, a.data);
            this._postRowProcessing(c);
            return c
        }
        return this.rowsBuffer[b]
    },
    _get_cell_value: function (b, a, c) {
        if (b._locator) {
            if (this._c_order) {
                a = this._c_order[a]
            }
            return b._locator.call(this, b.data, a)
        }
        return this.cells3(b, a)[c ? c : "getValue"]()
    },
    sortRows: function (c, f, b) {
        this.editStop();
        b = (b || "asc").toLowerCase();
        f = (f || this.fldSort[c]);
        c = c || 0;
        if (this.isTreeGrid()) {
            this.sortTreeRows(c, f, b)
        } else {
            var a = {};
            var e = this.cellType[c];
            var g = "getValue";
            if (e == "link") {
                g = "getContent"
            }
            if (e == "dhxCalendar" || e == "dhxCalendarA") {
                g = "getDate"
            }
            for (var d = 0; d < this.rowsBuffer.length; d++) {
                a[this.rowsBuffer[d].idd] = this._get_cell_value(this.rowsBuffer[d], c, g)
            }
            this._sortRows(c, f, b, a)
        }
        this.callEvent("onAfterSorting", [c, f, b])
    },
    _sortCore: function (c, f, b, a, e) {
        var d = "sort";
        if (this._sst) {
            e.stablesort = this.rowsCol.stablesort;
            d = "stablesort"
        }
        if (f.length > 4) {
            f = window[f]
        }
        if (f == "cus") {
            var g = this._customSorts[c];
            e[d](function (i, h) {
                return g(a[i.idd], a[h.idd], b, i.idd, h.idd)
            })
        } else {
            if (typeof(f) == "function") {
                e[d](function (i, h) {
                    return f(a[i.idd], a[h.idd], b, i.idd, h.idd)
                })
            } else {
                if (f == "str") {
                    e[d](function (i, h) {
                        if (b == "asc") {
                            return a[i.idd] > a[h.idd] ? 1 : (a[i.idd] < a[h.idd] ? -1 : 0)
                        } else {
                            return a[i.idd] < a[h.idd] ? 1 : (a[i.idd] > a[h.idd] ? -1 : 0)
                        }
                    })
                } else {
                    if (f == "int") {
                        e[d](function (j, i) {
                            var h = parseFloat(a[j.idd]);
                            h = isNaN(h) ? -99999999999999 : h;
                            var l = parseFloat(a[i.idd]);
                            l = isNaN(l) ? -99999999999999 : l;
                            if (b == "asc") {
                                return h - l
                            } else {
                                return l - h
                            }
                        })
                    } else {
                        if (f == "date") {
                            e[d](function (j, i) {
                                var h = Date.parse(a[j.idd]) || (Date.parse("01/01/1900"));
                                var l = Date.parse(a[i.idd]) || (Date.parse("01/01/1900"));
                                if (b == "asc") {
                                    return h - l
                                } else {
                                    return l - h
                                }
                            })
                        }
                    }
                }
            }
        }
    },
    _sortRows: function (c, d, b, a) {
        this._sortCore(c, d, b, a, this.rowsBuffer);
        this._reset_view();
        this.callEvent("onGridReconstructed", [])
    },
    _reset_view: function (c) {
        if (!this.obj.rows[0]) {
            return
        }
        if (this._lahRw) {
            this._unsetRowHover(0, true)
        }
        this.callEvent("onResetView", []);
        var a = this.obj.rows[0].parentNode;
        var d = a.removeChild(a.childNodes[0], true);
        if (_isKHTML) {
            for (var b = a.parentNode.childNodes.length - 1; b >= 0; b--) {
                if (a.parentNode.childNodes[b].tagName == "TR") {
                    a.parentNode.removeChild(a.parentNode.childNodes[b], true)
                }
            }
        } else {
            if (_isIE) {
                for (var b = a.childNodes.length - 1; b >= 0; b--) {
                    a.childNodes[b].removeNode(true)
                }
            } else {
                a.innerHTML = ""
            }
        }
        a.appendChild(d);
        this.rowsCol = dhtmlxArray();
        if (this._sst) {
            this.enableStableSorting(true)
        }
        this._fillers = this.undefined;
        if (!c) {
            if (_isIE && this._srnd) {
                this.render_dataset()
            } else {
                this.render_dataset()
            }
        }
    },
    deleteRow: function (b, d) {
        if (!d) {
            d = this.getRowById(b)
        }
        if (!d) {
            return
        }
        this.editStop();
        if (!this._realfake) {
            if (this.callEvent("onBeforeRowDeleted", [b]) == false) {
                return false
            }
        }
        var a = 0;
        if (this.cellType._dhx_find("tree") != -1 && !this._realfake) {
            a = this._h2.get[b].parent.id;
            this._removeTrGrRow(d)
        } else {
            if (d.parentNode) {
                d.parentNode.removeChild(d)
            }
            var g = this.rowsCol._dhx_find(d);
            if (g != -1) {
                this.rowsCol._dhx_removeAt(g)
            }
            for (var c = 0; c < this.rowsBuffer.length; c++) {
                if (this.rowsBuffer[c] && this.rowsBuffer[c].idd == b) {
                    this.rowsBuffer._dhx_removeAt(c);
                    g = c;
                    break
                }
            }
        }
        this.rowsAr[b] = null;
        for (var c = 0; c < this.selectedRows.length; c++) {
            if (this.selectedRows[c].idd == b) {
                this.selectedRows._dhx_removeAt(c)
            }
        }
        if (this._srnd) {
            for (var c = 0; c < this._fillers.length; c++) {
                var e = this._fillers[c];
                if (!e) {
                    continue
                }
                if (e[0] >= g) {
                    this._update_fillers(c, 0, -1)
                } else {
                    if (e[0] + e[1] > g) {
                        this._update_fillers(c, -1, 0)
                    }
                }
            }
            this._update_srnd_view()
        }
        if (this.pagingOn) {
            this.changePage()
        }
        if (!this._realfake) {
            this.callEvent("onAfterRowDeleted", [b, a])
        }
        this.callEvent("onGridReconstructed", []);
        if (this._ahgr) {
            this.setSizes()
        }
        return true
    },
    _addRow: function (g, h, b) {
        if (b == -1 || typeof b == "undefined") {
            b = this.rowsBuffer.length
        }
        if (typeof h == "string") {
            h = h.split(this.delim)
        }
        var l = this._prepareRow(g);
        l._attrs = {};
        for (var c = 0; c < l.childNodes.length; c++) {
            l.childNodes[c]._attrs = {}
        }
        this.rowsAr[l.idd] = l;
        if (this._h2) {
            this._h2.get[l.idd].buff = l
        }
        this._fillRow(l, h);
        this._postRowProcessing(l);
        if (this._skipInsert) {
            this._skipInsert = false;
            return this.rowsAr[l.idd] = l
        }
        if (this.pagingOn) {
            this.rowsBuffer._dhx_insertAt(b, l);
            this.rowsAr[l.idd] = l;
            return l
        }
        if (this._fillers) {
            this.rowsCol._dhx_insertAt(b, null);
            this.rowsBuffer._dhx_insertAt(b, l);
            if (this._fake) {
                this._fake.rowsCol._dhx_insertAt(b, null)
            }
            this.rowsAr[l.idd] = l;
            var m = false;
            for (var d = 0; d < this._fillers.length; d++) {
                var e = this._fillers[d];
                if (e && e[0] <= b && (e[0] + e[1]) >= b) {
                    e[1] = e[1] + 1;
                    var a = e[2].firstChild.style.height = parseInt(e[2].firstChild.style.height) + this._srdh + "px";
                    m = true;
                    if (this._fake) {
                        this._fake._fillers[d][1]++;
                        this._fake._fillers[d][2].firstChild.style.height = a
                    }
                }
                if (e && e[0] > b) {
                    e[0] = e[0] + 1;
                    if (this._fake) {
                        this._fake._fillers[d][0]++
                    }
                }
            }
            if (!m) {
                this._fillers.push(this._add_filler(b, 1, (b == 0 ? {
                    parentNode: this.obj.rows[0].parentNode,
                    nextSibling: (this.rowsCol[1])
                } : this.rowsCol[b - 1])))
            }
            return l
        }
        this.rowsBuffer._dhx_insertAt(b, l);
        return this._insertRowAt(l, b)
    },
    addRow: function (a, d, c) {
        var b = this._addRow(a, d, c);
        if (!this.dragContext) {
            this.callEvent("onRowAdded", [a])
        }
        if (this.pagingOn) {
            this.changePage(this.currentPage)
        }
        if (this._srnd) {
            this._update_srnd_view()
        }
        b._added = true;
        if (this._srnd && !this._fillers) {
            this._fillers = []
        }
        if (this._ahgr) {
            this.setSizes()
        }
        this.callEvent("onGridReconstructed", []);
        return b
    },
    _insertRowAt: function (c, d, b) {
        this.rowsAr[c.idd] = c;
        if (this._skipInsert) {
            this._skipInsert = false;
            return c
        }
        if ((d < 0) || ((!d) && (parseInt(d) !== 0))) {
            d = this.rowsCol.length
        } else {
            if (d > this.rowsCol.length) {
                d = this.rowsCol.length
            }
        }
        if (this._cssEven) {
            var a = c.className.replace(this._cssUnEven, "");
            if ((this._cssSP ? this.getLevel(c.idd) : d) % 2 == 1) {
                c.className = a + " " + this._cssUnEven + (this._cssSU ? (" " + this._cssUnEven + "_" + this.getLevel(c.idd)) : "")
            } else {
                c.className = a + " " + this._cssEven + (this._cssSU ? (" " + this._cssEven + "_" + this.getLevel(c.idd)) : "")
            }
        }
        if (!b) {
            if ((d == (this.obj.rows.length - 1)) || (!this.rowsCol[d])) {
                if (_isKHTML) {
                    this.obj.appendChild(c)
                } else {
                    this.obj.firstChild.appendChild(c)
                }
            } else {
                this.rowsCol[d].parentNode.insertBefore(c, this.rowsCol[d])
            }
        }
        this.rowsCol._dhx_insertAt(d, c);
        this.callEvent("onRowInserted", [c, d]);
        return c
    },
    getRowById: function (c) {
        var b = this.rowsAr[c];
        if (b) {
            if (b.tagName != "TR") {
                for (var a = 0; a < this.rowsBuffer.length; a++) {
                    if (this.rowsBuffer[a] && this.rowsBuffer[a].idd == c) {
                        return this.render_row(a)
                    }
                }
                if (this._h2) {
                    return this.render_row(null, b.idd)
                }
            }
            return b
        }
        return null
    },
    cellById: function (b, a) {
        return this.cells(b, a)
    },
    cells: function (d, b) {
        if (arguments.length == 0) {
            return this.cells4(this.cell)
        } else {
            var e = this.getRowById(d)
        }
        var a = (e._childIndexes ? e.childNodes[e._childIndexes[b]] : e.childNodes[b]);
        if (!a && e._childIndexes) {
            a = e.firstChild || {}
        }
        return this.cells4(a)
    },
    cellByIndex: function (b, a) {
        return this.cells2(b, a)
    },
    cells2: function (d, b) {
        var e = this.render_row(d);
        var a = (e._childIndexes ? e.childNodes[e._childIndexes[b]] : e.childNodes[b]);
        if (!a && e._childIndexes) {
            a = e.firstChild || {}
        }
        return this.cells4(a)
    },
    cells3: function (c, b) {
        var a = (c._childIndexes ? c.childNodes[c._childIndexes[b]] : c.childNodes[b]);
        return this.cells4(a)
    },
    cells4: function (a) {
        var b = window["eXcell_" + (a._cellType || this.cellType[a._cellIndex])];
        if (b) {
            return new b(a)
        }
    },
    cells5: function (a, c) {
        var c = c || (a._cellType || this.cellType[a._cellIndex]);
        if (!this._ecache[c]) {
            if (!window["eXcell_" + c]) {
                var b = eXcell_ro
            } else {
                var b = window["eXcell_" + c]
            }
            this._ecache[c] = new b(a)
        }
        this._ecache[c].cell = a;
        return this._ecache[c]
    },
    dma: function (a) {
        if (!this._ecache) {
            this._ecache = {}
        }
        if (a && !this._dma) {
            this._dma = this.cells4;
            this.cells4 = this.cells5
        } else {
            if (!a && this._dma) {
                this.cells4 = this._dma;
                this._dma = null
            }
        }
    },
    getRowsNum: function () {
        return this.rowsBuffer.length
    },
    enableEditTabOnly: function (a) {
        if (arguments.length > 0) {
            this.smartTabOrder = dhx4.s2b(a)
        } else {
            this.smartTabOrder = true
        }
    },
    setExternalTabOrder: function (e, a) {
        var b = this;
        this.tabStart = (typeof(e) == "object") ? e : document.getElementById(e);
        var c = this.tabStart.onkeydown;
        this.tabStart.onkeydown = function (g) {
            if (c) {
                c.call(this, g)
            }
            var f = (g || window.event);
            if (f.keyCode == 9 && !f.shiftKey) {
                f.cancelBubble = true;
                b.selectCell(0, 0, 0, 0, 1);
                if (b.smartTabOrder && b.cells2(0, 0).isDisabled()) {
                    b._key_events.k9_0_0.call(b)
                }
                this.blur();
                return false
            }
        };
        if (_isOpera) {
            this.tabStart.onkeypress = this.tabStart.onkeydown
        }
        this.tabEnd = (typeof(a) == "object") ? a : document.getElementById(a);
        var d = this.tabEnd.onkeydown;
        this.tabEnd.onkeydown = this.tabEnd.onkeypress = function (g) {
            if (d) {
                d.call(this, g)
            }
            var f = (g || window.event);
            if (f.keyCode == 9 && f.shiftKey) {
                f.cancelBubble = true;
                b.selectCell((b.getRowsNum() - 1), (b.getColumnCount() - 1), 0, 0, 1);
                if (b.smartTabOrder && b.cells2((b.getRowsNum() - 1), (b.getColumnCount() - 1)).isDisabled()) {
                    b._key_events.k9_0_1.call(b)
                }
                this.blur();
                return false
            }
        };
        if (_isOpera) {
            this.tabEnd.onkeypress = this.tabEnd.onkeydown
        }
    },
    uid: function () {
        if (!this._ui_seed) {
            this._ui_seed = (new Date()).valueOf()
        }
        return this._ui_seed++
    },
    clearAndLoad: function () {
        if (this._last_load_request) {
            var b = this._last_load_request.xmlDoc;
            if (b.readyState != 4) {
                try {
                    b.onreadystatechange = function () {
                    };
                    b.abort()
                } catch (c) {
                }
            }
        }
        var a = this._pgn_skin;
        this._pgn_skin = null;
        this.clearAll();
        this._pgn_skin = a;
        this._last_load_request = this.load.apply(this, arguments)
    },
    getStateOfView: function () {
        if (this.pagingOn) {
            var a = (this.currentPage - 1) * this.rowsBufferOutSize;
            return [this.currentPage, a, Math.min(a + this.rowsBufferOutSize, this.rowsBuffer.length), this.rowsBuffer.length]
        }
        return [Math.floor(this.objBox.scrollTop / this._srdh), Math.ceil(parseInt(this.objBox.offsetHeight) / this._srdh), this.rowsBuffer.length]
    }
};
(function () {
    function d(g, h) {
        this[g] = h
    }

    function f(g, h) {
        this[g].call(this, h)
    }

    function c(g, h) {
        this[g].call(this, h.join(this.delim))
    }

    function a(g, l) {
        for (var j = 0; j < l.length; j++) {
            if (typeof l[j] == "object") {
                var m = this.getCombo(j);
                for (var h in l[j]) {
                    m.put(h, l[j][h])
                }
            }
        }
    }

    function e(g, r, n) {
        var t = 1;
        var q = [];

        function s(u, h, v) {
            if (!q[h]) {
                q[h] = []
            }
            if (typeof v == "object") {
                v.toString = function () {
                    return this.text
                }
            }
            q[h][u] = v
        }

        for (var o = 0; o < r.length; o++) {
            if (typeof(r[o]) == "object" && r[o].length) {
                for (var m = 0; m < r[o].length; m++) {
                    s(o, m, r[o][m])
                }
            } else {
                s(o, 0, r[o])
            }
        }
        for (var o = 0; o < q.length; o++) {
            for (var m = 0; m < q[0].length; m++) {
                var p = q[o][m];
                q[o][m] = (p || "").toString() || "&nbsp;";
                if (p && p.colspan) {
                    for (var l = 1; l < p.colspan; l++) {
                        s(m + l, o, "#cspan")
                    }
                }
                if (p && p.rowspan) {
                    for (var l = 1; l < p.rowspan; l++) {
                        s(m, o + l, "#rspan")
                    }
                }
            }
        }
        this.setHeader(q[0]);
        for (var o = 1; o < q.length; o++) {
            this.attachHeader(q[o])
        }
    }

    var b = [{name: "label", def: "&nbsp;", operation: "setHeader", type: e}, {
        name: "id",
        def: "",
        operation: "columnIds",
        type: d
    }, {name: "width", def: "*", operation: "setInitWidths", type: c}, {
        name: "align",
        def: "left",
        operation: "cellAlign",
        type: d
    }, {name: "valign", def: "middle", operation: "cellVAlign", type: d}, {
        name: "sort",
        def: "na",
        operation: "fldSort",
        type: d
    }, {name: "type", def: "ro", operation: "setColTypes", type: c}, {
        name: "options",
        def: "",
        operation: "",
        type: a
    }];
    dhtmlx.extend_api("dhtmlXGridObject", {
        _init: function (g) {
            return [g.parent]
        },
        image_path: "setImagePath",
        columns: "columns",
        rows: "rows",
        headers: "headers",
        skin: "setSkin",
        smart_rendering: "enableSmartRendering",
        css: "enableAlterCss",
        auto_height: "enableAutoHeight",
        save_hidden: "enableAutoHiddenColumnsSaving",
        save_cookie: "enableAutoSaving",
        save_size: "enableAutoSizeSaving",
        auto_width: "enableAutoWidth",
        block_selection: "enableBlockSelection",
        csv_id: "enableCSVAutoID",
        csv_header: "enableCSVHeader",
        cell_ids: "enableCellIds",
        colspan: "enableColSpan",
        column_move: "enableColumnMove",
        context_menu: "enableContextMenu",
        distributed: "enableDistributedParsing",
        drag: "enableDragAndDrop",
        drag_order: "enableDragOrder",
        tabulation: "enableEditTabOnly",
        header_images: "enableHeaderImages",
        header_menu: "enableHeaderMenu",
        keymap: "enableKeyboardSupport",
        mouse_navigation: "enableLightMouseNavigation",
        markers: "enableMarkedCells",
        math_editing: "enableMathEditing",
        math_serialization: "enableMathSerialization",
        drag_copy: "enableMercyDrag",
        multiline: "enableMultiline",
        multiselect: "enableMultiselect",
        save_column_order: "enableOrderSaving",
        hover: "enableRowsHover",
        rowspan: "enableRowspan",
        smart: "enableSmartRendering",
        save_sorting: "enableSortingSaving",
        stable_sorting: "enableStableSorting",
        undo: "enableUndoRedo",
        csv_cell: "setCSVDelimiter",
        date_format: "setDateFormat",
        drag_behavior: "setDragBehavior",
        editable: "setEditable",
        without_header: "setNoHeader",
        submit_changed: "submitOnlyChanged",
        submit_serialization: "submitSerialization",
        submit_selected: "submitOnlySelected",
        submit_id: "submitOnlyRowID",
        xml: "load"
    }, {
        columns: function (n) {
            for (var g = 0; g < b.length; g++) {
                var m = [];
                for (var h = 0; h < n.length; h++) {
                    m[h] = n[h][b[g].name] || b[g].def
                }
                var l = b[g].type || f;
                l.call(this, b[g].operation, m, n)
            }
            this.init()
        }, rows: function (g) {
        }, headers: function (h) {
            for (var g = 0; g < h.length; g++) {
                this.attachHeader(h[g])
            }
        }
    })
})();
dhtmlXGridObject.prototype._dp_init = function (a) {
    a.attachEvent("insertCallback", function (b, d) {
        if (this.obj._h2) {
            this.obj.addRow(d, c, null, parent)
        } else {
            this.obj.addRow(d, [], 0)
        }
        var c = this.obj.getRowById(d);
        if (c) {
            this.obj._process_xml_row(c, b.firstChild);
            this.obj._postRowProcessing(c)
        }
    });
    a.attachEvent("updateCallback", function (b, d) {
        var c = this.obj.getRowById(d);
        if (c) {
            this.obj._process_xml_row(c, b.firstChild);
            this.obj._postRowProcessing(c)
        }
    });
    a.attachEvent("deleteCallback", function (b, c) {
        this.obj.setUserData(c, this.action_param, "true_deleted");
        this.obj.deleteRow(c)
    });
    a._methods = ["setRowTextStyle", "setCellTextStyle", "changeRowId", "deleteRow"];
    this.attachEvent("onEditCell", function (d, e, c) {
        if (a._columns && !a._columns[c]) {
            return true
        }
        var b = this.cells(e, c);
        if (d == 1) {
            if (b.isCheckbox()) {
                a.setUpdated(e, true)
            }
        } else {
            if (d == 2) {
                if (b.wasChanged()) {
                    a.setUpdated(e, true)
                }
            }
        }
        return true
    });
    this.attachEvent("onRowPaste", function (b) {
        a.setUpdated(b, true)
    });
    this.attachEvent("onUndo", function (b) {
        a.setUpdated(b, true)
    });
    this.attachEvent("onRowIdChange", function (d, b) {
        var c = a.findRow(d);
        if (c < a.updatedRows.length) {
            a.updatedRows[c] = b
        }
    });
    this.attachEvent("onSelectStateChanged", function (b) {
        if (a.updateMode == "row") {
            a.sendData()
        }
        return true
    });
    this.attachEvent("onEnter", function (c, b) {
        if (a.updateMode == "row") {
            a.sendData()
        }
        return true
    });
    this.attachEvent("onBeforeRowDeleted", function (b) {
        if (a._silent_mode || (!this.rowsAr[b])) {
            return true
        }
        if (this.dragContext && a.dnd) {
            window.setTimeout(function () {
                a.setUpdated(b, true)
            }, 1);
            return true
        }
        var c = a.getState(b);
        if (this._h2) {
            this._h2.forEachChild(b, function (d) {
                a.setUpdated(d.id, false);
                a.markRow(d.id, true, "deleted")
            }, this)
        }
        if (c == "inserted") {
            a.set_invalid(b, false);
            a.setUpdated(b, false);
            return true
        }
        if (c == "deleted") {
            return false
        }
        if (c == "true_deleted") {
            a.setUpdated(b, false);
            return true
        }
        a.setUpdated(b, true, "deleted");
        return false
    });
    this.attachEvent("onBindUpdate", function (b) {
        if (typeof b == "object") {
            b = b.id
        }
        a.setUpdated(b, true)
    });
    this.attachEvent("onRowAdded", function (b) {
        if (this.dragContext && a.dnd) {
            return true
        }
        a.setUpdated(b, true, "inserted");
        return true
    });
    a._getRowData = function (d, n) {
        var g = [];
        g.gr_id = d;
        if (this.obj.isTreeGrid()) {
            g.gr_pid = this.obj.getParentId(d)
        }
        var b = this.obj.getRowById(d);
        for (var h = 0; h < this.obj._cCount; h++) {
            if (this.obj._c_order) {
                var l = this.obj._c_order[h]
            } else {
                var l = h
            }
            var m = this.obj.cells(b.idd, h);
            if (this._changed && !m.wasChanged()) {
                continue
            }
            if (this._endnm) {
                g[this.obj.getColumnId(h)] = m.getValue()
            } else {
                g["c" + l] = m.getValue()
            }
        }
        var e = this.obj.UserData[d];
        if (e) {
            for (var f = 0; f < e.keys.length; f++) {
                if (e.keys[f] && e.keys[f].indexOf("__") != 0) {
                    g[e.keys[f]] = e.values[f]
                }
            }
        }
        var e = this.obj.UserData.gridglobaluserdata;
        if (e) {
            for (var f = 0; f < e.keys.length; f++) {
                g[e.keys[f]] = e.values[f]
            }
        }
        return g
    };
    a._clearUpdateFlag = function (c) {
        var d = this.obj.getRowById(c);
        if (d) {
            for (var b = 0; b < this.obj._cCount; b++) {
                this.obj.cells(c, b).cell.wasChanged = false
            }
        }
    };
    a.checkBeforeUpdate = function (f) {
        var e = true;
        var b = [];
        for (var d = 0; d < this.obj._cCount; d++) {
            if (this.mandatoryFields[d]) {
                var c = this.mandatoryFields[d].call(this.obj, this.obj.cells(f, d).getValue(), f, d);
                if (typeof c == "string") {
                    this.messages.push(c);
                    e = false
                } else {
                    e &= c;
                    b[d] = !c
                }
            }
        }
        if (!e) {
            this.set_invalid(f, "invalid", b);
            this.setUpdated(f, false)
        }
        return e
    }
};
dhx4.attachEvent("onGridCreated", function (b) {
    b._con_f_used = [].concat(b._con_f_used);
    dhtmlXGridObject.prototype._con_f_used = [];
    var a = function (f) {
        f = f.replace(/(\?|\&)connector[^\f]*/g, "");
        return f + (f.indexOf("?") != -1 ? "&" : "?") + "connector=true" + (this.hdr.rows.length > 0 ? "&dhx_no_header=1" : "")
    };
    var e = function (f) {
        return a.call(this, f) + (this._connector_sorting || "") + (this._connector_filter || "")
    };
    var d = function (g, h, f) {
        this._connector_sorting = "&dhx_sort[" + h + "]=" + f;
        return e.call(this, g)
    };
    var c = function (g, f, j) {
        var l = [];
        for (var h = 0; h < f.length; h++) {
            l[h] = "dhx_filter[" + f[h] + "]=" + encodeURIComponent(j[h])
        }
        this._connector_filter = "&" + l.join("&");
        return e.call(this, g)
    };
    b.attachEvent("onCollectValues", function (f) {
        if (this._con_f_used[f]) {
            if (typeof(this._con_f_used[f]) == "object") {
                return this._con_f_used[f]
            } else {
                return false
            }
        }
        return true
    });
    b.attachEvent("onDynXLS", function () {
        if (this.xmlFileUrl) {
            this.xmlFileUrl = e.call(this, this.xmlFileUrl)
        }
        return true
    });
    b.attachEvent("onBeforeSorting", function (i, h, g) {
        if (h == "connector") {
            var f = this;
            this.clearAndLoad(d.call(this, this.xmlFileUrl, i, g), function () {
                f.setSortImgState(true, i, g)
            });
            return false
        }
        return true
    });
    b.attachEvent("onFilterStart", function (g, f) {
        if (this._con_f_used.length) {
            var i = this.getSortingState();
            var h = this;
            this.clearAndLoad(c.call(this, this.xmlFileUrl, g, f));
            if (i.length) {
                h.setSortImgState(true, i[0], i[1])
            }
            return false
        }
        return true
    })
});
dhtmlXGridObject.prototype._con_f_used = [];
dhtmlXGridObject.prototype._in_header_connector_text_filter = function (b, a) {
    if (!this._con_f_used[a]) {
        this._con_f_used[a] = 1
    }
    return this._in_header_text_filter(b, a)
};
dhtmlXGridObject.prototype._in_header_connector_select_filter = function (b, a) {
    if (!this._con_f_used[a]) {
        this._con_f_used[a] = 2
    }
    return this._in_header_select_filter(b, a)
};
if (!dhtmlXGridObject.prototype.load_connector) {
    dhtmlXGridObject.prototype.load_connector = dhtmlXGridObject.prototype.load;
    dhtmlXGridObject.prototype.load = function (b, e, d) {
        if (!this._colls_loaded && this.cellType) {
            var a = [];
            for (var c = 0; c < this.cellType.length; c++) {
                if (this.cellType[c].indexOf("co") == 0 || this.cellType[c].indexOf("clist") == 0 || this._con_f_used[c] == 2) {
                    a.push(c)
                }
            }
            if (a.length) {
                arguments[0] += (arguments[0].indexOf("?") != -1 ? "&" : "?") + "connector=true&dhx_colls=" + a.join(",")
            }
        }
        return this.load_connector.apply(this, arguments)
    };
    dhtmlXGridObject.prototype._parseHead_connector = dhtmlXGridObject.prototype._parseHead;
    dhtmlXGridObject.prototype._parseHead = function (b, q, n) {
        this._parseHead_connector.apply(this, arguments);
        if (!this._colls_loaded) {
            var o = dhx4.ajax.xpath("./coll_options", arguments[0]);
            for (var h = 0; h < o.length; h++) {
                var m = o[h].getAttribute("for");
                var p = [];
                var d = null;
                if (this.cellType[m] == "combo") {
                    d = this.getColumnCombo(m)
                } else {
                    if (this.cellType[m].indexOf("co") == 0) {
                        d = this.getCombo(m)
                    }
                }
                var g = dhx4.ajax.xpath("./item", o[h]);
                var a = [];
                for (var e = 0; e < g.length; e++) {
                    var c = g[e].getAttribute("value");
                    if (d) {
                        var l = g[e].getAttribute("label") || c;
                        if (d.addOption) {
                            a.push([c, l])
                        } else {
                            d.put(c, l)
                        }
                        p[p.length] = l
                    } else {
                        p[p.length] = c
                    }
                }
                if (a.length) {
                    if (d) {
                        d.addOption(a)
                    }
                } else {
                    if (p.length && !d) {
                        if (this.registerCList) {
                            this.registerCList(m * 1, p)
                        }
                    }
                }
                if (this._con_f_used[m * 1]) {
                    this._con_f_used[m * 1] = p
                }
            }
            this._colls_loaded = true
        }
    }
}
function dhtmlXGridCellObject(a) {
    this.destructor = function () {
        this.cell.obj = null;
        this.cell = null;
        this.grid = null;
        this.base = null;
        return null
    };
    this.cell = a;
    this.getValue = function () {
        if ((this.cell.textContent) && (this.cell.textContent.tagName == "TEXTAREA")) {
            return this.cell.textContent.value
        } else {
            return this.cell.innerHTML._dhx_trim()
        }
    };
    this.getMathValue = function () {
        if (this.cell.original) {
            return this.cell.original
        } else {
            return this.getValue()
        }
    };
    this.getFont = function () {
        arOut = new Array(3);
        if (this.cell.style.fontFamily) {
            arOut[0] = this.cell.style.fontFamily
        }
        if (this.cell.style.fontWeight == "bold" || this.cell.parentNode.style.fontWeight == "bold") {
            arOut[1] = "bold"
        }
        if (this.cell.style.fontStyle == "italic" || this.cell.parentNode.style.fontWeight == "italic") {
            arOut[1] += "italic"
        }
        if (this.cell.style.fontSize) {
            arOut[2] = this.cell.style.fontSize
        } else {
            arOut[2] = ""
        }
        return arOut.join("-")
    };
    this.getTextColor = function () {
        if (this.cell.style.color) {
            return this.cell.style.color
        } else {
            return "#000000"
        }
    };
    this.getBgColor = function () {
        return this.cell.style.backgroundColor || "#FFFFFF"
    };
    this.getHorAlign = function () {
        if (this.cell.style.textAlign) {
            return this.cell.style.textAlign
        } else {
            if (this.cell.style.textAlign) {
                return this.cell.style.textAlign
            } else {
                return "left"
            }
        }
    };
    this.getWidth = function () {
        return this.cell.scrollWidth
    };
    this.setFont = function (b) {
        fntAr = b.split("-");
        this.cell.style.fontFamily = fntAr[0];
        this.cell.style.fontSize = fntAr[fntAr.length - 1];
        if (fntAr.length == 3) {
            if (/bold/.test(fntAr[1])) {
                this.cell.style.fontWeight = "bold"
            }
            if (/italic/.test(fntAr[1])) {
                this.cell.style.fontStyle = "italic"
            }
            if (/underline/.test(fntAr[1])) {
                this.cell.style.textDecoration = "underline"
            }
        }
    };
    this.setTextColor = function (b) {
        this.cell.style.color = b
    };
    this.setBgColor = function (b) {
        if (b == "") {
            b = null
        }
        this.cell.style.background = b
    };
    this.setHorAlign = function (b) {
        if (b.length == 1) {
            if (b == "c") {
                this.cell.style.textAlign = "center"
            } else {
                if (b == "l") {
                    this.cell.style.textAlign = "left"
                } else {
                    this.cell.style.textAlign = "right"
                }
            }
        } else {
            this.cell.style.textAlign = b
        }
    };
    this.wasChanged = function () {
        if (this.cell.wasChanged) {
            return true
        } else {
            return false
        }
    };
    this.isCheckbox = function () {
        var b = this.cell.firstChild;
        if (b && b.tagName == "INPUT") {
            type = b.type;
            if (type == "radio" || type == "checkbox") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    };
    this.isChecked = function () {
        if (this.isCheckbox()) {
            return this.cell.firstChild.checked
        }
    };
    this.isDisabled = function () {
        return this.cell._disabled
    };
    this.setChecked = function (b) {
        if (this.isCheckbox()) {
            if (b != "true" && b != 1) {
                b = false
            }
            this.cell.firstChild.checked = b
        }
    };
    this.setDisabled = function (b) {
        if (b != "true" && b != 1) {
            b = false
        }
        if (this.isCheckbox()) {
            this.cell.firstChild.disabled = b;
            if (this.disabledF) {
                this.disabledF(b)
            }
        }
        this.cell._disabled = b
    }
}
dhtmlXGridCellObject.prototype = {
    getAttribute: function (a) {
        return this.cell._attrs[a]
    }, setAttribute: function (a, b) {
        this.cell._attrs[a] = b
    }, getInput: function () {
        if (this.obj && (this.obj.tagName == "INPUT" || this.obj.tagName == "TEXTAREA")) {
            return this.obj
        }
        var a = (this.obj || this.cell).getElementsByTagName("TEXTAREA");
        if (!a.length) {
            a = (this.obj || this.cell).getElementsByTagName("INPUT")
        }
        return a[0]
    }
};
dhtmlXGridCellObject.prototype.setValue = function (a) {
    if ((typeof(a) != "number") && (!a || a.toString()._dhx_trim() == "")) {
        a = "&nbsp;";
        this.cell._clearCell = true
    } else {
        this.cell._clearCell = false
    }
    this.setCValue(a)
};
dhtmlXGridCellObject.prototype.getTitle = function () {
    return (_isIE ? this.cell.innerText : this.cell.textContent)
};
dhtmlXGridCellObject.prototype.setCValue = function (b, a) {
    this.cell.innerHTML = b;
    this.grid.callEvent("onCellChanged", [this.cell.parentNode.idd, this.cell._cellIndex, (arguments.length > 1 ? a : b)])
};
dhtmlXGridCellObject.prototype.setCTxtValue = function (a) {
    this.cell.innerHTML = "";
    this.cell.appendChild(document.createTextNode(a));
    this.grid.callEvent("onCellChanged", [this.cell.parentNode.idd, this.cell._cellIndex, a])
};
dhtmlXGridCellObject.prototype.setLabel = function (a) {
    this.cell.innerHTML = a
};
dhtmlXGridCellObject.prototype.getMath = function () {
    if (this._val) {
        return this.val
    } else {
        return this.getValue()
    }
};
function eXcell() {
    this.obj = null;
    this.val = null;
    this.changeState = function () {
        return false
    };
    this.edit = function () {
        this.val = this.getValue()
    };
    this.detach = function () {
        return false
    };
    this.getPosition = function (d) {
        var a = d;
        var c = 0;
        var b = 0;
        while (a.tagName != "BODY") {
            c += a.offsetLeft;
            b += a.offsetTop;
            a = a.offsetParent
        }
        return new Array(c, b)
    }
}
eXcell.prototype = new dhtmlXGridCellObject;
function eXcell_ed(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.cell.atag = (!this.grid.multiLine) ? "INPUT" : "TEXTAREA";
        this.val = this.getValue();
        this.obj = document.createElement(this.cell.atag);
        this.obj.setAttribute("autocomplete", "off");
        this.obj.style.height = (this.cell.offsetHeight - (_isIE ? 4 : 4)) + "px";
        this.obj.className = "dhx_combo_edit";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.style.textAlign;
        this.obj.onclick = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.onmousedown = function (b) {
            (b || event).cancelBubble = true
        };
        this.obj.value = this.val;
        this.cell.innerHTML = "";
        this.cell.appendChild(this.obj);
        this.obj.onselectstart = function (b) {
            if (!b) {
                b = event
            }
            b.cancelBubble = true;
            return true
        };
        if (_isIE) {
            this.obj.focus();
            this.obj.blur()
        }
        this.obj.focus()
    };
    this.getValue = function () {
        if ((this.cell.firstChild) && ((this.cell.atag) && (this.cell.firstChild.tagName == this.cell.atag))) {
            return this.cell.firstChild.value
        }
        if (this.cell._clearCell) {
            return ""
        }
        return this.cell.innerHTML.toString()._dhx_trim()
    };
    this.detach = function () {
        this.setValue(this.obj.value);
        return this.val != this.getValue()
    }
}
eXcell_ed.prototype = new eXcell;
function eXcell_edtxt(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.getValue = function () {
        if ((this.cell.firstChild) && ((this.cell.atag) && (this.cell.firstChild.tagName == this.cell.atag))) {
            return this.cell.firstChild.value
        }
        if (this.cell._clearCell) {
            return ""
        }
        return (_isIE ? this.cell.innerText : this.cell.textContent)
    };
    this.setValue = function (b) {
        if (!b || b.toString()._dhx_trim() == "") {
            b = " ";
            this.cell._clearCell = true
        } else {
            this.cell._clearCell = false
        }
        this.setCTxtValue(b)
    }
}
eXcell_edtxt.prototype = new eXcell_ed;
function eXcell_edn(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.getValue = function () {
        if ((this.cell.firstChild) && (this.cell.firstChild.tagName == "TEXTAREA")) {
            return this.cell.firstChild.value
        }
        if (this.cell._clearCell) {
            return ""
        }
        return this.cell._orig_value || this.grid._aplNFb(this.cell.innerHTML.toString()._dhx_trim(), this.cell._cellIndex)
    };
    this.detach = function () {
        var b = this.obj.value;
        this.setValue(b);
        return this.val != this.getValue()
    }
}
eXcell_edn.prototype = new eXcell_ed;
eXcell_edn.prototype.setValue = function (a) {
    if (!a || a.toString()._dhx_trim() == "") {
        this.cell._clearCell = true;
        return this.setCValue("&nbsp;", 0)
    } else {
        this.cell._clearCell = false;
        this.cell._orig_value = a
    }
    this.setCValue(this.grid._aplNF(a, this.cell._cellIndex), a)
};
function eXcell_ch(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.disabledF = function (b) {
        if ((b == true) || (b == 1)) {
            this.cell.innerHTML = this.cell.innerHTML.replace("item_chk0.", "item_chk0_dis.").replace("item_chk1.", "item_chk1_dis.")
        } else {
            this.cell.innerHTML = this.cell.innerHTML.replace("item_chk0_dis.", "item_chk0.").replace("item_chk1_dis.", "item_chk1.")
        }
    };
    this.changeState = function (b) {
        if (b === true && !this.grid.isActive) {
            if (window.globalActiveDHTMLGridObject != null && window.globalActiveDHTMLGridObject != this.grid && window.globalActiveDHTMLGridObject.isActive) {
                window.globalActiveDHTMLGridObject.setActive(false)
            }
            this.grid.setActive(true)
        }
        if ((!this.grid.isEditable) || (this.cell.parentNode._locked) || (this.isDisabled())) {
            return
        }
        if (this.grid.callEvent("onEditCell", [0, this.cell.parentNode.idd, this.cell._cellIndex])) {
            this.val = this.getValue();
            if (this.val == "1") {
                this.setValue("0")
            } else {
                this.setValue("1")
            }
            this.cell.wasChanged = true;
            this.grid.callEvent("onEditCell", [1, this.cell.parentNode.idd, this.cell._cellIndex]);
            this.grid.callEvent("onCheckbox", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")]);
            this.grid.callEvent("onCheck", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")])
        } else {
            this.editor = null
        }
    };
    this.getValue = function () {
        return this.cell.chstate ? this.cell.chstate.toString() : "0"
    };
    this.isCheckbox = function () {
        return true
    };
    this.isChecked = function () {
        if (this.getValue() == "1") {
            return true
        } else {
            return false
        }
    };
    this.setChecked = function (b) {
        this.setValue(b.toString())
    };
    this.detach = function () {
        return this.val != this.getValue()
    };
    this.edit = null
}
eXcell_ch.prototype = new eXcell;
eXcell_ch.prototype.setValue = function (b) {
    this.cell.style.verticalAlign = "middle";
    if (b) {
        b = b.toString()._dhx_trim();
        if ((b == "false") || (b == "0")) {
            b = ""
        }
    }
    if (b) {
        b = "1";
        this.cell.chstate = "1"
    } else {
        b = "0";
        this.cell.chstate = "0"
    }
    var a = this;
    this.setCValue("<img src='" + this.grid.imgURL + "item_chk" + b + ".gif' onclick='new eXcell_ch(this.parentNode).changeState(true); (arguments[0]||event).cancelBubble=true; '>", this.cell.chstate)
};
function eXcell_ra(a) {
    this.base = eXcell_ch;
    this.base(a);
    this.grid = a.parentNode.grid;
    this.disabledF = function (b) {
        if ((b == true) || (b == 1)) {
            this.cell.innerHTML = this.cell.innerHTML.replace("radio_chk0.", "radio_chk0_dis.").replace("radio_chk1.", "radio_chk1_dis.")
        } else {
            this.cell.innerHTML = this.cell.innerHTML.replace("radio_chk0_dis.", "radio_chk0.").replace("radio_chk1_dis.", "radio_chk1.")
        }
    };
    this.changeState = function (b) {
        if (b === false && this.getValue() == 1) {
            return
        }
        if ((!this.grid.isEditable) || (this.cell.parentNode._locked) || (this.isDisabled())) {
            return
        }
        if (this.grid.callEvent("onEditCell", [0, this.cell.parentNode.idd, this.cell._cellIndex]) != false) {
            this.val = this.getValue();
            if (this.val == "1") {
                this.setValue("0")
            } else {
                this.setValue("1")
            }
            this.cell.wasChanged = true;
            this.grid.callEvent("onEditCell", [1, this.cell.parentNode.idd, this.cell._cellIndex]);
            this.grid.callEvent("onCheckbox", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")]);
            this.grid.callEvent("onCheck", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")])
        } else {
            this.editor = null
        }
    };
    this.edit = null
}
eXcell_ra.prototype = new eXcell_ch;
eXcell_ra.prototype.setValue = function (b) {
    this.cell.style.verticalAlign = "middle";
    if (b) {
        b = b.toString()._dhx_trim();
        if ((b == "false") || (b == "0")) {
            b = ""
        }
    }
    if (b) {
        if (!this.grid._RaSeCol) {
            this.grid._RaSeCol = []
        }
        if (this.grid._RaSeCol[this.cell._cellIndex]) {
            var a = this.grid.cells4(this.grid._RaSeCol[this.cell._cellIndex]);
            a.setValue("0");
            if (this.grid.rowsAr[a.cell.parentNode.idd]) {
                this.grid.callEvent("onEditCell", [1, a.cell.parentNode.idd, a.cell._cellIndex])
            }
        }
        this.grid._RaSeCol[this.cell._cellIndex] = this.cell;
        b = "1";
        this.cell.chstate = "1"
    } else {
        b = "0";
        this.cell.chstate = "0"
    }
    this.setCValue("<img src='" + this.grid.imgURL + "radio_chk" + b + ".gif' onclick='new eXcell_ra(this.parentNode).changeState(false);'>", this.cell.chstate)
};
function eXcell_txt(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
        this.val = this.getValue();
        this.obj = document.createElement("TEXTAREA");
        this.obj.className = "dhx_textarea";
        this.obj.onclick = function (d) {
            (d || event).cancelBubble = true
        };
        var b = this.grid.getPosition(this.cell);
        this.obj.value = this.val;
        this.obj.style.display = "";
        this.obj.style.textAlign = this.cell.style.textAlign;
        document.body.appendChild(this.obj);
        if (_isOpera) {
            this.obj.onkeypress = function (d) {
                if (d.keyCode == 9 || d.keyCode == 27) {
                    return false
                }
            }
        }
        this.obj.onkeydown = function (f) {
            var d = (f || event);
            if (d.keyCode == 9 || d.keyCode == 27) {
                globalActiveDHTMLGridObject.entBox.focus();
                globalActiveDHTMLGridObject.doKey({keyCode: d.keyCode, shiftKey: d.shiftKey, srcElement: "0"});
                return false
            }
        };
        this.obj.style.left = b[0] + "px";
        this.obj.style.top = b[1] + this.cell.offsetHeight + "px";
        if (this.cell.offsetWidth < 200) {
            var c = 200
        } else {
            var c = this.cell.offsetWidth
        }
        this.obj.style.width = c + 16 + "px";
        if (_isIE) {
            this.obj.select();
            this.obj.value = this.obj.value
        }
        this.obj.focus()
    };
    this.detach = function () {
        var b = "";
        b = this.obj.value;
        if (b == "") {
            this.cell._clearCell = true
        } else {
            this.cell._clearCell = false
        }
        this.setValue(b);
        document.body.removeChild(this.obj);
        this.obj = null;
        return this.val != this.getValue()
    };
    this.getValue = function () {
        if (this.obj) {
            return this.obj.value
        }
        if (this.cell._clearCell) {
            return ""
        }
        if (typeof this.cell._brval != "undefined") {
            return this.cell._brval
        }
        if ((!this.grid.multiLine)) {
            return this.cell._brval || this.cell.innerHTML
        } else {
            return this.cell._brval || this.cell.innerHTML.replace(/<br[^>]*>/gi, "\n")._dhx_trim()
        }
    }
}
eXcell_txt.prototype = new eXcell;
function eXcell_txttxt(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.getValue = function () {
        if ((this.cell.firstChild) && (this.cell.firstChild.tagName == "TEXTAREA")) {
            return this.cell.firstChild.value
        }
        if (this.cell._clearCell) {
            return ""
        }
        if ((!this.grid.multiLine) && this.cell._brval) {
            return this.cell._brval
        }
        return (_isIE ? this.cell.innerText : this.cell.textContent)
    };
    this.setValue = function (b) {
        this.cell._brval = b;
        if (!b || b.toString()._dhx_trim() == "") {
            b = " ";
            this.cell._clearCell = true
        } else {
            this.cell._clearCell = false
        }
        this.setCTxtValue(b)
    }
}
eXcell_txttxt.prototype = new eXcell_txt;
eXcell_txt.prototype.setValue = function (a) {
    this.cell._brval = a;
    if (!a || a.toString()._dhx_trim() == "") {
        a = "&nbsp;";
        this.cell._clearCell = true
    } else {
        this.cell._clearCell = false
    }
    if ((!this.grid.multiLine) || this.cell._clearCell) {
        this.setCValue(a, this.cell._brval)
    } else {
        this.setCValue(a.replace(/\n/g, "<br/>"), a)
    }
};
function eXcell_co(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        this.combo = (this.cell._combo || this.grid.getCombo(this.cell._cellIndex));
        this.editable = true
    }
    this.shiftNext = function () {
        var b = this.list.options[this.list.selectedIndex + 1];
        if (b) {
            b.selected = true
        }
        this.obj.value = this.list.options[this.list.selectedIndex].text;
        return true
    };
    this.shiftPrev = function () {
        if (this.list.selectedIndex != 0) {
            var b = this.list.options[this.list.selectedIndex - 1];
            if (b) {
                b.selected = true
            }
            this.obj.value = this.list.options[this.list.selectedIndex].text
        }
        return true
    };
    this.edit = function () {
        this.val = this.getValue();
        this.text = this.getText()._dhx_trim();
        var d = this.grid.getPosition(this.cell);
        this.obj = document.createElement("TEXTAREA");
        this.obj.className = "dhx_combo_edit";
        this.obj.style.height = (this.cell.offsetHeight - (_isIE ? 4 : 4)) + "px";
        this.obj.wrap = "soft";
        this.obj.style.textAlign = this.cell.style.textAlign;
        this.obj.onclick = function (i) {
            (i || event).cancelBubble = true
        };
        this.obj.onmousedown = function (i) {
            (i || event).cancelBubble = true
        };
        this.obj.value = this.text;
        this.obj.onselectstart = function (i) {
            if (!i) {
                i = event
            }
            i.cancelBubble = true;
            return true
        };
        var f = this;
        this.obj.onkeyup = function (m) {
            var l = (m || event).keyCode;
            if (l == 38 || l == 40 || l == 9) {
                return
            }
            var n = this.readonly ? String.fromCharCode(l) : this.value;
            var o = f.list.options;
            for (var j = 0; j < o.length; j++) {
                if (o[j].text.indexOf(n) == 0) {
                    return o[j].selected = true
                }
            }
        };
        this.list = document.createElement("SELECT");
        this.list.className = "dhx_combo_select";
        this.list.style.width = this.cell.offsetWidth + "px";
        this.list.style.left = d[0] + "px";
        this.list.style.top = d[1] + this.cell.offsetHeight + "px";
        this.list.onclick = function (l) {
            var j = l || window.event;
            var i = j.target || j.srcElement;
            if (i.tagName == "OPTION") {
                i = i.parentNode
            }
            f.editable = false;
            f.grid.editStop();
            j.cancelBubble = true
        };
        var b = this.combo.getKeys();
        var e = false;
        var h = 0;
        for (var c = 0; c < b.length; c++) {
            var g = this.combo.get(b[c]);
            this.list.options[this.list.options.length] = new Option(g, b[c]);
            if (b[c] == this.val) {
                h = this.list.options.length - 1;
                e = true
            }
        }
        if (e == false) {
            this.list.options[this.list.options.length] = new Option(this.text, this.val === null ? "" : this.val);
            h = this.list.options.length - 1
        }
        document.body.appendChild(this.list);
        this.list.size = "6";
        this.cstate = 1;
        if (this.editable) {
            this.cell.innerHTML = ""
        } else {
            this.obj.style.width = "1px";
            this.obj.style.height = "1px"
        }
        this.cell.appendChild(this.obj);
        this.list.options[h].selected = true;
        if (this.editable) {
            this.obj.focus();
            this.obj.focus()
        }
        if (!this.editable) {
            this.obj.style.visibility = "hidden";
            this.list.focus();
            this.list.onkeydown = function (i) {
                i = i || window.event;
                f.grid.setActive(true);
                if (i.keyCode < 30) {
                    return f.grid.doKey({target: f.cell, keyCode: i.keyCode, shiftKey: i.shiftKey, ctrlKey: i.ctrlKey})
                }
            }
        }
    };
    this.getValue = function () {
        return ((this.cell.combo_value == window.undefined) ? "" : this.cell.combo_value)
    };
    this.detach = function () {
        if (this.val != this.getValue()) {
            this.cell.wasChanged = true
        }
        if (this.list.parentNode != null) {
            if (this.editable) {
                var b = this.list.options[this.list.selectedIndex];
                if (b && b.text == this.obj.value) {
                    this.setValue(this.list.value)
                } else {
                    var c = (this.cell._combo || this.grid.getCombo(this.cell._cellIndex));
                    var d = c.values._dhx_find(this.obj.value);
                    if (d != -1) {
                        this.setValue(c.keys[d])
                    } else {
                        this.setValue(this.cell.combo_value = this.obj.value)
                    }
                }
            } else {
                this.setValue(this.list.value)
            }
        }
        if (this.list.parentNode) {
            this.list.parentNode.removeChild(this.list)
        }
        if (this.obj.parentNode) {
            this.obj.parentNode.removeChild(this.obj)
        }
        return this.val != this.getValue()
    }
}
eXcell_co.prototype = new eXcell;
eXcell_co.prototype.getText = function () {
    return this.cell.innerHTML
};
eXcell_co.prototype.setValue = function (d) {
    if (typeof(d) == "object") {
        var c = dhx4.ajax.xpath("./option", d);
        if (c.length) {
            this.cell._combo = new dhtmlXGridComboObject()
        }
        for (var b = 0; b < c.length; b++) {
            this.cell._combo.put(c[b].getAttribute("value"), c[b].firstChild ? c[b].firstChild.data : "")
        }
        d = d.firstChild.data
    }
    if ((d || "").toString()._dhx_trim() == "") {
        d = null
    }
    this.cell.combo_value = d;
    if (d !== null) {
        var a = (this.cell._combo || this.grid.getCombo(this.cell._cellIndex)).get(d);
        this.setCValue(a === null ? d : a, d)
    } else {
        this.setCValue("&nbsp;", d)
    }
};
function eXcell_coro(a) {
    this.base = eXcell_co;
    this.base(a);
    this.editable = false
}
eXcell_coro.prototype = new eXcell_co;
function eXcell_cotxt(a) {
    this.base = eXcell_co;
    this.base(a)
}
eXcell_cotxt.prototype = new eXcell_co;
eXcell_cotxt.prototype.getText = function () {
    return (_isIE ? this.cell.innerText : this.cell.textContent)
};
eXcell_cotxt.prototype.setValue = function (c) {
    if (typeof(c) == "object") {
        var b = dhx4.ajax.xpath("./option", c);
        if (b.length) {
            this.cell._combo = new dhtmlXGridComboObject()
        }
        for (var a = 0; a < b.length; a++) {
            this.cell._combo.put(b[a].getAttribute("value"), b[a].firstChild ? b[a].firstChild.data : "")
        }
        c = c.firstChild.data
    }
    if ((c || "").toString()._dhx_trim() == "") {
        c = null
    }
    if (c !== null) {
        this.setCTxtValue((this.cell._combo || this.grid.getCombo(this.cell._cellIndex)).get(c) || c, c)
    } else {
        this.setCTxtValue(" ", c)
    }
    this.cell.combo_value = c
};
function eXcell_corotxt(a) {
    this.base = eXcell_co;
    this.base(a);
    this.editable = false
}
eXcell_corotxt.prototype = new eXcell_cotxt;
function eXcell_cp(a) {
    try {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    } catch (b) {
    }
    this.edit = function () {
        this.val = this.getValue();
        this.obj = document.createElement("SPAN");
        this.obj.style.border = "1px solid black";
        this.obj.style.position = "absolute";
        var c = this.grid.getPosition(this.cell);
        this.colorPanel(4, this.obj);
        document.body.appendChild(this.obj);
        this.obj.style.left = c[0] + "px";
        this.obj.style.zIndex = 1000;
        this.obj.style.top = c[1] + this.cell.offsetHeight + "px"
    };
    this.toolDNum = function (c) {
        if (c.length == 1) {
            c = "0" + c
        }
        return c
    };
    this.colorPanel = function (m, q) {
        var h = document.createElement("TABLE");
        q.appendChild(h);
        h.cellSpacing = 0;
        h.editor_obj = this;
        h.style.cursor = "default";
        h.onclick = function (n) {
            var j = n || window.event;
            var c = j.target || j.srcElement;
            var i = c.parentNode.parentNode.parentNode.editor_obj;
            if (i) {
                i.setValue(c._bg);
                i.grid.editStop()
            }
        };
        var f = 256 / m;
        for (var g = 0; g <= (256 / f); g++) {
            var d = h.insertRow(g);
            for (var l = 0; l <= (256 / f); l++) {
                for (var e = 0; e <= (256 / f); e++) {
                    R = new Number(f * g) - (g == 0 ? 0 : 1);
                    G = new Number(f * l) - (l == 0 ? 0 : 1);
                    B = new Number(f * e) - (e == 0 ? 0 : 1);
                    var p = this.toolDNum(R.toString(16)) + "" + this.toolDNum(G.toString(16)) + "" + this.toolDNum(B.toString(16));
                    var o = d.insertCell(l);
                    o.width = "10px";
                    o.innerHTML = "&nbsp;";
                    o.title = p.toUpperCase();
                    o.style.backgroundColor = "#" + p;
                    o._bg = "#" + p;
                    if (this.val != null && "#" + p.toUpperCase() == this.val.toUpperCase()) {
                        o.style.border = "2px solid white"
                    }
                }
            }
        }
    };
    this.getValue = function () {
        return this.cell.firstChild._bg || ""
    };
    this.getRed = function () {
        return Number(parseInt(this.getValue().substr(1, 2), 16))
    };
    this.getGreen = function () {
        return Number(parseInt(this.getValue().substr(3, 2), 16))
    };
    this.getBlue = function () {
        return Number(parseInt(this.getValue().substr(5, 2), 16))
    };
    this.detach = function () {
        if (this.obj.offsetParent != null) {
            document.body.removeChild(this.obj)
        }
        return this.val != this.getValue()
    }
}
eXcell_cp.prototype = new eXcell;
eXcell_cp.prototype.setValue = function (a) {
    this.setCValue("<div style='width:100%;height:" + ((this.grid.multiLine ? "100%" : 23)) + ";background-color:" + (a || "") + ";border:0px;'>&nbsp;</div>", a);
    this.cell.firstChild._bg = a
};
function eXcell_img(a) {
    try {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    } catch (b) {
    }
    this.getValue = function () {
        if (this.cell.firstChild.tagName == "IMG") {
            return this.cell.firstChild.src + (this.cell.titFl != null ? "^" + this.cell._brval : "")
        } else {
            if (this.cell.firstChild.tagName == "A") {
                var c = this.cell.firstChild.firstChild.src + (this.cell.titFl != null ? "^" + this.cell._brval : "");
                c += "^" + this.cell.lnk;
                if (this.cell.trg) {
                    c += "^" + this.cell.trg
                }
                return c
            }
        }
    };
    this.isDisabled = function () {
        return true
    }
}
eXcell_img.prototype = new eXcell;
eXcell_img.prototype.getTitle = function () {
    return this.cell._brval
};
eXcell_img.prototype.setValue = function (c) {
    var b = c;
    if ((c || "").indexOf("^") != -1) {
        var a = c.split("^");
        c = a[0];
        b = this.cell._attrs.title || a[1];
        if (a.length > 2) {
            this.cell.lnk = a[2];
            if (a[3]) {
                this.cell.trg = a[3]
            }
        }
        this.cell.titFl = "1"
    }
    if (!this.grid.multiLine) {
        this.setCValue("<img src='" + this.grid.iconURL + (c || "")._dhx_trim() + "' border='0' style='max-height:" + (this.grid._srdh - 4) + "px'>", c)
    } else {
        this.setCValue("<img src='" + this.grid.iconURL + (c || "")._dhx_trim() + "' border='0'>", c)
    }
    if (this.cell.lnk) {
        this.cell.innerHTML = "<a href='" + this.cell.lnk + "' target='" + this.cell.trg + "'>" + this.cell.innerHTML + "</a>"
    }
    this.cell._brval = b
};
function eXcell_price(a) {
    this.base = eXcell_ed;
    this.base(a);
    this.getValue = function () {
        if (this.cell.childNodes.length > 1) {
            return this.cell.childNodes[1].innerHTML.toString()._dhx_trim()
        } else {
            return "0"
        }
    }
}
eXcell_price.prototype = new eXcell_ed;
eXcell_price.prototype.setValue = function (b) {
    if (isNaN(parseFloat(b))) {
        b = this.val || 0
    }
    var a = "green";
    if (b < 0) {
        a = "red"
    }
    this.setCValue("<span>$</span><span style='padding-right:2px;color:" + a + ";'>" + b + "</span>", b)
};
function eXcell_dyn(a) {
    this.base = eXcell_ed;
    this.base(a);
    this.getValue = function () {
        return this.cell.firstChild.childNodes[1].innerHTML.toString()._dhx_trim()
    }
}
eXcell_dyn.prototype = new eXcell_ed;
eXcell_dyn.prototype.setValue = function (c) {
    if (!c || isNaN(Number(c))) {
        if (c !== "") {
            c = 0
        }
    }
    if (c > 0) {
        var b = "green";
        var a = "dyn_up.gif"
    } else {
        if (c == 0) {
            var b = "black";
            var a = "dyn_.gif"
        } else {
            var b = "red";
            var a = "dyn_down.gif"
        }
    }
    this.setCValue("<div style='position:relative;padding-right:2px; width:100%;overflow:hidden; white-space:nowrap;'><img src='" + this.grid.imgURL + "" + a + "' height='15' style='position:absolute;top:0px;left:0px;'><span style=' padding-left:20px; width:100%;color:" + b + ";'>" + c + "</span></div>", c)
};
function eXcell_ro(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
    };
    this.isDisabled = function () {
        return true
    };
    this.getValue = function () {
        return this.cell._clearCell ? "" : this.cell.innerHTML.toString()._dhx_trim()
    }
}
eXcell_ro.prototype = new eXcell;
window.eXcell_hidden = function (a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid
    }
    this.edit = function () {
    };
    this.isDisabled = function () {
        return true
    };
    this.getValue = function () {
        return this.cell.val
    }
};
eXcell_hidden.prototype = new eXcell;
eXcell_hidden.prototype.setValue = function (a) {
    this.cell.val = a
};
function eXcell_ron(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    this.edit = function () {
    };
    this.isDisabled = function () {
        return true
    };
    this.getValue = function () {
        return this.cell._clearCell ? "" : this.cell._orig_value || this.grid._aplNFb(this.cell.innerHTML.toString()._dhx_trim(), this.cell._cellIndex).toString()
    }
}
eXcell_ron.prototype = new eXcell;
eXcell_ron.prototype.setValue = function (a) {
    if (a === 0) {
    } else {
        if (!a || a.toString()._dhx_trim() == "") {
            this.setCValue("&nbsp;");
            return this.cell._clearCell = true
        }
    }
    this.cell._orig_value = a;
    this.cell._clearCell = false;
    this.setCValue(a ? this.grid._aplNF(a, this.cell._cellIndex) : "0")
};
function eXcell_rotxt(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    this.edit = function () {
    };
    this.isDisabled = function () {
        return true
    };
    this.setValue = function (b) {
        if (!b) {
            b = " ";
            this.cell._clearCell = true
        } else {
            this.cell._clearCell = false
        }
        this.setCTxtValue(b)
    };
    this.getValue = function () {
        if (this.cell._clearCell) {
            return ""
        }
        return (_isIE ? this.cell.innerText : this.cell.textContent)
    }
}
eXcell_rotxt.prototype = new eXcell;
function dhtmlXGridComboObject() {
    this.keys = new dhtmlxArray();
    this.values = new dhtmlxArray();
    this.put = function (b, c) {
        for (var a = 0; a < this.keys.length; a++) {
            if (this.keys[a] == b) {
                this.values[a] = c;
                return true
            }
        }
        this.values[this.values.length] = c;
        this.keys[this.keys.length] = b
    };
    this.get = function (b) {
        for (var a = 0; a < this.keys.length; a++) {
            if (this.keys[a] == b) {
                return this.values[a]
            }
        }
        return null
    };
    this.clear = function () {
        this.keys = new dhtmlxArray();
        this.values = new dhtmlxArray()
    };
    this.remove = function (b) {
        for (var a = 0; a < this.keys.length; a++) {
            if (this.keys[a] == b) {
                this.keys._dhx_removeAt(a);
                this.values._dhx_removeAt(a);
                return true
            }
        }
    };
    this.size = function () {
        var a = 0;
        for (var b = 0; b < this.keys.length; b++) {
            if (this.keys[b] != null) {
                a++
            }
        }
        return a
    };
    this.getKeys = function () {
        var a = new Array(0);
        for (var b = 0; b < this.keys.length; b++) {
            if (this.keys[b] != null) {
                a[a.length] = this.keys[b]
            }
        }
        return a
    };
    this.save = function () {
        this._save = new Array();
        for (var a = 0; a < this.keys.length; a++) {
            this._save[a] = [this.keys[a], this.values[a]]
        }
    };
    this.restore = function () {
        if (this._save) {
            this.keys[a] = new Array();
            this.values[a] = new Array();
            for (var a = 0; a < this._save.length; a++) {
                this.keys[a] = this._save[a][0];
                this.values[a] = this._save[a][1]
            }
        }
    };
    return this
}
function Hashtable() {
    this.keys = new dhtmlxArray();
    this.values = new dhtmlxArray();
    return this
}
Hashtable.prototype = new dhtmlXGridComboObject;
if (typeof(window.dhtmlXCellObject) != "undefined") {
    dhtmlXCellObject.prototype.attachGrid = function () {
        this.callEvent("_onBeforeContentAttach", ["grid"]);
        var a = document.createElement("DIV");
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.position = "relative";
        a.style.overflow = "hidden";
        this._attachObject(a);
        this.dataType = "grid";
        this.dataObj = new dhtmlXGridObject(a);
        this.dataObj.setSkin(this.conf.skin);
        if (typeof(window.dhtmlXTabBarCell) == "function" && this instanceof window.dhtmlXTabBarCell && navigator.userAgent.match(/7[\.\d]* mobile/gi) != null && navigator.userAgent.match(/AppleWebKit/gi) != null) {
            this.dataObj.objBox.style.webkitOverflowScrolling = "auto"
        }
        if (this.conf.skin == "dhx_skyblue" && typeof(window.dhtmlXWindowsCell) == "function" && this instanceof window.dhtmlXWindowsCell) {
            this.dataObj.entBox.style.border = "1px solid #a4bed4";
            this.dataObj._sizeFix = 0
        } else {
            this.dataObj.entBox.style.border = "0px solid white";
            this.dataObj._sizeFix = 2
        }
        a = null;
        this.callEvent("_onContentAttach", []);
        return this.dataObj
    }
}
dhtmlXGridObject.prototype.enableDragAndDrop = function (a) {
    if (a == "temporary_disabled") {
        this.dADTempOff = false;
        a = true
    } else {
        this.dADTempOff = true
    }
    this.dragAndDropOff = dhx4.s2b(a);
    this._drag_validate = true;
    if (a) {
        this.objBox.ondragstart = function (b) {
            (b || event).cancelBubble = true;
            return false
        }
    }
};
dhtmlXGridObject.prototype.setDragBehavior = function (a) {
    this.dadmodec = this.dadmodefix = 0;
    switch (a) {
        case"child":
            this.dadmode = 0;
            this._sbmod = false;
            break;
        case"sibling":
            this.dadmode = 1;
            this._sbmod = false;
            break;
        case"sibling-next":
            this.dadmode = 1;
            this._sbmod = true;
            break;
        case"complex":
            this.dadmode = 2;
            this._sbmod = false;
            break;
        case"complex-next":
            this.dadmode = 2;
            this._sbmod = true;
            break
    }
};
dhtmlXGridObject.prototype.enableDragOrder = function (a) {
    this._dndorder = dhx4.s2b(a)
};
dhtmlXGridObject.prototype._checkParent = function (d, b) {
    var c = this._h2.get[d.idd].parent;
    if (!c.parent) {
        return
    }
    for (var a = 0; a < b.length; a++) {
        if (b[a] == c.id) {
            return true
        }
    }
    return this._checkParent(this.rowsAr[c.id], b)
};
dhtmlXGridObject.prototype._createDragNode = function (c, d) {
    this.editStop();
    if (window.dhtmlDragAndDrop.dragNode) {
        return null
    }
    if (!this.dADTempOff) {
        return null
    }
    c.parentObject = new Object();
    c.parentObject.treeNod = this;
    var j = this.callEvent("onBeforeDrag", [c.parentNode.idd, c._cellIndex, d]);
    if (!j) {
        return null
    }
    var f = new Array();
    f = this.getSelectedId();
    f = (((f) && (f != "")) ? f.split(this.delim) : []);
    var g = false;
    for (var b = 0; b < f.length; b++) {
        if (f[b] == c.parentNode.idd) {
            g = true
        }
    }
    if (!g) {
        this.selectRow(this.rowsAr[c.parentNode.idd], false, d.ctrlKey, false);
        if (!d.ctrlKey) {
            f = []
        }
        f[this.selMultiRows ? f.length : 0] = c.parentNode.idd
    }
    if (this.isTreeGrid()) {
        for (var b = f.length - 1; b >= 0; b--) {
            if (this._checkParent(this.rowsAr[f[b]], f)) {
                f.splice(b, 1)
            }
        }
    }
    var l = this;
    if (f.length && this._dndorder) {
        f.sort(function (i, e) {
            return (l.rowsAr[i].rowIndex > l.rowsAr[e].rowIndex ? 1 : -1)
        })
    }
    var a = this.getFirstParentOfType(_isIE ? d.srcElement : d.target, "TD");
    if (a) {
        this._dndExtra = a._cellIndex
    }
    this._dragged = new Array();
    for (var b = 0; b < f.length; b++) {
        if (this.rowsAr[f[b]]) {
            this._dragged[this._dragged.length] = this.rowsAr[f[b]];
            this.rowsAr[f[b]].treeNod = this
        }
    }
    c.parentObject.parentNode = c.parentNode;
    var h = document.createElement("div");
    h.innerHTML = (j !== true ? j : this.rowToDragElement(c.parentNode.idd));
    h.style.position = "absolute";
    h.className = "dragSpanDiv";
    return h
};
dhtmlXGridObject.prototype._createSdrgc = function () {
    this._sdrgc = document.createElement("DIV");
    this._sdrgc.innerHTML = "&nbsp;";
    this._sdrgc.className = "gridDragLine";
    this.objBox.appendChild(this._sdrgc)
};
function dragContext(t, s, r, q, p, o, m, n, i, g) {
    this.source = t || "grid";
    this.target = s || "grid";
    this.mode = r || "move";
    this.dropmode = q || "child";
    this.sid = p || 0;
    this.tid = o;
    this.sobj = m || null;
    this.tobj = n || null;
    this.sExtra = i || null;
    this.tExtra = g || null;
    return this
}
dragContext.prototype.valid = function () {
    if (this.sobj != this.tobj) {
        return true
    }
    if (this.sid == this.tid) {
        return false
    }
    if (this.target == "treeGrid") {
        var a = this.tid;
        while (a = this.tobj.getParentId(a)) {
            if (this.sid == a) {
                return false
            }
        }
    }
    return true
};
dragContext.prototype.close = function () {
    this.sobj = null;
    this.tobj = null
};
dragContext.prototype.copy = function () {
    return new dragContext(this.source, this.target, this.mode, this.dropmode, this.sid, this.tid, this.sobj, this.tobj, this.sExtra, this.tExtra)
};
dragContext.prototype.set = function (d, c) {
    this[d] = c;
    return this
};
dragContext.prototype.uid = function (d, c) {
    this.nid = this.sid;
    while (this.tobj.rowsAr[this.nid]) {
        this.nid = this.nid + ((new Date()).valueOf())
    }
    return this
};
dragContext.prototype.data = function () {
    if (this.sobj == this.tobj) {
        return this.sobj._getRowArray(this.sobj.rowsAr[this.sid])
    }
    if (this.source == "tree") {
        return this.tobj.treeToGridElement(this.sobj, this.sid, this.tid)
    } else {
        return this.tobj.gridToGrid(this.sid, this.sobj, this.tobj)
    }
};
dragContext.prototype.attrs = function () {
    if (this.source == "tree") {
        return {}
    } else {
        return this.sobj.rowsAr[this.sid]._attrs
    }
};
dragContext.prototype.childs = function () {
    if (this.source == "treeGrid") {
        return this.sobj._h2.get[this.sid]._xml_await ? this.sobj._h2.get[this.sid].has_kids : null
    }
    return null
};
dragContext.prototype.pid = function () {
    if (!this.tid) {
        return 0
    }
    if (!this.tobj._h2) {
        return 0
    }
    if (this.target == "treeGrid") {
        if (this.dropmode == "child") {
            return this.tid
        } else {
            var b = this.tobj.rowsAr[this.tid];
            var a = this.tobj._h2.get[b.idd].parent.id;
            if ((this.alfa) && (this.tobj._sbmod) && (b.nextSibling)) {
                var c = this.tobj._h2.get[b.nextSibling.idd].parent.id;
                if (c == this.tid) {
                    return this.tid
                }
                if (c != a) {
                    return c
                }
            }
            return a
        }
    }
};
dragContext.prototype.ind = function () {
    if (this.tid == window.unknown) {
        return this.tobj.rowsBuffer.length
    }
    if (this.target == "treeGrid") {
        if (this.dropmode == "child") {
            this.tobj.openItem(this.tid)
        } else {
            this.tobj.openItem(this.tobj.getParentId(this.tid))
        }
    }
    var a = this.tobj.rowsBuffer._dhx_find(this.tobj.rowsAr[this.tid]);
    if ((this.alfa) && (this.tobj._sbmod) && (this.dropmode == "sibling")) {
        var b = this.tobj.rowsAr[this.tid];
        if ((b.nextSibling) && (this._h2.get[b.nextSibling.idd].parent.id == this.tid)) {
            return a + 1
        }
    }
    return (a + 1 + ((this.target == "treeGrid" && a >= 0 && this.tobj._h2.get[this.tobj.rowsBuffer[a].idd].state == "minus") ? this.tobj._getOpenLenght(this.tobj.rowsBuffer[a].idd, 0) : 0))
};
dragContext.prototype.img = function () {
    if ((this.target != "grid") && (this.sobj._h2)) {
        return this.sobj.getItemImage(this.sid)
    } else {
        return null
    }
};
dragContext.prototype.slist = function () {
    var b = new Array();
    for (var a = 0; a < this.sid.length; a++) {
        b[b.length] = this.sid[a][(this.source == "tree") ? "id" : "idd"]
    }
    return b.join(",")
};
dhtmlXGridObject.prototype._drag = function (m, e, l, n) {
    if (this._realfake) {
        return this._fake._drag()
    }
    var j = (this.lastLanding);
    if (this._autoOpenTimer) {
        window.clearTimeout(this._autoOpenTimer)
    }
    var d = l.parentNode;
    var b = m.parentObject;
    if (!d.idd) {
        d.grid = this;
        this.dadmodefix = 0
    }
    var h = new dragContext(0, 0, 0, ((d.grid.dadmode == 1 || d.grid.dadmodec) ? "sibling" : "child"));
    if (b && b.childNodes) {
        h.set("source", "tree").set("sobj", b.treeNod).set("sid", h.sobj._dragged)
    } else {
        if (!b) {
            return true
        }
        if (b.treeNod.isTreeGrid && b.treeNod.isTreeGrid()) {
            h.set("source", "treeGrid")
        }
        h.set("sobj", b.treeNod).set("sid", h.sobj._dragged)
    }
    if (d.grid.isTreeGrid()) {
        h.set("target", "treeGrid")
    } else {
        h.set("dropmode", "sibling")
    }
    h.set("tobj", d.grid).set("tid", d.idd);
    if (((h.tobj.dadmode == 2) && (h.tobj.dadmodec == 1)) && (h.tobj.dadmodefix < 0)) {
        if (h.tobj.obj.rows[1].idd != h.tid) {
            h.tid = d.previousSibling.idd
        } else {
            h.tid = 0
        }
    }
    var a = this.getFirstParentOfType(n, "TD");
    if (a) {
        h.set("tExtra", a._cellIndex)
    }
    if (a) {
        h.set("sExtra", h.sobj._dndExtra)
    }
    if (h.sobj.dpcpy) {
        h.set("mode", "copy")
    }
    if (h.tobj._realfake) {
        h.tobj = h.tobj._fake
    }
    if (h.sobj._realfake) {
        h.sobj = h.sobj._fake
    }
    h.tobj._clearMove();
    if (b && b.treeNod && b.treeNod._nonTrivialRow) {
        b.treeNod._nonTrivialRow(this, h.tid, h.dropmode, b)
    } else {
        h.tobj.dragContext = h;
        if (!h.tobj.callEvent("onDrag", [h.slist(), h.tid, h.sobj, h.tobj, h.sExtra, h.tExtra])) {
            return h.tobj.dragContext = null
        }
        var o = new Array();
        if (typeof(h.sid) == "object") {
            var g = h.copy();
            for (var f = 0; f < h.sid.length; f++) {
                if (!g.set("alfa", (!f)).set("sid", h.sid[f][(h.source == "tree" ? "id" : "idd")]).valid()) {
                    continue
                }
                g.tobj._dragRoutine(g);
                if (g.target == "treeGrid" && g.dropmode == "child") {
                    g.tobj.openItem(g.tid)
                }
                o[o.length] = g.nid;
                g.set("dropmode", "sibling").set("tid", g.nid)
            }
            g.close()
        } else {
            h.tobj._dragRoutine(h)
        }
        if (h.tobj.laterLink) {
            h.tobj.laterLink()
        }
        h.tobj.callEvent("onDrop", [h.slist(), h.tid, o.join(","), h.sobj, h.tobj, h.sExtra, h.tExtra])
    }
    h.tobj.dragContext = null;
    h.close()
};
dhtmlXGridObject.prototype._dragRoutine = function (m) {
    if ((m.sobj == m.tobj) && (m.source == "grid") && (m.mode == "move") && !this._fake) {
        if (m.sobj._dndProblematic) {
            return
        }
        var h = m.sobj.rowsAr[m.sid];
        var i = m.sobj.rowsCol._dhx_find(h);
        m.sobj.rowsCol._dhx_removeAt(m.sobj.rowsCol._dhx_find(h));
        m.sobj.rowsBuffer._dhx_removeAt(m.sobj.rowsBuffer._dhx_find(h));
        m.sobj.rowsBuffer._dhx_insertAt(m.ind(), h);
        if (m.tobj._fake) {
            m.tobj._fake.rowsCol._dhx_removeAt(i);
            var n = m.tobj._fake.rowsAr[m.sid];
            n.parentNode.removeChild(n)
        }
        m.sobj._insertRowAt(h, m.ind() - (this.pagingOn ? ((this.currentPage - 1) * this.rowsBufferOutSize) : 0));
        m.nid = m.sid;
        m.sobj.callEvent("onGridReconstructed", []);
        return
    }
    var g;
    if (this._h2 && typeof m.tid != "undefined" && m.dropmode == "sibling" && (this._sbmod || m.tid)) {
        if (m.alfa && this._sbmod && this._h2.get[m.tid].childs.length) {
            this.openItem(m.tid);
            g = m.uid().tobj.addRowBefore(m.nid, m.data(), this._h2.get[m.tid].childs[0].id, m.img(), m.childs())
        } else {
            g = m.uid().tobj.addRowAfter(m.nid, m.data(), m.tid, m.img(), m.childs())
        }
    } else {
        g = m.uid().tobj.addRow(m.nid, m.data(), m.ind(), m.pid(), m.img(), m.childs())
    }
    g._attrs = m.attrs();
    if (m.source == "tree") {
        this.callEvent("onRowAdded", [m.nid]);
        var a = m.sobj._globalIdStorageFind(m.sid);
        if (a.childsCount) {
            var f = m.copy().set("tid", m.nid).set("dropmode", m.target == "grid" ? "sibling" : "child");
            for (var d = 0; d < a.childsCount; d++) {
                m.tobj._dragRoutine(f.set("sid", a.childNodes[d].id));
                if (m.mode == "move") {
                    d--
                }
            }
            f.close()
        }
    } else {
        m.tobj._copyUserData(m);
        this.callEvent("onRowAdded", [m.nid]);
        if ((m.source == "treeGrid")) {
            if (m.sobj == m.tobj) {
                g._xml = m.sobj.rowsAr[m.sid]._xml
            }
            var e = m.sobj._h2.get[m.sid];
            if ((e) && (e.childs.length)) {
                var f = m.copy().set("tid", m.nid);
                if (m.target == "grid") {
                    f.set("dropmode", "sibling")
                } else {
                    if (!f.tobj.kidsXmlFile) {
                        f.tobj.openItem(m.tid)
                    }
                    f.set("dropmode", "child")
                }
                var b = e.childs.length;
                if (!f.tobj.kidsXmlFile) {
                    for (var d = 0; d < b; d++) {
                        m.sobj.render_row_tree(null, e.childs[d].id);
                        m.tobj._dragRoutine(f.set("sid", e.childs[d].id));
                        if (b != e.childs.length) {
                            d--;
                            b = e.childs.length
                        }
                    }
                }
                f.close()
            }
        }
    }
    if (m.mode == "move") {
        m.sobj[(m.source == "tree") ? "deleteItem" : "deleteRow"](m.sid);
        if ((m.sobj == m.tobj) && (!m.tobj.rowsAr[m.sid])) {
            m.tobj.changeRowId(m.nid, m.sid);
            m.nid = m.sid
        }
    }
};
dhtmlXGridObject.prototype.gridToGrid = function (d, a, c) {
    var e = new Array();
    for (var b = 0; b < a.hdr.rows[0].cells.length; b++) {
        e[b] = a.cells(d, b).getValue()
    }
    return e
};
dhtmlXGridObject.prototype.checkParentLine = function (a, b) {
    if ((!this._h2) || (!b) || (!a)) {
        return false
    }
    if (a.id == b) {
        return true
    } else {
        return this.checkParentLine(a.parent, b)
    }
};
dhtmlXGridObject.prototype._dragIn = function (f, d, b, g) {
    if (!this.dADTempOff) {
        return 0
    }
    var a = this.isTreeGrid();
    var e = d.parentNode.idd ? d.parentNode : d.parentObject;
    if (this._drag_validate) {
        if (f.parentNode == d.parentNode) {
            return 0
        }
        if ((a) && (this == e.grid) && ((this.checkParentLine(this._h2.get[f.parentNode.idd], d.parentNode.idd)))) {
            return 0
        }
    }
    if (!this.callEvent("onDragIn", [e.idd || e.id, f.parentNode.idd, e.grid || e.treeNod, (f.grid || f.parentNode.grid)])) {
        return this._setMove(f, b, g, true)
    }
    this._setMove(f, b, g);
    if ((a) && (f.parentNode.expand != "")) {
        var c = this;
        this._autoOpenTimer = window.setTimeout(function () {
            c._autoOpenItem(null, c);
            c = null
        }, 1000);
        this._autoOpenId = f.parentNode.idd
    } else {
        if (this._autoOpenTimer) {
            window.clearTimeout(this._autoOpenTimer)
        }
    }
    return f
};
dhtmlXGridObject.prototype._autoOpenItem = function (a, b) {
    b.openItem(b._autoOpenId)
};
dhtmlXGridObject.prototype._dragOut = function (b) {
    this._clearMove();
    var a = b.parentNode.parentObject ? b.parentObject.id : b.parentNode.idd;
    this.callEvent("onDragOut", [a]);
    if (this._autoOpenTimer) {
        window.clearTimeout(this._autoOpenTimer)
    }
};
dhtmlXGridObject.prototype._setMove = function (f, b, h, e) {
    if (!f.parentNode.idd) {
        return
    }
    var c = dhx4.absTop(f);
    var a = dhx4.absTop(this.objBox);
    if ((c - a) > (parseInt(this.objBox.offsetHeight) - 50)) {
        this.objBox.scrollTop = parseInt(this.objBox.scrollTop) + 20
    }
    if ((c - a + parseInt(this.objBox.scrollTop)) < (parseInt(this.objBox.scrollTop) + 30)) {
        this.objBox.scrollTop = parseInt(this.objBox.scrollTop) - 20
    }
    if (e) {
        return 0
    }
    if (this.dadmode == 2) {
        var g = h - c + (document.body.scrollTop || document.documentElement.scrollTop) - 2 - f.offsetHeight / 2;
        if ((Math.abs(g) - f.offsetHeight / 6) > 0) {
            this.dadmodec = 1;
            if (g < 0) {
                this.dadmodefix = -1
            } else {
                this.dadmodefix = 1
            }
        } else {
            this.dadmodec = 0
        }
    } else {
        this.dadmodec = this.dadmode
    }
    if (this.dadmodec) {
        if (!this._sdrgc) {
            this._createSdrgc()
        }
        this._sdrgc.style.display = "block";
        this._sdrgc.style.top = c - a + parseInt(this.objBox.scrollTop) + ((this.dadmodefix >= 0) ? f.offsetHeight : 0) + "px"
    } else {
        this._llSelD = f;
        if (f.parentNode.tagName == "TR") {
            for (var d = 0; d < f.parentNode.childNodes.length; d++) {
                var g = f.parentNode.childNodes[d];
                g._bgCol = g.style.backgroundColor;
                g.style.backgroundColor = "#FFCCCC"
            }
        }
    }
};
dhtmlXGridObject.prototype._clearMove = function () {
    if (this._sdrgc) {
        this._sdrgc.style.display = "none"
    }
    if ((this._llSelD) && (this._llSelD.parentNode.tagName == "TR")) {
        var b = this._llSelD.parentNode.childNodes;
        for (var a = 0; a < b.length; a++) {
            b[a].style.backgroundColor = b[a]._bgCol
        }
    }
    this._llSelD = null
};
dhtmlXGridObject.prototype.rowToDragElement = function (a) {
    var b = this.cells(a, 0).getValue();
    return b
};
dhtmlXGridObject.prototype._copyUserData = function (d) {
    if (!d.tobj.UserData[d.nid] || d.tobj != d.sobj) {
        d.tobj.UserData[d.nid] = new Hashtable()
    } else {
        return
    }
    var b = d.sobj.UserData[d.sid];
    var a = d.tobj.UserData[d.nid];
    if (b) {
        a.keys = a.keys.concat(b.keys);
        a.values = a.values.concat(b.values)
    }
};
dhtmlXGridObject.prototype.moveRow = function (c, d, a, b) {
    switch (d) {
        case"row_sibling":
            this.moveRowTo(c, a, "move", "sibling", this, b);
            break;
        case"up":
            this.moveRowUp(c);
            break;
        case"down":
            this.moveRowDown(c);
            break
    }
};
dhtmlXGridObject.prototype._nonTrivialNode = function (m, l, g, h, c) {
    if ((m.callEvent) && (!c)) {
        if (!m.callEvent("onDrag", [h.idd, l.id, (g ? g.id : null), this, m])) {
            return false
        }
    }
    var j = h.idd;
    var a = j;
    while (m._idpull[a]) {
        a += (new Date()).getMilliseconds().toString()
    }
    var e = (this.isTreeGrid() ? this.getItemImage(j) : "");
    if (g) {
        for (d = 0; d < l.childsCount; d++) {
            if (l.childNodes[d] == g) {
                break
            }
        }
        if (d != 0) {
            g = l.childNodes[d - 1]
        } else {
            st = "TOP";
            g = ""
        }
    }
    var b = m._attachChildNode(l, a, this.gridToTreeElement(m, a, j), "", e, e, e, "", "", g);
    if (this._h2) {
        var f = this._h2.get[j];
        if (f.childs.length) {
            for (var d = 0; d < f.childs.length; d++) {
                this._nonTrivialNode(m, b, 0, this.rowsAr[f.childs[d].id], 1);
                if (!this.dpcpy) {
                    d--
                }
            }
        }
    }
    if (!this.dpcpy) {
        this.deleteRow(j)
    }
    if ((m.callEvent) && (!c)) {
        m.callEvent("onDrop", [a, l.id, (g ? g.id : null), this, m])
    }
};
dhtmlXGridObject.prototype.gridToTreeElement = function (b, c, a) {
    return this.cells(a, 0).getValue()
};
dhtmlXGridObject.prototype.treeToGridElement = function (d, e, a) {
    var b = new Array();
    var f = this.cellType._dhx_find("tree");
    if (f == -1) {
        f = 0
    }
    for (var c = 0; c < this.getColumnCount(); c++) {
        b[b.length] = (c != f) ? (d.getUserData(e, this.getColumnId(c)) || "") : d.getItemText(e)
    }
    return b
};
dhtmlXGridObject.prototype.moveRowTo = function (d, b, g, f, a, e) {
    var h = new dragContext((a || this).isTreeGrid() ? "treeGrid" : "grid", (e || this).isTreeGrid() ? "treeGrid" : "grid", g, f || "sibling", d, b, a || this, e || this);
    h.tobj._dragRoutine(h);
    h.close();
    return h.nid
};
dhtmlXGridObject.prototype.enableMercyDrag = function (a) {
    this.dpcpy = dhx4.s2b(a)
};
dhtmlXGridObject.prototype.toPDF = function (e, m, q, o, j, v) {
    var f = {row: (this.getSelectedRowId() || "").split(this.delim), col: this.getSelectedCellIndex()};
    if (f.row === null || f.col === -1) {
        f = false
    } else {
        if (f.row) {
            for (var r = 0; r < f.row.length; r++) {
                if (f.row[r]) {
                    var b = this.cells(f.row[r], f.col).cell;
                    b.parentNode.className = b.parentNode.className.replace(" rowselected", "");
                    b.className = b.className.replace(" cellselected", "");
                    f.row[r] = b
                }
            }
        } else {
            f = false
        }
    }
    m = m || "color";
    var s = m == "full_color";
    var a = this;
    a._asCDATA = true;
    if (typeof(v) === "undefined") {
        this.target = ' target="_blank"'
    } else {
        this.target = v
    }
    eXcell_ch.prototype.getContent = function () {
        return this.getValue()
    };
    eXcell_ra.prototype.getContent = function () {
        return this.getValue()
    };
    function u(x) {
        var E = [];
        for (var C = 1; C < a.hdr.rows.length; C++) {
            E[C] = [];
            for (var A = 0; A < a._cCount; A++) {
                var H = a.hdr.rows[C].childNodes[A];
                if (!E[C][A]) {
                    E[C][A] = [0, 0]
                }
                if (H) {
                    E[C][H._cellIndexS] = [H.colSpan, H.rowSpan]
                }
            }
        }
        var D = "<rows profile='" + x + "'";
        if (q) {
            D += " header='" + q + "'"
        }
        if (o) {
            D += " footer='" + o + "'"
        }
        D += "><head>" + a._serialiseExportConfig(E).replace(/^<head/, "<columns").replace(/head>$/, "columns>");
        for (var C = 2; C < a.hdr.rows.length; C++) {
            var d = 0;
            var K = a.hdr.rows[C];
            var F = "";
            for (var A = 0; A < a._cCount; A++) {
                if ((a._srClmn && !a._srClmn[A]) || (a._hrrar[A] && (!a._fake || A >= a._fake.hdrLabels.length))) {
                    d++;
                    continue
                }
                var J = E[C][A];
                var I = ((J[0] && J[0] > 1) ? ' colspan="' + J[0] + '" ' : "");
                if (J[1] && J[1] > 1) {
                    I += ' rowspan="' + J[1] + '" ';
                    d = -1
                }
                var w = "";
                var z = K;
                if (a._fake && A < a._fake._cCount) {
                    z = a._fake.hdr.rows[C]
                }
                for (var y = 0; y < z.cells.length; y++) {
                    if (z.cells[y]._cellIndexS == A) {
                        if (z.cells[y].getElementsByTagName("SELECT").length) {
                            w = ""
                        } else {
                            w = _isIE ? z.cells[y].innerText : z.cells[y].textContent
                        }
                        w = w.replace(/[ \n\r\t\xA0]+/, " ");
                        break
                    }
                }
                if (!w || w == " ") {
                    d++
                }
                F += "<column" + I + "><![CDATA[" + w + "]]></column>"
            }
            if (d != a._cCount) {
                D += "\n<columns>" + F + "</columns>"
            }
        }
        D += "</head>\n";
        D += l();
        return D
    }

    function c() {
        var d = [];
        if (j) {
            for (var w = 0; w < j.length; w++) {
                d.push(p(a.getRowIndex(j[w])))
            }
        } else {
            for (var w = 0; w < a.getRowsNum(); w++) {
                d.push(p(w))
            }
        }
        return d.join("\n")
    }

    function l() {
        var x = ["<foot>"];
        if (!a.ftr) {
            return ""
        }
        for (var y = 1; y < a.ftr.rows.length; y++) {
            x.push("<columns>");
            var C = a.ftr.rows[y];
            for (var w = 0; w < a._cCount; w++) {
                if (a._srClmn && !a._srClmn[w]) {
                    continue
                }
                if (a._hrrar[w] && (!a._fake || w >= a._fake.hdrLabels.length)) {
                    continue
                }
                for (var d = 0; d < C.cells.length; d++) {
                    var A = "";
                    var z = "";
                    if (C.cells[d]._cellIndexS == w) {
                        A = _isIE ? C.cells[d].innerText : C.cells[d].textContent;
                        A = A.replace(/[ \n\r\t\xA0]+/, " ");
                        if (C.cells[d].colSpan && C.cells[d].colSpan != 1) {
                            z = " colspan='" + C.cells[d].colSpan + "' "
                        }
                        if (C.cells[d].rowSpan && C.cells[d].rowSpan != 1) {
                            z = " rowspan='" + C.cells[d].rowSpan + "' "
                        }
                        break
                    }
                }
                x.push("<column" + z + "><![CDATA[" + A + "]]></column>")
            }
            x.push("</columns>")
        }
        x.push("</foot>");
        return x.join("\n")
    }

    function h(i, d) {
        return (window.getComputedStyle ? (window.getComputedStyle(i, null)[d]) : (i.currentStyle ? i.currentStyle[d] : null)) || ""
    }

    function p(y) {
        if (!a.rowsBuffer[y]) {
            return ""
        }
        var d = a.render_row(y);
        if (d.style.display == "none") {
            return ""
        }
        var w = a.isTreeGrid() ? ' level="' + a.getLevel(d.idd) + '"' : "";
        var D = "<row" + w + ">";
        for (var A = 0; A < a._cCount; A++) {
            if (((!a._srClmn) || (a._srClmn[A])) && (!a._hrrar[A] || (a._fake && A < a._fake.hdrLabels.length))) {
                var I = a.cells(d.idd, A);
                if (s) {
                    var z = h(I.cell, "color");
                    var H = h(I.cell, "backgroundColor");
                    var F = h(I.cell, "font-weight") || h(I.cell, "fontWeight");
                    var C = h(I.cell, "font-style") || h(I.cell, "fontStyle");
                    var E = h(I.cell, "text-align") || h(I.cell, "textAlign");
                    var x = h(I.cell, "font-family") || h(I.cell, "fontFamily");
                    if (H == "transparent" || H == "rgba(0, 0, 0, 0)") {
                        H = "rgb(255,255,255)"
                    }
                    D += "<cell bgColor='" + H + "' textColor='" + z + "' bold='" + F + "' italic='" + C + "' align='" + E + "' font='" + x + "'>"
                } else {
                    D += "<cell>"
                }
                D += "<![CDATA[" + (I.getContent ? I.getContent() : I.getTitle()) + "]]></cell>"
            }
        }
        return D + "</row>"
    }

    function n() {
        var d = "</rows>";
        return d
    }

    var t = document.createElement("div");
    t.style.display = "none";
    document.body.appendChild(t);
    var g = "form_" + a.uid();
    t.innerHTML = '<form id="' + g + '" method="post" action="' + e + '" accept-charset="utf-8"  enctype="application/x-www-form-urlencoded"' + this.target + '><input type="hidden" name="grid_xml" id="grid_xml"/> </form>';
    document.getElementById(g).firstChild.value = encodeURIComponent(u(m).replace("\u2013", "-") + c() + n());
    document.getElementById(g).submit();
    t.parentNode.removeChild(t);
    a = null;
    if (f && f.row.length) {
        for (var r = 0; r < f.row.length; r++) {
            f.row[r].parentNode.className += " rowselected";
            if (f.row.length == 1) {
                f.row[r].className += " cellselected"
            }
        }
    }
    f = null
};
dhtmlXGridObject.prototype._serialiseExportConfig = function (f) {
    function e(i) {
        if (typeof(i) !== "string") {
            return i
        }
        i = i.replace(/&/g, "&amp;");
        i = i.replace(/"/g, "&quot;");
        i = i.replace(/'/g, "&apos;");
        i = i.replace(/</g, "&lt;");
        i = i.replace(/>/g, "&gt;");
        return i
    }

    var b = "<head>";
    for (var c = 0; c < this.hdr.rows[0].cells.length; c++) {
        if (this._srClmn && !this._srClmn[c]) {
            continue
        }
        if (this._hrrar[c] && (!this._fake || c >= this._fake.hdrLabels.length)) {
            continue
        }
        var d = this.fldSort[c];
        if (d == "cus") {
            d = this._customSorts[c].toString();
            d = d.replace(/function[\ ]*/, "").replace(/\([^\f]*/, "")
        }
        var l = f[1][c];
        var g = ((l[1] && l[1] > 1) ? ' rowspan="' + l[1] + '" ' : "") + ((l[0] && l[0] > 1) ? ' colspan="' + l[0] + '" ' : "");
        b += "<column " + g + " width='" + this.getColWidth(c) + "' align='" + this.cellAlign[c] + "' type='" + this.cellType[c] + "' hidden='" + ((this.isColumnHidden && this.isColumnHidden(c)) ? "true" : "false") + "' sort='" + (d || "na") + "' color='" + (this.columnColor[c] || "") + "'" + (this.columnIds[c] ? (" id='" + this.columnIds[c] + "'") : "") + ">";
        if (this._asCDATA) {
            b += "<![CDATA[" + this.getColumnLabel(c) + "]]>"
        } else {
            b += this.getColumnLabel(c)
        }
        var h = this.combos[c] ? this.getCombo(c) : null;
        if (h) {
            for (var a = 0; a < h.keys.length; a++) {
                b += "<option value='" + e(h.keys[a]) + "'><![CDATA[" + h.values[a] + "]]></option>"
            }
        }
        b += "</column>"
    }
    return b += "</head>"
};
if (window.eXcell_sub_row_grid) {
    window.eXcell_sub_row_grid.prototype.getContent = function () {
        return ""
    }
}
dhtmlXGridObject.prototype.toExcel = function (a, d, g, f, b) {
    if (!document.getElementById("ifr")) {
        var e = document.createElement("iframe");
        e.style.display = "none";
        e.setAttribute("name", "dhx_export_iframe");
        e.setAttribute("src", "");
        e.setAttribute("id", "dhx_export_iframe");
        document.body.appendChild(e)
    }
    var c = ' target="dhx_export_iframe"';
    this.toPDF(a, d, g, f, b, c)
};
dhtmlXGridObject.prototype.filterBy = function (c, e, b) {
    if (this.isTreeGrid()) {
        return this.filterTreeBy(c, e, b)
    }
    if (this._f_rowsBuffer) {
        if (!b) {
            this.rowsBuffer = dhtmlxArray([].concat(this._f_rowsBuffer));
            if (this._fake) {
                this._fake.rowsBuffer = this.rowsBuffer
            }
        }
    } else {
        this._f_rowsBuffer = [].concat(this.rowsBuffer)
    }
    if (!this.rowsBuffer.length) {
        return
    }
    var f = true;
    this.dma(true);
    if (typeof(c) == "object") {
        for (var a = 0; a < e.length; a++) {
            this._filterA(c[a], e[a])
        }
    } else {
        this._filterA(c, e)
    }
    this.dma(false);
    if (this.pagingOn && this.rowsBuffer.length / this.rowsBufferOutSize < (this.currentPage - 1)) {
        this.changePage(0)
    }
    this._reset_view();
    this.callEvent("onGridReconstructed", [])
};
dhtmlXGridObject.prototype._filterA = function (b, c) {
    if (c == "") {
        return
    }
    var e = true;
    if (typeof(c) == "function") {
        e = false
    } else {
        c = (c || "").toString().toLowerCase()
    }
    if (!this.rowsBuffer.length) {
        return
    }
    for (var a = this.rowsBuffer.length - 1; a >= 0; a--) {
        if (e ? (this._get_cell_value(this.rowsBuffer[a], b).toString().toLowerCase().indexOf(c) == -1) : (!c.call(this, this._get_cell_value(this.rowsBuffer[a], b), this.rowsBuffer[a].idd))) {
            this.rowsBuffer.splice(a, 1)
        }
    }
};
dhtmlXGridObject.prototype.getFilterElement = function (a) {
    if (!this.filters) {
        return
    }
    for (var b = 0; b < this.filters.length; b++) {
        if (this.filters[b][1] == a) {
            return (this.filters[b][0].combo || this.filters[b][0])
        }
    }
    return null
};
dhtmlXGridObject.prototype.collectValues = function (e) {
    var p = this.dhxevs.data.oncollectvalues;
    if (p) {
        var n = true;
        for (var o in p) {
            var q = p[o].call(this, e);
            if (q !== true) {
                n = q || n
            }
        }
        if (n !== true) {
            return n
        }
    }
    if (this.isTreeGrid()) {
        return this.collectTreeValues(e)
    }
    this.dma(true);
    this._build_m_order();
    e = this._m_order ? this._m_order[e] : e;
    var l = {};
    var h = [];
    var b = this._f_rowsBuffer || this.rowsBuffer;
    for (var g = 0; g < b.length; g++) {
        var a = this._get_cell_value(b[g], e);
        if (a && (!b[g]._childIndexes || b[g]._childIndexes[e] != b[g]._childIndexes[e - 1])) {
            l[a] = true
        }
    }
    this.dma(false);
    var m = (this.combos[e] || (this._col_combos ? this._col_combos[e] : false));
    for (var j in l) {
        if (l[j] === true) {
            if (m) {
                if (m.get && m.get(j)) {
                    j = m.get(j)
                } else {
                    if (m.getOption && m.getOption(j)) {
                        j = m.getOption(j).text
                    }
                }
            }
            h.push(j)
        }
    }
    return h.sort()
};
dhtmlXGridObject.prototype._build_m_order = function () {
    if (this._c_order) {
        this._m_order = [];
        for (var a = 0; a < this._c_order.length; a++) {
            this._m_order[this._c_order[a]] = a
        }
    }
};
dhtmlXGridObject.prototype.filterByAll = function () {
    var d = [];
    var c = [];
    this._build_m_order();
    for (var e = 0; e < this.filters.length; e++) {
        var g = this._m_order ? this._m_order[this.filters[e][1]] : this.filters[e][1];
        if (g >= this._cCount) {
            continue
        }
        c.push(g);
        var h = this.filters[e][0].old_value = this.filters[e][0].value;
        if (this.filters[e][0]._filter) {
            h = this.filters[e][0]._filter()
        }
        var f;
        if (typeof h != "function" && (f = (this.combos[g] || (this._col_combos ? this._col_combos[g] : false)))) {
            if (f.values) {
                g = f.values._dhx_find(h);
                h = (g == -1) ? h : f.keys[g]
            } else {
                if (f.getOptionByLabel) {
                    h = (f.getOptionByLabel(h) ? f.getOptionByLabel(h).value : h)
                }
            }
        }
        d.push(h)
    }
    if (!this.callEvent("onFilterStart", [c, d])) {
        return
    }
    this.filterBy(c, d);
    if (this._cssEven) {
        this._fixAlterCss()
    }
    this.callEvent("onFilterEnd", [this.filters]);
    if (this._f_rowsBuffer && this.rowsBuffer.length == this._f_rowsBuffer.length) {
        this._f_rowsBuffer = null
    }
};
dhtmlXGridObject.prototype.makeFilter = function (e, c, b) {
    if (!this.filters) {
        this.filters = []
    }
    if (typeof(e) != "object") {
        e = document.getElementById(e)
    }
    if (!e) {
        return
    }
    var a = this;
    if (!e.style.width) {
        e.style.width = "90%"
    }
    if (e.tagName == "SELECT") {
        this.filters.push([e, c]);
        this._loadSelectOptins(e, c);
        e.onchange = function () {
            a.filterByAll()
        };
        if (_isIE) {
            e.style.marginTop = "1px"
        }
        this.attachEvent("onEditCell", function (g, f, h) {
            this._build_m_order();
            if (g == 2 && this.filters && (this._m_order ? (h == this._m_order[c]) : (h == c))) {
                this._loadSelectOptins(e, c)
            }
            return true
        })
    } else {
        if (e.tagName == "INPUT") {
            this.filters.push([e, c]);
            e.old_value = e.value = "";
            e.onkeydown = function () {
                if (this._timer) {
                    window.clearTimeout(this._timer)
                }
                this._timer = window.setTimeout(function () {
                    if (e.value != e.old_value) {
                        a.filterByAll();
                        e.old_value = e.value
                    }
                }, 500)
            }
        } else {
            if (e.tagName == "DIV") {
                this.filters.push([e, c]);
                e.style.padding = "0px";
                e.style.margin = "0px";
                if (!window.dhx_globalImgPath) {
                    window.dhx_globalImgPath = this.imgURL
                }
                var d = new dhtmlXCombo(e, "_filter", "90%");
                d.filterSelfA = d.filterSelf;
                d.filterSelf = function () {
                    if (this.getSelectedIndex() == 0) {
                        this.setComboText("")
                    }
                    this.filterSelfA.apply(this, arguments);
                    this.optionsArr[0].hide(false)
                };
                d.enableFilteringMode(true);
                e.combo = d;
                e.value = "";
                this._loadComboOptins(e, c);
                d.attachEvent("onChange", function () {
                    e.value = d.getSelectedValue();
                    if (e.value === null) {
                        e.value = ""
                    }
                    a.filterByAll()
                })
            }
        }
    }
    if (e.parentNode) {
        e.parentNode.className += " filter"
    }
    this._filters_ready()
};
dhtmlXGridObject.prototype.findCell = function (f, g, d, e) {
    var e = e || (function (i, h) {
            return h.toString().toLowerCase().indexOf(i) != -1
        });
    if (e === true) {
        e = function (i, h) {
            return h.toString().toLowerCase() == i
        }
    }
    var c = new Array();
    f = f.toString().toLowerCase();
    if (typeof d != "number") {
        d = d ? 1 : 0
    }
    if (!this.rowsBuffer.length) {
        return c
    }
    for (var b = (g || 0); b < this._cCount; b++) {
        if (this._h2) {
            this._h2.forEachChild(0, function (h) {
                if (d && c.length == d) {
                    return c
                }
                if (e(f, this._get_cell_value(h.buff, b))) {
                    c.push([h.id, b])
                }
            }, this)
        } else {
            for (var a = 0; a < this.rowsBuffer.length; a++) {
                if (e(f, this._get_cell_value(this.rowsBuffer[a], b))) {
                    c.push([this.rowsBuffer[a].idd, b]);
                    if (d && c.length == d) {
                        return c
                    }
                }
            }
        }
        if (typeof(g) != "undefined") {
            return c
        }
    }
    return c
};
dhtmlXGridObject.prototype.makeSearch = function (d, c, a) {
    if (typeof(d) != "object") {
        d = document.getElementById(d)
    }
    if (!d) {
        return
    }
    var b = this;
    if (d.tagName == "INPUT") {
        d.onkeypress = function () {
            if (this._timer) {
                window.clearTimeout(this._timer)
            }
            this._timer = window.setTimeout(function () {
                if (d.value == "") {
                    return
                }
                var e = b.findCell(d.value, c, true, a);
                if (e.length) {
                    if (b._h2) {
                        b.openItem(e[0][0])
                    }
                    b.selectCell(b.getRowIndex(e[0][0]), (c || 0))
                }
            }, 500)
        }
    }
    if (d.parentNode) {
        d.parentNode.className += " filter"
    }
};
dhtmlXGridObject.prototype._loadSelectOptins = function (e, h) {
    var a = this.collectValues(h);
    var b = e.value;
    e.innerHTML = "";
    e.options[0] = new Option("", "");
    var g = this._filter_tr ? this._filter_tr[h] : null;
    for (var d = 0; d < a.length; d++) {
        e.options[e.options.length] = new Option(g ? g(a[d]) : a[d], a[d])
    }
    e.value = b
};
dhtmlXGridObject.prototype.setSelectFilterLabel = function (b, a) {
    if (!this._filter_tr) {
        this._filter_tr = []
    }
    this._filter_tr[b] = a
};
dhtmlXGridObject.prototype._loadComboOptins = function (d, f) {
    if (!d.combo) {
        return
    }
    var a = this.collectValues(f);
    d.combo.clearAll();
    var e = [["", ""]];
    for (var b = 0; b < a.length; b++) {
        e.push([a[b], a[b]])
    }
    d.combo.addOption(e)
};
dhtmlXGridObject.prototype.refreshFilters = function () {
    if (!this.filters) {
        return
    }
    for (var a = 0; a < this.filters.length; a++) {
        switch (this.filters[a][0].tagName.toLowerCase()) {
            case"input":
                break;
            case"select":
                this._loadSelectOptins.apply(this, this.filters[a]);
                break;
            case"div":
                this._loadComboOptins.apply(this, this.filters[a]);
                break
        }
    }
};
dhtmlXGridObject.prototype._filters_ready = function (b, a) {
    this.attachEvent("onXLE", this.refreshFilters);
    this.attachEvent("onRowCreated", function (e, d) {
        if (this._f_rowsBuffer) {
            for (var c = 0; c < this._f_rowsBuffer.length; c++) {
                if (this._f_rowsBuffer[c].idd == e) {
                    return this._f_rowsBuffer[c] = d
                }
            }
        }
    });
    this.attachEvent("onClearAll", function () {
        this._f_rowsBuffer = null;
        if (!this.hdr.rows.length) {
            this.filters = []
        }
    });
    this.attachEvent("onSetSizes", this._filters_resize_combo);
    this.attachEvent("onResize", this._filters_resize_combo);
    this._filters_ready = function () {
    }
};
dhtmlXGridObject.prototype._filters_resize_combo = function () {
    if (!this.filters) {
        return
    }
    for (var a = 0; a < this.filters.length; a++) {
        if (this.filters[a][0].combo != null) {
            this.filters[a][0].combo.setSize(Math.round(this.filters[a][0].offsetWidth * 90 / 100))
        }
    }
    return true
};
dhtmlXGridObject.prototype._in_header_text_filter = function (b, a) {
    b.innerHTML = "<input type='text'>";
    b.onclick = b.onmousedown = function (c) {
        (c || event).cancelBubble = true;
        return true
    };
    b.onselectstart = function () {
        return (event.cancelBubble = true)
    };
    this.makeFilter(b.firstChild, a)
};
dhtmlXGridObject.prototype._in_header_text_filter_inc = function (b, a) {
    b.innerHTML = "<input type='text'>";
    b.onclick = b.onmousedown = function (c) {
        (c || event).cancelBubble = true;
        return true
    };
    b.onselectstart = function () {
        return (event.cancelBubble = true)
    };
    this.makeFilter(b.firstChild, a);
    b.firstChild._filter = function () {
        if (b.firstChild.value == "") {
            return ""
        }
        return function (c) {
            return (c.toString().toLowerCase().indexOf(b.firstChild.value.toLowerCase()) == 0)
        }
    };
    this._filters_ready()
};
dhtmlXGridObject.prototype._in_header_select_filter = function (b, a) {
    b.innerHTML = "<select></select>";
    b.onclick = function (c) {
        (c || event).cancelBubble = true;
        return false
    };
    this.makeFilter(b.firstChild, a)
};
dhtmlXGridObject.prototype._in_header_select_filter_strict = function (c, b) {
    c.innerHTML = "<select style='width:90%; font-size:8pt; font-family:Tahoma;'></select>";
    c.onclick = function (d) {
        (d || event).cancelBubble = true;
        return false
    };
    this.makeFilter(c.firstChild, b);
    var a = this.combos;
    c.firstChild._filter = function () {
        var d = c.firstChild.value;
        if (!d) {
            return ""
        }
        if (a[b]) {
            d = a[b].keys[a[b].values._dhx_find(d)]
        }
        d = d.toLowerCase();
        return function (e) {
            return (e.toString().toLowerCase() == d)
        }
    };
    this._filters_ready()
};
dhtmlXGridObject.prototype._in_header_combo_filter = function (b, a) {
    b.innerHTML = "<div style='width:100%; padding-left:2px; overflow:hidden; ' class='combo'></div>";
    b.onselectstart = function () {
        return (event.cancelBubble = true)
    };
    b.onclick = b.onmousedown = function (c) {
        (c || event).cancelBubble = true;
        return true
    };
    this.makeFilter(b.firstChild, a)
};
dhtmlXGridObject.prototype._search_common = function (b, a) {
    b.innerHTML = "<input type='text' style='width:90%; '>";
    b.onclick = b.onmousedown = function (c) {
        (c || event).cancelBubble = true;
        return true
    };
    b.onselectstart = function () {
        return (event.cancelBubble = true)
    }
};
dhtmlXGridObject.prototype._in_header_text_search = function (c, b, a) {
    this._search_common(c, b);
    this.makeSearch(c.firstChild, b)
};
dhtmlXGridObject.prototype._in_header_text_search_strict = function (b, a) {
    this._search_common(b, a);
    this.makeSearch(b.firstChild, a, true)
};
dhtmlXGridObject.prototype._in_header_numeric_filter = function (b, a) {
    this._in_header_text_filter.call(this, b, a);
    b.firstChild._filter = function () {
        var c = this.value;
        var e;
        var g = "==";
        var d = parseFloat(c.replace("=", ""));
        var f = null;
        if (c) {
            if (c.indexOf("..") != -1) {
                c = c.split("..");
                d = parseFloat(c[0]);
                f = parseFloat(c[1]);
                return function (h) {
                    if (h >= d && h <= f) {
                        return true
                    }
                    return false
                }
            }
            e = c.match(/>=|<=|>|</);
            if (e) {
                g = e[0];
                d = parseFloat(c.replace(g, ""))
            }
            return Function("v", " if (v " + g + " " + d + " ) return true; return false;")
        }
        return ""
    }
};
dhtmlXGridObject.prototype._in_header_master_checkbox = function (d, b, e) {
    d.innerHTML = e[0] + "<input type='checkbox' />" + e[1];
    var a = this;
    d.getElementsByTagName("input")[0].onclick = function (f) {
        a._build_m_order();
        var c = a._m_order ? a._m_order[b] : b;
        var g = this.checked ? 1 : 0;
        a.forEachRowA(function (i) {
            var h = this.cells(i, c);
            if (h.isCheckbox()) {
                h.setValue(g);
                h.cell.wasChanged = true
            }
            this.callEvent("onEditCell", [1, i, c, g]);
            this.callEvent("onCheckbox", [i, c, g])
        });
        (f || event).cancelBubble = true
    }
};
dhtmlXGridObject.prototype._in_header_stat_total = function (b, a, e) {
    var d = function () {
        var h = 0;
        this._build_m_order();
        var g = this._m_order ? this._m_order[a] : a;
        for (var f = 0; f < this.rowsBuffer.length; f++) {
            var c = parseFloat(this._get_cell_value(this.rowsBuffer[f], g));
            h += isNaN(c) ? 0 : c
        }
        return this._maskArr[g] ? this._aplNF(h, g) : (Math.round(h * 100) / 100)
    };
    this._stat_in_header(b, d, a, e, e)
};
dhtmlXGridObject.prototype._in_header_stat_multi_total = function (e, d, j) {
    var h = j[1].split(":");
    j[1] = "";
    for (var b = 0; b < h.length; b++) {
        h[b] = parseInt(h[b])
    }
    var f = function () {
        var m = 0;
        for (var l = 0; l < this.rowsBuffer.length; l++) {
            var i = 1;
            for (var c = 0; c < h.length; c++) {
                i *= parseFloat(this._get_cell_value(this.rowsBuffer[l], h[c]))
            }
            m += isNaN(i) ? 0 : i
        }
        return this._maskArr[d] ? this._aplNF(m, d) : (Math.round(m * 100) / 100)
    };
    var a = [];
    for (var g = 0; g < h.length; g++) {
        a[h[g]] = true
    }
    this._stat_in_header(e, f, a, j, j)
};
dhtmlXGridObject.prototype._in_header_stat_max = function (b, a, e) {
    var d = function () {
        this._build_m_order();
        var f = this._m_order ? this._m_order[a] : a;
        var g = -999999999;
        if (this.getRowsNum() == 0) {
            return "&nbsp;"
        }
        for (var c = 0; c < this.rowsBuffer.length; c++) {
            g = Math.max(g, parseFloat(this._get_cell_value(this.rowsBuffer[c], f)))
        }
        return this._maskArr[a] ? this._aplNF(g, a) : g
    };
    this._stat_in_header(b, d, a, e)
};
dhtmlXGridObject.prototype._in_header_stat_min = function (b, a, e) {
    var d = function () {
        this._build_m_order();
        var f = this._m_order ? this._m_order[a] : a;
        var g = 999999999;
        if (this.getRowsNum() == 0) {
            return "&nbsp;"
        }
        for (var c = 0; c < this.rowsBuffer.length; c++) {
            g = Math.min(g, parseFloat(this._get_cell_value(this.rowsBuffer[c], f)))
        }
        return this._maskArr[a] ? this._aplNF(g, a) : g
    };
    this._stat_in_header(b, d, a, e)
};
dhtmlXGridObject.prototype._in_header_stat_average = function (b, a, e) {
    var d = function () {
        this._build_m_order();
        var g = this._m_order ? this._m_order[a] : a;
        var i = 0;
        var h = 0;
        if (this.getRowsNum() == 0) {
            return "&nbsp;"
        }
        for (var f = 0; f < this.rowsBuffer.length; f++) {
            var c = parseFloat(this._get_cell_value(this.rowsBuffer[f], g));
            if (!isNaN(c)) {
                i += c;
                h++
            }
        }
        return this._maskArr[a] ? this._aplNF(i / h, a) : (Math.round(i / h * 100) / 100)
    };
    this._stat_in_header(b, d, a, e)
};
dhtmlXGridObject.prototype._in_header_stat_count = function (b, a, e) {
    var d = function () {
        return this.getRowsNum()
    };
    this._stat_in_header(b, d, a, e)
};
dhtmlXGridObject.prototype._stat_in_header = function (b, d, a, h) {
    var e = this;
    var g = function () {
        this.dma(true);
        b.innerHTML = (h[0] ? h[0] : "") + d.call(this) + (h[1] ? h[1] : "");
        this.dma(false);
        this.callEvent("onStatReady", [])
    };
    if (!this._stat_events) {
        this._stat_events = [];
        this.attachEvent("onClearAll", function () {
            if (!this.hdr.rows[1]) {
                for (var f = 0; f < this._stat_events.length; f++) {
                    for (var c = 0; c < 4; c++) {
                        this.detachEvent(this._stat_events[f][c])
                    }
                }
                this._stat_events = []
            }
        })
    }
    this._stat_events.push([this.attachEvent("onGridReconstructed", g), this.attachEvent("onXLE", g), this.attachEvent("onFilterEnd", g), this.attachEvent("onEditCell", function (c, i, f) {
        if (c == 2 && (f == a || (a && a[f]))) {
            g.call(this)
        }
        return true
    })]);
    b.innerHTML = ""
};
dhtmlXGridObject.prototype.loadCSVFile = function (b, a) {
    this.load(b, a, "csv")
};
dhtmlXGridObject.prototype.enableCSVAutoID = function (a) {
    this._csvAID = dhx4.s2b(a)
};
dhtmlXGridObject.prototype.enableCSVHeader = function (a) {
    this._csvHdr = dhx4.s2b(a)
};
dhtmlXGridObject.prototype.setCSVDelimiter = function (a) {
    this.csv.cell = a
};
dhtmlXGridObject.prototype._csvAID = true;
dhtmlXGridObject.prototype.loadCSVString = function (a) {
    this.parse(a, "csv")
};
dhtmlXGridObject.prototype.serializeToCSV = function (h) {
    this.editStop();
    if (this._mathSerialization) {
        this._agetm = "getMathValue"
    } else {
        if (this._strictText || h) {
            this._agetm = "getTitle"
        } else {
            this._agetm = "getValue"
        }
    }
    var f = [];
    if (this._csvHdr) {
        for (var e = 1; e < this.hdr.rows.length; e++) {
            var b = [];
            for (var g = 0; g < this._cCount; g++) {
                if ((!this._srClmn) || (this._srClmn[g])) {
                    b.push(this.getColumnLabel(g, e - 1))
                }
            }
            f.push(this.csvParser.str(b, this.csv.cell, this.csv.row))
        }
    }
    var g = 0;
    var d = this.rowsBuffer.length;
    for (g; g < d; g++) {
        var c = this._serializeRowToCVS(null, g);
        if (c != "") {
            f.push(c)
        }
    }
    return this.csvParser.block(f, this.csv.row)
};
dhtmlXGridObject.prototype._serializeRowToCVS = function (a, j, c, g) {
    var h = new Array();
    if (!a) {
        a = this.render_row(j);
        if (this._fake && !this._fake.rowsAr[a.idd]) {
            this._fake.render_row(j)
        }
    }
    if (!this._csvAID) {
        h[h.length] = a.idd
    }
    c = c || 0;
    g = g || this._cCount;
    var m = false;
    var d = c;
    while (a.childNodes[c]._cellIndex > d && c) {
        c--
    }
    for (var l = c; d < g; l++) {
        if (!a.childNodes[l]) {
            break
        }
        var b = a.childNodes[l]._cellIndex;
        if (((!this._srClmn) || (this._srClmn[b])) && (!this._serialize_visible || !this._hrrar[b])) {
            var e = a.childNodes[l];
            var f = this.cells(a.idd, b);
            while (d != b) {
                d++;
                h.push("");
                if (d >= g) {
                    break
                }
            }
            if (d >= g) {
                break
            }
            d++;
            if (f.cell) {
                zxVal = f[this._agetm]()
            } else {
                zxVal = ""
            }
            if ((this._chAttr) && (f.wasChanged())) {
                m = true
            }
            h[h.length] = ((zxVal === null) ? "" : zxVal);
            if (this._ecspn && e.colSpan && e.colSpan > 1) {
                e = e.colSpan - 1;
                for (var n = 0; n < e; n++) {
                    h[h.length] = "";
                    d++
                }
            }
        } else {
            d++
        }
    }
    if ((this._onlChAttr) && (!m)) {
        return ""
    }
    return this.csvParser.str(h, this.csv.cell, this.csv.row)
};
dhtmlXGridObject.prototype.toClipBoard = function (a) {
    if (window.clipboardData) {
        window.clipboardData.setData("Text", a)
    } else {
        (new Clipboard()).copy(a)
    }
};
dhtmlXGridObject.prototype.fromClipBoard = function () {
    if (window.clipboardData) {
        return window.clipboardData.getData("Text")
    } else {
        return (new Clipboard()).paste()
    }
};
dhtmlXGridObject.prototype.cellToClipboard = function (c, b) {
    if ((!c) || (!b && b !== 0)) {
        if (!this.selectedRows[0]) {
            return
        }
        c = this.selectedRows[0].idd;
        b = this.cell._cellIndex
    }
    var a = this.cells(c, b);
    this.toClipBoard(((a.getLabel ? a.getLabel() : a.getValue()) || "").toString())
};
dhtmlXGridObject.prototype.updateCellFromClipboard = function (c, b) {
    if ((!c) || (!b)) {
        if (!this.selectedRows[0]) {
            return
        }
        c = this.selectedRows[0].idd;
        b = this.cell._cellIndex
    }
    var a = this.cells(c, b);
    a[a.setImage ? "setLabel" : "setValue"](this.fromClipBoard())
};
dhtmlXGridObject.prototype.rowToClipboard = function (d) {
    var a = "";
    if (this._mathSerialization) {
        this._agetm = "getMathValue"
    } else {
        if (this._strictText) {
            this._agetm = "getTitle"
        } else {
            this._agetm = "getValue"
        }
    }
    this._serialize_visible = !this._fake;
    if (d) {
        a = this._serializeRowToCVS(this.getRowById(d))
    } else {
        var c = [];
        for (var b = 0; b < this.selectedRows.length; b++) {
            c[c.length] = this._serializeRowToCVS(this.selectedRows[b]);
            a = this.csvParser.block(c, this.csv.row)
        }
    }
    this._serialize_visible = false;
    this.toClipBoard(a)
};
dhtmlXGridObject.prototype.updateRowFromClipboard = function (e) {
    var a = this.fromClipBoard();
    if (!a) {
        return
    }
    if (e) {
        var d = this.getRowById(e)
    } else {
        var d = this.selectedRows[0]
    }
    if (!d) {
        return
    }
    var f = this.csvParser;
    a = f.unblock(a, this.csv.cell, this.csv.row)[0];
    if (!this._csvAID) {
        a.splice(0, 1)
    }
    for (var c = 0; c < a.length; c++) {
        var b = this.cells3(d, c);
        b[b.setImage ? "setLabel" : "setValue"](a[c])
    }
};
dhtmlXGridObject.prototype.csvParser = {
    block: function (a, b) {
        return a.join(b)
    }, unblock: function (f, a, e) {
        var d = (f || "").split(e);
        for (var b = 0; b < d.length; b++) {
            d[b] = (d[b] || "").split(a)
        }
        var c = d.length - 1;
        if (d[c].length == 1 && d[c][0] == "") {
            d.splice(c, 1)
        }
        return d
    }, str: function (b, a, c) {
        return b.join(a)
    }
};
dhtmlXGridObject.prototype.csvExtParser = {
    _quote: RegExp('"', "g"),
    _quote_esc: RegExp('\\\\"', "g"),
    block: function (a, b) {
        return a.join(b)
    },
    unblock: function (h, m, o) {
        var c = [[]];
        var b = 0;
        if (!h) {
            return c
        }
        var j = /^[ ]*"/;
        var g = /"[ ]*$/;
        var a = new RegExp(".*" + o + ".*$");
        var e = h.split(m);
        for (var d = 0; d < e.length; d++) {
            if (e[d].match(j)) {
                var n = e[d].replace(j, "");
                while (!e[d].match(g)) {
                    d++;
                    n += e[d]
                }
                c[b].push(n.replace(g, "").replace(this._quote_esc, '"'))
            } else {
                if (e[d].match(a)) {
                    var f = e[d].indexOf(o);
                    c[b].push(e[d].substr(0, f));
                    b++;
                    c[b] = [];
                    e[d] = e[d].substr(f + 1);
                    d--
                } else {
                    if (e[d] || d != e.length - 1) {
                        c[b].push(e[d])
                    }
                }
            }
        }
        var l = c.length - 1;
        if (l > 0 && !c[l].length) {
            c.splice(l, 1)
        }
        return c
    },
    str: function (c, a, d) {
        for (var b = 0; b < c.length; b++) {
            c[b] = '"' + c[b].replace(this._quote, '\\"') + '"'
        }
        return c.join(a)
    }
};
dhtmlXGridObject.prototype.addRowFromClipboard = function () {
    var a = this.fromClipBoard();
    if (!a) {
        return
    }
    var c = this.csvParser.unblock(a, this.csv.cell, this.csv.row);
    for (var b = 0; b < c.length; b++) {
        if (c[b]) {
            a = c[b];
            if (!a.length) {
                continue
            }
            if (this._csvAID) {
                this.addRow(this.getRowsNum() + 2, a)
            } else {
                if (this.rowsAr[a[0]]) {
                    a[0] = this.uid()
                }
                this.addRow(a[0], a.slice(1))
            }
        }
    }
};
dhtmlXGridObject.prototype.gridToClipboard = function () {
    this.toClipBoard(this.serializeToCSV())
};
dhtmlXGridObject.prototype.gridFromClipboard = function () {
    var a = this.fromClipBoard();
    if (!a) {
        return
    }
    this.loadCSVString(a)
};
dhtmlXGridObject.prototype.getXLS = function (f) {
    if (!this.xslform) {
        this.xslform = document.createElement("FORM");
        this.xslform.action = (f || "") + "xls.php";
        this.xslform.method = "post";
        this.xslform.target = (_isIE ? "_blank" : "");
        document.body.appendChild(this.xslform);
        var e = document.createElement("INPUT");
        e.type = "hidden";
        e.name = "csv";
        this.xslform.appendChild(e);
        var d = document.createElement("INPUT");
        d.type = "hidden";
        d.name = "csv_header";
        this.xslform.appendChild(d)
    }
    var g = this.serializeToCSV();
    this.xslform.childNodes[0].value = g;
    var c = [];
    var a = this._cCount;
    for (var b = 0; b < a; b++) {
        c.push(this.getHeaderCol(b))
    }
    c = c.join(",");
    this.xslform.childNodes[1].value = c;
    this.xslform.submit()
};
dhtmlXGridObject.prototype.printView = function (q, b) {
    var n = "<style>TD { font-family:Arial; text-align:center; padding-left:2px;padding-right:2px; } \n td.filter input, td.filter select { display:none; }	\n  </style>";
    var x = null;
    if (this._fake) {
        x = [].concat(this._hrrar);
        for (var w = 0; w < this._fake._cCount; w++) {
            this._hrrar[w] = null
        }
    }
    var m = document.location.port;
    var o = document.location.hostname;
    n += "<base  href='" + (document.location.protocol + "//" + o + (m ? (":" + m) : "") + document.location.pathname) + "'></base>";
    if (!this.parentGrid) {
        n += (q || "")
    }
    n += '<table width="100%" border="2px" cellpadding="0" cellspacing="0">';
    var p = Math.max(this.rowsBuffer.length, this.rowsCol.length);
    var l = this._cCount;
    var r = this._printWidth();
    n += '<tr class="header_row_1">';
    for (var w = 0; w < l; w++) {
        if (this._hrrar && this._hrrar[w]) {
            continue
        }
        var f = this.hdr.rows[1].cells[this.hdr.rows[1]._childIndexes ? this.hdr.rows[1]._childIndexes[parseInt(w)] : w];
        var a = (f.colSpan || 1);
        var C = (f.rowSpan || 1);
        for (var v = 1; v < a; v++) {
            r[w] += r[v]
        }
        n += '<td rowspan="' + C + '" width="' + r[w] + '%" style="background-color:lightgrey;" colspan="' + a + '">' + this.getHeaderCol(w) + "</td>";
        w += a - 1
    }
    n += "</tr>";
    for (var w = 2; w < this.hdr.rows.length; w++) {
        if (_isIE) {
            n += "<tr style='background-color:lightgrey' class='header_row_" + w + "'>";
            var e = this.hdr.rows[w].childNodes;
            for (var v = 0; v < e.length; v++) {
                if (!this._hrrar || !this._hrrar[e[v]._cellIndex]) {
                    n += e[v].outerHTML
                }
            }
            n += "</tr>"
        } else {
            n += "<tr class='header_row_" + w + "' style='background-color:lightgrey'>" + (this._fake ? this._fake.hdr.rows[w].innerHTML : "") + this.hdr.rows[w].innerHTML + "</tr>"
        }
    }
    for (var w = 0; w < p; w++) {
        n += "<tr>";
        if (this.rowsCol[w] && this.rowsCol[w]._cntr) {
            n += this.rowsCol[w].innerHTML.replace(/<img[^>]*>/gi, "") + "</tr>";
            continue
        }
        if (this.rowsCol[w] && this.rowsCol[w].style.display == "none") {
            continue
        }
        var h;
        if (this.rowsCol[w]) {
            h = this.rowsCol[w].idd
        } else {
            if (this.rowsBuffer[w]) {
                h = this.rowsBuffer[w].idd
            } else {
                continue
            }
        }
        for (var v = 0; v < l; v++) {
            if (this._hrrar && this._hrrar[v]) {
                continue
            }
            if (this.rowsAr[h] && this.rowsAr[h].tagName == "TR") {
                var A = this.cells(h, v);
                if (A._setState) {
                    var s = ""
                } else {
                    if (A.getContent) {
                        s = A.getContent()
                    } else {
                        if (A.getImage || A.combo) {
                            var s = A.cell.innerHTML
                        } else {
                            var s = A.getValue()
                        }
                    }
                }
            } else {
                var s = this._get_cell_value(this.rowsBuffer[w], v)
            }
            var t = this.columnColor[v] ? "background-color:" + this.columnColor[v] + ";" : "";
            var u = this.cellAlign[v] ? "text-align:" + this.cellAlign[v] + ";" : "";
            var y = A.getAttribute("colspan");
            n += '<td style="' + t + u + '" ' + (y ? 'colSpan="' + y + '"' : "") + ">" + (s === "" ? "&nbsp;" : s) + "</td>";
            if (y) {
                v += y - 1
            }
        }
        n += "</tr>";
        if (this.rowsCol[w] && this.rowsCol[w]._expanded) {
            var g = this.cells4(this.rowsCol[w]._expanded.ctrl);
            if (g.getSubGrid) {
                n += '<tr><td colspan="' + l + '">' + g.getSubGrid().printView() + "</td></tr>"
            } else {
                n += '<tr><td colspan="' + l + '">' + this.rowsCol[w]._expanded.innerHTML + "</td></tr>"
            }
        }
    }
    if (this.ftr) {
        for (var w = 1; w < this.ftr.childNodes[0].rows.length; w++) {
            n += "<tr style='background-color:lightgrey'>" + ((this._fake) ? this._fake.ftr.childNodes[0].rows[w].innerHTML : "") + this.ftr.childNodes[0].rows[w].innerHTML + "</tr>"
        }
    }
    n += "</table>";
    if (this.parentGrid) {
        return n
    }
    n += (b || "");
    var z = window.open("", "_blank");
    z.document.write(n);
    z.document.write("<script>window.onerror=function(){return true;}<\/script>");
    z.document.close();
    if (this._fake) {
        this._hrrar = x
    }
};
dhtmlXGridObject.prototype._printWidth = function () {
    var e = [];
    var d = 0;
    for (var c = 0; c < this._cCount; c++) {
        var a = this.getColWidth(c);
        e.push(a);
        d += a
    }
    var g = [];
    var b = 0;
    for (var c = 0; c < e.length; c++) {
        var f = Math.floor((e[c] / d) * 100);
        b += f;
        g.push(f)
    }
    g[g.length - 1] += 100 - b;
    return g
};
dhtmlXGridObject.prototype.enableBlockSelection = function (c) {
    if (typeof this._bs_mode == "undefined") {
        var a = this;
        this.obj.onmousedown = function (d) {
            if (a._bs_mode) {
                a._OnSelectionStart((d || event), this)
            }
            return true
        };
        this._CSVRowDelimiter = this.csv.row;
        this.attachEvent("onResize", function () {
            a._HideSelection();
            return true
        });
        this.attachEvent("onGridReconstructed", function () {
            a._HideSelection();
            return true
        });
        this.attachEvent("onFilterEnd", this._HideSelection)
    }
    if (c === false) {
        this._bs_mode = false;
        return this._HideSelection()
    } else {
        this._bs_mode = true
    }
    if (!window.dhx4.isIPad) {
        var b = this._clip_area = document.createElement("textarea");
        b.style.cssText = "position:absolute; width:1px; height:1px; overflow:hidden; color:transparent; background-color:transparent; bottom:1px; right:1px; border:none;";
        b.onkeydown = function (d) {
            d = d || event;
            if (d.keyCode == 86 && (d.ctrlKey || d.metaKey)) {
                a.pasteBlockFromClipboard()
            }
        };
        document.body.insertBefore(this._clip_area, document.body.firstChild);
        dhtmlxEvent(this.entBox, "click", function () {
            if (!a.editor && a._clip_area) {
                a._clip_area.select()
            }
        })
    }
};
dhtmlXGridObject.prototype.forceLabelSelection = function (a) {
    this._strictText = dhx4.s2b(a)
};
dhtmlXGridObject.prototype._OnSelectionStart = function (c, d) {
    var b = this;
    if (c.button == 2) {
        return
    }
    var e = c.srcElement || c.target;
    if (this.editor) {
        if (e.tagName && (e.tagName == "INPUT" || e.tagName == "TEXTAREA")) {
            return
        }
        this.editStop()
    }
    b.setActive(true);
    var g = this.getPosition(this.obj);
    var a = c.clientX - g[0] + (document.body.scrollLeft || (document.documentElement ? document.documentElement.scrollLeft : 0));
    var f = c.clientY - g[1] + (document.body.scrollTop || (document.documentElement ? document.documentElement.scrollTop : 0));
    this._CreateSelection(a - 4, f - 4);
    if (e == this._selectionObj) {
        this._HideSelection();
        this._startSelectionCell = null
    } else {
        while (e && (!e.tagName || e.tagName.toLowerCase() != "td")) {
            e = e.parentNode
        }
        this._startSelectionCell = e
    }
    if (this._startSelectionCell) {
        if (!this.callEvent("onBeforeBlockSelected", [this._startSelectionCell.parentNode.idd, this._startSelectionCell._cellIndex])) {
            return this._startSelectionCell = null
        }
    }
    this.obj.onmousedown = null;
    this.obj[_isIE ? "onmouseleave" : "onmouseout"] = function (h) {
        if (b._blsTimer) {
            window.clearTimeout(b._blsTimer)
        }
    };
    this.obj.onmmold = this.obj.onmousemove;
    this._init_pos = [a, f];
    this._selectionObj.onmousemove = this.obj.onmousemove = function (h) {
        h = h || c;
        if (h.preventDefault) {
            h.preventDefault()
        } else {
            h.returnValue = false
        }
        b._OnSelectionMove(h)
    };
    this._oldDMP = document.body.onmouseup;
    document.body.onmouseup = function (h) {
        h = h || c;
        b._OnSelectionStop(h, this);
        return true
    };
    this.callEvent("onBeforeBlockSelection", []);
    document.body.onselectstart = function () {
        return false
    }
};
dhtmlXGridObject.prototype._getCellByPos = function (a, d) {
    a = a;
    if (this._fake) {
        a += this._fake.objBox.scrollWidth
    }
    d = d;
    var b = 0;
    for (var c = 0; c < this.obj.rows.length; c++) {
        d -= this.obj.rows[c].offsetHeight;
        if (d <= 0) {
            b = this.obj.rows[c];
            break
        }
    }
    if (!b || !b.idd) {
        return null
    }
    for (var c = 0; c < this._cCount; c++) {
        a -= this.getColWidth(c);
        if (a <= 0) {
            while (true) {
                if (b._childIndexes && b._childIndexes[c + 1] == b._childIndexes[c]) {
                    b = b.previousSibling
                } else {
                    return this.cells(b.idd, c).cell
                }
            }
        }
    }
    return null
};
dhtmlXGridObject.prototype._OnSelectionMove = function (e) {
    var q = this;
    this._ShowSelection();
    var m = this.getPosition(this.obj);
    var h = e.clientX - m[0] + (document.body.scrollLeft || (document.documentElement ? document.documentElement.scrollLeft : 0));
    var g = e.clientY - m[1] + (document.body.scrollTop || (document.documentElement ? document.documentElement.scrollTop : 0));
    if ((Math.abs(this._init_pos[0] - h) < 5) && (Math.abs(this._init_pos[1] - g) < 5)) {
        return this._HideSelection()
    }
    var o = this._endSelectionCell;
    if (this._startSelectionCell == null) {
        this._endSelectionCell = this._startSelectionCell = this.getFirstParentOfType(e.srcElement || e.target, "TD")
    } else {
        if (e.srcElement || e.target) {
            if ((e.srcElement || e.target).className == "dhtmlxGrid_selection") {
                this._endSelectionCell = (this._getCellByPos(h, g) || this._endSelectionCell)
            } else {
                var p = this.getFirstParentOfType(e.srcElement || e.target, "TD");
                if (p.parentNode.idd) {
                    this._endSelectionCell = p
                }
            }
        }
    }
    if (this._endSelectionCell) {
        if (!this.callEvent("onBeforeBlockSelected", [this._endSelectionCell.parentNode.idd, this._endSelectionCell._cellIndex])) {
            this._endSelectionCell = o
        }
    }
    var f = this.objBox.scrollLeft + this.objBox.clientWidth;
    var c = this.objBox.scrollTop + this.objBox.clientHeight;
    var j = this.objBox.scrollLeft;
    var i = this.objBox.scrollTop;
    var d = false;
    if (this._blsTimer) {
        window.clearTimeout(this._blsTimer)
    }
    if (h + 20 >= f) {
        this.objBox.scrollLeft = this.objBox.scrollLeft + 20;
        d = true
    } else {
        if (h - 20 < j) {
            this.objBox.scrollLeft = this.objBox.scrollLeft - 20;
            d = true
        }
    }
    if (g + 20 >= c && !this._realfake) {
        this.objBox.scrollTop = this.objBox.scrollTop + 20;
        d = true
    } else {
        if (g - 20 < i && !this._realfake) {
            this.objBox.scrollTop = this.objBox.scrollTop - 20;
            d = true
        }
    }
    this._selectionArea = this._RedrawSelectionPos(this._startSelectionCell, this._endSelectionCell);
    if (d) {
        var n = e.clientX;
        var l = e.clientY;
        this._blsTimer = window.setTimeout(function () {
            q._OnSelectionMove({clientX: n, clientY: l})
        }, 100)
    }
};
dhtmlXGridObject.prototype._OnSelectionStop = function (b) {
    var a = this;
    if (this._blsTimer) {
        window.clearTimeout(this._blsTimer)
    }
    this.obj.onmousedown = function (d) {
        if (a._bs_mode) {
            a._OnSelectionStart((d || b), this)
        }
        return true
    };
    this.obj.onmousemove = this.obj.onmmold || null;
    this._selectionObj.onmousemove = null;
    document.body.onmouseup = this._oldDMP || null;
    if (parseInt(this._selectionObj.style.width) < 2 && parseInt(this._selectionObj.style.height) < 2) {
        this._HideSelection()
    } else {
        var c = this.getFirstParentOfType(b.srcElement || b.target, "TD");
        if ((!c) || (!c.parentNode.idd)) {
            c = this._endSelectionCell
        }
        while (c && (!c.tagName || c.tagName.toLowerCase() != "td")) {
            c = c.parentNode
        }
        if (!c) {
            return this._HideSelection()
        }
        this._stopSelectionCell = c;
        this._selectionArea = this._RedrawSelectionPos(this._startSelectionCell, this._stopSelectionCell);
        this.callEvent("onBlockSelected", [])
    }
    document.body.onselectstart = function () {
    }
};
dhtmlXGridObject.prototype._RedrawSelectionPos = function (m, g) {
    if (m.parentNode.grid != g.parentNode.grid) {
        return this._selectionArea
    }
    var j = {};
    j.LeftTopCol = m._cellIndex;
    j.LeftTopRow = this.getRowIndex(m.parentNode.idd);
    j.RightBottomCol = g._cellIndex;
    j.RightBottomRow = this.getRowIndex(g.parentNode.idd);
    var d = m.offsetWidth;
    var c = m.offsetHeight;
    m = this.getPosition(m, this.obj);
    var n = g.offsetWidth;
    var h = g.offsetHeight;
    g = this.getPosition(g, this.obj);
    if (m[0] < g[0]) {
        var e = m[0];
        var f = g[0] + n
    } else {
        var i = j.RightBottomCol;
        j.RightBottomCol = j.LeftTopCol;
        j.LeftTopCol = i;
        var e = g[0];
        var f = m[0] + d
    }
    if (m[1] < g[1]) {
        var l = m[1];
        var a = g[1] + h
    } else {
        var i = j.RightBottomRow;
        j.RightBottomRow = j.LeftTopRow;
        j.LeftTopRow = i;
        var l = g[1];
        var a = m[1] + c
    }
    var o = f - e;
    var b = a - l;
    this._selectionObj.style.left = e + "px";
    this._selectionObj.style.top = l + "px";
    this._selectionObj.style.width = o + "px";
    this._selectionObj.style.height = b + "px";
    return j
};
dhtmlXGridObject.prototype._CreateSelection = function (a, c) {
    if (this._selectionObj == null) {
        var b = document.createElement("div");
        b.style.position = "absolute";
        b.style.display = "none";
        b.className = "dhtmlxGrid_selection";
        this._selectionObj = b;
        this._selectionObj.onmousedown = function (d) {
            d = d || event;
            if (d.button == 2 || (_isMacOS && d.ctrlKey)) {
                return this.parentNode.grid.callEvent("onBlockRightClick", ["BLOCK", d])
            }
        };
        this._selectionObj.oncontextmenu = function (d) {
            (d || event).cancelBubble = true;
            return false
        };
        this.objBox.appendChild(this._selectionObj)
    }
    this._selectionObj.style.width = "0px";
    this._selectionObj.style.height = "0px";
    this._selectionObj.style.left = a + "px";
    this._selectionObj.style.top = c + "px";
    this._selectionObj.startX = a;
    this._selectionObj.startY = c
};
dhtmlXGridObject.prototype._ShowSelection = function () {
    if (this._selectionObj) {
        this._selectionObj.style.display = ""
    }
};
dhtmlXGridObject.prototype._HideSelection = function () {
    if (this._selectionObj) {
        this._selectionObj.style.display = "none"
    }
    this._selectionArea = null;
    if (this._clip_area) {
        this._clip_area.value = "";
        this._clip_area.blur()
    }
};
dhtmlXGridObject.prototype.copyBlockToClipboard = function () {
    if (!this._clip_area) {
        return
    }
    if (this._selectionArea != null) {
        var c = new Array();
        if (this._mathSerialization) {
            this._agetm = "getMathValue"
        } else {
            if (this._strictText) {
                this._agetm = "getTitle"
            } else {
                this._agetm = "getValue"
            }
        }
        this._serialize_visible = true;
        for (var a = this._selectionArea.LeftTopRow; a <= this._selectionArea.RightBottomRow; a++) {
            var b = this._serializeRowToCVS(this.rowsBuffer[a], null, this._selectionArea.LeftTopCol, this._selectionArea.RightBottomCol + 1);
            if (!this._csvAID) {
                c[c.length] = b.substr(b.indexOf(this.csv.cell) + 1)
            } else {
                c[c.length] = b
            }
        }
        c = c.join(this._CSVRowDelimiter);
        this._clip_area.value = c;
        this._clip_area.select();
        this._serialize_visible = false
    }
};
dhtmlXGridObject.prototype.pasteBlockFromClipboard = function () {
    if (!this._clip_area) {
        return
    }
    this._clip_area.select();
    var a = this;
    window.setTimeout(function () {
        a._pasteBlockFromClipboard();
        a = null
    }, 1)
};
dhtmlXGridObject.prototype._pasteBlockFromClipboard = function () {
    var f = this._clip_area.value;
    if (!f) {
        return
    }
    if (this._selectionArea != null) {
        var q = this._selectionArea.LeftTopRow;
        var a = this._selectionArea.LeftTopCol
    } else {
        if (this.cell != null && !this.editor) {
            var q = this.getRowIndex(this.cell.parentNode.idd);
            var a = this.cell._cellIndex
        } else {
            return false
        }
    }
    f = this.csvParser.unblock(f, this.csv.cell, this.csv.row);
    var g = q + f.length;
    var o = a + f[0].length;
    if (o > this._cCount) {
        o = this._cCount
    }
    var d = 0;
    for (var h = q; h < g; h++) {
        var r = this.render_row(h);
        if (r == -1) {
            continue
        }
        var c = 0;
        for (var e = a; e < o; e++) {
            if (this._hrrar[e] && !this._fake) {
                o = Math.min(o + 1, this._cCount);
                continue
            }
            var m = this.cells3(r, e);
            if (m.isDisabled()) {
                c++;
                continue
            }
            if (this._onEditUndoRedo) {
                this._onEditUndoRedo(2, r.idd, e, f[d][c], m.getValue())
            }
            if (m.combo) {
                var p = m.combo.values;
                for (var b = 0; b < p.length; b++) {
                    if (f[d][c] == p[b]) {
                        m.setValue(m.combo.keys[b]);
                        p = null;
                        break
                    }
                }
                if (p != null && m.editable) {
                    m.setValue(f[d][c++])
                } else {
                    c++
                }
            } else {
                m[m.setImage ? "setLabel" : "setValue"](f[d][c++])
            }
            m.cell.wasChanged = true
        }
        this.callEvent("onRowPaste", [r.idd]);
        d++
    }
};
dhtmlXGridObject.prototype.getSelectedBlock = function () {
    if (this._selectionArea) {
        return this._selectionArea
    } else {
        if (this.getSelectedRowId() !== null) {
            return {
                LeftTopRow: this.getSelectedRowId(),
                LeftTopCol: this.getSelectedCellIndex(),
                RightBottomRow: this.getSelectedRowId(),
                RightBottomCol: this.getSelectedCellIndex()
            }
        } else {
            return null
        }
    }
};
dhtmlXGridObject.prototype.enableSmartRendering = function (c, b, a) {
    if (arguments.length > 2) {
        if (b && !this.rowsBuffer[b - 1]) {
            this.rowsBuffer[b - 1] = 0
        }
        b = a
    }
    this._srnd = dhx4.s2b(c);
    this._srdh = this._srdh || 20;
    this._dpref = b || 0
};
dhtmlXGridObject.prototype.enablePreRendering = function (a) {
    this._srnd_pr = parseInt(a || 50)
};
dhtmlXGridObject.prototype.forceFullLoading = function (a, e) {
    for (var c = 0; c < this.rowsBuffer.length; c++) {
        if (!this.rowsBuffer[c]) {
            var d = a || (this.rowsBuffer.length - c);
            if (this.callEvent("onDynXLS", [c, d])) {
                var b = this;
                this.load(this.xmlFileUrl + dhtmlx.url(this.xmlFileUrl) + "posStart=" + c + "&count=" + d, function () {
                    window.setTimeout(function () {
                        b.forceFullLoading(a, e)
                    }, 100)
                }, this._data_type)
            }
            return
        }
    }
    if (e) {
        e.call(this)
    }
};
dhtmlXGridObject.prototype.setAwaitedRowHeight = function (a) {
    this._srdh = parseInt(a)
};
dhtmlXGridObject.prototype._get_view_size = function () {
    return Math.floor(parseInt(this.entBox.offsetHeight) / this._srdh) + 2
};
dhtmlXGridObject.prototype._add_filler = function (g, a, b, d) {
    if (!a) {
        return null
    }
    var f = "__filler__";
    var e = this._prepareRow(f);
    e.firstChild.style.width = "1px";
    e.firstChild.style.borderWidth = e.firstChild.style.padding = e.firstChild.style.margin = "0px";
    for (var c = 1; c < e.childNodes.length; c++) {
        e.childNodes[c].style.display = "none"
    }
    e.firstChild.style.height = a * this._srdh + "px";
    b = b || this.rowsCol[g];
    if (b && b.nextSibling) {
        b.parentNode.insertBefore(e, b.nextSibling)
    } else {
        if (_isKHTML) {
            this.obj.appendChild(e)
        } else {
            this.obj.rows[0].parentNode.appendChild(e)
        }
    }
    this.callEvent("onAddFiller", [g, a, e, b, d]);
    return [g, a, e]
};
dhtmlXGridObject.prototype._update_srnd_view = function () {
    var f = Math.floor(this.objBox.scrollTop / this._srdh);
    var b = f + this._get_view_size();
    if (this.multiLine) {
        var g = this.objBox.scrollTop;
        f = 0;
        while (g > 0) {
            g -= this.rowsCol[f] ? this.rowsCol[f].offsetHeight : this._srdh;
            f++
        }
        b = f + this._get_view_size();
        if (f > 0) {
            f--
        }
    }
    b += (this._srnd_pr || 0);
    if (b > this.rowsBuffer.length) {
        b = this.rowsBuffer.length
    }
    for (var d = f; d < b; d++) {
        if (!this.rowsCol[d]) {
            var e = this._add_from_buffer(d);
            if (e == -1) {
                if (this.xmlFileUrl) {
                    if (this._dpref && this.rowsBuffer[b - 1]) {
                        var c = this._dpref ? this._dpref : (b - d);
                        var a = Math.max(0, Math.min(d, b - this._dpref));
                        this._current_load = [a, b - a]
                    } else {
                        this._current_load = [d, (this._dpref ? this._dpref : (b - d))]
                    }
                    if (this.callEvent("onDynXLS", this._current_load)) {
                        this.load(this.xmlFileUrl + dhtmlx.url(this.xmlFileUrl) + "posStart=" + this._current_load[0] + "&count=" + this._current_load[1], this._data_type)
                    }
                }
                return
            } else {
                if (this._tgle) {
                    this._updateLine(this._h2.get[this.rowsBuffer[d].idd], this.rowsBuffer[d]);
                    this._updateParentLine(this._h2.get[this.rowsBuffer[d].idd], this.rowsBuffer[d])
                }
                if (d && d == (this._realfake ? this._fake : this)["_r_select"]) {
                    this.selectCell(d, this.cell ? this.cell._cellIndex : 0, true)
                }
            }
        }
    }
    if (this._fake && !this._realfake && this.multiLine) {
        this._fake.objBox.scrollTop = this.objBox.scrollTop
    }
};
dhtmlXGridObject.prototype._add_from_buffer = function (d) {
    var e = this.render_row(d);
    if (e == -1) {
        return -1
    }
    if (e._attrs.selected || e._attrs.select) {
        this.selectRow(e, false, true);
        e._attrs.selected = e._attrs.select = null
    }
    if (!this._cssSP) {
        if (this._cssEven && d % 2 == 0) {
            e.className = this._cssEven + ((e.className.indexOf("rowselected") != -1) ? " rowselected " : " ") + (e._css || "")
        } else {
            if (this._cssUnEven && d % 2 == 1) {
                e.className = this._cssUnEven + ((e.className.indexOf("rowselected") != -1) ? " rowselected " : " ") + (e._css || "")
            }
        }
    } else {
        if (this._h2) {
            var a = this._h2.get[e.idd];
            e.className += " " + ((a.level % 2) ? (this._cssUnEven + " " + this._cssUnEven) : (this._cssEven + " " + this._cssEven)) + "_" + a.level + (this.rowsAr[a.id]._css || "")
        }
    }
    for (var b = 0; b < this._fillers.length; b++) {
        var c = this._fillers[b];
        if (c && c[0] <= d && (c[0] + c[1]) > d) {
            var g = d - c[0];
            if (g == 0) {
                this._insert_before(d, e, c[2]);
                this._update_fillers(b, -1, 1)
            } else {
                if (g == c[1] - 1) {
                    this._insert_after(d, e, c[2]);
                    this._update_fillers(b, -1, 0)
                } else {
                    this._fillers.push(this._add_filler(d + 1, c[1] - g - 1, c[2], 1));
                    this._insert_after(d, e, c[2]);
                    this._update_fillers(b, -c[1] + g, 0)
                }
            }
            return
        }
    }
};
dhtmlXGridObject.prototype._update_fillers = function (c, a, d) {
    var b = this._fillers[c];
    b[1] = b[1] + a;
    b[0] = b[0] + d;
    if (!b[1]) {
        this.callEvent("onRemoveFiller", [b[2]]);
        b[2].parentNode.removeChild(b[2]);
        this._fillers.splice(c, 1)
    } else {
        b[2].firstChild.style.height = parseFloat(b[2].firstChild.style.height) + a * this._srdh + "px";
        this.callEvent("onUpdateFiller", [b[2]])
    }
};
dhtmlXGridObject.prototype._insert_before = function (b, c, a) {
    a.parentNode.insertBefore(c, a);
    this.rowsCol[b] = c;
    this.callEvent("onRowInserted", [c, null, a, "before"])
};
dhtmlXGridObject.prototype._insert_after = function (b, c, a) {
    if (a.nextSibling) {
        a.parentNode.insertBefore(c, a.nextSibling)
    } else {
        a.parentNode.appendChild(c)
    }
    this.rowsCol[b] = c;
    this.callEvent("onRowInserted", [c, null, a, "after"])
};
if (typeof(window.dhtmlxValidation) != "undefined") {
    dhtmlxValidation.trackInput = function (c, d, b, a) {
        dhtmlxEvent(c, "keyup", function (f) {
            if (dhtmlxValidation._timer) {
                window.clearTimeout(dhtmlxValidation._timer);
                dhtmlxValidation._timer = null
            }
            dhtmlxValidation._timer = window.setTimeout(function () {
                if (!dhtmlxValidation.checkInput(c, d)) {
                    if (!b || b(c, c.value, d)) {
                        c.className += " dhtmlx_live_validation_error"
                    }
                } else {
                    c.className = c.className.replace(/[ ]*dhtmlx_live_validation_error/g, "");
                    if (a) {
                        a(c, c.value, d)
                    }
                }
            }, 250)
        })
    };
    dhtmlxValidation.checkInput = function (a, b) {
        return dhtmlxValidation.checkValue(a.value, b)
    };
    dhtmlxValidation.checkValue = function (c, d) {
        if (typeof d == "string") {
            d = d.split(",")
        }
        var a = true;
        for (var b = 0; b < d.length; b++) {
            if (!this["is" + d[b]]) {
                alert("Incorrect validation rule: " + d[b])
            } else {
                a = a && this["is" + d[b]](c)
            }
        }
        return a
    }
}
dhtmlXGridObject.prototype.enableValidation = function (b, a) {
    b = dhx4.s2b(b);
    if (b) {
        this._validators = {data: []}
    } else {
        this._validators = false
    }
    if (arguments.length > 1) {
        this._validators._live = a
    }
    if (!this._validators._event) {
        this._validators._event = this.attachEvent("onEditCell", this.validationEvent)
    }
};
dhtmlXGridObject.prototype.setColValidators = function (a) {
    if (!this._validators) {
        this.enableValidation(true)
    }
    if (typeof a == "string") {
        a = a.split(this.delim)
    }
    this._validators.data = a
};
dhtmlXGridObject.prototype.validationEvent = function (f, b, d, c, h) {
    var i = this._validators;
    if (!i) {
        return true
    }
    var g = (i.data[d] || this.cells(b, d).getAttribute("validate")) || "";
    if (f == 1 && g) {
        var e = this.editor || (this._fake || {}).editor;
        if (!e) {
            return true
        }
        e.cell.className = e.cell.className.replace(/[ ]*dhtmlx_validation_error/g, "");
        if (i._live) {
            var a = this;
            dhtmlxValidation.trackInput(e.getInput(), g, function (j, l, m) {
                return a.callEvent("onLiveValidationError", [b, d, l, j, m])
            }, function (j, l, m) {
                return a.callEvent("onLiveValidationCorrect", [b, d, l, j, m])
            })
        }
    }
    if (f == 2) {
        this.validateCell(b, d, g, c)
    }
    return true
};
dhtmlXGridObject.prototype.validateCell = function (g, e, f, d) {
    f = f || (this._validators.data[e] || this.cells(g, e).getAttribute("validate"));
    d = d || this.cells(g, e).getValue();
    if (!f) {
        return
    }
    var b = this.cells(g, e).cell;
    var a = true;
    if (typeof f == "string") {
        f = f.split(this.delim)
    }
    for (var c = 0; c < f.length; c++) {
        if (!dhtmlxValidation.checkValue(d, f[c])) {
            if (this.callEvent("onValidationError", [g, e, d, f[c]])) {
                b.className += " dhtmlx_validation_error"
            }
            a = false
        }
    }
    if (a) {
        this.callEvent("onValidationCorrect", [g, e, d, f]);
        b.className = b.className.replace(/[ ]*dhtmlx_validation_error/g, "")
    }
    return a
};
function eXcell_stree(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        if (!this.grid._sub_trees) {
            return
        }
        this._sub = this.grid._sub_trees[a._cellIndex];
        if (!this._sub) {
            return
        }
        this._sub = this._sub[0]
    }
    this.getValue = function () {
        return this.cell._val
    };
    this.setValue = function (b) {
        this.cell._val = b;
        b = this._sub.getItemText(this.cell._val);
        this.setCValue((b || "&nbsp;"), b)
    };
    this.edit = function () {
        this._sub.parentObject.style.display = "block";
        var c = this.grid.getPosition(this.cell);
        this._sub.parentObject.style.top = c[1] + "px";
        this._sub.parentObject.style.left = c[0] + "px";
        this._sub.parentObject.style.position = "absolute";
        var b = this.grid.editStop;
        this.grid.editStop = function () {
        };
        this.grid.editStop = b
    };
    this.detach = function () {
        this._sub.parentObject.style.display = "none";
        if (this.grid._sub_id != null) {
            var b = this.cell._val;
            this.setValue(this._sub.getSelectedItemId());
            this.grid._sub_id = null;
            return this.cell._val != b
        }
    }
}
eXcell_stree.prototype = new eXcell;
dhtmlXGridObject.prototype.setSubTree = function (a, b) {
    if (!this._sub_trees) {
        this._sub_trees = []
    }
    this._sub_trees[b] = [a];
    a.parentObject.style.display = "none";
    var c = this;
    a.parentObject.onclick = function (d) {
        (d || window.event).cancelBubble = true;
        return false
    };
    a.ev_onDblClick = null;
    a.attachEvent("onDblClick", function (d) {
        c._sub_id = d;
        c.editStop();
        return true
    });
    a._chRRS = true
};
function eXcell_link(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    this.isDisabled = function () {
        return true
    };
    this.edit = function () {
    };
    this.getValue = function () {
        if (this.cell.firstChild.getAttribute) {
            var b = this.cell.firstChild.getAttribute("target");
            return this.cell.firstChild.innerHTML + "^" + this.cell.firstChild.getAttribute("href") + (b ? ("^" + b) : "")
        } else {
            return ""
        }
    };
    this.setValue = function (c) {
        if ((typeof(c) != "number") && (!c || c.toString()._dhx_trim() == "")) {
            this.setCValue("&nbsp;", b);
            return (this.cell._clearCell = true)
        }
        var b = c.split("^");
        if (b.length == 1) {
            b[1] = ""
        } else {
            if (b.length > 1) {
                b[1] = "href='" + b[1] + "'";
                if (b.length == 3) {
                    b[1] += " target='" + b[2] + "'"
                } else {
                    b[1] += " target='_blank'"
                }
            }
        }
        this.setCValue("<a " + b[1] + " onclick='(_isIE?event:arguments[0]).cancelBubble = true;'>" + b[0] + "</a>", b)
    }
}
eXcell_link.prototype = new eXcell;
eXcell_link.prototype.getTitle = function () {
    var a = this.cell.firstChild;
    return ((a && a.tagName) ? a.getAttribute("href") : "")
};
eXcell_link.prototype.getContent = function () {
    var a = this.cell.firstChild;
    return ((a && a.tagName) ? a.innerHTML : "")
};
function eXcell_grid(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        if (!this.grid._sub_grids) {
            return
        }
        this._sub = this.grid._sub_grids[a._cellIndex];
        if (!this._sub) {
            return
        }
        this._sindex = this._sub[1];
        this._sub = this._sub[0]
    }
    this.getValue = function () {
        return this.cell.val
    };
    this.setValue = function (b) {
        this.cell.val = b;
        if (this._sub.getRowById(b)) {
            b = this._sub.cells(b, this._sindex);
            if (b) {
                b = b.getValue()
            } else {
                b = ""
            }
        }
        this.setCValue((b || "&nbsp;"), b)
    };
    this.edit = function () {
        this.val = this.cell.val;
        this._sub.entBox.style.display = "block";
        var c = this.grid.getPosition(this.cell);
        this._sub.entBox.style.top = c[1] + "px";
        this._sub.entBox.style.left = c[0] + "px";
        this._sub.entBox.style.position = "absolute";
        this._sub.setSizes();
        var b = this.grid.editStop;
        this.grid.editStop = function () {
        };
        if (this._sub.getRowById(this.cell.val)) {
            this._sub.setSelectedRow(this.cell.val)
        }
        this._sub.setActive(true);
        this.grid.editStop = b
    };
    this.detach = function () {
        var b = this.cell.val;
        this._sub.entBox.style.display = "none";
        if (this._sub.getSelectedId() === null) {
            return false
        }
        this.setValue(this._sub.getSelectedId());
        this.grid.setActive(true);
        return this.cell.val != b
    }
}
eXcell_grid.prototype = new eXcell;
dhtmlXGridObject.prototype.setSubGrid = function (b, a, d) {
    if (!this._sub_grids) {
        this._sub_grids = []
    }
    this._sub_grids[a] = [b, d];
    b.entBox.style.display = "none";
    var c = this;
    b.entBox.onclick = function (e) {
        (e || window.event).cancelBubble = true;
        return false
    };
    b.attachEvent("onRowSelect", function (e) {
        c.editStop();
        return true
    });
    b._chRRS = false
};
function eXcell_dhxCalendar(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        if (!this.grid._grid_calendarA) {
            var c = this.grid._grid_calendarA = new dhtmlxCalendarObject();
            this.grid.callEvent("onDhxCalendarCreated", [c]);
            var b = this.grid;
            c.attachEvent("onClick", function () {
                this._last_operation_calendar = true;
                window.setTimeout(function () {
                    b.editStop()
                }, 1);
                return true
            });
            var d = function (f) {
                (f || event).cancelBubble = true
            };
            dhtmlxEvent(c.base, "click", d);
            c = null
        }
    }
}
eXcell_dhxCalendar.prototype = new eXcell;
eXcell_dhxCalendar.prototype.edit = function () {
    var b = this.grid.getPosition(this.cell);
    this.grid._grid_calendarA._show(false, false);
    this.grid._grid_calendarA.setPosition(b[0], b[1] + this.cell.offsetHeight);
    this.grid._grid_calendarA._last_operation_calendar = false;
    this.grid.callEvent("onCalendarShow", [this.grid._grid_calendarA, this.cell.parentNode.idd, this.cell._cellIndex]);
    this.cell._cediton = true;
    this.val = this.cell.val;
    this._val = this.cell.innerHTML;
    var a = this.grid._grid_calendarA.draw;
    this.grid._grid_calendarA.draw = function () {
    };
    this.grid._grid_calendarA.setDateFormat((this.grid._dtmask || "%d/%m/%Y"));
    this.grid._grid_calendarA.setDate(this.val || (new Date()));
    this.grid._grid_calendarA.draw = a
};
eXcell_dhxCalendar.prototype.getDate = function () {
    if (this.cell.val) {
        return this.cell.val
    }
    return null
};
eXcell_dhxCalendar.prototype.getValue = function () {
    if (this.cell._clearCell) {
        return ""
    }
    if (this.grid._dtmask_inc && this.cell.val) {
        return this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask_inc, this.cell.val).toString()
    }
    return this.cell.innerHTML.toString()._dhx_trim()
};
eXcell_dhxCalendar.prototype.detach = function () {
    if (!this.grid._grid_calendarA) {
        return
    }
    this.grid._grid_calendarA.hide();
    if (this.cell._cediton) {
        this.cell._cediton = false
    } else {
        return
    }
    if (this.grid._grid_calendarA._last_operation_calendar) {
        var c = this.grid._grid_calendarA.getFormatedDate((this.grid._dtmask || "%d/%m/%Y"));
        var b = this.grid._grid_calendarA.getDate();
        this.cell.val = new Date(b);
        this.setCValue(c, b);
        this.cell._clearCell = !c;
        var a = this.val;
        this.val = this._val;
        return (this.cell.val.valueOf() != (a || "").valueOf())
    }
    return false
};
eXcell_dhxCalendar.prototype.setValue = function (a) {
    if (a && typeof a == "object") {
        this.cell.val = a;
        this.cell._clearCell = false;
        this.setCValue(this.grid._grid_calendarA.getFormatedDate((this.grid._dtmask || "%d/%m/%Y"), a).toString(), this.cell.val);
        return
    }
    if (!a || a.toString()._dhx_trim() == "") {
        a = "&nbsp";
        this.cell._clearCell = true;
        this.cell.val = ""
    } else {
        this.cell._clearCell = false;
        this.cell.val = new Date(this.grid._grid_calendarA.setFormatedDate((this.grid._dtmask_inc || this.grid._dtmask || "%d/%m/%Y"), a.toString(), null, true));
        if (this.grid._dtmask_inc) {
            a = this.grid._grid_calendarA.getFormatedDate((this.grid._dtmask || "%d/%m/%Y"), this.cell.val)
        }
    }
    if ((this.cell.val == "NaN") || (this.cell.val == "Invalid Date")) {
        this.cell._clearCell = true;
        this.cell.val = new Date();
        this.setCValue("&nbsp;", 0)
    } else {
        this.setCValue((a || "").toString(), this.cell.val)
    }
};
function eXcell_dhxCalendarA(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        if (!this.grid._grid_calendarA) {
            var c = this.grid._grid_calendarA = new dhtmlxCalendarObject();
            this.grid.callEvent("onDhxCalendarCreated", [c]);
            var b = this.grid;
            c.attachEvent("onClick", function () {
                this._last_operation_calendar = true;
                window.setTimeout(function () {
                    b.editStop()
                }, 1);
                return true
            });
            var d = function (f) {
                (f || event).cancelBubble = true
            };
            dhtmlxEvent(c.base, "click", d)
        }
    }
}
eXcell_dhxCalendarA.prototype = new eXcell;
eXcell_dhxCalendarA.prototype.edit = function () {
    var b = this.grid.getPosition(this.cell);
    this.grid._grid_calendarA._show(false, false);
    this.grid._grid_calendarA.setPosition(b[0] * 1 + this.cell.offsetWidth, b[1] * 1);
    this.grid.callEvent("onCalendarShow", [this.grid._grid_calendarA, this.cell.parentNode.idd, this.cell._cellIndex]);
    this.grid._grid_calendarA._last_operation_calendar = false;
    this.cell._cediton = true;
    this.val = this.cell.val;
    this._val = this.cell.innerHTML;
    var a = this.grid._grid_calendarA.draw;
    this.grid._grid_calendarA.draw = function () {
    };
    this.grid._grid_calendarA.setDateFormat((this.grid._dtmask || "%d/%m/%Y"));
    this.grid._grid_calendarA.setDate(this.val);
    this.grid._grid_calendarA.draw = a;
    this.cell.atag = ((!this.grid.multiLine) && (_isKHTML || _isMacOS || _isFF)) ? "INPUT" : "TEXTAREA";
    this.obj = document.createElement(this.cell.atag);
    this.obj.style.height = (this.cell.offsetHeight - 4) + "px";
    this.obj.className = "dhx_combo_edit";
    this.obj.wrap = "soft";
    this.obj.style.textAlign = this.cell.align;
    this.obj.onclick = function (c) {
        (c || event).cancelBubble = true
    };
    this.obj.onmousedown = function (c) {
        (c || event).cancelBubble = true
    };
    this.obj.value = this.getValue();
    this.cell.innerHTML = "";
    this.cell.appendChild(this.obj);
    if (window.dhx4.isIE) {
        this.obj.style.overflow = "visible";
        if ((this.grid.multiLine) && (this.obj.offsetHeight >= 18) && (this.obj.offsetHeight < 40)) {
            this.obj.style.height = "36px";
            this.obj.style.overflow = "scroll"
        }
    }
    this.obj.onselectstart = function (c) {
        if (!c) {
            c = event
        }
        c.cancelBubble = true;
        return true
    };
    this.obj.focus();
    this.obj.focus()
};
eXcell_dhxCalendarA.prototype.getDate = function () {
    if (this.cell.val) {
        return this.cell.val
    }
    return null
};
eXcell_dhxCalendarA.prototype.getValue = function () {
    if (this.cell._clearCell) {
        return ""
    }
    if (this.grid._dtmask_inc && this.cell.val) {
        return this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask_inc, this.cell.val).toString()
    }
    return this.cell.innerHTML.toString()._dhx_trim()
};
eXcell_dhxCalendarA.prototype.detach = function () {
    if (!this.grid._grid_calendarA) {
        return
    }
    this.grid._grid_calendarA.hide();
    if (this.cell._cediton) {
        this.cell._cediton = false
    } else {
        return
    }
    if (this.grid._grid_calendarA._last_operation_calendar) {
        this.grid._grid_calendarA._last_operation_calendar = false;
        var c = this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask || "%d/%m/%Y");
        var b = this.grid._grid_calendarA.getDate();
        this.cell.val = new Date(b);
        this.setCValue(c, b);
        this.cell._clearCell = !c;
        var a = this.val;
        this.val = this._val;
        return (this.cell.val.valueOf() != (a || "").valueOf())
    }
    this.setValue(this.obj.value);
    var a = this.val;
    this.val = this._val;
    return (this.cell.val.valueOf() != (a || "").valueOf())
};
eXcell_dhxCalendarA.prototype.setValue = function (a) {
    if (a && typeof a == "object") {
        this.cell.val = a;
        this.cell._clearCell = false;
        this.setCValue(this.grid._grid_calendarA.getFormatedDate((this.grid._dtmask || "%d/%m/%Y"), a).toString(), this.cell.val);
        return
    }
    if (!a || a.toString()._dhx_trim() == "") {
        a = "&nbsp";
        this.cell._clearCell = true;
        this.cell.val = ""
    } else {
        this.cell._clearCell = false;
        this.cell.val = new Date(this.grid._grid_calendarA.setFormatedDate((this.grid._dtmask_inc || this.grid._dtmask || "%d/%m/%Y"), a.toString(), null, true));
        if (this.grid._dtmask_inc) {
            a = this.grid._grid_calendarA.getFormatedDate((this.grid._dtmask || "%d/%m/%Y"), this.cell.val)
        }
    }
    if ((this.cell.val == "NaN") || (this.cell.val == "Invalid Date")) {
        this.cell.val = new Date();
        this.cell._clearCell = true;
        this.setCValue("&nbsp;", 0)
    } else {
        this.setCValue((a || "").toString(), this.cell.val)
    }
};
function eXcell_cntr(a) {
    this.cell = a;
    this.grid = this.cell.parentNode.grid;
    if (!this.grid._ex_cntr_ready && !this._realfake) {
        this.grid._ex_cntr_ready = true;
        if (this.grid._h2) {
            this.grid.attachEvent("onOpenEn", function (c) {
                this.resetCounter(a._cellIndex)
            })
        }
        var b = function () {
            var c = this;
            window.setTimeout(function () {
                if (!c.resetCounter) {
                    return
                }
                if (c._fake && !c._realfake && a._cellIndex < c._fake._cCount) {
                    c._fake.resetCounter(a._cellIndex)
                } else {
                    c.resetCounter(a._cellIndex)
                }
            }, 1);
            return true
        };
        this.grid.attachEvent("onBeforeSorting", b);
        this.grid.attachEvent("onFilterEnd", b)
    }
    this.edit = function () {
    };
    this.getValue = function () {
        return this.cell.innerHTML
    };
    this.setValue = function (d) {
        this.cell.style.paddingRight = "2px";
        var c = this.cell;
        window.setTimeout(function () {
            if (!c.parentNode) {
                return
            }
            var e = c.parentNode.rowIndex;
            if (c.parentNode.grid.currentPage || e < 0 || c.parentNode.grid._srnd) {
                e = c.parentNode.grid.rowsBuffer._dhx_find(c.parentNode) + 1
            }
            if (e <= 0) {
                return
            }
            c.innerHTML = e;
            if (c.parentNode.grid._fake && c._cellIndex < c.parentNode.grid._fake._cCount && c.parentNode.grid._fake.rowsAr[c.parentNode.idd]) {
                c.parentNode.grid._fake.cells(c.parentNode.idd, c._cellIndex).setCValue(e)
            }
            c = null
        }, 100)
    }
}
dhtmlXGridObject.prototype.resetCounter = function (b) {
    if (this._fake && !this._realfake && b < this._fake._cCount) {
        this._fake.resetCounter(b, this.currentPage)
    }
    var a = arguments[0] || 0;
    if (this.currentPage) {
        a = (this.currentPage - 1) * this.rowsBufferOutSize
    }
    for (a = 0; a < this.rowsBuffer.length; a++) {
        if (this.rowsBuffer[a] && this.rowsBuffer[a].tagName == "TR" && this.rowsAr[this.rowsBuffer[a].idd]) {
            this.rowsAr[this.rowsBuffer[a].idd].childNodes[b].innerHTML = a + 1
        }
    }
};
eXcell_cntr.prototype = new eXcell;
function eXcell_acheck(a) {
    try {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        this.cell.obj = this
    } catch (b) {
    }
    this.changeState = function () {
        if ((!this.grid.isEditable) || (this.cell.parentNode._locked) || (this.isDisabled())) {
            return
        }
        if (this.grid.callEvent("onEditCell", [0, this.cell.parentNode.idd, this.cell._cellIndex]) != false) {
            this.val = this.getValue();
            if (this.val == "1") {
                this.setValue("<checkbox state='false'>")
            } else {
                this.setValue("<checkbox state='true'>")
            }
            this.cell.wasChanged = true;
            this.grid.callEvent("onEditCell", [1, this.cell.parentNode.idd, this.cell._cellIndex]);
            this.grid.callEvent("onCheck", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")]);
            this.grid.callEvent("onCheckbox", [this.cell.parentNode.idd, this.cell._cellIndex, (this.val != "1")])
        } else {
            this.editor = null
        }
    };
    this.getValue = function () {
        try {
            return this.cell.chstate.toString()
        } catch (c) {
            return null
        }
    };
    this.isCheckbox = function () {
        return true
    };
    this.isChecked = function () {
        if (this.getValue() == "1") {
            return true
        } else {
            return false
        }
    };
    this.setChecked = function (c) {
        this.setValue(c.toString())
    };
    this.detach = function () {
        return this.val != this.getValue()
    };
    this.drawCurrentState = function () {
        if (this.cell.chstate == 1) {
            return "<div  onclick='(new eXcell_acheck(this.parentNode)).changeState(); (arguments[0]||event).cancelBubble=true;'  style='cursor:pointer; font-weight:bold; text-align:center; '><span style='height:8px; width:8px; background:green; display:inline-block;'></span>&nbsp;Yes</div>"
        } else {
            return "<div  onclick='(new eXcell_acheck(this.parentNode)).changeState(); (arguments[0]||event).cancelBubble=true;' style='cursor:pointer;  text-align:center; '><span style='height:8px; width:8px; background:red; display:inline-block;'></span>&nbsp;No</div>"
        }
    }
}
eXcell_acheck.prototype = new eXcell;
eXcell_acheck.prototype.setValue = function (b) {
    b = (b || "").toString();
    if (b.indexOf("1") != -1 || b.indexOf("true") != -1) {
        b = "1";
        this.cell.chstate = "1"
    } else {
        b = "0";
        this.cell.chstate = "0"
    }
    var a = this;
    this.setCValue(this.drawCurrentState(), this.cell.chstate)
};
function eXcell_context(a) {
    if (a) {
        this.cell = a;
        this.grid = this.cell.parentNode.grid;
        if (!this.grid._sub_context) {
            return
        }
        this._sub = this.grid._sub_context[a._cellIndex];
        if (!this._sub) {
            return
        }
        this._sindex = this._sub[1];
        this._sub = this._sub[0]
    }
    this.getValue = function () {
        return _isIE ? this.cell.innerText : this.cell.textContent
    };
    this.setValue = function (c) {
        this.cell._val = c;
        var b = this._sub.itemPull[this._sub.idPrefix + this.cell._val];
        c = b ? b.title : c;
        this.setCValue((c || "&nbsp;"), c)
    };
    this.edit = function () {
        var c = this.grid.getPosition(this.cell);
        this._sub.showContextMenu(c[0] + this.cell.offsetWidth, c[1]);
        var b = this.grid.editStop;
        this.grid.editStop = function () {
        };
        this.grid.editStop = b
    };
    this.detach = function () {
        if (this.grid._sub_id != null) {
            var b = this.cell._val;
            this.setValue(this.grid._sub_id);
            this.grid._sub_id = null;
            return this.cell._val != b
        }
        this._sub.hideContextMenu()
    }
}
eXcell_context.prototype = new eXcell;
dhtmlXGridObject.prototype.setSubContext = function (a, b, d) {
    var c = this;
    a.attachEvent("onClick", function (f, e) {
        c._sub_id = f;
        c.editStop();
        a.hideContextMenu();
        return true
    });
    if (!this._sub_context) {
        this._sub_context = []
    }
    this._sub_context[b] = [a, d];
    a.hideContextMenu()
};
function dhtmlXGridFromTable(obj, init) {
    if (typeof(obj) != "object") {
        obj = document.getElementById(obj)
    }
    var w = document.createElement("DIV");
    w.setAttribute("width", obj.getAttribute("gridWidth") || (obj.offsetWidth ? (obj.offsetWidth + "px") : 0) || (window.getComputedStyle ? window.getComputedStyle(obj, null)["width"] : (obj.currentStyle ? obj.currentStyle.width : 0)));
    w.setAttribute("height", obj.getAttribute("gridHeight") || (obj.offsetHeight ? (obj.offsetHeight + "px") : 0) || (window.getComputedStyle ? window.getComputedStyle(obj, null)["height"] : (obj.currentStyle ? obj.currentStyle.height : 0)));
    w.className = obj.className;
    obj.className = "";
    if (obj.id) {
        w.id = obj.id
    }
    var mr = obj;
    var drag = obj.getAttribute("dragAndDrop");
    mr.parentNode.insertBefore(w, mr);
    var f = mr.getAttribute("name") || ("name_" + (new Date()).valueOf());
    var windowf = new dhtmlXGridObject(w);
    window[f] = windowf;
    var acs = mr.getAttribute("onbeforeinit");
    var acs2 = mr.getAttribute("oninit");
    if (acs) {
        eval(acs)
    }
    windowf.setImagePath(windowf.imgURL || (mr.getAttribute("imgpath") || mr.getAttribute("image_path") || ""));
    var skin = mr.getAttribute("skin");
    if (skin) {
        windowf.setSkin(skin)
    }
    if (init) {
        init(windowf)
    }
    var hrow = mr.rows[0];
    var za = "";
    var zb = "";
    var zc = "";
    var zd = "";
    var ze = "";
    for (var i = 0; i < hrow.cells.length; i++) {
        za += (za ? "," : "") + hrow.cells[i].innerHTML;
        var width = hrow.cells[i].getAttribute("width") || hrow.cells[i].offsetWidth || (window.getComputedStyle ? window.getComputedStyle(hrow.cells[i], null)["width"] : (hrow.cells[i].currentStyle ? hrow.cells[i].currentStyle.width : 0));
        zb += (zb ? "," : "") + (width == "*" ? width : parseInt(width));
        zc += (zc ? "," : "") + (hrow.cells[i].getAttribute("align") || "left");
        zd += (zd ? "," : "") + (hrow.cells[i].getAttribute("type") || "ed");
        ze += (ze ? "," : "") + (hrow.cells[i].getAttribute("sort") || "str");
        var f_a = hrow.cells[i].getAttribute("format");
        if (f_a) {
            if (hrow.cells[i].getAttribute("type").toLowerCase().indexOf("calendar") != -1) {
                windowf._dtmask = f_a
            } else {
                windowf.setNumberFormat(f_a, i)
            }
        }
    }
    windowf.setHeader(za);
    windowf.setInitWidths(zb);
    windowf.setColAlign(zc);
    windowf.setColTypes(zd);
    windowf.setColSorting(ze);
    if (obj.getAttribute("gridHeight") == "auto") {
        windowf.enableAutoHeigth(true)
    }
    if (obj.getAttribute("multiline")) {
        windowf.enableMultiline(true)
    }
    var lmn = mr.getAttribute("lightnavigation");
    if (lmn) {
        windowf.enableLightMouseNavigation(lmn)
    }
    var evr = mr.getAttribute("evenrow");
    var uevr = mr.getAttribute("unevenrow");
    if (evr || uevr) {
        windowf.enableAlterCss(evr, uevr)
    }
    if (drag) {
        windowf.enableDragAndDrop(true)
    }
    windowf.init();
    if (obj.getAttribute("split")) {
        windowf.splitAt(obj.getAttribute("split"))
    }
    windowf._process_inner_html(mr, 1);
    if (acs2) {
        eval(acs2)
    }
    if (obj.parentNode && obj.parentNode.removeChild) {
        obj.parentNode.removeChild(obj)
    }
    return windowf
}
dhtmlXGridObject.prototype._process_html = function (b) {
    if (b.tagName && b.tagName == "TABLE") {
        return this._process_inner_html(b, 0)
    }
    var a = document.createElement("DIV");
    a.innerHTML = b.xmlDoc.responseText;
    var c = a.getElementsByTagName("TABLE")[0];
    this._process_inner_html(c, 0)
};
dhtmlXGridObject.prototype._process_inner_html = function (c, e) {
    var b = c.rows.length;
    for (var a = e; a < b; a++) {
        var d = c.rows[a].getAttribute("id") || a;
        this.rowsBuffer.push({idd: d, data: c.rows[a], _parser: this._process_html_row, _locator: this._get_html_data})
    }
    this.render_dataset();
    this.setSizes()
};
dhtmlXGridObject.prototype._process_html_row = function (h, e) {
    var g = e.getElementsByTagName("TD");
    var b = [];
    h._attrs = this._xml_attrs(e);
    for (var d = 0; d < g.length; d++) {
        var f = g[d];
        var a = f.getAttribute("type");
        if (h.childNodes[d]) {
            if (a) {
                h.childNodes[d]._cellType = a
            }
            h.childNodes[d]._attrs = this._xml_attrs(g[d])
        }
        if (f.firstChild) {
            b.push(f.innerHTML)
        } else {
            b.push("")
        }
        if (f.colSpan > 1) {
            h.childNodes[d]._attrs.colspan = f.colSpan;
            for (var c = 1; c < f.colSpan; c++) {
                b.push("")
            }
        }
    }
    for (d < g.length; d < h.childNodes.length; d++) {
        h.childNodes[d]._attrs = {}
    }
    this._fillRow(h, (this._c_order ? this._swapColumns(b) : b));
    return h
};
dhtmlXGridObject.prototype._get_html_data = function (b, a) {
    b = b.firstChild;
    while (true) {
        if (!b) {
            return ""
        }
        if (b.tagName == "TD") {
            a--
        }
        if (a < 0) {
            break
        }
        b = b.nextSibling
    }
    return (b.firstChild ? b.firstChild.data : "")
};
dhtmlxEvent(window, "load", function () {
    var c = document.getElementsByTagName("table");
    for (var b = 0; b < c.length; b++) {
        if (c[b].className == "dhtmlxGrid") {
            dhtmlXGridFromTable(c[b])
        }
    }
});
if (!window.dhtmlx) {
    window.dhtmlx = {}
}
(function () {
    var j = null;

    function m(r, p) {
        var q = r.callback;
        l(false);
        r.box.parentNode.removeChild(r.box);
        j = r.box = null;
        if (q) {
            q(p)
        }
    }

    function a(q) {
        if (j) {
            q = q || event;
            var p = q.which || event.keyCode;
            if (dhtmlx.message.keyboard) {
                if (p == 13 || p == 32) {
                    m(j, true)
                }
                if (p == 27) {
                    m(j, false)
                }
            }
            if (q.preventDefault) {
                q.preventDefault()
            }
            return !(q.cancelBubble = true)
        }
    }

    if (document.attachEvent) {
        document.attachEvent("onkeydown", a)
    } else {
        document.addEventListener("keydown", a, true)
    }
    function l(q) {
        if (!l.cover) {
            l.cover = document.createElement("DIV");
            l.cover.onkeydown = a;
            l.cover.className = "dhx_modal_cover";
            document.body.appendChild(l.cover)
        }
        var p = document.body.scrollHeight;
        l.cover.style.display = q ? "inline-block" : "none"
    }

    function f(q, p) {
        return "<div class='dhtmlx_popup_button' result='" + p + "' ><div>" + q + "</div></div>"
    }

    function c(q) {
        if (!n.area) {
            n.area = document.createElement("DIV");
            n.area.className = "dhtmlx_message_area";
            n.area.style[n.position] = "5px";
            document.body.appendChild(n.area)
        }
        n.hide(q.id);
        var p = document.createElement("DIV");
        p.innerHTML = "<div>" + q.text + "</div>";
        p.className = "dhtmlx-info dhtmlx-" + q.type;
        p.onclick = function () {
            if (q) {
                n.hide(q.id)
            }
            q = null
        };
        if (n.position == "bottom" && n.area.firstChild) {
            n.area.insertBefore(p, n.area.firstChild)
        } else {
            n.area.appendChild(p)
        }
        if (q.expire > 0) {
            n.timers[q.id] = window.setTimeout(function () {
                n.hide(q.id)
            }, q.expire)
        }
        n.pull[q.id] = p;
        p = null;
        return q.id
    }

    function g(q, s, v) {
        var u = document.createElement("DIV");
        u.className = " dhtmlx_modal_box dhtmlx-" + q.type;
        u.setAttribute("dhxbox", 1);
        var p = "";
        if (q.width) {
            u.style.width = q.width
        }
        if (q.height) {
            u.style.height = q.height
        }
        if (q.title) {
            p += '<div class="dhtmlx_popup_title">' + q.title + "</div>"
        }
        p += '<div class="dhtmlx_popup_text"><span>' + (q.content ? "" : q.text) + '</span></div><div  class="dhtmlx_popup_controls">';
        if (s) {
            p += f(q.ok || "OK", true)
        }
        if (v) {
            p += f(q.cancel || "Cancel", false)
        }
        if (q.buttons) {
            for (var r = 0; r < q.buttons.length; r++) {
                p += f(q.buttons[r], r)
            }
        }
        p += "</div>";
        u.innerHTML = p;
        if (q.content) {
            var t = q.content;
            if (typeof t == "string") {
                t = document.getElementById(t)
            }
            if (t.style.display == "none") {
                t.style.display = ""
            }
            u.childNodes[q.title ? 1 : 0].appendChild(t)
        }
        u.onclick = function (y) {
            y = y || event;
            var x = y.target || y.srcElement;
            if (!x.className) {
                x = x.parentNode
            }
            if (x.className == "dhtmlx_popup_button") {
                var w = x.getAttribute("result");
                w = (w == "true") || (w == "false" ? false : w);
                m(q, w)
            }
        };
        q.box = u;
        if (s || v) {
            j = q
        }
        return u
    }

    function o(q, r, t) {
        var s = q.tagName ? q : g(q, r, t);
        if (!q.hidden) {
            l(true)
        }
        document.body.appendChild(s);
        var p = q.left || Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - s.offsetWidth) / 2));
        var u = q.top || Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - s.offsetHeight) / 2));
        if (q.position == "top") {
            s.style.top = "-3px"
        } else {
            s.style.top = u + "px"
        }
        s.style.left = p + "px";
        s.onkeydown = a;
        s.focus();
        if (q.hidden) {
            dhtmlx.modalbox.hide(s)
        }
        return s
    }

    function i(p) {
        return o(p, true, false)
    }

    function b(p) {
        return o(p, true, true)
    }

    function e(p) {
        return o(p)
    }

    function h(q, p, r) {
        if (typeof q != "object") {
            if (typeof p == "function") {
                r = p;
                p = ""
            }
            q = {text: q, type: p, callback: r}
        }
        return q
    }

    function d(r, q, p, s) {
        if (typeof r != "object" || !r) {
            r = {text: r, type: q, expire: p, id: s}
        }
        r.id = r.id || n.uid();
        r.expire = r.expire || n.expire;
        return r
    }

    dhtmlx.alert = function () {
        var p = h.apply(this, arguments);
        p.type = p.type || "confirm";
        return i(p)
    };
    dhtmlx.confirm = function () {
        var p = h.apply(this, arguments);
        p.type = p.type || "alert";
        return b(p)
    };
    dhtmlx.modalbox = function () {
        var p = h.apply(this, arguments);
        p.type = p.type || "alert";
        return e(p)
    };
    dhtmlx.modalbox.hide = function (p) {
        while (p && p.getAttribute && !p.getAttribute("dhxbox")) {
            p = p.parentNode
        }
        if (p) {
            p.parentNode.removeChild(p);
            l(false);
            j = null
        }
    };
    var n = dhtmlx.message = function (s, r, q, t) {
        s = d.apply(this, arguments);
        s.type = s.type || "info";
        var p = s.type.split("-")[0];
        switch (p) {
            case"alert":
                return i(s);
            case"confirm":
                return b(s);
            case"modalbox":
                return e(s);
            default:
                return c(s);
                break
        }
    };
    n.seed = (new Date()).valueOf();
    n.uid = function () {
        return n.seed++
    };
    n.expire = 4000;
    n.keyboard = true;
    n.position = "top";
    n.pull = {};
    n.timers = {};
    n.hideAll = function () {
        for (var p in n.pull) {
            n.hide(p)
        }
    };
    n.hide = function (q) {
        var p = n.pull[q];
        if (p && p.parentNode) {
            window.setTimeout(function () {
                p.parentNode.removeChild(p);
                p = null
            }, 2000);
            p.className += " hidden";
            if (n.timers[q]) {
                window.clearTimeout(n.timers[q])
            }
            delete n.pull[q]
        }
    }
})();