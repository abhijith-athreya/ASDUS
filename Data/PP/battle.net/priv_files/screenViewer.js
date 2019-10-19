/*
 * Lightbox and paging for images on blizzard.com
 *    sV = screenViewer
 */
var replacebr;
var openSubmissionNo;// only for images collection

var sV = {
	//initialize the screen viewer
	initialized: false,
	frame: null,
	frameContent: null,
	currentIndex: 0,
	copyLink: null,
	descImage:null,
	imageCollection: null,
	loader: null,
	t:null,
	searchKeyword:null,
	franchiseKeyword:null,
	imageCopyLinkURL:null,
	firstCopySetTimeId:null,
	secondCopySetTimeId:null,
	thirdCopySetTimeId:null,
	btnImage: null,
	artGalleryId: false,
	init: function()
	{
		//store references
		sV.frame   = $j("#screenViewer");
		sV.copyLink = $j("#viewerCopyLink");
		sV.descImage = $j("#viewerDescImage");
		sV.content = $j("#viewerContent");
		sV.loader  = $j("#loadingAnimation");

		sV.btnImage = new Image();
		sV.btnImage.src = Core.staticUrl + '/_images/lang/' + lang.replace('_','-') + '/btn-copylink.gif';

		//set top position
		$(sV.frame).css("top",$j(window).scrollTop() + "px")

		//show blackout and image
		$j(sV.frame).show();

		if(Browser.ie6 || Browser.ie7){ $j("#blackout").show(); $j("#blackout").height($j(document).height())}
		else  $j("#blackout").fadeTo(0, 0.6).fadeIn(1000);

		//only image collections have paging
		if(sV.imageCollection != null && sV.imageCollection.length > 1) {
			sV.enablePaging();
		} else {
			sV.disablePaging();
		}

		sV.initialized = true;
	},
	//go to next image
	nextImage: function()
	{	if(sV.t) return;
		//get proper index
		sV.currentIndex = sV.imageIndex("next");

		//set image
		sV.setImage(sV.imageCollection[sV.currentIndex]);

		return sV.currentIndex;
		//preload next image
	//	var preloadNextImage = new Image();
	//	preloadNextImage.src = sV.imageCollection[sV.imageIndex("next")];
	},
	//go to previous image
	prevImage: function()
	{
		//get proper index
		sV.currentIndex = sV.imageIndex("prev");

		//set image
		sV.setImage(sV.imageCollection[sV.currentIndex]);

		return sV.currentIndex;
	},
	//determine proper index of image collection
	imageIndex: function(direction)
	{
		if(sV.artGalleryId){
			if(direction == "prev"){
				return (sV.currentIndex+1 >= sV.imageCollection.length) ? 0 : sV.currentIndex+1;
			}else if(direction == "next"){
				return (sV.currentIndex-1 < 0) ? sV.imageCollection.length-1 : sV.currentIndex-1;
			}

		} else {
			if(direction == "prev"){
				return (sV.currentIndex-1 < 0) ? sV.imageCollection.length-1 : sV.currentIndex-1;
			}else if(direction == "next"){
				return (sV.currentIndex+1 >= sV.imageCollection.length) ? 0 : sV.currentIndex+1;
			}
		}
	},
	setVideo : function (title, width, height)
	{
		//set title
		$j("#viewerTitle").html(title);

		if(!sV.initialized){
			sV.init();

			//get video list and append it
			var videoList = $j("#video_list").clone();
			videoList.show();

			$j(sV.content).append(videoList);
		}
		//set dimensions (add 180 pixels for bottom thumbnails)
		sV.setContainerDimensions(width,(height*1 + 200), 0);
	},
	showImage: function(src)
	{
		if(!sV.initialized)
			sV.init();
		sV.setImage(src);
	},
	setImageCollection: function(imageCollection,index,captionList,searchKeyword,descList,franchiseKeyword,artGalleryId)
	{
		sV.searchKeyword = searchKeyword;

		if(artGalleryId){
			sV.artGalleryId = true;
		}

		if(franchiseKeyword){
			sV.franchiseKeyword = franchiseKeyword;
		}

		//set image collection
		sV.imageCollection = imageCollection;
		if(captionList) sV.captionList = captionList;
		if(descList) sV.descList = descList;

		if(!sV.initialized)
			sV.init();

		//set index
		sV.currentIndex = (index) ? index : 0;

		//set the image
		sV.setImage(sV.imageCollection[sV.currentIndex]);
	},
	setImage: function(src)
	{
		//create new image so we can tell when its done loading
		var image = new Image();
		image.src = src;

		//show loader only if image isnt already loaded
		if(!image.complete)
			$j(sV.loader).show();

		sV.loadImage(image);
	},
	loadVideo: function(name, width, height, clickedLink, title)
	{
		//strip other thumbails of selected style
		if(clickedLink){
			$j(".videoThumbnail").removeClass("selected");
			$j(clickedLink).addClass("selected");

		}

		var gameType = gt;
		var youtube = youtubeLink;
		var altLocale = (gameTrailersLoc[name] != '')?gameTrailersLoc[name]:locale

		var videoArray = gameType + "-" + name + "-" + altLocale  + ":" + gameType + "-" + name + ":" + "games/" + gameType + "/" + name;

		var ageGateStatus = "";

		if (gameType == "d3" && (name == "intro-movie" || name == "blacksoulstone" || name == "teaser" || name == "barbarian-overview" || name == "wizard-overview" || name == "monk-overview" || name == "witch-doctor-overview" || name == "demon-hunter-overview" ) ) {

			//GlobalVideoPlayer.initialize("videoContainer");

			if(locale != "en_us" && gameType == "d3" && (name == "intro-movie" || name == "blacksoulstone")) {
				cPath = akamaiBaseUrl + "blizzard/movies/games/" + gameType + "/" + name + "/captions/" + locale + ".xml";
				cDefaultOn = true;
			} else if ( name == "barbarian-overview" || name == "wizard-overview" || name == "monk-overview" || name == "witch-doctor-overview" || name == "demon-hunter-overview" ){
				cPath = "";
				cDefaultOn = false;
			} else if ((locale == "es_mx" && gameType == "d3") || (locale == "pt_br" && gameType == "d3") || (locale == "pl_pl" && gameType == "d3")) {
				cPath = akamaiBaseUrl + "blizzard/movies/games/" + gameType + "/" + name + "/captions/" + locale + ".xml";
				cDefaultOn = true;
			} else {
				cPath = akamaiBaseUrl + "blizzard/movies/games/" + gameType + "/" + name + "/captions/" + locale + ".xml";
				cDefaultOn = false;
			}

			ageGateStatus = GlobalVideoPlayer.getAgeGateStatus();
			

		} else {
			cPath = "";
			cDefaultOn = false;
		}


		if (gameType == "d3" || gameType == "sc2" || gameType == "wow" || gameType == "hots") {
			cRatingPath = akamaiBaseUrl + "global-video-player/ratings/" + gameType + "/" + locale.replace('_','-') + ".jpg"
		} else {
			cRatingPath = ""
		}

		var newFlashVars = {
		    flvPath: akamaiBaseUrl + "blizzard/movies/games/" + gameType + "/" + name + "/" + gameType + "-" + name + "-" + altLocale + ".flv",
		    flvWidth: width,
		    flvHeight: height,
		    autoPlay: true,
			ratingPath: cRatingPath,
			captionsDefaultOn: cDefaultOn,
			captionsPath: cPath
		};




		var noCache = new Date();
        noCache = "?nocache=" + noCache.getTime();

		var defaultVideoParams = {
			allowFullScreen:   "true",
		     bgcolor:           "#000000",
			allowScriptAccess: "always",
		     wmode:             "opaque",
		     menu:              "false",
		     base:              akamaiBaseUrl
		};

		var attributes = {
			id:   "videoContainer",
			name: "videoContainer"
		};

		sV.setVideo(title, width, height);
		

			if (ageGateStatus == "prompt" || ageGateStatus == "unavailable") {

				$j("#video_list", sV.content).hide();

				checkAgeGateVideo(function() {

					swfobject.embedSWF(akamaiBaseUrl + "global-video-player/themes/" + videoPlayerTheme + "/video-player.swf" + noCache, "videoContainer", width, height, "10", akamaiBaseUrl + "global-video-player/expressInstall.swf", newFlashVars, defaultVideoParams, attributes);
					$j("#video_list", sV.content).show();
				})
				/*
				newFlashVars.ageGatePath = akamaiBaseUrl + "global-video-player/themes/wow/age-gate.swf";
				newFlashVars.minAge      = ageGateMinAge;
				newFlashVars.dateFormat  = ageGateDateFormat;
				newFlashVars.locale      = loc;
				newFlashVars.ageGateStatus = ageGateStatus;

				GlobalVideoPlayer.initialize("videoContainer");
				*/
			} else {
			
				if (name == "youtube-reveal") {
					sV.youtubeEmbed(youtube, width, height);
					
				} else {
					swfobject.embedSWF(akamaiBaseUrl + "global-video-player/themes/" + videoPlayerTheme + "/video-player.swf" + noCache, "videoContainer", width, height, "10", akamaiBaseUrl + "global-video-player/expressInstall.swf", newFlashVars, defaultVideoParams, attributes);
				}
			}
			
			
	},
	
	youtubeEmbed: function(youtube, width, height){
		$j('#videoContainer').append($j('<object id="evil" width="'+ width +'" height="'+ height +'"><param name="movie" value="http://www.youtube-nocookie.com/v/'+ youtube +'?enablejsapi=1&version=3&autohide=1&autoplay=1&rel=0&showinfo=0&modestbranding=1&egm=0?enablejsapi=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube-nocookie.com/v/'+ youtube +'?enablejsapi=1&version=3&autohide=1&autoplay=1&rel=0&showinfo=0&modestbranding=1&egm=0&hd=1" type="application/x-shockwave-flash" width='+ width +' height="'+ height +'" allowscriptaccess="always" allowfullscreen="true"></embed></object>'));
	},
	
	reloadYoutube: function(youtube, width, height, title) {
		$j(".videoThumbnail").removeClass("selected");
		$j(".intro-youtube").addClass("selected");
		$j('.viewer-wrapper').empty().append('<div id="videoContainer">');
		$j("#viewerTitle").html(title);
		sV.youtubeEmbed(youtube, width, height);
	},
	
	//load the image and set the dimensions
	loadImage: function(image)
	{
		if(image.complete)
		{
			if(window.location.href.indexOf('fanart') > -1 || window.location.href.indexOf('conceptart') > -1 ){
				sV.setCopyUrl();
				sV.setContainerDimensions(image.width, image.height, sV.descImage.height() + 30);
			} else {
				sV.setContainerDimensions(image.width, image.height, 0);
			}

			//once loaded, set dimensions and holder html

			if(sV.descList != 'undefined' && sV.descList != null){
				sV.setImageDescription(sV.descList[sV.currentIndex]);
			}
			$j(sV.content).css("background-image","url("+image.src+")")
			$j(sV.loader).fadeOut(200);
			if(sV.captionList && sV.captionList[sV.currentIndex])
			{
				var captext = sV.captionList[sV.currentIndex];
				$j("#viewerTitle").html(captext);
			} else  $j("#viewerTitle").html('');

			if(sV.imageCopyLinkURL != 'undefined' && sV.imageCopyLinkURL != null){
				sV.setCopyUrlBtn(image);
			}
			openSubmissionNo = sV.currentIndex;
			clearTimeout(sV.t); sV.t = null
		} else{
			sV.t=window.setTimeout(function() { sV.loadImage(image) } ,50);
		}
	},
	setCopyUrl: function(){
		var hrefLocation = location.href.split('#')[0];

		if(window.location.search != ''){
			sV.imageCopyLinkURL = hrefLocation.split('?')[0];
		} else if(window.location.hash != ''){
			sV.imageCopyLinkURL = hrefLocation.split('#')[0];
		} else {
			sV.imageCopyLinkURL = hrefLocation;
		}

		if(sV.searchKeyword != 'undefined' && sV.searchKeyword != null){
			sV.imageCopyLinkURL += "?search=" + sV.searchKeyword;
		}else if(sV.franchiseKeyword){
			sV.imageCopyLinkURL += "?ip=" + sV.franchiseKeyword;
		}
		sV.imageCopyLinkURL += "#" + sV.currentIndex;
	},
	setCopyUrlBtn: function(image)
	{
		sV.copyLink.empty();

		var tCopyLink = $j('<div>').attr('id','link_text').append($j('<input>')
								   .attr('value',sV.imageCopyLinkURL))
								   .css('width',image.width - (sV.btnImage.width + 15) + "px");


		var btnCopyUrlDiv = $j('<div>').addClass('btn_copylink').css('width', sV.btnImage.width)
									   .css('background','url(' + sV.btnImage.src + ') 0 0 no-repeat')
									   .append($j('<div>').attr('id','btn_copyUrl'));

		sV.copyLink.append(btnCopyUrlDiv).append(tCopyLink).show();

		var flashvars = {"copyUrl" : sV.imageCopyLinkURL};
		var params = { menu:"false", wmode:"transparent", base:Core.staticUrl + "/_flash/", allowScriptAccess:"true" };
		swfobject.embedSWF(Core.staticUrl + "/_flash/_copyurl.swf", "btn_copyUrl", sV.btnImage.width, "21", "9.0.0", false, flashvars, params);

		$j("#btn_copyUrl").hover(
			function () {
				btnCopyUrlDiv.css('background-position','0 -21px');
			},
			function () {
				btnCopyUrlDiv.css('background-position','0 0');
			}
		);

		sV.copyLink.append(tCopyLink).show();
	},
	afterCopyUrl: function(){
		clearTimeout(sV.firstCopySetTimeId);
		clearTimeout(sV.secondCopySetTimeId);
		clearTimeout(sV.thirdCopySetTimeId);

		var copyUrlDiv =  $j('#link_text').children('input');
			if(!copyUrlDiv.data('copyUrlData')){
				copyUrlDiv.data('copyUrlData',copyUrlDiv.attr('value'));
			}
			copyUrlDiv.fadeOut(100);
			sV.firstCopySetTimeId = window.setTimeout(function() {
				copyUrlDiv.attr('value',GALLERY_MSG_DONECOPY).fadeIn(100).css('color','#00adef');
			} ,100);
			sV.secondCopySetTimeId = window.setTimeout(function() {
				copyUrlDiv.fadeOut(200);
			} ,1300);
			sV.thirdCopySetTimeId = window.setTimeout(function() {
				copyUrlDiv.attr('value',copyUrlDiv.data('copyUrlData')).css('color','#227593').fadeIn(200);
			} ,1500);
	},
	setImageDescription: function(desc){
		sV.descImage.empty();
		var descDiv = $j('<div>').text(desc);
		sV.descImage.append(descDiv).show();
	},
	showSubmission: function(submissionNo){// TO DO: fix set pages each to view screendshots
		/*
		var pageNumber = Gallery.getPageNumber(submissionNo);
		if(pageNumber != activePageNumber) {
			Gallery.setPage(pageNumber);
		}

		openSubmissionNo = submissionNo;
		*/
	},
	//set height and width of container
	setContainerDimensions: function(width,height,addheight)
	{
		$j(sV.frame).css("height",height + addheight + "px").css("width",width + "px");
		$j(sV.content).css("height",height + "px").css("width",width + "px");
	},
	//enable paging functionality and styles
	enablePaging: function()
	{
		//image collections have paging
		$j(sV.content).unbind('click');
		$j(sV.content).bind('click', function(){
			sV.nextImage();
		});

		$(sV.frame).addClass("viewerPaging");
	},
	//disable paging functionality and styles
	disablePaging: function()
	{
		//unbind click
		$j(sV.content).unbind("click");

		$(sV.frame).removeClass("viewerPaging");
	},
	//close the preview frame
	close: function()
	{
		$j(sV.frame).hide();
		$j("#blackout").hide();

		//clear background image and remove children
		$j(sV.content).css("background-image","none").empty();
		clearTimeout(sV.t); sV.t = null

		//create video container div to re-append
		var videoContainer = document.createElement("div");
			videoContainer.id = "videoContainer";
		var videoContainerWrapper = $j('<div>').addClass('viewer-wrapper').appendTo($j(sV.content));
		$j(videoContainerWrapper).html(videoContainer);


		//set initializers to false
		init = false;
		sV.initialized = false;
		sV.imageCollection = null;

		if(window.location.hash){
			if(window.location.hash.replace("#",'')!='' && window.location.hash.replace("#",'')!=null){
				window.location.hash='';
			}
		}
	}
};