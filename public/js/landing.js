
// document.getElementById("myVideo").play();


const enterButton = document.getElementById("enterButton");
const pipboy = document.getElementById("myVideo");

function pipboyEnded() {
  console.log("Video Finished");
}

enterButton.onclick = function() {

  enterButton.remove();
  pipboy.removeAttribute("hidden");
  pipboy.play();

};
