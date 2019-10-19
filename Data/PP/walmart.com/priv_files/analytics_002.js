if (typeof jQuery !== 'undefined') (function($, win, undef) {
    var $doc = $(win.document),
            imprs = [],
            $script = $('[data-cms-main-id]'),
            mainId = $script.attr('data-cms-main-id') || '',
            ids = $.parseJSON($script.attr('data-cms-ids')),
            onClick;

    $.each(ids, function(index, id) {
        imprs.push(id);
    });

    $.ajax({
        'type': 'POST',
        'url': '/_track',
        'cache': false,
        'traditional': true,
        'data': {
            'e': 'i',
            'p': mainId,
            'i': imprs
        }
    });

    onClick = function() {
        var $anchor = $(this),
                href = $anchor.attr('href'),
                id,
                end,
                complete;

        if (href && !(href.length >= 10 && href.substring(0, 11).toLowerCase() === 'javascript:')) {
            id = ids[$anchor.closest('[data-cms-ai]').attr('data-cms-ai')];

            if (id) {
                end = +new Date() + 200;

                $.ajax({
                    'type': 'POST',
                    'url': '/_track',
                    'cache': false,
                    'traditional': true,
                    'data': {
                        'e': 'c',
                        'p': mainId,
                        'h': href,
                        'i': id
                    },
                    'complete': function() {
                        complete = true;
                    }
                });

                while (!complete) {
                    if (+new Date() > end) {
                        break;
                    }
                }
            }
        }
    };

    if ($.fn.on) {
        $doc.on('click.analytics', 'a', onClick);

    } else if ($.fn.delegate) {
        $doc.delegate('a', 'click.analytics', onClick);

    } else if ($.fn.live) {
        $doc.find('a').live('click.analytics', onClick);

    } else {
        $doc.find('a').bind('click.analytics', onClick);
    }
})(jQuery, window);
