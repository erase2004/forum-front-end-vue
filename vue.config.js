module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Restaurant Forum'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/forum-front-end-vue/'
    : '/'
}
