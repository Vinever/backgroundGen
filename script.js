var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background;
}

function sortRGB(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function random_bg_color() {
    var bgColor = sortRGB();
    var bgColor2 = sortRGB();
    
	body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor 
	+ ", " 
	+ bgColor2 
	+ ")";

	css.textContent = body.style.background;
}

/* https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
} */

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);