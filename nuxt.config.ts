// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // include eslint module
  modules: [
    '@nuxt/eslint',
  ],

  // avoid unexpected changes in background modules
  compatibilityDate: '2026-01-24',

  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
