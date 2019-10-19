if(typeof console=="undefined"){var console={log:function(){}}};
bam.loadSync(bam.homePath + "bam.cookies.js", bam.homePath + "bam.datetime.js");
var	mlbMediaUtils = {
	freeProds           : ['mlb_dv','mlb_potg','gen_video','gen_audio', 'video', 'audio','mlb_fga', 'mlb_tp', 'false', ''], // PIDs for free media products (support 2.0 links)
	arlPrependReal      : "rtsp://a592.v108693.c10869.g.vr.akamaistream.net/ondemand/7/592/10869/v0001/mlb.download.akamai.com/10869/",
	arlPrependWMP       : "mms://a1503.v108692.c10869.g.vm.akamaistream.net/7/1503/10869/v0001/mlb.download.akamai.com/10869/",
	arlPrependLiveReal  : "rtsp://a1503.l10869[PORT].c10869.g.lr.akamaistream.net/live/D/1503/10869/v0001/reflector:[PORT]",
	arlPrependLiveWMP   : "mms://a1503.l10869[PORT].c10869.g.lm.akamaistream.net/D/1503/10869/v0001/reflector:[PORT]",
	nexDefMacInstaller  : "http://gd.mlb.com/swarmcast_updaters/2008/install/4.2.12.MLB08_36/mlb-nexdef-autobahn-4.2.12.MLB08_36.dmg",
	nexDefWinInstaller  : "http://gd.mlb.com/swarmcast_updaters/2008/install/4.2.12.MLB08_36/MLBNexDefInstall.exe",
	mediaMetaFilePath   : "/gen/multimedia/detail",
	videoLandingPageUrl : "/video/play.jsp",
	workFlowUrl         : "",
	workFlowUrlV1       : "/media",
	workFlowFrame       : null,
	workFlowFrameSize   : { width:1010, height:450 },
	currentMediaMeta    : {},
	wmpObj              : null,
	slpObj              : null,
	flshObj             : null,
	isPostLogin         : false,
	isPostInstall       : false,
	inAdMode            : false,
	giveMeSomeOldSkool  : false,
	isAutoBahnInstalled : false,
	scenarios           : {selected:""},
	wmpInstanceCount    : 0, // used when creating wmp iframes... creates new object in order for old one to get removed whenever
	//installCookie       : bam.cookies.get("SLInstall"),
	installCookieVal    : GetCookie("SLInstall"),
	installCookie       : null,
	installDisplay      : {post2DayCookie:false, post1MonthCookie:false},
	postLogin : function(o){	
		console.log("/*********** mlbMediaUtils.postLogin");
		mlbMediaUtils.workFlowFrame.hide();
		mlbMediaUtils.currentMediaMeta.mUrl = o.url;
		mlbMediaUtils.isPostLogin = true;
		mediaPlayer.play(mlbMediaUtils.currentMediaMeta);
	},
	isFreeProduct : function(pid){
		console.log("/*********** mlbMediaUtils.isFreeProduct");
		if(typeof pid=="undefined" || pid==""){ return true; }
		for(var x=0;x<this.freeProds.length;x++){
			if(this.freeProds[x]==pid){ return true; }
		}
		return false;
	},
	buildMediaARL : function(o){
		console.log("/*********** mlbMediaUtils.buildMediaARL");
		if(!o["mType"] || o["mType"]==''){ o.mType = "w"; } // default to WMP type not defined
		var realArl, 
			wmpArl,
			mURL = (o[o.mType]) ? o[o.mType] : o["url"]; // grab media url if exist
		if(typeof mURL!="undefined" && mURL!="" && mURL.indexOf("://")<0){
			if(mURL.charAt(0)=="/"){ mURL=mURL.substring(1); }
			// Set Live ARL
			if(mURL.indexOf("reflector:")>-1){
				var reflector = mURL.match(/reflector\:(\d{5})/);
				wmpArl  = this.arlPrependLiveWMP.replace(/\[PORT\]/g, reflector[1]);
				realArl = this.arlPrependLiveReal.replace(/\[PORT\]/g, reflector[1]);
				mURL    = (o.mType=='w') ? wmpArl : realArl;
			}
			// Set Archive ARL
			else{
				mURL=(o.mType=='w') ? this.arlPrependWMP+mURL : this.arlPrependReal+mURL;
			}
		}
		else if(mURL==null){
			mURL = "NULL";
		}
		return mURL; // return WMP or RealPlayer media ARL
	},
	buildWorkFlowUrl : function(o){
		console.log("/*********** mlbMediaUtils.buildWorkFlowUrl");
		var q = (this.workFlowUrl.indexOf("?")>-1) ? "&" : "?";
		var mediaId     = (o["w_id"])        ? unescape(o.w_id)                 : (o["r_id"])    ? unescape(o.r_id)        : (o["id"]) ? unescape(o.id) : "NO_ID",
			catCode     = (o["cat_code"])    ? "&catCode=" + o.cat_code         : (o["catCode"]) ? "&catCode=" + o.catCode : "",
			affiliateId = (o["affiliateId"]) ? "&affiliateId=" + o.affiliateId  : "",
			nsId        = (o["nsId"])        ? "&namespaceId=" + o.nsId         : "",
			startOffset = (o["start"])       ? "&startOffsetSeconds=" + o.start : "",
			endOffset   = (o["end"])         ? "&endTimeSeconds=" + o.end       : "",
			av          = "&av=" + o.isAudOrVid;
		return this.workFlowUrl + q + "mediaId=" + mediaId + startOffset + endOffset + nsId + catCode + affiliateId + av;
	},
	runRules : function(o){ // mid format: 200803282450995
		console.log("/*********** runRules");
		if(typeof o["mid"]!="undefined" && o["mid"].length>9){
			console.log("----> runRules: mid="+o.mid);
			var dateStr   = o.mid.substring(0,4) + "/" + o.mid.substring(4,6) + "/" + o.mid.substring(6,8),
				contentId = o.mid.substring(8),
				mediaId   = (o["id"]) ? o.id : o.w_id;	
			var metaFile  = this.mediaMetaFilePath + "/" + dateStr + "/" + contentId + ".xml";
			console.log("----> runRules: meta file="+metaFile);
			jQuery.get(metaFile, function(xmlData){
				var urlNodes = xmlData.getElementsByTagName("url");
				jQuery.each(urlNodes, function(i, url){
					console.log("----> runRules: get meta file");
					var plybk = url.getAttribute("playback_scenario");
					var id = url.getAttribute("id");
					console.log("----> runRules: playback_scenario="+plybk);
					console.log("----> runRules: id="+id);
					if(id==mediaId && plybk.indexOf("MLB_FLASH")>-1){
						document.location = mlbMediaUtils.videoLandingPageUrl + "?mid=" + o.mid;
						return false;
					}
				});
			});
		}
		console.log("----> runRules: Rules done... nothing to enforce. Return to regular flow");
		return true;
	},
	getUrlDataFromMeta : function(o){ // mid format: 200803282450995
		console.log("/*********** getUrlDataFromMeta");
		if(typeof o["mid"]!="undefined" && o["mid"].length>9){
			console.log("----> getUrlDataFromMeta: mid="+o.mid);
			var dateStr   = o.mid.substring(0,4) + "/" + o.mid.substring(4,6) + "/" + o.mid.substring(6,8),
				contentId = o.mid.substring(8);
			var metaFile  = this.mediaMetaFilePath + "/" + dateStr + "/" + contentId + ".xml";
			console.log("----> getUrlDataFromMeta: meta file="+metaFile);
			jQuery.get(metaFile, function(xmlData){
				var urlNodes = xmlData.getElementsByTagName("url");
				jQuery.each(urlNodes, function(i, url){
					console.log("----> getUrlDataFromMeta: get meta file");
					var plybk = url.getAttribute("playback_scenario");
					var id    = url.getAttribute("id");
					var url   = url.firstChild.nodeValue;
					console.log("----> getUrlDataFromMeta: playback_scenario="+plybk);
					console.log("----> getUrlDataFromMeta: id="+id);
					console.log("----> getUrlDataFromMeta: url="+url);
					if(plybk.indexOf("MLB_WM_400K_STREAM")>-1){
						return { id:id, url:url };
					}
				});
			});
		}
		console.log("----> getUrlDataFromMeta: Can't find media meta data");
		return null;
	},
	autobahnError : function(){
		console.log("/*********** mlbMediaUtils.autobahnError");
		AutobahnDetectionHandle.stop();
	},
	autobahnNotFound : function(){
		console.log("/*********** mlbMediaUtils.autobahnNotFound");
		if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
			jQuery("#MLBPlayer_NexDefInstall").fadeIn("normal");
			jQuery("#nexdef_plugin .install_msgs").hide();
			jQuery("#nexdef_plugin .install_x").show();
			jQuery("#nexdef_install").show();
			mlbMediaUtils.isAutoBahnInstalled = false;
		}
		else{
			AutobahnDetectionHandle.stop();
			//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
			mlbMediaUtils.giveMeSomeOldSkool = true;
			mlbMediaUtils.isPostLogin = false;
			mlbMediaUtils.isPostInstall = true;
			//mlbPlayer.play(mlbMediaUtils.currentMediaMeta);
			console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
			mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
		}
	},
	autobahnNeedsUpgrade : function(){
		console.log("/*********** mlbMediaUtils.autobahnNeedsUpgrade");
		if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
			jQuery("#MLBPlayer_NexDefInstall").fadeIn("normal");
			jQuery("#nexdef_plugin .install_msgs").hide();
			jQuery("#nexdef_plugin .install_x").show();
			jQuery("#nexdef_install").show();
			mlbMediaUtils.isAutoBahnInstalled = false;
		}
		else{
			AutobahnDetectionHandle.stop();
			//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
			mlbMediaUtils.giveMeSomeOldSkool = true;
			mlbMediaUtils.isPostLogin = false;
			mlbMediaUtils.isPostInstall = true;
			//mlbPlayer.play(mlbMediaUtils.currentMediaMeta);
			console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
			mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
		}
	},
	autobahnPassed  : function(){
		console.log("/*********** mlbMediaUtils.autobahnPassed");
		AutobahnDetectionHandle.stop();
		jQuery("#nexdef_plugin .install_x").hide();
		jQuery("#nexdef_plugin .install_msgs").hide();
		jQuery("#nexdef_plugin .install_check").show();
		if(bam.media.isSilverLightInstalled() == "notInstalled"){
			console.log("----> autobahnPassed: Silverlight Not Installed");
			if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
				jQuery("#MLBPlayer_NexDefInstall").fadeIn("normal");
				jQuery("#slp_plugin .install_msgs").hide();
				jQuery("#slp_plugin .install_x").show();
				jQuery("#slp_install").show();
			}
			else{
				AutobahnDetectionHandle.stop();
				//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
				mlbMediaUtils.giveMeSomeOldSkool = true;
				mlbMediaUtils.isPostLogin = false;
				mlbMediaUtils.isPostInstall = true;
				//mlbPlayer.play(mlbMediaUtils.currentMediaMeta);
				console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
				mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
			}
		}
		else if(bam.media.isSilverLightInstalled() == "installed"){
			console.log("----> autobahnPassed: Silverlight Installed");
			mlbMediaUtils.isPostLogin = false;
			mlbMediaUtils.isPostInstall = true;
			mediaPlayer.play(mlbMediaUtils.currentMediaMeta);
		}
	},
	// Install cookie logic
	runInstallCookieRules : function(){
		console.log("----> prePlayerLoad: Silverlight Not Installed (cookie logic)");
		mlbMediaUtils.installCookieVal = GetCookie("SLInstall");
		var now = new Date();
		var twoDays = 86400000*2;
		var oneMonth = 86400000*30; //average month length in days
		if(mlbMediaUtils.installCookieVal===null){
			console.log("----> prePlayerLoad: (SET 2Day) mlbMediaUtils.installCookieVal == null");
			mlbMediaUtils.installCookie=false;
			mlbMediaUtils.giveMeSomeOldSkool = true;
			//bam.cookies.set("SLInstall", now.getTime(),  bam.datetime.DateTime(now).incrementYear(1));
			SetDateCookie("SLInstall", now.getTime(), bam.datetime.DateTime(now).incrementYear(1), "/");
		}
		else{
			console.log("----> prePlayerLoad: mlbMediaUtils.installCookieVal != null");
			//mlbMediaUtils.giveMeSomeOldSkool = true;
			if(mlbMediaUtils.installCookieVal.indexOf("2W_")>-1){
				console.log("----> prePlayerLoad: (2W Logic) mlbMediaUtils.installCookieVal");
				mlbMediaUtils.installDisplay.post2DayCookie = true;
				var dateDiff = now.getTime() - parseInt(mlbMediaUtils.installCookieVal.substring(3));
				console.log("#####@@@@@@@@@@###### 1Month Date Diff - "+ dateDiff +">="+oneMonth);
				if(dateDiff>=oneMonth){
					console.log("----> prePlayerLoad: mlbMediaUtils.installCookieVal > 1Month");
					mlbMediaUtils.installDisplay.post1MonthCookie = true;
					mlbMediaUtils.installCookie=true;
					mlbMediaUtils.giveMeSomeOldSkool = false;
				}
				else{
					console.log("----> prePlayerLoad: mlbMediaUtils.installCookieVal < 1Month");
					mlbMediaUtils.installCookie=false;
					mlbMediaUtils.giveMeSomeOldSkool = true;
				}
			}
			else{
				console.log("----> prePlayerLoad: (2D Logic) mlbMediaUtils.installCookieVal");
				var dateDiff = now.getTime() - parseInt(mlbMediaUtils.installCookieVal);
				console.log("#####@@@@@@@@@@###### 2Day Date Diff - "+ dateDiff +">="+twoDays);
				if(dateDiff<twoDays){
					console.log("----> prePlayerLoad: (2D Logic) mlbMediaUtils.installCookieVal < 2Days");
					mlbMediaUtils.installCookie = false;
					mlbMediaUtils.giveMeSomeOldSkool = true;
				}
				else if(dateDiff>twoDays){
					console.log("----> prePlayerLoad: (2D Logic) mlbMediaUtils.installCookieVal > 2Days");
					mlbMediaUtils.installDisplay.post2DayCookie = true;
					mlbMediaUtils.installCookie = true; 
					mlbMediaUtils.giveMeSomeOldSkool = false;
				}
			}
		}
		return mlbMediaUtils.installCookie;
	}
};
var mlbPlayer = new bam.media.MPlayer({
	name        : "MLBPlayer",
	template    : "/media/player/mp_tpl_3_1.jsp",
	width       : 1012,
	height      : 600,
	inPlayer    : (window.location.href.indexOf("mp_tpl_3_1.jsp")>-1) ? true : false,
	preLaunch   : function(o){
		console.log("/*********** mlbPlayer.preLaunch");
		if(typeof bam.media.dispatch!="undefined"){  	 
			var dispatchObj = bam.media.dispatch(o); 	 
			console.log("----> preLaunch: dispatchObj=" + dispatchObj); 	 
			if(typeof dispatchObj=="object"){ o = dispatchObj; } 	 
			else{return false;} 	 
		}
		if(o["inning"]) {
			window.open('/components/video/coming_soon.jsp','coming_soon','width=500,height=470,location=no,menubar=no,scrollbars=yes,status=yes,toolbar=no,resizable=yes');
			return false;
		}
		var version = (typeof o["v"]!="undefined" && o.v!="") 
						? ( (o.v.length==1) 
							? o.v 
							: o.v.substr(1) //old links use to look like this: "r1"
						  )
						: "1"; //default to version 1
		o.v = version; //reset main object version
		switch(version){
			case "1": 
				var mARL = mlbMediaUtils.buildMediaARL(o);
				if( !mlbMediaUtils.isFreeProduct(o["pid"]) ){
					var _arl = mlbMediaUtils.workFlowUrlV1 + "?pid="    + o.pid + 
								( (mARL)     ? "&url="    + escape(mARL) : "") +
								( (o.cid)    ? "&cid="    + o.cid        : "") + 
								( (o.gid)    ? "&gid="    + o.gid        : "") + 
								( (o.inning) ? "&inning=" + o.inning     : "") + 
								( (o.top)    ? "&top="    + o.top        : "") + 
								( (o.fid)    ? "&fid="    + o.fid        : "");
					void(window.open(_arl));
				}
				else{ document.location.href=mARL; }
				return false;
			break;
			case "2":
				return true;
			break;
			case "3":
				//mlbMediaUtils.runRules(o);// run media meta xml rules
				return true;
			break;
			default: break;
		}
	},
	prePlayerLoad : function(o){
		console.log("/*********** mediaPlayer.prePlayerLoad");
		jQuery(".install_screens").hide();
		var streamType;
		// Get Flash Object
		if(mlbMediaUtils.flshObj==null){
			console.log("----> prePlayerLoad: Get Flash Object Reference");
			mlbMediaUtils.flshObj = document.getElementById("controls");
		}
		// Disable Navigation tabs by default
		console.log("----> prePlayerLoad: Disable Flash Tabs - default");
		mlbMediaUtils.flshObj.controlVideo({type:"disableTabs"});
		// Process Data Recieved (part of rules logic) if not in postLogin flow
		if(!mlbMediaUtils.isPostLogin){
			console.log("----> prePlayerLoad: Process Media data");	
			o = setV2MediaType(o); // set 'o.type' parameter for ver2 media links 
			o.mUrl = mlbMediaUtils.buildMediaARL(o); // Set Free Media Stream URL
			o.playOptions = {}; // Create play options for WMP & Silverlight (start time & end time for stream)
			if(o["startTime"] && o["startTime"]!=""){ o.playOptions.startTime = o.startTime; } // set start time option if passed in
			if(o["endTime"] && o["endTime"]!=""){ o.playOptions.endTime = o.endTime; } // set end time option i fpassed in
			console.log("----> prePlayerLoad: o.v="+o.v);	
			if(o.v=="2"){ //set v2 stream info
				console.log("----> prePlayerLoad: Process Media data VER 2");	
				streamType = (typeof o["type"]!="undefined") ? o["type"].split("_") : ["v", "free"]; 
				o.isLoginRequired = (streamType[1] != "free");
				o.isAudOrVid = streamType[0];
			}
			else if(o.v=="3"){ //set v3 stream info
				console.log("----> prePlayerLoad: Process Media data VER 3");
				streamType = (typeof o["type"]!="undefined") ? o["type"].split("_") : ["v", "free"]; 
				o.isLoginRequired = (streamType[1] != "free");
				o.isAudOrVid = streamType[0];
			} 
			mlbMediaUtils.currentMediaMeta = o; // store processed data set
		}
		if(!AutobahnUtils.isMac()){
			DeleteCookie("SLInstall");
			if(bam.media.isSilverLightInstalled()=="installed"){
				mlbMediaUtils.isPostInstall = true;
			}
			else {
				mlbMediaUtils.giveMeSomeOldSkool=true;
			}
		}
		hideAllPlayers();
	/*Start Debug*/
	console.log("#####@@@@@@@@@@###### mlbMediaUtils.installCookie="+mlbMediaUtils.installCookie);
	console.log("#####@@@@@@@@@@###### mlbMediaUtils.installCookieVal="+mlbMediaUtils.installCookieVal);
	console.log("----> prePlayerLoad: Output MPlayer Settings Object Values");
	var _tmp_vars = [];for(var key in o){_tmp_vars[_tmp_vars.length] = key + ":" + o[key]; };console.log("{"+ _tmp_vars.join("\n") +"}");
	if(typeof o["test_wmp"]!="undefined" && o.test_wmp=="1"){console.log("----> prePlayerLoad: Force WMP playback using test_wmp parameter");mlbMediaUtils.giveMeSomeOldSkool=true;}
	/*End Debug*/
		////////////////////////////////////////////////////////////
		// Now the good stuff... Playing the video/audio streams  //
		// return value kicks back to bam.media.MPlayer.play flow //
		////////////////////////////////////////////////////////////
		// Handle Login Cases
		if(o.isLoginRequired && !mlbMediaUtils.isPostLogin){
			console.log("----> prePlayerLoad: Login Required!!");
			if(mlbMediaUtils.workFlowFrame==null){
				mlbMediaUtils.workFlowFrame = bam.media.getMediaIframe("MLBPlayer_LoginAuth"); 
				mlbMediaUtils.workFlowFrame.resizeTo({w:mlbMediaUtils.workFlowFrameSize.width, h:mlbMediaUtils.workFlowFrameSize.height});
				jQuery(document.body).append(mlbMediaUtils.workFlowFrame);
				mlbMediaUtils.workFlowFrame.moveTo({x:0, y:53});
				mlbMediaUtils.workFlowFrame.style.zIndex="999";
				mlbMediaUtils.workFlowFrame.hide();
				console.log("Workflow screen created!!!");
			}
			var URL = mlbMediaUtils.buildWorkFlowUrl(o);
			mlbMediaUtils.workFlowFrame.show();
			mlbMediaUtils.workFlowFrame.src=URL;
			return false;
		}
		// Check If Installation flow is required and which to use
		else if(!mlbMediaUtils.giveMeSomeOldSkool && typeof o["mUrl"]!="undefined" && o.mUrl.indexOf(".flv")<0 && !mlbMediaUtils.isPostInstall){
			//var msLinks = Silverlight.GetLinks();
			var msLinks = {
				DirectDownload : Silverlight.fwlinkRoot + "92822",
				EULA           : Silverlight.fwlinkRoot + "93481",
				Privacy        : Silverlight.fwlinkRoot + "93483"
			};
			if(o["fid"] && o["fid"]=="mlb_lg1200"){
				console.log("----> prePlayerLoad: ---------INSTALL FLOW---------");
				jQuery(".slp_legacy_plyr").click(function(){
					console.log("---->  ---------OPT-OUT TO OLD WMP (NexDef Install Flow)---------");
					SetDateCookie("SLInstall", "2W_"+(new Date()).getTime(), bam.datetime.DateTime(new Date()).incrementYear(1), "/");
					AutobahnDetectionHandle.stop();
					mlbMediaUtils.giveMeSomeOldSkool = true;
					//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
					bam.tracking.track({wmpOptOut:{}});
					//setTimeout(function(){mlbPlayer.play(mlbMediaUtils.currentMediaMeta);}, 2000);
					console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
					mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
					jQuery("#MLBPlayer_NexDefInstall").fadeOut("normal");
				});
				jQuery("#MLBPlayer_NexDefInstall .slp_plugin_download").click(function(){
					bam.tracking.track({nexDefDownload:{}});
					document.location = msLinks.DirectDownload;
					return false;
				});
				jQuery("#MLBPlayer_NexDefInstall .slp_eula").attr("href", msLinks.EULA);
				jQuery("#MLBPlayer_NexDefInstall .slp_privacy").attr("href", msLinks.Privacy);
				switch(bam.media.isSilverLightInstalled()){
					case "notSupported" :
						if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
							jQuery("#slp_plugin .install_msgs").hide();
							jQuery("#slp_plugin .install_x").show();
							jQuery("#slp_notsupported").show();
							bam.tracking.trackDownload({pageName:"Major League Baseball: Media: Media Player: Non-Supported Browser",channel:"Media",install:"Non-Supported Browser"});
						}
						break;
					case "installed" :
						jQuery("#slp_plugin .install_msgs").hide();
						jQuery("#slp_plugin .install_x").hide();
						jQuery("#slp_plugin .install_check").show();
						break;
					default :
						if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
							bam.tracking.trackDownload({pageName:"Major League Baseball: Media: Media Player: Silverlight Install",channel:"Media",install:"Silverlight Install"});
							jQuery("#slp_plugin .install_msgs").hide();
							jQuery("#slp_plugin .install_x").show();
							jQuery("#slp_plugin .install_check").hide();
							jQuery("#nexdef_first").show();
						}
						break;
				}
				//if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
					if(AutobahnUtils.isMac()){ jQuery("#nexdef_plugin .nexdef_download").attr("href", mlbMediaUtils.nexDefMacInstaller); }
					else{ jQuery("#nexdef_plugin .nexdef_download").attr("href", mlbMediaUtils.nexDefWinInstaller); }
				//}
				new AutobahnDetection({
					showDownload   : false, // Do not allow download of Autobahn from this site
					onError        : mlbMediaUtils.autobahnError,
					onNotFound     : mlbMediaUtils.autobahnNotFound, // When Autobahn isn't found
					onNeedsUpgrade : mlbMediaUtils.autobahnNeedsUpgrade, // When Autobahn needs to upgrade
					onPassed       : mlbMediaUtils.autobahnPassed // When Autobahn is found, call the autobahnActive function
				}).start();
				//if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
					mlbMediaUtils.isPostLogin = false;
					mlbMediaUtils.isPostInstall = true;
					return false;
				//}
			}
			else if(bam.media.isSilverLightInstalled()=="notSupported" || bam.media.isSilverLightInstalled()=="notInstalled"){
				if(mlbMediaUtils.runInstallCookieRules()==true){ // check if ok to display install screen
					switch(bam.media.isSilverLightInstalled()){
						case "notSupported" :
							jQuery("#MLBPlayer_SLPNotSupported").fadeIn("normal");
							bam.tracking.trackDownload({pageName:"Major League Baseball: Media: Media Player: Non-Supported Browser",channel:"Media",install:"Non-Supported Browser"});
							jQuery("#MLBPlayer_SLPNotSupported .slp_legacy_plyr").click(function(){
								console.log("---->  ---------OPT-OUT TO OLD WMP (Silverlight Install Flow)---------");
								jQuery("#MLBPlayer_SLPNotSupported").fadeOut("fast");
								mlbMediaUtils.giveMeSomeOldSkool = true;
								//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
								bam.tracking.track({wmpOptOut:{}})
								SetDateCookie("SLInstall", "2W_"+(new Date()).getTime(), bam.datetime.DateTime(new Date()).incrementYear(1), "/");
								//mlbPlayer.play(mlbMediaUtils.currentMediaMeta);
								console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
								mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
							});
							return false;
							break;
						case "notInstalled" :
							jQuery("#MLBPlayer_SLPInstall").fadeIn("normal");
							jQuery("#MLBPlayer_SLPInstall .slp_eula").attr("href", msLinks.EULA);
							jQuery("#MLBPlayer_SLPInstall .slp_privacy").attr("href", msLinks.Privacy);
							jQuery("#MLBPlayer_SLPInstall .slp_download").click(function(){
								bam.tracking.track({slDownload:{},callback:function(){document.location = msLinks.DirectDownload;}})							
								setTimeout(function(){	
									jQuery("#MLBPlayer_SLPInstall").fadeOut("fast", function(){
										jQuery("#MLBPlayer_SLPRestart").fadeIn("fast"); 
									});
								}, 1000)
								return false;
							});
							jQuery("#MLBPlayer_SLPInstall .slp_legacy_plyr").click(function(){
								console.log("---->  ---------OPT-OUT TO OLD WMP (Silverlight Install Flow)---------");
								jQuery("#MLBPlayer_SLPInstall").fadeOut("fast");
								mlbMediaUtils.giveMeSomeOldSkool = true;
								//mlbMediaUtils.setWMPOptOutIds(); /////////TEMP FIX//////////
								bam.tracking.track({wmpOptOut:{}})
								SetDateCookie("SLInstall", "2W_"+(new Date()).getTime(), bam.datetime.DateTime(new Date()).incrementYear(1), "/");
								//mlbPlayer.play(mlbMediaUtils.currentMediaMeta);
								console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
								mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
							});
							bam.tracking.trackDownload({pageName:"Major League Baseball: Media: Media Player: Silverlight Install",channel:"Media",install:"Silverlight Install"});
							return false;
							break;
						default: break;
					}
					mlbMediaUtils.isPostLogin = false;
					mlbMediaUtils.isPostInstall = true;
				}
			}
		}
		else if(mlbMediaUtils.giveMeSomeOldSkool && o["fid"] && o["fid"]=="mlb_lg1200"){
			console.log("--------------------> call mlbMediaUtils.flshObj.playFromScenario("+mlbMediaUtils.scenarios.wmpOptOut+")");
			mlbMediaUtils.flshObj.playFromScenario(mlbMediaUtils.scenarios.wmpOptOut);
		}
		// Play Flash Ad if adUrl is passed in
		if(typeof o["adUrl"]!="undefined" && o["adUrl"].indexOf(".flv")>-1){
			console.log("prePlayerLoad: ### Play Flash Ad ###");
			mlbMediaUtils.inAdMode = true;
			console.log("Flash Ad: ### Enable Flash Tabs ###");
			mlbMediaUtils.flshObj.controlVideo({type:"enableTabs"});
			mlbMediaUtils.flshObj.controlVideo([{type:'show'}]);
			mlbMediaUtils.flshObj.startPlaylist([{ type:'dartPreroll', prerollPath: o.adUrl }]); //Ad Url
			return true;
		}
		else if(o.mUrl.indexOf(".flv")>-1){
			console.log("prePlayerLoad: ### Play Flash Video ###");
			console.log("Flash Player: ### Enable Flash Tabs ###");
			mlbMediaUtils.flshObj.controlVideo({type:"enableTabs"});
			mlbMediaUtils.flshObj.controlVideo([{type:'show'}]);
			console.log("Flash Player: ### After Show Flash ###");
			mlbMediaUtils.flshObj.startPlaylist([{type:'video', videoPath: o.mUrl}]); // Flash Stream
			console.log("Flash Player: ### After Flash startPlayList ### URL:\n"+o.mUrl);
			mlbMediaUtils.isPostLogin = false;
			bam.tracking.track({
				async_media:{
					mediaID: (o["id"]) ? o.id : (o["w_id"]) ? o.w_id : "Not Available",
					playerType:"Flash",
					playerContext:"Media Player",
					contextVersion:"3.1",
					streamType:"Progressive Download",
					bitRate:"Not Available"
				}
			});
			return true;
		} 
		// Play WMP or Silverlight Stream
		else if(mlbMediaUtils.giveMeSomeOldSkool){
			console.log("prePlayerLoad: ### Play WMP Video ###");
			// Create/Play WMP
			kickItOldSkool(o.mUrl);
			mlbMediaUtils.isPostLogin = false;
			bam.tracking.track({
				async_media:{
					mediaID:(o["id"]) ? o.id : (o["w_id"]) ? o.w_id : "Not Available",
					playerType:"Windows Media Player",
					playerContext:"Media Player",
					contextVersion:"3.1",
					streamType:"Stream",
					bitRate:"Not Available"
				}
			});
			return true;
		}
		else{
			console.log("prePlayerLoad: ### Play Silverlight Video ###");
			// Create/Play Silverlight Player
			dropItLikeItsHot(o.mUrl);
			mlbMediaUtils.isPostLogin = false;
			bam.tracking.track({
				async_media:{
					mediaID:(o["id"]) ? o.id : (o["w_id"]) ? o.w_id : "Not Available",
					playerType: (o["fid"] && o["fid"]=="") ? "Silverlight High Quality" :"Silverlight",
					playerContext:"Media Player",
					contextVersion:"3.1",
					streamType:"Stream",
					bitRate:"Not Available"
				}
			});
			return true;
		}
		return false;
		// Hide Players
		function hideAllPlayers(){
			console.log("In hideAllPlayers()");
			if(mlbMediaUtils.wmpObj!=null){
				//alert("About to hide WMP");
				console.log("Hide WMP Player (move offscreen first)\n" +"#MLBPlayer_WMP" + mlbMediaUtils.wmpInstanceCount);
				try{
					mlbMediaUtils.wmpObj.moveTo({x:-2000, y:-2000});
					//setTimeout(
						//function(){
							jQuery("#MLBPlayer_WMP" + mlbMediaUtils.wmpInstanceCount).remove();
							mlbMediaUtils.wmpObj=null;
						//}, 
						//200
					//);
				}
				catch(e){};
			}
			if(mlbMediaUtils.slpObj!=null){  console.log("Hide Silverlight Player");jQuery("#MLBPlayer_SLPWrapper").css({visibility:"hidden"});jQuery("#MLBPlayer_SLP").css({visibility:"hidden"});mlbMediaUtils.slpObj.stop(); }
			if(mlbMediaUtils.flshObj!=null){ console.log("Hide Flash Player"); try{ mlbMediaUtils.flshObj.controlVideo([{type:'stop'}]); mlbMediaUtils.flshObj.controlVideo([{type:'hide'}]); } catch(e){} }
		}
		// Launch WMP Obj
		function kickItOldSkool(url){
			mlbMediaUtils.wmpInstanceCount++;
			console.log("/*********** mediaPlayer.prePlayerLoad::kickItOldSkool");
			console.log("---->  mediaPlayer.prePlayerLoad: Launch WMP: ###FFFF#### Enable Flash Tabs ###FFFF####");
			mlbMediaUtils.flshObj.controlVideo({type:"enableTabs"});
			//if(mlbMediaUtils.wmpObj==null){
				console.log("---->  mediaPlayer.prePlayerLoad: Launch WMP: Create WMP Object!!!!\n" + "MLBPlayer_WMP" + mlbMediaUtils.wmpInstanceCount);
				mlbMediaUtils.wmpObj = bam.media.createPlayer({
					id       : "MLBPlayer_WMP" + mlbMediaUtils.wmpInstanceCount,
					type     : "wmp",
					width	 : 630,
					height   : 360,
					mediaUrl : url
				});
				mlbMediaUtils.wmpObj.moveTo({x:2, y:100});
				jQuery("#MLBPlayer_WMP" + mlbMediaUtils.wmpInstanceCount).css({"z-index":"9999"})
			//}
			//else{
			//	console.log("---->  mediaPlayer.prePlayerLoad: Launch WMP: Create WMP Object!!!!");
			//	mlbMediaUtils.wmpObj.src="";
			//	mlbMediaUtils.wmpObj.moveTo({x:2, y:100});
			//	mlbMediaUtils.wmpObj.play({mediaUrl:url, playOptions: mlbMediaUtils.currentMediaMeta.playOptions});
			//}
		}
		// Launch Silverlight Obj
		function dropItLikeItsHot(url){
			console.log("/*********** mediaPlayer.prePlayerLoad::dropItLikeItsHot");
			console.log("----> Create Silverlight: enable flash tabs");
			mlbMediaUtils.flshObj.controlVideo({type:"enableTabs"});
			if(mlbMediaUtils.slpObj==null){
				console.log("----> Create Silverlight: mlbMediaUtils.slpObj == null");
				var wrapper = jQuery("#MLBPlayer_SLPWrapper").get(0);
				console.log("----> Create Silverlight: Set MLBPlayer_SLPWrapper to Visible");
				wrapper.style.visibility = "visible";
				console.log("----> Create Silverlight: before createPlayer");
				mlbMediaUtils.slpObj = bam.media.createPlayer({
					id        : "MLBPlayer_SLP",
					container : wrapper,
					type      : "silverlight",
					width     : "100%", 
					height    : "100%"
				});
				jQuery("#flashWrapper").css({visibility:"visible",position:"absolute",display:"block","z-index":"0"})
				jQuery("#MLBPlayer_SLP").css({visibility:"visible",display:"block","z-index":"2"})
				jQuery("#MLBPlayer_SLPWrapper").css({"background-color":"transparent",visibility:"visible",display:"block",position:"absolute","z-index":"1"})
				console.log("----> Create Silverlight: Done creating silverlight obj");
			}
			else{
				console.log("----> Create Silverlight: mlbMediaUtils.slpObj != null");
				jQuery("#flashWrapper").css({visibility:"visible",position:"absolute",display:"block","z-index":"0"})
				jQuery("#MLBPlayer_SLP").css({visibility:"visible",display:"block","z-index":"2"})
				jQuery("#MLBPlayer_SLPWrapper").css({"background-color":"transparent",visibility:"visible",display:"block",position:"absolute","z-index":"1"})
				console.log("----> Create Silverlight: Done creating silverlight obj");
				console.log("Media URL: \n"+mlbMediaUtils.currentMediaMeta.mUrl);
				mlbMediaUtils.slpObj.set_media_src( url, mlbMediaUtils.currentMediaMeta.playOptions );
			}
		}
		// Support old ver2 media type setting
		function setV2MediaType(o){
			if(!o["pid"] || o["pid"]!=''){
				switch(o.pid){
					case 'fps_lg'            : o.type = "v_sub";  break;
					case 'mlb_lg'            : o.type = "v_sub";  break;
					case 'mlb_lg_pr'         : o.type = "v_sub";  break;
					case 'mlb_tv_linescore'  : o.type = "v_sub";  break;
					case 'mlb_pghs'          : o.type = "v_sub";  break;
					case 'mlb_bb'            : o.type = "v_sub";  break;
					case 'mlb_cg'            : o.type = "v_sub";  break;
					case 'mlb_ga'            : o.type = "a_sub";  break;
					case 'bb_audio'          : o.type = "a_sub";  break;
					case 'bb_video'          : o.type = "v_sub";  break;
					case 'mlb_cchd'          : o.type = "v_free"; break;
					case 'gen_video'         : o.type = "v_free"; break;
					case 'gen_audio'         : o.type = "a_free"; break;
					case 'mlb_tp'            : o.type = "v_free"; break;
					case 'mlb_potg'          : o.type = "v_free"; break;
					case 'mlb_dv'            : o.type = "v_free"; break;
					case 'CWSVID2007'        : o.type = "v_sub";  break;
					case 'CWSVID2006'        : o.type = "v_sub";  break;
					case 'wbc_media_2009'    : o.type = "v_sub";  break;
					case 'mlb_media_mlb_wbc' : o.type = "v_sub";  break;
					case 'false'             : o.type = "v_free"; break;
					default                  : o.type = "v_free"; break;
				}
				document.cookie = "media_pid=" + o.pid + "; path=/; domain=mlb.com";
			}
			else{ o.pid = "v_free"; }
			return o;
		}
	}
});
bam.media.silverLightOnLoad = function(slpObj){
	console.log("mediaPlayer.silverLightOnLoad called!!");
	mlbMediaUtils.slpObj = slpObj;
	console.log("Media URL: \n"+mlbMediaUtils.currentMediaMeta.mUrl);
	mlbMediaUtils.slpObj.set_media_src(mlbMediaUtils.currentMediaMeta.mUrl, mlbMediaUtils.currentMediaMeta.playOptions);
	delete bam.media.silverLightOnLoad;
}

var playMedia2Backup = playMedia2;
var mediaPlayer = {
	play : function(o){	mlbPlayer.play(o);},
	setScenarioArray : function(s,p){ mlbPlayer.setScenarioArray(s,p); }
}
var playMedia2 = function(o){ mlbPlayer.play(o); }
