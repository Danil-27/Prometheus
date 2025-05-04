import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  vite: {
    plugins: [svgLoader()]
  },

  plugins: ['~/plugins/v-mask.client.ts'],

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
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      title: 'Прометей',
      meta: [
        {
          name: 'description',
          content:
            'Прометей — студия интерьерного дизайна с 14-летним опытом. Полный спектр услуг: от концепции до реализации с 3D-визуализацией и надзором.'
        },

        // Open Graph
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Прометей'
        },
        {
          property: 'og:title',
          content:
            'Полный спектр услуг по дизайну интерьера: от концепции до реализации.'
        },
        {
          property: 'og:description',
          content:
            'Прометей — студия интерьерного дизайна с 14-летним опытом. Полный спектр услуг: от концепции до реализации с 3D-визуализацией и надзором.'
        },

        // {
        //   property: 'og:url',
        //   content: 'http://localhost:3000/'
        // },
        {
          property: 'og:locale',
          content: 'ru_RU'
        },
        {
          property: 'og:image',
          content:
            'https://i0.wp.com/www.escapereview.be/wp-content/uploads/2022/01/2.jpg?fit=1200%2C630&ssl=1'
        },
        {
          property: 'og:image:width',
          content: '968'
        },
        {
          property: 'og:image:height',
          content: '504'
        }
      ],
      link: [
        { rel: 'icon', href: '/favicon/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest'
        }
      ]
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
