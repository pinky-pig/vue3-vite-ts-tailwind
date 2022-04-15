<template>
  <div :class='$style["navigation-bar"]'>
    <div class="w-[40px] h-[40px]">
      <img src="https://picsum.photos/40" alt="">
    </div>
    <div class=" flex flex-1 flex-row justify-between">
      <div></div>
      <div class=" flex-y-center">
        <Icon :icon="isDark ? 'akar-icons:moon' : 'akar-icons:sun'"
          class=" w-6 h-6 cursor-pointer" @click="toggleDark()" />
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { Icon } from '@iconify/vue';
import { isDark, toggleDark } from '@/plugins'
</script>

<style lang='less' module>

.navigation-bar{
  @apply wh-full flex-y-center border-gray-200 border-b;
  background: var(--layout-header-bg);
  color: var(--layout-header-text);
  padding: 0 2rem;
}

</style>