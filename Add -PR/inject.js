// this is the code which will be injected into a given page...
(function() {
	var anchors = document.getElementsByTagName('a');
	for(var i=0; i < anchors.length; i++){
		console.log(anchors[i].href);
		if(anchors[i].href.contains('azure-docs')){
			console.log(anchors[i].href);
			console.log('passed if');
			anchors[i].href.replace('azure-docs', 'azure-docs-pr');
		}
	}
})();
