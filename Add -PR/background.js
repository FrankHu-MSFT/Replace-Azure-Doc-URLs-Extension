// listen for our browerAction to be clicked

// https://stackoverflow.com/questions/8490385/chrome-extension-execute-every-x-minutes
chrome.tabs.onUpdated.addListener(function (tabId , info, tab) {
	if(tab.url.includes("MicrosoftDocs/azure-docs/issues")){
		console.log("current status = " + info.status);
		// We run it once for immediate loads. 
		setTimeout(function () {
							chrome.tabs.executeScript(tab.tabId, { file: "jquery.js" }, function() {
							chrome.tabs.executeScript(tab.tabId, { file: "inject.js" });
						});
					}, 500);
		
		// This is to handle when you don't access the github issue tab immediately.
		
		// For some reason it only works when you access the tab. 
		// The tab doesn't seem to load otherwise? Not sure what's going on. 
		// The injection definitely just doesn't work.
		
		// Setinterval works in Miliseconds. 
		// so : 
		// 1000 ms * x = X seconds
		var timeToRunInMiliseconds = 60000; // 1 minute
		var injectionTimeInMiliseconds = 1000;
		
		if(info.status == 'complete'){
			console.log("running injection " + timeToRunInMiliseconds/injectionTimeInMiliseconds + " times");
			
			// Run every 1 second
			var myIntervals={};
			myIntervals[0] = setInterval(function(){
				setTimeout(function () {
							chrome.tabs.executeScript(tab.tabId, { file: "jquery.js" }, function() {
							chrome.tabs.executeScript(tab.tabId, { file: "inject.js" });
						});
					}, injectionTimeInMiliseconds);
			}, injectionTimeInMiliseconds); 
			
			// Stops the timer function after 
			// (timeToRunInMiliseconds/injectionTimeInMiliseconds) seconds. 
			
			var timedEvent = setTimeout(function() {
				console.log("clearing interval");
				clearInterval(myIntervals[0]);
			}, timeToRunInMiliseconds);
		}
	}
});