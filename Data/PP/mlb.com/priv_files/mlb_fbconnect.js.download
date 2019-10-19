
/**
 * MLB.com implementation of Facebook Connect
 *
 * @requires bam.fbconnect.js
 */
function MLB_FacebookConnect(serverURL) {
    var cookieName = "mlbFacebook",
        oauthSuccessURL = "account/partner/fb/link.jsp";
    MLB_FacebookConnect.superclass.constructor.call(this, { 
            appCookieName : cookieName,
            oauthSuccessURL : oauthSuccessURL,
            oauthLoginBaseURL : serverURL,
            appID : "7848098180" // MLB FB app
        });
}

$.inherit(MLB_FacebookConnect, bam.fbconnect);

