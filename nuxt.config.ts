// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },

  eslint: {
    /* module options */
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-intersection-observer',
    'nuxt-swiper',
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        dir: 'ltr',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'ru', // Основной язык русский
    strategy: 'prefix_except_default', // Стратегия маршрутизации
  },

  css: ['~/assets/scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
