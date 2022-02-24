const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const miniCssPlugin = new MiniCssExtractPlugin()

const htmlPlugin = new HtmlWebPackPlugin({
  template: '/public/index.html',
  filename: './index.html',
})

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Public path is necessary to be able to use multiple paths e.g /foo/bar/:doeId
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // localIdentName is needed to be able to work with styles.css files
              modules: { localIdentName: '[local]___[hash:base64:5]' },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      _components: path.resolve(__dirname, 'src/components'),
      _assets: path.resolve(__dirname, 'src/assets'),
      _views: path.resolve(__dirname, 'src/views'),
      _routes: path.resolve(__dirname, 'src/routes'),
      _utils: path.resolve(__dirname, 'src/utils'),
      _hooks: path.resolve(__dirname, 'src/hooks'),
      _services: path.resolve(__dirname, 'src/services'),
      _store: path.resolve(__dirname, 'src/store'),
      _providers: path.resolve(__dirname, 'src/providers'),
    },
  },
  plugins: [htmlPlugin, miniCssPlugin],
}
