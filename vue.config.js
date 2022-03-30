module.exports = {
  publicPath: '/mtest',
  outputDir: './docs',
  devServer: {
    proxy: {
      '/B551182' : {
        "target" : 'http://apis.data.go.kr',
        "changeOrigin" : true,
      },
    }    
  }
}
