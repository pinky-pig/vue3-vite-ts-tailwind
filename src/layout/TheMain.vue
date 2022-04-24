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
  /* 63 = navbar  63  */
  background: var(--layout-main-outer-bg);
  min-height: 350px;
  height: calc(100vh - 63px);
  width: 100%;
  padding: 15px;
  position: relative;
  overflow: hidden;
}
</style>
