const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  
  */
  head: { 
    title: 'Frases y palabras, BONITAS, hermosas. WOW para entrar YA',
    meta: [
      {charset: 'utf-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'google-site-verification', content:'SrSUFdHtTglhOqBwIskDEKO7uUP3DBkkHfG9u6xPdNI'},
      {name:'msvalidate.01', content:'E417579D3C3A49920ACD27DB11EDB7E5'},
      {name:"keywords", content:"Las frases bonitas son para dedicar"},
      { hid: 'description', name: 'description', content:"LAS MEJORES frases bonitas PARA tus amigos.❤ y A TU NOVIO ✅ ❤, tambien palabras para CUANQUIER pareja,❤ ✅te encantara.✅❤" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    // script: [
    //   {src:'https://www.googletagmanager.com/gtag/js?id=UA-122100902-2' ,  innerHTML: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(" js ", new Date()); gtag(" config ", " UA-122100902-2 ");', type: 'text/javascript' },
    //   {},
    // ],
    htmlAttrs: {
      lang:'es'
    },
    
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
    // 'assets/css.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],
  
  /*
  ** Nuxt.js modules
  */
 modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
