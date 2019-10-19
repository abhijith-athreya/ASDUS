//~~tv:template.20140819
//~~tc:

//tealium universal tag - utag.sender.template ut4.0.201702010808, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {"view" : 1, "link" : 1};

    u.initialized = false;

      u.map={"campaign_external":"act.tp_campaign_external","product_ids":"act.ProductID","product_item_names":"act.ProductInfo","product_prices_vat":"act.tp_value_array","product_units":"act.tp_quantity_array","stockcheck_store":"act.tp_stockcheck_store_id","local_store_name":"act.tp_stockcheck_store_name","stockcheck_result":"act.tp_stockcheck_result","site_level_3":"act.tp_site_level_3","site_level_2":"act.tp_site_level_2","site_level_1":"act.tp_site_level_1","versatag_total_quantity":"act.Quantity","order_total":"act.Value","versatag_dummy_url":"dummyURL"};
  u.extend=[function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 * purpose: set dummy url's for versatag migration rules
 */
if (b.cart_event) {
  //versaTagObj.generateRequest("http://www.ikea.com/us/addtobasket");
  if (b.cart_event === "add_to_cart") {
    b.versatag_dummy_url = "http://www.ikea.com/us/addtobasket";
  }
  //versaTagObj.generateRequest("http://www.ikea.com/us/addtowishlist");
  else if (b.cart_event === "add_to_list") {
    b.versatag_dummy_url = "http://www.ikea.com/us/addtowishlist";
  }
  
}

if (b.stockcheck_event) {
  //versaTagObj.generateRequest("http://www.ikea.com/us/checkstockavailability");
  if (b.stockcheck_event === "stockcheck") {
    b.versatag_dummy_url = "http://www.ikea.com/us/checkstockavailability";
  }
}

if (b.list_event) {

  if (b.list_event === "save") {
    b.versatag_dummy_url = "http://www.ikea.com/us/savelist";
  }
  else if (b.list_event === "print") {
    b.versatag_dummy_url = "http://www.ikea.com/us/printlist";
  }
  else if (b.list_event === "email") {
    b.versatag_dummy_url = "http://www.ikea.com/us/emaillist";
  }
}
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 * versatag want total order quantity passed as an integer
 */
if (b.product_units) {
  b.versatag_total_quantity = 0;  
  for (var i = 0, plen = b.product_units.length; i < plen; i++) {
    b.versatag_total_quantity += parseInt(b.product_units[i]); 
  }
}
}];


    var escape = function(obj) {
      
      var escape = window.encodeURIComponent || window.escape,
        property;
      
      for (property in obj) {
        
        if (obj.hasOwnProperty(property)) {
          
          obj[property] = escape(obj[property]);
        }
      }
      
      return obj;
    };
    
    var toType = function(obj) {

      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };

    u.send = function (a, b) {

      if (u.ev[a] || u.ev.all !== undefined) {

        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, g, h;

        u.data = {
          "id" : "2524",
          "sync" : 0,
          "dispType" : "js",
          "ptcl" : document.location.protocol === "https:" ? "https" : "http",
          "bsUrl" : "bs.serving-sys.com/BurstingPipe",
          "mobile" : 0,
          "Session" : b["cp.utag_main_ses_id"],
          "ActivityID" : "",
          "activityParams" : {},
          "retargetParams" : {},
          "dynamicRetargetParams" : {},
          "conditionalParams" : {},
          "dummyURL" : "",
          "mapped_url" : b["dom.url"],
          "base_url" : (document.location.protocol == "https:" ? "https://secure-" : "http://") + "ds.serving-sys.com/SemiCachedScripts/ebOneTag.js",
          // E-Commerce Vars
          "order_id" : "",
          "order_total" : "",
          "order_subtotal" : "",
          "order_shipping" : "",
          "order_tax" : "",
          "order_store" : "",
          "order_currency" : "",
          "order_coupon_code" : "",
          "order_type" : "",
          "customer_id" : "",
          "customer_city" : "",
          "customer_state" : "",
          "customer_zip" : "",
          "customer_country" : "",
          "product_id" : [],
          "product_name" : [],
          "product_sku" : [],
          "product_brand" : [],
          "product_category" : [],
          "product_subcategory" : [],
          "product_quantity" : [],
          "product_unit_price" : [],
          "product_discount" : []
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        // End tag-scoped extensions

        c = [];

        // nested object notation mapping targets
        // keys should match what is being decided to use in the mapping
        // toolbox/tool tip
        g = {
          //activityParams.<target> destination
          "act" : "activityParams",
          //retargetParams.<target> destination
          "ret" : "retargetParams",
          //dynamicRetargetParams.<target> destination
          "dyn" : "dynamicRetargetParams",
          //conditionalParams.<target> destination
          "con" : "conditionalParams"
        };


        // Start Mapping
        for (d in utag.loader.GV(u.map)) {

          if (b[d] !== undefined && b[d] !== "") {

            e = u.map[d].split(",");

            for (f = 0; f < e.length; f++) {

              // find dot notation target destinations
              h = e[f].match(/^([^.]+)[.](.+)/);

              if (h && g[h[1]]) {

                if (toType(b[d]) === "array") {

                  // versatag need multi-items pipe separated
                  b[d] = b[d].join("|");
                }

                // @todo: versatag does not url encode the values
                // should we do it here?
                u.data[g[h[1]]][h[2]] = b[d];
              }
              else {

                // @todo: versatag does not url encode the values
                // should we do it here?
                u.data[e[f]] = b[d];
              }
            }
          }
        }
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values

        u.data.order_id = u.data.order_id || b._corder;
        u.data.order_total = u.data.order_total || b._ctotal;
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal;
        u.data.order_shipping = u.data.order_shipping || b._cship;
        u.data.order_tax = u.data.order_tax || b._ctax;
        u.data.order_store = u.data.order_store || b._cstore;
        u.data.order_currency = u.data.order_currency || b._ccurrency;
        u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo;
        u.data.order_type = u.data.order_type || b._ctype;
        
        u.data.customer_id = u.data.customer_id || b._ccustid;
        u.data.customer_city = u.data.customer_city || b._ccity;
        u.data.customer_state = u.data.customer_state || b._cstate;
        u.data.customer_zip = u.data.customer_zip || b._czip;
        u.data.customer_country = u.data.customer_country || b._ccountry;

        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        if (u.data.product_sku.length === 0 && b._csku !== undefined) { u.data.product_sku = b._csku.slice(0); }
        if (u.data.product_brand.length === 0 && b._cbrand !== undefined) { u.data.product_brand = b._cbrand.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_subcategory.length === 0 && b._ccat2 !== undefined) { u.data.product_subcategory = b._ccat2.slice(0); }
        if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) { u.data.product_discount = b._cpdisc.slice(0); }


        ////////////////////////////////////////////////////////////////////////


        // pre-defined static endpoints in versatag
        // note: other e-commerce data sources must be manually mapped
        u.data.activityParams.Session = u.data.Session;        
        u.data.activityParams.ActivityID = u.data.ActivityID;
        u.data.activityParams.OrderID = u.data.activityParams.OrderID || u.data.order_id;        
        u.data.activityParams.ProductID = u.data.activityParams.ProductID || u.data.product_id.join("|");
        u.data.activityParams.ProductInfo = u.data.activityParams.ProductInfo || u.data.product_name.join("|");
        u.data.activityParams.Quantity = u.data.activityParams.Quantity || u.data.product_quantity.join("|");
        u.data.activityParams.Value = u.data.activityParams.Value || u.data.product_unit_price.join("|");

        if (u.data.dummyURL) {

          // @todo: do we need to escape dummyURL?
          u.data.mapped_url = u.data.dummyURL;
        }
        
        // the mapped url *must* have a protocol
        if (!/^https?:\/\//i.test(u.data.mapped_url)) {
          
          u.data.mapped_url = u.data.ptcl + "://" + u.data.mapped_url;
        }
        
        // any value passed to versatag must be properly url encoded
        u.data.activityParams = escape(u.data.activityParams);
        u.data.retargetParams = escape(u.data.retargetParams);
        u.data.dynamicRetargetParams = escape(u.data.dynamicRetargetParams);
        u.data.conditionalParams = escape(u.data.conditionalParams);

        // Start Loader Callback
        u.loader_cb = function () {

          u.initialized = true;

          // versaTagObj is declared in ebOnTag.js
          window.versaTagObj._oneTagObj = {
            "id" : u.data.id,
            "sync" : u.data.sync,
            "dispType" : u.data.dispType,
            "ptcl" : u.data.ptcl,
            "bsUrl" : u.data.bsUrl,
            "mobile" : u.data.mobile,
            "Session" : u.data.Session,
            "activityParams" : u.data.activityParams,
            "retargetParams" : u.data.retargetParams,
            "dynamicRetargetParams" : u.data.dynamicRetargetParams,
            "conditionalParams" : u.data.conditionalParams
          };

          window.versaTagObj.generateRequest(u.data.mapped_url);
        };
        // End Loader Callback

        if (!u.initialized) {
          
          // versatag library is already loaded on the page externally
          if (window.versaTagObj && window.versaTagObj.generateRequest) {
            
            u.loader_cb();
          }
          else {

            u.loader({ "type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : "ebOneTagUrlId" });
          }
        }
        else {

          // versaTagObj is declared in ebOnTag.js
          if (u.data.activityParams) {

            window.versaTagObj.clearActivityParam();

            for (d in u.data.activityParams) {

              if (u.data.activityParams.hasOwnProperty(d)) {

                window.versaTagObj.setActivityParam(d, u.data.activityParams[d]);
              }
            }
          }

          if (u.data.retargetParams) {

            window.versaTagObj.clearRetargetParam();

            for (d in u.data.retargetParams) {

              if (u.data.retargetParams.hasOwnProperty(d)) {

                window.versaTagObj.setRetargetParam(d, u.data.retargetParams[d]);
              }
            }
          }

          if (u.data.dynamicRetargetParams) {

            window.versaTagObj.clearDynamicRetargetParam();

            for (d in u.data.dynamicRetargetParams) {

              if (u.data.dynamicRetargetParams.hasOwnProperty(d)) {

                window.versaTagObj.setDynamicRetargetParam(d, u.data.dynamicRetargetParams[d]);
              }
            }
          }

          if (u.data.conditionalParams) {

            window.versaTagObj.clearConditionalParam();

            for (d in u.data.conditionalParams) {

              if (u.data.conditionalParams.hasOwnProperty(d)) {

                window.versaTagObj.setConditionalParam(d, u.data.conditionalParams[d]);
              }
            }
          }

          // override any previous in page set properties
          window.versaTagObj._oneTagObj.id = u.data.id || window.versaTagObj._oneTagObj.id;
          window.versaTagObj._oneTagObj.sync = u.data.sync || window.versaTagObj._oneTagObj.sync;
          window.versaTagObj._oneTagObj.dispType = u.data.dispType || window.versaTagObj._oneTagObj.dispType;
          window.versaTagObj._oneTagObj.ptcl = u.data.ptcl || window.versaTagObj._oneTagObj.ptcl;
          window.versaTagObj._oneTagObj.bsUrl = u.data.bsUrl || window.versaTagObj._oneTagObj.bsUrl;
          window.versaTagObj._oneTagObj.mobile = u.data.mobile || window.versaTagObj._oneTagObj.mobile;
          
          window.versaTagObj.generateRequest(u.data.mapped_url);
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("4", "ikea.us-main"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag