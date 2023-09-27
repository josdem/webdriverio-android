const { config } = require("../../wdio.conf")

config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY
config.baseUrl = process.env.SAUCE_URL

config.services = ["sauce"]

config.capabilities = [
  {
    "platformName": "Android",
    "appium:options": {
      automationName: "UiAutomator2",
      deviceName: "Android GoogleAPI Emulator",
      platformVersion: "13.0",
      app: "https://github.com/josdem/android-launcher/releases/download/v1.6/app-debug.apk",
    },
    "sauce:options": {
      appiumVersion: '2.0.0',
      build: '100',
      name: 'launcher test',
    },
  },
]

exports.config = config
