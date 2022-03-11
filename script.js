const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-items");

const arrowDown = document.querySelector(".arrow-down");
const mainSection = document.querySelector("main");

const showMenu = () => {
  menuButton.classList.toggle("active");
  menuItems.classList.toggle("active");
};

menuButton.addEventListener("click", showMenu);
