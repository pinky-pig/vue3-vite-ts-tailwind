<template>
  <div :class='$style["navigation-bar"]'>
    <div class="w-[40px] h-[40px]">
      <img src="https://picsum.photos/40" alt="">
    </div>
    <div class=" flex flex-1 flex-row justify-between">
      <div></div>
      <div class=" flex-y-center">
        <!-- <Icon :icon="isDark ? 'akar-icons:moon' : 'akar-icons:sun'"
          class=" w-6 h-6 cursor-pointer"
          @click="changeThemeFunc();toggleDark()"
        /> -->

      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { useTheme } from "@/hooks"
import { Icon } from '@iconify/vue';
// import { isDark, toggleDark } from '@/plugins'

const changeTheme = useTheme();
// const themeSwitch = ref(true)
/**切换预置主题颜色 */
const changeThemeFunc = () => {
  isDark.value ? changeTheme('dark') : changeTheme('default')
}

</script>

<style lang='less' module>

.navigation-bar{
  @apply wh-full flex-y-center;
  background: @layout-header-bg;
  color: @layout-header-text;
  padding: 0 2rem;
}

</style>