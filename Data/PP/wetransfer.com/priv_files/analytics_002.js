try {
  // Because this snippet is included on static pages (404)
  // and it's not optimal to use a production-level GTM 
  // property for dev environments
  if (window.location.hostname.match('wetransfer.com')) {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),'event':'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N9N5GP');
  }
} catch (e) {
  // do nothing
}
