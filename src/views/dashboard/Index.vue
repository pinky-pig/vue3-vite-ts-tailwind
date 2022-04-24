<template>
  <div :class='$style["dashboard"]'>
    1.项目嵌套
    2.组件渲染前的loading
    3.https://picsum.photos/40
    4.vue-plugin-pages 基于文件系统的路由生成器
  </div>
</template>
<script setup lang="ts">
</script>

<style lang='less' module>
.dashboard{
  @apply wh-full flex-y-center;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  border-radius: 2%;
  padding: 0 2rem;
}
</style>