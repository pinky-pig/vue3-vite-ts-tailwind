import {
  // create naive ui
  create,
  // component
  NConfigProvider,
  NMessageProvider,
  NButton,
  NIcon,
} from 'naive-ui'

export const naive = create({
  components: [
    NConfigProvider,
    NMessageProvider,
    NButton,
    NIcon,
  ]
})
