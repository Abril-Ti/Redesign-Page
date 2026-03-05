import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
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
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
    /*{
      path: '/form',
      name: 'form',
      component: () => import('../views/Form.vue')
    }*/
  ],
});

export default router;
