/*
 *  (c) 2000-2014 deviantART, Inc. All rights reserved.
 */
DWait.ready(["jms/lib/jquery/plugins/jquery.throttle-debounce.js","jms/lib/bind.js","jms/lib/jquery/jquery.current.js","jms/lib/Base.js"],function(){window.ToolbarAction=Base.extend({shiftKey:!1,altKey:!1,constructor:function(t,o){this.toolbar=t,this.callback=o||$.noop},act:function(t){this.command(t),this.callback(t,this)},mouse:function(){},command:function(){document.execCommand(this.name,!1,null)},render:function(t){var o="";return o+=t.toolbar_button_class,o+=this.isMenu?" "+t.toolbar_menu_class:"",o+=" "+t.toolbar_name+"-toolbar-button default-toolbar-button",o+=" "+t.toolbar_name+"-toolbar-"+this.name,this.$node=$('<div class="'+o+'" title="'+(this.isMenu?"":this.title||this.name)+'">'+"<span>"+this.label+"</span>"+(this.isMenu?"<b></b>":"")+"</div>").on("mousedown",this.onMouseDown.bind(this)).on("click",this.onClick.bind(this)).on("mouseover",this.onMouseOver.bind(this)),this.$node},onMouseDown:function(t){t.preventDefault(),this.sel=window.getSelection?getSelection().rangeCount&&getSelection().getRangeAt(0):document.selection&&document.selection.createRange()},onClick:function(t){t.preventDefault();try{this.sel.select()}catch(o){}try{getSelection().addRange(this.sel)}catch(o){}this.act(t)},onMouseOver:function(t){this.mouse(t)},onKeyDown:function(t){if(this.keyBind){if(0===navigator.platform.indexOf("Mac")){if(!t.metaKey)return}else if(!t.ctrlKey)return;this.keyBind==t.which&&this.shiftKey==t.shiftKey&&this.altKey==t.altKey&&(t.preventDefault(),this.act(t))}}});var t=window.Toolbars={};window.Toolbar=Base.extend({actions:{},default_options:{toolbar_button_class:"smbutton smbutton-pale",toolbar_menu_class:"",toolbar_order:[]},constructor:function(o,i,n,s){this.id=o,this.$node=$(i),this.options=$.extend({},this.default_options,s),t[o]=this,this.create(o,n)},create:function(t,o){this.$toolbar=$("<div></div>",{id:t+"-"+this.options.toolbar_name+"-toolbar","class":this.options.toolbar_name+"-toolbar default-toolbar"}),this.$toolbar.css({display:"none"}),this.toolbar=[],$.each(this.options.toolbar_order,function(t,i){if(i&&this.actions[i]){var n=new this.actions[i](this,o);this.toolbar.push(n),this.$toolbar.append(n.render(this.options))}}.bind(this)),this.$toolbar.appendTo(this.options.toolbar_node||"body"),this.$node.on("keydown.Toolbar",this.onKeyDown.bind(this))},destroy:function(){t[this.id]&&(this.$toolbar.remove(),this.$node.off(".Toolbar"),$(window).off(".Toolbar"),delete t[this.id])},glueToolbar:function(){var t=$(document).scrollTop();t>this.toolbarTop?t+100>this.$node.offset().top+this.$node.height()?(this.toolbarStopped||(this.toolbarStopped=this.$toolbar.offset().top),this.$toolbar.css({position:"absolute",top:this.toolbarStopped})):this.$toolbar.css({position:"fixed",top:0}):this.$toolbar.css({position:"absolute",top:this.toolbarTop})},show:function(){this.toolbarTop=this.$node.offset().top-this.$toolbar.height(),this.$toolbar.show()},hide:function(){this.$toolbar.hide(),this.toolbarStopped=!1},onKeyDown:function(t){$.each(this.toolbar,function(o,i){i.onKeyDown(t)})},getItem:function(t){for(var o=0;this.toolbar.length>o;o++)if(this.toolbar[o].name==t)return this.toolbar[o]}}),window.DWait&&DWait.run("jms/lib/toolbar.js")});
DWait.ready(["jms/lib/browser.js","jms/lib/popup2.js","jms/lib/jquery/jquery.current.js","jms/lib/toolbar.js"],function(){window.PopupToolbarAction=ToolbarAction.extend({reuse_popup:!0,switch_on_hover:!0,default_popup_options:function(){return this._memoized_default_popup_options=this._memoized_default_popup_options||this._get_default_popup_options()},_get_default_popup_options:function(){return{hidden:function(){this.$node.removeClass("headerMenuActive")}.bind(this),switched:function(){this.$node.removeClass("headerMenuActive")}.bind(this),shown:function(){this.$node.addClass("headerMenuActive")}.bind(this),append:!0}},constructor:function(o,p){this.base(o,p);var t=this.popup_options;$.isFunction(t)&&(t=this.popup_options());var i=this.default_popup_options();this.popup_options=$.extend({},i,t)},mouse:function(o){if(this.isMenu&&this.switch_on_hover&&Popup2.anyActivePopup()&&Popup2.activePopup()!=this.popup_name){var p=$(o.target).closest("div"),t=this.get_popup(),i=this.position_options();Popup2.switchPopup(t,t.position(p,i)),p.addClass("headerMenuActive")}},act:function(o){var p=$(o.target).closest("div");if(p.hasClass("headerMenuActive"))return Popup2.hideAll(),void 0;Popup2.hideAll();var t=this.get_popup();t.show(t.position(p,this.position_options()))},position_options:function(){return{bump:{top:0,left:0}}},get_popup:function(){var o=this.toolbar.options,p=Popup2.getPopup(this.popup_name);if(p&&this.reuse_popup)return p;p&&p.remove(),o.toolbar_popup_class&&this.popup_options.allow_class_override&&(this.popup_options.classes=o.toolbar_popup_class);var t=o.toolbar_node&&this.popup_options.allow_parent_override?this.toolbar.options.toolbar_node:"#overhead .default-toolbar";return new Popup2(this.popup_name,t,this.popup_options)}}),window.DWait&&DWait.run("jms/lib/popuptoolbar.js")});if(window.DWait){DWait.count()}