(function ($) {

Drupal.settings.extlink_extra.colorboxSettings = Drupal.settings.extlink_extra.colorboxSettings || {
  href:Drupal.settings.extlink_extra.extlink_alert_url+' .extlink-extra-leaving',
  height: '50%',
  width:'50%',
  initialWidth:'50%',
  initialHeight:'50%',
  onComplete:function(){ //Note - drupal colorbox module automatically attaches drupal behaviors to loaded content
    //Allow our cancel link to close the colorbox
    jQuery('div.extlink-extra-back-action a').click(function(e){jQuery.colorbox.close(); return false;})
    extlink_extra_timer();
  },
  onClosed:extlink_stop_timer
};
  
Drupal.behaviors.extlink_extra = {
  //Function mostly duplicated from extlink.js
  //Returns an array of DOM elements of all external links
  extlinkAttach : function(context) { 
    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{3,})((\.[a-z]{2,6})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$3$4');
    var subdomain = window.location.host.replace(pattern, '$1');

    // Determine what subdomains are considered internal.
    if (Drupal.settings.extlink.extSubdomains) {
      var subdomains = "([^/]*\\.)?";
    }
    else if (subdomain == 'www.' || subdomain == '') {
      var subdomains = "(www\\.)?";
    }
    else {
      // Find all occurences of '.' and replace it with '\.'.
      var re = new RegExp('\\.', 'g');
      var subdomains = subdomain.replace(re, '\\.');
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp("^https?://" + subdomains + host, "i");

    // Extra internal link matching.
    var extInclude = false;
    if (Drupal.settings.extlink.extInclude) {
      extInclude = new RegExp(Drupal.settings.extlink.extInclude.replace(/\\/, '\\'));
    }

    // Extra external link matching.
    var extExclude = false;
    if (Drupal.settings.extlink.extExclude) {
      extExclude = new RegExp(Drupal.settings.extlink.extExclude.replace(/\\/, '\\'));
    }

    //This next stanza copied verbatim from extlink:
    // Find all links which are NOT internal and begin with http (as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = new Array();
    $("a", context).each(function(el) {
      try {
        var url = this.href.toLowerCase();
        if (url.indexOf('http') == 0 && (!url.match(internal_link) || (extInclude && url.match(extInclude))) && !(extExclude && url.match(extExclude))) {
          external_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch(error) {
        return false;
      }
    });
    
    return external_links;
  },

  //Our click handler for external links
  clickReaction: function(e) {
    //Allow the default behavior for link if it's within the warning area
    //This keeps us from firing an infinite loop of reactions
    if($(this).closest('div.extlink-extra-leaving').length) {
      return true;
    }
    
    var external_url = jQuery(this).attr('href');
    var back_url = window.location.href;
    var alerturl = Drupal.settings.extlink_extra.extlink_alert_url;

    //"Don't warn" pattern matching.
    var extlink_exclude_warning = false;
    if (Drupal.settings.extlink_extra.extlink_exclude_warning) {
      extlink_exclude_warning = new RegExp(Drupal.settings.extlink_extra.extlink_exclude_warning.replace(/\\/, '\\'));
    }
    //Don't do any warnings if the href matches the "don't warn" pattern
    if (extlink_exclude_warning) {
      var url = external_url.toLowerCase();
      if(url.match(extlink_exclude_warning)) {
        return true;
      }
    }

    //This is what extlink does by default (except
    if(Drupal.settings.extlink_extra.extlink_alert_type == 'confirm') {
      var text = Drupal.settings.extlink.extAlertText.value;
      text = text.replace(/\[extlink:external\-url\]/gi, external_url);
      text = text.replace(/\[extlink:back-url\]/gi, back_url);
      return confirm(text);
    }

    //Set cookies that the modal or page can read to determine the 'go to' and 'back' links
    $.cookie("external_url", external_url, { path: '/' });
    $.cookie("back_url", back_url, { path: '/' });

    if(Drupal.settings.extlink_extra.extlink_alert_type == 'colorbox') {
      jQuery.colorbox(Drupal.settings.extlink_extra.colorboxSettings);
      return false;
    }

    if(Drupal.settings.extlink_extra.extlink_alert_type == 'page') {
      //If we're here, alert text is on but pop-up is off; we should redirect to an intermediate confirm page
      window.location = alerturl;
      return false;
    }
  },

  attach: function(context){
    //Build an array of external_links exactly like extlink does
    var external_links = this.extlinkAttach(context);
    
    //Unbind the click handlers added by extlink and replace with our own
    //This whole section of code that does the finding, unbinding, and rebinding
    //could be made a lot less redundant and more efficient if this issue could be resolved: http://drupal.org/node/1715520
    $(external_links).unbind('click').not('.ext-override, .extlink-extra-leaving a').click(this.clickReaction);
    
    //Dynamically replace hrefs of back and external links on page load.  This is to compensate for aggressive caching situations
    //where the now-leaving is returning cached results
    if(Drupal.settings.extlink_extra.extlink_cache_fix == 1) {
      if(jQuery('.extlink-extra-leaving').length > 0) {
        //grab our cookies
        var external_url = $.cookie("external_url");
        var back_url = $.cookie("back_url");

        //if there are any places where the urls were rendered as placeholders because the aggressive cache setting is on, replace them:
        var html = jQuery('.extlink-extra-leaving').html();
        html = html.replace(/external-url-placeholder/gi, external_url);
        html = html.replace(/back-url-placeholder/gi, back_url);
        jQuery('.extlink-extra-leaving').html(html);

        //Adding these 2 lines that specifically set the href seems a little bit overkill, but seems to be necessary for IE7
        //We can't 100% rely on the existance of the two link classes, but they should be there in most cases.
        //It seems IE7 writes the domain directly into a relative link when parsing the page, so the straight regex replacement
        //ends up being href="http://thecurrentdomain.com/http://thebacklink.com/link
        //Either that or I was compensating for some other weird JS behavior, either way, this fixes it.
        jQuery('.extlink-extra-back-action a').attr('href', back_url);
        jQuery('.extlink-extra-go-action a').attr('href', external_url);
        
        if (Drupal.settings.extlink.extTarget) {
          // Apply the target attribute action links
          $('.extlink-extra-back-action a').attr('target', Drupal.settings.extlink.extTarget);
          $('.extlink-extra-go-action a').attr('target', Drupal.settings.extlink.extTarget);
        }
      }
    }

    //If the timer is configured, we'll call it for the intermediate page
    if(Drupal.settings.extlink_extra.extlink_alert_type == 'page') {
      if(jQuery('.extlink-extra-leaving').length > 0) {
        extlink_extra_timer();
      }
    }

    //Apply 508 fix - extlink module makes empty <spans> to show the external link icon, screen readers
    //have trouble with this.
    if(Drupal.settings.extlink_extra.extlink_508_fix == 1) {
      //Go through each <a> tag with an 'ext' class,
      $.each($("a.ext"), function(index, value) {
        //find a <span> next to it with 'ext' class,
        var nextSpan = $(this).next('span.ext');
        if(nextSpan.length) {
          //if found add the text 'External Link' to the empty <span> (or whatever is configured by the user)
          nextSpan.html(Drupal.settings.extlink_extra.extlink_508_text);

          //and move the span inside the <a> tag (at the end)
          $(this).append(nextSpan);
        }
      });
    }
  }
}

})(jQuery);

//Global var that will be our JS interval
var extlink_int;

function extlink_extra_timer() {
  if(Drupal.settings.extlink_extra.extlink_alert_timer == 0 || Drupal.settings.extlink_extra.extlink_alert_timer ==  null) {
    return;
  }
  extlink_int = setInterval(function(){
    var container = jQuery('.automatic-redirect-countdown');
    var count = container.attr('rel');
    if(count == null) {
      count = Drupal.settings.extlink_extra.extlink_alert_timer;
    }
    if(count >= 0) {
      container.html('<span class="extlink-timer-text">Automatically redirecting in: </span><span class="extlink-count">'+count+'</span><span class="extlink-timer-text"> seconds.</span>');
      container.attr('rel',--count);
    }
    else {
      extlink_stop_timer();
      container.remove();
      var href = jQuery('div.extlink-extra-go-action a').attr('href');  
      window.location = href;
    }
  },1000);
}

function extlink_stop_timer() {
  clearInterval(extlink_int);
}
;
