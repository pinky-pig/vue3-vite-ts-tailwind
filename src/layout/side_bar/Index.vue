<template>
  <div :class='$style["side-bar"]'>
    <n-menu :theme="isDark ? darkTheme : undefined" :options="menuOptions" />
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/plugins'
import { darkTheme } from 'naive-ui'
import { Icon } from '@iconify/vue';
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
  AlertCircleOutline as ErrorIcon,
  FolderOpenOutline as FolderIcon,
  BookOutline as NoteIcon,
  EarthOutline as MapIcon,
  DiscOutline as ThreeIcon,
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => 'Dashboard' }
      ),
    key: 'go-to-dashboard',
    icon: renderIcon(WorkIcon)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
        backgroundColor: '#18a05880'
      }
    }
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/projects'
          }
        },
        { default: () => 'projects' }
      ),
    key: 'go-to-projects',
    icon: renderIcon(FolderIcon),
    children: [
      {
        type: 'group',
        label: '项目',
        key: 'projects',
        children: [
          {
            label: 'ThreeJS',
            key: 'ThreeJS',
            icon: renderIcon(ThreeIcon)
          },
          {
            label: 'Map',
            key: 'Map',
            icon: renderIcon(MapIcon)
          }
        ]
      },
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/note'
          }
        },
        { default: () => 'note' }
      ),
    key: 'go-to-note',
    icon: renderIcon(NoteIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/404'
          }
        },
        { default: () => '404' }
      ),
    key: 'go-to-404',
    icon: renderIcon(ErrorIcon)
  },

]
</script>

<style lang="less" module>
.side-bar{
  @apply wh-full border-r border-gray-200;
  background: var(--layout-sidebar-bg);
  color: var(--layout-sidebar-text);
  min-width: 170px;
  // padding: 0 1rem;
}
</style>
