/*
	Copyright (c) 2013 Webtrends, Inc.
	Heatmap Plugin v10.2.89
  
	An example of including the plugin with your tag.
  
	<script type="text/javascript">
	// async loader function, called by webtrends.js after load
	window.webtrendsAsyncInit=function(){
		var dcs=new Webtrends.dcs().init({
			dcsid:"YOUR_WEBTRENDS_DCSID_HERE",
			timezone:YOUR_TIMEZONE_HERE,
			plugins:{
				hm:{src:"webtrends.hm.js"}
			}
			}).track();
	};
	(function(){
		var s=document.createElement("script"); s.async=true; s.src="webtrends.js";    
		var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
	}());
	</script>

	The track() function will return 'true' when it tracks data, 'false' otherwise.
*/
(function (_window, _document) {
    if (!_window.Webtrends)
        return;

    var WTHeatMap = {
        plugMap: {},
        getKeys: function (object, res) {
            for (var i in object)
                if (object.hasOwnProperty(i))
                    res.push(i);
            return res;
        },
        AtoO: function (A) {
            var res = {};
            for (var i = 0; i < A.length; ++i)
                res[A[i]] = true;
            return res;
        },
        getURLKeepParms: function (plugin) {
            if (plugin["hmurlparams"] && plugin["hmurlparams"].length > 0) {
                var urlparams = plugin["hmurlparams"].split(",");
                urlParams = WTHeatMap.AtoO(urlparams);
                //get query params for URL rebuilding
                var keepQPs = [];
                var tmpQPs = Webtrends.getQryParams(_window["location"]["search"]);
                var keys = WTHeatMap.getKeys(tmpQPs, []).sort();
                for (var i = 0; i < keys.length; ++i) {
                    if (urlParams[keys[i]]) {
                        keepQPs.push(keys[i]);
                        keepQPs.push(tmpQPs[keys[i]]);
                    }
                }
                return keepQPs.join(",");
            } else {
                return "";
            }
        },
        /*Fired on every click to create the heatmap events*/
        hm_clickEvent: function (tag, o_evt) {
            var tagObj = WTHeatMap.plugMap[tag.dcssID];
            if (!tagObj)
                return;
            e = o_evt.event || _window.event;

            var w = 0;
            var h = 0;
            if (typeof (_window.innerWidth) == 'number') {
                w = _window.innerWidth;
                h = _window.innerHeight;
            } else if (_document.documentElement && (_document.documentElement.clientWidth || _document.documentElement.clientHeight)) {
                w = _document.documentElement.clientWidth;
                h = _document.documentElement.clientHeight;
            } else if (_document.body && (_document.body.clientWidth || _document.body.clientHeight)) {
                w = _document.body.clientWidth;
                h = _document.body.clientHeight;
            }

            var scrollx = 0;
            var scrolly = 0;
            if (typeof (_window.pageYOffset) == 'number') {
                scrolly = _window.pageYOffset;
                scrollx = _window.pageXOffset;
            } else if (_document.body && (_document.body.scrollLeft || _document.body.scrollTop)) {
                scrolly = _document.body.scrollTop;
                scrollx = _document.body.scrollLeft;
            } else if (_document.documentElement && (_document.documentElement.scrollLeft || _document.documentElement.scrollTop)) {
                scrolly = _document.documentElement.scrollTop;
                scrollx = _document.documentElement.scrollLeft;
            }

            if (e.clientX > w || e.clientX < 0 || e.clientY > h || e.clientY < 0 || e.clientX == "NaN" || scrollx == "NaN" || w == "NaN" || h == "Nan") {
                return;
            }

            var x = e.clientX + scrollx;
            var y = e.clientY + scrolly;

            if (!tagObj.mTrackOptions["args"])
                tagObj.mTrackOptions["args"] = {};

            tagObj.mTrackOptions["args"]["WT.dl"] = "125";
            tagObj.mTrackOptions["args"]["WT.hm_x"] = x;
            tagObj.mTrackOptions["args"]["WT.hm_y"] = y;
            tagObj.mTrackOptions["args"]["WT.hm_w"] = w;
            tagObj.mTrackOptions["args"]["WT.hm_h"] = h;
            tagObj.mTrackOptions["args"]["WT.hm_tv"] = "10.2.89";

            if (tagObj.urlKeepParams)
                tagObj.mTrackOptions['args']['WT.hm_url'] = tagObj.urlKeepParams;

            //tagObj.dcsMultiTrack(hm_data);
            tagObj.dcsMultiTrack(tagObj.mTrackOptions);
        },
        /*callback for register plug, which if fired when the main tag is ready for collection to begin.*/
        hm_loader: function (tag, plugin) {
            if (plugin['filter'] && plugin['filter']())
                return;

            var tagObj = new Webtrends.dcs();
            var config = {
                dcsid: ((plugin["dcsid"]) ? plugin["dcsid"] : tag["dcsid"]),
                domain: ((plugin["domain"]) ? plugin["domain"] : "hm.webtrends.com"),
                timezone: tag['timezone'],
                i18n: tag['i18n'],
                vtid: tag['vtid'],
                enabled: tag['enabled'],
                privateFlag: true
            };

            if (tag['FPCConfig']) {
                var FPCConfig = {};
                var TPCConfig = {};

                FPCConfig['enabled'] = tag['FPCConfig']['enabled'];
                FPCConfig['name'] = tag['FPCConfig']['name'];
                FPCConfig['domain'] = tag['FPCConfig']['domain'];
                FPCConfig['expires'] = tag['FPCConfig']['expiry'];

                TPCConfig['enabled'] = tag['enabled'];
                TPCConfig['cfgType'] = tag['cfgType'];

                config['FPCConfig'] = FPCConfig;
                config['TPCConfig'] = TPCConfig;
            }
            else {
                config['fpc'] = tag['fpc'];
                config['fpcdom'] = tag['fpcdom'];
                config['cookieexpires'] = tag['cookieExp'];
            }

            tagObj.init(config);

            var urlKeeps = WTHeatMap.getURLKeepParms(plugin);
            tagObj.urlKeepParams = urlKeeps;
            //Add HM data to all hits.
            Webtrends.addTransform(function (dcs_in, o) {
                if (!o.argsa) o.argsa = [];
                o.argsa.push('WT.hm_url', urlKeeps);
            }, "collect", tag);
            WTHeatMap.plugMap[tag.dcssID] = tagObj;

            if (plugin['transform']) {
                Webtrends.addTransform(plugin['transform'], "all", tagObj);
            }

            Webtrends.bindEvent("wtmouseup", WTHeatMap.hm_clickEvent, tag);

            //Added for QA - This lets a user specify a set of multiTrack options that are used
            //for the heatmap multiTrack hit
            if (plugin["mTrackOptions"])
                tagObj.mTrackOptions = plugin["mTrackOptions"];
            else
                tagObj.mTrackOptions = {};
        }
    };
    _window['WebtrendsHeatMap'] = WTHeatMap;
    /*register the plugin and pass our callback*/
    Webtrends.registerPlugin('hm', WTHeatMap.hm_loader);

})(window, window.document);
