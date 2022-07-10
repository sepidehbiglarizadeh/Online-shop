import Menu from "./Menu.js";
import Cart from "./Cart.js";
import ShowBestProducts from "./ShowBestProducts.js"

document.addEventListener("DOMContentLoaded",()=>{
    Cart.setupApp();
    Cart.cartLogic();
});
