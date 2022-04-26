<script setup lang="ts">
import { ProxyComponent } from '@/layout/navigation_bar/logo/logo'
</script>

<template>
  <router-view ></router-view>
  <ProxyComponent />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
