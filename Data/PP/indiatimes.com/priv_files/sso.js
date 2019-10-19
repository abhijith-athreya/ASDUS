var ssoLocal = 0;
if(document.domain == 'indiatimesdesktop2016.local' || document.domain == 'indiatimesmobile2016.local'){
    ssoLocal = 1;
}
var consoleOutpup = 0;

var SSO_COOKIE_NAME_TIL="ssoid";
var SSO_GET_TICKET_URL = 'https://jsso.indiatimes.com/sso/crossdomain/getTicket?version=v1';
var SSO_LOGIN_URL =  'https://jsso.indiatimes.com/sso/identity/login?channel=indiatimes';
var SSO_LOGOUT_URL = 'https://jsso.indiatimes.com/sso/identity/profile/logout/external?channel=indiatimes';
var SSO_PROFILE_URL = 'https://jsso.indiatimes.com/sso/identity/profile/edit?channel=indiatimes';
var SSO_LOAD_ON_BOARD=0;
var SSO_ONBOARD_EXPIRE_DAYS='7';
function checkLogin() {
    var ssoid = getCookie(SSO_COOKIE_NAME_TIL);
    if(ssoid || ssoLocal){
        if(consoleOutpup){
            console.log('ssoid if');
        }
        getItProfile();         
    }else{
        if(consoleOutpup){
            console.log('ssoid else');
        }
        showLoginButton();
        deleteLoginCookie();
    }
}

function getItProfile() {
    if(consoleOutpup){
        console.log('getItProfile');
    }
    var url=SSO_GET_USER_PROFILE_IT;
    $.ajax({
        url: url,
        dataType : 'json',
        success : function(itProfile){
            if(consoleOutpup){
                console.log(itProfile);
            }
            if(itProfile.status) {
                if(consoleOutpup){
                    console.log('getItProfile if');
                }              
                displayProfile(itProfile);          
            }else {
                if(consoleOutpup){
                    console.log('getItProfile else');
                }
                getTilSession();
            }
        },
        error : function() {
            showLoginButton();
        }
    })
}

function getTilSession() {
    if(consoleOutpup){
        console.log('getTilSession');
    }
    $.ajax({
        url : SSO_GET_TICKET_URL+'&'+Math.random(),
        dataType : 'jsonp',
        success : function(data){
            if(consoleOutpup){
                console.log(data);
            }
            if(data.status=='true') {
                if(consoleOutpup){
                    console.log('getTilSession if');
                }
                var ticketId = data.ticketId;
                if(ticketId.length > 0){
                    getTilProfile(ticketId);
                }else{
                    showLoginButton();
                    callGA('LoginFailed');
                }            
            }else {
                if(consoleOutpup){
                    console.log('getTilSession else');
                }
                showLoginButton();
            }
        },
        error: function(response) {
            if(consoleOutpup){
                console.log('getTilSession error');
            }
            showLoginButton();
        }
    })
}

function getTilProfile(ticketId){
    if(consoleOutpup){
        console.log('getTilProfile');
    }
    var url=SSO_GET_USER_PROFILE_IT+'?ticketId='+ticketId;
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(tilProfile) { 
            if(consoleOutpup){
                console.log(tilProfile);
            }
            displayProfile(tilProfile);            
        },
        error: function(response) {
            if(consoleOutpup){
                console.log('getTilProfile error');
            }
            showLoginButton();
        }
    })
}

window.displayProfile2 = function(tilProfile){
    if(consoleOutpup){
        console.log('displayProfile2');
    }
    if(tilProfile.status){
        var sessionId = tilProfile.sessionId;
        var data = tilProfile.data;
        if(consoleOutpup){
            console.log('displayProfile2 if');
            console.log(tilProfile);
        }        
        var userInfo = {};
        var userid=data.userId;
        
        userInfo.firstName=data.firstName;
        userInfo.thumb=data.thumb;
        userInfo.type=data.userType;
        userInfo.on_board_status=data.on_board_status;
        userInfo.on_board_status_updatedOn=data.on_board_status_updatedOn;

        ssoPopulateWelcomeDiv(userInfo, sessionId);
        load_onbording_script();
        __blognetwork.post_login();        
        
    }else{
        if(consoleOutpup){
            console.log('displayProfile2 else');
        }
        showLoginButton();
        callGA('LoginFailed');
    }
}

function displayProfile(tilProfile){
    if(consoleOutpup){
        console.log('displayProfile');        
    }
    if(tilProfile.status){
        var sessionId = tilProfile.sessionId;
        var data = tilProfile.data;
        if(consoleOutpup){
            console.log('displayProfile if');
            console.log(tilProfile);
        }
        
        var userInfo = {};
        var userid=data.userId;

        userInfo.firstName=data.firstName;
        userInfo.thumb=data.thumb;
        userInfo.type=data.userType;
        userInfo.on_board_status=data.on_board_status;
        userInfo.on_board_status_updatedOn=data.on_board_status_updatedOn;
        
        ssoPopulateWelcomeDiv(userInfo, sessionId);
        load_onbording_script();
        __blognetwork.post_login();
    }else{
        if(consoleOutpup){
            console.log('displayProfile else');
        }
        showLoginButton();
        callGA('LoginFailed');
    }
}

function ssoPopulateWelcomeDiv(userInfo, sessionId){
    SSO_LOAD_ON_BOARD=0;
    if(consoleOutpup){
        console.log('ssoPopulateWelcomeDiv');
        console.log(userInfo);
        console.log(sessionId);
    }
    
    if(userInfo.thumb) {
        $('.userImg').attr('src', userInfo.thumb);
    }else{
        var default_img = $('.userImg').attr('id');
        $('.userImg').attr('src', default_img);
    }
    if(userInfo.firstName) {
        firstName = userInfo.firstName;
        firstNameTrimmed = firstName.substring(0, 7);
        $('.firstName').html(firstNameTrimmed);
    }
    if(typeof(userInfo.on_board_status)!=='undefined') {
        if(userInfo.on_board_status==0) {
            SSO_LOAD_ON_BOARD=1;
        } else if (userInfo.on_board_status==1) {
            var on_board_date = new Date(userInfo.on_board_status_updatedOn);
            var now_date = new Date();
            var timeDiff = Math.abs(now_date.getTime()-on_board_date.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if( diffDays > SSO_ONBOARD_EXPIRE_DAYS) {
                SSO_LOAD_ON_BOARD=1;
            }
        } else if (userInfo.on_board_status==2) {
        	SSO_LOAD_ON_BOARD = 0;
        }
    }
    
    if($('#for_you_text').length>0) {
        $('#for_you_text').html('FOR YOU');
    }
    $('.profileUrl').attr('href', SSO_PROFILE_URL);
    $('.dashboardUrl').attr('href', SSO_DASBOARD_URL_IT); 
    
    $('.ssoLoginDiv').hide();
    $('.ssoWelcomeDiv').show();
    
    if(sessionId != ""){
        if(consoleOutpup){
            console.log('ssoPopulateWelcomeDiv createCookieSeconds');
        }
        createCookieSeconds("ssouid", sessionId, "1800", "indiatimes.com");
    }
    
    if(userInfo.type) {
        userType = userInfo.type;
        if(userType == "old"){
            callGA('LoginSuccess'); 
        }
        if(userType == "new"){
            callGA('SignupSuccess'); 
        }           
    }        
}

function logout(){
    removeITSessionAjax();
        
}

function showLoginButton(){
    if(consoleOutpup){
        console.log('showLoginButton');
    }
    $('.ssoLoginDiv').show();
    $('.ssoWelcomeDiv').hide();
}

function deleteLoginCookie(){
    if(consoleOutpup){
        console.log('deleteLoginCookie');
    }
    deleteCookie("ssouid","/","indiatimes.com");         
}

function removeITSessionAjax(){
    var url=SSO_LOGOUT_URL_IT;
    if(consoleOutpup){
        console.log(url);
    }
    $.ajax({
        url : url,
        type : 'GET',
        complete : function(){
            if(consoleOutpup){
                console.log('removeITSessionAjax');
            }    
            removeSSOSessionAjax();
        }
    })
}


function removeSSOSessionAjax1() {
    var url= SSO_LOGOUT_URL;
    if(consoleOutpup){
        console.log(url);
    }
    $.ajax({
        url: SSO_LOGOUT_URL,
        type: "GET",
        dataType: "jsonp",
        complete: function() {    
            showLoginButton();
            deleteLoginCookie();
            __blognetwork.post_logout();
            callGA('LogoutDropdown');
            if(window.location.href.indexOf("/user/dashboard/") !== -1){
                setTimeout(window.location.reload(), 3000); 
            }
        }
    })
}


function removeSSOSessionAjax(){
    var currentURL = window.location.href;
    var ru = currentURL.split('#')[0];
    //var url= SSO_LOGOUT_URL + '&ru='+ encodeURI(ru);
    var url= SSO_LOGOUT_URL+"&ru=http://www.indiatimes.com/user/processlogin?status=logout&ajax=1";
    if(consoleOutpup){
        console.log(url);
    }
    $.ajax({
        url : url,
        type : 'GET',
        dataType : 'jsonp',
        complete : function(){
            if(consoleOutpup){
                console.log('removeSSOSessionAjax');
            }
            showLoginButton();
            deleteLoginCookie();
            __blognetwork.post_logout();
            callGA('LogoutDropdown');
            if(window.location.href.indexOf("/user/dashboard/") !== -1){
                setTimeout(window.location.reload(), 3000); 
            }            
        }
    })
}

function openSSOPopup(eventAction, eventLabel){
    callGA(eventAction, eventLabel)
    var url= SSO_LOGIN_URL_IT;
    if(doesBrowserSupportChildTabInteraction()){
        if( /iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
            window.open(url, '_blank');
        } else {
            var pop = window.open (url,'signinwi', 'scrollbars=1,width=850,height=780');
            try {
            pop.moveTo(315,250);    
            }catch(exc) {
        }
        }
    } else {
        openSSOInSameWindow();
    }   
}

function doesBrowserSupportChildTabInteraction(){
    return ! ( navigator.userAgent.match('CriOS') || navigator.userAgent.match('Windows Phone') ) ;
}

function openSSOInSameWindow(){
    var url= SSO_LOGIN_URL;
    var ru = window.location.href;
    window.location.href=url+'&ru='+ru; 
}

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(';');
    for (i=0;i<ARRcookies.length;i++) {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf('='));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf('=')+1);
        x=x.replace(/^\s+|\s+$/g,'');
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}

function deleteCookie(name,path,domain){    
    if(getCookie(name))document.cookie=name+'='+((path)? ';path='+path : '')+((domain)? ';domain='+domain : '')+';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
    }
    else var expires = ''; 
    document.cookie = name + '=' + value + expires + '; path=/';
}

function createCookieSeconds(name, value, seconds, domain) {
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        var expires = '; expires=' + date.toGMTString();
    }
    else
        var expires = '';
    document.cookie = name + '=' + value + expires + '; path=/; domain='+domain;
}

function load_onbording_script(){
    var ob_script_url = bn_resource_js + 'onboarding.js?v=' + bn_media_version;
    loadScript(ob_script_url,init_onbording);
}

function loadScript(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState == 'loaded' ||
                script.readyState == 'complete'){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function init_onbording(){
    init_onbording_modal();
}

function callGA(eventAction, eventLabel){
    if(consoleOutpup){
        console.log('callGA');
    }
    if(eventLabel === undefined){
        eventLabel = window.location;
    }
    if(eventAction !== undefined && eventAction != ""){
        console.log(eventAction+" "+eventLabel);
        ga('send', 'event', 'SigninSignup', eventAction, eventLabel);
    }
}

$(function () {
    checkLogin();
});
