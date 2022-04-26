<template>
  <div :class='$style["dashboard"]'>
    <!-- <h3>1.项目嵌套 -- monorepo</h3>
    <h3>3.https://picsum.photos/40</h3>
    <h3>4.vue-plugin-pages 基于文件系统的路由生成器</h3>
    <h3>5.Teleport</h3>
    <h3>6.v-bind:title="message"</h3>
    <h3>7.大文件上传</h3> -->
    <ContainerComponent class="w-40px h-40px" />
  </div>
</template>
<script setup lang="ts">
import { ContainerComponent } from '@/layout/navigation_bar/logo/logo'
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