// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.onUpdated.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
  if (changeInfo.status == 'complete') {
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
    // do your things

  }
});

