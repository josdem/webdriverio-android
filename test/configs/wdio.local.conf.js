const { config } = require("../../wdio.conf")

config.baseUrl = "http://localhost"
config.port = 4723
config.services = ["appium"]

config.capabilities = [
  {
    deviceName: "Pixel_5_30",
    platformVersion: "11",
    platformName: "Android",
    app: "/home/josdem/Applications/app-debug.apk",
  },
]

exports.config = config
