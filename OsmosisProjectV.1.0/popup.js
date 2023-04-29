document.addEventListener('DOMContentLoaded', function() {
  var recordButton = document.getElementById('record');
  var saveButton = document.getElementById('save');
  var sectionSelect = document.getElementById('section-select');

  recordButton.addEventListener('click', function() {
    console.log('Record button clicked.');
    saveButton.disabled = false;
    sectionSelect.disabled = false;
  });

/*   saveButton.addEventListener('click', function() {
    document.getElementById("save-button").addEventListener("click", function() {
      // Get the selected section
      var selectedSection = document.getElementById("section-dropdown").value;
    
      // Save the selected section to temporary storage
      chrome.storage.local.set({ "selectedSection": selectedSection }, function() {
        console.log("Section saved: " + selectedSection);
      });
    });    
  }); */
  saveButton.addEventListener('click', function() {
    // Get the selected section
    var selectedSection = document.getElementById("section-dropdown").value;
  
    // Save the selected section to temporary storage
    chrome.storage.local.set({ "selectedSection": selectedSection }, function() {
      console.log("Section saved: " + selectedSection);
    });
  }); 

 // Add an event listener for link clicks
document.addEventListener('click', function(event) {
  // Check if the clicked element is a link
  if (event.target.tagName.toLowerCase() === 'a') {
    // Prevent the default link click behavior
    event.preventDefault();

    // Get the URL of the clicked link
    var url = event.target.href;

    // Use the chrome.tabs API to load the content of the link
    chrome.tabs.create({ url: url }, function(tab) {
      // Update the extension UI to show the loaded content
      // For example, you can update the section dropdown menu with the sections in the loaded content
    });
  }
});



});
