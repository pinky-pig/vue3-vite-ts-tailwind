import { useTitle } from '@vueuse/core';
import { Router } from 'vue-router'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async () => {
    window.$loadingBar?.start()
  });
  router.afterEach((to: any) => {
    window.$loadingBar?.finish()
  })
}
