const { config } = require("../../wdio.conf")

config.user = process.env.SAUCE_USERNAME
config.key = process.env.SAUCE_ACCESS_KEY
config.baseUrl = process.env.SAUCE_URL

config.services = ["sauce"]

config.capabilities = [
  {
    deviceName: "Google Pixel 3 GoogleAPI Emulator",
    platformVersion: "10.0",
    platformName: "Android",
    app: "https://github.com/josdem/android-launcher/releases/download/v1.1/app-debug.apk",
  },
]

exports.config = config
