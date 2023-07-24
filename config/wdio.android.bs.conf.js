require('dotenv').config();
const path = require('path');
const { config } = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
  path.join(process.cwd(), './test/specs/android/delete-note*.js'),
];

config.capabilities = [
  {
    platformName: 'android',
    'appium:platformVersion': '10.0',
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://f3b0ad231ab0775ad7e917d66d0c26e2fb3575a3',
    'appium:autoGrantPermissions': true,
  },
];

config.services = ['browserstack'];

exports.config = config;
