<template>
  <h1>RoutePage</h1>
</template>

<script setup lang="ts">
import { useRoute, useRouter,onBeforeRouteLeave, onBeforeRouteUpdate   } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log("路由传参：",route.query)
onBeforeRouteLeave((to, from, next) => {
  console.log(to)
  next()
})

// 添加一个导航守卫，在当前组件更新时触发。
// 在当前路由改变，但是该组件被复用时调用。
onBeforeRouteUpdate((to, from, next) => {
  console.log(to)
  next()
})
</script>
