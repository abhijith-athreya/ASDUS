!function(d,c){"function"==typeof define&&define.amd?define(["jquery"],c):c("object"==typeof exports?require("jquery"):d.jQuery)
}(this,function(j){function i(y){var x,w,v,u,t,s,r,q={};
for(t=y.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),r=0,s=t.length;
s>r&&(w=t[r],-1===w.search(/^(http|https|ftp):\/\//)&&-1!==w.search(":"));
r++){x=w.indexOf(":"),v=w.substring(0,x),u=w.substring(x+1),u||(u=void 0),"string"==typeof u&&(u="true"===u||("false"===u?!1:u)),"string"==typeof u&&(u=isNaN(u)?u:+u),q[v]=u
}return null==v&&null==u?y:q
}function p(q){q=""+q;
var h,v,u,t=q.split(/\s+/),s="50%",r="50%";
for(u=0,h=t.length;
h>u;
u++){v=t[u],"left"===v?s="0%":"right"===v?s="100%":"top"===v?r="0%":"bottom"===v?r="100%":"center"===v?0===u?s="50%":r="50%":0===u?s=v:r=v
}return{x:s,y:r}
}function o(a,f){var e=function(){f(this.src)
};
j('<img src="'+a+'.gif">').load(e),j('<img src="'+a+'.jpg">').load(e),j('<img src="'+a+'.jpeg">').load(e),j('<img src="'+a+'.png">').load(e)
}function n(q,h,g){if(this.$element=j(q),"string"==typeof h&&(h=i(h)),g?"string"==typeof g&&(g=i(g)):g={},"string"==typeof h){h=h.replace(/\.\w*$/,"")
}else{if("object"==typeof h){for(var b in h){h.hasOwnProperty(b)&&(h[b]=h[b].replace(/\.\w*$/,""))
}}}this.settings=j.extend({},l,g),this.path=h;
try{this.init()
}catch(a){if(a.message!==k){throw a
}}}var m="vide",l={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},k="Not implemented";
n.prototype.init=function(){var v,u,t=this,s=t.path,r=s,q="",h=t.$element,f=t.settings,d=p(f.position),c=f.posterType;
u=t.$wrapper=j("<div>").addClass(f.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":f.bgColor,"background-repeat":"no-repeat","background-position":d.x+" "+d.y}),"object"==typeof s&&(s.poster?r=s.poster:s.mp4?r=s.mp4:s.webm?r=s.webm:s.ogv&&(r=s.ogv)),"detect"===c?o(r,function(b){u.css("background-image","url("+b+")")
}):"none"!==c&&u.css("background-image","url("+r+"."+c+")"),"static"===h.css("position")&&h.css("position","relative"),h.prepend(u),"object"==typeof s?(s.mp4&&(q+='<source src="'+s.mp4+'.mp4" type="video/mp4">'),s.webm&&(q+='<source src="'+s.webm+'.webm" type="video/webm">'),s.ogv&&(q+='<source src="'+s.ogv+'.ogv" type="video/ogg">'),v=t.$video=j("<video>"+q+"</video>")):v=t.$video=j('<video><source src="'+s+'.mp4" type="video/mp4"><source src="'+s+'.webm" type="video/webm"><source src="'+s+'.ogv" type="video/ogg"></video>');
try{v.prop({autoplay:f.autoplay,loop:f.loop,volume:f.volume,muted:f.muted,defaultMuted:f.muted,playbackRate:f.playbackRate,defaultPlaybackRate:f.playbackRate})
}catch(a){throw new Error(k)
}v.css({margin:"auto",position:"absolute","z-index":-1,top:d.y,left:d.x,"-webkit-transform":"translate(-"+d.x+", -"+d.y+")","-ms-transform":"translate(-"+d.x+", -"+d.y+")","-moz-transform":"translate(-"+d.x+", -"+d.y+")",transform:"translate(-"+d.x+", -"+d.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+m,function(){t.resize()
}).one("playing."+m,function(){v.css({visibility:"visible",opacity:1}),u.css("background-image","none")
}),h.on("resize."+m,function(){f.resizing&&t.resize()
}),u.append(v)
},n.prototype.getVideoObject=function(){return this.$video[0]
},n.prototype.resize=function(){if(this.$video){var q=this.$wrapper,h=this.$video,v=h[0],u=v.videoHeight,t=v.videoWidth,s=q.height(),r=q.width();
r/t>s/u?h.css({width:r+2,height:"auto"}):h.css({width:"auto",height:s+2})
}},n.prototype.destroy=function(){delete j[m].lookup[this.index],this.$video&&this.$video.off(m),this.$element.off(m).removeData(m),this.$wrapper.remove()
},j[m]={lookup:[]},j.fn[m]=function(a,f){var e;
return this.each(function(){e=j.data(this,m),e&&e.destroy(),e=new n(this,a,f),e.index=j[m].lookup.push(e)-1,j.data(this,m,e)
}),this
},j(document).ready(function(){var a=j(window);
a.on("resize."+m,function(){for(var e,g=j[m].lookup.length,f=0;
g>f;
f++){e=j[m].lookup[f],e&&e.settings.resizing&&e.resize()
}}),a.on("unload."+m,function(){return !1
}),j(document).find("[data-"+m+"-bg]").each(function(f,s){var r=j(s),q=r.data(m+"-options"),h=r.data(m+"-bg");
r[m](h,q)
})
})
});