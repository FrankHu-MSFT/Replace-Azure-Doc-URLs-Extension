/**
 * Add your Analytics tracking ID here.
 *
var _AnalyticsCode = 'UA-147217527-1';

/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 *

// Standard Google Universal Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
ga('create', _AnalyticsCode, 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
ga('send', 'pageview', '/action-tracked.html');
*/

// I cannot figure out how to get this google analytics to work in the Javascript injection, i don't know if it's supposed to work .

// Performing GA tracking in background.js. 

// Possible solution below? 
// https://stackoverflow.com/questions/23895377/sending-message-from-a-background-script-to-a-content-script-then-to-a-injected/23895822


// Helpful information
// https://www.optimizesmart.com/beginners-guide-to-javascript-for-google-analytics/

(function() {
	console.log("Running Injection Script Inject.js");   
	
	$('a').each(function() { 
		var $this = $(this),aHref = $this.attr('href');  //get the value of an attribute 'href'
		var replaced = 0;
		// Checks if this link is an azure-docs link
		if($this.attr('href').indexOf("https://github.com/Microsoft/azure-docs/") > -1){
			// Pushing track event to _gaq. Not sure how this is supposed to work yet... 
			
			//_gaq.push(['_trackEvent', 'Azure-Docs-Pr-Change', 'ActionPerformed', 'AVG time saved 30 seconds and 10 clicks/types each time.']);
			// ga.push(['_trackEvent', "1", 'ActionPerformed']);
			
			replaced=1;
			console.log($this.attr('href'));
			$this.attr('href', aHref.replace('https://github.com/Microsoft/azure-docs/','https://github.com/Microsoft/azure-docs-pr/'));//set the value of an attribute 'href'
		} else if(Boolean(replaced)){
			throw Error("Replaced value, sending message to main tab. " + tabId);	
		}
	});
})();

