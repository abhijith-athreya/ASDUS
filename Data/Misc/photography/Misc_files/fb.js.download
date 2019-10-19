jQuery(window).bind('load', function () {
    jQuery('.fb_loader').hide();
});
jQuery(document).ready(function () {
    appid = milapfbwidgetvars.app_id;
    select_lng = milapfbwidgetvars.select_lng;
    if (select_lng == '') {
        select_lng = 'en_US';
    }
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/" + select_lng + "/sdk.js#xfbml=1&version=v2.4&appId=" + appid;
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});