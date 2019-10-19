(function(){var v=this;
var j=v._;
var D={};
var C=Array.prototype,f=Object.prototype,q=Function.prototype;
var m=C.slice,z=C.unshift,c=f.toString,h=f.hasOwnProperty;
var L=C.forEach,o=C.map,E=C.reduce,b=C.reduceRight,a=C.filter,A=C.every,n=C.some,l=C.indexOf,k=C.lastIndexOf,s=Array.isArray,e=Object.keys,F=q.bind;
var M=function(p){return new t(p)
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M
}exports._=M
}else{v._=M
}M.VERSION="1.3.3";
var I=M.each=M.forEach=function(R,Q,P){if(R==null){return
}if(L&&R.forEach===L){R.forEach(Q,P)
}else{if(R.length===+R.length){for(var O=0,p=R.length;
O<p;
O++){if(O in R&&Q.call(P,R[O],O,R)===D){return
}}}else{for(var N in R){if(M.has(R,N)){if(Q.call(P,R[N],N,R)===D){return
}}}}}};
M.map=M.collect=function(P,O,N){var p=[];
if(P==null){return p
}if(o&&P.map===o){return P.map(O,N)
}I(P,function(S,Q,R){p[p.length]=O.call(N,S,Q,R)
});
if(P.length===+P.length){p.length=P.length
}return p
};
M.reduce=M.foldl=M.inject=function(Q,P,p,O){var N=arguments.length>2;
if(Q==null){Q=[]
}if(E&&Q.reduce===E){if(O){P=M.bind(P,O)
}return N?Q.reduce(P,p):Q.reduce(P)
}I(Q,function(T,R,S){if(!N){p=T;
N=true
}else{p=P.call(O,p,T,R,S)
}});
if(!N){throw new TypeError("Reduce of empty array with no initial value")
}return p
};
M.reduceRight=M.foldr=function(Q,P,p,O){var N=arguments.length>2;
if(Q==null){Q=[]
}if(b&&Q.reduceRight===b){if(O){P=M.bind(P,O)
}return N?Q.reduceRight(P,p):Q.reduceRight(P)
}var R=M.toArray(Q).reverse();
if(O&&!N){P=M.bind(P,O)
}return N?M.reduce(R,P,p,O):M.reduce(R,P)
};
M.find=M.detect=function(P,O,N){var p;
y(P,function(S,Q,R){if(O.call(N,S,Q,R)){p=S;
return true
}});
return p
};
M.filter=M.select=function(P,O,N){var p=[];
if(P==null){return p
}if(a&&P.filter===a){return P.filter(O,N)
}I(P,function(S,Q,R){if(O.call(N,S,Q,R)){p[p.length]=S
}});
return p
};
M.reject=function(P,O,N){var p=[];
if(P==null){return p
}I(P,function(S,Q,R){if(!O.call(N,S,Q,R)){p[p.length]=S
}});
return p
};
M.every=M.all=function(P,O,N){var p=true;
if(P==null){return p
}if(A&&P.every===A){return P.every(O,N)
}I(P,function(S,Q,R){if(!(p=p&&O.call(N,S,Q,R))){return D
}});
return !!p
};
var y=M.some=M.any=function(P,O,N){O||(O=M.identity);
var p=false;
if(P==null){return p
}if(n&&P.some===n){return P.some(O,N)
}I(P,function(S,Q,R){if(p||(p=O.call(N,S,Q,R))){return D
}});
return !!p
};
M.include=M.contains=function(O,N){var p=false;
if(O==null){return p
}if(l&&O.indexOf===l){return O.indexOf(N)!=-1
}p=y(O,function(P){return P===N
});
return p
};
M.invoke=function(N,O){var p=m.call(arguments,2);
return M.map(N,function(P){return(M.isFunction(O)?O||P:P[O]).apply(P,p)
})
};
M.pluck=function(N,p){return M.map(N,function(O){return O[p]
})
};
M.max=function(P,O,N){if(!O&&M.isArray(P)&&P[0]===+P[0]){return Math.max.apply(Math,P)
}if(!O&&M.isEmpty(P)){return -Infinity
}var p={computed:-Infinity};
I(P,function(T,Q,S){var R=O?O.call(N,T,Q,S):T;
R>=p.computed&&(p={value:T,computed:R})
});
return p.value
};
M.min=function(P,O,N){if(!O&&M.isArray(P)&&P[0]===+P[0]){return Math.min.apply(Math,P)
}if(!O&&M.isEmpty(P)){return Infinity
}var p={computed:Infinity};
I(P,function(T,Q,S){var R=O?O.call(N,T,Q,S):T;
R<p.computed&&(p={value:T,computed:R})
});
return p.value
};
M.shuffle=function(O){var p=[],N;
I(O,function(R,P,Q){N=Math.floor(Math.random()*(P+1));
p[P]=p[N];
p[N]=R
});
return p
};
M.sortBy=function(O,P,p){var N=M.isFunction(P)?P:function(Q){return Q[P]
};
return M.pluck(M.map(O,function(S,Q,R){return{value:S,criteria:N.call(p,S,Q,R)}
}).sort(function(T,S){var R=T.criteria,Q=S.criteria;
if(R===void 0){return 1
}if(Q===void 0){return -1
}return R<Q?-1:R>Q?1:0
}),"value")
};
M.groupBy=function(O,P){var p={};
var N=M.isFunction(P)?P:function(Q){return Q[P]
};
I(O,function(S,Q){var R=N(S,Q);
(p[R]||(p[R]=[])).push(S)
});
return p
};
M.sortedIndex=function(R,Q,O){O||(O=M.identity);
var p=0,P=R.length;
while(p<P){var N=(p+P)>>1;
O(R[N])<O(Q)?p=N+1:P=N
}return p
};
M.toArray=function(p){if(!p){return[]
}if(M.isArray(p)){return m.call(p)
}if(M.isArguments(p)){return m.call(p)
}if(p.toArray&&M.isFunction(p.toArray)){return p.toArray()
}return M.values(p)
};
M.size=function(p){return M.isArray(p)?p.length:M.keys(p).length
};
M.first=M.head=M.take=function(O,N,p){return(N!=null)&&!p?m.call(O,0,N):O[0]
};
M.initial=function(O,N,p){return m.call(O,0,O.length-((N==null)||p?1:N))
};
M.last=function(O,N,p){if((N!=null)&&!p){return m.call(O,Math.max(O.length-N,0))
}else{return O[O.length-1]
}};
M.rest=M.tail=function(O,p,N){return m.call(O,(p==null)||N?1:p)
};
M.compact=function(p){return M.filter(p,function(N){return !!N
})
};
M.flatten=function(N,p){return M.reduce(N,function(O,P){if(M.isArray(P)){return O.concat(p?P:M.flatten(P))
}O[O.length]=P;
return O
},[])
};
M.without=function(p){return M.difference(p,m.call(arguments,1))
};
M.uniq=M.unique=function(Q,P,O){var p=O?M.map(Q,O):Q;
var N=[];
if(Q.length<3){P=true
}M.reduce(p,function(R,T,S){if(P?M.last(R)!==T||!R.length:!M.include(R,T)){R.push(T);
N.push(Q[S])
}return R
},[]);
return N
};
M.union=function(){return M.uniq(M.flatten(arguments,true))
};
M.intersection=M.intersect=function(N){var p=m.call(arguments,1);
return M.filter(M.uniq(N),function(O){return M.every(p,function(P){return M.indexOf(P,O)>=0
})
})
};
M.difference=function(N){var p=M.flatten(m.call(arguments,1),true);
return M.filter(N,function(O){return !M.include(p,O)
})
};
M.zip=function(){var p=m.call(arguments);
var P=M.max(M.pluck(p,"length"));
var O=new Array(P);
for(var N=0;
N<P;
N++){O[N]=M.pluck(p,""+N)
}return O
};
M.indexOf=function(Q,O,P){if(Q==null){return -1
}var N,p;
if(P){N=M.sortedIndex(Q,O);
return Q[N]===O?N:-1
}if(l&&Q.indexOf===l){return Q.indexOf(O)
}for(N=0,p=Q.length;
N<p;
N++){if(N in Q&&Q[N]===O){return N
}}return -1
};
M.lastIndexOf=function(O,N){if(O==null){return -1
}if(k&&O.lastIndexOf===k){return O.lastIndexOf(N)
}var p=O.length;
while(p--){if(p in O&&O[p]===N){return p
}}return -1
};
M.range=function(R,P,Q){if(arguments.length<=1){P=R||0;
R=0
}Q=arguments[2]||1;
var N=Math.max(Math.ceil((P-R)/Q),0);
var p=0;
var O=new Array(N);
while(p<N){O[p++]=R;
R+=Q
}return O
};
var G=function(){};
M.bind=function d(P,N){var O,p;
if(P.bind===F&&F){return F.apply(P,m.call(arguments,1))
}if(!M.isFunction(P)){throw new TypeError
}p=m.call(arguments,2);
return O=function(){if(!(this instanceof O)){return P.apply(N,p.concat(m.call(arguments)))
}G.prototype=P.prototype;
var R=new G;
var Q=P.apply(R,p.concat(m.call(arguments)));
if(Object(Q)===Q){return Q
}return R
}
};
M.bindAll=function(N){var p=m.call(arguments,1);
if(p.length==0){p=M.functions(N)
}I(p,function(O){N[O]=M.bind(N[O],N)
});
return N
};
M.memoize=function(O,N){var p={};
N||(N=M.identity);
return function(){var P=N.apply(this,arguments);
return M.has(p,P)?p[P]:(p[P]=O.apply(this,arguments))
}
};
M.delay=function(N,O){var p=m.call(arguments,2);
return setTimeout(function(){return N.apply(null,p)
},O)
};
M.defer=function(p){return M.delay.apply(M,[p,1].concat(m.call(arguments,1)))
};
M.throttle=function(O,P){var N,R,S,T,Q,U;
var p=M.debounce(function(){Q=T=false
},P);
return function(){N=this;
R=arguments;
var V=function(){S=null;
if(Q){O.apply(N,R)
}p()
};
if(!S){S=setTimeout(V,P)
}if(T){Q=true
}else{U=O.apply(N,R)
}p();
T=true;
return U
}
};
M.debounce=function(N,P,p){var O;
return function(){var S=this,R=arguments;
var Q=function(){O=null;
if(!p){N.apply(S,R)
}};
if(p&&!O){N.apply(S,R)
}clearTimeout(O);
O=setTimeout(Q,P)
}
};
M.once=function(O){var p=false,N;
return function(){if(p){return N
}p=true;
return N=O.apply(this,arguments)
}
};
M.wrap=function(p,N){return function(){var O=[p].concat(m.call(arguments,0));
return N.apply(this,O)
}
};
M.compose=function(){var p=arguments;
return function(){var N=arguments;
for(var O=p.length-1;
O>=0;
O--){N=[p[O].apply(this,N)]
}return N[0]
}
};
M.after=function(N,p){if(N<=0){return p()
}return function(){if(--N<1){return p.apply(this,arguments)
}}
};
M.keys=e||function(O){if(O!==Object(O)){throw new TypeError("Invalid object")
}var N=[];
for(var p in O){if(M.has(O,p)){N[N.length]=p
}}return N
};
M.values=function(p){return M.map(p,M.identity)
};
M.functions=M.methods=function(O){var N=[];
for(var p in O){if(M.isFunction(O[p])){N.push(p)
}}return N.sort()
};
M.extend=function(p){I(m.call(arguments,1),function(N){for(var O in N){p[O]=N[O]
}});
return p
};
M.pick=function(N){var p={};
I(M.flatten(m.call(arguments,1)),function(O){if(O in N){p[O]=N[O]
}});
return p
};
M.defaults=function(p){I(m.call(arguments,1),function(N){for(var O in N){if(p[O]==null){p[O]=N[O]
}}});
return p
};
M.clone=function(p){if(!M.isObject(p)){return p
}return M.isArray(p)?p.slice():M.extend({},p)
};
M.tap=function(N,p){p(N);
return N
};
function J(P,O,N){if(P===O){return P!==0||1/P==1/O
}if(P==null||O==null){return P===O
}if(P._chain){P=P._wrapped
}if(O._chain){O=O._wrapped
}if(P.isEqual&&M.isFunction(P.isEqual)){return P.isEqual(O)
}if(O.isEqual&&M.isFunction(O.isEqual)){return O.isEqual(P)
}var S=c.call(P);
if(S!=c.call(O)){return false
}switch(S){case"[object String]":return P==String(O);
case"[object Number]":return P!=+P?O!=+O:(P==0?1/P==1/O:P==+O);
case"[object Date]":case"[object Boolean]":return +P==+O;
case"[object RegExp]":return P.source==O.source&&P.global==O.global&&P.multiline==O.multiline&&P.ignoreCase==O.ignoreCase
}if(typeof P!="object"||typeof O!="object"){return false
}var T=N.length;
while(T--){if(N[T]==P){return true
}}N.push(P);
var R=0,p=true;
if(S=="[object Array]"){R=P.length;
p=R==O.length;
if(p){while(R--){if(!(p=R in P==R in O&&J(P[R],O[R],N))){break
}}}}else{if("constructor" in P!="constructor" in O||P.constructor!=O.constructor){return false
}for(var Q in P){if(M.has(P,Q)){R++;
if(!(p=M.has(O,Q)&&J(P[Q],O[Q],N))){break
}}}if(p){for(Q in O){if(M.has(O,Q)&&!(R--)){break
}}p=!R
}}N.pop();
return p
}M.isEqual=function(N,p){return J(N,p,[])
};
M.isEmpty=function(N){if(N==null){return true
}if(M.isArray(N)||M.isString(N)){return N.length===0
}for(var p in N){if(M.has(N,p)){return false
}}return true
};
M.isElement=function(p){return !!(p&&p.nodeType==1)
};
M.isArray=s||function(p){return c.call(p)=="[object Array]"
};
M.isObject=function(p){return p===Object(p)
};
M.isArguments=function(p){return c.call(p)=="[object Arguments]"
};
if(!M.isArguments(arguments)){M.isArguments=function(p){return !!(p&&M.has(p,"callee"))
}
}M.isFunction=function(p){return c.call(p)=="[object Function]"
};
M.isString=function(p){return c.call(p)=="[object String]"
};
M.isNumber=function(p){return c.call(p)=="[object Number]"
};
M.isFinite=function(p){return M.isNumber(p)&&isFinite(p)
};
M.isNaN=function(p){return p!==p
};
M.isBoolean=function(p){return p===true||p===false||c.call(p)=="[object Boolean]"
};
M.isDate=function(p){return c.call(p)=="[object Date]"
};
M.isRegExp=function(p){return c.call(p)=="[object RegExp]"
};
M.isNull=function(p){return p===null
};
M.isUndefined=function(p){return p===void 0
};
M.has=function(N,p){return h.call(N,p)
};
M.noConflict=function(){v._=j;
return this
};
M.identity=function(p){return p
};
M.times=function(P,O,N){for(var p=0;
p<P;
p++){O.call(N,p)
}};
M.escape=function(p){return(""+p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")
};
M.result=function(p,O){if(p==null){return null
}var N=p[O];
return M.isFunction(N)?N.call(p):N
};
M.mixin=function(p){I(M.functions(p),function(N){w(N,M[N]=p[N])
})
};
var x=0;
M.uniqueId=function(p){var N=x++;
return p?p+N:N
};
M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var u=/.^/;
var g={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"};
for(var H in g){g[g[H]]=H
}var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;
var B=/\\(\\|'|r|n|t|u2028|u2029)/g;
var K=function(p){return p.replace(B,function(N,O){return g[O]
})
};
M.template=function(R,Q,O){O=M.defaults(O||{},M.templateSettings);
var P="__p+='"+R.replace(i,function(S){return"\\"+g[S]
}).replace(O.escape||u,function(S,T){return"'+\n_.escape("+K(T)+")+\n'"
}).replace(O.interpolate||u,function(S,T){return"'+\n("+K(T)+")+\n'"
}).replace(O.evaluate||u,function(S,T){return"';\n"+K(T)+"\n;__p+='"
})+"';\n";
if(!O.variable){P="with(obj||{}){\n"+P+"}\n"
}P="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+P+"return __p;\n";
var N=new Function(O.variable||"obj","_",P);
if(Q){return N(Q,M)
}var p=function(S){return N.call(this,S,M)
};
p.source="function("+(O.variable||"obj")+"){\n"+P+"}";
return p
};
M.chain=function(p){return M(p).chain()
};
var t=function(p){this._wrapped=p
};
M.prototype=t.prototype;
var r=function(N,p){return p?M(N).chain():N
};
var w=function(p,N){t.prototype[p]=function(){var O=m.call(arguments);
z.call(O,this._wrapped);
return r(N.apply(M,O),this._chain)
}
};
M.mixin(M);
I(["pop","push","reverse","shift","sort","splice","unshift"],function(p){var N=C[p];
t.prototype[p]=function(){var O=this._wrapped;
N.apply(O,arguments);
var P=O.length;
if((p=="shift"||p=="splice")&&P===0){delete O[0]
}return r(O,this._chain)
}
});
I(["concat","join","slice"],function(p){var N=C[p];
t.prototype[p]=function(){return r(N.apply(this._wrapped,arguments),this._chain)
}
});
t.prototype.chain=function(){this._chain=true;
return this
};
t.prototype.value=function(){return this._wrapped
}
}).call(this);