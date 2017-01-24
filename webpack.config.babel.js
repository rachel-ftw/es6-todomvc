const webpackValidator = require('webpack-validator')
const {resolve} = require('path')

module.exports = (env) => {
  const config = {
    context: resolve('src'), // This is where all webpack-able files come from.
    entry: './bootstrap.js', // This is where Webpack will start to bundle from
    output: {
      path: resolve('dist'), // put the output in this folder
      filename: 'bundle.js', // output called bundle
      publicPath: '/dist/', // the bundle is in the dist folder, not '/'
    },
    devtool: env.prod ? 'source-map': 'eval', // Source maps for debugging but it will include the maps inline in minified code, for production use 'source-map' 
  }

  return webpackValidator(config)
}