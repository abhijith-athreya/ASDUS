var globalPopupCallbacksInitialized=false;
var SWA=SWA||{};
SWA.PopUp={pointerDirections:{popup_open_direction_East:"popup_pointer_right",popup_open_direction_West:"popup_pointer_left",popup_open_direction_South:"popup_pointer_up",popup_open_direction_North:"popup_pointer_down",popup_open_direction_NorthWest:"popup_pointer_down",popup_open_direction_NorthEast:"popup_pointer_down",popup_open_direction_SouthWest:"popup_pointer_up",popup_open_direction_SouthEast:"popup_pointer_up",popup_open_direction_EastNorth:"popup_pointer_east_north"},pointerImages:{popup_pointer_down:["/assets/images/fare_product_pointer_noShadow.gif",31,17],popup_pointer_up:["/assets/images/fare_product_pointer_noShadow_bottom.gif",31,17],popup_pointer_left:["/assets/images/priceItin_pointer_noShadow_right.gif",16,27],popup_pointer_right:["/assets/images/priceItin_pointer_noShadow.gif",16,27],price_itinerary_pointer:["/assets/images/priceItin_pointer_noShadow.gif",16,27],popup_pointer_east_north:["/assets/images/fare_details_triangle_left.png",18,32],earlyBirdAlistPointer:["/assets/images/airItin_pointer_noShadow.gif",16,27],earlyBirdCheckinExclusionsPointer:["/assets/images/airItin_pointer_noShadow.gif",16,27],air_itinerary_pointer_white:["/assets/images/airItin_pointer_noShadow.gif",18,32],air_itinerary_pointer_gray:["/assets/images/airItin_pointer_noShadow_gray.gif",18,32]},popup_container_class:"popup_outer_container",popup_container_class_itinerary:"priceItineraryPopupTable",close_container_class:"popup_close_container",popup_is_opening:false,getAllPointerIds:function(){var b="";
for(var a in SWA.PopUp.pointerImages){if(typeof a==="string"){b+="#"+a+", "
}}return b.substr(0,b.length-2)
},register:function(b,a){if(!globalPopupCallbacksInitialized){SWA.PopUp.initialize(b,SWA.PopUp.getAllPointerIds())
}$(a).click(function(c){SWA.PopUp.popup_is_opening=true;
SWA.PopUp.hideHoverObjects();
SWA.PopUp.showHoverObjects(this,b);
c.stopPropagation();
c.preventDefault();
$(document).click();
SWA.PopUp.popup_is_opening=false;
return false
});
$(b+" ."+SWA.PopUp.close_container_class).click(function(){SWA.PopUp.hideHoverObjects()
})
},initialize:function(a,b){$(document).click(function(){if(!SWA.PopUp.popup_is_opening){SWA.PopUp.hideHoverObjects()
}});
$("#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class_itinerary+" ,#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class+", #page_bottom_popup_outer_container_async ."+SWA.PopUp.popup_container_class).click(function(){return false
}).find("A,INPUT").click(function(c){c.stopPropagation();
return true
});
$(b).click(function(){return false
});
globalPopupCallbacksInitialized=true
},initializePopupPointer:function(c){var b=SWA.PopUp.pointerDirections[c];
var a=SWA.PopUp.pointerImages[b];
if($("#"+b).size()==0){$(document.body).append('<img src="'+a[0]+'" width="'+a[1]+'" height="'+a[2]+'" id="'+b+'" class="popup_pointer_image" alt=""/>')
}return b
},showHoverObjects:function(b,c){var p="popup_open_direction_East";
var h=$(b).attr("class").split(/\s+/);
var l=h.length;
for(var d=0;
d<l;
d++){if(h[d].indexOf("popup_open_direction")===0){p=h[d]
}}var n=SWA.PopUp.initializePopupPointer(p);
var j=$(c);
if(j.size()>0){var e=$(b).offset();
var o=$(b).height();
var g=$(b).width()+4;
var a=$("#"+n);
a.css({display:"block"});
j.css({display:"block"});
var k=a.outerWidth();
var f=a.outerHeight();
if(p=="popup_open_direction_East"){a.css({top:e.top+o/2-f/2,left:e.left+g});
j.css({top:e.top-50,left:e.left+g+k-3})
}else{if(p.indexOf("popup_open_direction_EastNorth")===0){a.css({top:e.top+o/2-f/2,left:e.left+g});
j.css({top:e.top-70,left:e.left+g+k-8})
}else{if(p.indexOf("popup_open_direction_North")===0){a.css({top:e.top-f,left:e.left+(g/2)-(k/2)});
j.css({top:e.top-f-j.height()-2});
if(p=="popup_open_direction_North"){var m=4;
var q=e.left+(g/2)-(j.width()/2);
j.css({left:(q>m)?q:m})
}else{if(p=="popup_open_direction_NorthEast"){j.css({left:e.left})
}else{if(p=="popup_open_direction_NorthWest"){j.css({left:e.left+g-j.width()})
}}}}else{if(p.indexOf("popup_open_direction_South")===0){a.css({top:e.top+o,left:e.left+(g/2)-(k/2)});
j.css({top:e.top+o+f-3});
if(p=="popup_open_direction_South"){j.css({left:e.left+(g/2)-(j.width()/2)})
}else{if(p=="popup_open_direction_SouthEast"){j.css({left:e.left})
}else{if(p=="popup_open_direction_SouthWest"){j.css({left:e.left+g-j.width()})
}}}}else{if(p=="popup_open_direction_West"){a.css({top:e.top+o/2-f/2,left:e.left-k});
j.css({top:e.top-50,left:e.left-j.width()-k-3})
}}}}}toggleSelectBoxVisibilityUnderPopups("hidden",j);
j.find("."+SWA.PopUp.close_container_class).show();
SWA.popUpAccessible=new popUpAccessible(j,b,SWA.PopUp.hideHoverObjects,".popup_close_container")
}},hideHoverObjects:function(){var b=SWA.PopUp.getAllPointerIds();
var a=$("#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class+", #page_bottom_popup_outer_container_async ."+SWA.PopUp.popup_container_class+", #fullFareDivReturning , .js-pointsCalcDiv , #earlyBirdCheckinExclusions , #earlyBirdAlistPopup , #fullFareDivDeparting , #routingHoverTable , #fareProductHover , #fare_product_pointer , .fullFareDiv ."+SWA.PopUp.popup_container_class+", .farePopupTable");
a.each(function(){toggleSelectBoxVisibilityUnderPopups("visible",this)
});
a.css({display:"none"});
$(b).css({display:"none"})
}};
function toggleSelectBoxVisibilityUnderPopups(e,b){if(!$.browser.msie){return
}if(e!="visible"&&e!="hidden"){e="visible"
}var f=$(b).offset();
var a=$(b).height();
var d=$(b).width();
var c=$(b).attr("id");
$("SELECT").each(function(){if(!c||$(this).parents("#"+c).size()==0){var h=$(this).offset();
var i=$(this).height();
var m=$(this).width();
var g=between(h.left,f.left,f.left+d);
var k=between(h.left+m,f.left,f.left+d);
var l=between(h.top,f.top,f.top+a);
var j=between(h.top+i,f.top,f.top+a);
if((g||k)&&(l||j)){$(this).css("visibility",e)
}}})
}function hideHoverObjects(){if(!SWA.PopUp.popup_is_opening){SWA.PopUp.hideHoverObjects();
var a=".priceItineraryPopupTable, #earlyBirdCheckinHelp, #priceItineraryKeyBusinessSelectPopup, #giftCardMessagePopup, #giftCardFAQ, .js-pointsCalcDiv, .js-taxesAndFeesDiv, js-umChargeDiv, .fullFareDiv";
if(typeof additionalPopupDivs==="function"){a+=additionalPopupDivs()
}var b=$(a);
$(b).each(function(){if($(this).css("display")!="none"){toggleSelectBoxVisibilityUnderPopups("visible",this)
}});
b.css({display:"none"});
$("#price_itinerary_pointer, #pointer_point_to_left, #pointer_point_to_right, #earlyBirdCheckinHelpPointer, #earlyBirdCheckinExclusionsPointer, #priceItineraryKeyBusinessSelectPointer, #earlyBirdAlistPointer, #giftCardMessagePopupPointer, #giftcardfaqoverlaydivpointer, #popup_pointer_down").css({display:"none"})
}}function displayHelpPopup(c,f,d,g,i,h){var e=$("#popup_help_box");
var b=$("#popup_help_box_pointer");
e.removeClass();
e.addClass(i+" popup_help_box");
e.find(".popup_help_box_header_left").html(f);
e.find(".popup_help_box_content_container").html(d);
e.find(".popup_help_box_header_right DIV").click(function(){closeHelpPopup();
return false
});
b.removeClass();
b.addClass("popup_help_box_pointer_"+g+" popup_help_box_pointer");
var a=$(c).offset();
if(g=="down"){e.css({top:a.top-e.outerHeight()-b.outerHeight()+3,left:a.left-e.outerWidth()*h,display:"block"});
b.css({top:a.top-b.outerHeight(),left:a.left+$(c).outerWidth()/2-b.outerWidth()/2,display:"block"})
}else{if(g=="up"){e.css({top:a.top+$(c).outerHeight()+b.outerHeight()-3,left:a.left-e.outerWidth()*h,display:"block"});
b.css({top:a.top+$(c).outerHeight(),left:a.left+$(c).outerWidth()/2-b.outerWidth()/2,display:"block"})
}}SWA.popUpAccessible=new popUpAccessible(e,c,closeHelpPopup,".popup_help_box_header_right DIV")
}function showHelpPopup(d,f,a,c,e,b){displayHelpPopup(d,f,a,c,e,b)
}function rrPopUpHelp(b,a){showHelpUserdPopup(b);
eventStopPropagation(a);
return false
}function eventStopPropagation(a){if(typeof a=="undefined"){var a=window.event
}a.cancelBubble=true;
if(typeof a.stopPropagation=="function"){a.stopPropagation()
}}function showHelpUserdPopup(a){showHelpPopup(a,"Need help logging in?",'<strong>Forgot your Rapid Rewards Number?</strong><br />If you already have a Rapid Rewards or Account number, you may use the following link to look it up.<br/><br/><a href="/rapidrewards/rr-lookup.html">Lookup Rapid Rewards Account #</a>',"down","popup_help_box_forgot_rr",0.5)
}function checkinRRPopUpHelp(b,a){showCheckinRRHelpUserPopup(b);
a.cancelBubble=true;
return false
}function showCheckinRRHelpUserPopup(a){showHelpPopup(a,"Rapid Rewards Number",'Enter your Rapid Rewards number to ensure you get points for this flight.<br /><br/>Forgot your Rapid Rewards Number?<br/><a href="/rapidrewards/rr-lookup.html" target="_blank">Lookup Rapid Rewards Account #</a><br/>',"down","popup_checkin_forgot_rr",0.5)
}function showPromoCodeHelpPopup(a){showHelpPopup(a,"<h1 class='promoCode-text--heading'>What is a promo code?</h1>","A promotion code is a series of letters and/or numbers that allow Customers to receive a discount off of Southwest Airlines' published airfares.","up","popup_help_box_promo_code popup--borderFocus",0.5)
}function showPromoCodeHelpWidgetPopup(d){var b=$(".js-wcm_booking_widget_field_help_body").html();
var a;
var c=$(".js-wcm_booking_widget_field_help_title").html();
a='<h1 class="promoCode-text--heading">'+c+"</h1>";
showHelpPopup(d,a,b,"up","popup_help_widget_box_promo_code popup--borderFocus",0.5)
}function closeHelpPopup(){var b=$("#popup_help_box");
var a=$("#popup_help_box_pointer");
b.css({display:"none"});
a.css({display:"none"});
a.removeClass();
a.addClass("popup_help_box_pointer")
}function pointerWithinObject(a,b){var d=$("#"+b);
var c=a.pageX;
var e=a.pageY;
var f=parseInt(d.css("left"));
var g=parseInt(d.css("top"));
var i=d.outerHeight();
var h=d.outerWidth();
return(between(c,f,f+h)&&between(e,g,g+i))
}function between(c,a,b){return(c>=a&&c<=b)
}$(document).ready(function(){var a=27;
$("#right_column_account_login_form_field_rr_help_link").click(function(b){return rrPopUpHelp($(this),b)
});
$(".promo-code-icon, .js-info-icon--button").click(function(c){showPromoCodeHelpPopup($(this));
SWA.PopUp.hideHoverObjects();
var b=$(".swa-component-overlay:visible, .overlay-pointer").hide();
c.stopPropagation();
return false
});
$(".js-promo-code-icon--button").click(function(b){showPromoCodeHelpWidgetPopup($(this));
SWA.PopUp.hideHoverObjects();
$(".swa-component-overlay:visible, .overlay-pointer").hide();
b.stopPropagation();
return false
});
$(document).click(function(b){if(!pointerWithinObject(b,"popup_help_box")){closeHelpPopup()
}});
$(".swa-header--link").click(function(b){if(!pointerWithinObject(b,"popup_help_box")){closeHelpPopup()
}});
$(document).keydown(function(b){if(b.keyCode==a){closeHelpPopup()
}})
});