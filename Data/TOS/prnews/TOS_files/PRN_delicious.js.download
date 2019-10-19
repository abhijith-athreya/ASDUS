function getURL(contentTitle) {
        var str = formatURL();
        var newTitle= encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());
        
		news1 = "http://del.icio.us/post?url="+str+"&amp;title="+ newTitle;
	    window.open(news1,"Delicious","location=yes, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=yes, width=700, height=500");
	    return true;      
}
//  added for PRN.Com _1.3- for post to diggit 
function getdiggURL(contentTitle) {
        var str = formatURL();
        
        var newTitle = encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());
        
	    news1 = "http://digg.com/submit?phase=2&url="+str+"&title="+ newTitle;
	    window.open(news1,"_blank");
        return true;      
}
// change for PRN.Com _1.3- ends 
//  added for PRN.Com _1.4- for Technorati implementation
function gettechURL(contentTitle) {
        var str = formatURL();
        var newTitle = encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());
        news1 = "http://technorati.com/search/"+'"'+newTitle+'"';
	    window.open(news1,"_blank");
        return true;      
}
// change for PRN.Com _1.4- ends 
function getblogURL(contentTitle) {
        var str = window.document.URL.toString();
        var newTitle = encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());
		var words = newTitle.split('%20');
		var s = words.join("+"); 
		news1 = "http://blogsearch.google.com/blogsearch?hl=en&q="+s+"&btnG=Search+Blogs";
	    window.open(news1,"_blank");	
        return true;      
}
function blogger(contentTitle)
{
if (legalconfirm() == false) {
	javascript:popw='';
	Q='';
	x=document;
	y=window;
	if(x.selection) 
		{Q=x.selection.createRange().text;} 
	else if (y.getSelection) 
		{Q=y.getSelection();} 
	else if (x.getSelection) 
		{Q=x.getSelection();}
	var url = formatURL();	
    		
	popw = y.open('http://www.blogger.com/blog_this.pyra?t=' + escape(Q) + '&u=' + escape(url) + '&n=' + escape(contentTitle != ""? contentTitle : document.title),'bloggerForm','scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes');
	if (!document.all) T = setTimeout('popw.focus()',50);
	void(0);
	return true;
	}
}

/*function wordpress()
{

if (legalconfirm() == false) {
	var url = location.href;		
    var newTitle = encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());	
	void (btw=window.open ('http://wordpress.com/wp-admin/post-new.php?popurl' + escape(url) + '&t=' + newTitle + '&v=2', 'wp','scrollbars=yes,width=600,height=460,left=100,top=150,status=yes,resizable=yes'));btw.focus();
    return true;
    }
}*/

function wordpress(contentTitle)
{
if (legalconfirm() == false) {
	var url = formatURL();
	var wordpressblogurl = document.getElementById("WordpressURL").value;		
	var newTitle = encodeURIComponent(contentTitle != ""? contentTitle : document.title.toString());	
	if(wordpressblogurl.length>0 ) {
		if(wordpressblogurl.substr(0,7)!='http://'){
			wordpressblogurl = 'http://'+wordpressblogurl;
		}
		var url_length=wordpressblogurl.length;
		var last_char=wordpressblogurl.charAt(url_length-1);
		
		if(last_char!='/'){
			wordpressblogurl = wordpressblogurl+'/';	
		}
		disp('n5');	// div id of text box
		void (btw=window.open (wordpressblogurl+'wp-admin/press-this.php?s=' + escape(url) + '&t=' + newTitle, 'wp','scrollbars=yes,width=600,height=460,left=100,top=150,status=yes,resizable=yes'));btw.focus();
	} else {
    		alert("Please enter a valid Wordpress URL");		
	}
    return true;
    }

}

function newswine(contentTitle)
{
	var url = formatURL();    
 var news = 'http://www.newsvine.com/_wine/save?popoff=1&h=' + escape(contentTitle != ""? contentTitle : document.title) + '&u='+ escape(url);
 window.open(news,'newsvine','toolbar=no,width=590,height=600,resizable=yes,scrollbars=yes');
 return true;
}   
  /*
   Newly added javascript functions */
   
   
   
   function opengoogle(contentTitle)
 {
 var url = formatURL();
 var a=window,b=document,c=encodeURIComponent,d=a.open("http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+c(url)+"&title="+c(contentTitle != ""? contentTitle : document.title),"bkmk_popup","left="+((a.screenX||a.screenLeft)+10)+",top="+((a.screenY||a.screenTop)+10)+",height=420px,width=550px,resizable=1,alwaysRaised=1");a.setTimeout(function(){d.focus()},300);

}

function GetThis(T, C, U, L) { 
	var targetUrl = 'http://www.myspace.com/Modules/PostTo/Pages/?' + 't=' + encodeURIComponent(T)+ '&c=' + encodeURIComponent(C) + '&u=' + encodeURIComponent(U) + '&l=' + L; window.open(targetUrl); 
}


function myyahoo(contentTitle) {
	var url = formatURL();
	window.open('http://beta.bookmarks.yahoo.com/toolbar/savebm?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(contentTitle != ""? contentTitle : document.title),'sharer','resizable=yes,width=626,height=436,scrollbars=yes');
	return true;


}
/* PRN-524 */
/* Changing the search keyword to source/company which is passed as parameter */
function twittersearch(urlparam) {
	var url = urlparam;
	window.open('http://search.twitter.com/search?q='+encodeURIComponent(url)+'&resizable=yes,width=626,height=436,scrollbars=yes');
	return true;
}
function linkedin(contentTitle) {
	var url = formatURL();
	var linkedinTitle = contentTitle != ""? decodeURIComponent(contentTitle.replace(/\+/g,  " ")): document.title;
	window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&title='+encodeURIComponent(linkedinTitle),'sharer','resizable=yes,width=626,height=436,scrollbars=yes');
	return true;
}
function blog_linkedin(blogurl,contentTitle) {
	var url = blogurl;
	var linkedinTitle = contentTitle != ""? decodeURIComponent(contentTitle.replace(/\+/g,  " ")): document.title;
	window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&title='+encodeURIComponent(linkedinTitle),'sharer','resizable=yes,width=626,height=436,scrollbars=yes');
	return true;
}
function moveabletype() {
	var url = formatURL();
	window.open('http://search.twitter.com/search?q='+encodeURIComponent(url)+'resizable=yes,width=626,height=436,scrollbars=yes');
	return true;
}
function typepad(contentTitle) {
	var url = formatURL();
	window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&title='+encodeURIComponent(contentTitle != ""? contentTitle : document.title)+'resizable=yes,width=626,height=436,scrollbars=yes');
	return true;
}

function facebook(contenttitle,desc,imgurl) {
	var url = formatURL();
	if(imgurl)
	{
		var contenttitle = contenttitle ? decodeURIComponent(contenttitle.replace(/\+/g,  " ")) : document.title;
		var desc = desc ? decodeURIComponent(desc.replace(/\+/g,  " ")) : "";   
		window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent(contenttitle)+'&p[summary]='+encodeURIComponent(desc)+'&p[url]='+encodeURIComponent(url)+'&p[images][0]='+encodeURIComponent(imgurl)+'','sharer','scrollbars=yes, resizable=yes,toolbar=0,status=0,width=626,height=436');		
	}
	else
	{
		window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(contenttitle ? contenttitle : document.title),'sharer','scrollbars=yes, resizable=yes,toolbar=0,status=0,width=626,height=436');
	}
	return true;

}

function facebookGeoLoc(contentTitle, url) {
	window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(contentTitle != ""? contentTitle : document.title),'sharer','scrollbars=yes, resizable=yes,toolbar=0,status=0,width=626,height=436');
	return true;

}

/*function twitter(contentTitle) {
	if (legalconfirm() == false) {

	var url = formatURL();
    t = document.title;
	window.open("http://twitthis.com/twit?url="+encodeURIComponent(url)+"&title="+((t) ? encodeURIComponent(document.title.replace(/^\s*|\s*$/g,'')) : ""), "Twitter", "width=600, height=500, location, status, scrollbars, resizable");
	}
}*/

function myspace(contentTitle) {


	var url = formatURL();
    GetThis(contentTitle != ""? contentTitle : document.title, contentTitle != ""? contentTitle : document.title,url, 2)
	return true;

}
  
 /****************************************************** */
  
  
  
function reddit(contentTitle)
{
	var url = formatURL();
   
   var newslink = 'http://reddit.com/submit?url=' + escape(url) + '&title=' + escape(contentTitle != ""? contentTitle : document.title);
	window.open(newslink,'reddit','toolbar=no,width=590,height=600,resizable=yes,scrollbars=yes');
	return true;
}

function stumbleupon(contentTitle)
{
	var url = formatURL();
    var news1 = 'http://www.stumbleupon.com/submit?url=' + escape(url) + '&title=' + escape(contentTitle != ""? contentTitle : document.title);
	window.open(news1,'stumbleupon','toolbar=no,width=590,height=600,resizable=yes,scrollbars=yes');
	return true;
}

var isFeedVisible = false;
var str1 = window.document.URL.toString();

function link(feedId)
{   	
    var myArray = new Array();
    var mySplitResult = str1.split("?");
    
    document.getElementById('link').value = oldSystemPath + "/cgi-bin/stories.pl?"+mySplitResult[1];
	
	 divFeed = document.getElementById(feedId);	
	
		if(divFeed) 
		{
			if(divFeed.style.display == 'none') 
			{
				divFeed.style.display = 'inline'					
				isFeedVisible = true;
				document.getElementById('top').href = "#linktopagebottom";	
			}
			else
			{
				divFeed.style.display = 'none'
				
				isFeedVisible = false;
				document.getElementById('top').href = "#linktopagetop";
			   
			}
		
		}
window.setTimeout('setfocusof()',40);
		return true;
	
}
function setfocusof()
{
	document.getElementById('link').select();
}


function legalconfirm() {
	var answer = confirm("The blogging site you are about to enter has no connection to PR Newswire or the issuer of this release. Links to third party sites are for your convenience only and do not imply any endorsement, guarantee, warranty or representation by PR Newswire or the issuer of this release.")
	if (answer){
		return false;
	} else {
		return true;
	}
}

function formatURL()
{
	return location.href.replace(location.search, '');
}

function googleBuzz(contentTitle) {
	var url = formatURL();    
	var popupURL = 'http://www.google.com/reader/link?url='+encodeURIComponent(url)+'&title='+encodeURIComponent(contentTitle != ""? contentTitle : document.title)+'&srcTitle=www.prnewswire.com';
	window.open(popupURL,'GoogleBuzz','scrollbars=yes, resizable=yes,toolbar=0,status=0,width=626,height=436');
	return true;

}

function tumblr(contentTitle) {
	if(legalconfirm() == false)
	{
		var url = formatURL();    
		var popupURL = 'http://www.tumblr.com/share?v=3&s=&t=' +encodeURIComponent(contentTitle != ""? contentTitle : document.title)+ '&u='+encodeURIComponent(url);
		window.open(popupURL,'tumblr','scrollbars=yes, resizable=yes,toolbar=0,status=0,width=626,height=436');
	}
	return true;

}
var contentTitle = "";
function twitter(conTitle, longURL) {
	contentTitle = conTitle;
	if(longURL == '')
	{
		longURL = formatURL();
	}
	/*if(shortURL == "")
	{
		ShortenURL(longURL);
	}
	else
	{
		PostTwitter(shortURL);
	}*/
	//PostTwitter(ShortenURL(longURL));
	//ShortenURL methos is already calling PostTwitter method, hence commented
	ShortenURL(longURL);
	return true;
	
}

function tweetGeoLoc(conTitle, url)
{
	contentTitle = conTitle
	ShortenGeoLocURL(url);
	
}

function ShortenGeoLocURL(url)
{
	//Bit.ly function call to shorten url
	BitlyClient.call('shorten', {'longUrl': url}, 'BitlyCB.alertResponse');

}
function PostTwitter(shortURL) {
             var twtUrl = shortURL;
            var twtTitle = contentTitle ? decodeURIComponent(contentTitle.replace(/\+/g, " ")) : document.title;
            //Trim url+headline length to 140 chars
            var maxLength = 140 - (twtUrl.length + 1);
            if (twtTitle.length > maxLength) {
                twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
            }
            if (twtTitle.indexOf("&#39;") > -1) {
                var regex = new RegExp("&#39;", "g");
                twtTitle = twtTitle.replace(regex, "'");
            }
            if (twtTitle.indexOf("&#34;") > -1) {
                var regex1 = new RegExp("&#34;", "g");
                twtTitle = twtTitle.replace(regex1, '"');
            }
            var popupURL = 'http://twitter.com/home?status=' + encodeURIComponent(twtTitle + ' ' + twtUrl);
            //alert(popupURL);
            window.open(popupURL, "Twitter", "width=600, height=500, location=1, status=1, scrollbars=1, resizable=1");
        }

function Yahoobuzz(contentTitle,summary)
{
	var url = formatURL();
    var news1 = 'http://buzz.yahoo.com/buzz?headline=' + encodeURIComponent(contentTitle != ""? contentTitle : document.title) + '&targetUrl=' + encodeURIComponent(url) + '&summary=' + encodeURIComponent(summary!= ""? summary: document.title) ;
	window.open(news1,"_blank");
	return true;
}

function orkut(contentTitle){
	var url = formatURL();
	var f='http://promote.orkut.com/preview?nt=orkut.com&tt=' +encodeURIComponent(contentTitle != ""? contentTitle : document.title)+'&du='+encodeURIComponent(url);
	window.open(f,'Orkut','location=yes,links=no,scrollbars=no,toolbar=no,width=680,height=550');	
	return true;
}
