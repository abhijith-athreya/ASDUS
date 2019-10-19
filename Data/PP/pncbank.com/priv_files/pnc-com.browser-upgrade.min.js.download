jq191(document).ready(function(c){var d="browser-upgrade-notice-shown";
var b=1;
function e(){var f=c.cookie(d);
return typeof f!="undefined"
}function a(){c.cookie(d,"true",{expires:b})
}c("#browserUpgrade .upgrade_btns a").click(a);
if(!e()&&c("html").hasClass("lt-ie10")){jQuery.fancybox.open({padding:30,openSpeed:150,closeSpeed:150,afterClose:a,href:"#browserUpgrade"})
}});