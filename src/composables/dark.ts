import { useDark, useToggle } from "@vueuse/core"
export const isDark = useDark()
/** useDark是存到localStorage中 vueuse-color-scheme */
export const toggleDark = useToggle(isDark)
