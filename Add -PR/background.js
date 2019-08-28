// listen for our browerAction to be clicked
chrome.tabs.onUpdated.addListener(function (tabId , info, tab) {
	console.log("current status = " + info.status);
	if(info.status == 'complete'){
		console.log("running injection");
		setTimeout(function () {
			chrome.tabs.executeScript(tab.tabId, { file: "jquery.js" }, function() {
				chrome.tabs.executeScript(tab.tabId, { file: "inject.js" });
			});
		}, 2000);
	}
});