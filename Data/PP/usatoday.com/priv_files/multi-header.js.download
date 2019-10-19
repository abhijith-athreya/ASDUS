require.config({baseUrl: window.site_static_url + 'js/'});

require(['framework-config'], function(frameworkConfig){
    require.config(frameworkConfig);
    require(['jquery',
        'underscore',
        'state',
        'modules/global/header'
    ],
        function($, _, StateManager, Header) {
            StateManager.start();
            var $siteHeaders = $(Header.prototype.el);
            _.each($siteHeaders, function(el){            
                new Header({'el':el});
            });
            StateManager.stopRefreshTimer();
        }
    );
});