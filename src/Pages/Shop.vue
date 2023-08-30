<template>
    <!--shop head-->  
    <div class="container py-0 mt-5">
      <div class="row rounded-4 center-content py-3 px-2 mx-0 mb-3" id="shtp">
        <div class="col-12 py-5 text-center">
          <h2 class="font-weight-bold display-4 py-2 text-white" id="my-heading">Let's start shopping your desired products from Zapcad</h2>
          <button type="button" class="btn btn-outline-light">Shop now</button>
        </div>
      </div>
    </div>
<!--shop Item box-->
<div class="container p-2">
  <div class="row">
    <div class="col-12 mb-2">
      <h2 class="top-text text-black">Our products</h2>
    </div>
  </div>
  <div class="row mb-4 d-none d-md-flex">
    <div class="col-md-4 col-sm-12">
      <!--Product 1-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/1.jpg" alt="Product 1" class="product-image ">
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
    <div class="col-md-4 col-sm-12">
      <!--Product 2-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/2.jpg" alt="Product 2" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black">
            <router-link class="nav-link" to="/Product">NFC Card 2</router-link></h4>
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
    <div class="col-md-4 col-sm-12">
      <!--Product 3-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/3.jpg" alt="Product 3" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 3 </router-link></h4>
          <p class="product-price text-black">$39.99</p>
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
  <div class="row mb-4 d-none d-md-flex">
    <div class="col-md-4 col-sm-12">
      <!--Product 4-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/3.jpg" alt="Product 4" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 4</router-link></h4>
          <p class="product-price text-black">$49.99</p>
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
    <div class="col-md-4 col-sm-12">
      <!--Product 5-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/1.jpg" alt="Product 5" class="product-image">
        <div class="product-details pl-1">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 5</router-link></h4>
          <p class="product-price text-black">$59.99</p>
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
    <div class="col-md-4 col-sm-12">
      <!--Product 6-->
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/2.jpg" alt="Product 6" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 6</router-link></h4>
          <p class="product-price text-black">$69.99</p>
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
  <!-- Product view for mobile -->
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
        <img src="/src/assets/images/card/2.jpg" alt="Product 2" class="product-image">
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
  <div class="row mb-4 d-md-none">
    <div class="col-6">
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/3.jpg" alt="Product 3" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 3 </router-link></h4>
          <p class="product-price text-black">$39.99</p>
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
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/3.jpg" alt="Product 4" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 4</router-link></h4>
          <p class="product-price text-black">$49.99</p>
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
  <div class="row mb-4 d-md-none">
    <div class="col-6">
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/1.jpg" alt="Product 5" class="product-image">
        <div class="product-details pl-1">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 5</router-link></h4>
          <p class="product-price text-black">$59.99</p>
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
      <div class="product-item bg-white mx-1">
        <img src="/src/assets/images/card/2.jpg" alt="Product 6" class="product-image">
        <div class="product-details">
          <h4 class="product-name text-black"><router-link class="nav-link" to="/Product">NFC Card 6</router-link></h4>
          <p class="product-price text-black">$69.99</p>
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
<!--bottom conclution-->
<div class="container">
  <div class="row my-4 mx-2">
    <div class="col-md-3 col-sm-6 col-xs-6">
      <div class="d-flex flex-column align-items-left">
        <div class="circle-border">
          <i class="bi bi-currency-dollar"></i>
        </div>
        <h4 class="ttle text-black">Track Product</h4>
        <p class="sbubtitle text-black">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 col-xs-6">
      <div class="d-flex flex-column align-items-left">
        <div class="circle-border">
          <i class="bi bi-currency-dollar"></i>
        </div>
        <h4 class="ttle text-black">Original Product</h4>
        <p class="sbubtitle text-black">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 col-xs-6">
      <div class="d-flex flex-column align-items-left">
        <div class="circle-border">
          <i class="bi bi-currency-dollar"></i>
        </div>
        <h4 class="ttle text-black">Fast shipping</h4>
        <p class="sbubtitle text-black">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 col-xs-6">
      <div class="d-flex flex-column align-items-left">
        <div class="circle-border">
          <i class="bi bi-currency-dollar"></i>
        </div>
        <h4 class="ttle text-black">World Wide service</h4>
        <p class="sbubtitle text-black">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>  
  </div>
</div>
<!--limited offer part-->
<div class="container">
      <div class="row center-content p-5 mx-2 my-4">
        <div class="col-md-6 col-sm-12">
  <img src="/src/assets/images/one-single.png" alt="Image" class="img-fluid">
</div>
        <div class="col-md-6 col-sm-12">
          <h4 class="ttxl text-white">Limited Offer</h4>
          <h6 class=" text-white">30% off only in this Friday and get this special gift </h6>
          <button type="button" class="btn btn-outline-light">Shop now</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    addToCart() {
      // Functionality to add item to cart
    },
    toggleFavorite() {
      // Functionality to add item to Favorite
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>