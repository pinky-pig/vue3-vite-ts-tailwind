<template>
  <section :class="$style['app-main']">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="less" module>
.app-main {
  /* 50= navbar  50  */
  min-height: 350px;
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
