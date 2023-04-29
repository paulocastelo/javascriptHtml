// Get stored information from background page
chrome.runtime.sendMessage({action: "getStoredInformation"}, function(response) {
    // Create a new HTML page with the stored information
    var newPage = "<html><head><title>Generated Page</title></head><body>";
    newPage += "<h1>Generated Page</h1>";
    
    for (var i = 0; i < response.storedInformation.length; i++) {
      newPage += "<p>" + response.storedInformation[i] + "</p>";
    }
    
    newPage += "</body></html>";
  
    // Open the new page in a new tab
    var tab = window.open();
    tab.document.write(newPage);
  
    // Clear the stored information in the background page
    chrome.runtime.sendMessage({action: "clearStoredInformation"});
  });
  