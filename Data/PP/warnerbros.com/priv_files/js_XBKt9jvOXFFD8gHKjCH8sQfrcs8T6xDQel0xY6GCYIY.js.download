(function($, Drupal, window, document, undefined) {

   isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|\bSilk\b/i.test(
      navigator.userAgent);
   var smallScreenSize = 768;

   // Main menu states and text messages in submenu.
   Drupal.behaviors.MainMenu = {

      attach: function(context, settings) {

         //replace year-link if it exists for legal
         try {
            if ($('.legal-year').length) {
               $('.legal-year').text(new Date().getFullYear());
            }
         } catch (e) {

         }
      }

   };

   Drupal.behaviors.Custom = {

      attach: function(context, settings) {
         // Keep the date filter same across tabs in featured block ontile pages.
         $(".featured-view select", context).once().click(function() {
            // $(this).parents(".panel-pane").find('.view-footer .throber-icon').show();
            $("select#" + this.id).val($(this).val()).change();

         });

         // FitVids for responsive videos
         $("body").fitVids();

         // Remove classes from breakpoints_panels wrapper
         var breakpoints_panels_wrapper = $(
            '.hide-custom-user-narrow, .hide-custom-user-mobile, .hide-custom-user-tablet'
         );
         if (breakpoints_panels_wrapper.length > 0) {
            breakpoints_panels_wrapper.removeClass(function(index, css) {
               return (css.match(/\bsection\S+/g) || css.match(
                  /\bb-\S+/g) || []).join(' ');
            });
         }

         // Fixed position fix for iOS
         // Ref: http://dansajin.com/2012/12/07/fix-position-fixed/
         if (isTouch) {
            var $body = $('body');
            $("#main input").once().on('focus', function(e) {
               $body.addClass('fixfixed');
            }).on('blur', function(e) {
               $body.removeClass('fixfixed');
            });
         }

         // Purchase Links on node detail page
         var dropbtn = $(".purchase-link.dropdown").find(
            "a.select-list", context);
         $("body, .select-links > a").once().on('click', function() {
            if (dropbtn.hasClass("open")) {
               dropbtn.removeClass("open");
               $(".select-links").slideUp("fast");
            }
         });
         dropbtn.once().on("click", function(e) {
            if ($(this).hasClass("open")) {
               $(this).removeClass("open");
               $(".select-links").slideUp("fast");
            } else {
               $(this).addClass("open");
               $(".select-links").slideDown("fast");
            }
            e.stopPropagation();
         });

         // Replace image title attribute with link title.
         links = $(
            ".section-featured a, .section-featured-pods a, .section-promo-apps a"
         );
         links.once().each(function() {
            $(this).find("img").attr("title", $(this).attr(
               "title"));
         });

         var currentBaseReg = new RegExp('^' + window.document.location
            .origin);
         var checkLinksAddBlank = function() {
            var links = $(".view-home-new-and-now a");
            if (links.length) {
               links.each(function(indx, item, arr) {
                  var link = $(item).attr('href');
                  if (!currentBaseReg.test(link)) {
                     $(item).attr('target', '_blank');
                  }
               });
            }

         };

         checkLinksAddBlank();


      }
   };

   Drupal.behaviors.TabbedView = {
      currentYTPlayer: null,
      onPlayerReadyOne: function(pause, event) {

         //debugger
         if (pause) {
            event.target.pauseVideo();
         }

         this.currentYTPlayer = event.target;
      },
      createYTHook: function(pause) {
         var playerElem = $('iframe.media-youtube-player');
         var onPlayerReadyOneProxy = $.proxy(this.onPlayerReadyOne,
            this, pause);
         if (playerElem.length) {
            var id = playerElem.attr('id');
            var player = new YT.Player(id, {
               events: {
                  'onReady': onPlayerReadyOneProxy
                     //'onStateChange': function( event ){
                     //   debugger
                     //}
               }
            });

            //this.currentYTPlayer = player;
            //debugger
         }

      },
      movePlayerOverThumb: function(container, thumb, scroll_config) {
         if ($(window).width() < smallScreenSize) {
            var thumb = $("#videos-list .yt-thumb.active");
            var container = $(".section-media-container .pane-content");
            if (thumb.length) {
               // console.info('thumb found: thumb.height = ', thumb.height());
               var offset = thumb.offset();
               // console.info('align container to thumb.top: ', offset.top);
               if (container) {
                  container.show();
                  // console.info('container found: ', container.height());
                  container.height(thumb.height());
                  // console.info('resize container.height: ',container.height());
                  container.offset({
                     top: offset.top
                  });
                  // console.info('move container: container.top = ',container.offset().top);
                  if (scroll_config) {
                     $.smoothScroll(scroll_config);
                  }
               }
               // } else {
               //    console.info('thumb not found');
            }
            // } else {
            //    console.info('this is not a mobile device');
         }

      },
      embedYTPlayer: function(ytid, container, fromtabclick, thumb) {

         if (!(this.currentYTPlayer)) {
            var iframeEmbed = '<iframe width="' + 643 + '" height="' +
               359 +
               '" class="media-youtube-player demonstratieVideo-processed video-embed" title="' +
               ytid + '" src="//www.youtube.com/embed/' + ytid +
               '?wmode=opaque&amp;autoplay=1&amp;modestbranding=0&amp;rel=0&amp;showinfo=1&amp;color=red&amp;enablejsapi=1" frameborder="0" allowfullscreen="">Video of ' +
               ytid + '</iframe>';
            if (fromtabclick) {
               iframeEmbed = iframeEmbed.replace('autoplay=1&amp;', '');
            }
            container.html(iframeEmbed);

            // align the media player over the thumb for mobile
            if (thumb && $(window).width() < smallScreenSize) {
               // [todo] refactor with movePlayerOverThumb()
               var offset = thumb.offset();
               container.show();
               container.offset({
                  top: offset.top
               });
               container.height(thumb.height());
            }
         } else {

            this.currentYTPlayer.loadVideoById(ytid);
         }
      },
      pauseCurrentVideo: function(hide) {
         //pause youtube video if we can
         try {
            //debugger;
            if (this.currentYTPlayer) {
               this.currentYTPlayer.pauseVideo();
            } else {
               this.createYTHook(true);
            }
         } catch (e) {
            console.warn("Quicktab Pause Youtube error : ", e.message);
         }
      },
      firstTime: true,
      attach: function(context, settings) {

         //wait to accept truste before moving executing only do this if trust e exists
         if (Drupal.behaviors.truste && !Drupal.behaviors.truste.TRUST_E_ACCEPTED) {
            //wait for acceptance
            window.setTimeout($.proxy(this.attach, this, context, settings), 250);
            return;
         }
         var par = this;
         // All thumbnails.
         //window.onYouTubeIframeAPIReady = $.proxy( this.createYTHook, this );
         // context = $("#page");
         context = $("#block-system-main");
         thumbs = $(".media-data", context);
         photo_thumb = $(".photo-thumb", context);
         // Container for loading media.
         container_wrapper = $(
            ".section-media-container", context);
         container = container_wrapper.find(".pane-content", context);
         // Add prev/next arrow for image carousel
         container_wrapper.once().append(
            '<div class="prev custom-carousel-nav"></div><div class="next custom-carousel-nav"></div>'
         );
         // Change media on click.
         thumbs.once().click(function(event, fromtabclick) {
            $this = $(this);
            if ($this.data("video")) {
               ytid = $this.data("ytid");
               par.embedYTPlayer(ytid, container, fromtabclick,
                  $this);
               thumbs.removeClass("active");
               $this.addClass("active");
               $("body").fitVids();
            } else if ($this.data("image")) {
               src = $this.data("url"),
                  title = $this.data("title"),
                  alt = $this.data("alt");
               container.html('<img src="' + src + '" title="' +
                  title + '" alt="' + alt + '">');
               thumbs.removeClass("active");
               $this.addClass("active");
               cur_data = container.html();
               par.currentYTPlayer = null;
            }
            // Scroll to focus the media container on small screens
            //if($(window).width() <= 600  || $this.data("image") || $this.data("video");

            var isImageVisible = true;
            try {
               isImageVisible = $('.media-youtube-player').offset()
                  .top > $(window).scrollTop();
            } catch (e) {
               console.warn(e);
            }
            if ($(window).width() < smallScreenSize || ($this.data(
                     "image") &&
                  !isImageVisible)) {
               $.smoothScroll({
                  scrollTarget: '.media-youtube-player',
                  offset: -50
               });
            };

         });

         // First Item will be active on page load for desktop.
         //thumbs.first().addClass("active");
         var firster = thumbs.first();
         if (firster.attr('data-video') == 'true' && this.firstTime &&
            $(window).width() > smallScreenSize) {
            firster.addClass('active');
         } else if (firster.attr('data-video') != 'true') {
            firster.trigger('click');
         }

         // Add class if container is empty
         if (thumbs.length <= 0) {
            container.addClass("empty");
         }

         // yt-icons behavior trigger parent button
         yt_icons = $(".yt-icon", context);
         if (yt_icons.length > 0) {
            yt_icons.once().click(function(event) {
               $(this).parent().find('.media-data').trigger(
                  'click');
            });
         }


         // Show carousel navigation on hover.
         container_wrapper.hover(function() {
            if (container_wrapper.find("img").length > 0 &&
               photo_thumb.length > 1) {
               container_wrapper.find(".custom-carousel-nav").fadeIn();
            }
         }, function() {
            if (container_wrapper.find("img").length > 0 &&
               photo_thumb.length > 1) {
               container_wrapper.find(".custom-carousel-nav").fadeOut();
            }
         });

         // Change Photos on carousel navigation
         prev = container_wrapper.find(".custom-carousel-nav.prev",
               context),
            next = container_wrapper.find(".custom-carousel-nav.next",
               context);
         prev.once().on('click', function() {
            if (photo_thumb.length > 1) {
               cur_parent = $(".photo-thumb.active").parent();
               cur_parent.prev().find(".photo-thumb").trigger(
                  "click");
               if (cur_parent.prev().length <= 0) {
                  $(".photo-thumb").last().trigger("click");
               }
            }
         });
         next.once().on('click', function() {
            if (photo_thumb.length > 1) {
               cur_parent = $(".photo-thumb.active").parent();
               cur_parent.next().find(".photo-thumb").trigger(
                  "click");
               if (cur_parent.next().length <= 0) {
                  $(".photo-thumb").first().trigger("click");
               }
            }
         });

         // Change photos on swipe events
         container_wrapper.swipe({
            swipeLeft: function(event, direction, distance,
               duration, fingerCount) {
               next.trigger("click");
            },
            swipeRight: function(event, direction, distance,
               duration, fingerCount) {
               prev.trigger("click");
            }
         });

         //set first item when qtabs are toggled
         var qtabs = $('.section-node-detail .quicktabs-tabs li',
            context);

         qtabs.on('click', function(event) {
            var id = $(this).find('a').attr('id');
            if (id == 'quicktabs-tab-wb_titlte_landing_page-3') {

               if (!par.currentYTPlayer) {
                  thumbs.first().trigger('click', [true]);
               } else {
                  //thumbs.first().addClass("active");
                  if ($(window).width() <= smallScreenSize) {
                     $.smoothScroll({
                        scrollTarget: '.node-detail-header'
                     });
                  }
               }

            } else if (id ==
               'quicktabs-tab-wb_titlte_landing_page-5') {
               photo_thumb.first().trigger('click');
            } else {
               par.pauseCurrentVideo();
               //$.smoothScroll({scrollTarget:'#quicktabs-wb_titlte_landing_page'});
               //debugger;
            }

         });

         //start with the first video title
         ytThumbs = $(".yt-thumb", context).attr('data-ytid');
         if (ytThumbs && this.firstTime) {
            this.embedYTPlayer(ytThumbs, container, true, null);
            $("body").fitVids();
            this.firstTime = false;
         }

         if ($(window).width() < smallScreenSize) {
            // hide the video player for mobile (on first load and during pagination --- when this script is attached)
            par.currentYTPlayer = null;
            container.empty().hide();


         }

         // listen to orientation change
         $(window).on("orientationchange", function(event) {
            console.info('*** device rotated ***');
            setTimeout(
               par.movePlayerOverThumb(container, null, {
                  scrollTarget: '.media-youtube-player',
                  offset: -50
               }), 3000);
         });

         $(document).on ('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
            var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
                document.webkitFullscreenElement || document.msFullscreenElement;
            if (fullscreenElement === undefined) {
               // remove inline style from media player
               $(".section-media-container .pane-content").removeAttr("style");

               setTimeout(
                   par.movePlayerOverThumb(container, null, {
                      scrollTarget: '.media-youtube-player',
                      offset: -50
                   }), 3000);
            }
         });

      }
   };

   Drupal.redirect = function() {
      var uri = String(window.location.href);
      /*
       http://www.warnerbros.com/#/page=terms-of-use
       http://www.warnerbros.com/#/page=privacy-policy
       http://www.warnerbros.com/#/page=video-games
       http://www.warnerbros.com/#/page=company-info
       http://www.warnerbros.com/#/page=on-demand
       http://www.warnerbros.com/#/page=movies
       http://www.warnerbros.com/#/page=television
       */
      var matchingPolicies = /.*page=(terms-of-use|privacy-policy|video-games|company-info|on-demand|movies|television).*/ig;
      var otherPolicies = /^.*\/#\/?(terms|privacy)$/i;
      var policies = [
          matchingPolicies ,
          otherPolicies
      ];
      var matchedPolicy = new RegExp('()');
      return {
         test: function () {
            for (var a in policies) {
               var policy = policies[a];
               if (policy.test(uri)) {
                  this.matchedPolicy = policy;
                  return true;
               }
            }
            return false;
         },
         go: function () {
            var page = uri.replace(this.matchedPolicy, "$1");
            window.location = "/" + page;
         },
         matchedPolicy: matchedPolicy
      }
   };

   $(document).ready(function() {
      // Inject YouTube API script
      // debugger
      // var tag = document.createElement('script');
      // tag.src = "//www.youtube.com/player_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   });

   function checkVideoResizing() {
      // check for media that is still not resizable
      if ($('.fluid-width-video-wrapper').length == 0 ) {
         $("body").fitVids();
      }
   }

   function checkSizing() {
      try {
         if ($("body").hasClass("page-home") == false && $(window).width() >
                 677) {
                 var main = $('.main-container.container');
                 var mainHeight = main.outerHeight(true) + main.offset().top;
                 var footer = $('footer');
                 var availHeight = $(window).height() - Math.max(footer.outerHeight(
                    true), 167) - main.offset().top;
                 if (mainHeight < availHeight) {
                    main.css('min-height', availHeight);
                 }
              }

              if ($('.pane-homepage-banner').length == 0) {
                 checkVideoResizing();
              }
      } catch(e) {
        console.warn(e);
      }

   }

   // for Mozilla browsers
   if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", checkVideoResizing, false);
   }


   $(window).on('load', function() {
      //check and handle redirects for pp and TOS
      var redirect = Drupal.redirect();
      if (redirect.test()) {
         redirect.go();
         return;
      }

      checkSizing();
      $(".node-detail-header h2").css('visibility', 'visible');
      // global variable for the player
      players = new Array();
   });

   $(window).on('resize', checkSizing);

   $.fn.setAllToMaxHeight = function() {
      return this.css('min-height', (Math.max.apply(this, $.map(this,
         function(e) {
            return $(e).height()
         }))));
   };

   function pauseSectionMediaYoutubeVideo() {
      vd = $(".section-media-container").find("iframe");
      if (typeof(YT) != 'undefined') {
         pid = vd.attr("id");
         player = new YT.Player(pid, {
            events: {
               // call this function when player's state is changed
               // 'onStateChange': onPlayerStateChange
            }
         });
         if (typeof(player.pauseVideo) === 'function') {
            player.pauseVideo();
         } else {
            vd[0].src += "";
         }
      } else {
         vd[0].src += "";
      }

   }
   //function onPlayerStateChange(e) {
   //debugger;
   //if(owl.length > 0 && typeof(getPlayerState()) == 'function') {
   //  if(e.target.getPlayerState() != 0 && e.target.getPlayerState() != -1) {
   //    owl.trigger('owl.stop');
   //  }
   //}
   //}
   // Init Player function
   function youtubeinit(videos) {
      // create the global player
      //  debugger;
      videos.each(function() {
         var id = $(this).attr("id");

         if (typeof(YT) !== 'undefined') {
            player = new YT.Player(id, {
               events: {
                  // call this function when player's state is changed
                  //'onStateChange': onPlayerStateChange
               }
            });
         }
         if (typeof(player) !== 'undefined') {
            players.push({
               id: id,
               player: player
            });
         }
      });

      //dealing with chrome full screen bug TODO find a better fix
      try {
         document.addEventListener("webkitfullscreenchange", function() {
            //debugger;
            if (!document.webkitFullscreenElement) {
               $('.pane-homepage-banner .owl-wrapper-outer').css(
                  'overflow', 'visible');
            } else {
               $('.pane-homepage-banner .owl-wrapper-outer').css(
                  'overflow', 'hidden');
            }
         }, false);
      } catch (e) {

      }
   }

})(jQuery, Drupal, this, this.document);
//(function(d, t, id) {
//    GWI = { config: {} };
//    var js, _s = d.getElementsByTagName(t)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(t);
//    js.id = id;
//    js.src= 'https://superwidget.gowatchit.com/gwi.js';
//
//    GWI.config.apiKey = '589130e61b50ebffedee1a90';
//    GWI.config.theme = 'default';
//
//    _s.parentNode.insertBefore(js, _s);
//}(document, 'script', 'gwijslib'));
;
