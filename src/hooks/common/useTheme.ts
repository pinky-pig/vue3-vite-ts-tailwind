/**
 * 改变全局定义的主题变量
 * @param key 定义的变量key
 * @returns
 */
export default function useTheme(key = 'theme') {
  return (theme: string) => {
    document.documentElement.setAttribute(key, theme);
  }
}
