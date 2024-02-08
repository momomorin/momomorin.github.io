var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'c7_kqMFDE8c',
    events: {
      'onReady': onPlayerReady,
    },
    playerVars: {
      'playsinline': 1,
    }
  });
}
 
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}
