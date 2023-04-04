module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/commmon',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },

}
