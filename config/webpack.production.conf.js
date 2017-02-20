import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { POSTCSS_PLUGINS, MAIN_STYLE } from './webpack.common.conf';
import { mapDir } from './app.conf.json';

export default {
  output: {
    filename: 'assets/scripts/[name].bundle.[chunkhash].min.js',
    chunkFilename: 'scripts/assets/[id].chunk.[chunkhash].js',
    sourceMapFilename: `${mapDir}/[file].map`,
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: `url?limit=10000&name=[path][name].[hash:20].[ext]!image-webpack`
      },
      {
        test: /\.styl$/,
        include: MAIN_STYLE,
        loader: ExtractTextPlugin.extract('style', `css?sourceMap!postcss?sourceMap!stylus?sourceMap`)
      },
      {
        test: /\.styl$/,
        exclude: MAIN_STYLE,
        loaders: ['raw', 'postcss?sourceMap', `stylus?sourceMap`]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('assets/styles/styles.[hash].min.css')
  ],

  postcss: function () {
    return POSTCSS_PLUGINS.concat([
      require('cssnano')(),
      require('postcss-discard-comments')()
    ]);
  },
};

