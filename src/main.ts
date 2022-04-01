import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// tailWind-css
import './style/index.css'

// 路由
import router from './router/index'
app.use(router)

// naive组件
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { naive } from './setup/naive'
app.use(naive)

// ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// VueX
import store from './store'
app.use(store)
app.mount('#app')
