let dataArray = [];

document.getElementById("recordBtn").addEventListener("click", () => {
  dataArray = [];
  chrome.tabs.executeScript({
    file: "content.js"
  });
});

document.getElementById("generateBtn").addEventListener("click", () => {
  chrome.tabs.create({
    url: chrome.extension.getURL("generated.html")
  });
});

document.getElementById("closeBtn").addEventListener("click", () => {
  dataArray = [];
  window.close();
});

// Get references to the buttons in the popup
const recordBtn = document.getElementById('record-btn');
const generateBtn = document.getElementById('generate-btn');
const closeBtn = document.getElementById('close-btn');

// Create an empty array to store page information
let pageInfo = [];

// Add click event listeners to the buttons
recordBtn.addEventListener('click', function() {
  // Get the current tab's page information
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    const url = tab.url;
    const title = tab.title;

    // Add the page information to the array
    pageInfo.push({ url: url, title: title });
  });
});

generateBtn.addEventListener('click', function() {
  // Open a new tab with the stored page information
  const newTab = window.open('', '_blank');
  newTab.document.write('<html><head><title>Osmosis Generated Page</title></head><body>');

  // Loop through the stored page information and add it to the new tab
  for (let i = 0; i < pageInfo.length; i++) {
    const page = pageInfo[i];
    newTab.document.write(`<h1>${page.title}</h1><p>${page.url}</p>`);
  }

  newTab.document.write('</body></html>');
  newTab.document.close();

  // Clear the page information array
  pageInfo = [];
});

closeBtn.addEventListener('click', function() {
  // Close the popup
  window.close();
});
