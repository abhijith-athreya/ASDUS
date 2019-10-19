/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
;
!function(b,a){"function"==typeof define&&define.amd?define(a):"object"==typeof exports?module.exports=a:b.fluidvids=a()
}(this,function(){function f(d){return new RegExp("^(https?:)?//(?:"+h.players.join("|")+").*$","i").test(d)
}function b(i,d){return parseInt(i,10)/parseInt(d,10)*100+"%"
}function a(d){if((f(d.src)||f(d.data))&&!d.getAttribute("data-fluidvids")){var e=document.createElement("div");
d.parentNode.insertBefore(e,d),d.className+=(d.className?" ":"")+"fluidvids-item",d.setAttribute("data-fluidvids","loaded"),e.className+="fluidvids",e.style.paddingTop=b(d.height,d.width),e.appendChild(d)
}}function j(){var d=document.createElement("div");
d.innerHTML="<p>x</p><style>"+g+"</style>",c.appendChild(d.childNodes[1])
}var h={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},g=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),c=document.head||document.getElementsByTagName("head")[0];
return h.render=function(){for(var i=document.querySelectorAll(h.selector.join()),d=i.length;
d--;
){a(i[d])
}},h.init=function(i){for(var d in i){h[d]=i[d]
}h.render(),j()
},h
});
(function(c,h,d){function f(){var j=d.location.href;
var k=new RegExp("[?&]lang=(.*)");
return k.exec(j)
}function b(){var j=d.location.href;
var k=new RegExp("\\/([a-zA-Z]{2}(_[a-zA-Z]{2})?)(?:\\/|\\?|$)");
var l=k.exec(j);
if(l&&l.length>1){return l[1]
}return null
}function e(){var j=c(".signed-in_dropdown");
if(j&&j.length>0){return j[0].dataset.profileLanguage
}return null
}function g(){c(".lang-flyout").find("a").click(function(){var j=c(this).data("isoCode");
Cookies.set("aem-lang-preference",j,{expires:365})
})
}function a(){var j=d.location.pathname;
var k=new RegExp("^\\/([a-zA-Z]{2}(_[a-zA-Z]{2})?)\\/");
var l=k.exec(j);
if(l&&l.length>1){d.location=j.substring(l[1].length+1)
}}function i(){g();
var j=f();
var k=Cookies.get("aem-lang-preference");
var m=e();
var l=b();
if(l&&m&&!j&&!k){Cookies.set("aem-lang-preference",m,{expires:365});
if(l!==m){a()
}}}i()
})(jQuery,TwitterAEM,window);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={exports:{},id:e,loaded:false};
a[e].call(d.exports,d,d.exports,c);
d.loaded=true;
return d.exports
}c.m=a;
c.c=b;
c.p="";
return c(0)
})([function(b,a,c){b.exports=c(1)
},function(b,a,d){var c=d(2);
window.trace=function(e){};
window.app=new c()
},function(c,s,d){var a=d(3);
var h=d(4);
var f=d(5);
var b=d(6);
var g=d(7);
var r=d(8);
var i=d(9);
var q=d(13);
var n=d(14);
var j=d(15);
var o=d(16);
var m=d(17);
var k=d(18);
var l=d(19);
var e=d(20);
var p=function(){var z=document.getElementsByClassName("dropdown");
var H=document.getElementsByClassName("nav-drawer");
var G=document.getElementsByClassName("nav-footer");
var I=document.getElementsByClassName("page-transition-container");
var C=document.getElementsByClassName("notification");
var y=document.getElementsByClassName("filter");
var A=[];
var u=document.getElementsByClassName("cd-item");
var x=document.getElementsByClassName("code-snippet");
var D=document.getElementsByClassName("module");
var E=document.querySelectorAll(".billboard.animate");
var J=document.querySelectorAll(".back-to-top");
var v=document.getElementsByClassName("nav-contextual-mobile");
var B=document.querySelectorAll(".equal-heights");
var M=document.getElementsByClassName("upload-button");
if(z.length>0){Array.prototype.forEach.call(z,function(P,O){var N=a(P);
N._public()
})
}if(H.length>0){var L=h();
L._public()
}if(E.length>0){Array.prototype.forEach.call(E,function(O,N){var P=f();
P._public(O)
})
}if(G.length>0){var t=b();
t._public()
}function w(O){var Q=O;
if(Q.length>0){Array.prototype.forEach.call(Q,function(T,S){var R=r(T);
R._public();
A.push(R)
});
document.addEventListener("click",function(V){for(var T=0;
T<A.length;
T++){var S=A[T];
var R=S.getFilterOpened();
var U=S.getEl();
if(R&V.target!==U&&!U.contains(V.target)){S.close()
}}});
var P=document.querySelectorAll(".filtered-modules .module");
var N=i(Q,P,true)
}}w(y);
if(u.length>0){Array.prototype.forEach.call(u,function(P,O){var N=q(P);
N._public()
})
}if(x.length>0){Array.prototype.forEach.call(x,function(O,N){var P=n(O);
P._public()
})
}if(I.length>0){var F=g();
F._public()
}if(D.length>0){var L=j();
L._public()
}if(C.length>0){Array.prototype.forEach.call(C,function(P,O){var N=o(P);
N._public(P)
})
}if(J.length>0){Array.prototype.forEach.call(J,function(P,O){var N=m(P);
N._public()
})
}if(v.length>0){var K=k(v[0]);
K._public()
}if(B.length>0){Array.prototype.forEach.call(B,function(O,N){var P=l();
P._public(O)
})
}if(M.length>0){Array.prototype.forEach.call(M,function(P,O){var N=e(P);
N._public()
})
}fluidvids.init();
return{bindFilters:w}
};
c.exports=p
},function(b,a){function c(d){var f=document.getElementsByClassName("error-message");
function g(){}var e=function(k,h){var i=[];
if(h){var j=h.charAt(0)
}for(;
k&&k!==document;
k=k.parentNode){if(h){if(j==="."){if(k.classList.contains(h.substr(1))){i.push(k)
}}if(j==="#"){if(k.id===h.substr(1)){i.push(k)
}}if(j==="["){if(k.hasAttribute(h.substr(1,h.length-1))){i.push(k)
}}if(k.tagName.toLowerCase()===h){i.push(k)
}}else{i.push(k)
}}if(i.length===0){return null
}else{return i
}};
return{_public:function(){g();
var n=false;
var q=d.getElementsByClassName("title");
var l=d.getElementsByTagName("input")[0];
var t=q[0].getElementsByTagName("span");
var h=d.getElementsByTagName("ul");
var m=h[0].getElementsByTagName("li");
var s=t[0].innerHTML;
var x=false;
var j=!!$(d).closest(".filterable").length;
function v(y){var i=e(d,".dropdown-container");
if(i[0].classList.contains("disabled")){return
}u(d,"closed")
}TwitterAEM.components=TwitterAEM.components||{};
TwitterAEM.components.dropdown=TwitterAEM.components.dropdown||{};
TwitterAEM.components.dropdown.handlers=TwitterAEM.components.dropdown.handlers||{};
TwitterAEM.components.dropdown.handlers.titleSelection=function(i){v(d)
};
q[0].addEventListener("click",TwitterAEM.components.dropdown.handlers.titleSelection);
function r(A){var y=A.parentNode.childNodes;
var B=0;
for(var z=0;
z<y.length;
z++){if(y[z]==A){return B
}if(y[z].nodeType==1){B++
}}return -1
}function w(i){if(i>=0&&i<this.length){return this[i]
}else{return -1
}}for(var o=0;
o<m.length;
o++){m[o].addEventListener("click",p);
if(!j){$(m[o]).on("itemchange",k)
}var p=function(A){var z=this;
if(r(z)!=0&&r(z)!=m.length-1){A.preventDefault();
var i=z.innerHTML;
var B=z.dataset.val;
t[0].innerHTML=i;
l.value=B;
l.setAttribute("checked","checked");
$(l).trigger("change");
u(d,"closed");
q[0].classList.remove("error");
if(i!=s&&x===false){var y=h[0].querySelector(".hidden");
if(y){y.style.display="block"
}x=true
}}};
var k=function(C){var B=this;
if(r(B)!=0&&r(B)!=m.length-1){C.preventDefault();
var E=$(B).offset().top-20,y=$(h).offset().top,i=$(h).scrollTop();
$(h).scrollTop(E-y+i);
var z=B.innerHTML;
var D=B.dataset.val;
t[0].innerHTML=z;
l.value=D;
l.setAttribute("checked","checked");
$(l).trigger("change");
q[0].classList.remove("error");
if(z!=s&&x===false){var A=h[0].querySelector(".hidden");
if(A){A.style.display="block"
}x=true
}}}
}$(d).on("dropdownOpen",function(){var y=$(this);
var i,z="";
y.keypress(function(C){C.preventDefault();
var B=String.fromCharCode(C.which);
if(C.which==32){u(d,"closed")
}if(i){z+=B
}else{z=B
}var A=new RegExp("^"+z,"i");
y.find('li:not(".hidden")').removeClass("active").filter(function(){return A.test($(this).text())
}).first().addClass("active").trigger("itemchange");
i=setTimeout(function(){z="";
i=null
},500)
});
y.on("dropdownClose",function(){y.unbind("keypress")
})
});
document.addEventListener("click",function(i){if(n==true&&i.target!==d&&!d.contains(i.target)){d.classList.add("closed");
n=false;
if(!j){$(d).trigger("dropdownClose")
}}});
function u(y,i){y.classList.toggle(i);
if(n==false){n=true;
if(!j){$(y).trigger("dropdownClose");
$(y).trigger("dropdownOpen")
}}else{n=false
}}}}
}b.exports=c
},function(b,a){function c(d){function e(){}return{_public:function(){e();
var u=document.getElementsByClassName("nav-drawer");
var i=document.getElementsByClassName("masthead");
var n=document.getElementsByClassName("signed-in_dropdown");
var j=document.getElementsByClassName("avatar");
var m=document.getElementsByClassName("nav-drawer-link");
var h=document.getElementsByClassName("search");
var f=document.querySelector(".search input");
var y=document.querySelector(".search-suggestions");
var o=document.getElementById("search-list");
var v=document.getElementById("loader");
var w=document.getElementsByClassName("sticky-cta");
var s=document.querySelector(".nav-contextual-mobile");
var z=document.querySelector(".nav-contextual-mobile .current > a");
var p=false;
var k=false;
var l=false;
var g=[];
if(w.length>0){u[0].classList.add("with-cta");
if(typeof i[0]!=="undefined"){i[0].classList.add("with-cta")
}}function q(){if(typeof v!=="undefined"&&v!==null){v.classList.remove("active")
}if(typeof i[0]!=="undefined"){i[0].classList.remove("animate")
}if(typeof u[0]!=="undefined"){u[0].classList.remove("animate")
}}setTimeout(function(){q()
},1000);
for(var x=0;
x<u.length;
x++){(function(D){var E=u[x].getElementsByClassName("nav-drawer-link")[0];
E.addEventListener("click",function(J){var I=r(this,".nav-drawer");
if(I[0].classList.contains("no-interaction")){return
}else{J.preventDefault();
t(u[D],"active");
t(B,"active")
}return false
});
var B=u[x].getElementsByClassName("nav-icon")[0];
if(typeof B!=="undefined"){B.addEventListener("click",function(I){I.preventDefault();
t(u[D],"active");
t(B,"active");
return false
})
}var A=u[x].getElementsByClassName("avatar")[0];
var H=u[x].getElementsByClassName("signed-in_dropdown")[0];
A.addEventListener("click",function(I){I.preventDefault();
p=true;
t(H,"active");
return false
});
var G=u[x].getElementsByClassName("search")[0];
var C=u[x].getElementsByClassName("search-icon")[0];
var F=0;
if(typeof C!=="undefined"){C.addEventListener("click",function(I){I.preventDefault();
k=true;
G.classList.add("opened");
F++;
f.focus();
return false
})
}document.addEventListener("click",function(I){if(F>1&&f&&f.value!=""){G.submit()
}F++;
if(I.target!==u[D]&&!u[D].contains(I.target)){u[D].classList.remove("active");
if(B){B.classList.remove("active")
}}})
})(x)
}var r=function(D,A){var B=[];
if(A){var C=A.charAt(0)
}for(;
D&&D!==document;
D=D.parentNode){if(A){if(C==="."){if(D.classList.contains(A.substr(1))){B.push(D)
}}if(C==="#"){if(D.id===A.substr(1)){B.push(D)
}}if(C==="["){if(D.hasAttribute(A.substr(1,A.length-1))){B.push(D)
}}if(D.tagName.toLowerCase()===A){B.push(D)
}}else{B.push(D)
}}if(B.length===0){return null
}else{return B
}};
document.addEventListener("click",function(A){if(p==true&&A.target!==j[0]&&!j[0].contains(A.target)&&A.target!==n[0]&&!n[0].contains(A.target)){n[0].classList.remove("active");
p=false
}if(k==true&&A.target!==h[0]&&!h[0].contains(A.target)){f.value="";
h[0].classList.remove("opened");
k=false;
l=false
}});
if(typeof z!=="undefined"&&z!==null){z.addEventListener("click",function(A){A.preventDefault();
t(s,"active");
return false
})
}function t(D,C){if(D.classList){D.classList.toggle(C)
}else{var B=D.className.split(" ");
var A=B.indexOf(C);
if(A>=0){B.splice(A,1)
}else{B.push(C)
}D.className=B.join(" ")
}}}}
}b.exports=c
},function(b,a){function c(d){function e(){}return{_public:function(f){e();
window.setTimeout(function(){f.classList.remove("animate")
},3000)
}}
}b.exports=c
},function(b,a){function c(f){var i=document.getElementsByClassName("language")[0];
var e=document.getElementsByClassName("lang-selection")[0];
var d=document.getElementsByClassName("lang-flyout")[0];
var g=false;
function h(){}return{_public:function(){h();
e.addEventListener("click",function(k){k.preventDefault();
if(g==false){g=true;
i.classList.add("active")
}else{g=false;
i.classList.remove("active")
}return false
});
document.addEventListener("click",function(k){if(g==true&&k.target!==d&&!d.contains(k.target)&&k.target!==e&&!e.contains(k.target)){i.classList.remove("active");
g=false
}});
function j(n,m){if(n.classList){n.classList.toggle(m)
}else{var l=n.className.split(" ");
var k=l.indexOf(m);
if(k>=0){l.splice(k,1)
}else{l.push(m)
}n.className=l.join(" ")
}}}}
}b.exports=c
},function(c,b){function a(h){var e=document.getElementById("loader");
var f=document.getElementById("first");
var d=document.getElementById("second");
var g;
var j=false;
function i(){}return{_public:function(){i();
var m=new XMLHttpRequest();
m.open("GET","page-transition-content-1.html",true);
m.onload=function(){if(this.status>=200&&this.status<400){f.innerHTML=this.response
}else{}};
m.send();
setTimeout(function(){e.classList.add("active")
},2000);
setTimeout(function(){first.classList.add("active");
e.classList.remove("active")
},4500);
k();
d.style.left=g+"px";
f.addEventListener("click",function(n){setTimeout(function(){e.classList.add("active")
},1000);
l()
});
function l(){first.classList.remove("active");
var n=new XMLHttpRequest();
n.open("GET","page-transition-content-2.html",true);
n.onload=function(){if(this.status>=200&&this.status<400){d.innerHTML=this.response
}else{}};
n.send();
setTimeout(function(){f.style.left=-g+"px";
d.style.left="0px";
e.classList.remove("active")
},3000);
setTimeout(function(){info.classList.add("active")
},4000);
j=true
}function k(){g=window.innerWidth;
e.width=g+"px";
if(j==false){d.style.left=g+"px"
}}window.addEventListener("resize",function(n){k()
})
}}
}c.exports=a
},function(b,a){function c(g){var f=[];
var k=null;
var d=null;
var l=null;
var i=null;
var j=false;
function p(){}function o(q){var q=q;
j=false;
k=q.getElementsByClassName("title");
d=q.getElementsByTagName("span");
l=q.getElementsByTagName("ul");
i=q.getElementsByTagName("li")
}function h(){window.addEventListener("resize",function(r){e()
});
k[0].addEventListener("click",function(r){m(g,"closed")
});
function q(u){var s=$(u),t=s.closest(".filter").find(".title span").first(),r=s.siblings("label").first().text();
t.text(r)
}$(g).on("itemchange",'input[type="radio"]',function(){q(this)
});
$(g).on("dropdownOpen",function(){var s=$(this);
var r,t="";
s.keypress(function(w){w.preventDefault();
var v=String.fromCharCode(w.which);
if(w.which==32){m(g,"closed")
}if(r){t+=v
}else{t=v
}var u=new RegExp("^"+t,"i");
s.find("li").removeClass("active").filter(function(){return u.test($(this).find("label").first().text())
}).first().addClass("active").find('input[type="radio"]').prop("checked",true).trigger("itemchange");
r=setTimeout(function(){t="";
r=null
},500)
});
s.on("dropdownClose",function(){s.unbind("keypress")
})
})
}function n(){g.classList.add("closed");
j=false;
$(g).trigger("dropdownClose")
}function m(r,q){r.classList.toggle(q);
if(j==false){j=true;
$(r).trigger("dropdownClose");
$(r).trigger("dropdownOpen")
}else{j=false
}}function e(){}return{_public:function(){o(g);
h()
},getFilterOpened:function(){return j
},getEl:function(){return g
},close:function(){n()
},resize:function(){e()
}}
}b.exports=c
},function(c,b,e){var d=e(10);
var f=e(12);
function a(k,v,A){A=A||false;
var s=[],r=null,p=null,j=3,u=[],C=500,g=false,B=false,D=120,x;
function E(){var L=/^simulate-all-/,K=[],J=[],H=document.getElementsByTagName("input"),I,G;
for(I=0,G=H.length;
I<G;
I+=1){if(L.test(H[I].id)){K.push(H[I]);
J.push(H[I])
}}}function F(i){if(g&&!B&&i===1||!g&&B&&i===2){return true
}return false
}function m(){var i;
if(g&&!B){i=1
}else{if(!g&&B){i=2
}}return i
}function l(){var H=C,G=0,J,K;
function L(O,M,i){var N=m();
setTimeout(function(){if(!F(N)){return
}O.itemEl.style.display="inline-block";
if(A){f(O.itemEl,"no-margin");
if(i%j===0){d(O.itemEl,"no-margin")
}else{d(O.itemEl,"active")
}}},M-50);
setTimeout(function(){if(!F(N)){return
}O.itemEl.style.opacity=1
},M)
}function I(N,i){var M=m();
setTimeout(function(){if(!F(M)){return
}N.itemEl.style.display="none"
},i)
}if(!g&&!B){g=true
}else{if(g&&!B){g=false;
B=true
}else{if(!g&&B){g=true;
B=false
}}}for(J=0;
J<u.length;
J+=1){K=u[J];
K.itemEl.style.opacity=0;
if(K.active){G+=1;
L(K,H,G);
H+=D
}else{I(K,C)
}}}function z(){var H="",M=false,L,I,G,N=function(R){var O=true,i,Q,S,P;
for(L=0;
L<s.length;
L+=1){i=s[L];
Q=true;
if(i.active.length){Q=false;
for(I=0;
I<i.active.length;
I+=1){S=i.active[I];
for(G=0;
G<R.filters.length;
G+=1){P=R.filters[G];
if(P===S){Q=true
}}}if(Q===false){O=false
}}}return O
},K=function(){var Q,P,O;
if(u.length===0){M=true
}for(Q=0;
Q<u.length;
Q+=1){P=u[Q];
O=N(P);
if(O){P.active=true
}else{P.active=false
}if(Q===u.length-1){M=true
}}},J=[];
do{K()
}while(!M);
l();
setTimeout(function(){var i=null;
var O="filterAnimationComplete";
if(typeof window.CustomEvent==="function"){i=new CustomEvent(O)
}else{i=document.createEvent("CustomEvent");
i.initCustomEvent(O,false,false,undefined)
}document.dispatchEvent(i)
},C)
}function y(){var J,I,H,G,K;
for(J=0;
J<s.length;
J+=1){H=s[J];
H.active=[];
for(I=0;
I<H.inputsEl.length;
I+=1){G=H.inputsEl[I];
K=G.getAttribute("value");
if(K!==null&&K!==""&&G.checked){H.active.push(K)
}if(K!==null&&G.checked){$(H.inputsEl[I]).trigger("change")
}}if(H.active.length){H.tracker=0
}}z()
}function n(i){i.addEventListener("change",function(G,H){y()
})
}function h(){var G;
for(G=0;
G<r.length;
G+=1){n(r[G])
}}function t(){var G;
for(G=0;
G<s.length;
G+=1){s[G].active=[]
}z()
}function o(){var i=window.location.hash.substring(1).split(",");
if(i.length>0){i.forEach(function(H){var G=document.getElementById(H);
if(G){G.checked=true
}});
y()
}}function q(){}function w(H){var K,J,G,O,L,I,N,M,P;
r=H;
p=v;
for(K=0;
K<r.length;
K+=1){G=r[K];
s.push({active:[],tracker:false,inputsEl:G.getElementsByTagName("input")})
}for(K=0;
K<p.length;
K+=1){O=p[K];
I=O.dataset.tags;
N=[];
if(typeof I!=="undefined"){M=I.split(",");
M=M.filter(Boolean);
for(J=0;
J<M.length;
J+=1){P=M[J].split("/");
if(P.length>1){L=P[1].split("+")
}if(L.length>1){P[1]=L
}N.concat(L);
Array.prototype.push.apply(N,L)
}N=M
}u.push({active:true,filters:N,itemEl:p[K]})
}E();
o()
}w(k);
h();
return{_public:function(){},resetFilters:function(){t()
},resize:function(){q()
}}
}c.exports=a
},function(c,a,e){var b=e(11);
function d(g,f){if(g.classList){g.classList.add(f)
}else{if(!b(g,f)){g.className+=" "+f
}}}c.exports=d
},function(c,a){function b(e,d){if(e.classList){return e.classList.contains(d)
}else{return !!e.className.match(new RegExp("(\\s|^)"+d+"(\\s|$)"))
}}c.exports=b
},function(c,a,d){var b=d(11);
function e(h,g){if(h.classList){h.classList.remove(g)
}else{if(b(h,g)){var f=new RegExp("(\\s|^)"+g+"(\\s|$)");
h.className=h.className.replace(f," ")
}}}c.exports=e
},function(c,b){function a(e){var f=e.querySelector("h5");
var h=e.querySelectorAll(".cdi-content");
var d=e.querySelectorAll(".arrow-down");
function g(){}return{_public:function(){g();
f.addEventListener("click",function(i){e.classList.toggle("opened");
i.preventDefault()
})
}}
}c.exports=a
},function(b,a){function c(g){var f=g.getElementsByClassName("codelinecopybtn");
var e=g.getElementsByClassName("cs-code");
var d=e[0].getElementsByTagName("code");
function h(){}return{_public:function(){h();
Array.prototype.forEach.call(d,function(r,q){k(r)
});
Array.prototype.forEach.call(f,function(r,q){if(document.queryCommandSupported("copy")){r.addEventListener("click",function(s){m(r)
})
}else{ZeroClipboard.config({swfPath:"/etc/designs/common-twitter/clientlib-site/swf/zeroclipboard.swf",cacheBust:true});
o(r)
}});
var j=g;
Array.prototype.forEach.call(e,function(u,t){var s=j.classList.contains("code-snippet-collapsed");
var q=u.querySelectorAll(".cs-code-line").length;
if(q>16&&!s){u.classList.add("reduced");
u.parentElement.classList.add("grad");
for(var t=16;
t<q;
t++){u.querySelectorAll(".cs-code-line")[t].classList.add("hidden")
}var r=u.parentNode.querySelector(".see");
r.classList.add("active");
r.classList.add("more");
r.addEventListener("click",function(w){if(this.classList.contains("more")){this.getElementsByTagName("span")[0].innerHTML="See Less";
for(var v=16;
v<q;
v++){u.querySelectorAll(".cs-code-line")[v].classList.remove("hidden")
}u.parentElement.classList.remove("grad");
this.classList.remove("more");
this.classList.add("less")
}else{this.getElementsByTagName("span")[0].innerHTML="See More";
for(var v=16;
v<q;
v++){u.querySelectorAll(".cs-code-line")[v].classList.add("hidden")
}this.classList.remove("less");
this.classList.add("more");
u.parentElement.classList.add("grad")
}})
}});
function k(u){var r=l(u,"cs-code");
var v=u.innerHTML;
var q=v.split("\n");
u.style.display="none";
if(u.parentElement.nodeName=="PRE"){u.parentElement.style.display="none"
}for(var t=0;
t<q.length;
t++){var s=t+1;
if(s<10){s="0"+s
}n(s,q[t],r)
}}function n(s,w,r){var u=document.createElement("code");
u.innerHTML=w;
var v=document.createElement("pre");
v.appendChild(u);
var q=document.createElement("div");
q.className="number-line";
q.innerHTML=s;
var t=document.createElement("div");
t.className="cs-code-line";
t.appendChild(q);
t.appendChild(v);
r.appendChild(t)
}function o(t){var v,r,u;
var s;
r="";
v=t.parentNode.previousElementSibling.querySelectorAll("div.cs-code-line code");
if(v.length>0){for(s=0;
s<v.length;
s++){r=r+v[s].textContent+" \n"
}var q=new ZeroClipboard(t);
q.on("ready",function(w){q.on("copy",function(x){x.clipboardData.setData("text/plain",r)
});
q.on("aftercopy",function(x){})
});
q.on("error",function(w){ZeroClipboard.destroy()
})
}}function m(w){var s,q,t;
var v;
q="";
s=w.parentNode.previousElementSibling.querySelectorAll("div.cs-code-line code");
if(s.length>0){for(v=0;
v<s.length;
v++){q=q+s[v].textContent+" \n"
}var y=Math.floor(new Date().getTime()/1000);
var r="cs_code_copy_"+y;
t=document.createElement("textarea");
t.id=r;
t.style.position="fixed";
t.style.opacity=0;
t.value=q;
document.body.appendChild(t);
document.getElementById(r).focus();
document.getElementById(r).select();
try{var x=document.execCommand("copy")
}catch(u){}finally{document.body.removeChild(t)
}}}function l(r,q){while((r=r.parentElement)&&!r.classList.contains(q)){}return r
}if(g.classList.contains("code-snippet-collapsed")){var i=g.getElementsByClassName("close-snippet")[0];
var p=g.getElementsByTagName("h5")[0];
i.addEventListener("click",function(q){g.classList.toggle("opened")
});
p.addEventListener("click",function(q){g.classList.toggle("opened")
})
}}}
}b.exports=c
},function(c,a){function b(d){function e(){}return{_public:function(){e()
}}
}c.exports=b
},function(b,a){function c(d){function e(){}return{_public:function(){e();
d.addEventListener("click",function(f){f.preventDefault();
this.classList.remove("active");
return false
})
}}
}b.exports=c
},function(c,a){function b(d){function e(){}return{_public:function(){e();
g();
d.addEventListener("click",function(j){var i=document.documentElement.scrollTop>0?document.documentElement:document.body;
f(i,0,1000)
});
var h=null;
d.addEventListener("mouseover",function(j){var i=document.documentElement.scrollTop>0?document.documentElement.scrollTop:document.body.scrollTop;
if(i>400){clearTimeout(h);
d.classList.add("reveal")
}else{d.classList.remove("reveal")
}});
document.addEventListener("scroll",function(){clearTimeout(h);
var i=document.documentElement.scrollTop>0?document.documentElement.scrollTop:document.body.scrollTop;
if(i>400){d.classList.add("reveal");
g()
}else{d.classList.remove("reveal")
}h=setTimeout(function(){d.classList.remove("reveal")
},500)
});
function g(){var j=document.querySelector("footer");
var i=d.querySelector("button");
if(i.getBoundingClientRect().top>=j.getBoundingClientRect().top-200){i.classList.add("absolute")
}if(j.getBoundingClientRect().top-window.innerHeight>10){i.classList.remove("absolute")
}}function f(k,p,m){var o=k.scrollTop,n=p-o,l=0,i=20;
var j=function(){l+=i;
var q=Math.easeOutQuart(l,o,n,m);
k.scrollTop=q;
if(l<m){setTimeout(j,i)
}};
j()
}Math.easeOutQuart=function(j,i,l,k){j/=k;
j--;
return -l*(j*j*j*j-1)+i
}
}}
}c.exports=b
},function(c,b){function a(d){function e(){}return{_public:function(){e();
var f=document.getElementsByClassName("transparent");
var h=function(l,i){var j=[];
if(i){var k=i.charAt(0)
}for(;
l&&l!==document;
l=l.parentNode){if(i){if(k==="."){if(l.classList.contains(i.substr(1))){j.push(l)
}}if(k==="#"){if(l.id===i.substr(1)){j.push(l)
}}if(k==="["){if(l.hasAttribute(i.substr(1,i.length-1))){j.push(l)
}}if(l.tagName.toLowerCase()===i){j.push(l)
}}else{j.push(l)
}}if(j.length===0){return null
}else{return j
}};
var g=h(d,".t-row");
if(g!==null){g[0].classList.add("t-row-contextual");
if(f.length>0){g[0].classList.add("transp")
}}}}
}c.exports=a
},function(c,a){function b(d){function e(){}return{_public:function(i){e();
var f;
var g=function(){var k=0;
for(var l=0;
l<f.length;
l++){var j=f[l].offsetHeight;
if(j>k){k=j
}}return k
};
var h=function(){for(var k=0;
k<f.length;
k++){if(!f[k].classList.contains("t06-timeline")){f[k].style.height="auto"
}else{f[k].style.height="600px"
}}if(window.innerWidth>900){var j=g();
for(var k=0;
k<f.length;
k++){f[k].style.height=j+"px"
}}};
f=i.querySelectorAll(".comp-wrapper");
if(f.length>1){window.addEventListener("resize",h);
h()
}window.onload=function(){h()
}
}}
}c.exports=b
},function(c,a){function b(d){function e(){}return{_public:function(){e();
var g=d.querySelector(".input-file"),i=g.nextElementSibling,l=i.textContent,f=i.querySelector("span"),k=i.querySelector(".upload-button-close"),h=d.querySelector(".error-message");
g.addEventListener("change",function(m){var n=j();
k.classList.remove("hide");
if(n){f.textContent=n;
i.classList.add("file-added");
if(h){h.classList.remove("active");
i.classList.remove("error")
}}else{f.textContent=l;
i.classList.remove("file-added")
}});
k.addEventListener("click",function(m){m.preventDefault();
g.value=null;
f.textContent=l;
i.classList.remove("file-added");
k.classList.add("hide")
});
function j(){var m;
m=g.value.split("\\").pop();
return m
}}}
}c.exports=b
}]);
(function(c,a,b){a.components.initUserProfile=function(){var d=c(".signed-in_dropdown");
if(d.length>0){a.user={screenName:d.data("profileScreenName"),fullName:d.data("profileFullName"),email:d.data("profileEmail"),location:d.data("profileLocation"),language:d.data("profileLanguage")}
}};
c(document).ready(function(){var e=c(".sign-in a");
var d="https://twitter.com/login?redirect_after_login="+b.location.href;
e.attr("href",d);
var f="https://twitter.com/logout?redirect_after_logout="+b.location.href;
c(".signed-in_dropdown a[href='https://twitter.com/logout']").attr("href",f)
})
})(jQuery,TwitterAEM,window);
(function(c,a,b){a.components.modifyTweets=function(){intervalHandle=setInterval(function(){var d=c(".t08-tweet").not(".g-modified");
if(d.length===0){clearInterval(intervalHandle)
}d.each(function(){var m=c(this),k=m.find(".twitter-tweet"),j=k.contents().find("blockquote.tweet").last(),i="",e="",g="",l="",f="",h="";
j.find('.customisable[title*="cards.twitter.com"]').addClass("u-hiddenVisually");
j.find(".Button--smallGray").addClass("u-hiddenVisually");
if(m.parents(".node-type-blog").length!==1||m.hasClass("g-mask-date")){i=j.find(".dateline a");
i.text("View on Twitter");
m.addClass("g-modified")
}if(m.hasClass("promoted-tweet")){h=m.hasClass("promoted-tweet-political")?"promoted-political.png":"promoted.png";
e=j.find(".TweetAuthor-link").attr("href");
g=m.find(".TweetAuthor-name").text();
if(!g){if(j.find(".header .full-name .p-name")[0]){g=j.find(".header .full-name .p-name").text()
}else{g=j.find(".Identity-name").text()
}}l="Promoted by "+g;
f='<div class="context">';
f+='<span class="metadata with-icn">';
f+='<img class="promoted-img" src="/etc/designs/common-twitter/clientlib-site/imgs/'+h+'" />';
f+='<a href="'+e+'" class="js-action-profile-promoted js-user-profile-link js-promoted-badge">'+l+"</a>";
f+="</span>";
f+="</div>";
if(j.find(".footer")[0]){k.css("height",k.height()+15+"px");
j.find(".footer").prepend(f);
j.find(".footer .js-action-profile-promoted").css("padding-left","5px")
}else{k.css("height",k.height()+22+"px");
j.find(".Tweet-metadata").prepend(f);
j.find(".Tweet-metadata .js-action-profile-promoted").css("padding-left","5px")
}m.addClass("g-modified")
}})
},3000)
};
jQuery(document).ready(function(){a.components.modifyTweets()
})
})(jQuery,TwitterAEM,window);
(function(c,a,b){c(document).ready(function(){a.components.initUserProfile();
googleAnalyticsInit()
})
})(jQuery,TwitterAEM,window);
var onLoadRecaptchaCallBack=function(){$(".g-recaptcha").each(function(b,c){var a=$(c).data("sitekey");
if(grecaptcha){var d=grecaptcha.render(c,{sitekey:a});
$(c).attr("data-widget-id",d)
}})
};
var googleAnalyticsInit=function(){(function(d,e,j,h,f,c,b){d.GoogleAnalyticsObject=f;
d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)
},d[f].l=1*new Date();
c=e.createElement(j),b=e.getElementsByTagName(j)[0];
c.async=1;
c.src=h;
b.parentNode.insertBefore(c,b)
})(window,document,"script","https://g.twimg.com/googleanalytics/analytics.js","ga");
ga("create","UA-30775-92","auto");
ga("send","pageview")
};