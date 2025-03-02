import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 8097,
  },
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})