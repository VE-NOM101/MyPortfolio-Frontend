import { createRouter, createWebHistory } from 'vue-router'
import LandingLayout from '@/layouts/LandingLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import LandingPage from '@/views/landing/LandingPage.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: LandingLayout,
    children: [{ path: '', component: LandingPage }],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [{ path: '', component: Dashboard }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
