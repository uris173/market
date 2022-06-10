import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/bread/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import( '../views/Product.vue')
  },
  // {
  //   path: '/cardprod',
  //   name: 'CardProduct',
  //   component: () => import( '../views/CartProd.vue')
  // },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import( '../views/Like.vue')
  },
  {
    path: '/toORder',
    name: 'ToOrder',
    component: () => import( '../views/ToOrder.vue')
  },
  // { 
  //   path: '/Prod',
  //   name: 'ProdPage',
  //   component: ()=> import('../views/page/prodPage')
  // },
  { 
    path: `/:id`,
    name: 'Slug',
    component: ()=> import('../views/bread/Category.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
