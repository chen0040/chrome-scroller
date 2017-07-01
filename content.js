// content.js
var scrollInterval = null; 
var scrollDelta = 10;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "about" ) {
      chrome.runtime.sendMessage({"message": "open_about", "url": "https://github.com/chen0040/chrome-scroller"});
    } else if(request.message === 'enable_scroll') {
        if(scrollInterval != null) {
            clearInterval(scrollInterval);
        }
        scrollInterval = setInterval(function() {
            var y = $(window).scrollTop();  //your current y position on the page
            $(window).scrollTop(y + scrollDelta);
        }, 500);
    } else if(request.message === 'disable_scroll') {
        if(scrollInterval != null) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }
  }
);