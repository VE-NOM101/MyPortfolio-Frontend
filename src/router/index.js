import { createRouter, createWebHistory } from 'vue-router'
import LandingLayout from '@/layouts/LandingLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import LandingPage from '@/views/landing/LandingPage.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import MoreAboutMe from '@/views/landing/MoreAboutMe.vue'
import ReadProject from '@/views/landing/ReadProject.vue'

const routes = [
  {
    path: '/',
    component: LandingLayout,
    children: [
      { path: '', component: LandingPage },
      { path: 'more-about-me', component: MoreAboutMe },
      { path: 'read-project/:id', component: ReadProject },
    ],
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
