var AdFly = {
	LOADING_STR: 'Loading&hellip;',
	USER_TYPE: {
		PUBLISHER: 1,
		ADVERTISER: 2
	},
	API_ANONYMOUS: {
		USER_ID: -1,
		API_KEY: '2ba3f6ce601d043c177eb2a83eb34f5g'
	},
	createCategoriesTree: function(id, campaignId) {
		$('#' + id).dynatree({
			debugLevel: 0,
			checkbox: true,
			selectMode: 3,
			initAjax: {
				url: "/advertiser/getCategories",
				data: { campaignId: campaignId }
			}
		});
	},
	addAlert: function(msg, $for, $relative) {
		var alertHtml = '<div class="validationAlert" for="' + $for.attr('id') + '"><header><h1>Alert</h1></header><div class="message"></div></div>';
		$('.validationAlert[for="' + $for.attr('id') + '"]').remove();
		if ($relative) {
			$relative.append(alertHtml);
			$('.validationAlert[for="' + $for.attr('id') + '"]').addClass('relative');
		} else {
			$('#main[role="main"]').append(alertHtml);
		}
		$('.validationAlert[for="' + $for.attr('id') + '"] .message').text(msg);
	},
	removeAlert: function($for) {
		$('.validationAlert[for="' + $for.attr('id') + '"]').remove();
	},
	getReqParameterByName: function(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.search);
		if (results == null) {
			return "";
		} else {
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		}
	},
	createSpinner: function(elemId) {
	    var opts, target;

	    opts = {
	    	lines: 12,
	    	length: 6,
	    	width: 3,
	    	radius: 6,
	    	color: '#333',
	    	speed: 1.2,
	    	trail: 60,
	    	shadow: false
	    };

	    target = document.getElementById(elemId);
	    return new Spinner(opts).spin(target);
	},
	awesomeBrowser: function() {
		return !$.browser.msie || $.browser.version > 7;
	},
    mobileBrowser: function() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            return true;
        }
    }
};

var ApiCaller = {
	call: function(endpoint, method, data, before, successCallback, errorCallback, page) {
		if (typeof(data) == 'undefined' || typeof(data) != 'object') {
			data = {};
		}
		
		data['_user_id'] = typeof(THIS_USER_ID) != 'undefined' ? THIS_USER_ID : Adfly.API_ANONYMOUS.USER_ID;
		data['_api_key'] = typeof(THIS_API_KEY) != 'undefined' ? THIS_API_KEY : Adfly.API_ANONYMOUS.API_KEY;
		if (typeof(page) == 'number') {
			data['_page'] = page;
		}
		
		$.ajax({
	        type: method, url: endpoint, data: data,
	        beforeSend: function(jqXHR, settings) {
	        	if (typeof(before) == 'function') {
	        		before(jqXHR, settings);
	        	}
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	        	if (typeof(errorCallback) == 'function') {
	        		errorCallback(jqXHR, textStatus, errorThrown);
	        	}
	        },
	        success: function(data, textStatus, jqXHR) {
	        	if (typeof(successCallback) == 'function') {
	        		successCallback(data, textStatus, jqXHR);
	        	}
	        }
	    });
	},
	getAnnouncements: function(type, $putHere, $putTopHere, page) {
		page = page || 1;
		var annsDiv = $putHere;
        var topAnnsDiv = $putTopHere;
		var errorOccured = function() {
			annsDiv.html('<p>Could not get announcements.</p>');
		};
        var first = true;
		if ($putTopHere == false){
            first = false;
        }
		var selfCaller = this;

		this.call('/apiv1/announcements', 'get', {type: type},
			function(jqXHR, settings) {
				if (page == 1) {
					annsDiv.html('<p>' + AdFly.LOADING_STR + '</p>');
				}
			},
	        function(data, textStatus, jqXHR) {
	        	if (typeof(data) != 'object' || data.errors.length != 0) {
	        		errorOccured();
	        	} else if (data.data.length != 0) {
	        		var html = '';
	        		for (var i = 0; i < data.data.length; i++) {
	        			html += '\
	        				<article>\
	        					<div class="wrapper">\
	        						<aside>\
	        							<time>' + data.data[i].date + '</time>\
	        						</aside>\
	        						<section>\
	        							<p>' + data.data[i].description + '</p>\
	        						</section>\
	        					</div>\
	        				</article>';
                        if (first && page == 1) {
                            topAnnsDiv.html(html);
                            //html = '';
                            first = false;
                        }
	        		}
	        		if (page == 1) {
	        			annsDiv.html('');
	        		}
                    annsDiv.append(html);
                    annsDiv.find('div.loadMore').remove();
                    if (data.page.current != data.page.total) {
	                    var $loadMore = $('<div class="loadMore" style="text-align: center;"><a href="#">Click here to show more announcements</a></div>');
	                    $loadMore.find('a').click(function() {
	                    	$(this).hide();
	                    	selfCaller.getAnnouncements(type, $putHere, $putTopHere, page + 1);
	                    	return false;
	                    });
	                    annsDiv.append($loadMore);
                    }
	        	} else {
	        		annsDiv.html('<p>There are no new announcements at this time.</p>');
	        	}
	        },
	        errorOccured,
	        page
		);
	}
};

function jqLoadCallback(responseText, textStatus, xhr, thisPtr) {
	if (typeof(thisPtr) == 'undefined' || thisPtr == null || !thisPtr) {
		thisPtr = this;
	}
	if (403 == xhr.status) {
		$(thisPtr).html('<p>Sorry your session has timed out. Please <a href="/login">click here</a> and login again.</p>');
		return false;
	} else if (200 != xhr.status) {
		$(thisPtr).html('<p>Sorry error occured. Please <a href="/contact">contact us</a> and report this issue.</p>');
		return false;
	}

	return true;
}

function jqAjaxErrorAlert(statusCode) {
	if (statusCode == 403) {
	    alert('Sorry your session has timed out. Please refresh page and login again.');
    } else {
		alert("There has been a problem with that request.\n\nPlease refresh the page and try again.");
    }
}

function resetForm($form) {
	$form.find('input:text, input:password, input:file, select').val('');
	$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}

$(document).ready(function() {
	if (typeof(IS_LOGGED_IN) != 'undefined' && IS_LOGGED_IN) {
		(function() {
			var t = setInterval(
				function() {
					$.ajax({
						url: '/account/checkSession',
						error: function(jqXHR, textStatus, errorThrown) {
							if (jqXHR.status == 403) {
								clearInterval(t);
								$('body').mask('\
									<center>\
									<span>Sorry, your session has expired.</span>\
									<br /><span>Please <a id="loginWhenExpired" href="/login">click here</a> and login again.</span>\
									<br /><span>In order to close this message <a href="#" onclick="$(\'body\').unmask(); return false;">click here</a>.</span>\
									</center>\
								');
								$('#loginWhenExpired').focus();
							}
						}
					});
				},
				300000 // 5 minutes.
			);
		}).call();
	}
	
	if ($('body').hasClass('msie8') || $('body').hasClass('msie7')) {
		$('input[type="text"], input[type="password"]').each(function() {
			var cssHeight = $(this).css('height');
			if (cssHeight != 0 && cssHeight != '0px') {
				$(this).css('line-height', cssHeight);
			}
			var val = $(this).val();
			if (val) {
				$(this).val(val + ' ');
				$(this).val(val);
			}
		});
	}
	
	if (typeof($('body').outerHTML) == 'undefined') {
		jQuery.fn.outerHTML = function(s) {
			return s
				? this.before(s).remove()
				: jQuery("<p>").append(this.eq(0).clone()).html();
		};
	}
});

var AdFlyValidation = {
	isValid: {
		email: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return AdFlyValidation.typeofString(email) && re.test(email);
		},
		password: function(password) {
			return AdFlyValidation.typeofString(password) && password.length > 5;
		}
	},
	typeofString: function(val) {
		return typeof(val) == 'string';
	}
};

$(function() {
    $('.validationAlert header').each(function(index, value) {
    	var $message = $(this).parent().find('div.message');
    	var $alert = $message.parents('.validationAlert');
        
        if ($message.height() - $(this).height() > 8) { 
        	$alert.css({width: '1050px', marginLeft: '-525px'});
        	$message.css({width: '930px'});
        }
    });
});