const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  
  */
  head: { 
    title: 'Frases bonitas y palabras hermosas y lindas para 【 whatsapp 】',
    meta: [
      {charset: 'utf-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'google-site-verification', content:'SrSUFdHtTglhOqBwIskDEKO7uUP3DBkkHfG9u6xPdNI'},
      {name:'msvalidate.01', content:'E417579D3C3A49920ACD27DB11EDB7E5'},
      {name:"keywords", content:"Las frases bonitas son para dedicar"},
      { hid: 'description', name: 'description', content:"las mejores frases bonitas hermosas y lindas para tus amigos.❤ para tu novio ✅ para whatsapp y facebook ❤, también palabras para cualquier pareja, ✅" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: ' https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { type: ' text/javascript '  , innerHTML: 'if ( localStorage.controlcookie > 0 ){ document.getElementById( " cookie1 " ).style.display = " none " } '},
      // {innerHTML: " if(localStorage.controlcookie>0){ document.getElementById('cookie1').style.display = 'none'; }" , type:'text/javascript'},
    ],
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
