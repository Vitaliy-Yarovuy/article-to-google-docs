(function(){
	var toDocs;
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//		console.log("Request: ",request);
		if(!toDocs){
			toDocs = new ToGoDocsControl();
		}
		setTimeout(function(){
			toDocs.toggle();
		},0);
		sendResponse(true);
	});
})();