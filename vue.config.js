module.exports = {
  publicPath: "MOUDA",
  devServer: {
    proxy: {
      '/B551182' : {
        "target" : 'http://apis.data.go.kr',
        "changeOrigin" : true,
      },
    }    
  }
}
