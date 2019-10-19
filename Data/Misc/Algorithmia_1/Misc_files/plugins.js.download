/* Retina.js */
(function(){var i=(typeof exports=="undefined"?window:exports);var e={check_mime_type:true};i.Retina=f;function f(){}f.configure=function(l){if(l==null){l={}}for(var m in l){e[m]=l[m]}};f.init=function(l){if(l==null){l=i}var m=l.onload||new Function;l.onload=function(){var n=document.getElementsByTagName("img"),o=[],p,q;for(p=0;p<n.length;p++){q=n[p];o.push(new j(q))}m()}};f.isRetina=function(){var l="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(i.devicePixelRatio>1){return true}if(i.matchMedia&&i.matchMedia(l).matches){return true}return false};i.RetinaImagePath=d;function d(l){this.path=l;this.at_2x_path=l.replace(/\.\w+$/,function(m){return"@2x"+m})}var b,c,a;if(localStorage){if(localStorage.retinajs_confirmed_paths){try{d.confirmed_paths=JSON.parse(localStorage.retinajs_confirmed_paths)}catch(g){d.confirmed_paths={}}}else{d.confirmed_paths={}}if(localStorage.retinajs_skip_paths){try{d.skip_paths=JSON.parse(localStorage.retinajs_skip_paths)}catch(g){d.skip_paths={}}}else{d.skip_paths={}}b=false;c=function h(){if(!b){b=true;setTimeout(a,10)}};a=function k(){if(localStorage){try{localStorage.retinajs_confirmed_paths=JSON.stringify(d.confirmed_paths);localStorage.retinajs_skip_paths=JSON.stringify(d.skip_paths)}catch(l){c=a=function(){}}}b=false}}else{d.confirmed_paths={};d.skip_paths={};c=a=function(){}}d.prototype.is_external=function(){return !!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};d.prototype.check_2x_variant=function(n){var l,m=this;if(this.is_external()){return n(false)}else{if(d.skip_paths[this.at_2x_path]){return n(false)}else{if(d.confirmed_paths[this.at_2x_path]){return n(true)}else{l=new XMLHttpRequest;l.open("HEAD",this.at_2x_path);l.onreadystatechange=function(){if(l.readyState!=4){return n(false)}if(l.status>=200&&l.status<=399){if(e.check_mime_type){var o=l.getResponseHeader("Content-Type");if(o==null||!o.match(/^image/i)){d.skip_paths[m.at_2x_path]=1;c();return n(false)}}d.confirmed_paths[m.at_2x_path]=1;c();return n(true)}else{d.skip_paths[m.at_2x_path]=1;c();return n(false)}};l.send()}}}};function j(l){this.el=l;this.path=new d(this.el.getAttribute("src"));var m=this;this.path.check_2x_variant(function(n){if(n){m.swap()}})}i.RetinaImage=j;j.prototype.swap=function(n){if(typeof n=="undefined"){n=this.path.at_2x_path}var l=this;function m(){if(!l.el.complete){setTimeout(m,5)}else{l.el.setAttribute("width",l.el.offsetWidth);l.el.setAttribute("height",l.el.offsetHeight);l.el.setAttribute("src",n)}}m()};if(f.isRetina()){f.init(i)}})();

/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);