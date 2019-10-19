var	mediaPref="",
    mediaParams = {},
    freeProds   = ['mlb_dv','mlb_potg','gen_video','gen_audio', 'video', 'audio','mlb_fga', 'mlb_tp', 'false', ''],
    vidProds    = ['mlb_lg', 'mlb_dv', 'gen_video', 'mlb_pghs', 'mlb_cg', 'mlb_potg', 'mlb_tp', 'mlb_bb', 'video'],
    arl_r       = "rtsp://a592.v108693.c10869.g.vr.akamaistream.net/ondemand/7/592/10869/v0001/mlb.download.akamai.com/10869/",
    arl_w       = "mms://a1503.v108692.c10869.g.vm.akamaistream.net/7/1503/10869/v0001/mlb.download.akamai.com/10869/",
    live_arl_r  = "rtsp://a1503.l10869[PORT].c10869.g.lr.akamaistream.net/live/D/1503/10869/v0001/reflector:[PORT]",
    live_arl_w  = "mms://a1503.l10869[PORT].c10869.g.lm.akamaistream.net/D/1503/10869/v0001/reflector:[PORT]",
	ver2_0      = {
					  name     : "mlb_player",
					  template : "/media/player/mp_tpl.jsp",
					  width    : 910,
					  height   : 640
				  },
	ver3_0      = {
					  name     : "mlb_player",
					  template : "/media/player/mp_tpl_silverlight.jsp",
					  width    : 1012,
					  height   : 660
				  },
	ver3_1      = {
					  name     : "MLBPlayer",
					  template : "/media/player/mp_tpl_3_1.jsp",
					  width    : 1012,
					  height   : 600
				  };

var mediaPlayer = new MPlayer(ver3_0);

mediaPlayer.preLaunch = function(o){
	if(o["inning"]) {
		window.open('/components/video/coming_soon.jsp','coming_soon','width=500,height=470,location=no,menubar=no,scrollbars=yes,status=yes,toolbar=no,resizable=yes');
		return false;
	}
	if(!o["pid"] || o["pid"]!=''){
		switch(o.pid){
			case 'mlb_lg'           : o.type = "v_sub";  break;
			case 'mlb_tv_linescore' : o.type = "v_sub";  break;
			case 'mlb_pghs'         : o.type = "v_sub";  break;
			case 'mlb_bb'           : o.type = "v_sub";  break;
			case 'mlb_cg'           : o.type = "v_sub";  break;
			case 'mlb_ga'           : o.type = "a_sub";  break;
			case 'bb_audio'         : o.type = "a_sub";  break;
			case 'bb_video'         : o.type = "v_sub";  break;
			case 'mlb_cchd'         : o.type = "v_free"; break;
			case 'gen_video'        : o.type = "v_free"; break;
			case 'gen_audio'        : o.type = "a_free"; break;
			case 'mlb_tp'           : o.type = "v_free"; break;
			case 'mlb_potg'         : o.type = "v_free"; break;
			case 'mlb_dv'           : o.type = "v_free"; break;
			case 'CWSVID2007'       : o.type = "v_sub";  break;
			case 'CWSVID2006'       : o.type = "v_sub";  break;
			case 'false'            : o.type = "v_free"; break;
			default                 : o.type = "v_free"; break;
		}
		document.cookie = "media_pid=" + o.pid + "; path=/; domain=mlb.com";
	}
return true;
}
/*
// SilverLight Player Settings
*/
var SLPlayer = new MPlayer.SilverLightPlayer({
	name: "articlePlayer",
	xaml: "/silverlight/viral_video_player/1.0/MlbVideoPlayer.xaml",
	width: 277,
	height: 195
});
SLPlayer.articleImgId = null;
SLPlayer.preWrite = function(o){
	var showArticleImg = false;
	if(typeof bam=="undefined"){bam={};document.write("<scr"+"ipt src='/shared/scripts/bam.packed.js'></script>");}
	if(typeof bam["FlvPlayer"]=="undefined"){document.write("<scr"+"ipt src='/shared/scripts/bam.FlvPlayer.js'></script>");}
	if(typeof bam["tracking"]=="undefined"){document.write("<scr"+"ipt src='/shared/scripts/bam.tracking.js'></script>");}
	SLPlayer.articleImgId = o["imgId"];
	if(o["mid"] || o["mid"]!=null){
	 	var metaFilePath  = "/gen/multimedia/detail/",
			metaFileId    = o.mid.toString();
		this.flashPlayer = null;
		this.trackPlayer = function(){};
		// media metafile location
		var dateStr   = metaFileId.substring(0,4) + "/" + metaFileId.substring(4,6) + "/" + metaFileId.substring(6,8),
			contentId = metaFileId.substring(8);
		var metaFile = metaFilePath + dateStr + "/" + contentId + ".xml";
		// player html
		document.write(
			"<div id='flashEmbedPlayer' style='width:277px;padding:0 0 5px;'>" +
				"<div id='videoTitle' style='font-size:11px;padding:3px 5px 3px 28px;color:#26A1FE;border-bottom:1px solid #fff;font-weight:bold;background:#000 url(/images/media/video_icon.gif) no-repeat 3px 4px;' align='left'></div>" +
				"<div id='videoObjContainer' style='background-color:#000;height:195px;'></div>" +
				"<div id='videoCaption' align='left' style='padding:3px 5px;background-color:#000;'><a id='video_page_link' href='#' style='color:#fff;font-size:11px;font-weight:bold;'>Enlarge video and watch related clips &raquo;</a></div>" +
			"</div>"
		);
		setTimeout(function(){
			$("#video_page_link").click(function(){
				bam.tracking.track({
					async:{
						isDynamic    : false,
						compName     : "Embedded Article Page Video",
						compActivity : "Video Page Link Click",
						actionGen    : true
					},
					callback:function(){
						document.location = "/media/video.jsp?mid=" + o.mid;
					}
				}, $(this)[0]);
				return false;
			});
			bam.tracking.track({
				async:{
					isDynamic     : false,
					compName      : "Embedded Article Page Video",
					compActivity  : "Impression",
					userGenerated : false
				}
			}, $(this)[0]);
		}, 200);
		// get meta file
		$.get(metaFile, function(xmlData){
			var metaData = {},
				thumbnailScenario = xmlData.getElementsByTagName("thumbnailScenario"),
				headline = xmlData.getElementsByTagName("headline");
			metaData.headline = (headline[0].firstChild)  ? headline[0].firstChild.nodeValue : "";
			metaData.urls     = xmlData.getElementsByTagName("url");
			metaData.img      = (thumbnailScenario.length>0 && thumbnailScenario[0].firstChild)  ? thumbnailScenario[0].firstChild.nodeValue : "";
			metaData["800K"]  = {exist:false};
			metaData["400K"]  = {exist:false};
			$.each(metaData.urls, function(i, url){
				if (url.getAttribute("playback_scenario")=="MLB_FLASH_400K_PROGDNLD"){
					if (url.firstChild && url.firstChild.nodeValue){
						metaData["400K"].curVideoUrl = url.firstChild.nodeValue;
						metaData["400K"].curVideoId  = url.getAttribute("id");
						metaData["400K"].exist = true;
					}
				}
				else if (url.getAttribute("playback_scenario")=="MLB_FLASH_800K_PROGDNLD"){
					if (url.firstChild && url.firstChild.nodeValue){
						metaData["800K"].curVideoUrl = url.firstChild.nodeValue;
						metaData["800K"].curVideoId  = url.getAttribute("id");
						metaData["800K"].exist = true;
					}
				}
				else if (url.getAttribute("speed")=="400" && url.getAttribute("type")=="flash-video"){ // handle v2 metafile
					metaData["400K"].curVideoUrl = url.firstChild.nodeValue;
					metaData["400K"].curVideoId  = url.getAttribute("id");
					metaData["400K"].exist = true;
				}
				else if (url.getAttribute("speed")=="800" && url.getAttribute("type")=="flash-video"){ // handle v2 metafile
					metaData["800K"].curVideoUrl = url.firstChild.nodeValue;
					metaData["800K"].curVideoId  = url.getAttribute("id");
					metaData["800K"].exist = true;
				}
			});
			metaData.url = (metaData["400K"].exist) ? metaData["400K"].curVideoUrl : metaData["800K"].curVideoUrl;
			metaData.id  = (metaData["400K"].exist) ? metaData["400K"].curVideoId  : metaData["800K"].curVideoId;
			if(typeof metaData.url=="undefined"){
				setTimeout(function(){$("#flashEmbedPlayer").hide();}, 200);
				SLPlayer.showArticleImg();
				return false;
			}
			SLPlayer.trackPlayer = function(){
				bam.tracking.track({
					async_media:{
						mediaID        : metaData["id"] || "Not Available",
						playerType     : "Flash",
						playerContext  : "Article Page",
						contextVersion : "2.0",
						streamType     : "Progressive Download",
						bitRate        : (metaData["400K"].exist) ? "400K" : "800K"
					}
				});
			}
			// delay FlvPlayer creation to make sure bam.FlvPlayer.js is loaded
			setTimeout(function(){
				$("#videoTitle").append(metaData.headline);
				if(typeof console!="undefined"){console.log("/*********** SLPlayer.preWrite... before SLPlayer.flashPlayer setting");}
				SLPlayer.flashPlayer = new bam.FlvPlayer({
					skin           : "/flash/video/v2/skins/mlb_teamHPmini.swf",
					hideControls   : false,
					self           : "SLPlayer.flashPlayer",
					elemId         : "FlashPlayer",
					height         : 195,
					width          : 277,
					debugMode      : true,
					containerId    : "videoObjContainer",
					defaultVolume  : 35,
					onPlayerLoaded : function(){
						if(typeof console!="undefined"){console.log("/*********** SLPlayer.flashPlayer onPlayerLoaded called");}
						SLPlayer.flashPlayer.setBeginPoster('/shared/flash/video/beginPoster.swf?stagew=277&stageh=195&w=215&h=121&thumb=' + escape(metaData.img));
						SLPlayer.flashPlayer.onPlaylistBegin = function() { SLPlayer.trackPlayer(); };
						SLPlayer.flashPlayer.setPlaylist([
							{type:"video", videoPath: metaData.url}
						]);
					}
				});
			}, 200);
		});
	}
	else { SLPlayer.showArticleImg(); }
	return false;
}
//Display article image if available
SLPlayer.showArticleImg=function(){
	if(SLPlayer.articleImgId){
		var articleImgDiv = document.getElementById(SLPlayer.articleImgId);
		if(articleImgDiv!=null){
			articleImgDiv.style.display = "block";
		}
	}
}
// Support for really old links
function playMedia(mURL, cURL, cw, ch, s, cparam, gid, version){
	version=(typeof version!="undefined" && version!="" && version!=null) ? version : "r1";
	eval("playMedia2({"+
		 version.substr(0,1)+" : '"+mURL+
		 "', pid : '"+((s)?s:"false")+
		 ( (gid) ? "', gid : '"+gid : "")+
		 ( (version) ? "', v : '"+version : "" )+
		 "'})"
	);
}
function playMedia2(o){
	try{
		if(o["mid"]){ delete o.mid; }
		if(o["v"] && o["v"]=="3"){ o.v = "2"; }
	}catch(e){ }
	v=(o.v) ? ( (o.v.length==1) ? o.v : o.v.substr(1) ) : '1';
	ct1="";//GetCookie("ptid"); //tracking
	if(typeof _MP_EMBED!="undefined" && _MP_EMBED!="") o.embed = _MP_EMBED;
	mType=mediaPref='w'; //default to windows
	//grab correct media url based on cookie. If url isn't avalible, use other.
	mURL=( (o[mediaPref]) && (o[mediaPref]!='') ) ? o[mediaPref] : ( (mediaPref=='w') ? o[mType='r'] : o[mType='w'] );
	mediaParams=o; //reset for use in player
	mediaID = (o[mType+'_id']) ? "&mediaId="+o[mType+'_id'] : "";
	if( !isFreeProduct(o.pid) ){
		if(v=='2'){ mediaPlayer.play(mediaParams); }
		else{
			urlstr="/media"; // old media framework (before 2004 season)
			if ( o.partner && (o.pid=="mlb_lg" || o.pid=="mlb_ga") ) SetSessionCookie("media_partner", o.partner, "/", "mlb.com");
			urlstr += "?pid=" + o.pid + 
							( (mURL)			? "&url="+escape(mURL)	: "") +
							( (o.cid)			? "&cid="+o.cid					: "") + 
							( (o.gid)			? "&gid="+o.gid					: "") + 
							( (o.inning)	? "&inning="+o.inning		: "") + 
							( (o.top)			? "&top="+o.top					: "") + 
							( (o.fid)			? "&fid="+o.fid					: "");
			void(window.open(urlstr));
		}
	}
	else{
		mediaParams.mType=mType;
		if( v=='1' || ( (o.embed) && (o.embed==0) ) ){
			if(mURL.indexOf("://")<0){
				if(mURL.charAt(0)=="/") mURL=mURL.substring(1);
				mediaParams.mUrl=(mType=='w') ? arl_w+mURL : arl_r+mURL;
			}
			void(document.location.href=mediaParams.mUrl);
		}
		else {
				mediaParams[mType] = mURL;
				mediaParams.urlstr="";
				mediaParams.mUrl="";
				mediaPlayer.play(mediaParams);
		}
	}
}
function isAudioProd(a_pid){
	if(a_pid=="mlb_ga" || a_pid=="gen_audio" || a_pid=="mlb_fga" || a_pid=="mlb_buff" || a_pid=="audios") return true;
	else return false;
}
function isVideoProd(pid){
	for(var x=0;x<vidProds.length;x++) if(vidProds[x]==pid) return true;
	return false;
}
function isFreeProduct(pid){
	for(var x=0;x<freeProds.length;x++) if(freeProds[x]==pid) return true;
	return true;
}
//Legacy Functions
function playMediaDV(fileName){ playMedia(fileName); }
function playMediaGV(thisURL){ alert("The media file you have requested is currently not availible."); }
function playMediaWWW(thisURL){ alert("The media file you have requested is currently not availible."); }
function playMediaGA(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaHD(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaLG(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaTTV(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaTTA(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaCG(fileName){ alert("The media file you have requested is currently not availible."); }
function playMediaJPV(fileName){ playMedia(fileName); }
function playMediaST(mURL, cURL, cw, ch, s, cparam){ playMedia(mURL); }
function playMediaMA(fileName){
	setFileNameEXT(fileName);
	if (thisFileName.indexOf("mlb/open/") > -1){ thisFileName = thisFileName.slice(thisFileName.lastIndexOf("mlb/open/"),thisFileName.length);}
	else if (thisFileName.indexOf("mlbr/mlbr/") > -1){ thisFileName = thisFileName.slice(thisFileName.lastIndexOf("mlbr/mlbr/"),thisFileName.length);}
	playMedia(thisFileName);
}
function playMediaMR(fileName){
	setFileNameEXT(fileName);
	if (thisFileName.indexOf("mlbr/mlbr/") > -1){ thisFileName = thisFileName.slice(thisFileName.lastIndexOf("mlbr/mlbr/"),thisFileName.length);}
	playMedia(thisFileName);
}
function playMediaTA(fileName,teamCode){
	setFileNameEXT(fileName);
	if (thisFileName.indexOf("mlb/open/") > -1){ thisFileName = thisFileName.slice(thisFileName.lastIndexOf("mlb/open/"),thisFileName.length);}
	playMedia(thisFileName);
}
function playMediaTV(fileName,teamCode){
	setFileNameEXT(fileName);
	if (thisFileName.indexOf("mlb/open/") > -1){ thisFileName = thisFileName.slice(thisFileName.lastIndexOf("mlb/open/")+9,thisFileName.length);}
	playMedia("mlb/open/" + thisFileName);
}
function setFileNameEXT(fileName){
	thisFileName = "";
	if (fileName.indexOf(".") > -1){
		thisFileName = fileName.slice(0,fileName.lastIndexOf("."));
		if (fileName.indexOf(".smil") > -1){ thisFileName = thisFileName + ".smil";}
		else if (fileName.indexOf(".smi") > -1){ thisFileName = thisFileName + ".smi";}
		else { thisFileName = thisFileName + ".rm";}
	}
	else { thisFileName = fileName + ".rm";}
}
