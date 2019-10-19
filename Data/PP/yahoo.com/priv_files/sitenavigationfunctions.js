var g_httpCgiUrl = "/cs/idcplg?IdcService=SS_GET_PAGE&";

/////////////////////////////////////////////////////////////////////////////
// Function : isTrue
// Comments :
/////////////////////////////////////////////////////////////////////////////
function isTrue( boolStr )
{
	if( boolStr.length > 0 )
	{
		var boolChar = boolStr.substring(0,1).toUpperCase();
		if( ( boolChar == '1' ) || ( boolChar == 'T' ) )
		{
			return true;
		}
	}

	return false;
}

/////////////////////////////////////////////////////////////////////////////
// Function : link
// Comments :
/////////////////////////////////////////////////////////////////////////////
function link(dDocName,ssTargetNodeId,ssTargetSiteId)
{
	if ((dDocName.search("http://") != -1) || (dDocName.search("https://") != -1))
	{
		window.open(dDocName);
	}
	else if (dDocName.charAt(0) == '#')
        {
           window.location = window.location.href.split("#")[0] + dDocName;
        }
	else
	{
		var newUrl = "";
		newUrl += g_httpCgiUrl;
		newUrl += "ssDocName=" + dDocName;

		var currentUrl = "" + window.location;

		// Continue propagation of the "SSContributor" parameter
		if( SSContributor )
		{
			var paramName = "SSContributor=";
			var pos = currentUrl.indexOf( paramName );
			if( pos != -1 )
			{
				var subStr = currentUrl.substring( pos+paramName.length, pos+paramName.length+1 );
				if( isTrue( subStr ) )
				{
					newUrl += "&" + paramName + "true";
				}
			}
		}

		// Continue propagation of the "previewId" parameter
		var previewId = "previewId=";
		var posStart = currentUrl.indexOf( previewId );
		if( posStart != -1 )
		{
			var posEnd = currentUrl.indexOf("&", posStart);
			var value = "";
			if (posEnd == -1)
			{
				value = currentUrl.substring(posStart+previewId.length, currentUrl.length);
			}
			else
			{
				value = currentUrl.substring(posStart+previewId.length, posEnd);
			}
			newUrl += "&" + previewId + value;
		}

		// We now always add the node that the link is on as part of the URL also.
		if( typeof g_ssSourceNodeId != _U && g_ssSourceNodeId != null )
			newUrl += "&ssSourceNodeId=" + g_ssSourceNodeId;

		if( typeof g_ssSourceSiteId != _U && g_ssSourceSiteId != null )
			newUrl += "&ssSourceSiteId=" + g_ssSourceSiteId;

		// If we have a specific target nodeId then add that to the URL also
		if( typeof ssTargetNodeId != _U && ssTargetNodeId != null )
			newUrl += "&ssTargetNodeId=" + ssTargetNodeId;

		if( typeof ssTargetSiteId != _U && ssTargetSiteId != null )
			newUrl += "&ssTargetSiteId=" + ssTargetSiteId;

		// We no longer support passing ssUrlPrefix on the URL - now we pass a value
		// to indicate the type of address being used and then let the server compute it.
		var urlType = 0; // undefined
		if( typeof ssUrlType != _U && ssUrlType != null )
		{
			urlType = ssUrlType;
		}
		else if( typeof ssUrlPrefix != _U && ssUrlPrefix != null )
		{
			if( ssUrlPrefix == "/" )
				urlType = 1;
			else
				urlType = 2;
		}
		newUrl += "&ssUrlType=" + urlType;

		if( typeof ssDomainNum != _U && ssDomainNum != null )
		{
			newUrl += "&ssDomainNum=" + ssDomainNum;
		}

		// Navigate to the new url
		window.location = newUrl;
	}
}

/////////////////////////////////////////////////////////////////////////////
// Function : nodelink
// Comments :
/////////////////////////////////////////////////////////////////////////////
function nodelink(nodeId,siteId)
{
	var newUrl = "";
	newUrl += g_httpCgiUrl;

	if (typeof nodeId != _U && nodeId != 0)
	{
		newUrl += "nodeId=" + nodeId;
	}

	if( typeof siteId != _U && siteId != null )
	{
		newUrl += "&siteId=" + siteId;
	}

	var currentUrl = "" + window.location;

	// Continue propagation of the "SSContributor" parameter
	if( SSContributor )
	{
		var paramName = "SSContributor=";
		var pos = currentUrl.indexOf( paramName );
		if( pos != -1 )
		{
			var subStr = currentUrl.substring( pos+paramName.length, pos+paramName.length+1 );
			if( isTrue( subStr ) )
			{
				newUrl += "&" + paramName + "true";
			}
		}
	}

	// Continue propagation of the "previewId" parameter
	var previewId = "previewId=";
	var posStart = currentUrl.indexOf( previewId );
	if( posStart != -1 )
	{
		var posEnd = currentUrl.indexOf("&", posStart);
		var value = "";
		if (posEnd == -1)
		{
			value = currentUrl.substring(posStart+previewId.length, currentUrl.length);
		}
		else
		{
			value = currentUrl.substring(posStart+previewId.length, posEnd);
		}
		newUrl += "&" + previewId + value;
	}

	// We now always add the node that the link is on as part of the URl also.
	if( typeof g_ssSourceNodeId != _U && g_ssSourceNodeId != null )
		newUrl += "&ssSourceNodeId=" + g_ssSourceNodeId;

	if( typeof g_ssSourceSiteId != _U && g_ssSourceSiteId != null )
		newUrl += "&ssSourceSiteId=" + g_ssSourceSiteId;

	// We no longer support passing ssUrlPrefix on the URL - now we pass a value
	// to indicate the type of address being used and then let the server compute it.
	var urlType = 0; // undefined
	if( typeof ssUrlType != _U && ssUrlType != null )
	{
		urlType = ssUrlType;
	}
	else if( typeof ssUrlPrefix != _U && ssUrlPrefix != null )
	{
		if( ssUrlPrefix == "/" )
			urlType = 1;
		else
			urlType = 2;
	}
	newUrl += "&ssUrlType=" + urlType;

	if( typeof ssDomainNum != _U && ssDomainNum != null )
	{
		newUrl += "&ssDomainNum=" + ssDomainNum;
	}

	// Navigate to the new url
	window.location = newUrl;
}

/////////////////////////////////////////////////////////////////////////////
// Function : sitelink
// Comments :
/////////////////////////////////////////////////////////////////////////////
function sitelink(siteId)
{
	var newUrl = "";
	newUrl += g_httpCgiUrl;
	newUrl += "siteId=" + siteId;

	var currentUrl = "" + window.location;

	// Continue propagation of the "SSContributor" parameter
	if( SSContributor )
	{
		var paramName = "SSContributor=";
		var pos = currentUrl.indexOf( paramName );
		if( pos != -1 )
		{
			var subStr = currentUrl.substring( pos+paramName.length, pos+paramName.length+1 );
			if( isTrue( subStr ) )
			{
				newUrl += "&" + paramName + "true";
			}
		}
	}

	// Continue propagation of the "previewId" parameter
	var previewId = "previewId=";
	var posStart = currentUrl.indexOf( previewId );
	if( posStart != -1 )
	{
		var posEnd = currentUrl.indexOf("&", posStart);
		var value = "";
		if (posEnd == -1)
		{
			value = currentUrl.substring(posStart+previewId.length, currentUrl.length);
		}
		else
		{
			value = currentUrl.substring(posStart+previewId.length, posEnd);
		}
		newUrl += "&" + previewId + value;
	}

	// We now always add the node that the link is on as part of the URl also.
	if( typeof g_ssSourceNodeId != _U && g_ssSourceNodeId != null )
		newUrl += "&ssSourceNodeId=" + g_ssSourceNodeId;

	if( typeof g_ssSourceSiteId != _U && g_ssSourceSiteId != null )
		newUrl += "&ssSourceSiteId=" + g_ssSourceSiteId;

	// We no longer support passing ssUrlPrefix on the URL - now we pass a value
	// to indicate the type of address being used and then let the server compute it.
	var urlType = 0; // undefined
	if( typeof ssUrlType != _U && ssUrlType != null )
	{
		urlType = ssUrlType;
	}
	else if( typeof ssUrlPrefix != _U && ssUrlPrefix != null )
	{
		if( ssUrlPrefix == "/" )
			urlType = 1;
		else
			urlType = 2;
	}
	newUrl += "&ssUrlType=" + urlType;

	if( typeof ssDomainNum != _U && ssDomainNum != null )
	{
		newUrl += "&ssDomainNum=" + ssDomainNum;
	}

	// Navigate to the new url
	window.location = newUrl;
}

/////////////////////////////////////////////////////////////////////////////

function BrowserDetectionObject()
{
	this.agt = navigator.userAgent.toLowerCase();
	this.appVersion = navigator.appVersion;
	this.majorVersion = parseInt(navigator.appVersion);
	this.minorVersion = parseFloat(navigator.appVersion) - this.majorVersion;

	this.is_ie = (this.agt.indexOf("msie") != -1);
	this.is_ns = ((this.agt.indexOf("mozilla")!=-1) &&
	              (this.agt.indexOf("spoofer")==-1) &&
	              (this.agt.indexOf("compatible") == -1) &&
	              (this.agt.indexOf("opera")==-1) &&
	              (this.agt.indexOf("webtv")==-1) &&
                      (this.agt.indexOf("firefox")==-1));
	this.is_ff = (this.agt.indexOf("firefox")!=-1);

	if (this.is_ie)
	{
		this.majorVersion = parseInt(this.agt.substring(this.agt.indexOf("msie ")+5));
		this.minorVersion = parseInt(this.agt.substring(this.agt.indexOf("msie ")+7));
	}
	else if (this.is_ns && (this.agt.indexOf("netscape6/") != -1))
	{
		this.majorVersion = parseInt(this.agt.substring(this.agt.indexOf("netscape6/")+10));
		this.minorVersion = parseInt(this.agt.substring(this.agt.indexOf("netscape6/")+12));
	}
	else if (this.is_ns && (this.agt.indexOf("netscape/7") != -1))
	{
		this.majorVersion = parseInt(this.agt.substring(this.agt.indexOf("netscape/7")+9));
		this.minorVersion = parseInt(this.agt.substring(this.agt.indexOf("netscape/7")+11));
	}
	else if (this.is_ff)
	{
		this.majorVersion = parseInt(this.agt.substring(this.agt.indexOf("firefox/")+8));
                this.minorVersion = parseInt(this.agt.substring(this.agt.indexOf("firefox/")+10));
	}

	this.is_ns3   = (this.is_ns && (this.majorVersion == 3));
	this.is_ns4   = (this.is_ns && (this.majorVersion == 4));
	this.is_ns6   = (this.is_ns && (this.majorVersion == 6));
	this.is_ns7   = (this.is_ns && (this.majorVersion == 7));
	this.is_ns4up = (this.is_ns && (this.majorVersion >= 4));
	this.is_ns6up = (this.is_ns && (this.majorVersion >= 6));
	this.is_ns7up = (this.is_ns && (this.majorVersion >= 7));
	this.is_ie3   = (this.is_ie && (this.majorVersion == 3));
	this.is_ie4   = (this.is_ie && (this.majorVersion == 4));
	this.is_ie5   = (this.is_ie && (this.majorVersion == 5));
	this.is_ie6   = (this.is_ie && (this.majorVersion == 6));
	this.is_ie4up = (this.is_ie && (this.majorVersion >= 4));
	this.is_ie5up = (this.is_ie && (this.majorVersion >= 5));
	this.is_ie6up = (this.is_ie && (this.majorVersion >= 6));
        this.is_ff1   = (this.is_ff && (this.majorVersion == 1));
        this.is_ff1up = (this.is_ff && (this.majorVersion >= 1));
}
var g_objBrowserDetection = new BrowserDetectionObject();

function ShowCurrentBrowserInfo()
{
   document.write("agt = " + g_objBrowserDetection.agt + "<br>");
   document.write("appVersion = " + g_objBrowserDetection.appVersion + "<br>");
   document.write("majorVersion = " + g_objBrowserDetection.majorVersion + "<br>");
   document.write("minorVersion = " + g_objBrowserDetection.minorVersion + "<br>");

   document.write("is_ie = " + g_objBrowserDetection.is_ie + "<br>");
   document.write("is_ns = " + g_objBrowserDetection.is_ns + "<br>");
   document.write("is_ff = " + g_objBrowserDetection.is_ff + "<br>");

   document.write("is_ns3 = " + g_objBrowserDetection.is_ns3 + "<br>");
   document.write("is_ns4 = " + g_objBrowserDetection.is_ns4 + "<br>");
   document.write("is_ns6 = " + g_objBrowserDetection.is_ns6 + "<br>");
   document.write("is_ns7 = " + g_objBrowserDetection.is_ns7 + "<br>");
   document.write("is_ns4up = " + g_objBrowserDetection.is_ns4up + "<br>");
   document.write("is_ns6up = " + g_objBrowserDetection.is_ns6up + "<br>");
   document.write("is_ns7up = " + g_objBrowserDetection.is_ns7up + "<br>");

   document.write("is_ie3 = " + g_objBrowserDetection.is_ie3 + "<br>");
   document.write("is_ie4 = " + g_objBrowserDetection.is_ie4 + "<br>");
   document.write("is_ie5 = " + g_objBrowserDetection.is_ie5 + "<br>");
   document.write("is_ie6 = " + g_objBrowserDetection.is_ie6 + "<br>");
   document.write("is_ie4up = " + g_objBrowserDetection.is_ie4up + "<br>");
   document.write("is_ie5up = " + g_objBrowserDetection.is_ie5up + "<br>");
   document.write("is_ie6up = " + g_objBrowserDetection.is_ie6up + "<br>");

   document.write("is_ff1 = " + g_objBrowserDetection.is_ff1 + "<br>");
   document.write("is_ff1up = " + g_objBrowserDetection.is_ff1up + "<br>");
}

/////////////////////////////////////////////////////////////////////////////

