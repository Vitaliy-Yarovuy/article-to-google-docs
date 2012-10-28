chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.sendRequest(tab.id, {task:'dosome'}, function(result){
		console.log("answer from content script: ",result);
	});
});

