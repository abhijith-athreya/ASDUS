var nike=(function(a,c){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(h){if(this===null){throw new TypeError()
}var i=new Object(this);
var f=i.length>>>0;
if(f===0){return -1
}var j=0;
if(arguments.length>0){j=Number(arguments[1]);
if(j!=j){j=0
}else{if(j!==0&&j!=Infinity&&j!=-Infinity){j=(j>0||-1)*Math.floor(Math.abs(j))
}}}if(j>=f){return -1
}var g=j>=0?j:Math.max(f-Math.abs(j),0);
for(;
g<f;
g++){if(g in i&&i[g]===h){return g
}}return -1
}
}var d=a.cq=a.cq||{};
if(!d.ns){d.ns=function(){var f=arguments,m=c,l=0,k=0,g=null,h=null;
for(l=0;
l<f.length;
l=l+1){g=f[l].split(".");
for(k=0;
k<g.length;
k=k+1){h=g[k];
m[h]=m[h]||{};
m=m[h]
}}return m
}
}if(!d.define||!d.require){var e=function(){this.modules={};
this.reqs={};
this.requires=0
};
e.prototype.add=function(h,f,j){if(typeof f==="string"){f=[f]
}if(!(f instanceof Array)){f=[]
}if(h in this.modules&&"executed" in this.modules[h]){return false
}if(h===undefined){h="require_"+this.requires++
}this.modules[h]={executed:false,value:j,requirements:f};
this.reqs[h]=this.reqs[h]||[];
for(var g=0;
g<f.length;
++g){this.reqs[f[g]]=this.reqs[f[g]]||[];
if(this.reqs[f[g]].indexOf(h)===-1){this.reqs[f[g]].push(h)
}}this.execute(h)
};
e.prototype.getReqs=function(j){var h=[],f=this.modules[j].requirements||[];
if(f.length==0){return h
}for(var g=0;
g<f.length;
++g){if(!(f[g] in this.modules)||this.modules[f[g]].executed!==true){return false
}else{if(f[g] in this.modules){h.push(this.modules[f[g]].value)
}}}return h.length>0?h:false
};
e.prototype.execute=function(h){var j=this.modules[h],f=this.getReqs(h);
if(!f||j.executed===true){return false
}if(typeof j.value==="function"){j.value=j.value.apply(j.value,f)
}else{j.value=undefined
}j.executed=true;
for(var g=0;
g<this.reqs[h].length;
++g){this.execute(this.reqs[h][g])
}};
var b=new e();
d.define=function(){b.add.apply(b,arguments)
};
d.require=function(f,g){b.add(undefined,f,g)
}
}return a
}(nike||{},window));
nike.cq.define("jquery",[],function(){return window.jQuery
});
nike.cq.define("nike.cq.PES.toutToggle",["jquery","nike.cq.PES.Hotspots","nike.cq.UI.HashState","nike.cq.initializer"],function(d,b,f,c){var e=function(m){var i=d(this).find("a").eq(0),n=i.closest(".nike-cq-tout-toggle-container.nike-cq-toggle"),g=n.find(".nike-cq-pes-reference-component"),o="."+i.attr("data-tout-id"),k=n.find(o);
if(k.filter(":hidden").length){var p=n.find(".nike-cq-pes-reference-component:visible").first(),h=p.height(),l=n.find(".nike-cq-tout-toggle-cover"),j=n.find(".nike-cq-toggle-component");
j.find("a").removeClass("selected");
i.addClass("selected");
b.hideHotspots(p.find(".nike-cq-p1-layout-component"));
b.hideHotspots(k.find(".nike-cq-p1-layout-component"));
l.height(h).fadeIn(600,function(){g.hide();
k.show();
d(this).height(k.height());
n.trigger("p1-toggle")
}).fadeOut(600,function(){b.resetHotspots(k.find(".nike-cq-p1-layout-component"))
});
if(i.parent().attr("data-id")){f.updateHash(i.parent().attr("data-id"))
}}m.preventDefault();
return false
};
var a=function(h){d(".nike-cq-toggle-wrapper ul").contents().filter(function(){return this.nodeType===3
}).remove();
var k=h.find(".nike-cq-pes-reference-component"),i=h.find(".nike-cq-toggle-component"),g=k.find(".nike-cq-background-component"),j=i.find(".toggle-label-container");
k.each(function(){b.hideHotspots(d(this).find(".nike-cq-p1-layout-component"))
});
i.delegate("li","click",e);
h.prepend(g.first().clone().addClass("nike-cq-tout-toggle-cover").hide());
j.each(function(l){var o=d(this),n=o.attr("data-id"),m=o.closest("nav");
f.registerHashCallback(n,this,function(){var p=d("[data-id] a")[l];
if(!d(p).hasClass("selected")){p.click();
setTimeout(function(){m.trigger("mouseleave")
},300)
}})
})
};
c.registerComponents({name:"nike-cq-tout-toggle",state:"load",action:a});
return{init:a}
});
nike.cq.define("nike.cq.PES.P2VideoTout",["jquery","nike.cq.UI.VideoPlayingElement"],function(c,b){var a=function(e){new b(e)
},d=function(){if(c(".nike-cq-p2-video-tout-300-container").length){a(".nike-cq-p2-video-tout-300-container")
}};
c(function(){d()
});
return{init:d}
});
nike.cq.define("nike.cq.PES.p1Layout",["jquery","nike.cq.UI.VideoPlayingElement","nike.cq.PES.ProductOptions","nike.cq.PES.Hotspots","nike.cq.initializer"],function(g,h,m,f,i){var j=function(n){n.find("div").contents().filter(function(){return this.nodeType===3
}).remove()
},d=function(n){if(n.length&&g("body").data("cmsMode")!=="EDIT"){n.find(".nike-cq-cta").hide();
n.find(".nike-cq-cta .nike-cq-cta-component").parent().show()
}},c=function(n){if(n.find(".nike-cq-p1-layout-cta-row").length===2){n.addClass("multiple-cta")
}},b=function(n){if(n.find(".video-thumbnail").length>0){h(n)
}},e=function(o){if(o.find(".nike-cq-product-options").length>0){var n=o.find(".nike-cq-product-options").attr("data-auto-rotate");
m.init(n)
}},l=function(n){if(n.find(".nike-cq-hotspots").length){f.init(n)
}},k=function(p){if(g("body").data("cmsMode")!=="EDIT"){var o=p.find(".nike-cq-p1-layout-anchor").clone(true).appendTo(p.find(".nike-cq-p1-layout-background")),q=p.find(".nike-cq-hotspots-component"),n=p.find(".nike-cq-product-options-images");
if(q.length>0){q.prepend(o.clone(true))
}if(n.length>0){n.append(o.clone(true))
}}},a=function(o){var n=o.find(".nike-cq-p1-layout-foreground");
j(n);
d(n);
c(o);
b(n);
e(o);
l(o);
k(o)
};
i.registerComponents({name:"nike-cq-p1-layout",state:"ready",action:a});
return{init:a}
});
nike.cq.define("nike.cq.PES.p1Video",["jquery","nike.cq.initializer"],function(i,r){var h={TABLET_CLASS:"touch",VIDEO_ELEMENTS_SELECTOR:".nike-cq-video-bg",VIDEO_START_SELECTOR:".start-image-background, .nike-cq-video-bg .nike-cq-image",VIDEO_CONTAINER_SELECTOR:".nike-cq-video-bg-component",VIDEO_PRESTART_CLASS:"nike-cq-video-bg-prestart"},k=undefined,e=undefined,d=undefined,l=undefined,g=10000,j=500,a=false,q=false,p=function(s){e=s.find(h.VIDEO_CONTAINER_SELECTOR);
if(e.length>0){e.empty();
d=c()
}if(i("body").data("cmsMode")==="EDIT"){return
}k=s.closest(h.VIDEO_ELEMENTS_SELECTOR);
l=k.find(h.VIDEO_START_SELECTOR);
a=k.length;
q=i("."+h.TABLET_CLASS).length;
if(!a){return
}else{if(q||!f("video/mp4")){b();
return
}}setTimeout(n,g);
setTimeout(function(){try{m();
d.play();
o()
}catch(t){b()
}},2000)
},f=function(s){return d.canPlayType&&d.canPlayType(s).replace(/no/,"")
},n=function(){try{if(d.currentTime==0){b()
}}catch(s){b()
}},o=function(){l.fadeOut()
},b=function(){i(h.VIDEO_CONTAINER_SELECTOR).parents("."+h.VIDEO_PRESTART_CLASS+":first").removeClass(h.VIDEO_PRESTART_CLASS);
k.fadeOut(j)
},c=function(){var s=e.data("height");
var t=e.data("loop")?"loop":"";
var v=e.data("videoUrl");
var u=['<video id="p1-video-background" style="height: '+s+'px" preload="auto" '+t+">",'<source src="'+v+'" type="video/mp4"/>',"</video>"].join("");
return i(u).appendTo(e).get(0)
},m=function(){d.addEventListener("ended",function(){b()
},false);
d.addEventListener("play",function(){o()
},false)
};
r.registerComponents({name:"nike-cq-video-bg",state:"ready",action:p});
return{init:p,video:d}
});
nike.cq.define("nike.cq.PES.p1Inspirations",["jquery","nike.cq.initializer"],function(d,j){var i=function(t){t.preventDefault();
var s=d(this),r=s.closest(".nike-cq-link-set-toggle-component").find("."+s.attr("data-link-toggle-set"));
if(r.filter(":hidden").length){s.closest("ul").find("a").removeClass("selected");
s.addClass("selected");
l(s);
n(r);
s.closest(".nike-cq-link-set-toggle-component").find(".nike-cq-link-set-toggle-set:visible").fadeOut(300,function(){c(r);
r.fadeIn(300)
})
}},n=function(r){r.closest(".nike-cq-link-set-toggle-sets").find("span.arrow").fadeOut(300)
},f=function(s,t){var r=d("body").width(),u=s.attr("data-set-size");
if(r<=960&&u>4){s.closest(".nike-cq-link-set-toggle-sets").find(t).show();
s.css("margin-left",0)
}else{s.css("margin","0 auto")
}},q=function(r){f(r,"span.arrow")
},c=function(r){f(r,"span.arrow.right")
},k=function(r){r.closest(".nike-cq-link-set-toggle-sets").find("span.arrow.right").hide()
},b=function(r){f(r,"span.arrow.left")
},e=function(r){r.closest(".nike-cq-link-set-toggle-sets").find("span.arrow.left").hide()
},a=function(x){x.preventDefault();
var A=d(this),t=A.siblings(".nike-cq-link-set-toggle-set-mask:first").find(".nike-cq-link-set-toggle-set:visible");
if(t.not(":animated").length==1){var z=A.hasClass("right"),r=t.find("li:first").width(),u=t.attr("data-set-size"),s=parseInt(t.css("margin-left")),y=20,w=r+y;
var v=-(w*(u-4));
if(z){if(s!=v){t.animate({"margin-left":(s-w)+"px"});
b(t);
if(s==(v+w)){k(t)
}}}else{if(s!=0){t.animate({"margin-left":(s+w)+"px"});
c(t);
if(s==(v+w)){e(t)
}}}}},h=function(){d(".nike-cq-p1-layout-inspiration-section .nike-cq-link-set-toggle-set:visible").each(function(){c(d(this))
})
},m=function(){l(d(this))
},p=function(){var r=d(this).find("a.selected").eq(0);
l(r)
},g=function(){var r=d(".nike-cq-link-set-toggle-selector").each(function(){var s=d(this),u=parseInt(s.css("left"));
if(u<4){var t=s.siblings("ul").find("li:first-child a").eq(0);
l(t)
}})
},l=function(s){var r=s.position().left+(s.width()/2)+3;
s.closest(".nike-cq-link-set-toggle-nav").find(".nike-cq-link-set-toggle-selector:first").css("left",r)
},o=function(r){g();
h();
r.find(".nike-cq-link-set-toggle-select").delegate("a","click",i);
r.find(".nike-cq-link-set-toggle-sets").delegate("span.arrow","click",a);
d(".nike-cq-tout-toggle-container").bind("p1-toggle",g);
d(window).bind("orientationchange",h)
};
j.registerComponents({name:"nike-cq-p1-layout-inspiration",state:"ready",action:o});
return{init:o}
});
nike.cq.define("nike.cq.PES.Notification",["jquery"],function(a){var b=function(){a(".nike-cq-notification-banner-container").each(function(){var c=a(this);
if(c.parent(".nike-cq-pes-reference")==0){c.css("width","768px")
}})
};
a(function(){b()
});
return{init:b}
});
nike.cq.define("nike.cq.PES.MerchMenu",["jquery"],function(a){var b=function(){a("div.nike-cq-merch-menu-hover").mouseleave(function(){a(this).removeClass("active")
});
var c=function(){a(this).parents("div.nike-cq-merch-menu-hover").addClass("active")
};
if(a("html.touch").length>0){a("div.nike-cq-merch-menu-expand span").click(c)
}else{a("div.nike-cq-merch-menu-expand span").mouseenter(c)
}};
a(function(){if(a("div.nike-cq-merch-menu-component").length){b()
}});
return{init:b}
});
nike.cq.define("nike.cq.PES.LooksGrid",["jquery","nike.cq.initializer"],function(b,a){var c=function(f){var e=f.find(".nike-cq-looks-grid-component"),d=Modernizr.touch,g=f.find(".nike-cq-content-grid-image");
if(!b(".ie8").length){b(window).on("load resize",function(){e.each(function(){var h=1600;
var i=b(this).find(".nike-cq-looks-grid-cell");
var j=!!navigator.userAgent.match(/firefox/i);
if(j){i.find("img").css("height","")
}i.height("auto");
i.each(function(){var k=b(this).height();
if(k<h&&k!==0){h=k
}});
i.height(h);
if(j){i.find("img").css("cssText","height: "+h+"px !important;")
}})
})
}if(d){g.on("click",function(){var h=b(this).find(".nike-cq-looks-grid-image-overlay");
if(!h.hasClass("visible")){f.find(".visible").removeClass("visible");
h.addClass("visible")
}})
}};
a.registerComponents({name:"nike-cq-looks-grid",state:"ready",action:c,noEditMode:true});
return{init:c}
});
nike.cq.define("nike.cq.PES.leftNavigation",["jquery"],function(f){var c=999,h=400,e="nike-cq-nav-closed",j="nike-cq-min-nav",n="nike-cq-min-nav-section",l="nsg-text--near-black",b="nsg-glyph--minus",i="nsg-glyph--plus",d="nsg-glyph--chevron-right",g=function(u){var w=u.find(".nike-cq-nav-title"),y=u.find(".nike-cq-left-navigation-nav-links"),B=u.find(".nike-cq-nav-section-title"),v=u.find(".nike-cq-nav-nav"),z=u.find(".nike-cq-left-navigation-sections-wrapper"),s=u.find(".nike-cq-left-navigation-component-tout a"),r='<span class="'+b+" "+l+'">-</span>',t='<span class="'+d+'">&lt;</span>',q=function(F,G){var E=G?b:i;
F.attr({"class":E}).addClass(l)
};
s.append(t);
w.wrapInner('<span class="nike-cq-nav-title-wrapped"></span>').append(r);
w.wrap('<a href="#" class="nike-cq-nav-title-link"></a>');
B.wrapInner('<span class="nike-cq-nav-section-title-wrapped"></span>').append(r);
B.wrap('<a href="#" class="nike-cq-nav-section-title-link"></a>');
u.find(".nike-cq-nav-section-title-link").bind("click",function(H){H.preventDefault();
var G=f(this),F=G.siblings(".nike-cq-left-navigation-nav-links-wrapper"),E=G.find("."+b+",."+i),I=G.hasClass(e);
q(E,I);
if(I){F.slideDown(h);
G.removeClass(e)
}else{F.slideUp(h);
G.addClass(e)
}});
u.find(".nike-cq-nav-title-link").bind("click",function(G){G.preventDefault();
var E=w.hasClass(j),F=w.find("."+b+",."+i);
q(F,E);
if(E){w.removeClass(j);
v.removeClass(n);
z.slideDown(h)
}else{w.addClass(j);
v.addClass(n);
z.slideUp(h)
}});
var p=function(S,Q){var O="nike-cq-left-nav-section-expanded",K="nike-cq-left-nav-section-extra-links",L='<span class="nsg-glyph--arrow-down"></span>',M='<span class="nsg-glyph--arrow-up"></span>',P=function(T,U){return U.replace("[title text]",T.data("plural"))
},F=function(U,W,T){var X=T?L:M,V=P(U,W)+X;
U.html(V)
};
y.each(function(){var T=f(this),Z=T.find("li");
if(Z.length>c){var Y=P(T,S),X=Z.slice(c),V=T.clone(),U=f("<span/>").attr({"class":"nike-cq-left-nav-additional-content nsg-font-family--platform"}),W=f("<a/>").attr({href:"#","data-plural":T.data("plural")}).text(Y).append(L);
T.css("padding-bottom",0);
V.addClass(K).empty().append(X).insertAfter(T).hide();
U.append(W).insertAfter(V)
}});
u.find(".nike-cq-left-nav-additional-content a").bind("click",function(V){V.preventDefault();
var T=f(this),U=T.parent().siblings("."+K);
if(T.hasClass(O)){F(T,S,true);
U.slideUp(h);
T.removeClass(O)
}else{F(T,Q,false);
U.slideDown(h);
T.addClass(O)
}});
var J=f(".nike-cq-notification-reference-component"),I=J.length,R=60,E=I*R;
var G=f(window).width(),H=1472,N=1009;
if(G<=H){u.find(".nike-cq-nav-section-title-link:not(:first)").click()
}if(G<=N){u.find(".nike-cq-nav-title-link").click()
}u.closest("section").each(function(){var V=f(this),T=V.position()||{top:0,left:0},U=T.top+E;
V.css({top:U}).addClass("nike-cq-visible-nav")
});
if(nike.dispatchEvent&&nike.Event.FACET_NAVIGATION_LOAD_COMPLETE){nike.dispatchEvent(nike.Event.FACET_NAVIGATION_LOAD_COMPLETE,{element:u});
if(nike.dispatchEvent&&nike.Event.FACET_NAVIGATION_LOAD_COMPLETE){nike.dispatchEvent(nike.Event.FACET_NAVIGATION_LOAD_COMPLETE,{element:u})
}}};
var C="[data-more-text]",o=u.find(C).andSelf().filter(C),A=o.data();
if(o.length){var D=A.moreText,x=A.lessText;
p(D,x)
}},m=function(){if(f(".left-bar").length){f(".nike-cq-tesla-xml").addClass("nike-cq-mod-left-nav tesla-mod-left-nav")
}},a=function(){f(".nike-cq-tesla-xml").addClass("nike-cq-mod-left-nav")
},k=function(){m();
f(".nike-cq-left-navigation-tout-component, .nike-cq-left-navigation-component, .nike-cq-left-navigation-page .nike-cq-navigation-component").each(function(){a();
g(f(this))
})
};
f(function(){k()
});
return{init:k,initTeslaLeftNavMod:m}
});
nike.cq.define("nike.cq.PES.FST",["jquery","nike.cq.UI.VideoPlayingElement","nike.cq.initializer","nike.cq.PES.videoBg"],function(f,h,r,c){var n=30;
var g=0;
var j=50;
var e;
var b;
var i=[];
var l=false,k=function(){f(window).scroll(a);
a();
l=true;
var s=f(".nike-cq-fst .nike-cq-labels"),u=function u(){s.find(".nike-cq-labels-label").each(function(A){var C=f(this),x=C.attr("data-label-justification")||"left";
if(x!=="left"){var D=0,B=C.width(),y=f(window).width(),w=Math.round(C.css("left").replace("px",""));
if(x==="center"){var z=Math.round(B/2);
D=w-z
}else{if(x==="right"){D=w-B
}}var v=(D/y)*100;
C.css("left",v+"%")
}})
},t=(function t(){var v=true,y,z=1600,w=1,x=0.7;
return function(){clearTimeout(y);
y=setTimeout(function(){var B=f(this).width(),C=B/z,A;
switch(true){case (C>w):A=true;
C=w;
break;
case (C<x):A=true;
C=x;
break;
default:v=true
}if(v){if(A){v=false
}if(C<=0.75){s.addClass("label-scale-75")
}else{if(C<=0.9){s.removeClass("label-scale-75").addClass("label-scale-90")
}else{s.removeClass("label-scale-75 label-scale-90")
}}s.css({fontSize:(C*100)+"%"})
}},16)
}
}());
if(s.length){t();
if(!Modernizr.csstransforms){u()
}f(window).resize(t)
}},d=function(s){s.find(".nike-cq-fst-with-video").each(function(){var t=new c({parentContainer:".nike-cq-fst",startingImage:".nike-cq-fst-video-bg-start-image",fallbackImage:".nike-cq-fst-background-image",videoContainer:".nike-cq-fst-video-bg-component"},f(this));
i.push(t);
s.find(t.videoElement).bind("canplay",function(){a()
}).bind("videoFinished",function(){p()
}).bind("videoReset",function(){p()
}).bind("videoRewind",function(){p()
}).bind("playVideoUserAction",function(u,v){o(u.target)
}).bind("pauseVideoUserAction",function(u,v){p()
})
});
h(s.find(".nike-cq-fst-component")[0]);
if(!l){k()
}m(s);
f(window).resize(function(){m(s)
})
};
function m(s){s.find(".nike-cq-container .nike-cq-block-component").each(function(u){var v=f(this);
v.css("height","auto");
var t=v.height();
if(t%2!=0){v.css("height",t+(2-t%2)+"px")
}})
}function a(){q();
e=setTimeout(p,j)
}function q(){if(e){clearTimeout(e)
}e=undefined
}function o(u){for(var s=0;
s<i.length;
s++){var t=i[s];
if(f(u).is(f(t.getVideoElement()))){b=s;
t.play()
}else{!t.paused()&&t.pause()
}}}function p(){var t=[],z,x=[];
for(var v=0;
v<i.length;
v++){var w=i[v],y=w.calculateVisibility(),u=w.getLayerIndex();
t.push(y);
x.push(u);
if(y&&y>=n&&(z===undefined||y>t[z]||(y==t[z]&&u>x[z]))){z=v
}else{if(y<=g&&v===b){w.pause();
b=undefined
}}}if(z!==undefined&&(z!==b||i[b].paused())){b!==undefined&&i[b].pause();
var s=i[z];
if(s.controls()){b=undefined
}else{s.play();
b=z
}}}r.registerComponents({name:"nike-cq-full-screen",state:"ready",action:d,noEditMode:true});
return{evaluateAppropriateness:p,startEvaluationDelay:a}
});
nike.cq.define("nike.cq.PES.FST.Blocks",["jquery","nike.cq.initializer"],function(d,c){var a=function(g){if(Modernizr.csstransforms){return
}var i=g.find(".nike-cq-block-component-wrap"),m=parseInt(i.attr("data-row-position"),10),f=parseInt(i.attr("data-column-position"),10),l=[1],j=[1,2,3],k=(d.inArray(m,l)>=0),h=(d.inArray(f,j)>=0),e=function(){var r=d(this).children().eq(0),s=parseInt(d(this).attr("data-row-position"),10),o=parseInt(d(this).attr("data-column-position"),10);
if(r.width()===0){return setTimeout(function(){e.call(i[0])
},50)
}var p,n,q={};
if((d.inArray(s,l)>=0)){n=r.outerHeight();
q.marginTop=-(n/2)
}if((d.inArray(o,j)>=0)){p=r.outerWidth();
q.whiteSpace="normal";
q.marginLeft=-p/2
}r.css(q)
};
if(g.is(":visible")){b(g,e);
e.call(i[0])
}if(h||k){d(window).resize(function(){e.call(i[0])
})
}},b=function(f,g){var e;
e=f.parents(".nike-cq-carousel-eta");
if(e.length&&!e.data("blockInitialized")){e.data("blockInitialized",true).on("etaSlideChangeComplete",function(h){var i=d(this).find(".nike-cq-carousel-slide").children().eq(0);
i.find(".nike-cq-block-component-wrap").each(function(){g.call(this)
})
})
}};
c.registerComponents({name:"nike-cq-full-screen-block",state:"load",action:a});
return{init:a}
});
nike.cq.define("nike.cq.PES.ContentGrid",["jquery","nike.cq.UI.VideoPlayingElement","nike.cq.UI.ModalCarousel","nike.cq.PES.Gestures"],function(h,i,D,d){var c=false,a=function(F){var G=function(I){return(I.offset().top)+(I.height())
};
var H=F.find(".nike-cq-grid-cell"),E=H.first();
H.each(function(){if(G(h(this))>G(E)){E=h(this)
}});
if(H.length>0){F.height(G(E)-F.offset().top)
}},j=function(){h(".nike-cq-content-grid-component").each(function(){a(h(this));
if(h("body").data("cmsMode")==="EDIT"&&h(".nike-cq-grid-cell").length>0){h(this).css({background:"none",border:"none"})
}})
},u=function(){if(!c){var E,F=function(){j()
};
h(window).resize(function(){if(E){clearTimeout(E)
}E=setTimeout(F,100)
});
c=true
}},p=function(E){i(E)
};
var C="nike-cq-content-grid-overlay-image-wide",l="nike-cq-content-grid-overlay-image-tall";
var n=null,r=null,z=null,A={addListener:function(E){},matches:false};
if(window.matchMedia){A=window.matchMedia("(max-width: 1009px)")
}function b(){return n.index(r[0])
}function f(){if(z){return
}var E={backgroundClass:"nike-cq-content-grid-modal-background",foregroundClass:"nike-cq-content-grid-modal-foreground",dialogClass:"nike-cq-content-grid-modal-dialog",arrowClass:"nike-cq-content-grid-arrow",closeClass:"nike-cq-content-grid-modal-close",clickBackgroundToClose:false};
z=D(E);
z.showModal(false);
z.getDialog().addClass(C);
z.getCloseButton().addClass(C)
}function e(P){var L=h(P).find(".nike-cq-content-grid-image-overlay"),K=L.data(),G=L.find("ul.linkList").clone(),N=L.find(".nike-cq-subtitle").clone();
r=h(P);
if(!K){return
}var Q;
if(N.length>0){Q=N
}else{var I=L.find("h2"),H=L.find("h3");
Q=h('<h2 class="grid-overlay-titles nsg-font-family--marketing"/>');
Q.append(h('<span class="grid-overlay-title1" />').html(I.html()));
Q.append(h('<span class="grid-overlay-title2" />').html(H.html()))
}var O=z.getDialog(),E=z.getCloseButton();
var J=h("<img />",{src:K.src,"data-nike-campaign":K.nikeCampaign,"data-nike-category":K.nikeCategory});
O.empty();
var R=h('<div class="nike-cq-content-grid-overlay-image" />');
R.append(J);
var M=h('<div class="nike-cq-content-grid-overlay-right" />');
M.append(Q);
M.append(G);
var F=h('<div class="nike-cq-content-grid-overlay-dialog-inner" />');
F.append(R);
F.append(M);
O.append(F);
z.showModal(true);
h("<img/>").load(function(){if(this.width>=this.height){O.removeClass(l).addClass(C);
E.removeClass(l).addClass(C)
}else{O.removeClass(C).addClass(l);
E.removeClass(C).addClass(l)
}}).attr("src",J.attr("src"));
if(A.matches){t()
}}function q(){z.getLeftArrow().click(function(G){G.preventDefault();
var E=b(),F=E-1;
F=F<0?n.length-1:F;
e(n[F])
});
z.getRightArrow().click(function(F){F.preventDefault();
var E=b(),G=E+1;
G=G>=n.length?0:G;
e(n[G])
})
}function o(E){n=h(E).parents(".nike-cq-content-grid-component").find(".nike-cq-content-grid-image-cell").has(".nike-cq-content-grid-image-overlay")
}function y(){var H=z.getDialog();
var K=H.find(".nike-cq-content-grid-overlay-right");
var J=K.find("li");
var I=H.hasClass(l)?430:230;
var G=J.length-2;
var E=K.height();
var F=[];
while(G>=0&&E>I){E-=h(J[G]).height();
F.push(J[G--])
}F=h(F);
F.slideUp();
F.queue(function(){var L=J.filter(":visible");
if(L.length==1){L.css("border-top","1px solid #ccc")
}h(this).dequeue()
})
}function x(){var G=z.getDialog();
var J=G.find(".nike-cq-content-grid-overlay-right");
var I=J.find("li");
if(I.length==1){I.show();
return
}var H=G.hasClass(l)?430:230;
var E=[];
E.push(I[I.length-1]);
h(I[I.length-1]).show();
if(J.height()<H){var F=0;
while(F<=I.length-1){h(I[F]).show();
if(J.height()>H){break
}E.push(I[F]);
F++
}}w();
E=h(E);
if(E.length==1){E.css("border-top","1px solid #ccc")
}E.slideDown()
}function B(){var E=z.getDialog();
E.find("li").attr("style","")
}function w(){var E=z.getDialog();
E.find("li").hide()
}function t(){w();
setTimeout(x,700)
}function g(E){if(E.matches){t()
}else{B()
}}function m(){if(window.matchMedia){A.addListener(g)
}}function k(E){h(E).find(".visible-overlay").removeClass("visible-overlay")
}function s(){if(h("body").data("cmsMode")!=="EDIT"){f();
q();
m();
d.register({$element:h(".modal-container"),nextButton:".nike-cq-content-grid-arrow.nike-cq-modal-right",previousButton:".nike-cq-content-grid-arrow.nike-cq-modal-left"});
h(".nike-cq-content-grid-component").each(function(){var E=h(this);
if(h("html.touch").length==0){E.find(".nike-cq-content-grid-image-cell").has(".nike-cq-content-grid-image-overlay").bind("click",function(F){F.preventDefault();
o(this);
e(this)
})
}else{E.find(".nike-cq-content-grid-image-hover-overlay").bind("click",function(H){var F=h(this);
if(F.hasClass("visible-overlay")){var G=F.parents(".nike-cq-content-grid-image-cell");
if(G.find(".nike-cq-content-grid-image-overlay").length>0){H.preventDefault();
o(G);
e(G)
}}else{H.preventDefault();
k(E);
F.addClass("visible-overlay")
}})
}})
}}var v=function(){j();
u();
s();
var E=".nike-cq-content-grid-video-cell";
if(h(E).length>0){p(E)
}};
h(v);
return{init:v}
});
nike.cq.define("nike.cq.honey.Framework",["jquery","nike.cq.initializer","nike.cq.honey.Carousels"],function(e,c,d){var a=function(f){d.createCarousel(f)
},b=function(){return e("body").data("template-type")==="carousel"
};
c.registerComponents({name:"nike-cq-carousel",state:"ready",action:function(f){a(f)
},noEditMode:b()})
});
nike.cq.define("nike.cq.honey.FlexSlider",["jquery"],function(c){var b={selector:".nike-cq-carousel-slide-collection > .nike-cq-carousel-slide",namespace:"nike-cq-carousel-"};
function a(e,d){c(e).flexslider(c.extend({},b,d))
}return a
});
nike.cq.define("nike.cq.honey.Slick",["jquery"],function(a){(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)
}else{if(typeof exports!=="undefined"){module.exports=e(require("jquery"))
}else{e(jQuery)
}}}(function(e){var f=window.Slick||{};
f=(function(){var g=0;
function h(k,m){var j=this,l,i;
j.defaults={accessibility:true,adaptiveHeight:false,appendArrows:e(k),appendDots:e(k),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerModeResponsive:false,targetSlideWidth:200,centerPadding:"50px",cssEase:"ease",customPaging:function(o,n){return'<button type="button" data-role="none">'+(n+1)+"</button>"
},dots:false,dotsClass:"slick-dots",dotsActiveClass:"slick-active",draggable:true,easing:"linear",fade:false,focusOnSelect:false,infinite:true,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInteractionOccurred:null,onInit:null,onReInit:null,pauseOnHover:true,pauseOnDotsHover:false,responsive:null,rtl:false,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,variableWidth:false,vertical:false,waitForAnimate:true};
j.initials={animating:false,dragging:false,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false};
e.extend(j,j.initials);
j.activeBreakpoint=null;
j.animType=null;
j.animProp=null;
j.breakpoints=[];
j.breakpointSettings=[];
j.cssTransitions=false;
j.paused=false;
j.positionProp=null;
j.$slider=e(k);
j.$slidesCache=null;
j.transformType=null;
j.transitionType=null;
j.windowWidth=0;
j.windowTimer=null;
j.options=e.extend({},j.defaults,m);
j.originalSettings=j.options;
l=j.options.responsive||null;
if(l&&l.length>-1){for(i in l){if(l.hasOwnProperty(i)){j.breakpoints.push(l[i].breakpoint);
j.breakpointSettings[l[i].breakpoint]=l[i].settings
}}j.breakpoints.sort(function(o,n){return n-o
})
}j.autoPlay=e.proxy(j.autoPlay,j);
j.autoPlayClear=e.proxy(j.autoPlayClear,j);
j.changeSlide=e.proxy(j.changeSlide,j);
j.selectHandler=e.proxy(j.selectHandler,j);
j.setPosition=e.proxy(j.setPosition,j);
j.swipeHandler=e.proxy(j.swipeHandler,j);
j.dragHandler=e.proxy(j.dragHandler,j);
j.keyHandler=e.proxy(j.keyHandler,j);
j.autoPlayIterator=e.proxy(j.autoPlayIterator,j);
j.instanceUid=g++;
j.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/
}return h
}());
f.prototype.addSlide=function(g,i,j){var h=this;
if(typeof(i)==="boolean"){j=i;
i=null
}else{if(i<0||(i>=h.slideCount)){return false
}}h.unload();
if(typeof(i)==="number"){if(i===0&&h.$slides.length===0){e(g).appendTo(h.$slideTrack)
}else{if(j){e(g).insertBefore(h.$slides.eq(i))
}else{e(g).insertAfter(h.$slides.eq(i))
}}}else{if(j===true){e(g).prependTo(h.$slideTrack)
}else{e(g).appendTo(h.$slideTrack)
}}h.$slides=h.$slideTrack.children(this.options.slide);
h.$slideTrack.children(this.options.slide).detach();
h.$slideTrack.append(h.$slides);
h.$slides.each(function(k,l){e(l).attr("index",k)
});
h.$slidesCache=h.$slides;
h.reinit()
};
f.prototype.animateSlide=function(k,j){var i={},h=this;
if(h.options.slidesToShow===1&&h.options.adaptiveHeight===true&&h.options.vertical===false){var g=h.$slides.eq(h.currentSlide).outerHeight(true);
h.$list.animate({height:g},h.options.speed)
}if(h.options.rtl===true&&h.options.vertical===false){k=-k
}if(h.transformsEnabled===false){if(h.options.vertical===false){h.$slideTrack.animate({left:k},h.options.speed,h.options.easing,j)
}else{h.$slideTrack.animate({top:k},h.options.speed,h.options.easing,j)
}}else{if(h.cssTransitions===false){e({animStart:h.currentLeft}).animate({animStart:k},{duration:h.options.speed,easing:h.options.easing,step:function(l){if(h.options.vertical===false){i[h.animType]="translate("+l+"px, 0px)";
h.$slideTrack.css(i)
}else{i[h.animType]="translate(0px,"+l+"px)";
h.$slideTrack.css(i)
}},complete:function(){if(j){j.call()
}}})
}else{h.applyTransition();
if(h.options.vertical===false){i[h.animType]="translate3d("+k+"px, 0px, 0px)"
}else{i[h.animType]="translate3d(0px,"+k+"px, 0px)"
}h.$slideTrack.css(i);
if(j){setTimeout(function(){h.disableTransition();
j.call()
},h.options.speed)
}}}};
f.prototype.asNavFor=function(i){var h=this,g=h.options.asNavFor!=null?e(h.options.asNavFor).getSlick():null;
if(g!=null){g.slideHandler(i,true)
}};
f.prototype.applyTransition=function(g){var h=this,i={};
if(h.options.fade===false){i[h.transitionType]=h.transformType+" "+h.options.speed+"ms "+h.options.cssEase
}else{i[h.transitionType]="opacity "+h.options.speed+"ms "+h.options.cssEase
}if(h.options.fade===false){h.$slideTrack.css(i)
}else{h.$slides.eq(g).css(i)
}};
f.prototype.autoPlay=function(){var g=this;
if(g.autoPlayTimer){clearInterval(g.autoPlayTimer)
}if(g.options.infinite!==true&&g.slideCount>g.options.slidesToShow&&(g.currentSlide>=g.slideCount-g.options.slidesToShow)){g.options.autoplay=false;
return false
}if(g.slideCount>g.options.slidesToShow&&g.paused!==true){g.autoPlayTimer=setInterval(g.autoPlayIterator,g.options.autoplaySpeed)
}};
f.prototype.autoPlayClear=function(){var g=this;
if(g.autoPlayTimer){clearInterval(g.autoPlayTimer)
}};
f.prototype.autoPlayIterator=function(){var g=this;
if(g.options.infinite===false){if(g.direction===1){if((g.currentSlide+1)===g.slideCount-1){g.direction=0
}g.slideHandler(g.currentSlide+g.options.slidesToScroll,false,true)
}else{if((g.currentSlide-1===0)){g.direction=1
}g.slideHandler(g.currentSlide-g.options.slidesToScroll,false,true)
}}else{g.slideHandler(g.currentSlide+g.options.slidesToScroll,false,true)
}};
f.prototype.buildArrows=function(){var g=this;
if(g.options.arrows===true&&g.slideCount>g.options.slidesToShow){g.$prevArrow=e(g.options.prevArrow);
g.$nextArrow=e(g.options.nextArrow);
if(g.htmlExpr.test(g.options.prevArrow)){g.$prevArrow.appendTo(g.options.appendArrows)
}if(g.htmlExpr.test(g.options.nextArrow)){g.$nextArrow.appendTo(g.options.appendArrows)
}if(g.options.infinite!==true){g.$prevArrow.addClass("slick-disabled")
}}};
f.prototype.buildDots=function(){var h=this,j,g;
if(h.options.dots===true&&h.slideCount>h.options.slidesToShow){g='<ul class="'+h.options.dotsClass+'">';
for(j=0;
j<=h.getDotCount();
j+=1){g+="<li>"+h.options.customPaging.call(this,h,j)+"</li>"
}g+="</ul>";
h.$dots=e(g).appendTo(h.options.appendDots);
h.$dots.find("li").first().addClass(h.options.dotsActiveClass)
}};
f.prototype.buildOut=function(){var g=this;
g.$slides=g.$slider.children(g.options.slide+":not(.slick-cloned)").addClass("slick-slide");
g.slideCount=g.$slides.length;
g.$slides.each(function(h,i){e(i).attr("index",h)
});
g.$slidesCache=g.$slides;
g.$slider.addClass("slick-slider");
g.$slideTrack=(g.slideCount===0)?e('<div class="slick-track"/>').appendTo(g.$slider):g.$slides.wrapAll('<div class="slick-track"/>').parent();
g.$list=g.$slideTrack.wrap('<div class="slick-list"/>').parent();
g.$slideTrack.css("opacity",0);
if(g.options.centerMode===true){g.options.slidesToScroll=1;
if(g.options.slidesToShow%2===0){g.options.slidesToShow=3
}}e("img[data-lazy]",g.$slider).not("[src]").addClass("slick-loading");
if(g.options.slidesToShow&&g.options.slidesToShow>1){g.currentSlide=0
}g.setupInfinite();
g.buildArrows();
g.buildDots();
g.updateDots();
if(g.options.accessibility===true){g.$list.prop("tabIndex",0)
}g.setSlideClasses(typeof this.currentSlide==="number"?this.currentSlide:0);
if(g.options.draggable===true){g.$list.addClass("draggable")
}};
f.prototype.checkResponsive=function(){var h=this,g,i;
if(h.originalSettings.responsive&&h.originalSettings.responsive.length>-1&&h.originalSettings.responsive!==null){i=null;
for(g in h.breakpoints){if(h.breakpoints.hasOwnProperty(g)){if(e(window).width()<h.breakpoints[g]){i=h.breakpoints[g]
}}}if(i!==null){if(h.activeBreakpoint!==null){if(i!==h.activeBreakpoint){h.activeBreakpoint=i;
h.options=e.extend({},h.options,h.breakpointSettings[i]);
h.refresh()
}}else{h.activeBreakpoint=i;
h.options=e.extend({},h.options,h.breakpointSettings[i]);
h.refresh()
}}else{if(h.activeBreakpoint!==null){h.activeBreakpoint=null;
h.options=e.extend({},h.options,h.originalSettings);
h.refresh()
}}}};
f.prototype.changeSlide=function(k){var i=this,g=e(k.target),m,j,l;
g.is("a")&&k.preventDefault();
l=(i.slideCount%i.options.slidesToScroll!==0);
m=l?0:(i.slideCount-i.currentSlide)%i.options.slidesToScroll;
switch(k.data.message){case"previous":j=m===0?i.options.slidesToScroll:i.options.slidesToShow-m;
if(i.slideCount>i.options.slidesToShow){i.slideHandler(i.currentSlide-j)
}break;
case"next":j=m===0?i.options.slidesToScroll:m;
if(i.slideCount>i.options.slidesToShow){i.slideHandler(i.currentSlide+j)
}break;
case"index":var h=k.data.index===0?0:k.data.index||e(k.target).parent().index()*i.options.slidesToScroll;
i.slideHandler(h);
default:return false
}};
f.prototype.destroy=function(){var g=this;
g.autoPlayClear();
g.touchObject={};
e(".slick-cloned",g.$slider).remove();
if(g.$dots){g.$dots.remove()
}if(g.$prevArrow){g.$prevArrow.remove();
g.$nextArrow.remove()
}if(g.$slides.parent().hasClass("slick-track")){g.$slides.unwrap().unwrap()
}g.$slides.removeClass("slick-slide slick-active slick-visible").css("width","");
g.$slider.removeClass("slick-slider");
g.$slider.removeClass("slick-initialized");
g.$list.off(".slick");
e(window).off(".slick-"+g.instanceUid);
e(document).off(".slick-"+g.instanceUid)
};
f.prototype.disableTransition=function(g){var h=this,i={};
i[h.transitionType]="";
if(h.options.fade===false){h.$slideTrack.css(i)
}else{h.$slides.eq(g).css(i)
}};
f.prototype.fadeSlide=function(h,i){var g=this;
if(g.cssTransitions===false){g.$slides.eq(h).css({zIndex:1000});
g.$slides.eq(h).animate({opacity:1},g.options.speed,g.options.easing,i)
}else{g.applyTransition(h);
g.$slides.eq(h).css({opacity:1,zIndex:1000});
if(i){setTimeout(function(){g.disableTransition(h);
i.call()
},g.options.speed)
}}};
f.prototype.filterSlides=function(h){var g=this;
if(h!==null){g.unload();
g.$slideTrack.children(this.options.slide).detach();
g.$slidesCache.filter(h).appendTo(g.$slideTrack);
g.reinit()
}};
f.prototype.getCurrent=function(){var g=this;
return g.currentSlide
};
f.prototype.getDotCount=function(){var g=this,j=0,i=0,k=0,h;
h=g.options.infinite===true?g.slideCount+g.options.slidesToShow-g.options.slidesToScroll:g.slideCount;
while(j<h){k++;
i+=g.options.slidesToScroll;
j=i+g.options.slidesToShow
}return k
};
f.prototype.getLeft=function(j){var h=this,m,i,g=0,l,k;
h.slideOffset=0;
i=h.$slides.first().outerHeight();
if(h.options.infinite===true){if(h.slideCount>h.options.slidesToShow){h.slideOffset=(h.slideWidth*h.options.slidesToShow)*-1;
g=(i*h.options.slidesToShow)*-1
}if(h.slideCount%h.options.slidesToScroll!==0){if(j+h.options.slidesToScroll>h.slideCount&&h.slideCount>h.options.slidesToShow){h.slideOffset=((h.slideCount%h.options.slidesToShow)*h.slideWidth)*-1;
g=((h.slideCount%h.options.slidesToShow)*i)*-1
}}}else{if(h.slideCount%h.options.slidesToShow!==0){if(j+h.options.slidesToScroll>h.slideCount&&h.slideCount>h.options.slidesToShow){h.slideOffset=(h.options.slidesToShow*h.slideWidth)-((h.slideCount%h.options.slidesToShow)*h.slideWidth);
g=((h.slideCount%h.options.slidesToShow)*i)
}}}if(h.slideCount<=h.options.slidesToShow){h.slideOffset=0;
g=0
}if(h.options.centerMode===true&&h.options.infinite===true){h.slideOffset+=h.slideWidth*Math.floor(h.options.slidesToShow/2)-h.slideWidth
}else{if(h.options.centerMode===true){h.slideOffset+=h.slideWidth*Math.floor(h.options.slidesToShow/2)
}}if(h.options.vertical===false){m=((j*h.slideWidth)*-1)+h.slideOffset
}else{m=((j*i)*-1)+g
}if(h.options.variableWidth===true){if(h.slideCount<=h.options.slidesToShow||h.options.infinite===false){k=h.$slideTrack.children(".slick-slide").eq(j)
}else{k=h.$slideTrack.children(".slick-slide").eq(j+h.options.slidesToShow)
}m=k[0]?k[0].offsetLeft*-1:0;
if(h.options.centerMode===true){if(h.options.infinite===false){k=h.$slideTrack.children(".slick-slide").eq(j)
}else{k=h.$slideTrack.children(".slick-slide").eq(j+h.options.slidesToShow+1)
}m=k[0]?k[0].offsetLeft*-1:0;
m+=(h.$list.width()-k.outerWidth())/2
}}return m
};
f.prototype.init=function(){var g=this;
if(!e(g.$slider).hasClass("slick-initialized")){e(g.$slider).addClass("slick-initialized");
g.buildOut();
g.setProps();
g.startLoad();
g.loadSlider();
g.initializeEvents();
g.checkResponsive()
}g.$slider.click(function(h){g.interactionOccurred()
});
if(g.options.onInit!==null){g.options.onInit.call(this,g)
}};
f.prototype.initArrowEvents=function(){var g=this;
if(g.options.arrows===true&&g.slideCount>g.options.slidesToShow){g.$prevArrow.on("click.slick",{message:"previous"},g.changeSlide);
g.$nextArrow.on("click.slick",{message:"next"},g.changeSlide)
}};
f.prototype.initDotEvents=function(){var g=this;
if(g.options.dots===true&&g.slideCount>g.options.slidesToShow){e("li",g.$dots).on("click.slick",{message:"index"},function(h){g.interactionOccurred();
g.changeSlide(h)
})
}if(g.options.dots===true&&g.options.pauseOnDotsHover===true&&g.options.autoplay===true){e("li",g.$dots).on("mouseenter.slick",g.autoPlayClear).on("mouseleave.slick",g.autoPlay)
}};
f.prototype.initializeEvents=function(){var g=this;
g.initArrowEvents();
g.initDotEvents();
g.$list.on("touchstart.slick mousedown.slick",{action:"start"},g.swipeHandler);
g.$list.on("touchmove.slick mousemove.slick",{action:"move"},g.swipeHandler);
g.$list.on("touchend.slick mouseup.slick",{action:"end"},g.swipeHandler);
g.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},g.swipeHandler);
if(g.options.pauseOnHover===true&&g.options.autoplay===true){g.$list.on("mouseenter.slick",g.autoPlayClear);
g.$list.on("mouseleave.slick",g.autoPlay)
}if(g.options.accessibility===true){g.$list.on("keydown.slick",g.keyHandler)
}if(g.options.focusOnSelect===true){e(g.options.slide,g.$slideTrack).on("click.slick",g.selectHandler)
}e(window).on("orientationchange.slick.slick-"+g.instanceUid,function(){g.checkResponsive();
g.setPosition()
});
e(window).on("resize.slick.slick-"+g.instanceUid,function(){if(e(window).width()!==g.windowWidth){clearTimeout(g.windowDelay);
g.windowDelay=window.setTimeout(function(){g.windowWidth=e(window).width();
g.checkResponsive();
g.setPosition()
},50)
}});
e(window).on("load.slick.slick-"+g.instanceUid,g.setPosition);
e(document).on("ready.slick.slick-"+g.instanceUid,g.setPosition)
};
f.prototype.initUI=function(){var g=this;
if(g.options.arrows===true&&g.slideCount>g.options.slidesToShow){g.$prevArrow.show();
g.$nextArrow.show()
}if(g.options.dots===true&&g.slideCount>g.options.slidesToShow){g.$dots.show()
}if(g.options.autoplay===true){g.autoPlay()
}};
f.prototype.keyHandler=function(h){var g=this;
if(h.keyCode===37){g.changeSlide({data:{message:"previous"}})
}else{if(h.keyCode===39){g.changeSlide({data:{message:"next"}})
}}};
f.prototype.lazyLoad=function(){var i=this,g,l,k,j;
function h(m){e("img[data-lazy]",m).each(function(){var n=e(this),o=e(this).attr("data-lazy");
n.load(function(){n.animate({opacity:1},200)
}).css({opacity:0}).attr("src",o).removeAttr("data-lazy").removeClass("slick-loading")
})
}if(i.options.centerMode===true){if(i.options.infinite===true){k=i.currentSlide+(i.options.slidesToShow/2+1);
j=k+i.options.slidesToShow+2
}else{k=Math.max(0,i.currentSlide-(i.options.slidesToShow/2+1));
j=2+(i.options.slidesToShow/2+1)+i.currentSlide
}}else{k=i.options.infinite?i.options.slidesToShow+i.currentSlide:i.currentSlide;
j=k+i.options.slidesToShow;
if(i.options.fade===true){if(k>0){k--
}if(j<=i.slideCount){j++
}}}g=i.$slider.find(".slick-slide").slice(k,j);
h(g);
if(i.slideCount<=i.options.slidesToShow){l=i.$slider.find(".slick-slide");
h(l)
}else{if(i.currentSlide>=i.slideCount-i.options.slidesToShow){l=i.$slider.find(".slick-cloned").slice(0,i.options.slidesToShow);
h(l)
}else{if(i.currentSlide===0){l=i.$slider.find(".slick-cloned").slice(i.options.slidesToShow*-1);
h(l)
}}}};
f.prototype.loadSlider=function(){var g=this;
g.setPosition();
g.$slideTrack.css({opacity:1});
g.$slider.removeClass("slick-loading");
g.initUI();
if(g.options.lazyLoad==="progressive"){g.progressiveLazyLoad()
}};
f.prototype.postSlide=function(h,i){var g=this;
if(g.options.onAfterChange!==null){g.options.onAfterChange.call(this,g,h,i)
}g.animating=false;
g.setPosition();
g.swipeLeft=null;
if(g.options.autoplay===true&&g.paused===false){g.autoPlay()
}};
f.prototype.progressiveLazyLoad=function(){var h=this,g,i;
g=e("img[data-lazy]").length;
if(g>0){i=e("img[data-lazy]",h.$slider).first();
i.attr("src",i.attr("data-lazy")).removeClass("slick-loading").load(function(){i.removeAttr("data-lazy");
h.progressiveLazyLoad()
}).error(function(){i.removeAttr("data-lazy");
h.progressiveLazyLoad()
})
}};
f.prototype.refresh=function(){var g=this,h=g.currentSlide;
g.destroy();
e.extend(g,g.initials);
g.currentSlide=h;
g.init()
};
f.prototype.reinit=function(){var g=this;
g.$slides=g.$slideTrack.children(g.options.slide).addClass("slick-slide");
g.slideCount=g.$slides.length;
if(g.currentSlide>=g.slideCount&&g.currentSlide!==0){g.currentSlide=g.currentSlide-g.options.slidesToScroll
}if(g.slideCount<=g.options.slidesToShow){g.currentSlide=0
}g.setProps();
g.setupInfinite();
g.buildArrows();
g.updateArrows();
g.initArrowEvents();
g.buildDots();
g.updateDots();
g.initDotEvents();
if(g.options.focusOnSelect===true){e(g.options.slide,g.$slideTrack).on("click.slick",g.selectHandler)
}g.setSlideClasses(0);
g.setPosition();
if(g.options.onReInit!==null){g.options.onReInit.call(this,g)
}};
f.prototype.removeSlide=function(h,i){var g=this;
if(typeof(h)==="boolean"){i=h;
h=i===true?0:g.slideCount-1
}else{h=i===true?--h:h
}if(g.slideCount<1||h<0||h>g.slideCount-1){return false
}g.unload();
g.$slideTrack.children(this.options.slide).eq(h).remove();
g.$slides=g.$slideTrack.children(this.options.slide);
g.$slideTrack.children(this.options.slide).detach();
g.$slideTrack.append(g.$slides);
g.$slidesCache=g.$slides;
g.reinit()
};
f.prototype.setCSS=function(h){var i=this,j={},g,k;
if(i.options.rtl===true){h=-h
}g=i.positionProp=="left"?h+"px":"0px";
k=i.positionProp=="top"?h+"px":"0px";
j[i.positionProp]=h;
if(i.transformsEnabled===false){i.$slideTrack.css(j)
}else{j={};
if(i.cssTransitions===false){j[i.animType]="translate("+g+", "+k+")";
i.$slideTrack.css(j)
}else{j[i.animType]="translate3d("+g+", "+k+", 0px)";
i.$slideTrack.css(j)
}}};
f.prototype.setDimensions=function(){var g=this;
if(g.options.vertical===false){if(g.options.centerMode===true){var h=g.options.centerPadding;
if(g.options.centerModeResponsive){h=(g.$slider.width()-g.options.targetSlideWidth)/2+"px"
}g.$list.css({padding:("0px "+h)})
}}else{g.$list.height(g.$slides.first().outerHeight(true)*g.options.slidesToShow);
if(g.options.centerMode===true){g.$list.css({padding:(g.options.centerPadding+" 0px")})
}}g.listWidth=g.$list.width();
g.listHeight=g.$list.height();
if(g.options.vertical===false&&g.options.variableWidth===false){g.slideWidth=Math.ceil(g.listWidth/g.options.slidesToShow);
g.$slideTrack.width(Math.ceil((g.slideWidth*g.$slideTrack.children(".slick-slide").length)))
}else{if(g.options.variableWidth===true){g.slideWidth=0;
g.$slideTrack.children(".slick-slide").each(function(){g.slideWidth+=Math.ceil(e(this).outerWidth(true))
});
g.$slideTrack.width(Math.ceil(g.slideWidth)+1)
}else{g.slideWidth=Math.ceil(g.listWidth);
g.$slideTrack.height(Math.ceil((g.$slides.first().outerHeight(true)*g.$slideTrack.children(".slick-slide").length)))
}}var i=g.$slides.first().outerWidth(true)-g.$slides.first().width();
if(g.options.variableWidth===false){g.$slideTrack.children(".slick-slide").width(g.slideWidth-i)
}};
f.prototype.setFade=function(){var g=this,h;
g.$slides.each(function(i,j){h=(g.slideWidth*i)*-1;
e(j).css({position:"relative",left:h,top:0,zIndex:800,opacity:0})
});
g.$slides.eq(g.currentSlide).css({zIndex:900,opacity:1})
};
f.prototype.setHeight=function(){var h=this;
if(h.options.slidesToShow===1&&h.options.adaptiveHeight===true&&h.options.vertical===false){var g=h.$slides.eq(h.currentSlide).outerHeight(true);
h.$list.css("height",g)
}};
f.prototype.setPosition=function(){var g=this;
g.setDimensions();
g.setHeight();
if(g.options.fade===false){g.setCSS(g.getLeft(g.currentSlide))
}else{g.setFade()
}};
f.prototype.setProps=function(){var h=this,g=document.body.style;
h.positionProp=h.options.vertical===true?"top":"left";
if(h.positionProp==="top"){h.$slider.addClass("slick-vertical")
}else{h.$slider.removeClass("slick-vertical")
}if(g.WebkitTransition!==undefined||g.MozTransition!==undefined||g.msTransition!==undefined){if(h.options.useCSS===true){h.cssTransitions=true
}}if(g.OTransform!==undefined){h.animType="OTransform";
h.transformType="-o-transform";
h.transitionType="OTransition";
if(g.perspectiveProperty===undefined&&g.webkitPerspective===undefined){h.animType=false
}}if(g.MozTransform!==undefined){h.animType="MozTransform";
h.transformType="-moz-transform";
h.transitionType="MozTransition";
if(g.perspectiveProperty===undefined&&g.MozPerspective===undefined){h.animType=false
}}if(g.webkitTransform!==undefined){h.animType="webkitTransform";
h.transformType="-webkit-transform";
h.transitionType="webkitTransition";
if(g.perspectiveProperty===undefined&&g.webkitPerspective===undefined){h.animType=false
}}if(g.msTransform!==undefined){h.animType="msTransform";
h.transformType="-ms-transform";
h.transitionType="msTransition";
if(g.msTransform===undefined){h.animType=false
}}if(g.transform!==undefined&&h.animType!==false){h.animType="transform";
h.transformType="transform";
h.transitionType="transition"
}h.transformsEnabled=(h.animType!==null&&h.animType!==false)
};
f.prototype.setSlideClasses=function(j){var i=this,g,h,l,k;
i.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
h=i.$slider.find(".slick-slide");
if(i.options.centerMode===true){g=Math.floor(i.options.slidesToShow/2);
if(i.options.infinite===true){if(j>=g&&j<=(i.slideCount-1)-g){i.$slides.slice(j-g,j+g+1).addClass("slick-active")
}else{l=i.options.slidesToShow+j;
h.slice(l-g+1,l+g+2).addClass("slick-active")
}if(j===0){h.eq(h.length-1-i.options.slidesToShow).addClass("slick-center")
}else{if(j===i.slideCount-1){h.eq(i.options.slidesToShow).addClass("slick-center")
}}}i.$slides.eq(j).addClass("slick-center")
}else{if(j>=0&&j<=(i.slideCount-i.options.slidesToShow)){i.$slides.slice(j,j+i.options.slidesToShow).addClass("slick-active")
}else{if(h.length<=i.options.slidesToShow){h.addClass("slick-active")
}else{k=i.slideCount%i.options.slidesToShow;
l=i.options.infinite===true?i.options.slidesToShow+j:j;
if(i.options.slidesToShow==i.options.slidesToScroll&&(i.slideCount-j)<i.options.slidesToShow){h.slice(l-(i.options.slidesToShow-k),l+k).addClass("slick-active")
}else{h.slice(l,l+i.options.slidesToShow).addClass("slick-active")
}}}}if(i.options.lazyLoad==="ondemand"){i.lazyLoad()
}};
f.prototype.setupInfinite=function(){var g=this,h,k,j;
if(g.options.fade===true||g.options.vertical===true){g.options.centerMode=false
}if(g.options.infinite===true&&g.options.fade===false){k=null;
if(g.slideCount>g.options.slidesToShow){if(g.options.centerMode===true){j=g.options.slidesToShow+1
}else{j=g.options.slidesToShow
}for(h=g.slideCount;
h>(g.slideCount-j);
h-=1){k=h-1;
e(g.$slides[k]).clone(true).attr("id","").attr("index",k-g.slideCount).prependTo(g.$slideTrack).addClass("slick-cloned")
}for(h=0;
h<j;
h+=1){k=h;
e(g.$slides[k]).clone(true).attr("id","").attr("index",k+g.slideCount).appendTo(g.$slideTrack).addClass("slick-cloned")
}g.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")
})
}}};
f.prototype.selectHandler=function(i){var h=this;
var g=parseInt(e(i.target).parents(".slick-slide").attr("index"));
if(!g){g=0
}if(h.slideCount<=h.options.slidesToShow){return
}h.slideHandler(g)
};
f.prototype.slideHandler=function(i,m,k){var g,p,l,n,h,j=null,o=this;
m=m||false;
k=k||false;
if(o.animating===true&&o.options.waitForAnimate===true){return false
}if(m===false){o.asNavFor(i)
}g=i;
j=o.getLeft(g);
n=o.getLeft(o.currentSlide);
h=o.slideCount%o.options.slidesToScroll!==0?o.options.slidesToScroll:0;
o.currentLeft=o.swipeLeft===null?n:o.swipeLeft;
if(o.options.infinite===false&&o.options.centerMode===false&&(i<0||i>(o.slideCount-o.options.slidesToShow+h))){if(o.options.fade===false){g=o.currentSlide;
o.animateSlide(n,function(){o.postSlide(g,k)
})
}return false
}else{if(o.options.infinite===false&&o.options.centerMode===true&&(i<0||i>(o.slideCount-o.options.slidesToScroll))){if(o.options.fade===false){g=o.currentSlide;
o.animateSlide(n,function(){o.postSlide(g,k)
})
}return false
}}if(o.options.autoplay===true){clearInterval(o.autoPlayTimer)
}if(g<0){if(o.slideCount%o.options.slidesToScroll!==0){p=o.slideCount-(o.slideCount%o.options.slidesToScroll)
}else{p=o.slideCount+g
}}else{if(g>=o.slideCount){if(o.slideCount%o.options.slidesToScroll!==0){p=0
}else{p=g-o.slideCount
}}else{p=g
}}o.animating=true;
if(o.options.onBeforeChange!==null&&i!==o.currentSlide){o.options.onBeforeChange.call(this,o,o.currentSlide,p,k)
}l=o.currentSlide;
o.currentSlide=p;
o.setSlideClasses(o.currentSlide);
o.updateDots();
o.updateArrows();
if(o.options.fade===true){o.fadeSlide(p,function(){o.postSlide(p,k)
});
return false
}o.animateSlide(j,function(){o.postSlide(p,k)
})
};
f.prototype.startLoad=function(){var g=this;
if(g.options.arrows===true&&g.slideCount>g.options.slidesToShow){g.$prevArrow.hide();
g.$nextArrow.hide()
}if(g.options.dots===true&&g.slideCount>g.options.slidesToShow){g.$dots.hide()
}g.$slider.addClass("slick-loading")
};
f.prototype.swipeDirection=function(){var g,j,i,k,h=this;
g=h.touchObject.startX-h.touchObject.curX;
j=h.touchObject.startY-h.touchObject.curY;
i=Math.atan2(j,g);
k=Math.round(i*180/Math.PI);
if(k<0){k=360-Math.abs(k)
}if((k<=45)&&(k>=0)){return"left"
}if((k<=360)&&(k>=315)){return"left"
}if((k>=135)&&(k<=225)){return"right"
}return"vertical"
};
f.prototype.swipeEnd=function(k){var j=this,g,h,i;
j.dragging=false;
if(j.touchObject.curX===undefined){return false
}if(j.touchObject.swipeLength>=j.touchObject.minSwipe){e(k.target).on("click.slick",function(l){l.stopImmediatePropagation();
l.stopPropagation();
l.preventDefault();
e(l.target).off("click.slick")
});
if(j.options.swipeToSlide===true){h=Math.round(j.touchObject.swipeLength/j.slideWidth);
g=h
}else{g=j.options.slidesToScroll
}switch(j.swipeDirection()){case"left":j.slideHandler(j.currentSlide+g);
j.touchObject={};
break;
case"right":j.slideHandler(j.currentSlide-g);
j.touchObject={};
break
}}else{if(j.touchObject.startX!==j.touchObject.curX){j.slideHandler(j.currentSlide);
j.touchObject={}
}}};
f.prototype.swipeHandler=function(h){var g=this;
if((g.options.swipe===false)||("ontouchend" in document&&g.options.swipe===false)){return
}else{if(g.options.draggable===false&&h.type.indexOf("mouse")!==-1){return
}}g.touchObject.fingerCount=h.originalEvent&&h.originalEvent.touches!==undefined?h.originalEvent.touches.length:1;
g.touchObject.minSwipe=g.listWidth/g.options.touchThreshold;
switch(h.data.action){case"start":g.swipeStart(h);
break;
case"move":g.swipeMove(h);
break;
case"end":g.swipeEnd(h);
break
}};
f.prototype.swipeMove=function(j){var i=this,k,h,g,l;
l=j.originalEvent!==undefined?j.originalEvent.touches:null;
k=i.getLeft(i.currentSlide);
if(!i.dragging||l&&l.length!==1){return false
}i.touchObject.curX=l!==undefined?l[0].pageX:j.clientX;
i.touchObject.curY=l!==undefined?l[0].pageY:j.clientY;
i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curX-i.touchObject.startX,2)));
h=i.swipeDirection();
if(h==="vertical"){return
}if(j.originalEvent!==undefined&&i.touchObject.swipeLength>4){j.preventDefault()
}g=i.touchObject.curX>i.touchObject.startX?1:-1;
if(i.options.vertical===false){i.swipeLeft=k+i.touchObject.swipeLength*g
}else{i.swipeLeft=k+(i.touchObject.swipeLength*(i.$list.height()/i.listWidth))*g
}if(i.options.fade===true||i.options.touchMove===false){return false
}if(i.animating===true){i.swipeLeft=null;
return false
}i.setCSS(i.swipeLeft)
};
f.prototype.swipeStart=function(h){var g=this,i;
if(g.touchObject.fingerCount!==1||g.slideCount<=g.options.slidesToShow){g.touchObject={};
return false
}if(h.originalEvent!==undefined&&h.originalEvent.touches!==undefined){i=h.originalEvent.touches[0]
}g.touchObject.startX=g.touchObject.curX=i!==undefined?i.pageX:h.clientX;
g.touchObject.startY=g.touchObject.curY=i!==undefined?i.pageY:h.clientY;
g.dragging=true;
g.interactionOccurred()
};
f.prototype.interactionOccurred=function(){var g=this;
if(g.options.onInteractionOccurred!==null){g.options.onInteractionOccurred.call(this,g)
}};
f.prototype.unfilterSlides=function(){var g=this;
if(g.$slidesCache!==null){g.unload();
g.$slideTrack.children(this.options.slide).detach();
g.$slidesCache.appendTo(g.$slideTrack);
g.reinit()
}};
f.prototype.unload=function(){var g=this;
e(".slick-cloned",g.$slider).remove();
if(g.$dots){g.$dots.remove()
}if(g.$prevArrow){g.$prevArrow.remove();
g.$nextArrow.remove()
}g.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")
};
f.prototype.updateArrows=function(){var g=this;
if(g.options.arrows===true&&g.options.infinite!==true&&g.slideCount>g.options.slidesToShow){g.$prevArrow.removeClass("slick-disabled");
g.$nextArrow.removeClass("slick-disabled");
if(g.currentSlide===0){g.$prevArrow.addClass("slick-disabled");
g.$nextArrow.removeClass("slick-disabled")
}else{if(g.currentSlide>=g.slideCount-g.options.slidesToShow){g.$nextArrow.addClass("slick-disabled");
g.$prevArrow.removeClass("slick-disabled")
}}}};
f.prototype.updateDots=function(){var g=this;
if(g.$dots!==null){g.$dots.find("li").removeClass(g.options.dotsActiveClass);
g.$dots.find("li").eq(Math.floor(g.currentSlide/g.options.slidesToScroll)).addClass(g.options.dotsActiveClass)
}};
e.fn.slick=function(h){var g=this;
return g.each(function(i,j){j.slick=new f(j,h);
j.slick.init()
})
};
e.fn.slickAdd=function(g,j,i){var h=this;
return h.each(function(k,l){l.slick.addSlide(g,j,i)
})
};
e.fn.slickCurrentSlide=function(){var g=this;
return g.get(0).slick.getCurrent()
};
e.fn.slickFilter=function(h){var g=this;
return g.each(function(i,j){j.slick.filterSlides(h)
})
};
e.fn.slickGoTo=function(g){var h=this;
return h.each(function(i,j){j.slick.changeSlide({data:{message:"index",index:parseInt(g)}})
})
};
e.fn.slickNext=function(){var g=this;
return g.each(function(h,i){i.slick.changeSlide({data:{message:"next"}})
})
};
e.fn.slickPause=function(){var g=this;
return g.each(function(h,i){i.slick.autoPlayClear();
i.slick.paused=true
})
};
e.fn.slickPlay=function(){var g=this;
return g.each(function(h,i){i.slick.paused=false;
i.slick.autoPlay()
})
};
e.fn.slickPrev=function(){var g=this;
return g.each(function(h,i){i.slick.changeSlide({data:{message:"previous"}})
})
};
e.fn.slickRemove=function(h,i){var g=this;
return g.each(function(j,k){k.slick.removeSlide(h,i)
})
};
e.fn.slickGetOption=function(h){var g=this;
return g.get(0).slick.options[h]
};
e.fn.slickSetOption=function(i,j,h){var g=this;
return g.each(function(k,l){l.slick.options[i]=j;
if(h===true){l.slick.unload();
l.slick.reinit()
}})
};
e.fn.slickUnfilter=function(){var g=this;
return g.each(function(h,i){i.slick.unfilterSlides()
})
};
e.fn.unslick=function(){var g=this;
return g.each(function(h,i){if(i.slick){i.slick.destroy()
}})
};
e.fn.getSlick=function(){var h=null;
var g=this;
g.each(function(i,j){h=j.slick
});
return h
}
}));
var d={arrows:true,dots:true,prevArrow:'<div class="nike-cq-carousel-arrow nike-cq-carousel-arrow-prev nsg-button--carousel-arrow--prev"></div>',nextArrow:'<div class="nike-cq-carousel-arrow nike-cq-carousel-arrow-next nsg-button--carousel-arrow--next"></div>',dotsActiveClass:"is-selected",dotsClass:"nsg-button--carousel",customPaging:function(f,e){return'<a href="javascript://">'+e+"</a>"
},appendDots:'<div class="nike-cq-carousel-dots"></div>',speed:1000,touchThreshold:48};
function b(j){var f={};
var e={autoAdvance:{slickPropName:"autoplay",defaultValue:false},slideDuration:{slickPropName:"autoplaySpeed"},paginationControls:{slickPropName:"dots"},playbackControls:{slickPropName:"arrows"},continuousLoop:{slickPropName:"infinite",defaultValue:false}};
for(var g in e){var h=e[g],i=j[g];
if(i!==null){if(i===""&&h.hasOwnProperty("defaultValue")){f[h.slickPropName]=h.defaultValue
}else{f[h.slickPropName]=i
}}}return f
}function c(g,f,e){var i=g.find(".nike-cq-carousel-slide-collection"),j=i.children();
g.data("controller",{autoPause:function(){i.slickPause();
return"slick auto pause"
},autoPlay:function(){i.slickPlay();
return"slick auto play"
},getCurrentSlide:function(){var k=i.slickCurrentSlide();
return j.eq(k)
},jumpTo:function(k){i.slickGoTo(k);
return"jump to slide index "+k
}});
var h=a.extend({},d,b(g.data()),{onBeforeChange:function(n,m,k,p){var o=j.eq(m);
var l=j.eq(k);
e.hideSlide(g,o,l,p)
},onAfterChange:function(l,k,n){var m=j.eq(k);
e.showSlide(g,m,n)
},onInteractionOccurred:function(k){e.interactionOccurred(g)
},onInit:function(k){e.initCarousel(g)
}},f);
h.appendDots=h.dots?a('<div class="nike-cq-carousel-dots"></div>').appendTo(g):g;
i.slick(h)
}return c
});
nike.cq.define("nike.cq.honey.Carousels",["nike.cq.honey.Styles","nike.cq.honey.FlexSlider","nike.cq.honey.Slick","nike.cq.honey.Plugins"],function(c,b,a,e){var d=function(j){var i=j.data();
var h=c.getStyle(i.carouselStyle,j);
var g=h.config||{},f=e.getPlugins(h.plugins);
switch(h.base){case"flexslider":return b(j,g,f);
case"slick":return a(j,g,f)
}};
return{createCarousel:d}
});
nike.cq.define("nike.cq.honey.Styles",["jquery"],function(c){var b={"p1-layout":{base:"slick",plugins:["carouselTouched","debug","analytics"],config:{fade:true}},"full-screen":{base:"slick",plugins:["slideContainsVideo","carouselTouched","debug","analytics","anchorSlideNavigation"],config:{fade:true}},"portrait-tout-300":{base:"slick",plugins:["carouselTouched","debug","analytics","wrapSlidesWithAnchor"],config:{touchMove:false,speed:200,touchThreshold:20,slidesToShow:4,cssEase:"ease-in-out",responsive:[{breakpoint:1370,settings:{slidesToShow:3}}]}},"notification-banner":{base:"slick",plugins:["debug","analytics"],config:{dots:false,prevArrow:'<div class="nike-cq-carousel-arrow nike-cq-carousel-arrow-prev nsg-glyph--chevron-left"></div>',nextArrow:'<div class="nike-cq-carousel-arrow nike-cq-carousel-arrow-next nsg-glyph--chevron-right"></div>'}},"default":{base:"slick",plugins:["carouselTouched","debug","analytics"]}};
var a=function(d,e){return b[d]||b["default"]
};
return{getStyle:function(d,e){return a(d,e)
}}
});
nike.cq.define("nike.cq.honey.Plugins",["nike.cq.honey.plugins.Debug","nike.cq.honey.plugins.Analytics","nike.cq.honey.plugins.SlideContainsVideo","nike.cq.honey.plugins.CarouselTouched","nike.cq.honey.plugins.WrapSlidesWithAnchor","nike.cq.honey.plugins.AnchorSlideNavigation"],function(){var a=Array.prototype.slice.call(arguments),e={};
for(var c=0;
c<a.length;
++c){if(a[c].name){e[a[c].name]=a[c]
}}var b=function(g){if(!g){return new d([])
}if(!(g instanceof Array)){g=[g]
}var h=[];
for(var f=0;
f<g.length;
++f){if(e[g[f]]){h.push(e[g[f]])
}}return new d(h)
};
function d(f){this.plugins=f
}d.prototype.initCarousel=function(g){for(var f=0;
f<this.plugins.length;
++f){if(this.plugins[f].initCarousel){this.plugins[f].initCarousel(g)
}}};
d.prototype.showSlide=function(g,j,h){for(var f=0;
f<this.plugins.length;
++f){if(this.plugins[f].showSlide){this.plugins[f].showSlide(g,j,h)
}}};
d.prototype.hideSlide=function(g,k,h,j){for(var f=0;
f<this.plugins.length;
++f){if(this.plugins[f].hideSlide){this.plugins[f].hideSlide(g,k,h,j)
}}};
d.prototype.interactionOccurred=function(g){for(var f=0;
f<this.plugins.length;
++f){if(this.plugins[f].interactionOccurred){this.plugins[f].interactionOccurred(g)
}}};
d.prototype.resize=function(g,h){for(var f=0;
f<this.plugins.length;
++f){if(this.plugins[f].resize){this.plugins[f].resize(g,h)
}}};
return{getPlugins:b}
});
nike.cq.define("nike.cq.honey.plugins.Debug",[],function(){var a=function(){return nike.cq.debug===true
};
return{name:"debug",initCarousel:function(b){a()&&console.log("Initializing carousel",b)
},showSlide:function(b,d,c){a()&&console.log("Showing slide",d)
},hideSlide:function(b,e,c,d){a()&&console.log("Hiding slide",e)
},resize:function(b,c){a()&&console.log("Resizing event",b,c)
}}
});
nike.cq.define("nike.cq.honey.plugins.Analytics",[],function(){return{name:"analytics",showSlide:function(a,c,b){if(!b){c.closest(".nike-cq-carousel.nike-cq-base-component").trigger("userDrivenSlideChange")
}}}
});
nike.cq.define("nike.cq.honey.plugins.SlideContainsVideo",[],function(){return{name:"slideContainsVideo",initCarousel:function(b){var a=b.data("controller");
b.bind("videoFinished",function(g,f){var h=a.getCurrentSlide(),i=h.find("video").is(g.target),d=b.data("autoAdvance"),c=b.data("touched");
if(i&&d&&!c){a.autoPlay()
}});
b.bind("initializeVideo",function(f,d){var g=a.getCurrentSlide(),h=g.find("video").is($(f.target).find("video")),c=d&&d.controls;
if(h&&!c){a.autoPause()
}})
},showSlide:function(d,g,f){var b=d.data("controller");
var e=d.find("video"),c=g.find("video"),h=Boolean(c.length),a=c.closest("div").data("controls");
if(e){e.trigger("videoReset")
}if(h&&!a){b.autoPause()
}}}
});
nike.cq.define("nike.cq.honey.plugins.CarouselTouched",[],function(){var a;
return{name:"carouselTouched",interactionOccurred:function(b){a=b.data("controller");
b.data("touched",true);
if(a){a.autoPause()
}}}
});
nike.cq.define("nike.cq.honey.plugins.WrapSlidesWithAnchor",[],function(){return{name:"wrapSlidesWithAnchor",initCarousel:function(a){if(a.data("initialized")!=true){a.find(".slick-slide").each(function(){var b=$(this).find(".nike-cq-cta-component a");
if(b.length){$(this).find(".nike-cq-image").first().wrap(b.clone().attr("class","slide-anchor").empty())
}})
}a.data("initialized",true)
}}
});
nike.cq.define("nike.cq.honey.plugins.AnchorSlideNavigation",["nike.cq.UI.HashState"],function(a){return{name:"anchorSlideNavigation",initCarousel:function(c){var d=c.closest(".nike-cq-page-section-container.nike-cq-nike-com-container").find("> div.nike-cq-container-module-anchor-link-wrapper > a");
var b=c.data("controller");
if(b){d.each(function(e){var f=$(this).attr("name");
a.registerHashCallback(f,this,function(){b.jumpTo(e)
})
})
}}}
});
nike.cq.require(["jquery","nike.cq.UI.StringReplace"],function(b,a){var c=".nike-cq-tesla-xml h1,.nike-cq-tesla-xml h2,.nike-cq-tesla-xml h3,.nike-cq-tesla-xml h4,.nike-cq-tesla-xml h5,.nike-cq-tesla-xml h6,.nike-cq-tesla-xml p,.nike-cq-tesla-xml li,.nike-cq-tesla-xml span";
if(!b("html").hasClass("ie7")){a(c,"Nike+",'Nike<span class="nikeplus">+</span>');
a(c,"NIKE+",'NIKE<span class="nikeplus">+</span>');
a(c,"dunk+",'dunk<span class="nikeplus">+</span>');
a(c,"DUNK+",'DUNK<span class="nikeplus">+</span>');
a(c,"LUNARGLIDE+",'LUNARGLIDE<span class="nikeplus">+</span>');
a(c,"LUNARTR1+",'LUNARTR1<span class="nikeplus">+</span>');
a(c,"HYPERWORKOUT+",'HYPERWORKOUT<span class="nikeplus">+</span>')
}});
$(function(){var b=$("html.touch a.nike-cq-stacked-cta-button");
var a="nike-cq-stacked-cta-active";
b.click(function(d){d.preventDefault();
var c=$(this),f=c.closest("nav"),e=f.hasClass(a);
$("."+a).removeClass(a);
if(!e){f.addClass(a)
}})
});
nike.cq.define("nike.cq.PES.BrightCovePlayer",["jquery"],function(d){var g,i=function(j){f(j);
if(j.fadeInOnHover==true){c(j)
}},f=function(j){var l,k;
if(j.thumbnailImage){l=d(j.thumbnailImage).attr("width");
k=d(j.thumbnailImage).attr("height");
if(!l&&!l){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){l=this.width;
k=this.height;
e(j,l,k)
})
}else{if(l&&k){e(j,l,k)
}else{if(!l){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){var o=this.width;
var m=this.height;
var n=k/m;
l=o*n;
e(j,l,k)
})
}else{if(!k){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){var o=this.width;
var m=this.height;
var n=l/o;
k=m*n;
e(j,l,k)
})
}}}}}},e=function(j,l,k){d(j.playButton).css({width:l,height:k});
d(j.thumbnailDiv).css({width:l,height:k})
},c=function(j){d(j.thumbnailDiv).hover(function(){d(this).stop().animate({opacity:"1"},"slow")
},function(){d(this).stop().animate({opacity:"0.7"},"slow")
})
},b=function(l){var k=brightcove.api.getExperience(l);
var j=k.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
g=k.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
j.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY,h);
g.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,a)
},h=function(j){g.play()
},a=function(j){doHideVideoOverlay()
};
return{init:i,onTemplateLoaded:b}
});
nike.cq.define("nike.cq.PES.PESBox",["jquery"],function($){var init=function(configuration){var config=configuration;
if($(".nike-cq-pesBox").length==0){setupPESBox()
}$(config.elementSelector).click(function(){displayPESBox(config)
})
},displayPESBox=function(config){var pesBox=$(".nike-cq-pesBox"),pesBoxContent=pesBox.find("#nike-cq-pesBox-content");
$("body").css("overflow","hidden");
pesBox.css("height","100%");
var ie8=$.browser.msie&&($.browser.version==8||$.browser.version==7);
if(ie8){pesBox.css("background-color","#000000");
pesBox.css("filter","alpha(opacity=91)")
}pesBox.css("height","100%");
pesBox.show();
pesBoxContent.html("<span class='nike-cq-pesBox-close'></span>"+config.contentToDisplay);
if(config.customFunction){var customFunction=eval(config.customFunction);
if(typeof(customFunction)==="function"){customFunction.call(this)
}}},hidePESBox=function(){$(".nike-cq-pesBox").hide().find("#nike-cq-pesBox-content").html("")
},setupPESBox=function(){$("body").prepend("<div class='nike-cq-pesBox'><div id='nike-cq-pesBox-content'></div></div>");
$(".nike-cq-pesBox").delegate(".nike-cq-pesBox-close","click",function(){hidePESBox()
})
};
return{init:init,hidePESBox:hidePESBox}
});
nike.cq.define("nike.cq.PES.PreviewOptions",["jquery"],function(b){var e,d,c=function(){var f=(b(".nike-cq-element-reference").length+b(".nike-cq-carousel").length),h=b(".placeholder").length,g=b(".pesWarning").length;
b("#nike-cq-preview-options-form").hide();
if(f>0){b("#nike-cq-preview-options-form").show();
if(b(".pesWarning").length>0){b("#showPESWarningsYes").attr("checked",true)
}else{b("#showPESWarningsNo").attr("checked",true)
}b("#nike-cq-preview-options-form").delegate("input:radio","change",function(){b("#nike-cq-preview-options-form").submit()
})
}},a=function(){var f=false;
b("#phonePreview").click(function(i){i.preventDefault();
if(f){return false
}else{setTimeout(function(){f=false
},1000);
f=true
}var p=b(this).data("phoneVersion");
var m=window.location.href;
var q=m.split(".html");
m=q[0]+".phone.html?wcmmode=disabled&phone-preview";
function l(u,t,r){var s=["toolbar=no","directories=no","status=no","menubar=no","scrollbars=yes","resizable=yes","copyhistory=yes","top=0","left="+u,"width="+t,"height="+r];
return s.join(",")
}function g(){var u=document.createElement("div");
u.style.visibility="hidden";
u.style.width="100px";
document.body.appendChild(u);
var s=u.offsetWidth;
u.style.overflow="scroll";
var r=document.createElement("div");
r.style.width="100%";
u.appendChild(r);
var t=r.offsetWidth;
u.parentNode.removeChild(u);
return(s-t)
}function n(v,r,w,u){var s=v+w,x=r+w,t=20;
e=window.open(m,"portrait",l(0,s,r));
d=window.open(m,"landscape",l(s+t,x,v));
e.onload=function(){this.document.title=this.document.title+" -  PHONE PREVIEW - "+u+" IN PORTRAIT";
var y=this.document.getElementsByTagName("body")[0];
y.className=y.className+" nike-cq-phone-preview portrait device-os-ios"
};
d.onload=function(){this.document.title=this.document.title+" -  PHONE PREVIEW - "+u+" IN LANDSCAPE";
var y=this.document.getElementsByTagName("body")[0];
y.className=y.className+" nike-cq-phone-preview landscape device-os-ios"
}
}var j,h,o,k=g();
if(p==="iphone5"){j=320;
h=586;
o="iPHONE 5"
}if(e&&!e.closed){e.close()
}if(d&&!d.closed){d.close()
}n(j,h,k,o)
})
};
b(window).load(function(){c();
a()
});
return{init:c,initPhonePreview:a}
});
nike.cq.define("nike.cq.PES.ProductOptions",["jquery","nike.cq.Utils"],function(h,m){var l={productOptions:".nike-cq-product-options",thumbnailElements:"li.nike-cq-product-options-option a",imageContainerElem:".nike-cq-product-options-images img",autoRotateTime:3000,autoRotateStartDelay:3000},n=0,e=undefined,b=h(".nike-cq-p1-layout-foreground"),i=function(r,q){var p=q.find(l.imageContainerElem),s=p.filter(".active"),t=p.eq(r);
t.fadeIn(500);
s.stop().fadeOut(1000,function(){h(this).removeClass("active");
t.addClass("active")
})
},c="",f=function(q,p){var r=p.closest(".nike-cq-p1-layout-foreground").find(".nike-cq-cta-component");
if(r.length){if(!r.eq(0).find("nav").length){r.eq(0).find("a").attr("href",m.validateInternalUrl(q))
}}},g=function(s,p){p.find(l.thumbnailElements+".current").removeClass("current").find(".marker").remove();
var q=p.find(l.thumbnailElements),r=q.eq(s).addClass("current").append('<span class="marker"></span>');
return r.attr("href")
},o=function(r){var p=r.find(".nike-cq-product-options-images img"),q=r.find(l.thumbnailElements),s=p.eq(0);
s.addClass("active").fadeIn(1000,function(){var t=g(0,r);
f(t,r);
q.fadeIn(1100,function(){h(this).addClass("available")
})
})
},a=function(){setTimeout(function(){e=setInterval(d,l.autoRotateTime)
},l.autoRotateStartDelay);
b.bind("click",function(){j()
})
},d=function(){var p=h(l.productOptions),r=n+1,s=p.find("li.nike-cq-product-options-option a")[r],q=undefined;
if(s){q=h(s).attr("href")
}else{r=0;
q=p.find("li.nike-cq-product-options-option a:first").attr("href")
}i(r,p);
g(r,p);
f(q,p);
n=r
},j=function(){clearInterval(e)
},k=function(q){var p=l.thumbnailElements;
var s=function(){h(p).hide();
h(l.imageContainerElem).hide();
h(l.productOptions).each(function(){o(h(this))
});
h(".nike-cq-product-options-title").fadeIn(900);
if(q==="true"){a()
}};
var r=function(){h(l.productOptions).delegate(l.thumbnailElements,"click",function(B){B.preventDefault();
var z=h(this),v=z.closest(l.productOptions),w=v.find(":animated"),x=z.attr("href"),u=z.parent(),A=u.parent().find("li"),y=A.index(u);
n=y;
if(w.length===0&&!z.hasClass("current")&&z.hasClass("available")){i(y,v);
g(y,v);
f(x,v)
}});
h(p).hover(function(){var v=h(this),w=v.find("img"),u=w.attr("title");
if(u!==""){v.parent().append('<span class="nike-cq-p1-tooltip"><p>'+u+'</p><span class="carrot-bottom"></span></span>')
}},function(){var u=h(this);
u.parent().find(".nike-cq-p1-tooltip").remove()
})
};
function t(){if(document.readyState==="complete"){s();
r()
}else{setTimeout(t,100)
}}setTimeout(t,100)
};
return{init:k,showProductOptions:o}
});
nike.cq.define("nike.cq.PES.videoBg",["jquery"],function(j){var i={parentContainer:".nike-cq-fst",startingImage:".nike-cq-fst-video-bg-start-image",fallbackImage:".nike-cq-fst-background-image",videoContainer:".nike-cq-fst-video-bg-component",loadTimeout:10000,videoDelay:2000,autoPlay:false,videoFormat:"video/mp4",isIOSControls:false,videoMetaDataFunction:function(p){return j(p).data()
},created:null};
var h=function(s,q){var r=j("<video />"),p=j("<source />");
p.attr("src",s.videoUrl).attr("type",s.videoFormat||"video/mp4");
r.append(p);
!this.isIOSControls&&r.attr("preload","true");
s.loop&&!this.parentContainer.parents(".nike-cq-carousel-slide").length&&r.attr("loop","");
if(!s.controls){r.attr("muted","true");
r[0].muted=true
}q&&q.call(q,r[0]);
return r[0]
};
var k=function(D){var q=this;
var B=j(D);
var p=j("<div />").addClass("nike-cq-fst-video-controls");
var y=j("<a>&nbsp;</a>").attr("href","#").addClass("nike-cq-fst-video-play-pause-button");
var w=function(F){if(F){!y.hasClass("paused")&&y.addClass("paused")
}else{!F&&y.hasClass("paused")&&y.removeClass("paused")
}};
var s=function(F){F?t():v()
};
var t=function(){if(q.isIOSControls){if(D&&D.currentTime&&D.currentTime>0){D.currentTime=0
}D.play();
D.webkitEnterFullscreen()
}else{B.trigger("playVideoUserAction")
}};
var v=function(){q.pause();
B.trigger("pauseVideoUserAction")
};
var z=function(){p.stop(true,true).fadeIn()
};
var u=function(){p.is(":visible")&&!D.paused&&p.stop(true,true).fadeOut()
};
var x=function(){w(false)
};
var A=function(){w(true);
z()
};
var E=function(F){F.preventDefault();
s(y.hasClass("paused"))
};
var C=function(){z()
};
var r=function(){u()
};
p.append(y);
y.click(E);
w(D.paused);
D.addEventListener("play",x);
D.addEventListener("pause",A);
q.parentContainer.bind("mouseenter",C);
q.parentContainer.bind("mouseleave",r);
return p[0]
};
var a=function(p,q){return p.canPlayType&&p.canPlayType(q)!==""
};
var c=function(p){return p&&p.readyState>=2
};
var b=function(r,p){var q=j(r);
if(p&&p.controls()){p.startImage&&!p.startImage.is(":visible")&&p.startImage.stop(true,true).show();
if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}}else{q.parent().fadeOut(400,function(){if(!p||!q.parents(".nike-cq-carousel-slide").length){q.remove();
r=null
}})
}q.trigger("videoFinished")
};
var d=function(r,p){var q=j(r);
if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}p&&p.controls()&&p.startImage&&!p.startImage.is(":visible")&&p.startImage.stop(true,true).show();
p&&p.videoContainer&&!p.videoContainer.is(":visible")&&p.videoContainer.stop(true,true).show();
q.trigger("videoRewind")
};
var e=function(r,q){var p=this;
r.addEventListener("play",function(){if(!p.isIOSControls){q.fadeOut()
}});
r.addEventListener("ended",function(){b(r,p)
});
r.addEventListener("canplay",function(){n.call(p)
});
this.parentContainer.bind("videoReset",function(){d(r,p)
});
if(p.isIOSControls){r.addEventListener("webkitendfullscreen",function(){if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}r.pause()
})
}};
var g=function(r,q,p){var s=function(){setTimeout(function(){if(c(r)){r.play()
}else{r.addEventListener("canplay",function(){r.play()
})
}},p.videoDelay)
};
j(window).load(function(){s()
})
};
var f=function(r,q,s,p){this.noLoadTimer=setTimeout(function(){if(!r||!r.readyState||r.readyState<2){q.remove();
j(s).remove();
b(r)
}},p.loadTimeout)
};
var n=function(){if(this.noLoadTimer){clearTimeout(this.noLoadTimer)
}this.noLoadTimer=null
};
var m=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
var l=(function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var p=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
return[parseInt(p[1],10),parseInt(p[2],10),parseInt(p[3]||0,10)]
}})();
var o=function(r,p){this.config=r=j.extend({},i,r);
this.parentContainer=p||j(r.parentContainer);
var s=this.videoContainer=p.find(r.videoContainer);
var u=this.startImage=p.find(r.startingImage);
var v=this.fallbackImage=p.find(r.fallbackImage);
var t=this.videoData=r.videoMetaDataFunction.call(this,s);
this.isIOSControls=(m&&l[0]>=7&&this.controls());
var w=this.videoElement=h.call(this,t,r.created);
var q;
var x=this.noLoadTimer=null;
if((this.isIOSControls||!m)&&a(w,r.videoFormat)){u.show();
s.show();
e.call(this,w,u);
s.append(w);
if(this.controls()){q=this.videoControls=k.call(this,w);
s.after(q)
}!this.isIOSControls&&f.call(this,w,u,q,r);
this.willPlay=true
}else{s.remove();
u.remove();
this.willPlay=false
}p.data("vbgRef",this);
s.trigger("initializeVideo",{controls:this.controls()})
};
Element.prototype.isVisible=function(){function q(s){var t=s.parentNode;
if(!r(s)){return false
}if(9===t.nodeType){return true
}if("0"===p(s,"opacity")||"none"===p(s,"display")||"hidden"===p(s,"visibility")){return false
}if(t){return q(t)
}return true
}function p(s,t){if(window.getComputedStyle){return document.defaultView.getComputedStyle(s,null)[t]
}if(s.currentStyle){return s.currentStyle[t]
}}function r(s){while(s=s.parentNode){if(s==document){return true
}}return false
}return q(this)
};
o.prototype.getVideoElement=function(){return this.videoElement
};
o.prototype.calculateVisibility=function(){if(!this.willPlay||!this.canPlay()||m){return false
}var v=j(window),q,w,p=Math.max(0,j(".gnav").height()),s=v.height()-p,t=v.scrollTop()+p,r=t+s,y=this.videoContainer.offset().top,u=this.videoContainer.height(),x=y+u;
if(!this.videoElement.isVisible()){q=0
}else{if(this.controls()&&this.paused()){q=0
}else{if(y>=t&&x<=r){q=u
}else{if(y<t&&x>r){q=s
}else{if(x>=t&&x<=r){q=u-(t-y)
}else{if(y>=t&&y<=r){q=r-y
}else{q=0
}}}}}}w=(q/u)*100;
return w
};
o.prototype.getLayerIndex=function(){if(this.videoElement){for(var p,q,r=j(this.videoElement);
r.length&&r[0]!==document;
){if(p=r.css("position"),("absolute"===p||"relative"===p||"fixed"===p)&&(q=parseInt(r.css("zIndex"),10),!isNaN(q)&&0!==q)){return q
}r=r.parent()
}}return 0
};
o.prototype.pause=function(){return this.willPlay&&!this.videoElement.paused&&this.videoElement.pause()
};
o.prototype.play=function(){return this.willPlay&&this.canPlay()&&this.videoElement.paused&&this.videoElement.play()
};
o.prototype.paused=function(){return this.videoElement.paused
};
o.prototype.controls=function(){return this.videoData.controls
};
o.prototype.canPlay=function(){return c(this.videoElement)&&this.videoElement.currentTime!=this.videoElement.duration
};
return o
});
nike.cq.define("nike.cq.PES.Hotspots",["jquery","nike.cq.Utils"],function(B,F){var j=34,n=34,l=109,o=87,e=109,r=180,L=14,u=(r/2)-(j/2),I=n+L,g=function(S,Q){var X=S.width(),P=S.parents(".nike-cq-p1-layout-foreground").height(),W=Q.find(".hotspot-panel").outerHeight(),R=Q.position(),V=R.left,T=R.top,O=Q.attr("data-hotspot-x"),N=Q.attr("data-hotspot-y");
Q.removeClass("hotspot-left hotspot-right");
Q.find(".carrot").removeClass("carrot-top carrot-bottom carrot-left carrot-right");
if(V===0&&T===0&&(O!==0||N!==0)){return
}if((V+(j/2))>(X/2)){Q.find(".carrot").addClass("carrot-left");
Q.addClass("hotspot-right")
}else{Q.find(".carrot").addClass("carrot-right");
Q.addClass("hotspot-left")
}var M=0-(W/2)+(n/2);
if((T+(n/2))-(W/2)<0){M=0-T
}if((T+(n/2))+(W/2)>P){var U=(T+(n/2))+(W/2)-P;
U=U;
M=M-U
}Q.find(".hotspot-panel").css({top:M,bottom:"auto",left:""});
if(T<e){Q.find(".carrot").addClass("carrot-bottom");
Q.find(".hotspot-panel").css({top:n+12,bottom:"auto",left:-((216/2)-(j/2))})
}if(T>(P-e-n)){Q.find(".carrot").addClass("carrot-top");
Q.find(".hotspot-panel").css({top:"auto",bottom:n+12,left:-((216/2)-(j/2))})
}},x=function(M){M.find(".hotspot-panel").before('<span class="carrot"></span>')
},t=function(N){var M=N.find(".nike-cq-hotspots-component");
if(N.is(":visible")){N.find(".hotspot").each(function(P){var O=B(this);
O.hide().stop().delay(500*(P+1)).fadeIn(300,function(){g(M,O)
})
})
}},G=function(M){M.find(".hotspot a.crosshair").live("click",function(P){P.preventDefault();
var N=B(this);
var O=M.find("a.crosshair").not(N);
if(!N.hasClass("active")){A(M,N);
O.each(function(){a(M,B(this),500)
})
}else{a(M,N,500,true)
}})
},v=function(P,N){var O=P.find(".hotspot a.crosshair"),M=O.children("span").css("background-color");
if(M){var Q=M.replace("rgb","rgba").replace(")",", "+N+")");
O.css("border-color",Q)
}},A=function(N,M){C(N);
M.addClass("active").parent().find(".carrot, .hotspot-panel").fadeIn(700);
M.children("span").removeClass("nsg-glyph--plus").addClass("nsg-glyph--minus")
},a=function(P,N,O,M){if(M){N.stop().parent().find(".carrot, .hotspot-panel").fadeOut({complete:function(){N.removeClass("active");
w(P)
},duration:O});
N.children("span").toggleClass("nsg-glyph--plus nsg-glyph--minus")
}else{N.removeClass("active").stop().parent().find(".carrot, .hotspot-panel").fadeOut({complete:function(){w(P)
},duration:O});
N.children("span").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}},D=function(M){M.find(".nike-cq-p1-hotspot-overlay-mask").live("click",function(O){O.preventDefault();
var N=M.find(".hotspot .active");
if(N.length){a(M,N,500)
}w(M)
})
},C=function(N){if(N.find(".nike-cq-p1-hotspot-overlay-mask").length===0){var M=B('<div class="nike-cq-p1-hotspot-overlay-mask"></div>');
N.find(".nike-cq-p1-layout-container").first().before(M)
}},w=function(M){if(!M.find(".hotspot .active").length){M.find(".nike-cq-p1-hotspot-overlay-mask").remove()
}},J=false,K=function(){if(!J){var N=[768,960,1229];
for(var M=0;
M<N.length;
++M){if(window.matchMedia){p(N[M])
}else{s(N[M])
}}J=true
}},p=function(N){var M=window.matchMedia("(max-width: "+N+"px)");
if(M.matches){h()
}M.addListener(function(){h()
})
},s=function(M){F.debounceResize(h,100,true)
},h=function(){B(".nike-cq-hotspots-component").each(function(){var N=B(this),M=N.hasClass("scaled-down-flag");
if(!M&&i(N)===464){E(N)
}if(M&&i(N)>=580){f(N)
}})
},i=function(M){return M.width()
},E=function(M){e=o;
M.find(".hotspot").each(function(){var N=B(this);
z(N);
g(M,N)
});
M.addClass("scaled-down-flag")
},z=function(N){var R=80,Q=parseInt(N.attr("data-hotspot-x"),10)/100*R,P=parseInt(N.attr("data-hotspot-y"),10)/100*R;
N.css({left:Q,top:P});
if(b(N)==="hotspot-type-invisible"){var O=parseInt(N.attr("data-hotspot-width"),10)/100*R,M=parseInt(N.attr("data-hotspot-height"),10)/100*R;
N.css({width:O,height:M})
}},f=function(M){e=l;
M.find(".hotspot").each(function(){var N=B(this);
c(N);
g(M,N)
});
M.removeClass("scaled-down-flag")
},c=function(N){var P=parseInt(N.attr("data-hotspot-x"),10),O=parseInt(N.attr("data-hotspot-y"),10);
N.css({left:P,top:O});
if(b(N)==="hotspot-type-invisible"){var M=parseInt(N.attr("data-hotspot-width"),10),Q=parseInt(N.attr("data-hotspot-height"),10);
N.css({width:M,height:Q})
}},b=function(M){return M.parent().attr("data-hotspot-type")
},H=function(){B("body").bind("touchstart",function(M){if(!B(this).hasClass("hotspot")){B("body").focus()
}})
},q=function(M){if(document.readyState==="complete"){t(M)
}else{B(window).load(function(){t(M)
})
}},y=function(O){var M=O.find(".nike-cq-touts-p1-layout-touts-p1-image-resource"),N=parseInt(M.attr("height"),10);
if(N>500){l=142;
o=120
}},d=function(M){M.find(".hotspot").stop().each(function(){a(M,B(this).find("a.crosshair"),1)
}).css({opacity:1}).hide()
},m=function(M){d(M);
t(M)
},k=function(M){y(M);
x(M);
q(M);
G(M);
v(M,0.3);
D(M);
K(M);
H()
};
return{init:k,hideHotspots:d,resetHotspots:m}
});
nike.cq.define("nike.cq.PES.HotspotSystem",["jquery","nike.cq.initializer"],function(d,c){var b,e=function(y){var u,n,D,i,v,t,x,p,m,B,C=940,A={"hotspot-type-crosshair":{ANIMATION:{showDelay:500,fadeIn:300},CLASS_LIST:"",CLICK_TO_SHOW_PANEL:true,POSITIONABLE_PANEL:true},"hotspot-type-invisible":{ANIMATION:{},CLASS_LIST:"",RESIZE_HOTSPOT:true},"hotspot-type-shop":{ANIMATION:{},CLASS_LIST:"slideIn",HOVER_PANEL:true}},s,r,j=function(){if(s){D.addClass(s)
}},w=function(I,G){var H=I.find(".hotspot a.crosshair"),F=H.children("span").css("background-color");
if(F){var J=F.replace("rgb","rgba").replace(")",", "+G+")");
H.css("border-color",J)
}},f=function(G){var F=d.Deferred(),I=i.clone().hide().appendTo("body");
I.load(F.resolve);
I.error(F.resolve);
d.when(F).done(H).then(H);
function H(L){var J=I.width(),K=I.height();
if(J!==0&&K!==0){m=J;
B=K
}}return F.promise()
},h=function(H){var R=H.data("hotspotX"),Q=H.data("hotspotY"),N=Math.ceil(((C*B)/m)),T=R/C,G=Q/N,M=i.is(":visible"),F=d(window).width(),J=M?i.height():(B*F)/m,P=M?i.width():F,O={height:H.height(),width:H.width(),top:G*100+"%",left:T*100+"%"},L,S,I,K;
if(A[x].RESIZE_HOTSPOT){L=H.data("hotspotHeight");
S=H.data("hotspotWidth");
O.height=J*L/N;
O.width=P*S/C
}I=G*(J-N)/(O.height/2);
K=T*R/2000*(P-C)/(O.width/2);
O.top=(G+I/J)*100+"%";
O.left=(T+K/P)*100+"%";
return O
},l=function(){var F=d(this);
if(F.hasClass("hotspot")){F.css(h(F))
}else{D.each(function(){var G=d(this);
G.css(h(G))
})
}},k=function(K,I){K.css({position:"absolute",top:"0"});
var Q=K.width(),H=K.height(),P=I.find(".hotspot-panel").outerHeight(),J=I.position(),N=J.left,L=J.top,O=I.width(),G=I.height();
I.removeClass("hotspot-left hotspot-right");
I.find(".carrot").removeClass("carrot-top carrot-bottom carrot-left carrot-right");
if((N+(O/2))>(Q/2)){I.find(".carrot").addClass("carrot-left");
I.addClass("hotspot-right")
}else{I.find(".carrot").addClass("carrot-right");
I.addClass("hotspot-left")
}var F=0-(P/2)+(G/2);
if((L+(G/2))-(P/2)<0){F=10-L
}if((L+(G/2))+(P/2)>H){var M=(L+(G/2))+(P/2)-H;
M=M+10;
F=F-M
}I.find(".hotspot-panel").css({top:F,bottom:"auto",left:""});
if(L<100){I.find(".carrot").addClass("carrot-bottom");
I.find(".hotspot-panel").css({top:G+12,bottom:"auto",left:-((216/2)-(O/2))})
}if(L>(H-100-G)){I.find(".carrot").addClass("carrot-top");
I.find(".hotspot-panel").css({top:"auto",bottom:G+12,left:-((216/2)-(O/2))})
}K.css("position","static")
},g=function(F){d(this).hide().stop().delay(r.showDelay*(F+1)).fadeIn(r.fadeIn)
},q=function(J,G,I){var F=G?"addClass":"removeClass",H=G?"fadeIn":"fadeOut";
if(I){J.removeClass("active").find(".carrot, .hotspot-panel").hide().end().find("a.crosshair").removeClass("active").find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}else{J[F]("active").find(".carrot, .hotspot-panel")[H](700).end().find("a.crosshair")[F]("active").find("span").toggleClass("nsg-glyph--plus nsg-glyph--minus");
switch(F){case"addClass":J.find("span.nsg-glyph--plus").removeClass("nsg-glyph--plus").addClass("nsg-glyph--minus");
break;
case"removeClass":J.find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus");
break
}}},E=function(){var F=d(".nike-cq-hotspot-type-crosshair");
if(F.hasClass("active")){F.removeClass("active").find(".carrot, .hotspot-panel").fadeOut(300).end().find("a.crosshair").removeClass("active").find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}},o=function(){d(window).on("resize",function(){clearTimeout(p);
p=setTimeout(l,50)
});
if(A[x].HOVER_PANEL){var F=D.find(".hotspot-panel");
F.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(G){F.addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
});
d(window).load(function(){d(".ie8 .hotspot-panel, .ie9 .hotspot-panel").addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
});
D.on("mouseenter",function(){d(this).find(".hotspot-panel-hidden").css({height:"auto",overflow:"visible"}).addClass("hotspot-hover")
});
if(d("html.ie8").length){D.on("mouseenter",function(){var G=d(this).find(".hotspot-panel"),H=20;
G.css({marginLeft:-(G.width()-H)/2})
})
}D.on("mouseleave",function(){var G=d(this).find(".hotspot-panel-hidden");
G.removeClass("hotspot-hover").css({"pointer-events":"none"});
setTimeout(function(){G.css({height:"0",overflow:"hidden","pointer-events":"auto"})
},300)
})
}if(A[x].CLICK_TO_SHOW_PANEL){D.on("click",function(I){I.preventDefault();
var G=d(this),H=G.hasClass("active");
E();
if(!H){k(u,G)
}q(G,!H)
})
}if(v.length){v.on("slidePageIndexChange",function(H,G){v.find(".hotspot").hide();
j();
if(A[x].HOVER_PANEL){D.each(function(J){var I=d(this);
I.find(".hotspot-panel").removeClass("hotspot-panel-hidden").attr("style","").parent().addClass("slideIn")
});
d(".ie9 .hotspot-panel").addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
}setTimeout(function(){D.each(function(J){var I=d(this);
if(A[x].POSITIONABLE_PANEL){q(I,false,true)
}g.call(I,J)
})
},1000)
})
}n.children().not(".nike-cq-hotspots, .hotspot-panel > *").on("click",function(G){E()
});
d(window).bind("pageshow",function(G){if(G.originalEvent.persisted){D.find(".hotspot-panel-hidden").removeClass("hotspot-hover").css({"pointer-events":"none"});
D.find("a").blur()
}})
},z=function(F){u=F.find(".hotspot-system");
if(!u){return
}t=u.data();
n=u.closest("."+t.hotspotParentContainerClass);
if(!n.length||!n.hasClass("nike-cq-fst-component")){return
}i=n.find(".nike-cq-fst-background-image img");
D=u.find(".hotspot");
v=n.parents(".nike-cq-carousel-slide:first").closest(".nike-cq-carousel");
x=t.hotspotType;
s=A[x].CLASS_LIST;
r=A[x].ANIMATION;
if(typeof m==="undefined"){f().done(function(){D.each(function(G){l.call(this,G);
g.call(this,G)
})
})
}o();
j();
w(u,0.3)
};
z(y);
return{$carousel:v,$elements:D,$parentContainer:n,init:z}
},a=function(f){return new e(d(f))
};
c.registerComponents({name:"nike-cq-hotspots",state:"ready",action:a});
return{init:a}
});
nike.cq.define("nike.cq.PES.Gestures",["jquery"],function(b){var a=function(c){var d={triggerPreviousEvent:"click",triggerNextEvent:"click"};
c=b.extend(d,c);
if(!b().hammer){return
}function e(f){f.gesture.preventDefault();
switch(f.type){case"dragleft":if(c.nextButton){c.$element.find(c.nextButton).trigger(c.triggerPreviousEvent);
f.gesture.stopDetect()
}break;
case"dragright":if(c.previousButton){c.$element.find(c.previousButton).trigger(c.triggerNextEvent);
f.gesture.stopDetect()
}break
}}c.$element.hammer({drag_lock_to_axis:true,drag_block_horizontal:true}).on("swipe dragleft dragright",e)
};
return{register:a}
});
nike.cq.define("nike.cq.PES.Tracking",["jquery","nike.cq.Tracking"],function(f,g){var k=function(s){f.extend(this,s)
};
var o={event:{"jcr:primaryType":"nt:unstructured",extend:k},extend:function(s){this.event.extend(s)
}};
function c(s,t,u){if(t&&!u.events){u.events=t
}if(typeof(nike.dispatchEvent)==="function"){nike.dispatchEvent(s,u)
}}function n(t){var s="";
if(t.el.attr("data-tracking")){s=t.el.attr("data-tracking")
}return s
}function p(s){return s?g.formatText(s.text()):""
}function e(s){var t=p(s);
if(s.data("tracking")){t=s.data("tracking")
}return t
}function r(s){var u="",t=s.data("tracking-target-index");
if(t){var v=s.children().eq(t);
if(v.attr("value")!=="#"){u=v.data("tracking")||"";
if(u.length===0){u=s.siblings("a").data("tracking");
if(v!==undefined){u+=">"+v.text().trim()
}}}}return u
}function h(){var t=window.location.pathname.split("/");
for(var s=0;
s<t.length;
++s){if(t[s]==="c"&&s<t.length-1){return t[s+1]
}}return t[t.length-1]
}function i(u){var v={};
if(typeof(u.el)!=="object"){return v
}var t=false;
var w=n(u);
var s="";
if(w!=""){t=true
}else{if(u.el.has("img").attr("alt")){w=u.el.find("img").attr("alt")
}else{if(u.el.has("span")){w=u.el.find("span").text()
}else{if(u.el.attr("href")){s=u.el.attr("href")
}}}}if(t){w=g.formatTextPreservingGreaterThanChar(w)
}else{w=g.formatText(w)
}if(typeof u.data!=="undefined"&&typeof u.data.prop3!=="undefined"){w=g.replaceValues(u.data.prop3,w)
}if(w!==""){v.prop3=w
}else{v.prop3=s
}return v
}function b(s){if(typeof s.el==="undefined"){return{}
}var u=p(s.el),t={};
if(s.data&&s.data.prop3){t.prop3=g.replaceValues(s.data.prop3,u)
}else{t.prop3=u
}return t
}function j(t,s){return q(t,d(t),s)
}function q(v,s,u){var t={campaign:a(v,"data-nike-campaign"),module:u,creative:s,category:a(v,"data-nike-category")};
if(t.campaign==="notauthored"&&t.category==="notauthored"){t=null
}return t
}function a(t,s){return t.attr(s)||"notauthored"
}function d(v){var x=v.attr("src");
if(!x||x===""){x=v.css("background-image")?v.css("background-image").slice(4,-1):""
}var u,y=x,w=x.indexOf(".dimg"),s=x.indexOf(".transform"),t=new RegExp(/(.dimg|.transform)(.*)$/ig);
if(w!==-1||s!==-1){y=x.replace(t,"")
}u=y.lastIndexOf("/")+1;
y=y.substr(u);
return y
}var m={extend:k,sendEventTrackingToThirdParty:c,getDataAttribute:n,elementText:p,getCtaText:e,getCtaSelectText:r,getSportCategory:h,ctaProcessor:i,ctaTextProcessor:b,buildEVar5:j,buildPageEVar5:q,config:o};
var l=nike.cq.ns("nike.cq.PES");
l.Tracking=m;
return m
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(v,f,h,u){var k="p1";
function r(x){var y={};
var z="teamselector:change team:";
z+=v(x.el.find("option:selected"));
y.prop3=z;
return y
}function l(x){var y={};
if(typeof(x.el)!=="object"){return y
}var z=x.el.find("img").attr("data-tracking");
y.prop3="P1 auto rotate:color chip selection:"+z;
return y
}function w(x){return x.data("slide-index")
}function d(x){return x.closest(".indexed-pes-reference").data("pes-reference-index")
}function g(x){var y=x.closest(".nike-cq-p1-layout-foreground"),z=y.find(".nike-cq-subtitle:first");
return v(z)
}function i(x){return x.closest(".nike-cq-p1-layout").find(".nike-cq-p1-layout-background img")
}function p(z){var x="";
if(z){var A=z.data("hotspotTitle");
var y=z.data("hotspotDescription");
if(A&&A!==""){x=A
}else{if(y&&y!==""){x=y
}}}return x
}function m(G){if(typeof G.el==="undefined"){return{}
}var F=G.el.parent(),z=G.el.hasClass("active"),E=p(F),C=G.el.closest(".nike-cq-carousel-slide"),A=C.length>0,y=z?"close":"open",B={};
if(A){var D=w(C),x=g(G.el);
B.prop3="p1 carousel "+D+":"+x+":hotspots:"+y+":"+f(E)
}else{B.prop3="p1 hotspots:"+y+":"+f(E)
}return B
}function n(D){if(typeof D.el==="undefined"){return{}
}var C=D.el.parent(),y=D.el.hasClass("active"),B=p(C),F=D.el.closest(".nike-cq-carousel"),A=F.length>0,x=D.el.attr("href"),z={};
z.prop3="p1 hidden hotspots:image:"+x;
var E=u(i(D.el),k);
if(E){z.eVar5=E
}return z
}function c(F){if(typeof F.el==="undefined"){return{}
}var E=F.el.closest(".hotspot"),D=p(E),y=v(F.el),B=F.el.closest(".nike-cq-carousel-slide"),z=B.length>0,A={};
if(z){var C=w(B),x=g(F.el);
A.prop3="p1 carousel "+C+":"+x+":hotspots:click:"+f(D)+":"+y
}else{A.prop3="p1 hotspots:click:"+f(D)+":"+y
}var G=u(i(F.el),k);
if(G){A.eVar5=G
}return A
}function t(x){var z={};
if(typeof x.el==="undefined"){return z
}var y=v(x.el);
z.prop3="p1 toggle:load:"+y;
return z
}function s(M){if(typeof M.el==="undefined"||M.el.attr("href")==="#"){return{}
}var z=h(M.el),H=M.el.closest(".nike-cq-carousel-slide"),E=H.length>0,x=undefined,L=M.el.closest(".nike-cq-p1-layout-foreground").find(".nike-cq-hotspot-type-invisible"),B=L.length>0,C=M.el.closest(".nike-cq-p1").find(".nike-cq-video-bg"),J=C.length>0,G=M.el.closest(".nike-cq-tout-toggle-container"),y=G.length>0,F={};
if(E){x=w(H);
var A=g(M.el);
F.prop3="p1 carousel "+x+":"+A+":"+z
}else{if(J){F.prop3="p1 animation:"+z
}else{if(B){F.prop3="p1 hidden hotspots:cta:"+z
}else{if(y){G=M.el.closest(".nike-cq-toggle");
var D=G.find(".nike-cq-toggle-component .is-selected");
var K=v(D);
var I=$(".device-type-phone").size()>0;
if(I){F.prop3=k+":"+z
}else{F.prop3="p1 toggle:click:"+K+":"+z
}}else{F.prop3=k+":"+z
}}}}var N=u(i(M.el),k);
if(N){F.eVar5=N
}return F
}function o(y){if(typeof y.el==="undefined"){return{}
}var A=y.el.siblings("a").data("tracking");
var x=y.el.find("option:selected").text(),z={};
if(y.el.find("option:selected").attr("value")==="#"){return{}
}else{z.prop3=k+":"+A+">"+x
}return z
}function q(F){var B={};
if(typeof F.el==="undefined"){return B
}var C=F.el.closest(".nike-cq-carousel-slide"),A=C.length>0,z=F.el.closest(".nike-cq-p1").find(".nike-cq-video-bg"),B={};
var E=F.el.closest(".nike-cq-p1-layout-component ").find(".nike-cq-p1-layout-background img").attr("alt");
var x=F.el.closest(".nike-cq-p1-layout-component ");
if(A){var D=w(C),y=g(F.el);
B.prop3="p1 carousel:"+D+":"+E+":image"
}else{if(z.length>0){B.prop3="p1:video:"+E+":image"
}else{B.prop3=k+":"+E+":image"
}}var G=u(i(x),k);
if(G){B.eVar5=G
}return B
}function e(z){var A={};
if(typeof z.el==="undefined"){return A
}var y=z.el.attr("href");
if(z.data&&z.data.prop3){A.prop3=b.replaceValues(z.data.prop3,y)
}else{A.prop3=y
}var x=u(z.el.closest(".nike-cq-product-wall-header").find(".nike-cq-product-wall-header-section-1 img"),"product wall header");
if(x){A.eVar5=x
}return A
}function j(z){var A={};
var y=z.el.closest(".nike-cq-p1-layout-container .nike-cq-video-component");
var C=y.find(".video-thumbnail");
var B=C.attr("data-video-url")||"";
var x=B.substring(B.lastIndexOf("/")+1);
A.prop3=k+":video:"+x+":cta";
return A
}return{p1VideoPlayProcessor:j,productOptionsProcessor:l,p1HotspotsProcessor:m,p1HotspotsCtaProcessor:c,p1InvisibleHotspotsProcessor:n,p1ToggleProcessor:t,p1CtaProcessor:s,p1PhoneStackedCtaProcessor:o,teamSelectorMobileProcessor:r,p1ImageAnchorProcessor:q,pwhAnchorProcessor:e}
})(a.elementText,b.formatText,a.getCtaText,a.buildEVar5));
a.config.extend({"nike-cq-p1-image-anchor":{elementSelector:".nike-cq-p1-layout-anchor",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1ImageAnchorProcessor"}},"nike-cq-p1-play-video":{elementSelector:".nike-cq-p1-layout-container .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1VideoPlayProcessor"}},"nike-cq-p1-cta-component":{elementSelector:".nike-cq-p1-layout-component .nike-cq-cta a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1CtaProcessor"}},"nike-cq-p1-phone-stacked-cta-component":{elementSelector:".nike-cq-p1-layout-component .nike-cq-cta select",eventName:"toutClickEvent",action:"change","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1PhoneStackedCtaProcessor"}},"nike-cq-hotspots-crosshair":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots a.crosshair",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1HotspotsProcessor"}},"nike-cq-hotspots-cta":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots-link-list a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1HotspotsCtaProcessor"}},"nike-cq-hotspots-invisible":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots a.tracking-invisible-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1InvisibleHotspotsProcessor"}},"nike-cq-toggle-component":{elementSelector:".nike-cq-p1-toggle-container .nike-cq-toggle-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 toggle:load:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1ToggleProcessor",followLink:false}},"nike-cq-product-options-option":{elementSelector:".nike-cq-product-options-thumbs a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"P1 auto rotate:color chip selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productOptionsProcessor",followLink:false}},"nike-cq-product-wall-header-link":{elementSelector:".nike-cq-product-wall-header-container a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"product wall header:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.pwhAnchorProcessor",followLink:true}},"nike-cq-team-selector-links":{elementSelector:".nike-cq-team-selector-links a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"teamselector:change team:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-team-selector-mobile-links":{elementSelector:".nike-cq-team-selector-component select",eventName:"toutClickEvent",action:"change","jcr:primaryType":"nt:unstructured",data:{prop3:"teamselector:change team:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.teamSelectorMobileProcessor",followLink:false}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,d,f,h){var g="p2";
function c(j){var l={};
var n=j.el.closest(".nike-cq-p2-touts-wrapper .nike-cq-video-component");
var k=n.find(".video-thumbnail");
var m=k.attr("data-video-url")||"";
var i=m.substring(m.lastIndexOf("/")+1);
l.prop3=g+":video:"+i+":cta";
return l
}return{p2VideoPlayProcessor:c}
})(a.elementText,b.formatText,a.getCtaText,a.buildEVar5));
a.config.extend({"nike-cq-p2-play-video":{elementSelector:".nike-cq-p2-touts-wrapper .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2VideoPlayProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,g,l,m,c){function n(q){var r={};
if(typeof(q.el)=="undefined"){return r
}var s=q.el.parents(".nike-cq-p2-image-tout-300-container").find("span.nike-cq-subtitle-line-1").text();
if(s==""){s=q.el.parents(".nike-cq-p2-image-tout-300-container").find(".nike-cq-touts-image-resource").attr("alt")
}r.prop3="p2:"+e.formatText(s);
var p=m(q.el.parents(".nike-cq-p2-image-tout-300-container").find("img"),"p2");
if(p){r.eVar5=p
}return r
}function k(p){var q={};
if(typeof(p.el)=="undefined"){return q
}var r=p.el.find("span.nike-cq-subtitle-line-1").text();
if(r!=""){r=e.formatText(r)
}else{r=p.el.find(".video-thumbnail").attr("data-video-id")
}q.prop3="p2:"+r;
return q
}function o(s,r){var t={};
if(typeof(s.el)=="undefined"){return t
}var u=s.el.closest(".slide, .nike-cq-carousel-slide").data("slideIndex");
var p=m(s.el.parents(".nike-cq-portrait-tout-300-container").find("img"),"portrait merch zone");
if(p){t.eVar5=p
}if(r){var q=g(s);
t.prop3="merch zone:"+u+":"+q
}else{var v=s.el.find(".nike-cq-image img").attr("alt");
t.prop3="merch zone:"+u+":"+v+":image"
}return t
}function j(p){return o(p,true)
}function f(p){return o(p,false)
}function i(p){return p.find(".nike-cq-image img")
}function h(t){var u={};
if(typeof(t.el)!=="object"){return u
}var r=false;
var s=t.el.closest(".nike-cq-page-section-copy-block-container");
var v=g(t);
var p="";
if(v!=""){r=true
}else{if(t.el.has("img").attr("alt")){v=t.el.find("img").attr("alt")
}else{if(t.el.has("span").length>0){v=t.el.find("span").text()
}else{if(t.el.attr("href")){p=t.el.attr("href")
}}}}if(v==""){v=t.el.text()
}if(r){v=e.formatTextPreservingGreaterThanChar(v)
}else{v=e.formatText(v)
}if(typeof t.data!=="undefined"&&typeof t.data.prop3!=="undefined"){v=e.replaceValues(t.data.prop3,v)
}if(v!==""){u.prop3=v
}else{u.prop3=p
}var q=c(s,v,"copy block");
if(q){u.eVar5=q
}return u
}function d(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var p=l(r.el);
var q=r.el.closest(".nike-cq-page-menu-sublist-wrapper");
while(q.length>0){p=l(q.siblings("a"))+">"+p;
q=q.siblings("a").closest(".nike-cq-page-menu-sublist-wrapper")
}s.prop3="in page nav:"+p;
return s
}return{p2ImageTout300Processor:n,p2VideoTout300Processor:k,merchZoneToutProcessor:j,merchZoneToutImageProcessor:f,copyBlockProcessor:h,PINProcessor:d}
})(b,a.getDataAttribute,a.elementText,a.buildEVar5,a.buildPageEVar5));
a.config.extend({"nike-cq-copy-block-cta-component":{elementSelector:".nike-cq-copy-block .nike-cq-cta-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"copy block:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.copyBlockProcessor"}},"nike-cq-copy-block-anchors":{elementSelector:".nike-cq-copy-block .nike-cq-text-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"copy block:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.copyBlockProcessor"}},"nike-cq-merch-menu":{elementSelector:"ul.nike-cq-merch-menu-links a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"merch menu:[elementText]"}},"nike-cq-portrait-merch-zone-carousel":{elementSelector:".nike-cq-portrait-merch-zone-carousel .nike-cq-cta-component a, .nike-cq-portrait-merch-zone-v2 .nike-cq-cta-component a, .nike-cq-portrait-tout-300-container .nike-cq-cta-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.merchZoneToutProcessor"}},"nike-cq-portrait-merch-zone-carousel-image":{elementSelector:".nike-cq-portrait-tout-300-container a.slide-anchor",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.merchZoneToutImageProcessor"}},"nike-cq-notification-banner-cta":{elementSelector:".nike-cq-notification-banner-container .nike-cq-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"promo:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-p2-image-tout-300-container":{elementSelector:".nike-cq-p2-image-tout-300-container a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2ImageTout300Processor"}},"nike-cq-p2-video-tout-300-container":{elementSelector:".nike-cq-p2-video-tout-300-container",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2VideoTout300Processor",followLink:false}},"nike-cq-phone-inpage-navigation-links":{elementSelector:".nike-cq-page-menu-link",eventName:"navItemSelectionEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"in page nav:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.PINProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend((function(e,c){function b(l,h){var g="",j=l.closest(".nike-cq-carousel-container").find(".nike-cq-carousel-title-resource .nike-cq-subtitle-line-1").first(),f=l.find(".nike-cq-subtitle:first"),i=null,k=null;
if(f.size()==1){i=c(f)
}if(j.size()==1){g=c(j);
if(i!=null&&i.length>0){g+="-"+i
}}else{if(i!=null&&i.length>0){g=i
}else{k=l.find(".nike-cq-image img").attr("alt");
g=k
}}return g
}function d(g){var h={};
if(typeof(g.el)=="undefined"){return h
}var j=g.el,k=g.el.find(".slick-slide.slick-active"),i=k.data("slideIndex"),f="";
if(g.data.showCreativeText!==false){f=":"+b(k,g)
}h.prop3=g.data.carouselType+":slide change:"+i+f;
return h
}return{carouselSlideChangeProcessor:d}
}(a.getDataAttribute,a.elementText)));
a.config.extend({"nike-cq-portrait-merch-zone-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-portrait-tout-300",delegateAction:"userDrivenSlideChange",data:{carouselType:"merch zone"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-notifications-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-notification-banner",delegateAction:"userDrivenSlideChange",data:{carouselType:"promo"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-p1-carousel-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-p1-layout",delegateAction:"userDrivenSlideChange",data:{carouselType:"p1 carousel"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-fst-carousel-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-full-screen",delegateAction:"userDrivenSlideChange",data:{carouselType:"fst"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,c){function d(i){var j={};
if(typeof(i.el)==="undefined"){return j
}var k=i.el.parents(".nike-cq-story-body-teaser-component").data("title");
if(k===""){k=i.el.text()
}j.prop3="story page:"+c(k);
return j
}function g(l){if(typeof l.el==="undefined"){return{}
}var m={},k=function(r){var p="",q=r.find("img");
if(r.data("title").length){p=r.data("title")
}else{if(q.attr("alt").length){return":"+q.attr("alt")
}else{if(q.data("imageName").length){return":"+q.data("imageName")
}}}return p
};
var j=l.el.closest(".nike-cq-story-hero-slideshow-component"),n=j.find(".nike-cq-story-hero-slideshow-select-slide-selected a").data("index"),o=j.find(".nike-cq-story-hero-slideshow-slide-selected:not(.clone)"),i="";
n=n+1;
if(isNaN(n)){n=1
}if(l.data.showCreativeText!==false){i=k(o)
}m.prop3="p1 hero slideshow:slide change:"+n+":"+i;
return m
}function h(m){var n={};
var l=m.el.closest(".nike-cq-story-hero-video");
var i=l.find(".video-thumbnail");
var k=i.attr("data-video-url")||"";
var j=k.substring(k.lastIndexOf("/")+1);
n.prop3="story hero:video:"+j+":cta";
return n
}function f(l){var m={};
var n=l.el.closest(".nike-cq-story-body-video");
var k=n.find(".video-thumbnail");
var i=k.attr("data-video-url")||"";
var j=i.substring(i.lastIndexOf("/")+1);
m.prop3="story body:video:"+j+":cta";
return m
}return{relatedStoryToutProcessor:d,storyHeroVideoPlayProcessor:h,storyBodyVideoPlayProcessor:f,p1StoryCarouselProcessor:g}
})(a.elementText,b.formatText));
a.config.extend({"nike-cq-story-tout":{elementSelector:".nike-cq-story-body-text a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"}},"nike-cq-related-story-tout":{elementSelector:".nike-cq-story-body-teaser a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.relatedStoryToutProcessor"}},"nike-cq-story-body-cta-component":{elementSelector:" .nike-cq-story-sidebar .nike-cq-story-sidebar-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-story-related-product-cta-component":{elementSelector:".nike-cq-story-sidebar .nike-cq-related-product-cta-wrapper .nike-cq-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-story-carousel-navigation":{elementSelector:"body",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-story-hero-slideshow-select-slide-link, .nike-cq-story-hero-slideshow-previous-slide-button, .nike-cq-story-hero-slideshow-next-slide-button",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 hero slideshow:navigation selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1StoryCarouselProcessor",followLink:false}},"nike-cq-storyHero-play-video":{elementSelector:".nike-cq-story-hero-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.storyHeroVideoPlayProcessor"}},"nike-cq-storyBody-play-video":{elementSelector:".nike-cq-story-body-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.storyBodyVideoPlayProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend({leftNavigationToutProcessor:function(b){var c={};
if(typeof(b.el)=="undefined"){return c
}var d=b.el.find("span").text();
c.prop3="left:shop>"+d;
return c
}});
a.config.extend({"nike-cq-left-navigation-links":{elementSelector:".nike-cq-left-navigation-nav-links a, .nike-cq-left-navigation-phone-links-container a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"left:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor",followLink:true}},"nike-cq-left-navigation-tout-link":{elementSelector:".nike-cq-left-navigation-component-tout a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.leftNavigationToutProcessor",followLink:true}},"nike-cq-left-navigation-component-tout":{elementSelector:".nike-cq-left-navigation-tout a",eventName:"storeNavChangedEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{navItems:"left:tout",clicked:"true"}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend({footerLinkProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.text().toLowerCase();
d.prop3="nav:footer:new:"+b;
return d
},footerLinkSocialProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.attr("name").toLowerCase();
d.prop3="nav:footer:new:social:"+b;
return d
},footerLinkGuidesProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.text().toLowerCase();
d.prop3="nav:footer:new:guides:"+b;
return d
}});
a.config.extend({"nike-cq-global-footer-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-title a, .nike-cq-global-footer-link a, .nike-cq-global-footer-locale a, .nike-cq-global-footer-terms-link a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkProcessor",followLink:true}},"nike-cq-global-footer-social-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-social-container a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkSocialProcessor",followLink:true}},"nike-cq-global-footer-guide-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-guides-menu a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkGuidesProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,i,o){var n=e.elementText,c=".nike-cq-subtitle-line-1, h2 .grid-overlay-title1, .nike-cq-content-grid-image-overlay h2:not(.nike-cq-subtitle-headline)";
var g="content grid";
function k(q){if(q.el.hasClass("nike-cq-content-grid-arrow")){return n(q.el.closest(".nike-cq-content-grid-modal-foreground").find(c).eq(0))
}else{return n(q.el.closest(".nike-cq-content-grid-image").find(c).eq(0))
}}function p(q){return q.closest(".nike-cq-content-grid-image").find("img")
}function h(r){if(typeof r.el==="undefined"){return{}
}var s={},q=k(r);
s.prop21=q;
return s
}function d(q){var r={};
if(typeof q.el==="undefined"){return r
}r.prop21=k(q);
return r
}function f(x){var s={};
if(typeof(x.el)=="undefined"){return s
}var w=x.el.find(".link-item-label"),u=x.el.closest(".nike-cq-content-grid-overlay-right"),t=u.find(c).eq(0);
var q=n(w),v=n(t);
s.prop3="content grid:modal:"+v+":"+q;
var r=x.el.closest(".nike-cq-content-grid-overlay-dialog-inner").find("img");
var y=o(r,g);
if(y){s.eVar5=y
}return s
}function j(w){var s={};
if(typeof(w.el)=="undefined"){return s
}var v;
if(w.el.prop("tagName")==="A"){v=w.el.closest(".nike-cq-content-grid-image-hover-overlay.nike-cq-content-grid-image-url")
}else{v=w.el
}var y=v.find(".nike-cq-cta-component"),u=v.find(".nike-cq-content-grid-image-hover-copy-text"),q=n(y),r=n(u);
if(r==""){var t=w.el.closest(".nike-cq-content-grid-image").find("img");
r=t.attr("alt")
}s.prop3="content grid:"+q+":"+r;
var x=o(p(w.el),g);
if(x){s.eVar5=x
}return s
}function m(r){if(typeof r.el==="undefined"){return{}
}var q=r.el;
if(r.el.prop("tagName")!=="A"){q=r.el.find(".nike-cq-content-grid-image-hover-content a")
}var t=n(q),s={};
s.prop3="content grid:"+t;
return s
}function l(t){if(typeof t.el==="undefined"){return{}
}var v=n(t.el.find(".link-item-label")),q=t.el.closest(".grid-slide"),s=i(q.data("modalName")),u={};
u.prop3="content grid:modal:"+s+":"+v;
var r=o(p(t.el),g);
if(r){u.eVar5=r
}return u
}return{contentGridOverlayProcessor:h,contentGridOverlayArrowProcessor:d,contentGridHoverCtaProcessor:j,contentGridOverlayCtaProcessor:f,contentGridCtaTextProcessor:m,contentGridOverlayCtaPhoneProcessor:l}
}(a,b.formatText,a.buildEVar5)));
a.config.extend({"nike-cq-content-grid-cta-component":{elementSelector:".nike-cq-grid-lookbook-cta-wrapper a, .nike-cq-misc-content-grid-reference-component .nike-cq-container a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-content-grid-image-hover-cta":{elementSelector:".nike-cq-content-grid-image-overlay, .device-type-phone .nike-cq-content-grid-image:not(.nike-cq-looks-grid-image)",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridCtaTextProcessor",followLink:true}},"nike-cq-content-grid-image-overlay-page-event":{elementSelector:".nike-cq-content-grid-image-overlay, .device-type-phone .nike-cq-content-grid-image:not(.nike-cq-looks-grid-image)",eventName:"modalPageEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayProcessor",followLink:false}},"nike-cq-content-grid-image-overlay-arrow-event":{elementSelector:".nike-cq-content-grid-arrow",eventName:"modalPageEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayArrowProcessor",followLink:false}},"nike-cq-content-grid-image-url":{elementSelector:".nike-cq-content-grid-image-url a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridHoverCtaProcessor",followLink:true}},"nike-cq-content-grid-overlay-cta":{elementSelector:".nike-cq-content-grid-modal-dialog",eventName:"cqModalPageActivity",action:"delegate",delegate:".nike-cq-content-grid-overlay-right a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayCtaProcessor",followLink:true}},"nike-cq-content-grid-overlay-cta-phone":{elementSelector:".device-type-phone .nike-cq-content-grid-container",eventName:"cqModalPageActivity",action:"delegate",delegate:".nike-cq-content-grid-carousel a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:modal:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayCtaPhoneProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(f,h,n){var d=".nike-cq-subtitle-line-1, h2 .grid-overlay-title1, .nike-cq-looks-grid-image-overlay h2:not(.nike-cq-subtitle-headline)";
var g="looks grid";
function k(q){return q.text().replace(/\s+/g," ").trim()
}function l(r){var t=r.parents(".nike-cq-content-grid-inner:first, .nike-cq-content-grid-carousel-list:first");
var s=".nike-cq-grid-cell, .grid-slide:not(.clone)";
var q=r.parents(s+":first");
return t.find(s).index(q)+1
}function j(s){var q=l(s);
var r=s.parents(".nike-cq-looks-grid:first").find(".nike-cq-grid-cell").eq(q-1);
var t=r.find(".nike-cq-looks-grid-image-content .nike-cq-subtitle-line-1").text().replace(/\s+/g," ").trim();
return t!==""?t:e(s)
}function e(q){return q.closest(".nike-cq-looks-grid-image, .overlay-scroller-inner").find("img").attr("alt")
}function m(r){var q="";
q=r.hasClass("nike-cq-sharelinks-item-facebook")?"facebook":q;
q=r.hasClass("nike-cq-sharelinks-item-twitter")?"twitter":q;
q=r.hasClass("nike-cq-sharelinks-item-pinterest")?"pinterest":q;
q=r.hasClass("nike-cq-sharelinks-item-sinaweibo")?"sina_weibo":q;
q=r.hasClass("nike-cq-sharelinks-item-tencentweibo")?"tencent_weibo":q;
q=r.hasClass("nike-cq-sharelinks-item-qzone")?"qzone":q;
return q
}function p(r){var s=r.closest(".nike-cq-looks-grid-image").find("img");
var q=r.closest(".overlay-scroller").find("img");
if(!s.length){s=q
}return s
}function o(t){if(typeof t.el==="undefined"){return{}
}var q=t.el;
if(t.el.prop("tagName")!=="A"){q=t.el.find(".nike-cq-looks-grid-image-content .nike-cq-cta-component a")
}var w=k(q);
var s=l(q);
var v=j(q);
var u={};
u.prop3="looks grid:"+s+":"+w+":"+v;
var r=n(p(t.el),g);
if(r){u.eVar5=r
}return u
}function i(t){if(typeof t.el==="undefined"){return{}
}var q=t.el.closest(".nike-cq-looks-grid-image-overlay, .nike-cq-looks-grid-image-phone-overlay").find(".nike-cq-cta-component a");
var w=k(q);
var s=l(q);
var v=j(q);
var u={};
u.prop3="looks grid:hover:"+s+":"+w+":"+v;
var r=n(p(t.el),g);
if(r){u.eVar5=r
}return u
}function c(t){if(typeof t.el==="undefined"){return{}
}var u={},r=m(t.el),q=l(t.el),s=e(t.el);
u.shareType=r;
u.interactionType="share:looks grid";
u.prop3=g+":"+q+":"+r+":share:"+s;
return u
}return{looksGridCtaProcessor:o,looksGridCtaOverlayProcessor:i,looksGridShareLinkProcessor:c}
}(b,b.formatText,a.buildEVar5)));
a.config.extend({"nike-cq-looks-grid-cta-component":{elementSelector:".nike-cq-looks-grid-image-content .nike-cq-looks-grid-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridCtaProcessor",followLink:true}},"nike-cq-looks-grid-image-hover-cta":{elementSelector:".nike-cq-looks-grid-image-overlay .nike-cq-looks-grid-cta-component a, .nike-cq-looks-grid-cta-block-link",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridCtaOverlayProcessor",followLink:true}},"nike-cq-looks-grid-share-link":{elementSelector:".nike-cq-sharelinks-item",eventName:"shareOptionClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridShareLinkProcessor",followLink:true}}})
});
nike.cq.require(["jquery","nike.cq.PES.Tracking","nike.cq.Tracking"],function(b,a,c){a.extend((function(k,A,B,g,i,w){function t(O){var I={},R="fst";
var K=O.el;
var L=K.attr("data-tracking");
var H=K.closest(".nike-cq-block-component-wrap");
var J=H.attr("data-row-position");
var N=H.attr("data-column-position");
J++;
N++;
var M=H.closest(".nike-cq-fst-component");
var F=e(M);
if(M.hasClass("nike-cq-fst-with-video")){R+=":video"
}var E=M.closest(".indexed-pes-reference");
if(E.length>0){var Q=E.attr("data-pes-reference-index");
I.prop3=R+":"+Q+":"+F+":row"+J+"col"+N+":"+L
}else{var G=M.closest(".nike-cq-carousel-slide");
if(G.length===0){I.prop3=R+":"+F+":row"+J+"col"+N+":"+L
}else{var Q=G.attr("data-slide-index");
I.prop3=R+":"+Q+":"+F+":row"+J+"col"+N+":"+L
}}var P=w(u(M),"fst");
if(P){I.eVar5=P
}return I
}function e(I){var H="";
if(I.hasClass("nike-cq-fst-with-video")){var G=I.find(".nike-cq-fst-background-video .nike-cq-fst-video-bg-component");
var F=G.attr("data-video-url")||"";
H=F?F.substring(F.lastIndexOf("/")+1):I.find(".nike-cq-fst-background-image img").attr("alt")
}else{var E=I.find(".nike-cq-fst-background-image img");
H=E.attr("alt")
}return H
}function u(E){return E.find(".nike-cq-fst-background-image img")
}function C(G){var H={};
var F=i(G.el);
var I=G.el.closest(".nike-cq-fst-component");
var K=u(I);
var J=K.attr("alt");
H.prop3="fst:label:"+J+":"+F;
var E=w(K,"fst");
if(E){H.eVar5=E
}return H
}function o(F){var G={};
if(typeof(F.el)=="undefined"){return G
}var E=x(F);
G.prop3="fst:label:"+E;
return G
}function j(M){if(typeof M.el==="undefined"){return{}
}var F=M.el.closest(".nike-cq-full-screen-container"),E=M.el.closest(".hotspot"),J=M.el.hasClass("active"),I=J?"close":"open",H="fst",L=r(E),K=D(E),G=q(E);
if(I!=="open"){return{}
}return{prop3:H+":"+I+":"+L+":"+K+":"+g(G)}
}function n(M){if(typeof M.el==="undefined"){return{}
}var F=M.el.closest(".nike-cq-full-screen-container"),E=M.el.closest(".hotspot"),I="fst",G=B(M.el),L=r(M.el),J=D(E),H=(q(E)||m(E));
var K={};
K.prop3=I+":cta:"+g(G)+":"+L+":"+J+":"+g(H);
var N=w(u(F),"fst");
if(N){K.eVar5=N
}return K
}function s(L){if(typeof L.el==="undefined"){return{}
}var F=L.el.closest(".nike-cq-full-screen-container"),E=L.el.closest(".hotspot"),H="fst",K=r(E),I=D(E),G=(q(E)||m(E));
var J={};
J.prop3=H+":click:"+K+":"+I+":"+g(G);
var M=w(u(F),"fst");
if(M){J.eVar5=M
}return J
}function v(L){if(typeof L.el==="undefined"){return{}
}var F=L.el.closest(".nike-cq-full-screen-container"),E=L.el.closest(".hotspot"),H="fst",K=r(E),I=D(E),G=(q(E)||m(E));
var J={};
J.prop3=H+":click:"+K+":"+I+":"+g(G);
var M=w(u(F),"fst");
if(M){J.eVar5=M
}return J
}function p(G){var H={};
if(typeof G.el==="undefined"){return H
}var E=b(G.el).parent().data("id"),I=b(G.el).closest(".nike-cq-tout-toggle-container").find("[data-pes-reference-index="+E+"]"),F=f(I);
H.prop3="fst:slide change:"+E+":"+F;
return H
}function l(G){if(typeof G.el==="undefined"){return{}
}if(G.el[0]&&!b(G.el[0]).hasClass("paused")){return{events:"event55"}
}var F=b(G.el).closest(".nike-cq-fst-background-video");
var E=y(F);
return{prop18:"fst:"+E,eVar47:"fst:"+E,events:"event55"}
}function d(M){if(typeof M.el==="undefined"){return{}
}var O=M.el.siblings("a").data("tracking");
var K,J,P;
J=M.el.closest(".nike-cq-carousel-slide");
var F=M.el.data("tracking-target-index");
if(!F){return{}
}var I=M.el.closest(".nike-cq-fst"),L=I.find(".nike-cq-fst-background-video"),H=M.el.children().eq(F),E=H.text().trim(),G={};
M.el.data("tracking-target-index",undefined);
if(H.attr("value")==="#"){return{}
}if(J.length>0){K=J.attr("data-slide-index");
P=J.find(".nike-cq-image img").attr("alt");
G.prop3="fst:"+K+":"+P+":"+O+">"+E
}else{if(L.length>0){G.prop3="fst:video:"+O+">"+E
}else{G.prop3="fst:"+O+">"+E
}}var N=w(u(I),"fst");
if(N){G.eVar5=N
}return G
}function h(L){var G={};
if(typeof L.el==="undefined"){return G
}var J=L.el.closest(".nike-cq-fst-component"),H=J.find(".nike-cq-fst-background-video").length>0,E="fst:"+(H?"video:":""),F=J.closest(".nike-cq-carousel-slide"),K=F.length>0?F.attr("data-slide-index")+":":"",I=u(J).attr("alt");
G.prop3=E+K+I+":image";
var M=w(u(J),"fst");
if(M){G.eVar5=M
}return G
}function y(E){var G=E.find("source");
if(G&&G[0]){var F=G[0].src;
return F.substring(F.lastIndexOf("/")+1)
}return""
}function x(E){var F,H,G;
H=E.el.closest(".nike-cq-carousel-slide");
if(H.length>0){F=H.attr("data-slide-index");
G=f(H)
}return F+":"+G+":"+i(E.el)
}function f(F){var L=B(F.find(".nike-cq-block-title")),H=B(F.find(".nike-cq-block-subtitle")),J=F.find(".nike-cq-image-component"),E=J.attr("alt"),K=J.attr("src"),I;
if(L.length){var G=[L];
if(H.length){G.push(H)
}I=G.join("-")
}else{if(H.length){I=H
}else{if(E){I=E
}else{I=K
}}}return I
}function z(G){var H={};
var I=G.el.closest(".nike-cq-block-cta .nike-cq-video-component");
var F=I.find(".video-thumbnail");
var J=F.attr("data-video-url")||"";
var E=J.substring(J.lastIndexOf("/")+1);
H.prop3="fst:video:"+E+":cta";
return H
}function r(F){var E=b(F).closest(".hotspot-system").data("hotspot-type").replace("hotspot-type-","");
if(E=="crosshair"){E="benefit"
}else{if(E=="invisible"){E="hidden"
}}return E+" hotspot"
}function m(E){return E.data("hotspot-link-0-url")
}function D(F){var E=b(F).attr("id").replace("hotspot","");
return parseInt(E)+1
}function q(E){return b(E).data("hotspot-title")||[b(E).data("hotspot-title1"),b(E).data("hotspot-title2")].join(" ").trim()||b(E).find(".nike-cq-hotspots-title").text()
}return{fstCTAProcessor:t,fstLabelProcessor:C,fstCarouselImageLabelProcessor:o,fstHotspotsProcessor:j,fstHotspotsCtaProcessor:n,fstInvisibleHotspotsProcessor:s,fstShopHotspotsProcessor:v,fstToggleProcessor:p,fstVideoPlayControlProcessor:l,fstAnchorProcessor:h,fstVideoPlayProcessor:z,fstPhoneStackedCtaProcessor:d}
}(c,a.getDataAttribute,a.elementText,c.formatText,a.getCtaText,a.buildEVar5)));
a.config.extend({"nike-cq-fst-cta":{elementSelector:".nike-cq-block-cta a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstCTAProcessor",followLink:true}},"nike-cq-fst-label-link-component":{elementSelector:".nike-cq-fst-reference .nike-cq-labels-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstLabelProcessor",followLink:true}},"nike-cq-fst-carousel-image-label":{elementSelector:".nike-cq-fst-image-carousel-reference .nike-cq-labels-label a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstCarouselImageLabelProcessor",followLink:true}},"nike-cq-fst-hotspots-crosshair":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-crosshair-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstHotspotsProcessor"}},"nike-cq-fst-hotspots-cta":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots-link-list a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstHotspotsCtaProcessor"}},"nike-cq-fst-hotspots-invisible":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-invisible-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstInvisibleHotspotsProcessor"}},"nike-cq-fst-hotspots-shop":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-shop-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstShopHotspotsProcessor"}},"nike-cq-fst-toggle":{elementSelector:".nike-cq-fst-toggle-container .nike-cq-toggle-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstToggleProcessor",followLink:false}},"nike-cq-fst-cta-play-video":{elementSelector:".nike-cq-block-cta .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstVideoPlayProcessor"}},"nike-cq-fst-video-play-video-control":{elementSelector:".nike-cq-fst .nike-cq-fst-background-video a.nike-cq-fst-video-play-pause-button.paused",eventName:"fstVideoClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstVideoPlayControlProcessor"}},"nike-cq-fst-anchor":{elementSelector:".nike-cq-fst-anchor",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstAnchorProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(d,e,j,k){var g="editorial grid";
function i(l){return l.closest(".nike-cq-editorial-block").find(".nike-cq-image img")
}function h(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var p,m,l;
p=r.el.closest(".nike-cq-editorial-grid-grid li");
if(p.length>0){l=f(p);
var q=p.find(".nike-cq-subtitle-line-1");
m=j(q)
}var o=r.el.data("imageLinkText");
s.prop3=g+":"+l+":"+m+":image:"+o;
var n=k(i(r.el),g);
if(n){s.eVar5=n
}return s
}function f(m){var l=-1;
if(m.length>0){var n=m.parent().children();
l=n.index(m);
l=l>=0?l+1:l
}return l
}function c(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var o,m,l;
o=r.el.closest(".nike-cq-editorial-grid-grid li");
if(o.length>0){l=f(o);
var p=o.find(".nike-cq-subtitle-line-1");
m=j(p)
}var q=j(r.el);
s.prop3=g+":"+l+":"+m+":"+q;
var n=k(i(r.el),g);
if(n){s.eVar5=n
}return s
}return{editorialGridImageProcessor:h,editorialGridCtaProcessor:c}
}(b,a.getDataAttribute,a.elementText,a.buildEVar5)));
a.config.extend({"nike-cq-editorial-grid-image":{elementSelector:".nike-cq-editorial-block-container>a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridImageProcessor",followLink:true}},"nike-cq-editorial-grid-hyperlink":{elementSelector:".nike-cq-editorial-block .nike-cq-text-link a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridCtaProcessor",followLink:true}},"nike-cq-editorial-grid-cta":{elementSelector:".nike-cq-editorial-grid .nike-cq-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridCtaProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(f,e){function d(j){var k={};
var l=j.el.closest(".nike-cq-product-launch-hero-video");
var h=l.find(".video-thumbnail");
var i=h.attr("data-video-url")||"";
var g=i.substring(i.lastIndexOf("/")+1);
k.prop3="launch hero:video:"+g+":cta";
return k
}function c(i){var j={};
var g=i.el.closest(".nike-cq-product-launch-body-video");
var k=g.find(".video-thumbnail");
var l=k.attr("data-video-url")||"";
var h=l.substring(l.lastIndexOf("/")+1);
j.prop3="launch body:video:"+h+":cta";
return j
}return{productLaunchRelatedCardProduct:function(h){if(typeof h.el==="undefined"){return{}
}var g=e(h.el.find(".nike-cq-product-launch-body-sidebar-related-card-title"));
return{prop3:f.replaceValues(h.data.prop3,g)}
},productLaunchHeroSlideshowChange:function(j){if(typeof j.el==="undefined"){return{}
}var k={},i=function(p){var n="",o=p.find("img");
if(o.attr("alt").length){return":"+o.attr("alt")
}else{if(o.data("imageName").length){return":"+o.data("imageName")
}}return n
};
if(typeof(j.el)=="undefined"){return k
}var h=j.el.closest(".nike-cq-product-launch-hero-slideshow-component"),l=h.data("current-slide-index"),m=h.find(".nike-cq-product-launch-hero-slideshow-slide-"+l+":not(.clone)"),g="";
if(j.data.showCreativeText!==false){g=i(m)
}k.prop3=f.replaceValues(j.data.prop3,l)+g;
return k
},launchHeroVideoPlayProcessor:d,launchBodyVideoPlayProcessor:c}
}(b,a.elementText)));
a.config.extend({"nike-cq-product-launch-faq-link":{elementSelector:".nike-cq-product-launch-body-sidebar-links-faq a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:faq:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-back-to-launch-link":{elementSelector:".product-launch-calendar-link a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-related-card-link":{elementSelector:".nike-cq-product-launch-body-sidebar-related-card a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:you may also like:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productLaunchRelatedCardProduct",followLink:true}},"nike-cq-product-launch-tagcloud-link":{elementSelector:".nike-cq-product-launch-body-sidebar-tagcloud a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:tag selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-hero-slideshow-navigation":{elementSelector:"body",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-product-launch-hero-slideshow-component button, .nike-cq-product-launch-hero-slideshow-select-slide-link",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 hero slideshow:slide change:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productLaunchHeroSlideshowChange",followLink:false}},"nike-cq-launchHero-play-video":{elementSelector:".nike-cq-product-launch-hero-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.launchHeroVideoPlayProcessor"}},"nike-cq-launchBody-play-video":{elementSelector:".nike-cq-product-launch-body-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.launchBodyVideoPlayProcessor"}}})
});
nike.cq.require(["jquery","nike.cq.PES.Tracking","nike.cq.Tracking"],function(b,a,c){a.extend((function(h,g,e,f){var i="active page title";
function d(m){var n={};
if(typeof(m.el)!=="object"){return n
}var p=g(m);
if(p!=""){p=h.formatTextPreservingGreaterThanChar(p)
}if(typeof m.data!=="undefined"&&typeof m.data.prop3!=="undefined"){p=h.replaceValues(m.data.prop3,p)
}if(p!==""){if(m.el.closest(".nike-cq-launch-story-page").length){if(m.el.closest(".nike-cq-apt-wrapper").length||m.el.closest(".nike-cq-active-page-title-wrapper").length){p="launch calendar:"+i+":"+p
}else{p="launch calendar:"+p
}}else{p=i+":"+p
}n.prop3=p
}var l=m.el.closest(".nike-cq-apt-component");
var o=l.find(".nike-cq-title-component h1");
if(!o.length){l=m.el.closest(".nike-cq-active-page-title-wrapper");
o=l.find(".nike-cq-active-page-title-title-component span")
}var j=e(o);
var k=f(l,j,i);
if(k){n.eVar5=k
}return n
}return{aptCTAProcessor:d}
})(c,a.getDataAttribute,a.elementText,a.buildPageEVar5));
a.config.extend({"nike-cq-active-page-title-cta-component":{elementSelector:".nike-cq-active-page-title-cta .nike-cq-cta-component a, .nike-cq-apt-module .nike-cq-cta-component a, .nike-cq-product-launch-body .nike-cq-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.aptCTAProcessor",followLink:true}}})
});
nike.cq.require(["jquery","nike.cq.Tracking","nike.cq.PES.Tracking"],function(b,c,a){b(function(){c.init(a)
})
});
/*!
 {
 "name": "IE",
 "property": "ie",
 "authors": ["Jack Bishop", "Joshua Hansen"]
 }
 !*/
Modernizr.addTest("ie",function(){return window.navigator.userAgent.match(/msie/i)
});
/*!
 {
 "name": "IE10 check",
 "property": "ie10",
 "authors": ["Jack Bishop", "Joshua Hansen"]
 }
 !*/
Modernizr.addTest("ie10",function(){return Function("/*@cc_on return document.documentMode===10@*/")()
});
nike.cq.require(["jquery"],function(a){a(function(){var c=a("body"),d=a(".nike-cq-active-page-title-optional, .nike-cq-apt").length,e=a(".nike-cq-active-page-title"),f="has-active-page-title",b="cq-has-active-page-title",k=a(".nike-cq-content"),i=c.data("cmsMode")!=="EDIT",h=e.length>0&&d==0&&i,g=a(".nike-cq-iframe-container-page").length>0&&d>0&&i,j=a(".nike-cq-nike-com-page").length>0&&d>0&&i;
if(h){k.addClass(f);
a(".nike-cq-page-container-inner").addClass(b)
}else{if(g){a(".nike-cq-iframe-container-page:first").addClass(b)
}else{if(j){a(".nike-cq-nike-com-page:first").addClass(b)
}}}if(Modernizr.touch){if(a(".gnav").length>0&&a(".nike-cq-page-module.nike-cq-active-page-title").length>0){k.removeClass(f);
a(".nike-cq-active-page-title .nike-cq-cta-component nav > ul").css({position:"relative",top:"-7px"})
}}})
});
nike.cq.define("nike.cq.NikeCom.EditorialGrid",["jquery"],function(d){var b={CONTAINER_SELECTOR:".nike-cq-editorial-grid-container"},a=undefined,c=function(){a.each(function(){var h=d(this),g=h.find("li"),i=0;
g.each(function(){var k=d(this),j=k.offset().top+k.height();
if(j>i){i=j
}});
h.height(i-h.offset().top);
h.css("min-height","0")
})
},f=function(){a=d(b.CONTAINER_SELECTOR);
if(a.length){e();
c()
}},e=function(){d(window).resize(c)
};
d(function(){f()
});
return{init:f}
});
nike.cq.define("nike.cq.NikeCom.StoryPageHero",["jquery","nike.cq.UI.VideoPlayingElement","nike.cq.UI.Component.Slideshow","nike.cq.PES.Gestures"],function(e,c,d,f){var b=function(){c(".nike-cq-story-hero-video .video-thumbnail")
};
var a=function(){var h=e(".nike-cq-story-hero-slideshow-component");
var k;
h.each(function(){k=new d(this);
f.register({$element:e(this),nextButton:".nike-cq-story-hero-slideshow-next-slide-button",previousButton:".nike-cq-story-hero-slideshow-previous-slide-button"})
});
e(".nike-cq-story-hero-slideshow-slide-description").css({opacity:"0.0",display:"block"});
var l=false,j=e("html").hasClass("ie8")?"0.7":"1.0",m=".nike-cq-story-hero-slideshow-slide-selected .nike-cq-story-hero-slideshow-slide-description",i=1000;
h.bind("mouseenter",function(){l=true;
e(this).find(m).stop().animate({opacity:j},i)
}).bind({mouseleave:function(){l=false;
e(this).find(m).stop().animate({opacity:"0.0"},i)
},slidestart:function(){e(this).find(m).stop().animate({opacity:"0.0"},i)
},slideend:function(){if(l){e(this).find(m).stop().animate({opacity:j},i)
}}}).delegate(".nike-cq-story-hero-slideshow-slide","click",function(){var o=e(this);
if(!o.hasClass("nike-cq-story-hero-slideshow-slide-selected")){if(o.offset().left<e(document).width()/2){k.previous()
}else{k.next()
}}});
var n=0;
if(window.matchMedia){var g=window.matchMedia("(max-width: 960px)");
g.addListener(function(){n=k.getCurrentSlideIndex();
k.setSlideWidth();
k.slideTo(n)
})
}else{e(window).resize(function(){n=k.getCurrentSlideIndex();
k.setSlideWidth();
k.slideTo(n)
})
}};
e(function(){b();
if(e(".nike-cq-story-hero .nike-cq-story-hero-slideshow-component").length){a()
}});
return{videosInit:function(){b()
},slideshowInit:function(){a()
}}
});
nike.cq.define("nike.cq.NikeCom.StoryPageBody",["jquery","nike.cq.UI.VideoPlayingElement"],function(c,b){var a=function(){b(".nike-cq-story-body-video .video-thumbnail")
};
c(function(){if(c(".nike-cq-story-body-video").length){a()
}});
return{init:function(){a()
}}
});
nike.cq.define("nike.cq.NikeCom.ProductLaunchPageHero",["jquery","nike.cq.UI.VideoPlayingElement","nike.cq.UI.Component.Slideshow","nike.cq.PES.Gestures"],function(f,g,b,c){var e=function(){g(".nike-cq-product-launch-hero-video .video-thumbnail")
};
var h=0,j;
var d=function(){var m=f(".nike-cq-product-launch-hero-slideshow-component");
m.each(function(){j=new b(this);
f(this).find(".nike-cq-product-launch-hero-slideshow-slide-image").load(function(){a(f(this))
});
c.register({$element:f(this),nextButton:".nike-cq-product-launch-hero-slideshow-next-slide-button",previousButton:".nike-cq-product-launch-hero-slideshow-previous-slide-button"})
});
f(".nike-cq-product-launch-hero-slideshow-slide-description").css({opacity:"0.0",display:"block"});
var o=false;
var n=f("html").hasClass("ie8")?"0.7":"1.0",l=j.getSlideCount();
m.bind("mouseenter",function(){o=true;
f(this).find(".nike-cq-product-launch-hero-slideshow-slide-selected .nike-cq-product-launch-hero-slideshow-slide-description").stop().animate({opacity:n},1000)
}).bind("mouseleave",function(){o=false;
f(this).find(".nike-cq-product-launch-hero-slideshow-slide-selected .nike-cq-product-launch-hero-slideshow-slide-description").stop().animate({opacity:"0.0"},1000)
}).bind("slidestart",function(){f(this).find(".nike-cq-product-launch-hero-slideshow-slide-selected .nike-cq-product-launch-hero-slideshow-slide-description").stop().animate({opacity:"0.0"},1000)
}).bind("slideend",function(q,p){if(o){f(this).find(".nike-cq-product-launch-hero-slideshow-slide-selected .nike-cq-product-launch-hero-slideshow-slide-description").stop().animate({opacity:n},1000)
}if(p<0){p=l
}else{if(p>=l){p=1
}else{p+=1
}}f(this).data("current-slide-index",p)
}).delegate(".nike-cq-product-launch-hero-slideshow-slide","click",function(){$this=f(this);
if(!$this.hasClass("nike-cq-product-launch-hero-slideshow-slide-selected")){if($this.offset().left<f(document).width()/2){j.previous()
}else{j.next()
}}});
if(window.matchMedia){var k=window.matchMedia(" (max-width: 960px)");
k.addListener(function(){i();
f(".nike-cq-product-launch-hero-slideshow-component .nike-cq-product-launch-hero-slideshow-slide-image").each(function(){a(f(this),true)
})
})
}else{f(window).resize(function(){i();
f(".nike-cq-product-launch-hero-slideshow-component .nike-cq-product-launch-hero-slideshow-slide-image").each(function(){a(f(this),true)
})
})
}};
var i=function(){var k=j.getCurrentSlideIndex();
j.setSlideWidth();
j.slideTo(k)
};
var a=function(n,k){if(k){h=0
}var m=n.height();
if(m>h){h=m;
var l=n.parents(".nike-cq-product-launch-hero-slideshow-component");
l.height(h+40);
l.find(".nike-cq-product-launch-hero-slideshow-slides").height(h)
}};
f(function(){e();
if(f(".nike-cq-product-launch-hero .nike-cq-product-launch-hero-slideshow-component").length){d()
}});
return{videosInit:function(){e()
},slideshowInit:function(){d()
}}
});
nike.cq.define("nike.cq.NikeCom.ProductLaunchBody",["jquery","nike.cq.UI.VideoPlayingElement"],function(c,b){var a=function(){b(".nike-cq-product-launch-body-video .video-thumbnail")
};
c(function(){if(c(".nike-cq-product-launch-body-video").length){a()
}});
return{init:function(){a()
}}
});
nike.cq.define("nike.cq.NikeCom.TeamSelector",["jquery","nike.cq.Utils","nike.cq.UI.Component.LiquidCarousel"],function(c,b,e){var a=function(i){var j=c(".nike-cq-team-selector-tooltip");
var h=200;
if(j.length<1){j=c('<div class="nike-cq-team-selector-tooltip"><div class="nike-cq-team-selector-tooltip-content"></div><div class="nike-cq-team-selector-tooltip-content-arrow"></div></div>').appendTo("body").hide()
}var k;
function g(o,l){j.find(".nike-cq-team-selector-tooltip-content").html(o);
var m=j.width();
var n=l.offset();
j.css({left:n.left,top:n.top,"margin-left":parseInt(-(m-l.width())/2)+"px"});
j.fadeIn("fast")
}function f(){j.hide()
}i.delegate(".nike-cq-team-selector-link-item",{mouseenter:function(){var l=c(this),m=l.find("img").attr("alt");
k=setTimeout(function(){g(m,l)
},h)
},mouseleave:function(l){if(k){clearTimeout(k);
k=null
}f()
}})
};
var d=function(){var i=i||c("body");
var h=400;
var f="initialized";
var g=b.detectLeftNav("both")?1229:960;
if(i.data("cmsMode")!=="EDIT"){c(".nike-cq-team-selector-module").each(function(){var k=c(this),j=k.find(".nike-cq-section-team-selector").data("open"),o=k.find(".nike-cq-team-selector-reference"),s=k.find(".nike-cq-team-selector-component"),p=k.find(".nike-cq-team-selector-subtitle-line-1"),l=k.find(".nike-cq-team-selector-tab"),n=k.data(f);
if(n){return
}if(j){p.addClass("open")
}else{o.hide()
}if(s){var m={tabContainer:l.parent(".nike-cq-team-selector-tab-container")};
var r=new e(s,m);
a(r.resourceEl)
}l.click(function(){o.slideToggle(h);
p.toggleClass("open")
});
var t=k.closest(".nike-cq-p1").find(".nike-cq-p1-reference-component");
k.closest(".nike-cq-container").css("padding-top","0px");
function q(){if(c(window).width()<=g){t.removeClass("nike-cq-team-selector-p1-module-fixed-height");
t.addClass("nike-cq-team-selector-p1-module-fixed-height-short")
}else{t.addClass("nike-cq-team-selector-p1-module-fixed-height");
t.removeClass("nike-cq-team-selector-p1-module-fixed-height-short")
}}q();
var u=null;
c(window).resize(function(){if(u){clearTimeout(u)
}u=setTimeout(q,50)
});
k.data(f,true)
})
}};
c(d);
return{init:d}
});
nike.cq.define("nike.cq.NikeCom.Iframe",["jquery"],function(g){var e,f,h,c=undefined,k=undefined,d=undefined;
function a(l){c=e.contents();
k=c.find("html:first");
d=c.find("body:first");
if(c.length>0&&c.get(0).readyState==="complete"){k.css("height","auto");
d.css("height","auto");
if(d.length>0){f=d.height()
}else{f=c.height()
}if(f>0){e.height(f)
}}setTimeout(function(){window.requestAnimationFrame(a)
},1000)
}function i(){h=e.width();
e.width(h-1);
e.removeAttr("style")
}function b(){var m;
try{c=e.contents();
m=true
}catch(l){m=false
}return m
}function j(){e=g("#iframe-container");
if(e.length===0||!b()){return
}window.requestAnimationFrame(a);
setTimeout(i,3000)
}g(function(){j()
});
return{init:j}
});
nike.cq.ns("nike.cq.NikeCom");
nike.cq.require(["nike.cq.PES.leftNavigation","nike.cq.NikeCom.TeamSelector","nike.cq.PES.ContentGrid","nike.cq.PES.Notification","nike.cq.initializer"],function(){var a=Array.prototype.slice.call(arguments);
nike.cq.NikeCom.reload=function(){for(var b=0;
b<a.length;
++b){if(typeof a[b].init==="function"){a[b].init()
}else{if(typeof a[b]==="function"){a[b]()
}}}}
});