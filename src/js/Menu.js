const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".navbar-menu");
const closeMenuBtn = document.querySelector(".close");
const body = document.querySelector("body:not(.navbar-menu)");


class Menu {
  constructor() {
    // sticky Menu
    let sticky = navbar.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
    });

    // Mobile Menu
    menuBtn.addEventListener("click", this.showMenu);
    closeMenuBtn.addEventListener("click", this.closeMenu);
  }

  showMenu() {
    menu.style.opacity = "1";
    menu.style.left = "0";
    body.style.position = "fixed";
  }

  closeMenu() {
    menu.style.opacity = "0";
    menu.style.left = "-100vw";
    body.style.position = "static";
  }
}

export default new Menu();
