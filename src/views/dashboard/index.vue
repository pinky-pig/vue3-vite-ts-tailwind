<template>
  <div :class='$style["dashboard"]'>
    <!-- <h3>1.项目嵌套 -- monorepo</h3>
    <h3>2.组件渲染前的loading -- v-cloak</h3>
    <h3>3.https://picsum.photos/40</h3>
    <h3>4.vue-plugin-pages 基于文件系统的路由生成器</h3>
    <h3>5.Teleport</h3>
    <h3>6.v-bind:title="message"</h3>
    <h3>7.大文件上传</h3>
    <h3>8.setup函数</h3> -->
  </div>
</template>
<script setup lang="ts">
</script>

<style lang='less' module>
.dashboard{
  @apply wh-full flex-col;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  border-radius: 2%;
  padding: 0 2rem;
}
</style>