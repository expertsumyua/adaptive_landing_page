"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
let body = document.querySelector("body");
burger.onclick = function () {
	console.log(burger.style.display);
	console.log(menu.style.display);
	if (menu.style.display == "none" || menu.style.display == "") {
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
	else {
		menu.style.display = "none";
		menu.style.margin = "0px";
	}
}

window.onresize = function (event) {
	// console.log(bodyy.offsetWidth);
	if (bodyy.offsetWidth > 650 && (burger.style.display == "none" || burger.style.display == "")) {
		console.log(body.offsetWidth);
		menu.style.margin = "0px";
		menu.style.display = "block";
	}
}
