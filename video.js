
const video = document.getElementById('featureVideo');
const playOverlay = document.getElementById('videoPlayOverlay');

// Show play icon when paused, hide when playing
function updateOverlay() {
  playOverlay.style.display = video.paused ? 'block' : 'none';
}

// Toggle play/pause on video or overlay click
video.addEventListener('click', function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
playOverlay.addEventListener('click', function (event) {
  event.stopPropagation(); // prevent event from reaching video element
  video.play();
});

video.addEventListener('play', updateOverlay);
video.addEventListener('pause', updateOverlay);

// On page load, show overlay if video is paused
document.addEventListener('DOMContentLoaded', updateOverlay);
