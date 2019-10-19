/*global NYTD, window, escape */
/*  	 
$Id: googleads.js 62412 2011-03-23 20:10:19Z helckt $ 	 
(c) 2010 The New York Times Company 	 
*/


NYTD.GoogleAds = NYTD.GoogleAds  || {
	
	defaultGoogleParamsList: {
		AFS:{
			'google_ad_output':       'js',
			'google_afs_ad':          'w2n4',
			'google_afs_client':      'newyorktimes',
			'google_afs_query':       null,
			'google_afs_adsafe':      'high',
			'google_afs_channel':     null,
			'google_afs_adtest':      'off'
		},
		AFC:{
			'google_adtest':          'off',
			'google_ad_type':         'text',
			'google_ad_client':       'nytimes_article_var',
			'google_ad_output':       'js',
			'google_ad_channel':      null,
			'google_feedback':        'on',
			'google_skip':            0,
			'google_safe':            'high',
			'google_hints':           null,
			'google_contents':        null,
			'google_page_url':        null,
			'google_targeting':       null,
			'google_image_size':      null,
			'google_max_num_ads':     3
		},
		RAD:{
			'google_adtest':          'off',
			'google_ad_client':       'nytimes_article_var',
			'google_ad_output':       'js',
			'google_ad_channel':      null,
			'google_safe':            'high',
			'google_page_url':        null,
			'google_max_num_ads':     0,
			'google_num_radlinks':    5,
			'google_max_radlink_len': 23,
			'google_kw_type':         'broad',
			'google_kw':              null
		},
		LB:{
			'google_ad_client':        'ca-nytimes_display_html',
			'google_alternate_ad_url': 'http://www.nytimes.com/ads/remnant/networkredirect-leaderboard.html',
			'google_ad_width':         728,
			'google_ad_height':        90,
			'google_ad_format':        '728x90_pas_abgc',
			'google_ad_type':          'image',
			'google_safe':             'high',
			'google_targeting':        'site',
			'google_ad_channel':       null
		}
	},
	
	cpcCount: 0,
	metaTagCache: {},
	debugElement: {},

	targetList: {
		'sponLink':  ['adxSponLink', 'SponLink', 'adxSponLinkA', 'SponLinkA'],
		'sponLinkA': ['adxSponLinkA', 'SponLinkA', 'adxSponLink', 'SponLink'],
		'middleRight': ['MiddleRight', 'SFMiddle']
	},	
	adTarget: '',

	templates: {
		"afsWideAd" :
			'<div class="ad">' +
				'<a  href="#" onclick="linkbox(\'<%=url%>\',\'popWin\')">' +
					'<span class="blue"><%=line1%></span><%=line2%><br/>'+
					'<div class="link"><%=visibleUrl%></div>'+
				'</a>' +
			'</div>',
		"afsNarrowAd" :
			'<div class="ad">' +
				'<a onclick="linkbox(\'<%=url%>\',\'popWin\')" class="blue" href="#"><%=line1%></a>' +
				'<br/><%=line2%><br/><%=line3%><br/>' +
				'<div class="link">' +
					'<a onclick="linkbox(\'<%=url%>\',\'popWin\')" class="green" href="#"><%=visibleUrl%></a>' +
				'</div>' +
			'</div>',
		"radLink":
			'<div class="ad">' +
				'&raquo; ' +
				'<a href="http://<%=queryHost%>/search/query?srchst=r&term=<%=term%>&google_ad_channel=health&' +
				'google_ad_client=ca-nytimes_radlinks_js&google_page_url=<%=thisPage%>">' +
					'<%=term%>' +
				'</a>' +
			'</div>',
		"afcAd":{
			'text':
				'</tr><tr class="listing" bidtype="<%=bidType%>" targetingType="<%=targetingType%>">' +
				'<td colspan="2" valign="middle">' +
					'<a class="first" target="_blank" href="<%=url%>"><%=line1%></a><br/>' +
					'<%=line2%><br/>' +
					'<%=line3%><br/>' +
					'<a class="last" target="_blank" href="<%=url%>"><%=visibleUrl%></a>' +
				'</td>',
			'image':
				'<a href="<%=url%>" target="_top" title="go to <%=visibleUrl%>" bidtype="<%=bidType%>" targetingType="<%=targetingType%>">' +
					'<img border="0" src="<%=imageUrl%>" width="<%=imageWidth%>" height="<%=imageHeight%>">' +
				'</a>',
			'flash':
				'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="<%=imageWidth%>" height="<%=imageHeight%>" bidtype="<%=bidType%>" targetingType="<%=targetingType%>">' +
					'<param name="movie" value="<%=imageUrl%>">' +
					'<param name="quality" value="high">' +
					'<param name="AllowScriptAccess" value="never">' +
					'<embed src="<%=imageUrl%>" width="<%=imageWidth%>" height="<%=imageHeight%> type="application/x-shockwave-flash" AllowScriptAccess="never" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>' +
				'</object>'
		}	
	},

	loadCss: function() {
		// check if googleads.css is already loaded:
		var cssLoaded = 0;
		var linkNodes = $$('link');
		if(linkNodes.any(function(x) {
			return x.getAttribute('href').indexOf("2.0/styles.css") != -1 ;
		})) { cssLoaded = 1; }
		
		if(!cssLoaded) {
			var cssLink =document.createElement("link");
			cssLink.setAttribute("rel", "stylesheet")
			cssLink.setAttribute("type", "text/css")
			cssLink.setAttribute("href", NYTD.Hosts.cssHost + "/css/0.1/screen/common/googleads.css")
			$$("head")[0].appendChild(cssLink)
		}
	},

	getQueryParam: function(defaultQuery, key) {
		key = key || "query";
		var query = window.location.toString().toQueryParams()[key] || defaultQuery;
		if (!query) {
			query = $$('meta[name="CG"]')[0];
			query = query?query.getAttribute("content"):null;
		}
		else {
			query = decodeURI(query);
			query = query.replace(/'/g, "\\'");
		}
		return query;
	},


	getFirstGood: function() {
		for(var i = 0; i < arguments.length; i++) {
			if("undefined" !== typeof(arguments[i]) && "undefined" !== arguments[i] && null !== arguments[i] && '' !== arguments[i] && arguments[i] === arguments[i]) {
				return arguments[i];
			}
		}
		return null;
	},

	getParsedMetaTag: function( metaTagName )  {
		if ( !this.metaTagCache[metaTagName] ) {
			var metaTagValue = '';

			if ( !this.metaTagCache.metaTags ) {
				this.metaTagCache.metaTags = $('meta');
			}

			for ( var m in this.metaTagCache.metaTags ) {
				if ( this.metaTagCache.metaTags[m].name == metaTagName ) {
					metaTagValue = this.metaTagCache.metaTags[m].content;
					metaTagValue = metaTagValue.replace( /[\s\,\.]+/g, '_' );
					break;
				}
			}
			this.metaTagCache[metaTagName] = metaTagValue;
		}
		return this.metaTagCache[metaTagName];
	},



	setDebugElement: function(adProgram) {
		var w = window;
		var s1 = "", s2 = "";
		if(window.location.search.match(/ga_debug=1/)) { 
			s1 += "<div style=\"display:none\" class=\"googleDebug\"";

			$H(this.defaultGoogleParamsList[adProgram]).each(function(pair) {
				if(typeof(w[pair.key]) !== "undefined" && w[pair.key] !== "") {				
					s1 += ' ' + pair.key + '="' + w[pair.key] + '"';
					s2 += '\r\n' +  pair.key + ':\t"' + w[pair.key] + '"';
				}	
			}, this);
			
			s1 += "></div>";
			NYTD.GoogleAds.debugElement.html = s1;
			NYTD.GoogleAds.debugElement.text = s2;
		}	
	},


	getGoogleAds: function(adProgram, paramList) {
		if(paramList === undefined) { return; }

		NYTD.GoogleAds.preserveAppParams();
		NYTD.GoogleAds.resolveGoogleVars(adProgram, paramList);
		NYTD.GoogleAds.setDebugElement(adProgram);

		if(adProgram === "AFS") {
			window.google_afs_request_done =  NYTD.GoogleAds.googleAfsRequestDone;
			NYTD.require('http://www.google.com/afsonline/show_afs_ads.js', true);
		}
		else if(adProgram === "AFC" || adProgram === "RAD"  || adProgram === "LB") {
			window.google_ad_request_done      =  NYTD.GoogleAds.googleAdRequestDone;
			window.google_radlink_request_done =  NYTD.GoogleAds.googleRadlinkRequestDone;
			NYTD.require('http://pagead2.googlesyndication.com/pagead/show_ads.js', true);
		}
	},

	preserveAppParams: function() {
		/* look for the GoogleAds global variables that might be set by the app and save them. They
		 * may or may not be suffixed with 'nyt_'. This is called for each GoogleAds position but
		 * only does anything the first time it is called.
		 */
		var w = window;
		if(!this.appParams) {
			this.appParams = {};
			$H(this.defaultGoogleParamsList).each(function(pair) {
				$H(pair.value).each(function(pair2) {
					if(w['nyt_' + pair2.key] || w[pair2.key]) {
						this.appParams[pair2.key] = this.getFirstGood(w['nyt_' + pair2.key], w[pair2.key]);
					}
				}, this);
			}, this);
		}
	},

	clearGoogleParams: function(adProgram) {
		var w = window;
		$H(this.defaultGoogleParamsList[adProgram]).each(function(pair) {
			w[pair.key[0]] = null;
		}, this);
	},

	resolveGoogleVars: function(adProgram, adxParams) {
		var w = window;

		$H(this.defaultGoogleParamsList[adProgram]).each(function(pair){
			var param        = pair.key;
			var defaultValue = pair.value;
			if(adxParams[param] || this.appParams[param] || defaultValue) {
				w[param] = this.getFirstGood(this.appParams[param], adxParams[param], defaultValue);
			}
		}, this);
	
		if(adProgram === "AFS") {
			w.google_afs_query   = this.getQueryParam();
			w.google_afs_channel  = [this.appParams.google_afs_channel, adxParams.google_afs_channel].join(' ');
			w.google_afs_adtest  = NYTD.env === "production" ? "off" : "on";
			this.narrowPosition     = this.getFirstGood(adxParams.narrowPosition,     'SponLink');
			this.widePosition       = this.getFirstGood(adxParams.widePosition,       'SponLinkA');
			this.relatedAdsPosition = this.getFirstGood(adxParams.relatedAdsPosition, 'SponLink');
		}

		else if(adProgram === "AFC") {
			w.google_ad_channel  = [this.appParams.google_ad_channel, adxParams.google_ad_channel].join(' ');
			w.google_skip        = this.getFirstGood(NYTD.GoogleAds.cpcCount, 0);
			w.google_adtest      = NYTD.env === "production" ? "off" : "on";
			if(adxParams.ad_target) {
				this.adTarget = adxParams.ad_target;
			}
			else if(adxParams.ad_target_list && this.targetList[adxParams.ad_target_list]) {
				this.adTarget = this.targetList[adxParams.ad_target_list].find(function(t){ return($(t) && !$(t + '_googleAds')); });
			}	

		}

		else if(adProgram === "RAD") {
			w.google_ad_channel  = [this.appParams.google_ad_channel, adxParams.google_ad_channel].join(' ');
			w.google_adtest      = NYTD.env === "production" ? "off" : "on";
			this.ad_target       = adxParams.ad_target;
		}
		
		else if(adProgram === "LB") {
			w.google_ad_channel  = [this.appParams.google_ad_channel, adxParams.google_ad_channel].join(' ');
			w.google_adtest      = NYTD.env === "production" ? "off" : "on";
			this.ad_target       = adxParams.ad_target;
		}

		var adChannelYear;
		var year = '';
		if(typeof(getMetaTagValue("dat")) === "string") {
			year = parseInt(getMetaTagValue("dat").substr(-4), 10);	
			if(isFinite(year)) {
				// for years after 2009, go strictly by decade:
				if     (year > 2009) adChannelYear = year.toString().substr(0,3) + '0-' + year.toString().substr(0,3) + '9';
				else if(year > 2004) adChannelYear = '2005_2009';
				else if(year > 1986) adChannelYear = '1987-2004'; 
				else if(year > 1979) adChannelYear = '1980-1986'; 
				else if(year > 1969) adChannelYear = '1970-1979'; 
				else if(year > 1959) adChannelYear = '1960-1969'; 
				else if(year > 1949) adChannelYear = '1950-1959'; 
				else if(year > 1939) adChannelYear = '1940-1949'; 
				else if(year > 1929) adChannelYear = '1930-1939'; 
				else if(year > 1922) adChannelYear = '1923_1929'; 
				else if(year > 1909) adChannelYear = '1910_1922'; 
				else if(year > 1899) adChannelYear = '1900_1909'; 
				else if(year > 1889) adChannelYear = '1890_1899'; 
				else if(year > 1879) adChannelYear = '1880_1889'; 
				else if(year > 1869) adChannelYear = '1870_1879'; 
				else if(year > 1865) adChannelYear = '1866_1869'; 
				else if(year > 1859) adChannelYear = '1860_1865'; 
				else if(year > 1850) adChannelYear = '1851_1859'; 
			}
		}
		if(adChannelYear) {
			w.google_ad_channel += " " + adChannelYear;
			// for testing, remove before going live:
			w.saveAdChannel = w.google_ad_channel;
		}
	
	},


	/* 
	 * These are the Google Callback Functions. They need to be in the Global Namespace
	 * so that google code can call them. In our old GoogleAds code, these functions are 
	 * defined in the ad position. Since there is still the chance that old code could 
	 * appear on the page, and overwrite these functions, we define them here as methods 
	 * of NYTD.GoogleAds, and put them into the global namespace in GetGoogleAds() each 
	 * time we need them. 
	 */

	/* Google code will call this function when AFS ads are requested */
	googleAfsRequestDone: function(ads) {
		
		// Verify that there are actually ads to display. If not, try to get Radlinks
		var google_num_ads = ads.length;
		if (google_num_ads <= 0) {
			NYTD.GoogleAds.getGoogleAds('RAD', {'ad_target':NYTD.GoogleAds.narrowPosition});
		}

		var wideAds   = "";   //wide ad unit html text
		var narrowAds = "";   //narrow ad unit html text

		for(i = 0; i < google_num_ads; i++){
			 var values = {
				 url:         ads[i].url,
				 line1:       ads[i].line1,
				 line2:       ads[i].line2,
				 visibleUrl:  ads[i].visible_url
			};

			if (ads[i].type=="text/wide"){
				wideAds += NYTD.Template(NYTD.GoogleAds.templates.afsWideAd, values);
			} else {
				values.line3 = ads[i].line3;
				narrowAds += NYTD.Template(NYTD.GoogleAds.templates.afsNarrowAd, values);
			}
		}
		if (narrowAds !== "") {
			narrowAds = '<div id="sponsoredLinksC">' +
						'<div class="sponsLinksWhat"><a href="javascript:pop_me_up2(\'http://www.nytimes.com/ref/membercenter/faq/linkingqa15.html\',\'420400\',\'width=420,height=400,scrollbars=yes,toolbars=no,resizable=no\');">Advertiser Links</a></div>' + narrowAds +
						'<div class="sponsLinksWhat"><a href="javascript:pop_me_up2(\'http://www.nytimes.com/ref/membercenter/faq/linkingqa15.html\',\'420400\',\'width=420,height=400,scrollbars=yes,toolbars=no,resizable=no\');">What are Advertiser Links?</a></div></div>';
		}
		else {
			// if there are no narrow ads, request related ads 
			NYTD.GoogleAds.getGoogleAds('RAD', {'ad_target':NYTD.GoogleAds.narrowPosition});
		}

		if (wideAds !== "") {
			wideAds = '<div id="sponsoredLinks">' +
					  '<div id="sponsLinks"><a href="javascript:pop_me_up2(\'http://www.nytimes.com/ref/membercenter/faq/linkingqa15.html\',\'420400\',\'width=420,height=400,scrollbars=yes,toolbars=no,resizable=no\');">Advertiser Links</a></div>' + wideAds + '</div>';
		}
		if($(NYTD.GoogleAds.widePosition))   { $(NYTD.GoogleAds.widePosition).innerHTML = wideAds; }
		if($(NYTD.GoogleAds.narrowPosition)) { $(NYTD.GoogleAds.narrowPosition).innerHTML = narrowAds; }
		NYTD.GoogleAds.clearGoogleParams('AFS');
	},


	/* Google code will call this function when RADLINK ads are requested */
	googleRadlinkRequestDone: function(radlinks) {
		if (radlinks.length === 0) { return; }

		var s = "";
		var radlinksStr = '';
		
		NYTD.GoogleAds.radCount = NYTD.GoogleAds.radCount + radlinks.length || radlinks.length;
		
		for (i = 0; i < radlinks.length; ++i) {
			 var values = {
				 queryHost:  NYTD.GoogleAds.queryHost,
				 term:       radlinks[i].term,
				 thisPage:   escape(window.location)
			};
			radlinksStr += NYTD.Template(NYTD.GoogleAds.templates.radLink, values);
		}

		s += '\n<div id="sponsoredLinksC">' +
			 '\n<div class="sponsLinksWhat"><a href="javascript:pop_me_up2(\'http://www.nytimes.com/ref/membercenter/faq/linkingqa17.html\',\'420400\',\'width=420,height=400,scrollbars=yes,toolbars=no,resizable=no\');">Related Ads</a></div>' +
			 radlinksStr +
			 '\n<div class="sponsLinksWhat"><a href="javascript:pop_me_up2(\'http://www.nytimes.com/ref/membercenter/faq/linkingqa17.html\',\'420400\',\'width=420,height=400,scrollbars=yes,toolbars=no,resizable=no\');">What are Related Ads?</a></div>' +
			 '</div>';

		if($(NYTD.GoogleAds.ad_target))   { $(NYTD.GoogleAds.ad_target).innerHTML = s; }
		NYTD.GoogleAds.clearGoogleParams('RAD');

	},



	/* Google code will call this function when AFC ads are requested */
	googleAdRequestDone: function(ads) {
		var ga = NYTD.GoogleAds;
		
		if(ads && typeof(ads) === 'object' && typeof(ads[0]) !== 'undefined' && typeof(ads[0].type) !== 'undefined' && $(ga.adTarget)) { 
			var className = 'nytd_google_ads', 
				afc = "",
			    s = ga.debugElement.html || '',
				adType = ads[0].type;
			
			if(adType === 'text') {
				if (ads.length === 1) { className += ' nytd_google_single_ad'; }
				s += '<table id="' + ga.adTarget + '_googleAds" class="' + className + '" cellspacing="0" cellpadding="0" border=0><tr class="header"><td class="left" >Ads by Google</td><td class="right"><a target="popupad" onclick="window.open(\'\',\'popupad\',\'left=100,top=100,width=390,height=390,resizable,scrollbars=no\')" href="http://www.nytimes.com/ref/membercenter/faq/linkingqa16.html" style="font-family: Arial,Helvetica,sans-serif; color: white; font-size: 12px; padding-right: 7px;">what\'s this?</a></td>\n';
			}
			for (i = 0; i < ads.length; ++i) {
				 var values = {
					 url:           ads[i].url,
					 line1:         ads[i].line1,
					 line2:         ads[i].line2,
					 line3:         ads[i].line3,
					 visibleUrl:    ads[i].visible_url,
					 bidType:       ads[i].bidtype,
					 targetingType: ads[i].targeting_type,
					 imageUrl:      ads[i].image_url    || null,
					 imageWidth:    ads[i].image_width  || null,
					 imageHeight:   ads[i].image_height || null
				};

				afc += NYTD.Template(ga.templates.afcAd[adType], values);
				ga.cpcCount++;
			}
			
			if(adType === 'text') { s += afc + '</tr></table>'; }
			else                  { 
				//s +=  afc  + '</div>'; 
				var feedbackLink = 'Ads by Google';
				if (google_info && google_info.feedback_url) {
					feedbackLink = '<a href="' + google_info.feedback_url + '" target="blank">Ads by Google</a>';
				}
				s += '<div class="' + className + '">';
				s +=  afc;
				s += '	<div class="footer">';
				s += '		<div class="left">' + feedbackLink + '</div>';
				s += '		<div class="right"><a href="http://www.nytimes.com/ref/membercenter/faq/linkingqa16.html" onclick="window.open(\'\',\'popupad\',\'left=100,top=100,width=390,height=390,resizable,scrollbars=no\')" target="popupad">what\'s this?</a></div>';
				s += '	</div>';

			}
			$(ga.adTarget).innerHTML = s; 
		}
		
		ga.clearGoogleParams('AFC');
		return;
	}
};

Event.observe(window, 'load', NYTD.GoogleAds.loadCss);

