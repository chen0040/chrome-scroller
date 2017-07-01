// content.js
var scrollInterval = null; 
var scrollDelta = 0.2;
var scrollAmount = 0;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "about" ) {
      chrome.runtime.sendMessage({"message": "open_about", "url": "https://github.com/chen0040/chrome-scroller"});
    } else if(request.message === 'enable_scroll') {
        if(scrollInterval != null) {
            clearInterval(scrollInterval);
        }
        scrollInterval = setInterval(function() {
            scrollAmount += scrollDelta;
            if(scrollAmount < 1) {
                return;
            } 
            var y = $(window).scrollTop();  //your current y position on the page
            $(window).scrollTop(y + scrollAmount);
            scrollAmount = 0;
        }, 50);
    } else if(request.message === 'disable_scroll') {
        if(scrollInterval != null) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    } else if(request.message === 'set_scroll_delta') {
        scrollDelta = request.delta;
    }
  }
);