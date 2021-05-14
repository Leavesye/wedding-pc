export default {
  mode: 'universal',
  router: {
    base: '/' //此为根目录，如果有具体目录需求按实际情况写,
    //linkActiveClass:''
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'WATABE华德培海外婚礼',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // {
      //   src:
      //     'https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=vIRKexmYnjoOWjF8hLNPlXkWxKdzAd26'
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    'assets/scss/index.scss',
    'assets/scss/helper.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/vue-swiper.js', ssr: false },
    { src: '@/plugins/tongji.js', ssr: false },
    { src: '@/plugins/vue-waterfall.js', ssr: false },
    '~/plugins/axios',
    '~/plugins/btns',
    '~/plugins/fangda'
    // { src: '~/plugins/common.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
