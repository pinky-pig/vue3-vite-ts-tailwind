<template>
  <div :class='$style["note-page"]'>
    <ContainerComponent class="w-120px h-120px" />
  </div>
</template>
<script setup lang="ts">
import { ContainerComponent } from '@/layout/navigation_bar/logo/logo'
</script>

<style lang='less' module>
.note-page{
  @apply wh-full flex-y-center;
  background: var(--layout-main-bg);
  color: var(--layout-main-text);
  border-radius: 2%;
  padding: 0 2rem;
}
</style>