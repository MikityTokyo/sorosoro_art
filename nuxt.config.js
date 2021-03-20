import colors from 'vuetify/es5/util/colors'
import getRoutes from './utils/getRoutes'

export default {
  googleAnalytics: {
    id: 'UA-176126545-1',
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - そろそろ美術の話を...',
    title: 'アートテラー・とに～のそろそろ美術の話を...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'アートテラー・とに～がアートに関わる方をゲストにお迎えしてトークする不定期配信のPodcast番組です。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'アート,美術,ポッドキャスト,Podcast',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'アートテラー・とに～のそろそろ美術の話を...',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '	https://sorosoro-art.vercel.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'アートテラー・とに～のそろそろ美術の話を...',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'アートテラー・とに～がアートに関わる方をゲストにお迎えしてトークする不定期配信のPodcast番組です。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '	https://sorosoro-art.vercel.app/og_image.png',
      },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@sorosoro_art' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: 'https://sorosoro-art.vercel.app/',
    routes() {
      return getRoutes()
    },
  },
}
