$(function() {
	
	var interval = setInterval(function() {
		if (typeof gigya != 'undefined') {
			saveSiteTraffic();
			clearInterval(interval);
		}
	}, 300);

	function saveSiteTraffic() {
		gigya.accounts.getAccountInfo({callback: function(res) {
			if (res.errorCode == 0) {

				// Update cross site traffic
				var crossSiteTraffic;

				if (res.data.behavior && res.data.behavior.crossSiteTraffic) 
					crossSiteTraffic = res.data.behavior.crossSiteTraffic;
				else 
					crossSiteTraffic = [[]];
				// console.log(crossSiteTraffic);

				var hasPrevTraffic = crossSiteTraffic[0].length > 0;
				var lastSessionIndex = crossSiteTraffic.length-1;
				var lastSiteIndex = crossSiteTraffic[lastSessionIndex].length -1;


				// save the current url as the nextURL of the previous traffic
				if (hasPrevTraffic) {
					crossSiteTraffic[lastSessionIndex][lastSiteIndex].nextURL = window.location.href;
				}

				var sessionIndex;
				if (hasPrevTraffic 
					&& (
						(new Date().getTime() - crossSiteTraffic[lastSessionIndex][lastSiteIndex].timestamp > 2*60*60*1000)
						|| res.lastLoginTimestamp > crossSiteTraffic[lastSessionIndex][lastSiteIndex].timestamp
						)
					) {
					sessionIndex = lastSessionIndex + 1;
					crossSiteTraffic[sessionIndex] = [];
				} else {
					sessionIndex = lastSessionIndex;

					// if page is just refreshed, don't save site traffics
					if (hasPrevTraffic && crossSiteTraffic[lastSessionIndex][lastSiteIndex].URL == window.location.href) return;

				}

				crossSiteTraffic[sessionIndex].push({
					"id": crossSiteTraffic.length,
					"URL": window.location.href,
					"prevURL": hasPrevTraffic ? crossSiteTraffic[lastSessionIndex][lastSiteIndex].URL : '',
					"nextURL": "",
					"host": window.location.host,
					"path": window.location.pathname,
					"date": new Date(),
					"timestamp": new Date().getTime()
				});	

				// Update sites visit count
				var sites;
				if (res.data.behavior && res.data.behavior.sites)
					sites = res.data.behavior.sites;
				else 
					sites = [];

				var newSite = true;
				for (i=0;i < sites.length; i++) {
					if (sites[i].site == window.location.host) {
						sites[i].visitCounter++;
						sites[i].lastVisitTimestamp = new Date().getTime();
						sites[i].lastVisitDate = new Date().toString();
						newSite = false;
					}
				}

				if (newSite) {
					sites.push({
						"id": sites.length,
						"site": window.location.host,
						"visitCounter": 1,
						"lastVisitDate": new Date().toString(),
						"lastVisitTimestamp": new Date().getTime()
					});
				}

				gigya.accounts.setAccountInfo({
					data: {
						"behavior.crossSiteTraffic": crossSiteTraffic,
						"behavior.sites": sites
					},
					callback: function(res) {
						console.dir(res);
					}
				});
			}

		}});
	}
});