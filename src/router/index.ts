import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes: [{
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      router.push('/users')
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'userDetails',
    component: () => import('../views/UserDetails.vue'),
  },],
})

export default router
