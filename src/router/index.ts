import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/delegation',
    meta: {
      hidden: true
    }
  },
  {
    path: '/delegation',
    name: 'delegation',
    component: () => import('../views/delegation-pieces/DelegationView.vue'),
    meta: {
      hidden: false
    }
  },
  {
    path: '/css-layout',
    name: 'csslayout',
    component: () => import('../views/css-layout/CssLayout.vue'),
    meta: {
      hidden: false
    }
  },
  {
    path: '/display-grid',
    name: 'displayGrid',
    component: () => import('../views/display-grid/DisplayGrid.vue'),
    meta: {
      hidden: false
    }
  },
  {
    path: '/css-class',
    name: 'cssClass',
    component: () => import('../views/css-class/PseudoClass.vue'),
    meta: {
      hidden: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
