<template>
  <div :class='$style["navigation-bar"]'>
    logo
    <el-switch v-model="themeSwitch" active-color="#13ce66" inactive-color="#ff4949"  @click="changeThemeFunc"></el-switch>
    <el-button type="primary" @click="viewViewport"> alert</el-button>

    <div class=" w-20 h-10 bg-pink-300" ref="containerCO" ></div>
  </div>
</template>
<script setup lang='ts'>
import { useTheme, useViewport, useOnClickOutside} from "@/hooks"
import { ref } from "@vue/reactivity";
import { anchorLight } from "naive-ui/lib/anchor/styles";
const changeTheme = useTheme();
const themeSwitch = ref(true)
/**切换预置主题颜色 */
const changeThemeFunc = () => {
  themeSwitch.value ? changeTheme('default') : changeTheme('dark')
}
/**返回当前设备屏幕  */
const viewViewport = () => { }
const { device } = useViewport({ mobile: 680, tablet: 1080 });
console.log(device.value)
/**点击其他区域 */
const containerCO = ref(null);
useOnClickOutside(containerCO, () => {
  console.log('Clicked outside');
})

</script>

<style lang='less' module>

.navigation-bar{
  @apply w-full h-full flex items-center;
  background: @layout-header-bg;
  color: @layout-header-text;
  padding: 0 1.5rem;
}

</style>