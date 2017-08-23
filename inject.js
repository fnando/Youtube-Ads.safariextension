(function YoutubeAdsExtension(){
  if (window.top !== window) {
    return;
  }

  if (!video) {
    setTimeout(YoutubeAdsExtension, 100);
    return;
  }

  function getVideo() {
    return document.querySelector('video');
  }

  function skipYoutubeAds() {
    var video = getVideo();
    video.currentTime = video.duration;
  }

  function autoSkipAds() {
    var element = document.querySelector('.ad-showing');

    if (element) {
      skipYoutubeAds();
    }
  }

  safari.self.addEventListener('message', function(event) {
    setTimeout(skipYoutubeAds, 200);
  }, false);

  window.addEventListener('keydown', function(event) {
    var trigger = event.shiftKey && event.metaKey && event.which === 89; // cmd-shift-Y

    if (trigger) {
      skipYoutubeAds();
    }
  }, false);

  setInterval(function(){
    var video = getVideo();

    if (video.currentTime > 0) {
      autoSkipAds();
    }
  }, 1000);
})();
