const { config } = require("../../wdio.conf")

config.baseUrl = "http://localhost"
config.port = 4723
config.services = ["appium"]

config.capabilities = [
  {
    "platformName": "Android",
    "appium:options": {
      automationName: "UiAutomator2",
      deviceName: "Pixel_6_API_33",
      platformVersion: "13",
      app: "https://github.com/josdem/android-launcher/releases/download/v1.6/app-debug.apk"
    }
  },
]

exports.config = config
