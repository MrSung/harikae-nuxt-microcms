import { SITE_NAME, SITE_DESCRIPTION } from './config/siteMeta'
import dynamicRoutes from './routes/dynamicRoutes'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_DESCRIPTION || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    scss: ['~/assets/scss/_vars.scss', '~/assets/scss/_mixins.scss']
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
    '@nuxtjs/stylelint-module'
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
        directiveOnly: true
        // Default image must be in the static folder
        // defaultImage: '/images/default-image.jpg',
      }
    ]
  ],
  server: {
    port: 3333
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
    extend(config, ctx) {}
  },
  /*
   ** Generate configuration
   */
  generate: {
    routes: dynamicRoutes,
    fallback: true
  }
}
