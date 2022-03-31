import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// tailWind-css
import './style/default.css'

import router from './router/index'
app.use(router)

// VueX
import store from './store'
app.use(store)
app.mount('#app')
