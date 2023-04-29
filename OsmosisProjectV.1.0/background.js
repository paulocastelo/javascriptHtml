/* chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  }); */
  // Step 3: Show the extension when clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id,
    { file: 'content.js' },
    function(results) {
      console.log('Content script executed');
      // Do something with the results
    }
  );
});

// Step 4: Show options to select sections of the page to save
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'showOptions') {
    // TODO: Show options to select sections of the page to save
    console.log('Showing options:', request.options);
  }
});

// Step 5: Save the selected section of the page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'saveSection') {
    // TODO: Save the selected section of the page
    console.log('Saving section:', request.section);
  }
});

// Step 6: Load the content of a new page when a link is clicked
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  // TODO: Check if the user clicked on a link within the page
  console.log('Loading new page:', details.url);
  
  // Send a message to the content script to load the new page
  chrome.tabs.sendMessage(details.tabId, {
    action: 'loadPage',
    url: details.url
  });
});

// Step 7: Generate a page with all the appended sections
chrome.browserAction.onClicked.addListener(function(tab) {
  // TODO: Generate the page with all the appended sections
  console.log('Generating page with all sections');
  
  // Open a new tab with the generated page
  chrome.tabs.create({ url: 'generated-page.html' });
});

// Step 8: Handle the 'loadPage' message and load the content of a new page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'loadPage') {
    console.log('Loading page:', request.url);
    
    // Use the Chrome Tabs API to update the tab's URL and load the new page
    chrome.tabs.update(sender.tab.id, { url: request.url }, function() {
      // Send a response to the content script to indicate that the page has been loaded
      sendResponse({ message: 'Page loaded successfully!' });
    });
    
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

// Step 9: Handle the 'saveSection' message and save the selected section to storage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'saveSection') {
    console.log('Saving section:', request.section);
    
    // Use the Chrome Storage API to retrieve the existing sections array
    chrome.storage.local.get(['sections'], function(result) {
      // Append the new section to the existing array
      var sections = result.sections || [];
      sections.push(request.section);
      
      // Use the Chrome Storage API to save the updated sections array
      chrome.storage.local.set({ sections: sections }, function() {
        console.log('Section saved successfully!');
        
        // Send a response to the content script to indicate that the section has been saved
        sendResponse({ message: 'Section saved successfully!' });
      });
    });
    
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

// Step 10: Handle the 'loadPage' message and retrieve the saved sections from storage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'loadPage') {
    console.log('Loading page...');
    
    // Use the Chrome Storage API to retrieve the saved sections
    chrome.storage.local.get(['sections'], function(result) {
      var sections = result.sections || [];
      
      // Send a response to the content script with the saved sections
      sendResponse({ message: 'Page loaded successfully!', sections: sections });
    });
    
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

