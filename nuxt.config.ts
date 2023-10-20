// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@invictus.codes/nuxt-vuetify'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          FontFace: {}
        }
      }
    },
    moduleOptions: {
      styles: {
        configFile: '~/assets/variables.scss'
      },
      useVuetifyLabs: true
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  }
});
