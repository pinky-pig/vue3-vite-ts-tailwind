import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Layout from '../layout/Index.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/RoutePage',
  //   name: 'RoutePage',
  //   component: () => import('../components/RoutePage.vue'), // 注意这里要带上 文件后缀.vue
  // },
  {
    path: '/',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: 'dashboard',
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

