$(function () {
  var w = $(window).width()
  var h = $(window).height()
 
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      width: w,
      height: h,
      videoId: 'c7_kqMFDE8c',
      playerVars; {
        autoplay:1,
    });
  }
});