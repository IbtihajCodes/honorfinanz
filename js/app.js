"use strict";

const hamBurger = document.querySelector(".size-6");
const sideBar = document.querySelector(".nav-ul-mobile");
const navBar = document.querySelector("nav");
const infoBar = document.querySelector(".information-section");
const body = document.querySelector("body");
const closeBtn = document.getElementById("close-btn");
const heroPage = document.querySelector(".hero-page");

// Side Bar
hamBurger.addEventListener("click", function () {
  sideBar.classList.remove("d-none");
  navBar.classList.add("blur-sidebar");
  infoBar.classList.add("blur-sidebar");
  heroPage.classList.add("blur-sidebar");
  body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.add("d-none");
  navBar.classList.remove("blur-sidebar");
  infoBar.classList.remove("blur-sidebar");
  heroPage.classList.remove("blur-sidebar");
  body.classList.remove("no-scroll");
});

// Image Slider
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth + 70; // Adjusted for the margin

let currentIndex = 0;

prevButton.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length / 2 - 1;
        slideTrack.style.transition = 'none';
        slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        setTimeout(() => {
            slideTrack.style.transition = 'transform 0.5s ease';
            currentIndex--;
            slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 0);
    } else {
        slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

nextButton.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= slides.length / 2) {
        currentIndex = 0;
        slideTrack.style.transition = 'none';
        slideTrack.style.transform = `translateX(0)`;
        setTimeout(() => {
            slideTrack.style.transition = 'transform 0.5s ease';
            currentIndex++;
            slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 0);
    } else {
        slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});