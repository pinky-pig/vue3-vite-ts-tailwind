import { defineStore } from 'pinia'

export const useColorStore = defineStore({
  id: 'color',
  state: () => {
    return {
      color: '#fff1'
    }
  },
  actions: {
    changeColor(color:any) {
      this.color = color
    },
  },
  getters: {
    getColor: (state) => {
      return state.color
    }
  }
})