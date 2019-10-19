/*!
 * jQuery uLightBox
 * http://www.userdot.net/#!/jquery
 *
 * Copyright 2011, UserDot www.userdot.net
 * Licensed under the GPL Version 3 license.
 * Version 1.0.0
 *
 */
var uLightBox = {
    skeleton: '<div id="uLightBoxOverlay" style="display:none" class="opaque"><div id="uLightBox" class="shadow top bottom" style="display:none"><div id="lbHeader" class="top"></div><div id="lbContent"></div><div id="lbFooter" class="bottom"></div></div></div>',
    settings: {},
    init: function(opts) {
        uLightBox.settings = opts;
        $('body').append(uLightBox.skeleton);
        if (uLightBox.settings.override) {
            $('<script />').attr({
                type:'text/javascript'
            }).html("function alert(val){ uLightBox.alert({ title: 'Alert', text: val, rightButtons: ['OK'] }); }").appendTo('head');
            if (uLightBox.settings.background != "none" && (uLightBox.settings.background == 'white' || uLightBox.settings.background == 'black')) {
                $('#uLightBoxOverlay').addClass(uLightBox.settings.background);
            }
            else {
                $('#uLightBoxOverlay').addClass('none');
            }
        }
        if (uLightBox.settings.centerOnResize) {
            $(window).bind('resize', function() {
                uLightBox.resize();
            });
        }
    },
    alert: function(options) {
        if (uLightBox.isOpen()) {
            return false;
        }
        $('#uLightBox').css({
            width: options.width
        });
        uLightBox.resize();
        $('#uLightBox #lbHeader').html('<header>'+options.title+'</header>');
        buttons = '';
        lb = options.leftButtons;
        rb = options.rightButtons;
        if (lb) {
            for (var i=(options.leftButtons).length-1; i>=0; i--) {
                buttons += '<input type="button" class="flat" value="'+options.leftButtons[i]+'">';
            }
        }
        if (rb) {
            for (var i=(options.rightButtons).length-1; i>=0; i--) {
                buttons += '<input type="button" class="flat floatRight" value="'+options.rightButtons[i]+'">';
            }
        }
        if (!lb && !rb) {
            buttons += '<input type="button" class="flat floatRight" value="OK">';
        }
        $('#uLightBox #lbFooter').html(buttons);
        $('#uLightBox #lbContent').html(options.text);
        uLightBox.listen();
        if (uLightBox.settings.fade) {
            $('#uLightBoxOverlay').fadeIn();
        }
        else {
            $('#uLightBoxOverlay').show();
        }
        if (!!window.jQuery.ui) {
            $('#uLightBox').draggable({
                handle: '#lbHeader', 
                containment: 'parent'
            }).show();
        }
        else {
            $('#uLightBox').show();
        }
        if (typeof options.opened == 'function') {
            options.opened.call(this);
        }
        if (typeof options.onClick == 'function') {
            uLightBox.onClick = options.onClick;
        }
    },
    isOpen: function() {
        var open = $('#uLightBox').css('display') == "block";
        return open;
    },
    clear: function() {
        $('#uLightBoxOverlay').remove();
        if (uLightBox.settings.fade) {
            $('#uLightBoxOverlay').fadeOut();
        }
        else {
            $('#uLightBoxOverlay').hide();
        }	
        $('body').append(uLightBox.skeleton);
        uLightBox.resize();
    },
    listen: function() {
        $('#lbFooter input').each(function() {
            $(this).attr({
                'id': this.value
            });
        });
        $('#lbFooter input').click(function() {
            uLightBox.action($(this).val());
        });
    },
    action: function(key) {
        if (key == "Cancel" || key == "Close" || key == "Quit" || key == "Back" || key == "OK") {
            uLightBox.clear();
        }
        uLightBox.onClick(key);
    },
    resize: function() {
        var lbox = $('#uLightBox');
        var height = parseInt((lbox.css('height')).replace('px', ''));
        var width = parseInt((lbox.css('width')).replace('px', ''));
        lbox.css({
            top: ($(window).height()/2 ) - 100 + 'px',
            left: ($(window).width() - width)/2 + 'px'
        });
    },
    onClick: function() {
        
    },
    destroy: function() {
        $('#uLightBoxOverlay').remove();
        $(window).unbind('resize');
    }
}