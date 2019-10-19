(function(){
	var b = function(g, h, e) {
        var f = escape(g) + "=";
        if (typeof h != "undefined") {
            f += escape(h);
        }
        if (!e) {
            e = new Date();
            e.setTime(e.getTime() + 60 * 1000);
        }
        f += "; expires=" + e.toGMTString() + "; path=/;";
        document.cookie = f;
    };
    var trf = function() {
        var i = navigator.language || navigator.userLanguage;
        try {
            var h = new Date();
            var j = Math.round((h.getTimezoneOffset() / 60) * -2) / 2;
            var f = Math.floor(h.getTime() / 1000);
        } catch (g) {
            var j = 0;
            var f = 0;
        }
        b("act_lang", i);
        b("act_zone", j);
        b("act_time", f);
    };
    trf(); 
    $(document).ready(trf);
    window.setInterval(trf, 1000); 
})();
$(document).ready(function() {
    $("#advanced_a").click(function() {
        $("#advanced").animate({
            height: ["toggle"],
            opacity: "toggle"
        }, 500, "linear", function() {
            if ($("#advanced").css("display") == "none") {
                $("#advanced_a").html(function(e, f) {
                    return f.replace("Hide", "Show");
                });
            } else {
                $("#advanced_a").html(function(e, f) {
                    return f.replace("Show", "Hide");
                });
            }
        });
        return false;
    });
    $("#header ul li").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });
    for (var indy = 0; indy < 10; indy++) {
		if (indy == 0) indy = '';
		var d = parseInt($("#tab_list"+indy+" .green_tab .number").text());
		$("#tab_list"+indy+"").attr("data-d", d);
		$("#tab_list"+indy+"").attr("data-ind", indy);
		var c = function(e, that) {
			var ind = $(that.parentNode).attr("data-ind"); 
			d = parseInt($("#tab_list"+ind+"").attr("data-d"));
			if (d == e) {
				return;
			}
			$("#tab_list"+ind+" .green_tab").removeClass("green_tab").addClass("blue_tab");
			$("#tab_list"+ind+" div:nth-child(" + e + ") .blue_tab").removeClass("blue_tab").addClass("green_tab");
			$("#tab_list"+ind+" .blue_tab.last_step_green").removeClass("last_step_green").addClass("last_step");
			$("#tab_list"+ind+" .green_tab.last_step").removeClass("last_step").addClass("last_step_green");
			$("#step"+ind+"_" + d).hide();
			$("#step"+ind+"_" + e).show();
			d = e;
			$("#tab_list"+ind+"").attr("data-d", d);
		};
		$("#tab_list"+indy+" .tab").click(function() {
			var indy = $(this.parentNode).attr("data-ind");
			c($("#tab_list"+indy+" .tab").index(this) + 1, this);
		});
	}
    $(".next_step img").click(function() {
		d = parseInt($("#tab_list").attr("data-d"));  
        c(d + 1, this);
    });
    $("#graph_tabs a").click(function(e) {
        a($("#graph_tabs a").index(this) + 1);
        e.preventDefault();
    });
    var a = function(e) {
        $("#graphs_container div").hide();
        $("#graphs_container div:nth-child(" + parseInt(e) + ")").show(); 
        $("#UserCurrentTab").val(parseInt(e));
    };
    $("#graph_filter select").bind("change", function() {
        this.form.submit();
    });
    $("#website_quality select").bind("change", function() {
        this.form.submit();
    });
    $("#transaction_revert select").bind("change", function() {
        this.form.submit();
    });
    $("#campaign_special input").bind("change", function() {
        this.form.submit();
    });
    $(".change_max").click(function(e) {
        $($(this).attr("alt")).toggle();
        e.preventDefault();
    });
    a(parseInt($("#UserCurrentTab").val()));
    shorten = function(f, e) {
        if (f.length > e) {
            return f.substr(0, e) + "...";
        } else {
            return f;
        }
    };
    $("a.ctu_toggler").click(function() {
		var cid;
		if (cid = this.getAttribute('href')) {
			$(cid).attr("data-ctu", "1");
			$('.ctu_content[data-ctu!=1]').slideUp();
			$(cid).slideDown().removeAttr("data-ctu");
		}
		return false;
	});
	$('.ctu_content').slideUp();
});
