import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tasks from '../views/Tasks.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
