import {
  SITE_LANG,
  SITE_NAME,
  SITE_PROFILE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_URL_PROD,
} from './config/siteMeta'
import {
  OG_IMAGE,
  FAVICON_16,
  FAVICON_32,
  FAVICON_48,
  FAVICON_64,
  APPLE_TOUCH_ICON,
} from './config/icons'
import dynamicRoutes from './routes/dynamicRoutes'

require('dotenv').config()

const { API_BASE_URL, API_KEY, GA_TRACKING_ID } = process.env

export default {
  mode: 'universal',
  /*
   ** Dotenv
   ** Doc: https://github.com/nuxt-community/dotenv-module
   */
  env: {
    API_BASE_URL,
    API_KEY,
    GA_TRACKING_ID,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: SITE_LANG,
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: `${SITE_NAME} | %s | ${SITE_PROFILE}`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: SITE_DESCRIPTION || '',
      },
      { hid: 'keywords', name: 'keywords', content: SITE_KEYWORDS },
      // Icons
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: FAVICON_16,
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: FAVICON_32,
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: FAVICON_48,
      },
      {
        rel: 'icon',
        sizes: '64x64',
        type: 'image/png',
        href: FAVICON_64,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: APPLE_TOUCH_ICON,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//polyfill.io/v3/polyfill.min.js?features=MutationObserver',
      },
      { src: '/script.js' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/minireset.css'],
  /*
   ** Global styles resources
   */
  styleResources: {
    scss: ['~/assets/scss/_vars.scss', '~/assets/scss/_mixins.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/swiper.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: GA_TRACKING_ID,
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/AlekseyPleshkov/nuxt-social-meta
    [
      'nuxt-social-meta',
      {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL_PROD,
        img: OG_IMAGE,
        locale: 'ja_JP',
        themeColor: '#2b3278',
      },
    ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/paulgv/nuxt-vuex-router-sync
    'nuxt-vuex-router-sync',
    // Doc: https://github.com/fukuiretu/nuxt-user-agent
    'nuxt-user-agent',
    // Doc: https://www.npmjs.com/package/nuxt-lazy-load/v/latest
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        directiveOnly: true,
        // Default image must be in the static folder
        // defaultImage: '/images/default-image.jpg',
      },
    ],
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap', // Always declare the sitemap module at end of array
  ],
  sitemap: {
    hostname: SITE_URL_PROD,
    routes: async () => {
      const dynamicRoutesArray = await dynamicRoutes()
      return dynamicRoutesArray.map((obj) => obj.route)
    },
  },
  server: {
    port: 3456,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' },
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Generate configuration
   */
  generate: {
    routes: dynamicRoutes,
    fallback: true,
  },
}
