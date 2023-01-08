const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public',
  },
  devtool: 'nosources-source-map',
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
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
}
