/**
 * Add your Analytics tracking ID here.
 */
var _AnalyticsCode = 'UA-147217527-1';

/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_ActionPerformed']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();


(function() {
	console.log("Running Injection Script Inject.js");   
	$('a').each(function() { 
		var $this = $(this),aHref = $this.attr('href');  //get the value of an attribute 'href'
		
		// Checks if this link is an azure-docs link
		if($this.attr('href').indexOf("https://github.com/Microsoft/azure-docs/") > -1){
			// Need to insert google analytics code here.
			_gaq.push(['_trackEvent', 'Azure-Docs-Pr-Change', 'ActionPerformed', 'AVG time saved 30 seconds and 10 clicks/types each time.']);
			console.log($this.attr('href'));
			$this.attr('href', aHref.replace('https://github.com/Microsoft/azure-docs/','https://github.com/Microsoft/azure-docs-pr/'));//set the value of an attribute 'href'
		}
	});
})();

