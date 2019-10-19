(function(a){a(function(){function c(g,h){try{if(a.cq.isAuthor()||window.location.hash=="#debug"){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(g);
console.log(h)
}alert(g.name+":\n"+g.message+".\n"+h+".")
}}catch(j){}}try{var d=a.browser.msie?0:250;
function b(g){try{if(window.location.hash.length>0&&a(window.location.hash,g).length>0){window.location=(window.location+"").replace(window.location.hash,"")
}}catch(h){c(h,"Could not remove hash")
}}try{a(".cq-carousel").each(function(){var v=a(this);
var g=+a("var[title='play-delay']",this).text();
if(!g){g=6000
}var k=+a("var[title='transition-time']",this).text();
if(!k){k=1000
}var t=a(".cq-carousel-banners",this);
var o=a(".cq-carousel-banner-switch",this);
var u=o.find("a");
var p=a(".cq-carousel-banner-item",this);
var e=p.outerWidth();
var q=p.filter(":first");
var m=null;
var h=null;
var l=0;
var n=a("a.cq-carousel-control-prev",this);
n.click(function(){if(n.is(".cq-carousel-active")){a(u[(l+u.length-1)%u.length]).click()
}return false
});
var s=a("a.cq-carousel-control-next",this);
s.click(function(){if(s.is(".cq-carousel-active")){a(u[(l+1)%u.length]).click()
}return false
});
if(u.length>1){s.addClass("cq-carousel-active")
}function j(){r();
if(g>0){h=setInterval(function(){a(u[(l+1)%u.length]).click()
},g)
}}function r(){if(h!==null){clearInterval(h);
h=null
}}if(d||a.browser.version>6){q.css("left",0)
}else{q.show()
}u.click(function(){var y=a(this);
var w=p.filter(y.attr("href"));
var x=w.prevAll().length;
var z=(x>l||h!==null)?1:-1;
if(!y.is(".cq-carousel-active")){u.removeClass("cq-carousel-active");
y.addClass("cq-carousel-active");
if(q.is(":animated")){q.stop(true,true);
m.stop(true,true)
}if(d){w.css({left:z*e}).animate({left:0,opacity:1},k);
q.animate({left:-z*e,opacity:0},k)
}else{if(a.browser.version>6){w.css({left:z*e,opacity:1}).animate({left:0},k);
q.animate({left:-z*e},k)
}else{w.fadeIn();
q.fadeOut()
}}m=q;
q=w;
l=x;
if(l>0){n.addClass("cq-carousel-active")
}else{n.removeClass("cq-carousel-active")
}if(l<u.length-1){s.addClass("cq-carousel-active")
}else{s.removeClass("cq-carousel-active")
}}return false
}).each(function(){var w=a(this);
w.attr("title",w.text())
}).filter(":first").addClass("cq-carousel-active");
j();
v.hover(function(){r();
n.fadeIn();
s.fadeIn()
},function(){j();
n.fadeOut();
s.fadeOut()
});
b(this)
})
}catch(f){c(f,"Could not initialize the banners")
}}catch(f){c(f,"Init failed")
}})
})($CQ||$);
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(j,e){var h=this,g=arguments,f=function(){j.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(b,a){a.picturefill=function(c){var d;
if(c===d){c=b("body")
}b("div[data-picture]",c).each(function(){var f=this;
var g=[];
b("div[data-media]",f).each(function(){var j=b(this).attr("data-media");
if(!j||(a.matchMedia&&a.matchMedia(j).matches)){g.push(this)
}});
var e=b("img",f).first();
if(g.length){if(e.size()===0){var h=b(f);
e=b("<img />").attr("alt",h.attr("data-alt")).appendTo(h)
}e.attr("src",g.pop().getAttribute("data-src"))
}else{e.remove()
}})
};
b(function(){a.picturefill()
});
b(a).on("debouncedresize",function(){a.picturefill()
})
}($CQ,this));
function cq5forms_isArray(a){return Object.prototype.toString.call(a)==="[object Array]"
}function cq5forms_showMsg(e,c,d,a){var b=document.forms[e].elements[c];
alert(d);
if(cq5forms_isArray(b)){if(!a){a=0
}b[a].focus()
}else{b.focus()
}}function cq5forms_isEmpty(b){if(b===undefined){return false
}var a=true;
if(cq5forms_isArray(b)){for(i=0;
i<b.length;
i++){if(b[i].type=="radio"||b[i].type=="checkbox"){if(b[i].checked){a=false
}}else{if(b[i].localName=="option"){if(b[i].selected){a=false
}}else{if(b[i].value.length>0){a=false
}}}}}else{if(b.type=="radio"||b.type=="checkbox"){if(b.checked){a=false
}}else{if(b.value.length>0){a=false
}}}return a
}function cq5forms_regcheck(f,d){var b=false;
var c=d.exec(f);
if(c){var a=f.length;
var e=c[0].length;
b=(e==a)
}return b
}function cq5forms_multiResourceChange(a,b,c){if(!c){if(!a){a=window.event
}if(a.keyCode<48&&a.keyCode!=8&&a.keyCode!=46){return
}}try{document.getElementById(b).checked=true
}catch(d){}};