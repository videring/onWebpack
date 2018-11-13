var path = require('path')
var webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index1: [path.resolve(__dirname, './src/test.js'),path.resolve(__dirname, './src/test3.js')],
    index2: [path.resolve(__dirname, './src/test2.js'),path.resolve(__dirname, './src/test3.js')],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
      minimize: false,
      runtimeChunk: { 
        name: "runtime"
      },
      splitChunks:{
          chunks: "all",
          minSize: 0,
          name: 'common',
          minChunks: 1
      }
  },
  plugins: [
      new BundleAnalyzerPlugin()
  ]
}