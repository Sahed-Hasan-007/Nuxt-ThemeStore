<script setup lang="ts">
const themeStore = useThemeStore()

onMounted(() => {
  themeStore.loadThemes()
})

watch(() => themeStore.currentTheme, (theme) => {
  if (theme?.colors) {
    for (const [key, value] of Object.entries(theme.colors)) {
      document.documentElement.style.setProperty(`--color-${key}`, value)
    }
  }
}, { immediate: true })
</script>

<template>
  <div class="min-h-screen p-8 bg-theme text-theme transition-colors duration-300">
    <h1 class="text-3xl font-bold mb-6">🎨 Dynamic Theming in Nuxt 3</h1>
    <ThemeSwitcher />
    <ThemeShowcase />
  </div>
</template>


<style>
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-primary: #3b82f6;
  --color-card: #f9fafb;
}

html {
  background-color: var(--color-background);
  color: var(--color-text);
}

.bg-theme {
  background-color: var(--color-background);
}

.text-theme {
  color: var(--color-text);
}

.bg-card {
  background-color: var(--color-card);
}

.bg-primary {
  background-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}
</style>

