//Run search appliance
function runSearch() {
	var searchTerm = document.searchform.q.value;
	
	document.searchform.action='http://search.ucla.edu/search';
	document.searchform.submit();
}

//Test for numeric values
function isNumeric(strString) {
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;
	
	if (strString.length == 0) return false;
	
	//test strString consists of valid characters listed above
	for (i = 0; i < strString.length && blnResult == true; i++) {
		strChar = strString.charAt(i);
		if (strValidChars.indexOf(strChar) == -1) {
			blnResult = false;
		}
	}
	return blnResult;
}


//Return url parameters
$.urlParam = function(param) {
	var key = new RegExp("[\\?&]"+param+"=([^&#]*)").exec(window.location.href);
	if (key!=null) {
		return key[1]
	} else {
		return null
	}
};


//DOM loaded
$(document).ready(function() {


	var searchInput = $(".google-search");

	//Add query to searchbox if present in URL
	var searchQuery = $.urlParam('q');
	if (searchQuery != null) {
		var decodedQuery = decodeURIComponent(searchQuery.replace(/\+/g,' '));

		$(window).load(function() {
			//$(searchInput).val(decodedQuery).addClass("focus");
		});
	}	
	
	//"Google Campus Search" remove/add on blur/focus
	$(searchInput).focus(function() {
		$(this).addClass("focus"); //removes bg image
	});	
	$(searchInput).blur(function() {
		if ( !$(searchInput).val() ) {
			$(this).removeClass("focus");
		}
	});
	
	//If value exists on page load, remove "Google Campus Search"
	if ( $(searchInput).val() ) {
		$(searchInput).addClass("focus");
	}
	

	//Call search function
	$("#searchform").submit(function() {
		runSearch();
	});


});
