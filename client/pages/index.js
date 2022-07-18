const index = ()=>{
    return `
    <section class="hero">
    <div class="hero-women">
      <button class="btn btn--white">
        <a class="data-link" href="/womenProducts">Shop for her</a>
      </button>
    </div>
    <div class="hero-men">
      <button class="btn btn--dark">
        <a class="data-link" href="/menProducts">Shop for him</a>
      </button>
    </div>
  </section>

  <!-- ---------Services-------- -->
  <section class="services">
    <div class="services-discount">
      <p class="services-discount_title">Up To <span>40%</span> Off</p>
      <span class="services-sale">SALE</span>
    </div>
    <div class="services-item">
      <i class="fa-solid fa-truck-fast"></i>
      <p class="services-title">Free & Fast Shipping</p>
    </div>
    <div class="services-item">
      <i class="fa-solid fa-box-archive"></i>
      <p class="services-title">30-days Free Return</p>
    </div>
    <div class="services-item">
      <i class="fa-solid fa-lock"></i>
      <p class="services-title">100% Secure Shopping</p>
    </div>
  </section>
</header>

<!-- -------------------Category Section--------------- -->
<section class="category">
  <div class="category-item c-item1">
    <button class="btn btn--yellow">Accessories</button>
  </div>
  <div class="category-item c-item2">
    <button class="btn btn--yellow">Summer sale</button>
  </div>
  <div class="category-item c-item3">
    <button class="btn btn--yellow">New arrivals</button>
  </div>
  <div class="category-item c-item4">
    <button class="btn btn--yellow">Men's jeans</button>
  </div>
</section>

<!-- -------------------Best Seller Section------------ -->
<section class="best">
  <div class="title-wrapper">
    <h2 class="title">Best Seller</h2>
    <p class="title-text">
      Check out most promising product bought by our buyers
    </p>
  </div>
  <!-- --------Products--------- -->
  <div class="best-products_wrapper">
    <!-- -------Single Product----------->
    <!-- <div class="product">
    <img src="./assets/images/overcoat.png">
    <div class="product-gender">
      <span>Men</span>
      <div class="product-stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
    <p class="product_title">Black ripped overcoat</p>
    <div class="product-price_wrapper">
      <span class="product-discount">$120</span>
      <span class="product-price">$150</span>
    </div>
  </div> -->
  </div>
  <!-- --------Buttons---------- -->
  <a class="best-prev-btn left scroll">&#10094;</a>
  <a class="best-next-btn right scroll">&#10095;</a>
</section>

<!-- -------------------Sale Section--------------- -->
<section class="sale">
  <div class="sale-text">
    <p>Up To <span>60%</span> Off On All</p>
  </div>
  <div class="sale-title">Sale</div>
  <div class="sale-img_box">
    <img src="/assets/images/pexels.png" alt="woman" />
    <button class="btn btn--yellow">CHECK CLERANCE</button>
  </div>
</section>

<!-- ------------------Subscribe Section-------------- -->
<section class="subscribe">
  <h2 class="subscribe-title">Subscribe Newsletter</h2>
  <p class="subscribe-text">
    Subscribe to our email and get updates right in your inbox
  </p>
  <div class="subscribe-input_wrapper">
    <input type="text" placeholder="Enter Your Email" />
    <i class="fa-brands fa-telegram"></i>
  </div>
</section>

<!-- -------------------News Section------------------ -->
<section class="news">
  <div class="news-gray_box">
    <h2 class="news-gray_title">What's going on!</h2>
    <p class="news-gray_text">
      Learn more about upcoming fashion trends and tips
    </p>
  </div>
  <div class="news-yellow_box">
    <h3 class="news-yellow_title">7 fashion tips for this summer</h3>
    <p class="news-yellow_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <div>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
    </div>
  </div>
  <div class="news-img">
    <img src="/assets/images/image 24.png" alt="woman" />
  </div>
</section>
    `;
}

export default index;