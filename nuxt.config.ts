// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['nuxt-gtag'],
  app: {
    baseUrl: '/lenetl/'
  },
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || ""
    }
  }
})
