const webpack = require('webpack')

const commonPaths = require('./paths')

const docker = process.env.RUNNING_IN_DOCKER === 'true'

const devServer = {
  contentBase: commonPaths.outputPath,
  compress: true,
  hot: true,
  historyApiFallback: true,
  publicPath: '/'
}

const dockerDevServer = {
  contentBase: commonPaths.outputPath,
  compress: true,
  hot: true,
  historyApiFallback: true,
  publicPath: '/',

  // additional changes for docker and fqdn
  disableHostCheck: true,
  host: '0.0.0.0',
  public: 'battle-simulator.local.wmt.com:443'
}

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: docker ? dockerDevServer : devServer,
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
