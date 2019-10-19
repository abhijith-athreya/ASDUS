/* Adding onload event for the body */
/* Making this javascript to load after page loads */
if(document.getElementById("highlightedImage") != null)
{
window.onload=HighlightedImageResize;
}
/*Commented the image resize on headline listing for PRNCOM responsive styles - fix for PRD-288
else if (window.location.href.indexOf("/news-releases") > -1 && window.location.href.indexOf(".html") == -1)
{
window.onload=HeadlineImageResize;
}
else if (document.getElementById("hdnImgCount") != null)
{
window.onload=HeadlineImageResize;
}
else if (window.location.href.indexOf("/search-results") > -1 || window.location.href.indexOf("/mediaware") > -1 || window.location.href.indexOf("/search") > -1)
{
window.onload=HeadlineImageResize;	
}*/
if(document.getElementById("theImages") != null)
addLoadEvent(initSlideShow);
/*
if(location.href.indexOf("/advanced") > -1)
addLoadEvent(OnAdvSearchLoad);

function addLoadEvent(func) { 
	  var oldonload = window.onload; 
	  if (typeof window.onload != 'function') { 
	    window.onload = func; 
	  } else { 
	    window.onload = function() { 
	      oldonload(); 
	      func(); 
    } 
  } 
} 

*/
function TrackOmniture(userAction)
{
	var s=s_gi(s_account);
	s.linkTrackVars='prop7';
	s.prop7=userAction;//online chat, Call back
	s.tl(this,'o','Lead Type'); 

}
function lpCall()
{
	setTimeout('lp()',500);
}

function lp()
{
	var chatHTML = document.getElementById("lpchatbutton1").innerHTML.toLowerCase();
	var voiceHTML = document.getElementById("lpvoicebutton1").innerHTML.toLowerCase();
	if(chatHTML == "" || voiceHTML == "")
	{
		setTimeout('lp()',500);
	}
	else
	{
		if(chatHTML.indexOf("default.gif") > -1 || chatHTML.indexOf("transparent.gif") > -1 || voiceHTML.indexOf("default.gif") > -1 || voiceHTML.indexOf("transparent.gif") > -1)
		{
			setTimeout('lp()',500);
		}
		else
		{
			if(chatHTML.indexOf("online.gif") == -1)
			{
				if(document.getElementById('contact_chatonline') != null)
				{
					document.getElementById('contact_chatonline').style.display="none";
					document.getElementById('contact_emailus').className = "last";
				}
				if(document.getElementById('liveperson-chat') != null)
				document.getElementById('liveperson-chat').style.display="none"
				if(document.getElementById('chatonline') != null)	
					document.getElementById('chatonline').style.display="none"
			}

			//Voice
			if(voiceHTML.indexOf("online.gif") == -1)
			{
				if(document.getElementById('contact_clicktotalk') != null)
				document.getElementById('contact_clicktotalk').style.display="none"
				if(document.getElementById('liveperson-talk') != null)
				document.getElementById('liveperson-talk').style.display="none"
				if(document.getElementById('clicktotalk') != null)	
				document.getElementById('clicktotalk').style.display="none"	
			}
		}
		
	}
}

function HeadlineImageResize()//This function is no longer in use - PRD-288
{
	 if (document.getElementById("hdnImgCount")!=null) { /* Resize in all the headlines */
	        var imgCounter = document.getElementById("hdnImgCount").value;
		var maxImgWidth = 144;
		for(var i =0; i < imgCounter; i++)
		{
			var imgItem = document.getElementById("img"+i);
			var imgWidth = document.getElementById("img"+i).width;
			
			if(imgWidth > maxImgWidth)
			{
				imgItem.style.width = maxImgWidth+"px";
			}
		}
	}	

	var arr=document.getElementsByName('sized-photo');
        /* PRN-792 */
	/* implementing logic for changing width only if width is >132px*/
        var wid=0;
	for (var i=0;i<arr.length;i++)
	{
    	wid = arr[i].width;
		if(wid>132)
		   arr[i].width="132";
          /* PRN-835 */
          /* Adding logic for centering image if image width < 132 */
	        if(wid<132)
                   {
                   /* arr[i].parentNode.parentNode.align="center";*/
                    arr[i].parentNode.parentNode.style.textAlign="center";
                   /* arr[i].parentNode.style.left="none";*/
                   /* arr[i].parentNode.style.position="relative";*/
                   /* arr[i].parentNode.className="clip centerclip";*/
                   }

          /* End of addition PRN-835 */
          /* Adding logic for centering image if image width < 132 */
                  
	}
	for (var i=0;i<arr.length;i++)
	{
		var k=i;
		var h1=arr[i].height;
		i=i+1;
		var h2=arr[i].height;
		i=i+1;
		var h3=arr[i].height;
		var maxheight = Math.max(h1,h2,h3);		
		for(var img1=k;img1<=i;img1++)
			{
				arr[img1].parentNode.parentNode.style.height = maxheight+"px";
			}
	}
}

function HighlightedImageResize()
{
var highlightedImage = document.getElementById("highlightedImage");
if(highlightedImage != null)
{
if(highlightedImage.width > 192)
	highlightedImage.width = 192;
if(highlightedImage.height > 192)
	highlightedImage.height = 192;
	}
}
function liveperson()
{
var imgw_chat;
var imgh_chat;
var imgw_voice;
var imgh_voice;
var chatimage;
var voiceimage;
	
	document.getElementById('chatimage').style.display="inline";
	document.getElementById('voiceimage').style.display="inline";
	var Img_chat = document.getElementById('chatimage');
	var Img_voice = document.getElementById('voiceimage');
	
	imgw_chat =Img_chat.offsetWidth;
	imgh_chat =Img_chat.offsetHeight;
	imgw_voice =Img_voice.offsetWidth;
	imgh_voice =Img_voice.offsetHeight;	
	if(imgw_chat == 160 && imgh_chat == 1) chatimage = 0
	else chatimage = 1
	if(imgw_voice == 160 && imgh_voice == 1) voiceimage = 0
	else voiceimage = 1	
        /* PRN-872 */
        /* adding logic for liveperson for section specific footer */
	if(chatimage ==0)
        {
		if(document.getElementById('contact_chatonline') != null)
		{
			document.getElementById('contact_chatonline').style.display="none";
			document.getElementById('contact_emailus').className = "last";
		}
		if(document.getElementById('liveperson-chat') != null)
		document.getElementById('liveperson-chat').style.display="none"
       }
	if(voiceimage ==0)
        {
		if(document.getElementById('contact_clicktotalk') != null)
		document.getElementById('contact_clicktotalk').style.display="none"
	    if(document.getElementById('liveperson-talk') != null)
		document.getElementById('liveperson-talk').style.display="none"
        
        }
        
        if (document.getElementById("hdnImgCount")!=null) { /* Resize in all the headlines */
	        var imgCounter = document.getElementById("hdnImgCount").value;
		var maxImgWidth = 144;
		for(var i =0; i < imgCounter; i++)
		{
			var imgItem = document.getElementById("img"+i);
			var imgWidth = document.getElementById("img"+i).width;
			
			if(imgWidth > maxImgWidth)
			{
				imgItem.style.width = maxImgWidth+"px";
			}
		}
	}	

	/*---Changing the Live Person footer based on the availability of the expert----*/
		
	/*---Changing the Live Person Top Navigation based on the availability of the expert----*/				

	if(chatimage ==0)
	if(document.getElementById('chatonline') != null)	
	document.getElementById('chatonline').style.display="none"
	if(voiceimage ==0)
	if(document.getElementById('clicktotalk') != null)	
	document.getElementById('clicktotalk').style.display="none"		
	document.getElementById('chatimage').style.display="none";	
	document.getElementById('voiceimage').style.display="none";	
	var arr=document.getElementsByName('sized-photo');
        /* PRN-792 */
	/* implementing logic for changing width only if width is >132px*/
        var wid=0;
	for (var i=0;i<arr.length;i++)
	{
        wid = arr[i].width;
		if(wid>132)
		   arr[i].width="132";
          /* PRN-835 */
          /* Adding logic for centering image if image width < 132 */
	        if(wid<132)
                   {
                   /* arr[i].parentNode.parentNode.align="center";*/
                    arr[i].parentNode.parentNode.style.textAlign="center";
                   /* arr[i].parentNode.style.left="none";*/
                   /* arr[i].parentNode.style.position="relative";*/
                   /* arr[i].parentNode.className="clip centerclip";*/
                   }

          /* End of addition PRN-835 */
          /* Adding logic for centering image if image width < 132 */
	}
	for (var i=0;i<arr.length;i++)
	{
		var k=i;
		var h1=arr[i].height;
		i=i+1;
		var h2=arr[i].height;
		i=i+1;
		var h3=arr[i].height;
		var maxheight = Math.max(h1,h2,h3);		
		for(var img1=k;img1<=i;img1++)
			{
				arr[img1].parentNode.parentNode.style.height = maxheight+"px";
			}
	}
	}
        /* PRN-594 */
      /* If there are any related links show them by default */
	if(document.getElementById('n4') != null)	
              disp('n4');
