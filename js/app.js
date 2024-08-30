"use strict";

const hamBurger = document.querySelector(".size-6");
const sideBar = document.querySelector(".nav-ul-mobile");
const navBar = document.querySelector("nav");
const infoBar = document.querySelector(".information-section");
const body = document.querySelector("body");
const closeBtn = document.getElementById("close-btn");
const heroPage = document.querySelector(".hero-page");

// Side Bar :
// ===>> Open - SideBar Button <<===  //
hamBurger.addEventListener("click", function () {
  sideBar.classList.remove("d-none");
  navBar.classList.add("blur-sidebar");
  infoBar.classList.add("blur-sidebar");
  heroPage.classList.add("blur-sidebar");
  body.classList.add("no-scroll");
  console.log("SideBar was opened");
});

// ===>> Close - SideBar Button <<===  //
closeBtn.addEventListener("click", function () {
  sideBar.classList.add("d-none");
  navBar.classList.remove("blur-sidebar");
  infoBar.classList.remove("blur-sidebar");
  heroPage.classList.remove("blur-sidebar");
  body.classList.remove("no-scroll");
  console.log("SideBar was closed");
});
