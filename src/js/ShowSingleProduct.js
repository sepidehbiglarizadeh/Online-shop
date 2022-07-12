
import singleProduct from "/client/pages/singleProduct.js";

export default class ShowSingleProduct {
  constructor() {
    const links = document.querySelectorAll(".data-product");
    links.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.navigateTo(item.href);
        this.showProduct();
      });
    });
  }

  router(product) {
    const routes = [
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
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.router();
  }

  showProduct() {
    const singleProduct = JSON.parse(localStorage.getItem("products"));
    const singleProductContainer = document.querySelector(".single-product");
    let result = "";
    result = `<div class="single-product_Smallimages">
    <div>
      <a href="#image1">
        <img src=${singleProduct.imageUrl} />
      </a>
    </div>
    <div>
      <a href="#image2">
        <img src=${singleProduct.imageUrl2} />
      </a>
    </div>
    <div>
      <a href="#image3">
        <img src=${singleProduct.imageUrl3} />
      </a>
    </div>
    <div>
      <a href="#image4">
        <img src=${singleProduct.imageUrl4} />
      </a>
    </div>
  </div>
  <div class="single-product_Bigimages">
    <div id="image1" class="slide fade">
      <img src=${singleProduct.imageUrl} />
    </div>
    <div id="image2" class="slide fade">
      <img src=${singleProduct.imageUrl2} />
    </div>
    <div id="image3" class="slide fade">
      <img src=${singleProduct.imageUrl3} />
    </div>
    <div id="image4" class="slide fade">
      <img src=${singleProduct.imageUrl4} />
    </div>
  </div>

  <div class="single-product_circles">
    <i class="fa-solid fa-chevron-up prev"></i>
    <i class="fa-solid fa-chevron-left prev"></i>
    <i class="fa-solid fa-circle dot active" data-id="1"></i>
    <i class="fa-solid fa-circle dot" data-id="2"></i>
    <i class="fa-solid fa-circle dot" data-id="3"></i>
    <i class="fa-solid fa-circle dot" data-id="4"></i>
    <i class="fa-solid fa-chevron-right next"></i>
    <i class="fa-solid fa-chevron-down next"></i>
  </div>

  <section class="single-detail_box">
    <div class="single-product_details">
      <h2 class="single-product_title">${singleProduct.title}</h2>
      <div class="single-product_content">
        <span>$${singleProduct.price}</span>
        <div class="single-product_wishlist">
          <i class="fa-regular fa-heart"></i>
          <span>Add TO WISHLIST</span>
        </div>
      </div>
      <span class="single-product_text">Size:</span>
      <ul class="single-product_sizes">
        <li class="size">
          <input type="radio" name="size" id="xs" value="XS">
          <label for="xs">XS</label>
        </li>
        <li class="size">
          <input type="radio" name="size" id="s" value="S">
          <label for="s">S</label>
        </li>
        <li class="size">
          <input type="radio" name="size" id="m" value="M">
          <label for="m">M</label>
        </li>
        <li class="size">
          <input type="radio" name="size" id="l" value="L">
          <label for="l">L</label>
        </li>
        <li class="size">
          <input type="radio" name="size" id="xl" value="XL">
          <label for="xl">XL</label>
        </li>
      </ul>
      <button class="btn btn--yellow add-to-cart" data-id=${singleProduct.id}>Add to cart</button>
    </div>

    <div class="single-product_description">
      <ul class="single-product_list">
        <li class="single-product_listitem">Description</li>
        <li class="single-product_listitem">Model size: S</li>
        <li class="single-product_listitem">Model height: 175 cm</li>
        <li class="single-product_listitem">Colour: Gray</li>
      </ul>
      <ul class="single-product_list">
        <li class="single-product_listitem">Composition</li>
        <li class="single-product_listitem">Secondary fabric</li>
        <li class="single-product_listitem">95% polyester</li>
      </ul>
      <ul class="single-product_list">
        <li class="single-product_listitem">Secondary fabric</li>
        <li class="single-product_listitem">5% elastene</li>
      </ul>
      <ul class="single-product_list">
        <li class="single-product_listitem">Main fabric</li>
        <li class="single-product_listitem">47% polyester</li>
      </ul>
      <ul class="single-product_list">
        <li class="single-product_listitem">lining</li>
        <li class="single-product_listitem">100% polyester</li>
      </ul>
    </div>
  </section>`;
    singleProductContainer.innerHTML = result;
  }
}
