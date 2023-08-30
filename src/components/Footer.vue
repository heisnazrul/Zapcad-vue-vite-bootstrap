<template>
    <footer class="footer">
        <div class="container">
            <div class="row gy-4">
                <div class="col">
                    <div class=" py-3 ps-4">
                        <div class="row">
                            <div class="col-12">
                                <div class="row"><div class="col-6"><img src="@/assets/images/f.png" class="img-fluid social-icn"></div>
                                <div class="col-6"><img src="@/assets/images/l.png" class="img-fluid social-icn mt-3"></div>
                            </div>
                            <div class="row mt-4"><div class="col-6"><img src="@/assets/images/i.png" class="img-fluid social-icn"></div>
                                <div class="col-6"><img src="@/assets/images/t.png" class="img-fluid social-icn"></div>
                            </div>
                            
                                <!--ul class="row list-unstyled">
                                    <li class="my-3"></li>
                                    <li class="my-3"><img src="@/assets/images/l.png" class="img-fluid social-icn"></li>
                                </ul-->
                            </div>
                            <!--div class="col-6">
                                <ul class="row list-unstyled">
                                    <li class="my-3"><img src="@/assets/images/i.png" class="img-fluid social-icn"></li>
                                    <li class="my-3"><img src="@/assets/images/t.png" class="img-fluid social-icn"></li>
                                </ul>
                            </div-->
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="border-start py-3 ps-4">
                        <div class="row">
                            <div class="col-12">
                                <ul class="list-unstyled">
                                    <li class="mb-2"><router-link class="footer__link" to="/shop">Our Product</router-link></li>
                                    <li class="mb-2"><a href="#" class="footer__link">For Everyone</a></li>
                                    <li class="mb-2"><a href="#" class="footer__link">For Companies</a></li>
                                    <li class="mb-2"><a href="#" class="footer__link">Pricing Plans</a></li>
                                    <li class="mb-2"><a href="#" class="footer__link">Sign Up / Log In</a></li>
                                    <li class="mb-2"><router-link class="footer__link" to="/Shop">Shop</router-link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="border-start py-3 ps-4">
                        <div class="row">
                            <div class="col-12">
                                <ul class="list-unstyled">
                                    <li class="mb-2"><a href="#" class="footer__link">Company</a></li>
                                    <li class="mb-2"><router-link class="footer__link" to="/About">About Us</router-link></li>
                                    <li class="mb-2"><router-link class="footer__link" to="/Faq">FAQ</router-link></li>
                                    <li class="mb-2"><router-link class="footer__link" to="/Contact">Contact Us</router-link></li>
                                    <li class="mb-2"><a href="#" class="footer__link">Terms of Use</a></li>
                                    <li class="mb-2"><router-link class="footer__link" to="/PrivacyPolicy">Privacy Policy</router-link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-5 text-center mt-4">
                    <img src="@/assets/images/logo-white.png" class="img-fluid mt-3" alt="Zapkad Logo" />
                    <p class="text-white text-lg-end  mt-4">Copyright © 2023 Zapkad Pte Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
.social-icn{
    align-content: center;
    width: 40px;
    height: 40px;
}
</style>