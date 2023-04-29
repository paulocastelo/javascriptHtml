// Listen for messages from background page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "generateNewPage") {
    // Get stored page information and open in new tab
    chrome.storage.local.get("pageInformation", function(data) {
      var newTab = window.open(chrome.runtime.getURL("newtab.html"));
      newTab.addEventListener("load", function() {
        newTab.document.getElementById("page-information").innerHTML = data.pageInformation;
      });
    });
    // Clear stored page information
    chrome.storage.local.remove("pageInformation");
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "recordPageInformation") {
    // Copy page information and store in background page
    var pageInformation = document.documentElement.outerHTML;
    chrome.runtime.sendMessage({action: "storeInformation", information: pageInformation});
  }
});
