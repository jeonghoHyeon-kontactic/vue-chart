import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalysisView from '../views/AnalysisView'
import AnalysisDetail from '../components/analysis/AnalysisDetail'
import MypageView from "../views/MypageView"
import ProductView from "../views/ProductView"
import LoginView from "../views/LoginView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: AnalysisView
  },
  {
    path: '/analysis/:id',
    name: 'detail',
    component: AnalysisDetail
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MypageView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
