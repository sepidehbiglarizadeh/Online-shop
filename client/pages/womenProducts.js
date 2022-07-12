const womenProducts= () =>{
    return `<section class="products-nav">
    <div class="products-nav_icons">
      <img class="products-nav_icon grid-two-col" src="/assets/images/icons8-grid-32.png" alt="">
      <img class="products-nav_icon grid-multi-col" src="/assets/images/icons8-grid-32-2.png" alt="">
    </div>
    <div class="products-nav_empty"></div>
    <div class="products-nav_number">Showing &nbsp;<span class="p-number"></span>&nbsp; products</div>
    <div class="products-nav_sort">
      <span>Sort</span>
      <i class="fa-solid fa-angle-down"></i>
      <div class="sort-items">
        <p class="low-price">Price, low to high</p>
        <p class="high-price">Price, high to low</p>
      </div>
    </div>
    <div class="products-nav_filter">
      <span class="filter">Filter</span>
      <div class="filter-items">
        <span class="filter-item">Jacket</span>
        <span class="filter-item">Coat</span>
        <span class="filter-item">Jeans</span>
        <span class="filter-item">Trousers</span>
        <span class="filter-item">T-shirt</span>
      </div>
    </div>
  </section>
  
  <section class="products women-products products-section"></section>`;
}

export default womenProducts;