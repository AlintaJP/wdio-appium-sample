const allure = require('allure-commandline');
const { config } = require('./wdio.shared.conf');
const path = require('path');

config.runner = 'local';

config.port = 4723;

config.specs = [
  path.join(process.cwd(), './test/specs/android/delete-note*.js'),
];

config.capabilities = [
  {
    'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel 4',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true,
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
