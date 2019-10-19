// IdentityPointService

var IdentityPointService = (function(){
	bam.imports(bam.soap,bam.cookies);

	var _proxy  = RegServiceUtils.proxyURI + "IdentityPointService",
		_devURL = RegServiceUtils.serviceURI + "IdentityPointService";

	var _client = {
		
		create: function(identityPoint, supportingData, callback, errorCallback) {
			var soapBody = RegServiceUtils.createRequestBody("identityPoint_create_request"),
                profilePropertyName, profileProperty, profilePropertyElement;
			
			if(identityPoint) {
				soapBody.appendChild(IdentityPointService.identityPointToSoap(identityPoint));
			}
			
			if(supportingData) {
				if(supportingData.email) { soapBody.appendChild(EmailService.emailToSoap(supportingData.email)); }
				// MobilePhoneService.js isn't ready yet
				// if(supportingData.mobilePhone) { soapBody.appendChild(MobilePhoneService.mobilePhoneToSoap(identityPoint.mobilePhone)) };
                
				//if(supportingData.profile) { soapBody.appendChild(ProfileService.profileToSoap(supportingData.profile)); }
                if (supportingData.profile) {
                    for (profilePropertyName in supportingData.profile) {
                        if (supportingData.profile.hasOwnProperty(profilePropertyName)) {
                            profileProperty = supportingData.profile[profilePropertyName];

                            profilePropertyElement = new bam.soap.SOAPObject("profileProperty");
                            profilePropertyElement.appendChild(new bam.soap.SOAPObject("name").val(profilePropertyName));
                            profilePropertyElement.appendChild(new bam.soap.SOAPObject("value").val(profileProperty));
                        
                            soapBody.appendChild(profilePropertyElement);
                        }
                    }
                }

				if(supportingData.address) { soapBody.appendChild(AddressService.addressToSoap(supportingData.address)); }
				if(supportingData.creditCard) { soapBody.appendChild(CreditCardService.creditCardToSoap(supportingData.creditCard)); }
			}
			
			bam.soap.SOAPClient.Proxy      = _proxy; 
			bam.soap.SOAPClient.SOAPServer = _devURL;
			
			var soapRequest = new bam.soap.SOAPRequest("http://services.bamnetworks.com/registration/identityPoint/create", soapBody);
			bam.soap.SOAPClient.SendRequest(soapRequest, function(data) {
				if (data && data.Body && data.Body[0].identityPoint_create_response) {
					var responseBodyElement = data.Body[0].identityPoint_create_response[0];
					
					if (!RegServiceUtils.isErrorThrown(responseBodyElement)) {	
						callback(responseBodyElement.identification[0].id[0].Text);
					} else {
						errorCallback("IdentityPoint.create", RegServiceUtils.getStatus(responseBodyElement));
					}
				}
				else {
					errorCallback("IdentityPoint.create", {code:-100000, message:RegServiceUtils.getServiceErrorMessage(data)});
				}
			});
		},
		
		identify: function(p) { // identityPoint, callback, errorCallback
			var	success = (!!p.success && typeof p.success === 'function') ? p.success : null,
				error   = (!!p.error && typeof p.error === 'function') ? p.error : null;

			var soapBody = RegServiceUtils.createRequestBody("identityPoint_identify_request");
			
			if(!!p) {
				var identityElement = _client.identityPointToSoap(p);
				if (!!identityElement) { soapBody.appendChild(identityElement); }
			}  
			
			bam.soap.SOAPClient.Proxy      = _proxy; 
			bam.soap.SOAPClient.SOAPServer = _devURL;
			
			var soapRequest = new bam.soap.SOAPRequest("http://services.bamnetworks.com/registration/identityPoint/identify", soapBody);

			if (!!p.application){
				var appCredentials = new bam.soap.SOAPObject('ns1:appCredentials'),
                    namespacePrefix = (p.application.ns) ? "ns1:" : ""; // hack for appAccount namespace prefix

                // hack for appAccount namespace prefix
                if ( ! p.application.ns) {
                    appCredentials.ns='http://services.bamnetworks.com/application/types/1.5';
                } else {
                    appCredentials.attr('xmlns:ns1', p.application.ns);
                }

				if (!!p.application.name){ appCredentials.attr(namespacePrefix + 'name', p.application.name); }
				if (!!p.application.targetAccountName){ appCredentials.attr(namespacePrefix + 'targetAccountName', p.application.targetAccountName); }
				if (!!p.application.password){ appCredentials.attr(namespacePrefix + 'password', p.application.password); }
				soapRequest.addHeader(appCredentials);
			}

			bam.soap.SOAPClient.SendRequest(soapRequest, function(data) {
				if (data && data.Body && data.Body[0].identityPoint_identify_response) {
					var responseBodyElement = data.Body[0].identityPoint_identify_response[0];
					
					if (!RegServiceUtils.isErrorThrown(responseBodyElement)) {	
						if (!!success) { success(responseBodyElement); }  // success(responseBodyElement.identification[0].id[0].Text);
					} else {
						if (!!error) { 
							var oError = RegServiceUtils.getStatus(responseBodyElement);
							oError.operation = 'IdentityPoint.identify';
							error(oError); 
						}
					}
				} else {
					if (!!error) { error({operation:'IdentityPoint.identify', code:-100000, message:RegServiceUtils.getServiceErrorMessage(data)}); }
				}
			});
		},

        findIdentityPointKeys: function(p) {
			var	success = (!!p.success && typeof p.success === 'function') ? p.success : null,
				error   = (!!p.error && typeof p.error === 'function') ? p.error : null;

			var soapBody = RegServiceUtils.createRequestBody("identityPoint_findIdentityPointKeys_request");
			
			if(!!p) {
				var identityElement = _client.identityPointToSoap(p);
				if (!!identityElement) { soapBody.appendChild(identityElement); }
			}  
			
			bam.soap.SOAPClient.Proxy      = _proxy; 
			bam.soap.SOAPClient.SOAPServer = _devURL;
			
			var soapRequest = new bam.soap.SOAPRequest("http://services.bamnetworks.com/registration/identityPoint/findIdentityPointKeys", soapBody);

			if (!!p.application){
				var appCredentials = new bam.soap.SOAPObject('appCredentials');
				appCredentials.ns='http://services.bamnetworks.com/application/types/1.5';
				if (!!p.application.name){ appCredentials.attr('name',p.application.name); }
				if (!!p.application.password){ appCredentials.attr('password',p.application.password); }
				soapRequest.addHeader(appCredentials);
			}

			bam.soap.SOAPClient.SendRequest(soapRequest, function(data) {
				if (data && data.Body && data.Body[0].identityPoint_findIdentityPointKeys_response) {
					var responseBodyElement = data.Body[0].identityPoint_findIdentityPointKeys_response[0];
					
					if (!RegServiceUtils.isErrorThrown(responseBodyElement)) {	
						if (!!success) { success(responseBodyElement); }  // success(responseBodyElement.identification[0].id[0].Text);
					} else {
						if (!!error) { 
							var oError = RegServiceUtils.getStatus(responseBodyElement);
							oError.operation = 'IdentityPoint.findModifiedIdentityPointKeys';
							error(oError); 
						}
					}
				} else {
					if (!!error) { error({operation:'IdentityPoint.findModifiedIdentityPointKeys', code:-100000, message:RegServiceUtils.getServiceErrorMessage(data)}); }
				}
			});
        },

        /**
         * Unlinks two linked identity point ids
         */
        unlink : function(p) {

			var	success = (!!p.success && typeof p.success === 'function') ? p.success : null,
				error   = (!!p.error && typeof p.error === 'function') ? p.error : null;

			var soapBody = RegServiceUtils.createRequestBody("identityPoint_unlink_request");
			
			if(!!p) {
				var identityElement = _client.identityPointToSoap(p);
				if (!!identityElement) { soapBody.appendChild(identityElement); }
			}  
			
			bam.soap.SOAPClient.Proxy      = _proxy; 
			bam.soap.SOAPClient.SOAPServer = _devURL;
			
			var soapRequest = new bam.soap.SOAPRequest("http://services.bamnetworks.com/registration/identityPoint/unlink", soapBody);

			bam.soap.SOAPClient.SendRequest(soapRequest, function(data) {
				if (data && data.Body && data.Body[0].identityPoint_unlink_response) {
					var responseBodyElement = data.Body[0].identityPoint_unlink_response[0];
					
					if (!RegServiceUtils.isErrorThrown(responseBodyElement)) {	
						if (!!success) { success(responseBodyElement); }  // success(responseBodyElement.identification[0].id[0].Text);
					} else {
						if (!!error) { 
							var oError = RegServiceUtils.getStatus(responseBodyElement);
							oError.operation = 'IdentityPoint.unlink';
							error(oError); 
						}
					}
				} else {
					if (!!error) { error({operation:'IdentityPoint.unlink', code:-100000, message:RegServiceUtils.getServiceErrorMessage(data)}); }
				}
			});
        },

		identityPointToSoap: function(params) {
			var identificationElement = null,
                fingerprintEl,
                profileProperty,
                profilePropertyElement;
			 
			if(!!params && typeof params==='object') {
				identificationElement = new bam.soap.SOAPObject("identification");
				
				if(!!params.type) { identificationElement.attr("type", params.type ); }
				if(!!params.id) { identificationElement.appendChild(new bam.soap.SOAPObject("id")).val(params.id); }
				if(!!params.fingerprint) { 
                    fingerprintEl = new bam.soap.SOAPObject("fingerprint").val(params.fingerprint);
                    if(!!params.maxAge) { fingerprintEl.attr("maxAge", params.maxAge); }
                    identificationElement.appendChild(fingerprintEl); 
                }
				if(!!params.email) { identificationElement.appendChild(EmailService.emailToSoap(params.email)); }
				if(!!params.password) { identificationElement.appendChild(new bam.soap.SOAPObject("password")).val(params.password); }
				// MobilePhoneService.js hasn't been written yet 
				// if(params.mobilePhone) { identificationElement.appendChild(MobilePhoneService.mobilePhoneToSoap(params.mobilePhone)); }

                if (params.profile) {
                    for (profileProperty in params.profile) {
                        if (params.profile.hasOwnProperty(profileProperty)) {
                            profilePropertyElement = new bam.soap.SOAPObject("profileProperty");

                            profilePropertyElement.appendChild(new bam.soap.SOAPObject("name").val(profileProperty));
                            profilePropertyElement.appendChild(new bam.soap.SOAPObject("value").val(params.profile[profileProperty]));
                            identificationElement.appendChild(profilePropertyElement);
                        }
                    }
                }

			} 
			
			return identificationElement.children.length>0 ? identificationElement : null;
		},
		
		soapToIdentityPoint: function(identificationElement) {
			var identityPoint = null;
			
			if (!!identificationElement) {
				identityPoint = {};
				
				if(!!identificationElement.id[0].Text) { identityPoint.id=identificationElement.id[0].Text; }
				if(!!identificationElement.type[0].Text) { identityPoint.type=identificationElement.type[0].Text; }
				if(!!identificationElement.fingerprint[0].Text) { identityPoint.fingerprint=identificationElement.fingerprint[0].Text; }
				if(!!identificationElement.email) { identityPoint.email=EmailService.soapToEmail(identificationElement.email[0]); }
				if(!!identificationElement.address) { identityPoint.address=AddressService.soapToAddress(identificationElement.address[0]); }
				// mobilePhoneService.js isn't ready yet
				// if(identificationElement.mobilePhone) { identityPoint.email=MobilePhoneService.soapToMobilePhone(identificationElement.mobilePhone[0]); }
				
				/*if(groupElement.tags) {
					group.tags = [];
					for (var i=0; i<groupElement.tags.length; i++){
						group.tags.push(groupElement.tags[i].Text);
					}
				}*/
			}
			return identityPoint;
		} 	
	};
	return _client;
})();
