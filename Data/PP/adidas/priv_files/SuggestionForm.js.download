app.define('component/form/SuggestionForm', [
    'jquery',
    'app.resources'
], function (jQuery, app) {
    'use strict';
    
    var isAdidas = !!(app.constants.SITE_ID.match(/adidas/i));
    
    var SuggestionForm = {
   
    	initialConfig: {
    		default: {
    			eventCallback: function(){
    				
    		        this.control('mousedown',  '.search-block', this.onSearchStart)
	    		        .control('mouseenter', '.search-suggest .column ul li', this.onSuggestionMouseOver, this.searchContentArea)
	    		        .control('keydown',    '.searchinput-redesign input', this.onSearchType, this.searchContentArea)
	    		        .control('keyup',      '.searchinput-redesign input', this.onSearchChange, this.searchContentArea)
	    		        .control('mousedown',  '.searchinput-redesign input', this.onSearhFieldInteract, this.searchContentArea)
	    		        .control('click',      '.close', this.close, this.searchContentArea)
	    		        .control('touchstart', '.close', this.close, this.searchContentArea)
	    		        .control('mousedown',  '.selected, .search-suggest li', this.onSuggestionClick, this.searchContentArea)
	    		        .control('click',      'html', this.onBodyClick, jQuery(document))
	    		        .control('mousedown',  'a', this.removeQueryCookie, jQuery(document))
	    		        .control('submit',     'form', this.removeQueryCookie, jQuery(document))
	    		        .control('mouseover', '.suggestion.terms', this.onHoverTerms, this.searchContentArea);
    		        
    			},
    			elements: {
    				globalElementClass: ".sitesearch",
    				searchContentArea: ".search-content-area",
    				filterArea: "#filter-area",
    				input: ".searchinput-redesign input",
    				searchBlock: ".search-block",
    				suggestionForm: "#simpleSearchFormRedesign"
    			},
    			options: {
    				registerEvents: true,
    				delay: null,
    				searchBoxLocation: "TOP RIGHT"
    			}
    		},
    		
    		nohits: {
    			eventCallback: function(){
    				if(isAdidas){
    	 				this.control('mousedown', '.nohits', this.onSearchStart)
	    					.control('mouseenter', '.search-suggest .column ul li', this.onSuggestionMouseOver, this.searchContentArea)
	    					.control('keydown', '.nohitssearch.clearfix input', this.onSearchType, this.searchContentArea)
	    					.control('keyup', '.nohitssearch.clearfix input', this.onSearchChange, this.searchContentArea)
	    					.control('mousedown',  '.selected, .search-suggest li', this.onSuggestionClick, this.searchContentArea)
	    					.control('click', 'html', this.onBodyClickHide, jQuery(document))
	    					.control('mousedown',  'a', this.removeQueryCookie, jQuery(document))
	    					.control('submit',     'form', this.removeQueryCookie, jQuery(document))
	    					.control('click', '#searchNohitsForm button[name="simplesearch"]', this.submitSelectedUrl, this.searchContentArea);
    				}
    			},
    			elements: {
    				globalElementClass: ".search_nohits",
    				searchContentArea: ".nohits",
    				searchBlock: ".nohits",
    				input: ".nohitssearch.clearfix input",
    				suggestionForm: "#searchNohitsForm",
    				filterArea: "#filter-area"
    			},
    			options: {
    				registerEvents: false,
    				delay: null,
    				searchBoxLocation: "MIDDLE"
    			}
    		}
    		
    	}
    };
    
    return SuggestionForm;
});