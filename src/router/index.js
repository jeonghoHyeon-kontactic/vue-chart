import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalysisView from '../views/AnalysisView'
import AnalysisDetail from '../components/analysis/AnalysisDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
