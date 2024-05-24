import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/WorkView.vue')
    },
    {
      path: '/projects',
      name: 'project',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path: '/api/portfolio',
      name: 'PortfolioPage',
      component: () => import('@/components/PortfolioPage.vue')
    },
  ]
})

export default router