/*global NYTD, window, escape */
/*
$Id: dfp.js 156020 2017-05-08 06:02:27Z pdhing $
(c) 2015 The New York Times Company
*/
var NYTD = NYTD || {};

NYTD.dfpAds = (function (googletag, $) {

var networkCode = '/29390238/',
    stageTaxonomy = 'zznyt/',
    prdTaxonomy = 'nyt/',
    taxonomy = '',
    subscriberInfoService = '/svc/web-products/userinfo-v3.json',
    pageViewId = generatePageViewId(),

    sectionBasedAds = {
        'arts':{
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/artsspecial': {
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/dance': {
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/design': {
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/fallpreviewartsseason': {
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/international': {
            evModule: [188, 41],
            Middle5: [300, 79],
            SFFranchise: [302, 250],
        },
        'arts/music': {
            evModule: [188, 41],
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/television': {
            evModule: [188, 41],
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'arts/videogames': {
            evModule: [188, 41],
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'automobiles': {},
        'automobiles/autoreviews': {},
        'automobiles/collectibles': {},
        'automobiles/autospecial2': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'books': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'books/review': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'booming': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business': {
            Middle4: [163, 90],
            Middle5: [300, 79],
        },
        'business/businessspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/businessspecial2': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/businessspecial3': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/businessspecial5': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/dealbook': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/economy': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/energyenvironment': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/international': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/media': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/mutfund': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/retirementspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/smallbusiness': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'business/yourtaxes': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'crosswords': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'corrections': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'dining': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'dining/international': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'education': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'education/edlife': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'fashion': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'fashion/weddings': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'fashion/mensstyle': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'giving': {
            Spon1: [[336, 46], [300,601]],
        },
        'garden': {
            Spon1: [[336, 46], [300,601]],
        },
        'greathomesanddestinations': {
            Spon1: [[336, 46], [300,601]],
        },
        'greathomesanddestinations/multimedia': {
            Spon1: [[336, 46], [300,601]],
        },
        'health': {
            Spon1: [[336, 46], [300,601]],
        },
        'health/nutrition': {
            Spon1: [[336, 46], [300,601]],
        },
        'health/policy': {
            Spon1: [[336, 46], [300,601]],
        },
        'health/research': {
            Spon1: [[336, 46], [300,601]],
        },
        'health/views': {
            Spon1: [[336, 46], [300,601]],
        },
        'jobs': {
            Spon1: [[336, 46], [300,601]],
        },
        'movies': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'movies/awardsseason': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
            Tile1: [160, 90],
            Tile2: [160, 90],
            Tile3: [160, 90],
            Tile4: [160, 90],
            Tile5: [160, 90],
        },
        'movies/homevideo': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'movies/moviesspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'multimedia': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'nyregion': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'nyregion/nyregionspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'obituaries': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'opinion': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'opinion/international': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'opinion/sundayreview': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'podcasts': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'realestate': {
            Middle5: [300, 79],
            Middle2B: [300, 250],
            Spon1: [[336, 46], [300,601]],
        },
        'realestate/commercial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'realestate/communities': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'realestate/mortgages': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/business': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/entertainment': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/news': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/politics': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/sports': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/technology': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'reuters/world': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'science': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'science/sciencespecial2': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'science/space': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'science/earth': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/baseball': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/basketball': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/football': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/golf': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/hockey': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/international': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/ncaabasketball': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/ncaafootball': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/olympics': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/soccer': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/tennis': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'sports/worldcup': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'style': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'style/international': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'tmagazine': {
            TMagMiddle: [300, 250],
        },
        'tmagazine/culture': {},
        'tmagazine/design': {},
        'tmagazine/issue': {},
        'tmagazine/food': {},
        'tmagazine/mensfashion': {},
        'tmagazine/travel': {},
        'tmagazine/womensfashion': {},
        'technology':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'technology/personaltech': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'technology/personaltechspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'theater':{
            evModule: [188, 41],
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'theater/theaterspecial': {
            evModule: [188, 41],
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'todayspaper':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'timestopics': {},
        'travel': {
            Spon1: [[336, 46], [300,601]],
        },
        'us':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'us/2014midtermelections': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'us/nationalspecial': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'us/nationalspecial2': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'us/politics':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world/africa': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world/americas': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world/asia': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world/europe': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'world/middleeast': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'yourmoney': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline':{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/business' :{
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/entertainment': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/health': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/news': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/nyregion': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/politics': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/science': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/sports': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/technology': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/us': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'aponline/world': {
            Middle5: [300, 79],
            Spon1: [[336, 46], [300,601]],
        },
        'timeswire': {},
        'emailthis': {},
        'archives/timesmachineabstract': {},
    },

    masterDfpAds = {
        PaidPost: [336, 138],
        SFBottom1: [305, 250],
        SponLink: [304, 250],
    },

    slotLevelCriteriaAds = {
        Box3: [[336, 90], 'feat3'],
        Feature1: [[336, 90], 'feat1'],
        MostPop: [[88, 31], 'emmod'],
        Middle1C: [[88, 31], 'ssearch'],
        SFMiddle: [[[300, 250], [300, 600]], 'mid1'],
        SFMiddle2: [[303, 250], 'mid2'],
        Box1: [[301, 250], 'mktg'],
    },

    businessAds = {
        SFPushDown: [[[970, 90], [970, 250], [970, 66]], ''],
        Spon1: [[[336, 46], [300,601]], ''],
        SFMiddle: [[[300, 250], [300, 600]], 'mid1'],
        SFMiddle2: [[303, 250], 'mid2'],
        TopLeft: [[184, 90], 'left'],
        TopRight: [[184, 91], 'right'],
    },

    dfpOrderedCustomCriteria = {
        'adv': '',
        'plat': 'web',
        'prop': 'nyt',
        'ver': 'nyt4',
        'typ': 'sf',
        'des': $('meta[name="description"]').attr('content'),
        'id': $('meta[name="asset_id"]').attr('content'),
        'ref': $('meta[name="PT"]').attr('content'),
        'edn': 'us',
        'page_view_id': pageViewId,
    },

    dfpOrderedOtherCustomCriteria = {
        'sub': '',
        'subsrc': '',
        'kuid': ''
    };

    function setUpKruxGlobal() {
        // This is code handed to us by Krux to integrate with DFP
        window.Krux = window.Krux || ((window.Krux = function () {
            window.Krux.q.push(arguments);
        }).q = []);
    }

    function retrieveKruxData(name) {
        var value;
        var key = 'kx' + name;

        if (window.localStorage) {
            return window.localStorage[key] || '';
        } else if (navigator.cookieEnabled) {
            value = document.cookie.match(key + '=([^;]*)');
            return (value && window.unescape(value[1])) || '';
        }
        return '';
    }

    function populateOtherCustomValues() {
        var criterium_ksg  = retrieveKruxData('segs');
        var criterium_kuid = retrieveKruxData('user');

        if (criterium_kuid) {
            dfpOrderedOtherCustomCriteria['kuid'] = criterium_kuid;
        }

        googletag.cmd.push(function () {
            NYTD.jQuery.each(dfpOrderedOtherCustomCriteria, function(criteriumKey, criteriumValue) {
                // Triming all the special characters
                criteriumValue = criteriumValue.replace(/[^a-z0-9\s]/gi, '');
                // Values should not have spaces
                criteriumValue = criteriumValue.replace(/ /g, '');
                // Characters per custom targeting value should not exceed 30 characters
                criteriumValue = NYTD.jQuery.trim(criteriumValue).substring(0, 30);
                // Values can not have uppercase letters
                criteriumValue = criteriumValue.toLowerCase();

                if (criteriumValue) {
                    googletag.pubads().setTargeting(criteriumKey, criteriumValue);
                }
            });
            if (criterium_ksg) {
                googletag.pubads().setTargeting('ksg', criterium_ksg);

                // Add to the global Krux object
                window.Krux.segments = criterium_ksg.split(',') || [];
                window.Krux.user     = criterium_kuid;
            }
        });
    }

    function parseSubscriberStatus () {
        $.ajax({
            url: subscriberInfoService,
            dataType: "json",
        }).always(function (data) {
            if (data && data.data) {
                if (data.data.demographics && data.data.demographics.bundle_subscriptions) {
                    var bundleSubscriptions = data.data.demographics.bundle_subscriptions;
                    if (bundleSubscriptions[0]) {
                        dfpOrderedOtherCustomCriteria['subsrc'] = bundleSubscriptions[0]['source'];
                        dfpOrderedOtherCustomCriteria['sub']    = bundleSubscriptions[0]['bundle'];
                    }
                }

                if (dfpOrderedOtherCustomCriteria['sub'].length < 1) {
                    if (data.data.id && data.data.id === '0') {
                        dfpOrderedOtherCustomCriteria['sub'] = 'anon';
                    } else if (data.data.subscription && data.data.subscription.length <= 4) {
                        dfpOrderedOtherCustomCriteria['sub'] = 'reg';
                    } else {
                        dfpOrderedOtherCustomCriteria['sub'] = 'sub';
                    }
                }
            }
            setUpKruxGlobal();
            populateOtherCustomValues();
        });
    }

    function defineOtherAdSlot() {
        if (slotLevelCriteriaAds) {
            NYTD.jQuery.each(slotLevelCriteriaAds, function(criteriumKey, criteriumValue) {
                googletag.cmd.push(function () {
                    var adSlot = googletag.defineSlot(taxonomy, criteriumValue[0], criteriumKey)
                                    .addService(googletag.pubads())
                                    .setCollapseEmptyDiv(true);
                    adSlot.setTargeting('pos', criteriumValue[1]);
                });
            });
        }
    }

    function defineAdSlots() {

        var currentSection    = $('meta[name="CG"]').attr('content');
        var currentSubSection = $('meta[name="SCG"]').attr('content');
        var currentURL        = window.location.href;
        var currentSectionAds;
        var appSections = ['emailthis', 'timeswire', 'archives'];

        taxonomy = networkCode;
        if ($('meta[name="PT"]').attr('content') === 'EmailThis') {
            currentSection       = 'emailthis';
            slotLevelCriteriaAds = {};
            masterDfpAds         = {};
        }

        if (currentSection === 'Archive') {
            currentSection       = 'archives';
            currentSubSection    = 'timesmachineabstract';
            slotLevelCriteriaAds = {};
            masterDfpAds         = {};
        }

        // Triming all the special characters
        currentSection = currentSection.replace(/[^a-z0-9\s]/gi, '');
        // Trim all the white spaces & convert to lower case because SFs like Topics have CG meta as 'Times Topics'
        currentSection = currentSection.replace(/ /g, '');
        currentSection = currentSection.toLowerCase();

        // Triming all the special characters
        if (currentSubSection) {
            currentSubSection = currentSubSection.replace(/[^a-z0-9\s]/gi, '');
            // Trim all the white spaces & convert to lower case because Sub SFs like opinion/Sunday Review have SCG meta as 'Sunday Review'
            currentSubSection = currentSubSection.replace(/ /g, '');
            currentSubSection = currentSubSection.toLowerCase();
        }

        if (location.hostname.indexOf("stg") !== -1) {
            taxonomy = taxonomy + stageTaxonomy;
        } else {
            taxonomy = taxonomy + prdTaxonomy;
        }

        // Any ad defining slots should be done only after taxonomy is set
        // Check for taxonomy exception of the section, if found use that
        var taxonomyException = $('meta[name="dfp-ad-path"]').attr('content');

        if (taxonomyException == 'none' || taxonomyException == '' || !taxonomyException) {
            taxonomy = taxonomy + currentSection + ((currentSubSection) ? ('/' + currentSubSection) : '');
        } else {
            taxonomy = taxonomy + taxonomyException;
        }

        if ($.inArray(currentSection , appSections) < 0) {
            taxonomy = taxonomy + '/sectionfront';
        }

        if (currentSubSection) {
            currentSectionAds = sectionBasedAds[currentSection + '/' + currentSubSection];
        } else {
            currentSectionAds = sectionBasedAds[currentSection];
        }

        $.extend(currentSectionAds, masterDfpAds);

        // Define SFPushdown,Spon1,SFMiddle,SFMiddle2 slot first for Biz SF(exclude biz sub sections)
        if (currentSection === 'business' && currentSubSection === '') {
            NYTD.jQuery.each(businessAds, function(adName, adValues) {
                if (adValues[1] === '') {
                    googletag.cmd.push(function () {
                        googletag.defineSlot(taxonomy, adValues[0], adName)
                        .addService(googletag.pubads())
                        .setCollapseEmptyDiv(true);
                    });
                } else {
                    googletag.cmd.push(function () {
                        var adSlot = googletag.defineSlot(taxonomy, adValues[0], adName)
                                     .addService(googletag.pubads())
                                     .setCollapseEmptyDiv(true);
                        adSlot.setTargeting('pos', adValues[1]);
                    });
                }
            });
        } else if (currentSection == 'emailthis') {
            googletag.cmd.push(function () {
                var bigAd3Slot = googletag.defineSlot(taxonomy, [300, 250], 'BigAd3')
                                 .addService(googletag.pubads())
                                 .setCollapseEmptyDiv(true);
                bigAd3Slot.setTargeting('pos', 'emthis');
            });
        } else if (!(currentSection == 'movies' && currentSubSection == 'awardsseason')) {
            //  Define TopAd slot for all SFs excluding movies/awardsseason(WP-10378)
            var topAdSize = '';
            if (currentSection == 'opinion') {
                topAdSize = [[970, 91], [970, 251], [970, 67]];
            } else if (currentSection === 'archives' || currentSection === 'timeswire') {
                topAdSize = [[728, 90]];
            } else {
                topAdSize = [[728, 90], [970, 90], [970, 66], [970, 250]];
            }
            googletag.cmd.push(function () {
                var topAdSlot = googletag.defineSlot(taxonomy, topAdSize, 'TopAd')
                                .addService(googletag.pubads())
                                .setCollapseEmptyDiv(true);
                topAdSlot.setTargeting('pos', 'top');
            });
        }

        NYTD.jQuery.each(currentSectionAds, function(adName, adSizes) {
            googletag.cmd.push(function () {
                googletag.defineSlot(taxonomy, adSizes, adName)
                .addService(googletag.pubads())
                .setCollapseEmptyDiv(true);
            });
        });


        if ($.inArray(currentSection , appSections) < 0) {
            defineOverlayAds();
        }

        if ((currentSection == 'style' && currentSubSection == '') || (currentSection == 'sports' && currentSubSection == 'worldcup') || (currentSection == 'realestate' && currentSubSection == '')) {
            googletag.cmd.push(function () {
                var frame2BSlot = googletag.defineSlot(taxonomy, [336, 90], 'Frame2B')
                                .addService(googletag.pubads())
                                .setCollapseEmptyDiv(true);
                frame2BSlot.setTargeting('pos', 'feat2');
            });
        }

        if (currentSection == 'realestate' && currentSubSection == '') {
            googletag.cmd.push(function () {
                var middle7BSlot = googletag.defineSlot(taxonomy, [304, 250], 'Middle7B')
                                .addService(googletag.pubads())
                                .setCollapseEmptyDiv(true);
                middle7BSlot.setTargeting('pos', 'feat4');
            });
        }

        // Deleting SFmiddle & SFmiddle2 ads as it is already defined in businessAds obj for only business SF
        if (currentSection === 'business' && currentSubSection == '') {
            delete slotLevelCriteriaAds.SFMiddle;
            delete slotLevelCriteriaAds.SFMiddle2;
        }

        if (currentSection == 'archives') {
            googletag.cmd.push(function () {
                var middleRightSlot = googletag.defineSlot(taxonomy, [300, 250], 'MiddleRight')
                               .addService(googletag.pubads())
                               .setCollapseEmptyDiv(true);
                middleRightSlot.setTargeting('pos', 'mid1');
            });
        }

        defineOtherAdSlot();

        googletag.cmd.push(function () {
           googletag.pubads().enableSingleRequest();
           googletag.enableServices();
       });
    }

    function defineOverlayAds() {
        googletag.cmd.push(function () {
            var adSlot = googletag.defineSlot(taxonomy, [[1, 1], [640, 480]], 'Top5')
                            .addService(googletag.pubads())
                            .setCollapseEmptyDiv(true);

        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
            var currentAd = event.slot.getSlotId().getDomId();
            if ((currentAd) == 'Top5') {
                // Defining the Top5 DIV Variable for multiple use
                var top5Div = '<div id="Top5" name="dfp"><script type="text/javascript">googletag.cmd.push(function() { googletag.display("Top5"); });</script></div>';
                // checking if Top5 Ad
                 if (event.size[0] === 1) {
                    // checking if TOP5 DIV is already there then skip
                    if (NYTD.jQuery('#shell > #Top5').length === 0) {
                        NYTD.jQuery('#shell').prepend(top5Div);
                    }
                } else if (event.size[0] === 640) {
                    // checking if interstitial-ad DIV is already there then skip
                    if (NYTD.jQuery('body > #interstitial-ad-modalContainer').length === 0) {
                        // call to showInterstitialAd method which will show the interstitial Ad on page
                        showInterstitialAd(top5Div);
                    }
                }
            } else if (NYTD.jQuery('#' +currentAd).find('iframe').contents().find('#exclusivity').length > 0) {
                NYTD.jQuery('#' +currentAd).hide();
            }
        });

        });
    }

    function getQueryParameter() {
        var keyword = 'ad-keywords'
        var name    = keyword.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS  = "[\\?&]"+name+"=([^&#]*)";
        var regex   = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null ) {
            return "";
        } else {
            return results[1];
        }
    }

    function isGlobalEdition() {
        var edition = unescape(document.cookie).match('NYT-Edition=([^;]+)');
        return (edition && edition[1] && edition[1].indexOf("edition|GLOBAL") !== -1);
    }

    function populateCustomValues() {

        dfpOrderedCustomCriteria['adv'] = getQueryParameter();
        if (isGlobalEdition()) {
            dfpOrderedCustomCriteria['edn'] = 'intl';
        }

        if ($('meta[name="PT"]').attr('content') === 'EmailThis') {
            delete dfpOrderedCustomCriteria.id;
            delete dfpOrderedCustomCriteria.des;
        }

        if ($('meta[name="CG"]').attr('content') === 'timeswire') {
            masterDfpAds = {};
            delete dfpOrderedCustomCriteria.id;
            delete slotLevelCriteriaAds.Box3;
            delete slotLevelCriteriaAds.Feature1;
            delete slotLevelCriteriaAds.MostPop;
            delete slotLevelCriteriaAds.Middle1C;
            delete slotLevelCriteriaAds.SFMiddle2;
            delete slotLevelCriteriaAds.Box1;
        }

        if ($('meta[name="CG"]').attr('content') === 'Archive') {
            delete dfpOrderedCustomCriteria.id;
        }

        googletag.cmd.push(function () {
            NYTD.jQuery.each(dfpOrderedCustomCriteria, function(criteriumKey, criteriumValue) {
                // Skip the pageViewId CustomCriteria as this is unique ID
                if (criteriumKey != 'page_view_id') {
                    // Triming all the special characters
                    criteriumValue = criteriumValue.replace(/[^a-z0-9\s]/gi, '');
                    // Values should not have spaces
                    criteriumValue = criteriumValue.replace(/ /g, '');
                    // Characters per custom targeting value should not exceed 30 characters
                    criteriumValue = NYTD.jQuery.trim(criteriumValue).substring(0, 30);
                    // Values can not have uppercase letters
                    criteriumValue = criteriumValue.toLowerCase();
                }
                if (criteriumValue) {
                    googletag.pubads().setTargeting(criteriumKey, criteriumValue);
                }
            });
        });
    }

    function showInterstitialAd(top5Div) {
        var adModalContainer = "NYTD.jQuery('#interstitial-ad-modalContainer').hide();";

        // Interstitial AD HTML
        var interstitialHtml =
            ['<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center"><tbody><tr>' ,
            '<td align="left"><img src="https://static01.nyt.com/ads/interstitial/nyt_adv.gif" width="341" height="30"></td>',
            '<td align="right" style="cursor: pointer; padding: 0 10px; width: 70px;"><a id="skip" onclick="', adModalContainer , '";><img name="skip" src="https://static01.nyt.com/ads/interstitial/skip_0.gif" width="69" height="30" border="0"></a></td></tr>',
            '<tr><td colspan="2" bgcolor="#EDEDED" align="center">', top5Div, '</td></tr></tbody></table>'].join('');

        // Initializing interstitialModal
        var interstitialModal = NYTD.UI.OverlayModal({
            uniqueId: 'interstitial-ad-modal',
            modalTitle: 'advertisement',
            modalHTML: interstitialHtml,
            openCallback: function () {
                setTimeout(function() {
                    NYTD.jQuery('#interstitial-ad-modalContainer').fadeOut('slow');
                }, 20000);
            },
        }).addToPage().open({preventDefault: NYTD.jQuery.noop});
    }

    function generatePageViewId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    function handlePageViewId() {
        trackingTrigger(
        'page_view_id',
            {'module': 'page',
             'priority': true,
             'page_view_id': pageViewId
            },
           'interaction'
        );
    }

    function trackingTrigger(action, trackingData, type) {
        if (window.TAGX && window.TAGX.EventProxy && window.TAGX.EventProxy.trigger) {
            try {
                window.TAGX.EventProxy.trigger(action, trackingData, type);
            }
            catch(e) {
                //Tagx didn't work :-/
            }
        }
    }

    window.onload = function() {
        handlePageViewId();
    }

    return {
        parseSubscriberStatus: parseSubscriberStatus,
        populateCustomValues: populateCustomValues,
        defineAdSlots: defineAdSlots
    };
}(window.googletag, NYTD.jQuery));

// Infosys-1255
// Check for PII and if found disable dfp
var referrer = document.referrer || '';
var url = window.location.href;
var emailMatch = /([a-zA-Z0-9_\-\.]+)(@|%40)([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/;

if ( !(emailMatch.test(url) || emailMatch.test(referrer)) ) {
    NYTD.dfpAds.parseSubscriberStatus();
    NYTD.dfpAds.populateCustomValues();
    NYTD.dfpAds.defineAdSlots();
}
