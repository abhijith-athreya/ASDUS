_satellite.pushAsyncScript(function(event, target, $variables){
  /*<script type="text/javascript">*/
function setCookie(name, value, days)
{ var date = new Date(); date.setTime(date.getTime() + (days*24*60*60*1000)); var expires = "; expires=" + date.toGMTString(); document.cookie = name + "=" + value + expires; }
function getParam(p)
{ var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search); return match && decodeURIComponent(match[1].replace(/\+/g, ' ')); }
var gclid = getParam('gclid');
if(gclid){
var gclsrc = getParam('gclsrc');
if(!gclsrc || gclsrc.indexOf('aw') !== -1)
{ setCookie('gclid', gclid, 90);}
}
/*</script>*/
});
