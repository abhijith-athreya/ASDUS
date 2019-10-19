_checkFrames = function(){
  _satellite.cssQuery('iframe[src*="movieclips.com"]', function(frames){
    if(frames.length>0){
      var rsid = _satellite.tools['46c4224a6feb427843b2bf5abd28e10c'].settings.account;
      _satellite.each(frames, function(frame){
        frame.contentWindow.postMessage('rsid:'+rsid, '*')
      });
    }
  });
  setTimeout(function(){_checkFrames()}, 1500);
}
_checkFrames();
