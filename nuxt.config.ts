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
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Прометей — студия интерьерного дизайна с 14-летним опытом. Полный спектр услуг: от концепции до реализации с 3D-визуализацией и надзором.'
        },

        // Open Graph
        // {
        //   property: 'og:url',
        //   content: 'http://localhost:3000/'
        // },
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
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Прометей — студия интерьерного дизайна'
        },
        {
          name: 'twitter:description',
          content:
            '14 лет опыта. Уникальные интерьеры. Концепция, визуализация, документация.'
        },
        {
          name: 'twitter:image',
          content:
            'https://i0.wp.com/www.escapereview.be/wp-content/uploads/2022/01/2.jpg?fit=1200%2C630&ssl=1'
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
  css: ['~/assets/scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
