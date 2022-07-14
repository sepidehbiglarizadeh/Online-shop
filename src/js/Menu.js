const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".navbar-menu");
const closeMenuBtn = document.querySelector(".close");
const body = document.querySelector("body:not(.navbar-menu)");
const navbarItem = document.querySelectorAll(".navbar-item");

class Menu {
  constructor() {
    // sticky Menu
    let sticky = navbar.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
    });

    // Mobile Menu
    menuBtn.addEventListener("click", () => {
      menu.classList.add("show-menu");
      body.style.position = "fixed";
    });
    closeMenuBtn.addEventListener("click", () => {
      menu.classList.remove("show-menu");
      body.style.position = "static";
    });

    navbarItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (menu.classList.contains("show-menu")) {
          menu.classList.remove("show-menu");
          body.style.position = "static";
        }
      });
    });
  }
}

export default new Menu();
