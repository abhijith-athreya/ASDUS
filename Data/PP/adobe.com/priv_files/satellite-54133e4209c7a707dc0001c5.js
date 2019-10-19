_satellite.pushAsyncScript(function(event, target, $variables){
  var s_iid = _satellite.getQueryParam('s_iid'),
    s_cid = _satellite.getQueryParam('s_cid'),
    s_rtid = _satellite.getQueryParam('s_rtid'),
    s_osc = _satellite.getQueryParam('s_osc'),
    date = new Date(),
    domain = _satellite._getDomain();

date.setTime(date.getTime() + (30*24*60*60*1000)); // 30 days

if (s_iid) {
    _satellite._setCookie('s_iid', s_iid, date, domain, '/', true);
}

if (s_cid) {
    _satellite._setCookie('s_cid', s_cid, date, domain, '/', true);
}

if (s_rtid) {
    _satellite._setCookie('s_rtid', s_rtid, date, domain, '/', true);
}

if (s_osc) {
    _satellite._setCookie('s_osc', s_osc, date, domain, '/', true);
}
});
