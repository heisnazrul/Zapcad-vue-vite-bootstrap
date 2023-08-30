<script setup>
    import { useMobileMenuStore } from '@/stores/useMobileMenu.js'

    const navbar = useMobileMenuStore()
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-white sticky-top">
        <div class="container mx-auto">
            <a class="navbar-brand m-0" href="/">
                <img src="@/assets/images/logo.png" class="img-fluid" alt="Zapkad Logo" />
            </a>
            <button class="navbar-toggler" type="button" @click="navbar.show()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Zapkad Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Success Stories</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/shop">Shop</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/blogpage">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/contact">Contact Us</router-link>
                    </li>
                    
                    
                </ul>
                <div class="m-0">
                    <router-link class="btn btn-primary rounded-pill px-4 mx-1 py-2 fw-bold text-light" to="/Signup">Sign Up</router-link>
                    <router-link class="btn btn-warning rounded-pill px-4 mx-1 py-2 fw-bold text-light" to="/Signup">Sign In</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
