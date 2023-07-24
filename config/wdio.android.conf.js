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

config.services = ['appium'];

exports.config = config;
