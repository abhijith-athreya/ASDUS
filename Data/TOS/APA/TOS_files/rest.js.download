jQuery.getScript("/apa/scripts/json2.js");

function ajaxPostWithJson(url, jsonValue, returnContentType, callback) {
	try {
		jQuery.ajax({
			type : "POST",
			url : url,
			data : JSON.stringify(jsonValue),
			dataType : returnContentType,
			contentType : "application/json; charset-utf-8",
			success : callback
		});
	} catch (e) {
		//console.log("Error calling jQuery post was : " + e.message);
	}
}

function ajaxPostWithString(url, stringValue, returnContentType, callback) {
	try {
		jQuery.ajax({
			type : "POST",
			url : url,
			data : stringValue,
			dataType : returnContentType,
			contentType : "application/text; charset-utf-8",
			success : callback
		});
	} catch (e) {
		//console.log("Error calling jQuery post was : " + e);
	}
}

function lookupMember(memberIdValue, emailValue, loginIdValue, callback) {
	// console.log("Login Id is " + loginIdValue + " Member ID is " +
	// memberIdValue + " and email is " + emailValue);
	var jsonValue = {
		"loginId" : loginIdValue,
		"memberId" : memberIdValue,
		"email" : emailValue
	};
	ajaxPostWithJson("/apa/rest/user/lookupMember", jsonValue, "text", callback);
}

function resetPassword(newPassword, callback) {
	ajaxPostWithString("/apa/rest/user/resetPassword", newPassword, "json", callback);
}

function sendCreatePasswordMail(emailAddress, callback) {
	ajaxPostWithString("/apa/rest/user/sendCreatePasswordMail", emailAddress,
			"text", callback);
}

function sendForgotPasswordMail(password, callback) {
	ajaxPostWithString("/apa/rest/user/sendForgotPasswordMail", password, "text", callback);
	}


function addToCart(itemId, quantity, callback) {
	var jsonValue = {
		"itemId" : itemId,
		"quantity" : quantity
	};
	ajaxPostWithJson("/apa/rest/commerce/addToCart", jsonValue, "json", callback);
}

function addToCart2(itemId, quantity, constitId, applicationNumber, callback) {
	var jsonValue = {
		"itemId" : itemId,
		"quantity" : quantity,
		"constitId" : constitId,
		"applicationNumber" : applicationNumber
	};
	ajaxPostWithJson("/apa/rest/commerce/addToCart2", jsonValue, "json", callback);
}

function addPsycnetProduct(sessionId, itemId, uid, name, description, imageUrl,
		productUrl, documentCode, onlineFirstPublications, callback) {
	var jsonValue = {
		"sessionId" : sessionId,
		"itemId" : itemId,
		"uid" : uid,
		"name" : name,
		"description" : description,
		"imageUrl" : imageUrl,
		"productUrl" : productUrl,
		"documentCode" : documentCode,
		"onlineFirstPublications" : onlineFirstPublications
	};
	ajaxPostWithJson("/apa/rest/commerce/addPsycnetProductToCart", jsonValue,
			"json", callback);
}

function addApaItemToCart(itemId, quantity, applicationId, paramKeyValues,
		callback) {
	var jsonValue = {
		"itemId" : itemId,
		"quantity" : quantity,
		"applicationId" : applicationId,
		"paramKeyValues" : paramKeyValues
	};
	ajaxPostWithJson("/apa/rest/commerce/addApaItemToCart", jsonValue, "json",
			callback);
}

function getCartSummary(callback) {
	var jsonValue = {};
	ajaxPostWithJson("/apa/rest/commerce/getCartSummary", jsonValue, "json",
			callback);
}

function removeProductFromCart(itemId, callback){
	ajaxPostWithString("/apa/rest/commerce/removeProduct", itemId, "json",
			callback);
}



function getUsersFullNameBySessionKey(sessiondId, callback) {
	ajaxPostWithString("/apa/rest/user/getUsersFullNameBySessionKey", sessiondId, "json", callback);
}


