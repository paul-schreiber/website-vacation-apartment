import * as dotenv from 'dotenv'
dotenv.config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website-ferienwohnung',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    friendlyCaptchaKey: process.env.FRIENDLY_CAPTCHA_SITE_KEY,
    emailJsPublicKey: process.env.EMAIL_JS_PUBLIC_KEY,
    emailJsServiceId: process.env.EMAIL_JS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAIL_JS_TEMPLATE_ID,
    mapImageURL: process.env.APPLE_MAPS_SNAPSHOT_URL
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/font.scss',
    '~assets/scss/margin.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function (config, { isDev, isClient }) {

      config.node = {

        fs: "empty"
      };
    }
  },
}
