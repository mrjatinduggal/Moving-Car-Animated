let audio = new Audio("sounds/song.mp3");
let content1 = document.getElementById("x1");
let content2 = document.getElementById("x2");

audio.loop = true;
document.addEventListener("click", function () {
  audio.play();
  content1.textContent = "Refresh to stop music";
  content2.textContent = "Refresh to stop music";
  content1.style.opacity = 0.5;
  content2.style.opacity = 0.5;
});
