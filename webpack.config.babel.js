import { CONFIG } from './config/webpack.common.conf';
import devConfig from './config/webpack.development.conf';
import prodConfig from './config/webpack.production.conf';
import merge from 'webpack-merge';

const ENV = process.env.NODE_ENV || 'development';
let config;

console.info(`Run "${ENV}" config`);

switch (ENV) {
  case 'development':
    config = merge.smart(CONFIG, devConfig);
    break;

  case 'production':
    config = merge.smart(CONFIG, prodConfig);
    break;
}

export default config;

