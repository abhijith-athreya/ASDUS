/**
 @author Henry Belmont
 @namespace bam.media.js
 @version 0.6
 */
bam.extend({
    media: (function() {
        // Private Variables
        var version = "0.5",
            $j = ($.constructor != jQuery.constructor) ? jQuery : $,
            silverlightVer = "1.0.21115.0",
            wmpPlayFrameUrl = "/shared/media/bam.wmp.jsp",
            asxBuilderUrl = "/shared/media/asx_builder.jsp",
            //videoPageUrl = "/video/play.jsp",
            workFlowUrlV1 = "/media",
            isMac = window.navigator.platform.toLowerCase().indexOf('mac') != -1 ? true : false,
            allPlayerObjs = {},
            wmpHTML = "<object id='[NAME]' name='[NAME]' classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6' src='[URL]' " + "width='[WIDTH]' height='[HEIGHT]'><param name='autoStart' value='true'>" + "<param name='uiMode' value='[UIMODE]'><param name='animationAtStart' value='0'>" + "<param name='transparentAtStart' value='true'><param name='url' value='[URL]'>" + "<param name='stretchToFit' value='[IERESIZE]'><param name='defaultFrame' value='wmpEventFrame'>" + "<param name='align' value='middle'><param name='showStatusBar' value='1'><param name='showTracker' value='1'>" + "<param name='showDisplay' value='false'>" + "<embed type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/MediaPlayer/' src='[URL]' " + "name='[NAME]' id='mplayer' width='[WIDTH]' " + "height='[HEIGHT]' autostart='1' displaysize='[OTHERRESIZE]' align='middle' animationatstart='0' " + "transparentatstart='1' showstatusbar='[CONTROLS]' showdisplay='0' showtracker='[CONTROLS]' " + "showcontrols='[CONTROLS]' defaultFrame='wmpEventFrame' swliveconnect='0' nojava='1'></embed></object>";

        //create global for use elsewhere
        if (window.Silverlight) {
            Silverlight.requiredVersion = silverlightVer;
        }

        // Activate BAM URL lib
        bam.loadSync(bam.homePath + "bam.url.js");
        bam.loadSync(bam.homePath + "bam.cookies.js");

        // Return media singleton
        return {

            /** 
             * Assembles URL for opening Media Player with appropriate content and launches popup window
             * @requires    jQuery, bam, bam.media, bam.tracking
             * @param       props {Object} Configuration hash
             */
            launchPlayer: function(props) {
	            
                var _env_vp, _checkcache, _checkprod, _checkbeta, _checkqa,
                    _mediaProps, _fullPlayerUrl, curParam, _clickOrigin = "", _team = "",
                    _flatMode;
				
				var isMlbSource = (!props.source) ? true : (props.source.indexOf("MLB")>-1 || props.source.indexOf("YOY")>-1 || props.source=="ROGERS") ? true : false;


                // device detection / redirects
                if (bam.env && bam.env.client) {

                    // don't launch for iphone or ipad
                    if (bam.env.client.isIPhone || bam.env.client.isIPad) {
                        if (props.source === "FULLCOUNT") {
                            window.open("http://mlb.mlb.com/");
                        } else {
                            location.href = "/mobile/ipad/";
                        }
                        return;
                    }
					
					// don't launch for android (except on GBTV/THEBLAZE)
					if((props.source !== "GBTV" && props.source !== "THEBLAZE") && bam.env.client.isAndroid) {
						location.href = "/mobile/android/unsupported.jsp";
						return;
					}

					if(bam.env.client.isVizio) {
						location.href = "/mobile/android/unsupported.jsp";
						return;
					}

                    if (bam.env.client.isTouchpad) {
                        location.href = "/mobile/touchpad/unsupported.jsp";
                        return;
                    }
					
                    if (bam.env.client.isPlaybook) {
                        location.href = "/mobile/blackberry/unsupported.jsp";
                        return;
                    }

                }
                
                if (typeof bam.mp4_config === "undefined") { // load config, if not loaded
                    bam.loadSync("/shared/scripts/bam.mp4_config.js");
                }
                
                
                
                // if calendar_event_id is unavailable, try to play in old player
                if (!props.calendar_event_id) {
                	if ((""+props.source).toUpperCase() === "WBC"){
                		this.openMediaPlayerPopUp(this.getWbcAdobePassUrl());
                		return;
                	} else {
                		playMedia2(props);
                		return;
                	}
                }
                
                // play Gameday Audio MEDIA_ON streams in Gameday
                // commented out for Spring Training
                /*
                if (props.media_type && props.media_type === "audio" && props.gid) {
                    location.href = "/mlb/gameday/index.jsp?gid=" + props.gid + "&mode=audio" + ( !! props.feed_code ? "&feed_code=" + props.feed_code : "") + ( !! props.c_id ? "&c_id=" + props.c_id : "");
                    return;
                }
                */
                
                // get clickOrigin if available
                if (bam.tracking && bam.tracking.clickOrigin) {
                    _clickOrigin = bam.tracking.clickOrigin;
                }
                
                if ( isMlbSource ) {
                	_team = window.club || "mlb";
                }
                
                // ===================================
                //  Launch MP5?
                // ===================================
                // TVMPFIVE-784 - Add logic to bam.media.js to always direct to MP5 and pass clickOrigin
                var alwaysLaunchMP5ForMlb = true;
                
            	var mp5Url = null;
            	
            	// BLZMPFIVE-43 - Create redirect for MP4 launch script
            	// Redirect THEBLAZE users to MP5 instead of MP4
            	if ( props.source === "THEBLAZE" )
            	{
                    mp5Url = "http://beta.video.theblaze.com/video/";
                    
                   	// use the current document's url to determine which domain to hit
                    _env_vp = document.URL.toLowerCase();
                    _checkcache = (_env_vp.indexOf("www.video.theblaze.com") !== -1);
                    _checkprod = (_env_vp.indexOf("www.video.theblaze.com") !== -1);
                    _checkbeta = (_env_vp.indexOf("betasecure.video.theblaze.com") !== -1 || _env_vp.indexOf("beta.video.theblaze.com") !== -1);
                    _checkqa = (_env_vp.indexOf("qa.video.theblaze.com") !== -1 || _env_vp.indexOf("qa2.video.theblaze.com") !== -1 || _env_vp.indexOf("qasecure.video.theblaze.com") !== -1);

                    if (_checkprod) {
                    	mp5Url = "http://www.video.theblaze.com/video/";
                    } else if (_checkbeta) {
                    	mp5Url = "http://beta.video.theblaze.com/video/";
                    } else if (_checkqa) {
                    	mp5Url = "http://qa.video.theblaze.com/video/";
                    }
            	}
            	
	            // If mp5 parameter is passed in, launch MP5
                var urlParamsString = window.location.search;
            	var launchMP5 = ( urlParamsString.indexOf("mp5=on") >= 0 || urlParamsString.indexOf("mp5=true") >= 0 );
            	
            	if (!launchMP5)
            	{
            		// If url param doesn't explicitly say to launch MP5, then perform logic to determine if we should launch MP5
                	if ( isMlbSource )
                	{
                		if (alwaysLaunchMP5ForMlb) {
        	         		launchMP5 = true;
                		} else {
                    		// Only support IE10+
            	         	var ieVersion = this.getInternetExplorerVersion();
            	         	if ( ieVersion > -1 && ieVersion < 10.0 ) {
            	         		// Unsupported IE verison
            	         		launchMP5 = false;
            	         	}
            	         	else
            	         	{
            	         		// All other browsers and IE versions that are supported
            	         		
                        		// Check for mpfiveBetaCookie cookie
            	                var mpfiveBetaCookie = bam.cookies.get('mpfiveBetaCookie');
            	                if (mpfiveBetaCookie === null || mpfiveBetaCookie === 'false' || mpfiveBetaCookie === false){
            	                	// If DNE or false, use MP4.
                	         		launchMP5 = false;
            	                } else {
            	                	// if value == true, use MP5.
                	         		launchMP5 = true;
            	                }
            	         	}
                		}
                	}
            	}
            	
            	
            	
                var useNexDefVersion = false;
            	
            	/* *** START *** MP4 LAUNCH LOGIC */
                // ===================================
                // Use MP4?
                // ===================================
            	// TVMPFIVE-1307 - Update bam.media.js launch script to always launch MP4 if mp4=true param present
            	// TVMPFIVE-2049 - MP4 media Player- need shareable link for Support
            	var launchMP4 = ( urlParamsString.indexOf("mp4=on") >= 0 || urlParamsString.indexOf("mp4=true") >= 0 );
            	if (launchMP4) {
            		launchMP5 = false;
            	}
            	
                // ===================================
                // Use NexDef version of MP4?
                // ===================================
	            // If nexdef parameter is passed in, use the NexDef path for MP4
            	var nexdefPassedIn = props['nexdef'];
            	useNexDefVersion = (nexdefPassedIn=='on' || nexdefPassedIn=='true');
                if (!useNexDefVersion) {
                	// Update logic around launching NexDef verison of MP4 to be based on the url
                	var urlParamsString = window.location.search;
                	useNexDefVersion = ( urlParamsString.indexOf("nexdef=on") >= 0 || urlParamsString.indexOf("nexdef=true") >= 0 );
                }
                
                // ===============================================================
            	// Always launch MP4 if useNexDefVersion==true or launchMP4==true
                // ===============================================================
            	if (launchMP4 || useNexDefVersion) {
            		launchMP5 = false;
            	}
            	
            	/* *** END *** MP4 LAUNCH LOGIC */
            	
            	
                // ===================================
                // Came from WBC interstitial?
                // ===================================
            	//TVMPFIVE-2047 - WBC | Update Login Flow
            	//Update bam.media.js launch script to check page URL for interstitialVisit=true URL param and pass it along if it's there
            	var _cameFromInterstitial = false;
            	var interstitialVisitParam = ( urlParamsString.indexOf("interstitialVisit=true") >= 0 );
            	if (interstitialVisitParam) {
                	_cameFromInterstitial = true;
            	}
                
            	
                // ===================================
                // Launch MP5?
                // ===================================
                if (launchMP5)
               	{
                	if ( isMlbSource )
                	{
	                    mp5Url = "http://m.mlb.com/tv/";
	                    
	                   	// use the current document's url to determine which domain to hit
	                    _env_vp = document.URL.toLowerCase();
	                    _checkcache = (_env_vp.indexOf("mlb.mlb") !== -1);
	                    _checkprod = (_env_vp.indexOf("www.mlb") !== -1);
	                    _checkbeta = (_env_vp.indexOf("betasecure.mlb") !== -1 || _env_vp.indexOf("beta.mlb") !== -1);
	                    _checkqa = (_env_vp.indexOf("qa.mlb") !== -1 || _env_vp.indexOf("qa2.mlb") !== -1 || _env_vp.indexOf("qasecure.mlb") !== -1);
	                    
	                	var useQA = ( urlParamsString.indexOf("dev=on") >= 0 || urlParamsString.indexOf("dev=true") >= 0 );
	                    if (useQA) {
	                    	if (_checkprod || _checkcache) {
	                    		props.environment = "prod";
	                    	}
	                    	
	                    	_checkprod = _checkbeta = false;
	                    	_checkqa = true;
	                    }
	                	
	                    if (_checkcache || _checkprod) {
	                    	mp5Url = "http://m.mlb.com/tv/";
	                    } else if (_checkbeta) {
	                    	mp5Url = "http://mbeta.mlb.com/tv/";
	                    } else if (_checkqa) {
	                    	mp5Url = "http://mqa.mlb.com/tv/";
	                    }
                	}
               	}
                
            	if ( mp5Url !== null )
            	{
                    if ( typeof props.calendar_event_id !== "undefined" ){
                        mp5Url += "e" + props.calendar_event_id + "/";
                    }
                    if ( typeof props.content_id !== "undefined" ){
                        mp5Url += "v" + props.content_id + "/";
                    }
                    
                    var mp5UrlParams = "";
                    if ( typeof props.media_type !== "undefined" ) {
                        //mp5Url += "m" + props.media_type + "/";
                    	mp5UrlParams += "&media_type=" + props.media_type;
                    }
                    
                    if ( typeof props.debug !== "undefined" ) {
                    	mp5UrlParams += "&debug=" + props.debug;
                    	
                    	/*if ( props.debug === "true" && (_checkbeta || _checkqa) ){
                        	mp5UrlParams += "&build=false";
                    	}*/
                    	
                    	// Fix for TVMPFIVE-1547 Integrate with grid page debug true state to enable media staging.
                    	if ( props.debug === "true" || props.debug === "on" ){
                        	mp5UrlParams += "&considerMediaStaging=true";
                    	}
                    }
                    
                    if ( typeof props.environment !== "undefined" ) {
                    	if ( !isMlbSource ) {
                        	mp5UrlParams += "&environment=" + props.environment;                    		
                    	}
                    	mp5UrlParams += "&env=" + props.environment;
                    }
                    
                    if ( _clickOrigin ) {
                    	mp5UrlParams += "&clickOrigin=" + _clickOrigin;
                    }
                    
                    if ( _team ) {
                    	mp5UrlParams += "&team=" + _team;
                    }
                    
                    if ( _cameFromInterstitial ) {
                    	mp5UrlParams += "&interstitialVisit=true";
                    }
                                        
                    
                    // Add the params
                    if ( mp5UrlParams.length > 0 )
                    {
                    	mp5Url += "?" + mp5UrlParams;
                    }
                    
                    //test URL
                    //mp5Url = "http://mbeta.mlb.com/tv/e14-380866-2014-04-24/v32214599/?debug=true&build=false";
                    
                    location.href = mp5Url;
                    return;
            	}
                
                
                
                


                // flat drill check //////////////////////
                _flatMode = false;
                
                if ( isMlbSource ) {
                    $.ajax({
                        type: "GET",
                        async: false,
                        cache: true,
                        url: "/media/player/mp4_flat_map.js",
                        dataType: "script",
                        success: function(data) {
                        	data = eval(data);
                            if (data[props.calendar_event_id]) {
                                _flatMode = true;
                                window.open("http://mlb.mlb.com/media/ext/play.html?url=" + data[props.calendar_event_id] + "&w=640&h=360", "mp4_flat", "height=500,width=660,resizable=0");
                            }
                        },
                        error:function(errorResponse) {
	                        if (typeof console !== "undefined") {
                                    console.log("bam.media.launchPlayer(): couldn't load /media/player/mp4_flat_map.js");
                                }
                        }
                    });
                }
                if (_flatMode) {
                    return;
                }
                
                
                ////////////////////////////////////////////////
                // MLB.TV vs. PostSeason.TV mini-interstitial //
                ////////////////////////////////////////////////
                /* Logic moved into MP4 wrapper
                var CHECK_FOR_POSTSEASON_INTERSTITIAL_ACTIVE = false;
                if ( CHECK_FOR_POSTSEASON_INTERSTITIAL_ACTIVE && isMlbSource )
                {
                    if (typeof props.media_type === "undefined" || props.media_type!='audio')
                    {
	                    var _calIdArr = props.calendar_event_id.split("-"),
	                        _y = _calIdArr[2],
	                        _m = _calIdArr[3],
	                        _d = _calIdArr[4],
	                        _gameDate = _y + _m + _d,
	                        _psStartDate = new Date("2014/09/30"),  // start of post-season
	                        _psEndDate = new Date("2014/11/01"),  // end of post-season
	                        _calIdDate   = new Date(_y+"/"+_m+"/"+_d),                        
	                        _todayDate = (bam.getFlipDisplayDate) ? bam.getFlipDisplayDate() : new Date(),
	                        _isGameLive = false,
	                        _gameProps; // will contain game params from multi-angle-epg, if game is live
	                    
	                    // @TODO it would be nice if we could key off of game.type and only do this for playoff games (ex: game.game_type == "D", "L", or "W")
	                    if ((_todayDate >= _psStartDate) && (_todayDate <= _psEndDate) && !props.skipIntr) { // param passed by links from interstitial to avoid recursion
	                        // get game data from multi-angle-epg. can't cache since game states change
	                        $.ajax({
	                            url: "/gdcross/components/game/mlb/year_" + _y + "/month_" + _m + "/day_" + _d + "/multi_angle_epg.xml",
	                            dataType: "xml",
	                            async: false,
	                            success: function(tvData) {
	                                var $game = $("game[calendar_event_id='" + props.calendar_event_id + "']", tvData);
	                                $game.find("angle").each(function(){
	                                    if (_isGameLive) {
	                                        return false;
	                                    } else {
	                                        var $media = $(this).find("media[platform='WEB_MEDIAPLAYER']");
	                                        if ( $media.attr("media_state") === "media_on" 
	                                        	 || (props.media_state=="MEDIA_STAGING" && $media.attr("media_state") === "media_staging") )
	                                        {
	                                            _gameProps = {
	                                                content_id: $media.attr("content_id"),
	                                                source: $media.attr("source"),
	                                                view_key: $media.attr("source"),
	                                                sponsor: $media.attr("sponsor")
	                                            };
	                                            _isGameLive = true;
	                                        }
	                                    }
	                                });
	                            }
	                        });
	
	                        if (_isGameLive) { // show mini-interstitial only if game is live
	   							bam.media.launchTvStreamSelect({
	                                mode: "watch",
	                                linkProps: props,
	                                gameProps: _gameProps,
	                                todayDate: _todayDate
	                            });
	                            return;
	                        }
	                    }
                    }
                }
                */

                /////////////////////////////////////////
                // if content_id and media_type are not set, try to find content_id for HD stream
                if ( isMlbSource ) {
                    if (!props.content_id) {
                        if (typeof props.media_type === "undefined") {
                            props.media_type = "";
                        }
                        $.ajax({
                            async: false,
                            url: "/media/player/mp4_hd_map.js",
                            dataType: "json",
                            success: function(data) {
                                if (data[props.calendar_event_id] && data[props.calendar_event_id][props.media_type]) {
                                    props.content_id = data[props.calendar_event_id][props.media_type];
                                }
                            },
                            error: function() {
                                if (typeof console !== "undefined") {
                                    console.log("bam.media.launchPlayer(): couldn't load /media/player/mp4_hd_map.js");
                                }
                            }
                        });
                    }
                }

                // default media props. will be extended with custom props and passed to player
                _mediaProps = {
                    calendar_event_id: "",
                    content_id: "",
                    media_id: "",
                    view_key: "",
                    media_type: "",
                    // "audio" || "video"
                    source: "MLB",
                    // 'MLB', 'WBC', 'YAHOO', etc.
                    sponsor: "MLB",
                    // 'MLB', 'TBS', etc.
                    clickOrigin: _clickOrigin,
                    affiliateId: _clickOrigin
                };
                
                //enable start time on fullcount only for now
                if (props.source === "FULLCOUNT"){
                	_mediaProps.start_time = "";
                }

                $.extend(_mediaProps, props);

                if (_mediaProps.source === "MLB") {
                    _mediaProps.team = window.club || "mlb";
                }
                
                // ===================================
                // Set MP4 base url (domain to use)
                // ===================================
                // For testing purposes, use passed-in value for override_mp4_baseurl if it exists
				var _mp4_baseurl = _mediaProps['override_mp4_baseurl'];
                if (_mp4_baseurl==null || _mp4_baseurl=='')
                {
                	// Get MP4 baseurl (edge server domain) based on the host webpage's environment
					_mp4_baseurl = (bam.env.host.getWebCacheServerURL) ? bam.env.host.getWebCacheServerURL() : "http://mlb.mlb.com";
					
	                if (!bam.env.host.getWebCacheServerURL) {
	                   	// If we can't determine the host webpage's domain, use the current document's url to determine which domain to hit
	                    _env_vp = document.URL.toLowerCase();
	                    _checkcache = (_env_vp.indexOf("mlb.mlb") !== -1);
	                    _checkprod = (_env_vp.indexOf("www.mlb") !== -1);
	                    _checkbeta = (_env_vp.indexOf("betasecure.mlb") !== -1 || _env_vp.indexOf("beta.mlb") !== -1);
	                    _checkqa = (_env_vp.indexOf("qa.mlb") !== -1 || _env_vp.indexOf("qa2.mlb") !== -1 || _env_vp.indexOf("qasecure.mlb") !== -1);
	
	                    if (_checkprod) {
	                        _mp4_baseurl = "http://mlb.mlb.com";
	                    } else if (_checkbeta) {
	                        _mp4_baseurl = "http://beta.mlb.com";
	                    } else if (_checkqa) {
	                        _mp4_baseurl = "http://qa.mlb.com";
	                    }
	                }
	            }
	            
	            
                // ===================================
                // Pass environment value if necessary
                // ===================================
	            // If environment is passed in, just use that value for backend service calls
            	var environmentPassedIn = _mediaProps['environment'];
                if (environmentPassedIn===null || environmentPassedIn==='')
                {
	                // Add environment property to ensure we connect to the proper backend data
	                if (bam.env && bam.env.host) {
		               	if (bam.env.host.isQA) {
							_mediaProps['environment'] = 'qa';
						}
						else if (bam.env.host.isBeta) {
							_mediaProps['environment'] = 'beta';
						}
					}
                }
                
                var mediaPlayerPath = bam.mp4_config.url;
                
                // ===================================
                // Use CI/Jenkins version of MP4?
                // ===================================
	            // If ci parameter is passed in, use the Continuous Integration path for MP4
                var useContinuousIntegration = false;
            	var continuousIntegrationPassedIn = _mediaProps['ci'];
            	useContinuousIntegration = (continuousIntegrationPassedIn=='on' || continuousIntegrationPassedIn=='true');
                if (!useContinuousIntegration) {
                	// Update logic around launching Jenkins-built verison of MP4 to be based on the url
                	var urlParamsString = window.location.search;
                	useContinuousIntegration = ( urlParamsString.indexOf("ci=on") >= 0 || urlParamsString.indexOf("ci=true") >= 0 );
                }
                
                if (useContinuousIntegration)
               	{
                	/*
                	var mediaPlayerPathContinuousIntegration = bam.mp4_config.url_ci;
                	if (mediaPlayerPathContinuousIntegration && mediaPlayerPathContinuousIntegration.length>0)
                	{
                	    mediaPlayerPath = mediaPlayerPathContinuousIntegration;
                	}
                	*/
                	_mediaProps['ci'] = 'true';
               	}
                                
                // ===================================
                // Use NexDef version of MP4?
                // ===================================
                if (useNexDefVersion)
               	{
                	_mediaProps['nexdef'] = 'true';
               	}
                
                // ===================================
                // Launch MP4
                // ===================================
                var launchUrlWithoutParams = _mp4_baseurl + mediaPlayerPath;
                
                //redirect the user to the WBC Adobe pass flow if they're 
                //trying to access a WBC stream and they haven't authenticated yet
                if (_mediaProps.source === "WBC") {
	                var wbc_ipid = bam.cookies.get('wbc_ipid'),
	            		wbc_fprt = bam.cookies.get('wbc_fprt');
	                if (wbc_ipid === null || wbc_fprt === null){
	                	launchUrlWithoutParams = this.getWbcAdobePassUrl();
	                }
	                else
	                {
						_mediaProps['appAccountName'] = 'wbc';
	                }
                }
                
                _fullPlayerUrl = launchUrlWithoutParams + "?" + $.param(_mediaProps);
                
                this.openMediaPlayerPopUp(_fullPlayerUrl);
            },

            openMediaPlayerPopUp : function(mediaPlayerUrl){
                var mediaPlayerWidth = bam.mp4_config.width;
                var mediaPlayerHeight = bam.mp4_config.height;
                
                // adjust height for chrome/mac
                var isChrome = ( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && navigator.platform.toLowerCase().indexOf('mac') > -1 );
                if (isChrome) {
                    // Add vertical offset because Chrome will show the location bar but not account for it in the height value
                	mediaPlayerHeight = parseInt(mediaPlayerHeight, 10) + 30;
                }
                
                // showtime!
                window.open(mediaPlayerUrl, "mp4", "height=" + mediaPlayerHeight + ",width=" + mediaPlayerWidth + ",resizable=0");
            },

            getWbcAdobePassUrl : function(){
            	var wbcAdobePassFlowBaseUrl;
            	if (bam.env.host.isQA){
            		wbcAdobePassFlowBaseUrl = "https://qasecure.mlb.com";
            	} else if (bam.env.host.isBeta){
            		wbcAdobePassFlowBaseUrl = "https://betasecure.mlb.com";
            	} else {
            		wbcAdobePassFlowBaseUrl = "https://secure.mlb.com";
            	}
            	return wbcAdobePassFlowBaseUrl + "/shared/media/player/adobepass/MLBN.html";
            },

            /**
             * Launches mini-interstitial presenting the user with .tv options.
             * @param cfg {Object}	Configuration
             * @TODO Add purchase links
             */
            launchTvStreamSelect: function(cfg) {
                var linkClass = "tv-watch",
                    linkText = "Watch Now";
                if (cfg.mode === "buy") {
                    linkClass = "tv-buy";
                    linkText = "Buy Now";
                }


                bam.loadSync(bam.homePath + "bam.popModule.js");
                bam.popModule.init({
                    css: "/shared/components/gameday/v6/css/gda-login-popModule.css",
                    overlayCss: "/shared/css/bam/bam.overlay.css"
                });
                
                var _wildCardStartDate = new Date("2013/10/01"),
                _divSeriesStartDate = new Date("2013/10/03"),
                _lcsStartDate = new Date("2013/10/11"),
                _lcsEndDate = new Date("2013/10/20");

				var _miniIntHtmlPostseasonTv = '';
	            var _postseasonTvProductsString = 'Postseason';
	            var _postseasonTvProductsBulletedList = '';
		        
	            var _todayDate = cfg.todayDate;
		        if (_todayDate<=_lcsEndDate)
		        {
		            _postseasonTvProductsString = 'National League Championship Series';
		            _postseasonTvProductsBulletedList = 'League Championship Series - NLCS only';
		            
		            if (_todayDate < _lcsStartDate) {
		                _postseasonTvProductsString = 'Division Series and ' + _postseasonTvProductsString;
		                _postseasonTvProductsBulletedList = 'Division Series - ALDS & NLDS<br />' + _postseasonTvProductsBulletedList;
		            }
		            if (_todayDate < _divSeriesStartDate) {
		                _postseasonTvProductsString = 'Wild Card games, ' + _postseasonTvProductsString;
		                _postseasonTvProductsBulletedList = 'Wild Card - AL & NL<br />' + _postseasonTvProductsBulletedList;
		            }
		            if (_todayDate < _wildCardStartDate) {
		                _postseasonTvProductsString = 'Tiebreaker game, ' + _postseasonTvProductsString;
		                _postseasonTvProductsBulletedList = 'Tiebreaker - AL<br />' + _postseasonTvProductsBulletedList;
		            }
		            
		        }
	            
		        _miniIntHtmlPostseasonTv += '<div id="mini-int-pstv" class="mp-option">' + '<h5>U.S./Canada Users - Postseason.TV *</h5>'
		                                  + '<p>Watch LIVE alternate angle companion coverage of the 2013 ' + _postseasonTvProductsString + '.</p>' 
		                                  + '<p><strong>' + _postseasonTvProductsBulletedList + '</strong></p>' 
		                                  + '<a href="/mlb/subscriptions/index.jsp" class="bam-button bam-button-mlbtv ' + linkClass + '">' + linkText + '</a>' 
		                                  + '</div>' +  '<p class="mp-legalese">* Postseason multi-angle coverage is presented in conjuction with TBS and MLB Network as a companion to the live broadcast feed.</p>';                                       
		        
		        bam.loadCSS("/style/media/mp4_mini_interstitial.css");
				var _miniIntHtmlInternational = '' + '<div id="mini-int">' + '<div id="mini-int-mlbtv" class="mp-option">' + '<h5>International Users - MLB.TV</h5>' + '<p>Watch every Postseason game LIVE on over 350 supported mobile and connected devices. Live games are available only outside of the U.S. and Canada.</p><p><strong><em>Live games NOT available in the U.S. and Canada.  Full game archives available approximately 90 minutes after each game.</em></strong></p>' + '<a href="/mlb/subscriptions/index.jsp?product=mlbtv" class="bam-button bam-button-mlbtv ' + linkClass + '">' + linkText + '</a>' + '</div>';
		        var _miniIntHtmlFooter = '' + '<p class="mp-legalese">All broadcasts subject to blackout restrictions. <a href="/mlb/subscriptions/index.jsp">Learn More</a></p></div>';
				
				var _miniIntHtml = _miniIntHtmlInternational + _miniIntHtmlPostseasonTv + _miniIntHtmlFooter;
		

				
                bam.popModule.show({
                    htmlContent: _miniIntHtml,
                    width: 445,
                    height: 360,
                    overlayOpacity: 0.8,
                    postShow: function() {
                        if (cfg.mode === "watch") {
                            // unbind default close handler and hack this in. @TODO update popModule to fire close event instead
                            $("#module_close a").unbind().bind("click", function(e) {
                                e.preventDefault();
                                bam.tracking.track({
                                    async: {
                                        isDynamic: false,
                                        compName: "Post Season Interstitial Options",
                                        compActivity: "Post Season Interstitial Close Button Click",
                                        actionGen: true
                                    }
                                });
                                bam.popModule.exit();
                            });
                            $("#mini-int-mlbtv a").unbind().bind("click", function(e) {
                                e.preventDefault();
                                $.extend(cfg.linkProps, {
                                    skipIntr: "true"
                                });

								cfg.linkProps.source = "MLB";
								cfg.linkProps.sponsor = "MLB";
								cfg.linkProps.view_key = "";
								
                                delete cfg.linkProps.content_id;
								bam.media.launchPlayer(cfg.linkProps);
                                bam.tracking.track({
                                    async: {
                                        isDynamic: false,
                                        compName: "Post Season Interstitial Options",
                                        compActivity: "Post Season Interstitial MLB.TV Button Click",
                                        actionGen: true
                                    }
                                });
                                bam.popModule.exit();
                            });
                            $("#mini-int-pstv a").unbind().bind("click", function(e) {
                                e.preventDefault();
                                $.extend(cfg.linkProps, cfg.gameProps, {
                                    skipIntr: "true"
                                });

								/* This was hardcoded at one time -- could be used for testing now
								cfg.linkProps.source = "MLB_POSTSEASON_MULTIANGLE_TBS";
								cfg.linkProps.sponsor = "MLB_TBSSKIN";
								cfg.linkProps.view_key = "MLB_POSTSEASON_MULTIANGLE_TBS";
								*/
								
                                bam.media.launchPlayer(cfg.linkProps);
                                bam.tracking.track({
                                    async: {
                                        isDynamic: false,
                                        compName: "Post Season Interstitial Options",
                                        compActivity: "Post Season Interstitial Postseason.tv Button Click",
                                        actionGen: true
                                    }
                                });
                                bam.popModule.exit();
                            });
                            bam.tracking.simPgView({
                                pageName: "Major League Baseball: Postseason Interstitial"
                            });
                        }
                    }
                });
            },

            // Returns the version of Internet Explorer or a -1
	        // (indicating the use of another browser).
            getInternetExplorerVersion: function() {
	         	var rv = -1; // Return value assumes failure.
	         	if (navigator.appName == 'Microsoft Internet Explorer')
	         	{
	         		var ua = navigator.userAgent;
	         		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	         		if (re.exec(ua) != null)
	         			rv = parseFloat( RegExp.$1 );
	         	}
	         	return rv;
	        },
	            

            /**
             * bam.media.launchNexDefInstaller()
             * Launches latest release NexDef installer (popup).
             * @param Object ex: {mode:"upgrade", ver:"min"}
             */
            launchNexDefInstaller: function(cfg) {
                var _cfg = {
                    mode: "",
                    version: ""
                };
                $.extend(_cfg, cfg);
                if (typeof bam["mp4_config"] === "undefined") {
                    bam.loadSync("/shared/scripts/bam.mp4_config.js");
                }
                var popUrl = ((_cfg.version !== "min") ? bam.mp4_config.requiredNexDefInstallPath : bam.mp4_config.minNexDefVersion) + ((_cfg.mode === "upgrade") ? "?mode=upgrade" : "");
                if (!popUrl || popUrl.match(/^\?/)) {
                    throw new Error("bam.media.launchNexDefInstaller: can't find installer path.");
                }
                window.open(popUrl, "nexDefInstaller", "height=400,width=600,resizable=0");
            },


            /** 
             * bam.media.getMetaFilePath() 
             * Returns location of media meta file given an "mid" or "content_id"
             * @param param {Object} Hash in one of two formats: {mid:"1234"} or {content_id:"34123"}
             */
            getMetaFilePath: function(param) {
                if (typeof param == "undefined") {
                    return false;
                }
                var rootPath = "/gen/multimedia/detail/";
                var filePath;
                switch (true) {
                case (typeof param.content_id !== "undefined"):
                    filePath = rootPath + param.content_id.replace(/^(\d+(\d)(\d)(\d))$/, "$2/$3/$4/$1") + ".xml";
                    break;
                case (typeof param.mid !== "undefined"):
                    filePath = rootPath + param.mid.replace(/^(\d{4})(\d{2})(\d{2})(\d+)$/, "$1/$2/$3/$4") + ".xml";
                    break;

                default:
                    filePath = "";
                    break;
                }
                return filePath;
            },


            /** 
             * bam.media.getMetaData() 
             * Returns data from media meta file for specified content_id. Supports memoization.
             * @param content_id {number}
             * @param fields {array} Optional param specifying which fields to return
             * @TODO use jQuery for XML parsing
             */
            getMetaData: function(content_id /*, fields[] */ ) {
                if (typeof content_id === "undefined") {
                    return false;
                }
                var _dataObj = {},
                    _fieldVals = {};
                if (bam.media.getMetaData._cache && bam.media.getMetaData._cache[content_id]) { // if in cache, use that
                    _dataObj = bam.media.getMetaData._cache[content_id];
                } else { // if not in cache, load from file
                    $.ajax({
                        type: "GET",
                        async: false,
                        cache: (!bam.env.host.isDev),
                        url: bam.media.getMetaFilePath({
                            "content_id": content_id
                        }),
                        dataType: "xml",
                        success: function(xmlData) {
                            var _getTag = function(tag) {
                                return xmlData.getElementsByTagName(tag)[0];
                            };
                            _dataObj = {
                                content_id: content_id,
                                date: (_getTag("media")) ? xmlData.getElementsByTagName("media")[0].getAttribute("date") : "",
                                duration: (_getTag("duration") && _getTag("duration").firstChild) ? _getTag("duration").firstChild.nodeValue : "",
                                headline: (_getTag("headline") && _getTag("headline").firstChild) ? _getTag("headline").firstChild.nodeValue : "",
                                kicker: (_getTag("kicker") && _getTag("kicker").firstChild) ? _getTag("kicker").firstChild.nodeValue : "",
                                blurb: (_getTag("blurb") && _getTag("blurb").firstChild) ? _getTag("blurb").firstChild.nodeValue : "",
                                bigBlurb: (_getTag("big-blurb") && _getTag("big-blurb").firstChild) ? _getTag("big-blurb").firstChild.nodeValue : "",
                                imagesByType: [],
                                // defined below
                                thumb: "",
                                // path to image type 7 - defined below
                                keywords: $( xmlData.getElementsByTagName("keyword") ).clone(),
                                urls: $( xmlData.getElementsByTagName("url") ).clone()
                            };
                            $.each(xmlData.getElementsByTagName("thumbnailScenario"), function(i, img) {
                                _dataObj.imagesByType[img.getAttribute("type")] = (img.firstChild && img.firstChild.nodeValue) ? img.firstChild.nodeValue : "";
                            });
                            _dataObj.thumb = _dataObj.imagesByType["7"] || "";
                        },
                        error: function() {
                            return false;
                        }
                    });
                }
                if (arguments[1] && arguments[1].constructor === Array) {
                    $.each(arguments[1], function(i, field) {
                        _fieldVals[field] = _dataObj[field];
                    });
                } else {
                    _fieldVals = _dataObj;
                }
                bam.media.getMetaData._cache = bam.media.getMetaData._cache || {};
                bam.media.getMetaData._cache[content_id] = _dataObj;
                return _fieldVals;
            },


            /** 
             * bam.media.getDurationInSeconds()
             * Converts strings in format 00:01:59 into 119.  
             * Supports other source formats as well (ex: "12", "01:34", "12:34:56:78")
             * If passed string of characters (not numbers), returns NaN
             * @param duration {string}
             * @return Integer
             */
            getDurationInSeconds: function(duration) {
                var vals = duration.split(":").reverse(),
                    i = 0,
                    secs = 0;
                while (vals[i]) {
                    secs += (i === 0) ? parseInt(vals[i], 10) : parseInt(vals[i], 10) * Math.pow(60, i);
                    i++;
                }
                return secs;
            },


            /**
             * Retrieves calendar_event_id for live game (if one exists) in which
             * the team with passed fileCode is playing.
             * @param {String} fileCode
             * @param {Date} date (optional) 
             */
            getLiveEventIdByTeam: function(fileCode /*, date */ ) {
                var calEventId, curDate = arguments[1] || new Date(),
                    yyyy = curDate.getFullYear(),
                    mm = curDate.getMonth() + 1,
                    dd = curDate.getDate(),
                    addLeadingZeros = function(c, l, a) {
                        return (a = []).join(a[l - ('' + c).length - 1] = 0) + c;
                    };
                mm = addLeadingZeros(mm, 2);
                dd = addLeadingZeros(dd, 2);
                $.ajax({
                    url: "/gdcross/components/game/mlb/year_" + yyyy + "/month_" + mm + "/day_" + dd + "/grid.json",
                    cache: true,
                    dataType: "json",
                    async: false,
                    success: function(gridData) {
                        $.each(gridData.data.games.game, function(i, game) {
                            if ((game.away_file_code === fileCode || game.home_file_code === fileCode) && game.media_state === "media_on") {
                                calEventId = game.calendar_event_id;
                                return false;
                            }
                        });
                    },
                    error: function() {}
                });
                return calEventId;
            },


            /**
             * Retrieves calendar_event_id for live game (if one exists) in which
             * the player with passed id is playing.
             * @param {number} playerId
             * @param {Date} date (optional)
             */
            getLiveEventIdByPlayer: function(playerId /*, date */ ) {
                var fileCode;
                $.ajax({
                    url: "/lookup/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27" + playerId + "%27",
                    cache: true,
                    async: false,
                    dataType: "json",
                    success: function(data) {
                        if (data.player_info.queryResults.row && data.player_info.queryResults.row.file_code) {
                            fileCode = data.player_info.queryResults.row.file_code;
                        }
                    },
                    error: function() {}
                });
                return (fileCode) ? bam.media.getLiveEventIdByTeam(fileCode, arguments[1]) : false;
            },


            /**
             @id getVersion
             @memberOf bam.media
             @method
             @return {String} Returns the current bam.media version.
             */
            getVersion: function() {
                return version;
            },
            /**
             @id dispatch
             @memberOf bam.media
             @method
             @param {Object} props Passed properties identify location and id of the requested media item.  Properties are contentId and dateStr.
             @return {false} Prevents links from going anywhere which is the desired behavior.  Redirect/Popup will be handled in the method. 
             */
            dispatch: function(mediaData) {
                if (typeof console != "undefined") {
                    console.log("################## bam.media.dispatch");
                }

                // skip dispatch rules if link is from TBS hot corner
                if (typeof mediaData["vid"] != "undefined" && (mediaData.vid == "tbs")) {
                    return mediaData;
                }
                // skip dispatch rules 
                if (typeof mediaData["bypass"] != "undefined" && mediaData.bypass == true) {
                    return mediaData;
                }
                // skip dispatch rules if mlb.tv link source
                if (typeof mediaData["pid"] != "undefined" && (mediaData.pid == "mlb_lg" || mediaData.pid == "mlb_ga")) {
                    return mediaData;
                }
                // skip dispatch rules if meta file id is missing
                if (typeof mediaData["mid"] == "undefined") {
                    return mediaData;
                }
                // end player flow if meta file id is missing or invalid					
                if (mediaData.mid.length >= 9) { // m(eta)id must be at least 9 characters long in order for operations below to work.
                    var dateStr = mediaData.mid.substring(0, 4) + "/" + mediaData.mid.substring(4, 6) + "/" + mediaData.mid.substring(6, 8);
                    var contentId = mediaData.mid.substring(8);
                    var mediaMetaFilePath = "/gen/multimedia/detail/" + dateStr + "/" + contentId + ".xml";

                    var xmlData = $.ajax({
                        url: mediaMetaFilePath,
                        async: false
                    }).responseXML;
                    var playbackScenarios = [];
                    var urlData = {};
                    var duration = "";
                    if (xmlData) {

                        if (typeof console != "undefined") {
                            console.log("----> url nodes legnth=" + xmlData.getElementsByTagName("url").length);
                        }

                        $j.each(xmlData.getElementsByTagName("url"), function(i, url) {
                            if (typeof console != "undefined") {
                                console.log("----> playback_scenario=" + url.getAttribute("playback_scenario"));
                            }
                            if (url.firstChild) {
                                playbackScenarios.push(url.getAttribute("playback_scenario"));
                                // (v3)
                                urlData[url.getAttribute("playback_scenario")] = {
                                    id: url.getAttribute("id"),
                                    url: url.firstChild.nodeValue
                                };

                                // (v2)
                                if (url.getAttribute("speed") == "400" && url.getAttribute("type") == "windows-media") {
                                    urlData["MLB_WM_400K_STREAM"] = {
                                        id: url.getAttribute("id"),
                                        url: url.firstChild.nodeValue
                                    };
                                }
                            }
                        });

                        // utility method for detecting duration
                        var isDurationLessThanMinutes = function(mins) {
                            var durationSecs = -1;
                            var durationNode = xmlData.getElementsByTagName("duration")[0];
                            if (durationNode && durationNode.firstChild && durationNode.firstChild.nodeValue) {
                                var duration = durationNode.firstChild.nodeValue;
                                if (typeof console != "undefined") {
                                    console.log("----> duration is: " + duration);
                                }
                                if (typeof(duration) == "string" && duration.length > 7) { // duration should be in format: HH:MM:SS
                                    durationSecs = parseInt(duration.substring(0, 2)) * 60 * 60 + parseInt(duration.substring(3, 5)) * 60 + parseInt(duration.substring(6, 8));
                                }
                            }
                            return (durationSecs > -1 && durationSecs < 60 * mins);
                        }

                        // utility method for checking if passed vid should be played in media player
                        var showVidInPlayer = function(vid) {
                            var vidsToShowInPlayer = ["08AL1B", "08AL2B", "08AL3B", "08ALC", "08ALO", "08ALSS", "08NL1B", "08NL2B", "08NL3B", "08NLC", "08NLO", "08NLSS"];
                            return ($j.inArray(vid, vidsToShowInPlayer) != -1);
                        }

                        // Handle playback accordingly based on available playback scenarios:
                        if (!showVidInPlayer(mediaData.vid) && ($j.inArray("MLB_FLASH_800K_PROGDNLD", playbackScenarios) != -1) && isDurationLessThanMinutes(10)) {
                            if (typeof console != "undefined") {
                                console.log("----> redirecting to video page");
                            }
                            //var clubParam = (typeof club != "undefined" && club != "mlb") ? "&c_id=" + club : "";
                            var midContent = mediaData.mid.substring(8);
                            location.href = 'http://m.mlb.com/' + club + '/video/v' + midContent;
                            return false;
                        } else {
                            // (v3) Default all links to 400k WMP
                            if (typeof urlData["MLB_WM_400K_STREAM"] != "undefined") {
                                if (typeof mediaData["w_id"] != "undefined") {
                                    delete mediaData.w_id;
                                }
                                mediaData.id = urlData.MLB_WM_400K_STREAM.id;
                                mediaData.w = urlData.MLB_WM_400K_STREAM.url;
                            } else if (typeof urlData["MLB_WM_400K_PROGDNLD"] != "undefined") {
                                if (typeof mediaData["w_id"] != "undefined") {
                                    delete mediaData.w_id;
                                }
                                mediaData.id = urlData.MLB_WM_400K_PROGDNLD.id;
                                mediaData.w = urlData.MLB_WM_400K_PROGDNLD.url;
                            }
                            if (mediaData.id & mediaData.mid && mediaData.w) {
                                return mediaData;
                            }
                        }

                    } else {
                        if (typeof console != "undefined") {
                            console.log("----> xmlData has no properties.  metafile is likely missing.");
                        }
                        return mediaData;
                    }
                }
                return mediaData;
            },
            isAutobahnInstalled: false,
            //isSilverLightInstalled : (typeof Silverlight!="undefined") ? Silverlight.isInstalled(silverlightVer) : false,
            silverLightOnLoad: function() {},
            /**
             @id createPlayer
             @memberOf bam.media
             @method
             @parameType object
             @param {String} id Set the id for new media player object.
             @param {String} type Set the type of media player to create. Only 'wmp' is supported for now.
             @param {String} mediaUrl Set the stream url for the player
             @param {String} adUrl Set the ad pre-roll url for the player
             @param {Number} width Set the width of the player object.
             @param {Number} height Set the height of the player object.
             @param {Number} top Set the top position of the player object.
             @param {Number} left Set the left position of the player object.
             @param {String} xaml Set XAML file url for Silverlight Player.
             @return {Object} Returns a new media player object.
             */
            createPlayer: function(o) {
                if (typeof o["type"] == "undefined" || typeof o["id"] == "undefined") {
                    throw new Error("bam.media.createPlayer: Missing required parameters in object (mediaUrl, type or id)");
                }
                var mediaUrl, width = (o["width"]) ? o.width : 320,
                    height = (o["height"]) ? o.height : 240,
                    top = (o["top"]) ? o.top : 1,
                    left = (o["left"]) ? o.left : 1,
                    xaml = (o["xaml"]) ? o.xaml : "/flash/mediaplayer/v3.1/mp.xaml?v=4",
                    container = (o["container"]) ? o.container : "",
                    unsupported = (o["unsupported"]) ? o.unsupported : "Browser Not Supported",
                    install = (o["install"]) ? o.install : "Browser Media Player Plugin Required",
                    windowless = (o["isWindowless"]) ? o.isWindowless : "false",
                    background = (o["background"]) ? o.background : "#FF000033"; //Added by Sam
                switch (o.type) {
                case "wmp":
                    (function() {
                        if (typeof o["mediaUrl"] == "undefined") {
                            throw new Error("bam.media.createPlayer: Missing mediaUrl parameter in object");
                            return false;
                        }
                        wmpIframe = bam.media.getMediaIframe(o.id);
                        $j(document.body).append(wmpIframe);
                        wmpIframe.resizeTo({
                            w: width,
                            h: height
                        });
                        wmpIframe.moveTo({
                            y: top,
                            x: left
                        });
                        allPlayerObjs[o.id] = wmpIframe;

                        wmpIframe.play = function(o) {
                            // Set ad pre-roll url
                            if (o["adUrl"] && o["adUrl"] != "" && !isMac) {
                                // check if ad url already has asx builder prepend (legacy ad urls)
                                if (o.adUrl.indexOf(asxBuilderUrl) > -1) {
                                    mediaUrl = asxBuilderUrl + "?a=" + escape(o.adUrl) + "&b=" + escape(o.mediaUrl);
                                } else {
                                    mediaUrl = asxBuilderUrl + "?a=" + escape(asxBuilderUrl + "?ad=" + o.adUrl) + "&b=" + escape(o.mediaUrl);
                                }
                            } else {
                                mediaUrl = o.mediaUrl;
                            }
                            // Query parameters for wmp iframe
                            var params = {
                                id: wmpIframe.id,
                                url: mediaUrl,
                                w: width,
                                h: height,
                                t: "video"
                            };
                            this.src = wmpPlayFrameUrl + bam.url.buildSearch(params);
                        };
                        wmpIframe.play(o);
                    })();
                    break;
                case "flash":
                    throw new Error("bam.media.createPlayer: Flash player object not supported yet");
                    break;
                case "silverlight":
                    if (typeof Silverlight != "undefined") {
                        if (typeof container != "object") {
                            throw new Error("bam.media.createPlayer: container param must be an html element object");
                        }
                        Silverlight.createObject(
                        xaml, // Source property value.
                        container, // DOM reference to hosting DIV tag.
                        o.id, // Unique plug-in ID value.
                        { // Per-instance properties.
                            width: width,
                            // Width of rectangular region of 
                            // plug-in area in pixels.
                            height: height,
                            // Height of rectangular region of 
                            // plug-in area in pixels.
                            enableHtmlAccess: 'true',
                            background: background,
                            // Background color of plug-in.
                            framerate: '15',
                            // MaxFrameRate property value.
                            isWindowless: windowless,
                            // Allows Silverlight to render html on top of it
                            version: silverlightVer // Silverlight version to use.
                        }, {
                            onError: null,
                            // OnError property value -- 
                            // event handler function name.
                            onLoad: null // OnLoad property value -- 
                            // event handler function name.
                        }, null);
                        //allPlayerObjs[o.id] = $j("#"+o.id+"Wrapper").get(0);
                    } else {
                        throw new Error("bam.media.createPlayer: Missing Silverlight object (silverlight.js)");
                    }
                    break;
                default:
                    throw new Error("bam.media.createPlayer: Invalid player type parameter");
                    break;
                }
                return allPlayerObjs[o.id];
            },
            /**
             @id createWMPObject
             @memberOf bam.media
             @method
             @paramType object
             @param {String} id Set the id for new media player object.
             @param {String} mediaUrl Set the stream url for the player
             @param {Number} width Set the width of the player object.
             @param {Number} height Set the height of the player object.
             @param {Boolean} resize
             @param {Boolean} controls Enable/Disable WMP native controls
             @param {String} type Set playback type to audio or video. Hides video window and replace with optional image.
             @param {String} targetElement The target html element to add the wmp object
             @return {Object} Returns a new windows media player object.
             */
            createWMPObject: function(o) {
                //::TODO:: Check for required parameters... set defaults for optional stuff
                var playerObj, wmpIframeObj, wmpTpl = wmpHTML.replace(/\[NAME\]/g, o.name).replace(/\[URL\]/g, o.url).replace(/\[HEIGHT\]/g, o.height).replace(/\[WIDTH\]/g, o.width);

                // ::TODO:: Forgot what this is for
                if (typeof o["resize"] != undefined && o["resize"] == true) {
                    wmpTpl = wmpTpl.replace(/\[IERESIZE\]/g, "true").replace(/\[OTHERRESIZE\]/g, "4");
                } else {
                    wmpTpl = wmpTpl.replace(/\[IERESIZE\]/g, "false").replace(/\[OTHERRESIZE\]/g, "1");
                }
                // disable/enable native controls
                if (typeof o["controls"] != undefined && o["controls"] == false) {
                    wmpTpl = wmpTpl.replace(/\[UIMODE\]/g, "none").replace(/\[CONTROLS\]/g, "0");
                } else {
                    wmpTpl = wmpTpl.replace(/\[UIMODE\]/g, "full").replace(/\[CONTROLS\]/g, "1");
                }
                // can't use jquery.html() because of IE activate issue (http://msdn2.microsoft.com/en-us/library/ms537508.aspx)
                // have to use innerHTML in external file to bypass
                document.getElementById(o.targetElement).innerHTML = wmpTpl;
                playerObj = $j("#" + o.name).get(0);
                try {
                    wmpIframeObj = window.parent.bam.media.getPlayerObj(o.iframeId);
                    this.setWMPControls({
                        wmpObject: playerObj,
                        controllerObj: wmpIframeObj
                    });
                } catch (e) {}
                return playerObj;
            },
            //::TODO:: move to global bam namespace (maybe new namespace called ui?)
            getMediaIframe: function(id) {
                var iframe = document.createElement("iframe"),
                    iframeStyle = iframe.style;

                iframe.id = id;
                iframe.frameBorder = "0";
                iframe.scrolling = "no";
                iframeStyle.position = "absolute";
                iframeStyle.width = "1px";
                iframeStyle.height = "1px";

                iframe.hide = function() {
                    this.moveTo({
                        x: -2000,
                        y: -2000
                    });
                };
                iframe.moveTo = function(o) {
                    this.previousLeft = this.style.left;
                    this.previousTop = this.style.top;
                    this.style.top = o.y + "px";
                    this.style.left = o.x + "px";
                };
                iframe.resizeTo = function(o) {
                    this.style.width = o.w + "px";
                    this.style.height = o.h + "px";
                };
                iframe.show = function() {
                    this.style.left = (this["previousLeft"]) ? this.previousLeft : "0";
                    this.style.top = (this["previousTop"]) ? this.previousTop : "0";
                };
                return iframe;
            },
            isSilverLightInstalled: function() {
				/*if( Silverlight.ua.Browser == "Unsupported"){
                    return "notSupported";
                }
                else */
                if (Silverlight.isInstalled(silverlightVer)) {
                    return "installed";
                } else {
                    return "notInstalled";
                }
            },
            /**
             @id setWMPControls
             @memberOf bam.media
             @method
             @parameType object
             @param {Object} wmpObjet A windows media player object.
             @param {Object} controller The controller object (iframe or div)
             @return {Boolean} Returns true of controls were set without error.
             */
            setWMPControls: function(o) {
                //::TODO:: Check for required parameters... set defaults for optional stuff
                var controller = o.controllerObj,
                    wmpObject = o.wmpObject,
                    _testing;
                // check if controller object is available (since its in parent window)
                try {
                    _testing = controller.tagName;
                } catch (e) {
                    return false;
                }

                //add try/catch for each function
                controller.stop = function() {
                    try {
                        wmpObject.controls.stop();
                    } catch (e) {}
                }
                controller.pause = function() {
                    try {
                        wmpObject.controls.pause();
                    } catch (e) {}
                }
                controller.setVolume = function(v) {
                    try {
                        wmpObject.settings.volume = v;
                    } catch (e) {}
                }
                controller.resume = function() {
                    try {
                        wmpObject.controls.play();
                    } catch (e) {}
                }
                controller.getPosition = function() {
                    var val = "";
                    try {
                        val = wmpObject.controls.currentPosition;
                    } catch (e) {};
                    return val;
                }
                controller.getPlayState = function() {
                    var val = wmpObject.playState;
                    return (val != "undefined") ? val : "";
                }
                controller.seek = function(t) {
                    try {
                        wmpObject.controls.currentPosition = t;
                    } catch (e) {}
                }
                controller.fullscreen = function() {
                    try {
                        if (wmpObject.playState == 3) wmpObject.fullScreen = 'true';
                    } catch (e) {}
                }
                controller.mute = function() {
                    try {
                        var m = wmpObject.mute;
                        wmpObject.mute = (m == "true") ? "false" : "true";
                    } catch (e) {}
                }

                return true;
            },
            /**
             @id getPlayerObj
             @memberOf bam.media
             @method
             @parameType arguments
             @param {String} id Player object id.
             @return {Object} Returns player object with the matching id or null.
             */
            getPlayerObj: function(id) {
                return allPlayerObjs[id];
            },
            addPlayerObj: function(id, obj) {
                allPlayerObjs[id] = obj;
            },
            getMediaMeta: function(id, callback) {},
            MPlayer: function(o) {
                if (typeof o != "object") {
                    throw new Error("bam.media.MPlayer: Missing required settings object");
                    return false;
                }
                var self = this,
                    template = (typeof o["template"] != "undefined") ? o.template : "",
                    name = (typeof o["name"] != "undefined") ? o.name : "MPlayer",
                    width = (typeof o["width"] != "undefined") ? o.width : 320,
                    height = (typeof o["height"] != "undefined") ? o.height : 240,
                    inPlayer = (typeof o["inPlayer"] != "undefined") ? o.inPlayer : false,
                    workFlowUrl = (typeof o["workFlowUrl"] == "undefined") ? o.workFlowUrl : "",
                    preLaunch = (typeof o["preLaunch"] == "function") ? o.preLaunch : function() {
                        return true;
                    },
                    postLaunch = (typeof o["postLaunch"] == "function") ? o.postLaunch : function() {},
                    prePlayerLoad = (typeof o["prePlayerLoad"] == "function") ? o.prePlayerLoad : function() {
                        return true;
                    };
                //------Methods
                self.constructor.prototype.play = function(o) {

                    if (inPlayer) {
                        if (typeof console != "undefined") {
                            console.log("!!!!!!!!!!!! calling override !!!!!!!!!!!!");
                        }
                        overrideReflector(o);
                        if (typeof console != "undefined") {
                            console.log("!!!!!!!!!!!! calling updatePlaybackPrams based on playback scenario !!!!!!!!!!!!");
                        }
                        updatePlaybackPrams(o);
                        prePlayerLoad(o);
                    } else if (preLaunch(o)) {
                        launchPlayer(o);
                        postLaunch(o);
                    }
                }

                function launchPlayer(o) {
                    var _left, _top, _url = template + bam.url.buildSearch(o);
                    if (width > screen.availWidth - 12) {
                        width = screen.availWidth - 12;
                    }
                    if (height > screen.availHeight - 48) {
                        height = screen.availHeight - 48;
                    }
                    _left = (screen.availWidth - width - 12) / 2;
                    _top = (screen.availHeight - height - 48) / 2;
                    void(window.open(_url, name, "width=" + width + ",height=" + height + ",left=" + _left + ",top=" + _top));
                } /* function for overriding reflector ports during emergencies */

                function overrideReflector(o) {
                    if (mlbMediaUtils.refOverride) { // if true
                        var media_id = o['w_id'] || o['id']; // 1.2K links use id, others use w_id
                        if (media_id) { // if media_id is defined
                            o.pid = "gen_video"; // set pid to generic video 
                            if (o.mid) {
                                delete(o.mid);
                            } // remove mid, if defined
                            $j.each(mlbMediaUtils.overrideArray, function(i, mapObj) {
                                if (media_id == mapObj.media_id) { // if current media_id has a mapping, use it
                                    o.w = mapObj.free_reflector;
                                    if (o.fid == "mlb_lg1200") {
                                        o.fid = "mlb_lg800";
                                    } // adjust fid, if need be
                                }
                            });
                        }
                    }
                }

                function updatePlaybackPrams(o) {
                    var playbackScenarios = {
                        "MLB_WM_800K_STREAM": {
                            bitrate: "800",
                            mType: "w"
                        },
                        "MLB_WM_400K_STREAM": {
                            bitrate: "400",
                            mType: "w"
                        },
                        "MLB_WM_1200K_SWARM": {
                            bitrate: "1200",
                            mType: "w"
                        },
                        "MLB_WM_400K_STREAM_ARCHIVE": {
                            bitrate: "400",
                            mType: "w"
                        },
                        "MLB_WM_800K_STREAM_ARCHIVE": {
                            bitrate: "800",
                            mType: "w"
                        },
                        "MLB_WM_800K_PROGDNLD": {
                            bitrate: "800",
                            mType: "w"
                        },
                        "MLB_WM_400K_PROGDNLD": {
                            bitrate: "400",
                            mType: "w"
                        },
                        "MLB_WM_400K_STREAM_2007": {
                            bitrate: "400",
                            mType: "w"
                        },
                        "MLB_WM_700K_STREAM_2007": {
                            bitrate: "700",
                            mType: "w"
                        }
                    };
                    var scenario = (o["playback_scenario"]) ? o.playback_scenario : (mlbMediaUtils.scenarios.selected && mlbMediaUtils.scenarios.selected != "") ? mlbMediaUtils.scenarios.selected : null;
                    if (typeof console != "undefined") {
                        console.log("------------> updatePlaybackPrams: scenario=" + scenario);
                    }
                    if (scenario != null) {
                        var scenarioSettings = playbackScenarios[scenario];
                        if (o["fid"]) { // update feed ID
                            var bitRate = o.fid.replace(/\D/gi, "");
                            if (typeof console != "undefined") {
                                console.log("------------> updatePlaybackPrams: bitRate=" + bitRate);
                            }
                            o.fid = o.fid.replace(bitRate, scenarioSettings.bitrate);
                        }
                        if (o["mType"]) {
                            o.mType = scenarioSettings.mType;
                        } // update media type
                        if (o["url"]) {
                            o[scenarioSettings.mType] = o.url;
                        } // update media url
                        if (o["id"]) {
                            o[scenarioSettings.mType + "_id"] = o.id;
                        } // update media ID
                    }
                }
            },
            setScenarioArray: function(scenariosArr, playerParams) {
                if (typeof console != "undefined") {
                    console.log("/*********** bam.media.setScenarioArray");
                }
                // Get Flash Object
                if (mlbMediaUtils.flshObj == null) {
                    if (typeof console != "undefined") {
                        console.log("----> bam.media.setScenarioArray: Set Flash Object Reference (mlbMediaUtils.flshObj)");
                    }
                    mlbMediaUtils.flshObj = document.getElementById("controls");
                }
                for (var i = 0; i < scenariosArr.length; i++) {
                    if (typeof console != "undefined") {
                        console.log("----> bam.media.setScenarioArray: scenario " + i + ":" + scenariosArr[i]);
                    }
                    mlbMediaUtils.scenarios[scenariosArr[i]] = true;
                }
                // ***** Rules *****
                // get a scenario for windows media player opt-out
                mlbMediaUtils.scenarios.wmpOptOut = (mlbMediaUtils.scenarios["MLB_WM_800K_STREAM"]) ? "MLB_WM_800K_STREAM" : (mlbMediaUtils.scenarios["MLB_WM_400K_STREAM"]) ? "MLB_WM_400K_STREAM" : (mlbMediaUtils.scenarios["MLB_WM_800K_PROGDNLD"]) ? "MLB_WM_800K_PROGDNLD" : (mlbMediaUtils.scenarios["MLB_WM_400K_PROGDNLD"]) ? "MLB_WM_400K_PROGDNLD" : "false";
                if (typeof console != "undefined") {
                    console.log("----> bam.media.setScenarioArray: Set wmpOptOut scenario to " + mlbMediaUtils.scenarios.wmpOptOut);
                }

                if (typeof console != "undefined") {
                    console.log("----> bam.media.setScenarioArray: Rules Don't Apply.... default to normal play() call");
                }
                mlbMediaUtils.flshObj.playFromScenario(false);
            }
        };
    }())
});


(function() { /****************************************************************************/
    /** monitorClickOrigin() is a private method that binds a handler to all
     * potential media player 4 link containers.  The handler updates the value of
     * bam.tracking.clickOrigin variable which is used by bam.media.launchPlayer()
     * Due to an issue with swfobject and jQuery's dom ready handler, IE uses 
     * $(window).load() instead.
     */
    var monitorClickOrigin = function() {
        if ($ && $(".mediaLinkContainer") && $(".mediaLinkContainer").length) {
            if (typeof(bam["tracking"]) == "undefined") bam.tracking = {};
            $(".mediaLinkContainer").mouseover(function(e) {
                bam.tracking.clickOrigin = $(this).attr("trackValue");
                e.stopPropagation(); // ensures that inner link container is origin, when containers are nested
            }).mouseout(function() {
                bam.tracking.clickOrigin = "";
            });
        }
    }; 
    
    if (typeof $.browser === "undefined"){
    	jQuery.browser = {};
    	jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
    }

    if ($.browser.msie) {
        $(window).load(monitorClickOrigin);
    } else {
        $(document).ready(monitorClickOrigin);
    }
})();