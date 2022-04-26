import Logo from './index.vue'
import { createStarport } from '@/composables'

export const { ContainerComponent, ProxyComponent } = createStarport(Logo)
