(function($){jQuery.extend({debug:function(){window.debug=window.debug||[];args=jQuery.makeArray(arguments);if(typeof this=='object'){var name=(args.length?args[0]:window.debug.length);var data=this;}
else{var name=(args.length>1?args.pop():window.debug.length);var data=args[0];}
window.debug[name]=data;if(typeof console!='undefined'){console.log(name,data);}
return this;}});jQuery.fn.debug=jQuery.debug;})(jQuery);;