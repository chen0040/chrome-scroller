// popup.js
window.onload = function() {
    document.getElementById("btnAbout").onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "about"});
          });
    };
    document.getElementById("btnEnableScroll").onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "enable_scroll"});
          });
    };
    document.getElementById("btnDisableScroll").onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "disable_scroll"});
          });
    };
    
    
}