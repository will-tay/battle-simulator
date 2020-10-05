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
  public: 'mf-file.local.asset-flow.com:443'
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
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              }
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
