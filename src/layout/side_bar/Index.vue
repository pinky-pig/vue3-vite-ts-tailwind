<template>
  <div :class='$style["side-bar"]'>
    side-bar
  </div>
</template>

<script setup lang="ts">
</script>
<style lang='less' module>
.side-bar{
  @apply wh-full flex-y-center border-r border-gray-200;
  background: var(--layout-sidebar-bg);
  color: var(--layout-sidebar-text);
  padding: 0 2rem;
}
</style>