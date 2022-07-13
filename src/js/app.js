import womenProducts from "../../client/pages/womenProducts.js";
import menProducts from "../../client/pages/menProducts.js";
import singleProduct from "/client/pages/singleProduct.js";
import ShowAllProducts from "./ShowAllProducts.js";
import ShowSingleProduct from "./ShowSingleProduct.js";
import Cart from "./Cart.js";

class App {
  constructor() {
    const links = document.querySelectorAll(".data-link");
    links.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.navigateTo(item.href);
      });
    });
  }


  router() {
    const routes = [
      { path: "/womenProducts", view: womenProducts },
      { path: "/menProducts", view: menProducts },
      { path: "/singleProduct", view: singleProduct },
    ];
    const potentialRoutes = routes.map((item) => {
      return {
        route: item,
        isMatch: location.pathname === item.path,
      };
    });
    let match = potentialRoutes.find((route) => route.isMatch);
    if (match) document.querySelector(".main").innerHTML = match.route.view();
    if (match.route.path === "/womenProducts"){
      ShowAllProducts.displayWomenProducts();
      const showSingleProduct= new ShowSingleProduct();
    }   

    if (match.route.path === "/menProducts"){
      ShowAllProducts.displayMenProducts();
      const showSingleProduct= new ShowSingleProduct();
    }
  }

    

  navigateTo(url) {
    history.pushState(null, null, url);
    this.router();
  }
}

export default new App();
