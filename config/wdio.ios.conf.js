const { config } = require('./wdio.shared.conf');
const path = require('path');

config.runner = 'local';

config.port = 4723;

config.specs = ['./test/specs/ios/ios-todo-item*.js'];

config.capabilities = [
  {
    'appium:platformName': 'ios',
    'appium:platformVersion': '14.5',
    'appium:deviceName': 'iPhone 12',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
  },
];

config.services = ['appium'];

exports.config = config;
