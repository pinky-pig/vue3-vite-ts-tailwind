import type { App } from 'vue';
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

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}

