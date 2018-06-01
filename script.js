var css = document.querySelector("textarea");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.getElementById("copy-style");
var button2 = document.getElementById("random-style");
var tooltip = document.querySelector("span");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	showGradidient();

}
function showGradidient() {
	css.textContent = body.style.background + ";";
	tooltip.setAttribute("class","tooltip");
}
function copyStyle() {
  var styleText = document.getElementById("style-field");
  styleText.select();
  document.execCommand("copy");
  tooltip.classList.toggle("tooltip");
}
function randomColors() {
	var rgb1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	var rgb2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	body.style.background = "linear-gradient(to right, rgb(" + rgb1[0] + "," + rgb1[1] + "," + rgb1[2] + "), rgb(" + rgb2[0] + "," + rgb2[1] + "," + rgb2[2] + ")";
	showGradidient();
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button1.addEventListener("click", copyStyle);
button2.addEventListener("click", randomColors);