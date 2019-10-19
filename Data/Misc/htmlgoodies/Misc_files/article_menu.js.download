var initArticleMenu = function(element) {
	if (element == undefined) return false;
	
	var m = new function() {
		var self = this;
		var bOver = false;
		var aTrigger = undefined;
		var subMenu = undefined;
		var ele = element;
		var hideTimeout = 0;
		
		var onMouseOver = function() {
			bOver = true;
			cancelHide();
			doShow();
		};
		
		var onMouseOut = function() {
			bOver = false;
			initHide();
		};
		
		var onSubMenuMouseOver = function() {
			bOver = true;
			cancelHide();
			doShow();
		};
		
		var onSubMenuMouseOut = function() {
			bOver = false;
			initHide();
		};
		
		var doShow = function() {
			ele.style.backgroundPosition = "0 0";
			if (subMenu) subMenu.style.display = "block";
		};
		
		var doHide = function() {
			cancelHide();
			if (!bOver) {
				ele.style.backgroundPosition = "0 -1000px";
				if (subMenu) subMenu.style.display = "none";
			}
		};
		var initHide = function() {
			cancelHide();
			hideTimeout = window.setTimeout(doHide,300);
		};
		var cancelHide = function() {
			if (hideTimeout > 0) window.clearTimeout(hideTimeout);
			hideTimeout = 0;
		};
		
		aTrigger = searchChildsByTagName(ele, "A", 0, 1);
		if (aTrigger.length > 0) {
			aTrigger = aTrigger[0];
			
			aTrigger.onmouseover = onMouseOver;
			aTrigger.onmouseout = onMouseOut;
		}
		
		subMenu = searchChilds(ele,"shareSubMenu");
		if (subMenu.length > 0) {
			subMenu = subMenu[0];
			subMenu.onmouseover = onSubMenuMouseOver;
			subMenu.onmouseout = onSubMenuMouseOut;
		} else {
			subMenu = undefined;
		}
	}
	
	return m;
}