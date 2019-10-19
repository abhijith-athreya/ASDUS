$(document).ready(function(){$(".swa_jsOnly").show()
});
(function(a){a.fn.vAlign=function(b){return this.each(function(d){var f=a(this);
var c=a(f).height();
var g=a(this).parent().height();
var e=(g-c)/2;
a(f).css("padding-top",e)
})
}
})(jQuery);
(function(a){a.chainclude=function(d,b){var c=function(j,h){if(typeof d.length!="undefined"){if(d.length==0){return a.isFunction(b)?b(h):null
}d.shift();
return a.chainclude.load(d,c)
}for(var g in d){d[g](h);
delete d[g];
var f=0;
for(var e in d){f++
}return(f==0)?a.isFunction(b)?b(h):null:a.chainclude.load(d,c)
}};
a.chainclude.load(d,c)
};
a.chainclude.load=function(d,c){if(typeof d=="object"&&typeof d.length=="undefined"){for(var b in d){return a.include.load(b,c,d[b].callback)
}}d=a.makeArray(d);
a.include.load(d[0],c,null)
};
a.include=function(e,b){var f=a.include.luid++;
var d=function(h,g){if(a.isFunction(h)){h(g)
}if(--a.include.counter[f]==0&&a.isFunction(b)){b()
}};
if(typeof e=="object"&&typeof e.length=="undefined"){a.include.counter[f]=0;
for(var c in e){a.include.counter[f]++
}return a.each(e,function(g,h){a.include.load(g,d,h)
})
}e=a.makeArray(e);
a.include.counter[f]=e.length;
a.each(e,function(){a.include.load(this,d,null)
})
};
a.extend(a.include,{luid:0,counter:[],load:function(b,c,d){b=b.toString();
if(a.include.exist(b)){return c(d)
}if(/.css$/.test(b)){a.include.loadCSS(b,c,d)
}else{if(/.js$/.test(b)){a.include.loadJS(b,c,d)
}else{a.get(b,function(e){c(d,e)
})
}}},loadCSS:function(b,d,e){var c=document.createElement("link");
c.setAttribute("type","text/css");
c.setAttribute("rel","stylesheet");
c.setAttribute("href",""+b);
a("head").get(0).appendChild(c);
a.browser.msie?a.include.IEonload(c,d,e):d(e)
},loadJS:function(b,d,e){var c=document.createElement("script");
c.setAttribute("type","text/javascript");
c.setAttribute("src",""+b);
a.browser.msie?a.include.IEonload(c,d,e):c.onload=function(){d(e)
};
a("head").get(0).appendChild(c)
},IEonload:function(d,b,c){d.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){b(c)
}}
},exist:function(c){var b=false;
a("head script").each(function(){if(/.css$/.test(c)&&this.href==c){return b=true
}else{if(/.js$/.test(c)&&this.src==c){return b=true
}}});
return b
}})
})(jQuery);