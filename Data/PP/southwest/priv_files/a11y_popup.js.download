var popUpAccessible=function(c,b,a,f,e,d){this._addTabbableSupport();
this._addFocusSelectorSupport();
this.popUp=c;
this.popUpTrigger=$(b);
this.popUpCloseFunction=(typeof a==="function")?a:function(){};
if(typeof d==="boolean"&&d===true){this._makeContainerTabbableFirstElement();
this._moveFocusToFirstElement()
}else{this._makeContainerTabbable();
this._moveFocusToContainer()
}if(f){if(typeof f==="string"){this.closeElements=this.popUp.find(f)
}else{if($.isArray(f)){this.closeElements=this.popUp.find(f.join())
}}this._handleCloseElements()
}this.allowEscapeClose=(typeof e!=="boolean")?true:e;
this._setFirstAndLastTabbableElements();
if(this.allowEscapeClose){this._listenEscKey()
}this._listenTabKey()
};
popUpAccessible.prototype._makeContainerTabbable=function(){var a='<div class="js-role-document" role="dialog"></div>';
this.popUp.attr({role:"document",tabindex:"-1"});
if(this.popUp.closest(".js-role-document").length===0){this.popUp.wrapAll(a)
}};
popUpAccessible.prototype._makeContainerTabbableFirstElement=function(){var a='<div class="js-role-document" role="dialog"></div>';
if(this.popUp.closest(".js-role-document").length===0){this.popUp.wrapAll(a)
}};
popUpAccessible.prototype._moveFocusToContainer=function(){setTimeout($.proxy(function(){this.popUp.focus()
},this),100)
};
popUpAccessible.prototype._moveFocusToFirstElement=function(){setTimeout($.proxy(function(){this.popUpFirstTabbableEl.focus()
},this),100)
};
popUpAccessible.prototype._returnFocusToTrigger=function(){setTimeout($.proxy(function(){this.popUp.removeAttr("tabindex");
this.popUp.removeAttr("role");
this.popUpTrigger.focus()
},this),100)
};
popUpAccessible.prototype._listenTabKey=function(){this.popUp.keydown($.proxy(function(a){this._tabCycle(a)
},this))
};
popUpAccessible.prototype._handleCloseElements=function(){this.closeElements.each($.proxy(function(a,b){$(b).attr("tabindex","0");
$(b).click($.proxy(this._closePopUp,this));
$(b).keydown($.proxy(function(c){if(c.which&&(c.which===this.KEY_ENTER)){c.preventDefault();
this._closePopUp()
}},this))
},this))
};
popUpAccessible.prototype._closePopUp=function(){this._returnFocusToTrigger();
this.popUpCloseFunction();
this._unbindKeyDown()
};
popUpAccessible.prototype._listenEscKey=function(){this.popUp.keydown($.proxy(function(a){if(a.which&&(a.which===this.KEY_ESCAPE)){this._closePopUp()
}},this))
};
popUpAccessible.prototype._unbindKeyDown=function(){this.popUp.unbind("keydown")
};
popUpAccessible.prototype._setFirstAndLastTabbableElements=function(){this.popUpTabbableEl=this.popUp.find(":tabbable, [tabindex]");
this.popUpFirstTabbableEl=this.popUpTabbableEl.first()[0];
this.popUpLastTabbableEl=this.popUpTabbableEl.last()[0]
};
popUpAccessible.prototype._tabCycle=function(b){var a;
if(b.which===this.KEY_TAB){a=$("*:focus")[0];
if(b.shiftKey&&a===this.popUpFirstTabbableEl||b.shiftKey&&this.popUp.is(":focus")){b.preventDefault();
this.popUpLastTabbableEl.focus()
}else{if(!b.shiftKey&&a===this.popUpLastTabbableEl){b.preventDefault();
this.popUpFirstTabbableEl.focus()
}}}};
popUpAccessible.prototype.reusePopUp=function(a){this.popUpTrigger=$(a);
this.popUpCloseFunction=closeProductHover;
this._makeContainerTabbable();
this._moveFocusToContainer();
this._setFirstAndLastTabbableElements();
this._listenEscKey();
this._listenTabKey()
};
popUpAccessible.prototype._addTabbableSupport=function(){this.KEY_ENTER=13;
this.KEY_ESCAPE=27;
this.KEY_TAB=9;
if(!$.expr[":"].tabbable){$.extend($.expr[":"],{data:function(c,b,a){return !!$.data(c,a[3])
},focusable:function(b){var c=b.nodeName.toLowerCase(),a=$.attr(b,"tabindex");
return(/input|select|textarea|button|object/.test(c)?!b.disabled:"a"==c||"area"==c?b.href||!isNaN(a):!isNaN(a))&&!$(b)["area"==c?"parents":"closest"](":hidden").length
},tabbable:function(b){var a=$.attr(b,"tabindex");
return(isNaN(a)||a>=0)&&$(b).is(":focusable")
}})
}};
popUpAccessible.prototype._addFocusSelectorSupport=function(){var a=$.expr[":"];
if(!a.focus){a.focus=function(b){return b===document.activeElement&&(b.type||b.href)
}
}};