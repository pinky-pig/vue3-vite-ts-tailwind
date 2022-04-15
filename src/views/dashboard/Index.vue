<template>
  <div :class='$style["dashboard"]'>
    dashboard
  </div>
</template>
<script setup lang="ts">
</script>

<style lang='less' module>
.dashboard{
  @apply wh-full flex-y-center;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  padding: 0 2rem;
}
</style>