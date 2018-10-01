// see https://github.com/angular/angular-cli/pull/7020

const baseConfig = require('./protractor.conf.js').config;

exports.config = Object.assign(baseConfig, {
  'capabilities': {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
      ],
    },
  },
});
