<template>
    <div class="container mt-5">
    <div class="row mb-4">
      <h4 class=" fw-bold ">Checkout</h4>
    </div>
  </div>
   <section class="my-5 container ">
            <div class="row g-md-8 mt-4">
                <!-- Checkout Panel Left -->
                <div class="col-12 col-lg-6 col-xl-7 p-4 ckt">
                    <!-- Checkout Panel Contact -->
                    <div class="checkout-panel">
                      <div class="row pb-3">
                      
                        <!-- Email-->
                        <div class="col-12">
                          <div class="form-group pb-2">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control rounded-0" id="email" placeholder=" you@example.com">
                          </div>
                      
                          <!-- Mailing List Signup-->
                          <div class="form-group form-check m-0">
                            <input type="checkbox" class="form-check-input" id="add-mailinglist" checked>
                            <label class="form-check-label" for="add-mailinglist">Keep me updated with your latest news and offers</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Checkout Shipping Address -->
                    <div class="checkout-panel">
                      <div class="row">
                        <!-- First Name-->
                        <div class="col-sm-6 pb-2">
                          <div class="form-group">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control rounded-0" id="firstName" placeholder="" value="" required="">
                          </div>
                        </div>
                    
                        <!-- Last Name-->
                        <div class="col-sm-6 pb-2">
                          <div class="form-group">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control rounded-0" id="lastName" placeholder="" value="" required="">
                          </div>
                        </div>
                    
                        <!-- Address-->
                        <div class="col-12 pb-2">
                          <div class="form-group">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control rounded-0" id="address" placeholder="123 Some Street Somewhere" required="">
                          </div>
                        </div>
                    
                        <!-- Country-->
                        <div class="col-md-12 pb-2">
                          <div class="form-group">
                            <label for="country" class="form-label">Country</label>
                            <select class="form-select rounded-0" id="country" required="">
                              <option value="">Please Select...</option>
                              <option>United States</option>
                            </select>
                          </div>
                        </div>
                    
                        <!-- State-->
                        <div class="col-md-6 pb-2">
                          <div class="form-group">
                            <label for="state" class="form-label">State</label>
                            <select class="form-select rounded-0" id="state" required="">
                              <option value="">Please Select...</option>
                              <option>California</option>
                            </select>
                          </div>
                        </div>
                    
                        <!-- Post Code-->
                        <div class="col-md-6 pb-2">
                          <div class="form-group">
                            <label for="zip" class="form-label">Zip/Post Code</label>
                            <input type="text" class="form-control rounded-0" id="zip" placeholder="" required="">
                          </div>
                        </div>
                      </div>
                    
                      <div class="pt-4 mt-4 border-top d-flex justify-content-between align-items-center">
                        <!-- Shipping Same Checkbox-->
                        
                      </div>
                    </div>
                    <!-- Checkout Billing Address-->
                    <div class="billing-address checkout-panel d-none">
                        <h5 class="title-checkout">Billing Address</h5>
                        <div class="row">
                          <!-- First Name-->
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="firstNameAddress" class="form-label">First name</label>
                              <input type="text" class="form-control" id="firstNameAddress" placeholder="" value="" required="">
                            </div>
                          </div>
                      
                          <!-- Last Name-->
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="lastNameAddress" class="form-label">Last name</label>
                              <input type="text" class="form-control" id="lastNameAddress" placeholder="" value="" required="">
                            </div>
                          </div>
                      
                          <!-- Address-->
                          <div class="col-12">
                            <div class="form-group">
                              <label for="addressAddress" class="form-label">Address</label>
                              <input type="text" class="form-control" id="addressAddress" placeholder="123 Some Street Somewhere" required="">
                            </div>
                          </div>
                      
                          <!-- Country-->
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="countryAddress" class="form-label">Country</label>
                              <select class="form-select" id="countryAddress" required="">
                                <option value="">Please Select...</option>
                                <option>United States</option>
                              </select>
                            </div>
                          </div>
                      
                          <!-- State-->
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="stateAddress" class="form-label">State</label>
                              <select class="form-select" id="stateAddress" required="">
                                <option value="">Please Select...</option>
                                <option>California</option>
                              </select>
                            </div>
                          </div>
                      
                          <!-- Post Code-->
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="zipAddress" class="form-label">Zip/Post Code</label>
                              <input type="text" class="form-control" id="zipAddress" placeholder="" required="">
                            </div>
                          </div>
                        </div>
                    </div>
                    <!-- Checkout Payment Method-->
                    <div class="checkout-panel">
                      <h5 class="title-checkout">Payment Information</h5>
                      <div class="form-group form-check m-0 py-3">
                          <input type="checkbox" class="form-check-input" id="same-address" checked>
                          <label class="form-check-label" for="same-address">Use for billing address</label>
                        </div>
                      <div class="row">
                        <!-- Payment Option-->
                        <div class="col-12">
                          <div class="form-check form-group form-check-custom form-radio-custom mb-3">
                            <input class="form-check-input" type="radio" name="checkoutPaymentMethod" id="checkoutPaymentStripe" checked>
                            <label class="form-check-label" for="checkoutPaymentStripe">
                              <span class="d-flex justify-content-between align-items-start">
                                <span>
                                  <span class="mb-0 fw-bolder d-block">Credit Card (Stripe)</span>
                                </span>
                                <i class="ri-bank-card-line"></i>
                              </span>
                            </label>
                          </div>
                        </div>
                      
                        <!-- Payment Option-->
                        <div class="col-12">
                          <div class="form-check form-group form-check-custom form-radio-custom mb-3">
                            <input class="form-check-input" type="radio" name="checkoutPaymentMethod" id="checkoutPaymentPaypal">
                            <label class="form-check-label" for="checkoutPaymentPaypal">
                              <span class="d-flex justify-content-between align-items-start">
                                <span>
                                  <span class="mb-0 fw-bolder d-block">PayPal</span>
                                </span>
                                <i class="ri-paypal-line"></i>
                              </span>
                            </label>
                          </div>
                        </div>
                    </div>
                      
                      <!-- Payment Details-->
                      <div class="card-details">
                        <div class="row pt-3">
                          <div class="col-md-12 pb-2">
                            <div class="form-group">
                              <label for="cc-name" class="form-label">Name on card</label>
                              <input type="text" class="form-control rounded-0" id="cc-name" placeholder="" required="">
                              <small class="text-muted">Full name as displayed on card</small>
                            </div>
                          </div>
                      
                          <div class="col-md-12 pb-2">
                            <div class="form-group">
                              <label for="cc-number" class="form-label">Credit card number</label>
                              <input type="text" class="form-control rounded-0" id="cc-number" placeholder="" required="">
                            </div>
                          </div>
                      
                          <div class="col-md-6 pb-2">
                            <div class="form-group">
                              <label for="cc-expiration" class="form-label">Expiration</label>
                              <input type="text" class="form-control rounded-0" id="cc-expiration" placeholder="" required="">
                            </div>
                          </div>
                      
                          <div class="col-md-6 pb-2">
                            <div class="form-group">
                              <div class="d-flex">
                                <label for="cc-cvv" class="form-label d-flex w-100 justify-content-between align-items-center ">Security Code</label>
                                <button type="button" class="btn btn-link p-0 fw-bolder fs-xs text-nowrap" data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="A CVV is a number on your credit card or debit card that's in addition to your credit card number and expiration date">
                                  What's this?
                                </button>
                              </div>
                              <input type="text" class="form-control rounded-0" id="cc-cvv" placeholder="" required="">
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- / Payment Details-->
                      
                      <!-- Paypal Info-->
                      <div class="paypal-details bg-light p-4 d-none mt-3 fw-bolder">
                        Please click on complete order. You will then be transferred to Paypal to enter your payment details.
                      </div>
                      <!-- /Paypal Info-->
                    </div>
                    <!-- /Checkout Payment Method-->                </div>
                <!-- / Checkout Panel Left -->

                <!-- Checkout Panel Summary -->
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="bg-light p-4 m-2 sticky-content top-5">
                        <div class="border-bottom pb-3">
                            <!-- Cart Item-->
                            <div class=" d-md-flex justify-content-between align-items-start py-2">
                                <div class="d-flex flex-grow-1 justify-content-start align-items-start">
                                    <div class="position-relative f-w-20 border p-0 me-4">
                                        <span class="checkout-item-qty">1</span>
                                        <img src="/src/assets/images/card/3.jpg" alt="" class="crtmg img-fluid">
                                    </div>
                                    <div>
                                        <p class="mb-1 fs-6 fw-bolder">Mens StormBreaker Jacket</p>
                                        <span class="fs-xs text-uppercase fw-bolder text-muted">Mens / Blue / Medium</span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 fw-bolder">
                                    <span>$1129.99</span>
                                </div>
                            </div>
                            <div class=" d-md-flex justify-content-between align-items-start py-2">
                                <div class="d-flex flex-grow-1 justify-content-start align-items-start">
                                    <div class="position-relative f-w-20 border p-0 me-4">
                                        <span class="checkout-item-qty">2</span>
                                        <img src="/src/assets/images/card/2.jpg" alt="" class="crtmg img-fluid">
                                    </div>
                                    <div>
                                        <p class="mb-1 fs-6 fw-bolder">North Face Jacket</p>
                                        <span class="fs-xs text-uppercase fw-bolder text-muted">Mens / Blue / Large</span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 fw-bolder">
                                    <span>$999.98</span>
                                </div>
                            </div>
                            <div class=" d-md-flex justify-content-between align-items-start py-2">
                                <div class="d-flex flex-grow-1 justify-content-start align-items-start">
                                    <div class="position-relative f-w-20 border p-0 me-4">
                                        <span class="checkout-item-qty">1</span>
                                        <img src="/src/assets/images/card/1.jpg" alt="" class="crtmg img-fluid">
                                    </div>
                                    <div>
                                        <p class="mb-1 fs-6 fw-bolder">Womens Adidas Hoodie</p>
                                        <span class="fs-xs text-uppercase fw-bolder text-muted">Womens / Red / Medium</span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 fw-bolder">
                                    <span>$59.99</span>
                                </div>
                            </div>
                            <!-- / Cart Item-->
                        </div>
                        <div class="py-3 border-bottom">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <p class="m-0 fw-bolder fs-6">Subtotal</p>
                                <p class="m-0 fs-6 fw-bolder">$422.99</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center ">
                                <p class="m-0 fw-bolder fs-6">Shipping</p>
                                <p class="m-0 fs-6 fw-bolder">$8.95</p>
                            </div>
                        </div>
                        <div class="py-3 border-bottom">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="m-0 fw-bold fs-5">Grand Total</p>
                                    <span class="text-muted small">Inc $45.89 sales tax</span>
                                </div>
                                <p class="m-0 fs-5 fw-bold">$422.99</p>
                            </div>
                        </div>
                        <div class="py-3 border-bottom">
                            <div class="input-group mb-0">
                                <input type="text" class="form-control rounded-0" placeholder="Enter your coupon code">
                                <button class="btn btn-golden rounded-0 btn-sm px-4">Apply</button>
                            </div>
                        </div> 
                    <!-- Accept Terms Checkbox-->
                    <div class="form-group form-check my-4">
                        <input type="checkbox" class="form-check-input" id="accept-terms" checked>
                        <label class="form-check-label fw-bolder" for="accept-terms">I agree to Alpine's <a href="#">terms & conditions</a></label>
                    </div>
                    <a href="#" class="btn btn-golden rounded-0 w-100" role="button">Complete Order</a>      
                    </div>                </div>
                <!-- /Checkout Panel Summary -->
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
body{
    background-color: #fff;
}
@media (min-width: 768px) {
  @supports (padding: max(0px)) {
    .ckt {
      padding-right: 5% !important;
    }
  }
}
.checkout-item-qty {
    position: absolute;
    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    top: -8px;
    right: -8px;
    background: #1c212c;
    color: #fff;
    font-size: 74%;
}
.sticky-content {
  position: sticky;
  top: 60px; /* Adjust this value based on the height of your sticky header */
  z-index: 99;
}

@media (max-width: 767.98px) {
  .sticky-content {
    position: static;
    top: auto;
    z-index: auto;
  }
}
.crtmg{
  height: 80px;
  width: 80px;
}
.btn-golden {
  background-color: #daa520;
  color: #fff;
}
.btn-golden:hover {
  background-color: #008000;
  color: #fff;
}
</style>