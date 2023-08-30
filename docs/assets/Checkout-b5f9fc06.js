import{b as s,a as l,_ as t}from"./3-fddf21fb.js";import{_ as a,o,c,F as r,a as e,d}from"./index-1f1d1701.js";const i={},n=e("div",{class:"container mt-5"},[e("div",{class:"row mb-4"},[e("h4",{class:"fw-bold"},"Checkout")])],-1),m=e("section",{class:"my-5 container"},[e("div",{class:"row g-md-8 mt-4"},[e("div",{class:"col-12 col-lg-6 col-xl-7 p-4 ckt"},[e("div",{class:"checkout-panel"},[e("div",{class:"row pb-3"},[e("div",{class:"col-12"},[e("div",{class:"form-group pb-2"},[e("label",{for:"email",class:"form-label"},"Email"),e("input",{type:"email",class:"form-control rounded-0",id:"email",placeholder:" you@example.com"})]),e("div",{class:"form-group form-check m-0"},[e("input",{type:"checkbox",class:"form-check-input",id:"add-mailinglist",checked:""}),e("label",{class:"form-check-label",for:"add-mailinglist"},"Keep me updated with your latest news and offers")])])])]),e("div",{class:"checkout-panel"},[e("div",{class:"row"},[e("div",{class:"col-sm-6 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"firstName",class:"form-label"},"First name"),e("input",{type:"text",class:"form-control rounded-0",id:"firstName",placeholder:"",value:"",required:""})])]),e("div",{class:"col-sm-6 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"lastName",class:"form-label"},"Last name"),e("input",{type:"text",class:"form-control rounded-0",id:"lastName",placeholder:"",value:"",required:""})])]),e("div",{class:"col-12 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"address",class:"form-label"},"Address"),e("input",{type:"text",class:"form-control rounded-0",id:"address",placeholder:"123 Some Street Somewhere",required:""})])]),e("div",{class:"col-md-12 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"country",class:"form-label"},"Country"),e("select",{class:"form-select rounded-0",id:"country",required:""},[e("option",{value:""},"Please Select..."),e("option",null,"United States")])])]),e("div",{class:"col-md-6 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"state",class:"form-label"},"State"),e("select",{class:"form-select rounded-0",id:"state",required:""},[e("option",{value:""},"Please Select..."),e("option",null,"California")])])]),e("div",{class:"col-md-6 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"zip",class:"form-label"},"Zip/Post Code"),e("input",{type:"text",class:"form-control rounded-0",id:"zip",placeholder:"",required:""})])])]),e("div",{class:"pt-4 mt-4 border-top d-flex justify-content-between align-items-center"})]),e("div",{class:"billing-address checkout-panel d-none"},[e("h5",{class:"title-checkout"},"Billing Address"),e("div",{class:"row"},[e("div",{class:"col-sm-6"},[e("div",{class:"form-group"},[e("label",{for:"firstNameAddress",class:"form-label"},"First name"),e("input",{type:"text",class:"form-control",id:"firstNameAddress",placeholder:"",value:"",required:""})])]),e("div",{class:"col-sm-6"},[e("div",{class:"form-group"},[e("label",{for:"lastNameAddress",class:"form-label"},"Last name"),e("input",{type:"text",class:"form-control",id:"lastNameAddress",placeholder:"",value:"",required:""})])]),e("div",{class:"col-12"},[e("div",{class:"form-group"},[e("label",{for:"addressAddress",class:"form-label"},"Address"),e("input",{type:"text",class:"form-control",id:"addressAddress",placeholder:"123 Some Street Somewhere",required:""})])]),e("div",{class:"col-md-12"},[e("div",{class:"form-group"},[e("label",{for:"countryAddress",class:"form-label"},"Country"),e("select",{class:"form-select",id:"countryAddress",required:""},[e("option",{value:""},"Please Select..."),e("option",null,"United States")])])]),e("div",{class:"col-md-6"},[e("div",{class:"form-group"},[e("label",{for:"stateAddress",class:"form-label"},"State"),e("select",{class:"form-select",id:"stateAddress",required:""},[e("option",{value:""},"Please Select..."),e("option",null,"California")])])]),e("div",{class:"col-md-6"},[e("div",{class:"form-group"},[e("label",{for:"zipAddress",class:"form-label"},"Zip/Post Code"),e("input",{type:"text",class:"form-control",id:"zipAddress",placeholder:"",required:""})])])])]),e("div",{class:"checkout-panel"},[e("h5",{class:"title-checkout"},"Payment Information"),e("div",{class:"form-group form-check m-0 py-3"},[e("input",{type:"checkbox",class:"form-check-input",id:"same-address",checked:""}),e("label",{class:"form-check-label",for:"same-address"},"Use for billing address")]),e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"form-check form-group form-check-custom form-radio-custom mb-3"},[e("input",{class:"form-check-input",type:"radio",name:"checkoutPaymentMethod",id:"checkoutPaymentStripe",checked:""}),e("label",{class:"form-check-label",for:"checkoutPaymentStripe"},[e("span",{class:"d-flex justify-content-between align-items-start"},[e("span",null,[e("span",{class:"mb-0 fw-bolder d-block"},"Credit Card (Stripe)")]),e("i",{class:"ri-bank-card-line"})])])])]),e("div",{class:"col-12"},[e("div",{class:"form-check form-group form-check-custom form-radio-custom mb-3"},[e("input",{class:"form-check-input",type:"radio",name:"checkoutPaymentMethod",id:"checkoutPaymentPaypal"}),e("label",{class:"form-check-label",for:"checkoutPaymentPaypal"},[e("span",{class:"d-flex justify-content-between align-items-start"},[e("span",null,[e("span",{class:"mb-0 fw-bolder d-block"},"PayPal")]),e("i",{class:"ri-paypal-line"})])])])])]),e("div",{class:"card-details"},[e("div",{class:"row pt-3"},[e("div",{class:"col-md-12 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"cc-name",class:"form-label"},"Name on card"),e("input",{type:"text",class:"form-control rounded-0",id:"cc-name",placeholder:"",required:""}),e("small",{class:"text-muted"},"Full name as displayed on card")])]),e("div",{class:"col-md-12 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"cc-number",class:"form-label"},"Credit card number"),e("input",{type:"text",class:"form-control rounded-0",id:"cc-number",placeholder:"",required:""})])]),e("div",{class:"col-md-6 pb-2"},[e("div",{class:"form-group"},[e("label",{for:"cc-expiration",class:"form-label"},"Expiration"),e("input",{type:"text",class:"form-control rounded-0",id:"cc-expiration",placeholder:"",required:""})])]),e("div",{class:"col-md-6 pb-2"},[e("div",{class:"form-group"},[e("div",{class:"d-flex"},[e("label",{for:"cc-cvv",class:"form-label d-flex w-100 justify-content-between align-items-center"},"Security Code"),e("button",{type:"button",class:"btn btn-link p-0 fw-bolder fs-xs text-nowrap","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"A CVV is a number on your credit card or debit card that's in addition to your credit card number and expiration date"}," What's this? ")]),e("input",{type:"text",class:"form-control rounded-0",id:"cc-cvv",placeholder:"",required:""})])])])]),e("div",{class:"paypal-details bg-light p-4 d-none mt-3 fw-bolder"}," Please click on complete order. You will then be transferred to Paypal to enter your payment details. ")])]),e("div",{class:"col-12 col-lg-6 col-xl-5"},[e("div",{class:"bg-light p-4 m-2 sticky-content top-5"},[e("div",{class:"border-bottom pb-3"},[e("div",{class:"d-md-flex justify-content-between align-items-start py-2"},[e("div",{class:"d-flex flex-grow-1 justify-content-start align-items-start"},[e("div",{class:"position-relative f-w-20 border p-0 me-4"},[e("span",{class:"checkout-item-qty"},"1"),e("img",{src:s,alt:"",class:"crtmg img-fluid"})]),e("div",null,[e("p",{class:"mb-1 fs-6 fw-bolder"},"Mens StormBreaker Jacket"),e("span",{class:"fs-xs text-uppercase fw-bolder text-muted"},"Mens / Blue / Medium")])]),e("div",{class:"flex-shrink-0 fw-bolder"},[e("span",null,"$1129.99")])]),e("div",{class:"d-md-flex justify-content-between align-items-start py-2"},[e("div",{class:"d-flex flex-grow-1 justify-content-start align-items-start"},[e("div",{class:"position-relative f-w-20 border p-0 me-4"},[e("span",{class:"checkout-item-qty"},"2"),e("img",{src:l,alt:"",class:"crtmg img-fluid"})]),e("div",null,[e("p",{class:"mb-1 fs-6 fw-bolder"},"North Face Jacket"),e("span",{class:"fs-xs text-uppercase fw-bolder text-muted"},"Mens / Blue / Large")])]),e("div",{class:"flex-shrink-0 fw-bolder"},[e("span",null,"$999.98")])]),e("div",{class:"d-md-flex justify-content-between align-items-start py-2"},[e("div",{class:"d-flex flex-grow-1 justify-content-start align-items-start"},[e("div",{class:"position-relative f-w-20 border p-0 me-4"},[e("span",{class:"checkout-item-qty"},"1"),e("img",{src:t,alt:"",class:"crtmg img-fluid"})]),e("div",null,[e("p",{class:"mb-1 fs-6 fw-bolder"},"Womens Adidas Hoodie"),e("span",{class:"fs-xs text-uppercase fw-bolder text-muted"},"Womens / Red / Medium")])]),e("div",{class:"flex-shrink-0 fw-bolder"},[e("span",null,"$59.99")])])]),e("div",{class:"py-3 border-bottom"},[e("div",{class:"d-flex justify-content-between align-items-center mb-2"},[e("p",{class:"m-0 fw-bolder fs-6"},"Subtotal"),e("p",{class:"m-0 fs-6 fw-bolder"},"$422.99")]),e("div",{class:"d-flex justify-content-between align-items-center"},[e("p",{class:"m-0 fw-bolder fs-6"},"Shipping"),e("p",{class:"m-0 fs-6 fw-bolder"},"$8.95")])]),e("div",{class:"py-3 border-bottom"},[e("div",{class:"d-flex justify-content-between align-items-center"},[e("div",null,[e("p",{class:"m-0 fw-bold fs-5"},"Grand Total"),e("span",{class:"text-muted small"},"Inc $45.89 sales tax")]),e("p",{class:"m-0 fs-5 fw-bold"},"$422.99")])]),e("div",{class:"py-3 border-bottom"},[e("div",{class:"input-group mb-0"},[e("input",{type:"text",class:"form-control rounded-0",placeholder:"Enter your coupon code"}),e("button",{class:"btn btn-golden rounded-0 btn-sm px-4"},"Apply")])]),e("div",{class:"form-group form-check my-4"},[e("input",{type:"checkbox",class:"form-check-input",id:"accept-terms",checked:""}),e("label",{class:"form-check-label fw-bolder",for:"accept-terms"},[d("I agree to Alpine's "),e("a",{href:"#"},"terms & conditions")])]),e("a",{href:"#",class:"btn btn-golden rounded-0 w-100",role:"button"},"Complete Order")])])])],-1);function p(f,u,b,v,h,y){return o(),c(r,null,[n,m],64)}const k=a(i,[["render",p]]);export{k as default};