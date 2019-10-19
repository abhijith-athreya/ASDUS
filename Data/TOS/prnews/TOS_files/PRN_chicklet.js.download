function disp(feedId) 
	{
	    divFeed = document.getElementById(feedId);	
		if(divFeed) 
		{
			if(divFeed.style.display == 'none') 
			{
				divFeed.style.display = 'inline';
			}
			else 
			{
				divFeed.style.display = 'none';
			}
		}
		if(feedId=='n1')
		 {
			document.getElementById('n2').style.display = 'none';
			document.getElementById('n3').style.display = 'none';
                      /*document.getElementById('n4').style.display = 'none';*/
		} 
		else if(feedId=='n2')
		{
			document.getElementById('n1').style.display = 'none';
			document.getElementById('n3').style.display = 'none';
		      /*document.getElementById('n4').style.display = 'none';*/
		}		
		else if(feedId=='n3')
		{
			document.getElementById('n1').style.display = 'none';
			document.getElementById('n2').style.display = 'none';
			/*document.getElementById('n4').style.display = 'none';*/
		}
		/*else
		{
			document.getElementById('n1').style.display = 'none';
			document.getElementById('n2').style.display = 'none';
			document.getElementById('n3').style.display = 'none';
		}*/
	}	
	
function positionChicklet(chickletAnchorId, feedId)
{
	var chickletAnchorObj = document.getElementById(chickletAnchorId);
	var feedObj = document.getElementById(feedId);
	if(chickletAnchorObj != null && feedObj != null)
	{
		var topPos = parseInt(chickletAnchorObj.offsetTop)+parseInt(chickletAnchorObj.offsetHeight)+2;
		var leftPos = chickletAnchorObj.offsetLeft;
		if(navigator.appName.indexOf("Internet Explorer") > -1)
		{
			
		
		}
		else
		{
			feedObj.style.top = topPos+"px";
			feedObj.style.left = leftPos +"px";
			feedObj.style.marginLeft = "0px";
			feedObj.style.marginTop = "0px";			
			

		}
		
	}

}	
