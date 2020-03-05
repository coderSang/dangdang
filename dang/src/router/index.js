import Vue from 'vue'
import VueRouter from 'vue-router'


// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Worth = () => import('views/worth/Worth')
const Info=()=>import('views/info/Info')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/worth',
    component: Worth
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
