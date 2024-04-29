const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pocket/' : '/',
  outputDir: 'dist',
  filenameHashing: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'pocket';
        return args;
      });
  }
}