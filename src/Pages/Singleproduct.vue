<template>
<div class="container mt-4">
    <div class="row p-2 my-2">
      <div class="col-lg-5">
        <div class="row pb-3">
          <img src="/src/assets/images/card/12.jpg" alt="Product Image" class="img-fluid" id="tpmg" style="height: 350px;">
        </div>
        <div class="row">
          <div class="col-3 pr-0">
            <img src="/src/assets/images/card/1.jpg" style="height: 100px; width: 150px;" class="img-fluid clickable" :class="{ 'selected': selectedImage === '/src/assets/images/card/1.jpg' }" @click="selectImage('/src/assets/images/card/1.jpg')" onclick="document.getElementById('tpmg').src='/src/assets/images/card/12.jpg'">
          </div>
          <div class="col-3 p-0">
            <img src="/src/assets/images/card/2.jpg" style="height: 100px; width: 150px;" class="img-fluid clickable" :class="{ 'selected': selectedImage === '/src/assets/images/card/2.jpg' }" @click="selectImage('/src/assets/images/card/2.jpg')" onclick="document.getElementById('tpmg').src='/src/assets/images/card/2.jpg'">
          </div>
          <div class="col-3 pr-0">
            <img src="/src/assets/images/card/3.jpg" style="height: 100px; width: 150px;" class="img-fluid clickable" :class="{ 'selected': selectedImage === '/src/assets/images/card/3.jpg' }" @click="selectImage('/src/assets/images/card/3.jpg')" onclick="document.getElementById('tpmg').src='/src/assets/images/card/3.jpg'">
          </div>
          <div class="col-3 pl-0">
            <img src="/src/assets/images/card/4.jpg" style="height: 100px; width: 150px;" class="img-fluid clickable" :class="{ 'selected': selectedImage === '/src/assets/images/card/4.jpg' }" @click="selectImage('/src/assets/images/card/4.jpg')" onclick="document.getElementById('tpmg').src='/src/assets/images/card/4.jpg'">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h4 class="product-title pb-3 pt-3 pt-sm-3 pt-md-3 pt-lg-0">NFC Card</h4>
        <hr class="htln pb-3 border-1">
        <p class="product-description pb-3"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias libero architecto quas, ducimus reprehenderit iusto assumenda ab nam. Non?</small></p>
        <h5 class="product-price text-black pb-3">$99.99</h5>
        <hr class="pb-3">
        <div class="row btns">
  <div class="col pb-3 quantity-buttons">
    <button class="border-1" style="background-color: #e7e9eb; border: 1px solid #000000;" @click="incrementQuantity">+</button>
    <button class="border-1 quantity-number m-0" style="background-color: #e7e9eb; border: 1px solid #000000;">{{ quantity }}</button>
    <button class="border-1" style="background-color: #e7e9eb; border: 1px solid #000000; margin-right: 10px;" @click="decrementQuantity">-</button>
    <button class="btn btn-dark ml-3">
      <router-link class="nav-link active" to="/cart">
        <i class="bi bi-bag"></i> Add to Cart
      </router-link>
    </button>
  </div>
</div>
<hr class="py-2">
      </div>
      <div class="col-lg-1"></div>
    </div>
    <hr> 
  </div>
  
  <div class="container">
    <div class="row"><p class="metadis" style="color:#303030;"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, necessitatibus similique nihil ea explicabo nemo neque modi reiciendis tempora perferendis, earum eaque omnis quis delectus? Dolorum officiis blanditiis molestias provident iste debitis obcaecati placeat, doloribus rerum aut fugiat animi odit facilis praesentium ex illo porro, ullam aspernatur. Dolor iste itaque nihil saepe eaque! Officiis, quia animi? Placeat consequuntur asperiores rerum architecto eaque ipsam provident cupiditate molestias, eveniet nihil nisi cum sunt quaerat inventore fuga iure omnis ipsa. Eum, perferendis! Dolores voluptates ipsa nulla minus deleniti, a placeat molestias iste cum atque enim debitis illum. Doloremque minima ex animi unde officia.</small></p></div>
  </div>
  <div class="container my-4">
    <div class="row"><h4 class="bldt text-black">Related Product</h4></div>
    <div class="row d-none d-sm-none d-md-flex">
        <div class="col">
          <div class="cld m-1 bg-white p-0">
            <img src="/src/assets/images/card/2.jpg" class="img-fluid" id="szimg">
            <h5 class="bld text-black mt-2">NFC card</h5>
            <p class="bld text-black">$29</p>
            <button type="button" class="btn text-black button-cart" @click="addToCart">
              <router-link class="nav-link" to="/cart"><i class="bi bi-cart-plus"></i> Add to Cart</router-link>
            
          </button>
        </div>
          
</div>
<div class="col">
  <div class="cld m-1 bg-white p-0">
    <img src="/src/assets/images/card/1.jpg" class="img-fluid" id="szimg" >
            <h5 class="bld text-black mt-2">NFC card</h5>
            <p class="bld text-black">$29</p>
            <button type="button" class="btn text-black button-cart" @click="addToCart">
              <router-link class="nav-link" to="/cart"><i class="bi bi-cart-plus"></i> Add to Cart</router-link>
          </button></div>
            
          </div>
<div class="col">
  <div class="cld m-1 bg-white p-0">
    <img src="/src/assets/images/card/3.jpg" class="img-fluid"  id="szimg">
            <h5 class="bld text-black mt-2">NFC card</h5>
            <p class="bld text-black">$29</p>
            <button type="button" class="btn text-black button-cart" @click="addToCart">
              <router-link class="nav-link" to="/cart"><i class="bi bi-cart-plus"></i> Add to Cart</router-link>
          </button>
  </div>        
</div>
    </div>
    <!-- Mobile row-->
    <div class="row mb-4 d-md-none">
    <div class="col-6">
      <!--Product 1-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/1.jpg" alt="Product 1" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 1</router-link></h4>
          <p class="product-price text-black">$19.99</p>
          <div class="d-flex">
            <button type="button" class="btn button-cart"><a style="text-decoration: none;" href="/cart">
              <i class="bi bi-cart-plus"></i> Add to Cart </a>
            </button>
            <button type="button" class="btn button-favorite" @click="toggleFavorite">
  <i v-if="!isFavorite" class="bi bi-heart"></i>
  <i v-if="isFavorite" class="bi bi-heart-fill"></i>
</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <!--Product 2-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/2.jpg" alt="Product 2" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 2</router-link></h4>
          <p class="product-price text-black">$29.99</p>
          <div class="d-flex">
            <button type="button" class="btn button-cart"><a style="text-decoration: none;" href="/cart">
              <i class="bi bi-cart-plus"></i> Add to Cart </a>
            </button>
            <button type="button" class="btn button-favorite" @click="toggleFavorite">
  <i v-if="!isFavorite" class="bi bi-heart"></i>
  <i v-if="isFavorite" class="bi bi-heart-fill"></i>
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-4 d-md-none">
    <div class="col-6">
      <!--Product 1-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/1.jpg" alt="Product 1" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 1</router-link></h4>
          <p class="product-price text-black">$19.99</p>
          <div class="d-flex">
            <button type="button" class="btn button-cart">
              <router-link class="nav-link" to="/cart"><i class="bi bi-cart-plus"></i> Add to Cart</router-link>
            </button>
            <button type="button" class="btn button-favorite" @click="toggleFavorite">
  <i v-if="!isFavorite" class="bi bi-heart"></i>
  <i v-if="isFavorite" class="bi bi-heart-fill"></i>
</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <!--Product 2-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/3.jpg" alt="Product 2" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 2</router-link></h4>
          <p class="product-price text-black">$29.99</p>
          <div class="d-flex">
            <button type="button" class="btn button-cart">
              <router-link class="nav-link" to="/cart"><i class="bi bi-cart-plus"></i> Add to Cart</router-link>
            </button>
            <button type="button" class="btn button-favorite" @click="toggleFavorite">
  <i v-if="!isFavorite" class="bi bi-heart"></i>
  <i v-if="isFavorite" class="bi bi-heart-fill"></i>
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 1,
      selectedImage: "/src/assets/images/card/1.jpg",
    };
  },
  methods: {
    addToCart() {
      // Functionality to add item to cart
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    selectImage(url) {
      this.selectedImage = url;
    },
  },
};
</script>
