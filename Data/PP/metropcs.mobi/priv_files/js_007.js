var upgradeSuccessCallback;$(document).ready(function(e){try{validateUpgradeAccountForm();validateRetrievePinForm();}
catch(e){console.log("Error");}
$("#idBtnUpgrade").click(function(e){upgradeProfile();return false;});$("#idForgotPinSubmitBtn").click(function(e){e.preventDefault();retrievePin();})
$("#idOpenForgotPin").click(function(e){var secretQuestionObject={componentId:'getAccountSecurityQuestions',applicationId:'metropcs',siteId:'metropcs',expectedParams:{},requestParams:{phoneNumber:primaryAccountMdn},serviceName:'accountManagementService',serviceProviderName:'applicationSpecific'};var myString='inputReqParam='+JSON.stringify(secretQuestionObject);tmoCaller.callAsync({url:"/apps/mpcs/servlet/genericservlet",data:myString,tmoOptions:{componentEl:"#idUpgradeProfileFormModal"}},secretQuestionSuccess,secretQuestionError);});$("#idBtnUpgradeNow").click(function(e){$(".error","#upgradeProfileForm").addClass("gbl_hide");$("#idPinNumber").val("");});$(".upgradeSuccessOk","#idAccountUpgradeSuccessModal").click(function(e){$("#idAccountUpgradeSuccessModal").modal("hide");$("#idUpgradeProfileFormModal").modal("hide");$("#idUpgradeProfilePopup").modal("hide");tmoLocalStorage.remove("disabledForBasicUser");upgradeSuccessCallback();});});function secretQuestionSuccess(response){if(response!==null&&response!==""){var responseJson=$.parseJSON(response);if(responseJson.isSuccessful!==null){if(responseJson.isSuccessful==="true"){secretQuestionCode=responseJson.securityQuestionCode;secretQuestionText=responseJson.securityQuestion;$("#idSecretQuestion").html(secretQuestionText);}
else{$("#idSecretAnswerError").addClass("gbl_hide");$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}}
else{$("#idSecretAnswerError").addClass("gbl_hide");$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}}
else{$("#idSecretAnswerError").addClass("gbl_hide");$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}}
function secretQuestionError(jqXHR){$("#idSecretAnswerError").addClass("gbl_hide");$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}
function validateUpgradeAccountForm(){$("#upgradeProfileForm").validate({rules:{pinNumber:{custompinvalidator:true}},errorPlacement:function(error,element){$(element).removeClass("error");}});$.validator.addMethod("custompinvalidator",function(value,element){if(!(new RegExp("[0-9]{8}").test(value))){$("#idPINLengthError").removeClass("gbl_hide");return false;}
else{$("#idPINLengthError").addClass("gbl_hide");return true;}},$("#idPINLengthError").html());}
function upgradeProfile(){if($("#upgradeProfileForm").valid()){$(".error","#upgradeProfileForm").addClass("gbl_hide");var upgradeProfileObject={componentId:'queryUserProfileSAML',applicationId:'metropcs',siteId:'metropcs',expectedParams:{},requestParams:{mdn:primaryAccountMdn,pin:$("#idPinNumber").val()},serviceName:'profileManagementService',serviceProviderName:'applicationSpecific'};var myString='inputReqParam='+JSON.stringify(upgradeProfileObject);$(".fa-spinner","#idUpgradeProfileFormModal").show();tmoCaller.callAsync({url:"/apps/mpcs/servlet/profileservlet",data:myString,tmoOptions:{componentEl:"#idUpgradeProfileFormModal"}},upgradeProfileSuccess,upgradeProfileError);}}
function upgradeProfileSuccess(response){$(".fa-spinner","#idUpgradeProfileFormModal").hide();var upgradeProfileResponseJson;if(response!==undefined&&response!==""){upgradeProfileResponseJson=$.parseJSON(response);if(upgradeProfileResponseJson!=undefined&&upgradeProfileResponseJson.isSuccessful!=undefined&&upgradeProfileResponseJson.isSuccessful==="true"){setSessionAttribute("pinHolder","Y",false);$("#idAccountUpgradeSuccessModal").modal("show");}
else{$("#idUpgradeProfileServerError").removeClass("gbl_hide");}}
else{$("#idUpgradeProfileServerError").removeClass("gbl_hide");}}
function upgradeProfileError(xHr){$(".fa-spinner","#idUpgradeProfileFormModal").hide();$("#idUpgradeProfileServerError").removeClass("gbl_hide");}
function validateRetrievePinForm(){$("#idRetrievePinForm").validate({rules:{secretAnswer:{customSecretAnswer:true},chkAuthorizeToText:{customForgotPinModalCheckbox:true},chkAccountHolder:{customForgotPinModalCheckbox:true}},messages:{chkAuthorizeToText:{customForgotPinModalCheckbox:$("#idAuthorizeCheckboxError").html()},chkAccountHolder:{customForgotPinModalCheckbox:$("#idAccountHolderError").html()}},errorPlacement:function(error,element){$(element).removeClass("error");}});$.validator.addMethod("customForgotPinModalCheckbox",function(value,element){if(!value){$(element).siblings(".error").removeClass("gbl_hide");return false;}
else{$(element).siblings(".error").addClass("gbl_hide");return true;}},$("#idPINLengthError").html());$.validator.addMethod("customSecretAnswer",function(value,element){if(!value||$.trim(value)===""){$("#idRetrievePinGenricSystemError").addClass("gbl_hide");$(".idEsapiError").addClass("gbl_hide");$("#idSecretAnswerError").removeClass("gbl_hide");return false;}
else if(value!==undefined&&$.trim(value)!==""&&!(new RegExp("^[a-zA-Z0-9.\\-\\/+=_{}\\[\\]\":!@#\\$\\(\\),'\\?\\| ]*$").test(value))){$("#idRetrievePinGenricSystemError").addClass("gbl_hide");$("#idSecretAnswerError").addClass("gbl_hide");$(".idEsapiError").removeClass("gbl_hide");return false;}
else if(value!==undefined&&$.trim(value)!==""){$(".idEsapiError").addClass("gbl_hide");$("#idSecretAnswerError").addClass("gbl_hide");return true;}},$("#idPINLengthError").html());}
function retrievePin(){if($("#idRetrievePinForm").valid()){$(".error","#idRetrievePinForm").addClass("gbl_hide");var retrievePinObject={componentId:'getAccountPin',applicationId:'metropcs',siteId:'metropcs',expectedParams:{},requestParams:{ptn:primaryAccountMdn,securityQuestionCode:secretQuestionCode,securityAnswer:$("#idSecretAnswer").val()},serviceName:'profileManagementService',serviceProviderName:'applicationSpecific'};var myString='inputReqParam='+JSON.stringify(retrievePinObject);$(".fa-spinner","#idRetrievePinModal").show();tmoCaller.callAsync({url:"/apps/mpcs/servlet/genericservlet",data:myString,tmoOptions:{componentEl:"#idRetrievePinForm"}},retrievePinSuccess,retrievePinError);}}
function retrievePinSuccess(response){$(".fa-spinner","#idRetrievePinModal").hide();var retrievePinResponseJson;if(response!==undefined&&response!==""){retrievePinResponseJson=$.parseJSON(response);if(retrievePinResponseJson!=undefined&&retrievePinResponseJson.isSuccessful!=undefined&&retrievePinResponseJson.isSuccessful==="true"){$("#idRetrievePinModal").modal("hide");$("#idAccountVerificationConfirmedModal").modal("show");}
else{$("#idSecretAnswerError").addClass("gbl_hide");$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}}
else{$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}}
function retrievePinError(xHr){$(".fa-spinner","#idRetrievePinModal").hide();$("#idRetrievePinGenricSystemError").removeClass("gbl_hide");}
function initializeUpgradeFlow(successCallback){upgradeSuccessCallback=successCallback;}