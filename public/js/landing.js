
// document.getElementById("myVideo").play();


const enterButton = document.getElementById("enterButton")
const pipboy = document.getElementById("myVideo")

enterButton.onclick = function() {

  enterButton.remove();
  pipboy.removeAttribute("hidden");
  pipboy.play();

}
