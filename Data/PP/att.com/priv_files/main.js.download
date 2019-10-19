/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
(function($) {
    $(function () {
        // Used to output caught errors
        function errorLog(error, message) {
            try {
                if ($.cq.isAuthor() || window.location.hash == '#debug') {
                    if (typeof console != 'undefined' && typeof console.log  != 'undefined') {
                        console.log(error);
                        console.log(message);
                    }
                    alert(error.name+':\n'+error.message+'.\n'+message+'.');
                }
            } catch (e) { }
        }

        try {
            // Opacity fading conflicts in IE8 with the PNG fix and text anti-aliasing
            var fadingSpeed = $.browser.msie ? 0 : 250;

            // Removes the URL hash if it corresponds to the id of an element in the given context
            function removeHash(context) {
                try {
                    if (window.location.hash.length > 0 && $(window.location.hash, context).length > 0) {
                        window.location = (window.location+'').replace(window.location.hash, '');
                    }
                } catch (e) {
                    errorLog(e, 'Could not remove hash');
                }
            }

            // carousel code
            try {
                $('.cq-carousel').each(function () {
                    var carousel = $(this);
                    var playDelay = +$("var[title='play-delay']", this).text();
                    if (!playDelay) {
                        playDelay = 6000;
                    }
                    var slidingSpeed = +$("var[title='transition-time']", this).text();
                    if (!slidingSpeed) {
                        slidingSpeed = 1000;
                    }
                    var banners = $('.cq-carousel-banners', this);
                    //do not why, but
                    // var links = $('.cq-carousel-banner-switch a', this);
                    //returns more links than expected after component reload. Changed to "find" = works......
                    var switcher = $('.cq-carousel-banner-switch', this);
                    var links = switcher.find('a');
                    var items = $('.cq-carousel-banner-item', this);
                    var width = items.outerWidth();
                    var itemActive = items.filter(':first');
                    var itemPrevious = null;
                    var interval = null;
                    var i = 0;

                    var ctlPrev = $('a.cq-carousel-control-prev', this);
                    ctlPrev.click(function() {
                        if (ctlPrev.is('.cq-carousel-active')) {
                            $(links[(i+links.length-1)%links.length]).click();
                        }
                        return false;
                    });
                    var ctlNext = $('a.cq-carousel-control-next', this);
                    ctlNext.click(function() {
                        if (ctlNext.is('.cq-carousel-active')) {
                            $(links[(i+1)%links.length]).click();
                        }
                        return false;
                    });
                    if (links.length > 1) {
                        ctlNext.addClass('cq-carousel-active');
                    }
                    function play() {
                        stop();
                        if( playDelay > 0) {
                            interval = setInterval(function () {
                                $(links[(i+1)%links.length]).click();
                            }, playDelay);
                        }
                    }
                    function stop() {
                        if (interval !== null) {
                            clearInterval(interval);
                            interval = null;
                        }
                    }

                    // Show first item (needed for browsers that don't support CSS3 selector :first-of-type)
                    if (fadingSpeed || $.browser.version > 6) {
                        itemActive.css('left', 0);
                    } else {
                        itemActive.show();
                    }

                    links
                        .click(function () {
                            var link = $(this);
                            var itemNew = items.filter(link.attr('href'));
                            var j = itemNew.prevAll().length;
                            var direction = (j > i || interval !== null) ? 1 : -1;

                            if (!link.is('.cq-carousel-active')) {
                                links.removeClass('cq-carousel-active');
                                link.addClass('cq-carousel-active');

                                if (itemActive.is(':animated')) {
                                    itemActive.stop(true, true);
                                    itemPrevious.stop(true, true);
                                }

                                if (fadingSpeed) {
                                    itemNew.css({'left': direction*width}).animate({'left': 0, 'opacity': 1}, slidingSpeed);
                                    itemActive.animate({'left': -direction*width, 'opacity': 0}, slidingSpeed);
                                } else if ($.browser.version > 6) {
                                    itemNew.css({'left': direction*width}).animate({'left': 0}, slidingSpeed);
                                    itemActive.animate({'left': -direction*width}, slidingSpeed);
                                } else {
                                    itemNew.fadeIn();
                                    itemActive.fadeOut();
                                }

                                itemPrevious = itemActive;
                                itemActive = itemNew;
                                i = j;
                                if (i > 0) {
                                    ctlPrev.addClass('cq-carousel-active');
                                } else {
                                    ctlPrev.removeClass('cq-carousel-active');
                                }
                                if (i < links.length-1) {
                                    ctlNext.addClass('cq-carousel-active');
                                } else {
                                    ctlNext.removeClass('cq-carousel-active');
                                }
                            }

                            return false;
                        })
                        .each(function () {
                            var link = $(this);

                            link.attr('title', link.text());
                        })
                        .filter(':first').addClass('cq-carousel-active');

                    play();
                    carousel.hover(
                            function() {
                                stop();
                                ctlPrev.fadeIn();
                                ctlNext.fadeIn();
                            },
                            function() {
                                play();
                                ctlPrev.fadeOut();
                                ctlNext.fadeOut();
                            }
                    );

                    // Accessing the page with the anchor of a banner in the URL can break the layout
                    removeHash(this);
                });
            } catch (e) {
                errorLog(e, 'Could not initialize the banners');
            }
        } catch (e) {
            errorLog(e, 'Init failed');
        }
    });
})($CQ || $);
/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * Utility functions for forms components.
 */
function cq5forms_isArray(obj) {
	return typeof obj.length == 'number' && obj.item;
}

function cq5forms_showMsg(fid, field, msg, index) {
    var f = document.forms[fid].elements[field];
    alert(msg);
    if ( cq5forms_isArray(f) ) {
    	if ( !index) index = 0;
    	f[index].focus();
    } else {
    	f.focus()
    }
}
function cq5forms_isEmpty(obj) {
    var empty = true;
    if ( cq5forms_isArray(obj)) {
        for(i=0;i<obj.length;i++) {
            if (obj[i].type == "radio" || obj[i].type == "checkbox" ) {
                if (obj[i].checked) {empty = false;}
            } else {
                if (obj[i].value.length>0) { empty = false;}
            }
        }
    } else {
        if (obj.type == "radio" || obj.type == "checkbox" ) {
            if (obj.checked) {empty = false;}
        } else {
            if (obj.value.length>0) { empty = false;}
        }
    }
    return empty;
}
function cq5forms_regcheck(obj, pattern) {
    var result=false;
    var t = pattern.exec(obj);
    if (t) {
        var len = obj.length;
        var pattlen = t[0].length;
        result = (pattlen == len);
    }
    return result;
}

/**
 * Check the MultiResource checkbox if the value of the according field changes.
 * @param {Event} evt The event
 * @param {String} name The name of the mr checkbox
 * @param {boolean} force Force to check the mr checkbox
 */
function cq5forms_multiResourceChange(evt, name, force) {
    if (!force) {
        if (!evt) evt = window.event;
        if (evt.keyCode < 48 && evt.keyCode != 8 && evt.keyCode != 46) {
            //skip control keys, allow backspace and delete
            return;
        }
    }
    try {
        document.getElementById(name).checked = true;
    }
    catch (e) {}
}
