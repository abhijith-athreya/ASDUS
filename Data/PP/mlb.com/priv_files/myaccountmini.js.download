
/**
 * Global Quick Login for MLB.com Header
 */

(function( $ ) {

    var APP_NAME = "MyAccountMini";
 
/**
 * @requires jquery.js
 * @requires jquery.bindable.js
 * @requires jquery.template.js
 */
(function (window, document, $, bam) {

    var LoginView = function( configObj ) {
        var dl;

        if( !( this instanceof LoginView ) ) {
            return( new LoginView( configObj ) );
        }

        dl = document.location;

        this._settings = {
            "tplPath"      : null, 
            "renderOuput"  : 'jquery',

            "loginFrameID" : 'iframeLogin',

            "port"         : ( !!dl.port && dl.port.length > 0 && dl.port !== "80" ) ? ":" + dl.port : "",
            "baseURL"      : dl.protocol + "//" + document.domain,
            "loginJSP"     : '/account/quick_login_hdr.jsp',

            "stylesheet"   : null,
            "submitImage"  : null
        };

        if( !!configObj ) {
            $.extend( this._settings, configObj );
        }

        if ( !!this._settings.tplPath ) {
            this._TPL = $.template( this._settings.tplPath );
        }

        $.bindable( this );

    };

    LoginView.prototype = {
        render : function( callback ) {
            var s            = this._settings,
                renderAsHTML = "html".indexOf( s.renderOutput ) !== -1,
                params,
                errorRedirect,
                qs,
                loginFrameHTML,
                output;

            params = {
                "successRedirect"   : s.baseURL + s.port + "/shared/account/v2/login_success.jsp" + escape( "?callback=" + callback ),
                "callback"          : callback,
                "stylesheet"        : s.stylesheet, 
                "submitImage"       : s.submitImage
            };

            qs                   = $.param(params, true);
            errorRedirect        = s.baseURL + s.port + s.loginJSP + escape( "?error=true&" + qs );
            params.errorRedirect = errorRedirect + escape( "&errorRedirect=" + errorRedirect );
            qs                   = decodeURIComponent($.param(params, true));
            loginFrameHTML       = '<iframe src="' + s.loginJSP + '?' + qs + '" rows="1" cols="0" frameborder="0" scrolling="0" framespacing="0" border="0" name="'+ s.loginFrameID + '" id="'+ s.loginFrameID + '"></iframe>';

            if( !!this._TPL ) {
                output = this._TPL( { "loginFrameHTML": loginFrameHTML, "settings" : s }, renderAsHTML );
            } else {
                output = loginFrameHTML;
            }

            this.trigger( 'render', [ output ] ); 
        }
    };
    
    window.LoginView = LoginView;


})(this, this.document, this.$, this.bam);

var MyAccountMini = (function() {
    bam.loadSync( bam.homePath + 'bam.cookies.js' );

    var MyAccountMini,

        QuickLogin,
        QuickLoginView,

        QuickLoginViewContainer,

        INITIAL_CHECK = true,

        TPL_REGISTRATION_LINKS,
        REGISTRATION_LINKS_CONTAINER,

        QUICK_ACCOUNT_CONTAINER,
        contentID             = 'myAccountMiniContent',
        MY_ACCOUNT_MINI_CONTENT,
        MYACCOUNT_COOKIE_NAME = 'mai',
        MYACCOUNT_INFO        = bam.cookies.get( MYACCOUNT_COOKIE_NAME ),

        MLB_FB;

   // function loginDisplay( loginFormHTML ) {
   //     $( '#' +  ).html( loginFormHTML ).show();
   // }
   
   function loginDisplay( event, output ) {
        
        // removes login form after successful login
        var onLoggedIn     = function( event, isLoggedIn ) {
                                if( isLoggedIn ) {
                                    QuickLoginViewContainer.empty();
                                    QuickLogin.unbind( 'isLoggedIn', onLoggedIn ); 
                                }
                             };

        if( QuickLoginViewContainer.children().length > 0 ) {
            QuickLoginViewContainer.show();
        } else {
            QuickLoginViewContainer.html( output ).show();
        }

        QuickLogin.bind( 'isLoggedIn', onLoggedIn ); 
        
    }

    function queryStringToObj( qs ) {
        var obj = null,
             nv;

        qs = qs.split( '&' );

        for( var i=0, lenQS = qs.length; i < lenQS; i++ ) {
            if( !obj ) { 
                obj = {}; 
            }
            nv = qs[ i ].split( '=' );
            obj[ nv[0] ] = nv[ 1 ];
        }

        return obj;

    }

    function getMyAccountInfo() {
        MYACCOUNT_INFO        = bam.cookies.get( MYACCOUNT_COOKIE_NAME );
        if( !!MYACCOUNT_INFO ) { 
            MYACCOUNT_INFO = queryStringToObj( unescape( MYACCOUNT_INFO ) );
            if( !!MYACCOUNT_INFO.firstName ) {
                MYACCOUNT_INFO.firstName = MYACCOUNT_INFO.firstName.replace( '+', ' ' ); 
            }
        }
    }

    function displayMyAccountProxy() {

        if( !MYACCOUNT_INFO ) {
            var success = function( profile ) {
                    MYACCOUNT_INFO = {
                        firstName : ( !!profile.firstName ) ? profile.firstName.value[0] : ' ',
                        nickname  : ( !!profile.nickname ) ? profile.nickname.value[0] : ' '
                    };

                    bam.cookies.set({
                        name  : MYACCOUNT_COOKIE_NAME,
                        value : $.param( MYACCOUNT_INFO ),
                        domain : "mlb.com",
                        path  : '/'
                    });

                    displayMyAccount();
                    displayRegistrationLinks( null, true );
                    $( '#myAccountMiniLink' ).removeClass( 'open' ).addClass( 'close' );
                        
                },

                error = function( oError ) {
                    // error handler here
                    // if non-logged in error: 
                    QuickLogin.promptLogin();
                },
                
                profileServiceDependencies = [
                    'js=/shared/scripts/serviceClients/registrationServiceUtils_client.js',
                    'js=/shared/scripts/serviceClients/profileService_client.js'
                ];

            if( !window.ProfileService ) {
                    $.ajax({
                        url : "/bundle?" + profileServiceDependencies.join("&"),
                        dataType : "script",
                        cache: true,
                        success : function() {
                            ProfileService.find( success, error ); 
                        }
                   });

            } else {
                ProfileService.find( success, error ); 
            }
            
        } else {
            displayMyAccount();
            displayRegistrationLinks( null, true );
        }
    }

    function displayRegistrationLinks( event, isLoggedInStatus ) {
        if( isLoggedInStatus ) {
            REGISTRATION_LINKS_CONTAINER.empty();
            TPL_REGISTRATION_LINKS( MYACCOUNT_INFO ).appendTo( REGISTRATION_LINKS_CONTAINER );
        } else {
            // clear out old cookie, if present
            MYACCOUNT_INFO = null;
            bam.cookies.remove( {
                name : MYACCOUNT_COOKIE_NAME,
                domain : 'mlb.com',
                path : '/' 
            });
            bam.cookies.remove( {
                name : 'fprt',
                domain : 'mlb.com',
                path : '/' 
            });
            REGISTRATION_LINKS_CONTAINER.empty();
            TPL_REGISTRATION_LINKS().appendTo( REGISTRATION_LINKS_CONTAINER );
        }
        
        $( '#myAccountMiniLink' ).addClass( 'open' );

        QuickLogin.unbind( 'isLoggedIn', displayRegistrationLinks );
    }

    function displayMyAccount() {
        MY_ACCOUNT_MINI_CONTENT.empty();
        TPL_MYACCOUNT( MYACCOUNT_INFO ).appendTo( MY_ACCOUNT_MINI_CONTENT );
            
        MY_ACCOUNT_MINI_CONTENT.fadeIn();
    }

    function handleIsLoggedIn( event, isLoggedInStatus ) {
        if( isLoggedInStatus ) {
            
            if( !MYACCOUNT_INFO ) {
               displayMyAccountProxy();
               //getMyAccountInfo();
               //displayMyAccount();
               //displayRegistrationLinks( null, true );
                $( '#myAccountMiniLink' ).addClass( 'close' );
            } else {
                displayMyAccount();
            }

            // clean up bound handlers
            QuickLogin.unbind();

            MyAccountMini.trigger( 'showMyAccount' );
        } else {
            QuickLogin.promptLogin();
            displayRegistrationLinks( null, false );

            MyAccountMini.trigger( 'showLogin' );
        }

    }

    function checkLoginStatus() {
        QuickLogin.checkLoggedIn();
    }

    function doFBLogin() {
        MLB_FB.login();
    }

    MyAccountMini = {

        //MLB_FB : MLB_FB,

        init : function( quickAccountContainerID, tplRegistrationLinksPath, tplMyAccountPath, tplLoginPath, serverURL) {

            QUICK_ACCOUNT_CONTAINER      = $( '#' + quickAccountContainerID );
            REGISTRATION_LINKS_CONTAINER = $( '<div id="registrationLinksContainer"></div> ').appendTo( QUICK_ACCOUNT_CONTAINER );
            MY_ACCOUNT_MINI_CONTENT      = $( '<div id="' + contentID + '"></div>' ).appendTo( QUICK_ACCOUNT_CONTAINER );

            // QuickLogin = QuickLogin( contentID, tplLoginPath ); 

            QuickLoginView = LoginView({
                                  "tplPath"      : tplLoginPath,
                                  "renderOutput" : "html",
                                  "stylesheet"   : "/style/account_management/myAccountMini.css",
                                  "submitImage"  : "/shared/components/gameday/v4/images/btn-login.gif"
                              });

            // handle the login view render event
            QuickLoginView.bind( 'render', loginDisplay );

            QuickLoginViewContainer = $( '#' + contentID );
            
            QuickLogin     = UserAccountStatus()
                                .bindLoginView( QuickLoginView );

            TPL_MYACCOUNT          = $.template( tplMyAccountPath );
            TPL_REGISTRATION_LINKS = $.template( tplRegistrationLinksPath );
            
            $( '#myAccountMiniLinks a.open' ).live( 'click', function() {
                MyAccountMini.show();
                $( '#myAccountMiniLink' ).removeClass( 'open' ).addClass( 'close' );
                return false;
            });

            $( '#myAccountMiniLinks a.close' ).live( 'click', function() {
                 return false;
            });

            // Facebook Connect
            MLB_FB = MyAccountMini.MLB_FB = new MLB_FacebookConnect(serverURL);

            MLB_FB
                .bind("notLoggedIn", doFBLogin)
                .bind("isLoggedIn", checkLoginStatus)
                .bind("isLinked", checkLoginStatus);

            $("#btn-ql-fbconnect").live("click", function() {
               MLB_FB.connect();

                bam.tracking.track({ async: {
                    compName     : "Facebook Connect",
                    compActivity : "Facebook Connect Login Click",
                    actionGen    : true
                }});
               
               return false; 
            });

            MyAccountMini.bind( 'showMyAccount', function() {
                bam.tracking.simPgView({
                    pageName : 'Major League Baseball: Account: Inline Login - Logged In',
                    channel  : 'Account'
                });
            });

            MyAccountMini.bind( 'showLogin', function() {
                bam.tracking.simPgView({
                    pageName : 'Major League Baseball: Account: Inline Login - Logged Out',
                    channel  : 'Account'
                });
            });

            $( '#quick_logout' ).live( 'click', function() {
                bam.tracking.track({ 
                    async:{
                        compName:"Inline Login",
                        compActivity:"Inline Login: Logout Click",
                        actionGen:true
                    }
                });                
            });

            getMyAccountInfo();
            // if( !!MYACCOUNT_INFO ) { 
            //     MYACCOUNT_INFO = queryStringToObj( unescape( MYACCOUNT_INFO ) );
            // }

            QuickLogin.bind( 'isLoggedIn', displayRegistrationLinks );
            QuickLogin.checkLoggedIn();

       },

       show : function() {

            $( document ).bind( 'mouseup', MyAccountMini.hide );

            QuickLogin.bind( 'isLoggedIn', handleIsLoggedIn );
            QuickLogin.checkLoggedIn( INITIAL_CHECK );
            INITIAL_CHECK = false;
      },

      hide : function( e ) {

            if( e.target.id.indexOf( 'myAccountMiniLink' ) !== -1 || $( e.target ).closest( 'div#' + contentID ).length < 1  ) {
                
                MY_ACCOUNT_MINI_CONTENT.hide();
                $( document ).unbind( 'mouseup', MyAccountMini.hide );

                setTimeout( function() { $( '#myAccountMiniLink' ).removeClass( 'close' ).addClass( 'open' ); }, 100 );

            }
      }

    };

    return $.bindable( MyAccountMini );
})();

window[ APP_NAME ] = MyAccountMini;



})( this.jQuery );

