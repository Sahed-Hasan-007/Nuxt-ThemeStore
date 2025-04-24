// composables/useThemes.ts
export const useThemes = async () => {
  const { data } = await useFetch('/api/themes')
  return data
}
