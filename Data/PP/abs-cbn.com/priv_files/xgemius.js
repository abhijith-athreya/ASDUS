// (c) by Gemius SA - gemius main script
// gAudience
// ver. 3.9

if (typeof gemius_hcconn == "undefined") {
	gemius_hcconn = {
		lsdata : "",
		fpdata : "",
		event_identifier : null,
		current_receiver : null,
		waiting_for_fpdata : 1,
		waiting_for_lsdata : 1,
		params_ready_called : 0,
		waiting_on_prerender : 1,
		closing : 0,
		visapi_s : "",
		visapi_h : "",
		visapi_c : "",
		loadinit : 0,
		fto : null,
		addto : null,
		sto : null,
		ltime : 0,
		lsgetframe : null,
		sonar_data : [],
		timerevents : [],
		requests : [],
		images : [],
		state : 0,
		flashv : "",
		ssl : (document.location && document.location.protocol && document.location.protocol=='https:')?1:0,
		hc : (typeof gemius_hitcollector != 'undefined')?gemius_hitcollector:(typeof pp_gemius_hitcollector != 'undefined')?pp_gemius_hitcollector:'gamena.hit.gemius.pl',
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		remove_script : function(elementid,url) {
			var el = document.getElementById(elementid);
			if (el) {
				if (url) {
					try {
						if (typeof gemius_notify != 'undefined') {
							gemius_notify(url);
						} else if (typeof pp_gemius_notify != 'undefined') {
							pp_gemius_notify(url);
						}
					} catch (e) {}
				}
				try {
					el.parentNode.removeChild(el);
				} catch(e) {}
			}
		},
		append_script : function(url,finishedfn,notify) {
			var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
			try {
				var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0];
				if (finishedfn!=null) {
					gemius_hcconn.add_event(gt,'load',finishedfn);
					gemius_hcconn.add_event(gt,'error',finishedfn);
					gemius_hcconn.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') finishedfn(); });
				}
				gemius_hcconn.add_event(gt,'load',function() { gemius_hcconn.remove_script(rndid,notify?url:null); });
				gemius_hcconn.add_event(gt,'error',function() { gemius_hcconn.remove_script(rndid,null); });
				gemius_hcconn.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') gemius_hcconn.remove_script(rndid,notify?url:null); });
				gt.setAttribute('id',rndid);
				gt.setAttribute('defer','defer');
				gt.setAttribute('async','async');
				gt.setAttribute('type','text/javascript');
				gt.setAttribute('src',url);
				if (s) {
					s.parentNode.insertBefore(gt,s);
				} else if (document.body) {
					document.body.appendChild(gt);
				}
			} catch (e) {}
		},
		xdot_loaded : function() {
			if (typeof gemius_open=='undefined') {
				gemius_hcconn.state = 0;
			}
		},
		sendhits : function(lsadd) {
			var i,j;
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
					var robj = gemius_hcconn.requests[i];
					var url = (gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/_';
					var d = new Date().getTime();
					var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
					var params = '&ltime='+gemius_hcconn.ltime+'&lsdata='+gemius_hcconn.lsdata+'&fpdata='+gemius_hcconn.fpdata+'&vis='+vis;
					if (gemius_hcconn.ssl==0 && lsadd!==null) {
						params += '&lsadd='+lsadd;
					}
					if (gemius_hcconn.closing) {
						var images_l = gemius_hcconn.images.length;
						url += (d+i)+'/redot.gif?l='+robj.vers+robj.req+params;
						gemius_hcconn.images[images_l]=new Image();
						gemius_hcconn.images[images_l].src = url;
					} else if (gemius_hcconn.state>0 || robj.allowaddscript==0 || typeof gemius_open != 'undefined') {
						url += (d+i)+'/redot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.append_script(url,null,1);
					} else {
						url += (d+i)+'/rexdot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.state = 1;
						gemius_hcconn.append_script(url,gemius_hcconn.xdot_loaded,1);
					}
				}
				gemius_hcconn.requests = [];
			}
		},
		latehits : function() {
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				if (gemius_hcconn.closing==0 && gemius_hcconn.ssl==0 && gemius_hcconn.lsdata!='' && gemius_hcconn.lsdata[0]!='-' && gemius_hcconn.lsgetframe) {
					if (gemius_hcconn.addto==null) {
						try {
							gemius_hcconn.lsgetframe.contentWindow.postMessage("_xx_gemius_get_add_xx_","*");
							gemius_hcconn.addto = setTimeout(gemius_hcconn.lsaddto,250);
						} catch (e) {
							gemius_hcconn.sendhits(null);
						}
					}
				} else {
					gemius_hcconn.sendhits(null);
				}
			}
		},
		lsaddto : function() {
			if (gemius_hcconn.addto!=null) {
				gemius_hcconn.addto = null;
				gemius_hcconn.sendhits(null);
			}
		},
		paramsready : function() {
			if (gemius_hcconn.params_ready_called==0 && gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0) {
				var data = {'lsdata' : gemius_hcconn.lsdata, 'fpdata' : gemius_hcconn.fpdata};
				gemius_hcconn.params_ready_called = 1;
				try {
					if (typeof gemius_params_ready != 'undefined') {
						gemius_params_ready(data);
					} else if (typeof pp_gemius_params_ready != 'undefined') {
						pp_gemius_params_ready(data);
					}
				} catch (e) {}
			}
		},
		visibilitychanged : function() {
			if (document[gemius_hcconn.visapi_s]!='prerender' && gemius_hcconn.waiting_on_prerender) {
				gemius_hcconn.waiting_on_prerender = 0;
				setTimeout(gemius_hcconn.latehits,100);
			}
			gemius_hcconn.sonar_update();
		},
		unloadhit : function(robj,nr) {
			var url = (gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/_';
			var d = new Date().getTime();
			var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
			var params = '&vis='+vis;
			params += '&fpdata='+((gemius_hcconn.waiting_for_fpdata==0)?gemius_hcconn.fpdata:"-UNLOAD");
			params += '&lsdata='+((gemius_hcconn.waiting_for_lsdata==0)?(gemius_hcconn.lsdata+'&ltime='+gemius_hcconn.ltime):"-UNLOAD");

			if (gemius_hcconn.closing) {
				var images_l = gemius_hcconn.images.length;
				url += (d+nr)+'/redot.gif?l='+robj.vers+params+robj.req;
				gemius_hcconn.images[images_l]=new Image();
				gemius_hcconn.images[images_l].src = url;
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+robj.req+params;
				gemius_hcconn.append_script(url,null,1);
			}
		},
		unload : function(closing) {
			try {
				var i;
				var uhits = gemius_hcconn.requests.length;
				var last = (!gemius_hcconn.closing && closing);
				gemius_hcconn.closing = (gemius_hcconn.closing>0 || closing)?1:0;
				if (gemius_hcconn.waiting_on_prerender==0) {
					for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
						gemius_hcconn.unloadhit(gemius_hcconn.requests[i],i+10);
					}
					gemius_hcconn.requests = [];
				}
				if (last) {
					gemius_hcconn.sonar_update();
					if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
						gemius_hcconn.sonar_save();
					}
					if (uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime());
					}
				}
			} catch (e) {}
		},
		getfpcookie : function() {
			gemius_hcconn.fpdata = '-TURNEDOFF';
			try {
				var cookies = document.cookie.split(';');
				var cookie_arr;
				for (var i=0; i<cookies.length ; i++) {
					cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_64b') {
						gemius_hcconn.fpdata = cookie_arr[1].replace(/^\s+|\s+$/g,'');
						return;
					}
				}
			} catch (e) {}
		},
		setfpcookie : function() {
			var now = (new Date()).getTime();
			var exp = now+86400000000;
			if (gemius_hcconn.fpdata!='') {
				try { document.cookie = "__gfp_64b="+gemius_hcconn.fpdata+"; path=/"+((gemius_hcconn.fpcdomain)?("; domain="+gemius_hcconn.fpcdomain):"")+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
			}
		},
		fpdata_loaded : function() {
			if (gemius_hcconn.sto!=null) {
				clearTimeout(gemius_hcconn.sto);
				gemius_hcconn.sto = null;
			}
			gemius_hcconn.setfpcookie();
			gemius_hcconn.getfpcookie();
			gemius_hcconn.waiting_for_fpdata = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.latehits();
		},
		addframe : function(ssl,file,args,rcvfn) {
			if (document.body) {
				gemius_hcconn.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					gemius_hcconn.loadinit = (new Date()).getTime();
					if (gemius_hcconn.fto==null) {
						gemius_hcconn.fto = setTimeout(gemius_hcconn.frameto,10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.setAttribute('sandbox','allow-scripts allow-same-origin');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					gemius_hcconn.lsgetframe = f;
				}
			} else {
				setTimeout(function(){gemius_hcconn.addframe(ssl,file,args,rcvfn);}, 100);
			}
		},
		frameto : function() {
			if (gemius_hcconn.fto!=null) {
				gemius_hcconn.fto = null;
				if (gemius_hcconn.lsdata=='') {
					gemius_hcconn.ltime = 10000;
					gemius_hcconn.lsdata = '-TIMEDOUT';
					gemius_hcconn.waiting_for_lsdata = 0;
					gemius_hcconn.paramsready();
					gemius_hcconn.latehits();
				}
			}
		},
		scriptto : function() {
			if (gemius_hcconn.sto!=null) {
				gemius_hcconn.sto = null;
				if (gemius_hcconn.fpdata!='' && gemius_hcconn.fpdata[0]!='-') {
					gemius_hcconn.setfpcookie();
					gemius_hcconn.getfpcookie();
				}
				if (gemius_hcconn.fpdata=='') {
					gemius_hcconn.fpdata = '-TIMEDOUT';
				}
				gemius_hcconn.waiting_for_fpdata = 0;
				gemius_hcconn.paramsready();
				gemius_hcconn.latehits();
			}
		},
		last_datareceiver : function(lsdata) {
			gemius_hcconn.current_receiver = null;
			gemius_hcconn.lsdata = lsdata;
			gemius_hcconn.waiting_for_lsdata = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.latehits();
		},
		second_datareceiver : function(data) {
			if (data.charAt(0)=='-' || data=='') {
				gemius_hcconn.addframe(1,'set','',gemius_hcconn.last_datareceiver);
			} else {
				gemius_hcconn.last_datareceiver(data);
			}
		},
		first_datareceiver : function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				gemius_hcconn.last_datareceiver(data);
			}
		},
		msgreceiver : function(e) {
			if (typeof e.data=="string" && e.data.substr(0,15)=="_xx_gemius_xx_/") {
				if (gemius_hcconn.fto!=null) {
					clearTimeout(gemius_hcconn.fto);
					gemius_hcconn.fto = null;
					gemius_hcconn.ltime = (new Date()).getTime() - gemius_hcconn.loadinit;
				}
				if (gemius_hcconn.current_receiver!=null) {
					gemius_hcconn.current_receiver(e.data.substr(15));
				}
			}
			if (typeof e.data=="string" && e.data.substr(0,19)=="_xx_gemius_add_xx_/") {
				if (gemius_hcconn.addto!=null) {
					clearTimeout(gemius_hcconn.addto);
					gemius_hcconn.addto = null;
				}
				var lsadd = e.data.substr(19);
				gemius_hcconn.sendhits((lsadd=="-GETERR")?null:lsadd);
			}
		},
		getflashv : function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		},		
		parameters : function() {
			var d=document;
			var w=window;
			var href=new String(d.location.href);
			var ref;
			var f=0;
			var dd;
			if (d.referrer) { ref=new String(d.referrer); } else { ref=''; }
			if (typeof Error!='undefined') {
				try { f=(d==top.document)?1:2; if (typeof top.document.referrer=="string") { ref=top.document.referrer; } } catch(e) {f=3;}
			}
			var url='&fr='+f+'&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(gemius_hcconn.flashv)+'&href='+encodeURIComponent(href.substring(0,499))+'&ref='+encodeURIComponent(ref.substring(0,499));
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			return url;
		},
		array_to_string : function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		},
		internal_hit : function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra) {
			var req = "";
			if (gemius_hcconn.event_identifier==null && id) {
				gemius_hcconn.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+et;
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			if (sonar) {
				req += '&initsonar=1';
				if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
					var cdata=gemius_hcconn.sonar_load(id,1);
					if (cdata[0]>=1) {
						var addparams=["_cnt="+cdata[0],"_dur="+cdata[1],"_vis="+cdata[2],"_freq="+cdata[3],"_evid="+cdata[4]];
						for (var i=0; i<addparams.length; i++) {
							if (extra.length>0) extra += '|';
							extra += ((new String(addparams[i])).replace(/\|/g,'_'));
						}
					}
				}
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+gemius_hcconn.parameters();
			gemius_hcconn.requests[gemius_hcconn.requests.length] = {req:req,allowaddscript:allowaddscript,vers:vers};
			gemius_hcconn.latehits();
		},
		timer : function() {
			var i;
			for (i=0 ; i<gemius_hcconn.timerevents.length ; i++) {
				gemius_hcconn.internal_hit(0,93,gemius_hcconn.timerevents[i],0,"sonar");
			}
		},
		gtimer_add : function(id) {
			gemius_hcconn.internal_hit(0,93,id,0,"sonar");
			gemius_hcconn.timerevents[gemius_hcconn.timerevents.length] = id;
		},
		sonar_update : function() {
			var i;
			for (i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var time=((new Date()).getTime()) - data["lvchange"];
				if (time < 0) time = 0;
				if (data["dur"] + time > 24*3600*1000) time = 24*3600*1000 - data["dur"];
				if (data["lvstate"] == "visible") {
					data["dur"] += time;
					if (time < 4000) data["vdur"] += time;
				} else if (data["lvstate"] == "hidden" || !data["lvstate"]) {
					data["dur"] += time;
				}
				data["lvchange"] = ((new Date()).getTime());
				data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
			}
		},
		sonar_add : function(identifier,evid,freq,extra) {
				gemius_hcconn.sonar_update();
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["to"]=null;
				data["dur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["dur"]:0);
				data["vdur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["vdur"]:0);
				data["lvchange"] = ((new Date()).getTime());
				data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
				data["linterval"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					var fun=(function(sid){return function(){gemius_hcconn.sonar(sid);};}(gemius_hcconn.sonar_data.length));
					data["to"]=setInterval(fun, 1000);
				}
				gemius_hcconn.sonar_data[gemius_hcconn.sonar_data.length] = data;
		},
		sonar : function(sid) {
			var data, prob;
			gemius_hcconn.sonar_update();
			data=gemius_hcconn.sonar_data[sid];
			prob=(((new Date()).getTime()) - data["linterval"])/1000; 
			data["linterval"]=((new Date()).getTime());
			while (prob>0) {
				if (data["sdur"]<24*3600 && prob<=4 && data["lvstate"]=="visible" && Math.random() < prob/data["freq"]) {
					gemius_hcconn.internal_hit(0,99,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
				}
				data["sdur"] += Math.min(prob,data["freq"]);
				prob -= data["freq"];
			}
		},
		sonar_save : function() {
			var exp = ((new Date()).getTime())+7200000;
			for (var i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var cdata=gemius_hcconn.sonar_load(data["id"], 0);
				if (data["id"] && gemius_hcconn.fpcdomain) {
					var value = "__gfp_"+data["id"]+"="+(1+cdata[0])+"|"+(data["dur"]+cdata[1])+"|"+(data["vdur"]+cdata[2])+"|"+data["freq"]+"|"+data["evid"]+"|"+gemius_hcconn.fpcdomain;
					try { document.cookie = value + "; path=/; domain="+gemius_hcconn.fpcdomain+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
				}
			}
		},
		sonar_load : function(id,del) {
			try {
				var cookies = document.cookie.split(';');
				for (var i=0; i<cookies.length ; i++) {
					var cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_'+id) {
						var data = cookie_arr[1].replace(/^\s+|\s+$/g,'').split('|',6);
						if (data.length == 6) {
							if (del) try{document.cookie = "__gfp_"+id+"=~; path=/; domain="+data[5]+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";} catch(e) {}
							return [parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), parseInt(data[3]), parseInt(data[4])];
						}
					}
				}
			} catch (e) {
			}
			return [0,0,0,0,0];
		},
		ghit : function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				gemius_hcconn.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,gemius_hcconn.array_to_string(args,1));
			}
		},
		gevent : function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && gemius_hcconn.event_identifier != null) {
					args[pos] = gemius_hcconn.event_identifier;
				}
				if (args[pos]) {
					gemius_hcconn.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,gemius_hcconn.array_to_string(args,pos+1));
				}
			}
		},
		addscripthit : function() { gemius_hcconn.ghit(1,96,arguments,0,2,0); },
		plainhit : function() { gemius_hcconn.ghit(0,97,arguments,0,2,0); },
		addscriptevent : function() { gemius_hcconn.gevent(1,96,arguments,0,3,0); },
		plainevent : function() { gemius_hcconn.gevent(0,97,arguments,0,3,0); },
		pendingdata : function(arr,fn) {
			var i;
			if (typeof window[arr] != 'undefined') {
				for (i=0 ; i<window[arr].length ; i++) {
					fn.apply(this,window[arr][i]);
				}
				window[arr]=[];
			}
		},
		sendpendingdata : function() {
			gemius_hcconn.pendingdata('pp_gemius_hit_pdata',gemius_hcconn.addscripthit);
			gemius_hcconn.pendingdata('gemius_hit_pdata',gemius_hcconn.plainhit);
			gemius_hcconn.pendingdata('pp_gemius_event_pdata',gemius_hcconn.addscriptevent);
			gemius_hcconn.pendingdata('gemius_event_pdata',gemius_hcconn.plainevent);
			gemius_hcconn.pendingdata('gemius_shits',gemius_hcconn.addscripthit);
			gemius_hcconn.pendingdata('gemius_phits',gemius_hcconn.plainhit);
			gemius_hcconn.pendingdata('gemius_sevents',gemius_hcconn.addscriptevent);
			gemius_hcconn.pendingdata('gemius_pevents',gemius_hcconn.plainevent);
		},
		findvisapi : function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				gemius_hcconn.visapi_h = 'hidden';
				gemius_hcconn.visapi_s = 'visibilityState';
				gemius_hcconn.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						gemius_hcconn.visapi_h = p[i]+'Hidden';
						gemius_hcconn.visapi_s = p[i]+'VisibilityState';
						gemius_hcconn.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		},
		init : function() {
			setInterval(gemius_hcconn.timer,60*1000);
			gemius_hcconn.flashv = gemius_hcconn.getflashv();
			if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
				gemius_hcconn.waiting_for_fpdata = 1;
			} else {
				gemius_hcconn.getfpcookie();
				gemius_hcconn.waiting_for_fpdata = ((gemius_hcconn.fpdata.length>0 && gemius_hcconn.fpdata[0]=='-') || gemius_hcconn.fpdata=='')?1:0;
			}
			try {
				gemius_hcconn.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
				if (gemius_hcconn.waiting_for_lsdata==0) {
					gemius_hcconn.lsdata='-NOTSUP';
				}
			} catch (e) {
				gemius_hcconn.waiting_for_lsdata = 0;
				gemius_hcconn.lsdata='-TURNEDOFF';
			}
			if (gemius_hcconn.waiting_for_fpdata) {
				var domain = new String(document.location.hostname);
				gemius_hcconn.sto = setTimeout(gemius_hcconn.scriptto,10000);
				gemius_hcconn.append_script((gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/fpdata.js?href='+domain,gemius_hcconn.fpdata_loaded,0);
			}
			gemius_hcconn.waiting_on_prerender = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.findvisapi();
			if (gemius_hcconn.visapi_s != '') {
				if (document[gemius_hcconn.visapi_s] == 'prerender') {
					gemius_hcconn.waiting_on_prerender = 1;
				}
				gemius_hcconn.add_event(document,gemius_hcconn.visapi_c,gemius_hcconn.visibilitychanged);
			}
			gemius_hcconn.sonar_add();
			if (gemius_hcconn.waiting_for_lsdata) {
				gemius_hcconn.add_event(window,'message',gemius_hcconn.msgreceiver);
				if (gemius_hcconn.ssl) {
					gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
				} else {
					gemius_hcconn.addframe(0,'get','',gemius_hcconn.first_datareceiver);
				}
			} else {
				gemius_hcconn.latehits();
			}
			gemius_hcconn.add_event(window,"unload",function() {gemius_hcconn.unload(true);} );
			gemius_hcconn.add_event(window,"beforeunload",function() {gemius_hcconn.unload(true);} );
			gemius_hcconn.add_event(document,"mousedown",function() {gemius_hcconn.unload(false);} );
		}
	};
	gemius_hcconn.init();
	gemius_hit = gemius_hcconn.plainhit;
	gemius_event = gemius_hcconn.plainevent;
	pp_gemius_hit = gemius_hcconn.addscripthit;
	pp_gemius_event = gemius_hcconn.addscriptevent;
	try {
		if (typeof gemius_loaded != "undefined") {
			gemius_loaded();
		} else if (typeof pp_gemius_loaded != "undefined") {
			pp_gemius_loaded();
		}
	} catch (e) {}
	if (typeof gemius_identifier != 'undefined') gemius_hcconn.event_identifier = gemius_identifier;
	else if (typeof pp_gemius_identifier != 'undefined') gemius_hcconn.event_identifier = pp_gemius_identifier;
	gemius_hcconn.sendpendingdata();
}

(function () {
	if (typeof pp_gemius_identifier != 'undefined' && !pp_gemius_identifier.match(/^USED_/)) {
		var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
		var v = 91-s;
		if (typeof window.pp_gemius_cnt != 'undefined') {
			pp_gemius_identifier = 'ERR_'+pp_gemius_identifier.replace(/id=/g,'id=ERR_');
			v = 92;
		}
		window.pp_gemius_cnt = 1;
		if (typeof pp_gemius_extraparameters != 'undefined') {
			gemius_hcconn.gevent(s,v,[pp_gemius_identifier].concat(pp_gemius_extraparameters),0,1,1);
		} else {
			gemius_hcconn.ghit(s,v,[pp_gemius_identifier],0,1,1);
		}
		if (gemius_hcconn.event_identifier==null) {
			gemius_hcconn.event_identifier = pp_gemius_identifier;
		}
		if (v != 92 && typeof pp_gemius_time_identifier != 'undefined') {
			gemius_hcconn.gtimer_add(pp_gemius_time_identifier);
		}
		pp_gemius_identifier = 'USED_'+pp_gemius_identifier.replace(/id=/g,'id=USED_');
	} else if (typeof gemius_identifier != 'undefined' && !gemius_identifier.match(/^USED_/)) {
		var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
		var v = 91-s;
		if (typeof window.pp_gemius_cnt != 'undefined') {
			gemius_identifier = 'ERR_'+gemius_identifier.replace(/id=/g,'id=ERR_');
			v = 92;
		}
		window.pp_gemius_cnt = 1;
		if (typeof gemius_extraparameters != 'undefined') {
			gemius_hcconn.gevent(s,v,[gemius_identifier].concat(gemius_extraparameters),0,1,1);
		} else {
			gemius_hcconn.ghit(s,v,[gemius_identifier],0,1,1);
		}
		if (gemius_hcconn.event_identifier==null) {
			gemius_hcconn.event_identifier = gemius_identifier;
		}
		gemius_identifier = 'USED_'+gemius_identifier.replace(/id=/g,'id=USED_');
	}
	gemius_hcconn.sendpendingdata();
})();
