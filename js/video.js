var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  var video = document.querySelector("video");
  video.autoplay = false;
  video.loop = false;

  function updateVolume() {
    var volumeDisplay = document.getElementById("volume");
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
  }

  document.getElementById("play").addEventListener("click", function () {
    video.play();
    updateVolume();
  });

  document.getElementById("pause").addEventListener("click", function () {
    video.pause();
  });

  document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9; 
    console.log("New speed is", video.playbackRate);
  });

  document.getElementById("faster").addEventListener("click", function () {
    video.playbackRate /= 0.9; 
    console.log("New speed is", video.playbackRate);
  });

  document.getElementById("skip").addEventListener("click", function () {
    if (video.currentTime + 10 > video.duration) {
      video.currentTime = 0;
      console.log("Going back to beginning");
    } else {
      video.currentTime += 10;
    }
    console.log("Current location", video.currentTime);
  });

  document.getElementById("mute").addEventListener("click", function () {
    video.muted = !video.muted;
    document.getElementById("mute").textContent = video.muted
      ? "Unmute"
      : "Mute";
  });

  document.getElementById("slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolume();
  });

  document.getElementById("vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  document.getElementById("orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});