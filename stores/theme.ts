// stores/theme.ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themes: [],
    currentTheme: null
  }),
  actions: {
    async loadThemes() {
      const { data } = await useFetch('/api/themes')
      this.themes = data.value || []
      this.currentTheme = this.themes[0] // default
    },
    setTheme(name: string) {
      const theme = this.themes.find(t => t.name === name)
      if (theme) this.currentTheme = theme
    }
  }
})
