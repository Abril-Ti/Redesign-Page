import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/NosotrosView.vue'),
    },
    {
      path: '/compromiso',
      name: 'compromiso',
    component: () => import('../views/CompromisoView.vue'),
    },
    {
      path: '/sabiasque',
      name: 'sabiasque',
      component: () => import('../views/SabiasqueView.vue'),
    },
    {
      path: '/contacto',
      name: '/contacto',
      component: () => import('../views/ContactoView.vue'),
    },
    
  ],
})

export default router
