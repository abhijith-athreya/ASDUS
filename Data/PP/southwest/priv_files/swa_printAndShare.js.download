var SWA=SWA||{};
SWA.printAndShare={KEY_ESCAPE:27,closeExceptions:["icsDiv","swa_printAndShare_content"],filterHidden:false,addCloseException:function addCloseEx(a){if($.isArray(a)){$.each(a,function(b,c){addCloseEx(c)
})
}else{if(typeof a==="string"){if(Array.prototype.indexOf&&SWA.printAndShare.closeExceptions.indexOf(a)===-1){SWA.printAndShare.closeExceptions.push(a)
}else{if(!Array.prototype.indexOf&&$.inArray(a,SWA.printAndShare.closeExceptions)){SWA.printAndShare.closeExceptions.push(a)
}}}}return this
},shouldClose:function(c){var a=(this.filterHidden)?this.closeExceptionFilter:function(){return true
};
var d=true;
if(Array.prototype.every){d=this.closeExceptions.filter(a).every(this.closeExceptionCheck(c))
}else{for(var b=0;
b<this.closeExceptions.length;
b++){if(this.filterHidden&&!this.closeExceptionFilter(this.closeExceptions[b])){continue
}d&=this.closeExceptionCheck(c)(this.closeExceptions[b])
}}return d
},closeExceptionFilter:function(a){return !$("#"+a).is(":hidden")
},closeExceptionCheck:function(a,b){return function(c){if(a.target.id===c){return false
}else{return !pointerWithinObject(a,c)
}}
}};
$(document).ready(function(){var d=$(".swa_printAndShare_link_expandable");
var b=$("#swa_printAndShare_content");
var c=function(){d.attr("aria-expanded","false").removeClass("printAndShare_link_expandable_open");
b.hide()
};
var a=function(){var e=d.offset();
b.show().css({left:e.left+d.parent().width()+27-b.width()+"px",top:e.top+12+"px"});
d.attr("aria-expanded","true").addClass("printAndShare_link_expandable_open");
b.find("a").first().focus()
};
d.click(function(e){e.preventDefault();
if(b.is(":hidden")){a()
}else{c()
}return false
});
$("body").click(function(e){if(SWA.printAndShare.shouldClose(e)){c()
}});
$(".swa_printAndShare_printLink").click(function(){window.print();
return false
});
b.keydown(function(f){if(f.which===SWA.printAndShare.KEY_ESCAPE){c();
d.focus()
}})
});