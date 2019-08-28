(function() {
	console.log("Running Injection Script Inject.js");   
	$('a').each(function() { 
		var $this = $(this),
		aHref = $this.attr('href');  //get the value of an attribute 'href'
		$this.attr('href', aHref.replace('https://github.com/Microsoft/azure-docs/','https://github.com/Microsoft/azure-docs-pr/'));//set the value of an attribute 'href'
	});
})();
