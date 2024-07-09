import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'Landing',
      component: () => import('../views/Landing.vue')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/usuarioGrupos/:lista',
      name: 'usuarioGrupos',
      component: () => import('../views/usuarioGrupos.vue')
    },
    {
      path: '/autenticidad/:id',
      name: 'autenticidad',
      component: () => import('../views/Autenticidad.vue')
    },
  ]
})

export default router
