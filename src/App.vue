<template>
  <HelloWorld
    msg="组件传值"
    :propsVal="propsVal.name"
    @updateName="updateName"
    v-model="state.name"
    v-model:age="state.age"
    ref='childRef'
    >


    <span>我是默认插槽</span>
    <template #title>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
    </template>
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，性别：{{ scope.sex }}</footer>
    </template>

  </HelloWorld>
</template>
<script setup lang="ts">
import { reactive, ref, nextTick  } from "vue"
import HelloWorld from './components/HelloWorld.vue'

const propsVal = reactive({
  name:"父传子"
})
const state = reactive({
  name: 'Jerry',
  age: 20
})
const updateName = (name) => {
  propsVal.name = name
}

// 子组件ref（TypeScript语法）获取一个
// 获取多个v-for渲染出来的需要 HTML(:ref='(el) => childRefs[i] = el'),JS(const childRefs = ref([]))
const childRef = ref<InstanceType<typeof HelloWorld>>()
// nextTick
nextTick(() => {
  // 获取子组件name
  console.log(childRef.value.name)
  // 执行子组件方法
  childRef.value.changeName()
})

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
