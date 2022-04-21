/**
 * 全局挂载
 * 注册：
 * const app = createApp(App);
 * app.config.globalProperties.$httpUrl = 'https://www.baidu.com'
 * 使用：
 * const globalProperties = useGetGlobalProperties()
 */
import { getCurrentInstance } from "vue"
export default function useGetGlobalProperties() {
  const { appContext: { app: { config: { globalProperties } } } } = getCurrentInstance() as any
  return { ...globalProperties }
}