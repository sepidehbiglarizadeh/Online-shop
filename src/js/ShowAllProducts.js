import { allProductsData } from "/ProductsData/allProductsData.js";
import Storage from "./Storage.js";

class ShowAllProducts {
  constructor() {
    document.addEventListener("click", (e) => this.showSortAndFilterItems(e));
  }

  getAllProducts() {
    return allProductsData;
  }

  productsContent(products) {
    const womenProductsContainer = document.querySelector(".products-section");
    let result = "";
    products.forEach((item) => {
      result += `<div class="product" data-id=${item.id}>
          <img src= ${item.imageUrl} />
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
        </div>`;
      womenProductsContainer.innerHTML = result;
    });
  }

  displayWomenProducts() {
    const womenProducts = this.getAllProducts().filter(
      (item) => item.gender.toLowerCase() === "women"
    );
    this.productsContent(womenProducts);
    Storage.saveProducts(womenProducts);
    this.getSingleProduct();
    // sort women products
    const sortItems = document.querySelector(".sort-items");
    sortItems.addEventListener("click", (e) =>
      this.sortProducts(e, womenProducts)
    );
    // show number of products
    const allProductsNum = document.querySelector(".p-number");
    allProductsNum.innerText = womenProducts.length;
    // filter products
    const filters = document.querySelectorAll(".filter-item");
    filters.forEach((item) => {
      item.addEventListener("click", (e) => {
        const filterText = e.target.innerText.toLowerCase();
        const filteredProducts = womenProducts.filter((item) => {
          return item.type.includes(filterText);
        });
        this.productsContent(filteredProducts);
        Storage.saveProducts(filteredProducts);
        this.getSingleProduct();
      });
    });
    this.showGrid();
  }

  displayMenProducts() {
    const menProducts = this.getAllProducts().filter(
      (item) => item.gender.toLowerCase() === "men"
    );
    this.productsContent(menProducts);
    Storage.saveProducts(menProducts);
    this.getSingleProduct();
    // Sort men Products
    const sortItems = document.querySelector(".sort-items");
    sortItems.addEventListener("click", (e) =>
      this.sortProducts(e, menProducts)
    );
    // show number of products
    const allProductsNum = document.querySelector(".p-number");
    allProductsNum.innerText = menProducts.length;
    // filter products
    const filters = document.querySelectorAll(".filter-item");
    filters.forEach((item) => {
      item.addEventListener("click", (e) => {
        const filterText = e.target.innerText.toLowerCase();
        const filteredProducts = menProducts.filter((item) => {
          return item.type.includes(filterText);
        });
        this.productsContent(filteredProducts);
        Storage.saveProducts(filteredProducts);
        this.getSingleProduct();
      });
    });
    this.showGrid();
  }

  getSingleProduct() {
    const allProducts = [...document.querySelectorAll(".product")];
    allProducts.forEach((item) => {
      const id = item.dataset.id;
      item.addEventListener("click", () => {
        const singleProduct = { ...Storage.getProduct(id) };
        Storage.saveProducts(singleProduct);
      });
    });
  }

  showSortAndFilterItems(e) {
    const sortItems = document.querySelector(".sort-items");
    const filterItems = document.querySelector(".filter-items");
    const element = e.target;
    if (element.classList.contains("fa-angle-down")) {
      sortItems.classList.toggle("sort-hidden");
    } else sortItems.classList.remove("sort-hidden");
    if (element.classList.contains("filter")) {
      filterItems.classList.toggle("filter-hidden");
    } else filterItems.classList.remove("filter-hidden");
  }

  sortProducts(e, products) {
    const element = e.target;
    if (element.classList.contains("low-price")) {
      const LowPrice = products.sort((a, b) => a.price - b.price);
      this.productsContent(LowPrice);
      Storage.saveProducts(LowPrice);
      this.getSingleProduct();
    } else if (element.classList.contains("high-price")) {
      const highPrice = products.sort((a, b) => b.price - a.price);
      this.productsContent(highPrice);
      Storage.saveProducts(highPrice);
      this.getSingleProduct();
    }
  }

  showGrid() {
    const gridIcons = document.querySelectorAll(".products-nav_icons");
    const productsSection = document.querySelector(".products-section");
    gridIcons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("grid-two-col"))
          productsSection.classList.replace("products", "products-two-col");
        if (element.classList.contains("grid-multi-col"))
          productsSection.classList.replace("products-two-col", "products");
      });
    });
  }
}

export default new ShowAllProducts();
