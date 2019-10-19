$(document).ready(function() {
	var ac_handler = {
		autocomplete_json_response : [],
		merged_results : [],
		lookup_request: function() {
			var req = $.ajax({
				url: "/lookup/json/named.search_autocomp.bam",
				data: {
					active_sw:"'Y'",
					sport_code: "'mlb'",
					all_star_sw: "'N'",
					"team_all.col_in": ["name_display_full","file_code"]
				},
				dataType: "json"
			});
			return req;
		},
		resp : function(r_t) {
			// escape regex characters
        	var matcher = new RegExp($.ui.autocomplete.escapeRegex(r_t), "i");
        	var primaryResults = [];
        	var secondaryResults = [];
			var tertiaryResults = [];

            $.each( ac_handler.autocomplete_json_response, function(n, value) {
            	if (matcher.test(value.value) && (value.player === true)) {
               		primaryResults.push(value);
                 } else if (value.alt && matcher.test(value.alt) && (value.player === true)) {
                 	secondaryResults.push(value);
                 } else if ((value.player === false) && matcher.test(value.value)) {
				  	tertiaryResults.push(value);
				}
        	});
			var first_merge = $.merge(primaryResults, secondaryResults);
			var second_merge = $.merge(first_merge,tertiaryResults);
        	ac_handler.merged_results = second_merge;
		},
		lookup : function(term) {
				var dfd;
				var dfd_initial = ac_handler.lookup_request();
				var autocomp_players = [];
				var autocomp_teams = [];
				dfd_initial.done(function(jsonResponse) {
					if (typeof(jsonResponse.search_autocomp.search_autocomplete) !== "undefined") {
						if (jsonResponse.search_autocomp.search_autocomplete.queryResults.totalSize > 0) {
							var active_players = $.ensureArray(jsonResponse.search_autocomp.search_autocomplete.queryResults.row);
							autocomp_players = $.map(active_players,function(row) {
                				var	n, p, t, img, additional_data;
								n = row.n;
								p = row.p;
								t = row.t;
								img = "<img src='/images/players/assets/37_"+p+".png' />";
              					additional_data = (t === "") ? "<br />Free Agent" : "<br />"+t;

								return {
									label: "<div class='auto_result auto_player'>"+img+"<div class='auto_result_text'><span class='player_name'>"+n+"</span><span class='team_name'>"+additional_data+"</span></div></div>",
									value: n,
									id :   p,
									alt:   t,
									player : true
								};
							});
						}
					}
					if (typeof(jsonResponse.search_autocomp.team_all) !== "undefined") {
						if (jsonResponse.search_autocomp.team_all.queryResults.totalSize > 0) {
							var teams = $.ensureArray(jsonResponse.search_autocomp.team_all.queryResults.row);
							autocomp_teams = $.map(teams,function(r) {
								n = r.name_display_full;
								var fileCode = r.file_code;
								img = "<img src='/mlb/images/team_logos/29x20/"+fileCode+".png' />";
								return {
									label:  "<div class='auto_result auto_team'>"+img+"<div class='auto_result_text'>"+n+"</div></div>",
									value:  n,
									id:     fileCode,
									player: false
								};
							});
						}	
					}
					//ac_handler.autocomplete_json_response = $.merge(autocomp_players, autocomp_teams);
			});
			
			dfd = $.when(dfd_initial).then(function() {
				ac_handler.autocomplete_json_response = $.merge(autocomp_players, autocomp_teams);
				results = ac_handler.resp(term);
			});
			return dfd;
			
		}
	};
	
	if (!(/\/video\//.test(document.location.pathname))) {
				$("#query_text1")
						.one("focus", function() { 
							$(this).val(""); 
							ac_handler.lookup();
						})
						.autocomplete({
							appendTo: "#hdr_search",
							html: true,
							source: function( request, response ) {
								var v = request.term;
								var merged_dfd = ac_handler.lookup(v);
								merged_dfd.done(function() {
									response(ac_handler.merged_results);
									$(".auto_result img").error(function () {
  										$(this).unbind("error").attr("src", "/images/players/silhouettes/37x37/anon.png");
									});
								});
								
								/*if (ac_handler.autocomplete_json_response.length === 0) {
									setTimeout(function(){var merged_results = ac_handler.resp(request.term);response(merged_results);},5000);
									
								} else {
									var merged_results = ac_handler.resp(request.term);
									response(merged_results);
								}*/

        					},
							minLength: 3,
							select: function(event, ui) { 
								bam.tracking.track({
              						async:{
                    					isDynamic    : false,
                     	   				compName     : "Site Search",
                      	 				compActivity : "Site Search: Suggestion Click",
                      	  				actionGen    : false,
										queryText    : ui.item.value
               						}
								});

								if (ui.item.label.indexOf('auto_player') !== -1) {
									window.location="http://mlb.mlb.com/team/player.jsp?player_id="+ui.item.id;
								} else {
									window.location="http://mlb.mlb.com/index.jsp?c_id="+ui.item.id;
								}
							},
							open: function() {
								$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
							},
							close: function() {
								$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
							}
						});
	} else {
		$("#query_text1").one("focus", function() { $(this).val("");  });
	}
});		
