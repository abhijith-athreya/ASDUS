//  Bar1 - NYT4/NYT5, Dynamic ET, TagX Integration 20160128 ~matt.milligan
// 201600309 Edited by Frederic.Gurnot: Add meter count messaging
// 20160108 Edited by Frederic.Gurnot: Add check for prototype page
// 20160421 Edited by Matt.Milligan: Include Text-Only Version
// Refactor Wait for DOM changes to display on NYT5
// NYT5 Selector: #Bar1
// NYT4 Selector: #bar1-3panel
// To pull ADX Campaign Name, replace line below within creative:
// <div id="hovercard" data-campaign-name="%%CAMP%%">

(function (window) {
    "use strict";

    var $, Meter, hasMeter;

    /**
     * Checking if current page depends on NYT5 foundation framework.
     * @returns {boolean}
     */
    function isPrototype() {
        // Pages with metatag prototype cannot use require
        // Jquery is defined globally on these pages and require is not...required

        return document.querySelectorAll("meta[name='prototype']").length > 0;

    }


    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp'),
            nytApps = {
                'nyt-v5': true,
                'blogs': true
            };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }


    if (isPrototype()) {

        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        showOnNYT5();

    } else {

        if (isNyt5()) {
            require(['foundation/main'], function () {
                $ = require('jquery/nyt');
                try {
                    Meter = require('auth/mtr');
                    hasMeter = true;
                } catch (e) {
                    // Page doesn't have mtr.js
                }

                showOnNYT5();
            });
        } else {
            // NYT4
            $ = (window.NYTD && window.NYTD.jQuery) || window.jQuery;
            showOnNYT4();
            run();
        }
    }

    function showOnNYT4() {
        $('#bar1-nyt5wrapper ul').contents().unwrap();
        $('#bar1-nyt5wrapper').contents().unwrap();
    }


    /**
     * Modify DOM for NYT5
     */
    function showOnNYT5() {
        //Check Bar1 Version: Text or Hover
        var $container = $('#bar1-textlink');

        if ($container.length > 0) {
            $container.wrap('<div id="bar1-textlink" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');
        } else {
            // The container is hidden while this is happening
            $container = $('.bar1_hover');
            $('#nyt-button-sub').addClass('button');
        }
        //Fix FireFox NYT subscribe button issue
        var FIREFOX = /Firefox/i.test(navigator.userAgent);
        if (FIREFOX) {
            $('#nyt-button-sub').css("height", "30px");
        } else {
            $('#nyt-button-sub').css("height", "15px");
        }

        // Wrap a string of HTML around NYT4 container
        //$container.wrap('<div id="bar1-nyt5wrapper" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');

        // Add subscribe link for small view port
        $('#subscribe_small').removeClass("sub_small_hide");
        $('#subscribe_small').css("visibility", "visible");

        runWhenReady(
            function () {
                return $('#bar1-nyt5wrapper');
            },
            run,
            200, 50
        );


    }


    function runWhenReady(testFunction, inFunction, mlsecs, reps) {
        setTimeout(function z() {
            if (testFunction()) {
                inFunction();
            } else if (--reps) {
                setTimeout(z, mlsecs);
            }
        }, mlsecs);
    }

    //ET tracking
    function trackET(dataObj, config) {
        dataObj = dataObj || {};
        runWhenReady(
            function () {
                return (window.NYTD && NYTD.EventTracker && NYTD.EventTracker().track);
            },
            function () {
                NYTD.EventTracker().track(dataObj, config);
            },
            100, 50
        );
    }



    // -----------------------------------------
    // ------      Creative Specific      ------

    function run() {
        $('#bar1-nyt5wrapper').css("opacity", "1");
        $('.bar1_hover').css("opacity", "1");
        $('#nyt-button-sub').show();

        //impressions and hover are for control and variations
        //this will be reused for hover: action: "hover"
        var campname = $("#hovercard").data("campaign-name");
        var eventObj = {
            subject: "module-interactions",
            moduleData: JSON.stringify({
                contentCollection: ("" + campname), //adxCampaignName,

                module: "Ad",
                version: "Bar1",
                action: "hover",
                eventName: "adExpansion"
            })
        };

        // Bar1 user interaction
        $('.bar1_hover').hover(function (e) {
            $('#hovercard').stop(true, true).delay(400).fadeIn('fast');
            $('.nyt-button-actions').removeClass('highlightButton');
            trackET($.extend({}, eventObj, {
                action: "hover",
                eventName: "adExpansion"
            }), {
                buffer: false
            });
        }, function () {
            $('#hovercard').stop(true, true).delay(0).fadeOut('fast');
        });

        $('.split').hover(function () {
            $('.nyt-button-actions').removeClass('highlightButton');
            $(this).find('.nyt-button-actions').addClass('highlightButton');
        });


        //Update meter
        if (hasMeter) {
            var mc = Meter.pageCount;

            $(".bar1--meter--count").each(function (i) {
                $(this).text(mc);
            });
            if (mc === 1) {
                $('.ad.bar1-ad .user-subscriptions-menu .plural-s').addClass('hidden');
            } else if (mc > 10 || !mc) {
                $('.ad.bar1-ad .bar1-hidden').addClass('hidden');
            }
        } else {
            $('.bar1-hidden').addClass('hidden');
        }


        if (typeof addFloodlight == 'function') {
            addFloodlight();
        }

    }
})(window);