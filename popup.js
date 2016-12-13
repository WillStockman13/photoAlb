chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "localhost:3000";
  chrome.tabs.create({ url: newURL });
});