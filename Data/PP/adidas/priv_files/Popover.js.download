app.define('component/common/Popover', [
	'jquery',
	'Component',
	'vendor/jquery.webui-popover' 
], function (jQuery, Component, webuiPopover) {
	'use strict'; 
	
	var triggerEvent, isCloseable, placement;
	if(app.isMobile) {
		triggerEvent = 'hover';
		placement = 'bottom';
		isCloseable = true;
	} else {
		triggerEvent = 'hover';
		placement = 'bottom';
		isCloseable = false;
	}
	
	var defaultSettings = {
		trigger:triggerEvent,
		width:'auto',
		height:'auto',
		arrow: true,
		closeable:isCloseable,
		delay:300,
		placement:placement	
	};

	function Popover (el, options) {
		Component.call(this, el);
		
		var settings = {};
		var params = this.polyfillProperties();
		var me = this;

		var content = this.el.next(".tooltip-body").html();
		settings.content = content || "";
		settings.width = params['width'] || defaultSettings.width;
		settings.height = params['height'] || defaultSettings.height;
		settings.placement = params['placement'] || defaultSettings.placement;
		settings.arrow = params['arrow'] || defaultSettings.arrow;
		settings.closeable = params['closeable'] || defaultSettings.closeable;
		settings.delay = params['delay'] || defaultSettings.delay;
		settings.trigger = params['trigger'] || defaultSettings.trigger;
		
		if(app.isMobile) {
			// calculate current device page width
			settings.width = jQuery(window).width();
		}
		
		this.el.webuiPopover(jQuery.extend({}, defaultSettings, settings));
		
		if(app.isMobile) {
			
			this.el.on('shown.webui.popover', function(){
				var arrowShift = jQuery('.webui-popover').css( "left" );
				jQuery('.webui-popover').css( {"left": "0", "z-index": me.el.zIndex() + 100} );
				jQuery('.webui-popover .webui-arrow').css( "left", "+=" + arrowShift);
			});
			this.el.on('hidden.webui.popover', function(){ 
				jQuery('.webui-popover').remove();
			});
			
		} 
		
	}
	
	Popover.prototype = jQuery.extend({}, Component.prototype);

	return Popover;
});