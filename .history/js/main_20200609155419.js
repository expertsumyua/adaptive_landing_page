var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("header nav");
// var i = 0;
burger.onclick = function () {

	// menu.style.display = "block";

	if (menu.style.display == "none") {
		burger.style.display = "none";
		menu.style.display = "block";
		burger.style.display = "block";
	}
	// else if (menu.style.display == "block") { menu.style.display = "none"; }
}
