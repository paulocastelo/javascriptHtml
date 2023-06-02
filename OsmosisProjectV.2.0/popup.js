let data = [];

// Record button click event listener
document.getElementById('record-btn').addEventListener('click', function() {
  // Copy page information and store in background page
  let pageInformation = document.documentElement.innerHTML;
  data.push(pageInformation);
});

// Generate button click event listener
document.getElementById('generate-btn').addEventListener('click', function() {
  // Create new tab with page information
  chrome.runtime.sendMessage({action: "createNewTab", information: data});
  // Clear data
  data = [];
});

// Close button click event listener
document.getElementById('close-btn').addEventListener('click', function() {
  // Clear data
  data = [];
  // Close popup
  window.close();
});
