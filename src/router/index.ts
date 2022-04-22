import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Layout from '../layout/index.vue'
import { createRouterGuard } from './guard';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      },
      {
        path: '/projects',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/projects/index.vue'),
        name: 'projects',
        meta: {
          title: 'projects',
          icon: '#icondashboard',
          affix: true
        }
      },
      {
        path: '/note',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/note/index.vue'),
        name: 'note',
        meta: {
          title: 'note',
          icon: '#icondashboard',
          affix: true
        }
      },
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/error/index.vue'),
    name: 'error',
    meta: {
      title: 'error',
      icon: '#icondashboard',
      affix: true
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}

