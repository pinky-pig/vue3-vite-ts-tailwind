import { useTitle } from '@vueuse/core';
import { Router, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  onBeforeRouteLeave((to, from, next) => {
    next()
  })
  onBeforeRouteUpdate((to, from, next) => {
    useTitle("设置标题");
  })
}
