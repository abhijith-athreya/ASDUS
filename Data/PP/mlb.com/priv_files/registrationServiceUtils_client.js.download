bam.imports(bam.soap, bam.object, bam.validation);
var RegServiceUtils =
{
	proxyURI   : "/pubajaxws/services/",
	serviceURI : "http://dev-a.pubservices.bamnetworks.com:8888/pubajaxws/services/",

	/**
	 * Helper function that creates the main soap element of the request.
	 */
	createRequestBody : function(requestBodyElementName)
	{
		// Create the request soap object
		var bodyObj = new bam.soap.SOAPObject(requestBodyElementName);
			bodyObj.ns = "http://services.bamnetworks.com/registration/types/1.6";
		
		return bodyObj;
	},
	
	isErrorThrown : function(responseBodyElement)
	{
		return responseBodyElement.status && responseBodyElement.status[0].code[0].Text != 1;
	},
	
	getStatus : function(responseBodyElement)
	{
		var status = new Object();
		status.code = responseBodyElement.status[0].code[0].Text;
		status.message = responseBodyElement.status[0].message[0].Text;
		
		if (responseBodyElement.status[0].detail)
		{
			status.detailList = new Array();
			for (var i = 0; i < responseBodyElement.status[0].detail.length; i++)
			{
				var detail = new Object();
				var detailElement = responseBodyElement.status[0].detail[i];
				detail.type = (detailElement.type) ? detailElement.type : '';
				detail.field = (detailElement.field) ? detailElement.field : '';
				detail.message = (detailElement.message) ? detailElement.message : '';
				detail.messageKey = (detailElement.messageKey) ? detailElement.messageKey : '';
				detail.rule = (detailElement.rule) ? detailElement.rule : '';
				status.detailList.push(detail);
			}
		}
		
		return status;
	},
	
	getServiceErrorMessage : function(data)
	{
		var errorMessage = "Unknonwn Service Error : Service may be down";
		
		if (data && data.Body && data.Body[0].Fault && data.Body[0].Fault[0].faultstring)
		{
			errorMessage = data.Body[0].Fault[0].faultstring[0].Text;
		}
		return errorMessage;
	
	}	
};

