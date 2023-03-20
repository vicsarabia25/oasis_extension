// Listen for the extension to be installed or updated, add a click listener, execute script, specify where to execute the script, and create a new popup window using the URL of the extension's popup page
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        chrome.windows.create({
          url: chrome.runtime.getURL('popup.html'),
          type: 'popup'
        });
      }
    });
  });
});
