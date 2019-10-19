/*
* 	Easy Paginate 1.0 - jQuery plugin
*	written by Alen Grakalic	
*  customized by T3 -slwf
*	http://cssglobe.com/
*
*	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com)
*	Dual licensed under the MIT (MIT-LICENSE.txt)
*	and GPL (GPL-LICENSE.txt) licenses.
*
*	Built for jQuery library
*	http://jquery.com
*
*/

(function ($) {

    $.fn.easyPaginate = function(options) {

        var defaults = {
            step: 4,
            delay: 100,
            numeric: true,
            activetotal: false,
            nextprev: true,
            auto: false,
            pause: 4000,
            clickstop: true,
            container: 'agent-nav',
            controls: 'pagination-nav',
            previousBtn: 'pgPrev',
            nextBtn: 'pgNext',
            current: 'current',
            nextTrack: '',
            prevTrack: '',
            pgTrack: '',
            callbackFn: function() {}
        };

        var options = $.extend(defaults, options);
        var step = options.step;
        var lower, upper;
        var children = $(this).children();
        var count = children.length;
        var obj, next, prev;
        var page = 1;
        var timeout;
        var clicked = false;
        
        //console.log(options);

        function show() {
            clearTimeout(timeout);
            lower = ((page - 1) * step);
            upper = lower + step;
            $(children).each(function(i) {
                var child = $(this);
                child.hide();
                if (i >= lower && i < upper) { setTimeout(function() { child.fadeIn('fast') }, (i - (Math.floor(i / step) * step)) * options.delay); } else { /* Do nothing */ }            
                if (options.nextprev && !options.activetotal) {
                    if (upper >= count) { next.addClass('disabled'); } else { next.removeClass('disabled'); }
                    if (lower >= 1) { prev.removeClass('disabled'); } else { prev.addClass('disabled'); }
                } else { /* Do nothing */ }
            });
            $('li', '.' + options.controls).removeClass(options.current);
            $('li[data-index="' + page + '"]', '.' + options.controls).addClass(options.current);

            if (options.auto) {
                if (options.clickstop && clicked) {/* Do nothing */} else { timeout = setTimeout(auto, options.pause); }
            } else { /* Do nothing */ }
        }

        function auto() {
            if (upper <= count) { page++; show(); } else { /* Do nothing */ }
        }
        
        function arrowDisable(pg, pgs) {                      
           if ((pg == 1) && (pg !== pgs))
           {
              $('.'+options.previousBtn).addClass('first disabled');
              $('.'+options.nextBtn).removeClass('last disabled');
           } else{ /* Do nothing */ }
           
           if (pg == pgs) {
              $('.'+options.previousBtn).removeClass('first disabled');              
              $('.'+options.nextBtn).addClass('last disabled');
           }
           else if ((pg < pgs) && (pg !== 1))
           {
              $('.'+options.previousBtn).removeClass('first disabled');
              $('.'+options.nextBtn).removeClass('last disabled');
           }
           else
           {
              /* Code should never allow pg to be greater than the total # of pages */
           }                         
        }

        this.each(function() {
            obj = this;

            if (count > step) {
                var pages = Math.floor(count / step);
                if ((count / step) > pages) { pages++; } else { /* Do nothing */ }  
                
                if (options.activetotal) {
                  $('<div class="pageOfTotal"><span class="activePage">' + page + '</span> of <span class="pgTotal">' + pages + '</span></div>').appendTo($('.' + options.container));
                } else { /* Do nothing */ }
                
                var ol = $('<ol class="' + options.controls + '"></ol>').appendTo($('.' + options.container));

                if (options.nextprev) {
                    prev = $('<li class="' + options.previousBtn + ' prev"><a href="#" onclick="' + options.prevTrack + '; return false;" name="&lpos=QuoteAgentCTA">Prev</a></li>').appendTo(ol);                    
                          
                    $('.'+options.controls)
					 	  .delegate('.prev:not(.disabled)','click',function() {
						      clicked = true;
						      page--;
						      show();
                        if (options.activetotal) {
                           $('.'+options.container + ' .activePage').html(page);
                           arrowDisable(page, pages);
                        } else { /* Do nothing */ }                       
		  				  });                
                } else { /* Do nothing */ }

                if (options.numeric) {
                    for (var i = 1; i <= pages; i++) {
                        $('<li data-index="' + i + '"><a href="#" onclick="' + options.pgTrack + i + '; return false;" name="&lpos=QuoteAgentCTA">' + i + '</a></li>')
      						.appendTo(ol)
      						.click(function() {
      						    clicked = true;
      						    page = $(this).attr('data-index');
      						    show();
      						});
                    }
                } else { /* Do nothing */ }

                if (options.nextprev) {
                    next = $('<li class="' + options.nextBtn + ' next"><a href="#" onclick="' + options.nextTrack + '; return false;" name="&lpos=QuoteAgentCTA">Next</a></li>').appendTo(ol);                    
                    
                    $('.'+options.controls)
   					 	  .delegate('.next:not(.disabled)','click',function() {
   						    clicked = true;
   						    page++;
   						    show();
                         if (options.activetotal) {
                            $('.'+options.container + ' .activePage').html(page);
                            arrowDisable(page, pages);
                         } else { /* Do nothing */ }                         
   					  });
                } else { /* Do nothing */ }

                show();
                if (options.activetotal) {
                   arrowDisable(page, pages);
                } else { /* Do nothing */ }
            } else { /* Do nothing */ }
        });
        
        options.callbackFn.call(this);
    };
})(jQuery);
