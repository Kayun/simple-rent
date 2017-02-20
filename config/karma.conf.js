require('babel-core/register');
var path = require('path');
var appConfig = require('./app.conf.json');
var devServer = require('./dev.conf.json').devServer;
var webpackConfig = require('./webpack.test.conf').default;

module.exports = function(config) {
  config.set({
    basePath: path.resolve(__dirname, '../'),
    frameworks: ['jasmine'],
    files: [
      { pattern: `./${appConfig.root}/${appConfig.test}`, watched: false }
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-sourcemap-loader'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
      require('karma-mocha-reporter'),
      require('karma-webpack')
    ],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: './public/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'html' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact:true }
      }
    },
    preprocessors: {
      [`./${appConfig.root}/${appConfig.test}`]: ['webpack', 'sourcemap', 'coverage']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    },
    port: devServer.port + 10,
    autoWatch: true,
    browsers: ['PhantomJS'],
    colors: true,
    logLevel: config.LOG_INFO
  });
};
