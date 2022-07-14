import { allProductsData } from "/ProductsData/allProductsData.js";
import Storage from "./Storage.js";
import ShowSingleProduct from "./ShowSingleProduct.js";

const bestProductsContainer = document.querySelector(".best-products_wrapper");
const scrollBtns = [...document.querySelectorAll(".scroll")];

class ShowBestProducts {
  constructor() {
    const bestProducts = this.getAllProducts().filter(
      (p) => p.score === "best"
    );
    this.displayBestProducts(bestProducts);
    Storage.saveProducts(bestProducts);
    const products= document.querySelectorAll(".data-product");
    products.forEach((p)=>{
      p.addEventListener("click",(e)=>{
        e.preventDefault();
        this.getSingleProduct();
        const showSingleProduct= new ShowSingleProduct();
      });
    });

    scrollBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const button = event.target;
        if (button.classList.contains("right")) {
          bestProductsContainer.scrollLeft += 200;
        } else {
          bestProductsContainer.scrollLeft -= 200;
        }
      });
    });
  }

  getAllProducts() {
    return allProductsData;
  }

  displayBestProducts(products) {
    let result = "";
    products.forEach((item) => {
      result += `
      <a class="data-product" href="/singleProduct" data-id=${item.id}>
        <div class="product">
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
          <span class="product-price">$${item.price}</span>
        </div>
      </div>
      </a>
      `;
      bestProductsContainer.innerHTML = result;
    });
  }
  getSingleProduct() {
    const allProducts = document.querySelectorAll(".data-product");
    allProducts.forEach((item) => {
      const id = item.dataset.id;
      item.addEventListener("click", () => {
        const singleProduct = Storage.getProduct(id);
        Storage.saveProducts(singleProduct);
      });
    });
  
  }
}

export default new ShowBestProducts();
