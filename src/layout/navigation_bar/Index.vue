<template>
  <div :class='$style["navigation-bar"]'>
    logo
  </div>
</template>
<script setup lang='ts'>

</script>

<style lang='less' module>

.navigation-bar{
  @apply w-full h-full flex items-center;
  background: @layout-header-bg;
  color: @layout-header-text;
  padding: 0 1.5rem;
}

</style>