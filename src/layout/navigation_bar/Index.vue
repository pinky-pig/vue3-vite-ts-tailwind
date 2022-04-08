<template>
  <div :class='$style["navigation-bar"]'>
    logo
    <el-switch v-model="themeSwitch" active-color="#13ce66" inactive-color="#ff4949"  @click="changeThemeFunc"></el-switch>
  </div>
</template>
<script setup lang='ts'>
import { useTheme } from "@/hooks"
import { ref } from "@vue/reactivity";
import { anchorLight } from "naive-ui/lib/anchor/styles";
const changeTheme = useTheme();
const themeSwitch = ref(true)
const changeThemeFunc = () => {
  themeSwitch.value ? changeTheme('default') : changeTheme('dark')
}

</script>

<style lang='less' module>

.navigation-bar{
  @apply w-full h-full flex items-center;
  background: @layout-header-bg;
  color: @layout-header-text;
  padding: 0 1.5rem;
}

</style>