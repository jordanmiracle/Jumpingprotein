var hamburger = document.querySelector(".hamburger");
	var menu = document.querySelector(".menu");

	hamburger.addEventListener("click", function(){
		menu.classList.toggle("active");
	})
