(function(window, document, $, bam, undefined) {

    var 
    
    // service endpoints
    FACEBOOK_DIRECT_LOGIN_ENDPOINT = "/wf/flow/social.facebook.directLogin", 
    LINK_FLOW_ENDPOINT = "/wf/flow/social.facebook.link",
    OAUTH_LOGIN_ENDPOINT = "/wf/flow/social.facebook.oauthLogin",
    
    permissions = "email,publish_stream,publish_actions,user_about_me,user_birthday,user_education_history,user_location,user_hometown,user_interests,user_relationships,user_work_history",
       
     
    // events
    EVENT_IS_LOGGEDIN = "isLoggedIn",
    EVENT_LINK_SUCCESS = "linkSuccess",
    EVENT_NOT_LOGGEDIN = "notLoggedIn",
    EVENT_ALREADY_LINKED = "alreadyLinked",
    EVENT_GENERAL_ERROR = "error";

    /**
     * @private
     */
    function createGlobalTemporaryHandler( fn ) {

        var handlerName = 'f' + new Date().valueOf();

        window[ handlerName ] = function() {
            if( !!fn && typeof fn === 'function' ) {
                fn.apply( window, arguments );
            }

            // cleanup onLogin handler
            window[ handlerName ] = undefined;
            try {
                delete window[ handlerName ];
            } catch(e) {}
        };

        return handlerName;
    }


    /**
     * Initiates Facebook Oauth login/authorization flow
     *
     * @private
     */
    function doOathLogin() 
    {
        var domain = [window.location.protocol,
                    "//",
                    document.domain,
                    (window.location.port !== "" ? ":" + window.location.port : "")].join(""),

            oauthLoginSuccessHandler = createGlobalTemporaryHandler($.proxy(function(status) {
                this.trigger(status); 
            }, this)),

            oauthLoginFlowURL = [this.oauthLoginBaseURL,
                        OAUTH_LOGIN_ENDPOINT,
                        "?successUrl=", 
                        escape(domain + "/" + this.oauthSuccessURL) +  escape("?handler=" + oauthLoginSuccessHandler),
                        "&scope=",
                        permissions
                    ],
                    
            popupWidth = 665,
            popupHeight = 505;
                

        // do oath login
        // console.debug("doOathLogin()", arguments, oauthLoginFlowURL);
        
        //alert(oauthLoginFlowURL.join(''));

        window.open(oauthLoginFlowURL.join(''), 'MLB_FB', 'width=' + popupWidth + ',height=' + popupHeight);

    }

    /**
     * Triggers successfully linked or logged in events as 
     * a result of successful Facebook Connect link workflow
     *
     * @private
     */
    function handleLinkSuccess(response) 
    {
        // console.debug("handleLinkSuccess", response);
        
        if (response.linkStatus === "linked") {
            // trigger linked event. aka first time user has linked
            this.trigger(EVENT_LINK_SUCCESS);

        } else if (response.linkStatus === "loggedIn") {
            // trigger logged in status 
            this.trigger(EVENT_IS_LOGGEDIN);
        } else {
            // trigger logged in status 
            this.trigger(EVENT_GENERAL_ERROR);
        }
    }

    /**
     * Triggers not authenticated error as a result of an
     * error response from the Facebook Connect link workflow
     *
     * @private
     */
    function handleLinkError(xhr, status, message) 
    {

        //console.debug("handleLinkError", arguments);
        if (message === "Unauthorized") {
            this.trigger(EVENT_NOT_LOGGEDIN);
        } else if (message === "Conflict") {
            this.trigger(EVENT_ALREADY_LINKED);
        }
        // login/register then call link() again after login/register
    }

    /**
     * Initiates Facebook Connect link workflow
     *
     * @private
     * @static
     */
    function link() 
    {
        return $.ajax({
            cache: false,
            url : LINK_FLOW_ENDPOINT,
            dataType : "json"      
        });
    }

    /**
     * Returns value of Facebook application cookie. This cookie contains
     * the application ID and the user's oauth token that links the 
     * user to the application.
     *
     * @private
     */
    function getAppCookie() {
        if ( ! bam.cookies) {
            bam.loadSync(bam.homePath + "bam.cookies.js");
        }
        return bam.cookies.get(this.appCookieName);
    }

    /**
     * Attempts to check link between a BAM user to their Facebook account
     * based on the status of the user's Facebook oauth token.
     *
     * @private
     */
    function handleTokenSuccess(response, status, xhr) 
    {
        var access_token = xhr.getResponseHeader("Access_token");

        //console.debug("handleTokenCheck", response);
         
        // HTTP response status code is 200, but payload contains error
        if (response.error) {
            checkBAMLoginStatus.call(this);
        }

        this.fbdata = response;  // cache /me call
        
        link()
            .success($.proxy(handleLinkSuccess, this))
            .error($.proxy(handleLinkError, this));
    }

    /**
     * Checks BAM registration service for Facebook linked accounts. If 
     * user has a Facebook link, log them into Facebook directly. If not, 
     * initiate the Facebook oath flow
     *
     * @private
     */
    function directFacebookLogin(response) 
    {
        // console.debug("directFacebookLogin()", response);

        var ipidKeys = $.ensureArray(response.identityPointKey),
            authToken;

        if (ipidKeys.length > 1) {
            $.each(ipidKeys, function(i, ipid) {
                if (ipid.type[0].Text === "facebook") {
                    authToken = ipid.fingerprint[0].Text;
                    //console.log(authToken);
                    return false;
                }
            });
        }
       
  
        if (authToken) {
            // console.log("has facebook ipid. do directLogin with token", authToken);
            $.ajax({
                url : this.oauthLoginBaseURL + FACEBOOK_DIRECT_LOGIN_ENDPOINT,
                dataType : "jsonp",
                jsonp : "jsCallback",
                data : {
                    oauth_token : authToken
                },
                success : $.proxy(function(response) {
                    // console.log("directFacebookLogin success", response);
                    this.trigger(EVENT_IS_LOGGEDIN);                   
                }, this),

                error : $.proxy(function(response) {
                    // console.log("directFacebookLogin error", response);
                }, this)

            });
        } else {
            doOathLogin.call(this);
        }
    }

    
    
    /**
     * Checks whether the user has a BAM account and if their
     * BAM account has a link to a Facebook account.
     *
     * @private
     */
    function checkBAMLoginStatus(response, status, xhr) 
    {
        var sessionHelper = new bam.session();

        sessionHelper
            .one(sessionHelper.events.isLoggedIn, $.proxy(function(event, sessionStatus) {
                
                // BAM user is not logged in, so do FB Oauth login
                if ( ! sessionStatus.isLoggedIn) {
                    doOathLogin.call(this);

                // find linked identity point keys
                } else {
                    IdentityPointService.findIdentityPointKeys({ 
                        type : "fingerprint", 
                        id : sessionHelper.ipid, 
                        fingerprint : sessionHelper.fprt,
                        success : $.proxy(directFacebookLogin, this),
                        error : $.proxy(doOathLogin, this)
                    });
                }
            }, this))
            .isLoggedIn();
    }

    /**
     * Checks validity of user's oath token by making an OpenGraph/me
     * call via the Facebook proxy
     *
     * @private
     */
    function checkOathToken() 
    {
        bam.opengraph.me()
            .success($.proxy(handleTokenSuccess, this))
            .error($.proxy(checkBAMLoginStatus, this));
    }

    /**
     * BAM Registration-Facebook Connect base class
     */
    function FacebookConnect(config) 
    {
        if ( ! config.appCookieName) {
            throw new Error("FacebookConnect() constructor: config argument is missing appNameCookie");
        }

        if ( ! config.oauthSuccessURL) {
            throw new Error("FacebookConnect() constructor: config argument is missing oauthSuccessURL");
        }

        /*
        if ( ! config.oauthLoginBaseURL) {
            throw new Error("FacebookConnect() constructor: config argument is missing linkBaseURL");
        }
        */

        this.appCookieName = config.appCookieName;
        this.oauthLoginBaseURL = config.oauthLoginBaseURL;
        this.oauthSuccessURL = config.oauthSuccessURL; 
        this.appID = config.appID;
    }

    FacebookConnect.prototype = {
        /**
         * User's Facebook Data from Graph API. fbdata is
         * null if the user has not authorized this account on Facebook
         *
         * @type Object
         */
        fbdata : null,

        /**
         * Public events published by this Facebook Connect class
         * @type Object
         */
        events : {
            isLoggedIn : EVENT_IS_LOGGEDIN,
            linkSuccess : EVENT_LINK_SUCCESS,
            notLoggedIn : EVENT_NOT_LOGGEDIN,
            alreadyLinked : EVENT_ALREADY_LINKED,
            error : EVENT_GENERAL_ERROR
        },

        /**
         * Initiates client-side Facebook Connect process
         *
         * @public
         */
        connect : function(config) {
           //console.group("FacebookConnect.connect()");

            var appCookie = getAppCookie.call(this);    

            config = config || {
                    requireLogin : false 
                };

            if (appCookie && ! config.requireLogin) {

               //console.debug("appCookie found", appCookie);
               //console.debug("checking Oauth token");

               checkOathToken.call(this);

            } else {
                //console.debug("no appCookie found");

                checkBAMLoginStatus.call(this);
            }

            //console.groupEnd();
        },

        /**
         * Returns Facebook Application ID for this instance of 
         * Facebook Connect 
         */
        applicationID : function() {
            /*
            var appCookie = unescape(getAppCookie.call(this)),
                appID;

            if (appCookie) {
                appCookie = appCookie.split("&&&");
                appID = appCookie[0].split("===")[1]; 
            } else {
                appID = this.appID;
            }
            */

            return this.appID;
        },

        /**
         * Initiates BAM Regisration service's link workflow from the client-side
         */
        link : link,

        /**
         * Pops Oauth login
         */
        login : doOathLogin
        
    };
    
    $.bindable(FacebookConnect.prototype);

    // expose FacebookConnect class to bam namespace
    bam.fbconnect = FacebookConnect;

})(this, this.document, this.jQuery, this.bam);
