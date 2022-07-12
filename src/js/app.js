import womenProducts from "../../client/pages/womenProducts.js";
import menProducts from "../../client/pages/menProducts.js";
import ShowAllProducts from "./ShowAllProducts.js";

const links = document.querySelectorAll(".data-link");
class App {
  constructor() {
    // window.addEventListener("popstate", this.router());

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
    ];
    const potentialRoutes = routes.map((item) => {
      return {
        route: item,
        isMatch: location.pathname === item.path,
      };
    });
    let match = potentialRoutes.find((route) => route.isMatch);
    if (match) document.querySelector(".main").innerHTML = match.route.view();
    if (match.route.path === "/womenProducts")
      ShowAllProducts.displayWomenProducts();
    if (match.route.path === "/menProducts")
      ShowAllProducts.displayMenProducts();
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.router();
  }
}

export default new App();
