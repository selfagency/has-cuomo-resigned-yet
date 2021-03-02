const title = 'Has Cuomo Resigned Yet?'
const desc = 'Tracking whether New York Governor Andrew Cuomo has yet resigned'
const img = 'https://cuomoresign.b-cdn.net/cuomo.jpg'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    status: process.env.STATUS || 'No.'
  },

  googleFonts: {
    display: 'swap',
    families: {
      Fraunces: {
        wght: [900]
      }
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: title,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: desc
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: desc
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: img
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: desc
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: img
      }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  seo: {
    baseUrl: 'https://hascuomoresignedyet.com',
    canonical: 'auto',
    isForcedTrailingSlash: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~node_modules/vue2-animate/dist/vue2-animate.css', '~node_modules/animate.css/animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/google-fonts', 'nuxt-seo'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
