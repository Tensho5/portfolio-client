module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Maxime Leclerc - Full stack web developer"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#ff5252" },
  /*
  ** i18n middleware
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Stylus import
  */
  css: ["~/assets/stylus/app.styl"],
  /*
   ** Plugins
   */
  plugins: ["~/plugins/vuetify.js", "~/plugins/i18n.js",  "~/plugins/scroll.js"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Build vendor
    */
    vendor: ["vuetify", "axios", "vue-i18n"],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
