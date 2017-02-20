import webpack from 'webpack';
import { CONFIG } from './webpack.common.conf';
import devConfig from './webpack.development.conf';
import merge from 'webpack-merge';

CONFIG.plugins.splice(1, 1);

let config = merge.smart(CONFIG, devConfig);
config.cache = true;

export default config;
