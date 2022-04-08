import { ref, onMounted, onUnmounted } from 'vue';

/**
 * 调用这个钩子就可以获得 window 的宽度和高度。
 * const { width, height } = useWindowResize();
 * @returns Object { width, height } window 的宽度和高度。
 */
export function useWindowResize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
    height
  }
}
