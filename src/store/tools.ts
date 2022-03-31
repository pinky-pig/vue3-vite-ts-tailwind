import { defineStore } from 'pinia'

export const useToolsStore = defineStore({
  id: 'tools',
  state: () => {
    return {
      type: 'selection'
    }
  },
  actions: {
    SET_TYPE(type:any) {
      this.type = type
    },
  },
  getters: {
    getType: (state) => {
      return state.type
    }
  }
})