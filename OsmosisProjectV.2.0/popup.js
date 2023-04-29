// Record button logic
let data = [];

document.getElementById('record-btn').addEventListener('click', function() {
  // Copy the page information
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'copyPageInfo' }, function(response) {
      // Add the copied information to the data array
      data.push(response);
      console.log('Recorded page information:', data);
    });
  });
});

// Generate button logic
document.getElementById('generate-btn').addEventListener('click', function() {
  // Create a new page with the stored information
  let newTabUrl = chrome.extension.getURL('newtab.html');
  chrome.tabs.create({ url: newTabUrl }, function(tab) {
    // Send the stored information to the new page
    chrome.tabs.sendMessage(tab.id, { action: 'loadPageInfo', data: data }, function(response) {
      console.log('Generated new page with recorded information');
      // Clear the data array and close the popup
      data = [];
      chrome.runtime.sendMessage('closePopup');
    });
  });
});

// Close button logic
document.getElementById('close-btn').addEventListener('click', function() {
  // Clear the data array and close the popup
  data = [];
  chrome.runtime.sendMessage('closePopup');
});
