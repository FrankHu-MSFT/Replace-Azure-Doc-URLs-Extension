# Replace-Azure-Doc-URLs-Extension
This extension is currently a WIP. This will modify all the URLs with azure-docs and change it to azure-docs-pr

# Usage

This will basically add -pr to the azure doc links. This plugin will onlly run on github issues. 

It basically utilizes some regex to find and replace the azure-docs and adds the -pr to the link.


![](Gifs/Replacing-PR.gif)

# Chrome Store Plugin Link
https://chrome.google.com/webstore/detail/add-pr/lglkecaehnimhnaefbnienkembookfbo

# Known Issues
There is a 1 minute grace period you can access the loaded page and for the injection to work properly. After actually bringing the tab into focus, the injection will work properly otherwise it won't make the change to the html. I think it might be due to the fact I'm using JQuery and jquery might need the page to actually be accessed before running properly. 

# Support 
If there are any issues in regards to this sample, please file a GitHub issue. This sample is not supported by Azure Support or Microsoft.
