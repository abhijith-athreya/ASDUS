function jsonSignature() {
	var signature = {};
	var navigatorMap = {};
	for (var prop in navigator) {
		try {		
			var value = eval("navigator." + prop);
			if ((typeof value == 'boolean') || (typeof value == 'number') ||
				(typeof value == 'string') || (typeof value == 'array') ||
				(typeof value == 'null')) {
					navigatorMap[prop] = value;
			}
		} catch (e) {}
	}
	signature['navigator'] = navigatorMap;
	var plugins = new Array();
	var pluginNames = new Array('Acrobat', 'QuickTime', 'DivX', 'Director', 'Windows Media', 'Flash', 'Java', 'VLC');
	var plgncount = 0;
	for (var i = 0; i < pluginNames.length; i++) {
		try {
		if (Plugin.isInstalled(pluginNames[i])) {
			var map = { };
			var info = Plugin.getInfo(pluginNames[i]);
			if (info != null) {
				map['name'] = info.description;
				map['version'] = info.version;
				plugins[plgncount++] = map;
			}
		}
		} catch (e) {}
	}
	signature['plugins'] = plugins;
	var screenProps = new Array();
	var i = 0;
	screenProps[i++] = "availHeight";
	screenProps[i++] = "availWidth";
	screenProps[i++] = "colorDepth";
	screenProps[i++] = "height";
	screenProps[i++] = "pixelDepth";
	screenProps[i++] = "width";
	var screenMap = { };
	for (i = 0; i < screenProps.length; i++) {
		try {
			var value = eval("screen." + screenProps[i]);
			if (value != null) {
				screenMap[screenProps[i]] = value;
			}
		} catch (e) {}
	}
	signature['screen'] = screenMap;
	var extraMap = {};
	var vbVer = null;
	if (navigator.appName == "Microsoft Internet Explorer") {
	try {
		vbVer = ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion() + "." + ScriptEngineBuildVersion();
	} catch(e) {}
	}
	if (vbVer != null) {
		extraMap['vbscript_ver'] = vbVer;
	} 
	try {
		extraMap['javascript_ver'] = jsVer;
	} catch (e) {
		extraMap['javascript_ver'] = "";
	}
	try {
		var currDate = new Date();
		var currTime = currDate.toString();
		if ((currTime.indexOf("PDT") > 0)
			|| (currTime.indexOf("MDT") > 0)
			|| (currTime.indexOf("CDT") > 0)
			|| (currTime.indexOf("EDT") > 0)
			|| (currTime.indexOf("Daylight") > 0))
			extraMap['timezone'] = currDate.getTimezoneOffset() + 60;
		else
			extraMap['timezone'] = currDate.getTimezoneOffset();
	} catch (e) {
		extraMap['timezone'] = "";
	}
	signature['extra'] = extraMap;	
	return JSON.stringify(signature);
}