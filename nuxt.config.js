import {
  SITE_LANG,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
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

const { API_BASE_URL, API_KEY } = process.env

export default {
  mode: 'universal',
  /*
   ** Dotenv
   ** Doc: https://github.com/nuxt-community/dotenv-module
   */
  env: {
    API_BASE_URL,
    API_KEY,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: SITE_LANG,
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: `${SITE_NAME} | %s`,
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
      // OGP
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://harikae-co.com/' },
      { hid: 'og:title', property: 'og:title', content: SITE_NAME },
      {
        hid: 'og:description',
        property: 'og:description',
        content: SITE_DESCRIPTION,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: OG_IMAGE,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
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
      {
        name: 'theme-color',
        content: '#2b3278',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
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
  ],
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
