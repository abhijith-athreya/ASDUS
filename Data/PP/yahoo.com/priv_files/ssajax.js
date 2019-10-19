/////////////////////////////////////////////////////////////////////////////
// 
// Solution  : SiteStudio
// Project   : Site Studio Ajax Library (SSAjax)
//
// FileName  : ssajax.js
// FileType  : Javascript
// Author    : Jake Gordon
// Created   : January 2006
// Version   : 11gR1+ (11.1.1.8.0)
//
// Comments  : 
//
// Copyright : Oracle, Incorporated Confidential and Proprietary
//
//             This computer program contains valuable, confidential and proprietary
//             information. Disclosure, use, or reproduction without the written
//             authorization of Stellent is prohibited. This unpublished
//             work by Stellent is protected by the laws of the United States
//             and other countries. If publication of the computer program should occur,
//             the following notice shall apply:
//
//             Copyright (c) 1997-2001 IntraNet Solutions, Incorporated. All rights reserved.
//             Copyright (c) 2001-2007 Stellent, Incorporated. All rights reserved.
//             Copyright (c) 2007, 2013, Oracle and/or its affiliates. All rights reserved.
//
/////////////////////////////////////////////////////////////////////////////

SSAjax = new Object(); // namespace object
SSAjax.XML = new Object(); // namespace object

SSAjax.Strings = new Array(); // localized strings array (will be populated by loading locale specific ssajax.strings.js file)

//***************************************************************************
//***************************************************************************
//************************** ENVIRONMENT VARIABLES **************************
//***************************************************************************
//***************************************************************************

SSAjax.IS_OPERA = (navigator.userAgent.toLowerCase().indexOf("opera") > -1);
SSAjax.IS_FIREFOX = (navigator.userAgent.toLowerCase().indexOf("gecko") > -1) && (navigator.userAgent.toLowerCase().indexOf("firefox") > -1);
SSAjax.IS_NETSCAPE = (navigator.userAgent.toLowerCase().indexOf("gecko") > -1) && (navigator.userAgent.toLowerCase().indexOf("netscape") > -1);
SSAjax.IS_SAFARI = ((navigator.userAgent.toLowerCase().indexOf("applewebkit") > -1) || (navigator.userAgent.toLowerCase().indexOf("apple") > -1));
SSAjax.IS_IE = (navigator.userAgent.toLowerCase().indexOf("msie") > -1) && !SSAjax.IS_OPERA;
SSAjax.IS_MOZILLA = (navigator.userAgent.toLowerCase().indexOf("mozilla") > -1) && !SSAjax.IS_IE && !SSAjax.IS_OPERA && !SSAjax.IS_FIREFOX && !SSAjax.IS_NETSCAPE;

SSAjax.IS_WINDOWS = (navigator.platform.toLowerCase().indexOf('win') > -1);
SSAjax.IS_MAC = (navigator.platform.toLowerCase().indexOf('mac') > -1);
SSAjax.IS_LINUX = (navigator.platform.toLowerCase().indexOf('linux') > -1);

SSAjax.IS_STRICT = (document.compatMode == 'CSS1Compat');
SSAjax.IS_QUIRKS = (document.compatMode == 'BackCompat');

SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL1 = document.implementation && document.implementation.hasFeature;
SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL2 = document.implementation && document.implementation.createDocument;
SSAjax.HAS_DOM_XPATH_LEVEL3 = SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL1 && document.implementation.hasFeature("XPath", "3.0");

//***************************************************************************
//***************************************************************************
//************************ JAVASCRIPT TYPE UTILITIES ************************
//***************************************************************************
//***************************************************************************

var _U = "undefined";

SSAjax.IsString = function(obj) { return (typeof obj == 'string'); }
SSAjax.IsNumber = function(obj) { return (typeof obj == 'number'); }
SSAjax.IsBoolean = function(obj) { return (typeof obj == 'boolean'); }
SSAjax.IsArray = function(obj) { return (obj instanceof Array); }
SSAjax.IsFunction = function(obj) { return (typeof obj == 'function'); }
SSAjax.IsUndefined = function(obj) { return (typeof obj == 'undefined'); }
SSAjax.IsNull = function(obj) { return (obj == null); }
SSAjax.IsNotValid = function(obj) { return (SSAjax.IsNull(obj) || SSAjax.IsUndefined(obj)); }
SSAjax.IsValid = function(obj) { return (!SSAjax.IsNull(obj) && !SSAjax.IsUndefined(obj)); }

SSAjax.ToBool = function(obj, def)
{
    if (SSAjax.IsValid(obj))
    {
        return ((obj == 1) || (obj == true) || (obj == "1") || (obj.toString().toLowerCase() == "true") || (obj.toString().toLowerCase() == 'yes'));
    }
    
    return (SSAjax.IsBoolean(def) ? def : false);
};

SSAjax.ToInt = function(obj, def)
{
    if (SSAjax.IsValid(obj))
    {
        var x = parseInt(obj);
        if (!isNaN(x))
        {
            return x;
        }
    }

    return (SSAjax.IsNumber(def) ? def : 0);
}

SSAjax.ToString = function(obj, def)
{
    if (SSAjax.IsValid(obj))
    {
        return obj.toString();
    }
    
    return (SSAjax.IsString(def) ? def : '');
}

//***************************************************************************
//***************************************************************************
//************************ X-BROWSER IMPLEMENTATIONS ************************
//***************************************************************************
//***************************************************************************

//
// x-browser way to create a blank XML DOM Document
//
if (SSAjax.IS_IE && SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL2)
{
    SSAjax.CreateXMLDocument = function() { return document.implementation.createDocument("", "", null); }
}

if (SSAjax.IS_IE) // Always use the ActiveX
{
    SSAjax.CreateXMLDocument = function() { return new ActiveXObject("Msxml2.DOMDocument"); }
}

//
// if NodeType enumeration doesn't exist, then provide it
//
if(!window.Node || !Node.ELEMENT_NODE)
{
    var Node = {ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5,  ENTITY_NODE: 6, PROCESSING_INSTRUCTION_NODE: 7, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_TYPE_NODE: 10, DOCUMENT_FRAGMENT_NODE: 11, NOTATION_NODE: 12};
};

//
// if XMLHttpRequest is not implemented, but this is IE, then provide our own XMLHttpRequest using MSXML
//
if (!window.XMLHttpRequest && SSAjax.IS_IE)
{
    XMLHttpRequest = function() { return new ActiveXObject("Msxml2.XMLHTTP"); }
}

//
// if XMLSerializer is not implemented, but I can create a DOM Document that has an .xml property, then provide our own XMLSerializer
//
if (!window.XMLSerializer && SSAjax.CreateXMLDocument && ("xml" in SSAjax.CreateXMLDocument()))
{
    XMLSerializer = function(){};
    XMLSerializer.prototype.serializeToString = function(oNode) { return oNode.xml; };
}

//***************************************************************************

window.getXMLSerializer = function(){};
window.getXMLSerializer.prototype.serializeToString = function(oNode)
{
	if (SSAjax.IS_IE)
	{
		return oNode.xml;
	}
	else
	{
		return (new XMLSerializer()).serializeToString(oNode);
	}
};

//
// if DOMParser does not exist, but I can create a DOM Document that has a .loadXML method, then provide our own DOMParser
//

SSAjax.ParseXmlFromString = function(xml, contentType)
{
   var doc = SSAjax.CreateXMLDocument();
   doc.resolveExternals = false;
   doc.loadXML(xml);

   // Some versions of the MSXML parser (namely MSXML3) will use zero-based
   // indexing for its xpath expressions (contrary to the xpath spec) unless
   // you set the "SelectionLanguage" to "XPath".  For example the expression:
   //     foo[1]
   // would actually return the second foo element instead of the first.
	if ("setProperty" in doc)
	{
		doc.setProperty("SelectionLanguage", "XPath");
	}

   return doc;
};

//***************************************************************************

if (!window.DOMParser && SSAjax.CreateXMLDocument && ("loadXML" in SSAjax.CreateXMLDocument()))
{
    DOMParser = function() {};
    DOMParser.prototype.parseFromString = function(xml, contentType)
    {
        return SSAjax.ParseXmlFromString(xml, contentType);
    }
}

//***************************************************************************

window.getDOMParser = function() {};
window.getDOMParser.prototype.parseFromString = function(xml, contentType)
{
	if (window.DOMParser && SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL2 && !("selectNodes" in document.implementation.createDocument("", "", null)))
	{
		return SSAjax.ParseXmlFromString(xml, contentType);
	}
	else
	{
		return (new DOMParser()).parseFromString(xml, contentType);
	}
};

//***************************************************************************

//
// provide our own Node.selectNodes() method if necessary
//
if (SSAjax.CreateXMLDocument && ("selectNodes" in SSAjax.CreateXMLDocument()))
{
    SSAjax.HAS_SELECT_NODES = true; // most likely IE
}
else if (SSAjax.HAS_DOM_XPATH_LEVEL3)
{
    SSAjax.HAS_SELECT_NODES = true; // most likely MOZILLA
    
    XMLDocument.prototype.selectNodes = Node.prototype.selectNodes = function(expr)
    {
        var doc = (this.ownerDocument ? this.ownerDocument : this);
        var nsResolver = doc._namespaces ? function(prefix) { return doc._namespaces[prefix]; } 
                                                : doc.createNSResolver(doc.documentElement);

        var nodes = doc.evaluate(expr, this, nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

        var nodelist = new Array();
        while (node = nodes.iterateNext()) { nodelist.push(node); }
        return nodelist;
    }

    XMLDocument.prototype.selectSingleNode = Node.prototype.selectSingleNode = function(expr)
    {
        var nodeList = this.selectNodes("(" + expr + ")[1]"); // only need the first matching node (xpath uses 1-based offsets)
        if (nodeList.length > 0)
            return nodeList[0];
        else
            return null;
    }
}
else
{
    SSAjax.HAS_SELECT_NODES = false;
}

//***************************************************************************
//***************************************************************************
//******************************* XML METHODS *******************************
//***************************************************************************
//***************************************************************************

SSAjax.XML.SetXPathNamespaces = function(dom, ns)
{
    if (SSAjax.IS_IE)
    {
        dom.setProperty("SelectionLanguage", "XPath");
        dom.setProperty("SelectionNamespaces", ns);
    }
    else
    {
        // store all prefix:uri pairs in an array in the DOM object for use during .selectSingleNode / .selectNodes() methods
        var namespaces = ns.indexOf(" ") > -1 ? ns.split(" ") : new Array(ns);
        dom._namespaces = new Array(namespaces.length);
        for (var i = 0 ; i < namespaces.length ; i++)
        {
            var thisNamespace = namespaces[i];
            var colonPos = thisNamespace.indexOf(":");
            var assignPos = thisNamespace.indexOf("=");
            if (colonPos == 5 && assignPos > colonPos+2)
            {
                var prefix = thisNamespace.substring(colonPos+1, assignPos);
                var uri = thisNamespace.substring(assignPos+2, thisNamespace.length-1);
                dom._namespaces[prefix] = uri;
            }
        }
    }
}

SSAjax.XML.GetPreviousSiblingElement = function(domNode)
{
    var n = domNode.previousSibling;
    while (SSAjax.IsValid(n) && (n.nodeType != Node.ELEMENT_NODE))
    {
        n = n.previousSibling;
    }
    return n;
}

SSAjax.XML.GetNextSiblingElement = function(domNode)
{
    var n = domNode.nextSibling;
    while (SSAjax.IsValid(n) && (n.nodeType != 1/*Node.ELEMENT_NODE*/))
        n = n.nextSibling;
    return n;
}

SSAjax.XML.GetNextOrPreviousOrParentElement = function(domNode)
{
    var next = SSAjax.XML.GetNextSiblingElement(domNode);
    if (SSAjax.IsValid(next))
        return next;

    var previous = SSAjax.XML.GetPreviousSiblingElement(domNode);
    if (SSAjax.IsValid(previous))
        return previous;
        
    return domNode.parentNode;
}

//***************************************************************************
//***************************************************************************
//***************************** STRING METHODS ******************************
//***************************************************************************
//***************************************************************************

String.prototype.StripCharacters = function(badchars)
{
    // build up regular expression [\a\b\c\d\e] (assuming str = "abcde")
    var test = new Array();
    test.push('[');
    for (var i = 0 ; i < badchars.length ; i++)
    {
        test.push('\\');
        test.push(badchars.charAt(i));
    }
    test.push(']');
    return this.replace(new RegExp(test.join(''), 'gi'), '');
}

String.prototype.FindOneOf = function(str)
{
    for (var i = 0 ; i < str.length ; i++)
    {
        var pos = this.indexOf(str.charAt(i));
        if (pos > -1)
            return pos;
    }
    return -1;
}

String.CompareNoCase = function(str1, str2)
{
    return (SSAjax.IsString(str1) && SSAjax.IsString(str2) && (str1.toLowerCase() == str2.toLowerCase()));
}

String.Trim = function(str)
{ 
    return str.replace(/^\s*/, '').replace(/\s*$/, ''); 
} 

//***************************************************************************
//***************************************************************************
//***************************** ARRAY METHODS *******************************
//***************************************************************************
//***************************************************************************

Array.prototype.RemoveAt = function(index)
{
    return this.slice(0, index).concat(this.slice(index+1));
} 

//***************************************************************************
//***************************************************************************
//***************************** UTILITY METHODS *****************************
//***************************************************************************
//***************************************************************************

SSAjax.Escape = function(sXml)
{
    if (sXml)
    {
        return sXml.replace(/&/g, "&amp;")
                   .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;");
    }
    else
    {
        return "";
    }
}

SSAjax.Unescape = function(sXml)
{
    if (sXml)
    {
        return sXml.replace(/&apos;/g,"'")
                    .replace(/&quot;/g,"\"")
                    .replace(/&gt;/g,">")
                    .replace(/&lt;/g,"<")
                    .replace(/&amp;/g,"&");
    }
    else
    {
        return "";
    }
}

//***************************************************************************

SSAjax.Serialize = function(obj)
{
    if (obj)
    {
        if (obj.innerHTML)
        {
            return obj.innerHTML;
        }
        else if (XMLSerializer)
        {
            return (new getXMLSerializer()).serializeToString(obj);
        }
        else if (obj.toString)
        {
            return obj.toString();
        }
    }

    return "";
}

//***************************************************************************

SSAjax.GetUrlHash = function()
{
    var pos = document.location.hash.indexOf('#');
    if (pos >= 0)
        return document.location.hash.substr(pos+1);
    else
        return document.location.hash;
}

SSAjax.SetUrlHash = function(value)
{
    document.location.hash = value;
}

//***************************************************************************
//***************************************************************************
//************************* EASY STARTUP METHODS ****************************
//***************************************************************************
//***************************************************************************

SSAjax.Startup = function(features, init, uninit, userLanguageId)
{
    SSAjax.userLanguageId = SSAjax.ToString(userLanguageId, 'en');

    if (!SSAjax.IsValid(SSAjax.Startup.features))
    {
        SSAjax.Startup.features = (SSAjax.IsValid(features) ? features : SSAjax.Features.NONE);
        SSAjax.Startup.init = new Array(init);
        SSAjax.Startup.uninit = new Array(uninit);
    }
    else
    {
        SSAjax.Startup.features = SSAjax.Startup.features | (SSAjax.IsValid(features) ? features : SSAjax.Features.NONE);
        SSAjax.Startup.init.push(init);
        SSAjax.Startup.uninit.push(uninit);
    }
        
    if (window.addEventListener)
    {
        window.addEventListener('load', SSAjax.Initialize, false);
        window.addEventListener('unload', SSAjax.Uninitialize, false);
    }
    else if (window.attachEvent)
    {
        window.attachEvent('onload', SSAjax.Initialize);
        window.attachEvent('onunload', SSAjax.Uninitialize);
    }
    else
    {
        window['onload'] = SSAjax.Initialize;
        window['onunload'] = SSAjax.Uninitialize;
    }
}

SSAjax.Initialize = function()
{
    if (SSAjax.IsValid(SSAjax.Startup.features) && (SSAjax.Startup.features != SSAjax.Features.NONE))
    {
        SSAjax.LoadFeatures(SSAjax.Startup.features, SSAjax.Initialize2);
    }
    else
    {
        SSAjax.Initialize2();
    }
}
SSAjax.Initialize2 = function()
{    
    for (var i = 0 ; i < SSAjax.Startup.init.length ; i++)
        if (SSAjax.IsValid(SSAjax.Startup.init[i]))
            SSAjax.Startup.init[i]();
}

SSAjax.Uninitialize = function()
{
    for (var i = 0 ; i < SSAjax.Startup.uninit.length ; i++)
        if (SSAjax.IsValid(SSAjax.Startup.uninit[i]))
            SSAjax.Startup.uninit[i]();
}

//***************************************************************************
//***************************************************************************
//******************** DYNAMIC FEATURE LOADING METHODS **********************
//***************************************************************************
//***************************************************************************

SSAjax.Features = {
    NONE: 0,
    DOMDRAG: 1,
    HTTP: 1,
    IDC: 2,
    DHTML: 4,
    DHTML_PROGRESSBAR: 8,
    DHTML_MESSAGEBOX: 16,
    DHTML_COMBOBOX: 32,
    DHTML_TREECTRL: 64,
    DHTML_TABCTRL: 128,
    DHTML_MENU: 256,
    DHTML_CONSOLE: 512,

    ALL: 1+2+4+8+16+32+64+128+256+512
};

SSAjax.IsFeatureSet = function(features, feature) { return ((features & feature) == feature); }
SSAjax.IsFeatureOn = function(feature)
{
    switch(feature)
    {
        case SSAjax.Features.NONE:              return true;
        case SSAjax.Features.DOMDRAG:           return (typeof Drag != _U) && SSAjax.IsValid(Drag);
        case SSAjax.Features.HTTP:              return SSAjax.IsValid(SSAjax.Http);
        case SSAjax.Features.IDC:               return SSAjax.IsValid(SSAjax.Idc);
        case SSAjax.Features.DHTML:             return SSAjax.IsValid(SSAjax.DHTML);
        case SSAjax.Features.DHTML_PROGRESSBAR: return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.ProgressBar);
        case SSAjax.Features.DHTML_MESSAGEBOX:  return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.MessageBox);
        case SSAjax.Features.DHTML_COMBOBOX:    return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.ComboBox);
        case SSAjax.Features.DHTML_TREECTRL:    return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.TreeCtrl);
        case SSAjax.Features.DHTML_TABCTRL:     return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.TabCtrl);
        case SSAjax.Features.DHTML_MENU:        return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.Menu);
        case SSAjax.Features.DHTML_CONSOLE:     return SSAjax.IsValid(SSAjax.DHTML) && SSAjax.IsValid(SSAjax.DHTML.Console);
    }
    
    return false;
}
SSAjax.IsFeatureSetButNotOn = function(features, feature) { return SSAjax.IsFeatureSet(features, feature) && !SSAjax.IsFeatureOn(feature); }


SSAjax.LoadFeatures = function(features, callback)
{
    if (SSAjax.IsFeatureSet(features, SSAjax.Features.IDC))
    {
        features = (features | SSAjax.Features.HTTP);
    }
    
    if (SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_PROGRESSBAR) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_MESSAGEBOX) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_COMBOBOX) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_TREECTRL) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_TABCTRL) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_MENU) ||
        SSAjax.IsFeatureSet(features, SSAjax.Features.DHTML_CONSOLE))
    {
        features = (features | SSAjax.Features.DHTML);
    }
    
    SSAjax.path = SSAjax.GetPathToScript('ssajax.js');
    
    var scripts = new Array();
    
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.HTTP)) scripts.push(SSAjax.path + 'ssajax.http.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.IDC)) scripts.push(SSAjax.path + 'ssajax.idc.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML)) scripts.push(SSAjax.path + 'ssajax.dhtml.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_PROGRESSBAR)) scripts.push(SSAjax.path + 'ssajax.dhtml.progressbar.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_MESSAGEBOX)) scripts.push(SSAjax.path + 'ssajax.dhtml.messagebox.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_COMBOBOX)) scripts.push(SSAjax.path + 'ssajax.dhtml.combobox.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_TREECTRL)) scripts.push(SSAjax.path + 'ssajax.dhtml.treectrl.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_TABCTRL)) scripts.push(SSAjax.path + 'ssajax.dhtml.tabctrl.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_MENU)) scripts.push(SSAjax.path + 'ssajax.dhtml.menu.js');
    if (SSAjax.IsFeatureSetButNotOn(features, SSAjax.Features.DHTML_CONSOLE)) scripts.push(SSAjax.path + 'ssajax.dhtml.console.js');

    if (SSAjax.IsNotValid(SSAjax.Strings.language))
    {
        scripts.push(SSAjax.path + 'lang/en/ssajax.strings.js');
        scripts.push(SSAjax.path + 'lang/' + SSAjax.userLanguageId + '/ssajax.strings.js');
    }

    if (scripts.length > 0)
        SSAjax.LoadMultipleScripts(scripts, callback);
    else
        callback();
}

//***************************************************************************
//***************************************************************************
//********************* DYNAMIC SCRIPT LOADING METHODS **********************
//***************************************************************************
//***************************************************************************

SSAjax.LoadMultipleScripts = function(arrSrc, callback, n)
{
    n = (SSAjax.IsValid(n) ? n : 0);

    if (n < arrSrc.length)
        SSAjax.LoadScript(arrSrc[n], function() { SSAjax.LoadMultipleScripts(arrSrc, callback, n+1); });
    else
        callback();
}

//***************************************************************************

SSAjax.LoadScript = function(src, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    head.appendChild(s);

    if (SSAjax.IS_IE)
    {
        s.onreadystatechange = SSAjax.LoadScriptCompleteIE;
    }
    else
    {
        s.onload = SSAjax.LoadScriptCompleteW3C;
        s.onerror = SSAjax.LoadScriptCompleteW3C;
    }

    SSAjax.LoadScript.callback = callback;
    
    s.type = 'text/javascript';
    s.src = src;
}

SSAjax.LoadScriptCompleteIE = function(e)
{
    var s = window.event.srcElement;
    if (s.readyState != 'loaded')
        return;

    SSAjax.LoadScript.callback(s);
}

SSAjax.LoadScriptCompleteW3C = function(e)
{
    var s = e.currentTarget;
    SSAjax.LoadScript.callback(s);
}

//***************************************************************************
//***************************************************************************
//******************************** DEBUGGING ********************************
//***************************************************************************
//***************************************************************************

SSAjax.WriteBrowserInfo = function()
{
    var arr = new Array();
    var n = 0;
    
    if (SSAjax.IS_IE) arr[n++] = "IE";
    if (SSAjax.IS_MOZILLA) arr[n++] = "Mozilla";
    if (SSAjax.IS_OPERA) arr[n++] = "Opera";
    if (SSAjax.IS_SAFARI) arr[n++] = "Safari";
    if (SSAjax.IS_FIREFOX) arr[n++] = "Firefox";
    if (SSAjax.IS_NETSCAPE) arr[n++] = "Netscape";
    
    if (SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL1) arr[n++] = "HAS_DOM_IMPLEMENTATION_LEVEL1";
    if (SSAjax.HAS_DOM_IMPLEMENTATION_LEVEL2) arr[n++] = "HAS_DOM_IMPLEMENTATION_LEVEL2";
    if (SSAjax.HAS_DOM_XPATH_LEVEL3) arr[n++] = "HAS_DOM_XPATH_LEVEL3";
    
    document.write("Browser is");
    if (n > 0)
    {
        for (x = 0 ; x < n ; x++)
        {
            if (x == 0)
                document.write(" ");
            else
                document.write(", ");
            document.write(arr[x]);
        }
    }
    else
    {
        document.write(" Unknown");
    }
    document.write(" (UserAgent = " + navigator.userAgent + ")");
}

//***************************************************************************

SSAjax.GetPathToScript = function(name)
{
    var scripts = document.getElementsByTagName('script');
    for (var i = 0 ; i < scripts.length ; i++)
    {
        var pos = scripts[i].src.indexOf(name);
        if (pos >= 0)
            return scripts[i].src.substr(0, pos);
    }
    
    return null;
}


//***************************************************************************

SSAjax.GetString = function(key)
{
	var argValues = SSAjax.GetString.arguments;
	var argCount = argValues.length;
	var value = SSAjax.Strings[key];
	if (value == null)
		return key;

	for (var i=1; i<argCount; i++)
	{
		var regexp = eval("/{" + i + "[.!}]*}/g");
		value = value.replace(regexp, argValues[i]);
		regexp = eval("/{" + i + "q[.!}]*}/g");
		value = value.replace(regexp, "\'" + argValues[i] + "\'");
	}
	return value;
}
