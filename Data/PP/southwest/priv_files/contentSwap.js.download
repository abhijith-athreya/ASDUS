if(!window.SWA){var SWA=SWA||{};}

if(!window.SWA.contentSwap) {
	SWA.contentSwap = function(element, fragment, error_fragment) {
		if (fragment) {
			$(element).load(fragment, function(response, status){
				if (status == "error" && error_fragment){
					$(element).load(error_fragment);
				}
			});
		}
	};
}