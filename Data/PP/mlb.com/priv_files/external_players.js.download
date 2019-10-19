/* MiLB Media Player */
var mp = new MPlayer({
  name     : "milb",
  template : "http://www.milb.com/media/player/mp_tpl.jsp",
  width    : 800,
  height   : 600
});




/* Yes Network Media Player */
var yesMediaPlayer = new MPlayer({
  name     : "yesnetwork",
  template : "http://web.yesnetwork.com/media/player/mp_tpl.jsp",
  width    : 910,
  height   : 640
});


yesMediaPlayer.preLaunch = function(o){
	var arl_w = "mms://a1503.v247152.c24715.g.vm.akamaistream.net/7/1503/24715/v0001/mlb.download.akamai.com/24715/";

	if(o["w"]){
		switch( o.w.indexOf("http://mfile") ){
			case 0: 
				var urlArr = o.w.split("24715/");
				o.w = arl_w + urlArr[urlArr.length-1];
				break;
			case -1:
				o.w = arl_w + o.w;
				break;
			default: break;				
		}
	}	
	return true;
}


/* SNY Media Player */
var snyMediaPlayer = new MPlayer({
  name     : "sny",
  template : "http://web.sny.tv/media/player/mp_tpl.jsp",
  width    : 800,
  height   : 600
});
yesMediaPlayer.preLaunch = function(o){
	var arl_w = "mms://a1503.v222062.c22206.g.vm.akamaistream.net/7/1503/22206/v0001/mlb.download.akamai.com/22206/";

	if(o["w"]){
		switch( o.w.indexOf("http://mfile") ){
			case 0: 
				var urlArr = o.w.split("22206/");
				o.w = arl_w + urlArr[urlArr.length-1];
				break;
			case -1:
				if( o.w.indexOf("mms://")<0) o.w = arl_w + o.w;
				break;
			default: break;				
		}
	}	
	return true;
}
