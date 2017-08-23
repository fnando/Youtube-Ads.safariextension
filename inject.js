(function(){
  if (window.top !== window) {
    return;
  }

  function skipYoutubeAds() {
    var video = document.querySelector('video');
    video.currentTime = video.duration;
  }

  safari.self.addEventListener('message', function(event) {
    skipYoutubeAds();
  }, false);

  window.addEventListener('keydown', function(event) {
    var trigger = event.shiftKey && event.metaKey && event.which === 89; // cmd-shift-Y


    if (trigger) {
      skipYoutubeAds();
    }
  }, false);
})();
