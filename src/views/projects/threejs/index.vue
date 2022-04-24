<template>
  <div :class='$style["three-page"]'>


  </div>
</template>
<script setup lang="ts">
</script>

<style lang='less' module>
.three-page{
  @apply wh-full flex-y-center;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  border-radius: 2%;
  padding: 0 2rem;
}
</style>