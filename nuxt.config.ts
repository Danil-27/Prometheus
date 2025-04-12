import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: false },

  vite: {
    plugins: [svgLoader()]
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext'
      }
    }
  },

  eslint: {},

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-viewport',
    'nuxt-intersection-observer',
    'nuxt-swiper'
  ],
  image: {
    provider: 'ipx',
    domains: [],
    dir: 'public',
    format: ['webp']
  },
  app: {
    head: {
      title: 'Мое приложение',
      meta: [
        { name: 'description', content: 'Основное описание моего приложения' },
        { property: 'og:title', content: 'Заголовок для Open Graph' }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        dir: 'ltr'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        dir: 'ltr'
      }
    ],
    defaultLocale: 'ru', // Основной язык русский
    strategy: 'prefix_except_default' // Стратегия маршрутизации
  },

  css: ['~/assets/scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
