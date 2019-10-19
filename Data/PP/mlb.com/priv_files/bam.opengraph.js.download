
(function(window, document, $, bam, undefined) {

    var PROXY_ENDPOINT = "/wf/flow/social.facebook.apiProxy";

    function executeOpenGraphOperation(operation, method) {
        method = (method) ? method.substring(0, 1).toUpperCase() + method.substring(1) : "Get";

        return $.ajax({
            url : PROXY_ENDPOINT,
            data : {
                httpName : "facebook" + method,
                operation : operation
            },
            dataType : "json",
            cache: false,
            success : function() {},
            error : function() {}
        });
    }

    bam.opengraph = {
        /**
         * Returns authorized information for a Facebook app for the connected user
         *
         * @returns {AjaxPromiseObject}
         */
        me : function() {
            return executeOpenGraphOperation("/me");
        },
        
        
        
          /**
         * Returns authorized information for a Facebook app for the connected user
         *
         * @returns {AjaxPromiseObject}
         */
        likes : function() {
            return executeOpenGraphOperation("/me/likes");
        },

        /**
         * Returns an array of application requests for the connecgted user
         *
         * @returns {AjaxPromiseObject}
         */
        apprequests : function() {
            return executeOpenGraphOperation("/me/apprequests");
        },
        
        /**
         * Returns an array of application requests for the connecgted user
         *
         * @returns {AjaxPromiseObject}
         */
        pagefeeds : function(pageid) {
            return executeOpenGraphOperation("/"+pageid+"/feed");
        },

        /**
         * Deletes a handled request for the connecgted user
         *
         * @param {String} requestID 
         *
         * @returns {AjaxPromiseObject}
         */
        deleteRequest : function(requestID) {
            return executeOpenGraphOperation("/" + requestID + "&method=delete", "post");
        },
        
        /**
         * Get user's activities for connecgted user
         *
         * @param {String} requestID 
         *
         * @returns {AjaxPromiseObject}
         */
        getActivities : function(uid, action) {
            return executeOpenGraphOperation("/"+ uid + "/" + action);
        },
        
        /**
         * retrieve an retrieveData of given id
         *
         * @param {String} requestID 
         *
         * @returns {AjaxPromiseObject}
         */
        retrieveData : function(requestID) {
          return executeOpenGraphOperation("/" + requestID);
        },
        
         /**
         * execute an fql query
         *
         * @param {String} requestID 
         *
         * @returns {AjaxPromiseObject}
         */
        fql : function(query) {           
           return executeOpenGraphOperation('/fql&q='+encodeURIComponent(query));
        }
        
    };

})(this, this.document, this.jQuery, this.bam);
