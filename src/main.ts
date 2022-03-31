import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// tailWind-css
import './style/default.css'

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

// VueX
import store from './store'
app.use(store)
app.mount('#app')
