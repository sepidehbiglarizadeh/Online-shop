const cartArea = document.querySelector(".cart");
const cartBtn = document.querySelector(".fa-basket-shopping");
const pricesDetails = document.querySelector(".cart-price_details_wrapper");
const body = document.querySelector("body");
const backDrop = document.querySelector(".backdrop");
const cartContent = document.querySelector(".cart-item_container");

import Storage from "./Storage.js";

let cart = [];

class Cart {
  constructor() {
    cartBtn.addEventListener("click", () => this.showCart());

    cartArea.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("cart-close-btn")) this.closeCart();
      if (element.classList.contains("total-chevron-up"))
        this.showPricesDetails(element);
    });
    this.setupApp();
  }

  getAddToCartBtns() {
    const addToCartBtn = document.querySelector(".add-to-cart");
    const radioBtnsSize = document.querySelectorAll("input[name=size]");
    const id = addToCartBtn.dataset.id;
    const isInCart = cart.find((p) => p.id == id);
    if (isInCart) {
      addToCartBtn.innerText = "In Cart";
      addToCartBtn.disabled = true;
      addToCartBtn.style.opacity = 0.5;
    }

    addToCartBtn.disabled = true;
    addToCartBtn.style.opacity = 0.5;

    radioBtnsSize.forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCartBtn.disabled = false;
        addToCartBtn.style.opacity = 1;
      });
    });

    addToCartBtn.addEventListener("click", (event) => {
      event.target.innerText = "In Cart";
      event.target.disabled = true;
      event.target.style.opacity = 0.5;
      let selectedSize = "";
      radioBtnsSize.forEach((btn) => {
        if (btn.checked) {
          selectedSize = btn.value;
          localStorage.setItem("selectedSize", selectedSize);
        }
      });
      const addedProduct = {
        ...JSON.parse(localStorage.getItem("products")),
        selectedradio: selectedSize,
        quantity: 1,
      };
      cart = [...cart, addedProduct];
      Storage.saveCart(cart);
      this.setCartValue(cart);
      this.addCartItem(addedProduct);
    });
  }

  showCart() {
    cartArea.style.right = "0";
    cartArea.style.opacity = "1";
    backDrop.style.display = "block";
    body.style.position = "fixed";
  }

  closeCart() {
    cartArea.style.right = "-100vw";
    cartArea.style.opacity = "0";
    backDrop.style.display = "none";
    body.style.position = "static";
  }

  showPricesDetails(el) {
    if (pricesDetails.style.maxHeight) {
      pricesDetails.style.maxHeight = null;
      el.style.transform = "rotate(0deg)";
    } else {
      pricesDetails.style.maxHeight = pricesDetails.scrollHeight + "px";
      el.style.transform = "rotate(180deg)";
    }
  }

  setCartValue(cart) {
    let cartTotal = document.querySelector(".cart-total");
    let subTotal = document.querySelector(".sub-total");
    let tempCartItem = 0;
    const subTotalPrice = cart.reduce((acc, curr) => {
      tempCartItem += curr.quantity;
      return acc + curr.quantity * curr.price;
    }, 0);
    if (cart.length) {
      cartTotal.innerText = `$${parseFloat(subTotalPrice + 4.95).toFixed(2)}`;
      subTotal.innerText = `$${parseFloat(subTotalPrice).toFixed(2)}`;
    } else {
      cartTotal.innerText = "$0";
      subTotal.innerText = "$0";
    }
    let cartItem = document.querySelector(".navbar-cart_item");
    cartItem.innerText = tempCartItem;
    let productNumber = document.querySelector(".product-number");
    productNumber.innerText = tempCartItem;
  }

  addCartItem(cart) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `  <div class="cart-img">
    <img
      src=${cart.imageUrl}
    />
  </div>
  <div class="cart-content">
    <span class="cart-price">$${cart.price}</span>
    <p class="cart-product_name">${cart.title}</p>
    <span class="cart-product_size">${cart.selectedradio}</span>
  </div>
  <div class="cart-icons">
    <div class="cart-item_controller">
      <!-- <i class="fa-solid fa-pen"></i> -->
      <i class="fas fa-chevron-up" data-id=${cart.id}></i>
      <p class="item-quantity">${cart.quantity}</p>
      <i class="fas fa-chevron-down" data-id=${cart.id}></i>
    </div>
    <span class="cart-icon_trash">
      <i class="fa-solid fa-trash-can trash" data-id=${cart.id}></i>
    </span>
  </div>`;
    cartContent.appendChild(div);
  }

  setupApp() {
    cart = Storage.getCart() || [];
    cart.forEach((item) => this.addCartItem(item));
    this.setCartValue(cart);
  }

  cartLogic() {
    cartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("fa-chevron-up")) {
        const addQuantity = event.target;
        const addedItem = cart.find(
          (cItem) => cItem.id == addQuantity.dataset.id
        );
        addedItem.quantity++;
        this.setCartValue(cart);
        Storage.saveCart(cart);
        addQuantity.nextElementSibling.innerText = addedItem.quantity;
      } else if (event.target.classList.contains("fa-chevron-down")) {
        const subQuantity = event.target;
        const substractedItem = cart.find(
          (c) => c.id == subQuantity.dataset.id
        );
        if (substractedItem.quantity === 1) {
          this.removeItem(substractedItem);
          cartContent.removeChild(
            subQuantity.parentElement.parentElement.parentElement
          );
          return;
        }
        substractedItem.quantity--;
        this.setCartValue(cart);
        Storage.saveCart(cart);
        subQuantity.previousElementSibling.innerText = substractedItem.quantity;
      } else if (event.target.classList.contains("fa-trash-can")) {
        const removeItem = event.target;
        const _removedItem = cart.find((c) => c.id == removeItem.dataset.id);
        this.removeItem(_removedItem);
        Storage.saveCart(cart);
        const node = removeItem.parentNode.parentNode.parentNode;
        cartContent.removeChild(node);
      }
    });
  }

  removeItem(product) {
    cart = cart.filter((item) => parseInt(item.id) !== product.id);
    this.setCartValue(cart);
    Storage.saveCart(cart);
    const addToCartBtn = document.querySelector(".add-to-cart");
    if(addToCartBtn) this.getButton();
  }

  getButton() {
    const addToCartBtn = document.querySelector(".add-to-cart");
    addToCartBtn.innerText = "Add To Cart";
    addToCartBtn.disabled = false;
    addToCartBtn.style.opacity = 1;
  }
}

export default new Cart();
