const { config } = require("../../wdio.conf")

config.baseUrl = "http://localhost"
config.port = 4723
config.services = ["appium"]

config.capabilities = [
  {
    deviceName: "Pixel_6_33",
    platformVersion: "13",
    platformName: "Android",
    app: "https://github.com/josdem/android-launcher/releases/download/v1.1/app-debug.apk",
  },
]

exports.config = config
