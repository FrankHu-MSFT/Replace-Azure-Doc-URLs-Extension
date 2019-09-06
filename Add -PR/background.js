// listen for our browerAction to be clicked

// https://stackoverflow.com/questions/8490385/chrome-extension-execute-every-x-minutes

// Changelog:
// 0.4 adding analytics code for metric handling. 

var _AnalyticsCode = 'UA-147217527-1';

/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */

// Standard Google Universal Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
ga('create', _AnalyticsCode, 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');


chrome.tabs.onUpdated.addListener(function (tabId , info, tab) {
	var analyticsRan = 0;
	if(tab.url.includes("MicrosoftDocs/azure-docs/issues") && info.status == "complete"){
		console.log("current status = " + info.status);
		// We run it once for immediate loads. 
		setTimeout(function () {
							chrome.tabs.executeScript(tab.tabId, { file: "jquery.js" }, function() {
							chrome.tabs.executeScript(tab.tabId, { file: "inject.js" }, function(){
								   if(chrome.runtime.lastError) {
										  //console.error(chrome.runtime.lastError);
										  if(!Boolean(analyticsRan)){
											console.log("sending page view");
											ga('send', 'pageview', '/action-tracked.html');
											analyticsRan = 1;
										  }
									}
							});
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
		if(info.status == 'complete' && !Boolean(analyticsRan)){
			console.log("running injection " + timeToRunInMiliseconds/injectionTimeInMiliseconds + " times");
			
			// Run every 1 second
			var myIntervals={};
			myIntervals[0] = setInterval(function(){ 
					setTimeout(function () {
							chrome.tabs.executeScript(tab.tabId, { file: "jquery.js" }, function() {
							chrome.tabs.executeScript(tab.tabId, { file: "inject.js" }, function(){
								   if(chrome.runtime.lastError) {
										  //console.error(chrome.runtime.lastError);
										  //console.log(analyticsRan);
										  if(!Boolean(analyticsRan)){
											console.log("sending page view");
											ga('send', 'pageview', '/action-tracked.html');
											analyticsRan = 1;
											clearInterval(myIntervals[0]);
										  }
									}
							});
						});
					}, injectionTimeInMiliseconds);
			}, injectionTimeInMiliseconds); 
			
			// Stops the timer function after 
			// timeToRunInMiliseconds seconds. 
			
			var timedEvent = setTimeout(function() {
				console.log("clearing interval");
				clearInterval(myIntervals[0]);
			}, timeToRunInMiliseconds);
		}
	}
});
