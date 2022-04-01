<template>
  <div :class='$style["navigation-bar"]'>
    标题
  </div>
</template>
<script setup lang='ts'>

</script>

<style lang='less' module>
.navigation-bar{
  @apply w-full h-full;
  background: @layout-header-bg;
  color: @layout-header-text;
}

</style>