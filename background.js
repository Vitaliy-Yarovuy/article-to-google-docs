chrome.browserAction.onClicked.addListener(function(tab){
	var message = "hello world !!!\n";
	message += "from page: "   + tab.url ;
	alert(message);
});