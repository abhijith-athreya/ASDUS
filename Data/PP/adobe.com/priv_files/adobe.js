(function(){var a=$("div[data-seed-gocart]");
if(a.length>0){Adobe.GoCart={debug:function(b){if(Adobe.GoCart.searchURL("debug")){console.log(b)
}},exists:function(c,d){var b=false;
if(d){b=c&&c.length
}else{b=typeof c!="undefined"&&c!=null&&c!=""
}return b
},searchURL:function(b){return(new RegExp("[?&]"+encodeURIComponent(b)+"=([^&]*)")).exec(location.search)
},siteCatalyst:function(){if(Adobe.GoCart.exists(window.SiteCatalyst)){SiteCatalyst.gid=Adobe.GoCart.Gid[1];
SiteCatalyst.gtoken=Adobe.GoCart.Gtoken[1]
}},setGid:function(){if(Adobe.GoCart.exists(Adobe.GoCart.publicGid)){Adobe.GoCart.publicGid.text(Adobe.GoCart.Gid[1]);
Adobe.GoCart.swapProductMsg(Adobe.GoCart.publicGid)
}},productNames:function(){var b=decodeURIComponent(Adobe.GoCart.Product[1].replace(/\+/g," ")),c="%PRODUCT%",e="",d="";
if(Adobe.GoCart.exists(b)&&Adobe.GoCart.singleProduct.text().indexOf(c)>=0&&b.indexOf(",")==-1){Adobe.GoCart.debug(['Adobe.GoCart.productNames: found "replace" text:',Adobe.GoCart.singleProduct.text().indexOf(c)]);
e=Adobe.GoCart.singleProduct.text().replace(c,b);
d=Adobe.GoCart.singleProductInfo.text().replace(c,b);
if(Adobe.GoCart.exists(e)){Adobe.GoCart.debug(["Adobe.GoCart.productNames: replacing text:",e]);
Adobe.GoCart.singleProduct.text(e)
}if(Adobe.GoCart.exists(d)){Adobe.GoCart.debug(["Adobe.GoCart.productNames: replacing info:",d]);
Adobe.GoCart.singleProductInfo.text(d)
}Adobe.GoCart.swapProductMsg(Adobe.GoCart.singleProduct);
Adobe.GoCart.swapProductMsg(Adobe.GoCart.singleProductInfo)
}else{Adobe.GoCart.swapProductMsg(Adobe.GoCart.multiProduct);
Adobe.GoCart.swapProductMsg(Adobe.GoCart.multiProductInfo)
}},swapProductMsg:function(b){Adobe.GoCart.debug(["Adobe.GoCart.swapProductMsg: show.length",b]);
if(b.length>0){b.show()
}},swapLinks:function(){if(Adobe.GoCart.exists(Adobe.GoCart.More)){Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: found",Adobe.GoCart.More]);
$.each(Adobe.GoCart.More,function(c,b){var d=$(b).attr("href"),e="";
if(d.indexOf("redirectTo")>=0){Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: found redirectTo",d]);
d=decodeURIComponent(d)
}if(d.indexOf("?")>=0){Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: found params in the link",d.split("?")[1]]);
e=location.search+"&"+d.split("?")[1];
d=d.split("?")[0];
Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: curLink is now:",d])
}else{e=location.search;
Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: found no params, appending location.search",e])
}$(b).attr("href",d+e);
Adobe.GoCart.debug(["Adobe.GoCart.swapLinks: final link is",$(b).attr("href")])
})
}},sortSerials:function(c,d){var b=[];
$.each(c,function(e,f){Adobe.GoCart.debug(["sortSerials: key",e]);
Adobe.GoCart.debug(["sortSerials: val",f]);
Adobe.GoCart.debug(["sortSerials: val[type]",f[d]]);
b.push(f[d])
});
return b
},sortNestedArrays:function(d){var b=[],c;
for(c=0;
c<d.length;
c++){if(Array.isArray(d[c])){b=b.concat(Adobe.GoCart.sortNestedArrays(d[c]))
}else{b.push(d[c])
}}return b
},productInfo:function(b){Adobe.GoCart.Track.HostModified=(typeof b.hostFileModified!="undefined")?b.hostFileModified:"false";
Adobe.GoCart.debug(["Adobe.GoCart.productInfo: hostFileModified",Adobe.GoCart.Track.HostModified]);
Adobe.GoCart.debug(["Adobe.GoCart.productInfo: data",b]);
Adobe.GoCart.Track.Serials=[];
Adobe.GoCart.Track.Products=[];
Adobe.GoCart.Track.ModifiedCode=[];
if(Adobe.GoCart.exists(b)){$.each(b,function(c,d){Adobe.GoCart.debug(["Adobe.GoCart.productInfo $.each: key",c]);
Adobe.GoCart.debug(["Adobe.GoCart.productInfo $.each: val",d]);
if(c==="product"){$.each(d,function(h,i){var j=i.productName,g=Adobe.GoCart.sortSerials(i.serials,"serialNumber"),f=Adobe.GoCart.sortSerials(i.serials,"serialStatus"),l=(Adobe.GoCart.Track.HostModified==="true"||i.codeModified==="true")?'<a href="'+Adobe.GoCart.Modified+'" target="_blank"><i class="fa fa-check"></i></a>':"",k=[j,g,f,l],e="<tr>";
Adobe.GoCart.debug(["serial array",g]);
Adobe.GoCart.debug(["serial status array",f]);
Adobe.GoCart.Track.Serials.push(g);
Adobe.GoCart.Track.Products.push(j);
Adobe.GoCart.Track.ModifiedCode.push(i.codeModified);
$.each(k,function(n,m){Adobe.GoCart.debug(["v:",m]);
if(m.length>1){m=m.toString().replace(new RegExp(",","g"),"<br>")
}e+="<td>"+m+"</td>"
});
e+="</tr>";
Adobe.GoCart.productTable.append(e)
})
}});
Adobe.GoCart.Track.Serials=Adobe.GoCart.sortNestedArrays(Adobe.GoCart.Track.Serials).join();
Adobe.GoCart.Track.Products=Adobe.GoCart.sortNestedArrays(Adobe.GoCart.Track.Products).join();
Adobe.GoCart.Track.ModifiedCode=Adobe.GoCart.sortNestedArrays(Adobe.GoCart.Track.ModifiedCode).join()
}},request:function(c,f){var b=null,e=Adobe.GoCart.Gid[1],d=Adobe.GoCart.Gtoken[1];
if(e!==null&&e!==""&&d!==null&&d!==""){$.ajax({type:"POST",url:c,data:{gid:e,gtoken:d}}).done(function(g){Adobe.GoCart.debug(["Adobe.GoCart.request complete",g]);
b=g
}).fail(function(g,h){Adobe.GoCart.debug(["Adobe.GoCart.request fail:",g,h]);
b=h;
if(typeof f!="undefined"){f(b)
}Adobe.GoCart.showError()
}).always(function(g,h){Adobe.GoCart.debug(["Adobe.GoCart.request:",g,h]);
if(typeof f!="undefined"&&h==="success"){f(b)
}Adobe.GoCart.removeNode(Adobe.GoCart.loading);
return b
})
}},redirect:function(b){Adobe.GoCart.debug(["Adobe.GoCart.redirect:",b]);
if(b=="error"&&typeof Adobe.GoCart.RedirectURL!="undefined"&&Adobe.GoCart.RedirectURL!=""){window.location.assign(Adobe.GoCart.RedirectURL)
}},removeNode:function(b){if(b.length>0){b.remove()
}},showError:function(){var b=Adobe.GoCart.errorMsg.find(".notification-error");
if(b.length>0){b.show()
}}};
Adobe.GoCart.Seed=a.attr("data-seed-gocart");
Adobe.GoCart.Modified=a.attr("data-gocart-modified");
Adobe.GoCart.RedirectURL=a.attr("data-gocart-redirect");
Adobe.GoCart.More=$("a[data-gocart-more]");
Adobe.GoCart.Gid=Adobe.GoCart.searchURL("gid");
Adobe.GoCart.Gtoken=Adobe.GoCart.searchURL("gtoken");
Adobe.GoCart.Product=Adobe.GoCart.searchURL("productname");
Adobe.GoCart.singleProduct=$(".notification-single");
Adobe.GoCart.multiProduct=$(".notification-multi");
Adobe.GoCart.singleProductInfo=$(".notification-single-info");
Adobe.GoCart.multiProductInfo=$(".notification-multi-info");
Adobe.GoCart.productList=$("table[data-gocart-productlist]");
Adobe.GoCart.publicGid=$(".notification-gid");
Adobe.GoCart.loading=Adobe.GoCart.productList.find("[data-gocart-loading]");
Adobe.GoCart.errorMsg=Adobe.GoCart.productList.find("[data-gocart-error]");
Adobe.GoCart.Track={};
Adobe.GoCart.debug(["Adobe.GoCart.Seed:",Adobe.GoCart.Seed]);
Adobe.GoCart.debug(["adobeGoCartTokenUrl:",adobeGoCartTokenUrl]);
Adobe.GoCart.debug(["adobeGoCartValidationUrl:",adobeGoCartValidationUrl]);
if((Adobe.GoCart.exists(Adobe.GoCart.Gid,true))&&(Adobe.GoCart.exists(Adobe.GoCart.Gtoken,true))){if(Adobe.GoCart.exists(adobeGoCartTokenUrl)&&Adobe.GoCart.Seed!=="notification"){Adobe.GoCart.siteCatalyst();
Adobe.GoCart.request(adobeGoCartTokenUrl,Adobe.GoCart.redirect)
}if(Adobe.GoCart.exists(adobeGoCartValidationUrl)&&Adobe.GoCart.Seed==="landing"){Adobe.GoCart.debug(["Pre Check: Adobe.GoCart.Product:",Adobe.GoCart.Product]);
Adobe.GoCart.PostValidation=function(b){Adobe.GoCart.debug(["Ajax Response: data: ",b]);
Adobe.GoCart.removeNode(Adobe.GoCart.errorMsg);
if(Adobe.GoCart.exists(Adobe.GoCart.productList,true)){Adobe.GoCart.debug(["Adobe.GoCart.productList: ",Adobe.GoCart.productList]);
Adobe.GoCart.productTable=Adobe.GoCart.productList.find("tbody");
if(Adobe.GoCart.exists(Adobe.GoCart.productTable,true)){Adobe.GoCart.debug(["Adobe.GoCart.productTable: ",Adobe.GoCart.productTable]);
Adobe.GoCart.productInfo(b)
}document.dispatchEvent(new CustomEvent("gocart-Ready"))
}};
Adobe.GoCart.request(adobeGoCartValidationUrl,Adobe.GoCart.PostValidation)
}if(Adobe.GoCart.exists(Adobe.GoCart.Seed)){if(Adobe.GoCart.exists(Adobe.GoCart.Product)){Adobe.GoCart.debug("Found Adobe.GoCart.Product");
Adobe.GoCart.productNames()
}else{Adobe.GoCart.debug("Adobe.GoCart.Product not found");
Adobe.GoCart.swapProductMsg(Adobe.GoCart.multiProduct);
Adobe.GoCart.swapProductMsg(Adobe.GoCart.multiProductInfo)
}Adobe.GoCart.debug(["Adobe.GoCart.Seed: found:",Adobe.GoCart.Seed]);
Adobe.GoCart.swapLinks();
Adobe.GoCart.setGid()
}}else{Adobe.GoCart.redirect("error")
}}})();
SpecialFormHandler={handleFormSubmit:function(c){var a=jQuery("form#safeHarbor");
var e=a.attr("data-form-action-path");
var d="yes"==a.attr("data-form-special-handling");
var b=function(f){if(f){c.append(":cq_csrf_token",f)
}jQuery.ajax({url:e,processData:false,contentType:false,dataType:"json",type:"POST",data:c}).always(function(g){if(g.redirect&&g.redirect!="#"){window.location.href=g.redirect
}})
};
if(d){jQuery.ajax({url:"/etc/beagle/public/token.json",type:"GET"}).always(function(f){if(f&&f.token){b(f.token)
}})
}else{b()
}}};
var mtwidget=mtwidget||{};
mtwidget.translationClickHandler=function(e,a){if(e){var h=e.getAttribute("data-selector"),b=h?"."+h:"",c=/(.*\/)([^\/\?\.]*)(\.[^\/\?]*|)(\.html)(\?.*|#.*|)/g,d=c.exec(window.location.toString()),j=d[1],f=d[2],g=d[4],i=d[5];
window.location=j+f+b+g+i;
a.preventDefault();
return false
}return true
};
mtwidget.feedbackClickHandler=function(b){var a=$(b).parents("span.translation-feedback-box");
var c=a.parent();
a.hide();
c.find("> span.translation-feedback-done-box").show()
};
mtwidget.processElementAttributeMapping=function(a,c,g){var e=a.attr(c);
var f=false;
if(e&&e.length>0){for(var b=0;
b<g.length;
b++){var d=g[b];
if(e.indexOf(d.original)!=-1){e=e.replace(d.original,d["new"]);
f=true
}}if(f){a.attr(c,e)
}}};
mtwidget.processElementMapping=function(b,e,d){var a=$(b);
for(var c=0;
c<e.length;
c++){mtwidget.processElementAttributeMapping(a,e[c],d)
}};
mtwidget.processMappingTable=function(e,d,c){var a=$.find(e);
if(a&&a.length>0){for(var b=0;
b<a.length;
b++){mtwidget.processElementMapping(a[b],d,c)
}}};
$(document).ready(function(){try{var c=JSON.parse(mtwidget.str_samcap_mapping_json);
var b=c.mapping;
if(b&&b.length>0){mtwidget.processMappingTable("a",["href"],b)
}}catch(a){}try{$(".mtwidget_anchor").click(function(d){return mtwidget.translationClickHandler(this,d)
})
}catch(a){}});