const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000,
    hints: 'error',
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith('jpg')
    },
  },
}
