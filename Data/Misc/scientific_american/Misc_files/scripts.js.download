// Mura.DisplayObject.{display-object-directory-name}
Mura.DisplayObject.js_pullquote = Mura.UI.extend({

  // Mura invokes the 'render()' method by default
  render: function() {
    // objectparams (configurator settings) are available under 'this.context.{yourVar}'
    var source =
          this.context.source === undefined
            ? 'Enter some text.'
            : this.context.source,
        contenturl = document.head.querySelector("[property='og:url']").content,
        contenttitle = document.head.querySelector("[property='og:title']").content,
        facebookShare = '<a href="https://www.facebook.com/sharer/sharer.php?p[url]=' + contenturl + '?wt.mc=SA_Facebook-Share"><span class="share-tooltip" aria-label="Share on Facebook" tabindex="0"><span class="icon icon--subtle icon__facebook--black"></span></span></a>',
        twitterShare = '<a href="https://twitter.com/intent/tweet?url=' + contenturl + '?wt.mc=SA_Twitter-Share&amp;text=' + contenttitle + '&amp;hashtags=science"><span class="share-tooltip" aria-label="Share on Twitter" tabindex="0"><span class="icon icon--subtle icon__twitter--black"></span></span></a>',
        pullquoteTemplate = '<aside class="blockquote__lt-module ">' +
          '<blockquote>' + source + '</blockquote>' +
          '<ul class="blockquote-share__lt-module">' +
            '<li>' + facebookShare + '</li>' +
            '<li>' + twitterShare + '</li>' +
          '</ul>' +
        '</aside>';
    Mura(this.context.targetEl).html(pullquoteTemplate);
  }
});
