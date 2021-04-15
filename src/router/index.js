import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from '../views/Resume.vue'
import NotFound from '../views/ＮotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
