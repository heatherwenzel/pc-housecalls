"use strict";

function toggleMenu(id) {
  let nav = document.getElementById(id);
  let menu = document.getElementById("menu-icon");
  if (nav.style.display == "flex") {
    nav.style.display = "none";
    menu.innerText = "menu";
  } else {
    nav.style.display = "flex";
    menu.innerText = "close";
  }
}