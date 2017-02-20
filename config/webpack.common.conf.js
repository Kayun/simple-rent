import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackFailPlugin from 'webpack-fail-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import config from './app.conf.json';
import pkg from '../package.json';
import path from 'path';

const ROOT_PATH = path.resolve(__dirname, '../');
const MAIN_STYLE = path.resolve(ROOT_PATH, config.root, config.style);

const POSTCSS_PLUGINS = [
  require('autoprefixer')({browsers: ['last 2 versions']}),
  require('postcss-short')()
]

let axis = require('axis');
let SvgStore = require('webpack-svgstore-plugin');

const CONFIG = {
  context: path.resolve(ROOT_PATH, config.root),

  entry: `./${config.main}`,

  output: {
    path: path.resolve(ROOT_PATH, config.outDir),
    filename: 'assets/[name].bundle.js',
    publicPath: '/'
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
      'src/app',
      'src/styles'
    ],
    extensions: ['', '.js', '.ts']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['babel', 'ts']
      },
      {
        test: /\.pug$/, loader: `pug-ng-html?basedir=${ROOT_PATH}/src/helpers/templates`
      },
      {
        test: /\.json$/, loader: 'json'
      }
    ]
  },

  stylus: {
    use: [axis()]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),

    new CleanWebpackPlugin([config.outDir], {
      root: ROOT_PATH
    }),

    new HtmlWebpackPlugin({
      title: `Simple Rent`,
      template: config.index,
      chunksSortMode: 'dependency'
    }),

    new SvgStore({
      prefix: 'icon-'
    }),

    new CopyWebpackPlugin([
      {from: `${ROOT_PATH}/${config.root}/lang`, to: 'lang'}
    ]),

    webpackFailPlugin
  ]
}

export {
  ROOT_PATH,
  CONFIG,
  POSTCSS_PLUGINS,
  MAIN_STYLE
}
