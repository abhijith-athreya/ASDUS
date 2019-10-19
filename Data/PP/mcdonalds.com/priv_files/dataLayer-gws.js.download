var analyticsData = {};

(function($){
	var mcdAnalytics = {
		populate: function() {
			var url = window.location.pathname;
			var path = url;
			if(path.indexOf('.html')!= -1){
				path = path.replace(".html","")
			}
			if(path.indexOf("/content/") != -1){
				path = path.replace("/content/","");
			} else {
				path = path.replace("/","")
			}
		    var pathArray = path.split("/");
			var pageType = this.getPageType(pathArray);
			analyticsData.site = this.siteData(pathArray); //Site Data
			analyticsData.page = this.pageData(pathArray, pageType); //Page Data
			analyticsData.location = this.locationData(url); //Location Data
			analyticsData.restaurant = this.restaurantData(path); //Restaurant Data
			analyticsData.user = this.userData(); //User Data
			//Product Data
			if(pageType == "Product") {
				analyticsData.product = this.productData();
			}
			//Search Data
			if(pageType == "Content Search" || pageType=="Restaurant Locator") {
				analyticsData.search = this.searchData(pageType);
			}
			analyticsData.offers = this.offersData(); //Offers Data
			analyticsData.transaction = this.transactionData(); //Transaction Data
		},
		getPageType: function(pathArray) {
			var pageType = "Other";
			if(typeof errorPage !=="undefined" && errorPage) {
				pageType = "404error";
			} else if($('meta[name=pagetype]').attr("content") == "Product") {
				pageType = "Product";
			} else if($("main").has(".search").length >= 1) {
				pageType = "Content Search";
			} else if($("main").has(".restaurantLocator").length >= 1) {
				pageType = "Restaurant Locator";
			} else if($("main").has(".nutrition-calculator").length >= 1) {
				pageType = "Nutrition Calculator";
			} else if(pathArray && pathArray.length==2) {
				pageType = "Home";
			}
			return pageType;
		},
		siteData: function(pathArray) {
			var obj = {
				marketId: (pathArray)? pathArray[0] : "",
				platform: (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))? "mobile":"desktop"
			};
			return obj;
		},
		pageData: function(pathArray, pageType) {
			var obj = {
				locale: (pathArray && pathArray.length >1)? pathArray[1] : "",
				section: {
					level1: (pathArray && pathArray.length >2)? pathArray[2] : "",
					level2: (pathArray && pathArray.length >3)? pathArray[3] : "",
					level3: (pathArray && pathArray.length >4)? pathArray[4] : "",
					level4: (pathArray && pathArray.length >5)? pathArray[5] : "",
					level5: (pathArray && pathArray.length >6)? pathArray[6] : ""
				},
				pageName: (pathArray && pathArray.length >=2)? ((pathArray.length!=2)? pathArray[pathArray.length-1] : "home") : "",
				pageType: pageType
			}
			return obj;
		},
		locationData: function(url) {
			var obj = {
				latitude: null,
				longitude: null,
				coopRegion: $.cookie('coopid')
			}
			/*Retrieve user location */
			this.getUserPosition(url);
			return obj;
		},
		getUserPosition: function(url) {
			if (url.indexOf(".gma.html") < 0) {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function(position) {
						analyticsData.location.latitude = position.coords.latitude;
						analyticsData.location.longitude = position.coords.longitude;
					});
				}
			}
		},
		restaurantData: function() {
			var obj = {
				ID: null
			}
			return obj;
		},
		userData: function(){
			/*Find Daypart */  
			var dayparts = ["Late Night", "Breakfast", "Lunch", "Snack", "Dinner", "Evening"];
			var date = new Date();
			var day = date.getDay();
			var hr = date.getHours();
			var min = date.getMinutes();
			var part = 0;
			
			if(hr >= 21) {
				part = 5;
			} else if (hr >= 16) {
				part = 4;
			} else if (hr >= 14) {
				part = 3;
			} else if (hr >= 5 && hr <14) {
				if (day==0 || day==6) {
					part = ((hr==10 && min>=30) || hr>=11)? 2 : 1;
				} else {
					part = (hr>=11)? 2 : 1;
				}
			}
			
			var obj = {
				daypart: dayparts[part],
				authStatus: null,
				userName: null,
				profileID: null,
				hashedEmail: null,
				ecpid: null
			}
			
			return obj;
		},
		productData: function() {
			var obj = {
				category: $(".itemID").attr("data-category-id"),
				id: $(".itemID").attr("data-item-id"),
				name: $(".itemID").attr("data-item-name")
			};
			return obj;
		},
		searchData: function(pageType) {
			var term, type, numResults = "";
			var filters = [];
			
			var params = this.getQueryParams(window.location.href);
			if(pageType == "Content Search") {
				type = "Content";
				term = params["q"];
				numResults = $(".finalResultText span.bold").text();
			} else if(pageType == "Restaurant Locator") {
				type = "Location";
				term = params["locate"]? "Locate Me" : params["searchText"];
				var resultCount = 0;
				if($("#rl-mapView .container > div").length > 0) {
					$("#rl-mapView .container > div").each(function(i){
						if(!$(this).find("li.restaurant-location").hasClass("ng-hide")) {
							resultCount++;
						}
					});
				}console.log(resultCount);
				$(".restaurantLocator .cont-filters ul#search-options li .checkbox").each(function(i){
					if($(this).children("input").attr("aria-checked") == "true") {
						filters.push($(this).children("label").text());
					}
				});
			}
			var obj = {
				term: term,
				type: type,
				numResults: numResults,
				filters: filters,
				error: null
			}
			return obj;
		},
		offersData: function() {
			var objArray = [];
			var obj = {
				offername: null,
				offerexpiry: null,
				qrcode: null,
				offerChannel: null
			}
			objArray.push(obj);
			return objArray;
		},
		transactionData: function() {
			var obj = {
				fulfillment: null,
				calories: null,
				price: {
					delivery: null,
					tax: null,
					discount: null
				},
				offerId: null,
				paymentMethod: null,
				basketItems: [{
					id: null,
					revenue: null,
					units: null
				}],
				state: null,
				zip: null
			}
			return obj;
		},
		getQueryParams: function(url) {
			var vars = [], hash;
			var q = url.split('?')[1];
			if(q != undefined){
				q = q.split('&');
				for(var i = 0; i < q.length; i++){
					hash = q[i].split('=');
					vars.push(hash[1]);
					vars[hash[0]] = hash[1];
				}
			}
			return vars;
		}
	}
	mcdAnalytics.populate();

	//analytics tracking for Nutrition Calculator
	$('body').on('click', '.nutrition-calculator-alter .row.items input', function(e) {
		var items = $(this).attr("data-nc-analytics-add");
		_satellite.setVar('addedProd', items);
		_satellite.track('addItemDCR');
	});
	$('body').on('click', 'button.nc-delete-analytics', function(e) {
		var items = $(this).attr("data-nc-analytics-delete");
		_satellite.setVar('removedProd', items);
		_satellite.track('removeItemDCR');
	});
	$('body').on('click', 'button.nc-delete-all-analytics', function(e) {
		var items = $(this).attr("data-allitems-nc-analytics");
		_satellite.setVar('removedProd', items);
		_satellite.track('removeItemDCR');
    });

	//analytics tracking for Happy Meal
	$('body').on('click', '.page-happy-meal .btn.btn-red', function(e) {
		var items = "";
		var slides = $(this).parents(".page-happy-meal").find(".slides");
		$.each(slides, function(value, key){
			var a = key;
			if ($(a).find(".active").attr("data-id")) {
				items = items + $(a).find(".active").attr("data-id") + ",";
			}
		});
		if ($(this).attr("data-defaultitems")) {
			items = items + $(this).attr("data-defaultitems");
		}
		_satellite.setVar('addedProd', items);
		_satellite.track('addItemDCR');
	});

	//analytics tracking for Extra Value Meal
	$('body').on('click', '.page-extravalue a', function(e) {
		var items = $(this).attr("data-evm-analytics");
		_satellite.setVar('addedProd', items);
		_satellite.track('addItemDCR');
	});

	//analytics tracking for Product Details
	$('body').on('click', '.component-product-detail .btn.btn-red', function(e) {
		var items = $(this).attr("data-product-analytics");
		_satellite.setVar('addedProd', items);
		_satellite.track('addItemDCR');
	});
}(jQuery));