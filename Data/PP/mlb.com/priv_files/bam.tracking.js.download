
bam.extend({

	tracking : (function(){

		var _self = {
			//simulate a page view (tabbed nav etc)
			simOmniturePageView : function() {
				//clear out previous sprop tracking. this may need tweaking later.
				s.prop2 = s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
				s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.prop45 = s.prop58 = "";
				s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar19 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
				s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar17 = s.eVar11 = s.prop44 = s.prop46 = s.prop56 = s.prop57 = "";
				s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
				s.events = "";
				//call pageview track
				s.t();
			},
			
			trackDownload : function(omnitureJson) {
				s.prop2 = s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
				s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.prop45 = s.prop58 =  "";
				s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar19 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
				s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar17 = s.eVar11 = s.prop44 = s.prop46 = s.prop56 = s.prop57 = "";
				s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
				s.events = "";
				if(omnitureJson) {
					s.pageName = omnitureJson.pageName ? omnitureJson.pageName : "";
					s.channel = omnitureJson.channel ? omnitureJson.channel : "";
					s.prop1 = omnitureJson.install ? omnitureJson.install : "";
					s.eVar5 = s.pageName;
					if (omnitureJson.callback) {
							omnitureJson.callback();
					}
				}
				//call pageview track
				s.t();
			},
			
			//simulate a page view with passed variables
			simPgView : function(pVars) {
				s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
				s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.prop58 =  "";
				s.prop38 = s.prop39 = s.eVar13 = s.eVar19 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
				s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar17 = s.prop44 = s.prop45 = s.prop46 = s.prop56 = s.prop57 = "";
				s.prop59 = "";
				if(pVars) {
					if (pVars.events) {
						s.events = pVars.events;
					}
					if (pVars.pageName) {
						s.pageName = pVars.pageName;
					}
					if (pVars.source) {
						s.prop1 = pVars.source;
					}
					if (pVars.contentID) {
						s.prop2 = pVars.contentID;
					}
					if (pVars.channel) {
						s.channel = pVars.channel;
					}
					if (pVars.matchup) {
						s.prop40 = pVars.matchup;
					}
					if (pVars.club) {
						s.prop58 = pVars.club;
					}
					if (pVars.section) {
						s.prop60 = pVars.section;
					}
					if (pVars.omniture_meta_title) {
						s.prop61 = pVars.omniture_meta_title;
					}
					if (pVars.omniture_meta_author) {
						s.prop62 = pVars.omniture_meta_author;
					}
					if (pVars.omniture_sponsor_name) {
						s.prop63 = pVars.omniture_sponsor_name;
					}
					if (pVars.products) {
						s.products = pVars.products;
					}

					if ((typeof(s.prop22) === "undefined") && pVars.ipid) {
						s.prop22 = pVars.ipid;
					}
					
					if ((/Scoreboard/.test(s.channel)) || pVars.ipid_override) {
						s.eVar11 = s.prop22;
					}
					if (pVars.callback) {
							pVars.callback();
					}
				}
				//call pageview track
				s.t();
			},
						//stats section specific
			simStatsPgView : function(pVars) {
				s.prop2 = s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
				s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.events = "";
				s.prop38 = s.prop39 = s.eVar13 = s.eVar19 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = s.prop58 = "";
				s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar17 = s.prop44 = s.prop40 = s.prop46 = s.prop56 = s.prop57 = "";
				s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
				if(pVars) {
					s.events = "event4";
					s.pageName = pVars.pageName ? pVars.pageName : "";
					s.prop1 = pVars.source ? pVars.source : "";
					s.channel = pVars.channel ? pVars.channel : "";
					s.prop45 = pVars.control ? pVars.control : "";
					if (pVars.callback) {
							pVars.callback();
					}
				}
				//call pageview track
				s.t();
			},
			
			
			sendOmnitureVarsToFlash : function(instanceName) {
				var fM = document.getElementById(instanceName);
				s.dc = "112";
				s.visitorNameSpace = "";
				//alert("js passing to flash: account= " + s_rsid + " dc=" + s.dc + " pageName=" + s.pageName); 
				fM.configureOmniture(s_rsid,s.dc,s.visitorNameSpace,s.pageName);
			},

			//for benefit of flash
			trackLaunchLink : function(linkURL,jsonOmVars) {
				if (jsonOmVars) {
					_self.track(jsonOmVars);
				}
				linkURL = unescape(linkURL);
				if(linkURL.indexOf("javascript:") != -1) { 
					linkURL = linkURL.replace(/javascript:/, "");
					eval(linkURL); 
				} else { 
					window.location.href = linkURL; 
				}
			},

			getFormFactor : function() {
				var formFactor = (window.deviceBootstrap) ? window.deviceBootstrap().formFactor : "Desktop";

				if (formFactor === 'phone') { formFactor = 'Smartphone'; }

				return formFactor.charAt(0).toUpperCase() + formFactor.slice(1);
			},

			getOrientation : function() {
				var width  = window.innerWidth || document.documentElement.clientWidth;
				var height = window.innerHeight || document.documentElement.clientHeight;
				var orientation = (height >= width) ? "Portrait" : "Landscape";
				return orientation;
			},

		 	track : function(omJson,callingObj) {
				if(omJson.async) {
						var props = omJson.async;

						s.prop2 = s.prop16 = s.prop17 = "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = "";
						s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = "";
						s.prop31 = s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.prop45 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
						s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.events = "event2";
						if (props.isDynamic == true) {
							s.prop11 = "Dynamic Page View";
						} else {
							s.prop11 = "";
						}
						s.prop56 = props.mw_counter ? props.mw_counter : "";
						//s.prop57 = props.mw_panels ? props.mw_panels : "";
						s.prop57 = "";
						s.prop58 = props.club ? props.club : "";
						s.prop12 = props.compName ? props.compName : ""; 
						s.prop4 = props.queryText ? props.queryText : ""; 
						s.eVar2 = s.prop4;
					  	s.prop13 = s.pageName;
						var cA = props.compActivity ? props.compActivity : "";
						if (cA) {
						 	var isMediaWallLink = /^Panel\s[0-9]+\s-\s(Photo|Kicker|Embedded\sVideo|Blurb|Related\sLink)\sClick$/.test(cA);
							if (isMediaWallLink || (/^Mediawall/.test(cA))) {
								s.events += ",event32,event78";
							} else {
								if (/^Auto\sRotate\sPanel\s[0-9]+/.test(cA)) {
									s.events += ",event31,event77";
								} else if (/Next\sClick/.test(cA)) {
									s.events += ",event31,event77";
								} else if (/Circle\s[0-9]+\sClick/.test(cA)) {
									s.events += ",event31,event77";
								} else if (/Previous\sClick/.test(cA)) {
									s.events += ",event31,event77";
								} else if (/Thumbnail\s[0-9]+\sClick/.test(cA)) {
									s.events += ",event31";
								}
							}
						}
						s.prop14 = props.compActivity ? props.compActivity : "";
						s.prop9 = props.Open ? props.Open : "";
						s.prop10 = props.mwContentId ? props.mwContentId : "";
						s.eVar19 = s.prop10;
						//s.prop46 = props.linkOrigin ? props.linkOrigin : "";
						s.prop46 = "";
						s.prop15 = _self.getFormFactor() + ": " + _self.getOrientation();

						if (omJson.callback) {
							omJson.callback();
						}								
				} 		

				if(omJson.async_social) {
						var props = omJson.async_social;
						s.prop2 = s.prop4 = s.prop9 = s.prop10 = s.prop16 = s.prop17 = "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = "";
						s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = s.prop46 = "";
						s.prop31 = s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.prop45 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
						s.prop56 = s.prop57 = s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.events = "event2";

						if (props.isDynamic == true) {
							s.prop11 = "Dynamic Page View";
						} else {
							s.prop11 = "";
						}
						s.prop12 = props.compName ? props.compName : ""; 
						s.pageName = "";
						s.prop13 = "";
						s.prop14 = props.compActivity ? props.compActivity : "";
						/*if (props.actionGen == true) {
							s.prop15 = "User Generated";
						} else {
							s.prop15 = "System Generated";
						}*/
						s.prop15 = "";
						if (omJson.callback) {
							omJson.callback();
						}								
				} 			
				
				if(omJson.async_media) {
        			var props_media = omJson.async_media;
         			s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.eVar17 = s.eVar11 = s.prop44 = s.eVar19 = s.eVar13 = "";
         			//s.prop38 = s.prop39 = s.prop40 = "";
         			s.prop2 = s.prop38 = s.prop39 = s.prop45 = s.eVar23 = s.eVar26 = s.eVar27 = s.prop46 = s.prop56 = s.prop57 = "";
         			s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
         			s.events = "event2,event27";
                                                  
         			s.prop25 = props_media.mediaID ? props_media.mediaID : ""; 
					s.eVar28 = s.prop25; 
         			s.prop26 = props_media.playerType ? props_media.playerType : "";
         			s.prop27 = props_media.playerContext ? props_media.playerContext : "";
					s.eVar13 = props_media.playerContext ? props_media.playerContext : "";
         			s.prop28 = props_media.contextVersion ? props_media.contextVersion : "";
         			s.prop29 = props_media.streamType ? props_media.streamType : "";
         			s.prop30 = props_media.videoTitle ? props_media.videoTitle : "";
         			s.prop32 = props_media.videoIndex ? props_media.videoIndex: "";
					//s.prop31 = props_media.ipid ? props_media.ipid : "";
					s.prop31 = (typeof (_uidn) !== "undefined") ? _uidn : "";
					/*if (props_media.actionGen === true) {
						s.prop32 = "User Generated";
					} else {
						s.prop32 = "System Generated";
					}*/
					//s.prop33 = props_media.sequenceID ? props_media.sequenceID : "Not Available";
					//s.prop34 = props_media.cdn ? props_media.cdn : "Not Available";
					//s.prop33 = s.prop34 = "";
					s.prop33 = s.eVar37 = props_media.gameID ? props_media.gameID : "";
					s.prop34 = s.eVar44 = props_media.gamePK ? props_media.gamePK : "";
         			s.prop40 = props_media.postRoll ? props_media.postRoll: "";
					s.prop43 = props_media.playerFlavor ? props_media.playerFlavor : "";
					s.prop49 = s.eVar49 = props_media.rootDomain ? props_media.rootDomain : "";
					/*if ((props_media.playerContext == "Media Player") && ((props_media.contextVersion == "3.1") || (props_media.contextVersion == "4.0"))){
						s.prop31 = _uidn ? _uidn : "";
					} else {
						s.prop31 = "";
					}
					*/
         			//s.prop13 = s.pageName;
         			if (omJson.callback) {
        		        omJson.callback();
         			}
				} 
				
				if(omJson.gamedayPremiumConversionTracker) {
						var props = omJson.gamedayPremiumConversionTracker;
						s.prop2 = s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 =  "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.prop45 = s.prop46 = s.prop56 = s.prop57 = "";
						s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar13 = s.eVar19 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
						s.events = "";
						
						s.eVar17 = props.feature ? props.feature : ""; //feature that forced the login
						//possible values: Gameday Audio, Video Access or Premium Stats
						s.eVar11 = _uidn ? _uidn : "";
						//s.prop44 = props.conversionAction ? props.conversionAction : "";
						s.prop44 = "";
						
						if (omJson.callback) {
							omJson.callback();
						}
				} 
				
				if (omJson.genericExternalLinkTracker) {
					var props = omJson.genericExternalLinkTracker;
						s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = s.prop46 =  "";
						s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.prop44 = s.eVar26 = s.eVar27 = "";
						s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar13 = s.eVar17 = s.eVar11 = s.eVar19 = s.eVar23 = s.eVar28 = "";
						s.prop2 = s.prop56 = s.prop57 = "";
						s.events = "";
						
						s.prop45 = props.tracked ? props.tracked : "";
						
						if (omJson.callback) {
							omJson.callback();
						}
				}
				
				if(omJson.gamedayLoginSuccess) {
						var props = omJson.gamedayLoginSuccess;
						s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = s.prop46 =  "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = s.eVar23 = s.eVar28 = "";
						s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = s.eVar26 = s.eVar27 = "";
						s.prop2 = s.prop56 = s.prop57 = "";
						s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.events = "event2,event29";
						
						if (omJson.callback) {
							omJson.callback();
						}
				} 
				
				if(omJson.async_scroll) {
						var props_scroll = omJson.async_scroll;
						s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 =  s.prop46 = "";
						s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = s.eVar23 = s.eVar28 = "";
						s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = s.eVar26 = s.eVar27 = "";
						s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
						s.prop2 = s.prop56 = s.prop57 = "";
						s.events = "";
						
						s.prop38 = s.pageName; 
						s.prop39 = props_scroll.clientHeight ? props_scroll.clientHeight : "";
						s.prop40 = props_scroll.yPosition ? props_scroll.yPosition : "";
						if (omJson.callback) {
							omJson.callback();
						}
				} 
				
				if (omJson.wmpOptOut) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 =  "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = s.prop46 =  "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
					s.prop32 = s.prop33 = s.prop34 =  s.prop43 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					s.events = "event5";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.videoComplete) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 =  s.prop46 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = s.eVar23 = "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar13 = s.eVar28 = s.eVar26 = s.eVar27 = "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					
					s.eVar13 = omJson.videoComplete.playerContext ? omJson.videoComplete.playerContext : "";
					s.eVar28 = omJson.videoComplete.mediaID ? omJson.videoComplete.mediaID : ""; 
					s.events = "event2,event28,event4";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.flashDownload) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 =  s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = s.prop46 =  "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					s.events = "event6";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.formSubmit) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 =  s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar28 = s.eVar26 = s.eVar27 = s.prop46 =  "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					s.eVar23 = omJson.formSubmit.formID ? omJson.formSubmit.formID : "";
					s.events = "event45";
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.slDownload) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.eVar19 = s.prop46 =  "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 =  "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "event7";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.nexDefDownload) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 =  "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar23 = s.eVar28 =  s.eVar26 = s.eVar27 = s.prop46 =  "";
					s.prop2 = s.prop56 = s.prop57  = "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "event8";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				if (omJson.mosaicDownload) {
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 = "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar23 = s.eVar28 =  s.eVar26 = s.eVar27 = s.prop46 =  "";
					s.prop2 = s.prop56 = s.prop57 =  "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "event9";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				
				if (omJson.searchVideoExists) {
					var sve = omJson.searchVideoExists;
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop17 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 =  "";
					s.prop32 = s.prop33 = s.prop34 = s.prop43 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 =  s.prop46 = "";
					s.prop2 = s.prop56 = s.prop57 = "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "";
					s.prop12 = sve.isVideo ? "MP4: " + sve.isVideo : "";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				
				if (omJson.searchPagination) {
					var sp = omJson.searchPagination;
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = s.prop46 =  "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 =  "";
					s.prop32 = s.prop33 = s.prop34 =  s.prop43 = s.eVar23 = s.eVar28 = s.eVar26 = s.eVar27 = "";
					s.prop2 = s.prop56 = s.prop57  =  "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "";
					s.prop14 = sp.pageNum ? "MP4: " + sp.pageNum : "";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				
				if (omJson.searchResult) {
					var sr = omJson.searchResult;
					s.prop9 = s.prop10 = s.prop11 = s.prop12 = s.prop13 = s.prop14 = s.prop15 = s.prop16 = "";
					s.prop25 = s.prop26 = s.prop27 = s.prop28 = s.prop29 = s.prop30 = s.prop31 = s.eVar19 = "";
					s.prop38 = s.prop39 = s.prop40 = s.eVar13 = s.eVar17 = s.eVar11 = s.prop44 = s.prop45 =  "";
					s.prop32 = s.prop33 = s.prop34 =  s.prop43 = s.eVar23 = s.eVar28 = s.prop46 =  "";
					s.prop2 = s.prop56 = s.prop57  =  "";
					s.prop58 = s.prop59 = s.prop60 = s.prop61 = s.prop62 = s.prop63 = "";
					s.events = "";
					s.eVar27 = sr.searchType ? sr.searchType : "";
					s.eVar26 = sr.searchPosition ? sr.searchPosition : "";
					
					if (omJson.callback) {
							omJson.callback();
					}
				}
				
				var arbitraryObject = new Object();
				arbitraryObject.href="http://myGenericURL";
				if (!callingObj) {
					callingObj = arbitraryObject;
				} 
				
				if (s.prop14) {
				 	s.tl(callingObj,'o',s.prop14);
				} else if (s.prop1) {
					s.tl(callingObj,'o',s.prop1);
				} else if (s.prop38) {
					s.tl(callingObj,'o',s.prop38);
				} else if (s.prop44) {
					s.tl(callingObj,'o',s.prop44);
				} else if (s.prop45) {
					s.tl(callingObj,'o',s.prop45);
				} else if (s.prop12) {
					s.tl(callingObj,'o',s.prop12);
				} else if (s.prop14) {
					s.tl(callingObj,'o',s.prop14);
				} else if (s.prop27) {
					s.tl(callingObj,'o',s.prop27);
				} else if (s.eVar23) {
					s.tl(callingObj,'o',s.eVar23);
				} else if (s.eVar27) {
					s.tl(callingObj,'o',s.eVar27);
				} else if (s.eVar28) {
					s.tl(callingObj,'o',s.eVar28);
				} else {
					s.tl(callingObj,'o',s.events);
				}
		 	} //end track function
		}; //end _self variable definition
		return _self;
  })()
});

// bam.asyncTrackType.track(j, function() {
