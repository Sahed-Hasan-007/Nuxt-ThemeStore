<template>
    <div class="relative inline-block text-left py-2">
      <button
        @click="open = !open"
        class="inline-flex justify-between w-48 px-4 py-2 text-sm font-medium text-theme bg-white dark:bg-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
      >
        {{ currentTheme?.name || 'Select Theme' }}
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
  
      <div v-if="open" class="absolute mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li
            v-for="theme in themeStore.themes"
            :key="theme.name"
            @click="selectTheme(theme.name)"
            class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <span
              class="inline-block w-4 h-4 rounded-full border border-gray-300"
              :style="{ backgroundColor: theme.colors.primary }"
            ></span>
            <span class="capitalize">{{ theme.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const themeStore = useThemeStore()
  const open = ref(false)
  
  const selectTheme = (name) => {
    themeStore.setTheme(name)
    open.value = false
  }
  
  const currentTheme = computed(() => themeStore.currentTheme)
  </script>
  