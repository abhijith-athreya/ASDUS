/**
 * @fileOverview 
 * Session Helper Class for BAM Registration Services
 *
 * @author Jon Ferrer <jon.ferrer@mlb.com>
 *
 * @requires jquery.js
 * @requires jquery.bindable.js
 * @requires bam.js
 * @requires identityPointService_client.js
 */
(function(window, $, bam) {

    bam.loadSync(bam.homePath + "bam.cookies.js");

    var

    // collection of all session helpers on the page
    sessionHelperInstances = {},
    
    // triggers check of identity point credentials against IdentityPointService.identify()
    validateFprtDefault = false, 
    
    // triggers check of verified email against EmailService.findPrimary()
    validateEmailDefault = false,

    // flag to ensure no more than one async request to IdentityPoint service at any time
    identifyInProgress = false,

    // cookie shortcuts
    COOKIENAME_IDENTITY_POINT_ID = 'ipid',
    COOKIENAME_FINGERPRINT = 'fprt',

    // event shortcuts
    EVTNAME_ISLOGGEDIN = "isLoggedIn",

    SessionHelperEvents = {
        isLoggedIn : EVTNAME_ISLOGGEDIN
    };


    /**
     * Stores intance of SessionHelper static property so "global" login 
     * events can be triggered
     *
     * @param {SessionHelper} sessionHelperInstance
     * @static
     * @private
     */
    function addToSessionHelperInstances (sessionHelperInstance) 
    {
        var instanceName = "sh_" + new Date().valueOf();
        sessionHelperInstances[instanceName] = sessionHelperInstance;
    }

    /**
     * Triggers isLoggedIn event for all instances of SessionHelper
     *
     * @param {Boolean} isLoggedIn
     * @param {SessionHelper} contextObj
     * @static
     * @private
     */
    function triggerIsLoggedInEvent (sessionStatus, contextObj) 
    {
        var instanceName,
            isInstanceContext,
            sessionHelperInstance;

        for (instanceName in sessionHelperInstances) {
           if (sessionHelperInstances.hasOwnProperty(instanceName)) {
                sessionHelperInstance = sessionHelperInstances[instanceName];
                isInstanceContext = (contextObj && sessionHelperInstance === contextObj);
                sessionHelperInstance.trigger(SessionHelperEvents.isLoggedIn, [sessionStatus, isInstanceContext]);
           }
        }
    }

    /**
     * Retrives user registration data from cookies and
     * sets their data as the Session singleton's private variables
     * for use with authentication checks.
     *
     * @methodOf SessionHelper
     * @private 
     * @return void
     */
    function getIdentityPointIdFingerprint () 
    {
        var ipid,
            fprt;

        ipid = bam.cookies.get(COOKIENAME_IDENTITY_POINT_ID);
        fprt = bam.cookies.get(COOKIENAME_FINGERPRINT);

        this.ipid = ipid;
        this.fprt = fprt; 
    }

    /**
     * Initiates a check of the user's login status based on identity cookies set
     * as well as IdentityPoint service.
     *
     * @param {Function} callback
     * @param {Mixed} identifyUser If set to TRUE, checkLoggedIn will attempt to identify user through IdentityPointService
     *                             identifyUser can be an Object that defines what type of authentication to check ie:
     *                             { identify : true } // identify via identity point service
     *                             { verifiedEmail : true } // ensure verified email
     * @return void
     * @author Jon Ferrer <jon.ferrer@mlb.com>
     */
    function checkLoggedInStatus (callback, identifyUser) 
    {
        var makeIdentityPointServiceCall,
        	makeEmailVerificationCall;

        if ( ! identifyInProgress) {
            identifyInProgress = true;

            getIdentityPointIdFingerprint.call(this);

            // sugar for handling callbacks
            if (callback && (typeof callback === "boolean" || $.isPlainObject(callback))) {

                identifyUser = callback;

            } else if (callback && typeof callback === "function") {

                this.one(EVTNAME_ISLOGGEDIN, $.eventProxy(callback));

            }

            // convert identifyUser boolean to object for backwards-compatibility
            if (typeof identifyUser === "boolean") {
                identifyUser = { identify : identifyUser };
            }

            makeIdentityPointServiceCall = (identifyUser && identifyUser.identify) ? identifyUser.identify : validateFprtDefault;
            makeEmailVerificationCall = (identifyUser && identifyUser.verifyEmail) ? identifyUser.verifyEmail : validateEmailDefault;
            
            // no registration cookies, so no login
            if (!this.ipid || !this.fprt) {

                identifyInProgress = false;
                triggerIsLoggedInEvent({ isLoggedIn :false }, this);
                return false;

            // check if user has verified email address and is logged in
            } else if (makeEmailVerificationCall && this.ipid && this.fprt) {

                EmailService.findPrimary(
                    function (email) {
                        triggerIsLoggedInEvent( { isLoggedIn : true, isEmailVerified : email.verified } , this);

                    }, function(serviceOperation, status) {
                        triggerIsLoggedInEvent( { isLoggedIn : false } , this);

                    }
                );

            // validate registration cookies against the IdentityPoint service
            } else if (makeIdentityPointServiceCall && this.ipid && this.fprt) {

                IdentityPointService.identify({
                    success : $.proxy(function() {
                                    identifyInProgress = false;
                                    triggerIsLoggedInEvent( { isLoggedIn : true } , this);
                                }, this),

                    error : $.proxy(function( oError ) {
                                  identifyInProgress = false;
                                  triggerIsLoggedInEvent( { isLoggedIn : false }, this);
                              }, this)
                });

                return;

            // has cookies and service verification is not necessary, so assume the user is logged in
            } else if (!!this.ipid && !!this.fprt) {

                identifyInProgress = false;
                triggerIsLoggedInEvent({ isLoggedIn : true}, this);
                return true;

            }
        }
    }

    /**
     * @constructor
     */
     function SessionHelper() {
        if ( ! (this instanceof SessionHelper)) {
            return new SessionHelper();
        }

        this.ipid = null;
        this.fprt = null;

        addToSessionHelperInstances(this);
    };

    SessionHelper.prototype = {

        /**
         * Namespace for SessionHelper events
         * @type Object
         */
        events : SessionHelperEvents,

       /**
        * @methodOf Session
        * @param {boolean} validateFprt If set to TRUE, checkLoggedIn will attempt to identify user through IdentityPointService
        * @public
        */
       isLoggedIn : function (callback, identifyUser)
       {
            return checkLoggedInStatus.call(this, callback, identifyUser);
       }
    };

    $.bindable(SessionHelper.prototype);

    bam.session = SessionHelper;

}(this, this.jQuery, this.bam));


