$(document).ready(function() {
	var b = '';
	if ($.browser.mozilla) {
		b = 'mozilla';
	} else if ($.browser.msie) {
		b = 'msie';
	} else if ($.browser.opera) {
		b = 'opera';
	} else if ($.browser.webkit) {
		b = 'webkit';
	}
	
	var v = b ? (b + parseInt($.browser.version)) : '';
	
	if (b) {
		$('body').addClass(b);
	}
	
	if (v) {
		$('body').addClass(v);
	}
});