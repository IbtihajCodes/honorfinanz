"use strict";

const sidebarBtn = document.getElementById("sidebar-btn");
const website = document.querySelector(".toggle-blur");
const website1 = document.querySelector(".toggle-blur1");
const website2 = document.querySelector(".toggle-blur2");
const body = document.querySelector("body");
const closeSidebarBtn = document.querySelector(".sidebarclose-btn");
const sidebar = document.querySelector(".sidebar-container");

// Side Bar - Blur
sidebarBtn.addEventListener("click", function () {
  website.classList.toggle("blur");
  website1.classList.toggle("blur");
  website2.classList.toggle("blur");
  body.classList.toggle("no-scroll");
});

// Side Bar - Close

closeSidebarBtn.addEventListener("click", function () {
  console.log("1");
  sidebar.classList.add("display-none");
  website.classList.remove("blur");
  website1.classList.remove("blur");
  website2.classList.remove("blur");
  body.classList.remove("no-scroll");
});

// 3 Hover Cards in Fee-Advice Section
const card = document.querySelector(".fee-advice-card");
const card2 = document.querySelector(".fee-advice-card-2");
const card3 = document.querySelector(".fee-advice-card-3");
const link = document.querySelector(".hover-link");
const link2 = document.querySelector(".hover-link2");
const link3 = document.querySelector(".hover-link3");
card.addEventListener("mouseenter", function () {
  link.classList.toggle("d-none");
});
card.addEventListener("mouseleave", function () {
  link.classList.toggle("d-none");
});
card2.addEventListener("mouseenter", function () {
  link2.classList.toggle("d-none");
});
card2.addEventListener("mouseleave", function () {
  link2.classList.toggle("d-none");
});
card3.addEventListener("mouseenter", function () {
  link3.classList.toggle("d-none");
});
card3.addEventListener("mouseleave", function () {
  link3.classList.toggle("d-none");
});
