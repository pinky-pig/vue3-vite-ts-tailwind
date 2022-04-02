import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import type { App } from 'vue';
/** 按需引入elementUI */
export default function setupElementUI(app: App) {
  app.use(ElementPlus);
}