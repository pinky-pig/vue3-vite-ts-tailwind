import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Layout from '../layout/Index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

