import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupNaiveUI, setupElementUI} from './setup/index';
import { setupStyle } from './styles/index';

async function setupApp() {

  // 设置样式
  setupStyle()

  const app = createApp(App);

  // 挂载pinia状态
  setupStore(app)

  // 按需引入naiveUI
  setupNaiveUI(app)
  // 全局引入elementUI
  setupElementUI(app)

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载 App
  app.mount('#app');
}

setupApp();

