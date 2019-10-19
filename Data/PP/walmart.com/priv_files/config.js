require.config({
    paths: {
        'jquery': 'bower/jquery',
        'selectbox': 'bower/jquery.selectBoxit',
        'jquery.validate': 'bower/jquery.validate',
        'bsp-utils': 'bower/bsp-utils',
        'jquery-ui-widget': 'bower/jquery-ui/ui/jquery.ui.widget',
        'qrcode': 'lib/qrcode',
        'psd-sharebar': 'lib/psd-sharebar',
        'highlight-share': 'lib/texttweet',
        'bsp-tabber': 'bower/bsp-tabber',
        'isotope': 'lib/isotope',
        'bridget': 'lib/jquery-bridget',
        'imageloaded': 'lib/imageloaded'
    },
    shim: {
        'qrcode': ['jquery'],
        'psd-sharebar': ['jquery'],
        'jquery-ui-widget': ['jquery'],
        'bower/jquery.truncate': ['jquery'],
        'bower/bootstrap-datepicker': ['jquery'],
        'lib/modal': ['jquery'],
        'selectbox': {
            deps: ['jquery','jquery-ui-widget'],
           exports : 'jQuery.selectBox'
        },
        'isotope':  ['jquery']
    },
    urlArgs: 'bust=', // + (new Date()).getTime(),
    waitSeconds: 15
});