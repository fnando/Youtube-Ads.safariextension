(function(){
  // ignore iframes.
  if (window.top !== window) {
    return;
  }

  if (!safari.application) {
    return;
  }

  safari.application.addEventListener('command', function(event) {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('skipYoutubeAds');
  }, false);
})();
