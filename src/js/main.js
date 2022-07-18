import Menu from "./Menu.js";
import Cart from "./Cart.js";
import ShowBestProducts from "./ShowBestProducts.js";
import App from "./App.js";


document.addEventListener("DOMContentLoaded", () => {
  Cart.cartLogic();
  window.addEventListener("popstate",App.router);
});
