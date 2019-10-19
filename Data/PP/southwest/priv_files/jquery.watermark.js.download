(function(e){var c,j="watermark",g="watermarkClass",b="watermarkFocus",h="watermarkSubmit",d="watermarkMaxLength",f="watermarkPassword",m="watermarkText",a=":data("+j+")",i=":text,:password,:search,textarea",l=["Page_ClientValidate"],k=false;
e.extend(e.expr[":"],{search:function(n){return"search"===n.type
},data:function(o,n,q,s){var p,r=/^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(q[3]);
if(r){p=e(o).data(r[1]);
if(p!==c){if(r[2]){p=""+p;
switch(r[2]){case"=":return(p==r[3]);
case"!=":return(p!=r[3]);
case"^=":return(p.slice(0,r[3].length)==r[3]);
case"$=":return(p.slice(-r[3].length)==r[3]);
case"*=":return(p.indexOf(r[3])!==-1)
}}return true
}}return false
}});
e.watermark={version:"3.0.5",options:{className:"watermark",useNative:true},hide:function(n){e(n).filter(a).each(function(){e.watermark._hide(e(this))
})
},_hide:function(q,o){if(q.val()==q.data(m)){q.val("");
if(q.data(f)){if(q.attr("type")==="text"){var p=q.data(f),n=q.parent();
n[0].removeChild(q[0]);
n[0].appendChild(p[0]);
q=p
}}if(q.data(d)){q.attr("maxLength",q.data(d));
q.removeData(d)
}if(o){q.attr("autocomplete","off");
window.setTimeout(function(){q.select()
},0)
}}q.removeClass(q.data(g))
},show:function(n){e(n).filter(a).each(function(){e.watermark._show(e(this))
})
},_show:function(t){var s=t.val(),r=t.data(m),p=t.attr("type");
if(((s.length==0)||(s==r))&&(!t.data(b))){k=true;
if(t.data(f)){if(p==="password"){var q=t.data(f),o=t.parent();
o[0].removeChild(t[0]);
o[0].appendChild(q[0]);
t=q;
t.attr("maxLength",r.length)
}}if((p==="text")||(p==="search")){var n=t.attr("maxLength");
if((n>0)&&(r.length>n)){t.data(d,n);
t.attr("maxLength",r.length)
}}t.addClass(t.data(g));
t.val(r)
}else{e.watermark._hide(t)
}},hideAll:function(){if(k){e.watermark.hide(i);
k=false
}},showAll:function(){e.watermark.show(i)
}};
e.fn.watermark=function(q,n){var p=(typeof(q)==="string"),o;
if(typeof(n)==="object"){o=(typeof(n.className)==="string");
n=e.extend({},e.watermark.options,n)
}else{if(typeof(n)==="string"){o=true;
n=e.extend({},e.watermark.options,{className:n})
}else{n=e.watermark.options
}}if(typeof(n.useNative)!=="function"){n.useNative=n.useNative?function(){return true
}:function(){return false
}
}return this.each(function(){var v=e(this);
if(!v.is(i)){return
}if(v.data(j)){if(p||o){e.watermark._hide(v);
if(p){v.data(m,q)
}if(o){v.data(g,n.className)
}}}else{if(n.useNative.call(this,v)){if(((""+v.css("-webkit-appearance")).replace("undefined","")!=="")&&(v.attr("tagName")!=="TEXTAREA")){if(p){v.attr("placeholder",q)
}return
}}v.data(m,p?q:"");
v.data(g,n.className);
v.data(j,1);
if(v.attr("type")==="password"){var r=v.wrap("<span>").parent();
var u=e(r.html().replace(/type=["']?password["']?/i,'type="text"'));
u.data(m,v.data(m));
u.data(g,v.data(g));
u.data(j,1);
u.attr("maxLength",q.length);
u.focus(function(){e.watermark._hide(u,true)
}).bind("dragenter",function(){e.watermark._hide(u)
}).bind("dragend",function(){window.setTimeout(function(){u.blur()
},1)
});
v.blur(function(){e.watermark._show(v)
}).bind("dragleave",function(){e.watermark._show(v)
});
u.data(f,v);
v.data(f,u)
}else{v.focus(function(){v.data(b,1);
e.watermark._hide(v,true)
}).blur(function(){v.data(b,0);
e.watermark._show(v)
}).bind("dragenter",function(){e.watermark._hide(v)
}).bind("dragleave",function(){e.watermark._show(v)
}).bind("dragend",function(){window.setTimeout(function(){e.watermark._show(v)
},1)
}).bind("drop",function(w){var x=w.originalEvent.dataTransfer.getData("Text");
if(v.val().replace(x,"")===v.data(m)){v.val(x)
}v.focus()
})
}if(this.form){var t=this.form,s=e(t);
if(!s.data(h)){s.submit(e.watermark.hideAll);
if(t.submit){s.data(h,t.submit);
t.submit=(function(x,w){return function(){var y=w.data(h);
e.watermark.hideAll();
if(y.apply){y.apply(x,Array.prototype.slice.call(arguments))
}else{y()
}}
})(t,s)
}else{s.data(h,1);
t.submit=(function(w){return function(){e.watermark.hideAll();
delete w.submit;
w.submit()
}
})(t)
}}}}e.watermark._show(v)
}).end()
};
if(l.length){e(function(){var o,n,p;
for(o=l.length-1;
o>=0;
o--){n=l[o];
p=window[n];
if(typeof(p)==="function"){window[n]=(function(q){return function(){e.watermark.hideAll();
return q.apply(null,Array.prototype.slice.call(arguments))
}
})(p)
}}})
}})(jQuery);