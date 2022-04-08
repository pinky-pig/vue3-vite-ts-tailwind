import { onMounted, onUnmounted } from 'vue';

/**
 * 点击其它区域关闭弹窗
 * @param ref dom元素
 * @param callback 参数
 *  const container = ref(null);
 *  useOnClickOutside(container, () => {
 *    console.log('Clicked outside');
 *  })
 */
export const useOnClickOutside = (ref:any, callback = () => {}) => {
  function handleClickOutside(event:any) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
}
