(function ($) {
	"use strict";
	// preloader
	$("#preloader").delay(500).fadeOut("slow");




	const hamburger = document.getElementById("hamburger");
	const navLinks = document.getElementById("navLinks");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navLinks.classList.toggle("active");
	});
	window.addEventListener("scroll", function () {
		let header = document.querySelector(".header_area");
		if (window.scrollY > 50) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});

	var swiper = new Swiper(".mySwiper1", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		loop: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		loop: true,
		navigation: {
			prevEl: ".arrow-prev",
			nextEl: ".arrow-next",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		pagination: {
			el: ".myswiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});
	$(document).ready(function () {
		$('select').niceSelect();
	});
	const openModal = document.getElementById("openModal");
	const closeModal = document.getElementById("closeModal");
	const modalOverlay = document.getElementById("modalOverlay");

	// Open popup
	openModal.addEventListener("click", () => {
		modalOverlay.style.display = "block";
	});

	// Close popup
	closeModal.addEventListener("click", () => {
		modalOverlay.style.display = "none";
	});

	// Close when clicking outside modal
	window.addEventListener("click", (e) => {
		if (e.target === modalOverlay) {
			modalOverlay.style.display = "none";
		}
	});
	// scrollUp
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

})(jQuery);