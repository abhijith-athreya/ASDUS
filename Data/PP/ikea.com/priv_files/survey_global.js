//Ver. 2010-11-11_01
//Returns true if the page is an exception that should NOT have an invitation



function surveyExceptionUrl(surveyHref, exceptionUrl) {
    return surveyHref.indexOf(exceptionUrl, 0) > -1;
}

//Returns true if found the site    
function surveyIsSite(surveyPathArray, sites, iter) {
    var surveyParentFolder,  surveyLanguageCountry, surveyCountry, surveyLanguage;
    surveyParentFolder = sites[iter + 6];
    surveyLanguageCountry = sites[iter + 7];
    surveyCountry  = sites[iter + 8];
    surveyLanguage = sites[iter + 9];
    
    // Example ms en_SE
    if (surveyPathArray[1] === surveyParentFolder && surveyPathArray[2] === surveyLanguageCountry) {
        return true;
    }
    
    // Example se sv
    if (surveyPathArray[1] === surveyCountry && surveyPathArray[2] === surveyLanguage) {
        return true;
    }
        
    // Example se
    if (surveyPathArray[1] === surveyCountry && (surveyPathArray[2] === undefined || surveyPathArray[2] === "")) {
        return true;
    }
                
    return false;
}

//Session cookie management
var surveySessionCookieName = "surveySessionCookie";
var surveySessionCookieValue = "survey-session";

function surveyCreateCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function surveyGetCookie(name) {
    var cookie_start = document.cookie.indexOf(name + "=");
    if (cookie_start == -1) return null;
    var cookie_end = document.cookie.indexOf("; ", cookie_start);
    if (cookie_end == -1) cookie_end = document.cookie.length;
    return unescape(document.cookie.substring(cookie_start + name.length + 1, cookie_end));
}

function surveySetSessionCookie(cookiename, value) {
    var days = 1;
    //surveyCreateCookie(cookiename, value, days);
    document.cookie = escape(cookiename) + "=" + escape(value) + "; path=/";
}

//Returns true if no session cookie found
function surveyNewSession()
{
    var sessionCookie, returnValue;
    sessionCookie = surveyGetCookie(surveySessionCookieName);
    returnValue = (sessionCookie !== surveySessionCookieValue) ;
    return returnValue;
}
function surveyAcceptsCookies() {
    var name, value, days, returnValue, surveyCheckCookie;
    name = "surveyCheckAcceptsCookies";
    value = "1";
    days = 1;
    surveyCreateCookie(name,value,days);
    
    surveyCheckCookie = surveyGetCookie(name);
    
    returnValue =  (surveyCheckCookie === value);
    erase_cookie(name);
    
    return returnValue;
    
}

/*
 * GfK NOP DHTML on-exit (c) 2007 GfK NOP Ltd
 */

// *****  Use this var to enable/disable this script *****
var active = true;

// Change path to heartbeat file
var HeartBeatPath = "heartbeat.htm";

var exceptionUrl = "preindex.html";
var surveyHref = document.location.href;


if (active && surveyAcceptsCookies() && surveyNewSession() && !surveyExceptionUrl(surveyHref, exceptionUrl)) {

    surveySetSessionCookie(surveySessionCookieName, surveySessionCookieValue);
    
    // The incidence rate... 100 = everyone, -1 = no one
    var INCIDENCE = -1;

    // --
    var theDate = new Date();
    var month;
    month = theDate.getMonth();
    month = month + 3;
    theDate.setMonth(month); // this is all for the cookie expiry
    var colorscheme = "#3399fd;text-decoration:none;"; // for border and link colour
    var d = document.createElement("div"); // create the invitation layer
    var winHeight = (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
    if (self.innerHeight) { // for Safari (or all but Explorer)
        winHeight = self.innerHeight;
    }

    // now style it
    d.style.borderStyle = "solid";
    d.style.borderWidth = "2px";
    d.style.borderColor = "#333333";
    d.style.width = "500px";
    //d.style.height="220px";
    d.style.fontFamily = "verdana,sans-serif";
    d.style.fontSize = "12px";
    d.style.textAlign = "center";
    d.style.zIndex = "100";
    d.style.padding = "10px";
    d.style.position = "absolute";
    d.style.left = ((document.body.clientWidth / 2) - 250) + "px";
    d.style.top = ((winHeight / 2) - 110) + "px";
    d.style.backgroundColor = "#ffffff";


    // Set valid sites. Used to identify if page is a survey page
    // D delayed, I Immidiate
    // Stop survey with incidence = -1 
    var Sites = [

"www.ikea.com/ma/en", "ma", "en,fr,ar", "D", -1 , "TS", "ms", "en_MA", "ma", "en",
"www.ikea.com/ma/fr", "ma", "fr,en,ar", "D", -1 , "TS", "ms", "fr_MA", "ma", "fr",
"www.ikea.com/ma/ar", "ma", "ar,fr,en", "D", -1 , "TS", "ms", "ar_MA", "ma", "ar",
"www.ikea.com/kr/en", "kr", "en", "D", -1, "TS", "ms", "en_KR", "kr", "en",
"www.ikea.com/kr/ko", "kr", "ko", "D", -1, "TS", "ms", "ko_KR", "kr", "ko",
"www.ikea.com/bg/bg", "bg", "bg", "D", -1, "TS", "ms", "bg_BG", "bg", "bg",
"www.ikea.com/id/en", "id", "en", "D", -1, "TS", "ms", "en_ID", "id", "en",
"www.ikea.com/id/in", "id", "in", "D", -1, "TS", "ms", "in_ID", "id", "in",
"www.ikea.com/hr/hr", "hr", "hr", "D", -1, "TS", "ms", "hr_HR", "hr", "hr",
"www.ikea.com/au/en", "aue", "en", "D", -1 , "TS", "ms", "en_AU", "au", "en",
"www.ikea.com/aa/en", "auw", "en", "D", -1 , "TS", "ms", "en_AA", "aa", "en",
"www.ikea.com/at/de", "at", "de-at,sl,it", "D", -1 , "TS", "ms", "de_AT", "at", "de",
"www.ikea.com/be/nl", "be", "nl-be,fr", "D", -1 , "TS", "ms", "nl_BE", "be", "nl",
"www.ikea.com/be/fr", "be", "fr,nl-be", "D", -1 , "TS", "ms", "fr_BE", "be", "fr",
"www.ikea.com/ca/en", "ca", "en,fr-ca", "D", -1 , "TS", "ms", "en_CA", "ca", "en",
"www.ikea.com/ca/fr", "ca", "fr-ca,en", "D", -1 , "TS", "ms", "fr_CA", "ca", "fr",
"www.ikea.com/cn/en", "cn", "zh-cn,en", "D", -1 , "TS", "ms", "en_CN", "cn", "en",
"www.ikea.com/cn/zh", "cn", "zh-cn,en", "D", -1 , "TS", "ms", "zh_CN", "cn", "zh",
"www.ikea.com.cy", "cy", "el,en", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/cz/cs", "cz", "cs,en", "D", -1 , "TS", "ms", "cs_CZ", "cz", "cs",
"www.ikea.com/dk/da", "dk", "da,en", "D", -1 , "TS", "ms", "da_DK", "dk", "da",
"www.ikea.com.do", "do", "es", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/fi/fi", "fi", "fi,se", "D", -1 , "TS", "ms", "fi_FI", "fi", "fi",
"www.ikea.com/fr/fr", "fr", "fr", "D", -1 , "TS", "ms", "fr_FR", "fr", "fr",
"www.ikea.com/de/de", "de", "de,tr,ru", "D", -1, "TS", "ms", "de_DE", "de", "de",
"www.cte.ikeadt.com/de/de", "de", "de,tr,ru", "D", 100 , "TS", "ms", "de_DE", "de", "de",
"www.ppe.ikeadt.com/de/de", "de", "de,tr,ru", "D", 100 , "TS", "ms", "de_DE", "de", "de",
"www.ikea.gr", "gr", "el", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/hk/zh", "hk", "zh-hk,en", "D", -1 , "TS", "ms", "zh_HK", "hk", "zh",
"www.ikea.com/hk/en", "hk", "en,zh-hk", "D", -1 , "TS", "ms", "en_HK", "hk", "en",
"www.ikea.com/hu/hu", "hu", "hu,en", "D", -1 , "TS", "ms", "hu_HU", "hu", "hu",
"www.ikea.is", "is", "is,en", "D", -1, "-", " ", "-", " ", " ",
"www.ikea.com/ie/en", "ie", "en", "D", -1 , "TS", "ms", "en_IE", "ie", "en",
"www.ikea.co.il", "il", "he,en,ar", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/it/it", "it", "it,en,sl", "D", -1 , "TS", "ms", "it_IT", "it", "it",
"www.ikea.com/jp/en", "jp", "en,ja", "D", -1, "TS", "ms", "en_JP", "jp", "en",
"www.ikea.com/jp/ja", "jp", "ja,en", "D", -1, "TS", "ms", "ja_JP", "jp", "ja",
"www.ikea.com.kw", "kw", "en,ar", "D", -1 , "TS", "ms", "en_KW", "kw", "en",
"www.ikea.com/my/en", "my", "en,my", "D", -1, "TS", "ms", "en_MY", "my", "en",
"www.ikea.com/my/ms", "my", "my,en", "D", -1 , "TS", "ms", "ms_MY", "my", "ms",
"www.ikea.com/nl/nl", "nl", "nl,de", "D", -1 , "TS", "ms", "nl_NL", "nl", "nl",
"www.ikea.com/no/no", "no", "no", "D", -1 , "TS", "ms", "no_NO", "no", "no",
"www.ikea.com/pl/pl", "pl", "pl", "D", -1, "TS", "ms", "pl_PL", "pl", "pl",
"www.ikea.com/pt/pt", "pt", "pt", "D", -1 , "TS", "ms", "pt_PT", "pt", "pt",
"www.ikea.com/ro/ro", "ro", "ro", "D", -1, "TS", "ms", "ro_RO", "ro", "ro",
"www.ikea.com/ru/ru", "ru", "ru,en", "D", -1, "TS", "ms", "ru_RU", "ru", "ru",
"ar.ikea.com/sa/ar", "sa", "ar,en", "D", -1 , "TS", "ms", "ar_SA", "sa", "ar",
"www.ikea.com/sa/en", "sa", "en,ar", "D", -1 , "TS", "ms", "en_SA", "sa", "en",
"www.ikea.com/sg/en", "sg", "en,zh-cn,my", "D", -1 , "TS", "ms", "en_SG", "sg", "en",
"www.ikea.com/sk/sk", "sk", "sk,en", "D", -1 , "TS", "ms", "sk_SK", "sk", "sk",
"www.ikea.com/es/es", "es", "es,en", "D", -1 , "TS", "ms", "es_ES", "es", "es",
"islas.ikea.es/IKEA-islas.php", "esi", "es", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/se/sv", "se", "se,fi,en", "D", -1 , "TS", "ms", "sv_SE", "se", "sv",
"www.cte.ikeadt.com/se/sv", "se", "se,fi,en", "D", 100 , "TS", "ms", "sv_SE", "se", "sv",
"www.ppe.ikeadt.com/se/sv", "se", "se,fi,en", "D", 100 , "TS", "ms", "sv_SE", "se", "sv",
"www.ikea.com/ch/de", "ch", "de,fr,it", "D", -1 , "TS", "ms", "de_CH", "ch", "de",
"www.ikea.com/ch/fr", "ch", "fr,de,it", "D", -1 , "TS", "ms", "fr_CH", "ch", "fr",
"www.ikea.com/ch/it", "ch", "it,fr,de", "D", -1, "TS", "ms", "it_CH", "ch", "it",
"www.ikea.com/tw/zh", "tw", "zh-tw,en", "D", -1 , "TS", "ms", "zh_TW", "tw", "zh",
"www.ikea.com.tr", "tr", "tr", "D", -1 , "-", " ", "-", " ", " ",
"www.ikea.com/ae/en", "ae", "en,ar", "D", 1-1 , "TS", "ms", "en_AE", "ae", "en",
"www.ikea.com/gb/en", "uk", "en", "D", -1 , "TS", "ms", "en_GB", "gb", "en",
"www.cte.ikeadt.com/gb/en", "uk", "en", "D", 100 , "TS", "ms", "en_GB", "gb", "en",
"www.ppe.ikeadt.com/gb/en", "uk", "en", "D", 100 , "TS", "ms", "en_GB", "gb", "en",
"www.ikea.com/us/en", "us", "en,es-us", "D", -1 , "TS", "ms", "en_US", "us", "en",
"www.ikea.com/th/en", "th", "en,th", "D", -1 , "TS", "ms", "en_TH", "th", "en",
"www.ikea.com/th/th", "th", "th,en", "D", -1 , "TS", "ms", "th_TH", "th", "th",
"www.ikea.com/se/en", "se", "se,fi,en", "D", -1, "TS", "ms", "en_SE", "se", "en",
"www.ikea.com/qa/en", "qa", "en,ar", "D", -1 , "TS", "ms", "en_QA", "qa", "en",
"www.ikea.com/lt/lt", "lt", "lt,en,ru", "D", -1 , "TS", "ms", "lt_LT", "lt", "lt",
"www.ikea.com/jo/en", "jo", "en,ar", "D", -1 , "TS", "ms", "en_JO", "jo", "en",
"www.ikea.com/eg/en", "eg", "en,ar", "D", -1 , "TS", "ms", "en_EG", "eg", "en",
"www.ikea.com/rs/sr", "rs", "sr", "D", -1, "TS", "ms", "sr_RS", "rs", "sr",
"ar.ikea.com/ae/ar", "ae", "ar,en", "D", -1 , "TS", "ms", "ar_AE", "ae", "ar", 
"ar.ikea.com/eg/ar", "eg", "ar,en", "D", -1 , "TS", "ms", "ar_EG", "eg", "ar",
"ar.ikea.com/kw/ar", "kw", "ar,en", "D", -1 , "TS", "ms", "ar_KW", "kw", "ar",
"ar.ikea.com/qa/ar", "qa", "ar,en", "D", -1 , "TS", "ms", "ar_QA", "qa", "ar",
"ar.ikea.com/jo/ar", "jo", "ar,en", "D", -1 , "TS", "ms", "ar_JO", "jo", "ar",
"preview.ikea.com/lt/lt", "lt", "lt,en,ru", "D", -1 , "TS", "ms", "lt_LT", "lt", "lt",
"preview.ikea.com/sa/en", "sa", "en,ar", "D", -1, "TS", "ms", "en_SA", "sa", "en",
"preview.ikea.com/kw", "kw", "ar,en", "D", -1, "TS", "ms", "en_KW", "kw", "en",
"ptirw120.ikeadt.com/kr/en", "kr", "en", "D", -1, "TS", "ms", "en_KR", "kr", "en",
"ptirw120.ikeadt.com/kr/ko", "kr", "ko", "D", -1, "TS", "ms", "ko_KR", "kr", "ko",
"ptirw120.ikeadt.com/id/en", "id", "en", "D", -1, "TS", "ms", "en_ID", "id", "en",
"ptirw120.ikeadt.com/id/in", "id", "in", "D", -1, "TS", "ms", "in_ID", "id", "in",
"www.cte.ikeadt.com/kr/en", "kr", "en", "D", -1, "TS", "ms", "en_KR", "kr", "en",
"www.cte.ikeadt.com/kr/ko", "kr", "ko", "D", -1, "TS", "ms", "ko_KR", "kr", "ko",
"www.cte.ikeadt.com/id/en", "id", "en", "D", -1, "TS", "ms", "en_ID", "id", "en",
"www.cte.ikeadt.com/id/in", "id", "in", "D", -1, "TS", "ms", "in_ID", "id", "in",
"ppe.ikeadt.com/kr/en", "kr", "en", "D", -1, "TS", "ms", "en_KR", "kr", "en",
"ppe.ikeadt.com/kr/ko", "kr", "ko", "D", -1, "TS", "ms", "ko_KR", "kr", "ko",
"ppe.ikeadt.com/id/en", "id", "en", "D", -1, "TS", "ms", "en_ID", "id", "en",
"ppe.ikeadt.com/id/in", "id", "in", "D", -1, "TS", "ms", "in_ID", "id", "in"
];

	//updated to use short URL going forward - 15/04/2013	
        var immediateStartURL = "https://www.surveys.com/IH2H";

        var inviteLanguages = "";
        var inviteLanguageSelected;
        var inviteCountry = "";
        var inviteIncidence = -1;
        var inviteSite = "";
        var inviteType = "";
        var inviteLine1 = [];
        var inviteLine2 = [];
        var inviteLine3 = [];
        var inviteYes = [];
        var inviteNo = [];
        var inviteSurveyLink = "";
        var inviteSurveyOnClick = "";
        var inviteTextDirection = "ltr";
        var surveyTsWeb;
        var surveyParentFolder = "";
        var surveyHeartbeatFolder = "";
        var surveyCountry = "";
        var surveyLanguage= "";
 

 
        surveyHref = surveyHref.replace("http://","");
        surveyHref = surveyHref.replace("#","/");
        var surveyPathArray = surveyHref.split( '/' );
 
        var iter;

        for (iter = 0; iter < Sites.length; iter += 10) {
            
            surveyTsWeb = Sites[iter + 5];
            
            if (surveyTsWeb === "TS")  {
                
                if (surveyIsSite(surveyPathArray, Sites, iter)) {
                    inviteSite = Sites[iter];
                    inviteCountry = Sites[iter + 1];
                    inviteLanguages = Sites[iter + 2];
                    inviteType = Sites[iter + 3];
                    inviteIncidence = Sites[iter + 4];  
                    surveyHeartbeatFolder = Sites[iter + 7];
                    break;
                }
            }
        }
        
	
	// 15/04/2013 - croatia
        inviteLine1["hr"] = "&#381;elimo biti bolji. Pomozi nam!";
	inviteLine2["hr"] = "&#381;eli&#353; li sudjelovati u na&#353;oj anketi? Za ispunjavanje ankete potrebno je oko 10 minuta."; 
	inviteLine3["hr"] = "Pristane&#353; li na sudjelovanje, anketa &#263;e zapo&#269;eti kada napusti&#353; internetske stranice IKEA.com";
	inviteYes["hr"] = "Sudjeluj";
	inviteNo["hr"] = "Ne, hvala";
        
        
	// 15/04/2013 - serbia
	inviteLine1["sr-rs"] = "Pomozite nam da budemo jo&#353; bolji!";
	inviteLine2["sr-rs"] = "Da li &#382;elite da u&#269;estvujete u na&#353;oj anketi? Za ispunjavanje ankete bi&#263;e potrebno oko 10 minuta."; 
	inviteLine3["sr-rs"] = "Ukoliko pristanete da u&#269;estvujete, anketa &#263;e se pokrenuti kad zavr&#353;ite posetu sajtu IKEA.com. ";
	inviteYes["sr-rs" ] = "&#381;elim da u&#269;estvujem";
	inviteNo["sr-rs"] = "Ne, hvala";
	        
        
        //language invite text - amended sept 2012
	//21092012
        inviteLine1["th"] = "&#3594;&#3656;&#3623;&#3618;&#3648;&#3619;&#3634;&#3611;&#3619;&#3633;&#3610;&#3611;&#3619;&#3640;&#3591;!";
	inviteLine2["th"] = "&#3588;&#3640;&#3603;&#3605;&#3657;&#3629;&#3591;&#3585;&#3634;&#3619;&#3619;&#3656;&#3623;&#3617;&#3605;&#3629;&#3610;&#3649;&#3610;&#3610;&#3626;&#3635;&#3619;&#3623;&#3592;&#3627;&#3619;&#3639;&#3629;&#3652;&#3617;&#3656; &#3649;&#3610;&#3610;&#3626;&#3635;&#3619;&#3623;&#3592;&#3609;&#3637;&#3657;&#3592;&#3632;&#3651;&#3594;&#3657;&#3648;&#3623;&#3621;&#3634;&#3611;&#3619;&#3632;&#3617;&#3634;&#3603; 10 &#3609;&#3634;&#3607;&#3637;"
	inviteLine3["th"] = "&#3606;&#3657;&#3634;&#3605;&#3585;&#3621;&#3591;&#3648;&#3586;&#3657;&#3634;&#3619;&#3656;&#3623;&#3617;&#3607;&#3635; &#3592;&#3632;&#3648;&#3619;&#3636;&#3656;&#3617;&#3649;&#3610;&#3610;&#3626;&#3635;&#3619;&#3623;&#3592;&#3648;&#3617;&#3639;&#3656;&#3629;&#3588;&#3640;&#3603;&#3648;&#3626;&#3619;&#3655;&#3592;&#3626;&#3636;&#3657;&#3609;&#3585;&#3634;&#3619;&#3648;&#3586;&#3657;&#3634;&#3594;&#3617; IKEA.co.th &#3623;&#3633;&#3609;&#3609;&#3637;&#3657;";
	inviteYes["th" ] = "&#3648;&#3586;&#3657;&#3634;&#3619;&#3656;&#3623;&#3617;";
	inviteNo["th"] = "&#3652;&#3617;&#3656;&#3621;&#3656;&#3632; &#3586;&#3629;&#3610;&#3651;&#3592;";
        
        //21092012
   	inviteLine1["bg"] = "&#1055;&#1086;&#1084;&#1086;&#1075;&#1085;&#1077;&#1090;&#1077; &#1085;&#1080; &#1076;&#1072; &#1089;&#1090;&#1072;&#1085;&#1077;&#1084; &#1087;&#1086;-&#1076;&#1086;&#1073;&#1088;&#1080;!";
    	inviteLine2["bg"] = "&#1041;&#1080;&#1093;&#1090;&#1077; &#1083;&#1080; &#1078;&#1077;&#1083;&#1072;&#1083;&#1080; &#1076;&#1072; &#1091;&#1095;&#1072;&#1089;&#1090;&#1074;&#1072;&#1090;&#1077; &#1074; &#1085;&#1072;&#1096;&#1077;&#1090;&#1086; &#1087;&#1088;&#1086;&#1091;&#1095;&#1074;&#1072;&#1085;&#1077;? &#1055;&#1088;&#1086;&#1091;&#1095;&#1074;&#1072;&#1085;&#1077;&#1090;&#1086; &#1097;&#1077; &#1042;&#1080; &#1086;&#1090;&#1085;&#1077;&#1084;&#1077; &#1086;&#1082;&#1086;&#1083;&#1086; 10 &#1084;&#1080;&#1085;&#1091;&#1090;&#1080;, &#1079;&#1072; &#1076;&#1072; &#1075;&#1086; &#1087;&#1086;&#1087;&#1098;&#1083;&#1085;&#1080;&#1090;&#1077;.";
    	inviteLine3["bg"] = "&#1040;&#1082;&#1086; &#1089;&#1090;&#1077; &#1089;&#1098;&#1075;&#1083;&#1072;&#1089;&#1085;&#1080; &#1076;&#1072; &#1091;&#1095;&#1072;&#1089;&#1090;&#1074;&#1072;&#1090;&#1077;, &#1087;&#1088;&#1086;&#1091;&#1095;&#1074;&#1072;&#1085;&#1077;&#1090;&#1086; &#1097;&#1077; &#1079;&#1072;&#1087;&#1086;&#1095;&#1085;&#1077;, &#1082;&#1086;&#1075;&#1072;&#1090;&#1086; &#1079;&#1072;&#1074;&#1098;&#1088;&#1096;&#1080;&#1090;&#1077; &#1076;&#1085;&#1077;&#1096;&#1085;&#1086;&#1090;&#1086; &#1089;&#1080; &#1087;&#1086;&#1089;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077; &#1085;&#1072; IKEA.com";
    	inviteYes["bg" ] = "&#1042;&#1079;&#1080;&#1084;&#1072;&#1084; &#1091;&#1095;&#1072;&#1089;&#1090;&#1080;&#1077;";
    	inviteNo["bg"] = "&#1053;&#1077;, &#1073;&#1083;&#1072;&#1075;&#1086;&#1076;&#1072;&#1088;&#1103;";

        //21092012
        inviteLine1["en"] = "Help us to improve!";
        inviteLine2["en"] = "Would you like to participate in our survey? The survey will take approximately 10 minutes to complete.";
        inviteLine3["en"] = "If you agree to take part the survey will start when you finish your visit to IKEA.com today";
        inviteYes["en" ] = "Take Part";
        inviteNo["en"] = "No thanks";

	//21092012  
      	inviteLine1["fr"] = "Aidez-nous &#224; nous am&#233;liorer !";
      	inviteLine2["fr"] = "Souhaiteriez-vous participer &#224; notre enqu&#234;te ? Elle vous prendra environ 10 minutes.";
      	inviteLine3["fr"] = "Si vous acceptez de participer, l'enqu&#234;te ne commencera qu'&#224; la fin de votre visite sur IKEA.com";
      	inviteYes["fr"] = "Participer";
      	inviteNo["fr"] = "Non, merci";
    	 	
 	
 	//21092012 alternative french for belgium site	
	if (inviteCountry == "be"){
	inviteLine1["fr"] = "Aidez-nous &#224; nous am&#233;liorer !";
	inviteLine2["fr"] = "Souhaiteriez-vous participer &#224; notre enqu&#234;te ? Elle vous prendra environ 10 minutes.";
	inviteLine3["fr"] = "Si vous acceptez de prendre part, l'enqu&#234;te commencera aujourd'hui &#224; la fin de votre visite sur IKEA.com";
	inviteYes["fr"] = "Prendre part";
	inviteNo["fr"] = "Non, merci";
 	}
 	
        //21092012
        inviteLine1["da"] = "Hj&#230;lp os med at blive bedre!";
	inviteLine2["da"] = "Har du lyst til at deltage i vores unders&#248;gelse? Unders&#248;gelsen tager ca. 10 minutter.";
	inviteLine3["da"] = "Hvis du vil v&#230;re med, starter unders&#248;gelsen, n&#229;r du afslutter dit bes&#248;g hos IKEA.com i dag";
	inviteYes["da"] = "Deltag";
	inviteNo["da"] = "Nej tak";
        
        //21092012
        inviteLine1["cs"] = "Pomozte n&#225;m zlep&#353;it se!";
	inviteLine2["cs"] = "&#8222;Cht&#283;l/a byste se z&#250;&#269;astnit na&#353;eho pr&#367;zkumu? Jeho vypln&#283;n&#237; zabere p&#345;ibli&#382;n&#283; 10 minut.&#8220;";
	inviteLine3["cs"] = "&#8222;Pokud se chcete z&#250;&#269;astnit, pr&#367;zkum za&#269;ne, jakmile ukon&#269;&#237;te dne&#353;n&#237; n&#225;v&#353;t&#283;vu internetov&#233; str&#225;nky www.IKEA.cz &#8220;";
	inviteYes["cs"] = "Z&#250;&#269;astn&#237;m se";
	inviteNo["cs"] = "Ne, d&#283;kuji";

        //21092012
        inviteLine1["fi"] = "Kerro mielipiteesi!";
	inviteLine2["fi"] = "Haluaisitko osallistua kyselyymme? Kyselyyn vastaaminen kest&#228;&#228; noin 10 minuuttia.";
	inviteLine3["fi"] = "Jos haluat osallistua, kysely k&#228;ynnistyy, kun poistut IKEA-sivustolta.";
	inviteYes["fi"] = "Haluan osallistua";
	inviteNo["fi"] = "Ei kiitos";
       
        //21092012
        inviteLine1["el"] = "&#914;&#959;&#951;&#952;&#942;&#963;&#964;&#949; &#956;&#945;&#962; &#957;&#945; &#946;&#949;&#955;&#964;&#953;&#969;&#952;&#959;&#973;&#956;&#949;!";
	inviteLine2["el"] = "&#920;&#945; &#952;&#941;&#955;&#945;&#964;&#949; &#957;&#945; &#955;&#940;&#946;&#949;&#964;&#949; &#956;&#941;&#961;&#959;&#962; &#963;&#964;&#951;&#957; &#941;&#961;&#949;&#965;&#957;&#940; &#956;&#945;&#962;; &#913;&#960;&#945;&#953;&#964;&#959;&#973;&#957;&#964;&#945;&#953; &#960;&#949;&#961;&#943;&#960;&#959;&#965; 10 &#955;&#949;&#960;&#964;&#940; &#947;&#953;&#945; &#964;&#951; &#959;&#955;&#959;&#954;&#955;&#942;&#961;&#969;&#963;&#951; &#964;&#951;&#962; &#941;&#961;&#949;&#965;&#957;&#945;&#962;.";
	inviteLine3["el"] = "&#917;&#940;&#957; &#963;&#965;&#956;&#966;&#969;&#957;&#942;&#963;&#949;&#964;&#949; &#957;&#945; &#955;&#940;&#946;&#949;&#964;&#949; &#956;&#941;&#961;&#959;&#962;, &#951; &#941;&#961;&#949;&#965;&#957;&#945; &#952;&#945; &#958;&#949;&#954;&#953;&#957;&#942;&#963;&#949;&#953; &#972;&#964;&#945;&#957; &#964;&#949;&#961;&#956;&#945;&#964;&#943;&#963;&#949;&#964;&#949; &#964;&#951;&#957; &#949;&#960;&#943;&#963;&#954;&#949;&#968;&#942; &#963;&#945;&#962; &#963;&#964;&#959; IKEA.com &#963;&#942;&#956;&#949;&#961;&#945;";
	inviteYes["el"] = "&#920;&#945; &#955;&#940;&#946;&#969; &#956;&#941;&#961;&#959;&#962;";
	inviteNo["el"] = "&#908;&#967;&#953;, &#949;&#965;&#967;&#945;&#961;&#953;&#963;&#964;&#974;";

          
        inviteLine1["he"] = "&#1506;&#1494;&#1493;&#1512; &#1500;&#1504;&#1493; &#1500;&#1492;&#1513;&#1514;&#1508;&#1512;!";
        inviteLine2["he"] = "&#1492;&#1488;&#1501; &#1492;&#1497;&#1497;&#1514; &#1512;&#1493;&#1510;&#1492; &#1500;&#1492;&#1513;&#1514;&#1514;&#1507; &#1489;&#1505;&#1511;&#1512; &#1492;&#1511;&#1510;&#1512; &#1513;&#1500;&#1504;&#1493;?";
        inviteLine3["he"] = "&#1488;&#1501; &#1514;&#1505;&#1499;&#1497;&#1501; &#1500;&#1511;&#1495;&#1514; &#1495;&#1500;&#1511; &#1489;&#1505;&#1511;&#1512;, &#1492;&#1493;&#1488; &#1497;&#1514;&#1495;&#1497;&#1500; &#1499;&#1513;&#1514;&#1505;&#1497;&#1497;&#1501; &#1488;&#1514; &#1492;&#1489;&#1497;&#1511;&#1493;&#1512; &#1513;&#1500;&#1498; &#1489;-IKEA.com &#1492;&#1497;&#1493;&#1501;";
        inviteYes["he"] = "&#1500;&#1511;&#1495;&#1514; &#1495;&#1500;&#1511; &#1489;&#1505;&#1511;&#1512;";
        inviteNo["he"] = "&#1500;&#1488; &#1514;&#1493;&#1491;&#1492;";

       
	//21092012	        
        inviteLine1["hu"] = "Seg&#237;ts benn&#252;nket a fejl&#337;d&#233;sben!";
	inviteLine2["hu"] = "Szeretn&#233;l r&#233;szt venni felm&#233;r&#233;s&#252;nkben? A felm&#233;r&#233;s kit&#246;lt&#233;se k&#246;r&#252;lbel&#252;l 10 percig tart.";
	inviteLine3["hu"] = "Ha beleegyezel a r&#233;szv&#233;telbe, a felm&#233;r&#233;s akkor kezd&#337;dik meg, ha befejezted mai l&#225;togat&#225;sodat az IKEA.com oldalon.";
	inviteYes["hu"] = "R&#233;szt veszek";
	inviteNo["hu"] = "K&#246;sz&#246;n&#246;m, nem";
	
	//21092012	
	inviteLine1["it"] = "Aiutaci a migliorare!";
	inviteLine2["it"] = "Vuoi partecipare al nostro sondaggio? Per completarlo sono sufficienti 10 minuti circa ."; 
	inviteLine3["it"] = "Se accetti di partecipare, il sondaggio verr&#224; lanciato al termine della tua visita di oggi su IKEA.com.";
	inviteYes["it"] = "Partecipa";
	inviteNo["it"] = "No, grazie";
	
	 
	//21092012        
        inviteLine1["no"] = "Hjelp oss &#229; bli bedre!";
	inviteLine2["no"] = "Har du lyst til &#229; delta i v&#229;r unders&#248;kelse? Unders&#248;kelsen tar ca 10 minutter &#229; fullf&#248;re.";
	inviteLine3["no"] = "Hvis du velger &#229; delta, starter unders&#248;kelsen n&#229;r du avslutter dagens bes&#248;k p&#229; IKEA.no.";
	inviteYes["no"] = "Delta";
	inviteNo["no"] = "Nei takk";
        
        //21092012
        inviteLine1["pl"] = "Prosimy o pomoc w podniesieniu jako&#347;ci naszych us&#322;ug!";
	inviteLine2["pl"] = "Czy chcia&#322;(a)by Pan(i) wzi&#261;&#263; udzia&#322; w naszej ankiecie? Wype&#322;nienie ankiety zajmie ok. 10 minut."; 
	inviteLine3["pl"] = "Je&#380;eli wyrazi Pan(i) zgod&#281;, ankieta rozpocznie si&#281; po zako&#324;czeniu Pana/i dzisiejszej wizyty w IKEA.com.";
	inviteYes["pl"] = "Chc&#281; wzi&#261;&#263; udzia&#322;";
	inviteNo["pl"] = "Nie, dzi&#281;kuj&#281; ";

	//21092012
    	inviteLine1["ro"] = "Ajuta&#355;i-ne s&#259; fim mai buni!";
  	inviteLine2["ro"] = "Dori&#355;i s&#259; participa&#355;i la sondajul nostru? Completarea chestionarului dureaz&#259; aproximativ 10 minute";
  	inviteLine3["ro"] = "Dac&#259; sunte&#355;i de acord s&#259; participa&#355;i, sondajul va &#238;ncepe la &#238;ncheierea vizitei dumneavoastr&#259; de ast&#259;zi de pe IKEA.com";
  	inviteYes["ro"] = "Vreau s&#259; particip";
  	inviteNo["ro"] = "Nu, mul&#355;umesc ";


 
        //21092012
        inviteLine1["sl"] = "Pomagajte se nam izbolj&#353;ati!";
	inviteLine2["sl"] = "Si &#382;elite sodelovati v na&#353;i anketi? Anketa traja pribli&#382;no 10 minut.";
	inviteLine3["sl"] = "&#268;e se boste strinjali, se bo anketa za&#269;ela, ko boste kon&#269;ali z dana&#353;njim obiskom spletnega mesta IKEA.com.";
	inviteYes["sl"] = "&#381;elim sodelovati";
	inviteNo["sl"] = "Ne, hvala";
	
        //21092012  usa spanish	
	inviteLine1["es-us"] = "&#161;Ay&#250;denos a mejorar!";
	inviteLine2["es-us"] = "&#191;Le gustar&#237;a participar en nuestra encuesta? La encuesta le llevar&#225; unos 10 minutos aproximadamente.";
	inviteLine3["es-us"] = "Si acepta participar, la encuesta comenzar&#225; cuando termine su visita a IKEA.com hoy.";
	inviteYes["es-us"] = "Participar";
	inviteNo["es-us"] = "No, gracias";


	//290912 - dom republic spanish
	if (inviteCountry == "do"){
	
	inviteLine1["es-us"] = "&#161;Ay&#250;danos a mejorar!"
	inviteLine2["es-us"] = "&#191;Te gustar&#237;a participar en nuestra encuesta? Responder a la misma te llevar&#225; aproximadamente 10 minutos.";
	inviteLine3["es-us"] = "Si aceptas participar, la encuesta comenzar&#225; hoy, cuando termine tu visita a IKEA.com.do.";
	inviteYes["es-us"] = "Participar";
	inviteNo["es-us"] = "No, gracias";
	}
	
	
	//21092012
	inviteLine1["fr-ca"] = "Aidez-nous &#224; nous am&#233;liorer!";
	inviteLine2["fr-ca"] = "Aimeriez-vous participer &#224; notre sondage ? Il vous prendra environ 10 minutes.";
	inviteLine3["fr-ca"] = "Si vous acceptez de participer, le sondage commencera lorsque vous aurez termin&#233; de visiter IKEA.com";
	inviteYes["fr-ca"] = "Je d&#233;sire participer";
	inviteNo["fr-ca"] = "Non, merci";

        
      	//21092012  
        inviteLine1["ru"] = "&#1055;&#1086;&#1084;&#1086;&#1075;&#1080;&#1090;&#1077; &#1085;&#1072;&#1084; &#1089;&#1090;&#1072;&#1090;&#1100; &#1083;&#1091;&#1095;&#1096;&#1077;!";
	inviteLine2["ru"] = "&#1042;&#1099; &#1093;&#1086;&#1090;&#1077;&#1083;&#1080; &#1073;&#1099; &#1087;&#1088;&#1080;&#1085;&#1103;&#1090;&#1100; &#1091;&#1095;&#1072;&#1089;&#1090;&#1080;&#1077; &#1074; &#1085;&#1072;&#1096;&#1077;&#1084; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1080;? &#1048;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077; &#1079;&#1072;&#1081;&#1084;&#1077;&#1090; &#1087;&#1088;&#1080;&#1084;&#1077;&#1088;&#1085;&#1086; 10 &#1084;&#1080;&#1085;&#1091;&#1090;";
	inviteLine3["ru"] = "&#1045;&#1089;&#1083;&#1080; &#1074;&#1099; &#1089;&#1086;&#1075;&#1083;&#1072;&#1089;&#1080;&#1090;&#1077;&#1089;&#1100; &#1091;&#1095;&#1072;&#1089;&#1090;&#1074;&#1086;&#1074;&#1072;&#1090;&#1100;, &#1090;&#1086; &#1089;&#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1087;&#1088;&#1080;&#1089;&#1090;&#1091;&#1087;&#1080;&#1090;&#1100; &#1082; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1102;, &#1082;&#1086;&#1075;&#1076;&#1072; &#1079;&#1072;&#1082;&#1088;&#1086;&#1077;&#1090;&#1077; &#1089;&#1072;&#1081;&#1090; IKEA.com. ";
	inviteYes["ru"] = "&#1055;&#1088;&#1080;&#1085;&#1103;&#1090;&#1100; &#1091;&#1095;&#1072;&#1089;&#1090;&#1080;&#1077;";
	inviteNo["ru"] = "&#1053;&#1077;&#1090;, &#1089;&#1087;&#1072;&#1089;&#1080;&#1073;&#1086;";
  
    
      	//21092012
      	inviteLine1["zh-hk"] = "&#24171;&#21161;&#25105;&#20497;&#25913;&#21892;&#65281;";
      	inviteLine2["zh-hk"] = "&#24744;&#39000;&#24847;&#21443;&#21152;&#25105;&#20497;&#30340;&#35519;&#26597;&#21966;&#65311;&#23436;&#25104;&#26412;&#35519;&#26597;&#38656;&#35201; 10 &#20998;&#37912;&#24038;&#21491;&#30340;&#26178;&#38291;&#12290;"; 
      	inviteLine3["zh-hk"] = "&#22914;&#26524;&#24744;&#21516;&#24847;&#21443;&#33287;&#65292;&#21063;&#22312;&#24744;&#36896;&#35370;&#23436; IKEA.com &#24460;&#65292;&#21363;&#38283;&#22987;&#26412;&#35519;&#26597;";
      	inviteYes["zh-hk"] = "&#21443;&#33287;";
      	inviteNo["zh-hk"] = "&#19981;&#21443;&#33287;&#65292;&#35613;&#35613;";

      
	//21092012	
	inviteLine1["zh-tw"] = "&#24744;&#30340;&#24847;&#35211;&#26159;&#25105;&#20497;&#36914;&#27493;&#30340;&#21205;&#21147;&#65281;";
	inviteLine2["zh-tw"] = "&#24744;&#39000;&#24847;&#21443;&#21152;&#25105;&#20497;&#30340;&#35519;&#26597;&#21966;&#65311;&#23436;&#25104;&#26412;&#35519;&#26597;&#38656;&#35201;&#22823;&#32004; 10 &#20998;&#37912;&#30340;&#26178;&#38291;&#12290;"; 
	inviteLine3["zh-tw"] = "&#22914;&#26524;&#24744;&#39000;&#24847;&#21443;&#21152;&#65292;&#21839;&#21367;&#35519;&#26597;&#23559;&#26371;&#22312;&#24744;&#28687;&#35261;&#23436;IKEA&#32178;&#31449;&#12289;&#38626;&#38283;&#25110;&#38364;&#38281;&#35222;&#31383;&#24460;&#38283;&#22987;&#36914;&#34892;&#12290;";
	inviteYes["zh-tw"] = "&#25105;&#39000;&#24847;&#21443;&#21152;";
	inviteNo["zh-tw"] = "&#19981;&#29992;&#20102;&#65292;&#35613;&#35613;";

	//21092012
        inviteLine1["zh-cn"] = "&#24110;&#21161;&#25105;&#20204;&#25913;&#36827;&#65281;";
	inviteLine2["zh-cn"] = "&#24744;&#26159;&#21542;&#24895;&#24847;&#21442;&#19982;&#25105;&#20204;&#30340;&#35843;&#26597;&#65311;&#23436;&#25104;&#35813;&#35843;&#26597;&#38656;&#35201;&#22823;&#32422; 10 &#20998;&#38047;&#12290;";
	inviteLine3["zh-cn"] = "&#22914;&#26524;&#21516;&#24847;&#21442;&#19982;&#65292;&#24744;&#29616;&#22312;&#27983;&#35272;&#23436; IKEA.com &#21518;&#21363;&#21487;&#24320;&#22987;&#20570;&#35843;&#26597;&#38382;&#21367;";
	inviteYes["zh-cn"] = "&#21442;&#19982;";
	inviteNo["zh-cn"] = "&#19981;&#65292;&#35874;&#35874;";
	
	
	//21092012 chinese singapore
	if (inviteCountry == "sg"){
	
	inviteLine1["zh-cn"] = "&#24110;&#21161;&#25105;&#20204;&#25913;&#36827;&#65281;";
	inviteLine2["zh-cn"] = "&#24744;&#26159;&#21542;&#24895;&#24847;&#21442;&#19982;&#25105;&#20204;&#30340;&#35843;&#26597;&#65311;&#23436;&#25104;&#35813;&#35843;&#26597;&#38656;&#35201;&#22823;&#32422; 10 &#20998;&#38047;&#12290;";
	inviteLine3["zh-cn"] = "&#22914;&#26524;&#21516;&#24847;&#21442;&#19982;&#65292;&#24744;&#29616;&#22312;&#27983;&#35272;&#23436; IKEA.com &#21518;&#21363;&#21487;&#24320;&#22987;&#20570;&#35843;&#26597;&#38382;&#21367;";
	inviteYes["zh-cn"] = "&#21442;&#19982;";
	inviteNo["zh-cn"] = "&#19981;&#65292;&#35874;&#35874;";
	}
	

        //21092012
        inviteLine1["is"] = "Hj&#225;lpa&#240;u okkur a&#240; b&#230;ta okkur?";
	inviteLine2["is"] = "Viltu taka &#254;&#225;tt &#237; stuttri k&#246;nnun okkar?; K&#246;nnunin mun taka um 10 m&#237;n&#250;tur a&#240; fylla &#250;t.";	
	inviteLine3["is"] = "Ef &#254;&#250; sam&#254;ykkir a&#240; taka &#254;&#225;tt mun k&#246;nnunin hefjast &#254;egar &#254;&#250; l&#253;kur heims&#243;kn &#254;inni &#225; IKEA.is &#237; dag";
	inviteYes["is"] = "Taka &#254;&#225;tt";
	inviteNo["is"] = "Nei takk";
   
        //21092012
        inviteLine1["ja"] = "&#12469;&#12540;&#12499;&#12473;&#25913;&#21892;&#12395;&#12372;&#21332;&#21147;&#19979;&#12373;&#12356;&#12290;";
	inviteLine2["ja"] = "&#24330;&#31038;&#12398;&#35519;&#26619;&#12395;&#12372;&#21332;&#21147;&#38914;&#12369;&#12414;&#12377;&#12363;?  &#12371;&#12398;&#35519;&#26619;&#12398;&#25152;&#35201;&#26178;&#38291;&#12399;&#32004;10&#20998;&#38291;&#12391;&#12377;&#12290;"; 
	inviteLine3["ja"] = "&#35519;&#26619;&#12408;&#12398;&#12372;&#21442;&#21152;&#12395;&#21516;&#24847;&#12373;&#12428;&#12383;&#22580;&#21512;&#12399;&#12289;&#12362;&#23458;&#27096;&#12364;&#26412;&#26085;IKEA.com &#12408;&#12398;&#12450;&#12463;&#12475;&#12473;&#12434;&#32066;&#20102;&#12375;&#12383;&#24460;&#12391;&#35519;&#26619;&#12364;&#22987;&#12414;&#12426;&#12414;&#12377;&#12290;";
	inviteYes["ja"] = "&#21442;&#21152;&#12377;&#12427;";
	inviteNo["ja"] = "&#21442;&#21152;&#12375;&#12394;&#12356;";
    
        //21092012
        inviteLine1["tr"] = "Geli&#351;memiz i&#231;in bize yard&#305;m edin!";
	inviteLine2["tr"] = "Anketimize kat&#305;lmak ister misiniz? Anketin tamamlanmas&#305; yakla&#351;&#305;k 10 dakika s&#252;recektir."; 
	inviteLine3["tr"] = "Ankete kat&#305;lmay&#305; kabul etti&#287;iniz takdirde, anket IKEA.com.tr'den &#231;&#305;kt&#305;&#287;&#305;n&#305;z zaman ba&#351;layacakt&#305;r.";
	inviteYes["tr"] = "Kat&#305;l";
	inviteNo["tr"] = "Hay&#305;r, te&#351;ekk&#252;r ederim.";

	//21092012
	inviteLine1["se"] = "Hj&#228;lp oss att bli b&#228;ttre!";
	inviteLine2["se"] = "Vill du delta i v&#229;r unders&#246;kning? Unders&#246;kningen tar ungef&#228;r 10 minuter.";
	inviteLine3["se"] = "Om du vill delta s&#229; b&#246;rjar unders&#246;kningen n&#228;r du har avslutat ditt bes&#246;k p&#229; IKEA.com i dag.";
	inviteYes["se"] = "Delta";
	inviteNo["se"] = "Nej, tack";
          
        //21092012
        inviteLine1["nl"] = "Help ons te verbeteren!";
	inviteLine2["nl"] = "Wilt u meedoen aan ons onderzoek? Het onderzoek duurt ca. 10 minuten.";
	inviteLine3["nl"] = "Als u meedoet, begint het onderzoek wanneer u de IKEA website verlaat.";
	inviteYes["nl"] = "Ik doe mee";
	inviteNo["nl"] = "Nee, bedankt";

	//21092012
	inviteLine1["pt"] = "Ajude-nos a melhorar!";
	inviteLine2["pt"] = "Gostaria de participar no nosso inqu&#233;rito? O inqu&#233;rito demora cerca de 10 minutos."; 
	inviteLine3["pt"] = "Se concordar em participar, o inqu&#233;rito ter&#225; in&#237;cio assim que concluir a sua visita a IKEA.com hoje";
	inviteYes["pt"] = "Participar";
	inviteNo["pt"] = "N&#227;o, obrigado(a)";

 	
	//21092012
	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	
	//11/02/2015 jordon arabic
	if (inviteCountry == "jo"){
	
	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	}
	
	//11/02/2015 egypt arabic
	if (inviteCountry == "eg"){
	
	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	}
	//24/09/2012 uae arabic
	if (inviteCountry == "ae"){

	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	}
	
	
	//24/09/2012 saudi arabia arabic
	if (inviteCountry == "sa"){
	
	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	}
	
	
	//24/09/2012 kuwait arabia arabic
	if (inviteCountry == "kw"){
	
	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	}
	
	
	//15/04/2013 qatar arabic
	if (inviteCountry == "qa"){
	
 	inviteLine1["ar"] = "&#1587;&#1575;&#1593;&#1583;&#1606;&#1575; &#1601;&#1610; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1606;&#1601;&#1587;&#1606;&#1575;!";
	inviteLine2["ar"] = "&#1607;&#1604; &#1578;&#1585;&#1610;&#1583; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1610; &#1583;&#1585;&#1575;&#1587;&#1578;&#1606;&#1575;&#1567; &#1610;&#1587;&#1578;&#1594;&#1585;&#1602; &#1573;&#1603;&#1605;&#1575;&#1604; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; 10 &#1583;&#1602;&#1575;&#1574;&#1602; &#1578;&#1602;&#1585;&#1610;&#1576;&#1611;&#1575;.&#1563";
	inviteLine3["ar"] = "&#1573;&#1584;&#1575; &#1603;&#1606;&#1578; &#1578;&#1608;&#1575;&#1601;&#1602; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1603;&#1577; &#1601;&#1587;&#1578;&#1576;&#1583;&#1571; &#1575;&#1604;&#1583;&#1585;&#1575;&#1587;&#1577; &#1593;&#1606;&#1583; &#1575;&#1604;&#1575;&#1606;&#1578;&#1607;&#1575;&#1569; &#1605;&#1606; &#1586;&#1610;&#1575;&#1585;&#1578;&#1603; &#1604;&#1605;&#1608;&#1602;&#1593; www.IKEA.com &#1575;&#1604;&#1610;&#1608;&#1605;";
	inviteYes["ar"] = "&#1587;&#1571;&#1588;&#1575;&#1585;&#1603;";
	inviteNo["ar"] = "&#1604;&#1575; &#1588;&#1603;&#1585;&#1575;";
	

	 inviteLine3["en"] = "If you agree to take part the survey will start when you finish your visit to www.IKEA.com today";

	}
	
	
        //21092012
        inviteLine1["de"] = "Wir m&#246;chten noch besser werden. Helfen Sie uns dabei!";
	inviteLine2["de"] = "M&#246;chten Sie an unserer Umfrage teilnehmen? Die Beantwortung der Fragen dauert ca. 10 Minuten."; 
	inviteLine3["de"] = "Wenn Sie an der Umfrage teilnehmen m&#246;chten, startet diese, sobald Sie Ihren heutigen Besuch bei IKEA.com beendet haben.";
	inviteYes["de"] = "Teilnehmen";
	inviteNo["de"] = "Nein danke";
	

	//21092012 - alternative german, french and italian for swiss site	
	if (inviteCountry == "ch"){
		inviteLine1["de"] = "Wir m&#246;chten noch besser werden. Helfen Sie uns dabei!";
		inviteLine2["de"] = "M&#246;chten Sie an unserer  Umfrage teilnehmen? Sie dauert ungef&#228;hr 10&#160;Minuten.";
		inviteLine3["de"] = "Wenn Sie an der Umfrage teilnehmen m&#246;chten, startet diese, sobald Sie Ihren heutigen Besuch bei IKEA.com beendet haben.";
		inviteYes["de"] = "Teilnehmen";
		inviteNo["de"] = "Nein danke";
		
		
		inviteLine1["fr"] = "Aidez-nous &#224; nous am&#233;liorer !";
		inviteLine2["fr"] = "Aimeriez-vous prendre part &#224; notre enqu&#234;te? Il faut environ dix minutes pour y r&#233;pondre.";
		inviteLine3["fr"] = "Si vous acceptez de prendre part, l'enqu&#234;te commencera aujourd'hui &#224; la fin de votre visite sur IKEA.com";
		inviteYes["fr"] = "Prendre part";
		inviteNo["fr"] = "Non, merci";
		
		
		inviteLine1["it"] = "Ci aiuti a migliorare?";
		inviteLine2["it"] = "Vuole partecipare al nostro sondaggio? Per completarlo sono necessari circa 10 minuti."; 
		inviteLine3["it"] = "Se accetta di partecipare, il sondaggio verr&#224; lanciato al termine della sua visita di oggi su IKEA.com.";
		inviteYes["it"] = "Partecipa";
		inviteNo["it"] = "No, grazie";


	}

        //21092012
        inviteLine1["es"] = "&#161;Ay&#250;denos a mejorar!";
	inviteLine2["es"] = "&#191;Le gustar&#237;a participar en nuestra encuesta? Le llevar&#225; aproximadamente 10 minutos."; 
	inviteLine3["es"] = "Si desea participar, la encuesta empezar&#225; cuando termine la visita de hoy a IKEA.com.";
	inviteYes["es"] = "Participar";
	inviteNo["es"] = "No, gracias";
	
	
	//21092012 - spanish island spanish amend
	if (inviteCountry == "esi"){
	
		inviteLine1["es"] = "&#161;Ay&#250;denos a mejorar!";
		inviteLine2["es"] = "&#191;Te gustar&#237;a participar en nuestra encuesta? Te llevar&#225; aproximadamente 10 minutos."; 
		inviteLine3["es"] = "Si deseas participar, la encuesta empezar&#225; cuando termines la visita de hoy a www.islas.ikea.es.";
		inviteYes["es"] = "Participar";
		inviteNo["es"] = "No, gracias";
	}
	

        //21092012
        inviteLine1["sk"] = "Pom&#244;&#382;te n&#225;m zlep&#353;i&#357; sa!";
	inviteLine2["sk"] = "&#8222;Chceli by ste sa z&#250;&#269;astni&#357;  n&#225;&#353;ho prieskumu? Vyplnenie prieskumu trv&#225; pribli&#382;ne 10 min&#250;t.&#8220;";
	inviteLine3["sk"] = "Ak sa chcete prieskumu z&#250;&#269;astni&#357;, za&#269;ne sa hne&#271; po skon&#269;en&#237; va&#353;ej dne&#353;nej n&#225;v&#353;tevy IKEA.sk";
	inviteYes["sk"] = "Z&#250;&#269;astn&#237;m sa";
	inviteNo["sk"] = "Nie, &#271;akujem";
      
        
        //25092012
        inviteLine1["my"] = "Bantulah kami untuk meningkatkan perkhidmatan!";
	inviteLine2["my"] = "Adakah anda ingin menyertai kaji selidik kami? Kaji selidik ini mengambil masa kira-kira 10 minit untuk dilengkapkan."; 
	inviteLine3["my"] = "Jika anda bersetuju untuk ikut serta, kaji selidik ini akan bermula setelah kunjungan anda ke IKEA.com hari ini selesai";
	inviteYes["my"] = "Ikut serta";
	inviteNo["my"] = "Tidak, terima kasih";

 
        //21092012
        inviteLine1["nl-be"] = "Help ons te verbeteren!";
	inviteLine2["nl-be"] = "Wilt u meedoen aan onze enqu&#234;te? Het zal ongeveer 10 minuten duren om de enqu&#234;te in te vullen.";
	inviteLine3["nl-be"] = "Als u meedoet, begint de enqu&#234;te wanneer u de IKEA-site verlaat";
	inviteYes["nl-be"] = "Ik doe mee";
	inviteNo["nl-be"] = "Nee, bedankt";

        
	//25092012	        
        inviteLine1["de-at"] = "Wir m&#246;chten noch besser werden. Helfen Sie uns dabei!";
	inviteLine2["de-at"] = "M&#246;chten Sie an unserer Umfrage teilnehmen? Die Beantwortung der Fragen dauert ca. 10 Minuten."; 
	inviteLine3["de-at"] = "Wenn Sie an der Umfrage teilnehmen m&#246;chten, startet diese, sobald Sie Ihren heutigen Besuch bei IKEA.com beendet haben.";
	inviteYes["de-at"] = "Teilnehmen";
	inviteNo["de-at"] = "Nein danke";
	
	
	
	//04092013
	inviteLine1["lt"] = "Pad&#279;kite mums tobul&#279;ti!";
	inviteLine2["lt"] = "Ar nor&#279;tum&#279;te dalyvauti m&#363;s&#371; apklausoje? Apklausai u&#382;pildyti prireiks apie 10 minu&#269;i&#371;."; 
	inviteLine3["lt"] = "Jei sutinkate dalyvauti apklausoje, j&#261; gal&#279;site prad&#279;ti pildyti, kai baigsite nar&#353;yti IKEA.com";
	inviteYes["lt" ] = "Dalyvauti";
	inviteNo["lt"] = "A&#269;i&#363;, ne";
    
       //21092012
        inviteLine1["ko"] = "&#8220;&#45908; &#45208;&#51008; &#51228;&#54408;&#44284; &#49436;&#48708;&#49828;&#47484; &#51228;&#44277;&#54624; &#49688; &#51080;&#46020;&#47197; &#46020;&#50752;&#51452;&#49464;&#50836;!&#8221;";
        inviteLine2["ko"] = "&#8220;&#51060; &#49444;&#47928;&#51312;&#49324;&#50640; &#52280;&#50668;&#54616;&#49884;&#44192;&#49845;&#45768;&#44620;? &#49444;&#47928;&#51312;&#49324;&#45716; &#50557; 10&#48516; &#51221;&#46020; &#49548;&#50836;&#46121;&#45768;&#45796;.&#8221;";
        inviteLine3["ko"] = "&#8220;&#46041;&#51032;&#54616;&#49892; &#44221;&#50864; &#50724;&#45720; IKEA.com&#51032; &#48169;&#47928;&#51060; &#51333;&#47308;&#46104;&#45716; &#51593;&#49884; &#49444;&#47928;&#51312;&#49324;&#44032; &#49884;&#51089;&#46121;&#45768;&#45796;.&#8221;";
        inviteYes["ko"] = "&#8220;&#52280;&#50668;&#54616;&#44192;&#49845;&#45768;&#45796;";
        inviteNo["ko"] = "&#8220;&#50500;&#45768;&#50836;. &#52280;&#50668;&#54616;&#51648; &#50506;&#44192;&#49845;&#45768;&#45796;";
      //21092012
        inviteLine1["in"] = "Bantu kami agar lebih baik!";
        inviteLine2["in"] = "Maukah Anda berpartisipasi di dalam survei kami? Survei ini dapat diselesaikan dalam waktu sekitar 10 menit.";
        inviteLine3["in"] = "Jika Anda setuju untuk berpartisipasi, survei ini akan mulai saat Anda telah menyelesaikan kunjungan Anda ke IKEA.com hari ini";
        inviteYes["in" ] = "Ikut Berpartisipasi";
        inviteNo["in"] = "Tidak, terima kasih";

        
       
        //END OF INVITE SECTION 
        
        if (inviteIncidence > -1) {
            INCIDENCE = inviteIncidence;
        }
        else
        {
            INCIDENCE = -1;
        }
        
        if (INCIDENCE == undefined)
        {
            INCIDENCE=-1; // ie we just don't pop them
        }  

        d.style.display="none";
        var popStart = "<p></p><p>";
        

        createInviteHTML(inviteLanguages.split(/,/)[0]);
        survey_cookie = survey2CookieName(Sites, "1");
        if (inviteCountry == "GFK") { survey_cookie += Math.random().toString() } 
        d.style.display="block";


        // check if mySite found
        if(inviteSite != "")
        {

            // check against incidence rate (100=everyone, -1 = no one)
            //var thisCookie = parseInt(get_cookie(survey_cookie));
            var thisCookie = get_cookie(survey_cookie);
            var surveyDisplayCount = 1; //The number of times a user must enter a valid survey page before it display

            if ( (thisCookie== '') || (thisCookie== '-1'))
            {
                    if(incidence_rate(INCIDENCE))
                    {
                        set_cookie(survey_cookie,"1");
                        if(surveyDisplayCount == 1)
                        {
                            window.setTimeout("document.body.appendChild(d)",1500); // pop up question after 1.5 secs
                        }
                    }
            }
        }
    }


//True if survey page found
function surveyPage(index, surveyStart, surveyEnd) {
    return index >= surveyStart && index <= surveyEnd;
}

//Builds the cookiename for survey2
function survey2CookieName(sites, index) {
    var firstPart = "686160_survey2_";
    return firstPart + sites[index];
}

//Builds the HTML for survey
function surveyHTML(index, sites, surveyHeading, surveyBody, surveyParticipate, surveyNoThanks) {


    var inputStyle = "";

    var htmlString = "<b>#helpHeading</b>" + "<p>#helpBody</p><br/>" + "<input #inputStyle1 type=\"button\" onclick=\"run_survey('#inMarket');return false;\" value=\"#participate\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<input #inputStyle2 type=\"button\" onclick=\"close_popup()();return false;\" value=\"#noThanks\">";
    return htmlString.
    replace("#inputStyle1", inputStyle).
    replace("#inputStyle2", inputStyle).
    replace("#inMarket", sites[index]).
    replace("#helpHeading", surveyHeading[index]).
    replace("#helpBody", surveyBody[index]).
    replace("#participate", surveyParticipate[index]).
    replace("#noThanks", surveyNoThanks[index]);
}

function close_popup() {
    d.style.display = "none";
}

var surveyPopupWindow;
var looper;

// Path to the heartbeat html file 

if (surveyTsWeb === "TS") {
    HeartBeatPath = "/ms/" + surveyHeartbeatFolder +"/heartbeat.htm";
}


function run_survey(inMarket) {


    if (inviteType == "D") {
        thisSurvey = window.open(HeartBeatPath + "?l=" + inviteLanguageSelected + "&c=" + inviteCountry, "_blank", "resizable=yes,scrollbars=yes"); // open the heartbeat window - this will check the opener until it can't any more - ie we've left the opening domain
    }
    else {
        thisSurvey = window.open(immediateStartURL + "?lang=" + inviteLanguageSelected + "&country=" + inviteCountry, "_blank", "resizable=yes,scrollbars=yes"); // open the heartbeat window - this will check the opener until it can't any more - ie we've left the opening domain
    }
    window.focus();
    close_popup();
    
    thisSurvey.focus();
    close_popup();
}

function checker() {
    try {
        myopener = surveyPopupWindow.location.href;
    }
    catch (err) {
        window.clearInterval(looper);
        close_popup();
    }
}

/* function receiveMessage(event) {
    event.source.postMessage("I am alive, don't start the survey!", event.origin);
} 
IKEA01048371

if (window.addEventListener){
 window.addEventListener("message", receiveMessage, false);
} */


// Functions to set, get and delete cookies
// First, to set a cookie - set a 3 month expiry date. Year is handled automatically if the month spills over
function set_cookie(cookiename, value) {
    document.cookie = cookiename + "=" + value + ";expires=" + theDate.toGMTString() + ";path=/";
}

function get_cookie(cookiename) {
    // document.cookie gives us a list of all the cookies from this domain
    // we need to find just the cookie we are interested in
    // take a substring between "cookiename=" and ";" - this is the value of the cookie
    // this function will return either the value of the cookie, or a null value if it's not there
    var nameStr = cookiename + "=";
    var maxLen = document.cookie.length
    var i = 0
    while (i < maxLen) {
        var j = i + nameStr.length
        if (document.cookie.substring(i, j) == nameStr) {
            var cookieEnd = document.cookie.indexOf(";", j);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            return unescape(document.cookie.substring(j, cookieEnd));
        }
        i++
    }
    return "";
}

// simply erase the cookie by making it expire before now
function erase_cookie(cookiename) {
    document.cookie = cookiename + "=0;expires=Sun, 26 Mar-2000 12:00:00 GMT;path=/";
}

// do they accept cookies?
// simply drop a test cookie and try to retrieve it. if it's not there, they don't take cookies
function check_cookie_accept() {
    set_cookie('testaccept', '1');
    var ck = get_cookie('testaccept');
    if (ck == 1) {
        return 1;
    }
    else {
        return 0;
    }
    // erase it for good measure
    erase_cookie('testaccept');
}

function incidence_rate(incidence) {
    var percentage = incidence;
    var randNum = Math.round(Math.random() * 100);

    if (randNum <= percentage) {
        return 1; // success
    }
    else {
        return 0; // failed
    }
}

function createInviteHTML(inviteLanguage) {

    inviteTextDirection = "ltr";


    if (inviteLanguage == "getFromSelect") {
        inviteLanguage = document.getElementById("inviteSelectLanguage").value;
    }

    //alert(inviteLanguage); 
    var inviteLanguagesArray = inviteLanguages.split(/,/);
    var inviteHTML = "";

    inviteLanguageSelected = inviteLanguagesArray[0];


    if (inviteLanguagesArray.length > 1) {
        inviteHTML += "<div align=\"right\"><select id=\"inviteSelectLanguage\" onchange=\"createInviteHTML('getFromSelect')\">";
        for (iter = 0; iter < inviteLanguagesArray.length; iter++) {
            inviteHTML += "<option value=\"" + inviteLanguagesArray[iter] + "\"";
            if (inviteLanguagesArray[iter] == inviteLanguage) {
                inviteHTML += " selected = \"selected\" ";
                inviteLanguageSelected = inviteLanguagesArray[iter];
            }
            inviteHTML += ">" + friendlyLanguageName(inviteLanguagesArray[iter]);

            if (inviteCountry == "GFK") {
                inviteHTML += " ( " + inviteLanguagesArray[iter] + " ) "
            }
            inviteHTML += "</option>";
        }
        inviteHTML += "</select></div>"
    }

    inviteSurveyLink = "#";
    inviteSurveyOnClick = "run_survey();";

    if (inviteLanguage == "ar" || inviteLanguage == "he") {
        inviteTextDirection = "rtl";
    }



    inviteHTML += "<p dir=\"" + inviteTextDirection + "\">" + inviteLine1[inviteLanguage] + "</p><p>" + inviteLine2[inviteLanguage] + "</p>";
    if (inviteType == "D") {
        inviteHTML += "<p dir=\"" + inviteTextDirection + "\">" + inviteLine3[inviteLanguage] + "</p>";
    }
    inviteHTML += "<p dir=\"" + inviteTextDirection + "\"><a href=\"" + inviteSurveyLink + "\" onclick=\"" + inviteSurveyOnClick + "\">" + inviteYes[inviteLanguage] + "</a></p>";
    inviteHTML += "<p dir=\"" + inviteTextDirection + "\"><a href=\"#\" onclick=\"close_popup();\">" + inviteNo[inviteLanguage] + "</a></p>";
    d.innerHTML = inviteHTML;
}

function friendlyLanguageName(languageCode) {
    switch (languageCode) {
        case "en":
            return "English";
        case "fr":
            return "Fran&#231;ais";
        case "fr-ca":
            return "Fran&#231;ais";

        case "de": 
            return "Deutsch";
            
        case "de-at": 
            return "Deutsch";
            
        case "sl": 
            return "Slovenski ";
        case "it": 
            return "Italiano";
        case "nl":
            return "Nederlands";
        case "nl-be":
            return "Nederlands";
        
        case "zh-cn":
            return "&#20013;&#25991;";
        case "el":
            return "&#949;&#955;&#955;&#951;&#957;&#953;&#954;&#940;";
        case "cs":
            return "&#269;e&#353;tina";

        case "da":
            return "Dansk";
        case "es-us":
            return "Espa&#241;ol";
        case "es":
            return "Espa&#241;ol";
        case "fi": 
            return "Suomi";
        case "se": 
            return "Svenska";
           case "tr": 
               return "T&#252;rk&#231;e";
        case "ru":
                return "&#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;";
        case "zh-hk":
                return "&#20013;&#25991;";
                
        case "zh-tw":
            return "&#20013;&#25991;";

        case "hu":
                return "Magyar";
        case "is":
                return "Islenska";
        case "he": 
                return "&#1506;&#1460;&#1489;&#1456;&#1512;&#1460;&#1497;&#1514;";
        case "ar": 
            return "&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;";
        case "ja": 
            return "&#26085;&#26412;&#35486;";
        case "my":
            return "Bahasa Malaysia";
        case "no": 
            return "Norsk";
        case "pl":
            return "Polski";
        case "pt":
            return "Portugu&#234;s";
        case "ro":
            return "Rom&#226;n&#259;";
        case "sk":
            return "Slovensk&#253;";
        case "th":
            return "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22";   
        
        //15/04/2013
        case "sr-rs": 
   	     return "&#1089;&#1088;&#1087;&#1089;&#1082;&#1080;";
   	               
   	//15/04/2013
   	case "hr": 
		return "hrvatski";	
		
		
	//04/09/2013
   	case "lt": 
		return "Lietuvos";		
    case "ko":
           return "&#8221;&#54620;&#44397;&#50612;&#8221;";
        case "in":
           return "Bahasa Indonesia";
            
    }
}




