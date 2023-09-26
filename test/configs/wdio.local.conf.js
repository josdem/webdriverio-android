const { config } = require("../../wdio.conf")

config.baseUrl = "http://localhost"
config.port = 4723
config.services = ["appium"]

config.capabilities = [
  {
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_6_API_33",
    "appium:platformVersion": "13",
    "appium:platformName": "Android",
    "appium:app": "https://github.com/josdem/android-launcher/releases/download/v1.6/app-debug.apk",
  },
]

exports.config = config
