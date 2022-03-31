<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h3>{{ data }}</h3>
  <h4>{{ name }}</h4>
  <h4>{{ sex }}</h4>
  <button @click='changeName'>method改变张三</button>
  <h1>{{toolsType}}</h1>
  <br>
  <hr>
  <h3>{{msg}}</h3>
  <h3>{{propsVal}}</h3>
  <h3>{{props.propsVal}}</h3>
  <button @click='changeEmit'>emit</button>
  <br>
  <hr>
  <h4 @click="changeInfo">我叫{{ modelValue }}，今年{{ age }}岁。v-model</h4>

  <!-- // 匿名插槽 -->
  <slot/>
  <!-- // 具名插槽 -->
  <slot name='title'/>
  <!-- // 作用域插槽 -->
  <slot name="footer" :scope="person" />
  <hr>
  <button @click='gotoRoute'>路由跳转</button>
  <router-view />
  <br>
  <hr>
  <span>v-bind() CSS变量注入</span>

  <div class=" w-20 h-20 bg-red-300">tailwind</div>
</template>

<script setup lang="ts">
import { useSlots, reactive, ref, toRefs, computed, watch, nextTick,
onBeforeMount,
onMounted,
onBeforeUpdate,
onUpdated,
onBeforeUnmount,  // destroyed
onUnmounted,  // beforeDestroyed
onErrorCaptured,
onRenderTracked,
onRenderTriggered,
} from "vue"
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate  } from 'vue-router'
// 二.data
// ref声明响应式数据，用于声明基本数据类型
const data:number = ref(1)
data.value = 2
// reactive声明响应式数据，用于声明引用数据类型
const person:object = reactive({
  name: '张三',
  sex: '男'
})
person.name = '李四'
// 使用toRefs解构 template可直接使用{{name}}、{{sex}}
const { name, sex } = toRefs(person)

// 三.methods
const changeName = () => {
  person.name = 'Tom'
}
// 四.computed
const doubleCount = computed(() => {
  return data.value * 2
})
console.log(doubleCount.value)
// 五.watch
watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log(person.name)
    console.log(`watch监听变化前的数据：${oldVal}`)
    console.log(`watch监听变化后的数据：${newVal}`)
  },
  {
    immediate: true, // 立即执行
    deep: true // 深度监听
  }
)
// 六.props父传子
const props = defineProps({
  propsVal: {
    type: String,
    default: ''
  },
  msg: {
    type: String,
    default: ''
  },

  modelValue: String,
  age: Number,
  border: {
    type: String,
    default: '1px solid yellow'
  }
})

// 七.emit子传父
// 声明事件
const emit = defineEmits(['updateName','update:modelValue', 'update:age'])
const changeEmit = () => {
  emit('updateName', '子emit父，再props子')
}
// 八.v-model
const changeInfo = () => {
  // 触发父组件值更新
  emit('update:modelValue', 'Tom')
  emit('update:age', 30)
}

// 九.nextTick
nextTick(()=>{ })

// 十.ref子组件实例和defineExpose
// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  // 解构state
  ...toRefs(person),
  // 声明方法
  changeName,
})
// 十一.插槽slot(匿名插槽、具名插槽、作用域插槽)
const slots = useSlots()
// 匿名插槽使用情况
const defaultSlot = reactive(slots.default && slots.default().length)
console.log(defaultSlot) // 1
// 具名插槽使用情况
const titleSlot = reactive(slots.title && slots.title().length)
console.log(titleSlot) // 3

// 十二.路由useRoute和useRouter
// 必须先声明调用
const route = useRoute()
const router = useRouter()
const gotoRoute = () => {
  // 路由meta出于alpha阶段
  // 路由信息
  console.log(route.query)
  // 路由跳转
  // router.push('/RoutePage')
  router.push({
    path:'/RoutePage',
    query:{ num:1 }
    // name:'Home',
    // params:{ num:1 }
  });
}
// 十三.路由守卫 路由及路由守卫有很多内容，详情见官网文档
// 添加一个导航守卫，在当前组件将要离开时触发。
onBeforeRouteLeave((to, from, next) => {
  next()
})

// 添加一个导航守卫，在当前组件更新时触发。
// 在当前路由改变，但是该组件被复用时调用。
onBeforeRouteUpdate((to, from, next) => {
  next()
})

// 十四.Pinia
import { useToolsStore } from '../store/tools'
const toolsStore = useToolsStore()
var toolsType = computed(() => toolsStore.getType)
console.log(toolsType)

// 十五.生命周期
onBeforeMount(() => {
  console.log("DOM即将挂载");
})

// 十六.原型绑定与组件内使用
// import { createApp } from 'vue'
// import App from './App.vue'
// const app = createApp(App)
// // 获取原型
// const prototype = app.config.globalProperties
// prototype.name = 'Jerry'

// import { getCurrentInstance } from 'vue'
// // 获取原型
// const { proxy } = getCurrentInstance()
// // 输出
// console.log(proxy.name)

// 十七.v-bind() CSS变量注入
// 常量声明样式
const background = 'red'
// 响应式数据声明样式
const color = ref('blue')
const style = reactive({
  opacity: '0.8'
})


</script>
<style lang="less" scoped>
span {
  // 使用常量声明的样式
  background: v-bind(background);

  // 使用响应式数据声明的样式
  color: v-bind(color);
  opacity: v-bind('style.opacity');

  // 使用prop接收的样式
  border: v-bind('props.border');
}
</style>
