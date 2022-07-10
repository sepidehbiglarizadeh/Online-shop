import { bestProductsData } from "/ProductsData/bestProducts.js";

const bestProductsContainer = document.querySelector(".best-products_wrapper");
const scrollBtns = [...document.querySelectorAll(".scroll")];

class ShowBestProducts {
  constructor() {
    const bestProducts = this.getBestProducts();
    this.displayBestProducts(bestProducts);

    scrollBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const button = event.target;
        if (button.classList.contains("right")) {
          bestProductsContainer.scrollLeft += 200;
          console.log("button");
        } else {
          bestProductsContainer.scrollLeft -= 200;
        }
      });
    });
  }

  getBestProducts() {
    return bestProductsData;
  }

  displayBestProducts(products) {
    let result = "";
    products.forEach((item) => {
      result += `<div class="product">
      <img src=${item.imageUrl}>
      <div class="product-gender">
        <span>${item.gender}</span>
        <div class="product-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <p class="product_title">${item.title}</p>
      <div class="product-price_wrapper">
        <span class="product-price">$${item.discount}</span>
        <span class="product-discount">$${item.price}</span>
      </div>
    </div>`;
      bestProductsContainer.innerHTML = result;
    });
  }
}

export default new ShowBestProducts();
