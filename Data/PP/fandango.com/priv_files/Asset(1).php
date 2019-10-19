try {
QSI.Link=QSI.util.Creative({initialize:function(a){this.globalInitialize(a),this.options.locators&&(QSI.PipedText.setLocators(this.options.locators),this.options.text=QSI.PipedText.evaluateLocators(this.options.text)),this.shouldShow()&&this.insertLink()},insertLink:function(){if(this.options.insertionLocation&&this.options.targetURL){var a=this.options.text||this.options.targetURL;this.link=QSI.util.build("a",{className:"QSILink "+this.id+"_Link",href:"javascript:void(0);"},a),new QSI.Target(this.link,this.getTargetHelper(),this.actionOptions,this),QSI.util.$(this.options.insertionLocation).appendChild(this.link),this.impress(),this.displayed.resolve()}},remove:function(){this.link&&QSI.util.remove(this.link)}});
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}