/**
 * 改变全局定义的主题变量。使用了vueUse的useDark，此方法废弃。如果改变多套颜色变量可使用。
 * @param key 定义的变量key
 * @example
 * const changeTheme = useTheme();
 * const changeThemeFunc = () => {
 *   isDark.value ? changeTheme('dark') : changeTheme('default')
 * }
 * const changeThemeFunc = () => {
 *   isDark.value ? changeTheme('dark') : changeTheme('default')
 * }
 */
export default function useTheme(key = 'theme') {
  return (theme: string) => {
    document.documentElement.setAttribute(key, theme);
  }
}
