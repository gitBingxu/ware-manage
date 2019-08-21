// const webpack = require('webpack')

// module.exports = {
//   // assetsDir: "static",
//   devServer: {
//     open: true,
//     port: 8000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8888',
//         ws: true,
//         changeOrigin: true
//       }
//     }
//   },
//   configureWebpack: {
//     // 增加一个plugins
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery'
//       })
//     ],
//     externals: {
//       vue: 'Vue',
//       'vue-router': 'VueRouter',
//       vuex: 'Vuex',
//       'element-ui': 'ELEMENT',
//       axios: 'axios',
//       echarts: 'echarts',
//       clipboard: 'clipboard'
//     }
//   },
//   css: {
//     loaderOptions: {
//       stylus: {
//         'resolve url': true
//       }
//     }
//   }
// }
