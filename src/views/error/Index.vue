<template>
  <div :class='$style["error-page"]'>
    404
  </div>
</template>
<script setup lang="ts">
</script>

<style lang='less' module>
.error-page{
  @apply wh-full flex-y-center;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  padding: 0 2rem;
}
</style>