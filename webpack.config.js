const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    about: './src/scripts/about.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../', },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              }
            },
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              esModule: false
            }
          },
          {
            loader: "image-webpack-loader",
            options: {}
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      favicon: 'src/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.html',
      filename: 'about.html',
      favicon: 'src/images/favicon.ico'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
