var defaultTextGlobalNav={globalnav_header_utility_search_input:"Search Southwest"};
$(document).ready(function(){var i=$("#globalnav_footer_site_links_morelinks_toggle");
i.css({display:"inline-block"});
var j=$("#globalnav_footer_site_links_container").height();
$(".globalnav_footer_site_links").css({height:j});
var h=$("#globalnav_footer_container");
h.css({height:h.height()});
if(typeof globalNavLoadFooterExpanded=="undefined"){$("#globalnav_footer_site_links_container").css({height:40});
i.removeClass("globalnav_footer_site_links_morelinks_toggle_open").addClass("globalnav_footer_site_links_morelinks_toggle globalnav_footer_site_links_morelinks_toggle_closed")
}for(var k in defaultTextGlobalNav){var m=$("#"+k);
m.focus(function(){if($(this).hasClass("show_defaulttext")){$(this).val("");
$(this).removeClass("show_defaulttext")
}});
m.blur(function(){if($(this).val()==""){$(this).addClass("show_defaulttext");
$(this).val(defaultTextGlobalNav[$(this).attr("id")])
}});
if($(m).val()==""||$(m).val()==defaultTextGlobalNav[k]){m.addClass("show_defaulttext");
m.val(defaultTextGlobalNav[k])
}}$("#globalnav_footer_site_links_morelinks_toggle").click(function(){var a=$(this);
if(a.hasClass("globalnav_footer_site_links_morelinks_toggle_open")&&!a.hasClass("globalnav_footer_site_links_morelinks_toggle_inprogress")){a.removeClass("globalnav_footer_site_links_morelinks_toggle_open").addClass("globalnav_footer_site_links_morelinks_toggle_closed globalnav_footer_site_links_morelinks_toggle_inprogress");
l(40)
}else{if(a.hasClass("globalnav_footer_site_links_morelinks_toggle_closed")){a.removeClass("globalnav_footer_site_links_morelinks_toggle_closed").addClass("globalnav_footer_site_links_morelinks_toggle_open globalnav_footer_site_links_morelinks_toggle_inprogress");
l(j)
}}return false
});
function l(a){$("#globalnav_footer_site_links_container").animate({height:a},function(){$("#globalnav_footer_site_links_morelinks_toggle").removeClass("globalnav_footer_site_links_morelinks_toggle_inprogress")
})
}$("#globalnav_header_primary .globalnav_header_primary_link").hover(function(){var a=this;
$(this).addClass("globalnav_header_subnav_ishovered");
setTimeout(function(){if($(a).hasClass("globalnav_header_subnav_ishovered")){showSubNav(a)
}},500)
},function(){$(this).removeClass("globalnav_header_subnav_ishovered");
hideSubNav(this)
});
$("#globalnav_header_utility_travel_tools").click(function(){toggleTravelTools(this);
return false
});
$(document).click(function(){$("#globalnav_header_utility_travel_tools_hover_container").remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
});
if($.browser.msie&&parseInt($.browser.version,10)==6){$(document.body).append('<iframe src="/assets/navigation/blank.html" scrolling="no" width="0" height="0" frameborder="0" id="globalnav_header_hover_backdrop_iframe"></iframe>')
}$(document.body).append("<div id='globalnav_preload_container'></div>");
var n=$("#globalnav_preload_container");
n.addClass("globalnav_preload_container_primary_nav_hover");
n.hide()
});
function toggleTravelTools(l){var n=$(l);
var m=n.parent();
var p=m.find(".globalnav_header_utility_travel_tools_container");
var q=$("#globalnav_header_utility_travel_tools_hover_container");
if(q.size()==0){var r="<div id='globalnav_header_utility_travel_tools_hover_container'>";
r+="<div id='globalnav_header_utility_travel_tools_hover_top_background_container'>&nbsp;</div>";
r+="<div id='globalnav_header_utility_travel_tools_hover_inner_container'>";
r+=p.html();
r+="</div>";
r+="<div id='globalnav_header_utility_travel_tools_hover_close_container'>";
r+="<span id='globalnav_header_utility_travel_tools_hover_close_button'><a href='#'><span class='closeImg'></span><span>Close</span></a></span>";
r+="</div>";
r+="</div>";
$(document.body).append(r);
q=$("#globalnav_header_utility_travel_tools_hover_container");
var o=n.offset();
q.click(function(a){a.stopPropagation()
});
var j=o.top+n.height();
var k=o.left+n.width()-q.width();
q.css({top:j,left:k});
repositionHoverBackdropIframe("visible",j,k,q.width(),q.height());
$("#globalnav_header_utility_travel_tools_hover_close_button").click(function(){closeTravelTools();
return false
})
}else{closeTravelTools()
}return false
}function closeTravelTools(){$("#globalnav_header_utility_travel_tools_hover_container").remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
}function showSubNav(r){var x=$(r);
var t=x;
var o=x.attr("id");
var u=x.parent();
var A=u.find(".globalnav_header_subnav_container");
var q="black";
if(u.hasClass("globalnav_header_primary_product")){q="blue";
t=$("#globalnav_header_primary_link_air")
}var z="globalnav_header_subnav_hover_container_"+q;
var s=$("#"+o+"_hover_container");
if(s.size()==0&&A.size()>0){var p="<div id='"+o+"_hover_container' class='globalnav_header_subnav_hover_container "+z+"'>";
p+="<table border=0 cellspacing=0 cellpadding=0 class='globalnav_header_subnav_hover_container_layout_table'>";
p+="<tr>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_tl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_top'><span class='globalnav_header_subnav_hover_container_layout_table_arrow'></span></td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_tr globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
p+="</tr>";
p+="<tr>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_left'>&nbsp;</td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_center'>"+A.html()+"</td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_right'>&nbsp;</td>";
p+="</tr>";
p+="<tr>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_bl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_bottom'>&nbsp;</td>";
p+="<td class='globalnav_header_subnav_hover_container_layout_table_br globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
p+="</tr>";
p+="</table>";
p+="</div>";
$(document.body).append(p);
var w="#"+o+"_hover_container";
s=$(w);
hyperLinkFilterHookTrigger(w);
if($.browser.msie&&$.browser.version<7){s.find(".globalnav_header_subnav_hover_container_layout_table_corner").addClass("globalnav_header_subnav_hover_container_layout_table_corner_ie6");
s.find(".globalnav_header_subnav_hover_container_layout_table_arrow").addClass("globalnav_header_subnav_hover_container_layout_table_arrow_ie6")
}var y=t.offset();
var v=y.top+t.height()-10;
var B=y.left+5;
if(u.hasClass("globalnav_header_primary_product_vacations")){v=y.top+t.height()-5;
B=y.left+140
}else{if(u.hasClass("globalnav_header_primary_product")){v=y.top+t.height()-5;
B=y.left
}}s.css({top:v,left:B});
repositionHoverBackdropIframe("visible",v+10,B,s.width(),s.height()-20);
s.hover(function(){var a=x;
$(this).addClass("globalnav_header_subnav_ishovered")
},function(){var a=x;
$(this).removeClass("globalnav_header_subnav_ishovered");
setTimeout(function(){checkRemoveSubNav(r)
},10)
})
}}function hideSubNav(b){setTimeout(function(){checkRemoveSubNav(b)
},10)
}function checkRemoveSubNav(e){var d=$(e);
var f=$("#"+d.attr("id")+"_hover_container");
if(!d.hasClass("globalnav_header_subnav_ishovered")&&!f.hasClass("globalnav_header_subnav_ishovered")){f.remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
}}function repositionHoverBackdropIframe(g,i,j,l,h){var k=$("#globalnav_header_hover_backdrop_iframe");
if(k.size()>0){k.css({visibility:g,top:i,left:j,width:l,height:h})
}}var hyperLinkFilterHookTrigger=function(b){if(typeof setHyperLinkFilter=="function"){setHyperLinkFilter(b)
}};