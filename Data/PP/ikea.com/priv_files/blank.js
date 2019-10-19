
    document.observe("dom:loaded",function(){$$("a[rel*=external]").each(function(item){$(item).observe("click",function(event){window.open(event.findElement().href);Event.stop(event)})})}); 

