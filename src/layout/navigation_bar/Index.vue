<template>
  <div :class='$style["navigation-bar"]'>
    <div class="w-[40px] h-[40px] rounded-xl overflow-hidden cursor-pointer" @click="goHome" >
      <img src="https://picsum.photos/40" alt="">
    </div>
    <div class=" flex flex-1 flex-row justify-between">
      <div>

      </div>
      <div :class="$style.right" class=" flex-y-center gap-5">
        <n-space vertical>
          <n-input :theme="isDark ? darkTheme : undefined" type="text" placeholder="search" v-model:value="keyWord" />
        </n-space>
        <nav class="base-hover">Blog</nav>
        <nav class="base-hover">Project</nav>
        <nav class="base-hover" @click="routerPush">404</nav>
        <Icon :icon="isDark ? 'akar-icons:moon' : 'akar-icons:sun'"
          class=" w-6 h-6 base-hover" @click="toggleDark()" />
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { Icon } from '@iconify/vue';
import { isDark, toggleDark } from '@/plugins'
import { darkTheme } from 'naive-ui'
import { useRouter } from 'vue-router';
const keyWord = ref(null)

const router = useRouter()
const routerPush = () => {
  router.push({
    path:'/404',
    query:{ num:1 }
  });
}
const goHome = () => {
  router.push('/');
}


</script>

<style lang='less' module>
.navigation-bar{
  @apply wh-full flex-y-center border-gray-200 border-b select-none;
  background: var(--layout-header-bg);
  color: var(--layout-header-text);
  padding: 0 2rem;
}

</style>