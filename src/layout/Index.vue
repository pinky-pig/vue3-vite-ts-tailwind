<template>
  <div :class="$style['app-wrapper']">
    <!-- <Sidebar></Sidebar> -->
  </div>
</template>
<script setup lang="ts">
import { Sidebar } from './index'

</script>

<style lang="less" module>
.app-wrapper{
  width: 100%;
  height: 100%;
  background: @color-primary ;
}

</style>