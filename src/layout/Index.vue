<template>
  <div :class="$style['app-wrapper']">
    <header :class="$style['main-header']">
      <NavigationBar></NavigationBar>
    </header>

    <div :class="$style['main-container']">
      <section :class="$style['sidebar']">
        <Sidebar></Sidebar>
      </section>
      <main :class="$style['main']">
        <Main></Main>
      </main>
    </div>

  </div>
</template>
<script setup lang="ts">
import { Sidebar, NavigationBar, Main } from './index'
</script>

<style lang="less" module>
.app-wrapper{
  @apply flex flex-col overflow-hidden;
  width: 100%;
  height: 100%;
  // background: @color-primary ;
}
.main-header{
  min-height: 63px;
  height: 63px;
  width: 100%;
}
.main-container{
  @apply flex flex-row flex-1;

  .sidebar{
    // 不设置最小宽度，让里面的sideBar内容自动填充
    // min-width: 200px;
    // width: 200px;
    height: 100%;
    max-width: 200px;
  }
  .main{
    flex: 1;
    width: 200px;
    height: 100%;
  }
}


</style>