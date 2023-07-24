const allure = require('allure-commandline');
const { config } = require('./wdio.shared.conf');
const path = require('path');

config.runner = 'local';

config.port = 4723;

config.specs = [path.join(process.cwd(), './test/specs/ios/ios-todo-item*.js')];

config.capabilities = [
  {
    'appium:platformName': 'ios',
    'appium:platformVersion': '14.5',
    'appium:deviceName': 'iPhone 12',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
  },
];

config.onComplete = function () {
  const reportError = new Error('Could not generate Allure report');
  const generation = allure(['generate', 'allure-results', '--clean']);
  return new Promise((resolve, reject) => {
    const generationTimeout = setTimeout(() => reject(reportError), 5000);

    generation.on('exit', function (exitCode) {
      clearTimeout(generationTimeout);

      if (exitCode !== 0) {
        return reject(reportError);
      }

      console.log('Allure report successfully generated');
      resolve();
    });
  });
};

config.services = ['appium'];

exports.config = config;
