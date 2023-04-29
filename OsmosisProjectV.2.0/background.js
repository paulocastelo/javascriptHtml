chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "generatePage") {
      const dataString = JSON.stringify(dataArray);
      const encodedData = encodeURIComponent(dataString);
      const url = chrome.runtime.getURL(`generated.html?data=${encodedData}`);
      chrome.tabs.create({ url });
      dataArray = [];
    }
  });
  // Listen for messages from the popup
/* chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'closePopup') {
    // Close the popup
    chrome.runtime.sendMessage('closePopup');
  }
}); */
