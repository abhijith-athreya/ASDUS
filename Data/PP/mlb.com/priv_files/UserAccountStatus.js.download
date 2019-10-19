/**
 * @requires jquery.js
 * @requires jquery.bindable.js
 * @requires jquery.sajax.js
 * @requires bam.js
 */
var UserAccountStatus = (function(window, document, $, bam, undefined) {
    
    var UserAccountStatus,
        onLoginHandlerName;

    bam.loadSync( bam.homePath + 'bam.cookies.js' );

    function getIdentityPointIdFingerprint() {
        var fprt = bam.cookies.get('fprt');
        this.ipid = bam.cookies.get('ipid');
        this.fprt = (!!fprt) ? unescape(fprt) : fprt;
    }

    UserAccountStatus = function( tplLoginPath ) {
        if( !( this instanceof UserAccountStatus ) ) {
            return( new UserAccountStatus( tplLoginPath ) );
        }

        if( !!tplLoginPath ) { 
            this._TPL = $.template( tplLoginPath );
        }
        
        getIdentityPointIdFingerprint.call(this);

        return this;
    };

    UserAccountStatus.prototype = {

        ipid : null,
        fprt : null,

        /**
         * Checks user's logged in status 
         * TODO: should this also use identity point service?
         */
        checkLoggedIn : function(validateFprt) {

            //bam.trackDeprecated({method:"UserAccountStatus.checkLoggedIn", module:"/shared/scripts/account/UserAccountStatus.js"});

            var identifyConfig = {
                    success : $.proxy( function() {
                        this.trigger( 'isLoggedIn', [ true ] );
                    }, this),

                    error   : $.proxy( function( oError ) {
                        this.trigger( 'isLoggedIn', [ false ] );
                    }, this)
                },
                maxAge;

            if (typeof validateFprt === "number") {
                maxAge = validateFprt;
                validateFprt = true;
            }

            getIdentityPointIdFingerprint.call(this);
    		
            if( !!validateFprt && !!this.ipid && !!this.fprt ) {

                identifyConfig.type = "fingerprint";
                identifyConfig.id = this.ipid;
                identifyConfig.fingerprint = this.fprt;

                if (maxAge) {
                    identifyConfig.maxAge = maxAge;
                }

                if( !window.IdentityPointService ) {
                    $.sajax()
                        .js('/shared/scripts/serviceClients/registrationServiceUtils_client.js')
                        .js('/shared/scripts/serviceClients/identityPointService_client.js', function() {
                            IdentityPointService.identify(identifyConfig);
                        });
                } else {
                    IdentityPointService.identify(identifyConfig);
                }

                return;
            } else if( !!this.ipid && !!this.fprt ) {

                this.trigger( 'isLoggedIn', [ true ] );
                return true;

            } else {

                this.trigger( 'isLoggedIn', [ false ] );
                return false; 

            }
        },

        setLoginTemplate : function( tplLoginFormPath ) {
            this._tplLoginFormPath = tplLoginFormPath;
            return this;
        },

        bindLoginView : function( LoginView ) {
            this._LoginView = LoginView;
            return this;
        },

        // TODO: cache TPL in hash w/ URL as key. that should do it
        promptLogin : function( displayLoginFn ) {
            var onLoginHandlerName = 'l' + new Date().valueOf(),
                data,
                loginViewHandler;

            window[ onLoginHandlerName ] = $.proxy( function() {

                this.trigger( 'isLoggedIn', [true] );

                // cleanup onLogin handler
                window[ onLoginHandlerName ] = undefined;
                try {
					delete window[ onLoginHandlerName ];
				} catch(e) {}
            }, this);

            data = { "callback" : onLoginHandlerName };

            if( !!displayLoginFn && typeof displayLoginFn === "function" ) {
                displayLoginFn( this._TPL( data ) );
            }

            if( !!this._LoginView ) {
                loginViewHandler = function() {
                    this._LoginView.render( onLoginHandlerName );
                    this.unbind( 'promptLogin', loginViewHandler );
                };

                this.bind( 'promptLogin', loginViewHandler );
                this.trigger( 'promptLogin' );
            }

        }

    };

    $.bindable(UserAccountStatus.prototype); 
    
    return UserAccountStatus;

})(this, this.document, this.jQuery, this.bam);




