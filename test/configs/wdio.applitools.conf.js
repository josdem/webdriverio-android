const { config } = require("../../wdio.conf")

config.baseUrl = "http://localhost"
config.port = 4723
config.services = ["appium"]

config.capabilities = [
  {
    deviceName: "Pixel_6_API_33",
    platformVersion: "13",
    platformName: "Android",
    app: "/home/josdem/Applications/app-debug.apk",
  },
]

exports.config = config
