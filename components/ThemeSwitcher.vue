<template>
    <select @change="setTheme($event.target.value)" class="p-2 border rounded">
      <option v-for="theme in themeStore.themes" :key="theme.name" :value="theme.name">
        {{ theme.name }}
      </option>
    </select>
  </template>
  
  <script setup lang="ts">
  const themeStore = useThemeStore()
  const setTheme = (name: string) => themeStore.setTheme(name)
  </script>