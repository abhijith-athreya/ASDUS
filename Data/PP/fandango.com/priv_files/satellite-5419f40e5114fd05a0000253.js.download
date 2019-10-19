_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.ppv = {
  calc: function() {
    var w = window,
        d = document,
        dh = Math.max(Math.max(d.body.scrollHeight, d.documentElement.scrollHeight), Math.max(d.body.offsetHeight, d.documentElement.offsetHeight), Math.max(d.body.clientHeight, d.documentElement.clientHeight)),
        vph = w.innerHeight || (d.documentElement.clientHeight || d.body.clientHeight),
        st = w.pageYOffset || (w.document.documentElement.scrollTop || w.document.body.scrollTop),
        vh = st + vph,
        pv = Math.round(vh / dh * 100),
        c = _satellite.ppv.percent;
    if (pv > 100) {
      _satellite.setCookie('sat_ppv', '');
      _satellite.ppv.percent = 0;
    } else if (pv > c) {
      _satellite.setCookie('sat_ppv', pv);
      _satellite.ppv.percent = pv;
    }
  },
  percent: 0
}
var w = window;
if (w.addEventListener) {
  w.addEventListener('scroll', _satellite.ppv.calc, false);
  w.addEventListener('resize', _satellite.ppv.calc, false);
} else if (w.attachEvent) {
  w.attachEvent('onscroll', _satellite.ppv.calc);
  w.attachEvent('onresize', _satellite.ppv.calc);
}
_satellite.ppv.calc();
});
