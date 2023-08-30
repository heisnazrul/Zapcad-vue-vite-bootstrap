import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../Pages/About.vue')
    },
    {
      path: '/blogpage',
      name: 'BlogPage',
      component: () => import('../Pages/BlogPage.vue')
    },
    {
      path: '/BlogPost',
      name: 'blogpost',
      component: () => import('../Pages/BlogPost.vue')
    },
    {
      path: '/Shop',
      name: 'shop',
      component: () => import('../Pages/Shop.vue')
    },
    {
      path: '/Product',
      name: 'product',
      component: () => import('../Pages/Singleproduct.vue')
    },
    {
      path: '/Cart',
      name: 'cart',
      component: () => import('../Pages/Cart.vue')
    },
    {
      path: '/Checkout',
      name: 'Checkout',
      component: () => import('../Pages/Checkout.vue')
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: () => import('../Pages/PrivacyPolicy.vue')
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: () => import('../Pages/Faq.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../Pages/Contact.vue')
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../Pages/Signup.vue')
    },
    
  ]
})

export default router
