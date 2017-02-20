import { mapDir, devServer } from './app.conf.json';
import { POSTCSS_PLUGINS, MAIN_STYLE } from './webpack.common.conf';

const { host: HOST, port: PORT } = devServer;

export default {

  output: {
    filename: 'assets/scripts/[name].bundle.js?hash=[hash]',
    chunkFilename: 'assets/scripts/[id].chunk.js?hash=[hash]',
    sourceMapFilename: `${mapDir}/[file].map`,
    publicPath: `http://${HOST}:${PORT}/`
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: true,
    host: HOST,
    port: PORT
  },

  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=10000&name=[path][name].[ext]?hash=[hash:20]'
      },
      {
        test: /\.styl$/,
        include: MAIN_STYLE,
        loaders: [ 'style', 'css?sourceMap', 'postcss?sourceMap', `stylus?sourceMap` ]
      },
      {
        test: /\.styl$/,
        exclude: MAIN_STYLE,
        loaders: [ 'raw', 'postcss?sourceMap', `stylus?sourceMap` ]
      }
    ]
  },

  postcss: function () {
    return POSTCSS_PLUGINS;
  }
};
