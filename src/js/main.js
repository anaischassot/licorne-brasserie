var burger = document.querySelector(".menu-burger");
var menu = document.querySelector(".menu");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
